// js/caza_conceptos_pragmatismo.js

window.CONCEPT_HUNT_CONFIG = {
  author: "Charles S. Peirce, William James, John Dewey",
  menuUrl: "https://juliolaz.github.io/prueba_filo/quiz.html?tema=pragmatismo&theme=pragmatismo",
  // Niveles
  levels: [
    {
      html: `
      <p>El <strong>pragmatismo</strong> es una corriente filosófica que surgió en Estados Unidos. Su idea central es que el valor de una <strong>creencia</strong> o de una idea se mide por su <strong>utilidad-práctica</strong>. La <strong>verdad</strong> de una idea no se basa en una realidad abstracta, sino en sus <strong>consecuencias</strong> y en su capacidad para resolver problemas. Si una idea nos ayuda a actuar de manera efectiva, entonces es una idea válida.</p>
      `,
      hint: "Enfócate en la relación entre verdad y utilidad.",
      advanceAfter: 1,
      concepts: [
        { term: "pragmatismo", meaning: "Corriente filosófica que evalúa el valor de las ideas y creencias en función de su utilidad práctica y sus consecuencias." },
        { term: "verdad", meaning: "Para el pragmatismo, la verdad no es algo absoluto, sino una idea que funciona y nos ayuda a interactuar con el mundo de manera efectiva." },
        { term: "utilidad-práctica", meaning: "La capacidad de una idea para ser útil y funcionar en la vida real." },
        { term: "consecuencias", meaning: "Los resultados de una acción o una idea. El pragmatismo las usa como criterio de verdad." },
      ],
      corollary: [
        "La verdad es lo que funciona.",
        "El valor de una idea se mide por su utilidad."
      ],
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🔬 Aplicaciones y Enfoque Científico</h4>
        <p>El pragmatismo ha tenido un gran impacto en el pensamiento científico, la educación y la política. En la ciencia, el <strong>pragmatismo</strong> promueve el <strong>método-científico</strong>, donde las teorías se validan a través de la experimentación y los resultados. En la educación, fomenta un enfoque de <strong>aprendizaje-por-acción</strong>, donde los estudiantes resuelven problemas reales. En la política, prioriza las políticas que demuestran ser <strong>efectivas y beneficiosas</strong>, en lugar de adherirse a ideologías rígidas.</p>
      </div>
      `,
      hint: "Busca cómo el pragmatismo se aplica en la vida real.",
      advanceAfter: 1,
      concepts: [
        { term: "método-científico", meaning: "El proceso de observación, formulación de hipótesis, experimentación y análisis que el pragmatismo considera el camino más seguro hacia el conocimiento." },
        { term: "aprendizaje-por-acción", meaning: "Un enfoque educativo en el que el conocimiento se adquiere a través de la práctica y la resolución de problemas." },
        { term: "efectivas", meaning: "Que producen el efecto deseado. Las políticas públicas se juzgan por sus resultados, no por sus intenciones." },
      ],
      corollary: [
        "El pragmatismo valora el método científico y la experimentación.",
        "Se enfoca en la resolución de problemas prácticos en la educación y la política."
      ],
    },
  ],
};