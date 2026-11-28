/*
 * tools/limpieza/limpiar_progreso.cjs — revisa y limpia datos viejos de Firestore.
 *
 * Se corre en la PC del docente, desde la raíz del repo, con la clave de administrador
 * del proyecto (archivo *firebase-adminsdk*.json en la raíz, que no se sube a git).
 * Usa firebase-admin de functions/node_modules (ya instalado para publicar las funciones).
 *
 *   node tools/limpieza/limpiar_progreso.cjs
 *       Solo LEE (no borra nada): cuántos documentos hay por año en cada colección y
 *       qué registros de progreso_temas son de temas o actividades que ya no existen.
 *
 *   node tools/limpieza/limpiar_progreso.cjs --borrar-obsoletos
 *       Borra los registros de progreso_temas de temas o actividades que ya no existen
 *       (muestra la lista y pide escribir SI antes de borrar).
 *
 *   node tools/limpieza/limpiar_progreso.cjs --borrar-anteriores-a 2026
 *       Borra lo anterior a ese año en progreso_temas, sesiones, examenes y examenes_estado
 *       (nunca toca users: los alumnos no pierden su cuenta). Pide escribir SI.
 *
 *   node tools/limpieza/limpiar_progreso.cjs --reiniciar linea_tiempo explorar
 *       Reinicia una actividad de un tema para todos los alumnos: puntaje, récord y lista de
 *       leídos/encontrados vuelven a 0 (conserva intentos y tiempo; no borra el documento).
 *       Muestra la lista y pide escribir SI. Hace falta cuando cambia cómo se aprueba una
 *       actividad, porque las reglas no dejan que el alumno baje su récord.
 *
 *   node tools/limpieza/limpiar_progreso.cjs --borrar-alumno <id> [<id> ...]
 *       Borra la cuenta de ingreso y TODOS los datos de esos alumnos (cuentas repetidas).
 *       El id se copia del panel «Progreso de alumnos» del inicio. Guarda antes un respaldo
 *       de sus notas y pide escribir SI.
 *
 *   node tools/limpieza/limpiar_progreso.cjs --fin-de-ciclo "5° A"     (o: --fin-de-ciclo todos)
 *       Fin del ciclo lectivo: borra cuenta y datos de todos los alumnos de ese curso (o de
 *       todos los cursos). Antes guarda el respaldo de notas en tools/limpieza/respaldos/
 *       (CSV para Excel; esa carpeta no se sube a git) y pide escribir SI.
 *       Nunca borra la cuenta del docente. Lo mismo se puede hacer desde el panel de la app.
 *
 * Versión: v1.2.0 (2026-11-28) — --borrar-alumno y --fin-de-ciclo (usa functions/alumnos.js)
 * v1.1.0 (2026-11-27) — --reiniciar; las actividades de la línea del tiempo
 *   (explorar, ordenar, simultaneo, termometro) ya no se toman como obsoletas
 * v1.0.0 (2026-11-24)
 */
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const REPO = path.resolve(__dirname, '../..');
const admin = require(path.join(REPO, 'functions/node_modules/firebase-admin'));
const { borrarAlumno, documentosDelAlumno, respaldoCSV } = require(path.join(REPO, 'functions/alumnos.js'));
const RESPALDOS = process.env.RESPALDOS_DIR || path.join(__dirname, 'respaldos');   // RESPALDOS_DIR: solo para las pruebas

const COLECCIONES = ['progreso_temas', 'sesiones', 'examenes', 'examenes_estado', 'users'];
const BORRABLES = ['progreso_temas', 'sesiones', 'examenes', 'examenes_estado'];
const ACTIVIDADES = ['quiz', 'caza', 'video', 'cruci', 'material', 'mapa', 'examen', 'dialogo',
  'explorar', 'ordenar', 'simultaneo', 'termometro'];
const CAMPOS_FECHA = ['updatedAt', 'lastActivityAt', 'timestamp', 'fin', 'actualizado', 'lastLogin', 'createdAt', 'inicioMs', 'ts'];

/** Temas actuales: los id de las tarjetas de js/main.js (sin las líneas comentadas). */
function temasActuales() {
  const src = fs.readFileSync(path.join(REPO, 'js/main.js'), 'utf8')
    .split('\n').filter((l) => !l.trim().startsWith('//')).join('\n');
  return new Set([...src.matchAll(/\bid:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]));
}

/** Fecha más representativa del documento (o null). */
function fechaDe(d) {
  for (const c of CAMPOS_FECHA) {
    const v = d[c];
    if (v == null) continue;
    if (typeof v.toDate === 'function') return v.toDate();
    if (typeof v === 'number') return new Date(v);
    if (typeof v === 'string' && !isNaN(Date.parse(v))) return new Date(v);
  }
  return null;
}

function iniciarAdmin() {
  // Prueba local: con el emulador de Firestore no hace falta clave
  if (process.env.FIRESTORE_EMULATOR_HOST) { admin.initializeApp({ projectId: process.env.GCLOUD_PROJECT || 'demo-filo' }); return admin.firestore(); }
  const clave = fs.readdirSync(REPO).find((f) => /firebase-adminsdk.*\.json$/.test(f));
  if (!clave && !process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    console.error('No encontré la clave de administrador (*firebase-adminsdk*.json) en la raíz del repo.');
    process.exit(2);
  }
  admin.initializeApp({ credential: clave ? admin.credential.cert(require(path.join(REPO, clave))) : admin.credential.applicationDefault() });
  return admin.firestore();
}

const preguntar = (texto) => new Promise((res) => {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  rl.question(texto, (r) => { rl.close(); res(r.trim()); });
});

async function borrar(db, docs) {
  for (let i = 0; i < docs.length; i += 400) {
    const lote = db.batch();
    docs.slice(i, i + 400).forEach((d) => lote.delete(d.ref));
    await lote.commit();
  }
}

const normalizar = (s) => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '').toLowerCase();

/** Guarda el respaldo de notas (CSV) de esos alumnos y devuelve la ruta. */
async function guardarRespaldo(db, alumnos, etiqueta) {
  const progreso = [];
  for (const a of alumnos) (await db.collection('progreso_temas').where('uid', '==', a.id).get()).docs.forEach((d) => progreso.push(d.data()));
  fs.mkdirSync(RESPALDOS, { recursive: true });
  const archivo = path.join(RESPALDOS, `respaldo_${new Date().toISOString().slice(0, 10)}_${normalizar(etiqueta).replace(/[^a-z0-9]/g, '') || 'alumnos'}.csv`);
  fs.writeFileSync(archivo, respaldoCSV(alumnos, progreso));
  return archivo;
}

/** --borrar-alumno <id...> y --fin-de-ciclo <curso|todos>: respaldo, lista, SI y borrado. */
async function borrarAlumnos(db, alumnos, etiqueta) {
  if (!alumnos.length) { console.log('No hay alumnos para borrar.'); return; }
  console.log(`=== Borrar ${alumnos.length} alumnos (${etiqueta}): cuenta de ingreso y todos sus datos ===`);
  for (const a of alumnos) {
    const n = (await documentosDelAlumno(db, a.id)).length;
    console.log(`- ${a.id} | ${a.apellidos || ''}, ${a.nombres || ''} | ${a.curso || ''} | ${n} documentos`);
  }
  const archivo = await guardarRespaldo(db, alumnos, etiqueta);
  console.log(`\nRespaldo de notas guardado en: ${path.relative(REPO, archivo)}`);
  const r = await preguntar(`\nSe van a borrar ${alumnos.length} alumnos (no se puede deshacer). Escribí SI para confirmar: `);
  if (r !== 'SI') { console.log('Cancelado: no se borró nada.'); return; }
  let ok = 0;
  for (const a of alumnos) {
    try { await borrarAlumno(db, admin.auth(), a.id); ok++; } catch (e) { console.log(`  No se borró ${a.id}: ${e.message}`); }
  }
  console.log(`Listo: se borraron ${ok} de ${alumnos.length} alumnos.`);
}

async function alumnosPorId(db, ids) {
  const lista = [];
  for (const id of ids) {
    const d = await db.collection('users').doc(id).get();
    if (!d.exists) console.log(`- ${id}: no existe (se omite)`);
    else if (d.data().role !== 'student') console.log(`- ${id}: no es alumno (se omite)`);
    else lista.push({ id, ...d.data() });
  }
  return lista;
}

async function alumnosDelCurso(db, curso) {
  const todos = (await db.collection('users').where('role', '==', 'student').get()).docs.map((d) => ({ id: d.id, ...d.data() }));
  if (normalizar(curso) === 'todos') return todos;
  const elegidos = todos.filter((a) => normalizar(a.curso) === normalizar(curso));
  if (!elegidos.length) console.log(`No hay alumnos en «${curso}». Cursos: ${[...new Set(todos.map((a) => a.curso || '(sin curso)'))].sort().join(' · ')}`);
  return elegidos;
}

/** --reiniciar <tema> <actividad>: puntaje, récord y lista a 0 (con confirmación). */
async function reiniciarActividad(db, tema, actividad) {
  if (actividad === 'examen') { console.error('Las notas del examen no se reinician con esta opción.'); process.exit(2); }
  const docs = (await db.collection('progreso_temas').where('moduleId', '==', tema).where('lessonId', '==', actividad).get()).docs;
  console.log(`=== Reiniciar «${actividad}» de «${tema}»: ${docs.length} alumnos ===`);
  docs.forEach((d) => { const x = d.data(); console.log(`- ${d.id} | récord: ${x.bestScore ?? x.score ?? 0}% | lista: ${(x.foundConcepts || []).length}`); });
  if (!docs.length) { console.log('No hay nada para reiniciar.'); return; }
  const r = await preguntar(`\nSe van a reiniciar ${docs.length} registros (puntaje y récord a 0). Escribí SI para confirmar: `);
  if (r !== 'SI') { console.log('Cancelado: no se cambió nada.'); return; }
  const hoy = new Date().toISOString().slice(0, 10);
  for (let i = 0; i < docs.length; i += 400) {
    const lote = db.batch();
    docs.slice(i, i + 400).forEach((d) => lote.update(d.ref, {
      score: 0, bestScore: 0, lastScore: 0, status: 'in_progress', foundConcepts: [],
      metadata: { reiniciado: hoy, updatedReason: 'reinicio_docente' },
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    }));
    await lote.commit();
  }
  console.log(`Listo: se reiniciaron ${docs.length} registros.`);
}

async function main_limpiar_progreso() {
  const args = process.argv.slice(2);
  const iRein = args.indexOf('--reiniciar');
  if (iRein >= 0) {
    const [tema, actividad] = args.slice(iRein + 1, iRein + 3);
    if (!tema || !actividad) { console.error('Indicá tema y actividad: --reiniciar linea_tiempo explorar'); process.exit(2); }
    return reiniciarActividad(iniciarAdmin(), tema, actividad);
  }
  const iAlu = args.indexOf('--borrar-alumno');
  if (iAlu >= 0) {
    const ids = args.slice(iAlu + 1).filter((a) => !a.startsWith('--'));
    if (!ids.length) { console.error('Indicá el id: --borrar-alumno <id>'); process.exit(2); }
    const db = iniciarAdmin();
    return borrarAlumnos(db, await alumnosPorId(db, ids), ids.length === 1 ? ids[0] : `${ids.length}_alumnos`);
  }
  const iFin = args.indexOf('--fin-de-ciclo');
  if (iFin >= 0) {
    const curso = args[iFin + 1];
    if (!curso) { console.error('Indicá el curso: --fin-de-ciclo "5° A"   (o: --fin-de-ciclo todos)'); process.exit(2); }
    const db = iniciarAdmin();
    return borrarAlumnos(db, await alumnosDelCurso(db, curso), curso);
  }
  const borrarObsoletos = args.includes('--borrar-obsoletos');
  const iAnio = args.indexOf('--borrar-anteriores-a');
  const anioCorte = iAnio >= 0 ? Number(args[iAnio + 1]) : null;
  if (iAnio >= 0 && !(anioCorte > 2000)) { console.error('Indicá el año: --borrar-anteriores-a 2026'); process.exit(2); }

  const db = iniciarAdmin();
  const temas = temasActuales();
  const datos = {};
  for (const c of COLECCIONES) datos[c] = (await db.collection(c).get()).docs;

  // 1) Cantidad por año en cada colección
  console.log('=== Documentos por año ===');
  for (const c of COLECCIONES) {
    const porAnio = {};
    datos[c].forEach((d) => { const f = fechaDe(d.data()); const k = f ? f.getFullYear() : 'sin fecha'; porAnio[k] = (porAnio[k] || 0) + 1; });
    console.log(`${c}: ${datos[c].length} → ${Object.entries(porAnio).sort().map(([k, v]) => `${k}: ${v}`).join(' · ')}`);
  }

  // 2) Registros de progreso de temas o actividades que ya no existen
  const obsoletos = datos.progreso_temas.filter((d) => {
    const { moduleId, lessonId } = d.data();
    return !temas.has(moduleId) || !ACTIVIDADES.includes(lessonId);
  });
  console.log(`\n=== Progreso de temas o actividades que ya no existen: ${obsoletos.length} ===`);
  obsoletos.forEach((d) => {
    const x = d.data(); const f = fechaDe(x);
    console.log(`- ${d.id} | tema: ${x.moduleId} | actividad: ${x.lessonId ?? '(ninguna)'} | ${f ? f.toISOString().slice(0, 10) : 'sin fecha'}`);
  });

  // 3) Borrado (solo con la opción y confirmando)
  let aBorrar = [];
  if (borrarObsoletos) aBorrar = obsoletos;
  if (anioCorte) {
    aBorrar = BORRABLES.flatMap((c) => datos[c].filter((d) => { const f = fechaDe(d.data()); return f && f.getFullYear() < anioCorte; }));
    console.log(`\n=== Anteriores a ${anioCorte} (sin users): ${aBorrar.length} ===`);
    aBorrar.forEach((d) => { const f = fechaDe(d.data()); console.log(`- ${d.ref.path} | ${f.toISOString().slice(0, 10)}`); });
  }
  if (!borrarObsoletos && !anioCorte) {
    console.log('\nNo se borró nada (solo lectura).');
    return;
  }
  if (!aBorrar.length) { console.log('\nNo hay nada para borrar.'); return; }
  const r = await preguntar(`\nSe van a borrar ${aBorrar.length} documentos. Escribí SI para confirmar: `);
  if (r !== 'SI') { console.log('Cancelado: no se borró nada.'); return; }
  await borrar(db, aBorrar);
  console.log(`Listo: se borraron ${aBorrar.length} documentos.`);
}

main_limpiar_progreso().then(() => process.exit(0)).catch((e) => { console.error('Error:', e.message); process.exit(1); });
