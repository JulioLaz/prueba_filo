/*
 * tools/pruebas/ver_inicio.mjs — página de inicio: orden de las tarjetas, línea de época y lugar,
 * y banderas.
 *
 * Carga index.html con Firebase falso (alumno con sesión) y revisa:
 *  - que cada tarjeta de las unidades muestre la línea «🕰️ época · banderas lugar»;
 *  - que las banderas carguen (img/banderas/*.svg);
 *  - que no haya errores de JavaScript;
 *  - memoria del inicio: elegir «Unidad 1», abrir un tema y volver → sigue en Unidad 1 y la
 *    página baja hasta la tarjeta del tema abierto.
 * Guarda una captura en tools/pruebas/salida/inicio.png.
 *
 *   node tools/pruebas/ver_inicio.mjs
 *
 * Versión: v1.1.0 (2026-11-27) — memoria del filtro y del último tema
 * v1.0.0 (2026-11-25)
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

  // Memoria del inicio: Unidad 1 → abrir un tema → volver
  await page.click('.filter-btn[data-filter="UNIDAD_I"]');
  await page.waitForTimeout(500);
  const ultimoU1 = await page.evaluate(() => [...document.querySelectorAll('.theme-card')].at(-1).dataset.themeId);
  await Promise.all([page.waitForURL(/tema\.html|themes\//), page.locator(`.theme-card[data-theme-id="${ultimoU1}"]`).click()]);
  await page.goto(`${BASE}/index.html`);
  await page.waitForTimeout(2500);
  const vuelta = await page.evaluate(() => ({
    activo: document.querySelector('.filter-btn.active')?.dataset.filter,
    soloU1: AVAILABLE_THEMES.filter((t) => t.difficulty === 'UNIDAD_I').length === document.querySelectorAll('.theme-card').length,
    scroll: Math.round(window.scrollY),
  }));
  const visible = await page.locator(`.theme-card[data-theme-id="${ultimoU1}"]`).isVisible() &&
    await page.evaluate((id) => { const r = document.querySelector(`.theme-card[data-theme-id="${id}"]`).getBoundingClientRect(); return r.top >= 0 && r.bottom <= innerHeight; }, ultimoU1);
  check('al volver sigue en «Unidad 1» y muestra solo sus temas', vuelta.activo === 'UNIDAD_I' && vuelta.soloU1, JSON.stringify(vuelta));
  check(`al volver baja hasta la tarjeta del último tema (${ultimoU1})`, visible && vuelta.scroll > 0, `scroll ${vuelta.scroll}`);
  await page.screenshot({ path: path.join(SALIDA, 'inicio_vuelta.png'), fullPage: false });
  await page.click('.filter-btn[data-filter="all"]');
  await page.goto(`${BASE}/index.html`);
  await page.waitForTimeout(1500);
  check('«Todo» también se recuerda', await page.evaluate(() => document.querySelector('.filter-btn.active')?.dataset.filter) === 'all');
  await nav.close();
  process.exit(fin());
}

main_ver_inicio();
