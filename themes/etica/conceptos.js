// js/caza_conceptos_etica.js

window.CONCEPT_HUNT_CONFIG = {
  author: "Ética y Filosofía Moral",
  menuUrl: "https://juliolaz.github.io/prueba_filo/quiz.html?tema=etica&theme=etica",
  levels: [
    {
      html: `
      <p>La <strong>ética</strong> es una rama de la filosofía que se ocupa de lo que es <strong>bueno</strong> o <strong>malo</strong>, correcto o incorrecto. Se diferencia de la moral en que la ética es la <strong>reflexión filosófica</strong> sobre los principios y valores, mientras que la <strong>moral</strong> es el conjunto de normas y costumbres de una sociedad. La ética busca los fundamentos de la moral, preguntándose por qué ciertas acciones son consideradas buenas.</p>
      `,
      hint: "Distinguir entre Ética y Moral.",
      advanceAfter: 1,
      concepts: [
        { term: "ética", meaning: "Rama de la filosofía que estudia la moralidad de los actos humanos. Es una reflexión teórica." },
        { term: "moral", meaning: "Conjunto de normas, valores y costumbres que guían la conducta humana en una sociedad. Es la práctica." },
        { term: "bueno", meaning: "Lo que se considera correcto, virtuoso o deseable según un sistema moral." },
        { term: "malo", meaning: "Lo que se considera incorrecto, vicioso o indeseable." },
      ],
      corollary: [
        "La ética es la reflexión, la moral es la práctica.",
        "La ética busca los fundamentos racionales de la moral."
      ],
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🤔 Libertad y Responsabilidad</h4>
        <p>La ética solo puede existir si hay <strong>libertad</strong>. Un acto moral es un acto <strong>libre</strong> e <strong>intencional</strong>. Si no somos libres de elegir, no podemos ser juzgados. La libertad nos hace <strong>responsables</strong> de nuestras acciones, ya que al elegir un camino, somos nosotros quienes debemos asumir sus <strong>consecuencias</strong>. Un dilema ético surge cuando tenemos que elegir entre dos valores en conflicto.</p>
      </div>
      `,
      hint: "Enfócate en los conceptos que hacen posible la ética.",
      advanceAfter: 1,
      concepts: [
        { term: "libertad", meaning: "La capacidad de elegir y tomar decisiones. Es la base de la moralidad." },
        { term: "responsabilidad", meaning: "La obligación de responder por las consecuencias de nuestros actos libres." },
        { term: "intencional", meaning: "Que se realiza con una intención o un propósito consciente." },
        { term: "consecuencias", meaning: "Los resultados o efectos de una acción." },
      ],
      corollary: [
        "Sin libertad, no hay responsabilidad.",
        "La ética estudia los actos libres e intencionales."
      ],
    },
  ],
};