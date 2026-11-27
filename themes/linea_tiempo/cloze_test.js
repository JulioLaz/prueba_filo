// themes/linea_tiempo/cloze_test.js
// Cloze — Línea del tiempo: «¿Progresa la humanidad o solo nuestra tecnología?» (Short vertical
// 8m1OOYHsdsk, 1:23, hecho con NotebookLM). 10 frases en el orden del video, con sus tiempos
// (videoSegment contado desde startTime = 0) y una pista de opciones por hueco.
// Armado con la transcripción (Whisper); se corrigieron errores del reconocimiento de voz:
// «técnica cinética» → «técnica sin ética», «parcéit» → «apartheid», «barbaria» → «barbarie».
// Versión 1.0 (2026-11-27)
window.CLOZE_TEST = {
  title: "Cloze — ¿Progresa la humanidad? (0:00—1:23)",
  items: [
    {
      id: "lt1",
      text: "1- Imaginemos la historia humana como un día de [[24|veinticuatro]] horas. Casi toda nuestra [[tecnología]] apareció en el último [[minuto]].",
      feedbackOK: "¡Correcto! Es el reloj de la humanidad: casi todo lo moderno ocurre al final del día.",
      feedbackKO: "Pensá en el reloj de la humanidad: ¿cuántas horas tiene el día y en qué momento aparece casi toda la tecnología?",
      videoHints: [
        "💡 Opciones: 12 | 24 | 100 | 365 | 1000 | 60",
        "💡 Opciones: filosofía | tecnología | religión | política | moral | escritura",
        "💡 Opciones: siglo | minuto | milenio | año | mes | segundo"
      ],
      videoSegment: { start: 0, end: 7 } // 0:00 - 0:07
    },
    {
      id: "lt2",
      text: "2- ¿Progresamos como [[humanidad]] o solo mejoran nuestras [[herramientas]]?",
      feedbackOK: "¡Exacto! Esa es la pregunta central: mejorar los medios no es lo mismo que mejorar como personas.",
      feedbackKO: "La pregunta contrapone a los seres humanos con los objetos técnicos que fabrican.",
      videoHints: [
        "💡 Opciones: sociedad | humanidad | economía | ciencia | especie | naturaleza",
        "💡 Opciones: ideas | leyes | herramientas | costumbres | creencias | ciudades"
      ],
      videoSegment: { start: 6, end: 12 } // 0:06 - 0:12
    },
    {
      id: "lt3",
      text: "3- En la técnica el avance se [[acumula]]: escritura, imprenta, máquina de vapor, inteligencia artificial. Pero la tecnología sola no [[reparte]] sus beneficios.",
      feedbackOK: "¡Muy bien! Cada invento se apoya en el anterior, pero sus beneficios no llegan solos a todos.",
      feedbackKO: "Recordá: cada invento se apoya en los anteriores… y eso no garantiza que todos se beneficien.",
      videoHints: [
        "💡 Opciones: pierde | acumula | detiene | repite | olvida | divide",
        "💡 Opciones: reparte | produce | inventa | esconde | vende | multiplica"
      ],
      videoSegment: { start: 11, end: 23 } // 0:11 - 0:23
    },
    {
      id: "lt4",
      text: "4- El pensamiento es [[cíclico|ciclico]]: desde el período axial y Tomás de Aquino hasta Kant o Foucault, las grandes [[preguntas]] siempre vuelven.",
      feedbackOK: "¡Correcto! En filosofía no hay «versión 2.0»: las preguntas por la justicia o la libertad vuelven en cada época.",
      feedbackKO: "El pensamiento no se acumula como la técnica: ¿qué es lo que vuelve una y otra vez?",
      videoHints: [
        "💡 Opciones: lineal | cíclico | acumulativo | inútil | estático | moderno",
        "💡 Opciones: respuestas | preguntas | guerras | modas | teorías | máquinas"
      ],
      videoSegment: { start: 22, end: 32 } // 0:22 - 0:32
    },
    {
      id: "lt5",
      text: "5- El poder necesita [[límites]] constantes: desde el Egipto faraónico y la Revolución Francesa hasta la Guerra Fría y la caída del Muro.",
      feedbackOK: "¡Exacto! La legitimidad del poder cambia, pero siempre puede volver a concentrarse si no tiene límites.",
      feedbackKO: "Pensá qué le hace falta al poder para no volverse autoritario.",
      videoHints: [
        "💡 Opciones: armas | límites | dinero | líderes | enemigos | secretos"
      ],
      videoSegment: { start: 31, end: 39 } // 0:31 - 0:39
    },
    {
      id: "lt6",
      text: "6- La técnica sin [[ética|etica]] multiplica la [[violencia]]: la conquista, las guerras mundiales, Hiroshima o el 11 de septiembre nos dieron un poder [[destructivo]] brutal.",
      feedbackOK: "¡Muy bien! Más capacidad técnica no significa menos violencia: la técnica multiplicó la capacidad de destruir.",
      feedbackKO: "Escuchá con atención: «la técnica sin…». ¿Qué multiplica la técnica cuando le falta eso?",
      videoHints: [
        "💡 Opciones: dinero | ética | ciencia | energía | límites | control",
        "💡 Opciones: riqueza | violencia | justicia | libertad | población | felicidad",
        "💡 Opciones: creativo | económico | destructivo | político | educativo | moral"
      ],
      videoSegment: { start: 38, end: 49 } // 0:38 - 0:49
    },
    {
      id: "lt7",
      text: "7- La [[dignidad]] se conquista [[despacio]]: la Magna Carta, los derechos humanos del 48 o el fin del apartheid.",
      feedbackOK: "¡Correcto! Los derechos no se regalan: se amplían de a poco, con luchas.",
      feedbackKO: "Pensá en el eje de la emancipación: ¿qué se conquista y a qué ritmo?",
      videoHints: [
        "💡 Opciones: riqueza | dignidad | tecnología | fama | tierra | fuerza",
        "💡 Opciones: rápido | despacio | sola | gratis | fácil | siempre"
      ],
      videoSegment: { start: 48, end: 56 } // 0:48 - 0:56
    },
    {
      id: "lt8",
      text: "8- Acá costó igual: la Revolución de 1810, la Independencia en [[Tucumán|Tucuman]], la Reforma Universitaria y el voto femenino del 47 se ganaron [[peleando]].",
      feedbackOK: "¡Exacto! También en la Argentina los derechos y la independencia se conquistaron con lucha.",
      feedbackKO: "¿Dónde se declaró la Independencia? ¿Y cómo se ganaron esos derechos?",
      videoHints: [
        "💡 Opciones: Buenos Aires | Córdoba | Tucumán | Salta | Mendoza | Rosario",
        "💡 Opciones: votando | peleando | esperando | comprando | rezando | viajando"
      ],
      videoSegment: { start: 55, end: 67 } // 0:55 - 1:07
    },
    {
      id: "lt9",
      text: "9- Kant y Hegel confiaban en el progreso de la [[libertad]], pero [[Benjamin|Benjamín]] veía ruinas. Y Adorno avisó que la técnica sin ética sirve a la [[barbarie]].",
      feedbackOK: "¡Muy bien! El optimismo de la Ilustración frente a la mirada crítica del siglo XX.",
      feedbackKO: "Recordá las dos miradas: los que confiaban en el progreso y los que vieron sus ruinas.",
      videoHints: [
        "💡 Opciones: riqueza | técnica | libertad | ciencia | religión | nación",
        "💡 Opciones: Sócrates | Benjamin | Marx | Platón | Nietzsche | Descartes",
        "💡 Opciones: justicia | barbarie | ciencia | libertad | democracia | paz"
      ],
      videoSegment: { start: 66, end: 76 } // 1:06 - 1:16
    },
    {
      id: "lt10",
      text: "10- La tecnología avanza [[sola]]; el bien y la [[justicia]] no. Si el progreso no es [[automático|automatico]], ¿qué te toca hacer a vos?",
      feedbackOK: "¡Excelente! Esa es la conclusión: el progreso ético depende de nuestras decisiones.",
      feedbackKO: "La conclusión contrapone lo que avanza por sí mismo con lo que depende de nosotros.",
      videoHints: [
        "💡 Opciones: lenta | sola | poco | nunca | mal | atrás",
        "💡 Opciones: ciencia | justicia | economía | técnica | moda | fuerza",
        "💡 Opciones: automático | imposible | rápido | falso | eterno | necesario"
      ],
      videoSegment: { start: 75, end: 83 } // 1:15 - 1:23
    }
  ]
};
