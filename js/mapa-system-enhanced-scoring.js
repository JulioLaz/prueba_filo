/* ========================================
 * 🎯 MAPA-SYSTEM-ENHANCED-SCORING.JS
 * Sistema de puntuación obligatoria: Mapa 100% + Juego 80%
 * ======================================== */

(function() {
    'use strict';
    
    console.log('🎯 Iniciando sistema de puntuación obligatoria...');
    
    // ====================================
    // CONFIGURACIÓN DE PUNTUACIÓN
    // ====================================
    
    const SCORING_CONFIG = {
        // Requisitos obligatorios
        requiredMapCompletion: 1.0,      // 100% del mapa
        requiredGameCompletion: 0.8,     // 80% del juego
        
        // Pesos para el score final
        weights: {
            mapa: 0.3,    // 30% del score total
            juego: 0.7    // 70% del score total
        },
        
        // Estados
        states: {
            LOCKED: 'locked',           // Juego bloqueado
            UNLOCKED: 'unlocked',       // Juego desbloqueado
            APPROVED: 'approved',       // Actividad aprobada
            COMPLETED: 'completed'      // Actividad completada
        }
    };
    
    class EnhancedScoringSystem {
        constructor() {
            this.startTime = Date.now();
            this.initialized = false;
            
            // Estados de progreso
            this.mapProgress = {
                visited: 0,
                total: 0,
                percentage: 0,
                completed: false
            };
            
            this.gameProgress = {
                correct: 0,
                total: 0,
                percentage: 0,
                completed: false
            };
            
            this.overallStatus = SCORING_CONFIG.states.LOCKED;
            
            console.log('📊 Sistema de puntuación inicializado');
            this.init();
        }
        
        init() {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => this.setup());
            } else {
                this.setup();
            }
        }
        
        setup() {
            if (this.initialized) return;
            
            console.log('⚙️ Configurando sistema de puntuación...');
            
            // Esperar a que el sistema de mapas esté listo
            this.waitForMapSystem();
            
            // Crear UI de progreso
            this.createProgressUI();
            
            // Configurar listeners
            this.setupEventListeners();
            
            this.initialized = true;
            console.log('✅ Sistema de puntuación configurado');
        }
        
        waitForMapSystem() {
            const checkSystem = () => {
                if (window.mapaSystemInstance) {
                    this.attachToMapSystem();
                    this.loadSavedProgress();
                } else {
                    setTimeout(checkSystem, 100);
                }
            };
            checkSystem();
        }
        
        attachToMapSystem() {
            const originalSystem = window.mapaSystemInstance;
            
            // Override del método de marcar nodos visitados
            const originalMarkVisited = originalSystem.markNodeAsVisited.bind(originalSystem);
            originalSystem.markNodeAsVisited = (node) => {
                originalMarkVisited(node);
                this.updateMapProgress();
            };
            
            // Override del método de manejo de respuestas correctas
            const originalCorrectMatch = originalSystem.handleCorrectMatch.bind(originalSystem);
            originalSystem.handleCorrectMatch = (card) => {
                originalCorrectMatch(card);
                this.updateGameProgress();
            };
            
            // Override del método de inicio de juego
            const originalInitGame = originalSystem.initGame.bind(originalSystem);
            originalSystem.initGame = () => {
                if (this.isGameUnlocked()) {
                    originalInitGame();
                } else {
                    this.showGameLockedMessage();
                }
            };
            
            console.log('🔗 Sistema conectado al mapa principal');
        }
        
        // ====================================
        // GESTIÓN DE PROGRESO
        // ====================================
        
        updateMapProgress() {
            const system = window.mapaSystemInstance;
            if (!system) return;
            
            const progress = system.getProgress();
            this.mapProgress = {
                visited: progress.visitedNodes.length,
                total: progress.totalNodes,
                percentage: progress.progress,
                completed: progress.progress >= SCORING_CONFIG.requiredMapCompletion
            };
            
            console.log(`📖 Progreso del mapa: ${Math.round(this.mapProgress.percentage * 100)}%`);
            
            // Verificar si se desbloqueó el juego
            if (this.mapProgress.completed && this.overallStatus === SCORING_CONFIG.states.LOCKED) {
                this.unlockGame();
            }
            
            this.updateUI();
            this.saveProgress();
        }
        
        updateGameProgress() {
            const system = window.mapaSystemInstance;
            if (!system) return;
            
            const gameStats = system.getGameStats();
            this.gameProgress = {
                correct: gameStats.correctCount,
                total: gameStats.totalPairs,
                percentage: gameStats.totalPairs > 0 ? gameStats.correctCount / gameStats.totalPairs : 0,
                completed: gameStats.completed
            };
            
            console.log(`🎮 Progreso del juego: ${Math.round(this.gameProgress.percentage * 100)}%`);
            
            // Verificar aprobación
            this.checkApprovalStatus();
            
            this.updateUI();
            this.saveProgress();
        }
        
        checkApprovalStatus() {
            const mapOK = this.mapProgress.completed;
            const gameOK = this.gameProgress.percentage >= SCORING_CONFIG.requiredGameCompletion;
            
            if (mapOK && gameOK) {
                this.overallStatus = SCORING_CONFIG.states.APPROVED;
                console.log('🎉 ¡ACTIVIDAD APROBADA!');
                this.showApprovalMessage();
            } else if (mapOK) {
                this.overallStatus = SCORING_CONFIG.states.UNLOCKED;
            } else {
                this.overallStatus = SCORING_CONFIG.states.LOCKED;
            }
        }
        
        // ====================================
        // CONTROL DE ACCESO AL JUEGO
        // ====================================
        
        isGameUnlocked() {
            return this.mapProgress.completed;
        }
        
        unlockGame() {
            this.overallStatus = SCORING_CONFIG.states.UNLOCKED;
            
            // Actualizar botón del juego
            const startButton = document.getElementById('startGame');
            if (startButton) {
                startButton.disabled = false;
                startButton.textContent = '🎮 ¡Jugar Desbloqueado!';
                startButton.style.background = '#4CAF50';
            }
            
            console.log('🔓 Juego desbloqueado - Mapa completado');
            this.showUnlockMessage();
        }
        
        showGameLockedMessage() {
            const message = document.createElement('div');
            message.className = 'game-locked-message';
            message.innerHTML = `
                <div style="
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: #ff6b6b;
                    color: white;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
                    z-index: 10000;
                    text-align: center;
                    max-width: 400px;
                ">
                    <h3>🔒 Juego Bloqueado</h3>
                    <p>Debes completar <strong>todo el mapa conceptual</strong> antes de acceder al juego.</p>
                    <p>Progreso actual: <strong>${Math.round(this.mapProgress.percentage * 100)}%</strong></p>
                    <button onclick="this.parentElement.parentElement.remove()" 
                            style="margin-top: 10px; padding: 8px 16px; background: white; color: #ff6b6b; border: none; border-radius: 5px; cursor: pointer;">
                        Entendido
                    </button>
                </div>
            `;
            
            document.body.appendChild(message);
            
            // Auto-remover después de 5 segundos
            setTimeout(() => {
                if (message.parentElement) {
                    message.remove();
                }
            }, 5000);
        }
        
        showUnlockMessage() {
            const message = document.createElement('div');
            message.innerHTML = `
                <div style="
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: #4CAF50;
                    color: white;
                    padding: 15px;
                    border-radius: 8px;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                    z-index: 10000;
                    animation: slideIn 0.5s ease;
                ">
                    <strong>🎉 ¡Juego Desbloqueado!</strong><br>
                    Completaste el mapa. Ahora puedes jugar.
                </div>
            `;
            
            document.body.appendChild(message);
            setTimeout(() => message.remove(), 4000);
        }
        
        showApprovalMessage() {
            const message = document.createElement('div');
            message.innerHTML = `
                <div style="
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    padding: 30px;
                    border-radius: 15px;
                    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
                    z-index: 10000;
                    text-align: center;
                    max-width: 500px;
                ">
                    <h2>🏆 ¡ACTIVIDAD APROBADA!</h2>
                    <p>Has completado exitosamente:</p>
                    <p>📖 Mapa conceptual: ${Math.round(this.mapProgress.percentage * 100)}%</p>
                    <p>🎮 Juego de conceptos: ${Math.round(this.gameProgress.percentage * 100)}%</p>
                    <p><strong>Score final: ${this.calculateFinalScore()}%</strong></p>
                    <button onclick="this.parentElement.parentElement.remove()" 
                            style="margin-top: 15px; padding: 10px 20px; background: white; color: #667eea; border: none; border-radius: 8px; cursor: pointer; font-weight: bold;">
                        ¡Genial!
                    </button>
                </div>
            `;
            
            document.body.appendChild(message);
        }
        
        // ====================================
        // CÁLCULO DE SCORE FINAL
        // ====================================
        
        calculateFinalScore() {
            const mapScore = this.mapProgress.percentage * SCORING_CONFIG.weights.mapa;
            const gameScore = this.gameProgress.percentage * SCORING_CONFIG.weights.juego;
            const finalScore = (mapScore + gameScore) * 100;
            
            return Math.round(finalScore);
        }
        
        getDetailedScore() {
            return {
                map: {
                    progress: this.mapProgress.percentage,
                    weight: SCORING_CONFIG.weights.mapa,
                    contribution: this.mapProgress.percentage * SCORING_CONFIG.weights.mapa
                },
                game: {
                    progress: this.gameProgress.percentage,
                    weight: SCORING_CONFIG.weights.juego,
                    contribution: this.gameProgress.percentage * SCORING_CONFIG.weights.juego
                },
                final: this.calculateFinalScore(),
                approved: this.overallStatus === SCORING_CONFIG.states.APPROVED,
                status: this.overallStatus
            };
        }
        
        // ====================================
        // INTERFAZ DE USUARIO
        // ====================================
        
        createProgressUI() {
            const progressContainer = document.createElement('div');
            progressContainer.id = 'enhanced-progress';
            progressContainer.innerHTML = `
                <div style="
                    position: fixed;
                    top: 10px;
                    right: 10px;
                    background: rgba(225, 202, 133, 0.95);
                    padding: 5px;
                    border-radius: 10px;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                    border-left: 4px solid #667eea;
                    z-index: 1000;
                  //   min-width: 280px;
                    font-size: 14px;
                ">
                    <div style="font-weight: bold; margin: 2px; color: #333;">
                        📊
                    </div>
                    
                    <div style="margin-bottom: 8px;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span>📖 Mapa conceptual:</span>
                            <span id="map-percentage" style="font-weight: bold;">0%</span>
                        </div>
                        <div style="background: #e0e0e0; height: 6px; border-radius: 3px; margin-top: 3px;">
                            <div id="map-progress-bar" style="background: #4CAF50; height: 100%; border-radius: 3px; width: 0%; transition: width 0.3s;"></div>
                        </div>
                        <div style="font-size: 11px; color: #666; margin-top: 2px;">
                            Requerido: 100% para desbloquear juego
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 8px;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span>🎮 Juego de conceptos:</span>
                            <span id="game-percentage" style="font-weight: bold;">0%</span>
                        </div>
                        <div style="background: #e0e0e0; height: 6px; border-radius: 3px; margin-top: 3px;">
                            <div id="game-progress-bar" style="background: #FF9800; height: 100%; border-radius: 3px; width: 0%; transition: width 0.3s;"></div>
                        </div>
                        <div style="font-size: 11px; color: #666; margin-top: 2px;">
                            Requerido: 80% para aprobar
                        </div>
                    </div>
                    
                    <div style="border-top: 1px solid #e0e0e0; padding-top: 8px; margin-top: 8px;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-weight: bold;">🏆 Score final:</span>
                            <span id="final-score" style="font-weight: bold; color: #667eea;">0%</span>
                        </div>
                        <div id="status-message" style="font-size: 11px; margin-top: 3px; font-style: italic;">
                            Completa el mapa para comenzar
                        </div>
                    </div>
                </div>
            `;
            
            document.body.appendChild(progressContainer);
            
            // Hacer que sea minimizable
            this.makeProgressMinimizable(progressContainer);
        }
        
        makeProgressMinimizable(container) {
            const header = container.querySelector('div > div');
            header.style.cursor = 'pointer';
            header.addEventListener('click', () => {
                const content = container.querySelector('div').children;
                for (let i = 1; i < content.length; i++) {
                    const element = content[i];
                    element.style.display = element.style.display === 'none' ? '' : 'none';
                }
            });
        }
        
        updateUI() {
            // Actualizar barras de progreso
            const mapBar = document.getElementById('map-progress-bar');
            const gameBar = document.getElementById('game-progress-bar');
            const mapPercentage = document.getElementById('map-percentage');
            const gamePercentage = document.getElementById('game-percentage');
            const finalScore = document.getElementById('final-score');
            const statusMessage = document.getElementById('status-message');
            
            if (mapBar) {
                mapBar.style.width = `${this.mapProgress.percentage * 100}%`;
                mapPercentage.textContent = `${Math.round(this.mapProgress.percentage * 100)}%`;
            }
            
            if (gameBar) {
                gameBar.style.width = `${this.gameProgress.percentage * 100}%`;
                gamePercentage.textContent = `${Math.round(this.gameProgress.percentage * 100)}%`;
            }
            
            if (finalScore) {
                finalScore.textContent = `${this.calculateFinalScore()}%`;
            }
            
            if (statusMessage) {
                statusMessage.textContent = this.getStatusMessage();
                statusMessage.style.color = this.getStatusColor();
            }
            
            // Actualizar botón del juego
            this.updateGameButton();
        }
        
        updateGameButton() {
            const startButton = document.getElementById('startGame');
            if (!startButton) return;
            
            if (this.isGameUnlocked()) {
                startButton.disabled = false;
                startButton.textContent = '🎮 Jugar';
                startButton.style.background = '#4CAF50';
                startButton.style.cursor = 'pointer';
            } else {
                startButton.disabled = true;
                startButton.textContent = '🔒 Bloqueado';
                startButton.style.background = '#ccc';
                startButton.style.cursor = 'not-allowed';
            }
        }
        
        getStatusMessage() {
            switch (this.overallStatus) {
                case SCORING_CONFIG.states.LOCKED:
                    return 'Completa el mapa para desbloquear juego';
                case SCORING_CONFIG.states.UNLOCKED:
                    return 'Juego desbloqueado - Necesitas 80% para aprobar';
                case SCORING_CONFIG.states.APPROVED:
                    return '¡Actividad aprobada! Excelente trabajo';
                default:
                    return 'Iniciando...';
            }
        }
        
        getStatusColor() {
            switch (this.overallStatus) {
                case SCORING_CONFIG.states.LOCKED:
                    return '#ff6b6b';
                case SCORING_CONFIG.states.UNLOCKED:
                    return '#FF9800';
                case SCORING_CONFIG.states.APPROVED:
                    return '#4CAF50';
                default:
                    return '#666';
            }
        }
        
        // ====================================
        // PERSISTENCIA Y EVENTOS
        // ====================================
        
        setupEventListeners() {
            // Escuchar eventos del sistema de mapas
            window.addEventListener('mapa-progress-updated', (event) => {
                this.updateMapProgress();
            });
            
            // Interceptar guardado de Firebase
            this.interceptFirebaseSave();
        }
        
        interceptFirebaseSave() {
            const originalSave = window.saveMapaProgress;
            if (originalSave) {
                window.saveMapaProgress = async (nodesVisited, totalNodes, timeSpent) => {
                    // Calcular score con nueva lógica
                    const finalScore = this.calculateFinalScore();
                    const isApproved = this.overallStatus === SCORING_CONFIG.states.APPROVED;
                    
                    console.log(`💾 Guardando con score mejorado: ${finalScore}% (Aprobado: ${isApproved})`);
                    
                    // Usar el sistema original de Firebase pero con score actualizado
                    return originalSave(finalScore, 100, timeSpent);
                };
            }
        }
        
        saveProgress() {
            const progressData = {
                map: this.mapProgress,
                game: this.gameProgress,
                overall: this.overallStatus,
                finalScore: this.calculateFinalScore(),
                timestamp: new Date().toISOString()
            };
            
            sessionStorage.setItem('enhanced-progress', JSON.stringify(progressData));
        }
        
        loadSavedProgress() {
            const saved = sessionStorage.getItem('enhanced-progress');
            if (saved) {
                try {
                    const data = JSON.parse(saved);
                    this.mapProgress = data.map || this.mapProgress;
                    this.gameProgress = data.game || this.gameProgress;
                    this.overallStatus = data.overall || this.overallStatus;
                    
                    console.log('📂 Progreso cargado desde sesión');
                    this.updateUI();
                } catch (e) {
                    console.warn('Error cargando progreso guardado:', e);
                }
            }
        }
        
        // ====================================
        // API PÚBLICA
        // ====================================
        
        getStatus() {
            return this.getDetailedScore();
        }
        
        forceUnlock() {
            console.log('🔧 Forzando desbloqueo del juego (modo debug)');
            this.mapProgress.completed = true;
            this.mapProgress.percentage = 1.0;
            this.unlockGame();
            this.updateUI();
        }
        
        reset() {
            console.log('🔄 Reiniciando progreso del sistema de puntuación');
            this.mapProgress = { visited: 0, total: 0, percentage: 0, completed: false };
            this.gameProgress = { correct: 0, total: 0, percentage: 0, completed: false };
            this.overallStatus = SCORING_CONFIG.states.LOCKED;
            sessionStorage.removeItem('enhanced-progress');
            this.updateUI();
        }
    }
    
    // ====================================
    // INICIALIZACIÓN
    // ====================================
    
    // Crear instancia global
    window.enhancedScoringSystem = new EnhancedScoringSystem();
    
    // Funciones de debug
    window.debugScoring = () => {
        const system = window.enhancedScoringSystem;
        console.log('\n📊 === DIAGNÓSTICO SISTEMA DE PUNTUACIÓN ===');
        console.log('Estado actual:', system.getStatus());
        console.log('Configuración:', SCORING_CONFIG);
    };
    
    window.forceUnlockGame = () => {
        window.enhancedScoringSystem.forceUnlock();
    };
    
    window.resetScoringProgress = () => {
        window.enhancedScoringSystem.reset();
    };
    
    console.log('✅ Sistema de puntuación obligatoria cargado');
    console.log('🛠️ Funciones debug: debugScoring(), forceUnlockGame(), resetScoringProgress()');
    
})();