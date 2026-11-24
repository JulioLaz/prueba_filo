// ========================================
// 📜 TEMA: ORIGEN DE LA FILOSOFÍA: DEL MITO AL LOGOS
// ========================================
// 📚 Unidad I: ¿Qué es la Filosofía?
// Cuestionario de 13 preguntas de 5 opciones; cada una se responde con el material
// (themes/origen/content.html).
// Versión 2.0 (2026-11-24): 13 preguntas alineadas con el material v2.0; variable ORIGEN_THEME (antes ORIGEN_FILOSOFIA_THEME, que el motor no encontraba).

const themeLoadStart = performance.now();

const ORIGEN_THEME = {
    id: 'origen',
    title: 'Origen de la Filosofía: Del Mito al Logos',
    description: 'Etimología, asombro, el nacimiento de la filosofía en Mileto, el paso del mito al logos y la búsqueda del arché.',
    icon: '📜',
    gradient: 'linear-gradient(135deg, #1e90ff 0%, #00bfff 100%)',
    difficulty: 'intermedio',
    timeLimit: 50,
    contentFile: 'themes/origen/content.html',

    metadata: {
        author: 'Cuestionarios de Filosofía',
        version: '2.0',
        lastUpdated: '2026-11-24',
        category: 'Filosofía Antigua',
        prerequisites: [],
        learningObjectives: [
            'Explicar la etimología de la palabra filosofía y el papel del asombro',
            'Reconocer las condiciones que favorecieron el nacimiento de la filosofía en Mileto',
            'Diferenciar la explicación mítica de la racional (mito y logos)',
            'Definir el arché y comparar las respuestas de los primeros filósofos'
        ]
    },

questions: [
  {
    id: 'origen_001',
    question: "¿Qué actitud está en el origen de la filosofía, según el material?",
    answers: [
      { text: "El miedo a los dioses, que obligaba a buscar explicaciones para calmar su enojo.", correct: false,
        explanation: "El miedo llevaba al mito, no a la filosofía." },
      { text: "El asombro: una curiosidad radical que lleva a cuestionar las certezas de todos los días.", correct: true,
        explanation: "Correcto. Quien se asombra no se conforma con lo que «siempre se dijo» y busca razones." },
      { text: "La obediencia a la tradición, que conserva lo que dijeron los antepasados.", correct: false,
        explanation: "La filosofía cuestiona la tradición en lugar de repetirla." },
      { text: "El aburrimiento de los ricos, que no tenían nada mejor que hacer en su tiempo libre.", correct: false,
        explanation: "El ocio ayudó, pero la actitud filosófica es el asombro." },
      { text: "La necesidad de ganar dinero enseñando a otros a hablar bien en público.", correct: false,
        explanation: "Eso describe más bien a los sofistas, que llegaron después." }
    ],
    hint: "¿Qué sentimos cuando algo nos parece extraño y nos preguntamos «¿por qué?»?",
    difficulty: 'basico',
    topic: 'Asombro'
  },
  {
    id: 'origen_002',
    question: "¿Cuál es la etimología de la palabra «filosofía»?",
    answers: [
      { text: "Del griego philo (amor) y sophía (sabiduría): amor por la sabiduría.", correct: true,
        explanation: "Correcto. Por eso el filósofo busca la sabiduría; no la posee." },
      { text: "Del latín filum (hilo) y sophia (saber): el hilo que une todos los saberes.", correct: false,
        explanation: "La palabra es griega y philo significa amor." },
      { text: "Del griego philo (verdad) y sophía (dioses): la verdad que revelan los dioses.", correct: false,
        explanation: "Philo es amor y sophía es sabiduría." },
      { text: "Del griego phobos (miedo) y sophía (sabiduría): el miedo a no saber.", correct: false,
        explanation: "No viene de phobos sino de philo." },
      { text: "Del griego philo (amor) y logos (razón): el amor a la razón.", correct: false,
        explanation: "La segunda parte es sophía (sabiduría), no logos." }
    ],
    hint: "Philo + sophía.",
    difficulty: 'basico',
    topic: 'Etimología'
  },
  {
    id: 'origen_003',
    question: "¿Por qué Pitágoras rechazó que León de Fliunte lo llamara sabio?",
    answers: [
      { text: "Porque le parecía un título demasiado humilde para alguien de su fama.", correct: false,
        explanation: "Fue al revés: le parecía demasiado para un ser humano." },
      { text: "Porque consideraba que solo los dioses son sabios; él amaba la sabiduría y aspiraba a ella.", correct: true,
        explanation: "Correcto. Así nació la palabra «filósofo»." },
      { text: "Porque en Grecia estaba prohibido llamar sabio a un matemático.", correct: false,
        explanation: "No existía tal prohibición." },
      { text: "Porque prefería que lo llamaran rey o general, como a León.", correct: false,
        explanation: "Pitágoras eligió «filósofo», no un título de poder." },
      { text: "Porque no le interesaba el conocimiento sino solo la gloria de los juegos.", correct: false,
        explanation: "En su comparación, los filósofos van a los juegos a comprender, no por gloria." }
    ],
    hint: "¿Quiénes son los únicos verdaderamente sabios para Pitágoras?",
    difficulty: 'basico',
    topic: 'Pitágoras'
  },
  {
    id: 'origen_004',
    question: "Pitágoras comparó la vida con los juegos de Olimpia. ¿Quiénes son los filósofos en esa comparación?",
    answers: [
      { text: "Los atletas que compiten para ganar la corona de laurel.", correct: false,
        explanation: "Ellos buscan gloria." },
      { text: "Los comerciantes que van a vender sus productos al público.", correct: false,
        explanation: "Ellos buscan ganancias." },
      { text: "Los que van solo a mirar y comprender lo que pasa.", correct: true,
        explanation: "Correcto. El filósofo busca comprender, no gloria ni ganancias." },
      { text: "Los jueces que deciden quién gana cada prueba.", correct: false,
        explanation: "La comparación de Pitágoras no menciona a los jueces." },
      { text: "Los que se quedan en su casa porque no les interesan los juegos.", correct: false,
        explanation: "Los filósofos sí van: para observar y comprender." }
    ],
    hint: "Unos van por gloria, otros por ganancias... ¿y los demás?",
    difficulty: 'intermedio',
    topic: 'Pitágoras'
  },
  {
    id: 'origen_005',
    question: "¿Por qué la filosofía nació en Mileto y no en otro lugar?",
    answers: [
      { text: "Porque era una ciudad aislada, sin contacto con otros pueblos.", correct: false,
        explanation: "Al contrario: estaba en contacto con Babilonia y Egipto." },
      { text: "Porque tenía una casta sacerdotal poderosa que obligaba a estudiar.", correct: false,
        explanation: "No había casta sacerdotal que impusiera dogmas; eso ayudó." },
      { text: "Porque era pobre y la gente necesitaba pensar para sobrevivir.", correct: false,
        explanation: "Era próspera: el comercio dio ocio para pensar." },
      { text: "Por su prosperidad comercial, que dio ocio; su apertura cultural y una religión sin dogmas.", correct: true,
        explanation: "Correcto. Comercio, ocio, mezcla de culturas y libertad de pensamiento." },
      { text: "Porque allí vivía Sócrates, que fundó la filosofía.", correct: false,
        explanation: "Sócrates vivió después, en Atenas." }
    ],
    hint: "Pensá en el puerto, el tiempo libre y la religión griega.",
    difficulty: 'intermedio',
    topic: 'Contexto histórico'
  },
  {
    id: 'origen_006',
    question: "¿Cuál de estos factores NO contribuyó al nacimiento de la filosofía en Mileto?",
    answers: [
      { text: "El comercio con Babilonia y Egipto.", correct: false,
        explanation: "Sí contribuyó: puso en contacto distintas culturas." },
      { text: "El ocio, el tiempo libre de una parte de la población.", correct: false,
        explanation: "Sí contribuyó: daba tiempo para pensar." },
      { text: "La mezcla de culturas y creencias de una ciudad cosmopolita.", correct: false,
        explanation: "Sí contribuyó: invitaba a comparar y dudar." },
      { text: "La costumbre del debate público entre ciudadanos.", correct: false,
        explanation: "Sí contribuyó: había que dar razones." },
      { text: "Una casta sacerdotal poderosa que imponía dogmas.", correct: true,
        explanation: "Correcto. No existía: su ausencia es la que favoreció la filosofía." }
    ],
    hint: "Buscá lo que habría frenado la libertad de pensar.",
    difficulty: 'intermedio',
    topic: 'Contexto histórico'
  },
  {
    id: 'origen_007',
    question: "¿Qué es un mito y cómo explicaba la naturaleza?",
    answers: [
      { text: "Un relato imaginativo con dioses y seres sobrenaturales, que se creía sin discutir.", correct: true,
        explanation: "Correcto. Por ejemplo, el trueno como enojo de Zeus." },
      { text: "Una teoría científica comprobada con experimentos en un laboratorio.", correct: false,
        explanation: "El mito no usa experimentos." },
      { text: "Un argumento racional que cualquiera podía criticar en la plaza.", correct: false,
        explanation: "Eso describe al logos." },
      { text: "Una mentira que los sacerdotes inventaban para engañar al pueblo.", correct: false,
        explanation: "El mito daba sentido y unía a la comunidad; no era simplemente una mentira." },
      { text: "Un cálculo matemático sobre los astros y las estaciones.", correct: false,
        explanation: "El mito narra; no calcula." }
    ],
    hint: "Pensá en Homero y Hesíodo.",
    difficulty: 'basico',
    topic: 'Mito'
  },
  {
    id: 'origen_008',
    question: "El paso «del mito al logos» representa fundamentalmente...",
    answers: [
      { text: "El reemplazo de unos dioses por otros más modernos y poderosos.", correct: false,
        explanation: "No se cambian dioses: se buscan causas naturales." },
      { text: "El paso de las explicaciones sobrenaturales a las explicaciones racionales.", correct: true,
        explanation: "Correcto. Del relato sobre dioses a las causas naturales y los argumentos." },
      { text: "El abandono total de toda pregunta sobre el origen del mundo.", correct: false,
        explanation: "Las preguntas siguen; cambia la forma de responderlas." },
      { text: "La prohibición de los poemas de Homero y Hesíodo en Mileto.", correct: false,
        explanation: "No hubo prohibición: fue un proceso gradual." },
      { text: "La vuelta a las tradiciones antiguas frente a las ideas nuevas.", correct: false,
        explanation: "Es al revés: es una ruptura con la tradición." }
    ],
    hint: "Mito: relato con dioses. Logos: razón.",
    difficulty: 'basico',
    topic: 'Del mito al logos'
  },
  {
    id: 'origen_009',
    question: "¿Cómo fue el paso del mito al logos?",
    answers: [
      { text: "Un cambio de un día para el otro, decretado por los gobernantes de Mileto.", correct: false,
        explanation: "No fue un decreto ni un salto repentino." },
      { text: "Un proceso gradual: una racionalización del mito que buscó causas naturales y las discutió en público.", correct: true,
        explanation: "Correcto. Los primeros filósofos todavía usaban imágenes, pero buscaban razones." },
      { text: "Una guerra entre sacerdotes y filósofos que ganaron los filósofos.", correct: false,
        explanation: "No hubo tal guerra en Grecia." },
      { text: "Un descubrimiento casual de Tales mientras miraba el mar.", correct: false,
        explanation: "Fue un proceso histórico con varias condiciones." },
      { text: "Un regreso al mito después de fracasar con la razón.", correct: false,
        explanation: "Es el camino inverso al que describe el material." }
    ],
    hint: "¿Fue un salto o un camino?",
    difficulty: 'intermedio',
    topic: 'Del mito al logos'
  },
  {
    id: 'origen_010',
    question: "El término griego «arché» tiene un triple sentido. ¿Cuál es?",
    answers: [
      { text: "Comienzo, medio y final de cada historia.", correct: false,
        explanation: "No se refiere a la estructura de un relato." },
      { text: "Dios, alma y mundo.", correct: false,
        explanation: "El arché es un principio natural, no esos tres temas." },
      { text: "Origen, sustrato y causa de todas las cosas.", correct: true,
        explanation: "Correcto. De qué surge todo, de qué está hecho y qué produce el cambio." },
      { text: "Agua, aire y fuego, los tres elementos.", correct: false,
        explanation: "Esos son posibles respuestas sobre el arché, no su significado." },
      { text: "Pasado, presente y futuro del universo.", correct: false,
        explanation: "El arché no es una división del tiempo." }
    ],
    hint: "De dónde surge, de qué está hecho y qué lo mueve.",
    difficulty: 'basico',
    topic: 'Arché'
  },
  {
    id: 'origen_011',
    question: "¿Por qué se considera a Tales de Mileto el primer filósofo y por qué eligió el agua?",
    answers: [
      { text: "Porque escribió los primeros mitos, y eligió el agua porque era sagrada.", correct: false,
        explanation: "Tales no escribió mitos: dio una respuesta racional." },
      { text: "Porque fue el primero en responder racionalmente qué es el arché; eligió el agua porque es esencial para la vida y cambia de estado.", correct: true,
        explanation: "Correcto. Es un arché concreto y observable." },
      { text: "Porque inventó la palabra filosofía, y eligió el agua porque vivía junto al mar.", correct: false,
        explanation: "La palabra se atribuye a Pitágoras." },
      { text: "Porque fue maestro de Sócrates, y eligió el agua por consejo de los dioses.", correct: false,
        explanation: "Tales vivió mucho antes que Sócrates." },
      { text: "Porque descubrió el ápeiron, y eligió el agua porque es indeterminada.", correct: false,
        explanation: "El ápeiron es de Anaximandro." }
    ],
    hint: "Primera respuesta racional; agua: vida y cambio de estado.",
    difficulty: 'basico',
    topic: 'Tales'
  },
  {
    id: 'origen_012',
    question: "¿Qué diferencia el arché de Anaximandro del de Tales y Anaxímenes?",
    answers: [
      { text: "Anaximandro propuso un arché abstracto, el ápeiron (lo indeterminado); Tales y Anaxímenes, uno concreto (agua y aire).", correct: true,
        explanation: "Correcto. Para Anaximandro los elementos se oponen y se anulan, así que el principio debe ser indeterminado." },
      { text: "Anaximandro eligió el fuego; Tales y Anaxímenes eligieron el número.", correct: false,
        explanation: "El fuego es de Heráclito y el número de Pitágoras." },
      { text: "No hay diferencia: los tres eligieron el agua.", correct: false,
        explanation: "Solo Tales eligió el agua." },
      { text: "Anaximandro eligió un dios; los otros dos eligieron elementos.", correct: false,
        explanation: "El ápeiron no es un dios, sino un principio indeterminado." },
      { text: "Anaximandro eligió el aire, que se condensa; los otros, el agua.", correct: false,
        explanation: "El aire es de Anaxímenes." }
    ],
    hint: "Concreto o abstracto.",
    difficulty: 'intermedio',
    topic: 'Escuela de Mileto'
  },
  {
    id: 'origen_013',
    question: "¿Qué separa a Heráclito de Parménides?",
    answers: [
      { text: "Heráclito dice que nada cambia; Parménides, que todo cambia.", correct: false,
        explanation: "Es al revés." },
      { text: "Heráclito destaca el devenir, todo cambia; Parménides afirma que el ser no cambia y el cambio es ilusión de los sentidos.", correct: true,
        explanation: "Correcto. «Nadie se baña dos veces en el mismo río» frente a «el ser es y el no ser no es»." },
      { text: "Los dos dicen que el arché es el número.", correct: false,
        explanation: "El número es el arché de Pitágoras." },
      { text: "Heráclito confía solo en la razón y Parménides solo en los sentidos.", correct: false,
        explanation: "Parménides es el que confía solo en la razón." },
      { text: "Ninguno de los dos se preguntó por la naturaleza.", correct: false,
        explanation: "Los dos son presocráticos y piensan la naturaleza." }
    ],
    hint: "¿Quién dijo que nadie se baña dos veces en el mismo río?",
    difficulty: 'avanzado',
    topic: 'Heráclito y Parménides'
  }
],

    stats: {
        totalQuestions: 13,
        estimatedTime: 15,
        difficultyDistribution: {
            basico: 7,
            intermedio: 5,
            avanzado: 1
        },
        topicDistribution: {
            'Asombro': 1,
            'Etimología': 1,
            'Pitágoras': 2,
            'Contexto histórico': 2,
            'Mito': 1,
            'Del mito al logos': 2,
            'Arché': 1,
            'Tales': 1,
            'Escuela de Mileto': 1,
            'Heráclito y Parménides': 1
        }
    }
};

// ========================================
// 🔧 VALIDACIÓN DEL TEMA
// ========================================

function validateTheme() {
    const requiredFields = ['id', 'title', 'questions'];
    const missingFields = requiredFields.filter(field => !ORIGEN_THEME[field]);
    if (missingFields.length > 0) {
        console.error(`❌ Faltan campos requeridos: ${missingFields.join(', ')}`);
        return false;
    }
    const invalidQuestions = ORIGEN_THEME.questions.filter((q, index) => {
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
    console.log('✅ Tema del origen de la filosofía validado correctamente');
    return true;
}

function getThemeStats() {
    return {
        ...ORIGEN_THEME.stats,
        validationPassed: validateTheme(),
        loadTime: performance.now() - themeLoadStart
    };
}

if (!validateTheme()) {
    console.error('❌ Error al cargar el tema del origen de la filosofía');
    throw new Error('Tema del origen de la filosofía inválido');
}

console.log(`✅ Tema del origen de la filosofía cargado: ${ORIGEN_THEME.questions.length} preguntas`);

if (typeof window !== 'undefined') {
    window.ORIGEN_THEME = ORIGEN_THEME;
}
