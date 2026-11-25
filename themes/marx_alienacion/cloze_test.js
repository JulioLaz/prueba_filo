// themes/marx_alienacion/cloze_test.js — Cloze del video «Alienación y enajenación en Marx» (MNamo55NDp4, 0:00–8:01).
// v1.0 (2026-11-25): 11 frases tomadas de la transcripción del video, en orden y con sus tiempos
//   (videoSegment en segundos contados desde startTime = 1) y una pista de opciones por hueco.
window.CLOZE_TEST = {
  title: "Cloze — Marx: alienación y enajenación (0:00–8:01)",
  items: [
    {
      id: "m1",
      text: "Para Marx, la sociedad capitalista está dividida entre la [[burguesía|burguesia]], dueña del [[capital]], y el [[proletariado]], que solo posee su [[fuerza de trabajo]].",
      feedbackOK: "Correcto. Dos clases: los dueños del capital y los que solo tienen su trabajo.",
      feedbackKO: "Revisá el comienzo del video: ¿en qué dos clases se divide la sociedad?",
      videoHints: [
        "💡 Opciones: aristocracia | nobleza | burguesía | monarquía | iglesia | clase media",
        "💡 Opciones: templo | mercado | ejército | capital | sindicato | Estado",
        "💡 Opciones: campesinado | proletariado | funcionariado | clero | patriciado | empresariado",
        "💡 Opciones: fortuna | fuerza de trabajo | empresa | fábrica | tierra | herencia"
      ],
      videoSegment: { start: 31, end: 52 } // 0:32 - 0:53
    },
    {
      id: "m2",
      text: "En el mercado de trabajo, los proletarios [[venden]] su fuerza de trabajo al dueño del capital. No es un acuerdo [[libre]]: no tienen otra opción si quieren [[sobrevivir|subsistir]].",
      feedbackOK: "Exacto. Para Marx, ese pacto no es libre.",
      feedbackKO: "¿Por qué el acuerdo entre obrero y capitalista no es libre?",
      videoHints: [
        "💡 Opciones: compran | esconden | heredan | venden | alquilan | regalan",
        "💡 Opciones: secreto | eterno | justo | legal | libre | obligatorio",
        "💡 Opciones: sobrevivir | estudiar | descansar | viajar | ganar fama | divertirse"
      ],
      videoSegment: { start: 51, end: 80 } // 0:52 - 1:21
    },
    {
      id: "m3",
      text: "La diferencia entre el valor de la [[materia prima]] y el del producto [[terminado]] es la [[plusvalía|plusvalia]]: el valor que agregó el [[trabajador]] con su tiempo, su esfuerzo y sus conocimientos.",
      feedbackOK: "Muy bien. La plusvalía es el valor que crea el trabajo.",
      feedbackKO: "Revisá cómo explica el video el valor extra o agregado.",
      videoHints: [
        "💡 Opciones: marca | materia prima | máquina | publicidad | tienda | fábrica",
        "💡 Opciones: terminado | regalado | importado | roto | usado | robado",
        "💡 Opciones: deuda | propina | plusvalía | impuesto | inflación | jubilación",
        "💡 Opciones: banco | trabajador | cliente | vendedor | Estado | gerente"
      ],
      videoSegment: { start: 79, end: 119 } // 1:20 - 2:00
    },
    {
      id: "m4",
      text: "Si a ese valor extra se le restan los costos, queda la [[ganancia]]. Pero no es del trabajador: es del dueño del capital, que le paga a cambio un [[salario]] mínimo.",
      feedbackOK: "Correcto. La ganancia queda para el capitalista.",
      feedbackKO: "¿Qué recibe el trabajador a cambio de lo que produce?",
      videoHints: [
        "💡 Opciones: deuda | ganancia | pérdida | donación | herencia | multa",
        "💡 Opciones: porcentaje | acción | premio | regalo | salario | terreno"
      ],
      videoSegment: { start: 118, end: 149 } // 1:59 - 2:30
    },
    {
      id: "m5",
      text: "«Alienación» viene de la misma raíz que [[alien]]: [[extraño]], extranjero. «Enajenación» viene de [[ajeno]]: algo que no nos es propio y nos hace sentir fuera de nosotros mismos.",
      feedbackOK: "Exacto. Alienarse es volverse extraño a uno mismo.",
      feedbackKO: "Revisá de dónde vienen las palabras alienación y enajenación.",
      videoHints: [
        "💡 Opciones: alma | aliento | alien | alianza | alegría | alimento",
        "💡 Opciones: extraño | amigo | familiar | cercano | propio | conocido",
        "💡 Opciones: propio | cercano | nuestro | ajeno | querido | íntimo"
      ],
      videoSegment: { start: 149, end: 187 } // 2:30 - 3:08
    },
    {
      id: "m6",
      text: "En el primer sentido, el trabajador está alienado del [[producto]]: lo hizo con sus propias [[manos]] y sus conocimientos, pero cuando está terminado no le [[pertenece]].",
      feedbackOK: "Muy bien. Es la alienación del producto.",
      feedbackKO: "¿Cuál es el primer sentido de la alienación?",
      videoHints: [
        "💡 Opciones: uniforme | contrato | horario | jefe | producto | salario",
        "💡 Opciones: vacaciones | ahorros | deudas | manos | palabras | sueños",
        "💡 Opciones: pertenece | cuesta | importa | gusta | duele | sirve"
      ],
      videoSegment: { start: 192, end: 229 } // 3:13 - 3:50
    },
    {
      id: "m7",
      text: "Tampoco es dueño de las [[ganancias]]: recibe un salario [[fijo]] que no guarda proporción con lo que produjo, y que podría pagarse con pocas [[horas]] de su propio trabajo.",
      feedbackOK: "Correcto. Está alienado también del fruto económico de su trabajo.",
      feedbackKO: "Revisá el segundo sentido: el económico.",
      videoHints: [
        "💡 Opciones: herramientas | vacaciones | deudas | máquinas | fábricas | ganancias",
        "💡 Opciones: secreto | justo | variable | enorme | doble | fijo",
        "💡 Opciones: meses | vidas | horas | semanas | décadas | años"
      ],
      videoSegment: { start: 228, end: 268 } // 3:49 - 4:29
    },
    {
      id: "m8",
      text: "Desde el siglo XX, el trabajador es una pequeña parte de un [[engranaje]] industrial, como Chaplin en [[Tiempos modernos|Tiempos Modernos]], ajustando una [[tuerca]] todo el día. Esto se llama [[fordismo]].",
      feedbackOK: "Exacto. En la cadena de montaje nadie siente que hizo el producto.",
      feedbackKO: "Revisá el ejemplo de la película de Chaplin.",
      videoHints: [
        "💡 Opciones: banquete | concierto | torneo | engranaje | museo | jardín",
        "💡 Opciones: La quimera del oro | Luces de la ciudad | El gran dictador | Candilejas | Tiempos modernos | El chico",
        "💡 Opciones: receta | guitarra | pizarra | pelota | tuerca | planta",
        "💡 Opciones: feudalismo | fordismo | comunismo | humanismo | estoicismo | turismo"
      ],
      videoSegment: { start: 268, end: 310 } // 4:29 - 5:11
    },
    {
      id: "m9",
      text: "En un taller [[artesanal|artesano]], en cambio, una persona empieza y termina un producto y se siente [[identificada]] con él. Marx imaginaba que, sin capitalismo, uno podría ser [[pescador]] por la mañana sin quedar atado a una tarea [[repetitiva]].",
      feedbackOK: "Muy bien. El trabajo artesanal permite reconocerse en la obra.",
      feedbackKO: "¿Qué contrasta el video con la cadena de montaje?",
      videoHints: [
        "💡 Opciones: virtual | militar | industrial | automático | artesanal | digital",
        "💡 Opciones: explotada | enojada | perdida | aburrida | identificada | cansada",
        "💡 Opciones: obrero | rey | esclavo | soldado | pescador | banquero",
        "💡 Opciones: variada | divertida | creativa | repetitiva | libre | elegida"
      ],
      videoSegment: { start: 309, end: 355 } // 5:10 - 5:56
    },
    {
      id: "m10",
      text: "El trabajo debería ser la máxima [[realización]] del ser humano. Pero el obrero se siente [[fuera de sí|fuera de si]] en la fábrica, y solo se siente él mismo fuera de ella, con su [[familia]] y sus amigos.",
      feedbackOK: "Exacto. Es la alienación en la actividad.",
      feedbackKO: "¿Dónde se siente él mismo el obrero alienado?",
      videoHints: [
        "💡 Opciones: condena | pérdida | obligación | realización | deuda | pausa",
        "💡 Opciones: orgulloso | feliz | realizado | fuera de sí | en su casa | libre",
        "💡 Opciones: capataz | cliente | contador | familia | máquina | patrón"
      ],
      videoSegment: { start: 355, end: 412 } // 5:56 - 6:53
    },
    {
      id: "m11",
      text: "Además, el trabajador está alienado en su [[conciencia]]: no reconoce a qué [[clase]] pertenece ni cuáles son sus intereses. Esto se relaciona con la [[ideología]], que presenta los intereses de una clase como si fueran [[universales]].",
      feedbackOK: "¡Excelente! La ideología oculta la conciencia de clase.",
      feedbackKO: "Revisá el final del video: la conciencia y la ideología.",
      videoHints: [
        "💡 Opciones: conciencia | barrio | cuerpo | familia | fábrica | salario",
        "💡 Opciones: escuela | familia | edad | religión | clase | ciudad",
        "💡 Opciones: medicina | ideología | aritmética | gimnasia | música | geografía",
        "💡 Opciones: secretos | universales | privados | falsos | pequeños | antiguos"
      ],
      videoSegment: { start: 422, end: 469 } // 7:03 - 7:50
    }
  ]
};

// Pistas escalonadas: una por hueco, con opciones para elegir
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

// Link directo al momento del video
window.CLOZE_TEST.getVideoLink = function(itemId) {
  const item = this.items.find(i => i.id === itemId);
  if (!item || !item.videoSegment) return null;
  const config = window.VIDEO_CONFIG?.marx_alienacion;
  if (!config) return null;
  const actualStart = config.startTime + item.videoSegment.start;
  return `https://www.youtube.com/watch?v=${config.youtubeId}&t=${actualStart}s`;
};

// Extrae las opciones del formato "💡 Opciones: a | b | ..."
window.CLOZE_TEST.parseHintOptions = function(hintText) {
  const match = hintText.match(/💡 Opciones: (.+)/);
  if (!match) return null;
  return match[1].split('|').map(opt => opt.trim());
};
