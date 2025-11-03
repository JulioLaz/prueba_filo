// themes/socrates_mayeutica/cloze_test.js - CON SISTEMA DE PISTAS
window.CLOZE_TEST = {
  title: "Cloze — La Mayéutica de Sócrates (0:00–5:30)",
  items: [
    {
      id: "s1",
      text: "La mayéutica (del griego *maieutiké*) significa el [[arte]] de la [[partería]], y consiste en ayudar a dar a luz [[ideas|conocimiento]] que ya están en el [[interior]] del interlocutor.",
      feedbackOK: "Correcto. La mayéutica es el 'arte de parir' ideas.",
      feedbackKO: "Revisa la etimología del término y su significado.",
      videoHints: [
        "💡 Revisa el video entre 0:13 - 0:38 sobre el origen del término y su significado.",
        "💡 ¿Qué profesión tenía la madre de Sócrates? Él usa esa analogía.",
        "💡 La mayéutica ayuda a 'dar a luz' algo que ya está dentro.",
      ],
      videoSegment: { start: 13, end: 38 } // 0:13 - 0:38
    },
    {
      id: "s2", 
      text: "La mayéutica es un proceso de [[diálogo]] basado en el [[cuestionamiento]] continuo, donde el interlocutor llega a descubrir la [[verdad]] por sí [[mismo]].",
      feedbackOK: "Exacto. Es un método activo y auto-descubridor.",
      feedbackKO: "Sócrates no impone ideas, ¿qué hace el interlocutor?",
      videoHints: [
        "💡 Revisa el video entre 0:38 - 0:54 sobre la naturaleza del proceso.",
        "💡 Busca la respuesta a '¿mediante qué llega el interlocutor a descubrir la verdad?'",
        "💡 La mayéutica busca una comprensión más clara y precisa de conceptos abstractos.",
      ],
      videoSegment: { start: 38, end: 54 } // 0:38 - 0:54
    },
    {
      id: "s3",
      text: "La primera fase del diálogo se conoce como [[elenchos]] (cuestionamiento), que busca exponer las [[contradicciones|inconsistencias]] en las creencias y preconceptos iniciales.",
      feedbackOK: "Perfecto. El elenchos es clave para mover al interlocutor de la superficialidad.",
      feedbackKO: "Piensa en el paso de 'pregunta sencilla' a la 'exposición de inconsistencias'.",
      videoHints: [
        "💡 Revisa el video entre 1:14 - 2:11 sobre 'el elenchos' y la 'exposición de contradicciones'.",
        "💡 ¿Cómo se llama a la pregunta inicial que busca 'profundizar en la comprensión'?",
        "💡 El objetivo es que el interlocutor vea que sus ideas no son tan [[sólidas]].",
      ],
      videoSegment: { start: 74, end: 131 } // 1:14 - 2:11
    },
    {
      id: "s4", 
      text: "Curiosamente, el método socrático a menudo termina con una conclusión [[abierta]], lo que refleja la limitación del [[conocimiento]] [[humano]].",
      feedbackOK: "Excelente. La no-respuesta definitiva es parte del reconocimiento de la ignorancia.",
      feedbackKO: "Recuerda la frase de Sócrates sobre 'sólo sé que no sé nada'.",
      videoHints: [
        "💡 Revisa el video entre 2:35 - 2:55 sobre la 'conclusión abierta'.",
        "💡 ¿Cuál era la verdadera [[sabiduría]] para Sócrates?",
        "💡 El método no siempre termina con una respuesta [[definitiva]].",
      ],
      videoSegment: { start: 155, end: 175 } // 2:35 - 2:55
    },
    {
      id: "s5",
      text: "Para Sócrates, el descubrimiento de la verdad a través de la razón lleva a una vida más [[moral]], pues el [[conocimiento]] y la [[virtud]] están intrínsecamente [[ligados]].",
      feedbackOK: "Correcto. El intelectualismo moral socrático.",
      feedbackKO: "Piensa en la relación entre saber y obrar bien según Sócrates.",
      videoHints: [
        "💡 Revisa el video entre 4:36 - 4:43 sobre 'conocimiento y virtud'.",
        "💡 ¿La mayéutica es solo un método pedagógico o un camino hacia algo más?",
        "💡 El individuo no solo se hace más [[sabio]] sino también más [[moral]].",
      ],
      videoSegment: { start: 276, end: 283 } // 4:36 - 4:43
    },
  ]
};