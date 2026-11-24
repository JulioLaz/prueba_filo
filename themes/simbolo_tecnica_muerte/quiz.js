// ========================================
// 🧩 TEMA: SÍMBOLO, TÉCNICA Y MUERTE: ¿QUÉ NOS HACE HUMANOS?
// ========================================
// 📚 Unidad II: El ser humano
// Cuestionario de 13 preguntas de 5 opciones; cada una se responde con el material
// (themes/simbolo_tecnica_muerte/content.html).
// Versión 1.0 (2026-11-24): tema nuevo.

const themeLoadStart = performance.now();

const SIMBOLO_TECNICA_MUERTE_THEME = {
    id: 'simbolo_tecnica_muerte',
    title: 'Símbolo, Técnica y Muerte: ¿Qué nos hace humanos?',
    description: 'Cassirer (animal simbólico), Maliandi (animal técnico y ética convergente) y Savater (el ser que sabe que va a morir).',
    icon: '🧩',
    gradient: 'linear-gradient(135deg, #805ad5 0%, #2b6cb0 100%)',
    difficulty: 'intermedio',
    timeLimit: 50,
    contentFile: 'themes/simbolo_tecnica_muerte/content.html',

    metadata: {
        author: 'Cuestionarios de Filosofía',
        version: '2.0',
        lastUpdated: '2026-11-24',
        category: 'Antropología Filosófica',
        prerequisites: [],
        learningObjectives: [
            'Explicar por qué Cassirer amplía la definición de animal racional',
            'Distinguir señal y símbolo y reconocer las formas simbólicas',
            'Explicar por qué somos animales técnicos y los riesgos de la técnica',
            'Explicar la conciencia de la muerte y la finitud según Savater',
            'Relacionar símbolo, técnica y muerte'
        ]
    },

questions: [
  {
    id: 'simbolo_001',
    question: "¿Por qué Cassirer considera estrecha la definición de «animal racional»?",
    answers: [
      { text: "Porque los humanos no razonan.", correct: false,
        explanation: "Cassirer no niega la razón: dice que no alcanza." },
      { text: "Porque deja afuera el mito, la poesía, los ritos y el arte, que también son maneras de entender el mundo.", correct: true,
        explanation: "Correcto. Por eso propone «animal simbólico»." },
      { text: "Porque Aristóteles se equivocó en todo.", correct: false,
        explanation: "Dice que la definición es verdadera, pero estrecha." },
      { text: "Porque los animales también razonan como nosotros.", correct: false,
        explanation: "No es su argumento." },
      { text: "Porque la razón es un símbolo religioso.", correct: false,
        explanation: "No es lo que sostiene." }
    ],
    hint: "Verdadera, pero estrecha.",
    difficulty: 'basico',
    topic: 'Cassirer'
  },
  {
    id: 'simbolo_002',
    question: "En el círculo funcional de Uexküll, ¿qué hace el sistema efector?",
    answers: [
      { text: "Capta los estímulos del ambiente.", correct: false,
        explanation: "Eso hace el sistema receptor." },
      { text: "Responde con movimientos a los estímulos.", correct: true,
        explanation: "Correcto. Receptor y efector forman el círculo de cada animal." },
      { text: "Interpreta los estímulos con palabras.", correct: false,
        explanation: "Eso es el sistema simbólico, propio del ser humano." },
      { text: "Fabrica herramientas.", correct: false,
        explanation: "No es parte del círculo funcional." },
      { text: "Recuerda el pasado.", correct: false,
        explanation: "No es su función." }
    ],
    hint: "Estímulo → respuesta.",
    difficulty: 'intermedio',
    topic: 'Círculo funcional'
  },
  {
    id: 'simbolo_003',
    question: "¿Qué cambia en el ser humano con el sistema simbólico?",
    answers: [
      { text: "Responde más rápido a los estímulos.", correct: false,
        explanation: "Al contrario: introduce una demora." },
      { text: "Deja de tener cuerpo.", correct: false,
        explanation: "Sigue siendo un organismo." },
      { text: "Ya no responde de inmediato: interpreta con palabras, imágenes y relatos, y vive en una nueva dimensión.", correct: true,
        explanation: "Correcto. Por eso somos animal symbolicum." },
      { text: "Pierde la capacidad de percibir.", correct: false,
        explanation: "Sigue percibiendo, pero interpreta." },
      { text: "Se vuelve igual a la garrapata.", correct: false,
        explanation: "La garrapata es el ejemplo de lo contrario." }
    ],
    hint: "Un tercer eslabón.",
    difficulty: 'intermedio',
    topic: 'Sistema simbólico'
  },
  {
    id: 'simbolo_004',
    question: "El humo que indica fuego y la palabra «fuego» en un poema. ¿Qué son, según Cassirer?",
    answers: [
      { text: "Las dos son señales.", correct: false,
        explanation: "La palabra en el poema no está atada a un fuego presente." },
      { text: "El humo es una señal (relación fija con algo presente); la palabra es un símbolo (móvil, puede hablar de lo ausente).", correct: true,
        explanation: "Correcto. Señal y símbolo son de órdenes distintos." },
      { text: "Las dos son símbolos.", correct: false,
        explanation: "El humo tiene una relación fija con el fuego: es señal." },
      { text: "El humo es un símbolo y la palabra una señal.", correct: false,
        explanation: "Es al revés." },
      { text: "Ninguna de las dos significa nada.", correct: false,
        explanation: "Las dos remiten a algo, pero de modo distinto." }
    ],
    hint: "Fijo o móvil.",
    difficulty: 'avanzado',
    topic: 'Señal y símbolo'
  },
  {
    id: 'simbolo_005',
    question: "¿Cuál de estas NO es una forma simbólica según Cassirer?",
    answers: [
      { text: "El lenguaje.", correct: false,
        explanation: "Sí es una forma simbólica." },
      { text: "El mito y la religión.", correct: false,
        explanation: "Sí es una forma simbólica." },
      { text: "El arte.", correct: false,
        explanation: "Sí es una forma simbólica." },
      { text: "El reflejo de retirar la mano del fuego.", correct: true,
        explanation: "Correcto: es una respuesta inmediata, no una forma simbólica." },
      { text: "La ciencia.", correct: false,
        explanation: "Sí es una forma simbólica." }
    ],
    hint: "Lentes para interpretar.",
    difficulty: 'basico',
    topic: 'Formas simbólicas'
  },
  {
    id: 'simbolo_006',
    question: "¿Qué quiere decir que la cultura es un proceso de «autoliberación»?",
    answers: [
      { text: "Que la cultura nos encierra en dogmas.", correct: false,
        explanation: "Ese es el riesgo, no la definición." },
      { text: "Que con los símbolos dejamos de estar atados a lo inmediato y construimos nuestro propio mundo.", correct: true,
        explanation: "Correcto. Podemos imaginar, recordar y crear." },
      { text: "Que la cultura es gratis.", correct: false,
        explanation: "No es el sentido." },
      { text: "Que hay que liberarse de la cultura.", correct: false,
        explanation: "Es al revés: la cultura libera." },
      { text: "Que los animales nos liberan.", correct: false,
        explanation: "No tiene relación." }
    ],
    hint: "Construir el propio mundo.",
    difficulty: 'intermedio',
    topic: 'Cultura'
  },
  {
    id: 'simbolo_007',
    question: "Según Maliandi y Gehlen, ¿por qué el ser humano es un «ser carencial»?",
    answers: [
      { text: "Porque es pobre.", correct: false,
        explanation: "No habla de dinero." },
      { text: "Porque nace sin garras, pelaje ni instintos seguros que le indiquen qué hacer.", correct: true,
        explanation: "Correcto. Biológicamente, viene incompleto." },
      { text: "Porque le falta razón.", correct: false,
        explanation: "La razón no es lo que falta." },
      { text: "Porque está más especializado que los animales.", correct: false,
        explanation: "Es al revés: los animales son especializados." },
      { text: "Porque no puede usar símbolos.", correct: false,
        explanation: "No es la idea." }
    ],
    hint: "Nacemos incompletos.",
    difficulty: 'basico',
    topic: 'Ser carencial'
  },
  {
    id: 'simbolo_008',
    question: "¿Qué significa que la técnica es una «prótesis»?",
    answers: [
      { text: "Que solo sirve en los hospitales.", correct: false,
        explanation: "Es una idea más amplia." },
      { text: "Que extiende el cuerpo: el martillo prolonga el puño y la computadora amplía la memoria.", correct: true,
        explanation: "Correcto. Como decía Ernst Kapp." },
      { text: "Que la técnica es innecesaria.", correct: false,
        explanation: "Para Maliandi es condición de supervivencia." },
      { text: "Que los animales usan técnica igual que nosotros.", correct: false,
        explanation: "Nosotros transformamos el medio; el animal se adapta." },
      { text: "Que la técnica es siempre peligrosa.", correct: false,
        explanation: "Es ambivalente, no siempre mala." }
    ],
    hint: "Extensión del cuerpo.",
    difficulty: 'intermedio',
    topic: 'Técnica'
  },
  {
    id: 'simbolo_009',
    question: "¿Por qué, para Maliandi, la vida humana es conflictiva «por estructura»?",
    answers: [
      { text: "Porque los humanos siempre se pelean.", correct: false,
        explanation: "No habla de peleas." },
      { text: "Porque la razón tiene dos dimensiones opuestas y necesarias: la fundamentación (orden) y la crítica (cambio).", correct: true,
        explanation: "Correcto. Es la bidimensionalidad de la razón." },
      { text: "Porque la técnica no tiene reglas.", correct: false,
        explanation: "No es el motivo." },
      { text: "Porque no tenemos instintos.", correct: false,
        explanation: "Eso explica la técnica, no el conflicto de la razón." },
      { text: "Porque la muerte es inevitable.", correct: false,
        explanation: "Esa es la idea de Savater." }
    ],
    hint: "Fundamentar y criticar.",
    difficulty: 'avanzado',
    topic: 'Razón conflictiva'
  },
  {
    id: 'simbolo_010',
    question: "Un equipo sabe cómo fabricar un arma más potente. ¿Qué tipo de racionalidad falta si nadie se pregunta si deben hacerlo?",
    answers: [
      { text: "La instrumental.", correct: false,
        explanation: "Esa ya la tienen: saben cómo hacerlo." },
      { text: "La valorativa, que juzga si el fin es bueno.", correct: true,
        explanation: "Correcto. Saber cómo no dice si debemos." },
      { text: "La matemática.", correct: false,
        explanation: "No es la que falta." },
      { text: "La simbólica.", correct: false,
        explanation: "No es el punto." },
      { text: "Ninguna: si se puede hacer, se debe hacer.", correct: false,
        explanation: "Eso es dejar que la técnica decida sola." }
    ],
    hint: "Cómo y si debemos.",
    difficulty: 'intermedio',
    topic: 'Ambivalencia de la técnica'
  },
  {
    id: 'simbolo_011',
    question: "¿Por qué la técnica actual exige una ética nueva, según Maliandi y Jonas?",
    answers: [
      { text: "Porque las máquinas tienen derechos.", correct: false,
        explanation: "No es el argumento." },
      { text: "Porque sus efectos son irreversibles y planetarios, y afectan a las generaciones futuras.", correct: true,
        explanation: "Correcto. Por eso propone una ética convergente." },
      { text: "Porque la ética tradicional prohibía la técnica.", correct: false,
        explanation: "No es así." },
      { text: "Porque ya no hay vecinos.", correct: false,
        explanation: "La ética tradicional pensaba en lo cercano, pero el problema es el alcance de la técnica." },
      { text: "Porque la técnica ya no tiene riesgos.", correct: false,
        explanation: "Es al revés." }
    ],
    hint: "Generaciones futuras.",
    difficulty: 'intermedio',
    topic: 'Responsabilidad'
  },
  {
    id: 'simbolo_012',
    question: "Para Savater, ¿qué distingue al ser humano del animal frente a la muerte?",
    answers: [
      { text: "Que el ser humano no muere.", correct: false,
        explanation: "Todos morimos." },
      { text: "Que el animal muere sin saberlo, y el ser humano sabe que va a morir.", correct: true,
        explanation: "Correcto. Esa certeza es el punto de partida del pensamiento." },
      { text: "Que el animal teme más a la muerte.", correct: false,
        explanation: "El animal no la anticipa." },
      { text: "Que el ser humano vive siempre en el presente.", correct: false,
        explanation: "Eso describe al animal." },
      { text: "Que el ser humano puede morir en lugar de otro.", correct: false,
        explanation: "La muerte es intransferible." }
    ],
    hint: "Saber que vamos a morir.",
    difficulty: 'basico',
    topic: 'Savater'
  },
  {
    id: 'simbolo_013',
    question: "¿Por qué, según Savater, la finitud es la raíz de la libertad?",
    answers: [
      { text: "Porque al morir dejamos de tener obligaciones.", correct: false,
        explanation: "No es el argumento." },
      { text: "Porque si el tiempo fuera infinito nada sería urgente; al ser limitado, elegir tiene peso y la vida se vuelve un proyecto.", correct: true,
        explanation: "Correcto. La muerte es el marco de la libertad." },
      { text: "Porque los inmortales son más libres.", correct: false,
        explanation: "Es al revés: nada valdría la pena." },
      { text: "Porque la muerte decide por nosotros.", correct: false,
        explanation: "Somos nosotros los que elegimos." },
      { text: "Porque hay que vivir sin pensar en el tiempo.", correct: false,
        explanation: "Pensar en el tiempo nos hace libres." }
    ],
    hint: "El tiempo limitado da valor.",
    difficulty: 'avanzado',
    topic: 'Finitud y libertad'
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
            'Cassirer': 1,
            'Círculo funcional': 1,
            'Sistema simbólico': 1,
            'Señal y símbolo': 1,
            'Formas simbólicas': 1,
            'Cultura': 1,
            'Ser carencial': 1,
            'Técnica': 1,
            'Razón conflictiva': 1,
            'Ambivalencia de la técnica': 1,
            'Responsabilidad': 1,
            'Savater': 1,
            'Finitud y libertad': 1
        }
    }
};

// ========================================
// 🔧 VALIDACIÓN DEL TEMA
// ========================================

function validateTheme() {
    const requiredFields = ['id', 'title', 'questions'];
    const missingFields = requiredFields.filter(field => !SIMBOLO_TECNICA_MUERTE_THEME[field]);
    if (missingFields.length > 0) {
        console.error(`❌ Faltan campos requeridos: ${missingFields.join(', ')}`);
        return false;
    }
    const invalidQuestions = SIMBOLO_TECNICA_MUERTE_THEME.questions.filter((q, index) => {
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
    console.log('✅ Tema de Símbolo, Técnica y Muerte validado correctamente');
    return true;
}

function getThemeStats() {
    return {
        ...SIMBOLO_TECNICA_MUERTE_THEME.stats,
        validationPassed: validateTheme(),
        loadTime: performance.now() - themeLoadStart
    };
}

if (!validateTheme()) {
    console.error('❌ Error al cargar el tema de Símbolo, Técnica y Muerte');
    throw new Error('Tema de Símbolo, Técnica y Muerte inválido');
}

console.log(`✅ Tema de Símbolo, Técnica y Muerte cargado: ${SIMBOLO_TECNICA_MUERTE_THEME.questions.length} preguntas`);

if (typeof window !== 'undefined') {
    window.SIMBOLO_TECNICA_MUERTE_THEME = SIMBOLO_TECNICA_MUERTE_THEME;
}
