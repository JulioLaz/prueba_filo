// ========================================
// 🌊 TEMA: LOS PRESOCRÁTICOS: EL ARCHÉ Y LA NATURALEZA
// ========================================
// 📚 Unidad I: ¿Qué es la Filosofía?
// Cuestionario de 13 preguntas de 5 opciones; cada una se responde con el material
// (themes/presocraticos/content.html).
// Versión 1.0 (2026-11-24): tema nuevo en el cuestionario, alineado con el material v2.0.

const themeLoadStart = performance.now();

const PRESOCRATICOS_THEME = {
    id: 'presocraticos',
    title: 'Los Presocráticos: El Arché y la Naturaleza',
    description: 'Los primeros filósofos y la búsqueda del arché: monistas de Mileto, pitagóricos, Jenófanes, Heráclito, Parménides y los pluralistas.',
    icon: '🌊',
    gradient: 'linear-gradient(135deg, #4CAF50 0%, #8BC34A 100%)',
    difficulty: 'intermedio',
    timeLimit: 50,
    contentFile: 'themes/presocraticos/content.html',

    metadata: {
        author: 'Cuestionarios de Filosofía',
        version: '2.0',
        lastUpdated: '2026-11-24',
        category: 'Filosofía Antigua',
        prerequisites: [],
        learningObjectives: [
            'Explicar qué es el arché y qué es el monismo',
            'Comparar las respuestas de Tales, Anaximandro, Anaxímenes y los pitagóricos',
            'Contrastar a Heráclito (todo cambia) y a Parménides (el ser no cambia)',
            'Explicar cómo los pluralistas resolvieron el problema del cambio'
        ]
    },

questions: [
  {
    id: 'presocraticos_001',
    question: "¿Qué buscaban los presocráticos con la pregunta por el arché?",
    answers: [
      { text: "El principio u origen del que surgen todas las cosas, explicado con la razón.", correct: true,
        explanation: "Correcto. El arché es el primer elemento, que no necesita de otra cosa para existir." },
      { text: "El nombre del dios más poderoso del Olimpo.", correct: false,
        explanation: "Buscaban explicaciones naturales, no dioses." },
      { text: "La mejor forma de gobernar la ciudad de Atenas.", correct: false,
        explanation: "Esa es una pregunta política, posterior." },
      { text: "Las reglas para escribir poemas como los de Homero.", correct: false,
        explanation: "No se ocupaban de la poesía, sino de la naturaleza." },
      { text: "El modo de ganar discusiones en la plaza pública.", correct: false,
        explanation: "Eso interesaba a los sofistas, que llegaron después." }
    ],
    hint: "Arché: principio u origen.",
    difficulty: 'basico',
    topic: 'Arché'
  },
  {
    id: 'presocraticos_002',
    question: "¿Qué afirma el monismo de la Escuela de Mileto?",
    answers: [
      { text: "Que hay cuatro raíces que se mezclan por amor y discordia.", correct: false,
        explanation: "Eso es pluralismo (Empédocles)." },
      { text: "Que existe una única sustancia fundamental de la que surge toda la realidad.", correct: true,
        explanation: "Correcto. Monos significa «uno»: agua, ápeiron o aire, según cada filósofo." },
      { text: "Que no existe ningún principio y todo es azar.", correct: false,
        explanation: "Los milesios buscaban un principio." },
      { text: "Que el universo está hecho de átomos y vacío.", correct: false,
        explanation: "Eso es el atomismo de Leucipo y Demócrito." },
      { text: "Que solo existe el ser y nada cambia.", correct: false,
        explanation: "Esa es la tesis de Parménides." }
    ],
    hint: "Monos = uno.",
    difficulty: 'basico',
    topic: 'Monismo'
  },
  {
    id: 'presocraticos_003',
    question: "¿Cuál de estas razones NO usó Tales para elegir el agua como arché?",
    answers: [
      { text: "Que el alimento de todas las cosas es húmedo.", correct: false,
        explanation: "Sí la usó." },
      { text: "Que las semillas tienen naturaleza húmeda.", correct: false,
        explanation: "Sí la usó." },
      { text: "Que el agua puede ser vapor, hielo o líquido.", correct: false,
        explanation: "Sí la usó." },
      { text: "Que el agua es indeterminada y no se opone a ningún elemento.", correct: true,
        explanation: "Correcto. Esa idea es de Anaximandro sobre el ápeiron, no de Tales." },
      { text: "Que es esencial para la vida.", correct: false,
        explanation: "Sí la usó." }
    ],
    hint: "Una de estas ideas es de otro filósofo de Mileto.",
    difficulty: 'intermedio',
    topic: 'Tales'
  },
  {
    id: 'presocraticos_004',
    question: "¿Por qué Anaximandro propuso el ápeiron en lugar de un elemento natural?",
    answers: [
      { text: "Porque el agua de Mileto estaba contaminada.", correct: false,
        explanation: "El argumento es filosófico, no práctico." },
      { text: "Porque los elementos se oponen y se anulan; el principio debe ser indefinido y no favorecer a ninguno.", correct: true,
        explanation: "Correcto. El ápeiron es ilimitado, eterno y contiene todas las posibilidades." },
      { text: "Porque quería contradecir a Anaxímenes, su discípulo.", correct: false,
        explanation: "Anaxímenes vino después y fue su discípulo." },
      { text: "Porque los dioses le revelaron que el arché era invisible.", correct: false,
        explanation: "No apela a revelaciones divinas." },
      { text: "Porque el ápeiron es el elemento más fácil de ver.", correct: false,
        explanation: "Al contrario: no se puede ver; es abstracto." }
    ],
    hint: "Fuego contra agua, aire contra tierra...",
    difficulty: 'intermedio',
    topic: 'Anaximandro'
  },
  {
    id: 'presocraticos_005',
    question: "Según Anaxímenes, ¿cómo se forman las demás cosas a partir del aire?",
    answers: [
      { text: "Por rarefacción se vuelve fuego; por condensación, viento, nubes, agua, tierra y piedras.", correct: true,
        explanation: "Correcto. Dos procesos naturales y observables." },
      { text: "Por la mezcla de cuatro raíces movidas por el Amor.", correct: false,
        explanation: "Eso es de Empédocles." },
      { text: "Por el choque de átomos en el vacío.", correct: false,
        explanation: "Eso es del atomismo." },
      { text: "Por la voluntad de los dioses del Olimpo.", correct: false,
        explanation: "Anaxímenes busca causas naturales." },
      { text: "Por la acción del nous, una mente ordenadora.", correct: false,
        explanation: "El nous es de Anaxágoras." }
    ],
    hint: "Menos denso, más denso.",
    difficulty: 'basico',
    topic: 'Anaxímenes'
  },
  {
    id: 'presocraticos_006',
    question: "¿Qué sostenían los pitagóricos sobre el arché?",
    answers: [
      { text: "Que es el fuego, símbolo del cambio constante.", correct: false,
        explanation: "Eso es de Heráclito." },
      { text: "Que es el número: la realidad está compuesta de números y tiene estructura matemática.", correct: true,
        explanation: "Correcto. Descubrieron proporciones numéricas incluso en la música." },
      { text: "Que es el aire, porque respiramos.", correct: false,
        explanation: "Eso es de Anaxímenes." },
      { text: "Que no existe arché porque todo es ilusión.", correct: false,
        explanation: "Los pitagóricos sí proponen un arché." },
      { text: "Que son las semillas infinitas que están en todo.", correct: false,
        explanation: "Eso es de Anaxágoras." }
    ],
    hint: "Pitágoras, matemático.",
    difficulty: 'basico',
    topic: 'Pitagóricos'
  },
  {
    id: 'presocraticos_007',
    question: "¿Qué criticó Jenófanes de Colofón?",
    answers: [
      { text: "Que los filósofos de Mileto no creyeran en ningún dios.", correct: false,
        explanation: "Su crítica apunta a los dioses de los poetas." },
      { text: "Que los dioses de Homero y Hesíodo fueran pensados como humanos, con cuerpo, figura y defectos.", correct: true,
        explanation: "Correcto. Si los bueyes tuvieran manos, pintarían dioses-bueyes." },
      { text: "Que Parménides negara el movimiento.", correct: false,
        explanation: "Jenófanes no discute con Parménides." },
      { text: "Que los atomistas dijeran que el alma es mortal.", correct: false,
        explanation: "Los atomistas vinieron después." },
      { text: "Que la gente usara números para contar.", correct: false,
        explanation: "No criticó la matemática." }
    ],
    hint: "Bueyes y caballos con manos...",
    difficulty: 'intermedio',
    topic: 'Jenófanes'
  },
  {
    id: 'presocraticos_008',
    question: "¿Por qué Heráclito eligió el fuego como arché?",
    answers: [
      { text: "Porque el fuego nunca cambia y siempre es igual.", correct: false,
        explanation: "Es al revés: el fuego cambia todo el tiempo." },
      { text: "Porque calentaba los templos de Éfeso.", correct: false,
        explanation: "No es una razón práctica." },
      { text: "Porque es una metáfora del cambio: solo se mantiene consumiendo y transformando.", correct: true,
        explanation: "Correcto. El cosmos es un fuego siempre vivo, que se enciende y se apaga con medida." },
      { text: "Porque los dioses vivían en el fuego.", correct: false,
        explanation: "Heráclito no lo explica con dioses." },
      { text: "Porque es una de las cuatro raíces de Empédocles.", correct: false,
        explanation: "Empédocles es posterior y propone cuatro raíces." }
    ],
    hint: "¿Qué hace el fuego todo el tiempo?",
    difficulty: 'intermedio',
    topic: 'Heráclito'
  },
  {
    id: 'presocraticos_009',
    question: "¿Qué quiere decir Heráclito con «la guerra (pólemos) es el padre de todas las cosas»?",
    answers: [
      { text: "Que las guerras entre ciudades son buenas y deben provocarse.", correct: false,
        explanation: "No es un elogio de las guerras reales." },
      { text: "Que el cambio nace de la lucha de los opuestos, que se necesitan y forman una armonía en tensión.", correct: true,
        explanation: "Correcto. Luz y oscuridad, frío y calor, vida y muerte." },
      { text: "Que el mundo fue creado por el dios de la guerra.", correct: false,
        explanation: "No es una explicación mítica." },
      { text: "Que nada cambia porque todo está en paz.", correct: false,
        explanation: "Para Heráclito todo cambia." },
      { text: "Que los átomos chocan en el vacío.", correct: false,
        explanation: "Eso es del atomismo." }
    ],
    hint: "Pensá en los opuestos.",
    difficulty: 'avanzado',
    topic: 'Heráclito'
  },
  {
    id: 'presocraticos_010',
    question: "Para Heráclito, ¿qué es el logos?",
    answers: [
      { text: "Un mito que explica el origen de los dioses.", correct: false,
        explanation: "El logos es razón, no mito." },
      { text: "La ley universal que ordena el cambio y mantiene el equilibrio entre los opuestos.", correct: true,
        explanation: "Correcto. Es común a todos, aunque la mayoría no lo comprende." },
      { text: "Un elemento material como el agua o el aire.", correct: false,
        explanation: "No es un elemento, sino una ley o razón." },
      { text: "La ilusión de los sentidos que nos hace ver cambios.", correct: false,
        explanation: "Eso se acerca a Parménides." },
      { text: "El nombre de la escuela que fundó en Éfeso.", correct: false,
        explanation: "No es una escuela." }
    ],
    hint: "El cambio tiene un orden.",
    difficulty: 'intermedio',
    topic: 'Logos'
  },
  {
    id: 'presocraticos_011',
    question: "¿Qué sostenían Parménides y su discípulo Zenón sobre el cambio y el movimiento?",
    answers: [
      { text: "Que son lo único real, como decía Heráclito.", correct: false,
        explanation: "Es la tesis opuesta." },
      { text: "Que son ilusiones de los sentidos: el ser es, el no ser no es, y Zenón lo defendió con paradojas.", correct: true,
        explanation: "Correcto. Por ejemplo, Aquiles y la tortuga." },
      { text: "Que se producen por la mezcla de cuatro raíces.", correct: false,
        explanation: "Eso es de Empédocles." },
      { text: "Que dependen de la voluntad de los dioses.", correct: false,
        explanation: "No recurren a los dioses." },
      { text: "Que son causados por el nous.", correct: false,
        explanation: "Eso es de Anaxágoras." }
    ],
    hint: "El ser es; el no ser no es.",
    difficulty: 'intermedio',
    topic: 'Eléatas'
  },
  {
    id: 'presocraticos_012',
    question: "¿Cómo explicó Empédocles el cambio sin que nada surja de la nada?",
    answers: [
      { text: "Con cuatro raíces eternas (tierra, agua, aire, fuego) que el Amor une y la Discordia separa.", correct: true,
        explanation: "Correcto. Lo que cambia es la mezcla, no las raíces." },
      { text: "Con un solo elemento que se condensa y se enrarece.", correct: false,
        explanation: "Eso es de Anaxímenes." },
      { text: "Con números que forman todas las cosas.", correct: false,
        explanation: "Eso es de los pitagóricos." },
      { text: "Negando que el cambio exista.", correct: false,
        explanation: "Eso es de Parménides." },
      { text: "Con infinitas semillas ordenadas por una mente.", correct: false,
        explanation: "Eso es de Anaxágoras." }
    ],
    hint: "Cuatro raíces y dos fuerzas.",
    difficulty: 'intermedio',
    topic: 'Empédocles'
  },
  {
    id: 'presocraticos_013',
    question: "¿Qué diferencia hay entre el nous de Anaxágoras y los átomos de Leucipo y Demócrito?",
    answers: [
      { text: "No hay diferencia: los dos son partículas indivisibles.", correct: false,
        explanation: "El nous no es una partícula." },
      { text: "El nous es una mente ordenadora que pone en marcha el orden; los átomos son partículas indivisibles que se mueven en el vacío por necesidad.", correct: true,
        explanation: "Correcto. Anaxágoras introduce un principio inteligente; los atomistas, uno materialista y determinista." },
      { text: "El nous es un elemento como el agua; los átomos son dioses.", correct: false,
        explanation: "Ninguna de las dos cosas es así." },
      { text: "Los dos son ilusiones de los sentidos, según sus autores.", correct: false,
        explanation: "Ni Anaxágoras ni los atomistas los consideran ilusiones." },
      { text: "El nous es el fuego de Heráclito con otro nombre.", correct: false,
        explanation: "Son conceptos distintos de autores distintos." }
    ],
    hint: "Una mente frente a partículas.",
    difficulty: 'avanzado',
    topic: 'Pluralistas'
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
            'Arché': 1,
            'Monismo': 1,
            'Tales': 1,
            'Anaximandro': 1,
            'Anaxímenes': 1,
            'Pitagóricos': 1,
            'Jenófanes': 1,
            'Heráclito': 2,
            'Logos': 1,
            'Eléatas': 1,
            'Empédocles': 1,
            'Pluralistas': 1
        }
    }
};

// ========================================
// 🔧 VALIDACIÓN DEL TEMA
// ========================================

function validateTheme() {
    const requiredFields = ['id', 'title', 'questions'];
    const missingFields = requiredFields.filter(field => !PRESOCRATICOS_THEME[field]);
    if (missingFields.length > 0) {
        console.error(`❌ Faltan campos requeridos: ${missingFields.join(', ')}`);
        return false;
    }
    const invalidQuestions = PRESOCRATICOS_THEME.questions.filter((q, index) => {
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
    console.log('✅ Tema de los presocráticos validado correctamente');
    return true;
}

function getThemeStats() {
    return {
        ...PRESOCRATICOS_THEME.stats,
        validationPassed: validateTheme(),
        loadTime: performance.now() - themeLoadStart
    };
}

if (!validateTheme()) {
    console.error('❌ Error al cargar el tema de los presocráticos');
    throw new Error('Tema de los presocráticos inválido');
}

console.log(`✅ Tema de los presocráticos cargado: ${PRESOCRATICOS_THEME.questions.length} preguntas`);

if (typeof window !== 'undefined') {
    window.PRESOCRATICOS_THEME = PRESOCRATICOS_THEME;
}
