/* readaloud-modal-fallback.js - Sistema con fallbacks robustos
 * Versión: 1.2 - Con alternativas cuando falla el reconocimiento de voz
 */

(function() {
    'use strict';

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    class ReadAloudModalSystem {
        constructor(modalElement, concept, options = {}) {
            this.modalElement = modalElement;
            this.concept = concept;
            this.options = {
                threshold: 0.85,
                lang: 'es-AR',
                fallbackMode: true, // Permitir modo fallback
                minReadingTime: 8000, // 8 segundos mínimo
                ...options
            };
            
            this.isActive = false;
            this.recognizedWords = new Set();
            this.tokens = [];
            this.currentProgress = 0;
            this.recognition = null;
            this.onCompleteCallback = options.onComplete;
            this.fallbackTimer = null;
            this.startTime = null;
            this.speechAvailable = !!SpeechRecognition;
            
            console.log('[ReadAloudModal] Inicializando para concepto:', concept.term);
            console.log('[ReadAloudModal] Reconocimiento de voz disponible:', this.speechAvailable);
            this.init();
        }

        init() {
            this.setupModalContent();
            this.setupControls();
            
            if (this.speechAvailable) {
                this.setupRecognition();
            }
            
            this.tokenizeContent();
        }

        setupModalContent() {
            const meaningTitle = this.modalElement.querySelector('#meaning-title');
            const meaningBody = this.modalElement.querySelector('#meaning-body');
            
            if (meaningTitle) {
                meaningTitle.innerHTML = `
                    <div class="concept-title">
                        <span class="concept-icon">📖</span>
                        <span class="concept-term">${this.escapeHtml(this.concept.term)}</span>
                        <span class="concept-badge">Lectura Obligatoria</span>
                    </div>
                `;
            }

            if (meaningBody) {
                meaningBody.innerHTML = `
                    <div class="concept-content">
                        <div class="readaloud-text" id="modal-readaloud-content">
                            ${this.escapeHtml(this.concept.meaning)}
                        </div>
                        
                        <div class="reading-controls">
                            <div class="reading-progress">
                                <div class="progress-bar-reading">
                                    <div class="progress-fill-reading" id="modal-progress-fill"></div>
                                </div>
                                <div class="progress-text-reading" id="modal-progress-text">0% leído</div>
                            </div>
                            
                            ${this.speechAvailable ? `
                                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                                <button class="mic-button" id="modal-mic-button">
                                    <span class="mic-icon">🎤</span>
                                    <span class="mic-text">Leer</span>
                                </button>
                                
                                <div class="fallback-section">
                                    <button class="fallback-button" id="modal-fallback-button">
                                        <span class="fallback-icon">🤫</span>
                                        <span class="fallback-text">En Silencio</span>
                                    </button>
                                </div>
                                </div>
                            ` : `
                                <button class="fallback-button primary" id="modal-fallback-button">
                                    <span class="fallback-icon">⏱️</span>
                                    <span class="fallback-text">Comenzar Lectura (8 seg mín.)</span>
                                </button>
                                <div class="no-speech-notice">
                                    ℹ️ Reconocimiento de voz no disponible. Usa modo temporizador.
                                </div>
                            `}
                            
                            <div class="reading-status" id="modal-reading-status">
                                ${this.speechAvailable ? 
                                    'Elige el método de lectura que prefieras' : 
                                    'Presiona para comenzar lectura con temporizador'
                                }
                            </div>
                        </div>
                    </div>
                `;
            }

            this.applyModalStyles();
        }

        setupControls() {
            const closeButton = this.modalElement.querySelector('#close-meaning');
            if (closeButton) {
                closeButton.disabled = true;
                closeButton.style.opacity = '0.5';
                closeButton.title = 'Completa la lectura para continuar';
            }

            // Botón de micrófono (solo si está disponible)
            const micButton = this.modalElement.querySelector('#modal-mic-button');
            if (micButton) {
                micButton.addEventListener('click', () => {
                    this.startVoiceReading();
                });
            }

            // Botón de fallback (siempre disponible)
            const fallbackButton = this.modalElement.querySelector('#modal-fallback-button');
            if (fallbackButton) {
                fallbackButton.addEventListener('click', () => {
                    this.startTimerReading();
                });
            }

            this.setupBlockingOverlay();
        }

        setupBlockingOverlay() {
            const overlay = document.createElement('div');
            overlay.id = 'modal-reading-overlay';
            overlay.style.cssText = `
                position: fixed; inset: 0; background: rgba(0, 0, 0, 0.7);
                z-index: 998; display: none;
            `;
            document.body.appendChild(overlay);
            this.blockingOverlay = overlay;
        }

        setupRecognition() {
            if (!this.speechAvailable) return;

            this.recognition = new SpeechRecognition();
            this.recognition.lang = this.options.lang;
            this.recognition.continuous = true;
            this.recognition.interimResults = true;
            this.recognition.maxAlternatives = 3;

            this.recognition.onstart = () => {
                console.log('[ReadAloudModal] Reconocimiento iniciado');
                this.onListeningStart();
            };

            this.recognition.onresult = (event) => {
                this.processRecognitionResult(event);
            };

            this.recognition.onerror = (event) => {
                console.error('[ReadAloudModal] Error de reconocimiento:', event.error);
                this.onSpeechError(event.error);
            };

            this.recognition.onend = () => {
                if (this.isActive && !this.isCompleted() && this.mode === 'voice') {
                    setTimeout(() => {
                        if (this.isActive) {
                            try {
                                this.recognition.start();
                            } catch (e) {
                                console.warn('[ReadAloudModal] Error reiniciando reconocimiento:', e);
                                this.switchToTimerMode();
                            }
                        }
                    }, 100);
                }
            };
        }

        startVoiceReading() {
            console.log('[ReadAloudModal] Iniciando lectura por voz');
            this.mode = 'voice';
            this.isActive = true;
            this.startTime = Date.now();
            
            if (this.blockingOverlay) {
                this.blockingOverlay.style.display = 'block';
            }

            try {
                this.recognition.start();
            } catch (error) {
                console.error('[ReadAloudModal] Error iniciando reconocimiento:', error);
                this.switchToTimerMode();
            }

            this.modalElement.classList.add('reading-mode');
        }

        startTimerReading() {
            console.log('[ReadAloudModal] Iniciando lectura por temporizador');
            this.mode = 'timer';
            this.isActive = true;
            this.startTime = Date.now();
            
            if (this.blockingOverlay) {
                this.blockingOverlay.style.display = 'block';
            }

            this.onTimerStart();
            this.modalElement.classList.add('reading-mode');
            
            // Simular progreso gradual
            this.simulateReadingProgress();
        }

        switchToTimerMode() {
            console.log('[ReadAloudModal] Cambiando a modo temporizador');
            this.mode = 'timer';
            
            if (this.recognition) {
                try {
                    this.recognition.stop();
                } catch (e) {}
            }

            this.showFallbackMessage();
            this.simulateReadingProgress();
        }

        onSpeechError(error) {
            console.error('[ReadAloudModal] Error de reconocimiento:', error);
            
            let errorMessage;
            switch (error) {
                case 'no-speech':
                    errorMessage = 'No se detectó voz. Cambiando a modo temporizador...';
                    break;
                case 'audio-capture':
                case 'not-allowed':
                    errorMessage = 'Micrófono no disponible. Usando modo temporizador...';
                    break;
                default:
                    errorMessage = 'Error de reconocimiento. Usando modo temporizador...';
            }
            
            this.showError(errorMessage);
            
            // Cambiar automáticamente a modo temporizador después de 2 segundos
            setTimeout(() => {
                this.switchToTimerMode();
            }, 2000);
        }

        simulateReadingProgress() {
            const totalTime = Math.max(this.options.minReadingTime, this.tokens.length * 200); // 200ms por palabra mínimo
            const interval = 200; // Actualizar cada 200ms
            const steps = totalTime / interval;
            const progressPerStep = 1 / steps;
            
            let currentStep = 0;
            
            const progressInterval = setInterval(() => {
                currentStep++;
                const progress = Math.min(currentStep * progressPerStep, 1);
                this.currentProgress = progress;
                
                // Simular palabras siendo leídas
                const wordsToMark = Math.floor(progress * this.tokens.length);
                for (let i = 0; i < wordsToMark; i++) {
                    if (!this.recognizedWords.has(i)) {
                        this.recognizedWords.add(i);
                        if (this.tokens[i]) {
                            this.tokens[i].classList.remove('rl-pending');
                            this.tokens[i].classList.add('rl-done');
                        }
                    }
                }
                
                this.updateProgress();
                
                if (progress >= this.options.threshold || currentStep >= steps) {
                    clearInterval(progressInterval);
                    this.onReadingComplete();
                }
            }, interval);
            
            this.progressInterval = progressInterval;
        }

        tokenizeContent() {
            const contentElement = this.modalElement.querySelector('#modal-readaloud-content');
            if (!contentElement) {
                console.error('[ReadAloudModal] No se encontró elemento de contenido');
                return;
            }

            const text = contentElement.textContent;
            const words = text.split(/\s+/).filter(Boolean);
            
            contentElement.innerHTML = words.map((word, index) => {
                const cleanWord = word.replace(/[.,;:¡!¿?()[\]«»"'"']/g, '');
                return `<span class="rl-word rl-pending" data-index="${index}" data-word="${cleanWord.toLowerCase()}">${word}</span>`;
            }).join(' ');

            this.tokens = Array.from(contentElement.querySelectorAll('.rl-word'));
            console.log(`[ReadAloudModal] Tokenizado: ${this.tokens.length} palabras`);
        }

        processRecognitionResult(event) {
            let finalTranscript = '';
            
            for (let i = event.resultIndex; i < event.results.length; i++) {
                const result = event.results[i];
                if (result.isFinal) {
                    finalTranscript += result[0].transcript + ' ';
                }
            }

            if (finalTranscript.trim()) {
                this.processSpokenText(finalTranscript.trim());
            }
        }

        processSpokenText(spokenText) {
            const spokenWords = this.normalize(spokenText).split(/\s+/).filter(Boolean);
            let newMatches = 0;

            spokenWords.forEach(spokenWord => {
                this.tokens.forEach(token => {
                    const tokenIndex = parseInt(token.dataset.index);
                    
                    if (!this.recognizedWords.has(tokenIndex)) {
                        const tokenWord = token.dataset.word;
                        
                        if (this.isWordMatch(spokenWord, tokenWord)) {
                            this.recognizedWords.add(tokenIndex);
                            token.classList.remove('rl-pending');
                            token.classList.add('rl-done');
                            newMatches++;
                        }
                    }
                });
            });

            if (newMatches > 0) {
                this.updateProgress();
                this.checkCompletion();
            }
        }

        isWordMatch(spoken, target) {
            const normalizedSpoken = this.normalize(spoken);
            const normalizedTarget = this.normalize(target);
            
            return normalizedSpoken === normalizedTarget ||
                   normalizedTarget.includes(normalizedSpoken) ||
                   normalizedSpoken.includes(normalizedTarget);
        }

        normalize(text) {
            return text.toLowerCase()
                       .normalize('NFD')
                       .replace(/[\u0300-\u036f]/g, '')
                       .replace(/[.,;:¡!¿?()[\]«»"'"']/g, '')
                       .replace(/\s+/g, ' ')
                       .trim();
        }

        updateProgress() {
            const progress = this.recognizedWords.size / this.tokens.length;
            this.currentProgress = progress;
            
            const progressBar = this.modalElement.querySelector('#modal-progress-fill');
            const progressText = this.modalElement.querySelector('#modal-progress-text');
            
            if (progressBar) progressBar.style.width = `${progress * 100}%`;
            if (progressText) progressText.textContent = `${Math.round(progress * 100)}% leído`;
        }

        checkCompletion() {
            if (this.currentProgress >= this.options.threshold) {
                this.onReadingComplete();
            }
        }

        isCompleted() {
            return this.currentProgress >= this.options.threshold;
        }

        onListeningStart() {
            const statusEl = this.modalElement.querySelector('#modal-reading-status');
            if (statusEl) {
                statusEl.innerHTML = '🎤 Leyendo en voz alta... <small>(o espera para modo automático)</small>';
                statusEl.classList.add('listening');
            }
        }

        onTimerStart() {
            const statusEl = this.modalElement.querySelector('#modal-reading-status');
            if (statusEl) {
                statusEl.innerHTML = '⏱️ Leyendo... Progreso automático activado';
                statusEl.classList.add('reading');
            }
        }

        showFallbackMessage() {
            const statusEl = this.modalElement.querySelector('#modal-reading-status');
            if (statusEl) {
                statusEl.innerHTML = '⏱️ Modo temporizador activado. Continúa leyendo...';
                statusEl.classList.remove('listening');
                statusEl.classList.add('reading');
            }
        }

        onReadingComplete() {
            console.log('[ReadAloudModal] Lectura completada exitosamente');

            this.isActive = false;
            
            // Limpiar intervalos
            if (this.progressInterval) {
                clearInterval(this.progressInterval);
            }
            
            if (this.recognition) {
                try {
                    this.recognition.stop();
                } catch (e) {}
            }
            
            if (this.blockingOverlay) {
                this.blockingOverlay.style.display = 'none';
            }

            const closeButton = this.modalElement.querySelector('#close-meaning');
            if (closeButton) {
                closeButton.disabled = false;
                closeButton.style.opacity = '1';
                closeButton.title = '';
            }

            this.showCompletionCelebration();

            if (this.onCompleteCallback) {
                setTimeout(() => {
                    this.onCompleteCallback(this.concept);
                }, 1000);
            }
        }

        showCompletionCelebration() {
            const statusEl = this.modalElement.querySelector('#modal-reading-status');
            if (statusEl) {
                statusEl.innerHTML = `
                    <div class="completion-message">
                        <span class="celebration-icon">🎉</span>
                        <span>¡Lectura completada! Concepto comprendido</span>
                        <span class="celebration-icon">✅</span>
                    </div>
                `;
                statusEl.classList.add('completed');
                statusEl.classList.remove('listening', 'reading');
            }

            this.modalElement.classList.add('concept-completed');
        }

        showError(message) {
            const statusEl = this.modalElement.querySelector('#modal-reading-status');
            if (statusEl) {
                statusEl.innerHTML = `
                    <div class="error-message" style="color: #dc2626; font-weight: 600;">
                        ⚠️ ${message}
                    </div>
                `;
            }
        }

        applyModalStyles() {
            if (document.getElementById('modal-readaloud-styles')) return;

            const styles = document.createElement('style');
            styles.id = 'modal-readaloud-styles';
            styles.textContent = `
                .concept-title { display: flex; align-items: center; gap: 8px; margin-bottom: 16px; }
                .concept-icon { font-size: 1.5rem; }
                .concept-term { font-weight: bold; font-size: 1.3rem; color: #2563eb; }
                .concept-badge { background: #dc2626; color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; font-weight: 600; }
                .concept-content { line-height: 1.6; }
                .readaloud-text { background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 12px; padding: 16px; margin: 16px 0; font-size: 1.1rem; line-height: 1.7; }
                .reading-controls { margin-top: 20px; padding: 16px; background: #f1f5f9; border-radius: 12px; border: 1px solid #cbd5e1; }
                .reading-progress { margin-bottom: 16px; display: flex; align-items: center; gap: 12px; }
                .progress-bar-reading { width: 100%; height: 8px; background: #e2e8f0; border-radius: 4px; overflow: hidden; margin-bottom: 8px; }
                .progress-fill-reading { height: 100%; background: #10b981; transition: width 0.3s ease; width: 0%; }
                .progress-text-reading { text-align: center; font-size: 0.9rem; color: #64748b; font-weight: 600; width: 6rem; }
                .mic-button, .fallback-button { width: 100%; padding: 12px; border: none; border-radius: 8px; font-size: 1rem; font-weight: 600; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.3s ease; margin-bottom: 8px; }
                .mic-button { background: #3b82f6; color: white; }
                .mic-button:hover { background: #2563eb; transform: translateY(-2px); }
                .fallback-button { background: #6b7280; color: white; }
                .fallback-button:hover { background: #4b5563; transform: translateY(-2px); }
                .fallback-button.primary { background: #059669; }
                .fallback-button.primary:hover { background: #047857; }
                .fallback-section { margin: 12px 0; }
                .fallback-divider { text-align: center; color: #6b7280; margin: 8px 0; font-size: 0.9rem; }
                .no-speech-notice { background: #fef3c7; color: #92400e; padding: 8px; border-radius: 6px; font-size: 0.9rem; margin-top: 8px; }
                .reading-status { text-align: center; padding: 8px; border-radius: 6px; font-size: 0.9rem; background: #e2e8f0; color: #475569; }
                .reading-status.listening { background: #fee2e2; color: #dc2626; font-weight: 600; }
                .reading-status.reading { background: #fef3c7; color: #92400e; font-weight: 600; }
                .reading-status.completed { background: #dcfce7; color: #166534; font-weight: 600; }
                .completion-message { display: flex; align-items: center; justify-content: center; gap: 8px; }
                .celebration-icon { font-size: 1.2rem; }
                .meaning-sheet.reading-mode { border: 3px solid #3b82f6; box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1); }
                .meaning-sheet.concept-completed { border: 3px solid #10b981; box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.1); animation: completionGlow 2s ease-out; }
                @keyframes completionGlow { 0% { box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.1); } 50% { box-shadow: 0 0 0 12px rgba(16, 185, 129, 0.3); } 100% { box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.1); } }
                .rl-word { padding: 2px 1px; border-radius: 3px; transition: all 0.2s ease; }
                .rl-word.rl-pending { background: transparent; }
                .rl-word.rl-done { background: #dcfce7; color: #166534; }
            `;
            document.head.appendChild(styles);
        }

        escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text || '';
            return div.innerHTML;
        }

        destroy() {
            if (this.progressInterval) {
                clearInterval(this.progressInterval);
            }
            
            if (this.blockingOverlay) {
                this.blockingOverlay.remove();
            }
            
            if (this.recognition) {
                try {
                    this.recognition.stop();
                } catch (e) {}
            }
            
            this.modalElement.classList.remove('reading-mode', 'concept-completed');
        }
    }

    window.ReadAloudModalSystem = ReadAloudModalSystem;
    console.log('[ReadAloudModal] Sistema con fallbacks cargado exitosamente');

})();