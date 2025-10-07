// // js/caza_conceptos_hedonismo.js

// window.CONCEPT_HUNT_CONFIG = {
//   author: "Epicuro",
//   menuUrl: "https://juliolaz.github.io/prueba_filo/quiz.html?tema=hedonismo&theme=hedonismo",
//   // Niveles
//   levels: [
//     {
//       html: `
//       <p>El <strong>hedonismo</strong> es una corriente filosófica que considera el <strong>placer</strong> como el único y verdadero <strong>bien</strong>. El fin de la vida es la búsqueda del placer y la evitación del <strong>dolor</strong>. Para los <strong>hedonistas</strong>, la felicidad se encuentra en una vida placentera. Sin embargo, no todos los placeres son iguales. Hay que distinguir entre los que nos dan un bienestar duradero y los que nos causan problemas a largo plazo.</p>
//       `,
//       hint: "Enfócate en la idea principal del hedonismo.",
//       advanceAfter: 1,
//       concepts: [
//         { term: "hedonismo", meaning: "El <strong>hedonismo</strong> es una corriente filosófica que postula que el placer es el fin supremo y el único bien de la vida humana." },
//         { term: "placer", meaning: "El <strong>placer</strong> e una sensación agradable que guía la vida según el hedonismo. Puede ser de distintos tipos y calidades." },
//         { term: "bien", meaning: "El <strong>bien</strong> para el hedonismo es aquello que es valioso, deseable o moralmente correcto." },
//         { term: "dolor", meaning: "El <strong>dolor</strong> para el hedonismo es una sensación desagradable que se busca evitar. Es lo opuesto al placer." },
//       ],
//       corollary: [
//         "El placer es el bien supremo para el hedonismo.",
//         "El objetivo es maximizar el placer y minimizar el dolor."
//       ],
//     },
//     {
//       html: `
//       <div class="highlight-box">
//         <h4>🧘 Ataraxia y Aponía</h4>
//         <p>El hedonismo de <strong>Epicuro</strong> no se centraba en los placeres excesivos, sino en la <strong>serenidad</strong>. El mayor placer es la ausencia de perturbación mental (<strong>ataraxia</strong>) y la ausencia de dolor físico (<strong>aponía</strong>). Para Epicuro, la felicidad se alcanza con un placer moderado, rodeado de buenos amigos, y dedicando tiempo a la reflexión filosófica. No se trata de una vida de excesos, sino de una vida de <strong>autocontrol</strong>.</p>
//       </div>
//       `,
//       hint: "Busca los conceptos que definen el placer epicúreo.",
//       advanceAfter: 1,
//       concepts: [
//         { term: "ataraxia", meaning: "La <strong>ataraxia</strong>es un estado de serenidad y paz mental. Es la ausencia de perturbaciones del alma." },
//         { term: "aponía", meaning: "La <strong>aponía</strong> es un estado de ausencia de dolor físico. Es uno de los objetivos del hedonismo epicúreo." },
//         { term: "serenidad", meaning: "La <strong>serenidad</strong> es tranquilidad, es calma del espíritu." },
//         { term: "autocontrol", meaning: "El <strong>autocontrol</strong> es la capacidad de moderar los propios deseos y pasiones para alcanzar la felicidad a largo plazo." },
//       ],
//       corollary: [
//         "Para Epicuro, la serenidad es el placer más alto.",
//         "La verdadera felicidad se encuentra en la ausencia de dolor y perturbación."
//       ],
//     },
//   ],
// };

window.CONCEPT_HUNT_CONFIG = {
  author: "Epicuro y Utilitaristas",
  menuUrl: "https://juliolaz.github.io/prueba_filo/quiz.html?tema=hedonismo&theme=hedonismo",
  // Niveles
  levels: [
    {
      // Nivel 1: Introducción y Definición
      html: `
      <p>El <strong>hedonismo</strong> es una corriente filosófica que considera el <strong>placer</strong> como el único y verdadero <strong>bien</strong>. El fin de la vida es la búsqueda del placer y la evitación del <strong>dolor</strong>. Para los <strong>hedonistas</strong>, la felicidad se encuentra en una vida placentera. Sin embargo, no todos los placeres son iguales. Hay que distinguir entre los que nos dan un bienestar duradero y los que nos causan problemas a largo plazo.</p>
      `,
      hint: "Enfócate en la idea principal del hedonismo y su meta.",
      advanceAfter: 1,
      concepts: [
        { term: "hedonismo", meaning: "El <strong>hedonismo</strong> es una corriente filosófica que postula que el placer es el fin supremo y el único bien de la vida humana." },
        { term: "placer", meaning: "El <strong>placer</strong> es una sensación agradable que guía la vida según el hedonismo. Puede ser de distintos tipos y calidades." },
        { term: "bien", meaning: "El <strong>bien</strong> para el hedonismo es aquello que es valioso, deseable o moralmente correcto, identificado con el placer." },
        { term: "dolor", meaning: "El <strong>dolor</strong> es una sensación desagradable que se busca evitar. Es lo opuesto al placer y una perturbación que impide la felicidad." }
      ],
      corollary: [
        "El placer es el bien supremo para el hedonismo.",
        "El objetivo es maximizar el placer y minimizar el dolor."
      ],
    },
    {
      // Nivel 2: Epicuro (Hedonismo de la Calma)
      html: `
      <div class="highlight-box">
        <h4>🧘 Hedonismo Epicúreo: Placer en la Calma</h4>
        <p>El hedonismo de <strong>Epicuro</strong> no se centraba en los placeres excesivos, sino en la <strong>serenidad</strong>. El mayor placer es la ausencia de perturbación mental (<strong>ataraxia</strong>) y la ausencia de dolor físico (<strong>aponía</strong>). Para Epicuro, la felicidad se alcanza con un placer moderado, rodeado de buenos amigos, y dedicando tiempo a la reflexión filosófica. No se trata de una vida de excesos, sino de una vida de <strong>autocontrol</strong>.</p>
      </div>
      `,
      hint: "Busca los conceptos que definen el placer epicúreo, las 'ausencias' clave.",
      advanceAfter: 1,
      concepts: [
        { term: "Epicuro", meaning: "Filósofo griego, principal representante del hedonismo clásico. Defendió el placer como la ausencia de dolor y perturbación." },
        { term: "serenidad", meaning: "La <strong>serenidad</strong> es la tranquilidad, la calma del espíritu. Para Epicuro, es el estado de mayor placer." },
        { term: "ataraxia", meaning: "La <strong>ataraxia</strong> es un estado de serenidad y paz mental. Es la ausencia de perturbaciones del alma o de miedos (a los dioses, a la muerte)." },
        { term: "aponía", meaning: "La <strong>aponía</strong> es un estado de ausencia de dolor físico. Es uno de los dos objetivos principales del hedonismo epicúreo." }
      ],
      corollary: [
        "Para Epicuro, la serenidad es el placer más alto (placer catastemático).",
        "La verdadera felicidad se encuentra en la ausencia de dolor y perturbación."
      ],
    },
    {
      // Nivel 3: Tipos de Placeres según Epicuro
      html: `
      <p>Epicuro clasificó los placeres para enseñar el <strong>autocontrol</strong>. Distinguió los placeres <strong>naturales</strong> y <strong>necesarios</strong> (como comer cuando se tiene hambre), los <strong>naturales</strong> y <strong>no necesarios</strong> (como comer manjares caros) y los <strong>no</strong> <strong>naturales</strong> ni <strong>necesarios</strong> (como la búsqueda de fama o riqueza). El sabio debe enfocarse en satisfacer los <strong>necesarios</strong> y desechar los demás, pues solo estos conducen a la <strong>aponía</strong> y la <strong>ataraxia</strong>.</p>
      `,
      hint: "Identifica las categorías de placeres y cuál es la meta principal de la clasificación.",
      advanceAfter: 1,
      concepts: [
        { term: "autocontrol", meaning: "La moderación y dominio de los deseos. Es clave para elegir los placeres correctos y evitar el sufrimiento futuro." },
        { term: "naturales", meaning: "Placeres que surgen de forma inherente a la naturaleza humana. Se combinan con 'necesarios' o 'no necesarios'." },
        { term: "necesarios", meaning: "Placeres básicos para la vida (comer, beber, dormir). Su satisfacción elimina el dolor y es fácil de lograr. Es el enfoque principal del sabio." }
      ],
      corollary: [
        "El placer más elevado se encuentra en la eliminación de la necesidad, satisfaciendo lo indispensable.",
        "La filosofía de Epicuro es una 'terapia' para el alma."
      ],
    },
    {
      // Nivel 4: El Hedonismo Utilitarista (Social)
      html: `
      <div class="highlight-box">
        <h4>⚖️ Hedonismo Moderno: El Utilitarismo</h4>
        <p>Una forma moderna de hedonismo es el <strong>utilitarismo</strong>. Para pensadores como <strong>Mill</strong> y Bentham, la acción correcta es aquella que produce la mayor cantidad de <strong>felicidad</strong> para el mayor número de personas. A diferencia de Epicuro, que buscaba el placer individual, el utilitarismo se enfoca en un <strong>cálculo</strong> <strong>hedonista</strong> social. Se distingue, además, entre placeres <strong>superiores</strong> (intelectuales) e <strong>inferiores</strong> (sensuales).</p>
      </div>
      `,
      hint: "Busca los términos clave del hedonismo ético social y sus figuras.",
      advanceAfter: 1,
      concepts: [
        { term: "utilitarismo", meaning: "Forma moderna de hedonismo que postula que la moralidad de un acto reside en su capacidad de producir la mayor felicidad para el mayor número de personas." },
        { term: "Mill", meaning: "John Stuart <strong>Mill</strong>, filósofo utilitarista. Introdujo la distinción de la calidad de los placeres, priorizando los intelectuales." },
        { term: "felicidad", meaning: "En el utilitarismo, la <strong>felicidad</strong> es sinónimo de placer y ausencia de dolor, pero se busca a nivel colectivo." },
        { term: "cálculo", meaning: "Parte de la frase 'cálculo hedonista', que se refiere al método para medir el placer y el dolor de una acción, buscando el resultado óptimo social." },
        { term: "superiores", meaning: "Placeres de alta calidad según Mill, principalmente intelectuales, morales y estéticos. Son preferibles a los placeres sensuales." },
      ],
      corollary: [
        "El utilitarismo traslada el objetivo del placer individual al placer colectivo.",
        "La acción moral es la que maximiza el placer y minimiza el dolor social."
      ],
    },
  ],
};