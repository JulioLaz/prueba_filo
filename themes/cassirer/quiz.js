// ========================================
// 🎭 TEMA: ERNST CASSIRER - EL ANIMAL SIMBÓLICO
// ========================================
// 📚 Unidad III: Ética / Antropología filosófica

const cassirerThemeLoadStart = performance.now();

/**
 * Configuración del tema de Cassirer
 */
const CASSIRER_THEME = {
    id: 'cassirer',
    title: 'Ernst Cassirer: El ser humano como animal simbólico',
    description: 'Explora cómo el ser humano crea, interpreta y habita un mundo de símbolos: lenguaje, arte, mito, ciencia y ritual.',
    icon: '🎭',
    gradient: 'linear-gradient(135deg, #6a85b6 0%, #bac8e0 100%)',
    difficulty: 'basico',
    timeLimit: 30,
    contentFile: 'content/cassirer.html',

    // Metadata del tema
    metadata: {
        author: 'Cuestionarios de Filosofía',
        version: '1.0',
        lastUpdated: '2025-08-22',
        category: 'Filosofía Contemporánea',
        prerequisites: ['antropologia_filosofica', 'lenguaje_y_cultura'],
        learningObjectives: [
            'Comprender por qué Cassirer define al humano como animal simbólico',
            'Distinguir señales de símbolos y su función en la cultura',
            'Explicar la mediación simbólica entre estímulo y respuesta',
            'Analizar el papel del lenguaje como forma simbólica dominante',
            'Evaluar límites y riesgos (manipulación, propaganda) del mundo simbólico'
        ]
    },

    // ==========================
    // 🧩 PREGUNTAS (10 ítems)
    // ==========================
    questions: [
        {
            id: 'cassirer_001',
            question: "Según Cassirer, ¿qué rasgo distingue específicamente al ser humano?",
            answers: [
                {
                    text: "Su capacidad de sentir dolor y placer con mayor intensidad.",
                    correct: false,
                    explanation: "Cassirer no centra la diferencia humana en la intensidad sensorial."
                },
                {
                    text: "Su dependencia total de los instintos para sobrevivir.",
                    correct: false,
                    explanation: "Precisamente, el humano no se limita a instintos: media símbolos."
                },
                {
                    text: "Ser un animal simbólico que crea y habita sistemas de significados.",
                    correct: true,
                    explanation: "Núcleo de Cassirer: el humano vive en un universo simbólico (lenguaje, arte, mito, ciencia)."
                },
                {
                    text: "Poseer mayor fuerza física que otros animales.",
                    correct: false,
                    explanation: "La fuerza no es el criterio distintivo para Cassirer."
                },
                {
                    text: "Tener una memoria biológica superior a la del resto de especies.",
                    correct: false,
                    explanation: "La distinción no es biológica sino cultural-simbólica."
                }
            ],
            hint: "Piensa en lenguaje, arte, mito, ciencia: ¿qué tienen en común?",
            difficulty: 'basico',
            topic: 'Definición de animal simbólico'
        },
        {
            id: 'cassirer_002',
            question: "¿Qué significa que los símbolos 'median' entre estímulo y respuesta?",
            answers: [
                {
                    text: "Que reaccionamos automáticamente ante cualquier estímulo.",
                    correct: false,
                    explanation: "Eso describe conductas reflejas, no mediación simbólica."
                },
                {
                    text: "Que interpretamos el estímulo según sistemas de sentido antes de actuar.",
                    correct: true,
                    explanation: "Primero atribuimos significado (bandera=historia/identidad) y luego respondemos."
                },
                {
                    text: "Que los símbolos suprimen toda emoción en la respuesta.",
                    correct: false,
                    explanation: "No suprimen emociones; organizan su significado."
                },
                {
                    text: "Que el estímulo determina mecánicamente la conducta.",
                    correct: false,
                    explanation: "Justo lo contrario: la mediación rompe el automatismo."
                },
                {
                    text: "Que solo la ciencia puede explicar la conducta humana.",
                    correct: false,
                    explanation: "Cassirer incluye múltiples formas simbólicas, no solo la ciencia."
                }
            ],
            hint: "Entre percibir y actuar, ¿qué 'capa' añade el humano?",
            difficulty: 'intermedio',
            topic: 'Mediación simbólica'
        },
        {
            id: 'cassirer_003',
            question: "¿Cuál de las siguientes opciones ejemplifica mejor un símbolo según Cassirer?",
            answers: [
                {
                    text: "Un olor que desencadena salivación automática.",
                    correct: false,
                    explanation: "Eso es una señal fisiológica, no un símbolo cultural."
                },
                {
                    text: "La luz roja del semáforo que significa detenerse.",
                    correct: true,
                    explanation: "Convención cultural que organiza la conducta social: símbolo."
                },
                {
                    text: "Un reflejo de parpadeo ante un destello.",
                    correct: false,
                    explanation: "Respuesta refleja, no interpretación simbólica."
                },
                {
                    text: "El hambre que lleva a buscar comida.",
                    correct: false,
                    explanation: "Impulso biológico, no mediado por símbolos."
                },
                {
                    text: "El escalofrío por frío intenso.",
                    correct: false,
                    explanation: "Reacción fisiológica, no simbólica."
                }
            ],
            hint: "Busca un caso donde una convención compartida guía la acción.",
            difficulty: 'basico',
            topic: 'Símbolos vs. señales'
        },
        {
            id: 'cassirer_004',
            question: "Para Cassirer, el lenguaje es central porque:",
            answers: [
                {
                    text: "Permite solo describir objetos físicos presentes.",
                    correct: false,
                    explanation: "También habla de pasado, futuro y conceptos abstractos."
                },
                {
                    text: "No influye en la identidad ni la cultura.",
                    correct: false,
                    explanation: "El lenguaje estructura identidad, memoria y cultura."
                },
                {
                    text: "Es la forma simbólica que habilita conceptos, relatos y coordinación social compleja.",
                    correct: true,
                    explanation: "El lenguaje expande el mundo: conceptos, leyes, proyectos."
                },
                {
                    text: "Elimina cualquier emoción de la comunicación.",
                    correct: false,
                    explanation: "El lenguaje también expresa emociones y valores."
                },
                {
                    text: "Sustituye por completo a las artes y los rituales.",
                    correct: false,
                    explanation: "Coexiste con otras formas simbólicas (arte, mito, ritual)."
                }
            ],
            hint: "Piensa en cómo el lenguaje organiza memoria, planes, normas.",
            difficulty: 'intermedio',
            topic: 'Lenguaje como forma simbólica'
        },
        {
            id: 'cassirer_005',
            question: "¿Qué papel cumplen arte, mito, religión y ritual en la visión de Cassirer?",
            answers: [
                {
                    text: "Son irracionales y deben excluirse del estudio filosófico.",
                    correct: false,
                    explanation: "Cassirer los integra como formas simbólicas constitutivas."
                },
                {
                    text: "Son formas simbólicas que expresan y organizan significados colectivos.",
                    correct: true,
                    explanation: "Configuran sentidos compartidos e identidad cultural."
                },
                {
                    text: "Solo importan en sociedades primitivas.",
                    correct: false,
                    explanation: "Operan en toda cultura, también en la moderna."
                },
                {
                    text: "Equivalen a superstición sin valor cognitivo alguno.",
                    correct: false,
                    explanation: "Cassirer evita reduccionismos: aportan comprensión simbólica."
                },
                {
                    text: "Son reemplazos temporales del conocimiento científico.",
                    correct: false,
                    explanation: "No son reemplazos, sino registros diferentes del símbolo."
                }
            ],
            hint: "No todo saber es científico; hay saberes simbólicos.",
            difficulty: 'basico',
            topic: 'Formas de la cultura'
        },
        {
            id: 'cassirer_006',
            question: "La 'conciencia del futuro' en el humano implica que:",
            answers: [
                {
                    text: "Vivimos solo del pasado y de los recuerdos.",
                    correct: false,
                    explanation: "Cassirer resalta proyección a futuro (planes, esperanzas, miedos)."
                },
                {
                    text: "No experimentamos ansiedad ni esperanza.",
                    correct: false,
                    explanation: "Justamente, la proyección genera ansiedad y esperanza."
                },
                {
                    text: "Proyectamos metas y sentidos que configuran decisiones presentes.",
                    correct: true,
                    explanation: "Los proyectos y símbolos de futuro guían la acción actual."
                },
                {
                    text: "El futuro no tiene relevancia simbólica.",
                    correct: false,
                    explanation: "Es central en la vida simbólica (promesas, planes, instituciones)."
                },
                {
                    text: "Solo afecta a sociedades tecnológicas contemporáneas.",
                    correct: false,
                    explanation: "Es rasgo humano general, no solo tecnológico."
                }
            ],
            hint: "Metas, promesas, diplomas, ritos de paso… ¿a qué horizonte apuntan?",
            difficulty: 'intermedio',
            topic: 'Conciencia del futuro'
        },
        {
            id: 'cassirer_007',
            question: "¿Cómo ayuda Cassirer a entender las redes sociales (likes, emojis, hashtags)?",
            answers: [
                {
                    text: "Como fenómenos puramente biológicos.",
                    correct: false,
                    explanation: "Son convenciones culturales, no reflejos biológicos."
                },
                {
                    text: "Como símbolos que codifican reconocimiento, pertenencia y opinión.",
                    correct: true,
                    explanation: "Funcionan como signos compartidos con valor social."
                },
                {
                    text: "Como datos sin significado alguno.",
                    correct: false,
                    explanation: "Tienen significados y efectos identitarios."
                },
                {
                    text: "Como hechos naturales inmunes a la interpretación.",
                    correct: false,
                    explanation: "Requieren interpretación cultural para operar."
                },
                {
                    text: "Como sustitutos de la ciencia moderna.",
                    correct: false,
                    explanation: "No sustituyen a la ciencia; son prácticas simbólicas sociales."
                }
            ],
            hint: "¿Qué simboliza un ‘me gusta’ más allá del clic?",
            difficulty: 'basico',
            topic: 'Aplicaciones contemporáneas'
        },
        {
            id: 'cassirer_008',
            question: "¿Cuál es una crítica o límite señalado al mundo simbólico?",
            answers: [
                {
                    text: "Los símbolos garantizan siempre la verdad objetiva.",
                    correct: false,
                    explanation: "Pueden distorsionar y manipular (propaganda, publicidad)."
                },
                {
                    text: "La simbología elimina los conflictos sociales.",
                    correct: false,
                    explanation: "También puede intensificarlos (símbolos identitarios en disputa)."
                },
                {
                    text: "El exceso de símbolos puede manipular o alejar de la realidad.",
                    correct: true,
                    explanation: "Uno de los riesgos: confundir símbolo y cosa, caer en estereotipos."
                },
                {
                    text: "Los símbolos impiden todo pensamiento crítico.",
                    correct: false,
                    explanation: "No lo impiden; el reto es aprender a interpretarlos críticamente."
                },
                {
                    text: "Los símbolos son irrelevantes en política y religión.",
                    correct: false,
                    explanation: "Justo ahí su potencia es evidente (banderas, ritos, relatos)."
                }
            ],
            hint: "Piensa en propaganda: ¿qué hace y cómo?",
            difficulty: 'intermedio',
            topic: 'Críticas y riesgos'
        },
        {
            id: 'cassirer_009',
            question: "Diferencia clave entre señal animal y símbolo humano:",
            answers: [
                {
                    text: "La señal siempre es falsa; el símbolo siempre es verdadero.",
                    correct: false,
                    explanation: "Falsedad/verdad no define la distinción esencial."
                },
                {
                    text: "La señal desencadena reacción inmediata; el símbolo remite a significados compartidos y convencionales.",
                    correct: true,
                    explanation: "La señal es estímulo-respuesta; el símbolo exige interpretación cultural."
                },
                {
                    text: "La señal es cultural; el símbolo es biológico.",
                    correct: false,
                    explanation: "Es al revés: símbolo es cultural; señal tiende a lo biológico."
                },
                {
                    text: "La señal solo existe en humanos; el símbolo solo en animales.",
                    correct: false,
                    explanation: "Humanos: símbolos; animales: señales (con matices)."
                },
                {
                    text: "No hay diferencia: ambas son idénticas.",
                    correct: false,
                    explanation: "Para Cassirer, la diferencia es estructural."
                }
            ],
            hint: "¿Qué requiere interpretación y acuerdo social?",
            difficulty: 'basico',
            topic: 'Señales vs. símbolos (definición)'
        },
        {
            id: 'cassirer_010',
            question: "Un ejemplo de 'ritual' como forma simbólica sería:",
            answers: [
                {
                    text: "El espasmo muscular al tocar un objeto caliente.",
                    correct: false,
                    explanation: "Reflejo fisiológico, no práctica simbólica."
                },
                {
                    text: "Una ceremonia de graduación que marca un paso de estatus.",
                    correct: true,
                    explanation: "Ritual que simboliza logro, transición e identidad colectiva."
                },
                {
                    text: "La contracción de la pupila por exceso de luz.",
                    correct: false,
                    explanation: "Respuesta automática del organismo."
                },
                {
                    text: "El bostezo por falta de oxígeno.",
                    correct: false,
                    explanation: "Fenómeno fisiológico, no cultural."
                },
                {
                    text: "La transpiración por calor ambiental.",
                    correct: false,
                    explanation: "Reacción corporal, sin mediación simbólica."
                }
            ],
            hint: "Piensa en eventos con reglas, símbolos, vestimentas y discursos.",
            difficulty: 'basico',
            topic: 'Rituales e identidad'
        }
    ],

    // Estadísticas del tema
    stats: {
        totalQuestions: 10,
        estimatedTime: 10, // minutos
        difficultyBreakdown: {
            basico: 6,
            intermedio: 4,
            avanzado: 0
        },
        topicBreakdown: {
            'Definición de animal simbólico': 1,
            'Mediación simbólica': 1,
            'Símbolos vs. señales': 2,
            'Lenguaje como forma simbólica': 1,
            'Formas de la cultura': 1,
            'Conciencia del futuro': 1,
            'Aplicaciones contemporáneas': 1,
            'Críticas y riesgos': 1,
            'Rituales e identidad': 1
        }
    }
};

// ========================================
// 🔧 FUNCIONES DE VALIDACIÓN DEL TEMA
// ========================================

/**
 * Valida la estructura del tema de Cassirer
 * @returns {boolean} True si el tema es válido
 */
function validateCassirerTheme() {
    console.log('🔍 Validando estructura del tema de Cassirer...');

    const requiredFields = ['id', 'title', 'questions'];
    const missingFields = requiredFields.filter(field => !CASSIRER_THEME[field]);

    if (missingFields.length > 0) {
        console.error(`❌ Faltan campos requeridos: ${missingFields.join(', ')}`);
        return false;
    }

    // Validar preguntas
    const invalidQuestions = CASSIRER_THEME.questions.filter((q, index) => {
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
            console.error(`❌ Pregunta ${index + 1}: debe haber exactamente 1 respuesta correcta`);
            return true;
        }

        return false;
    });

    if (invalidQuestions.length > 0) {
        console.error(`❌ ${invalidQuestions.length} preguntas inválidas encontradas`);
        return false;
    }

    console.log('✅ Tema de Cassirer validado correctamente');
    return true;
}

/**
 * Obtiene estadísticas del tema de Cassirer
 * @returns {Object} Estadísticas detalladas
 */
function getCassirerThemeStats() {
    return {
        ...CASSIRER_THEME.stats,
        validationPassed: validateCassirerTheme(),
        loadTime: performance.now() - cassirerThemeLoadStart
    };
}

// ========================================
// 🚀 INICIALIZACIÓN DEL TEMA
// ========================================

// Validar tema al cargar
if (!validateCassirerTheme()) {
    console.error('❌ Error al cargar el tema de Cassirer');
    throw new Error('Tema de Cassirer inválido');
}

const cassirerThemeLoadEnd = performance.now();
console.log(`✅ Tema de Cassirer cargado exitosamente en ${(cassirerThemeLoadEnd - cassirerThemeLoadStart).toFixed(2)}ms`);
console.log(`📊 Estadísticas: ${CASSIRER_THEME.questions.length} preguntas, ${CASSIRER_THEME.stats.estimatedTime} min estimados`);

// Exportar tema para uso global
if (typeof window !== 'undefined') {
    window.CASSIRER_THEME = CASSIRER_THEME;
    console.log('🌐 Tema de Cassirer disponible globalmente');
}
