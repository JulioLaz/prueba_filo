/*
 * tools/pruebas/borrar_alumnos.cjs — prueba el borrado de alumnos contra los emuladores
 * (Firestore + Auth), sin tocar datos reales.
 *
 * Revisa:
 *  - Cloud Function adminBorrarAlumnos (functions/index.js): solo el docente; lista inválida o de
 *    más de 50; borra cuenta de ingreso, perfil y documentos del alumno en progreso_temas,
 *    examenes, examenes_estado y sesiones; no toca a los demás alumnos; nunca borra perfiles que
 *    no son "student" ni la propia cuenta;
 *  - respaldoCSV (functions/alumnos.js);
 *  - script tools/limpieza/limpiar_progreso.cjs: --borrar-alumno y --fin-de-ciclo (respaldo en una
 *    carpeta temporal con RESPALDOS_DIR, cancelar con algo distinto de SI, borrar con SI).
 *
 * Uso:
 *   1) en una terminal:  cd tools/pruebas && npm run emulador
 *   2) en otra:          node tools/pruebas/borrar_alumnos.cjs
 * El email del docente se lee de functions/index.js (no se escribe en este archivo).
 *
 * Versión: v1.0.0 (2026-11-28)
 */
process.env.FIRESTORE_EMULATOR_HOST = '127.0.0.1:8080';
process.env.FIREBASE_AUTH_EMULATOR_HOST = '127.0.0.1:9099';
process.env.GCLOUD_PROJECT = 'demo-filo';
const fs = require('fs');
const path = require('path');
const os = require('os');
const { spawnSync } = require('child_process');
const Module = require('module');

const REPO = path.resolve(__dirname, '../..');
const cargaOriginal = Module._load;
Module._load = function (req, ...a) {
  if (req === 'firebase-functions/params') return { defineSecret: (n) => ({ value: () => 'k-' + n }) };
  if (req === 'firebase-functions/logger') return { info() {}, warn() {}, error() {} };
  return cargaOriginal.call(this, req, ...a);
};
const fns = require(path.join(REPO, 'functions/index.js'));
const req = Module.createRequire(path.join(REPO, 'functions/index.js'));
const db = req('firebase-admin/firestore').getFirestore();
const authAdmin = req('firebase-admin/auth').getAuth();
const { respaldoCSV } = require(path.join(REPO, 'functions/alumnos.js'));

const ADMIN_EMAIL = (fs.readFileSync(path.join(REPO, 'functions/index.js'), 'utf8').match(/const ADMIN_EMAIL = "([^"]+)"/) || [])[1];
const docente = { uid: 'docente01', token: { email: ADMIN_EMAIL, email_verified: true } };
const alumnoAuth = { uid: 'alumnoA1', token: { email: 'a1@prueba.test', email_verified: true } };
const RESPALDOS_DIR = fs.mkdtempSync(path.join(os.tmpdir(), 'filo_respaldos_'));   // nunca la carpeta real
const llamar = (auth, data) => fns.adminBorrarAlumnos.run({ auth, data });

let fallas = 0;
const check = (nombre, ok, detalle = '') => { console.log(ok ? '✅' : '❌', nombre, detalle); if (!ok) fallas++; };
const existe = async (ruta) => (await db.doc(ruta).get()).exists;
const cuentaExiste = (uid) => authAdmin.getUser(uid).then(() => true, () => false);

async function limpiarEmulador() {
  for (const c of ['users', 'progreso_temas', 'examenes', 'examenes_estado', 'sesiones']) {
    const docs = (await db.collection(c).get()).docs;
    for (const d of docs) await d.ref.delete();
  }
  const { users } = await authAdmin.listUsers();
  for (const u of users) await authAdmin.deleteUser(u.uid);
}

async function alumno(uid, curso, apellidos, conCuenta = true) {
  if (conCuenta) await authAdmin.createUser({ uid, email: `${uid.toLowerCase()}@prueba.test`, password: 'secreta123' });
  await db.doc(`users/${uid}`).set({ role: 'student', nombres: 'Nombre', apellidos, curso, email: `${uid.toLowerCase()}@prueba.test` });
  await db.doc(`progreso_temas/${uid}_etica_quiz`).set({ uid, moduleId: 'etica', lessonId: 'quiz', score: 70, bestScore: 80, attempts: 2, timeSpentSeconds: 600 });
  await db.doc(`progreso_temas/${uid}_etica_examen`).set({ uid, moduleId: 'etica', lessonId: 'examen', score: 75 });
  await db.doc(`examenes/ex_${uid}`).set({ uid, tema: 'etica' });
  await db.doc(`examenes_estado/${uid}_etica`).set({ uid, mejorNota: 7.5 });
  await db.doc(`sesiones/${uid}_1700000000000`).set({ uid, tipo: 'login' });
}

async function sembrar() {
  await limpiarEmulador();
  await alumno('alumnoA1', '5° A', 'Pérez');
  await alumno('alumnoA2', '5° A', 'Pérez');
  await alumno('alumnoB1', '5° B', 'Gómez');
  await alumno('alumnoSinCuenta', '5° B', 'Díaz', false);
  await authAdmin.createUser({ uid: 'docente01', email: 'docente@prueba.test' });
  await db.doc('users/docente01').set({ role: 'admin', nombres: 'Docente', curso: 'Docente' });
  await authAdmin.createUser({ uid: 'otroAdmin1', email: 'otro@prueba.test' });
  await db.doc('users/otroAdmin1').set({ role: 'admin', nombres: 'Otro', curso: 'Docente' });
}

const datosDe = async (uid) => [
  `users/${uid}`, `progreso_temas/${uid}_etica_quiz`, `progreso_temas/${uid}_etica_examen`,
  `examenes/ex_${uid}`, `examenes_estado/${uid}_etica`, `sesiones/${uid}_1700000000000`,
].filter(Boolean).reduce(async (n, r) => (await n) + (await existe(r) ? 1 : 0), Promise.resolve(0));

function script(args, respuesta) {
  return spawnSync('node', [path.join(REPO, 'tools/limpieza/limpiar_progreso.cjs'), ...args], {
    input: respuesta + '\n', encoding: 'utf8', env: { ...process.env, RESPALDOS_DIR }, timeout: 60000,
  });
}

async function main_borrar_alumnos() {
  if (!ADMIN_EMAIL) { console.error('No encontré ADMIN_EMAIL en functions/index.js'); process.exit(2); }
  await sembrar();

  // --- Cloud Function
  const error = (p) => p.then(() => 'sin error', (e) => e.code);
  check('un alumno no puede borrar', await error(llamar(alumnoAuth, { uids: ['alumnoA2'] })) === 'permission-denied');
  check('sin sesión no puede borrar', await error(llamar(undefined, { uids: ['alumnoA2'] })) === 'permission-denied');
  check('lista vacía: inválida', await error(llamar(docente, { uids: [] })) === 'invalid-argument');
  check('más de 50: inválida', await error(llamar(docente, { uids: Array.from({ length: 51 }, (_, i) => `alumno${100 + i}`) })) === 'invalid-argument');
  check('id con caracteres raros: inválido', await error(llamar(docente, { uids: ['../users'] })) === 'invalid-argument');

  const r = await llamar(docente, { uids: ['alumnoA2', 'docente01', 'otroAdmin1', 'noExiste99', 'alumnoSinCuenta'] });
  const borrados = r.borrados.map((b) => b.uid).sort();
  check('borra los alumnos pedidos', JSON.stringify(borrados) === '["alumnoA2","alumnoSinCuenta"]', JSON.stringify(r));
  check('borra los 6 documentos del alumno', (await datosDe('alumnoA2')) === 0 && r.borrados.find((b) => b.uid === 'alumnoA2').documentos === 6);
  check('borra su cuenta de ingreso', !(await cuentaExiste('alumnoA2')));
  check('alumno sin cuenta de ingreso: borra sus datos igual', (await datosDe('alumnoSinCuenta')) === 0 && r.borrados.find((b) => b.uid === 'alumnoSinCuenta').cuenta === false);
  check('no borra la cuenta de quien pide el borrado', await existe('users/docente01') && await cuentaExiste('docente01') &&
    r.errores.some((e) => e.uid === 'docente01' && /tu propia cuenta/.test(e.motivo)));
  check('no borra perfiles que no son alumnos', await existe('users/otroAdmin1') && await cuentaExiste('otroAdmin1') &&
    r.errores.some((e) => e.uid === 'otroAdmin1' && /no es un alumno/.test(e.motivo)));
  check('id inexistente: error, sin cortar el resto', r.errores.some((e) => e.uid === 'noExiste99'));
  check('no toca a los demás alumnos', (await datosDe('alumnoA1')) === 6 && (await datosDe('alumnoB1')) === 6 && await cuentaExiste('alumnoA1'));
  const propia = await llamar({ ...docente, uid: 'alumnoA1' }, { uids: ['alumnoA1'] });
  check('nunca borra la propia cuenta', propia.borrados.length === 0 && (await datosDe('alumnoA1')) === 6);

  // --- respaldo CSV
  const csv = respaldoCSV([{ id: 'x1', apellidos: 'Pérez; hijo', nombres: 'Ana', curso: '5° A', email: 'x@y' }, { id: 'x2', apellidos: 'Sin', nombres: 'Datos' }],
    [{ uid: 'x1', moduleId: 'etica', lessonId: 'quiz', score: 70, bestScore: 80, attempts: 2, timeSpentSeconds: 600 }]);
  const lineas = csv.replace(/^﻿/, '').trim().split('\r\n');
  check('respaldo CSV: encabezado, mejor puntaje y alumno sin datos', lineas.length === 3 && lineas[0].startsWith('id;apellidos;nombres;curso') &&
    lineas[1] === 'x1;"Pérez; hijo";Ana;5° A;x@y;etica;quiz;80;2;10' && lineas[2].startsWith('x2;Sin;Datos'), JSON.stringify(lineas));

  // --- script de la PC
  await sembrar();
  const cancelado = script(['--fin-de-ciclo', '5° A'], 'no');
  check('script --fin-de-ciclo: lista el curso y cancela sin SI', /Borrar 2 alumnos/.test(cancelado.stdout) && /Cancelado/.test(cancelado.stdout) &&
    (await datosDe('alumnoA1')) === 6, cancelado.stdout.slice(-200) + cancelado.stderr);
  const respaldos = fs.readdirSync(RESPALDOS_DIR);
  check('script: guarda el respaldo antes de preguntar', /Respaldo de notas guardado en:/.test(cancelado.stdout) && respaldos.length === 1 &&
    /^respaldo_\d{4}-\d{2}-\d{2}_5a\.csv$/.test(respaldos[0]) &&
    fs.readFileSync(path.join(RESPALDOS_DIR, respaldos[0]), 'utf8').includes('alumnoA1;Pérez;Nombre;5° A'), respaldos.join(', '));
  const finCiclo = script(['--fin-de-ciclo', '5°a'], 'SI');
  check('script --fin-de-ciclo con SI: borra el curso (sin importar tildes ni espacios)', /se borraron 2 de 2/.test(finCiclo.stdout) &&
    (await datosDe('alumnoA1')) === 0 && (await datosDe('alumnoA2')) === 0 && (await datosDe('alumnoB1')) === 6, finCiclo.stdout.slice(-200) + finCiclo.stderr);
  const uno = script(['--borrar-alumno', 'alumnoB1', 'docente01'], 'SI');
  check('script --borrar-alumno: borra ese alumno y omite al docente', /no es alumno \(se omite\)/.test(uno.stdout) && /se borraron 1 de 1/.test(uno.stdout) &&
    (await datosDe('alumnoB1')) === 0 && !(await cuentaExiste('alumnoB1')) && await existe('users/docente01'), uno.stdout.slice(-300) + uno.stderr);
  const otro = script(['--fin-de-ciclo', '6° Z'], 'SI');
  check('script: curso inexistente muestra los cursos y no borra', /No hay alumnos en «6° Z»\. Cursos:/.test(otro.stdout), otro.stdout.slice(-200));

  fs.rmSync(RESPALDOS_DIR, { recursive: true, force: true });   // carpeta temporal de la prueba
  await limpiarEmulador();
  console.log(fallas ? `\n${fallas} FALLA(S)` : '\nTODO OK');
  process.exit(fallas ? 1 : 0);
}

main_borrar_alumnos().catch((e) => { console.error(e); process.exit(1); });
