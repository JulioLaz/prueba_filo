// ========================================
// ⚡ TEMA: NIETZSCHE: LA MUERTE DE DIOS Y EL SUPERHOMBRE
// ========================================
// 📚 Unidad II: El ser humano
// Cuestionario de 13 preguntas de 5 opciones; cada una se responde con el material
// (themes/nietzsche_superhombre/content.html).
// Versión 1.0 (2026-11-25): tema nuevo.

const themeLoadStart = performance.now();

const NIETZSCHE_SUPERHOMBRE_THEME = {
    id: 'nietzsche_superhombre',
    title: 'Nietzsche: La Muerte de Dios y el Superhombre',
    description: 'La muerte de Dios, el nihilismo, la moral noble, de esclavos y del rebaño, la voluntad de poder, el eterno retorno y el superhombre.',
    icon: '⚡',
    gradient: 'linear-gradient(135deg, #1a202c 0%, #d69e2e 100%)',
    difficulty: 'intermedio',
    timeLimit: 50,
    contentFile: 'themes/nietzsche_superhombre/content.html',

    metadata: {
        author: 'Cuestionarios de Filosofía',
        version: '2.0',
        lastUpdated: '2026-11-24',
        category: 'Antropología Filosófica',
        prerequisites: [],
        learningObjectives: [
            'Explicar la muerte de Dios como diagnóstico cultural',
            'Distinguir el nihilismo pasivo del activo',
            'Comparar la moral noble, la de esclavos y la del rebaño',
            'Explicar la voluntad de poder y el eterno retorno',
            'Explicar el superhombre y corregir sus malentendidos'
        ]
    },

questions: [
  {
    id: 'nietzsche_001',
    question: "¿Qué quiere decir Nietzsche con «Dios ha muerto»?",
    answers: [
      { text: "Que Dios murió en un momento histórico preciso.", correct: false,
        explanation: "No es un hecho biológico." },
      { text: "Que el fundamento trascendente que sostenía la verdad y la moral de Occidente ya no sostiene a la sociedad.", correct: true,
        explanation: "Correcto. Es un diagnóstico de la cultura." },
      { text: "Que hay que fundar una religión nueva.", correct: false,
        explanation: "No propone otra religión." },
      { text: "Que la ciencia demostró científicamente que Dios no existe.", correct: false,
        explanation: "No es una prueba científica, sino un diagnóstico." },
      { text: "Que solo los filósofos dejaron de creer.", correct: false,
        explanation: "Habla de la cultura entera." }
    ],
    hint: "Un diagnóstico.",
    difficulty: 'basico',
    topic: 'Muerte de Dios'
  },
  {
    id: 'nietzsche_002',
    question: "¿Por qué Nietzsche dice que «nosotros lo hemos matado»?",
    answers: [
      { text: "Porque hubo una guerra religiosa.", correct: false,
        explanation: "No es literal." },
      { text: "Porque la sociedad moderna, con la ciencia y el espíritu crítico, dejó de creer en Dios.", correct: true,
        explanation: "Correcto. Como decía Feuerbach, el ser humano crea a Dios." },
      { text: "Porque los griegos lo prohibieron.", correct: false,
        explanation: "No es su argumento." },
      { text: "Porque Dios se alejó de los seres humanos.", correct: false,
        explanation: "Somos nosotros quienes dejamos de creer." },
      { text: "Porque así lo quiso Zaratustra.", correct: false,
        explanation: "Es una metáfora de la cultura." }
    ],
    hint: "Dejamos de creer.",
    difficulty: 'intermedio',
    topic: 'Muerte de Dios'
  },
  {
    id: 'nietzsche_003',
    question: "¿Qué diferencia hay entre el nihilismo pasivo y el activo?",
    answers: [
      { text: "El pasivo crea valores nuevos; el activo se resigna.", correct: false,
        explanation: "Es al revés." },
      { text: "El pasivo se resigna o busca sustitutos cómodos de Dios; el activo destruye los viejos ídolos para crear valores nuevos.", correct: true,
        explanation: "Correcto. Nietzsche valora el nihilismo activo." },
      { text: "Son lo mismo.", correct: false,
        explanation: "Son dos actitudes opuestas." },
      { text: "El activo es la religión tradicional.", correct: false,
        explanation: "La religión es lo que se derrumba." },
      { text: "El pasivo es propio de los niños.", correct: false,
        explanation: "El niño es símbolo de creación." }
    ],
    hint: "Resignarse o crear.",
    difficulty: 'intermedio',
    topic: 'Nihilismo'
  },
  {
    id: 'nietzsche_004',
    question: "Alguien deja de creer en todo, pero se refugia en idolatrar a un famoso como si fuera un dios. ¿Qué actitud es, según Nietzsche?",
    answers: [
      { text: "Nihilismo activo.", correct: false,
        explanation: "No destruye ídolos: busca uno nuevo." },
      { text: "Nihilismo pasivo: busca un sustituto cómodo del viejo Dios.", correct: true,
        explanation: "Correcto. Cambia de ídolo en lugar de crear valores." },
      { text: "Voluntad de poder creadora.", correct: false,
        explanation: "No crea: se somete." },
      { text: "Superhombre.", correct: false,
        explanation: "El superhombre crea sus propios valores." },
      { text: "Eterno retorno.", correct: false,
        explanation: "No tiene relación." }
    ],
    hint: "Un nuevo ídolo.",
    difficulty: 'avanzado',
    topic: 'Nihilismo'
  },
  {
    id: 'nietzsche_005',
    question: "¿Qué descubre Nietzsche al hacer la genealogía de la moral?",
    answers: [
      { text: "Que los valores son eternos y vienen del cielo.", correct: false,
        explanation: "Es lo que critica." },
      { text: "Que los valores tienen un origen histórico y psicológico, y por eso pueden criticarse y reemplazarse.", correct: true,
        explanation: "Correcto. Los crearon personas concretas." },
      { text: "Que el bien y el mal no existen en ninguna cultura.", correct: false,
        explanation: "Investiga cómo se formaron." },
      { text: "Que todos los pueblos tienen la misma moral.", correct: false,
        explanation: "Encuentra morales distintas." },
      { text: "Que la moral es una ciencia exacta.", correct: false,
        explanation: "No es su conclusión." }
    ],
    hint: "Los valores tienen historia.",
    difficulty: 'intermedio',
    topic: 'Genealogía'
  },
  {
    id: 'nietzsche_006',
    question: "En la moral noble, ¿qué significaba originalmente «bueno»?",
    answers: [
      { text: "Humilde y obediente.", correct: false,
        explanation: "Eso es la moral de esclavos." },
      { text: "Noble, fuerte, valiente y creador, como un buen pico que es fuerte y cumple su función.", correct: true,
        explanation: "Correcto. Así lo explica también el video." },
      { text: "Compasivo con todos.", correct: false,
        explanation: "La compasión es un valor de la moral de esclavos." },
      { text: "Lo que decide la mayoría.", correct: false,
        explanation: "Es la moral del rebaño." },
      { text: "Lo que no molesta.", correct: false,
        explanation: "No es el sentido noble." }
    ],
    hint: "Bueno = fuerte.",
    difficulty: 'basico',
    topic: 'Moral noble'
  },
  {
    id: 'nietzsche_007',
    question: "¿Cómo nace la moral de esclavos?",
    answers: [
      { text: "De la alegría de los fuertes.", correct: false,
        explanation: "Esa es la moral noble." },
      { text: "Del resentimiento de los débiles, que invierten los valores: llaman bien a su debilidad y mal a la fuerza.", correct: true,
        explanation: "Correcto. Es la inversión de los valores." },
      { text: "De un acuerdo racional entre todos.", correct: false,
        explanation: "Nace de una emoción: el resentimiento." },
      { text: "De la ciencia moderna.", correct: false,
        explanation: "No es su origen." },
      { text: "De la voluntad de poder creadora.", correct: false,
        explanation: "Es una fuerza reactiva, no creadora." }
    ],
    hint: "Resentimiento.",
    difficulty: 'intermedio',
    topic: 'Moral de esclavos'
  },
  {
    id: 'nietzsche_008',
    question: "¿Qué critica Nietzsche de la moral del rebaño?",
    answers: [
      { text: "Que permite que cada uno cree sus valores.", correct: false,
        explanation: "Es lo contrario." },
      { text: "Que busca domesticar y uniformar a todos, desconfiando de lo excepcional y lo creador.", correct: true,
        explanation: "Correcto. Que nadie sobresalga." },
      { text: "Que premia la creatividad.", correct: false,
        explanation: "Desconfía de ella." },
      { text: "Que es demasiado individualista.", correct: false,
        explanation: "Busca la uniformidad." },
      { text: "Que no tiene reglas.", correct: false,
        explanation: "Tiene muchas reglas para domesticar." }
    ],
    hint: "Que nadie sobresalga.",
    difficulty: 'intermedio',
    topic: 'Moral del rebaño'
  },
  {
    id: 'nietzsche_009',
    question: "¿Qué es la voluntad de poder?",
    answers: [
      { text: "El deseo de gobernar un país.", correct: false,
        explanation: "No es un afán político." },
      { text: "El instinto de sobrevivir sin cambiar.", correct: false,
        explanation: "Nietzsche lo considera conservador." },
      { text: "El impulso de toda vida a superarse, crecer, interpretar y crear.", correct: true,
        explanation: "Correcto. En el ser humano, se expresa como autocreación." },
      { text: "La obediencia a la moral del rebaño.", correct: false,
        explanation: "Es lo contrario." },
      { text: "El deseo de acumular dinero.", correct: false,
        explanation: "No es acumulación material." }
    ],
    hint: "La vida quiere ser más.",
    difficulty: 'intermedio',
    topic: 'Voluntad de poder'
  },
  {
    id: 'nietzsche_010',
    question: "Según el eterno retorno, ¿qué pregunta debería hacerse cada uno?",
    answers: [
      { text: "¿Qué me espera después de la muerte?", correct: false,
        explanation: "Nietzsche rechaza el más allá." },
      { text: "¿Viviría esta vida otra vez, tal cual, infinitas veces?", correct: true,
        explanation: "Correcto. Es una prueba para afirmar la vida." },
      { text: "¿Qué dicen los demás de mí?", correct: false,
        explanation: "No es la prueba del eterno retorno." },
      { text: "¿Cuánto dinero voy a ganar?", correct: false,
        explanation: "No tiene relación." },
      { text: "¿Qué mandan las tradiciones?", correct: false,
        explanation: "Es lo que critica." }
    ],
    hint: "¿Repetirías tu vida?",
    difficulty: 'basico',
    topic: 'Eterno retorno'
  },
  {
    id: 'nietzsche_011',
    question: "¿Cómo es el «último hombre» de Zaratustra?",
    answers: [
      { text: "El más creativo y arriesgado.", correct: false,
        explanation: "Es lo opuesto." },
      { text: "El que solo busca comodidad, seguridad y pequeños placeres, y dice haber inventado la felicidad.", correct: true,
        explanation: "Correcto. Es el peligro del hombre moderno." },
      { text: "El superhombre.", correct: false,
        explanation: "Es su opuesto." },
      { text: "El último que queda vivo en la Tierra.", correct: false,
        explanation: "No es literal." },
      { text: "Un guerrero que domina a otros.", correct: false,
        explanation: "No es eso." }
    ],
    hint: "Comodidad sin pasión.",
    difficulty: 'intermedio',
    topic: 'Último hombre'
  },
  {
    id: 'nietzsche_012',
    question: "En las tres transformaciones del espíritu, ¿qué representa el niño?",
    answers: [
      { text: "La obediencia a los deberes.", correct: false,
        explanation: "Eso es el camello." },
      { text: "La destrucción del «tú debes».", correct: false,
        explanation: "Eso hace el león." },
      { text: "La inocencia, el juego y un nuevo comienzo: puede crear valores nuevos.", correct: true,
        explanation: "Correcto. Es la última transformación." },
      { text: "El último hombre.", correct: false,
        explanation: "No es eso." },
      { text: "La moral del rebaño.", correct: false,
        explanation: "Es lo contrario." }
    ],
    hint: "Juego y creación.",
    difficulty: 'basico',
    topic: 'Tres transformaciones'
  },
  {
    id: 'nietzsche_013',
    question: "¿Por qué el superhombre de Nietzsche no es el «superhombre» de los nazis?",
    answers: [
      { text: "Porque Nietzsche lo pensaba como una raza superior.", correct: false,
        explanation: "No era una raza." },
      { text: "Porque no es una raza ni un tirano, sino un horizonte de autocreación: puede estar en silla de ruedas.", correct: true,
        explanation: "Correcto. Su hermana modificó sus escritos y el nazismo lo usó." },
      { text: "Porque el superhombre es un soldado.", correct: false,
        explanation: "No es un guerrero." },
      { text: "Porque es el más fuerte físicamente.", correct: false,
        explanation: "No se mide por la fuerza física." },
      { text: "Porque obedece al Estado.", correct: false,
        explanation: "Crea sus propios valores." }
    ],
    hint: "Ni raza ni tirano.",
    difficulty: 'avanzado',
    topic: 'Superhombre'
  }
],

    stats: {
        totalQuestions: 13,
        estimatedTime: 15,
        difficultyDistribution: {
            basico: 4,
            intermedio: 7,
            avanzado: 2
        },
        topicDistribution: {
            'Muerte de Dios': 2,
            'Nihilismo': 2,
            'Genealogía': 1,
            'Moral noble': 1,
            'Moral de esclavos': 1,
            'Moral del rebaño': 1,
            'Voluntad de poder': 1,
            'Eterno retorno': 1,
            'Último hombre': 1,
            'Tres transformaciones': 1,
            'Superhombre': 1
        }
    }
};

// ========================================
// 🔧 VALIDACIÓN DEL TEMA
// ========================================

function validateTheme() {
    const requiredFields = ['id', 'title', 'questions'];
    const missingFields = requiredFields.filter(field => !NIETZSCHE_SUPERHOMBRE_THEME[field]);
    if (missingFields.length > 0) {
        console.error(`❌ Faltan campos requeridos: ${missingFields.join(', ')}`);
        return false;
    }
    const invalidQuestions = NIETZSCHE_SUPERHOMBRE_THEME.questions.filter((q, index) => {
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
    console.log('✅ Tema de Nietzsche validado correctamente');
    return true;
}

function getThemeStats() {
    return {
        ...NIETZSCHE_SUPERHOMBRE_THEME.stats,
        validationPassed: validateTheme(),
        loadTime: performance.now() - themeLoadStart
    };
}

if (!validateTheme()) {
    console.error('❌ Error al cargar el tema de Nietzsche');
    throw new Error('Tema de Nietzsche inválido');
}

console.log(`✅ Tema de Nietzsche cargado: ${NIETZSCHE_SUPERHOMBRE_THEME.questions.length} preguntas`);

if (typeof window !== 'undefined') {
    window.NIETZSCHE_SUPERHOMBRE_THEME = NIETZSCHE_SUPERHOMBRE_THEME;
}
