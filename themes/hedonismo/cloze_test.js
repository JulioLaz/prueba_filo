// themes/hedonismo/cloze_test.js
// Cloze — Hedonismo (Epicuro). Video Yt0Yjtn0VSc: 17 frases en el orden del video, con sus tiempos
// (videoSegment contado desde startTime = 1) y una pista de opciones por hueco.
// Versión 2.0 (2026-11-25): revisado con la transcripción: tramos con los tiempos reales, «egoísmo»
//   en lugar de «exceso» (lo que dice el video) y 2 frases nuevas del final; el video llega a 3:10.
window.CLOZE_TEST = {
  title: "Cloze — Hedonismo (0:00—3:10)",
  items: [
    {
      id: "h1",
      text: "1- El hedonismo es la doctrina moral que considera que el [[placer]] es el máximo [[bien]], y por ende, las acciones placenteras son aquellas que pueden ser consideradas como [[buenas]].",
      feedbackOK: "¡Correcto! Has captado la definición fundamental del hedonismo.",
      feedbackKO: "Revisa la definición básica del hedonismo: ¿qué es el máximo bien?",
      videoHints: [
        "💡 Opciones: honor | dolor | placer | poder | virtud | conocimiento",
        "💡 Opciones: fin | causa | medio | bien | efecto | mal",
        "💡 Opciones: injustas | buenas | incorrectas | malas | neutras | prohibidas"
      ],
      videoSegment: { start: 0, end: 13 } // 0:01 - 0:14
    },
    {
      id: "h2",
      text: "2- Edoné en griego significaba precisamente [[placer]].",
      feedbackOK: "¡Perfecto! Conoces la etimología del término hedonismo.",
      feedbackKO: "Piensa en la raíz griega de la palabra hedonismo.",
      videoHints: [
        "💡 Opciones: virtud | placer | justicia | felicidad | dolor | sabiduría"
      ],
      videoSegment: { start: 12, end: 17 } // 0:13 - 0:18
    },
    {
      id: "h3",
      text: "3- Dentro de la filosofía, el máximo referente del hedonismo es [[Epicuro|Épicuro|epicuro]].",
      feedbackOK: "¡Exacto! Epicuro es el filósofo hedonista por excelencia.",
      feedbackKO: "Recuerda quién es el principal filósofo hedonista de la antigüedad.",
      videoHints: [
        "💡 Opciones: Platón | Aristóteles | Zenón | Epicuro | Diógenes | Sócrates"
      ],
      videoSegment: { start: 16, end: 22 } // 0:17 - 0:23
    },
    {
      id: "h4",
      text: "4- La máxima de Epicuro era lisa y llanamente [[aumentar]] el placer y [[disminuir]] el dolor.",
      feedbackOK: "¡Correcto! Esta es la máxima epicúrea fundamental: más placer, menos dolor.",
      feedbackKO: "Piensa en los dos objetivos básicos de la ética epicúrea.",
      videoHints: [
        "💡 Opciones: evitar | controlar | disminuir | eliminar | aumentar | ignorar",
        "💡 Opciones: disminuir | evitar | aceptar | controlar | tolerar | aumentar"
      ],
      videoSegment: { start: 21, end: 27 } // 0:22 - 0:28
    },
    {
      id: "h5",
      text: "5- La máxima de Epicuro se lograba a través de la búsqueda de la [[ataraxia|atalaxia]].",
      feedbackOK: "¡Perfecto! La ataraxia es el estado de tranquilidad del alma.",
      feedbackKO: "Recuerda el concepto griego para la paz mental y ausencia de perturbación.",
      videoHints: [
        "💡 Opciones: areté | ataraxia | sophrosyne | eudaimonía | phronesis | apatía"
      ],
      videoSegment: { start: 26, end: 31 } // 0:27 - 0:32
    },
    {
      id: "h6",
      text: "6- Epicuro consideraba que el máximo placer es tener una vida [[simple]], [[moderada]], complementada con [[discusiones filosóficas|discusiones]] con amigos.",
      feedbackOK: "¡Excelente! El hedonismo epicúreo no es desenfrenado, sino moderado y reflexivo.",
      feedbackKO: "Recuerda: el placer epicúreo no es excesivo, sino equilibrado y contemplativo.",
      videoHints: [
        "💡 Opciones: simple | sofisticada | extravagante | lujosa | compleja | opulenta",
        "💡 Opciones: intensa | desmedida | moderada | ilimitada | excesiva | extrema",
        "💡 Opciones: fiestas | discusiones filosóficas | competencias | batallas | negocios | ceremonias"
      ],
      videoSegment: { start: 30, end: 45 } // 0:31 - 0:46
    },
    {
      id: "h7",
      text: "7- Epicuro consideraba que no todos los [[deseos]] ni todos los [[placeres]] eran iguales, y aprender a [[distinguir]] entre ellos era la clave para alcanzar el máximo placer.",
      feedbackOK: "¡Correcto! La sabiduría epicúrea consiste en discernir entre tipos de deseos.",
      feedbackKO: "Piensa en la importancia de clasificar y elegir bien nuestros deseos.",
      videoHints: [
        "💡 Opciones: placeres | deseos | dolores | acciones | pensamientos | virtudes",
        "💡 Opciones: deberes | castigos | dolores | premios | placeres | virtudes",
        "💡 Opciones: perseguir | evitar | distinguir | eliminar | aumentar | controlar"
      ],
      videoSegment: { start: 44, end: 58 } // 0:45 - 0:59
    },
    {
      id: "h8",
      text: "8- Los deseos [[naturales]] y [[necesarios]] son los más básicos como alimentarse, saciar la sed, abrigarse e incluso el sentido de la seguridad.",
      feedbackOK: "¡Perfecto! Estos son los deseos fundamentales para la supervivencia.",
      feedbackKO: "Recuerda la primera categoría: los deseos más esenciales para vivir.",
      videoHints: [
        "💡 Opciones: naturales | culturales | políticos | artificiales | religiosos | sociales",
        "💡 Opciones: opcionales | triviales | secundarios | necesarios | superfluos | innecesarios"
      ],
      videoSegment: { start: 59, end: 73 } // 1:00 - 1:14
    },
    {
      id: "h9",
      text: "9- Los deseos [[naturales]] [[no necesarios|innecesarios]] pueden ser la conversación amena, la satisfacción sexual e incluso las artes.",
      feedbackOK: "¡Excelente! Estos deseos son naturales pero no indispensables para vivir.",
      feedbackKO: "Piensa en la segunda categoría: naturales pero no esenciales.",
      videoHints: [
        "💡 Opciones: militares | económicos | políticos | religiosos | naturales | artificiales",
        "💡 Opciones: obligatorios | esenciales | necesarios | no necesarios | vitales | críticos"
      ],
      videoSegment: { start: 72, end: 83 } // 1:13 - 1:24
    },
    {
      id: "h10",
      text: "10- Los deseos que no son ni [[naturales]] ni [[necesarios]] incluyen la fama, el prestigio, el poder político y la búsqueda de gloria.",
      feedbackOK: "¡Correcto! Estos son los deseos más problemáticos según Epicuro.",
      feedbackKO: "Recuerda la tercera categoría: ni naturales ni necesarios.",
      videoHints: [
        "💡 Opciones: naturales | básicos | innatos | artificiales | primarios | esenciales",
        "💡 Opciones: opcionales | indispensables | vitales | obligatorios | esenciales | necesarios"
      ],
      videoSegment: { start: 82, end: 94 } // 1:23 - 1:35
    },
    {
      id: "h11",
      text: "11- A los deseos naturales y necesarios hay que satisfacerlos de la manera más [[económica]] y [[simple]] posible.",
      feedbackOK: "¡Perfecto! La moderación y simplicidad son clave en el hedonismo epicúreo.",
      feedbackKO: "Piensa en cómo debemos satisfacer los deseos más básicos según Epicuro.",
      videoHints: [
        "💡 Opciones: elaborada | sofisticada | costosa | lujosa | extravagante | económica",
        "💡 Opciones: sofisticada | refinada | simple | compleja | complicada | elaborada"
      ],
      videoSegment: { start: 98, end: 107 } // 1:39 - 1:48
    },
    {
      id: "h12",
      text: "12- Los deseos naturales innecesarios podemos perseguirlos pero sin caer en el [[egoísmo|egoismo]], guiados por una búsqueda [[razonable]] y [[moderada]].",
      feedbackOK: "¡Excelente! Podemos disfrutarlos con medida y prudencia.",
      feedbackKO: "Recuerda: estos deseos son aceptables si no nos controlan.",
      videoHints: [
        "💡 Opciones: error | exceso | cansancio | egoísmo | olvido | miedo",
        "💡 Opciones: extrema | impulsiva | irracional | obsesiva | razonable | descontrolada",
        "💡 Opciones: descontrolada | extrema | excesiva | desmedida | moderada | ilimitada"
      ],
      videoSegment: { start: 106, end: 120 } // 1:47 - 2:01
    },
    {
      id: "h13",
      text: "13- No debemos arriesgar la [[salud]], las [[amistades]] o incluso nuestra [[economía]] persiguiendo deseos naturales innecesarios.",
      feedbackOK: "¡Correcto! El placer no debe comprometer aspectos fundamentales de nuestra vida.",
      feedbackKO: "Piensa en qué cosas no debemos sacrificar por placeres secundarios.",
      videoHints: [
        "💡 Opciones: riqueza | salud | fama | gloria | poder | honor",
        "💡 Opciones: extraños | rivales | competidores | enemigos | amistades | conocidos",
        "💡 Opciones: religión | arte | ciencia | fama | economía | política"
      ],
      videoSegment: { start: 118, end: 132 } // 1:59 - 2:13
    },
    {
      id: "h14",
      text: "14- Los deseos no naturales y no necesarios hay que [[evitar]] su persecución porque el placer que nos pueda dar es totalmente [[efímero]].",
      feedbackOK: "¡Perfecto! Estos deseos traen placer pasajero y sufrimiento duradero.",
      feedbackKO: "Recuerda qué dice Epicuro sobre la fama, el poder y la gloria.",
      videoHints: [
        "💡 Opciones: disfrutar | controlar | equilibrar | perseguir | evitar | moderar",
        "💡 Opciones: permanente | constante | duradero | efímero | eterno | infinito"
      ],
      videoSegment: { start: 131, end: 143 } // 2:12 - 2:24
    },
    {
      id: "h15",
      text: "15- Problemática del hedonismo: ¿acaso no sería [[egoísta]] perseguir solamente el placer? ¿Podemos ser virtuosos aun cuando no genere [[placer]]?",
      feedbackOK: "¡Excelente reflexión crítica! Has captado las objeciones al hedonismo.",
      feedbackKO: "Piensa en las críticas que se le hacen al hedonismo como doctrina moral.",
      videoHints: [
        "💡 Opciones: generoso | virtuoso | altruista | egoísta | compasivo | solidario",
        "💡 Opciones: justicia | virtud | deber | placer | dolor | honor"
      ],
      videoSegment: { start: 146, end: 165 } // 2:27 - 2:46
    },
    {
      id: "h16",
      text: "16- ¿Acaso no es el sistema [[capitalista]] un sistema que nos da constantemente estímulos [[placenteros]] para que nunca dejemos de perseguirlos, y así nuestra vida lleva al [[sinsentido|sin sentido]]?",
      feedbackOK: "Exacto. Una crítica al placer sin límite.",
      feedbackKO: "Revisá la pregunta sobre el sistema económico.",
      videoHints: [
        "💡 Opciones: griego | solar | escolar | capitalista | antiguo | feudal",
        "💡 Opciones: placenteros | escasos | lentos | silenciosos | dolorosos | aburridos",
        "💡 Opciones: silencio | orden | éxito | equilibrio | sinsentido | descanso"
      ],
      videoSegment: { start: 163, end: 179 } // 2:44 - 3:00
    },
    {
      id: "h17",
      text: "17- ¿Debemos defender el [[placer]] como lo mejor de la vida o encontrar otras [[motivaciones]] para nuestros actos [[morales]]?",
      feedbackOK: "Muy bien. Es la pregunta con la que cierra el video.",
      feedbackKO: "Revisá la pregunta final del video.",
      videoHints: [
        "💡 Opciones: dinero | placer | trabajo | dolor | silencio | poder",
        "💡 Opciones: excusas | motivaciones | fronteras | deudas | recetas | obligaciones",
        "💡 Opciones: musicales | físicos | deportivos | morales | rápidos | comerciales"
      ],
      videoSegment: { start: 178, end: 190 } // 2:59 - 3:11
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
  const config = window.VIDEO_CONFIG?.hedonismo;
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
