/*
 * tools/pruebas/vocacional_funcion.cjs — prueba chatFilosofo con el orientador vocacional
 * (functions V8.7), con la IA simulada (no gasta cuota ni necesita claves ni emulador).
 *
 * Comprueba:
 *  - El pedido lleva el banco de opciones de Tucumán (opciones.json del repo), la fase según
 *    el número de intercambio, la extensión y el autotest RIASEC.
 *  - El contexto basura no rompe nada (se limpia).
 *  - Modo "plan": pide JSON y devuelve la ficha validada; si la IA devuelve algo inválido,
 *    prueba el modelo siguiente.
 *  - Modelos: Gemini 3.x sin temperature y con al menos 2048 tokens; los 2.x ya no se usan.
 *  - Los demás filósofos no cambian (sin banco ni fase).
 *
 * Uso:  node tools/pruebas/vocacional_funcion.cjs
 * Versión: v1.0.0 (2026-11-26)
 */
const fs = require('fs');
const path = require('path');
const Module = require('module');

const REPO = path.resolve(__dirname, '../..');
const cargaOriginal = Module._load;
Module._load = function (req, ...a) {
  if (req === 'firebase-functions/params') return { defineSecret: (n) => ({ value: () => 'k-' + n }) };
  if (req === 'firebase-functions/logger') return { info() {}, warn() {}, error() {} };
  return cargaOriginal.call(this, req, ...a);
};
process.env.GCLOUD_PROJECT = 'demo-filo';
const fns = require(path.join(REPO, 'functions/index.js'));

let llamadas = [];
let guion = [];
global.fetch = async (url, op = {}) => {
  if (url.includes('opciones.json')) {
    return { ok: true, status: 200, json: async () => JSON.parse(fs.readFileSync(path.join(REPO, 'themes/orientacion_vocacional/opciones.json'), 'utf8')) };
  }
  const body = JSON.parse(op.body);
  const sistema = url.includes('openrouter') ? body.messages[0].content : body.systemInstruction.parts[0].text;
  const modelo = url.includes('openrouter') ? body.model : (url.match(/models\/([^:]+):/) || [])[1];
  llamadas.push({ url, body, sistema, modelo });
  const texto = guion.length ? guion.shift() : 'Te escucho. ¿Qué te gusta hacer?';
  return { ok: true, status: 200, json: async () => ({ candidates: [{ content: { parts: [{ text: texto }] }, finishReason: 'STOP' }], usageMetadata: {} }) };
};

const alumna = { uid: 'alu1', token: { email: 'alumna@prueba.test' } };
const chat = (data) => fns.chatFilosofo.run({ auth: alumna, data });
let fallas = 0;
const check = (n, c, x = '') => { console.log(c ? '✅' : '❌', n, x); if (!c) fallas++; };
const PERFIL = [{ tipo: 'S', pct: 100 }, { tipo: 'I', pct: 75 }, { tipo: 'A', pct: 50 }];
const historial = (n) => {
  const h = [{ role: 'assistant', content: '¡Hola! Contame qué te gusta.' }];
  for (let i = 1; i <= n; i++) {
    h.push({ role: 'user', content: `Mensaje número ${i} de la alumna, me gusta ayudar a la gente.` });
    if (i < n) h.push({ role: 'assistant', content: `Respuesta ${i} del orientador.` });
  }
  return h;
};
const pedido = (n, extra = {}) => ({
  filosofo: 'orientador_vocacional',
  mensaje: `Mensaje número ${n} de la alumna, me gusta ayudar a la gente.`,
  historial: historial(n),
  contexto: { intercambio: n, total: 10, edad: 17, anio: 2026, perfil: PERFIL },
  ...extra,
});

async function main_vocacional_funcion() {
  // 1) Fase I
  llamadas = [];
  let r = await chat(pedido(1));
  let s = llamadas[0].sistema;
  check('1) responde', r.respuesta && r.filosofo === 'orientador_vocacional');
  check('1b) lleva el banco de Tucumán (opciones.json)', s.includes('Escuela de Educación Profesional (UNT)') && s.includes('Becas Progresar') && s.includes('Datos verificados al 2026-11-26'));
  check('1c) fase I, mensaje 1 de 10, extensión 60 a 110', s.includes('FASE I') && s.includes('mensaje 1 de 10') && s.includes('60 a 110 palabras'));
  check('1d) autotest y edad en el pedido', s.includes('Social (ayudar, enseñar, cuidar) 100%') && s.includes('Edad: 17 años') && s.includes('Año actual: 2026'));
  check('1e) primer modelo: gemini-flash-lite-latest, sin temperature y ≥ 2048 tokens', llamadas[0].modelo === 'gemini-flash-lite-latest' && llamadas[0].body.generationConfig.temperature === undefined && llamadas[0].body.generationConfig.maxOutputTokens >= 2048, JSON.stringify(llamadas[0].body.generationConfig));
  check('1f) sin REGLAS_COMUNES (no limita a 100 palabras)', !s.includes('REGLAS COMUNES'));

  // 2) Fases según el número de intercambio
  const fase = async (n) => { llamadas = []; await chat(pedido(n)); return llamadas[0].sistema; };
  check('2a) mensaje 4 → fase II', (await fase(4)).includes('FASE II'));
  check('2b) mensaje 6 → fase III con filosofía', (await fase(6)).includes('FASE III'));
  s = await fase(9);
  check('2c) mensaje 9 → fase IV, 150 a 230 palabras', s.includes('FASE IV') && s.includes('150 a 230 palabras'));
  s = await fase(10);
  check('2d) mensaje 10 → cierre sin preguntas', s.includes('CIERRE') && s.includes('NO hagas preguntas'));
  check('2e) en el cierre se piden más tokens', llamadas[0].body.generationConfig.maxOutputTokens >= 2048);

  // 3) Historial completo (10 intercambios = 20 mensajes + saludo)
  llamadas = [];
  await chat(pedido(10));
  const turnos = llamadas[0].body.contents.length;
  check('3) se envían los 10 intercambios completos', turnos >= 19, `${turnos} turnos`);

  // 4) Contexto basura
  llamadas = [];
  r = await chat({ ...pedido(2), contexto: { intercambio: '<script>', edad: 999, perfil: [{ tipo: 'X', pct: 500 }, 'hola'] } });
  s = llamadas[0].sistema;
  check('4) contexto inválido: responde igual, sin fase ni edad, "sin autotest"', r.respuesta && !s.includes('FASE') && !s.includes('Edad:') && s.includes('sin autotest'));
  llamadas = [];
  await chat({ filosofo: 'orientador_vocacional', mensaje: 'Hola, quiero saber qué estudiar.', historial: [] });
  check('4b) sin contexto (chat viejo): responde con el banco', llamadas[0].sistema.includes('BANCO DE OPCIONES'));

  // 5) Modo plan
  const planOk = {
    resumen: 'Te gusta ayudar y entender cómo funciona el cuerpo.', intereses: ['Ayudar', 'Ciencia'], fortalezas: ['Paciencia'],
    valores: ['Cuidar a otros'], opciones: [{ titulo: 'Enfermería', institucion: 'Escuela Universitaria de Enfermería (UNT)', ruta: 'larga', duracion: '5 años', porque: 'Encaja.', primerPaso: 'Preinscribirte en diciembre.' }],
    pasos: [{ cuando: 'Esta semana', que: 'Mirar el sitio eue.unt.edu.ar' }], becas: ['Becas Progresar'], pregunta: '¿Qué es cuidar?',
  };
  llamadas = [];
  guion = ['esto no es json', '```json\n' + JSON.stringify(planOk) + '\n```'];
  r = await chat(pedido(10, { modo: 'plan', mensaje: 'Armá mi ficha «Mi plan» con todo lo que conversamos.' }));
  check('5) plan: pide JSON (responseMimeType) con las reglas de privacidad', llamadas[0].body.generationConfig.responseMimeType === 'application/json' && llamadas[0].sistema.includes('NO incluyas datos de la situación'));
  check('5b) respuesta inválida → prueba el modelo siguiente', llamadas.length === 2 && llamadas[1].modelo !== llamadas[0].modelo, llamadas.map((l) => l.modelo).join(', '));
  check('5c) devuelve el plan validado', r.plan && r.plan.opciones[0].titulo === 'Enfermería' && r.plan.opciones[0].ruta === 'larga' && r.plan.pasos.length === 1, JSON.stringify(r.plan).slice(0, 120));
  guion = [JSON.stringify({ ...planOk, resumen: '<b>Hola</b> mundo', opciones: [{ titulo: 'X', ruta: 'cualquiera' }] })];
  r = await chat(pedido(10, { modo: 'plan', mensaje: 'Armá mi ficha «Mi plan» con todo lo que conversamos.' }));
  check('5d) el plan se limpia (sin HTML, ruta inválida vacía)', r.plan.resumen === 'Hola mundo' && r.plan.opciones[0].ruta === '');

  // 6) Modelos revisados
  llamadas = [];
  guion = ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'];
  try { await chat(pedido(10, { modo: 'plan', mensaje: 'Armá mi ficha «Mi plan» con todo lo que conversamos.' })); } catch (e) { /* ninguno válido */ }
  const modelos = [...new Set(llamadas.map((l) => l.modelo))];
  check('6) cadena sin Gemini 2.x, con 3.8 Flash y openrouter/free', !modelos.some((m) => /gemini-2/.test(m)) && modelos.includes('gemini-3.8-flash') && modelos.includes('openrouter/free'), modelos.join(', '));
  guion = [];

  // 7) Otro filósofo: sin banco ni fase
  llamadas = [];
  await chat({ filosofo: 'socrates', mensaje: 'Hola Sócrates, ¿qué es la virtud?', historial: [], contexto: { intercambio: 3 } });
  check('7) Sócrates no recibe banco ni fase', !llamadas[0].sistema.includes('BANCO DE OPCIONES') && !llamadas[0].sistema.includes('FASE'));

  console.log(fallas ? `\n❌ ${fallas} falla(s)` : '\n✅ TODO OK');
  process.exit(fallas ? 1 : 0);
}

main_vocacional_funcion().catch((e) => { console.error(e); process.exit(1); });
