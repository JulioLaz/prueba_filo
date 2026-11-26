/*
 * tools/pruebas/examen_funciones.cjs — prueba las Cloud Functions del examen oral.
 *
 * Ejecuta examenEstado / examenIniciar / examenResponder de functions/index.js contra
 * el emulador de Firestore, con la IA simulada (respuestas fijas: no gasta cuota ni
 * necesita claves). El banco de preguntas se lee del repo (themes/<tema>/examen.json).
 * Comprueba: bloqueo por actividad (60% en cada una), inicio con 6 preguntas (4 ejes +
 * caso + reflexión), repregunta, IA caída, doble envío, permisos, corrección con nota,
 * récord, 2 intentos por día, abandono a los 45 min, y que cada tema con examen use
 * su propio filósofo y vocabulario.
 *
 * Requisitos (una vez):  cd functions && npm ci      cd tools/pruebas && npm install
 * Uso:
 *   1) en una terminal:  cd tools/pruebas && npm run emulador
 *   2) en otra:          node tools/pruebas/examen_funciones.cjs [tema]   (por defecto etica_aristoteles)
 * Opcional: EXAMEN_ADMIN_EMAIL=<email del admin> para probar también el acceso de admin
 * (el email no se escribe en este archivo).
 * Versión: v1.4.0 (2026-11-26) — usa las actividadesRequeridas del banco (temas con actividades
 *   propias, como linea_tiempo) y un tema sin examen tomado de temas_data.js
 * v1.3.0 (2026-11-24) — IA saturada: reintenta con espera y responde en otra vuelta (functions V8.5)
 * v1.2.0 (2026-11-24) — examenCorregir: el docente corrige un examen «Sin corregir» (functions V8.4)
 * v1.1.0 (2026-11-19) — devolución por pregunta e ideas flojas que vuelven (functions V8.3)
 */
process.env.FIRESTORE_EMULATOR_HOST = '127.0.0.1:8080';
process.env.GCLOUD_PROJECT = 'demo-filo';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const Module = require('module');

const REPO = path.resolve(__dirname, '../..');
// Secretos y logger falsos: la IA está simulada abajo con global.fetch
const cargaOriginal = Module._load;
Module._load = function (req, ...a) {
  if (req === 'firebase-functions/params') return { defineSecret: (n) => ({ value: () => 'k-' + n }) };
  if (req === 'firebase-functions/logger') return { info() {}, warn() {}, error() {} };
  return cargaOriginal.call(this, req, ...a);
};
const fns = require(path.join(REPO, 'functions/index.js'));
// firebase-admin se resuelve desde functions/ (sus node_modules)
const { getFirestore } = Module.createRequire(path.join(REPO, 'functions/index.js'))('firebase-admin/firestore');
const db = getFirestore();

const ctx = {}; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(REPO, 'temas_data.js'), 'utf8') + '\n;globalThis.__ex = EXAMEN_CONFIG; globalThis.__top = TOPICS;', ctx);
const EXAMEN_CONFIG = ctx.__ex;
const SIN_EXAMEN = Object.keys(ctx.__top).find((t) => !EXAMEN_CONFIG[t]) || 'tema_inexistente';
const banco = (t) => JSON.parse(fs.readFileSync(path.join(REPO, 'themes', t, 'examen.json'), 'utf8'));

// ---- IA simulada: guion = próximas respuestas; si no hay, responde según el tipo de pedido
let llamadas = [];
let guion = [];
global.fetch = async (url, op) => {
  if (url.includes('examen.json')) {
    const t = (url.match(/themes\/([a-z_0-9]+)\//) || [])[1];
    return fs.existsSync(path.join(REPO, 'themes', t || '-', 'examen.json'))
      ? { ok: true, status: 200, json: async () => banco(t) } : { ok: false, status: 404 };
  }
  const body = JSON.parse(op.body);
  const sistema = url.includes('openrouter') ? body.messages[0].content : body.systemInstruction.parts[0].text;
  llamadas.push({ url, body, sistema });
  let paso = guion.shift();
  if (!paso) {
    if (sistema.includes('Respondé SOLO con JSON')) {
      const n = (sistema.match(/exactamente (\d+) elementos/) || [])[1] * 1;
      paso = { texto: JSON.stringify({ preguntas: Array.from({ length: n }, (_, i) => ({ n: i + 1, comprension: 2, vocabulario: 1, aplicacion: 2, argumentacion: 1, comentario: 'ok', logrado: 'Usaste bien un concepto.', orientacion: 'Faltó explicar el porqué con un ejemplo.' })), devolucion: 'Muy bien pensado. Repasá los conceptos clave.' }) };
    } else if (sistema.includes('el primero')) paso = { texto: 'Empecemos. ¿Qué es para vos lo <strong>bueno</strong>?' };
    else if (sistema.includes('[FIN]') && sistema.includes('respondé solamente')) paso = { texto: '[FIN]' };
    else paso = { texto: 'Entiendo. Ahora decime: ¿qué es el **hábito**?' };
  }
  if (paso.status && paso.status !== 200) return { ok: false, status: paso.status, text: async () => 'error simulado' };
  return { ok: true, status: 200, json: async () => ({ candidates: [{ content: { parts: [{ text: paso.texto }] }, finishReason: 'STOP' }], usageMetadata: {} }) };
};

const alumno = { uid: 'alu1', token: { email: 'alumna@prueba.test', email_verified: true } };
const ADMIN = process.env.EXAMEN_ADMIN_EMAIL;
const llamar = (fn, auth, data) => fns[fn].run({ auth, data });
let fallas = 0;
const check = (n, c, x = '') => { console.log(c ? '✅' : '❌', n, x); if (!c) fallas++; };
const esperarError = async (p, code) => { try { await p; return 'sin error'; } catch (e) { return e.code === code ? true : `${e.code}: ${e.message}`; } };
const fijarProgreso = (t, pares) => Promise.all(pares.map(([act, sc]) => db.doc(`progreso_temas/alu1_${t}_${act}`).set({ uid: 'alu1', moduleId: t, lessonId: act, score: sc, bestScore: sc })));
const pedir = (method, url) => new Promise((res) => { const r = require('http').request(url, { method }, (x) => { x.resume(); x.on('end', res); }); r.on('error', res); r.end(); });

async function main_examen_funciones() {
  const T = process.argv[2] || 'etica_aristoteles';
  if (!EXAMEN_CONFIG[T]) { console.error(`${T} no está en EXAMEN_CONFIG`); process.exit(2); }
  await pedir('DELETE', 'http://127.0.0.1:8080/emulator/v1/projects/demo-filo/databases/(default)/documents');
  await db.doc('users/alu1').set({ nombres: 'Ana María', apellidos: 'Pérez', curso: '6A', role: 'student', estadisticas: { tiempoTotalSegundos: 10 } });

  let s = await llamar('examenEstado', alumno, { tema: T });
  check('1) sin avance: examen bloqueado', s.habilitado === false && s.avance === 0 && s.intentosRestantes === 2 && s.cantidadPreguntas === 6);
  check('2) iniciar sin avance → failed-precondition', await esperarError(llamar('examenIniciar', alumno, { tema: T }), 'failed-precondition') === true);
  check('2b) tema sin examen → not-found', await esperarError(llamar('examenEstado', alumno, { tema: SIN_EXAMEN }), 'not-found') === true);

  // Actividades que pide el banco del tema (la caza se guarda con el alias viejo para probarlo)
  const acts = banco(T).actividadesRequeridas || ['quiz', 'caza', 'cruci', 'material', 'mapa'];
  const id = (a) => (a === 'caza' ? 'caza_conceptos' : a);
  const prom = (v) => Math.round(v.reduce((x, y) => x + y, 0) / v.length);
  const v3a = acts.map((_, i) => (i === acts.length - 1 ? 50 : 100));
  await fijarProgreso(T, acts.map((a, i) => [id(a), v3a[i]]));
  s = await llamar('examenEstado', alumno, { tema: T });
  check(`3a) promedio ${prom(v3a)}% pero ${acts.at(-1)} en 50% → bloqueado y dice qué falta`, !s.habilitado && s.avance === prom(v3a) && s.faltan.length === 1 && s.faltan[0].actividad === acts.at(-1) && s.minimoPorActividad === 60, JSON.stringify(s.faltan));
  check('3b) iniciar → failed-precondition', await esperarError(llamar('examenIniciar', alumno, { tema: T }), 'failed-precondition') === true);
  const v3 = acts.map((_, i) => [100, 100, 90, 100, 80, 60][i % 6]);
  await fijarProgreso(T, acts.map((a, i) => [id(a), v3[i]]));
  s = await llamar('examenEstado', alumno, { tema: T });
  check(`3) todas ≥ 60% (promedio ${prom(v3)}%): habilitado`, s.habilitado && s.avance === prom(v3), `avance ${s.avance}`);

  llamadas = [];
  const r1 = await llamar('examenIniciar', alumno, { tema: T });
  const ex1 = (await db.doc(`examenes/${r1.examenId}`).get()).data();
  const ejes1 = ex1.plan.preguntas.filter((p) => p.tipo === 'eje').map((p) => p.id);
  check('4) inicia: 6 preguntas (4 ejes distintos + caso + reflexión)', r1.turnos.length === 1 && r1.total === 6 && new Set(ejes1).size === 4 && ex1.plan.preguntas[4].tipo === 'caso' && ex1.plan.preguntas[5].tipo === 'reflexion' && r1.intentosRestantes === 1, ejes1.join(','));
  check(`   habla como ${EXAMEN_CONFIG[T].filosofo}, con la escena sorteada y el nombre`, llamadas[0].sistema.includes(`Sos ${EXAMEN_CONFIG[T].filosofo}`) && llamadas[0].sistema.includes(ex1.plan.apertura.texto) && llamadas[0].sistema.includes('Ana,'));
  check('   guarda nombre y curso para el docente', ex1.alumno.nombre === 'Ana María Pérez' && ex1.alumno.curso === '6A');
  const r1b = await llamar('examenIniciar', alumno, { tema: T });
  const est1 = (await db.doc(`examenes_estado/alu1_${T}`).get()).data();
  check('5) volver a iniciar retoma el mismo examen sin gastar intento', r1b.retomado && r1b.examenId === r1.examenId && est1.intentosHoy === 1);

  guion = [{ texto: '[REPREGUNTA] ¿Me das un ejemplo?' }];
  let rr = await llamar('examenResponder', alumno, { examenId: r1.examenId, respuesta: 'es ser feliz' });
  check('6) respuesta vaga → repregunta (sigue en la pregunta 1)', rr.repregunta === true && rr.paso === 0 && !rr.mensaje.includes('[REPREGUNTA]'), rr.mensaje);
  llamadas = [];
  rr = await llamar('examenResponder', alumno, { examenId: r1.examenId, respuesta: 'Porque se busca por sí misma', pegado: true });
  check('7) tras repreguntar, no repregunta otra vez y pasa a la 2', rr.paso === 1 && rr.repregunta === false && llamadas[0].sistema.includes('No repreguntes'));
  check('   markdown **x** → <strong>', rr.mensaje.includes('<strong>hábito</strong>'));

  guion = Array(100).fill({ status: 503 });
  const antes = (await db.doc(`examenes/${r1.examenId}`).get()).data();
  const e8 = await esperarError(llamar('examenResponder', alumno, { examenId: r1.examenId, respuesta: 'Se forma practicando' }), 'unavailable');
  const desp = (await db.doc(`examenes/${r1.examenId}`).get()).data();
  check('8) IA caída → unavailable, no se guarda la respuesta y se libera el bloqueo', e8 === true && desp.turnos.length === antes.turnos.length && desp.procesandoHasta === 0, e8);
  const modelosTotales = new Set(llamadas.map((l) => l.url + (l.body.model || ''))).size;
  check('   probó todos los modelos y les dio más de una vuelta', modelosTotales >= 9 && llamadas.length > modelosTotales, `${llamadas.length} llamadas, ${modelosTotales} modelos`);
  llamadas = [];
  guion = [...Array(modelosTotales).fill({ status: 503 }), { texto: '[REPREGUNTA] Ahora sí: ¿me das un ejemplo?' }];
  const t8 = Date.now();
  rr = await llamar('examenResponder', alumno, { examenId: r1.examenId, respuesta: 'Se forma practicando' });
  check('8b) todos saturados en la 1ª vuelta → espera y responde en la 2ª', rr.repregunta === true && rr.paso === 1 && Date.now() - t8 >= 3500, `${Date.now() - t8} ms`);
  check('   a OpenRouter le pide razonamiento bajo', llamadas.some((l) => l.url.includes('openrouter') && l.body.reasoning?.effort === 'low'));
  guion = [];
  await db.doc(`examenes/${r1.examenId}`).update({ procesandoHasta: Date.now() + 60000 });
  check('9) doble envío mientras procesa → aborted', await esperarError(llamar('examenResponder', alumno, { examenId: r1.examenId, respuesta: 'hola' }), 'aborted') === true);
  await db.doc(`examenes/${r1.examenId}`).update({ procesandoHasta: 0 });
  check('10) otro alumno no puede responder este examen', await esperarError(llamar('examenResponder', { uid: 'otro', token: {} }, { examenId: r1.examenId, respuesta: 'hola' }), 'permission-denied') === true);
  check('10b) respuesta vacía → invalid-argument', await esperarError(llamar('examenResponder', alumno, { examenId: r1.examenId, respuesta: ' ' }), 'invalid-argument') === true);

  for (let i = 1; i <= 4; i++) { guion = [{ texto: 'Anotado. ¿Y esto otro?' }]; rr = await llamar('examenResponder', alumno, { examenId: r1.examenId, respuesta: `Respuesta ${i + 1}` }); }
  check('11) llega a la última pregunta (6 de 6)', rr.paso === 5, `paso ${rr.paso}`);
  guion = [{ texto: '[FIN]' }, { texto: 'esto no es json' }];
  llamadas = [];
  rr = await llamar('examenResponder', alumno, { examenId: r1.examenId, respuesta: 'Mi hábito de estudiar me ayuda' });
  const fin1 = (await db.doc(`examenes/${r1.examenId}`).get()).data();
  // 6 preguntas × (2+1+2+1) = 36 de 48 puntos → nota 7,5
  check('12) última respuesta → corrige (si el 1er modelo no da JSON, usa el siguiente): nota 7,5', rr.estado === 'finalizado' && rr.resultado.nota === 7.5 && rr.resultado.aprobado && fin1.estado === 'finalizado' && llamadas.length === 3, JSON.stringify(rr.resultado));
  check(`   la corrección usa el vocabulario del tema (conceptosClave)`, llamadas.at(-1).sistema.includes(banco(T).conceptosClave.slice(0, 40)));
  check('   devolución como último turno y pegados registrados', fin1.turnos.at(-1).final === true && fin1.pegados === 1);
  const pp = rr.resultado.porPregunta || [];
  check('12b) devolución por pregunta para el alumno: 6, con pregunta, logrado, orientación y niveles',
    pp.length === 6 && pp.every((p) => p.pregunta && p.logrado && p.orientacion && p.niveles.comprension === 'logrado' && p.niveles.vocabulario === 'en_proceso') && pp[0].pregunta === '¿Qué es para vos lo bueno?',
    JSON.stringify(pp[0]));
  check('   con 6/8 en cada idea no hay ideas flojas: nada vuelve', pp.every((p) => !p.vuelve));
  const prog = (await db.doc(`progreso_temas/alu1_${T}_examen`).get()).data();
  const est2 = (await db.doc(`examenes_estado/alu1_${T}`).get()).data();
  check('13) guarda el progreso del examen (score 75, mejor nota 7,5) y libera el examen en curso', prog.score === 75 && prog.bestNota === 7.5 && prog.lessonId === 'examen' && prog.attempts === 1 && est2.enCursoId === null && est2.mejorNota === 7.5);

  const r2 = await llamar('examenIniciar', alumno, { tema: T });
  const ejes2 = (await db.doc(`examenes/${r2.examenId}`).get()).data().plan.preguntas.filter((p) => p.tipo === 'eje').map((p) => p.id);
  check('14) 2º intento: ejes distintos a los del 1º', r2.examenId !== r1.examenId && ejes2.every((e) => !ejes1.includes(e)) && r2.intentosRestantes === 0, ejes2.join(','));
  for (let i = 0; i < 5; i++) { guion = [{ texto: 'Sigamos.' }]; await llamar('examenResponder', alumno, { examenId: r2.examenId, respuesta: 'no sé' }); }
  guion = [{ texto: '[FIN]' }, ...Array(100).fill({ status: 500 })];
  rr = await llamar('examenResponder', alumno, { examenId: r2.examenId, respuesta: 'no sé' });
  check('15) corrección caída → queda "corrigiendo" sin perder respuestas', rr.estado === 'corrigiendo');
  s = await llamar('examenEstado', alumno, { tema: T });
  check('   el estado lo ofrece para retomar', s.enCurso?.estado === 'corrigiendo');
  check('15b) examenCorregir pedido por un alumno → permission-denied', await esperarError(llamar('examenCorregir', alumno, { examenId: r2.examenId }), 'permission-denied') === true);
  guion = [{ texto: JSON.stringify({ preguntas: Array.from({ length: 6 }, () => ({ comprension: 0, vocabulario: 0, aplicacion: 0, argumentacion: 0 })), devolucion: 'Tenés que estudiar más.' }) }];
  if (ADMIN) {
    // El docente corrige desde el panel (functions V8.4)
    const docente = { uid: 'adm1', token: { email: ADMIN, email_verified: true } };
    rr = await llamar('examenCorregir', docente, { examenId: r2.examenId });
    check('15c) el docente corrige el examen «Sin corregir» con examenCorregir', rr.estado === 'finalizado');
    check('   ya corregido → failed-precondition', await esperarError(llamar('examenCorregir', docente, { examenId: r2.examenId }), 'failed-precondition') === true);
  } else {
    console.log('⏭️  15c) corrección por el docente: omitida (definí EXAMEN_ADMIN_EMAIL para probarla)');
    rr = await llamar('examenResponder', alumno, { examenId: r2.examenId, corregir: true });
  }
  const prog2 = (await db.doc(`progreso_temas/alu1_${T}_examen`).get()).data();
  check('16) reintento de corrección (alumno o docente) → nota 1, no baja el récord (sigue 7,5)', rr.resultado.nota === 1 && !rr.resultado.aprobado && prog2.bestNota === 7.5 && prog2.lastNota === 1 && prog2.attempts === 2);
  const repetir = (await db.doc(`examenes_estado/alu1_${T}`).get()).data().ejesARepetir || [];
  const vuelven = rr.resultado.porPregunta.filter((p) => p.vuelve).map((p) => p.id);
  check('16b) con nota 1: las 2 ideas más flojas quedan para repetir y se marcan "vuelve"',
    repetir.length === 2 && repetir.every((id) => ejes2.includes(id)) && JSON.stringify([...vuelven].sort()) === JSON.stringify([...repetir].sort()), repetir.join(','));
  s = await llamar('examenEstado', alumno, { tema: T });
  check('   el estado devuelve la devolución por pregunta del último intento', s.ultimo?.porPregunta?.length === 6);
  check('17) 3er intento el mismo día → resource-exhausted', await esperarError(llamar('examenIniciar', alumno, { tema: T }), 'resource-exhausted') === true);
  await db.doc(`examenes_estado/alu1_${T}`).update({ dia: '2020-01-01' });
  s = await llamar('examenEstado', alumno, { tema: T });
  check('18) otro día: vuelven los 2 intentos', s.intentosRestantes === 2 && s.mejorNota === 7.5 && s.aprobado);
  const r3 = await llamar('examenIniciar', alumno, { tema: T });
  const plan3 = (await db.doc(`examenes/${r3.examenId}`).get()).data().plan.preguntas.filter((p) => p.tipo === 'eje');
  const ejes3 = plan3.map((p) => p.id);
  check('18b) 3er intento: vuelven las 2 ideas flojas (marcadas) y las otras 2 son nuevas',
    repetir.every((id) => ejes3.includes(id)) && plan3.filter((p) => p.repite).length === 2 &&
    plan3.filter((p) => !p.repite).every((p) => !ejes2.includes(p.id)) && new Set(ejes3).size === 4, ejes3.join(','));
  await db.doc(`examenes/${r3.examenId}`).update({ ultimaActividadMs: Date.now() - 50 * 60000 });
  s = await llamar('examenEstado', alumno, { tema: T });
  check('19) 50 min sin actividad → abandonado', s.enCurso === null && (await db.doc(`examenes/${r3.examenId}`).get()).data().estado === 'abandonado');

  if (ADMIN) {
    const admin = { uid: 'adm1', token: { email: ADMIN, email_verified: true } };
    s = await llamar('examenEstado', admin, { tema: T });
    const ra = await llamar('examenIniciar', admin, { tema: T });
    check('20) admin: rinde sin avance ni límite', s.habilitado && s.esAdmin && !!ra.examenId);
  } else console.log('⏭️  20) admin: omitido (definí EXAMEN_ADMIN_EMAIL para probarlo)');
  check('21) sin sesión → unauthenticated', await esperarError(llamar('examenEstado', null, { tema: T }), 'unauthenticated') === true);
  check('22) tema con caracteres raros → invalid-argument', await esperarError(llamar('examenEstado', alumno, { tema: '../x' }), 'invalid-argument') === true);

  // Los demás temas con examen: cada uno con su filósofo y su vocabulario
  for (const [t, cfg] of Object.entries(EXAMEN_CONFIG)) {
    if (t === T) continue;
    await fijarProgreso(t, [...new Set(['quiz', 'caza', 'cruci', 'material', 'mapa', 'video', ...(banco(t).actividadesRequeridas || [])])].map((a) => [a, 100]));
    llamadas = [];
    const r = await llamar('examenIniciar', alumno, { tema: t });
    const ajeno = cfg.filosofo !== 'Aristóteles' && /aristotélic/i.test(llamadas[0].sistema);
    for (let i = 0; i < 5; i++) { guion = [{ texto: 'Sigamos.' }]; await llamar('examenResponder', alumno, { examenId: r.examenId, respuesta: 'Respuesta' }); }
    guion = [{ texto: '[FIN]' }];
    llamadas = [];
    const rf = await llamar('examenResponder', alumno, { examenId: r.examenId, respuesta: 'Respuesta final' });
    check(`${t}: examen con ${cfg.filosofo} y corrección con su vocabulario`, r.total === 6 && !ajeno && rf.estado === 'finalizado' && llamadas.at(-1).sistema.includes(banco(t).conceptosClave.slice(0, 40)));
  }
  console.log(fallas ? `\n${fallas} FALLA(S)` : '\nTODO OK');
  process.exit(fallas ? 1 : 0);
}

main_examen_funciones().catch((e) => { console.error(e); process.exit(1); });
