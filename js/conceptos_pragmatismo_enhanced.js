// js/conceptos_pragmatismo_enhanced.js
// Configuración mejorada con significados contextualizados y ampliados

window.CONCEPT_HUNT_CONFIG = {
  author: "Charles S. Peirce, William James, John Dewey",
  menuUrl: "https://juliolaz.github.io/prueba_filo/quiz.html?tema=pragmatismo&theme=pragmatismo",
  
  // Niveles con destacado gradual y significados enriquecidos
  levels: [
    {
      html: `
      <p>El <strong>pragmatismo</strong> es una corriente filosófica que surgió en Estados Unidos. Su idea central es que el valor de una <strong>creencia</strong> o de una idea se mide por su <strong>utilidad-práctica</strong>. La <strong>verdad</strong> de una idea no se basa en una realidad abstracta, sino en sus <strong>consecuencias</strong> y en su capacidad para resolver problemas. Si una idea nos ayuda a actuar de manera efectiva, entonces es una idea válida.</p>
      `,
      hint: "Identifica cómo el pragmatismo redefine conceptos tradicionales como verdad y conocimiento en términos prácticos.",
      advanceAfter: 3, // De 5 conceptos, permitir avanzar con 3
      concepts: [
        { 
          term: "pragmatismo", 
          meaning: "🇺🇸 PRAGMATISMO (del griego pragma = acción): Corriente filosófica originalmente estadounidense que evalúa el valor de las ideas y creencias en función de su utilidad práctica y sus consecuencias. Fundado por Charles Sanders Peirce en el 'Club Metafísico' de Harvard (1870s), desarrollado por William James y John Dewey. Rechaza la búsqueda de verdades absolutas en favor de herramientas conceptuales que funcionen. En este párrafo, observa cómo se define por su criterio práctico de evaluación.",
          priority: 10
        },
        { 
          term: "creencia", 
          meaning: "💭 CREENCIA: Para los pragmatistas, las creencias no son representaciones mentales de la realidad sino hábitos de acción. Una creencia es una disposición a actuar de cierta manera en determinadas circunstancias. Por ejemplo, creer que 'el hielo es resbaladizo' significa estar dispuesto a caminar con cuidado sobre él. En este párrafo, las creencias se evalúan por su utilidad, no por su correspondencia con hechos abstractos.",
          priority: 9
        },
        { 
          term: "utilidad-práctica", 
          meaning: "🔧 UTILIDAD PRÁCTICA: La capacidad de una idea para ser útil y funcionar en la vida real, resolver problemas concretos y guiar la acción efectiva. No se trata de mero pragmatismo vulgar ('lo que conviene') sino de efectividad genuina para navegar la experiencia. Una idea tiene utilidad práctica si amplía nuestro control sobre el ambiente y mejora nuestra adaptación. En este párrafo, representa el criterio fundamental de evaluación.",
          priority: 10
        },
        { 
          term: "verdad", 
          meaning: "✅ VERDAD PRAGMATISTA: Para el pragmatismo, la verdad no es correspondencia con una realidad independiente sino una idea que funciona, que 'paga sus dividendos' en la experiencia. William James la definió como 'el valor de cambio (cash value) de una idea en el flujo de la experiencia'. Una proposición es verdadera si creerla conduce a consecuencias satisfactorias. En este párrafo, se redefine radicalmente como función práctica.",
          priority: 10
        },
        { 
          term: "consecuencias", 
          meaning: "⚡ CONSECUENCIAS: Los resultados prácticos de sostener una creencia o idea en términos de experiencia futura posible. Para Peirce, el significado de un concepto se agota en sus consecuencias prácticas concebibles. Si dos ideas tienen exactamente las mismas consecuencias prácticas, son idénticas en significado. En este párrafo, las consecuencias son el criterio último tanto de significado como de verdad.",
          priority: 9
        }
      ],
      corollary: [
        "El pragmatismo americano redefine la verdad como aquello que funciona efectivamente en la experiencia.",
        "Las creencias se evalúan por sus consecuencias prácticas, no por su correspondencia con realidades abstractas."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>📏 La Máxima Pragmática de Peirce</h4>
        <p><strong>Charles Sanders Peirce</strong> formuló la <strong>máxima-pragmática</strong>: "Considere qué efectos, que pudieran tener consecuencias prácticas, concebimos que tenga el objeto de nuestro concepto. Entonces, nuestra concepción de estos efectos es toda nuestra concepción del objeto." Esta máxima establece que el <strong>significado</strong> de cualquier concepto se reduce a sus efectos prácticos concebibles. Si dos conceptos tienen exactamente las mismas consecuencias prácticas, son <strong>idénticos</strong> en significado.</p>
      </div>
      `,
      hint: "Comprende cómo Peirce conecta el significado de conceptos con sus efectos prácticos concebibles.",
      advanceAfter: 3, // De 4 conceptos, permitir avanzar con 3
      concepts: [
        { 
          term: "Charles Sanders Peirce", 
          meaning: "👨‍🔬 CHARLES SANDERS PEIRCE (1839-1914): Filósofo, lógico y científico estadounidense, fundador del pragmatismo. Hijo de matemático de Harvard, trabajó como geodesta y astrónomo. Desarrolló una semiótica (teoría de signos) y una lógica de la investigación científica. Su pragmatismo era más técnico y menos popular que el de James. En este párrafo, aparece como el creador de la máxima que define el núcleo del movimiento.",
          priority: 10
        },
        { 
          term: "máxima-pragmática", 
          meaning: "📐 MÁXIMA PRAGMÁTICA: Principio fundamental formulado por Peirce que establece el criterio para determinar el significado de conceptos. Dice que para clarificar una idea debemos considerar qué efectos prácticos concebibles podría tener su objeto, y que nuestra concepción de esos efectos constituye toda nuestra concepción del objeto. Es una regla para la clarificación conceptual, no una teoría de la verdad. En este párrafo, representa el método pragmatista de análisis.",
          priority: 10
        },
        { 
          term: "significado", 
          meaning: "🎯 SIGNIFICADO: Para Peirce, el significado de un concepto no reside en definiciones abstractas sino en el conjunto total de sus consecuencias prácticas concebibles. Por ejemplo, el significado de 'duro' se agota en las consecuencias: 'si intentas rayarlo con otros objetos, no será rayado por muchos de ellos'. Esta teoría pragmatista del significado influenció enormemente la filosofía analítica posterior. En este párrafo, se reduce completamente a efectos prácticos.",
          priority: 10
        },
        { 
          term: "idénticos", 
          meaning: "= IDENTIDAD PRAGMÁTICA: Dos conceptos son idénticos en significado si tienen exactamente las mismas consecuencias prácticas concebibles, independientemente de cómo se formulen verbalmente. Esta idea elimina disputas metafísicas 'vacías': si la discusión entre 'libre albedrío' vs 'determinismo' no genera diferencias prácticas concebibles, es una pseudo-disputa. En este párrafo, establece un criterio deflacionario para debates filosóficos.",
          priority: 8
        }
      ],
      corollary: [
        "La máxima pragmática de Peirce reduce el significado de conceptos a sus efectos prácticos concebibles.",
        "Conceptos con idénticas consecuencias prácticas son idénticos en significado, eliminando disputas metafísicas vacías."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🌊 El Pragmatismo de William James</h4>
        <p><strong>William James</strong> popularizó el pragmatismo como método y teoría de la verdad. Para James, el pragmatismo es el <strong>temperamento-empírico</strong> que ve las ideas como <strong>instrumentos</strong> para la acción. Su famosa formulación es que la verdad es el <strong>valor-de-cambio</strong> de una idea en el flujo de la experiencia. Las ideas se vuelven verdaderas por eventos, se hacen verdaderas por la <strong>verificación</strong>. James aplicó esto incluso a creencias religiosas: si creer en Dios tiene efectos beneficiosos en la vida de alguien, esa creencia tiene <strong>valor-pragmático</strong>.</p>
      </div>
      `,
      hint: "Explora cómo James desarrolló el pragmatismo hacia una teoría general de la verdad y la experiencia religiosa.",
      advanceAfter: 4, // De 5 conceptos, permitir avanzar con 4
      concepts: [
        { 
          term: "William James", 
          meaning: "🎭 WILLIAM JAMES (1842-1910): Filósofo y psicólogo estadounidense, hermano del novelista Henry James. Médico de formación, fundador de la psicología moderna en EE.UU. y popularizador del pragmatismo. Más literario y accesible que Peirce, extendió el pragmatismo a la religión y la experiencia personal. Su libro 'Pragmatismo' (1907) hizo famoso el movimiento. En este párrafo, aparece como el divulgador que transformó una máxima lógica en una filosofía de vida.",
          priority: 10
        },
        { 
          term: "temperamento-empírico", 
          meaning: "🔬 TEMPERAMENTO EMPÍRICO: Actitud filosófica que privilegia la experiencia concreta sobre la especulación abstracta. James contrastaba el temperamento 'tierno' (racionalista, idealista) con el 'duro' (empirista, materialista) y presentaba el pragmatismo como síntesis que conserva lo valioso de ambos. Este temperamento busca hechos, es pluralista y se enfoca en lo particular. En este párrafo, caracteriza la mentalidad pragmatista.",
          priority: 8
        },
        { 
          term: "instrumentos", 
          meaning: "🔧 INSTRUMENTOS: Para James, las ideas no son copias de la realidad sino herramientas para navegar la experiencia. Como un mapa o una brújula, una idea es útil si nos ayuda a llegar donde queremos ir. Esta concepción instrumental del conocimiento influyó enormemente en John Dewey y en la filosofía educativa. En este párrafo, representa la función activa del pensamiento.",
          priority: 9
        },
        { 
          term: "valor-de-cambio", 
          meaning: "💰 VALOR DE CAMBIO (CASH VALUE): Metáfora económica de James para la verdad pragmatista. Así como el dinero vale por lo que podemos comprar con él, las ideas valen por lo que podemos hacer con ellas. Una idea verdadera es como dinero bueno: funciona, se acepta, circula sin problemas. Una idea falsa es como dinero falso: genera problemas cuando tratamos de usarla. En este párrafo, define operacionalmente la verdad.",
          priority: 10
        },
        { 
          term: "verificación", 
          meaning: "✓ VERIFICACIÓN: Proceso por el cual las ideas se hacen verdaderas a través de su funcionamiento exitoso en la experiencia. Para James, la verdad no es estática sino dinámica: las ideas se vuelven verdaderas por eventos, no son verdaderas desde la eternidad. La verificación es un proceso continuo de confirmación práctica. En este párrafo, muestra el carácter procesual de la verdad pragmatista.",
          priority: 9
        },
        { 
          term: "valor-pragmático", 
          meaning: "🙏 VALOR PRAGMÁTICO: Beneficio real que una creencia aporta a la vida de quien la sostiene, independientemente de su verdad metafísica. James argumentaba que si creer en Dios hace a alguien más moral, esperanzado y efectivo, esa creencia tiene valor pragmático genuino. Esta aplicación del pragmatismo a la religión fue controversial pero influyente. En este párrafo, extiende el criterio pragmatista a dominios tradicionalmente no-empíricos.",
          priority: 8
        }
      ],
      corollary: [
        "James transformó el pragmatismo de una máxima lógica en una teoría general de la verdad como 'valor de cambio'.",
        "Extendió el criterio pragmatista incluso a creencias religiosas, evaluándolas por sus efectos beneficiosos."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🎓 El Instrumentalismo de John Dewey</h4>
        <p><strong>John Dewey</strong> desarrolló el <strong>instrumentalismo</strong>, una versión del pragmatismo que ve el pensamiento como <strong>resolución-de-problemas</strong>. Para Dewey, conocer es hacer: la <strong>investigación</strong> es una actividad práctica que transforma situaciones problemáticas en situaciones resueltas. Su enfoque <strong>experimental</strong> influyó profundamente en la educación: el aprendizaje debe ser activo, centrado en la experiencia del estudiante y dirigido a resolver problemas reales. Dewey veía la <strong>democracia</strong> como el método social de investigación colaborativa.</p>
      </div>
      `,
      hint: "Comprende cómo Dewey conectó el pragmatismo con la educación y la teoría democrática.",
      advanceAfter: 4, // De 6 conceptos, permitir avanzar con 4
      concepts: [
        { 
          term: "John Dewey", 
          meaning: "🎓 JOHN DEWEY (1859-1952): Filósofo, psicólogo y pedagogo estadounidense, la figura más influyente del pragmatismo clásico. Profesor en Chicago y Columbia, revolucionó la educación con sus escuelas experimentales. Aplicó el pragmatismo a la ética, política, arte y religión. Su filosofía de la experiencia como transacción organismo-ambiente influyó en todo el pensamiento americano del siglo XX. En este párrafo, aparece como el sistematizador que conectó pragmatismo con reforma social.",
          priority: 10
        },
        { 
          term: "instrumentalismo", 
          meaning: "🔧 INSTRUMENTALISMO: Versión deweyiana del pragmatismo que concibe el pensamiento como herramienta para resolver problemas prácticos. Las ideas son instrumentos que emergen cuando enfrentamos obstáculos en la experiencia y se validan por su capacidad para restablecer el flujo de la actividad. No buscamos conocimiento por sí mismo sino para transformar situaciones problemáticas. En este párrafo, caracteriza el enfoque específico de Dewey.",
          priority: 10
        },
        { 
          term: "resolución-de-problemas", 
          meaning: "🧩 RESOLUCIÓN DE PROBLEMAS: Para Dewey, todo pensamiento genuino surge de situaciones problemáticas donde nuestros hábitos fallan y necesitamos nuevas respuestas. El proceso incluye: (1) situación indeterminada, (2) problematización, (3) hipótesis, (4) experimentación, (5) resolución. Este patrón de investigación se aplica tanto a la ciencia como a la vida cotidiana. En este párrafo, define la función esencial del pensamiento.",
          priority: 9
        },
        { 
          term: "investigación", 
          meaning: "🔍 INVESTIGACIÓN: Actividad práctica que transforma situaciones problemáticas en situaciones resueltas mediante el pensamiento reflexivo. Para Dewey, no hay diferencia esencial entre investigación científica y resolución de problemas cotidianos: ambas siguen la misma lógica experimental. La investigación es reconstrucción continua de la experiencia. En este párrafo, se presenta como actividad transformadora central.",
          priority: 9
        },
        { 
          term: "experimental", 
          meaning: "🧪 MÉTODO EXPERIMENTAL: Enfoque que trata las ideas como hipótesis a ser testadas en la experiencia. Dewey extendió el método científico a la educación, la política y la ética. En educación, significa que los estudiantes aprenden haciendo, experimentando con ideas en situaciones reales. En democracia, significa políticas como experimentos sociales. En este párrafo, conecta con la reforma educativa.",
          priority: 8
        },
        { 
          term: "democracia", 
          meaning: "🗳️ DEMOCRACIA: Para Dewey, más que un sistema político, la democracia es un modo de vida asociado basado en la investigación colaborativa y la experimentación social. Es el método social para resolver problemas colectivos a través del diálogo, la participación y la revisión continua. La educación democrática prepara ciudadanos capaces de participar en esta investigación social. En este párrafo, representa la aplicación social del método experimental.",
          priority: 9
        }
      ],
      corollary: [
        "Dewey desarrolló el instrumentalismo como pragmatismo centrado en la resolución de problemas mediante investigación experimental.",
        "Conectó su filosofía con la reforma educativa y la teoría democrática como método de investigación social."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🔬 Aplicaciones y Enfoque Científico</h4>
        <p>El pragmatismo ha tenido un gran impacto en el pensamiento científico, la educación y la política. En la ciencia, el pragmatismo promueve el <strong>método-científico</strong>, donde las teorías se validan a través de la experimentación y los resultados. En la educación, fomenta un enfoque de <strong>aprendizaje-por-acción</strong>, donde los estudiantes resuelven problemas reales. En la política, prioriza las políticas que demuestran ser <strong>efectivas</strong> y beneficiosas, adoptando un <strong>falibilismo</strong> que permite revisar y corregir decisiones basándose en nueva evidencia.</p>
      </div>
      `,
      hint: "Identifica cómo el pragmatismo se aplica en diferentes dominios de la vida práctica e intelectual.",
      advanceAfter: 3, // De 4 conceptos, permitir avanzar con 3
      concepts: [
        { 
          term: "método-científico", 
          meaning: "🔬 MÉTODO CIENTÍFICO: Proceso de observación, formulación de hipótesis, experimentación y análisis que el pragmatismo considera el camino más seguro hacia el conocimiento confiable. Para los pragmatistas, la ciencia exitosa ejemplifica el espíritu pragmatista: juzga teorías por sus consecuencias observables y está dispuesta a revisarlas cuando fallan. En este párrafo, representa la aplicación paradigmática del espíritu pragmatista.",
          priority: 9
        },
        { 
          term: "aprendizaje-por-acción", 
          meaning: "🎯 APRENDIZAJE POR ACCIÓN: Enfoque educativo donde el conocimiento se adquiere a través de la práctica y la resolución de problemas reales, no mediante memorización pasiva. Inspirado en Dewey, enfatiza el 'learning by doing': los estudiantes construyen conocimiento participando en actividades significativas. Este enfoque influyó en la educación progresiva mundial. En este párrafo, ejemplifica la aplicación pedagógica del pragmatismo.",
          priority: 8
        },
        { 
          term: "efectivas", 
          meaning: "✅ EFECTIVIDAD: Criterio pragmatista para evaluar políticas públicas: que produzcan los efectos deseados en la práctica, no que se ajusten a ideologías abstractas. Las políticas efectivas son las que resuelven problemas reales de manera demostrable. Esto implica evaluación empírica continua y disposición a cambiar cuando algo no funciona. En este párrafo, representa la aplicación política del criterio pragmatista.",
          priority: 8
        },
        { 
          term: "falibilismo", 
          meaning: "❓ FALIBILISMO: Doctrina pragmatista que sostiene que todo conocimiento es revisable y que debemos estar dispuestos a corregir nuestras creencias cuando la experiencia lo requiera. No hay verdades absolutas inmunes a la revisión. Esta actitud intelectual humilde es crucial para el progreso tanto científico como social. En este párrafo, permite la autocorrección continua en políticas públicas.",
          priority: 9
        }
      ],
      corollary: [
        "El pragmatismo se aplica exitosamente en ciencia (método experimental), educación (aprendizaje activo) y política (políticas basadas en evidencia).",
        "El falibilismo pragmatista permite la revisión continua de teorías y políticas basándose en nueva evidencia."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🌐 Legado y Críticas del Pragmatismo</h4>
        <p>El pragmatismo sigue influyendo en filosofía contemporánea, especialmente en <strong>neopragmatistas</strong> como Richard Rorty y Hilary Putnam. Sin embargo, enfrenta críticas importantes: se le acusa de <strong>relativismo</strong> (si la verdad es lo que funciona, ¿no es todo relativo?), de <strong>anti-intelectualismo</strong> (¿reduce todo conocimiento a utilidad práctica?), y de <strong>conformismo-social</strong> (¿justifica el status quo si "funciona"?). Los pragmatistas responden que estas críticas malentienden la sofisticación de su propuesta: buscan un equilibrio entre <strong>objetividad</strong> y flexibilidad adaptativa.</p>
      </div>
      `,
      hint: "Evalúa tanto la influencia continua como las principales objeciones al pensamiento pragmatista.",
      advanceAfter: 3, // De 5 conceptos, permitir avanzar con 3
      concepts: [
        { 
          term: "neopragmatistas", 
          meaning: "🔄 NEOPRAGMATISTAS: Filósofos contemporáneos que reviven y actualizan el pragmatismo clásico. Richard Rorty rechazó la epistemología tradicional en favor de una filosofía 'post-epistemológica'. Hilary Putnam desarrolló un 'realismo interno' pragmatista. Otros como Cornel West aplicaron el pragmatismo a la crítica social. En este párrafo, muestran la vitalidad continua del movimiento.",
          priority: 8
        },
        { 
          term: "relativismo", 
          meaning: "🌀 ACUSACIÓN DE RELATIVISMO: Crítica que sostiene que si la verdad es 'lo que funciona', entonces todo se vuelve relativo a contextos particulares y no hay verdades universales. Los críticos temen que esto lleve al 'todo vale'. Los pragmatistas responden que buscan verdades 'objetivas' pero fallibles, testadas intersubjetivamente. En este párrafo, representa una preocupación seria sobre las implicaciones de la teoría pragmatista.",
          priority: 9
        },
        { 
          term: "anti-intelectualismo", 
          meaning: "📚 ACUSACIÓN DE ANTI-INTELECTUALISMO: Crítica que sostiene que el pragmatismo reduce todo conocimiento a mera utilidad práctica, despreciando la investigación teórica pura y la contemplación desinteresada. Los críticos temen que elimine el valor intrínseco del conocimiento. Los pragmatistas responden que 'práctico' incluye satisfacción intelectual y que la dicotomía teoría/práctica es falsa. En este párrafo, cuestiona si el pragmatismo empobrece la vida intelectual.",
          priority: 8
        },
        { 
          term: "conformismo-social", 
          meaning: "😴 ACUSACIÓN DE CONFORMISMO SOCIAL: Crítica que sostiene que si 'funcionar' es el criterio de verdad, el pragmatismo tiende a justificar el status quo social: lo que existe 'funciona' simplemente porque persiste. Esto podría inhibir la crítica social radical. Los pragmatistas responden que su criterio es 'funcionar mejor', no simplemente 'funcionar', y que incluye valores como justicia y democracia. En este párrafo, cuestiona las implicaciones políticas conservadoras del pragmatismo.",
          priority: 8
        },
        { 
          term: "objetividad", 
          meaning: "🎯 OBJETIVIDAD PRAGMATISTA: Búsqueda pragmatista de un equilibrio entre objetividad (verdades que trascienden preferencias individuales) y flexibilidad adaptativa (disposición a revisar creencias). No es objetividad metafísica (correspondencia con realidad independiente) sino objetividad intersubjetiva (consenso de investigadores competentes bajo condiciones ideales). En este párrafo, representa la respuesta pragmatista a las acusaciones de relativismo.",
          priority: 9
        }
      ],
      corollary: [
        "El pragmatismo sigue influyendo en filosofía contemporánea pero enfrenta críticas serias sobre relativismo y anti-intelectualismo.",
        "Los pragmatistas buscan un equilibrio entre objetividad intersubjetiva y flexibilidad adaptativa para responder a estas críticas."
      ]
    }
  ]
};