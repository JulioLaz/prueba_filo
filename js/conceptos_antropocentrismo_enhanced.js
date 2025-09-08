// js/conceptos_antropocentrismo_enhanced.js
// Configuración mejorada con significados contextualizados y ampliados

window.CONCEPT_HUNT_CONFIG = {
  author: "Varios pensadores",
  menuUrl: "https://juliolaz.github.io/prueba_filo/quiz.html?tema=antropocentrismo&theme=antropocentrismo",
  
  // Niveles con destacado gradual y significados enriquecidos
  levels: [
    {
      html: `
      <p>El <strong>antropocentrismo</strong> es la doctrina que puso al hombre en el <strong>centro del escenario</strong>, un lugar que antes ocupaba Dios. El término viene del griego <em>ánthropos</em> (ser humano) y <em>kéntron</em> (centro). Es la idea filosófica de que el <strong>ser humano es la medida de todas las cosas</strong> y el centro de interés moral y existencial en el universo. Esta perspectiva contrasta con el <strong>teocentrismo</strong> medieval, donde Dios era el punto de referencia absoluto.</p>
      `,
      hint: "Identifica los orígenes etimológicos del término y la transición histórica del teocentrismo al antropocentrismo.",
      advanceAfter: 3, // De 5 conceptos, permitir avanzar con 3
      concepts: [
        { 
          term: "antropocentrismo", 
          meaning: "🏛️ ANTROPOCENTRISMO (del griego ánthropos = humano + kéntron = centro): Doctrina filosófica que considera al ser humano como el centro de interés del universo y la medida de todas las cosas. Surge como transición del teocentrismo medieval hacia la modernidad, colocando la experiencia, razón y valores humanos como criterios fundamentales para evaluar la realidad. En este párrafo, se presenta como el reemplazo histórico de Dios como centro de referencia.",
          priority: 10
        },
        { 
          term: "centro del escenario", 
          meaning: "🎭 CENTRO DEL ESCENARIO: Metáfora que indica la posición central que el ser humano ha asumido en la narrativa cósmica occidental. Sugiere que la historia del mundo se interpreta principalmente desde la perspectiva y para el beneficio humano. En este párrafo, contrasta con la posición anterior de Dios como protagonista principal de la realidad.",
          priority: 8
        },
        { 
          term: "ser humano es la medida de todas las cosas", 
          meaning: "📏 EL HUMANO COMO MEDIDA: Reformulación de la famosa frase del sofista Protágoras. Significa que los valores, conocimientos y propósitos humanos se convierten en el estándar por el cual se juzga todo lo demás en el universo. La realidad se evalúa según su relevancia, utilidad o significado para la experiencia humana. En este párrafo, define la perspectiva antropocéntrica fundamental.",
          priority: 10
        },
        { 
          term: "teocentrismo", 
          meaning: "⛪ TEOCENTRISMO (del griego theos = dios + kéntron = centro): Perspectiva que sitúa a Dios como el centro absoluto de la realidad, típica de la cosmovisión medieval cristiana. Todo se explica y valora en referencia a Dios: el propósito humano es servir y glorificar a Dios, no realizarse autónomamente. En este párrafo, representa la perspectiva que el antropocentrismo vino a reemplazar históricamente.",
          priority: 9
        },
        { 
          term: "centro", 
          meaning: "🎯 CENTRO: Posición privilegiada que define el punto de referencia desde el cual se organiza e interpreta toda la realidad. No es meramente geográfico sino axiológico: indica qué se considera más importante, valioso o fundamental. En este párrafo, representa la transición de poder interpretativo de lo divino a lo humano.",
          priority: 7
        }
      ],
      corollary: [
        "El antropocentrismo representa la transición histórica del teocentrismo medieval al humanismo moderno.",
        "Coloca al ser humano como medida y centro de referencia para evaluar toda la realidad."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🎨 Renacimiento y Humanismo</h4>
        <p>Durante el <strong>Renacimiento</strong> (siglos XV-XVI), el antropocentrismo se manifestó en el <strong>humanismo</strong>, movimiento que enfatizó la <strong>dignidad</strong> y potencial del ser humano. Los <strong>humanistas</strong> como Pico della Mirandola proclamaron al hombre como un ser de <strong>libre-albedrío</strong> capaz de determinarse a sí mismo. El arte renacentista celebró la <strong>belleza-humana</strong> y la <strong>individualidad</strong>, alejándose de la iconografía exclusivamente religiosa medieval. Esta época vio nacer el ideal del <strong>uomo-universale</strong>: el hombre completo en todas las dimensiones.</p>
      </div>
      `,
      hint: "Explora cómo el Renacimiento expresó concretamente los valores antropocéntricos en arte, filosofía y cultura.",
      advanceAfter: 4, // De 7 conceptos, permitir avanzar con 4
      concepts: [
        { 
          term: "Renacimiento", 
          meaning: "🎨 RENACIMIENTO (siglos XV-XVI): Período histórico y cultural que marcó la transición de la Edad Media a la Edad Moderna, caracterizado por un resurgimiento de las artes, la ciencia y el pensamiento clásico greco-romano. Representa el florecimiento del antropocentrismo a través del redescubrimiento de la dignidad humana y la valoración de la experiencia terrena. En este párrafo, aparece como la época donde el antropocentrismo se hace culturalmente dominante.",
          priority: 10
        },
        { 
          term: "humanismo", 
          meaning: "📚 HUMANISMO RENACENTISTA: Movimiento intelectual que enfatizó la dignidad, valor y potencial del ser humano, contrastando con la visión medieval que subordinaba lo humano a lo divino. Los humanistas estudiaron textos clásicos, promovieron la educación liberal y desarrollaron una antropología optimista. En este párrafo, representa la expresión filosófica del antropocentrismo renacentista.",
          priority: 10
        },
        { 
          term: "dignidad", 
          meaning: "👑 DIGNIDAD HUMANA: Concepto renacentista que afirma el valor intrínseco del ser humano como criatura racional capaz de conocimiento, creatividad y decisión moral. Pico della Mirandola la fundamentó en la capacidad humana de autodeterminación: podemos elegir ser bestias o ángeles. En este párrafo, sustenta la perspectiva antropocéntrica del valor humano especial.",
          priority: 9
        },
        { 
          term: "humanistas", 
          meaning: "🎓 HUMANISTAS: Intelectuales renacentistas como Petrarca, Erasmo, Montaigne y Pico della Mirandola que promovieron el estudio de las humanidades (literatura, historia, filosofía moral) frente a la escolástica medieval. Creían en la capacidad humana para la sabiduría y la virtud a través de la educación y la razón. En este párrafo, son los promotores del antropocentrismo renacentista.",
          priority: 8
        },
        { 
          term: "libre-albedrío", 
          meaning: "🆓 LIBRE ALBEDRÍO: Capacidad humana para tomar decisiones autónomas y determinar el propio destino. Para los humanistas renacentistas, especialmente Pico della Mirandola, el libre albedrío es lo que distingue a los humanos: no tenemos naturaleza fija sino capacidad de autocreación. En este párrafo, fundamenta la excepcionalidad humana en el cosmos.",
          priority: 9
        },
        { 
          term: "belleza-humana", 
          meaning: "✨ BELLEZA HUMANA: Ideal estético renacentista que celebraba la forma y expresión humana como manifestación de perfección divina en lo terreno. El arte renacentista (Leonardo, Miguel Ángel, Rafael) representó el cuerpo humano con dignidad y belleza, alejándose del desprecio medieval por lo corporal. En este párrafo, muestra la expresión artística del antropocentrismo.",
          priority: 7
        },
        { 
          term: "individualidad", 
          meaning: "🏆 INDIVIDUALIDAD: Valoración renacentista de la personalidad única y los logros individuales, contrastando con el anonimato colectivo medieval. Surgieron los retratos, biografías y el concepto de 'genio' artístico. En este párrafo, representa el aspecto psicológico del antropocentrismo: el yo individual como centro de valor.",
          priority: 8
        },
        { 
          term: "uomo-universale", 
          meaning: "🌟 UOMO UNIVERSALE (hombre universal): Ideal renacentista del ser humano completo que desarrolla todas sus capacidades: arte, ciencia, filosofía, habilidades prácticas. Leonardo da Vinci fue su máxima expresión. Representa la confianza antropocéntrica en el potencial humano ilimitado. En este párrafo, sintetiza el ideal antropocéntrico de perfección humana integral.",
          priority: 9
        }
      ],
      corollary: [
        "El Renacimiento expresó el antropocentrismo a través del humanismo, celebrando la dignidad y potencial humano.",
        "El ideal del 'uomo universale' encarna la confianza antropocéntrica en las capacidades humanas ilimitadas."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🔭 Revolución Científica y Modernidad</h4>
        <p>Durante la <strong>Modernidad</strong> (siglos XVII-XVIII), el antropocentrismo se manifestó en la <strong>revolución-científica</strong>. Paradójicamente, descubrimientos como el <strong>heliocentrismo</strong> de Copérnico, que desplazó la Tierra del centro del universo, reforzaron la idea de que la <strong>razón</strong> humana podía desvelar los secretos del cosmos. <strong>Francis Bacon</strong> proclamó que el conocimiento científico daría al hombre poder sobre la naturaleza, mientras <strong>René Descartes</strong> estableció la <strong>subjetividad</strong> racional como fundamento del conocimiento. La naturaleza se concibió como <strong>máquina</strong> disponible para el dominio humano.</p>
      </div>
      `,
      hint: "Comprende cómo la ciencia moderna reforzó paradójicamente el antropocentrismo pese a 'descentrar' la Tierra.",
      advanceAfter: 4, // De 7 conceptos, permitir avanzar con 4
      concepts: [
        { 
          term: "Modernidad", 
          meaning: "⚙️ MODERNIDAD (siglos XVII-XX): Época histórica caracterizada por el avance de la ciencia, la tecnología, el pensamiento racional y la secularización. Consolidó el antropocentrismo al hacer de la razón humana el instrumento principal para comprender y dominar la realidad. En este párrafo, representa la época donde el antropocentrismo se vuelve científica y tecnológicamente poderoso.",
          priority: 9
        },
        { 
          term: "revolución-científica", 
          meaning: "🔬 REVOLUCIÓN CIENTÍFICA (siglos XVI-XVII): Transformación radical del conocimiento occidental que estableció el método experimental y matemático como vía privilegiada al conocimiento. Aunque descentró la Tierra cosmológicamente, centró al ser humano epistemológicamente como único ser capaz de ciencia racional. En este párrafo, muestra la paradoja del antropocentrismo científico.",
          priority: 10
        },
        { 
          term: "heliocentrismo", 
          meaning: "☀️ HELIOCENTRISMO: Modelo astronómico de Copérnico que coloca al Sol en el centro del sistema solar, desplazando la Tierra. Aunque aparentemente 'descentra' al humano cosmológicamente, en realidad refuerza el antropocentrismo al demostrar la supremacía de la razón humana sobre la autoridad tradicional y la percepción sensorial. En este párrafo, ejemplifica la paradoja del 'descentramiento que re-centra'.",
          priority: 9
        },
        { 
          term: "razón", 
          meaning: "🧠 RAZÓN MODERNA: La facultad humana de pensar, entender y formar juicios lógicos, elevada por el antropocentrismo moderno como la herramienta principal para el conocimiento del mundo. Se considera lo que distingue fundamentalmente a los humanos y les da acceso privilegiado a la verdad. En este párrafo, aparece como el poder específicamente humano que puede 'desvelar secretos cósmicos'.",
          priority: 10
        },
        { 
          term: "Francis Bacon", 
          meaning: "🥓 FRANCIS BACON (1561-1626): Filósofo inglés que promovió el método experimental y la idea de que 'conocimiento es poder'. Su proyecto de 'Nueva Atlántida' visionaba una sociedad donde la ciencia daría al hombre dominio sobre la naturaleza. En este párrafo, representa la expresión utilitaria del antropocentrismo: conocer para dominar.",
          priority: 8
        },
        { 
          term: "René Descartes", 
          meaning: "🤔 RENÉ DESCARTES (1596-1650): Filósofo francés que estableció la subjetividad racional (cogito ergo sum) como fundamento indudable del conocimiento. Su dualismo mente-cuerpo privilegió lo mental/racional sobre lo material/corporal, reforzando la excepcionalidad humana. En este párrafo, representa el antropocentrismo epistemológico: el sujeto racional como base del conocimiento.",
          priority: 9
        },
        { 
          term: "subjetividad", 
          meaning: "🎭 SUBJETIVIDAD RACIONAL: La interioridad consciente y pensante del ser humano, establecida por Descartes como punto de partida indudable del conocimiento. Marca el 'giro subjetivo' de la filosofía moderna que hace del sujeto pensante el centro de la realidad conocida. En este párrafo, fundamenta el antropocentrismo epistemológico moderno.",
          priority: 8
        },
        { 
          term: "máquina", 
          meaning: "⚙️ NATURALEZA COMO MÁQUINA: Concepción mecanicista moderna que ve la naturaleza como un sistema de leyes matemáticas predecibles, sin propósitos intrínsecos ni valores inherentes. Esta 'desanimación' de la naturaleza facilita su instrumentalización para fines humanos. En este párrafo, representa la objetivación antropocéntrica del mundo natural.",
          priority: 8
        }
      ],
      corollary: [
        "La revolución científica moderna reforzó paradójicamente el antropocentrismo al establecer la razón humana como única vía al conocimiento verdadero.",
        "La concepción mecanicista de la naturaleza facilitó su instrumentalización para el dominio humano."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🌱 Crítica Ambiental del Antropocentrismo</h4>
        <p>Una de las críticas más fuertes al antropocentrismo es su impacto en la <strong>ética-ambiental</strong>. Si el ser humano es lo más importante, se justifica el uso irrestricto de los <strong>recursos-naturales</strong> para beneficio humano, sin considerar el bienestar del planeta o de otras especies. Esto ha contribuido a la actual <strong>crisis-ecológica</strong>: <strong>cambio-climático</strong>, pérdida de <strong>biodiversidad</strong>, contaminación masiva. Los críticos argumentan que necesitamos evolucionar hacia una perspectiva más <strong>ecocéntrica</strong> que reconozca el valor intrínseco de la naturaleza, no solo su valor instrumental para los humanos.</p>
      </div>
      `,
      hint: "Analiza cómo el antropocentrismo ha contribuido a problemas ambientales y qué alternativas se proponen.",
      advanceAfter: 4, // De 6 conceptos, permitir avanzar con 4
      concepts: [
        { 
          term: "ética-ambiental", 
          meaning: "🌍 ÉTICA AMBIENTAL: Rama de la ética que estudia la relación moral entre los seres humanos y el entorno natural, cuestionando si tenemos obligaciones hacia ecosistemas, especies y elementos naturales. Surgió como respuesta crítica al antropocentrismo tradicional que solo consideraba valores instrumentales de la naturaleza. En este párrafo, representa el desafío contemporáneo al antropocentrismo.",
          priority: 10
        },
        { 
          term: "recursos-naturales", 
          meaning: "🏭 RECURSOS NATURALES: Elementos de la naturaleza (agua, bosques, minerales, combustibles) que el ser humano utiliza para satisfacer necesidades. El término mismo refleja una perspectiva antropocéntrica: ve la naturaleza principalmente como 'recursos' disponibles para uso humano, no como entidades con valor propio. En este párrafo, ejemplifica la instrumentalización antropocéntrica de la naturaleza.",
          priority: 9
        },
        { 
          term: "crisis-ecológica", 
          meaning: "🚨 CRISIS ECOLÓGICA: Conjunto de problemas ambientales interconectados (contaminación, deforestación, extinción masiva, cambio climático) que amenazan el equilibrio de los ecosistemas terrestres y la supervivencia humana. Muchos atribuyen esta crisis al antropocentrismo que justifica la explotación ilimitada de la naturaleza. En este párrafo, representa las consecuencias prácticas del antropocentrismo.",
          priority: 10
        },
        { 
          term: "cambio-climático", 
          meaning: "🌡️ CAMBIO CLIMÁTICO: Alteración a largo plazo de los patrones climáticos globales, principalmente causada por emisiones humanas de gases de efecto invernadero desde la revolución industrial. Simboliza cómo la actividad humana guiada por valores antropocéntricos puede alterar sistemas planetarios fundamentales. En este párrafo, ejemplifica las consecuencias globales del antropocentrismo.",
          priority: 9
        },
        { 
          term: "biodiversidad", 
          meaning: "🦋 BIODIVERSIDAD: Variedad de vida en la Tierra incluyendo diversidad genética, de especies y de ecosistemas. Su pérdida acelerada (sexta extinción masiva) se atribuye parcialmente a la perspectiva antropocéntrica que no valora otras formas de vida por sí mismas. En este párrafo, representa lo que el antropocentrismo pone en riesgo al priorizar solo intereses humanos.",
          priority: 8
        },
        { 
          term: "ecocéntrica", 
          meaning: "🌿 PERSPECTIVA ECOCÉNTRICA: Enfoque ético que coloca los ecosistemas y la biosfera en el centro de consideración moral, reconociendo valores intrínsecos en la naturaleza independientes de su utilidad humana. Contrasta directamente con el antropocentrismo al expandir la consideración moral más allá de los humanos. En este párrafo, representa la alternativa propuesta al antropocentrismo tradicional.",
          priority: 10
        }
      ],
      corollary: [
        "La ética ambiental critica al antropocentrismo por contribuir a la crisis ecológica al instrumentalizar la naturaleza.",
        "Se propone evolucionar hacia perspectivas ecocéntricas que reconozcan el valor intrínseco de la naturaleza."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🔄 Alternativas al Antropocentrismo</h4>
        <p>Como respuesta a las limitaciones del antropocentrismo, han surgido perspectivas alternativas. El <strong>biocentrismo</strong> extiende la consideración moral a todos los seres vivos, sosteniendo que la vida misma tiene <strong>valor-intrínseco</strong>. El <strong>ecocentrismo</strong> va más allá y incluye ecosistemas completos, considerando que la <strong>integridad-ecológica</strong> tiene valor independiente. La <strong>ecología-profunda</strong> de Arne Naess propone una identificación empática con toda la naturaleza. Incluso han surgido propuestas de <strong>derechos-de-la-naturaleza</strong> que otorgan estatus legal a ríos, bosques y ecosistemas, reconociendo su <strong>dignidad-intrínseca</strong>.</p>
      </div>
      `,
      hint: "Identifica las diferentes alternativas éticas al antropocentrismo y sus características distintivas.",
      advanceAfter: 4, // De 6 conceptos, permitir avanzar con 4
      concepts: [
        { 
          term: "biocentrismo", 
          meaning: "🌱 BIOCENTRISMO (del griego bios = vida + kéntron = centro): Perspectiva ética que extiende la consideración moral a todos los seres vivos, no solo a los humanos. Sostiene que la vida misma, independientemente de la especie, tiene valor intrínseco y merece respeto moral. Representantes como Albert Schweitzer y Paul Taylor argumentan que todos los organismos buscan su bien propio. En este párrafo, representa el primer paso para superar el antropocentrismo.",
          priority: 10
        },
        { 
          term: "valor-intrínseco", 
          meaning: "💎 VALOR INTRÍNSECO: Valor que algo posee por sí mismo, independientemente de su utilidad para otros seres. Contrasta con el valor instrumental (útil para algo más). Las perspectivas no-antropocéntricas argumentan que la naturaleza, la vida o los ecosistemas tienen valor intrínseco, no solo valor como recursos para humanos. En este párrafo, fundamenta las alternativas al antropocentrismo.",
          priority: 10
        },
        { 
          term: "ecocentrismo", 
          meaning: "🌍 ECOCENTRISMO: Perspectiva ética que coloca los ecosistemas y procesos ecológicos en el centro de consideración moral, más allá de organismos individuales. Considera que la integridad, estabilidad y belleza de la comunidad biótica son los criterios últimos de valor. Aldo Leopold's 'Land Ethic' es un ejemplo clásico. En este párrafo, representa la extensión más radical de consideración moral.",
          priority: 10
        },
        { 
          term: "integridad-ecológica", 
          meaning: "🔗 INTEGRIDAD ECOLÓGICA: Concepto que refiere a la salud, completitud y funcionamiento adecuado de ecosistemas naturales, incluyendo su capacidad de mantener procesos evolutivos y ecológicos. Para el ecocentrismo, preservar esta integridad es un valor moral independiente del beneficio humano. En este párrafo, representa lo que el ecocentrismo busca proteger por sí mismo.",
          priority: 8
        },
        { 
          term: "ecología-profunda", 
          meaning: "🌊 ECOLOGÍA PROFUNDA: Movimiento filosófico fundado por Arne Naess que propone una identificación empática y espiritual con toda la naturaleza, trascendiendo la separación sujeto-objeto. Incluye principios como la autorrealización expandida (realizar el Sí mismo ecológico amplio) y la igualdad biocéntrica. En este párrafo, representa la alternativa más radical y espiritual al antropocentrismo.",
          priority: 9
        },
        { 
          term: "derechos-de-la-naturaleza", 
          meaning: "⚖️ DERECHOS DE LA NATURALEZA: Propuesta jurídica y ética que otorga estatus legal y derechos inherentes a entidades naturales como ríos, bosques, montañas o ecosistemas. Países como Ecuador, Bolivia y Nueva Zelanda han implementado algunas versiones. En este párrafo, representa la traducción práctica y legal de las alternativas al antropocentrismo.",
          priority: 9
        },
        { 
          term: "dignidad-intrínseca", 
          meaning: "👑 DIGNIDAD INTRÍNSECA: Concepto que extiende la noción kantiana de dignidad humana a entidades naturales, sosteniendo que tienen valor inherente y merecen respeto por sí mismas. No significa que tengan los mismos derechos que los humanos, sino que no pueden ser tratadas como meros objetos. En este párrafo, fundamenta el reconocimiento legal de derechos naturales.",
          priority: 8
        }
      ],
      corollary: [
        "Las alternativas al antropocentrismo (biocentrismo, ecocentrismo) extienden la consideración moral más allá de los humanos.",
        "Los derechos de la naturaleza traducen estas perspectivas éticas en marcos legales concretos."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🤔 Debates Contemporáneos y Futuro</h4>
        <p>El antropocentrismo enfrenta debates complejos en el siglo XXI. Algunos defienden un <strong>antropocentrismo-ilustrado</strong> que, sin abandonar la centralidad humana, incorpora responsabilidad ecológica por <strong>interés-propio-ilustrado</strong>: proteger la naturaleza porque dependemos de ella. Otros proponen un <strong>antropocentrismo-débil</strong> que reconoce valores naturales pero mantiene prioridad humana en casos de conflicto. La cuestión se complica con temas como <strong>inteligencia-artificial</strong>, <strong>bioingeniería</strong> y posible contacto con <strong>vida-extraterrestre</strong>: ¿seguirá siendo sostenible el antropocentrismo en un universo donde los humanos podrían no ser los únicos seres inteligentes?</p>
      </div>
      `,
      hint: "Evalúa los debates actuales sobre antropocentrismo y los desafíos futuros que enfrenta esta perspectiva.",
      advanceAfter: 3, // De 5 conceptos, permitir avanzar con 3
      concepts: [
        { 
          term: "antropocentrismo-ilustrado", 
          meaning: "🌟 ANTROPOCENTRISMO ILUSTRADO: Versión sofisticada del antropocentrismo que, manteniendo la centralidad humana, incorpora responsabilidad ecológica basada en el entendimiento de nuestra dependencia de la naturaleza. Argumenta que proteger el ambiente es racionalmente necesario para el bienestar humano a largo plazo. En este párrafo, representa una reforma del antropocentrismo tradicional.",
          priority: 9
        },
        { 
          term: "interés-propio-ilustrado", 
          meaning: "🧠 INTERÉS PROPIO ILUSTRADO: Concepto que justifica la protección ambiental no por valor intrínseco de la naturaleza sino porque el bienestar humano a largo plazo depende de ecosistemas saludables. Es 'ilustrado' porque considera consecuencias futuras y interconexiones complejas, no solo beneficios inmediatos. En este párrafo, propone una base racional para la responsabilidad ecológica antropocéntrica.",
          priority: 8
        },
        { 
          term: "antropocentrismo-débil", 
          meaning: "🔄 ANTROPOCENTRISMO DÉBIL: Posición intermedia que reconoce valores inherentes en la naturaleza pero mantiene prioridad humana cuando hay conflictos irreconciliables. Permite consideración moral de entidades naturales sin abandonar completamente la perspectiva antropocéntrica. En este párrafo, representa un compromiso entre antropocentrismo puro y perspectivas ecocéntricas.",
          priority: 8
        },
        { 
          term: "inteligencia-artificial", 
          meaning: "🤖 INTELIGENCIA ARTIFICIAL: Tecnología que simula o replica capacidades cognitivas humanas, desafiando potencialmente el antropocentrismo al crear entidades no-humanas con capacidades racionales avanzadas. Si las IA desarrollan consciousness o agencia moral, ¿seguirían siendo herramientas humanas o merecerían consideración moral independiente? En este párrafo, representa un desafío futuro al antropocentrismo tradicional.",
          priority: 9
        },
        { 
          term: "vida-extraterrestre", 
          meaning: "👽 VIDA EXTRATERRESTRE: Posibilidad de organismos o inteligencias no-terrestres que cuestionaría radicalmente el antropocentrismo al demostrar que los humanos no son únicos en el universo. El descubrimiento de vida inteligente extraterrestre forzaría una redefinición completa de nuestro lugar cósmico. En este párrafo, representa el desafío más radical posible al antropocentrismo.",
          priority: 8
        }
      ],
      corollary: [
        "Los debates contemporáneos buscan reformar el antropocentrismo (versiones ilustradas o débiles) más que abandonarlo completamente.",
        "Desarrollos futuros como IA avanzada o vida extraterrestre podrían desafiar fundamentalmente las bases del antropocentrismo."
      ]
    }
  ]
};