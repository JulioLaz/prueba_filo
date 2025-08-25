// js/caza_conceptos_sartre.js
window.CONCEPT_HUNT_CONFIG = {
  levels: [
    {
      // 1) Tesis central
      html: `
      <p><em>El existencialismo sartreano afirma que <strong>la existencia precede a la esencia</strong>: primero existimos y luego, mediante nuestras <strong>elecciones</strong>, nos definimos. No hay una “naturaleza humana” prefijada que nos dicte quiénes somos. De ahí la tesis: <strong>estamos condenados a ser libres</strong>. La libertad no es un privilegio cómodo sino una <strong>carga de responsabilidad</strong> que nos expone a la <strong>angustia</strong>, el <strong>desamparo</strong> y la <strong>desesperación</strong>.</em></p>
      `,
      hint: "Fijate en pares clave: existencia/esencia, libertad/responsabilidad.",
      advanceAfter: 2, 
      concepts: [
        {
          term: "existencia precede a la esencia",
          meaning:
            "No hay naturaleza humana dada: primero existís y al elegir te definís.",
        },
        {
          term: "elecciones",
          meaning:
            "Actos con los que te vas definiendo; elegir es inevitable para Sartre.",
        },
        {
          term: "condenados a ser libres",
          meaning:
            "La libertad no se elige: ‘cae’ sobre nosotros; siempre estamos eligiendo.",
        },
        {
          term: "responsabilidad",
          meaning:
            "Cargar con el sentido de lo que elegís; no podés culpar una esencia previa.",
        },
        {
          term: "angustia",
          meaning:
            "Lucidez de que tus decisiones te constituyen; vértigo ante tu libertad.",
        },
        {
          term: "desamparo",
          meaning:
            "No hay valores dados ‘desde afuera’; debés crearlos al actuar.",
        },
        {
          term: "desesperación",
          meaning:
            "Actuar considerando solo lo que depende de vos, sin garantías externas.",
        },
      ],
    },
    {
      // 2) Ontología: en-sí / para-sí / nada
      html: `
      <div class="highlight-box">
        <h4>🧩 Ontología básica: ser-en-sí, ser-para-sí y la nada</h4>
        <p>Sartre distingue niveles del ser para explicar la libertad:</p>
        <ul>
          <li><strong>Ser-en-sí (en-soi)</strong>: lo de las cosas; pleno, opaco, sin fisuras ni proyectos.</li>
          <li><strong>Ser-para-sí (pour-soi)</strong>: la conciencia humana; se abre como posibilidad.</li>
          <li><strong>La nada (néant)</strong>: distancia que la conciencia introduce y que permite elegir.</li>
        </ul>
        <p>La libertad no es una propiedad adicional: <strong>es la estructura misma del para-sí</strong>.</p>
      </div>
      `,
      hint: "Tres nociones-llave: en-sí, para-sí, nada.",
      concepts: [
        {
          term: "ser-en-sí",
          meaning:
            "Modo de ser de las cosas: pleno, sin proyectos ni reflexión.",
        },
        {
          term: "ser-para-sí",
          meaning:
            "Conciencia humana: apertura, posibilidad, proyecto y auto-superación.",
        },
        {
          term: "la nada",
          meaning:
            "Vacío/hiato que introduce la conciencia y que hace posible elegir.",
        },
        {
          term: "libertad como estructura del para-sí",
          meaning:
            "La libertad no es un ‘extra’; define cómo es la conciencia misma.",
        },
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
      concepts: [
        {
          term: "facticidad",
          meaning:
            "Lo dado: cuerpo, pasado, situación; no lo elegís, pero lo asumís.",
        },
        {
          term: "trascendencia",
          meaning:
            "Superar lo dado mediante tu proyecto; reinterpretar la facticidad.",
        },
        {
          term: "proyecto",
          meaning:
            "Estructura intencional de tus actos que da sentido a tu vida.",
        },
      ],
    },
    {
      // 4) Mala fe vs autenticidad
      html: `
      <div class="highlight-box">
        <h4>🪞 Mala fe (autoengaño) vs. autenticidad</h4>
        <p><strong>Mala fe</strong>: estrategia para escapar de la angustia negando mi libertad; <strong>autenticidad</strong>: asumirla y responder por mis actos.</p>
        <ul>
          <li><em>Ejemplo del camarero</em>: se oculta en el rol para no decidir más allá del guion.</li>
          <li><em>Ejemplo de la pareja</em>: evita reconocer su elección afectiva.</li>
        </ul>
      </div>
      `,
      hint: "¿Dónde te escondés para no elegir? Eso es mala fe.",
      concepts: [
        {
          term: "mala fe",
          meaning:
            "Autoengaño para evadir tu libertad (‘no pude’, ‘me hicieron’).",
        },
        {
          term: "autenticidad",
          meaning:
            "Reconocer tu libertad situada y sostener un proyecto propio.",
        },
        {
          term: "rol",
          meaning:
            "Papel social que puede usarse para evadir la responsabilidad de elegir.",
        },
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
      concepts: [
        {
          term: "mirada del Otro",
          meaning:
            "Efecto por el cual me descubro como objeto ante la conciencia ajena.",
        },
        {
          term: "objetivación",
          meaning:
            "Ser reducido a cosa; perder la vivencia de tu proyecto libre.",
        },
        {
          term: "intersubjetividad",
          meaning:
            "Campo donde se cruzan libertades; conflicto, reconocimiento, co-creación.",
        },
      ],
    },
    {
      // 6) Ética existencial
      html: `
      <div class="highlight-box">
        <h4>🧠 Ética existencial</h4>
        <p>Sin reglas dadas, <strong>decidir</strong> crea valor. En el acto proponés una imagen de humanidad para cualquiera en situación semejante.</p>
      </div>
      `,
      hint: "Elegir = instituir valor (para vos y como ejemplo).",
      concepts: [
        {
          term: "creación de valores",
          meaning:
            "Tus decisiones instituyen valores en lugar de recibirlos ya hechos.",
        },
        {
          term: "universalidad encarnada",
          meaning:
            "Lo que elegís para vos, de hecho proponés que sea imitable por otros.",
        },
        {
          term: "responsabilidad radical",
          meaning:
            "Responder por el sentido que tus elecciones le imprimen a la vida propia y común.",
        },
      ],
    },
  ],
};
