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
    desc: 'Felicidad como fin, virtud y término medio. (Ej. *Ética a Nicómaco*)',
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
        title: 'Aristóteles: Ética a Nicómaco',
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
      // Agregar más temas con video según necesites
      // sartre: {
      //   youtubeId: 'otro_video_id',
      //   startTime: 0,
      //   endTime: 300,
      //   title: 'Jean-Paul Sartre: Existencialismo'
      // }
    };