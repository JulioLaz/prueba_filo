/* ========================================
 * 🗺️ MAPA-SYSTEM-FIXED.JS
 * Versión corregida con mejor manejo de eventos
 * ======================================== */

(function() {
    'use strict';

    console.log('🚀 Cargando sistema de mapas corregido...');

    // Configuración por defecto mejorada
    const DEFAULT_CONFIG = {
        tema: 'filosofia',
        soundsPath: '../../sound/',
        redirectTo: '../../tema.html',
        gameEnabled: true,
        autoTrackProgress: true,
        debugMode: true, // Activar logs detallados
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

    class MapaSystemFixed {
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
            
            // Flags de control
            this.initialized = false;
            this.eventListenersAttached = false;
            
            this.debugLog(`Iniciando sistema para tema: ${this.config.tema}`);
            this.init();
        }

        debugLog(message, ...args) {
            if (this.config.debugMode) {
                console.log(`[MapaFixed] ${message}`, ...args);
            }
        }

        init() {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => {
                    this.initializeSystem();
                });
            } else {
                // DOM ya está listo, inicializar inmediatamente
                this.initializeSystem();
            }
        }

        initializeSystem() {
            if (this.initialized) {
                this.debugLog('Sistema ya inicializado, omitiendo...');
                return;
            }

            this.debugLog('Inicializando sistema...');
            
            // Esperar un momento para que todos los elementos estén disponibles
            setTimeout(() => {
                this.setupTree();
                this.setupNavigation();
                this.setupGame();
                this.loadProgress();
                this.initialized = true;
                
                console.log(`✅ [MapaFixed] Sistema inicializado correctamente para ${this.config.tema}`);
                this.debugLog(`Nodos totales encontrados: ${this.totalNodes}`);
            }, 100);
        }

        // === SISTEMA DE ÁRBOL MEJORADO ===
        setupTree() {
            const tree = document.querySelector('.tree');
            if (!tree) {
                console.error('[MapaFixed] ❌ No se encontró árbol conceptual');
                return;
            }

            this.debugLog('Configurando árbol conceptual...');
            
            // Contar nodos totales
            this.totalNodes = tree.querySelectorAll('.node[data-title]').length;
            this.debugLog(`Total de nodos detectados: ${this.totalNodes}`);

            // Colapsar todo inicialmente con mejor lógica
            this.collapseAllNodesImproved();
            
            // Remover listeners existentes y agregar nuevos
            this.attachTreeEventListeners(tree);
        }

        collapseAllNodesImproved() {
            const allLis = document.querySelectorAll('.tree li');
            let collapsed = 0;
            let hiddenToggles = 0;

            allLis.forEach(li => {
                const childUl = li.querySelector(':scope > ul');
                const toggle = li.querySelector(':scope > .node .toggle');
                
                if (childUl) {
                    // Tiene hijos, debe ser colapsable
                    li.classList.add('collapsed');
                    collapsed++;
                    
                    if (toggle) {
                        toggle.style.visibility = 'visible';
                        toggle.setAttribute('aria-expanded', 'false');
                    }
                } else {
                    // No tiene hijos, ocultar toggle
                    if (toggle) {
                        toggle.style.visibility = 'hidden';
                        hiddenToggles++;
                    }
                }
            });

            this.debugLog(`Nodos colapsados: ${collapsed}, Toggles ocultos: ${hiddenToggles}`);
        }

        attachTreeEventListeners(tree) {
            if (this.eventListenersAttached) {
                this.debugLog('Event listeners ya están adjuntos');
                return;
            }

            // Usar delegación de eventos mejorada
            tree.addEventListener('click', (e) => {
                this.handleTreeClickImproved(e);
            }, { passive: false });

            // También escuchar eventos de teclado para accesibilidad
            tree.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    this.handleTreeClickImproved(e);
                }
            });

            this.eventListenersAttached = true;
            this.debugLog('Event listeners adjuntos correctamente');
        }

        handleTreeClickImproved(e) {
            this.debugLog('Click detectado:', e.target);

            const node = e.target.closest('.node');
            if (!node) {
                this.debugLog('Click no fue en un nodo válido');
                return;
            }

            // Siempre marcar como visitado
            this.markNodeAsVisited(node);
            
            // Verificar si fue click en toggle
            const toggle = e.target.closest('.toggle');
            if (!toggle) {
                this.debugLog('Click no fue en toggle');
                return;
            }

            e.preventDefault();
            e.stopPropagation();

            this.debugLog('Click en toggle detectado');
            
            const parentLi = node.closest('li');
            if (!parentLi) {
                this.debugLog('No se encontró li padre');
                return;
            }

            const childUl = parentLi.querySelector(':scope > ul');
            if (!childUl) {
                this.debugLog('No hay ul hijo para expandir');
                return;
            }

            // Alternar estado
            const wasCollapsed = parentLi.classList.contains('collapsed');
            parentLi.classList.toggle('collapsed');
            const isNowCollapsed = parentLi.classList.contains('collapsed');

            // Actualizar aria-expanded
            toggle.setAttribute('aria-expanded', !isNowCollapsed);

            // Reproducir sonido
            if (isNowCollapsed) {
                this.playSound('collapse');
            } else {
                this.playSound('expand');
            }

            this.debugLog(`Estado cambiado: ${wasCollapsed ? 'colapsado' : 'expandido'} → ${isNowCollapsed ? 'colapsado' : 'expandido'}`);
            
            // Verificar que el cambio sea visible
            setTimeout(() => {
                const display = getComputedStyle(childUl).display;
                this.debugLog(`Visibilidad del ul hijo: ${display}`);
            }, 50);
        }

        markNodeAsVisited(node) {
            const title = node.dataset.title || node.querySelector('.title')?.textContent?.trim();
            if (!title) {
                this.debugLog('Nodo sin título válido');
                return;
            }

            if (this.visitedNodes.has(title)) {
                this.debugLog(`Nodo ya visitado: "${title}"`);
                return;
            }

            this.visitedNodes.add(title);
            node.classList.add('visited');
            
            this.playSound('nodeVisit');
            
            console.log(`✅ [MapaFixed] Nodo visitado: "${title}" (${this.visitedNodes.size}/${this.totalNodes})`);
            
            if (this.config.autoTrackProgress) {
                this.saveMapProgress();
            }

            // Animación de celebración mejorada
            const emoji = this.config.celebrationEmojis[Math.floor(Math.random() * this.config.celebrationEmojis.length)];
            this.showCelebrationEmojiImproved(node, emoji);
        }

        showCelebrationEmojiImproved(element, emoji) {
            const explosion = document.createElement('div');
            explosion.className = 'emoji-explosion';
            explosion.textContent = emoji;
            
            // Posicionamiento mejorado
            explosion.style.cssText = `
                position: absolute;
                left: 50%;
                top: -10px;
                transform: translateX(-50%);
                z-index: 1000;
                pointer-events: none;
                font-size: 2rem;
            `;

            // Asegurar que el elemento padre tenga posición relativa
            if (getComputedStyle(element).position === 'static') {
                element.style.position = 'relative';
            }

            element.appendChild(explosion);

            // Remover después de la animación
            setTimeout(() => {
                if (explosion.parentNode) {
                    explosion.parentNode.removeChild(explosion);
                }
            }, 800);
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

            this.debugLog('Guardando progreso:', state);

            // Guardar en sessionStorage
            sessionStorage.setItem(key, JSON.stringify(state));

            // Intentar Firebase si está disponible
            this.saveToFirebaseIfAvailable(state);

            // Comunicación con tema.html
            this.notifyParent(state);
        }

        saveToFirebaseIfAvailable(state) {
            // Verificar si Firebase está disponible
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

            this.debugLog('ℹ️ Firebase no disponible, usando solo sessionStorage');
        }

        notifyParent(state) {
            try {
                // PostMessage para iframe/popup
                window.parent.postMessage({ 
                    type: 'mapa-progress', 
                    data: state,
                    tema: this.config.tema 
                }, '*');

                // Custom event para misma ventana
                window.dispatchEvent(new CustomEvent('mapa-progress-updated', {
                    detail: { state, tema: this.config.tema }
                }));

            } catch (error) {
                this.debugLog('Error en comunicación con parent:', error);
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

                this.debugLog(`Progreso cargado: ${restored}/${this.totalNodes} nodos restaurados`);
            } catch (e) {
                console.warn('[MapaFixed] Error cargando progreso:', e);
            }
        }

        // === NAVEGACIÓN ===
        setupNavigation() {
            this.debugLog('Configurando navegación...');

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

            const expandButton = document.getElementById('expandAll');
            if (expandButton) {
                expandButton.style.display = 'inline-block';
                expandButton.addEventListener('click', () => {
                    this.expandAll();
                });
            }

            const collapseButton = document.getElementById('collapseAll');
            if (collapseButton) {
                collapseButton.style.display = 'inline-block';
                collapseButton.addEventListener('click', () => {
                    this.collapseAll();
                });
            }
        }

        // === JUEGO DE MATCHING (simplificado para enfocarnos en el árbol) ===
        setupGame() {
            if (!this.config.gameEnabled || !this.config.gameData.length) {
                this.debugLog('Juego deshabilitado o sin datos');
                return;
            }

            const startButton = document.getElementById('startGame');
            if (startButton) {
                startButton.addEventListener('click', () => this.initGame());
                this.debugLog('Botón de juego configurado');
            }
        }

        initGame() {
            this.debugLog('Inicializando juego... (implementación simplificada)');
            // Implementación del juego aquí si es necesario
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

        // Método de diagnóstico
        diagnosticar() {
            console.log('\n🔍 === DIAGNÓSTICO DEL SISTEMA ===');
            
            const tree = document.querySelector('.tree');
            const allLis = tree?.querySelectorAll('li') || [];
            const collapsedLis = tree?.querySelectorAll('li.collapsed') || [];
            const toggles = tree?.querySelectorAll('.toggle') || [];
            
            console.log(`📊 Árbol encontrado: ${!!tree}`);
            console.log(`📊 Total <li>: ${allLis.length}`);
            console.log(`📊 <li> colapsados: ${collapsedLis.length}`);
            console.log(`📊 Toggles: ${toggles.length}`);
            console.log(`📊 Nodos visitados: ${this.visitedNodes.size}/${this.totalNodes}`);
            console.log(`📊 Progreso: ${Math.round((this.visitedNodes.size/this.totalNodes)*100)}%`);
            console.log(`📊 Event listeners: ${this.eventListenersAttached}`);
            console.log(`📊 Sistema inicializado: ${this.initialized}`);
        }
    }

    // Reemplazar sistema anterior
    window.MapaSystemFixed = MapaSystemFixed;
    
    // Auto-inicializar si existe configuración
    if (window.MapaSystemConfig) {
        console.log('🔄 Creando instancia corregida del sistema de mapas...');
        window.mapaSystemInstance = new MapaSystemFixed();
        
        // Exponer función de diagnóstico
        window.diagnosticarSistema = () => {
            if (window.mapaSystemInstance) {
                window.mapaSystemInstance.diagnosticar();
            }
        };
    }

    console.log('✅ Sistema de mapas corregido cargado');
    console.log('🛠️ Función de diagnóstico: diagnosticarSistema()');

})();