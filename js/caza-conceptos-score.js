// ========================================
// 🎯 CAZA-CONCEPTOS-SCORE.JS 
// Integración Firebase para caza de conceptos
// ========================================

import { saveProgress } from "/prueba_filo/firebase.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

console.log('🎯 Cargando integración Firebase para caza de conceptos...');

const auth = getAuth();

// ====================================
// FUNCIÓN PRINCIPAL DE GUARDADO
// ====================================

/**
 * Guarda progreso de caza de conceptos en Firebase
 * @param {number} conceptsFound - Conceptos encontrados
 * @param {number} totalConcepts - Total de conceptos
 * @param {number} timeSpent - Tiempo gastado en segundos
 * @param {Array} foundConceptsList - Lista de conceptos encontrados (opcional)
 */
window.saveCazaProgress = async (conceptsFound, totalConcepts, timeSpent = 0, foundConceptsList = []) => {
  const user = auth.currentUser;
  if (!user) {
    console.warn('⚠️ [CazaScore] No hay usuario autenticado');
    return false;
  }

  const percentage = Math.round((conceptsFound / totalConcepts) * 100);
  const tema = getActiveTema();
  
  try {
    console.log(`💾 [CazaScore] Guardando: ${percentage}% (${conceptsFound}/${totalConcepts}) - Tema: ${tema}`);
    
    await saveProgress({
      moduleId: tema,
      lessonId: 'caza',
      // lessonId: 'caza_conceptos',
      status: percentage >= 100 ? "completed" : percentage >= 80 ? "approved" : "in_progress",
      score: percentage,
      seconds: timeSpent,
      metadata: {
        conceptsFound: conceptsFound,
        totalConcepts: totalConcepts,
        foundConceptsList: foundConceptsList || [],
        activity: 'caza_conceptos'
      }
    });
    
    console.log(`✅ [CazaScore] Guardado en Firebase: ${percentage}%`);
    return true;
    
  } catch (error) {
    console.error('❌ [CazaScore] Error guardando en Firebase:', error);
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
  // Prioridad: URL params > SessionStorage > Default
  const sources = [
    () => new URLSearchParams(location.search).get('tema'),
    () => new URLSearchParams(location.search).get('theme'),
    () => sessionStorage.getItem('tema_actual'),
    () => sessionStorage.getItem('tema.active'),
    () => localStorage.getItem('tema_actual'),
    () => 'aristoteles' // fallback
  ];
  
  for (const source of sources) {
    try {
      const value = source();
      if (value) return value;
    } catch (e) {
      // Ignorar errores y continuar
    }
  }
  
  return 'aristoteles';
}

// ====================================
// INTEGRACIÓN CON MOTORES EXISTENTES
// ====================================

/**
 * Sobrescribir hubSaveConcept original para incluir Firebase
 */
window.hubSaveConceptWithFirebase = async (data) => {
  const tema = getActiveTema();
  const key = `tema.${tema}.caza`;
  
  // Validar datos
  const total = typeof data.total === 'number' && !isNaN(data.total) ? data.total : 0;
  const found = typeof data.found === 'number' && !isNaN(data.found) ? data.found : 0;
  const completed = typeof data.completed === 'boolean' ? data.completed : false;
  const foundConcepts = Array.isArray(data.foundConcepts) ? data.foundConcepts : [];

  const state = {
    total: total,
    found: found,
    completed: completed,
    foundConcepts: foundConcepts,
    timestamp: new Date().toISOString()
  };

  console.log(`💾 [CazaScore] Guardando progreso local para ${tema}:`, state);
  
  // Guardar en sessionStorage (compatibilidad)
  sessionStorage.setItem(key, JSON.stringify(state));

  // Guardar en Firebase
  if (found > 0) { // Solo guardar si hay progreso real
    const timeSpent = Math.round((Date.now() - (window.cazaStartTime || Date.now())) / 1000);
    
    const success = await window.saveCazaProgress(
      found,
      total,
      timeSpent,
      foundConcepts
    );
    
    if (success && window.forceSync) {
      setTimeout(() => {
        console.log('🔄 [CazaScore] Forzando sincronización...');
        window.forceSync();
      }, 1000);
    }
    
    return success;
  }
  
  return true;
};

// ====================================
// FUNCIONES DE DIAGNÓSTICO
// ====================================

/**
 * Función de diagnóstico para caza de conceptos
 */
window.checkCazaFirebaseIntegration = () => {
  console.log('🔍 === DIAGNÓSTICO FIREBASE CAZA DE CONCEPTOS ===');
  
  const tema = getActiveTema();
  const user = auth.currentUser;
  
  const checks = {
    'Usuario autenticado': !!user,
    'Tema activo': tema,
    'Función saveCazaProgress': typeof window.saveCazaProgress === 'function',
    'Función hubSaveConceptWithFirebase': typeof window.hubSaveConceptWithFirebase === 'function',
    'Config CONCEPT_HUNT_CONFIG': !!window.CONCEPT_HUNT_CONFIG,
    'Motor caza activo': !!(window.overallFoundCount !== undefined || window.globalFound)
  };
  
  Object.entries(checks).forEach(([key, value]) => {
    const icon = typeof value === 'boolean' ? (value ? '✅' : '❌') : '📊';
    console.log(`  ${key}: ${icon} ${value}`);
  });
  
  // Info del progreso actual
  const savedProgress = sessionStorage.getItem(`tema.${tema}.caza`);
  if (savedProgress) {
    try {
      const progress = JSON.parse(savedProgress);
      console.log(`  📊 Progreso guardado: ${progress.found || 0}/${progress.total || 0} (${Math.round(((progress.found || 0) / (progress.total || 1)) * 100)}%)`);
      console.log(`  📅 Última actualización: ${progress.timestamp || 'N/A'}`);
    } catch (e) {
      console.log(`  ⚠️ Error leyendo progreso: ${e.message}`);
    }
  } else {
    console.log(`  📊 No hay progreso guardado para tema: ${tema}`);
  }
  
  // Verificar configuración del juego
  if (window.CONCEPT_HUNT_CONFIG) {
    const totalConcepts = window.CONCEPT_HUNT_CONFIG.levels?.reduce((acc, lv) => acc + ((lv.concepts || []).length), 0) || 0;
    console.log(`  🎯 Conceptos totales configurados: ${totalConcepts}`);
  }
};

/**
 * Fuerza guardado manual del progreso
 */
window.forceCazaSave = async () => {
  console.log('🔧 [CazaScore] Forzando guardado manual...');
  
  const tema = getActiveTema();
  const savedProgress = sessionStorage.getItem(`tema.${tema}.caza`);
  
  if (!savedProgress) {
    console.log('ℹ️ [CazaScore] No hay progreso que guardar');
    return false;
  }
  
  try {
    const progress = JSON.parse(savedProgress);
    if ((progress.found || 0) === 0) {
      console.log('ℹ️ [CazaScore] No hay conceptos encontrados que guardar');
      return false;
    }
    
    const timeSpent = Math.round((Date.now() - Date.parse(progress.timestamp || new Date())) / 1000);
    
    const success = await window.saveCazaProgress(
      progress.found || 0,
      progress.total || 0,
      Math.max(timeSpent, 0),
      progress.foundConcepts || []
    );
    
    if (success && window.forceSync) {
      setTimeout(() => {
        console.log('🔄 [CazaScore] Forzando sincronización...');
        window.forceSync();
      }, 1000);
    }
    
    return success;
    
  } catch (e) {
    console.error('❌ [CazaScore] Error en guardado manual:', e);
    return false;
  }
};

// ====================================
// CONFIGURACIÓN DE EVENTOS
// ====================================

// Escuchar cambios de autenticación
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log('👤 [CazaScore] Usuario autenticado:', user.email);
  } else {
    console.log('🚪 [CazaScore] Usuario desconectado');
  }
});

// Escuchar eventos de progreso desde los motores
window.addEventListener('caza-progress-updated', (event) => {
  const { data, tema: eventTema } = event.detail || {};
  
  if (data && data.found && data.total) {
    setTimeout(() => {
      window.hubSaveConceptWithFirebase(data);
    }, 500);
  }
});

// ====================================
// AUTO-INICIALIZACIÓN
// ====================================

// Esperar a que el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeCazaScore);
} else {
  initializeCazaScore();
}

function initializeCazaScore() {
  // Marcar tiempo de inicio para cálculos de tiempo
  if (!window.cazaStartTime) {
    window.cazaStartTime = Date.now();
  }
  
  console.log('🚀 [CazaScore] Sistema de puntuación Firebase inicializado');
  console.log('🎯 [CazaScore] Tema detectado:', getActiveTema());
  console.log('🛠️ [CazaScore] Funciones disponibles:');
  console.log('   - checkCazaFirebaseIntegration()');
  console.log('   - forceCazaSave()');
  console.log('   - saveCazaProgress(found, total, timeSpent, concepts)');
  
  // Verificar si hay motores cargados
  setTimeout(() => {
    if (window.CONCEPT_HUNT_CONFIG) {
      console.log('✅ [CazaScore] Configuración de caza detectada');
      
      const totalConcepts = window.CONCEPT_HUNT_CONFIG.levels?.reduce((acc, lv) => acc + ((lv.concepts || []).length), 0) || 0;
      console.log(`📊 [CazaScore] Total de conceptos: ${totalConcepts}`);
    } else {
      console.warn('⚠️ [CazaScore] No se detectó configuración de caza de conceptos');
    }
  }, 2000);
}

// ====================================
// MANEJO DE ERRORES
// ====================================

window.addEventListener('unhandledrejection', (event) => {
  if (event.reason && event.reason.message && event.reason.message.includes('Firebase')) {
    console.warn('⚠️ [CazaScore] Error Firebase interceptado:', event.reason);
    event.preventDefault(); // Evitar que rompa el juego
  }
});

// ====================================
// EXPORTACIÓN DE FUNCIONES PARA DEBUG
// ====================================

// Función para diagnosticar problemas de integración
window.debugCazaIntegration = () => {
  console.log('\n🔧 === DIAGNÓSTICO COMPLETO CAZA DE CONCEPTOS ===\n');
  
  // 1. Verificar Firebase
  console.log('1️⃣ VERIFICANDO FIREBASE:');
  window.checkCazaFirebaseIntegration();
  
  // 2. Verificar motores
  console.log('\n2️⃣ VERIFICANDO MOTORES:');
  const hasOriginalEngine = typeof window.hubSaveConcept === 'function';
  const hasEnhancedEngine = document.querySelector('#caza_conceptos_engine_enhanced');
  const hasConfig = !!window.CONCEPT_HUNT_CONFIG;
  
  console.log(`  Motor original: ${hasOriginalEngine ? '✅' : '❌'}`);
  console.log(`  Motor mejorado: ${hasEnhancedEngine ? '✅' : '❌'}`);
  console.log(`  Configuración: ${hasConfig ? '✅' : '❌'}`);
  
  // 3. Verificar progreso actual
  console.log('\n3️⃣ VERIFICANDO PROGRESO:');
  const tema = getActiveTema();
  const savedProgress = sessionStorage.getItem(`tema.${tema}.caza`);
  
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
  
  // 4. Test de guardado
  console.log('\n4️⃣ TEST DE GUARDADO:');
  console.log('  Ejecuta: forceCazaSave() para probar guardado manual');
  
  console.log('\n✅ Diagnóstico completo');
};

console.log('🎮 [CazaScore] Módulo de integración Firebase cargado');
console.log('🔧 [CazaScore] Ejecuta debugCazaIntegration() para diagnóstico completo');