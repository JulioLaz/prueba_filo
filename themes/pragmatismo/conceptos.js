// themes/pragmatismo/conceptos.js
// Caza de conceptos — Pragmatismo: la utilidad como criterio de la verdad
// v2.0 (2026-11-19): 8 niveles alineados con las 16 secciones del material
// (antes: 2 niveles y 7 conceptos); modelo de etica_aristoteles: sin negritas en
// el texto (el motor resalta los conceptos), términos con espacios en vez de
// guiones y hay que encontrar todos los conceptos del párrafo para avanzar.
// v2.1 (2026-11-19): «matemático, químico y lógico» como un solo concepto.

window.CONCEPT_HUNT_CONFIG = {
  author: "Charles S. Peirce, William James y John Dewey",
  menuUrl: "tema.html?tema=pragmatismo",
  levels: [
    {
      html: `
      <p>El pragmatismo evalúa las ideas con una pregunta simple pero revolucionaria: ¿para qué sirve? No entiende la verdad como correspondencia perfecta con la realidad, sino como utilidad práctica. Una creencia es verdadera si funciona, si nos permite resolver problemas y si produce consecuencias útiles en nuestra vida.</p>
      `,
      hint: "Identifica el criterio de verdad del pragmatismo.",
      concepts: [
        { term: "pragmatismo", meaning: "Corriente filosófica que evalúa las ideas y creencias por su utilidad práctica y sus consecuencias." },
        { term: "verdad", meaning: "Para el pragmatismo, no es una copia fiel de la realidad: es verdadero lo que funciona y resuelve problemas." },
        { term: "correspondencia", meaning: "Concepción tradicional de la verdad: una idea es verdadera si coincide con cómo es la realidad. El pragmatismo la abandona." },
        { term: "utilidad práctica", meaning: "Capacidad de una idea para servir en la vida real. Es el criterio pragmatista de verdad." },
        { term: "creencia", meaning: "Idea que aceptamos y que guía nuestra acción. Se pone a prueba por sus efectos." },
        { term: "consecuencias", meaning: "Los resultados que produce una idea al ponerla en práctica. Son la medida de su verdad." }
      ],
      corollary: [
        "La verdad se mide por lo que funciona.",
        "Una idea vale por sus consecuencias prácticas."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🇺🇸 Una filosofía americana</h4>
        <p>El pragmatismo nace en Estados Unidos durante el siglo XIX, en una época de rápida industrialización y expansión territorial. Esa mentalidad valoraba lo práctico: lo que resuelve problemas reales en el campo, la fábrica y la ciudad. No surge de los escritorios de las universidades europeas, sino del espíritu de una nación que se construía a sí misma mediante la experimentación constante.</p>
      </div>
      `,
      hint: "Busca dónde, cuándo y en qué contexto surge el pragmatismo.",
      concepts: [
        { term: "Estados Unidos", meaning: "País donde nace el pragmatismo: es la primera gran filosofía surgida en América." },
        { term: "siglo XIX", meaning: "Época de origen del pragmatismo, en la segunda mitad del siglo." },
        { term: "industrialización", meaning: "Proceso de desarrollo de fábricas y tecnología que marcó el contexto en que surgió el pragmatismo." },
        { term: "problemas reales", meaning: "Las dificultades concretas de la vida, que el pragmatismo pone en el centro de la reflexión." },
        { term: "universidades europeas", meaning: "Centros de la filosofía tradicional, más teórica, frente a los que el pragmatismo se presenta como algo nuevo." },
        { term: "experimentación", meaning: "Probar soluciones y ver si funcionan. Es el espíritu que el pragmatismo convierte en método." }
      ],
      corollary: [
        "El pragmatismo nace del espíritu práctico de Estados Unidos.",
        "Experimentar y resolver problemas es su sello de origen."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🧮 Peirce: el fundador</h4>
        <p>Charles Sanders Peirce (1839-1914), matemático, químico y lógico, formuló la máxima pragmática: para entender una idea hay que considerar todas sus consecuencias prácticas imaginables. Su método para clarificar conceptos era preguntarse qué diferencia práctica produce creer o no creer algo. Si no hay ninguna diferencia observable, el concepto carece de verdadero significado.</p>
      </div>
      `,
      hint: "Identifica la regla que propone Peirce para aclarar las ideas.",
      concepts: [
        { term: "Charles Sanders Peirce", meaning: "Fundador del pragmatismo (1839-1914): lógico y científico que creó la máxima pragmática." },
        { term: "matemático, químico y lógico", meaning: "Las profesiones de Peirce: un científico que estudió las reglas del razonamiento correcto." },
        { term: "máxima pragmática", meaning: "Regla de Peirce: el significado de una idea está en sus consecuencias prácticas imaginables." },
        { term: "clarificar conceptos", meaning: "Hacer claras las ideas confusas. Para Peirce, se logra examinando sus efectos prácticos." },
        { term: "diferencia práctica", meaning: "El cambio observable que produce creer algo. Si no hay ninguno, la idea no significa nada." },
        { term: "significado", meaning: "Para Peirce, el sentido de un concepto es la suma de sus efectos prácticos concebibles." }
      ],
      corollary: [
        "Entender una idea es conocer sus consecuencias prácticas.",
        "Si creer algo no cambia nada, el concepto está vacío."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🧠 William James: la mente que se adapta</h4>
        <p>William James (1842-1910), psicólogo y filósofo, llevó el pragmatismo al público general. Describió la corriente de la conciencia: la mente no es estática sino un flujo continuo. Para James, la mente existe para ayudarnos a adaptarnos al mundo y resolver problemas. También aplicó el pragmatismo a la religión: si una creencia religiosa mejora tu vida y aumenta tu bienestar, es verdadera para ti en el sentido que importa.</p>
      </div>
      `,
      hint: "Busca cómo entiende James la mente y cómo aplica el pragmatismo a la fe.",
      concepts: [
        { term: "William James", meaning: "Psicólogo y filósofo (1842-1910) que difundió el pragmatismo y lo aplicó a la psicología y la religión." },
        { term: "corriente de la conciencia", meaning: "Idea de James: la conciencia es un fluir continuo de pensamientos, no un conjunto de piezas fijas." },
        { term: "flujo continuo", meaning: "Carácter cambiante y dinámico de la vida mental según James." },
        { term: "adaptarnos", meaning: "Para James, la función de la mente es ayudarnos a adaptarnos al ambiente y sobrevivir." },
        { term: "religión", meaning: "Ámbito donde James aplicó el pragmatismo: una creencia religiosa se valora por sus efectos en la vida." },
        { term: "bienestar", meaning: "Mejora en la vida de una persona. Para James, es uno de los efectos que vuelven valiosa una creencia." }
      ],
      corollary: [
        "La mente sirve para adaptarnos al mundo.",
        "Una creencia se valora por lo que hace en nuestra vida."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>👨‍🏫 John Dewey: educación y democracia</h4>
        <p>John Dewey (1859-1952) revolucionó la educación con su lema: aprender haciendo. Criticó la escuela de pura memorización y propuso que los estudiantes resuelvan problemas reales, experimenten y aprendan de sus errores. El maestro deja de ser una autoridad que transmite verdades y se convierte en un facilitador. La escuela es una comunidad democrática donde la democracia se practica, no solo se estudia.</p>
      </div>
      `,
      hint: "Identifica el lema de Dewey y el nuevo rol de la escuela.",
      concepts: [
        { term: "John Dewey", meaning: "El pragmatista más influyente (1859-1952); aplicó el pragmatismo a la educación y la democracia." },
        { term: "aprender haciendo", meaning: "Lema de Dewey: el conocimiento se construye actuando y resolviendo problemas, no memorizando." },
        { term: "memorización", meaning: "Aprendizaje repetitivo y pasivo que Dewey consideraba un fracaso de la escuela tradicional." },
        { term: "errores", meaning: "Para Dewey, parte necesaria del aprendizaje: se aprende experimentando y corrigiendo." },
        { term: "facilitador", meaning: "Rol del docente en la educación pragmática: guía la investigación de los estudiantes en lugar de dictar verdades." },
        { term: "comunidad democrática", meaning: "Así concebía Dewey la escuela: un lugar donde se practica la democracia." }
      ],
      corollary: [
        "Se aprende haciendo, no memorizando.",
        "La escuela es un taller de democracia."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🧪 El método pragmático</h4>
        <p>El pensamiento pragmático sigue un ciclo de cinco pasos. Primero, identificar el problema. Segundo, generar alternativas. Tercero, predecir las consecuencias de cada opción. Cuarto, experimentar con la opción más prometedora. Quinto, evaluar resultados: ¿funcionó? ¿Qué aprendimos? El ciclo nunca termina: cada iteración mejora la anterior a partir de la evidencia de lo que realmente funciona.</p>
      </div>
      `,
      hint: "Busca los pasos del método pragmático en orden.",
      concepts: [
        { term: "identificar el problema", meaning: "Primer paso del método: definir con precisión qué hay que resolver." },
        { term: "generar alternativas", meaning: "Segundo paso: pensar varias opciones posibles de solución." },
        { term: "predecir", meaning: "Tercer paso: anticipar qué resultados produciría cada opción." },
        { term: "experimentar", meaning: "Cuarto paso: poner a prueba la opción más prometedora en la realidad." },
        { term: "evaluar resultados", meaning: "Quinto paso: comprobar si la solución funcionó y qué se aprendió." },
        { term: "iteración", meaning: "Cada vuelta del ciclo: se repite el proceso para mejorar la solución anterior." },
        { term: "evidencia", meaning: "Datos obtenidos de la experiencia que muestran qué funciona y qué no." }
      ],
      corollary: [
        "Problema, alternativas, predicción, experimento, evaluación.",
        "El método pragmático es un ciclo de mejora continua."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🗳️ Del laboratorio a la sociedad</h4>
        <p>En psicología, el pragmatismo dio origen al funcionalismo: la mente existe para adaptarnos al ambiente. En política, promovió las políticas basadas en evidencia: si un programa social no da resultados, se modifica o se descarta. Franklin Roosevelt aplicó esta actitud con el New Deal durante la Gran Depresión, y la democracia pasó a verse como un experimento social continuo. Hoy el mismo espíritu aparece en la medicina basada en evidencia y en el A/B testing de la tecnología.</p>
      </div>
      `,
      hint: "Identifica las aplicaciones del pragmatismo en distintos campos.",
      concepts: [
        { term: "funcionalismo", meaning: "Corriente psicológica de origen pragmatista: estudia para qué sirve la mente, no solo cómo está hecha." },
        { term: "políticas basadas en evidencia", meaning: "Decisiones públicas que se mantienen o se cambian según sus resultados medibles." },
        { term: "New Deal", meaning: "Conjunto de programas de Franklin Roosevelt ante la Gran Depresión, aplicados con actitud experimental." },
        { term: "experimento social", meaning: "Forma pragmatista de ver la democracia: las leyes son hipótesis que se revisan si fallan." },
        { term: "medicina basada en evidencia", meaning: "Práctica médica que elige tratamientos según lo que realmente cura." },
        { term: "A/B testing", meaning: "Técnica tecnológica que compara dos versiones con usuarios reales para ver cuál funciona mejor." }
      ],
      corollary: [
        "El pragmatismo aplica la experimentación a la mente, la política y la técnica.",
        "Una política se juzga por sus resultados, no por su ideología."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>⚖️ Rorty y las críticas</h4>
        <p>Richard Rorty (1931-2007) impulsó el neopragmatismo: atacó la idea de que el conocimiento es un espejo de la naturaleza y propuso mantener viva la conversación entre perspectivas. Los críticos advierten el riesgo de relativismo moral: si la verdad es lo que funciona, ¿no podrían funcionar también ideas malvadas? Otros señalan que hay valores intrínsecos, como la dignidad humana o la belleza, que no se reducen a utilidad. Los pragmatistas responden que su filosofía es antidogmática: un método más que un conjunto fijo de creencias.</p>
      </div>
      `,
      hint: "Busca la versión actual del pragmatismo y sus principales objeciones.",
      concepts: [
        { term: "Richard Rorty", meaning: "Filósofo estadounidense (1931-2007) que renovó el pragmatismo en el siglo XX." },
        { term: "neopragmatismo", meaning: "Versión de Rorty: el conocimiento es más creación que descubrimiento." },
        { term: "espejo de la naturaleza", meaning: "Imagen que Rorty critica: la idea de que la mente solo refleja la realidad tal como es." },
        { term: "conversación", meaning: "Para Rorty, la tarea de la filosofía: mantener el diálogo entre perspectivas en vez de buscar certezas absolutas." },
        { term: "relativismo moral", meaning: "Crítica al pragmatismo: si la verdad es lo que funciona, cualquier idea útil podría justificarse." },
        { term: "valores intrínsecos", meaning: "Valores que valen por sí mismos (dignidad, belleza) y que, según los críticos, no se reducen a utilidad." },
        { term: "antidogmática", meaning: "Que no acepta verdades fijas e incuestionables. El pragmatismo se define así." }
      ],
      corollary: [
        "Para Rorty, el conocimiento es conversación, no espejo.",
        "El pragmatismo es un método abierto, no un dogma."
      ]
    }
  ]
};
