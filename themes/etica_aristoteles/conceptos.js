// js/caza_conceptos_aristoteles.js

window.CONCEPT_HUNT_CONFIG = {
  author: "Aristóteles",
  menuUrl: "https://juliolaz.github.io/prueba_filo/quiz.html?tema=aristoteles&theme=aristoteles",
  // Niveles
  levels: [
    {
      html: `
      <p>Según <strong>Aristóteles</strong>, la ética no es un conjunto de reglas rígidas, sino una búsqueda de lo que es <strong>bueno</strong> para el ser humano. El fin último de todas nuestras acciones es la <strong>felicidad</strong> (en griego, <strong>eudaimonía</strong>). Pero esta felicidad no es un simple placer; es una vida activa, guiada por la razón y dedicada a la <strong>virtud</strong>.</p>
      `,
      hint: "Identifica la meta de la ética aristotélica.",
      advanceAfter: 1,
      concepts: [
        { term: "Aristóteles", meaning: "Filósofo griego, discípulo de Platón y maestro de Alejandro Magno. Su ética se centra en la búsqueda de la felicidad a través de la virtud." },
        { term: "bueno", meaning: "Aquello a lo que todas las cosas tienden. Para Aristóteles, el Bien supremo es la felicidad." },
        { term: "felicidad", meaning: "El fin último de la vida humana. No es un estado pasivo, sino una actividad del alma conforme a la virtud. En griego, eudaimonía." },
        { term: "eudaimonía", meaning: "Término griego que se traduce como 'felicidad' o 'buen vivir', pero implica un florecimiento humano pleno." },
        { term: "virtud", meaning: "Cualidad moral que nos permite actuar correctamente. Para Aristóteles, se adquiere con la práctica y el hábito." },
      ],
      corollary: [
        "El objetivo de la ética es la felicidad.",
        "La felicidad es una vida activa de acuerdo con la virtud."
      ],
    },
    {
      html: `
      <div class="highlight-box">
        <h4>⚖️ El Término Medio</h4>
        <p>Una de las ideas más famosas de <strong>Aristóteles</strong> es la del <strong>término-medio</strong>. La <strong>virtud</strong> se encuentra entre dos <strong>extremos</strong>, que son los vicios: el uno por <strong>exceso</strong> y el otro por <strong>defecto</strong>. Por ejemplo, la virtud de la valentía se encuentra entre el exceso (temeridad) y el defecto (cobardía). Encontrar el término medio requiere <strong>sabiduría-práctica</strong> (phrónesis) y no es una fórmula matemática, sino un equilibrio que depende de la persona y la situación.</p>
      </div>
      `,
      hint: "Busca los conceptos que definen la virtud.",
      advanceAfter: 1,
      concepts: [
        { term: "término-medio", meaning: "El punto de equilibrio o la posición virtuosa que se encuentra entre dos extremos viciosos (exceso y defecto)." },
        { term: "extremos", meaning: "Los vicios que se oponen a la virtud: uno por ir más allá de lo debido (exceso) y otro por quedarse corto (defecto)." },
        { term: "exceso", meaning: "El vicio que se da por ir más allá del término medio. Por ejemplo, la temeridad es el exceso de valentía." },
        { term: "defecto", meaning: "El vicio que se da por quedarse corto en la virtud. Por ejemplo, la cobardía es el defecto de valentía." },
        { term: "sabiduría-práctica", meaning: "La capacidad de discernir y aplicar el término medio en situaciones concretas. Aristóteles la llama 'phrónesis'." },
      ],
      corollary: [
        "La virtud es un punto intermedio entre el exceso y el defecto.",
        "El término medio es una guía para la acción moral."
      ],
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🤝 La Vida en Comunidad</h4>
        <p>Aristóteles consideraba que el ser humano es un <strong>animal-político</strong>. Esto significa que nuestra naturaleza se realiza plenamente en la vida en <strong>comunidad</strong>, en la <strong>polis</strong> (ciudad-estado). La ética está estrechamente ligada a la <strong>política</strong>, ya que el objetivo de una buena comunidad es permitir que sus ciudadanos vivan una vida virtuosa y alcancen la felicidad. La <strong>amistad</strong> es una de las virtudes más importantes para la vida en sociedad.</p>
      </div>
      `,
      hint: "Enfócate en la relación entre el individuo y la sociedad.",
      advanceAfter: 1,
      concepts: [
        { term: "animal-político", meaning: "La idea aristotélica de que los seres humanos, por naturaleza, vivimos en sociedad y desarrollamos nuestras capacidades en la vida en comunidad." },
        { term: "comunidad", meaning: "Grupo de personas con intereses y objetivos en común. Es el lugar donde el ser humano alcanza su plenitud." },
        { term: "política", meaning: "El arte de organizar la vida en la polis para promover el bien común y la felicidad de los ciudadanos." },
        { term: "amistad", meaning: "Una de las virtudes más altas. Aristóteles la considera esencial para la vida feliz y la cohesión social." },
      ],
      corollary: [
        "La ética y la política son inseparables para Aristóteles.",
        "La vida virtuosa solo se puede alcanzar en una comunidad."
      ],
    },
  ],
};