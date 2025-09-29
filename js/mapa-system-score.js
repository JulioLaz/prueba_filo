// ========================================
// 🗺️ MAPA-SYSTEM-SCORE.JS v2.1
// Sistema completo con AUTO-GUARDADO
// ========================================

import { saveProgress } from "/prueba_filo/firebase.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

console.log('🗺️ Cargando sistema de puntuación v2.1 (con auto-guardado)...');

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
    APPROVED: 'approved'
  },
  autoSaveDelay: 2000 // ms después de cambio para guardar
};

let systemState = {
  initialized: false,
  startTime: Date.now(),
  map: { visited: 0, total: 0, percentage: 0, completed: false },
  game: { correct: 0, total: 0, percentage: 0, completed: false },
  overallStatus: SCORING_CONFIG.states.LOCKED,
  finalScore: 0,
  lastSave: null,
  autoSaveTimer: null
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
// AUTO-GUARDADO
// ====================================

function scheduleAutoSave() {
  // Cancelar timer anterior
  if (systemState.autoSaveTimer) {
    clearTimeout(systemState.autoSaveTimer);
  }
  
  // Programar nuevo guardado
  systemState.autoSaveTimer = setTimeout(async () => {
    console.log('💾 Auto-guardado programado ejecutándose...');
    await saveToFirebase();
  }, SCORING_CONFIG.autoSaveDelay);
  
  console.log(`⏳ Auto-guardado programado en ${SCORING_CONFIG.autoSaveDelay}ms`);
}

async function saveToFirebase() {
  const user = auth.currentUser;
  if (!user) {
    console.warn('⚠️ No hay usuario autenticado - guardado omitido');
    return false;
  }
  
  const totalTime = Math.round((Date.now() - systemState.startTime) / 1000);
  const tema = getActiveTema();
  
  let status = "in_progress";
  if (systemState.overallStatus === SCORING_CONFIG.states.APPROVED) {
    status = "completed";
  } else if (systemState.finalScore >= 80) {
    status = "approved";
  }
  
  try {
    console.log('\n📤 === GUARDANDO EN FIREBASE ===');
    console.log(`Tema: ${tema}`);
    console.log(`Score Final: ${systemState.finalScore}%`);
    console.log(`  📖 Mapa: ${Math.round(systemState.map.percentage * 100)}% × 30% = ${Math.round(systemState.map.percentage * 30)}%`);
    console.log(`  🎮 Juego: ${Math.round(systemState.game.percentage * 100)}% × 70% = ${Math.round(systemState.game.percentage * 70)}%`);
    console.log(`Estado: ${status}`);
    console.log(`Tiempo: ${totalTime}s`);
    
    await saveProgress({
      moduleId: tema,
      lessonId: 'mapa',
      status: status,
      score: systemState.finalScore,
      seconds: totalTime
    });
    
    systemState.lastSave = new Date().toISOString();
    console.log('✅ GUARDADO EXITOSO EN FIREBASE');
    console.log('================================\n');
    
    showNotification('💾 Guardado', `Progreso: ${systemState.finalScore}%`, 'info', 2000);
    return true;
    
  } catch (error) {
    console.error('❌ ERROR GUARDANDO EN FIREBASE:', error);
    showNotification('❌ Error', 'No se pudo guardar', 'error');
    return false;
  }
}

// ====================================
// ACTUALIZACIÓN DE PROGRESO
// ====================================

function updateMapProgress(visited, total) {
  const oldPercentage = systemState.map.percentage;
  
  systemState.map.visited = visited;
  systemState.map.total = total;
  systemState.map.percentage = total > 0 ? visited / total : 0;
  systemState.map.completed = systemState.map.percentage >= SCORING_CONFIG.requiredMapCompletion;
  
  console.log(`📖 Mapa: ${visited}/${total} (${Math.round(systemState.map.percentage * 100)}%)`);
  
  // Desbloquear juego si se completó
  if (systemState.map.completed && systemState.overallStatus === SCORING_CONFIG.states.LOCKED) {
    unlockGame();
  }
  
  updateSystemState();
  
  // Auto-guardar si hubo cambio significativo
  if (Math.abs(systemState.map.percentage - oldPercentage) > 0.01) {
    scheduleAutoSave();
  }
}

function updateGameProgress(correct, total) {
  const oldPercentage = systemState.game.percentage;
  
  systemState.game.correct = correct;
  systemState.game.total = total;
  systemState.game.percentage = total > 0 ? correct / total : 0;
  systemState.game.completed = systemState.game.percentage >= SCORING_CONFIG.requiredGameCompletion;
  
  console.log(`🎮 Juego: ${correct}/${total} (${Math.round(systemState.game.percentage * 100)}%)`);
  
  updateSystemState();
  
  // Auto-guardar si hubo cambio
  if (Math.abs(systemState.game.percentage - oldPercentage) > 0.01) {
    scheduleAutoSave();
  }
}

function updateSystemState() {
  const previousScore = systemState.finalScore;
  const previousStatus = systemState.overallStatus;
  
  systemState.finalScore = calculateFinalScore();
  systemState.overallStatus = determineStatus();
  
  if (previousStatus !== systemState.overallStatus) {
    console.log(`🔄 Estado: ${previousStatus} → ${systemState.overallStatus}`);
    
    if (systemState.overallStatus === SCORING_CONFIG.states.APPROVED) {
      showApprovalNotification();
      scheduleAutoSave(); // Guardar inmediatamente
    }
  }
  
  if (previousScore !== systemState.finalScore) {
    console.log(`🎯 Score: ${previousScore}% → ${systemState.finalScore}%`);
  }
  
  updateProgressUI();
  saveToSession();
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
  
  showNotification('🔓 Juego Desbloqueado', 'Completaste el mapa', 'success');
  console.log('🔓 Juego desbloqueado');
  
  // Guardar el desbloqueo
  scheduleAutoSave();
}

function isGameUnlocked() {
  return systemState.map.completed;
}

function showGameLockedMessage() {
  showNotification(
    '🔒 Juego Bloqueado',
    `Completa el mapa primero (${Math.round(systemState.map.percentage * 100)}%)`,
    'error'
  );
}

// ====================================
// FUNCIONES PÚBLICAS
// ====================================

window.saveMapaProgress = async (nodesVisited, totalNodes, timeSpent = 0) => {
  console.log(`\n📞 saveMapaProgress llamada: ${nodesVisited}/${totalNodes}`);
  updateMapProgress(nodesVisited, totalNodes);
  return await saveToFirebase();
};

window.saveGameProgress = async (correct, total) => {
  console.log(`\n📞 saveGameProgress llamada: ${correct}/${total}`);
  updateGameProgress(correct, total);
  return await saveToFirebase();
};

// ====================================
// INTERFAZ DE USUARIO
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
        <div style="font-weight: 600; color: #333;">📊 Progreso</div>
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
          <div style="font-size: 11px; color: #666; margin-top: 3px;">Req: 100% para juego</div>
        </div>
        
        <div style="margin-bottom: 10px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
            <span style="font-size: 13px;">🎮 Juego</span>
            <span id="game-percent" style="font-weight: 600;">0%</span>
          </div>
          <div style="background: #e0e0e0; height: 8px; border-radius: 4px; overflow: hidden;">
            <div id="game-bar" style="background: linear-gradient(90deg, #FF9800, #F57C00); height: 100%; width: 0%; transition: width 0.4s;"></div>
          </div>
          <div style="font-size: 11px; color: #666; margin-top: 3px;">Req: 80% para aprobar</div>
        </div>
        
        <div style="border-top: 2px solid #e0e0e0; padding-top: 10px; margin-top: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-weight: 600;">🏆 Score Final</span>
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
      statusMessage = '🎮 Necesitas 80% en juego';
      statusColor = '#FF9800';
      break;
    case SCORING_CONFIG.states.APPROVED:
      statusMessage = '✅ Aprobado';
      statusColor = '#4CAF50';
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

function showNotification(title, message, type = 'info', duration = 4000) {
  const colors = {
    success: '#4CAF50',
    error: '#ff6b6b',
    warning: '#FF9800',
    info: '#2196F3'
  };
  
  const notification = document.createElement('div');
  notification.innerHTML = `
    <div style="position: fixed; top: 20px; right: 20px; background: white; padding: 16px 20px; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.15); border-left: 4px solid ${colors[type]}; z-index: 10000; max-width: 350px; animation: slideIn 0.3s ease;">
      <div style="font-weight: 600; margin-bottom: 4px; color: ${colors[type]};">${title}</div>
      <div style="font-size: 13px; color: #666;">${message}</div>
    </div>
  `;
  
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), duration);
}

function showApprovalNotification() {
  const notification = document.createElement('div');
  notification.innerHTML = `
    <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px; border-radius: 16px; box-shadow: 0 8px 32px rgba(0,0,0,0.3); z-index: 10001; text-align: center; max-width: 500px;">
      <div style="font-size: 48px; margin-bottom: 16px;">🏆</div>
      <h2 style="margin: 0 0 16px 0; font-size: 28px;">¡Actividad Aprobada!</h2>
      <div style="background: rgba(255,255,255,0.2); padding: 16px; border-radius: 8px; margin-bottom: 16px;">
        <p style="margin: 4px 0;">📖 Mapa: ${Math.round(systemState.map.percentage * 100)}%</p>
        <p style="margin: 4px 0;">🎮 Juego: ${Math.round(systemState.game.percentage * 100)}%</p>
        <p style="margin: 12px 0 4px 0; font-size: 20px; font-weight: 700;">Score: ${systemState.finalScore}%</p>
      </div>
      <button onclick="this.parentElement.parentElement.remove()" style="background: white; color: #667eea; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-weight: 600;">¡Excelente!</button>
    </div>
  `;
  
  document.body.appendChild(notification);
}

// ====================================
// PERSISTENCIA
// ====================================

function saveToSession() {
  const tema = getActiveTema();
  try {
    sessionStorage.setItem(`tema.${tema}.scoring`, JSON.stringify(systemState));
  } catch (e) {
    console.warn('Error guardando en sesión:', e);
  }
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
  } catch (e) {
    console.warn('Error cargando:', e);
  }
}

// ====================================
// INTEGRACIÓN
// ====================================

function integrateWithMapSystem() {
  const checkSystem = () => {
    if (window.mapaSystemInstance) {
      console.log('🔗 Conectando con mapa...');
      
      const sys = window.mapaSystemInstance;
      
      // Interceptar visitas a nodos
      const origMark = sys.markNodeAsVisited.bind(sys);
      sys.markNodeAsVisited = (node) => {
        origMark(node);
        const prog = sys.getProgress();
        updateMapProgress(prog.visitedNodes.length, prog.totalNodes);
      };
      
      // Interceptar respuestas correctas
      const origCorrect = sys.handleCorrectMatch.bind(sys);
      sys.handleCorrectMatch = (card) => {
        origCorrect(card);
        const stats = sys.getGameStats();
        updateGameProgress(stats.correctCount, stats.totalPairs);
      };
      
      // Interceptar inicio de juego
      const origInit = sys.initGame.bind(sys);
      sys.initGame = () => {
        if (isGameUnlocked()) {
          origInit();
        } else {
          showGameLockedMessage();
        }
      };
      
      // Estado inicial
      const initProg = sys.getProgress();
      if (initProg) {
        updateMapProgress(initProg.visitedNodes.length, initProg.totalNodes);
      }
      
      console.log('✅ Integración completa');
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
  console.log('Config:', SCORING_CONFIG);
  console.log('Usuario:', auth.currentUser?.email);
  console.log('Tema:', getActiveTema());
};

window.forceMapaSave = async () => {
  console.log('🔧 Guardado forzado...');
  const success = await saveToFirebase();
  if (success) showNotification('💾 Guardado', 'Guardado manual exitoso', 'success');
  return success;
};

window.resetScoringSystem = () => {
  console.log('🔄 Reset...');
  systemState = {
    initialized: false,
    startTime: Date.now(),
    map: { visited: 0, total: 0, percentage: 0, completed: false },
    game: { correct: 0, total: 0, percentage: 0, completed: false },
    overallStatus: SCORING_CONFIG.states.LOCKED,
    finalScore: 0,
    lastSave: null,
    autoSaveTimer: null
  };
  sessionStorage.removeItem(`tema.${getActiveTema()}.scoring`);
  updateProgressUI();
  showNotification('🔄 Reset', 'Sistema reiniciado', 'info');
};

window.forceUnlockGame = () => {
  console.log('🔧 Desbloqueando juego...');
  systemState.map.percentage = 1.0;
  systemState.map.completed = true;
  unlockGame();
};

// ====================================
// INICIALIZACIÓN
// ====================================

function initializeScoringSystem() {
  if (systemState.initialized) return;
  
  console.log('\n🚀 Sistema v2.1 iniciando...');
  console.log(`Tema: ${getActiveTema()}`);
  console.log(`Config: Mapa 30% + Juego 70%`);
  console.log(`Requisitos: Mapa 100% + Juego 80%\n`);
  
  createProgressUI();
  loadFromSession();
  integrateWithMapSystem();
  
  auth.onAuthStateChanged((user) => {
    if (user) console.log(`👤 Usuario: ${user.email}`);
  });
  
  systemState.initialized = true;
  console.log('✅ Sistema inicializado');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeScoringSystem);
} else {
  setTimeout(initializeScoringSystem, 500);
}

// Estilos
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
`;
document.head.appendChild(style);

console.log('🎮 Sistema v2.1 cargado');