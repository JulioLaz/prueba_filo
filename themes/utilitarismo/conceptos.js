// themes/utilitarismo/conceptos.js
// Caza de conceptos — Utilitarismo: la mayor felicidad para el mayor número (Mill)
// v2.0 (2026-10-27): 8 niveles, uno por cada sección del material (antes 5 niveles
// y 14 conceptos, algunos comentados); sin negritas en el texto (el motor resalta
// los conceptos); hay que encontrar todos los conceptos del párrafo para avanzar.

window.CONCEPT_HUNT_CONFIG = {
  author: "John Stuart Mill",
  menuUrl: "tema.html?tema=utilitarismo",
  levels: [
    {
      html: `
      <p>El utilitarismo, iniciado por Jeremy Bentham y desarrollado por John Stuart Mill, sostiene que una acción es moralmente correcta si promueve la felicidad, e incorrecta si produce dolor. Lo bueno es lo útil, y lo útil es lo placentero. Su principio de la mayor felicidad pide buscar la felicidad del mayor número de personas, y en ese cálculo la felicidad de cada uno cuenta lo mismo: es una ética imparcial.</p>
      `,
      hint: "Buscá la idea central del utilitarismo y quiénes la propusieron.",
      concepts: [
        { term: "utilitarismo", meaning: "Ética que juzga las acciones por su utilidad: es correcta la que produce más felicidad para el mayor número." },
        { term: "Bentham", meaning: "Jeremy Bentham (1748–1832), fundador del utilitarismo: propuso medir placeres y dolores." },
        { term: "útil", meaning: "Lo que produce placer o evita dolor. Para el utilitarismo, lo útil es lo bueno." },
        { term: "principio de la mayor felicidad", meaning: "Regla central del utilitarismo: actuar buscando la mayor felicidad para el mayor número de personas." },
        { term: "mayor número", meaning: "No basta con mi felicidad: hay que tener en cuenta a todos los afectados por una acción." },
        { term: "imparcial", meaning: "Que no favorece a nadie: la felicidad de cada persona cuenta lo mismo, incluida la propia." }
      ],
      corollary: [
        "Lo correcto es lo que produce más felicidad para más personas.",
        "Cada persona cuenta como una: nadie vale más que otro."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🎯 Una ética eudemonista y hedonista</h4>
        <p>El utilitarismo es una ética eudemonista, porque busca la felicidad como fin último, y hedonista, porque identifica la felicidad con el placer. Pero a diferencia de Epicuro, no piensa solo en la felicidad propia: tiene un alcance universalista, porque se preocupa por la felicidad de toda la sociedad.</p>
      </div>
      `,
      hint: "Identificá cómo se clasifica la ética utilitarista y qué la distingue.",
      concepts: [
        { term: "eudemonista", meaning: "Ética que pone a la felicidad como fin último de la vida." },
        { term: "hedonista", meaning: "Que identifica la felicidad con el placer y la ausencia de dolor." },
        { term: "fin último", meaning: "Lo que se busca por sí mismo y no como medio: para el utilitarismo, la felicidad." },
        { term: "universalista", meaning: "Que abarca a todos: el utilitarismo busca la felicidad general, no solo la propia." },
        { term: "sociedad", meaning: "El conjunto de personas cuya felicidad hay que tener en cuenta al decidir." }
      ],
      corollary: [
        "Felicidad = placer, como en el hedonismo.",
        "Pero la meta es la felicidad de todos, no solo la mía."
      ]
    },
    {
      html: `
      <p>Mill distingue los placeres por su calidad, y no solo por su cantidad. Los placeres inferiores son corporales y fugaces. Los placeres superiores son intelectuales y morales, como el pensamiento, el arte y el estudio: son más duraderos y dan una satisfacción más plena. Por eso Mill dice que es mejor ser un Sócrates insatisfecho que un tonto satisfecho.</p>
      `,
      hint: "Buscá cómo clasifica Mill los placeres y su famosa comparación.",
      concepts: [
        { term: "calidad", meaning: "Lo que hace más valioso a un placer. Para Mill importa más que la cantidad." },
        { term: "placeres inferiores", meaning: "Placeres corporales y fugaces, como comer o dormir. Son buenos, pero menos valiosos." },
        { term: "placeres superiores", meaning: "Placeres intelectuales, morales y estéticos: más duraderos y plenos." },
        { term: "fugaces", meaning: "Que duran poco. Así son los placeres del cuerpo." },
        { term: "satisfacción", meaning: "Contento que produce un placer. La de los placeres superiores es más plena." },
        { term: "Sócrates insatisfecho", meaning: "Imagen de Mill: vale más una vida humana con placeres superiores, aunque falte algo, que una vida solo de placeres simples." }
      ],
      corollary: [
        "No todos los placeres valen lo mismo: importa la calidad.",
        "Mejor Sócrates insatisfecho que un tonto satisfecho."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🧠 ¿Se puede ser feliz?</h4>
        <p>Mill afirma que la felicidad sí es alcanzable, pero no hay que imaginarla como un éxtasis continuo. Una vida feliz tiene algunos momentos de exaltación, pocos dolores pasajeros y muchos placeres variados. Además, el principio utilitarista no solo pide aumentar la felicidad: también pide la prevención y la mitigación de la desgracia.</p>
      </div>
      `,
      hint: "Encontrá cómo describe Mill una vida feliz posible.",
      concepts: [
        { term: "alcanzable", meaning: "Que se puede lograr. Para Mill la felicidad lo es, si no se la confunde con un éxtasis permanente." },
        { term: "éxtasis continuo", meaning: "Alegría intensa sin fin. No es eso la felicidad: es imposible y no hace falta." },
        { term: "exaltación", meaning: "Momentos de gran alegría. Una vida feliz tiene algunos, no todo el tiempo." },
        { term: "placeres variados", meaning: "Muchos y distintos placeres: son parte de una vida feliz real." },
        { term: "prevención", meaning: "Evitar que ocurra un sufrimiento. También es un deber utilitarista." },
        { term: "mitigación", meaning: "Aliviar un sufrimiento que ya existe." }
      ],
      corollary: [
        "La felicidad es posible: muchos placeres variados y pocos dolores.",
        "Evitar y aliviar la desgracia también es buscar la felicidad."
      ]
    },
    {
      html: `
      <p>El utilitarismo es una ética consecuencialista: la bondad o maldad de un acto se mide por sus consecuencias, es decir, por sus resultados concretos. Los motivos o intenciones no cambian su valor moral. Una acción es buena si promueve la felicidad, aunque quien la hizo haya actuado por egoísmo o por altruismo. Lo que cuenta es el balance final de felicidad.</p>
      `,
      hint: "Identificá cómo se juzga una acción en el utilitarismo.",
      concepts: [
        { term: "consecuencialista", meaning: "Ética que juzga las acciones por sus consecuencias, no por las intenciones." },
        { term: "consecuencias", meaning: "Los efectos reales de una acción. Son lo único que importa para valorarla." },
        { term: "intenciones", meaning: "Lo que alguien quería al actuar. Para el utilitarismo no cambian el valor moral del acto." },
        { term: "egoísmo", meaning: "Actuar pensando solo en uno mismo. Si el resultado es bueno, igual la acción es buena." },
        { term: "altruismo", meaning: "Actuar pensando en los demás. Tampoco alcanza si el resultado es malo." },
        { term: "balance", meaning: "La cuenta final entre la felicidad y el dolor que produce una acción." }
      ],
      corollary: [
        "Importan los resultados, no las intenciones.",
        "Se mide el balance final de felicidad y dolor."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🎯 La regla y la excepción</h4>
        <p>Mentir suele estar mal porque rompe la confianza, que es necesaria para la felicidad general. Pero para el utilitarismo toda regla moral admite excepciones. Si en un caso particular una mentira piadosa produce más beneficios, o evita una desgracia mayor, que decir la verdad, esa mentira no es condenable: incluso puede ser recomendable.</p>
      </div>
      `,
      hint: "Buscá por qué mentir suele estar mal y cuándo no.",
      concepts: [
        { term: "confianza", meaning: "Base de la convivencia y de la felicidad general. Por eso mentir suele ser malo." },
        { term: "regla moral", meaning: "Norma general (no mentir, cumplir promesas) que suele producir buenos resultados." },
        { term: "excepciones", meaning: "Casos en que romper una regla produce más felicidad que cumplirla." },
        { term: "mentira piadosa", meaning: "Mentira dicha para evitar un daño o un sufrimiento mayor." },
        { term: "desgracia", meaning: "Sufrimiento o mal grave. Evitarla puede justificar una excepción." }
      ],
      corollary: [
        "Las reglas valen porque suelen dar buenos resultados.",
        "Si romperlas da más felicidad, se justifica la excepción."
      ]
    },
    {
      html: `
      <p>El sacrificio de la propia felicidad tiene valor moral solo si sirve para aumentar la felicidad de los demás. La renuncia es noble cuando produce un beneficio real. En cambio, el sacrificio que no ayuda a nadie ni alivia ninguna desgracia no tiene sentido ni valor moral para el utilitarismo.</p>
      `,
      hint: "Identificá cuándo vale la pena renunciar a la propia felicidad.",
      concepts: [
        { term: "sacrificio", meaning: "Renunciar a la propia felicidad. Solo vale si aumenta la felicidad de otros." },
        { term: "renuncia", meaning: "Dejar algo propio por otros. Es noble cuando produce un beneficio real." },
        { term: "valor moral", meaning: "Lo que hace buena a una acción. En el sacrificio depende de sus efectos en los demás." },
        { term: "beneficio real", meaning: "Una mejora concreta en la felicidad de alguien. Es lo que da sentido al sacrificio." }
      ],
      corollary: [
        "Sacrificarse vale si ayuda de verdad a otros.",
        "Un sacrificio inútil no tiene valor moral."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>⚖️ La dimensión social</h4>
        <p>Para lograr la felicidad general hay que combatir los grandes males sociales: la enfermedad, la ignorancia y la pobreza. Eso se consigue con el avance de la medicina, la educación universal, que acerca a todos los placeres superiores, y una legislación justa para repartir con equidad la riqueza. La política debe crear un sentimiento de unidad y de solidaridad.</p>
      </div>
      `,
      hint: "Buscá qué males hay que combatir y con qué herramientas.",
      concepts: [
        { term: "enfermedad", meaning: "Uno de los grandes males sociales. Se combate con el avance de la medicina." },
        { term: "ignorancia", meaning: "Otro gran mal: se combate con la educación universal." },
        { term: "pobreza", meaning: "Gran mal social que se combate con leyes justas y reparto equitativo." },
        { term: "educación universal", meaning: "Educación para todos: permite que todos accedan a los placeres superiores." },
        { term: "legislación", meaning: "Las leyes. Deben ser justas y buscar la felicidad general." },
        { term: "solidaridad", meaning: "Sentimiento de unidad con los demás que la política debe promover." }
      ],
      corollary: [
        "La felicidad general exige combatir enfermedad, ignorancia y pobreza.",
        "Medicina, educación y leyes justas son herramientas utilitaristas."
      ]
    }
  ]
};
