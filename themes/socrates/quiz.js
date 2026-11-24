// ========================================
// 🧠 TEMA: SÓCRATES: EL GIRO ANTROPOLÓGICO Y LA MAYÉUTICA
// ========================================
// 📚 Unidad I: ¿Qué es la Filosofía?
// Cuestionario de 13 preguntas de 5 opciones; cada una se responde con el material
// (themes/socrates/content.html).
// Versión 1.0 (2026-11-24): tema nuevo en el cuestionario, alineado con el material v2.0.

const themeLoadStart = performance.now();

const SOCRATES_THEME = {
    id: 'socrates',
    title: 'Sócrates: El Giro Antropológico y la Mayéutica',
    description: 'La vida de Sócrates, el giro antropológico, los sofistas, la ironía y la mayéutica, las definiciones universales y el intelectualismo moral.',
    icon: '🧠',
    gradient: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
    difficulty: 'intermedio',
    timeLimit: 50,
    contentFile: 'themes/socrates/content.html',

    metadata: {
        author: 'Cuestionarios de Filosofía',
        version: '2.0',
        lastUpdated: '2026-11-24',
        category: 'Filosofía Antigua',
        prerequisites: [],
        learningObjectives: [
            'Explicar el giro antropológico',
            'Comparar a Sócrates con los sofistas',
            'Describir las dos fases del método socrático: ironía y mayéutica',
            'Explicar el intelectualismo moral y «nadie hace el mal a sabiendas»',
            'Valorar la coherencia de Sócrates ante su condena'
        ]
    },

questions: [
  {
    id: 'socrates_001',
    question: "¿En qué consistió el giro antropológico que introdujo Sócrates?",
    answers: [
      { text: "En reemplazar la pregunta por la naturaleza por la pregunta por el ser humano y cómo debe vivir.", correct: true,
        explanation: "Correcto. De la physis al ánthropos: nace la ética como centro de la filosofía." },
      { text: "En descubrir que el arché del universo es el ser humano.", correct: false,
        explanation: "Sócrates no busca el arché: cambia la pregunta." },
      { text: "En volver a los mitos para explicar la conducta humana.", correct: false,
        explanation: "Sócrates usa la razón y el diálogo, no los mitos." },
      { text: "En estudiar el cuerpo humano como un médico.", correct: false,
        explanation: "Le interesa cómo vivir bien, no la anatomía." },
      { text: "En fundar la primera escuela de astronomía de Atenas.", correct: false,
        explanation: "Es lo contrario: deja de lado el estudio del cosmos." }
    ],
    hint: "Del cosmos al ánthropos.",
    difficulty: 'basico',
    topic: 'Giro antropológico'
  },
  {
    id: 'socrates_002',
    question: "¿Por qué conocemos a Sócrates solo a través de otros autores?",
    answers: [
      { text: "Porque sus libros se quemaron en un incendio de Atenas.", correct: false,
        explanation: "No escribió libros." },
      { text: "Porque no escribió nada: filosofaba conversando, y lo conocemos sobre todo por Platón.", correct: true,
        explanation: "Correcto. También Aristófanes lo caricaturizó en Las nubes." },
      { text: "Porque escribió en un idioma que nadie entiende.", correct: false,
        explanation: "No escribió." },
      { text: "Porque prohibió a sus alumnos hablar de él.", correct: false,
        explanation: "Al contrario: Platón lo hizo protagonista de sus diálogos." },
      { text: "Porque era un personaje inventado por los poetas.", correct: false,
        explanation: "Fue una persona real de Atenas." }
    ],
    hint: "Prefería la plaza a la escritura.",
    difficulty: 'basico',
    topic: 'Vida y fuentes'
  },
  {
    id: 'socrates_003',
    question: "¿Qué caracterizaba a los sofistas?",
    answers: [
      { text: "Buscaban definiciones universales sin cobrar por enseñar.", correct: false,
        explanation: "Eso describe a Sócrates." },
      { text: "Enseñaban retórica a cambio de dinero y defendían el relativismo: no hay verdades absolutas.", correct: true,
        explanation: "Correcto. Protágoras: «el hombre es la medida de todas las cosas»." },
      { text: "Explicaban el mundo con los mitos de Homero.", correct: false,
        explanation: "Los sofistas no eran mitólogos." },
      { text: "Buscaban el arché de la naturaleza.", correct: false,
        explanation: "Eso hacían los presocráticos." },
      { text: "Defendían que solo existe el ser y nada cambia.", correct: false,
        explanation: "Esa es la tesis de Parménides." }
    ],
    hint: "Retórica, dinero y relativismo.",
    difficulty: 'basico',
    topic: 'Sofistas'
  },
  {
    id: 'socrates_004',
    question: "¿Cuál es la principal diferencia entre Sócrates y los sofistas?",
    answers: [
      { text: "Sócrates cobraba por enseñar y los sofistas no.", correct: false,
        explanation: "Es al revés." },
      { text: "Sócrates buscaba verdades morales universales con el diálogo; los sofistas, convencer y tener éxito, porque cada uno tiene su verdad.", correct: true,
        explanation: "Correcto. Verdad y virtud frente a persuasión y éxito personal." },
      { text: "Los sofistas querían mejorar el alma de los ciudadanos y Sócrates solo ganar debates.", correct: false,
        explanation: "Es al revés." },
      { text: "Sócrates estudiaba la naturaleza y los sofistas al ser humano.", correct: false,
        explanation: "Los dos se interesaban por el ser humano." },
      { text: "No había diferencias importantes entre ellos.", correct: false,
        explanation: "Sus filosofías eran opuestas." }
    ],
    hint: "Verdad o persuasión.",
    difficulty: 'intermedio',
    topic: 'Sócrates y los sofistas'
  },
  {
    id: 'socrates_005',
    question: "¿Qué quería decir Sócrates con «una vida no examinada no merece ser vivida»?",
    answers: [
      { text: "Que hay que aprobar todos los exámenes para tener una buena vida.", correct: false,
        explanation: "No habla de exámenes escolares." },
      { text: "Que vivir bien exige reflexionar sobre uno mismo, como pide el «conócete a ti mismo».", correct: true,
        explanation: "Correcto. Sin autoconocimiento vivimos guiados por opiniones y prejuicios." },
      { text: "Que la vida no tiene ningún sentido.", correct: false,
        explanation: "Sócrates no es pesimista: propone examinarla." },
      { text: "Que hay que vigilar la vida de los demás.", correct: false,
        explanation: "El examen es de uno mismo." },
      { text: "Que solo los filósofos merecen vivir.", correct: false,
        explanation: "Es una invitación a todos." }
    ],
    hint: "Gnóthi seautón.",
    difficulty: 'intermedio',
    topic: 'Autoconocimiento'
  },
  {
    id: 'socrates_006',
    question: "Para Sócrates, ¿qué es el alma y por qué hay que cuidarla?",
    answers: [
      { text: "Es nuestra razón y conciencia; hay que cuidarla más que al cuerpo y a las riquezas, porque ahí está la felicidad.", correct: true,
        explanation: "Correcto. Esa era su misión, según la Apología." },
      { text: "Es un fantasma que sale del cuerpo; hay que cuidarla con rituales.", correct: false,
        explanation: "Para Sócrates el alma es la razón." },
      { text: "Es una parte del cuerpo; hay que cuidarla con ejercicio.", correct: false,
        explanation: "No es un órgano." },
      { text: "Es lo mismo que la fama; hay que cuidarla para que nos admiren.", correct: false,
        explanation: "La fama es exterior; el alma es lo que piensa y decide." },
      { text: "No existe; por eso solo hay que cuidar el cuerpo.", correct: false,
        explanation: "Para Sócrates el alma es lo más importante." }
    ],
    hint: "Primero el alma, después el cuerpo.",
    difficulty: 'intermedio',
    topic: 'Cuidado del alma'
  },
  {
    id: 'socrates_007',
    question: "¿Cuál es el objetivo de la ironía socrática?",
    answers: [
      { text: "Burlarse del interlocutor para ganar el debate frente al público.", correct: false,
        explanation: "No busca humillar." },
      { text: "Mostrar que Sócrates sabía más que todos.", correct: false,
        explanation: "Sócrates fingía no saber." },
      { text: "Que el interlocutor descubra, al caer en contradicciones, que no sabía lo que creía saber.", correct: true,
        explanation: "Correcto. Destruye falsas certezas para poder buscar de verdad." },
      { text: "Cobrarle al interlocutor por la conversación.", correct: false,
        explanation: "Sócrates nunca cobró." },
      { text: "Convencer con discursos largos y hermosos.", correct: false,
        explanation: "Eso es retórica sofista." }
    ],
    hint: "Fingir ignorancia.",
    difficulty: 'basico',
    topic: 'Ironía'
  },
  {
    id: 'socrates_008',
    question: "¿Por qué el oráculo de Delfos dijo que no había nadie más sabio que Sócrates?",
    answers: [
      { text: "Porque Sócrates había leído todos los libros de Grecia.", correct: false,
        explanation: "No se trata de cantidad de lecturas." },
      { text: "Porque Sócrates sabía que no sabía, mientras otros creían saber lo que ignoraban.", correct: true,
        explanation: "Correcto. De ahí «solo sé que no sé nada»." },
      { text: "Porque era el ciudadano más rico de Atenas.", correct: false,
        explanation: "La riqueza no tiene que ver." },
      { text: "Porque nunca se equivocaba en sus respuestas.", correct: false,
        explanation: "Su sabiduría era reconocer su ignorancia." },
      { text: "Porque era sacerdote del templo de Apolo.", correct: false,
        explanation: "No lo era." }
    ],
    hint: "Solo sé que no sé nada.",
    difficulty: 'intermedio',
    topic: 'Solo sé que no sé nada'
  },
  {
    id: 'socrates_009',
    question: "¿Por qué Sócrates llamó «mayéutica» a su método?",
    answers: [
      { text: "Porque su padre era escultor y él «esculpía» a sus alumnos.", correct: false,
        explanation: "El nombre viene del oficio de su madre." },
      { text: "Porque su madre era partera, y él con preguntas ayudaba a otros a «dar a luz» la verdad que llevaban dentro.", correct: true,
        explanation: "Correcto. El conocimiento no se impone: se descubre." },
      { text: "Porque así se llamaba la plaza donde conversaba.", correct: false,
        explanation: "No es un lugar." },
      { text: "Porque significa «arte de ganar discusiones».", correct: false,
        explanation: "Significa arte de ayudar a dar a luz." },
      { text: "Porque enseñaba medicina a los jóvenes.", correct: false,
        explanation: "La comparación es con el parto de ideas, no con la medicina." }
    ],
    hint: "Partera de ideas.",
    difficulty: 'basico',
    topic: 'Mayéutica'
  },
  {
    id: 'socrates_010',
    question: "¿Qué buscaba Sócrates cuando preguntaba «¿qué es la justicia?»?",
    answers: [
      { text: "Una lista de ejemplos de actos justos, distinta para cada persona.", correct: false,
        explanation: "Los ejemplos no le alcanzaban." },
      { text: "Una definición universal: lo que tienen en común todos los actos justos, válida para todos.", correct: true,
        explanation: "Correcto. Así enfrentó al relativismo de los sofistas." },
      { text: "La opinión de la mayoría de los atenienses.", correct: false,
        explanation: "La mayoría puede equivocarse." },
      { text: "La ley que conviniera al más fuerte.", correct: false,
        explanation: "Esa idea la defendían algunos sofistas." },
      { text: "Un mito que explicara el origen de la justicia.", correct: false,
        explanation: "Buscaba un concepto, no un relato." }
    ],
    hint: "Qué es algo en sí.",
    difficulty: 'avanzado',
    topic: 'Definiciones universales'
  },
  {
    id: 'socrates_011',
    question: "¿Qué afirma el intelectualismo moral de Sócrates?",
    answers: [
      { text: "Que la virtud depende de la suerte y no se puede enseñar.", correct: false,
        explanation: "Para Sócrates la virtud es un saber y se puede enseñar." },
      { text: "Que saber y obrar bien no tienen relación.", correct: false,
        explanation: "Para Sócrates van juntos." },
      { text: "Que conocer el bien es la virtud, y quien lo conoce de verdad, lo hace.", correct: true,
        explanation: "Correcto. Por eso nadie hace el mal a sabiendas." },
      { text: "Que solo los inteligentes pueden ser felices.", correct: false,
        explanation: "No se trata de inteligencia, sino de conocer el bien." },
      { text: "Que el placer es el único bien.", correct: false,
        explanation: "La felicidad es la plenitud del alma, no el placer pasajero." }
    ],
    hint: "Virtud = conocimiento.",
    difficulty: 'basico',
    topic: 'Intelectualismo moral'
  },
  {
    id: 'socrates_012',
    question: "Una persona estafa para ganar dinero. ¿Cómo lo explicaría Sócrates?",
    answers: [
      { text: "Es mala por naturaleza y no puede cambiar.", correct: false,
        explanation: "Sócrates confía en la educación." },
      { text: "Sabe perfectamente que el bien es no estafar, y elige el mal a propósito.", correct: false,
        explanation: "Para Sócrates nadie hace el mal a sabiendas." },
      { text: "Obra por ignorancia: cree que el dinero la hará feliz, sin ver que daña su alma; hay que enseñarle.", correct: true,
        explanation: "Correcto. El mayor mal es la ignorancia." },
      { text: "Los dioses la obligaron a estafar.", correct: false,
        explanation: "Sócrates no culpa a los dioses." },
      { text: "Está bien, porque cada uno tiene su verdad.", correct: false,
        explanation: "Eso es relativismo sofista." }
    ],
    hint: "Nadie hace el mal a sabiendas.",
    difficulty: 'intermedio',
    topic: 'Nadie hace el mal a sabiendas'
  },
  {
    id: 'socrates_013',
    question: "¿Por qué Sócrates se negó a escapar de la cárcel antes de morir?",
    answers: [
      { text: "Porque creía que el jurado lo iba a perdonar a último momento.", correct: false,
        explanation: "Sabía que la condena era firme." },
      { text: "Porque tenía miedo de los guardias.", correct: false,
        explanation: "Sus amigos ya habían preparado la huida." },
      { text: "Porque escapar violaría las leyes de Atenas y traicionaría lo que enseñaba; prefería sufrir una injusticia que cometerla.", correct: true,
        explanation: "Correcto. Fue coherente hasta el final." },
      { text: "Porque estaba enfermo y no podía caminar.", correct: false,
        explanation: "No es la razón que dio." },
      { text: "Porque quería que lo recordaran como un sofista.", correct: false,
        explanation: "Se oponía a los sofistas." }
    ],
    hint: "Coherencia y respeto a la ley.",
    difficulty: 'intermedio',
    topic: 'Muerte de Sócrates'
  }
],

    stats: {
        totalQuestions: 13,
        estimatedTime: 15,
        difficultyDistribution: {
            basico: 6,
            intermedio: 6,
            avanzado: 1
        },
        topicDistribution: {
            'Giro antropológico': 1,
            'Vida y fuentes': 1,
            'Sofistas': 1,
            'Sócrates y los sofistas': 1,
            'Autoconocimiento': 1,
            'Cuidado del alma': 1,
            'Ironía': 1,
            'Solo sé que no sé nada': 1,
            'Mayéutica': 1,
            'Definiciones universales': 1,
            'Intelectualismo moral': 1,
            'Nadie hace el mal a sabiendas': 1,
            'Muerte de Sócrates': 1
        }
    }
};

// ========================================
// 🔧 VALIDACIÓN DEL TEMA
// ========================================

function validateTheme() {
    const requiredFields = ['id', 'title', 'questions'];
    const missingFields = requiredFields.filter(field => !SOCRATES_THEME[field]);
    if (missingFields.length > 0) {
        console.error(`❌ Faltan campos requeridos: ${missingFields.join(', ')}`);
        return false;
    }
    const invalidQuestions = SOCRATES_THEME.questions.filter((q, index) => {
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
    console.log('✅ Tema de Sócrates validado correctamente');
    return true;
}

function getThemeStats() {
    return {
        ...SOCRATES_THEME.stats,
        validationPassed: validateTheme(),
        loadTime: performance.now() - themeLoadStart
    };
}

if (!validateTheme()) {
    console.error('❌ Error al cargar el tema de Sócrates');
    throw new Error('Tema de Sócrates inválido');
}

console.log(`✅ Tema de Sócrates cargado: ${SOCRATES_THEME.questions.length} preguntas`);

if (typeof window !== 'undefined') {
    window.SOCRATES_THEME = SOCRATES_THEME;
}
