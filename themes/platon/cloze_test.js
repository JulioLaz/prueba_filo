// themes/platon/cloze_test.js
// CLOZE TEST — Platón: ideas, alma y política (versión extendida, 16 ítems)

window.CLOZE_TEST = {
  title: "Cloze — Platón: ideas, alma y política",
  items: [
    // 1) Intro: primer gran filósofo
    {
      id: "p1",
      text: "Platón es sin duda el primer gran [[filósofo|filosofo]], es quien da a la filosofía su [[empaque]] y su obra ha tenido tal [[influencia]] histórica que si no se [[conoce]] es como si no se supiera nada de esta [[disciplina]].",
      feedbackOK: "Muy bien. Es la presentación de Platón como figura imprescindible para entender la filosofía.",
      feedbackKO: "Recuerda que el narrador insiste en empaque, influencia histórica y disciplina.",
      videoHints: [
        "💡 Está al principio, justo tras la música.",
        "💡 Escucha cuando dice que si no se conoce a Platón es como no saber nada de filosofía.",
        "💡 Son las primeras frases del video."
      ],
      videoSegment: { start: 5, end: 15 } // ≈ 00:05
    },

    // 2) Decadencia y aristocracia
    {
      id: "p2",
      text: "Es curioso que a pesar de ser visto como el primero de los grandes, su obra se dé en un contexto de [[decadencia]]: la [[Grecia]] clásica se acerca a su [[fin]] y él está recogiendo un [[acervo]] cultural [[antiguo]] porque sus ideales son los ideales de la [[aristocracia]] griega: el [[bien]], la [[belleza]], la [[justicia]] y la idea de que no todos somos [[iguales]].",
      feedbackOK: "Correcto. Sitúas a Platón en la Grecia en decadencia con ideales aristocráticos.",
      feedbackKO: "Fíjate en las palabras: decadencia, Grecia clásica, acervo antiguo, aristocracia, bien, belleza, justicia, desigualdad.",
      videoHints: [
        "💡 Está inmediatamente después de la presentación inicial.",
        "💡 Escucha cuando liga decadencia con Grecia clásica acercándose a su fin.",
        "💡 Luego menciona literalmente bien, belleza, justicia y que no todos somos iguales."
      ],
      videoSegment: { start: 19, end: 34 } // ≈ 00:19
    },

    // 3) Vida: de político a fundador de la Academia
    {
      id: "p3",
      text: "Platón iba a haber sido [[político]], pero la [[muerte]] de [[Sócrates|Socrates]] dio un giro a su vida: abandonó [[Atenas]], viajó a [[Italia]] quizá a otros sitios como [[Egipto]] y cuando volvió lo que hizo fue comprar un [[terreno]] en el que construyó su [[Academia]], donde permaneció hasta su [[muerte]] enseñando y escribiendo un sinfín de [[diálogos|dialogos]].",
      feedbackOK: "Muy bien. Resumes el giro biográfico tras la muerte de Sócrates y la fundación de la Academia.",
      feedbackKO: "Recuerda: político, muerte de Sócrates, viajes y fundación de la Academia.",
      videoHints: [
        "💡 Busca cuando dice 'Platón iba a haber sido político'.",
        "💡 Luego enumera abandonar Atenas, viajar y comprar un terreno.",
        "💡 Termina con la creación de la Academia y su actividad hasta la muerte."
      ],
      videoSegment: { start: 39, end: 59 } // ≈ 00:39–00:59
    },

    // 4) Influencias: aristocracia, Atenas vs Esparta, Sócrates, Heráclito, Parménides, pitagóricos
    {
      id: "p4",
      text: "Sus [[influencias]] están claras: su origen [[aristocrático]], el contexto de decadencia de [[Atenas]] frente a [[Esparta]], cuya organización mitifica con su [[disciplina]] y [[poder]] estatal, [[Sócrates|Socrates]] con la búsqueda de [[definiciones]] mediante el método [[dialéctico|dialectico]], la antinomia de [[Heráclito|Heraclito]] y [[Parménides|Parmenides]] que él llama el problema de lo uno y de lo [[múltiple|multiple]], y los [[pitagóricos|pitagoricos]] con su amor a las [[matemáticas|matematicas]] y a la [[música|musica]].",
      feedbackOK: "Excelente. Enumeras de forma completa las influencias de Platón.",
      feedbackKO: "Piensa en los nombres propios: Atenas, Esparta, Sócrates, Heráclito, Parménides y los pitagóricos.",
      videoHints: [
        "💡 Aparece cuando el narrador dice literalmente 'sus influencias están claras'.",
        "💡 A continuación menciona Esparta, Sócrates y el problema de lo uno y lo múltiple.",
        "💡 Termina con la influencia pitagórica en matemáticas y música."
      ],
      videoSegment: { start: 61, end: 90 } // ≈ 01:01–01:30
    },

    // 5) Teoría de las ideas: problema de lo uno y lo múltiple, dos mundos
    {
      id: "p5",
      text: "La teoría de las [[ideas]] de Platón es su solución al problema de lo [[uno]] y de lo [[múltiple|multiple]]: para reconciliar lo que se [[percibe]], la [[multiplicidad]] y el [[cambio]] constante de seres, con lo que se [[razona]], la existencia de [[conceptos]] eternos e [[inmutables]], concibe que existen dos [[mundos]].",
      feedbackOK: "Correcto. Entras de lleno en la teoría de las ideas como respuesta al problema de lo uno y lo múltiple.",
      feedbackKO: "Recuerda que se contraponen percepción cambiante y conceptos eternos.",
      videoHints: [
        "💡 Está cuando se introduce explícitamente 'La teoría de las ideas de Platón...'.",
        "💡 Se habla de multiplicidad y cambio frente a conceptos eternos.",
        "💡 Después viene la idea de los dos mundos."
      ],
      videoSegment: { start: 115, end: 135 } // ≈ 01:55–02:15
    },

    // 6) Las ideas: inteligencia pura, formas, causa, verdad, jerarquía, idea de bien
    {
      id: "p6",
      text: "Las [[ideas]] son seres que son [[inteligencia]] pura, no [[materia]]; son [[formas]] porque son estructuras [[lógicas|logicas]] y son [[causa]] porque generan el mundo de abajo. Además las ideas son la [[verdad]] porque son indivisibles, [[eternas]] e [[inmutables]], y el propio mundo de las ideas está [[jerarquizado]]: las más perfectas son las más [[abstractas]] y están presididas por las ideas de [[justicia]], [[belleza]] y la perfecta, la idea de [[bien]].",
      feedbackOK: "Muy bien. Describes la naturaleza de las ideas y la primacía de la idea de bien.",
      feedbackKO: "Piensa en los tres rasgos: inteligencia pura, forma lógica y causa del mundo sensible.",
      videoHints: [
        "💡 Escucha cuando dice 'Las ideas son seres que son inteligencia pura, no materia'.",
        "💡 Luego explica que son formas, causa y verdad.",
        "💡 Finalmente menciona justicia, belleza y la idea de bien como la más perfecta."
      ],
      videoSegment: { start: 136, end: 175 } // ≈ 02:16–02:55
    },

    // 7) Teleología, idealismo y dualismo
    {
      id: "p7",
      text: "Por toda esta concepción se considera que la filosofía de Platón tiene una [[teleología]] o [[finalidad]] [[trascendente]], y el mundo de abajo [[depende]] del de [[arriba]]; es [[idealista]] porque las ideas son lo más [[perfecto]] y [[dualista]] porque hay dos [[mundos]].",
      feedbackOK: "Correcto. Señalas claramente la finalidad trascendente, el idealismo y el dualismo platónicos.",
      feedbackKO: "Recuerda: teleología, dependencia del mundo de abajo y dualismo de dos mundos.",
      videoHints: [
        "💡 Busca el fragmento donde se dice 'tiene una teleología, finalidad trascendente'.",
        "💡 A continuación explica que el mundo de abajo depende del de arriba.",
        "💡 Remata diciendo que es idealista y dualista."
      ],
      videoSegment: { start: 130 + 5, end: 210 } // ≈ 03:30–03:40 aprox.
    },

    // 8) Teoría del conocimiento: símil de la línea y mito de la caverna
    {
      id: "p8",
      text: "La teoría del [[conocimiento]] de Platón es fiel [[espejo]] de su [[ontología]], tal y como reflejan tanto el [[símil|simil]] de la [[línea|linea]] como el mito de la [[caverna]]: hay unos [[grados]] de conocimiento del menos al más [[perfecto]].",
      feedbackOK: "Muy bien. Relacionas los grados de conocimiento con la ontología y los dos famosos recursos didácticos.",
      feedbackKO: "Piensa en el símil de la línea y el mito de la caverna como espejo de su ontología.",
      videoHints: [
        "💡 Escucha cuando dice literalmente 'la teoría del conocimiento de Platón es fiel espejo de su ontología'.",
        "💡 Luego nombra el símil de la línea y el mito de la caverna.",
        "💡 Inmediatamente después habla de grados de conocimiento del menos al más perfecto."
      ],
      videoSegment: { start: 233, end: 245 } // ≈ 03:53–04:05
    },

    // 9) Opinión vs conocimiento racional
    {
      id: "p9",
      text: "Lo peor está basado en el conocimiento [[sensorial]], que es la [[opinión]] y se divide en [[conjetura]] y [[creencia]]. El conocimiento [[racional]] es radicalmente [[superior]] al sensorial y también tiene dos partes: el [[pensamiento]] basado en las [[matemáticas|matematicas]] y la [[inteligencia]] alcanzada a través de la [[dialéctica|dialectica]].",
      feedbackOK: "Correcto. Distingues claramente opinión sensorial y conocimiento racional.",
      feedbackKO: "Recuerda: sensorial → opinión (conjetura y creencia); racional → pensamiento y inteligencia.",
      videoHints: [
        "💡 Está justo después de los grados de conocimiento.",
        "💡 Escucha cuando separa opinión (conjetura/creencia) y conocimiento racional.",
        "💡 Luego habla de pensamiento matemático e inteligencia dialéctica."
      ],
      videoSegment: { start: 241, end: 270 } // ≈ 04:01–04:30
    },

    // 10) Antropología dualista y reminiscencia
    {
      id: "p10",
      text: "El que [[conoce]] es el [[hombre]] y Platón, siguiendo con su [[dualismo]], considera que el hombre tiene dos [[partes]]: [[materia]], que pertenece al mundo de abajo, y un [[alma]] inmortal que pertenece al mundo de las [[ideas]]. Esto lo justifica con su teoría de la [[reminiscencia]], según la cual el [[saber]] es [[recordar]].",
      feedbackOK: "Muy bien. Resumes el dualismo antropológico y la teoría de la reminiscencia.",
      feedbackKO: "Piensa en materia vs alma inmortal y en la fórmula 'el saber es recordar'.",
      videoHints: [
        "💡 Busca cuando empieza 'El que conoce es el hombre...'.",
        "💡 Luego menciona las dos partes, materia y alma inmortal.",
        "💡 A continuación introduce la teoría de la reminiscencia y la frase 'saber es recordar'."
      ],
      videoSegment: { start: 302, end: 320 } // ≈ 05:02–05:20
    },

    // 11) Mito del carro alado y las tres funciones del alma
    {
      id: "p11",
      text: "En el mito del [[carro]] [[alado]], Platón explica que el [[alma]] tiene tres [[funciones]]: la [[racional]], en la [[griega]] que dirige el carro; la [[irascible]], el [[caballo]] blanco encargado de la [[defensa]] y de emociones como la [[ira]]; y la [[concupiscente]], la de la [[nutrición]] y los [[deseos]], que se [[desboca]] y provoca la [[caída]] del alma al mundo [[sensible]].",
      feedbackOK: "Perfecto. Describes las tres funciones del alma con la imagen del carro y los caballos.",
      feedbackKO: "Recuerda: racional, irascible y concupiscente, cada una con su papel.",
      videoHints: [
        "💡 Está cuando se menciona explícitamente 'el mito del carro alado'.",
        "💡 El narrador describe la función racional, la irascible y la concupiscente.",
        "💡 Termina con la caída del alma al mundo sensible."
      ],
      videoSegment: { start: 361, end: 390 } // ≈ 06:01–06:30
    },

    // 12) Reencarnaciones y alma prisionera del cuerpo
    {
      id: "p12",
      text: "El alma inmortal de Platón también es [[prisionera]] del [[cuerpo]] y cree que deben pasar varias [[reencarnaciones]] para por fin [[liberarse]] y no volver a [[caer]]: tres para los [[filósofos|filosofos]] y diez para el [[resto]].",
      feedbackOK: "Muy bien. Aquí se ve la influencia pitagórica en la idea de reencarnaciones.",
      feedbackKO: "No olvides: alma prisionera del cuerpo, liberación y números 3 y 10.",
      videoHints: [
        "💡 Se dice que el alma inmortal es prisionera del cuerpo.",
        "💡 A continuación se habla de varias reencarnaciones para liberarse.",
        "💡 Se mencionan las cifras: tres para los filósofos y diez para el resto."
      ],
      videoSegment: { start: 400, end: 415 } // ≈ 06:40–06:55
    },

    // 13) Fin de la ética: la política y el bien común
    {
      id: "p13",
      text: "El fin último de la [[ética]] es la [[política]], porque para Platón como para los griegos antiguos en general la [[polis]] está por encima del [[individuo]]: lo importante es el [[bien]] [[común]].",
      feedbackOK: "Correcto. Resumes la subordinación del individuo al bien común de la polis.",
      feedbackKO: "Piensa en la idea de que la ética desemboca en la política y en el bien común.",
      videoHints: [
        "💡 Está cuando el narrador dice literalmente 'el fin último de la ética es la política'.",
        "💡 Luego afirma que la polis está por encima del individuo.",
        "💡 Remata con que lo importante es el bien común."
      ],
      videoSegment: { start: 436, end: 450 } // ≈ 07:16–07:30
    },

    // 14) Estado ideal y tres clases
    {
      id: "p14",
      text: "En el estado [[ideal]] existen tres [[clases]] de hombres: [[filósofos|filosofos]], que son los [[sabios]]; [[soldados]], que son los [[fuertes]]; y el resto, los [[trabajadores]], que aspiran a alcanzar la [[templanza]] y cumplir su [[función|funcion]] trabajando para el [[sustento]] de la [[polis]].",
      feedbackOK: "Muy bien. Enumeras claramente las tres clases del estado ideal platónico.",
      feedbackKO: "Recuerda: filósofos-sabios, soldados-fuertes y trabajadores-templanza.",
      videoHints: [
        "💡 Busca cuando empieza 'En el estado ideal existen tres clases de hombres...'.",
        "💡 Se nombran filósofos, soldados y trabajadores.",
        "💡 Se indica la virtud y función asociada a cada clase."
      ],
      videoSegment: { start: 484, end: 500 } // ≈ 08:04–08:20
    },

    // 15) Control estatal inspirado en Esparta
    {
      id: "p15",
      text: "El [[equilibrio]] será garantizado por el [[estado]], al que otorga gran [[poder]] de [[control]] inspirado en [[Esparta]]: desde el control [[demográfico]] hasta el control [[educativo]]. El [[gobierno]] y la [[educación]] estarán controlados por los [[filósofos|filosofos]].",
      feedbackOK: "Correcto. Señalas el enorme poder de control del Estado en el modelo platónico.",
      feedbackKO: "Piensa en la inspiración espartana, el control demográfico y educativo y el papel de los filósofos.",
      videoHints: [
        "💡 Está cuando se habla de que el equilibrio será garantizado por el estado.",
        "💡 Luego se mencionan expresamente los controles demográfico y educativo.",
        "💡 Se afirma que gobierno y educación estarán en manos de los filósofos."
      ],
      videoSegment: { start: 520, end: 545 } // ≈ 08:40–09:05
    },

    // 16) Dictadura nazi y crítica de Popper
    {
      id: "p16",
      text: "Lo que describe es una [[dictadura]] más bien [[nazi]] como vehículo hacia la [[justicia]] y el [[equilibrio]], algo bastante [[aterrador]] que le ha granjeado, por ejemplo, que [[Karl]] [[Popper]] en su obra \"La sociedad [[abierta]] y sus [[enemigos]]\" lo nombre como primer [[enemigo]] de la [[lista]].",
      feedbackOK: "Excelente. Captas la crítica moderna de Popper al proyecto político de Platón.",
      feedbackKO: "Recuerda: dictadura nazi, justicia, equilibrio y Popper como crítico en 'La sociedad abierta y sus enemigos'.",
      videoHints: [
        "💡 Está cuando se califica el modelo como 'una dictadura más bien nazi'.",
        "💡 A continuación se explica que es un vehículo hacia la justicia y el equilibrio.",
        "💡 Luego se menciona a Karl Popper y el título 'La sociedad abierta y sus enemigos'."
      ],
      videoSegment: { start: 570, end: 595 } // ≈ 09:30–09:55
    }
  ]
};

// === Sistema de pistas (igual que en otros temas) ===
window.CLOZE_TEST.getHintForItem = function(itemId, hintLevel = 0) {
  const item = this.items.find(i => i.id === itemId);
  if (!item || !item.videoHints) return null;

  const maxHints = item.videoHints.length;
  if (hintLevel >= maxHints) return null;

  return {
    hint: item.videoHints[hintLevel],
    hasMore: hintLevel < maxHints - 1,
    videoSegment: item.videoSegment
  };
};

// === Link directo al momento del video (3s ANTES de la frase) ===
window.CLOZE_TEST.getVideoLink = function(itemId) {
  const item = this.items.find(i => i.id === itemId);
  if (!item || !item.videoSegment) return null;

  const config = window.VIDEO_CONFIG?.platon; // 👈 clave del tema en VIDEO_CONFIG
  if (!config) return null;

  const baseStart = (config.startTime || 0) + item.videoSegment.start;
  const safeStart = Math.max(baseStart - 3, 0); // 3 segundos antes de la frase

  return `https://www.youtube.com/watch?v=${config.youtubeId}&t=${safeStart}s`;
};
