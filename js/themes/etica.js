// ========================================
// 🧭 TEMA: ÉTICA Y MORAL
// ========================================
// 📚 Unidad III: ¿Cómo debe comportarse el ser humano?

console.log('🧭 Cargando tema: Ética y Moral...');
const themeLoadStart = performance.now();

/**
 * Configuración del tema de Ética
 */
const ETICA_THEME = {
    id: 'etica',
    title: '🧭 Ética y Moral',
    description: 'Explora dilemas morales, libertad, responsabilidad y los grandes debates sobre cómo debemos actuar.',
    icon: '🧭',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    difficulty: 'basico',
    timeLimit: 60,
    contentFile: 'content/etica.html',
    
    // Metadata del tema
    metadata: {
        author: 'Cuestionarios de Filosofía',
        version: '1.0',
        lastUpdated: '2024-08-20',
        category: 'Filosofía Práctica',
        prerequisites: [],
        learningObjectives: [
            'Comprender la diferencia entre actos morales y fenómenos naturales',
            'Analizar dilemas éticos y toma de decisiones morales',
            'Conocer las principales corrientes sobre libertad y determinismo',
            'Identificar problemas éticos cotidianos y principios morales'
        ]
    },
    
    questions: [
        {
            id: 'etica_001',
            question: "En el dilema presentado, la situación de Juan ilustra una colisión entre dos deberes o responsabilidades. ¿Cuál de los siguientes principios éticos podría ser considerado predominante en la Solución n.º 1, donde Juan elige llevar al niño al hospital?",
            answers: [
                { 
                    text: "Prioridad de los lazos familiares sobre el bienestar de un desconocido.", 
                    correct: false,
                    explanation: "Esta opción no refleja la Solución n.º 1, donde Juan prioriza al niño herido."
                },
                { 
                    text: "Aplicación de una ética utilitarista que busca el mayor bien para el mayor número de personas.", 
                    correct: false,
                    explanation: "El utilitarismo calcularía consecuencias globales, no es el principio predominante aquí."
                },
                { 
                    text: "Adhesión a una norma moral absoluta que prohíbe el abandono de una persona herida.", 
                    correct: true,
                    explanation: "Correcto. Juan actúa según un principio moral categórico que prohíbe abandonar a alguien en peligro, independientemente de las consecuencias personales."
                },
                { 
                    text: "Un ejemplo de egoísmo ético, donde se prioriza la conciencia individual sobre el resultado de la acción.", 
                    correct: false,
                    explanation: "El egoísmo ético priorizaría el interés propio, no ayudar al niño a costa personal."
                },
                { 
                    text: "Una acción irresponsable, ya que no considera las consecuencias emocionales de no despedirse de su padre.", 
                    correct: false,
                    explanation: "Esta opción juzga la acción negativamente, no identifica el principio ético subyacente."
                }
            ],
            hint: "Considera la acción de Juan en la Solución n.º 1. Elige la opción que mejor describa la motivación subyacente para su comportamiento.",
            difficulty: 'basico',
            topic: 'Dilemas morales'
        },
        
        {
            id: 'etica_002',
            question: "¿Cuál es la diferencia fundamental que distingue los actos morales de los fenómenos naturales según el texto?",
            answers: [
                { 
                    text: "Los fenómenos naturales pueden ser considerados 'malos' en ciertas circunstancias, mientras que los actos humanos son siempre neutros.", 
                    correct: false,
                    explanation: "Incorrecto. Los fenómenos naturales no son moralmente evaluables, y los actos humanos sí pueden ser buenos o malos."
                },
                { 
                    text: "Los fenómenos naturales son intencionales, mientras que los actos morales son involuntarios.", 
                    correct: false,
                    explanation: "Es lo contrario: los fenómenos naturales carecen de intención, los actos morales la requieren."
                },
                { 
                    text: "Los actos morales suponen intenciones subjetivas y dependen de la libertad y la elección, mientras que los fenómenos naturales están determinados por causas invariables.", 
                    correct: true,
                    explanation: "Exacto. La diferencia clave es la libertad e intencionalidad humana frente al determinismo natural."
                },
                { 
                    text: "Los actos morales son el resultado de leyes físicas inalterables, y los fenómenos naturales son impredecibles.", 
                    correct: false,
                    explanation: "Esto invierte la relación: los actos morales implican libertad, los fenómenos naturales siguen leyes."
                },
                { 
                    text: "Los actos morales son solo aquellos que tienen consecuencias negativas, mientras que los fenómenos naturales no tienen impacto en los seres humanos.", 
                    correct: false,
                    explanation: "Los actos morales pueden ser buenos o malos, y los fenómenos naturales sí afectan a los humanos."
                }
            ],
            hint: "Analiza el ejemplo de la piedra y el andinista. Piensa en la diferencia fundamental en el control o la voluntad que cada uno tiene sobre sus acciones.",
            difficulty: 'basico',
            topic: 'Libertad y responsabilidad'
        },
        
        {
            id: 'etica_003',
            question: "Según el texto, la principal razón por la que podemos emitir juicios morales sobre las acciones de una persona es que...",
            answers: [
                { 
                    text: "tienen consecuencias visibles en otras personas.", 
                    correct: false,
                    explanation: "Las consecuencias son una condición adicional, pero no la principal razón."
                },
                { 
                    text: "la mayoría de la sociedad está de acuerdo en que el acto fue bueno o malo.", 
                    correct: false,
                    explanation: "El consenso social no determina la posibilidad del juicio moral según el texto."
                },
                { 
                    text: "la persona que actúa es libre y puede asumir la responsabilidad de sus actos.", 
                    correct: true,
                    explanation: "Correcto. La libertad y responsabilidad son los fundamentos del juicio moral."
                },
                { 
                    text: "las acciones son siempre intencionales.", 
                    correct: false,
                    explanation: "No todas las acciones humanas son intencionales (ej: desmayarse), pero solo las intencionales son moralmente evaluables."
                },
                { 
                    text: "los actos fueron realizados en un contexto social y político determinado.", 
                    correct: false,
                    explanation: "El contexto influye pero no es la razón fundamental para la posibilidad del juicio moral."
                }
            ],
            hint: "Recuerda el ejemplo del andinista que se desmaya. ¿Qué lección se extrae de ese caso con respecto a la intencionalidad y la responsabilidad?",
            difficulty: 'basico',
            topic: 'Libertad y responsabilidad'
        },
        
        {
            id: 'etica_004',
            question: "Jean-Paul Sartre sostiene que el hombre está 'condenado a ser libre'. ¿Cuál de las siguientes afirmaciones se desprende lógicamente de esta posición filosófica?",
            answers: [
                { 
                    text: "Los seres humanos pueden elegir no ser libres si así lo desean.", 
                    correct: false,
                    explanation: "Para Sartre, no podemos escapar de la libertad; incluso 'no elegir' es una elección."
                },
                { 
                    text: "Las normas morales son establecidas por una autoridad divina para guiar la conducta humana.", 
                    correct: false,
                    explanation: "Sartre es ateo existencialista; niega la existencia de autoridades morales preestablecidas."
                },
                { 
                    text: "La libertad es una ilusión, ya que la conducta humana está totalmente determinada.", 
                    correct: false,
                    explanation: "Esto contradice directamente la posición de Sartre sobre la libertad radical."
                },
                { 
                    text: "El hombre es el único responsable de inventar y seguir su propia moral, ya que no existen normas previas que lo guíen.", 
                    correct: true,
                    explanation: "Perfecto. Para Sartre, sin Dios no hay moral preestablecida, debemos crear nuestros propios valores."
                },
                { 
                    text: "La responsabilidad moral solo surge cuando el hombre se adhiere a las normas de su comunidad.", 
                    correct: false,
                    explanation: "Sartre enfatiza la responsabilidad individual, no la conformidad social."
                }
            ],
            hint: "Considera la frase 'condenado a ser libre'. ¿Qué significa para Sartre que no hay una moral preexistente?",
            difficulty: 'intermedio',
            topic: 'Filosofías de la libertad'
        },
        
        {
            id: 'etica_005',
            question: "Erik Fromm presenta una posición intermedia en el debate sobre la libertad y el determinismo. ¿Qué implicación tiene su visión para el juicio moral en un contexto social y político como el de la Alemania nazi?",
            answers: [
                { 
                    text: "Los ciudadanos alemanes no podían ser juzgados moralmente porque su contexto socio-político los determinaba completamente.", 
                    correct: false,
                    explanation: "Esto sería determinismo total, no la posición intermedia de Fromm."
                },
                { 
                    text: "La ética humanista de Fromm es compatible con un determinismo total, ya que se centra en lo que es bueno para los seres humanos.", 
                    correct: false,
                    explanation: "Fromm rechaza el determinismo total y mantiene un espacio para la libertad."
                },
                { 
                    text: "Los ciudadanos alemanes podían elegir adherir o no al nazismo, lo que les permitía ser considerados moralmente responsables de sus acciones.", 
                    correct: true,
                    explanation: "Exacto. Fromm reconoce la influencia del contexto pero mantiene la capacidad de elección y responsabilidad moral."
                },
                { 
                    text: "El contexto socio-político elimina la responsabilidad moral, por lo que el nazismo no puede ser juzgado como moralmente malo.", 
                    correct: false,
                    explanation: "Esto negaría la posibilidad del juicio moral, contrario a la posición de Fromm."
                },
                { 
                    text: "Fromm argumenta que la agresión humana es incontrolable en contextos autoritarios, lo que hace imposible el juicio moral.", 
                    correct: false,
                    explanation: "Fromm no considera la agresión como incontrolable, sino como elección influenciada por el contexto."
                }
            ],
            hint: "Analiza la diferencia entre la posición de Fromm y la de Skinner. ¿De qué manera la visión de Fromm sobre la libertad y el contexto se aplica al ejemplo del nazismo?",
            difficulty: 'intermedio',
            topic: 'Filosofías de la libertad'
        },
        
        {
            id: 'etica_006',
            question: "El texto menciona que una de las condiciones para que un acto sea considerado bueno o malo es que 'tenga consecuencias o efectos posibles sobre otras personas'. ¿Qué implicación tiene esta condición para la moralidad de los 'pensamientos que no se expresan'?",
            answers: [
                { 
                    text: "Los pensamientos no pueden ser considerados moralmente buenos o malos porque no cumplen la segunda condición del juicio moral.", 
                    correct: true,
                    explanation: "Correcto. Los pensamientos privados no afectan a otros, por lo que quedan fuera del juicio moral según esta condición."
                },
                { 
                    text: "Un pensamiento malvado es moralmente malo incluso si nunca se manifiesta.", 
                    correct: false,
                    explanation: "Según el texto, los actos exclusivamente privados no son objeto de juicio moral."
                },
                { 
                    text: "Los pensamientos solo se vuelven moralmente relevantes cuando se convierten en actos intencionales.", 
                    correct: false,
                    explanation: "Esta respuesta es parcialmente correcta pero no aborda directamente la segunda condición mencionada."
                },
                { 
                    text: "La segunda condición es irrelevante, ya que la libertad y la responsabilidad son suficientes para el juicio moral.", 
                    correct: false,
                    explanation: "El texto presenta ambas condiciones como necesarias para el juicio moral."
                },
                { 
                    text: "La única condición para el juicio moral es que el acto sea realizado por un agente libre y responsable.", 
                    correct: false,
                    explanation: "El texto menciona dos condiciones, no solo una."
                }
            ],
            hint: "¿Qué ejemplos da el texto sobre actos que son 'exclusivamente privados' y por qué los excluye del juicio moral?",
            difficulty: 'intermedio',
            topic: 'Condiciones del juicio moral'
        },
        
        {
            id: 'etica_007',
            question: "Según la definición proporcionada, un conflicto de intereses ocurre cuando...",
            answers: [
                { 
                    text: "una persona utiliza su puesto para favorecer a otros, sin buscar un beneficio propio.", 
                    correct: false,
                    explanation: "Esto sería abuso de poder, pero no necesariamente conflicto de intereses."
                },
                { 
                    text: "se acepta un obsequio a cambio de un favor, lo cual es considerado soborno.", 
                    correct: false,
                    explanation: "Esto define soborno, no conflicto de intereses."
                },
                { 
                    text: "una persona emite normas en su trabajo que le benefician directamente, como participar en la contratación de un familiar.", 
                    correct: true,
                    explanation: "Exacto. El conflicto surge cuando los intereses personales chocan con las responsabilidades profesionales."
                },
                { 
                    text: "una persona recluta a muchos miembros de su familia en una institución.", 
                    correct: false,
                    explanation: "Esto sería nepotismo, una forma específica de conflicto de intereses."
                },
                { 
                    text: "un empleado miente para encubrir una conducta inapropiada de su supervisor.", 
                    correct: false,
                    explanation: "Esto es encubrimiento, no conflicto de intereses."
                }
            ],
            hint: "El texto proporciona una lista detallada de problemas éticos. Revisa esa lista y busca la definición que se ajusta a 'conflicto de intereses'.",
            difficulty: 'basico',
            topic: 'Problemas éticos cotidianos'
        },
        
        {
            id: 'etica_008',
            question: "El principio de integridad, según el texto, implica:",
            answers: [
                { 
                    text: "Aceptar las debilidades y limitaciones propias.", 
                    correct: false,
                    explanation: "Esto describe más bien honestidad, no integridad."
                },
                { 
                    text: "Definir los valores de la institución por encima de los propios.", 
                    correct: false,
                    explanation: "La integridad implica coherencia con los valores propios, no subordinación institucional."
                },
                { 
                    text: "Defender las creencias y valores personales, y rechazar la idea de que el fin justifica los medios.", 
                    correct: true,
                    explanation: "Correcto. La integridad es coherencia entre valores y acciones, sin comprometer principios por conveniencia."
                },
                { 
                    text: "Mentir para proteger a un compañero o a la organización.", 
                    correct: false,
                    explanation: "Esto contradice directamente el principio de integridad."
                },
                { 
                    text: "Priorizar la eficacia y el éxito sobre la moralidad.", 
                    correct: false,
                    explanation: "Esto es exactamente lo opuesto a la integridad."
                }
            ],
            hint: "En la sección de 'principios éticos', busca la definición de 'integridad'. ¿Qué acción se opone a ella?",
            difficulty: 'basico',
            topic: 'Principios éticos básicos'
        },
        
        {
            id: 'etica_009',
            question: "El texto argumenta que un determinismo total nos impediría emitir juicios morales porque...",
            answers: [
                { 
                    text: "la moralidad solo se aplica a los fenómenos naturales, no a las acciones humanas.", 
                    correct: false,
                    explanation: "Es lo contrario: la moralidad se aplica a acciones humanas, no a fenómenos naturales."
                },
                { 
                    text: "los actos humanos, al no ser libres, serían moralmente neutros, como los fenómenos naturales.", 
                    correct: true,
                    explanation: "Exacto. Sin libertad, los actos humanos serían como eventos naturales: no evaluables moralmente."
                },
                { 
                    text: "el ser humano es por naturaleza incapaz de conocer las leyes que rigen su conducta.", 
                    correct: false,
                    explanation: "El problema no es epistemológico (de conocimiento) sino ontológico (de libertad)."
                },
                { 
                    text: "las acciones de una persona son siempre intencionales, incluso si parecen determinadas.", 
                    correct: false,
                    explanation: "En el determinismo total no habría verdadera intencionalidad libre."
                },
                { 
                    text: "no se podría condenar a alguien por un asesinato, ya que no se podría probar que fue un acto intencional.", 
                    correct: false,
                    explanation: "El problema no es de prueba, sino de la imposibilidad conceptual de responsabilidad sin libertad."
                }
            ],
            hint: "Piensa en la diferencia entre una piedra que cae y un ser humano que toma una decisión. ¿Qué papel juega la libertad en esta distinción?",
            difficulty: 'intermedio',
            topic: 'Libertad y determinismo'
        },
        
        {
            id: 'etica_010',
            question: "El principio de 'Responsabilidad ciudadana' implica, además de respetar y obedecer las leyes, tener conciencia social. ¿Qué problema ético de los enumerados podría ser mitigado al aplicar este principio?",
            answers: [
                { 
                    text: "Nepotismo.", 
                    correct: false,
                    explanation: "El nepotismo se relaciona más con conflictos de intereses que con falta de conciencia social."
                },
                { 
                    text: "Lealtad excesiva.", 
                    correct: false,
                    explanation: "La lealtad excesiva es más un problema de jerarquización incorrecta de valores."
                },
                { 
                    text: "Egoísmo.", 
                    correct: true,
                    explanation: "Perfecto. La conciencia social contrarresta directamente el egoísmo al considerar el bienestar común."
                },
                { 
                    text: "Encubrimiento.", 
                    correct: false,
                    explanation: "El encubrimiento se relaciona más con integridad y honestidad que con conciencia social."
                },
                { 
                    text: "Soborno.", 
                    correct: false,
                    explanation: "El soborno es más un problema de integridad personal que de conciencia social."
                }
            ],
            hint: "Piensa en el significado de 'conciencia social'. ¿Cuál de los problemas éticos listados está más directamente relacionado con la falta de consideración por el bienestar de la comunidad o los demás?",
            difficulty: 'basico',
            topic: 'Principios éticos básicos'
        }
    ],
    
    // Estadísticas del tema
    stats: {
        totalQuestions: 10,
        estimatedTime: 8, // minutos
        difficultyBreakdown: {
            basico: 6,
            intermedio: 4,
            avanzado: 0
        },
        topicBreakdown: {
            'Dilemas morales': 1,
            'Libertad y responsabilidad': 2,
            'Filosofías de la libertad': 2,
            'Condiciones del juicio moral': 1,
            'Problemas éticos cotidianos': 1,
            'Principios éticos básicos': 2,
            'Libertad y determinismo': 1
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
    console.log('🔍 Validando estructura del tema...');
    
    const requiredFields = ['id', 'title', 'questions'];
    const missingFields = requiredFields.filter(field => !ETICA_THEME[field]);
    
    if (missingFields.length > 0) {
        console.error(`❌ Faltan campos requeridos: ${missingFields.join(', ')}`);
        return false;
    }
    
    // Validar preguntas
    const invalidQuestions = ETICA_THEME.questions.filter((q, index) => {
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
    
    console.log('✅ Tema validado correctamente');
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
console.log(`📊 Estadísticas: ${ETICA_THEME.questions.length} preguntas, ${ETICA_THEME.stats.estimatedTime} min estimados`);

// Exportar tema para uso global
if (typeof window !== 'undefined') {
    window.ETICA_THEME = ETICA_THEME;
    console.log('🌐 Tema de Ética disponible globalmente');
}