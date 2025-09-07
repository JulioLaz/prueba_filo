/* readaloud-system.js - Sistema Modular de Lectura en Voz Alta
 * Versión: 1.0
 * Uso: Incluir en cualquier content.html con configuración específica
 */

(function() {
    'use strict';

    // Configuración por defecto (se puede sobrescribir)
    const DEFAULT_CONFIG = {
        tema: 'filosofia',
        threshold: 0.80,
        tolerance: 0.3,
        minSpeed: 1.0,
        maxSpeed: 4.0,
        lang: 'es-AR',
        soundsPath: '../../sound/',
        redirectTo: '../../tema.html',
        sections: 3,
        celebrationEmojis: ['🎊', '🎉', '⭐'],
        synonymMap: {
            'el': ['un', 'este', 'ese'],
            'la': ['una', 'esta', 'esa'],
            'y': ['e'],
            'o': ['u'],
            'ser': ['estar', 'existir'],
            'humano': ['persona', 'hombre', 'individuo'],
            'eleccion': ['decision', 'opcion'],
            'libertad': ['autonomia'],
            'responsabilidad': ['compromiso', 'deber'],
            'conocimiento': ['saber', 'ciencia'],
            'verdad': ['certeza', 'realidad'],
            'bien': ['bueno', 'bondad'],
            'mal': ['malo', 'maldad'],
            'felicidad': ['bienestar', 'gozo'],
            'deber': ['obligacion', 'compromiso']
        }
    };

    // Verificar soporte de SpeechRecognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
        console.warn('[ReadAloud] SpeechRecognition no soportado en este navegador');
        document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.mic-button').forEach(btn => {
                btn.disabled = true;
                btn.querySelector('.mic-text').textContent = 'Micrófono no soportado';
            });
        });
        return;
    }

    class ReadAloudSystemModular {
        constructor() {
            // Fusionar configuración global con defaults
            this.config = { 
                ...DEFAULT_CONFIG, 
                ...(window.ReadAloudSystemConfig || {}) 
            };
            
            // Establecer ruta base de sonidos
            this.SOUND_BASE = new URL(this.config.soundsPath, document.baseURI).href;
            
            console.log(`[ReadAloud] Iniciando sistema para tema: ${this.config.tema}`);
            console.log(`[ReadAloud] Threshold configurado: ${this.config.threshold * 100}%`);
            
            this.init();
        }

        init() {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => {
                    this.initializeSystem();
                });
            } else {
                this.initializeSystem();
            }
        }

        initializeSystem() {
            this.sections = document.querySelectorAll('.study-section');
            this.currentSectionIndex = 0;
            this.completedSections = new Set();
            this.readAloudSystems = new Map();
            
            if (this.sections.length === 0) {
                console.warn('[ReadAloud] No se encontraron secciones de estudio');
                return;
            }

            this.setupCurrentSection();
            this.updateGlobalProgress();
        }

        setupCurrentSection() {
            const currentSection = this.sections[this.currentSectionIndex];
            if (!currentSection) return;

            const paragraph = currentSection.querySelector('.readaloud');
            if (!paragraph) {
                console.warn('[ReadAloud] No se encontró párrafo para leer en la sección actual');
                return;
            }

            const readAloudSystem = new ReadAloudParagraph(paragraph, {
                ...this.config,
                onComplete: () => {
                    this.onSectionReadingComplete();
                }
            });

            this.readAloudSystems.set(this.currentSectionIndex, readAloudSystem);
        }

        onSectionReadingComplete() {
            console.log(`[ReadAloud] Sección ${this.currentSectionIndex} completada para tema: ${this.config.tema}`);
            
            const currentSection = this.sections[this.currentSectionIndex];
            const comprehensionCheck = currentSection.querySelector('.comprehension-check');
            
            if (comprehensionCheck) {
                setTimeout(() => {
                    comprehensionCheck.style.display = 'block';
                    setTimeout(() => {
                        comprehensionCheck.classList.add('show');
                        this.setupComprehensionCheck(comprehensionCheck);
                        this.playSound('show_question');
                    }, 100);
                }, 500);
            }
        }

        setupComprehensionCheck(checkElement) {
            const options = checkElement.querySelectorAll('.option');
            
            options.forEach(option => {
                option.addEventListener('click', (e) => {
                    this.handleOptionClick(e.target, checkElement);
                });
            });
        }

        handleOptionClick(clickedOption, checkElement) {
            const options = checkElement.querySelectorAll('.option');
            const isCorrect = clickedOption.dataset.correct === 'true';
            
            options.forEach(opt => opt.style.pointerEvents = 'none');
            
            if (isCorrect) {
                clickedOption.classList.add('correct');
                this.playSound('success');
                setTimeout(() => {
                    this.onSectionCompleted();
                }, 1000);
            } else {
                clickedOption.classList.add('incorrect');
                this.playSound('error');
                
                setTimeout(() => {
                    options.forEach(opt => {
                        opt.classList.remove('correct', 'incorrect');
                        opt.style.pointerEvents = 'auto';
                    });
                    
                    this.shuffleOptions(checkElement);
                }, 1500);
            }
        }

        shuffleOptions(checkElement) {
            const container = checkElement.querySelector('.options-container');
            const options = Array.from(container.children);
            
            for (let i = options.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [options[i], options[j]] = [options[j], options[i]];
            }
            
            options.forEach(option => container.appendChild(option));
        }

        onSectionCompleted() {
            console.log(`[ReadAloud] Sección ${this.currentSectionIndex} completada`);
            
            this.completedSections.add(this.currentSectionIndex);
            
            const currentSection = this.sections[this.currentSectionIndex];
            currentSection.classList.add('completed-section');
            currentSection.classList.remove('active');
            
            this.updateGlobalProgress();
            
            this.currentSectionIndex++;
            
            if (this.currentSectionIndex < this.sections.length) {
                setTimeout(() => {
                    this.showNextSection();
                }, 1000);
            } else {
                setTimeout(() => {
                    this.onAllSectionsCompleted();
                }, 1000);
            }
        }

        showNextSection() {
            const nextSection = this.sections[this.currentSectionIndex];
            
            nextSection.classList.add('active');
            nextSection.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
            
            setTimeout(() => {
                this.setupCurrentSection();
            }, 200);
        }

        updateGlobalProgress() {
            const progressFill = document.getElementById('progress-fill');
            const progressCounter = document.getElementById('progress-counter');
            
            if (progressFill && progressCounter) {
                const progress = (this.completedSections.size / this.sections.length) * 100;
                progressFill.style.width = `${progress}%`;
                progressCounter.textContent = `${this.completedSections.size} / ${this.sections.length} secciones`;
            }
        }

        onAllSectionsCompleted() {
            console.log(`[ReadAloud] ¡Todas las secciones de ${this.config.tema} completadas!`);
            
            if (typeof Celebration !== 'undefined') {
                this.playSound('celebration');
                Celebration.celebrateStudyComplete(this.config.tema, {
                    message: `¡Completaste ${this.config.tema}! 🎉`,
                    emojis: this.config.celebrationEmojis,
                    onContinue: () => { 
                        if (this.config.redirectTo) {
                            location.href = this.config.redirectTo;
                        }
                    }
                });
            } else {                   
                alert(`¡Felicitaciones! Has completado todo el material de ${this.config.tema}.`);
                if (this.config.redirectTo) {
                    location.href = this.config.redirectTo;
                }
            }
        }

        async playSound(type) {
            try {
                const files = {
                    success: 'collect_points.mp3',
                    error: 'negative_beep.mp3',
                    show_question: 'show_question.mp3',
                    timer_warning: 'timer_warning.mp3',
                    celebration: 'celebration.mp3',
                    timer_danger: 'timer_danger.mp3'
                };
                const file = files[type] || 'collect_points.mp3';
                const audio = new Audio(this.SOUND_BASE + file);
                audio.volume = 0.7;
                audio.preload = 'auto';
                const p = audio.play();
                if (p !== undefined) await p;
                console.log(`[ReadAloud] Sonido reproducido: ${file}`);
            } catch (err) {
                console.warn('[ReadAloud] No se pudo reproducir sonido:', err);
            }
        }
    }

    // Clase para manejar párrafos individuales
    class ReadAloudParagraph {
        constructor(paragraphEl, options = {}) {
            this.paragraph = paragraphEl;
            this.options = options;
            this.tokens = [];
            this.recognizedWords = new Set();
            this.currentProgress = 0;
            this.isListening = false;
            this.recognition = null;
            this.startTime = null;
            this.readWords = 0;
            
            this.init();
        }

        init() {
            this.setupRecognition();
            this.tokenizeParagraph();
            this.setupControls();
            this.updateProgress();
        }

        setupRecognition() {
            this.recognition = new SpeechRecognition();
            this.recognition.lang = this.options.lang;
            this.recognition.continuous = true;
            this.recognition.interimResults = true;
            this.recognition.maxAlternatives = 3;

            this.recognition.onstart = () => {
                this.startTime = Date.now();
                this.onListeningStart();
            };

            this.recognition.onresult = (event) => {
                this.processRecognitionResult(event);
            };

            this.recognition.onerror = (event) => {
                this.onError(event.error);
            };

            this.recognition.onend = () => {
                if (this.isListening && !this.isCompleted()) {
                    setTimeout(() => {
                        if (this.isListening) {
                            try {
                                this.recognition.start();
                            } catch (e) {
                                console.warn('[ReadAloud] Error reiniciando reconocimiento:', e);
                            }
                        }
                    }, 100);
                }
            };
        }

        tokenizeParagraph() {
            this.tokens = this.tokenizePreservingHTML(this.paragraph);
            console.log(`[ReadAloud] Tokenizado: ${this.tokens.length} palabras`);
        }

        tokenizePreservingHTML(element) {
            const tokens = [];
            let wordIndex = 0;

            const processNode = (node) => {
                if (node.nodeType === Node.TEXT_NODE) {
                    const text = node.textContent;
                    const words = text.split(/(\s+)/);
                    
                    words.forEach(word => {
                        if (word.trim()) {
                            const span = document.createElement('span');
                            span.className = 'rl-word rl-pending';
                            span.textContent = word;
                            span.dataset.wordIndex = wordIndex;
                            span.dataset.normalized = this.normalize(word);
                            
                            tokens.push({
                                element: span,
                                original: word,
                                normalized: this.normalize(word),
                                index: wordIndex
                            });
                            
                            node.parentNode.insertBefore(span, node);
                            wordIndex++;
                        } else if (word) {
                            node.parentNode.insertBefore(document.createTextNode(word), node);
                        }
                    });
                    
                    node.remove();
                } else if (node.nodeType === Node.ELEMENT_NODE) {
                    Array.from(node.childNodes).forEach(child => processNode(child));
                }
            };

            Array.from(element.childNodes).forEach(processNode);
            return tokens;
        }

        normalize(text) {
            return text
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/[.,;:¡!¿?()[\]«»"'"']/g, ' ')
                .replace(/\s+/g, ' ')
                .trim();
        }

        getSynonyms(word) {
            const normalized = this.normalize(word);
            return this.options.synonymMap[normalized] || [];
        }

        isMatch(spokenWord, targetWord) {
            const spoken = this.normalize(spokenWord);
            const target = this.normalize(targetWord);
            
            if (spoken === target) return 1.0;
            
            const synonyms = this.getSynonyms(target);
            if (synonyms.some(syn => this.normalize(syn) === spoken)) {
                return 0.9;
            }
            
            if (target.length > 3 && spoken.includes(target.substring(0, target.length - 1))) {
                return 0.7;
            }
            
            return 0.0;
        }

        setupControls() {
            this.micButton = this.paragraph.closest('.reading-area').querySelector('.mic-button');
            this.statusEl = this.paragraph.closest('.reading-area').querySelector('.reading-status');
            this.progressBar = this.paragraph.closest('.reading-area').querySelector('.progress-fill-reading');
            this.progressText = this.paragraph.closest('.reading-area').querySelector('.progress-text-reading');

            this.micButton.addEventListener('click', () => {
                this.toggleListening();
            });
        }

        toggleListening() {
            if (this.isCompleted()) return;

            if (this.isListening) {
                this.stopListening();
            } else {
                this.startListening();
            }
        }

        startListening() {
            try {
                this.recognition.start();
                this.isListening = true;
                this.startTime = Date.now();
                this.readWords = 0;
            } catch (error) {
                this.onError('no-speech');
            }
        }

        stopListening() {
            this.isListening = false;
            try {
                this.recognition.stop();
            } catch (error) {
                console.warn('[ReadAloud] Error deteniendo reconocimiento:', error);
            }
            this.onListeningStop();
        }

        processRecognitionResult(event) {
            let finalTranscript = '';
            let interimTranscript = '';

            for (let i = event.resultIndex; i < event.results.length; i++) {
                const result = event.results[i];
                const transcript = result[0].transcript;

                if (result.isFinal) {
                    finalTranscript += transcript + ' ';
                } else {
                    interimTranscript += transcript + ' ';
                }
            }

            if (finalTranscript.trim()) {
                this.processSpokenText(finalTranscript.trim());
            }

            if (interimTranscript.trim()) {
                this.highlightInterimProgress(interimTranscript.trim());
            }
        }

        processSpokenText(spokenText) {
            const spokenWords = this.normalize(spokenText).split(/\s+/).filter(Boolean);
            let newMatches = 0;

            console.log(`[ReadAloud] Procesando: "${spokenText}"`);
            
            const currentTime = Date.now();
            const timeElapsed = (currentTime - this.startTime) / 1000;
            const wordsPerSecond = spokenWords.length / timeElapsed;
            
            if (wordsPerSecond > this.options.maxSpeed) {
                console.warn('[ReadAloud] Lectura demasiado rápida, posible trampa');
                this.onError('reading-too-fast');
                return;
            }

            spokenWords.forEach(spokenWord => {
                this.tokens.forEach(token => {
                    if (!this.recognizedWords.has(token.index)) {
                        const matchScore = this.isMatch(spokenWord, token.original);
                        
                        if (matchScore >= 0.7) {
                            this.recognizedWords.add(token.index);
                            token.element.classList.remove('rl-pending', 'rl-current');
                            token.element.classList.add('rl-done');
                            newMatches++;
                            this.readWords++;
                            
                            this.animateWordConfirmation(token.element);
                        }
                    }
                });
            });

            if (newMatches > 0) {
                this.updateProgress();
                this.checkCompletion();
                this.playSound('success');
            }
        }

        highlightInterimProgress(interimText) {
            const spokenWords = this.normalize(interimText).split(/\s+/).filter(Boolean);
            
            this.tokens.forEach(token => {
                if (!this.recognizedWords.has(token.index)) {
                    token.element.classList.remove('rl-current');
                    token.element.classList.add('rl-pending');
                }
            });

            spokenWords.forEach(spokenWord => {
                this.tokens.forEach(token => {
                    if (!this.recognizedWords.has(token.index)) {
                        const matchScore = this.isMatch(spokenWord, token.original);
                        
                        if (matchScore >= 0.5) {
                            token.element.classList.remove('rl-pending');
                            token.element.classList.add('rl-current');
                        }
                    }
                });
            });
        }

        updateProgress() {
            const progress = this.recognizedWords.size / this.tokens.length;
            this.currentProgress = progress;
            
            if (this.progressBar) {
                this.progressBar.style.width = `${progress * 100}%`;
            }
            
            if (this.progressText) {
                this.progressText.textContent = `${Math.round(progress * 100)}% leído`;
            }

            console.log(`[ReadAloud] Progreso: ${Math.round(progress * 100)}% (${this.recognizedWords.size}/${this.tokens.length})`);
        }

        checkCompletion() {
            if (this.currentProgress >= this.options.threshold) {
                this.onComplete();
            }
        }

        isCompleted() {
            return this.currentProgress >= this.options.threshold;
        }

        onListeningStart() {
            this.micButton.classList.add('listening');
            this.micButton.querySelector('.mic-text').textContent = 'Escuchando...';
            this.statusEl.textContent = 'Leyendo en voz alta 🎤';
            this.statusEl.classList.add('listening');
            
            this.paragraph.closest('.readaloud-container').classList.add('reading-active');
        }

        onListeningStop() {
            this.micButton.classList.remove('listening');
            this.micButton.querySelector('.mic-text').textContent = 'Continuar Lectura';
            this.statusEl.textContent = 'Presiona para continuar';
            this.statusEl.classList.remove('listening');
            
            this.paragraph.closest('.readaloud-container').classList.remove('reading-active');
        }

        onComplete() {
            this.isListening = false;
            this.recognition.stop();
            
            this.micButton.classList.remove('listening');
            this.micButton.classList.add('completed');
            this.micButton.querySelector('.mic-text').textContent = '✅ Completado';
            this.statusEl.textContent = 'Lectura completada exitosamente';
            this.statusEl.classList.add('completed');
            this.statusEl.classList.remove('listening');
            
            this.tokens.forEach(token => {
                token.element.classList.remove('rl-pending', 'rl-current');
                token.element.classList.add('rl-done');
            });

            if (this.options.onComplete) {
                setTimeout(() => {
                    this.options.onComplete();
                }, 500);
            }

            console.log(`[ReadAloud] ¡Lectura completada! Tiempo total: ${(Date.now() - this.startTime) / 1000}s`);
        }

        onError(error) {
            console.error('[ReadAloud] Error:', error);
            
            this.stopListening();
            
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
                case 'reading-too-fast':
                    errorMessage = 'Lectura muy rápida. Lee más despacio.';
                    break;
                default:
                    errorMessage = 'Error de reconocimiento. Intenta nuevamente.';
            }
            
            this.showError(errorMessage);
        }

        showError(message) {
            const existingError = this.paragraph.closest('.reading-area').querySelector('.reading-error');
            if (existingError) {
                existingError.remove();
            }

            const errorEl = document.createElement('div');
            errorEl.className = 'reading-error';
            errorEl.textContent = message;
            
            this.paragraph.closest('.reading-area').appendChild(errorEl);
            
            setTimeout(() => {
                if (errorEl.parentNode) {
                    errorEl.remove();
                }
            }, 5000);
        }

        animateWordConfirmation(element) {
            element.style.transform = 'scale(1.1)';
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 200);
        }

        async playSound(type) {
            try {
                const files = {
                    success: 'collect_points.mp3',
                    error: 'negative_beep.mp3',
                    show_question: 'show_question.mp3',
                    timer_warning: 'timer_warning.mp3',
                    celebration: 'celebration.mp3',
                    timer_danger: 'timer_danger.mp3'
                };
                const file = files[type] || 'collect_points.mp3';
                const soundBase = new URL(this.options.soundsPath, document.baseURI).href;
                const audio = new Audio(soundBase + file);
                audio.volume = 0.7;
                audio.preload = 'auto';
                const p = audio.play();
                if (p !== undefined) await p;
            } catch (err) {
                console.warn('[ReadAloud] No se pudo reproducir sonido:', err);
            }
        }
    }

    // Exponer API global
    window.ReadAloudSystemModular = ReadAloudSystemModular;

    // Auto-inicializar si existe configuración global
    if (window.ReadAloudSystemConfig) {
        new ReadAloudSystemModular();
    }

})();