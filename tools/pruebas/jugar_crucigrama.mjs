/*
 * tools/pruebas/jugar_crucigrama.mjs — resuelve el crucigrama completo de un tema.
 *
 * Muestra cómo quedó armado el tablero (* = letra de la palabra central), escribe cada
 * respuesta como un alumno y comprueba: cartel final, puntaje y lo que se guardaría en
 * Firebase (moduleId = tema, lessonId = 'cruci', score 100).
 *
 * Uso:  node tools/pruebas/jugar_crucigrama.mjs <tema>
 * Versión: v1.0.0 (2026-11-19)
 */
import { abrirNavegador, servirRepo, controles, temaDeArgs, BASE, SALIDA } from './comun.mjs';

async function main_jugar_crucigrama() {
  const T = temaDeArgs('node tools/pruebas/jugar_crucigrama.mjs <tema>');
  const { check, fin } = controles();
  const b = await abrirNavegador();
  const page = await b.newPage({ viewport: { width: 1100, height: 900 } });
  const errores = [];
  page.on('pageerror', (e) => errores.push(e.message));
  page.on('dialog', (d) => d.dismiss());
  await servirRepo(page);
  await page.goto(`${BASE}/crossword.html?tema=${T}&theme=${T}`);
  await page.waitForTimeout(4000);
  await page.click('#educationalModal .btn-game').catch(() => {});
  await page.waitForTimeout(800);

  const tablero = await page.evaluate(() => {
    const ids = [...new Set([...document.querySelectorAll('.cell[data-word-id]')].map((c) => c.dataset.wordId))];
    return ids.map((id) => [...document.querySelectorAll(`.cell[data-word-id="${id}"]`)].map((c) => (c.classList.contains('central') ? '*' : '') + c.dataset.char).join(''));
  });
  console.log('Tablero:', tablero.join(' | '));
  const palabras = await page.evaluate(() => window.CROSSWORD_CONFIG.entries.map((e) => e.answer));
  check(`tablero armado con ${palabras.length} palabras`, tablero.length >= palabras.length);

  for (let i = 0; i < palabras.length; i++) {
    // Se toca una celda propia de la palabra (la central la comparten dos palabras)
    await page.locator(`.cell.h[data-word-id="word_${i}"]:not(.central)`).first().click({ force: true });
    await page.waitForTimeout(300);
    const pista = await page.locator('#questionText').innerText();
    const resp = palabras[i].normalize('NFD').replace(/[̀-ͯ]/g, '');
    await page.fill('#textInput', resp);
    await page.waitForTimeout(150);
    await page.click('#verifyBtn');
    await page.waitForTimeout(900);
    console.log(`  ${resp} | ${pista.slice(0, 80)}`);
  }
  await page.waitForTimeout(2500);
  const r = await page.evaluate(() => ({
    cartel: document.getElementById('completionModal')?.classList.contains('show'),
    puntaje: document.getElementById('finalScore')?.innerText,
    saves: window.__saves || [],
  }));
  const ultimo = r.saves.at(-1) || {};
  check('aparece el cartel de crucigrama completo', r.cartel, `puntaje ${r.puntaje}`);
  check('se guarda en Firebase: tema, cruci, 100%', ultimo.moduleId === T && ultimo.lessonId === 'cruci' && ultimo.score === 100, JSON.stringify({ guardados: r.saves.length, score: ultimo.score }));
  check('sin errores JS', errores.length === 0, JSON.stringify(errores.slice(0, 3)));
  await page.screenshot({ path: `${SALIDA}/crucigrama_${T}.png` });
  await b.close();
  process.exit(fin());
}

main_jugar_crucigrama();
