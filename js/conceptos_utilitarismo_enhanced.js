// js/conceptos_utilitarismo_enhanced.js
// Configuración mejorada con significados contextualizados y ampliados

window.CONCEPT_HUNT_CONFIG = {
  author: "John Stuart Mill",
  menuUrl: "https://juliolaz.github.io/prueba_filo/quiz.html?tema=utilitarismo&theme=utilitarismo",
  
  // Niveles con destacado gradual y significados enriquecidos
  levels: [
    {
      html: `
      <p>El <strong>utilitarismo</strong> de J. S. Mill se basa en un solo principio: <strong>el Principio de la Mayor Felicidad</strong>. Según este, las acciones son correctas si tienden a promover la <strong>felicidad</strong>; e incorrectas si producen lo contrario. El objetivo es <strong>maximizar</strong> la mayor cantidad de bienestar para el <strong>mayor número de personas</strong>. Lo que realmente importa son las <strong>consecuencias</strong> de nuestras acciones, no las intenciones.</p>
      `,
      hint: "Identifica el principio fundamental del utilitarismo y su enfoque en las consecuencias por encima de las intenciones.",
      advanceAfter: 3, // De 6 conceptos, permitir avanzar con 3
      concepts: [
        { 
          term: "utilitarismo", 
          meaning: "🎯 UTILITARISMO (del latín utilitas = provecho): Filosofía moral que sostiene que la acción correcta es la que produce la mayor felicidad o bienestar para el mayor número de personas afectadas. Fundado por Jeremy Bentham y refinado por John Stuart Mill, es una teoría consecuencialista que juzga la moralidad por los resultados, no por las intenciones. En este párrafo, observa cómo se define por un solo principio unificador.",
          priority: 10
        },
        { 
          term: "el Principio de la Mayor Felicidad", 
          meaning: "📏 PRINCIPIO DE LA MAYOR FELICIDAD (Greatest Happiness Principle): Fundamento central del utilitarismo que establece que las acciones son moralmente correctas en proporción a su tendencia a promover la felicidad, e incorrectas cuando tienden a producir lo contrario. También llamado 'Principio de Utilidad'. En este párrafo, aparece como el criterio único y universal para juzgar la moralidad.",
          priority: 10
        },
        { 
          term: "felicidad", 
          meaning: "😊 FELICIDAD: En la ética utilitarista, Mill define la felicidad como 'placer y ausencia de dolor'. No es un estado subjetivo sino algo medible y comparable entre personas. Se distingue de la mera satisfacción de deseos porque incluye componentes cualitativos. En este párrafo, representa tanto el fin último como el criterio de evaluación moral.",
          priority: 10
        },
        { 
          term: "maximizar", 
          meaning: "📈 MAXIMIZAR: Lograr el mayor grado posible de felicidad o bienestar total. No se trata de hacer feliz al mayor número de personas, sino de producir la mayor cantidad total de felicidad, incluso si eso significa hacer muy felices a pocos en lugar de poco felices a muchos. En este párrafo, indica el carácter cuantitativo y optimizador de la ética utilitarista.",
          priority: 9
        },
        { 
          term: "mayor número de personas", 
          meaning: "👥 MAYOR NÚMERO DE PERSONAS: Se refiere a la totalidad de los seres capaces de sufrir y disfrutar que son afectados por una acción, no solo uno mismo o los cercanos. Incluye futuras generaciones y, para algunos utilitaristas, animales no humanos. En este párrafo, enfatiza el carácter inclusivo y expansivo de la consideración moral utilitarista.",
          priority: 9
        },
        { 
          term: "consecuencias", 
          meaning: "⚡ CONSECUENCIAS: Los resultados o efectos de una acción. Para el utilitarismo, son el único criterio para juzgar la moralidad de una acción, en contraste con teorías deontológicas (que juzgan por el deber) o de virtudes (que juzgan por el carácter). Esto hace del utilitarismo una teoría 'consecuencialista'. En este párrafo, se contraponen explícitamente a las intenciones.",
          priority: 10
        }
      ],
      corollary: [
        "El utilitarismo juzga la moralidad exclusivamente por las consecuencias, no por las intenciones o el carácter.",
        "El objetivo es maximizar la felicidad total considerando a todos los afectados por igual."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🌟 Placeres Superiores e Inferiores</h4>
        <p>Mill refina el utilitarismo distinguiendo entre diferentes tipos de <strong>placeres</strong>. Los <strong>placeres inferiores</strong> están ligados al cuerpo (comer, beber), mientras que los <strong>placeres superiores</strong> se asocian con nuestras facultades intelectuales (amistad, arte, conocimiento).</p>
        <p>Según Mill, la <strong>calidad</strong> del placer es más importante que su cantidad. Por eso afirma que "es mejor ser un ser humano insatisfecho que un cerdo satisfecho", lo que demuestra el valor único de los placeres intelectuales.</p>
      </div>
      `,
      hint: "Explora la distinción cualitativa de placeres y por qué Mill consideraba algunos superiores a otros.",
      advanceAfter: 3, // De 4 conceptos, permitir avanzar con 3
      concepts: [
        { 
          term: "placeres", 
          meaning: "✨ PLACERES: Sensaciones que generan bienestar y felicidad. Mill distingue entre dos tipos fundamentales: los del cuerpo (que compartimos con animales) y los de la mente (específicamente humanos). Esta distinción cualitativa es la contribución más importante de Mill al utilitarismo benthamiano, que solo consideraba diferencias cuantitativas.",
          priority: 10
        },
        { 
          term: "placeres inferiores", 
          meaning: "🥩 PLACERES INFERIORES: Placeres que compartimos con otros animales, ligados a la supervivencia y necesidades físicas (comida, bebida, sexo, descanso). No son malignos, pero son menos valiosos porque requieren menos de nuestras capacidades distintivamente humanas. En este párrafo, representan el nivel básico de la jerarquía hedonista milliana.",
          priority: 8
        },
        { 
          term: "placeres superiores", 
          meaning: "🎨 PLACERES SUPERIORES: Placeres exclusivos de los seres humanos que provienen del ejercicio de nuestras facultades intelectuales, estéticas y morales. Incluyen la amistad profunda, el arte, el conocimiento, la justicia, la dignidad. Son más valiosos porque involucran capacidades más complejas y producen satisfacción más duradera. En este párrafo, definen lo distintivamente humano.",
          priority: 10
        },
        { 
          term: "calidad", 
          meaning: "💎 CALIDAD: Para Mill, no todos los placeres son iguales en valor moral. La calidad de un placer depende de las facultades que involucra: los placeres que ejercitan capacidades más elevadas son intrínsecamente más valiosos, incluso si generan menos intensidad inmediata. Esta idea distingue a Mill de Bentham, quien solo consideraba cantidad. En este párrafo, se prioriza sobre la cantidad.",
          priority: 10
        }
      ],
      corollary: [
        "Mill introduce una dimensión cualitativa en el utilitarismo: no todos los placeres tienen el mismo valor.",
        "Los placeres intelectuales y morales son superiores a los físicos porque involucran facultades más elevadas."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>⚖️ El Principio de Imparcialidad Estricta</h4>
        <p>A pesar de lo que pueda parecer, el utilitarismo no es una justificación del <strong>egoísmo</strong>. Al evaluar una acción, se debe considerar la felicidad de <strong>todos los afectados</strong>, no solo la nuestra. Esto exige que actuemos como un <strong>espectador imparcial</strong>, sopesando de forma equitativa las consecuencias para cada persona. El <strong>altruismo</strong> utilitarista puede exigir sacrificios personales significativos por el bien común.</p>
      </div>
      `,
      hint: "Comprende cómo el utilitarismo rechaza el egoísmo y exige imparcialidad moral radical.",
      advanceAfter: 3, // De 4 conceptos, permitir avanzar con 3
      concepts: [
        { 
          term: "egoísmo", 
          meaning: "🚫 EGOÍSMO: Actuar solo en beneficio propio, dando prioridad especial a los propios intereses. El utilitarismo rechaza explícitamente el egoísmo porque exige considerar el bienestar de todos los afectados por igual. Un egoísta no podría ser un utilitarista coherente. En este párrafo, representa un malentendido común sobre el utilitarismo.",
          priority: 8
        },
        { 
          term: "todos los afectados", 
          meaning: "🌍 TODOS LOS AFECTADOS: Todas las personas o seres conscientes que recibirán las consecuencias de nuestra decisión, sin importar su proximidad física, emocional o temporal. Incluye familia, comunidad, sociedad, futuras generaciones y, para algunos utilitaristas, animales no humanos. En este párrafo, enfatiza la extensión radical de la consideración moral utilitarista.",
          priority: 9
        },
        { 
          term: "espectador imparcial", 
          meaning: "👁️ ESPECTADOR IMPARCIAL: Perspectiva moral que exige evaluar situaciones sin dar peso especial a nuestros propios intereses o los de nuestros seres queridos. Concepto tomado de Adam Smith pero radicalizado por el utilitarismo. El espectador imparcial 'cuenta a cada uno como uno y a nadie como más de uno'. En este párrafo, representa el ideal de objetividad moral.",
          priority: 10
        },
        { 
          term: "altruismo", 
          meaning: "❤️ ALTRUISMO: Consideración genuina por el bienestar de otros, incluso a costa del propio. El utilitarismo puede exigir altruismo extremo: si donar todo mi dinero excepto lo mínimo para sobrevivir produce más felicidad total, estoy moralmente obligado a hacerlo. En este párrafo, muestra las demandas potencialmente radicales del utilitarismo.",
          priority: 9
        }
      ],
      corollary: [
        "El utilitarismo es una ética profundamente altruista que rechaza cualquier privilegio moral especial para uno mismo.",
        "La imparcialidad utilitarista puede exigir sacrificios personales significativos por el bien común."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>📋 Utilitarismo del Acto vs. Utilitarismo de la Regla</h4>
        <p>Una gran pregunta en el utilitarismo es si debemos juzgar cada <strong>acto individual</strong> o si debemos seguir <strong>reglas morales</strong> que, en general, promueven la mayor felicidad. Mill se inclinó por el <strong>utilitarismo de la regla</strong>, argumentando que seguir reglas como "no mentir" o "no robar" crea confianza y bienestar a largo plazo, aunque haya <strong>excepciones</strong> en situaciones extremas donde romper la regla evita un daño mucho mayor.</p>
      </div>
      `,
      hint: "Diferencia entre evaluar actos individuales versus seguir reglas generales, y por qué Mill prefería las reglas.",
      advanceAfter: 3, // De 5 conceptos, permitir avanzar con 3
      concepts: [
        { 
          term: "acto individual", 
          meaning: "🎯 UTILITARISMO DEL ACTO: Posición que juzga la moralidad de cada acción específica y única según sus consecuencias particulares. Cada situación requiere un cálculo fresh del bienestar total. Aunque parece más puro teóricamente, puede llevar a decisiones que minan la confianza social. En este párrafo, representa el enfoque más directo pero problemático.",
          priority: 9
        },
        { 
          term: "reglas morales", 
          meaning: "📜 REGLAS MORALES: Principios generales de conducta (como 'no mentir', 'no robar', 'cumplir promesas') que la experiencia histórica demuestra que generalmente conducen al bienestar social. Son heurísticas morales probadas que evitan tener que calcular consecuencias en cada situación. En este párrafo, representan sabiduría práctica acumulada.",
          priority: 10
        },
        { 
          term: "utilitarismo de la regla", 
          meaning: "⚖️ UTILITARISMO DE LA REGLA: Posición que juzga la moralidad de una acción según si la regla que la justifica, si fuera seguida universalmente, produciría la mayor felicidad total. Mill lo prefería porque crear y mantener instituciones sociales confiables produce más bienestar a largo plazo que optimizar caso por caso. En este párrafo, representa la posición más madura.",
          priority: 10
        },
        { 
          term: "excepciones", 
          meaning: "🚨 EXCEPCIONES: Situaciones muy inusuales donde romper una regla moral establecida está justificado porque produce un beneficio significativamente mayor o evita un sufrimiento considerable. Por ejemplo, mentir para salvar una vida. Estas excepciones no invalidan las reglas sino que las refinan. En este párrafo, muestran que el utilitarismo de regla no es absolutista.",
          priority: 8
        },
        { 
          term: "confianza", 
          meaning: "🤝 CONFIANZA SOCIAL: Base de la cooperación y el bienestar colectivo. Cuando las personas pueden predecir el comportamiento de otros basándose en reglas morales compartidas, la sociedad funciona mejor. El utilitarismo de regla protege esta confianza mejor que el de acto, que podría justificar romper promesas cuando conviene. En este párrafo, explica por qué Mill prefería las reglas.",
          priority: 9
        }
      ],
      corollary: [
        "El utilitarismo del acto juzga cada acción por sus consecuencias específicas; el de regla juzga por las reglas que la justifican.",
        "Mill prefería el utilitarismo de regla porque preserva la confianza social y produce mayor bienestar a largo plazo."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🤔 Desafíos y Críticas al Utilitarismo</h4>
        <p>El utilitarismo, pese a su gran influencia, enfrenta críticas importantes. Un problema clave es el de la <strong>justicia</strong>: ¿podría justificarse sacrificar a una persona inocente por el bien de la mayoría? Otro desafío es el del <strong>cálculo</strong>: ¿es realmente posible medir y comparar la felicidad o el bienestar? Además, se cuestiona si el utilitarismo exige demasiado de las personas, creando una <strong>demanda excesiva</strong> que pocos pueden cumplir en la práctica.</p>
      </div>
      `,
      hint: "Identifica los principales problemas teóricos y prácticos que enfrentan las teorías utilitaristas.",
      advanceAfter: 2, // De 3 conceptos, permitir avanzar con 2
      concepts: [
        { 
          term: "justicia", 
          meaning: "⚖️ PROBLEMA DE LA JUSTICIA: Crítica fundamental que señala que el utilitarismo podría justificar actos intuitivamente injustos si maximizan la felicidad total. Por ejemplo, castigar a un inocente para calmar a una multitud, o redistribuir órganos de una persona sana para salvar cinco vidas. La justicia exige respetar derechos individuales incluso cuando eso reduzca el bienestar total. En este párrafo, representa la tensión entre utilidad agregada y derechos individuales.",
          priority: 10
        },
        { 
          term: "cálculo", 
          meaning: "🧮 PROBLEMA DEL CÁLCULO: La dificultad práctica e teórica de medir, comparar y predecir felicidad o bienestar. ¿Cómo comparamos el placer de escuchar música con el de ayudar a alguien? ¿Cómo predecimos consecuencias a largo plazo? ¿Cómo comparamos bienestar entre personas diferentes? Este problema cuestiona si el utilitarismo puede ser más que un ideal teórico. En este párrafo, desafía la viabilidad práctica de la teoría.",
          priority: 10
        },
        { 
          term: "demanda excesiva", 
          meaning: "💪 DEMANDA EXCESIVA: Crítica que señala que el utilitarismo podría exigir sacrificios personales tan extremos que resultan psicológicamente imposibles o moralmente irrazonables. Si siempre debo maximizar la felicidad total, ¿puedo tomarme vacaciones cuando ese dinero podría salvar vidas? Esta crítica cuestiona si una teoría tan exigente puede guiar la vida humana real. En este párrafo, plantea los límites prácticos del altruismo utilitarista.",
          priority: 9
        }
      ],
      corollary: [
        "El utilitarismo enfrenta serios desafíos: puede justificar injusticias, es difícil de calcular y exige demasiado de las personas.",
        "Estas críticas han llevado al desarrollo de versiones más sofisticadas y a teorías éticas alternativas."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🌍 Legado e Influencia del Utilitarismo</h4>
        <p>A pesar de sus críticas, el utilitarismo sigue siendo enormemente influyente. Ha inspirado reformas sociales, políticas públicas basadas en <strong>análisis costo-beneficio</strong>, y el desarrollo de disciplinas como la <strong>economía del bienestar</strong>. En bioética, el utilitarismo informa debates sobre <strong>asignación de recursos médicos</strong>. Su enfoque en las consecuencias y el bienestar agregado continúa siendo una lente importante para evaluar políticas y decisiones que afectan a grandes poblaciones.</p>
      </div>
      `,
      hint: "Considera el impacto práctico y la relevancia contemporánea del pensamiento utilitarista.",
      advanceAfter: 2, // De 3 conceptos, permitir avanzar con 2
      concepts: [
        { 
          term: "análisis costo-beneficio", 
          meaning: "📊 ANÁLISIS COSTO-BENEFICIO: Método de evaluación de políticas que compara los costos (en dinero, tiempo, recursos) con los beneficios (en bienestar, salud, productividad) de diferentes opciones. Herramienta práctica inspirada en el utilitarismo que busca maximizar el bienestar neto. Usado en decisiones sobre infraestructura, regulaciones ambientales, programas sociales. En este párrafo, ejemplifica la aplicación práctica del pensamiento utilitarista.",
          priority: 9
        },
        { 
          term: "economía del bienestar", 
          meaning: "💰 ECONOMÍA DEL BIENESTAR: Rama de la economía que evalúa el bienestar económico y busca condiciones para maximizarlo. Inspirada directamente en el utilitarismo, estudia cómo diferentes políticas afectan la utilidad total de la sociedad. Incluye conceptos como eficiencia de Pareto y teoremas del bienestar. En este párrafo, muestra cómo el utilitarismo influyó en disciplinas académicas completas.",
          priority: 8
        },
        { 
          term: "asignación de recursos médicos", 
          meaning: "🏥 ASIGNACIÓN DE RECURSOS MÉDICOS: Decisiones sobre cómo distribuir recursos limitados de salud (camas de UCI, órganos para trasplante, vacunas escasas, presupuesto médico). El enfoque utilitarista busca maximizar años de vida salvados o calidad de vida total, a veces conflictuando con principios de justicia o derechos individuales. En este párrafo, ilustra aplicaciones contemporáneas del razonamiento utilitarista.",
          priority: 9
        }
      ],
      corollary: [
        "El utilitarismo ha tenido un impacto práctico enorme en políticas públicas, economía y bioética.",
        "Su enfoque en maximizar bienestar sigue siendo relevante para decisiones que afectan a grandes poblaciones."
      ]
    }
  ]
};