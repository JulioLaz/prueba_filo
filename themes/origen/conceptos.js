// themes/origen/conceptos.js
// Caza de conceptos — Origen de la Filosofía: Del Mito al Logos. Unidad I.
// v2.0 (2026-11-24): rehecha con 8 niveles en el orden del material v2.0 (antes 5 niveles
//   con negritas en el texto); términos literales y palabras «gemelas» emparejadas.

window.CONCEPT_HUNT_CONFIG = {
  author: "Los primeros filósofos",
  menuUrl: "tema.html?tema=origen",
  levels: [
    {
      html: `
      <p>La filosofía nace del asombro, una curiosidad radical ante lo que nos rodea. La palabra viene del griego philo y sophía: amor por la sabiduría. Por eso quien filosofa no posee la verdad, sino que la busca con pensamiento crítico.</p>
      `,
      hint: "Identificá de dónde nace la filosofía y qué significa su nombre.",
      concepts: [
        { term: "filosofía", meaning: "Disciplina que se pregunta por los principios primeros de la realidad. Su nombre significa «amor por la sabiduría»." },
        { term: "asombro", meaning: "La actitud con la que empieza la filosofía: preguntarse «¿por qué las cosas son así?»." },
        { term: "curiosidad radical", meaning: "Curiosidad que llega a la raíz: no se conforma con lo que «siempre se dijo»." },
        { term: "philo", meaning: "Palabra griega que significa «amor» o «tendencia a»." },
        { term: "sophía", meaning: "Palabra griega que significa «sabiduría»." },
        { term: "amor por la sabiduría", meaning: "Etimología de la palabra filosofía." },
        { term: "pensamiento crítico", meaning: "Pensar dando razones y cuestionando las certezas, en lugar de aceptarlas sin más." }
      ],
      corollary: [
        "La filosofía empieza con el asombro.",
        "El filósofo no tiene la verdad: la busca."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🔢 La palabra «filósofo»</h4>
        <p>Cuentan que un gobernante llamó sabio a Pitágoras. Él respondió que solo los dioses son sabios; él era un filósofo, alguien que ama la sabiduría. Comparó la vida con los juegos de Olimpia: unos van por gloria, otros por ganancias, y los filósofos van a mirar y comprender.</p>
      </div>
      `,
      hint: "Identificá quién usó la palabra «filósofo» y qué buscan los distintos tipos de personas.",
      concepts: [
        { term: "Pitágoras", meaning: "Pensador y matemático griego de Samos, a quien se atribuye la palabra «filósofo»." },
        { term: "sabio", meaning: "En griego sophós: quien posee la sabiduría. Para Pitágoras, solo los dioses lo son." },
        { term: "dioses", meaning: "Los únicos verdaderamente sabios, según Pitágoras." },
        { term: "filósofo", meaning: "Quien ama la sabiduría y aspira a ella, sin creer que ya la tiene." },
        { term: "gloria", meaning: "Lo que buscan los atletas en los juegos: fama y reconocimiento." },
        { term: "ganancias", meaning: "Lo que buscan los comerciantes en los juegos: dinero." },
        { term: "comprender", meaning: "Lo que buscan los filósofos: mirar y entender." }
      ],
      corollary: [
        "Solo los dioses son sabios; el ser humano puede amar la sabiduría.",
        "El filósofo busca comprender, no gloria ni ganancias."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🌍 La cuna de la razón</h4>
        <p>La filosofía nació en el siglo VI a. C. en Mileto, una ciudad griega de Asia Menor. Su comercio con Babilonia y Egipto trajo prosperidad y ocio, tiempo libre para pensar. Era una ciudad cosmopolita, y la religión griega no tenía una casta sacerdotal que impusiera dogmas. Además, los ciudadanos practicaban el debate público.</p>
      </div>
      `,
      hint: "Identificá dónde nació la filosofía y qué condiciones la favorecieron.",
      concepts: [
        { term: "Mileto", meaning: "Ciudad griega de Jonia, en Asia Menor: la cuna de la filosofía." },
        { term: "prosperidad", meaning: "Riqueza que llegó gracias al comercio." },
        { term: "ocio", meaning: "Tiempo libre que la prosperidad dio a una parte de la población para pensar." },
        { term: "cosmopolita", meaning: "Ciudad donde conviven muchas culturas y creencias: eso invitaba a comparar y dudar." },
        { term: "casta sacerdotal", meaning: "Grupo de sacerdotes con poder. En Grecia no había una que impusiera ideas." },
        { term: "dogmas", meaning: "Verdades que se imponen sin discusión. Su ausencia permitió pensar con libertad." },
        { term: "debate público", meaning: "La costumbre de discutir en la ciudad dando razones." }
      ],
      corollary: [
        "Comercio, ocio y mezcla de culturas favorecieron el pensamiento.",
        "Sin dogmas impuestos, se podía discutir."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>📜 Del mito al logos</h4>
        <p>Antes, los mitos explicaban el mundo con historias de dioses, como las de Homero y Hesíodo. Los primeros filósofos buscaron el logos: causas naturales y argumentos que se pueden discutir. No fue un salto repentino, sino una racionalización del mito.</p>
      </div>
      `,
      hint: "Identificá las dos formas de explicar el mundo y cómo se pasó de una a otra.",
      concepts: [
        { term: "mitos", meaning: "Relatos imaginativos con dioses y seres sobrenaturales que se creían sin discutir." },
        { term: "Homero", meaning: "Poeta griego (Ilíada, Odisea): sus poemas son fuente de mitos." },
        { term: "Hesíodo", meaning: "Poeta griego que contó en sus poemas el origen de los dioses y del mundo." },
        { term: "logos", meaning: "Palabra griega: palabra, razón y discurso. El pensamiento racional y crítico." },
        { term: "causas naturales", meaning: "Explicaciones que buscan el porqué en la naturaleza, no en los dioses." },
        { term: "argumentos", meaning: "Razones que sostienen una explicación y que otros pueden criticar." },
        { term: "racionalización del mito", meaning: "El paso gradual del mito al logos: los primeros filósofos todavía usaban imágenes, pero buscaban razones." }
      ],
      corollary: [
        "El mito narra; el logos explica con razones.",
        "El paso del mito al logos fue gradual."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>❓ El primer problema</h4>
        <p>Los presocráticos se preguntaron por la physis y buscaron su arché. El arché tiene un triple sentido: origen de todo, sustrato del que todo está hecho y causa del cambio. Así nació la cosmología filosófica.</p>
      </div>
      `,
      hint: "Identificá qué buscaban los primeros filósofos y el triple sentido de esa palabra.",
      concepts: [
        { term: "presocráticos", meaning: "Los primeros filósofos, llamados así porque vivieron antes de Sócrates." },
        { term: "physis", meaning: "Palabra griega que significa «naturaleza»." },
        { term: "arché", meaning: "El principio de todas las cosas: lo que buscaban los presocráticos." },
        { term: "origen", meaning: "Primer sentido del arché: aquello de lo que todo surge." },
        { term: "sustrato", meaning: "Segundo sentido del arché: aquello de lo que todo está hecho." },
        { term: "causa", meaning: "Tercer sentido del arché: aquello que produce el cambio y el movimiento." },
        { term: "cosmología", meaning: "Estudio racional del origen y el orden del universo (cosmos)." }
      ],
      corollary: [
        "Los presocráticos buscaron el arché de la naturaleza.",
        "Arché: origen, sustrato y causa."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>💧 La Escuela de Mileto</h4>
        <p>Tales de Mileto, el primer filósofo, eligió el agua. Anaximandro propuso el ápeiron, lo indeterminado, porque los elementos se anulan entre sí. Anaxímenes eligió el aire, que se transforma por rarefacción y condensación.</p>
      </div>
      `,
      hint: "Identificá a los tres filósofos de Mileto y el arché de cada uno.",
      concepts: [
        { term: "Tales de Mileto", meaning: "Primer filósofo de la historia: dio la primera respuesta racional sobre el arché." },
        { term: "agua", meaning: "Arché de Tales: es esencial para la vida y cambia de estado." },
        { term: "Anaximandro", meaning: "Discípulo de Tales: propuso un arché abstracto." },
        { term: "ápeiron", meaning: "Arché de Anaximandro: lo indeterminado e ilimitado, eterno, que contiene todas las posibilidades." },
        { term: "Anaxímenes", meaning: "Discípulo de Anaximandro: volvió a un arché concreto." },
        { term: "aire", meaning: "Arché de Anaxímenes: está en todas partes y es necesario para respirar." },
        { term: "rarefacción", meaning: "El aire se hace menos denso y se convierte en fuego." },
        { term: "condensación", meaning: "El aire se hace más denso y se convierte en viento, nubes, agua, tierra y piedras." }
      ],
      corollary: [
        "Agua, ápeiron y aire: tres respuestas de Mileto.",
        "Tales y Anaxímenes eligieron algo concreto; Anaximandro, algo abstracto."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🔥 Número y fuego</h4>
        <p>Pitágoras y su escuela dijeron que el arché es el número: el universo tiene una estructura matemática. Heráclito, el Oscuro, eligió el fuego y destacó el devenir: nadie se baña dos veces en el mismo río.</p>
      </div>
      `,
      hint: "Identificá los arché de Pitágoras y Heráclito y la idea central de Heráclito.",
      concepts: [
        { term: "Pitágoras", meaning: "Fundador de la escuela pitagórica: para él el arché es el número." },
        { term: "número", meaning: "Arché de los pitagóricos: los números son algo real dentro de las cosas." },
        { term: "estructura matemática", meaning: "El orden del universo según Pitágoras: todo se puede expresar con números." },
        { term: "Heráclito", meaning: "Filósofo llamado «el Oscuro» por sus frases difíciles: todo cambia." },
        { term: "fuego", meaning: "Arché de Heráclito: siempre en movimiento, siempre cambiando." },
        { term: "devenir", meaning: "El cambio constante de todas las cosas." }
      ],
      corollary: [
        "Para Pitágoras todo es número.",
        "Para Heráclito todo cambia: nadie se baña dos veces en el mismo río."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>⭕ El ser y la metafísica</h4>
        <p>Parménides confió solo en la razón: el ser es y el no ser no es. Para él, el cambio y el movimiento son ilusiones de los sentidos. Con esta reflexión inauguró la metafísica occidental.</p>
      </div>
      `,
      hint: "Identificá la tesis de Parménides y qué piensa de los sentidos.",
      concepts: [
        { term: "Parménides", meaning: "Filósofo de Elea, opuesto a Heráclito: el ser no cambia." },
        { term: "razón", meaning: "Para Parménides, la única fuente confiable de conocimiento." },
        { term: "el ser es y el no ser no es", meaning: "Tesis central de Parménides: lo que es no puede dejar de ser." },
        { term: "ilusiones", meaning: "Lo que son el cambio y el movimiento para Parménides: apariencias engañosas." },
        { term: "sentidos", meaning: "Para Parménides, engañan: nos muestran cambios que no son reales." },
        { term: "metafísica", meaning: "Parte de la filosofía que se pregunta por el ser. Parménides la inauguró." }
      ],
      corollary: [
        "Para Parménides el ser no cambia: el cambio es ilusión.",
        "Parménides inauguró la metafísica."
      ]
    }
  ]
};
