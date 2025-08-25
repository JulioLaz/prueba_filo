// js/caza_conceptos_sartre.js
// ————————————————————————————————————————————————————————————————
// Config listo para móvil: solo términos "tap-eables" y frases-corolario
// ————————————————————————————————————————————————————————————————

/**
 * Normaliza texto para comparación:
 * - minúsculas
 * - sin diacríticos (tildes)
 * - sin puntuación de borde
 * - guion estándar
 * - trim
 */
function normalizeTerm(str) {
  if (!str) return "";
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    // .replace(/[\u2013\u2014]/g, "-")         // guiones largos → guion simple
    .replace(/[.,;:!?¿¡()"']/g, "")          // puntación común
    .trim();
}

/**
 * Valida selección para móvil:
 * - Debe corresponder a un término definido (tras normalizar)
 * - Rechaza frases arbitrarias no listadas
 */
function isValidMobileSelection(sel, validSet) {
  const n = normalizeTerm(sel);
  if (!n) return false;
  // Evita falsos positivos cuando el user arrastra espacios/puntuación
  // Solo se acepta si está en el set de términos permitidos
  return validSet.has(n);
}

window.CONCEPT_HUNT_CONFIG = {
  // Motor: usá estas utilidades para comparar selección vs términos
  // normalizeFn: normalizeTerm,
  // allowOnlyDefined: true,         // Restringir a términos definidos en cada nivel
  // mobileSelectionGuard: true,     // Aplicar isValidMobileSelection en onSelect
  // isValidSelectionFn: isValidMobileSelection,
// AUTOR
  author: "Jean-Paul Sartre",
  menuUrl: "sartre.html",   // 👈 a dónde volver con el botón
  menuUrl: "https://juliolaz.github.io/prueba_filo/quiz.html?tema=sartre&theme=sartre",
  // Niveles
  levels: [
    {
      // 1) Tesis central — SOLO PALABRAS CLAVE para tap en móvil
      html: `
      <p><em>El <strong>existencialismo</strong> de J.P. Sartre afirma que <strong>la existencia precede a la esencia</strong>: primero existimos y luego, mediante nuestras <strong>elecciones</strong>, nos definimos. No hay una <strong>“naturaleza humana”</strong> prefijada que nos dicte quiénes somos. De ahí la tesis: <strong>estamos condenados a ser libres</strong>. La libertad no es un privilegio cómodo sino una <strong>carga de responsabilidad</strong> que nos expone a la <strong>angustia</strong>, el <strong>desamparo</strong> y la <strong>desesperación</strong>.</em></p>
      `,
      hint: "Fijate en palabras clave como: existencia, esencia...",
      // Podés permitir avanzar aunque falten algunos (útil en clase)
      advanceAfter: 1,
      concepts: [
        { term: "existencialismo", meaning: "El existencialismo es una corriente filosófica que se centra en la existencia individual, la libertad y la responsabilidad. Su idea principal es que la existencia precede a la esencia." },
        { term: "naturaleza", meaning: "Aunque no hay una naturaleza humana predeterminada, Sartre sí habla de la condición humana. Esta es el conjunto de límites universales que compartimos todos los seres humanos por el simple hecho de existir en el mundo. Estos límites son:\n● Estar en el mundo.\n● Tener que trabajar.\n● Vivir entre otros.\n● Ser mortal." },
        { term: "existencia", meaning: "Primero existís; no hay esencia previa que te determine." },
        { term: "esencia", meaning: "No viene dada; se construye con tus elecciones." },
        { term: "elecciones", meaning: "Actos con los que te definís; elegir es inevitable para Sartre." },
        { term: "libertad", meaning: "No es opcional: estamos arrojados a elegir." },
        { term: "responsabilidad", meaning: "Responder por lo que elegís; sin excusas en una esencia previa." },
        { term: "angustia", meaning: "Lucidez/vértigo de que tus decisiones te constituyen." },
        { term: "desamparo", meaning: "No hay valores dados ‘desde afuera’; debés crearlos al actuar." },
        { term: "desesperación", meaning: "Actuar según lo que depende de vos, sin garantías externas." },
      ],
      // Se muestra al completar todos los términos del nivel
      corollary: [
        "la existencia precede a la esencia",
        "estamos condenados a ser libres",
        "la libertad implica responsabilidad"
      ],
    },

    {
      // 2) Ontología: ser-en-sí / ser-para-sí / nada — tokens con guion para tap
      html: `
      <div class="highlight-box">
        <h4>🧩 Ontología básica: Ser en sí, Ser para sí y la nada</h4>
        <p>Sartre distingue niveles del ser para explicar la libertad:</p>
        <ul>
          <li><strong>Ser en sí</strong>: lo de las cosas; pleno, opaco, sin fisuras ni proyectos.</li>
          <li><strong>Ser para sí</strong>: la conciencia humana; se abre como posibilidad.</li>
          <li>La <strong>nada</strong>: distancia que la conciencia introduce y que permite elegir.</li>
        </ul>
        <p>La <strong>libertad</strong> no es una propiedad adicional: <strong>es la estructura misma del para-sí</strong>.</p>
      </div>
      `,
      hint: "Tres nociones-llave: ser-en-sí, ser-para-sí, nada.",
      advanceAfter: 1,
      concepts: [
        { term: "Ser", meaning: "Ser-en-sí: Modo de ser de las cosas: pleno, sin proyectos ni reflexión.\nSer-para-sí: Conciencia humana: apertura, posibilidad, proyecto, auto-superación." },
        // { term: "Ser_para_sí", meaning: "Conciencia humana: apertura, posibilidad, proyecto, auto-superación." },
        { term: "nada", meaning: "La nada es, en este contexto, ese espacio vacío que la conciencia introduce. Es como un hiato o una pausa que se interpone entre lo que eres ahora y tus posibilidades.\nSin ese hiato (sin la nada), serías como una cosa: tu futuro estaría predeterminado por tu presente. Si eres un estudiante, solo podrías ser un estudiante para siempre. No habría lugar para la elección.\nCon el hiato (con la nada), la elección es posible: La nada te permite "negar" lo que eres en el presente y proyectarte hacia el futuro. Te da la libertad de decir no soy solo esto y decidir qué quieres ser.\nEn resumen, la nada no es la nada absoluta como un vacío de la nada, sino una fuerza activa que proviene de nuestra conciencia y que nos libera de ser simplemente objetos determinados. Es lo que nos permite elegir, crear nuestro propio camino y, en última instancia, ser libres." },
        { term: "libertad", meaning: "Estructura del para-sí, no un extra añadido." },
      ],
      corollary: [
        "la libertad es estructura del para-sí",
        "la nada abre distancia y posibilidad"
      ],
    },

    {
      // 3) Facticidad / Trascendencia / Proyecto
      html: `
      <div class="highlight-box">
        <h4>🧭 Facticidad, trascendencia y proyecto</h4>
        <p><strong>Facticidad</strong>: condiciones dadas (cuerpo, historia, contexto).</p>
        <p><strong>Trascendencia</strong>: el <em>proyecto</em> que elaboro sobre esas condiciones.</p>
        <ul>
          <li>No elijo mis cartas, pero elijo <strong>cómo jugarlas</strong>.</li>
          <li>La libertad <strong>no niega</strong> la facticidad: la <strong>asume</strong> y la reinterpreta.</li>
        </ul>
      </div>
      `,
      hint: "Diferenciá lo dado y lo que proyectás sobre ello.",
      advanceAfter: 1,
      concepts: [
        { term: "facticidad", meaning: " Lo dado: el conjunto de cartas que te tocaron en la vida. Son los aspectos de tu existencia que no elegiste, pero que son tu punto de partida. Incluye:\n* Tu cuerpo (la altura, el color de ojos).\n* Tu pasado (dónde naciste, tu familia).\n* Tu situación (el contexto social y la época en que vives).\nLa facticidad es el marco sobre el cual tu libertad actúa." },
        { term: "trascendencia", meaning: "Superar lo dado mediante tu proyecto; reinterpretar la facticidad." },
        { term: "proyecto", meaning: "Estructura de actos que orienta y da sentido a tu vida." },
      ],
      corollary: [
        "no elegís las cartas, elegís cómo jugarlas",
        "la libertad asume y resignifica lo dado"
      ],
    },

    {
      // 4) Mala fe vs autenticidad — tokens únicos para móvil
      html: `
      <div class="highlight-box">
        <h4>🪞 Mala fe (<strong>autoengaño</strong>) vs. <strong>autenticidad</strong></h4>
        <p><strong>Mala fe</strong>: estrategia para escapar de la angustia negando mi libertad; <strong>autenticidad</strong>: asumirla y responder por mis actos.</p>
        <ul>
          <li><em>Ejemplo del camarero</em>: se oculta en el <strong>rol</strong> para no decidir más allá del guion.</li>
          <li><em>Ejemplo de la pareja</em>: evita reconocer su elección afectiva.</li>
        </ul>
      </div>
      `,
      hint: "¿Dónde te escondés para no elegir? Eso es mala fe.",
      advanceAfter: 1,
      concepts: [
        { term: "autoengaño", meaning: "Mecanismo de evasión: ‘no pude’, ‘me hicieron’." },
        { term: "autenticidad", meaning: "Asumir tu libertad situada y sostener un proyecto propio." },
        // { term: "rol", meaning: "Papel social usado para evadir responsabilidad de elegir." },
      ],
      corollary: [
        "mala fe: negar tu libertad para evitar decidir",
        "autenticidad: asumir tu libertad situada"
      ],
    },
    {
      // 5) El Otro y la mirada
      html: `
      <div class="highlight-box">
        <h4>👁️ El Otro y la mirada</h4>
        <p>La <strong>mirada del Otro</strong> puede objetivarnos (vergüenza), pero también revela nuestra relación con los demás.</p>
      </div>
      `,
      hint: "Atendé a ‘mirada’ y ‘objetivación’.",
      advanceAfter: 1,
      concepts: [
        { term: "mirada", meaning: "Me descubro como objeto ante la conciencia ajena." },
        { term: "objetivarnos", meaning: "objetivacion: Ser reducido a cosa; perder la vivencia de proyecto libre." }, // sin tilde para normalizar
        { term: "revela", meaning: "intersubjetividad: Cruce de libertades: conflicto, reconocimiento, co-creación." },
        { term: "Otro", meaning: "En la filosofía de Sartre, el Otro es mucho más que una persona diferente a mí. Es una conciencia separada y libre que coexiste con la mía. Su existencia es fundamental porque me revela mi propia existencia de una manera que yo mismo no puedo." },
      ],
      corollary: [
        "la mirada del Otro me revela como objeto",
        "Otro es esa conciencia ajena que me permite salir de mi propia perspectiva y verme a mí mismo como un objeto en el mundo, un paso esencial para la autoconciencia y la libertad.",
        "la intersubjetividad cruza libertades: La intersubjetividad es el espacio donde las conciencias y las libertades de dos o más individuos se encuentran. Sartre argumenta que no existimos de forma aislada; nuestra libertad no se ejerce en el vacío, sino en un mundo compartido con otros."
      ],
    },

    {
      // 6) Ética existencial
      html: `
      <div class="highlight-box">
        <h3>🧠 Ética existencial</h3>
        <h4>La Creación de Valor y la Responsabilidad Universal</h4>
        <p>Sin reglas dadas, <strong>decidir</strong> crea <strong>valor</strong>. En el acto proponés una imagen de humanidad para cualquiera en situación semejante.</p>
      </div>
      `,
      hint: "Elegir = instituir valor (para vos y como ejemplo).",
      advanceAfter: 1,
      concepts: [
        { term: "decidir", meaning: "El acto funda valor, no lo recibe hecho." },
        { term: "valor", meaning: "valores: Instituidos por la acción, no heredados sin más." },
        { term: "Universal", meaning: "Lo que elegís propone ejemplo a otros." },
        { term: "Responsabilidad", meaning: "Responder por el sentido impreso a la vida propia y común." },
      ],
      corollary: [
        "decidir crea valor",
        "lo que elegís propone ejemplo a otros",
        "responsabilidad radical por el sentido",
        "Cuando un individuo elige, no lo hace solo para sí mismo. Sartre dice que, al elegir, uno se convierte en un legislador, un creador de valor para toda la humanidad. Cada decisión es un reflejo de la imagen de ser humano que, en ese momento, se considera digna de ser universal."
      ],
    },
  ],
};