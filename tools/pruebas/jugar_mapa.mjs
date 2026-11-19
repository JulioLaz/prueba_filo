/*
 * tools/pruebas/jugar_mapa.mjs — recorre el mapa conceptual completo y juega los pares.
 *
 * Despliega el árbol, toca cada nodo (clic real), juega el juego de pares (con un error
 * a propósito al principio) y comprueba: todos los nodos visitados, juego completo y lo
 * que se guardaría en Firebase (moduleId = tema, lessonId = 'mapa', score 100).
 *
 * Uso:  node tools/pruebas/jugar_mapa.mjs <tema>
 * Versión: v1.0.0 (2026-11-19)
 */
import { abrirNavegador, servirRepo, controles, temaDeArgs, BASE, SALIDA } from './comun.mjs';

async function main_jugar_mapa() {
  const T = temaDeArgs('node tools/pruebas/jugar_mapa.mjs <tema>');
  const { check, fin } = controles();
  const b = await abrirNavegador();
  const page = await b.newPage({ viewport: { width: 1200, height: 900 } });
  const errores = [];
  page.on('pageerror', (e) => errores.push(e.message));
  page.on('dialog', (d) => d.dismiss());
  await servirRepo(page);
  await page.goto(`${BASE}/themes/${T}/mapa.html?tema=${T}&theme=${T}`);
  await page.waitForTimeout(3000);

  const carteles = [];
  const cerrarCarteles = async () => {
    const btns = page.locator('button[onclick*="remove()"]');
    for (let i = (await btns.count()) - 1; i >= 0; i--) {
      if (await btns.nth(i).isVisible().catch(() => false)) { carteles.push(await btns.nth(i).innerText()); await btns.nth(i).click(); await page.waitForTimeout(200); }
    }
  };
  check('usa el sistema completo (mapaSystemInstance)', await page.evaluate(() => !!window.mapaSystemInstance));
  await page.evaluate(() => window.mapaSystemInstance?.expandAll?.());
  await page.waitForTimeout(500);
  const total = await page.locator('.tree .node[data-title]').count();
  for (let i = 0; i < total; i++) {
    await cerrarCarteles();
    await page.locator('.tree .node[data-title]').nth(i).click({ force: true });
    await page.waitForTimeout(120);
  }
  await page.waitForTimeout(2500);
  await cerrarCarteles();
  const mapa = await page.evaluate(() => window.mapaSystemInstance.getProgress());
  check('todos los nodos visitados', mapa.visitedNodes.length === mapa.totalNodes, `${mapa.visitedNodes.length}/${mapa.totalNodes}`);

  await page.evaluate(() => window.mapaSystemInstance.initGame());
  await page.waitForTimeout(800);
  const terminos = await page.evaluate(() => [...document.querySelectorAll('#termsGrid .card')].map((c) => c.dataset.term));
  const sel = (t) => t.replace(/"/g, '\\"');
  await page.locator('#termsGrid .card').nth(0).click();
  await page.locator(`#definitionsGrid .card:not([data-term="${sel(terminos[0])}"])`).first().click();
  await page.waitForTimeout(300);
  for (const t of terminos) {
    await page.locator(`#termsGrid .card[data-term="${sel(t)}"]`).click();
    await page.waitForTimeout(100);
    await page.locator(`#definitionsGrid .card[data-term="${sel(t)}"]`).click();
    await page.waitForTimeout(350);
    await cerrarCarteles();
  }
  await page.waitForTimeout(3500);
  const juego = await page.evaluate(() => window.mapaSystemInstance.getGameStats());
  check(`juego de pares completo (${juego.totalPairs} pares)`, juego.completed && juego.matchedPairs === juego.totalPairs, JSON.stringify(juego));
  const saves = await page.evaluate(() => window.__saves || []);
  const ultimo = saves.at(-1) || {};
  check('se guarda en Firebase: tema, mapa, 100%', ultimo.moduleId === T && ultimo.lessonId === 'mapa' && ultimo.score === 100, JSON.stringify({ guardados: saves.length, score: ultimo.score }));
  check('sin errores JS', errores.length === 0, JSON.stringify(errores.slice(0, 3)));
  console.log('Carteles cerrados:', JSON.stringify(carteles));
  await page.screenshot({ path: `${SALIDA}/mapa_${T}.png` });
  await b.close();
  process.exit(fin());
}

main_jugar_mapa();
