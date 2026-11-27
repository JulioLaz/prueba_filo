/*
 * tools/pruebas/resumen_final.mjs — prueba el resumen final de un tema con examen.
 *
 * Simula el progreso del alumno y comprueba que resumen_tema.html:
 *  - con alguna actividad por debajo del 60%: muestra los ejes tapados y qué falta;
 *  - con 60% o más en todas: muestra intro, los ejes con ejemplo y las preguntas para practicar;
 *  - se puede copiar para la carpeta; sin errores JS;
 *  - admin en vista Docente lo ve todo; en vista "Como alumno", tapado.
 * Guarda captura y PDF en tools/pruebas/salida/.
 *
 * Uso:  node tools/pruebas/resumen_final.mjs <tema>
 * Versión: v1.1.0 (2026-11-27) — usa las actividadesRequeridas del banco (temas con actividades propias)
 * v1.0.0 (2026-11-19)
 */
import fs from 'fs';
import path from 'path';
import { abrirNavegador, servirRepo, controles, temaDeArgs, BASE, SALIDA, REPO } from './comun.mjs';

/** firebase.js falso con el progreso indicado (docs) y si el usuario es admin. */
const stub = (docs, admin) => `export const auth={currentUser:{uid:'alu1'}}; export const db={};
export function onAuthStateChanged(a,cb){ setTimeout(()=>cb(a.currentUser),10); return ()=>{}; }
export function collection(d,n){ return {n}; } export function where(c,o,v){ return {c,v}; } export function query(col,...f){ return {...col,f}; }
const D=${JSON.stringify(docs)};
export async function getDocs(q){ return { docs: D.filter(r=>q.f.every(f=>r[f.c]===f.v)).map(r=>({data:()=>r})) }; }
export async function isCurrentUserAdmin(){ return ${admin}; }`;

async function main_resumen_final() {
  const T = temaDeArgs('node tools/pruebas/resumen_final.mjs <tema>');
  const banco = JSON.parse(fs.readFileSync(path.join(REPO, 'themes', T, 'examen.json'), 'utf8'));
  const N = banco.ejes.length;
  const { check, fin } = controles();
  const b = await abrirNavegador();
  const ctx = await b.newContext({ viewport: { width: 420, height: 900 }, permissions: ['clipboard-read', 'clipboard-write'] });

  const abrir = async (docs, admin = false, vistaAlumno = false) => {
    const page = await ctx.newPage();
    const errores = [];
    page.on('pageerror', (e) => errores.push(e.message));
    await page.addInitScript((v) => localStorage.setItem('admin.vistaAlumno', v ? '1' : '0'), vistaAlumno);
    await servirRepo(page, { firebaseJs: stub(docs, admin) });
    await page.goto(`${BASE}/resumen_tema.html?tema=${T}`);
    await page.waitForTimeout(800);
    const r = await page.evaluate(() => ({
      avance: document.getElementById('avance').innerText,
      ejes: document.querySelectorAll('section.eje').length,
      tapados: document.querySelectorAll('.tapado').length,
      ejemplos: document.querySelectorAll('.ejemplo').length,
      practica: document.querySelectorAll('.practica li').length,
      intro: !!document.querySelector('.intro'),
      copiarDeshabilitado: document.getElementById('btnCopiar').disabled,
    }));
    return { page, errores, ...r };
  };
  const P = (act, sc) => ({ uid: 'alu1', moduleId: T, lessonId: act, score: sc, bestScore: sc });
  const acts = banco.actividadesRequeridas || ['quiz', 'caza', 'video', 'cruci', 'material', 'mapa'];

  let r = await abrir(acts.map((a, i) => P(a, i < 3 ? 100 : 40)));
  check(`actividades en 40%: ${N} ejes tapados y dice qué falta`, r.ejes === N && r.tapados === N && r.ejemplos === 0 && r.copiarDeshabilitado && r.avance.includes('Te falta'), r.avance.split('\n')[0]);
  await r.page.close();

  r = await abrir(acts.map((a) => P(a, 60)));
  check(`todas en 60%: resumen completo (intro, ${N} ejes con ejemplo, ${banco.practica.length} para practicar)`,
    r.ejes === N && r.tapados === 0 && r.ejemplos === N && r.practica === banco.practica.length && r.intro && !r.copiarDeshabilitado, r.avance.split('\n')[0]);
  await r.page.click('#btnCopiar');
  await r.page.waitForTimeout(300);
  const texto = await r.page.evaluate(() => navigator.clipboard.readText());
  check('copiar: texto con ejes, palabras clave y práctica', texto.startsWith('RESUMEN FINAL') && (texto.match(/Palabras clave:/g) || []).length === N && texto.includes('PARA PRACTICAR'), `${texto.split(/\s+/).length} palabras`);
  await r.page.screenshot({ path: `${SALIDA}/resumen_${T}.png`, fullPage: true });
  await r.page.emulateMedia({ media: 'print' });
  await r.page.pdf({ path: `${SALIDA}/resumen_${T}.pdf`, format: 'A4', margin: { top: '15mm', bottom: '15mm', left: '15mm', right: '15mm' } });
  check('sin errores JS', r.errores.length === 0, JSON.stringify(r.errores));
  await r.page.close();

  r = await abrir([], true);
  check('admin en vista Docente: todo visible sin avance', r.tapados === 0 && r.ejemplos === N);
  await r.page.close();
  r = await abrir([], true, true);
  check('admin "Como alumno": tapado', r.tapados === N);
  await r.page.close();
  await b.close();
  process.exit(fin());
}

main_resumen_final();
