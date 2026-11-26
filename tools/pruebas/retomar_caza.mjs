/*
 * tools/pruebas/retomar_caza.mjs — prueba que la caza de conceptos retome donde se dejó (motor v1.4).
 *
 *  A) Misma pestaña: completa el párrafo 1 y 2 conceptos del 2, recarga la página:
 *     abre en el párrafo 2 con esos 2 marcados; con ◀ el párrafo 1 aparece completo.
 *  B) Otro dispositivo (avance solo en Firebase): párrafos 1 a 3 completos y 1 concepto
 *     del 4 → abre en el párrafo 4 con 1 marcado y el porcentaje no baja.
 *  C) Todo completo en Firebase → al entrar aparece el resumen final con 100%.
 *
 * Uso:  node tools/pruebas/retomar_caza.mjs <tema>     (tarda ~1 minuto)
 * Versión: v1.0.0 (2026-11-26)
 */
import { createRequire } from 'module';
import { abrirNavegador, servirRepo, controles, temaDeArgs, BASE, SALIDA, STUB_FIREBASE, REPO } from './comun.mjs';

const require = createRequire(import.meta.url);
const ESPERA_CARGA = 12000;

// Claves "<párrafo>:<término normalizado>" como las arma el motor
function clavesDelTema(T) {
  global.window = {};
  require(`${REPO}/themes/${T}/conceptos.js`);
  const norm = (s) => s.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/\s+/g, ' ').trim();
  return window.CONCEPT_HUNT_CONFIG.levels.map((lv, i) => lv.concepts.map((c) => `${i}:${norm(c.term)}`));
}

// Firebase falso cuyo getDoc devuelve el avance indicado (como si viniera de otro dispositivo)
const stubConAvance = (claves) => STUB_FIREBASE.replace(
  'export async function getDoc(){ return { exists:()=>false, data:()=>({}) }; }',
  `export async function getDoc(){ return { exists:()=>true, data:()=>({ foundConcepts: ${JSON.stringify(claves)} }) }; }`);

async function abrir(b, T, firebaseJs) {
  const page = await b.newPage({ viewport: { width: 420, height: 900 } });
  const errores = [];
  page.on('pageerror', (e) => errores.push(e.message));
  page.on('dialog', (d) => d.dismiss());
  await page.addInitScript(() => { Object.defineProperty(window, 'webkitSpeechRecognition', { value: undefined }); delete window.SpeechRecognition; });
  await servirRepo(page, firebaseJs ? { firebaseJs } : {});
  await page.goto(`${BASE}/caza_conceptos.html?tema=${T}&theme=${T}`);
  await page.waitForTimeout(ESPERA_CARGA);
  return { page, errores };
}

const estado = (page) => page.evaluate(() => ({
  parrafo: document.getElementById('level-label')?.textContent || document.querySelector('[id*="level"]')?.textContent || '',
  marcados: new Set([...document.querySelectorAll('#paragraph .token.correct')].map((t) => t.dataset.key)).size,
  siguiente: !document.getElementById('next-btn').disabled,
  resumen: getComputedStyle(document.getElementById('summary-dialog') || document.body).display === 'flex',
  progreso: document.getElementById('summary-progress')?.innerText || '',
}));

async function encontrar(page, n) {
  for (let k = 0; k < n; k++) {
    const key = await page.evaluate(() => {
      const hechos = new Set([...document.querySelectorAll('#paragraph .token.correct')].map((t) => t.dataset.key));
      return [...document.querySelectorAll('#paragraph .token[data-correct="1"]')].find((x) => !hechos.has(x.dataset.key))?.dataset.key;
    });
    if (!key) break;
    await page.locator(`#paragraph .token[data-key="${key}"]`).first().click();
    await page.waitForTimeout(900);
    await page.click('#close-meaning');
    await page.waitForTimeout(800);
  }
}

async function main_retomar_caza() {
  const T = temaDeArgs('node tools/pruebas/retomar_caza.mjs <tema>');
  const { check, fin } = controles();
  const claves = clavesDelTema(T);
  const total = claves.flat().length;
  const b = await abrirNavegador();

  // A) Misma pestaña
  const { page, errores } = await abrir(b, T);
  await encontrar(page, claves[0].length);
  await page.waitForTimeout(4000);
  await page.click('#next-btn'); await page.waitForTimeout(500);
  await encontrar(page, 2);
  await page.waitForTimeout(1500);
  await page.reload();
  await page.waitForTimeout(ESPERA_CARGA);
  let s = await estado(page);
  check('A) al volver abre en el párrafo 2', s.parrafo.includes(`2/${claves.length}`), s.parrafo);
  check('A) los 2 conceptos ya encontrados aparecen marcados', s.marcados === 2, `${s.marcados} marcados`);
  await page.screenshot({ path: `${SALIDA}/retomar_caza_${T}.png` });
  await page.click('#prev-btn'); await page.waitForTimeout(600);
  s = await estado(page);
  check('A) con ◀ el párrafo 1 aparece completo y deja avanzar', s.marcados === claves[0].length && s.siguiente, `${s.marcados}/${claves[0].length}`);
  check('A) sin errores JS', errores.length === 0, JSON.stringify(errores.slice(0, 3)));
  await page.close();

  // B) Otro dispositivo: párrafos 1-3 completos + 1 concepto del 4
  const avance = [...claves[0], ...claves[1], ...claves[2], claves[3][0]];
  const B = await abrir(b, T, stubConAvance(avance));
  s = await estado(B.page);
  check('B) abre en el párrafo 4', s.parrafo.includes(`4/${claves.length}`), s.parrafo);
  check('B) el concepto ya encontrado del párrafo 4 aparece marcado', s.marcados === 1, `${s.marcados} marcados`);
  const ss = await B.page.evaluate((t) => JSON.parse(sessionStorage.getItem(`tema.${t}.caza`) || '{}'), T);
  check('B) el avance cuenta lo de Firebase', ss.found === avance.length && ss.total === total, `${ss.found}/${ss.total}`);
  check('B) sin errores JS', B.errores.length === 0, JSON.stringify(B.errores.slice(0, 3)));
  await B.page.close();

  // C) Todo completo
  const C = await abrir(b, T, stubConAvance(claves.flat()));
  await C.page.waitForTimeout(1000);
  s = await estado(C.page);
  check('C) todo completo: aparece el resumen final con 100%', s.resumen && s.progreso.includes('100%'), s.progreso);
  check('C) sin errores JS', C.errores.length === 0, JSON.stringify(C.errores.slice(0, 3)));

  await b.close();
  process.exit(fin());
}

main_retomar_caza();
