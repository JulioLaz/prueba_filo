/**
 * material-firebase.js
 * Guarda en Firebase el progreso del MATERIAL DE LECTURA (themes/<tema>/content.html).
 * Es el ÚNICO lugar que guarda el material: el hub (tema.html) solo escucha
 * los avisos (postMessage) y refresca la barra (js/material-progreso.js).
 *
 * - ID del tema: carpeta del archivo (themes/<tema>/content.html) = mismo ID
 *   que usa el hub (antes usaba el título largo y quedaba en otro documento)
 * - Total de secciones: ReadAloudSystemConfig.sections o las .study-section
 * - Tiempo: real, desde que se abrió el material (no estimado)
 * - El récord lo controla saveProgress() de firebase.js (no baja nunca)
 *
 * Versión: v3.0.0 (2026-10-20) — reescritura: ID corto del tema, tiempo real,
 *   sin doble guardado ni funciones de simulación expuestas.
 */
import { saveProgress, auth } from '/prueba_filo/firebase.js';

const AUTOSAVE_MS = 60000;

class MaterialFirebaseIntegration {
  constructor() {
    this.tema = this.getTemaSlug();
    this.totalSections = this.getTotalSections();
    this.openedAt = Date.now();
    this.lastSavedKey = null;
    this.autoSaveInterval = null;
    this.setup();
  }

  // themes/<tema>/content.html → <tema>
  getTemaSlug() {
    const fromPath = location.pathname.match(/\/themes\/([^/]+)\/[^/]*$/);
    return (fromPath && fromPath[1]) ||
           new URLSearchParams(location.search).get('tema') ||
           sessionStorage.getItem('tema.active') ||
           'filosofia';
  }

  getTotalSections() {
    const config = window.ReadAloudSystemConfig || {};
    return config.sections || document.querySelectorAll('.study-section').length || 1;
  }

  getCurrentProgress() {
    const system = window.readAloudSystemInstance;
    const completed = system?.completedSections?.size ??
                      document.querySelectorAll('.study-section.completed-section').length;
    const total = system?.totalSections || this.totalSections;
    const sectionsCompleted = Math.min(completed, total);
    return {
      sectionsCompleted,
      totalSections: total,
      percentage: Math.round((sectionsCompleted / total) * 100),
      isFullyCompleted: sectionsCompleted >= total
    };
  }

  async save(force = false) {
    if (!auth.currentUser) return false;

    const progress = this.getCurrentProgress();
    if (progress.sectionsCompleted === 0) return false;

    const seconds = Math.round((Date.now() - this.openedAt) / 1000);
    // Evita guardados repetidos sin cambios (salvo autoguardado/cierre, que suman tiempo)
    const key = `${progress.sectionsCompleted}/${progress.totalSections}`;
    if (!force && key === this.lastSavedKey) return false;

    try {
      await saveProgress({
        moduleId: this.tema,
        lessonId: 'material',
        status: progress.isFullyCompleted ? 'completed' : 'in_progress',
        score: progress.percentage,
        seconds
      });
      this.lastSavedKey = key;
      this.updateSessionStorage(progress);
      this.notifyParent(progress);
      return true;
    } catch (error) {
      console.error('❌ Error guardando material en Firebase:', error);
      return false;
    }
  }

  // Estado que lee el hub (tema.<tema>.material); nunca baja el porcentaje mostrado
  updateSessionStorage(progress) {
    const key = `tema.${this.tema}.material`;
    try {
      const prev = JSON.parse(sessionStorage.getItem(key) || 'null');
      if (prev && (prev.percentage || 0) > progress.percentage) return;

      sessionStorage.setItem(key, JSON.stringify({
        sectionsViewed: Array.from({ length: progress.sectionsCompleted }, (_, i) => `s${i}`),
        total: progress.totalSections,
        completed: progress.isFullyCompleted,
        percentage: progress.percentage,
        lastUpdated: new Date().toISOString()
      }));
    } catch (error) {
      console.warn('⚠️ No se pudo actualizar sessionStorage del material:', error);
    }
  }

  notifyParent(progress) {
    if (window.parent === window) return;
    window.parent.postMessage({ type: 'MATERIAL_PROGRESS', tema: this.tema, ...progress }, location.origin);
  }

  setup() {
    this.hookReadAloudSystem();
    this.autoSaveInterval = setInterval(() => this.save(true), AUTOSAVE_MS);
    window.addEventListener('pagehide', () => this.save(true));
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') this.save(true);
    });

    // Diagnóstico (solo lectura)
    window.checkMaterialReadingStatus = () => ({ tema: this.tema, ...this.getCurrentProgress() });
  }

  // Guarda al completar cada sección (engancha el sistema de lectura o, si no está, el DOM)
  hookReadAloudSystem() {
    let tries = 0;
    const timer = setInterval(() => {
      const system = window.readAloudSystemInstance;
      if (system && typeof system.onSectionCompleted === 'function') {
        clearInterval(timer);
        const original = system.onSectionCompleted;
        const self = this;
        system.onSectionCompleted = function (...args) {
          const result = original.apply(this, args);
          setTimeout(() => self.save(), 300);
          return result;
        };
      } else if (++tries >= 20) {
        clearInterval(timer);
        this.observeDom();
      }
    }, 500);
  }

  observeDom() {
    const observer = new MutationObserver(() => this.save());
    document.querySelectorAll('.study-section').forEach(section => {
      observer.observe(section, { attributes: true, attributeFilter: ['class'] });
    });
  }
}

function start() {
  window.materialFirebaseInstance = new MaterialFirebaseIntegration();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', start);
} else {
  start();
}
