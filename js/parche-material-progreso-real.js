// ====================================
// 🔧 PARCHE CRÍTICO: MATERIAL DE LECTURA
// Archivo: parche-material-progreso-real.js
// 
// PROBLEMA RESUELTO:
// - ❌ Antes: Sumaba progreso solo con abrir content.html
// - ✅ Ahora: Solo suma cuando se completa REALMENTE una sección
//
// AGREGAR ESTE SCRIPT AL FINAL DE tema.html
// ====================================

console.log('🔧 === PARCHE DE MATERIAL DE LECTURA INICIADO ===');

(function() {
  'use strict';

  const tema = sessionStorage.getItem('tema.active') || new URLSearchParams(location.search).get('tema');
  
  if (!tema) {
    console.error('❌ No se pudo determinar el tema activo');
    return;
  }

  console.log(`📚 Configurando sistema de progreso real para: ${tema}`);

  // ====================================
  // 🎯 CONFIGURACIÓN
  // ====================================

  // Helpers para unificar la clave
function normalizeToSnake(s) {
  return (s || '')
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .trim()
    .replace(/\s+/g, '_');
}

const MODULE_MAP = {
  utilitarismo: 'utilitarismo_de_stuart_mill',
  // agrega otros mapeos si tus moduleId reales difieren del "tema"
};

function getTemaFromUrl() {
  return new URLSearchParams(location.search).get('tema') || '';
}

function getModuleId() {
  const temaFromUrl = getTemaFromUrl();                // URL PRIMERO
  const temaNorm    = normalizeToSnake(temaFromUrl);
  return sessionStorage.getItem('tema.moduleId') ||
         window.ACTIVE_MODULE_ID ||
         MODULE_MAP[temaNorm] || temaNorm;
}

function getMaterialKey() {
  return `tema.${getModuleId()}.material`;
}

// En tu MATERIAL_CONFIG:
const MATERIAL_CONFIG = {
  TOTAL_SECTIONS: 8,
  STORAGE_KEY: getMaterialKey(),     // ← ya NO uses `tema.${tema}.material`
  MIN_READING_TIME: 5000,
  DEBUG: true
};


  // ====================================
  // 📊 FUNCIONES DE ESTADO
  // ====================================

  function readMaterialState() {
    try {
      const stored = sessionStorage.getItem(MATERIAL_CONFIG.STORAGE_KEY);
      if (!stored) {
        return {
          sectionsViewed: [],
          total: MATERIAL_CONFIG.TOTAL_SECTIONS,
          completed: false,
          percentage: 0,
          lastUpdated: null,
          syncedWithFirebase: false,
          readingSystemUsed: false
        };
      }
      return JSON.parse(stored);
    } catch (error) {
      console.error('❌ Error leyendo estado:', error);
      return {
        sectionsViewed: [],
        total: MATERIAL_CONFIG.TOTAL_SECTIONS,
        completed: false,
        percentage: 0
      };
    }
  }

  function saveMaterialState(state) {
    try {
      sessionStorage.setItem(MATERIAL_CONFIG.STORAGE_KEY, JSON.stringify(state));
      if (MATERIAL_CONFIG.DEBUG) {
        console.log('💾 Estado guardado:', state);
      }
    } catch (error) {
      console.error('❌ Error guardando estado:', error);
    }
  }

  // ====================================
  // 🔄 FUNCIÓN CORREGIDA: bumpMaterialProgress
  // ====================================

  const originalBumpMaterialProgress = window.bumpMaterialProgress;

  /**
   * NUEVA VERSIÓN: Solo incrementa cuando se pasa el índice de sección real
   * @param {number} completedSectionIndex - Índice de la sección completada (0-based)
   */
  window.bumpMaterialProgress = function(completedSectionIndex) {
    if (completedSectionIndex === undefined || completedSectionIndex < 0) {
      console.warn('⚠️ bumpMaterialProgress llamado sin índice válido');
      return;
    }

    const currentState = readMaterialState();
    const sectionId = `s${completedSectionIndex}`;

    // Verificar si ya estaba completada
    if (currentState.sectionsViewed.includes(sectionId)) {
      if (MATERIAL_CONFIG.DEBUG) {
        console.log(`ℹ️ Sección ${completedSectionIndex} ya estaba completada, ignorando`);
      }
      return;
    }

    // Agregar nueva sección
    currentState.sectionsViewed.push(sectionId);
    currentState.sectionsViewed.sort(); // Mantener orden
    currentState.percentage = Math.round((currentState.sectionsViewed.length / currentState.total) * 100);
    currentState.completed = currentState.sectionsViewed.length >= currentState.total;
    currentState.lastUpdated = new Date().toISOString();
    currentState.readingSystemUsed = true;

    saveMaterialState(currentState);

    console.log(`✅ Sección ${completedSectionIndex} completada (${currentState.sectionsViewed.length}/${currentState.total})`);

    // Guardar en Firebase
    setTimeout(() => {
      saveToFirebase(currentState);
    }, 500);

    // Actualizar UI
    if (typeof window.renderProgressUI === 'function') {
      window.renderProgressUI();
    }
  };

  // ====================================
  // 💾 GUARDADO EN FIREBASE
  // ====================================

  async function saveToFirebase(state) {
    if (typeof window.saveMaterialProgress !== 'function') {
      console.warn('⚠️ saveMaterialProgress no disponible');
      return false;
    }

    const sectionsCompleted = state.sectionsViewed.length;
    const totalSections = state.total;
    const timeSpent = sectionsCompleted * 120; // 2 min por sección

    console.log(`🔥 Guardando en Firebase: ${sectionsCompleted}/${totalSections} (${state.percentage}%)`);

    try {
      const success = await window.saveMaterialProgress(
        sectionsCompleted,
        totalSections,
        timeSpent
      );

      if (success) {
        state.syncedWithFirebase = true;
        state.lastSync = new Date().toISOString();
        saveMaterialState(state);
        console.log('✅ Guardado en Firebase exitoso');
      } else {
        console.log('ℹ️ Guardado omitido (no supera progreso anterior)');
      }

      return success;
    } catch (error) {
      console.error('❌ Error guardando en Firebase:', error);
      return false;
    }
  }

  // ====================================
  // 📡 SISTEMA DE COMUNICACIÓN CON IFRAME
  // ====================================

  let currentIframe = null;
  const sectionStartTimes = new Map();

  function setupIframeCommunication(iframe) {
    currentIframe = iframe;

    console.log('📡 Configurando comunicación con iframe...');

    // Listener para mensajes del iframe
    window.addEventListener('message', handleIframeMessage);

    // Inyectar script de comunicación en el iframe
    iframe.addEventListener('load', () => {
      try {
        injectCommunicationScript(iframe);
      } catch (error) {
        console.warn('⚠️ No se pudo inyectar script (CORS):', error.message);
        console.log('ℹ️ Usando método alternativo de detección...');
        setupFallbackDetection(iframe);
      }
    });
  }

  function handleIframeMessage(event) {
    // Validar origen si es necesario
    // if (event.origin !== window.location.origin) return;

    const data = event.data;

    if (MATERIAL_CONFIG.DEBUG) {
      console.log('📨 Mensaje recibido del iframe:', data);
    }

    switch (data.type) {
      case 'SECTION_STARTED':
        handleSectionStarted(data.sectionIndex);
        break;

      case 'SECTION_COMPLETED':
        handleSectionCompleted(data.sectionIndex);
        break;

      case 'READING_COMPLETED':
        handleReadingCompleted(data.sectionIndex);
        break;

      case 'QUESTION_ANSWERED':
        handleQuestionAnswered(data.sectionIndex, data.correct);
        break;

      case 'ALL_SECTIONS_COMPLETED':
        handleAllSectionsCompleted();
        break;
    }
  }

  function handleSectionStarted(sectionIndex) {
    sectionStartTimes.set(sectionIndex, Date.now());
    console.log(`▶️ Sección ${sectionIndex} iniciada`);
  }

  function handleReadingCompleted(sectionIndex) {
    const startTime = sectionStartTimes.get(sectionIndex);
    if (startTime) {
      const timeSpent = Date.now() - startTime;
      if (timeSpent < MATERIAL_CONFIG.MIN_READING_TIME) {
        console.warn(`⚠️ Lectura muy rápida en sección ${sectionIndex}: ${timeSpent}ms`);
        // Podríamos rechazar esto como posible trampa
        return;
      }
    }
    console.log(`📖 Lectura completada: Sección ${sectionIndex}`);
  }

  function handleQuestionAnswered(sectionIndex, correct) {
    console.log(`❓ Pregunta respondida: Sección ${sectionIndex}, Correcta: ${correct}`);
  }

  function handleSectionCompleted(sectionIndex) {
    console.log(`✅ Sección ${sectionIndex} completada completamente`);
    
    // AQUÍ ES DONDE REALMENTE INCREMENTAMOS EL PROGRESO
    window.bumpMaterialProgress(sectionIndex);
  }

  function handleAllSectionsCompleted() {
    console.log('🎉 ¡TODAS LAS SECCIONES COMPLETADAS!');
    
    const state = readMaterialState();
    state.completed = true;
    state.percentage = 100;
    saveMaterialState(state);
    
    saveToFirebase(state);
    
    if (typeof window.renderProgressUI === 'function') {
      window.renderProgressUI();
    }
  }

  // ====================================
  // 💉 INYECCIÓN DE SCRIPT EN IFRAME
  // ====================================

  function injectCommunicationScript(iframe) {
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    
    const script = iframeDoc.createElement('script');
    script.textContent = `
      (function() {
        console.log('📡 Script de comunicación inyectado en content.html');

        // Función para enviar mensajes al padre
        function notifyParent(type, data = {}) {
          window.parent.postMessage({
            type: type,
            ...data,
            timestamp: Date.now()
          }, '*');
        }

        // Hook en el sistema ReadAloud
        if (window.ReadAloudSystemModular) {
          const originalInitialize = window.ReadAloudSystemModular.prototype.initializeSystem;
          
          window.ReadAloudSystemModular.prototype.initializeSystem = function() {
            const result = originalInitialize.call(this);
            
            console.log('🎤 ReadAloud System inicializado, configurando hooks...');
            
            // Hook onSectionCompleted
            const originalOnSectionCompleted = this.onSectionCompleted.bind(this);
            this.onSectionCompleted = function() {
              console.log('✅ onSectionCompleted llamado');
              notifyParent('SECTION_COMPLETED', { 
                sectionIndex: this.completedSections.size 
              });
              return originalOnSectionCompleted();
            };

            // Hook onAllSectionsCompleted
            const originalOnAllCompleted = this.onAllSectionsCompleted.bind(this);
            this.onAllSectionsCompleted = function() {
              console.log('🎉 onAllSectionsCompleted llamado');
              notifyParent('ALL_SECTIONS_COMPLETED');
              return originalOnAllCompleted();
            };

            return result;
          };
        }

        // Listener para clics en opciones de comprensión
        document.addEventListener('click', function(e) {
          const option = e.target.closest('.option');
          if (option) {
            const isCorrect = option.dataset.correct === 'true';
            const section = option.closest('.study-section');
            const sectionIndex = Array.from(document.querySelectorAll('.study-section')).indexOf(section);
            
            notifyParent('QUESTION_ANSWERED', {
              sectionIndex: sectionIndex,
              correct: isCorrect
            });
          }
        }, true);

        console.log('✅ Hooks configurados en content.html');
      })();
    `;
    
    iframeDoc.head.appendChild(script);
    console.log('✅ Script de comunicación inyectado');
  }

  // ====================================
  // 🔄 MÉTODO ALTERNATIVO (FALLBACK)
  // ====================================

  function setupFallbackDetection(iframe) {
    console.log('🔄 Configurando detección alternativa...');

    // Observar cambios en las clases de secciones
    const observer = new MutationObserver(() => {
      try {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        if (!iframeDoc) return;

        const completedSections = iframeDoc.querySelectorAll('.study-section.completed-section');
        const currentState = readMaterialState();
        
        completedSections.forEach((section, index) => {
          const sectionId = `s${index}`;
          if (!currentState.sectionsViewed.includes(sectionId)) {
            console.log(`✅ Detectada sección completada: ${index}`);
            window.bumpMaterialProgress(index);
          }
        });
      } catch (error) {
        // Silenciar errores de CORS
      }
    });

    // Observar el iframe
    const checkAndObserve = () => {
      try {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        if (iframeDoc && iframeDoc.body) {
          observer.observe(iframeDoc.body, {
            attributes: true,
            attributeFilter: ['class'],
            subtree: true
          });
          console.log('✅ Observer configurado en iframe');
        } else {
          setTimeout(checkAndObserve, 500);
        }
      } catch (error) {
        console.warn('⚠️ No se pudo configurar observer:', error.message);
      }
    };

    checkAndObserve();
  }

  // ====================================
  // 🔧 OVERRIDE DE openMaterialSheet
  // ====================================

  const originalOpenMaterialSheet = window.openMaterialSheet;

  window.openMaterialSheet = function() {
    console.log('📖 Abriendo material de lectura...');

    // Llamar función original
    if (originalOpenMaterialSheet) {
      originalOpenMaterialSheet();
    } else {
      // Implementación si no existe
      const sheetBackdrop = document.getElementById('sheetBackdrop');
      const sheetBody = document.getElementById('sheetBody');
      
      sheetBackdrop.style.display = 'block';
      document.body.style.overflow = 'hidden';

      const contentPath = `themes/${tema}/content.html`;
      const url = new URL(contentPath, location);

      sheetBody.innerHTML = '';
      const iframe = document.createElement('iframe');
      iframe.className = 'sheet-iframe';
      iframe.src = url.toString();
      iframe.loading = 'lazy';
      
      sheetBody.appendChild(iframe);

      // Configurar comunicación
      setupIframeCommunication(iframe);
    }

    // NO incrementar progreso aquí - esperar señales reales
    console.log('ℹ️ Esperando completación real de secciones...');
  };

  // ====================================
  // 🛠️ FUNCIONES DE UTILIDAD Y DEBUG
  // ====================================

  window.checkMaterialReadingStatus = function() {
    console.log('📊 === ESTADO DEL MATERIAL DE LECTURA ===');
    
    const state = readMaterialState();
    
    console.log(`📚 Tema: ${tema}`);
    console.log(`✅ Secciones completadas: ${state.sectionsViewed.length}/${state.total}`);
    console.log(`📊 Porcentaje: ${state.percentage}%`);
    console.log(`🎯 Completado: ${state.completed ? 'SÍ' : 'NO'}`);
    console.log(`🔥 Sincronizado con Firebase: ${state.syncedWithFirebase ? 'SÍ' : 'NO'}`);
    console.log(`📖 Sistema de lectura usado: ${state.readingSystemUsed ? 'SÍ' : 'NO'}`);
    console.log(`🕐 Última actualización: ${state.lastUpdated || 'Nunca'}`);
    console.log(`📝 Secciones: ${state.sectionsViewed.join(', ') || 'Ninguna'}`);
    
    return state;
  };

  window.forceSyncMaterialReading = async function() {
    console.log('🔄 Forzando sincronización...');
    const state = readMaterialState();
    if (state.sectionsViewed.length > 0) {
      const success = await saveToFirebase(state);
      console.log(success ? '✅ Sincronización exitosa' : '❌ Error en sincronización');
      return success;
    }
    console.log('ℹ️ No hay progreso para sincronizar');
    return true;
  };

  window.resetMaterialProgress = function() {
    if (!confirm('¿Seguro que quieres resetear el progreso del material de lectura?')) {
      return;
    }
    
    sessionStorage.removeItem(MATERIAL_CONFIG.STORAGE_KEY);
    console.log('🗑️ Progreso reseteado');
    
    if (typeof window.renderProgressUI === 'function') {
      window.renderProgressUI();
    }
  };

  window.simulateMaterialProgress = function(sectionsToComplete = 3) {
    console.log(`🎭 Simulando ${sectionsToComplete} secciones completadas...`);
    
    for (let i = 0; i < sectionsToComplete; i++) {
      setTimeout(() => {
        window.bumpMaterialProgress(i);
      }, i * 500);
    }
  };

  // ====================================
  // 🎯 CARGAR PROGRESO INICIAL
  // ====================================

  function loadInitialProgress() {
    const state = readMaterialState();
    
    if (state.sectionsViewed.length > 0) {
      console.log(`📊 Progreso existente cargado: ${state.percentage}%`);
    } else {
      console.log('📝 Iniciando sin progreso previo');
    }
    
    // Actualizar UI con el progreso real
    if (typeof window.renderProgressUI === 'function') {
      window.renderProgressUI();
    }
  }

  // ====================================
  // 🚀 INICIALIZACIÓN
  // ====================================

  function initialize() {
    console.log('🚀 Inicializando parche de material de lectura...');
    
    loadInitialProgress();
    
    console.log('✅ Parche inicializado correctamente');
    console.log('📋 Funciones disponibles:');
    console.log('   - checkMaterialReadingStatus()');
    console.log('   - forceSyncMaterialReading()');
    console.log('   - resetMaterialProgress()');
    console.log('   - simulateMaterialProgress(n)');



// ====== HIDRATACIÓN ROBUSTA DESDE SESSION/FIREBASE ======
// ====== HIDRATACIÓN FILTRADA AL TEMA ACTUAL ======
(function hydrateMaterialForCurrentTopic() {
  let tries = 0;
  const MAX_TRIES = 60;   // ~30s
  const POLL_MS   = 500;

  function readJSON(k){ try{ return JSON.parse(sessionStorage.getItem(k) || 'null'); }catch{return null;} }
  function writeJSON(k,v){ sessionStorage.setItem(k, JSON.stringify(v)); }

  function getTemaFromUrl() {
    return new URLSearchParams(location.search).get('tema') || '';
  }
  function normalizeToSnake(s) {
    return (s || '').toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s]/g, ' ')
      .trim().replace(/\s+/g, '_');
  }
  const MAP = { utilitarismo: 'utilitarismo_de_stuart_mill' };

  function getModuleId() {
    const temaFromUrl = getTemaFromUrl();
    const temaNorm    = normalizeToSnake(temaFromUrl);
    return sessionStorage.getItem('tema.moduleId') ||
           window.ACTIVE_MODULE_ID ||
           MAP[temaNorm] || temaNorm;
  }

  function buildSectionsFromPct(pct, total) {
    const c = Math.max(0, Math.min(total, Math.round((pct / 100) * total)));
    const arr = []; for (let i=0;i<c;i++) arr.push(`s${i}`);
    return arr;
  }

  function extractPct(obj, keyName) {
    if (!obj || typeof obj !== 'object') return null;

    // material.{percentage|score|total}
    if (obj.material && typeof obj.material === 'object') {
      const m = obj.material;
      const pct =
        (Number.isFinite(m.percentage) && m.percentage) ||
        (Number.isFinite(m.score) && m.score) || null;
      if (pct != null) {
        const tot =
          (Number.isFinite(m.total) && m.total) ||
          (Number.isFinite(obj.total) && obj.total) || null;
        return { pct, total: tot, source: `${keyName}#material` };
      }
    }

    // top-level {percentage|score|total} — lo aceptamos SOLO si la clave sugiere material
    const looksLikeMaterial = /\.material$/.test(keyName) || /(^|[\.\-_])material($|[\.\-_])/i.test(keyName);
    const pctTop =
      (Number.isFinite(obj.percentage) && obj.percentage) ||
      (Number.isFinite(obj.score) && obj.score) || null;
    if (pctTop != null && looksLikeMaterial) {
      const tot =
        (Number.isFinite(obj.total) && obj.total) ||
        (obj.material && Number.isFinite(obj.material.total) && obj.material.total) || null;
      return { pct: pctTop, total: tot, source: `${keyName}#top-material` };
    }
    return null;
  }

  const timer = setInterval(() => {
    tries++;

    const temaFromUrl = getTemaFromUrl();
    const moduleId    = getModuleId();

    const allowedPrefixes = [
      `tema.${moduleId}.`,
      `tema.${temaFromUrl}.`
    ];

    const materialKey   = `tema.${moduleId}.material`;
    const current       = readJSON(materialKey) || { sectionsViewed: [], total: 8, completed: false };
    const currentPct    = Number.isFinite(current.percentage) ? current.percentage : 0;
    const currentTotal  = Number.isFinite(current.total) && current.total > 0 ? current.total : 8;

    let best = null;

    for (let i=0;i<sessionStorage.length;i++){
      const k = sessionStorage.key(i);
      // ✅ FILTRO ESTRICTO: solo claves del tema actual
      if (!allowedPrefixes.some(p => k.startsWith(p))) continue;

      const v = readJSON(k);
      if (!v) continue;

      const info = extractPct(v, k);
      if (!info) continue;

      const pri =
        k.startsWith(`tema.${moduleId}.`) ? 2 :
        k.startsWith(`tema.${temaFromUrl}.`) ? 1 : 0;

      if (!best || pri > best.pri || (pri === best.pri && info.pct > best.pct)) {
        best = {
          key: k,
          pri,
          pct: info.pct,
          total: info.total,
          source: info.source
        };
      }
    }

    if (best && best.pct > currentPct) {
      const total = Number.isFinite(best.total) && best.total > 0 ? best.total : currentTotal;

      // Anti-ruido: si total parece desfasado (ej. 10 cuando tu config tiene 8),
      // preferimos el mayor entre currentTotal y best.total para no clavar 100% falsos.
      const safeTotal = Math.max(currentTotal, total);

      const sectionsViewed = buildSectionsFromPct(best.pct, safeTotal);
      const updated = {
        ...current,
        total: safeTotal,
        sectionsViewed,
        percentage: Math.round((sectionsViewed.length / safeTotal) * 100),
        completed: sectionsViewed.length >= safeTotal,
        lastUpdated: new Date().toISOString(),
        readingSystemUsed: true,
        syncedFromFirebase: true
      };

      writeJSON(materialKey, updated);

      // Espejo para UI vieja del tema actual (NO de otros temas)
      const oldKey = `tema.${temaFromUrl}.material`;
      const oldVal = sessionStorage.getItem(oldKey);
      if (!oldVal) writeJSON(oldKey, updated);

      console.log(`💧 Hidratado material desde "${best.source}": ${updated.percentage}% (${sectionsViewed.length}/${safeTotal}) → ${materialKey}`);
      if (typeof window.renderProgressUI === 'function') {
        try { window.renderProgressUI(); } catch {}
      }
      clearInterval(timer);
      return;
    }

    if (tries >= MAX_TRIES) {
      clearInterval(timer);
      console.warn('⏹️ Hidratación: no se halló progreso propio del tema a tiempo.');
    }
  }, POLL_MS);
})();



    // hasta aqui hidratacion
  }

  // Auto-inicialización
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }

  console.log('✅ Parche de Material de Lectura cargado');

})();

// ====================================
// 📝 INSTRUCCIONES DE USO
// ====================================

console.log(`
╔════════════════════════════════════════════╗
║   PARCHE DE MATERIAL DE LECTURA ACTIVO    ║
╠════════════════════════════════════════════╣
║                                            ║
║  ✅ PROBLEMA RESUELTO:                     ║
║  - Ya NO suma progreso al abrir            ║
║  - Solo suma con secciones REALMENTE       ║
║    completadas (lectura + pregunta)        ║
║  - Valida tiempo mínimo de lectura         ║
║  - Previene retrocesos en Firebase         ║
║                                            ║
║  🔧 FUNCIONES DE DEBUG:                    ║
║  checkMaterialReadingStatus()              ║
║  forceSyncMaterialReading()                ║
║  resetMaterialProgress()                   ║
║  simulateMaterialProgress(n)               ║
║                                            ║
╚════════════════════════════════════════════╝
`);