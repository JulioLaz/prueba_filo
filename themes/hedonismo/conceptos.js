// js/caza_conceptos_hedonismo.js

window.CONCEPT_HUNT_CONFIG = {
  author: "Epicuro",
  menuUrl: "https://juliolaz.github.io/prueba_filo/quiz.html?tema=hedonismo&theme=hedonismo",
  // Niveles
  levels: [
    {
      html: `
      <p>El <strong>hedonismo</strong> es una corriente filosófica que considera el <strong>placer</strong> como el único y verdadero <strong>bien</strong>. El fin de la vida es la búsqueda del placer y la evitación del <strong>dolor</strong>. Para los <strong>hedonistas</strong>, la felicidad se encuentra en una vida placentera. Sin embargo, no todos los placeres son iguales. Hay que distinguir entre los que nos dan un bienestar duradero y los que nos causan problemas a largo plazo.</p>
      `,
      hint: "Enfócate en la idea principal del hedonismo.",
      advanceAfter: 1,
      concepts: [
        { term: "hedonismo", meaning: "Corriente filosófica que postula que el placer es el fin supremo y el único bien de la vida humana." },
        { term: "placer", meaning: "Sensación agradable que guía la vida según el hedonismo. Puede ser de distintos tipos y calidades." },
        { term: "bien", meaning: "Aquello que es valioso, deseable o moralmente correcto." },
        { term: "dolor", meaning: "Sensación desagradable que se busca evitar. Es lo opuesto al placer." },
      ],
      corollary: [
        "El placer es el bien supremo para el hedonismo.",
        "El objetivo es maximizar el placer y minimizar el dolor."
      ],
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🧘 Ataraxia y Aponía</h4>
        <p>El hedonismo de <strong>Epicuro</strong> no se centraba en los placeres excesivos, sino en la <strong>serenidad</strong>. El mayor placer es la ausencia de perturbación mental (<strong>ataraxia</strong>) y la ausencia de dolor físico (<strong>aponía</strong>). Para Epicuro, la felicidad se alcanza con un placer moderado, rodeado de buenos amigos, y dedicando tiempo a la reflexión filosófica. No se trata de una vida de excesos, sino de una vida de <strong>autocontrol</strong>.</p>
      </div>
      `,
      hint: "Busca los conceptos que definen el placer epicúreo.",
      advanceAfter: 1,
      concepts: [
        { term: "ataraxia", meaning: "Estado de serenidad y paz mental. Es la ausencia de perturbaciones del alma." },
        { term: "aponía", meaning: "Estado de ausencia de dolor físico. Es uno de los objetivos del hedonismo epicúreo." },
        { term: "serenidad", meaning: "Tranquilidad, calma del espíritu." },
        { term: "autocontrol", meaning: "La capacidad de moderar los propios deseos y pasiones para alcanzar la felicidad a largo plazo." },
      ],
      corollary: [
        "Para Epicuro, la serenidad es el placer más alto.",
        "La verdadera felicidad se encuentra en la ausencia de dolor y perturbación."
      ],
    },
  ],
};