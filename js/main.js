// ========================================
// 🎯 SELECTOR DE TEMAS - CUESTIONARIOS DE FILOSOFÍA
// ========================================
// ⏱️ Tiempo inicio: ${new Date().toLocaleTimeString()}

console.log('🚀 Iniciando selector de temas...');
const startTime = performance.now();

// ========================================
// 🎮 CONFIGURACIÓN DE TEMAS DISPONIBLES
// ========================================

const AVAILABLE_THEMES = [
    {
        id: "cassirer",
        title: "Ernst Cassirer: El ser humano como animal simbólico",
        description: "Explora la antropología filosófica de Cassirer: el hombre como creador de símbolos, el lenguaje, el arte, el mito y la cultura como mediaciones de nuestra vida humana.",
        icon: "🎭",
        gradient: "linear-gradient(135deg, #6a85b6 0%, #bac8e0 100%)",
        difficulty: "UNIDAD_II",
        questions: 10,
        timeEstimate: 10,
        prerequisites: [],
        color: "#6a85b6",
        contentFile: "content/cassirer.html"

    },
    {
        id: "sartre",
        title: "Jean-Paul Sartre: El ser humano es libertad", 
        description: "Existencialismo: existencia precede a la esencia, libertad ineludible, angustia, desamparo, desesperación, mala fe y autenticidad.",
        icon: "🌀",
        gradient: "linear-gradient(135deg, #222831 0%, #393e46 50%, #00adb5 100%)",
        difficulty: "UNIDAD_II",
        questions: 10,
        timeEstimate: 12,
        prerequisites: [],
        color: "#00adb5",
        contentFile: "themes/sartre/content.html", // ✅ Nueva ruta
        useModularConfig: true // ✅ Flag para usar config.json
    },
    {
        id: 'etica',
        title: 'Ética y Moral',
        description: 'Explora dilemas morales, libertad, responsabilidad y los grandes debates sobre cómo debemos actuar.',
        icon: '🧭',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        difficulty: 'UNIDAD_III',
        questions: 10,
        timeEstimate: 8,
        prerequisites: [],
        color: '#667eea',
        contentFile: 'themes/etica/content.html'
    },
    {
        id: 'etica_aristoteles',
        title: 'Aristóteles: Lo Bueno es la Felicidad',
        description: 'Descubre la ética aristotélica: la felicidad como fin último, la virtud como término medio y la vida contemplativa.',
        icon: '🏛️',
        gradient: 'linear-gradient(135deg, #d4af37 0%, #ffd700 100%)',
        difficulty: 'UNIDAD_III',
        questions: 12,
        timeEstimate: 10,
        prerequisites: [],
        // prerequisites: ['etica'],
        color: '#d4af37',
        contentFile: 'themes/etica_aristoteles/content.html'
    },
    {
    id: 'hedonismo',
    title: 'Hedonismo: El Placer como Fin de la Vida',
    description: 'Explora la búsqueda del placer y la felicidad desde Epicuro hasta las interpretaciones modernas: ataraxia, placeres superiores y la vida serena.',
    icon: '🌸',
    gradient: 'linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%)',
    difficulty: 'UNIDAD_III',
    questions: 14,
    timeEstimate: 12,
    prerequisites: [],
    color: '#ff6b6b',
    contentFile: 'themes/hedonismo/content.html'
    },
    {
        id: 'utilitarismo',
        title: 'Utilitarismo: La Mayor Felicidad para el Mayor Número de Personas',
        description: 'Explora la ética consecuencialista de John Stuart Mill: placeres superiores e inferiores, imparcialidad moral y utilitarismo del acto vs. regla.',
        icon: '🎯',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        difficulty: 'UNIDAD_III',
        questions: 12,
        timeEstimate: 10,
        prerequisites: [],
        color: '#667eea',
        contentFile: 'themes/utilitarismo/content.html'
    },
    {
        id: 'pragmatismo',
        title: 'Pragmatismo: Lo Verdadero es lo Práctico',
        description: 'Explora la filosofía americana que evalúa las ideas por su utilidad práctica: Peirce, James, Dewey y la verdad como herramienta de acción.',
        icon: '🛠️',
        gradient: 'linear-gradient(135deg, #ff9500 0%, #ff6b35 100%)',
        difficulty: 'UNIDAD_III',
        questions: 12,
        timeEstimate: 10,
        prerequisites: [],
        color: '#ff9500',
        contentFile: 'content/pragmatismo.html'
    },
    {
    id: 'etica_kant',
    title: 'Ética Kantiana: Lo Bueno es lo que se Hace por Deber',
    description: 'Explora la filosofía de Immanuel Kant y su teoría deontológica, donde la moralidad reside en el deber y la intención, no en las consecuencias.',
    icon: '⚖️',
    gradient: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)',
    difficulty: 'UNIDAD_III',
    questions: 10,
    timeEstimate: 15,
    prerequisites: [],
    color: '#1d4ed8',
    contentFile: 'content/etica_kant.html'
    },
    {
        id: 'antropocentrismo',
        title: 'Antropocentrismo: El Humano en el Centro del Universo',
        description: 'Explora el gran cambio del pensamiento medieval al moderno: del teocentrismo al antropocentrismo, el Renacimiento, el Humanismo y sus implicaciones éticas contemporáneas.',
        icon: '🎭',
        gradient: 'linear-gradient(135deg, #d4af37 0%, #ffd700 100%)',
        difficulty: 'UNIDAD_III',
        questions: 12,
        timeEstimate: 15,
        prerequisites: [],
        // prerequisites: ['etica'],
        color: '#d4af37',
        contentFile: 'content/antropocentrismo.html'
    },    
    {
        id: 'epistemologia',
        title: 'Conocimiento y Verdad',
        description: 'Analiza qué es el conocimiento, cómo lo adquirimos y los límites de lo que podemos saber.',
        icon: '🔍',
        gradient: 'linear-gradient(135deg, #4caf50 0%, #a08c45ff 100%)',
        difficulty: 'avanzado',
        questions: 12,
        timeEstimate: 10,
        prerequisites: [],
        color: '#4caf50',
        contentFile: 'content/epistemologia.html'
    },
    {
        id: 'logica',
        title: '🧠 Lógica y Argumentación',
        description: 'Domina el arte del razonamiento válido, falacias lógicas y construcción de argumentos sólidos.',
        icon: '🧠',
        gradient: 'linear-gradient(135deg, #ff9800 0%, #f57c00 100%)',
        difficulty: 'avanzado',
        questions: 15,
        timeEstimate: 12,
        prerequisites: ['etica'],
        color: '#ff9800',
        contentFile: 'content/logica.html'
    },
    {
        id: 'metafisica',
        title: '🌌 Realidad y Existencia',
        description: 'Profundiza en la naturaleza del ser, la realidad, el tiempo, el espacio y la existencia misma.',
        icon: '🌌',
        gradient: 'linear-gradient(135deg, #9c27b0 0%, #673ab7 100%)',
        difficulty: 'avanzado',
        questions: 18,
        timeEstimate: 15,
        prerequisites: ['epistemologia'],
        color: '#9c27b0',
        contentFile: 'content/metafisica.html'
    },
    {
        id: 'estetica',
        title: '🎨 Belleza y Arte',
        description: 'Examina la naturaleza de la belleza, el arte, el gusto estético y la experiencia artística.',
        icon: '🎨',
        gradient: 'linear-gradient(135deg, #e91e63 0%, #ad1457 100%)',
        difficulty: 'avanzado',
        questions: 10,
        timeEstimate: 8,
        prerequisites: ['etica'],
        color: '#e91e63',
        contentFile: 'content/estetica.html'
    },
    {
        id: 'filosofia-politica',
        title: '🏛️ Poder y Sociedad',
        description: 'Estudia la justicia, el poder, los derechos humanos y las formas ideales de organización social.',
        icon: '🏛️',
        gradient: 'linear-gradient(135deg, #f44336 0%, #d32f2f 100%)',
        difficulty: 'avanzado',
        questions: 20,
        timeEstimate: 18,
        prerequisites: ['etica', 'logica'],
        color: '#f44336',
        contentFile: 'content/filosofia-politica.html'
    },
    {
    id: "proyecto_T2",
    title: "Proyecto de Antropología Filosófica",
    description: "Desentrañando el misterio humano con método, investigación y debate.",
    icon: "✨",
    gradient: "linear-gradient(135deg, #6b00f5 0%, #9b5cff 50%, #cdb7ff 100%)",
    difficulty: "PROYECTO_TRIMESTRAL",
    questions: 0,
    timeEstimate: 240,
    prerequisites: [],
    //   prerequisites: ["cassirer","sartre","etica","etica_aristoteles","etica_kant"],
    color: "#8a5cf6",
    contentFile: "projects/project_t2.html", //C:\JulioPrograma\prueba_filo\prueba_filo\projects\project_t2.html
    useModularConfig: true,
    type: 'intermedio'
    },
    {
    id: "proyecto_T3",
    title: "Proyecto Final",
    description: "Desentrañando el misterio humano con método, investigación y debate.",
    icon: "✨",
    gradient: "linear-gradient(135deg, #f74513ff 0%, #d0e833ff 50%, #42a714ff 100%)",
    difficulty: "PROYECTO_TRIMESTRAL",
    questions: 0,
    timeEstimate: 240,
    prerequisites: [],
    //   prerequisites: ["cassirer","sartre","etica","etica_aristoteles","etica_kant"],
    color: "#264befff",
    contentFile: "projects/project_t3.html", //C:\JulioPrograma\prueba_filo\prueba_filo\projects\project_t2.html
    useModularConfig: true,
    type: 'intermedio'
    },
    {
    id: "dino",
    title: "Dinosaurio",
    description: "Saltando obstáculos en este juego simple pero adictivo.",
    icon: "🎮",
    gradient: "linear-gradient(135deg, #280a02ff 0%, #d0e833ff 50%, #19e6edff 100%)",
    difficulty: "GAME",
    // difficulty: "GAME",
    questions: 0,
    timeEstimate: 240,
    prerequisites: [],
    color: "#264befff",
    contentFile: "game/dino.html", //C:\JulioPrograma\prueba_filo\prueba_filo\projects\project_t2.html
    useModularConfig: true,
    type: 'intermedio'
    },
    {
    id: "game",
    title: "Sudoku - El Juego de los Números",
    description: "Completa con los numeros que faltan!",
    icon: "🎮",
    gradient: "linear-gradient(135deg, #f04515ff 0%, #d0e833ff 50%, #4c5addff 100%)",
    difficulty: "GAME",
    questions: 0,
    timeEstimate: 240,
    prerequisites: [],
    color: "#c37a36ff",
    contentFile: "game/sudoku.html", //C:\JulioPrograma\prueba_filo\prueba_filo\projects\project_t2.html
    useModularConfig: true,
    type: 'intermedio'
    }

];

console.log(`📚 Configuración cargada: ${AVAILABLE_THEMES.length} temas disponibles`);
console.log("📚 Temas disponibles (IDs):");
AVAILABLE_THEMES.forEach(theme => {
  console.log(theme.id);
});

// ========================================
// 🎯 ELEMENTOS DEL DOM
// ========================================

const themesGrid = document.getElementById('themes-grid');
const searchInput = document.getElementById('search-input');
const filterButtons = document.querySelectorAll('.filter-btn');
const statsContainer = document.getElementById('stats-container');
const aboutModal = document.getElementById('about-modal');
const aboutBtn = document.getElementById('about-btn');
const clearDataBtn = document.getElementById('clear-data-btn');
const closeModal = document.querySelector('.close');

// Elementos de estadísticas
const totalCompletedElement = document.getElementById('total-completed');
const totalScoreElement = document.getElementById('total-score');
const totalTimeElement = document.getElementById('total-time');

console.log('🎮 Elementos DOM inicializados');

// ========================================
// 💾 GESTIÓN DE DATOS LOCALES
// ========================================

/**
 * Obtiene el progreso guardado del usuario
 * @returns {Object} Datos de progreso del usuario
 */
function getUserProgress() {
    const defaultProgress = {
        completedThemes: {},
        totalTime: 0,
        lastVisit: new Date().toISOString()
    };
    
    try {
        const saved = localStorage.getItem('filosofia-quiz-progress');
        return saved ? { ...defaultProgress, ...JSON.parse(saved) } : defaultProgress;
    } catch (error) {
        console.warn('⚠️ Error al cargar progreso:', error);
        return defaultProgress;
    }
}

/**
 * Guarda el progreso del usuario
 * @param {Object} progress - Datos de progreso a guardar
 */
function saveUserProgress(progress) {
    try {
        localStorage.setItem('filosofia-quiz-progress', JSON.stringify({
            ...progress,
            lastVisit: new Date().toISOString()
        }));
        console.log('💾 Progreso guardado exitosamente');
    } catch (error) {
        console.error('❌ Error al guardar progreso:', error);
    }
}

/**
 * Limpia todos los datos guardados
 */
function clearUserData() {
    if (confirm('¿Estás seguro de que quieres eliminar todo tu progreso? Esta acción no se puede deshacer.')) {
        localStorage.removeItem('filosofia-quiz-progress');
        console.log('🗑️ Datos eliminados');
        location.reload();
    }
}

// ========================================
// 📊 ACTUALIZACIÓN DE ESTADÍSTICAS
// ========================================

/**
 * Actualiza las estadísticas globales del usuario
 */
function updateGlobalStats() {
    console.log('📊 Actualizando estadísticas globales...');
    const startStatsTime = performance.now();
    
    const progress = getUserProgress();
    const completed = Object.keys(progress.completedThemes);
    
    // Calcular estadísticas
    const totalCompleted = completed.length;
    const totalScores = completed.map(themeId => progress.completedThemes[themeId].score || 0);
    const averageScore = totalScores.length > 0 
        ? Math.round(totalScores.reduce((a, b) => a + b, 0) / totalScores.length) 
        : 0;
    const totalMinutes = Math.round(progress.totalTime / 60000) || 0;
    
    // Actualizar elementos
    totalCompletedElement.textContent = totalCompleted;
    totalScoreElement.textContent = `${averageScore}%`;
    totalTimeElement.textContent = `${totalMinutes}min`;
    
    const endStatsTime = performance.now();
    console.log(`✅ Estadísticas actualizadas en ${(endStatsTime - startStatsTime).toFixed(2)}ms`);
}

// ========================================
// 🎨 RENDERIZADO DE TEMAS
// ========================================

/**
 * Verifica si un tema está desbloqueado
 * @param {Object} theme - Tema a verificar
 * @returns {boolean} True si está desbloqueado
 */
function isThemeUnlocked(theme) {
    if (theme.prerequisites.length === 0) return true;
    
    const progress = getUserProgress();
    return theme.prerequisites.every(prereq => 
        progress.completedThemes[prereq] && 
        progress.completedThemes[prereq].score >= 0
    );
}

/**
 * Obtiene el progreso de un tema específico
 * @param {string} themeId - ID del tema
 * @returns {Object|null} Datos de progreso del tema
 */
function getThemeProgress(themeId) {
    const progress = getUserProgress();
    return progress.completedThemes[themeId] || null;
}

/**
 * Renderiza una tarjeta de tema
 * @param {Object} theme - Datos del tema
 * @returns {HTMLElement} Elemento de la tarjeta
 */
function createThemeCard(theme) {
    const isUnlocked = isThemeUnlocked(theme);
    const themeProgress = getThemeProgress(theme.id);
    const isCompleted = themeProgress && themeProgress.score >= 50;
    const progressPercentage = themeProgress ? (themeProgress.score || 0) : 0;
    
    const card = document.createElement('div');
    card.className = `theme-card ${isCompleted ? 'completed' : ''} ${!isUnlocked ? 'locked' : ''}`;
    card.style.setProperty('--card-gradient', theme.gradient);
    card.style.setProperty('--progress', `${progressPercentage}%`);
    
    const lockIcon = !isUnlocked ? '🔒' : '';
    const completedBadge = isCompleted ? '<div class="completion-badge">✅</div>' : '';

    // FORMATO A DIFICULTAD EN TARGET DE TEMAS EXTREMO SUP DERECHO

    let dificultadFormateada = theme.difficulty;
    let style_difficulty = '';

    if (dificultadFormateada !== 'PROYECTO_TRIMESTRAL' && dificultadFormateada !== 'GAME') {
        dificultadFormateada = dificultadFormateada.replace(/_/g, ' ');

        if (dificultadFormateada == 'basico' || dificultadFormateada == 'UNIDAD I') {
            style_difficulty = 'basico';
        }
        else if (dificultadFormateada == 'intermedio' || dificultadFormateada == 'UNIDAD II') {
            style_difficulty = 'intermedio';
        }
        else if (dificultadFormateada == 'avanzado' || dificultadFormateada == 'UNIDAD III') {
            style_difficulty = 'avanzado';
        }
    } else if(dificultadFormateada === 'PROYECTO_TRIMESTRAL' ){
        dificultadFormateada = 'PROYECTO';
        style_difficulty = 'PROYECTO';
    } else if(dificultadFormateada === 'GAME' ){
        dificultadFormateada = 'GAME';
        style_difficulty = 'game';
    }


    card.innerHTML = `
        <div class="theme-header">
            <span class="difficulty-badge difficulty-${style_difficulty}">
                ${dificultadFormateada}
            </span>
            ${completedBadge}
            <span class="theme-icon">${lockIcon || theme.icon}</span>
            <h3 class="theme-title">${theme.title}</h3>
            <p class="theme-description">${theme.description}</p>
        </div>
        <div class="theme-stats">
            <div class="theme-stat">
                <span class="theme-stat-number">${theme.questions}</span>
                <span class="theme-stat-label">Preguntas</span>
            </div>
            <div class="theme-stat">
                <span class="theme-stat-number">${theme.timeEstimate}</span>
                <span class="theme-stat-label">Minutos</span>
            </div>
            <div class="theme-stat">
                <span class="theme-stat-number">${themeProgress ? themeProgress.score || 0 : 0}%</span>
                <span class="theme-stat-label">Mejor puntaje</span>
            </div>
        </div>
        <div class="theme-progress"></div>
    `;
    
    if (isUnlocked) {
    card.addEventListener('click', () => {
        console.log(`🎯 Navegando al tema: ${theme.id}`);

        const isProyecto = theme.difficulty === 'PROYECTO_TRIMESTRAL';
        const isGame     = theme.difficulty === 'GAME';

        if (isProyecto || isGame) {
        window.location.href = theme.contentFile;   // ✅ ahora GAME abre su HTML
        console.log(`➡️ Abriendo: ${theme.contentFile}`);
        } else {
        window.location.href = `tema.html?tema=${theme.id}`;
        }
    });
    }
  
    else {
        card.addEventListener('click', () => {
            const prereqNames = theme.prerequisites.map(id => 
                AVAILABLE_THEMES.find(t => t.id === id)?.title || id
            ).join(', ');
            alert(`🔒 Para desbloquear este tema, primero completa: ${prereqNames}`);
        });
    }
    
    return card;
}

/**
 * Renderiza todos los temas en el grid
 * @param {Array} themes - Array de temas a renderizar
 */
function renderThemes(themes = AVAILABLE_THEMES) {
    console.log(`🎨 Renderizando ${themes.length} temas...`);
    const renderStart = performance.now();
    
    themesGrid.innerHTML = '';
    
    themes.forEach((theme, index) => {
        const card = createThemeCard(theme);
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
        themesGrid.appendChild(card);
    });
    
    const renderEnd = performance.now();
    console.log(`✅ Temas renderizados en ${(renderEnd - renderStart).toFixed(2)}ms`);
}

// ========================================
// 🔍 BÚSQUEDA Y FILTRADO
// ========================================

let currentFilter = 'all';
let currentSearch = '';

/**
 * Filtra los temas según criterios activos
 * @returns {Array} Temas filtrados
 */
function getFilteredThemes() {
    let filtered = AVAILABLE_THEMES;
    
    // Filtro por dificultad
    if (currentFilter !== 'all') {
        filtered = filtered.filter(theme => theme.difficulty === currentFilter);
    }
    
    // Filtro por búsqueda
    if (currentSearch) {
        const searchLower = currentSearch.toLowerCase();
        filtered = filtered.filter(theme => 
            theme.title.toLowerCase().includes(searchLower) ||
            theme.description.toLowerCase().includes(searchLower)
        );
    }
    
    console.log(`🔍 Filtros aplicados: ${filtered.length}/${AVAILABLE_THEMES.length} temas`);
    return filtered;
}

/**
 * Actualiza la visualización con los filtros activos
 */
function updateThemeDisplay() {
    const filteredThemes = getFilteredThemes();
    renderThemes(filteredThemes);
    
    // Mostrar mensaje si no hay resultados
    if (filteredThemes.length === 0) {
        themesGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-secondary);">
                <div style="font-size: 3em; margin-bottom: 20px;">🔍</div>
                <h3>No se encontraron temas</h3>
                <p>Intenta con otros términos de búsqueda o cambia los filtros.</p>
            </div>
        `;
    }
}

// ========================================
// 🎧 EVENT LISTENERS
// ========================================

/**
 * Configura todos los event listeners
 */
function setupEventListeners() {
    console.log('🎧 Configurando event listeners...');
    
    // Búsqueda en tiempo real
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.trim();
        console.log(`🔍 Búsqueda: "${currentSearch}"`);
        updateThemeDisplay();
    });
    
    // Filtros de dificultad
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Actualizar botones activos
            filterButtons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            
            currentFilter = e.target.dataset.filter;
            console.log(`🏷️ Filtro activo: ${currentFilter}`);
            updateThemeDisplay();
        });
    });
    
    // Modal de información
    aboutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('ℹ️ Abriendo modal de información');
        aboutModal.style.display = 'block';
    });
    
    closeModal.addEventListener('click', () => {
        console.log('❌ Cerrando modal');
        aboutModal.style.display = 'none';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === aboutModal) {
            aboutModal.style.display = 'none';
        }
    });
    
    // Limpiar datos
    clearDataBtn.addEventListener('click', (e) => {
        e.preventDefault();
        clearUserData();
    });
    
    // Atajo de teclado para búsqueda
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'f') {
            e.preventDefault();
            searchInput.focus();
        }
        
        if (e.key === 'Escape') {
            aboutModal.style.display = 'none';
            searchInput.blur();
        }
    });
    
    console.log('✅ Event listeners configurados');
}

// ========================================
// 🚀 INICIALIZACIÓN
// ========================================

/**
 * Inicializa la aplicación
 */
function initializeApp() {
    console.log('🚀 Inicializando aplicación del selector...');
    const initStart = performance.now();
    
    // Configurar event listeners
    setupEventListeners();
    
    // Actualizar estadísticas
    updateGlobalStats();
    
    // Renderizar temas iniciales
    renderThemes();
    
    // Animación de entrada
    document.body.classList.add('fade-in');
    
    const initEnd = performance.now();
    console.log(`✅ Aplicación inicializada en ${(initEnd - initStart).toFixed(2)}ms`);
    
    // Mostrar tiempo total de carga
    const totalTime = performance.now() - startTime;
    console.log(`⚡ Tiempo total de carga: ${totalTime.toFixed(2)}ms`);
    console.log('🎮 ¡Selector de temas listo para usar!');
}

// ========================================
// 🎯 UTILIDADES ADICIONALES
// ========================================

/**
 * Maneja la navegación desde el cuestionario de vuelta al selector
 */
function handleReturnFromQuiz() {
    const urlParams = new URLSearchParams(window.location.search);
    const returning = urlParams.get('returning');
    const completedTheme = urlParams.get('completed');
    
    if (returning === 'true') {
        console.log('🔄 Usuario regresando del cuestionario');
        
        if (completedTheme) {
            // Mostrar notificación de tema completado
            setTimeout(() => {
                const theme = AVAILABLE_THEMES.find(t => t.id === completedTheme);
                if (theme) {
                    alert(`🎉 ¡Felicitaciones! Has completado: ${theme.title}`);
                }
            }, 1000);
        }
        
        // Limpiar URL
        window.history.replaceState({}, document.title, window.location.pathname);
    }
}

/**
 * Exporta estadísticas para análisis (función futura)
 */
function exportStats() {
    const progress = getUserProgress();
    const stats = {
        export_date: new Date().toISOString(),
        themes_completed: Object.keys(progress.completedThemes).length,
        total_themes: AVAILABLE_THEMES.length,
        completion_rate: (Object.keys(progress.completedThemes).length / AVAILABLE_THEMES.length * 100).toFixed(1),
        total_time_minutes: Math.round(progress.totalTime / 60000),
        detailed_progress: progress.completedThemes
    };
    
    console.log('📈 Estadísticas exportadas:', stats);
    return stats;
}

// ========================================
// 🏁 INICIO DE LA APLICACIÓN
// ========================================

// Verificar si el usuario regresa del cuestionario
document.addEventListener('DOMContentLoaded', () => {
    handleReturnFromQuiz();
    initializeApp();
});

// Manejar errores globales
window.addEventListener('error', (e) => {
    console.error('❌ Error global:', e.error);
});

// Logs de rendimiento en desarrollo
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const stats = exportStats();
            console.log('🔧 Modo desarrollo - Estadísticas:', stats);
        }, 2000);
    });
}

// ========================================
// 🔧 CARGADOR DINÁMICO DE TEMAS
// ========================================

/**
 * Carga la configuración de un tema desde su archivo config.json
 * @param {string} themeId - ID del tema a cargar
 * @returns {Promise<Object>} Configuración del tema
 */
async function loadThemeConfig(themeId) {
    console.log(`🔧 Cargando configuración para tema: ${themeId}`);
    
    try {
        const configUrl = new URL(`themes/${themeId}/config.json`, location.href);
        const response = await fetch(configUrl.toString(), { cache: 'no-cache' });
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: No se pudo cargar config.json para ${themeId}`);
        }
        
        const config = await response.json();
        
        // Validar estructura mínima
        if (!config.id || !config.meta || !config.activities) {
            throw new Error(`Configuración inválida para tema ${themeId}`);
        }
        
        console.log(`✅ Configuración de ${themeId} cargada desde config.json`);
        return config;
        
    } catch (error) {
        console.error(`❌ Error cargando configuración de ${themeId}:`, error);
        
        // Fallback a configuración hardcodeada si existe
        const fallback = AVAILABLE_THEMES.find(t => t.id === themeId);
        if (fallback) {
            console.warn(`⚠️ Usando configuración fallback para ${themeId}`);
            return convertLegacyToModular(fallback);
        }
        
        throw error;
    }
}

/**
 * Convierte tema legacy al formato modular para compatibilidad
 * @param {Object} legacyTheme - Tema en formato anterior
 * @returns {Object} Tema en formato modular
 */
function convertLegacyToModular(legacyTheme) {
    return {
        id: legacyTheme.id,
        meta: {
            title: legacyTheme.title,
            author: legacyTheme.title.split(':')[0]?.trim() || legacyTheme.id,
            icon: legacyTheme.icon,
            gradient: legacyTheme.gradient,
            difficulty: legacyTheme.difficulty,
            description: legacyTheme.description
        },
        activities: {
            quiz: {
                enabled: true,
                questions: legacyTheme.questions || 10,
                timeLimit: 30,
                timeEstimate: legacyTheme.timeEstimate || 10
            },
            conceptos: { enabled: true, levels: 6, timeEstimate: 8 },
            material: { enabled: true, sections: 8, timeEstimate: 10 },
            mapa: { enabled: true, nodes: 10, timeEstimate: 5 }
        },
        files: {
            content: legacyTheme.contentFile || `content/${legacyTheme.id}.html`,
            quiz: `${legacyTheme.id}.js`,
            conceptos: `${legacyTheme.id}.js`,
            mapa: `${legacyTheme.id}_mapa_conceptual.html`
        },
        prerequisites: legacyTheme.prerequisites || [],
        color: legacyTheme.color,
        _legacy: true // Flag interno
    };
}

/**
 * Obtiene la configuración de un tema (modular o legacy)
 * @param {string} themeId - ID del tema
 * @returns {Promise<Object>} Configuración del tema
 */
async function getThemeConfig(themeId) {
    const legacyTheme = AVAILABLE_THEMES.find(t => t.id === themeId);
    
    // Si el tema usa configuración modular, cargarla
    if (legacyTheme?.useModularConfig) {
        try {
            return await loadThemeConfig(themeId);
        } catch (error) {
            console.warn(`Fallback a configuración legacy para ${themeId}`);
            return convertLegacyToModular(legacyTheme);
        }
    }
    
    // Usar configuración legacy
    return legacyTheme ? convertLegacyToModular(legacyTheme) : null;
}

  (function () {
    const y = new Date().getFullYear();
    document.querySelectorAll('[data-year]').forEach(el => el.textContent = y);
    // Si querés que cuando cambie el año quede "2023–2026", mantiene el "desde" fijo:
    document.querySelectorAll('[data-year-range]').forEach(el => {
      const since = (el.getAttribute('data-since') || '2023').trim();
      el.innerHTML = `${since}–<span data-year>${y}</span>`;
    });
  })();