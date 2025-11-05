// // themes/hedonismo/cloze_test.js - CON SISTEMA DE PISTAS
// window.CLOZE_TEST = {
//   title: "Cloze — Hedonismo (0:00–0:55)",
//   items: [
//     {
//       id: "a1",
//       text: "El hedonismo es una [[filosofía|doctrina]] que propone como [[bien máximo|fin supremo|fin|bien]] el [[placer]].",
//       feedbackOK: "Correcto. El hedonismo define el placer como bien/fin supremo.",
//       feedbackKO: "Recuerda: es una doctrina que toma el placer como valor central.",
//       videoHints: [
//         "💡 Revisa 0:00 - 0:08 para la definición breve",
//         "💡 No es 'vicio sin control'; es una doctrina con fin claro",
//         "💡 ¿Cuál es el 'bien supremo' que menciona?"
//       ],
//       videoSegment: { start: 0, end: 8 }
//     },
//     {
//       id: "a2",
//       text: "No debe confundirse con un [[arrojo indiscriminado|arrojo|impulso irreflexivo|abuso]] hacia los [[vicios|excesos|placeres]].",
//       feedbackOK: "Bien. Desmonta el prejuicio 'vicio = hedonismo'.",
//       feedbackKO: "Pista: advierte contra identificarlo con 'vicio sin conciencia'.",
//       videoHints: [
//         "💡 Revisa 0:00 - 0:15 donde corrige el prejuicio",
//         "💡 'Arrojo indiscriminado' y 'vicios': palabras clave",
//         "💡 ¿Qué diferencia establece con una vida meramente impulsiva?"
//       ],
//       videoSegment: { start: 0, end: 15 }
//     },
//     {
//       id: "a3",
//       text: "Existen distintos tipos de placeres: algunos [[físicos|fisicos|corporales|sensibles]] y otros [[intelectuales|mentales|espirituales]].",
//       feedbackOK: "Exacto. Distingue placeres físicos e intelectuales.",
//       feedbackKO: "Recuerda: el video contrasta lo corporal con lo intelectual.",
//       videoHints: [
//         "💡 Revisa 0:15 - 0:25 para la clasificación",
//         "💡 Dos rubros: cuerpo y mente",
//         "💡 ¿Qué ejemplos menciona de cada tipo?"
//       ],
//       videoSegment: { start: 15, end: 25 }
//     },
//     {
//       id: "a4",
//       text: "Arrojarnos sin [[conciencia|criterio|reflexión]] a lo que da placer no es hedonismo, sino vida [[instintiva|impulsiva]].",
//       feedbackOK: "Correcto. Hedonismo ≠ impulsividad sin control.",
//       feedbackKO: "Pista: habla de 'carácter meramente instintivo'.",
//       videoHints: [
//         "💡 Revisa 0:20 - 0:35 para esta distinción",
//         "💡 Subraya la necesidad de deliberación",
//         "💡 ¿Qué término usa para describir esa vida sin control?"
//       ],
//       videoSegment: { start: 20, end: 35 }
//     },
//     {
//       id: "a5",
//       text: "La práctica hedonista pide establecer [[criterios|principios|parámetros]] para orientar la [[búsqueda|aproximación|gestión]] del placer.",
//       feedbackOK: "Bien. Enfatiza pautas para elegir placeres.",
//       feedbackKO: "Pista: escucha 'establezcan ciertos criterios'.",
//       videoHints: [
//         "💡 Revisa 0:30 - 0:42 donde lo dice explícitamente",
//         "💡 No basta desear: hay que normar la elección",
//         "💡 ¿Qué se debe establecer antes de buscar placer?"
//       ],
//       videoSegment: { start: 30, end: 42 }
//     },
//     {
//       id: "a6",
//       text: "A través del [[placer]] se alcanza el [[bien|bienestar]], la [[felicidad|eudaimonía]] y la [[alegría|gozo|júbilo]].",
//       feedbackOK: "Perfecto. Enumera los fines que se logran por el placer.",
//       feedbackKO: "Revisa el cierre: menciona tres fines explícitos.",
//       videoHints: [
//         "💡 Revisa 0:40 - 0:55 para el cierre del fragmento",
//         "💡 Cita 'bien', 'felicidad' y 'alegría'",
//         "💡 ¿Qué función cumple el placer según el cierre?"
//       ],
//       videoSegment: { start: 40, end: 55 }
//     }
//   ]
// };

// // Sistema de pistas (igual que en Ética de Aristóteles)
// window.CLOZE_TEST.getHintForItem = function(itemId, hintLevel = 0) {
//   const item = this.items.find(i => i.id === itemId);
//   if (!item || !item.videoHints) return null;
//   const maxHints = item.videoHints.length;
//   if (hintLevel >= maxHints) return null;
//   return {
//     hint: item.videoHints[hintLevel],
//     hasMore: hintLevel < maxHints - 1,
//     videoSegment: item.videoSegment
//   };
// };

// // Link directo al momento del video (ajusta VIDEO_CONFIG.hedonismo)
// window.CLOZE_TEST.getVideoLink = function(itemId) {
//   const item = this.items.find(i => i.id === itemId);
//   if (!item || !item.videoSegment) return null;
//   const config = window.VIDEO_CONFIG?.hedonismo;
//   if (!config) return null;
//   const actualStart = (config.startTime || 0) + item.videoSegment.start;
//   return `https://www.youtube.com/watch?v=${config.youtubeId}&t=${actualStart}s`;
// };


// themes/hedonismo/cloze_test.js - Hedonismo y Epicuro
window.CLOZE_TEST = {
  title: "Cloze — Hedonismo (0:00—3:15)",
  items: [
    {
      id: "h1",
      text: "1- El hedonismo es la doctrina moral que considera que el [[placer]] es el máximo [[bien]], y por ende, las acciones placenteras son aquellas que pueden ser consideradas como [[buenas]].",
      feedbackOK: "¡Correcto! Has captado la definición fundamental del hedonismo.",
      feedbackKO: "Revisa la definición básica del hedonismo: ¿qué es el máximo bien?",
      videoHints: [
        "💡 Opciones: dolor | placer | virtud | conocimiento | poder | honor",
        "💡 Opciones: mal | bien | medio | fin | causa | efecto",
        "💡 Opciones: malas | neutras | buenas | injustas | incorrectas | prohibidas"
      ],
      videoSegment: { start: 0, end: 14 } // 0:00 - 0:14 (restado 2 seg del inicio 0)
    },
    {
      id: "h2",
      text: "2- Edoné en griego significaba precisamente [[placer]].",
      feedbackOK: "¡Perfecto! Conoces la etimología del término hedonismo.",
      feedbackKO: "Piensa en la raíz griega de la palabra hedonismo.",
      videoHints: [
        "💡 Opciones: dolor | felicidad | virtud | placer | sabiduría | justicia"
      ],
      videoSegment: { start: 12, end: 18 } // 0:14 - 0:18 (restado 2 seg de 13.78)
    },
    {
      id: "h3",
      text: "3- Dentro de la filosofía, el máximo referente del hedonismo es [[Epicuro|Ã‰picuro|epicuro]].",
      feedbackOK: "¡Exacto! Epicuro es el filósofo hedonista por excelencia.",
      feedbackKO: "Recuerda quién es el principal filósofo hedonista de la antigüedad.",
      videoHints: [
        "💡 Opciones: Sócrates | Platón | Aristóteles | Epicuro | Zenón | Diógenes"
      ],
      videoSegment: { start: 16, end: 23 } // 0:16 - 0:23 (restado 2 seg de 17.74)
    },
    {
      id: "h4",
      text: "4- La máxima de Epicuro era lisa y llanamente [[aumentar]] el placer y [[disminuir]] el dolor.",
      feedbackOK: "¡Correcto! Esta es la máxima epicúrea fundamental: más placer, menos dolor.",
      feedbackKO: "Piensa en los dos objetivos básicos de la ética epicúrea.",
      videoHints: [
        "💡 Opciones: disminuir | aumentar | evitar | controlar | eliminar | ignorar",
        "💡 Opciones: aumentar | controlar | disminuir | evitar | aceptar | tolerar"
      ],
      videoSegment: { start: 21, end: 28 } // 0:21 - 0:28 (restado 2 seg de 22.78)
    },
    {
      id: "h5",
      text: "5- La máxima de Epicuro se lograba a través de la búsqueda de la [[ataraxia|atalaxia]].",
      feedbackOK: "¡Perfecto! La ataraxia es el estado de tranquilidad del alma.",
      feedbackKO: "Recuerda el concepto griego para la paz mental y ausencia de perturbación.",
      videoHints: [
        "💡 Opciones: eudaimonía | ataraxia | apatía | sophrosyne | areté | phronesis"
      ],
      videoSegment: { start: 26, end: 32 } // 0:26 - 0:32 (restado 2 seg de 27.98)
    },
    {
      id: "h6",
      text: "6- Epicuro consideraba que el máximo placer es tener una vida [[simple]], [[moderada]], complementada con [[discusiones filosóficas|discusiones]] con amigos.",
      feedbackOK: "¡Excelente! El hedonismo epicúreo no es desenfrenado, sino moderado y reflexivo.",
      feedbackKO: "Recuerda: el placer epicúreo no es excesivo, sino equilibrado y contemplativo.",
      videoHints: [
        "💡 Opciones: lujosa | compleja | simple | extravagante | sofisticada | opulenta",
        "💡 Opciones: excesiva | moderada | intensa | extrema | desmedida | ilimitada",
        "💡 Opciones: fiestas | negocios | competencias | discusiones filosóficas | batallas | ceremonias"
      ],
      videoSegment: { start: 30, end: 46 } // 0:30 - 0:46 (restado 2 seg de 31.78)
    },
    {
      id: "h7",
      text: "7- Epicuro consideraba que no todos los [[deseos]] ni todos los [[placeres]] eran iguales, y aprender a [[distinguir]] entre ellos era la clave para alcanzar el máximo placer.",
      feedbackOK: "¡Correcto! La sabiduría epicúrea consiste en discernir entre tipos de deseos.",
      feedbackKO: "Piensa en la importancia de clasificar y elegir bien nuestros deseos.",
      videoHints: [
        "💡 Opciones: placeres | dolores | deseos | virtudes | pensamientos | acciones",
        "💡 Opciones: dolores | virtudes | placeres | deberes | castigos | premios",
        "💡 Opciones: perseguir | evitar | distinguir | eliminar | aumentar | controlar"
      ],
      videoSegment: { start: 44, end: 58 } // 0:44 - 0:58 (restado 2 seg de 45.58)
    },
    {
      id: "h8",
      text: "8- Los deseos [[naturales]] y [[necesarios]] son los más básicos como alimentarse, saciar la sed, abrigarse e incluso el sentido de la seguridad.",
      feedbackOK: "¡Perfecto! Estos son los deseos fundamentales para la supervivencia.",
      feedbackKO: "Recuerda la primera categoría: los deseos más esenciales para vivir.",
      videoHints: [
        "💡 Opciones: artificiales | culturales | naturales | sociales | políticos | religiosos",
        "💡 Opciones: opcionales | innecesarios | necesarios | superfluos | secundarios | triviales"
      ],
      videoSegment: { start: 59, end: 73 } // 0:59 - 1:13 (restado 2 seg de 61.10)
    },
    {
      id: "h9",
      text: "9- Los deseos [[naturales]] [[no necesarios|innecesarios]] pueden ser la conversación amena, la satisfacción sexual e incluso las artes.",
      feedbackOK: "¡Excelente! Estos deseos son naturales pero no indispensables para vivir.",
      feedbackKO: "Piensa en la segunda categoría: naturales pero no esenciales.",
      videoHints: [
        "💡 Opciones: artificiales | naturales | políticos | religiosos | económicos | militares",
        "💡 Opciones: necesarios | no necesarios | obligatorios | esenciales | vitales | críticos"
      ],
      videoSegment: { start: 72, end: 83 } // 1:15 - 1:23 (restado 2 seg de 77.06)
    },
    {
      id: "h10",
      text: "10- Los deseos que no son ni [[naturales]] ni [[necesarios]] incluyen la fama, el prestigio, el poder político y la búsqueda de gloria.",
      feedbackOK: "¡Correcto! Estos son los deseos más problemáticos según Epicuro.",
      feedbackKO: "Recuerda la tercera categoría: ni naturales ni necesarios.",
      videoHints: [
        "💡 Opciones: naturales | artificiales | básicos | esenciales | primarios | innatos",
        "💡 Opciones: necesarios | opcionales | vitales | indispensables | obligatorios | esenciales"
      ],
      videoSegment: { start: 82, end: 95 } // 1:25 - 1:35 (restado 2 seg de 87.18)
    },
    {
      id: "h11",
      text: "11- A los deseos naturales y necesarios hay que satisfacerlos de la manera más [[económica]] y [[simple]] posible.",
      feedbackOK: "¡Perfecto! La moderación y simplicidad son clave en el hedonismo epicúreo.",
      feedbackKO: "Piensa en cómo debemos satisfacer los deseos más básicos según Epicuro.",
      videoHints: [
        "💡 Opciones: lujosa | costosa | económica | extravagante | elaborada | sofisticada",
        "💡 Opciones: compleja | elaborada | simple | sofisticada | refinada | complicada"
      ],
      videoSegment: { start: 98, end: 107 } // 1:38 - 1:47 (restado 2 seg de 100.14)
    },
    {
      id: "h12",
      text: "12- Los deseos naturales innecesarios podemos perseguirlos pero sin caer en el [[exceso]], guiados por una búsqueda [[razonable]] y [[moderada]].",
      feedbackOK: "¡Excelente! Podemos disfrutarlos con medida y prudencia.",
      feedbackKO: "Recuerda: estos deseos son aceptables si no nos controlan.",
      videoHints: [
        "💡 Opciones: equilibrio | exceso | placer | dolor | medio | control",
        "💡 Opciones: irracional | extrema | razonable | impulsiva | descontrolada | obsesiva",
        "💡 Opciones: excesiva | extrema | desmedida | moderada | ilimitada | descontrolada"
      ],
      videoSegment: { start: 105, end: 120 } // 1:45 - 2:00 (restado 2 seg de 107.34)
    },
    {
      id: "h13",
      text: "13- No debemos arriesgar la [[salud]], las [[amistades]] o incluso nuestra [[economía]] persiguiendo deseos naturales innecesarios.",
      feedbackOK: "¡Correcto! El placer no debe comprometer aspectos fundamentales de nuestra vida.",
      feedbackKO: "Piensa en qué cosas no debemos sacrificar por placeres secundarios.",
      videoHints: [
        "💡 Opciones: riqueza | fama | poder | salud | gloria | honor",
        "💡 Opciones: enemigos | conocidos | amistades | rivales | competidores | extraños",
        "💡 Opciones: fama | política | economía | religión | arte | ciencia"
      ],
      videoSegment: { start: 117, end: 128 } // 1:57 - 2:08 (restado 2 seg de 119.94)
    },
    {
      id: "h14",
      text: "14- Los deseos no naturales y no necesarios hay que [[evitar]] su persecución porque el placer que nos pueda dar es totalmente [[efímero]].",
      feedbackOK: "¡Perfecto! Estos deseos traen placer pasajero y sufrimiento duradero.",
      feedbackKO: "Recuerda qué dice Epicuro sobre la fama, el poder y la gloria.",
      videoHints: [
        "💡 Opciones: perseguir | controlar | moderar | evitar | equilibrar | disfrutar",
        "💡 Opciones: duradero | permanente | eterno | efímero | constante | infinito"
      ],
      videoSegment: { start: 135, end: 144 } // 2:15 - 2:24 (restado 2 seg de 137.26)
    },
    {
      id: "h15",
      text: "15- Problemática del hedonismo: ¿acaso no sería [[egoísta]] perseguir solamente el placer? ¿Podemos ser virtuosos aun cuando no genere [[placer]]?",
      feedbackOK: "¡Excelente reflexión crítica! Has captado las objeciones al hedonismo.",
      feedbackKO: "Piensa en las críticas que se le hacen al hedonismo como doctrina moral.",
      videoHints: [
        "💡 Opciones: generoso | altruista | virtuoso | egoísta | solidario | compasivo",
        "💡 Opciones: dolor | placer | virtud | deber | honor | justicia"
      ],
      videoSegment: { start: 146, end: 165 } // 2:26 - 2:45 (restado 2 seg de 147.98)
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
  
  const config = window.VIDEO_CONFIG?.hedonismo;
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