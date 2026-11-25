// ========================================
// 🎭 TEMA: ANTROPOCENTRISMO: EL HUMANO EN EL CENTRO DEL UNIVERSO
// ========================================
// 📚 Unidad III: Ética
// Cuestionario de 13 preguntas de 5 opciones; cada una se responde con el material
// (themes/antropocentrismo/content.html).
// Versión 2.0 (2026-11-25): 13 preguntas alineadas con el material v2.0 (antes 12).

const themeLoadStart = performance.now();

const ANTROPOCENTRISMO_THEME = {
    id: 'antropocentrismo',
    title: 'Antropocentrismo: El Humano en el Centro del Universo',
    description: 'Del teocentrismo al antropocentrismo: Protágoras, Renacimiento, humanismo, Pico della Mirandola, ciencia moderna, dominio de la naturaleza, dignidad y críticas.',
    icon: '🎭',
    gradient: 'linear-gradient(135deg, #d4af37 0%, #ffd700 100%)',
    difficulty: 'intermedio',
    timeLimit: 50,
    contentFile: 'themes/antropocentrismo/content.html',

    metadata: {
        author: 'Cuestionarios de Filosofía',
        version: '2.0',
        lastUpdated: '2026-11-24',
        category: 'Ética',
        prerequisites: [],
        learningObjectives: [
            'Explicar qué es el antropocentrismo y qué valor le da a la naturaleza',
            'Explicar el paso del teocentrismo al antropocentrismo y sus causas',
            'Reconocer las ideas del Renacimiento y del humanismo, y la dignidad según Pico',
            'Explicar la relación entre ciencia moderna y dominio de la naturaleza',
            'Analizar las críticas y las alternativas al antropocentrismo'
        ]
    },

questions: [
  {
    id: 'antro_001',
    question: "¿De qué palabras griegas viene «antropocentrismo»?",
    answers: [
      { text: "De «theós» (dios) y «kéntron» (centro).", correct: false,
        explanation: "Eso sería teocentrismo." },
      { text: "De «bíos» (vida) y «kéntron» (centro).", correct: false,
        explanation: "Eso sería biocentrismo." },
      { text: "De «ánthropos» (ser humano) y «kéntron» (centro).", correct: true,
        explanation: "Correcto. El ser humano en el centro." },
      { text: "De «hélios» (sol) y «kéntron» (centro).", correct: false,
        explanation: "Eso sería heliocentrismo." },
      { text: "De «oikos» (casa) y «lógos» (estudio).", correct: false,
        explanation: "Eso sería ecología." }
    ],
    hint: "Ser humano + centro.",
    difficulty: 'basico',
    topic: 'Concepto'
  },
  {
    id: 'antro_002',
    question: "Desde el antropocentrismo, ¿por qué tiene valor el mundo natural?",
    answers: [
      { text: "Porque vale por sí mismo.", correct: false,
        explanation: "Esa es la mirada biocéntrica." },
      { text: "Porque sirve a los intereses humanos.", correct: true,
        explanation: "Correcto. Tiene valor en la medida en que nos es útil." },
      { text: "Porque lo creó Dios.", correct: false,
        explanation: "Esa sería una razón teocéntrica." },
      { text: "No tiene ningún valor.", correct: false,
        explanation: "Tiene valor, pero instrumental." },
      { text: "Porque es más antiguo que el ser humano.", correct: false,
        explanation: "No es el argumento." }
    ],
    hint: "Útil para nosotros.",
    difficulty: 'basico',
    topic: 'Concepto'
  },
  {
    id: 'antro_003',
    question: "¿Qué filósofo griego afirmó que «el hombre es la medida de todas las cosas»?",
    answers: [
      { text: "Tales de Mileto.", correct: false,
        explanation: "Dijo que el agua es el principio." },
      { text: "Sócrates.", correct: false,
        explanation: "No es su frase." },
      { text: "Heráclito.", correct: false,
        explanation: "Habló del cambio." },
      { text: "Protágoras.", correct: true,
        explanation: "Correcto. Un sofista del siglo V a. C." },
      { text: "Epicuro.", correct: false,
        explanation: "Habló del placer." }
    ],
    hint: "Un sofista.",
    difficulty: 'basico',
    topic: 'Raíces griegas'
  },
  {
    id: 'antro_004',
    question: "¿Cómo era el lugar del ser humano en el teocentrismo medieval?",
    answers: [
      { text: "Era el centro de todo, por encima de Dios.", correct: false,
        explanation: "Dios era el centro." },
      { text: "No tenía ningún valor.", correct: false,
        explanation: "Tenía un lugar especial." },
      { text: "Era igual a los animales.", correct: false,
        explanation: "Estaba por encima de ellos." },
      { text: "Dios era el centro, pero el ser humano, creado a imagen de Dios, era la cumbre de la creación.", correct: true,
        explanation: "Correcto. Con un lugar fijo en un orden jerárquico." },
      { text: "Podía elegir libremente su lugar.", correct: false,
        explanation: "Eso es lo que dirá Pico en el Renacimiento." }
    ],
    hint: "Imagen de Dios.",
    difficulty: 'intermedio',
    topic: 'Teocentrismo'
  },
  {
    id: 'antro_005',
    question: "¿Cuál de estos hechos NO ayudó al paso del teocentrismo al antropocentrismo?",
    answers: [
      { text: "La imprenta de Gutenberg.", correct: false,
        explanation: "Sí ayudó: multiplicó los libros." },
      { text: "El crecimiento de la burguesía.", correct: false,
        explanation: "Sí ayudó." },
      { text: "Los viajes de exploración.", correct: false,
        explanation: "Sí ayudó: agrandaron el mundo." },
      { text: "La llegada de textos griegos a Italia.", correct: false,
        explanation: "Sí ayudó." },
      { text: "El fortalecimiento del orden feudal fijo.", correct: true,
        explanation: "Correcto: ese orden es el que se debilitó." }
    ],
    hint: "¿Qué se debilitó?",
    difficulty: 'intermedio',
    topic: 'El cambio'
  },
  {
    id: 'antro_006',
    question: "¿Qué mostraba la perspectiva en la pintura del Renacimiento?",
    answers: [
      { text: "Que el espacio se organiza desde el ojo del observador humano.", correct: true,
        explanation: "Correcto. El ser humano mira y ordena el mundo." },
      { text: "Que solo importa Dios.", correct: false,
        explanation: "No." },
      { text: "Que el cuerpo humano es feo.", correct: false,
        explanation: "Al contrario." },
      { text: "Que no hay que pintar personas.", correct: false,
        explanation: "Se pintaban retratos." },
      { text: "Que el arte debe ser anónimo.", correct: false,
        explanation: "Los artistas empezaron a firmar." }
    ],
    hint: "El punto de vista.",
    difficulty: 'intermedio',
    topic: 'Renacimiento'
  },
  {
    id: 'antro_007',
    question: "¿Qué representa el Hombre de Vitruvio de Leonardo da Vinci?",
    answers: [
      { text: "Un santo en oración.", correct: false,
        explanation: "No." },
      { text: "Una máquina voladora.", correct: false,
        explanation: "Leonardo dibujó máquinas, pero no es esta." },
      { text: "Las proporciones perfectas del cuerpo humano, como medida del mundo.", correct: true,
        explanation: "Correcto. Dentro de un círculo y un cuadrado." },
      { text: "Un mapa del cielo.", correct: false,
        explanation: "No." },
      { text: "Un animal mitológico.", correct: false,
        explanation: "No." }
    ],
    hint: "Círculo y cuadrado.",
    difficulty: 'basico',
    topic: 'Leonardo'
  },
  {
    id: 'antro_008',
    question: "¿Qué imagen usa Pico della Mirandola para el ser humano?",
    answers: [
      { text: "Un camaleón, escultor de sí mismo, que puede elegir lo que quiere ser.", correct: true,
        explanation: "Correcto. Su dignidad está en su libertad." },
      { text: "Una piedra, que nunca cambia.", correct: false,
        explanation: "Es lo contrario." },
      { text: "Una máquina.", correct: false,
        explanation: "Esa imagen es de Descartes, para los animales." },
      { text: "Un esclavo del destino.", correct: false,
        explanation: "No." },
      { text: "Un árbol con raíces fijas.", correct: false,
        explanation: "No: no tiene lugar fijo." }
    ],
    hint: "Cambia de color.",
    difficulty: 'intermedio',
    topic: 'Pico della Mirandola'
  },
  {
    id: 'antro_009',
    question: "¿Cuál es la paradoja de la revolución científica de Copérnico y Galileo?",
    answers: [
      { text: "Que confirmó que la Tierra es el centro.", correct: false,
        explanation: "Al contrario." },
      { text: "Que la Tierra dejó de ser el centro del universo, pero la razón humana pasó a ser el centro del conocimiento.", correct: true,
        explanation: "Correcto." },
      { text: "Que la razón dejó de importar.", correct: false,
        explanation: "Se volvió central." },
      { text: "Que la Iglesia aceptó enseguida el heliocentrismo.", correct: false,
        explanation: "Galileo fue condenado." },
      { text: "Que no cambió nada.", correct: false,
        explanation: "Cambió mucho." }
    ],
    hint: "Sale la Tierra, entra la razón.",
    difficulty: 'avanzado',
    topic: 'Revolución científica'
  },
  {
    id: 'antro_010',
    question: "¿Qué idea moderna resume la frase de Bacon «saber es poder»?",
    answers: [
      { text: "Que hay que respetar la naturaleza sin tocarla.", correct: false,
        explanation: "No." },
      { text: "Que el saber no sirve.", correct: false,
        explanation: "No." },
      { text: "Que el poder político es más importante que el saber.", correct: false,
        explanation: "No." },
      { text: "Que conocemos la naturaleza para dominarla y usarla como recurso.", correct: true,
        explanation: "Correcto. Descartes dirá: amos y poseedores de la naturaleza." },
      { text: "Que los animales saben más que los humanos.", correct: false,
        explanation: "No." }
    ],
    hint: "Amos y poseedores.",
    difficulty: 'intermedio',
    topic: 'Dominar la naturaleza'
  },
  {
    id: 'antro_011',
    question: "¿Qué diferencia hay entre el antropocentrismo fuerte y el débil?",
    answers: [
      { text: "El fuerte permite explotar la naturaleza sin límites; el débil pide cuidarla por nuestra salud y las generaciones futuras.", correct: true,
        explanation: "Correcto. En ambos, la naturaleza tiene valor instrumental." },
      { text: "El débil reconoce el valor intrínseco de la naturaleza.", correct: false,
        explanation: "Eso es el biocentrismo." },
      { text: "No hay diferencia.", correct: false,
        explanation: "Sí la hay." },
      { text: "El fuerte es religioso y el débil, científico.", correct: false,
        explanation: "No." },
      { text: "El débil no pone al ser humano en el centro.", correct: false,
        explanation: "Lo sigue poniendo." }
    ],
    hint: "Explotar o cuidar... por nosotros.",
    difficulty: 'avanzado',
    topic: 'Ética'
  },
  {
    id: 'antro_012',
    question: "¿Qué critican quienes hablan de androcentrismo y colonización?",
    answers: [
      { text: "Que el antropocentrismo cuidó demasiado la naturaleza.", correct: false,
        explanation: "No." },
      { text: "Que el ser humano universal era en la práctica varón y europeo, y dejó afuera a mujeres y pueblos originarios.", correct: true,
        explanation: "Correcto." },
      { text: "Que el Renacimiento no tuvo arte.", correct: false,
        explanation: "No." },
      { text: "Que todos fueron tratados con igual dignidad.", correct: false,
        explanation: "Es lo contrario." },
      { text: "Que la ciencia no avanzó.", correct: false,
        explanation: "No." }
    ],
    hint: "Universal solo en palabras.",
    difficulty: 'intermedio',
    topic: 'Exclusiones'
  },
  {
    id: 'antro_013',
    question: "¿Qué proponen la ética biocéntrica y el Buen Vivir frente al antropocentrismo?",
    answers: [
      { text: "Explotar más los recursos.", correct: false,
        explanation: "No." },
      { text: "Volver al teocentrismo.", correct: false,
        explanation: "No." },
      { text: "Reconocer el valor intrínseco de la vida y vivir en equilibrio y reciprocidad con la naturaleza.", correct: true,
        explanation: "Correcto." },
      { text: "Que solo importan los humanos.", correct: false,
        explanation: "Es lo que critican." },
      { text: "Abandonar toda ética.", correct: false,
        explanation: "Proponen otra ética." }
    ],
    hint: "Valor intrínseco y reciprocidad.",
    difficulty: 'avanzado',
    topic: 'Alternativas'
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
            'Concepto': 2,
            'Raíces griegas': 1,
            'Teocentrismo': 1,
            'El cambio': 1,
            'Renacimiento': 1,
            'Leonardo': 1,
            'Pico della Mirandola': 1,
            'Revolución científica': 1,
            'Dominar la naturaleza': 1,
            'Ética': 1,
            'Exclusiones': 1,
            'Alternativas': 1
        }
    }
};

// ========================================
// 🔧 VALIDACIÓN DEL TEMA
// ========================================

function validateTheme() {
    const requiredFields = ['id', 'title', 'questions'];
    const missingFields = requiredFields.filter(field => !ANTROPOCENTRISMO_THEME[field]);
    if (missingFields.length > 0) {
        console.error(`❌ Faltan campos requeridos: ${missingFields.join(', ')}`);
        return false;
    }
    const invalidQuestions = ANTROPOCENTRISMO_THEME.questions.filter((q, index) => {
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
    console.log('✅ Tema del antropocentrismo validado correctamente');
    return true;
}

function getThemeStats() {
    return {
        ...ANTROPOCENTRISMO_THEME.stats,
        validationPassed: validateTheme(),
        loadTime: performance.now() - themeLoadStart
    };
}

if (!validateTheme()) {
    console.error('❌ Error al cargar el tema del antropocentrismo');
    throw new Error('Tema del antropocentrismo inválido');
}

console.log(`✅ Tema del antropocentrismo cargado: ${ANTROPOCENTRISMO_THEME.questions.length} preguntas`);

if (typeof window !== 'undefined') {
    window.ANTROPOCENTRISMO_THEME = ANTROPOCENTRISMO_THEME;
}
