// themes/nietzsche_superhombre/conceptos.js
// Caza de conceptos — Nietzsche: La Muerte de Dios y el Superhombre. Unidad II.
// v1.0 (2026-11-25): tema nuevo. 8 niveles en el orden del material, sin negritas,
//   términos literales y palabras «gemelas» emparejadas.

window.CONCEPT_HUNT_CONFIG = {
  author: "Friedrich Nietzsche",
  menuUrl: "tema.html?tema=nietzsche_superhombre",
  levels: [
    {
      html: `
      <p>Friedrich Nietzsche fue un filósofo alemán. Escribió Así habló Zaratustra y La genealogía de la moral, desconfiaba de las verdades absolutas y quería filosofar a golpes de martillo.</p>
      `,
      hint: "Identificá quién fue Nietzsche, sus obras y su estilo.",
      concepts: [
        { term: "Friedrich Nietzsche", meaning: "Filósofo alemán (1844–1900)." },
        { term: "Así habló Zaratustra", meaning: "Obra donde presenta al superhombre." },
        { term: "La genealogía de la moral", meaning: "Obra sobre el origen de los valores." },
        { term: "verdades absolutas", meaning: "Lo que Nietzsche ponía en duda." },
        { term: "martillo", meaning: "Imagen de su filosofía: derribar viejos ídolos." }
      ],
      corollary: [
        "Nietzsche quiso derribar las viejas verdades.",
        "Su obra central es Así habló Zaratustra."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>✝️ La muerte de Dios</h4>
        <p>Dios ha muerto: no es una tesis teológica, sino un diagnóstico de la cultura. Nosotros lo hemos matado al dejar de creer. Como decía Feuerbach, el ser humano crea a Dios.</p>
      </div>
      `,
      hint: "Identificá qué significa la muerte de Dios.",
      concepts: [
        { term: "Dios ha muerto", meaning: "Frase de La gaya ciencia: diagnóstico de Occidente." },
        { term: "diagnóstico", meaning: "No es una tesis teológica, sino una lectura de la cultura." },
        { term: "cultura", meaning: "Lo que se queda sin fundamento cuando Dios muere." },
        { term: "hemos matado", meaning: "La sociedad dejó de creer." },
        { term: "Feuerbach", meaning: "Filósofo para quien el ser humano crea a Dios." }
      ],
      corollary: [
        "La muerte de Dios es un acontecimiento cultural.",
        "Dejamos de creer: nosotros lo hemos matado."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🕳️ El nihilismo</h4>
        <p>Sin Dios llega el nihilismo: estamos frente a la nada. La forma pasiva busca sustitutos cómodos; la forma activa destruye los ídolos y ve el mundo como un lienzo en blanco.</p>
      </div>
      `,
      hint: "Identificá el nihilismo y sus dos formas.",
      concepts: [
        { term: "nihilismo", meaning: "Desvalorización de los valores supremos." },
        { term: "nada", meaning: "Lo que queda frente a nosotros sin Dios." },
        { term: "forma pasiva", meaning: "Nihilismo pasivo: resignarse o buscar sustitutos cómodos de Dios." },
        { term: "sustitutos", meaning: "Estado, progreso o ciencia vueltos dogma." },
        { term: "forma activa", meaning: "Nihilismo activo: destruir los ídolos para crear valores nuevos." },
        { term: "ídolos", meaning: "Valores viejos que hay que derribar." },
        { term: "lienzo en blanco", meaning: "El mundo sin valores dados, libre para pintar." }
      ],
      corollary: [
        "El vacío puede llevar a la resignación o a la creación.",
        "Sin Dios, el mundo es un lienzo en blanco."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🦅 Moral noble y de esclavos</h4>
        <p>La genealogía muestra dos morales. En la moral noble, bueno es lo fuerte y creador. La moral de esclavos nace del resentimiento e invierte los valores.</p>
      </div>
      `,
      hint: "Identificá las dos morales y su origen.",
      concepts: [
        { term: "genealogía", meaning: "Investigación del origen de los valores." },
        { term: "moral noble", meaning: "Afirma la propia fuerza: bueno es lo fuerte." },
        { term: "fuerte", meaning: "Lo bueno para la moral noble." },
        { term: "moral de esclavos", meaning: "Llama bien a la debilidad y mal a la fuerza." },
        { term: "resentimiento", meaning: "Emoción de los impotentes frente a los fuertes." },
        { term: "invierte", meaning: "Lo que hace la moral de esclavos con los valores." }
      ],
      corollary: [
        "Los valores tienen una historia.",
        "La moral de esclavos nace del resentimiento."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🐑 El rebaño y la voluntad</h4>
        <p>La moral del rebaño quiere domesticar y uniformar. Frente a ella, la voluntad de poder es el impulso de la vida a superarse y crear, y en el ser humano es autocreación.</p>
      </div>
      `,
      hint: "Identificá qué busca el rebaño y qué es la voluntad de poder.",
      concepts: [
        { term: "moral del rebaño", meaning: "Moral que busca que todos sean iguales." },
        { term: "domesticar", meaning: "Volver dócil, quitar lo salvaje y creador." },
        { term: "uniformar", meaning: "Hacer que todos sean iguales." },
        { term: "voluntad de poder", meaning: "Impulso de la vida a superarse." },
        { term: "superarse", meaning: "Ir más allá de lo que uno es." },
        { term: "autocreación", meaning: "Dar forma y estilo a la propia vida." }
      ],
      corollary: [
        "El rebaño teme lo excepcional.",
        "La vida quiere siempre ser más."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🔁 El eterno retorno</h4>
        <p>El eterno retorno imagina que todo vuelve idéntico. Es una prueba existencial: vivir de modo que quieras repetir tu vida, con amor fati, amando el propio destino.</p>
      </div>
      `,
      hint: "Identificá qué es el eterno retorno y para qué sirve.",
      concepts: [
        { term: "eterno retorno", meaning: "Todo lo que ocurre volvería a ocurrir, idéntico." },
        { term: "idéntico", meaning: "Igual en todo, sin cambios." },
        { term: "prueba existencial", meaning: "Pregunta sobre cómo vivimos." },
        { term: "repetir tu vida", meaning: "Lo que habría que querer si se afirma la vida." },
        { term: "amor fati", meaning: "Amar el propio destino." }
      ],
      corollary: [
        "¿Repetirías tu vida tal cual?",
        "Afirmar la vida es decirle sí a todo lo vivido."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🐫 El camino del espíritu</h4>
        <p>El hombre es una cuerda sobre un abismo, un tránsito. El último hombre solo busca comodidad. En las tres transformaciones, el camello carga deberes, el león destruye el tú debes y el niño crea.</p>
      </div>
      `,
      hint: "Identificá las figuras de Así habló Zaratustra.",
      concepts: [
        { term: "cuerda", meaning: "Imagen del ser humano: un tránsito." },
        { term: "abismo", meaning: "Lo que hay debajo de la cuerda." },
        { term: "último hombre", meaning: "Busca solo comodidad y seguridad." },
        { term: "comodidad", meaning: "Lo único que busca el último hombre." },
        { term: "camello", meaning: "Carga con los deberes heredados." },
        { term: "león", meaning: "Destruye el «tú debes»." },
        { term: "niño", meaning: "Juega y crea valores nuevos." }
      ],
      corollary: [
        "El ser humano es un puente, no una meta.",
        "Del camello al niño: de obedecer a crear."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🌍 El superhombre</h4>
        <p>El superhombre es fiel a la tierra: rechaza el más allá, disfruta del presente y crea sus valores. No es una raza: su hermana modificó sus escritos, y puede estar en silla de ruedas.</p>
      </div>
      `,
      hint: "Identificá qué es y qué no es el superhombre.",
      concepts: [
        { term: "superhombre", meaning: "Horizonte de autocreación y afirmación de la vida." },
        { term: "fiel a la tierra", meaning: "Afirmar esta vida, no un más allá." },
        { term: "más allá", meaning: "Otro mundo que lleva a despreciar este." },
        { term: "presente", meaning: "Lo que el superhombre disfruta." },
        { term: "hermana", meaning: "Elisabeth, que modificó los escritos de Nietzsche." },
        { term: "silla de ruedas", meaning: "Muestra que el superhombre no es fuerza física." }
      ],
      corollary: [
        "El superhombre afirma esta vida.",
        "No es una raza: es un creador de valores."
      ]
    }
  ]
};
