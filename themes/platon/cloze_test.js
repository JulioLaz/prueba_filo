// themes/platon/cloze_test.js — Cloze del video «Platón: ideas, alma y política» (0:00–10:00).
// v1.1 (2026-11-24): revisado con la transcripción del video: se corrigieron los tiempos de las 16 frases
//   (7 apuntaban a otro momento y 5 cortaban antes de terminar), «anamnesis» ya no es hueco (el video no la
//   dice; se acepta como respuesta de «reminiscencia») y se acepta «concupiscible», la palabra del video.
window.CLOZE_TEST = {
  title: "Cloze — Platón: Ideas, Alma y Política (0:00—10:00)",
  items: [
    {
      id: "p1",
      text: "1- Platón es sin duda el primer gran [[filósofo|filosofo]], es quien da a la filosofía su [[empaque]] y su obra ha tenido tal [[influencia]] histórica que si no se [[conoce]] es como si no se supiera nada de esta [[disciplina]].",
      feedbackOK: "¡Correcto! Platón es la figura fundacional de la filosofía occidental.",
      feedbackKO: "Recuerda: Platón da empaque a la filosofía y es imprescindible conocerlo.",
      videoHints: [
        "💡 Opciones: poeta | político | matemático | filósofo | orador | dramaturgo",
        "💡 Opciones: utilidad | simplicidad | practicidad | empaque | popularidad | accesibilidad",
        "💡 Opciones: limitación | irrelevancia | marginalidad | influencia | decadencia | obsolescencia",
        "💡 Opciones: ignora | rechaza | olvida | conoce | critica | cuestiona",
        "💡 Opciones: arte | ciencia | técnica | disciplina | profesión | oficio"
      ],
      videoSegment: { start: 0, end: 18 } // 0:00 - 0:19 (transcripción)
    },
    {
      id: "p2",
      text: "2- Su obra se da en un contexto de [[decadencia]]: la [[Grecia]] clásica se acerca a su fin y él recoge un acervo cultural [[antiguo]] porque sus ideales son los de la [[aristocracia]] griega: el [[bien]], la [[belleza]], la [[justicia]] y la idea de que no todos somos [[iguales]].",
      feedbackOK: "¡Perfecto! Platón opera en la decadencia de Grecia con ideales aristocráticos.",
      feedbackKO: "Recuerda: decadencia de Grecia, ideales aristocráticos (bien, belleza, justicia, desigualdad).",
      videoHints: [
        "💡 Opciones: esplendor | auge | crecimiento | decadencia | expansión | florecimiento",
        "💡 Opciones: Roma | Persia | Egipto | Grecia | Macedonia | Cartago",
        "💡 Opciones: moderno | reciente | nuevo | antiguo | contemporáneo | actual",
        "💡 Opciones: democracia | tiranía | oligarquía | aristocracia | plutocracia | oclocracia",
        "💡 Opciones: mal | fealdad | injusticia | bien | vicio | falsedad",
        "💡 Opciones: mal | fealdad | verdad | belleza | utilidad | bondad",
        "💡 Opciones: injusticia | desigualdad | tiranía | justicia | opresión | inequidad",
        "💡 Opciones: diferentes | diversos | únicos | iguales | desiguales | distintos"
      ],
      videoSegment: { start: 18, end: 40 } // 0:19 - 0:41 (transcripción)
    },
    {
      id: "p3",
      text: "3- Platón iba a haber sido [[político]], pero la [[muerte]] de [[Sócrates|Socrates]] dio un giro a su vida: abandonó [[Atenas]], viajó a [[Italia]] y cuando volvió compró un [[terreno]] donde construyó su [[Academia]], donde permaneció hasta su muerte enseñando y escribiendo [[diálogos|dialogos]].",
      feedbackOK: "¡Excelente! La muerte de Sócrates cambió el destino de Platón.",
      feedbackKO: "Recuerda: político → muerte de Sócrates → viajes → fundación de la Academia.",
      videoHints: [
        "💡 Opciones: filósofo | matemático | poeta | político | comerciante | militar",
        "💡 Opciones: nacimiento | exilio | juicio | muerte | condena | destierro",
        "💡 Opciones: Platón | Aristóteles | Parménides | Sócrates | Heráclito | Pitágoras",
        "💡 Opciones: Esparta | Tebas | Corinto | Atenas | Delfos | Mileto",
        "💡 Opciones: Egipto | Persia | Grecia | Italia | Siria | Macedonia",
        "💡 Opciones: edificio | palacio | templo | terreno | jardín | gimnasio",
        "💡 Opciones: Liceo | Gimnasio | Ágora | Academia | Pórtico | Jardín",
        "💡 Opciones: tratados | poemas | ensayos | diálogos | cartas | discursos"
      ],
      videoSegment: { start: 39, end: 66 } // 0:40 - 1:07 (transcripción)
    },
    {
      id: "p4",
      text: "4- Sus influencias: origen [[aristocrático|aristocratico]], decadencia de [[Atenas]] frente a [[Esparta]], [[Sócrates|Socrates]] con el método [[dialéctico|dialectico]], la antinomia de [[Heráclito|Heraclito]] y [[Parménides|Parmenides]] (problema de lo uno y lo [[múltiple|multiple]]), y los [[pitagóricos|pitagoricos]] con las [[matemáticas|matematicas]] y la [[música|musica]].",
      feedbackOK: "¡Correcto! Has identificado todas las influencias clave de Platón.",
      feedbackKO: "Recuerda: aristocracia, Esparta, Sócrates, Heráclito/Parménides, pitagóricos.",
      videoHints: [
        "💡 Opciones: democrático | plebeyo | comercial | aristocrático | artesanal | popular",
        "💡 Opciones: Esparta | Tebas | Corinto | Atenas | Delfos | Mileto",
        "💡 Opciones: Atenas | Tebas | Corinto | Esparta | Delfos | Mileto",
        "💡 Opciones: Platón | Aristóteles | Parménides | Sócrates | Pitágoras | Anaxágoras",
        "💡 Opciones: mayéutico | socrático | aristotélico | dialéctico | sofístico | retórico",
        "💡 Opciones: Sócrates | Platón | Aristóteles | Heráclito | Tales | Anaxímenes",
        "💡 Opciones: Heráclito | Tales | Anaximandro | Parménides | Zenón | Empédocles",
        "💡 Opciones: uno | simple | único | múltiple | diverso | plural",
        "💡 Opciones: presocráticos | sofistas | estoicos | pitagóricos | epicúreos | cínicos",
        "💡 Opciones: física | astronomía | geometría | matemáticas | aritmética | álgebra",
        "💡 Opciones: poesía | retórica | gimnasia | música | danza | teatro"
      ],
      videoSegment: { start: 62, end: 102 } // 1:03 - 1:43 (transcripción)
    },
    {
      id: "p5",
      text: "5- La teoría de las [[ideas]] es su solución al problema de lo [[uno]] y de lo [[múltiple|multiple]]: para reconciliar la [[multiplicidad]] y el [[cambio]] constante (lo que se percibe) con los [[conceptos]] eternos e [[inmutables]] (lo que se razona), concibe que existen dos [[mundos]].",
      feedbackOK: "¡Perfecto! Has captado la teoría de las Ideas como solución al problema ontológico.",
      feedbackKO: "Recuerda: multiplicidad cambiante vs conceptos eternos = dos mundos.",
      videoHints: [
        "💡 Opciones: formas | esencias | conceptos | ideas | categorías | arquetipos",
        "💡 Opciones: múltiple | diverso | plural | uno | singular | único",
        "💡 Opciones: uno | simple | único | múltiple | singular | individual",
        "💡 Opciones: unidad | simplicidad | identidad | multiplicidad | homogeneidad | singularidad",
        "💡 Opciones: permanencia | estabilidad | estatismo | cambio | quietud | inmutabilidad",
        "💡 Opciones: percepciones | sensaciones | ideas | conceptos | opiniones | creencias",
        "💡 Opciones: cambiantes | variables | mutables | inmutables | temporales | perecederos",
        "💡 Opciones: realidades | planos | dimensiones | mundos | niveles | esferas"
      ],
      videoSegment: { start: 111, end: 135 } // 1:52 - 2:16 (transcripción)
    },
    {
      id: "p6",
      text: "6- Las ideas son [[inteligencia]] pura (no [[materia]]), son [[formas]] (estructuras lógicas) y son [[causa]] (generan el mundo sensible). Las ideas son la [[verdad]] porque son [[eternas]] e [[inmutables]]. Están [[jerarquizadas]]: las más perfectas son las más [[abstractas]], presididas por las ideas de [[justicia]], [[belleza]] y la idea de [[bien]].",
      feedbackOK: "¡Excelente! Has captado la naturaleza, función y jerarquía de las Ideas.",
      feedbackKO: "Recuerda: inteligencia pura, formas lógicas, causa; jerarquía con el Bien en la cúspide.",
      videoHints: [
        "💡 Opciones: materia | sensación | emoción | inteligencia | voluntad | instinto",
        "💡 Opciones: inteligencia | espíritu | alma | materia | forma | esencia",
        "💡 Opciones: materias | contenidos | sustancias | formas | esencias | estructuras",
        "💡 Opciones: efecto | consecuencia | resultado | causa | producto | derivación",
        "💡 Opciones: apariencia | ilusión | error | verdad | opinión | falsedad",
        "💡 Opciones: temporales | perecederas | cambiantes | eternas | efímeras | transitorias",
        "💡 Opciones: cambiantes | variables | mutables | inmutables | dinámicas | fluctuantes",
        "💡 Opciones: igualadas | niveladas | equiparadas | jerarquizadas | homogeneizadas | uniformadas",
        "💡 Opciones: concretas | particulares | específicas | abstractas | materiales | sensibles",
        "💡 Opciones: injusticia | desigualdad | tiranía | justicia | inequidad | parcialidad",
        "💡 Opciones: fealdad | verdad | utilidad | belleza | bondad | perfección",
        "💡 Opciones: mal | fealdad | injusticia | bien | vicio | error"
      ],
      videoSegment: { start: 155, end: 201 } // 2:36 - 3:22 (transcripción)
    },
    {
      id: "p7",
      text: "7- La filosofía de Platón tiene una [[teleología]] o [[finalidad]] [[trascendente]] (el mundo de abajo [[depende]] del de arriba), es [[idealista]] (las ideas son lo más perfecto) y [[dualista]] (hay dos [[mundos]]).",
      feedbackOK: "¡Correcto! Has identificado los tres rasgos clave: teleología, idealismo, dualismo.",
      feedbackKO: "Recuerda: finalidad trascendente, idealismo (primacía de las Ideas), dualismo (dos mundos).",
      videoHints: [
        "💡 Opciones: mecanicismo | materialismo | determinismo | teleología | casualidad | azar",
        "💡 Opciones: casualidad | azar | contingencia | finalidad | coincidencia | accidente",
        "💡 Opciones: inmanente | interior | inherente | trascendente | intrínseca | propia",
        "💡 Opciones: determina | origina | causa | depende | fundamenta | genera",
        "💡 Opciones: materialista | empirista | realista | idealista | pragmatista | positivista",
        "💡 Opciones: monista | pluralista | holista | dualista | unitario | integral",
        "💡 Opciones: realidades | planos | dimensiones | mundos | esferas | niveles"
      ],
      videoSegment: { start: 212, end: 234 } // 3:33 - 3:55 (transcripción)
    },
    {
      id: "p8",
      text: "8- La teoría del [[conocimiento]] de Platón es fiel espejo de su [[ontología]], como reflejan el [[símil|simil]] de la [[línea|linea]] y el mito de la [[caverna]]: hay unos [[grados]] de conocimiento del menos al más [[perfecto]].",
      feedbackOK: "¡Perfecto! Has relacionado epistemología con ontología mediante los dos recursos platónicos.",
      feedbackKO: "Recuerda: símil de la línea y mito de la caverna ilustran los grados de conocimiento.",
      videoHints: [
        "💡 Opciones: opinión | creencia | ignorancia | conocimiento | percepción | sensación",
        "💡 Opciones: epistemología | gnoseología | metafísica | ontología | cosmología | antropología",
        "💡 Opciones: alegoría | metáfora | parábola | símil | analogía | comparación",
        "💡 Opciones: círculo | esfera | recta | línea | curva | espiral",
        "💡 Opciones: torre | laberinto | prisión | caverna | palacio | templo",
        "💡 Opciones: niveles | escalones | etapas | grados | fases | estadios",
        "💡 Opciones: imperfecto | deficiente | inferior | perfecto | limitado | incompleto"
      ],
      videoSegment: { start: 232, end: 245 } // 3:53 - 4:06 (transcripción)
    },
    {
      id: "p9",
      text: "9- El conocimiento [[sensorial]] es la [[opinión]] (doxa) y se divide en [[conjetura]] (eikasia) y [[creencia]] (pistis). El conocimiento [[racional]] es superior y tiene dos partes: el [[pensamiento]] (diánoia) basado en las [[matemáticas|matematicas]] y la [[inteligencia]] (noesis) alcanzada por la [[dialéctica|dialectica]].",
      feedbackOK: "¡Excelente! Has identificado los cuatro niveles del conocimiento platónico.",
      feedbackKO: "Recuerda: opinión sensorial (conjetura/creencia) vs conocimiento racional (pensamiento/inteligencia).",
      videoHints: [
        "💡 Opciones: racional | intelectual | lógico | sensorial | matemático | dialéctico",
        "💡 Opciones: ciencia | verdad | certeza | opinión | conocimiento | sabiduría",
        "💡 Opciones: creencia | opinión | certeza | conjetura | sospecha | convicción",
        "💡 Opciones: conjetura | sospecha | duda | creencia | certeza | convicción",
        "💡 Opciones: sensorial | empírico | perceptivo | racional | intuitivo | emocional",
        "💡 Opciones: inteligencia | razón | intuición | pensamiento | entendimiento | comprensión",
        "💡 Opciones: física | astronomía | geometría | matemáticas | lógica | aritmética",
        "💡 Opciones: pensamiento | razón | entendimiento | inteligencia | comprensión | juicio",
        "💡 Opciones: retórica | sofística | mayéutica | dialéctica | erística | oratoria"
      ],
      videoSegment: { start: 244, end: 274 } // 4:05 - 4:35 (transcripción)
    },
    {
      id: "p10",
      text: "10- El que conoce es el hombre, compuesto de [[materia]] (mortal) y [[alma]] (inmortal). El conocimiento es [[recordar]] lo que el alma vio en el mundo de las ideas: esto es la teoría de la [[reminiscencia|anamnesis]], el [[saber]] es [[recordar]].",
      feedbackOK: "¡Correcto! Has captado el dualismo antropológico y la teoría de la reminiscencia.",
      feedbackKO: "Recuerda: cuerpo mortal + alma inmortal; conocer = recordar (anamnesis).",
      videoHints: [
        "💡 Opciones: alma | espíritu | forma | materia | esencia | sustancia",
        "💡 Opciones: materia | cuerpo | espíritu | alma | mente | psique",
        "💡 Opciones: aprender | descubrir | investigar | recordar | observar | experimentar",
        "💡 Opciones: metempsicosis | transmigración | reencarnación | reminiscencia | inmortalidad | anamnesis",
        "💡 Opciones: ignorar | olvidar | desconocer | saber | dudar | imaginar",
        "💡 Opciones: aprender | descubrir | olvidar | recordar | inventar | crear"
      ],
      videoSegment: { start: 298, end: 340 } // 4:59 - 5:41 (transcripción)
    },
    {
      id: "p11",
      text: "11- En el mito del [[carro]] [[alado]], el [[alma]] tiene tres funciones: la [[racional]] (el auriga, que dirige el carro), la [[irascible]] (caballo blanco, [[defensa]] e [[ira]]) y la [[concupiscible|concupiscente]] (caballo negro, [[nutrición]] y [[deseos]], se desboca y provoca la caída).",
      feedbackOK: "¡Perfecto! Has descrito las tres partes del alma con el mito del carro alado.",
      feedbackKO: "Recuerda: racional (auriga), irascible (caballo blanco), concupiscible (caballo negro).",
      videoHints: [
        "💡 Opciones: barco | nave | caballo | carro | trineo | carruaje",
        "💡 Opciones: marino | terrestre | acuático | alado | subterráneo | celeste",
        "💡 Opciones: cuerpo | materia | espíritu | alma | mente | psique",
        "💡 Opciones: emocional | apetitiva | vegetativa | racional | sensitiva | locomotriz",
        "💡 Opciones: concupiscible | apetitiva | vegetativa | irascible | racional | sensitiva",
        "💡 Opciones: ataque | agresión | violencia | defensa | conquista | invasión",
        "💡 Opciones: amor | alegría | tristeza | ira | miedo | esperanza",
        "💡 Opciones: racional | irascible | vegetativa | concupiscible | sensitiva | apetitiva",
        "💡 Opciones: reproducción | respiración | circulación | nutrición | digestión | crecimiento",
        "💡 Opciones: necesidades | voluntades | aspiraciones | deseos | apetitos | impulsos"
      ],
      videoSegment: { start: 359, end: 391 } // 6:00 - 6:32 (transcripción)
    },
    {
      id: "p12",
      text: "12- El alma inmortal es [[prisionera]] del [[cuerpo]] y deben pasar varias [[reencarnaciones]] para [[liberarse]] y no volver a caer: [[tres]] para los [[filósofos|filosofos]] y [[diez]] para el resto.",
      feedbackOK: "¡Excelente! Has captado la doctrina pitagórica de las reencarnaciones en Platón.",
      feedbackKO: "Recuerda: alma prisionera, liberación por reencarnaciones (3 filósofos, 10 resto).",
      videoHints: [
        "💡 Opciones: liberada | redimida | salvada | prisionera | purificada | elevada",
        "💡 Opciones: alma | espíritu | mente | cuerpo | materia | sustancia",
        "💡 Opciones: metempsicosis | transmigraciones | resurrecciones | reencarnaciones | palingenesias | renacimientos",
        "💡 Opciones: encadenarse | atarse | aprisionarse | liberarse | sujetarse | esclavizarse",
        "💡 Opciones: uno | dos | cinco | tres | cuatro | seis",
        "💡 Opciones: poetas | políticos | guerreros | filósofos | artistas | comerciantes",
        "💡 Opciones: cinco | siete | ocho | diez | doce | quince"
      ],
      videoSegment: { start: 420, end: 433 } // 7:01 - 7:14 (transcripción)
    },
    {
      id: "p13",
      text: "13- El fin último de la [[ética]] es la [[política]], porque para Platón la [[polis]] está por encima del [[individuo]]: lo importante es el [[bien]] [[común]].",
      feedbackOK: "¡Correcto! Has captado la subordinación del individuo al bien común de la polis.",
      feedbackKO: "Recuerda: ética → política; polis > individuo; bien común.",
      videoHints: [
        "💡 Opciones: lógica | metafísica | estética | ética | retórica | física",
        "💡 Opciones: ética | economía | religión | política | arte | ciencia",
        "💡 Opciones: imperio | reino | ciudad | polis | aldea | nación",
        "💡 Opciones: colectivo | grupo | Estado | individuo | comunidad | pueblo",
        "💡 Opciones: mal | privado | individual | bien | particular | egoísta",
        "💡 Opciones: privado | particular | individual | común | propio | personal"
      ],
      videoSegment: { start: 451, end: 469 } // 7:32 - 7:50 (transcripción)
    },
    {
      id: "p14",
      text: "14- En el estado [[ideal]] existen tres [[clases]]: [[filósofos|filosofos]] (sabios), [[soldados]] (fuertes) y [[trabajadores]] (aspiran a la [[templanza]], trabajan para el sustento de la polis).",
      feedbackOK: "¡Perfecto! Has identificado las tres clases del estado ideal platónico.",
      feedbackKO: "Recuerda: filósofos-sabiduría, soldados-valentía, trabajadores-templanza.",
      videoHints: [
        "💡 Opciones: real | existente | histórico | ideal | concreto | actual",
        "💡 Opciones: castas | estamentos | categorías | clases | grupos | estratos",
        "💡 Opciones: políticos | guerreros | comerciantes | filósofos | artesanos | sacerdotes",
        "💡 Opciones: filósofos | comerciantes | artesanos | soldados | sacerdotes | campesinos",
        "💡 Opciones: comerciantes | artesanos | campesinos | trabajadores | esclavos | productores",
        "💡 Opciones: prudencia | justicia | fortaleza | templanza | sabiduría | valentía"
      ],
      videoSegment: { start: 480, end: 498 } // 8:01 - 8:19 (transcripción)
    },
    {
      id: "p15",
      text: "15- El [[equilibrio]] será garantizado por el [[estado]], con gran poder de [[control]] inspirado en [[Esparta]]: control [[demográfico]] y [[educativo]]. El [[gobierno]] y la [[educación]] estarán controlados por los [[filósofos|filosofos]].",
      feedbackOK: "¡Excelente! Has captado el poder totalitario del Estado platónico inspirado en Esparta.",
      feedbackKO: "Recuerda: Estado fuerte, control demográfico y educativo, gobierno filosófico.",
      videoHints: [
        "💡 Opciones: caos | desorden | conflicto | equilibrio | anarquía | inestabilidad",
        "💡 Opciones: individuo | familia | tribu | estado | clan | aldea",
        "💡 Opciones: libertad | autonomía | independencia | control | anarquía | desregulación",
        "💡 Opciones: Atenas | Tebas | Corinto | Esparta | Delfos | Mileto",
        "💡 Opciones: económico | militar | religioso | demográfico | comercial | cultural",
        "💡 Opciones: económico | militar | religioso | educativo | comercial | judicial",
        "💡 Opciones: economía | ejército | religión | gobierno | comercio | justicia",
        "💡 Opciones: economía | salud | defensa | educación | comercio | religión",
        "💡 Opciones: políticos | guerreros | comerciantes | filósofos | sacerdotes | artesanos"
      ],
      videoSegment: { start: 498, end: 515 } // 8:19 - 8:36 (transcripción)
    },
    {
      id: "p16",
      text: "16- Lo que describe es una [[dictadura]] más bien [[nazi]] como vehículo hacia la [[justicia]] y el equilibrio, algo [[aterrador]] que llevó a [[Karl]] [[Popper]] a nombrarlo como primer [[enemigo]] en \"La sociedad [[abierta]] y sus enemigos\".",
      feedbackOK: "¡Correcto! Has captado la crítica moderna de Popper al totalitarismo platónico.",
      feedbackKO: "Recuerda: dictadura nazi, Popper, 'La sociedad abierta y sus enemigos'.",
      videoHints: [
        "💡 Opciones: democracia | aristocracia | oligarquía | dictadura | timocracia | república",
        "💡 Opciones: democrática | liberal | anarquista | nazi | socialista | comunista",
        "💡 Opciones: injusticia | desigualdad | opresión | justicia | tiranía | inequidad",
        "💡 Opciones: esperanzador | inspirador | admirable | aterrador | reconfortante | alentador",
        "💡 Opciones: Friedrich | Immanuel | Georg | Karl | Ludwig | Martin",
        "💡 Opciones: Hegel | Kant | Marx | Popper | Nietzsche | Heidegger",
        "💡 Opciones: amigo | aliado | defensor | enemigo | partidario | seguidor",
        "💡 Opciones: cerrada | autoritaria | totalitaria | abierta | dictatorial | represiva"
      ],
      videoSegment: { start: 568, end: 596 } // 9:29 - 9:57 (transcripción)
    }
  ]
};

// Sistema de pistas mejorado con sopa de palabras
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

// Función para generar link directo al momento del video
window.CLOZE_TEST.getVideoLink = function(itemId) {
  const item = this.items.find(i => i.id === itemId);
  if (!item || !item.videoSegment) return null;
  
  const config = window.VIDEO_CONFIG?.platon;
  if (!config) return null;
  
  const actualStart = config.startTime + item.videoSegment.start;
  return `https://www.youtube.com/watch?v=${config.youtubeId}&t=${actualStart}s`;
};

// Función auxiliar para parsear las opciones de la sopa de palabras
window.CLOZE_TEST.parseHintOptions = function(hintText) {
  // Extrae las opciones del formato "💡 Opciones: opción1 | opción2 | ..."
  const match = hintText.match(/💡 Opciones: (.+)/);
  if (!match) return null;
  
  return match[1].split('|').map(opt => opt.trim());
};