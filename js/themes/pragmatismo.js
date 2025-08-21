// ========================================
// 🛠️ TEMA: PRAGMATISMO - LO VERDADERO ES LO PRÁCTICO
// ========================================
// 📚 Unidad III: Ética - ¿Cómo debemos actuar?

console.log('🛠️ Cargando tema: Pragmatismo - Lo verdadero es lo práctico...');
const themeLoadStart = performance.now();

/**
 * Configuración del tema del Pragmatismo
 */
const PRAGMATISMO_THEME = {
    id: 'pragmatismo',
    title: 'Pragmatismo: Lo Verdadero es lo Práctico',
    description: 'Explora la filosofía americana que evalúa las ideas por su utilidad práctica: Peirce, James, Dewey y la verdad como herramienta de acción.',
    icon: '🛠️',
    gradient: 'linear-gradient(135deg, #ff9500 0%, #ff6b35 100%)',
    difficulty: 'intermedio',
    timeLimit: 30,
    contentFile: 'content/pragmatismo.html',
    
    // Metadata del tema
    metadata: {
        author: 'Cuestionarios de Filosofía',
        version: '1.0',
        lastUpdated: '2024-08-20',
        category: 'Filosofía Americana',
        prerequisites: [],
        learningObjectives: [
            'Comprender el pragmatismo como evaluación de ideas por su valor práctico',
            'Analizar la concepción pragmatista de la verdad como utilidad',
            'Distinguir el pragmatismo de otras corrientes filosóficas tradicionales',
            'Examinar las aplicaciones del pragmatismo en educación, psicología y política',
            'Evaluar las contribuciones de Peirce, James, Dewey y Rorty',
            'Reflexionar sobre los riesgos y beneficios del enfoque pragmatista'
        ]
    },
    
    questions: [
        {
            id: 'pragmatismo_001',
            question: "¿Cuál es la premisa central del pragmatismo sobre la evaluación de ideas y teorías?",
            answers: [
                { 
                    text: "Las ideas deben evaluarse por su correspondencia exacta con una verdad absoluta e inmutable.", 
                    correct: false,
                    explanation: "Esta sería la posición de filosofías tradicionales que buscan verdades absolutas, que el pragmatismo precisamente rechaza."
                },
                { 
                    text: "Las ideas deben evaluarse por su valor práctico y sus consecuencias concretas, no por su correspondencia con verdades absolutas.", 
                    correct: true,
                    explanation: "Correcto. El pragmatismo evalúa las ideas por su utilidad práctica para resolver problemas y mejorar la experiencia, no por su correspondencia con verdades universales."
                },
                { 
                    text: "Solo las ideas que pueden demostrarse matemáticamente son válidas.", 
                    correct: false,
                    explanation: "El pragmatismo no limita la validez a demostraciones matemáticas, sino a la utilidad práctica."
                },
                { 
                    text: "Las ideas verdaderas son aquellas que han existido por más tiempo en la historia.", 
                    correct: false,
                    explanation: "La antigüedad histórica no es criterio pragmatista para evaluar ideas."
                },
                { 
                    text: "Todas las ideas son igualmente válidas independientemente de sus resultados.", 
                    correct: false,
                    explanation: "El pragmatismo sí distingue entre ideas según sus resultados prácticos."
                }
            ],
            hint: "¿Cómo evalúa el pragmatismo las ideas? ¿Por qué criterio las juzga válidas o no?",
            difficulty: 'basico',
            topic: 'Premisa central del pragmatismo'
        },
        
        {
            id: 'pragmatismo_002',
            question: "¿Qué significa 'lo verdadero es lo útil' en el contexto pragmatista?",
            answers: [
                { 
                    text: "Solo las ideas que generan beneficio económico personal son verdaderas.", 
                    correct: false,
                    explanation: "El pragmatismo no limita la utilidad al beneficio económico egoísta."
                },
                { 
                    text: "Una idea es verdadera si nos resulta útil para resolver problemas, guiar la acción y mejorar nuestra experiencia.", 
                    correct: true,
                    explanation: "Exacto. Para el pragmatismo, la verdad se mide por la capacidad de una idea para funcionar efectivamente en la práctica y resolver problemas reales."
                },
                { 
                    text: "Las ideas útiles son siempre aquellas que la mayoría de la gente acepta.", 
                    correct: false,
                    explanation: "La utilidad pragmatista no se define por consenso mayoritario sino por efectividad práctica."
                },
                { 
                    text: "Solo las herramientas físicas pueden ser verdaderamente útiles.", 
                    correct: false,
                    explanation: "El pragmatismo incluye ideas, teorías y creencias como herramientas útiles, no solo objetos físicos."
                },
                { 
                    text: "Lo útil se refiere únicamente a la conveniencia inmediata.", 
                    correct: false,
                    explanation: "La utilidad pragmatista incluye resultados a largo plazo y beneficios más profundos que la mera conveniencia."
                }
            ],
            hint: "¿Qué tipo de 'utilidad' valora el pragmatismo? ¿Se trata solo de beneficio personal o incluye otros aspectos?",
            difficulty: 'basico',
            topic: 'Verdad como utilidad'
        },
        
        {
            id: 'pragmatismo_003',
            question: "Según William James, ¿cuál es la naturaleza de la verdad?",
            answers: [
                { 
                    text: "La verdad es algo fijo y eterno que se descubre a través de la contemplación.", 
                    correct: false,
                    explanation: "Esta sería una visión platónica de la verdad, no la posición de James."
                },
                { 
                    text: "La verdad no es algo fijo que se descubre, sino algo que se 'hace' o se construye a medida que nuestras ideas demuestran su valor en la vida real.", 
                    correct: true,
                    explanation: "Perfecto. Para James, la verdad es dinámica y se construye cuando las ideas demuestran su eficacia práctica en la experiencia."
                },
                { 
                    text: "La verdad existe independientemente de los seres humanos y sus experiencias.", 
                    correct: false,
                    explanation: "James enfatiza el papel activo de los humanos en la construcción de la verdad a través de la experiencia."
                },
                { 
                    text: "Solo las verdades científicas comprobadas en laboratorio son realmente válidas.", 
                    correct: false,
                    explanation: "James no limita la verdad al ámbito científico experimental."
                },
                { 
                    text: "La verdad es una ilusión que debe ser abandonada completamente.", 
                    correct: false,
                    explanation: "James no abandona el concepto de verdad, sino que lo redefine pragmáticamente."
                }
            ],
            hint: "¿La verdad se 'descubre' o se 'hace' según James? ¿Cuál es el papel de la experiencia práctica en este proceso?",
            difficulty: 'intermedio',
            topic: 'Concepción de verdad en James'
        },
        
        {
            id: 'pragmatismo_004',
            question: "¿Qué es la 'corriente de la conciencia' según William James?",
            answers: [
                { 
                    text: "Una teoría sobre el flujo de agua en el cerebro humano.", 
                    correct: false,
                    explanation: "La 'corriente de la conciencia' no es una teoría física sino psicológica."
                },
                { 
                    text: "Un flujo constante de la conciencia humana que no solo refleja el mundo, sino que también lo modela a través de la acción.", 
                    correct: true,
                    explanation: "Correcto. James concebía la conciencia como un flujo dinámico que participa activamente en la construcción de la realidad, no solo la refleja pasivamente."
                },
                { 
                    text: "Una técnica de meditación para alcanzar estados alterados de conciencia.", 
                    correct: false,
                    explanation: "No es una técnica de meditación sino una descripción de la naturaleza de la conciencia."
                },
                { 
                    text: "La idea de que la conciencia está completamente determinada por fuerzas externas.", 
                    correct: false,
                    explanation: "James enfatiza el carácter activo y modelador de la conciencia, no su determinismo pasivo."
                },
                { 
                    text: "Una corriente política basada en la conciencia social.", 
                    correct: false,
                    explanation: "Es un concepto psicológico-filosófico, no político."
                }
            ],
            hint: "¿Cuál es la relación entre la conciencia y el mundo según James? ¿Es pasiva o activa?",
            difficulty: 'intermedio',
            topic: 'Corriente de la conciencia'
        },
        
        {
            id: 'pragmatismo_005',
            question: "¿Cómo describe James las creencias en relación con la acción?",
            answers: [
                { 
                    text: "Las creencias son obstáculos que impiden la acción efectiva.", 
                    correct: false,
                    explanation: "James ve las creencias como facilitadoras, no como obstáculos para la acción."
                },
                { 
                    text: "Las creencias son como 'mapas de carreteras' que nos ayudan a navegar el mundo; son valiosas solo si nos llevan a donde queremos ir.", 
                    correct: true,
                    explanation: "Exacto. James usa la metáfora del mapa para explicar que las creencias son herramientas de navegación que valen por su eficacia práctica."
                },
                { 
                    text: "Las creencias deben ser idénticas en todas las personas para ser válidas.", 
                    correct: false,
                    explanation: "James no requiere uniformidad universal de creencias para su validez."
                },
                { 
                    text: "Solo las creencias religiosas pueden guiar verdaderamente la acción humana.", 
                    correct: false,
                    explanation: "James no limita las creencias útiles al ámbito religioso."
                },
                { 
                    text: "Las creencias son irrelevantes para la vida práctica.", 
                    correct: false,
                    explanation: "Para James, las creencias son centrales para guiar la acción práctica."
                }
            ],
            hint: "¿Qué metáfora usa James para las creencias? ¿Cuál es su función práctica según él?",
            difficulty: 'intermedio',
            topic: 'Creencias como herramientas'
        },
        
        {
            id: 'pragmatismo_006',
            question: "¿Cómo se distingue el pragmatismo del racionalismo en su búsqueda de la verdad?",
            answers: [
                { 
                    text: "El pragmatismo busca verdades más complejas que el racionalismo.", 
                    correct: false,
                    explanation: "La diferencia no está en la complejidad sino en la naturaleza y el criterio de verdad."
                },
                { 
                    text: "A diferencia del racionalismo, que busca verdades inmutables a través de la razón pura, el pragmatismo considera que todas las ideas son provisionales.", 
                    correct: true,
                    explanation: "Correcto. El pragmatismo rechaza la búsqueda racionalista de verdades inmutables y adopta una visión provisional y dinámica de las ideas."
                },
                { 
                    text: "El pragmatismo rechaza completamente el uso de la razón.", 
                    correct: false,
                    explanation: "El pragmatismo no rechaza la razón, sino la búsqueda de verdades absolutas e inmutables."
                },
                { 
                    text: "Ambos enfoques son idénticos en sus métodos y objetivos.", 
                    correct: false,
                    explanation: "Existen diferencias fundamentales entre el pragmatismo y el racionalismo."
                },
                { 
                    text: "El pragmatismo solo acepta verdades que pueden probarse matemáticamente.", 
                    correct: false,
                    explanation: "Esta característica correspondería más al racionalismo matemático que al pragmatismo."
                }
            ],
            hint: "¿Qué busca el racionalismo que el pragmatismo rechaza? ¿Cómo ve cada uno la naturaleza de las ideas?",
            difficulty: 'intermedio',
            topic: 'Pragmatismo vs racionalismo'
        },
        
        {
            id: 'pragmatismo_007',
            question: "¿Cuál es la crítica de Richard Rorty (pragmatista contemporáneo) a la concepción tradicional del conocimiento?",
            answers: [
                { 
                    text: "Que el conocimiento científico es superior a cualquier otro tipo de conocimiento.", 
                    correct: false,
                    explanation: "Rorty no privilegia el conocimiento científico sobre otros tipos."
                },
                { 
                    text: "Criticó la idea de que la mente es un 'espejo de la naturaleza', argumentando que el lenguaje y el pensamiento son herramientas para interactuar con el mundo, no para representar una realidad objetiva.", 
                    correct: true,
                    explanation: "Perfecto. Rorty rechaza la metáfora de la mente como espejo que refleja la realidad, proponiendo instead que el pensamiento es una herramienta de interacción."
                },
                { 
                    text: "Que solo el conocimiento obtenido a través de la experiencia mística es válido.", 
                    correct: false,
                    explanation: "Rorty no promueve el conocimiento místico como criterio de validez."
                },
                { 
                    text: "Que el conocimiento debe basarse únicamente en autoridades tradicionales.", 
                    correct: false,
                    explanation: "Rorty no apela a autoridades tradicionales como base del conocimiento."
                },
                { 
                    text: "Que es imposible tener cualquier tipo de conocimiento verdadero.", 
                    correct: false,
                    explanation: "Rorty no adopta una posición escéptica total, sino que redefine el conocimiento pragmáticamente."
                }
            ],
            hint: "¿Qué metáfora tradicional sobre la mente critica Rorty? ¿Cómo propone ver el pensamiento en su lugar?",
            difficulty: 'intermedio',
            topic: 'Crítica de Rorty'
        },
        
        {
            id: 'pragmatismo_008',
            question: "¿Cómo aplicó John Dewey el pragmatismo a la educación?",
            answers: [
                { 
                    text: "Promoviendo un sistema educativo basado únicamente en la memorización de datos históricos.", 
                    correct: false,
                    explanation: "Dewey se opuso al modelo educativo basado en memorización."
                },
                { 
                    text: "Abogando por un modelo educativo centrado en la experiencia y la resolución de problemas, en lugar de la memorización de datos.", 
                    correct: true,
                    explanation: "Correcto. Dewey desarrolló una pedagogía pragmatista que enfatiza el aprendizaje experiencial y la resolución práctica de problemas."
                },
                { 
                    text: "Defendiendo que solo los estudiantes más inteligentes merecen educación.", 
                    correct: false,
                    explanation: "Dewey no promovía un sistema educativo elitista."
                },
                { 
                    text: "Argumentando que la educación debe ser completamente teórica y abstracta.", 
                    correct: false,
                    explanation: "Esto contradice el enfoque pragmatista de Dewey que enfatiza la experiencia práctica."
                },
                { 
                    text: "Proponiendo que la educación debe evitar cualquier conexión con la vida real.", 
                    correct: false,
                    explanation: "Dewey promovía exactamente lo contrario: conectar la educación con la experiencia vital."
                }
            ],
            hint: "¿Qué modelo educativo promovía Dewey? ¿En qué se centraba en lugar de la memorización?",
            difficulty: 'basico',
            topic: 'Pragmatismo en educación'
        },
        
        {
            id: 'pragmatismo_009',
            question: "¿Cuál es la contribución de William James al campo de la psicología según el texto?",
            answers: [
                { 
                    text: "Fundó la escuela de psicoanálisis freudiano.", 
                    correct: false,
                    explanation: "El psicoanálisis fue desarrollado por Freud, no por James."
                },
                { 
                    text: "Es considerado el padre del funcionalismo, una rama de la psicología que se centra en cómo los procesos mentales ayudan a los organismos a adaptarse a su entorno.", 
                    correct: true,
                    explanation: "Exacto. James desarrolló el funcionalismo psicológico, que estudia la función adaptativa de los procesos mentales."
                },
                { 
                    text: "Desarrolló la teoría conductista que ignora los procesos mentales internos.", 
                    correct: false,
                    explanation: "El conductismo fue desarrollado principalmente por Watson y Skinner, no por James."
                },
                { 
                    text: "Creó la psicología cognitiva moderna.", 
                    correct: false,
                    explanation: "La psicología cognitiva moderna se desarrolló décadas después de James."
                },
                { 
                    text: "Inventó las técnicas de terapia gestáltica.", 
                    correct: false,
                    explanation: "La terapia gestáltica fue desarrollada por Fritz Perls, no por James."
                }
            ],
            hint: "¿Qué escuela psicológica fundó James? ¿En qué se enfoca esta escuela según el texto?",
            difficulty: 'basico',
            topic: 'James y funcionalismo'
        },
        
        {
            id: 'pragmatismo_010',
            question: "¿Cómo ha influido el pragmatismo en la política estadounidense?",
            answers: [
                { 
                    text: "Promoviendo la adherencia rígida a ideologías abstractas sin considerar resultados.", 
                    correct: false,
                    explanation: "Esto es lo opuesto al enfoque pragmatista en política."
                },
                { 
                    text: "Promoviendo un enfoque que valora las políticas que funcionan y producen resultados tangibles para la sociedad, en lugar de adherirse rígidamente a ideologías abstractas.", 
                    correct: true,
                    explanation: "Correcto. El pragmatismo político enfatiza la efectividad práctica de las políticas sobre la adherencia ideológica abstracta."
                },
                { 
                    text: "Estableciendo que solo una ideología política puede ser correcta.", 
                    correct: false,
                    explanation: "El pragmatismo es flexible respecto a ideologías, priorizando la efectividad."
                },
                { 
                    text: "Eliminando completamente la participación ciudadana en política.", 
                    correct: false,
                    explanation: "El pragmatismo no elimina la participación ciudadana."
                },
                { 
                    text: "Defendiendo que la política debe basarse únicamente en tradiciones históricas.", 
                    correct: false,
                    explanation: "El pragmatismo evalúa políticas por sus resultados presentes, no por tradición histórica."
                }
            ],
            hint: "¿Qué valora el enfoque pragmatista en política? ¿Ideología abstracta o qué tipo de criterio?",
            difficulty: 'basico',
            topic: 'Pragmatismo político'
        },
        
        {
            id: 'pragmatismo_011',
            question: "¿Qué enseña el pragmatismo sobre nuestra actitud hacia las ideas nuevas?",
            answers: [
                { 
                    text: "Debemos rechazar automáticamente todas las ideas nuevas porque las ideas tradicionales siempre son mejores.", 
                    correct: false,
                    explanation: "El pragmatismo no favorece automáticamente lo tradicional sobre lo nuevo."
                },
                { 
                    text: "Debemos aceptar todas las ideas nuevas sin evaluación crítica.", 
                    correct: false,
                    explanation: "El pragmatismo sí requiere evaluación, aunque basada en criterios prácticos."
                },
                { 
                    text: "Nos invita a ser flexibles y a estar abiertos a nuevas ideas, evaluándolas por su utilidad práctica.", 
                    correct: true,
                    explanation: "Exacto. El pragmatismo promueve la flexibilidad mental y la apertura a nuevas ideas, evaluándolas por su efectividad práctica."
                },
                { 
                    text: "Solo debemos considerar ideas que hayan sido probadas por al menos 100 años.", 
                    correct: false,
                    explanation: "El pragmatismo no requiere períodos específicos de prueba histórica."
                },
                { 
                    text: "Las ideas nuevas son irrelevantes porque la verdad ya ha sido completamente descubierta.", 
                    correct: false,
                    explanation: "El pragmatismo rechaza la idea de que la verdad es fija y completamente conocida."
                }
            ],
            hint: "¿Qué actitud promueve el pragmatismo hacia las nuevas ideas? ¿Cómo debemos evaluarlas?",
            difficulty: 'basico',
            topic: 'Flexibilidad pragmatista'
        },
        
        {
            id: 'pragmatismo_012',
            question: "¿Cuál es la diferencia fundamental entre el pragmatismo y las filosofías que buscan 'correspondencia con los hechos'?",
            answers: [
                { 
                    text: "El pragmatismo busca una correspondencia más exacta con los hechos que otras filosofías.", 
                    correct: false,
                    explanation: "El pragmatismo no busca correspondencia exacta sino utilidad práctica."
                },
                { 
                    text: "Para el pragmatismo, el conocimiento no es una 'correspondencia con los hechos', sino un conjunto de creencias que nos son útiles para vivir.", 
                    correct: true,
                    explanation: "Perfecto. El pragmatismo abandona la metáfora de correspondencia y ve el conocimiento como herramienta útil para la vida práctica."
                },
                { 
                    text: "El pragmatismo niega que existan hechos objetivos en el mundo.", 
                    correct: false,
                    explanation: "El pragmatismo no necesariamente niega hechos objetivos, sino que cambia el criterio de evaluación del conocimiento."
                },
                { 
                    text: "Ambos enfoques son idénticos en su comprensión del conocimiento.", 
                    correct: false,
                    explanation: "Existe una diferencia fundamental entre ambos enfoques."
                },
                { 
                    text: "Solo el pragmatismo puede acceder a los hechos verdaderos.", 
                    correct: false,
                    explanation: "El pragmatismo no reclama acceso privilegiado a hechos verdaderos."
                }
            ],
            hint: "¿Cómo ve el pragmatismo el conocimiento? ¿Como correspondencia con hechos o como qué otra cosa?",
            difficulty: 'intermedio',
            topic: 'Conocimiento como herramienta'
        }
    ],
    
    // Estadísticas del tema
    stats: {
        totalQuestions: 12,
        estimatedTime: 10, // minutos
        difficultyBreakdown: {
            basico: 5,
            intermedio: 7,
            avanzado: 0
        },
        topicBreakdown: {
            'Premisa central del pragmatismo': 1,
            'Verdad como utilidad': 1,
            'Concepción de verdad en James': 1,
            'Corriente de la conciencia': 1,
            'Creencias como herramientas': 1,
            'Pragmatismo vs racionalismo': 1,
            'Crítica de Rorty': 1,
            'Pragmatismo en educación': 1,
            'James y funcionalismo': 1,
            'Pragmatismo político': 1,
            'Flexibilidad pragmatista': 1,
            'Conocimiento como herramienta': 1
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
    console.log('🔍 Validando estructura del tema del Pragmatismo...');
    
    const requiredFields = ['id', 'title', 'questions'];
    const missingFields = requiredFields.filter(field => !PRAGMATISMO_THEME[field]);
    
    if (missingFields.length > 0) {
        console.error(`❌ Faltan campos requeridos: ${missingFields.join(', ')}`);
        return false;
    }
    
    // Validar preguntas
    const invalidQuestions = PRAGMATISMO_THEME.questions.filter((q, index) => {
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
    
    console.log('✅ Tema del Pragmatismo validado correctamente');
    return true;
}

/**
 * Obtiene estadísticas del tema
 * @returns {Object} Estadísticas detalladas
 */
function getThemeStats() {
    return {
        ...PRAGMATISMO_THEME.stats,
        validationPassed: validateTheme(),
        loadTime: performance.now() - themeLoadStart
    };
}

// ========================================
// 🚀 INICIALIZACIÓN DEL TEMA
// ========================================

// Validar tema al cargar
if (!validateTheme()) {
    console.error('❌ Error al cargar el tema del Pragmatismo');
    throw new Error('Tema del Pragmatismo inválido');
}

const themeLoadEnd = performance.now();
console.log(`✅ Tema del Pragmatismo cargado exitosamente en ${(themeLoadEnd - themeLoadStart).toFixed(2)}ms`);
console.log(`📊 Estadísticas: ${PRAGMATISMO_THEME.questions.length} preguntas, ${PRAGMATISMO_THEME.stats.estimatedTime} min estimados`);

// Exportar tema para uso global
if (typeof window !== 'undefined') {
    window.PRAGMATISMO_THEME = PRAGMATISMO_THEME;
    console.log('🌐 Tema del Pragmatismo disponible globalmente');
}