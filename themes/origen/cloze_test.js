// themes/origen/cloze_test.js - CLOZE TEST “Del mito al Logos”
// v1.1 (2026-11-24): tiempos de las 12 frases revisados con la transcripción del video (6:28):
//   varias empezaban tarde o cortaban antes de terminar (p. ej., la última llega hasta el final).

window.CLOZE_TEST = {
  title: "Cloze — Del mito al Logos (0:00–6:30)",
  items: [
    {
      id: "o1",
      text: "Desde los albores de la [[humanidad]] el hombre ha estado condenado a la [[incertidumbre]]. Buscó desesperadamente [[sentido]], pero no lo hizo desde la [[razón]], sino desde el [[mito]].",
      feedbackOK: "Muy bien. Esta frase introduce el problema: la búsqueda de sentido desde el mito y no desde la razón.",
      feedbackKO: "Recuerda: humanidad, incertidumbre, sentido, razón y mito son las palabras clave de esta apertura.",
      videoHints: [
        "💡 Es el comienzo del video, cuando se habla de la humanidad condenada a la incertidumbre.",
        "💡 Fíjate cuando se menciona que se busca 'sentido', pero no desde la razón.",
        "💡 Escucha el momento en que se contraponen explícitamente 'razón' y 'mito'."
      ],
      videoSegment: { start: 0, end: 20 } // 0:00 - 0:21 (transcripción)
    },
    {
      id: "o2",
      text: "Antes de [[pensar]], el ser humano [[fabuló]].",
      feedbackOK: "Exacto. Primero vinieron los relatos míticos, después el pensamiento racional.",
      feedbackKO: "Escucha cómo se contraponen fabulación y pensamiento.",
      videoHints: [
        "💡 Busca la frase breve que comienza con 'Antes de pensar...'.",
        "💡 Va inmediatamente después de mencionar el mito como forma inicial de sentido.",
        "💡 Es una frase muy corta y contundente del narrador."
      ],
      videoSegment: { start: 19, end: 26 } // 0:20 - 0:27 (transcripción)
    },
    {
      id: "o3",
      text: "El nacimiento del pensamiento [[racional]] fue un acto de [[insurrección]], una ruptura con el [[dogma]], una traición a los [[dioses]] y un [[crimen]] contra la tradición.",
      feedbackOK: "Muy bien. Captaste el tono radical con el que se presenta el nacimiento del pensamiento racional.",
      feedbackKO: "Piensa en cómo se describe el pensamiento racional: insurrección, ruptura, traición y crimen.",
      videoHints: [
        "💡 Ubica cuando aparece literalmente 'El nacimiento del pensamiento racional...'.",
        "💡 Presta atención a la cadena de expresiones: insurrección, ruptura, traición, crimen.",
        "💡 Es el cierre del bloque de introducción antes de hablar del 'tránsito heroico'."
      ],
      videoSegment: { start: 24, end: 37 } // 0:25 - 0:38 (transcripción)
    },
    {
      id: "o4",
      text: "A continuación nos adentraremos en ese tránsito heroico: ese paso osado que dio el hombre del [[mito]] al [[Logos]]. De la [[superstición]] a la [[filosofía]].",
      feedbackOK: "Perfecto. Aquí se nombra explícitamente el paso del mito al Logos.",
      feedbackKO: "Recuerda que se contraponen mito/Logos y superstición/filosofía.",
      videoHints: [
        "💡 Escucha cuando el narrador habla de 'ese tránsito heroico' y 'ese paso osado'.",
        "💡 Allí se menciona literalmente 'del mito al Logos'.",
        "💡 También se contraponen 'superstición' y 'filosofía'."
      ],
      videoSegment: { start: 36, end: 43 } // 0:37 - 0:44 (transcripción)
    },
    {
      id: "o5",
      text: "El [[mito]] no es solo una narrativa [[arcaica]], es una forma de [[entender]] el [[mundo]]. No había lugar para la [[duda]] porque dudar era peligroso.",
      feedbackOK: "Muy bien. El mito se presenta como una forma de entender el mundo que excluye la duda.",
      feedbackKO: "Piensa en cómo se define el mito: no solo arcaico, sino una forma de entender el mundo sin duda.",
      videoHints: [
        "💡 Busca cuando se dice 'El mito no es solo una narrativa arcaica...'.",
        "💡 Escucha la continuación sobre 'forma de entender el mundo'.",
        "💡 Luego se explica por qué 'no había lugar para la duda'."
      ],
      videoSegment: { start: 54, end: 76 } // 0:55 - 1:17 (transcripción)
    },
    {
      id: "o6",
      text: "El mito era [[útil]]: cohesionaba [[tribus]], legitimaba [[jefaturas]], mantenía el [[miedo]] bajo control y, sobre todo, justificaba lo [[injustificable]].",
      feedbackOK: "Exacto. Se enumeran las funciones políticas y psicológicas del mito.",
      feedbackKO: "Atiende a la lista: tribus, jefaturas, miedo y lo injustificable.",
      videoHints: [
        "💡 Localiza el fragmento donde se dice 'El mito era útil...'.",
        "💡 Escucha la enumeración de funciones sociales y políticas del mito.",
        "💡 Fíjate en la expresión 'justificaba lo injustificable'."
      ],
      videoSegment: { start: 75, end: 90 } // 1:16 - 1:31 (transcripción)
    },
    {
      id: "o7",
      text: "Las [[religiones]] nacieron allí no como [[revelaciones]], sino como dispositivos de [[poder]]. Quien tenía acceso a los [[dioses]] controlaba a los hombres.",
      feedbackOK: "Muy bien. Aquí se vincula directamente religión y poder.",
      feedbackKO: "Piensa en 'revelaciones' frente a 'dispositivos de poder' y en quién controla a quién.",
      videoHints: [
        "💡 Busca el momento en que se dice 'Las religiones nacieron allí...'.",
        "💡 Escucha la frase sobre dispositivos de poder.",
        "💡 Luego se explica quién controla a los hombres al tener acceso a los dioses."
      ],
      videoSegment: { start: 94, end: 109 } // 1:35 - 1:50 (transcripción)
    },
    {
      id: "o8",
      text: "Pero lo que no podía hacer el [[mito]] era [[explicar]], solo podía [[narrar]].",
      feedbackOK: "Correcto. Esta frase marca el límite del mito frente a la explicación racional.",
      feedbackKO: "Recuerda: el mito narra, pero no explica.",
      videoHints: [
        "💡 Ubica el 'Pero lo que no podía hacer el mito era...'.",
        "💡 Fíjate qué verbo se usa frente a 'narrar'.",
        "💡 Es la transición hacia la necesidad de una explicación racional."
      ],
      videoSegment: { start: 120, end: 128 } // 2:01 - 2:09 (transcripción)
    },
    {
      id: "o9",
      text: "En [[Jonia]], una región marginal del mundo [[griego]], un puñado de hombres empezó a hacer lo [[impensable]]: preguntarse por qué las cosas son como son sin invocar a los [[dioses]]. Tales de [[Mileto]] no dijo que el mundo era obra de [[Zeus]], sino que todo procedía del [[agua]]. Por primera vez en la historia se rompía el ciclo del relato [[sagrado]].",
      feedbackOK: "Excelente. Esta frase presenta el giro jonio y el papel de Tales.",
      feedbackKO: "Piensa en los nombres clave: Jonia, griego, dioses, Mileto, Zeus, agua, relato sagrado.",
      videoHints: [
        "💡 Busca cuando se menciona 'En Jonia, una región marginal del mundo griego...'.",
        "💡 Luego aparece Tales de Mileto y la idea de que todo procede del agua.",
        "💡 Se dice explícitamente que se rompe el ciclo del relato sagrado."
      ],
      videoSegment: { start: 127, end: 161 } // 2:08 - 2:42 (transcripción)
    },
    {
      id: "o10",
      text: "El paso del mito al [[Logos]] es en esencia la invención de la [[duda]] metódica, una práctica que desnaturaliza todo lo que nos rodea, que rompe el encantamiento de las creencias [[heredadas]]. Pensar es traicionar la [[tribu]].",
      feedbackOK: "Muy bien. Has captado el vínculo entre Logos, duda metódica y traición a la tribu.",
      feedbackKO: "Recuerda: Logos, duda metódica, creencias heredadas y tribu son los núcleos de esta idea.",
      videoHints: [
        "💡 Ubica cuando se dice 'El paso del mito al Logos es, en esencia...'.",
        "💡 Escucha la descripción de la duda metódica y el 'encantamiento' de las creencias heredadas.",
        "💡 Termina con la frase contundente: 'Pensar es traicionar la tribu'."
      ],
      videoSegment: { start: 189, end: 211 } // 3:10 - 3:32 (transcripción)
    },
    {
      id: "o11",
      text: "La [[filosofía]] nace de la ruptura con la [[religión]]. Allí donde la religión exige [[fe]], la filosofía exige [[razón]] y [[argumentación]]. La religión teme a la [[razón]] como el [[tirano]] teme a la libertad.",
      feedbackOK: "Perfecto. Aquí se formula el conflicto entre religión y filosofía.",
      feedbackKO: "Piensa en la oposición: fe vs razón y argumentación; religión vs libertad.",
      videoHints: [
        "💡 Busca cuando se dice que 'La filosofía nace de la ruptura con la religión'.",
        "💡 Luego se contraponen fe y razón, revelación y argumentación.",
        "💡 Más adelante se compara el miedo de la religión a la razón con el miedo del tirano a la libertad."
      ],
      videoSegment: { start: 224, end: 263 } // 3:45 - 4:24 (transcripción)
    },
    {
      id: "o12",
      text: "El [[Logos]] no promete [[felicidad]] sino [[libertad]]. El paso del mito al Logos no fue un progreso [[inevitable]], sino una conquista [[frágil]]. Pensar fue, es y será un acto de [[insurrección]]. La [[libertad]] de pensar no es un regalo de los [[dioses]], es un [[crimen]] contra ellos.",
      feedbackOK: "Excelente. Esta frase resume el cierre del video: Logos, libertad e insurrección del pensamiento.",
      feedbackKO: "Recuerda las palabras clave: Logos, libertad, conquista frágil, insurrección y crimen contra los dioses.",
      videoHints: [
        "💡 Ubica el momento en que se dice 'El Logos no promete felicidad, sino libertad'.",
        "💡 Escucha la idea de que el paso del mito al Logos es una conquista frágil.",
        "💡 El cierre menciona que la libertad de pensar es un 'crimen' contra los dioses."
      ],
      videoSegment: { start: 308, end: 388 } // 5:09 - 6:29 (transcripción)
    }
  ]
};

// === Sistema de pistas (igual que en ética_aristóteles) ===
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

  const config = window.VIDEO_CONFIG?.origen; // 👈 tema para este video
  if (!config) return null;

  const baseStart = (config.startTime || 0) + item.videoSegment.start;
  const safeStart = Math.max(baseStart - 3, 0); // 3 segundos antes de la frase

  return `https://www.youtube.com/watch?v=${config.youtubeId}&t=${safeStart}s`;
};
