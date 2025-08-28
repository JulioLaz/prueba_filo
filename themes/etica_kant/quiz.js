// ========================================
// ⚖️ TEMA: ÉTICA KANTIANA - LO BUENO ES LO QUE SE HACE POR DEBER
// ========================================
// 📚 Unidad III: Ética - ¿Cómo debemos actuar?

console.log('⚖️ Cargando tema: Ética Kantiana - Lo bueno es lo que se hace por deber...');
const themeLoadStart = performance.now();

/**
 * Configuración del tema de Ética Kantiana
 */
const ETICA_KANT_THEME = {
    id: 'etica_kant',
    title: 'Ética Kantiana: Lo Bueno es lo que se Hace por Deber',
    description: 'Explora la filosofía de Immanuel Kant y su teoría deontológica, donde la moralidad reside en el deber y la intención, no en las consecuencias.',
    icon: '⚖️',
    gradient: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)',
    difficulty: 'basico',
    timeLimit: 30,
    contentFile: 'content/etica_kant.html',
    
    // Metadata del tema
    metadata: {
        author: 'Cuestionarios de Filosofía',
        version: '1.0',
        lastUpdated: '2024-08-21',
        category: 'Filosofía Moderna',
        prerequisites: [],
        learningObjectives: [
            'Comprender la diferencia entre ética deontológica y consecuencialista',
            'Analizar el concepto de "buena voluntad" y "actuar por deber"',
            'Explicar y aplicar el Imperativo Categórico en sus dos formulaciones',
            'Distinguir entre legalidad y moralidad según Kant',
            'Evaluar las críticas a la rigidez de la ética kantiana',
            'Reflexionar sobre la noción kantiana de la dignidad humana'
        ]
    },
    
    questions: [
        {
            id: 'kant_001',
            question: "¿Cuál es la premisa central de la ética kantiana o deontologismo?",
            answers: [
                {
                    text: "Una acción es moralmente buena si produce la mayor felicidad para el mayor número de personas.",
                    correct: false,
                    explanation: "Esta es la premisa central del utilitarismo, una ética consecuencialista, opuesta a la de Kant."
                },
                {
                    text: "Una acción es moralmente buena si la intención detrás de ella es buena y se realiza por deber, no por sus consecuencias.",
                    correct: true,
                    explanation: "Correcto. Kant afirma que la moralidad reside en la buena voluntad y el cumplimiento del deber, independientemente del resultado."
                },
                {
                    text: "La moralidad depende de las normas culturales y sociales de cada comunidad.",
                    correct: false,
                    explanation: "Kant busca un principio moral universal que trascienda las normas culturales relativas."
                },
                {
                    text: "Lo que es bueno se basa en el éxito práctico y la utilidad de una acción.",
                    correct: false,
                    explanation: "Esta es la premisa del pragmatismo, que se enfoca en la utilidad de las consecuencias."
                },
                {
                    text: "La moralidad está determinada por la autoridad religiosa.",
                    correct: false,
                    explanation: "Kant propone que la ley moral es un principio que se descubre mediante la razón, no por una imposición religiosa."
                }
            ],
            hint: "¿Dónde pone Kant el foco de la moralidad? ¿En el resultado o en la intención?",
            difficulty: 'basico',
            topic: 'Concepto central'
        },
        
        {
            id: 'kant_002',
            question: "¿Qué es el Imperativo Categórico en la ética de Kant?",
            answers: [
                {
                    text: "Una regla que nos dice qué hacer para obtener la felicidad.",
                    correct: false,
                    explanation: "El Imperativo Categórico es un deber incondicional, no un medio para un fin como la felicidad personal."
                },
                {
                    text: "Un principio que nos pide actuar solo según una máxima que podamos querer que se convierta en ley universal.",
                    correct: true,
                    explanation: "Correcto. Esta es la primera formulación del Imperativo Categórico, que exige universalidad y coherencia en nuestras acciones."
                },
                {
                    text: "La ley de la naturaleza que rige todos los fenómenos físicos.",
                    correct: false,
                    explanation: "El Imperativo Categórico es una ley moral, no una ley física."
                },
                {
                    text: "Un mandato que debemos seguir solo si nos conviene personalmente.",
                    correct: false,
                    explanation: "El imperativo es categórico (incondicional), no hipotético (condicional)."
                },
                {
                    text: "Un conjunto de normas sociales y religiosas establecidas por la tradición.",
                    correct: false,
                    explanation: "Para Kant, la ley moral es un principio de la razón, no una convención social o religiosa."
                }
            ],
            hint: "¿Cómo nos dice Kant que probemos la moralidad de una acción?",
            difficulty: 'basico',
            topic: 'Imperativo Categórico'
        },
        
        {
            id: 'kant_003',
            question: "¿Cuál es la principal diferencia entre legalidad y moralidad según Kant?",
            answers: [
                {
                    text: "La legalidad se refiere a acciones públicas y la moralidad a acciones privadas.",
                    correct: false,
                    explanation: "La distinción no es entre público y privado, sino entre el motivo de la acción."
                },
                {
                    text: "La legalidad es cumplir una norma por miedo o conveniencia, mientras que la moralidad es actuar por respeto al deber.",
                    correct: true,
                    explanation: "Correcto. La legalidad se centra en la conformidad externa con la norma, mientras que la moralidad se enfoca en la pureza de la intención interna."
                },
                {
                    text: "La legalidad se aplica solo a las leyes de un país, y la moralidad a las leyes de la naturaleza.",
                    correct: false,
                    explanation: "Ambos conceptos se refieren a la conducta humana, no a leyes de la naturaleza."
                },
                {
                    text: "La legalidad siempre es moral, pero la moralidad no siempre es legal.",
                    correct: false,
                    explanation: "Según Kant, una acción puede ser legal (cumplir la ley) pero no moral si se hace por motivos egoístas."
                },
                {
                    text: "No existe ninguna diferencia significativa entre legalidad y moralidad.",
                    correct: false,
                    explanation: "Kant establece una distinción fundamental y crucial entre ambas."
                }
            ],
            hint: "¿Cuál es el factor decisivo en la moralidad de una acción para Kant? ¿El resultado o el motivo?",
            difficulty: 'intermedio',
            topic: 'Legalidad vs. Moralidad'
        },
        
        {
            id: 'kant_004',
            question: "Según la segunda formulación del Imperativo Categórico, ¿qué implica tratar a la humanidad 'siempre como un fin y nunca como un medio'?",
            answers: [
                {
                    text: "Que debemos usar a los demás para lograr nuestros propios fines, siempre que no les causemos daño.",
                    correct: false,
                    explanation: "Esto aún trataría a las personas como un medio. Kant exige que nunca las utilicemos solo como un medio."
                },
                {
                    text: "Que cada persona tiene un valor intrínseco (dignidad) y no puede ser utilizada como un simple instrumento para un fin.",
                    correct: true,
                    explanation: "Exacto. Esta formulación subraya la dignidad inherente de cada ser humano, que prohíbe instrumentalizarlos."
                },
                {
                    text: "Que debemos sacrificar nuestros propios fines para servir a los demás.",
                    correct: false,
                    explanation: "La formulación se aplica tanto a la persona como a los demás, lo que implica respetar a ambos como fines en sí mismos."
                },
                {
                    text: "Que es moralmente aceptable usar a una persona como medio siempre que se obtenga un gran beneficio.",
                    correct: false,
                    explanation: "Esto es lo opuesto a la formulación. El fin no justifica los medios según Kant."
                },
                {
                    text: "Que las personas no deben tener metas o propósitos en la vida.",
                    correct: false,
                    explanation: "Esta formulación protege el derecho de las personas a tener sus propios fines y propósitos."
                }
            ],
            hint: "¿Qué valor intrínseco tienen las personas según Kant? ¿Son un simple objeto o algo más?",
            difficulty: 'avanzado',
            topic: 'Imperativo Categórico (Fin en sí mismo)'
        },
        
        {
            id: 'kant_005',
            question: "Para Kant, la 'buena voluntad' es lo único que tiene valor moral absoluto. ¿Cuándo se considera que una acción procede de una buena voluntad?",
            answers: [
                {
                    text: "Cuando la acción produce resultados universalmente buenos y útiles para todos.",
                    correct: false,
                    explanation: "Los resultados no determinan la buena voluntad, que reside en la intención."
                },
                {
                    text: "Cuando la acción se realiza por miedo al castigo o para ganar una recompensa.",
                    correct: false,
                    explanation: "Actuar por miedo o interés es lo que Kant llama 'legalidad', no 'moralidad' o buena voluntad."
                },
                {
                    text: "Cuando la acción se realiza por una inclinación natural o un sentimiento de compasión.",
                    correct: false,
                    explanation: "Aunque la compasión es un sentimiento positivo, para Kant, una acción es moralmente valiosa solo si se hace por deber, no por una inclinación."
                },
                {
                    text: "Cuando la acción se realiza por respeto al deber, sin esperar nada a cambio.",
                    correct: true,
                    explanation: "Correcto. La buena voluntad es una intención pura de hacer lo correcto porque es lo correcto, no por conveniencia o inclinación."
                },
                {
                    text: "Cuando la acción beneficia solo a la persona que la realiza.",
                    correct: false,
                    explanation: "Esto sería un acto egoísta, lo opuesto a la moralidad kantiana."
                }
            ],
            hint: "¿Qué tipo de motivación valora más Kant? ¿La que viene del deber o la que viene de un interés personal?",
            difficulty: 'intermedio',
            topic: 'Buena Voluntad'
        },
        
        {
            id: 'kant_006',
            question: "Una de las principales críticas a la ética kantiana es su rigidez. ¿A qué se refiere esta crítica?",
            answers: [
                {
                    text: "A que su filosofía es demasiado flexible y no ofrece normas claras.",
                    correct: false,
                    explanation: "La crítica principal es la opuesta: su rigidez y falta de flexibilidad."
                },
                {
                    text: "A que sus conceptos son demasiado simples y fáciles de entender.",
                    correct: false,
                    explanation: "Se le critica a menudo por su complejidad y abstracción."
                },
                {
                    text: "A que no considera las consecuencias de las acciones, lo que puede llevar a resultados absurdos en algunas situaciones.",
                    correct: true,
                    explanation: "Correcto. Por ejemplo, la prohibición kantiana de mentir es absoluta, incluso si mentir podría salvar una vida, lo que muchos consideran un resultado inaceptable."
                },
                {
                    text: "A que solo se aplica a los filósofos y no a la gente común.",
                    correct: false,
                    explanation: "Kant insiste en que su ética es universal y accesible a toda persona racional."
                },
                {
                    text: "A que no promueve la dignidad humana ni el respeto mutuo.",
                    correct: false,
                    explanation: "Esto es lo opuesto a la teoría kantiana, que pone la dignidad humana en el centro."
                }
            ],
            hint: "¿Qué factor ignora la ética de Kant al juzgar la moralidad de un acto? Piensa en el ejemplo de mentir para salvar una vida.",
            difficulty: 'avanzado',
            topic: 'Críticas a Kant'
        },
        
        {
            id: 'kant_007',
            question: "¿Qué significa que el Imperativo Categórico es 'incondicional'?",
            answers: [
                {
                    text: "Que solo se aplica bajo ciertas condiciones o circunstancias favorables.",
                    correct: false,
                    explanation: "Esto lo haría un imperativo 'hipotético', que Kant distingue del categórico."
                },
                {
                    text: "Que no depende de las circunstancias, los deseos o los resultados, sino que es un deber por sí mismo.",
                    correct: true,
                    explanation: "Correcto. El Imperativo Categórico es un mandato moral que debe ser seguido sin ninguna condición externa."
                },
                {
                    text: "Que no tiene ninguna relación con la razón humana.",
                    correct: false,
                    explanation: "El imperativo categórico es un principio que se descubre a través de la razón."
                },
                {
                    text: "Que es una ley que solo se aplica a los seres humanos, no a los animales.",
                    correct: false,
                    explanation: "Aunque se aplica a los seres racionales, 'incondicional' se refiere a su naturaleza absoluta y no a su alcance."
                },
                {
                    text: "Que sus consecuencias son imposibles de prever.",
                    correct: false,
                    explanation: "La imprevisibilidad de las consecuencias no es lo que lo hace incondicional."
                }
            ],
            hint: "¿Por qué el imperativo categórico no es como una receta para un pastel? No tiene 'si... entonces...'",
            difficulty: 'intermedio',
            topic: 'Imperativo Categórico'
        },

        {
            id: 'kant_008',
            question: "Un ejemplo de tratar a una persona como un 'medio' y no como un 'fin en sí mismo' sería:",
            answers: [
                {
                    text: "Ofrecer a una persona un puesto de trabajo bien remunerado a cambio de su labor.",
                    correct: false,
                    explanation: "En un contrato laboral justo, ambas partes se usan mutuamente como medios para sus propios fines, pero de manera recíproca y consensuada."
                },
                {
                    text: "Mentirle a un amigo para que te preste dinero que no piensas devolver.",
                    correct: true,
                    explanation: "Correcto. Al mentir para obtener un beneficio, estás usando a tu amigo como un simple instrumento para tu fin, sin respetar su autonomía y valor intrínseco."
                },
                {
                    text: "Ayudar a un anciano a cruzar la calle.",
                    correct: false,
                    explanation: "Esto es un acto de respeto y ayuda, donde el anciano es tratado como un fin en sí mismo."
                },
                {
                    text: "Dar un regalo a un ser querido en su cumpleaños.",
                    correct: false,
                    explanation: "Esto es un acto que respeta el valor de la persona."
                },
                {
                    text: "Decirle a un desconocido dónde se encuentra la dirección que busca.",
                    correct: false,
                    explanation: "Esto es una acción neutral o positiva que respeta a la persona."
                }
            ],
            hint: "¿En cuál de estas situaciones se utiliza a la otra persona sin su consentimiento para un beneficio personal y sin respetar su autonomía?",
            difficulty: 'basico',
            topic: 'Fin vs. Medio'
        },

        {
            id: 'kant_009',
            question: "¿Qué distingue a la ética kantiana de la ética utilitarista?",
            answers: [
                {
                    text: "La ética kantiana es subjetiva, mientras que la utilitarista es objetiva.",
                    correct: false,
                    explanation: "Kant busca la objetividad de la razón, mientras que el utilitarismo se basa en un cálculo de consecuencias."
                },
                {
                    text: "La ética kantiana se enfoca en las consecuencias de las acciones, mientras que la utilitarista se enfoca en el deber.",
                    correct: false,
                    explanation: "Es lo opuesto: la kantiana se enfoca en el deber, la utilitarista en las consecuencias."
                },
                {
                    text: "La ética kantiana busca el bien personal, mientras que la utilitarista busca el bien común.",
                    correct: false,
                    explanation: "Kant busca un principio moral universal que trasciende el interés personal."
                },
                {
                    text: "La ética kantiana se basa en la intención y el deber, mientras que la utilitarista se basa en las consecuencias y la felicidad.",
                    correct: true,
                    explanation: "Correcto. La ética de Kant es deontológica (del deber) y la de Mill es consecuencialista (de las consecuencias)."
                },
                {
                    text: "Ambas teorías son idénticas en sus principios fundamentales.",
                    correct: false,
                    explanation: "Son teorías éticas fundamentalmente opuestas en sus criterios de moralidad."
                }
            ],
            hint: "¿Cuál es el criterio principal de cada una para juzgar una acción? ¿La intención o el resultado?",
            difficulty: 'intermedio',
            topic: 'Kant vs. Utilitarismo'
        },
        
        {
            id: 'kant_010',
            question: "¿Cómo describiría Kant la 'dignidad humana'?",
            answers: [
                {
                    text: "Es el valor que tiene una persona en el mercado laboral.",
                    correct: false,
                    explanation: "El valor de una persona en el mercado es un 'precio', no su 'dignidad'."
                },
                {
                    text: "El valor que la sociedad le asigna a una persona basada en su estatus social.",
                    correct: false,
                    explanation: "La dignidad para Kant es un valor intrínseco, no una asignación social."
                },
                {
                    text: "El valor intrínseco y absoluto que posee cada ser humano, que no puede ser intercambiado ni usado como un objeto.",
                    correct: true,
                    explanation: "Correcto. La dignidad es lo que nos hace fines en nosotros mismos, no medios para los fines de otros."
                },
                {
                    text: "El valor que una persona se gana con sus buenas acciones.",
                    correct: false,
                    explanation: "La dignidad es inherente a la condición de ser racional, no algo que se gane."
                },
                {
                    text: "La capacidad de ser felices y evitar el dolor.",
                    correct: false,
                    explanation: "Esto se refiere a un enfoque hedonista o utilitarista de la vida, no a la dignidad kantiana."
                }
            ],
            hint: "¿Se puede 'comprar' o 'vender' la dignidad según Kant?",
            difficulty: 'basico',
            topic: 'Dignidad Humana'
        }
    ],
    
    // Estadísticas del tema
    stats: {
        totalQuestions: 10,
        estimatedTime: 15, // minutos
        difficultyBreakdown: {
            basico: 4,
            intermedio: 4,
            avanzado: 2
        },
        topicBreakdown: {
            'Concepto central': 1,
            'Imperativo Categórico': 2,
            'Legalidad vs. Moralidad': 1,
            'Imperativo Categórico (Fin en sí mismo)': 1,
            'Buena Voluntad': 1,
            'Críticas a Kant': 1,
            'Fin vs. Medio': 1,
            'Kant vs. Utilitarismo': 1,
            'Dignidad Humana': 1
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
    console.log('🔍 Validando estructura del tema de Kant...');
    
    const requiredFields = ['id', 'title', 'questions'];
    const missingFields = requiredFields.filter(field => !ETICA_KANT_THEME[field]);
    
    if (missingFields.length > 0) {
        console.error(`❌ Faltan campos requeridos: ${missingFields.join(', ')}`);
        return false;
    }
    
    // Validar preguntas
    const invalidQuestions = ETICA_KANT_THEME.questions.filter((q, index) => {
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
    
    console.log('✅ Tema de Ética Kantiana validado correctamente');
    return true;
}

/**
 * Obtiene estadísticas del tema
 * @returns {Object} Estadísticas detalladas
 */
function getThemeStats() {
    return {
        ...ETICA_KANT_THEME.stats,
        validationPassed: validateTheme(),
        loadTime: performance.now() - themeLoadStart
    };
}

// ========================================
// 🚀 INICIALIZACIÓN DEL TEMA
// ========================================

// Validar tema al cargar
if (!validateTheme()) {
    console.error('❌ Error al cargar el tema de Ética Kantiana');
    throw new Error('Tema de Ética Kantiana inválido');
}

const themeLoadEnd = performance.now();
console.log(`✅ Tema de Ética Kantiana cargado exitosamente en ${(themeLoadEnd - themeLoadStart).toFixed(2)}ms`);
console.log(`📊 Estadísticas: ${ETICA_KANT_THEME.questions.length} preguntas, ${ETICA_KANT_THEME.stats.estimatedTime} min estimados`);

// Exportar tema para uso global
if (typeof window !== 'undefined') {
    window.ETICA_KANT_THEME = ETICA_KANT_THEME;
    console.log('🌐 Tema de Ética Kantiana disponible globalmente');
}