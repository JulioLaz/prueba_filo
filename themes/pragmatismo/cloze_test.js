// themes/pragmatismo/cloze_test.js
// Cloze — Pragmatismo. Video jHix800gjVQ: 13 frases en el orden del video, con sus tiempos
// (videoSegment contado desde startTime = 1) y una pista de opciones por hueco.
// Versión 2.0 (2026-11-25): revisado con la transcripción (las 13 frases coinciden); tramos con
//   los tiempos reales y el video termina en 2:31, antes de la invitación a suscribirse.
window.CLOZE_TEST = {
  title: "Cloze — Pragmatismo (0:00—2:31)",
  items: [
    {
      id: "p1",
      text: "1- La palabra pragmatismo proviene del vocablo griego [[pragma]] que significa [[práctica|practica]] o [[asunto]].",
      feedbackOK: "¡Correcto! Has captado la etimología del término pragmatismo.",
      feedbackKO: "Revisa el origen griego de la palabra pragmatismo.",
      videoHints: [
        "💡 Opciones: telos | praxis | pragma | pathos | logos | ethos",
        "💡 Opciones: contemplación | abstracción | especulación | práctica | ideal | teoría",
        "💡 Opciones: idea | asunto | principio | teorema | concepto | axioma"
      ],
      videoSegment: { start: 0, end: 12 } // 0:01 - 0:13
    },
    {
      id: "p2",
      text: "2- El pragmatismo surge formalmente en el siglo [[XIX]] en [[Estados Unidos]]. Su máximo exponente es [[Charles Pierce|Charles Peirce|Pierce]].",
      feedbackOK: "¡Perfecto! Conoces el origen histórico y geográfico del pragmatismo.",
      feedbackKO: "Recuerda cuándo y dónde nace el pragmatismo como corriente filosófica.",
      videoHints: [
        "💡 Opciones: XX | XIX | XVI | XVIII | XVII | XXI",
        "💡 Opciones: Francia | Alemania | Italia | Estados Unidos | España | Inglaterra",
        "💡 Opciones: John Dewey | John Locke | William James | David Hume | Charles Pierce | Bertrand Russell"
      ],
      videoSegment: { start: 8, end: 21 } // 0:09 - 0:22
    },
    {
      id: "p3",
      text: "3- Charles Pierce es considerado el [[padre]] del pragmatismo, además de [[William James]] y [[John Dewey]].",
      feedbackOK: "¡Excelente! Conoces a los tres grandes filósofos pragmatistas.",
      feedbackKO: "Recuerda quién es el fundador del pragmatismo y sus otros exponentes.",
      videoHints: [
        "💡 Opciones: padre | seguidor | crítico | discípulo | heredero | hijo",
        "💡 Opciones: Friedrich Nietzsche | William James | David Hume | Immanuel Kant | Karl Marx | John Locke",
        "💡 Opciones: John Dewey | Adam Smith | Jean-Jacques Rousseau | George Berkeley | Thomas Hobbes | John Stuart Mill"
      ],
      videoSegment: { start: 16, end: 25 } // 0:17 - 0:26
    },
    {
      id: "p4",
      text: "4- El pragmatismo es una corriente filosófica que establece que la [[utilidad]] del conocimiento y de las cosas se refleja en su aplicación [[práctica|practica]].",
      feedbackOK: "¡Correcto! Has captado la definición central del pragmatismo.",
      feedbackKO: "Piensa en qué valora el pragmatismo: ¿teoría o aplicación?",
      videoHints: [
        "💡 Opciones: verdad | justicia | utilidad | perfección | belleza | bondad",
        "💡 Opciones: teórica | práctica | especulativa | ideal | abstracta | conceptual"
      ],
      videoSegment: { start: 26, end: 39 } // 0:27 - 0:40
    },
    {
      id: "p5",
      text: "5- Para el pragmatismo no es suficiente con los conocimientos [[teóricos|teoricos]]. Una persona pragmática es una persona que se centra en la [[consecución|consecucion]] de sus [[objetivos]].",
      feedbackOK: "¡Perfecto! El pragmatismo prioriza resultados sobre teorías.",
      feedbackKO: "Recuerda: el pragmático busca logros concretos, no solo ideas.",
      videoHints: [
        "💡 Opciones: prácticos | teóricos | aplicados | efectivos | reales | concretos",
        "💡 Opciones: especulación | reflexión | discusión | meditación | consecución | contemplación",
        "💡 Opciones: teorías | ideas | objetivos | principios | conceptos | abstracciones"
      ],
      videoSegment: { start: 37, end: 50 } // 0:38 - 0:51
    },
    {
      id: "p6",
      text: "6- El pragmático se centra más en la [[finalidad]] de los [[resultados]] obtenidos, que en la forma o manera de abordarlos. Se basa en todo aquello que sea [[eficaz]].",
      feedbackOK: "¡Excelente! El fin justifica los medios en el pragmatismo.",
      feedbackKO: "Piensa en qué importa más: ¿el proceso o el resultado?",
      videoHints: [
        "💡 Opciones: finalidad | proceso | medio | forma | procedimiento | método",
        "💡 Opciones: procesos | procedimientos | formas | resultados | medios | métodos",
        "💡 Opciones: ideal | abstracto | inútil | teórico | eficaz | ineficaz"
      ],
      videoSegment: { start: 44, end: 77 } // 0:45 - 1:18
    },
    {
      id: "p7",
      text: "7- Ejemplo: Una persona pragmática dejaría un lado las [[emociones]] e iría a conseguir el objetivo para que la empresa funcione.",
      feedbackOK: "¡Correcto! El pragmático subordina sentimientos a objetivos.",
      feedbackKO: "Piensa en qué deja de lado una persona pragmática para lograr sus metas.",
      videoHints: [
        "💡 Opciones: razones | metas | objetivos | emociones | estrategias | planes"
      ],
      videoSegment: { start: 56, end: 73 } // 0:57 - 1:14
    },
    {
      id: "p8",
      text: "8- En el pragmatismo los [[juicios]] son [[posteriores]] y no anteriores a las acciones.",
      feedbackOK: "¡Perfecto! Primero se actúa, después se juzga según consecuencias.",
      feedbackKO: "Recuerda: ¿cuándo se evalúan las acciones en el pragmatismo?",
      videoHints: [
        "💡 Opciones: juicios | resultados | fines | acciones | medios | objetivos",
        "💡 Opciones: anteriores | previos | simultáneos | paralelos | precedentes | posteriores"
      ],
      videoSegment: { start: 77, end: 89 } // 1:18 - 1:30
    },
    {
      id: "p9",
      text: "9- El pragmatismo establece el significado o [[valor]] de las cosas a partir de sus [[consecuencias]].",
      feedbackOK: "¡Excelente! El pragmatismo es consecuencialista, como el utilitarismo.",
      feedbackKO: "Piensa en qué determina el valor de algo según el pragmatismo.",
      videoHints: [
        "💡 Opciones: causa | principio | esencia | origen | forma | valor",
        "💡 Opciones: orígenes | principios | consecuencias | intenciones | fundamentos | causas"
      ],
      videoSegment: { start: 86, end: 95 } // 1:27 - 1:36
    },
    {
      id: "p10",
      text: "10- El pragmatismo desecha las verdades [[absolutas]], es decir, las ideas no son [[fijas]] ni [[inamovibles]], ya que estas [[evolucionan]] y están sujetas al cambio.",
      feedbackOK: "¡Correcto! El pragmatismo rechaza dogmas y verdades eternas.",
      feedbackKO: "Recuerda: el pragmatismo es anti-dogmático y evolutivo.",
      videoHints: [
        "💡 Opciones: contingentes | relativas | dudosas | absolutas | temporales | parciales",
        "💡 Opciones: cambiantes | variables | móviles | inestables | fijas | dinámicas",
        "💡 Opciones: transformables | cambiantes | movibles | variables | inamovibles | mutables",
        "💡 Opciones: permanecen | evolucionan | se estancan | persisten | se mantienen | se conservan"
      ],
      videoSegment: { start: 94, end: 110 } // 1:35 - 1:51
    },
    {
      id: "p11",
      text: "11- El pragmatismo fue [[antifundamentalista]], es decir, no acepta la existencia de una verdad [[última|ultima]] y por lo mismo no acepta [[religiones]].",
      feedbackOK: "¡Perfecto! El pragmatismo rechaza fundamentos absolutos y dogmas religiosos.",
      feedbackKO: "Piensa en la postura del pragmatismo ante verdades absolutas y fe religiosa.",
      videoHints: [
        "💡 Opciones: tradicionalista | ortodoxo | conservador | fundamentalista | antifundamentalista | dogmático",
        "💡 Opciones: relativa | temporal | provisional | primera | última | parcial",
        "💡 Opciones: prácticas | artes | técnicas | ciencias | religiones | filosofías"
      ],
      videoSegment: { start: 109, end: 118 } // 1:50 - 1:59
    },
    {
      id: "p12",
      text: "12- Ejemplo: Una persona vegetariana al borde de la muerte decide comer [[carne]]. Deja de lado sus [[principios]] porque la carne le permite [[sobrevivir]].",
      feedbackOK: "¡Excelente ejemplo! La supervivencia pragmática supera los principios ideológicos.",
      feedbackKO: "Reflexiona sobre cómo el pragmatismo prioriza resultados sobre ideales.",
      videoHints: [
        "💡 Opciones: frutas | legumbres | vegetales | carne | granos | cereales",
        "💡 Opciones: deseos | metas | objetivos | principios | planes | fines",
        "💡 Opciones: desaparecer | sufrir | debilitarse | sobrevivir | morir | enfermarse"
      ],
      videoSegment: { start: 117, end: 139 } // 1:58 - 2:20
    },
    {
      id: "p13",
      text: "13- Ser pragmático significa darle prioridad a la [[supervivencia]] por encima de los [[ideales]].",
      feedbackOK: "¡Correcto! Resumen perfecto: pragmatismo = resultados > ideología.",
      feedbackKO: "Piensa en qué prioriza el pragmatismo: ¿ideas o resultados concretos?",
      videoHints: [
        "💡 Opciones: filosofía | especulación | doctrina | supervivencia | ideología | teoría",
        "💡 Opciones: ideales | metas | logros | consecuencias | objetivos | resultados"
      ],
      videoSegment: { start: 138, end: 150 } // 2:19 - 2:31
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
  const config = window.VIDEO_CONFIG?.pragmatismo;
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
