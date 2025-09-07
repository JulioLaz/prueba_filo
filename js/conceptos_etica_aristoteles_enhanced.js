// js/conceptos_etica_aristoteles_enhanced.js
// Configuración específica para el tema etica_aristoteles

window.CONCEPT_HUNT_CONFIG = {
  author: "Aristóteles",
  menuUrl: "https://juliolaz.github.io/prueba_filo/quiz.html?tema=etica_aristoteles&theme=etica_aristoteles",
  
  // Niveles con destacado gradual y significados enriquecidos
  levels: [
    {
      html: `
      <p>Según <strong>Aristóteles</strong>, la ética no es un conjunto de reglas rígidas, sino una búsqueda de lo que es <strong>bueno</strong> para el ser humano. El fin último de todas nuestras acciones es la <strong>felicidad</strong> (en griego, <strong>eudaimonía</strong>). Pero esta felicidad no es un simple placer; es una vida activa, guiada por la razón y dedicada a la <strong>virtud</strong>.</p>
      `,
      hint: "Identifica la meta fundamental de la ética aristotélica y cómo se diferencia del placer simple.",
      advanceAfter: 3, // Permitir avanzar con 3 de 5 conceptos
      concepts: [
        { 
          term: "Aristóteles", 
          meaning: "🏛️ ARISTÓTELES (384-322 a.C.): Filósofo griego nacido en Estagira, discípulo de Platón y maestro de Alejandro Magno. Revolucionó la ética al centrarla en la búsqueda práctica de la felicidad a través de la virtud, alejándose de los ideales platónicos abstractos. En este párrafo, observa cómo presenta la ética como una ciencia práctica, no teórica.",
          priority: 10
        },
        { 
          term: "bueno", 
          meaning: "🎯 EL BIEN: Para Aristóteles, 'bueno' no es una idea abstracta sino aquello hacia lo que todas las cosas tienden naturalmente. Es el objetivo de cada acción humana. En el contexto de este párrafo, lo 'bueno' para el ser humano es específicamente la felicidad completa (eudaimonía), no placeres momentáneos.",
          priority: 8
        },
        { 
          term: "felicidad", 
          meaning: "✨ FELICIDAD (del latín felicitas): Traducción común de 'eudaimonía', pero que puede resultar engañosa. Para Aristóteles no es un estado emocional pasajero ni la simple alegría. Es el florecimiento humano completo: una vida que actualiza todas nuestras potencialidades racionales y morales. En este párrafo, fíjate cómo se opone explícitamente al 'simple placer'.",
          priority: 10
        },
        { 
          term: "eudaimonía", 
          meaning: "🌟 EUDAIMONÍA (del griego εὐδαιμονία): Concepto central de la ética aristotélica. Literalmente significa 'buen demonio' o 'buen destino', pero se traduce como 'florecimiento humano' o 'vida plena'. No es un momento de felicidad, sino toda una vida dedicada a la excelencia. Es como un atleta que no solo gana una carrera, sino que vive entrenando la excelencia cada día. Este párrafo la presenta como el fin último de todas nuestras acciones.",
          priority: 10
        },
        { 
          term: "virtud", 
          meaning: "⚖️ VIRTUD (areté en griego): Excelencia del carácter que se adquiere por hábito y práctica constante. No es seguir reglas, sino desarrollar disposiciones estables para actuar bien. Como tocar un instrumento: no basta conocer las notas, hay que entrenar hasta que la música fluya naturalmente. En este párrafo, observa cómo la virtud es el camino hacia la felicidad auténtica.",
          priority: 9
        }
      ],
      corollary: [
        "El objetivo de la ética aristotélica es la felicidad (eudaimonía), no el placer momentáneo.",
        "La felicidad verdadera es una vida activa de acuerdo con la virtud, guiada por la razón."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🏛️ Ética de las Virtudes</h4>
        <p>La <strong>ética-de-Aristóteles</strong> se basa en la idea de que toda acción humana busca un <strong>bien</strong>. El fin último es la <strong>eudaimonía</strong>, entendida como <strong>felicidad</strong> o <strong>florecimiento-humano</strong>. Para alcanzarla, debemos cultivar <strong>virtudes</strong>, que son hábitos que perfeccionan el carácter. La virtud moral es el <strong>justo-medio</strong> entre dos extremos: por ejemplo, la <strong>valentía</strong> está entre la <strong>temeridad</strong> y la <strong>cobardía</strong>.</p>
        <p>Aristóteles distingue entre <strong>virtudes_éticas</strong> como la templanza o la generosidad y <strong>virtudes_dianoéticas</strong> (como la <strong>prudencia</strong> o la <strong>sabiduría</strong>). Las primeras se adquieren por hábito, las segundas por educación. La <strong>prudencia</strong> permite aplicar la virtud en situaciones concretas, reconociendo el punto medio adecuado.</p>
        <p>La ética aristotélica es <strong>práctica</strong>: no basta con conocer el bien, hay que actuar bien. La <strong>responsabilidad-moral</strong> requiere que el acto sea <strong>voluntario</strong>, es decir, hecho con conocimiento y sin coacción. La excelencia se logra cuando el deseo y la razón actúan en armonía.</p>
      </div>
      `,
      hint: "Explora los elementos centrales del sistema ético aristotélico y cómo se aplican en la práctica.",
      advanceAfter: 8, // De 16 conceptos, permitir avanzar con 8
      concepts: [
        { 
          term: "ética-de-Aristóteles", 
          meaning: "🏛️ ÉTICA ARISTOTÉLICA: Sistema filosófico basado en la virtud como camino hacia la felicidad. A diferencia de éticas basadas en reglas (deontológicas) o consecuencias (utilitaristas), se centra en el carácter de la persona. Pregunta clave: '¿Qué tipo de persona debo ser?' más que '¿Qué debo hacer?'. En este párrafo, observa cómo se estructura alrededor del concepto de bien y virtud.",
          priority: 10
        },
        { 
          term: "bien", 
          meaning: "🎯 EL BIEN: Aquello que se busca como fin en toda acción humana. Aristóteles identifica una jerarquía: bienes instrumentales (dinero, herramientas) que sirven para otros fines, y el bien supremo (eudaimonía) que se busca por sí mismo. En este contexto, el bien es el objeto natural de toda aspiración humana racional.",
          priority: 8
        },
        { 
          term: "justo-medio", 
          meaning: "⚖️ JUSTO MEDIO (mesótes): Principio central de la ética aristotélica. La virtud es el equilibrio entre dos extremos viciosos: exceso y defecto. NO es un promedio matemático, sino el punto óptimo para cada persona y situación. Como un arquero que ajusta su puntería según el viento y la distancia. En este párrafo, ve el ejemplo claro con valentía, temeridad y cobardía.",
          priority: 10
        },
        { 
          term: "valentía", 
          meaning: "🛡️ VALENTÍA (andreía): Virtud que consiste en enfrentar el peligro con la medida justa. No es ausencia de miedo (eso sería temeridad), sino actuar correctamente a pesar del miedo cuando vale la pena. El valiente conoce el riesgo, lo evalúa, y actúa cuando es necesario. Ejemplo perfecto del justo medio aristotélico.",
          priority: 9
        },
        { 
          term: "temeridad", 
          meaning: "⚡ TEMERIDAD: Vicio por exceso de valentía. Es lanzarse al peligro sin reflexión, por impulso o arrogancia. El temerario no evalúa riesgos y pone en peligro a otros. En este párrafo, representa uno de los extremos viciosos que la verdadera valentía debe evitar.",
          priority: 7
        },
        { 
          term: "cobardía", 
          meaning: "😨 COBARDÍA: Vicio por defecto de valentía. Es retirarse del peligro cuando se debería enfrentar, dejando que prevalezca el miedo irracional. El cobarde evita incluso riesgos necesarios y justos. En este párrafo, representa el otro extremo vicioso opuesto a la valentía.",
          priority: 7
        },
        { 
          term: "virtudes_éticas", 
          meaning: "💎 VIRTUDES ÉTICAS (virtudes morales): Excelencias del carácter que regulan emociones y acciones. Se adquieren por hábito y repetición, como aprender a tocar piano. Incluyen valentía, templanza, generosidad, justicia. En este párrafo, observa cómo se contraponen a las virtudes intelectuales por su modo de adquisición.",
          priority: 9
        },
        { 
          term: "virtudes_dianoéticas", 
          meaning: "🧠 VIRTUDES DIANOÉTICAS (virtudes intelectuales): Excelencias de la razón que se adquieren por enseñanza y experiencia. Incluyen sabiduría teórica (sophia), sabiduría práctica (prudencia), conocimiento científico. En este párrafo, nota cómo se distinguen de las éticas por requerir educación formal.",
          priority: 9
        },
        { 
          term: "prudencia", 
          meaning: "🎯 PRUDENCIA (phrónesis): La 'sabiduría práctica' que permite aplicar principios éticos a situaciones concretas. Es la virtud de saber cuándo, cómo y en qué medida aplicar otras virtudes. Como un médico que conoce la medicina general pero sabe aplicarla a cada paciente específico. En este párrafo, observa su rol crucial para reconocer el justo medio.",
          priority: 10
        },
        { 
          term: "sabiduría", 
          meaning: "📚 SABIDURÍA (sophia): Conocimiento profundo de los principios y causas últimas de la realidad. Para Aristóteles, es la virtud intelectual más alta, dirigida a verdades eternas y universales. Se distingue de la prudencia porque se ocupa de lo teórico, no de la acción. En este párrafo, representa una de las virtudes dianoéticas principales.",
          priority: 8
        },
        { 
          term: "práctica", 
          meaning: "🔨 PRÁCTICA: Característica fundamental de la ética aristotélica. No es una ciencia teórica que se queda en el conocimiento, sino que exige acción concreta. Como dice Aristóteles: 'No investigamos para saber qué es la virtud, sino para ser virtuosos'. En este párrafo, enfatiza que conocer el bien no basta: hay que vivirlo.",
          priority: 9
        },
        { 
          term: "responsabilidad-moral", 
          meaning: "⚖️ RESPONSABILIDAD MORAL: Capacidad de responder por nuestros actos cuando son verdaderamente nuestros. Requiere que la acción sea voluntaria: hecha con conocimiento de las circunstancias y sin coacción externa. Solo entonces podemos ser elogiados o culpados. En este párrafo, establece las condiciones básicas para la evaluación ética.",
          priority: 8
        },
        { 
          term: "voluntario", 
          meaning: "🆓 ACTO VOLUNTARIO: Acción realizada con conocimiento de las circunstancias particulares y sin coacción externa. Tiene tres condiciones: (1) origen en el agente, (2) conocimiento de particulares, (3) ausencia de coacción. Solo los actos voluntarios son moralmente evaluables. En este párrafo, establece el requisito básico para la responsabilidad moral.",
          priority: 8
        },
        { 
          term: "eudaimonía", 
          meaning: "🌟 EUDAIMONÍA: Repetimos este concepto central porque aparece en múltiples párrafos con matices diferentes. Aquí se presenta como 'felicidad o florecimiento humano', enfatizando que es un estado de realización completa, no un sentimiento pasajero. Es el fin último que da sentido a todas las virtudes.",
          priority: 10
        },
        { 
          term: "florecimiento-humano", 
          meaning: "🌱 FLORECIMIENTO HUMANO: Traducción moderna preferida para 'eudaimonía'. Evita la confusión con 'felicidad' emocional. Sugiere el desarrollo pleno de las capacidades específicamente humanas: razón, virtud, vida social. Como una planta que alcanza su forma perfecta, el humano florece cuando actualiza su naturaleza racional y ética.",
          priority: 9
        },
        { 
          term: "virtudes", 
          meaning: "⭐ VIRTUDES: Hábitos que perfeccionan el carácter y orientan hacia el bien. No son actos aislados sino disposiciones estables. Se adquieren por repetición hasta volverse 'segunda naturaleza'. Como un músico que practica hasta que la música fluye sin esfuerzo consciente. En este párrafo, son el medio necesario para alcanzar la eudaimonía.",
          priority: 9
        }
      ],
      corollary: [
        "La virtud es el hábito que conduce al justo medio entre extremos viciosos.",
        "La felicidad (eudaimonía) se alcanza mediante la excelencia del carácter y la razón.",
        "La ética aristotélica es práctica: saber no basta, hay que actuar virtuosamente."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>⚖️ Justicia y Equidad</h4>
        <p>Para Aristóteles, la <strong>justicia</strong> es la <strong>virtud-perfecta</strong>, porque implica actuar bien con los demás. Distingue entre <strong>justicia_distributiva</strong>, que reparte bienes según méritos, y <strong>justicia_correctiva</strong>, que repara desequilibrios en transacciones. La <strong>equidad</strong> es una forma superior de justicia, que adapta la norma al caso concreto cuando la ley resulta rígida.</p>
      </div>
      `,
      hint: "Descubre los tipos de justicia y cómo la equidad perfecciona la aplicación de la ley.",
      advanceAfter: 3, // De 5 conceptos, permitir avanzar con 3
      concepts: [
        { 
          term: "justicia", 
          meaning: "⚖️ JUSTICIA (dikaiosyne): La virtud más completa porque regula nuestras relaciones con los demás, buscando el bien común. Aristóteles la llama 'virtud perfecta' porque incluye todas las otras virtudes cuando se ejercen hacia otros. Es como una sinfonía donde cada virtud individual contribuye a la armonía social. En este párrafo, observa cómo abarca tanto distribución como corrección.",
          priority: 10
        },
        { 
          term: "virtud-perfecta", 
          meaning: "👑 VIRTUD PERFECTA: Título que Aristóteles da a la justicia porque es virtud completa: implica todas las demás virtudes (valentía, templanza, etc.) cuando se ejercen en relación con otros. No es 'perfecta' por ser sin defectos, sino por ser 'completa' o 'total'. En este párrafo, explica por qué la justicia tiene esta primacía sobre otras virtudes.",
          priority: 9
        },
        { 
          term: "justicia_distributiva", 
          meaning: "📊 JUSTICIA DISTRIBUTIVA: Tipo de justicia que se ocupa del reparto proporcional de bienes, honores y cargas según el mérito de cada persona. No es igualdad aritmética (todos reciben lo mismo) sino igualdad geométrica (cada uno según su aporte). Como repartir premios en una competencia según el rendimiento. En este párrafo, se contrapone a la justicia correctiva.",
          priority: 9
        },
        { 
          term: "justicia_correctiva", 
          meaning: "🔧 JUSTICIA CORRECTIVA (o conmutativa): Tipo de justicia que restaura el equilibrio cuando se ha roto en transacciones o daños entre particulares. Busca igualdad aritmética: restituir exactamente lo perdido. Como un juez que ordena devolver lo robado más los daños. En este párrafo, complementa la distributiva para abarcar todos los ámbitos de la justicia.",
          priority: 9
        },
        { 
          term: "equidad", 
          meaning: "🎯 EQUIDAD (epieikeia): Forma superior de justicia que corrige la rigidez de la ley aplicándola con sabiduría al caso particular. La ley es general, pero cada situación es única. La equidad es como un arquitecto que adapta los planos generales a las características específicas del terreno. En este párrafo, representa la perfección de la justicia más allá de la mera legalidad.",
          priority: 10
        }
      ],
      corollary: [
        "La justicia es la virtud que perfecciona la vida en comunidad, abarcando todas las demás virtudes.",
        "La equidad corrige la rigidez de la ley en favor del bien concreto y particular."
      ]
    }
  ]
};