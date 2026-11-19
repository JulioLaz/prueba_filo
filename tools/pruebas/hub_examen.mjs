/*
 * tools/pruebas/hub_examen.mjs — prueba la tarjeta del examen oral en el hub del tema.
 *
 * Abre tema.html, le inyecta distintos avances (window.__progresoFirebase) y comprueba:
 *  - sin avance: tarjeta visible y bloqueada, diciendo qué actividades faltan;
 *  - 90% en todo: habilitada; nota 4,5: invita a reintentar; nota 7,5: sello con la nota;
 *  - nota 10: sello completo; el botón abre dialogo/examen.html con el tema.
 *
 * Uso:  node tools/pruebas/hub_examen.mjs <tema>
 * Versión: v1.0.0 (2026-11-19)
 */
import { abrirNavegador, servirRepo, controles, temaDeArgs, BASE, SALIDA } from './comun.mjs';

async function main_hub_examen() {
  const T = temaDeArgs('node tools/pruebas/hub_examen.mjs <tema>');
  const { check, fin } = controles();
  const b = await abrirNavegador();
  const page = await b.newPage({ viewport: { width: 1150, height: 1300 } });
  const errores = [];
  page.on('pageerror', (e) => errores.push(e.message));
  page.on('dialog', (d) => d.dismiss());
  await servirRepo(page);
  await page.goto(`${BASE}/tema.html?tema=${T}&theme=${T}`);
  await page.waitForTimeout(3500);

  const estado = (fb) => page.evaluate((fb) => {
    window.__progresoFirebase = fb; renderProgressUI();
    const c = document.getElementById('examenCard');
    return { visible: getComputedStyle(c).display !== 'none', st: document.getElementById('statusExamen').innerText,
      titulo: document.getElementById('examenTitulo').innerText, cls: [...c.classList].join(' '),
      sello: c.querySelector('.sello-actividad')?.textContent || '', ex: window.examenDelTema() };
  }, fb);
  const todo = (p) => Object.fromEntries(['quiz', 'caza', 'video', 'cruci', 'material', 'mapa'].map((k) => [k, { percentage: p }]));

  let s = await estado({});
  check('sin avance: tarjeta visible y bloqueada', s.visible && s.cls.includes('examen-bloqueado') && s.st.includes('60%'), `${s.titulo} | ${s.st}`);
  s = await estado(todo(90));
  check('90% sin examen: habilitado, sin sello', s.st === 'Habilitado: ¡rendilo!' && !s.sello && !s.cls.includes('examen-bloqueado') && s.ex.requiere && !s.ex.aprobado, s.st);
  s = await estado({ ...todo(90), examen: { percentage: 45 } });
  check('nota 4,5: no aprobado, invita a reintentar', s.st.includes('4,5') && s.st.includes('volvé') && !s.sello, s.st);
  s = await estado({ ...todo(90), examen: { percentage: 75 } });
  check('nota 7,5: sello con la nota', s.st === 'Examen aprobado' && s.sello === '7,5' && s.cls.includes('act-aprobada') && s.ex.aprobado, s.st);
  await page.screenshot({ path: `${SALIDA}/hub_examen_${T}.png`, fullPage: true });
  s = await estado({ ...todo(100), examen: { percentage: 100 } });
  check('nota 10: sello 10 completo', s.sello === '10' && s.cls.includes('act-completa'));
  await Promise.all([page.waitForURL(/examen\.html/), page.click('#goExamen')]);
  check('"Abrir" va a dialogo/examen.html con el tema', page.url().includes(`/dialogo/examen.html?tema=${T}`), page.url());
  check('sin errores JS', errores.length === 0, JSON.stringify(errores.slice(0, 3)));
  await b.close();
  process.exit(fin());
}

main_hub_examen();
