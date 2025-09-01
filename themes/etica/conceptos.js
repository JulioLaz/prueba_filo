// js/caza_conceptos_etica.js

window.CONCEPT_HUNT_CONFIG = {
  author: "Ética y Filosofía Moral",
  menuUrl: "https://juliolaz.github.io/prueba_filo/quiz.html?tema=etica&theme=etica",
  levels: [
    {
      html: `
      <p>La <strong>ética</strong> es una rama de la filosofía que se ocupa de lo que es <strong>bueno</strong> o <strong>malo</strong>, correcto o incorrecto. Se diferencia de la moral en que la ética es la <strong>reflexión filosófica</strong> sobre los principios y valores, mientras que la <strong>moral</strong> es el conjunto de normas y costumbres de una sociedad. La ética busca los fundamentos de la moral, preguntándose por qué ciertas acciones son consideradas buenas.</p>
      `,
      hint: "Distinguir entre Ética y Moral.",
      advanceAfter: 4,
      concepts: [
        { term: "ética", meaning: "Rama de la filosofía que estudia la moralidad de los actos humanos. Es una reflexión teórica." },
        { term: "moral", meaning: "Conjunto de normas, valores y costumbres que guían la conducta humana en una sociedad. Es la práctica." },
        { term: "bueno", meaning: "Lo que se considera correcto, virtuoso o deseable según un sistema moral." },
        { term: "malo", meaning: "Lo que se considera incorrecto, vicioso o indeseable." },
      ],
      corollary: [
        "La ética es la reflexión, la moral es la práctica.",
        "La ética busca los fundamentos racionales de la moral."
      ],
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🤔 Libertad y Responsabilidad</h4>
        <p>La ética solo puede existir si hay <strong>libertad</strong>. Un acto moral es un acto <strong>libre</strong> e <strong>intencional</strong>. Si no somos libres de elegir, no podemos ser juzgados. La libertad nos hace <strong>responsables</strong> de nuestras acciones, ya que al elegir un camino, somos nosotros quienes debemos asumir sus <strong>consecuencias</strong>. Un dilema ético surge cuando tenemos que elegir entre dos valores en conflicto.</p>
      </div>
      `,
      hint: "Enfócate en los conceptos que hacen posible la ética.",
      advanceAfter: 4,
      concepts: [
        { term: "libertad", meaning: "La capacidad de elegir y tomar decisiones. Es la base de la moralidad." },
        { term: "responsabilidad", meaning: "La obligación de responder por las consecuencias de nuestros actos libres." },
        { term: "intencional", meaning: "Que se realiza con una intención o un propósito consciente." },
        { term: "consecuencias", meaning: "Los resultados o efectos de una acción." },
      ],
      corollary: [
        "Sin libertad, no hay responsabilidad.",
        "La ética estudia los actos libres e intencionales."
      ],
    },
{
  html: `
  <div class="highlight-box">
    <h4>⚖️ Juicio Moral y Valores</h4>
    <p>El <strong>juicio-moral</strong> es la capacidad de evaluar una acción como correcta o incorrecta según un sistema de <strong>valores</strong>. Estos valores pueden ser <strong>universales</strong>, como la justicia o la honestidad, o <strong>contextuales</strong>, dependiendo de la cultura o época. Las <strong>normas-morales</strong> son reglas que orientan el comportamiento, y su cumplimiento puede generar <strong>reconocimiento-social</strong> o <strong>culpa</strong>. La ética analiza cómo se forman estos juicios y qué fundamentos los sostienen.</p>
  </div>
  `,
  hint: "Busca los elementos que intervienen en el juicio moral.",
  advanceAfter: 9,
  concepts: [
    { term: "juicio-moral", meaning: "Evaluación racional de una acción como buena o mala según principios éticos." },
    { term: "valores", meaning: "Criterios que orientan el comportamiento humano y definen lo que se considera deseable." },
    { term: "universales", meaning: "Valores que se consideran válidos en todas las culturas y épocas." },
    { term: "contextuales", meaning: "Valores que dependen del entorno cultural, histórico o social." },
    { term: "normas-morales", meaning: "Reglas que guían la conducta según lo que se considera correcto en una sociedad." },
    { term: "reconocimiento-social", meaning: "Aprobación o valoración positiva que una persona recibe por actuar conforme a normas morales." },
    { term: "culpa", meaning: "Sentimiento negativo que surge al transgredir una norma moral." }
  ],
  corollary: [
    "El juicio moral se basa en valores y normas.",
    "La ética estudia cómo se forman y justifican esos juicios."
  ]
},
{
  html: `
  <div class="highlight-box">
    <h4>🧠 Dilemas Éticos</h4>
    <p>Imagina que un tren sin frenos se dirige hacia cinco personas atadas a las vías. Tú estás junto a una palanca que puede desviar el tren hacia otra vía, donde hay una sola persona. Este es el <strong>dilema-del-tranvía</strong>, que enfrenta el valor de la <strong>vida-humana</strong> contra el <strong>principio-utilitarista</strong> de minimizar el daño. ¿Es ético sacrificar a uno para salvar a cinco?</p>
    <p>Otro dilema surge cuando un médico tiene cinco pacientes que necesitan órganos para sobrevivir. Un visitante sano llega al hospital. ¿Sería ético sacrificarlo para salvar a los cinco? Este <strong>dilema-médico</strong> cuestiona los límites de la <strong>responsabilidad</strong>, el <strong>consentimiento</strong> y la <strong>dignidad-humana</strong>.</p>
    <p>En tiempos de guerra, un soldado debe decidir si desobedecer una orden injusta que pone en riesgo civiles. Este <strong>dilema-militar</strong> enfrenta la <strong>obediencia</strong> contra la <strong>conciencia-moral</strong>. ¿Debe seguir la norma o actuar según sus valores?</p>
  </div>
  `,
  hint: "Identifica los valores en conflicto en cada dilema.",
  advanceAfter: 9,
  concepts: [
    { term: "dilema-del-tranvía", meaning: "Situación ética clásica donde se debe elegir entre sacrificar a uno para salvar a varios." },
    { term: "vida-humana", meaning: "Valor fundamental que representa la existencia y dignidad de cada persona." },
    { term: "principio-utilitarista", meaning: "Doctrina ética que busca el mayor bien para el mayor número de personas." },
    { term: "dilema-médico", meaning: "Conflicto ético en el ámbito de la salud que involucra decisiones sobre vidas humanas." },
    { term: "consentimiento", meaning: "Aceptación libre e informada de una acción que afecta a una persona." },
    { term: "dignidad-humana", meaning: "Valor que reconoce el respeto y la integridad de cada individuo." },
    { term: "dilema-militar", meaning: "Conflicto ético en contextos bélicos entre obedecer órdenes y respetar principios morales." },
    { term: "obediencia", meaning: "Acto de seguir órdenes o normas impuestas por una autoridad." },
    { term: "conciencia-moral", meaning: "Capacidad de juzgar nuestras acciones según principios éticos internos." }
  ],
  corollary: [
    "Los dilemas éticos revelan tensiones entre valores fundamentales.",
    "La ética no siempre ofrece respuestas claras, pero sí herramientas para pensar mejor."
  ]
},
{
  html: `
  <div class="highlight-box">
    <h4>🤖 IA y Ética Contemporánea</h4>
    <p>Un sistema de <strong>inteligencia-artificial</strong> puede tomar decisiones que afectan vidas humanas: desde diagnósticos médicos hasta sentencias judiciales. El <strong>dilema-algoritmico</strong> surge cuando estas decisiones se basan en datos sesgados, reproduciendo <strong>discriminación</strong> sin intervención humana. ¿Quién es responsable: el programador, el usuario o el sistema?</p>
    <p>Otro dilema aparece con los <strong>vehículos-autónomos</strong>. Si un accidente es inevitable, ¿debe el auto proteger a su pasajero o minimizar el daño total? Este <strong>dilema-moral-tecnológico</strong> enfrenta la <strong>programación-ética</strong> contra la imprevisibilidad del mundo real.</p>
    <p>En el ámbito laboral, la automatización por IA puede reemplazar miles de empleos. ¿Es ético priorizar la <strong>eficiencia-económica</strong> sobre el <strong>bienestar-social</strong>? Este <strong>dilema-laboral</strong> cuestiona el equilibrio entre progreso tecnológico y justicia distributiva.</p>
  </div>
  `,
  hint: "Explora cómo la IA plantea nuevos desafíos éticos.",
  advanceAfter: 9,
  concepts: [
    { term: "inteligencia-artificial", meaning: "Sistemas que simulan capacidades humanas como el razonamiento, la percepción y la toma de decisiones." },
    { term: "dilema-algoritmico", meaning: "Conflicto ético generado por decisiones automatizadas basadas en datos sesgados o incompletos." },
    { term: "discriminación", meaning: "Tratamiento desigual hacia personas o grupos, muchas veces reforzado por sesgos en los datos." },
    { term: "vehículos-autónomos", meaning: "Automóviles que operan sin intervención humana, tomando decisiones en tiempo real." },
    { term: "dilema-moral-tecnológico", meaning: "Situación en la que una máquina debe tomar decisiones éticas en contextos impredecibles." },
    { term: "programación-ética", meaning: "Diseño de algoritmos que incorporan principios morales en su funcionamiento." },
    { term: "eficiencia-económica", meaning: "Optimización de recursos para maximizar beneficios, a menudo sin considerar impactos sociales." },
    { term: "bienestar-social", meaning: "Condiciones que favorecen la calidad de vida de una comunidad." },
    { term: "dilema-laboral", meaning: "Conflicto entre el avance tecnológico y la pérdida de empleos humanos." }
  ],
  corollary: [
    "La IA plantea dilemas éticos que requieren reflexión humana.",
    "La programación ética es clave para decisiones automatizadas responsables."
  ]
}

  ],
};