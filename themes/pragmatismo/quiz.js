// ========================================
// 🛠️ TEMA: PRAGMATISMO: LO VERDADERO ES LO PRÁCTICO
// ========================================
// 📚 Unidad III: Ética
// Cuestionario de 13 preguntas de 5 opciones; cada una se responde con el material
// (themes/pragmatismo/content.html).
// Versión 2.0 (2026-11-25): 13 preguntas alineadas con el material v2.0 (antes 12).

const themeLoadStart = performance.now();

const PRAGMATISMO_THEME = {
    id: 'pragmatismo',
    title: 'Pragmatismo: Lo Verdadero es lo Práctico',
    description: 'Pragma, la máxima de Peirce, duda y creencia, falibilismo, la verdad que funciona de James, el instrumentalismo de Dewey, ser pragmático y críticas.',
    icon: '🛠️',
    gradient: 'linear-gradient(135deg, #ff9500 0%, #ff6b35 100%)',
    difficulty: 'intermedio',
    timeLimit: 50,
    contentFile: 'themes/pragmatismo/content.html',

    metadata: {
        author: 'Cuestionarios de Filosofía',
        version: '2.0',
        lastUpdated: '2026-11-24',
        category: 'Ética',
        prerequisites: [],
        learningObjectives: [
            'Explicar qué significa evaluar las ideas por sus consecuencias prácticas',
            'Explicar la máxima pragmática de Peirce y la relación entre duda y creencia',
            'Explicar la concepción de la verdad de James',
            'Explicar el instrumentalismo y la propuesta educativa de Dewey',
            'Reconocer las críticas al pragmatismo'
        ]
    },

questions: [
  {
    id: 'prag_001',
    question: "¿Qué significa la palabra griega «pragma», de donde viene «pragmatismo»?",
    answers: [
      { text: "Verdad eterna.", correct: false,
        explanation: "No: el pragmatismo desconfía de las verdades eternas." },
      { text: "Acción, práctica o asunto.", correct: true,
        explanation: "Correcto. Por eso esta filosofía mira la práctica." },
      { text: "Alma.", correct: false,
        explanation: "Eso sería «psyché»." },
      { text: "Razón pura.", correct: false,
        explanation: "No." },
      { text: "Placer.", correct: false,
        explanation: "Eso sería «hedoné»." }
    ],
    hint: "Acción.",
    difficulty: 'basico',
    topic: 'Pragma'
  },
  {
    id: 'prag_002',
    question: "¿Quiénes son los tres grandes pragmatistas?",
    answers: [
      { text: "Sócrates, Platón y Aristóteles.", correct: false,
        explanation: "Son filósofos griegos." },
      { text: "Bentham, Mill y Sidgwick.", correct: false,
        explanation: "Son utilitaristas." },
      { text: "Peirce, James y Dewey.", correct: true,
        explanation: "Correcto. Surgieron en Estados Unidos, a fines del siglo XIX." },
      { text: "Kant, Hegel y Marx.", correct: false,
        explanation: "Son filósofos alemanes." },
      { text: "Descartes, Spinoza y Leibniz.", correct: false,
        explanation: "Son racionalistas." }
    ],
    hint: "El Club Metafísico.",
    difficulty: 'basico',
    topic: 'Origen'
  },
  {
    id: 'prag_003',
    question: "Según la máxima pragmática de Peirce, ¿qué significa que un diamante es «duro»?",
    answers: [
      { text: "Que es caro.", correct: false,
        explanation: "El precio no es lo que define la dureza." },
      { text: "Que es muy antiguo.", correct: false,
        explanation: "No." },
      { text: "Que es bonito.", correct: false,
        explanation: "No." },
      { text: "Que no lo raya casi ninguna otra cosa: ese efecto práctico es su significado.", correct: true,
        explanation: "Correcto. El significado está en los efectos." },
      { text: "Nada: la dureza no se puede definir.", correct: false,
        explanation: "Sí se puede, por sus efectos." }
    ],
    hint: "Pensá en los efectos.",
    difficulty: 'intermedio',
    topic: 'Máxima pragmática'
  },
  {
    id: 'prag_004',
    question: "Para Peirce, ¿qué relación hay entre la duda y la creencia?",
    answers: [
      { text: "La duda es incómoda y nos impulsa a investigar hasta llegar a una creencia, que es un hábito de acción.", correct: true,
        explanation: "Correcto. Pensar es pasar de la duda a la creencia." },
      { text: "Son lo mismo.", correct: false,
        explanation: "Son estados opuestos." },
      { text: "La creencia es incómoda y la duda tranquila.", correct: false,
        explanation: "Es al revés." },
      { text: "La duda no sirve para nada.", correct: false,
        explanation: "Nos impulsa a investigar." },
      { text: "Las creencias no tienen que ver con la acción.", correct: false,
        explanation: "Son hábitos de acción." }
    ],
    hint: "Un estado incómodo y uno tranquilo.",
    difficulty: 'intermedio',
    topic: 'Duda y creencia'
  },
  {
    id: 'prag_005',
    question: "¿Qué significa que el pragmatismo es falibilista y antifundamentalista?",
    answers: [
      { text: "Que acepta solo verdades absolutas.", correct: false,
        explanation: "Es lo contrario." },
      { text: "Que no cree en la ciencia.", correct: false,
        explanation: "Confía en el método científico." },
      { text: "Que cualquier conocimiento puede corregirse y no hay una verdad última indiscutible.", correct: true,
        explanation: "Correcto. Las ideas evolucionan." },
      { text: "Que nunca hay que investigar.", correct: false,
        explanation: "No." },
      { text: "Que todo da lo mismo.", correct: false,
        explanation: "No: algunas ideas funcionan mejor que otras." }
    ],
    hint: "Las ideas evolucionan.",
    difficulty: 'intermedio',
    topic: 'Falibilismo'
  },
  {
    id: 'prag_006',
    question: "¿Qué quiere decir James con que las ideas tienen «valor en efectivo»?",
    answers: [
      { text: "Que se pueden vender.", correct: false,
        explanation: "Es una metáfora." },
      { text: "Que solo importa el dinero.", correct: false,
        explanation: "No." },
      { text: "Que valen si se pueden «cobrar» en la práctica: si funcionan en la experiencia.", correct: true,
        explanation: "Correcto. Como un billete que se puede usar." },
      { text: "Que las ideas caras son mejores.", correct: false,
        explanation: "No." },
      { text: "Que los bancos deciden la verdad.", correct: false,
        explanation: "No." }
    ],
    hint: "Como un billete.",
    difficulty: 'intermedio',
    topic: 'Verdad'
  },
  {
    id: 'prag_007',
    question: "¿Qué concepción de la verdad critica el pragmatismo?",
    answers: [
      { text: "La verdad como correspondencia: una copia quieta de la realidad.", correct: true,
        explanation: "Correcto. Para James la verdad se hace en la experiencia." },
      { text: "La verdad como lo que funciona.", correct: false,
        explanation: "Esa es la del pragmatismo." },
      { text: "La verdad como hipótesis que se prueba.", correct: false,
        explanation: "Eso lo acepta." },
      { text: "La verdad como algo que se corrige.", correct: false,
        explanation: "Eso lo acepta." },
      { text: "Ninguna.", correct: false,
        explanation: "Critica la correspondencia." }
    ],
    hint: "La copia.",
    difficulty: 'avanzado',
    topic: 'Verdad'
  },
  {
    id: 'prag_008',
    question: "¿Qué resuelve James con el ejemplo de la ardilla y el árbol?",
    answers: [
      { text: "Cuánto corre una ardilla.", correct: false,
        explanation: "No es un ejemplo de biología." },
      { text: "Que es imposible ver una ardilla.", correct: false,
        explanation: "No." },
      { text: "Que la discusión era solo de palabras: depende de qué se entienda por «dar vueltas».", correct: true,
        explanation: "Correcto. Sin diferencia práctica, la disputa se disuelve." },
      { text: "Que el hombre tenía razón.", correct: false,
        explanation: "Los dos tienen razón según el sentido." },
      { text: "Que no hay que discutir nunca.", correct: false,
        explanation: "Hay que discutir lo que hace diferencia." }
    ],
    hint: "Dar vueltas, ¿en qué sentido?",
    difficulty: 'intermedio',
    topic: 'Método pragmático'
  },
  {
    id: 'prag_009',
    question: "¿Qué es el instrumentalismo de Dewey?",
    answers: [
      { text: "Una teoría sobre la música.", correct: false,
        explanation: "No." },
      { text: "La idea de que las ideas son herramientas para resolver problemas.", correct: true,
        explanation: "Correcto. Si no sirven, se cambian." },
      { text: "La idea de que las ideas son copias de la realidad.", correct: false,
        explanation: "Eso critica el pragmatismo." },
      { text: "Una forma de memorizar.", correct: false,
        explanation: "Dewey criticó la memorización." },
      { text: "El rechazo de la educación.", correct: false,
        explanation: "Fue un gran pedagogo." }
    ],
    hint: "Martillos y brújulas.",
    difficulty: 'basico',
    topic: 'Instrumentalismo'
  },
  {
    id: 'prag_010',
    question: "¿Cómo era la escuela que proponía Dewey?",
    answers: [
      { text: "Alumnos quietos que memorizan.", correct: false,
        explanation: "Eso criticó." },
      { text: "Una escuela sin docentes.", correct: false,
        explanation: "El docente es un guía." },
      { text: "Una escuela solo para adultos.", correct: false,
        explanation: "No." },
      { text: "Una escuela que no enseña ciencia.", correct: false,
        explanation: "Enseñaba ciencia haciendo." },
      { text: "Alumnos activos que aprenden haciendo, con un docente guía, en una comunidad democrática.", correct: true,
        explanation: "Correcto. La escuela laboratorio." }
    ],
    hint: "Aprender haciendo.",
    difficulty: 'basico',
    topic: 'Educación'
  },
  {
    id: 'prag_011',
    question: "Una persona vegetariana, al borde de la muerte, come carne para sobrevivir. ¿Qué muestra el ejemplo?",
    answers: [
      { text: "Que nunca tuvo principios.", correct: false,
        explanation: "Los tenía, pero los dejó de lado." },
      { text: "Una actitud pragmática: poner la supervivencia y el resultado por encima de los ideales.", correct: true,
        explanation: "Correcto." },
      { text: "Que el vegetarianismo es falso.", correct: false,
        explanation: "No es lo que muestra." },
      { text: "Una actitud kantiana: cumplir el deber sin excepción.", correct: false,
        explanation: "Kant no admitiría excepciones." },
      { text: "Que no hay que comer carne.", correct: false,
        explanation: "Es al revés." }
    ],
    hint: "Supervivencia e ideales.",
    difficulty: 'intermedio',
    topic: 'Ser pragmático'
  },
  {
    id: 'prag_012',
    question: "¿Qué propone Richard Rorty en lugar de buscar una verdad final?",
    answers: [
      { text: "Volver a los dogmas.", correct: false,
        explanation: "Rechaza los dogmas." },
      { text: "Copiar mejor la realidad.", correct: false,
        explanation: "Critica la mente como espejo." },
      { text: "Mantener viva la conversación y ampliar la solidaridad.", correct: true,
        explanation: "Correcto." },
      { text: "Dejar de hablar con otras culturas.", correct: false,
        explanation: "Es lo contrario." },
      { text: "Obedecer a los científicos sin preguntar.", correct: false,
        explanation: "No." }
    ],
    hint: "Conversación.",
    difficulty: 'avanzado',
    topic: 'Neopragmatismo'
  },
  {
    id: 'prag_013',
    question: "¿Cuál es una crítica frecuente al pragmatismo?",
    answers: [
      { text: "Que no le interesa la práctica.", correct: false,
        explanation: "Es lo que más le interesa." },
      { text: "Que es demasiado dogmático.", correct: false,
        explanation: "Rechaza los dogmas." },
      { text: "Que no quiere resolver problemas.", correct: false,
        explanation: "No." },
      { text: "Que rechaza la experiencia.", correct: false,
        explanation: "Confía en ella." },
      { text: "Que puede caer en el relativismo y confundir lo útil con lo verdadero.", correct: true,
        explanation: "Correcto. Es la objeción de Russell." }
    ],
    hint: "¿Útil para quién?",
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
            'Pragma': 1,
            'Origen': 1,
            'Máxima pragmática': 1,
            'Duda y creencia': 1,
            'Falibilismo': 1,
            'Verdad': 2,
            'Método pragmático': 1,
            'Instrumentalismo': 1,
            'Educación': 1,
            'Ser pragmático': 1,
            'Neopragmatismo': 1,
            'Críticas': 1
        }
    }
};

// ========================================
// 🔧 VALIDACIÓN DEL TEMA
// ========================================

function validateTheme() {
    const requiredFields = ['id', 'title', 'questions'];
    const missingFields = requiredFields.filter(field => !PRAGMATISMO_THEME[field]);
    if (missingFields.length > 0) {
        console.error(`❌ Faltan campos requeridos: ${missingFields.join(', ')}`);
        return false;
    }
    const invalidQuestions = PRAGMATISMO_THEME.questions.filter((q, index) => {
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
    console.log('✅ Tema del pragmatismo validado correctamente');
    return true;
}

function getThemeStats() {
    return {
        ...PRAGMATISMO_THEME.stats,
        validationPassed: validateTheme(),
        loadTime: performance.now() - themeLoadStart
    };
}

if (!validateTheme()) {
    console.error('❌ Error al cargar el tema del pragmatismo');
    throw new Error('Tema del pragmatismo inválido');
}

console.log(`✅ Tema del pragmatismo cargado: ${PRAGMATISMO_THEME.questions.length} preguntas`);

if (typeof window !== 'undefined') {
    window.PRAGMATISMO_THEME = PRAGMATISMO_THEME;
}
