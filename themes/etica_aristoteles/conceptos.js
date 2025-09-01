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
    <h4>🏛️ Ética de las Virtudes</h4>
    <p>La <strong>ética-de-Aristóteles</strong> se basa en la idea de que toda acción humana busca un <strong>bien</strong>. El fin último es la <strong>eudaimonía</strong>, entendida como <strong>felicidad</strong> o <strong>florecimiento-humano</strong>. Para alcanzarla, debemos cultivar <strong>virtudes</strong>, que son hábitos que perfeccionan el carácter. La virtud moral es el <strong>justo-medio</strong> entre dos extremos: por ejemplo, la <strong>valentía</strong> está entre la <strong>temeridad</strong> y la <strong>cobardía</strong>.</p>
    <p>Aristóteles distingue entre <strong>virtudes_éticas</strong> como la templanza o la generosidad y <strong>virtudes_dianoéticas</strong> (como la <strong>prudencia</strong> o la <strong>sabiduría</strong>). Las primeras se adquieren por hábito, las segundas por educación. La <strong>prudencia</strong> permite aplicar la virtud en situaciones concretas, reconociendo el punto medio adecuado.</p>
    <p>La ética aristotélica es <strong>práctica</strong>: no basta con conocer el bien, hay que actuar bien. La <strong>responsabilidad-moral</strong> requiere que el acto sea <strong>voluntario</strong>, es decir, hecho con conocimiento y sin coacción. La excelencia se logra cuando el deseo y la razón actúan en armonía.</p>
  </div>
  `,
  hint: "Identifica los elementos clave de la ética aristotélica.",
  advanceAfter: 1,
  concepts: [
    { term: "ética-de-Aristóteles", meaning: "Sistema filosófico basado en la virtud como camino hacia la felicidad." },
    { term: "bien", meaning: "Aquello que se busca como fin en toda acción humana." },
    { term: "eudaimonía", meaning: "Felicidad plena o florecimiento humano, fin último de la vida ética." },
    { term: "florecimiento-humano", meaning: "Desarrollo pleno de las capacidades humanas." },
    { term: "virtudes", meaning: "Hábitos que perfeccionan el carácter y orientan hacia el bien." },
    { term: "justo-medio", meaning: "Equilibrio entre dos extremos viciosos; principio central de la virtud moral." },
    { term: "valentía", meaning: "Virtud que consiste en enfrentar el peligro con moderación." },
    { term: "temeridad", meaning: "Exceso de arrojo sin juicio." },
    { term: "cobardía", meaning: "Defecto por falta de valor ante el peligro." },
    { term: "virtudes_éticas", meaning: "Virtudes del carácter adquiridas por hábito." },
    { term: "virtudes_dianoéticas", meaning: "Virtudes intelectuales adquiridas por educación." },
    { term: "prudencia", meaning: "Sabiduría práctica para actuar correctamente en cada situación." },
    { term: "sabiduría", meaning: "Conocimiento profundo de los principios y causas." },
    { term: "práctica", meaning: "Aplicación activa del conocimiento ético en la vida." },
    { term: "responsabilidad-moral", meaning: "Capacidad de responder por los actos voluntarios." },
    { term: "voluntario", meaning: "Acto realizado con conocimiento y sin coacción." }
  ],
  corollary: [
    "La virtud es el hábito que conduce al justo medio.",
    "La felicidad se alcanza mediante la excelencia del carácter.",
    "La ética aristotélica es práctica: saber no basta, hay que actuar."
  ]
},
{
  html: `
  <div class="highlight-box">
    <h4>⚖️ Justicia y Equidad</h4>
    <p>Para Aristóteles, la <strong>justicia</strong> es la <strong>virtud-perfecta</strong>, porque implica actuar bien con los demás. Distingue entre <strong>justicia_distributiva</strong>, que reparte bienes según méritos, y <strong>justicia_correctiva</strong>, que repara desequilibrios en transacciones. La <strong>equidad</strong> es una forma superior de justicia, que adapta la norma al caso concreto cuando la ley resulta rígida.</p>
  </div>
  `,
  hint: "Explora los tipos de justicia y su aplicación.",
  advanceAfter: 1,
  concepts: [
    { term: "justicia", meaning: "Virtud que regula nuestras relaciones con los demás, buscando el bien común." },
    { term: "virtud-perfecta", meaning: "Virtud que implica todas las demás, porque se ejerce en comunidad." },
    { term: "justicia_distributiva", meaning: "Reparto de bienes y honores según el mérito de cada uno." },
    { term: "justicia_correctiva", meaning: "Reparación de daños o desequilibrios en relaciones privadas." },
    { term: "equidad", meaning: "Aplicación flexible de la ley para lograr justicia en casos particulares." }
  ],
  corollary: [
    "La justicia es la virtud que perfecciona la vida en comunidad.",
    "La equidad corrige la rigidez de la ley en favor del bien concreto."
  ]
},
{
  html: `
  <div class="highlight-box">
    <h4>🤝 Amistad y Virtud</h4>
    <p>La <strong>amistad</strong> es esencial en la ética de Aristóteles. Distingue tres tipos: <strong>amistad_por_utilidad</strong>, <strong>amistad_por_placer</strong> y <strong>amistad_por_virtud</strong>. Esta última es la más duradera, basada en el reconocimiento mutuo del bien. La amistad fortalece la <strong>cohesión-social</strong> y reduce la necesidad de leyes, porque los amigos actúan con respeto espontáneo.</p>
  </div>
  `,
  hint: "Identifica los tipos de amistad y su valor ético.",
  advanceAfter: 1,
  concepts: [
    { term: "amistad", meaning: "Relación afectiva basada en el respeto, el afecto y el bien compartido." },
    { term: "amistad_por_utilidad", meaning: "Relación basada en el beneficio mutuo." },
    { term: "amistad_por_placer", meaning: "Relación basada en el disfrute de la compañía." },
    { term: "amistad_por_virtud", meaning: "Relación basada en el reconocimiento del bien moral en el otro." },
    { term: "cohesión-social", meaning: "Unidad y armonía dentro de una comunidad." }
  ],
  corollary: [
    "La amistad por virtud es la más estable y valiosa.",
    "Donde hay amistad, la justicia se vuelve innecesaria."
  ]
},
{
  html: `
  <div class="highlight-box">
    <h4>📚 Educación y Formación Ética</h4>
    <p>Aristóteles considera que la <strong>educación</strong> es clave para formar el carácter. Las <strong>virtudes-morales</strong> se adquieren por <strong>hábito</strong>, y las <strong>virtudes-intelectuales</strong> por <strong>enseñanza</strong>. La <strong>formación-ciudadana</strong> debe comenzar desde la infancia, guiada por buenos ejemplos y leyes justas. Sin educación ética, no hay posibilidad de alcanzar la <strong>eudaimonía</strong>.</p>
  </div>
  `,
  hint: "Observa cómo se adquieren las virtudes.",
  advanceAfter: 1,
  concepts: [
    { term: "educación", meaning: "Proceso de formación del carácter y la razón para vivir virtuosamente." },
    { term: "virtudes-morales", meaning: "Hábitos que regulan las emociones y acciones." },
    { term: "virtudes-intelectuales", meaning: "Capacidades racionales adquiridas por enseñanza." },
    { term: "hábito", meaning: "Repetición de actos que forma el carácter." },
    { term: "enseñanza", meaning: "Transmisión de conocimientos y principios éticos." },
    { term: "formación-ciudadana", meaning: "Educación orientada a la vida en comunidad." }
  ],
  corollary: [
    "La virtud se forma por hábito y enseñanza.",
    "La educación ética es la base de una sociedad justa."
  ]
},
{
  html: `
  <div class="highlight-box">
    <h4>🏛️ Ética y Política</h4>
    <p>Para Aristóteles, la <strong>ética</strong> y la <strong>política</strong> están unidas. La <strong>polis</strong> es el espacio donde se realiza la vida virtuosa. El <strong>bien-común</strong> es superior al bien individual, y la <strong>felicidad-colectiva</strong> depende de ciudadanos virtuosos. Las <strong>formas-de-gobierno</strong> deben fomentar la virtud y la participación. La política no es solo poder, sino <strong>educación-moral</strong> para la comunidad.</p>
  </div>
  `,
  hint: "Relaciona ética individual con política colectiva.",
  advanceAfter: 1,
  concepts: [
    { term: "ética", meaning: "Reflexión sobre cómo vivir bien como individuo." },
    { term: "política", meaning: "Organización de la vida en comunidad para alcanzar el bien común." },
    { term: "polis", meaning: "Ciudad-Estado griega, espacio de realización ética y política." },
    { term: "bien-común", meaning: "Objetivo colectivo que beneficia a todos los miembros de la comunidad." },
    { term: "felicidad-colectiva", meaning: "Estado de bienestar compartido por los ciudadanos." },
    { term: "formas-de-gobierno", meaning: "Modelos de organización política que regulan la vida social." },
    { term: "educación-moral", meaning: "Formación ética promovida por el Estado." }
  ],
  corollary: [
    "La ética individual se realiza plenamente en la comunidad política.",
    "La política justa educa para la virtud y el bien común."
  ]
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