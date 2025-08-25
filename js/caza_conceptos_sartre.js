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
      <p><em>El existencialismo sartreano afirma que <strong>la existencia precede a la esencia</strong>: primero existimos y luego, mediante nuestras <strong>elecciones</strong>, nos definimos. No hay una “naturaleza humana” prefijada que nos dicte quiénes somos. De ahí la tesis: <strong>estamos condenados a ser libres</strong>. La libertad no es un privilegio cómodo sino una <strong>carga de responsabilidad</strong> que nos expone a la <strong>angustia</strong>, el <strong>desamparo</strong> y la <strong>desesperación</strong>.</em></p>
      `,
      hint: "Fijate en palabras clave como: existencia, esencia...",
      // Podés permitir avanzar aunque falten algunos (útil en clase)
      advanceAfter: 1,
      concepts: [
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
        { term: "nada", meaning: "Nada: Hiato que introduce la conciencia y que hace posible elegir." },
        { term: "libertad", meaning: "Libertad: Estructura del para-sí, no un extra añadido." },
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
        <p><strong>Facticidad</strong>: condiciones dadas (cuerpo, historia, contexto). <strong>Trascendencia</strong>: el <em>proyecto</em> que elaboro sobre esas condiciones.</p>
        <ul>
          <li>No elijo mis cartas, pero elijo <strong>cómo jugarlas</strong>.</li>
          <li>La libertad <strong>no niega</strong> la facticidad: la <strong>asume</strong> y la reinterpreta.</li>
        </ul>
      </div>
      `,
      hint: "Diferenciá lo dado y lo que proyectás sobre ello.",
      advanceAfter: 1,
      concepts: [
        { term: "facticidad", meaning: "Lo dado: cuerpo, pasado, situación." },
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
        { term: "rol", meaning: "Papel social usado para evadir responsabilidad de elegir." },
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
      ],
      corollary: [
        "la mirada del Otro me revela como objeto",
        "la intersubjetividad cruza libertades"
      ],
    },

    {
      // 6) Ética existencial
      html: `
      <div class="highlight-box">
        <h4>🧠 Ética existencial</h4>
        <p>Sin reglas dadas, <strong>decidir</strong> crea <strong>valor</strong>. En el acto proponés una imagen de humanidad para cualquiera en situación semejante.</p>
      </div>
      `,
      hint: "Elegir = instituir valor (para vos y como ejemplo).",
      advanceAfter: 1,
      concepts: [
        { term: "decidir", meaning: "El acto funda valor, no lo recibe hecho." },
        { term: "valor", meaning: "valores: Instituidos por la acción, no heredados sin más." },
        // { term: "universalidad", meaning: "Lo que elegís propone ejemplo a otros." },
        // { term: "responsabilidad", meaning: "Responder por el sentido impreso a la vida propia y común." },
      ],
      corollary: [
        "decidir crea valor",
        "lo que elegís propone ejemplo a otros",
        "responsabilidad radical por el sentido"
      ],
    },
  ],
};

// ————————————————————————————————————————————————————————————————
// Nota de integración (no necesaria si tu motor ya lo hace):
// 1) Al iniciar cada nivel, construí un Set de términos válidos:
//    const valid = new Set(level.concepts.map(c => normalizeTerm(c.term)));
//
// 2) En el handler de selección (tap/drag), usá:
//    if (CONFIG.mobileSelectionGuard && !CONFIG.isValidSelectionFn(sel, valid)) { feedback('Seleccioná una palabra clave'); return; }
//
// 3) Para el match final:
//    const hit = normalizeTerm(sel);
//    const found = level.concepts.find(c => normalizeTerm(c.term) === hit);
//
// 4) Al completar todos los términos del nivel, mostrá level.corollary.
// ————————————————————————————————————————————————————————————————
