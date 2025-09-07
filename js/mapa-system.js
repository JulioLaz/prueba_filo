/* mapa-system.js - Sistema Modular de Mapas Conceptuales Interactivos
 * Versión: 1.0
 * Uso: Incluir en cualquier mapa.html con configuración específica
 */

(function() {
    'use strict';

    // Configuración por defecto
    const DEFAULT_CONFIG = {
        tema: 'filosofia',
        soundsPath: '../../sound/',
        redirectTo: '../../tema.html',
        gameEnabled: true,
        autoTrackProgress: true,
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
        gameData: [] // Se debe proporcionar en la configuración específica
    };

    class MapaSystemModular {
        constructor() {
            // Fusionar configuración global con defaults
            this.config = { 
                ...DEFAULT_CONFIG, 
                ...(window.MapaSystemConfig || {}) 
            };
            
            // Establecer ruta base de sonidos
            this.SOUND_BASE = new URL(this.config.soundsPath, document.baseURI).href;
            
            // Estado del mapa
            this.visitedNodes = new Set();
            this.totalNodes = 0;
            
            // Estado del juego
            this.selectedTerm = null;
            this.correctCount = 0;
            this.errorCount = 0;
            this.matchedPairs = new Set();
            
            console.log(`[Mapa] Iniciando sistema para tema: ${this.config.tema}`);
            
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
            this.setupTree();
            this.setupNavigation();
            this.setupGame();
            this.loadProgress();
            
            console.log(`[Mapa] Sistema inicializado para ${this.config.tema}`);
        }

        // === SISTEMA DE ÁRBOL ===
        setupTree() {
            const tree = document.querySelector('.tree');
            if (!tree) {
                console.warn('[Mapa] No se encontró árbol conceptual');
                return;
            }
            
            // Contar nodos totales
            this.totalNodes = tree.querySelectorAll('.node[data-title]').length;
            console.log(`[Mapa] Total de nodos: ${this.totalNodes}`);

            // Colapsar todo inicialmente
            this.collapseAllNodes();
            
            // Event listener para clicks en nodos
            tree.addEventListener('click', (e) => this.handleTreeClick(e));
        }

        collapseAllNodes() {
            document.querySelectorAll('.tree li').forEach(li => {
                if (li.querySelector(':scope > ul')) {
                    li.classList.add('collapsed');
                } else {
                    const toggle = li.querySelector(':scope > .node .toggle');
                    if (toggle) toggle.style.visibility = 'hidden';
                }
            });
            console.log('[Mapa] Árbol completamente colapsado al inicio');
        }

        handleTreeClick(e) {
            const node = e.target.closest('.node');
            if (!node) return;

            // Marcar como visitado
            this.markNodeAsVisited(node);
            
            const toggle = e.target.closest('.toggle');
            if (!toggle) return;
            
            const parentLi = node.parentElement;
            if (parentLi && parentLi.tagName === 'LI' && parentLi.querySelector(':scope > ul')) {
                parentLi.classList.toggle('collapsed');
                if (parentLi.classList.contains('collapsed')) {
                    this.playSound('collapse');
                } else {
                    this.playSound('expand');
                }
            }
        }

        markNodeAsVisited(node) {
            const title = node.dataset.title || node.querySelector('.title')?.textContent?.trim();
            if (!title || this.visitedNodes.has(title)) return;

            this.visitedNodes.add(title);
            node.classList.add('visited');
            
            this.playSound('nodeVisit');
            
            console.log(`[Mapa] Nodo visitado: "${title}" (${this.visitedNodes.size}/${this.totalNodes})`);
            
            if (this.config.autoTrackProgress) {
                this.saveMapProgress();
            }

            // Animación de celebración
            const emoji = this.config.celebrationEmojis[Math.floor(Math.random() * this.config.celebrationEmojis.length)];
            this.showCelebrationEmoji(node, emoji);
        }

        showCelebrationEmoji(element, emoji) {
            const explosion = document.createElement('div');
            explosion.className = 'emoji-explosion';
            explosion.textContent = emoji;
            explosion.style.left = '50%';
            explosion.style.top = '10px';
            element.style.position = 'relative';
            element.appendChild(explosion);
            setTimeout(() => explosion.remove(), 800);
        }

        saveMapProgress() {
            const key = `tema.${this.config.tema}.mapa`;
            
            const state = {
                nodesVisited: Array.from(this.visitedNodes),
                total: this.totalNodes,
                progress: this.visitedNodes.size / this.totalNodes,
                completed: this.visitedNodes.size >= this.totalNodes,
                timestamp: new Date().toISOString()
            };

            console.log('[Mapa] Guardando progreso:', state);
            sessionStorage.setItem(key, JSON.stringify(state));
            
            // Disparar evento para tema.html
            window.parent.postMessage({ type: 'mapa-progress', data: state }, '*');
        }

        loadProgress() {
            if (!this.config.autoTrackProgress) return;
            
            const key = `tema.${this.config.tema}.mapa`;
            const saved = sessionStorage.getItem(key);
            if (!saved) return;

            try {
                const state = JSON.parse(saved);
                state.nodesVisited?.forEach(title => {
                    const node = document.querySelector(`[data-title="${title}"]`);
                    if (node) {
                        this.visitedNodes.add(title);
                        node.classList.add('visited');
                    }
                });
                console.log(`[Mapa] Progreso cargado: ${this.visitedNodes.size}/${this.totalNodes} nodos`);
            } catch (e) {
                console.warn('[Mapa] Error cargando progreso:', e);
            }
        }

        // === NAVEGACIÓN ===
        setupNavigation() {
            // Botón para volver al tema
            const backButton = document.getElementById('backToTema');
            if (backButton) {
                backButton.addEventListener('click', () => {
                    const params = new URLSearchParams(location.search);
                    const tema = params.get('tema') || params.get('theme') || this.config.tema;
                    const temaUrl = new URL(this.config.redirectTo, location);
                    temaUrl.searchParams.set('tema', tema);
                    temaUrl.searchParams.set('theme', tema);
                    location.href = temaUrl.toString();
                });
            }

            // Botones de expansión/colapso
            const expandButton = document.getElementById('expandAll');
            if (expandButton) {
                expandButton.addEventListener('click', () => {
                    document.querySelectorAll('.tree li.collapsed').forEach(li => li.classList.remove('collapsed'));
                });
            }

            const collapseButton = document.getElementById('collapseAll');
            if (collapseButton) {
                collapseButton.addEventListener('click', () => {
                    this.collapseAllNodes();
                });
            }
        }

        // === JUEGO DE MATCHING ===
        setupGame() {
            if (!this.config.gameEnabled || !this.config.gameData.length) {
                console.log('[Mapa] Juego deshabilitado o sin datos');
                return;
            }

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
        }

        initGame() {
            const termsGrid = document.getElementById('termsGrid');
            const definitionsGrid = document.getElementById('definitionsGrid');
            const gameOverlay = document.getElementById('gameOverlay');
            
            if (!termsGrid || !definitionsGrid || !gameOverlay) {
                console.warn('[Mapa] Elementos del juego no encontrados');
                return;
            }
            
            // Reset estado
            this.selectedTerm = null;
            this.correctCount = 0;
            this.errorCount = 0;
            this.matchedPairs.clear();
            
            // Shuffle datos
            const shuffledTerms = this.shuffle(this.config.gameData.map(item => ({...item, type: 'term'})));
            const shuffledDefs = this.shuffle(this.config.gameData.map(item => ({...item, type: 'definition'})));
            
            // Render grids
            termsGrid.innerHTML = shuffledTerms.map((item, idx) => 
                `<div class="card" data-term="${item.term}" data-type="term" data-idx="${idx}">${item.term}</div>`
            ).join('');
            
            definitionsGrid.innerHTML = shuffledDefs.map((item, idx) => 
                `<div class="card" data-term="${item.term}" data-type="definition" data-idx="${idx}">${item.definition}</div>`
            ).join('');

            this.updateGameStats();
            gameOverlay.style.display = 'flex';
            
            // Event listener para cartas
            gameOverlay.addEventListener('click', (e) => this.handleCardClick(e));
            
            console.log(`[Mapa] Juego iniciado con ${this.config.gameData.length} pares`);
        }

        handleCardClick(e) {
            const card = e.target.closest('.card');
            if (!card || card.classList.contains('matched')) return;

            if (card.dataset.type === 'term') {
                // Seleccionar término
                document.querySelectorAll('.card[data-type="term"].selected').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                this.selectedTerm = card.dataset.term;
                
            } else if (card.dataset.type === 'definition' && this.selectedTerm) {
                // Verificar definición
                if (card.dataset.term === this.selectedTerm) {
                    // Correcto
                    this.handleCorrectMatch(card);
                } else {
                    // Incorrecto
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
            termCard.classList.add('matched');
            card.classList.add('matched');
            
            const emoji = this.config.gameEmojis[Math.floor(Math.random() * this.config.gameEmojis.length)];
            this.showCelebrationEmoji(card, emoji);
            this.showCelebrationEmoji(termCard, emoji);
            
            this.selectedTerm = null;
            termCard.classList.remove('selected');
            
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
            document.querySelector(`[data-term="${this.selectedTerm}"][data-type="term"]`)?.classList.remove('selected');
            this.selectedTerm = null;
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
            
            console.log('[Mapa] Juego completado:', state);
        }

        closeGame() {
            const overlay = document.getElementById('gameOverlay');
            const celebration = document.getElementById('celebration');
            
            if (overlay) overlay.style.display = 'none';
            if (celebration) celebration.style.display = 'none';
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
            try {
                const soundFile = this.config.sounds[type];
                if (!soundFile) {
                    console.warn(`[Mapa] Sonido no configurado: ${type}`);
                    return;
                }
                
                const audio = new Audio(this.SOUND_BASE + soundFile);
                audio.volume = 0.3;
                await audio.play();
            } catch (err) {
                console.warn('[Mapa] Error reproduciendo sonido:', err);
            }
        }

        // === API PÚBLICA ===
        expandAll() {
            document.querySelectorAll('.tree li.collapsed').forEach(li => li.classList.remove('collapsed'));
        }

        collapseAll() {
            this.collapseAllNodes();
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
    }

    // Exponer API global
    window.MapaSystemModular = MapaSystemModular;

    // Auto-inicializar si existe configuración global
    if (window.MapaSystemConfig) {
        new MapaSystemModular();
    }

})();