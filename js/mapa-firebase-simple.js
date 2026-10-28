/**
 * js/mapa-firebase-simple.js
 * Guardado en Firebase para los mapas conceptuales de versión vieja (etica, origen,
 * sartre), que solo registraban el avance en el navegador (sessionStorage).
 * El puntaje del mapa es el % de nodos recorridos (sin juego de pares).
 *
 * Uso en el mapa: <script type="module" src="../../js/mapa-firebase-simple.js"></script>
 * y llamar window.guardarMapaFirebase(visitados, total) cada vez que se visita un nodo.
 *
 * - Guarda solo cuando el % sube (firebase.js además conserva el mejor puntaje).
 * - Si la sesión todavía no cargó, guarda apenas el usuario está disponible.
 * Pendiente (ver PENDIENTES.md): pasar estos mapas al sistema completo
 * (mapa-system-fixed.js + mapa-system-score.js, con juego de pares).
 *
 * Versión: v1.0.0 (2026-10-28)
 */
import { auth, onAuthStateChanged, saveProgress } from '/prueba_filo/firebase.js';

const inicio = Date.now();
const tema = new URLSearchParams(location.search).get('tema') ||
  new URLSearchParams(location.search).get('theme') ||
  sessionStorage.getItem('tema.active') || '';
let mejorGuardado = 0;
let pendiente = null;
let guardando = false;

async function guardar(visitados, total) {
  const score = total > 0 ? Math.min(100, Math.round((visitados / total) * 100)) : 0;
  if (!tema || score <= mejorGuardado) return;
  if (!auth.currentUser) { pendiente = { visitados, total }; return; }
  if (guardando) { pendiente = { visitados, total }; return; }
  guardando = true;
  try {
    await saveProgress({
      moduleId: tema,
      lessonId: 'mapa',
      status: score >= 100 ? 'completed' : score >= 80 ? 'approved' : 'in_progress',
      score,
      seconds: Math.round((Date.now() - inicio) / 1000),
      metadata: { nodosVisitados: visitados, totalNodos: total, activity: 'mapa_simple' }
    });
    mejorGuardado = score;
  } catch (error) {
    console.warn('⚠️ [Mapa] No se pudo guardar en Firebase:', error);
  } finally {
    guardando = false;
    if (pendiente) { const p = pendiente; pendiente = null; guardar(p.visitados, p.total); }
  }
}

window.guardarMapaFirebase = guardar;

onAuthStateChanged(auth, (user) => {
  if (user && pendiente) { const p = pendiente; pendiente = null; guardar(p.visitados, p.total); }
});
