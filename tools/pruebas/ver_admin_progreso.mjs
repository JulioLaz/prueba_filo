/*
 * tools/pruebas/ver_admin_progreso.mjs — tarjeta «Progreso de alumnos» del inicio (solo admin).
 *
 * Carga index.html con Firebase falso (sesión de admin, 3 alumnos y progreso en temas de las
 * tres unidades) y revisa:
 *  - nombres de los temas con su unidad («I - Línea del tiempo») y en el orden de la app;
 *  - actividades de la línea de tiempo en el orden de ACTIVIDADES_TEMA;
 *  - selector de temas: elegir solo la Unidad II, y luego un solo tema;
 *  - selector de alumnos: todos por defecto, buscar y dejar uno solo;
 *  - id de cada alumno visible en la tabla;
 *  - borrar (Cloud Function simulada): cancelar no borra; «Borrar» en una fila borra ese alumno;
 *    «Fin del ciclo lectivo» descarga el respaldo CSV del curso y borra sus alumnos.
 * Guarda una captura en tools/pruebas/salida/admin_progreso.png.
 *
 *   node tools/pruebas/ver_admin_progreso.mjs
 *
 * Versión: v1.1.0 (2026-11-28) — borrar alumnos y fin del ciclo lectivo
 * v1.0.0 (2026-11-28)
 */
import fs from 'fs';
import path from 'path';
import { abrirNavegador, servirRepo, controles, BASE, SALIDA, STUB_FIRESTORE, STUB_FUNCTIONS } from './comun.mjs';

const ALUMNOS = [
  { id: 'k3PzA9mQ1', role: 'student', nombres: 'Ana', apellidos: 'Pérez', curso: '5° A', lastLogin: '2026-11-20' },
  { id: 'Tq7rW2xL5', role: 'student', nombres: 'Ana', apellidos: 'Pérez', curso: '5° A', lastLogin: '2026-03-02' },
  { id: 'b8NcE4yH6', role: 'student', nombres: 'Luis', apellidos: 'Gómez', curso: '5° B', lastLogin: '2026-11-25' },
];
const PROGRESO = [
  { uid: 'k3PzA9mQ1', moduleId: 'etica_aristoteles', lessonId: 'quiz', score: 90 },
  { uid: 'k3PzA9mQ1', moduleId: 'linea_tiempo', lessonId: 'termometro', score: 70 },
  { uid: 'k3PzA9mQ1', moduleId: 'linea_tiempo', lessonId: 'material', score: 100 },
  { uid: 'k3PzA9mQ1', moduleId: 'linea_tiempo', lessonId: 'explorar', score: 40 },
  { uid: 'b8NcE4yH6', moduleId: 'sartre', lessonId: 'mapa', score: 50 },
  { uid: 'b8NcE4yH6', moduleId: 'marx_alienacion', lessonId: 'quiz', score: 80 },
  { uid: 'b8NcE4yH6', moduleId: 'origen', lessonId: 'caza', score: 60 },
  { uid: 'b8NcE4yH6', moduleId: 'dialogo_aristoteles', lessonId: 'dialogo', score: 60 },
];

const FIREBASE_ADMIN = `export const app={}; export const auth={currentUser:{uid:'admin'}}; export const db={};
export async function isCurrentUserAdmin(){ return true; }
export function collection(d,n){ return {n}; } export function where(c,o,v){ return {c,v}; } export function query(col,...f){ return {...col,f}; }
export function onAuthStateChanged(a,cb){ setTimeout(()=>cb(a.currentUser),10); return ()=>{}; }
export async function getDocs(){ return { docs: [], forEach(){} }; }`;
const FIRESTORE_ADMIN = STUB_FIRESTORE.replace('export async function getDocs(){ return { docs: [], forEach(){} }; }',
  `const DATOS={users:${JSON.stringify(ALUMNOS)},progreso_temas:${JSON.stringify(PROGRESO)}};
export async function getDocs(q){ const docs=(DATOS[q.n]||[]).map(x=>({id:x.id||x.uid+'_'+x.moduleId+'_'+x.lessonId,data:()=>x})); return { docs, forEach(f){docs.forEach(f);} }; }`);
const AUTH_ADMIN = `export function getAuth(){ return { currentUser:{uid:'admin'} }; }
export function onAuthStateChanged(a,cb){ setTimeout(()=>cb(a.currentUser),10); return ()=>{}; }
export function setPersistence(){} export const browserLocalPersistence={};`;
// Cloud Function simulada: anota la llamada y responde que borró todos los pedidos
const FUNCTIONS_ADMIN = `export function getFunctions(){ return {}; }
export function httpsCallable(f, nombre){ return async (data) => { (window.__llamadas ||= []).push({ nombre, data });
  return { data: { borrados: data.uids.map((uid) => ({ uid, documentos: 3, cuenta: true })), errores: [] } }; }; }`;
const gstatic = (url) => (url.includes('firestore') ? FIRESTORE_ADMIN : url.includes('functions') ? FUNCTIONS_ADMIN
  : url.includes('firebase-app') ? 'export function initializeApp(){ return {}; } export function getApp(){ return {}; }' : AUTH_ADMIN);

async function main_ver_admin_progreso() {
  const { check, fin } = controles();
  const nav = await abrirNavegador();
  const page = await nav.newPage({ viewport: { width: 1280, height: 1000 }, acceptDownloads: true });
  const errores = [];
  page.on('pageerror', (e) => errores.push(e.message));
  await servirRepo(page, { firebaseJs: FIREBASE_ADMIN, gstatic });
  await page.goto(`${BASE}/index.html`);
  await page.waitForTimeout(1500);
  check('la tarjeta se ve para el admin', await page.locator('#adminDashboardCard').isVisible());
  await page.click('#adminLoadBtn');
  await page.waitForSelector('#adminTableContainer', { state: 'visible' });

  const cabecera = () => page.$$eval('#adminTableHeaders th', (ths) => ths.map((t) => t.textContent.replace(/\s+/g, ' ').trim()));
  const temas = (await cabecera()).filter((t) => /GENERAL$/.test(t)).map((t) => t.replace(/ GENERAL$/, ''));
  check('temas con su unidad y en el orden de la app', JSON.stringify(temas) === JSON.stringify(
    ['I - Línea del tiempo', 'I - Origen de la Filosofía', 'II - Marx: Trabajo y Alienación', 'II - Jean-Paul Sartre',
      'III - Ética de Aristóteles', 'Diálogo con Aristoteles']), JSON.stringify(temas));
  const cab = await cabecera();
  const i = cab.indexOf('I - Línea del tiempo GENERAL');
  check('actividades de la línea en el orden del hub', JSON.stringify(cab.slice(i + 1, i + 4)) === '["MATERIAL","EXPLORAR","TERMOMETRO"]', JSON.stringify(cab.slice(i + 1, i + 4)));
  check('todos los alumnos por defecto', (await page.$$('#adminTableBody tr')).length === 3 && (await page.textContent('#adminAlumnosResumen')) === 'Alumnos: todos');
  const ids = await page.$$eval('#adminTableBody .admin-id', (b) => b.map((x) => x.textContent));
  check('cada alumno muestra su id', JSON.stringify(ids) === '["id b8NcE4","id k3PzA9","id Tq7rW2"]', JSON.stringify(ids));

  // Temas: solo la Unidad II
  await page.click('#adminTemasResumen');
  await page.uncheck('#adminTemasLista input[data-todos]');
  await page.check('#adminTemasLista input[data-grupo="UNIDAD_II"]');
  const soloU2 = (await cabecera()).filter((t) => /GENERAL$/.test(t));
  check('elegir solo la Unidad II', soloU2.length === 2 && soloU2.every((t) => t.startsWith('II - ')) && (await page.textContent('#adminTemasResumen')) === 'Temas: Unidad II', `${JSON.stringify(soloU2)} / ${await page.textContent('#adminTemasResumen')}`);
  // Un solo tema
  await page.uncheck('#adminTemasLista input[data-tema="marx_alienacion"]');
  check('elegir un solo tema', (await page.textContent('#adminTemasResumen')) === 'Tema: II - Jean-Paul Sartre');
  await page.check('#adminTemasLista input[data-todos]');
  await page.click('#adminTemasResumen');

  // Alumnos: buscar y dejar uno
  await page.click('#adminAlumnosResumen');
  await page.fill('#adminAlumnosLista input[data-buscar]', 'tq7rw');
  const visibles = await page.$$eval('#adminAlumnosLista label[data-texto]', (ls) => ls.filter((l) => l.style.display !== 'none').length);
  check('buscar alumno por id', visibles === 1, `${visibles} visibles`);
  await page.uncheck('#adminAlumnosLista input[data-todos]');
  await page.check('#adminAlumnosLista input[data-alumno="Tq7rW2xL5"]');
  const filas = await page.$$eval('#adminTableBody tr', (r) => r.length);
  check('la tabla muestra solo el alumno elegido', filas === 1 && (await page.textContent('#adminStudentCount')) === '1', `${filas} filas`);
  await page.check('#adminAlumnosLista input[data-todos]');
  await page.fill('#adminAlumnosLista input[data-buscar]', '');
  await page.locator('#adminDashboardCard').screenshot({ path: path.join(SALIDA, 'admin_progreso_alumnos.png') });
  await page.click('#adminAlumnosResumen');

  // Borrar: cancelar en el primer aviso no llama a la función
  const llamadas = () => page.evaluate(() => window.__llamadas || []);
  page.once('dialog', (d) => d.dismiss());
  await page.click('#adminTableBody .admin-borrar[data-borrar="Tq7rW2xL5"]');
  await page.waitForTimeout(300);
  check('cancelar no borra', (await llamadas()).length === 0 && (await page.$$('#adminTableBody tr')).length === 3);

  // Borrar una fila: acepta el aviso y escribe BORRAR
  const aceptar = (d) => d.accept(d.type() === 'prompt' ? 'BORRAR' : undefined);
  page.on('dialog', aceptar);
  await page.click('#adminTableBody .admin-borrar[data-borrar="Tq7rW2xL5"]');
  await page.waitForFunction(() => document.querySelectorAll('#adminTableBody tr').length === 2);
  const ll1 = await llamadas();
  check('«Borrar» en una fila borra solo ese alumno', ll1.length === 1 && ll1[0].nombre === 'adminBorrarAlumnos' && JSON.stringify(ll1[0].data.uids) === '["Tq7rW2xL5"]',
    JSON.stringify(ll1));
  check('mensaje de borrado', /Se borró a Pérez, Ana/.test(await page.textContent('#adminMensaje')));

  // Fin del ciclo lectivo: curso 5° B → respaldo y borrado
  await page.click('#adminFinCiclo summary');
  const cursos = await page.$$eval('#adminCursoSelect option', (o) => o.map((x) => x.textContent));
  check('cursos con su cantidad', JSON.stringify(cursos) === '["5° A (1 alumnos)","5° B (1 alumnos)","Todos los cursos (2 alumnos)"]', JSON.stringify(cursos));
  await page.selectOption('#adminCursoSelect', '5° B');
  const [descarga] = await Promise.all([page.waitForEvent('download'), page.click('#adminBorrarCursoBtn')]);
  const csv = fs.readFileSync(await descarga.path(), 'utf8');
  check('el respaldo del curso se descarga primero', /respaldo_\d{4}-\d{2}-\d{2}_5B\.csv/.test(descarga.suggestedFilename()) &&
    csv.includes('b8NcE4yH6;Gómez;Luis;5° B') && csv.includes('marx_alienacion;quiz;80') && !csv.includes('k3PzA9mQ1'), descarga.suggestedFilename());
  await page.waitForFunction(() => document.querySelectorAll('#adminTableBody tr').length === 1);
  const ll2 = await llamadas();
  check('borra los alumnos del curso', ll2.length === 2 && JSON.stringify(ll2[1].data.uids) === '["b8NcE4yH6"]', JSON.stringify(ll2[1]));
  check('mensaje del fin de ciclo', /se borraron 1 de 1 alumnos de 5° B/.test(await page.textContent('#adminMensaje')), await page.textContent('#adminMensaje'));
  page.off('dialog', aceptar);
  await page.locator('#adminDashboardCard').screenshot({ path: path.join(SALIDA, 'admin_progreso_fin_ciclo.png') });

  const propios = errores.filter((e) => !/does not provide an export named/.test(e));
  check('sin errores de JavaScript (fuera del Firebase falso)', propios.length === 0, JSON.stringify(propios.slice(0, 3)));
  await page.locator('#adminDashboardCard').screenshot({ path: path.join(SALIDA, 'admin_progreso.png') });
  await nav.close();
  process.exit(fin());
}

main_ver_admin_progreso();
