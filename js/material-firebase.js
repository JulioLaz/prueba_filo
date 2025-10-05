// material-firebase.js - VERSIÓN CORREGIDA v2.1
// Sistema de integración Firebase con control de progreso mejorado
// ✅ CORRECCIONES IMPLEMENTADAS:
//    • Validación de progreso anterior (no permite retrocesos)
//    • Status 'completed' SOLO cuando sectionsCompleted === totalSections
//    • Guardado proporcional correcto (1/14 = 7%, 7/14 = 50%, etc.)
//    • Persistencia mejorada con auto-guardado

console.log('📖 Cargando sistema de integración Material + Firebase v2.1...');

// import { saveProgress } from '../../js/firebase.js';
// import { auth } from '../../js/firebase.js';
// ✅ CORRECTO:
import { saveProgress } from '/prueba_filo/firebase.js';
import { auth } from '/prueba_filo/firebase.js';
class MaterialFirebaseIntegration {
  constructor() {
    this.config = null;
    this.tema = null;
    this.totalSections = 0;
    this.autoSaveInterval = null;
    this.isInitialized = false;
    this.previousProgress = null; // 🆕 Almacenar progreso anterior de Firebase
    
    this.init();
  }
  
  async init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initializeSystem());
    } else {
      await this.initializeSystem();
    }
  }
  
  async initializeSystem() {
    try {
      this.loadConfiguration();
      await this.waitForFirebase();
      await this.loadPreviousProgress(); // 🆕 Cargar progreso anterior antes de empezar
      this.setupSystem();
      
      this.isInitialized = true;
      console.log('✅ MaterialFirebaseIntegration v2.1 inicializado correctamente');
      
    } catch (error) {
      console.error('⚠ Error inicializando MaterialFirebaseIntegration:', error);
    }
  }
  
  loadConfiguration() {
    this.config = window.ReadAloudSystemConfig || {};
    this.tema = this.config.tema || 
                new URLSearchParams(window.location.search).get('tema') ||
                'filosofia';
    this.totalSections = this.config.sections || 
                        document.querySelectorAll('.study-section').length || 
                        14;
    
    console.log(`🎯 Configuración cargada: ${this.tema} | ${this.totalSections} secciones totales`);
  }
  
  async waitForFirebase() {
    const maxWaitTime = 10000;
    const checkInterval = 500;
    let waitedTime = 0;
    
    while (waitedTime < maxWaitTime) {
      if (auth.currentUser) {
        console.log('✅ Usuario autenticado, Firebase listo');
        return true;
      }
      await new Promise(resolve => setTimeout(resolve, checkInterval));
      waitedTime += checkInterval;
    }
    
    console.warn('⚠️ Usuario no autenticado después de 10s');
    return false;
  }
  
  // 🆕 NUEVA FUNCIÓN: Cargar progreso anterior guardado en Firebase
  async loadPreviousProgress() {
    try {
      const moduleId = this.normalizeModuleId(this.tema);
      const storageKey = `tema.${moduleId}.material`;
      
      // Intentar cargar desde sessionStorage (cache local)
      const cached = sessionStorage.getItem(storageKey);
      if (cached) {
        const data = JSON.parse(cached);
        this.previousProgress = {
          percentage: data.percentage || 0,
          sectionsCompleted: data.sectionsViewed?.length || 0,
          completed: data.completed || false
        };
        console.log(`📥 Progreso anterior recuperado: ${this.previousProgress.percentage}% (${this.previousProgress.sectionsCompleted} secciones)`);
      } else {
        this.previousProgress = {
          percentage: 0,
          sectionsCompleted: 0,
          completed: false
        };
        console.log('📝 Iniciando desde cero (sin progreso previo guardado)');
      }
    } catch (error) {
      console.warn('⚠️ Error cargando progreso anterior:', error);
      this.previousProgress = { percentage: 0, sectionsCompleted: 0, completed: false };
    }
  }
  
  setupSystem() {
    this.enhanceReadAloudSystem();
    this.startAutoSave();
    this.setupPageEvents();
    this.createFirebaseBridge();
    this.exposeGlobalFunctions();
  }

  // 🔄 FUNCIÓN MEJORADA: Bridge a Firebase con validaciones estrictas
  createFirebaseBridge() {
    const self = this;
    
    window.saveMaterialProgress = async function(sectionsCompleted, totalSections, timeSpentSeconds) {
      console.log(`🌉 Bridge: Evaluando guardado ${sectionsCompleted}/${totalSections}`);
      
      try {
        if (!auth.currentUser) {
          console.error('❌ Usuario no autenticado - no se puede guardar');
          return false;
        }
        
        const moduleId = self.normalizeModuleId(self.tema);
        const currentPercentage = Math.round((sectionsCompleted / totalSections) * 100);
        
        // 🆕 VALIDACIÓN 1: Solo guardar si el progreso actual SUPERA al anterior
        if (self.previousProgress && currentPercentage <= self.previousProgress.percentage) {
          console.log(`⏸️  GUARDADO RECHAZADO:`);
          console.log(`   Progreso actual: ${currentPercentage}% (${sectionsCompleted}/${totalSections})`);
          console.log(`   Progreso anterior: ${self.previousProgress.percentage}% (${self.previousProgress.sectionsCompleted}/${totalSections})`);
          console.log(`   → No se guarda para evitar retroceso de progreso`);
          return false;
        }
        
        // 🆕 VALIDACIÓN 2: Status 'completed' SOLO si completó TODAS las secciones
        const isFullyCompleted = (sectionsCompleted >= totalSections);
        const status = isFullyCompleted ? 'completed' : 'in_progress';
        const score = currentPercentage;
        
        console.log(`📊 Estado calculado para guardado:`);
        console.log(`   Secciones completadas: ${sectionsCompleted}/${totalSections}`);
        console.log(`   Porcentaje: ${currentPercentage}%`);
        console.log(`   Status: ${status}`);
        console.log(`   Totalmente completado: ${isFullyCompleted ? 'SÍ ✅' : 'NO ⏳'}`);
        
        // 🆕 VALIDACIÓN 3: Verificación de seguridad - evitar inconsistencias
        if (status === 'completed' && sectionsCompleted < totalSections) {
          console.error(`❌ ERROR LÓGICO CRÍTICO:`);
          console.error(`   Se intentó marcar como 'completed' con solo ${sectionsCompleted}/${totalSections} secciones`);
          console.error(`   → Guardado abortado por seguridad`);
          return false;
        }
        
        console.log(`📤 Guardando en Firebase:`);
        console.log(`   moduleId: ${moduleId}`);
        console.log(`   status: ${status}`);
        console.log(`   score: ${score}%`);
        console.log(`   seconds: ${timeSpentSeconds}s`);
        
        // Llamar a la función real de Firebase
        await saveProgress({
          moduleId: moduleId,
          lessonId: null,
          status: status,
          score: score,
          seconds: timeSpentSeconds
        });
        
        // 🆕 Actualizar progreso anterior después de guardar exitosamente
        self.previousProgress = {
          percentage: currentPercentage,
          sectionsCompleted: sectionsCompleted,
          completed: isFullyCompleted
        };
        
        console.log(`✅ Progreso guardado exitosamente en Firebase`);
        console.log(`   Nuevo progreso base: ${currentPercentage}%`);
        
        return true;
        
      } catch (error) {
        console.error('❌ Error guardando en Firebase:', error);
        return false;
      }
    };
    
    // Función auxiliar para forzar sincronización
    window.forceSync = async function() {
      console.log('🔄 Forzando sincronización manual...');
      const progress = self.getCurrentProgress();
      if (progress.sectionsCompleted > 0) {
        return await window.saveMaterialProgress(
          progress.sectionsCompleted,
          progress.totalSections, 
          progress.sectionsCompleted * 120 // Estimado: 2 min por sección
        );
      }
      console.log('ℹ️  No hay progreso para sincronizar');
      return true;
    };
    
    console.log('🌉 Funciones bridge creadas: saveMaterialProgress, forceSync');
  }
  
  normalizeModuleId(tema) {
    return tema
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Quitar acentos
      .replace(/[^a-z0-9\s]/g, '') // Solo letras, números y espacios
      .trim()
      .replace(/\s+/g, '_'); // Espacios → guiones bajos
  }

  getCurrentProgress() {
    try {
      // Intentar obtener del sistema ReadAloud activo
      if (window.readAloudSystemInstance) {
        const completed = window.readAloudSystemInstance.completedSections?.size || 0;
        const total = window.readAloudSystemInstance.totalSections || this.totalSections;
        
        return {
          sectionsCompleted: completed,
          totalSections: total,
          percentage: Math.round((completed / total) * 100),
          isFullyCompleted: completed >= total
        };
      }
      
      // Fallback: contar secciones completadas en DOM
      const completedSections = document.querySelectorAll('.study-section.completed-section').length;
      const allSections = this.totalSections;
      
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
      console.log(`💾 Intentando guardar: ${progress.percentage}% (${progress.sectionsCompleted}/${progress.totalSections})`);
      
      const success = await window.saveMaterialProgress(
        progress.sectionsCompleted,
        progress.totalSections,
        estimatedTimeSpent
      );
      
      if (success) {
        this.updateLocalStorage(progress, estimatedTimeSpent);
        console.log(`✅ Material guardado exitosamente: ${progress.percentage}%`);
        
        // Forzar sincronización de UI si existe
        if (typeof window.forceSync === 'function') {
          setTimeout(() => window.forceSync(), 1000);
        }
        
        return true;
      } else {
        console.log(`⏸️  Guardado omitido (no supera progreso anterior)`);
        return false;
      }
      
    } catch (error) {
      console.error('⚠ Error en saveProgressToFirebase:', error);
      return false;
    }
  }
  
  updateLocalStorage(progress, timeSpent) {
    try {
      const moduleId = this.normalizeModuleId(this.tema);
      const materialKey = `tema.${moduleId}.material`;
      
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
      console.error('❌ Error actualizando sessionStorage:', error);
    }
  }

  enhanceReadAloudSystem() {
    console.log('🔧 Mejorando sistema ReadAloud...');
    
    const checkSystemReady = setInterval(() => {
      if (window.readAloudSystemInstance || window.ReadAloudSystemModular) {
        clearInterval(checkSystemReady);
        console.log('✅ Sistema ReadAloud detectado');
        
        this.interceptSectionCompletion();
        this.interceptFinalCompletion();
      }
    }, 500);
    
    setTimeout(() => {
      clearInterval(checkSystemReady);
      if (!window.readAloudSystemInstance) {
        console.log('ℹ️ Usando observadores DOM como fallback');
        this.setupDOMObservers();
      }
    }, 10000);
  }
  
  interceptSectionCompletion() {
    const system = window.readAloudSystemInstance;
    
    if (!system || typeof system.onSectionCompleted !== 'function') {
      console.log('ℹ️ onSectionCompleted no encontrado, usando DOM observers');
      this.setupDOMObservers();
      return;
    }
    
    const originalMethod = system.onSectionCompleted;
    const self = this;
    
    system.onSectionCompleted = function(...args) {
      const result = originalMethod.apply(this, args);
      
      console.log('📖 Sección completada detectada');
      setTimeout(() => {
        self.saveProgressToFirebase();
      }, 500);
      
      return result;
    };
    
    console.log('✅ onSectionCompleted interceptado');
  }
  
  interceptFinalCompletion() {
    const system = window.readAloudSystemInstance;
    
    if (!system || typeof system.onAllSectionsCompleted !== 'function') {
      return;
    }
    
    const originalMethod = system.onAllSectionsCompleted;
    const self = this;
    
    system.onAllSectionsCompleted = function(...args) {
      console.log('🎉 ¡MATERIAL COMPLETADO AL 100%!');
      
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
    
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && 
            mutation.attributeName === 'class' &&
            mutation.target.classList.contains('completed-section')) {
          
          console.log('📖 Sección completada detectada por DOM');
          setTimeout(() => {
            this.saveProgressToFirebase();
          }, 500);
        }
      });
    });
    
    document.querySelectorAll('.study-section').forEach(section => {
      observer.observe(section, { attributes: true, attributeFilter: ['class'] });
    });
    
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

  startAutoSave() {
    if (this.autoSaveInterval) return;
    
    console.log('⏰ Auto-guardado cada 60 segundos activado');
    this.autoSaveInterval = setInterval(() => {
      const progress = this.getCurrentProgress();
      if (progress.sectionsCompleted > 0) {
        console.log('💾 Auto-guardado programado ejecutándose...');
        this.saveProgressToFirebase();
      }
    }, 60000); // Cada 60 segundos
  }
  
  stopAutoSave() {
    if (this.autoSaveInterval) {
      clearInterval(this.autoSaveInterval);
      this.autoSaveInterval = null;
      console.log('⏹️ Auto-guardado detenido');
    }
  }
  
  setupPageEvents() {
    // Guardar al cerrar/salir de la página
    window.addEventListener('beforeunload', () => {
      const progress = this.getCurrentProgress();
      if (progress.sectionsCompleted > 0) {
        console.log('💾 Guardando antes de salir...');
        this.saveProgressToFirebase();
      }
      this.stopAutoSave();
    });
    
    // Guardar al cambiar de pestaña
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        const progress = this.getCurrentProgress();
        if (progress.sectionsCompleted > 0) {
          console.log('💾 Guardando al cambiar de pestaña...');
          this.saveProgressToFirebase();
        }
      }
    });
  }

  exposeGlobalFunctions() {
    const self = this;
    
    // Función para verificar estado actual
    window.checkMaterialReadingStatus = function() {
      console.log('🔍 === ESTADO DEL MATERIAL DE LECTURA ===');
      
      const progress = self.getCurrentProgress();
      
      console.log(`📖 Material: ${self.tema}`);
      console.log(`📊 Progreso ACTUAL: ${progress.percentage}% (${progress.sectionsCompleted}/${progress.totalSections})`);
      console.log(`📥 Progreso ANTERIOR: ${self.previousProgress?.percentage || 0}% (${self.previousProgress?.sectionsCompleted || 0}/${progress.totalSections})`);
      console.log(`✅ Completado totalmente: ${progress.isFullyCompleted ? 'SÍ' : 'NO'}`);
      console.log(`🎤 Sistema ReadAloud: ${window.readAloudSystemInstance ? 'Activo' : 'No detectado'}`);
      console.log(`🔥 Firebase Auth: ${auth.currentUser ? `Autenticado (${auth.currentUser.email})` : 'No autenticado'}`);
      console.log(`🌉 Bridge Functions: ${typeof window.saveMaterialProgress === 'function' ? 'OK' : 'No disponible'}`);
      
      return {
        current: progress,
        previous: self.previousProgress
      };
    };
    
    // Función para forzar guardado manual
    window.forceSaveMaterialReading = async function() {
      console.log('🔄 Forzando guardado manual...');
      const success = await self.saveProgressToFirebase();
      console.log(success ? '✅ Guardado exitoso' : '⏸️ Guardado omitido (no supera anterior)');
      return success;
    };
    
    // Función de test para simular progreso
    window.simulateMaterialProgress = function(sectionsCompleted = 3) {
      console.log(`🎭 Simulando ${sectionsCompleted} secciones completadas...`);
      
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
    
    console.log('🛠️ Funciones públicas expuestas:');
    console.log('   - checkMaterialReadingStatus()');
    console.log('   - forceSaveMaterialReading()');
    console.log('   - simulateMaterialProgress(n)');
  }
}

// Auto-inicialización
let materialFirebaseInstance = null;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    materialFirebaseInstance = new MaterialFirebaseIntegration();
  });
} else {
  materialFirebaseInstance = new MaterialFirebaseIntegration();
}

// Inicializar cuando el usuario se autentique
if (typeof window !== 'undefined' && auth) {
  auth.onAuthStateChanged((user) => {
    if (user && !materialFirebaseInstance?.isInitialized) {
      setTimeout(() => {
        if (!materialFirebaseInstance) {
          materialFirebaseInstance = new MaterialFirebaseIntegration();
        }
      }, 1500);
    }
  });
}

// Exponer instancia globalmente
window.materialFirebaseInstance = materialFirebaseInstance;

console.log('🎮 Material-Firebase.js v2.1 CARGADO - SISTEMA CORREGIDO');
console.log('🎯 Funcionalidades:');
console.log('   ✅ Progreso proporcional (1/14 = 7%, 7/14 = 50%, etc.)');
console.log('   ✅ Status completed SOLO al 100%');
console.log('   ✅ No permite retrocesos de progreso');
console.log('   ✅ Auto-guardado cada 60s + al salir');