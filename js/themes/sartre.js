// ========================================
// 🌀 TEMA: JEAN-PAUL SARTRE - EL SER HUMANO ES LIBERTAD
// ========================================
// 📚 Unidad II: Antropología filosófica

const sartreThemeLoadStart = performance.now();

/** Configuración del tema de Sartre */
const SARTRE_THEME = {
  id: 'sartre',
  title: 'Jean-Paul Sartre: El ser humano es libertad',
  description: 'Existencia precede esencia, libertad ineludible, angustia, desamparo, desesperación, mala fe y autenticidad.',
  icon: '🌀',
  gradient: 'linear-gradient(135deg, #222831 0%, #393e46 50%, #00adb5 100%)',
  difficulty: 'intermedio',
  timeLimit: 30,
  contentFile: 'content/sartre.html',

  metadata: {
    author: 'Cuestionarios de Filosofía',
    version: '1.0',
    lastUpdated: '2025-08-22',
    category: 'Filosofía Contemporánea',
    prerequisites: ['antropologia_filosofica'],
    learningObjectives: [
      'Explicar “la existencia precede a la esencia”.',
      'Diferenciar facticidad y trascendencia.',
      'Comprender angustia, desamparo y desesperación.',
      'Identificar la mala fe y contraponerla a la autenticidad.',
      'Analizar el papel del Otro y la responsabilidad ética.'
    ]
  },

  // ========================== //
  // 🧩 PREGUNTAS (10 ítems)    //
  // ========================== //
  questions: [
    {
      id: 'sartre_001',
      question: '¿Qué significa que “la existencia precede a la esencia”?',
      answers: [
        { text: 'Que hay una naturaleza humana fija que determina nuestras acciones.', correct: false, explanation: 'Sartre niega una esencia previa; nos definimos al elegir.' },
        { text: 'Que primero existimos y luego, con nuestras elecciones, nos definimos.', correct: true, explanation: 'Clave existencialista: no hay plan dado; el ser se hace en el actuar.' },
        { text: 'Que la biología decide completamente quiénes somos.', correct: false, explanation: 'Sería determinismo biológico, rechazado por Sartre.' },
        { text: 'Que la sociedad escribe nuestra identidad sin margen de libertad.', correct: false, explanation: 'Sartre subraya la libertad frente a condicionamientos.' },
        { text: 'Que Dios asigna a cada uno su función esencial.', correct: false, explanation: 'Sartre niega determinismo teológico.' }
      ],
      hint: 'Primero existir, luego elegir y, al elegir, ser.',
      difficulty: 'basico',
      topic: 'Existencia vs. esencia'
    },
    {
      id: 'sartre_002',
      question: '“Estamos condenados a ser libres” implica que…',
      answers: [
        { text: 'Podemos evitar elegir si cedemos a las costumbres.', correct: false, explanation: 'No elegir también es elegir: no hay salida de la libertad.' },
        { text: 'Solo los actos legales son libres.', correct: false, explanation: 'La libertad no se reduce a legalidad/ilegalidad.' },
        { text: 'Siempre elegimos y somos responsables, incluso cuando decimos “no puedo”.', correct: true, explanation: 'La libertad es ineludible y conlleva responsabilidad.' },
        { text: 'Las circunstancias anulan toda decisión personal.', correct: false, explanation: 'Las condiciones existen, pero no eliminan la libertad.' },
        { text: 'La libertad depende de la aprobación social.', correct: false, explanation: 'No está sujeta al reconocimiento de otros.' }
      ],
      hint: 'Incluso la omisión es una forma de elección.',
      difficulty: 'intermedio',
      topic: 'Libertad y responsabilidad'
    },
    {
      id: 'sartre_003',
      question: 'En Sartre, ¿qué es la facticidad?',
      answers: [
        { text: 'El conjunto de condiciones dadas (cuerpo, historia, contexto) sobre las que proyecto mi vida.', correct: true, explanation: 'Facticidad = lo dado; no lo elijo, pero lo asumo y lo trasciendo.' },
        { text: 'La absoluta autonomía sin límites externos.', correct: false, explanation: 'Eso negaría las condiciones reales de la existencia.' },
        { text: 'La emoción de angustia ante la libertad.', correct: false, explanation: 'Eso es la angustia, no la facticidad.' },
        { text: 'La imposición social que elimina toda libertad.', correct: false, explanation: 'Sartre mantiene la libertad pese a lo social.' },
        { text: 'La esencia humana fijada por la razón.', correct: false, explanation: 'No hay esencia previa.' }
      ],
      hint: 'Piensa en lo que te “toca” de entrada.',
      difficulty: 'basico',
      topic: 'Facticidad vs. proyecto'
    },
    {
      id: 'sartre_004',
      question: '¿Qué es la trascendencia (proyecto) en Sartre?',
      answers: [
        { text: 'Negar toda limitación física.', correct: false, explanation: 'No se trata de negar lo dado, sino de proyectar sobre ello.' },
        { text: 'El plan con el que supero y reinterpreto mi facticidad mediante elecciones.', correct: true, explanation: 'Trascender = proyectar sentidos sobre lo dado.' },
        { text: 'Una vida mística superior sin relación con lo cotidiano.', correct: false, explanation: 'Es un concepto existencial, no místico.' },
        { text: 'Un mandato social que debo obedecer.', correct: false, explanation: 'El proyecto es mío, no heterónomo.' },
        { text: 'Una emoción pasajera de optimismo.', correct: false, explanation: 'No es un estado emocional.' }
      ],
      hint: 'Es cómo “juego” las cartas que me tocaron.',
      difficulty: 'intermedio',
      topic: 'Proyecto y elección'
    },
    {
      id: 'sartre_005',
      question: 'La angustia en Sartre se entiende mejor como…',
      answers: [
        { text: 'Miedo a un objeto externo peligroso.', correct: false, explanation: 'Eso sería temor; la angustia es ante mi libertad.' },
        { text: 'Conciencia de mi libertad y de que elijo para mí y propongo un modelo para todos.', correct: true, explanation: 'La angustia revela la responsabilidad radical del elegir.' },
        { text: 'Fobia clínica sin relación con decisiones.', correct: false, explanation: 'No es un diagnóstico clínico aquí.' },
        { text: 'Culpa religiosa por haber pecado.', correct: false, explanation: 'Sartre no se apoya en categorías religiosas.' },
        { text: 'Tristeza por el pasado que no vuelve.', correct: false, explanation: 'Es un fenómeno ético-existencial, no melancólico.' }
      ],
      hint: 'No es miedo a algo; es vértigo de elegir.',
      difficulty: 'intermedio',
      topic: 'Angustia'
    },
    {
      id: 'sartre_006',
      question: 'El “desamparo” (abandono) significa que…',
      answers: [
        { text: 'Existen valores dados por Dios que solo debo obedecer.', correct: false, explanation: 'Sartre niega un fundamento externo garantizado.' },
        { text: 'No hay manual externo definitivo; debemos crear valores con nuestras elecciones.', correct: true, explanation: 'Elegir es instituir valor en un mundo sin garantías.' },
        { text: 'Nada tiene valor posible en ninguna circunstancia.', correct: false, explanation: 'No es nihilismo; el valor se crea en el actuar.' },
        { text: 'Todo está determinado por la biología.', correct: false, explanation: 'Rechaza determinismos absolutos.' },
        { text: 'La moral es solo obediencia a la ley.', correct: false, explanation: 'La ética existencial apela a la decisión responsable.' }
      ],
      hint: 'Sin “tabla” externa, ¿quién decide?',
      difficulty: 'basico',
      topic: 'Desamparo'
    },
    {
      id: 'sartre_007',
      question: '“Desesperación” en Sartre invita a…',
      answers: [
        { text: 'Renunciar a actuar por falta de garantías.', correct: false, explanation: 'No propone inacción, sino responsabilidad realista.' },
        { text: 'Actuar solo con lo que depende de mí, sin confiarlo todo a factores externos.', correct: true, explanation: 'Limitarse a los medios que están bajo mi control.' },
        { text: 'Esperar siempre resultados perfectos.', correct: false, explanation: 'No hay promesa de éxito; hay acción responsable.' },
        { text: 'Apelar a milagros para completar mis proyectos.', correct: false, explanation: 'La apuesta es por la acción, no por milagros.' },
        { text: 'Dejar las decisiones en manos de expertos.', correct: false, explanation: 'La decisión es indelegable.' }
      ],
      hint: 'Control vs. incontrolable.',
      difficulty: 'intermedio',
      topic: 'Desesperación'
    },
    {
      id: 'sartre_008',
      question: 'La “mala fe” consiste en…',
      answers: [
        { text: 'Exagerar la libertad propia para dominar a otros.', correct: false, explanation: 'No trata de dominación, sino de autoengaño.' },
        { text: 'Autoengañarme para negar mi libertad y evadir responsabilidad.', correct: true, explanation: 'Ej.: “no tuve opción”, “solo soy mi rol”.' },
        { text: 'Actuar ilegalmente a sabiendas.', correct: false, explanation: 'No es un término jurídico.' },
        { text: 'Sentir angustia ante una decisión difícil.', correct: false, explanation: 'La angustia es lúcida; la mala fe la tapa.' },
        { text: 'Aceptar mis límites sin culpa.', correct: false, explanation: 'Aceptar límites puede ser auténtico, no mala fe.' }
      ],
      hint: 'Excusas que me convierten en cosa.',
      difficulty: 'basico',
      topic: 'Mala fe'
    },
    {
      id: 'sartre_009',
      question: 'La “autenticidad” implica…',
      answers: [
        { text: 'Cumplir reglas sin cuestionarlas.', correct: false, explanation: 'Eso puede ser heteronomía, no autenticidad.' },
        { text: 'Asumir mi libertad y responsabilidad, sosteniendo mi proyecto sin excusas.', correct: true, explanation: 'Autenticidad = hacerse cargo del elegir.' },
        { text: 'Decidir siempre en contra de la sociedad.', correct: false, explanation: 'No es rebeldía automática: es decisión propia.' },
        { text: 'Negar toda influencia del pasado.', correct: false, explanation: 'Se integra la facticidad; no se niega.' },
        { text: 'Buscar solo el reconocimiento de los otros.', correct: false, explanation: 'La mirada importa, pero no define mi proyecto.' }
      ],
      hint: 'Lo opuesto al autoengaño.',
      difficulty: 'intermedio',
      topic: 'Autenticidad'
    },
    {
      id: 'sartre_010',
      question: 'En el “caso del estudiante”, Sartre sugiere que…',
      answers: [
        { text: 'Existe una fórmula universal que resuelve todo dilema.', correct: false, explanation: 'No hay receta segura; debo decidir.' },
        { text: 'La ciencia puede calcular la mejor opción moral.', correct: false, explanation: 'La decisión es existencial, no técnica.' },
        { text: 'Debo elegir y, al hacerlo, crear valor y cargar con las consecuencias.', correct: true, explanation: 'La elección me constituye y propone un ejemplo para otros.' },
        { text: 'La tradición religiosa decide por mí.', correct: false, explanation: 'Rechaza determinismos teológicos.' },
        { text: 'Lo correcto es lo que hace la mayoría.', correct: false, explanation: 'No hay garantía en el número.' }
      ],
      hint: 'Elegir me define.',
      difficulty: 'intermedio',
      topic: 'Ética existencial'
    }
  ],

  // Estadísticas
  stats: {
    totalQuestions: 10,
    estimatedTime: 10,
    difficultyBreakdown: { basico: 4, intermedio: 6, avanzado: 0 },
    topicBreakdown: {
      'Existencia vs. esencia': 1,
      'Libertad y responsabilidad': 1,
      'Facticidad vs. proyecto': 2,
      'Angustia': 1,
      'Desamparo': 1,
      'Desesperación': 1,
      'Mala fe': 1,
      'Autenticidad': 1,
      'Ética existencial': 1
    }
  }
};

// ===============================
// 🔧 VALIDACIÓN DEL TEMA (JS)
// ===============================
function validateSartreTheme() {
  console.log('🔍 Validando estructura del tema de Sartre...');
  const required = ['id', 'title', 'questions'];
  const missing = required.filter(f => !SARTRE_THEME[f]);
  if (missing.length) {
    console.error(`❌ Faltan campos requeridos: ${missing.join(', ')}`);
    return false;
  }
  const bad = SARTRE_THEME.questions.filter((q, i) => {
    if (!q.id || !q.question || !q.answers || !q.hint) {
      console.error(`❌ Pregunta ${i + 1} inválida: faltan campos`);
      return true;
    }
    if (q.answers.length !== 5) {
      console.error(`❌ Pregunta ${i + 1}: debe tener exactamente 5 respuestas`);
      return true;
    }
    const ok = q.answers.filter(a => a.correct === true);
    if (ok.length !== 1) {
      console.error(`❌ Pregunta ${i + 1}: debe haber exactamente 1 respuesta correcta`);
      return true;
    }
    return false;
  });
  if (bad.length) {
    console.error(`❌ ${bad.length} preguntas inválidas encontradas`);
    return false;
  }
  console.log('✅ Tema de Sartre validado correctamente');
  return true;
}

function getSartreThemeStats() {
  return {
    ...SARTRE_THEME.stats,
    validationPassed: validateSartreTheme(),
    loadTime: performance.now() - sartreThemeLoadStart
  };
}

// ===============================
// 🚀 INICIALIZACIÓN
// ===============================
if (!validateSartreTheme()) {
  console.error('❌ Error al cargar el tema de Sartre');
  throw new Error('Tema de Sartre inválido');
}

const sartreThemeLoadEnd = performance.now();
console.log(`✅ Tema de Sartre cargado en ${(sartreThemeLoadEnd - sartreThemeLoadStart).toFixed(2)}ms`);
console.log(`📊 ${SARTRE_THEME.questions.length} preguntas, ${SARTRE_THEME.stats.estimatedTime} min estimados`);

if (typeof window !== 'undefined') {
  window.SARTRE_THEME = SARTRE_THEME;
  console.log('🌐 Tema de Sartre disponible globalmente');
}
