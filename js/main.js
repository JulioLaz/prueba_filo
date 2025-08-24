// ========================================
//  SELECTOR DE TEMAS - CUESTIONARIOS DE FILOSOFÍA
// ========================================
// Este archivo define la lista de temas disponibles en la aplicación.
// Cada objeto en `AVAILABLE_THEMES` representa un tema con su
// configuración básica: id, título, descripción, icono, gradiente de
// color, nivel de dificultad, número de preguntas, tiempo estimado,
// prerrequisitos, color principal y fichero de contenido HTML asociado.

console.log('🔍 Iniciando selector de temas (versión modificada)...');

// Lista de temas disponibles.  Se pueden añadir nuevos temas o
// modificar los existentes.  Para cada tema se debe especificar un
// identificador único (`id`) que coincida con el nombre del archivo
// JavaScript en la carpeta `js/themes`.  La propiedad `contentFile`
// debe apuntar al archivo HTML que contiene el material de estudio.

const AVAILABLE_THEMES = [
    {
        id: 'cassirer',
        title: 'Ernst Cassirer: El ser humano como animal simbólico',
        description: 'Explora la antropología filosófica de Cassirer: el hombre como creador de símbolos, el lenguaje, el arte, el mito y la cultura como mediaciones de nuestra vida humana.',
        icon: '🎭',
        gradient: 'linear-gradient(135deg, #6a85b6 0%, #bac8e0 100%)',
        difficulty: 'basico',
        questions: 10,
        timeEstimate: 10,
        prerequisites: [],
        color: '#6a85b6',
        contentFile: 'content/cassirer.html'
    },
    {
        id: 'sartre',
        title: 'Jean‑Paul Sartre: El ser humano es libertad',
        description: 'Existencialismo: existencia precede a la esencia, libertad ineludible, angustia, desamparo, desesperación, mala fe y autenticidad.',
        icon: '🌀',
        gradient: 'linear-gradient(135deg, #222831 0%, #393e46 50%, #00adb5 100%)',
        // El nivel de dificultad del tema de Sartre es intermedio.  Se
        // actualiza aquí para reflejar la complejidad añadida por los
        // nuevos niveles (caza de conceptos, síntesis y mapa conceptual).
        difficulty: 'intermedio',
        // Este tema utiliza 10 preguntas en el cuestionario final.
        questions: 10,
        // El tiempo estimado total incluye los niveles previos al quiz.
        timeEstimate: 12,
        // No hay prerrequisitos específicos para el tema de Sartre en
        // esta versión, aunque podrían añadirse como ['antropologia_filosofica'].
        prerequisites: [],
        color: '#00adb5',
        contentFile: 'content/sartre.html'
    },
    {
        id: 'etica',
        title: 'Ética y Moral',
        description: 'Explora dilemas morales, libertad, responsabilidad y los grandes debates sobre cómo debemos actuar.',
        icon: '⚖️',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        difficulty: 'basico',
        questions: 10,
        timeEstimate: 8,
        prerequisites: [],
        color: '#667eea',
        contentFile: 'content/etica.html'
    },
    {
        id: 'aristoteles',
        title: 'Aristóteles: Lo Bueno es la Felicidad',
        description: 'Descubre la ética aristotélica: la felicidad como fin último, la virtud como término medio y la vida contemplativa.',
        icon: '🏛️',
        gradient: 'linear-gradient(135deg, #d4af37 0%, #ffd700 100%)',
        difficulty: 'basico',
        questions: 12,
        timeEstimate: 10,
        prerequisites: ['etica'],
        color: '#d4af37',
        contentFile: 'content/aristoteles.html'
    }
    // Otros temas podrían añadirse aquí siguiendo el mismo esquema.
];

// ===============================
//  VARIABLES DE ESTADO Y DOM
// ===============================

// Contenedor de tarjetas de temas y elementos de filtro/búsqueda.
const themesGrid = document.getElementById('themes-grid');
const searchInput = document.getElementById('search-input');
const filterButtons = document.querySelectorAll('.filter-btn');
const clearDataBtn = document.getElementById('clear-data-btn');
const aboutBtn = document.getElementById('about-btn');
const aboutModal = document.getElementById('about-modal');
const closeModal = aboutModal ? aboutModal.querySelector('.close') : null;

// Estadísticas globales (opcional: leer de localStorage).
const totalCompletedEl = document.getElementById('total-completed');
const totalScoreEl = document.getElementById('total-score');
const totalTimeEl = document.getElementById('total-time');

// Estado de filtros y búsqueda.
let currentFilter = 'all';
let currentSearch = '';

// ===============================
//  CREACIÓN Y RENDERIZADO DE CARTAS
// ===============================

/**
 * Crea un elemento DOM representando la tarjeta de un tema.
 * @param {Object} theme Configuración del tema.
 * @returns {HTMLElement}
 */
function createThemeCard(theme) {
    const card = document.createElement('div');
    card.className = 'theme-card';
    card.dataset.id = theme.id;
    // Aplicar gradiente de fondo si está definido
    if (theme.gradient) {
        card.style.background = theme.gradient;
    } else if (theme.color) {
        card.style.background = theme.color;
    }
    // Construir contenido
    const iconEl = document.createElement('div');
    iconEl.className = 'theme-card-icon';
    iconEl.textContent = theme.icon || '';
    const titleEl = document.createElement('h3');
    titleEl.className = 'theme-card-title';
    titleEl.textContent = theme.title;
    const descEl = document.createElement('p');
    descEl.className = 'theme-card-desc';
    descEl.textContent = theme.description;
    const footerEl = document.createElement('div');
    footerEl.className = 'theme-card-footer';
    footerEl.innerHTML = `
        <span class="difficulty ${theme.difficulty}">${theme.difficulty}</span>
        <span class="question-count">${theme.questions} preguntas</span>
    `;
    card.appendChild(iconEl);
    card.appendChild(titleEl);
    card.appendChild(descEl);
    card.appendChild(footerEl);
    // Click para abrir quiz
    card.addEventListener('click', () => {
        // Utilizamos "?theme=" en lugar de "?id=" para que el motor
        // de quiz pueda identificar correctamente el tema a cargar.  El
        // motor lee el parámetro "theme" de la URL mediante
        // getURLParameter('theme').  Si se utiliza otro nombre, el
        // cuestionario no encontrará el tema y mostrará un error.
        window.location.href = `quiz.html?theme=${theme.id}`;
    });
    return card;
}

/**
 * Renderiza la lista de temas en el contenedor.
 * @param {Array} themes Lista de temas a mostrar.
 */
function renderThemes(themes = AVAILABLE_THEMES) {
    if (!themesGrid) return;
    themesGrid.innerHTML = '';
    themes.forEach((theme, index) => {
        const card = createThemeCard(theme);
        // Animación de entrada escalonada
        card.style.animationDelay = `${index * 0.1}s`;
        themesGrid.appendChild(card);
    });
}

// ===============================
//  FILTRADO Y BÚSQUEDA
// ===============================

/**
 * Devuelve la lista de temas filtrada por dificultad y búsqueda.
 * @returns {Array}
 */
function getFilteredThemes() {
    let filtered = AVAILABLE_THEMES;
    // Filtrado por dificultad
    if (currentFilter !== 'all') {
        filtered = filtered.filter(t => t.difficulty === currentFilter);
    }
    // Filtrado por búsqueda
    if (currentSearch) {
        const searchLower = currentSearch.toLowerCase();
        filtered = filtered.filter(t =>
            t.title.toLowerCase().includes(searchLower) ||
            t.description.toLowerCase().includes(searchLower)
        );
    }
    return filtered;
}

/**
 * Actualiza la visualización de temas según filtros actuales.
 */
function updateThemeDisplay() {
    const filtered = getFilteredThemes();
    renderThemes(filtered);
    // Si no hay resultados, mostrar mensaje
    if (filtered.length === 0 && themesGrid) {
        themesGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-secondary);">
                <h3>No se encontraron temas</h3>
                <p>Intenta con otros términos de búsqueda o cambia los filtros.</p>
            </div>
        `;
    }
}

// ===============================
//  ESTADÍSTICAS GLOBALES
// ===============================

/**
 * Actualiza las estadísticas globales de progreso desde localStorage.
 * Se utilizan tres claves: completed, score y time.
 */
function updateGlobalStats() {
    try {
        const progressStr = localStorage.getItem('filosofia-quiz-progress');
        if (progressStr) {
            const progress = JSON.parse(progressStr);
            const completados = Object.keys(progress).length;
            let totalScore = 0;
            let totalTime = 0;
            Object.values(progress).forEach(item => {
                totalScore += item.score || 0;
                totalTime += item.time || 0;
            });
            const averageScore = completados ? Math.round(totalScore / completados) : 0;
            if (totalCompletedEl) totalCompletedEl.textContent = completados;
            if (totalScoreEl) totalScoreEl.textContent = `${averageScore}%`;
            if (totalTimeEl) totalTimeEl.textContent = `${Math.round(totalTime / 60)}min`;
        }
    } catch (err) {
        console.warn('Error al cargar estadísticas:', err);
    }
}

// ===============================
//  EVENT LISTENERS
// ===============================

function setupEventListeners() {
    // Búsqueda en tiempo real
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value.trim();
            updateThemeDisplay();
        });
    }
    // Filtros de dificultad
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.dataset.filter || 'all';
            updateThemeDisplay();
        });
    });
    // Limpiar progreso
    if (clearDataBtn) {
        clearDataBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirm('¿Estás seguro de que quieres eliminar tu progreso local?')) {
                localStorage.removeItem('filosofia-quiz-progress');
                updateGlobalStats();
                updateThemeDisplay();
            }
        });
    }
    // Modal Acerca de
    if (aboutBtn && aboutModal && closeModal) {
        aboutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            aboutModal.style.display = 'block';
        });
        closeModal.addEventListener('click', () => {
            aboutModal.style.display = 'none';
        });
        window.addEventListener('click', (e) => {
            if (e.target === aboutModal) {
                aboutModal.style.display = 'none';
            }
        });
    }
}

// ===============================
//  INICIALIZACIÓN
// ===============================

function initializeApp() {
    updateGlobalStats();
    setupEventListeners();
    updateThemeDisplay();
    // Animación de entrada
    document.body.classList.add('fade-in');
}

// Ejecutar al cargar el script
initializeApp();