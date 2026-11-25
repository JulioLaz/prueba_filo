/*
 * tools/pruebas/jugar_video.mjs — prueba el video con su ejercicio (cloze) en tema.html.
 *
 * Con reloj simulado (no espera el video de verdad) comprueba:
 *  - la ventana del video abre con el ejercicio desplegado y el botón violeta "Ocultar ejercicio";
 *  - el botón oculta y vuelve a mostrar el ejercicio;
 *  - en compu el ejercicio queda al lado del video y dentro de la ventana;
 *  - ejercicio incompleto: guarda menos de 100%;
 *  - ver el video entero, cerrar, reabrir y completar el ejercicio rápido: guarda 100%
 *    (antes quedaba en 79% porque reabrir borraba el "video visto");
 *  - sin errores JS.
 *
 * Uso:  node tools/pruebas/jugar_video.mjs <tema>
 * Versión: v1.0.0 (2026-11-25)
 */
import { abrirNavegador, servirRepo, controles, temaDeArgs, BASE, SALIDA } from './comun.mjs';

async function main_jugar_video() {
  const T = temaDeArgs('node tools/pruebas/jugar_video.mjs <tema>');
  const { check, fin } = controles();
  const b = await abrirNavegador();
  const page = await b.newPage({ viewport: { width: 1280, height: 800 } });
  const errores = [];
  page.on('pageerror', (e) => errores.push(e.message));
  await page.clock.install();
  await servirRepo(page);
  await page.goto(`${BASE}/tema.html?tema=${T}&theme=${T}`);
  await page.clock.runFor(5000);

  const ultimo = () => page.evaluate(() => (window.__saves || []).filter((s) => s.lessonId === 'video').map((s) => s.score).pop());
  const responder = (cuantos) => page.evaluate((cuantos) => {
    const inputs = [...document.querySelectorAll('#clozeSection input')];
    inputs.slice(0, cuantos ?? inputs.length).forEach((i) => {
      i.value = JSON.parse(i.dataset.answers)[0];
      i.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    });
    return inputs.length;
  }, cuantos);
  const estado = () => page.evaluate(() => {
    const btn = document.getElementById('videoClozeBtn');
    const sec = document.getElementById('clozeSection');
    const v = document.querySelector('#videoFrameSlot iframe').getBoundingClientRect();
    const c = document.getElementById('clozeContent')?.getBoundingClientRect();
    return { texto: btn.innerText, fondo: getComputedStyle(btn).backgroundColor, visible: getComputedStyle(sec).display !== 'none',
      items: sec.querySelectorAll('.cloze-item').length, alLado: !!c && c.left >= v.right - 1 && c.height > 200,
      progreso: document.getElementById('cloze-progress-text')?.innerText || '' };
  });

  // 1) Abre con el ejercicio desplegado
  await page.click('#goVideo'); await page.clock.runFor(3000);
  let s = await estado();
  check('abre con el ejercicio desplegado', s.visible && s.items > 0, `${s.items} ítems`);
  check('botón violeta "Ocultar ejercicio"', s.texto === 'Ocultar ejercicio' && s.fondo === 'rgb(128, 90, 213)', `${s.texto} ${s.fondo}`);
  check('en compu el ejercicio está al lado del video', s.alLado);
  await page.screenshot({ path: `${SALIDA}/video_${T}.png` });
  await page.click('#videoClozeBtn'); await page.clock.runFor(300);
  s = await estado();
  check('el botón oculta el ejercicio', !s.visible && s.texto === 'Mostrar ejercicio', s.texto);
  await page.click('#videoClozeBtn'); await page.clock.runFor(300);
  s = await estado();
  check('el botón lo vuelve a mostrar', s.visible && s.texto === 'Ocultar ejercicio', s.texto);

  // 2) Incompleto: menos de 100%
  const total = await responder(1); await page.clock.runFor(2000);
  await page.click('#videoClose'); await page.clock.runFor(3000);
  const parcial = await ultimo();
  check('ejercicio incompleto guarda menos de 100%', parcial < 100, `${parcial}%`);

  // 3) Ver el video entero, cerrar, reabrir y completar rápido: 100%
  await page.click('#goVideo'); await page.clock.runFor(1200000);
  await page.click('#videoClose'); await page.clock.runFor(3000);
  await page.click('#goVideo'); await page.clock.runFor(3000);
  await responder(); await page.clock.runFor(3000);
  s = await estado();
  check('ejercicio completo', s.progreso.startsWith(`${s.items}/${s.items}`), s.progreso);
  check('al completar guarda 100% en el momento', (await ultimo()) === 100, `${await ultimo()}%`);
  await page.click('#videoClose'); await page.clock.runFor(3000);
  check('reabrir el video no baja el puntaje (sigue 100%)', (await ultimo()) === 100, `${await ultimo()}% (${total} espacios)`);

  check('sin errores JS', errores.length === 0, JSON.stringify(errores.slice(0, 3)));
  await b.close();
  process.exit(fin());
}

main_jugar_video();
