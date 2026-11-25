// ========================================
// 🏭 TEMA: KARL MARX: EL TRABAJO Y LA ALIENACIÓN
// ========================================
// 📚 Unidad II: El ser humano
// Cuestionario de 13 preguntas de 5 opciones; cada una se responde con el material
// (themes/marx_alienacion/content.html).
// Versión 1.0 (2026-11-25): tema nuevo.

const themeLoadStart = performance.now();

const MARX_ALIENACION_THEME = {
    id: 'marx_alienacion',
    title: 'Karl Marx: El Trabajo y la Alienación',
    description: 'El trabajo, la objetivación y el ser genérico, las cuatro alienaciones, la alienación política y religiosa, el fetichismo de la mercancía y la alienación hoy.',
    icon: '🏭',
    gradient: 'linear-gradient(135deg, #c53030 0%, #805ad5 100%)',
    difficulty: 'intermedio',
    timeLimit: 50,
    contentFile: 'themes/marx_alienacion/content.html',

    metadata: {
        author: 'Cuestionarios de Filosofía',
        version: '2.0',
        lastUpdated: '2026-11-24',
        category: 'Antropología Filosófica',
        prerequisites: [],
        learningObjectives: [
            'Explicar qué es la alienación y por qué es estructural',
            'Explicar el trabajo como objetivación y afirmación del ser genérico',
            'Distinguir las cuatro formas del trabajo enajenado',
            'Explicar la alienación política, la religiosa y el fetichismo de la mercancía',
            'Aplicar la alienación a situaciones actuales'
        ]
    },

questions: [
  {
    id: 'marx_001',
    question: "¿Qué afirma Marx en su tesis sobre Feuerbach?",
    answers: [
      { text: "Que la filosofía no sirve para nada.", correct: false,
        explanation: "Marx no rechaza la filosofía." },
      { text: "Que los filósofos solo interpretaron el mundo, y de lo que se trata es de transformarlo.", correct: true,
        explanation: "Correcto. Por eso pone el acento en la praxis." },
      { text: "Que hay que volver a los mitos.", correct: false,
        explanation: "No es su tesis." },
      { text: "Que el mundo no se puede cambiar.", correct: false,
        explanation: "Es lo contrario." },
      { text: "Que la filosofía debe estudiar solo a Dios.", correct: false,
        explanation: "No es su propuesta." }
    ],
    hint: "Interpretar y transformar.",
    difficulty: 'basico',
    topic: 'Marx'
  },
  {
    id: 'marx_002',
    question: "¿Qué es la alienación para Marx?",
    answers: [
      { text: "Un malestar psicológico individual, como la tristeza.", correct: false,
        explanation: "Marx dice que es algo histórico y estructural." },
      { text: "Que las creaciones humanas escapan al control de sus productores y se vuelven contra ellos como potencias extrañas.", correct: true,
        explanation: "Correcto. Lo que hacemos termina dominándonos." },
      { text: "Ser extranjero en otro país.", correct: false,
        explanation: "No es ese sentido." },
      { text: "Una enfermedad mental.", correct: false,
        explanation: "No es un diagnóstico médico." },
      { text: "Estar distraído.", correct: false,
        explanation: "No es eso." }
    ],
    hint: "Lo que hacemos nos domina.",
    difficulty: 'basico',
    topic: 'Alienación'
  },
  {
    id: 'marx_003',
    question: "¿Por qué Marx dice que el ser humano produce de manera «universal, libre y consciente»?",
    answers: [
      { text: "Porque produce solo lo que necesita para comer, como los animales.", correct: false,
        explanation: "Es lo contrario." },
      { text: "Porque puede transformar toda la naturaleza, crear sin necesidad inmediata y pensar su actividad antes de hacerla.", correct: true,
        explanation: "Correcto. Así se distingue de la abeja que hace su panal." },
      { text: "Porque todos los humanos trabajan en lo mismo.", correct: false,
        explanation: "No es el sentido." },
      { text: "Porque no necesita trabajar.", correct: false,
        explanation: "El trabajo es su actividad vital." },
      { text: "Porque trabaja solo de noche.", correct: false,
        explanation: "No tiene relación." }
    ],
    hint: "La abeja y el ser humano.",
    difficulty: 'intermedio',
    topic: 'Trabajo'
  },
  {
    id: 'marx_004',
    question: "Una carpintera termina una mesa y se reconoce en ella. ¿Qué concepto de Marx describe esto?",
    answers: [
      { text: "Fetichismo de la mercancía.", correct: false,
        explanation: "Eso oculta el trabajo; aquí se lo reconoce." },
      { text: "Objetivación: plasmar las propias capacidades en un objeto y reconocerse en él.", correct: true,
        explanation: "Correcto. Es la forma sana del trabajo." },
      { text: "Alienación política.", correct: false,
        explanation: "No se trata del Estado." },
      { text: "Autoexplotación.", correct: false,
        explanation: "No se trata de exigirse de más." },
      { text: "Opio del pueblo.", correct: false,
        explanation: "No se trata de la religión." }
    ],
    hint: "El producto como espejo.",
    difficulty: 'intermedio',
    topic: 'Objetivación'
  },
  {
    id: 'marx_005',
    question: "¿Qué significa «ser genérico» (Gattungswesen)?",
    answers: [
      { text: "Ser un producto sin marca.", correct: false,
        explanation: "Es un concepto filosófico." },
      { text: "Pertenecer a una especie capaz de cooperar conscientemente, crear y decidir sobre sí misma.", correct: true,
        explanation: "Correcto. El trabajo libre lo afirma." },
      { text: "Ser igual a todos en todo.", correct: false,
        explanation: "No es eso." },
      { text: "No tener identidad.", correct: false,
        explanation: "Es lo contrario." },
      { text: "Ser un animal sin conciencia.", correct: false,
        explanation: "Es lo que nos distingue de los animales." }
    ],
    hint: "Especie que coopera y crea.",
    difficulty: 'avanzado',
    topic: 'Ser genérico'
  },
  {
    id: 'marx_006',
    question: "En el capitalismo, según Marx, ¿quién es dueño de los medios de producción?",
    answers: [
      { text: "Los obreros.", correct: false,
        explanation: "Ellos solo tienen su fuerza de trabajo." },
      { text: "El Estado, siempre.", correct: false,
        explanation: "Marx habla de propiedad privada." },
      { text: "Los capitalistas, que compran la fuerza de trabajo de los obreros a cambio de un salario.", correct: true,
        explanation: "Correcto. De ahí nace el trabajo enajenado." },
      { text: "Nadie.", correct: false,
        explanation: "Tienen dueños privados." },
      { text: "Las iglesias.", correct: false,
        explanation: "No es lo que plantea." }
    ],
    hint: "Propiedad privada.",
    difficulty: 'basico',
    topic: 'Capitalismo'
  },
  {
    id: 'marx_007',
    question: "Un obrero arma autos de alta gama que nunca podrá comprar. ¿Qué alienación muestra el ejemplo?",
    answers: [
      { text: "Alienación respecto del producto.", correct: true,
        explanation: "Correcto. Lo que fabrica no le pertenece y se vuelve un poder ajeno." },
      { text: "Alienación religiosa.", correct: false,
        explanation: "No se trata de la religión." },
      { text: "Alienación política.", correct: false,
        explanation: "No se trata del Estado." },
      { text: "Objetivación sana.", correct: false,
        explanation: "Al contrario." },
      { text: "Ninguna: es justo así.", correct: false,
        explanation: "Para Marx es alienación." }
    ],
    hint: "Lo que hago no es mío.",
    difficulty: 'intermedio',
    topic: 'Alienación del producto'
  },
  {
    id: 'marx_008',
    question: "«Solo me siento yo mismo cuando salgo del trabajo». ¿Qué alienación describe?",
    answers: [
      { text: "Del producto.", correct: false,
        explanation: "Habla de la actividad, no del objeto." },
      { text: "En la actividad: el trabajo se vive como obligación externa y no como afirmación de uno mismo.", correct: true,
        explanation: "Correcto. Fuera del trabajo se siente él mismo." },
      { text: "Del Estado.", correct: false,
        explanation: "No es la alienación política." },
      { text: "Religiosa.", correct: false,
        explanation: "No tiene que ver con la religión." },
      { text: "Ninguna.", correct: false,
        explanation: "Es la segunda alienación." }
    ],
    hint: "Trabajar como obligación.",
    difficulty: 'intermedio',
    topic: 'Alienación de la actividad'
  },
  {
    id: 'marx_009',
    question: "¿Por qué el trabajo enajenado aliena al ser humano de los otros?",
    answers: [
      { text: "Porque los obreros trabajan solos en su casa.", correct: false,
        explanation: "No es el motivo." },
      { text: "Porque el producto pertenece a otro, y las relaciones se vuelven de dominación, explotación y competencia.", correct: true,
        explanation: "Correcto. Se rompe la solidaridad." },
      { text: "Porque todos ganan lo mismo.", correct: false,
        explanation: "No es así." },
      { text: "Porque prohíbe hablar en el trabajo.", correct: false,
        explanation: "No es la idea." },
      { text: "Porque elimina las clases sociales.", correct: false,
        explanation: "Es al revés." }
    ],
    hint: "Del compañero al competidor.",
    difficulty: 'intermedio',
    topic: 'Alienación de los otros'
  },
  {
    id: 'marx_010',
    question: "Según Sobre la cuestión judía, ¿qué es la «doble vida» del ser humano moderno?",
    answers: [
      { text: "Tener dos trabajos.", correct: false,
        explanation: "No es ese sentido." },
      { text: "Ser ciudadano igual en el «cielo» político, pero individuo desigual y aislado en la «tierra» de la sociedad civil.", correct: true,
        explanation: "Correcto. Es la alienación política." },
      { text: "Vivir en dos países.", correct: false,
        explanation: "No es eso." },
      { text: "Tener una vida religiosa y otra laica.", correct: false,
        explanation: "Habla del Estado y la sociedad civil." },
      { text: "Usar dos nombres.", correct: false,
        explanation: "No tiene relación." }
    ],
    hint: "Iguales en la ley, desiguales en la vida.",
    difficulty: 'avanzado',
    topic: 'Alienación política'
  },
  {
    id: 'marx_011',
    question: "¿Qué quiso decir Marx con que la religión es el «opio del pueblo»?",
    answers: [
      { text: "Que es un veneno que alguien usa para engañar a propósito.", correct: false,
        explanation: "Marx no lo plantea así." },
      { text: "Que funciona como un analgésico: calma el sufrimiento real sin cambiar sus causas.", correct: true,
        explanation: "Correcto. Es también «el suspiro de la criatura oprimida»." },
      { text: "Que hay que prohibir todas las religiones.", correct: false,
        explanation: "Propone transformar el mundo que necesita ese consuelo." },
      { text: "Que la religión cura la pobreza.", correct: false,
        explanation: "La calma, no la cura." },
      { text: "Que los creyentes no piensan.", correct: false,
        explanation: "No es su argumento." }
    ],
    hint: "Analgésico, no cura.",
    difficulty: 'intermedio',
    topic: 'Alienación religiosa'
  },
  {
    id: 'marx_012',
    question: "¿Qué es el fetichismo de la mercancía?",
    answers: [
      { text: "Que las relaciones entre personas aparecen como relaciones entre cosas: precios y marcas.", correct: true,
        explanation: "Correcto. No vemos el trabajo humano detrás del producto." },
      { text: "Coleccionar zapatillas.", correct: false,
        explanation: "Es un concepto de El capital." },
      { text: "Un ritual de pueblos antiguos.", correct: false,
        explanation: "Marx usa la palabra como metáfora." },
      { text: "Fabricar mercancías a mano.", correct: false,
        explanation: "No es eso." },
      { text: "Regalar cosas.", correct: false,
        explanation: "No tiene relación." }
    ],
    hint: "Cosas que ocultan personas.",
    difficulty: 'avanzado',
    topic: 'Fetichismo'
  },
  {
    id: 'marx_013',
    question: "Para Byung-Chul Han, ¿qué es el «emprendedor de sí mismo»?",
    answers: [
      { text: "Un empresario que explota a otros.", correct: false,
        explanation: "Se explota a sí mismo." },
      { text: "Alguien que se autoexplota en nombre del éxito y termina agotado.", correct: true,
        explanation: "Correcto. La alienación se instala adentro, como cansancio." },
      { text: "Una persona que descansa mucho.", correct: false,
        explanation: "Es lo contrario." },
      { text: "Un obrero de fábrica del siglo XIX.", correct: false,
        explanation: "Habla del sujeto de hoy." },
      { text: "Alguien que no trabaja.", correct: false,
        explanation: "Trabaja de más." }
    ],
    hint: "Explotarse a uno mismo.",
    difficulty: 'intermedio',
    topic: 'Alienación hoy'
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
            'Marx': 1,
            'Alienación': 1,
            'Trabajo': 1,
            'Objetivación': 1,
            'Ser genérico': 1,
            'Capitalismo': 1,
            'Alienación del producto': 1,
            'Alienación de la actividad': 1,
            'Alienación de los otros': 1,
            'Alienación política': 1,
            'Alienación religiosa': 1,
            'Fetichismo': 1,
            'Alienación hoy': 1
        }
    }
};

// ========================================
// 🔧 VALIDACIÓN DEL TEMA
// ========================================

function validateTheme() {
    const requiredFields = ['id', 'title', 'questions'];
    const missingFields = requiredFields.filter(field => !MARX_ALIENACION_THEME[field]);
    if (missingFields.length > 0) {
        console.error(`❌ Faltan campos requeridos: ${missingFields.join(', ')}`);
        return false;
    }
    const invalidQuestions = MARX_ALIENACION_THEME.questions.filter((q, index) => {
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
    console.log('✅ Tema de Marx validado correctamente');
    return true;
}

function getThemeStats() {
    return {
        ...MARX_ALIENACION_THEME.stats,
        validationPassed: validateTheme(),
        loadTime: performance.now() - themeLoadStart
    };
}

if (!validateTheme()) {
    console.error('❌ Error al cargar el tema de Marx');
    throw new Error('Tema de Marx inválido');
}

console.log(`✅ Tema de Marx cargado: ${MARX_ALIENACION_THEME.questions.length} preguntas`);

if (typeof window !== 'undefined') {
    window.MARX_ALIENACION_THEME = MARX_ALIENACION_THEME;
}
