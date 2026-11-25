/*
 * tools/pruebas/ver_inicio.mjs — página de inicio: orden de las tarjetas, línea de época y lugar,
 * y banderas.
 *
 * Carga index.html con Firebase falso (alumno con sesión) y revisa:
 *  - que cada tarjeta de las unidades muestre la línea «🕰️ época · banderas lugar»;
 *  - que las banderas carguen (img/banderas/*.svg);
 *  - que no haya errores de JavaScript.
 * Guarda una captura en tools/pruebas/salida/inicio.png.
 *
 *   node tools/pruebas/ver_inicio.mjs
 *
 * Versión: v1.0.0 (2026-11-25)
 */
import path from 'path';
import { abrirNavegador, servirRepo, controles, BASE, SALIDA } from './comun.mjs';

async function main_ver_inicio() {
  const { check, fin } = controles();
  const nav = await abrirNavegador();
  const page = await nav.newPage({ viewport: { width: 1280, height: 900 } });
  const errores = [];
  page.on('pageerror', (e) => errores.push(e.message));
  await servirRepo(page);
  await page.goto(`${BASE}/index.html`);
  await page.waitForTimeout(3000);

  const datos = await page.evaluate(() => {
    const temas = (typeof AVAILABLE_THEMES !== 'undefined' ? AVAILABLE_THEMES : []);
    const deUnidad = temas.filter((t) => /^UNIDAD_/.test(t.difficulty));
    const tarjetas = [...document.querySelectorAll('.theme-card, [class*="theme-card"]')];
    const lineas = [...document.querySelectorAll('.theme-epoca')].map((e) => e.textContent.trim());
    const banderas = [...document.querySelectorAll('img.theme-bandera')].map((i) => ({ src: i.getAttribute('src'), ok: i.complete && i.naturalWidth > 0 }));
    return { deUnidad: deUnidad.map((t) => t.id), conEpoca: deUnidad.filter((t) => t.epoca).length, tarjetas: tarjetas.length, lineas, banderas };
  });

  check('todas las tarjetas de las unidades tienen época', datos.conEpoca === datos.deUnidad.length, `${datos.conEpoca}/${datos.deUnidad.length}`);
  check('se ve la línea de época en las tarjetas', datos.lineas.length >= datos.deUnidad.length, `${datos.lineas.length} líneas`);
  const malas = datos.banderas.filter((b) => !b.ok);
  check('las banderas cargan', datos.banderas.length > 0 && malas.length === 0, `${datos.banderas.length} banderas${malas.length ? ', fallan: ' + malas.map((b) => b.src).join(', ') : ''}`);
  // El Firebase falso de comun.mjs no trae todo lo que usa el inicio (login): esos errores no son de la app
  const propios = errores.filter((e) => !/does not provide an export named/.test(e));
  check('sin errores de JavaScript (fuera del Firebase falso)', propios.length === 0, JSON.stringify(propios.slice(0, 3)));
  console.log('Ejemplos:', datos.lineas.slice(0, 4));

  await page.screenshot({ path: path.join(SALIDA, 'inicio.png'), fullPage: false });
  await nav.close();
  process.exit(fin());
}

main_ver_inicio();
