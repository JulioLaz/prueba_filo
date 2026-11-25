// themes/utilitarismo/cloze_test.js
// Cloze — Utilitarismo. Video YU19bTA656I: 15 frases en el orden del video, con sus tiempos
// (videoSegment contado desde startTime = 1) y una pista de opciones por hueco.
// Versión 2.0 (2026-11-25): revisado con la transcripción (las 15 frases coinciden); tramos con
//   los tiempos reales y el video termina en 1:57, antes de la despedida.
window.CLOZE_TEST = {
  title: "Cloze — Utilitarismo (0:00—1:57)",
  items: [
    {
      id: "u1",
      text: "1- El utilitarismo es una teoría ética que sostiene que la mejor acción es la que produce mayor [[bienestar]] para el [[mayor número|mayor numero]] de personas involucradas.",
      feedbackOK: "¡Correcto! Has captado la definición fundamental del utilitarismo.",
      feedbackKO: "Revisa la definición básica: ¿qué produce la mejor acción?",
      videoHints: [
        "💡 Opciones: honor | dolor | bienestar | poder | placer | riqueza",
        "💡 Opciones: pocos | élite | algunos | mayor número | individuos | menor número"
      ],
      videoSegment: { start: 0, end: 9 } // 0:01 - 0:10
    },
    {
      id: "u2",
      text: "2- El utilitarismo toma como valor supremo a la [[utilidad]], entendiendo que si algo es valioso, entonces es [[útil]].",
      feedbackOK: "¡Perfecto! La utilidad es el valor supremo en esta teoría.",
      feedbackKO: "Piensa en el concepto central que da nombre a esta teoría ética.",
      videoHints: [
        "💡 Opciones: placer | utilidad | deber | belleza | virtud | justicia",
        "💡 Opciones: justo | útil | verdadero | virtuoso | bello | sagrado"
      ],
      videoSegment: { start: 8, end: 15 } // 0:09 - 0:16
    },
    {
      id: "u3",
      text: "3- Como teoría filosófica, el utilitarismo se desarrolla principalmente en [[Inglaterra]], a partir de los estudios de [[Jeremy Bentham|Bentham]], James Mill y [[John Stuart Mill|Stuart Mill]].",
      feedbackOK: "¡Excelente! Conoces el origen geográfico y los principales autores utilitaristas.",
      feedbackKO: "Recuerda dónde y quiénes desarrollaron el utilitarismo.",
      videoHints: [
        "💡 Opciones: Alemania | Italia | España | Inglaterra | Grecia | Francia",
        "💡 Opciones: Hume | Locke | Kant | Hobbes | Jeremy Bentham | Berkeley",
        "💡 Opciones: John Stuart Mill | Marx | Schopenhauer | Nietzsche | Kierkegaard | Hegel"
      ],
      videoSegment: { start: 14, end: 23 } // 0:15 - 0:24
    },
    {
      id: "u4",
      text: "4- Bentham sostuvo que estamos bajo el dominio del [[dolor]] y el [[placer]]. Por lo tanto, se vuelve necesario defender el principio de [[utilidad]].",
      feedbackOK: "¡Correcto! Bentham identifica los dos motores de la conducta humana.",
      feedbackKO: "Piensa en las dos fuerzas que dominan nuestras acciones según Bentham.",
      videoHints: [
        "💡 Opciones: razón | dolor | deber | placer | pasión | virtud",
        "💡 Opciones: placer | honor | virtud | dolor | felicidad | sabiduría",
        "💡 Opciones: deber | libertad | utilidad | dignidad | virtud | justicia"
      ],
      videoSegment: { start: 22, end: 30 } // 0:23 - 0:31
    },
    {
      id: "u5",
      text: "5- El principio de utilidad busca atraer el [[placer]] y eludir el [[dolor]], lo que nos llevará indefectiblemente a la [[felicidad]].",
      feedbackOK: "¡Perfecto! La felicidad es el resultado de maximizar placer y minimizar dolor.",
      feedbackKO: "Recuerda el objetivo final del principio de utilidad.",
      videoHints: [
        "💡 Opciones: dolor | placer | deber | honor | virtud | poder",
        "💡 Opciones: placer | dolor | sufrimiento | pena | tristeza | angustia",
        "💡 Opciones: sabiduría | honor | virtud | gloria | felicidad | deber"
      ],
      videoSegment: { start: 29, end: 35 } // 0:30 - 0:36
    },
    {
      id: "u6",
      text: "6- Bentham sostuvo que la determinación de la felicidad no puede dejarse liberada al parecer del [[individuo]]. Por ello propone una mirada [[cuantitativa]] respecto del bienestar.",
      feedbackOK: "¡Excelente! Bentham propone medir objetivamente el placer, no dejarlo al criterio personal.",
      feedbackKO: "Piensa en cómo Bentham quiere medir la felicidad: ¿subjetiva u objetivamente?",
      videoHints: [
        "💡 Opciones: Estado | sociedad | individuo | filósofo | rey | sacerdote",
        "💡 Opciones: cuantitativa | subjetiva | intuitiva | cualitativa | espiritual | relativa"
      ],
      videoSegment: { start: 38, end: 48 } // 0:39 - 0:49
    },
    {
      id: "u7",
      text: "7- Para Bentham, podría calcularse [[cuánto placer|cuanto placer]] genera una acción y a [[cuántas personas|cuantas personas]] involucra. Una acción será buena si da mucho placer a la [[mayor cantidad|mayor cantidad]] de personas posibles.",
      feedbackOK: "¡Correcto! El cálculo utilitarista benthamiano es matemático y cuantitativo.",
      feedbackKO: "Recuerda: Bentham quiere calcular y medir el placer de forma matemática.",
      videoHints: [
        "💡 Opciones: qué tipo | cuándo | dónde | cuánto placer | cómo | por qué",
        "💡 Opciones: las élites | ciertas personas | pocas personas | algunas personas | cuántas personas | qué personas",
        "💡 Opciones: poca cantidad | algunos | menor cantidad | mayor cantidad | la élite | los virtuosos"
      ],
      videoSegment: { start: 47, end: 58 } // 0:48 - 0:59
    },
    {
      id: "u8",
      text: "8- Stuart Mill señaló la insuficiencia de la cuantificación, por lo que se volcó a afirmar el carácter [[cualitativo]] de las afecciones.",
      feedbackOK: "¡Perfecto! Stuart Mill critica a Bentham y propone una visión cualitativa.",
      feedbackKO: "Recuerda la crítica de Stuart Mill a Bentham sobre cómo medir el placer.",
      videoHints: [
        "💡 Opciones: cualitativo | objetivo | medible | cuantitativo | numérico | matemático"
      ],
      videoSegment: { start: 59, end: 68 } // 1:00 - 1:09
    },
    {
      id: "u9",
      text: "9- Para Stuart Mill, algunos placeres son más [[deseables]] y [[valiosos]] que otros.",
      feedbackOK: "¡Correcto! No todos los placeres tienen el mismo valor según Stuart Mill.",
      feedbackKO: "Piensa en la diferencia cualitativa entre placeres que propone Stuart Mill.",
      videoHints: [
        "💡 Opciones: indeseables | medibles | cuantificables | calculables | objetivos | deseables",
        "💡 Opciones: dañinos | perjudiciales | inútiles | despreciables | negativos | valiosos"
      ],
      videoSegment: { start: 67, end: 72 } // 1:08 - 1:13
    },
    {
      id: "u10",
      text: "10- Stuart Mill señaló la superioridad de los placeres [[intelectuales]] y [[afectivos]] por sobre los [[sensibles]].",
      feedbackOK: "¡Excelente! La famosa frase: mejor ser Sócrates insatisfecho que cerdo satisfecho.",
      feedbackKO: "Recuerda qué tipo de placeres son superiores para Stuart Mill.",
      videoHints: [
        "💡 Opciones: corporales | materiales | intelectuales | sensibles | instintivos | físicos",
        "💡 Opciones: corporales | físicos | sensuales | afectivos | instintivos | materiales",
        "💡 Opciones: racionales | espirituales | intelectuales | éticos | sensibles | morales"
      ],
      videoSegment: { start: 71, end: 79 } // 1:12 - 1:20
    },
    {
      id: "u11",
      text: "11- Stuart Mill buscó quitar al utilitarismo del [[hedonismo]] vulgar y egoísta.",
      feedbackOK: "¡Correcto! Stuart Mill refina el utilitarismo para distanciarlo del hedonismo simple.",
      feedbackKO: "Piensa en de qué corriente filosófica Stuart Mill quiere diferenciar al utilitarismo.",
      videoHints: [
        "💡 Opciones: nihilismo | racionalismo | estoicismo | idealismo | hedonismo | escepticismo"
      ],
      videoSegment: { start: 78, end: 83 } // 1:19 - 1:24
    },
    {
      id: "u12",
      text: "12- A diferencia de otras éticas como la kantiana, el utilitarismo se basa en las [[consecuencias]] de las acciones para determinar si son buenas o malas.",
      feedbackOK: "¡Perfecto! El utilitarismo es una ética consecuencialista, no deontológica.",
      feedbackKO: "Recuerda: el utilitarismo es consecuencialista, ¿qué evalúa de las acciones?",
      videoHints: [
        "💡 Opciones: intenciones | consecuencias | motivos | deberes | principios | virtudes"
      ],
      videoSegment: { start: 82, end: 94 } // 1:23 - 1:35
    },
    {
      id: "u13",
      text: "13- Al utilitarismo no le interesan las [[intenciones]] o los [[valores]] que promueven las acciones. Si la acción beneficia a la [[mayoría]], entonces es buena.",
      feedbackOK: "¡Excelente! El fin justifica los medios: solo importan los resultados.",
      feedbackKO: "Piensa en qué NO importa para el utilitarismo al evaluar una acción.",
      videoHints: [
        "💡 Opciones: fines | efectos | productos | consecuencias | intenciones | resultados",
        "💡 Opciones: efectos | utilidades | beneficios | resultados | valores | consecuencias",
        "💡 Opciones: individuos | algunos | élite | minoría | mayoría | pocos"
      ],
      videoSegment: { start: 93, end: 102 } // 1:34 - 1:43
    },
    {
      id: "u14",
      text: "14- Crítica al utilitarismo: ¿qué significa [[beneficiar]]? ¿Cómo se puede medir que este beneficio sea para la mayoría y a lo [[largo del tiempo|largo]]?",
      feedbackOK: "¡Correcto! Has identificado los problemas de definición y medición del utilitarismo.",
      feedbackKO: "Piensa en las dificultades prácticas de aplicar el utilitarismo.",
      videoHints: [
        "💡 Opciones: dañar | ignorar | perjudicar | beneficiar | castigar | excluir",
        "💡 Opciones: corto del tiempo | ahora | inmediatamente | largo del tiempo | brevemente | momentáneamente"
      ],
      videoSegment: { start: 101, end: 109 } // 1:42 - 1:50
    },
    {
      id: "u15",
      text: "15- Dilema utilitarista: si una acción [[perjudica]] unos pocos pero [[beneficia]] a muchos, entonces ¿es [[buena]]?",
      feedbackOK: "¡Perfecto! Has captado el dilema ético central del utilitarismo.",
      feedbackKO: "Reflexiona sobre el problema del sacrificio de minorías por el bien mayoritario.",
      videoHints: [
        "💡 Opciones: salva | ayuda | favorece | perjudica | beneficia | protege",
        "💡 Opciones: castiga | excluye | ignora | beneficia | daña | perjudica",
        "💡 Opciones: buena | prohibida | inmoral | incorrecta | mala | injusta"
      ],
      videoSegment: { start: 108, end: 115 } // 1:49 - 1:56
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
  const config = window.VIDEO_CONFIG?.utilitarismo;
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
