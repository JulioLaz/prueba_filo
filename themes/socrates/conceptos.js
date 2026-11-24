// themes/socrates/conceptos.js
// Caza de conceptos — Sócrates: El Giro Antropológico y la Mayéutica. Unidad I.
// v1.0 (2026-11-24): tema nuevo en la caza. 8 niveles en el orden del material v2.0,
//   sin negritas, términos literales y palabras «gemelas» emparejadas.

window.CONCEPT_HUNT_CONFIG = {
  author: "Sócrates",
  menuUrl: "tema.html?tema=socrates",
  levels: [
    {
      html: `
      <p>Sócrates produjo el giro antropológico: la filosofía dejó de mirar la physis para mirar al ánthropos, el ser humano. No escribió nada; lo conocemos por su discípulo Platón, que lo hizo protagonista de sus diálogos.</p>
      `,
      hint: "Identificá qué cambio produjo Sócrates y cómo lo conocemos.",
      concepts: [
        { term: "Sócrates", meaning: "Filósofo de Atenas (470–399 a. C.), maestro de Platón." },
        { term: "giro antropológico", meaning: "Cambio de la pregunta filosófica: de la naturaleza al ser humano." },
        { term: "physis", meaning: "Palabra griega para «naturaleza»: lo que estudiaban los presocráticos." },
        { term: "ánthropos", meaning: "Palabra griega para «ser humano»: el centro de la filosofía de Sócrates." },
        { term: "Platón", meaning: "Discípulo de Sócrates: lo conocemos sobre todo por sus escritos." },
        { term: "diálogos", meaning: "Obras de Platón escritas como conversaciones, con Sócrates como protagonista." }
      ],
      corollary: [
        "Con Sócrates, la filosofía pasa de la naturaleza al ser humano.",
        "Sócrates no escribió: lo conocemos por Platón."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🎭 Los sofistas</h4>
        <p>Los sofistas cobraban por enseñar retórica y defendían el relativismo. Protágoras decía que el hombre es la medida de todas las cosas. Sócrates, en cambio, buscaba verdades universales y nunca cobró.</p>
      </div>
      `,
      hint: "Identificá qué enseñaban los sofistas, qué defendían y en qué se diferenciaba Sócrates.",
      concepts: [
        { term: "sofistas", meaning: "Maestros viajeros que cobraban por enseñar a hablar bien y convencer." },
        { term: "retórica", meaning: "El arte de hablar bien y persuadir." },
        { term: "relativismo", meaning: "La idea de que no hay verdades absolutas: cada uno tiene su verdad." },
        { term: "Protágoras", meaning: "Sofista famoso por su frase sobre el hombre como medida." },
        { term: "el hombre es la medida de todas las cosas", meaning: "Frase de Protágoras: la verdad depende de cada persona." },
        { term: "Sócrates", meaning: "Se oponía a los sofistas: buscaba la verdad y nunca cobró." },
        { term: "verdades universales", meaning: "Verdades que valen para todos, en todo lugar: lo que buscaba Sócrates." }
      ],
      corollary: [
        "Los sofistas querían convencer; Sócrates quería la verdad.",
        "Frente al relativismo, Sócrates buscó verdades universales."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🔍 Conocerse a sí mismo</h4>
        <p>En Delfos estaba escrito: conócete a ti mismo. Para Sócrates la filosofía es autoconocimiento, porque una vida no examinada no merece ser vivida. Su misión era que cada uno cuidara su alma, es decir, su razón.</p>
      </div>
      `,
      hint: "Identificá el lema que guió a Sócrates y qué significa cuidar el alma.",
      concepts: [
        { term: "Delfos", meaning: "Lugar del templo de Apolo y de su famoso oráculo." },
        { term: "conócete a ti mismo", meaning: "Inscripción del templo de Delfos (gnóthi seautón): el lema de Sócrates." },
        { term: "autoconocimiento", meaning: "Conocerse a uno mismo: para Sócrates, el centro de la filosofía." },
        { term: "vida no examinada", meaning: "Una vida sin reflexión: según Sócrates, no merece ser vivida." },
        { term: "alma", meaning: "Para Sócrates, lo más valioso de cada persona, que hay que cuidar más que el cuerpo." },
        { term: "razón", meaning: "Lo que es el alma para Sócrates: lo que piensa y decide." }
      ],
      corollary: [
        "Filosofar es conocerse a sí mismo.",
        "Hay que cuidar el alma más que el cuerpo y las riquezas."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>😏 Saber que no se sabe</h4>
        <p>Sócrates comparaba su tarea con la de un tábano. Con la ironía fingía no saber y hacía caer al otro en contradicciones. El oráculo lo llamó el más sabio porque sabía que no sabía: solo sé que no sé nada.</p>
      </div>
      `,
      hint: "Identificá la primera fase del método y la frase que resume la actitud de Sócrates.",
      concepts: [
        { term: "tábano", meaning: "Insecto que pica al caballo para que no se duerma: así despertaba Sócrates a los atenienses." },
        { term: "ironía", meaning: "Primera fase del método: fingir ignorancia para que el otro descubra la suya." },
        { term: "contradicciones", meaning: "Lo que aparecía en las respuestas de quien creía saber." },
        { term: "oráculo", meaning: "El oráculo de Delfos dijo que nadie era más sabio que Sócrates." },
        { term: "más sabio", meaning: "Lo que era Sócrates según el oráculo, porque reconocía su ignorancia." },
        { term: "solo sé que no sé nada", meaning: "Frase que resume la humildad socrática: el comienzo del conocimiento." }
      ],
      corollary: [
        "La ironía destruye las falsas certezas.",
        "Reconocer la ignorancia es el comienzo del saber."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>👶 Dar a luz la verdad</h4>
        <p>La mayéutica es el arte de ayudar a dar a luz. Como su madre partera, Sócrates ayudaba con preguntas a que otros dieran a luz la verdad. Buscaba definiciones universales: qué es la justicia en sí, no solo ejemplos.</p>
      </div>
      `,
      hint: "Identificá la segunda fase del método, de dónde viene su nombre y qué buscaba.",
      concepts: [
        { term: "mayéutica", meaning: "Segunda fase del método socrático: ayudar al otro a descubrir la verdad." },
        { term: "dar a luz", meaning: "Lo que hace la partera con el bebé y Sócrates con las ideas." },
        { term: "partera", meaning: "El oficio de la madre de Sócrates, que inspiró el nombre de su método." },
        { term: "preguntas", meaning: "La herramienta de Sócrates: preguntas bien pensadas que guían a pensar." },
        { term: "definiciones universales", meaning: "Lo que es algo en sí, válido para todos los casos." },
        { term: "justicia en sí", meaning: "Lo que tienen en común todos los actos justos: lo que Sócrates quería definir." }
      ],
      corollary: [
        "La verdad no se impone: se ayuda a nacer.",
        "Sócrates buscaba qué es cada cosa en sí."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🧠 Virtud y conocimiento</h4>
        <p>El intelectualismo moral afirma que el conocimiento del bien es la virtud. Por eso nadie hace el mal a sabiendas: quien obra mal lo hace por ignorancia. La solución es la educación.</p>
      </div>
      `,
      hint: "Identificá la ética de Sócrates y por qué alguien obra mal.",
      concepts: [
        { term: "intelectualismo moral", meaning: "La ética de Sócrates: la virtud es conocimiento." },
        { term: "conocimiento del bien", meaning: "Saber qué es lo bueno: para Sócrates, eso es la virtud." },
        { term: "virtud", meaning: "La excelencia moral; para Sócrates, se puede enseñar porque es un saber." },
        { term: "nadie hace el mal a sabiendas", meaning: "Quien obra mal cree, equivocado, que hace algo bueno para sí." },
        { term: "ignorancia", meaning: "La causa del mal según Sócrates: el mayor de los males." },
        { term: "educación", meaning: "El camino para mejorar: al que se equivoca hay que enseñarle." }
      ],
      corollary: [
        "Para Sócrates, saber el bien es hacerlo.",
        "El mal nace de la ignorancia; la cura es educar."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>⚖️ Sufrir o cometer</h4>
        <p>Sócrates sostenía que es preferible sufrir una injusticia que cometerla: sufrirla daña lo que tenemos, pero cometerla daña el alma. La felicidad, la eudaimonía, no está en las posesiones.</p>
      </div>
      `,
      hint: "Identificá qué es peor para Sócrates y dónde está la felicidad.",
      concepts: [
        { term: "Sócrates", meaning: "Sostuvo ideas que sorprendían a sus contemporáneos." },
        { term: "sufrir una injusticia", meaning: "Daña lo que tenemos (cuerpo, dinero, fama), pero no nos vuelve injustos." },
        { term: "cometerla", meaning: "Cometer una injusticia daña el alma y nos vuelve injustos: es peor." },
        { term: "alma", meaning: "Lo más valioso: cometer injusticias la daña." },
        { term: "felicidad", meaning: "Plenitud del alma, no placer pasajero." },
        { term: "eudaimonía", meaning: "Palabra griega para la felicidad entendida como vida plena." },
        { term: "posesiones", meaning: "Bienes materiales: para Sócrates, la felicidad no está en ellos." }
      ],
      corollary: [
        "Es mejor sufrir una injusticia que cometerla.",
        "La felicidad está en el alma, no en las posesiones."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🏛️ Fiel a la ley</h4>
        <p>En el 399 a. C. lo acusaron de no creer en los dioses y de corromper a los jóvenes. Lo condenaron a beber cicuta. Pudo escapar, pero respetó las leyes de Atenas y murió siendo coherente con sus ideas.</p>
      </div>
      `,
      hint: "Identificá las acusaciones, la condena y por qué no escapó.",
      concepts: [
        { term: "no creer en los dioses", meaning: "Primera acusación contra Sócrates: impiedad." },
        { term: "corromper a los jóvenes", meaning: "Segunda acusación: que sus preguntas desviaban a la juventud." },
        { term: "cicuta", meaning: "Veneno con el que fue condenado a morir." },
        { term: "leyes", meaning: "Sócrates no escapó para no violar las leyes bajo las que había vivido." },
        { term: "Atenas", meaning: "Ciudad de Sócrates, que lo juzgó y condenó." },
        { term: "coherente", meaning: "Sócrates vivió y murió de acuerdo con lo que enseñaba." }
      ],
      corollary: [
        "Sócrates prefirió morir antes que traicionar sus ideas.",
        "Su muerte lo volvió un símbolo de integridad."
      ]
    }
  ]
};
