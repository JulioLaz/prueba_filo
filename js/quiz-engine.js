// ========================================
// ⚙️ MOTOR DEL CUESTIONARIO - FILOSOFÍA
// ========================================
// ⏱️ Tiempo inicio: ${new Date().toLocaleTimeString()}

console.log('⚙️ Iniciando motor del cuestionario...');
const engineStartTime = performance.now();

// ========================================
// 🔊 SISTEMA DE SONIDOS
// ========================================

// Rutas de sonidos para el quiz
const SND_CORRECT_QUIZ = "sound/correct_answer.mp3";
const SND_WRONG_QUIZ = "sound/negative_beep.mp3";
const SND_TIMER_WARNING = "sound/timer_warning.mp3";
const SND_TIMER_DANGER = "sound/timer_danger.mp3";
const SND_QUIZ_COMPLETE = "sound/fin_parrafo.mp3";
const SND_BUTTON_CLICK = "sound/collect_points.mp3";
const SND_SHOW_QUESTION = "sound/show_question.mp3"; // ← Nuevo sonido

// Estado global de audio
let audioMuted = false;

let currentCorrectButton = null; // botón correcto de la pregunta actual

/**
 * Reproduce un sonido si el audio está habilitado
 * @param {string} soundPath - Ruta del archivo de sonido
 */
function playSound(soundPath) {
    if (audioMuted) return;
    
    try {
        const audio = new Audio(soundPath);
        audio.volume = 0.6; // Volumen moderado
        audio.play().catch(error => {
            console.warn('No se pudo reproducir sonido:', error);
        });
    } catch (error) {
        console.warn('Error al crear audio:', error);
    }
}


function showCelebration(emoji) {
        const celebration = document.createElement('div');
        celebration.className = 'celebration';
        celebration.textContent = emoji;
        document.body.appendChild(celebration);
        
        setTimeout(() => {
          document.body.removeChild(celebration);
        }, 2000);
      }

/**
 * Alternar estado de audio
 */
function toggleAudio() {
    audioMuted = !audioMuted;
    console.log(`🔊 Audio ${audioMuted ? 'silenciado' : 'activado'}`);
    return audioMuted;
}

// ========================================
// 🎯 ELEMENTOS DEL DOM
// ========================================

// Screens y containers principales
const loadingScreen = document.getElementById('loading-screen');
const quizContainer = document.getElementById('quiz-container');
const errorScreen = document.getElementById('error-screen');

// Loading elements
const loadingMessage = document.getElementById('loading-message');
const loadingBar = document.getElementById('loading-bar');

// Header elements
const backBtn = document.getElementById('back-btn');
const themeIcon = document.getElementById('theme-icon');
const themeTitle = document.getElementById('theme-title');
const helpBtn = document.getElementById('help-btn');
const pageTitle = document.getElementById('page-title');

// Progress elements
const attemptsElement = document.getElementById('attempts');
const questionCounter = document.getElementById('question-counter');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
const progressBar = document.getElementById('progress-bar');

// Phase containers
const helpPhase = document.getElementById('help-phase');
const questionPhase = document.getElementById('question-phase');
const resultsPhase = document.getElementById('results-phase');

// Question elements
const helpText = document.getElementById('help-text');
const showQuestionBtn = document.getElementById('show-question-btn');
const showMaterialBtn = document.getElementById('show-material-btn');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');

// Results elements
const resultsIcon = document.getElementById('results-icon');
const resultsTitle = document.getElementById('results-title');
const finalScore = document.getElementById('final-score');
const correctAnswers = document.getElementById('correct-answers');
const totalTime = document.getElementById('total-time');
const resultsMessage = document.getElementById('results-message');
const retryBtn = document.getElementById('retry-btn');
const themesBtn = document.getElementById('themes-btn');
const reviewBtn = document.getElementById('review-btn');

// Modal elements
const materialModal = document.getElementById('material-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const closeModal = document.getElementById('close-modal');

const reviewModal = document.getElementById('review-modal');
const reviewBody = document.getElementById('review-body');
const closeReview = document.getElementById('close-review');

// Error elements
const errorMessage = document.getElementById('error-message');
const retryLoadBtn = document.getElementById('retry-load-btn');
const backToThemesBtn = document.getElementById('back-to-themes-btn');

console.log('🎮 Elementos DOM inicializados');

// ========================================
// 🔧 CARGADOR MODULAR DE TEMAS
// ========================================

/**
 * Obtiene la ruta del archivo de quiz según si el tema es modular o no
 * @param {string} themeId - ID del tema
 * @returns {Promise<string>} Ruta del archivo de quiz
 */
async function getThemeQuizPath(themeId) {
    console.log(`🔧 Determinando ruta de quiz para tema: ${themeId}`);
    
    try {
        // Intentar cargar config.json del tema
        const configUrl = new URL(`themes/${themeId}/config.json`, location.href);
        const response = await fetch(configUrl.toString(), { cache: 'no-cache' });
        
        if (response.ok) {
            const config = await response.json();
            console.log(`✅ Tema ${themeId} es modular, usando themes/${themeId}/${config.files.quiz}`);
            return `themes/${themeId}/${config.files.quiz}`;
        }
    } catch (error) {
        console.log(`⚠️ Config no encontrado para ${themeId}, usando ruta legacy`);
    }
    
    // Fallback a ruta legacy
    console.log(`📁 Usando ruta legacy: themes/${themeId}.js`);
    return `themes/${themeId}.js`;
}

// ========================================
// 📊 ESTADO DEL CUESTIONARIO
// ========================================

let currentTheme = null;
let currentQuestionIndex = 0;
let score = 0;
let timer = null;
let timeLeft = 30;
let startTime = null;
let userAnswers = [];
let isAnswered = false;

const ANSWER_DISPLAY_TIME = 2200; // Tiempo en ms para mostrar respuesta correcta
const TIMER_WARNING_THRESHOLD = 10;
const TIMER_DANGER_THRESHOLD = 5;

// === Intentos del QUIZ (no por pregunta) ===
let revealCorrectOnMistake = false; // se activa recién en el 3er intento del quiz

function getThemeAttemptCount(themeId) {
  try {
    const progress = JSON.parse(localStorage.getItem('filosofia-quiz-progress') || '{}');
    return progress?.completedThemes?.[themeId]?.attempts || 0; // intentos COMPLETADOS
  } catch {
    return 0;
  }
}

console.log('📊 Estado inicial configurado');

function getAttemptsCompletedForCurrentTheme() {
  try {
    const k = 'filosofia-quiz-progress';
    const p = JSON.parse(localStorage.getItem(k) || '{}');
    const id = currentTheme?.id;
    return (id && p.completedThemes && p.completedThemes[id]?.attempts) || 0;
  } catch {
    return 0;
  }
}

/**
 * Recalcula el intento actual (mostrado) y el flag revealCorrectOnMistake.
 * Llamar SIEMPRE antes de iniciar un nuevo intento (al cargar y al reintentar).
 */
function updateAttemptUIAndGating() {
  const attemptsCompleted = getAttemptsCompletedForCurrentTheme(); // intentos ya finalizados
  const currentAttempt = attemptsCompleted + 1;                    // intento en curso

  if (attemptsElement) {
    attemptsElement.textContent = String(currentAttempt);
    attemptsElement.title = currentAttempt >= 3
      ? 'Desde este intento se muestran las correctas al errar'
      : 'Hasta el intento 2 no se muestran las correctas al errar';
  }

  // Activar revelado solo a partir del 3er intento del QUIZ
  revealCorrectOnMistake = attemptsCompleted >= 2;

  console.log(`🔁 attemptsCompleted=${attemptsCompleted} → currentAttempt=${currentAttempt} → revealCorrectOnMistake=${revealCorrectOnMistake}`);
}


// ========================================
// 🔧 FUNCIONES UTILITARIAS
// ========================================

/**
 * Obtiene parámetros de la URL
 * @param {string} param - Nombre del parámetro
 * @returns {string|null} Valor del parámetro
 */
function getURLParameter(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function getBoolParam(name) {
  const v = getURLParameter(name);
  if (v === null) return null;
  return v === '1' || v === 'true';
}


/**
 * Actualiza la barra de progreso del loading
 * @param {number} progress - Progreso (0-100)
 * @param {string} message - Mensaje a mostrar
 */
function updateLoadingProgress(progress, message) {
    loadingBar.style.width = `${progress}%`;
    loadingMessage.textContent = message;
    console.log(`📊 Loading: ${progress}% - ${message}`);
}

/**
 * Muestra una pantalla específica
 * @param {string} screen - Nombre de la pantalla ('loading', 'quiz', 'error')
 */
function showScreen(screen) {
    console.log(`🖥️ Mostrando pantalla: ${screen}`);
    
    loadingScreen.classList.toggle('hidden', screen !== 'loading');
    quizContainer.classList.toggle('hidden', screen !== 'quiz');
    errorScreen.classList.toggle('hidden', screen !== 'error');
}

/**
 * Navega de vuelta al selector de temas
 */
function goBackToThemes() {
  console.log('🏠 Volver al hub del tema');
  const tema =
    getURLParameter('tema') ||
    getURLParameter('theme') ||
    sessionStorage.getItem('tema.active') ||
    'sartre';

  const url = new URL('tema.html', location);  // respeta /prueba_filo/
  url.searchParams.set('tema', tema);
  url.searchParams.set('theme', tema);         // compat
  location.href = url.toString();
}

// function goBackToThemes() {
//     console.log('🏠 Navegando de vuelta al selector');
//     window.location.href = 'index.html?returning=true';
// }

/**
 * Mezcla un array aleatoriamente (Fisher-Yates)
 * @param {Array} array - Array a mezclar
 * @returns {Array} Array mezclado
 */
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// ========================================
// guardar progreso para que el hub lo lea
// ========================================

// ==== Progreso para el hub (tema.html) ====
function hubTemaSlug(){
  const p = new URLSearchParams(location.search);
  return p.get('tema') || p.get('theme') || sessionStorage.getItem('tema.active') || 'sartre';
}
function hubSaveQuiz(partial){
  const key = `tema.${hubTemaSlug()}.quiz`;
  let prev = {};
  try{ prev = JSON.parse(sessionStorage.getItem(key)) || {} }catch{}
  const state = { total:(currentTheme?.questions?.length||prev.total||10), ...prev, ...partial };
  sessionStorage.setItem(key, JSON.stringify(state));
}

// llámalo cuando actualizas contadores
// ✅ Dejá SOLO esta versión
function updateProgress() {
  const totalQuestions = currentTheme.questions.length;

  // Cuando ya pasaste la última, mostrás total/total (no total+1)
  const displayIndex = Math.min(currentQuestionIndex + 1, totalQuestions);

  // Progreso visual: clamp a 100%
  const progressPercentage = Math.min((currentQuestionIndex / totalQuestions) * 100, 100);

  questionCounter.textContent = `${displayIndex}/${totalQuestions}`;
  scoreElement.textContent = score;
  progressBar.style.width = `${progressPercentage}%`;

  // Guardado para el hub
  hubSaveQuiz({ qIndex: currentQuestionIndex, score, completed: false });

  console.log(`📊 Progreso: ${displayIndex}/${totalQuestions} (${progressPercentage.toFixed(1)}%)`);
}


// ========================================
// 📚 CARGA DEL TEMA
// ========================================

/**
 * Carga el tema especificado desde su archivo JS
 * @param {string} themeId - ID del tema a cargar
 * @returns {Promise<Object>} Datos del tema cargado
 */
// async function loadTheme(themeId) {
    async function loadTheme(themeId) {
    console.log(`📚 Cargando tema: ${themeId}`);
    const loadStart = performance.now();
    
    try {
        updateLoadingProgress(20, 'Cargando configuración del tema...');
        
        // Cargar archivo JS del tema
        // script.src = `js/themes/${themeId}.js`;
        // Cargar archivo JS del tema
        const script = document.createElement('script');
        const scriptPath = await getThemeQuizPath(themeId);
        script.src = scriptPath;
        
        return new Promise((resolve, reject) => {
            script.onload = () => {
                console.log(`✅ Script ${themeId}.js cargado`);
                updateLoadingProgress(60, 'Validando preguntas...');
                
                // Verificar que el tema se cargó correctamente
                const themeVarName = `${themeId.toUpperCase()}_THEME`;
                const theme = window[themeVarName];
                
                if (!theme) {
                    throw new Error(`No se encontró la variable ${themeVarName}`);
                }
                
                // Mezclar preguntas
                theme.questions = shuffleArray(theme.questions);
                
                const loadEnd = performance.now();
                console.log(`✅ Tema cargado en ${(loadEnd - loadStart).toFixed(2)}ms`);
                
                updateLoadingProgress(80, 'Preparando cuestionario...');
                resolve(theme);
            };
            
            script.onerror = () => {
                // const error = new Error(`Error al cargar js/themes/${themeId}.js`);
                const error = new Error(`Error al cargar tema ${themeId} desde ${scriptPath}`);
                console.error('❌', error);
                reject(error);
            };
            
            document.head.appendChild(script);
        });
        
    } catch (error) {
        console.error('❌ Error cargando tema:', error);
        throw error;
    }
}

/**
 * Carga el material de estudio del tema
 * @param {string} contentFile - Ruta del archivo de contenido
 * @returns {Promise<string>} Contenido HTML del material
 */
async function loadStudyMaterial(contentFile) {
  console.log(`📖 Cargando material: ${contentFile}`);
  const loadStart = performance.now();

  try {
    // Construye URL absoluta (funciona bien en GitHub Pages y local)
    const url = new URL(contentFile, location.href);
    const res = await fetch(url.toString(), { cache: 'no-store' }); // evita caché vieja
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    }

    const html = await res.text();
    const loadEnd = performance.now();
    console.log(`✅ Material cargado en ${(loadEnd - loadStart).toFixed(2)}ms`);
    return html;

  } catch (error) {
    console.warn('⚠️ No se pudo cargar el material:', error);
    return `
      <div class="highlight-box">
        <h3>⚠️ No se pudo cargar el material</h3>
        <p>${error.message}</p>
        <p><a class="primary-btn" href="${contentFile}" target="_blank" rel="noopener">Abrir en pestaña</a></p>
      </div>
    `;
  }
}

// ========================================
// 🎮 LÓGICA DEL CUESTIONARIO
// ========================================

/**
 * Inicializa el cuestionario con el tema cargado
 */
function initializeQuiz() {
    console.log('🎮 Inicializando cuestionario...');
    
    // Resetear estado
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    startTime = performance.now();
    
    // Configurar UI
    themeIcon.textContent = currentTheme.icon;
    themeTitle.textContent = currentTheme.title;
    pageTitle.textContent = `${currentTheme.icon} ${currentTheme.title}`;
    
    // Aplicar gradiente del tema
    document.documentElement.style.setProperty('--theme-gradient', currentTheme.gradient);
    
    // Actualizar contadores
    updateProgress();
    
    // Mostrar primera pregunta
    showHelpPhase();
    
    updateLoadingProgress(100, 'Cuestionario listo!');
    
    setTimeout(() => {
        showScreen('quiz');
        console.log('✅ Cuestionario inicializado correctamente');
    }, 500);
}

/**
 * Muestra la fase de ayuda/pista
 */
function showHelpPhase() {
    console.log(`💡 Mostrando ayuda para pregunta ${currentQuestionIndex + 1}`);
    
    const currentQuestion = currentTheme.questions[currentQuestionIndex];
    
    // Ocultar otras fases
    questionPhase.classList.add('hidden');
    resultsPhase.classList.add('hidden');
    
    // Mostrar fase de ayuda
    helpPhase.classList.remove('hidden');
    helpText.textContent = currentQuestion.hint;
    
    // Reset timer display
    timerElement.textContent = `${currentTheme.timeLimit}s`;
    timerElement.className = 'progress-value';
}

/**
 * Muestra la fase de pregunta
 */
function showQuestionPhase() {
    console.log(`❓ Mostrando pregunta ${currentQuestionIndex + 1}`);
    const questionStart = performance.now();
    
    const currentQuestion = currentTheme.questions[currentQuestionIndex];
    
    // Ocultar fase de ayuda
    helpPhase.classList.add('hidden');
    
    // Mostrar fase de pregunta
    questionPhase.classList.remove('hidden');
    
    // Configurar pregunta
    questionText.textContent = currentQuestion.question;
    
    // Limpiar respuestas anteriores
    // Limpiar respuestas anteriores
    answersContainer.innerHTML = '';
    currentCorrectButton = null; // reset ref al correcto

    // Mezclar respuestas y crear botones (sin data-correct visible)
    const shuffledAnswers = shuffleArray(currentQuestion.answers);
    shuffledAnswers.forEach((answer) => {
    const button = document.createElement('button');
    button.className = 'answer-btn';
    button.textContent = answer.text;
    // NO usar data-correct aquí
    button.dataset.explanation = answer.explanation || '';

    // Guardar en memoria cuál es el correcto (sin exponerlo al DOM)
    if (answer.correct) {
        currentCorrectButton = button;
    }

    button.addEventListener('click', () => selectAnswer(button, answer));
    answersContainer.appendChild(button);
    });

    
    // Iniciar timer
    startTimer();
    
    // Reset estado
    isAnswered = false;
    
    const questionEnd = performance.now();
    console.log(`✅ Pregunta mostrada en ${(questionEnd - questionStart).toFixed(2)}ms`);
}

/**
 * Inicia el temporizador para la pregunta actual
 */
function startTimer() {
    console.log(`⏱️ Iniciando timer: ${currentTheme.timeLimit} segundos`);
    
    timeLeft = currentTheme.timeLimit;
    timerElement.textContent = `${timeLeft}s`;
    timerElement.className = 'progress-value';
    
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `${timeLeft}s`;
        
        // Cambiar estados visuales según tiempo restante
        // Cambiar estados visuales según tiempo restante
        if (timeLeft <= TIMER_DANGER_THRESHOLD) {
            timerElement.className = 'progress-value danger';
            if (timeLeft === TIMER_DANGER_THRESHOLD) {
                playSound(SND_TIMER_DANGER); // 🚨 Sonido peligro
            }
        } else if (timeLeft <= TIMER_WARNING_THRESHOLD) {
            timerElement.className = 'progress-value warning';
            if (timeLeft === TIMER_WARNING_THRESHOLD) {
                playSound(SND_TIMER_WARNING); // ⚠️ Sonido advertencia
            }
        }
        
        // Tiempo agotado
        if (timeLeft <= 0) {
            console.log('⏰ Tiempo agotado');
            clearInterval(timer);
            if (!isAnswered) {
                handleTimeOut();
            }
        }
    }, 1000);
}

function selectAnswer(selectedButton, answer) {
  if (isAnswered) return;

  console.log(`🎯 Respuesta seleccionada: ${answer.correct ? 'Correcta' : 'Incorrecta'} | revealCorrectOnMistake=${revealCorrectOnMistake}`);
  const answerStart = performance.now();

  isAnswered = true;
  clearInterval(timer);

  // Registrar respuesta del usuario
  const currentQuestion = currentTheme.questions[currentQuestionIndex];
  userAnswers.push({
    questionId: currentQuestion.id,
    question: currentQuestion.question,
    selectedAnswer: answer.text,
    correctAnswer: currentQuestion.answers.find(a => a.correct).text,
    isCorrect: !!answer.correct,
    timeUsed: currentTheme.timeLimit - timeLeft,
    explanation: answer.explanation || ''
  });

  // Deshabilitar todo
  const allButtons = answersContainer.querySelectorAll('.answer-btn');
  allButtons.forEach(btn => btn.disabled = true);

  if (answer.correct) {
    selectedButton.classList.add('correct');
    score++;
    scoreElement.textContent = score;
    playSound(SND_CORRECT_QUIZ);
  } else {
    selectedButton.classList.add('incorrect');
    playSound(SND_WRONG_QUIZ);

    // 🔒 Revelar la correcta SOLO desde el 3er intento del QUIZ
    if (revealCorrectOnMistake && currentCorrectButton) {
      currentCorrectButton.classList.add('correct');
    }
  }

  const answerEnd = performance.now();
  console.log(`⏱️ Respuesta procesada en ${(answerEnd - answerStart).toFixed(2)}ms`);

  setTimeout(() => {
    nextQuestion();
  }, ANSWER_DISPLAY_TIME);
}

/**
 * Maneja el caso cuando se agota el tiempo
 */
function getBoolParam(name) {
  const v = new URLSearchParams(location.search).get(name);
  if (v === null) return null;
  return v === '1' || v === 'true';
}
function resetAttemptsForTheme(themeId){
  const k='filosofia-quiz-progress';
  const p=JSON.parse(localStorage.getItem(k)||'{}');
  if (p.completedThemes && p.completedThemes[themeId]) {
    p.completedThemes[themeId].attempts = 0; // o: delete p.completedThemes[themeId];
    localStorage.setItem(k, JSON.stringify(p));
    console.log(`🔄 Intentos reseteados para "${themeId}"`);
  } else {
    console.log(`ℹ️ No hay intentos guardados para "${themeId}"`);
  }
}

function handleTimeOut() {
  console.log('⏰ Manejando timeout | revealCorrectOnMistake=' + revealCorrectOnMistake);

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

  // Deshabilitar
  const allButtons = answersContainer.querySelectorAll('.answer-btn');
  allButtons.forEach(button => button.disabled = true);

  // 🔒 Revelar la correcta solo desde el 3er intento
  if (revealCorrectOnMistake && currentCorrectButton) {
    currentCorrectButton.classList.add('correct');
  }

  setTimeout(() => {
    nextQuestion();
  }, ANSWER_DISPLAY_TIME);
}

/**
 * Avanza a la siguiente pregunta o muestra resultados
 */
function nextQuestion() {
    currentQuestionIndex++;
    updateProgress();
    
    if (currentQuestionIndex < currentTheme.questions.length) {
        console.log(`➡️ Avanzando a pregunta ${currentQuestionIndex + 1}`);
        showHelpPhase();
    } else {
        console.log('🏁 Cuestionario completado, mostrando resultados');
        showResults();
    }
}

// ###################################################################

/**
 * Muestra los resultados finales
 */
function showResults() {
    playSound(SND_QUIZ_COMPLETE); // 🎉 Sonido completar quiz

    console.log('🏆 Mostrando resultados finales...');
    const resultsStart = performance.now();
    
    // Ocultar otras fases
    helpPhase.classList.add('hidden');
    questionPhase.classList.add('hidden');
    
    // Mostrar fase de resultados
    resultsPhase.classList.remove('hidden');
    
    // Calcular estadísticas
    const totalQuestions = currentTheme.questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    const endTime = performance.now();
    const totalTimeMs = endTime - startTime;
    const totalMinutes = Math.round(totalTimeMs / 60000);
    const totalSeconds = Math.round((totalTimeMs % 60000) / 1000);
    
    // Actualizar elementos de resultados
    finalScore.textContent = `${percentage}%`;
    correctAnswers.textContent = `${score}/${totalQuestions}`;
    totalTime.textContent = totalMinutes > 0 ? `${totalMinutes}m ${totalSeconds}s` : `${totalSeconds}s`;
    
    // Mensaje según rendimiento
    let message, icon;
    if (percentage >= 90) {
        message = "¡Excelente! 🌟 Dominas muy bien los conceptos de este tema.";
        icon = "🎉";
    } else if (percentage >= 70) {
        message = "¡Muy bien! 👏 Tienes un buen entendimiento del tema.";
        icon = "🎯";
    } else if (percentage >= 50) {
        message = "Bien 👍 Pero puedes mejorar repasando el material.";
        icon = "📚";
    } else {
        message = "📖 Te recomiendo estudiar más el material antes de volver a intentar.";
        icon = "💪";
    }
    
    resultsIcon.textContent = icon;
    resultsMessage.innerHTML = `<p>${message}</p>`;
    
    // Guardar progreso
    saveProgress(percentage, totalTimeMs);
    
    const resultsEnd = performance.now();
    console.log(`✅ Resultados mostrados en ${(resultsEnd - resultsStart).toFixed(2)}ms`);
    console.log(`📊 Resultado final: ${score}/${totalQuestions} (${percentage}%)`);
}

/**
 * Guarda el progreso del usuario
 * @param {number} percentage - Porcentaje obtenido
 * @param {number} timeMs - Tiempo total en milisegundos
 */
function saveProgress(percentage, timeMs) {
    try {
        console.log('💾 Guardando progreso...');
        
        const progress = JSON.parse(localStorage.getItem('filosofia-quiz-progress') || '{}');
        
        if (!progress.completedThemes) {
            progress.completedThemes = {};
        }
        
        // Actualizar datos del tema
        const themeData = {
            score: percentage,
            attempts: (progress.completedThemes[currentTheme.id]?.attempts || 0) + 1,
            bestScore: Math.max(percentage, progress.completedThemes[currentTheme.id]?.bestScore || 0),
            lastAttempt: new Date().toISOString(),
            timeSpent: timeMs
        };
        
        progress.completedThemes[currentTheme.id] = themeData;
        progress.totalTime = (progress.totalTime || 0) + timeMs;
        progress.lastVisit = new Date().toISOString();
        
        localStorage.setItem('filosofia-quiz-progress', JSON.stringify(progress));
        console.log('✅ Progreso guardado exitosamente');
        
    } catch (error) {
        console.error('❌ Error al guardar progreso:', error);
    }
    hubSaveQuiz({ qIndex: currentTheme.questions.length, score, completed: true });

}

// ========================================
// 📖 MODAL DEL MATERIAL DE ESTUDIO
// ========================================

/**
 * Muestra el modal con el material de estudio
 */
function showStudyMaterial() {
    console.log('📖 Mostrando material de estudio');
    modalTitle.textContent = `📖 Material de Estudio`;
    // modalTitle.innerHTML = `📖 <strong>Material de Estudio</strong><br>${currentTheme.title}`;
    // modalTitle.textContent = `📖 Material de Estudio\n${currentTheme.title}`;

    materialModal.style.display = 'block';
    
    // Cargar contenido si no está cargado
    if (!modalBody.hasAttribute('data-loaded')) {
        modalBody.innerHTML = '<div style="text-align: center; padding: 40px;"><div class="loading-spinner"></div><p>Cargando material...</p></div>';
        
        loadStudyMaterial(currentTheme.contentFile).then(content => {
            modalBody.innerHTML = content;
            modalBody.setAttribute('data-loaded', 'true');
        });
    }
}

/**
 * Genera y muestra la revisión de respuestas
 */
function showReviewModal() {
    console.log('📋 Generando revisión de respuestas');
    
    let reviewHTML = '<div class="review-container">';
    
    userAnswers.forEach((answer, index) => {
        const statusIcon = answer.isCorrect ? '✅' : '❌';
        const statusClass = answer.isCorrect ? 'correct' : 'incorrect';
        
        reviewHTML += `
            <div class="review-item">
                <div class="review-header">
                    <span class="review-number">Pregunta ${index + 1}</span>
                    <span class="review-status ${statusClass}">${statusIcon}</span>
                </div>
                <div class="review-question">
                    <p><strong>Pregunta:</strong> ${answer.question}</p>
                </div>
                <div class="review-answers">
                    <p><strong>Tu respuesta:</strong> ${answer.selectedAnswer}</p>
                    ${!answer.isCorrect ? `<p><strong>Respuesta correcta:</strong> ${answer.correctAnswer}</p>` : ''}
                </div>
                ${answer.explanation ? `<div class="review-explanation">
                    <p><strong>Explicación:</strong> ${answer.explanation}</p>
                </div>` : ''}
                <div class="review-meta">
                    <small>Tiempo usado: ${answer.timeUsed}s</small>
                </div>
            </div>
        `;
    });
    
    reviewHTML += '</div>';
    reviewBody.innerHTML = reviewHTML;
    reviewModal.style.display = 'block';
}

// ========================================
// 🎧 EVENT LISTENERS
// ========================================

/**
 * Configura todos los event listeners
 */
function setupEventListeners() {
    console.log('🎧 Configurando event listeners...');
    
    // Navegación
    backBtn.addEventListener('click', goBackToThemes);
    themesBtn.addEventListener('click', goBackToThemes);
    backToThemesBtn.addEventListener('click', goBackToThemes);
    
    // Controles del cuestionario
    // showQuestionBtn.addEventListener('click', showQuestionPhase);
    showQuestionBtn.addEventListener('click', () => {
    playSound(SND_SHOW_QUESTION); // 🔊 Sonido al mostrar pregunta
    showQuestionPhase();
});

if (helpBtn) helpBtn.addEventListener('click', showStudyMaterial);
if (showMaterialBtn) showMaterialBtn.addEventListener('click', showStudyMaterial);

    retryBtn.addEventListener('click', () => {
        console.log('🔄 Reiniciando cuestionario');
        // Releer intentos completados en localStorage (porque saveProgress ya incrementó al terminar)
        updateAttemptUIAndGating();  // ← esto actualiza el número que ves y el flag revealCorrectOnMistake
        initializeQuiz();
    });
    
    // Revisión de respuestas
    reviewBtn.addEventListener('click', showReviewModal);
    
    // Modales
    closeModal.addEventListener('click', () => {
        materialModal.style.display = 'none';
    });
    
    closeReview.addEventListener('click', () => {
        reviewModal.style.display = 'none';
    });
    
    // Cerrar modal al hacer click fuera
    window.addEventListener('click', (e) => {
        if (e.target === materialModal) {
            materialModal.style.display = 'none';
        }
        if (e.target === reviewModal) {
            reviewModal.style.display = 'none';
        }
    });
    
    // Error handling
    retryLoadBtn.addEventListener('click', () => {
        location.reload();
    });
    
    // Atajos de teclado
    // Atajos de teclado
    document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        materialModal.style.display = 'none';
        reviewModal.style.display = 'none';
    }

    // Números 1-8 para seleccionar respuestas SOLO cuando la pregunta está visible
    if (e.key >= '1' && e.key <= '8' && !questionPhase.classList.contains('hidden')) {
        const buttons = answersContainer.querySelectorAll('.answer-btn');
        const index = parseInt(e.key, 10) - 1;
        if (buttons[index] && !isAnswered) {
        buttons[index].click();
        }
    }
    });

 
    console.log('✅ Event listeners configurados');
}

// ========================================
// ❌ MANEJO DE ERRORES
// ========================================

/**
 * Muestra la pantalla de error
 * @param {string} message - Mensaje de error
 */
function showError(message) {
    console.error('❌ Mostrando error:', message);
    errorMessage.textContent = message;
    showScreen('error');
}

/**
 * Maneja errores globales
 */
window.addEventListener('error', (e) => {
    console.error('❌ Error global:', e.error);
    showError('Ha ocurrido un error inesperado. Por favor, recarga la página.');
});

// ========================================
// 🚀 INICIALIZACIÓN PRINCIPAL
// ========================================

/**
 * Función principal de inicialización
 */
async function main() {
    console.log('🚀 Inicializando aplicación del cuestionario...');
    const mainStart = performance.now();
    
    try {
        // Configurar event listeners
        setupEventListeners();
        
        // Obtener tema de la URL
        const themeId = getURLParameter('theme') || getURLParameter('tema');
        if (!themeId) throw new Error('No se especificó un tema en la URL');

        // ⬇️ PRIMERO: reset por query si corresponde (aplica a este intento)
        // (ya venías obteniendo themeId arriba)
        // OJO: si vas a usar resetAttempts, hacelo ANTES de leer intentos
        const reset = getBoolParam('resetAttempts');
        if (reset) resetAttemptsForTheme(themeId);

        // Cargar tema
        currentTheme = await loadTheme(themeId);
        console.log(`✅ Tema cargado: ${currentTheme.title}`);

        // ⬇️ Actualiza intento mostrado y el flag revealCorrectOnMistake
        updateAttemptUIAndGating();

        // Leer intentos COMPLETADOS y setear el intento actual en la UI
        let attemptsCompleted = getThemeAttemptCount(currentTheme.id); // completados
        const currentAttempt = attemptsCompleted + 1;                  // el que estás cursando
        if (attemptsElement) {
        attemptsElement.textContent = String(currentAttempt);
        attemptsElement.title = currentAttempt >= 3
            ? 'A partir de este intento se revelan las correctas al errar'
            : 'Las correctas no se revelan al errar hasta el intento 3';
        }

        // Activar revelado de correctas solo desde el 3er intento
        revealCorrectOnMistake = attemptsCompleted >= 2;
        console.log(`🔁 Intentos completados de "${currentTheme.id}": ${attemptsCompleted} → revealCorrectOnMistake=${revealCorrectOnMistake}`);

        // (opcional) override por query
        const forceReveal = getBoolParam('forceReveal');
        if (forceReveal !== null) {
        revealCorrectOnMistake = forceReveal;
        console.log(`🧪 Override revealCorrectOnMistake por query: ${revealCorrectOnMistake}`);
        }


        // Inicializar cuestionario
        initializeQuiz();

        const mainEnd = performance.now();
        const totalTime = mainEnd - engineStartTime;
        console.log(`⚡ Tiempo total de inicialización: ${totalTime.toFixed(2)}ms`);
        console.log('🎮 ¡Motor del cuestionario listo para usar!');
        
    } catch (error) {
        console.error('❌ Error en inicialización:', error);
        showError(`Error al cargar el cuestionario: ${error.message}`);
    }
}

// Iniciar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', main);