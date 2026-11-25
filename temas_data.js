const TOPICS = {
  dualismo_platonico: {
    icon: '🕊️',
    name: 'Platón',
    desc: 'El alma prisionera del cuerpo: dos mundos, anámnesis y las tres partes del alma. (Ej. Fedón, Fedro)',
    biography: 'Filósofo griego (427–347 a. C.), discípulo de Sócrates y fundador de la Academia. Sostuvo que el ser humano es un alma inmortal encerrada en un cuerpo mortal, que conocer es recordar las Ideas (anámnesis) y que filosofar es aprender a morir. Obras: Fedón, Fedro, Menón, República.'
  },

  antropologia_aristoteles: {
    icon: '🌱',
    name: 'Aristóteles',
    desc: 'El ser humano como unidad de cuerpo y alma: materia y forma, la escala de las almas, animal racional y político. (Ej. Acerca del alma, Política)',
    biography: 'Filósofo griego (384–322 a. C.), discípulo de Platón durante veinte años y fundador del Liceo. Rechazó el dualismo de su maestro: para él el alma es la forma del cuerpo, una sola sustancia con él. Definió al ser humano como animal racional y animal político. Obras: Acerca del alma, Política, Ética a Nicómaco.'
  },

  simbolo_tecnica_muerte: {
    icon: '🧩',
    name: 'Cassirer, Maliandi y Savater',
    desc: 'Tres respuestas a qué nos hace humanos: el animal simbólico, el animal técnico y el ser que sabe que va a morir. (Ej. Antropología filosófica, Ética: dilemas y convergencias, Las preguntas de la vida)',
    biography: 'Ernst Cassirer (1874–1945), filósofo alemán exiliado por el nazismo: el ser humano vive en un universo de símbolos (lenguaje, mito, arte, ciencia). Ricardo Maliandi (1930–2023), filósofo argentino: somos seres carenciales que sobrevivimos gracias a la técnica, y por eso necesitamos una ética de la responsabilidad. Fernando Savater (1947), filósofo español: saber que vamos a morir nos hace humanos y libres.'
  },

  cassirer: {
    icon: '🎭',
    name: 'Ernst Cassirer',
    desc: 'El hombre como creador de símbolos y cultura. (Ej. *Antropología Filosófica*)',
    biography: 'Filósofo neokantiano alemán (1874–1945). Desarrolló la teoría de las “formas simbólicas”: el ser humano conoce y crea mundo a través de sistemas simbólicos (lenguaje, mito, arte, ciencia). Obras destacadas: *Filosofía de las formas simbólicas*, *Antropología filosófica*.'
  },

  nietzsche_superhombre: {
    icon: '⚡',
    name: 'Friedrich Nietzsche',
    desc: 'Dios ha muerto: nihilismo, moral del rebaño, voluntad de poder, eterno retorno y superhombre. (Ej. Así habló Zaratustra, La genealogía de la moral)',
    biography: 'Filósofo alemán (1844–1900), profesor de filología que dejó la universidad por su salud. Anunció la muerte de Dios, criticó la moral del rebaño nacida del resentimiento y propuso crear valores nuevos desde la voluntad de poder. Su hermana modificó sus escritos y el nazismo los usó, pero su superhombre no es una raza: es un horizonte de autocreación. Obras: La gaya ciencia, Así habló Zaratustra, Más allá del bien y del mal, La genealogía de la moral.'
  },

  marx_alienacion: {
    icon: '🏭',
    name: 'Karl Marx',
    desc: 'El trabajo y la alienación: cuando lo que creamos se vuelve contra nosotros. (Ej. Manuscritos económico-filosóficos de 1844, El capital)',
    biography: 'Filósofo y economista alemán (1818–1883). Vivió exiliado en Londres y trabajó junto a Friedrich Engels. Sostuvo que el trabajo es lo que nos hace humanos, pero que en el capitalismo se vuelve trabajo enajenado, y que la filosofía no debe solo interpretar el mundo, sino transformarlo. Obras: Manuscritos económico-filosóficos de 1844, Tesis sobre Feuerbach, El capital.'
  },

  sartre: {
    icon: '🌀',
    name: 'Jean-Paul Sartre',
    desc: 'La existencia precede a la esencia: condenados a ser libres, angustia, mala fe y autenticidad. (Ej. El ser y la nada, El existencialismo es un humanismo)',
    biography: 'Filósofo, novelista y dramaturgo francés (1905–1980), figura del existencialismo. Sostuvo que «la existencia precede a la esencia»: no hay naturaleza humana previa, somos lo que hacemos y estamos condenados a ser libres; la mala fe es el autoengaño para huir de esa responsabilidad. Compañero de Simone de Beauvoir; rechazó el Premio Nobel en 1964. Obras: La náusea, El ser y la nada, El existencialismo es un humanismo.'
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
      antropologia_aristoteles: { // https://www.youtube.com/watch?v=jgEC-kr73XQ (FILOSOFÍA: APRENDE Y APRUEBA); arranca después del saludo
        youtubeId: 'jgEC-kr73XQ',
        startTime: 23,
        endTime: 327,
        title: 'Antropología de Aristóteles',
        duration: '5:27'
      },
      dualismo_platonico: { // https://www.youtube.com/watch?v=pP53wnoy3Vc (teXin - Educación Virtual)
        youtubeId: 'pP53wnoy3Vc',
        startTime: 1,
        endTime: 165,
        title: 'Dualismo antropológico de Platón: cuerpo y alma',
        duration: '2:45'
      },
      nietzsche_superhombre: { // https://youtu.be/FbvXaVJTKrU — 2026-11-25: hasta 6:48 (después el video habla de Hegel); cloze de 13 frases con la transcripción
        youtubeId: 'FbvXaVJTKrU',
        startTime: 1,
        endTime: 409,
        title: 'Nietzsche: Dios ha muerto y el superhombre',
        duration: '6:48'
      },
      marx_alienacion: { // https://youtu.be/MNamo55NDp4 — 2026-11-25: cloze de 11 frases armado con la transcripción
        youtubeId: 'MNamo55NDp4',
        startTime: 1,
        endTime: 482,
        title: 'Alienación y enajenación en Marx',
        duration: '8:01'
      },
      sartre: { // https://youtu.be/wz_1sOjHT1A — 2026-11-25: cloze de 11 frases armado con la transcripción
        youtubeId: 'wz_1sOjHT1A',
        startTime: 1,
        endTime: 260,
        title: 'Sartre: existencia, libertad y angustia',
        duration: '4:19'
      },
      etica: {
        youtubeId: 'eHIDwx6J-lA',
        startTime: 1,
        endTime: 576,
        title: 'Ética y Moral',
        duration: '10:33'
      }, // https://www.youtube.com/shorts/0s73cG7fJoA
      etica_aristoteles: {
        youtubeId: 'qYU0hTprTAc',
        startTime: 1,
        endTime: 365, // el cloze llega hasta 6:02
        title: 'Ética de Aristóteles',
        duration: '6:02'
      }, // https://www.youtube.com/shorts/0s73cG7fJoA
      hedonismo: {
        youtubeId: 'Yt0Yjtn0VSc', //https://www.youtube.com/watch?v=Yt0Yjtn0VSc
        // youtubeId: '0s73cG7fJoA', //https://www.youtube.com/watch?v=Yt0Yjtn0VSc
        startTime: 1,
        endTime: 168, // el cloze llega hasta 2:45 (antes cortaba en 0:58)
        title: 'Hedonismo',
        duration: '2:48',
        // type: 'short'
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
      etica_kant: { // https://youtu.be/Lq0ZGcqn-Zg (La Ética en Kant - Unboxing Philosophy)
        youtubeId: 'Lq0ZGcqn-Zg',
        startTime: 1,
        endTime: 330,
        title: 'Ética de Kant',
        duration: '5:30',
        // type: 'short'
      },
      antropocentrismo: { // https://www.youtube.com/watch?v=xf96Q4NAdwY
        youtubeId: 'xf96Q4NAdwY',
        startTime: 1,
        endTime: 157,
        title: 'Antropocentrismo',
        duration: '2:36',
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
      endTime: 389,                       // 2026-11-24: el video dura 6:28 (antes pedía 11 minutos)
      title: 'Del Mito al Logos: Etimología y origen histórico',
      duration: '6:28'
    },


    // 1.2 - Los Inicios del Pensamiento Filosófico (Presocráticos)
    presocraticos: {
        youtubeId: 'vlIM-okP9I0',
        startTime: 1,
        endTime: 1023, // 2026-11-24: hasta 17:03 para cubrir los 11 huecos del cloze (antes cortaba en 10:01)
        title: 'Los Filósofos Presocráticos (Resumen Fácil)',
        duration: '17:03'
    },
    // 1.3 - El Giro Antropológico: Sócrates
    socrates: {
        youtubeId: 'OD7klEUAq1Y',
        // youtubeId: '81l43tKcMxQ',
        startTime: 1,
        endTime: 437, // 2026-11-24: el video dura 7:16 (antes pedía 7:30)
        title: 'La mayéutica de Sócrates',
        duration: '7:16'
    },
    // 1.4 - Platón: Mundo de las Ideas y Conocimiento
    platon: {
        youtubeId: '0cqb5BBcctY',
        startTime: 1,
        endTime: 601, // 2026-11-24: hasta 10:00 para cubrir los 16 huecos del cloze (antes cortaba en 9:01)
        title: 'Platón: ideas, alma y política',
        duration: '14:00'
    },
    // 1.5 - Aristóteles: Lógica, Ética y Metafísica
    aristoteles: {
        // youtubeId: 'jAnCP68Ch1s',
        youtubeId: 'K0Dn-_ZhmyM',
        startTime: 1,
        endTime: 1021, // 2026-11-24: hasta 17:00 para cubrir los 16 huecos del cloze (antes cortaba en 6:31)
        title: 'Aristóteles: El concepto de Sustancia',
        duration: '18:30'
    },
    // 1.6 - El Método Filosófico: Duda, Diálogo y Crítica
    metodo: {
        youtubeId: 'sdGQcNaz4JM',
        startTime: 1,
        endTime: 493, // 2026-11-24: video completo (8:12); el cloze de 13 frases lo recorre entero (antes pedía ver 12 minutos)
        title: 'El Método Filosófico: La Duda Metódica',
        duration: '8:12'
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
    // Examen oral con el filósofo: actividad final que cierra el tema.
    // Se habilita con al menos minimoActividad (60%) en CADA actividad del tema, y el
    // tema se aprueba con eso Y el examen aprobado (nota ≥ notaAprobacion).
    // El banco de preguntas está en themes/<tema>/examen.json (lo lee la Cloud Function).
    const EXAMEN_CONFIG = {
      origen: {
        filosofo: 'Tales de Mileto',
        icono: '📜',
        notaAprobacion: 6,
        minimoActividad: 60
      },
      presocraticos: {
        filosofo: 'Heráclito de Éfeso',
        icono: '🌊',
        notaAprobacion: 6,
        minimoActividad: 60
      },
      socrates: {
        filosofo: 'Sócrates',
        icono: '🧠',
        notaAprobacion: 6,
        minimoActividad: 60
      },
      platon: {
        filosofo: 'Platón',
        icono: '🌌',
        notaAprobacion: 6,
        minimoActividad: 60
      },
      aristoteles: {
        filosofo: 'Aristóteles',
        icono: '📐',
        notaAprobacion: 6,
        minimoActividad: 60
      },
      metodo: {
        filosofo: 'René Descartes',
        icono: '🔎',
        notaAprobacion: 6,
        minimoActividad: 60
      },
      nietzsche_superhombre: {
        filosofo: 'Friedrich Nietzsche',
        icono: '⚡',
        notaAprobacion: 6,
        minimoActividad: 60
      },
      marx_alienacion: {
        filosofo: 'Karl Marx',
        icono: '🏭',
        notaAprobacion: 6,
        minimoActividad: 60
      },
      sartre: {
        filosofo: 'Jean-Paul Sartre',
        icono: '🌀',
        notaAprobacion: 6,
        minimoActividad: 60
      },
      simbolo_tecnica_muerte: {
        filosofo: 'Ernst Cassirer',
        icono: '🧩',
        notaAprobacion: 6,
        minimoActividad: 60
      },
      antropologia_aristoteles: {
        filosofo: 'Aristóteles',
        icono: '🌱',
        notaAprobacion: 6,
        minimoActividad: 60
      },
      dualismo_platonico: {
        filosofo: 'Platón',
        icono: '🕊️',
        notaAprobacion: 6,
        minimoActividad: 60
      },
      etica_aristoteles: {
        filosofo: 'Aristóteles',
        icono: '🏛️',
        notaAprobacion: 6,
        minimoActividad: 60
      },
      hedonismo: {
        filosofo: 'Epicuro',
        icono: '🌸',
        notaAprobacion: 6,
        minimoActividad: 60
      },
      utilitarismo: {
        filosofo: 'John Stuart Mill',
        icono: '🎯',
        notaAprobacion: 6,
        minimoActividad: 60
      },
      etica: {
        filosofo: 'Sócrates',
        icono: '🧭',
        notaAprobacion: 6,
        minimoActividad: 60
      }
    };
