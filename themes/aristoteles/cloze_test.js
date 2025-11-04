// themes/aristoteles/cloze_test.js
// CLOZE TEST — Aristóteles: vida, ciencia, lógica, metafísica, física, ética y política

window.CLOZE_TEST = {
  title: "Cloze — Aristóteles: ciencia, lógica, metafísica y ética",
  items: [
    // 1) Biografía y contexto histórico
    {
      id: "a1",
      text: "Aristóteles nació en [[Estagira]], colonia [[griega]] de la península [[Calcídica|Calcidica]], en el año [[384]] antes de [[Cristo]], y murió en [[Calcis]], en la isla de [[Eubea]], en el [[322]] antes de Cristo, un año después que [[Alejandro]] [[Magno]]. Vivió la muerte de la [[Grecia]] clásica y la entrada en el [[helenismo]].",
      feedbackOK: "Muy bien. Sitúas a Aristóteles en el espacio (Estagira, Calcis) y en el tiempo (del 384 al 322 a. C., transición a la época helenística).",
      feedbackKO: "Recuerda: Estagira, colonia griega de la Calcídica, 384–322 a. C., muerte de la Grecia clásica y helenismo.",
      videoHints: [
        "💡 Es el inicio del vídeo, cuando se cuentan su lugar y fecha de nacimiento y muerte.",
        "💡 Escucha cuando se dice que murió un año después que Alejandro Magno.",
        "💡 A continuación se comenta que vivió la muerte de la Grecia clásica y la entrada en el helenismo."
      ],
      videoSegment: { start: 7, end: 26 } // ≈ 7.54–25.12
    },

    // 2) Academia de Platón y fundación del Liceo
    {
      id: "a2",
      text: "Cuando tenía en torno a [[18]] años fue enviado a [[Atenas]] a estudiar en la [[Academia]] de [[Platón|Platon]], donde permaneció nada menos que [[20]] años. En el año [[335]] antes de Cristo fundó su propia institución de enseñanza en Atenas, el [[Liceo]], que durante su vida fue equivalente a la [[universidad]] más [[famosa]] del mundo.",
      feedbackOK: "Correcto. Aquí aparece su largo paso por la Academia de Platón y la fundación del Liceo.",
      feedbackKO: "Piensa: 18 años, Academia de Platón, 20 años allí y luego el Liceo como gran centro de enseñanza.",
      videoHints: [
        "💡 Está cuando se cuenta que a los 18 años fue enviado a Atenas a la Academia de Platón.",
        "💡 Más adelante se menciona el año 335 a. C. y la fundación del Liceo.",
        "💡 Se dice que el Liceo fue equivalente a la universidad más famosa del mundo."
      ],
      videoSegment: { start: 31, end: 82 } // 31.36–81.84
    },

    // 3) Obra y campos que trabaja
    {
      id: "a3",
      text: "Escribió casi sobre todo lo [[imaginable]], aunque gran parte de su [[obra]] se ha [[perdido]]. Aun así, nos han llegado libros sobre [[lógica]], [[metafísica]], [[física]], [[biología]], [[psicología]], [[ética]], [[política]], [[retórica]] y [[estética]].",
      feedbackOK: "Muy bien. Enumera la amplitud increíble de temas tratados por Aristóteles.",
      feedbackKO: "Fíjate en la lista: lógica, metafísica, física, biología, psicología, ética, política, retórica y estética.",
      videoHints: [
        "💡 Está justo después de mencionar el Liceo.",
        "💡 Escucha cuando se dice 'Escribió casi sobre todo lo imaginable'.",
        "💡 A continuación se enumeran las disciplinas sobre las que escribió."
      ],
      videoSegment: { start: 81, end: 96 } // 81.84–95.32
    },

    // 4) Intento de escapar de Platón, aciertos y errores
    {
      id: "a4",
      text: "Pretendió [[escapar]] a la [[influencia]] de [[Platón|Platon]], al cual [[criticó|critico]], y nunca creyó ni en la [[teoría]] de las [[ideas]] ni en la de la [[reminiscencia]]. Quiso construir su propio [[método|metodo]], pretendió ser más [[científico|cientifico]] que su maestro, pero lo logró solo en parte: su [[lógica]] es totalmente [[correcta]] y su [[ética]] sigue influyendo todavía hoy, pero concibió una [[cosmología]] [[geocéntrica|geocentrica]] que es [[errónea|erronea]] y, mezclada con la [[religión]], impidió el [[avance]] [[científico|cientifico]] durante siglos.",
      feedbackOK: "Correcto. Resumes bien el intento de separarse de Platón, sus grandes aciertos y sus errores cosmológicos.",
      feedbackKO: "Recuerda: crítica a Platón y a las Ideas, lógica correcta, ética influyente y cosmología geocéntrica errónea pero muy influyente.",
      videoHints: [
        "💡 Busca cuando se dice que pretendió escapar a la influencia de Platón.",
        "💡 Luego se comenta que su lógica es correcta y su ética influye aún.",
        "💡 Después se habla de su cosmología geocéntrica y del freno al avance científico."
      ],
      videoSegment: { start: 95, end: 139 } // 95.32–139.88
    },

    // 5) Concepto de ciencia y cuatro fases del conocimiento
    {
      id: "a5",
      text: "El punto de partida debe ser el concepto de [[ciencia]] de Aristóteles. Examina cómo se [[conoce]] y cree que el proceso tiene [[cuatro]] fases: la [[sensación]], cuando se capta un [[estímulo|estimulo]] por los órganos de los [[sentidos]]; la [[experiencia]], que consiste en [[recordar]] la sensación; la [[téchne|techne]], un grado de [[conocimiento]] que permite saber [[utilizar]] la experiencia; y la [[ciencia]], que es llegar a conocer el [[porqué|porque]] de las cosas.",
      feedbackOK: "Muy bien. Has recogido las cuatro fases: sensación, experiencia, téchne y ciencia.",
      feedbackKO: "Piensa en el orden: sensación → experiencia → téchne → ciencia (conocer el porqué).",
      videoHints: [
        "💡 Está cuando dice 'El punto de partida debe ser el concepto de ciencia de Aristóteles'.",
        "💡 A continuación se enumeran las cuatro fases del conocimiento.",
        "💡 Presta atención a cómo define la ciencia como conocer el porqué de las cosas."
      ],
      videoSegment: { start: 141, end: 176 } // 141.20–175.20
    },

    // 6) Ciencias de lo necesario y de lo posible
    {
      id: "a6",
      text: "Las ciencias de lo [[necesario]] son básicamente las [[matemáticas|matematicas]], la [[física|fisica]] y la [[metafísica]], que al tratar del [[ser]] en sí mismo llama [[filosofía]] [[primera]]. Las ciencias de lo [[posible]] son aquellas en las que se pueden encontrar diferentes [[soluciones]] [[correctas]] a un problema; aquí encontramos la [[ética]], la [[política]], la [[retórica]] y la [[estética]].",
      feedbackOK: "Correcto. Diferencias bien las ciencias de lo necesario y las de lo posible.",
      feedbackKO: "Recuerda: necesario → matemáticas, física, metafísica; posible → ética, política, retórica y estética.",
      videoHints: [
        "💡 Está cuando explica que sigue dando más importancia a las ciencias teóricas.",
        "💡 Escucha cuando nombra matemáticas, física y metafísica como ciencias de lo necesario.",
        "💡 Después habla de ética, política, retórica y estética como ciencias de lo posible."
      ],
      videoSegment: { start: 204, end: 225 } // 204.68–224.44
    },

    // 7) Ciencia como demostración y primeros principios
    {
      id: "a7",
      text: "En todo caso, cree que la [[ciencia]] consiste en [[demostrar]] y para ello debe apoyarse en ir [[simplificando]], de [[verdades]] más [[complejas]] a verdades más [[simples]], hasta llegar a los primeros [[principios]] o [[axiomas]], verdades que no necesitan [[demostración|demostracion]].",
      feedbackOK: "Muy bien. Señalas la idea de la ciencia como demostración a partir de primeros principios.",
      feedbackKO: "Piensa en el movimiento de lo complejo a lo simple y en los axiomas como verdades indemostrables.",
      videoHints: [
        "💡 Está cuando se pregunta qué es para Aristóteles la ciencia.",
        "💡 Escucha la parte donde habla de simplificar de verdades complejas a simples.",
        "💡 Luego aparecen los 'primeros principios o axiomas'."
      ],
      videoSegment: { start: 228, end: 240 } // 228.08–240.36
    },

    // 8) Padre de la lógica
    {
      id: "a8",
      text: "Aristóteles pretende ser [[sistemático]] y trazar el camino hacia el [[conocimiento]] en el [[pensamiento]] correcto, es decir, busca un [[método|metodo]] que permita saber si un [[razonamiento]] es [[lógico]] o está mal formulado. Por eso se le considera el [[padre]] de la [[lógica|logica]].",
      feedbackOK: "Correcto. Esta frase recoge muy bien por qué se le considera padre de la lógica.",
      feedbackKO: "Recuerda: método, razonamiento, pensamiento correcto y padre de la lógica.",
      videoHints: [
        "💡 Está justo antes de que empiece a hablar de silogismos.",
        "💡 Escucha cuando se dice que busca un método para saber si un razonamiento es correcto.",
        "💡 Después aparece la frase 'Por eso se le considera el padre de la lógica'."
      ],
      videoSegment: { start: 240, end: 256 } // 240.36–255.72
    },

    // 9) Silogismo y ejemplo con Sócrates
    {
      id: "a9",
      text: "Un [[silogismo]] tiene tres [[juicios]] —dos son las [[premisas]] y uno la [[conclusión|conclusion]]— y tres [[términos|terminos]]: el [[sujeto]] de la conclusión, el [[predicado]] y el [[término]] [[medio]]. Por ejemplo: todos los [[hombres]] son [[mortales]], [[Sócrates|Socrates]] es un [[hombre]], conclusión, Sócrates es [[mortal]].",
      feedbackOK: "Muy bien. Definición de silogismo y ejemplo clásico.",
      feedbackKO: "Piensa en premisas, conclusión, sujeto, predicado y término medio.",
      videoHints: [
        "💡 Está cuando explica la estructura de los silogismos.",
        "💡 Escucha cuando pone el ejemplo de Sócrates es mortal.",
        "💡 Luego identifica sujeto, predicado y término medio."
      ],
      videoSegment: { start: 288, end: 317 } // 288.76–317.08
    },

    // 10) Categorías y sustancia primera/segunda
    {
      id: "a10",
      text: "Aristóteles cree que es posible llegar a la [[verdad]] en [[metafísica]] si se utiliza el [[lenguaje]] [[apofántico|apofantico]] y se aplican las leyes [[lógicas|logicas]]. Distingue diez [[categorías|categorias]] y la más importante es la primera, la [[sustancia]], la [[verdad]] [[necesaria]], el verdadero [[ser]]. La [[primera]] sustancia designa la [[individualidad]] y la [[segunda]] sustancia designa la [[esencia]] o especie.",
      feedbackOK: "Correcto. Has recogido el núcleo: categorías, sustancia y diferencia entre primera y segunda sustancia.",
      feedbackKO: "Piensa en sustancia como categoría principal y en la distinción entre individuo y especie.",
      videoHints: [
        "💡 Está cuando introduce las diez categorías que podemos decir de un ser.",
        "💡 Escucha el ejemplo de 'Sócrates es un hombre de 80 kilos…'.",
        "💡 Luego explica qué es la sustancia primera y la segunda sustancia."
      ],
      videoSegment: { start: 394, end: 455 } // 394.04–454.76
    },

    // 11) Materia y forma, cambio sustancial
    {
      id: "a11",
      text: "Quiere explicar cómo puede suceder el [[cambio]] [[sustancial]] y para ello utiliza la pareja de conceptos de [[materia]] y [[forma]]. Cree que el [[ser]] consta de dos [[principios]]: la materia [[prima]], que sería la sustancia común a todo ser, y la [[forma]] [[sustancial]], que define la [[especie]]. En el cambio sustancial lo que pasa es que la forma del ser es la que [[cambia]].",
      feedbackOK: "Muy bien. Ésta es la explicación aristotélica del cambio sustancial mediante materia y forma.",
      feedbackKO: "Recuerda: materia prima como sustrato común y forma sustancial como lo que cambia en el cambio sustancial.",
      videoHints: [
        "💡 Está cuando pone el ejemplo del árbol que se quema y pasa a ser ceniza.",
        "💡 Justo después introduce materia y forma como dos principios.",
        "💡 Luego explica que lo que cambia en el cambio sustancial es la forma."
      ],
      videoSegment: { start: 544, end: 566 } // 544.48–565.96
    },

    // 12) Acto y potencia
    {
      id: "a12",
      text: "Según Aristóteles, todo [[ser]] es una combinación en grado variable de [[acto]] y de [[potencia]]. El acto es lo que el ser [[es]] en ese momento y la potencia lo que puede llegar a [[ser]]. Al [[moverse]], el ser desarrolla su [[potencia]] y la convierte en [[acto]]. Por eso considera que un [[bebé]] es mucha más potencia que acto y es menos [[perfecto]] que un [[adulto]].",
      feedbackOK: "Correcto. Explicas bien la relación entre acto, potencia, movimiento y perfección.",
      feedbackKO: "Piensa en la idea de que el movimiento es el paso de la potencia al acto.",
      videoHints: [
        "💡 Está en el bloque en que aplica acto y potencia al movimiento local.",
        "💡 Escucha cuando dice que todo ser es combinación de acto y potencia.",
        "💡 Luego pone el ejemplo del bebé, el adulto y el anciano."
      ],
      videoSegment: { start: 582, end: 650 } // 582.84–649.64
    },

    // 13) Cuatro causas y teleología inmanente
    {
      id: "a13",
      text: "Aristóteles cree que en general existen cuatro [[causas]]: la [[material]], la [[formal]], la [[eficiente]] —el [[porqué|porque]]— y la [[final]], el [[para qué|para que]]. En los seres [[naturales]], la causa [[material]] es la [[materia]] y todas las otras corresponden a la [[forma]], que explica por qué la especie hace lo que hace y para qué lo hace. Por eso su filosofía defiende una [[teleología]] [[inmanente]], una [[finalidad]] [[innata]] dentro del propio [[ser]].",
      feedbackOK: "Muy bien. Resumes las cuatro causas y la idea de teleología inmanente.",
      feedbackKO: "Recuerda: material, formal, eficiente y final; forma como portadora de las causas y teleología interna.",
      videoHints: [
        "💡 Está cuando introduce las cuatro causas del ser.",
        "💡 Luego explica que en los seres naturales las tres causas (formal, eficiente y final) corresponden a la forma.",
        "💡 Más adelante se afirma que esto define la teleología inmanente de Aristóteles."
      ],
      videoSegment: { start: 686, end: 728 } // 686.24–728.44
    },

    // 14) Cosmología geocéntrica, éter y acto puro / primer motor
    {
      id: "a14",
      text: "El universo aristotélico es como una [[cebolla]], una [[esfera]] con [[capas]] superpuestas: divide su [[cosmos]] en zona [[sublunar]], [[imperfecta]], y zona [[supralunar]], [[perfecta]], con la [[Tierra]] inmóvil en el [[centro]]. Acepta la teoría de los cuatro [[elementos]] y añade un quinto elemento para los cielos, la [[quintaesencia]] o [[éter|eter]]. Como todo lo que se [[mueve]] debe ser movido por [[otro]], concluye que tiene que existir un [[primer]] [[motor]] [[inmóvil|inmovil]], acto [[puro]], que siglos después será identificado con [[Dios]].",
      feedbackOK: "Correcto. Ahí está la imagen de universo en capas, la quintaesencia y el primer motor inmóvil.",
      feedbackKO: "Piensa en cebolla/esfera, sublunar/supralunar, éter y primer motor inmóvil.",
      videoHints: [
        "💡 Está en el bloque en que describe el universo aristotélico como una cebolla/esfera.",
        "💡 Escucha cuando habla de la zona sublunar y supralunar y del éter.",
        "💡 Después relaciona el principio de causalidad con el primer motor inmóvil."
      ],
      videoSegment: { start: 755, end: 900 } // 755.84–900.04
    },

    // 15) Alma (psiqué) y nous
    {
      id: "a15",
      text: "Divide a los seres vivos en [[plantas]], [[animales]] y [[hombres]], situando al hombre por [[encima]]. Su [[psiqué]] engloba una parte [[vegetativa]], una [[sensitiva]] y añade la parte [[racional]], su capacidad de [[pensar]] que le distingue de los animales. La psique racional es el [[noûs|nous]], la [[inteligencia]], que divide en [[pasiva]] o [[potencial]] —noûs [[pathetikós|pathetikos]]— y [[activa]] o [[productiva]] —noûs [[poiētikós|poietikos]]—, que permite extraer [[conceptos]] a partir de las impresiones.",
      feedbackOK: "Muy bien. Has descrito las tres partes del alma y la distinción entre nous pasivo y nous activo.",
      feedbackKO: "Recuerda: psiqué vegetativa, sensitiva y racional; nous pasivo/potencial y nous poietikós/activo.",
      videoHints: [
        "💡 Está cuando habla de cómo divide a los seres vivos y la forma (psiqué) del hombre.",
        "💡 Escucha cuando enumera psiqué vegetativa, sensitiva y racional.",
        "💡 Después distingue entre nous pasivo y nous poietikós."
      ],
      videoSegment: { start: 917, end: 950 } // 917.04–950.04
    },

    // 16) Virtud ética, virtudes dianoéticas y zoon politikon
    {
      id: "a16",
      text: "Define la [[virtud]] [[ética|etica]] como el [[hábito|habito]] [[electivo]] que consiste en elegir el [[término]] [[medio]] entre dos [[extremos]], tal como lo haría el hombre [[prudente]]. Las virtudes [[dianoéticas]] pueden ser [[prácticas|practicas]] —como la [[prudencia]] o el [[arte]]— y [[teóricas|teoricas]] —[[intuición|intuicion]], [[ciencia]] y [[sabiduría|sabiduria]]—, que deben desarrollarse al [[máximo|maximo]]. En política, Aristóteles define al hombre como [[animal]] [[político|politico]], es decir, [[animal]] [[social]] que necesita [[vivir]] en [[comunidad]].",
      feedbackOK: "Excelente. Reúnes el núcleo de su ética (término medio, prudencia) y su definición de hombre como animal político.",
      feedbackKO: "Piensa en virtud ética como hábito electivo del término medio y en el hombre como animal político/social.",
      videoHints: [
        "💡 Está cuando habla de la virtud ética como hábito electivo del término medio.",
        "💡 Más adelante distingue virtudes dianoéticas prácticas y teóricas.",
        "💡 Luego define al hombre como animal político, que necesita vivir en comunidad."
      ],
      videoSegment: { start: 968, end: 1015 } // 968.04–1015.04
    }
  ]
};

// === Sistema de pistas (igual que en los otros temas) ===
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

  const config = window.VIDEO_CONFIG?.aristoteles; // 👈 ajusta si usas otro nombre de tema
  if (!config) return null;

  const baseStart = (config.startTime || 0) + item.videoSegment.start;
  const safeStart = Math.max(baseStart - 3, 0); // 3 segundos antes de la frase

  return `https://www.youtube.com/watch?v=${config.youtubeId}&t=${safeStart}s`;
};
