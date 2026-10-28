/**
 * js/progreso-tarjetas.js
 * Pie de las tarjetas de tema en el inicio (index.html) con datos reales de Firebase,
 * sellos de "Aprobado" / "Completo" y resumen de temas conquistados por unidad.
 *
 * - Alumno: Aprobadas (actividades ≥ 80%), Avance (promedio de las actividades del
 *   tema, igual que la barra del hub) y Minutos dedicados (tiempo real).
 *   Tarjeta dorada al aprobar (≥ 80%) y brillante al completar (100%).
 * - Admin: Alumnos que empezaron, cuántos aprobaron y avance promedio del curso.
 * - Sin sesión: cantidad de actividades, minutos estimados y "—".
 *
 * Una sola consulta al cargar (todo el progreso del alumno o, para el admin, del curso).
 * main.js llama a window.aplicarProgresoTarjetas() cada vez que vuelve a dibujar las tarjetas.
 *
 * Versión: v1.5.0 (2026-10-28) — temas con examen: se aprueban con al menos 60%
 *   (minimoActividad) en CADA actividad y el examen aprobado; "Falta examen" cuando
 *   ya se llegó al mínimo en todas. Los temas sin examen siguen con 80% de promedio.
 * v1.4.0 (2026-10-27) — el examen cuenta como una actividad más en
 *   "Aprobadas" (ej. 7/7 = 6 actividades + examen); el avance sigue siendo el de las actividades
 * v1.3.0 (2026-10-27) — temas con examen oral (EXAMEN_CONFIG): el sello
 *   "Aprobado" exige avance ≥ 80% Y examen aprobado; con 80% sin examen muestra
 *   "Falta examen". "Completo" exige además el 100% de avance.
 * v1.2.0 (2026-10-27) — el admin puede elegir "Vista: Docente / Como alumno"
 *   para ver las tarjetas con su propio progreso (probar la app como alumno)
 * v1.1.0 (2026-10-26) — el resumen de temas aprobados se muestra solo por unidad
 *   (global desactivado: MOSTRAR_RESUMEN_GLOBAL)
 * v1.0.0 (2026-10-26)
 */
import {
  auth, db, collection, query, where, getDocs, onAuthStateChanged, isCurrentUserAdmin
} from '/prueba_filo/firebase.js';

const UMBRAL_APROBADO = 80;
const ACTIVIDADES_BASE = ['quiz', 'caza', 'cruci', 'material', 'mapa'];
const ALIAS = { caza_conceptos: 'caza' };
const ES_UNIDAD = (t) => /^UNIDAD_/.test(t.difficulty || '');

let estado = null;   // { modo: 'alumno' | 'admin', porTema: Map }

function actividadesDe(temaId) {
  const conVideo = typeof VIDEO_CONFIG !== 'undefined' && VIDEO_CONFIG[temaId];
  return conVideo ? [...ACTIVIDADES_BASE, 'video'] : ACTIVIDADES_BASE;
}

// Examen oral del tema (o null si el tema no tiene): ver temas_data.js
const examenDe = (temaId) => (typeof EXAMEN_CONFIG !== 'undefined' && EXAMEN_CONFIG[temaId]) || null;

const puntaje = (d) => Math.max(0, Math.min(100, Number(d.bestScore ?? d.score ?? 0) || 0));

// Avance de UN alumno en UN tema a partir de sus documentos de progreso
function resumenAlumno(temaId, docs) {
  const acts = actividadesDe(temaId);
  const mejor = {};
  let segundos = 0;
  let notaExamen = 0;
  docs.forEach((d) => {
    const act = ALIAS[d.lessonId] || d.lessonId;
    if (act === 'examen') {
      notaExamen = Math.max(notaExamen, puntaje(d) / 10);   // score = nota × 10
      segundos += Number(d.timeSpentSeconds) || 0;
      return;
    }
    if (!acts.includes(act)) return;
    mejor[act] = Math.max(mejor[act] || 0, puntaje(d));
    segundos += Number(d.timeSpentSeconds) || 0;
  });
  const scores = acts.map((a) => mejor[a] || 0);
  const avance = Math.round(scores.reduce((a, b) => a + b, 0) / acts.length);
  const examen = examenDe(temaId);
  const examenOk = !examen || notaExamen >= examen.notaAprobacion;
  // Con examen: mínimo en cada actividad (habilita el examen). Sin examen: 80% de promedio.
  const actividadesOk = examen
    ? scores.every((s) => s >= (examen.minimoActividad ?? 60))
    : avance >= UMBRAL_APROBADO;
  return {
    total: acts.length + (examen ? 1 : 0),
    // En temas con examen, una actividad cuenta como aprobada desde el mínimo (60%)
    aprobadas: scores.filter((s) => s >= (examen ? (examen.minimoActividad ?? 60) : UMBRAL_APROBADO)).length + (examen && examenOk ? 1 : 0),
    avance,
    minutos: Math.round(segundos / 60),
    empezado: docs.length > 0,
    faltaExamen: actividadesOk && !examenOk,
    aprobado: actividadesOk && examenOk,
    completo: avance >= 100 && examenOk
  };
}

function agrupar(docs, clave) {
  const m = new Map();
  docs.forEach((d) => {
    const k = d[clave];
    if (!k) return;
    if (!m.has(k)) m.set(k, []);
    m.get(k).push(d);
  });
  return m;
}

async function cargarAlumno(user) {
  const snap = await getDocs(query(collection(db, 'progreso_temas'), where('uid', '==', user.uid)));
  const porModulo = agrupar(snap.docs.map((d) => d.data()), 'moduleId');
  const porTema = new Map();
  AVAILABLE_THEMES.filter(ES_UNIDAD).forEach((t) => porTema.set(t.id, resumenAlumno(t.id, porModulo.get(t.id) || [])));
  return { modo: 'alumno', porTema };
}

async function cargarAdmin() {
  const [alumnosSnap, progSnap] = await Promise.all([
    getDocs(query(collection(db, 'users'), where('role', '==', 'student'))),
    getDocs(collection(db, 'progreso_temas'))
  ]);
  const alumnos = alumnosSnap.docs.map((d) => d.id);
  const docs = progSnap.docs.map((d) => d.data());
  const porTema = new Map();
  AVAILABLE_THEMES.filter(ES_UNIDAD).forEach((t) => {
    const delTema = agrupar(docs.filter((d) => d.moduleId === t.id), 'uid');
    const avances = alumnos.map((uid) => resumenAlumno(t.id, delTema.get(uid) || []));
    porTema.set(t.id, {
      alumnos: alumnos.length,
      empezaron: avances.filter((a) => a.empezado).length,
      aprobaron: avances.filter((a) => a.aprobado).length,
      avanceCurso: alumnos.length ? Math.round(avances.reduce((s, a) => s + a.avance, 0) / alumnos.length) : 0
    });
  });
  return { modo: 'admin', porTema };
}

function setStat(card, nombre, valor, etiqueta) {
  const num = card.querySelector(`[data-stat="${nombre}"]`);
  const lab = card.querySelector(`[data-stat-label="${nombre}"]`);
  if (num) num.textContent = valor;
  if (lab) lab.textContent = etiqueta;
}

function ponerSello(card, texto, clase) {
  let sello = card.querySelector('.sello-tema');
  if (!texto) { sello?.remove(); return; }
  if (!sello) {
    sello = document.createElement('span');
    card.querySelector('.theme-header')?.prepend(sello);
  }
  sello.className = `sello-tema ${clase}`;
  sello.textContent = texto;
}

// Aplica el estado actual a las tarjetas dibujadas (y vuelve a valores fijos sin sesión)
function aplicarProgresoTarjetas() {
  document.querySelectorAll('.theme-card[data-theme-id]').forEach((card) => {
    const tema = AVAILABLE_THEMES.find((t) => t.id === card.dataset.themeId);
    if (!tema || !ES_UNIDAD(tema)) return;
    const datos = estado?.porTema.get(tema.id);
    card.classList.remove('tema-en-curso', 'tema-aprobado', 'tema-completo');
    ponerSello(card, null);

    if (!datos) {
      setStat(card, 'actividades', actividadesDe(tema.id).length + (examenDe(tema.id) ? 1 : 0), 'Actividades');
      setStat(card, 'tiempo', `~${tema.timeEstimate}`, 'Minutos');
      setStat(card, 'avance', '—', 'Avance');
      card.style.setProperty('--progress', '0%');
      return;
    }

    if (estado.modo === 'admin') {
      setStat(card, 'actividades', `${datos.empezaron}/${datos.alumnos}`, 'Empezaron');
      setStat(card, 'tiempo', datos.aprobaron, 'Aprobaron');
      setStat(card, 'avance', `${datos.avanceCurso}%`, 'Avance curso');
      card.style.setProperty('--progress', `${datos.avanceCurso}%`);
      return;
    }

    setStat(card, 'actividades', `${datos.aprobadas}/${datos.total}`, 'Aprobadas');
    setStat(card, 'tiempo', datos.minutos, 'Minutos');
    setStat(card, 'avance', `${datos.avance}%`, 'Avance');
    card.style.setProperty('--progress', `${datos.avance}%`);
    if (datos.completo) {
      card.classList.add('tema-completo');
      ponerSello(card, '★ Completo', 'completo');
    } else if (datos.aprobado) {
      card.classList.add('tema-aprobado');
      ponerSello(card, '✓ Aprobado', 'aprobado');
    } else if (datos.faltaExamen) {
      card.classList.add('tema-en-curso');
      ponerSello(card, 'Falta examen', 'pendiente');
    } else if (datos.avance > 0) {
      card.classList.add('tema-en-curso');
    }
  });
  mostrarConquistas();
}

// Recuadro "X de N temas aprobados" arriba de las tarjetas (solo alumnos).
// Se muestra solo al elegir una unidad y cuenta solo los temas de esa unidad.
// MOSTRAR_RESUMEN_GLOBAL = true lo muestra también con "Todo" (todas las unidades).
const MOSTRAR_RESUMEN_GLOBAL = false;
const NOMBRE_UNIDAD = { UNIDAD_I: 'Unidad 1', UNIDAD_II: 'Unidad 2', UNIDAD_III: 'Unidad 3' };

function mostrarConquistas() {
  let caja = document.getElementById('resumen-conquistas');
  const filtro = typeof currentFilter !== 'undefined' ? currentFilter : 'all';
  const esUnidad = /^UNIDAD_/.test(filtro);
  const mostrar = estado?.modo === 'alumno' && (esUnidad || (MOSTRAR_RESUMEN_GLOBAL && filtro === 'all'));
  if (!mostrar) { caja?.remove(); return; }

  const ids = AVAILABLE_THEMES.filter((t) => ES_UNIDAD(t) && (!esUnidad || t.difficulty === filtro)).map((t) => t.id);
  const temas = ids.map((id) => estado.porTema.get(id)).filter(Boolean);
  if (!temas.length) { caja?.remove(); return; }
  const aprobados = temas.filter((t) => t.aprobado).length;
  const completos = temas.filter((t) => t.completo).length;
  const faltan = temas.length - aprobados;
  const ambito = esUnidad ? `de la ${NOMBRE_UNIDAD[filtro] || 'unidad'}` : '';

  if (!caja) {
    caja = document.createElement('div');
    caja.id = 'resumen-conquistas';
    document.getElementById('themes-grid')?.before(caja);
  }
  const mensaje = aprobados === 0
    ? 'Aprobá tu primer tema para ganar su sello dorado (80% de avance; si tiene examen, 60% en cada actividad y el examen).'
    : faltan === 0
      ? `¡Aprobaste todos los temas ${ambito}! Felicitaciones.`
      : `¡Vas muy bien! Te ${faltan === 1 ? 'falta 1 tema' : `faltan ${faltan} temas`} por conquistar.`;
  caja.innerHTML = `
    <div class="conquistas-num">${esUnidad ? `${NOMBRE_UNIDAD[filtro]}: ` : ''}<strong>${aprobados}</strong> de ${temas.length} temas aprobados${completos ? ` · <strong>${completos}</strong> ${completos === 1 ? 'completo' : 'completos'}` : ''}</div>
    <div class="conquistas-barra"><div style="width:${Math.round((aprobados / temas.length) * 100)}%"></div></div>
    <div class="conquistas-msg">${mensaje}</div>`;
}

window.aplicarProgresoTarjetas = aplicarProgresoTarjetas;

// ─── Vista del admin: "Docente" (datos del curso) o "Alumno" (su propio progreso,
//     para probar la app como la ve un alumno). Se recuerda en este navegador y la
//     usan también resumen_conceptos.html y resumen_material.html.
const CLAVE_VISTA = 'admin.vistaAlumno';
const vistaAlumno = () => { try { return localStorage.getItem(CLAVE_VISTA) === '1'; } catch { return false; } };

function mostrarSelectorVista(esAdmin, user) {
  let caja = document.getElementById('vista-admin');
  if (!esAdmin) { caja?.remove(); return; }
  if (!caja) {
    caja = document.createElement('div');
    caja.id = 'vista-admin';
    caja.innerHTML = `<span>Vista:</span>
      <button type="button" class="filter-btn" data-vista="docente">Docente</button>
      <button type="button" class="filter-btn" data-vista="alumno">Como alumno</button>`;
    document.getElementById('themes-grid')?.before(caja);
    caja.addEventListener('click', async (e) => {
      const btn = e.target.closest('[data-vista]');
      if (!btn) return;
      try { localStorage.setItem(CLAVE_VISTA, btn.dataset.vista === 'alumno' ? '1' : '0'); } catch {}
      await cargarEstado(user, true);
    });
  }
  caja.querySelectorAll('[data-vista]').forEach((b) =>
    b.classList.toggle('active', (b.dataset.vista === 'alumno') === vistaAlumno()));
}

async function cargarEstado(user, esAdmin) {
  estado = null;
  if (user) {
    try {
      estado = (esAdmin && !vistaAlumno()) ? await cargarAdmin() : await cargarAlumno(user);
    } catch (error) {
      console.warn('⚠️ No se pudo cargar el progreso de las tarjetas:', error);
      estado = null;
    }
  }
  mostrarSelectorVista(esAdmin, user);
  aplicarProgresoTarjetas();
}

onAuthStateChanged(auth, async (user) => {
  const esAdmin = user ? await isCurrentUserAdmin() : false;
  await cargarEstado(user, esAdmin);
});
