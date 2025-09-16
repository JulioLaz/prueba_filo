// ========================================
// 🗺️ MAPA-SYSTEM-SCORE.JS 
// Integración Firebase para mapas conceptuales
// ========================================

import { saveProgress } from "/prueba_filo/firebase.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

console.log('🗺️ Cargando integración Firebase para mapas...');

const auth = getAuth();

// ====================================
// FUNCIÓN PRINCIPAL DE GUARDADO
// ====================================

/**
 * Guarda progreso del mapa en Firebase
 * @param {number} nodesVisited - Nodos visitados
 * @param {number} totalNodes - Total de nodos
 * @param {number} timeSpent - Tiempo gastado en segundos
 */
window.saveMapaProgress = async (nodesVisited, totalNodes, timeSpent = 0) => {
  const user = auth.currentUser;
  if (!user) {
    console.warn('⚠️ [MapaScore] No hay usuario autenticado');
    return false;
  }

  const percentage = Math.round((nodesVisited / totalNodes) * 100);
  const tema = getActiveTema();
  
  try {
    console.log(`💾 [MapaScore] Guardando: ${percentage}% (${nodesVisited}/${totalNodes}) - Tema: ${tema}`);
    
    await saveProgress({
      moduleId: tema,
      lessonId: 'mapa',
      status: percentage >= 100 ? "completed" : percentage >= 80 ? "approved" : "in_progress",
      score: percentage,
      seconds: timeSpent
    });
    
    console.log(`✅ [MapaScore] Guardado en Firebase: ${percentage}%`);
    return true;
    
  } catch (error) {
    console.error('❌ [MapaScore] Error guardando en Firebase:', error);
    return false;
  }
};

// ====================================
// FUNCIONES DE UTILIDAD
// ====================================

/**
 * Obtiene el tema activo de múltiples fuentes
 */
function getActiveTema() {
  // Prioridad: URL params > Config global > SessionStorage > Default
  const sources = [
    () => new URLSearchParams(location.search).get('tema'),
    () => new URLSearchParams(location.search).get('theme'),
    () => window.MapaSystemConfig?.tema,
    () => sessionStorage.getItem('tema.active'),
    () => 'sartre' // fallback
  ];
  
  for (const source of sources) {
    try {
      const value = source();
      if (value) return value;
    } catch (e) {
      // Ignorar errores y continuar
    }
  }
  
  return 'sartre';
}

/**
 * Función de diagnóstico para mapas
 */
window.checkMapaFirebaseIntegration = () => {
  console.log('🔍 === DIAGNÓSTICO FIREBASE MAPA ===');
  
  const tema = getActiveTema();
  const user = auth.currentUser;
  
  const checks = {
    'Usuario autenticado': !!user,
    'Tema activo': tema,
    'Función saveMapaProgress': typeof window.saveMapaProgress === 'function',
    'Config del mapa': !!window.MapaSystemConfig,
    'Instancia del sistema': !!window.mapaSystemInstance
  };
  
  Object.entries(checks).forEach(([key, value]) => {
    const icon = typeof value === 'boolean' ? (value ? '✅' : '❌') : '📊';
    console.log(`  ${key}: ${icon} ${value}`);
  });
  
  if (window.mapaSystemInstance) {
    const progress = window.mapaSystemInstance.getProgress?.();
    if (progress) {
      console.log(`  📊 Progreso actual: ${progress.visitedNodes.length}/${progress.totalNodes} (${Math.round(progress.progress * 100)}%)`);
    }
  }
};

/**
 * Fuerza guardado manual del progreso del mapa
 */
window.forceMapaSave = async () => {
  console.log('🔧 [MapaScore] Forzando guardado manual...');
  
  if (!window.mapaSystemInstance) {
    console.log('❌ [MapaScore] No hay instancia del sistema de mapas');
    return false;
  }
  
  const progress = window.mapaSystemInstance.getProgress?.();
  if (!progress || progress.visitedNodes.length === 0) {
    console.log('ℹ️ [MapaScore] No hay progreso que guardar');
    return false;
  }
  
  const timeSpent = Math.round((Date.now() - (window.mapaSystemInstance.startTime || Date.now())) / 1000);
  
  const success = await window.saveMapaProgress(
    progress.visitedNodes.length,
    progress.totalNodes,
    timeSpent
  );
  
  if (success && window.forceSync) {
    setTimeout(() => {
      console.log('🔄 [MapaScore] Forzando sincronización...');
      window.forceSync();
    }, 1000);
  }
  
  return success;
};

// ====================================
// CONFIGURACIÓN DE EVENTOS
// ====================================

// Escuchar cambios de autenticación
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log('👤 [MapaScore] Usuario autenticado:', user.email);
  } else {
    console.log('🚪 [MapaScore] Usuario desconectado');
  }
});

// Escuchar eventos de progreso desde el sistema de mapas
window.addEventListener('mapa-progress-updated', (event) => {
  const { state, tema: eventTema } = event.detail;
  
  if (state && state.nodesVisited && state.total) {
    const timeSpent = Math.round((Date.now() - Date.parse(state.timestamp || new Date())) / 1000);
    
    setTimeout(() => {
      window.saveMapaProgress(state.nodesVisited.length, state.total, Math.max(timeSpent, 0));
    }, 500);
  }
});

// ====================================
// AUTO-INICIALIZACIÓN
// ====================================

// Esperar a que el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeMapaScore);
} else {
  initializeMapaScore();
}

function initializeMapaScore() {
  console.log('🚀 [MapaScore] Sistema de puntuación Firebase inicializado');
  console.log('🎯 [MapaScore] Tema detectado:', getActiveTema());
  console.log('🛠️  [MapaScore] Funciones disponibles:');
  console.log('   - checkMapaFirebaseIntegration()');
  console.log('   - forceMapaSave()');
  
  // Verificar integración después de un momento
  setTimeout(() => {
    if (window.MapaSystemConfig) {
      console.log('✅ [MapaScore] Configuración del mapa detectada');
    } else {
      console.warn('⚠️ [MapaScore] No se detectó configuración del mapa');
    }
  }, 1000);
}

// ====================================
// MANEJO DE ERRORES
// ====================================

window.addEventListener('unhandledrejection', (event) => {
  if (event.reason && event.reason.message && event.reason.message.includes('Firebase')) {
    console.warn('⚠️ [MapaScore] Error Firebase interceptado:', event.reason);
    event.preventDefault(); // Evitar que rompa el mapa
  }
});

console.log('🎮 [MapaScore] Módulo de integración Firebase cargado');