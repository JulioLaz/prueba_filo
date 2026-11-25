// ========================================
// 🎯 TEMA: UTILITARISMO: LA MAYOR FELICIDAD PARA EL MAYOR NÚMERO DE PERSONAS
// ========================================
// 📚 Unidad III: Ética
// Cuestionario de 13 preguntas de 5 opciones; cada una se responde con el material
// (themes/utilitarismo/content.html).
// Versión 2.0 (2026-11-25): 13 preguntas alineadas con el material v2.0 (antes 12).

const themeLoadStart = performance.now();

const UTILITARISMO_THEME = {
    id: 'utilitarismo',
    title: 'Utilitarismo: La Mayor Felicidad para el Mayor Número de Personas',
    description: 'Utilidad, Bentham y el cálculo de la felicidad, la imparcialidad, Mill y los placeres superiores, el consecuencialismo, el acto y la regla, el principio del daño y las críticas.',
    icon: '🎯',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    difficulty: 'intermedio',
    timeLimit: 50,
    contentFile: 'themes/utilitarismo/content.html',

    metadata: {
        author: 'Cuestionarios de Filosofía',
        version: '2.0',
        lastUpdated: '2026-11-24',
        category: 'Ética',
        prerequisites: [],
        learningObjectives: [
            'Explicar el principio de la mayor felicidad y la imparcialidad',
            'Distinguir la propuesta cuantitativa de Bentham y la cualitativa de Mill',
            'Explicar el consecuencialismo y la diferencia entre utilitarismo del acto y de la regla',
            'Explicar el principio del daño y la dimensión social del utilitarismo',
            'Analizar dilemas y críticas al utilitarismo'
        ]
    },

questions: [
  {
    id: 'util_001',
    question: "¿Cuál es el valor supremo para el utilitarismo?",
    answers: [
      { text: "La virtud.", correct: false,
        explanation: "Es el centro de la ética de Aristóteles." },
      { text: "El deber.", correct: false,
        explanation: "Es el centro de la ética de Kant." },
      { text: "La utilidad: lo valioso es lo que aporta felicidad.", correct: true,
        explanation: "Correcto. Si algo es valioso, entonces es útil." },
      { text: "La obediencia.", correct: false,
        explanation: "No." },
      { text: "La fe.", correct: false,
        explanation: "No." }
    ],
    hint: "Lo útil.",
    difficulty: 'basico',
    topic: 'Concepto'
  },
  {
    id: 'util_002',
    question: "¿Qué propuso Bentham con su cálculo de la felicidad?",
    answers: [
      { text: "Medir los placeres por su intensidad, duración, certeza, cercanía y a cuántas personas alcanzan.", correct: true,
        explanation: "Correcto. Una mirada cuantitativa." },
      { text: "Que la felicidad no se puede medir.", correct: false,
        explanation: "Creía que sí." },
      { text: "Que solo valen los placeres intelectuales.", correct: false,
        explanation: "Eso se acerca a Mill." },
      { text: "Que cada uno decida solo qué lo hace feliz.", correct: false,
        explanation: "No quería dejarlo librado a cada individuo." },
      { text: "Que el dolor es bueno.", correct: false,
        explanation: "No." }
    ],
    hint: "Una mirada cuantitativa.",
    difficulty: 'intermedio',
    topic: 'Bentham'
  },
  {
    id: 'util_003',
    question: "«Cada uno cuenta como uno y nadie como más de uno». ¿Qué idea expresa?",
    answers: [
      { text: "El egoísmo.", correct: false,
        explanation: "Es lo contrario." },
      { text: "La imparcialidad: la felicidad de cada persona vale lo mismo.", correct: true,
        explanation: "Correcto. Por eso es una ética universalista." },
      { text: "Que solo cuentan los ricos.", correct: false,
        explanation: "No." },
      { text: "Que hay que contar los votos.", correct: false,
        explanation: "No habla de elecciones." },
      { text: "Que la mayoría siempre tiene razón.", correct: false,
        explanation: "No es lo que dice." }
    ],
    hint: "Nadie vale más que nadie.",
    difficulty: 'basico',
    topic: 'Imparcialidad'
  },
  {
    id: 'util_004',
    question: "¿Por qué Bentham incluyó a los animales en la moral?",
    answers: [
      { text: "Porque pueden razonar.", correct: false,
        explanation: "Dijo que esa no es la pregunta." },
      { text: "Porque pueden hablar.", correct: false,
        explanation: "Tampoco." },
      { text: "Porque son útiles para trabajar.", correct: false,
        explanation: "No es su argumento." },
      { text: "Porque pueden sufrir.", correct: true,
        explanation: "Correcto. La pregunta es si pueden sufrir." },
      { text: "No los incluyó.", correct: false,
        explanation: "Sí los incluyó." }
    ],
    hint: "¿Pueden sufrir?",
    difficulty: 'intermedio',
    topic: 'Imparcialidad'
  },
  {
    id: 'util_005',
    question: "¿En qué sentido la ética de Mill es eudemonista, hedonista y universalista?",
    answers: [
      { text: "Busca la virtud, rechaza el placer y vale solo para algunos.", correct: false,
        explanation: "No." },
      { text: "Busca el deber, la razón y la ley.", correct: false,
        explanation: "Eso se parece a Kant." },
      { text: "Busca el placer propio sin importar los demás.", correct: false,
        explanation: "Mill rechaza el hedonismo egoísta." },
      { text: "Busca la felicidad, la identifica con el placer y busca la de todos.", correct: true,
        explanation: "Correcto." },
      { text: "Busca el poder, la fama y el dinero.", correct: false,
        explanation: "No." }
    ],
    hint: "Felicidad, placer, todos.",
    difficulty: 'intermedio',
    topic: 'Mill'
  },
  {
    id: 'util_006',
    question: "¿Qué diferencia hay entre Bentham y Mill sobre los placeres?",
    answers: [
      { text: "Bentham mide la cantidad; Mill agrega la calidad: hay placeres superiores e inferiores.", correct: true,
        explanation: "Correcto. Mill afirma el carácter cualitativo." },
      { text: "Bentham prefería los placeres intelectuales y Mill los corporales.", correct: false,
        explanation: "Es al revés en todo caso." },
      { text: "Ninguno habló de placeres.", correct: false,
        explanation: "Los dos hablaron." },
      { text: "Mill dice que todos los placeres valen igual.", correct: false,
        explanation: "Eso se acerca a Bentham." },
      { text: "Bentham rechazaba el placer.", correct: false,
        explanation: "No." }
    ],
    hint: "Cantidad y calidad.",
    difficulty: 'intermedio',
    topic: 'Placeres'
  },
  {
    id: 'util_007',
    question: "¿Cuáles son placeres superiores para Mill?",
    answers: [
      { text: "Comer y dormir.", correct: false,
        explanation: "Son sensibles o corporales." },
      { text: "Los intelectuales, afectivos, morales y estéticos.", correct: true,
        explanation: "Correcto: pensar, amar, crear." },
      { text: "Solo los que duran poco.", correct: false,
        explanation: "No." },
      { text: "Los que dan más dinero.", correct: false,
        explanation: "No." },
      { text: "Los que no exigen esfuerzo.", correct: false,
        explanation: "No necesariamente." }
    ],
    hint: "Pensar, amar, crear.",
    difficulty: 'basico',
    topic: 'Placeres'
  },
  {
    id: 'util_008',
    question: "¿Qué afirma Mill con «mejor un Sócrates insatisfecho que un necio satisfecho»?",
    answers: [
      { text: "Que hay que dejar de pensar.", correct: false,
        explanation: "Es lo contrario." },
      { text: "Que Sócrates fue infeliz por error.", correct: false,
        explanation: "No." },
      { text: "Que quien desarrolló sus facultades superiores no cambiaría su vida por placeres simples.", correct: true,
        explanation: "Correcto. Los placeres superiores valen más." },
      { text: "Que la satisfacción es lo único importante.", correct: false,
        explanation: "No." },
      { text: "Que los necios son más dignos.", correct: false,
        explanation: "No." }
    ],
    hint: "Facultades superiores.",
    difficulty: 'intermedio',
    topic: 'Placeres'
  },
  {
    id: 'util_009',
    question: "¿Por qué el utilitarismo es una ética consecuencialista?",
    answers: [
      { text: "Porque juzga las acciones por sus consecuencias, no por la intención.", correct: true,
        explanation: "Correcto. A diferencia de Kant." },
      { text: "Porque solo importan las intenciones.", correct: false,
        explanation: "Eso se acerca a Kant." },
      { text: "Porque obedece las reglas sin excepción.", correct: false,
        explanation: "Mill admite excepciones." },
      { text: "Porque no le importan los resultados.", correct: false,
        explanation: "Es lo que más le importa." },
      { text: "Porque depende de la religión.", correct: false,
        explanation: "No." }
    ],
    hint: "Resultados.",
    difficulty: 'basico',
    topic: 'Consecuencialismo'
  },
  {
    id: 'util_010',
    question: "¿Qué diferencia hay entre el utilitarismo del acto y el de la regla?",
    answers: [
      { text: "No hay diferencia.", correct: false,
        explanation: "Sí la hay." },
      { text: "El del acto obedece normas; el de la regla evalúa cada caso.", correct: false,
        explanation: "Están invertidos." },
      { text: "El de la regla rechaza toda norma.", correct: false,
        explanation: "No." },
      { text: "Los dos dependen de las intenciones.", correct: false,
        explanation: "Ambos miran consecuencias." },
      { text: "El del acto evalúa cada acción concreta; el de la regla sigue las normas que, cumplidas por todos, dan más felicidad.", correct: true,
        explanation: "Correcto." }
    ],
    hint: "¿Este caso o la norma?",
    difficulty: 'avanzado',
    topic: 'Acto y regla'
  },
  {
    id: 'util_011',
    question: "Según el principio del daño de Mill, ¿cuándo se puede limitar la libertad de alguien?",
    answers: [
      { text: "Cuando piensa distinto de la mayoría.", correct: false,
        explanation: "Mill temía la tiranía de la mayoría." },
      { text: "Solo para evitar que dañe a otros.", correct: true,
        explanation: "Correcto. Sobre sí mismo, el individuo es soberano." },
      { text: "Siempre que el Estado quiera.", correct: false,
        explanation: "No." },
      { text: "Cuando se equivoca sobre su propia vida.", correct: false,
        explanation: "Sobre su vida es soberano." },
      { text: "Nunca, ni siquiera si daña a otros.", correct: false,
        explanation: "Sí, si daña a otros." }
    ],
    hint: "Daño a otros.",
    difficulty: 'intermedio',
    topic: 'Libertad'
  },
  {
    id: 'util_012',
    question: "¿Qué muestra el dilema del tranvía?",
    answers: [
      { text: "Que el utilitarismo no tiene respuesta.", correct: false,
        explanation: "Tiene una: desviar." },
      { text: "Que hay que dejar que mueran cinco.", correct: false,
        explanation: "Un utilitarista desviaría el tranvía." },
      { text: "La pregunta de si una acción que perjudica a pocos y beneficia a muchos es siempre buena.", correct: true,
        explanation: "Correcto." },
      { text: "Que los tranvías son peligrosos.", correct: false,
        explanation: "No es un problema técnico." },
      { text: "Que las intenciones son lo único importante.", correct: false,
        explanation: "No." }
    ],
    hint: "Uno o cinco.",
    difficulty: 'avanzado',
    topic: 'Dilema'
  },
  {
    id: 'util_013',
    question: "¿Qué objetan los kantianos al utilitarismo?",
    answers: [
      { text: "Que se preocupa demasiado por los deberes.", correct: false,
        explanation: "No." },
      { text: "Que no busca la felicidad.", correct: false,
        explanation: "La busca." },
      { text: "Que es demasiado religioso.", correct: false,
        explanation: "No." },
      { text: "Que no mira las consecuencias.", correct: false,
        explanation: "Las mira." },
      { text: "Que olvida la dignidad y los derechos de cada persona, que no se negocian.", correct: true,
        explanation: "Correcto. Podría sacrificar a una minoría." }
    ],
    hint: "Dignidad.",
    difficulty: 'avanzado',
    topic: 'Críticas'
  }
],

    stats: {
        totalQuestions: 13,
        estimatedTime: 15,
        difficultyDistribution: {
            basico: 4,
            intermedio: 6,
            avanzado: 3
        },
        topicDistribution: {
            'Concepto': 1,
            'Bentham': 1,
            'Imparcialidad': 2,
            'Mill': 1,
            'Placeres': 3,
            'Consecuencialismo': 1,
            'Acto y regla': 1,
            'Libertad': 1,
            'Dilema': 1,
            'Críticas': 1
        }
    }
};

// ========================================
// 🔧 VALIDACIÓN DEL TEMA
// ========================================

function validateTheme() {
    const requiredFields = ['id', 'title', 'questions'];
    const missingFields = requiredFields.filter(field => !UTILITARISMO_THEME[field]);
    if (missingFields.length > 0) {
        console.error(`❌ Faltan campos requeridos: ${missingFields.join(', ')}`);
        return false;
    }
    const invalidQuestions = UTILITARISMO_THEME.questions.filter((q, index) => {
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
    console.log('✅ Tema del utilitarismo validado correctamente');
    return true;
}

function getThemeStats() {
    return {
        ...UTILITARISMO_THEME.stats,
        validationPassed: validateTheme(),
        loadTime: performance.now() - themeLoadStart
    };
}

if (!validateTheme()) {
    console.error('❌ Error al cargar el tema del utilitarismo');
    throw new Error('Tema del utilitarismo inválido');
}

console.log(`✅ Tema del utilitarismo cargado: ${UTILITARISMO_THEME.questions.length} preguntas`);

if (typeof window !== 'undefined') {
    window.UTILITARISMO_THEME = UTILITARISMO_THEME;
}
