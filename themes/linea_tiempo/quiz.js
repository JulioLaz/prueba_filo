// ========================================
// ⏳ TEMA: LÍNEA DEL TIEMPO: ¿PROGRESA LA HUMANIDAD?
// ========================================
// 📚 Unidad I: Introducción a la filosofía
// Cuestionario de 13 preguntas de 5 opciones; cada una se responde con el material
// (themes/linea_tiempo/content.html).
// Versión 1.0 (2026-11-26): 13 preguntas, tema nuevo (en parte adaptadas del Chronos Quiz del docente).

const themeLoadStart = performance.now();

const LINEA_TIEMPO_THEME = {
    id: 'linea_tiempo',
    title: 'Línea del tiempo: ¿progresa la humanidad?',
    description: 'Línea de tiempo, épocas, cinco ejes, acumulación y aceleración de la técnica, pensamiento, violencia, emancipación, simultaneidad, Argentina y la pregunta por el progreso.',
    icon: '⏳',
    gradient: 'linear-gradient(135deg, #805ad5 0%, #3182ce 100%)',
    difficulty: 'intermedio',
    timeLimit: 50,
    contentFile: 'themes/linea_tiempo/content.html',

    metadata: {
        author: 'Cuestionarios de Filosofía',
        version: '2.0',
        lastUpdated: '2026-11-24',
        category: 'Introducción',
        prerequisites: [],
        learningObjectives: [
            'Ubicar hechos en el tiempo: orden, duración y simultaneidad',
            'Comparar el avance de la humanidad en distintos ejes',
            'Reconocer la aceleración de la técnica y su relación con la violencia',
            'Ubicar la historia argentina en la historia mundial',
            'Argumentar sobre si progresa la humanidad con Kant, Hegel, Benjamin y Adorno'
        ]
    },

questions: [
  {
    id: 'lin_001',
    question: "¿Qué tres cosas permite ver una línea de tiempo?",
    answers: [
      { text: "Solo las fechas importantes.", correct: false,
        explanation: "Las fechas son el punto de partida, no lo único." },
      { text: "El orden, la duración y la simultaneidad de los hechos.", correct: true,
        explanation: "Correcto. Qué vino antes, cuánto tiempo pasó y qué ocurría al mismo tiempo." },
      { text: "Qué personajes eran buenos y cuáles malos.", correct: false,
        explanation: "La línea ordena hechos; los juicios los hacemos nosotros." },
      { text: "El futuro de la humanidad.", correct: false,
        explanation: "La línea mira el pasado." },
      { text: "Solo las guerras.", correct: false,
        explanation: "Hay cinco ejes, no solo la violencia." }
    ],
    hint: "Antes, durante, al mismo tiempo.",
    difficulty: 'basico',
    topic: 'Línea de tiempo'
  },
  {
    id: 'lin_002',
    question: "¿Qué cambio produjo la revolución neolítica, hace unos doce mil años?",
    answers: [
      { text: "La invención de la escritura.", correct: false,
        explanation: "La escritura llegó miles de años después, hacia el 3500 a.C." },
      { text: "La aparición de la imprenta.", correct: false,
        explanation: "La imprenta es de 1450." },
      { text: "La agricultura y la domesticación de animales, con aldeas y excedentes.", correct: true,
        explanation: "Correcto. Con ella aparecieron también la propiedad y las primeras desigualdades." },
      { text: "El fin de la Edad Media.", correct: false,
        explanation: "Eso fue hacia 1492." },
      { text: "La unificación de Egipto.", correct: false,
        explanation: "Fue hacia el 3000 a.C." }
    ],
    hint: "Cultivar la tierra.",
    difficulty: 'basico',
    topic: 'Prehistoria'
  },
  {
    id: 'lin_003',
    question: "¿Por qué se dice que los cortes entre épocas (476, 1492, 1789) son convenciones?",
    answers: [
      { text: "Porque son acuerdos para ordenar la historia, elegidos desde un punto de vista.", correct: true,
        explanation: "Correcto. Además, nacieron mirando la historia desde Europa." },
      { text: "Porque están escritos en la naturaleza.", correct: false,
        explanation: "No: los elegimos nosotros." },
      { text: "Porque nadie sabe qué pasó en esos años.", correct: false,
        explanation: "Sí se sabe: son hechos reales elegidos como cortes." },
      { text: "Porque los decidió Aristóteles.", correct: false,
        explanation: "No." },
      { text: "Porque todos los pueblos los viven igual.", correct: false,
        explanation: "No: para los pueblos originarios, 1492 fue el comienzo de la conquista." }
    ],
    hint: "Acuerdos para orientarnos.",
    difficulty: 'intermedio',
    topic: 'Épocas'
  },
  {
    id: 'lin_004',
    question: "¿Cuáles son los cinco ejes de la línea de tiempo?",
    answers: [
      { text: "Antigüedad, Edad Media, Modernidad, Contemporánea y Futuro.", correct: false,
        explanation: "Esas son épocas, no ejes." },
      { text: "Ética, lógica, estética, política y metafísica.", correct: false,
        explanation: "Son ramas de la filosofía." },
      { text: "Europa, Asia, África, América y Oceanía.", correct: false,
        explanation: "Son continentes." },
      { text: "Pensamiento, poder, técnica, violencia y emancipación.", correct: true,
        explanation: "Correcto. Cada hito pertenece a uno de ellos." },
      { text: "Reyes, papas, generales, científicos y artistas.", correct: false,
        explanation: "No." }
    ],
    hint: "Cinco miradas sobre la historia.",
    difficulty: 'basico',
    topic: 'Ejes'
  },
  {
    id: 'lin_005',
    question: "¿Por qué el progreso técnico es acumulativo?",
    answers: [
      { text: "Porque cada invento se apoya en los anteriores.", correct: true,
        explanation: "Correcto. Sin escritura no hay imprenta; sin imprenta no hay ciencia moderna." },
      { text: "Porque los inventos antiguos son los mejores.", correct: false,
        explanation: "Nadie volvería a escribir en tablillas de arcilla." },
      { text: "Porque avanza siempre al mismo ritmo.", correct: false,
        explanation: "No: el ritmo se acelera." },
      { text: "Porque cada generación empieza de cero.", correct: false,
        explanation: "Es al revés." },
      { text: "Porque solo inventan los filósofos.", correct: false,
        explanation: "No." }
    ],
    hint: "Uno sobre otro.",
    difficulty: 'basico',
    topic: 'Técnica'
  },
  {
    id: 'lin_006',
    question: "Si los doce mil años desde la agricultura fueran un día de 24 horas, ¿cuándo aparecería la web?",
    answers: [
      { text: "A las 6 de la mañana.", correct: false,
        explanation: "Demasiado temprano." },
      { text: "Al mediodía.", correct: false,
        explanation: "Al mediodía aparece la escritura." },
      { text: "A las 19.", correct: false,
        explanation: "A esa hora dialoga Sócrates." },
      { text: "A las 22:51.", correct: false,
        explanation: "Esa es la imprenta." },
      { text: "A las 23:56.", correct: true,
        explanation: "Correcto. Casi toda la técnica actual apareció en la última hora." }
    ],
    hint: "En los últimos minutos.",
    difficulty: 'intermedio',
    topic: 'Aceleración'
  },
  {
    id: 'lin_007',
    question: "¿Qué filósofo llamó «período axial» al momento en que surgieron casi a la vez los presocráticos, Buda y Confucio?",
    answers: [
      { text: "Hegel.", correct: false,
        explanation: "No." },
      { text: "Kant.", correct: false,
        explanation: "No." },
      { text: "Karl Jaspers.", correct: true,
        explanation: "Correcto. Fue hacia los siglos VI y V a.C." },
      { text: "Walter Benjamin.", correct: false,
        explanation: "Benjamin escribió sobre el ángel de la historia." },
      { text: "Adorno.", correct: false,
        explanation: "No." }
    ],
    hint: "Un filósofo alemán del siglo XX.",
    difficulty: 'avanzado',
    topic: 'Pensamiento'
  },
  {
    id: 'lin_008',
    question: "¿Por qué el pensamiento no progresa igual que la técnica?",
    answers: [
      { text: "Porque los filósofos antiguos estaban equivocados.", correct: false,
        explanation: "Si fuera así, no los seguiríamos leyendo." },
      { text: "Porque las grandes preguntas vuelven en cada época con respuestas nuevas.", correct: true,
        explanation: "Correcto. Seguimos leyendo a Sócrates y a Kant." },
      { text: "Porque la filosofía terminó con los griegos.", correct: false,
        explanation: "La filosofía sigue viva." },
      { text: "Porque el pensamiento avanza más rápido.", correct: false,
        explanation: "No es una cuestión de velocidad." },
      { text: "Porque las ideas no cambian nunca.", correct: false,
        explanation: "Cambian, pero no vuelven obsoletas a las anteriores." }
    ],
    hint: "Las preguntas vuelven.",
    difficulty: 'intermedio',
    topic: 'Pensamiento'
  },
  {
    id: 'lin_009',
    question: "¿Qué escribió Adorno sobre la historia universal?",
    answers: [
      { text: "Que lleva siempre de lo salvaje a lo humano.", correct: false,
        explanation: "Adorno dice que esa historia no existe." },
      { text: "Que lleva «de la honda a la bomba atómica».", correct: true,
        explanation: "Correcto: la capacidad de destruir creció con la técnica." },
      { text: "Que es el progreso de la libertad.", correct: false,
        explanation: "Esa es la idea de Hegel." },
      { text: "Que es un eterno retorno.", correct: false,
        explanation: "No." },
      { text: "Que terminó en 1989.", correct: false,
        explanation: "No." }
    ],
    hint: "Armas cada vez más poderosas.",
    difficulty: 'intermedio',
    topic: 'Violencia'
  },
  {
    id: 'lin_010',
    question: "Mientras Kant escribía sobre la libertad y la razón, ¿qué ocurría en Haití?",
    answers: [
      { text: "Se inventaba la imprenta.", correct: false,
        explanation: "La imprenta es de 1450." },
      { text: "Se firmaba la Magna Carta.", correct: false,
        explanation: "Fue en 1215." },
      { text: "Caía el Muro de Berlín.", correct: false,
        explanation: "Fue en 1989." },
      { text: "Los esclavos se rebelaban y fundaban la primera república negra (1791).", correct: true,
        explanation: "Correcto. Progreso y barbarie conviven en una misma época." },
      { text: "Se declaraba la independencia argentina.", correct: false,
        explanation: "Fue en 1816, en Tucumán." }
    ],
    hint: "Fines del siglo XVIII.",
    difficulty: 'intermedio',
    topic: 'Simultaneidad'
  },
  {
    id: 'lin_011',
    question: "¿Qué ocurrió en San Miguel de Tucumán el 9 de julio de 1816?",
    answers: [
      { text: "Se formó la Primera Junta.", correct: false,
        explanation: "Eso fue en Buenos Aires, en mayo de 1810." },
      { text: "Se aprobó el voto femenino.", correct: false,
        explanation: "Fue en 1947." },
      { text: "El Congreso declaró la independencia.", correct: true,
        explanation: "Correcto. Se declaró la independencia «de los reyes de España y de toda otra dominación extranjera»." },
      { text: "Comenzó la Reforma Universitaria.", correct: false,
        explanation: "Fue en Córdoba, en 1918." },
      { text: "Volvió la democracia.", correct: false,
        explanation: "Fue en 1983." }
    ],
    hint: "Independencia.",
    difficulty: 'basico',
    topic: 'Argentina'
  },
  {
    id: 'lin_012',
    question: "¿Qué imagen usa Walter Benjamin para pensar el progreso?",
    answers: [
      { text: "Un tren que avanza siempre hacia adelante.", correct: false,
        explanation: "Benjamin critica esa idea de progreso." },
      { text: "Una escalera que sube hacia la libertad.", correct: false,
        explanation: "Se parece más a la idea de Hegel." },
      { text: "Una caverna con sombras.", correct: false,
        explanation: "Esa es la alegoría de Platón." },
      { text: "Un barco que vuelve siempre al mismo puerto.", correct: false,
        explanation: "No." },
      { text: "El ángel de la historia, que ve ruinas mientras la tormenta del progreso lo empuja.", correct: true,
        explanation: "Correcto. Está inspirado en un cuadro de Paul Klee." }
    ],
    hint: "Un cuadro de Paul Klee.",
    difficulty: 'intermedio',
    topic: 'Benjamin'
  },
  {
    id: 'lin_013',
    question: "Después de recorrer los cinco ejes, ¿qué conclusión sobre el progreso está mejor fundada?",
    answers: [
      { text: "Todo progresó por igual desde la agricultura.", correct: false,
        explanation: "La violencia y la emancipación no siguieron a la técnica." },
      { text: "Nada mejoró nunca.", correct: false,
        explanation: "La técnica y muchos derechos sí avanzaron." },
      { text: "Depende del eje: la técnica progresa, pero el progreso moral y político no es automático.", correct: true,
        explanation: "Correcto. Hay que preguntar: ¿progreso en qué y para quiénes?" },
      { text: "El progreso es automático.", correct: false,
        explanation: "Benjamin y Adorno muestran que no." },
      { text: "La historia no se puede estudiar.", correct: false,
        explanation: "Sí se puede, y eso hicimos." }
    ],
    hint: "Progreso en qué y para quiénes.",
    difficulty: 'avanzado',
    topic: 'Progreso'
  }
],

    stats: {
        totalQuestions: 13,
        estimatedTime: 15,
        difficultyDistribution: {
            basico: 5,
            intermedio: 6,
            avanzado: 2
        },
        topicDistribution: {
            'Línea de tiempo': 1,
            'Prehistoria': 1,
            'Épocas': 1,
            'Ejes': 1,
            'Técnica': 1,
            'Aceleración': 1,
            'Pensamiento': 2,
            'Violencia': 1,
            'Simultaneidad': 1,
            'Argentina': 1,
            'Benjamin': 1,
            'Progreso': 1
        }
    }
};

// ========================================
// 🔧 VALIDACIÓN DEL TEMA
// ========================================

function validateTheme() {
    const requiredFields = ['id', 'title', 'questions'];
    const missingFields = requiredFields.filter(field => !LINEA_TIEMPO_THEME[field]);
    if (missingFields.length > 0) {
        console.error(`❌ Faltan campos requeridos: ${missingFields.join(', ')}`);
        return false;
    }
    const invalidQuestions = LINEA_TIEMPO_THEME.questions.filter((q, index) => {
        if (!q.id || !q.question || !q.answers || !q.hint) {
            console.error(`❌ Pregunta ${index + 1} inválida: faltan campos requeridos`);
            return true;
        }
        if (q.answers.length !== 5) {
            console.error(`❌ Pregunta ${index + 1}: debe tener exactamente 5 respuestas`);
            return true;
        }
        if (q.answers.filter(a => a.correct).length !== 1) {
            console.error(`❌ Pregunta ${index + 1}: debe tener exactamente 1 respuesta correcta`);
            return true;
        }
        return false;
    });
    if (invalidQuestions.length > 0) {
        console.error(`❌ ${invalidQuestions.length} preguntas inválidas encontradas`);
        return false;
    }
    console.log('✅ Tema de la línea del tiempo validado correctamente');
    return true;
}

function getThemeStats() {
    return {
        ...LINEA_TIEMPO_THEME.stats,
        validationPassed: validateTheme(),
        loadTime: performance.now() - themeLoadStart
    };
}

if (!validateTheme()) {
    console.error('❌ Error al cargar el tema de la línea del tiempo');
    throw new Error('Tema de la línea del tiempo inválido');
}

console.log(`✅ Tema de la línea del tiempo cargado: ${LINEA_TIEMPO_THEME.questions.length} preguntas`);

if (typeof window !== 'undefined') {
    window.LINEA_TIEMPO_THEME = LINEA_TIEMPO_THEME;
}
