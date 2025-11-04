const TOPICS = {
  cassirer: {
    icon: '🎭',
    name: 'Ernst Cassirer',
    desc: 'El hombre como creador de símbolos y cultura. (Ej. *Antropología Filosófica*)',
    biography: 'Filósofo neokantiano alemán (1874–1945). Desarrolló la teoría de las “formas simbólicas”: el ser humano conoce y crea mundo a través de sistemas simbólicos (lenguaje, mito, arte, ciencia). Obras destacadas: *Filosofía de las formas simbólicas*, *Antropología filosófica*.'
  },

  sartre: {
    icon: '🌀',
    name: 'Jean-Paul Sartre',
    desc: 'Libertad ineludible, angustia y mala fe. (Ej. *El ser y la nada*)',
    biography: 'Filósofo y escritor francés (1905–1980), figura del existencialismo. Sostuvo que “la existencia precede a la esencia”: estamos condenados a ser libres; la mala fe es el autoengaño para huir de esa responsabilidad. Obras: *El ser y la nada*, *El existencialismo es un humanismo*.'
  },

  etica: {
    icon: '🧭',
    name: 'Ética y Moral',
    desc: 'Dilemas morales y responsabilidad. Exponentes: Aristóteles, Kant. (Ej. *Ética a Nicómaco*)',
    expositores: ['Aristóteles', ' Immanuel Kant', ' Jeremy Bentham', ' John Stuart Mill', ' Rosalind Hursthouse']
  },

  etica_aristoteles: {
    icon: '🏛️',
    name: 'Aristóteles',
    desc: `Felicidad como fin, virtud y término medio. (Ej. Ética a Nicómaco)`,
    biography: 'Filósofo griego (384–322 a. C.). Defendió la eudaimonía (florecimiento) como fin humano y la virtud como hábito adquirido que halla el “término medio”, guiado por la prudencia (phronesis). Obra clave: *Ética a Nicómaco*.'
  },

  hedonismo: {
    icon: '🌸',
    name: 'Hedonismo',
    desc: 'El placer como fin de la vida. Exponentes: Epicuro, J. Bentham. (Ej. *Carta a Meneceo*)',
    expositores: ['Epicuro', ' Aristipo de Cirene', ' Jeremy Bentham']
  },

  utilitarismo: {
    icon: '🎯',
    name: 'Utilitarismo',
    desc: 'La mayor felicidad para el mayor número. Exponentes: J. Bentham, J.S. Mill. (Ej. *El Utilitarismo*)',
    expositores: ['Jeremy Bentham', ' John Stuart Mill', ' Henry Sidgwick', ' Peter Singer']
  },

  pragmatismo: {
    icon: '🛠️',
    name: 'Pragmatismo',
    desc: 'La verdad se evalúa por su utilidad práctica. Exponentes: Ch. Peirce, W. James. (Ej. *Pragmatismo*)',
    expositores: ['Charles S. Peirce', ' William James', ' John Dewey']
  },

  etica_kant: {
    icon: '⚖️',
    name: 'Ética Kantiana',
    desc: 'La moral reside en el deber y la intención. (Ej. *Fundamentación de la metafísica de las costumbres*)',
    biography: 'Filósofo alemán (1724–1804). Propuso una ética deontológica basada en el imperativo categórico: obrar según máximas universalizables y tratar a las personas siempre como fines. Obras: *Fundamentación de la metafísica de las costumbres*, *Crítica de la razón práctica*.'
  },

  antropocentrismo: {
    icon: '👤',
    name: 'Antropocentrismo',
    desc: 'El ser humano como centro. Exponentes: Pico della Mirandola, L. da Vinci. (Ej. *Discurso sobre la dignidad del hombre*)',
    expositores: ['Giovanni Pico della Mirandola', ' Leonardo da Vinci', ' René Descartes']
  },

  epistemologia: {
    icon: '🔍',
    name: 'Epistemología',
    desc: 'Naturaleza, adquisición y límites del conocimiento. Exponentes: Platón, Descartes. (Ej. *Meditaciones Metafísicas*)',
    expositores: ['Platón', ' René Descartes', ' David Hume', ' Immanuel Kant', ' Karl Popper', ' Thomas Kuhn']
  },

  logica: {
    icon: '🧠',
    name: 'Lógica y Argumentación',
    desc: 'Razonamiento válido y construcción de argumentos. Exponentes: Aristóteles, B. Russell. (Ej. *Primeros Analíticos*)',
    expositores: ['Aristóteles', ' Gottlob Frege', ' Bertrand Russell', ' Alfred Tarski']
  },

  metafisica: {
    icon: '🌌',
    name: 'Metafísica',
    desc: 'Naturaleza del ser, realidad y existencia. Exponentes: Aristóteles, Kant. (Ej. *Metafísica*)',
    expositores: ['Aristóteles', ' Tomás de Aquino', ' Immanuel Kant', ' Martin Heidegger']
  },

  estetica: {
    icon: '🎨',
    name: 'Estética',
    desc: 'La naturaleza de la belleza y el arte. Exponentes: Platón, Kant. (Ej. *Crítica del juicio*)',
    expositores: ['Platón', ' Immanuel Kant', ' David Hume', ' Friedrich Nietzsche', ' Theodor W. Adorno']
  },

  'filosofia-politica': {
    icon: '🏛️',
    name: 'Filosofía Política',
    desc: 'La justicia, el poder y la sociedad. Exponentes: Platón, Maquiavelo, J. Rawls. (Ej. *El Príncipe*)',
    expositores: ['Platón', ' Nicolás Maquiavelo', ' Thomas Hobbes', ' John Locke', ' Jean-Jacques Rousseau', ' John Rawls', ' Hannah Arendt']
  }
};

    const VIDEO_CONFIG = {
      etica_aristoteles: {
        youtubeId: 'qYU0hTprTAc',
        startTime: 13,
        endTime: 360,
        title: 'Ética de Aristóteles',
        duration: '5:47'
      }, // https://www.youtube.com/shorts/0s73cG7fJoA
      hedonismo: {
        youtubeId: '0s73cG7fJoA',
        startTime: 1,
        endTime: 58,
        title: 'Hedonismo',
        duration: '58',
        type: 'short'
      },
      utilitarismo: { //https://youtu.be/YU19bTA656I?si=ns1OzYx5AZyJPQKV
        youtubeId: 'YU19bTA656I',
        startTime: 1,
        endTime: 127,
        title: 'Utilitarismo',
        duration: '2:07',
        // type: 'short'
      },
      pragmatismo: { // https://youtu.be/jHix800gjVQ?si=CXmquX1hq3CiA3fa
        youtubeId: 'jHix800gjVQ',
        startTime: 1,
        endTime: 158,
        title: 'Pragmatismo',
        duration: '2:38',
        // type: 'short'
      },
      etica_kant: { // https://www.youtube.com/watch?v=Lq0ZGcqn-Zg&t=155s
      // etica_kant: { // https://youtube.com/shorts/SD8kiCDupYc?si=_HISyvC6m5cmJH0i
        youtubeId: 'Lq0ZGcqn-Zg&t',
        // youtubeId: 'SD8kiCDupYc',
        startTime: 1,
        endTime: 127,
        title: 'Etica de Kant',
        duration: '57',
        // type: 'short'
      },
      antropocentrismo: { // https://www.youtube.com/watch?v=xf96Q4NAdwY
        youtubeId: 'xf96Q4NAdwY',
        startTime: 1,
        endTime: 127,
        title: 'Antropocentrismo',
        duration: '57',
        // type: 'short'
      },
// 1.1 - Etimología y Origen Histórico: Del Mito al Logos
    // origen: {
    //     youtubeId: 'L2144lY93WI',
    //     startTime: 1,
    //     endTime: 481, // 8 minutos
    //     title: 'El origen de la Filosofía. El paso del mito al logos',
    //     duration: '8:00'
    // },
    // 1.1 - Etimología y Origen Histórico: Del Mito al Logos
    origen: {
      youtubeId: '4-6_Rmf6nh0',          // Del Mito al Logos: El Nacimiento de la Razón
      startTime: 1,
      endTime: 660,                       // ≈11:00
      title: 'Del Mito al Logos: Etimología y origen histórico',
      duration: '11:00'
    },


    // 1.2 - Los Inicios del Pensamiento Filosófico (Presocráticos)
    presocraticos: {
        youtubeId: 'vlIM-okP9I0',
        startTime: 1,
        endTime: 601, // 10 minutos
        title: 'Los Filósofos Presocráticos (Resumen Fácil)',
        duration: '10:00'
    },
    // 1.3 - El Giro Antropológico: Sócrates
    socrates: {
        youtubeId: 'OD7klEUAq1Y',
        // youtubeId: '81l43tKcMxQ',
        startTime: 1,
        endTime: 451, // 7 minutos y 30 segundos
        title: 'La mayéutica de Sócrates',
        duration: '7:30'
    },
    // 1.4 - Platón: Mundo de las Ideas y Conocimiento
    platon: {
        youtubeId: '0cqb5BBcctY',
        startTime: 1,
        endTime: 541, // 9 minutos
        title: 'Platón: ideas, alma y política',
        duration: '14:00'
    },
    // 1.5 - Aristóteles: Lógica, Ética y Metafísica
    aristoteles: {
        youtubeId: 'jAnCP68Ch1s',
        startTime: 1,
        endTime: 391, // 6 minutos y 30 segundos
        title: 'Aristóteles: El concepto de Sustancia',
        duration: '6:30'
    },
    // 1.6 - El Método Filosófico: Duda, Diálogo y Crítica
    metodo: {
        youtubeId: 'sdGQcNaz4JM',
        startTime: 1,
        endTime: 721, // 12 minutos
        title: 'El Método Filosófico: La Duda Metódica',
        duration: '12:00'
    },
    // 1.7 - Ramas Clásicas: Metafísica, Ética y Lógica
    ramas: {
        youtubeId: 'U7fqKBvsSRQ',
        startTime: 1,
        endTime: 661, // 11 minutos
        title: 'Ramas Clásicas de la Filosofía',
        duration: '11:00'
    }
    };