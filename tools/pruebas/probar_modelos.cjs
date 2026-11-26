/*
 * tools/pruebas/probar_modelos.cjs — prueba de verdad los modelos de IA de las Cloud Functions.
 *
 * Lee las listas MODELOS_GEMINI y MODELOS_OPENROUTER de functions/index.js y le manda a cada
 * modelo un mensaje corto. Muestra cuáles responden, cuánto tardan y el error de los que no
 * (404 = ya no existe, 429/503 = saturado o sin cuota, 400 = pedido rechazado).
 *
 * Las claves se leen de variables de entorno SOLO en tu PC (nunca se escriben en archivos ni
 * en el chat). En Git Bash:
 *   GOOGLE_API_KEY=... OPENROUTER_KEY=... node tools/pruebas/probar_modelos.cjs
 * (alcanza con una de las dos; la otra lista se saltea).
 * Versión: v1.0.0 (2026-11-26)
 */
const fs = require('fs');
const path = require('path');

const fuente = fs.readFileSync(path.resolve(__dirname, '../../functions/index.js'), 'utf8');
const lista = (nombre) => {
  const m = fuente.match(new RegExp(`const ${nombre} = \\[([\\s\\S]*?)\\];`));
  return m ? [...m[1].matchAll(/^\s*"([^"]+)"/gm)].map((x) => x[1]) : [];
};
const esGemini3 = (modelo) => /^gemini-(3|flash-latest|flash-lite-latest)/.test(modelo);
const SISTEMA = 'Sos un orientador vocacional de Tucumán. Respondé en una sola oración, con voseo.';
const MENSAJE = 'Hola, me gusta ayudar a la gente. ¿Qué podría estudiar?';

async function probar(nombre, fn) {
  const inicio = Date.now();
  try {
    const texto = await fn();
    console.log(`✅ ${nombre.padEnd(40)} ${String(Date.now() - inicio).padStart(6)} ms  ${texto.replace(/\s+/g, ' ').slice(0, 70)}`);
    return true;
  } catch (e) {
    console.log(`❌ ${nombre.padEnd(40)} ${String(Date.now() - inicio).padStart(6)} ms  ${e.message.slice(0, 110)}`);
    return false;
  }
}

async function gemini(modelo, clave) {
  const generationConfig = esGemini3(modelo) ? { maxOutputTokens: 2048 } : { maxOutputTokens: 1024, temperature: 0.7 };
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelo}:generateContent`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-goog-api-key': clave },
    body: JSON.stringify({ contents: [{ role: 'user', parts: [{ text: MENSAJE }] }], systemInstruction: { parts: [{ text: SISTEMA }] }, generationConfig }),
    signal: AbortSignal.timeout(30000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${(await res.text()).slice(0, 90)}`);
  const d = await res.json();
  const texto = (d.candidates?.[0]?.content?.parts || []).map((p) => p.text || '').join('').trim();
  if (!texto) throw new Error(`respuesta vacía (${d.candidates?.[0]?.finishReason || 'sin candidatos'})`);
  return texto;
}

async function openrouter(modelo, clave) {
  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${clave}` },
    body: JSON.stringify({ model: modelo, messages: [{ role: 'system', content: SISTEMA }, { role: 'user', content: MENSAJE }], max_tokens: 1024, reasoning: { effort: 'low', exclude: true } }),
    signal: AbortSignal.timeout(30000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${(await res.text()).slice(0, 90)}`);
  const d = await res.json();
  const texto = (d.choices?.[0]?.message?.content || '').trim();
  if (!texto) throw new Error(`respuesta vacía (${d.choices?.[0]?.finish_reason || 'sin opciones'})`);
  return `[${d.model || modelo}] ${texto}`;
}

async function main_probar_modelos() {
  const g = process.env.GOOGLE_API_KEY;
  const o = process.env.OPENROUTER_KEY;
  if (!g && !o) {
    console.log('Falta al menos una clave: GOOGLE_API_KEY=... OPENROUTER_KEY=... node tools/pruebas/probar_modelos.cjs');
    process.exit(2);
  }
  let ok = 0;
  if (g) for (const m of lista('MODELOS_GEMINI')) ok += await probar(`gemini/${m}`, () => gemini(m, g));
  else console.log('(sin GOOGLE_API_KEY: se saltean los modelos de Gemini)');
  if (o) for (const m of lista('MODELOS_OPENROUTER')) ok += await probar(`openrouter/${m}`, () => openrouter(m, o));
  else console.log('(sin OPENROUTER_KEY: se saltean los modelos de OpenRouter)');
  console.log(ok ? `\n${ok} modelo(s) responden: el chat y el examen funcionan.` : '\n❌ Ningún modelo respondió: revisá las claves o actualizá las listas en functions/index.js.');
  process.exit(ok ? 0 : 1);
}

main_probar_modelos();
