// ========================================
// 🏛️ TEMA: ARISTÓTELES - LO BUENO ES LA FELICIDAD
// ========================================
// 📚 Unidad III: Ética - ¿Cómo debe comportarse el hombre?

console.log('🏛️ Cargando tema: Aristóteles - Lo bueno es la felicidad...');
const themeLoadStart = performance.now();

/**
 * Configuración del tema de Aristóteles
 */
const ARISTOTELES_THEME = {
    id: 'aristoteles',
    title: 'Aristóteles: Lo Bueno es la Felicidad',
    description: 'Descubre la ética aristotélica: la felicidad como fin último, la virtud como término medio y la vida contemplativa.',
    icon: '🏛️',
    gradient: 'linear-gradient(135deg, #d4af37 0%, #ffd700 100%)',
    difficulty: 'intermedio',
    timeLimit: 30,
    contentFile: 'content/aristoteles.html',
    
    // Metadata del tema
    metadata: {
        author: 'Cuestionarios de Filosofía',
        version: '1.0',
        lastUpdated: '2024-08-20',
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
                { 
                    text: "Porque sin un fin último, la cadena de fines quedaría vaciada de sentido y nuestra actividad sería inútil y absurda.", 
                    correct: true,
                    explanation: "Correcto. Para Aristóteles, si no existiera un fin que se quiera por sí mismo, toda la cadena de medios y fines perdería su sentido fundamental."
                },
                { 
                    text: "Porque es lo que nos enseña la tradición religiosa y debemos respetarla.", 
                    correct: false,
                    explanation: "Aristóteles basa su argumento en la razón y la lógica, no en la tradición religiosa."
                },
                { 
                    text: "Porque los seres humanos son naturalmente ambiciosos y siempre quieren más.", 
                    correct: false,
                    explanation: "Esta respuesta confunde la motivación psicológica con la necesidad lógica del argumento aristotélico."
                },
                { 
                    text: "Porque sin un fin último no podríamos distinguir entre el bien y el mal.", 
                    correct: false,
                    explanation: "Aunque relacionado, el argumento específico de Aristóteles se centra en el sentido de la acción, no en la distinción moral."
                },
                { 
                    text: "Porque la sociedad necesita objetivos comunes para funcionar correctamente.", 
                    correct: false,
                    explanation: "El argumento aristotélico se centra en la lógica individual de la acción, no en necesidades sociales."
                }
            ],
            hint: "Piensa en el ejemplo de la alumna que va a la escuela. ¿Qué pasaría si cada fin fuera solo un medio para otro fin, sin llegar nunca a algo que se busque por sí mismo?",
            difficulty: 'intermedio',
            topic: 'Cadena de fines'
        },
        
        {
            id: 'aristoteles_002',
            question: "¿Cuáles son las dos características que debe tener el Sumo Bien según Aristóteles?",
            answers: [
                { 
                    text: "Debe ser material y espiritual.", 
                    correct: false,
                    explanation: "Estas no son las características que Aristóteles establece para el Sumo Bien."
                },
                { 
                    text: "Debe ser autosuficiente (buscado por sí mismo) y perfecto (el fin más elevado posible).", 
                    correct: true,
                    explanation: "Perfecto. Estas son exactamente las dos características que Aristóteles establece para el Sumo Bien."
                },
                { 
                    text: "Debe ser individual y social.", 
                    correct: false,
                    explanation: "Aristóteles no define el Sumo Bien en términos de individual vs social."
                },
                { 
                    text: "Debe ser racional y emocional.", 
                    correct: false,
                    explanation: "Aunque Aristóteles valora la razón, estas no son las características específicas del Sumo Bien."
                },
                { 
                    text: "Debe ser universal y eterno.", 
                    correct: false,
                    explanation: "Estas características pertenecen más a la metafísica platónica que a la ética aristotélica."
                }
            ],
            hint: "Recuerda que el Sumo Bien no debe ser un medio para otra cosa, y debe ser el fin más elevado. ¿Cómo se llamarían estas dos cualidades?",
            difficulty: 'basico',
            topic: 'Sumo Bien'
        },
        
        {
            id: 'aristoteles_003',
            question: "Según Aristóteles, ¿cuál es el fin último que todos los seres humanos buscan?",
            answers: [
                { 
                    text: "El placer y la gratificación de los sentidos.", 
                    correct: false,
                    explanation: "Aristóteles rechaza el placer como fin último porque apela a aspectos que compartimos con los animales."
                },
                { 
                    text: "Los honores, la fama y el reconocimiento social.", 
                    correct: false,
                    explanation: "Los honores dependen de otros para ser otorgados, por lo que no son autosuficientes."
                },
                { 
                    text: "Las riquezas y la capacidad de comprar lo que deseamos.", 
                    correct: false,
                    explanation: "Las riquezas son medios para otras cosas, no un fin en sí mismo."
                },
                { 
                    text: "La felicidad, que se desea por sí misma y no como medio para otra cosa.", 
                    correct: true,
                    explanation: "Exacto. Para Aristóteles, la felicidad es el único fin que se busca por sí mismo y que satisface plenamente."
                },
                { 
                    text: "El poder y la capacidad de controlar a otros.", 
                    correct: false,
                    explanation: "El poder no aparece como fin último en la ética aristotélica."
                }
            ],
            hint: "¿Qué buscamos que no sea un medio para otra cosa? ¿Para qué queremos ser...? Para ser... No hay otra respuesta.",
            difficulty: 'basico',
            topic: 'Felicidad como fin último'
        },
        
        {
            id: 'aristoteles_004',
            question: "¿Por qué rechaza Aristóteles el placer como verdadera felicidad?",
            answers: [
                { 
                    text: "Porque el placer es inmoral y corrompe el alma humana.", 
                    correct: false,
                    explanation: "Aristóteles no considera el placer inmoral, sino que tiene una objeción más específica."
                },
                { 
                    text: "Porque el placer es autosuficiente pero no es perfecto, ya que apela a aspectos fisiológicos que compartimos con los animales.", 
                    correct: true,
                    explanation: "Correcto. El placer se busca por sí mismo (autosuficiente) pero no es lo más elevado del ser humano (no perfecto)."
                },
                { 
                    text: "Porque el placer es imposible de alcanzar para los seres humanos.", 
                    correct: false,
                    explanation: "Aristóteles no niega que el placer sea alcanzable, sino que cuestiona su valor como fin último."
                },
                { 
                    text: "Porque el placer depende de otros para ser experimentado.", 
                    correct: false,
                    explanation: "Esta característica se aplica más bien a los honores, no al placer."
                },
                { 
                    text: "Porque el placer es solo un medio para conseguir riquezas.", 
                    correct: false,
                    explanation: "Esta relación no corresponde al análisis aristotélico del placer."
                }
            ],
            hint: "Aristóteles acepta que el placer se busca por sí mismo, pero tiene un problema con respecto a qué parte del ser humano involucra. ¿Qué nos distingue de los animales?",
            difficulty: 'intermedio',
            topic: 'Crítica al placer'
        },
        
        {
            id: 'aristoteles_005',
            question: "¿Cuál es la función específica que distingue a los seres humanos de los demás animales según Aristóteles?",
            answers: [
                { 
                    text: "La capacidad de sentir emociones profundas.", 
                    correct: false,
                    explanation: "Los animales también experimentan emociones, aunque quizás de manera diferente."
                },
                { 
                    text: "La capacidad de comunicarse con otros de su especie.", 
                    correct: false,
                    explanation: "Muchos animales tienen sistemas de comunicación complejos."
                },
                { 
                    text: "La razón, ya que compartimos con los animales las funciones de respirar, alimentarse y sentir.", 
                    correct: true,
                    explanation: "Perfecto. Para Aristóteles, la racionalidad es exclusivamente humana y por eso es nuestra función específica."
                },
                { 
                    text: "La capacidad de crear herramientas y modificar el ambiente.", 
                    correct: false,
                    explanation: "Algunos animales también usan y crean herramientas básicas."
                },
                { 
                    text: "La capacidad de vivir en sociedades complejas.", 
                    correct: false,
                    explanation: "Muchas especies animales viven en sociedades organizadas y complejas."
                }
            ],
            hint: "Aristóteles menciona que compartimos con los animales el respirar, alimentarse y sentir. ¿Qué capacidad es exclusivamente humana?",
            difficulty: 'basico',
            topic: 'Función humana específica'
        },
        
        {
            id: 'aristoteles_006',
            question: "Para Aristóteles, ¿en qué consiste la verdadera felicidad?",
            answers: [
                { 
                    text: "En la satisfacción de todos los deseos materiales.", 
                    correct: false,
                    explanation: "Esto se acercaría más a la búsqueda de riquezas, que Aristóteles rechaza."
                },
                { 
                    text: "En ser reconocido y admirado por otros.", 
                    correct: false,
                    explanation: "Esto correspondería a los honores, que Aristóteles también rechaza."
                },
                { 
                    text: "En vivir guiándose por la razón, controlando las pasiones y buscando la sabiduría.", 
                    correct: true,
                    explanation: "Exacto. La felicidad aristotélica implica el ejercicio de nuestra función específica: la razón, especialmente en la búsqueda de sabiduría."
                },
                { 
                    text: "En experimentar el máximo placer posible en la vida.", 
                    correct: false,
                    explanation: "Esta sería la posición hedonista, que Aristóteles rechaza."
                },
                { 
                    text: "En alcanzar la inmortalidad del alma.", 
                    correct: false,
                    explanation: "Aunque Aristóteles habla del alma, la felicidad se centra en la vida presente y la actividad racional."
                }
            ],
            hint: "¿Cuál es la parte más elevada del ser humano según Aristóteles? ¿Qué tipo de vida permite ejercitar esta capacidad al máximo?",
            difficulty: 'intermedio',
            topic: 'Verdadera felicidad'
        },
        
        {
            id: 'aristoteles_007',
            question: "¿Qué tipo de vida considera Aristóteles como la mejor para alcanzar la felicidad?",
            answers: [
                { 
                    text: "La vida activa dedicada a los negocios y el comercio.", 
                    correct: false,
                    explanation: "Esta vida se centraría en las riquezas, que Aristóteles rechaza como fin último."
                },
                { 
                    text: "La vida social dedicada a obtener honores y reconocimiento.", 
                    correct: false,
                    explanation: "Los honores dependen de otros y no son autosuficientes según Aristóteles."
                },
                { 
                    text: "La vida hedonista dedicada a la búsqueda del placer.", 
                    correct: false,
                    explanation: "El placer apela a aspectos que compartimos con los animales, no a lo específicamente humano."
                },
                { 
                    text: "La vida contemplativa, dedicada a la reflexión y al estudio para adquirir sabiduría.", 
                    correct: true,
                    explanation: "Perfecto. La vida contemplativa permite ejercitar la función más elevada del ser humano: la razón en búsqueda de la sabiduría."
                },
                { 
                    text: "La vida política dedicada al ejercicio del poder.", 
                    correct: false,
                    explanation: "Aunque Aristóteles valora la vida política, considera superior la vida contemplativa."
                }
            ],
            hint: "¿Qué tipo de vida permite ejercitar al máximo nuestra capacidad racional y la búsqueda del conocimiento más elevado?",
            difficulty: 'intermedio',
            topic: 'Vida contemplativa'
        },
        
        {
            id: 'aristoteles_008',
            question: "¿Por qué la sabiduría vuelve al hombre 'autárquico' según Aristóteles?",
            answers: [
                { 
                    text: "Porque la sabiduría permite ganar mucho dinero y ser independiente económicamente.", 
                    correct: false,
                    explanation: "La autarquía aristotélica no se refiere a la independencia económica."
                },
                { 
                    text: "Porque la sabiduría depende de cada uno de nosotros y no de otras personas, y no nos esclaviza a objetos externos.", 
                    correct: true,
                    explanation: "Exacto. A diferencia de los honores (que dependen de otros) y los placeres (que pueden esclavizarnos), la sabiduría depende solo de nosotros."
                },
                { 
                    text: "Porque la sabiduría nos da poder sobre otros y nos hace superiores.", 
                    correct: false,
                    explanation: "La autarquía aristotélica no se basa en el dominio sobre otros."
                },
                { 
                    text: "Porque la sabiduría nos permite predecir el futuro y controlar los acontecimientos.", 
                    correct: false,
                    explanation: "Esta no es la concepción aristotélica de la sabiduría ni de la autarquía."
                },
                { 
                    text: "Porque la sabiduría nos hace inmunes al sufrimiento y las emociones.", 
                    correct: false,
                    explanation: "Aristóteles no propone eliminar las emociones, sino controlarlas con la razón."
                }
            ],
            hint: "Compara la sabiduría con los honores (que dependen de otros) y con el placer (que puede esclavizarnos a objetos). ¿Qué hace diferente a la sabiduría?",
            difficulty: 'intermedio',
            topic: 'Sabiduría y autarquía'
        },
        
        {
            id: 'aristoteles_009',
            question: "¿Qué son las virtudes éticas o del carácter según Aristóteles?",
            answers: [
                { 
                    text: "Son reglas absolutas que nunca deben violarse bajo ninguna circunstancia.", 
                    correct: false,
                    explanation: "Aristóteles no presenta las virtudes como reglas absolutas, sino como términos medios."
                },
                { 
                    text: "Son el término medio entre un exceso y un defecto, logradas cuando la razón controla los impulsos instintivos.", 
                    correct: true,
                    explanation: "Perfecto. Las virtudes éticas son el justo medio entre extremos, alcanzadas mediante la prudencia racional."
                },
                { 
                    text: "Son los placeres que podemos disfrutar sin culpa porque son naturales.", 
                    correct: false,
                    explanation: "Las virtudes no son placeres, sino disposiciones del carácter."
                },
                { 
                    text: "Son los conocimientos teóricos que debemos adquirir para ser sabios.", 
                    correct: false,
                    explanation: "Esta descripción correspondería más a las virtudes intelectuales que a las éticas."
                },
                { 
                    text: "Son los honores que merecemos por nuestros logros en la vida.", 
                    correct: false,
                    explanation: "Los honores son externos, las virtudes son disposiciones internas del carácter."
                }
            ],
            hint: "Piensa en el ejemplo de la valentía. ¿Qué relación tiene con la cobardía (muy poco) y la temeridad (demasiado)?",
            difficulty: 'intermedio',
            topic: 'Virtudes éticas'
        },
        
        {
            id: 'aristoteles_010',
            question: "En el ejemplo que da Aristóteles, ¿qué representa la valentía?",
            answers: [
                { 
                    text: "La ausencia total de miedo ante cualquier situación.", 
                    correct: false,
                    explanation: "La ausencia total de miedo sería temeridad, no valentía."
                },
                { 
                    text: "La capacidad de evitar todas las situaciones peligrosas.", 
                    correct: false,
                    explanation: "Evitar todo peligro sería cobardía, no valentía."
                },
                { 
                    text: "El término medio entre la cobardía (miedo excesivo) y la temeridad (inconsciencia ante el peligro).", 
                    correct: true,
                    explanation: "Exacto. La valentía es el justo medio entre el exceso de miedo (cobardía) y la falta de miedo (temeridad)."
                },
                { 
                    text: "La disposición a luchar siempre, sin importar las consecuencias.", 
                    correct: false,
                    explanation: "Esto sería más bien temeridad o imprudencia."
                },
                { 
                    text: "El miedo racional que nos protege de los peligros.", 
                    correct: false,
                    explanation: "El miedo racional es importante, pero la valentía implica más que solo miedo."
                }
            ],
            hint: "Aristóteles dice que las virtudes son el término medio entre dos extremos. En el caso de la valentía, ¿cuáles serían esos dos extremos?",
            difficulty: 'basico',
            topic: 'Término medio'
        },
        
        {
            id: 'aristoteles_011',
            question: "¿Cuál es la relación entre la razón y las pasiones en la ética aristotélica?",
            answers: [
                { 
                    text: "Las pasiones deben ser completamente eliminadas porque son malas.", 
                    correct: false,
                    explanation: "Aristóteles no propone eliminar las pasiones, sino controlarlas con la razón."
                },
                { 
                    text: "Las pasiones son más importantes que la razón para alcanzar la felicidad.", 
                    correct: false,
                    explanation: "Para Aristóteles, la razón es superior y debe guiar las pasiones."
                },
                { 
                    text: "La razón debe guiar nuestras vidas y controlar nuestras pasiones para vivir felizmente.", 
                    correct: true,
                    explanation: "Correcto. La felicidad requiere que la razón domine y dirija las pasiones, no que las elimine."
                },
                { 
                    text: "La razón y las pasiones son igualmente importantes y deben equilibrarse.", 
                    correct: false,
                    explanation: "Aunque debe haber balance, Aristóteles da primacía a la razón como guía."
                },
                { 
                    text: "Las pasiones son naturales y siempre debemos seguirlas.", 
                    correct: false,
                    explanation: "Seguir siempre las pasiones llevaría al exceso, que Aristóteles considera vicioso."
                }
            ],
            hint: "¿Qué debe gobernar qué en la vida humana según Aristóteles? ¿Cuál es la función específicamente humana que debe dominar?",
            difficulty: 'basico',
            topic: 'Razón y pasiones'
        },
        
        {
            id: 'aristoteles_012',
            question: "¿Por qué los honores no pueden ser el Sumo Bien según el análisis aristotélico?",
            answers: [
                { 
                    text: "Porque los honores son inmorales y corrompen a las personas.", 
                    correct: false,
                    explanation: "Aristóteles no considera los honores inmorales, sino que tienen limitaciones estructurales."
                },
                { 
                    text: "Porque los honores no son ni autosuficientes ni perfectos: dependen de otros para ser otorgados y se buscan como reconocimiento.", 
                    correct: true,
                    explanation: "Exacto. Los honores fallan en ambas características del Sumo Bien: dependen de otros (no autosuficientes) y son medios para el reconocimiento (no perfectos)."
                },
                { 
                    text: "Porque los honores solo pueden ser alcanzados por personas muy ricas.", 
                    correct: false,
                    explanation: "Esta no es la objeción aristotélica a los honores."
                },
                { 
                    text: "Porque los honores son temporales y eventualmente se pierden.", 
                    correct: false,
                    explanation: "Aunque puede ser cierto, esta no es la crítica específica de Aristóteles."
                },
                { 
                    text: "Porque los honores generan envidia y conflictos sociales.", 
                    correct: false,
                    explanation: "Aristóteles se centra en las características lógicas del Sumo Bien, no en efectos sociales."
                }
            ],
            hint: "Recuerda las dos características del Sumo Bien: ¿Los honores se buscan por sí mismos o por otra cosa? ¿Dependen solo de nosotros o también de otros?",
            difficulty: 'intermedio',
            topic: 'Crítica a los honores'
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
            'Cadena de fines': 1,
            'Sumo Bien': 1,
            'Felicidad como fin último': 1,
            'Crítica al placer': 1,
            'Función humana específica': 1,
            'Verdadera felicidad': 1,
            'Vida contemplativa': 1,
            'Sabiduría y autarquía': 1,
            'Virtudes éticas': 1,
            'Término medio': 1,
            'Razón y pasiones': 1,
            'Crítica a los honores': 1
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
    const missingFields = requiredFields.filter(field => !ARISTOTELES_THEME[field]);
    
    if (missingFields.length > 0) {
        console.error(`❌ Faltan campos requeridos: ${missingFields.join(', ')}`);
        return false;
    }
    
    // Validar preguntas
    const invalidQuestions = ARISTOTELES_THEME.questions.filter((q, index) => {
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
        ...ARISTOTELES_THEME.stats,
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
console.log(`📊 Estadísticas: ${ARISTOTELES_THEME.questions.length} preguntas, ${ARISTOTELES_THEME.stats.estimatedTime} min estimados`);

// Exportar tema para uso global
if (typeof window !== 'undefined') {
    window.ARISTOTELES_THEME = ARISTOTELES_THEME;
    console.log('🌐 Tema de Aristóteles disponible globalmente');
}