// // ========================================
// // 🗺️ MAPA-SYSTEM-SCORE.JS 
// // Integración Firebase para mapas conceptuales
// // ========================================

// import { saveProgress } from "/prueba_filo/firebase.js";
// import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// console.log('🗺️ Cargando integración Firebase para mapas...');

// const auth = getAuth();

// // ====================================
// // FUNCIÓN PRINCIPAL DE GUARDADO
// // ====================================

// /**
//  * Guarda progreso del mapa en Firebase
//  * @param {number} nodesVisited - Nodos visitados
//  * @param {number} totalNodes - Total de nodos
//  * @param {number} timeSpent - Tiempo gastado en segundos
//  */
// window.saveMapaProgress = async (nodesVisited, totalNodes, timeSpent = 0) => {
//   const user = auth.currentUser;
//   if (!user) {
//     console.warn('⚠️ [MapaScore] No hay usuario autenticado');
//     return false;
//   }

//   const percentage = Math.round((nodesVisited / totalNodes) * 100);
//   const tema = getActiveTema();
  
//   try {
//     console.log(`💾 [MapaScore] Guardando: ${percentage}% (${nodesVisited}/${totalNodes}) - Tema: ${tema}`);
    
//     await saveProgress({
//       moduleId: tema,
//       lessonId: 'mapa',
//       status: percentage >= 100 ? "completed" : percentage >= 80 ? "approved" : "in_progress",
//       score: percentage,
//       seconds: timeSpent
//     });
    
//     console.log(`✅ [MapaScore] Guardado en Firebase: ${percentage}%`);
//     return true;
    
//   } catch (error) {
//     console.error('❌ [MapaScore] Error guardando en Firebase:', error);
//     return false;
//   }
// };

// // ====================================
// // FUNCIONES DE UTILIDAD
// // ====================================

// /**
//  * Obtiene el tema activo de múltiples fuentes
//  */
// function getActiveTema() {
//   // Prioridad: URL params > Config global > SessionStorage > Default
//   const sources = [
//     () => new URLSearchParams(location.search).get('tema'),
//     () => new URLSearchParams(location.search).get('theme'),
//     () => window.MapaSystemConfig?.tema,
//     () => sessionStorage.getItem('tema.active'),
//     () => 'sartre' // fallback
//   ];
  
//   for (const source of sources) {
//     try {
//       const value = source();
//       if (value) return value;
//     } catch (e) {
//       // Ignorar errores y continuar
//     }
//   }
  
//   return 'sartre';
// }

// /**
//  * Función de diagnóstico para mapas
//  */
// window.checkMapaFirebaseIntegration = () => {
//   console.log('🔍 === DIAGNÓSTICO FIREBASE MAPA ===');
  
//   const tema = getActiveTema();
//   const user = auth.currentUser;
  
//   const checks = {
//     'Usuario autenticado': !!user,
//     'Tema activo': tema,
//     'Función saveMapaProgress': typeof window.saveMapaProgress === 'function',
//     'Config del mapa': !!window.MapaSystemConfig,
//     'Instancia del sistema': !!window.mapaSystemInstance
//   };
  
//   Object.entries(checks).forEach(([key, value]) => {
//     const icon = typeof value === 'boolean' ? (value ? '✅' : '❌') : '📊';
//     console.log(`  ${key}: ${icon} ${value}`);
//   });
  
//   if (window.mapaSystemInstance) {
//     const progress = window.mapaSystemInstance.getProgress?.();
//     if (progress) {
//       console.log(`  📊 Progreso actual: ${progress.visitedNodes.length}/${progress.totalNodes} (${Math.round(progress.progress * 100)}%)`);
//     }
//   }
// };

// /**
//  * Fuerza guardado manual del progreso del mapa
//  */
// window.forceMapaSave = async () => {
//   console.log('🔧 [MapaScore] Forzando guardado manual...');
  
//   if (!window.mapaSystemInstance) {
//     console.log('❌ [MapaScore] No hay instancia del sistema de mapas');
//     return false;
//   }
  
//   const progress = window.mapaSystemInstance.getProgress?.();
//   if (!progress || progress.visitedNodes.length === 0) {
//     console.log('ℹ️ [MapaScore] No hay progreso que guardar');
//     return false;
//   }
  
//   const timeSpent = Math.round((Date.now() - (window.mapaSystemInstance.startTime || Date.now())) / 1000);
  
//   const success = await window.saveMapaProgress(
//     progress.visitedNodes.length,
//     progress.totalNodes,
//     timeSpent
//   );
  
//   if (success && window.forceSync) {
//     setTimeout(() => {
//       console.log('🔄 [MapaScore] Forzando sincronización...');
//       window.forceSync();
//     }, 1000);
//   }
  
//   return success;
// };

// // ====================================
// // CONFIGURACIÓN DE EVENTOS
// // ====================================

// // Escuchar cambios de autenticación
// auth.onAuthStateChanged((user) => {
//   if (user) {
//     console.log('👤 [MapaScore] Usuario autenticado:', user.email);
//   } else {
//     console.log('🚪 [MapaScore] Usuario desconectado');
//   }
// });

// // Escuchar eventos de progreso desde el sistema de mapas
// window.addEventListener('mapa-progress-updated', (event) => {
//   const { state, tema: eventTema } = event.detail;
  
//   if (state && state.nodesVisited && state.total) {
//     const timeSpent = Math.round((Date.now() - Date.parse(state.timestamp || new Date())) / 1000);
    
//     setTimeout(() => {
//       window.saveMapaProgress(state.nodesVisited.length, state.total, Math.max(timeSpent, 0));
//     }, 500);
//   }
// });

// // ====================================
// // AUTO-INICIALIZACIÓN
// // ====================================

// // Esperar a que el DOM esté listo
// if (document.readyState === 'loading') {
//   document.addEventListener('DOMContentLoaded', initializeMapaScore);
// } else {
//   initializeMapaScore();
// }

// function initializeMapaScore() {
//   console.log('🚀 [MapaScore] Sistema de puntuación Firebase inicializado');
//   console.log('🎯 [MapaScore] Tema detectado:', getActiveTema());
//   console.log('🛠️  [MapaScore] Funciones disponibles:');
//   console.log('   - checkMapaFirebaseIntegration()');
//   console.log('   - forceMapaSave()');
  
//   // Verificar integración después de un momento
//   setTimeout(() => {
//     if (window.MapaSystemConfig) {
//       console.log('✅ [MapaScore] Configuración del mapa detectada');
//     } else {
//       console.warn('⚠️ [MapaScore] No se detectó configuración del mapa');
//     }
//   }, 1000);
// }

// // ====================================
// // MANEJO DE ERRORES
// // ====================================

// window.addEventListener('unhandledrejection', (event) => {
//   if (event.reason && event.reason.message && event.reason.message.includes('Firebase')) {
//     console.warn('⚠️ [MapaScore] Error Firebase interceptado:', event.reason);
//     event.preventDefault(); // Evitar que rompa el mapa
//   }
// });

// console.log('🎮 [MapaScore] Módulo de integración Firebase cargado');

// ========================================

// ========================================
// 🗺️ MAPA-SYSTEM-SCORE.JS v2.0
// Sistema completo: Firebase + Puntuación Obligatoria
// Mapa 100% obligatorio + Juego 80% para aprobar
// ========================================

import { saveProgress } from "/prueba_filo/firebase.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

console.log('🗺️ Cargando sistema de puntuación mejorado v2.0...');

const auth = getAuth();

// ====================================
// CONFIGURACIÓN DE PUNTUACIÓN
// ====================================

const SCORING_CONFIG = {
  // Requisitos para aprobar
  requiredMapCompletion: 1.0,      // 100% del mapa obligatorio
  requiredGameCompletion: 0.8,     // 80% del juego para aprobar
  
  // Pesos en el score final
  weights: {
    mapa: 0.30,    // 30% del score total
    juego: 0.70    // 70% del score total
  },
  
  // Estados de la actividad
  states: {
    LOCKED: 'locked',           // Juego bloqueado
    UNLOCKED: 'unlocked',       // Juego desbloqueado pero no completado
    APPROVED: 'approved'        // Actividad aprobada (80%+ en juego)
  }
};

// ====================================
// ESTADO GLOBAL DEL SISTEMA
// ====================================

let systemState = {
  initialized: false,
  startTime: Date.now(),
  
  // Progreso del mapa
  map: {
    visited: 0,
    total: 0,
    percentage: 0,
    completed: false
  },
  
  // Progreso del juego
  game: {
    correct: 0,
    total: 0,
    attempts: 0,
    percentage: 0,
    completed: false
  },
  
  // Estado general
  overallStatus: SCORING_CONFIG.states.LOCKED,
  finalScore: 0,
  lastSave: null
};

// ====================================
// FUNCIONES DE CÁLCULO
// ====================================

/**
 * Calcula el score final combinado
 */
function calculateFinalScore() {
  const mapContribution = systemState.map.percentage * SCORING_CONFIG.weights.mapa;
  const gameContribution = systemState.game.percentage * SCORING_CONFIG.weights.juego;
  const finalScore = (mapContribution + gameContribution) * 100;
  
  return Math.round(Math.min(finalScore, 100)); // Cap a 100%
}

/**
 * Determina el estado de aprobación
 */
function determineStatus() {
  const mapComplete = systemState.map.percentage >= SCORING_CONFIG.requiredMapCompletion;
  const gameComplete = systemState.game.percentage >= SCORING_CONFIG.requiredGameCompletion;
  
  if (mapComplete && gameComplete) {
    return SCORING_CONFIG.states.APPROVED;
  } else if (mapComplete) {
    return SCORING_CONFIG.states.UNLOCKED;
  } else {
    return SCORING_CONFIG.states.LOCKED;
  }
}

/**
 * Obtiene el tema activo
 */
function getActiveTema() {
  const sources = [
    () => new URLSearchParams(location.search).get('tema'),
    () => new URLSearchParams(location.search).get('theme'),
    () => window.MapaSystemConfig?.tema,
    () => sessionStorage.getItem('tema.active'),
    () => 'filosofia'
  ];
  
  for (const source of sources) {
    try {
      const value = source();
      if (value) return value;
    } catch (e) {
      // Ignorar errores
    }
  }
  
  return 'filosofia';
}

// ====================================
// FUNCIONES DE ACTUALIZACIÓN
// ====================================

/**
 * Actualiza el progreso del mapa
 */
function updateMapProgress(visited, total) {
  systemState.map.visited = visited;
  systemState.map.total = total;
  systemState.map.percentage = total > 0 ? visited / total : 0;
  systemState.map.completed = systemState.map.percentage >= SCORING_CONFIG.requiredMapCompletion;
  
  console.log(`📖 Mapa: ${visited}/${total} (${Math.round(systemState.map.percentage * 100)}%)`);
  
  // Verificar si se desbloqueó el juego
  if (systemState.map.completed && systemState.overallStatus === SCORING_CONFIG.states.LOCKED) {
    unlockGame();
  }
  
  updateSystemState();
}

/**
 * Actualiza el progreso del juego
 */
function updateGameProgress(correct, total) {
  systemState.game.correct = correct;
  systemState.game.total = total;
  systemState.game.percentage = total > 0 ? correct / total : 0;
  systemState.game.completed = systemState.game.percentage >= SCORING_CONFIG.requiredGameCompletion;
  
  console.log(`🎮 Juego: ${correct}/${total} (${Math.round(systemState.game.percentage * 100)}%)`);
  
  updateSystemState();
}

/**
 * Actualiza el estado general del sistema
 */
function updateSystemState() {
  // Calcular nuevo score
  systemState.finalScore = calculateFinalScore();
  
  // Determinar estado
  const previousStatus = systemState.overallStatus;
  systemState.overallStatus = determineStatus();
  
  // Log del cambio de estado
  if (previousStatus !== systemState.overallStatus) {
    console.log(`🔄 Estado cambiado: ${previousStatus} → ${systemState.overallStatus}`);
    
    if (systemState.overallStatus === SCORING_CONFIG.states.APPROVED) {
      showApprovalNotification();
    }
  }
  
  console.log(`🎯 Score Final: ${systemState.finalScore}% (Mapa: ${Math.round(systemState.map.percentage * 100)}% × 30% + Juego: ${Math.round(systemState.game.percentage * 100)}% × 70%)`);
  
  // Actualizar UI
  updateProgressUI();
  
  // Guardar en sesión
  saveToSession();
}

// ====================================
// GESTIÓN DEL JUEGO
// ====================================

/**
 * Desbloquea el juego
 */
function unlockGame() {
  systemState.overallStatus = SCORING_CONFIG.states.UNLOCKED;
  
  const startButton = document.getElementById('startGame');
  if (startButton) {
    startButton.disabled = false;
    startButton.textContent = '🎮 Jugar Ahora';
    startButton.style.background = '#4CAF50';
    startButton.style.cursor = 'pointer';
  }
  
  showNotification('🔓 ¡Juego Desbloqueado!', 'Completaste el mapa. Ahora puedes jugar.', 'success');
  console.log('🔓 Juego desbloqueado');
}

/**
 * Verifica si el juego está desbloqueado
 */
function isGameUnlocked() {
  return systemState.map.completed;
}

/**
 * Muestra mensaje de juego bloqueado
 */
function showGameLockedMessage() {
  const message = `
    <strong>🔒 Juego Bloqueado</strong><br>
    Debes completar <strong>todo el mapa conceptual</strong> antes de jugar.<br>
    Progreso actual: <strong>${Math.round(systemState.map.percentage * 100)}%</strong>
  `;
  
  showNotification('Acceso Denegado', message, 'error');
}

// ====================================
// GUARDADO EN FIREBASE
// ====================================

/**
 * Guarda el progreso completo en Firebase
 */
window.saveMapaProgress = async (nodesVisited, totalNodes, timeSpent = 0) => {
  const user = auth.currentUser;
  if (!user) {
    console.warn('⚠️ No hay usuario autenticado');
    return false;
  }
  
  // Actualizar progreso del mapa
  updateMapProgress(nodesVisited, totalNodes);
  
  // Calcular tiempo transcurrido
  const totalTime = Math.round((Date.now() - systemState.startTime) / 1000);
  const finalTime = Math.max(timeSpent, totalTime);
  
  const tema = getActiveTema();
  
  try {
    // Determinar estado para Firebase
    let status = "in_progress";
    if (systemState.overallStatus === SCORING_CONFIG.states.APPROVED) {
      status = "completed";
    } else if (systemState.finalScore >= 80) {
      status = "approved";
    }
    
    console.log(`💾 Guardando en Firebase: ${systemState.finalScore}% (${status})`);
    console.log(`   📖 Mapa: ${Math.round(systemState.map.percentage * 100)}% × ${SCORING_CONFIG.weights.mapa * 100}% = ${Math.round(systemState.map.percentage * SCORING_CONFIG.weights.mapa * 100)}%`);
    console.log(`   🎮 Juego: ${Math.round(systemState.game.percentage * 100)}% × ${SCORING_CONFIG.weights.juego * 100}% = ${Math.round(systemState.game.percentage * SCORING_CONFIG.weights.juego * 100)}%`);
    
    await saveProgress({
      moduleId: tema,
      lessonId: 'mapa',
      status: status,
      score: systemState.finalScore,
      seconds: finalTime
    });
    
    systemState.lastSave = new Date().toISOString();
    
    console.log(`✅ Guardado exitoso en Firebase: ${systemState.finalScore}%`);
    showNotification('💾 Guardado', `Progreso guardado: ${systemState.finalScore}%`, 'info', 2000);
    
    return true;
    
  } catch (error) {
    console.error('❌ Error guardando en Firebase:', error);
    showNotification('❌ Error', 'No se pudo guardar el progreso', 'error');
    return false;
  }
};

/**
 * Guarda progreso del juego
 */
window.saveGameProgress = async (correct, total) => {
  updateGameProgress(correct, total);
  
  // Guardar en Firebase automáticamente
  const timeSpent = Math.round((Date.now() - systemState.startTime) / 1000);
  await window.saveMapaProgress(systemState.map.visited, systemState.map.total, timeSpent);
};

// ====================================
// INTERFAZ DE USUARIO
// ====================================

/**
 * Crea el panel de progreso
 */
function createProgressUI() {
  // Verificar si ya existe
  if (document.getElementById('scoring-panel')) return;
  
  const panel = document.createElement('div');
  panel.id = 'scoring-panel';
  panel.innerHTML = `
    <div style="
      position: fixed;
      top: 10px;
      left: 10px;
      background: rgba(255, 255, 255, 0.98);
      padding: 15px;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.15);
      border-left: 4px solid #667eea;
      z-index: 9999;
      min-width: 300px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-size: 14px;
    ">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <div style="font-weight: 600; color: #333;">📊 Progreso de Actividad</div>
        <button id="minimize-panel" style="
          background: none;
          border: none;
          font-size: 18px;
          cursor: pointer;
          padding: 0;
          width: 24px;
          height: 24px;
        ">▼</button>
      </div>
      
      <div id="panel-content">
        <!-- Mapa -->
        <div style="margin-bottom: 10px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
            <span style="font-size: 13px;">📖 Mapa Conceptual</span>
            <span id="map-percent" style="font-weight: 600;">0%</span>
          </div>
          <div style="background: #e0e0e0; height: 8px; border-radius: 4px; overflow: hidden;">
            <div id="map-bar" style="
              background: linear-gradient(90deg, #4CAF50, #45a049);
              height: 100%;
              width: 0%;
              transition: width 0.4s ease;
            "></div>
          </div>
          <div style="font-size: 11px; color: #666; margin-top: 3px;">
            Req: 100% para desbloquear juego
          </div>
        </div>
        
        <!-- Juego -->
        <div style="margin-bottom: 10px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
            <span style="font-size: 13px;">🎮 Juego de Conceptos</span>
            <span id="game-percent" style="font-weight: 600;">0%</span>
          </div>
          <div style="background: #e0e0e0; height: 8px; border-radius: 4px; overflow: hidden;">
            <div id="game-bar" style="
              background: linear-gradient(90deg, #FF9800, #F57C00);
              height: 100%;
              width: 0%;
              transition: width 0.4s ease;
            "></div>
          </div>
          <div style="font-size: 11px; color: #666; margin-top: 3px;">
            Req: 80% para aprobar actividad
          </div>
        </div>
        
        <!-- Score Final -->
        <div style="
          border-top: 2px solid #e0e0e0;
          padding-top: 10px;
          margin-top: 10px;
        ">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-weight: 600;">🏆 Score Final</span>
            <span id="final-score" style="
              font-size: 18px;
              font-weight: 700;
              color: #667eea;
            ">0%</span>
          </div>
          <div id="status-text" style="
            font-size: 11px;
            margin-top: 4px;
            padding: 4px 8px;
            border-radius: 4px;
            text-align: center;
            font-weight: 500;
          ">
            Iniciando...
          </div>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(panel);
  
  // Funcionalidad de minimizar
  const minimizeBtn = panel.querySelector('#minimize-panel');
  const content = panel.querySelector('#panel-content');
  let isMinimized = false;
  
  minimizeBtn.addEventListener('click', () => {
    isMinimized = !isMinimized;
    content.style.display = isMinimized ? 'none' : 'block';
    minimizeBtn.textContent = isMinimized ? '▲' : '▼';
  });
  
  console.log('✅ Panel de progreso creado');
}

/**
 * Actualiza la UI con el estado actual
 */
function updateProgressUI() {
  const mapBar = document.getElementById('map-bar');
  const gameBar = document.getElementById('game-bar');
  const mapPercent = document.getElementById('map-percent');
  const gamePercent = document.getElementById('game-percent');
  const finalScore = document.getElementById('final-score');
  const statusText = document.getElementById('status-text');
  
  if (!mapBar) return; // UI no inicializada todavía
  
  // Actualizar barras
  mapBar.style.width = `${systemState.map.percentage * 100}%`;
  gameBar.style.width = `${systemState.game.percentage * 100}%`;
  
  // Actualizar textos
  mapPercent.textContent = `${Math.round(systemState.map.percentage * 100)}%`;
  gamePercent.textContent = `${Math.round(systemState.game.percentage * 100)}%`;
  finalScore.textContent = `${systemState.finalScore}%`;
  
  // Actualizar estado
  let statusMessage = '';
  let statusColor = '';
  
  switch (systemState.overallStatus) {
    case SCORING_CONFIG.states.LOCKED:
      statusMessage = '🔒 Completa el mapa para jugar';
      statusColor = '#ff6b6b';
      break;
    case SCORING_CONFIG.states.UNLOCKED:
      statusMessage = '🎮 Juego desbloqueado - Necesitas 80%';
      statusColor = '#FF9800';
      break;
    case SCORING_CONFIG.states.APPROVED:
      statusMessage = '✅ ¡Actividad Aprobada!';
      statusColor = '#4CAF50';
      break;
  }
  
  statusText.textContent = statusMessage;
  statusText.style.background = statusColor + '22';
  statusText.style.color = statusColor;
  statusText.style.border = `1px solid ${statusColor}`;
  
  // Actualizar botón del juego
  updateGameButtonState();
}

/**
 * Actualiza el estado del botón de juego
 */
function updateGameButtonState() {
  const startButton = document.getElementById('startGame');
  if (!startButton) return;
  
  if (isGameUnlocked()) {
    startButton.disabled = false;
    startButton.textContent = '🎮 Jugar';
    startButton.style.background = '#4CAF50';
    startButton.style.cursor = 'pointer';
    startButton.style.opacity = '1';
  } else {
    startButton.disabled = true;
    startButton.textContent = `🔒 Bloqueado (${Math.round(systemState.map.percentage * 100)}%)`;
    startButton.style.background = '#ccc';
    startButton.style.cursor = 'not-allowed';
    startButton.style.opacity = '0.6';
  }
}

/**
 * Muestra notificaciones
 */
function showNotification(title, message, type = 'info', duration = 4000) {
  const colors = {
    success: '#4CAF50',
    error: '#ff6b6b',
    warning: '#FF9800',
    info: '#2196F3'
  };
  
  const notification = document.createElement('div');
  notification.innerHTML = `
    <div style="
      position: fixed;
      top: 20px;
      right: 20px;
      background: white;
      padding: 16px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.15);
      border-left: 4px solid ${colors[type]};
      z-index: 10000;
      max-width: 350px;
      animation: slideIn 0.3s ease;
    ">
      <div style="font-weight: 600; margin-bottom: 4px; color: ${colors[type]};">
        ${title}
      </div>
      <div style="font-size: 13px; color: #666;">
        ${message}
      </div>
    </div>
  `;
  
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), duration);
}

/**
 * Muestra notificación de aprobación
 */
function showApprovalNotification() {
  const notification = document.createElement('div');
  notification.innerHTML = `
    <div style="
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.3);
      z-index: 10001;
      text-align: center;
      max-width: 500px;
      animation: zoomIn 0.4s ease;
    ">
      <div style="font-size: 48px; margin-bottom: 16px;">🏆</div>
      <h2 style="margin: 0 0 16px 0; font-size: 28px;">¡Actividad Aprobada!</h2>
      <p style="margin: 0 0 12px 0; font-size: 16px;">
        Has completado exitosamente:
      </p>
      <div style="
        background: rgba(255,255,255,0.2);
        padding: 16px;
        border-radius: 8px;
        margin-bottom: 16px;
      ">
        <p style="margin: 4px 0;">📖 Mapa: ${Math.round(systemState.map.percentage * 100)}%</p>
        <p style="margin: 4px 0;">🎮 Juego: ${Math.round(systemState.game.percentage * 100)}%</p>
        <p style="margin: 12px 0 4px 0; font-size: 20px; font-weight: 700;">
          Score Final: ${systemState.finalScore}%
        </p>
      </div>
      <button onclick="this.parentElement.parentElement.remove()" style="
        background: white;
        color: #667eea;
        border: none;
        padding: 12px 24px;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
        font-size: 14px;
      ">
        ¡Excelente!
      </button>
    </div>
  `;
  
  document.body.appendChild(notification);
}

// ====================================
// PERSISTENCIA
// ====================================

/**
 * Guarda el estado en sessionStorage
 */
function saveToSession() {
  const tema = getActiveTema();
  const key = `tema.${tema}.scoring`;
  
  try {
    sessionStorage.setItem(key, JSON.stringify(systemState));
  } catch (e) {
    console.warn('No se pudo guardar en sessionStorage:', e);
  }
}

/**
 * Carga el estado desde sessionStorage
 */
function loadFromSession() {
  const tema = getActiveTema();
  const key = `tema.${tema}.scoring`;
  
  try {
    const saved = sessionStorage.getItem(key);
    if (saved) {
      const data = JSON.parse(saved);
      systemState = { ...systemState, ...data };
      console.log('📂 Estado cargado desde sesión');
      updateProgressUI();
    }
  } catch (e) {
    console.warn('Error cargando estado:', e);
  }
}

// ====================================
// INTEGRACIÓN CON EL SISTEMA DE MAPAS
// ====================================

/**
 * Conecta con el sistema de mapas existente
 */
function integrateWithMapSystem() {
  // Esperar a que el sistema de mapas esté listo
  const checkSystem = () => {
    if (window.mapaSystemInstance) {
      console.log('🔗 Conectando con sistema de mapas...');
      
      const originalSystem = window.mapaSystemInstance;
      
      // Interceptar marcado de nodos visitados
      const originalMarkVisited = originalSystem.markNodeAsVisited.bind(originalSystem);
      originalSystem.markNodeAsVisited = (node) => {
        originalMarkVisited(node);
        
        // Actualizar progreso
        const progress = originalSystem.getProgress();
        updateMapProgress(progress.visitedNodes.length, progress.totalNodes);
      };
      
      // Interceptar respuestas correctas del juego
      const originalCorrectMatch = originalSystem.handleCorrectMatch.bind(originalSystem);
      originalSystem.handleCorrectMatch = (card) => {
        originalCorrectMatch(card);
        
        // Actualizar progreso del juego
        const gameStats = originalSystem.getGameStats();
        updateGameProgress(gameStats.correctCount, gameStats.totalPairs);
      };
      
      // Interceptar inicio de juego para verificar desbloqueo
      const originalInitGame = originalSystem.initGame.bind(originalSystem);
      originalSystem.initGame = () => {
        if (isGameUnlocked()) {
          originalInitGame();
        } else {
          showGameLockedMessage();
        }
      };
      
      // Obtener estado inicial
      const initialProgress = originalSystem.getProgress();
      if (initialProgress) {
        updateMapProgress(initialProgress.visitedNodes.length, initialProgress.totalNodes);
      }
      
      console.log('✅ Integración completa');
      
    } else {
      setTimeout(checkSystem, 100);
    }
  };
  
  checkSystem();
}

// ====================================
// FUNCIONES DE DIAGNÓSTICO
// ====================================

window.checkMapaFirebaseIntegration = () => {
  console.log('\n🔍 === DIAGNÓSTICO SISTEMA DE PUNTUACIÓN ===');
  console.log('Estado del sistema:', systemState);
  console.log('Configuración:', SCORING_CONFIG);
  console.log(`Usuario autenticado: ${!!auth.currentUser}`);
  console.log(`Tema activo: ${getActiveTema()}`);
  console.log(`Instancia del mapa: ${!!window.mapaSystemInstance}`);
  console.log('=========================================\n');
};

window.forceMapaSave = async () => {
  console.log('🔧 Forzando guardado manual...');
  
  const timeSpent = Math.round((Date.now() - systemState.startTime) / 1000);
  const success = await window.saveMapaProgress(
    systemState.map.visited,
    systemState.map.total,
    timeSpent
  );
  
  if (success) {
    showNotification('💾 Guardado Forzado', 'Progreso guardado manualmente', 'success');
  }
  
  return success;
};

window.resetScoringSystem = () => {
  console.log('🔄 Reiniciando sistema de puntuación...');
  
  systemState = {
    initialized: false,
    startTime: Date.now(),
    map: { visited: 0, total: 0, percentage: 0, completed: false },
    game: { correct: 0, total: 0, attempts: 0, percentage: 0, completed: false },
    overallStatus: SCORING_CONFIG.states.LOCKED,
    finalScore: 0,
    lastSave: null
  };
  
  const tema = getActiveTema();
  sessionStorage.removeItem(`tema.${tema}.scoring`);
  
  updateProgressUI();
  showNotification('🔄 Reset', 'Sistema reiniciado', 'info');
};

window.forceUnlockGame = () => {
  console.log('🔧 Forzando desbloqueo del juego...');
  systemState.map.percentage = 1.0;
  systemState.map.completed = true;
  unlockGame();
};

// ====================================
// INICIALIZACIÓN
// ====================================

function initializeScoringSystem() {
  if (systemState.initialized) return;
  
  console.log('🚀 Inicializando sistema de puntuación v2.0...');
  console.log(`📌 Tema: ${getActiveTema()}`);
  console.log(`⚙️ Config: Mapa ${SCORING_CONFIG.weights.mapa * 100}% + Juego ${SCORING_CONFIG.weights.juego * 100}%`);
  console.log(`✅ Requisitos: Mapa 100% + Juego ${SCORING_CONFIG.requiredGameCompletion * 100}%`);
  
  // Crear UI
  createProgressUI();
  
  // Cargar estado guardado
  loadFromSession();
  
  // Integrar con sistema de mapas
  integrateWithMapSystem();
  
  // Configurar listener de autenticación
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log(`👤 Usuario: ${user.email}`);
    }
  });
  
  systemState.initialized = true;
  
  console.log('✅ Sistema de puntuación inicializado');
  console.log('🛠️ Funciones disponibles:');
  console.log('   - checkMapaFirebaseIntegration()');
  console.log('   - forceMapaSave()');
  console.log('   - resetScoringSystem()');
  console.log('   - forceUnlockGame()');
}

// Auto-inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeScoringSystem);
} else {
  // Dar tiempo a que se cargue el sistema de mapas
  setTimeout(initializeScoringSystem, 500);
}

// Agregar estilos de animación
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes zoomIn {
    from {
      transform: translate(-50%, -50%) scale(0.8);
      opacity: 0;
    }
    to {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  }
`;
document.head.appendChild(style);

console.log('🎮 Sistema de puntuación mejorado v2.0 cargado');