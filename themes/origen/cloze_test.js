// themes/origen/cloze_test.js
// CLOZE TEST — “Del mito al logos”

window.CLOZE_TEST = {
  title: "Cloze — Del mito al logos: origen de la filosofía",
  items: [
    {
      id: "o1",
      text: "Se suele decir que la filosofía nace cuando se produce el paso del [[mito]] al [[logos]].",
      feedbackOK: "Muy bien. Esa es la fórmula clásica para explicar el nacimiento de la filosofía.",
      feedbackKO: "Piensa en la expresión típica: del relato mítico a la explicación racional.",
      videoHints: [
        "💡 Escucha el comienzo del video donde se menciona explícitamente 'el paso del mito al logos'.",
        "💡 Fíjate cómo el narrador presenta esa frase como punto de partida de la filosofía.",
        "💡 La palabra griega 'logos' suele traducirse como 'razón' o 'discurso racional'."
      ],
      // TODO: Ajustar estos tiempos mirando el video.
      // Poné aquí el segundo en que se dice la frase 'el paso del mito al logos'
      videoSegment: { start: 20, end: 35 }
    },
    {
      id: "o2",
      text: "El [[mito]] es un tipo de relato que explica el mundo recurriendo a [[dioses|divinidades]] y fuerzas [[sobrenaturales|sobrenatural]].",
      feedbackOK: "Correcto. El mito explica apelando a dioses y fuerzas sobrenaturales.",
      feedbackKO: "Recuerda que el mito no busca argumentos racionales, sino relatos con dioses.",
      videoHints: [
        "💡 Busca el momento en que el video describe qué es un mito.",
        "💡 Escucha cuando se habla de 'relatos tradicionales' y 'dioses' que explican fenómenos.",
        "💡 Fíjate cuando se subraya que estas explicaciones no son todavía científicas."
      ],
      videoSegment: { start: 60, end: 85 } // ajustar
    },
    {
      id: "o3",
      text: "En el pensamiento mítico, los fenómenos naturales se personifican: la lluvia, el mar o la [[tierra]] se explican como acciones de [[dioses|divinidades|seres divinos]].",
      feedbackOK: "Exacto. El mito antropomorfiza y personaliza las fuerzas de la naturaleza.",
      feedbackKO: "Piensa en los dioses que 'controlan' el mar, la tierra o el cielo.",
      videoHints: [
        "💡 Ubica el fragmento donde se dan ejemplos de fenómenos naturales explicados con dioses.",
        "💡 El narrador suele mencionar algún dios del mar, del trueno, etc.",
        "💡 Revisa cuando se habla de 'antropomorfizar' o 'personificar' la naturaleza."
      ],
      videoSegment: { start: 90, end: 115 } // ajustar
    },
    {
      id: "o4",
      text: "El [[logos]] es la búsqueda de explicaciones [[racionales|racional]] y [[argumentadas|argumentales]] sobre el mundo.",
      feedbackOK: "Muy bien. El logos introduce razón y argumentación en lugar de puro relato.",
      feedbackKO: "Piensa en palabras como 'razón', 'explicación racional' y 'argumentos'.",
      videoHints: [
        "💡 Escucha el momento en que se contrasta mito y logos directamente.",
        "💡 Fíjate cuando se define el logos como 'razón' o 'discurso racional'.",
        "💡 Revisa cuando se destaca que ahora se piden razones y no solo autoridad del relato."
      ],
      videoSegment: { start: 130, end: 155 } // ajustar
    },
    {
      id: "o5",
      text: "El surgimiento del logos está ligado a cambios históricos: el desarrollo de la [[polis]], el comercio y los viajes que ampliaron el [[horizonte|mundo]] de los griegos.",
      feedbackOK: "Perfecto. La filosofía nace también por cambios sociales y políticos.",
      feedbackKO: "Piensa en cómo la ciudad, el comercio y los viajes fomentan el pensamiento crítico.",
      videoHints: [
        "💡 Busca el fragmento donde se mencionan factores históricos (polis, comercio, viajes).",
        "💡 Escucha cómo se explica que el contacto con otros pueblos cuestiona las creencias antiguas.",
        "💡 Revisa cuando el narrador habla de una 'apertura del horizonte' o una 'nueva mentalidad'."
      ],
      videoSegment: { start: 180, end: 215 } // ajustar
    },
    {
      id: "o6",
      text: "Los primeros filósofos, como [[Tales de Mileto|Tales]], buscan un principio [[racional|natural]] que explique el origen de todas las cosas.",
      feedbackOK: "Muy bien. Tales es un ejemplo de explicación racional del cosmos.",
      feedbackKO: "Recuerda que Tales busca un principio, no un dios caprichoso, para explicar el mundo.",
      videoHints: [
        "💡 Localiza cuando el video menciona a Tales o a los primeros filósofos jonios.",
        "💡 Fíjate si se habla de un 'principio' o 'arjé' que unifica toda la realidad.",
        "💡 Escucha cómo se diferencia esta explicación de los relatos míticos anteriores."
      ],
      videoSegment: { start: 230, end: 260 } // ajustar
    },
    {
      id: "o7",
      text: "Con el logos aparece una actitud [[crítica|cuestionadora]]: ya no basta repetir la tradición, ahora se pide [[justificación|argumentos|razones]].",
      feedbackOK: "Exacto. La actitud crítica es central en el paso del mito al logos.",
      feedbackKO: "Piensa en la diferencia entre aceptar algo 'porque siempre fue así' y exigir razones.",
      videoHints: [
        "💡 Busca el fragmento donde se habla de 'cuestionar la tradición' o 'espíritu crítico'.",
        "💡 Fíjate cuando el narrador explica que ahora se discuten las creencias heredadas.",
        "💡 Revisa si se menciona que se buscan razones y no solo autoridades religiosas."
      ],
      videoSegment: { start: 270, end: 300 } // ajustar
    },
    {
      id: "o8",
      text: "El paso del mito al logos no elimina por completo el [[mito]], pero inaugura una nueva forma de [[pensar|pensamiento]] basada en la [[razón|racionalidad]].",
      feedbackOK: "Muy bien. Mito y logos conviven, pero aparece un modo nuevo de pensar.",
      feedbackKO: "Recuerda que el mito no desaparece, pero ya no es la única forma de explicación.",
      videoHints: [
        "💡 Ubica el momento en que se aclara que el mito y el logos conviven durante un tiempo.",
        "💡 Escucha la síntesis final sobre lo que significó este cambio de mentalidad.",
        "💡 Atiende cuando se habla de 'nueva forma de pensar' o 'explicación racional del mundo'."
      ],
      videoSegment: { start: 320, end: 355 } // ajustar
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

// === Link directo al momento del video ===
// IMPORTANTE: aquí usamos VIDEO_CONFIG.origen
window.CLOZE_TEST.getVideoLink = function(itemId) {
  const item = this.items.find(i => i.id === itemId);
  if (!item || !item.videoSegment) return null;

  const config = window.VIDEO_CONFIG?.origen;
  if (!config) return null;

  // item.videoSegment.start es relativo a config.startTime
  const actualStart = (config.startTime || 0) + item.videoSegment.start;

  // Si quieres forzar que siempre vaya 2–3 segundos antes:
  const safeStart = Math.max(actualStart - 3, 0);

  return `https://www.youtube.com/watch?v=${config.youtubeId}&t=${safeStart}s`;
};
