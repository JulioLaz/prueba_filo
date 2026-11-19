/*
 * tools/pruebas/jugar_caza.mjs — juega la caza de conceptos completa de un tema.
 *
 * Encuentra todos los conceptos de cada nivel (como un alumno, con clics reales),
 * avanza hasta el último y comprueba: resumen final con 100%, pantalla no bloqueada,
 * lo que se guardaría en Firebase (moduleId = tema, lessonId = 'caza', score 100),
 * el avance que lee el hub (sessionStorage) y el botón "Resumen para la carpeta".
 * Se juega sin micrófono (el cartel del concepto se cierra con "Cerrar").
 *
 * Uso:  node tools/pruebas/jugar_caza.mjs <tema>     (tarda ~1 minuto por tema)
 * Versión: v1.1.0 (2026-11-19) — en el párrafo 2 comprueba la ayuda: 3 toques errados
 *   iluminan un concepto oculto pendiente (motor v1.3).
 */
import { abrirNavegador, servirRepo, controles, temaDeArgs, BASE, SALIDA } from './comun.mjs';

async function main_jugar_caza() {
  const T = temaDeArgs('node tools/pruebas/jugar_caza.mjs <tema>');
  const { check, fin } = controles();
  const b = await abrirNavegador();
  const page = await b.newPage({ viewport: { width: 420, height: 900 } });
  const errores = [];
  page.on('pageerror', (e) => errores.push(e.message));
  page.on('dialog', (d) => d.dismiss());
  // Sin reconocimiento de voz: el cartel del concepto se cierra con "Cerrar"
  await page.addInitScript(() => { Object.defineProperty(window, 'webkitSpeechRecognition', { value: undefined }); delete window.SpeechRecognition; });
  await servirRepo(page);
  await page.goto(`${BASE}/caza_conceptos.html?tema=${T}&theme=${T}`);
  await page.waitForTimeout(12000);

  const bloqueada = () => page.evaluate(() => document.body.classList.contains('modal-open'));
  const encontrar = async (n) => {
    for (let k = 0; k < n; k++) {
      const key = await page.evaluate(() => {
        const hechos = new Set([...document.querySelectorAll('#paragraph .token.correct')].map((t) => t.dataset.key));
        const t = [...document.querySelectorAll('#paragraph .token[data-correct="1"]')].find((x) => !hechos.has(x.dataset.key));
        return t && t.dataset.key;
      });
      if (!key) break;
      await page.locator(`#paragraph .token[data-key="${key}"]`).first().click();
      await page.waitForTimeout(900);
      await page.click('#close-meaning');
      await page.waitForTimeout(800);
    }
  };

  const niveles = await page.evaluate(() => window.CONCEPT_HUNT_CONFIG.levels.map((l) => l.concepts.length));
  check(`carga ${niveles.length} niveles`, niveles.length > 0, niveles.join('/'));
  for (let i = 0; i < niveles.length - 1; i++) {
    if (i === 1) {
      const errados = page.locator('#paragraph .token:not([data-correct])');
      for (let k = 0; k < 3; k++) { await errados.nth(k + 1).click(); await page.waitForTimeout(250); }
      const ayuda = await page.$$eval('#paragraph .ayuda-caza', (ts) => ts.map((t) => t.className + ' ' + t.textContent));
      check('nivel 2: 3 errores iluminan un concepto oculto que falta', ayuda.length === 1 && ayuda[0].includes('hidden-concept'), JSON.stringify(ayuda));
    }
    await encontrar(niveles[i]);
    await page.waitForTimeout(4000);
    check(`nivel ${i + 1}: pantalla desbloqueada tras cerrar el cartel`, !(await bloqueada()));
    await page.click('#next-btn');
    await page.waitForTimeout(500);
  }
  await encontrar(niveles.at(-1));
  await page.waitForTimeout(2500);

  const total = niveles.reduce((a, n) => a + n, 0);
  check('último nivel: aparece el resumen final', await page.locator('#summary-dialog').isVisible().catch(() => false));
  const prog = await page.locator('#summary-progress').innerText().catch(() => '');
  check('el resumen muestra 100% y actividad completa', prog.includes('100%') && prog.includes('completa'), prog);
  check('la pantalla no queda bloqueada', !(await bloqueada()));
  const saves = await page.evaluate(() => window.__saves || []);
  const ultimo = saves.at(-1) || {};
  check('se guarda en Firebase: tema, caza, 100%', ultimo.moduleId === T && ultimo.lessonId === 'caza' && ultimo.score === 100, JSON.stringify({ guardados: saves.length, score: ultimo.score }));
  const ss = await page.evaluate((t) => JSON.parse(sessionStorage.getItem(`tema.${t}.caza`) || '{}'), T);
  check('el hub recibe found/total reales', ss.found === total && ss.total === total, JSON.stringify({ found: ss.found, total: ss.total }));
  await page.screenshot({ path: `${SALIDA}/caza_${T}.png` });
  await page.click('#summary-resumen');
  await page.waitForTimeout(1200);
  check('"Resumen para la carpeta" abre resumen_conceptos.html', page.url().includes(`resumen_conceptos.html?tema=${T}`), page.url());
  check('sin errores JS', errores.length === 0, JSON.stringify(errores.slice(0, 3)));
  await b.close();
  process.exit(fin());
}

main_jugar_caza();
