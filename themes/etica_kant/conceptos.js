// themes/etica_kant/conceptos.js
// Caza de conceptos — Ética kantiana: el deber como fundamento moral
// v2.0 (2026-11-19): 8 niveles alineados con las 18 secciones del material y con
// el video (antes: 3 niveles y 11 conceptos); modelo de etica_aristoteles: sin
// negritas en el texto (el motor resalta los conceptos), términos con espacios
// y hay que encontrar todos los conceptos del párrafo para avanzar.

window.CONCEPT_HUNT_CONFIG = {
  author: "Immanuel Kant",
  menuUrl: "tema.html?tema=etica_kant",
  levels: [
    {
      html: `
      <p>Immanuel Kant (1724-1804) vivió en Königsberg durante la Ilustración, cuando la razón era vista como la guía suprema del conocimiento. En la Crítica de la razón práctica sostuvo que la moral no nos viene impuesta desde fuera por autoridades o tradiciones: la descubrimos con nuestra propia razón. Lo resume su famosa frase: «el cielo estrellado sobre mí y la ley moral dentro de mí».</p>
      `,
      hint: "Identifica quién fue Kant y de dónde surge la moral para él.",
      concepts: [
        { term: "Immanuel Kant", meaning: "Filósofo alemán (1724-1804), figura central de la Ilustración y fundador de la ética del deber." },
        { term: "Ilustración", meaning: "Movimiento del siglo XVIII que confiaba en la razón para guiar el conocimiento y la vida. Su lema, según Kant: «¡Atrévete a saber!»." },
        { term: "Königsberg", meaning: "Ciudad de Prusia donde Kant nació, enseñó y vivió toda su vida." },
        { term: "Crítica de la razón práctica", meaning: "Obra de Kant (1788) dedicada a la moral: estudia cómo la razón guía la acción." },
        { term: "tradiciones", meaning: "Costumbres heredadas. Para Kant, la moral no se fundamenta en ellas sino en la razón." },
        { term: "ley moral", meaning: "Principio que la razón descubre en nuestro interior y que nos dice cómo debemos obrar." }
      ],
      corollary: [
        "La moral no se recibe de afuera: la descubre la razón.",
        "La ley moral está dentro de cada uno."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🌊 Naturaleza y razón</h4>
        <p>Para Kant somos seres divididos. Como seres naturales tenemos instintos, deseos y necesidades que nos empujan a actuar por impulso. Como seres racionales podemos reflexionar sobre nuestros actos y elegir más allá del instinto. Ante un examen difícil, el miedo puede empujarte a copiar, pero la razón te recuerda que tu deber es ser honesto. La libertad kantiana es la capacidad de elegir según la razón.</p>
      </div>
      `,
      hint: "Busca las dos dimensiones del ser humano y qué es la libertad.",
      concepts: [
        { term: "seres naturales", meaning: "Dimensión del ser humano sometida a necesidades del cuerpo: hambre, sed, deseos, supervivencia." },
        { term: "instintos", meaning: "Impulsos naturales que nos llevan a actuar según necesidades inmediatas." },
        { term: "impulso", meaning: "Fuerza que empuja a actuar sin reflexionar. Obrar por impulso no es obrar moralmente." },
        { term: "seres racionales", meaning: "Dimensión del ser humano capaz de reflexionar, evaluar principios y elegir." },
        { term: "deber", meaning: "Lo que la razón nos manda hacer, aunque nuestras inclinaciones nos empujen en otra dirección." },
        { term: "libertad", meaning: "Para Kant, la capacidad de elegir según la razón y no solo según los impulsos naturales." }
      ],
      corollary: [
        "Somos naturaleza y razón a la vez.",
        "Ser libre es elegir según la razón."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>💖 La buena voluntad</h4>
        <p>Para Kant solo hay una cosa buena sin restricciones: la buena voluntad. La inteligencia, la fuerza o la riqueza pueden usarse para el mal, pero la buena voluntad siempre es buena, incluso si no logra el resultado deseado. Por eso Kant rechaza las éticas materiales, que juzgan las acciones por el fin que alcanzan, como la felicidad en Aristóteles o el placer en Epicuro. Su ética es formal: lo que importa es la intención.</p>
      </div>
      `,
      hint: "Identifica lo único bueno sin condiciones y qué tipo de ética rechaza Kant.",
      concepts: [
        { term: "buena voluntad", meaning: "Lo único bueno sin restricciones: la disposición a actuar por respeto al deber." },
        { term: "resultado", meaning: "El efecto de una acción. Para Kant no define su valor moral." },
        { term: "éticas materiales", meaning: "Éticas que valoran las acciones por el fin que persiguen (felicidad, placer). Kant las rechaza." },
        { term: "Epicuro", meaning: "Filósofo griego que puso el placer como fin de la vida: ejemplo de ética material." },
        { term: "formal", meaning: "La ética de Kant no dice qué fin buscar, sino la forma que debe tener toda acción moral." },
        { term: "intención", meaning: "El motivo con el que se actúa. Para Kant es lo que da valor moral a la acción." }
      ],
      corollary: [
        "Solo la buena voluntad es buena sin condiciones.",
        "La ética kantiana es formal: importa la intención, no el fin."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🤝 Deber e interés</h4>
        <p>Kant distingue tres formas de actuar. Actuar por deber: hacer lo correcto por respeto a la ley moral, sin esperar nada a cambio; solo esto es plenamente moral. Actuar conforme al deber: hacer lo correcto, pero movido por el interés personal. Y actuar contra el deber. Un comerciante que es honesto solo porque teme perder clientes actúa por interés; uno que es honesto porque es su deber actúa moralmente.</p>
      </div>
      `,
      hint: "Distingue las tres maneras de actuar frente al deber.",
      concepts: [
        { term: "por deber", meaning: "Actuar movido solo por respeto a la ley moral. Es la única acción con pleno valor moral." },
        { term: "respeto", meaning: "Sentimiento que despierta la ley moral y que mueve a la buena voluntad." },
        { term: "conforme al deber", meaning: "Hacer lo correcto pero por otro motivo, como el interés. Es legal pero no moral." },
        { term: "interés personal", meaning: "Motivo egoísta (ganar, quedar bien, evitar un castigo) que quita valor moral a una acción." },
        { term: "contra el deber", meaning: "Actuar violando la ley moral: mentir, robar, explotar. Es inmoral." },
        { term: "comerciante", meaning: "Ejemplo de Kant: si es honesto solo por miedo a perder clientes, actúa conforme al deber, no por deber." }
      ],
      corollary: [
        "Lo moral es actuar por deber, no por conveniencia.",
        "Dos acciones iguales pueden valer distinto según su intención."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>⚖️ El imperativo categórico</h4>
        <p>El imperativo categórico es la prueba para saber si una acción es moral: «Obra solo según aquella máxima que puedas querer que se convierta en ley universal». Antes de actuar hay que preguntarse qué pasaría si todos hicieran lo mismo. Si todos mintieran cuando les conviene, desaparecería la confianza: la mentira no se puede universalizar. Este mandato es incondicional y no admite doble moral.</p>
      </div>
      `,
      hint: "Busca la primera formulación del imperativo categórico y cómo se aplica.",
      concepts: [
        { term: "imperativo categórico", meaning: "Mandato moral de la razón, válido para todos y sin condiciones." },
        { term: "máxima", meaning: "Regla personal que guía una acción (por ejemplo: «mentiré cuando me convenga»)." },
        { term: "ley universal", meaning: "Norma válida para todos. Una máxima es moral si puede convertirse en ley universal." },
        { term: "universalizar", meaning: "Comprobar si una máxima podría valer para todos sin contradecirse." },
        { term: "incondicional", meaning: "Que no depende de ningún deseo ni condición: obliga siempre." },
        { term: "doble moral", meaning: "Exigir a los demás lo que uno no cumple. El imperativo categórico la excluye." }
      ],
      corollary: [
        "¿Qué pasaría si todos hicieran lo mismo?",
        "Lo moral es lo que puede valer para todos."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🔄 Hipotético o categórico</h4>
        <p>El imperativo hipotético tiene la forma «si quieres X, haz Y»: si quieres aprobar, estudia. Es condicional, porque solo obliga a quien desea ese fin, y pertenece a la habilidad y la prudencia. Quien no roba por temor a un castigo sigue un imperativo hipotético. Quien no roba porque está convencido de que nadie debería hacerlo sigue el imperativo categórico, que es objetivo y vale para todos.</p>
      </div>
      `,
      hint: "Compara los dos tipos de imperativos con el ejemplo de robar.",
      concepts: [
        { term: "imperativo hipotético", meaning: "Mandato condicional: «si quieres X, haz Y». Depende de los deseos de cada uno." },
        { term: "condicional", meaning: "Que obliga solo si se quiere alcanzar cierto fin." },
        { term: "habilidad", meaning: "Ámbito de los imperativos hipotéticos: indican los medios técnicos para lograr un fin." },
        { term: "prudencia", meaning: "Ámbito de los imperativos hipotéticos que buscan el propio bienestar." },
        { term: "castigo", meaning: "Evitar un castigo es un motivo hipotético, no moral, para actuar bien." },
        { term: "objetivo", meaning: "Que vale para todos por igual, sin depender de deseos particulares. Así es el imperativo categórico." }
      ],
      corollary: [
        "El imperativo hipotético depende de lo que deseo.",
        "El imperativo categórico obliga a todos, siempre."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>👤 La humanidad como fin</h4>
        <p>La segunda formulación dice: «Obra de tal modo que trates a la humanidad, tanto en tu persona como en la de cualquier otro, siempre como un fin y nunca solo como un medio». Usar a alguien como herramienta para lograr nuestros objetivos es inmoral. Las personas no tienen precio: tienen dignidad, porque son seres capaces de moralidad. Esta idea es la base de los derechos humanos modernos.</p>
      </div>
      `,
      hint: "Identifica qué diferencia a una persona de una cosa según Kant.",
      concepts: [
        { term: "humanidad", meaning: "La condición racional y moral que comparten todas las personas, incluido uno mismo." },
        { term: "fin", meaning: "Algo valioso en sí mismo. Toda persona debe ser tratada como un fin." },
        { term: "medio", meaning: "Instrumento para lograr otra cosa. Usar a alguien solo como medio es inmoral." },
        { term: "precio", meaning: "Valor de las cosas, que pueden cambiarse por otras. Las personas no tienen precio." },
        { term: "dignidad", meaning: "Valor absoluto e insustituible de cada persona, por ser capaz de moralidad." },
        { term: "derechos humanos", meaning: "Derechos de toda persona por el solo hecho de serlo; se apoyan en la idea kantiana de dignidad." }
      ],
      corollary: [
        "Las cosas tienen precio; las personas, dignidad.",
        "Nunca uses a alguien solo como un medio."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🗽 Autonomía y reino de los fines</h4>
        <p>Los seres racionales somos autónomos: nos damos a nosotros mismos la ley moral. Lo contrario es la heteronomía, cuando la norma viene de fuera, del miedo o de la presión social. Kant imagina un reino de los fines, donde cada persona es a la vez legisladora y súbdita de las mismas leyes. Sus críticos le reprochan el rigorismo, como en el dilema del asesino, en el que Kant sostiene que no se debe mentir ni siquiera para salvar a un amigo.</p>
      </div>
      `,
      hint: "Busca la diferencia entre autonomía y heteronomía y las críticas a Kant.",
      concepts: [
        { term: "autónomos", meaning: "Capaces de darnos nuestra propia ley moral mediante la razón (auto = uno mismo, nomos = ley)." },
        { term: "heteronomía", meaning: "Cuando la norma moral viene de fuera: autoridad, miedo, presión social." },
        { term: "reino de los fines", meaning: "Comunidad ideal donde todos se tratan como fines y obedecen leyes que ellos mismos se dan." },
        { term: "legisladora", meaning: "Cada persona, con su razón, crea las leyes morales universales." },
        { term: "rigorismo", meaning: "Crítica a Kant: sus normas serían demasiado inflexibles y no admitirían excepciones." },
        { term: "dilema del asesino", meaning: "Caso famoso: ¿se puede mentir a un asesino para salvar a un amigo? Kant responde que no." }
      ],
      corollary: [
        "Ser autónomo es obedecer la ley que uno mismo se da.",
        "La firmeza de Kant protege la dignidad, pero se le critica su rigidez."
      ]
    }
  ]
};
