// themes/etica_aristoteles/conceptos.js
// Caza de conceptos — Aristóteles: lo bueno es la felicidad
// v2.0 (2026-10-21): 8 niveles; sin negritas en el texto (el motor resalta los
// conceptos y las negritas sueltas restaban vidas); términos con espacios en vez
// de guiones/guiones bajos; nivel de "ética de las virtudes" dividido en dos y
// sin repetir política/comunidad.
// v2.1 (2026-10-21): hay que encontrar todos los conceptos del párrafo para avanzar.

window.CONCEPT_HUNT_CONFIG = {
  author: "Aristóteles",
  menuUrl: "tema.html?tema=etica_aristoteles",
  levels: [
    {
      html: `
      <p>Según Aristóteles, la ética no es un conjunto de reglas rígidas, sino una búsqueda de lo que es bueno para el ser humano. El fin último de todas nuestras acciones es la felicidad (en griego, eudaimonía). Pero esta felicidad no es un simple placer; es una vida activa, guiada por la razón y dedicada a la virtud.</p>
      `,
      hint: "Identifica la meta de la ética aristotélica.",
      concepts: [
        { term: "Aristóteles", meaning: "Filósofo griego, discípulo de Platón y maestro de Alejandro Magno. Su ética se centra en la búsqueda de la felicidad a través de la virtud." },
        { term: "bueno", meaning: "Aquello a lo que todas las cosas tienden. Para Aristóteles, el bien supremo es la felicidad." },
        { term: "felicidad", meaning: "El fin último de la vida humana. No es un estado pasivo, sino una actividad del alma conforme a la virtud. En griego, eudaimonía." },
        { term: "eudaimonía", meaning: "Término griego que se traduce como 'felicidad' o 'buen vivir', pero implica un florecimiento humano pleno." },
        { term: "virtud", meaning: "Cualidad que nos permite actuar bien. Para Aristóteles, se adquiere con la práctica y el hábito." }
      ],
      corollary: [
        "El objetivo de la ética es la felicidad.",
        "La felicidad es una vida activa de acuerdo con la virtud."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🏛️ Ética de las virtudes</h4>
        <p>La ética de Aristóteles se basa en la idea de que toda acción humana busca un bien. El fin último es la eudaimonía, entendida como felicidad o florecimiento humano. Para alcanzarla, debemos cultivar virtudes, que son hábitos que perfeccionan el carácter. La ética aristotélica es práctica: no basta con conocer el bien, hay que actuar bien.</p>
      </div>
      `,
      hint: "Identifica los elementos clave de la ética aristotélica.",
      concepts: [
        { term: "ética de Aristóteles", meaning: "Ética de las virtudes: propone la virtud como camino hacia la felicidad." },
        { term: "bien", meaning: "Aquello que se busca como fin en toda acción humana." },
        { term: "eudaimonía", meaning: "Felicidad plena o florecimiento humano, fin último de la vida ética." },
        { term: "florecimiento humano", meaning: "Desarrollo pleno de las capacidades humanas, sobre todo de la razón." },
        { term: "virtudes", meaning: "Hábitos que perfeccionan el carácter y orientan hacia el bien." },
        { term: "hábitos", meaning: "Disposiciones que se forman repitiendo actos: uno se hace justo obrando con justicia." },
        { term: "práctica", meaning: "La ética no es solo teoría: se aprende y se demuestra actuando bien." }
      ],
      corollary: [
        "La virtud es un hábito que perfecciona el carácter.",
        "La ética aristotélica es práctica: saber no basta, hay que actuar."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🧩 Dos familias de virtudes</h4>
        <p>Aristóteles distingue entre virtudes éticas, como la templanza o la generosidad, y virtudes dianoéticas, como la prudencia o la sabiduría. Las primeras se adquieren por hábito; las segundas, por educación. La prudencia permite aplicar la virtud en situaciones concretas. Además, la responsabilidad moral requiere que el acto sea voluntario, es decir, hecho con conocimiento y sin coacción.</p>
      </div>
      `,
      hint: "Distingue los dos tipos de virtud y cuándo somos responsables.",
      concepts: [
        { term: "virtudes éticas", meaning: "Virtudes del carácter: ordenan deseos y emociones y se adquieren por hábito." },
        { term: "templanza", meaning: "Virtud ética: moderación en los placeres, término medio entre el desenfreno y la insensibilidad." },
        { term: "generosidad", meaning: "Virtud ética: término medio entre la tacañería y el derroche." },
        { term: "virtudes dianoéticas", meaning: "Virtudes de la razón (intelectuales): se adquieren por educación o enseñanza." },
        { term: "prudencia", meaning: "Sabiduría práctica (frónesis): delibera bien sobre qué hacer en cada situación concreta." },
        { term: "sabiduría", meaning: "Virtud dianoética: conocimiento de las causas y los primeros principios (sofía)." },
        { term: "responsabilidad moral", meaning: "Capacidad de responder por los actos voluntarios." },
        { term: "voluntario", meaning: "Acto realizado con conocimiento de las circunstancias y sin coacción." }
      ],
      corollary: [
        "Las virtudes éticas se forman por hábito; las dianoéticas, por enseñanza.",
        "Solo somos responsables de lo que hacemos voluntariamente."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>⚖️ El término medio</h4>
        <p>Una de las ideas más famosas de Aristóteles es la del término medio. La virtud se encuentra entre dos extremos, que son los vicios: uno por exceso y otro por defecto. Por ejemplo, la valentía se encuentra entre la temeridad (exceso) y la cobardía (defecto). Encontrar el término medio requiere sabiduría práctica (frónesis): no es una fórmula matemática, sino un equilibrio que depende de la persona y de la situación.</p>
      </div>
      `,
      hint: "Busca los conceptos que definen la virtud como equilibrio.",
      concepts: [
        { term: "término medio", meaning: "La posición virtuosa entre dos extremos viciosos (exceso y defecto), relativa a la persona y a la situación." },
        { term: "extremos", meaning: "Los vicios que se oponen a la virtud: uno por ir más allá de lo debido y otro por quedarse corto." },
        { term: "exceso", meaning: "El vicio por ir más allá del término medio. Por ejemplo, la temeridad respecto de la valentía." },
        { term: "defecto", meaning: "El vicio por quedarse corto. Por ejemplo, la cobardía respecto de la valentía." },
        { term: "valentía", meaning: "Virtud ética: término medio entre la temeridad y la cobardía ante el peligro." },
        { term: "temeridad", meaning: "Vicio por exceso: arrojo sin juicio ante el peligro." },
        { term: "cobardía", meaning: "Vicio por defecto: falta de valor ante el peligro." },
        { term: "sabiduría práctica", meaning: "La capacidad de discernir y aplicar el término medio en situaciones concretas. Aristóteles la llama frónesis." }
      ],
      corollary: [
        "La virtud es un punto intermedio entre el exceso y el defecto.",
        "El término medio no es matemático: lo encuentra la prudencia en cada caso."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>⚖️ Justicia y equidad</h4>
        <p>Para Aristóteles, la justicia es la virtud perfecta, porque implica actuar bien con los demás. Distingue entre la justicia distributiva, que reparte bienes según méritos, y la justicia correctiva, que repara desequilibrios en intercambios y daños. La equidad es una forma superior de justicia, que adapta la norma al caso concreto cuando la ley resulta rígida.</p>
      </div>
      `,
      hint: "Explora los tipos de justicia y su aplicación.",
      concepts: [
        { term: "justicia", meaning: "Virtud que regula nuestras relaciones con los demás, buscando el bien común." },
        { term: "virtud perfecta", meaning: "Virtud que implica a todas las demás, porque se ejerce en relación con otros." },
        { term: "justicia distributiva", meaning: "Reparto de bienes, honores y cargas según el mérito de cada uno, de forma proporcional." },
        { term: "justicia correctiva", meaning: "Restaura la igualdad en intercambios o daños entre particulares." },
        { term: "equidad", meaning: "Aplicación flexible de la ley para lograr justicia en casos particulares." }
      ],
      corollary: [
        "La justicia es la virtud que perfecciona la vida en comunidad.",
        "La equidad corrige la rigidez de la ley en favor del caso concreto."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🤝 Amistad y virtud</h4>
        <p>La amistad es esencial en la ética de Aristóteles: nadie elegiría vivir sin amigos. Distingue tres tipos: la amistad por utilidad, la amistad por placer y la amistad por virtud. Esta última es la más duradera, porque se basa en querer el bien del otro por sí mismo. La amistad fortalece la cohesión social, porque los amigos se tratan con respeto espontáneo.</p>
      </div>
      `,
      hint: "Identifica los tipos de amistad y su valor ético.",
      concepts: [
        { term: "amistad", meaning: "Vínculo de afecto y bien compartido; para Aristóteles, necesaria para vivir bien." },
        { term: "amistad por utilidad", meaning: "Vínculo basado en el beneficio mutuo; dura mientras dura la ventaja." },
        { term: "amistad por placer", meaning: "Vínculo basado en el disfrute de la compañía; cambia con los gustos." },
        { term: "amistad por virtud", meaning: "La amistad perfecta: entre personas virtuosas que quieren el bien del otro por sí mismo." },
        { term: "cohesión social", meaning: "Unidad y armonía dentro de una comunidad." }
      ],
      corollary: [
        "La amistad por virtud es la más estable y valiosa.",
        "Entre amigos verdaderos, el trato justo surge de manera espontánea."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>📚 Educación y formación ética</h4>
        <p>Aristóteles considera que la educación es clave para formar el carácter. Las virtudes morales se adquieren por hábito, y las virtudes intelectuales por enseñanza. La formación ciudadana debe comenzar desde la infancia, guiada por buenos ejemplos y leyes justas. Sin educación ética, no hay posibilidad de alcanzar la felicidad.</p>
      </div>
      `,
      hint: "Observa cómo se adquieren las virtudes.",
      concepts: [
        { term: "educación", meaning: "Proceso de formación del carácter y de la razón para vivir virtuosamente." },
        { term: "virtudes morales", meaning: "Otro nombre de las virtudes éticas: hábitos que regulan emociones y acciones." },
        { term: "virtudes intelectuales", meaning: "Otro nombre de las virtudes dianoéticas: capacidades racionales adquiridas por enseñanza." },
        { term: "hábito", meaning: "Repetición de actos que forma el carácter." },
        { term: "enseñanza", meaning: "Transmisión de conocimientos y principios; forma las virtudes intelectuales." },
        { term: "formación ciudadana", meaning: "Educación orientada a la vida en comunidad." }
      ],
      corollary: [
        "La virtud se forma por hábito y por enseñanza.",
        "La educación ética es la base de una comunidad justa."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🏛️ La vida en comunidad</h4>
        <p>Aristóteles consideraba que el ser humano es un animal político. Esto significa que nuestra naturaleza se realiza plenamente en la vida en comunidad, en la polis (ciudad-estado). La ética está estrechamente ligada a la política, ya que el objetivo de una buena comunidad es el bien común: que sus ciudadanos vivan una vida virtuosa y alcancen la felicidad.</p>
      </div>
      `,
      hint: "Enfócate en la relación entre el individuo y la sociedad.",
      concepts: [
        { term: "animal político", meaning: "La idea aristotélica de que, por naturaleza, vivimos en sociedad y desarrollamos nuestras capacidades en comunidad (zôon politikón)." },
        { term: "comunidad", meaning: "Grupo humano con fines compartidos. Es el lugar donde el ser humano alcanza su plenitud." },
        { term: "polis", meaning: "Ciudad-estado griega: espacio de realización ética y política." },
        { term: "política", meaning: "El arte de organizar la vida en la polis para promover el bien común y la felicidad de los ciudadanos." },
        { term: "bien común", meaning: "Fin de la comunidad política: el bien de todos sus miembros, no solo de unos pocos." }
      ],
      corollary: [
        "La ética y la política son inseparables para Aristóteles.",
        "La vida virtuosa se alcanza plenamente en comunidad."
      ]
    }
  ]
};
