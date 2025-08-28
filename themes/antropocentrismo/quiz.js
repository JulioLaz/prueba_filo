// ========================================
// 🎭 TEMA: ANTROPOCENTRISMO - EL HUMANO EN EL CENTRO DEL UNIVERSO
// ========================================
// 📚 Unidad IV: Historia de la Filosofía - Del Teocentrismo al Humanismo

console.log('🎭 Cargando tema: Antropocentrismo - El humano en el centro del universo...');
const themeLoadStart = performance.now();

/**
 * Configuración del tema de Antropocentrismo
 */
const ANTROPOCENTRISMO_THEME = {
    id: 'antropocentrismo',
    title: 'Antropocentrismo: El Humano en el Centro del Universo',
    description: 'Explora el gran cambio del pensamiento medieval al moderno: del teocentrismo al antropocentrismo, el Renacimiento, el Humanismo y sus implicaciones éticas contemporáneas.',
    icon: '🎭',
    gradient: 'linear-gradient(135deg, #d4af37 0%, #ffd700 100%)',
    difficulty: 'intermedio',
    timeLimit: 30,
    contentFile: 'content/antropocentrismo.html',
    
    // Metadata del tema
    metadata: {
        author: 'Cuestionarios de Filosofía',
        version: '1.0',
        lastUpdated: '2024-08-21',
        category: 'Historia de la Filosofía',
        prerequisites: ['etica'],
        learningObjectives: [
            'Comprender la transición del teocentrismo medieval al antropocentrismo moderno',
            'Analizar las manifestaciones del antropocentrismo en el Renacimiento y el Humanismo',
            'Evaluar el impacto del antropocentrismo en la ciencia, el arte y la sociedad',
            'Examinar las implicaciones éticas del pensamiento antropocéntrico',
            'Reflexionar sobre las críticas contemporáneas al antropocentrismo',
            'Considerar alternativas ecocéntricas y posthumanistas'
        ]
    },
    
    questions: [
        {
            id: 'antropocentrismo_001',
            question: "¿Cuál es la diferencia fundamental entre teocentrismo y antropocentrismo?",
            answers: [
                {
                    text: "El teocentrismo se enfoca en la naturaleza, mientras que el antropocentrismo se enfoca en la tecnología.",
                    correct: false,
                    explanation: "Esta distinción no es correcta. Ambos conceptos se refieren a qué entidad se considera central en la cosmovisión."
                },
                {
                    text: "En el teocentrismo Dios es el centro de toda realidad y valor, mientras que en el antropocentrismo el ser humano ocupa esa posición central.",
                    correct: true,
                    explanation: "Exacto. El teocentrismo medieval colocaba a Dios como centro absoluto, mientras el antropocentrismo moderno sitúa al ser humano como medida de todas las cosas."
                },
                {
                    text: "El teocentrismo es una filosofía antigua, mientras que el antropocentrismo es completamente moderno.",
                    correct: false,
                    explanation: "Aunque el antropocentrismo se desarrolló plenamente en la modernidad, elementos antropocéntricos existían en la filosofía griega clásica."
                },
                {
                    text: "No hay diferencias reales entre ambos conceptos, solo son nombres distintos para la misma idea.",
                    correct: false,
                    explanation: "Son cosmovisiones fundamentalmente diferentes que han marcado épocas históricas distintas."
                },
                {
                    text: "El teocentrismo es una religión, mientras que el antropocentrismo es una ciencia.",
                    correct: false,
                    explanation: "Ambos son marcos conceptuales o cosmovisiones, no religiones o ciencias específicas."
                }
            ],
            hint: "Piensa en cómo el arte renacentista puso al ser humano en el centro: técnicas de representación, temas elegidos y la forma de representar el cuerpo humano.",
            difficulty: 'intermedio',
            topic: 'Manifestaciones artísticas'
        },
        
        {
            id: 'antropocentrismo_004',
            question: "¿Qué representa la frase de Protágoras 'El hombre es la medida de todas las cosas' en el contexto del antropocentrismo?",
            answers: [
                {
                    text: "Que los humanos son físicamente superiores a todos los demás seres vivos.",
                    correct: false,
                    explanation: "La frase no se refiere a superioridad física, sino a la centralidad epistemológica y axiológica del ser humano."
                },
                {
                    text: "Que el ser humano es el criterio fundamental para determinar verdad, valores y significado en el universo.",
                    correct: true,
                    explanation: "Exacto. Esta máxima sofista expresa la idea central del antropocentrismo: el humano como punto de referencia para todo conocimiento y valoración."
                },
                {
                    text: "Que solo los hombres (género masculino) pueden conocer la verdad.",
                    correct: false,
                    explanation: "La frase usa 'hombre' en sentido genérico (ser humano), no se refiere exclusivamente al género masculino."
                },
                {
                    text: "Que los humanos deben medir físicamente todas las cosas del mundo.",
                    correct: false,
                    explanation: "Es una interpretación literal incorrecta. Se refiere a ser el criterio de evaluación, no a medición física."
                },
                {
                    text: "Que cada persona individual es la medida de su propia realidad personal.",
                    correct: false,
                    explanation: "Aunque Protágoras defendía cierto relativismo, en el contexto antropocéntrico se refiere a la humanidad como especie."
                }
            ],
            hint: "¿Qué significa ser 'medida' de algo? Piensa en términos de criterio, patrón o punto de referencia para evaluar.",
            difficulty: 'intermedio',
            topic: 'Fundamentos filosóficos'
        },
        
        {
            id: 'antropocentrismo_005',
            question: "¿Cuál fue la paradoja del heliocentrismo copernicano en relación con el antropocentrismo?",
            answers: [
                {
                    text: "Destruyó completamente el antropocentrismo al demostrar que la Tierra no es el centro del universo.",
                    correct: false,
                    explanation: "Aunque desplazó la Tierra del centro físico, el heliocentrismo reforzó otro aspecto del antropocentrismo."
                },
                {
                    text: "No tuvo ningún impacto en el pensamiento antropocéntrico de la época.",
                    correct: false,
                    explanation: "El heliocentrismo sí tuvo un impacto significativo, aunque paradójico."
                },
                {
                    text: "Aunque desplazó la Tierra del centro físico del universo, reforzó la centralidad de la razón humana como herramienta para descubrir la verdad.",
                    correct: true,
                    explanation: "Correcto. La paradoja es que al 'humillar' la posición de la Tierra, simultáneamente exaltó la capacidad de la mente humana para descubrir verdades cósmicas."
                },
                {
                    text: "Demostró que los humanos son más importantes que el Sol.",
                    correct: false,
                    explanation: "El heliocentrismo no estableció jerarquías de importancia entre humanos y astros."
                },
                {
                    text: "Confirmó que los humanos están destinados a viajar al espacio.",
                    correct: false,
                    explanation: "Los viajes espaciales no fueron una consideración de la época copernicana."
                }
            ],
            hint: "Considera qué aspectos del antropocentrismo se 'humillaron' y cuáles se 'exaltaron' con el descubrimiento copernicano.",
            difficulty: 'avanzado',
            topic: 'Revolución científica'
        },
        
        {
            id: 'antropocentrismo_006',
            question: "¿Cómo cambió la visión del trabajo y la riqueza con el desarrollo del antropocentrismo?",
            answers: [
                {
                    text: "El trabajo se volvió una maldición y la riqueza un pecado imperdonable.",
                    correct: false,
                    explanation: "Esta era más bien la visión medieval tradicional que el antropocentrismo ayudó a transformar."
                },
                {
                    text: "No hubo cambios significativos en la valoración del trabajo y la riqueza.",
                    correct: false,
                    explanation: "El antropocentrismo trajo cambios profundos en la ética económica."
                },
                {
                    text: "La riqueza pasó de ser vista como pecado a ser considerada signo de virtud y habilidad humana, y el trabajo se valoró como expresión de la capacidad creativa humana.",
                    correct: true,
                    explanation: "Exacto. El antropocentrismo transformó la ética económica medieval, legitimando la prosperidad terrenal como expresión de las capacidades humanas."
                },
                {
                    text: "Solo los nobles podían trabajar honradamente, mientras que los comerciantes seguían siendo considerados pecadores.",
                    correct: false,
                    explanation: "Al contrario, el antropocentrismo especialmente valoró las actividades comerciales y burguesas."
                },
                {
                    text: "Se estableció que solo el trabajo intelectual tenía valor, despreciándose el trabajo manual.",
                    correct: false,
                    explanation: "Aunque se valoró lo intelectual, el antropocentrismo también dignificó diversas formas de actividad humana."
                }
            ],
            hint: "Piensa en cómo la nueva valoración de las capacidades humanas afectó la percepción de actividades que anteriormente se consideraban mundanas o incluso pecaminosas.",
            difficulty: 'intermedio',
            topic: 'Ética económica'
        },
        
        {
            id: 'antropocentrismo_007',
            question: "¿Qué significa el concepto de 'dignidad humana' en el contexto del humanismo renacentista?",
            answers: [
                {
                    text: "Que solo los aristócratas y nobles tienen verdadera dignidad.",
                    correct: false,
                    explanation: "El humanismo renacentista enfatizó la dignidad universal de todos los seres humanos."
                },
                {
                    text: "Que los humanos poseen un valor intrínseco derivado de su capacidad racional y su libertad de elección.",
                    correct: true,
                    explanation: "Correcto. Para humanistas como Pico della Mirandola, la dignidad humana radica en nuestra naturaleza racional y nuestra capacidad de autoconfiguración."
                },
                {
                    text: "Que la dignidad humana depende únicamente de la riqueza material que se posea.",
                    correct: false,
                    explanation: "La dignidad humanista se basaba en cualidades inherentes, no en posesiones materiales."
                },
                {
                    text: "Que los humanos son dignos solo cuando actúan de acuerdo con los mandatos religiosos.",
                    correct: false,
                    explanation: "Aunque no rechazaba la religión, el humanismo basaba la dignidad en la naturaleza humana misma."
                },
                {
                    text: "Que la dignidad es algo que se gana mediante las buenas acciones.",
                    correct: false,
                    explanation: "Para los humanistas, la dignidad era intrínseca a la condición humana, no algo que se gana."
                }
            ],
            hint: "Considera las ideas de Pico della Mirandola sobre qué hace especial al ser humano y por qué merecemos respeto.",
            difficulty: 'intermedio',
            topic: 'Humanismo renacentista'
        },
        
        {
            id: 'antropocentrismo_008',
            question: "¿Cuáles son las principales críticas contemporáneas al antropocentrismo?",
            answers: [
                {
                    text: "Que no ha producido ningún avance científico o tecnológico útil.",
                    correct: false,
                    explanation: "Las críticas reconocen los logros del antropocentrismo, pero cuestionan sus costos y limitaciones."
                },
                {
                    text: "Crisis ecológica, extinción de especies, instrumentalización de la naturaleza y exclusión de consideración moral a entidades no humanas.",
                    correct: true,
                    explanation: "Perfecto. Las críticas actuales se centran en los efectos destructivos del antropocentrismo sobre el medio ambiente y otros seres vivos."
                },
                {
                    text: "Únicamente que ha producido demasiados avances tecnológicos.",
                    correct: false,
                    explanation: "La crítica no es a la cantidad de avances, sino a sus efectos y a la mentalidad subyacente."
                },
                {
                    text: "Que ha hecho a los humanos demasiado humildes frente a la naturaleza.",
                    correct: false,
                    explanation: "Al contrario, se critica al antropocentrismo por promover una actitud de dominio sobre la naturaleza."
                },
                {
                    text: "Solamente que ha reducido la importancia de la religión en la sociedad.",
                    correct: false,
                    explanation: "Aunque algunos critican la secularización, las críticas principales son ecológicas y éticas."
                }
            ],
            hint: "Piensa en los problemas ambientales actuales y en cómo se relacionan con una visión del mundo que sitúa a los humanos por encima de todo lo demás.",
            difficulty: 'intermedio',
            topic: 'Críticas contemporáneas'
        },
        
        {
            id: 'antropocentrismo_009',
            question: "¿Qué alternativas al antropocentrismo proponen los movimientos ecologistas?",
            answers: [
                {
                    text: "Volver completamente al teocentrismo medieval.",
                    correct: false,
                    explanation: "Los ecologistas no proponen generalmente un retorno al teocentrismo, sino nuevas formas de relacionarse con la naturaleza."
                },
                {
                    text: "Biocentrismo, ecocentrismo, derechos de la naturaleza y ética de la responsabilidad hacia las generaciones futuras.",
                    correct: true,
                    explanation: "Exacto. Estas alternativas proponen ampliar la consideración moral más allá de los humanos para incluir otros seres vivos y ecosistemas."
                },
                {
                    text: "Que los animales gobiernen a los humanos.",
                    correct: false,
                    explanation: "No se trata de invertir jerarquías, sino de desarrollar relaciones más equilibradas y respetuosas."
                },
                {
                    text: "Eliminar completamente la tecnología y la ciencia modernas.",
                    correct: false,
                    explanation: "Aunque algunos ecologistas son críticos de ciertas tecnologías, no proponen eliminar toda la ciencia."
                },
                {
                    text: "Que solo los científicos tomen decisiones sobre el medio ambiente.",
                    correct: false,
                    explanation: "Los movimientos ecologistas suelen promover participación democrática, no tecnocracia."
                }
            ],
            hint: "¿Qué prefijos conoces que podrían reemplazar 'antropo-' (humano) en 'antropocentrismo'? Piensa en bio- (vida) y eco- (casa/ambiente).",
            difficulty: 'intermedio',
            topic: 'Alternativas ecológicas'
        },
        
        {
            id: 'antropocentrismo_010',
            question: "¿Cómo plantea el posthumanismo y el transhumanismo nuevos desafíos al antropocentrismo tradicional?",
            answers: [
                {
                    text: "Defendiendo exactamente las mismas ideas que el antropocentrismo clásico.",
                    correct: false,
                    explanation: "Posthumanismo y transhumanismo plantean perspectivas novedosas que van más allá del antropocentrismo tradicional."
                },
                {
                    text: "Cuestionando los límites de lo 'humano' a través de la inteligencia artificial, la mejora genética y la fusión humano-máquina.",
                    correct: true,
                    explanation: "Correcto. Estos movimientos amplían o cuestionan las fronteras de lo humano, planteando nuevas preguntas sobre quién merece consideración moral."
                },
                {
                    text: "Promoviendo únicamente el regreso a formas de vida primitivas.",
                    correct: false,
                    explanation: "Aunque algunos aspectos son críticos de la modernidad, estos movimientos suelen ser pro-tecnológicos."
                },
                {
                    text: "Negando completamente la existencia de diferencias entre humanos y animales.",
                    correct: false,
                    explanation: "No niegan diferencias, sino que cuestionan las implicaciones morales absolutas de esas diferencias."
                },
                {
                    text: "Defendiendo que solo los robots deben tener derechos.",
                    correct: false,
                    explanation: "No se trata de excluir a los humanos, sino de expandir quién puede ser sujeto de consideración moral."
                }
            ],
            hint: "Piensa en cómo las nuevas tecnologías (IA, ingeniería genética, cibernética) están redefiniendo qué significa ser 'humano'.",
            difficulty: 'avanzado',
            topic: 'Posthumanismo y transhumanismo'
        },
        
        {
            id: 'antropocentrismo_011',
            question: "¿Cuál fue el impacto del antropocentrismo en el desarrollo de la democracia moderna?",
            answers: [
                {
                    text: "El antropocentrismo se opuso completamente al desarrollo democrático.",
                    correct: false,
                    explanation: "Al contrario, el antropocentrismo proporcionó fundamentos teóricos importantes para la democracia."
                },
                {
                    text: "No tuvo ninguna relación con el desarrollo de sistemas democráticos.",
                    correct: false,
                    explanation: "El antropocentrismo y la democracia moderna están conceptualmente conectados."
                },
                {
                    text: "Proporcionó la base teórica para la soberanía popular, los derechos individuales y la idea de que los humanos pueden gobernarse racionalmente.",
                    correct: true,
                    explanation: "Exacto. La valoración antropocéntrica de la razón humana y la dignidad individual fundamentó los principios democráticos modernos."
                },
                {
                    text: "Solo permitió la democracia para los más ricos.",
                    correct: false,
                    explanation: "Aunque históricamente la democracia fue limitada, el antropocentrismo teóricamente apoyaba la igualdad humana fundamental."
                },
                {
                    text: "Estableció que solo los filósofos podían participar en política.",
                    correct: false,
                    explanation: "Esto sería más bien una propuesta platónica, no una consecuencia del antropocentrismo moderno."
                }
            ],
            hint: "Considera cómo la idea de que los humanos son racionales y dignos se relaciona con conceptos como soberanía popular y derechos humanos.",
            difficulty: 'intermedio',
            topic: 'Antropocentrismo y política'
        },
        
        {
            id: 'antropocentrismo_012',
            question: "¿Cómo se relaciona el antropocentrismo con la crisis climática actual?",
            answers: [
                {
                    text: "El antropocentrismo ha sido completamente neutral respecto al cambio climático.",
                    correct: false,
                    explanation: "El antropocentrismo ha tenido un impacto directo en nuestra relación con el medio ambiente."
                },
                {
                    text: "El antropocentrismo ha solucionado completamente todos los problemas ambientales.",
                    correct: false,
                    explanation: "Al contrario, muchos ven al antropocentrismo como parte del problema ambiental."
                },
                {
                    text: "La mentalidad antropocéntrica de dominio sobre la naturaleza contribuyó a la explotación desmedida de recursos y al deterioro ambiental.",
                    correct: true,
                    explanation: "Correcto. La visión de la naturaleza como recurso para uso humano ilimitado es una raíz conceptual importante de la crisis ecológica."
                },
                {
                    text: "Solo las culturas no occidentales han causado problemas ambientales.",
                    correct: false,
                    explanation: "El antropocentrismo occidental ha sido particularmente influyente en los patrones de consumo global."
                },
                {
                    text: "El antropocentrismo siempre ha promovido la protección ambiental.",
                    correct: false,
                    explanation: "Históricamente, el antropocentrismo ha tendido más hacia la explotación que hacia la protección ambiental."
                }
            ],
            hint: "Piensa en cómo una visión que ve a la naturaleza principalmente como recurso para uso humano podría contribuir a problemas ambientales.",
            difficulty: 'intermedio',
            topic: 'Antropocentrismo y ecología'
        },
        
        {
            id: 'antropocentrismo_013',
            question: "¿Qué papel jugó el mecenazgo en el desarrollo del antropocentrismo renacentista?",
            answers: [
                {
                    text: "Fue un obstáculo que impidió el desarrollo del arte antropocéntrico.",
                    correct: false,
                    explanation: "Al contrario, el mecenazgo fue fundamental para el florecimiento del arte antropocéntrico."
                },
                {
                    text: "Permitió que familias burguesas como los Médici financiaran arte que celebraba las capacidades y logros humanos, transformando el arte de glorificar solo a Dios a glorificar también la grandeza humana.",
                    correct: true,
                    explanation: "Exacto. El mecenazgo creó un sistema donde el arte servía tanto para la gloria divina como para demostrar el poder, la cultura y las capacidades humanas."
                },
                {
                    text: "Solo benefició a los artistas religiosos que pintaban temas sagrados.",
                    correct: false,
                    explanation: "El mecenazgo renacentista promovió una gran diversidad de temas, incluyendo mitología, retratos y temas seculares."
                },
                {
                    text: "Eliminó completamente la influencia de la Iglesia en el arte.",
                    correct: false,
                    explanation: "Aunque diversificó el arte, no eliminó la influencia religiosa, sino que la complementó con temas humanísticos."
                },
                {
                    text: "No tuvo ninguna influencia significativa en el desarrollo artístico de la época.",
                    correct: false,
                    explanation: "El mecenazgo fue uno de los factores más importantes en el desarrollo del arte renacentista."
                }
            ],
            hint: "Considera cómo el financiamiento de familias poderosas cambió los temas y propósitos del arte, más allá de solo servir a la Iglesia.",
            difficulty: 'intermedio',
            topic: 'Mecenazgo renacentista'
        },
        
        {
            id: 'antropocentrismo_014',
            question: "¿Cómo influyó el antropocentrismo en el desarrollo del método científico moderno?",
            answers: [
                {
                    text: "Desalentó completamente el desarrollo de la ciencia experimental.",
                    correct: false,
                    explanation: "Al contrario, el antropocentrismo fue fundamental para el desarrollo del método científico."
                },
                {
                    text: "No tuvo ninguna relación con el desarrollo científico.",
                    correct: false,
                    explanation: "El antropocentrismo y el método científico moderno están estrechamente relacionados."
                },
                {
                    text: "Promovió la confianza en la razón humana como herramienta para interrogar la naturaleza, llevando al desarrollo de la experimentación controlada y la búsqueda de leyes naturales.",
                    correct: true,
                    explanation: "Correcto. La confianza antropocéntrica en las capacidades humanas legitimó la investigación empírica y el cuestionamiento racional de la naturaleza."
                },
                {
                    text: "Solo permitió el estudio de temas relacionados con el arte.",
                    correct: false,
                    explanation: "El antropocentrismo influyó en todas las áreas del conocimiento, no solo en el arte."
                },
                {
                    text: "Prohibió cualquier investigación que cuestionara las creencias tradicionales.",
                    correct: false,
                    explanation: "El antropocentrismo precisamente promovió el cuestionamiento racional de las tradiciones."
                }
            ],
            hint: "Piensa en cómo la valoración de la razón humana se relaciona con la idea de que podemos entender y controlar la naturaleza mediante la ciencia.",
            difficulty: 'intermedio',
            topic: 'Antropocentrismo y ciencia'
        },
        
        {
            id: 'antropocentrismo_015',
            question: "¿Cuál es la importancia de la frase 'carpe diem' en el contexto del antropocentrismo?",
            answers: [
                {
                    text: "Representa una vuelta al pesimismo medieval sobre la vida terrenal.",
                    correct: false,
                    explanation: "Al contrario, 'carpe diem' representa un cambio hacia el optimismo y valoración de la vida presente."
                },
                {
                    text: "Simboliza el cambio de una mentalidad medieval que veía la vida terrenal como valle de lágrimas, hacia una valoración positiva del presente y los placeres mundanos.",
                    correct: true,
                    explanation: "Exacto. 'Carpe diem' refleja la nueva actitud antropocéntrica que valora la experiencia humana presente por encima de la preparación exclusiva para la vida eterna."
                },
                {
                    text: "Es una crítica directa a todas las formas de religiosidad.",
                    correct: false,
                    explanation: "No es necesariamente anti-religiosa, sino que equilibra lo espiritual con lo terrenal."
                },
                {
                    text: "Solo se refiere a la acumulación de riquezas materiales.",
                    correct: false,
                    explanation: "'Carpe diem' abarca una valoración más amplia de todas las experiencias vitales, no solo la riqueza."
                },
                {
                    text: "No tiene ninguna relación con el pensamiento antropocéntrico.",
                    correct: false,
                    explanation: "'Carpe diem' es una expresión característica de la mentalidad antropocéntrica renacentista."
                }
            ],
            hint: "Considera cómo esta frase latina refleja un cambio en la actitud hacia la vida presente versus la vida eterna.",
            difficulty: 'basico',
            topic: 'Mentalidad antropocéntrica'
        },
        
        {
            id: 'antropocentrismo_016',
            question: "¿Qué desafíos presenta la inteligencia artificial al antropocentrismo tradicional?",
            answers: [
                {
                    text: "Ningún desafío, ya que las máquinas nunca podrán ser inteligentes.",
                    correct: false,
                    explanation: "El desarrollo actual de IA sí presenta desafíos conceptuales importantes al antropocentrismo."
                },
                {
                    text: "Cuestiona si la racionalidad es exclusivamente humana y plantea preguntas sobre quién merece consideración moral en un futuro con IA avanzada.",
                    correct: true,
                    explanation: "Correcto. La IA desafía la premisa antropocéntrica de que solo los humanos poseen racionalidad significativa y merecen consideración moral."
                },
                {
                    text: "Solo representa una amenaza económica para el empleo humano.",
                    correct: false,
                    explanation: "Aunque hay implicaciones económicas, los desafíos al antropocentrismo son más profundos y filosóficos."
                },
                {
                    text: "Confirma completamente la superioridad humana al demostrar que somos capaces de crear máquinas.",
                    correct: false,
                    explanation: "Aunque muestra capacidades humanas, también cuestiona qué hace únicos a los humanos."
                },
                {
                    text: "Solo afecta a los programadores de computadoras.",
                    correct: false,
                    explanation: "Los desafíos de la IA al antropocentrismo afectan a toda la sociedad y nuestra comprensión de nosotros mismos."
                }
            ],
            hint: "Piensa en qué pasaría si las máquinas desarrollaran capacidades que tradicionalmente consideramos exclusivamente humanas, como el razonamiento o la creatividad.",
            difficulty: 'avanzado',
            topic: 'IA y antropocentrismo'
        },
        
        {
            id: 'antropocentrismo_017',
            question: "¿Cómo se manifiesta el individualismo en el contexto del antropocentrismo renacentista?",
            answers: [
                {
                    text: "A través del completo rechazo de cualquier forma de vida comunitaria.",
                    correct: false,
                    explanation: "El individualismo renacentista no rechazaba la comunidad, sino que valoraba más la personalidad individual."
                },
                {
                    text: "En el desarrollo de autobiografías, retratos personalizados, firmas de artistas y espacios privados en la arquitectura.",
                    correct: true,
                    explanation: "Perfecto. Estas manifestaciones muestran el creciente interés por la individualidad y la experiencia personal única."
                },
                {
                    text: "Únicamente en la promoción del egoísmo y la falta de responsabilidad social.",
                    correct: false,
                    explanation: "El individualismo renacentista era compatible con la responsabilidad cívica y social."
                },
                {
                    text: "Solo en la creación de leyes que favorecían a los ricos sobre los pobres.",
                    correct: false,
                    explanation: "Aunque hubo desigualdades, el individualismo se manifestó más en aspectos culturales y artísticos."
                },
                {
                    text: "En la eliminación de todas las tradiciones culturales.",
                    correct: false,
                    explanation: "El Renacimiento más bien reinterpretó tradiciones clásicas desde una perspectiva individual."
                }
            ],
            hint: "Piensa en las nuevas formas de expresión personal que surgieron durante el Renacimiento, desde el arte hasta la arquitectura.",
            difficulty: 'intermedio',
            topic: 'Individualismo renacentista'
        },
        
        {
            id: 'antropocentrismo_018',
            question: "¿Qué aportes positivos del antropocentrismo debemos considerar al evaluar sus efectos históricos?",
            answers: [
                {
                    text: "No ha tenido ningún aporte positivo significativo.",
                    correct: false,
                    explanation: "Aunque tiene problemas, el antropocentrismo también ha producido avances importantes para la humanidad."
                },
                {
                    text: "Solo ha beneficiado a las élites económicas sin aportar nada al resto de la humanidad.",
                    correct: false,
                    explanation: "Los beneficios del antropocentrismo han sido más amplios, aunque desigualmente distribuidos."
                },
                {
                    text: "Desarrollo de los derechos humanos, avance científico-tecnológico, sistemas democráticos, valoración de la autonomía individual y mejoras en la calidad de vida.",
                    correct: true,
                    explanation: "Correcto. Es importante reconocer estos logros al evaluar críticamente el antropocentrismo, para desarrollar alternativas que conserven lo positivo."
                },
                {
                    text: "Únicamente ha promovido el desarrollo artístico sin otros beneficios.",
                    correct: false,
                    explanation: "Los aportes del antropocentrismo se extienden mucho más allá del arte."
                },
                {
                    text: "Solo ha servido para justificar la dominación de unos humanos sobre otros.",
                    correct: false,
                    explanation: "Aunque ha sido usado para justificar dominación, también ha promovido ideales de igualdad y dignidad humana."
                }
            ],
            hint: "Considera tanto los aspectos problemáticos como los beneficiosos del antropocentrismo para hacer una evaluación equilibrada.",
            difficulty: 'intermedio',
            topic: 'Evaluación del antropocentrismo'
        }
    ],
    
    // Estadísticas del tema
    stats: {
        totalQuestions: 18,
        estimatedTime: 20, // minutos
        difficultyBreakdown: {
            basico: 2,
            intermedio: 14,
            avanzado: 2
        },
        topicBreakdown: {
            'Definiciones fundamentales': 1,
            'Factores de transición histórica': 1,
            'Manifestaciones artísticas': 1,
            'Fundamentos filosóficos': 1,
            'Revolución científica': 1,
            'Ética económica': 1,
            'Humanismo renacentista': 1,
            'Críticas contemporáneas': 1,
            'Alternativas ecológicas': 1,
            'Posthumanismo y transhumanismo': 1,
            'Antropocentrismo y política': 1,
            'Antropocentrismo y ecología': 1,
            'Mecenazgo renacentista': 1,
            'Antropocentrismo y ciencia': 1,
            'Mentalidad antropocéntrica': 1,
            'IA y antropocentrismo': 1,
            'Individualismo renacentista': 1,
            'Evaluación del antropocentrismo': 1
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
    console.log('🔍 Validando estructura del tema de Antropocentrismo...');
    
    const requiredFields = ['id', 'title', 'questions'];
    const missingFields = requiredFields.filter(field => !ANTROPOCENTRISMO_THEME[field]);
    
    if (missingFields.length > 0) {
        console.error(`❌ Faltan campos requeridos: ${missingFields.join(', ')}`);
        return false;
    }
    
    // Validar preguntas
    const invalidQuestions = ANTROPOCENTRISMO_THEME.questions.filter((q, index) => {
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
    
    console.log('✅ Tema de Antropocentrismo validado correctamente');
    return true;
}

/**
 * Obtiene estadísticas del tema
 * @returns {Object} Estadísticas detalladas
 */
function getThemeStats() {
    return {
        ...ANTROPOCENTRISMO_THEME.stats,
        validationPassed: validateTheme(),
        loadTime: performance.now() - themeLoadStart
    };
}

// ========================================
// 🚀 INICIALIZACIÓN DEL TEMA
// ========================================

// Validar tema al cargar
if (!validateTheme()) {
    console.error('❌ Error al cargar el tema de Antropocentrismo');
    throw new Error('Tema de Antropocentrismo inválido');
}

const themeLoadEnd = performance.now();
console.log(`✅ Tema de Antropocentrismo cargado exitosamente en ${(themeLoadEnd - themeLoadStart).toFixed(2)}ms`);
console.log(`📊 Estadísticas: ${ANTROPOCENTRISMO_THEME.questions.length} preguntas, ${ANTROPOCENTRISMO_THEME.stats.estimatedTime} min estimados`);

// Exportar tema para uso global
if (typeof window !== 'undefined') {
    window.ANTROPOCENTRISMO_THEME = ANTROPOCENTRISMO_THEME;
    console.log('🌐 Tema de Antropocentrismo disponible globalmente');
}