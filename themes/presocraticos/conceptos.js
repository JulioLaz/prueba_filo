// themes/presocraticos/conceptos.js
// Caza de conceptos — Los Presocráticos: El Arché y la Naturaleza. Unidad I.
// v1.0 (2026-11-24): tema nuevo en la caza. 8 niveles en el orden del material v2.0,
//   sin negritas, términos literales y palabras «gemelas» emparejadas.

window.CONCEPT_HUNT_CONFIG = {
  author: "Los presocráticos",
  menuUrl: "tema.html?tema=presocraticos",
  levels: [
    {
      html: `
      <p>Los presocráticos, anteriores a Sócrates, estudiaron la naturaleza dejando de lado los mitos. Buscaron el arché de todas las cosas. Los primeros, en Mileto, defendieron el monismo: una única sustancia fundamental.</p>
      `,
      hint: "Identificá quiénes fueron, qué buscaban y la primera postura que defendieron.",
      concepts: [
        { term: "presocráticos", meaning: "Los primeros filósofos griegos, desde Tales hasta la época de Sócrates." },
        { term: "Sócrates", meaning: "Filósofo de Atenas; los presocráticos se llaman así porque vivieron antes que él." },
        { term: "mitos", meaning: "Relatos sobre dioses que los presocráticos dejaron de lado para explicar la naturaleza." },
        { term: "arché", meaning: "Principio u origen de todas las cosas: no necesita de otra cosa para existir." },
        { term: "Mileto", meaning: "Ciudad de Jonia donde vivieron Tales, Anaximandro y Anaxímenes." },
        { term: "monismo", meaning: "Postura que afirma una única sustancia fundamental (del griego monos, «uno»)." }
      ],
      corollary: [
        "Los presocráticos buscaron el arché con la razón.",
        "Los primeros filósofos fueron monistas: un solo principio."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>💧 Tres respuestas de Mileto</h4>
        <p>Tales eligió el agua, porque todo lo vivo es húmedo. Anaximandro propuso el ápeiron, lo indefinido y eterno. Anaxímenes eligió el aire, que por rarefacción se vuelve fuego y por condensación se vuelve piedras.</p>
      </div>
      `,
      hint: "Identificá a cada filósofo de Mileto con su arché y los procesos del aire.",
      concepts: [
        { term: "Tales", meaning: "Tales de Mileto, el primer filósofo: dio una explicación natural, sin dioses." },
        { term: "agua", meaning: "Arché de Tales: el alimento y las semillas son húmedos, y el agua cambia de estado." },
        { term: "Anaximandro", meaning: "Discípulo de Tales: propuso un arché abstracto." },
        { term: "ápeiron", meaning: "Lo indefinido e ilimitado: no se opone a ningún elemento y contiene todas las posibilidades." },
        { term: "Anaxímenes", meaning: "Discípulo de Anaximandro: volvió a un arché concreto." },
        { term: "aire", meaning: "Arché de Anaxímenes: invisible, presente en todas partes y necesario para respirar." },
        { term: "rarefacción", meaning: "El aire se hace menos denso y se vuelve fuego." },
        { term: "condensación", meaning: "El aire se hace más denso: viento, nubes, agua, tierra y piedras." }
      ],
      corollary: [
        "Agua, ápeiron y aire: los arché de Mileto.",
        "El aire cambia por rarefacción y condensación."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🔢 Números y dioses</h4>
        <p>Para los pitagóricos el arché es el número y el universo tiene una estructura matemática. Jenófanes criticó a los dioses de Homero, pensados con figura y cuerpo humano, y habló de un solo dios.</p>
      </div>
      `,
      hint: "Identificá el arché de los pitagóricos y la crítica de Jenófanes.",
      concepts: [
        { term: "pitagóricos", meaning: "Seguidores de Pitágoras de Samos: unían matemática, música y religión." },
        { term: "número", meaning: "Arché de los pitagóricos: la realidad está compuesta de números." },
        { term: "estructura matemática", meaning: "Orden del universo que se expresa en proporciones numéricas, como en la música." },
        { term: "Jenófanes", meaning: "Filósofo de Colofón que criticó la forma humana de los dioses de los poetas." },
        { term: "Homero", meaning: "Poeta de la Ilíada y la Odisea: sus dioses roban, engañan y pelean como humanos." },
        { term: "figura y cuerpo humano", meaning: "Lo que Jenófanes critica: imaginar a los dioses como personas." },
        { term: "un solo dios", meaning: "Para Jenófanes, la divinidad es una, sin figura ni cuerpo humano." }
      ],
      corollary: [
        "Para los pitagóricos todo es número.",
        "Jenófanes sometió a los dioses de los poetas a la razón."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🔥 Todo fluye</h4>
        <p>Heráclito, el Oscuro, propuso el fuego. Su máxima es panta rhei: todo fluye; nadie se baña dos veces en el mismo río. Los opuestos luchan entre sí, y el logos ordena esa lucha.</p>
      </div>
      `,
      hint: "Identificá el arché de Heráclito, su máxima y qué ordena el cambio.",
      concepts: [
        { term: "Heráclito", meaning: "Filósofo de Éfeso llamado «el Oscuro» por sus frases enigmáticas." },
        { term: "fuego", meaning: "Arché de Heráclito: metáfora del cambio, porque solo se mantiene transformando." },
        { term: "panta rhei", meaning: "Expresión griega que significa «todo fluye»." },
        { term: "todo fluye", meaning: "La idea central de Heráclito: el mundo está en devenir constante." },
        { term: "opuestos", meaning: "Luz y oscuridad, frío y calor, vida y muerte: su lucha produce el cambio." },
        { term: "logos", meaning: "La ley universal que ordena el cambio y equilibra los opuestos." }
      ],
      corollary: [
        "Para Heráclito todo cambia.",
        "El cambio no es caos: lo ordena el logos."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>⭕ El ser no cambia</h4>
        <p>Parménides afirmó que el ser es y el no ser no es. El ser es inmutable, y el cambio es una ilusión de los sentidos. Su discípulo Zenón lo defendió con paradojas, como la de Aquiles y la tortuga.</p>
      </div>
      `,
      hint: "Identificá la tesis de Parménides, qué piensa del cambio y cómo lo defendió Zenón.",
      concepts: [
        { term: "Parménides", meaning: "Filósofo de Elea, opuesto a Heráclito; inauguró la metafísica." },
        { term: "el ser es y el no ser no es", meaning: "Tesis central de Parménides." },
        { term: "inmutable", meaning: "Que no cambia nunca: así es el ser para Parménides." },
        { term: "ilusión", meaning: "Lo que es el cambio para Parménides: una apariencia engañosa." },
        { term: "sentidos", meaning: "Para Parménides, nos engañan mostrando cambios y multiplicidad." },
        { term: "Zenón", meaning: "Discípulo de Parménides, de Elea: defendió a su maestro con razonamientos." },
        { term: "paradojas", meaning: "Razonamientos que muestran que el movimiento lleva a absurdos." },
        { term: "Aquiles y la tortuga", meaning: "Paradoja de Zenón: si la tortuga sale con ventaja, Aquiles nunca la alcanza." }
      ],
      corollary: [
        "Para Parménides el cambio es ilusión.",
        "Zenón defendió a Parménides con paradojas."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🌍 Varios principios</h4>
        <p>El pluralismo propuso varios principios. Empédocles habló de cuatro raíces: tierra, agua, aire y fuego. Dos fuerzas las mueven: el Amor, que une, y la Discordia, que separa.</p>
      </div>
      `,
      hint: "Identificá la nueva postura, las raíces de Empédocles y sus dos fuerzas.",
      concepts: [
        { term: "pluralismo", meaning: "Postura que propone varios principios en lugar de uno." },
        { term: "Empédocles", meaning: "Filósofo de Agrigento: explicó el cambio como mezcla de raíces eternas." },
        { term: "cuatro raíces", meaning: "Los cuatro elementos que no nacen ni se destruyen, pero se mezclan." },
        { term: "tierra, agua, aire y fuego", meaning: "Las cuatro raíces de Empédocles." },
        { term: "Amor", meaning: "Fuerza que une las raíces." },
        { term: "Discordia", meaning: "Fuerza que separa las raíces." }
      ],
      corollary: [
        "Para Empédocles hay cuatro raíces y dos fuerzas.",
        "Lo que cambia es la mezcla, no las raíces."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🧠 Semillas y mente</h4>
        <p>Anaxágoras dijo que el universo está hecho de infinitas semillas y que todo está en todo. El orden viene del nous, una mente pura que puso en marcha un torbellino.</p>
      </div>
      `,
      hint: "Identificá de qué está hecho el universo para Anaxágoras y qué lo ordena.",
      concepts: [
        { term: "Anaxágoras", meaning: "Pluralista que propuso infinitas semillas y una mente ordenadora." },
        { term: "semillas", meaning: "Partículas pequeñísimas de todas las cosas." },
        { term: "todo está en todo", meaning: "En cada cosa hay porciones de todas las demás; vemos lo que predomina." },
        { term: "nous", meaning: "Palabra griega que significa «mente»: el principio que ordena el cosmos." },
        { term: "mente", meaning: "El nous: pura, sin mezcla, fuente del orden." },
        { term: "torbellino", meaning: "Movimiento giratorio que el nous puso en marcha para separar y ordenar las semillas." }
      ],
      corollary: [
        "Para Anaxágoras todo está en todo.",
        "El nous es el primer principio inteligente del cosmos."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>⚛️ Átomos y vacío</h4>
        <p>Leucipo y Demócrito propusieron el atomismo: todo está hecho de átomos, partículas indivisibles que se mueven en el vacío. Su visión es materialista y determinista: nada ocurre por azar.</p>
      </div>
      `,
      hint: "Identificá a los atomistas, su teoría y cómo es su visión del mundo.",
      concepts: [
        { term: "Leucipo", meaning: "Fundador del atomismo, maestro de Demócrito." },
        { term: "Demócrito", meaning: "Atomista de Abdera, el más conocido." },
        { term: "atomismo", meaning: "Teoría según la cual todo está formado por átomos y vacío." },
        { term: "átomos", meaning: "Partículas sólidas, eternas e indivisibles, de muchas formas." },
        { term: "indivisibles", meaning: "Lo que significa «átomo»: que no se puede dividir." },
        { term: "vacío", meaning: "Espacio sin nada, necesario para que los átomos se muevan." },
        { term: "materialista", meaning: "Todo es materia: hasta el alma está hecha de átomos." },
        { term: "determinista", meaning: "Todo ocurre por necesidad: «nada ocurre por azar, sino por razón y necesidad»." }
      ],
      corollary: [
        "Para los atomistas todo es átomos y vacío.",
        "Nada ocurre por azar: todo tiene una causa."
      ]
    }
  ]
};
