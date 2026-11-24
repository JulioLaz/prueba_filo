// themes/simbolo_tecnica_muerte/conceptos.js
// Caza de conceptos — Símbolo, Técnica y Muerte: ¿Qué nos hace humanos? Unidad II.
// v1.0 (2026-11-24): tema nuevo. 8 niveles en el orden del material, sin negritas,
//   términos literales y palabras «gemelas» emparejadas.

window.CONCEPT_HUNT_CONFIG = {
  author: "Cassirer, Maliandi y Savater",
  menuUrl: "tema.html?tema=simbolo_tecnica_muerte",
  levels: [
    {
      html: `
      <p>Aristóteles dijo que somos el animal racional. En el siglo XX surgieron tres respuestas más: Cassirer habló del animal simbólico, Maliandi del animal técnico y Savater del ser que sabe que va a morir.</p>
      `,
      hint: "Identificá las cuatro definiciones del ser humano y sus autores.",
      concepts: [
        { term: "animal racional", meaning: "Definición de Aristóteles: el ser humano tiene razón." },
        { term: "Cassirer", meaning: "Filósofo alemán (1874–1945) de las formas simbólicas." },
        { term: "animal simbólico", meaning: "Definición de Cassirer: vivimos en un universo de símbolos." },
        { term: "Maliandi", meaning: "Filósofo argentino (1930–2023), especialista en ética." },
        { term: "animal técnico", meaning: "Definición de Maliandi: sobrevivimos gracias a la técnica." },
        { term: "Savater", meaning: "Filósofo español (1947): el ser humano sabe que va a morir." }
      ],
      corollary: [
        "Hay más de una manera de responder qué nos hace humanos.",
        "Símbolo, técnica y muerte: tres claves de lo humano."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🐞 Estímulo y respuesta</h4>
        <p>Según Uexküll, cada animal vive en un círculo funcional: un sistema receptor capta los estímulos y un sistema efector da la respuesta. En el ser humano aparece además el sistema simbólico.</p>
      </div>
      `,
      hint: "Identificá las partes del círculo funcional y lo que agrega el ser humano.",
      concepts: [
        { term: "Uexküll", meaning: "Biólogo en el que se apoya Cassirer." },
        { term: "círculo funcional", meaning: "El mundo cerrado de estímulo y respuesta de cada animal." },
        { term: "sistema receptor", meaning: "Capta los estímulos del ambiente." },
        { term: "estímulos", meaning: "Lo que el ambiente le presenta al organismo." },
        { term: "sistema efector", meaning: "Responde con movimientos." },
        { term: "respuesta", meaning: "La reacción del organismo al estímulo." },
        { term: "sistema simbólico", meaning: "El tercer eslabón, propio del ser humano." }
      ],
      corollary: [
        "El animal responde; el ser humano interpreta.",
        "Entre el estímulo y la respuesta ponemos símbolos."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🚦 Señal y símbolo</h4>
        <p>Una señal tiene una relación fija con lo que indica, como el humo con el fuego o la campana de Pavlov. Un símbolo es móvil y convencional: con él podemos hablar de lo ausente, del pasado y del futuro.</p>
      </div>
      `,
      hint: "Identificá la diferencia entre señal y símbolo.",
      concepts: [
        { term: "señal", meaning: "Pertenece al mundo físico: relación fija con lo que indica." },
        { term: "fija", meaning: "Así es la relación de la señal con lo que indica." },
        { term: "Pavlov", meaning: "Científico cuyo perro salivaba al oír la campana." },
        { term: "símbolo", meaning: "Pertenece al mundo del sentido: universal y móvil." },
        { term: "móvil", meaning: "El símbolo no está atado a algo presente." },
        { term: "ausente", meaning: "Con símbolos podemos hablar de lo que no está." }
      ],
      corollary: [
        "Las señales indican; los símbolos significan.",
        "Con símbolos hablamos de lo que no está."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🌐 El universo simbólico</h4>
        <p>Las formas simbólicas son el mito, la religión, el lenguaje, el arte, la historia y la ciencia. Son lentes para interpretar la realidad, y la cultura es un proceso de autoliberación, aunque puede volverse dogma.</p>
      </div>
      `,
      hint: "Identificá las formas simbólicas y qué es la cultura para Cassirer.",
      concepts: [
        { term: "formas simbólicas", meaning: "Las grandes maneras de interpretar la realidad con símbolos." },
        { term: "mito", meaning: "Forma simbólica: relatos que dan sentido al mundo." },
        { term: "lenguaje", meaning: "Forma simbólica: las palabras." },
        { term: "arte", meaning: "Forma simbólica: la creación de belleza y sentido." },
        { term: "ciencia", meaning: "Forma simbólica: el conocimiento con método." },
        { term: "autoliberación", meaning: "La cultura como proceso de construir el propio mundo." },
        { term: "dogma", meaning: "Riesgo: un símbolo rígido que no se puede discutir." }
      ],
      corollary: [
        "No conocemos la realidad sin símbolos.",
        "Los símbolos liberan si no se vuelven dogma."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🛠️ El animal técnico</h4>
        <p>Siguiendo a Gehlen, Maliandi ve al ser humano como un ser carencial, sin garras ni instintos seguros. Por eso la técnica es una prótesis: como decía Kapp, el martillo prolonga el puño.</p>
      </div>
      `,
      hint: "Identificá por qué somos animales técnicos.",
      concepts: [
        { term: "Gehlen", meaning: "Antropólogo alemán que llamó al ser humano «ser carencial»." },
        { term: "ser carencial", meaning: "Nace sin garras, pelaje ni instintos seguros." },
        { term: "instintos", meaning: "Respuestas seguras que en el ser humano son débiles." },
        { term: "técnica", meaning: "Condición de supervivencia del ser humano." },
        { term: "prótesis", meaning: "La técnica como extensión del cuerpo." },
        { term: "Kapp", meaning: "Filósofo que vio las herramientas como prolongación de los órganos." },
        { term: "martillo", meaning: "Ejemplo de prótesis: prolonga el puño." }
      ],
      corollary: [
        "Nacemos incompletos y la técnica nos completa.",
        "Sin técnica, la especie humana no sobreviviría."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>⚖️ Razón y técnica</h4>
        <p>La razón tiene dos dimensiones: fundamentación y crítica. La técnica es ambivalente, y el peligro es que la racionalidad instrumental desplace a la racionalidad valorativa. Por eso Maliandi pide una ética convergente.</p>
      </div>
      `,
      hint: "Identificá las dimensiones de la razón y el peligro de la técnica.",
      concepts: [
        { term: "fundamentación", meaning: "Dimensión de la razón que busca principios y orden." },
        { term: "crítica", meaning: "Dimensión de la razón que cuestiona y exige cambio." },
        { term: "ambivalente", meaning: "La técnica puede construir y destruir." },
        { term: "racionalidad instrumental", meaning: "Calcula los medios más eficaces para un fin." },
        { term: "racionalidad valorativa", meaning: "Juzga si el fin es bueno." },
        { term: "ética convergente", meaning: "Equilibra innovar y conservar la vida." }
      ],
      corollary: [
        "Saber cómo no es saber si debemos.",
        "Innovar y conservar: hay que equilibrar."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>⏳ El ser mortal</h4>
        <p>Para Savater, los animales mueren pero no saben que van a morir. Descubrimos la muerte del otro, que da origen a los ritos funerarios y la memoria, y la muerte propia, que es intransferible.</p>
      </div>
      `,
      hint: "Identificá cómo descubrimos la muerte y por qué es intransferible.",
      concepts: [
        { term: "Savater", meaning: "Filósofo español que pone la muerte en el centro de lo humano." },
        { term: "saben", meaning: "Lo que los animales no hacen con su muerte." },
        { term: "muerte del otro", meaning: "La ausencia definitiva de alguien querido." },
        { term: "ritos funerarios", meaning: "Despedidas que nacen frente a la muerte del otro." },
        { term: "memoria", meaning: "Resistencia cultural al olvido." },
        { term: "muerte propia", meaning: "La certeza de que yo también voy a morir." },
        { term: "intransferible", meaning: "Nadie puede morir en mi lugar." }
      ],
      corollary: [
        "Saber que morimos nos hace humanos.",
        "Nadie puede morir por mí."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🎯 Finitud y proyecto</h4>
        <p>Si fuéramos inmortales, todo podría postergarse. La escasez del tiempo da valor a las elecciones: la finitud es raíz de la libertad y hace de la vida un proyecto vital, y la técnica exige responsabilidad.</p>
      </div>
      `,
      hint: "Identificá por qué la finitud da sentido a la vida.",
      concepts: [
        { term: "inmortales", meaning: "Con tiempo infinito, nada sería urgente." },
        { term: "postergarse", meaning: "Lo que pasaría con cualquier decisión si no muriéramos." },
        { term: "escasez del tiempo", meaning: "Lo que da peso a las elecciones." },
        { term: "finitud", meaning: "Ser limitados en el tiempo." },
        { term: "libertad", meaning: "Nace de saber que somos finitos." },
        { term: "proyecto vital", meaning: "La vida como obra abierta que construimos." },
        { term: "responsabilidad", meaning: "Lo que exige usar bien el poder técnico en una vida finita." }
      ],
      corollary: [
        "La muerte es el marco de la libertad.",
        "Una vida finita vale por lo que elegimos hacer con ella."
      ]
    }
  ]
};
