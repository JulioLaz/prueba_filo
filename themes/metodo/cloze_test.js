// themes/metodo/cloze_test.js — Cloze del video «La duda metódica de Descartes» (sdGQcNaz4JM, 0:00–8:12).
// v2.0 (2026-11-24): 13 frases tomadas de la transcripción del video, en orden y con sus tiempos
//   (videoSegment en segundos contados desde startTime = 1), una pista de opciones por hueco
//   y getHintForItem (antes las pistas no se mostraban). v1.1: pistas sin [[ ]]. v1.0: 5 frases.
window.CLOZE_TEST = {
  title: "Cloze — La Duda Metódica de Descartes (0:00–8:12)",
  items: [
    {
      id: "m1",
      text: "En la vida cotidiana damos por [[supuesto]] la verdad de muchas afirmaciones: que el [[suelo]] es firme o que el [[sol]] volverá a salir mañana. Pero, ¿cómo estar [[seguros|seguro]]?",
      feedbackOK: "Correcto. Descartes parte de todo lo que damos por sentado sin pensarlo.",
      feedbackKO: "Revisá el comienzo del video: los ejemplos de la calle y del sol.",
      videoHints: [
        "💡 Opciones: probado | olvidado | supuesto | negado | perdido | discutido",
        "💡 Opciones: aire | camino | agua | suelo | techo | cielo",
        "💡 Opciones: río | sol | fuego | mar | viento | monte",
        "💡 Opciones: cansados | seguros | dormidos | contentos | tristes | tranquilos"
      ],
      videoSegment: { start: 0, end: 46 } // 0:00 - 0:47
    },
    {
      id: "m2",
      text: "Según Descartes, en la filosofía y en la [[ciencia]] solo debemos aceptar como verdadero aquello que sea [[evidente]] e [[incuestionable]]: así evitaríamos muchos [[errores]].",
      feedbackOK: "Exacto. Solo vale lo evidente e incuestionable.",
      feedbackKO: "Pensá qué condición pone Descartes para aceptar algo como verdadero.",
      videoHints: [
        "💡 Opciones: religión | historia | poesía | ciencia | economía | política",
        "💡 Opciones: útil | antiguo | probable | popular | evidente | agradable",
        "💡 Opciones: incuestionable | opinable | relativo | dudoso | cambiante | discutible",
        "💡 Opciones: viajes | errores | aciertos | libros | gastos | debates"
      ],
      videoSegment: { start: 46, end: 75 } // 0:47 - 1:16
    },
    {
      id: "m3",
      text: "Esa es la [[primera]] regla del método. Para Descartes, la [[filosofía|filosofia]] es la ciencia primera: busca los [[principios]] más básicos, que son los [[cimientos]] del edificio del conocimiento.",
      feedbackOK: "Muy bien. La filosofía pone los cimientos de todas las ciencias.",
      feedbackKO: "Revisá la imagen del edificio del conocimiento.",
      videoHints: [
        "💡 Opciones: primera | única | tercera | última | segunda | menor",
        "💡 Opciones: matemática | teología | filosofía | astronomía | física | medicina",
        "💡 Opciones: finales | principios | detalles | resultados | ejemplos | datos",
        "💡 Opciones: techos | cimientos | adornos | pisos | paredes | ventanas"
      ],
      videoSegment: { start: 75, end: 109 } // 1:16 - 1:50
    },
    {
      id: "m4",
      text: "Someter a análisis todo lo que sabemos es la [[duda]] [[metódica|metodica]]: preguntarse por la verdad de todo de manera [[sistemática|sistematica]] y [[radical]], para quedarse solo con lo que está libre de toda duda.",
      feedbackOK: "Correcto. Es una duda ordenada y que va a la raíz.",
      feedbackKO: "¿Cómo llama Descartes a ese análisis de todo lo que sabemos?",
      videoHints: [
        "💡 Opciones: certeza | opinión | fe | intuición | duda | creencia",
        "💡 Opciones: escéptica | absoluta | metódica | pasajera | sencilla | ingenua",
        "💡 Opciones: sistemática | superficial | parcial | rápida | distraída | casual",
        "💡 Opciones: leve | breve | simple | radical | parcial | tímida"
      ],
      videoSegment: { start: 124, end: 147 } // 2:05 - 2:28
    },
    {
      id: "m5",
      text: "La forma más básica de conocimiento son los [[sentidos]]. A veces nos [[engañan]], y como no podemos estar seguros de que no lo hagan siempre, hay que [[descartarlos]] como fuente de conocimiento.",
      feedbackOK: "Exacto. Lo que nos engañó una vez puede engañarnos siempre.",
      feedbackKO: "Revisá el primer motivo de duda: la forma más básica de conocer.",
      videoHints: [
        "💡 Opciones: recuerdos | maestros | sueños | números | sentidos | libros",
        "💡 Opciones: cuidan | guían | ayudan | engañan | salvan | enseñan",
        "💡 Opciones: descartarlos | premiarlos | seguirlos | aceptarlos | guardarlos | copiarlos"
      ],
      videoSegment: { start: 147, end: 185 } // 2:28 - 3:06
    },
    {
      id: "m6",
      text: "También podemos dudar de que el [[mundo]] exista: nadie en su sano [[juicio]] lo pone en duda, pero no es una verdad [[evidente]].",
      feedbackOK: "Bien. Creer que el mundo existe no es lo mismo que saberlo con evidencia.",
      feedbackKO: "¿De la existencia de qué se empieza a dudar después de los sentidos?",
      videoHints: [
        "💡 Opciones: número | triángulo | alma | pensamiento | lenguaje | mundo",
        "💡 Opciones: humor | tiempo | cuerpo | sueño | lugar | juicio",
        "💡 Opciones: religiosa | matemática | evidente | falsa | popular | antigua"
      ],
      videoSegment: { start: 185, end: 208 } // 3:06 - 3:29
    },
    {
      id: "m7",
      text: "Cuando [[soñamos|sonamos]], creemos que lo que vemos y tocamos es real, y al [[despertar]] descubrimos que era una ficción. No hay una manera segura de distinguir el sueño de la [[vigilia]]: no significa que todo sea un sueño, sino que no hay [[garantía|garantia]] de que no lo sea.",
      feedbackOK: "Perfecto. Es el argumento del sueño.",
      feedbackKO: "Revisá el segundo motivo de duda: el sueño.",
      videoHints: [
        "💡 Opciones: cantamos | leemos | estudiamos | soñamos | corremos | comemos",
        "💡 Opciones: llorar | viajar | dormir | hablar | despertar | comer",
        "💡 Opciones: noche | fantasía | memoria | locura | vigilia | infancia",
        "💡 Opciones: noticia | garantía | excusa | pregunta | duda | razón"
      ],
      videoSegment: { start: 208, end: 247 } // 3:29 - 4:08
    },
    {
      id: "m8",
      text: "Las verdades [[matemáticas|matematicas]] no dependen del mundo: que 2 y 2 son [[4|cuatro]] es verdad también en un sueño. Pero a veces nos equivocamos al hacer un [[cálculo|calculo]], así que la [[razón|razon]] también podría inducirnos al error.",
      feedbackOK: "Muy bien. La duda llega hasta la razón.",
      feedbackKO: "Pensá qué verdades parecían resistir el argumento del sueño.",
      videoHints: [
        "💡 Opciones: artísticas | históricas | morales | políticas | matemáticas | religiosas",
        "💡 Opciones: 6 | 22 | 8 | 3 | 4 | 5",
        "💡 Opciones: partido | viaje | poema | dibujo | cálculo | sueño",
        "💡 Opciones: suerte | fe | vista | razón | memoria | costumbre"
      ],
      videoSegment: { start: 255, end: 312 } // 4:16 - 5:13
    },
    {
      id: "m9",
      text: "Descartes imagina un [[genio]] [[maligno]] que interfiere en mi [[mente]] cada vez que razono. No afirma que exista, sino que no podemos [[descartar]] que exista.",
      feedbackOK: "Exacto. Es una hipótesis para llevar la duda al extremo.",
      feedbackKO: "Revisá el tercer motivo de duda: la hipótesis más extrema.",
      videoHints: [
        "💡 Opciones: ángel | rey | sabio | genio | maestro | doctor",
        "💡 Opciones: silencioso | dormido | torpe | maligno | bondadoso | lejano",
        "💡 Opciones: ciudad | camino | familia | mente | cuerpo | casa",
        "💡 Opciones: descartar | recordar | celebrar | ver | demostrar | afirmar"
      ],
      videoSegment: { start: 311, end: 348 } // 5:12 - 5:49
    },
    {
      id: "m10",
      text: "Parece que no podemos confiar ni en el mundo ni en la razón, y que caemos en el más completo [[escepticismo]]. Sin embargo, hay una verdad que [[resiste]] a la duda.",
      feedbackOK: "Bien. Pero Descartes no se queda en el escepticismo.",
      feedbackKO: "¿Cómo se llama la postura de quien cree que no se puede conocer nada?",
      videoHints: [
        "💡 Opciones: fanatismo | realismo | idealismo | dogmatismo | escepticismo | optimismo",
        "💡 Opciones: alimenta | resiste | repite | cede | teme | aumenta"
      ],
      videoSegment: { start: 347, end: 381 } // 5:48 - 6:22
    },
    {
      id: "m11",
      text: "Si dudo, estoy [[pensando]], y si pienso, [[existo]]. Cada vez que lo pongo en duda, lo estoy [[confirmando]]. Incluso si el genio maligno me engaña, existo: si no, no tendría a quién [[engañar]].",
      feedbackOK: "¡Excelente! Es la primera verdad: pienso, luego existo.",
      feedbackKO: "Si dudo, ¿qué estoy haciendo en ese mismo momento?",
      videoHints: [
        "💡 Opciones: durmiendo | pensando | corriendo | comiendo | mirando | callando",
        "💡 Opciones: olvido | sueño | caigo | existo | miento | muero",
        "💡 Opciones: confirmando | ocultando | olvidando | perdiendo | borrando | negando",
        "💡 Opciones: engañar | premiar | enseñar | saludar | ayudar | curar"
      ],
      videoSegment: { start: 380, end: 415 } // 6:21 - 6:56
    },
    {
      id: "m12",
      text: "Pero lo que existe no es un ser humano con [[cuerpo]], porque el cuerpo todavía es dudoso: es una [[cosa]] [[pensante]], un ser cuya esencia es pensar. En latín, «pienso, luego existo» es [[cogito|cógito]], ergo sum.",
      feedbackOK: "Perfecto. El cogito demuestra una cosa pensante, no un cuerpo.",
      feedbackKO: "¿Qué es exactamente lo que se demostró que existe?",
      videoHints: [
        "💡 Opciones: mente | alma | voz | idea | nombre | cuerpo",
        "💡 Opciones: cosa | piedra | estrella | planta | máquina | isla",
        "💡 Opciones: pesada | pensante | viviente | material | mortal | visible",
        "💡 Opciones: kosmos | logos | ergo | eidos | sapere | cogito"
      ],
      videoSegment: { start: 423, end: 472 } // 7:04 - 7:53
    },
    {
      id: "m13",
      text: "Sobre esta verdad, Descartes quiere fundar otros [[principios]]; para quitar la duda que el genio maligno deja sobre la razón, se propone demostrar la existencia de [[Dios]].",
      feedbackOK: "Correcto. Pero eso, como dice el video, ya es otra historia.",
      feedbackKO: "Revisá el final del video: ¿qué se propone demostrar Descartes?",
      videoHints: [
        "💡 Opciones: mitos | rumores | relatos | principios | juegos | partidos",
        "💡 Opciones: cuerpo | vacío | átomo | infinito | mundo | Dios"
      ],
      videoSegment: { start: 472, end: 490 } // 7:53 - 8:11
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
  const config = window.VIDEO_CONFIG?.metodo;
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
