// ========================================
// 🔎 TEMA: EL MÉTODO FILOSÓFICO: DUDA, DIÁLOGO Y CRÍTICA
// ========================================
// 📚 Unidad I: ¿Qué es la Filosofía?
// Cuestionario de 13 preguntas de 5 opciones; cada una se responde con el material
// (themes/metodo/content.html).
// Versión 1.0 (2026-11-24): tema nuevo en el cuestionario, alineado con el material v2.0.

const themeLoadStart = performance.now();

const METODO_THEME = {
    id: 'metodo',
    title: 'El Método Filosófico: Duda, Diálogo y Crítica',
    description: 'El asombro y la pregunta filosófica, la duda metódica de Descartes, el diálogo, la argumentación, las falacias y la crítica.',
    icon: '🔎',
    gradient: 'linear-gradient(135deg, #FF5722 0%, #FF9800 100%)',
    difficulty: 'intermedio',
    timeLimit: 50,
    contentFile: 'themes/metodo/content.html',

    metadata: {
        author: 'Cuestionarios de Filosofía',
        version: '2.0',
        lastUpdated: '2026-11-24',
        category: 'Introducción a la Filosofía',
        prerequisites: [],
        learningObjectives: [
            'Explicar qué es un método y cómo empieza el filosofar',
            'Distinguir la duda escéptica de la duda metódica',
            'Reconstruir el camino de Descartes hasta el cogito',
            'Aplicar las reglas del buen diálogo y reconocer falacias',
            'Valorar el pensamiento crítico y el «sapere aude»'
        ]
    },

questions: [
  {
    id: 'metodo_001',
    question: "¿Cuáles son las tres herramientas del método filosófico que trabaja este tema?",
    answers: [
      { text: "El microscopio, el telescopio y la balanza.", correct: false,
        explanation: "La filosofía no usa instrumentos de laboratorio." },
      { text: "La duda, el diálogo y la crítica.", correct: true,
        explanation: "Correcto. Con preguntas, razón y argumentos." },
      { text: "La memoria, la obediencia y la repetición.", correct: false,
        explanation: "Eso no es filosofar." },
      { text: "Los mitos, los rituales y los oráculos.", correct: false,
        explanation: "La filosofía se separa de los mitos." },
      { text: "La retórica, la fama y el dinero.", correct: false,
        explanation: "Eso es lo que buscaban los sofistas." }
    ],
    hint: "Un camino con tres herramientas.",
    difficulty: 'basico',
    topic: 'Método'
  },
  {
    id: 'metodo_002',
    question: "¿Qué significa problematizar?",
    answers: [
      { text: "Crear problemas donde no los hay para molestar.", correct: false,
        explanation: "No se trata de molestar." },
      { text: "Resolver un problema de matemática.", correct: false,
        explanation: "Es otra cosa." },
      { text: "Convertir algo que parece obvio en una pregunta que va a la raíz.", correct: true,
        explanation: "Correcto. Como pasar de «¿qué hora es?» a «¿qué es el tiempo?»." },
      { text: "Quejarse de todo.", correct: false,
        explanation: "Problematizar es preguntar con sentido." },
      { text: "Buscar un dato en internet.", correct: false,
        explanation: "Una pregunta filosófica no se responde con un dato." }
    ],
    hint: "De lo obvio a la pregunta.",
    difficulty: 'basico',
    topic: 'Problematizar'
  },
  {
    id: 'metodo_003',
    question: "¿Cuál de estas características NO es de una pregunta filosófica?",
    answers: [
      { text: "Es radical: va a la raíz.", correct: false,
        explanation: "Sí es una característica." },
      { text: "Es universal: vale para todos.", correct: false,
        explanation: "Sí es una característica." },
      { text: "Se responde con un experimento de laboratorio.", correct: true,
        explanation: "Correcto: esa NO es una característica. Las preguntas filosóficas no se resuelven con un dato o un experimento." },
      { text: "Nace del asombro ante lo obvio.", correct: false,
        explanation: "Sí es así." },
      { text: "Puede referirse a la justicia o la libertad.", correct: false,
        explanation: "Son temas filosóficos típicos." }
    ],
    hint: "No se resuelve con un dato.",
    difficulty: 'intermedio',
    topic: 'Pregunta filosófica'
  },
  {
    id: 'metodo_004',
    question: "¿En qué se diferencia la duda metódica de la duda escéptica?",
    answers: [
      { text: "La metódica duda para encontrar algo indudable y construir; la escéptica concluye que no se puede conocer.", correct: true,
        explanation: "Correcto. Descartes usa la duda como herramienta." },
      { text: "La metódica no duda de nada importante.", correct: false,
        explanation: "Duda de todo lo que se pueda dudar." },
      { text: "La escéptica busca una verdad firme.", correct: false,
        explanation: "Es al revés." },
      { text: "Son lo mismo con otro nombre.", correct: false,
        explanation: "Llegan a conclusiones opuestas." },
      { text: "La metódica solo duda de los demás.", correct: false,
        explanation: "Descartes duda de sus propias creencias." }
    ],
    hint: "Dudar para construir.",
    difficulty: 'intermedio',
    topic: 'Duda'
  },
  {
    id: 'metodo_005',
    question: "¿Por qué Descartes admiraba la matemática?",
    answers: [
      { text: "Porque era fácil.", correct: false,
        explanation: "No por eso." },
      { text: "Porque en ella todo es claro y seguro, y quiso darle esa certeza a la filosofía.", correct: true,
        explanation: "Correcto. Por eso buscó bases firmes para el conocimiento." },
      { text: "Porque reemplazaba a la filosofía.", correct: false,
        explanation: "Quería mejorar la filosofía, no reemplazarla." },
      { text: "Porque los sabios no se ponían de acuerdo en ella.", correct: false,
        explanation: "Era al revés: en filosofía no se ponían de acuerdo." },
      { text: "Porque servía para ganar dinero.", correct: false,
        explanation: "No es el motivo." }
    ],
    hint: "Claridad y seguridad.",
    difficulty: 'basico',
    topic: 'Descartes'
  },
  {
    id: 'metodo_006',
    question: "¿Qué argumento usa Descartes para dudar del mundo exterior?",
    answers: [
      { text: "Que el mundo es muy grande.", correct: false,
        explanation: "No es su argumento." },
      { text: "Que mientras soñamos creemos que todo es real, y no hay una señal segura para distinguir la vigilia del sueño.", correct: true,
        explanation: "Correcto. Es el argumento del sueño." },
      { text: "Que los sabios lo niegan.", correct: false,
        explanation: "No se basa en autoridades." },
      { text: "Que el mundo no existe porque no se puede tocar.", correct: false,
        explanation: "Lo tocamos, pero podríamos estar soñándolo." },
      { text: "Que Dios se lo reveló.", correct: false,
        explanation: "No es su argumento." }
    ],
    hint: "Vigilia y sueño.",
    difficulty: 'intermedio',
    topic: 'Motivos para dudar'
  },
  {
    id: 'metodo_007',
    question: "Según Descartes, ¿por qué el genio maligno no puede hacerme dudar de que existo?",
    answers: [
      { text: "Porque no existe ningún genio maligno.", correct: false,
        explanation: "Descartes lo plantea como hipótesis posible." },
      { text: "Porque para que me engañe tengo que pensar, y si pienso, existo.", correct: true,
        explanation: "Correcto. Es el cogito: pienso, luego existo." },
      { text: "Porque mis sentidos me dicen que existo.", correct: false,
        explanation: "Los sentidos ya fueron puestos en duda." },
      { text: "Porque estoy despierto.", correct: false,
        explanation: "Ni siquiera eso es seguro para Descartes." },
      { text: "Porque lo dice la Biblia.", correct: false,
        explanation: "No es su argumento." }
    ],
    hint: "Cogito, ergo sum.",
    difficulty: 'avanzado',
    topic: 'Cogito'
  },
  {
    id: 'metodo_008',
    question: "Tenés que estudiar un tema muy difícil y lo dividís en partes pequeñas. ¿Qué regla de Descartes aplicás?",
    answers: [
      { text: "Evidencia.", correct: false,
        explanation: "La evidencia es aceptar solo lo claro y distinto." },
      { text: "Síntesis.", correct: false,
        explanation: "La síntesis es ordenar de lo simple a lo complejo." },
      { text: "Análisis.", correct: true,
        explanation: "Correcto. Dividir cada problema en tantas partes como se pueda." },
      { text: "Enumeración.", correct: false,
        explanation: "La enumeración es revisar todo al final." },
      { text: "Ninguna.", correct: false,
        explanation: "Es una de sus cuatro reglas." }
    ],
    hint: "Dividir.",
    difficulty: 'intermedio',
    topic: 'Reglas del método'
  },
  {
    id: 'metodo_009',
    question: "En un debate, alguien interpreta lo que dijiste de la peor manera para atacarte. ¿Qué regla del buen diálogo no respeta?",
    answers: [
      { text: "El principio de caridad.", correct: true,
        explanation: "Correcto. Hay que interpretar al otro de la mejor manera posible." },
      { text: "La regla de la evidencia.", correct: false,
        explanation: "Es una regla de Descartes, no del diálogo." },
      { text: "La inducción.", correct: false,
        explanation: "Es una forma de razonar." },
      { text: "La generalización apresurada.", correct: false,
        explanation: "Es una falacia, no una regla." },
      { text: "El sapere aude.", correct: false,
        explanation: "Es el lema de Kant." }
    ],
    hint: "Interpretar bien al otro.",
    difficulty: 'intermedio',
    topic: 'Reglas del diálogo'
  },
  {
    id: 'metodo_010',
    question: "¿Cuál es un razonamiento inductivo?",
    answers: [
      { text: "Todos los metales conducen la electricidad; el cobre es un metal; luego, conduce.", correct: false,
        explanation: "Es deductivo: de lo general a lo particular." },
      { text: "Todos los perros que conozco mueven la cola; entonces todos los perros mueven la cola.", correct: true,
        explanation: "Correcto. Generaliza a partir de casos: su conclusión es solo probable." },
      { text: "Si llueve, el piso se moja; llueve; luego, el piso se moja.", correct: false,
        explanation: "Es deductivo." },
      { text: "Pienso, luego existo.", correct: false,
        explanation: "Es el cogito de Descartes." },
      { text: "No le creas, es un vago.", correct: false,
        explanation: "Es una falacia." }
    ],
    hint: "De los casos a lo general.",
    difficulty: 'avanzado',
    topic: 'Deducción e inducción'
  },
  {
    id: 'metodo_011',
    question: "«Me robaron una vez en el centro: todos los que van al centro son ladrones». ¿Qué falacia es?",
    answers: [
      { text: "Ataque a la persona.", correct: false,
        explanation: "No critica a quien habla." },
      { text: "Hombre de paja.", correct: false,
        explanation: "No deforma lo que dijo otro." },
      { text: "Generalización apresurada.", correct: true,
        explanation: "Correcto. Saca una conclusión general de un solo caso." },
      { text: "Apelación a la mayoría.", correct: false,
        explanation: "No dice «todos lo hacen»." },
      { text: "No es una falacia: es una deducción.", correct: false,
        explanation: "Es una trampa del razonamiento." }
    ],
    hint: "De un caso a todos.",
    difficulty: 'intermedio',
    topic: 'Falacias'
  },
  {
    id: 'metodo_012',
    question: "¿Qué significa «criticar» en filosofía?",
    answers: [
      { text: "Hablar mal de algo o de alguien.", correct: false,
        explanation: "Ese es el uso común, no el filosófico." },
      { text: "Examinar algo para separar lo que tiene fundamento de lo que no, y conocer sus límites.", correct: true,
        explanation: "Correcto. Viene del griego kríno: separar, juzgar." },
      { text: "Obedecer a las autoridades.", correct: false,
        explanation: "Es lo opuesto a pensar por uno mismo." },
      { text: "No opinar nunca.", correct: false,
        explanation: "Criticar es juzgar con razones." },
      { text: "Copiar lo que dicen los demás.", correct: false,
        explanation: "Eso sería quedarse en la minoría de edad." }
    ],
    hint: "Kríno: separar.",
    difficulty: 'basico',
    topic: 'Crítica'
  },
  {
    id: 'metodo_013',
    question: "Para Kant, ¿qué es salir de la «minoría de edad»?",
    answers: [
      { text: "Cumplir 18 años.", correct: false,
        explanation: "No es una cuestión de edad física." },
      { text: "Atreverse a pensar por uno mismo, sin depender de que otros piensen por nosotros.", correct: true,
        explanation: "Correcto. Es el «sapere aude» de la Ilustración." },
      { text: "Obedecer a los mayores.", correct: false,
        explanation: "Es lo contrario." },
      { text: "Terminar la secundaria.", correct: false,
        explanation: "No es un título." },
      { text: "Dejar de estudiar filosofía.", correct: false,
        explanation: "Al contrario: pensar es filosofar." }
    ],
    hint: "Sapere aude.",
    difficulty: 'intermedio',
    topic: 'Kant y la Ilustración'
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
            'Método': 1,
            'Problematizar': 1,
            'Pregunta filosófica': 1,
            'Duda': 1,
            'Descartes': 1,
            'Motivos para dudar': 1,
            'Cogito': 1,
            'Reglas del método': 1,
            'Reglas del diálogo': 1,
            'Deducción e inducción': 1,
            'Falacias': 1,
            'Crítica': 1,
            'Kant y la Ilustración': 1
        }
    }
};

// ========================================
// 🔧 VALIDACIÓN DEL TEMA
// ========================================

function validateTheme() {
    const requiredFields = ['id', 'title', 'questions'];
    const missingFields = requiredFields.filter(field => !METODO_THEME[field]);
    if (missingFields.length > 0) {
        console.error(`❌ Faltan campos requeridos: ${missingFields.join(', ')}`);
        return false;
    }
    const invalidQuestions = METODO_THEME.questions.filter((q, index) => {
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
    console.log('✅ Tema del método filosófico validado correctamente');
    return true;
}

function getThemeStats() {
    return {
        ...METODO_THEME.stats,
        validationPassed: validateTheme(),
        loadTime: performance.now() - themeLoadStart
    };
}

if (!validateTheme()) {
    console.error('❌ Error al cargar el tema del método filosófico');
    throw new Error('Tema del método filosófico inválido');
}

console.log(`✅ Tema del método filosófico cargado: ${METODO_THEME.questions.length} preguntas`);

if (typeof window !== 'undefined') {
    window.METODO_THEME = METODO_THEME;
}
