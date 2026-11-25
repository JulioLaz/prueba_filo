// ========================================
// 🌀 TEMA: JEAN-PAUL SARTRE: EL SER HUMANO ES LIBERTAD
// ========================================
// 📚 Unidad II: El ser humano
// Cuestionario de 13 preguntas de 5 opciones; cada una se responde con el material
// (themes/sartre/content.html).
// Versión 2.0 (2026-11-25): 13 preguntas alineadas con el material v2.0 (antes 10).

const themeLoadStart = performance.now();

const SARTRE_THEME = {
    id: 'sartre',
    title: 'Jean-Paul Sartre: El ser humano es libertad',
    description: 'Existencia y esencia, condenados a ser libres, angustia, desamparo, desesperación, mala fe, la mirada del otro y la autenticidad.',
    icon: '🌀',
    gradient: 'linear-gradient(135deg, #222831 0%, #393e46 50%, #00adb5 100%)',
    difficulty: 'intermedio',
    timeLimit: 50,
    contentFile: 'themes/sartre/content.html',

    metadata: {
        author: 'Cuestionarios de Filosofía',
        version: '2.0',
        lastUpdated: '2026-11-24',
        category: 'Antropología Filosófica',
        prerequisites: [],
        learningObjectives: [
            'Explicar que la existencia precede a la esencia',
            'Explicar por qué estamos condenados a ser libres y responsables de todos',
            'Distinguir angustia, desamparo y desesperación',
            'Reconocer la mala fe y la autenticidad en situaciones cotidianas',
            'Explicar el ser en-sí, el para-sí y la mirada del otro'
        ]
    },

questions: [
  {
    id: 'sartre_001',
    question: "¿Qué significa que en el ser humano «la existencia precede a la esencia»?",
    answers: [
      { text: "Que nacemos con una naturaleza humana fija.", correct: false,
        explanation: "Es lo contrario de lo que dice Sartre." },
      { text: "Que primero existimos y después nos definimos por lo que hacemos.", correct: true,
        explanation: "Correcto. El hombre no es otra cosa que lo que él se hace." },
      { text: "Que la esencia es más importante que la existencia.", correct: false,
        explanation: "Sartre invierte ese orden." },
      { text: "Que Dios decide nuestra esencia antes de nacer.", correct: false,
        explanation: "Sartre es ateo: no hay un creador que nos haya pensado antes." },
      { text: "Que existir y ser son lo mismo.", correct: false,
        explanation: "La frase marca un orden: primero existir, después ser algo." }
    ],
    hint: "Primero existimos.",
    difficulty: 'basico',
    topic: 'Existencia y esencia'
  },
  {
    id: 'sartre_002',
    question: "¿Para qué usa Sartre el ejemplo del cortapapeles?",
    answers: [
      { text: "Para mostrar que en los objetos la esencia precede a la existencia, al revés que en el ser humano.", correct: true,
        explanation: "Correcto. El artesano lo piensa antes de fabricarlo." },
      { text: "Para enseñar a fabricar herramientas.", correct: false,
        explanation: "Es un ejemplo filosófico." },
      { text: "Para decir que el ser humano es como un objeto.", correct: false,
        explanation: "Es justamente la diferencia." },
      { text: "Para criticar a los artesanos.", correct: false,
        explanation: "No los critica." },
      { text: "Para mostrar que los objetos son libres.", correct: false,
        explanation: "Los objetos ya están definidos." }
    ],
    hint: "Primero el plan, después el objeto.",
    difficulty: 'intermedio',
    topic: 'Cortapapeles'
  },
  {
    id: 'sartre_003',
    question: "¿Por qué Sartre afirma que estamos «condenados a ser libres»?",
    answers: [
      { text: "Porque la libertad es un castigo legal.", correct: false,
        explanation: "No habla de leyes." },
      { text: "Porque podemos renunciar a la libertad cuando queremos.", correct: false,
        explanation: "No podemos: no elegir también es elegir." },
      { text: "Porque no elegimos existir, pero una vez en el mundo somos responsables de todo lo que hacemos.", correct: true,
        explanation: "Correcto. La libertad es nuestra condición." },
      { text: "Porque solo algunos son libres.", correct: false,
        explanation: "Todos lo somos." },
      { text: "Porque la libertad no existe.", correct: false,
        explanation: "Es lo contrario." }
    ],
    hint: "No elegir también es elegir.",
    difficulty: 'intermedio',
    topic: 'Libertad'
  },
  {
    id: 'sartre_004',
    question: "Un compañero dice: «Yo no elegí nada, solo hice lo que me dijeron». ¿Qué le respondería Sartre?",
    answers: [
      { text: "Que tiene razón: si obedeció, no es responsable.", correct: false,
        explanation: "Para Sartre obedecer también es elegir." },
      { text: "Que obedecer también fue una elección y es responsable de ella.", correct: true,
        explanation: "Correcto. Estamos condenados a ser libres." },
      { text: "Que la culpa es de quien le dio la orden y nada más.", correct: false,
        explanation: "Eso es una excusa: mala fe." },
      { text: "Que los seres humanos no eligen.", correct: false,
        explanation: "Siempre elegimos." },
      { text: "Que hay que hacer siempre lo que dicen los demás.", correct: false,
        explanation: "Sería huir de la libertad." }
    ],
    hint: "No elegir es elegir.",
    difficulty: 'avanzado',
    topic: 'Libertad y responsabilidad'
  },
  {
    id: 'sartre_005',
    question: "¿Por qué, al elegirme, «elijo al hombre»?",
    answers: [
      { text: "Porque elijo a otra persona para que decida por mí.", correct: false,
        explanation: "No es eso." },
      { text: "Porque con mis actos propongo una imagen de cómo creo que debe ser el ser humano.", correct: true,
        explanation: "Correcto. Por eso somos responsables de todos." },
      { text: "Porque todos tienen que hacer lo mismo que yo por ley.", correct: false,
        explanation: "No es una obligación legal." },
      { text: "Porque solo importa mi propia vida.", correct: false,
        explanation: "La responsabilidad alcanza a todos." },
      { text: "Porque elegir no tiene consecuencias.", correct: false,
        explanation: "Tiene consecuencias para todos." }
    ],
    hint: "Responsables de todos.",
    difficulty: 'intermedio',
    topic: 'Responsabilidad'
  },
  {
    id: 'sartre_006',
    question: "Para Sartre, ¿qué es la angustia?",
    answers: [
      { text: "El miedo a algo concreto, como un perro.", correct: false,
        explanation: "La angustia no tiene un objeto concreto." },
      { text: "Una enfermedad que paraliza.", correct: false,
        explanation: "No paraliza: es condición de la acción." },
      { text: "La conciencia de que todo depende de mi elección y de que soy responsable de ella.", correct: true,
        explanation: "Correcto. Como el jefe que debe dar una orden." },
      { text: "La tristeza por el pasado.", correct: false,
        explanation: "Se refiere a la elección presente." },
      { text: "La alegría de ser libres.", correct: false,
        explanation: "Es más bien un vértigo." }
    ],
    hint: "El vértigo de elegir.",
    difficulty: 'basico',
    topic: 'Angustia'
  },
  {
    id: 'sartre_007',
    question: "Un joven debe elegir entre ir a luchar en la resistencia o cuidar a su madre. ¿Qué le dijo Sartre?",
    answers: [
      { text: "Que consultara la Biblia.", correct: false,
        explanation: "Ninguna moral le daba la respuesta." },
      { text: "Que siguiera lo que dice la mayoría.", correct: false,
        explanation: "Eso sería huir de la elección." },
      { text: "«Sos libre, elegí, es decir, inventá»: ninguna moral previa decide por él.", correct: true,
        explanation: "Correcto. Es el desamparo: no hay valores escritos de antemano." },
      { text: "Que se quedara siempre con su madre.", correct: false,
        explanation: "Sartre no decide por él." },
      { text: "Que esperara a que otro eligiera.", correct: false,
        explanation: "Esperar también es elegir." }
    ],
    hint: "Inventá.",
    difficulty: 'avanzado',
    topic: 'Desamparo'
  },
  {
    id: 'sartre_008',
    question: "¿Qué significa el desamparo en Sartre?",
    answers: [
      { text: "Que estamos solos para elegir, sin valores fijados por Dios ni excusas.", correct: true,
        explanation: "Correcto. «Si Dios no existiera, todo estaría permitido», recuerda de Dostoievski." },
      { text: "Que no tenemos casa.", correct: false,
        explanation: "Es un sentido filosófico." },
      { text: "Que la sociedad nos abandona.", correct: false,
        explanation: "No es eso." },
      { text: "Que Dios nos protege siempre.", correct: false,
        explanation: "Sartre es ateo." },
      { text: "Que los valores están escritos en el cielo.", correct: false,
        explanation: "Es lo contrario." }
    ],
    hint: "Sin valores escritos.",
    difficulty: 'intermedio',
    topic: 'Desamparo'
  },
  {
    id: 'sartre_009',
    question: "¿Qué quiere decir actuar «sin esperanza» en Sartre?",
    answers: [
      { text: "Estar deprimido y no hacer nada.", correct: false,
        explanation: "La desesperación no es depresión." },
      { text: "Actuar contando solo con lo que depende de nosotros, sin garantías de que todo salga bien.", correct: true,
        explanation: "Correcto. Es la desesperación, que no impide comprometerse." },
      { text: "Esperar que los demás terminen lo que empezamos.", correct: false,
        explanation: "No podemos contar con eso." },
      { text: "Rendirse ante las dificultades.", correct: false,
        explanation: "Sartre pide actuar." },
      { text: "Confiar en el destino.", correct: false,
        explanation: "No hay destino escrito." }
    ],
    hint: "Sin garantías.",
    difficulty: 'intermedio',
    topic: 'Desesperación'
  },
  {
    id: 'sartre_010',
    question: "¿Cuál de estas actitudes es mala fe?",
    answers: [
      { text: "«Elegí esta carrera y me hago cargo de la decisión».", correct: false,
        explanation: "Eso es autenticidad." },
      { text: "«Me equivoqué; la próxima elijo distinto».", correct: false,
        explanation: "Asume su libertad." },
      { text: "«No tuve opción, la culpa es de las circunstancias».", correct: true,
        explanation: "Correcto. Es un autoengaño para no hacerse cargo." },
      { text: "«Puedo cambiar si quiero».", correct: false,
        explanation: "Reconoce su libertad." },
      { text: "«Mi decisión afecta a otros y lo tengo en cuenta».", correct: false,
        explanation: "Es responsabilidad." }
    ],
    hint: "Excusas para no elegir.",
    difficulty: 'basico',
    topic: 'Mala fe'
  },
  {
    id: 'sartre_011',
    question: "¿Qué diferencia hay entre el ser en-sí y el ser para-sí?",
    answers: [
      { text: "El en-sí es la conciencia libre y el para-sí la piedra.", correct: false,
        explanation: "Es al revés." },
      { text: "El en-sí es el de las cosas, completo y sin posibilidades; el para-sí es la conciencia, abierta y libre.", correct: true,
        explanation: "Correcto. La mala fe quiere ser un en-sí." },
      { text: "No hay diferencia.", correct: false,
        explanation: "Son dos modos de ser distintos." },
      { text: "El para-sí es el de los animales.", correct: false,
        explanation: "Es el de la conciencia humana." },
      { text: "El en-sí es Dios.", correct: false,
        explanation: "No es eso." }
    ],
    hint: "Cosas y conciencia.",
    difficulty: 'avanzado',
    topic: 'En-sí y para-sí'
  },
  {
    id: 'sartre_012',
    question: "¿Qué significa la frase «el infierno son los otros»?",
    answers: [
      { text: "Que los demás son malos.", correct: false,
        explanation: "No es eso." },
      { text: "Que hay que vivir aislado.", correct: false,
        explanation: "Necesitamos al otro." },
      { text: "Que vivir pendientes de la mirada y el juicio ajeno puede volverse una prisión.", correct: true,
        explanation: "Correcto. Viene de la obra A puerta cerrada." },
      { text: "Que el infierno existe.", correct: false,
        explanation: "Es una metáfora." },
      { text: "Que los otros no nos importan.", correct: false,
        explanation: "Nos importan demasiado." }
    ],
    hint: "La mirada del otro.",
    difficulty: 'intermedio',
    topic: 'Mirada del otro'
  },
  {
    id: 'sartre_013',
    question: "¿Por qué Sartre dice que el existencialismo es un humanismo optimista?",
    answers: [
      { text: "Porque niega la angustia.", correct: false,
        explanation: "No la niega." },
      { text: "Porque el destino del ser humano está en sus propias manos: no hay nada escrito.", correct: true,
        explanation: "Correcto. El ser humano se supera y se inventa." },
      { text: "Porque promete la felicidad.", correct: false,
        explanation: "No promete nada." },
      { text: "Porque cree en el destino.", correct: false,
        explanation: "Rechaza el destino." },
      { text: "Porque dice que el ser humano ya está terminado.", correct: false,
        explanation: "Siempre está por hacerse." }
    ],
    hint: "Todo está por hacer.",
    difficulty: 'intermedio',
    topic: 'Humanismo'
  }
],

    stats: {
        totalQuestions: 13,
        estimatedTime: 15,
        difficultyDistribution: {
            basico: 3,
            intermedio: 7,
            avanzado: 3
        },
        topicDistribution: {
            'Existencia y esencia': 1,
            'Cortapapeles': 1,
            'Libertad': 1,
            'Libertad y responsabilidad': 1,
            'Responsabilidad': 1,
            'Angustia': 1,
            'Desamparo': 2,
            'Desesperación': 1,
            'Mala fe': 1,
            'En-sí y para-sí': 1,
            'Mirada del otro': 1,
            'Humanismo': 1
        }
    }
};

// ========================================
// 🔧 VALIDACIÓN DEL TEMA
// ========================================

function validateTheme() {
    const requiredFields = ['id', 'title', 'questions'];
    const missingFields = requiredFields.filter(field => !SARTRE_THEME[field]);
    if (missingFields.length > 0) {
        console.error(`❌ Faltan campos requeridos: ${missingFields.join(', ')}`);
        return false;
    }
    const invalidQuestions = SARTRE_THEME.questions.filter((q, index) => {
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
    console.log('✅ Tema de Sartre validado correctamente');
    return true;
}

function getThemeStats() {
    return {
        ...SARTRE_THEME.stats,
        validationPassed: validateTheme(),
        loadTime: performance.now() - themeLoadStart
    };
}

if (!validateTheme()) {
    console.error('❌ Error al cargar el tema de Sartre');
    throw new Error('Tema de Sartre inválido');
}

console.log(`✅ Tema de Sartre cargado: ${SARTRE_THEME.questions.length} preguntas`);

if (typeof window !== 'undefined') {
    window.SARTRE_THEME = SARTRE_THEME;
}
