/* ========================================
 * 🗺️ MAPA-SYSTEM-COMPLETE.JS
 * Versión completa con árbol funcionando + juego de matching
 * ======================================== */

(function() {
    'use strict';

    console.log('🚀 Cargando sistema de mapas completo...');

    // Configuración por defecto
    const DEFAULT_CONFIG = {
        tema: 'filosofia',
        soundsPath: '../../sound/',
        redirectTo: '../../tema.html',
        gameEnabled: true,
        autoTrackProgress: true,
        debugMode: true,
        celebrationEmojis: ['🌟', '⭐', '💫', '✨', '🎯', '🚀', '🏆'],
        gameEmojis: ['🎉', '🌟', '⭐', '💫', '✨', '🎯', '🚀', '🏆'],
        sounds: {
            nodeVisit: 'collect_points.mp3',
            expand: 'show_question.mp3',
            collapse: 'timer_warning.mp3',
            correct: 'correct_answer.mp3',
            wrong: 'negative_beep.mp3',
            gameComplete: 'fin_caza.mp3'
        },
        gameData: []
    };

    class MapaSystemComplete {
        constructor() {
            this.config = { 
                ...DEFAULT_CONFIG, 
                ...(window.MapaSystemConfig || {}) 
            };
            
            this.SOUND_BASE = new URL(this.config.soundsPath, document.baseURI).href;
            
            // Estado del mapa
            this.visitedNodes = new Set();
            this.totalNodes = 0;
            this.startTime = Date.now();
            
            // Estado del juego
            this.selectedTerm = null;
            this.correctCount = 0;
            this.errorCount = 0;
            this.matchedPairs = new Set();
            this.gameInitialized = false;
            
            // Flags de control
            this.initialized = false;
            this.eventListenersAttached = false;
            
            this.debugLog(`Iniciando sistema completo para tema: ${this.config.tema}`);
            this.init();
        }

        debugLog(message, ...args) {
            if (this.config.debugMode) {
                console.log(`[MapaComplete] ${message}`, ...args);
            }
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
            if (this.initialized) {
                this.debugLog('Sistema ya inicializado');
                return;
            }

            this.debugLog('Inicializando sistema completo...');
            
            setTimeout(() => {
                this.setupTree();
                this.setupNavigation();
                this.setupGame();
                this.loadProgress();
                this.initialized = true;
                
                console.log(`✅ [MapaComplete] Sistema completo inicializado para ${this.config.tema}`);
                this.debugLog(`Nodos: ${this.totalNodes}, Juego: ${this.config.gameEnabled}, Datos: ${this.config.gameData.length}`);
            }, 100);
        }

        // === SISTEMA DE ÁRBOL (funcional) ===
        setupTree() {
            const tree = document.querySelector('.tree');
            if (!tree) {
                console.error('[MapaComplete] ❌ No se encontró árbol conceptual');
                return;
            }

            this.debugLog('Configurando árbol conceptual...');
            
            this.totalNodes = tree.querySelectorAll('.node[data-title]').length;
            this.debugLog(`Total de nodos detectados: ${this.totalNodes}`);

            this.collapseAllNodesImproved();
            this.attachTreeEventListeners(tree);
        }

        collapseAllNodesImproved() {
            const allLis = document.querySelectorAll('.tree li');
            let collapsed = 0;

            allLis.forEach(li => {
                const childUl = li.querySelector(':scope > ul');
                const toggle = li.querySelector(':scope > .node .toggle');
                
                if (childUl) {
                    li.classList.add('collapsed');
                    collapsed++;
                    
                    if (toggle) {
                        toggle.style.visibility = 'visible';
                        toggle.setAttribute('aria-expanded', 'false');
                    }
                } else {
                    if (toggle) {
                        toggle.style.visibility = 'hidden';
                    }
                }
            });

            this.debugLog(`Nodos colapsados: ${collapsed}`);
        }

        attachTreeEventListeners(tree) {
            if (this.eventListenersAttached) return;

            tree.addEventListener('click', (e) => {
                this.handleTreeClickImproved(e);
            }, { passive: false });

            this.eventListenersAttached = true;
            this.debugLog('Event listeners del árbol adjuntos');
        }

        handleTreeClickImproved(e) {
            const node = e.target.closest('.node');
            if (!node) return;

            this.markNodeAsVisited(node);
            
            const toggle = e.target.closest('.toggle');
            if (!toggle) return;

            e.preventDefault();
            e.stopPropagation();

            const parentLi = node.closest('li');
            if (!parentLi) return;

            const childUl = parentLi.querySelector(':scope > ul');
            if (!childUl) return;

            const wasCollapsed = parentLi.classList.contains('collapsed');
            parentLi.classList.toggle('collapsed');
            const isNowCollapsed = parentLi.classList.contains('collapsed');

            toggle.setAttribute('aria-expanded', !isNowCollapsed);

            if (isNowCollapsed) {
                this.playSound('collapse');
            } else {
                this.playSound('expand');
            }

            this.debugLog(`Estado: ${wasCollapsed ? 'colapsado' : 'expandido'} → ${isNowCollapsed ? 'colapsado' : 'expandido'}`);
        }

        markNodeAsVisited(node) {
            const title = node.dataset.title || node.querySelector('.title')?.textContent?.trim();
            if (!title || this.visitedNodes.has(title)) return;

            this.visitedNodes.add(title);
            node.classList.add('visited');
            
            this.playSound('nodeVisit');
            
            console.log(`✅ [MapaComplete] Nodo visitado: "${title}" (${this.visitedNodes.size}/${this.totalNodes})`);
            
            if (this.config.autoTrackProgress) {
                this.saveMapProgress();
            }

            const emoji = this.config.celebrationEmojis[Math.floor(Math.random() * this.config.celebrationEmojis.length)];
            this.showCelebrationEmoji(node, emoji);
        }

        showCelebrationEmoji(element, emoji) {
            const explosion = document.createElement('div');
            explosion.className = 'emoji-explosion';
            explosion.textContent = emoji;
            
            explosion.style.cssText = `
                position: absolute;
                left: 50%;
                top: -10px;
                transform: translateX(-50%);
                z-index: 1000;
                pointer-events: none;
                font-size: 2rem;
            `;

            if (getComputedStyle(element).position === 'static') {
                element.style.position = 'relative';
            }

            element.appendChild(explosion);
            setTimeout(() => explosion.remove(), 800);
        }

        // === SISTEMA DE GUARDADO ===
        saveMapProgress() {
            const key = `tema.${this.config.tema}.mapa`;
            
            const state = {
                nodesVisited: Array.from(this.visitedNodes),
                total: this.totalNodes,
                progress: this.visitedNodes.size / this.totalNodes,
                completed: this.visitedNodes.size >= this.totalNodes,
                timestamp: new Date().toISOString()
            };

            sessionStorage.setItem(key, JSON.stringify(state));
            this.saveToFirebaseIfAvailable(state);
            this.notifyParent(state);
        }

        saveToFirebaseIfAvailable(state) {
            const contexts = [window, window.parent, window.top];
            
            for (const ctx of contexts) {
                try {
                    if (ctx.saveMapaProgress && typeof ctx.saveMapaProgress === 'function') {
                        const timeSpent = Math.round((Date.now() - this.startTime) / 1000);
                        
                        ctx.saveMapaProgress(
                            state.nodesVisited.length,
                            state.total,
                            timeSpent
                        ).then(() => {
                            this.debugLog('✅ Guardado en Firebase exitoso');
                        }).catch(error => {
                            this.debugLog('❌ Error guardando en Firebase:', error);
                        });
                        
                        return;
                    }
                } catch (e) {
                    // Ignorar errores cross-origin
                }
            }
        }

        notifyParent(state) {
            try {
                window.parent.postMessage({ 
                    type: 'mapa-progress', 
                    data: state,
                    tema: this.config.tema 
                }, '*');

                window.dispatchEvent(new CustomEvent('mapa-progress-updated', {
                    detail: { state, tema: this.config.tema }
                }));
            } catch (error) {
                this.debugLog('Error en comunicación:', error);
            }
        }

        loadProgress() {
            if (!this.config.autoTrackProgress) return;
            
            const key = `tema.${this.config.tema}.mapa`;
            const saved = sessionStorage.getItem(key);
            if (!saved) return;

            try {
                const state = JSON.parse(saved);
                let restored = 0;

                state.nodesVisited?.forEach(title => {
                    const node = document.querySelector(`[data-title="${title}"]`);
                    if (node) {
                        this.visitedNodes.add(title);
                        node.classList.add('visited');
                        restored++;
                    }
                });

                this.debugLog(`Progreso cargado: ${restored}/${this.totalNodes} nodos`);
            } catch (e) {
                console.warn('[MapaComplete] Error cargando progreso:', e);
            }
        }

        // === NAVEGACIÓN ===
        setupNavigation() {
            const backButton = document.getElementById('backToTema');
            if (backButton) {
                backButton.addEventListener('click', () => {
                    const params = new URLSearchParams(location.search);
                    const tema = params.get('tema') || params.get('theme') || this.config.tema;
                    const temaUrl = new URL(this.config.redirectTo, location);
                    temaUrl.searchParams.set('tema', tema);
                    location.href = temaUrl.toString();
                });
            }

            const expandButton = document.getElementById('expandAll');
            if (expandButton) {
                expandButton.style.display = 'inline-block';
                expandButton.addEventListener('click', () => this.expandAll());
            }

            const collapseButton = document.getElementById('collapseAll');
            if (collapseButton) {
                collapseButton.style.display = 'inline-block';
                collapseButton.addEventListener('click', () => this.collapseAll());
            }
        }

        // === JUEGO DE MATCHING COMPLETO ===
        setupGame() {
            if (!this.config.gameEnabled || !this.config.gameData.length) {
                this.debugLog('Juego deshabilitado o sin datos');
                return;
            }

            this.debugLog(`Configurando juego con ${this.config.gameData.length} pares`);

            const startButton = document.getElementById('startGame');
            const closeButton = document.getElementById('closeGame');
            const overlay = document.getElementById('gameOverlay');

            if (startButton) {
                startButton.addEventListener('click', () => this.initGame());
            }

            if (closeButton) {
                closeButton.addEventListener('click', () => this.closeGame());
            }

            if (overlay) {
                overlay.addEventListener('click', (e) => {
                    if (e.target === e.currentTarget) {
                        this.closeGame();
                    }
                });
            }

            this.debugLog('Botones del juego configurados');
        }

        initGame() {
            this.debugLog('Inicializando juego completo...');

            const termsGrid = document.getElementById('termsGrid');
            const definitionsGrid = document.getElementById('definitionsGrid');
            const gameOverlay = document.getElementById('gameOverlay');
            
            if (!termsGrid || !definitionsGrid || !gameOverlay) {
                console.warn('[MapaComplete] Elementos del juego no encontrados');
                return;
            }
            
            // Reset estado
            this.selectedTerm = null;
            this.correctCount = 0;
            this.errorCount = 0;
            this.matchedPairs.clear();
            
            // Shuffle datos
            const shuffledTerms = this.shuffle([...this.config.gameData]);
            const shuffledDefs = this.shuffle([...this.config.gameData]);
            
            // Render grids
            termsGrid.innerHTML = shuffledTerms.map((item, idx) => 
                `<div class="card" data-term="${item.term}" data-type="term" data-idx="${idx}">${item.term}</div>`
            ).join('');
            
            definitionsGrid.innerHTML = shuffledDefs.map((item, idx) => 
                `<div class="card" data-term="${item.term}" data-type="definition" data-idx="${idx}">${item.definition}</div>`
            ).join('');

            this.updateGameStats();
            gameOverlay.style.display = 'flex';
            
            // Event listener para cartas (remover previos)
            if (this.gameInitialized) {
                gameOverlay.removeEventListener('click', this.gameClickHandler);
            }
            
            this.gameClickHandler = (e) => this.handleCardClick(e);
            gameOverlay.addEventListener('click', this.gameClickHandler);
            this.gameInitialized = true;
            
            console.log(`🎮 [MapaComplete] Juego iniciado con ${this.config.gameData.length} pares`);
        }

        handleCardClick(e) {
            const card = e.target.closest('.card');
            if (!card || card.classList.contains('matched')) return;

            this.debugLog('Click en carta:', card.dataset.term, card.dataset.type);

            if (card.dataset.type === 'term') {
                // Seleccionar término
                document.querySelectorAll('.card[data-type="term"].selected').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                this.selectedTerm = card.dataset.term;
                this.debugLog('Término seleccionado:', this.selectedTerm);
                
            } else if (card.dataset.type === 'definition' && this.selectedTerm) {
                // Verificar definición
                if (card.dataset.term === this.selectedTerm) {
                    this.handleCorrectMatch(card);
                } else {
                    this.handleIncorrectMatch(card);
                }
                this.updateGameStats();
            }
        }

        handleCorrectMatch(card) {
            this.correctCount++;
            this.matchedPairs.add(this.selectedTerm);
            this.playSound('correct');
            
            const termCard = document.querySelector(`[data-term="${this.selectedTerm}"][data-type="term"]`);
            if (termCard) {
                termCard.classList.add('matched');
                termCard.classList.remove('selected');
            }
            card.classList.add('matched');
            
            const emoji = this.config.gameEmojis[Math.floor(Math.random() * this.config.gameEmojis.length)];
            this.showCelebrationEmoji(card, emoji);
            if (termCard) {
                this.showCelebrationEmoji(termCard, emoji);
            }
            
            this.selectedTerm = null;
            
            this.debugLog(`Respuesta correcta! Progreso: ${this.matchedPairs.size}/${this.config.gameData.length}`);
            
            if (this.matchedPairs.size === this.config.gameData.length) {
                setTimeout(() => {
                    this.playSound('gameComplete');
                    this.showGameComplete();
                }, 800);
            }
        }

        handleIncorrectMatch(card) {
            this.errorCount++;
            this.playSound('wrong');
            
            card.classList.add('wrong');
            setTimeout(() => card.classList.remove('wrong'), 300);
            
            const selectedTermCard = document.querySelector(`[data-term="${this.selectedTerm}"][data-type="term"]`);
            if (selectedTermCard) {
                selectedTermCard.classList.remove('selected');
            }
            
            this.selectedTerm = null;
            this.debugLog('Respuesta incorrecta');
        }

        updateGameStats() {
            const correctEl = document.getElementById('correctCount');
            const errorEl = document.getElementById('errorCount');
            const currentEl = document.getElementById('currentProgress');
            const totalEl = document.getElementById('totalPairs');
            const progressEl = document.getElementById('gameProgress');

            if (correctEl) correctEl.textContent = this.correctCount;
            if (errorEl) errorEl.textContent = this.errorCount;
            if (currentEl) currentEl.textContent = this.matchedPairs.size;
            if (totalEl) totalEl.textContent = this.config.gameData.length;
            
            if (progressEl) {
                const progressPercent = (this.matchedPairs.size / this.config.gameData.length) * 100;
                progressEl.style.width = progressPercent + '%';
            }
        }

        showGameComplete() {
            const celebration = document.getElementById('celebration');
            if (celebration) {
                celebration.style.display = 'block';
            }
            
            // Guardar progreso del juego
            const key = `tema.${this.config.tema}.matching`;
            const state = {
                completed: true,
                correctCount: this.correctCount,
                errorCount: this.errorCount,
                timestamp: new Date().toISOString()
            };
            sessionStorage.setItem(key, JSON.stringify(state));
            
            console.log('🏆 [MapaComplete] Juego completado:', state);
        }

        closeGame() {
            const overlay = document.getElementById('gameOverlay');
            const celebration = document.getElementById('celebration');
            
            if (overlay) overlay.style.display = 'none';
            if (celebration) celebration.style.display = 'none';
            
            this.debugLog('Juego cerrado');
        }

        // === UTILIDADES ===
        shuffle(array) {
            const arr = [...array];
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            return arr;
        }

        async playSound(type) {
            if (!this.config.sounds[type]) return;
            
            try {
                const audio = new Audio(this.SOUND_BASE + this.config.sounds[type]);
                audio.volume = 0.3;
                await audio.play();
            } catch (err) {
                this.debugLog('Error reproduciendo sonido:', err);
            }
        }

        // === API PÚBLICA ===
        expandAll() {
            const collapsedItems = document.querySelectorAll('.tree li.collapsed');
            collapsedItems.forEach(li => {
                li.classList.remove('collapsed');
                const toggle = li.querySelector('.toggle');
                if (toggle) {
                    toggle.setAttribute('aria-expanded', 'true');
                }
            });
            this.debugLog(`Expandidos ${collapsedItems.length} nodos`);
        }

        collapseAll() {
            this.collapseAllNodesImproved();
        }

        getProgress() {
            return {
                visitedNodes: Array.from(this.visitedNodes),
                totalNodes: this.totalNodes,
                progress: this.visitedNodes.size / this.totalNodes,
                completed: this.visitedNodes.size >= this.totalNodes
            };
        }

        getGameStats() {
            return {
                correctCount: this.correctCount,
                errorCount: this.errorCount,
                matchedPairs: this.matchedPairs.size,
                totalPairs: this.config.gameData.length,
                completed: this.matchedPairs.size === this.config.gameData.length
            };
        }

        // Diagnóstico
        diagnosticar() {
            console.log('\n🔍 === DIAGNÓSTICO DEL SISTEMA COMPLETO ===');
            
            const tree = document.querySelector('.tree');
            const gameOverlay = document.getElementById('gameOverlay');
            const termsGrid = document.getElementById('termsGrid');
            
            console.log(`📊 Árbol: ${!!tree}`);
            console.log(`📊 Overlay del juego: ${!!gameOverlay}`);
            console.log(`📊 Grid de términos: ${!!termsGrid}`);
            console.log(`📊 Nodos visitados: ${this.visitedNodes.size}/${this.totalNodes}`);
            console.log(`📊 Datos del juego: ${this.config.gameData.length} pares`);
            console.log(`📊 Juego habilitado: ${this.config.gameEnabled}`);
            console.log(`📊 Sistema inicializado: ${this.initialized}`);
            console.log(`📊 Event listeners: ${this.eventListenersAttached}`);
        }
    }

    // Reemplazar sistema anterior
    window.MapaSystemComplete = MapaSystemComplete;
    
    // Auto-inicializar
    if (window.MapaSystemConfig) {
        console.log('🔄 Creando instancia completa del sistema de mapas...');
        window.mapaSystemInstance = new MapaSystemComplete();
        
        window.diagnosticarSistema = () => {
            if (window.mapaSystemInstance) {
                window.mapaSystemInstance.diagnosticar();
            }
        };
    }

    console.log('✅ Sistema de mapas completo cargado (árbol + juego)');
    console.log('🛠️ Funciones: diagnosticarSistema()');

})();