// ========================================
// 🌀 TEMA: JEAN-PAUL SARTRE - JUEGO EN 4 NIVELES
// ========================================
// 📚 Unidad II: Antropología filosófica
// Niveles: (1) Caza de conceptos → (2) Síntesis de frases → (3) Mapa conceptual → (4) Quiz

const sartreGameLoadStart = performance.now();

/** Configuración extendida del tema de Sartre (con 4 niveles) */
const SARTRE_THEME = {
  id: 'sartre',
  title: 'Jean-Paul Sartre: El ser humano es libertad',
  description: 'Existencialismo: existencia precede a la esencia, libertad ineludible, angustia, desamparo, desesperación, mala fe y autenticidad.',
  icon: '🌀',
  gradient: 'linear-gradient(135deg, #222831 0%, #393e46 50%, #00adb5 100%)',
  difficulty: 'intermedio',
  timeLimit: 50,
  contentFile: 'content/sartre.html',

  // ─────────────────────────────────────────────────────────
  // NIVEL 1 · Caza de conceptos (lectura activa por párrafos)
  // ─────────────────────────────────────────────────────────
  conceptHunt: {
    instructions: 'Leé cada párrafo y “cazá” los conceptos clave tocando o seleccionando las palabras/fragmentos que mejor condensan la idea. Completá el contador para desbloquear la síntesis.',
    paragraphs: [
      {
        id: 'p1',
        text: 'La existencia precede a la esencia: primero existimos y, mediante nuestras elecciones, nos definimos; no hay naturaleza humana prefijada.',
        // términos esperados (para validar selección). Pueden ser palabras o frases cortas.
        keyTerms: ['existencia', 'esencia', 'elecciones', 'nos definimos', 'no hay naturaleza prefijada'],
        // sinónimos opcionales (para tolerancia)
        aliases: {
          'no hay naturaleza prefijada': ['sin esencia previa', 'sin naturaleza dada', 'no hay esencia prefijada']
        }
      },
      {
        id: 'p2',
        text: 'Estamos condenados a ser libres: aun cuando no elegimos explícitamente, elegimos; toda decisión implica responsabilidad.',
        keyTerms: ['condenados a ser libres', 'elegimos', 'responsabilidad', 'decisión'],
        aliases: {}
      },
      {
        id: 'p3',
        text: 'La facticidad nombra lo dado (cuerpo, historia, contexto) y la trascendencia es el proyecto con el que reinterpretamos y superamos esas condiciones.',
        keyTerms: ['facticidad', 'trascendencia', 'lo dado', 'proyecto', 'reinterpretar/superar'],
        aliases: {
          'reinterpretar/superar': ['reinterpreta', 'supera', 'relectura de lo dado', 'proyectar sobre lo dado']
        }
      },
      {
        id: 'p4',
        text: 'Angustia, desamparo y desesperación son afectos de la libertad: lucidez ante elegir, ausencia de valores garantizados “desde fuera” y actuar con lo que depende de mí.',
        keyTerms: ['angustia', 'desamparo', 'desesperación', 'afectos de la libertad', 'actuar con lo que depende de mí'],
        aliases: {}
      },
      {
        id: 'p5',
        text: 'La mala fe es autoengaño para negar la libertad refugiándose en roles o excusas; la autenticidad es asumir responsabilidad y sostener un proyecto propio.',
        keyTerms: ['mala fe', 'autoengaño', 'roles/excusas', 'autenticidad', 'proyecto propio'],
        aliases: {}
      }
    ],
    // Config general del nivel
    perParagraphTarget: 'all', // “all” = debe encontrar todos los términos listados
    allowGuesses: 2, // intentos errados permitidos por término antes de feedback más guiado
    scoring: {
      correct: 10,    // puntos por término cazado
      wrong: -2,      // penalidad por selección irrelevante
      completion: 10  // bonus por completar el párrafo
    }
  },

  // ─────────────────────────────────────────────────────────
  // NIVEL 2 · Síntesis: elegir la frase que condensa el párrafo
  // (Se desbloquea al completar los términos del párrafo)
  // ─────────────────────────────────────────────────────────
  synthesis: {
    instructions: 'Elegí la frase que mejor sintetiza el sentido del párrafo trabajado. Solo una opción es la más adecuada.',
    items: [
      {
        paragraphId: 'p1',
        options: [
          {
            text: 'La esencia humana fija determina nuestras elecciones.',
            correct: false,
            explanation: 'Contradice a Sartre: no hay esencia previa; elegimos y nos definimos.'
          },
          {
            text: 'Primero existimos y luego, eligiendo, nos definimos; no hay naturaleza prefijada.',
            correct: true,
            explanation: 'Síntesis adecuada del núcleo “existencia precede a esencia”.'
          },
          {
            text: 'Elegimos solo cuando la sociedad nos lo permite.',
            correct: false,
            explanation: 'Introduce determinismo social ajeno a la tesis central.'
          }
        ]
      },
      {
        paragraphId: 'p2',
        options: [
          {
            text: 'Podemos evitar toda elección si seguimos costumbres.',
            correct: false,
            explanation: 'Para Sartre, no elegir también es elegir.'
          },
          {
            text: 'Siempre elegimos y somos responsables de nuestras decisiones.',
            correct: true,
            explanation: 'Condensa libertad ineludible y responsabilidad.'
          },
          {
            text: 'La responsabilidad depende de la aprobación ajena.',
            correct: false,
            explanation: 'La responsabilidad no depende del reconocimiento de otros.'
          }
        ]
      },
      {
        paragraphId: 'p3',
        options: [
          {
            text: 'La facticidad elimina toda posibilidad de proyecto.',
            correct: false,
            explanation: 'Sartre sostiene que proyectamos sobre lo dado; no desaparece la libertad.'
          },
          {
            text: 'Facticidad es lo dado y trascendencia el proyecto que lo reinterpreta.',
            correct: true,
            explanation: 'Expresa fielmente la distinción.'
          },
          {
            text: 'Trascendencia es negar el cuerpo y el pasado.',
            correct: false,
            explanation: 'No es negación sino reinterpretación y superación situadas.'
          }
        ]
      },
      {
        paragraphId: 'p4',
        options: [
          {
            text: 'Angustia, desamparo y desesperación son patologías clínicas.',
            correct: false,
            explanation: 'Aquí son afectos existenciales de la libertad, no diagnósticos clínicos.'
          },
          {
            text: 'Son afectos que acompañan la libertad: lucidez, ausencia de garantías y actuar con lo controlable.',
            correct: true,
            explanation: 'Síntesis correcta del trío afectivo y su sentido.'
          },
          {
            text: 'El desamparo prueba que no hay valores posibles.',
            correct: false,
            explanation: 'No es nihilismo: los valores se crean en la elección.'
          }
        ]
      },
      {
        paragraphId: 'p5',
        options: [
          {
            text: 'La mala fe es admitir la libertad y la autenticidad negarla.',
            correct: false,
            explanation: 'Es al revés: mala fe niega la libertad; autenticidad la asume.'
          },
          {
            text: 'Mala fe: autoengaño que niega la libertad; autenticidad: asumir responsabilidad y sostener proyecto.',
            correct: true,
            explanation: 'Síntesis precisa de ambas nociones.'
          },
          {
            text: 'La autenticidad es hacer lo que quieran los otros.',
            correct: false,
            explanation: 'Autenticidad es proyecto propio responsable, no heteronomía.'
          }
        ]
      }
    ],
    scoring: {
      correct: 15,
      wrong: -3,
      completion: 15
    }
  },

  // ─────────────────────────────────────────────────────────
  // NIVEL 3 · Mapa conceptual (estructura guía a completar)
  // Desbloquea al terminar las síntesis. Aquí definimos “nodos”
  // y “relaciones” esperadas como referencia de evaluación.
  // ─────────────────────────────────────────────────────────
  conceptMap: {
    instructions: 'Organizá los conceptos cazados en un mapa: de “Existencia precede a esencia” se derivan libertad → responsabilidad → afectos (angustia, desamparo, desesperación); facticidad/trascendencia articulan el proyecto; mala fe vs. autenticidad orientan la ética.',
    nodes: [
      'Existencia precede a esencia',
      'Libertad',
      'Responsabilidad',
      'Facticidad',
      'Trascendencia (Proyecto)',
      'Angustia',
      'Desamparo',
      'Desesperación',
      'Mala fe',
      'Autenticidad',
      'Mirada del Otro'
    ],
    // relaciones esperadas (para feedback). No hace falta ser rígido; sirven de guía.
    expectedEdges: [
      ['Existencia precede a esencia', 'Libertad'],
      ['Libertad', 'Responsabilidad'],
      ['Responsabilidad', 'Angustia'],
      ['Responsabilidad', 'Desamparo'],
      ['Responsabilidad', 'Desesperación'],
      ['Facticidad', 'Trascendencia (Proyecto)'],
      ['Libertad', 'Mala fe'],
      ['Libertad', 'Autenticidad'],
      ['Libertad', 'Mirada del Otro']
    ],
    scoring: {
      correctLink: 5,     // por relación alineada con el modelo
      creativeLink: 2,    // por relación plausible no prevista
      completion: 20
    },
    completionCriteria: {
      minCoreLinks: 7 // número mínimo de relaciones “núcleo” para dar por completo
    }
  },

  // ─────────────────────────────────────────────────────────
  // NIVEL 4 · Quiz (10 ítems, como validación final)
  // ─────────────────────────────────────────────────────────
  questions: [
    {
      id: 'sartre_001',
      question: '¿Qué significa que “la existencia precede a la esencia”?',
      answers: [
        { text: 'Que hay una naturaleza humana fija que determina nuestras acciones.', correct: false, explanation: 'Sartre niega una esencia previa; nos definimos al elegir.' },
        { text: 'Que primero existimos y luego, con nuestras elecciones, nos definimos.', correct: true, explanation: 'Clave existencialista: no hay plan dado; el ser se hace en el actuar.' },
        { text: 'Que la biología decide completamente quiénes somos.', correct: false, explanation: 'Determinismo biológico rechazado por Sartre.' },
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
        { text: 'La absoluta autonomía sin límites externos.', correct: false, explanation: 'Negaría las condiciones reales de la existencia.' },
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

  // Estadísticas globales
  stats: {
    totalQuestions: 10,
    estimatedTime: 12, // minutos (agregamos 4 niveles: la sesión completa puede durar más)
    difficultyBreakdown: { basico: 4, intermedio: 6, avanzado: 0 },
    topicBreakdown: {
      'Existencia vs. esencia': 1,
      'Libertad y responsabilidad': 1,
      'Facticidad vs. proyecto': 2,
      'Angustia/Desamparo/Desesperación': 3,
      'Mala fe / Autenticidad': 2,
      'Ética existencial': 1
    }
  }
};

// ─────────────────────────────────────────────────────────
// 🔧 VALIDACIÓN DEL TEMA (estructura de los 4 niveles)
// ─────────────────────────────────────────────────────────

function validateSartreGameTheme() {
  console.log('🔍 Validando estructura del tema (4 niveles)…');

  // Campos básicos
  const required = ['id', 'title', 'contentFile', 'questions', 'conceptHunt', 'synthesis', 'conceptMap'];
  const missing = required.filter(f => !SARTRE_THEME[f]);
  if (missing.length) {
    console.error(`❌ Faltan campos requeridos: ${missing.join(', ')}`);
    return false;
  }

  // Nivel 1: Caza de conceptos
  const ch = SARTRE_THEME.conceptHunt;
  if (!Array.isArray(ch.paragraphs) || ch.paragraphs.length === 0) {
    console.error('❌ conceptHunt.paragraphs debe ser un array con al menos 1 ítem');
    return false;
  }
  const invalidCh = ch.paragraphs.some(p => !p.id || !p.text || !Array.isArray(p.keyTerms) || p.keyTerms.length === 0);
  if (invalidCh) {
    console.error('❌ Cada conceptHunt.paragraph debe tener id, text y keyTerms[]');
    return false;
  }

  // Nivel 2: Síntesis
  const syn = SARTRE_THEME.synthesis;
  if (!Array.isArray(syn.items) || syn.items.length !== ch.paragraphs.length) {
    console.warn('⚠️ synthesis.items debería corresponder 1:1 con conceptHunt.paragraphs');
  }
  const invalidSyn = syn.items.some(it => !it.paragraphId || !Array.isArray(it.options) || it.options.length < 3 || it.options.filter(o => o.correct).length !== 1);
  if (invalidSyn) {
    console.error('❌ Cada synthesis.item debe tener paragraphId, 3+ options y exactamente 1 correcta');
    return false;
  }

  // Nivel 3: Mapa conceptual
  const cm = SARTRE_THEME.conceptMap;
  if (!Array.isArray(cm.nodes) || cm.nodes.length < 6) {
    console.error('❌ conceptMap.nodes debe tener al menos 6 nodos');
    return false;
  }
  if (!Array.isArray(cm.expectedEdges) || cm.expectedEdges.some(e => !Array.isArray(e) || e.length !== 2)) {
    console.error('❌ conceptMap.expectedEdges debe ser una lista de pares [origen, destino]');
    return false;
  }

  // Nivel 4: Quiz
  const invalidQ = SARTRE_THEME.questions.some((q, i) => {
    if (!q.id || !q.question || !Array.isArray(q.answers) || q.answers.length !== 5) return true;
    const correct = q.answers.filter(a => a.correct === true);
    return correct.length !== 1 || !q.hint;
  });
  if (invalidQ) {
    console.error('❌ El quiz debe tener 10 preguntas, 5 opciones c/u y 1 correcta + hint');
    return false;
  }

  console.log('✅ Tema de Sartre (4 niveles) validado correctamente');
  return true;
}

function getSartreGameStats() {
  return {
    ...SARTRE_THEME.stats,
    levels: {
      conceptHunt: SARTRE_THEME.conceptHunt.paragraphs.length,
      synthesis: SARTRE_THEME.synthesis.items.length,
      conceptMapNodes: SARTRE_THEME.conceptMap.nodes.length,
      quiz: SARTRE_THEME.questions.length
    },
    validationPassed: validateSartreGameTheme(),
    loadTime: performance.now() - sartreGameLoadStart
  };
}

// ─────────────────────────────────────────────────────────
// 🚀 INICIALIZACIÓN
// ─────────────────────────────────────────────────────────
if (!validateSartreGameTheme()) {
  console.error('❌ Error al cargar el tema de Sartre (4 niveles)');
  throw new Error('Tema de Sartre inválido');
}

const sartreGameLoadEnd = performance.now();
console.log(`✅ Tema de Sartre (4 niveles) cargado en ${(sartreGameLoadEnd - sartreGameLoadStart).toFixed(2)}ms`);
console.log(`📊 Niveles: CH=${SARTRE_THEME.conceptHunt.paragraphs.length} · SYN=${SARTRE_THEME.synthesis.items.length} · MAP=${SARTRE_THEME.conceptMap.nodes.length} · QUIZ=${SARTRE_THEME.questions.length}`);

// Exportar al ámbito global para tu app
if (typeof window !== 'undefined') {
  window.SARTRE_THEME = SARTRE_THEME;
  window.getSartreGameStats = getSartreGameStats;
  console.log('🌐 Tema de Sartre (4 niveles) disponible globalmente');
}
