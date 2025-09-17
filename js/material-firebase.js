// material-firebase.js
// Sistema de integración Firebase para material de lectura
// Versión: 1.0
// Uso: <script type="module" src="../../js/material-firebase.js"></script>

console.log('📖 Cargando sistema de integración Material + Firebase...');

// ====================================
// CONFIGURACIÓN E INICIALIZACIÓN
// ====================================

class MaterialFirebaseIntegration {
  constructor() {
    this.config = null;
    this.tema = null;
    this.totalSections = 0;
    this.autoSaveInterval = null;
    this.isInitialized = false;
    
    this.init();
  }
  
  async init() {
    // Esperar a que el DOM y la configuración estén listos
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initializeSystem());
    } else {
      await this.initializeSystem();
    }
  }
  
  async initializeSystem() {
    try {
      // Obtener configuración
      this.loadConfiguration();
      
      // Esperar a que Firebase esté disponible
      await this.waitForFirebase();
      
      // Configurar sistema
      this.setupSystem();
      
      this.isInitialized = true;
      console.log('✅ MaterialFirebaseIntegration inicializado correctamente');
      
    } catch (error) {
      console.error('❌ Error inicializando MaterialFirebaseIntegration:', error);
    }
  }
  
  loadConfiguration() {
    // Cargar configuración del sistema ReadAloud
    this.config = window.ReadAloudSystemConfig || {};
    
    // Detectar tema
    this.tema = this.config.tema || 
                new URLSearchParams(window.location.search).get('tema') ||
                'filosofia';
    
    // Detectar número total de secciones
    this.totalSections = this.config.sections || 
                        document.querySelectorAll('.study-section').length || 
                        14;
    
    console.log(`🎯 Configuración cargada: ${this.tema} | ${this.totalSections} secciones`);
  }
  
  async waitForFirebase() {
    // Esperar hasta 15 segundos por las funciones de Firebase
    const maxWaitTime = 15000;
    const checkInterval = 500;
    let waitedTime = 0;
    
    while (waitedTime < maxWaitTime) {
      if (typeof window.saveMaterialProgress === 'function') {
        console.log('✅ Funciones de Firebase disponibles');
        return true;
      }
      
      await new Promise(resolve => setTimeout(resolve, checkInterval));
      waitedTime += checkInterval;
    }
    
    console.warn('⚠️ Funciones de Firebase no disponibles después de 15s');
    return false;
  }
  
  setupSystem() {
    // Mejorar sistema ReadAloud existente
    this.enhanceReadAloudSystem();
    
    // Configurar auto-guardado
    this.startAutoSave();
    
    // Configurar eventos de página
    this.setupPageEvents();
    
    // Sincronizar progreso inicial
    this.syncInitialProgress();
    
    // Exponer funciones globales
    this.exposeGlobalFunctions();
  }

  // ====================================
  // CÁLCULO DE PROGRESO
  // ====================================
  
  getCurrentProgress() {
    try {
      // Intentar obtener del sistema ReadAloud activo
      if (window.readAloudSystemInstance) {
        const completed = window.readAloudSystemInstance.completedSections?.size || 0;
        const total = window.readAloudSystemInstance.sections?.length || this.totalSections;
        
        return {
          sectionsCompleted: completed,
          totalSections: total,
          percentage: Math.round((completed / total) * 100),
          isFullyCompleted: completed >= total
        };
      }
      
      // Fallback: contar secciones completadas en DOM
      const completedSections = document.querySelectorAll('.study-section.completed-section').length;
      const allSections = document.querySelectorAll('.study-section').length || this.totalSections;
      
      return {
        sectionsCompleted: completedSections,
        totalSections: allSections,
        percentage: Math.round((completedSections / allSections) * 100),
        isFullyCompleted: completedSections >= allSections
      };
      
    } catch (error) {
      console.warn('⚠️ Error calculando progreso:', error);
      return {
        sectionsCompleted: 0,
        totalSections: this.totalSections,
        percentage: 0,
        isFullyCompleted: false
      };
    }
  }
  
  async saveProgressToFirebase() {
    if (typeof window.saveMaterialProgress !== 'function') {
      console.warn('⚠️ Función saveMaterialProgress no disponible');
      return false;
    }
    
    const progress = this.getCurrentProgress();
    const estimatedTimeSpent = progress.sectionsCompleted * 120; // 2 min por sección
    
    try {
      console.log(`💾 Guardando material: ${progress.percentage}% (${progress.sectionsCompleted}/${progress.totalSections})`);
      
      const success = await window.saveMaterialProgress(
        progress.sectionsCompleted,
        progress.totalSections,
        estimatedTimeSpent
      );
      
      if (success) {
        this.updateLocalStorage(progress, estimatedTimeSpent);
        console.log(`✅ Material guardado: ${progress.percentage}%`);
        
        // Forzar sincronización de UI
        if (typeof window.forceSync === 'function') {
          setTimeout(() => window.forceSync(), 1000);
        }
        
        return true;
      }
      
      return false;
      
    } catch (error) {
      console.error('❌ Error guardando progreso:', error);
      return false;
    }
  }
  
  updateLocalStorage(progress, timeSpent) {
    try {
      const temaParam = new URLSearchParams(window.location.search).get('tema') || 
                       this.tema.toLowerCase().replace(/\s+/g, '_');
      
      const materialKey = `tema.${temaParam}.material`;
      
      // Crear lista de secciones vistas
      const sectionsViewed = [];
      for (let i = 1; i <= progress.sectionsCompleted; i++) {
        sectionsViewed.push(`v${i}`);
      }
      
      const materialData = {
        sectionsViewed: sectionsViewed,
        total: progress.totalSections,
        completed: progress.isFullyCompleted,
        percentage: progress.percentage,
        timeSpentSeconds: timeSpent,
        lastUpdated: new Date().toISOString(),
        syncedWithFirebase: true,
        readingSystemUsed: true
      };
      
      sessionStorage.setItem(materialKey, JSON.stringify(materialData));
      console.log(`📝 SessionStorage actualizado: ${materialKey}`);
      
    } catch (error) {
      console.error('❌ Error actualizando localStorage:', error);
    }
  }

  // ====================================
  // INTERCEPTACIÓN DEL SISTEMA READALOUD
  // ====================================
  
  enhanceReadAloudSystem() {
    console.log('🔧 Mejorando sistema ReadAloud...');
    
    // Esperar a que se inicialice el sistema ReadAloud
    const checkSystemReady = setInterval(() => {
      if (window.readAloudSystemInstance || window.ReadAloudSystemModular) {
        clearInterval(checkSystemReady);
        console.log('✅ Sistema ReadAloud detectado');
        
        this.interceptSectionCompletion();
        this.interceptFinalCompletion();
      }
    }, 500);
    
    // Timeout de seguridad - usar observadores DOM como fallback
    setTimeout(() => {
      clearInterval(checkSystemReady);
      if (!window.readAloudSystemInstance) {
        console.log('ℹ️ Usando observadores DOM como fallback');
        this.setupDOMObservers();
      }
    }, 10000);
  }
  
  interceptSectionCompletion() {
    const system = window.readAloudSystemInstance || 
                   (window.ReadAloudSystemModular && new window.ReadAloudSystemModular());
    
    if (!system || typeof system.onSectionCompleted !== 'function') {
      console.log('ℹ️ onSectionCompleted no encontrado, usando DOM observers');
      this.setupDOMObservers();
      return;
    }
    
    // Interceptar método original
    const originalMethod = system.onSectionCompleted;
    const self = this;
    
    system.onSectionCompleted = function(...args) {
      // Ejecutar método original
      const result = originalMethod.apply(this, args);
      
      // Guardar progreso
      console.log('📖 Sección completada detectada');
      setTimeout(() => {
        self.saveProgressToFirebase();
      }, 500);
      
      return result;
    };
    
    console.log('✅ onSectionCompleted interceptado');
  }
  
  interceptFinalCompletion() {
    const system = window.readAloudSystemInstance || 
                   (window.ReadAloudSystemModular && new window.ReadAloudSystemModular());
    
    if (!system || typeof system.onAllSectionsCompleted !== 'function') {
      return;
    }
    
    const originalMethod = system.onAllSectionsCompleted;
    const self = this;
    
    system.onAllSectionsCompleted = function(...args) {
      console.log('🎉 Material completado totalmente');
      
      // Guardar progreso final
      self.saveProgressToFirebase();
      
      // Ejecutar método original después de delay
      setTimeout(() => {
        return originalMethod.apply(this, args);
      }, 1000);
    };
    
    console.log('✅ onAllSectionsCompleted interceptado');
  }
  
  setupDOMObservers() {
    console.log('🔧 Configurando observadores DOM...');
    
    // Observar cambios en clases de secciones
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && 
            mutation.attributeName === 'class' &&
            mutation.target.classList.contains('completed-section')) {
          
          console.log('📖 Sección completada por DOM');
          setTimeout(() => {
            this.saveProgressToFirebase();
          }, 500);
        }
      });
    });
    
    // Observar todas las secciones
    document.querySelectorAll('.study-section').forEach(section => {
      observer.observe(section, { attributes: true, attributeFilter: ['class'] });
    });
    
    // Observar barra de progreso global
    const progressFill = document.getElementById('progress-fill');
    if (progressFill) {
      const progressObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes' && 
              mutation.attributeName === 'style') {
            
            const width = progressFill.style.width;
            if (width === '100%') {
              console.log('🎉 100% detectado por DOM');
              setTimeout(() => {
                this.saveProgressToFirebase();
              }, 1000);
            }
          }
        });
      });
      
      progressObserver.observe(progressFill, { 
        attributes: true, 
        attributeFilter: ['style'] 
      });
    }
    
    console.log('✅ Observadores DOM configurados');
  }

  // ====================================
  // AUTO-GUARDADO Y EVENTOS
  // ====================================
  
  startAutoSave() {
    if (this.autoSaveInterval) return;
    
    console.log('⏰ Auto-guardado cada 60 segundos activado');
    this.autoSaveInterval = setInterval(() => {
      const progress = this.getCurrentProgress();
      if (progress.sectionsCompleted > 0) {
        console.log('💾 Auto-guardado...');
        this.saveProgressToFirebase();
      }
    }, 60000);
  }
  
  stopAutoSave() {
    if (this.autoSaveInterval) {
      clearInterval(this.autoSaveInterval);
      this.autoSaveInterval = null;
      console.log('⏹️ Auto-guardado detenido');
    }
  }
  
  setupPageEvents() {
    // Guardar al salir
    window.addEventListener('beforeunload', () => {
      const progress = this.getCurrentProgress();
      if (progress.sectionsCompleted > 0) {
        navigator.sendBeacon && 
        navigator.sendBeacon('/api/save-progress', JSON.stringify({
          tema: this.tema,
          progress: progress,
          timestamp: Date.now()
        }));
      }
      this.stopAutoSave();
    });
    
    // Guardar al cambiar de pestaña
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        const progress = this.getCurrentProgress();
        if (progress.sectionsCompleted > 0) {
          this.saveProgressToFirebase();
        }
      }
    });
  }
  
  syncInitialProgress() {
    const initialProgress = this.getCurrentProgress();
    if (initialProgress.sectionsCompleted > 0) {
      console.log('🔄 Sincronizando progreso inicial...');
      setTimeout(() => {
        this.saveProgressToFirebase();
      }, 2000);
    }
  }

  // ====================================
  // FUNCIONES PÚBLICAS
  // ====================================
  
  exposeGlobalFunctions() {
    const self = this;
    
    // Status del progreso
    window.checkMaterialReadingStatus = function() {
      console.log('🔍 === ESTADO MATERIAL DE LECTURA ===');
      
      const progress = self.getCurrentProgress();
      
      console.log(`📖 Material: ${self.tema}`);
      console.log(`📊 Progreso: ${progress.percentage}%`);
      console.log(`📝 Secciones: ${progress.sectionsCompleted}/${progress.totalSections}`);
      console.log(`✅ Completado: ${progress.isFullyCompleted ? 'Sí' : 'No'}`);
      console.log(`🎤 Sistema ReadAloud: ${window.readAloudSystemInstance ? 'Activo' : 'No detectado'}`);
      console.log(`🔥 Firebase: ${typeof window.saveMaterialProgress === 'function' ? 'OK' : 'No disponible'}`);
      
      return progress;
    };
    
    // Forzar guardado
    window.forceSaveMaterialReading = async function() {
      console.log('🔄 Forzando guardado...');
      const success = await self.saveProgressToFirebase();
      console.log(success ? '✅ Guardado exitoso' : '❌ Error en guardado');
      return success;
    };
    
    // Simular progreso (testing)
    window.simulateMaterialProgress = function(sectionsCompleted = 3) {
      console.log(`🎭 Simulando ${sectionsCompleted} secciones completadas`);
      
      const sections = document.querySelectorAll('.study-section');
      for (let i = 0; i < Math.min(sectionsCompleted, sections.length); i++) {
        sections[i].classList.add('completed-section');
      }
      
      const progressFill = document.getElementById('progress-fill');
      const progressCounter = document.getElementById('progress-counter');
      
      if (progressFill && progressCounter) {
        const percentage = Math.round((sectionsCompleted / sections.length) * 100);
        progressFill.style.width = `${percentage}%`;
        progressCounter.textContent = `${sectionsCompleted} / ${sections.length} secciones`;
      }
      
      setTimeout(() => self.saveProgressToFirebase(), 500);
    };
    
    // Test completo
    window.testMaterialIntegration = function() {
      console.log('🧪 === TEST INTEGRACIÓN MATERIAL ===');
      
      console.log('1️⃣ Configuración:');
      console.log(`   Tema: ${self.tema}`);
      console.log(`   Secciones: ${self.totalSections}`);
      console.log(`   Sistema inicializado: ${self.isInitialized}`);
      
      console.log('2️⃣ Funciones Firebase:');
      const functions = ['saveMaterialProgress', 'forceSync'];
      functions.forEach(fn => {
        const exists = typeof window[fn] === 'function';
        console.log(`   ${exists ? '✅' : '❌'} ${fn}`);
      });
      
      console.log('3️⃣ Sistema ReadAloud:');
      console.log(`   ReadAloudSystemModular: ${typeof window.ReadAloudSystemModular}`);
      console.log(`   Instancia activa: ${!!window.readAloudSystemInstance}`);
      
      console.log('4️⃣ DOM:');
      const sections = document.querySelectorAll('.study-section').length;
      console.log(`   Secciones encontradas: ${sections}`);
      console.log(`   Progreso actual: ${JSON.stringify(self.getCurrentProgress())}`);
      
      console.log('5️⃣ Probando guardado...');
      window.forceSaveMaterialReading();
      
      return {
        initialized: self.isInitialized,
        tema: self.tema,
        sections: sections,
        firebaseOK: typeof window.saveMaterialProgress === 'function'
      };
    };
    
    // Reset para testing
    window.resetMaterialProgress = function() {
      if (!confirm('¿Resetear progreso del material?')) return;
      
      console.log('🔄 Reseteando...');
      
      document.querySelectorAll('.study-section').forEach(section => {
        section.classList.remove('completed-section', 'active');
      });
      
      const firstSection = document.querySelector('.study-section');
      if (firstSection) firstSection.classList.add('active');
      
      const progressFill = document.getElementById('progress-fill');
      const progressCounter = document.getElementById('progress-counter');
      
      if (progressFill) progressFill.style.width = '0%';
      if (progressCounter) progressCounter.textContent = `0 / ${self.totalSections} secciones`;
      
      const temaParam = new URLSearchParams(window.location.search).get('tema') || 
                       self.tema.toLowerCase().replace(/\s+/g, '_');
      sessionStorage.removeItem(`tema.${temaParam}.material`);
      
      console.log('✅ Progreso reseteado');
    };
    
    console.log('🛠️ Funciones públicas expuestas:');
    console.log('   - checkMaterialReadingStatus()');
    console.log('   - forceSaveMaterialReading()');
    console.log('   - simulateMaterialProgress(n)');
    console.log('   - testMaterialIntegration()');
    console.log('   - resetMaterialProgress()');
  }
}

// ====================================
// AUTO-INICIALIZACIÓN
// ====================================

// Crear instancia global
let materialFirebaseInstance = null;

// Inicializar cuando se cargue el módulo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    materialFirebaseInstance = new MaterialFirebaseIntegration();
  });
} else {
  materialFirebaseInstance = new MaterialFirebaseIntegration();
}

// También inicializar cuando el usuario esté autenticado
if (typeof window !== 'undefined' && window.auth) {
  window.auth.onAuthStateChanged((user) => {
    if (user && !materialFirebaseInstance?.isInitialized) {
      setTimeout(() => {
        if (!materialFirebaseInstance) {
          materialFirebaseInstance = new MaterialFirebaseIntegration();
        }
      }, 1500);
    }
  });
}

// Exponer instancia globalmente para debugging
window.materialFirebaseInstance = materialFirebaseInstance;

console.log('🎮 Material-Firebase.js cargado');
console.log('🎯 Sistema listo para interceptar progreso de lectura');