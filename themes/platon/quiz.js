// ========================================
// 🌌 TEMA: PLATÓN: EL MUNDO DE LAS IDEAS Y LA CAVERNA
// ========================================
// 📚 Unidad I: ¿Qué es la Filosofía?
// Cuestionario de 13 preguntas de 5 opciones; cada una se responde con el material
// (themes/platon/content.html).
// Versión 1.0 (2026-11-24): tema nuevo en el cuestionario, alineado con el material v2.0.

const themeLoadStart = performance.now();

const PLATON_THEME = {
    id: 'platon',
    title: 'Platón: El Mundo de las Ideas y la Caverna',
    description: 'La teoría de las Ideas, la Idea del Bien, la línea dividida, la alegoría de la caverna, la educación, la dialéctica y el rey filósofo.',
    icon: '🌌',
    gradient: 'linear-gradient(135deg, #9C27B0 0%, #E91E63 100%)',
    difficulty: 'intermedio',
    timeLimit: 50,
    contentFile: 'themes/platon/content.html',

    metadata: {
        author: 'Cuestionarios de Filosofía',
        version: '2.0',
        lastUpdated: '2026-11-24',
        category: 'Filosofía Antigua',
        prerequisites: [],
        learningObjectives: [
            'Explicar qué es una Idea y cómo resuelve el problema del cambio',
            'Distinguir el mundo sensible del inteligible',
            'Explicar el símil del Sol y la línea dividida',
            'Interpretar la alegoría de la caverna y aplicarla al presente',
            'Relacionar la educación y la dialéctica con el rey filósofo'
        ]
    },

questions: [
  {
    id: 'platon_001',
    question: "¿Por qué la muerte de Sócrates fue decisiva en la vida de Platón?",
    answers: [
      { text: "Porque heredó la fortuna de Sócrates y pudo dejar de trabajar.", correct: false,
        explanation: "Sócrates no le dejó fortuna." },
      { text: "Porque lo convenció de que la ciudad estaba mal gobernada: dejó la política, viajó y fundó la Academia.", correct: true,
        explanation: "Correcto. Si Atenas condenaba al más justo, había que repensar la política desde la filosofía." },
      { text: "Porque Platón fue uno de los jueces que lo condenó.", correct: false,
        explanation: "Platón era su discípulo y lo admiraba." },
      { text: "Porque desde entonces Platón dejó de escribir.", correct: false,
        explanation: "Al contrario: escribió diálogos con Sócrates como protagonista." },
      { text: "Porque lo obligó a hacerse sofista para ganar dinero.", correct: false,
        explanation: "Platón criticaba a los sofistas." }
    ],
    hint: "Su maestro condenado por la ciudad.",
    difficulty: 'basico',
    topic: 'Vida de Platón'
  },
  {
    id: 'platon_002',
    question: "¿Qué tomó Platón de Heráclito y qué de Parménides?",
    answers: [
      { text: "De Heráclito, que el arché es el fuego; de Parménides, que el arché es el agua.", correct: false,
        explanation: "Platón no busca un arché material." },
      { text: "De Heráclito, que las cosas sensibles cambian; de Parménides, que debe haber algo eterno e inmutable para poder conocer.", correct: true,
        explanation: "Correcto. Las cosas cambian; las Ideas no." },
      { text: "De los dos, que nada se puede conocer.", correct: false,
        explanation: "Platón cree que sí se conoce: las Ideas." },
      { text: "De Heráclito, que nada cambia; de Parménides, que todo cambia.", correct: false,
        explanation: "Es al revés." },
      { text: "No tomó nada: nunca los leyó.", correct: false,
        explanation: "Su teoría responde justamente a esa discusión." }
    ],
    hint: "Lo que cambia y lo que permanece.",
    difficulty: 'intermedio',
    topic: 'Heráclito y Parménides'
  },
  {
    id: 'platon_003',
    question: "Para Platón, ¿qué es la Idea de Belleza?",
    answers: [
      { text: "La opinión de cada persona sobre lo que es lindo.", correct: false,
        explanation: "Eso sería relativismo; la Idea es universal." },
      { text: "Una cosa bella concreta, como un paisaje.", correct: false,
        explanation: "El paisaje es una cosa sensible que participa de la Belleza." },
      { text: "La Belleza en sí: lo común a todas las cosas bellas, eterna e inmutable, que capta la razón.", correct: true,
        explanation: "Correcto. Una Idea es universal, eterna, inmutable y perfecta." },
      { text: "Una imagen que inventamos con la imaginación.", correct: false,
        explanation: "Las Ideas no son pensamientos nuestros: existen por sí mismas." },
      { text: "Lo que está de moda en cada época.", correct: false,
        explanation: "La moda cambia; la Idea no." }
    ],
    hint: "Lo común a muchas cosas.",
    difficulty: 'basico',
    topic: 'Teoría de las Ideas'
  },
  {
    id: 'platon_004',
    question: "¿Por qué Platón admiraba la matemática?",
    answers: [
      { text: "Porque servía para cobrar impuestos.", correct: false,
        explanation: "No es por su utilidad práctica." },
      { text: "Porque muestra verdades que no dependen de lo que vemos, como el círculo perfecto.", correct: true,
        explanation: "Correcto. Ningún círculo dibujado es perfecto, pero la razón conoce el círculo perfecto." },
      { text: "Porque era la única ciencia que se podía ver con los ojos.", correct: false,
        explanation: "Es al revés: la matemática se piensa, no se ve." },
      { text: "Porque los números son cosas materiales.", correct: false,
        explanation: "Para Platón, lo matemático pertenece a lo inteligible." },
      { text: "Porque reemplazaba a la filosofía.", correct: false,
        explanation: "Es una preparación para la dialéctica." }
    ],
    hint: "«Que no entre nadie que no sepa geometría».",
    difficulty: 'intermedio',
    topic: 'Matemática'
  },
  {
    id: 'platon_005',
    question: "¿Cuál de estas características corresponde al mundo inteligible?",
    answers: [
      { text: "Material y cambiante.", correct: false,
        explanation: "Eso describe al mundo sensible." },
      { text: "Captado por los sentidos.", correct: false,
        explanation: "Lo inteligible se capta con la razón." },
      { text: "Formado por cosas que nacen y mueren.", correct: false,
        explanation: "Eso pasa en el mundo sensible." },
      { text: "Formado por Ideas únicas, eternas e inmutables que capta la razón.", correct: true,
        explanation: "Correcto. Es el nivel más alto de realidad." },
      { text: "Un lugar lejano al que se viaja en barco.", correct: false,
        explanation: "No es un lugar físico, sino un grado de realidad." }
    ],
    hint: "Lo que no cambia.",
    difficulty: 'basico',
    topic: 'Dos niveles de realidad'
  },
  {
    id: 'platon_006',
    question: "Según la teoría de la participación, ¿por qué un acto concreto es justo?",
    answers: [
      { text: "Porque lo decide la mayoría.", correct: false,
        explanation: "Para Platón la justicia no depende de la opinión." },
      { text: "Porque participa de la Idea de Justicia, de la que es una copia imperfecta.", correct: true,
        explanation: "Correcto. Las cosas sensibles imitan a las Ideas." },
      { text: "Porque lo aprueba el Demiurgo cada vez.", correct: false,
        explanation: "El Demiurgo modeló el mundo mirando las Ideas; no juzga cada acto." },
      { text: "Porque trae beneficios a quien lo hace.", correct: false,
        explanation: "Eso no lo hace justo." },
      { text: "Porque así lo establecen las leyes de cada ciudad.", correct: false,
        explanation: "Las leyes cambian; la Justicia en sí no." }
    ],
    hint: "Copia y modelo.",
    difficulty: 'intermedio',
    topic: 'Participación'
  },
  {
    id: 'platon_007',
    question: "En el símil del Sol, ¿qué hace la Idea del Bien?",
    answers: [
      { text: "Calienta la caverna para que los prisioneros no tengan frío.", correct: false,
        explanation: "Mezcla dos imágenes distintas." },
      { text: "Permite que la razón conozca las demás Ideas y les da su ser, como el Sol da luz y vida.", correct: true,
        explanation: "Correcto. Es la Idea suprema, en la cima de la jerarquía." },
      { text: "Es una Idea más, igual a las otras.", correct: false,
        explanation: "Está en la cima de la jerarquía." },
      { text: "Es lo que vemos con los ojos todos los días.", correct: false,
        explanation: "Se capta con la inteligencia, no con los ojos." },
      { text: "Decide quién gana las guerras.", correct: false,
        explanation: "No es una divinidad guerrera." }
    ],
    hint: "Luz y vida.",
    difficulty: 'intermedio',
    topic: 'Idea del Bien'
  },
  {
    id: 'platon_008',
    question: "Ordená de menor a mayor los grados de la línea dividida.",
    answers: [
      { text: "Inteligencia, pensamiento, creencia, imaginación.", correct: false,
        explanation: "Está al revés: la inteligencia es el más alto." },
      { text: "Creencia, imaginación, inteligencia, pensamiento.", correct: false,
        explanation: "La imaginación es el más bajo." },
      { text: "Imaginación (eikasía), creencia (pístis), pensamiento (diánoia), inteligencia (nóesis).", correct: true,
        explanation: "Correcto. Los dos primeros son doxa; los dos últimos, episteme." },
      { text: "Pensamiento, imaginación, inteligencia, creencia.", correct: false,
        explanation: "Revisá la sección de los grados del conocimiento." },
      { text: "Todos están al mismo nivel.", correct: false,
        explanation: "La línea muestra un ascenso." }
    ],
    hint: "De las sombras a las Ideas.",
    difficulty: 'avanzado',
    topic: 'Línea dividida'
  },
  {
    id: 'platon_009',
    question: "¿Qué diferencia hay entre doxa y episteme?",
    answers: [
      { text: "La doxa es opinión sobre lo sensible; la episteme, ciencia sobre lo inteligible.", correct: true,
        explanation: "Correcto. Son las dos partes de la línea dividida." },
      { text: "La doxa es la ciencia y la episteme la opinión.", correct: false,
        explanation: "Es al revés." },
      { text: "Son sinónimos.", correct: false,
        explanation: "Son grados distintos de conocimiento." },
      { text: "La doxa es la matemática y la episteme la poesía.", correct: false,
        explanation: "La matemática pertenece a la episteme (diánoia)." },
      { text: "La doxa es para los filósofos y la episteme para la mayoría.", correct: false,
        explanation: "Es al revés: la mayoría vive en la doxa." }
    ],
    hint: "Opinión y ciencia.",
    difficulty: 'basico',
    topic: 'Doxa y episteme'
  },
  {
    id: 'platon_010',
    question: "En la alegoría de la caverna, ¿qué representan las sombras de la pared?",
    answers: [
      { text: "Las Ideas eternas.", correct: false,
        explanation: "Las Ideas están fuera de la caverna." },
      { text: "La Idea del Bien.", correct: false,
        explanation: "El Bien es el Sol." },
      { text: "Las apariencias que tomamos por toda la realidad cuando no pensamos.", correct: true,
        explanation: "Correcto. Los prisioneros creen que las sombras son lo único que existe." },
      { text: "Los recuerdos de otra vida.", correct: false,
        explanation: "Eso no es lo que trabaja la alegoría en este tema." },
      { text: "Los dioses del Olimpo.", correct: false,
        explanation: "No tienen que ver con la alegoría." }
    ],
    hint: "Lo que ven los prisioneros.",
    difficulty: 'basico',
    topic: 'Alegoría de la caverna'
  },
  {
    id: 'platon_011',
    question: "¿Por qué la salida de la caverna es dolorosa?",
    answers: [
      { text: "Porque afuera hay animales peligrosos.", correct: false,
        explanation: "No es lo que cuenta Platón." },
      { text: "Porque los guardianes lo castigan.", correct: false,
        explanation: "No hay guardianes que castiguen al que sale." },
      { text: "Porque la luz enceguece: aprender cuesta y es más cómodo quedarse con lo conocido.", correct: true,
        explanation: "Correcto. Es un ascenso gradual: sombras, reflejos, cosas, estrellas y Sol." },
      { text: "Porque tiene que caminar descalzo.", correct: false,
        explanation: "Es una metáfora del esfuerzo de aprender." },
      { text: "Porque nunca llega a ver el Sol.", correct: false,
        explanation: "Al final sí lo ve." }
    ],
    hint: "La luz duele.",
    difficulty: 'intermedio',
    topic: 'Alegoría de la caverna'
  },
  {
    id: 'platon_012',
    question: "Para Platón, educar es...",
    answers: [
      { text: "llenar una cabeza vacía con información, como se llena un vaso.", correct: false,
        explanation: "Platón rechaza esa idea." },
      { text: "una conversión: girar la mirada desde las sombras hacia la luz.", correct: true,
        explanation: "Correcto. Todos podemos conocer; hay que orientar la mirada." },
      { text: "entrenar el cuerpo para la guerra.", correct: false,
        explanation: "Eso es solo una parte de la formación de los guardianes." },
      { text: "repetir lo que opina la mayoría.", correct: false,
        explanation: "Eso es quedarse en la caverna." },
      { text: "aprender un oficio para ganar dinero.", correct: false,
        explanation: "No es el sentido de la educación filosófica." }
    ],
    hint: "Periagogé.",
    difficulty: 'intermedio',
    topic: 'Educación'
  },
  {
    id: 'platon_013',
    question: "¿Por qué, según La República, debe gobernar el rey filósofo?",
    answers: [
      { text: "Porque es el más fuerte y puede imponerse.", correct: false,
        explanation: "La fuerza no da derecho a gobernar." },
      { text: "Porque fue elegido por sorteo.", correct: false,
        explanation: "Platón no defiende el sorteo." },
      { text: "Porque conoce la Idea del Bien y, como el que sale de la caverna, tiene el deber de volver a ayudar.", correct: true,
        explanation: "Correcto. Los males no terminarán hasta que los filósofos gobiernen." },
      { text: "Porque es el más rico de la ciudad.", correct: false,
        explanation: "La riqueza no da sabiduría." },
      { text: "Porque los productores no quieren trabajar.", correct: false,
        explanation: "Cada grupo cumple su función." }
    ],
    hint: "El que conoce el Bien.",
    difficulty: 'avanzado',
    topic: 'La República'
  }
],

    stats: {
        totalQuestions: 13,
        estimatedTime: 15,
        difficultyDistribution: {
            basico: 5,
            intermedio: 6,
            avanzado: 2
        },
        topicDistribution: {
            'Vida de Platón': 1,
            'Heráclito y Parménides': 1,
            'Teoría de las Ideas': 1,
            'Matemática': 1,
            'Dos niveles de realidad': 1,
            'Participación': 1,
            'Idea del Bien': 1,
            'Línea dividida': 1,
            'Doxa y episteme': 1,
            'Alegoría de la caverna': 2,
            'Educación': 1,
            'La República': 1
        }
    }
};

// ========================================
// 🔧 VALIDACIÓN DEL TEMA
// ========================================

function validateTheme() {
    const requiredFields = ['id', 'title', 'questions'];
    const missingFields = requiredFields.filter(field => !PLATON_THEME[field]);
    if (missingFields.length > 0) {
        console.error(`❌ Faltan campos requeridos: ${missingFields.join(', ')}`);
        return false;
    }
    const invalidQuestions = PLATON_THEME.questions.filter((q, index) => {
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
    console.log('✅ Tema de Platón validado correctamente');
    return true;
}

function getThemeStats() {
    return {
        ...PLATON_THEME.stats,
        validationPassed: validateTheme(),
        loadTime: performance.now() - themeLoadStart
    };
}

if (!validateTheme()) {
    console.error('❌ Error al cargar el tema de Platón');
    throw new Error('Tema de Platón inválido');
}

console.log(`✅ Tema de Platón cargado: ${PLATON_THEME.questions.length} preguntas`);

if (typeof window !== 'undefined') {
    window.PLATON_THEME = PLATON_THEME;
}
