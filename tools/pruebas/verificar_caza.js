/*
 * tools/pruebas/verificar_caza.js — revisa el texto de las cazas de conceptos (sin navegador).
 *
 * Para cada tema: niveles, conceptos por nivel y problemas contra el estándar de
 * etica_aristoteles:
 *  - el término no aparece literal en el texto del nivel (se busca igual que el motor:
 *    palabra completa, sin distinguir mayúsculas);
 *  - negritas (<strong>/<b>) en el texto: el motor resalta solo y las negritas confunden;
 *  - un término repetido en el mismo nivel (y, como aviso, un término dentro de otro);
 *  - nivel sin pista (hint) o con menos de 2 corolarios.
 *
 * Uso:  node tools/pruebas/verificar_caza.js etica_kant hedonismo ...
 *       node tools/pruebas/verificar_caza.js            (todos los temas con conceptos.js)
 * Versión: v2.0.0 (2026-11-19)
 */
const fs = require('fs');
const path = require('path');

const REPO = path.resolve(__dirname, '../..');
const LETRA = 'a-záéíóúüñA-ZÁÉÍÓÚÜÑ\\d_';
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const contiene = (txt, term) => new RegExp(`(^|[^${LETRA}])(${esc(term)})(?=[^${LETRA}]|$)`, 'i').test(txt);

function main_verificar_caza() {
  let temas = process.argv.slice(2);
  if (!temas.length) temas = fs.readdirSync(path.join(REPO, 'themes')).filter((t) => fs.existsSync(path.join(REPO, 'themes', t, 'conceptos.js')));
  let conProblemas = 0;
  for (const t of temas) {
    const window = {}; // conceptos.js define window.CONCEPT_HUNT_CONFIG
    eval(fs.readFileSync(path.join(REPO, 'themes', t, 'conceptos.js'), 'utf8'));
    const niveles = window.CONCEPT_HUNT_CONFIG.levels;
    const problemas = [];
    const avisos = [];
    let total = 0;
    niveles.forEach((l, i) => {
      const txt = l.html.replace(/<[^>]+>/g, ' ');
      const terms = l.concepts.map((c) => c.term);
      if (/<strong>|<b>/.test(l.html)) problemas.push(`N${i + 1}: negritas en el texto`);
      if (!l.hint || !l.corollary || l.corollary.length < 2) problemas.push(`N${i + 1}: falta pista o corolarios`);
      terms.forEach((a, j) => {
        total++;
        if (!contiene(txt, a)) problemas.push(`N${i + 1}: "${a}" no aparece literal en el texto`);
        if (terms.indexOf(a) !== j) problemas.push(`N${i + 1}: "${a}" repetido`);
        // Aviso (no falla): funciona, pero el alumno puede tocar el término corto dentro del largo
        terms.forEach((b) => { if (a !== b && contiene(b, a)) avisos.push(`N${i + 1}: "${a}" está dentro de "${b}"`); });
      });
    });
    console.log(`${t}: ${niveles.length} niveles, ${total} conceptos (${niveles.map((l) => l.concepts.length).join('/')})`);
    console.log(problemas.length ? '  ❌ ' + problemas.join('\n  ❌ ') : '  OK');
    if (avisos.length) console.log('  ⚠️ ' + avisos.join('\n  ⚠️ '));
    if (problemas.length) conProblemas++;
  }
  process.exit(conProblemas ? 1 : 0);
}

main_verificar_caza();
