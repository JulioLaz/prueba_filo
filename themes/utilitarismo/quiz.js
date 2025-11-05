// ========================================
// 🎯 TEMA: UTILITARISMO - LA MAYOR FELICIDAD PARA EL MAYOR NÚMERO
// ========================================
// 📚 Unidad III: Ética - ¿Cómo debe comportarse el hombre?

console.log('🎯 Cargando tema: Utilitarismo - La mayor felicidad para el mayor número...');
const themeLoadStart = performance.now();

/**
 * Configuración del tema del Utilitarismo
 */
const UTILITARISMO_THEME = {
    id: 'utilitarismo',
    title: 'Utilitarismo: La mayor felicidad para el mayor Número de personas',
    description: 'Explora la ética consecuencialista de John Stuart Mill: placeres superiores e inferiores, imparcialidad moral y utilitarismo del acto vs. regla.',
    icon: '🎯',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    difficulty: 'intermedio',
    timeLimit: 50,
    contentFile: 'content/utilitarismo.html',

    // Metadata del tema
    metadata: {
        author: 'Cuestionarios de Filosofía',
        version: '1.0',
        lastUpdated: '2024-08-20',
        category: 'Filosofía Moral Moderna',
        prerequisites: [],
        learningObjectives: [
            'Comprender el Principio de la Mayor Felicidad como fundamento utilitarista',
            'Distinguir entre placeres superiores e inferiores según Mill',
            'Analizar el principio de imparcialidad en la ética utilitarista',
            'Evaluar las aplicaciones políticas y sociales del utilitarismo',
            'Diferenciar entre utilitarismo del acto y utilitarismo de la regla',
            'Examinar las implicaciones prácticas de la ética consecuencialista'
        ]
    },

    questions: [
        {
            id: 'utilitarismo_001',
            question: "¿Cuál es el fundamento central del utilitarismo según John Stuart Mill?",
            answers: [
                {
                    text: "La búsqueda de la virtud personal como el objetivo supremo y único de la existencia humana.",
                    correct: false,
                    explanation: "Esta sería la posición aristotélica de la ética de la virtud, no el utilitarismo."
                },
                {
                    text: "El cumplimiento estricto del deber moral, sin considerar las consecuencias prácticas de las acciones.",
                    correct: false,
                    explanation: "Esta descripción corresponde al deontologismo kantiano, no al utilitarismo."
                },
                {
                    text: "El Principio de la Mayor Felicidad: maximizar la felicidad para el mayor número de personas.",
                    correct: true,
                    explanation: "Correcto. El utilitarismo se basa en el Principio de la Mayor Felicidad, que busca las acciones que produzcan la mayor cantidad de bienestar para la mayor cantidad de personas."
                },
                {
                    text: "La realización y plenitud personal alcanzadas mediante el conocimiento y la contemplación constante.",
                    correct: false,
                    explanation: "Esta sería más bien la posición epicúrea sobre la vida contemplativa."
                },
                {
                    text: "El respeto y seguimiento de las leyes naturales que se consideran establecidas por una autoridad divina.",
                    correct: false,
                    explanation: "Esta posición correspondería a la ética del derecho natural, no al utilitarismo."
                }
            ],
            hint: "Piensa en el objetivo central del utilitarismo. ¿Qué debe maximizarse y para quiénes?",
            difficulty: 'basico',
            topic: 'Principio de la Mayor Felicidad'
        },

        {
            id: 'utilitarismo_002',
            question: "¿Cómo distingue Mill entre placeres superiores e inferiores?",
            answers: [
                {
                    text: "Los placeres superiores se caracterizan por generar una sensación física más intensa y duradera que los inferiores.",
                    correct: false,
                    explanation: "La distinción no se basa en intensidad física sino en el tipo de facultades involucradas."
                },
                {
                    text: "Los placeres inferiores son los que compartimos con otros animales, mientras que los superiores son exclusivos de los seres humanos y se relacionan con nuestras facultades mentales e intelectuales.",
                    correct: true,
                    explanation: "Exacto. Los placeres inferiores (comer, beber) son compartidos con animales, mientras que los superiores (amistad, arte, aprendizaje) son específicamente humanos."
                },
                {
                    text: "Los placeres superiores son aquellos que reciben aprobación y reconocimiento social, mientras que los inferiores son rechazados o ignorados.",
                    correct: false,
                    explanation: "La distinción no se basa en aprobación social sino en las facultades humanas involucradas."
                },
                {
                    text: "Los placeres superiores se diferencian de los inferiores porque su efecto y satisfacción perduran mucho más en el tiempo.",
                    correct: false,
                    explanation: "Aunque puede ser cierto en algunos casos, la duración no es el criterio distintivo principal."
                },
                {
                    text: "Los placeres superiores requieren un mayor gasto económico y recursos, lo que los hace inaccesibles para la mayoría.",
                    correct: false,
                    explanation: "El costo económico no es relevante para la distinción entre tipos de placeres."
                }
            ],
            hint: "¿Qué capacidades distinguen a los humanos de otros animales? ¿Qué placeres requieren estas capacidades específicamente humanas?",
            difficulty: 'intermedio',
            topic: 'Placeres superiores e inferiores'
        },

        {
            id: 'utilitarismo_003',
            question: "¿Qué significa la famosa frase de Mill 'es mejor ser un ser humano insatisfecho que un cerdo satisfecho'?",
            answers: [
                {
                    text: "Que los animales, por su naturaleza inferior, no pueden experimentar placeres significativos comparables a los humanos.",
                    correct: false,
                    explanation: "Mill no está haciendo un juicio sobre el valor moral de los animales, sino sobre la naturaleza de los placeres humanos."
                },
                {
                    text: "Que la insatisfacción constante es un estado deseable que todos deberíamos buscar en la vida.",
                    correct: false,
                    explanation: "No se trata de preferir la insatisfacción en general, sino de valorar los placeres superiores."
                },
                {
                    text: "Que nuestra capacidad para los placeres intelectuales y emocionales nos eleva por encima de la mera existencia física, incluso si esto conlleva cierta infelicidad.",
                    correct: true,
                    explanation: "Correcto. Mill argumenta que los placeres superiores tienen tal valor que es preferible experimentar cierta insatisfacción en su búsqueda que conformarse solo con placeres inferiores."
                },
                {
                    text: "Que los seres humanos deben rechazar por completo cualquier tipo de placer físico para alcanzar la verdadera felicidad.",
                    correct: false,
                    explanation: "Mill no propone evitar los placeres físicos, sino reconocer la superioridad de los placeres intelectuales."
                },
                {
                    text: "Que los humanos, debido a su complejidad, nunca pueden alcanzar el mismo nivel de satisfacción que los animales.",
                    correct: false,
                    explanation: "No se trata de imposibilidad, sino de preferencia por placeres de mayor calidad."
                }
            ],
            hint: "¿Qué tipo de placeres caracterizan la experiencia humana? ¿Por qué Mill considera que vale la pena cierta insatisfacción para acceder a ellos?",
            difficulty: 'intermedio',
            topic: 'Dignidad humana y placeres superiores'
        },

        {
            id: 'utilitarismo_004',
            question: "¿Por qué el utilitarismo NO es una forma de egoísmo según Mill?",
            answers: [
                {
                    text: "Porque el utilitarismo exige que las personas renuncien por completo a su propia felicidad en favor de los demás.",
                    correct: false,
                    explanation: "El utilitarismo no prohíbe la felicidad personal, sino que la incluye en un cálculo más amplio."
                },
                {
                    text: "Porque exige una imparcialidad estricta: no debemos dar peso especial a nuestra propia felicidad por encima de la de los demás.",
                    correct: true,
                    explanation: "Perfecto. El utilitarismo requiere actuar como un 'espectador imparcial', considerando la felicidad de todos los afectados de manera equitativa."
                },
                {
                    text: "Porque el utilitarismo considera que la felicidad personal es irrelevante y solo importa el bienestar ajeno.",
                    correct: false,
                    explanation: "El utilitarismo incluye la felicidad propia en el cálculo, pero no le da prioridad especial."
                },
                {
                    text: "Porque condena cualquier acción que beneficie al individuo, incluso si no perjudica a nadie más.",
                    correct: false,
                    explanation: "Los placeres individuales no son condenados, sino incluidos en el cálculo de bienestar general."
                },
                {
                    text: "Porque se centra exclusivamente en las intenciones y motivos de las acciones, ignorando sus consecuencias.",
                    correct: false,
                    explanation: "Esta descripción correspondería más al deontologismo; el utilitarismo sí se basa en consecuencias."
                }
            ],
            hint: "¿Cómo debe tratar un utilitarista su propia felicidad en comparación con la de otros? ¿Qué significa ser un 'espectador imparcial'?",
            difficulty: 'intermedio',
            topic: 'Principio de imparcialidad'
        },

        {
            id: 'utilitarismo_005',
            question: "¿Cómo se aplica el utilitarismo al diseño de políticas públicas y sistemas sociales?",
            answers: [
                {
                    text: "Las políticas públicas deben diseñarse basándose en costumbres y tradiciones históricas sin cuestionar su impacto actual.",
                    correct: false,
                    explanation: "El utilitarismo evalúa políticas por sus consecuencias presentes, no por tradición histórica."
                },
                {
                    text: "Las leyes e instituciones deben evaluarse en función de si maximizan la felicidad colectiva.",
                    correct: true,
                    explanation: "Correcto. Para el utilitarismo, las políticas públicas son herramientas que deben juzgarse por su capacidad de producir el mayor bienestar para la sociedad."
                },
                {
                    text: "Los gobiernos deben abstenerse de intervenir en la vida de los ciudadanos para garantizar la libertad individual.",
                    correct: false,
                    explanation: "El utilitarismo puede justificar intervención gubernamental si produce mayor felicidad general."
                },
                {
                    text: "Las políticas deben priorizar los derechos individuales absolutos, sin considerar el bienestar de la mayoría.",
                    correct: false,
                    explanation: "Esta posición sería más liberal-deontológica; el utilitarismo considera el bienestar colectivo."
                },
                {
                    text: "Las políticas sociales deben estar dirigidas a beneficiar solo a los grupos más influyentes y poderosos de la sociedad.",
                    correct: false,
                    explanation: "El utilitarismo busca el bienestar de todos, no solo de grupos específicos."
                }
            ],
            hint: "¿Cuál debe ser el criterio para evaluar leyes e instituciones desde una perspectiva utilitarista? ¿Qué objetivo deben cumplir?",
            difficulty: 'intermedio',
            topic: 'Utilitarismo político y social'
        },

        {
            id: 'utilitarismo_006',
            question: "Según Mill, ¿por qué la educación universal es importante desde una perspectiva utilitarista?",
            answers: [
                {
                    text: "Porque la educación garantiza un aumento significativo en los ingresos y la estabilidad económica de las personas.",
                    correct: false,
                    explanation: "Aunque puede tener efectos económicos, esta no es la razón utilitarista principal según Mill."
                },
                {
                    text: "Porque es una herramienta crucial para fomentar los placeres superiores y el progreso social.",
                    correct: true,
                    explanation: "Exacto. Mill veía la educación como medio para desarrollar la capacidad humana de experimentar placeres superiores y promover el bienestar social."
                },
                {
                    text: "Porque la educación universal es la única forma de eliminar por completo las desigualdades sociales y económicas.",
                    correct: false,
                    explanation: "Aunque puede reducir desigualdades, Mill no creía que la educación las eliminara completamente."
                },
                {
                    text: "Porque la educación es un fin en sí mismo y un deber moral que no depende de sus resultados prácticos.",
                    correct: false,
                    explanation: "Esta sería una justificación deontológica, no utilitarista."
                },
                {
                    text: "Porque facilita el control social y asegura que los ciudadanos sigan las normas establecidas sin cuestionarlas.",
                    correct: false,
                    explanation: "Mill no promovía la educación para crear obediencia ciega, sino desarrollo intelectual."
                }
            ],
            hint: "¿Qué tipo de placeres puede desarrollar la educación? ¿Cómo se relaciona esto con el progreso social según Mill?",
            difficulty: 'intermedio',
            topic: 'Educación y placeres superiores'
        },
        {
            id: 'utilitarismo_007',
            question: "¿Cuál es la diferencia entre utilitarismo del acto y utilitarismo de la regla?",
            answers: [
                {
                    text: "El utilitarismo del acto se limita a evaluar decisiones personales, mientras que el de la regla está diseñado exclusivamente para la toma de decisiones gubernamentales.",
                    correct: false,
                    explanation: "Ambos tipos pueden aplicarse tanto a individuos como a instituciones."
                },
                {
                    text: "El utilitarismo del acto evalúa las consecuencias de cada acto individual, mientras que el de la regla sigue reglas morales que generalmente promueven la mayor felicidad.",
                    correct: true,
                    explanation: "Perfecto. El del acto examina cada situación específica, mientras que el de la regla sigue principios que, en general, maximizan el bienestar."
                },
                {
                    text: "El utilitarismo del acto es una teoría moral más primitiva y menos sofisticada que el utilitarismo de la regla, que es más moderna y elaborada.",
                    correct: false,
                    explanation: "La distinción temporal no es relevante para entender la diferencia conceptual."
                },
                {
                    text: "El utilitarismo del acto justifica cualquier acción, como mentir, si produce un beneficio inmediato, mientras que el de la regla prohíbe mentir en todas las circunstancias.",
                    correct: false,
                    explanation: "Es más bien lo contrario: el del acto podría permitir mentir si produce mejor resultado, el de la regla seguiría la regla de no mentir."
                },
                {
                    text: "Ambos enfoques son esencialmente iguales en su aplicación práctica y solo se diferencian en la terminología utilizada por los filósofos.",
                    correct: false,
                    explanation: "Existe una diferencia fundamental en cómo abordan la toma de decisiones morales."
                }
            ],
            hint: "¿Cuándo evalúas las consecuencias? ¿En cada acto específico o siguiendo reglas generales que normalmente producen buenos resultados?",
            difficulty: 'intermedio',
            topic: 'Utilitarismo del acto vs regla'
        },

        {
            id: 'utilitarismo_008',
            question: "¿Por qué Mill se inclina más hacia el utilitarismo de la regla?",
            answers: [
                {
                    text: "Porque considera que las reglas morales son principios inmutables y universales que nunca deben ser cuestionados.",
                    correct: false,
                    explanation: "Mill no considera las reglas como absolutas, sino como generalmente útiles."
                },
                {
                    text: "Porque las reglas morales se han desarrollado históricamente porque, en la mayoría de los casos, su cumplimiento maximiza la felicidad.",
                    correct: true,
                    explanation: "Correcto. Mill ve las reglas morales como productos de la experiencia humana que generalmente conducen al mayor bienestar."
                },
                {
                    text: "Porque aplicar el utilitarismo de la regla es más sencillo y requiere menos esfuerzo que evaluar cada acto individualmente.",
                    correct: false,
                    explanation: "Aunque puede ser más práctico, esta no es la razón filosófica principal de Mill."
                },
                {
                    text: "Porque el utilitarismo de la regla elimina por completo la necesidad de considerar las consecuencias de las acciones.",
                    correct: false,
                    explanation: "Mill sigue siendo consecuencialista; las reglas se justifican por sus consecuencias generales."
                },
                {
                    text: "Porque las reglas morales provienen de una autoridad divina y, por lo tanto, deben ser obedecidas sin excepción.",
                    correct: false,
                    explanation: "Mill no basa la moralidad en autoridad divina sino en consecuencias para el bienestar humano."
                }
            ],
            hint: "¿Por qué existen reglas como 'no mentir' o 'no robar'? ¿Qué función cumplen a largo plazo en la sociedad?",
            difficulty: 'intermedio',
            topic: 'Justificación del utilitarismo de regla'
        },

        {
            id: 'utilitarismo_009',
            question: "¿Cuándo admite Mill que las reglas morales pueden tener excepciones?",
            answers: [
                {
                    text: "Nunca admite excepciones, ya que las reglas morales son absolutas y deben seguirse en todas las circunstancias.",
                    correct: false,
                    explanation: "Mill reconoce que pueden existir excepciones en situaciones extremas."
                },
                {
                    text: "Siempre que una persona lo desee o considere conveniente, sin necesidad de justificación adicional.",
                    correct: false,
                    explanation: "Las excepciones no dependen del deseo personal arbitrario."
                },
                {
                    text: "En situaciones extremas donde violar la regla produce un beneficio mucho mayor y previene un daño significativo.",
                    correct: true,
                    explanation: "Exacto. Mill admite excepciones cuando romper la regla produce claramente más bienestar que seguirla."
                },
                {
                    text: "Solo cuando las autoridades gubernamentales o instituciones legales lo autorizan formalmente.",
                    correct: false,
                    explanation: "Las excepciones no dependen de aprobación gubernamental sino de cálculo de consecuencias."
                },
                {
                    text: "Únicamente en casos que involucren la búsqueda o protección de placeres superiores, como el arte o la ciencia.",
                    correct: false,
                    explanation: "Las excepciones se basan en el cálculo general de bienestar, no solo en tipos específicos de placeres."
                }
            ],
            hint: "¿Qué debe suceder para que Mill considere romper una regla moral? ¿Qué tipo de situación lo justificaría?",
            difficulty: 'intermedio',
            topic: 'Excepciones a las reglas morales'
        },

        {
            id: 'utilitarismo_010',
            question: "¿Qué posición defendía Mill sobre la libertad de expresión desde una perspectiva utilitarista?",
            answers: [
                {
                    text: "Que solo deben expresarse públicamente las ideas que estén científicamente comprobadas y sean universalmente aceptadas.",
                    correct: false,
                    explanation: "Mill defendía la expresión incluso de ideas que consideramos incorrectas."
                },
                {
                    text: "Que la libre circulación de ideas, incluso incorrectas, es esencial para el progreso porque la verdad emerge del debate.",
                    correct: true,
                    explanation: "Perfecto. Mill argumentaba que el libre intercambio de ideas, incluso erróneas, beneficia a la sociedad al largo plazo porque permite que emerja la verdad."
                },
                {
                    text: "Que las ideas deben ser censuradas si resultan ofensivas o incómodas para la mayoría de la población.",
                    correct: false,
                    explanation: "Mill se oponía a la censura basada en la ofensa a la mayoría."
                },
                {
                    text: "Que solo las élites intelectuales y académicas deben tener derecho a la libertad de expresión completa.",
                    correct: false,
                    explanation: "Mill defendía la libertad de expresión para todos, no solo para élites."
                },
                {
                    text: "Que la libertad de expresión es un concepto irrelevante para el bienestar y el progreso social.",
                    correct: false,
                    explanation: "Mill consideraba la libertad de expresión crucial para el progreso y bienestar social."
                }
            ],
            hint: "¿Cómo se descubre la verdad según Mill? ¿Qué papel juega el debate y la confrontación de ideas en este proceso?",
            difficulty: 'intermedio',
            topic: 'Libertad de expresión utilitarista'
        },

        {
            id: 'utilitarismo_011',
            question: "¿Cómo justifica el utilitarismo las reformas legales que promueven la igualdad y reducen la pobreza?",
            answers: [
                {
                    text: "Porque la igualdad es un principio moral absoluto que debe perseguirse sin importar las consecuencias prácticas.",
                    correct: false,
                    explanation: "Esta sería una justificación deontológica, no utilitarista."
                },
                {
                    text: "Porque la miseria es una fuente de gran infelicidad, y reducirla aumenta el bienestar general.",
                    correct: true,
                    explanation: "Correcto. El utilitarismo justifica estas reformas porque la pobreza y desigualdad extrema causan sufrimiento significativo."
                },
                {
                    text: "Porque los ricos merecen ser castigados y despojados de sus bienes para compensar a los pobres.",
                    correct: false,
                    explanation: "El utilitarismo no se basa en castigo sino en maximización del bienestar."
                },
                {
                    text: "Porque es lo que manda la tradición religiosa y las enseñanzas de las principales instituciones morales.",
                    correct: false,
                    explanation: "Mill no basaba sus argumentos en tradición religiosa sino en consideraciones seculares de bienestar."
                },
                {
                    text: "Porque la igualdad económica absoluta siempre produce más felicidad que cualquier forma de desigualdad.",
                    correct: false,
                    explanation: "Aunque Mill favorece reducir pobreza, no necesariamente defiende igualdad económica total."
                }
            ],
            hint: "¿Qué efectos tiene la pobreza en el bienestar humano? ¿Cómo se relaciona esto con el objetivo utilitarista?",
            difficulty: 'basico',
            topic: 'Reformas sociales utilitaristas'
        },

        {
            id: 'utilitarismo_012',
            question: "¿Qué significa actuar como un 'espectador imparcial' en el utilitarismo?",
            answers: [
                {
                    text: "Observar las acciones y decisiones de los demás sin participar activamente en ellas ni tomar partido.",
                    correct: false,
                    explanation: "No se trata de observación pasiva sino de una perspectiva para la toma de decisiones."
                },
                {
                    text: "Sopesar las consecuencias de una acción para todos los involucrados de manera equitativa, sin dar peso especial a nuestros propios intereses.",
                    correct: true,
                    explanation: "Exacto. El 'espectador imparcial' evalúa todas las consecuencias objetivamente, tratando los intereses de cada persona con igual consideración."
                },
                {
                    text: "Seguir siempre las leyes y normas establecidas por la sociedad sin cuestionar su origen o efectos.",
                    correct: false,
                    explanation: "La imparcialidad utilitarista puede llevar a cuestionar leyes si no maximizan el bienestar."
                },
                {
                    text: "Nunca tomar partido en ningún conflicto moral o situación que implique decisiones difíciles.",
                    correct: false,
                    explanation: "El espectador imparcial sí toma decisiones, pero basadas en consideraciones objetivas de bienestar."
                },
                {
                    text: "Actuar únicamente según nuestras emociones, intuiciones y deseos inmediatos sin reflexión.",
                    correct: false,
                    explanation: "Esto sería lo opuesto a la imparcialidad racional del utilitarismo."
                }
            ],
            hint: "¿Cómo debe tratar un utilitarista los intereses de diferentes personas? ¿Qué perspectiva debe adoptar para ser verdaderamente imparcial?",
            difficulty: 'intermedio',
            topic: 'Espectador imparcial'
        }

    ],

    // Estadísticas del tema
    stats: {
        totalQuestions: 12,
        estimatedTime: 10, // minutos
        difficultyBreakdown: {
            basico: 2,
            intermedio: 10,
            avanzado: 0
        },
        topicBreakdown: {
            'Principio de la Mayor Felicidad': 1,
            'Placeres superiores e inferiores': 1,
            'Dignidad humana y placeres superiores': 1,
            'Principio de imparcialidad': 1,
            'Utilitarismo político y social': 1,
            'Educación y placeres superiores': 1,
            'Utilitarismo del acto vs regla': 1,
            'Justificación del utilitarismo de regla': 1,
            'Excepciones a las reglas morales': 1,
            'Libertad de expresión utilitarista': 1,
            'Reformas sociales utilitaristas': 1,
            'Espectador imparcial': 1
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
    console.log('🔍 Validando estructura del tema del Utilitarismo...');

    const requiredFields = ['id', 'title', 'questions'];
    const missingFields = requiredFields.filter(field => !UTILITARISMO_THEME[field]);

    if (missingFields.length > 0) {
        console.error(`❌ Faltan campos requeridos: ${missingFields.join(', ')}`);
        return false;
    }

    // Validar preguntas
    const invalidQuestions = UTILITARISMO_THEME.questions.filter((q, index) => {
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

    console.log('✅ Tema del Utilitarismo validado correctamente');
    return true;
}

/**
 * Obtiene estadísticas del tema
 * @returns {Object} Estadísticas detalladas
 */
function getThemeStats() {
    return {
        ...UTILITARISMO_THEME.stats,
        validationPassed: validateTheme(),
        loadTime: performance.now() - themeLoadStart
    };
}

// ========================================
// 🚀 INICIALIZACIÓN DEL TEMA
// ========================================

// Validar tema al cargar
if (!validateTheme()) {
    console.error('❌ Error al cargar el tema del Utilitarismo');
    throw new Error('Tema del Utilitarismo inválido');
}

const themeLoadEnd = performance.now();
console.log(`✅ Tema del Utilitarismo cargado exitosamente en ${(themeLoadEnd - themeLoadStart).toFixed(2)}ms`);
console.log(`📊 Estadísticas: ${UTILITARISMO_THEME.questions.length} preguntas, ${UTILITARISMO_THEME.stats.estimatedTime} min estimados`);

// Exportar tema para uso global
if (typeof window !== 'undefined') {
    window.UTILITARISMO_THEME = UTILITARISMO_THEME;
    console.log('🌐 Tema del Utilitarismo disponible globalmente');
}