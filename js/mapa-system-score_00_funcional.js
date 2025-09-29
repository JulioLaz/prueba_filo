// ========================================
// 🗺️ MAPA-SYSTEM-SCORE.JS v3.0
// Sistema con guardado INMEDIATO y celebraciones mejoradas
// ========================================

import { saveProgress } from "/prueba_filo/firebase.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

console.log('🗺️ Sistema v3.0: Guardado inmediato + Celebraciones mejoradas');

const auth = getAuth();

// ====================================
// CONFIGURACIÓN
// ====================================

const SCORING_CONFIG = {
  requiredMapCompletion: 1.0,
  requiredGameCompletion: 0.8,
  weights: {
    mapa: 0.30,
    juego: 0.70
  },
  states: {
    LOCKED: 'locked',
    UNLOCKED: 'unlocked',
    APPROVED: 'approved',
    EXCELLENT: 'excellent'
  }
};

let systemState = {
  initialized: false,
  startTime: Date.now(),
  map: { visited: 0, total: 0, percentage: 0, completed: false },
  game: { correct: 0, total: 0, percentage: 0, completed: false },
  overallStatus: SCORING_CONFIG.states.LOCKED,
  finalScore: 0,
  lastSave: null,
  milestonesReached: {
    mapComplete: false,
    game80: false,
    game100: false
  }
};

// ====================================
// FUNCIONES DE CÁLCULO
// ====================================

function calculateFinalScore() {
  const mapContribution = systemState.map.percentage * SCORING_CONFIG.weights.mapa;
  const gameContribution = systemState.game.percentage * SCORING_CONFIG.weights.juego;
  return Math.round(Math.min((mapContribution + gameContribution) * 100, 100));
}

function determineStatus() {
  const mapComplete = systemState.map.percentage >= SCORING_CONFIG.requiredMapCompletion;
  const gameComplete = systemState.game.percentage >= SCORING_CONFIG.requiredGameCompletion;
  const gamePerfect = systemState.game.percentage >= 1.0;
  
  if (mapComplete && gamePerfect) return SCORING_CONFIG.states.EXCELLENT;
  if (mapComplete && gameComplete) return SCORING_CONFIG.states.APPROVED;
  if (mapComplete) return SCORING_CONFIG.states.UNLOCKED;
  return SCORING_CONFIG.states.LOCKED;
}

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
    } catch (e) {}
  }
  return 'filosofia';
}

// ====================================
// GUARDADO INMEDIATO EN FIREBASE
// ====================================

async function saveToFirebaseNow(reason = '') {
  const user = auth.currentUser;
  if (!user) {
    console.warn('⚠️ No hay usuario - guardado omitido');
    return false;
  }
  
  const totalTime = Math.round((Date.now() - systemState.startTime) / 1000);
  const tema = getActiveTema();
  
  let status = "in_progress";
  if (systemState.overallStatus === SCORING_CONFIG.states.EXCELLENT) {
    status = "completed";
  } else if (systemState.overallStatus === SCORING_CONFIG.states.APPROVED) {
    status = "completed";
  } else if (systemState.finalScore >= 80) {
    status = "approved";
  }
  
  try {
    console.log(`\n💾 === GUARDANDO INMEDIATAMENTE (${reason}) ===`);
    console.log(`⏰ Timestamp: ${new Date().toLocaleTimeString()}`);
    console.log(`📊 Score Final: ${systemState.finalScore}%`);
    console.log(`   📖 Mapa: ${Math.round(systemState.map.percentage * 100)}% (${systemState.map.visited}/${systemState.map.total}) × 30% = ${Math.round(systemState.map.percentage * 30)}%`);
    console.log(`   🎮 Juego: ${Math.round(systemState.game.percentage * 100)}% (${systemState.game.correct}/${systemState.game.total}) × 70% = ${Math.round(systemState.game.percentage * 70)}%`);
    console.log(`   📝 Estado: ${status}`);
    console.log(`   ⏱️ Tiempo: ${totalTime}s`);
    
    await saveProgress({
      moduleId: tema,
      lessonId: 'mapa',
      status: status,
      score: systemState.finalScore,
      seconds: totalTime
    });
    
    systemState.lastSave = new Date().toISOString();
    console.log(`✅ GUARDADO EXITOSO en Firebase`);
    console.log(`===========================================\n`);
    
    return true;
    
  } catch (error) {
    console.error('❌ ERROR GUARDANDO:', error);
    return false;
  }
}

// ====================================
// ACTUALIZACIÓN DE PROGRESO
// ====================================

function updateMapProgress(visited, total) {
  const oldPercentage = systemState.map.percentage;
  const wasCompleted = systemState.map.completed;
  
  systemState.map.visited = visited;
  systemState.map.total = total;
  systemState.map.percentage = total > 0 ? visited / total : 0;
  systemState.map.completed = systemState.map.percentage >= SCORING_CONFIG.requiredMapCompletion;
  
  console.log(`📖 Mapa actualizado: ${visited}/${total} (${Math.round(systemState.map.percentage * 100)}%)`);
  
  // Si se acaba de completar el mapa por primera vez
  if (!wasCompleted && systemState.map.completed && !systemState.milestonesReached.mapComplete) {
    systemState.milestonesReached.mapComplete = true;
    console.log('🎉 MAPA COMPLETADO AL 100%');
    unlockGame();
    updateSystemState();
    
    // GUARDAR INMEDIATAMENTE
    saveToFirebaseNow('Mapa 100% completado').then(success => {
      if (success) {
        showMapCompletedCelebration();
      }
    });
  } else if (Math.abs(systemState.map.percentage - oldPercentage) > 0.01) {
    updateSystemState();
    // Guardar progreso parcial
    saveToFirebaseNow('Progreso del mapa');
  }
}

function updateGameProgress(correct, total) {
  const oldPercentage = systemState.game.percentage;
  
  systemState.game.correct = correct;
  systemState.game.total = total;
  systemState.game.percentage = total > 0 ? correct / total : 0;
  systemState.game.completed = systemState.game.percentage >= SCORING_CONFIG.requiredGameCompletion;
  
  console.log(`🎮 Juego actualizado: ${correct}/${total} (${Math.round(systemState.game.percentage * 100)}%)`);
  
  updateSystemState();
  
  // Celebrar al alcanzar 80%
  if (systemState.game.percentage >= 0.8 && !systemState.milestonesReached.game80) {
    systemState.milestonesReached.game80 = true;
    console.log('🎯 JUEGO: 80% ALCANZADO - ACTIVIDAD APROBADA');
    
    // GUARDAR INMEDIATAMENTE
    saveToFirebaseNow('Juego 80% - Actividad Aprobada').then(success => {
      if (success) {
        showApprovedCelebration();
      }
    });
  }
  
  // Celebrar al alcanzar 100%
  if (systemState.game.percentage >= 1.0 && !systemState.milestonesReached.game100) {
    systemState.milestonesReached.game100 = true;
    console.log('🏆 JUEGO: 100% COMPLETADO - PERFECTO');
    
    // GUARDAR INMEDIATAMENTE
    saveToFirebaseNow('Juego 100% - Completado').then(success => {
      if (success) {
        showExcellentCelebration();
      }
    });
  }
  
  // Si no es milestone, guardar de todas formas
  if (Math.abs(systemState.game.percentage - oldPercentage) > 0.01) {
    saveToFirebaseNow('Progreso del juego');
  }
}

function updateSystemState() {
  const previousScore = systemState.finalScore;
  const previousStatus = systemState.overallStatus;
  
  systemState.finalScore = calculateFinalScore();
  systemState.overallStatus = determineStatus();
  
  if (previousStatus !== systemState.overallStatus) {
    console.log(`🔄 Estado cambió: ${previousStatus} → ${systemState.overallStatus}`);
  }
  
  if (previousScore !== systemState.finalScore) {
    console.log(`🎯 Score cambió: ${previousScore}% → ${systemState.finalScore}%`);
  }
  
  updateProgressUI();
  saveToSession();
}

// ====================================
// CELEBRACIONES MEJORADAS
// ====================================

function showMapCompletedCelebration() {
  const modal = document.createElement('div');
  modal.innerHTML = `
    <div style="
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
      color: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.4);
      z-index: 10001;
      text-align: center;
      max-width: 450px;
      animation: zoomBounce 0.5s ease;
    ">
      <div style="font-size: 64px; margin-bottom: 16px; animation: spin 1s ease;">🗺️</div>
      <h2 style="margin: 0 0 12px 0; font-size: 26px;">¡Mapa Completado!</h2>
      <p style="margin: 0 0 20px 0; font-size: 16px; opacity: 0.95;">
        Completaste toda la lectura del mapa conceptual
      </p>
      <div style="background: rgba(255,255,255,0.2); padding: 16px; border-radius: 8px; margin-bottom: 20px;">
        <div style="font-size: 18px; font-weight: 600;">📖 Progreso: ${Math.round(systemState.map.percentage * 100)}%</div>
        <div style="font-size: 14px; margin-top: 8px; opacity: 0.9;">✅ Juego de conceptos desbloqueado</div>
      </div>
      <button onclick="this.parentElement.parentElement.remove()" style="
        background: white;
        color: #4CAF50;
        border: none;
        padding: 12px 32px;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 700;
        font-size: 16px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
      ">
        ¡Vamos al Juego!
      </button>
    </div>
    <div style="
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.5);
      z-index: 10000;
    " onclick="this.parentElement.remove()"></div>
  `;
  
  document.body.appendChild(modal);
}

function showApprovedCelebration() {
  const modal = document.createElement('div');
  modal.innerHTML = `
    <div style="
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: linear-gradient(135deg, #FF9800 0%, #F57C00 100%);
      color: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.4);
      z-index: 10001;
      text-align: center;
      max-width: 500px;
      animation: zoomBounce 0.5s ease;
    ">
      <div style="font-size: 72px; margin-bottom: 16px; animation: pulse 1s infinite;">🎯</div>
      <h2 style="margin: 0 0 12px 0; font-size: 28px;">¡Actividad Aprobada!</h2>
      <p style="margin: 0 0 20px 0; font-size: 16px;">
        Alcanzaste el 80% requerido en el juego de conceptos
      </p>
      <div style="background: rgba(255,255,255,0.2); padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <div style="font-size: 14px; margin-bottom: 8px; opacity: 0.9;">Tu calificación:</div>
        <div style="font-size: 36px; font-weight: 700; margin-bottom: 12px;">${systemState.finalScore}%</div>
        <div style="display: flex; gap: 20px; justify-content: center; font-size: 14px;">
          <div>📖 Mapa: ${Math.round(systemState.map.percentage * 100)}%</div>
          <div>🎮 Juego: ${Math.round(systemState.game.percentage * 100)}%</div>
        </div>
        <div style="margin-top: 16px; padding: 12px; background: rgba(255,255,255,0.3); border-radius: 6px;">
          <div style="font-size: 13px; margin-bottom: 4px;">☁️ Registrando tu nota...</div>
          <div style="background: rgba(255,255,255,0.5); height: 4px; border-radius: 2px; overflow: hidden;">
            <div style="background: white; height: 100%; width: 100%; animation: slideProgress 1.5s ease;"></div>
          </div>
          <div style="font-size: 13px; margin-top: 8px; font-weight: 600;">✓ Nota registrada correctamente</div>
        </div>
      </div>
      <p style="font-size: 14px; margin-bottom: 16px; opacity: 0.9;">
        💡 ¿Querés llegar al 100%? ¡Seguí jugando!
      </p>
      <button onclick="this.parentElement.parentElement.remove()" style="
        background: white;
        color: #FF9800;
        border: none;
        padding: 12px 32px;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 700;
        font-size: 16px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
      ">
        ¡Entendido!
      </button>
    </div>
    <div style="
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.6);
      z-index: 10000;
    " onclick="this.parentElement.remove()"></div>
  `;
  
  document.body.appendChild(modal);
}

function showExcellentCelebration() {
  const modal = document.createElement('div');
  modal.innerHTML = `
    <div style="
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 50px;
      border-radius: 20px;
      box-shadow: 0 12px 40px rgba(0,0,0,0.5);
      z-index: 10001;
      text-align: center;
      max-width: 550px;
      animation: zoomBounce 0.6s ease;
    ">
      <div style="font-size: 96px; margin-bottom: 20px; animation: rotate3d 2s ease;">🏆</div>
      <h2 style="margin: 0 0 16px 0; font-size: 32px; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">¡Excelente Trabajo!</h2>
      <p style="margin: 0 0 24px 0; font-size: 18px;">
        ¡Completaste la actividad al 100%!
      </p>
      <div style="background: rgba(255,255,255,0.25); padding: 24px; border-radius: 12px; margin-bottom: 24px; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">
        <div style="font-size: 16px; margin-bottom: 12px; opacity: 0.95;">Tu calificación final:</div>
        <div style="font-size: 48px; font-weight: 700; margin-bottom: 16px; text-shadow: 0 2px 8px rgba(0,0,0,0.2);">${systemState.finalScore}%</div>
        <div style="display: flex; gap: 30px; justify-content: center; font-size: 16px; margin-bottom: 20px;">
          <div>📖 Mapa: ${Math.round(systemState.map.percentage * 100)}%</div>
          <div>🎮 Juego: ${Math.round(systemState.game.percentage * 100)}%</div>
        </div>
        <div style="margin-top: 20px; padding: 16px; background: rgba(255,255,255,0.3); border-radius: 8px;">
          <div style="font-size: 15px; margin-bottom: 6px;">☁️ Guardando tu calificación...</div>
          <div style="background: rgba(255,255,255,0.5); height: 6px; border-radius: 3px; overflow: hidden; margin: 8px 0;">
            <div style="background: white; height: 100%; width: 100%; animation: slideProgress 2s ease;"></div>
          </div>
          <div style="font-size: 15px; margin-top: 10px; font-weight: 700;">✓ Calificación registrada exitosamente</div>
          <div style="font-size: 13px; margin-top: 6px; opacity: 0.9;">Tu nota está disponible en el sistema</div>
        </div>
      </div>
      <div style="font-size: 16px; margin-bottom: 20px; padding: 12px; background: rgba(255,255,255,0.2); border-radius: 8px;">
        🌟 ¡Dominás completamente este tema!
      </div>
      <button onclick="this.parentElement.parentElement.remove()" style="
        background: white;
        color: #667eea;
        border: none;
        padding: 14px 40px;
        border-radius: 10px;
        cursor: pointer;
        font-weight: 700;
        font-size: 18px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      ">
        ¡Genial!
      </button>
    </div>
    <div style="
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.7);
      z-index: 10000;
    " onclick="this.parentElement.remove()"></div>
  `;
  
  document.body.appendChild(modal);
}

// ====================================
// GESTIÓN DEL JUEGO
// ====================================

function unlockGame() {
  systemState.overallStatus = SCORING_CONFIG.states.UNLOCKED;
  
  const startButton = document.getElementById('startGame');
  if (startButton) {
    startButton.disabled = false;
    startButton.textContent = '🎮 Jugar Ahora';
    startButton.style.background = '#4CAF50';
    startButton.style.cursor = 'pointer';
  }
  
  console.log('🔓 Juego desbloqueado');
}

function isGameUnlocked() {
  return systemState.map.completed;
}

function showGameLockedMessage() {
  const notification = document.createElement('div');
  notification.innerHTML = `
    <div style="
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: white;
      color: #333;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
      border-left: 5px solid #ff6b6b;
      z-index: 10001;
      text-align: center;
      max-width: 400px;
    ">
      <div style="font-size: 48px; margin-bottom: 16px;">🔒</div>
      <h3 style="margin: 0 0 12px 0; color: #ff6b6b;">Juego Bloqueado</h3>
      <p style="margin: 0 0 16px 0; color: #666;">
        Debes completar <strong>todo el mapa conceptual</strong> antes de jugar.
      </p>
      <div style="padding: 12px; background: #f5f5f5; border-radius: 6px; margin-bottom: 16px;">
        <div style="font-size: 14px; color: #666; margin-bottom: 6px;">Tu progreso actual:</div>
        <div style="font-size: 24px; font-weight: 700; color: #ff6b6b;">
          ${Math.round(systemState.map.percentage * 100)}%
        </div>
      </div>
      <button onclick="this.parentElement.parentElement.remove()" style="
        background: #ff6b6b;
        color: white;
        border: none;
        padding: 10px 24px;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 600;
      ">
        Entendido
      </button>
    </div>
    <div style="
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.5);
      z-index: 10000;
    " onclick="this.parentElement.remove()"></div>
  `;
  
  document.body.appendChild(notification);
}

// ====================================
// FUNCIONES PÚBLICAS
// ====================================

window.saveMapaProgress = async (nodesVisited, totalNodes, timeSpent = 0) => {
  console.log(`📞 saveMapaProgress: ${nodesVisited}/${totalNodes}`);
  updateMapProgress(nodesVisited, totalNodes);
  return true; // Ya se guardó en updateMapProgress
};

window.saveGameProgress = async (correct, total) => {
  console.log(`📞 saveGameProgress: ${correct}/${total}`);
  updateGameProgress(correct, total);
  return true; // Ya se guardó en updateGameProgress
};

// ====================================
// UI
// ====================================

function createProgressUI() {
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
        <div style="font-weight: 600; color: #333;">📊 Tu Progreso</div>
        <button id="minimize-panel" style="background: none; border: none; font-size: 18px; cursor: pointer; padding: 0;">▼</button>
      </div>
      
      <div id="panel-content">
        <div style="margin-bottom: 10px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
            <span style="font-size: 13px;">📖 Mapa</span>
            <span id="map-percent" style="font-weight: 600;">0%</span>
          </div>
          <div style="background: #e0e0e0; height: 8px; border-radius: 4px; overflow: hidden;">
            <div id="map-bar" style="background: linear-gradient(90deg, #4CAF50, #45a049); height: 100%; width: 0%; transition: width 0.4s;"></div>
          </div>
          <div style="font-size: 11px; color: #666; margin-top: 3px;">Completa 100% para jugar</div>
        </div>
        
        <div style="margin-bottom: 10px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
            <span style="font-size: 13px;">🎮 Juego</span>
            <span id="game-percent" style="font-weight: 600;">0%</span>
          </div>
          <div style="background: #e0e0e0; height: 8px; border-radius: 4px; overflow: hidden;">
            <div id="game-bar" style="background: linear-gradient(90deg, #FF9800, #F57C00); height: 100%; width: 0%; transition: width 0.4s;"></div>
          </div>
          <div style="font-size: 11px; color: #666; margin-top: 3px;">Mínimo 80% para aprobar</div>
        </div>
        
        <div style="border-top: 2px solid #e0e0e0; padding-top: 10px; margin-top: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-weight: 600;">🎯 Calificación</span>
            <span id="final-score" style="font-size: 18px; font-weight: 700; color: #667eea;">0%</span>
          </div>
          <div id="status-text" style="font-size: 11px; margin-top: 4px; padding: 4px 8px; border-radius: 4px; text-align: center; font-weight: 500;"></div>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(panel);
  
  const minimizeBtn = panel.querySelector('#minimize-panel');
  const content = panel.querySelector('#panel-content');
  let isMinimized = false;
  
  minimizeBtn.addEventListener('click', () => {
    isMinimized = !isMinimized;
    content.style.display = isMinimized ? 'none' : 'block';
    minimizeBtn.textContent = isMinimized ? '▲' : '▼';
  });
}

function updateProgressUI() {
  const elements = {
    mapBar: document.getElementById('map-bar'),
    gameBar: document.getElementById('game-bar'),
    mapPercent: document.getElementById('map-percent'),
    gamePercent: document.getElementById('game-percent'),
    finalScore: document.getElementById('final-score'),
    statusText: document.getElementById('status-text')
  };
  
  if (!elements.mapBar) return;
  
  elements.mapBar.style.width = `${systemState.map.percentage * 100}%`;
  elements.gameBar.style.width = `${systemState.game.percentage * 100}%`;
  elements.mapPercent.textContent = `${Math.round(systemState.map.percentage * 100)}%`;
  elements.gamePercent.textContent = `${Math.round(systemState.game.percentage * 100)}%`;
  elements.finalScore.textContent = `${systemState.finalScore}%`;
  
  let statusMessage, statusColor;
  switch (systemState.overallStatus) {
    case SCORING_CONFIG.states.LOCKED:
      statusMessage = '🔒 Completa el mapa';
      statusColor = '#ff6b6b';
      break;
    case SCORING_CONFIG.states.UNLOCKED:
      statusMessage = '🎮 Jugá para aprobar';
      statusColor = '#FF9800';
      break;
    case SCORING_CONFIG.states.APPROVED:
      statusMessage = '✅ Aprobado';
      statusColor = '#4CAF50';
      break;
    case SCORING_CONFIG.states.EXCELLENT:
      statusMessage = '🏆 Excelente';
      statusColor = '#667eea';
      break;
  }
  
  elements.statusText.textContent = statusMessage;
  elements.statusText.style.background = statusColor + '22';
  elements.statusText.style.color = statusColor;
  elements.statusText.style.border = `1px solid ${statusColor}`;
  
  updateGameButtonState();
}

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
    startButton.textContent = `🔒 ${Math.round(systemState.map.percentage * 100)}%`;
    startButton.style.background = '#ccc';
    startButton.style.cursor = 'not-allowed';
    startButton.style.opacity = '0.6';
  }
}

// ====================================
// PERSISTENCIA
// ====================================

function saveToSession() {
  const tema = getActiveTema();
  try {
    sessionStorage.setItem(`tema.${tema}.scoring`, JSON.stringify(systemState));
  } catch (e) {}
}

function loadFromSession() {
  const tema = getActiveTema();
  try {
    const saved = sessionStorage.getItem(`tema.${tema}.scoring`);
    if (saved) {
      systemState = { ...systemState, ...JSON.parse(saved) };
      console.log('📂 Estado cargado');
      updateProgressUI();
    }
  } catch (e) {}
}

// ====================================
// INTEGRACIÓN
// ====================================

function integrateWithMapSystem() {
  const checkSystem = () => {
    if (window.mapaSystemInstance) {
      console.log('🔗 Conectando...');
      
      const sys = window.mapaSystemInstance;
      
      const origMark = sys.markNodeAsVisited.bind(sys);
      sys.markNodeAsVisited = (node) => {
        origMark(node);
        const prog = sys.getProgress();
        updateMapProgress(prog.visitedNodes.length, prog.totalNodes);
      };
      
      const origCorrect = sys.handleCorrectMatch.bind(sys);
      sys.handleCorrectMatch = (card) => {
        origCorrect(card);
        const stats = sys.getGameStats();
        updateGameProgress(stats.correctCount, stats.totalPairs);
      };
      
      const origInit = sys.initGame.bind(sys);
      sys.initGame = () => {
        if (isGameUnlocked()) {
          origInit();
        } else {
          showGameLockedMessage();
        }
      };
      
      const initProg = sys.getProgress();
      if (initProg) {
        updateMapProgress(initProg.visitedNodes.length, initProg.totalNodes);
      }
      
      console.log('✅ Integrado');
    } else {
      setTimeout(checkSystem, 100);
    }
  };
  checkSystem();
}

// ====================================
// DEBUG
// ====================================

window.checkMapaFirebaseIntegration = () => {
  console.log('\n🔍 DIAGNÓSTICO');
  console.log('Estado:', systemState);
  console.log('Usuario:', auth.currentUser?.email);
  console.log('Tema:', getActiveTema());
};

window.forceMapaSave = async () => {
  console.log('🔧 Guardado forzado...');
  return await saveToFirebaseNow('Guardado manual forzado');
};

window.resetScoringSystem = () => {
  systemState = {
    initialized: false,
    startTime: Date.now(),
    map: { visited: 0, total: 0, percentage: 0, completed: false },
    game: { correct: 0, total: 0, percentage: 0, completed: false },
    overallStatus: SCORING_CONFIG.states.LOCKED,
    finalScore: 0,
    lastSave: null,
    milestonesReached: { mapComplete: false, game80: false, game100: false }
  };
  sessionStorage.removeItem(`tema.${getActiveTema()}.scoring`);
  updateProgressUI();
};

// ====================================
// INIT
// ====================================

function initializeScoringSystem() {
  if (systemState.initialized) return;
  
  console.log('\n🚀 Sistema v3.0');
  console.log(`Tema: ${getActiveTema()}`);
  
  createProgressUI();
  loadFromSession();
  integrateWithMapSystem();
  
  auth.onAuthStateChanged((user) => {
    if (user) console.log(`👤 Usuario: ${user.email}`);
  });
  
  systemState.initialized = true;
  console.log('✅ Listo\n');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeScoringSystem);
} else {
  setTimeout(initializeScoringSystem, 500);
}

// Estilos de animación
const style = document.createElement('style');
style.textContent = `
  @keyframes zoomBounce {
    0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
    50% { transform: translate(-50%, -50%) scale(1.05); }
    100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  }
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes rotate3d {
    0% { transform: rotateY(0deg); }
    100% { transform: rotateY(360deg); }
  }
  @keyframes slideProgress {
    from { width: 0%; }
    to { width: 100%; }
  }
`;
document.head.appendChild(style);

console.log('✅ Sistema v3.0 cargado');