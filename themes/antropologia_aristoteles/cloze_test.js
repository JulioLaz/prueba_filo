// themes/antropologia_aristoteles/cloze_test.js
// Cloze del video «Antropología de ARISTÓTELES» (canal FILOSOFÍA: APRENDE Y APRUEBA,
// youtubeId jgEC-kr73XQ). Huecos en el orden del video; videoSegment en segundos contados
// desde VIDEO_CONFIG.antropologia_aristoteles.startTime (0:23, después del saludo y el reinicio).
// Versión 1.0 (2026-11-24): armado con los tiempos que pasó el docente.
window.CLOZE_TEST = {
  title: "Cloze — Antropología de Aristóteles (0:23—5:27)",
  items: [
    {
      id: "a1",
      text: "1- Aristóteles parte de su [[física]]: los seres naturales son [[sustancias]] que tienen una finalidad propia.",
      feedbackOK: "¡Correcto! La antropología de Aristóteles sale de su estudio de la naturaleza.",
      feedbackKO: "Pensá desde qué ciencia arranca el video y cómo llama a los seres naturales.",
      videoHints: [
        "💡 Opciones: ética | física | política | lógica | poesía | retórica",
        "💡 Opciones: ideas | sombras | sustancias | copias | almas | apariencias"
      ],
      videoSegment: { start: 0, end: 35 }
    },
    {
      id: "a2",
      text: "2- Todo ser natural tiene un principio [[inmanente]], es decir interno, de [[movimiento|cambio]].",
      feedbackOK: "¡Muy bien! El ser natural se mueve y cambia desde adentro, no empujado desde afuera.",
      feedbackKO: "¿El principio del movimiento está dentro o fuera del ser natural?",
      videoHints: [
        "💡 Opciones: externo | inmanente | divino | casual | separado | eterno",
        "💡 Opciones: reposo | movimiento | olvido | silencio | descanso | engaño"
      ],
      videoSegment: { start: 6, end: 35 }
    },
    {
      id: "a3",
      text: "3- El ser humano es una sustancia [[compuesta]] de materia, el [[cuerpo]], y de forma, el [[alma]].",
      feedbackOK: "¡Exacto! Es el hilemorfismo aplicado al ser humano.",
      feedbackKO: "Materia y forma: ¿qué es cada una en el ser humano?",
      videoHints: [
        "💡 Opciones: simple | compuesta | separada | dividida | divina | imaginaria",
        "💡 Opciones: alma | cuerpo | mente | idea | razón | vida",
        "💡 Opciones: cuerpo | alma | materia | sangre | carne | sombra"
      ],
      videoSegment: { start: 35, end: 91 }
    },
    {
      id: "a4",
      text: "4- A diferencia de [[Platón|platon]], Aristóteles sostiene la [[unidad]] sustancial entre cuerpo y alma.",
      feedbackOK: "¡Correcto! Para Platón la unión era accidental; para Aristóteles, sustancial.",
      feedbackKO: "¿Con qué filósofo se compara y qué tipo de relación defiende Aristóteles?",
      videoHints: [
        "💡 Opciones: Sócrates | Platón | Pitágoras | Heráclito | Epicuro | Kant",
        "💡 Opciones: separación | unidad | pelea | distancia | cárcel | oposición"
      ],
      videoSegment: { start: 42, end: 91 }
    },
    {
      id: "a5",
      text: "5- El alma es la forma [[sustancial]] del cuerpo material.",
      feedbackOK: "¡Muy bien! El alma no es un agregado: es la forma que hace que el cuerpo sea un ser vivo.",
      feedbackKO: "¿Qué tipo de forma es el alma respecto del cuerpo?",
      videoHints: [
        "💡 Opciones: accidental | sustancial | temporal | exterior | pasajera | decorativa"
      ],
      videoSegment: { start: 91, end: 118 }
    },
    {
      id: "a6",
      text: "6- El alma es el principio [[vital]]: da [[vida]] y organización al ser humano.",
      feedbackOK: "¡Exacto! Sin alma, el cuerpo es solo materia sin vida, como un cadáver.",
      feedbackKO: "¿Qué le da el alma al cuerpo?",
      videoHints: [
        "💡 Opciones: moral | vital | lógico | divino | social | material",
        "💡 Opciones: muerte | vida | forma | fuerza | belleza | riqueza"
      ],
      videoSegment: { start: 99, end: 118 }
    },
    {
      id: "a7",
      text: "7- La vida humana se manifiesta en tres dimensiones: [[vegetativa]], [[sensitiva]] y [[racional]].",
      feedbackOK: "¡Correcto! Son los tres escalones de la escala de las almas.",
      feedbackKO: "Recordá los tres escalones: plantas, animales y ser humano.",
      videoHints: [
        "💡 Opciones: vegetativa | irascible | divina | política | material | pasiva",
        "💡 Opciones: concupiscible | sensitiva | espiritual | social | teórica | lógica",
        "💡 Opciones: emocional | racional | corporal | animal | física | sensible"
      ],
      videoSegment: { start: 118, end: 174 }
    },
    {
      id: "a8",
      text: "8- No se trata de tres [[almas]] separadas, sino de dimensiones de una misma alma, en la que se destaca la [[racionalidad]].",
      feedbackOK: "¡Muy bien! Una sola alma con tres funciones, y lo propio del ser humano es la razón.",
      feedbackKO: "¿Cuántas almas tiene el ser humano y qué se destaca en ella?",
      videoHints: [
        "💡 Opciones: partes | almas | personas | cuerpos | vidas | ideas",
        "💡 Opciones: sensibilidad | racionalidad | fuerza | nutrición | agresividad | memoria"
      ],
      videoSegment: { start: 125, end: 174 }
    },
    {
      id: "a9",
      text: "9- La racionalidad [[diferencia]] al ser humano de los demás seres naturales.",
      feedbackOK: "¡Exacto! Plantas y animales tienen alma, pero no razón.",
      feedbackKO: "¿Qué hace la racionalidad respecto de los otros seres vivos?",
      videoHints: [
        "💡 Opciones: iguala | diferencia | separa del cuerpo | encarcela | aleja | oculta"
      ],
      videoSegment: { start: 174, end: 225 }
    },
    {
      id: "a10",
      text: "10- Gracias a la razón, el ser humano alcanza un conocimiento [[universal]] mediante el raciocinio y el [[entendimiento]].",
      feedbackOK: "¡Correcto! La razón capta lo común a muchos casos: lo universal.",
      feedbackKO: "¿Qué tipo de conocimiento logra la razón y con qué?",
      videoHints: [
        "💡 Opciones: particular | universal | sensible | individual | pasajero | dudoso",
        "💡 Opciones: olvido | entendimiento | instinto | deseo | recuerdo | apetito"
      ],
      videoSegment: { start: 181, end: 225 }
    },
    {
      id: "a11",
      text: "11- En la unión hilemórfica, el alma es [[mortal]] junto con el [[cuerpo]].",
      feedbackOK: "¡Muy bien! Si el alma es la forma del cuerpo, muere con él.",
      feedbackKO: "¿Qué pasa con el alma cuando muere el cuerpo?",
      videoHints: [
        "💡 Opciones: inmortal | mortal | eterna | divina | separada | libre",
        "💡 Opciones: mundo | cuerpo | alma | pensamiento | espíritu | destino"
      ],
      videoSegment: { start: 225, end: 250 }
    },
    {
      id: "a12",
      text: "12- El video menciona el entendimiento [[agente]], que abre tensiones sobre algo [[eterno]] o separado en el planteo de Aristóteles.",
      feedbackOK: "¡Exacto! Es la única duda que deja abierta Aristóteles: no se trata del alma personal.",
      feedbackKO: "¿Cómo se llama esa parte del entendimiento y qué duda plantea?",
      videoHints: [
        "💡 Opciones: pasivo | agente | sensible | vegetativo | político | natural",
        "💡 Opciones: mortal | eterno | material | corporal | pasajero | sensible"
      ],
      videoSegment: { start: 232, end: 304 }
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
  
  const config = window.VIDEO_CONFIG?.antropologia_aristoteles;
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
