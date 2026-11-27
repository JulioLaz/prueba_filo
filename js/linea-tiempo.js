/*
 * js/linea-tiempo.js — motor de las actividades de la línea de tiempo (linea.html).
 *
 * Modos (?modo=), cada uno guarda su % en Firebase con lessonId = modo:
 *  - explorar:   hitos por épocas o a escala real (con zoom y "reloj de la humanidad").
 *                Cada ventana se lee EN VOZ ALTA (js/readaloud-system.js, 80% de las palabras):
 *                recién ahí el hito cuenta como leído. % = hitos leídos ÷ total. Los leídos se
 *                guardan en foundConcepts con el prefijo "voz:" (lo anterior a la lectura en voz
 *                alta no cuenta) y se retoman. En el termómetro la ventana se abre sin lectura.
 *  - ordenar:    8 rondas de 5 hitos para poner en orden cronológico, de lo lejano a lo cercano.
 *                % = posiciones correctas ÷ 40.
 *  - simultaneo: 10 preguntas «¿qué pasaba al mismo tiempo?» (±50 años, otro eje).
 *                % = aciertos ÷ 10.
 *  - termometro: por eje, juzgar 3 pasos (avanzó / igual / retrocedió) y elegir la conclusión
 *                mejor fundada; al final, ¿progresa la humanidad?
 *                % = 40 × pasos juzgados ÷ 15 + 60 × conclusiones bien fundadas ÷ 6.
 * Datos: themes/<tema>/hitos.js (LINEA_HITOS, LINEA_EJES, LINEA_ERAS) y termometro.js.
 * Firestore guarda el mejor puntaje: un intento peor no lo baja.
 * Versión: v1.1 (2026-11-27) — explorar: la ventana se lee en voz alta para contar como leída
 * v1.0 (2026-11-26)
 */
import { saveProgress, auth, db, doc, getDoc, onAuthStateChanged } from '/prueba_filo/firebase.js';

const qs = new URLSearchParams(location.search);
const TEMA = qs.get('tema') || qs.get('theme') || 'linea_tiempo';
const MODO = ['explorar', 'ordenar', 'simultaneo', 'termometro'].includes(qs.get('modo')) ? qs.get('modo') : 'explorar';
const INICIO = Date.now();
const AHORA = 2025;
const app = document.getElementById('app');

const TITULOS = {
  explorar: ['Explorar la línea', 'Abrí cada hito y leelo en voz alta para que cuente. Probá la vista a escala real.'],
  ordenar: ['Ordenar en el tiempo', 'Poné los hitos del más antiguo (arriba) al más reciente (abajo).'],
  simultaneo: ['¿Qué pasaba al mismo tiempo?', 'Encontrá qué hechos fueron contemporáneos.'],
  termometro: ['Termómetro del progreso', '¿La humanidad avanzó, retrocedió o siguió igual? Depende del eje.'],
};

// ---------- utilidades ----------
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const mezclar = (a) => { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
const cargarScript = (src) => new Promise((ok, mal) => { const s = document.createElement('script'); s.src = src; s.onload = ok; s.onerror = () => mal(new Error('No se pudo cargar ' + src)); document.head.appendChild(s); });
const anioTexto = (y) => (y < 0 ? `${Math.abs(y).toLocaleString('es-AR')} a.C.` : String(y));

let H = [], EJES = {}, ERAS = [];
const porId = (id) => H.find((h) => h.id === id);
const colorEje = (eje) => EJES[eje]?.color || '#888';

// ---------- guardado ----------
const claveSesion = `tema.${TEMA}.${MODO}`;
async function guardar(pct, metadata = {}) {
  pct = Math.max(0, Math.min(100, Math.round(pct)));
  let previo = {};
  try { previo = JSON.parse(sessionStorage.getItem(claveSesion) || '{}'); } catch {}
  const mejor = Math.max(pct, Number(previo.percentage) || 0);
  sessionStorage.setItem(claveSesion, JSON.stringify({ ...previo, percentage: mejor, completed: mejor >= 100, ultimo: pct }));
  window.__lineaUltimoGuardado = pct;
  if (!auth.currentUser) return;
  try {
    await saveProgress({
      moduleId: TEMA, lessonId: MODO,
      status: pct >= 100 ? 'completed' : pct >= 80 ? 'approved' : 'in_progress',
      score: pct, seconds: Math.round((Date.now() - INICIO) / 1000),
      metadata: { activity: 'linea_' + MODO, ...metadata },
    });
  } catch (e) { console.warn('No se pudo guardar en Firebase:', e); }
}

// Usuario (espera el login hasta 5 s)
const usuario = () => auth.currentUser ? Promise.resolve(auth.currentUser) : new Promise((ok) => {
  const t = setTimeout(() => ok(null), 5000);
  onAuthStateChanged(auth, (u) => { if (u) { clearTimeout(t); ok(u); } });
});

// ---------- detalle de un hito ----------
const fondo = document.getElementById('fondoDetalle');
const detalle = document.getElementById('detalle');
let lectorActivo = null;   // lectura en voz alta en curso (se detiene al cerrar la ventana)

/** Lector en voz alta del texto de la ventana (mismo motor que el material, textos sin emojis). */
function crearLector(el, alLeer) {
  class LectorHito extends window.ReadAloudParagraph {
    onListeningStart() { super.onListeningStart(); this.statusEl.textContent = 'Escuchando: leé todo el texto en voz alta, sin apuro'; }
    onListeningStop() {
      super.onListeningStop();
      this.micButton.querySelector('.mic-text').textContent = 'Seguir leyendo';
      this.statusEl.textContent = 'Tocá el botón para seguir desde donde ibas';
    }
    onComplete() {
      super.onComplete();
      this.micButton.querySelector('.mic-text').textContent = 'Lectura completa';
      this.micButton.disabled = true;
      this.statusEl.textContent = 'Hito leído: ya cuenta en tu avance.';
    }
  }
  return new LectorHito(el, { ...window.ReadAloudDefaults, soundsPath: 'sound/', onComplete: alLeer });
}

/**
 * Abre la ventana de un hito.
 * lectura (solo Explorar): { leido, alLeer } → si no está leído, el texto se lee en voz alta y
 * al completarlo se llama alLeer(). Sin lectura (termómetro), la ventana solo se muestra.
 */
function abrirDetalle(h, alCerrar, lectura = null) {
  const pideLectura = lectura && !lectura.leido;
  const texto = `
    <h2>${esc(h.title)}</h2>
    <p><b>${esc(h.intro)}</b></p>
    <p>${esc(h.desc)}</p>
    <h3>Mirada filosófica</h3>
    <p>${esc(h.philosophy)}</p>`;
  const conVoz = !!window.ReadAloudParagraph;
  detalle.style.borderTopColor = colorEje(h.axis);
  detalle.innerHTML = `
    <div class="meta">${esc(h.year)} · ${esc(h.era)} · <b style="color:${colorEje(h.axis)}">${esc(EJES[h.axis]?.nombre || h.axis)}</b></div>
    ${h.clave ? `<div class="meta">${esc(h.clave)}</div>` : ''}
    ${pideLectura ? `
    <div class="reading-area lectura">
      <div class="readaloud-container"><div class="readaloud" id="textoHito">${texto}</div></div>
      <div class="reading-progress">
        <div class="progress-bar-reading"><div class="progress-fill-reading"></div></div>
        <span class="progress-text-reading">0% leído</span>
      </div>
      <div class="reading-controls">
        <button class="btn mic-button" type="button" ${conVoz ? '' : 'disabled'}><span class="mic-text">${conVoz ? 'Leer en voz alta' : 'Lectura en voz alta no disponible'}</span></button>
        <div class="reading-status">${conVoz ? 'Para que el hito cuente como leído, leé en voz alta todo el texto.' : ''}</div>
        ${conVoz ? '' : `<div class="reading-error"><strong>Para que el hito cuente como leído hay que leerlo en voz alta, y este navegador no reconoce la voz.</strong>
          <ul class="reading-error-pasos"><li>Abrí la actividad en Google Chrome o Microsoft Edge, en una compu o un celular Android con micrófono.</li>
          <li>Si entraste desde WhatsApp o Instagram, abrí el link en Chrome.</li></ul></div>`}
      </div>
    </div>` : texto}
    ${lectura?.leido ? '<div class="ya-leido">Ya leíste este hito en voz alta.</div>' : ''}
    <div class="figuras">${(h.figures || []).map((f) => `<span>${esc(f)}</span>`).join('')}</div>
    <p style="text-align:right;margin:14px 0 0"><button class="btn" id="cerrarDetalle">Cerrar</button></p>`;
  fondo.classList.add('abierto');
  lectorActivo = pideLectura && conVoz ? crearLector(document.getElementById('textoHito'), lectura.alLeer) : null;
  const cerrar = () => {
    if (lectorActivo?.isListening) lectorActivo.stopListening();
    lectorActivo = null;
    fondo.classList.remove('abierto');
    alCerrar?.();
  };
  document.getElementById('cerrarDetalle').onclick = cerrar;
  fondo.onclick = (e) => { if (e.target === fondo) cerrar(); };
}

// =====================================================================
// EXPLORAR
// =====================================================================
async function explorar() {
  // Hitos leídos en voz alta (v1.1). En Firebase van con el prefijo "voz:": lo marcado antes,
  // solo con abrir la ventana, no cuenta.
  const VOZ = 'voz:';
  let leidos = new Set();
  try { leidos = new Set(JSON.parse(sessionStorage.getItem(claveSesion + '.leidosVoz') || '[]')); } catch {}
  // Retomar: hitos ya leídos guardados en Firebase (otro día u otro dispositivo)
  try {
    const u = await usuario();
    if (u) {
      const snap = await getDoc(doc(db, 'progreso_temas', `${u.uid}_${TEMA}_explorar`));
      if (snap.exists()) (snap.data().foundConcepts || []).forEach((id) => { if (String(id).startsWith(VOZ)) leidos.add(id.slice(VOZ.length)); });
    }
  } catch (e) { console.warn('No se pudo leer lo ya explorado:', e); }
  const ids = new Set(H.map((h) => h.id));
  leidos = new Set([...leidos].filter((id) => ids.has(id)));

  let vista = 'epocas';
  let zoom = 0;
  const activos = new Set(Object.keys(EJES));
  const ZOOMS = [
    { nombre: '12.000 años', desde: -10000 }, { nombre: 'Desde la escritura', desde: -3500 },
    { nombre: 'Últimos 1000 años', desde: AHORA - 1000 }, { nombre: 'Últimos 200 años', desde: AHORA - 200 },
  ];

  const pct = () => Math.round((leidos.size / H.length) * 100);
  const marcarLeido = (h) => {
    if (leidos.has(h.id)) return;
    leidos.add(h.id);
    sessionStorage.setItem(claveSesion + '.leidosVoz', JSON.stringify([...leidos]));
    guardar(pct(), { leidos: leidos.size, total: H.length, lectura: 'voz', foundConceptsList: [...leidos].map((id) => VOZ + id) });
  };

  function pintar() {
    const visibles = H.filter((h) => activos.has(h.axis));
    app.innerHTML = `
      <div class="panel">
        <div class="fila" style="justify-content:space-between">
          <b id="progresoTxt">Leíste ${leidos.size} de ${H.length} hitos (${pct()}%)</b>
          <div class="fila">
            <button class="btn btn-sec btn-sm ${vista === 'epocas' ? 'activo' : ''}" data-vista="epocas">Por épocas</button>
            <button class="btn btn-sec btn-sm ${vista === 'escala' ? 'activo' : ''}" data-vista="escala">Escala real</button>
          </div>
        </div>
        <div class="barra"><div style="width:${pct()}%"></div></div>
        <div class="fila" style="margin-top:12px">${Object.entries(EJES).map(([k, e]) =>
          `<span class="chip ${activos.has(k) ? '' : 'apagado'}" data-eje="${k}" title="${esc(e.desc)}"><span class="punto" style="background:${e.color}"></span>${esc(e.nombre)}</span>`).join('')}</div>
      </div>
      <div id="vista"></div>`;
    app.querySelectorAll('[data-vista]').forEach((b) => b.onclick = () => { vista = b.dataset.vista; pintar(); });
    app.querySelectorAll('[data-eje]').forEach((c) => c.onclick = () => {
      const k = c.dataset.eje;
      if (activos.has(k) && activos.size > 1) activos.delete(k); else activos.add(k);
      pintar();
    });
    const cont = document.getElementById('vista');
    if (vista === 'epocas') pintarEpocas(cont, visibles); else pintarEscala(cont, visibles);
  }

  function abrir(h) { abrirDetalle(h, pintar, { leido: leidos.has(h.id), alLeer: () => marcarLeido(h) }); }

  function pintarEpocas(cont, visibles) {
    cont.innerHTML = ERAS.map((era) => {
      const hs = visibles.filter((h) => h.era === era);
      if (!hs.length) return '';
      return `<h2 class="era">${esc(era)}</h2>` + hs.map((h) => `
        <button class="hito ${leidos.has(h.id) ? 'leido' : ''}" data-id="${h.id}" style="border-left-color:${colorEje(h.axis)}">
          <div class="anio">${esc(h.year)} · ${esc(EJES[h.axis]?.nombre)}</div>
          <div class="tit">${esc(h.title)}</div>
          <div class="intro">${esc(h.intro)}</div>
        </button>`).join('');
    }).join('');
    cont.querySelectorAll('.hito').forEach((b) => b.onclick = () => abrir(porId(b.dataset.id)));
  }

  function pintarEscala(cont, visibles) {
    const z = ZOOMS[zoom];
    const rango = AHORA - z.desde;
    const pos = (y) => ((y - z.desde) / rango) * 100;
    const enRango = visibles.filter((h) => h.sort >= z.desde);
    const pasos = rango > 5000 ? 2000 : rango > 1500 ? 500 : rango > 500 ? 100 : 25;
    const ticks = [];
    for (let y = Math.ceil(z.desde / pasos) * pasos; y <= AHORA; y += pasos) ticks.push(y);
    // Reloj: los 12.000 años desde la agricultura como un día de 24 horas
    const desde0 = H[0].sort;
    const hora = (y) => { const m = Math.min(1439, Math.round(((y - desde0) / (AHORA - desde0)) * 1440)); return `${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`; };
    const relojIds = ['invencion_de_la_escritura', 'socrates', 'imprenta_de_gutenberg', 'maquina_de_vapor_y_revolucion_industrial',
      'independencia_argentina_en_tucuman', 'la_penicilina_y_la_medicina_moderna', 'world_wide_web', 'explosion_de_la_inteligencia_artificial'];
    const mitad = [...H].sort((a, b) => a.sort - b.sort)[Math.floor(H.length / 2)];
    cont.innerHTML = `
      <div class="panel">
        <p style="margin-top:0">Cada punto es un hito, ubicado en su año real. Tocalo para leerlo. Cambiá el zoom y mirá cómo se amontonan los puntos a la derecha: <b>la mitad de los hitos ocurrió en los últimos ${AHORA - mitad.sort} años</b>.</p>
        <div class="fila">${ZOOMS.map((zz, i) => `<button class="btn btn-sec btn-sm ${i === zoom ? 'activo' : ''}" data-zoom="${i}">${esc(zz.nombre)}</button>`).join('')}</div>
        <div class="escala">
          ${Object.entries(EJES).filter(([k]) => activos.has(k)).map(([k, e]) => `
            <div class="carril"><span class="nom">${esc(e.nombre)}</span>
              ${enRango.filter((h) => h.axis === k).map((h, i) => `<button class="dot ${i % 2 ? 'alt' : ''} ${leidos.has(h.id) ? 'leido' : ''}" data-id="${h.id}" title="${esc(h.year + ' · ' + h.title)}" aria-label="${esc(h.title)}" style="left:${pos(h.sort)}%;background:${e.color}"></button>`).join('')}
            </div>`).join('')}
          <div class="ticks">${ticks.map((y) => `<span style="left:${pos(y)}%">${anioTexto(y)}</span>`).join('')}</div>
        </div>
      </div>
      <div class="panel">
        <b>El reloj de la humanidad</b>
        <p style="margin:6px 0">Si los ${(AHORA - desde0).toLocaleString('es-AR')} años desde la agricultura fueran un solo día de 24 horas:</p>
        <ul class="reloj">${relojIds.map(porId).filter(Boolean).map((h) => `<li><b>${hora(h.sort)}</b> · ${esc(h.title)} (${esc(h.year)})</li>`).join('')}</ul>
        <p style="margin:6px 0 0;color:var(--muted)">Casi toda la técnica que usamos apareció en la última hora del día.</p>
      </div>`;
    cont.querySelectorAll('[data-zoom]').forEach((b) => b.onclick = () => { zoom = Number(b.dataset.zoom); pintar(); });
    cont.querySelectorAll('.dot').forEach((b) => b.onclick = () => abrir(porId(b.dataset.id)));
  }

  pintar();
}

// =====================================================================
// ORDENAR
// =====================================================================
function ordenar() {
  const RONDAS = [
    { gap: 600 }, { gap: 400 }, { gap: 250 }, { gap: 120 }, { gap: 80 },
    { gap: 50, desde: 1400 }, { gap: 25, desde: 1700 }, { gap: 12, desde: 1800 },
  ];
  const POR_RONDA = 5;
  let ronda = 0;
  const aciertos = [];

  function elegir({ gap, desde = -Infinity }) {
    for (let g = gap; g >= 1; g = Math.floor(g * 0.7)) {
      for (let intento = 0; intento < 40; intento++) {
        const sel = [];
        for (const h of mezclar(H.filter((x) => x.sort >= desde))) {
          if (sel.every((s) => Math.abs(s.sort - h.sort) >= g)) sel.push(h);
          if (sel.length === POR_RONDA) return sel;
        }
      }
    }
    return mezclar(H).slice(0, POR_RONDA);
  }

  function jugarRonda() {
    let items = elegir(RONDAS[ronda]);
    // que no empiece ya ordenado
    while (items.every((h, i) => i === 0 || items[i - 1].sort < h.sort)) items = mezclar(items);
    let comprobado = false;

    function pintar() {
      app.innerHTML = `
        <div class="panel">
          <div class="fila" style="justify-content:space-between"><b>Ronda ${ronda + 1} de ${RONDAS.length}</b>
            <span>Aciertos: ${aciertos.reduce((a, b) => a + b, 0)} de ${ronda * POR_RONDA}</span></div>
          <div class="barra"><div style="width:${(ronda / RONDAS.length) * 100}%"></div></div>
          <p style="margin:10px 0 0">Ordená del <b>más antiguo</b> (arriba) al <b>más reciente</b> (abajo). Usá las flechas. ${ronda >= 5 ? 'Ahora los hechos están más cerca en el tiempo: pensá con cuidado.' : ''}</p>
        </div>
        <div id="lista">${items.map((h, i) => `
          <div class="orden-item ${comprobado ? (correcto(i) ? 'bien' : 'mal') : ''}" style="border-left-color:${colorEje(h.axis)}">
            <div class="txt"><b>${esc(h.title)}</b><div style="font-size:14px;color:#c8d2f0">${esc(h.intro)}</div>
              ${comprobado ? `<div class="revelado">${esc(h.year)}${h.clave ? ' · ' + esc(h.clave) : ''} ${correcto(i) ? '✓' : '✗'}</div>` : ''}</div>
            ${comprobado ? '' : `<div class="flechas">
              <button class="btn btn-sm" data-sube="${i}" ${i === 0 ? 'disabled' : ''} aria-label="Subir">▲</button>
              <button class="btn btn-sm" data-baja="${i}" ${i === items.length - 1 ? 'disabled' : ''} aria-label="Bajar">▼</button></div>`}
          </div>`).join('')}</div>
        <div id="pie" style="margin-top:12px"></div>`;
      app.querySelectorAll('[data-sube]').forEach((b) => b.onclick = () => { const i = +b.dataset.sube; [items[i - 1], items[i]] = [items[i], items[i - 1]]; pintar(); });
      app.querySelectorAll('[data-baja]').forEach((b) => b.onclick = () => { const i = +b.dataset.baja; [items[i + 1], items[i]] = [items[i], items[i + 1]]; pintar(); });
      const pie = document.getElementById('pie');
      if (!comprobado) {
        pie.innerHTML = '<button class="btn" id="comprobar">Comprobar</button>';
        document.getElementById('comprobar').onclick = () => {
          comprobado = true;
          const ok = items.filter((_, i) => correcto(i)).length;
          aciertos.push(ok);
          guardar((aciertos.reduce((a, b) => a + b, 0) / (RONDAS.length * POR_RONDA)) * 100, { rondas: aciertos.length, aciertos });
          pintar();
        };
      } else {
        const ok = aciertos[ronda];
        const ordenOk = [...items].sort((a, b) => a.sort - b.sort);
        pie.innerHTML = `<div class="feedback ${ok === POR_RONDA ? 'bien' : 'mal'}"><b>${ok} de ${POR_RONDA} en su lugar.</b>
          ${ok < POR_RONDA ? `<div style="margin-top:6px">Orden correcto: ${ordenOk.map((h) => `${esc(h.title)} (${esc(h.year)})`).join(' → ')}</div>` : ''}</div>
          <p><button class="btn" id="seguir">${ronda + 1 < RONDAS.length ? 'Siguiente ronda' : 'Ver resultado'}</button></p>`;
        document.getElementById('seguir').onclick = () => { ronda++; ronda < RONDAS.length ? jugarRonda() : final(); };
      }
    }
    const correcto = (i) => [...items].sort((a, b) => a.sort - b.sort)[i] === items[i];
    pintar();
  }

  function final() {
    const total = aciertos.reduce((a, b) => a + b, 0);
    const pct = Math.round((total / (RONDAS.length * POR_RONDA)) * 100);
    app.innerHTML = `<div class="panel" id="resultado"><h2 style="margin-top:0">Resultado: ${total} de ${RONDAS.length * POR_RONDA} (${pct}%)</h2>
      <p>${pct >= 80 ? '¡Muy bien! Tenés una buena idea de cómo se ordena la historia.' : 'Volvé a la vista "Por épocas" en Explorar y probá otra vez: los hitos cambian en cada partida.'}</p>
      <p>Se guarda tu mejor resultado.</p>
      <div class="fila"><button class="btn" id="otra">Jugar de nuevo</button></div></div>`;
    document.getElementById('otra').onclick = () => { ronda = 0; aciertos.length = 0; jugarRonda(); };
  }

  jugarRonda();
}

// =====================================================================
// ¿QUÉ PASABA AL MISMO TIEMPO?
// =====================================================================
function simultaneo() {
  const N = 10, CERCA = 50, LEJOS = 250;
  const candidatos = mezclar(H.filter((p) => H.some((o) => o !== p && o.axis !== p.axis && Math.abs(o.sort - p.sort) <= CERCA)));
  const preguntas = [];
  const usados = new Set();
  for (const p of candidatos) {
    if (preguntas.length === N) break;
    if (usados.has(p.id)) continue;
    const pares = H.filter((o) => o !== p && o.axis !== p.axis && Math.abs(o.sort - p.sort) <= CERCA && !usados.has(o.id));
    const lejos = mezclar(H.filter((o) => Math.abs(o.sort - p.sort) >= LEJOS)).slice(0, 3);
    if (!pares.length || lejos.length < 3) continue;
    const par = pares.sort((a, b) => Math.abs(a.sort - p.sort) - Math.abs(b.sort - p.sort))[0];
    usados.add(p.id); usados.add(par.id);
    preguntas.push({ p, par, opciones: mezclar([par, ...lejos]) });
  }
  let i = 0, aciertos = 0;

  function pintar() {
    const q = preguntas[i];
    app.innerHTML = `
      <div class="panel">
        <div class="fila" style="justify-content:space-between"><b>Pregunta ${i + 1} de ${preguntas.length}</b><span>Aciertos: ${aciertos}</span></div>
        <div class="barra"><div style="width:${(i / preguntas.length) * 100}%"></div></div>
      </div>
      <div class="panel" style="border-left:5px solid ${colorEje(q.p.axis)}">
        <div style="color:var(--muted);font-size:13px">${esc(q.p.year)} · ${esc(EJES[q.p.axis]?.nombre)}</div>
        <b>${esc(q.p.title)}</b>
        <p style="margin:6px 0 0">¿Cuál de estos hechos ocurrió <b>en la misma época</b> (con menos de ${CERCA} años de diferencia)?</p>
      </div>
      <div id="ops">${q.opciones.map((o, k) => `<button class="opcion" data-k="${k}"><b>${esc(o.title)}</b><div class="extra"></div></button>`).join('')}</div>
      <div id="pie"></div>`;
    app.querySelectorAll('.opcion').forEach((b) => b.onclick = () => responder(+b.dataset.k));
  }

  function responder(k) {
    const q = preguntas[i];
    const elegido = q.opciones[k];
    const ok = elegido === q.par;
    if (ok) aciertos++;
    app.querySelectorAll('.opcion').forEach((b, j) => {
      const o = q.opciones[j];
      b.disabled = true;
      if (o === q.par) b.classList.add('bien'); else if (j === k) b.classList.add('mal');
      b.querySelector('.extra').innerHTML = `<span class="revelado">${esc(o.year)} · ${esc(EJES[o.axis]?.nombre)}</span>`;
    });
    guardar((aciertos / preguntas.length) * 100, { respondidas: i + 1, aciertos });
    document.getElementById('pie').innerHTML = `<div class="feedback ${ok ? 'bien' : 'mal'}"><b>${ok ? '¡Bien!' : 'No.'}</b>
      Mientras ocurría «${esc(q.p.title)}» (${esc(q.p.year)}), en otro plano de la historia pasaba «${esc(q.par.title)}» (${esc(q.par.year)}).</div>
      <p><button class="btn" id="seguir">${i + 1 < preguntas.length ? 'Siguiente' : 'Ver resultado'}</button></p>`;
    document.getElementById('seguir').onclick = () => { i++; i < preguntas.length ? pintar() : final(); };
  }

  function final() {
    const pct = Math.round((aciertos / preguntas.length) * 100);
    app.innerHTML = `<div class="panel" id="resultado"><h2 style="margin-top:0">Resultado: ${aciertos} de ${preguntas.length} (${pct}%)</h2>
      <p>La historia no avanza en carriles separados: mientras unos pensaban, otros guerreaban, inventaban o luchaban por sus derechos.</p>
      <p>Se guarda tu mejor resultado.</p>
      <div class="fila"><button class="btn" id="otra">Jugar de nuevo</button></div></div>`;
    document.getElementById('otra').onclick = () => simultaneo();
  }

  pintar();
}

// =====================================================================
// TERMÓMETRO DEL PROGRESO
// =====================================================================
function termometro() {
  const T = window.LINEA_TERMOMETRO;
  const pasosTotales = T.ejes.reduce((a, e) => a + e.hitos.length - 1, 0);
  const conclusiones = T.ejes.length + 1;
  const juicios = T.ejes.map((e) => Array(e.hitos.length - 1).fill(null));   // +1 / 0 / -1
  const bien = Array(conclusiones).fill(null);                                 // true / false
  let e = 0;

  const puntaje = () => {
    const juzgados = juicios.flat().filter((v) => v !== null).length;
    const ok = bien.filter((v) => v === true).length;
    return (40 * juzgados) / pasosTotales + (60 * ok) / conclusiones;
  };
  const guardarAvance = () => guardar(puntaje(), { juicios, conclusiones: bien });

  function grafico(vals, color, ancho = 260, alto = 90) {
    const pts = [0];
    vals.forEach((v) => pts.push(pts.at(-1) + (v ?? 0)));
    const max = Math.max(3, ...pts.map(Math.abs));
    const x = (i) => 12 + (i * (ancho - 24)) / (pts.length - 1);
    const y = (v) => alto / 2 - (v / max) * (alto / 2 - 10);
    return `<svg viewBox="0 0 ${ancho} ${alto}" width="100%" role="img" aria-label="Gráfico del eje">
      <line x1="0" y1="${alto / 2}" x2="${ancho}" y2="${alto / 2}" stroke="#2a3666" stroke-dasharray="4"/>
      <polyline fill="none" stroke="${color}" stroke-width="3" points="${pts.map((v, i) => `${x(i)},${y(v)}`).join(' ')}"/>
      ${pts.map((v, i) => `<circle cx="${x(i)}" cy="${y(v)}" r="4" fill="${color}"/>`).join('')}
      <text x="4" y="12" fill="#9fb0d8" font-size="10">mejor</text><text x="4" y="${alto - 4}" fill="#9fb0d8" font-size="10">peor</text></svg>`;
  }

  function pintarEje() {
    const cfg = T.ejes[e];
    const hs = cfg.hitos.map(porId);
    const color = colorEje(cfg.eje);
    const listos = juicios[e].every((v) => v !== null);
    app.innerHTML = `
      <div class="panel">
        <div class="fila" style="justify-content:space-between"><b>Eje ${e + 1} de ${T.ejes.length}: <span style="color:${color}">${esc(EJES[cfg.eje].nombre)}</span></b></div>
        <div class="barra"><div style="width:${(e / T.ejes.length) * 100}%"></div></div>
        <p style="margin:8px 0 0">${esc(EJES[cfg.eje].desc)}. Tocá cada hito si querés releerlo y juzgá cada paso. Acá no hay respuestas correctas: importa tu razonamiento.</p>
      </div>
      ${hs.slice(1).map((b, j) => {
        const a = hs[j];
        const v = juicios[e][j];
        const opc = [[1, 'Avanzó'], [0, 'Siguió igual'], [-1, 'Retrocedió']];
        return `<div class="paso">
          <div>De <a href="#" data-ver="${a.id}" style="color:#d6c8ff">${esc(a.title)}</a> (${esc(a.year)})
          a <a href="#" data-ver="${b.id}" style="color:#d6c8ff">${esc(b.title)}</a> (${esc(b.year)}):
          en <b>${esc(EJES[cfg.eje].nombre.toLowerCase())}</b>, la humanidad...</div>
          <div class="fila" style="margin-top:8px">${opc.map(([val, txt]) => `<button class="btn btn-sec btn-sm ${v === val ? 'activo' : ''}" data-paso="${j}" data-val="${val}">${txt}</button>`).join('')}</div>
        </div>`;
      }).join('')}
      <div class="panel" id="conclusion">
        <b>Tu termómetro de ${esc(EJES[cfg.eje].nombre.toLowerCase())}</b>
        ${grafico(juicios[e], color)}
        ${listos ? pintarPregunta(cfg, e) : '<p style="color:var(--muted);margin:4px 0 0">Juzgá los tres pasos para ver la pregunta de cierre del eje.</p>'}
      </div>`;
    app.querySelectorAll('[data-ver]').forEach((a) => a.onclick = (ev) => { ev.preventDefault(); abrirDetalle(porId(a.dataset.ver)); });
    app.querySelectorAll('[data-paso]').forEach((b) => b.onclick = () => {
      juicios[e][+b.dataset.paso] = +b.dataset.val; guardarAvance(); pintarEje();
    });
    conectarPregunta(T.ejes[e], e, () => { e++; e < T.ejes.length ? pintarEje() : pintarFinal(); });
  }

  function pintarPregunta(cfg, k) {
    const resp = bien[k];
    return `<p style="margin:10px 0 4px"><b>${esc(cfg.pregunta)}</b></p>
      ${cfg.opciones.map((o, j) => `<button class="opcion ${resp !== null ? (j === cfg.correcta ? 'bien' : (j === cfg._elegida ? 'mal' : '')) : ''}" data-op="${j}" ${resp !== null ? 'disabled' : ''}>${esc(o)}</button>`).join('')}
      ${resp !== null ? `<div class="feedback ${resp ? 'bien' : 'mal'}"><b>${resp ? 'Bien fundada.' : 'Esa no es la mejor fundada.'}</b> ${esc(cfg.porque)}</div>
        <p><button class="btn" id="seguir">${k + 1 < T.ejes.length ? 'Siguiente eje' : k === T.ejes.length ? 'Ver resultado' : 'Pregunta final'}</button></p>` : ''}`;
  }

  function conectarPregunta(cfg, k, siguiente) {
    app.querySelectorAll('[data-op]').forEach((b) => b.onclick = () => {
      if (bien[k] !== null) return;
      cfg._elegida = +b.dataset.op;
      bien[k] = cfg._elegida === cfg.correcta;
      guardarAvance();
      k < T.ejes.length ? pintarEje() : pintarFinal();
    });
    const s = document.getElementById('seguir');
    if (s) s.onclick = siguiente;
  }

  function pintarFinal() {
    const k = T.ejes.length;
    app.innerHTML = `
      <div class="panel"><b>Tus cinco termómetros</b>
        <div class="graficos" style="margin-top:8px">${T.ejes.map((cfg, j) => `<div class="grafico"><h4 style="color:${colorEje(cfg.eje)}">${esc(EJES[cfg.eje].nombre)}</h4>${grafico(juicios[j], colorEje(cfg.eje), 200, 80)}</div>`).join('')}</div>
      </div>
      <div class="panel">${pintarPregunta(T.final, k)}</div>`;
    conectarPregunta(T.final, k, resultado);
  }

  function resultado() {
    const pct = Math.round(puntaje());
    const ok = bien.filter(Boolean).length;
    app.innerHTML = `<div class="panel" id="resultado"><h2 style="margin-top:0">Resultado: ${pct}%</h2>
      <p>Conclusiones bien fundadas: ${ok} de ${conclusiones}.</p>
      <p>Walter Benjamin imaginó al «ángel de la historia»: mira hacia el pasado y ve ruinas, mientras la tormenta del progreso lo empuja hacia el futuro. Tus termómetros muestran que el progreso no es uno solo: hay que preguntar <i>progreso en qué</i> y <i>para quiénes</i>.</p>
      <p>Se guarda tu mejor resultado.</p>
      <div class="fila"><button class="btn" id="otra">Hacerlo de nuevo</button></div></div>`;
    document.getElementById('otra').onclick = () => termometro();
  }

  pintarEje();
}

// =====================================================================
// INICIO
// =====================================================================
async function main_linea_tiempo() {
  const [titulo, sub] = TITULOS[MODO];
  document.getElementById('titulo').textContent = titulo;
  document.getElementById('subtitulo').textContent = sub;
  document.title = titulo;
  document.getElementById('volver').onclick = () => {
    location.href = `tema.html?tema=${encodeURIComponent(TEMA)}&theme=${encodeURIComponent(TEMA)}`;
  };
  try {
    await cargarScript(`themes/${TEMA}/hitos.js`);
    if (MODO === 'termometro') await cargarScript(`themes/${TEMA}/termometro.js`);
  } catch (e) {
    app.innerHTML = `<p class="cargando">No se pudo cargar la actividad (${esc(e.message)}).</p>`;
    return;
  }
  H = [...(window.LINEA_HITOS || [])].sort((a, b) => a.sort - b.sort);
  EJES = window.LINEA_EJES || {};
  ERAS = window.LINEA_ERAS || [];
  ({ explorar, ordenar, simultaneo, termometro })[MODO]();
}

main_linea_tiempo();
