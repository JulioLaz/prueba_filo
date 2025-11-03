// themes/descartes_duda/cloze_test.js - CON SISTEMA DE PISTAS
window.CLOZE_TEST = {
  title: "Cloze — La Duda Metódica de Descartes (1:00–7:50)",
  items: [
    {
      id: "d1",
      text: "La [[duda]] [[metódica]] es un [[análisis]] [[sistemático]] y [[radical]] que busca encontrar una [[verdad]] [[evidente]] e [[incuestionable]].",
      feedbackOK: "Correcto. La duda es la herramienta para alcanzar la certeza en la filosofía cartesiana.",
      feedbackKO: "Revisa cuál es la primera regla del método de Descartes.",
      videoHints: [
        "💡 Revisa el video entre 1:09 - 2:22 sobre la 'duda metódica'.",
        "💡 El objetivo es que la verdad sobreviva a un 'cuestionamiento [[sistemático]] y [[radical]]'.",
        "💡 La verdad debe ser [[evidente]] e [[incuestionable]].",
      ],
      videoSegment: { start: 69, end: 142 } // 1:09 - 2:22
    },
    {
      id: "d2", 
      text: "El primer motivo de duda son los [[sentidos]], ya que nos [[engañan]] en ocasiones, por lo que no sirven como fuente [[segura]] de conocimiento.",
      feedbackOK: "Exacto. Lo que nos engaña a veces, puede engañarnos siempre.",
      feedbackKO: "Piensa en la forma más básica y elemental de conocimiento.",
      videoHints: [
        "💡 Revisa el video entre 2:28 - 3:06 sobre la primera fuente de conocimiento que se cuestiona.",
        "💡 ¿Podemos [[confiar]] en nuestros sentidos? ¿Hay ocasiones en que fallan?",
        "💡 Si dudamos de los sentidos, debemos [[descartar]]los como fuente de conocimiento.",
      ],
      videoSegment: { start: 148, end: 186 } // 2:28 - 3:06
    },
    {
      id: "d3",
      text: "El segundo motivo de duda es la imposibilidad de distinguir de forma [[segura]] la [[vigilia]] del [[sueño]], lo que lleva a cuestionar la existencia del [[mundo]] [[externo]].",
      feedbackOK: "Perfecto. La indistinción entre sueño y vigilia compromete la certeza del mundo físico.",
      feedbackKO: "¿Qué ocurre cuando despertamos de un sueño? ¿Cómo se aplica esa duda a toda la vida?",
      videoHints: [
        "💡 Revisa el video entre 3:16 - 3:54 sobre el 'argumento del sueño'.",
        "💡 ¿Hay una manera [[fiable]] de distinguir el sueño de la vigilia?",
        "💡 Si no hay garantía de que no sea un sueño, la existencia del [[mundo]] es [[dudable]].",
      ],
      videoSegment: { start: 196, end: 234 } // 3:16 - 3:54
    },
    {
      id: "d4", 
      text: "El tercer motivo de duda es la hipótesis del [[Genio]] [[Maligno]], un ser que podría estarme [[engañando]] incluso en los [[razonamientos]] [[matemáticos]] o lógicos.",
      feedbackOK: "Excelente. Esta hipótesis radicaliza la duda a las verdades racionales.",
      feedbackKO: "Piensa en la duda hiperbólica que afecta a las verdades que no dependen del mundo (como 2+2=4).",
      videoHints: [
        "💡 Revisa el video entre 5:04 - 5:28 sobre la hipótesis más extrema de Descartes.",
        "💡 ¿Qué pasa con los [[conocimientos]] [[matemáticos]] y las [[verdades]] [[racionales]]?",
        "💡 Si este ser [[malvado]] interfiere en mi mente, ¿puedo estar seguro de mis [[cálculos]]?",
      ],
      videoSegment: { start: 304, end: 328 } // 5:04 - 5:28
    },
    {
      id: "d5",
      text: "La primera verdad que resiste la duda es el [[Cogito]] cartesiano: *Pienso, luego [[existo]]* (*cogito ergo sum*), lo que demuestra la existencia de una [[cosa]] [[pensante|substancia pensante]].",
      feedbackOK: "Correcto. El *Cogito* es el primer principio, la verdad evidente e indudable.",
      feedbackKO: "Si dudo, ¿qué estoy confirmando inmediatamente? Piensa en la famosa frase en latín.",
      videoHints: [
        "💡 Revisa el video entre 6:22 - 7:04 sobre la verdad que 'resiste a la duda'.",
        "💡 ¿Cómo se llama al ser cuya esencia es [[pensar]]?",
        "💡 Cada vez que pongo en duda mi existencia, la estoy [[confirmando]].",
      ],
      videoSegment: { start: 382, end: 424 } // 6:22 - 7:04
    },
  ]
};