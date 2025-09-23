// ====================================
// 🎉 PARCHE DE CELEBRACIONES PARA VIDEO + CLOZE
// Agregar después del parche anterior en tema.html
// ====================================

console.log('🎉 Inicializando sistema de celebraciones para Video + Cloze...');

// ====================================
// 🔊 SISTEMA DE SONIDOS PERSONALIZADO
// ====================================

const SOUND_CONFIG = {
  correctAnswer: 'sound/correct_answer.mp3',
  celebration: 'sound/celebration.mp3',
  volume: 0.7, // 70% de volumen
  enabled: true
};

// Función para reproducir sonidos
function playSound(soundPath, volume = SOUND_CONFIG.volume) {
  if (!SOUND_CONFIG.enabled) return;
  
  try {
    const audio = new Audio(soundPath);
    audio.volume = Math.min(Math.max(volume, 0), 1); // Entre 0 y 1
    
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log(`🔊 Sonido reproducido: ${soundPath}`);
        })
        .catch(error => {
          console.warn(`⚠️ No se pudo reproducir ${soundPath}:`, error.message);
        });
    }
  } catch (error) {
    console.warn(`⚠️ Error creando audio ${soundPath}:`, error.message);
  }
}

// Funciones específicas de sonido
const SoundEffects = {
  correctAnswer: () => playSound(SOUND_CONFIG.correctAnswer),
  celebration: () => playSound(SOUND_CONFIG.celebration, 0.8), // Un poco más alto para celebración
  
  // Control de sonidos
  enable: () => { SOUND_CONFIG.enabled = true; console.log('🔊 Sonidos habilitados'); },
  disable: () => { SOUND_CONFIG.enabled = false; console.log('🔇 Sonidos deshabilitados'); },
  setVolume: (vol) => { 
    SOUND_CONFIG.volume = Math.min(Math.max(vol, 0), 1); 
    console.log(`🔊 Volumen configurado: ${Math.round(SOUND_CONFIG.volume * 100)}%`);
  }
};

console.log('🔊 Sistema de sonidos inicializado');
console.log(`📁 Sonidos configurados: ${SOUND_CONFIG.correctAnswer}, ${SOUND_CONFIG.celebration}`);

// ====================================
// 🔧 FALLBACK PARA CELEBRATION.JS CON SONIDOS
// ====================================

// Crear sistema de celebraciones básico si no está disponible
if (typeof window.Celebration === 'undefined') {
  console.log('🎭 Creando sistema de celebraciones fallback con sonidos...');
  
  window.Celebration = {
    show: function(options = {}) {
      const { activity = 'unknown', emojis = ['🎉'], duration = 2000, intensity = 'medium' } = options;
      
      console.log(`🎊 CELEBRACIÓN: ${activity} - ${emojis.join(' ')}`);
      
      // 🔊 REPRODUCIR SONIDOS SEGÚN EL TIPO DE CELEBRACIÓN
      if (activity === 'cloze-item') {
        // Sonido para cada frase completada
        SoundEffects.correctAnswer();
      } else if (activity === 'cloze-complete' || intensity === 'epic' || intensity === 'legendary') {
        // Sonido de celebración para 100% o celebraciones épicas
        SoundEffects.celebration();
      }
      
      // Crear elemento de celebración visual
      const celebrationEl = document.createElement('div');
      celebrationEl.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 20px 30px;
        border-radius: 15px;
        font-size: 24px;
        font-weight: bold;
        z-index: 10000;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        animation: celebrationBounce 0.6s ease-out;
        text-align: center;
        min-width: 200px;
      `;
      
      // Crear animación CSS si no existe
      if (!document.getElementById('celebration-styles')) {
        const styleEl = document.createElement('style');
        styleEl.id = 'celebration-styles';
        styleEl.textContent = `
          @keyframes celebrationBounce {
            0% { transform: translate(-50%, -50%) scale(0.3); opacity: 0; }
            50% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
            100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          }
          @keyframes celebrationFadeOut {
            0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
          }
        `;
        document.head.appendChild(styleEl);
      }
      
      // Contenido basado en intensidad
      let content = '';
      let bgColor = '';
      
      switch (intensity) {
        case 'low':
          content = `${emojis[0]} ¡Bien hecho!`;
          bgColor = 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)';
          break;
        case 'medium':
          content = `${emojis.slice(0, 2).join(' ')} ¡Excelente progreso!`;
          bgColor = 'linear-gradient(135deg, #fd79a8 0%, #e84393 100%)';
          break;
        case 'high':
          content = `${emojis.slice(0, 3).join(' ')}<br>¡Fantástico trabajo!`;
          bgColor = 'linear-gradient(135deg, #fdcb6e 0%, #e17055 100%)';
          break;
        case 'epic':
          content = `${emojis.join(' ')}<br>¡INCREÍBLE!<br>¡Has completado todo!`;
          bgColor = 'linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%)';
          break;
        case 'legendary':
          content = `${emojis.join(' ')}<br>¡LEGENDARIO!<br>¡Maestría total!`;
          bgColor = 'linear-gradient(135deg, #fd79a8 0%, #fdcb6e 50%, #e17055 100%)';
          break;
      }
      
      celebrationEl.style.background = bgColor;
      celebrationEl.innerHTML = content;
      
      // Agregar al DOM
      document.body.appendChild(celebrationEl);
      
      // Animar salida
      setTimeout(() => {
        celebrationEl.style.animation = 'celebrationFadeOut 0.5s ease-in forwards';
        setTimeout(() => {
          if (celebrationEl.parentNode) {
            celebrationEl.parentNode.removeChild(celebrationEl);
          }
        }, 500);
      }, duration);
      
      // Efecto de confetti para celebraciones épicas
      if (intensity === 'epic' || intensity === 'legendary') {
        createConfettiEffect();
      }
    }
  };
  
  // Efecto de confetti simple
  function createConfettiEffect() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd'];
    
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
          position: fixed;
          width: 10px;
          height: 10px;
          background: ${colors[Math.floor(Math.random() * colors.length)]};
          left: ${Math.random() * 100}vw;
          top: -10px;
          z-index: 9999;
          border-radius: 50%;
          animation: confettiFall ${2 + Math.random() * 3}s linear forwards;
        `;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
          if (confetti.parentNode) {
            confetti.parentNode.removeChild(confetti);
          }
        }, 5000);
      }, i * 50);
    }
    
    // Agregar animación de confetti si no existe
    if (!document.getElementById('confetti-animation')) {
      const style = document.createElement('style');
      style.id = 'confetti-animation';
      style.textContent = `
        @keyframes confettiFall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }
  
  console.log('✅ Sistema de celebraciones fallback creado');
}

// ====================================
// 🎯 CELEBRACIONES POR ITEM INDIVIDUAL
// ====================================

let celebratedItems = new Set();
let lastClozePercentage = 0;

// Función para verificar y celebrar ítems individuales
function checkForNewCompletedItems() {
  const tema = sessionStorage.getItem('tema.active') || new URLSearchParams(location.search).get('tema');
  const clozeKey = `tema.${tema}.cloze`;
  
  try {
    const clozeData = JSON.parse(sessionStorage.getItem(clozeKey) || '{}');
    const hits = clozeData.hits || {};
    const currentItems = Object.keys(hits);
    
    // Verificar nuevos ítems completados
    currentItems.forEach(itemId => {
      if (!celebratedItems.has(itemId)) {
        celebratedItems.add(itemId);
        console.log(`🎉 Celebrando item completado: ${itemId}`);
        
        // Celebración micro por item
        window.Celebration.show({
          activity: 'cloze-item',
          topic: tema,
          emojis: ['💡', '✨', '👏'],
          duration: 1500,
          intensity: 'low'
        });
      }
    });
    
    // Calcular porcentaje actual
    const currentPercentage = clozeData.total > 0 ? Math.round((clozeData.solved / clozeData.total) * 100) : 0;
    
    // Celebraciones por porcentaje
    checkPercentageCelebrations(currentPercentage);
    
    lastClozePercentage = currentPercentage;
    
  } catch (error) {
    console.error('❌ Error verificando ítems completados:', error);
  }
}

// ====================================
// 🏆 CELEBRACIONES POR PORCENTAJE
// ====================================

let celebratedPercentages = new Set();

function checkPercentageCelebrations(currentPercentage) {
  const tema = sessionStorage.getItem('tema.active') || new URLSearchParams(location.search).get('tema');
  
  const milestones = [
    { threshold: 25, emojis: ['🌟', '🚀', '💪'], intensity: 'medium', message: '¡Buen inicio!' },
    { threshold: 50, emojis: ['🎯', '⚡', '🔥'], intensity: 'medium', message: '¡A medio camino!' },
    { threshold: 75, emojis: ['🏆', '👑', '💫'], intensity: 'high', message: '¡Casi terminado!' },
    { threshold: 100, emojis: ['🎉', '🏆', '🌟', '👑', '💎'], intensity: 'epic', message: '¡COMPLETADO!' }
  ];
  
  milestones.forEach(({ threshold, emojis, intensity, message }) => {
    if (currentPercentage >= threshold && !celebratedPercentages.has(threshold)) {
      celebratedPercentages.add(threshold);
      
      console.log(`🎊 Celebrando milestone: ${threshold}% - ${message}`);
      
      window.Celebration.show({
        activity: threshold === 100 ? 'cloze-complete' : 'cloze-progress',
        topic: tema,
        emojis: emojis,
        duration: threshold === 100 ? 5000 : 2500,
        intensity: intensity
      });
      
      // Celebración especial para aprobación (≥80%)
      if (threshold >= 80 && !window._clozeApprovalCelebrated) {
        window._clozeApprovalCelebrated = true;
        setTimeout(() => {
          console.log('🎓 ¡ACTIVIDAD APROBADA! (Cloze ≥80%)');
          window.Celebration.show({
            activity: 'video-approved',
            topic: tema,
            emojis: ['🎓', '✅', '🏆', '🌟', '💪'],
            duration: 4000,
            intensity: 'high'
          });
        }, 1500);
      }
    }
  });
}

// ====================================
// 🔄 MONITOREO AUTOMÁTICO DE CAMBIOS
// ====================================

// Observador de cambios en sessionStorage
let storageCheckInterval = null;

function startClozeMonitoring() {
  if (storageCheckInterval) return;
  
  console.log('👁️ Iniciando monitoreo de progreso cloze...');
  
  // Verificar cada 2 segundos
  storageCheckInterval = setInterval(() => {
    checkForNewCompletedItems();
  }, 2000);
}

function stopClozeMonitoring() {
  if (storageCheckInterval) {
    console.log('⏹️ Deteniendo monitoreo de progreso cloze');
    clearInterval(storageCheckInterval);
    storageCheckInterval = null;
  }
}

// ====================================
// 🎬 INTEGRACIÓN CON MODAL DE VIDEO
// ====================================

// Monitorear cuando se abre/cierra el modal de video
function setupVideoModalCelebrations() {
  const videoBackdrop = document.getElementById('videoBackdrop');
  if (!videoBackdrop) return;
  
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'style') {
        const isVisible = videoBackdrop.style.display !== 'none';
        
        if (isVisible) {
          startClozeMonitoring();
        } else {
          stopClozeMonitoring();
          
          // Celebración final si se completó todo al cerrar
          setTimeout(() => {
            const progress = getCurrentVideoClozeProgress();
            if (progress && progress.totalCompleted && !window._videoCompleteCelebrated) {
              window._videoCompleteCelebrated = true;
              console.log('👑 ¡VIDEO + CLOZE COMPLETADOS!');
              window.Celebration.show({
                activity: 'video-cloze-complete',
                topic: sessionStorage.getItem('tema.active'),
                emojis: ['👑', '🏆', '🎉', '🌟', '💎', '🚀'],
                duration: 7000,
                intensity: 'legendary'
              });
            }
          }, 1000);
        }
      }
    });
  });
  
  observer.observe(videoBackdrop, { attributes: true });
  console.log('🎬 Monitoreo de modal de video configurado');
}

// ====================================
// 🔧 INTERCEPTOR DE RENDERIZADO DE CLOZE
// ====================================

// Interceptar cuando se actualiza la UI del cloze para celebrar inmediatamente
const originalUpdateClozeProgress = window.updateClozeProgress;
if (typeof originalUpdateClozeProgress === 'function') {
  window.updateClozeProgress = function() {
    originalUpdateClozeProgress();
    
    // Verificar celebraciones inmediatamente después de actualizar
    setTimeout(() => {
      checkForNewCompletedItems();
    }, 100);
  };
}

// ====================================
// 🚀 INICIALIZACIÓN DE CELEBRACIONES
// ====================================

function initializeCelebrationSystem() {
  console.log('🎉 Inicializando sistema de celebraciones...');
  
  // Configurar monitoreo de modal
  setupVideoModalCelebrations();
  
  // Leer estado inicial para evitar celebraciones duplicadas
  const tema = sessionStorage.getItem('tema.active') || new URLSearchParams(location.search).get('tema');
  const clozeKey = `tema.${tema}.cloze`;
  
  try {
    const clozeData = JSON.parse(sessionStorage.getItem(clozeKey) || '{}');
    const hits = clozeData.hits || {};
    const currentPercentage = clozeData.total > 0 ? Math.round((clozeData.solved / clozeData.total) * 100) : 0;
    
    // Marcar ítems ya completados para evitar celebraciones duplicadas
    Object.keys(hits).forEach(itemId => celebratedItems.add(itemId));
    
    // Marcar porcentajes ya alcanzados
    [25, 50, 75].forEach(threshold => {
      if (currentPercentage >= threshold) {
        celebratedPercentages.add(threshold);
      }
    });
    
    // Si ya está al 100%, marcar celebración de 100% como completada
    if (currentPercentage >= 100) {
      celebratedPercentages.add(100);
    }
    
    // Si ya está aprobado, marcar celebración de aprobación
    if (currentPercentage >= 80) {
      window._clozeApprovalCelebrated = true;
    }
    
    lastClozePercentage = currentPercentage;
    
    console.log(`📊 Estado inicial: ${currentPercentage}%, ${Object.keys(hits).length} ítems completados`);
    
  } catch (error) {
    console.error('❌ Error leyendo estado inicial:', error);
  }
  
  console.log('✅ Sistema de celebraciones inicializado');
}

// ====================================
// 🔍 FUNCIONES DE DEBUG CON SONIDOS
// ====================================

window.testCelebrations = function() {
  console.log('🧪 Probando sistema de celebraciones con sonidos...');
  
  const tests = [
    { emojis: ['💡'], intensity: 'low', activity: 'cloze-item', name: 'Item completado' },
    { emojis: ['🎯', '⚡'], intensity: 'medium', activity: 'test-medium', name: 'Progreso medio' },
    { emojis: ['🏆', '👑', '💫'], intensity: 'high', activity: 'test-high', name: 'Progreso alto' },
    { emojis: ['🎉', '🏆', '🌟', '👑', '💎'], intensity: 'epic', activity: 'cloze-complete', name: 'Completado 100%' }
  ];
  
  tests.forEach((test, index) => {
    setTimeout(() => {
      console.log(`🎭 Probando: ${test.name}`);
      window.Celebration.show(test);
    }, index * 3000);
  });
};

window.testSounds = function() {
  console.log('🔊 Probando sonidos...');
  
  console.log('🎵 Reproduciendo sonido de respuesta correcta...');
  SoundEffects.correctAnswer();
  
  setTimeout(() => {
    console.log('🎉 Reproduciendo sonido de celebración...');
    SoundEffects.celebration();
  }, 2000);
};

window.soundControls = {
  enable: SoundEffects.enable,
  disable: SoundEffects.disable,
  setVolume: SoundEffects.setVolume,
  test: window.testSounds,
  
  // Configuración rápida
  quiet: () => SoundEffects.setVolume(0.3),
  normal: () => SoundEffects.setVolume(0.7),
  loud: () => SoundEffects.setVolume(1.0)
};

window.resetCelebrations = function() {
  celebratedItems.clear();
  celebratedPercentages.clear();
  lastClozePercentage = 0;
  window._clozeApprovalCelebrated = false;
  window._videoCompleteCelebrated = false;
  console.log('🗑️ Estados de celebración reseteados');
};

window.debugCelebrations = function() {
  console.log('🔍 === DEBUG CELEBRACIONES ===');
  console.log('🎭 Celebration disponible:', typeof window.Celebration);
  console.log('🔊 Sonidos habilitados:', SOUND_CONFIG.enabled);
  console.log('🔊 Volumen actual:', Math.round(SOUND_CONFIG.volume * 100) + '%');
  console.log('🎯 Ítems celebrados:', Array.from(celebratedItems));
  console.log('📊 Porcentajes celebrados:', Array.from(celebratedPercentages));
  console.log('🎓 Aprobación celebrada:', !!window._clozeApprovalCelebrated);
  console.log('👑 Completado celebrado:', !!window._videoCompleteCelebrated);
  console.log('📈 Último porcentage:', lastClozePercentage);
  console.log('👁️ Monitoreo activo:', !!storageCheckInterval);
  console.log('');
  console.log('🔧 Controles de sonido disponibles:');
  console.log('   soundControls.enable() / disable()');
  console.log('   soundControls.setVolume(0.0-1.0)');
  console.log('   soundControls.quiet() / normal() / loud()');
  console.log('   soundControls.test()');
};

// ====================================
// 🚀 AUTO-INICIALIZACIÓN
// ====================================

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initializeCelebrationSystem, 500);
  });
} else {
  setTimeout(initializeCelebrationSystem, 500);
}

console.log('🎉 Sistema de celebraciones con sonidos para Video + Cloze cargado');
console.log('🔊 Sonidos integrados:');
console.log(`   📁 Respuesta correcta: ${SOUND_CONFIG.correctAnswer}`);
console.log(`   📁 Celebración final: ${SOUND_CONFIG.celebration}`);
console.log('🔧 Funciones de debug disponibles:');
console.log('   - testCelebrations() - Probar celebraciones completas');
console.log('   - testSounds() - Probar solo sonidos');
console.log('   - soundControls.enable/disable() - Control de sonidos');
console.log('   - soundControls.setVolume(0.0-1.0) - Ajustar volumen');
console.log('   - debugCelebrations() - Información completa');
