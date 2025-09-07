/* caza-conceptos-system.js - Sistema Modular de Caza de Conceptos Gamificado
 * Versión: 2.0 - Con lectura obligatoria y gamificación avanzada
 * Uso: Incluir en cualquier caza de conceptos con configuración específica
 */

(function() {
    'use strict';

    // Configuración por defecto
    const DEFAULT_CONFIG = {
        author: 'Filósofo',
        theme: 'filosofia',
        soundsPath: '../../sound/',
        readingRequired: true,
        highlightProgression: 'decreasing', // decreasing, fixed, custom
        
        // Efectos y celebraciones
        effectsEnabled: true,
        particleEffects: true,
        soundEffects: true,
        
        // Configuración de highlighting por nivel
        highlightRules: {
            1: { percentage: 0.6, min: 3 }, // 60% de conceptos o mínimo 3
            2: { percentage: 0.5, min: 2 },
            3: { percentage: 0.4, min: 2 },
            4: { percentage: 0.3, min: 1 },
            5: { percentage: 0.2, min: 1 },
            default: { percentage: 0.15, min: 1 }
        },
        
        // Sonidos específicos
        sounds: {
            termSelect: 'collect_points.mp3',
            readingComplete: 'success_chime.mp3',
            levelComplete: 'celebration.mp3',
            gameComplete: 'fin_caza.mp3',
            error: 'negative_beep.mp3',
            typing: 'keystroke.mp3',
            unlock: 'unlock.mp3'
        },
        
        // Configuración de lectura
        readingConfig: {
            threshold: 0.85,
            lang: 'es-AR',
            timeout: 60000 // 1 minuto máximo por lectura
        },
        
        levels: [] // Se debe proporcionar en configuración específica
    };

    class CazaConceptosSystem {
        constructor() {
            this.config = { 
                ...DEFAULT_CONFIG, 
                ...(window.CONCEPT_HUNT_CONFIG || {}) 
            };
            
            this.SOUND_BASE = new URL(this.config.soundsPath, document.baseURI).href;
            
            // Estado del juego
            this.currentLevel = 0;
            this.currentTermIndex = 0;
            this.completedTerms = new Set();
            this.discoveredConcepts = new Map();
            this.startTime = Date.now();
            this.isReading = false;
            this.currentReadingSystem = null;
            
            // Estadísticas
            this.stats = {
                totalTermsFound: 0,
                totalReadingTime: 0,
                averageReadingSpeed: 0,
                perfectReadings: 0,
                retries: 0
            };
            
            console.log(`[CazaConceptos] Iniciando sistema para: ${this.config.author}`);
            
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
            this.setupGameUI();
            this.setupStyles();
            this.setupLevel(0);
            this.setupEventListeners();
            
            console.log(`[CazaConceptos] Sistema inicializado con ${this.config.levels.length} niveles`);
        }

        setupGameUI() {
            // Crear header de progreso si no existe
            if (!document.querySelector('.caza-header')) {
                const header = document.createElement('div');
                header.className = 'caza-header';
                header.innerHTML = `
                    <div class="caza-progress">
                        <div class="progress-info">
                            <h2>🔍 Caza de Conceptos: ${this.config.author}</h2>
                            <div class="level-counter">Nivel <span id="current-level">1</span> de <span id="total-levels">${this.config.levels.length}</span></div>
                        </div>
                        <div class="progress-bar-container">
                            <div class="progress-bar">
                                <div class="progress-fill" id="game-progress"></div>
                            </div>
                            <div class="progress-text">
                                <span id="terms-found">0</span> / <span id="terms-total">0</span> conceptos
                            </div>
                        </div>
                    </div>
                    <div class="stats-panel">
                        <div class="stat">⭐ <span id="stat-score">0</span></div>
                        <div class="stat">⏱️ <span id="stat-time">00:00</span></div>
                        <div class="stat">🎯 <span id="stat-accuracy">100%</span></div>
                    </div>
                `;
                
                const main = document.querySelector('main') || document.body;
                main.insertBefore(header, main.firstChild);
            }

            // Crear modal de definición
            this.createDefinitionModal();
            
            // Crear overlay de celebración
            this.createCelebrationOverlay();
        }

        createDefinitionModal() {
            const modal = document.createElement('div');
            modal.id = 'definition-modal';
            modal.className = 'definition-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 id="term-title"></h3>
                        <div class="reading-progress-mini">
                            <div class="progress-bar-reading">
                                <div class="progress-fill-reading" id="modal-reading-progress"></div>
                            </div>
                            <span class="progress-text-reading" id="modal-reading-text">0% leído</span>
                        </div>
                    </div>
                    <div class="modal-body">
                        <div class="definition-text readaloud" id="definition-content"></div>
                        <div class="reading-controls-modal">
                            <button class="mic-button-modal" id="modal-mic-button">
                                <span class="mic-icon">🎤</span>
                                <span class="mic-text">Comenzar Lectura</span>
                            </button>
                            <div class="reading-status-modal" id="modal-reading-status">
                                Presiona el micrófono para leer la definición
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-backdrop"></div>
            `;
            document.body.appendChild(modal);
        }

        createCelebrationOverlay() {
            const overlay = document.createElement('div');
            overlay.id = 'celebration-overlay';
            overlay.className = 'celebration-overlay';
            overlay.innerHTML = `
                <div class="celebration-content">
                    <div class="celebration-animation" id="celebration-animation"></div>
                    <h2 id="celebration-title"></h2>
                    <p id="celebration-message"></p>
                    <div class="celebration-stats" id="celebration-stats"></div>
                    <button class="celebration-continue" id="celebration-continue">Continuar</button>
                </div>
            `;
            document.body.appendChild(overlay);
        }

        setupStyles() {
            if (document.getElementById('caza-conceptos-styles')) return;
            
            const styles = document.createElement('style');
            styles.id = 'caza-conceptos-styles';
            styles.textContent = `
                /* Headers y progreso */
                .caza-header {
                    background: linear-gradient(135deg, #1e3c72, #2a5298);
                    color: white;
                    padding: 20px;
                    border-radius: 12px;
                    margin-bottom: 20px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
                }

                .caza-progress {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 15px;
                    flex-wrap: wrap;
                    gap: 15px;
                }

                .progress-info h2 {
                    margin: 0 0 5px 0;
                    font-size: 1.5rem;
                }

                .level-counter {
                    font-size: 0.9rem;
                    opacity: 0.9;
                }

                .progress-bar-container {
                    flex: 1;
                    min-width: 200px;
                }

                .progress-bar {
                    height: 8px;
                    background: rgba(255,255,255,0.2);
                    border-radius: 4px;
                    overflow: hidden;
                    margin-bottom: 5px;
                }

                .progress-fill {
                    height: 100%;
                    background: linear-gradient(90deg, #4CAF50, #66BB6A);
                    border-radius: 4px;
                    transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                    width: 0%;
                }

                .progress-text {
                    text-align: center;
                    font-size: 0.9rem;
                    opacity: 0.9;
                }

                .stats-panel {
                    display: flex;
                    gap: 20px;
                    align-items: center;
                }

                .stat {
                    background: rgba(255,255,255,0.1);
                    padding: 8px 12px;
                    border-radius: 20px;
                    font-size: 0.9rem;
                    font-weight: 600;
                }

                /* Términos destacados */
                .concept-term {
                    background: linear-gradient(135deg, #ff6b6b, #ee5a24);
                    color: white;
                    padding: 2px 6px;
                    border-radius: 6px;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    font-weight: 600;
                    box-shadow: 0 2px 8px rgba(255, 107, 107, 0.3);
                    display: inline-block;
                    margin: 0 2px;
                }

                .concept-term:hover {
                    transform: translateY(-2px) scale(1.05);
                    box-shadow: 0 4px 15px rgba(255, 107, 107, 0.5);
                }

                .concept-term.discovered {
                    background: linear-gradient(135deg, #4CAF50, #66BB6A);
                    box-shadow: 0 2px 8px rgba(76, 175, 80, 0.3);
                    cursor: default;
                }

                .concept-term.current-target {
                    animation: pulseTarget 2s infinite;
                }

                @keyframes pulseTarget {
                    0%, 100% { 
                        transform: scale(1);
                        box-shadow: 0 2px 8px rgba(255, 107, 107, 0.3);
                    }
                    50% { 
                        transform: scale(1.05);
                        box-shadow: 0 4px 20px rgba(255, 107, 107, 0.6);
                    }
                }

                /* Modal de definición */
                .definition-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 10000;
                    display: none;
                    align-items: center;
                    justify-content: center;
                }

                .modal-backdrop {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.8);
                    backdrop-filter: blur(5px);
                }

                .modal-content {
                    position: relative;
                    background: #2d2d2d;
                    border-radius: 16px;
                    padding: 30px;
                    max-width: 600px;
                    width: 90%;
                    max-height: 80vh;
                    overflow-y: auto;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.5);
                    color: #e0e0e0;
                    animation: modalSlideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                @keyframes modalSlideIn {
                    from {
                        opacity: 0;
                        transform: translateY(-50px) scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                .modal-header {
                    border-bottom: 2px solid #404040;
                    padding-bottom: 15px;
                    margin-bottom: 20px;
                }

                .modal-header h3 {
                    margin: 0 0 10px 0;
                    color: #4CAF50;
                    font-size: 1.5rem;
                }

                .reading-progress-mini {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .progress-bar-reading {
                    flex: 1;
                    height: 6px;
                    background: #404040;
                    border-radius: 3px;
                    overflow: hidden;
                }

                .progress-fill-reading {
                    height: 100%;
                    background: linear-gradient(90deg, #2196F3, #42A5F5);
                    border-radius: 3px;
                    transition: width 0.3s ease;
                    width: 0%;
                }

                .progress-text-reading {
                    font-size: 0.9rem;
                    color: #bbb;
                    min-width: 80px;
                }

                .definition-text {
                    font-size: 1.1rem;
                    line-height: 1.7;
                    margin-bottom: 25px;
                    padding: 20px;
                    background: #3a3a3a;
                    border-radius: 12px;
                    border-left: 4px solid #4CAF50;
                }

                .reading-controls-modal {
                    text-align: center;
                }

                .mic-button-modal {
                    background: linear-gradient(135deg, #4CAF50, #66BB6A);
                    color: white;
                    border: none;
                    border-radius: 50px;
                    padding: 15px 30px;
                    font-size: 1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 4px 16px rgba(76, 175, 80, 0.3);
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin: 0 auto 15px auto;
                }

                .mic-button-modal:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(76, 175, 80, 0.4);
                }

                .mic-button-modal.listening {
                    background: linear-gradient(135deg, #F44336, #EF5350);
                    animation: pulse 1.5s infinite;
                }

                .mic-button-modal.completed {
                    background: linear-gradient(135deg, #2196F3, #42A5F5);
                    cursor: default;
                }

                .reading-status-modal {
                    font-size: 0.9rem;
                    color: #bbb;
                    font-style: italic;
                }

                /* Celebraciones */
                .celebration-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.9);
                    z-index: 15000;
                    display: none;
                    align-items: center;
                    justify-content: center;
                }

                .celebration-content {
                    text-align: center;
                    color: white;
                    max-width: 500px;
                    padding: 40px;
                }

                .celebration-animation {
                    font-size: 5rem;
                    margin-bottom: 20px;
                    animation: celebrationBounce 1s ease-out;
                }

                @keyframes celebrationBounce {
                    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
                    40% { transform: translateY(-30px); }
                    60% { transform: translateY(-15px); }
                }

                .celebration-content h2 {
                    color: #4CAF50;
                    margin-bottom: 15px;
                    font-size: 2rem;
                }

                .celebration-stats {
                    background: rgba(255,255,255,0.1);
                    border-radius: 12px;
                    padding: 20px;
                    margin: 20px 0;
                }

                .celebration-continue {
                    background: linear-gradient(135deg, #4CAF50, #66BB6A);
                    color: white;
                    border: none;
                    border-radius: 25px;
                    padding: 15px 30px;
                    font-size: 1.1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .celebration-continue:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(76, 175, 80, 0.4);
                }

                /* Efectos de partículas */
                .particle {
                    position: absolute;
                    pointer-events: none;
                    font-size: 1.5rem;
                    animation: particleFall 3s ease-out forwards;
                    z-index: 9999;
                }

                @keyframes particleFall {
                    0% {
                        opacity: 1;
                        transform: translateY(0) rotate(0deg) scale(1);
                    }
                    100% {
                        opacity: 0;
                        transform: translateY(200px) rotate(360deg) scale(0.5);
                    }
                }

                /* Estados de palabra leída */
                .rl-word {
                    transition: all 0.3s ease;
                    border-radius: 3px;
                    padding: 1px 2px;
                }

                .rl-word.rl-pending {
                    background: transparent;
                }

                .rl-word.rl-current {
                    background: rgba(255, 193, 7, 0.3);
                    box-shadow: 0 0 8px rgba(255, 193, 7, 0.4);
                }

                .rl-word.rl-done {
                    background: rgba(76, 175, 80, 0.3);
                    box-shadow: 0 0 4px rgba(76, 175, 80, 0.2);
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .caza-progress {
                        flex-direction: column;
                        align-items: stretch;
                    }
                    
                    .stats-panel {
                        justify-content: center;
                        flex-wrap: wrap;
                    }
                    
                    .modal-content {
                        width: 95%;
                        padding: 20px;
                    }
                }
            `;
            document.head.appendChild(styles);
        }

        setupLevel(levelIndex) {
            if (levelIndex >= this.config.levels.length) {
                this.completeGame();
                return;
            }

            const level = this.config.levels[levelIndex];
            this.currentLevel = levelIndex;
            this.currentTermIndex = 0;
            this.completedTerms.clear();

            // Actualizar UI
            document.getElementById('current-level').textContent = levelIndex + 1;
            document.getElementById('terms-total').textContent = level.concepts.length;
            document.getElementById('terms-found').textContent = 0;

            // Procesar contenido del nivel
            this.processLevelContent(level);
            
            // Configurar términos destacados según reglas de progresión
            this.setupHighlightedTerms(level, levelIndex);

            console.log(`[CazaConceptos] Nivel ${levelIndex + 1} configurado con ${level.concepts.length} conceptos`);
        }

        processLevelContent(level) {
            const contentDiv = document.getElementById('hunt-content') || this.createContentDiv();
            
            // Crear contenido con hint
            contentDiv.innerHTML = `
                <div class="level-content">
                    <div class="level-hint">
                        <div class="hint-icon">💡</div>
                        <div class="hint-text">${level.hint}</div>
                    </div>
                    <div class="level-text">
                        ${level.html}
                    </div>
                </div>
            `;
        }

        createContentDiv() {
            const contentDiv = document.createElement('div');
            contentDiv.id = 'hunt-content';
            contentDiv.className = 'hunt-content';
            
            const main = document.querySelector('main') || document.body;
            main.appendChild(contentDiv);
            
            return contentDiv;
        }

        setupHighlightedTerms(level, levelIndex) {
            const rule = this.config.highlightRules[levelIndex + 1] || this.config.highlightRules.default;
            const conceptsToHighlight = Math.max(
                rule.min,
                Math.ceil(level.concepts.length * rule.percentage)
            );

            // Seleccionar conceptos a destacar (primeros N conceptos)
            const termsToHighlight = level.concepts.slice(0, conceptsToHighlight);
            
            // Procesar texto y agregar highlighting
            const textContainer = document.querySelector('.level-text');
            if (!textContainer) return;

            let htmlContent = textContainer.innerHTML;
            
            termsToHighlight.forEach((concept, index) => {
                const regex = new RegExp(`\\b${this.escapeRegex(concept.term)}\\b`, 'gi');
                htmlContent = htmlContent.replace(regex, (match) => {
                    const classes = index === 0 ? 'concept-term current-target' : 'concept-term';
                    return `<span class="${classes}" data-term="${concept.term}" data-meaning="${concept.meaning}">${match}</span>`;
                });
            });

            textContainer.innerHTML = htmlContent;
            
            console.log(`[CazaConceptos] Destacados ${conceptsToHighlight} de ${level.concepts.length} términos para nivel ${levelIndex + 1}`);
        }

        setupEventListeners() {
            // Clicks en términos
            document.addEventListener('click', (e) => {
                if (e.target.classList.contains('concept-term') && !e.target.classList.contains('discovered')) {
                    this.handleTermClick(e.target);
                }
            });

            // Modal events
            document.addEventListener('click', (e) => {
                if (e.target.classList.contains('modal-backdrop')) {
                    this.closeDefinitionModal();
                }
            });

            // Celebration continue
            document.addEventListener('click', (e) => {
                if (e.target.id === 'celebration-continue') {
                    this.handleCelebrationContinue();
                }
            });

            // Actualizar estadísticas cada segundo
            setInterval(() => {
                this.updateStats();
            }, 1000);
        }

        handleTermClick(termElement) {
            const term = termElement.dataset.term;
            const meaning = termElement.dataset.meaning;
            
            if (this.isReading) {
                this.playSound('error');
                return;
            }

            // Verificar si es el término correcto en secuencia
            const level = this.config.levels[this.currentLevel];
            const expectedTerm = level.concepts[this.currentTermIndex];
            
            if (term !== expectedTerm.term) {
                this.playSound('error');
                this.showErrorFeedback(termElement);
                this.stats.retries++;
                return;
            }

            this.playSound('termSelect');
            this.showDefinitionModal(term, meaning);
            this.createParticleEffect(termElement, '⭐');
        }

        showDefinitionModal(term, meaning) {
            const modal = document.getElementById('definition-modal');
            const title = document.getElementById('term-title');
            const content = document.getElementById('definition-content');
            const progressBar = document.getElementById('modal-reading-progress');
            const progressText = document.getElementById('modal-reading-text');
            
            title.textContent = term;
            content.textContent = meaning;
            
            // Reset progress
            progressBar.style.width = '0%';
            progressText.textContent = '0% leído';
            
            modal.style.display = 'flex';
            
            // Configurar sistema de lectura para el modal
            this.setupModalReading(content, () => {
                this.onReadingComplete(term);
            });
        }

        setupModalReading(element, onComplete) {
            const micButton = document.getElementById('modal-mic-button');
            const status = document.getElementById('modal-reading-status');
            const progressBar = document.getElementById('modal-reading-progress');
            const progressText = document.getElementById('modal-reading-text');

            // Configurar reconocimiento de voz (simplificado)
            if (!window.SpeechRecognition && !window.webkitSpeechRecognition) {
                // Fallback sin reconocimiento de voz
                micButton.textContent = 'Continuar (sin micrófono)';
                micButton.onclick = () => {
                    setTimeout(onComplete, 2000); // Simular lectura
                };
                return;
            }

            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            const recognition = new SpeechRecognition();
            recognition.lang = this.config.readingConfig.lang;
            recognition.continuous = true;
            recognition.interimResults = true;

            let isListening = false;
            let startTime = null;
            let wordsRecognized = 0;
            const totalWords = element.textContent.split(' ').length;

            micButton.onclick = () => {
                if (!isListening) {
                    recognition.start();
                    isListening = true;
                    startTime = Date.now();
                    micButton.classList.add('listening');
                    micButton.querySelector('.mic-text').textContent = 'Escuchando...';
                    status.textContent = 'Lee en voz alta la definición';
                } else {
                    recognition.stop();
                    isListening = false;
                    micButton.classList.remove('listening');
                    micButton.querySelector('.mic-text').textContent = 'Comenzar Lectura';
                    status.textContent = 'Presiona para comenzar';
                }
            };

            recognition.onresult = (event) => {
                let finalTranscript = '';
                for (let i = event.resultIndex; i < event.results.length; i++) {
                    if (event.results[i].isFinal) {
                        finalTranscript += event.results[i][0].transcript + ' ';
                    }
                }

                if (finalTranscript.trim()) {
                    wordsRecognized += finalTranscript.trim().split(' ').length;
                    const progress = Math.min(wordsRecognized / totalWords, 1);
                    
                    progressBar.style.width = `${progress * 100}%`;
                    progressText.textContent = `${Math.round(progress * 100)}% leído`;

                    if (progress >= this.config.readingConfig.threshold) {
                        recognition.stop();
                        isListening = false;
                        micButton.classList.remove('listening');
                        micButton.classList.add('completed');
                        micButton.querySelector('.mic-text').textContent = '✅ Completado';
                        status.textContent = 'Lectura completada';
                        
                        const readingTime = Date.now() - startTime;
                        this.stats.totalReadingTime += readingTime;
                        this.stats.perfectReadings++;
                        
                        setTimeout(() => {
                            onComplete();
                        }, 1500);
                    }
                }
            };

            recognition.onerror = (event) => {
                console.warn('Error de reconocimiento:', event.error);
                isListening = false;
                micButton.classList.remove('listening');
                status.textContent = 'Error - Intenta nuevamente';
            };

            recognition.onend = () => {
                if (isListening) {
                    // Reintentar automáticamente
                    try {
                        recognition.start();
                    } catch (e) {
                        console.warn('No se pudo reiniciar reconocimiento');
                    }
                }
            };
        }

        onReadingComplete(term) {
            this.playSound('readingComplete');
            this.closeDefinitionModal();
            
            // Marcar término como descubierto
            const termElement = document.querySelector(`[data-term="${term}"]`);
            if (termElement) {
                termElement.classList.add('discovered');
                this.createParticleEffect(termElement, '🎉');
            }

            // Agregar a conceptos descubiertos
            const level = this.config.levels[this.currentLevel];
            const concept = level.concepts[this.currentTermIndex];
            this.discoveredConcepts.set(term, concept.meaning);
            this.completedTerms.add(this.currentTermIndex);
            this.stats.totalTermsFound++;

            // Actualizar progreso
            this.updateProgress();

            // Verificar si completó el nivel
            this.currentTermIndex++;
            if (this.currentTermIndex >= level.concepts.length) {
                setTimeout(() => {
                    this.completeLevel();
                }, 1000);
            } else {
                // Destacar siguiente término
                this.highlightNextTerm();
            }
        }

        highlightNextTerm() {
            // Remover highlight anterior
            document.querySelectorAll('.current-target').forEach(el => {
                el.classList.remove('current-target');
            });

            // Destacar siguiente término si está visible
            const level = this.config.levels[this.currentLevel];
            const nextConcept = level.concepts[this.currentTermIndex];
            const nextTermElement = document.querySelector(`[data-term="${nextConcept.term}"]`);
            
            if (nextTermElement && !nextTermElement.classList.contains('discovered')) {
                nextTermElement.classList.add('current-target');
                this.createParticleEffect(nextTermElement, '👀');
            }
        }

        updateProgress() {
            const level = this.config.levels[this.currentLevel];
            const progress = this.completedTerms.size / level.concepts.length;
            
            document.getElementById('game-progress').style.width = `${progress * 100}%`;
            document.getElementById('terms-found').textContent = this.completedTerms.size;
        }

        completeLevel() {
            this.playSound('levelComplete');
            
            const level = this.config.levels[this.currentLevel];
            
            this.showCelebration({
                title: `¡Nivel ${this.currentLevel + 1} Completado!`,
                message: `Has descubierto todos los conceptos de este párrafo.`,
                emoji: '🎊',
                stats: `
                    <div>Conceptos encontrados: ${level.concepts.length}</div>
                    <div>Precisión: ${this.calculateAccuracy()}%</div>
                `
            });
        }

        completeGame() {
            this.playSound('gameComplete');
            
            const totalConcepts = this.config.levels.reduce((sum, level) => sum + level.concepts.length, 0);
            const totalTime = Math.round((Date.now() - this.startTime) / 1000);
            
            this.showCelebration({
                title: '🏆 ¡Caza de Conceptos Completada!',
                message: `Has dominado todos los conceptos de ${this.config.author}`,
                emoji: '🎓',
                stats: `
                    <div>Total de conceptos: ${totalConcepts}</div>
                    <div>Tiempo total: ${this.formatTime(totalTime)}</div>
                    <div>Precisión final: ${this.calculateAccuracy()}%</div>
                `,
                final: true
            });
        }

        showCelebration({ title, message, emoji, stats, final = false }) {
            const overlay = document.getElementById('celebration-overlay');
            const titleEl = document.getElementById('celebration-title');
            const messageEl = document.getElementById('celebration-message');
            const animationEl = document.getElementById('celebration-animation');
            const statsEl = document.getElementById('celebration-stats');
            const continueBtn = document.getElementById('celebration-continue');
            
            titleEl.textContent = title;
            messageEl.textContent = message;
            animationEl.textContent = emoji;
            statsEl.innerHTML = stats;
            continueBtn.textContent = final ? 'Ver Glosario' : 'Continuar';
            
            overlay.style.display = 'flex';
            
            // Efectos de partículas masivos
            this.createMassiveParticleEffect();
        }

        handleCelebrationContinue() {
            const overlay = document.getElementById('celebration-overlay');
            overlay.style.display = 'none';
            
            if (this.currentLevel + 1 >= this.config.levels.length) {
                this.showFinalGlossary();
            } else {
                this.setupLevel(this.currentLevel + 1);
            }
        }

        showFinalGlossary() {
            const glossaryContent = Array.from(this.discoveredConcepts.entries())
                .map(([term, meaning]) => `
                    <div class="glossary-item">
                        <h4>${term}</h4>
                        <p>${meaning}</p>
                    </div>
                `).join('');

            const glossaryModal = document.createElement('div');
            glossaryModal.className = 'glossary-modal';
            glossaryModal.innerHTML = `
                <div class="glossary-content">
                    <h2>📚 Glosario Completo - ${this.config.author}</h2>
                    <div class="glossary-grid">
                        ${glossaryContent}
                    </div>
                    <button class="glossary-close">Finalizar</button>
                </div>
            `;
            
            document.body.appendChild(glossaryModal);
            
            glossaryModal.querySelector('.glossary-close').onclick = () => {
                if (this.config.menuUrl) {
                    window.location.href = this.config.menuUrl;
                } else {
                    glossaryModal.remove();
                }
            };
        }

        // Métodos de utilidad
        closeDefinitionModal() {
            document.getElementById('definition-modal').style.display = 'none';
        }

        createParticleEffect(element, emoji) {
            if (!this.config.particleEffects) return;
            
            const rect = element.getBoundingClientRect();
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.textContent = emoji;
            particle.style.left = `${rect.left + rect.width / 2}px`;
            particle.style.top = `${rect.top}px`;
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 3000);
        }

        createMassiveParticleEffect() {
            if (!this.config.particleEffects) return;
            
            const emojis = ['🎉', '🎊', '⭐', '🌟', '✨', '🎯', '🏆'];
            
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    const particle = document.createElement('div');
                    particle.className = 'particle';
                    particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                    particle.style.left = `${Math.random() * window.innerWidth}px`;
                    particle.style.top = `-50px`;
                    particle.style.fontSize = `${1 + Math.random() * 2}rem`;
                    
                    document.body.appendChild(particle);
                    
                    setTimeout(() => {
                        particle.remove();
                    }, 3000);
                }, i * 100);
            }
        }

        showErrorFeedback(element) {
            element.style.animation = 'shake 0.5s ease-in-out';
            setTimeout(() => {
                element.style.animation = '';
            }, 500);
            
            const style = document.createElement('style');
            style.textContent = `
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    75% { transform: translateX(5px); }
                }
            `;
            document.head.appendChild(style);
        }

        updateStats() {
            const currentTime = Math.round((Date.now() - this.startTime) / 1000);
            document.getElementById('stat-time').textContent = this.formatTime(currentTime);
            document.getElementById('stat-score').textContent = this.stats.totalTermsFound * 100;
            document.getElementById('stat-accuracy').textContent = `${this.calculateAccuracy()}%`;
        }

        calculateAccuracy() {
            const total = this.stats.totalTermsFound + this.stats.retries;
            return total === 0 ? 100 : Math.round((this.stats.totalTermsFound / total) * 100);
        }

        formatTime(seconds) {
            const mins = Math.floor(seconds / 60);
            const secs = seconds % 60;
            return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }

        escapeRegex(string) {
            return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }

        async playSound(type) {
            if (!this.config.soundEffects) return;
            
            try {
                const soundFile = this.config.sounds[type];
                if (!soundFile) return;
                
                const audio = new Audio(this.SOUND_BASE + soundFile);
                audio.volume = 0.5;
                await audio.play();
            } catch (err) {
                console.warn('[CazaConceptos] Error reproduciendo sonido:', err);
            }
        }
    }

    // Exponer API global
    window.CazaConceptosSystem = CazaConceptosSystem;

    // Auto-inicializar si existe configuración global
    if (window.CONCEPT_HUNT_CONFIG) {
        new CazaConceptosSystem();
    }

})();