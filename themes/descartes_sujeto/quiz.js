// ========================================
// 🧠 TEMA: DESCARTES: PIENSO, LUEGO EXISTO — EL SUJETO Y EL DUALISMO
// ========================================
// 📚 Unidad II: El ser humano
// Cuestionario de 13 preguntas de 5 opciones; cada una se responde con el material
// (themes/descartes_sujeto/content.html).
// Versión 1.0 (2026-11-25): tema nuevo.

const themeLoadStart = performance.now();

const DESCARTES_SUJETO_THEME = {
    id: 'descartes_sujeto',
    title: 'Descartes: Pienso, Luego Existo — El Sujeto y el Dualismo',
    description: 'El giro hacia el sujeto, la duda, el cogito, las ideas y Dios, el error, el dualismo mente-cuerpo y su vigencia.',
    icon: '🧠',
    gradient: 'linear-gradient(135deg, #2b6cb0 0%, #805ad5 100%)',
    difficulty: 'intermedio',
    timeLimit: 50,
    contentFile: 'themes/descartes_sujeto/content.html',

    metadata: {
        author: 'Cuestionarios de Filosofía',
        version: '2.0',
        lastUpdated: '2026-11-24',
        category: 'Antropología Filosófica',
        prerequisites: [],
        learningObjectives: [
            'Explicar el giro hacia el sujeto y la búsqueda de certeza',
            'Reconstruir los niveles de la duda y el cogito',
            'Explicar los tipos de ideas, las pruebas de Dios y el error',
            'Explicar el dualismo sustancial y el problema de la interacción',
            'Relacionar a Descartes con la IA, la simulación y la mente encarnada'
        ]
    },

questions: [
  {
    id: 'descartes_001',
    question: "¿Qué cambio introduce Descartes en la filosofía?",
    answers: [
      { text: "Vuelve a explicar todo desde los mitos.", correct: false,
        explanation: "Es lo opuesto." },
      { text: "La filosofía parte de la certeza del sujeto que piensa, no del mundo.", correct: true,
        explanation: "Correcto. Es el giro hacia el sujeto de la modernidad." },
      { text: "Abandona la razón por la fe.", correct: false,
        explanation: "Descartes es racionalista." },
      { text: "Solo estudia la naturaleza.", correct: false,
        explanation: "Parte del sujeto." },
      { text: "Niega que exista el conocimiento.", correct: false,
        explanation: "Busca fundarlo." }
    ],
    hint: "Del mundo al sujeto.",
    difficulty: 'basico',
    topic: 'Giro hacia el sujeto'
  },
  {
    id: 'descartes_002',
    question: "¿Cuáles son los rasgos de la duda cartesiana?",
    answers: [
      { text: "Es pasajera, emocional y parcial.", correct: false,
        explanation: "No es una crisis psicológica." },
      { text: "Es metódica, universal e hiperbólica.", correct: true,
        explanation: "Correcto. Duda para superar la duda." },
      { text: "Es escéptica: busca no afirmar nunca nada.", correct: false,
        explanation: "Eso hacían los escépticos antiguos." },
      { text: "Es religiosa: duda de Dios para negarlo.", correct: false,
        explanation: "No es su objetivo." },
      { text: "Solo duda de los sentidos.", correct: false,
        explanation: "Llega hasta las matemáticas." }
    ],
    hint: "Un medio, no un fin.",
    difficulty: 'intermedio',
    topic: 'Duda'
  },
  {
    id: 'descartes_003',
    question: "Ordená los niveles de la duda en la primera meditación.",
    answers: [
      { text: "Genio maligno, sueño, sentidos.", correct: false,
        explanation: "Está al revés." },
      { text: "Sentidos, sueño, genio maligno.", correct: true,
        explanation: "Correcto. La duda se radicaliza de a poco." },
      { text: "Sueño, genio maligno, sentidos.", correct: false,
        explanation: "Empieza por los sentidos." },
      { text: "Matemáticas, sentidos, sueño.", correct: false,
        explanation: "Las matemáticas caen recién con el genio maligno." },
      { text: "Cogito, sentidos, sueño.", correct: false,
        explanation: "El cogito aparece después, en la segunda meditación." }
    ],
    hint: "Del más simple al más extremo.",
    difficulty: 'intermedio',
    topic: 'Niveles de la duda'
  },
  {
    id: 'descartes_004',
    question: "¿Por qué el cogito resiste la duda?",
    answers: [
      { text: "Porque lo dicen los sentidos.", correct: false,
        explanation: "Los sentidos ya cayeron." },
      { text: "Porque, aunque un genio me engañe, para dudar o ser engañado tengo que pensar, y si pienso, existo.", correct: true,
        explanation: "Correcto. Es una intuición inmediata." },
      { text: "Porque es una verdad matemática.", correct: false,
        explanation: "Las matemáticas cayeron con el genio maligno." },
      { text: "Porque Dios lo garantiza.", correct: false,
        explanation: "Dios aparece después del cogito." },
      { text: "Porque es un silogismo con premisa mayor.", correct: false,
        explanation: "No es un silogismo: es una intuición." }
    ],
    hint: "Si dudo, existo.",
    difficulty: 'basico',
    topic: 'Cogito'
  },
  {
    id: 'descartes_005',
    question: "Después del cogito, ¿qué sabe Descartes que es?",
    answers: [
      { text: "Un cuerpo con alma.", correct: false,
        explanation: "Del cuerpo todavía duda." },
      { text: "Una cosa que piensa (res cogitans), aunque todavía no sabe si tiene cuerpo.", correct: true,
        explanation: "Correcto. Por ahora está radicalmente solo." },
      { text: "Un ser humano completo.", correct: false,
        explanation: "Solo está seguro de su pensamiento." },
      { text: "Dios.", correct: false,
        explanation: "Sabe que es finito." },
      { text: "Una máquina.", correct: false,
        explanation: "Las máquinas son res extensa." }
    ],
    hint: "Solo una mente.",
    difficulty: 'intermedio',
    topic: 'Res cogitans'
  },
  {
    id: 'descartes_006',
    question: "La idea de un dragón con alas de mariposa es, para Descartes, una idea...",
    answers: [
      { text: "innata.", correct: false,
        explanation: "No nace conmigo." },
      { text: "adventicia.", correct: false,
        explanation: "No la recibí de afuera tal cual." },
      { text: "facticia: la construyo combinando otras ideas, como un centauro.", correct: true,
        explanation: "Correcto." },
      { text: "clara y distinta.", correct: false,
        explanation: "No por eso es verdadera." },
      { text: "divina.", correct: false,
        explanation: "No viene de Dios." }
    ],
    hint: "Inventada.",
    difficulty: 'basico',
    topic: 'Tipos de ideas'
  },
  {
    id: 'descartes_007',
    question: "¿Por qué Descartes dice que la idea de infinito tuvo que ponerla Dios?",
    answers: [
      { text: "Porque la leyó en un libro sagrado.", correct: false,
        explanation: "No es su argumento." },
      { text: "Porque un ser finito no puede producir la idea de algo infinito: solo un ser infinito pudo ponerla, como la firma del artista.", correct: true,
        explanation: "Correcto. Es el primer argumento de la tercera meditación." },
      { text: "Porque la vio en un sueño.", correct: false,
        explanation: "Los sueños son dudosos." },
      { text: "Porque la inventó combinando ideas.", correct: false,
        explanation: "No puede ser facticia." },
      { text: "Porque los sentidos la muestran.", correct: false,
        explanation: "No viene de los sentidos." }
    ],
    hint: "La firma del artista.",
    difficulty: 'avanzado',
    topic: 'Existencia de Dios'
  },
  {
    id: 'descartes_008',
    question: "¿Qué compara Descartes en el argumento ontológico?",
    answers: [
      { text: "Dios con un reloj.", correct: false,
        explanation: "No es esa comparación." },
      { text: "La idea de Dios con una montaña que no se puede pensar sin valle: la perfección implica la existencia.", correct: true,
        explanation: "Correcto. Un Dios que no existiera sería imperfecto." },
      { text: "Dios con un genio maligno.", correct: false,
        explanation: "Son opuestos." },
      { text: "Dios con un autómata.", correct: false,
        explanation: "No tiene relación." },
      { text: "Dios con el palo en el agua.", correct: false,
        explanation: "Ese es el ejemplo de los sentidos." }
    ],
    hint: "Montaña y valle.",
    difficulty: 'avanzado',
    topic: 'Argumento ontológico'
  },
  {
    id: 'descartes_009',
    question: "¿Por qué, una vez demostrado Dios, cae la hipótesis del genio maligno?",
    answers: [
      { text: "Porque el genio maligno se convierte en Dios.", correct: false,
        explanation: "No es así." },
      { text: "Porque Dios es perfecto y bueno, y no puede engañar: es la garantía del conocimiento.", correct: true,
        explanation: "Correcto. Así recupera las matemáticas." },
      { text: "Porque el genio maligno se cansa.", correct: false,
        explanation: "No es el argumento." },
      { text: "Porque los sentidos lo prueban.", correct: false,
        explanation: "No es por los sentidos." },
      { text: "Porque nunca existió esa hipótesis.", correct: false,
        explanation: "Fue una hipótesis metódica." }
    ],
    hint: "Un Dios bueno no engaña.",
    difficulty: 'intermedio',
    topic: 'Dios como garantía'
  },
  {
    id: 'descartes_010',
    question: "Alguien saluda a una persona desde lejos creyendo que es un amigo, y era un desconocido. ¿Cómo explicaría Descartes el error?",
    answers: [
      { text: "Dios lo engañó.", correct: false,
        explanation: "Dios no engaña." },
      { text: "La voluntad se precipitó y juzgó antes de que el entendimiento estuviera seguro.", correct: true,
        explanation: "Correcto. Es estirar el brazo más que la manga." },
      { text: "Los ojos siempre mienten.", correct: false,
        explanation: "Solo engañan a veces." },
      { text: "Pensó demasiado.", correct: false,
        explanation: "Es al revés: juzgó demasiado rápido." },
      { text: "Fue culpa del genio maligno.", correct: false,
        explanation: "El genio ya fue descartado." }
    ],
    hint: "Brazo y manga.",
    difficulty: 'intermedio',
    topic: 'Error'
  },
  {
    id: 'descartes_011',
    question: "¿Qué es el mecanicismo cartesiano?",
    answers: [
      { text: "Creer que todo tiene un alma.", correct: false,
        explanation: "Es lo contrario." },
      { text: "Entender la realidad material, incluidos el cuerpo y los animales, como máquinas regidas por leyes mecánicas.", correct: true,
        explanation: "Correcto. Como un reloj." },
      { text: "Una forma de reparar autos.", correct: false,
        explanation: "Es un concepto filosófico." },
      { text: "Pensar que la mente es una máquina.", correct: false,
        explanation: "La mente es res cogitans, no máquina." },
      { text: "Rechazar la ciencia.", correct: false,
        explanation: "Impulsó la ciencia moderna." }
    ],
    hint: "Como un reloj.",
    difficulty: 'intermedio',
    topic: 'Mecanicismo'
  },
  {
    id: 'descartes_012',
    question: "¿Qué objetó Isabel de Bohemia a Descartes?",
    answers: [
      { text: "Que no creía en Dios.", correct: false,
        explanation: "No fue su objeción." },
      { text: "Que la glándula pineal no explica cómo algo inmaterial, la mente, puede mover algo material, el cuerpo.", correct: true,
        explanation: "Correcto. Es el problema de la interacción." },
      { text: "Que las matemáticas son falsas.", correct: false,
        explanation: "No fue su crítica." },
      { text: "Que los animales piensan.", correct: false,
        explanation: "No fue su objeción." },
      { text: "Que el cogito era un silogismo.", correct: false,
        explanation: "No fue su crítica." }
    ],
    hint: "El problema de la interacción.",
    difficulty: 'avanzado',
    topic: 'Dualismo'
  },
  {
    id: 'descartes_013',
    question: "Un chatbot responde con fluidez a cualquier pregunta. ¿Qué se preguntaría Descartes?",
    answers: [
      { text: "Si pesa lo mismo que una persona.", correct: false,
        explanation: "No es su criterio." },
      { text: "Si usa el lenguaje con verdadera comprensión y razón, o solo simula como un autómata.", correct: true,
        explanation: "Correcto. Es su prueba del Discurso del método, hoy aplicada a la IA." },
      { text: "Si tiene cuerpo humano.", correct: false,
        explanation: "No es el centro de su prueba." },
      { text: "Si fue creado por Dios.", correct: false,
        explanation: "No es su criterio." },
      { text: "Si sabe matemáticas.", correct: false,
        explanation: "No alcanza con eso." }
    ],
    hint: "¿Habla o piensa?",
    difficulty: 'avanzado',
    topic: 'IA y autómatas'
  }
],

    stats: {
        totalQuestions: 13,
        estimatedTime: 15,
        difficultyDistribution: {
            basico: 3,
            intermedio: 6,
            avanzado: 4
        },
        topicDistribution: {
            'Giro hacia el sujeto': 1,
            'Duda': 1,
            'Niveles de la duda': 1,
            'Cogito': 1,
            'Res cogitans': 1,
            'Tipos de ideas': 1,
            'Existencia de Dios': 1,
            'Argumento ontológico': 1,
            'Dios como garantía': 1,
            'Error': 1,
            'Mecanicismo': 1,
            'Dualismo': 1,
            'IA y autómatas': 1
        }
    }
};

// ========================================
// 🔧 VALIDACIÓN DEL TEMA
// ========================================

function validateTheme() {
    const requiredFields = ['id', 'title', 'questions'];
    const missingFields = requiredFields.filter(field => !DESCARTES_SUJETO_THEME[field]);
    if (missingFields.length > 0) {
        console.error(`❌ Faltan campos requeridos: ${missingFields.join(', ')}`);
        return false;
    }
    const invalidQuestions = DESCARTES_SUJETO_THEME.questions.filter((q, index) => {
        if (!q.id || !q.question || !q.answers || !q.hint) {
            console.error(`❌ Pregunta ${index + 1} inválida: faltan campos requeridos`);
            return true;
        }
        if (q.answers.length !== 5) {
            console.error(`❌ Pregunta ${index + 1}: debe tener exactamente 5 respuestas`);
            return true;
        }
        if (q.answers.filter(a => a.correct).length !== 1) {
            console.error(`❌ Pregunta ${index + 1}: debe tener exactamente 1 respuesta correcta`);
            return true;
        }
        return false;
    });
    if (invalidQuestions.length > 0) {
        console.error(`❌ ${invalidQuestions.length} preguntas inválidas encontradas`);
        return false;
    }
    console.log('✅ Tema de Descartes validado correctamente');
    return true;
}

function getThemeStats() {
    return {
        ...DESCARTES_SUJETO_THEME.stats,
        validationPassed: validateTheme(),
        loadTime: performance.now() - themeLoadStart
    };
}

if (!validateTheme()) {
    console.error('❌ Error al cargar el tema de Descartes');
    throw new Error('Tema de Descartes inválido');
}

console.log(`✅ Tema de Descartes cargado: ${DESCARTES_SUJETO_THEME.questions.length} preguntas`);

if (typeof window !== 'undefined') {
    window.DESCARTES_SUJETO_THEME = DESCARTES_SUJETO_THEME;
}
