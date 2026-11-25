// themes/etica_kant/cloze_test.js
// Cloze — Ética de Kant. Armado con la transcripción del video Lq0ZGcqn-Zg (5:26): 21 frases en el
// orden del video, con sus tiempos (videoSegment contado desde startTime = 1) y una pista de
// opciones por hueco.
// Versión 2.0 (2026-11-25): rehecho con la transcripción (antes, comparado con un resumen: varios
//   tramos apuntaban a otro momento y algunas pistas no correspondían a sus huecos).
window.CLOZE_TEST = {
  title: "Cloze — Ética de Kant (0:14—5:26)",
  items: [
    {
      id: "k1",
      text: "Dilema: ¿está bien [[mentir]] en algunas ocasiones? En la [[Segunda Guerra Mundial]] escondemos en casa a un grupo de [[judíos|judios]] y los soldados [[nazis]] preguntan si hay alguno. ¿Tenemos que decir siempre la [[verdad]]?",
      feedbackOK: "Correcto. Así empieza el video: con un dilema.",
      feedbackKO: "Revisá el ejemplo del comienzo del video.",
      videoHints: [
        "💡 Opciones: obedecer | callar | mentir | gritar | huir | robar",
        "💡 Opciones: Guerra de Troya | Primera Cruzada | Edad Media | Segunda Guerra Mundial | Guerra Fría | Revolución Francesa",
        "💡 Opciones: ladrones | judíos | turistas | soldados | niños | médicos",
        "💡 Opciones: aliados | nazis | franceses | griegos | romanos | piratas",
        "💡 Opciones: nada | excusa | broma | verdad | opinión | mentira"
      ],
      videoSegment: { start: 13, end: 56 } // 0:14 - 0:57
    },
    {
      id: "k2",
      text: "Las corrientes [[teleológicas|teleologicas]] o [[consecuencialistas]] creen que una acción es moralmente aceptable en base a las [[consecuencias]] previsibles. Ellos mentirían para evitar un [[mal mayor]].",
      feedbackOK: "Exacto. Juzgan las acciones por sus resultados.",
      feedbackKO: "Pensá en las éticas que miran los resultados.",
      videoHints: [
        "💡 Opciones: religiosas | kantianas | formales | estoicas | teleológicas | dogmáticas",
        "💡 Opciones: consecuencialistas | escépticas | racionalistas | idealistas | formalistas | deontológicas",
        "💡 Opciones: leyes | consecuencias | costumbres | intenciones | emociones | normas",
        "💡 Opciones: mal mayor | error común | problema chico | bien menor | castigo leve | gasto extra"
      ],
      videoSegment: { start: 55, end: 80 } // 0:56 - 1:21
    },
    {
      id: "k3",
      text: "Otros filósofos creen que una acción es siempre [[correcta]] o incorrecta en sí misma, con total [[independencia]] de sus consecuencias. [[Kant]] está de acuerdo con ellos.",
      feedbackOK: "Correcto. Para Kant, lo correcto no depende del resultado.",
      feedbackKO: "Revisá la postura opuesta a los consecuencialistas.",
      videoHints: [
        "💡 Opciones: rápida | agradable | correcta | costosa | útil | famosa",
        "💡 Opciones: dependencia | independencia | atención | cuidado | relación | medida",
        "💡 Opciones: Epicuro | Kant | Mill | Hume | Aristóteles | Bentham"
      ],
      videoSegment: { start: 79, end: 94 } // 1:20 - 1:35
    },
    {
      id: "k4",
      text: "A veces creemos que va a pasar algo y pasa lo contrario: no somos capaces de [[predecir]] las consecuencias, así que no podemos usarlas como [[criterio ético|criterio etico|criterio]].",
      feedbackOK: "Muy bien. Es el argumento de Kant contra las consecuencias.",
      feedbackKO: "¿Qué no podemos hacer con las consecuencias?",
      videoHints: [
        "💡 Opciones: medir | negar | olvidar | cambiar | predecir | evitar",
        "💡 Opciones: ejemplo práctico | regla de cortesía | criterio ético | norma legal | consejo útil | dato histórico"
      ],
      videoSegment: { start: 93, end: 108 } // 1:34 - 1:49
    },
    {
      id: "k5",
      text: "Para Kant, nada puede ser llamado absolutamente bueno excepto la [[buena voluntad]]. Si actuás con buena voluntad, nadie podrá [[reprocharte]] nada.",
      feedbackOK: "Exacto. Lo único bueno sin restricción.",
      feedbackKO: "Revisá qué es lo único absolutamente bueno.",
      videoHints: [
        "💡 Opciones: buena voluntad | riqueza | fama | inteligencia | suerte | felicidad",
        "💡 Opciones: pagarte | enseñarte | prestarte | reprocharte | regalarte | quitarte"
      ],
      videoSegment: { start: 107, end: 126 } // 1:48 - 2:07
    },
    {
      id: "k6",
      text: "Kant estaba en contra de las éticas [[materiales]], las que valoran las acciones en función de la consecución de un [[fin]].",
      feedbackOK: "Correcto. Las éticas materiales buscan un fin.",
      feedbackKO: "¿Cómo llama Kant a las éticas que buscan un fin?",
      videoHints: [
        "💡 Opciones: puras | autónomas | universales | racionales | materiales | formales",
        "💡 Opciones: principio | mandato | deber | fin | acuerdo | castigo"
      ],
      videoSegment: { start: 125, end: 133 } // 2:06 - 2:14
    },
    {
      id: "k7",
      text: "Ejemplos de éticas materiales: la ética aristotélica se basa en la [[felicidad]], Epicuro en el [[placer]] y los [[utilitaristas]] buscan maximizar la felicidad del [[mayor número|mayor numero]] de seres.",
      feedbackOK: "Muy bien. Felicidad, placer y utilidad son fines.",
      feedbackKO: "Revisá los tres ejemplos de éticas materiales.",
      videoHints: [
        "💡 Opciones: felicidad | riqueza | tradición | obediencia | fuerza | fama",
        "💡 Opciones: deber | trabajo | dolor | silencio | sacrificio | placer",
        "💡 Opciones: cínicos | idealistas | kantianos | estoicos | escépticos | utilitaristas",
        "💡 Opciones: pueblo griego | propio yo | mayor número | menor número | sabio | grupo elegido"
      ],
      videoSegment: { start: 132, end: 156 } // 2:13 - 2:37
    },
    {
      id: "k8",
      text: "La ética kantiana no será material sino [[formal]]: no se vincula con ningún fin ni con los [[resultados]], sino con la [[intención|intencion]] de la acción.",
      feedbackOK: "Exacto. Una ética formal.",
      feedbackKO: "¿Con qué se vincula la ética de Kant?",
      videoHints: [
        "💡 Opciones: religiosa | material | hedonista | formal | empírica | práctica",
        "💡 Opciones: principios | valores | deberes | leyes | resultados | motivos",
        "💡 Opciones: ganancia | utilidad | consecuencia | eficacia | intención | rapidez"
      ],
      videoSegment: { start: 156, end: 167 } // 2:37 - 2:48
    },
    {
      id: "k9",
      text: "Solo actuamos correctamente cuando obramos por [[deber]] en sí mismo, sin buscar nada a [[cambio]].",
      feedbackOK: "Correcto. Por deber, no por interés.",
      feedbackKO: "¿Por qué hay que obrar, según Kant?",
      videoHints: [
        "💡 Opciones: placer | deber | miedo | costumbre | interés | gusto",
        "💡 Opciones: propósito | tiempo | gusto | favor | cambio | medias"
      ],
      videoSegment: { start: 166, end: 173 } // 2:47 - 2:54
    },
    {
      id: "k10",
      text: "Como todos queremos ser felices, la búsqueda de [[felicidad]] no se puede considerar un deber, ya que el deber implica una acción aceptada a [[disgusto]].",
      feedbackOK: "Muy bien. Lo que deseamos naturalmente no es un deber.",
      feedbackKO: "¿Por qué la felicidad no es un deber?",
      videoHints: [
        "💡 Opciones: libertad | sabiduría | virtud | verdad | felicidad | justicia",
        "💡 Opciones: ciegas | propósito | medias | gusto | disgusto | tiempo"
      ],
      videoSegment: { start: 172, end: 185 } // 2:53 - 3:06
    },
    {
      id: "k11",
      text: "Kant elabora una ética [[universal]] y [[necesaria]]. No da recetas: como buen [[ilustrado]], nos invita a pensar por nosotros mismos con un criterio, el [[imperativo categórico|imperativo categorico]].",
      feedbackOK: "Exacto. Pensar por uno mismo con un criterio.",
      feedbackKO: "Revisá cómo consigue Kant una ética universal.",
      videoHints: [
        "💡 Opciones: personal | parcial | local | universal | privada | relativa",
        "💡 Opciones: opcional | dudosa | casual | necesaria | relativa | pasajera",
        "💡 Opciones: cínico | monje | romántico | ilustrado | sofista | escéptico",
        "💡 Opciones: cálculo de placeres | contrato social | término medio | imperativo categórico | principio de utilidad | imperativo hipotético"
      ],
      videoSegment: { start: 187, end: 209 } // 3:08 - 3:30
    },
    {
      id: "k12",
      text: "El imperativo categórico es el [[criterio]] que usamos para decidir qué es [[correcto]] o incorrecto.",
      feedbackOK: "Correcto.",
      feedbackKO: "¿Para qué sirve el imperativo categórico?",
      videoHints: [
        "💡 Opciones: criterio | deseo | capricho | rumor | castigo | premio",
        "💡 Opciones: barato | famoso | rápido | agradable | correcto | útil"
      ],
      videoSegment: { start: 208, end: 215 } // 3:29 - 3:36
    },
    {
      id: "k13",
      text: "Primera formulación: obra solo según una [[máxima|maxima]] tal que puedas querer al mismo tiempo que se torne [[ley universal]].",
      feedbackOK: "Exacto. La primera fórmula.",
      feedbackKO: "Revisá cómo se enuncia el imperativo categórico.",
      videoHints: [
        "💡 Opciones: promesa | máxima | orden | emoción | sospecha | costumbre",
        "💡 Opciones: deseo personal | ley universal | excepción | costumbre local | secreto | consejo"
      ],
      videoSegment: { start: 215, end: 225 } // 3:36 - 3:46
    },
    {
      id: "k14",
      text: "Cada vez que tomes una decisión, deseá que tu forma de actuar se convierta en ley universal: que el resto de los [[seres humanos]] actúe como vos. No vale tener una [[doble moral]]: debés ser [[consecuente]].",
      feedbackOK: "Muy bien. Sin excepciones para uno mismo.",
      feedbackKO: "Revisá qué significa actuar como ley universal.",
      videoHints: [
        "💡 Opciones: vecinos | animales | gobiernos | seres humanos | objetos | dioses",
        "💡 Opciones: doble moral | ley propia | gran fortuna | voz fuerte | mente abierta | buena memoria",
        "💡 Opciones: consecuente | callado | obediente | astuto | indiferente | rápido"
      ],
      videoSegment: { start: 224, end: 243 } // 3:45 - 4:04
    },
    {
      id: "k15",
      text: "Si decidís no robar porque temés que te atrapen, no seguís el imperativo categórico: eso es un imperativo [[hipotético|hipotetico]]. Actuás así por temor a un [[castigo]].",
      feedbackOK: "Exacto. Un mandato condicional.",
      feedbackKO: "Revisá el ejemplo de no robar por miedo.",
      videoHints: [
        "💡 Opciones: universal | categórico | formal | absoluto | moral | hipotético",
        "💡 Opciones: castigo | elogio | regalo | aplauso | premio | saludo"
      ],
      videoSegment: { start: 248, end: 263 } // 4:09 - 4:24
    },
    {
      id: "k16",
      text: "Si no robás porque estás convencido de que todo el mundo debería actuar así, no por [[premios]] o castigos, estás siguiendo el imperativo [[categórico|categorico]].",
      feedbackOK: "Correcto. Sin condiciones.",
      feedbackKO: "Revisá el segundo ejemplo de no robar.",
      videoHints: [
        "💡 Opciones: razones | premios | valores | deberes | leyes | principios",
        "💡 Opciones: útil | condicional | material | práctico | hipotético | categórico"
      ],
      videoSegment: { start: 262, end: 277 } // 4:23 - 4:38
    },
    {
      id: "k17",
      text: "Segunda formulación: obra de tal modo que uses la [[humanidad]], en tu persona y en la de cualquier otro, siempre como un [[fin]] y nunca como un [[medio]].",
      feedbackOK: "Muy bien. La humanidad como fin.",
      feedbackKO: "Revisá la segunda formulación.",
      videoHints: [
        "💡 Opciones: naturaleza | riqueza | tradición | humanidad | ciudad | razón",
        "💡 Opciones: precio | recurso | objeto | producto | número | fin",
        "💡 Opciones: amigo | modelo | maestro | igual | ejemplo | medio"
      ],
      videoSegment: { start: 276, end: 289 } // 4:37 - 4:50
    },
    {
      id: "k18",
      text: "Los seres humanos somos los únicos capaces de [[moralidad]], y eso nos convierte en seres con [[dignidad]]. No debemos tratar a los demás como un [[instrumento]] para obtener algo.",
      feedbackOK: "Exacto. Personas, no herramientas.",
      feedbackKO: "¿Qué nos da dignidad?",
      videoHints: [
        "💡 Opciones: belleza | moralidad | fuerza | memoria | velocidad | riqueza",
        "💡 Opciones: precio | fama | poder | dignidad | dueño | utilidad",
        "💡 Opciones: maestro | instrumento | igual | amigo | compañero | ejemplo"
      ],
      videoSegment: { start: 288, end: 298 } // 4:49 - 4:59
    },
    {
      id: "k19",
      text: "Todos somos igual de [[dignos]] con independencia de nuestras particularidades. En esta noción de dignidad se basan los [[derechos humanos]].",
      feedbackOK: "Correcto. La base de los derechos humanos.",
      feedbackKO: "¿Qué se basa en la dignidad kantiana?",
      videoHints: [
        "💡 Opciones: dignos | altos | ricos | sabios | fuertes | famosos",
        "💡 Opciones: normas de cortesía | tratados comerciales | reglas del fútbol | leyes de tránsito | derechos humanos | precios justos"
      ],
      videoSegment: { start: 297, end: 309 } // 4:58 - 5:10
    },
    {
      id: "k20",
      text: "La grandeza de Kant es su defensa de la [[autonomía|autonomia]] humana y la [[universalización|universalizacion]] de las normas de nuestra conducta.",
      feedbackOK: "Muy bien.",
      feedbackKO: "Revisá el balance final del video.",
      videoHints: [
        "💡 Opciones: riqueza | tradición | felicidad | dependencia | obediencia | autonomía",
        "💡 Opciones: privatización | prohibición | relajación | universalización | excepción | venta"
      ],
      videoSegment: { start: 308, end: 315 } // 5:09 - 5:16
    },
    {
      id: "k21",
      text: "Frase de Kant: dos cosas llenan el ánimo de admiración y respeto: el [[cielo estrellado]] sobre mí y la [[ley moral]] en mí.",
      feedbackOK: "¡Perfecto! Una de las frases más célebres de Kant.",
      feedbackKO: "Revisá la frase con la que termina el video.",
      videoHints: [
        "💡 Opciones: bosque profundo | cielo estrellado | sol radiante | monte elevado | río caudaloso | mar infinito",
        "💡 Opciones: fuerza física | fe ciega | razón pura | suerte buena | voluntad libre | ley moral"
      ],
      videoSegment: { start: 314, end: 325 } // 5:15 - 5:26
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
  const config = window.VIDEO_CONFIG?.etica_kant;
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
