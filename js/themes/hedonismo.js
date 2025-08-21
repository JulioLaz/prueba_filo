// ========================================
// 🌸 TEMA: HEDONISMO - EL PLACER COMO FIN Y FUNDAMENTO DE LA VIDA
// ========================================
// 📚 Unidad III: Ética - ¿Cómo debe comportarse el hombre?

console.log('🌸 Cargando tema: Hedonismo - El placer como fin y fundamento de la vida...');
const themeLoadStart = performance.now();

/**
 * Configuración del tema del Hedonismo
 */
const HEDONISMO_THEME = {
    id: 'hedonismo',
    title: 'Hedonismo: El Placer como Fin de la Vida',
    description: 'Explora la búsqueda del placer y la felicidad desde Epicuro hasta las interpretaciones modernas: ataraxia, placeres superiores y la vida serena.',
    icon: '🌸',
    gradient: 'linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%)',
    difficulty: 'intermedio',
    timeLimit: 30,
    contentFile: 'content/hedonismo.html',
    
    // Metadata del tema
    metadata: {
        author: 'Cuestionarios de Filosofía',
        version: '1.0',
        lastUpdated: '2024-08-20',
        category: 'Filosofía Clásica',
        prerequisites: [],
        learningObjectives: [
            'Comprender el hedonismo como teoría moral centrada en el placer',
            'Distinguir entre hedonismo absoluto y hedonismo mitigado (eudemonismo)',
            'Analizar la filosofía epicúrea: ataraxia, autarquía y serenidad',
            'Diferenciar entre placeres sensibles y placeres espirituales',
            'Evaluar la relación entre placer, ausencia de dolor y felicidad',
            'Examinar las críticas religiosas y éticas al hedonismo'
        ]
    },
    
    questions: [
        {
            id: 'hedonismo_001',
            question: "¿Cuál es la definición fundamental del hedonismo como corriente filosófica?",
            answers: [
                { 
                    text: "Una teoría que busca el equilibrio entre razón y emoción para alcanzar la virtud.", 
                    correct: false,
                    explanation: "Esta definición correspondería más al aristotelismo que al hedonismo."
                },
                { 
                    text: "Una corriente que persigue la supresión del dolor y las penas, buscando la felicidad y el placer como motivo y fin de vida.", 
                    correct: true,
                    explanation: "Correcto. El hedonismo es una teoría moral que percibe el placer como bien último y busca eliminar el dolor para alcanzar la felicidad."
                },
                { 
                    text: "Una doctrina que afirma que solo la razón puede conducir al conocimiento verdadero.", 
                    correct: false,
                    explanation: "Esta sería una posición racionalista, no hedonista."
                },
                { 
                    text: "Una filosofía que sostiene que el deber moral es independiente de las consecuencias.", 
                    correct: false,
                    explanation: "Esta descripción corresponde al deontologismo kantiano, no al hedonismo."
                },
                { 
                    text: "Una teoría que afirma que la realidad está compuesta únicamente por ideas.", 
                    correct: false,
                    explanation: "Esta sería una posición idealista en metafísica, no una teoría ética hedonista."
                }
            ],
            hint: "Piensa en la relación entre placer, dolor y felicidad. ¿Qué busca eliminar el hedonismo y qué busca maximizar?",
            difficulty: 'basico',
            topic: 'Definición del hedonismo'
        },
        
        {
            id: 'hedonismo_002',
            question: "¿Por qué el término 'placer' genera ambigüedad en la doctrina hedonista?",
            answers: [
                { 
                    text: "Porque el placer es imposible de experimentar realmente.", 
                    correct: false,
                    explanation: "El hedonismo no niega la posibilidad de experimentar placer."
                },
                { 
                    text: "Porque el placer está sometido a diversas interpretaciones, lo que determina si una doctrina es hedonista o no según cómo se defina.", 
                    correct: true,
                    explanation: "Exacto. La ambigüedad del término 'placer' ha llevado a diferentes formas de hedonismo según se entienda como placer sensible o espiritual."
                },
                { 
                    text: "Porque el placer siempre conlleva dolor de manera inevitable.", 
                    correct: false,
                    explanation: "Aunque algunos placeres pueden generar dolor posterior, no es esta la razón de la ambigüedad terminológica."
                },
                { 
                    text: "Porque el placer es un concepto puramente subjetivo sin base objetiva.", 
                    correct: false,
                    explanation: "La subjetividad no es la razón principal de la ambigüedad en el hedonismo filosófico."
                },
                { 
                    text: "Porque el placer contradice las leyes naturales de la supervivencia.", 
                    correct: false,
                    explanation: "Esta no es la razón de la ambigüedad del término en el contexto hedonista."
                }
            ],
            hint: "¿Qué problema surge cuando una palabra clave puede significar cosas diferentes? ¿Cómo afecta esto a la clasificación de las doctrinas?",
            difficulty: 'basico',
            topic: 'Ambigüedad del placer'
        },
        
        {
            id: 'hedonismo_003',
            question: "¿Cuáles son las dos formas principales del hedonismo según su concepción del placer?",
            answers: [
                { 
                    text: "Hedonismo individual y hedonismo social.", 
                    correct: false,
                    explanation: "Esta clasificación no corresponde a la distinción tradicional basada en tipos de placer."
                },
                { 
                    text: "Hedonismo absoluto (placer sensible) y hedonismo mitigado o eudemonismo (placer espiritual).", 
                    correct: true,
                    explanation: "Correcto. El hedonismo se divide según el tipo de placer: sensible/inferior (absoluto) o espiritual/superior (mitigado)."
                },
                { 
                    text: "Hedonismo racional y hedonismo emocional.", 
                    correct: false,
                    explanation: "Esta no es la clasificación tradicional del hedonismo filosófico."
                },
                { 
                    text: "Hedonismo ético y hedonismo psicológico.", 
                    correct: false,
                    explanation: "Aunque existe el hedonismo psicológico mencionado, esta no es la división principal por tipos de placer."
                },
                { 
                    text: "Hedonismo cristiano y hedonismo pagano.", 
                    correct: false,
                    explanation: "Esta no es una clasificación filosófica reconocida del hedonismo."
                }
            ],
            hint: "La clasificación se basa en dos tipos diferentes de placer. Piensa en la distinción entre lo sensible/inferior y lo espiritual/superior.",
            difficulty: 'intermedio',
            topic: 'Tipos de hedonismo'
        },
        
        {
            id: 'hedonismo_004',
            question: "¿Quién es considerado universalmente como el filósofo fundador del hedonismo?",
            answers: [
                { 
                    text: "Aristóteles de Estagira.", 
                    correct: false,
                    explanation: "Aristóteles desarrolló una ética de la virtud, no el hedonismo."
                },
                { 
                    text: "Sócrates de Atenas.", 
                    correct: false,
                    explanation: "Sócrates se enfocó en el conocimiento y la virtud, no en el placer como fin último."
                },
                { 
                    text: "Epicuro de Samos.", 
                    correct: true,
                    explanation: "Correcto. Epicuro (341-270 a.C.) es aclamado universalmente como el filósofo fundador del hedonismo."
                },
                { 
                    text: "Platón de Atenas.", 
                    correct: false,
                    explanation: "Platón desarrolló una filosofía idealista que priorizaba el mundo de las ideas sobre los placeres sensibles."
                },
                { 
                    text: "Zenón de Citio.", 
                    correct: false,
                    explanation: "Zenón fue el fundador del estoicismo, que se opone en muchos aspectos al hedonismo."
                }
            ],
            hint: "Este filósofo griego enseñó en Atenas y fundó una escuela llamada 'el Jardín'. Su visión del placer es más compleja de lo que comúnmente se entiende.",
            difficulty: 'basico',
            topic: 'Epicuro fundador'
        },
        
        {
            id: 'hedonismo_005',
            question: "¿Qué significa 'ataraxia' en la filosofía epicúrea?",
            answers: [
                { 
                    text: "El estado de máximo placer sensible que se puede experimentar.", 
                    correct: false,
                    explanation: "La ataraxia no se refiere al máximo placer sensible, sino a un estado mental específico."
                },
                { 
                    text: "La imperturbabilidad, el estado límite de placer donde no es posible incrementar la intensidad, aunque las sensaciones puedan variar.", 
                    correct: true,
                    explanation: "Perfecto. Ataraxia significa 'imperturbabilidad' y representa el pináculo del placer según Epicuro, donde se alcanza un estado de serenidad."
                },
                { 
                    text: "La capacidad de resistir todos los placeres físicos para alcanzar la pureza espiritual.", 
                    correct: false,
                    explanation: "Esto describería más bien un ideal ascético, contrario al hedonismo epicúreo."
                },
                { 
                    text: "El miedo irracional a la muerte que debe ser superado.", 
                    correct: false,
                    explanation: "El miedo a la muerte es lo que debe eliminarse, pero no es lo que significa ataraxia."
                },
                { 
                    text: "La búsqueda constante de nuevos placeres para evitar el aburrimiento.", 
                    correct: false,
                    explanation: "Esto contradice la filosofía epicúrea, que busca la serenidad, no la búsqueda constante."
                }
            ],
            hint: "Es una palabra griega que describe un estado mental de tranquilidad. Piensa en el concepto de 'imperturbabilidad' y en un límite máximo de experiencia placentera.",
            difficulty: 'intermedio',
            topic: 'Ataraxia epicúrea'
        },
        
        {
            id: 'hedonismo_006',
            question: "Para Epicuro, ¿cuál es la relación entre placer y dolor?",
            answers: [
                { 
                    text: "El placer y el dolor son independientes y pueden coexistir simultáneamente.", 
                    correct: false,
                    explanation: "Para Epicuro existe una relación específica entre placer y ausencia de dolor."
                },
                { 
                    text: "El dolor es necesario para poder apreciar verdaderamente el placer.", 
                    correct: false,
                    explanation: "Epicuro no considera el dolor como necesario para el placer."
                },
                { 
                    text: "La presencia del placer es sinónimo de ausencia de dolor o de cualquier tipo de aflicción.", 
                    correct: true,
                    explanation: "Exacto. Para Epicuro, el placer se define como la ausencia de dolor (hambre, tensión, aburrimiento, etc.)."
                },
                { 
                    text: "El dolor es una ilusión que debe ser ignorada completamente.", 
                    correct: false,
                    explanation: "Epicuro no considera el dolor como ilusión, sino como algo real que debe ser eliminado."
                },
                { 
                    text: "Solo el dolor físico es real, mientras que el placer es una construcción mental.", 
                    correct: false,
                    explanation: "Esta posición no corresponde a la filosofía epicúrea."
                }
            ],
            hint: "¿Qué relación existe entre 'presencia' de una cosa y 'ausencia' de otra según Epicuro? Piensa en términos de estados opuestos.",
            difficulty: 'intermedio',
            topic: 'Placer y ausencia de dolor'
        },
        
        {
            id: 'hedonismo_007',
            question: "¿Cómo concebía Epicuro los placeres sensuales en relación con la satisfacción final?",
            answers: [
                { 
                    text: "Los placeres sensuales son el fin último y deben buscarse sin límites.", 
                    correct: false,
                    explanation: "Esta sería una interpretación errónea del epicureísmo."
                },
                { 
                    text: "Los placeres sensuales deben ser completamente evitados por ser inmorales.", 
                    correct: false,
                    explanation: "Epicuro no rechazaba completamente los placeres sensuales."
                },
                { 
                    text: "Los placeres sensuales son estimulantes pero son solo un medio para perseguir la satisfacción, no un fin en sí mismos.", 
                    correct: true,
                    explanation: "Correcto. Para Epicuro, los placeres sensuales son medios para eliminar el dolor y alcanzar la satisfacción, no fines últimos."
                },
                { 
                    text: "Los placeres sensuales son irrelevantes para la filosofía y la ética.", 
                    correct: false,
                    explanation: "Epicuro no consideraba irrelevantes los placeres sensuales."
                },
                { 
                    text: "Los placeres sensuales solo son válidos si son aprobados por la sociedad.", 
                    correct: false,
                    explanation: "La aprobación social no es criterio epicúreo para la validez de los placeres."
                }
            ],
            hint: "Epicuro escribió sobre no eliminar los placeres del gusto, amor, etc., pero ¿cuál es su función en relación con un objetivo mayor? ¿Son medios o fines?",
            difficulty: 'intermedio',
            topic: 'Placeres sensuales como medios'
        },
        
        {
            id: 'hedonismo_008',
            question: "¿Cuáles eran los dos principales temores que Epicuro consideraba necesario eliminar para alcanzar la felicidad?",
            answers: [
                { 
                    text: "El temor al dolor físico y el temor al fracaso social.", 
                    correct: false,
                    explanation: "Estos no son los dos temores principales identificados por Epicuro."
                },
                { 
                    text: "El temor a la pobreza y el temor a la enfermedad.", 
                    correct: false,
                    explanation: "Aunque pueden ser preocupaciones, no son los dos temores fundamentales epicúreos."
                },
                { 
                    text: "El temor a la muerte y el temor a los dioses.", 
                    correct: true,
                    explanation: "Correcto. Epicuro consideraba fundamental eliminar el temor a la muerte y a los dioses para alcanzar la ataraxia."
                },
                { 
                    text: "El temor al cambio y el temor a la soledad.", 
                    correct: false,
                    explanation: "Estos no son los temores fundamentales en la filosofía epicúrea."
                },
                { 
                    text: "El temor al placer y el temor al conocimiento.", 
                    correct: false,
                    explanation: "Esto contradice la filosofía epicúrea que busca el placer y valora cierto tipo de conocimiento."
                }
            ],
            hint: "Piensa en los dos grandes misterios que han atormentado a la humanidad: ¿qué pasa después de la vida? y ¿cómo se relacionan los seres superiores con nosotros?",
            difficulty: 'basico',
            topic: 'Temores fundamentales'
        },
        
        {
            id: 'hedonismo_009',
            question: "¿Cómo resolvía Epicuro el temor a los dioses?",
            answers: [
                { 
                    text: "Negando completamente la existencia de los dioses.", 
                    correct: false,
                    explanation: "Epicuro no negaba la existencia de los dioses."
                },
                { 
                    text: "Afirmando que los dioses existen pero están demasiado lejos de la dimensión humana y son indiferentes a los destinos humanos.", 
                    correct: true,
                    explanation: "Exacto. Para Epicuro, los dioses existen pero no intervienen en los asuntos humanos, eliminando así el temor a su juicio o castigo."
                },
                { 
                    text: "Proponiendo que los humanos pueden convertirse en dioses a través del placer.", 
                    correct: false,
                    explanation: "Esta no es la solución epicúrea al temor a los dioses."
                },
                { 
                    text: "Sugiriendo que los dioses son malvados y deben ser combatidos.", 
                    correct: false,
                    explanation: "Epicuro no consideraba a los dioses como malvados."
                },
                { 
                    text: "Argumentando que solo existe un dios que es puro amor.", 
                    correct: false,
                    explanation: "Esta no es la posición epicúrea sobre la divinidad."
                }
            ],
            hint: "Los dioses existen según Epicuro, pero ¿cuál es su relación con el mundo humano? ¿Intervienen en nuestras vidas o son...?",
            difficulty: 'intermedio',
            topic: 'Solución al temor a los dioses'
        },
        
        {
            id: 'hedonismo_010',
            question: "¿Cómo abordaba Epicuro el temor a la muerte?",
            answers: [
                { 
                    text: "Prometiendo que existe vida después de la muerte.", 
                    correct: false,
                    explanation: "Epicuro no prometía vida después de la muerte."
                },
                { 
                    text: "Argumentando que cuando se vive no se posee sensación de la muerte, y ya estando muerto no se sienten sensaciones.", 
                    correct: true,
                    explanation: "Perfecto. Epicuro razonaba que la muerte no puede ser experimentada: mientras vivimos no la experimentamos, y una vez muertos no hay experiencia."
                },
                { 
                    text: "Enseñando técnicas para volverse inmortal.", 
                    correct: false,
                    explanation: "Epicuro no enseñaba técnicas de inmortalidad."
                },
                { 
                    text: "Afirmando que la muerte es solo una ilusión de los sentidos.", 
                    correct: false,
                    explanation: "Epicuro no consideraba la muerte como ilusión."
                },
                { 
                    text: "Proponiendo que la muerte es la mayor fuente de placer.", 
                    correct: false,
                    explanation: "Esta posición sería contraria a toda la filosofía epicúrea."
                }
            ],
            hint: "¿Cuándo experimentamos la muerte? ¿Mientras estamos vivos o después de morir? ¿Qué implica esto sobre su capacidad de causarnos sufrimiento?",
            difficulty: 'intermedio',
            topic: 'Solución al temor a la muerte'
        },
        
        {
            id: 'hedonismo_011',
            question: "¿Qué significa 'autarquía' en el contexto epicúreo y cómo se relaciona con la ataraxia?",
            answers: [
                { 
                    text: "La capacidad de gobernar a otros y dominar la sociedad para obtener placer.", 
                    correct: false,
                    explanation: "La autarquía epicúrea no se refiere al dominio político o social."
                },
                { 
                    text: "La autosuficiencia personal que, una vez conquistada, permite alcanzar la ataraxia y la felicidad.", 
                    correct: true,
                    explanation: "Correcto. La autarquía es la autosuficiencia que permite alcanzar la ataraxia (imperturbabilidad) y así la felicidad."
                },
                { 
                    text: "La capacidad de resistir todos los placeres para purificar el alma.", 
                    correct: false,
                    explanation: "Esto describería una posición ascética, no epicúrea."
                },
                { 
                    text: "La dependencia total de otros para alcanzar la satisfacción personal.", 
                    correct: false,
                    explanation: "Esto es lo opuesto a la autarquía."
                },
                { 
                    text: "La búsqueda constante de nuevas experiencias para evitar el aburrimiento.", 
                    correct: false,
                    explanation: "Esta búsqueda constante contradiría la serenidad epicúrea."
                }
            ],
            hint: "¿Qué significa ser 'autárquico'? ¿Cómo se relaciona la independencia personal con alcanzar un estado de imperturbabilidad?",
            difficulty: 'intermedio',
            topic: 'Autarquía y ataraxia'
        },
        
        {
            id: 'hedonismo_012',
            question: "¿Cuál era la posición epicúrea respecto a la belleza y la virtud?",
            answers: [
                { 
                    text: "La belleza y la virtud son siempre buenas y deben buscarse sin excepción.", 
                    correct: false,
                    explanation: "Los epicúreos tenían una posición más pragmática respecto a belleza y virtud."
                },
                { 
                    text: "La belleza y la virtud son siempre malas y deben ser evitadas completamente.", 
                    correct: false,
                    explanation: "Los epicúreos no rechazaban automáticamente belleza y virtud."
                },
                { 
                    text: "La belleza y la virtud deben ser aceptadas si producen serenidad y satisfacción; en caso contrario, deben ser eliminadas.", 
                    correct: true,
                    explanation: "Exacto. Para los epicúreos, el criterio era pragmático: aceptar lo que produce serenidad y eliminar lo que la perturba."
                },
                { 
                    text: "La belleza y la virtud son irrelevantes para la filosofía del placer.", 
                    correct: false,
                    explanation: "No eran irrelevantes, sino que tenían un valor condicional."
                },
                { 
                    text: "Solo la belleza es importante, pero la virtud debe ser rechazada.", 
                    correct: false,
                    explanation: "Esta distinción no corresponde al criterio epicúreo."
                }
            ],
            hint: "¿Cuál es el criterio epicúreo para evaluar cualquier cosa? ¿Qué importa más: el valor tradicional de algo o su efecto en nuestro estado mental?",
            difficulty: 'intermedio',
            topic: 'Criterio pragmático epicúreo'
        },
        
        {
            id: 'hedonismo_013',
            question: "¿Cuál es la meta última de la filosofía epicúrea?",
            answers: [
                { 
                    text: "La acumulación de la mayor cantidad posible de placeres sensuales.", 
                    correct: false,
                    explanation: "Esta sería una interpretación vulgar del epicureísmo, no su meta real."
                },
                { 
                    text: "El conocimiento absoluto de todas las verdades del universo.", 
                    correct: false,
                    explanation: "El conocimiento no era la meta última epicúrea, aunque se valoraba la filosofía."
                },
                { 
                    text: "La serenidad, acompañada de la salud del cuerpo y el ejercicio de la filosofía.", 
                    correct: true,
                    explanation: "Perfecto. La serenidad es la meta última, lograda a través de la salud corporal, el ejercicio del cuerpo y la filosofía."
                },
                { 
                    text: "El poder político y la influencia social para transformar la sociedad.", 
                    correct: false,
                    explanation: "Los epicúreos tendían a retirarse de la vida política activa."
                },
                { 
                    text: "La eliminación completa de todas las sensaciones, tanto placenteras como dolorosas.", 
                    correct: false,
                    explanation: "Esto sería más bien una posición ascética extrema, no epicúrea."
                }
            ],
            hint: "¿Cuál es el estado mental ideal que busca el epicureísmo? ¿Qué acompaña a este estado en términos físicos y intelectuales?",
            difficulty: 'basico',
            topic: 'Meta última epicúrea'
        },
        
        {
            id: 'hedonismo_014',
            question: "¿Qué distinguía al hedonismo epicúreo del hedonismo vulgar según el texto?",
            answers: [
                { 
                    text: "El hedonismo epicúreo rechazaba completamente todos los placeres físicos.", 
                    correct: false,
                    explanation: "Epicuro no rechazaba todos los placeres físicos."
                },
                { 
                    text: "El hedonismo epicúreo buscaba un placer duradero de índole espiritual, más efectivo que el material.", 
                    correct: true,
                    explanation: "Correcto. El epicureísmo auténtico priorizaba placeres duraderos y espirituales sobre los meramente materiales y pasajeros."
                },
                { 
                    text: "El hedonismo epicúreo solo se enfocaba en placeres intelectuales abstractos.", 
                    correct: false,
                    explanation: "No se limitaba solo a placeres intelectuales abstractos."
                },
                { 
                    text: "El hedonismo epicúreo promovía la búsqueda desenfrenada de todos los placeres.", 
                    correct: false,
                    explanation: "Esto sería el hedonismo vulgar, no el epicúreo."
                },
                { 
                    text: "No había diferencia real entre ambos tipos de hedonismo.", 
                    correct: false,
                    explanation: "Existe una diferencia fundamental entre el hedonismo refinado y el vulgar."
                }
            ],
            hint: "¿Qué tipo de placer busca el epicureísmo auténtico? ¿Es material o espiritual? ¿Es pasajero o duradero?",
            difficulty: 'intermedio',
            topic: 'Hedonismo refinado vs vulgar'
        }
    ],
    
    // Estadísticas del tema
    stats: {
        totalQuestions: 14,
        estimatedTime: 12, // minutos
        difficultyBreakdown: {
            basico: 5,
            intermedio: 9,
            avanzado: 0
        },
        topicBreakdown: {
            'Definición del hedonismo': 1,
            'Ambigüedad del placer': 1,
            'Tipos de hedonismo': 1,
            'Epicuro fundador': 1,
            'Ataraxia epicúrea': 1,
            'Placer y ausencia de dolor': 1,
            'Placeres sensuales como medios': 1,
            'Temores fundamentales': 1,
            'Solución al temor a los dioses': 1,
            'Solución al temor a la muerte': 1,
            'Autarquía y ataraxia': 1,
            'Criterio pragmático epicúreo': 1,
            'Meta última epicúrea': 1,
            'Hedonismo refinado vs vulgar': 1
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
    console.log('🔍 Validando estructura del tema del Hedonismo...');
    
    const requiredFields = ['id', 'title', 'questions'];
    const missingFields = requiredFields.filter(field => !HEDONISMO_THEME[field]);
    
    if (missingFields.length > 0) {
        console.error(`❌ Faltan campos requeridos: ${missingFields.join(', ')}`);
        return false;
    }
    
    // Validar preguntas
    const invalidQuestions = HEDONISMO_THEME.questions.filter((q, index) => {
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
    
    console.log('✅ Tema del Hedonismo validado correctamente');
    return true;
}

/**
 * Obtiene estadísticas del tema
 * @returns {Object} Estadísticas detalladas
 */
function getThemeStats() {
    return {
        ...HEDONISMO_THEME.stats,
        validationPassed: validateTheme(),
        loadTime: performance.now() - themeLoadStart
    };
}

// ========================================
// 🚀 INICIALIZACIÓN DEL TEMA
// ========================================

// Validar tema al cargar
if (!validateTheme()) {
    console.error('❌ Error al cargar el tema del Hedonismo');
    throw new Error('Tema del Hedonismo inválido');
}

const themeLoadEnd = performance.now();
console.log(`✅ Tema del Hedonismo cargado exitosamente en ${(themeLoadEnd - themeLoadStart).toFixed(2)}ms`);
console.log(`📊 Estadísticas: ${HEDONISMO_THEME.questions.length} preguntas, ${HEDONISMO_THEME.stats.estimatedTime} min estimados`);

// Exportar tema para uso global
if (typeof window !== 'undefined') {
    window.HEDONISMO_THEME = HEDONISMO_THEME;
    console.log('🌐 Tema del Hedonismo disponible globalmente');
}