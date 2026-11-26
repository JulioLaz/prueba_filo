/*
 * tools/pruebas/jugar_linea.mjs — prueba el tema con línea de tiempo (por defecto linea_tiempo).
 *
 *  - Hub: muestra solo las tarjetas del tema (ACTIVIDADES_TEMA), 6 segmentos y el examen;
 *    con 90% en esas actividades el examen queda habilitado.
 *  - Explorar: abrir hitos guarda el % (lessonId explorar); escala real con un punto por hito
 *    y zoom; retoma los hitos ya leídos guardados en Firebase.
 *  - Ordenar: juega las 8 rondas ordenando bien → 100%.
 *  - Simultáneos: responde las 10 bien → 100%.
 *  - Termómetro: juzga todos los pasos y elige las conclusiones bien fundadas → 100%.
 *  - Sin errores JS.
 *
 * Uso:  node tools/pruebas/jugar_linea.mjs [tema]
 * Versión: v1.0.0 (2026-11-26)
 */
import { abrirNavegador, servirRepo, controles, BASE, SALIDA, STUB_FIREBASE } from './comun.mjs';

const T = process.argv[2] || 'linea_tiempo';

async function abrir(b, url, opciones = {}, viewport = { width: 420, height: 900 }) {
  const page = await b.newPage({ viewport });
  const errores = [];
  page.on('pageerror', (e) => errores.push(e.message));
  page.on('dialog', (d) => d.dismiss());
  await servirRepo(page, opciones);
  await page.goto(`${BASE}/${url}`);
  await page.waitForTimeout(2500);
  return { page, errores };
}
const saves = (page, act) => page.evaluate((act) => (window.__saves || []).filter((s) => s.lessonId === act).map((s) => s.score), act);

async function main_jugar_linea() {
  const { check, fin } = controles();
  const b = await abrirNavegador();

  // ---------- Hub ----------
  let { page, errores } = await abrir(b, `tema.html?tema=${T}&theme=${T}`, {}, { width: 1150, height: 1300 });
  await page.waitForTimeout(1500);
  const hub = await page.evaluate(() => ({
    visibles: [...document.querySelectorAll('.grid .card')].filter((c) => getComputedStyle(c).display !== 'none').map((c) => c.querySelector('.card-icon').innerText.trim()),
    segmentos: [...document.querySelectorAll('#segments .seg')].map((s) => s.dataset.type),
  }));
  check('hub: tarjetas del tema (material, 4 de la línea, cuestionario y examen)', hub.visibles.length === 7 && !hub.visibles.some((v) => /Caza|Crucigrama|Mapa|Video/.test(v)), hub.visibles.join(' | '));
  check('hub: 6 segmentos en la barra', hub.segmentos.join(',') === 'mat,explorar,ordenar,simultaneo,termometro,quiz', hub.segmentos.join(','));
  const ex = await page.evaluate(() => {
    window.__progresoFirebase = Object.fromEntries(['material', 'explorar', 'ordenar', 'simultaneo', 'termometro', 'quiz'].map((k) => [k, { percentage: 90 }]));
    renderProgressUI();
    return { st: document.getElementById('statusExamen').innerText, titulo: document.getElementById('examenTitulo').innerText, pct: document.getElementById('progressPct').innerText };
  });
  check('hub: con 90% en todo, examen con Walter Benjamin habilitado', ex.st === 'Habilitado: ¡rendilo!' && ex.titulo.includes('Walter Benjamin') && ex.pct === '90%', `${ex.titulo} | ${ex.st} | ${ex.pct}`);
  await page.screenshot({ path: `${SALIDA}/linea_hub.png`, fullPage: true });
  await Promise.all([page.waitForURL(/linea\.html/), page.click('#goOrdenar')]);
  check('hub: "Ordenar" abre linea.html?modo=ordenar', page.url().includes('linea.html?modo=ordenar') && page.url().includes(`tema=${T}`), page.url());
  check('hub: sin errores JS', errores.length === 0, JSON.stringify(errores.slice(0, 3)));
  await page.close();

  // ---------- Explorar ----------
  ({ page, errores } = await abrir(b, `linea.html?tema=${T}&modo=explorar`));
  const total = await page.evaluate(() => window.LINEA_HITOS.length);
  for (let k = 0; k < 3; k++) {
    await page.locator('.hito').nth(k * 5).click();
    await page.waitForTimeout(200);
    await page.click('#cerrarDetalle');
    await page.waitForTimeout(200);
  }
  const pctEsperado = Math.round((3 / total) * 100);
  check('explorar: abrir 3 hitos guarda su %', (await saves(page, 'explorar')).at(-1) === pctEsperado, `${(await saves(page, 'explorar')).join(',')} (esperado ${pctEsperado})`);
  await page.click('[data-vista="escala"]');
  await page.waitForTimeout(300);
  const puntos = await page.locator('.dot').count();
  check('explorar: escala real con un punto por hito', puntos === total, `${puntos}/${total}`);
  await page.screenshot({ path: `${SALIDA}/linea_escala.png`, fullPage: true });
  await page.click('[data-zoom="3"]');
  await page.waitForTimeout(300);
  const puntosZoom = await page.locator('.dot').count();
  check('explorar: el zoom "últimos 200 años" muestra menos puntos', puntosZoom > 0 && puntosZoom < total, `${puntosZoom}`);
  check('explorar: sin errores JS', errores.length === 0, JSON.stringify(errores.slice(0, 3)));
  const leidosIds = await page.evaluate(() => window.LINEA_HITOS.slice(0, 10).map((h) => h.id));
  await page.close();

  // Retomar desde Firebase (otro dispositivo)
  const stub = STUB_FIREBASE.replace('export async function getDoc(){ return { exists:()=>false, data:()=>({}) }; }',
    `export async function getDoc(){ return { exists:()=>true, data:()=>({ foundConcepts: ${JSON.stringify(leidosIds)} }) }; }`);
  ({ page, errores } = await abrir(b, `linea.html?tema=${T}&modo=explorar`, { firebaseJs: stub }));
  const txt = await page.locator('#progresoTxt').innerText();
  check('explorar: retoma los 10 hitos leídos guardados en Firebase', txt.startsWith(`Leíste 10 de ${total}`) && (await page.locator('.hito.leido').count()) === 10, txt);
  await page.close();

  // ---------- Ordenar ----------
  ({ page, errores } = await abrir(b, `linea.html?tema=${T}&modo=ordenar`));
  for (let r = 0; r < 8; r++) {
    // ordenar con las flechas (burbuja), según el año de cada hito
    for (let pasada = 0; pasada < 6; pasada++) {
      const titulos = await page.$$eval('.orden-item b', (bs) => bs.map((x) => x.textContent));
      const anios = await page.evaluate((ts) => ts.map((t) => window.LINEA_HITOS.find((h) => h.title === t).sort), titulos);
      const i = anios.findIndex((a, j) => j > 0 && anios[j - 1] > a);
      if (i < 0) break;
      await page.click(`[data-sube="${i}"]`);
      pasada = -1;   // seguir hasta que quede ordenado
      await page.waitForTimeout(30);
    }
    await page.click('#comprobar');
    await page.waitForTimeout(150);
    await page.click('#seguir');
    await page.waitForTimeout(150);
  }
  const res = await page.locator('#resultado h2').innerText();
  check('ordenar: 8 rondas bien ordenadas → 40 de 40 (100%)', res.includes('40 de 40') && (await saves(page, 'ordenar')).at(-1) === 100, res);
  check('ordenar: sin errores JS', errores.length === 0, JSON.stringify(errores.slice(0, 3)));
  await page.close();

  // ---------- Simultáneos ----------
  ({ page, errores } = await abrir(b, `linea.html?tema=${T}&modo=simultaneo`));
  for (let q = 0; q < 10; q++) {
    const k = await page.evaluate(() => {
      const H = window.LINEA_HITOS;
      const piv = H.find((h) => h.title === document.querySelector('.panel[style*="border-left"] b').textContent);
      const ops = [...document.querySelectorAll('.opcion b')].map((x) => H.find((h) => h.title === x.textContent));
      return ops.findIndex((o) => o.axis !== piv.axis && Math.abs(o.sort - piv.sort) <= 50);
    });
    await page.locator('.opcion').nth(k).click();
    await page.waitForTimeout(100);
    await page.click('#seguir');
    await page.waitForTimeout(100);
  }
  const resS = await page.locator('#resultado h2').innerText();
  check('simultáneos: 10 de 10 (100%)', resS.includes('10 de 10') && (await saves(page, 'simultaneo')).at(-1) === 100, resS);
  check('simultáneos: sin errores JS', errores.length === 0, JSON.stringify(errores.slice(0, 3)));
  await page.close();

  // ---------- Termómetro ----------
  ({ page, errores } = await abrir(b, `linea.html?tema=${T}&modo=termometro`));
  const cfg = await page.evaluate(() => ({ correctas: window.LINEA_TERMOMETRO.ejes.map((e) => e.correcta), final: window.LINEA_TERMOMETRO.final.correcta }));
  for (let e = 0; e < cfg.correctas.length; e++) {
    for (let p = 0; p < 3; p++) { await page.click(`[data-paso="${p}"][data-val="${[1, 0, -1][p]}"]`); await page.waitForTimeout(60); }
    await page.click(`[data-op="${cfg.correctas[e]}"]`);
    await page.waitForTimeout(100);
    if (e === 0) await page.screenshot({ path: `${SALIDA}/linea_termometro.png`, fullPage: true });
    await page.click('#seguir');
    await page.waitForTimeout(100);
  }
  await page.click(`[data-op="${cfg.final}"]`);
  await page.waitForTimeout(100);
  await page.click('#seguir');
  await page.waitForTimeout(150);
  const resT = await page.locator('#resultado h2').innerText();
  check('termómetro: todos los pasos y conclusiones bien fundadas → 100%', resT.includes('100%') && (await saves(page, 'termometro')).at(-1) === 100, resT);
  check('termómetro: sin errores JS', errores.length === 0, JSON.stringify(errores.slice(0, 3)));
  await page.close();

  await b.close();
  process.exit(fin());
}

main_jugar_linea();
