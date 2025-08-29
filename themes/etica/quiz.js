// ========================================
// 🧭 TEMA: ÉTICA Y MORAL (versión ampliada 8 opciones)
// ========================================
// 📚 Unidad III: ¿Cómo debe comportarse el ser humano?

console.log('🧭 Cargando tema: Ética y Moral (v2, 8 opciones)...');
const themeLoadStart = performance.now();

/**
 * Configuración del tema de Ética (ampliado según nuevo HTML)
 */
const ETICA_THEME = {
  id: 'etica',
  title: 'Ética y Moral',
  description: 'Marco conceptual (ética vs. moral, corrientes, criterios) y aplicación práctica (dilemas, principios, guía de decisión).',
  icon: '🧭',
  gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  difficulty: 'basico',
  timeLimit: 90,
  contentFile: 'content/etica.html',

  // Metadata del tema
  metadata: {
    author: 'Cuestionarios de Filosofía',
    version: '2.0',
    lastUpdated: '2025-08-29',
    category: 'Filosofía – Ética',
    prerequisites: [],
    learningObjectives: [
      'Distinguir ética (reflexión) y moral (práctica) con ejemplos claros',
      'Aplicar criterios múltiples: deber, consecuencias, virtudes, cuidado, justicia',
      'Identificar condiciones del juicio moral y errores frecuentes',
      'Resolver dilemas con guía de pasos y pruebas rápidas',
      'Reconocer posturas sobre libertad/determinismo y su impacto en la responsabilidad'
    ]
  },

  // ========================================
  // PREGUNTAS (8 opciones c/u: 1 correcta + 7 capciosas)
  // ========================================
  questions: [
    // --- CONCEPTUAL: Ética vs Moral ---
    {
      id: 'etica_001',
      question: "¿Cuál enuncia con mayor precisión la diferencia de nivel entre 'ética' y 'moral' según el marco conceptual?",
      answers: [
        { text: "La moral es el conjunto de normas vividas; la ética es la reflexión crítica que las fundamenta.", correct: true,
          explanation: "Ética = reflexión/fundamentación; Moral = práctica vivida de normas y juicios." },
        { text: "La ética es un código legal positivo y la moral son costumbres religiosas.", correct: false,
          explanation: "Confunde planos: la ética no es un código legal; la moral no es sólo religión." },
        { text: "La moral juzga ideas; la ética sólo describe hechos.", correct: false,
          explanation: "La ética también evalúa y justifica; no es meramente descriptiva." },
        { text: "La ética es innata y la moral es biológica.", correct: false,
          explanation: "Ambas se forman culturalmente; no son rasgos biológicos innatos." },
        { text: "La moral estudia principios universales; la ética dicta reglas cotidianas.", correct: false,
          explanation: "Está invertido: ética fundamenta; moral orienta la práctica cotidiana." },
        { text: "Ética y moral son idénticas en filosofía; no hay distinción útil.", correct: false,
          explanation: "La distinción de niveles es estándar para pensar mejor los problemas." },
        { text: "La ética se ocupa solo de la intención; la moral sólo del resultado.", correct: false,
          explanation: "Ambas consideran múltiples dimensiones del acto (intención, medios, fines)." },
        { text: "La moral es teoría y la ética es la práctica social compartida.", correct: false,
          explanation: "Otra inversión de roles. Moral = práctica; Ética = teoría/justificación." }
      ],
      hint: "Recordá: moral = práctica vivida; ética = reflexión y justificación de esa práctica.",
      difficulty: 'basico',
      topic: 'Ética vs Moral'
    },

    // --- CONCEPTUAL: Condiciones del juicio moral ---
    {
      id: 'etica_002',
      question: "Según el texto, ¿qué condiciones mínimas deben cumplirse para que un acto sea evaluable moralmente?",
      answers: [
        { text: "Que provenga de un agente libre y que tenga (o pueda tener) efectos sobre otras personas.", correct: true,
          explanation: "Libertad/agencia + relevancia interpersonal distinguen el juicio moral." },
        { text: "Que produzca felicidad y sea aprobado por la mayoría.", correct: false,
          explanation: "Popularidad y felicidad no son condiciones necesarias del juicio moral." },
        { text: "Que cumpla leyes positivas y causas naturales.", correct: false,
          explanation: "La legalidad no agota la moralidad; causas naturales no implican juicio moral." },
        { text: "Que sea público y espectacular.", correct: false,
          explanation: "La publicidad no es requisito; hay actos privados con impacto en otros." },
        { text: "Que exista arrepentimiento posterior.", correct: false,
          explanation: "El arrepentimiento no es condición para evaluar moralmente un acto." },
        { text: "Que el agente conozca exactamente todas las consecuencias futuras.", correct: false,
          explanation: "Basta previsión razonable; no se exige omnisciencia." },
        { text: "Que sea intencional y totalmente beneficioso.", correct: false,
          explanation: "La evaluación no exige que el acto sea 'beneficioso'." },
        { text: "Que haya consenso científico sobre su efecto.", correct: false,
          explanation: "La ciencia puede informar, pero el juicio moral es normativo." }
      ],
      hint: "Una condición pertenece al agente; la otra, al impacto en otros.",
      difficulty: 'basico',
      topic: 'Condiciones del juicio moral'
    },

    // --- CONCEPTUAL: Corrientes – Deontología ---
    {
      id: 'etica_003',
      question: "¿Qué rasgo distingue mejor la deontología kantiana frente a otras corrientes?",
      answers: [
        { text: "Evalúa la rectitud de la máxima según su posibilidad de universalización.", correct: true,
          explanation: "Kant: imperativo categórico y universalización de la máxima." },
        { text: "Valora sólo la emoción moral inmediata (sentimentalismo).", correct: false,
          explanation: "No reduce a emoción; se centra en deber y razón práctica." },
        { text: "Acepta violar derechos si aumenta el bienestar total.", correct: false,
          explanation: "Eso es un sesgo utilitarista, que Kant rechaza." },
        { text: "Considera que la virtud es indiferente para el juicio moral.", correct: false,
          explanation: "La rectitud de la voluntad es central; la virtud no es indiferente." },
        { text: "Sostiene que no existen deberes morales universales.", correct: false,
          explanation: "Kant afirma deberes universales." },
        { text: "Reemplaza razones por tradiciones culturales locales.", correct: false,
          explanation: "Al contrario: apela a principios racionales universales." },
        { text: "Define lo correcto por preferencia mayoritaria.", correct: false,
          explanation: "La mayoría no es criterio de validez moral para Kant." },
        { text: "Juzga el acto sólo por su efecto emocional en el agente.", correct: false,
          explanation: "Kant juzga por la máxima y el deber, no por emociones." }
      ],
      hint: "Pensá en el '¿y si todos hicieran lo mismo?'.",
      difficulty: 'intermedio',
      topic: 'Corrientes éticas'
    },

    // --- CONCEPTUAL: Corrientes – Utilitarismo ---
    {
      id: 'etica_004',
      question: "Una decisión utilitarista bien entendida se caracteriza por…",
      answers: [
        { text: "Maximizar el bienestar agregado y minimizar el daño total considerando consecuencias.", correct: true,
          explanation: "Bentham/Mill: utilidad total esperada." },
        { text: "Aplicar normas rígidas aunque empeoren todos los resultados.", correct: false,
          explanation: "Eso es deontología estricta, no utilitarismo." },
        { text: "Hacer lo que la tradición manda, sin evaluar efectos.", correct: false,
          explanation: "Criterio tradicionalista, no utilitarista." },
        { text: "Ignorar minorías si lo exige cualquier ley escrita.", correct: false,
          explanation: "Ley ≠ moral; además, el utilitarismo debe considerar todos los afectados." },
        { text: "Centrarse sólo en la intención del agente.", correct: false,
          explanation: "Utilitarismo mira consecuencias, no sólo intenciones." },
        { text: "Buscar el placer del agente por encima de todos los demás.", correct: false,
          explanation: "Eso sería egoísmo, no utilitarismo." },
        { text: "Elegir lo que se siente correcto sin análisis de impacto.", correct: false,
          explanation: "El utilitarismo exige cálculo / estimación de consecuencias." },
        { text: "Definir lo correcto por lo que hace la mayoría.", correct: false,
          explanation: "La mayoría no es el criterio; es el bienestar total." }
      ],
      hint: "Clave: efectos globales en todos los involucrados.",
      difficulty: 'intermedio',
      topic: 'Corrientes éticas'
    },

    // --- CONCEPTUAL: Virtud ---
    {
      id: 'etica_005',
      question: "La ética de la virtud (Aristóteles) enfatiza…",
      answers: [
        { text: "El desarrollo del carácter excelente mediante hábitos y prudencia (phronesis).", correct: true,
          explanation: "Virtudes, término medio, deliberación prudente." },
        { text: "Que sólo importan las leyes positivas vigentes.", correct: false,
          explanation: "Eso es legalismo, no virtud." },
        { text: "Que la moral es meramente subjetiva.", correct: false,
          explanation: "No reduce a subjetivismo." },
        { text: "Que el fin siempre justifica los medios.", correct: false,
          explanation: "Visión consecuencialista cruda; no es aristotélica." },
        { text: "Que la excelencia moral es innata y fija.", correct: false,
          explanation: "Se adquiere por hábito, no es innata." },
        { text: "Que la emoción reemplaza la razón en ética.", correct: false,
          explanation: "Aristóteles coordina razón y apetitos mediante virtud." },
        { text: "Que la justicia no es virtud relevante.", correct: false,
          explanation: "La justicia es virtud cardinal." },
        { text: "Que la prudencia es prescindible si hay reglas claras.", correct: false,
          explanation: "La prudencia es central para aplicar virtudes al caso." }
      ],
      hint: "Pensá en hábitos, excelencia y 'término medio' prudente.",
      difficulty: 'basico',
      topic: 'Corrientes éticas'
    },

    // --- CONCEPTUAL: Cuidado ---
    {
      id: 'etica_006',
      question: "La ética del cuidado (Gilligan, Noddings) aporta principalmente…",
      answers: [
        { text: "Atención a relaciones, vulnerabilidad y responsabilidad hacia el otro concreto.", correct: true,
          explanation: "Complementa enfoques abstractos con sensibilidad relacional." },
        { text: "Sustituir toda regla moral por emociones momentáneas.", correct: false,
          explanation: "No elimina reglas, incorpora atención al vínculo." },
        { text: "Negar la existencia de justicia.", correct: false,
          explanation: "No niega la justicia; la complementa con cuidado." },
        { text: "Reducir toda ética a utilidad cuantificable.", correct: false,
          explanation: "Eso sería utilitarismo, no cuidado." },
        { text: "Afirmar que el contexto no importa.", correct: false,
          explanation: "Justo lo contrario: el contexto relacional importa mucho." },
        { text: "Eliminar la noción de responsabilidad.", correct: false,
          explanation: "La refuerza en clave relacional." },
        { text: "Aislar al agente de sus vínculos sociales.", correct: false,
          explanation: "Enfatiza vínculos y dependencia mutua." },
        { text: "Definir el bien por mayoría de votos.", correct: false,
          explanation: "No es una ética de votación, sino de atención y respuesta." }
      ],
      hint: "Foco: relaciones y respuesta responsable a vulnerabilidad.",
      difficulty: 'basico',
      topic: 'Corrientes éticas'
    },

    // --- CONCEPTUAL: Contractualismo ---
    {
      id: 'etica_007',
      question: "¿Qué prueba mental caracteriza el contractualismo de Rawls?",
      answers: [
        { text: "Elegir principios de justicia tras un 'velo de ignorancia' sobre nuestra posición social.", correct: true,
          explanation: "Asegura imparcialidad y protección de los peor situados." },
        { text: "Maximizar el placer del gobernante ilustrado.", correct: false,
          explanation: "Confunde con paternalismo; no es Rawls." },
        { text: "Obedecer la costumbre local por encima de los derechos.", correct: false,
          explanation: "El contractualismo busca imparcialidad, no mera costumbre." },
        { text: "Evaluar sólo intenciones, nunca consecuencias.", correct: false,
          explanation: "Rawls se centra en principios de justicia estructural." },
        { text: "Elegir lo que convenga a la mayoría numerosa.", correct: false,
          explanation: "Mayoritarismo ≠ justicia imparcial." },
        { text: "Atender exclusivamente a la lealtad de grupo.", correct: false,
          explanation: "Rawls prioriza imparcialidad sobre favoritismos." },
        { text: "Aplicar el fin que justifica cualquier medio eficaz.", correct: false,
          explanation: "Contrario a la protección de derechos." },
        { text: "Definir virtudes personales sin reglas de distribución.", correct: false,
          explanation: "Rawls se ocupa de principios de justicia distributiva." }
      ],
      hint: "Imaginá diseñar reglas sin saber si serás rico/pobre, mayoría/minoría.",
      difficulty: 'intermedio',
      topic: 'Corrientes éticas'
    },

    // --- CONCEPTUAL: Pruebas rápidas / Criterios ---
    {
      id: 'etica_008',
      question: "¿Cuál de estas 'pruebas rápidas' NO aparece como criterio sugerido en el texto?",
      answers: [
        { text: "“¿Es legal?”", correct: false,
          explanation: "Sí aparece: legalidad es un chequeo básico." },
        { text: "“¿Podría querer que todos hicieran lo mismo?” (universalidad)", correct: false,
          explanation: "Sí, es clave (eco kantiano)." },
        { text: "“¿Me sentiría cómodo si se hiciera público?” (publicidad)", correct: false,
          explanation: "Sí, el test de la transparencia está." },
        { text: "“¿Respeta la dignidad de todos los involucrados?”", correct: false,
          explanation: "Sí, aparece explícitamente." },
        { text: "“¿Aumenta mis ingresos personales en el corto plazo?”", correct: true,
          explanation: "No es un criterio ético del texto; sería egoísta/economicista." },
        { text: "“¿Contribuye al bien común?”", correct: false,
          explanation: "Sí, aparece como criterio." },
        { text: "“¿Querría que me lo hicieran a mí?” (regla de oro)", correct: false,
          explanation: "Sí, está en el listado." },
        { text: "“¿Trata imparcialmente a todos los afectados?” (justicia)", correct: false,
          explanation: "Sí, la imparcialidad/justicia está contemplada." }
      ],
      hint: "Buscá la que introduce interés personal cortoplacista.",
      difficulty: 'basico',
      topic: 'Criterios de decisión'
    },

    // --- CONCEPTUAL: Pasos de decisión ---
    {
      id: 'etica_009',
      question: "Orden razonable de pasos para resolver un problema ético según el esquema del texto:",
      answers: [
        { text: "Describir → Identificar valores/opciones → Evaluar con criterios múltiples → Decidir/justificar → Mitigar daños.", correct: true,
          explanation: "Sintetiza exactamente los pasos sugeridos." },
        { text: "Decidir primero → Publicar en redes → Consultar leyes → Corregir si hay críticas → Repetir.", correct: false,
          explanation: "No corresponde a la guía del texto; es satírico." },
        { text: "Empezar por consecuencias → Ignorar deberes → Minimizar la justificación → Evitar responsabilidad.", correct: false,
          explanation: "Contradice el enfoque formativo." },
        { text: "Preguntar a la mayoría → Hacer lo más popular → Evitar análisis técnico.", correct: false,
          explanation: "Popularidad no es criterio ético suficiente." },
        { text: "Definir una emoción → Seguirla sin más → Culpar al contexto si sale mal.", correct: false,
          explanation: "Caricatura emotivista; no propone el texto." },
        { text: "Copiar el precedente más cercano → Asumir que siempre aplica igual.", correct: false,
          explanation: "El texto pide prudencia/ajuste al caso, no copia acrítica." },
        { text: "Pedir permiso legal → Concluir que es ético.", correct: false,
          explanation: "Legalidad no agota moralidad." },
        { text: "Buscar una máxima conveniente → Declararla universal sin examen.", correct: false,
          explanation: "La universalización exige prueba seria, no conveniencia." }
      ],
      hint: "Primero entendé los hechos y valores; recién después decidí y justificá.",
      difficulty: 'basico',
      topic: 'Método de decisión'
    },

    // --- CONCEPTUAL: Errores frecuentes ---
    {
      id: 'etica_010',
      question: "¿Qué enunciado ejemplifica una 'falacia de tradición' según el apartado de errores a evitar?",
      answers: [
        { text: "“Siempre se hizo así, por lo tanto está bien.”", correct: true,
          explanation: "Apelar a la tradición no justifica normativamente un acto." },
        { text: "“Si aumenta el bienestar total, cualquier medio vale.”", correct: false,
          explanation: "Eso es consecuencialismo crudo, otro error señalado." },
        { text: "“Nada es mejor ni peor: todo es relativo.”", correct: false,
          explanation: "Relativismo total: error distinto." },
        { text: "“Mi grupo primero, la ley después.”", correct: false,
          explanation: "Sesgo/favoritismo: error distinto." },
        { text: "“Es legal; por eso es ético.”", correct: false,
          explanation: "Equívoco entre legalidad y moralidad; error distinto." },
        { text: "“La intención buena siempre basta, aunque dañe a terceros.”", correct: false,
          explanation: "Ignora consecuencias y dignidad de otros." },
        { text: "“Está en redes, entonces es verdad.”", correct: false,
          explanation: "Falacia ad populum/autoridad mediática, no tradición." },
        { text: "“Me conviene; por eso es correcto.”", correct: false,
          explanation: "Egoísmo; no tradición." }
      ],
      hint: "Buscá la que confunde ‘antiguo’ con ‘correcto’.",
      difficulty: 'basico',
      topic: 'Falacias/errores'
    },

    // --- APLICADA: Dilema de Juan ---
    {
      id: 'etica_011',
      question: "En la opción de Juan que lleva al niño al hospital, ¿qué lectura encaja mejor con el marco conceptual?",
      answers: [
        { text: "Adhesión a un deber categórico de socorro: no abandonar a un herido aun con costo personal.", correct: true,
          explanation: "Prioriza deber de auxilio/dignidad del vulnerable (deontología/cuidado)." },
        { text: "Búsqueda del beneficio personal inmediato.", correct: false,
          explanation: "Ayudar al niño compromete intereses personales; no es egoísmo." },
        { text: "Prioridad absoluta de la tradición familiar sobre terceros.", correct: false,
          explanation: "Justamente sacrifica la despedida familiar por el herido." },
        { text: "Indiferencia prudente para evitar involucrarse.", correct: false,
          explanation: "Se involucra activamente; no hay indiferencia." },
        { text: "Aplicación del principio: todo vale si logro mi objetivo.", correct: false,
          explanation: "Niega medios ilícitos; prioriza deber." },
        { text: "Cumplimiento exclusivo de la ley positiva.", correct: false,
          explanation: "Más allá de la ley, es deber moral de auxilio." },
        { text: "Cálculo hedonista del placer privado.", correct: false,
          explanation: "No hay maximización de placer personal." },
        { text: "Relativismo total: cualquier decisión es igualmente válida.", correct: false,
          explanation: "Se justifica normativamente la ayuda por deber y dignidad." }
      ],
      hint: "Pensá en deberes hacia el vulnerable y dignidad de las personas.",
      difficulty: 'intermedio',
      topic: 'Dilemas morales'
    },

    // --- CONCEPTUAL: Libertad/Determinismo (Sartre/Fromm/Skinner) ---
    {
      id: 'etica_012',
      question: "¿Qué inferencia es compatible con la tesis sartreana de que estamos 'condenados a ser libres'?",
      answers: [
        { text: "Somos responsables de inventar y sostener nuestros valores, incluso cuando no elegimos explícitamente.", correct: true,
          explanation: "En Sartre, no hay moral pre-dada; no elegir es elegir." },
        { text: "La libertad es una ilusión: todo comportamiento está condicionado al 100%.", correct: false,
          explanation: "Eso se acerca a Skinner, no a Sartre." },
        { text: "La responsabilidad depende de la obediencia a la mayoría.", correct: false,
          explanation: "Sartre reivindica responsabilidad individual, no conformismo." },
        { text: "Las normas divinas preexistentes fundamentan la moral humana.", correct: false,
          explanation: "Sartre es existencialista ateo." },
        { text: "No hay responsabilidad moral si hay presión social.", correct: false,
          explanation: "Fromm matiza, pero no elimina la responsabilidad." },
        { text: "Sólo importan consecuencias numéricas del bienestar.", correct: false,
          explanation: "Eso es utilitarismo, no Sartre." },
        { text: "El contexto elimina por completo la libertad.", correct: false,
          explanation: "Fromm: condiciona, pero no anula; Sartre: libertad radical." },
        { text: "La intención es irrelevante para juzgar actos humanos.", correct: false,
          explanation: "La intención importa en múltiples marcos (deber, virtud, etc.)." }
      ],
      hint: "En Sartre, hasta la omisión es elección.",
      difficulty: 'intermedio',
      topic: 'Filosofías de la libertad'
    }
  ]
};

/**
 * Calcula estadísticas a partir de las preguntas
 */
function computeStats(theme) {
  const byDifficulty = {};
  const byTopic = {};
  theme.questions.forEach(q => {
    byDifficulty[q.difficulty] = (byDifficulty[q.difficulty] || 0) + 1;
    byTopic[q.topic] = (byTopic[q.topic] || 0) + 1;
  });
  return {
    totalQuestions: theme.questions.length,
    estimatedTime: Math.max(8, Math.ceil(theme.questions.length * 0.8)), // ~48s por pregunta ≈ 0.8 min
    difficultyBreakdown: byDifficulty,
    topicBreakdown: byTopic
  };
}

// asigna stats dinámicas
ETICA_THEME.stats = computeStats(ETICA_THEME);

// ========================================
// 🔧 VALIDACIÓN (actualizada a 8 opciones)
// ========================================

/**
 * Valida la estructura del tema
 * @returns {boolean} True si el tema es válido
 */
function validateTheme() {
  console.log('🔍 Validando estructura del tema (8 opciones)…');

  const requiredFields = ['id', 'title', 'questions'];
  const missingFields = requiredFields.filter(field => !ETICA_THEME[field]);

  if (missingFields.length > 0) {
    console.error(`❌ Faltan campos requeridos: ${missingFields.join(', ')}`);
    return false;
  }

  const EXPECTED_ANSWERS = 8;

  // Validar preguntas
  const invalidQuestions = ETICA_THEME.questions.filter((q, index) => {
    if (!q.id || !q.question || !q.answers || !q.hint) {
      console.error(`❌ Pregunta ${index + 1} inválida: faltan campos requeridos`);
      return true;
    }

    if (q.answers.length !== EXPECTED_ANSWERS) {
      console.error(`❌ Pregunta ${index + 1}: debe tener exactamente ${EXPECTED_ANSWERS} respuestas`);
      return true;
    }

    const correctAnswers = q.answers.filter(a => a.correct);
    if (correctAnswers.length !== 1) {
      console.error(`❌ Pregunta ${index + 1}: debe tener exactamente 1 respuesta correcta`);
      return true;
    }

    return false;
  });

  if (invalidQuestions.length > 0) {
    console.error(`❌ ${invalidQuestions.length} preguntas inválidas encontradas`);
    return false;
  }

  console.log('✅ Tema validado correctamente (8 opciones por pregunta)');
  return true;
}

/**
 * Obtiene estadísticas del tema
 * @returns {Object} Estadísticas detalladas
 */
function getThemeStats() {
  return {
    ...ETICA_THEME.stats,
    validationPassed: validateTheme(),
    loadTime: performance.now() - themeLoadStart
  };
}

// ========================================
// 🚀 INICIALIZACIÓN DEL TEMA
// ========================================

// Validar tema al cargar
if (!validateTheme()) {
  console.error('❌ Error al cargar el tema de Ética');
  throw new Error('Tema de Ética inválido');
}

const themeLoadEnd = performance.now();
console.log(`✅ Tema de Ética cargado exitosamente en ${(themeLoadEnd - themeLoadStart).toFixed(2)}ms`);
console.log(`📊 Estadísticas: ${ETICA_THEME.questions.length} preguntas, ~${ETICA_THEME.stats.estimatedTime} min estimados`);

// Exportar tema para uso global
if (typeof window !== 'undefined') {
  window.ETICA_THEME = ETICA_THEME;
  console.log('🌐 Tema de Ética disponible globalmente');
}
