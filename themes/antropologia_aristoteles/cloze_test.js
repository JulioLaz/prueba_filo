// themes/antropologia_aristoteles/cloze_test.js
// Cloze del video «Antropología de ARISTÓTELES» (FILOSOFÍA: APRENDE Y APRUEBA, jgEC-kr73XQ):
// 14 frases en el orden del video, con sus tiempos (videoSegment contado desde startTime = 23,
// después del saludo) y una pista de opciones por hueco.
// Versión 2.0 (2026-11-25): rehecho con la transcripción (antes 12 frases con tramos muy amplios y
//   huecos que el video no dice); suma el principio inmanente, la voluntad frente al
//   intelectualismo moral y el entendimiento agente.
window.CLOZE_TEST = {
  title: "Cloze — Antropología de Aristóteles (0:23—5:27)",
  items: [
    {
      id: "a1",
      text: "Para Aristóteles, la antropología pertenece a la [[física]], ya que el hombre es un ser [[natural]]: como [[sustancia]], posee una finalidad propia y un principio [[inmanente]] de movimiento.",
      feedbackOK: "Correcto. El ser humano es un ser natural.",
      feedbackKO: "Revisá el comienzo del video.",
      videoHints: [
        "💡 Opciones: retórica | ética | física | poesía | política | lógica",
        "💡 Opciones: eterno | invisible | artificial | natural | perfecto | divino",
        "💡 Opciones: copia | sustancia | apariencia | idea | sombra | accidente",
        "💡 Opciones: casual | inmanente | separado | divino | externo | ajeno"
      ],
      videoSegment: { start: 1, end: 14 } // 0:24 - 0:37
    },
    {
      id: "a2",
      text: "Un principio inmanente actúa dentro del mismo [[agente]], que tiene en sí su propio [[fin]], sin depender de nada [[externo]]. Inmanente significa que [[permanece]].",
      feedbackOK: "Exacto. La causa está adentro.",
      feedbackKO: "Revisá qué quiere decir «principio inmanente».",
      videoHints: [
        "💡 Opciones: dios | maestro | mundo | agente | estado | objeto",
        "💡 Opciones: dueño | límite | precio | miedo | fin | nombre",
        "💡 Opciones: externo | natural | íntimo | propio | humano | interno",
        "💡 Opciones: huye | permanece | viaja | desaparece | crece | cambia"
      ],
      videoSegment: { start: 14, end: 35 } // 0:37 - 0:58
    },
    {
      id: "a3",
      text: "El ser humano es una sustancia compuesta de [[materia]] y [[forma]]: la materia es el [[cuerpo]] y la forma, el [[alma]]. Es la teoría [[hilemórfica|hilemorfica|ilemórfica|ilemorfica]].",
      feedbackOK: "Muy bien. El hilemorfismo también vale para el ser humano.",
      feedbackKO: "Pensá en la teoría de la materia y la forma.",
      videoHints: [
        "💡 Opciones: materia | luz | razón | idea | sombra | virtud",
        "💡 Opciones: sombra | carne | forma | fuerza | masa | copia",
        "💡 Opciones: alma | cuerpo | idea | razón | mente | espíritu",
        "💡 Opciones: cuerpo | alma | sangre | sombra | piel | carne",
        "💡 Opciones: platónica | escéptica | atomista | sofista | hilemórfica | dualista"
      ],
      videoSegment: { start: 35, end: 57 } // 0:58 - 1:20
    },
    {
      id: "a4",
      text: "Esta unión de materia y forma no es [[accidental]], como proponía [[Platón|Platon]], sino [[sustancial]]: no existe la materia sin la forma ni la forma sin la materia.",
      feedbackOK: "Exacto. Una unión sustancial.",
      feedbackKO: "Revisá la diferencia con Platón.",
      videoHints: [
        "💡 Opciones: sustancial | eterna | accidental | perfecta | necesaria | natural",
        "💡 Opciones: Platón | Tales | Epicuro | Sócrates | Heráclito | Kant",
        "💡 Opciones: accidental | aparente | superficial | sustancial | casual | pasajera"
      ],
      videoSegment: { start: 57, end: 74 } // 1:20 - 1:37
    },
    {
      id: "a5",
      text: "Por esa unión sustancial, el ser humano es [[mortal]]: al morir el [[cuerpo]], el alma también moriría. El alma es la forma sustancial de un cuerpo [[material]].",
      feedbackOK: "Correcto. Sin cuerpo no hay alma.",
      feedbackKO: "¿Qué provoca la unión sustancial?",
      videoHints: [
        "💡 Opciones: libre | perfecto | eterno | divino | mortal | inmortal",
        "💡 Opciones: sueño | deseo | alma | cuerpo | mundo | pensamiento",
        "💡 Opciones: material | eterno | perfecto | divino | ideal | invisible"
      ],
      videoSegment: { start: 74, end: 95 } // 1:37 - 1:58
    },
    {
      id: "a6",
      text: "El alma es el principio [[vital]] del ser humano, su principio de vida. Igual que su maestro Platón, Aristóteles da más importancia al [[alma]] que al cuerpo.",
      feedbackOK: "Muy bien.",
      feedbackKO: "¿Qué es el alma para Aristóteles?",
      videoHints: [
        "💡 Opciones: moral | social | lógico | político | material | vital",
        "💡 Opciones: belleza | fama | riqueza | cuerpo | fuerza | alma"
      ],
      videoSegment: { start: 95, end: 120 } // 1:58 - 2:23
    },
    {
      id: "a7",
      text: "La vida humana tiene tres manifestaciones: la vida [[vegetativa]], con la nutrición y la [[generación|generacion|reproducción]]; la [[sensitiva]], con la que percibimos; y la [[racional]], con la que conocemos la [[verdad]] y queremos el bien.",
      feedbackOK: "Exacto. Tres manifestaciones de la vida.",
      feedbackKO: "Revisá las tres manifestaciones de la vida.",
      videoHints: [
        "💡 Opciones: política | pasiva | vegetativa | irascible | espiritual | divina",
        "💡 Opciones: memoria | digestión | palabra | generación | visión | respiración",
        "💡 Opciones: espiritual | social | concupiscible | lógica | sensitiva | teórica",
        "💡 Opciones: sensible | corporal | emocional | animal | racional | física",
        "💡 Opciones: fama | verdad | riqueza | comida | fuerza | belleza"
      ],
      videoSegment: { start: 120, end: 145 } // 2:23 - 2:48
    },
    {
      id: "a8",
      text: "Esto no significa que haya tres tipos de [[alma]], como en Platón: la vida racional, específicamente [[humana]], ya engloba las funciones de vegetación y [[sensación|sensacion]].",
      feedbackOK: "Correcto. Una sola alma, no tres.",
      feedbackKO: "¿Hay tres almas para Aristóteles?",
      videoHints: [
        "💡 Opciones: ley | mundo | cielo | cuerpo | alma | ciudad",
        "💡 Opciones: divina | mineral | celeste | animal | humana | vegetal",
        "💡 Opciones: música | votación | guerra | oración | sensación | gobierno"
      ],
      videoSegment: { start: 145, end: 173 } // 2:48 - 3:16
    },
    {
      id: "a9",
      text: "Por eso definimos al ser humano como un [[animal racional]]: se diferencia de los demás seres naturales por su [[racionalidad]].",
      feedbackOK: "Exacto. La definición clásica.",
      feedbackKO: "¿Cómo se define al ser humano?",
      videoHints: [
        "💡 Opciones: ser divino | cuerpo sin alma | alma prisionera | animal racional | animal salvaje | lobo del hombre",
        "💡 Opciones: fuerza | altura | velocidad | racionalidad | riqueza | belleza"
      ],
      videoSegment: { start: 172, end: 185 } // 3:15 - 3:28
    },
    {
      id: "a10",
      text: "Gracias a la razón, el ser humano puede conocer la verdad y alcanzar un conocimiento [[universal]], igual que en Platón, aunque por diferentes [[vías|vias|caminos]].",
      feedbackOK: "Muy bien.",
      feedbackKO: "¿Qué conocimiento alcanza la razón?",
      videoHints: [
        "💡 Opciones: sensible | pasajero | dudoso | universal | particular | individual",
        "💡 Opciones: lenguas | maestros | ciudades | vías | épocas | razones"
      ],
      videoSegment: { start: 184, end: 197 } // 3:27 - 3:40
    },
    {
      id: "a11",
      text: "Aristóteles le otorga al ser humano otra capacidad: la [[voluntad]]. Esto va en contra del [[intelectualismo moral]] de Platón: con el entendimiento conocemos el [[bien]], pero con la voluntad podemos decidir y desear lo que queramos.",
      feedbackOK: "Exacto. Conocer el bien no alcanza: también hay que quererlo.",
      feedbackKO: "Revisá qué capacidad le suma Aristóteles al ser humano.",
      videoHints: [
        "💡 Opciones: voluntad | nutrición | sensación | fuerza | memoria | imaginación",
        "💡 Opciones: materialismo | utilitarismo | escepticismo | relativismo | intelectualismo moral | hedonismo",
        "💡 Opciones: cuerpo | bien | poder | placer | miedo | dinero"
      ],
      videoSegment: { start: 197, end: 222 } // 3:40 - 4:05
    },
    {
      id: "a12",
      text: "Como el ser humano es una unión sustancial de cuerpo y alma, para Aristóteles en él no habría nada [[inmortal]]: al morir el cuerpo, moriría el [[alma]].",
      feedbackOK: "Correcto... o casi: falta el «as bajo la manga».",
      feedbackKO: "¿Hay algo inmortal en el ser humano?",
      videoHints: [
        "💡 Opciones: mortal | inmortal | visible | material | pequeño | corporal",
        "💡 Opciones: recuerdo | ciudad | familia | alma | deseo | nombre"
      ],
      videoSegment: { start: 222, end: 243 } // 4:05 - 4:26
    },
    {
      id: "a13",
      text: "Pero Aristóteles guardaba un as bajo la manga en su teoría del conocimiento: el entendimiento [[agente]], algo [[separado]], inmortal y [[eterno]].",
      feedbackOK: "Muy bien. Lo único inmortal en su filosofía.",
      feedbackKO: "Revisá el «as bajo la manga» de Aristóteles.",
      videoHints: [
        "💡 Opciones: agente | vegetativo | sensible | natural | político | pasivo",
        "💡 Opciones: separado | mezclado | dependiente | material | unido | corporal",
        "💡 Opciones: pasajero | mortal | breve | corporal | material | eterno"
      ],
      videoSegment: { start: 243, end: 273 } // 4:26 - 4:56
    },
    {
      id: "a14",
      text: "Si el entendimiento agente puede desmaterializar para obtener un conocimiento universal, es porque él mismo es [[inmaterial]], es decir, [[incorruptible]]. Aristóteles tuvo [[problemas]] para defender esta teoría.",
      feedbackOK: "Exacto. Así termina el video.",
      feedbackKO: "Revisá el final del video.",
      videoHints: [
        "💡 Opciones: inmaterial | pesado | visible | corporal | material | sensible",
        "💡 Opciones: frágil | incorruptible | débil | corruptible | pasajero | mortal",
        "💡 Opciones: honores | aplausos | amigos | alumnos | premios | problemas"
      ],
      videoSegment: { start: 273, end: 304 } // 4:56 - 5:27
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
  const config = window.VIDEO_CONFIG?.antropologia_aristoteles;
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
