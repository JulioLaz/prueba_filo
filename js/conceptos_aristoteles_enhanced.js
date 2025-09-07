// js/conceptos_aristoteles_enhanced.js
// Configuración mejorada con significados contextualizados y ampliados

window.CONCEPT_HUNT_CONFIG = {
  author: "Aristóteles",
  menuUrl: "https://juliolaz.github.io/prueba_filo/quiz.html?tema=aristoteles&theme=aristoteles",
  
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
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🤝 Amistad y Virtud</h4>
        <p>La <strong>amistad</strong> es esencial en la ética de Aristóteles. Distingue tres tipos: <strong>amistad_por_utilidad</strong>, <strong>amistad_por_placer</strong> y <strong>amistad_por_virtud</strong>. Esta última es la más duradera, basada en el reconocimiento mutuo del bien. La amistad fortalece la <strong>cohesión-social</strong> y reduce la necesidad de leyes, porque los amigos actúan con respeto espontáneo.</p>
      </div>
      `,
      hint: "Identifica los tipos de amistad y comprende por qué la amistad virtuosa es la más valiosa.",
      advanceAfter: 3, // De 5 conceptos, permitir avanzar con 3
      concepts: [
        { 
          term: "amistad", 
          meaning: "🤝 AMISTAD (philía): Relación afectiva fundamental para la vida buena. Para Aristóteles no es solo sentimiento sino una virtud social activa basada en respeto mutuo, afecto y bien compartido. Incluye desde amistad íntima hasta camaradería ciudadana. Es como el aceite que hace funcionar los engranajes de la sociedad. En este párrafo, introduce su tipología triple.",
          priority: 10
        },
        { 
          term: "amistad_por_utilidad", 
          meaning: "🔧 AMISTAD POR UTILIDAD: Relación basada en el beneficio mutuo que cada uno obtiene del otro. Es amistad genuina pero limitada: dura mientras persiste la utilidad. Como socios comerciales que se respetan y ayudan mientras el negocio funciona. En este párrafo, representa el tipo más básico y menos duradero de amistad.",
          priority: 7
        },
        { 
          term: "amistad_por_placer", 
          meaning: "🎉 AMISTAD POR PLACER: Relación basada en el disfrute mutuo de la compañía, actividades compartidas o diversión. Más rica que la utilidad pero aún limitada: cuando cambian los gustos, la amistad se debilita. Como compañeros de deporte o aficiones. En este párrafo, representa un nivel intermedio de amistad.",
          priority: 7
        },
        { 
          term: "amistad_por_virtud", 
          meaning: "💎 AMISTAD POR VIRTUD: La forma más alta y duradera de amistad, basada en el reconocimiento mutuo del carácter excelente del otro. Los amigos se quieren por lo que son, no por lo que dan o dividen. Es rara porque requiere tiempo, conocimiento profundo y virtud en ambas partes. En este párrafo, se destaca como la más valiosa y estable.",
          priority: 10
        },
        { 
          term: "cohesión-social", 
          meaning: "🏛️ COHESIÓN SOCIAL: Unidad y armonía dentro de una comunidad política. Para Aristóteles, la amistad (especialmente la virtud compartida) es el cemento que mantiene unida la sociedad mejor que las leyes. Ciudadanos virtuosos y amigos no necesitan tanta regulación externa. En este párrafo, muestra el rol político fundamental de la amistad.",
          priority: 8
        }
      ],
      corollary: [
        "La amistad por virtud es la más estable y valiosa porque se basa en el carácter, no en beneficios externos.",
        "Donde hay verdadera amistad, la justicia se vuelve innecesaria porque surge el respeto espontáneo."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>📚 Educación y Formación Ética</h4>
        <p>Aristóteles considera que la <strong>educación</strong> es clave para formar el carácter. Las <strong>virtudes-morales</strong> se adquieren por <strong>hábito</strong>, y las <strong>virtudes-intelectuales</strong> por <strong>enseñanza</strong>. La <strong>formación-ciudadana</strong> debe comenzar desde la infancia, guiada por buenos ejemplos y leyes justas. Sin educación ética, no hay posibilidad de alcanzar la <strong>eudaimonía</strong>.</p>
      </div>
      `,
      hint: "Observa cómo se forman las virtudes y por qué la educación es fundamental para la ética.",
      advanceAfter: 4, // De 6 conceptos, permitir avanzar con 4
      concepts: [
        { 
          term: "educación", 
          meaning: "📚 EDUCACIÓN (paideia): Proceso integral de formación del carácter y la razón para vivir virtuosamente. No es solo transmisión de información sino moldeado del ethos (carácter). Como un escultor que da forma al mármol, la educación da forma al alma. Para Aristóteles es responsabilidad tanto de la familia como del Estado. En este párrafo, aparece como condición indispensable para la vida ética.",
          priority: 10
        },
        { 
          term: "virtudes-morales", 
          meaning: "💪 VIRTUDES MORALES: Hábitos estables que regulan emociones y acciones hacia el bien. Se adquieren por repetición y práctica, no por estudio teórico. Como aprender a caminar o nadar: requiere ejercicio hasta volverse automático. En este párrafo, se distinguen claramente de las intelectuales por su modo de adquisición.",
          priority: 9
        },
        { 
          term: "virtudes-intelectuales", 
          meaning: "🧠 VIRTUDES INTELECTUALES: Capacidades racionales que se desarrollan por enseñanza formal y experiencia reflexiva. Incluyen ciencia, sabiduría, prudencia. A diferencia de las morales, se aprenden por instrucción y demostración. Como estudiar matemáticas o filosofía. En este párrafo, complementan las morales en la formación completa.",
          priority: 9
        },
        { 
          term: "hábito", 
          meaning: "🔄 HÁBITO (hexis): Disposición estable adquirida por repetición que se convierte en 'segunda naturaleza'. No es rutina mecánica sino facilidad para actuar bien. Como un pianista que practica escalas hasta que fluyen sin esfuerzo consciente. En este párrafo, aparece como el método específico para desarrollar virtudes morales.",
          priority: 10
        },
        { 
          term: "enseñanza", 
          meaning: "🎓 ENSEÑANZA (didaskalia): Transmisión formal de conocimientos y principios racionales. Se distingue del hábito porque se dirige al intelecto, no al carácter. Incluye explicación, demostración y argumentación. Como un profesor de geometría que prueba teoremas. En este párrafo, es el método para desarrollar virtudes intelectuales.",
          priority: 8
        },
        { 
          term: "formación-ciudadana", 
          meaning: "🏛️ FORMACIÓN CIUDADANA: Educación específicamente orientada a la vida en comunidad política. Prepara para participar virtuosamente en la polis, equilibrando bien individual y común. Incluye tanto virtudes personales como comprensión de la justicia social. En este párrafo, muestra la dimensión política esencial de la educación ética aristotélica.",
          priority: 9
        }
      ],
      corollary: [
        "Las virtudes morales se forman por hábito y repetición, las intelectuales por enseñanza formal.",
        "La educación ética desde la infancia es la base indispensable para una sociedad justa y floreciente."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🏛️ Ética y Política</h4>
        <p>Para Aristóteles, la <strong>ética</strong> y la <strong>política</strong> están unidas. La <strong>polis</strong> es el espacio donde se realiza la vida virtuosa. El <strong>bien-común</strong> es superior al bien individual, y la <strong>felicidad-colectiva</strong> depende de ciudadanos virtuosos. Las <strong>formas-de-gobierno</strong> deben fomentar la virtud y la participación. La política no es solo poder, sino <strong>educación-moral</strong> para la comunidad.</p>
      </div>
      `,
      hint: "Relaciona ética individual con política colectiva y comprende por qué son inseparables.",
      advanceAfter: 4, // De 7 conceptos, permitir avanzar con 4
      concepts: [
        { 
          term: "ética", 
          meaning: "🧭 ÉTICA: Reflexión sobre cómo vivir bien como individuo, pero para Aristóteles está intrínsecamente conectada con la política. No es posible ser completamente virtuoso en aislamiento porque somos 'animales políticos'. La ética individual se realiza plenamente solo en la comunidad justa. En este párrafo, se presenta como inseparable de la vida política.",
          priority: 10
        },
        { 
          term: "política", 
          meaning: "🏛️ POLÍTICA: Organización de la vida en comunidad para alcanzar el bien común y permitir que los ciudadanos florezcan. No es mera administración del poder sino 'ciencia arquitectónica' que ordena todas las demás actividades hacia la eudaimonía colectiva. En este párrafo, aparece como educación moral comunitaria.",
          priority: 10
        },
        { 
          term: "polis", 
          meaning: "🏘️ POLIS: Ciudad-Estado griega, espacio natural de realización ética y política del ser humano. No es solo organización administrativa sino comunidad de vida buena donde se actualizan las capacidades específicamente humanas. Como el hábitat natural donde el humano puede florecer completamente. En este párrafo, es el lugar donde se realiza la vida virtuosa.",
          priority: 10
        },
        { 
          term: "bien-común", 
          meaning: "🌍 BIEN COMÚN: Objetivo colectivo que beneficia a todos los miembros de la comunidad y que es superior a la suma de bienes individuales. No anula el bien personal sino lo perfecciona: el individuo alcanza su máximo bien solo cuando la comunidad florece. En este párrafo, se presenta como prioritario respecto al bien individual.",
          priority: 9
        },
        { 
          term: "felicidad-colectiva", 
          meaning: "🌟 FELICIDAD COLECTIVA: Estado de bienestar y florecimiento compartido por los ciudadanos de una polis bien ordenada. No es suma de felicidades individuales sino realización comunitaria de la eudaimonía. Como una orquesta donde cada músico toca bien su parte y el conjunto crea armonía superior. En este párrafo, depende de la virtud ciudadana.",
          priority: 9
        },
        { 
          term: "formas-de-gobierno", 
          meaning: "⚖️ FORMAS DE GOBIERNO: Modelos de organización política que pueden fomentar u obstaculizar la virtud ciudadana. Aristóteles clasifica según número de gobernantes y si buscan bien común o propio. Las buenas (monarquía, aristocracia, república) educan en virtud; las malas (tiranía, oligarquía, democracia) la corrompen. En este párrafo, su calidad se mide por su capacidad educativa moral.",
          priority: 8
        },
        { 
          term: "educación-moral", 
          meaning: "📖 EDUCACIÓN MORAL POLÍTICA: Formación ética promovida por el Estado a través de leyes, instituciones y cultura pública. Para Aristóteles, la política tiene función pedagógica: crear condiciones donde los ciudadanos puedan desarrollar virtudes. En este párrafo, aparece como la verdadera función de la política, más allá del mero ejercicio del poder.",
          priority: 9
        }
      ],
      corollary: [
        "La ética individual se realiza plenamente solo en la comunidad política justa.",
        "La política auténtica es educación moral comunitaria orientada al bien común y la virtud ciudadana."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>⚖️ El Término Medio</h4>
        <p>Una de las ideas más famosas de <strong>Aristóteles</strong> es la del <strong>término-medio</strong>. La <strong>virtud</strong> se encuentra entre dos <strong>extremos</strong>, que son los vicios: el uno por <strong>exceso</strong> y el otro por <strong>defecto</strong>. Por ejemplo, la virtud de la valentía se encuentra entre el exceso (temeridad) y el defecto (cobardía). Encontrar el término medio requiere <strong>sabiduría-práctica</strong> (phrónesis) y no es una fórmula matemática, sino un equilibrio que depende de la persona y la situación.</p>
      </div>
      `,
      hint: "Profundiza en la teoría del término medio y comprende por qué requiere sabiduría práctica.",
      advanceAfter: 3, // De 5 conceptos, permitir avanzar con 3
      concepts: [
        { 
          term: "término-medio", 
          meaning: "⚖️ TÉRMINO MEDIO (mesótes): Principio central de la ética aristotélica que ubica la virtud como equilibrio entre dos extremos viciosos. NO es promedio aritmético sino el punto óptimo relativo a cada persona y situación. Como un médico que ajusta la dosis según el paciente, no hay fórmula universal. En este párrafo, se presenta como la esencia misma de la virtud moral.",
          priority: 10
        },
        { 
          term: "extremos", 
          meaning: "🔄 EXTREMOS: Los vicios opuestos entre los cuales se sitúa cada virtud. Uno por exceso (demasiado) y otro por defecto (muy poco). Ambos son igualmente viciosos aunque opuestos. Como desafinar por arriba o por abajo: ambos rompen la armonía. En este párrafo, se ejemplifican con temeridad y cobardía frente a la valentía.",
          priority: 9
        },
        { 
          term: "exceso", 
          meaning: "📈 EXCESO: Vicio que se da por ir más allá del término medio apropiado. 'Demasiado' de algo bueno lo convierte en malo. Como el ejercicio: beneficioso en medida justa, dañino en exceso. En este párrafo, la temeridad ejemplifica el exceso de valentía que se vuelve vicio.",
          priority: 8
        },
        { 
          term: "defecto", 
          meaning: "📉 DEFECTO: Vicio que se da por quedarse corto respecto al término medio apropiado. 'Muy poco' de algo necesario es igualmente vicioso que el exceso. Como la comida: insuficiente daña tanto como excesiva. En este párrafo, la cobardía ejemplifica el defecto de valentía.",
          priority: 8
        },
        { 
          term: "sabiduría-práctica", 
          meaning: "🎯 SABIDURÍA PRÁCTICA (phrónesis): La virtud intelectual que permite discernir y aplicar el término medio en situaciones concretas específicas. No es conocimiento teórico sino inteligencia práctica que sabe cuándo, cómo, con quién y en qué medida aplicar cada virtud. En este párrafo, aparece como indispensable para encontrar el equilibrio virtuoso.",
          priority: 10
        }
      ],
      corollary: [
        "La virtud es el punto de equilibrio entre dos extremos viciosos, relativo a cada persona y situación.",
        "El término medio no es fórmula matemática sino sabiduría práctica aplicada a circunstancias particulares."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🤝 La Vida en Comunidad</h4>
        <p>Aristóteles consideraba que el ser humano es un <strong>animal-político</strong>. Esto significa que nuestra naturaleza se realiza plenamente en la vida en <strong>comunidad</strong>, en la <strong>polis</strong> (ciudad-estado). La ética está estrechamente ligada a la <strong>política</strong>, ya que el objetivo de una buena comunidad es permitir que sus ciudadanos vivan una vida virtuosa y alcancen la felicidad. La <strong>amistad</strong> es una de las virtudes más importantes para la vida en sociedad.</p>
      </div>
      `,
      hint: "Comprende por qué el ser humano necesita la vida en comunidad para realizar su naturaleza.",
      advanceAfter: 3, // De 5 conceptos, permitir avanzar con 3
      concepts: [
        { 
          term: "animal-político", 
          meaning: "🏛️ ANIMAL POLÍTICO (zoon politikon): Definición aristotélica del ser humano como criatura que por naturaleza vive en sociedad política. No es elección sino necesidad natural: quien vive aislado es 'bestia o dios', no humano. Realizamos nuestra humanidad específica solo en relación con otros en la polis. En este párrafo, fundamenta por qué ética y política son inseparables.",
          priority: 10
        },
        { 
          term: "comunidad", 
          meaning: "👥 COMUNIDAD: Grupo de personas unidas por intereses, valores y objetivos compartidos en orden al bien común. Para Aristóteles es el ámbito natural donde el ser humano desarrolla sus capacidades específicas: lenguaje, razón, virtud. Como el agua para el pez: el medio donde podemos florecer. En este párrafo, es el espacio de realización de nuestra naturaleza.",
          priority: 9
        },
        { 
          term: "polis", 
          meaning: "🏘️ POLIS (ciudad-estado): Forma específica de comunidad política griega donde se realiza la vida buena. Es 'comunidad perfecta' porque es autosuficiente y tiene como fin la eudaimonía de los ciudadanos, no la mera supervivencia. En este párrafo, reaparece como el marco natural para la vida virtuosa y feliz.",
          priority: 10
        },
        { 
          term: "política", 
          meaning: "🗳️ POLÍTICA: Arte y ciencia de organizar la vida comunitaria para el florecimiento humano. Inseparable de la ética porque ambas buscan la vida buena: una a nivel individual, otra a nivel colectivo. Como dos caras de la misma moneda. En este párrafo, se reafirma su unión esencial con la ética.",
          priority: 9
        },
        { 
          term: "amistad", 
          meaning: "💝 AMISTAD: Virtud social fundamental que hace posible la vida comunitaria armoniosa. Más que sentimiento privado, es lazo que mantiene unida la sociedad. Ciudadanos que se tratan como amigos necesitan menos leyes y castigos. En este párrafo, aparece como virtud social esencial para la vida en comunidad.",
          priority: 9
        }
      ],
      corollary: [
        "El ser humano es por naturaleza un animal político que se realiza plenamente solo en comunidad.",
        "Ética individual y política colectiva son inseparables: ambas buscan la vida buena y virtuosa."
      ]
    }
  ]
};