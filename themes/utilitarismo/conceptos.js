// js/caza_conceptos_utilitarismo.js

window.CONCEPT_HUNT_CONFIG = {
  author: "John Stuart Mill",
  menuUrl: "https://juliolaz.github.io/prueba_filo/quiz.html?tema=utilitarismo&theme=utilitarismo",
  // Niveles
  levels: [
    {
      // 1) Principio fundamental
      html: `
      <p>El <strong>utilitarismo</strong> de J. S. Mill se basa en un solo principio: <strong>el Principio de la Mayor Felicidad</strong>. Según este, las acciones son correctas si tienden a promover la <strong>felicidad</strong>; e incorrectas si producen lo contrario. El objetivo es <strong>maximizar</strong> la mayor cantidad de bienestar para el <strong>mayor número de personas</strong>. Lo que realmente importa son las <strong>consecuencias</strong> de nuestras acciones, no las intenciones.</p>
      `,
      hint: "Enfócate en las ideas de felicidad, consecuencias y el mayor número.",
      advanceAfter: 1,
      concepts: [
        { term: "utilitarismo", meaning: "Filosofía moral que sostiene que la acción correcta es la que produce la mayor felicidad o bienestar para el mayor número de personas afectadas." },
        { term: "felicidad", meaning: "En la ética de Mill, la felicidad se entiende como 'placer y ausencia de dolor'." },
        { term: "consecuencias", meaning: "Los resultados o efectos de una acción. Para el utilitarismo, son el único criterio para juzgar la moralidad de una acción." },
        { term: "maximizar", meaning: "Lograr el mayor grado posible de felicidad o bienestar." }
        // { term: "mayor_número", meaning: "Se refiere a la totalidad de las personas o seres que son afectados por una acción, no solo uno mismo." },
      ],
      corollary: [
        "El principio fundamental del utilitarismo es que las consecuencias de una acción determinan si es correcta o incorrecta.",
        "Se busca la mayor felicidad para la mayor cantidad de gente."
      ],
    },
    {
      // 2) Placeres superiores e inferiores
      html: `
      <div class="highlight-box">
        <h4>🌟 Placeres Superiores e Inferiores</h4>
        <p>Mill refina el utilitarismo distinguiendo entre diferentes tipos de <strong>placeres</strong>. Los <strong>placeres inferiores</strong> están ligados al cuerpo (comer, beber), mientras que los <strong>placeres superiores</strong> se asocian con nuestras facultades intelectuales (amistad, arte, conocimiento).</p>
        <p>Según Mill, la <strong>calidad</strong> del placer es más importante que su cantidad. Por eso afirma que "es mejor ser un ser humano insatisfecho que un cerdo satisfecho", lo que demuestra el valor único de los placeres intelectuales.</p>
      </div>
      `,
      hint: "Fíjate en los tipos de placeres y el por qué de la distinción.",
      advanceAfter: 1,
      concepts: [
        { term: "placeres", meaning: "Sensaciones que generan bienestar. Mill distingue entre dos tipos: los del cuerpo y los de la mente." },
        { term: "inferiores", meaning: "Placeres que compartimos con otros animales, ligados a la supervivencia y a las necesidades físicas." },
        { term: "superiores", meaning: "Placeres exclusivos de los seres humanos, como los que provienen del intelecto, la moral y la estética." },
        { term: "calidad", meaning: "Para Mill, no todos los placeres son iguales. Los placeres superiores son de mayor valor y duración, incluso si generan menos intensidad inmediata." },
      ],
      corollary: [
        "Para Mill, la calidad de un placer es más importante que la cantidad.",
        "Los placeres intelectuales y morales tienen un valor superior a los puramente físicos."
      ],
    },
    {
      // 3) El utilitarismo no es egoísmo: el espectador imparcial
      html: `
      <div class="highlight-box">
        <h4>⚖️ El Principio de Imparcialidad Estricta</h4>
        <p>A pesar de lo que pueda parecer, el utilitarismo no es una justificación del <strong>egoísmo</strong>. Al evaluar una acción, se debe considerar la felicidad de <strong>todos los afectados</strong>, no solo la nuestra. Esto exige que actuemos como un <strong>espectador imparcial</strong>, sopesando de forma equitativa las consecuencias para cada persona.</p>
      </div>
      `,
      hint: "Busca los conceptos de imparcialidad y egoísmo.",
      advanceAfter: 1,
      concepts: [
        { term: "egoísmo", meaning: "Actuar solo en beneficio propio. El utilitarismo rechaza el egoísmo, pues exige considerar el bienestar de todos los afectados." },
        { term: "imparcial", meaning: "Actuar sin dar un peso especial a nuestra propia felicidad o la de nuestros seres queridos. Todos los afectados cuentan por igual." },
        { term: "afectados", meaning: "Todas las personas o seres que recibirán las consecuencias de nuestra decisión, incluyendo nuestra familia, comunidad, la sociedad y futuras generaciones." },
      ],
      corollary: [
        "El utilitarismo es una ética profundamente altruista, no egoísta.",
        "La moralidad de una acción se juzga desde una perspectiva objetiva, no personal."
      ],
    },
    {
      // 4) Utilitarismo del Acto vs. Utilitarismo de la Regla
      html: `
      <div class="highlight-box">
        <h4>📋 Utilitarismo del Acto vs. Utilitarismo de la Regla</h4>
        <p>Una gran pregunta en el utilitarismo es si debemos juzgar cada <strong>acto individual</strong> o si debemos seguir <strong>reglas morales</strong> que, en general, promueven la mayor felicidad. Mill se inclinó por el <strong>utilitarismo de la regla</strong>, argumentando que seguir reglas como "no mentir" o "no robar" crea confianza y bienestar a largo plazo, aunque haya <strong>excepciones</strong> en situaciones extremas donde romper la regla evita un daño mucho mayor.</p>
      </div>
      `,
      hint: "Diferencia entre los dos tipos de utilitarismo y el papel de las reglas.",
      advanceAfter: 1,
      concepts: [
        { term: "acto", meaning: "Juzga la moralidad de cada acción específica y única según sus consecuencias." },
        { term: "regla", meaning: "Juzga la moralidad de una acción en base a si la regla que la justifica, si se siguiera siempre, produciría la mayor felicidad." },
        // { term: "reglas_morales", meaning: "Principios generales de conducta (ej. no mentir, no robar). El utilitarismo de la regla las considera útiles porque la experiencia demuestra que generalmente conducen al bienestar social." },
        { term: "excepciones", meaning: "Situaciones muy inusuales en las que romper una regla moral puede estar justificado, pero solo si esto produce un beneficio significativamente mayor o evita un sufrimiento considerable." },
      ],
      corollary: [
        "Utilitarismo del acto: juzga cada acción por sus consecuencias.",
        "Utilitarismo de la regla: juzga las acciones por las reglas que las justifican.",
        "Mill prefirió el utilitarismo de la regla porque garantiza un mayor bienestar a largo plazo."
      ],
    },
    {
      // 5) Aplicaciones y críticas
      html: `
      <div class="highlight-box">
        <h4>🤔 Desafíos y Críticas al Utilitarismo</h4>
        <p>El utilitarismo, pese a su gran influencia, enfrenta críticas importantes. Un problema clave es el de la <strong>justicia</strong>: ¿podría justificarse sacrificar a una persona inocente por el bien de la mayoría? Otro desafío es el del <strong>cálculo</strong>: ¿es realmente posible medir y comparar la felicidad o el bienestar? Además, se cuestiona si el utilitarismo exige demasiado de las personas.</p>
      </div>
      `,
      hint: "Atiende a los problemas de justicia y cálculo.",
      advanceAfter: 1,
      concepts: [
        { term: "justicia", meaning: "Un principio moral que el utilitarismo a veces parece contradecir. Se refiere a dar a cada uno lo que le corresponde, respetando sus derechos individuales, sin sacrificarlo por el bien común." },
        { term: "cálculo", meaning: "La dificultad práctica de medir la cantidad de felicidad o sufrimiento que una acción podría generar, así como de predecir sus consecuencias a largo plazo." },
      ],
      corollary: [
        "El utilitarismo es una teoría de las consecuencias y, por lo tanto, puede entrar en conflicto con la justicia.",
        "Es un desafío práctico poder calcular la felicidad y sus efectos a largo plazo."
      ],
    },
  ],
};