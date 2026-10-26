/**
 * js/progreso-tarjetas.js
 * Pie de las tarjetas de tema en el inicio (index.html) con datos reales de Firebase,
 * sellos de "Aprobado" / "Completo" y resumen de temas conquistados.
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
 * Versión: v1.0.0 (2026-10-26)
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

const puntaje = (d) => Math.max(0, Math.min(100, Number(d.bestScore ?? d.score ?? 0) || 0));

// Avance de UN alumno en UN tema a partir de sus documentos de progreso
function resumenAlumno(temaId, docs) {
  const acts = actividadesDe(temaId);
  const mejor = {};
  let segundos = 0;
  docs.forEach((d) => {
    const act = ALIAS[d.lessonId] || d.lessonId;
    if (!acts.includes(act)) return;
    mejor[act] = Math.max(mejor[act] || 0, puntaje(d));
    segundos += Number(d.timeSpentSeconds) || 0;
  });
  const scores = acts.map((a) => mejor[a] || 0);
  return {
    total: acts.length,
    aprobadas: scores.filter((s) => s >= UMBRAL_APROBADO).length,
    avance: Math.round(scores.reduce((a, b) => a + b, 0) / acts.length),
    minutos: Math.round(segundos / 60),
    empezado: docs.length > 0
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
      aprobaron: avances.filter((a) => a.avance >= UMBRAL_APROBADO).length,
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
      setStat(card, 'actividades', actividadesDe(tema.id).length, 'Actividades');
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
    if (datos.avance >= 100) {
      card.classList.add('tema-completo');
      ponerSello(card, '★ Completo', 'completo');
    } else if (datos.avance >= UMBRAL_APROBADO) {
      card.classList.add('tema-aprobado');
      ponerSello(card, '✓ Aprobado', 'aprobado');
    } else if (datos.avance > 0) {
      card.classList.add('tema-en-curso');
    }
  });
  mostrarConquistas();
}

// "Temas aprobados: 2 de 14" arriba de las tarjetas (solo alumnos)
function mostrarConquistas() {
  let caja = document.getElementById('resumen-conquistas');
  if (!estado || estado.modo !== 'alumno') { caja?.remove(); return; }
  const temas = [...estado.porTema.values()];
  const aprobados = temas.filter((t) => t.avance >= UMBRAL_APROBADO).length;
  const completos = temas.filter((t) => t.avance >= 100).length;
  if (!caja) {
    caja = document.createElement('div');
    caja.id = 'resumen-conquistas';
    document.getElementById('themes-grid')?.before(caja);
  }
  const mensaje = aprobados === 0
    ? 'Aprobá tu primer tema (80% de avance) para ganar su sello dorado.'
    : aprobados === temas.length
      ? '¡Aprobaste todos los temas! Felicitaciones: conquistaste la filosofía.'
      : `¡Vas muy bien! Te ${temas.length - aprobados === 1 ? 'falta 1 tema' : `faltan ${temas.length - aprobados} temas`} por conquistar.`;
  caja.innerHTML = `
    <div class="conquistas-num"><strong>${aprobados}</strong> de ${temas.length} temas aprobados${completos ? ` · <strong>${completos}</strong> ${completos === 1 ? 'completo' : 'completos'}` : ''}</div>
    <div class="conquistas-barra"><div style="width:${Math.round((aprobados / (temas.length || 1)) * 100)}%"></div></div>
    <div class="conquistas-msg">${mensaje}</div>`;
}

window.aplicarProgresoTarjetas = aplicarProgresoTarjetas;

onAuthStateChanged(auth, async (user) => {
  estado = null;
  if (user) {
    try {
      estado = (await isCurrentUserAdmin()) ? await cargarAdmin() : await cargarAlumno(user);
    } catch (error) {
      console.warn('⚠️ No se pudo cargar el progreso de las tarjetas:', error);
      estado = null;
    }
  }
  aplicarProgresoTarjetas();
});
