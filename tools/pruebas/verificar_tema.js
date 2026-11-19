/*
 * tools/pruebas/verificar_tema.js — revisión estructural de un tema (sin navegador).
 *
 * Compara cada archivo del tema con lo que declaran config.json, js/main.js y
 * temas_data.js, y detecta los errores que ya aparecieron en la app:
 *  - archivos faltantes (content, quiz, conceptos, crucigrama, mapa, cloze);
 *  - material: secciones reales ≠ ReadAloudSystemConfig.sections / contador / config.json,
 *    o que al terminar redirija a otro tema;
 *  - cuestionario: variable <ID>_THEME, cantidad de preguntas, una sola correcta por pregunta,
 *    y que coincida con la tarjeta de main.js y config.json;
 *  - crucigrama: cada palabra contiene la letra de la central donde cruza;
 *  - mapa: sistema completo (mapa-system-score.js) y juego de 15 pares;
 *  - video: youtubeId válido (11 caracteres) y endTime que alcance al último hueco del cloze;
 *  - examen: si el tema está en EXAMEN_CONFIG, examen.json completo (12 ejes, 8 casos,
 *    5 reflexiones, 6 aperturas, 8 de práctica) y con el mismo filósofo.
 *
 * Uso:  node tools/pruebas/verificar_tema.js etica_aristoteles [otro_tema ...]
 * Versión: v1.0.0 (2026-11-19)
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const REPO = path.resolve(__dirname, '../..');
const leer = (p) => fs.readFileSync(path.join(REPO, p), 'utf8');
const existe = (p) => fs.existsSync(path.join(REPO, p));
const sinAcentos = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toUpperCase().replace(/[^A-ZÑ]/g, '');

/** Ejecuta un archivo del tema con window/console/performance falsos y devuelve window. */
function cargar(archivo) {
  const ctx = { window: {}, console: { log() {}, warn() {}, error() {}, info() {} }, performance: { now: () => 0 }, location: { search: '', href: '' }, URLSearchParams, document: undefined };
  ctx.globalThis = ctx;
  vm.createContext(ctx);
  vm.runInContext(leer(archivo), ctx, { filename: archivo });
  return ctx.window;
}

/** VIDEO_CONFIG y EXAMEN_CONFIG de temas_data.js (constantes del nivel superior). */
function datosGlobales() {
  const ctx = {}; vm.createContext(ctx);
  vm.runInContext(leer('temas_data.js') + '\n;globalThis.__d = { VIDEO_CONFIG, EXAMEN_CONFIG, TOPICS };', ctx);
  return ctx.__d;
}

function main_verificar_tema() {
  const temas = process.argv.slice(2);
  if (!temas.length) { console.error('Uso: node tools/pruebas/verificar_tema.js <tema> [otro_tema ...]'); process.exit(2); }
  const { VIDEO_CONFIG, EXAMEN_CONFIG } = datosGlobales();
  const mainJs = leer('js/main.js');
  let fallasTotales = 0;

  for (const t of temas) {
    const dir = `themes/${t}`;
    const problemas = [];
    const info = [];
    const prob = (m) => problemas.push(m);
    if (!existe(dir)) { console.log(`${t}: no existe ${dir}`); fallasTotales++; continue; }
    const cfg = existe(`${dir}/config.json`) ? JSON.parse(leer(`${dir}/config.json`)) : null;
    const act = cfg?.activities || {};
    if (!cfg) prob('falta config.json');

    for (const f of ['content.html', 'quiz.js', 'conceptos.js', 'crossword_config.js', 'mapa.html', 'cloze_test.js']) {
      if (!existe(`${dir}/${f}`)) prob(`falta ${f}`);
    }

    // Tarjeta del inicio (js/main.js)
    const tarjeta = mainJs.match(new RegExp(`id: ['"]${t}['"],[\\s\\S]*?\\n\\s*\\}`));
    if (!tarjeta) prob('no tiene tarjeta en js/main.js');

    // Material
    if (existe(`${dir}/content.html`)) {
      const html = leer(`${dir}/content.html`);
      const reales = (html.match(/class="study-section/g) || []).length;
      const declaradas = Number((html.match(/sections:\s*(\d+)/) || [])[1]);
      const contador = Number((html.match(/0 \/ (\d+) secciones/) || [])[1]);
      const redirect = (html.match(/redirectTo:\s*'([^']+)'/) || [])[1] || '';
      const correctas = (html.match(/data-correct="true"/g) || []).length;
      info.push(`material ${reales} secciones`);
      if (declaradas !== reales) prob(`material: ReadAloudSystemConfig.sections=${declaradas} pero hay ${reales} secciones`);
      if (contador !== reales) prob(`material: el contador dice ${contador} secciones y hay ${reales}`);
      if (act.material?.sections !== undefined && act.material.sections !== reales) prob(`material: config.json dice ${act.material.sections} secciones y hay ${reales}`);
      if (!redirect.includes(`tema=${t}`)) prob(`material: al terminar redirige a "${redirect}"`);
      if (correctas !== reales) prob(`material: ${correctas} respuestas correctas marcadas para ${reales} secciones`);
    }

    // Cuestionario
    if (existe(`${dir}/quiz.js`)) {
      const w = cargar(`${dir}/quiz.js`);
      const tema = w[`${t.toUpperCase()}_THEME`];
      if (!tema) prob(`quiz: no define window.${t.toUpperCase()}_THEME`);
      else {
        const n = tema.questions.length;
        info.push(`quiz ${n} preguntas`);
        tema.questions.forEach((q, i) => {
          const ok = (q.answers || []).filter((a) => a.correct).length;
          if (ok !== 1) prob(`quiz: la pregunta ${i + 1} tiene ${ok} respuestas correctas`);
        });
        const enCfg = act.quiz?.questions;
        if (enCfg !== undefined && enCfg !== n) prob(`quiz: config.json dice ${enCfg} preguntas y hay ${n}`);
        const enTarjeta = Number((tarjeta?.[0].match(/questions:\s*(\d+)/) || [])[1]);
        if (tarjeta && enTarjeta !== n) prob(`quiz: la tarjeta de main.js dice ${enTarjeta} preguntas y hay ${n}`);
      }
    }

    // Caza de conceptos (el detalle del texto lo revisa verificar_caza.js)
    if (existe(`${dir}/conceptos.js`)) {
      const niveles = cargar(`${dir}/conceptos.js`).CONCEPT_HUNT_CONFIG?.levels || [];
      info.push(`caza ${niveles.length} niveles`);
      const enCfg = (act.concepts || act.conceptos)?.levels;
      if (enCfg !== undefined && enCfg !== niveles.length) prob(`caza: config.json dice ${enCfg} niveles y hay ${niveles.length}`);
      if (niveles.length < 8) prob(`caza: ${niveles.length} niveles (el estándar es 8)`);
      if (niveles.some((l) => /<strong>|<b>/.test(l.html))) prob('caza: tiene negritas en el texto (correr verificar_caza.js)');
    }

    // Crucigrama
    if (existe(`${dir}/crossword_config.js`)) {
      const c = cargar(`${dir}/crossword_config.js`).CROSSWORD_CONFIG;
      if (!c) prob('crucigrama: no define window.CROSSWORD_CONFIG');
      else {
        const central = sinAcentos(c.central);
        info.push(`crucigrama ${central} + ${c.entries.length} palabras`);
        c.entries.forEach((e) => {
          const letra = central[e.crossIndex];
          if (!letra) prob(`crucigrama: ${e.answer} cruza en la posición ${e.crossIndex}, fuera de ${central}`);
          else if (!sinAcentos(e.answer).includes(letra)) prob(`crucigrama: ${e.answer} no contiene la letra ${letra} de ${central}`);
        });
      }
    }

    // Mapa conceptual
    if (existe(`${dir}/mapa.html`)) {
      const html = leer(`${dir}/mapa.html`);
      const nodos = (html.match(/class="node"/g) || []).length;
      const gd = html.match(/gameData:\s*\[([\s\S]*?)\]/);
      const pares = gd ? (gd[1].match(/term:/g) || []).length : 0;
      info.push(`mapa ${nodos} nodos, ${pares} pares`);
      if (!html.includes('mapa-system-score.js')) prob('mapa: usa el sistema viejo (sin mapa-system-score.js ni juego de pares)');
      if (pares !== 15) prob(`mapa: ${pares} pares en el juego (el estándar es 15)`);
    }

    // Video + cloze
    const v = VIDEO_CONFIG[t];
    if (v && existe(`${dir}/cloze_test.js`)) {
      const items = cargar(`${dir}/cloze_test.js`).CLOZE_TEST?.items || [];
      const ultimo = Math.max(0, ...items.map((i) => i.videoSegment?.end || 0));
      const alcanza = v.startTime + ultimo;
      info.push(`video+cloze ${items.length} huecos`);
      if (!/^[A-Za-z0-9_-]{11}$/.test(v.youtubeId)) prob(`video: youtubeId "${v.youtubeId}" no es un ID válido de 11 caracteres`);
      if (v.endTime < alcanza) {
        const fuera = items.filter((i) => v.startTime + (i.videoSegment?.end || 0) > v.endTime).length;
        prob(`video: corta en ${v.endTime}s y el cloze llega a ${alcanza}s (${fuera} huecos sin video)`);
      }
      if (items.some((i) => !i.videoSegment)) prob('cloze: hay huecos sin videoSegment');
    } else if (!v) info.push('sin video');

    // Examen oral + resumen final
    const ex = EXAMEN_CONFIG[t];
    if (ex) {
      if (!existe(`${dir}/examen.json`)) prob('examen: está en EXAMEN_CONFIG pero falta examen.json');
      else {
        const b = JSON.parse(leer(`${dir}/examen.json`));
        const esperado = { ejes: 12, casos: 8, reflexiones: 5, aperturas: 6, practica: 8 };
        for (const [k, n] of Object.entries(esperado)) if ((b[k] || []).length !== n) prob(`examen: ${(b[k] || []).length} ${k} (el estándar es ${n})`);
        if (b.filosofo !== ex.filosofo) prob(`examen: examen.json dice "${b.filosofo}" y EXAMEN_CONFIG "${ex.filosofo}"`);
        (b.ejes || []).forEach((e) => ['guia', 'claves', 'resumen', 'palabras', 'ejemplo'].forEach((k) => { if (!e[k] || !e[k].length) prob(`examen: el eje ${e.id} no tiene ${k}`); }));
        info.push(`examen con ${b.filosofo}`);
      }
    } else if (existe(`${dir}/examen.json`)) prob('examen: hay examen.json pero el tema no está en EXAMEN_CONFIG');

    console.log(`${t}: ${info.join(' · ')}`);
    console.log(problemas.length ? '  ' + problemas.join('\n  ') : '  OK');
    if (problemas.length) fallasTotales++;
  }
  process.exit(fallasTotales ? 1 : 0);
}

main_verificar_tema();
