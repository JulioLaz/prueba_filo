// themes/aristoteles/conceptos.js
// Caza de conceptos — Aristóteles: La Lógica y la Sustancia. Unidad I.
// v1.0 (2026-11-24): tema nuevo en la caza. 8 niveles en el orden del material v2.0,
//   sin negritas, términos literales y palabras «gemelas» emparejadas.

window.CONCEPT_HUNT_CONFIG = {
  author: "Aristóteles",
  menuUrl: "tema.html?tema=aristoteles",
  levels: [
    {
      html: `
      <p>Aristóteles nació en Estagira, estudió veinte años en la Academia de Platón, fue maestro de Alejandro Magno y fundó el Liceo, donde enseñaba caminando con los peripatéticos.</p>
      `,
      hint: "Identificá de dónde era Aristóteles, dónde estudió y qué escuela fundó.",
      concepts: [
        { term: "Aristóteles", meaning: "Filósofo griego (384–322 a. C.), discípulo de Platón." },
        { term: "Estagira", meaning: "Ciudad natal de Aristóteles: por eso lo llaman «el Estagirita»." },
        { term: "Academia", meaning: "Escuela de Platón, donde Aristóteles estudió veinte años." },
        { term: "Alejandro Magno", meaning: "Rey de Macedonia que fue alumno de Aristóteles." },
        { term: "Liceo", meaning: "Escuela que fundó Aristóteles en el 335 a. C." },
        { term: "peripatéticos", meaning: "Los alumnos del Liceo: «los que pasean»." }
      ],
      corollary: [
        "Aristóteles fue discípulo de Platón y maestro de Alejandro.",
        "En el Liceo se filosofaba caminando."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🔄 De los sentidos a la ciencia</h4>
        <p>Aristóteles respetó a Platón, pero rechazó las Ideas separadas. El saber empieza en los sentidos y sube por grados: sensación, experiencia, técnica y, por último, ciencia, que conoce el porqué.</p>
      </div>
      `,
      hint: "Identificá qué rechazó Aristóteles y los grados del saber.",
      concepts: [
        { term: "Platón", meaning: "Maestro de Aristóteles, al que criticó." },
        { term: "Ideas separadas", meaning: "Lo que Aristóteles rechazó: la forma está en las cosas." },
        { term: "sentidos", meaning: "Por donde empieza todo conocimiento." },
        { term: "sensación", meaning: "Captar algo con los sentidos: el primer grado." },
        { term: "experiencia", meaning: "Se forma al recordar muchas sensaciones." },
        { term: "técnica", meaning: "Téchne: saber usar la experiencia para hacer algo." },
        { term: "ciencia", meaning: "El grado más alto: conocer el porqué, las causas." }
      ],
      corollary: [
        "Todo conocimiento empieza en los sentidos.",
        "La ciencia conoce el porqué."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>📚 Los saberes</h4>
        <p>Las ciencias teóricas buscan saber por saber, como la metafísica. Las prácticas guían la acción, como la ética, y las productivas enseñan a hacer, como la retórica. Además, Aristóteles observó y clasificó animales: es el padre de la biología.</p>
      </div>
      `,
      hint: "Identificá los tres tipos de ciencias y un ejemplo de cada una.",
      concepts: [
        { term: "ciencias teóricas", meaning: "Buscan saber por saber; tratan de lo necesario." },
        { term: "metafísica", meaning: "La filosofía primera: estudia el ser." },
        { term: "prácticas", meaning: "Ciencias que guían la acción." },
        { term: "ética", meaning: "Ciencia práctica sobre cómo actuar bien." },
        { term: "productivas", meaning: "Ciencias que enseñan a hacer o fabricar." },
        { term: "retórica", meaning: "Ciencia productiva: el arte de persuadir." },
        { term: "biología", meaning: "Ciencia de los seres vivos, que Aristóteles fundó observando." }
      ],
      corollary: [
        "Aristóteles ordenó todos los saberes.",
        "Observar y clasificar es el comienzo de la ciencia."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🔧 La lógica</h4>
        <p>La lógica es el Órganon, el instrumento de todas las ciencias. Estudia tres operaciones: el concepto, que capta qué es algo; el juicio, que afirma o niega; y el razonamiento, que saca conclusiones.</p>
      </div>
      `,
      hint: "Identificá qué es la lógica y las tres operaciones del pensamiento.",
      concepts: [
        { term: "lógica", meaning: "Ciencia de la forma de los razonamientos." },
        { term: "Órganon", meaning: "Nombre de las obras de lógica de Aristóteles: «instrumento»." },
        { term: "instrumento", meaning: "La lógica es una herramienta para todas las ciencias." },
        { term: "concepto", meaning: "Capta qué es algo: «hombre»." },
        { term: "juicio", meaning: "Afirma o niega: «el hombre es mortal»." },
        { term: "razonamiento", meaning: "Enlaza juicios para sacar uno nuevo." }
      ],
      corollary: [
        "La lógica es la herramienta para pensar bien.",
        "Pensar es captar, afirmar y concluir."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>📐 El silogismo</h4>
        <p>Un silogismo tiene dos premisas y una conclusión, y tres términos: sujeto, predicado y término medio, que no aparece en la conclusión. Un razonamiento puede ser válido por su forma aunque sus premisas sean falsas.</p>
      </div>
      `,
      hint: "Identificá las partes del silogismo y la diferencia entre validez y verdad.",
      concepts: [
        { term: "silogismo", meaning: "Razonamiento de dos premisas y una conclusión necesaria." },
        { term: "premisas", meaning: "Los dos juicios de los que se parte." },
        { term: "conclusión", meaning: "El juicio que se sigue de las premisas." },
        { term: "sujeto", meaning: "El término del que se dice algo en la conclusión." },
        { term: "predicado", meaning: "Lo que se dice del sujeto en la conclusión." },
        { term: "término medio", meaning: "Une los otros dos términos; no está en la conclusión." },
        { term: "válido", meaning: "Con la forma correcta, aunque las premisas sean falsas." }
      ],
      corollary: [
        "El término medio es el puente del silogismo.",
        "Válido no es lo mismo que verdadero."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🧱 Principios y categorías</h4>
        <p>La ciencia demuestra hasta llegar a los axiomas, como el principio de no contradicción. La metafísica estudia el ser, que se dice de diez categorías: la sustancia y nueve accidentes.</p>
      </div>
      `,
      hint: "Identificá de dónde parte la ciencia y cuáles son las categorías del ser.",
      concepts: [
        { term: "axiomas", meaning: "Primeros principios evidentes que no necesitan demostración." },
        { term: "principio de no contradicción", meaning: "Algo no puede ser y no ser a la vez y en el mismo sentido." },
        { term: "metafísica", meaning: "Filosofía primera: estudia el ser en cuanto ser." },
        { term: "categorías", meaning: "Las diez maneras en que se dice el ser." },
        { term: "sustancia", meaning: "La categoría principal: lo que existe por sí mismo." },
        { term: "accidentes", meaning: "Las otras nueve categorías: existen en una sustancia." }
      ],
      corollary: [
        "No todo se demuestra: hay primeros principios.",
        "La sustancia es la categoría más importante."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🌰 Materia, forma y cambio</h4>
        <p>Toda sustancia es materia y forma, como el bronce y la figura de una estatua. El cambio es el paso de la potencia al acto, como la semilla que llega a ser árbol.</p>
      </div>
      `,
      hint: "Identificá los principios de la sustancia y cómo se explica el cambio.",
      concepts: [
        { term: "materia", meaning: "Aquello de lo que algo está hecho." },
        { term: "forma", meaning: "Lo que hace que algo sea lo que es." },
        { term: "estatua", meaning: "Ejemplo de Aristóteles: bronce (materia) y figura (forma)." },
        { term: "cambio", meaning: "El paso de la potencia al acto." },
        { term: "potencia", meaning: "Lo que algo puede llegar a ser." },
        { term: "acto", meaning: "Lo que algo ya es." },
        { term: "semilla", meaning: "Es árbol en potencia." }
      ],
      corollary: [
        "La forma está dentro de las cosas, no en otro mundo.",
        "Cambiar es realizar lo que se podía ser."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🎯 Causas y cosmos</h4>
        <p>La ciencia conoce por las cuatro causas: material, formal, eficiente y final. En el cosmos, el mundo sublunar cambia, el supralunar es perfecto, y todo lo mueve el primer motor inmóvil.</p>
      </div>
      `,
      hint: "Identificá las cuatro causas y las partes del cosmos.",
      concepts: [
        { term: "cuatro causas", meaning: "Lo que explica por qué algo es como es." },
        { term: "material", meaning: "Causa: de qué está hecho." },
        { term: "formal", meaning: "Causa: qué es, su forma." },
        { term: "eficiente", meaning: "Causa: quién o qué lo produjo." },
        { term: "final", meaning: "Causa: para qué existe." },
        { term: "sublunar", meaning: "Zona debajo de la Luna, donde todo nace y muere." },
        { term: "supralunar", meaning: "Zona perfecta, hecha de éter." },
        { term: "primer motor inmóvil", meaning: "Mueve todo sin ser movido, atrayendo como un fin." }
      ],
      corollary: [
        "Saber es conocer las causas.",
        "Todo lo que se mueve depende del primer motor."
      ]
    }
  ]
};
