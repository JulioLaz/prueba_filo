// js/caza_conceptos_etica_kant.js

window.CONCEPT_HUNT_CONFIG = {
  author: "Immanuel Kant",
  menuUrl: "https://juliolaz.github.io/prueba_filo/quiz.html?tema=etica_kant&theme=etica_kant",
  // Niveles
  levels: [
    {
      html: `
      <p>La ética de Kant se conoce como <strong>ética-deontológica</strong>, del griego <em>deon</em>, que significa 'deber'. Kant no se enfoca en las <strong>consecuencias</strong> de las acciones, sino en la <strong>intención</strong> y el <strong>deber</strong>. Para él, una acción es moralmente buena si se realiza por respeto al <strong>deber</strong>, no por inclinación o por buscar un resultado favorable. La única cosa buena sin restricción es una <strong>buena-voluntad</strong>.</p>
      `,
      hint: "Busca la base de la ética kantiana.",
      advanceAfter: 1,
      concepts: [
        { term: "ética-deontológica", meaning: "Teoría ética que juzga la moralidad de una acción basándose en el deber o las reglas, no en sus consecuencias." },
        { term: "deber", meaning: "La obligación moral de realizar una acción, independientemente de sus consecuencias." },
        { term: "intención", meaning: "El motivo o la razón detrás de una acción. Para Kant, es lo que determina el valor moral de un acto." },
        { term: "buena-voluntad", meaning: "La única cosa que es buena en sí misma, sin ninguna restricción. Es la voluntad que actúa por respeto al deber." },
      ],
      corollary: [
        "Para Kant, la moralidad de una acción está en la intención.",
        "Una acción es moral si se hace por deber, no por sus resultados."
      ],
    },
    {
      html: `
      <div class="highlight-box">
        <h4>📜 El Imperativo Categórico</h4>
        <p>El principio central de la ética de Kant es el <strong>imperativo-categórico</strong>. Este es un mandato universal y absoluto de la razón que debemos seguir sin excepciones. Su primera formulación es: “Actúa solo según una <strong>máxima</strong> tal que puedas querer al mismo tiempo que se convierta en <strong>ley-universal</strong>”. Esto significa que una acción solo es moral si quisiéramos que todas las personas, en todas las situaciones, la siguieran.</p>
      </div>
      `,
      hint: "Entiende el principio moral fundamental de Kant.",
      advanceAfter: 1,
      concepts: [
        { term: "imperativo-categórico", meaning: "Un principio moral incondicional y universal que nos obliga a actuar de cierta manera sin importar las consecuencias. Es la ley moral de la razón." },
        { term: "máxima", meaning: "La regla o principio subjetivo que guía tu acción. Es como la razón personal que tienes para hacer algo." },
        { term: "ley-universal", meaning: "Una regla que se aplica a todos los seres racionales en todas las situaciones." },
      ],
      corollary: [
        "El imperativo categórico es la ley moral universal de Kant.",
        "Pregúntate: ¿podría mi acción convertirse en una ley para todos?"
      ],
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🤝 La Humanidad como Fin en Sí Misma</h4>
        <p>Una segunda formulación del <strong>imperativo categórico</strong> dice: “Actúa de tal modo que uses a la humanidad, tanto en tu persona como en la persona de cualquier otro, siempre al mismo tiempo como un <strong>fin</strong> y nunca simplemente como un <strong>medio</strong>”. Esto nos enseña que cada persona tiene una <strong>dignidad</strong> infinita y no puede ser utilizada como un simple objeto para lograr nuestros fines. Esto es la base de los derechos humanos y del respeto que debemos a los demás.</p>
      </div>
      `,
      hint: "Enfócate en la relación con los demás.",
      advanceAfter: 1,
      concepts: [
        { term: "fin", meaning: "Algo que tiene valor en sí mismo. Para Kant, la humanidad es un fin en sí misma." },
        { term: "medio", meaning: "Algo que se utiliza para lograr otro propósito." },
        { term: "dignidad", meaning: "El valor intrínseco e incondicional que cada ser humano posee, simplemente por ser un ser racional." },
        { term: "humanidad", meaning: "Para Kant, el conjunto de todos los seres racionales." },
      ],
      corollary: [
        "Nunca trates a las personas como un simple medio.",
        "La dignidad humana es el valor supremo."
      ],
    },
  ],
};