/*
 * tools/pruebas/jugar_crucigrama.mjs — juega el crucigrama completo de un tema (como alumno).
 *
 * Comprueba el uso del motor (js/crossword_engine.js v3.2) y el guardado:
 *  - tablero armado (se muestra: * = letra de la palabra central) y lista de definiciones;
 *  - mientras se escribe NO dice si la respuesta es correcta;
 *  - una respuesta equivocada del largo justo se puede verificar: cuenta el intento y
 *    marca letras en verde/rojo;
 *  - tocar una definición elige esa palabra; "Otra palabra" pasa a la siguiente;
 *  - al recargar, las palabras resueltas siguen resueltas;
 *  - al terminar: cartel final y guardado en Firebase (moduleId = tema, lessonId = 'cruci', 100%).
 *
 * Uso:  node tools/pruebas/jugar_crucigrama.mjs <tema>
 * Versión: v2.0.0 (2026-11-19)
 */
import { abrirNavegador, servirRepo, controles, temaDeArgs, BASE, SALIDA } from './comun.mjs';

async function main_jugar_crucigrama() {
  const T = temaDeArgs('node tools/pruebas/jugar_crucigrama.mjs <tema>');
  const { check, fin } = controles();
  const b = await abrirNavegador();
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 } });
  const page = await ctx.newPage();
  const errores = [];
  page.on('pageerror', (e) => errores.push(e.message));
  page.on('dialog', (d) => d.dismiss());
  await servirRepo(page);

  const abrir = async () => {
    await page.goto(`${BASE}/crossword.html?tema=${T}&theme=${T}`);
    await page.waitForTimeout(3500);
    await page.click('#educationalModal .btn-game').catch(() => {});
    await page.waitForTimeout(900);
  };
  const actual = () => page.evaluate(() => window.CrosswordEngine.getState().currentWordId);
  const respuesta = (id) => page.evaluate((id) => window.CrosswordEngine.getLayout().words.find((w) => w.id === id).answer, id);
  const escribir = async (txt) => { await page.fill('#textInput', txt); await page.waitForTimeout(150); };
  const resolverActual = async () => {
    await escribir(await respuesta(await actual()));
    await page.click('#verifyBtn');
    await page.waitForTimeout(900);
  };

  await abrir();
  const tablero = await page.evaluate(() => {
    const ids = [...new Set([...document.querySelectorAll('.cell[data-word-id]')].map((c) => c.dataset.wordId))];
    return ids.map((id) => [...document.querySelectorAll(`.cell[data-word-id="${id}"]`)].map((c) => (c.classList.contains('central') ? '*' : '') + c.dataset.char).join(''));
  });
  console.log('Tablero:', tablero.join(' | '));
  const total = await page.evaluate(() => window.CROSSWORD_CONFIG.entries.length);
  check(`tablero con ${total} palabras y lista de ${total} definiciones`, tablero.length >= total && (await page.locator('#clueList .clue').count()) === total);

  // Mientras se escribe no se revela la respuesta
  const primera = await actual();
  const resp1 = await respuesta(primera);
  await escribir(resp1);
  const aviso = await page.locator('#validationText').innerText();
  check('escribiendo la respuesta correcta NO dice que es correcta', !/correct/i.test(aviso), aviso);

  // Respuesta equivocada del largo justo: se puede verificar, cuenta el intento y colorea
  const mal = resp1.slice(0, -1) + (resp1.at(-1) === 'A' ? 'E' : 'A');
  await escribir(mal);
  check('con una respuesta equivocada del largo justo, Verificar está habilitado', !(await page.locator('#verifyBtn').isDisabled()));
  await page.click('#verifyBtn');
  await page.waitForTimeout(700);
  const r = await page.evaluate(() => ({
    intentos: document.getElementById('tries').textContent,
    verdes: document.querySelectorAll('#visualInput .letter-slot.correct').length,
    rojas: document.querySelectorAll('#visualInput .letter-slot.incorrect').length,
    msg: document.getElementById('validationText').textContent,
  }));
  check('el error cuenta un intento y marca verdes y rojas', r.intentos === '1' && r.verdes === resp1.length - 1 && r.rojas === 1, JSON.stringify(r));

  // Elegir por la lista y "Otra palabra"
  const segundaId = await page.locator('#clueList .clue').nth(1).getAttribute('data-word-id');
  await page.locator('#clueList .clue').nth(1).click();
  await page.waitForTimeout(300);
  check('tocar una definición elige esa palabra', (await actual()) === segundaId);
  await page.click('#skipBtn');
  await page.waitForTimeout(300);
  check('"Otra palabra" pasa a otra', (await actual()) !== segundaId);

  // Resolver 2 palabras y recargar: siguen resueltas
  await resolverActual();
  await resolverActual();
  const antes = await page.evaluate(() => window.CrosswordEngine.getState().solved.size);
  await abrir();
  const despues = await page.evaluate(() => ({
    resueltas: window.CrosswordEngine.getState().solved.size,
    tachadas: document.querySelectorAll('#clueList .clue.resuelta').length,
    prog: document.getElementById('prog').textContent,
  }));
  check('al recargar, las palabras resueltas siguen resueltas', antes === 2 && despues.resueltas === 2 && despues.tachadas === 2 && despues.prog === `2/${total}`, JSON.stringify(despues));

  // Terminar
  for (let i = 0; i < total; i++) {
    if (await page.evaluate(() => window.CrosswordEngine.getState().solved.size) >= total) break;
    const pista = (await page.locator('#questionText').innerText()).slice(0, 80);
    console.log(`  ${await respuesta(await actual())} | ${pista}`);
    await resolverActual();
  }
  await page.waitForTimeout(2500);
  const f = await page.evaluate(() => ({
    cartel: document.getElementById('completionModal')?.classList.contains('show'),
    precision: document.getElementById('finalAccuracy')?.innerText,
    saves: window.__saves || [],
  }));
  const ultimo = f.saves.at(-1) || {};
  check('aparece el cartel de crucigrama completo', f.cartel, `precisión ${f.precision}`);
  check('se guarda en Firebase: tema, cruci, 100%', ultimo.moduleId === T && ultimo.lessonId === 'cruci' && ultimo.score === 100, JSON.stringify({ guardados: f.saves.length, score: ultimo.score }));
  check('sin errores JS', errores.length === 0, JSON.stringify(errores.slice(0, 3)));
  await page.screenshot({ path: `${SALIDA}/crucigrama_${T}.png`, fullPage: true });
  await b.close();
  process.exit(fin());
}

main_jugar_crucigrama();
