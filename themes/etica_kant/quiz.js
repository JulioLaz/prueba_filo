// ========================================
// ⚖️ TEMA: ÉTICA KANTIANA: LO BUENO ES LO QUE SE HACE POR DEBER
// ========================================
// 📚 Unidad III: Ética
// Cuestionario de 13 preguntas de 5 opciones; cada una se responde con el material
// (themes/etica_kant/content.html).
// Versión 2.0 (2026-11-25): 13 preguntas alineadas con el material v2.0 (antes 12).

const themeLoadStart = performance.now();

const ETICA_KANT_THEME = {
    id: 'etica_kant',
    title: 'Ética Kantiana: Lo Bueno es lo que se Hace por Deber',
    description: 'Consecuencias, éticas materiales y formal, buena voluntad, actuar por deber, imperativos, ley universal, la humanidad como fin, dignidad y autonomía.',
    icon: '⚖️',
    gradient: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)',
    difficulty: 'intermedio',
    timeLimit: 50,
    contentFile: 'themes/etica_kant/content.html',

    metadata: {
        author: 'Cuestionarios de Filosofía',
        version: '2.0',
        lastUpdated: '2026-11-24',
        category: 'Ética',
        prerequisites: [],
        learningObjectives: [
            'Explicar por qué Kant no juzga las acciones por sus consecuencias',
            'Distinguir éticas materiales y ética formal',
            'Distinguir acciones conformes al deber y por deber',
            'Diferenciar el imperativo hipotético del categórico y aplicar sus fórmulas',
            'Explicar la dignidad, la autonomía y las críticas a Kant'
        ]
    },

questions: [
  {
    id: 'kant_001',
    question: "¿Qué piensan las corrientes consecuencialistas o teleológicas?",
    answers: [
      { text: "Que una acción es buena o mala según sus consecuencias previsibles.", correct: true,
        explanation: "Correcto. Kant discute justamente esta idea." },
      { text: "Que una acción es correcta en sí misma, sin importar el resultado.", correct: false,
        explanation: "Esa es la posición de Kant." },
      { text: "Que solo importa obedecer a Dios.", correct: false,
        explanation: "No es lo que sostienen." },
      { text: "Que no se puede saber qué está bien.", correct: false,
        explanation: "Sí creen poder saberlo: mirando las consecuencias." },
      { text: "Que la moral depende de la fama.", correct: false,
        explanation: "No tiene que ver con la fama." }
    ],
    hint: "Miran el resultado.",
    difficulty: 'basico',
    topic: 'Consecuencias'
  },
  {
    id: 'kant_002',
    question: "¿Cuál de estos argumentos usa Kant contra las consecuencias como criterio moral?",
    answers: [
      { text: "Que las consecuencias siempre son buenas.", correct: false,
        explanation: "No dice eso." },
      { text: "Que solo los sabios pueden calcularlas.", correct: false,
        explanation: "Dice que nadie puede preverlas del todo." },
      { text: "Que no somos capaces de predecir todas las consecuencias de nuestras acciones.", correct: true,
        explanation: "Correcto. Por eso no pueden ser el criterio ético." },
      { text: "Que las consecuencias dependen de la suerte de los dioses.", correct: false,
        explanation: "No es su argumento." },
      { text: "Que el Estado decide las consecuencias.", correct: false,
        explanation: "No es su argumento." }
    ],
    hint: "¿Podemos saber todo lo que va a pasar?",
    difficulty: 'intermedio',
    topic: 'Consecuencias'
  },
  {
    id: 'kant_003',
    question: "¿Por qué Kant llama «materiales» a las éticas de Aristóteles, Epicuro y los utilitaristas?",
    answers: [
      { text: "Porque solo hablan de cosas materiales, como el dinero.", correct: false,
        explanation: "«Material» no significa eso aquí." },
      { text: "Porque valoran las acciones según si consiguen un fin: la felicidad, el placer o la utilidad.", correct: true,
        explanation: "Correcto. Dependen de un fin que se quiere alcanzar." },
      { text: "Porque fueron escritas en materiales duraderos.", correct: false,
        explanation: "No." },
      { text: "Porque no dan ninguna indicación concreta.", correct: false,
        explanation: "Al revés: dan recetas concretas." },
      { text: "Porque son universales y necesarias.", correct: false,
        explanation: "Eso es lo que Kant busca para su ética formal." }
    ],
    hint: "Felicidad, placer, utilidad.",
    difficulty: 'intermedio',
    topic: 'Éticas materiales'
  },
  {
    id: 'kant_004',
    question: "¿Qué significa que la ética de Kant es formal?",
    answers: [
      { text: "Que exige usar un lenguaje formal.", correct: false,
        explanation: "No." },
      { text: "Que dice exactamente qué hacer en cada situación.", correct: false,
        explanation: "Kant no da recetas." },
      { text: "Que solo importan los resultados.", correct: false,
        explanation: "Al contrario." },
      { text: "Que se fija en la intención y en la forma que debe tener una acción para ser moral, no en un fin.", correct: true,
        explanation: "Correcto. Es universal y necesaria." },
      { text: "Que solo vale en la escuela.", correct: false,
        explanation: "Vale para todo ser racional." }
    ],
    hint: "No dice qué, sino cómo.",
    difficulty: 'intermedio',
    topic: 'Ética formal'
  },
  {
    id: 'kant_005',
    question: "¿Por qué la buena voluntad es lo único bueno sin restricción?",
    answers: [
      { text: "Porque siempre consigue lo que se propone.", correct: false,
        explanation: "Es buena aunque no logre su objetivo." },
      { text: "Porque hace feliz a quien la tiene.", correct: false,
        explanation: "Kant no la valora por la felicidad." },
      { text: "Porque la inteligencia o la riqueza pueden usarse para el mal, y la buena voluntad es buena en sí misma.", correct: true,
        explanation: "Correcto. Brilla «como una joya»." },
      { text: "Porque la ordena la ley del Estado.", correct: false,
        explanation: "No depende de las leyes." },
      { text: "Porque todos nacen con ella y no se puede perder.", correct: false,
        explanation: "No es lo que dice Kant." }
    ],
    hint: "Brilla como una joya.",
    difficulty: 'basico',
    topic: 'Buena voluntad'
  },
  {
    id: 'kant_006',
    question: "Un comerciante no engaña a un niño solo para que no se le arruine la fama. ¿Cómo es su acción?",
    answers: [
      { text: "Contraria al deber.", correct: false,
        explanation: "No engaña: hace lo correcto." },
      { text: "Por deber, y por eso moral.", correct: false,
        explanation: "No: lo hace por interés." },
      { text: "Conforme al deber, pero sin valor moral, porque la hace por interés.", correct: true,
        explanation: "Correcto. Hace lo correcto por un motivo equivocado." },
      { text: "Inmoral, porque los comerciantes siempre buscan ganar.", correct: false,
        explanation: "Kant no juzga a los comerciantes en general." },
      { text: "Heroica.", correct: false,
        explanation: "No hay heroísmo en cuidar la fama." }
    ],
    hint: "Lo correcto, pero ¿por qué?",
    difficulty: 'intermedio',
    topic: 'Por deber'
  },
  {
    id: 'kant_007',
    question: "¿Por qué, para Kant, la búsqueda de la felicidad no es un deber?",
    answers: [
      { text: "Porque la felicidad es mala.", correct: false,
        explanation: "Kant no dice que sea mala." },
      { text: "Porque todos la buscamos naturalmente, y el deber muchas veces implica actuar a disgusto.", correct: true,
        explanation: "Correcto. Lo que hacemos por inclinación no tiene valor moral." },
      { text: "Porque nadie puede ser feliz.", correct: false,
        explanation: "No es su argumento." },
      { text: "Porque solo los dioses son felices.", correct: false,
        explanation: "No." },
      { text: "Porque la felicidad es lo único bueno sin restricción.", correct: false,
        explanation: "Lo único bueno sin restricción es la buena voluntad." }
    ],
    hint: "Lo natural no es un deber.",
    difficulty: 'intermedio',
    topic: 'Deber'
  },
  {
    id: 'kant_008',
    question: "¿Cuál es la diferencia entre el imperativo hipotético y el categórico?",
    answers: [
      { text: "No hay diferencia.", correct: false,
        explanation: "Son dos mandatos distintos." },
      { text: "El hipotético vale para todos; el categórico, solo para algunos.", correct: false,
        explanation: "Es al revés." },
      { text: "El hipotético manda «haz esto»; el categórico, «si querés X, hacé Y».", correct: false,
        explanation: "Están invertidos." },
      { text: "Los dos dependen del miedo al castigo.", correct: false,
        explanation: "El categórico no depende de premios ni castigos." },
      { text: "El hipotético es condicional («si querés X, hacé Y»); el categórico manda sin condiciones.", correct: true,
        explanation: "Correcto." }
    ],
    hint: "Con «si» o sin «si».",
    difficulty: 'basico',
    topic: 'Imperativos'
  },
  {
    id: 'kant_009',
    question: "¿Qué muestra el ejemplo de la promesa falsa?",
    answers: [
      { text: "Que pedir préstamos está mal.", correct: false,
        explanation: "El problema es la mentira." },
      { text: "Que si todos hicieran promesas falsas, nadie creería en las promesas y la máxima se destruiría a sí misma.", correct: true,
        explanation: "Correcto. No puede ser ley universal." },
      { text: "Que mentir está bien si se devuelve el dinero.", correct: false,
        explanation: "No." },
      { text: "Que hay que calcular las consecuencias para el banco.", correct: false,
        explanation: "Kant no razona por consecuencias." },
      { text: "Que las promesas no tienen valor.", correct: false,
        explanation: "Al contrario: la mentira las destruiría." }
    ],
    hint: "¿Y si todos lo hicieran?",
    difficulty: 'avanzado',
    topic: 'Ley universal'
  },
  {
    id: 'kant_010',
    question: "Según la segunda fórmula del imperativo categórico, ¿qué está mal?",
    answers: [
      { text: "Pedirle a un colectivero que nos lleve.", correct: false,
        explanation: "Usar a otro como medio no está mal si lo respetamos." },
      { text: "Tratar a alguien solamente como un medio, como una herramienta, sin respetar sus fines.", correct: true,
        explanation: "Correcto. La humanidad es siempre un fin." },
      { text: "Tener metas propias.", correct: false,
        explanation: "No." },
      { text: "Ayudar a los demás.", correct: false,
        explanation: "No." },
      { text: "Trabajar para otra persona.", correct: false,
        explanation: "No, si se respeta su dignidad." }
    ],
    hint: "Personas, no herramientas.",
    difficulty: 'intermedio',
    topic: 'Humanidad como fin'
  },
  {
    id: 'kant_011',
    question: "¿Por qué las personas tienen dignidad y no precio?",
    answers: [
      { text: "Porque cuestan mucho dinero.", correct: false,
        explanation: "Lo que tiene dignidad no tiene precio." },
      { text: "Porque son más fuertes que las cosas.", correct: false,
        explanation: "No." },
      { text: "Porque son capaces de moralidad y no tienen equivalente: no se pueden reemplazar.", correct: true,
        explanation: "Correcto. En esta idea se basan los derechos humanos." },
      { text: "Porque lo decide cada Estado.", correct: false,
        explanation: "No depende de los Estados." },
      { text: "Solo algunas personas tienen dignidad.", correct: false,
        explanation: "Todos somos igual de dignos." }
    ],
    hint: "Lo que no tiene equivalente.",
    difficulty: 'intermedio',
    topic: 'Dignidad'
  },
  {
    id: 'kant_012',
    question: "¿Qué es la autonomía moral?",
    answers: [
      { text: "Hacer lo que uno tiene ganas.", correct: false,
        explanation: "Eso sería seguir inclinaciones." },
      { text: "Obedecer lo que dicen los padres.", correct: false,
        explanation: "Eso es heteronomía." },
      { text: "Actuar por miedo al castigo.", correct: false,
        explanation: "Eso es heteronomía." },
      { text: "Tener un auto propio.", correct: false,
        explanation: "No tiene que ver." },
      { text: "Darse a uno mismo la ley moral con la propia razón.", correct: true,
        explanation: "Correcto. Autós (uno mismo) y nómos (ley)." }
    ],
    hint: "Autós y nómos.",
    difficulty: 'basico',
    topic: 'Autonomía'
  },
  {
    id: 'kant_013',
    question: "¿Qué crítica se le hace a Kant con el dilema del asesino que pregunta por tu amigo?",
    answers: [
      { text: "Que es demasiado blando.", correct: false,
        explanation: "Es al revés." },
      { text: "Que su rigorismo no admite excepciones, aunque decir la verdad choque con proteger una vida.", correct: true,
        explanation: "Correcto. Es un conflicto de deberes." },
      { text: "Que solo piensa en el placer.", correct: false,
        explanation: "No." },
      { text: "Que permite mentir siempre.", correct: false,
        explanation: "Kant no permite mentir." },
      { text: "Que no habla de la verdad.", correct: false,
        explanation: "Habla justamente de la verdad." }
    ],
    hint: "Rigorismo.",
    difficulty: 'avanzado',
    topic: 'Críticas'
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
            'Consecuencias': 2,
            'Éticas materiales': 1,
            'Ética formal': 1,
            'Buena voluntad': 1,
            'Por deber': 1,
            'Deber': 1,
            'Imperativos': 1,
            'Ley universal': 1,
            'Humanidad como fin': 1,
            'Dignidad': 1,
            'Autonomía': 1,
            'Críticas': 1
        }
    }
};

// ========================================
// 🔧 VALIDACIÓN DEL TEMA
// ========================================

function validateTheme() {
    const requiredFields = ['id', 'title', 'questions'];
    const missingFields = requiredFields.filter(field => !ETICA_KANT_THEME[field]);
    if (missingFields.length > 0) {
        console.error(`❌ Faltan campos requeridos: ${missingFields.join(', ')}`);
        return false;
    }
    const invalidQuestions = ETICA_KANT_THEME.questions.filter((q, index) => {
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
    console.log('✅ Tema de Kant validado correctamente');
    return true;
}

function getThemeStats() {
    return {
        ...ETICA_KANT_THEME.stats,
        validationPassed: validateTheme(),
        loadTime: performance.now() - themeLoadStart
    };
}

if (!validateTheme()) {
    console.error('❌ Error al cargar el tema de Kant');
    throw new Error('Tema de Kant inválido');
}

console.log(`✅ Tema de Kant cargado: ${ETICA_KANT_THEME.questions.length} preguntas`);

if (typeof window !== 'undefined') {
    window.ETICA_KANT_THEME = ETICA_KANT_THEME;
}
