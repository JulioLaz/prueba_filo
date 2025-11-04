// ====================================
// 🎬 MÓDULO INDEPENDIENTE: VIDEO + CLOZE TEST
// Ponderación: 10% Video + 90% Cloze (cloze obligatorio)
// ====================================

class VideoClozeModule {
  constructor() {
    this.config = {
      VIDEO_WEIGHT: 0.1,  // 10% ver el video
      CLOZE_WEIGHT: 0.9,  // 90% completar cloze test (OBLIGATORIO)
      CELEBRATION_THRESHOLDS: [25, 50, 75, 100], // Puntos de celebración
      AUTO_SAVE_INTERVAL: 30000, // 30 segundos
      MIN_CLOZE_FOR_APPROVAL: 80 // Mínimo 80% del cloze para aprobar
    };
    
    this.state = {
      tema: null,
      videoIframe: null,
      videoStartTime: null,
      clozeVisible: false,
      autoSaveInterval: null,
      lastCelebrationLevel: 0
    };
    
    this.elements = {};
    this.boundMethods = {};
    
    console.log('🎮 VideoClozeModule inicializado');
    console.log(`📊 Ponderación: ${this.config.VIDEO_WEIGHT * 100}% Video + ${this.config.CLOZE_WEIGHT * 100}% Cloze`);
  }

  // ====================================
  // 🚀 INICIALIZACIÓN PRINCIPAL
  // ====================================

  async initialize(tema) {
    if (!tema) {
      console.error('❌ Error: tema requerido para inicializar VideoClozeModule');
      return false;
    }

    this.state.tema = tema;
    console.log(`🎯 Inicializando para tema: ${tema}`);

    // Verificar si hay configuración de video
    if (!window.VIDEO_CONFIG || !window.VIDEO_CONFIG[tema]) {
      console.log(`ℹ️ No hay configuración de video para: ${tema}`);
      return false;
    }

    // Cachear elementos del DOM
    this.cacheElements();
    
    // Verificar elementos esenciales
    if (!this.validateElements()) {
      console.error('❌ Elementos DOM requeridos no encontrados');
      return false;
    }

    // Configurar event listeners
    this.setupEventListeners();
    
    // Configurar botón de cloze
    await this.initializeClozeButton();
    
    // Inyectar CSS
    this.injectCSS();
    
    // Configurar integración con Firebase
    this.setupFirebaseIntegration();
    
    console.log('✅ VideoClozeModule listo para:', tema);
    return true;
  }

  cacheElements() {
    this.elements = {
      videoBackdrop: document.getElementById('videoBackdrop'),
      videoClose: document.getElementById('videoClose'),
      videoContainer: document.getElementById('videoContainer'),
      videoTopicTitle: document.getElementById('videoTopicTitle'),
      videoFrameSlot: document.getElementById('videoFrameSlot'),
      videoSheet: document.querySelector('#videoBackdrop .sheet'),
      videoBody: document.getElementById('videoBody'),
      videoClozeBtn: document.getElementById('videoClozeBtn'),
      clozeSection: document.getElementById('clozeSection'),
      goVideoBtn: document.getElementById('goVideo')
    };
  }

  validateElements() {
    const required = ['videoBackdrop', 'videoClose', 'videoContainer', 'videoFrameSlot'];
    const missing = required.filter(key => !this.elements[key]);
    
    if (missing.length > 0) {
      console.error('❌ Elementos faltantes:', missing);
      return false;
    }
    
    return true;
  }

  setupEventListeners() {
    // Bind methods para evitar problemas de contexto
    this.boundMethods = {
      openModal: this.openVideoModal.bind(this),
      closeModal: this.closeVideoModal.bind(this),
      backdropClick: this.handleBackdropClick.bind(this),
      toggleCloze: this.toggleClozeSection.bind(this),
      escapeHandler: this.handleEscapeKey.bind(this)
    };

    // Event listeners principales
    if (this.elements.goVideoBtn) {
      this.elements.goVideoBtn.addEventListener('click', this.boundMethods.openModal);
    }
    
    if (this.elements.videoClose) {
      this.elements.videoClose.addEventListener('click', this.boundMethods.closeModal);
    }
    
    if (this.elements.videoBackdrop) {
      this.elements.videoBackdrop.addEventListener('click', this.boundMethods.backdropClick);
    }
    
    if (this.elements.videoClozeBtn) {
      this.elements.videoClozeBtn.addEventListener('click', this.boundMethods.toggleCloze);
    }

    // Escape key
    document.addEventListener('keydown', this.boundMethods.escapeHandler);

    // Observer para auto-save
    this.setupModalObserver();
  }

  handleBackdropClick(e) {
    if (e.target === this.elements.videoBackdrop) {
      this.closeVideoModal();
    }
  }

  handleEscapeKey(e) {
    if (e.key === 'Escape' && this.isModalOpen()) {
      this.closeVideoModal();
    }
  }

  // ====================================
  // 🎬 GESTIÓN DEL MODAL DE VIDEO
  // ====================================

  async openVideoModal() {
    console.log('🎬 Abriendo modal de video...');
    
    const config = window.VIDEO_CONFIG[this.state.tema];
    if (!config) {
      console.error('❌ No hay configuración de video');
      return;
    }

    // Configurar información del video
    this.setupVideoInfo(config);
    
    // Aplicar layout
    this.applyHorizontalLayout();
    
    // Mostrar modal
    this.elements.videoBackdrop.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Aplicar clases específicas
    this.applyVideoClasses(config);
    
    // Crear y configurar iframe
    await this.createVideoIframe(config);
    
    // Marcar progreso inicial
    this.markVideoProgress(true, false);
    this.state.videoStartTime = Date.now();
    
    // Auto-completar video después del tiempo configurado
    this.scheduleVideoCompletion(config);
    
    // Iniciar auto-save
    this.startAutoSave();
    
    console.log('✅ Modal de video abierto');
  }

  setupVideoInfo(config) {
    if (this.elements.videoTopicTitle) {
      this.elements.videoTopicTitle.textContent = config.title;
    }
    
    const videoSegmentInfo = document.getElementById('videoSegmentInfo');
    if (videoSegmentInfo) {
      const startMin = Math.floor(config.startTime / 60);
      const startSec = String(config.startTime % 60).padStart(2, '0');
      const endMin = Math.floor(config.endTime / 60);
      const endSec = String(config.endTime % 60).padStart(2, '0');
      
      videoSegmentInfo.textContent = 
        `Segmento: ${startMin}:${startSec} - ${endMin}:${endSec} • Duración: ${config.duration} min`;
    }
  }

  applyVideoClasses(config) {
    const isShort = config.type === 'short';
    
    if (this.elements.videoContainer) {
      this.elements.videoContainer.classList.toggle('short', isShort);
    }
    
    if (this.elements.videoSheet) {
      this.elements.videoSheet.classList.toggle('short-video', isShort);
    }
  }

  async createVideoIframe(config) {
    const embedUrl = this.buildEmbedUrl(config);
    
    this.state.videoIframe = document.createElement('iframe');
    this.state.videoIframe.src = embedUrl;
    this.state.videoIframe.style.cssText = 'width: 100%; height: 100%; border: 0;';
    this.state.videoIframe.setAttribute('allowfullscreen', '');
    
    // Event listeners del iframe
    this.state.videoIframe.addEventListener('load', () => {
      console.log('✅ Video cargado exitosamente');
      this.configureVideoPlayback();
    });
    
    this.state.videoIframe.addEventListener('error', (error) => {
      console.error('❌ Error cargando video:', error);
    });
    
    // Agregar al DOM
    if (this.elements.videoFrameSlot) {
      this.elements.videoFrameSlot.innerHTML = '';
      this.elements.videoFrameSlot.appendChild(this.state.videoIframe);
    }
  }

  buildEmbedUrl(config) {
    const params = new URLSearchParams({
      start: config.startTime,
      end: config.endTime,
      autoplay: '1',
      playsinline: '1',
      rel: '0',
      modestbranding: '1',
      iv_load_policy: '3',
      enablejsapi: '1',
      loop: '1',
      playlist: config.youtubeId,
      origin: window.location.origin
    });
    
    return `https://www.youtube.com/embed/${config.youtubeId}?${params.toString()}`;
  }

  configureVideoPlayback() {
    setTimeout(() => {
      try {
        const message = { 
          event: 'command', 
          func: 'setPlaybackRate', 
          args: [1] 
          // args: [1.25] 
        };
        this.state.videoIframe?.contentWindow?.postMessage(JSON.stringify(message), '*');
        console.log(`⚡🎦🎦🎦🎦🎦🎦🎦 Velocidad configurada a ${args}x`);
      } catch (e) {
        console.log('⚠️ Error configurando velocidad:', e);
      }
    }, 2000);
  }

  scheduleVideoCompletion(config) {
    const segmentDuration = (config.endTime - config.startTime) * 1000;
    setTimeout(() => {
      if (this.state.videoIframe && this.isModalOpen()) {
        this.markVideoProgress(true, true);
        console.log('✅ Video auto-completado');
      }
    }, segmentDuration);
  }

  closeVideoModal() {
    console.log('🔽 Cerrando modal de video...');
    
    // Ocultar modal
    this.elements.videoBackdrop.style.display = 'none';
    document.body.style.overflow = '';
    
    // Limpiar clases
    this.cleanupVideoClasses();
    
    // Calcular tiempo de visualización
    this.calculateWatchTime();
    
    // Restaurar layout
    this.restoreOriginalLayout();
    
    // Limpiar iframe
    this.cleanupVideoIframe();
    
    // Detener auto-save
    this.stopAutoSave();
    
    // Guardar progreso final
    setTimeout(() => {
      this.saveCombinedProgress();
    }, 500);
    
    // Actualizar UI
    this.updateProgressUI();
    
    console.log('✅ Modal cerrado');
  }

  cleanupVideoClasses() {
    this.elements.videoContainer?.classList.remove('short');
    this.elements.videoSheet?.classList.remove('short-video', 'horizontal-layout');
  }

  calculateWatchTime() {
    if (this.state.videoStartTime) {
      const watchTime = Math.round((Date.now() - this.state.videoStartTime) / 1000);
      const key = this.getStorageKey('video');
      const current = this.readJSON(key, { watched: false, watchTime: 0, completed: false });
      current.watchTime = Math.max(current.watchTime, watchTime);
      sessionStorage.setItem(key, JSON.stringify(current));
      this.state.videoStartTime = null;
    }
  }

  cleanupVideoIframe() {
    if (this.elements.videoFrameSlot) {
      this.elements.videoFrameSlot.innerHTML = '';
    }
    this.state.videoIframe = null;
  }

  isModalOpen() {
    return this.elements.videoBackdrop && 
           this.elements.videoBackdrop.style.display !== 'none';
  }

  // ====================================
  // 🎨 LAYOUT HORIZONTAL
  // ====================================

  applyHorizontalLayout() {
    if (!this.elements.videoSheet || !this.elements.videoBody) return;
    
    this.elements.videoSheet.classList.add('horizontal-layout');
    
    // Si ya está aplicado, salir
    if (this.elements.videoBody.querySelector('.video-cloze-container')) return;
    
    console.log('🎨 Aplicando layout horizontal');
    
    // Crear nueva estructura
    this.elements.videoBody.innerHTML = `
      <div class="video-cloze-container video-only">
        <div class="video-section">
          <div class="video-info-wrapper"></div>
          <div class="video-container-wrapper"></div>
        </div>
        <div class="cloze-section" id="clozeSection" style="display: none;">
          <div class="cloze-header">
            <h3>🧩 Ejercicio de comprensión</h3>
            <p>Completa mientras ves el video o al terminar</p>
          </div>
          <div class="cloze-content" id="clozeContent"></div>
        </div>
      </div>
    `;
    
    // Restaurar elementos originales
    this.restoreVideoElements();
    
    // Actualizar referencias
    this.updateElementReferences();
  }

  restoreVideoElements() {
    // Buscar elementos originales que puedan existir
    const videoInfo = document.querySelector('.video-info');
    const videoContainer = document.getElementById('videoContainer');
    
    if (videoInfo) {
      const wrapper = this.elements.videoBody.querySelector('.video-info-wrapper');
      if (wrapper) wrapper.appendChild(videoInfo);
    }
    
    if (videoContainer) {
      const wrapper = this.elements.videoBody.querySelector('.video-container-wrapper');
      if (wrapper) wrapper.appendChild(videoContainer);
    }
  }

  updateElementReferences() {
    // Actualizar referencias a elementos que pueden haber cambiado
    this.elements.clozeSection = document.getElementById('clozeSection');
    this.elements.videoContainer = document.getElementById('videoContainer');
    this.elements.videoFrameSlot = document.getElementById('videoFrameSlot');
  }

  restoreOriginalLayout() {
    if (!this.elements.videoBody) return;
    
    const container = this.elements.videoBody.querySelector('.video-cloze-container');
    if (!container) return;
    
    console.log('🔄 Restaurando layout original');
    
    // Restaurar estructura original
    this.elements.videoBody.innerHTML = `
      <div class="video-info" style="display: none;">
        <h3 id="videoTopicTitleInfo">Cargando video...</h3>
        <p id="videoSegmentInfo">Cargando información...</p>
      </div>
      <div class="video-container" id="videoContainer">
        <div id="videoFrameSlot"></div>
      </div>
      <div id="clozeRoot" style="display:none; padding:16px 20px; border-top:1px solid #223059;"></div>
      <div id="clozeSection" style="display:none;"></div>
    `;
    
    // Actualizar referencias
    this.updateElementReferences();
  }

  // ====================================
  // 🧩 SISTEMA DE CLOZE TEST MEJORADO
  // ====================================

  async initializeClozeButton() {
    if (!this.elements.videoClozeBtn) return;
    
    try {
      const clozeData = await this.loadClozeModule();
      
      if (clozeData && clozeData.items && clozeData.items.length > 0) {
        console.log('✅ Datos de cloze encontrados:', clozeData.items.length, 'items');
        this.elements.videoClozeBtn.style.display = 'inline-block';
        this.elements.videoClozeBtn.textContent = '🧩 Ejercicio';
        this.elements.videoClozeBtn.classList.add('cloze-toggle-btn');
      } else {
        console.log('ℹ️ No hay datos de cloze para:', this.state.tema);
        this.elements.videoClozeBtn.style.display = 'none';
      }
    } catch (error) {
      console.error('❌ Error inicializando cloze:', error);
      this.elements.videoClozeBtn.style.display = 'none';
    }
  }

  async loadClozeModule() {
    const url = `themes/${this.state.tema}/cloze_test.js`;
    
    try {
      const mod = await import(/* @vite-ignore */ url);
      if (mod?.default) return mod.default;
      if (mod?.CLOZE_TEST) return mod.CLOZE_TEST;
      if (window.CLOZE_TEST) return window.CLOZE_TEST;
    } catch (e) {
      console.log('Import falló, usando fallback <script>:', e);
    }
    
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = url;
      script.onload = () => resolve(window.CLOZE_TEST || null);
      script.onerror = () => resolve(null);
      document.head.appendChild(script);
    });
  }

  toggleClozeSection() {
    if (!this.elements.clozeSection || !this.elements.videoClozeBtn) return;
    
    const container = document.querySelector('.video-cloze-container');
    
    if (this.state.clozeVisible) {
      // Ocultar cloze
      this.elements.clozeSection.classList.remove('visible');
      this.elements.clozeSection.style.display = 'none';
      
      this.elements.videoClozeBtn.textContent = '🧩 Ejercicio';
      this.elements.videoClozeBtn.classList.remove('active');
      
      container?.classList.add('video-only');
      this.state.clozeVisible = false;
      
      console.log('🔽 Cloze ocultado');
    } else {
      // Mostrar cloze
      this.elements.clozeSection.style.display = 'flex';
      this.elements.clozeSection.classList.add('visible');
      
      this.elements.videoClozeBtn.textContent = '🔼 Ocultar ejercicio';
      this.elements.videoClozeBtn.classList.add('active');
      
      container?.classList.remove('video-only');
      this.state.clozeVisible = true;
      
      console.log('🧩 Cloze mostrado');
      
      // Cargar contenido si no existe
      if (!this.elements.clozeSection.querySelector('.cloze-item')) {
        this.loadAndRenderCloze();
      }
    }
  }

  async loadAndRenderCloze() {
    try {
      const clozeData = await this.loadClozeModule();
      if (clozeData) {
        const container = document.getElementById('clozeContent');
        if (container) {
          this.renderClozeTest(container, clozeData);
        }
      }
    } catch (error) {
      console.error('❌ Error renderizando cloze:', error);
    }
  }

  renderClozeTest(container, setup) {
    container.innerHTML = '';
    
    const items = setup.items || [];
    if (items.length === 0) {
      container.innerHTML = '<p style="color: #7b88a8; text-align: center; padding: 40px;">No hay ejercicios disponibles.</p>';
      return;
    }
    
    console.log('🎯 Renderizando cloze con', items.length, 'items');

    // Estado del cloze
    let state = this.readClozeState();
    if (!state.total || state.total !== items.length) {
      state = { 
        total: items.length, 
        solved: 0, 
        completed: false, 
        hits: {}, 
        hintLevels: {},
        celebrationLevel: 0 
      };
    }

    // Progreso general
    this.renderProgressHeader(container, state);

    // Funciones de utilidad
    const normalize = (str) => String(str || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    const validateAnswer = (userAnswer, acceptedAnswers) => {
      const normalizedUser = normalize(userAnswer);
      if (!normalizedUser) return false;

      for (const accepted of acceptedAnswers) {
        const normalizedAccepted = normalize(accepted);
        
        if (normalizedUser === normalizedAccepted) return true;
        
        if (normalizedAccepted.includes(normalizedUser) || normalizedUser.includes(normalizedAccepted)) {
          const shorter = Math.min(normalizedUser.length, normalizedAccepted.length);
          const longer = Math.max(normalizedUser.length, normalizedAccepted.length);
          if (shorter / longer > 0.75) return true;
        }
      }
      
      return false;
    };

    // Renderizar items
    items.forEach((item, index) => {
      const itemElement = this.createClozeItem(item, index, state, setup, validateAnswer);
      container.appendChild(itemElement);
    });

    console.log('✨ Cloze renderizado completado');
  }

  renderProgressHeader(container, state) {
    const percentage = Math.round((state.solved / state.total) * 100);
    
    const progressContainer = document.createElement('div');
    progressContainer.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; padding: 16px; background: rgba(107,124,255,.06); border: 1px solid #223059; border-radius: 12px;">
        <span style="font-weight: 600;">Progreso del ejercicio:</span>
        <span id="cloze-progress-text">${state.solved}/${state.total} (${percentage}%)</span>
      </div>
      <div style="width: 100%; height: 8px; background: #0a1020; border-radius: 4px; overflow: hidden; border: 1px solid #1f2a4a; margin-bottom: 24px;">
        <div id="cloze-progress-bar" style="height: 100%; width: ${percentage}%; background: linear-gradient(90deg, #6b7cff, #9b6bff); transition: width 0.6s ease;"></div>
      </div>
    `;
    container.appendChild(progressContainer);
  }

  createClozeItem(item, index, state, setup, validateAnswer) {
    const itemElement = document.createElement('div');
    itemElement.className = 'cloze-item';
    const itemId = item.id || `q${index + 1}`;
    
    if (state.hits[itemId]) {
      itemElement.classList.add('completed');
    }

    // Crear contenido del texto con inputs
    const textContainer = this.createTextContainer(item, itemId);
    itemElement.appendChild(textContainer);

    // Botones de acción
    const actionsContainer = this.createActionButtons(item, itemId, setup);
    itemElement.appendChild(actionsContainer);

    // Contenedor de feedback
    const feedbackContainer = document.createElement('div');
    feedbackContainer.style.cssText = 'font-size: 13px; font-weight: 500; min-height: 18px;';
    itemElement.appendChild(feedbackContainer);

    // Contenedor de pistas
    const hintContainer = document.createElement('div');
    hintContainer.className = 'hint-container';
    hintContainer.style.cssText = 'margin-top: 8px; padding: 8px 12px; background: rgba(245,158,11,.1); border-left: 3px solid #f59e0b; border-radius: 4px; display: none;';
    itemElement.appendChild(hintContainer);

    // Configurar validación
    this.setupItemValidation(itemElement, itemId, item, state, validateAnswer, feedbackContainer);

    return itemElement;
  }

  createTextContainer(item, itemId) {
    const textContainer = document.createElement('div');
    textContainer.style.cssText = 'line-height: 1.7; font-size: 15px; margin-bottom: 16px;';
    
    const inputs = [];
    const regex = /\[\[([^\]]+)\]\]/g;
    let lastIndex = 0;
    let match;
    let inputIndex = 0;

    while ((match = regex.exec(item.text)) !== null) {
      // Texto antes del placeholder
      const beforeText = item.text.slice(lastIndex, match.index);
      if (beforeText) textContainer.appendChild(document.createTextNode(beforeText));

      // Input
      const answers = match[1].split('|').map(a => a.trim());
      const input = document.createElement('input');
      input.type = 'text';
      input.placeholder = `respuesta ${inputIndex + 1}`;
      input.dataset.answers = JSON.stringify(answers);
      input.dataset.itemId = itemId;
      
      inputs.push({ element: input, answers });
      textContainer.appendChild(input);
      
      inputIndex++;
      lastIndex = regex.lastIndex;
    }

    // Texto restante
    const remainingText = item.text.slice(lastIndex);
    if (remainingText) textContainer.appendChild(document.createTextNode(remainingText));

    // Guardar referencia a inputs
    textContainer._inputs = inputs;
    
    return textContainer;
  }

  createActionButtons(item, itemId, setup) {
    const actionsContainer = document.createElement('div');
    actionsContainer.className = 'actions';
    actionsContainer.style.cssText = 'display: flex; gap: 10px; margin-bottom: 12px;';
    
    // Botón de pista
    const hintButton = document.createElement('button');
    hintButton.className = 'btn';
    hintButton.textContent = '💡 Pista';
    hintButton.style.cssText = 'background: linear-gradient(90deg, #f59e0b, #fb923c); color: white; border: none;';
    
    // Botón para ir al video
    const videoButton = document.createElement('button');
    videoButton.className = 'btn';
    videoButton.textContent = '🎬 Ver video';
    videoButton.style.cssText = 'background: linear-gradient(90deg, #ef4444, #dc2626); color: white; border: none;';
    
    // Event listeners
    hintButton.addEventListener('click', () => this.showHint(itemId, setup, hintButton, actionsContainer.parentNode));
    videoButton.addEventListener('click', () => this.goToVideoSegment(itemId, setup));
    
    actionsContainer.appendChild(hintButton);
    actionsContainer.appendChild(videoButton);
    
    return actionsContainer;
  }

  setupItemValidation(itemElement, itemId, item, state, validateAnswer, feedbackContainer) {
    const textContainer = itemElement.querySelector('div');
    const inputs = textContainer._inputs || [];

    const checkAnswers = () => {
      let correctCount = 0;
      
      inputs.forEach(({ element, answers }) => {
        const userAnswer = element.value.trim();
        const isCorrect = validateAnswer(userAnswer, answers);
        
        element.classList.remove('ok', 'err');
        if (userAnswer) {
          element.classList.add(isCorrect ? 'ok' : 'err');
          if (isCorrect) correctCount++;
        }
      });

      const allCorrect = correctCount === inputs.length && inputs.length > 0;
      
      if (allCorrect && !state.hits[itemId]) {
        // ¡NUEVO ITEM COMPLETADO!
        state.hits[itemId] = true;
        state.solved = Object.keys(state.hits).length;
        state.completed = state.solved >= state.total;
        
        this.saveClozeState(state);
        
        itemElement.classList.add('completed');
        feedbackContainer.innerHTML = `<span style="color: #10b981;">✅ ${item.feedbackOK || '¡Perfecto! Item completado'}</span>`;
        
        // 🎉 CELEBRACIÓN POR ITEM INDIVIDUAL
        this.celebrateItemCompletion(itemId, state);
        
        this.updateClozeProgress();
        this.updateProgressUI();
        
        console.log('✅ Item completado:', itemId);
      } else if (inputs.length > 0) {
        const partial = correctCount > 0 ? ` (${correctCount}/${inputs.length} correctas)` : '';
        feedbackContainer.innerHTML = `<span style="color: #ef4444;">❌ ${item.feedbackKO || 'Revisa tus respuestas'}${partial}</span>`;
      }
    };

    // Auto-verificación con debounce
    inputs.forEach(({ element }) => {
      element.addEventListener('input', () => {
        clearTimeout(element._autoCheckTimeout);
        element._autoCheckTimeout = setTimeout(checkAnswers, 1000);
      });
      
      element.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          checkAnswers();
        }
      });
    });
  }

  // ====================================
  // 🎉 SISTEMA DE CELEBRACIONES MEJORADO
  // ====================================

  celebrateItemCompletion(itemId, state) {
    console.log(`🎉 Celebrando item completado: ${itemId}`);
    
    // Celebración micro por item
    this.showMiniCelebration();
    
    // Verificar celebraciones por porcentaje
    const percentage = Math.round((state.solved / state.total) * 100);
    this.checkPercentageCelebrations(percentage, state);
    
    // Si completó el 100%, celebración épica
    if (state.completed && percentage >= 100) {
      this.celebrateFullCompletion();
    }
  }

  showMiniCelebration() {
    // Celebración sutil por cada item
    if (typeof window.Celebration?.show === 'function') {
      window.Celebration.show({ 
        activity: 'cloze-item', 
        topic: this.state.tema, 
        emojis: ['💡', '✨', '👏'],
        duration: 1000,
        intensity: 'low'
      });
    }
  }

  checkPercentageCelebrations(percentage, state) {
    const thresholds = this.config.CELEBRATION_THRESHOLDS;
    
    for (const threshold of thresholds) {
      if (percentage >= threshold && (state.celebrationLevel || 0) < threshold) {
        state.celebrationLevel = threshold;
        this.saveClozeState(state);
        
        if (threshold < 100) {
          this.celebrateProgress(threshold);
        }
        break;
      }
    }
  }

  celebrateProgress(percentage) {
    console.log(`🎊 Celebrando progreso: ${percentage}%`);
    
    if (typeof window.Celebration?.show === 'function') {
      let emojis, intensity;
      
      switch (percentage) {
        case 25:
          emojis = ['🌟', '🚀', '💪'];
          intensity = 'medium';
          break;
        case 50:
          emojis = ['🎯', '⚡', '🔥'];
          intensity = 'medium';
          break;
        case 75:
          emojis = ['🏆', '👑', '💫'];
          intensity = 'high';
          break;
        default:
          emojis = ['✨', '🎉', '🌟'];
          intensity = 'medium';
      }
      
      window.Celebration.show({ 
        activity: 'cloze-progress', 
        topic: this.state.tema, 
        emojis: emojis,
        duration: 2000,
        intensity: intensity
      });
    }
  }

  celebrateFullCompletion() {
    console.log('🏆 ¡CLOZE COMPLETADO AL 100%!');
    
    // Celebración épica
    if (typeof window.Celebration?.show === 'function') {
      window.Celebration.show({ 
        activity: 'cloze-complete', 
        topic: this.state.tema, 
        emojis: ['🏆', '🎉', '🌟', '👑', '💫'],
        duration: 5000,
        intensity: 'epic'
      });
    }
    
    // También verificar si se completó todo (video + cloze)
    setTimeout(() => {
      const combinedProgress = this.calculateCombinedProgress();
      if (combinedProgress.totalCompleted) {
        this.celebrateVideoAndClozeCompletion();
      }
    }, 2000);
  }

  celebrateVideoAndClozeCompletion() {
    console.log('👑 ¡VIDEO + CLOZE COMPLETADOS!');
    
    if (typeof window.Celebration?.show === 'function') {
      window.Celebration.show({ 
        activity: 'video-cloze-complete', 
        topic: this.state.tema, 
        emojis: ['👑', '🏆', '🎉', '🌟', '💎', '🚀'],
        duration: 7000,
        intensity: 'legendary'
      });
    }
  }

  // ====================================
  // 💡 SISTEMA DE PISTAS
  // ====================================

  showHint(itemId, setup, hintButton, itemElement) {
    const state = this.readClozeState();
    const currentLevel = state.hintLevels[itemId] || 0;
    
    let hintData = null;
    if (setup.getHintForItem) {
      hintData = setup.getHintForItem(itemId, currentLevel);
    }
    
    const hintContainer = itemElement.querySelector('.hint-container');
    
    if (hintData) {
      hintContainer.innerHTML = `
        <div style="color: #f59e0b; font-weight: 600; margin-bottom: 4px;">
          Pista ${currentLevel + 1}:
        </div>
        <div style="color: #7b88a8;">
          ${hintData.hint}
        </div>
      `;
      hintContainer.style.display = 'block';
      
      // Incrementar nivel de pista
      state.hintLevels[itemId] = currentLevel + 1;
      this.saveClozeState(state);
      
      // Actualizar botón
      if (hintData.hasMore) {
        hintButton.textContent = `💡 Pista ${currentLevel + 2}`;
      } else {
        hintButton.textContent = '💡 Sin más pistas';
        hintButton.disabled = true;
        hintButton.style.opacity = '0.5';
      }
      
      console.log(`💡 Pista nivel ${currentLevel + 1} mostrada para ${itemId}`);
    } else {
      hintContainer.innerHTML = `
        <div style="color: #7b88a8;">
          No hay más pistas disponibles para este item.
        </div>
      `;
      hintContainer.style.display = 'block';
      hintButton.disabled = true;
      hintButton.style.opacity = '0.5';
    }
  }

  goToVideoSegment(itemId, setup) {
    console.log(`🎬 Navegando al segmento para ${itemId}`);
    
    const item = setup.items.find(i => i.id === itemId);
    if (!item || !item.videoSegment) {
      console.warn('⚠️ No hay segmento de video para este item');
      return;
    }
    
    const config = window.VIDEO_CONFIG[this.state.tema];
    if (!config) {
      console.warn('⚠️ No hay configuración de video');
      return;
    }
    
    // Calcular tiempo absoluto
    const absoluteTime = config.startTime + item.videoSegment.start;
    
    console.log(`🎯 Navegando a ${absoluteTime}s`);
    
    // Hacer seek si el iframe está disponible
    if (this.state.videoIframe && this.state.videoIframe.contentWindow) {
      try {
        const message = {
          event: 'command',
          func: 'seekTo',
          args: [absoluteTime, true]
        };
        this.state.videoIframe.contentWindow.postMessage(JSON.stringify(message), '*');
      } catch (error) {
        console.log('⚠️ Error haciendo seek:', error);
      }
    }
  }

  // ====================================
  // 📊 PROGRESO Y FIREBASE
  // ====================================

  calculateCombinedProgress() {
    const videoProgress = this.getCurrentVideoProgress();
    const clozeProgress = this.getCurrentClozeProgress();
    
    const videoScore = videoProgress.percentage;
    const clozeScore = clozeProgress.percentage;
    
    // NUEVA PONDERACIÓN: 10% video + 90% cloze
    const combinedPercentage = Math.round(
      (videoScore * this.config.VIDEO_WEIGHT) + (clozeScore * this.config.CLOZE_WEIGHT)
    );
    
    // Para aprobar, el cloze debe estar al menos al 80%
    const clozePassable = clozeScore >= this.config.MIN_CLOZE_FOR_APPROVAL;
    const canPass = clozePassable; // El video ya no es requisito crítico
    
    const result = {
      videoPercentage: videoScore,
      clozePercentage: clozeScore,
      combinedPercentage: combinedPercentage,
      videoCompleted: videoProgress.completed,
      clozeCompleted: clozeProgress.completed,
      totalCompleted: videoProgress.completed && clozeProgress.completed,
      canPass: canPass,
      requiresCloze: !clozePassable,
      totalTimeSpent: Math.max(videoProgress.watchTime || 0, 180),
      clozeItems: {
        total: clozeProgress.total,
        solved: clozeProgress.solved,
        hintsUsed: Object.keys(clozeProgress.hintLevels || {}).length
      }
    };
    
    console.log(`📊 Progreso (10% video + 90% cloze): Video ${videoScore}% + Cloze ${clozeScore}% = ${combinedPercentage}%`);
    
    return result;
  }

  getCurrentVideoProgress() {
    const videoKey = this.getStorageKey('video');
    try {
      const data = JSON.parse(sessionStorage.getItem(videoKey) || '{}');
      return {
        watched: data.watched || false,
        watchTime: data.watchTime || 0,
        completed: data.completed || false,
        percentage: data.completed ? 100 : (data.watched ? 30 : 0)
      };
    } catch (e) {
      return { watched: false, watchTime: 0, completed: false, percentage: 0 };
    }
  }

  getCurrentClozeProgress() {
    const state = this.readClozeState();
    return {
      total: state.total || 0,
      solved: state.solved || 0,
      completed: state.completed || false,
      percentage: state.total > 0 ? Math.round((state.solved / state.total) * 100) : 0,
      hits: state.hits || {},
      hintLevels: state.hintLevels || {}
    };
  }

  async saveCombinedProgress() {
    if (typeof window.saveVideoProgress !== 'function') {
      console.warn('⚠️ Función saveVideoProgress no disponible');
      return false;
    }
    
    const progress = this.calculateCombinedProgress();
    
    try {
      console.log(`💾 Guardando progreso: ${progress.combinedPercentage}% (Video: ${progress.videoPercentage}%, Cloze: ${progress.clozePercentage}%)`);
      
      const success = await window.saveVideoProgress(
        progress.totalTimeSpent,
        600, // duración estimada
        progress.totalCompleted
      );
      
      if (success) {
        // Actualizar estado de video en sessionStorage
        const videoKey = this.getStorageKey('video');
        const currentVideo = this.readJSON(videoKey, {});
        
        const updatedVideo = {
          ...currentVideo,
          percentage: progress.combinedPercentage,
          watched: progress.videoPercentage > 0,
          completed: progress.totalCompleted,
          watchTime: progress.totalTimeSpent,
          clozeCompleted: progress.clozeCompleted,
          canPass: progress.canPass,
          requiresCloze: progress.requiresCloze,
          lastSync: new Date().toISOString(),
          syncedWithFirebase: true
        };
        
        sessionStorage.setItem(videoKey, JSON.stringify(updatedVideo));
        
        console.log(`✅ Progreso guardado: ${progress.combinedPercentage}%`);
        
        // Forzar actualización de UI
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

  markVideoProgress(watched, completed) {
    const key = this.getStorageKey('video');
    const state = { watched, completed, watchTime: 0 };
    sessionStorage.setItem(key, JSON.stringify(state));
    this.updateProgressUI();
  }

  updateClozeProgress() {
    const currentState = this.readClozeState();
    const progressText = document.getElementById('cloze-progress-text');
    const progressBar = document.getElementById('cloze-progress-bar');
    
    if (progressText && progressBar) {
      const percentage = Math.round((currentState.solved / currentState.total) * 100);
      progressText.textContent = `${currentState.solved}/${currentState.total} (${percentage}%)`;
      progressBar.style.width = `${percentage}%`;
      
      if (currentState.completed) {
        progressText.innerHTML += ' <span style="color: #10b981;">🎉</span>';
      }
    }
  }

  updateProgressUI() {
    // Actualizar UI principal si la función existe
    if (typeof window.renderProgressUI === 'function') {
      window.renderProgressUI();
    }
  }

  // ====================================
  // 🔧 AUTO-SAVE Y UTILIDADES
  // ====================================

  setupModalObserver() {
    if (!this.elements.videoBackdrop) return;
    
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'style') {
          const isVisible = this.elements.videoBackdrop.style.display !== 'none';
          if (isVisible) {
            this.startAutoSave();
          } else {
            this.stopAutoSave();
            setTimeout(() => {
              this.saveCombinedProgress();
            }, 1000);
          }
        }
      });
    });
    
    observer.observe(this.elements.videoBackdrop, { attributes: true });
  }

  startAutoSave() {
    if (this.state.autoSaveInterval) return;
    
    console.log('⏰ Iniciando auto-guardado cada 30 segundos...');
    this.state.autoSaveInterval = setInterval(() => {
      if (this.isModalOpen()) {
        console.log('💾 Auto-guardado...');
        this.saveCombinedProgress();
      }
    }, this.config.AUTO_SAVE_INTERVAL);
  }

  stopAutoSave() {
    if (this.state.autoSaveInterval) {
      console.log('⏹️ Deteniendo auto-guardado...');
      clearInterval(this.state.autoSaveInterval);
      this.state.autoSaveInterval = null;
    }
  }

  setupFirebaseIntegration() {
    // Mejorar funciones existentes si están disponibles
    this.enhanceExistingFunctions();
  }

  enhanceExistingFunctions() {
    // Mejorar saveCloze si existe
    const originalSaveCloze = window.saveCloze;
    if (typeof originalSaveCloze === 'function') {
      window.saveCloze = (state) => {
        originalSaveCloze(state);
        console.log(`🧩 Cloze actualizado: ${state.solved || 0}/${state.total || 0} items`);
        setTimeout(() => {
          this.saveCombinedProgress();
        }, 100);
      };
    }

    // Mejorar markVideoProgress si existe
    const originalMarkVideoProgress = window.markVideoProgress;
    if (typeof originalMarkVideoProgress === 'function') {
      window.markVideoProgress = (watched, completed) => {
        originalMarkVideoProgress(watched, completed);
        console.log(`🎬 Video progreso: watched=${watched}, completed=${completed}`);
        setTimeout(() => {
          this.saveCombinedProgress();
        }, 100);
      };
    }
  }

  // ====================================
  // 🗃️ GESTIÓN DE STORAGE
  // ====================================

  getStorageKey(type) {
    return `tema.${this.state.tema}.${type}`;
  }

  readJSON(key, fallback = {}) {
    try {
      return JSON.parse(sessionStorage.getItem(key)) || fallback;
    } catch {
      return fallback;
    }
  }

  readClozeState() {
    const key = this.getStorageKey('cloze');
    try {
      const data = this.readJSON(key, {});
      if (!data.hintLevels) data.hintLevels = {};
      if (!data.hits) data.hits = {};
      return data;
    } catch {
      return { total: 0, solved: 0, completed: false, hits: {}, hintLevels: {} };
    }
  }

  saveClozeState(state) {
    const key = this.getStorageKey('cloze');
    sessionStorage.setItem(key, JSON.stringify(state));
  }

  // ====================================
  // 🎨 CSS INJECTION
  // ====================================

  injectCSS() {
    if (document.getElementById('video-cloze-module-css')) return;
    
    const style = document.createElement('style');
    style.id = 'video-cloze-module-css';
    style.textContent = `
      .sheet.horizontal-layout {
        width: min(1200px, 95vw) !important;
        max-height: 90vh !important;
      }
      
      .video-cloze-container {
        display: flex;
        height: calc(90vh - 56px);
        min-height: 0;
        flex-direction: column;
      }
      
      .video-section {
        display: flex;
        flex-direction: column;
        border-right: 1px solid #223059;
        min-height: 0;
      }
      
      .video-info-wrapper {
        flex: 0 0 auto;
      }
      
      .video-container-wrapper {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #000;
        min-height: 0;
      }
      
      .cloze-section {
        flex: 1;
        display: none;
        flex-direction: column;
        background: linear-gradient(180deg, #0f1629, #0b1220);
        min-height: 0;
      }
      
      .cloze-section.visible {
        display: flex;
      }
      
      .cloze-header {
        padding: 20px 24px 16px;
        border-bottom: 1px solid #223059;
        background: linear-gradient(135deg, rgba(107,124,255,.06), rgba(155,107,255,.03));
        flex: 0 0 auto;
      }
      
      .cloze-header h3 {
        margin: 0 0 8px;
        font-size: 18px;
        color: #eaf0ff;
      }
      
      .cloze-header p {
        margin: 0;
        font-size: 14px;
        color: #7b88a8;
      }
      
      .cloze-content {
        flex: 1;
        padding: 20px 24px;
        overflow-y: auto;
        min-height: 0;
      }
      
      .video-only .video-section {
        flex: 1;
      }
      
      @media (max-width: 1000px) {
        .video-cloze-container {
          flex-direction: column;
        }
        
        .video-section {
          border-right: none;
          border-bottom: 1px solid #223059;
        }
        
        .cloze-section {
          flex: 1;
        }
      }
      
      .cloze-content .cloze-item {
        margin: 20px 0;
        padding: 20px;
        background: linear-gradient(135deg, #0f1629, #0b1220);
        border: 1px solid #1f2a4a;
        border-radius: 14px;
        transition: all 0.3s ease;
      }
      
      .cloze-content .cloze-item:hover {
        border-color: #2a3763;
        transform: translateY(-1px);
      }
      
      .cloze-content .cloze-item.completed {
        border-color: #10b981;
        background: linear-gradient(135deg, #0f1629, rgba(16, 185, 129, 0.05));
      }
      
      .cloze-content input[type="text"] {
        min-width: 120px;
        padding: 4px;
        margin: 2px;
        background: #0b1220;
        border: 1px solid #32406a;
        border-radius: 6px;
        color: #eaf0ff;
        font-size: 14px;
        transition: all 0.3s ease;
        width: 8rem;
      }
      
      .cloze-content input[type="text"]:focus {
        outline: none;
        border-color: #6b7cff;
        box-shadow: 0 0 0 2px rgba(107,124,255,.2);
      }
      
      .cloze-content .ok {
        border-color: #10b981 !important;
        background: rgba(16, 185, 129, 0.1) !important;
      }
      
      .cloze-content .err {
        border-color: #ef4444 !important;
        background: rgba(239, 68, 68, 0.1) !important;
      }
      
      .cloze-toggle-btn {
        background: linear-gradient(90deg, #6b7cff, #9b6bff) !important;
        color: white !important;
      }
      
      .cloze-toggle-btn.active {
        background: linear-gradient(90deg, #10b981, #059669) !important;
      }
    `;
    
    document.head.appendChild(style);
  }

  // ====================================
  // 🔧 API PÚBLICA
  // ====================================

  // Funciones para usar desde tema.html
  getAPI() {
    return {
      initialize: this.initialize.bind(this),
      openModal: this.openVideoModal.bind(this),
      closeModal: this.closeVideoModal.bind(this),
      getProgress: this.calculateCombinedProgress.bind(this),
      saveProgress: this.saveCombinedProgress.bind(this),
      isModalOpen: this.isModalOpen.bind(this),
      
      // Funciones de diagnóstico
      checkStatus: () => {
        console.log('🔍 === ESTADO VIDEO + CLOZE ===');
        const progress = this.calculateCombinedProgress();
        console.log(`🎬 Video: ${progress.videoPercentage}%`);
        console.log(`🧩 Cloze: ${progress.clozePercentage}%`);
        console.log(`📊 Combinado: ${progress.combinedPercentage}%`);
        console.log(`✅ Puede aprobar: ${progress.canPass ? 'Sí' : 'No'}`);
        console.log(`⚠️ Requiere cloze: ${progress.requiresCloze ? 'Sí' : 'No'}`);
        return progress;
      },
      
      forceSave: this.saveCombinedProgress.bind(this),
      
      reset: () => {
        const keys = [
          this.getStorageKey('video'),
          this.getStorageKey('cloze')
        ];
        keys.forEach(key => sessionStorage.removeItem(key));
        console.log('🗑️ Progreso reseteado');
      }
    };
  }
}

// ====================================
// 🌐 INICIALIZACIÓN GLOBAL
// ====================================

// Crear instancia global
window.VideoClozeModule = window.VideoClozeModule || new VideoClozeModule();

// Auto-inicialización cuando se carga el módulo
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 VideoClozeModule listo para inicialización');
});

console.log('📦 Módulo VideoClozeModule cargado');
console.log('🎯 Nueva ponderación: 10% Video + 90% Cloze');
console.log('📚 Cloze es OBLIGATORIO para aprobar (mínimo 80%)');

// Export para usar como módulo ES6 si se necesita
export default VideoClozeModule;