// themes/platon_ideas/cloze_test.js - CON SISTEMA DE PISTAS
window.CLOZE_TEST = {
  title: "Cloze — Teoría de las Ideas de Platón (3:40–9:00)",
  items: [
    {
      id: "p1",
      text: "Platón divide la realidad en dos mundos: el mundo [[inteligible|ideas]] (accesible por la [[razón|espíritu]]) y el mundo [[sensible|visible]] (accesible por los [[sentidos]]).",
      feedbackOK: "Correcto. Esta es la base de la teoría platónica: el dualismo ontológico.",
      feedbackKO: "Revisa la división de la realidad y qué facultad accede a cada mundo.",
      videoHints: [
        "💡 Revisa el video entre 3:41 - 4:00 sobre las 'dos realidades'.",
        "💡 Busca 'mundo inteligible' vs 'mundo visible'.",
        "💡 ¿Con qué parte de nosotros accedemos al mundo de las ideas?",
      ],
      videoSegment: { start: 221, end: 240 } // 3:41 - 4:00
    },
    {
      id: "p2", 
      text: "Una [[Idea]] es un concepto [[universal]], una [[entidad]] en sí misma y la [[causa|fundamento|modelo]] de las cosas sensibles.",
      feedbackOK: "Exacto. Las Ideas son modelos, realidades en sí mismas y universales.",
      feedbackKO: "Piensa en las tres funciones principales de la Idea según Platón.",
      videoHints: [
        "💡 Revisa el video entre 4:28 - 4:57 sobre la definición de 'idea'.",
        "💡 Una idea es también [[causa]], entendida como [[finalidad]] o [[modelo]] a seguir.",
        "💡 No es solo una suma de características, sino una forma [[unitaria]] de validez [[universal]].",
      ],
      videoSegment: { start: 268, end: 297 } // 4:28 - 4:57
    },
    {
      id: "p3",
      text: "Las Ideas tienen una existencia [[separada|absoluta]] (independiente del sujeto), son [[eternas]] e [[inmortales]], y solo son accesibles al [[pensamiento]] [[puro]].",
      feedbackOK: "Perfecto. Son entidades objetivas y trascendentes.",
      feedbackKO: "Piensa en las características que hacen que las Ideas no cambien.",
      videoHints: [
        "💡 Revisa el video entre 6:43 - 7:34 sobre la existencia 'absoluta' y las características divinas.",
        "💡 La existencia de las ideas es [[separada]], independientemente de quien las esté pensando.",
        "💡 ¿A qué parte de nosotros son accesibles?",
      ],
      videoSegment: { start: 403, end: 454 } // 6:43 - 7:34
    },
    {
      id: "p4", 
      text: "El mundo [[sensible|material]] es una [[imagen|copia]] imperfecta del mundo [[inteligible]], y por estar en movimiento está siempre entre el [[ser]] y el [[no]]-[[ser]].",
      feedbackOK: "Excelente. El mundo sensible es una participación en la realidad verdadera.",
      feedbackKO: "¿Cómo se relaciona el mundo sensible con las Ideas? ¿Es perfecto o imperfecto?",
      videoHints: [
        "💡 Revisa el video entre 8:26 - 9:55 sobre la relación entre el mundo material y las ideas.",
        "💡 El mundo sensible es el mundo del [[movimiento]] y el [[cambio]].",
        "💡 ¿Qué significa que las ideas sean la [[cosa]] [[verdadera]] y la cosa material sea la [[imagen]] de la idea?",
      ],
      videoSegment: { start: 506, end: 595 } // 8:26 - 9:55
    },
  ]
};