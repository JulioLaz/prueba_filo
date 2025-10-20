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
                text: "El teocentrismo se enfoca en la naturaleza, mientras que el antropocentrismo se enfoca en la tecnología y el desarrollo técnico.",
                correct: false,
                explanation: "Esta distinción no es correcta. Ambos conceptos se refieren a qué entidad se considera central en la cosmovisión."
            },
            {
                text: "En el teocentrismo Dios es el centro de toda realidad y valor, mientras que en el antropocentrismo el ser humano ocupa esa posición central.",
                correct: true,
                explanation: "Exacto. El teocentrismo medieval colocaba a Dios como centro absoluto, mientras el antropocentrismo moderno sitúa al ser humano como medida de todas las cosas."
            },
            {
                text: "El teocentrismo es una filosofía antigua que se desarrolló en Grecia, mientras que el antropocentrismo es completamente moderno y europeo.",
                correct: false,
                explanation: "Aunque el antropocentrismo se desarrolló plenamente en la modernidad, elementos antropocéntricos existían en la filosofía griega clásica."
            },
            {
                text: "El teocentrismo es una religión monoteísta, mientras que el antropocentrismo es una forma específica de desarrollo científico.",
                correct: false,
                explanation: "Ambos son marcos conceptuales o cosmovisiones históricas, no religiones o ciencias específicas."
            }
        ],
        hint: "¿Qué entidad es el centro en cada cosmovisión? Piensa en la Edad Media y el Renacimiento.",
        difficulty: 'basico',
        topic: 'Concepto central'
    },
    
    {
        id: 'antropocentrismo_002',
        question: "¿Qué representa la frase de Protágoras 'El hombre es la medida de todas las cosas' en el contexto del antropocentrismo?",
        answers: [
            {
                text: "Que los humanos son físicamente superiores a todos los demás seres vivos y deben dominar el entorno natural.",
                correct: false,
                explanation: "La frase no se refiere a superioridad física, sino a la centralidad epistemológica y axiológica del ser humano."
            },
            {
                text: "Que el ser humano es el criterio fundamental para determinar verdad, valores y significado en el universo y la experiencia.",
                correct: true,
                explanation: "Exacto. Esta máxima sofista expresa la idea central del antropocentrismo: el humano como punto de referencia para todo conocimiento y valoración."
            },
            {
                text: "Que solo los hombres (género masculino) pueden conocer la verdad, excluyendo a mujeres y niños de la posibilidad de obtener el conocimiento.",
                correct: false,
                explanation: "La frase usa 'hombre' en sentido genérico (ser humano), no se refiere exclusivamente al género masculino."
            },
            {
                text: "Que los humanos deben medir físicamente todas las cosas del mundo para poder controlarlas y dominarlas.",
                correct: false,
                explanation: "Es una interpretación literal incorrecta. Se refiere a ser el criterio de evaluación, no a medición física."
            }
        ],
        hint: "¿Qué significa ser 'medida' de algo? Piensa en términos de criterio, patrón o punto de referencia para evaluar la realidad.",
        difficulty: 'intermedio',
        topic: 'Fundamentos filosóficos'
    },
    
    {
        id: 'antropocentrismo_003',
        question: "¿Cuál fue la paradoja del heliocentrismo copernicano en relación con el antropocentrismo?",
        answers: [
            {
                text: "Destruyó completamente el antropocentrismo al demostrar que la Tierra no es el centro del universo ni tiene una posición privilegiada.",
                correct: false,
                explanation: "Aunque desplazó la Tierra del centro físico, el heliocentrismo reforzó otro aspecto del antropocentrismo."
            },
            {
                text: "No tuvo ningún impacto relevante en el pensamiento antropocéntrico de la época y solo fue un cambio astronómico sin consecuencias filosóficas.",
                correct: false,
                explanation: "El heliocentrismo sí tuvo un impacto significativo, aunque paradójico, al modificar la percepción humana de su lugar en el cosmos."
            },
            {
                text: "Aunque desplazó la Tierra del centro físico, reforzó la centralidad de la razón humana como herramienta poderosa para descubrir la verdad cósmica.",
                correct: true,
                explanation: "Correcto. La paradoja es que al 'humillar' la posición de la Tierra, simultáneamente exaltó la capacidad de la mente humana para descubrir verdades universales."
            },
            {
                text: "Demostró que los humanos son más importantes que el Sol al ser los únicos capaces de idear el modelo y verificar su utilidad.",
                correct: false,
                explanation: "El heliocentrismo no estableció jerarquías de importancia entre humanos y astros en ese sentido filosófico."
            }
        ],
        hint: "Considera qué aspectos del antropocentrismo se 'humillaron' (posición física) y cuáles se 'exaltaron' (capacidad mental) con el descubrimiento copernicano.",
        difficulty: 'avanzado',
        topic: 'Revolución científica'
    },
    
    {
        id: 'antropocentrismo_004',
        question: "¿Cómo cambió la visión del trabajo y la riqueza con el desarrollo del antropocentrismo y el Renacimiento?",
        answers: [
            {
                text: "El trabajo se volvió una maldición divina para los humanos y la riqueza un pecado imperdonable, lo que llevó a un estancamiento económico.",
                correct: false,
                explanation: "Esta era más bien la visión medieval tradicional que el antropocentrismo ayudó a transformar."
            },
            {
                text: "No hubo cambios significativos en la valoración del trabajo y la riqueza, pues se mantuvieron las estructuras económicas medievales inalteradas.",
                correct: false,
                explanation: "El antropocentrismo trajo cambios profundos en la ética económica y social de la época."
            },
            {
                text: "La riqueza pasó de ser vista como pecado a ser considerada signo de virtud y habilidad, y el trabajo se valoró como expresión de la capacidad creativa humana.",
                correct: true,
                explanation: "Exacto. El antropocentrismo transformó la ética económica medieval, legitimando la prosperidad terrenal como expresión de las capacidades humanas y el esfuerzo individual."
            },
            {
                text: "Se estableció que solo el trabajo intelectual tenía valor intrínseco, despreciándose por completo cualquier forma de trabajo manual o artesanal.",
                correct: false,
                explanation: "Aunque se valoró lo intelectual, el antropocentrismo también dignificó diversas formas de actividad humana, incluido el arte y la artesanía."
            }
        ],
        hint: "Piensa en cómo la nueva valoración de las capacidades humanas afectó la percepción de actividades que anteriormente se consideraban mundanas o incluso pecaminosas.",
        difficulty: 'intermedio',
        topic: 'Ética económica'
    },
    
    {
        id: 'antropocentrismo_005',
        question: "¿Qué significa el concepto de 'dignidad humana' en el contexto del humanismo renacentista?",
        answers: [
            {
                text: "Que solo los aristócratas y nobles tienen verdadera dignidad debido a su linaje y fortuna heredada.",
                correct: false,
                explanation: "El humanismo renacentista enfatizó la dignidad universal de todos los seres humanos."
            },
            {
                text: "Que los humanos poseen un valor intrínseco derivado de su capacidad racional, su libertad de elección y su potencial ilimitado de autodesarrollo.",
                correct: true,
                explanation: "Correcto. Para humanistas como Pico della Mirandola, la dignidad humana radica en nuestra naturaleza racional y nuestra capacidad de autoconfiguración o 'ser lo que queramos ser'."
            },
            {
                text: "Que la dignidad humana depende únicamente de la riqueza material y el poder político que se posea o se logre acumular.",
                correct: false,
                explanation: "La dignidad humanista se basaba en cualidades inherentes, no en posesiones materiales."
            },
            {
                text: "Que la dignidad es algo que se gana mediante las buenas acciones y la obediencia a los mandatos religiosos, siendo por tanto variable.",
                correct: false,
                explanation: "Para los humanistas, la dignidad era intrínseca a la condición humana, no algo que se gana."
            }
        ],
        hint: "Considera las ideas de Pico della Mirandola sobre qué hace especial al ser humano y por qué merecemos respeto: ¿es algo ganado o inherente?",
        difficulty: 'intermedio',
        topic: 'Humanismo renacentista'
    },
    
    {
        id: 'antropocentrismo_006',
        question: "¿Cuáles son las principales críticas contemporáneas al antropocentrismo más tradicional?",
        answers: [
            {
                text: "Que no ha producido ningún avance científico o tecnológico útil para el desarrollo social.",
                correct: false,
                explanation: "Las críticas reconocen los logros del antropocentrismo, pero cuestionan sus costos y limitaciones."
            },
            {
                text: "Crisis ecológica, extinción de especies, instrumentalización de la naturaleza y exclusión de consideración moral a entidades no humanas.",
                correct: true,
                explanation: "Perfecto. Las críticas actuales se centran en los efectos destructivos del antropocentrismo sobre el medio ambiente y otros seres vivos, al tratarlos como meros recursos."
            },
            {
                text: "Únicamente que ha producido demasiados avances tecnológicos que nos han alejado de la vida sencilla y natural.",
                correct: false,
                explanation: "La crítica no es a la cantidad de avances, sino a sus efectos y a la mentalidad subyacente de dominio sobre el planeta."
            },
            {
                text: "Que ha hecho a los humanos demasiado humildes frente a la naturaleza, promoviendo la inacción y el pesimismo.",
                correct: false,
                explanation: "Al contrario, se critica al antropocentrismo por promover una actitud de dominio sobre la naturaleza."
            }
        ],
        hint: "Piensa en los problemas ambientales actuales y en cómo se relacionan con una visión del mundo que sitúa a los humanos por encima de todo lo demás.",
        difficulty: 'intermedio',
        topic: 'Críticas contemporáneas'
    },
    
    {
        id: 'antropocentrismo_007',
        question: "¿Qué alternativas al antropocentrismo proponen los movimientos ecologistas más radicales y profundos?",
        answers: [
            {
                text: "Volver completamente al teocentrismo medieval y a las estructuras sociales anteriores al Renacimiento.",
                correct: false,
                explanation: "Los ecologistas no proponen generalmente un retorno al teocentrismo, sino nuevas formas de relacionarse con la naturaleza."
            },
            {
                text: "Biocentrismo, ecocentrismo, derechos de la naturaleza y ética de la responsabilidad hacia las generaciones futuras y otros seres vivos.",
                correct: true,
                explanation: "Exacto. Estas alternativas proponen ampliar la consideración moral más allá de los humanos para incluir otros seres vivos, sistemas biológicos y ecosistemas."
            },
            {
                text: "Que los animales gobiernen a los humanos para restaurar el equilibrio perdido en el planeta.",
                correct: false,
                explanation: "No se trata de invertir jerarquías, sino de desarrollar relaciones más equilibradas y respetuosas, eliminando la idea de dominio absoluto."
            },
            {
                text: "Eliminar completamente la tecnología y la ciencia modernas, volviendo a un estilo de vida de cazadores y recolectores.",
                correct: false,
                explanation: "Aunque algunos ecologistas son críticos de ciertas tecnologías, no proponen eliminar toda la ciencia."
            }
        ],
        hint: "¿Qué prefijos conoces que podrían reemplazar 'antropo-' (humano) en 'antropocentrismo'? Piensa en bio- (vida) y eco- (casa/ambiente).",
        difficulty: 'intermedio',
        topic: 'Alternativas ecológicas'
    },
    
    {
        id: 'antropocentrismo_008',
        question: "¿Cómo plantea el posthumanismo y el transhumanismo nuevos desafíos al antropocentrismo tradicional?",
        answers: [
            {
                text: "Defendiendo exactamente las mismas ideas que el antropocentrismo clásico, pero con tecnología moderna.",
                correct: false,
                explanation: "Posthumanismo y transhumanismo plantean perspectivas novedosas que van más allá del antropocentrismo tradicional."
            },
            {
                text: "Cuestionando los límites de lo 'humano' a través de la inteligencia artificial, la mejora genética y la fusión humano-máquina, expandiendo la consideración moral.",
                correct: true,
                explanation: "Correcto. Estos movimientos amplían o cuestionan las fronteras de lo humano, planteando nuevas preguntas sobre quién o qué merece consideración moral en el futuro."
            },
            {
                text: "Promoviendo únicamente el regreso a formas de vida primitivas o tribales para vivir en armonía con la naturaleza.",
                correct: false,
                explanation: "Aunque algunos aspectos son críticos de la modernidad, estos movimientos suelen ser pro-tecnológicos y futuristas."
            },
            {
                text: "Negando completamente la existencia de diferencias entre humanos y animales, tratando a ambos de forma idéntica.",
                correct: false,
                explanation: "No niegan diferencias, sino que cuestionan las implicaciones morales absolutas de esas diferencias, enfocándose en la tecnología y la evolución futura."
            }
        ],
        hint: "Piensa en cómo las nuevas tecnologías (IA, ingeniería genética, cibernética) están redefiniendo qué significa ser 'humano' y racional.",
        difficulty: 'avanzado',
        topic: 'Posthumanismo y transhumanismo'
    },
    
    {
        id: 'antropocentrismo_009',
        question: "¿Cuál fue el impacto del antropocentrismo en el desarrollo de la democracia moderna?",
        answers: [
            {
                text: "El antropocentrismo se opuso completamente al desarrollo democrático, promoviendo la aristocracia y la oligarquía.",
                correct: false,
                explanation: "Al contrario, el antropocentrismo proporcionó fundamentos teóricos importantes para la democracia."
            },
            {
                text: "No tuvo ninguna relación con el desarrollo de sistemas democráticos, sino que se centró solo en la filosofía y el arte.",
                correct: false,
                explanation: "El antropocentrismo y la democracia moderna están conceptualmente conectados."
            },
            {
                text: "Proporcionó la base teórica para la soberanía popular, los derechos individuales y la idea de que los humanos pueden gobernarse racionalmente a sí mismos.",
                correct: true,
                explanation: "Exacto. La valoración antropocéntrica de la razón humana y la dignidad individual fundamentó los principios democráticos modernos."
            },
            {
                text: "Solo permitió la democracia para los más ricos y educados, excluyendo a la mayoría de la población.",
                correct: false,
                explanation: "Aunque históricamente la democracia fue limitada, el antropocentrismo teóricamente apoyaba la igualdad humana fundamental."
            }
        ],
        hint: "Considera cómo la idea de que los humanos son racionales y dignos se relaciona con conceptos como soberanía popular y derechos humanos universales.",
        difficulty: 'intermedio',
        topic: 'Antropocentrismo y política'
    },
    
    {
        id: 'antropocentrismo_010',
        question: "¿Qué desafíos presenta la inteligencia artificial al antropocentrismo tradicional?",
        answers: [
            {
                text: "Ningún desafío real, ya que las máquinas nunca podrán ser inteligentes o racionales, según los filósofos contemporáneos.",
                correct: false,
                explanation: "El desarrollo actual de IA sí presenta desafíos conceptuales importantes al antropocentrismo."
            },
            {
                text: "Cuestiona si la racionalidad es exclusivamente humana y plantea preguntas sobre quién merece consideración moral en un futuro con IA avanzada.",
                correct: true,
                explanation: "Correcto. La IA desafía la premisa antropocéntrica de que solo los humanos poseen racionalidad significativa y merecen consideración moral."
            },
            {
                text: "Solo representa una amenaza económica para el empleo humano, sin implicaciones filosóficas o éticas profundas.",
                correct: false,
                explanation: "Aunque hay implicaciones económicas, los desafíos al antropocentrismo son más profundos y filosóficos."
            },
            {
                text: "Confirma completamente la superioridad humana al demostrar que somos capaces de crear máquinas inteligentes que nos sirven.",
                correct: false,
                explanation: "Aunque muestra capacidades humanas, también cuestiona qué hace únicos a los humanos, especialmente si la IA nos supera."
            }
        ],
        hint: "Piensa en qué pasaría si las máquinas desarrollaran capacidades que tradicionalmente consideramos exclusivamente humanas, como el razonamiento o la creatividad.",
        difficulty: 'avanzado',
        topic: 'IA y antropocentrismo'
    },
    
    {
        id: 'antropocentrismo_011',
        question: "¿Cómo se manifiesta el individualismo en el contexto del antropocentrismo renacentista?",
        answers: [
            {
                text: "A través del completo rechazo de cualquier forma de vida comunitaria o social y el aislamiento de las personas.",
                correct: false,
                explanation: "El individualismo renacentista no rechazaba la comunidad, sino que valoraba más la personalidad individual."
            },
            {
                text: "En el desarrollo de autobiografías, retratos personalizados, firmas de artistas y espacios privados en la arquitectura.",
                correct: true,
                explanation: "Perfecto. Estas manifestaciones muestran el creciente interés por la individualidad y la experiencia personal única, en contraste con la identidad colectiva medieval."
            },
            {
                text: "Únicamente en la promoción del egoísmo desmedido y la falta total de responsabilidad social y cívica.",
                correct: false,
                explanation: "El individualismo renacentista era compatible con la responsabilidad cívica y social, y se enfocaba más en la expresión personal."
            },
            {
                text: "Solo en la creación de leyes que favorecían a los ricos sobre los pobres en el ámbito de los derechos privados.",
                correct: false,
                explanation: "Aunque hubo desigualdades, el individualismo se manifestó más en aspectos culturales y artísticos de la época."
            }
        ],
        hint: "Piensa en las nuevas formas de expresión personal que surgieron durante el Renacimiento, desde el arte hasta la literatura.",
        difficulty: 'intermedio',
        topic: 'Individualismo renacentista'
    },
    
    {
        id: 'antropocentrismo_012',
        question: "¿Qué aportes positivos del antropocentrismo debemos considerar al evaluar sus efectos históricos?",
        answers: [
            {
                text: "No ha tenido ningún aporte positivo significativo, ya que solo condujo a la destrucción del medio ambiente y a la guerra.",
                correct: false,
                explanation: "Aunque tiene problemas, el antropocentrismo también ha producido avances importantes para la humanidad."
            },
            {
                text: "La promoción de la dignidad humana universal, el desarrollo de los derechos humanos, la ciencia moderna y la consolidación de la democracia.",
                correct: true,
                explanation: "Correcto. El foco en el ser humano llevó al desarrollo de principios éticos y políticos que son la base de la sociedad moderna."
            },
            {
                text: "Solo la creación de grandes obras de arte y literatura, sin ningún impacto en la política o la ciencia.",
                correct: false,
                explanation: "El impacto del antropocentrismo fue mucho más amplio, afectando la política, la ciencia y la economía."
            },
            {
                text: "La eliminación de toda forma de religión o creencia en un ser superior al hombre.",
                correct: false,
                explanation: "El antropocentrismo no eliminó la religión, sino que la colocó en una posición secundaria respecto al ser humano en ciertos ámbitos."
            }
        ],
        hint: "Piensa en las bases de la filosofía moderna, la política, la ética y la ciencia. ¿Qué concepto puso en el centro de todas ellas?",
        difficulty: 'basico',
        topic: 'Aportes históricos'
    },
        
        // {
        //     id: 'antropocentrismo_013',
        //     question: "¿Qué papel jugó el mecenazgo en el desarrollo del antropocentrismo renacentista?",
        //     answers: [
        //         {
        //             text: "Fue un obstáculo que impidió el desarrollo del arte antropocéntrico.",
        //             correct: false,
        //             explanation: "Al contrario, el mecenazgo fue fundamental para el florecimiento del arte antropocéntrico."
        //         },
        //         {
        //             text: "Permitió que familias burguesas como los Médici financiaran arte que celebraba las capacidades y logros humanos, transformando el arte de glorificar solo a Dios a glorificar también la grandeza humana.",
        //             correct: true,
        //             explanation: "Exacto. El mecenazgo creó un sistema donde el arte servía tanto para la gloria divina como para demostrar el poder, la cultura y las capacidades humanas."
        //         },
        //         {
        //             text: "Solo benefició a los artistas religiosos que pintaban temas sagrados.",
        //             correct: false,
        //             explanation: "El mecenazgo renacentista promovió una gran diversidad de temas, incluyendo mitología, retratos y temas seculares."
        //         },
        //         {
        //             text: "Eliminó completamente la influencia de la Iglesia en el arte.",
        //             correct: false,
        //             explanation: "Aunque diversificó el arte, no eliminó la influencia religiosa, sino que la complementó con temas humanísticos."
        //         },
        //         {
        //             text: "No tuvo ninguna influencia significativa en el desarrollo artístico de la época.",
        //             correct: false,
        //             explanation: "El mecenazgo fue uno de los factores más importantes en el desarrollo del arte renacentista."
        //         }
        //     ],
        //     hint: "Considera cómo el financiamiento de familias poderosas cambió los temas y propósitos del arte, más allá de solo servir a la Iglesia.",
        //     difficulty: 'intermedio',
        //     topic: 'Mecenazgo renacentista'
        // },
        
        // {
        //     id: 'antropocentrismo_014',
        //     question: "¿Cómo influyó el antropocentrismo en el desarrollo del método científico moderno?",
        //     answers: [
        //         {
        //             text: "Desalentó completamente el desarrollo de la ciencia experimental.",
        //             correct: false,
        //             explanation: "Al contrario, el antropocentrismo fue fundamental para el desarrollo del método científico."
        //         },
        //         {
        //             text: "No tuvo ninguna relación con el desarrollo científico.",
        //             correct: false,
        //             explanation: "El antropocentrismo y el método científico moderno están estrechamente relacionados."
        //         },
        //         {
        //             text: "Promovió la confianza en la razón humana como herramienta para interrogar la naturaleza, llevando al desarrollo de la experimentación controlada y la búsqueda de leyes naturales.",
        //             correct: true,
        //             explanation: "Correcto. La confianza antropocéntrica en las capacidades humanas legitimó la investigación empírica y el cuestionamiento racional de la naturaleza."
        //         },
        //         {
        //             text: "Solo permitió el estudio de temas relacionados con el arte.",
        //             correct: false,
        //             explanation: "El antropocentrismo influyó en todas las áreas del conocimiento, no solo en el arte."
        //         },
        //         {
        //             text: "Prohibió cualquier investigación que cuestionara las creencias tradicionales.",
        //             correct: false,
        //             explanation: "El antropocentrismo precisamente promovió el cuestionamiento racional de las tradiciones."
        //         }
        //     ],
        //     hint: "Piensa en cómo la valoración de la razón humana se relaciona con la idea de que podemos entender y controlar la naturaleza mediante la ciencia.",
        //     difficulty: 'intermedio',
        //     topic: 'Antropocentrismo y ciencia'
        // },
        
        // {
        //     id: 'antropocentrismo_015',
        //     question: "¿Cuál es la importancia de la frase 'carpe diem' en el contexto del antropocentrismo?",
        //     answers: [
        //         {
        //             text: "Representa una vuelta al pesimismo medieval sobre la vida terrenal.",
        //             correct: false,
        //             explanation: "Al contrario, 'carpe diem' representa un cambio hacia el optimismo y valoración de la vida presente."
        //         },
        //         {
        //             text: "Simboliza el cambio de una mentalidad medieval que veía la vida terrenal como valle de lágrimas, hacia una valoración positiva del presente y los placeres mundanos.",
        //             correct: true,
        //             explanation: "Exacto. 'Carpe diem' refleja la nueva actitud antropocéntrica que valora la experiencia humana presente por encima de la preparación exclusiva para la vida eterna."
        //         },
        //         {
        //             text: "Es una crítica directa a todas las formas de religiosidad.",
        //             correct: false,
        //             explanation: "No es necesariamente anti-religiosa, sino que equilibra lo espiritual con lo terrenal."
        //         },
        //         {
        //             text: "Solo se refiere a la acumulación de riquezas materiales.",
        //             correct: false,
        //             explanation: "'Carpe diem' abarca una valoración más amplia de todas las experiencias vitales, no solo la riqueza."
        //         },
        //         {
        //             text: "No tiene ninguna relación con el pensamiento antropocéntrico.",
        //             correct: false,
        //             explanation: "'Carpe diem' es una expresión característica de la mentalidad antropocéntrica renacentista."
        //         }
        //     ],
        //     hint: "Considera cómo esta frase latina refleja un cambio en la actitud hacia la vida presente versus la vida eterna.",
        //     difficulty: 'basico',
        //     topic: 'Mentalidad antropocéntrica'
        // },
        
        // {
        //     id: 'antropocentrismo_016',
        //     question: "¿Qué desafíos presenta la inteligencia artificial al antropocentrismo tradicional?",
        //     answers: [
        //         {
        //             text: "Ningún desafío, ya que las máquinas nunca podrán ser inteligentes.",
        //             correct: false,
        //             explanation: "El desarrollo actual de IA sí presenta desafíos conceptuales importantes al antropocentrismo."
        //         },
        //         {
        //             text: "Cuestiona si la racionalidad es exclusivamente humana y plantea preguntas sobre quién merece consideración moral en un futuro con IA avanzada.",
        //             correct: true,
        //             explanation: "Correcto. La IA desafía la premisa antropocéntrica de que solo los humanos poseen racionalidad significativa y merecen consideración moral."
        //         },
        //         {
        //             text: "Solo representa una amenaza económica para el empleo humano.",
        //             correct: false,
        //             explanation: "Aunque hay implicaciones económicas, los desafíos al antropocentrismo son más profundos y filosóficos."
        //         },
        //         {
        //             text: "Confirma completamente la superioridad humana al demostrar que somos capaces de crear máquinas.",
        //             correct: false,
        //             explanation: "Aunque muestra capacidades humanas, también cuestiona qué hace únicos a los humanos."
        //         },
        //         {
        //             text: "Solo afecta a los programadores de computadoras.",
        //             correct: false,
        //             explanation: "Los desafíos de la IA al antropocentrismo afectan a toda la sociedad y nuestra comprensión de nosotros mismos."
        //         }
        //     ],
        //     hint: "Piensa en qué pasaría si las máquinas desarrollaran capacidades que tradicionalmente consideramos exclusivamente humanas, como el razonamiento o la creatividad.",
        //     difficulty: 'avanzado',
        //     topic: 'IA y antropocentrismo'
        // },
        
        // {
        //     id: 'antropocentrismo_017',
        //     question: "¿Cómo se manifiesta el individualismo en el contexto del antropocentrismo renacentista?",
        //     answers: [
        //         {
        //             text: "A través del completo rechazo de cualquier forma de vida comunitaria.",
        //             correct: false,
        //             explanation: "El individualismo renacentista no rechazaba la comunidad, sino que valoraba más la personalidad individual."
        //         },
        //         {
        //             text: "En el desarrollo de autobiografías, retratos personalizados, firmas de artistas y espacios privados en la arquitectura.",
        //             correct: true,
        //             explanation: "Perfecto. Estas manifestaciones muestran el creciente interés por la individualidad y la experiencia personal única."
        //         },
        //         {
        //             text: "Únicamente en la promoción del egoísmo y la falta de responsabilidad social.",
        //             correct: false,
        //             explanation: "El individualismo renacentista era compatible con la responsabilidad cívica y social."
        //         },
        //         {
        //             text: "Solo en la creación de leyes que favorecían a los ricos sobre los pobres.",
        //             correct: false,
        //             explanation: "Aunque hubo desigualdades, el individualismo se manifestó más en aspectos culturales y artísticos."
        //         },
        //         {
        //             text: "En la eliminación de todas las tradiciones culturales.",
        //             correct: false,
        //             explanation: "El Renacimiento más bien reinterpretó tradiciones clásicas desde una perspectiva individual."
        //         }
        //     ],
        //     hint: "Piensa en las nuevas formas de expresión personal que surgieron durante el Renacimiento, desde el arte hasta la arquitectura.",
        //     difficulty: 'intermedio',
        //     topic: 'Individualismo renacentista'
        // },
        
        // {
        //     id: 'antropocentrismo_018',
        //     question: "¿Qué aportes positivos del antropocentrismo debemos considerar al evaluar sus efectos históricos?",
        //     answers: [
        //         {
        //             text: "No ha tenido ningún aporte positivo significativo.",
        //             correct: false,
        //             explanation: "Aunque tiene problemas, el antropocentrismo también ha producido avances importantes para la humanidad."
        //         },
        //         {
        //             text: "Solo ha beneficiado a las élites económicas sin aportar nada al resto de la humanidad.",
        //             correct: false,
        //             explanation: "Los beneficios del antropocentrismo han sido más amplios, aunque desigualmente distribuidos."
        //         },
        //         {
        //             text: "Desarrollo de los derechos humanos, avance científico-tecnológico, sistemas democráticos, valoración de la autonomía individual y mejoras en la calidad de vida.",
        //             correct: true,
        //             explanation: "Correcto. Es importante reconocer estos logros al evaluar críticamente el antropocentrismo, para desarrollar alternativas que conserven lo positivo."
        //         },
        //         {
        //             text: "Únicamente ha promovido el desarrollo artístico sin otros beneficios.",
        //             correct: false,
        //             explanation: "Los aportes del antropocentrismo se extienden mucho más allá del arte."
        //         },
        //         {
        //             text: "Solo ha servido para justificar la dominación de unos humanos sobre otros.",
        //             correct: false,
        //             explanation: "Aunque ha sido usado para justificar dominación, también ha promovido ideales de igualdad y dignidad humana."
        //         }
        //     ],
        //     hint: "Considera tanto los aspectos problemáticos como los beneficiosos del antropocentrismo para hacer una evaluación equilibrada.",
        //     difficulty: 'intermedio',
        //     topic: 'Evaluación del antropocentrismo'
        // }
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