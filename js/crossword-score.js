// ========================================
// 🧩 CROSSWORD-SCORE.JS 
// Integración Firebase para crucigrama
// ========================================

import { saveProgress } from "/prueba_filo/firebase.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

console.log('🧩 Cargando integración Firebase para crucigrama...');

const auth = getAuth();

// ====================================
// FUNCIÓN PRINCIPAL DE GUARDADO
// ====================================

/**
 * Guarda progreso del crucigrama en Firebase
 * @param {number} wordsCompleted - Palabras completadas
 * @param {number} totalWords - Total de palabras
 * @param {number} score - Puntuación obtenida
 * @param {number} attempts - Intentos realizados
 * @param {number} timeSpent - Tiempo gastado en segundos
 * @param {boolean} completed - Si está completado
 */
window.saveCrosswordProgress = async (wordsCompleted, totalWords, score = 0, attempts = 0, timeSpent = 0, completed = false) => {
  const user = auth.currentUser;
  if (!user) {
    console.warn('⚠️ [CrosswordScore] No hay usuario autenticado');
    return false;
  }

  const percentage = totalWords > 0 ? Math.round((wordsCompleted / totalWords) * 100) : 0;
  const tema = getActiveTema();
  
  try {
    console.log(`💾 [CrosswordScore] Guardando: ${percentage}% (${wordsCompleted}/${totalWords}) - Puntos: ${score} - Tema: ${tema}`);
    
    await saveProgress({
      moduleId: tema,
      lessonId: 'cruci', // ID que espera tema.html
      status: completed ? "completed" : percentage >= 80 ? "approved" : "in_progress",
      score: percentage,
      seconds: timeSpent,
      metadata: {
        wordsCompleted: wordsCompleted,
        totalWords: totalWords,
        gameScore: score,
        attempts: attempts,
        accuracy: attempts > 0 ? Math.round((wordsCompleted / attempts) * 100) : 100,
        activity: 'crossword'
      }
    });
    
    console.log(`✅ [CrosswordScore] Guardado en Firebase: ${percentage}% (puntos: ${score})`);
    return true;
    
  } catch (error) {
    console.error('❌ [CrosswordScore] Error guardando en Firebase:', error);
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
  const sources = [
    () => new URLSearchParams(location.search).get('tema'),
    () => new URLSearchParams(location.search).get('theme'),
    () => sessionStorage.getItem('tema_actual'),
    () => sessionStorage.getItem('tema.active'),
    () => localStorage.getItem('tema_actual'),
    () => 'etica_aristoteles'
  ];
  
  for (const source of sources) {
    try {
      const value = source();
      if (value) return value;
    } catch (e) {
      // Ignorar errores y continuar
    }
  }
  
  return 'etica_aristoteles';
}

// ====================================
// SOBRESCRIBIR FUNCIÓN ORIGINAL
// ====================================

/**
 * Mejora la función saveProgress original del motor para incluir Firebase
 */
window.enhanceCrosswordEngine = () => {
  console.log('🔧 [CrosswordScore] Mejorando motor del crucigrama...');
  
  // Buscar el CrosswordEngine
  if (!window.CrosswordEngine) {
    console.warn('⚠️ [CrosswordScore] CrosswordEngine no encontrado');
    return false;
  }
  
  // Guardar función original si existe
  const originalSaveProgress = window.saveProgress;
  
  // Sobrescribir función global saveProgress para crucigramas
  window.saveProgress = async function(data) {
    const tema = getActiveTema();
    const keys = [`tema.${tema}.cruci`, `tema.${tema}.cross`];
    
    console.log('💾 [CrosswordScore] Guardando progreso mejorado:', data);
    
    // Guardar en sessionStorage (compatibilidad)
    keys.forEach(key => {
      try {
        const existing = JSON.parse(sessionStorage.getItem(key) || '{}');
        const updated = {
          total: data.total ?? existing.total ?? 0,
          solved: data.solved ?? existing.solved ?? 0,
          score: data.score ?? existing.score ?? 0,
          attempts: data.attempts ?? existing.attempts ?? 0,
          completed: data.completed ?? existing.completed ?? false,
          lastUpdated: new Date().toISOString()
        };
        sessionStorage.setItem(key, JSON.stringify(updated));
        console.log(`✅ [CrosswordScore] Progreso guardado en ${key}:`, updated);
      } catch (e) {
        console.error('❌ [CrosswordScore] Error guardando en', key, ':', e);
      }
    });
    
    // Guardar en Firebase si hay progreso real
    if (data.solved > 0 || data.completed) {
      const timeSpent = Math.round((Date.now() - (window.crosswordStartTime || Date.now())) / 1000);
      
      const success = await window.saveCrosswordProgress(
        data.solved || 0,
        data.total || 0,
        data.score || 0,
        data.attempts || 0,
        timeSpent,
        data.completed || false
      );
      
      if (success && window.forceSync) {
        setTimeout(() => {
          console.log('🔄 [CrosswordScore] Forzando sincronización...');
          window.forceSync();
        }, 1000);
      }
      
      return success;
    }
    
    return true;
  };
  
  console.log('✅ [CrosswordScore] Motor mejorado con integración Firebase');
  return true;
};

// ====================================
// FUNCIONES DE DIAGNÓSTICO
// ====================================

/**
 * Función de diagnóstico para crucigrama
 */
window.checkCrosswordFirebaseIntegration = () => {
  console.log('🔍 === DIAGNÓSTICO FIREBASE CRUCIGRAMA ===');
  
  const tema = getActiveTema();
  const user = auth.currentUser;
  
  const checks = {
    'Usuario autenticado': !!user,
    'Tema activo': tema,
    'Función saveCrosswordProgress': typeof window.saveCrosswordProgress === 'function',
    'CrosswordEngine disponible': !!window.CrosswordEngine,
    'Función enhanceCrosswordEngine': typeof window.enhanceCrosswordEngine === 'function',
    'Motor mejorado': typeof window.saveProgress === 'function'
  };
  
  Object.entries(checks).forEach(([key, value]) => {
    const icon = typeof value === 'boolean' ? (value ? '✅' : '❌') : '📊';
    console.log(`  ${key}: ${icon} ${value}`);
  });
  
  // Info del progreso actual
  const tema_key = `tema.${tema}.cruci`;
  const savedProgress = sessionStorage.getItem(tema_key);
  if (savedProgress) {
    try {
      const progress = JSON.parse(savedProgress);
      console.log(`  📊 Progreso guardado: ${progress.solved || 0}/${progress.total || 0} palabras (${Math.round(((progress.solved || 0) / (progress.total || 1)) * 100)}%)`);
      console.log(`  🎯 Puntuación: ${progress.score || 0} puntos`);
      console.log(`  🎲 Intentos: ${progress.attempts || 0}`);
      console.log(`  📅 Última actualización: ${progress.lastUpdated || 'N/A'}`);
    } catch (e) {
      console.log(`  ⚠️ Error leyendo progreso: ${e.message}`);
    }
  } else {
    console.log(`  📊 No hay progreso guardado para tema: ${tema}`);
  }
  
  // Verificar estado del motor
  if (window.CrosswordEngine && window.CrosswordEngine.getState) {
    try {
      const gameState = window.CrosswordEngine.getState();
      console.log(`  🎮 Estado del juego:`, gameState);
    } catch (e) {
      console.log(`  ⚠️ No se pudo obtener estado del juego: ${e.message}`);
    }
  }
};

/**
 * Fuerza guardado manual del progreso
 */
window.forceCrosswordSave = async () => {
  console.log('🔧 [CrosswordScore] Forzando guardado manual...');
  
  const tema = getActiveTema();
  const savedProgress = sessionStorage.getItem(`tema.${tema}.cruci`);
  
  if (!savedProgress) {
    console.log('ℹ️ [CrosswordScore] No hay progreso que guardar');
    return false;
  }
  
  try {
    const progress = JSON.parse(savedProgress);
    if ((progress.solved || 0) === 0) {
      console.log('ℹ️ [CrosswordScore] No hay palabras resueltas que guardar');
      return false;
    }
    
    const timeSpent = Math.round((Date.now() - Date.parse(progress.lastUpdated || new Date())) / 1000);
    
    const success = await window.saveCrosswordProgress(
      progress.solved || 0,
      progress.total || 0,
      progress.score || 0,
      progress.attempts || 0,
      Math.max(timeSpent, 0),
      progress.completed || false
    );
    
    if (success && window.forceSync) {
      setTimeout(() => {
        console.log('🔄 [CrosswordScore] Forzando sincronización...');
        window.forceSync();
      }, 1000);
    }
    
    return success;
    
  } catch (e) {
    console.error('❌ [CrosswordScore] Error en guardado manual:', e);
    return false;
  }
};

// ====================================
// CONFIGURACIÓN DE EVENTOS
// ====================================

// Escuchar cambios de autenticación
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log('👤 [CrosswordScore] Usuario autenticado:', user.email);
  } else {
    console.log('🚪 [CrosswordScore] Usuario desconectado');
  }
});

// Escuchar cuando se carga el motor del crucigrama
window.addEventListener('DOMContentLoaded', () => {
  // Esperar a que se cargue el motor
  setTimeout(() => {
    if (window.CrosswordEngine) {
      console.log('🎮 [CrosswordScore] CrosswordEngine detectado, mejorando...');
      window.enhanceCrosswordEngine();
    }
  }, 1000);
});

// ====================================
// AUTO-INICIALIZACIÓN
// ====================================

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeCrosswordScore);
} else {
  initializeCrosswordScore();
}

function initializeCrosswordScore() {
  // Marcar tiempo de inicio para cálculos
  if (!window.crosswordStartTime) {
    window.crosswordStartTime = Date.now();
  }
  
  console.log('🚀 [CrosswordScore] Sistema de puntuación Firebase inicializado');
  console.log('🎯 [CrosswordScore] Tema detectado:', getActiveTema());
  console.log('🛠️ [CrosswordScore] Funciones disponibles:');
  console.log('   - checkCrosswordFirebaseIntegration()');
  console.log('   - forceCrosswordSave()');
  console.log('   - enhanceCrosswordEngine()');
  console.log('   - saveCrosswordProgress(completed, total, score, attempts, time, done)');
  
  // Verificar si el motor ya está cargado
  setTimeout(() => {
    if (window.CrosswordEngine) {
      console.log('✅ [CrosswordScore] CrosswordEngine encontrado');
      window.enhanceCrosswordEngine();
    } else {
      console.log('⏳ [CrosswordScore] Esperando CrosswordEngine...');
      
      // Escuchar cuando se cargue
      const checkEngine = setInterval(() => {
        if (window.CrosswordEngine) {
          clearInterval(checkEngine);
          console.log('✅ [CrosswordScore] CrosswordEngine cargado tardíamente');
          window.enhanceCrosswordEngine();
        }
      }, 500);
      
      // Timeout de seguridad
      setTimeout(() => {
        clearInterval(checkEngine);
        console.warn('⚠️ [CrosswordScore] Timeout esperando CrosswordEngine');
      }, 10000);
    }
  }, 2000);
}

// ====================================
// MANEJO DE ERRORES
// ====================================

window.addEventListener('unhandledrejection', (event) => {
  if (event.reason && event.reason.message && event.reason.message.includes('Firebase')) {
    console.warn('⚠️ [CrosswordScore] Error Firebase interceptado:', event.reason);
    event.preventDefault();
  }
});

// ====================================
// FUNCIÓN DE DEBUG COMPLETO
// ====================================

window.debugCrosswordIntegration = () => {
  console.log('\n🔧 === DIAGNÓSTICO COMPLETO CRUCIGRAMA ===\n');
  
  // 1. Verificar Firebase
  console.log('1️⃣ VERIFICANDO FIREBASE:');
  window.checkCrosswordFirebaseIntegration();
  
  // 2. Verificar motor
  console.log('\n2️⃣ VERIFICANDO MOTOR:');
  const hasEngine = !!window.CrosswordEngine;
  const hasOriginalSave = typeof window.saveProgress === 'function';
  const hasConfig = !!window.CROSSWORD_CONFIG;
  
  console.log(`  Motor CrosswordEngine: ${hasEngine ? '✅' : '❌'}`);
  console.log(`  Función saveProgress: ${hasOriginalSave ? '✅' : '❌'}`);
  console.log(`  Configuración CROSSWORD_CONFIG: ${hasConfig ? '✅' : '❌'}`);
  
  if (hasEngine && window.CrosswordEngine.getState) {
    try {
      const state = window.CrosswordEngine.getState();
      console.log(`  Estado actual:`, state);
    } catch (e) {
      console.log(`  ❌ Error obteniendo estado: ${e.message}`);
    }
  }
  
  // 3. Verificar progreso
  console.log('\n3️⃣ VERIFICANDO PROGRESO:');
  const tema = getActiveTema();
  const progressKey = `tema.${tema}.cruci`;
  const savedProgress = sessionStorage.getItem(progressKey);
  
  if (savedProgress) {
    try {
      const progress = JSON.parse(savedProgress);
      console.log(`  ✅ Progreso encontrado: ${JSON.stringify(progress, null, 2)}`);
    } catch (e) {
      console.log(`  ❌ Error parseando progreso: ${e.message}`);
    }
  } else {
    console.log(`  ℹ️ No hay progreso guardado`);
  }
  
  console.log('\n4️⃣ COMANDOS ÚTILES:');
  console.log('  - checkCrosswordFirebaseIntegration()');
  console.log('  - forceCrosswordSave()');
  console.log('  - enhanceCrosswordEngine()');
  console.log('  - debugCrosswordIntegration()');
  
  console.log('\n✅ Diagnóstico completo');
};

console.log('🎮 [CrosswordScore] Módulo de integración Firebase cargado');
console.log('🔧 [CrosswordScore] Ejecuta debugCrosswordIntegration() para diagnóstico completo');