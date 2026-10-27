/*
 * projects/guias/comun.js
 * Contenido común de las guías del Proyecto Final (trimestre 3): requisitos, hoja de
 * ruta, cómo formular la hipótesis, tipos de argumento, falacias, guion de la
 * exposición, guía para el público, rúbrica y estructura del afiche.
 * Lo usa projects/guia.html junto con el archivo de cada tema (dios.js, sentido.js).
 * Versión: v1.0.0 (2026-10-28)
 */
window.GUIA_COMUN = {
  requisitos: [
    "Grupos de <strong>2 o 3 integrantes</strong>.",
    "Elegir <strong>una pregunta</strong> de debate del tema (o proponer una propia y consultarla con el profesor).",
    "Investigar y usar <strong>al menos 6 autores o pensadores</strong>: filósofos, científicos, escritores o tradiciones religiosas. Que haya voces <strong>a favor y en contra</strong> de su hipótesis.",
    "Sostener una <strong>hipótesis</strong> propia y defenderla con argumentos, respondiendo las objeciones.",
    "Hacer un <strong>afiche</strong> (impreso o digital) con la estructura de esta guía.",
    "Exponer <strong>8 minutos</strong>. Después, el resto del curso tiene <strong>4 minutos</strong> para preguntar y cuestionar.",
    "Se evalúa la <strong>calidad de la argumentación</strong>, no las creencias de nadie."
  ],

  // Hoja de ruta (pasos del grupo). "seccion" es el id de la sección de la guía que ayuda en ese paso.
  pasos: [
    { titulo: "Formar el grupo y elegir la pregunta", detalle: "Lean las preguntas de debate y elijan la que más les interese. Una buena pregunta es la que les dan ganas de discutir.", seccion: "preguntas" },
    { titulo: "Investigar al menos 6 autores", detalle: "Usen el mapa de autores. Repártanse la lectura: cada integrante investiga 2 o 3 y después se lo explica a los demás.", seccion: "autores" },
    { titulo: "Tomar posición: la hipótesis", detalle: "Con el asistente elijan su postura y escriban su hipótesis con sus palabras. Tiene que ser una respuesta clara a la pregunta.", seccion: "asistente" },
    { titulo: "Armar la demostración", detalle: "Elijan sus 3 mejores argumentos y escríbanlos como premisas y conclusión. Revisen que no tengan falacias.", seccion: "demostrar" },
    { titulo: "Anticipar las objeciones", detalle: "Busquen las 2 objeciones más fuertes contra su hipótesis y preparen la réplica de cada una.", seccion: "asistente" },
    { titulo: "Elegir un caso o ejemplo", detalle: "Un caso concreto hace que la exposición se entienda y se recuerde.", seccion: "casos" },
    { titulo: "Escribir la conclusión", detalle: "Respondan la pregunta, digan qué aprendieron y qué queda abierto.", seccion: "conclusiones" },
    { titulo: "Hacer el afiche", detalle: "Usen el armador o miren el afiche de muestra.", seccion: "afiche" },
    { titulo: "Ensayar la exposición", detalle: "Repartan las partes, cronometren los 8 minutos y practiquen las respuestas a las preguntas más probables.", seccion: "presentacion" }
  ],

  hipotesis: {
    que_es: "La hipótesis es la <strong>respuesta del grupo a la pregunta</strong>: una afirmación clara que van a defender con argumentos. No es una opinión suelta («a mí me parece…»), sino una tesis que se puede discutir y justificar.",
    caracteristicas: [
      "Responde directamente la pregunta elegida.",
      "Es una sola idea central, dicha en una o dos oraciones.",
      "Se puede discutir: alguien razonable podría pensar lo contrario.",
      "Incluye el <strong>porqué</strong> (el argumento principal).",
      "Usa los conceptos del tema con precisión."
    ],
    plantilla: "Sostenemos que <em>[respuesta a la pregunta]</em>, porque <em>[argumento principal]</em>. Aunque <em>[objeción más fuerte]</em>, <em>[por qué la hipótesis sigue en pie]</em>."
  },

  tiposArgumento: [
    { id: "deductivo", nombre: "Deductivo (premisas → conclusión)", explicacion: "Si las premisas son verdaderas y la forma es correcta, la conclusión es necesaria. Escribanlo en pasos numerados: P1, P2… → Conclusión." },
    { id: "ejemplo", nombre: "Por ejemplos o casos (inductivo)", explicacion: "Varios casos concretos apoyan una idea general. Es convincente, pero no prueba del todo: siempre puede aparecer un contraejemplo." },
    { id: "analogia", nombre: "Por analogía", explicacion: "Si dos cosas se parecen en mucho, lo que vale para una puede valer para la otra. Su punto débil: ¿se parecen de verdad en lo importante?" },
    { id: "autoridad", nombre: "De autoridad (bien usado)", explicacion: "Citar a un especialista en el tema, explicando sus razones. No alcanza con «lo dijo X»: hay que mostrar por qué lo dijo." },
    { id: "absurdo", nombre: "Reducción al absurdo", explicacion: "Se supone lo contrario de la hipótesis y se muestra que lleva a algo absurdo o contradictorio." },
    { id: "contraejemplo", nombre: "Contraejemplo", explicacion: "Para refutar una afirmación general («todos…», «siempre…») alcanza con un solo caso que no cumpla." }
  ],

  falacias: [
    { id: "ad_hominem", nombre: "Ataque a la persona (ad hominem)", explicacion: "Descalificar a quien argumenta en lugar de discutir su argumento." },
    { id: "hombre_paja", nombre: "Hombre de paja", explicacion: "Deformar la postura contraria para que sea fácil de refutar." },
    { id: "ignorancia", nombre: "Apelación a la ignorancia", explicacion: "Concluir que algo es verdadero porque no se demostró que sea falso (o al revés)." },
    { id: "mayoria", nombre: "Apelación a la mayoría (ad populum)", explicacion: "Creer que algo es verdadero porque mucha gente lo piensa." },
    { id: "circular", nombre: "Razonamiento circular (petición de principio)", explicacion: "Dar por supuesto en las premisas lo que se quiere demostrar." },
    { id: "falso_dilema", nombre: "Falso dilema", explicacion: "Presentar solo dos opciones cuando hay más." },
    { id: "generalizacion", nombre: "Generalización apresurada", explicacion: "Sacar una conclusión general a partir de muy pocos casos." }
  ],

  conclusiones: {
    que_es: "La conclusión no repite todo: <strong>responde la pregunta</strong> a la luz de lo que mostraron, reconoce lo que no pudieron resolver y deja una pregunta para el público.",
    partes: [
      "<strong>Respuesta final</strong>: ¿se sostuvo la hipótesis? ¿Hubo que matizarla después de las objeciones?",
      "<strong>Lo que aprendimos</strong>: una idea que les cambió la manera de pensar el tema.",
      "<strong>Lo que queda abierto</strong>: una pregunta honesta que todavía no tiene respuesta.",
      "<strong>Frase final</strong>: una cita o una imagen que resuma la exposición."
    ]
  },

  afiche: {
    estructura: [
      { campo: "pregunta", titulo: "Pregunta de debate", ayuda: "La pregunta elegida, bien grande." },
      { campo: "hipotesis", titulo: "Nuestra hipótesis", ayuda: "La respuesta del grupo, en una o dos oraciones." },
      { campo: "autores", titulo: "Lo que dicen los pensadores (mínimo 6)", ayuda: "Nombre y su idea en una línea. Separen los que apoyan la hipótesis de los que se oponen." },
      { campo: "argumentos", titulo: "Argumentos a favor", ayuda: "Los 3 más fuertes, cortos." },
      { campo: "objeciones", titulo: "Objeciones y réplica", ayuda: "Las 2 objeciones más fuertes y cómo las responden." },
      { campo: "caso", titulo: "Caso o ejemplo", ayuda: "Una situación concreta que ilustra el debate." },
      { campo: "conclusion", titulo: "Conclusión", ayuda: "La respuesta final y lo que queda abierto." },
      { campo: "bibliografia", titulo: "Fuentes y equipo", ayuda: "Libros, videos o páginas consultadas; curso e integrantes." }
    ],
    consejos: [
      "Poco texto y letra grande: el afiche acompaña la exposición, no la reemplaza.",
      "Usen colores para separar «a favor» y «en contra».",
      "Una imagen o un esquema vale más que un párrafo.",
      "Siempre la fuente de cada cita."
    ]
  },

  presentacion: {
    guion: [
      { tiempo: "0:00 – 1:00", parte: "Apertura", detalle: "Saludo, presentación del grupo y la pregunta. Empiecen con algo que atrape: un caso, una cita o una pregunta al público." },
      { tiempo: "1:00 – 2:00", parte: "Hipótesis", detalle: "Digan claramente qué sostienen y por qué." },
      { tiempo: "2:00 – 4:30", parte: "Los pensadores", detalle: "Presenten los 6 (o más) autores: qué dice cada uno y si apoya o se opone a su hipótesis. Usen el afiche." },
      { tiempo: "4:30 – 6:30", parte: "Demostración y objeciones", detalle: "Sus 3 argumentos, las 2 objeciones más fuertes y sus réplicas." },
      { tiempo: "6:30 – 7:30", parte: "Caso", detalle: "Apliquen todo a un caso concreto." },
      { tiempo: "7:30 – 8:00", parte: "Conclusión", detalle: "Respuesta final, lo que queda abierto y una frase de cierre." },
      { tiempo: "8:00 – 12:00", parte: "Preguntas del curso", detalle: "El resto de la clase pregunta y cuestiona. Respondan entre todos." }
    ],
    roles: {
      dos: [
        "<strong>Integrante 1</strong>: apertura, hipótesis y la mitad de los pensadores.",
        "<strong>Integrante 2</strong>: la otra mitad de los pensadores, la demostración y las objeciones.",
        "<strong>Juntos</strong>: caso, conclusión y respuestas a las preguntas."
      ],
      tres: [
        "<strong>Integrante 1</strong>: apertura, pregunta e hipótesis.",
        "<strong>Integrante 2</strong>: los pensadores (con el afiche).",
        "<strong>Integrante 3</strong>: demostración, objeciones y réplicas.",
        "<strong>Juntos</strong>: caso, conclusión y respuestas a las preguntas."
      ]
    },
    consejos: [
      "Ensayen con cronómetro: 8 minutos pasan rápido.",
      "No lean: usen el afiche y tarjetas con palabras clave.",
      "Expliquen cada concepto con un ejemplo de la vida cotidiana.",
      "Miren al público y hablen con convicción, pero reconozcan lo difícil del tema.",
      "Si no saben algo, díganlo: «no lo investigamos, pero pensamos que…» es una buena respuesta."
    ],
    comoResponder: [
      "Agradezcan la pregunta y repítanla con sus palabras para asegurarse de entenderla.",
      "Respondan con un autor o un argumento que ya presentaron.",
      "Si la objeción es buena, reconózcanlo y expliquen por qué igual sostienen la hipótesis (o cómo la matizarían).",
      "Respuestas cortas: una idea por respuesta."
    ],
    publico: [
      { tipo: "Pedir una definición", ejemplo: "«¿Qué entienden ustedes por…?»" },
      { tipo: "Pedir un ejemplo", ejemplo: "«¿Me dan un caso concreto de eso?»" },
      { tipo: "Plantear un contraejemplo", ejemplo: "«¿Y qué pasa en este caso, donde no se cumple?»" },
      { tipo: "Preguntar por las consecuencias", ejemplo: "«Si eso es cierto, ¿no se seguiría que…?»" },
      { tipo: "Señalar una contradicción", ejemplo: "«Al principio dijeron X, pero ahora dicen Y.»" },
      { tipo: "Traer otro autor", ejemplo: "«¿Qué le responderían a lo que dice…?»" }
    ]
  },

  rubrica: {
    aclaracion: "Se evalúa cómo piensan y argumentan, nunca lo que creen. Una hipótesis puede ser religiosa o no religiosa: vale lo mismo si está bien fundamentada.",
    niveles: ["Excelente", "Muy bien", "En proceso", "Insuficiente"],
    criterios: [
      { nombre: "Pregunta e hipótesis", peso: 15, descriptores: [
        "Hipótesis clara, propia, que responde la pregunta y anticipa su fundamento.",
        "Hipótesis clara que responde la pregunta.",
        "Hipótesis vaga o que responde a medias.",
        "No hay hipótesis o no se relaciona con la pregunta." ] },
      { nombre: "Investigación (mínimo 6 pensadores)", peso: 25, descriptores: [
        "6 o más pensadores bien explicados, con voces a favor y en contra y fuentes citadas.",
        "6 pensadores correctamente explicados.",
        "Menos de 6, o explicados de forma superficial.",
        "Investigación muy escasa o con errores graves." ] },
      { nombre: "Argumentación y réplica", peso: 25, descriptores: [
        "Argumentos sólidos, sin falacias; objeciones fuertes respondidas con buenas razones.",
        "Buenos argumentos y objeciones respondidas.",
        "Argumentos débiles o objeciones sin responder.",
        "No hay argumentación, solo opiniones." ] },
      { nombre: "Afiche", peso: 15, descriptores: [
        "Completo, claro, atractivo y con fuentes.",
        "Completo y claro.",
        "Incompleto o desordenado.",
        "No hay afiche." ] },
      { nombre: "Exposición y respuesta a preguntas", peso: 20, descriptores: [
        "Clara, en tiempo, todos participan y responden con argumentos.",
        "Clara y en tiempo; responden la mayoría de las preguntas.",
        "Leída, fuera de tiempo o con respuestas muy flojas.",
        "Desorganizada o sin participación de todos." ] }
    ]
  }
};
