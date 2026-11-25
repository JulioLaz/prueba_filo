// themes/descartes_sujeto/conceptos.js
// Caza de conceptos — Descartes: Pienso, Luego Existo. Unidad II.
// v1.0 (2026-11-25): tema nuevo. 8 niveles en el orden del material, sin negritas,
//   términos literales y palabras «gemelas» emparejadas.

window.CONCEPT_HUNT_CONFIG = {
  author: "René Descartes",
  menuUrl: "tema.html?tema=descartes_sujeto",
  levels: [
    {
      html: `
      <p>René Descartes es el padre de la filosofía moderna y del racionalismo. Escribió el Discurso del método y las Meditaciones metafísicas, y llevó la filosofía hacia la certeza del sujeto.</p>
      `,
      hint: "Identificá quién fue Descartes y su giro.",
      concepts: [
        { term: "René Descartes", meaning: "Filósofo y matemático francés (1596–1650)." },
        { term: "filosofía moderna", meaning: "Etapa de la filosofía que Descartes inaugura." },
        { term: "racionalismo", meaning: "Corriente que confía en la razón como fuente del conocimiento." },
        { term: "Discurso del método", meaning: "Obra de 1637 con las cuatro reglas." },
        { term: "Meditaciones metafísicas", meaning: "Obra de 1641 donde desarrolla la duda y el cogito." },
        { term: "sujeto", meaning: "El yo que piensa: nuevo punto de partida de la filosofía." }
      ],
      corollary: [
        "Con Descartes, la filosofía parte del sujeto.",
        "Descartes inaugura la filosofía moderna."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>📐 Certeza y método</h4>
        <p>Descartes busca la certeza y rechaza como falso lo dudoso. Admira las matemáticas y propone cuatro reglas: evidencia, análisis, síntesis y enumeración, con lo claro y distinto como criterio.</p>
      </div>
      `,
      hint: "Identificá qué buscaba Descartes y cómo.",
      concepts: [
        { term: "certeza", meaning: "Seguridad absoluta: lo que busca Descartes." },
        { term: "falso", meaning: "Así trata lo que admite la mínima duda." },
        { term: "matemáticas", meaning: "Modelo de rigor y exactitud." },
        { term: "evidencia", meaning: "Regla: aceptar solo lo claro y distinto." },
        { term: "análisis", meaning: "Regla: dividir los problemas." },
        { term: "síntesis", meaning: "Regla: de lo simple a lo complejo." },
        { term: "enumeración", meaning: "Regla: revisar todo." }
      ],
      corollary: [
        "Solo vale lo indudable.",
        "Un método riguroso, como el de las matemáticas."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🏚️ Los niveles de la duda</h4>
        <p>La duda metódica alcanza a los sentidos, que nos engañan como el palo en el agua; al sueño, que no se distingue con seguridad de la vigilia; y al genio maligno, que podría engañarme hasta en las matemáticas.</p>
      </div>
      `,
      hint: "Identificá los tres niveles de la duda.",
      concepts: [
        { term: "duda metódica", meaning: "Duda como medio para encontrar la certeza." },
        { term: "sentidos", meaning: "Primer nivel: a veces nos engañan." },
        { term: "palo", meaning: "Parece roto dentro del agua." },
        { term: "sueño", meaning: "Segundo nivel: no se distingue con seguridad de la vigilia." },
        { term: "vigilia", meaning: "Estar despierto." },
        { term: "genio maligno", meaning: "Tercer nivel: un engañador todopoderoso." }
      ],
      corollary: [
        "La duda se radicaliza paso a paso.",
        "Ni las matemáticas resisten al genio maligno."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>💡 El cogito</h4>
        <p>En la segunda meditación aparece una verdad indudable: si dudo, pienso; si pienso, existo. Es el cogito, ergo sum, una intuición. Soy una res cogitans, una cosa que piensa.</p>
      </div>
      `,
      hint: "Identificá la primera certeza y qué soy.",
      concepts: [
        { term: "indudable", meaning: "Que resiste cualquier duda." },
        { term: "pienso", meaning: "Lo que hago mientras dudo." },
        { term: "existo", meaning: "Lo que se sigue de pensar." },
        { term: "cogito, ergo sum", meaning: "Pienso, luego existo." },
        { term: "intuición", meaning: "Captación inmediata, no un razonamiento." },
        { term: "res cogitans", meaning: "La cosa que piensa." }
      ],
      corollary: [
        "Si dudo, existo.",
        "Por ahora, solo soy una mente."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🗂️ Ideas y Dios</h4>
        <p>Hay ideas innatas, adventicias y facticias, como un centauro. La idea de infinito no puede venir de un ser finito: la puso Dios, como el artista su firma. El argumento ontológico agrega que la perfección implica la existencia.</p>
      </div>
      `,
      hint: "Identificá los tipos de ideas y los argumentos sobre Dios.",
      concepts: [
        { term: "innatas", meaning: "Ideas que nacen conmigo." },
        { term: "adventicias", meaning: "Ideas que vienen de afuera." },
        { term: "facticias", meaning: "Ideas que invento." },
        { term: "centauro", meaning: "Ejemplo de idea facticia." },
        { term: "infinito", meaning: "Idea que solo un ser infinito pudo poner en mí." },
        { term: "artista", meaning: "Como Dios, pone su firma en su obra." },
        { term: "argumento ontológico", meaning: "La idea de un ser perfecto implica su existencia." }
      ],
      corollary: [
        "De la idea de infinito, Descartes llega a Dios.",
        "Un ser perfecto no puede no existir."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🛡️ Garantía y error</h4>
        <p>Dios es bueno y no engaña: es la garantía del conocimiento. El error nace cuando la voluntad, que es infinita, se precipita más allá del entendimiento, que es finito.</p>
      </div>
      `,
      hint: "Identificá por qué podemos confiar y por qué nos equivocamos.",
      concepts: [
        { term: "garantía", meaning: "Lo que Dios es para el conocimiento." },
        { term: "engaña", meaning: "Lo que un Dios bueno no hace." },
        { term: "error", meaning: "Juzgar sin estar seguros." },
        { term: "voluntad", meaning: "Facultad infinita que puede precipitarse." },
        { term: "precipita", meaning: "Juzga antes de tiempo." },
        { term: "entendimiento", meaning: "Facultad finita que conoce." }
      ],
      corollary: [
        "Un Dios bueno no nos engaña.",
        "Nos equivocamos por juzgar demasiado rápido."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>⚖️ Las dos sustancias</h4>
        <p>La res extensa es la realidad material, reducida a extensión, y da lugar al mecanicismo. Junto a la res cogitans forma un dualismo sustancial, que deja abierto cómo se comunican mente y cuerpo: Descartes propuso la glándula pineal.</p>
      </div>
      `,
      hint: "Identificá las dos sustancias y el problema que abren.",
      concepts: [
        { term: "res extensa", meaning: "La realidad material." },
        { term: "extensión", meaning: "Largo, ancho y profundidad." },
        { term: "mecanicismo", meaning: "Ver el mundo como una máquina." },
        { term: "dualismo sustancial", meaning: "Mente y cuerpo como dos sustancias distintas." },
        { term: "mente", meaning: "La res cogitans." },
        { term: "cuerpo", meaning: "Parte de la res extensa." },
        { term: "glándula pineal", meaning: "Supuesto punto de contacto entre mente y cuerpo." }
      ],
      corollary: [
        "Mente y materia son sustancias distintas.",
        "¿Cómo se comunican? Ese es el problema."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🤖 Descartes hoy</h4>
        <p>Descartes buscó cómo distinguir a un humano de un autómata por el lenguaje. Hoy volvemos a preguntarlo ante la inteligencia artificial, la simulación y los deepfakes, mientras la neurociencia ve una mente encarnada.</p>
      </div>
      `,
      hint: "Identificá la vigencia de Descartes.",
      concepts: [
        { term: "autómata", meaning: "Máquina que imita a un ser vivo." },
        { term: "lenguaje", meaning: "Prueba para distinguir a un humano de un autómata." },
        { term: "inteligencia artificial", meaning: "Sistemas que hoy reabren la pregunta de Descartes." },
        { term: "simulación", meaning: "Hipótesis de vivir en un mundo simulado." },
        { term: "deepfakes", meaning: "Imágenes falsas que parecen reales." },
        { term: "mente encarnada", meaning: "La mente unida al cuerpo y a las emociones." }
      ],
      corollary: [
        "La pregunta de Descartes vuelve con la IA.",
        "Hoy se piensa una mente unida al cuerpo."
      ]
    }
  ]
};
