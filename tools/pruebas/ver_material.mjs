/*
 * tools/pruebas/ver_material.mjs — abre el material de lectura de un tema.
 *
 * Comprueba que cargue sin errores, que el contador coincida con las secciones reales y
 * que cada sección tenga su verificación con una respuesta correcta. Guarda una captura
 * en tools/pruebas/salida/. La lectura en voz alta NO se puede probar acá (no hay micrófono).
 *
 * Uso:  node tools/pruebas/ver_material.mjs <tema>
 * Versión: v1.0.0 (2026-11-19)
 */
import { abrirNavegador, servirRepo, controles, temaDeArgs, BASE, SALIDA } from './comun.mjs';

async function main_ver_material() {
  const T = temaDeArgs('node tools/pruebas/ver_material.mjs <tema>');
  const { check, fin } = controles();
  const b = await abrirNavegador();
  const page = await b.newPage({ viewport: { width: 420, height: 900 } });
  const errores = [];
  page.on('pageerror', (e) => errores.push(e.message));
  await servirRepo(page);
  await page.goto(`${BASE}/themes/${T}/content.html?tema=${T}&theme=${T}`);
  await page.waitForTimeout(4000);
  const r = await page.evaluate(() => ({
    contador: document.getElementById('progress-counter')?.innerText || '',
    secciones: document.querySelectorAll('.study-section').length,
    activa: document.querySelector('.study-section.active h3')?.innerText || '',
    conPregunta: [...document.querySelectorAll('.study-section')].filter((s) => s.querySelectorAll('.option[data-correct="true"]').length === 1).length,
    config: window.ReadAloudSystemConfig?.sections,
  }));
  check('el contador coincide con las secciones', r.contador === `0 / ${r.secciones} secciones` && r.config === r.secciones, `${r.contador} (config ${r.config})`);
  check('la primera sección está activa', !!r.activa, r.activa);
  check('cada sección tiene una verificación con una respuesta correcta', r.conPregunta === r.secciones, `${r.conPregunta}/${r.secciones}`);
  check('sin errores JS', errores.length === 0, JSON.stringify(errores.slice(0, 3)));
  await page.screenshot({ path: `${SALIDA}/material_${T}.png` });
  await b.close();
  process.exit(fin());
}

main_ver_material();
