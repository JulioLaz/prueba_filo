// js/caza_conceptos_cassirer.js

window.CONCEPT_HUNT_CONFIG = {
  author: "Ernst Cassirer",
  menuUrl: "https://juliolaz.github.io/prueba_filo/quiz.html?tema=cassirer&theme=cassirer",
  // Niveles
  levels: [
    {
      html: `
      <p>Ernst Cassirer es conocido por su concepto de que el ser humano es un <strong>animal-simbólico</strong>, en lugar de un animal racional. Si bien la razón es importante, lo que nos define es nuestra capacidad para crear y vivir en un mundo de <strong>símbolos</strong>. Estos símbolos (el <strong>lenguaje</strong>, los mitos, el arte, la religión) nos ayudan a construir nuestro universo, a pesar de que la realidad nos resulta inaccesible de forma directa.</p>
      `,
      hint: "Busca los términos clave que definen al ser humano.",
      advanceAfter: 1,
      concepts: [
        { term: "animal-simbólico", meaning: "Concepto de Cassirer que define al ser humano por su capacidad única de crear y usar símbolos." },
        { term: "símbolos", meaning: "Representaciones que utilizamos para dar sentido a la realidad y comunicarnos. Incluyen el lenguaje, el arte, los mitos, etc." },
        { term: "lenguaje", meaning: "El sistema de símbolos más fundamental que usamos para organizar y expresar nuestras ideas." },
        { term: "razón", meaning: "La facultad de pensar lógicamente, que para Cassirer es solo una parte de nuestra capacidad simbólica." },
      ],
      corollary: [
        "El ser humano no solo es un animal racional, sino un animal simbólico.",
        "Los símbolos son las herramientas que usamos para dar forma a nuestra realidad."
      ],
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🕸️ La Red de Símbolos</h4>
        <p>Para Cassirer, el ser humano no vive en un universo puramente físico, sino en un universo simbólico que ha creado a lo largo de la historia. Nos movemos en una <strong>red-de-símbolos</strong>, mitos, imágenes y ritos que nos ayudan a interpretar nuestra experiencia. Esta red nos da <strong>sentido</strong>, pero también puede ser un filtro que distorsiona la realidad. Es como si viéramos el mundo a través de un lente que nosotros mismos diseñamos.</p>
      </div>
      `,
      hint: "Piensa en cómo los símbolos nos afectan en la vida diaria.",
      advanceAfter: 1,
      concepts: [
        { term: "red-de-símbolos", meaning: "La compleja estructura de lenguaje, mitos, arte y religión que nos rodea y a través de la cual interpretamos el mundo." },
        { term: "sentido", meaning: "La significación o propósito que le damos a nuestras vidas y al mundo a través de los símbolos." },
        { term: "realidad", meaning: "El mundo tal como es en sí mismo, que para Cassirer es inaccesible directamente, ya que siempre lo experimentamos a través de nuestros símbolos." },
      ],
      corollary: [
        "Nuestra percepción de la realidad está mediada por los símbolos.",
        "Los símbolos nos dan un sentido de pertenencia y orden."
      ],
    },
  ],
};