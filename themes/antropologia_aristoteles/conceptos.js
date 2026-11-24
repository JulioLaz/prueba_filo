// themes/antropologia_aristoteles/conceptos.js
// Caza de conceptos — Antropología de Aristóteles (el hilemorfismo). Unidad II.
// v1.0 (2026-11-24): tema nuevo. 8 niveles en el orden del material, sin negritas,
//   términos literales con espacios y palabras «gemelas» del mismo párrafo emparejadas
//   (las dos son concepto o ninguna).

window.CONCEPT_HUNT_CONFIG = {
  author: "Aristóteles",
  menuUrl: "tema.html?tema=antropologia_aristoteles",
  levels: [
    {
      html: `
      <p>Aristóteles entiende al ser humano desde su teoría hilemórfica. No somos dos cosas juntas, sino una única sustancia compuesta por materia y forma. El cuerpo es la materia; el alma es la forma que lo organiza y le da vida.</p>
      `,
      hint: "Identificá la teoría de Aristóteles y los dos principios que forman al ser humano.",
      concepts: [
        { term: "Aristóteles", meaning: "Filósofo griego (384–322 a. C.), discípulo de Platón y fundador del Liceo. Pensó al ser humano como una unidad de cuerpo y alma." },
        { term: "teoría hilemórfica", meaning: "Teoría de Aristóteles según la cual todo ser natural está compuesto por materia (hylé) y forma (morphé)." },
        { term: "única sustancia", meaning: "El ser humano no son dos cosas pegadas: es una sola realidad con dos principios inseparables." },
        { term: "materia", meaning: "Aquello de lo que algo está hecho. En el ser humano, el cuerpo." },
        { term: "forma", meaning: "Lo que hace que la materia sea tal cosa y no otra. En el ser humano, el alma." },
        { term: "cuerpo", meaning: "La materia del ser humano: tiene la capacidad de vivir." },
        { term: "alma", meaning: "La forma del cuerpo: lo que lo organiza, lo anima y le da vida." }
      ],
      corollary: [
        "Para Aristóteles no somos dos cosas juntas: somos una sola sustancia.",
        "El cuerpo es la materia y el alma es la forma."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🧱 Una sola sustancia</h4>
        <p>En una estatua de bronce, el bronce es la materia, en griego hylé, y la figura es la forma, en griego morphé. De ahí el nombre hilemorfismo. Aplicado al ser humano, cuerpo y alma forman una unión sustancial, no una unión accidental de dos cosas distintas.</p>
      </div>
      `,
      hint: "Identificá las palabras griegas, el nombre de la teoría y el tipo de unión entre cuerpo y alma.",
      concepts: [
        { term: "materia", meaning: "Aquello de lo que algo está hecho: en la estatua, el bronce." },
        { term: "hylé", meaning: "Palabra griega que significa «materia»." },
        { term: "forma", meaning: "Lo que hace que la materia sea tal cosa: en la estatua, la figura del atleta." },
        { term: "morphé", meaning: "Palabra griega que significa «forma»." },
        { term: "hilemorfismo", meaning: "Nombre de la teoría de Aristóteles (hylé + morphé): todo ser natural es materia y forma." },
        { term: "unión sustancial", meaning: "Cuerpo y alma forman una única sustancia: dos principios que no se pueden separar." },
        { term: "unión accidental", meaning: "Unión de dos cosas distintas que podrían estar separadas. Así pensaba Platón la relación cuerpo-alma; Aristóteles la rechaza." }
      ],
      corollary: [
        "Hilemorfismo viene de hylé (materia) y morphé (forma).",
        "Cuerpo y alma forman una unión sustancial, no accidental."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🌰 La capacidad y su realización</h4>
        <p>La potencia es la capacidad de llegar a ser algo; el acto es esa capacidad realizada: la semilla es un árbol en potencia. El cuerpo tiene la vida en potencia, y el alma es lo que la realiza: su principio de vida. Si el ojo fuera un animal, la vista sería su alma.</p>
      </div>
      `,
      hint: "Identificá el par de conceptos del cambio y la comparación que usa Aristóteles.",
      concepts: [
        { term: "potencia", meaning: "La capacidad de llegar a ser algo: la semilla es un árbol en potencia; el cuerpo tiene la vida en potencia." },
        { term: "acto", meaning: "La capacidad ya realizada: el árbol crecido. El alma es el acto primero del cuerpo." },
        { term: "principio de vida", meaning: "El alma: lo que hace que el cuerpo viva de verdad, lo organiza y lo anima." },
        { term: "ojo", meaning: "En la comparación, el ojo es la materia, como el cuerpo." },
        { term: "vista", meaning: "En la comparación, la vista es la forma del ojo, como el alma es la forma del cuerpo. Uno no tiene sentido sin el otro." }
      ],
      corollary: [
        "El cuerpo puede vivir; el alma hace que viva de verdad.",
        "El alma es al cuerpo lo que la vista al ojo."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>⚰️ Un alma mortal</h4>
        <p>Si el alma es la forma de un cuerpo concreto, muere cuando el cuerpo muere: es mortal. Por eso Aristóteles rechaza la transmigración, la idea de que el alma pasa de un cuerpo a otro. Solo deja abierta una duda: el entendimiento agente, que capta lo universal, sería eterno y separado.</p>
      </div>
      `,
      hint: "Identificá qué pasa con el alma al morir y la única duda que deja abierta Aristóteles.",
      concepts: [
        { term: "cuerpo concreto", meaning: "Cada alma es la forma de su propio cuerpo, como una llave hecha para una sola cerradura." },
        { term: "mortal", meaning: "El alma humana deja de existir cuando muere el cuerpo, como la vista cuando se destruye el ojo." },
        { term: "transmigración", meaning: "Idea pitagórica y platónica de que el alma pasa de un cuerpo a otro. Aristóteles la rechaza." },
        { term: "entendimiento agente", meaning: "La parte más alta del intelecto, la que capta lo universal. Es el único punto que Aristóteles deja abierto." },
        { term: "eterno y separado", meaning: "Lo que sería el entendimiento agente. Pero no es el alma personal: no recuerda ni sobrevive como un «yo»." }
      ],
      corollary: [
        "Para Aristóteles el alma muere con el cuerpo y no pasa a otro.",
        "Solo el entendimiento agente queda como una duda abierta."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🪜 La escala de las almas</h4>
        <p>Todo ser vivo tiene alma. El alma vegetativa, de plantas, animales y humanos, se ocupa de la nutrición, el crecimiento y la reproducción. El alma sensitiva, de animales y humanos, agrega la percepción, el deseo y el movimiento local.</p>
      </div>
      `,
      hint: "Identificá los dos primeros escalones del alma y las funciones de cada uno.",
      concepts: [
        { term: "alma vegetativa", meaning: "Primer escalón: la tienen plantas, animales y humanos." },
        { term: "nutrición", meaning: "Función vegetativa: alimentarse." },
        { term: "crecimiento", meaning: "Función vegetativa: desarrollarse y aumentar de tamaño." },
        { term: "reproducción", meaning: "Función vegetativa: engendrar otros seres de la misma especie." },
        { term: "alma sensitiva", meaning: "Segundo escalón: la tienen animales y humanos. Incluye todo lo vegetativo." },
        { term: "percepción", meaning: "Función sensitiva: captar el mundo con los sentidos (ver, oír, oler, tocar, gustar)." },
        { term: "deseo", meaning: "Función sensitiva (también llamada apetito): buscar lo agradable y huir de lo que daña." },
        { term: "movimiento local", meaning: "Función sensitiva: desplazarse de un lugar a otro." }
      ],
      corollary: [
        "Las plantas se nutren, crecen y se reproducen.",
        "Los animales, además, perciben, desean y se mueven."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🧠 El escalón más alto</h4>
        <p>El alma racional es exclusiva del ser humano: pensamiento abstracto, lenguaje y deliberación moral. Pero no tenemos tres almas: es una sola alma que cumple las tres funciones. El conocimiento empieza en los sentidos, y el intelecto hace la abstracción: capta lo común de muchos casos.</p>
      </div>
      `,
      hint: "Identificá las funciones propias del ser humano y cómo empieza a conocer.",
      concepts: [
        { term: "alma racional", meaning: "Tercer escalón, exclusivo del ser humano (también llamada intelectiva)." },
        { term: "pensamiento abstracto", meaning: "Pensar ideas generales, no solo cosas concretas que tenemos delante." },
        { term: "lenguaje", meaning: "La capacidad de hablar y argumentar: el logos." },
        { term: "deliberación moral", meaning: "Pensar qué conviene hacer y qué es bueno o justo antes de actuar." },
        { term: "una sola alma", meaning: "El ser humano no tiene tres almas: su alma racional también cumple las funciones vegetativas y sensitivas." },
        { term: "sentidos", meaning: "Para Aristóteles, el punto de partida de todo conocimiento. Al nacer, la mente es como una tablilla de cera sin escribir." },
        { term: "intelecto", meaning: "La capacidad de pensar: trabaja con lo que le dan los sentidos." },
        { term: "abstracción", meaning: "Separar lo común de muchos casos concretos: al ver muchos perros, captar qué es un perro." }
      ],
      corollary: [
        "Nos nutrimos como las plantas, sentimos como los animales y, además, pensamos.",
        "Conocer no es recordar: empieza en los sentidos y sigue con la abstracción."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🗣️ Racional y político</h4>
        <p>El ser humano es animal racional, zoon lógon échon: el ser vivo que tiene palabra y razón. Los animales tienen voz para expresar placer y dolor; el ser humano usa la palabra para deliberar sobre lo justo y lo injusto. También es animal político, zoon politikón: solo en la polis se realiza. Fuera de ella sería una bestia o un dios.</p>
      </div>
      `,
      hint: "Identificá las dos definiciones del ser humano y la diferencia entre voz y palabra.",
      concepts: [
        { term: "animal racional", meaning: "Definición del ser humano: el ser vivo que tiene logos (palabra y razón)." },
        { term: "zoon lógon échon", meaning: "Expresión griega: «el ser vivo que tiene logos»." },
        { term: "voz", meaning: "Lo que tienen los animales: sonidos para expresar placer o dolor." },
        { term: "palabra", meaning: "Lo propio del ser humano: el lenguaje para deliberar sobre lo justo y lo injusto, lo bueno y lo malo." },
        { term: "animal político", meaning: "Definición del ser humano: es social por naturaleza." },
        { term: "zoon politikón", meaning: "Expresión griega: «animal político» o social." },
        { term: "polis", meaning: "La ciudad o comunidad: solo en ella el ser humano desarrolla su lenguaje, su moral y su fin." },
        { term: "bestia o un dios", meaning: "Lo que sería quien vive fuera de la sociedad por naturaleza: o le falta lo humano, o no lo necesita." }
      ],
      corollary: [
        "El logos nos permite hablar de lo justo y lo injusto.",
        "Somos sociales por naturaleza: nos realizamos en la polis."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🎯 El fin del ser humano</h4>
        <p>Todo en la naturaleza tiende a un fin: es la teleología. El fin del ser humano es la felicidad o eudaimonía: vivir conforme a la razón. Para lograrlo hacen falta virtudes éticas, del carácter, que se adquieren por hábito, y virtudes dianoéticas, intelectuales, que se adquieren por enseñanza.</p>
      </div>
      `,
      hint: "Identificá el fin del ser humano y las dos familias de virtudes con su origen.",
      concepts: [
        { term: "teleología", meaning: "Mirada según la cual todo en la naturaleza tiende a un fin (telos): la semilla tiende a ser árbol." },
        { term: "felicidad", meaning: "El fin último del ser humano: realizar bien su actividad propia, vivir conforme a la razón." },
        { term: "eudaimonía", meaning: "Palabra griega para la felicidad entendida como vida plena, no como placer pasajero." },
        { term: "virtudes éticas", meaning: "Virtudes del carácter: el término medio entre dos extremos, como la valentía entre la cobardía y la temeridad." },
        { term: "hábito", meaning: "Repetir actos: así se adquieren las virtudes éticas." },
        { term: "virtudes dianoéticas", meaning: "Virtudes de la inteligencia, como la prudencia (phrónesis) y la sabiduría (sophía)." },
        { term: "enseñanza", meaning: "Junto con el estudio, es el modo de adquirir las virtudes dianoéticas." }
      ],
      corollary: [
        "El fin del ser humano es la felicidad: vivir conforme a la razón.",
        "Las virtudes éticas se forman con hábito; las dianoéticas, con enseñanza."
      ]
    }
  ]
};
