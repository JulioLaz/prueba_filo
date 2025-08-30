// Config del crucigrama para el tema Ética y Moral
window.CROSSWORD_CONFIG = {
  slug: "etica",             // para guardar progreso: tema.<slug>.cruci
  title: "Ética y moral",
  central: "ETICAYMORAL",    // palabra vertical (sin espacios)
  sounds: {
    ok:  "sound/collect_points.mp3",
    bad: "sound/negative_beep.mp3"
  },
  // Cada palabra horizontal:
  // row: índice dentro de la palabra vertical (0..central.length-1)
  // answer: palabra a completar (sin espacios)
  // crossIndex: en qué posición de 'answer' cae la letra que cruza la vertical
  // clue: la pregunta
  words: [
    { row: 0,  answer: "EMPATIA",        crossIndex: 0, clue: "Capacidad de ponerse en el lugar del otro." },
    { row: 1,  answer: "RESPETO",        crossIndex: 4, clue: "Reconocer al otro como fin y no como medio." },
    { row: 2,  answer: "INTENCION",      crossIndex: 0, clue: "Para Kant, ¿qué valora la ética para juzgar una acción?" },
    { row: 3,  answer: "CONSECUENCIAS",  crossIndex: 0, clue: "¿Qué evalúa principalmente el utilitarismo?" },
    { row: 4,  answer: "AUTONOMIA",      crossIndex: 0, clue: "Capacidad de darse a sí mismo la ley." },
    { row: 5,  answer: "LEY",            crossIndex: 2, clue: "Norma que expresa lo permitido y lo prohibido." },
    { row: 6,  answer: "MAXIMA",         crossIndex: 0, clue: "En Kant: regla subjetiva de la acción." },
    { row: 7,  answer: "OBLIGACION",     crossIndex: 0, clue: "Deber que impone la ley moral." },
    { row: 8,  answer: "RESPONSABILIDAD",crossIndex: 0, clue: "Responder por los actos propios." },
    { row: 9,  answer: "ARISTOTELES",    crossIndex: 0, clue: "Filósofo de la ética de la virtud." },
    { row: 10, answer: "LIBERTAD",       crossIndex: 0, clue: "Condición de posibilidad de la responsabilidad." }
  ]
};
