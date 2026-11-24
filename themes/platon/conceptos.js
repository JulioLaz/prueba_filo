// themes/platon/conceptos.js
// Caza de conceptos — Platón: El Mundo de las Ideas y la Caverna. Unidad I.
// v1.0 (2026-11-24): tema nuevo en la caza. 8 niveles en el orden del material v2.0,
//   sin negritas, términos literales y palabras «gemelas» emparejadas.

window.CONCEPT_HUNT_CONFIG = {
  author: "Platón",
  menuUrl: "tema.html?tema=platon",
  levels: [
    {
      html: `
      <p>Platón fue discípulo de Sócrates. Tras la condena de su maestro dejó la política, viajó a Siracusa y fundó la Academia, donde enseñó y escribió diálogos.</p>
      `,
      hint: "Identificá quién fue Platón, su maestro y la escuela que fundó.",
      concepts: [
        { term: "Platón", meaning: "Filósofo de Atenas (427–347 a. C.), discípulo de Sócrates." },
        { term: "Sócrates", meaning: "Maestro de Platón, condenado a muerte por Atenas." },
        { term: "política", meaning: "A lo que Platón quería dedicarse de joven." },
        { term: "Siracusa", meaning: "Ciudad de Sicilia que Platón visitó en sus viajes." },
        { term: "Academia", meaning: "Escuela de filosofía que Platón fundó en Atenas en el 387 a. C." },
        { term: "diálogos", meaning: "Obras de Platón escritas como conversaciones." }
      ],
      corollary: [
        "La muerte de Sócrates llevó a Platón a la filosofía.",
        "Platón fundó la Academia y escribió diálogos."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>💡 Las Ideas</h4>
        <p>Para resolver el choque entre Heráclito y Parménides, Platón propuso las Ideas: realidades eternas e inmutables que capta la razón, como el círculo perfecto que ningún dibujo logra.</p>
      </div>
      `,
      hint: "Identificá a los dos presocráticos y qué son las Ideas.",
      concepts: [
        { term: "Heráclito", meaning: "Presocrático que decía que todo cambia." },
        { term: "Parménides", meaning: "Presocrático que decía que el verdadero ser no cambia." },
        { term: "Ideas", meaning: "Realidades universales, eternas e inmutables: lo más real para Platón." },
        { term: "eternas", meaning: "Que no nacen ni mueren." },
        { term: "inmutables", meaning: "Que no cambian." },
        { term: "razón", meaning: "La facultad que capta las Ideas." },
        { term: "círculo perfecto", meaning: "Ejemplo de algo que conocemos con la razón y no vemos en ningún dibujo." }
      ],
      corollary: [
        "Las cosas cambian; las Ideas no.",
        "Las Ideas se conocen con la razón, no con los ojos."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🌍 Dos niveles de realidad</h4>
        <p>El mundo sensible es material y cambiante, y lo captan los sentidos. El mundo inteligible es el de las Ideas. Las cosas son copias que participan de las Ideas, y el Demiurgo modeló el mundo mirándolas.</p>
      </div>
      `,
      hint: "Identificá los dos niveles de realidad y la relación entre ellos.",
      concepts: [
        { term: "mundo sensible", meaning: "El de las cosas materiales y cambiantes." },
        { term: "cambiante", meaning: "Que se transforma: rasgo de lo sensible." },
        { term: "sentidos", meaning: "Vista, oído, tacto...: captan el mundo sensible." },
        { term: "mundo inteligible", meaning: "El de las Ideas, que capta la razón." },
        { term: "copias", meaning: "Así son las cosas sensibles respecto de las Ideas." },
        { term: "participan", meaning: "Las cosas son lo que son porque participan de una Idea." },
        { term: "Demiurgo", meaning: "Artesano divino del Timeo que modeló el mundo mirando las Ideas." }
      ],
      corollary: [
        "Lo más real es lo que no cambia.",
        "Las cosas sensibles imitan a las Ideas."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>☀️ La Idea del Bien</h4>
        <p>En la cima de la jerarquía está la Idea del Bien, que Platón explica con el símil del Sol: así como la luz permite ver las cosas, el Bien permite conocer las demás Ideas y les da su ser.</p>
      </div>
      `,
      hint: "Identificá la Idea suprema y cómo la explica Platón.",
      concepts: [
        { term: "jerarquía", meaning: "Orden de las Ideas, de menor a mayor importancia." },
        { term: "Idea del Bien", meaning: "La Idea suprema, en la cima de la jerarquía." },
        { term: "símil del Sol", meaning: "Comparación de La República: el Bien es como el Sol." },
        { term: "luz", meaning: "Lo que da el Sol para que los ojos vean." },
        { term: "conocer", meaning: "Lo que el Bien hace posible para la razón." }
      ],
      corollary: [
        "El Bien es al conocer lo que el Sol es al ver.",
        "Sin el Bien no hay conocimiento verdadero."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>📏 La línea dividida</h4>
        <p>En la línea dividida, la doxa es opinión: imaginación (eikasía) y creencia (pístis). La episteme es ciencia: pensamiento (diánoia) y, en lo más alto, inteligencia (nóesis).</p>
      </div>
      `,
      hint: "Identificá las dos partes de la línea y sus cuatro grados.",
      concepts: [
        { term: "línea dividida", meaning: "Imagen de Platón para los grados del conocimiento." },
        { term: "doxa", meaning: "Opinión: el conocimiento del mundo sensible." },
        { term: "eikasía", meaning: "Imaginación: ve sombras y reflejos. El grado más bajo." },
        { term: "pístis", meaning: "Creencia: ve las cosas sensibles." },
        { term: "episteme", meaning: "Ciencia: el conocimiento de lo inteligible." },
        { term: "diánoia", meaning: "Pensamiento: el conocimiento matemático." },
        { term: "nóesis", meaning: "Inteligencia: capta las Ideas y el Bien. El grado más alto." }
      ],
      corollary: [
        "De la opinión a la ciencia hay un camino.",
        "La nóesis es el grado más alto del conocimiento."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🔦 La caverna</h4>
        <p>En la alegoría de la caverna, unos prisioneros encadenados ven solo sombras en la pared, proyectadas por un fuego. Creen que son toda la realidad, hasta que uno es liberado y sale, con dolor, hacia el Sol.</p>
      </div>
      `,
      hint: "Identificá los elementos de la alegoría.",
      concepts: [
        { term: "alegoría de la caverna", meaning: "Relato de La República sobre el camino del conocimiento." },
        { term: "prisioneros", meaning: "Encadenados desde niños: somos nosotros cuando no pensamos." },
        { term: "sombras", meaning: "Lo único que ven los prisioneros: las apariencias." },
        { term: "fuego", meaning: "Proyecta las sombras en la pared." },
        { term: "liberado", meaning: "El prisionero que sale de la caverna." },
        { term: "Sol", meaning: "Lo último que logra mirar el liberado: la Idea del Bien." }
      ],
      corollary: [
        "Tomamos las sombras por la realidad.",
        "Salir de la caverna cuesta, pero vale la pena."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🔑 El significado</h4>
        <p>La caverna es el mundo sensible y el exterior, el mundo inteligible. El que vuelve a liberar a los demás representa a Sócrates. Educar es una conversión: girar la mirada hacia la luz.</p>
      </div>
      `,
      hint: "Identificá qué significa cada parte y qué es educar.",
      concepts: [
        { term: "mundo sensible", meaning: "Lo que representa la caverna." },
        { term: "mundo inteligible", meaning: "Lo que representa el exterior de la caverna." },
        { term: "Sócrates", meaning: "Representado por el que vuelve y es rechazado." },
        { term: "Educar", meaning: "Para Platón, no es llenar una cabeza vacía." },
        { term: "conversión", meaning: "Periagogé: el giro que produce la educación." },
        { term: "girar la mirada", meaning: "Dejar las sombras y orientarse hacia la luz." }
      ],
      corollary: [
        "El que sale tiene el deber de volver.",
        "Educar es girar la mirada, no llenar la cabeza."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🏛️ Dialéctica y política</h4>
        <p>Después de la matemática, la dialéctica asciende de idea en idea hasta el Bien. En La República, la ciudad justa tiene productores, guardianes y gobernantes, y debe gobernar el rey filósofo.</p>
      </div>
      `,
      hint: "Identificá el método más alto y cómo es la ciudad justa.",
      concepts: [
        { term: "matemática", meaning: "Preparación: acostumbra a pensar sin los sentidos." },
        { term: "dialéctica", meaning: "Método de diálogo y razonamiento que asciende hasta el Bien." },
        { term: "La República", meaning: "Diálogo de Platón sobre la ciudad justa." },
        { term: "ciudad justa", meaning: "Aquella en la que cada grupo cumple su función." },
        { term: "productores", meaning: "Campesinos, artesanos y comerciantes." },
        { term: "guardianes", meaning: "Los que defienden la ciudad." },
        { term: "gobernantes", meaning: "Los que dirigen la ciudad." },
        { term: "rey filósofo", meaning: "El que conoce el Bien y por eso debe gobernar." }
      ],
      corollary: [
        "La dialéctica es el camino más alto hacia el Bien.",
        "Debe gobernar quien conoce el Bien."
      ]
    }
  ]
};
