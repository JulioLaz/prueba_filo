// ========================================
// 📜 TEMA: ORIGEN DE LA FILOSOFÍA - DEL MITO AL LOGOS
// ========================================
// 📚 Unidad I: ¿Qué es filosofía?

const themeLoadStart = performance.now();

const ORIGEN_FILOSOFIA_THEME = {
    id: 'origen',
    title: 'Origen de la Filosofía: Del Mito al Logos',
    description: 'El nacimiento de la filosofía occidental, el paso del mito al logos y la búsqueda del arché en los filósofos presocráticos.',
    icon: '📜',
    gradient: 'linear-gradient(135deg, #1e90ff 0%, #00bfff 100%)',
    difficulty: 'basico',
    timeLimit: 40,
    contentFile: 'themes/origen/content.html',

    metadata: {
        author: 'Cuestionarios de Filosofía',
        version: '1.0',
        lastUpdated: '2026-03-20',
        category: 'Filosofía Antigua',
        prerequisites: [],
        learningObjectives: [
            'Comprender la etimología y significado de la filosofía',
            'Identificar el contexto histórico del nacimiento de la filosofía',
            'Distinguir el pensamiento mítico del pensamiento racional (logos)',
            'Explicar el concepto de arché y sus tres sentidos',
            'Conocer las propuestas de los filósofos de la Escuela de Mileto',
            'Identificar las ideas de Pitágoras, Heráclito y Parménides'
        ]
    },

questions: [
  {
    id: 'origen_001',
    question: '¿Cuál es la etimología correcta de la palabra "filosofía"?',
    answers: [
      { text: 'De "filein" (amar) y "sophia" (sabiduría): amor por la sabiduría.', correct: true, explanation: 'Correcto. Filosofía significa literalmente "amor por la sabiduría". El filósofo no posee la verdad, sino que la busca.' },
      { text: 'De "filein" (amar) y "logos" (razón): amor por la razón.', correct: false, explanation: 'Logos significa razón, pero la raíz correcta es sophia (sabiduría).' },
      { text: 'De "physis" (naturaleza) y "sophia" (sabiduría): sabiduría natural.', correct: false, explanation: 'Physis refiere a la naturaleza, pero no forma parte de la etimología de filosofía.' },
      { text: 'De "philos" (amigo) y "mythos" (mito): amigo del mito.', correct: false, explanation: 'Mythos refiere al mito, no a la raíz que forma filosofía.' },
      { text: 'De "polis" (ciudad) y "sofia" (sabio): sabio de la ciudad.', correct: false, explanation: 'Polis refiere a la ciudad griega, pero no forma parte de la etimología de filosofía.' }
    ],
    hint: 'Philo = amor; sophia = sabiduría.',
    difficulty: 'basico',
    topic: 'Etimología'
  },
  {
    id: 'origen_002',
    question: '¿Por qué Pitágoras rechazó el título de "sabio" que le ofreció el general León de Fliunte?',
    answers: [
      { text: 'Porque consideraba que solo los dioses podían ser verdaderamente sabios y él era un simple buscador.', correct: true, explanation: 'Pitágoras se llamó a sí mismo "filósofo" (amante de la sabiduría), distinguiendo al que sabe del que desea saber.' },
      { text: 'Porque era matemático y prefería ese título.', correct: false, explanation: 'Aunque era matemático, la razón del rechazo fue filosófica, no profesional.' },
      { text: 'Porque no le gustaba hablar en público.', correct: false, explanation: 'La razón fue filosófica: la distinción entre poseer y amar la sabiduría.' },
      { text: 'Porque la sabiduría no tenía valor en su época.', correct: false, explanation: 'En la Grecia clásica, la sabiduría era muy valorada.' },
      { text: 'Porque León de Fliunte era su enemigo político.', correct: false, explanation: 'No existe esa relación; la anécdota versa sobre la distinción entre sabio y filósofo.' }
    ],
    hint: 'Solo los dioses son verdaderamente sabios.',
    difficulty: 'basico',
    topic: 'Pitágoras y el término'
  },
  {
    id: 'origen_003',
    question: '¿Cuál de los siguientes factores NO contribuyó al surgimiento de la filosofía en Mileto?',
    answers: [
      { text: 'Una casta sacerdotal poderosa que controlaba el pensamiento.', correct: true, explanation: 'Precisamente la AUSENCIA de un dogma religioso impuesto fue uno de los factores que permitió el pensamiento libre en Mileto.' },
      { text: 'La prosperidad económica y el ocio que permitía la reflexión.', correct: false, explanation: 'Este fue un factor clave: la riqueza comercial de Mileto daba tiempo libre para pensar.' },
      { text: 'La apertura cultural y el contacto con otros pueblos.', correct: false, explanation: 'El cosmopolitismo de Mileto fomentó el cuestionamiento de creencias.' },
      { text: 'La ausencia de dogmas religiosos rígidos.', correct: false, explanation: 'La religión griega politeísta no tenía dogmas impuestos, lo que favoreció el pensamiento libre.' },
      { text: 'El contacto comercial con Babilonia y Egipto.', correct: false, explanation: 'Ese intercambio cultural fue un factor que enriqueció el pensamiento griego.' }
    ],
    hint: '¿Qué faltaba en Mileto que en otras culturas sí existía?',
    difficulty: 'intermedio',
    topic: 'Contexto histórico'
  },
  {
    id: 'origen_004',
    question: 'El paso "del mito al logos" representa fundamentalmente…',
    answers: [
      { text: 'El abandono de las explicaciones sobrenaturales por explicaciones racionales y argumentadas.', correct: true, explanation: 'El logos es el pensamiento racional que reemplaza al mito como forma de explicar la realidad, usando causas naturales en lugar de dioses.' },
      { text: 'El reemplazo de la democracia por la tiranía en Grecia.', correct: false, explanation: 'Este cambio es político, no filosófico. El mito al logos es un giro en el pensamiento.' },
      { text: 'El abandono repentino de todas las creencias religiosas.', correct: false, explanation: 'Fue un proceso progresivo, no un abandono repentino. Fue una racionalización del mito.' },
      { text: 'El descubrimiento de la escritura y los libros.', correct: false, explanation: 'Aunque la escritura ayudó, el paso del mito al logos es un cambio en el tipo de explicación, no en el soporte.' },
      { text: 'El paso de la filosofía a la ciencia moderna.', correct: false, explanation: 'La ciencia moderna surgió siglos después; esto es el inicio de la filosofía en el siglo VI a.C.' }
    ],
    hint: 'Logos = razón vs. Mito = narración de dioses.',
    difficulty: 'basico',
    topic: 'Del mito al logos'
  },
  {
    id: 'origen_005',
    question: 'El término griego "arché" tiene un triple significado. ¿Cuál de estas opciones lo expresa correctamente?',
    answers: [
      { text: 'Origen, substrato y causa de todo lo real.', correct: true, explanation: 'Arché significa: (1) origen — de dónde surgen los seres; (2) substrato — de qué están hechos; (3) causa — qué produce cambio y movimiento.' },
      { text: 'Pasado, presente y futuro de los seres.', correct: false, explanation: 'Esas son categorías temporales, no el significado de arché.' },
      { text: 'Cuerpo, alma y espíritu en la visión griega.', correct: false, explanation: 'Esas son partes del ser humano en la antropología griega, no el significado de arché.' },
      { text: 'Mito, razón y dioses como fuentes de verdad.', correct: false, explanation: 'Esas son fuentes de explicación, no el significado de arché.' },
      { text: 'Número, fuego y agua como elementos básicos.', correct: false, explanation: 'Esos son propuestas concretas de arché, no su definición.' }
    ],
    hint: '¿De dónde vienen, de qué están hechas y qué mueve las cosas?',
    difficulty: 'basico',
    topic: 'El arché'
  },
  {
    id: 'origen_006',
    question: '¿Por qué se considera a Tales de Mileto el primer filósofo de la Historia?',
    answers: [
      { text: 'Porque fue el primero en proponer una explicación racional y natural del origen del universo, sin recurrir a dioses.', correct: true, explanation: 'Tales propuso que el arché es el agua, una explicación basada en un elemento natural observable, no en fuerzas sobrenaturales.' },
      { text: 'Porque escribió el primer libro de filosofía conocido.', correct: false, explanation: 'Tales no dejó escritos; su pensamiento fue transmitido por otros.' },
      { text: 'Porque fue el maestro de Sócrates y Platón.', correct: false, explanation: 'Tales es anterior a Sócrates por más de un siglo.' },
      { text: 'Porque descubrió el agua como elemento químico.', correct: false, explanation: 'Tales propuso el agua como principio filosófico, no como descubrimiento químico.' },
      { text: 'Porque fundó la primera escuela filosófica oficial.', correct: false, explanation: 'Aunque sus discípulos forman la Escuela de Mileto, la razón de su primacía es haber dado la primera explicación racional.' }
    ],
    hint: 'El primero en explicar sin dioses.',
    difficulty: 'basico',
    topic: 'Tales de Mileto'
  },
  {
    id: 'origen_007',
    question: '¿Qué diferencia fundamentalmente el arché de Anaximandro del de Tales?',
    answers: [
      { text: 'Tales eligió un elemento concreto (agua) y Anaximandro propuso uno abstracto (ápeiron, lo indefinido).', correct: true, explanation: 'Anaximandro argumentó que el arché no puede ser un elemento existente porque se oponen entre sí; propuso lo indefinido e ilimitado (ápeiron).' },
      { text: 'Tales eligió el fuego y Anaximandro eligió el agua.', correct: false, explanation: 'Es al revés: Tales propuso el agua; el fuego fue propuesta de Heráclito.' },
      { text: 'Tales usaba el logos y Anaximandro usaba el mito.', correct: false, explanation: 'Ambos son filósofos que usan el logos; solo difieren en qué proponen como arché.' },
      { text: 'Anaximandro rechazó la búsqueda del arché.', correct: false, explanation: 'Anaximandro buscó el arché; fue él quien usó formalmente el término por primera vez.' },
      { text: 'Tales propuso el ápeiron y Anaximandro el agua.', correct: false, explanation: 'Es exactamente al revés.' }
    ],
    hint: 'Concreto vs. abstracto como principio.',
    difficulty: 'intermedio',
    topic: 'Anaximandro'
  },
  {
    id: 'origen_008',
    question: 'Según Anaxímenes, ¿cómo se transforma el aire en otros elementos?',
    answers: [
      { text: 'Por rarefacción (hacerse menos denso) se convierte en fuego; por condensación (hacerse más denso) en viento, agua, tierra y piedras.', correct: true, explanation: 'Anaxímenes explicó que el aire se transforma en todos los elementos mediante procesos cuantitativos: más o menos densidad.' },
      { text: 'Por la intervención de los dioses que moldean el aire.', correct: false, explanation: 'Anaxímenes busca una explicación racional, no mítica o divina.' },
      { text: 'Mezclándose con el ápeiron de Anaximandro.', correct: false, explanation: 'El ápeiron es la propuesta de Anaximandro, no un ingrediente activo en la teoría de Anaxímenes.' },
      { text: 'Por la acción del calor solar sobre el aire.', correct: false, explanation: 'El mecanismo propuesto es rarefacción y condensación, no el calor solar específicamente.' },
      { text: 'Por la combinación del agua y el fuego.', correct: false, explanation: 'Anaxímenes parte del aire, no de la combinación de otros elementos.' }
    ],
    hint: 'Más denso → sólido. Menos denso → fuego.',
    difficulty: 'intermedio',
    topic: 'Anaxímenes'
  },
  {
    id: 'origen_009',
    question: 'Heráclito es conocido por afirmar que "nadie se baña dos veces en el mismo río". ¿Qué idea filosófica expresa esta frase?',
    answers: [
      { text: 'Que todo está en constante cambio o devenir; nada permanece idéntico a sí mismo.', correct: true, explanation: 'El devenir (flujo constante) es el núcleo de la filosofía de Heráclito. El rio cambia y la persona también cambia.' },
      { text: 'Que el agua (arché) nunca es la misma.', correct: false, explanation: 'Aunque usa el rio como imagen, no se trata de una afirmación sobre el agua como arché (eso es Tales).' },
      { text: 'Que es imposible conocer la realidad por los sentidos.', correct: false, explanation: 'Esa es más la posición de Parménides; Heráclito habla del cambio, no de los límites del conocimiento sensible.' },
      { text: 'Que el tiempo destruye todas las cosas.', correct: false, explanation: 'No es el tiempo como destructor, sino el cambio continuo como esencia de la realidad.' },
      { text: 'Que el ser humano no puede repetir sus experiencias.', correct: false, explanation: 'La frase apunta a la naturaleza cambiante de la realidad, no a la psicología humana.' }
    ],
    hint: 'El río cambia y tú cambias: todo fluye.',
    difficulty: 'intermedio',
    topic: 'Heráclito y el devenir'
  },
  {
    id: 'origen_010',
    question: 'Parménides afirmó "el ser es y el no ser no es". ¿Qué consecuencia tiene esta idea?',
    answers: [
      { text: 'Que el cambio y el movimiento son ilusiones de los sentidos; solo el ser inmutable y eterno es real.', correct: true, explanation: 'Para Parménides, si el ser es, no puede cambiar (dejaría de ser lo que es). El cambio es solo apariencia sensible, no verdad racional.' },
      { text: 'Que todos los seres vivos morirán inevitablemente.', correct: false, explanation: 'No es una afirmación biológica sino metafísica sobre la naturaleza del ser.' },
      { text: 'Que el ser humano no puede conocer nada con certeza.', correct: false, explanation: 'Parménides es más bien racionalista: la razón conoce el ser inmutable.' },
      { text: 'Que el agua es el único elemento real.', correct: false, explanation: 'Eso sería la posición de Tales; Parménides habla del ser en general, no de elementos.' },
      { text: 'Que la filosofía debe abandonar la razón y volver al mito.', correct: false, explanation: 'Parménides apela a la razón (logos) para conocer el ser; es lo opuesto al retorno al mito.' }
    ],
    hint: 'Si cambia, deja de ser lo que era. Por tanto, el cambio es ilusión.',
    difficulty: 'avanzado',
    topic: 'Parménides y el ser'
  }
],

    stats: {
        totalQuestions: 10,
        estimatedTime: 12,
        difficultyBreakdown: { basico: 5, intermedio: 4, avanzado: 1 },
        topicBreakdown: {
            'Etimología': 1,
            'Pitágoras y el término': 1,
            'Contexto histórico': 1,
            'Del mito al logos': 1,
            'El arché': 1,
            'Tales de Mileto': 1,
            'Anaximandro': 1,
            'Anaxímenes': 1,
            'Heráclito y el devenir': 1,
            'Parménides y el ser': 1
        }
    }
};

if (typeof window !== 'undefined') {
    window.ORIGEN_FILOSOFIA_THEME = ORIGEN_FILOSOFIA_THEME;
    console.log('✅ Tema Origen de la Filosofía cargado:', ORIGEN_FILOSOFIA_THEME.questions.length, 'preguntas');
}
