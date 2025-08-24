// ========================================
// 🎮 MOTOR DE JUEGO - CUESTIONARIO FILOSÓFICO
// ========================================
// Este motor gestiona un flujo de juego en cuatro niveles: caza de
// conceptos, síntesis de frases, construcción de un esquema (mapa
// conceptual simplificado) y finalmente el cuestionario clásico de
// preguntas de opción múltiple.  Está pensado para trabajar con
// temas que definan las propiedades `conceptHunt`, `synthesis`,
// `conceptMap` y `questions` (como el tema de Sartre).  Si un tema
// carece de estas propiedades, se inicia directamente el quiz.

console.log('🚀 Iniciando motor de juego...');

// ========================================
//  ELEMENTOS DEL DOM
// ========================================
// Contenedores principales
const loadingScreen = document.getElementById('loading-screen');
const quizContainer = document.getElementById('quiz-container');
const errorScreen = document.getElementById('error-screen');

// Cabecera y navegación
const backBtn = document.getElementById('back-btn');
const themeIcon = document.getElementById('theme-icon');
const themeTitle = document.getElementById('theme-title');
const helpBtn = document.getElementById('help-btn');
const pageTitle = document.getElementById('page-title');

// Tabs de niveles y etiqueta de etapa
const levelTabs = document.getElementById('level-tabs');
const tabConcepts = document.getElementById('tab-concepts');
const tabSynthesis = document.getElementById('tab-synthesis');
const tabMap = document.getElementById('tab-map');
const tabQuiz = document.getElementById('tab-quiz');
const stageLabel = document.getElementById('stage-label');

// Progreso general y contadores
const questionCounter = document.getElementById('question-counter');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
const progressBar = document.getElementById('progress-bar');
const conceptProgress = document.getElementById('concept-progress');
const conceptCounter = document.getElementById('concept-counter');

// Fases de juego
const conceptHuntPhase = document.getElementById('concept-hunt-phase');
const synthesisPhase = document.getElementById('synthesis-phase');
const conceptMapPhase = document.getElementById('concept-map-phase');
const quizPhase = document.getElementById('quiz-phase');

// Elementos de Caza de conceptos
const paragraphIndexLabel = document.getElementById('paragraph-index');
const conceptsRemainingLabel = document.getElementById('concepts-remaining');
const conceptParagraphText = document.getElementById('concept-paragraph-text');
const conceptFeedback = document.getElementById('concept-feedback');
const skipParagraphBtn = document.getElementById('skip-paragraph-btn');
const revealHintsBtn = document.getElementById('reveal-hints-btn');
const toSynthesisBtn = document.getElementById('to-synthesis-btn');

// Elementos de Síntesis
const synthesisParagraphIndex = document.getElementById('synthesis-paragraph-index');
const synthesisProgress = document.getElementById('synthesis-progress');
const synthesisParagraphBrief = document.getElementById('synthesis-paragraph-brief');
const synthesisOptions = document.getElementById('synthesis-options');
const synthesisFeedback = document.getElementById('synthesis-feedback');
const prevSynthesisBtn = document.getElementById('prev-synthesis');
const nextSynthesisBtn = document.getElementById('next-synthesis');
const toMapBtn = document.getElementById('to-map-btn');

// Elementos de Mapa conceptual
const conceptMapBoard = document.getElementById('concept-map-board');
const conceptMapNodesList = document.getElementById('concept-map-nodes');
const conceptMapEdgesList = document.getElementById('concept-map-edges');
const mapCoreCounter = document.getElementById('map-core-counter');
const toQuizBtn = document.getElementById('to-quiz-btn');

// Elementos del quiz (fases originales)
const helpPhase = document.getElementById('help-phase');
const questionPhase = document.getElementById('question-phase');
const resultsPhase = document.getElementById('results-phase');
const helpText = document.getElementById('help-text');
const showQuestionBtn = document.getElementById('show-question-btn');
const showMaterialBtn = document.getElementById('show-material-btn');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const resultsIcon = document.getElementById('results-icon');
const resultsTitle = document.getElementById('results-title');
const finalScore = document.getElementById('final-score');
const correctAnswers = document.getElementById('correct-answers');
const totalTime = document.getElementById('total-time');
const resultsMessage = document.getElementById('results-message');
const retryBtn = document.getElementById('retry-btn');
const themesBtn = document.getElementById('themes-btn');
const reviewBtn = document.getElementById('review-btn');

// Modal de material de estudio
const materialModal = document.getElementById('material-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const closeModal = document.getElementById('close-modal');

// Modal de revisión
const reviewModal = document.getElementById('review-modal');
const reviewBody = document.getElementById('review-body');
const closeReview = document.getElementById('close-review');

// Error
const errorMessage = document.getElementById('error-message');
const retryLoadBtn = document.getElementById('retry-load-btn');
const backToThemesBtn = document.getElementById('back-to-themes-btn');

// ========================================
//  ESTADO DEL JUEGO
// ========================================
let currentTheme = null;
let currentQuestionIndex = 0;
let score = 0;
let timer = null;
let timeLeft = 0;
let startTime = null;
let userAnswers = [];
let isAnswered = false;
let conceptHuntIndex = 0;
let foundTerms = new Set();
let synthesisIndex = 0;
let selectedSynthesis = {};
let selectedMapNodes = new Set();

const ANSWER_DISPLAY_TIME = 2500;
const TIMER_WARNING_THRESHOLD = 10;
const TIMER_DANGER_THRESHOLD = 5;

// ========================================
//  UTILIDADES
// ========================================
/**
 * Obtiene parámetros de la URL
 * @param {string} param Nombre del parámetro
 * @returns {string|null}
 */
function getURLParameter(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

/**
 * Mezcla un array de forma aleatoria (Fisher–Yates)
 * @param {Array} array
 * @returns {Array}
 */
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

/**
 * Muestra la pantalla correspondiente
 * @param {'loading'|'quiz'|'error'} screen
 */
function showScreen(screen) {
    loadingScreen.classList.toggle('hidden', screen !== 'loading');
    quizContainer.classList.toggle('hidden', screen !== 'quiz');
    errorScreen.classList.toggle('hidden', screen !== 'error');
}

/**
 * Navega de vuelta al selector de temas
 */
function goBackToThemes() {
    window.location.href = 'index.html?returning=true';
}

// ========================================
//  CARGA DEL TEMA Y FLUJO INICIAL
// ========================================
/**
 * Carga dinámicamente el archivo JS del tema y resuelve con el objeto
 * del tema una vez cargado.  Si el script no se puede cargar, se
 * rechaza la promesa.
 * @param {string} themeId
 * @returns {Promise<Object>}
 */
function loadTheme(themeId) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = `js/themes/${themeId}.js`;
        script.onload = () => {
            const themeVarName = `${themeId.toUpperCase()}_THEME`;
            const theme = window[themeVarName];
            if (!theme) {
                return reject(new Error(`No se encontró la variable ${themeVarName}`));
            }
            // Mezclar preguntas del quiz para aleatoriedad
            theme.questions = shuffleArray(theme.questions);
            resolve(theme);
        };
        script.onerror = () => reject(new Error(`Error al cargar js/themes/${themeId}.js`));
        document.head.appendChild(script);
    });
}

/**
 * Punto de inicio: obtiene el tema de la URL y lo carga.  Según
 * las propiedades del tema, decide iniciar el juego en caza de
 * conceptos o directamente en el quiz.
 */
async function startGame() {
    showScreen('loading');
    const themeId = getURLParameter('theme');
    if (!themeId) {
        errorMessage.textContent = 'No se especificó un tema en la URL.';
        showScreen('error');
        return;
    }
    try {
        currentTheme = await loadTheme(themeId);
        console.log(`✅ Tema ${currentTheme.title} cargado`);
        // Configurar cabecera con icono y título
        themeIcon.textContent = currentTheme.icon || '📚';
        themeTitle.textContent = currentTheme.title;
        pageTitle.textContent = `${currentTheme.icon || '📚'} ${currentTheme.title}`;
        // Aplicar gradiente del tema al CSS custom property
        document.documentElement.style.setProperty('--theme-gradient', currentTheme.gradient || '#667eea');
        if (currentTheme.conceptHunt && currentTheme.synthesis && currentTheme.conceptMap) {
            initConceptHunt();
        } else {
            // Si no hay niveles previos, saltar directamente al quiz
            initQuiz();
        }
    } catch (error) {
        console.error(error);
        errorMessage.textContent = error.message;
        showScreen('error');
    }
}

// ========================================
//  NIVEL 1: CAZA DE CONCEPTOS
// ========================================
/**
 * Inicializa la fase de caza de conceptos.  Resetea contadores,
 * muestra la fase y prepara el primer párrafo.
 */
function initConceptHunt() {
    console.log('🔎 Iniciando caza de conceptos...');
    conceptHuntIndex = 0;
    foundTerms = new Set();
    // Mostrar etiquetas de etapa y tabs
    stageLabel.textContent = 'Caza de conceptos';
    tabConcepts.classList.add('active');
    tabSynthesis.classList.add('disabled');
    tabMap.classList.add('disabled');
    tabQuiz.classList.add('disabled');
    // Mostrar contadores
    conceptProgress.classList.remove('hidden');
    // Ocultar otras fases
    synthesisPhase.classList.add('hidden');
    conceptMapPhase.classList.add('hidden');
    quizPhase.classList.add('hidden');
    helpPhase.classList.add('hidden');
    questionPhase.classList.add('hidden');
    resultsPhase.classList.add('hidden');
    // Mostrar fase de caza de conceptos
    conceptHuntPhase.classList.remove('hidden');
    // Iniciar con el primer párrafo
    renderConceptParagraph();
    // Deshabilitar avance a síntesis hasta completar todos los párrafos
    toSynthesisBtn.disabled = true;
}

/**
 * Renderiza el párrafo actual para la caza de conceptos y prepara los
 * contadores.  Los términos clave del párrafo se obtienen de
 * `currentTheme.conceptHunt.paragraphs[conceptHuntIndex].keyTerms`.
 */
function renderConceptParagraph() {
    const paragraphs = currentTheme.conceptHunt.paragraphs;
    if (conceptHuntIndex >= paragraphs.length) {
        // Se completaron todos los párrafos
        toSynthesisBtn.disabled = false;
        conceptFeedback.textContent = '¡Has encontrado todos los conceptos! Puedes avanzar a la síntesis.';
        return;
    }
    const paragraphData = paragraphs[conceptHuntIndex];
    const totalTerms = paragraphData.keyTerms.length;
    foundTerms = new Set();
    // Actualizar etiquetas
    paragraphIndexLabel.textContent = `Párrafo ${conceptHuntIndex + 1}`;
    conceptsRemainingLabel.textContent = `Conceptos por descubrir: ${totalTerms}`;
    conceptCounter.textContent = `0/${totalTerms}`;
    conceptFeedback.textContent = '';
    // Limpiar contenedor de texto
    conceptParagraphText.innerHTML = '';
    // Dividir el texto en palabras conservando espacios y signos de puntuación
    const words = paragraphData.text.split(/(\s+)/);
    words.forEach(word => {
        const span = document.createElement('span');
        span.textContent = word;
        // Añadir clase para estilos interactivos solo en palabras (no espacios)
        if (!/\s+/.test(word)) {
            span.className = 'selectable-word';
            span.addEventListener('click', () => selectConceptWord(span, word, paragraphData));
        }
        conceptParagraphText.appendChild(span);
    });
}

/**
 * Determina si una palabra seleccionada corresponde a alguno de los
 * términos clave del párrafo.  Se comprueba cada término clave y sus
 * alias opcionales en minúsculas.
 * @param {string} word
 * @param {Object} paragraphData
 * @returns {boolean}
 */
function isKeyTerm(word, paragraphData) {
    const lower = word.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');
    for (const term of paragraphData.keyTerms) {
        // dividir el término en palabras y comparar individualmente
        const parts = term.toLowerCase().split(/\s+/);
        if (parts.includes(lower)) return true;
        // comprobar alias
        if (paragraphData.aliases && paragraphData.aliases[term]) {
            const aliases = paragraphData.aliases[term];
            for (const alias of aliases) {
                const aliasParts = alias.toLowerCase().split(/\s+/);
                if (aliasParts.includes(lower)) return true;
            }
        }
    }
    return false;
}

/**
 * Maneja la selección de una palabra en la fase de caza de conceptos.
 * Si la palabra corresponde a un término clave aún no descubierto,
 * se marca y actualiza el contador.  Si no, se muestra un mensaje
 * indicando que no es relevante.
 * @param {HTMLElement} span
 * @param {string} word
 * @param {Object} paragraphData
 */
function selectConceptWord(span, word, paragraphData) {
    if (span.classList.contains('found')) return;
    if (isKeyTerm(word, paragraphData)) {
        span.classList.add('found');
        foundTerms.add(word.toLowerCase());
        const totalTerms = paragraphData.keyTerms.length;
        conceptCounter.textContent = `${foundTerms.size}/${totalTerms}`;
        const remaining = totalTerms - foundTerms.size;
        conceptsRemainingLabel.textContent = `Conceptos por descubrir: ${remaining}`;
        conceptFeedback.textContent = '¡Bien!';
        // Si encontró todos los términos, avanzar al siguiente párrafo
        if (foundTerms.size === totalTerms) {
            conceptFeedback.textContent = '¡Párrafo completado!';
            setTimeout(() => {
                conceptHuntIndex++;
                renderConceptParagraph();
            }, 800);
        }
    } else {
        span.classList.add('incorrect');
        setTimeout(() => span.classList.remove('incorrect'), 400);
        conceptFeedback.textContent = 'Ese término no es clave. Inténtalo de nuevo.';
    }
}

// Botones de caza de conceptos
if (skipParagraphBtn) {
    skipParagraphBtn.addEventListener('click', () => {
        conceptHuntIndex++;
        renderConceptParagraph();
    });
}
if (revealHintsBtn) {
    revealHintsBtn.addEventListener('click', () => {
        const paragraphData = currentTheme.conceptHunt.paragraphs[conceptHuntIndex];
        conceptFeedback.textContent = `Pistas: ${paragraphData.keyTerms.join(', ')}`;
    });
}
if (toSynthesisBtn) {
    toSynthesisBtn.addEventListener('click', () => {
        initSynthesis();
    });
}

// ========================================
//  NIVEL 2: SÍNTESIS DE FRASES
// ========================================
/**
 * Inicializa la fase de síntesis.  Se asume que la caza de conceptos
 * ya está completada.  Configura la interfaz y muestra la primera
 * pregunta de síntesis.
 */
function initSynthesis() {
    console.log('🧩 Iniciando síntesis...');
    synthesisIndex = 0;
    selectedSynthesis = {};
    stageLabel.textContent = 'Frase síntesis';
    tabConcepts.classList.remove('active');
    tabSynthesis.classList.remove('disabled');
    tabSynthesis.classList.add('active');
    // Ocultar fases anteriores
    conceptHuntPhase.classList.add('hidden');
    conceptMapPhase.classList.add('hidden');
    quizPhase.classList.add('hidden');
    // Mostrar fase de síntesis
    synthesisPhase.classList.remove('hidden');
    conceptProgress.classList.add('hidden');
    // Renderizar primer ítem
    renderSynthesisItem();
    // Deshabilitar avance al mapa hasta completar todas las síntesis
    toMapBtn.disabled = true;
}

/**
 * Renderiza el ítem de síntesis correspondiente a `synthesisIndex`.
 */
function renderSynthesisItem() {
    const items = currentTheme.synthesis.items;
    const total = items.length;
    if (synthesisIndex >= total) {
        toMapBtn.disabled = false;
        synthesisFeedback.textContent = '¡Has completado todas las frases!';
        return;
    }
    const item = items[synthesisIndex];
    synthesisParagraphIndex.textContent = `Párrafo ${synthesisIndex + 1}`;
    synthesisProgress.textContent = `${synthesisIndex + 1}/${total}`;
    // Resumen (si fuera necesario, se podría mostrar parte del párrafo)
    synthesisParagraphBrief.textContent = '';
    // Limpiar opciones
    synthesisOptions.innerHTML = '';
    item.options.forEach((option, idx) => {
        const btn = document.createElement('button');
        btn.className = 'synthesis-option-btn';
        btn.textContent = option.text;
        btn.dataset.correct = option.correct;
        btn.dataset.explanation = option.explanation;
        btn.addEventListener('click', () => selectSynthesisOption(btn, option));
        synthesisOptions.appendChild(btn);
    });
    synthesisFeedback.textContent = '';
}

/**
 * Maneja la selección de una frase de síntesis.  Indica si la
 * elección es correcta o incorrecta y avanza al siguiente ítem.
 * @param {HTMLElement} btn
 * @param {Object} option
 */
function selectSynthesisOption(btn, option) {
    // Desactivar todas las opciones
    const allBtns = synthesisOptions.querySelectorAll('button');
    allBtns.forEach(b => b.disabled = true);
    if (option.correct) {
        btn.classList.add('correct');
        synthesisFeedback.textContent = '¡Correcto!';
    } else {
        btn.classList.add('incorrect');
        synthesisFeedback.textContent = option.explanation || 'Incorrecto.';
    }
    // Almacenar la respuesta
    selectedSynthesis[currentTheme.synthesis.items[synthesisIndex].paragraphId] = option.text;
    // Avanzar tras una pausa breve
    setTimeout(() => {
        synthesisIndex++;
        renderSynthesisItem();
    }, 1200);
}

// Navegación entre ítems de síntesis (opcional)
if (prevSynthesisBtn) {
    prevSynthesisBtn.addEventListener('click', () => {
        if (synthesisIndex > 0) {
            synthesisIndex--;
            renderSynthesisItem();
        }
    });
}
if (nextSynthesisBtn) {
    nextSynthesisBtn.addEventListener('click', () => {
        synthesisIndex++;
        renderSynthesisItem();
    });
}
if (toMapBtn) {
    toMapBtn.addEventListener('click', () => {
        initConceptMap();
    });
}

// ========================================
//  NIVEL 3: MAPA CONCEPTUAL (SIMPLIFICADO)
// ========================================
/**
 * Inicializa la fase de mapa conceptual.  En esta versión
 * simplificada, se muestra la lista de nodos y se permite al usuario
 * seleccionar un número mínimo de ellos para desbloquear el quiz.  No
 * se implementa drag-and-drop de relaciones por simplicidad.
 */
function initConceptMap() {
    console.log('🗺️ Iniciando mapa conceptual...');
    selectedMapNodes = new Set();
    stageLabel.textContent = 'Mapa conceptual';
    tabSynthesis.classList.remove('active');
    tabMap.classList.remove('disabled');
    tabMap.classList.add('active');
    // Ocultar fases anteriores
    synthesisPhase.classList.add('hidden');
    quizPhase.classList.add('hidden');
    // Mostrar mapa
    conceptMapPhase.classList.remove('hidden');
    conceptProgress.classList.add('hidden');
    // Preparar nodos
    conceptMapNodesList.innerHTML = '';
    const nodes = currentTheme.conceptMap.nodes;
    nodes.forEach(node => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `node-${node}`;
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) selectedMapNodes.add(node);
            else selectedMapNodes.delete(node);
            updateConceptMapProgress();
        });
        const label = document.createElement('label');
        label.htmlFor = `node-${node}`;
        label.textContent = node;
        li.appendChild(checkbox);
        li.appendChild(label);
        conceptMapNodesList.appendChild(li);
    });
    // Mostrar progreso
    mapCoreCounter.textContent = `0/${currentTheme.conceptMap.completionCriteria.minCoreLinks}`;
    toQuizBtn.disabled = true;
}

/**
 * Actualiza el contador de nodos seleccionados y habilita el
 * botón para pasar al quiz cuando se alcanza el mínimo requerido.
 */
function updateConceptMapProgress() {
    const required = currentTheme.conceptMap.completionCriteria.minCoreLinks;
    mapCoreCounter.textContent = `${selectedMapNodes.size}/${required}`;
    if (selectedMapNodes.size >= required) {
        toQuizBtn.disabled = false;
    } else {
        toQuizBtn.disabled = true;
    }
}

if (toQuizBtn) {
    toQuizBtn.addEventListener('click', () => {
        initQuiz();
    });
}

// ========================================
//  NIVEL 4: QUIZ CLÁSICO
// ========================================
/**
 * Inicializa la fase de cuestionario.  Restaura contadores y
 * muestra la interfaz de ayuda para la primera pregunta.
 */
function initQuiz() {
    console.log('📝 Iniciando quiz...');
    stageLabel.textContent = 'Quiz';
    tabConcepts.classList.remove('active');
    tabSynthesis.classList.remove('active');
    tabMap.classList.remove('active');
    tabQuiz.classList.remove('disabled');
    tabQuiz.classList.add('active');
    // Ocultar fases previas
    conceptHuntPhase.classList.add('hidden');
    synthesisPhase.classList.add('hidden');
    conceptMapPhase.classList.add('hidden');
    // Mostrar fase del quiz
    quizPhase.classList.remove('hidden');
    // Resetear estado
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    startTime = performance.now();
    // Actualizar UI
    updateProgress();
    showHelpPhase();
    showScreen('quiz');
}

/**
 * Actualiza los indicadores de progreso general del quiz
 */
function updateProgress() {
    const totalQuestions = currentTheme.questions.length;
    const progressPercentage = (currentQuestionIndex / totalQuestions) * 100;
    questionCounter.textContent = `${currentQuestionIndex + 1}/${totalQuestions}`;
    scoreElement.textContent = score;
    progressBar.style.width = `${progressPercentage}%`;
}

/**
 * Muestra la fase de ayuda para la pregunta actual
 */
function showHelpPhase() {
    const currentQuestion = currentTheme.questions[currentQuestionIndex];
    helpPhase.classList.remove('hidden');
    questionPhase.classList.add('hidden');
    resultsPhase.classList.add('hidden');
    helpText.textContent = currentQuestion.hint || 'Reflexiona antes de responder.';
    // Reset temporizador visual
    timerElement.textContent = `${currentTheme.timeLimit}s`;
    timerElement.className = 'progress-value';
}

// Botones de la fase de ayuda
if (showQuestionBtn) {
    showQuestionBtn.addEventListener('click', () => {
        showQuestionPhase();
    });
}
if (showMaterialBtn) {
    showMaterialBtn.addEventListener('click', () => {
        // Cargar y mostrar material de estudio en un modal
        loadStudyMaterial(currentTheme.contentFile).then(content => {
            modalTitle.textContent = 'Material de estudio';
            modalBody.innerHTML = content;
            materialModal.classList.add('show');
        }).catch(err => {
            modalTitle.textContent = 'Error cargando material';
            modalBody.innerHTML = `<p>${err.message}</p>`;
            materialModal.classList.add('show');
        });
    });
}
if (closeModal) {
    closeModal.addEventListener('click', () => {
        materialModal.classList.remove('show');
    });
}

/**
 * Muestra la pregunta actual con sus opciones.  Inicia el
 * temporizador de cuenta atrás.
 */
function showQuestionPhase() {
    const currentQuestion = currentTheme.questions[currentQuestionIndex];
    helpPhase.classList.add('hidden');
    questionPhase.classList.remove('hidden');
    questionText.textContent = currentQuestion.question;
    answersContainer.innerHTML = '';
    const shuffledAnswers = shuffleArray(currentQuestion.answers);
    shuffledAnswers.forEach(answer => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = answer.text;
        btn.dataset.correct = answer.correct;
        btn.dataset.explanation = answer.explanation || '';
        btn.addEventListener('click', () => selectAnswer(btn, answer));
        answersContainer.appendChild(btn);
    });
    // Iniciar temporizador
    startTimer();
    isAnswered = false;
}

/**
 * Inicia el temporizador para la pregunta actual
 */
function startTimer() {
    timeLeft = currentTheme.timeLimit;
    timerElement.textContent = `${timeLeft}s`;
    timerElement.className = 'progress-value';
    if (timer) clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `${timeLeft}s`;
        if (timeLeft <= TIMER_DANGER_THRESHOLD) {
            timerElement.className = 'progress-value danger';
        } else if (timeLeft <= TIMER_WARNING_THRESHOLD) {
            timerElement.className = 'progress-value warning';
        }
        if (timeLeft <= 0) {
            clearInterval(timer);
            if (!isAnswered) handleTimeOut();
        }
    }, 1000);
}

/**
 * Maneja la selección de una respuesta en el quiz
 * @param {HTMLElement} btn
 * @param {Object} answer
 */
function selectAnswer(btn, answer) {
    if (isAnswered) return;
    isAnswered = true;
    clearInterval(timer);
    const currentQuestion = currentTheme.questions[currentQuestionIndex];
    // Registrar respuesta
    userAnswers.push({
        questionId: currentQuestion.id,
        question: currentQuestion.question,
        selectedAnswer: answer.text,
        correctAnswer: currentQuestion.answers.find(a => a.correct).text,
        isCorrect: answer.correct,
        timeUsed: currentTheme.timeLimit - timeLeft,
        explanation: answer.explanation
    });
    // Actualizar puntaje
    if (answer.correct) {
        score++;
        scoreElement.textContent = score;
    }
    // Mostrar estados visuales
    const allBtns = answersContainer.querySelectorAll('.answer-btn');
    allBtns.forEach(b => {
        b.disabled = true;
        if (b.dataset.correct === 'true') b.classList.add('correct');
        else if (b === btn && !answer.correct) b.classList.add('incorrect');
    });
    // Continuar tras un breve intervalo
    setTimeout(() => {
        nextQuestion();
    }, ANSWER_DISPLAY_TIME);
}

/**
 * Maneja el caso en que se agota el tiempo para responder
 */
function handleTimeOut() {
    isAnswered = true;
    const currentQuestion = currentTheme.questions[currentQuestionIndex];
    userAnswers.push({
        questionId: currentQuestion.id,
        question: currentQuestion.question,
        selectedAnswer: 'Sin respuesta (tiempo agotado)',
        correctAnswer: currentQuestion.answers.find(a => a.correct).text,
        isCorrect: false,
        timeUsed: currentTheme.timeLimit,
        explanation: 'Tiempo agotado'
    });
    // Mostrar respuesta correcta
    const allBtns = answersContainer.querySelectorAll('.answer-btn');
    allBtns.forEach(b => {
        b.disabled = true;
        if (b.dataset.correct === 'true') b.classList.add('correct');
    });
    setTimeout(() => {
        nextQuestion();
    }, 2500);
}

/**
 * Avanza a la siguiente pregunta del quiz o muestra resultados si ya no hay más
 */
function nextQuestion() {
    currentQuestionIndex++;
    updateProgress();
    if (currentQuestionIndex < currentTheme.questions.length) {
        showHelpPhase();
    } else {
        showResults();
    }
}

/**
 * Muestra la fase de resultados finales
 */
function showResults() {
    helpPhase.classList.add('hidden');
    questionPhase.classList.add('hidden');
    resultsPhase.classList.remove('hidden');
    const totalQuestions = currentTheme.questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    const endTime = performance.now();
    const totalTimeMs = endTime - startTime;
    const totalMinutes = Math.floor(totalTimeMs / 60000);
    const totalSeconds = Math.floor((totalTimeMs % 60000) / 1000);
    finalScore.textContent = `${percentage}%`;
    correctAnswers.textContent = `${score}/${totalQuestions}`;
    totalTime.textContent = totalMinutes > 0 ? `${totalMinutes}m ${totalSeconds}s` : `${totalSeconds}s`;
    let message = '';
    if (percentage >= 90) message = '¡Excelente! Dominas muy bien los conceptos de este tema.';
    else if (percentage >= 70) message = '¡Muy bien! Tienes un buen entendimiento del tema.';
    else if (percentage >= 50) message = 'Bien. Puedes mejorar repasando el material.';
    else message = 'Te recomiendo estudiar más el material antes de volver a intentar.';
    resultsMessage.innerHTML = `<p>${message}</p>`;
    resultsIcon.textContent = '';
}

// Botones de resultados
if (retryBtn) {
    retryBtn.addEventListener('click', () => {
        // Reiniciar todo el juego
        if (currentTheme.conceptHunt) {
            initConceptHunt();
        } else {
            initQuiz();
        }
    });
}
if (themesBtn) {
    themesBtn.addEventListener('click', () => {
        goBackToThemes();
    });
}
if (reviewBtn) {
    reviewBtn.addEventListener('click', () => {
        // Mostrar revisión de respuestas
        reviewBody.innerHTML = '';
        userAnswers.forEach((ans, idx) => {
            const div = document.createElement('div');
            div.className = 'review-item';
            div.innerHTML = `<strong>${idx + 1}. ${ans.question}</strong><br/><em>Tu respuesta:</em> ${ans.selectedAnswer}<br/><em>Respuesta correcta:</em> ${ans.correctAnswer}<br/><em>Explicación:</em> ${ans.explanation || ''}`;
            reviewBody.appendChild(div);
        });
        reviewModal.classList.add('show');
    });
}
if (closeReview) {
    closeReview.addEventListener('click', () => {
        reviewModal.classList.remove('show');
    });
}

// Modal de material de estudio: función de carga
function loadStudyMaterial(contentFile) {
    return fetch(contentFile)
        .then(resp => resp.ok ? resp.text() : Promise.reject(new Error(`HTTP ${resp.status}`)))
        .catch(err => Promise.reject(err));
}

// Iniciar la aplicación al cargar el documento
document.addEventListener('DOMContentLoaded', startGame);