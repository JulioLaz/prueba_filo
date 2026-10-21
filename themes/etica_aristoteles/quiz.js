// ========================================
// 🏛️ TEMA: ARISTÓTELES - LO BUENO ES LA FELICIDAD
// ========================================
// 📚 Unidad III: Ética - ¿Cómo debe comportarse el hombre?

const themeLoadStart = performance.now();

/**
 * Configuración del tema de Aristóteles
 */
const ETICA_ARISTOTELES_THEME  = {
    id: 'etica_aristoteles',
    title: 'Aristóteles: Lo Bueno es la Felicidad',
    description: 'Descubre la ética aristotélica: la felicidad como fin último, la virtud como término medio y la vida contemplativa.',
    icon: '🏛️',
    gradient: 'linear-gradient(135deg, #d4af37 0%, #ffd700 100%)',
    difficulty: 'intermedio',
    timeLimit: 50,
    contentFile: 'themes/etica_aristoteles/content.html',
    
    // Metadata del tema
    metadata: {
        author: 'Cuestionarios de Filosofía',
        version: '2.0', // 13 preguntas; definiciones unificadas con el material (perfecto/autosuficiente)
        lastUpdated: '2026-10-21',
        category: 'Filosofía Clásica',
        prerequisites: ['etica'],
        learningObjectives: [
            'Comprender el concepto aristotélico de felicidad como fin último',
            'Analizar la cadena de fines en los actos humanos',
            'Distinguir entre placeres, honores, riquezas y sabiduría',
            'Entender la virtud como término medio entre extremos',
            'Valorar la vida contemplativa y la búsqueda de sabiduría'
        ]
    },
    
questions: [
  {
    id: 'aristoteles_001',
    question: "Según Aristóteles, ¿por qué es necesario que exista un fin último en la cadena de fines que conforman nuestra vida?",
    answers: [
      { text: "Porque sin un fin último la cadena de medios sería un regreso infinito, y nuestra actividad quedaría vacía de sentido.", correct: true,
        explanation: "Correcto. Si todo fin fuera solo un medio para otro, nunca llegaríamos a algo que valga por sí mismo y la acción perdería su sentido." },
      { text: "Porque así lo enseña la tradición religiosa, que debe respetarse para que la vida conserve un marco moral coherente.", correct: false,
        explanation: "Aristóteles basa su argumento en la razón, no en la tradición religiosa." },
      { text: "Porque los seres humanos son ambiciosos y siempre quieren más, lo cual da continuidad práctica a todas sus metas.", correct: false,
        explanation: "Esta respuesta confunde una motivación psicológica con la necesidad lógica del argumento aristotélico." },
      { text: "Porque sin un fin último no podríamos distinguir el bien del mal ni ordenar con coherencia las decisiones diarias.", correct: false,
        explanation: "Aunque relacionado, el argumento se centra en el sentido de la acción, no en la distinción moral." },
      { text: "Porque la sociedad necesita objetivos comunes para coordinar esfuerzos y asegurar la estabilidad y el progreso.", correct: false,
        explanation: "El argumento aristotélico se centra en la lógica de la acción, no en necesidades sociales." }
    ],
    hint: "Piensa en la cadena: estudiar para aprobar, aprobar para ingresar, ingresar para un buen trabajo… ¿Qué pasaría si nunca llegáramos a algo que se busque por sí mismo?",
    difficulty: 'intermedio',
    topic: 'Cadena de fines'
  },
  {
    id: 'aristoteles_002',
    question: "¿Cuáles son las dos condiciones que debe cumplir el Sumo Bien según Aristóteles?",
    answers: [
      { text: "Ser perfecto (se busca siempre por sí mismo, nunca como medio) y autosuficiente (por sí solo hace plena la vida).", correct: true,
        explanation: "Correcto. El Sumo Bien es perfecto porque no es medio para nada más, y autosuficiente porque basta para una vida plena sin depender de otros." },
      { text: "Ser material (vinculado a bienes concretos) y espiritual (relativo al alma y a sus valores más profundos).", correct: false,
        explanation: "Aristóteles no plantea el Sumo Bien en términos de material y espiritual." },
      { text: "Ser individual (centrado en cada persona) y social (orientado al bien común de toda la comunidad).", correct: false,
        explanation: "Aunque la ética y la política están unidas, estas no son las dos condiciones del Sumo Bien." },
      { text: "Ser racional (fundado en la razón) y emocional (sustentado en los afectos personales y la sensibilidad).", correct: false,
        explanation: "La razón es central, pero estas no son las dos condiciones del Sumo Bien." },
      { text: "Ser universal (válido para todas las personas) y eterno (permanente en el tiempo, sin cambio ni deterioro).", correct: false,
        explanation: "Aristóteles no define el Sumo Bien como universal y eterno, sino como perfecto y autosuficiente." }
    ],
    hint: "El Sumo Bien no debe ser medio para otra cosa y, una vez alcanzado, no debe faltarnos nada. ¿Cómo se llaman esas dos condiciones?",
    difficulty: 'intermedio',
    topic: 'Sumo Bien'
  },
  {
    id: 'aristoteles_003',
    question: "Según Aristóteles, ¿cuál es el fin último que todos los seres humanos buscan?",
    answers: [
      { text: "El placer y la gratificación de los sentidos, que brindan satisfacción inmediata y guían nuestras elecciones.", correct: false,
        explanation: "Aristóteles rechaza el placer como fin último: apela a lo que compartimos con los animales." },
      { text: "Los honores y el reconocimiento social, que confirman el mérito personal y otorgan prestigio ante los demás.", correct: false,
        explanation: "Los honores dependen de otros, así que no pueden ser el fin último." },
      { text: "Las riquezas y la capacidad de comprar lo que deseamos, que dan seguridad material y muchas oportunidades.", correct: false,
        explanation: "La riqueza es solo un medio para conseguir otras cosas." },
      { text: "La felicidad (eudaimonía), que se desea por sí misma y no como medio, y a la que se ordenan todos los demás fines.", correct: true,
        explanation: "Correcto. La felicidad es el único fin que buscamos por sí mismo; todo lo demás lo buscamos por ella." },
      { text: "El poder y la capacidad de controlar a otros, que aseguran influencia y dominio efectivo en la vida pública.", correct: false,
        explanation: "El poder, como la riqueza, es un medio y depende de los demás." }
    ],
    hint: "¿Qué buscamos que no sea un medio para otra cosa? Si preguntamos «¿para qué?» una y otra vez, ¿dónde termina la respuesta?",
    difficulty: 'basico',
    topic: 'Felicidad como fin último'
  },
  {
    id: 'aristoteles_004',
    question: "¿Por qué rechaza Aristóteles el placer como verdadera felicidad?",
    answers: [
      { text: "Porque el placer es inmoral y corrompe el alma humana, desviando las acciones y arruinando el carácter.", correct: false,
        explanation: "Aristóteles no considera que el placer sea malo en sí mismo; incluso puede acompañar la vida virtuosa." },
      { text: "Porque, aunque se busca por sí mismo, apela a lo que compartimos con los animales y puede esclavizarnos.", correct: true,
        explanation: "Correcto. El placer se desea por sí mismo, pero no es lo más elevado del ser humano y no nos hace autosuficientes: puede volvernos esclavos de los objetos." },
      { text: "Porque el placer es imposible de alcanzar para los seres humanos, ya que siempre falta algo para completarlo.", correct: false,
        explanation: "Aristóteles reconoce que el placer se alcanza; el problema es otro." },
      { text: "Porque el placer depende siempre de la aprobación de los demás y de objetos externos que no controlamos.", correct: false,
        explanation: "Depender de otros es el problema de los honores, no la crítica principal al placer." },
      { text: "Porque el placer es solo un medio para conseguir riquezas, un incentivo para acumular bienes materiales.", correct: false,
        explanation: "El placer sí se busca por sí mismo; la que es solo un medio es la riqueza." }
    ],
    hint: "Aristóteles acepta que el placer se busca por sí mismo, pero le preocupa qué parte del ser humano involucra. ¿Qué nos distingue de los animales?",
    difficulty: 'intermedio',
    topic: 'Crítica al placer'
  },
  {
    id: 'aristoteles_005',
    question: "¿Cuál es la función específica que distingue a los seres humanos de los demás animales según Aristóteles?",
    answers: [
      { text: "La capacidad de sentir emociones profundas, que nos conmueven y orientan nuestras decisiones cotidianas.", correct: false,
        explanation: "Sentir es algo que compartimos con los animales." },
      { text: "La capacidad de comunicarnos con los demás, mediante señales complejas y aprendizajes sociales compartidos.", correct: false,
        explanation: "Muchos animales se comunican; no es lo exclusivamente humano para Aristóteles." },
      { text: "La razón: respirar, nutrirse y sentir lo compartimos con los animales, pero razonar es propio del ser humano.", correct: true,
        explanation: "Correcto. Es el argumento de la función (ergon): lo propio del humano es la actividad racional." },
      { text: "La capacidad de crear herramientas y modificar el ambiente, transformando la naturaleza a nuestro favor.", correct: false,
        explanation: "La técnica es importante, pero el argumento del ergon apunta a la razón." },
      { text: "La capacidad de vivir en sociedades complejas, con normas comunes y roles para la convivencia ordenada.", correct: false,
        explanation: "Somos animales políticos, pero la función específica que nos distingue es la razón." }
    ],
    hint: "Aristóteles menciona que compartimos con los animales el respirar, alimentarse y sentir. ¿Qué capacidad es exclusivamente humana?",
    difficulty: 'basico',
    topic: 'Función humana específica'
  },
  {
    id: 'aristoteles_006',
    question: "Para Aristóteles, ¿la felicidad (eudaimonía) es un estado o una actividad?",
    answers: [
      { text: "Un estado de ánimo agradable que se alcanza en ciertos momentos de la vida y luego se conserva sin esfuerzo.", correct: false,
        explanation: "Aristóteles insiste en que la felicidad no es un estado pasivo ni un momento suelto." },
      { text: "Una actividad del alma conforme a la virtud, sostenida a lo largo de toda la vida y no un momento suelto.", correct: true,
        explanation: "Correcto. La eudaimonía es actividad: se ejerce viviendo y obrando bien durante toda una vida." },
      { text: "Un estado de tranquilidad total que se logra al eliminar todos los deseos y todas las pasiones humanas.", correct: false,
        explanation: "Aristóteles no propone eliminar las pasiones, sino ordenarlas con la razón." },
      { text: "Un premio que recibimos después de la muerte si durante la vida cumplimos con las normas de la comunidad.", correct: false,
        explanation: "La felicidad aristotélica se realiza en esta vida, como actividad." },
      { text: "Un sentimiento interior que no depende de lo que hacemos, sino del carácter con el que cada uno nació.", correct: false,
        explanation: "Para Aristóteles el carácter se forma con hábitos y la felicidad depende de cómo obramos." }
    ],
    hint: "El material dice que la felicidad es «actividad excelente de toda una vida, no un momento suelto de placer». ¿Qué implica eso?",
    difficulty: 'intermedio',
    topic: 'Eudaimonía como actividad'
  },
  {
    id: 'aristoteles_007',
    question: "¿Qué tipo de vida considera Aristóteles como la forma más alta de felicidad?",
    answers: [
      { text: "La vida activa dedicada a los negocios y al comercio, centrada en ganancias y en la expansión material.", correct: false,
        explanation: "Es una vida centrada en la riqueza, que es solo un medio." },
      { text: "La vida social dedicada a obtener honores y reconocimiento, buscando siempre la aprobación de los demás.", correct: false,
        explanation: "Los honores dependen de otros; no pueden ser la forma más alta de felicidad." },
      { text: "La vida hedonista dedicada a la búsqueda del placer, orientada a sensaciones intensas e inmediatas.", correct: false,
        explanation: "Es una vida que nos iguala a los animales, según Aristóteles." },
      { text: "La vida contemplativa (theoría), dedicada a buscar y contemplar la verdad, que es lo más divino en nosotros.", correct: true,
        explanation: "Correcto. La contemplación es la actividad más elevada, autosuficiente y continua. Para la mayoría, la vida práctica virtuosa es el camino realista." },
      { text: "La vida política dedicada al ejercicio del poder, enfocada en el mando y en las decisiones públicas.", correct: false,
        explanation: "La vida política virtuosa es valiosa, pero Aristóteles pone la contemplación por encima." }
    ],
    hint: "¿Qué tipo de vida ejercita al máximo nuestra capacidad racional y la búsqueda del conocimiento más elevado?",
    difficulty: 'basico',
    topic: 'Vida contemplativa'
  },
  {
    id: 'aristoteles_008',
    question: "¿Por qué la sabiduría vuelve al hombre 'autárquico' (autosuficiente) según Aristóteles?",
    answers: [
      { text: "Porque la sabiduría permite ganar mucho dinero y ser independiente en lo económico, con recursos propios.", correct: false,
        explanation: "La autarquía de la sabiduría no tiene que ver con el dinero." },
      { text: "Porque la sabiduría depende de cada uno de nosotros, no de otras personas, y no nos esclaviza a objetos.", correct: true,
        explanation: "Correcto. A diferencia de los honores (que dependen de otros) y del placer (que puede esclavizarnos), la sabiduría depende de uno mismo." },
      { text: "Porque la sabiduría nos da poder sobre los demás y nos sitúa por encima en la jerarquía social establecida.", correct: false,
        explanation: "La sabiduría no se define por el poder sobre otros." },
      { text: "Porque la sabiduría nos permite predecir el futuro y controlar los acontecimientos, evitando todo riesgo.", correct: false,
        explanation: "Aristóteles no atribuye a la sabiduría el poder de controlar el futuro." },
      { text: "Porque la sabiduría nos hace inmunes al sufrimiento y a las emociones, siempre serenos y distantes.", correct: false,
        explanation: "Aristóteles no propone eliminar las emociones." }
    ],
    hint: "Compara la sabiduría con los honores (que dependen de otros) y con el placer (que puede esclavizarnos a objetos). ¿Qué la hace diferente?",
    difficulty: 'intermedio',
    topic: 'Sabiduría y autarquía'
  },
  {
    id: 'aristoteles_009',
    question: "¿Qué son las virtudes éticas o del carácter según Aristóteles?",
    answers: [
      { text: "Reglas absolutas que nunca deben violarse bajo ninguna circunstancia, válidas siempre y sin excepciones.", correct: false,
        explanation: "Aristóteles no piensa la virtud como reglas rígidas, sino como un medio que exige juicio." },
      { text: "El término medio entre un exceso y un defecto, que se logra cuando la razón ordena los deseos e impulsos.", correct: true,
        explanation: "Correcto. Por ejemplo, la valentía es el medio entre la cobardía (defecto) y la temeridad (exceso)." },
      { text: "Los placeres que podemos disfrutar sin culpa porque son naturales y compatibles con nuestras inclinaciones.", correct: false,
        explanation: "Las virtudes no son placeres, aunque la persona virtuosa disfrute obrando bien." },
      { text: "Los conocimientos teóricos que debemos adquirir para ser sabios, fruto del estudio y de la instrucción.", correct: false,
        explanation: "Eso se acerca a las virtudes dianoéticas (de la razón), no a las del carácter." },
      { text: "Los honores que merecemos por nuestros logros, reconocidos públicamente por toda la comunidad cívica.", correct: false,
        explanation: "Los honores no son virtudes; dependen de otros." }
    ],
    hint: "Piensa en el ejemplo de la valentía. ¿Qué relación tiene con la cobardía (muy poco) y la temeridad (demasiado)?",
    difficulty: 'basico',
    topic: 'Virtudes éticas'
  },
  {
    id: 'aristoteles_010',
    question: "Según Aristóteles, ¿cómo se adquieren las virtudes éticas?",
    answers: [
      { text: "Se heredan de los padres al nacer, como el color de ojos, y por eso no dependen de nuestras acciones.", correct: false,
        explanation: "Para Aristóteles no nacemos virtuosos: el carácter se forma." },
      { text: "Se aprenden leyendo y estudiando teoría ética, aunque nunca se lleven a la práctica en la vida diaria.", correct: false,
        explanation: "No basta con conocer el bien: hay que practicarlo." },
      { text: "Por hábito: repitiendo actos buenos se forma el carácter, así como uno se hace justo haciendo cosas justas.", correct: true,
        explanation: "Correcto. Las virtudes éticas se adquieren por hábito; las dianoéticas, por enseñanza." },
      { text: "Se reciben de golpe en un momento de inspiración, sin necesidad de esfuerzo ni de práctica previa.", correct: false,
        explanation: "La virtud requiere práctica sostenida, no una inspiración repentina." },
      { text: "Las otorga la ley de la ciudad a quienes cumplen las normas, mediante un reconocimiento público oficial.", correct: false,
        explanation: "Las leyes ayudan a formar hábitos, pero la virtud la forma cada uno al obrar." }
    ],
    hint: "Nadie se vuelve buen músico sin tocar ni justo sin obrar con justicia. ¿Qué se necesita repetir?",
    difficulty: 'basico',
    topic: 'Hábito'
  },
  {
    id: 'aristoteles_011',
    question: "¿Qué es la prudencia (frónesis) en la ética aristotélica?",
    answers: [
      { text: "La habilidad de sacar ventaja en cada situación, aunque eso perjudique a los demás o al bien común.", correct: false,
        explanation: "La prudencia no es «viveza» egoísta: orienta al bien." },
      { text: "Una sabiduría práctica que delibera bien sobre qué hacer en cada situación concreta para vivir bien.", correct: true,
        explanation: "Correcto. La prudencia indica dónde está el término medio en cada caso, considerando el fin humano y las circunstancias." },
      { text: "Un conocimiento puramente teórico de las causas primeras, sin relación con las decisiones de la vida.", correct: false,
        explanation: "Eso describe mejor a la sabiduría (sofía), no a la prudencia." },
      { text: "La costumbre de evitar todos los riesgos y no actuar nunca hasta tener absoluta seguridad del resultado.", correct: false,
        explanation: "La prudencia no es pasividad: decide bien aun en situaciones inciertas." },
      { text: "La obediencia estricta a las normas escritas, sin considerar las circunstancias de cada caso particular.", correct: false,
        explanation: "La prudencia atiende justamente a las circunstancias concretas." }
    ],
    hint: "El término medio no es una fórmula matemática. ¿Qué virtud nos dice dónde está en cada caso concreto?",
    difficulty: 'intermedio',
    topic: 'Prudencia'
  },
  {
    id: 'aristoteles_012',
    question: "¿Por qué los honores no pueden ser el Sumo Bien según el análisis aristotélico?",
    answers: [
      { text: "Porque los honores son inmorales y corrompen a las personas, dañando el carácter y la virtud cívica.", correct: false,
        explanation: "Aristóteles no rechaza los honores por inmorales." },
      { text: "Porque dependen de que otros los otorguen y se buscan como reconocimiento: no son autosuficientes.", correct: true,
        explanation: "Correcto. Los honores dependen de los demás y se buscan para ser reconocidos, así que no cumplen las condiciones del Sumo Bien." },
      { text: "Porque los honores solo pueden alcanzarlos las personas muy ricas, excluyendo a quienes no tienen fortuna.", correct: false,
        explanation: "Esta no es la objeción aristotélica a los honores." },
      { text: "Porque los honores son temporales y finalmente se pierden, desvaneciéndose con el paso del tiempo.", correct: false,
        explanation: "Puede ser cierto, pero no es la crítica específica de Aristóteles." },
      { text: "Porque los honores generan envidia y conflictos sociales, provocando rivalidades y disputas frecuentes.", correct: false,
        explanation: "Aristóteles se centra en las condiciones del Sumo Bien, no en efectos sociales." }
    ],
    hint: "Recuerda las dos condiciones del Sumo Bien: ¿los honores dependen solo de nosotros o también de otros?",
    difficulty: 'intermedio',
    topic: 'Crítica a los honores'
  },
  {
    id: 'aristoteles_013',
    question: "¿En qué se diferencian las virtudes éticas de las virtudes dianoéticas?",
    answers: [
      { text: "Las éticas ordenan deseos y emociones y se forman por hábito; las dianoéticas perfeccionan la razón por enseñanza.", correct: true,
        explanation: "Correcto. Ejemplos de éticas: valentía, templanza, generosidad. Dianoéticas: ciencia, arte, entendimiento, sabiduría y prudencia." },
      { text: "Las éticas son propias de los filósofos y las dianoéticas de los ciudadanos comunes que trabajan en la polis.", correct: false,
        explanation: "Ambas familias son para todos; se distinguen por la parte del alma que perfeccionan." },
      { text: "Las éticas se heredan al nacer y las dianoéticas se compran con dinero pagando a buenos maestros.", correct: false,
        explanation: "Ninguna de las dos se hereda ni se compra." },
      { text: "No hay diferencia: son dos nombres distintos para el mismo conjunto de hábitos buenos del carácter.", correct: false,
        explanation: "Aristóteles las distingue claramente." },
      { text: "Las éticas regulan solo la vida política y las dianoéticas solo la vida familiar y las relaciones privadas.", correct: false,
        explanation: "La diferencia no es el ámbito de la vida, sino si perfeccionan el carácter o la razón." }
    ],
    hint: "Una familia de virtudes perfecciona el carácter; la otra, el pensamiento. ¿Cómo se adquiere cada una?",
    difficulty: 'intermedio',
    topic: 'Tipos de virtud'
  }
],

    
    // Estadísticas del tema
    stats: {
        totalQuestions: 13,
        estimatedTime: 10, // minutos
        difficultyBreakdown: {
            basico: 5,
            intermedio: 8,
            avanzado: 0
        },
        topicBreakdown: {
            'Cadena de fines': 1,
            'Sumo Bien': 1,
            'Felicidad como fin último': 1,
            'Crítica al placer': 1,
            'Función humana específica': 1,
            'Eudaimonía como actividad': 1,
            'Vida contemplativa': 1,
            'Sabiduría y autarquía': 1,
            'Virtudes éticas': 1,
            'Hábito': 1,
            'Prudencia': 1,
            'Crítica a los honores': 1,
            'Tipos de virtud': 1
        }
    }
};

// ========================================
// 🔧 FUNCIONES DE VALIDACIÓN DEL TEMA
// ========================================

/**
 * Valida la estructura del tema
 * @returns {boolean} True si el tema es válido
 */
function validateTheme() {
    console.log('🔍 Validando estructura del tema de Aristóteles...');
    
    const requiredFields = ['id', 'title', 'questions'];
    const missingFields = requiredFields.filter(field => !ETICA_ARISTOTELES_THEME [field]);
    
    if (missingFields.length > 0) {
        console.error(`❌ Faltan campos requeridos: ${missingFields.join(', ')}`);
        return false;
    }
    
    // Validar preguntas
    const invalidQuestions = ETICA_ARISTOTELES_THEME .questions.filter((q, index) => {
        if (!q.id || !q.question || !q.answers || !q.hint) {
            console.error(`❌ Pregunta ${index + 1} inválida: faltan campos requeridos`);
            return true;
        }
        
        if (q.answers.length !== 5) {
            console.error(`❌ Pregunta ${index + 1}: debe tener exactamente 5 respuestas`);
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
    
    console.log('✅ Tema de Aristóteles validado correctamente');
    return true;
}

/**
 * Obtiene estadísticas del tema
 * @returns {Object} Estadísticas detalladas
 */
function getThemeStats() {
    return {
        ...ETICA_ARISTOTELES_THEME .stats,
        validationPassed: validateTheme(),
        loadTime: performance.now() - themeLoadStart
    };
}

// ========================================
// 🚀 INICIALIZACIÓN DEL TEMA
// ========================================

// Validar tema al cargar
if (!validateTheme()) {
    console.error('❌ Error al cargar el tema de Aristóteles');
    throw new Error('Tema de Aristóteles inválido');
}

const themeLoadEnd = performance.now();
console.log(`✅ Tema de Aristóteles cargado exitosamente en ${(themeLoadEnd - themeLoadStart).toFixed(2)}ms`);
console.log(`📊 Estadísticas: ${ETICA_ARISTOTELES_THEME .questions.length} preguntas, ${ETICA_ARISTOTELES_THEME .stats.estimatedTime} min estimados`);

// Exportar tema para uso global
if (typeof window !== 'undefined') {
    window.ETICA_ARISTOTELES_THEME  = ETICA_ARISTOTELES_THEME ;
    console.log('🌐 Tema de Aristóteles disponible globalmente');
}