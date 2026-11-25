// themes/etica_aristoteles/cloze_test.js
// Cloze — Aristóteles: Lo Bueno es la Felicidad. Video qYU0hTprTAc (parte de ética, 0:54 a 6:01):
// 17 frases en el orden del video, con sus tiempos (videoSegment contado desde startTime = 1) y
// una pista de opciones por hueco.
// Versión 2.0 (2026-11-25): revisado con la transcripción: tramos con los tiempos reales, sin el
//   agregado «no al placer del momento», suma el intelectualismo moral (frase 8) y arregla la clave
//   de «dianoéticas».
window.CLOZE_TEST = {
  title: "Cloze — Ética de Aristóteles (0:54—6:01)",
  items: [
    {
      id: "a1",
      text: "1- Las acciones humanas son [[medios]] para conseguir otras cosas en relación a un [[fin]] último que es el [[bien supremo|felicidad]].",
      feedbackOK: "¡Correcto! Has captado la estructura teleológica de las acciones humanas.",
      feedbackKO: "Revisa la relación entre acciones, medios y fines en la ética aristotélica.",
      videoHints: [
        "💡 Opciones: esencias | causas | medios | valores | fines | principios",
        "💡 Opciones: método | medio | proceso | fin | resultado | inicio",
        "💡 Opciones: bien relativo | bien supremo | bien temporal | bien común | bien material | bien aparente"
      ],
      videoSegment: { start: 53, end: 69 } // 0:54 - 1:10
    },
    {
      id: "a2",
      text: "2- La ética de Aristóteles es [[teleológica|teleologica]], es decir, que tiende a un [[fin]], y cuál es ese fin: la [[felicidad]].",
      feedbackOK: "¡Perfecto! La teleología es fundamental en el pensamiento aristotélico.",
      feedbackKO: "Recuerda el concepto clave: una ética orientada hacia un fin.",
      videoHints: [
        "💡 Opciones: relativista | teleológica | emotivista | utilitarista | deontológica | pragmática",
        "💡 Opciones: causa | norma | deber | fin | principio | medio",
        "💡 Opciones: placer | honor | virtud | poder | felicidad | riqueza"
      ],
      videoSegment: { start: 67, end: 81 } // 1:08 - 1:22
    },
    {
      id: "a3",
      text: "3- Para Aristóteles, una acción es [[correcta]] si te hace [[feliz]].",
      feedbackOK: "¡Exacto! Lo correcto se mide por su aporte a la felicidad, entendida como vida virtuosa y no como placer momentáneo.",
      feedbackKO: "Piensa en el criterio que usa Aristóteles para evaluar las acciones.",
      videoHints: [
        "💡 Opciones: correcta | obligatoria | prohibida | necesaria | opcional | incorrecta",
        "💡 Opciones: sabio | feliz | poderoso | rico | honrado | famoso"
      ],
      videoSegment: { start: 80, end: 87 } // 1:21 - 1:28
    },
    {
      id: "a4",
      text: "4- Las personas que están todo el día buscando [[placeres]] inmediatos se acaban convirtiendo en una especie de [[esclavos]].",
      feedbackOK: "¡Correcto! La búsqueda exclusiva del placer conduce a la esclavitud, no a la libertad.",
      feedbackKO: "Reflexiona sobre qué pasa con quienes solo buscan gratificación inmediata.",
      videoHints: [
        "💡 Opciones: placeres | honores | virtudes | dolores | conocimientos | riquezas",
        "💡 Opciones: sabios | felices | esclavos | señores | libres | virtuosos"
      ],
      videoSegment: { start: 95, end: 123 } // 1:36 - 2:04
    },
    {
      id: "a5",
      text: "5- El [[honor]] no es algo que tengas en ti mismo, sino que es algo que los [[demás]] te confieren, así que tampoco puede ser la felicidad.",
      feedbackOK: "¡Perfecto! El honor depende de otros, no está en nuestro control.",
      feedbackKO: "Piensa en por qué el honor no puede ser el bien supremo.",
      videoHints: [
        "💡 Opciones: placer | honor | poder | virtud | dinero | saber",
        "💡 Opciones: mismos | demás | dioses | filósofos | reyes | sabios"
      ],
      videoSegment: { start: 125, end: 144 } // 2:06 - 2:25
    },
    {
      id: "a6",
      text: "6- La [[riqueza]] en sí misma no tiene ningún valor, no es más que un [[medio]] para conseguir otras cosas, así que tampoco puede ser el bien supremo.",
      feedbackOK: "¡Excelente! La riqueza es instrumental, no un fin en sí mismo.",
      feedbackKO: "Recuerda la distinción entre fines y medios.",
      videoHints: [
        "💡 Opciones: placer | poder | virtud | fama | riqueza | honor",
        "💡 Opciones: fin | causa | medio | efecto | principio | objetivo"
      ],
      videoSegment: { start: 144, end: 163 } // 2:25 - 2:44
    },
    {
      id: "a7",
      text: "7- La felicidad debe buscarse en aquello que solo los seres humanos sabemos hacer: la actividad [[intelectual]], [[razonar]].",
      feedbackOK: "¡Correcto! La razón es lo distintivo del ser humano para Aristóteles.",
      feedbackKO: "¿Qué capacidad nos distingue de otros seres vivos?",
      videoHints: [
        "💡 Opciones: intelectual | emocional | artística | física | corporal | social",
        "💡 Opciones: sentir | percibir | desear | razonar | recordar | imaginar"
      ],
      videoSegment: { start: 163, end: 177 } // 2:44 - 2:58
    },
    {
      id: "a8",
      text: "8- A diferencia del [[intelectualismo moral]] de Sócrates, no basta con conocer qué es el bien: si queremos ser justos y buenos, tendremos que [[practicar]] la bondad y la justicia creando un [[hábito]].",
      feedbackOK: "¡Perfecto! Aristóteles supera el intelectualismo socrático: la virtud requiere práctica.",
      feedbackKO: "Recuerda la crítica de Aristóteles a Sócrates sobre el conocimiento y la virtud.",
      videoHints: [
        "💡 Opciones: estoicismo | utilitarismo | escepticismo | relativismo | intelectualismo moral | hedonismo",
        "💡 Opciones: memorizar | contemplar | estudiar | practicar | imaginar | analizar",
        "💡 Opciones: hábito | teoría | principio | concepto | idea | definición"
      ],
      videoSegment: { start: 178, end: 200 } // 2:59 - 3:21
    },
    {
      id: "a9",
      text: "9- Si hay [[exceso]] o [[defecto]], no hay virtud. La virtud requiere la justa proporción que es la vía [[intermedia|media]] entre dos excesos.",
      feedbackOK: "¡Excelente! El término medio es la doctrina central de la ética aristotélica.",
      feedbackKO: "Piensa en la teoría del justo medio entre extremos.",
      videoHints: [
        "💡 Opciones: equilibrio | proporción | medida | armonía | moderación | exceso",
        "💡 Opciones: proporción | balance | medio | virtud | término | defecto",
        "💡 Opciones: mínima | absoluta | intermedia | extrema | relativa | máxima"
      ],
      videoSegment: { start: 199, end: 217 } // 3:20 - 3:38
    },
    {
      id: "a10",
      text: "10- La virtud del [[valor]] es el justo medio entre los excesos de la [[temeridad]] y la [[cobardía|cobardia]].",
      feedbackOK: "¡Perfecto ejemplo! Has entendido cómo funciona el término medio aristotélico.",
      feedbackKO: "Piensa en los dos extremos del valor: demasiado arriesgado vs demasiado miedoso.",
      videoHints: [
        "💡 Opciones: generosidad | justicia | fortaleza | valor | prudencia | templanza",
        "💡 Opciones: miedo | prudencia | valentía | audacia | temeridad | cautela",
        "💡 Opciones: osadía | audacia | valentía | imprudencia | cobardía | temeridad"
      ],
      videoSegment: { start: 237, end: 247 } // 3:58 - 4:08
    },
    {
      id: "a11",
      text: "11- Dentro de todas las virtudes, la más importante es la de la [[justicia]]. La justicia genera [[armonía]] entre las diversas funciones del ser humano.",
      feedbackOK: "¡Correcto! La justicia es la virtud completa que armoniza todas las demás.",
      feedbackKO: "Recuerda cuál es la virtud que Aristóteles considera suprema.",
      videoHints: [
        "💡 Opciones: valor | justicia | templanza | sabiduría | prudencia | fortaleza",
        "💡 Opciones: división | caos | contradicción | conflicto | armonía | desorden"
      ],
      videoSegment: { start: 246, end: 262 } // 4:07 - 4:23
    },
    {
      id: "a12",
      text: "12- La justicia implica dos cosas: obedecer las [[leyes]] y la [[equidad]] hacia los demás, es decir, repartir los bienes, beneficios y ventajas.",
      feedbackOK: "¡Excelente! Has captado los dos aspectos de la justicia aristotélica.",
      feedbackKO: "La justicia tiene un aspecto legal y otro distributivo.",
      videoHints: [
        "💡 Opciones: opiniones | deseos | normas | costumbres | leyes | tradiciones",
        "💡 Opciones: discriminación | parcialidad | privilegio | desigualdad | equidad | favoritismo"
      ],
      videoSegment: { start: 262, end: 276 } // 4:23 - 4:37
    },
    {
      id: "a13",
      text: "13- Las virtudes [[dianoéticas|dianoeticas]] son virtudes de la [[razón]]. Estas virtudes deben ser aprendidas a través de la [[educación]].",
      feedbackOK: "¡Perfecto! Las virtudes dianoéticas se adquieren por enseñanza, no por hábito.",
      feedbackKO: "Recuerda el otro tipo de virtudes, las intelectuales.",
      videoHints: [
        "💡 Opciones: morales | cardinales | éticas | dianoéticas | prácticas | teologales",
        "💡 Opciones: voluntad | instinto | emoción | razón | sentimiento | pasión",
        "💡 Opciones: imitación | hábito | costumbre | educación | práctica | repetición"
      ],
      videoSegment: { start: 276, end: 290 } // 4:37 - 4:51
    },
    {
      id: "a14",
      text: "14- Las más importantes virtudes dianoéticas son la [[sabiduría|sabiduria]] y la [[prudencia]]. La prudencia consiste en saber [[deliberar]] en torno a lo que es bueno para nosotros.",
      feedbackOK: "¡Correcto! Sabiduría teórica y prudencia práctica: las cumbres de la vida intelectual.",
      feedbackKO: "Recuerda las dos virtudes intelectuales supremas.",
      videoHints: [
        "💡 Opciones: técnica | habilidad | conocimiento | sabiduría | arte | ciencia",
        "💡 Opciones: prudencia | fortaleza | generosidad | templanza | valentía | justicia",
        "💡 Opciones: recordar | intuir | imaginar | sentir | deliberar | actuar"
      ],
      videoSegment: { start: 290, end: 308 } // 4:51 - 5:09
    },
    {
      id: "a15",
      text: "15- La sabiduría es una virtud más [[elevada]] que la prudencia, pues se ocupa de lo que está por [[encima]] del ser humano, de las cosas más [[divinas]].",
      feedbackOK: "¡Excelente! La sabiduría contempla lo eterno e inmutable, lo más divino.",
      feedbackKO: "Piensa en la diferencia entre lo práctico-humano y lo teórico-divino.",
      videoHints: [
        "💡 Opciones: práctica | elevada | común | inferior | mundana | útil",
        "💡 Opciones: debajo | encima | fuera | dentro | cerca | junto",
        "💡 Opciones: mundanas | humanas | materiales | divinas | temporales | terrenales"
      ],
      videoSegment: { start: 307, end: 322 } // 5:08 - 5:23
    },
    {
      id: "a16",
      text: "16- Los [[bienes externos|bienes exteriores]] como las riquezas no son la felicidad, pero sí son [[importantes]] en cierta medida. Carecer de ellos podría comprometer nuestro [[bienestar]].",
      feedbackOK: "¡Perfecto! Aristóteles es realista: los bienes externos son condiciones necesarias, no suficientes.",
      feedbackKO: "Recuerda: para Aristóteles la virtud no basta si falta todo lo demás.",
      videoHints: [
        "💡 Opciones: bienes externos | bienes divinos | bienes supremos | bienes morales | bienes eternos | bienes internos",
        "💡 Opciones: importantes | perjudiciales | superfluos | suficientes | irrelevantes | innecesarios",
        "💡 Opciones: indiferencia | malestar | angustia | dolor | sufrimiento | bienestar"
      ],
      videoSegment: { start: 321, end: 337 } // 5:22 - 5:38
    },
    {
      id: "a17",
      text: "17- La felicidad consiste en unir sabiamente la [[virtud]], la [[contemplación|contemplacion]] y los [[bienes externos|bienes exteriores]].",
      feedbackOK: "¡Excelente síntesis! Esta es la fórmula completa de la felicidad aristotélica.",
      feedbackKO: "Recuerda los tres componentes de la vida feliz según Aristóteles.",
      videoHints: [
        "💡 Opciones: virtud | debilidad | maldad | ignorancia | vicio | imprudencia",
        "💡 Opciones: voluntad | contemplación | emoción | acción | deseo | producción",
        "💡 Opciones: bienes necesarios | bienes absolutos | bienes morales | bienes divinos | bienes internos | bienes externos"
      ],
      videoSegment: { start: 342, end: 360 } // 5:43 - 6:01
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
  const config = window.VIDEO_CONFIG?.etica_aristoteles;
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
