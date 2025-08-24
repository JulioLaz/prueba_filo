// ========================================
// 🎯 SELECTOR DE TEMAS - CON FIREBASE INTEGRATION
// ========================================

console.log('🚀 Iniciando selector de temas con Firebase...');
const startTime = performance.now();

// ========================================
// 🔥 FIREBASE IMPORTS
// ========================================

import { 
    signInWithGoogle, 
    signInAnonymously, 
    logOut, 
    addAuthListener,
    isSignedIn,
    getCurrentUser,
    getUserInfo,
    getUserAvatar 
} from './firebase/auth.js';

import { 
    saveUserProfile,
    getUserProfile,
    getAllUserProgress,
    migrateLocalStorageProgress,
    syncToLocalStorage
} from './firebase/firestore.js';

// ========================================
// 🎮 CONFIGURACIÓN DE TEMAS (existente)
// ========================================

const AVAILABLE_THEMES = [
    {
        id: "cassirer",
        title: "Ernst Cassirer: El ser humano como animal simbólico",
        description: "Explora la antropología filosófica de Cassirer: el hombre como creador de símbolos, el lenguaje, el arte, el mito y la cultura como mediaciones de nuestra vida humana.",
        icon: "🎭",
        gradient: "linear-gradient(135deg, #6a85b6 0%, #bac8e0 100%)",
        difficulty: "basico",
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
        difficulty: "basico",
        questions: 10,
        timeEstimate: 10,
        prerequisites: [],
        color: "#00adb5",
        contentFile: "content/sartre.html"
    },
    {
        id: 'etica',
        title: 'Ética y Moral',
        description: 'Explora dilemas morales, libertad, responsabilidad y los grandes debates sobre cómo debemos actuar.',
        icon: '🧭',
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
    },
    {
        id: 'hedonismo',
        title: 'Hedonismo: El Placer como Fin de la Vida',
        description: 'Explora la búsqueda del placer y la felicidad desde Epicuro hasta las interpretaciones modernas: ataraxia, placeres superiores y la vida serena.',
        icon: '🌸',
        gradient: 'linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%)',
        difficulty: 'basico',
        questions: 14,
        timeEstimate: 12,
        prerequisites: [],
        color: '#ff6b6b',
        contentFile: 'content/hedonismo.html'
    },
    {
        id: 'utilitarismo',
        title: 'Utilitarismo: La mayor felicidad para el mayor Número de personas',
        description: 'Explora la ética consecuencialista de John Stuart Mill: placeres superiores e inferiores, imparcialidad moral y utilitarismo del acto vs. regla.',
        icon: '🎯',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        difficulty: 'basico',
        questions: 12,
        timeEstimate: 10,
        prerequisites: [],
        color: '#667eea',
        contentFile: 'content/utilitarismo.html'
    },
    {
        id: 'pragmatismo',
        title: 'Pragmatismo: Lo Verdadero es lo Práctico',
        description: 'Explora la filosofía americana que evalúa las ideas por su utilidad práctica: Peirce, James, Dewey y la verdad como herramienta de acción.',
        icon: '🛠️',
        gradient: 'linear-gradient(135deg, #ff9500 0%, #ff6b35 100%)',
        difficulty: 'intermedio',
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
        difficulty: 'basico',
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
        difficulty: 'intermedio',
        questions: 12,
        timeEstimate: 15,
        prerequisites: ['etica'],
        color: '#d4af37',
        contentFile: 'content/antropocentrismo.html'
    }
];

console.log(`📚 Configuración cargada: ${AVAILABLE_THEMES.length} temas disponibles`);

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

// 🆕 Elementos de autenticación
const authSection = document.getElementById('auth-section');
const authSignedOut = document.getElementById('auth-signed-out');
const authSignedIn = document.getElementById('auth-signed-in');
const authLoading = document.getElementById('auth-loading');
const signInBtn = document.getElementById('sign-in-btn');
const signOutBtn = document.getElementById('sign-out-btn');
const userAvatar = document.getElementById('user-avatar');
const userName = document.getElementById('user-name');

// Modal de sign in
const signinModal = document.getElementById('signin-modal');
const googleSigninBtn = document.getElementById('google-signin-btn');
const anonymousSigninBtn = document.getElementById('anonymous-signin-btn');
const closeSigninModal = document.getElementById('close-signin-modal');

console.log('🎮 Elementos DOM inicializados');

// ========================================
// 🔥 FIREBASE STATE MANAGEMENT
// ========================================

let firebaseProgress = {};
let isFirebaseReady = false;

/**
 * Handle authentication state changes
 */
function handleAuthStateChange(user) {
    console.log('🔄 Auth state changed:', user ? 'Signed in' : 'Signed out');
    
    if (user) {
        showSignedInState(user);
        loadFirebaseProgress();
    } else {
        showSignedOutState();
        firebaseProgress = {};
    }
    
    updateGlobalStats();
    renderThemes();
}

/**
 * Show signed in UI state
 */
function showSignedInState(user) {
    authSignedOut.classList.add('hidden');
    authSignedIn.classList.remove('hidden');
    authLoading.classList.add('hidden');
    
    const userInfo = getUserInfo();
    if (userInfo) {
        userName.textContent = userInfo.displayName || userInfo.email || 'Usuario';
        userAvatar.textContent = getUserAvatar();
    }
}

/**
 * Show signed out UI state
 */
function showSignedOutState() {
    authSignedOut.classList.remove('hidden');
    authSignedIn.classList.add('hidden');
    authLoading.classList.add('hidden');
}

/**
 * Load progress from Firebase
 */
async function loadFirebaseProgress() {
    try {
        console.log('📊 Loading progress from Firebase...');
        firebaseProgress = await getAllUserProgress();
        isFirebaseReady = true;
        console.log(`✅ Loaded progress for ${Object.keys(firebaseProgress).length} themes`);
    } catch (error) {
        console.error('❌ Error loading Firebase progress:', error);
        firebaseProgress = {};
    }
}

// ========================================
// 💾 GESTIÓN DE DATOS (HÍBRIDA)
// ========================================

/**
 * Get combined progress (localStorage + Firebase)
 */
function getCombinedProgress() {
    // Local progress as fallback
    const localProgress = JSON.parse(localStorage.getItem('filosofia-quiz-progress') || '{}');
    
    if (!isSignedIn() || !isFirebaseReady) {
        return localProgress;
    }
    
    // Combine Firebase and local progress
    const combinedProgress = { ...localProgress };
    combinedProgress.completedThemes = combinedProgress.completedThemes || {};
    
    // Merge Firebase progress
    Object.keys(firebaseProgress).forEach(themeId => {
        const fbData = firebaseProgress[themeId];
        combinedProgress.completedThemes[themeId] = {
            score: fbData.bestScore,
            bestScore: fbData.bestScore,
            attempts: fbData.attempts,
            timeSpent: fbData.totalTime,
            lastAttempt: fbData.lastAttemptAt?.toDate?.()?.toISOString() || new Date().toISOString()
        };
    });
    
    return combinedProgress;
}

/**
 * Get theme progress (Firebase-aware)
 */
function getThemeProgress(themeId) {
    const progress = getCombinedProgress();
    return progress.completedThemes?.[themeId] || null;
}

// ========================================
// 📊 ACTUALIZACIÓN DE ESTADÍSTICAS
// ========================================

function updateGlobalStats() {
    console.log('📊 Actualizando estadísticas globales...');
    const startStatsTime = performance.now();
    
    const progress = getCombinedProgress();
    const completed = Object.keys(progress.completedThemes || {});
    
    // Calcular estadísticas
    const totalCompleted = completed.length;
    const totalScores = completed.map(themeId => progress.completedThemes[themeId].score || 0);
    const averageScore = totalScores.length > 0 
        ? Math.round(totalScores.reduce((a, b) => a + b, 0) / totalScores.length) 
        : 0;
    
    // Calculate total time
    let totalMinutes = 0;
    if (isSignedIn() && isFirebaseReady) {
        // Use Firebase data for signed in users
        totalMinutes = Math.round(Object.values(firebaseProgress).reduce((sum, data) => sum + (data.totalTime || 0), 0) / 60000);
    } else {
        // Use localStorage for anonymous users
        totalMinutes = Math.round((progress.totalTime || 0) / 60000);
    }
    
    // Actualizar elementos
    totalCompletedElement.textContent = totalCompleted;
    totalScoreElement.textContent = `${averageScore}%`;
    totalTimeElement.textContent = `${totalMinutes}min`;
    
    const endStatsTime = performance.now();
    console.log(`✅ Estadísticas actualizadas en ${(endStatsTime - startStatsTime).toFixed(2)}ms`);
}

// ========================================
// 🎨 RENDERIZADO DE TEMAS (actualizado)
// ========================================

function isThemeUnlocked(theme) {
    if (theme.prerequisites.length === 0) return true;
    
    const progress = getCombinedProgress();
    return theme.prerequisites.every(prereq => 
        progress.completedThemes?.[prereq] && 
        progress.completedThemes[prereq].score >= 50
    );
}

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
    
    // Add Firebase sync indicator for signed in users
    const syncIndicator = isSignedIn() ? '<div class="sync-indicator">☁️</div>' : '';
    
    card.innerHTML = `
        <div class="theme-header">
            <span class="difficulty-badge difficulty-${theme.difficulty}">
                ${theme.difficulty}
            </span>
            ${completedBadge}
            ${syncIndicator}
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
    
    // Event listener para navegación
    if (isUnlocked) {
        card.addEventListener('click', () => {
            console.log(`🎯 Navegando al tema: ${theme.id}`);
            window.location.href = `quiz.html?theme=${theme.id}`;
        });
    } else {
        card.addEventListener('click', () => {
            const prereqNames = theme.prerequisites.map(id => 
                AVAILABLE_THEMES.find(t => t.id === id)?.title || id
            ).join(', ');
            alert(`🔒 Para desbloquear este tema, primero completa: ${prereqNames}`);
        });
    }
    
    return card;
}

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
// 🔍 BÚSQUEDA Y FILTRADO (sin cambios)
// ========================================

let currentFilter = 'all';
let currentSearch = '';

function getFilteredThemes() {
    let filtered = AVAILABLE_THEMES;
    
    if (currentFilter !== 'all') {
        filtered = filtered.filter(theme => theme.difficulty === currentFilter);
    }
    
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

function updateThemeDisplay() {
    const filteredThemes = getFilteredThemes();
    renderThemes(filteredThemes);
    
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

function setupEventListeners() {
    console.log('🎧 Configurando event listeners...');
    
    // 🆕 Authentication listeners
    signInBtn.addEventListener('click', () => {
        signinModal.style.display = 'block';
    });
    
    signOutBtn.addEventListener('click', async () => {
        const result = await logOut();
        if (result.success) {
            console.log('👋 Signed out successfully');
        }
    });
    
    googleSigninBtn.addEventListener('click', async () => {
        console.log('🔑 Attempting Google sign in...');
        const result = await signInWithGoogle();
        
        if (result.success) {
            console.log('✅ Google sign in successful');
            signinModal.style.display = 'none';
            
            // Migrate localStorage progress
            const migration = await migrateLocalStorageProgress();
            if (migration.success && migration.migrated > 0) {
                alert(`✅ Se migró el progreso de ${migration.migrated} temas a tu cuenta!`);
            }
        } else {
            console.error('❌ Google sign in failed:', result.error);
            alert('❌ Error al iniciar sesión: ' + result.error);
        }
    });
    
    anonymousSigninBtn.addEventListener('click', async () => {
        console.log('👻 Attempting anonymous sign in...');
        const result = await signInAnonymously();
        
        if (result.success) {
            console.log('✅ Anonymous sign in successful');
            signinModal.style.display = 'none';
        } else {
            console.error('❌ Anonymous sign in failed:', result.error);
        }
    });
    
    closeSigninModal.addEventListener('click', () => {
        signinModal.style.display = 'none';
    });
    
    // Búsqueda en tiempo real
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.trim();
        console.log(`🔍 Búsqueda: "${currentSearch}"`);
        updateThemeDisplay();
    });
    
    // Filtros de dificultad
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
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
        if (e.target === signinModal) {
            signinModal.style.display = 'none';
        }
    });
    
    // Limpiar datos
    clearDataBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (confirm('¿Estás seguro de que quieres eliminar todo tu progreso local? Esto no afectará tu progreso en la nube si tienes cuenta.')) {
            localStorage.removeItem('filosofia-quiz-progress');
            console.log('🗑️ Datos locales eliminados');
            updateGlobalStats();
            renderThemes();
        }
    });
    
    // Atajos de teclado
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'f') {
            e.preventDefault();
            searchInput.focus();
        }
        
        if (e.key === 'Escape') {
            aboutModal.style.display = 'none';
            signinModal.style.display = 'none';
            searchInput.blur();
        }
    });
    
    console.log('✅ Event listeners configurados');
}

// ========================================
// 🚀 INICIALIZACIÓN
// ========================================

function initializeApp() {
    console.log('🚀 Inicializando aplicación del selector...');
    const initStart = performance.now();
    
    // Setup Firebase auth listener
    addAuthListener(handleAuthStateChange);
    
    // Configurar event listeners
    setupEventListeners();
    
    // Renderizar temas iniciales (con datos locales)
    updateGlobalStats();
    renderThemes();
    
    // Animación de entrada
    document.body.classList.add('fade-in');
    
    const initEnd = performance.now();
    console.log(`✅ Aplicación inicializada en ${(initEnd - initStart).toFixed(2)}ms`);
    
    const totalTime = performance.now() - startTime;
    console.log(`⚡ Tiempo total de carga: ${totalTime.toFixed(2)}ms`);
    console.log('🎮 ¡Selector de temas con Firebase listo!');
}

// ========================================
// 🎯 UTILIDADES ADICIONALES
// ========================================

function handleReturnFromQuiz() {
    const urlParams = new URLSearchParams(window.location.search);
    const returning = urlParams.get('returning');
    const completedTheme = urlParams.get('completed');
    
    if (returning === 'true') {
        console.log('🔄 Usuario regresando del cuestionario');
        
        if (completedTheme) {
            setTimeout(() => {
                const theme = AVAILABLE_THEMES.find(t => t.id === completedTheme);
                if (theme) {
                    alert(`🎉 ¡Felicitaciones! Has completado: ${theme.title}`);
                }
            }, 1000);
        }
        
        window.history.replaceState({}, document.title, window.location.pathname);
    }
}

// ========================================
// 🏁 INICIO DE LA APLICACIÓN
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    handleReturnFromQuiz();
    initializeApp();
});

window.addEventListener('error', (e) => {
    console.error('❌ Error global:', e.error);
});