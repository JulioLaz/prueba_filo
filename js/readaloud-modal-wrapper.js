/* readaloud-modal-wrapper.js - Versión Corregida
 * Versión: 1.1 - Implementación independiente
 * NO depende del sistema ReadAloud original
 */

(function() {
    'use strict';

    // Verificar soporte de SpeechRecognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
        console.warn('[ReadAloudModal] SpeechRecognition no soportado en este navegador');
        return;
    }

    // Configuración específica para modales de caza de conceptos
    const MODAL_READALOUD_CONFIG = {
        threshold: 0.85,           // Reducido para mayor tolerancia
        tolerance: 0.4,            
        minSpeed: 0.8,             
        maxSpeed: 3.0,             
        lang: 'es-AR',
        soundsPath: 'sound/',
        synonymMap: {
            'eudaimonia': ['eudaimonía', 'felicidad', 'bienestar', 'florecimiento'],
            'aristoteles': ['aristóteles', 'estagirita'],
            'virtud': ['virtudes', 'excelencia', 'areté'],
            'prudencia': ['sabiduría', 'phronesis'],
            'justicia': ['equidad', 'dikaiosyne'],
            'templanza': ['moderación', 'sophrosyne'],
            'valentia': ['valentía', 'coraje', 'andreia'],
            'amistad': ['philía', 'amistad'],
            'politica': ['política', 'polis'],
            'felicidad': ['eudaimonía', 'bienestar', 'florecimiento'],
            'bien': ['bueno', 'bondad', 'agathón'],
            'alma': ['psyque', 'espíritu'],
            'razon': ['razón', 'logos', 'racionalidad']
        }
    };

    /**
     * Sistema ReadAloud específico para modales - INDEPENDIENTE
     */
    class ReadAloudModalSystem {
        constructor(modalElement, concept, options = {}) {
            this.modalElement = modalElement;
            this.concept = concept;
            this.options = {
                ...MODAL_READALOUD_CONFIG,
                ...options
            };
            
            this.isActive = false;
            this.recognizedWords = new Set();
            this.tokens = [];
            this.currentProgress = 0;
            this.recognition = null;
            this.onCompleteCallback = options.onComplete;
            
            console.log('[ReadAloudModal] Inicializando para concepto:', concept.term);
            this.init();
        }

        init() {
            this.setupModalContent();
            this.setupControls();
            this.setupRecognition();
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
                    
                    <button class="mic-button" id="modal-mic-button">
                        <span class="mic-icon">🎤</span>
                        <span class="mic-text">Comenzar Lectura</span>
                    </button>
                    
                    <div class="modal-actions" style="display: flex; justify-content: space-between;">
                        <button class="back-button" id="modal-back-button">
                            <span class="back-text">Volver al texto</span>
                        </button>
                        <button class="skip-button" id="modal-skip-button">
                            <span class="skip-text">Omitir lectura</span>
                        </button>
                    </div>
                    
                </div>
            </div>
        `;
    }



    this.applyModalStyles();
}



        setupModalContent_000() {
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
                            
                            <button class="mic-button" id="modal-mic-button">
                                <span class="mic-icon">🎤</span>
                                <span class="mic-text">Comenzar Lectura</span>
                            </button>
                            
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

            const micButton = this.modalElement.querySelector('#modal-mic-button');
            if (micButton) {
                micButton.addEventListener('click', () => {
                    this.toggleReading();
                });
            }

            this.setupBlockingOverlay();

            // Agregar después del evento del mic-button:
            const backButton = this.modalElement.querySelector('#modal-back-button');
            if (backButton) {
                backButton.addEventListener('click', () => {
                    this.closeModal();
                });
            }

            const skipButton = this.modalElement.querySelector('#modal-skip-button');
            if (skipButton) {
                skipButton.addEventListener('click', () => {
                    this.skipReading();
                });
            }

        }

        closeModal() {
            console.log('[ReadAloudModal] Cerrando modal manualmente');
            this.destroy();
            this.modalElement.classList.remove('open');
        }

        skipReading() {
            console.log('[ReadAloudModal] Omitiendo lectura');
            // Marcar como completado sin leer
            this.onReadingComplete();
        }


        setupBlockingOverlay() {
            const overlay = document.createElement('div');
            overlay.id = 'modal-reading-overlay';
            overlay.style.cssText = `
                position: fixed; inset: 0; 
                background: rgba(245, 245, 13, 0.1);
                z-index: 998; display: none;
            `;
            document.body.appendChild(overlay);
            this.blockingOverlay = overlay;
        }

        setupRecognition() {
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
                this.onError(event.error);
            };

            this.recognition.onend = () => {
                if (this.isActive && !this.isCompleted()) {
                    setTimeout(() => {
                        if (this.isActive) {
                            try {
                                this.recognition.start();
                            } catch (e) {
                                console.warn('[ReadAloudModal] Error reiniciando reconocimiento:', e);
                            }
                        }
                    }, 100);
                }
            };
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

        toggleReading() {
            if (this.isActive) {
                this.stopReading();
            } else {
                this.startReading();
            }
        }

        startReading() {
            console.log('[ReadAloudModal] Iniciando lectura obligatoria');
            
            this.isActive = true;
            
            if (this.blockingOverlay) {
                this.blockingOverlay.style.display = 'block';
            }

            try {
                this.recognition.start();
            } catch (error) {
                console.error('[ReadAloudModal] Error iniciando reconocimiento:', error);
                this.onError('no-speech');
            }

            this.modalElement.classList.add('reading-mode');
        }

        stopReading() {
            this.isActive = false;
            
            try {
                this.recognition.stop();
            } catch (error) {
                console.warn('[ReadAloudModal] Error deteniendo reconocimiento:', error);
            }

            this.onListeningStop();
            this.modalElement.classList.remove('reading-mode');
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

            console.log(`[ReadAloudModal] Procesando: "${spokenText}"`);

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
                            
                            this.animateWordConfirmation(token);
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
            
            if (normalizedSpoken === normalizedTarget) return true;
            
            // Verificar sinónimos
            const synonyms = this.getSynonyms(target);
            if (synonyms.some(syn => this.normalize(syn) === normalizedSpoken)) {
                return true;
            }
            
            // Coincidencia parcial para palabras largas
            if (normalizedTarget.length > 3 && 
                (normalizedTarget.includes(normalizedSpoken) || 
                 normalizedSpoken.includes(normalizedTarget))) {
                return true;
            }
            
            return false;
        }

        getSynonyms(word) {
            const normalized = this.normalize(word);
            return this.options.synonymMap[normalized] || [];
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
            
            console.log(`[ReadAloudModal] Progreso: ${Math.round(progress * 100)}% (${this.recognizedWords.size}/${this.tokens.length})`);
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
            const micButton = this.modalElement.querySelector('#modal-mic-button');
            const statusEl = this.modalElement.querySelector('#modal-reading-status');
            
            if (micButton) {
                micButton.classList.add('listening');
                micButton.querySelector('.mic-text').textContent = 'Escuchando...';
            }
            
            if (statusEl) {
                statusEl.textContent = 'Leyendo en voz alta 🎤';
                statusEl.classList.add('listening');
            }
        }

        onListeningStop() {
            const micButton = this.modalElement.querySelector('#modal-mic-button');
            const statusEl = this.modalElement.querySelector('#modal-reading-status');
            
            if (micButton) {
                micButton.classList.remove('listening');
                micButton.querySelector('.mic-text').textContent = 'Continuar Lectura';
            }
            
            if (statusEl) {
                statusEl.textContent = 'Presiona para continuar';
                statusEl.classList.remove('listening');
            }
        }

        onReadingComplete() {
            console.log('[ReadAloudModal] Lectura completada exitosamente');

            this.isActive = false;
            
            try {
                this.recognition.stop();
            } catch (e) {}
            
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
            }

            this.modalElement.classList.add('concept-completed');
            this.playSound('concept_completed');
        }

        onError(error) {
            console.error('[ReadAloudModal] Error:', error);
            
            this.stopReading();
            
            let errorMessage;
            switch (error) {
                case 'no-speech':
                    errorMessage = 'No se detectó voz. Verifica tu micrófono.';
                    break;
                case 'audio-capture':
                    errorMessage = 'Error de micrófono. Verifica permisos.';
                    break;
                case 'not-allowed':
                    errorMessage = 'Permiso de micrófono denegado.';
                    break;
                default:
                    errorMessage = 'Error de reconocimiento. Intenta nuevamente.';
            }
            
            this.showError(errorMessage);
        }

        showError(message) {
            const statusEl = this.modalElement.querySelector('#modal-reading-status');
            if (statusEl) {
                statusEl.innerHTML = `
                    <div class="error-message" style="color: #dc2626; font-weight: 600;">
                        ⚠️ ${message}
                    </div>
                `;
                
                setTimeout(() => {
                    statusEl.textContent = 'Presiona para intentar nuevamente';
                }, 3000);
            }
        }

        animateWordConfirmation(element) {
            element.style.transform = 'scale(1.1)';
            element.style.background = '#10b981';
            element.style.color = 'white';
            
            setTimeout(() => {
                element.style.transform = 'scale(1)';
                element.style.background = '#dcfce7';
                element.style.color = '#166534';
            }, 200);
        }

        async playSound(type) {
            try {
                const files = {
                    concept_completed: 'fin_parrafo.mp3',
                    error: 'negative_beep.mp3'
                };
                const file = files[type] || 'collect_points.mp3';
                const audio = new Audio(`sound/${file}`);
                audio.volume = 0.7;
                await audio.play();
            } catch (err) {
                console.warn('[ReadAloudModal] No se pudo reproducir sonido:', err);
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
                .progress-bar-reading { width: 100%; height: 12px; background: #e2e8f0; border-radius: 4px; overflow: hidden; }
                .progress-fill-reading { height: 100%; background: #10b981; transition: width 0.3s ease; width: 0%; }
                .progress-text-reading { text-align: center; font-size: 0.9rem; color: #64748b; font-weight: 600; width: 6rem; }
                .mic-button { width: 100%; padding: 12px; background: #3b82f6; color: white; border: none; border-radius: 8px; font-size: 1rem; font-weight: 600; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.3s ease; margin-bottom: 12px; }
                .mic-button:hover { background: #2563eb; transform: translateY(-2px); }
                .mic-button.listening { background: #dc2626; animation: pulse 2s infinite; }
                .mic-button.completed { background: #10b981; cursor: default; }
                .reading-status { text-align: center; padding: 8px; border-radius: 6px; font-size: 0.9rem; background: #e2e8f0; color: #475569; }
                .reading-status.listening { background: #fee2e2; color: #dc2626; font-weight: 600; }
                .reading-status.completed { background: #dcfce7; color: #166534; font-weight: 600; }
                .completion-message { display: flex; align-items: center; justify-content: center; gap: 8px; }
                .celebration-icon { font-size: 1.2rem; }
                .meaning-sheet.reading-mode { border: 3px solid #3b82f6; box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1); }
                .meaning-sheet.concept-completed { border: 3px solid #10b981; box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.1); animation: completionGlow 2s ease-out; }
                @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.7; } }
                @keyframes completionGlow { 0% { box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.1); } 50% { box-shadow: 0 0 0 12px rgba(16, 185, 129, 0.3); } 100% { box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.1); } }
                .rl-word { padding: 2px 1px; border-radius: 3px; transition: all 0.2s ease; }
                .rl-word.rl-pending { background: transparent; }
                .rl-word.rl-done { background: #dcfce7; color: #166534; }
                // Agregar al final de los estilos existentes:
                .modal-actions { display: flex; gap: 8px; margin: 12px 0;}
                .back-button, .skip-button {   flex: 1;   padding: 10px;   border: none;   border-radius: 6px;   font-size: 0.9rem;   font-weight: 600;   cursor: pointer;   display: flex;   align-items: center;   justify-content: center;   gap: 6px;   transition: all 0.3s ease;margin:0 5px }
                .back-button { background: #6b7280; color: white}
                .back-button:hover { background: #4b5563; }
                .skip-button { background: #f59e0b;     color: white; }
                .skip-button:hover { background: #f2b875ff; }
            `;
            document.head.appendChild(styles);
        }

        escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text || '';
            return div.innerHTML;
        }

        destroy() {
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

    // Exponer API global
    window.ReadAloudModalSystem = ReadAloudModalSystem;

    console.log('[ReadAloudModal] Sistema de lectura modal cargado exitosamente');

})();