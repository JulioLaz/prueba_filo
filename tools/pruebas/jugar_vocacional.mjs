/*
 * tools/pruebas/jugar_vocacional.mjs — prueba la Orientación Vocacional (dialogo/chat_vocacional.html)
 * con Firebase y la IA simuladas.
 *
 *  - Autotest: 12 frases, perfil con las 6 áreas y las 2 más altas.
 *  - Diálogo: saludo con el nombre y el perfil; cada mensaje manda el contexto (intercambio,
 *    total 10, edad, perfil); el puntaje sube 9% por intercambio; el cierre aparece recién
 *    después de la respuesta al mensaje 10.
 *  - Retomar: al recargar sigue en el mismo intercambio.
 *  - IA caída: el mensaje vuelve al cuadro y no cuenta.
 *  - Ficha «Mi plan»: con la IA (modo plan) y de respaldo; se guarda con 100% y planVocacional.
 *  - Otro dispositivo: si hay una ficha en Firebase, se muestra.
 *  - Vista docente (planes_vocacionales.html) y presentación (content.html con opciones.json).
 *  - Sin errores JS.
 *
 * Uso:  node tools/pruebas/jugar_vocacional.mjs
 * Versión: v1.0.0 (2026-11-26)
 */
import { abrirNavegador, servirRepo, controles, BASE, SALIDA, STUB_FIREBASE } from './comun.mjs';

const PLAN = {
  resumen: 'Te gusta ayudar a otras personas y entender cómo funciona el cuerpo.',
  intereses: ['Ayudar', 'Ciencias'], fortalezas: ['Paciencia', 'Responsabilidad'], valores: ['Cuidar'],
  opciones: [
    { titulo: 'Licenciatura en Enfermería', institucion: 'Escuela Universitaria de Enfermería (UNT)', ruta: 'larga', duracion: '5 años', porque: 'Une tu interés por ayudar y por la ciencia.', primerPaso: 'Preinscribirte en diciembre.' },
    { titulo: 'Tecnicatura en Análisis Clínicos', institucion: 'Institutos de Educación Superior', ruta: 'media', duracion: '3 años', porque: 'Laboratorio con salida laboral.', primerPaso: 'Consultar en el IES.' },
  ],
  pasos: [{ cuando: 'Esta semana', que: 'Mirar el sitio de la Escuela de Enfermería' }], becas: ['Becas Progresar'], pregunta: '¿Qué es cuidar bien?',
};

// Firebase simulado: datos de la alumna y (opcional) ficha guardada en Firestore
const stub = (planGuardado = null) => STUB_FIREBASE
  .replace('export function doc(){ return {}; }', 'export function doc(d,...p){ return { path: p.join("/") }; }')
  .replace('export async function getDoc(){ return { exists:()=>false, data:()=>({}) }; }',
    `export async function getDoc(r){
       if (r.path.startsWith('users/')) return { exists:()=>true, data:()=>({ nombres:'Ana María', apellidos:'Pérez', curso:'6A', fechaNacimiento:'2009-03-10' }) };
       const plan = ${JSON.stringify(planGuardado)};
       return plan ? { exists:()=>true, data:()=>({ planVocacional: plan }) } : { exists:()=>false, data:()=>({}) };
     }`);

// IA simulada: window.__modoIA = 'ok' | 'caida' | 'sinplan'
const FUNCIONES = `export function getFunctions(){ return {}; }
export function httpsCallable(){ return async (data) => {
  (window.__llamadas ||= []).push(JSON.parse(JSON.stringify(data)));
  const modo = window.__modoIA || 'ok';
  if (modo === 'caida') { const e = new Error('no'); e.code = 'functions/unavailable'; throw e; }
  if (data.modo === 'plan') return { data: modo === 'sinplan' ? { respuesta: 'texto' } : { respuesta: '{}', plan: ${JSON.stringify(PLAN)} } };
  const n = data.contexto.intercambio;
  return { data: { respuesta: n >= 10 ? 'Cierre: tu primer paso es <strong>preinscribirte</strong>.' : 'Respuesta <strong>' + n + '</strong> del orientador. <script>window.__xss=1<\\/script>¿Qué más?' } };
}; }`;
const gstatic = (url) => (url.includes('functions') ? FUNCIONES : 'export {}');

async function abrir(b, url, { planGuardado = null, viewport = { width: 420, height: 860 }, ctx = null } = {}) {
  const context = ctx || await b.newContext({ viewport });
  const page = await context.newPage();
  const errores = [];
  page.on('pageerror', (e) => errores.push(e.message));
  page.on('dialog', (d) => d.accept());
  await servirRepo(page, { firebaseJs: stub(planGuardado), gstatic });
  await page.goto(`${BASE}/${url}`);
  await page.waitForTimeout(800);
  return { page, errores, context };
}
const saves = (page) => page.evaluate(() => (window.__saves || []).map((s) => s.score));

async function contestarTest(page) {
  // Ayudar e Investigar: "Me gusta"; el resto "Más o menos" o "No me gusta"
  for (let i = 0; i < 12; i++) {
    const v = [3, 9].includes(i) || [1, 7].includes(i) ? 2 : (i % 2 ? 1 : 0);
    await page.click(`.opc[data-i="${i}"][data-v="${v}"]`);
  }
}
async function mandar(page, n) {
  for (let k = 0; k < n; k++) {
    await page.fill('#texto', `Este es mi mensaje número ${k + 1}, me gusta mucho ayudar a la gente.`);
    await page.click('#btnEnviar');
    await page.waitForTimeout(150);
  }
}

async function main_jugar_vocacional() {
  const { check, fin } = controles();
  const b = await abrirNavegador();

  // ---------- Autotest ----------
  let { page, errores, context } = await abrir(b, 'dialogo/chat_vocacional.html');
  check('autotest: se muestra con 12 frases', await page.isVisible('#pantallaTest') && (await page.locator('.item').count()) === 12);
  check('autotest: "Ver mi perfil" deshabilitado al inicio', await page.isDisabled('#btnPerfil'));
  await contestarTest(page);
  await page.click('#btnPerfil');
  await page.waitForTimeout(200);
  const perfil = await page.$$eval('#resultadoTest .perfil-fila span:first-child', (s) => s.map((x) => x.textContent));
  check('autotest: perfil con 6 áreas, Ayudar e Investigar arriba', perfil.length === 6 && ['Ayudar', 'Investigar'].includes(perfil[0]) && ['Ayudar', 'Investigar'].includes(perfil[1]), perfil.join(','));
  await page.screenshot({ path: `${SALIDA}/vocacional_perfil.png`, fullPage: true });

  // ---------- Diálogo ----------
  await page.click('#btnEmpezar');
  await page.waitForTimeout(200);
  const saludo = await page.locator('.msg.orientador .globo').first().innerText();
  check('diálogo: saludo con el nombre y el perfil', saludo.includes('Ana') && /ayudar/i.test(saludo) && saludo.includes('10 mensajes'), saludo.slice(0, 90));
  check('diálogo: botón deshabilitado con menos de 20 caracteres', await (async () => { await page.fill('#texto', 'corto'); return page.isDisabled('#btnEnviar'); })());
  await mandar(page, 4);
  let ll = await page.evaluate(() => window.__llamadas);
  check('diálogo: contexto con intercambio 1..4, total 10, edad y perfil', ll.map((l) => l.contexto.intercambio).join() === '1,2,3,4' && ll[0].contexto.total === 10 && ll[0].contexto.edad >= 16 && ll[0].contexto.perfil.length === 6 && ll[0].filosofo === 'orientador_vocacional', JSON.stringify(ll[0].contexto));
  check('diálogo: el historial incluye el saludo y los mensajes', ll[3].historial.length === 8 && ll[3].historial[0].role === 'assistant');
  check('diálogo: puntaje 9% por intercambio', (await saves(page)).join() === '9,18,27,36', (await saves(page)).join());
  check('diálogo: el HTML de la IA no ejecuta scripts', await page.evaluate(() => !window.__xss && !document.querySelector('.globo script')));
  check('diálogo: contador 4/10 y fase 2', (await page.innerText('#contador')) === '4/10' && (await page.innerText('#fase')).includes('Tus fortalezas'));

  // Retomar (misma compu)
  await page.reload();
  await page.waitForTimeout(900);
  check('retomar: sigue en 4/10 con la conversación', await page.isVisible('#pantallaChat') && (await page.innerText('#contador')) === '4/10' && (await page.locator('.msg').count()) === 9);

  // IA caída
  await page.evaluate(() => { window.__modoIA = 'caida'; });
  await page.fill('#texto', 'Mensaje que no llega porque la IA está caída hoy.');
  await page.click('#btnEnviar');
  await page.waitForTimeout(200);
  check('IA caída: el mensaje vuelve al cuadro y no cuenta', (await page.inputValue('#texto')).includes('no llega') && (await page.innerText('#contador')) === '4/10');
  await page.evaluate(() => { window.__modoIA = 'ok'; });
  await page.fill('#texto', '');

  await mandar(page, 5);
  check('diálogo: con 9 mensajes todavía no aparece el cierre', await page.isHidden('#cierre') && await page.isVisible('#entrada'));
  await mandar(page, 1);
  await page.waitForTimeout(200);
  check('diálogo: después de la respuesta 10, cierre visible y sin cuadro de texto', await page.isVisible('#cierre') && await page.isHidden('#entrada') && (await page.locator('.msg.orientador').last().innerText()).includes('Cierre'));
  check('diálogo: 90% al terminar la conversación', (await saves(page)).at(-1) === 90);
  await page.screenshot({ path: `${SALIDA}/vocacional_chat.png`, fullPage: false });

  // ---------- Ficha ----------
  await page.click('#btnArmarPlan');
  await page.waitForTimeout(400);
  ll = await page.evaluate(() => window.__llamadas.at(-1));
  check('plan: se pide en modo plan con los 10 intercambios', ll.modo === 'plan' && ll.historial.length === 21);
  const ficha = await page.innerText('#ficha');
  check('plan: ficha con resumen, opciones, pasos, becas y pregunta', ficha.includes('Licenciatura en Enfermería') && ficha.includes('Ruta larga') && ficha.includes('Esta semana') && ficha.includes('Becas Progresar') && ficha.includes('¿Qué es cuidar bien?'));
  const ultimo = await page.evaluate(() => window.__saves.at(-1));
  check('plan: se guarda con 100%, completed y planVocacional con alumno', ultimo.score === 100 && ultimo.status === 'completed' && ultimo.metadata.planVocacional.opciones.length === 2 && ultimo.metadata.planVocacional.alumno.curso === '6A');
  await page.screenshot({ path: `${SALIDA}/vocacional_plan_movil.png`, fullPage: true });
  await page.reload();
  await page.waitForTimeout(900);
  check('plan: al volver a entrar se muestra la ficha', await page.isVisible('#pantallaPlan') && (await page.innerText('#ficha')).includes('Licenciatura'));
  check('sin errores JS', errores.length === 0, JSON.stringify(errores.slice(0, 3)));
  await context.close();

  // ---------- Ficha de respaldo (la IA no devuelve plan) ----------
  ({ page, errores, context } = await abrir(b, 'dialogo/chat_vocacional.html'));
  await contestarTest(page);
  await page.click('#btnPerfil');
  await page.click('#btnEmpezar');
  await mandar(page, 10);
  await page.evaluate(() => { window.__modoIA = 'sinplan'; });
  await page.click('#btnArmarPlan');
  await page.waitForTimeout(400);
  const fichaR = await page.innerText('#ficha');
  check('respaldo: ficha con el perfil y la síntesis del orientador', fichaR.includes('Síntesis del orientador') && fichaR.includes('preinscribirte') && fichaR.includes('Ayudar'));
  check('respaldo: sin errores JS', errores.length === 0, JSON.stringify(errores.slice(0, 3)));
  await context.close();

  // ---------- Otro dispositivo con ficha en Firebase ----------
  ({ page, errores, context } = await abrir(b, 'dialogo/chat_vocacional.html', { planGuardado: { ...PLAN, fecha: '2026-11-20', perfil: { S: 100, I: 75, A: 50, R: 25, E: 25, C: 0 } } }));
  check('otro dispositivo: muestra la ficha guardada', await page.isVisible('#pantallaPlan') && (await page.innerText('#ficha')).includes('2026-11-20'));
  await page.click('#btnDeNuevo');
  await page.waitForTimeout(200);
  check('hacer de nuevo: vuelve al autotest vacío', await page.isVisible('#pantallaTest') && (await page.locator('.opc.sel').count()) === 0);
  await context.close();

  // ---------- Escritorio ----------
  ({ page, errores, context } = await abrir(b, 'dialogo/chat_vocacional.html', { planGuardado: { ...PLAN, fecha: '2026-11-20', perfil: { S: 100, I: 75, A: 50, R: 25, E: 25, C: 0 } } , viewport: { width: 1280, height: 900 } }));
  await page.screenshot({ path: `${SALIDA}/vocacional_plan_pc.png`, fullPage: true });
  const anchoOk = await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth);
  check('escritorio: sin scroll horizontal', anchoOk);
  await context.close();

  // ---------- Vista docente ----------
  const stubDocente = STUB_FIREBASE.replace('isCurrentUserAdmin(){ return false; }', 'isCurrentUserAdmin(){ return true; }')
    .replace('export async function getDocs(){ return { docs: [], forEach(){} }; }',
      `export async function getDocs(){ const fila = (n, c, plan) => ({ data: () => ({ uid: n, moduleId: 'orientacion_vocacional', planVocacional: plan ? { ...${JSON.stringify(PLAN)}, fecha: '2026-11-26', perfil: { S: 100, I: 75 }, alumno: { nombre: n, curso: c } } : undefined }) });
        return { docs: [fila('Ana Pérez', '6A', true), fila('Juan Gómez', '6B', true), fila('Sin ficha', '6A', false)] }; }`);
  const ctxD = await b.newContext({ viewport: { width: 1100, height: 900 } });
  const pd = await ctxD.newPage();
  const errD = [];
  pd.on('pageerror', (e) => errD.push(e.message));
  await servirRepo(pd, { firebaseJs: stubDocente });
  await pd.goto(`${BASE}/planes_vocacionales.html`);
  await pd.waitForTimeout(600);
  check('docente: lista 2 fichas (la vacía no)', (await pd.locator('.fila').count()) === 2);
  await pd.selectOption('#selCurso', '6B');
  check('docente: filtro por curso', (await pd.locator('.fila').count()) === 1);
  await pd.selectOption('#selCurso', '');
  await pd.click('.fila >> nth=0 >> button');
  check('docente: abre la ficha completa', (await pd.innerText('.fila.abierta')).includes('Primer paso'));
  await pd.screenshot({ path: `${SALIDA}/vocacional_docente.png`, fullPage: true });
  check('docente: sin errores JS', errD.length === 0, JSON.stringify(errD.slice(0, 3)));
  await ctxD.close();

  // ---------- Presentación ----------
  ({ page, errores, context } = await abrir(b, 'themes/orientacion_vocacional/content.html', { viewport: { width: 420, height: 860 } }));
  await page.waitForTimeout(600);
  const txt = await page.innerText('body');
  check('presentación: carga las opciones de Tucumán desde opciones.json', txt.includes('Escuela de Educación Profesional') && txt.includes('Becas Progresar'));
  check('presentación: el acceso docente no se ve para estudiantes', await page.isHidden('#btnDocente'));
  check('presentación: sección de filosofía', txt.includes('Aristóteles') && txt.includes('Sartre') && txt.includes('Byung-Chul Han'));
  const botones = await page.$$eval('button, a.btn', (bs) => bs.filter((x) => x.offsetParent).map((x) => ({ t: x.innerText, bg: getComputedStyle(x).backgroundColor, borde: getComputedStyle(x).borderColor })));
  const conEmoji = botones.filter((x) => /\p{Extended_Pictographic}/u.test(x.t));
  check('presentación: botones sin emojis', conEmoji.length === 0, JSON.stringify(conEmoji));
  check('presentación: botones violetas', botones.length > 0 && botones.every((x) => x.bg.includes('128, 90, 213') || x.borde.includes('128, 90, 213')), JSON.stringify(botones.slice(0, 3)));
  check('presentación: sin scroll horizontal en el celular', await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
  await page.screenshot({ path: `${SALIDA}/vocacional_presentacion.png`, fullPage: true });
  await Promise.all([page.waitForURL(/chat_vocacional/), page.click('#btnComenzar')]);
  check('presentación: "Comenzar" abre el chat', page.url().includes('dialogo/chat_vocacional.html'));
  check('presentación: sin errores JS', errores.length === 0, JSON.stringify(errores.slice(0, 3)));
  await context.close();

  await b.close();
  process.exit(fin());
}

main_jugar_vocacional();
