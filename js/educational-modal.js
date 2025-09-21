// educational-modal.js - Sistema genérico para todos los temas
console.log('📚 Cargando sistema de modal educativo...');

(function() {
  'use strict';

  // Crear modal dinámicamente
  function createEducationalModal() {
    const modalHTML = `
      <div class="educational-modal" id="educationalModal">
        <div class="particles" id="particles"></div>
        <div class="modal-container">
          <div class="modal-header">
            <span class="modal-icon" id="modalIcon">🧠</span>
            <h2 class="modal-title" id="modalTitle">Cargando tema...</h2>
            <p class="modal-subtitle" id="modalSubtitle">Preparando contenido educativo</p>
          </div>
          
          <div class="modal-content">
            <div class="intro-section animate-in">
              <div class="section-title">
                📖 Introducción
              </div>
              <p class="intro-text" id="introText">
                Cargando introducción del tema...
              </p>
            </div>

            <div class="keywords-container animate-in delay-1" id="keywordsContainer" style="display: none;">
              <div class="keywords-title">Conceptos clave</div>
              <div class="keywords" id="keywordsContent"></div>
            </div>

            <div class="stats-preview animate-in delay-2">
              <div class="stat-item">
                <span class="stat-value" id="statWords">6</span>
                <span class="stat-label">Palabras</span>
              </div>
              <div class="stat-item">
                <span class="stat-value" id="statTime">10-15</span>
                <span class="stat-label">Minutos</span>
              </div>
              <div class="stat-item">
                <span class="stat-value" id="statDifficulty">★★☆</span>
                <span class="stat-label">Dificultad</span>
              </div>
            </div>

            <div class="conclusion-section animate-in delay-3" id="conclusionSection" style="display: none;">
              <div class="section-title">
                🎯 Objetivo
              </div>
              <p class="conclusion-text" id="conclusionText"></p>
            </div>
          </div>
          
          <div class="modal-actions">
            <button class="btn-exit" onclick="EducationalModal.exit()">
              ← Salir
            </button>
            <button class="btn-secondary" onclick="EducationalModal.skip()">
              Saltar introducción
            </button>
            <button class="btn-game" onclick="EducationalModal.start()">
              🎮 ¡Comenzar crucigrama!
            </button>
          </div>
        </div>
      </div>
    `;

    // Insertar en el DOM
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    console.log('✅ Modal educativo creado dinámicamente');
  }

  // Crear botón de información permanente en la interfaz
  function createInfoButton() {
    // Verificar si ya existe
    if (document.getElementById('infoButton')) return;
    
    const infoButton = document.createElement('button');
    infoButton.id = 'infoButton';
    infoButton.className = 'info-button';
    infoButton.innerHTML = '📚 Info';
    infoButton.title = 'Ver información educativa del tema';
    infoButton.onclick = () => EducationalModal.show();
    
    // Insertar en el HUD existente
    const hud = document.querySelector('.hud');
    if (hud) {
      hud.appendChild(infoButton);
      console.log('✅ Botón de información agregado al HUD');
    } else {
      // Fallback: agregar al header si no hay HUD
      const header = document.querySelector('header .header-actions');
      if (header) {
        header.insertBefore(infoButton, header.firstChild);
      }
    }
  }
  function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 15;
    particlesContainer.innerHTML = ''; // Limpiar partículas existentes
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 6 + 's';
      particle.style.animationDuration = (6 + Math.random() * 4) + 's';
      particlesContainer.appendChild(particle);
    }
  }

  // Mapear dificultad a iconos
  function getDifficultyIcon(difficulty) {
    const difficultyMap = {
      'beginner': '★☆☆',
      'easy': '★☆☆',
      'intermediate': '★★☆',
      'medium': '★★☆',
      'advanced': '★★★',
      'hard': '★★★',
      'expert': '★★★'
    };
    return difficultyMap[difficulty] || '★★☆';
  }

  // Obtener icono temático basado en el tema
  function getThemeIcon(theme, title) {
    const themeIcons = {
      'aristoteles': '🏛️',
      'etica': '⚖️',
      'kant': '📜',
      'utilitarismo': '⚖️',
      'hedonismo': '🌸',
      'pragmatismo': '🔧',
      'antropocentrismo': '👤',
      'existencialismo': '🤔',
      'estoicismo': '🗿',
      'nihilismo': '🕳️'
    };

    // Buscar por clave de tema
    for (const [key, icon] of Object.entries(themeIcons)) {
      if (theme?.toLowerCase().includes(key) || title?.toLowerCase().includes(key)) {
        return icon;
      }
    }
    
    return '🧠'; // Icono por defecto
  }

  // Estimar tiempo basado en número de palabras
  function estimateTime(totalWords, difficulty) {
    const baseTimePerWord = {
      'beginner': 1.5,
      'easy': 1.5,
      'intermediate': 2,
      'medium': 2,
      'advanced': 3,
      'hard': 3,
      'expert': 4
    };
    
    const multiplier = baseTimePerWord[difficulty] || 2;
    const totalMinutes = Math.round(totalWords * multiplier);
    
    if (totalMinutes < 8) return '5-10';
    if (totalMinutes < 15) return '10-15';
    if (totalMinutes < 25) return '15-25';
    return '20-30';
  }

  // Función principal para poblar el modal
  function populateModal(config) {
    if (!config) {
      console.warn('⚠️ No hay configuración disponible para el modal educativo');
      return false;
    }

    const educational = config.educational || {};
    const metadata = config.metadata || {};

    // Título y subtítulo
    document.getElementById('modalTitle').textContent = config.title || 'Crucigrama Filosófico';
    
    // Icono temático
    const themeIcon = getThemeIcon(metadata.theme, config.title);
    document.getElementById('modalIcon').textContent = themeIcon;

    // Subtítulo basado en nivel educativo
    const subtitle = metadata.educationalLevel ? 
      `Nivel: ${metadata.educationalLevel}` : 
      'Crucigrama Educativo';
    document.getElementById('modalSubtitle').textContent = subtitle;

    // Introducción
    const introText = educational.introduction || 
      'Explora los conceptos fundamentales de este tema filosófico a través de un crucigrama interactivo.';
    document.getElementById('introText').textContent = introText;

    // Keywords
    const keywordsContainer = document.getElementById('keywordsContainer');
    const keywordsContent = document.getElementById('keywordsContent');
    
    if (educational.keyWords && educational.keyWords.length > 0) {
      keywordsContent.innerHTML = '';
      educational.keyWords.forEach(keyword => {
        const span = document.createElement('span');
        span.className = 'keyword';
        span.textContent = keyword;
        keywordsContent.appendChild(span);
      });
      keywordsContainer.style.display = 'block';
    }

    // Stats
    const totalWords = metadata.totalWords || config.entries?.length || 6;
    document.getElementById('statWords').textContent = totalWords;
    
    const difficulty = metadata.difficulty || 'intermediate';
    document.getElementById('statDifficulty').textContent = getDifficultyIcon(difficulty);
    
    const estimatedTime = metadata.estimatedTime || estimateTime(totalWords, difficulty);
    document.getElementById('statTime').textContent = estimatedTime;

    // Conclusión/Objetivo
    const conclusionSection = document.getElementById('conclusionSection');
    const conclusionText = document.getElementById('conclusionText');
    
    if (educational.conclusion) {
      conclusionText.textContent = educational.conclusion;
      conclusionSection.style.display = 'block';
    } else {
      // Objetivo genérico
      conclusionText.textContent = `Al completar este crucigrama, comprenderás mejor los conceptos de ${config.title?.split(' - ')[0] || 'este tema'} y su relevancia en la filosofía.`;
      conclusionSection.style.display = 'block';
    }

    createParticles();
    console.log('✅ Modal educativo poblado con datos del tema');
    return true;
  }

  // API pública del modal
  window.EducationalModal = {
    
    // Mostrar modal automáticamente
    show: function(config = null) {
      const targetConfig = config || window.CROSSWORD_CONFIG;
      
      if (!targetConfig?.educational?.introduction) {
        console.log('📚 No hay contenido educativo, iniciando crucigrama directamente');
        this.start();
        return;
      }

      // Crear modal si no existe
      if (!document.getElementById('educationalModal')) {
        createEducationalModal();
      }

      // Poblar con datos
      if (!populateModal(targetConfig)) {
        this.start();
        return;
      }

      // Mostrar modal
      const modal = document.getElementById('educationalModal');
      modal.classList.add('show');
      
      console.log('📚 Modal educativo mostrado');
    },

    // Cerrar modal
    hide: function() {
      const modal = document.getElementById('educationalModal');
      if (modal) {
        modal.classList.remove('show');
        console.log('📚 Modal educativo cerrado');
      }
    },

    // Salir completamente (volver al tema)
    exit: function() {
      console.log('🚪 Saliendo del crucigrama desde modal educativo');
      this.hide();
      
      // Obtener tema actual y regresar
      const params = new URLSearchParams(window.location.search);
      const tema = params.get('tema') || params.get('theme') || 'default';
      const backUrl = `tema.html?tema=${tema}&theme=${tema}`;
      
      // Guardar progreso si existe antes de salir
      if (typeof window.forceCrosswordSave === 'function') {
        try {
          window.forceCrosswordSave();
        } catch (e) {
          console.warn('Error guardando progreso al salir:', e);
        }
      }
      
      setTimeout(() => {
        window.location.href = backUrl;
      }, 300);
    },

    // Saltar introducción
    skip: function() {
      console.log('⏭️ Saltando introducción educativa');
      this.hide();
      setTimeout(() => this.start(), 300);
    },

    // Iniciar crucigrama
    start: function() {
      console.log('🎮 Iniciando crucigrama desde modal educativo');
      this.hide();
      
      // Disparar evento personalizado para que el motor lo maneje
      setTimeout(() => {
        const event = new CustomEvent('startCrosswordFromModal', {
          detail: { config: window.CROSSWORD_CONFIG }
        });
        window.dispatchEvent(event);
      }, 400);
    },

    // Auto-inicializar cuando se carga la configuración
    autoInit: function() {
      console.log('🔄 Auto-inicializando modal educativo...');
      
      // Esperar un momento para que la configuración se cargue
      setTimeout(() => {
        if (window.CROSSWORD_CONFIG) {
          // Crear botón de info permanente si hay contenido educativo
          if (window.CROSSWORD_CONFIG.educational?.introduction) {
            createInfoButton();
            this.show();
          }
        } else {
          console.warn('⚠️ CROSSWORD_CONFIG no disponible para modal educativo');
        }
      }, 500);
    },

    // Mostrar modal manualmente (desde botón de info)
    showInfo: function() {
      console.log('📚 Mostrando información educativa desde botón');
      this.show();
    }
  };

  // Auto-inicializar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      EducationalModal.autoInit();
    });
  } else {
    EducationalModal.autoInit();
  }

  console.log('✅ Sistema de modal educativo cargado');

})();