/*
 * themes/linea_tiempo/termometro.js — «Termómetro del progreso» (actividad de linea.html?modo=termometro).
 *
 * Para cada eje: 4 hitos en orden (ids de hitos.js). El alumno juzga cada paso (avanzó,
 * retrocedió o siguió igual) — no hay respuesta correcta: con eso se dibuja su gráfico —
 * y después elige la conclusión mejor fundada con los datos de la línea (esa sí puntúa).
 * Al final, la pregunta general: ¿progresa la humanidad?
 * Puntaje: 40% por juzgar todos los pasos + 60% por las conclusiones bien fundadas (6).
 * Versión: v1.0 (2026-11-26)
 */
window.LINEA_TERMOMETRO = {
  ejes: [
    {
      eje: 'tecnica',
      hitos: ['invencion_de_la_escritura', 'imprenta_de_gutenberg', 'maquina_de_vapor_y_revolucion_industrial', 'explosion_de_la_inteligencia_artificial'],
      pregunta: '¿Qué conclusión sobre la técnica está mejor fundada en la línea?',
      opciones: [
        'La técnica avanza de forma acumulativa y cada vez más rápido: cada invento se apoya en los anteriores.',
        'La técnica avanzó en la Antigüedad y después se estancó hasta hoy.',
        'Cada invento técnico mejoró la vida de todos por igual, sin costos.',
      ],
      correcta: 0,
      porque: 'La escritura, la imprenta, la máquina de vapor y la IA se apoyan unas en otras, y entre cada una pasa cada vez menos tiempo: miles de años, después siglos, después décadas. Pero la máquina de vapor también trajo jornadas de 14 horas y trabajo infantil: el avance técnico no reparte sus beneficios por sí solo.',
    },
    {
      eje: 'pensamiento',
      hitos: ['el_periodo_axial', 'tomas_de_aquino', 'kant', 'foucault'],
      pregunta: '¿Qué conclusión sobre el pensamiento está mejor fundada en la línea?',
      opciones: [
        'Los filósofos actuales tienen razón y los antiguos estaban equivocados, como pasa con los inventos.',
        'El pensamiento no se acumula como la técnica: las grandes preguntas vuelven y se responden de nuevas maneras.',
        'La filosofía dejó de cambiar después de los griegos.',
      ],
      correcta: 1,
      porque: 'Nadie usa hoy una imprenta de Gutenberg, pero seguimos leyendo a Sócrates, a Tomás y a Kant. Las preguntas por la justicia, el conocimiento o la libertad vuelven en cada época con respuestas nuevas: en filosofía no hay "versión 2.0" que vuelva obsoleta a la anterior.',
    },
    {
      eje: 'poder',
      hitos: ['unificacion_del_egipto_faraonico', 'revolucion_francesa', 'guerra_fria', 'vuelta_de_la_democracia_en_argentina'],
      pregunta: '¿Qué conclusión sobre el poder está mejor fundada en la línea?',
      opciones: [
        'El poder siempre se legitimó del mismo modo: por la fuerza.',
        'Desde la Revolución Francesa no volvió a haber gobiernos autoritarios.',
        'La legitimidad del poder cambia (de lo sagrado a la soberanía del pueblo), pero el poder necesita límites y puede volver a concentrarse.',
      ],
      correcta: 2,
      porque: 'El faraón mandaba como dios viviente; desde 1789, el poder se justifica en el pueblo. Pero en el siglo XX hubo totalitarismos y, en Argentina, una dictadura entre 1976 y 1983: la democracia recuperada en 1983 muestra que los límites al poder se conquistan y hay que sostenerlos.',
    },
    {
      eje: 'violencia',
      hitos: ['la_conquista_de_america', 'primera_guerra_mundial', 'hiroshima_y_nagasaki', 'atentados_del_11_de_septiembre'],
      pregunta: '¿Qué conclusión sobre la violencia está mejor fundada en la línea?',
      opciones: [
        'La violencia no desaparece con el progreso técnico: la técnica multiplica su capacidad de destrucción.',
        'Desde la Edad Media, la violencia disminuyó sin interrupciones.',
        'La violencia depende solo de la maldad de algunas personas, no de la técnica ni del poder.',
      ],
      correcta: 0,
      porque: 'Con la técnica moderna, la guerra pasó de las espadas a las ametralladoras de 1914 y a la bomba atómica de 1945, que destruyó ciudades en segundos. Adorno lo resume: hay una historia que lleva «de la honda a la bomba atómica». Los Estados y las ideologías organizan esa violencia: no es solo un asunto individual.',
    },
    {
      eje: 'emancipacion',
      hitos: ['la_magna_carta', 'revolucion_haitiana', 'voto_femenino_en_argentina', 'fin_del_apartheid'],
      pregunta: '¿Qué conclusión sobre la emancipación está mejor fundada en la línea?',
      opciones: [
        'Todos los derechos se conquistaron juntos con la Revolución Francesa.',
        'Los derechos se amplían, pero despacio, a través de luchas y con retrocesos.',
        'La emancipación fue un regalo de los gobernantes ilustrados.',
      ],
      correcta: 1,
      porque: 'Entre la Magna Carta (1215) y el fin del apartheid (1994) pasaron casi 800 años. La Revolución Francesa proclamó la igualdad en 1789, pero los esclavos de Haití tuvieron que liberarse por sí mismos en 1791 y las argentinas votaron recién desde 1947. Cada derecho fue el resultado de una lucha.',
    },
  ],
  final: {
    pregunta: 'Después de recorrer los cinco ejes: ¿progresa la humanidad?',
    opciones: [
      'Sí: la historia avanza siempre hacia algo mejor, como pensaban Kant y Hegel.',
      'No: todo es catástrofe y nada mejoró nunca.',
      'Depende del eje: la técnica progresa de forma acumulativa, pero el progreso moral y político no es automático; hay que sostenerlo y puede retroceder.',
      'Es imposible saberlo: la historia no se puede estudiar.',
    ],
    correcta: 2,
    porque: 'Kant y Hegel confiaban en un progreso de la razón y la libertad. Walter Benjamin y Adorno, que vivieron las guerras mundiales y el nazismo, mostraron que ese progreso no es automático: la técnica avanza sin parar, pero la justicia y los derechos dependen de lo que hagamos. Ni optimismo ciego ni desesperanza: el progreso humano es una tarea.',
  },
};
