// themes/nietzsche_superhombre/cloze_test.js — Cloze del video «Nietzsche» (FbvXaVJTKrU, 0:00–6:48; después el video habla de Hegel).
// v1.0 (2026-11-25): 13 frases tomadas de la transcripción del video, en orden y con sus tiempos
//   (videoSegment en segundos contados desde startTime = 1) y una pista de opciones por hueco.
window.CLOZE_TEST = {
  title: "Cloze — Nietzsche: Dios ha muerto y el superhombre (0:00–6:48)",
  items: [
    {
      id: "n1",
      text: "Nietzsche decía que la [[verdad]] está en constante [[cambio]]: no hay una verdad [[absoluta]]. Por eso a lo largo de su vida se fue [[contradiciendo]], y esa contradicción era parte de su pensamiento.",
      feedbackOK: "Correcto. Para Nietzsche no hay verdades absolutas.",
      feedbackKO: "Revisá el comienzo del video.",
      videoHints: [
        "💡 Opciones: fuerza | fe | razón | ley | verdad | moral",
        "💡 Opciones: peligro | reposo | orden | secreto | silencio | cambio",
        "💡 Opciones: simple | nueva | pequeña | absoluta | relativa | falsa",
        "💡 Opciones: obedeciendo | contradiciendo | copiando | callando | olvidando | repitiendo"
      ],
      videoSegment: { start: 2, end: 27 } // 0:03 - 0:28
    },
    {
      id: "n2",
      text: "«Dios ha [[muerto]]» es la máxima de Nietzsche. Pero su filosofía no se enfoca en Dios, sino en cómo afecta a la [[sociedad]] que Dios no [[exista]].",
      feedbackOK: "Exacto. A Nietzsche le interesan las consecuencias culturales.",
      feedbackKO: "¿En qué se enfoca la filosofía de Nietzsche?",
      videoHints: [
        "💡 Opciones: ganado | muerto | dormido | vuelto | nacido | hablado",
        "💡 Opciones: naturaleza | teología | música | geometría | astronomía | sociedad",
        "💡 Opciones: hable | exista | perdone | juzgue | crezca | castigue"
      ],
      videoSegment: { start: 37, end: 80 } // 0:38 - 1:21
    },
    {
      id: "n3",
      text: "La frase quiere decir que, como sociedad, hemos dejado de [[creer]] en Dios: lo hemos [[matado]]. Como decía [[Feuerbach]], no es Dios quien crea al hombre, sino el hombre quien crea a Dios.",
      feedbackOK: "Muy bien. Somos nosotros quienes dejamos de creer.",
      feedbackKO: "Revisá qué quiere decir «Dios ha muerto».",
      videoHints: [
        "💡 Opciones: creer | votar | temer | rezar | cantar | pagar",
        "💡 Opciones: salvado | dibujado | llamado | olvidado | vendido | matado",
        "💡 Opciones: Feuerbach | Aristóteles | Platón | Hegel | Kant | Descartes"
      ],
      videoSegment: { start: 80, end: 102 } // 1:21 - 1:43
    },
    {
      id: "n4",
      text: "El [[pilar]] del conocimiento, la filosofía y la [[moral]] de Occidente era Dios. Sin él, estamos solos frente a la [[nada]], sin respuestas y sin [[objetivos]].",
      feedbackOK: "Correcto. Así aparece el nihilismo.",
      feedbackKO: "¿Qué pasa cuando cae el fundamento de Occidente?",
      videoHints: [
        "💡 Opciones: adorno | juego | techo | pilar | detalle | rincón",
        "💡 Opciones: música | cocina | moda | moral | pintura | geografía",
        "💡 Opciones: nada | fiesta | ciudad | multitud | familia | riqueza",
        "💡 Opciones: libros | árboles | amigos | objetivos | cuerpos | vecinos"
      ],
      videoSegment: { start: 102, end: 120 } // 1:43 - 2:01
    },
    {
      id: "n5",
      text: "¿Es malo? Según Nietzsche, no: sin un Dios que nos diga cómo actuar, el mundo es un [[lienzo]] en blanco y somos [[libres]] de pintarlo a nuestro gusto, como en el cuadro El [[caminante]] sobre el mar de nubes.",
      feedbackOK: "¡Exacto! El vacío es también libertad.",
      feedbackKO: "Revisá el cuadro que menciona el video.",
      videoHints: [
        "💡 Opciones: castillo | pozo | laberinto | templo | desierto | lienzo",
        "💡 Opciones: libres | incapaces | obligados | tristes | culpables | esclavos",
        "💡 Opciones: náufrago | rey | monje | pescador | soldado | caminante"
      ],
      videoSegment: { start: 119, end: 142 } // 2:00 - 2:23
    },
    {
      id: "n6",
      text: "Nietzsche lo representa con tres transformaciones: el [[camello]] carga con el peso de la religión; el [[león|leon]] derriba la moral anterior; y el [[niño|nino]], inocente, juega y crea su propia moral, hasta llegar al [[superhombre]].",
      feedbackOK: "Muy bien. Del camello al niño: de obedecer a crear.",
      feedbackKO: "Revisá la metamorfosis que cuenta el video.",
      videoHints: [
        "💡 Opciones: buey | elefante | caballo | oso | burro | camello",
        "💡 Opciones: tigre | toro | águila | león | lobo | zorro",
        "💡 Opciones: niño | maestro | soldado | anciano | rey | sacerdote",
        "💡 Opciones: héroe | esclavo | último hombre | superhombre | santo | rebaño"
      ],
      videoSegment: { start: 142, end: 188 } // 2:23 - 3:09
    },
    {
      id: "n7",
      text: "El superhombre [[disfruta]] de la vida. Rechaza la idea de un [[más allá|mas alla]], que solo provoca [[desprecio]] por la vida y el [[presente]].",
      feedbackOK: "Correcto. El superhombre es fiel a la tierra.",
      feedbackKO: "¿Por qué Nietzsche rechaza el más allá?",
      videoHints: [
        "💡 Opciones: sufre | teme | olvida | huye | disfruta | desprecia",
        "💡 Opciones: trabajo | jardín | cuerpo | más allá | viaje | presente",
        "💡 Opciones: cuidado | respeto | alegría | interés | amor | desprecio",
        "💡 Opciones: paraíso | presente | pasado | infierno | futuro | cielo"
      ],
      videoSegment: { start: 187, end: 210 } // 3:08 - 3:31
    },
    {
      id: "n8",
      text: "El superhombre vive de tal forma que le gustaría [[repetirla]]. ¿Repetirías tu vida tal cual, sin [[cambiar]] nada? Si la respuesta es sí, estás [[disfrutando]] tu vida.",
      feedbackOK: "¡Muy bien! Es la prueba del eterno retorno.",
      feedbackKO: "Revisá la pregunta que hace el video.",
      videoHints: [
        "💡 Opciones: venderla | repetirla | olvidarla | contarla | acortarla | esconderla",
        "💡 Opciones: sentir | decir | pensar | vivir | cambiar | saber",
        "💡 Opciones: esperando | postergando | perdiendo | sufriendo | disfrutando | malgastando"
      ],
      videoSegment: { start: 203, end: 226 } // 3:24 - 3:47
    },
    {
      id: "n9",
      text: "Para Nietzsche, la palabra «[[bueno]]» fue deformada. Un buen pico no es uno con buenos sentimientos, sino uno [[fuerte]] y duradero que cumple su [[función|funcion]]. La religión deformó la palabra desde una mentalidad de [[esclavo]].",
      feedbackOK: "Exacto. En la moral noble, bueno es lo fuerte.",
      feedbackKO: "Revisá el ejemplo del pico.",
      videoHints: [
        "💡 Opciones: libre | santo | útil | bueno | justo | bello",
        "💡 Opciones: lento | amable | tímido | triste | humilde | fuerte",
        "💡 Opciones: religión | promesa | oración | función | historia | familia",
        "💡 Opciones: sabio | noble | rey | artista | guerrero | esclavo"
      ],
      videoSegment: { start: 226, end: 263 } // 3:47 - 4:24
    },
    {
      id: "n10",
      text: "Los [[débiles|debiles]], que no pueden enfrentar a los fuertes, dicen que lo bueno es su situación: ser pobres, [[humildes]], débiles. Así nace la moral de esclavo. El superhombre la rechaza y es [[creador]] de sus propios [[valores]].",
      feedbackOK: "Muy bien. La moral de esclavo invierte los valores.",
      feedbackKO: "¿Cómo nace la moral de esclavo, según el video?",
      videoHints: [
        "💡 Opciones: ricos | sabios | guerreros | fuertes | débiles | reyes",
        "💡 Opciones: poderosos | valientes | humildes | famosos | orgullosos | alegres",
        "💡 Opciones: copiador | enemigo | esclavo | creador | juez | guardián",
        "💡 Opciones: amos | valores | dioses | miedos | deudas | castigos"
      ],
      videoSegment: { start: 263, end: 296 } // 4:24 - 4:57
    },
    {
      id: "n11",
      text: "Por las modificaciones que hizo su [[hermana]], el superhombre terminó siendo un referente para el pensamiento [[nazi]]. Pero hay una diferencia: el superhombre de Nietzsche puede estar en [[silla de ruedas]].",
      feedbackOK: "Exacto. El superhombre no es una raza ni fuerza física.",
      feedbackKO: "Revisá cómo se malinterpretó al superhombre.",
      videoHints: [
        "💡 Opciones: esposa | vecina | maestra | alumna | hermana | madre",
        "💡 Opciones: budista | griego | romano | cristiano | nazi | medieval",
        "💡 Opciones: un estadio | silla de ruedas | un palacio | un trono | un tanque | un caballo"
      ],
      videoSegment: { start: 296, end: 315 } // 4:57 - 5:16
    },
    {
      id: "n12",
      text: "Si no existe Dios, tampoco existen verdades [[absolutas]]. Nietzsche rechazaba la idea de una verdad [[imperecedera]] y [[muerta]], que no cambia nunca.",
      feedbackOK: "Correcto. Para Nietzsche la verdad no es eterna.",
      feedbackKO: "¿Qué consecuencia tiene la muerte de Dios sobre la verdad?",
      videoHints: [
        "💡 Opciones: nuevas | pequeñas | relativas | absolutas | simples | falsas",
        "💡 Opciones: imperecedera | joven | cambiante | breve | frágil | viva",
        "💡 Opciones: libre | nueva | viva | muerta | móvil | alegre"
      ],
      videoSegment: { start: 315, end: 331 } // 5:16 - 5:32
    },
    {
      id: "n13",
      text: "Muchos autores veían la muerte de Dios de forma [[negativa]]: si no hay Dios, todo está permitido y nada importa. Nietzsche dice lo mismo, pero con un tono [[optimista]]: todo está permitido, soy [[libre]]; solo tenemos una vida, hay que [[disfrutarla]].",
      feedbackOK: "¡Excelente! Nietzsche convierte el vacío en libertad.",
      feedbackKO: "Revisá el final del tramo sobre Nietzsche.",
      videoHints: [
        "💡 Opciones: religiosa | científica | musical | alegre | graciosa | negativa",
        "💡 Opciones: resignado | temeroso | optimista | aburrido | enojado | triste",
        "💡 Opciones: culpable | perdido | condenado | solo | esclavo | libre",
        "💡 Opciones: disfrutarla | esconderla | olvidarla | temerla | negarla | venderla"
      ],
      videoSegment: { start: 376, end: 407 } // 6:17 - 6:48
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
  const config = window.VIDEO_CONFIG?.nietzsche_superhombre;
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
