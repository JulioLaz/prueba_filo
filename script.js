// ========================================
// 🧠 CUESTIONARIO DE FILOSOFÍA - ÉTICA
// ========================================
// ⏱️ Tiempo inicio: ${new Date().toLocaleTimeString()}

console.log('🚀 Inicializando cuestionario de filosofía...');
const startTime = performance.now();

// DOM Elements
const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const helpTextContainer = document.getElementById('help-text');
const helpParagraph = document.getElementById('help-paragraph');
const showQuestionBtn = document.getElementById('show-question-btn');
const showTextBtn = document.getElementById('show-text-btn');
const timerDisplay = document.getElementById('timer-display');
const timerElement = document.getElementById('timer');
const scoreElement = document.getElementById('score');
const questionCounterElement = document.getElementById('question-counter');
const resultContainer = document.getElementById('result-container');
const finalScoreElement = document.getElementById('final-score');
const restartButton = document.getElementById('restart-btn');
const homeButton = document.getElementById('home-btn');
const textModal = document.getElementById('text-modal');
const closeModal = document.querySelector('.close');
const modalBody = document.getElementById('modal-body');

// Estado del juego
let currentQuestionIndex = 0;
let score = 0;
let timer;
const timeLimit = 30;

console.log('📊 Configuración inicial cargada');

// ========================================
// 📚 BANCO DE PREGUNTAS
// ========================================

const questions = [
    {
        question: "En el dilema presentado, la situación de Juan ilustra una colisión entre dos deberes o responsabilidades. ¿Cuál de los siguientes principios éticos podría ser considerado predominante en la Solución n.º 1, donde Juan elige llevar al niño al hospital?",
        answers: [
            { text: "Prioridad de los lazos familiares sobre el bienestar de un desconocido.", correct: false },
            { text: "Aplicación de una ética utilitarista que busca el mayor bien para el mayor número de personas.", correct: false },
            { text: "Adhesión a una norma moral absoluta que prohíbe el abandono de una persona herida.", correct: true },
            { text: "Un ejemplo de egoísmo ético, donde se prioriza la conciencia individual sobre el resultado de la acción.", correct: false },
            { text: "Una acción irresponsable, ya que no considera las consecuencias emocionales de no despedirse de su padre.", correct: false }
        ],
        hint: "Considera la acción de Juan en la Solución n.º 1. Elige la opción que mejor describa la motivación subyacente para su comportamiento."
    },
    {
        question: "¿Cuál es la diferencia fundamental que distingue los actos morales de los fenómenos naturales según el texto?",
        answers: [
            { text: "Los fenómenos naturales pueden ser considerados 'malos' en ciertas circunstancias, mientras que los actos humanos son siempre neutros.", correct: false },
            { text: "Los fenómenos naturales son intencionales, mientras que los actos morales son involuntarios.", correct: false },
            { text: "Los actos morales suponen intenciones subjetivas y dependen de la libertad y la elección, mientras que los fenómenos naturales están determinados por causas invariables.", correct: true },
            { text: "Los actos morales son el resultado de leyes físicas inalterables, y los fenómenos naturales son impredecibles.", correct: false },
            { text: "Los actos morales son solo aquellos que tienen consecuencias negativas, mientras que los fenómenos naturales no tienen impacto en los seres humanos.", correct: false }
        ],
        hint: "Analiza el ejemplo de la piedra y el andinista. Piensa en la diferencia fundamental en el control o la voluntad que cada uno tiene sobre sus acciones."
    },
    {
        question: "Según el texto, la principal razón por la que podemos emitir juicios morales sobre las acciones de una persona es que...",
        answers: [
            { text: "tienen consecuencias visibles en otras personas.", correct: false },
            { text: "la mayoría de la sociedad está de acuerdo en que el acto fue bueno o malo.", correct: false },
            { text: "la persona que actúa es libre y puede asumir la responsabilidad de sus actos.", correct: true },
            { text: "las acciones son siempre intencionales.", correct: false },
            { text: "los actos fueron realizados en un contexto social y político determinado.", correct: false }
        ],
        hint: "Recuerda el ejemplo del andinista que se desmaya. ¿Qué lección se extrae de ese caso con respecto a la intencionalidad y la responsabilidad?"
    },
    {
        question: "Jean-Paul Sartre sostiene que el hombre está 'condenado a ser libre'. ¿Cuál de las siguientes afirmaciones se desprende lógicamente de esta posición filosófica?",
        answers: [
            { text: "Los seres humanos pueden elegir no ser libres si así lo desean.", correct: false },
            { text: "Las normas morales son establecidas por una autoridad divina para guiar la conducta humana.", correct: false },
            { text: "La libertad es una ilusión, ya que la conducta humana está totalmente determinada.", correct: false },
            { text: "El hombre es el único responsable de inventar y seguir su propia moral, ya que no existen normas previas que lo guíen.", correct: true },
            { text: "La responsabilidad moral solo surge cuando el hombre se adhiere a las normas de su comunidad.", correct: false }
        ],
        hint: "Considera la frase 'condenado a ser libre'. ¿Qué significa para Sartre que no hay una moral preexistente?"
    },
    {
        question: "Erik Fromm presenta una posición intermedia en el debate sobre la libertad y el determinismo. ¿Qué implicación tiene su visión para el juicio moral en un contexto social y político como el de la Alemania nazi?",
        answers: [
            { text: "Los ciudadanos alemanes no podían ser juzgados moralmente porque su contexto socio-político los determinaba completamente.", correct: false },
            { text: "La ética humanista de Fromm es compatible con un determinismo total, ya que se centra en lo que es bueno para los seres humanos.", correct: false },
            { text: "Los ciudadanos alemanes podían elegir adherir o no al nazismo, lo que les permitía ser considerados moralmente responsables de sus acciones.", correct: true },
            { text: "El contexto socio-político elimina la responsabilidad moral, por lo que el nazismo no puede ser juzgado como moralmente malo.", correct: false },
            { text: "Fromm argumenta que la agresión humana es incontrolable en contextos autoritarios, lo que hace imposible el juicio moral.", correct: false }
        ],
        hint: "Analiza la diferencia entre la posición de Fromm y la de Skinner. ¿De qué manera la visión de Fromm sobre la libertad y el contexto se aplica al ejemplo del nazismo?"
    },
    {
        question: "El texto menciona que una de las condiciones para que un acto sea considerado bueno o malo es que 'tenga consecuencias o efectos posibles sobre otras personas'. ¿Qué implicación tiene esta condición para la moralidad de los 'pensamientos que no se expresan'?",
        answers: [
            { text: "Los pensamientos no pueden ser considerados moralmente buenos o malos porque no cumplen la segunda condición del juicio moral.", correct: true },
            { text: "Un pensamiento malvado es moralmente malo incluso si nunca se manifiesta.", correct: false },
            { text: "Los pensamientos solo se vuelven moralmente relevantes cuando se convierten en actos intencionales.", correct: false },
            { text: "La segunda condición es irrelevante, ya que la libertad y la responsabilidad son suficientes para el juicio moral.", correct: false },
            { text: "La única condición para el juicio moral es que el acto sea realizado por un agente libre y responsable.", correct: false }
        ],
        hint: "¿Qué ejemplos da el texto sobre actos que son 'exclusivamente privados' y por qué los excluye del juicio moral?"
    },
    {
        question: "Según la definición proporcionada, un conflicto de intereses ocurre cuando...",
        answers: [
            { text: "una persona utiliza su puesto para favorecer a otros, sin buscar un beneficio propio.", correct: false },
            { text: "se acepta un obsequio a cambio de un favor, lo cual es considerado soborno.", correct: false },
            { text: "una persona emite normas en su trabajo que le benefician directamente, como participar en la contratación de un familiar.", correct: true },
            { text: "una persona recluta a muchos miembros de su familia en una institución.", correct: false },
            { text: "un empleado miente para encubrir una conducta inapropiada de su supervisor.", correct: false }
        ],
        hint: "El texto proporciona una lista detallada de problemas éticos. Revisa esa lista y busca la definición que se ajusta a 'conflicto de intereses'."
    },
    {
        question: "El principio de integridad, según el texto, implica:",
        answers: [
            { text: "Aceptar las debilidades y limitaciones propias.", correct: false },
            { text: "Definir los valores de la institución por encima de los propios.", correct: false },
            { text: "Defender las creencias y valores personales, y rechazar la idea de que el fin justifica los medios.", correct: true },
            { text: "Mentir para proteger a un compañero o a la organización.", correct: false },
            { text: "Priorizar la eficacia y el éxito sobre la moralidad.", correct: false }
        ],
        hint: "En la sección de 'principios éticos', busca la definición de 'integridad'. ¿Qué acción se opone a ella?"
    },
    {
        question: "El texto argumenta que un determinismo total nos impediría emitir juicios morales porque...",
        answers: [
            { text: "la moralidad solo se aplica a los fenómenos naturales, no a las acciones humanas.", correct: false },
            { text: "los actos humanos, al no ser libres, serían moralmente neutros, como los fenómenos naturales.", correct: true },
            { text: "el ser humano es por naturaleza incapaz de conocer las leyes que rigen su conducta.", correct: false },
            { text: "las acciones de una persona son siempre intencionales, incluso si parecen determinadas.", correct: false },
            { text: "no se podría condenar a alguien por un asesinato, ya que no se podría probar que fue un acto intencional.", correct: false }
        ],
        hint: "Piensa en la diferencia entre una piedra que cae y un ser humano que toma una decisión. ¿Qué papel juega la libertad en esta distinción?"
    },
    {
        question: "El principio de 'Responsabilidad ciudadana' implica, además de respetar y obedecer las leyes, tener conciencia social. ¿Qué problema ético de los enumerados podría ser mitigado al aplicar este principio?",
        answers: [
            { text: "Nepotismo.", correct: false },
            { text: "Lealtad excesiva.", correct: false },
            { text: "Egoísmo.", correct: true },
            { text: "Encubrimiento.", correct: false },
            { text: "Soborno.", correct: false }
        ],
        hint: "Piensa en el significado de 'conciencia social'. ¿Cuál de los problemas éticos listados está más directamente relacionado con la falta de consideración por el bienestar de la comunidad o los demás?"
    }
];

console.log(`📚 Banco de preguntas cargado: ${questions.length} preguntas`);

// ========================================
// 🎲 FUNCIONES UTILITARIAS
// ========================================

/**
 * Mezcla las respuestas de manera aleatoria
 * @param {Object} question - Pregunta con sus respuestas
 * @returns {Object} Pregunta con respuestas mezcladas
 */
function shuffleAnswers(question) {
    console.log(`🎲 Mezclando respuestas para la pregunta ${currentQuestionIndex + 1}`);
    const shuffled = [...question.answers];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return { ...question, answers: shuffled };
}

/**
 * Actualiza el contador de preguntas
 */
function updateQuestionCounter() {
    questionCounterElement.innerText = `${currentQuestionIndex + 1}/${questions.length}`;
    console.log(`📊 Contador actualizado: ${currentQuestionIndex + 1}/${questions.length}`);
}

/**
 * Carga el contenido del archivo txt.html en el modal
 */
async function loadTextContent() {
    try {
        console.log('📖 Cargando contenido del material de estudio...');
        const loadStart = performance.now();
        
        const response = await fetch('./txt.html');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const content = await response.text();
        modalBody.innerHTML = content;
        
        const loadEnd = performance.now();
        console.log(`✅ Contenido cargado exitosamente en ${(loadEnd - loadStart).toFixed(2)}ms`);
        
    } catch (error) {
        console.error('❌ Error al cargar el contenido:', error);
        modalBody.innerHTML = `
            <div class="highlight-box">
                <h3>❌ Error al cargar el contenido</h3>
                <p>No se pudo cargar el material de estudio. Recargando página...</p>
                <p><strong>Error técnico:</strong> ${error.message}</p>
            </div>
        `;
        
        // Reintentar carga después de 2 segundos
        setTimeout(() => {
            location.reload();
        }, 2000);
    }
}

// ========================================
// 🎮 FUNCIONES PRINCIPALES DEL JUEGO
// ========================================

/**
 * Inicia el cuestionario
 */
function startQuiz() {
    console.log('🎮 Iniciando cuestionario...');
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.innerText = score;
    resultContainer.classList.add('hide');
    homeButton.classList.add('hide');
    timerDisplay.classList.add('hidden');
    showHelpText();
    console.log('✅ Cuestionario iniciado correctamente');
}

/**
 * Muestra el texto de ayuda
 */
function showHelpText() {
    console.log(`💡 Mostrando ayuda para pregunta ${currentQuestionIndex + 1}`);
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    helpParagraph.innerText = currentQuestion.hint;
    helpTextContainer.classList.remove('hide');
    updateQuestionCounter();
    showQuestionBtn.addEventListener('click', showQuestion, { once: true });
}

/**
 * Muestra la pregunta actual
 */
function showQuestion() {
    console.log(`❓ Mostrando pregunta ${currentQuestionIndex + 1}`);
    const questionStart = performance.now();
    
    helpTextContainer.classList.add('hide');
    questionText.classList.remove('hide');
    answerButtons.classList.remove('hide');
    timerDisplay.classList.remove('hidden');
    homeButton.classList.remove('hide');

    const currentQuestion = shuffleAnswers(questions[currentQuestionIndex]);
    questionText.innerText = currentQuestion.question;
    startTimer();

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
    
    const questionEnd = performance.now();
    console.log(`✅ Pregunta mostrada en ${(questionEnd - questionStart).toFixed(2)}ms`);
}

/**
 * Resetea el estado de la interfaz
 */
function resetState() {
    console.log('🔄 Reseteando estado de la interfaz...');
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    questionText.classList.add('hide');
    answerButtons.classList.add('hide');
    timerDisplay.classList.add('hidden');
    clearTimeout(timer);
}

/**
 * Maneja la selección de una respuesta
 * @param {Event} e - Evento del click
 */
function selectAnswer(e) {
    console.log('🎯 Respuesta seleccionada');
    const answerStart = performance.now();
    
    clearTimeout(timer);
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    if (isCorrect) {
        score++;
        scoreElement.innerText = score;
        console.log(`✅ Respuesta correcta! Puntaje: ${score}`);
    } else {
        console.log('❌ Respuesta incorrecta');
    }

    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === "true");
        button.disabled = true;
    });

    const answerEnd = performance.now();
    console.log(`⏱️ Respuesta procesada en ${(answerEnd - answerStart).toFixed(2)}ms`);

    setTimeout(() => {
        nextQuestion();
    }, 2500);
}

/**
 * Establece la clase de estado (correcto/incorrecto) para un botón
 * @param {HTMLElement} element - Elemento botón
 * @param {boolean} correct - Si la respuesta es correcta
 */
function setStatusClass(element, correct) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
    }
}

/**
 * Avanza a la siguiente pregunta o muestra resultados
 */
function nextQuestion() {
    currentQuestionIndex++;
    console.log(`➡️ Avanzando a pregunta ${currentQuestionIndex + 1}`);
    
    if (currentQuestionIndex < questions.length) {
        showHelpText();
    } else {
        console.log('🎉 Cuestionario completado!');
        showResults();
    }
}

/**
 * Inicia el temporizador para la pregunta actual
 */
function startTimer() {
    console.log(`⏱️ Iniciando timer: ${timeLimit} segundos`);
    let timeLeft = timeLimit;
    timerElement.innerText = timeLeft;

    // Resetear estilos del timer
    timerDisplay.style.background = '#ffebee';
    timerDisplay.style.borderColor = '#ffcdd2';

    timer = setInterval(() => {
        timeLeft--;
        timerElement.innerText = timeLeft;
        
        // Cambiar color del timer cuando queda poco tiempo
        if (timeLeft <= 10) {
            timerDisplay.style.background = '#ffcdd2';
            timerDisplay.style.borderColor = '#f44336';
            console.log('⚠️ Quedan 10 segundos o menos');
        } else if (timeLeft <= 20) {
            timerDisplay.style.background = '#fff3e0';
            timerDisplay.style.borderColor = '#ff9800';
        }
        
        if (timeLeft <= 0) {
            console.log('⏰ Tiempo agotado');
            clearTimeout(timer);
            Array.from(answerButtons.children).forEach(button => {
                setStatusClass(button, button.dataset.correct === "true");
                button.disabled = true;
            });
            setTimeout(() => {
                nextQuestion();
            }, 2500);
        }
    }, 1000);
}

/**
 * Muestra los resultados finales
 */
function showResults() {
    console.log('📊 Mostrando resultados finales...');
    const resultsStart = performance.now();
    
    questionContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
    homeButton.classList.remove('hide');
    timerDisplay.classList.add('hidden');
    
    const percentage = Math.round((score / questions.length) * 100);
    let message = "";
    
    if (percentage >= 90) {
        message = "¡Excelente! 🌟 Dominas muy bien los conceptos éticos.";
    } else if (percentage >= 70) {
        message = "¡Muy bien! 👏 Tienes un buen entendimiento de la ética.";
    } else if (percentage >= 50) {
        message = "Bien 👍 Pero puedes mejorar repasando el material.";
    } else {
        message = "📚 Te recomiendo estudiar más el material antes de volver a intentar.";
    }
    
    finalScoreElement.innerHTML = `
        <div style="font-size: 1.5em; margin-bottom: 15px;">${message}</div>
        <div>Tu puntaje: ${score} de ${questions.length} (${percentage}%)</div>
    `;
    
    const resultsEnd = performance.now();
    console.log(`✅ Resultados mostrados en ${(resultsEnd - resultsStart).toFixed(2)}ms`);
    console.log(`🎯 Puntaje final: ${score}/${questions.length} (${percentage}%)`);
}

// ========================================
// 🎧 EVENT LISTENERS
// ========================================

console.log('🎧 Configurando event listeners...');

// Event listeners para el modal
showTextBtn.addEventListener('click', () => {
    console.log('📖 Abriendo modal de texto completo');
    textModal.style.display = 'block';
    loadTextContent(); // Cargar contenido al abrir el modal
});

closeModal.addEventListener('click', () => {
    console.log('❌ Cerrando modal');
    textModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === textModal) {
        console.log('❌ Cerrando modal (click fuera)');
        textModal.style.display = 'none';
    }
});

restartButton.addEventListener('click', () => {
    console.log('🔄 Reiniciando cuestionario');
    startQuiz();
});

homeButton.addEventListener('click', () => {
    console.log('🏠 Volviendo al inicio');
    resetState();
    startQuiz();
});

// ========================================
// 🚀 INICIALIZACIÓN
// ========================================

console.log('🚀 Iniciando aplicación...');
const endTime = performance.now();
console.log(`⚡ Tiempo total de carga: ${(endTime - startTime).toFixed(2)}ms`);
console.log('🎮 ¡Cuestionario listo para usar!');

// Iniciar el quiz
startQuiz();