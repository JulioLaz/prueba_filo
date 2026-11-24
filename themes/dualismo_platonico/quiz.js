// ========================================
// 🕊️ TEMA: EL DUALISMO PLATÓNICO (EL ALMA PRISIONERA DEL CUERPO)
// ========================================
// 📚 Unidad II: Antropología Filosófica
// Cuestionario de 13 preguntas de 5 opciones; cada una se responde con el material
// (themes/dualismo_platonico/content.html).
// Versión 1.0 (2026-11-24): tema nuevo.

const themeLoadStart = performance.now();

const DUALISMO_PLATONICO_THEME = {
    id: 'dualismo_platonico',
    title: 'El Dualismo Platónico: El Alma Prisionera del Cuerpo',
    description: 'El ser humano según Platón: un alma inmortal encerrada en un cuerpo. Los dos mundos, la anámnesis, las tres partes del alma y la filosofía como preparación para la muerte.',
    icon: '🕊️',
    gradient: 'linear-gradient(135deg, #2b6cb0 0%, #805ad5 100%)',
    difficulty: 'intermedio',
    timeLimit: 50,
    contentFile: 'themes/dualismo_platonico/content.html',

    metadata: {
        author: 'Cuestionarios de Filosofía',
        version: '1.0',
        lastUpdated: '2026-11-24',
        category: 'Antropología Filosófica',
        prerequisites: [],
        learningObjectives: [
            'Comprender la concepción dualista del ser humano en Platón',
            'Distinguir el Mundo Sensible del Mundo Inteligible',
            'Explicar la anámnesis y el mito del carro alado',
            'Analizar por qué el cuerpo es la cárcel del alma',
            'Relacionar las tres partes del alma con sus virtudes y con la justicia',
            'Interpretar la frase «filosofar es aprender a morir»'
        ]
    },

questions: [
  {
    id: 'dualismo_001',
    question: "¿Cómo define Platón la relación entre el alma y el cuerpo?",
    answers: [
      { text: "Como una máquina en la que cada parte encaja perfectamente y funciona siempre en armonía con las demás.", correct: false,
        explanation: "Para Platón cuerpo y alma no encajan: son realidades opuestas, y el cuerpo es un obstáculo para el alma." },
      { text: "Como un dualismo: el cuerpo es la cárcel o tumba accidental y temporal de un alma inmortal.", correct: true,
        explanation: "Correcto. El ser humano es una unión accidental y temporal de dos realidades opuestas, y el alma está encerrada en el cuerpo." },
      { text: "Como una unidad biológica que desaparece por completo al morir, sin dejar nada que sobreviva.", correct: false,
        explanation: "Para Platón el alma es inmortal: la muerte destruye el cuerpo, no el alma." },
      { text: "Como dos elementos idénticos que piensan, sienten y deciden siempre de la misma manera.", correct: false,
        explanation: "Cuerpo y alma son opuestos: uno es material y mortal; el otro, inmaterial, racional e inmortal." },
      { text: "Como un cuerpo que crea el alma con el paso del tiempo, a medida que la persona va creciendo.", correct: false,
        explanation: "El alma existía antes de nacer, en el Mundo de las Ideas; no la produce el cuerpo." }
    ],
    hint: "Recordá el ejemplo del videojuego: el avatar y el jugador real no son lo mismo.",
    difficulty: 'basico',
    topic: 'Dualismo'
  },
  {
    id: 'dualismo_002',
    question: "¿Qué es el Mundo de las Ideas o Mundo Inteligible?",
    answers: [
      { text: "Un lugar físico de la Tierra, lejano y secreto, al que solo pueden viajar los reyes y los sabios.", correct: false,
        explanation: "No es un lugar físico: es una dimensión invisible que se capta con la razón." },
      { text: "El conjunto de recuerdos y pensamientos que cada persona va guardando en el cerebro desde que nace.", correct: false,
        explanation: "Las Ideas no son pensamientos de nuestra cabeza: son realidades eternas que existen por sí mismas." },
      { text: "Una dimensión inmaterial de esencias perfectas y eternas (Justicia, Bien, Belleza) que solo capta la razón.", correct: true,
        explanation: "Correcto. Allí están las Ideas puras o Esencias, realidades perfectas, eternas e inmutables." },
      { text: "Un invento poético de Platón, sin relación con el conocimiento, pensado para entretener a sus alumnos.", correct: false,
        explanation: "Para Platón el Mundo de las Ideas es la verdadera realidad y el objeto del conocimiento verdadero." },
      { text: "El mundo que captamos con los cinco sentidos, donde todas las cosas cambian, envejecen y mueren.", correct: false,
        explanation: "Eso describe al Mundo Sensible, no al Mundo Inteligible." }
    ],
    hint: "Hay un mundo que se ve y se toca, y otro que solo se piensa. ¿Cuál es el de las Ideas?",
    difficulty: 'basico',
    topic: 'Dos mundos'
  },
  {
    id: 'dualismo_003',
    question: "Según la teoría de la anámnesis (reminiscencia), ¿qué es aprender?",
    answers: [
      { text: "Memorizar datos que no conocíamos antes, repitiéndolos muchas veces hasta que queden grabados.", correct: false,
        explanation: "Para Platón el conocimiento no entra desde afuera: no es acumular información nueva." },
      { text: "Copiar lo que nos muestran los sentidos, sin cuestionar nada de lo que vemos, oímos o tocamos.", correct: false,
        explanation: "Los sentidos muestran apariencias y engañan; no son el camino del verdadero saber." },
      { text: "Imaginar historias fantásticas con la creatividad, inventando ideas que antes no existían.", correct: false,
        explanation: "Las Ideas no se inventan: ya existen y el alma las contempló antes de nacer." },
      { text: "Recordar las verdades que el alma ya contempló en el Mundo de las Ideas antes de caer al cuerpo.", correct: true,
        explanation: "Correcto. Aprender es recordar: el alma olvidó al encarnarse y, al aprender, recupera lo que ya sabía." },
      { text: "Obedecer al profesor sin pensar, porque solo él tiene en su cabeza el conocimiento verdadero.", correct: false,
        explanation: "El profesor ayuda a recordar con preguntas, como Sócrates en el Menón, pero el saber ya está en el alma del alumno." }
    ],
    hint: "Cuando algo te «hace clic», ¿lo estás descubriendo o lo estás recordando?",
    difficulty: 'basico',
    topic: 'Anámnesis'
  },
  {
    id: 'dualismo_004',
    question: "Según la estructura tripartita del alma, ¿qué parte debe gobernar sobre las demás?",
    answers: [
      { text: "La parte concupiscible, ubicada en el vientre, porque los deseos nos indican lo que necesitamos.", correct: false,
        explanation: "Si gobiernan los apetitos (el caballo negro), la persona cae en el caos y el descontrol." },
      { text: "La parte irascible, ubicada en el pecho, porque el coraje es más fuerte que la razón.", correct: false,
        explanation: "La parte irascible (el caballo blanco) apoya a la razón, pero no la reemplaza." },
      { text: "Ninguna: las tres partes deben hacer lo que quieran, sin que una controle a las otras dos.", correct: false,
        explanation: "Sin gobierno de la razón no hay armonía interior, es decir, no hay justicia." },
      { text: "La parte racional, ubicada en la cabeza, que guía con sabiduría a las otras dos.", correct: true,
        explanation: "Correcto. La razón es el auriga que conduce el carro, apoyada por la voluntad, y entre ambas educan a los apetitos." },
      { text: "El cuerpo, porque es el que siente hambre, sed y frío, y sabe mejor qué hay que hacer.", correct: false,
        explanation: "El cuerpo no es una parte del alma: es su cárcel, y sus necesidades distraen al alma." }
    ],
    hint: "En el carro alado, ¿quién lleva las riendas?",
    difficulty: 'basico',
    topic: 'Tres partes del alma'
  },
  {
    id: 'dualismo_005',
    question: "¿Qué significa la frase de Platón «Filosofar es aprender a morir»?",
    answers: [
      { text: "Entrenar la mente para desapegarse de las pasiones del cuerpo y purificar el alma mientras vivimos.", correct: true,
        explanation: "Correcto. Es la purificación (kátharsis): preparar el alma desde hoy para liberarse del dominio del cuerpo." },
      { text: "Estudiar las enfermedades mortales que había en la antigua Grecia para poder curarlas.", correct: false,
        explanation: "La frase no habla de medicina, sino de la preparación del alma." },
      { text: "Buscar la forma de terminar con la vida física lo antes posible para liberar el alma.", correct: false,
        explanation: "Platón aclara que no significa desear la muerte, sino prepararse en vida." },
      { text: "Olvidarse de estudiar y dedicarse a descansar, porque al final todos vamos a morir igual.", correct: false,
        explanation: "Al contrario: filosofar exige esfuerzo, pensamiento abstracto y desapego de lo material." },
      { text: "Tener miedo a la muerte todo el tiempo, para vivir con cuidado y no correr ningún riesgo.", correct: false,
        explanation: "Para Platón la muerte no es una tragedia: es la liberación del alma." }
    ],
    hint: "El filósofo «ensaya» la muerte en vida. ¿Qué entrena?",
    difficulty: 'intermedio',
    topic: 'Aprender a morir'
  },
  {
    id: 'dualismo_006',
    question: "Según Platón, ¿por qué una manzana es roja o una acción es justa?",
    answers: [
      { text: "Porque así lo decidimos entre todos, por un acuerdo que cambia según la época y el lugar.", correct: false,
        explanation: "Para Platón las Ideas no dependen de acuerdos humanos: son eternas e inmutables." },
      { text: "Porque participan de las Ideas: la manzana, de la Idea de Rojo; la acción, de la Idea de Justicia.", correct: true,
        explanation: "Correcto. Las cosas sensibles son copias imperfectas que participan de las Ideas, sus modelos perfectos." },
      { text: "Porque cada persona lo ve a su manera, y lo que para uno es rojo o justo para otro no lo es.", correct: false,
        explanation: "Eso es apoyarse en la opinión (doxa); Platón busca lo que las cosas son en sí." },
      { text: "Porque las cosas sensibles son perfectas y las Ideas son solo nombres que les ponemos.", correct: false,
        explanation: "Es al revés: las cosas son imperfectas y las Ideas son los modelos perfectos." },
      { text: "Porque los sentidos nunca se equivocan y nos muestran la esencia verdadera de las cosas.", correct: false,
        explanation: "Los sentidos muestran apariencias y pueden engañar." }
    ],
    hint: "Pensá en la foto de Instagram: copia de un paisaje, que a su vez es copia de la Belleza en sí.",
    difficulty: 'intermedio',
    topic: 'Participación'
  },
  {
    id: 'dualismo_007',
    question: "¿Qué cuenta el mito del carro alado sobre el origen del alma?",
    answers: [
      { text: "Que el alma nace junto con el cuerpo y se va formando con las experiencias de cada día.", correct: false,
        explanation: "El alma existía antes del cuerpo, contemplando las Ideas." },
      { text: "Que el alma viajaba por el cielo, cayó por el descontrol del caballo negro, se encarnó y olvidó lo que sabía.", correct: true,
        explanation: "Correcto. Al perder sus alas, el alma cae al Mundo Sensible, se encarna y el choque con la materia le hace olvidar." },
      { text: "Que el alma fue creada por los dioses para castigar al cuerpo por sus muchos errores.", correct: false,
        explanation: "El mito no habla de un castigo al cuerpo, sino de la caída del alma por un descontrol." },
      { text: "Que el alma eligió bajar a la Tierra para disfrutar de los placeres que no había en el cielo.", correct: false,
        explanation: "La caída no es una elección para disfrutar: es consecuencia del descontrol del caballo rebelde." },
      { text: "Que el auriga y los dos caballos son tres personas distintas que viajan juntas al Mundo de las Ideas.", correct: false,
        explanation: "Son una imagen de las tres partes de una misma alma: razón, voluntad y apetitos." }
    ],
    hint: "Contempla, cae, se encarna... ¿y qué le pasa con lo que sabía?",
    difficulty: 'intermedio',
    topic: 'Carro alado'
  },
  {
    id: 'dualismo_008',
    question: "¿Qué quiere decir Platón con el juego de palabras griego «soma - sema»?",
    answers: [
      { text: "Que el cuerpo (soma) y la señal (sema) son dos formas distintas de comunicarse con los demás.", correct: false,
        explanation: "En este juego de palabras sema se entiende como tumba o cárcel." },
      { text: "Que el alma (soma) es la cárcel del cuerpo (sema) y no lo deja moverse con libertad.", correct: false,
        explanation: "Es al revés: soma es el cuerpo, y el cuerpo es la cárcel del alma." },
      { text: "Que el cuerpo (soma) es la tumba o cárcel (sema) del alma, que vive encerrada en él.", correct: true,
        explanation: "Correcto. Mientras vivimos, el alma está encerrada en el cuerpo como un prisionero en su celda." },
      { text: "Que el cuerpo (soma) es un templo sagrado donde el alma descansa feliz y sin molestias.", correct: false,
        explanation: "Para Platón el cuerpo no es un lugar de descanso: engaña, esclaviza y distrae al alma." },
      { text: "Que el cuerpo (soma) y el alma (sema) son la misma cosa con dos nombres diferentes.", correct: false,
        explanation: "El dualismo afirma justamente que son dos realidades opuestas." }
    ],
    hint: "Un prisionero en su celda: ¿quién es el prisionero y cuál es la celda?",
    difficulty: 'basico',
    topic: 'Soma-sema'
  },
  {
    id: 'dualismo_009',
    question: "Un remo recto parece doblado bajo el agua. ¿Qué conclusión saca Platón de ejemplos como este?",
    answers: [
      { text: "Que los sentidos muestran apariencias y engañan; el conocimiento verdadero (episteme) se alcanza con la razón.", correct: true,
        explanation: "Correcto. Lo que se apoya en los sentidos es opinión (doxa); la ciencia (episteme) conoce las Ideas con la razón." },
      { text: "Que el agua cambia de verdad la forma de los objetos, y por eso no podemos confiar en el agua.", correct: false,
        explanation: "El remo no cambia: el error está en lo que muestran los sentidos." },
      { text: "Que hay que mirar con más atención, porque los sentidos bien usados nunca se equivocan.", correct: false,
        explanation: "Para Platón los sentidos, por más que se usen bien, solo alcanzan apariencias." },
      { text: "Que la opinión (doxa) es más segura que la ciencia (episteme), porque se apoya en lo que vemos.", correct: false,
        explanation: "Es al revés: la doxa puede engañarnos, la episteme es conocimiento verdadero." },
      { text: "Que nada se puede conocer, ni con los sentidos ni con la razón, y es mejor no intentarlo.", correct: false,
        explanation: "Platón no renuncia al conocimiento: lo busca en las Ideas, por medio de la razón." }
    ],
    hint: "Distinguí doxa (opinión) y episteme (ciencia). ¿Cuál se apoya en los sentidos?",
    difficulty: 'intermedio',
    topic: 'Engaño de los sentidos'
  },
  {
    id: 'dualismo_010',
    question: "Comer comida chatarra a medianoche da placer instantáneo. ¿Por qué Platón diría que ceder siempre a esos antojos nos resta libertad?",
    answers: [
      { text: "Porque la comida chatarra estaba prohibida por las leyes de Atenas y se castigaba con la cárcel.", correct: false,
        explanation: "Platón no habla de una ley: la cárcel de la que habla es el cuerpo." },
      { text: "Porque el placer es siempre malo y hay que evitar cualquier cosa que el cuerpo disfrute.", correct: false,
        explanation: "El problema no es sentir placer, sino vivir solo para complacer al cuerpo." },
      { text: "Porque quien vive para complacer al cuerpo se vuelve esclavo de sus impulsos y se distrae de la verdad.", correct: true,
        explanation: "Correcto. Es la esclavitud de las necesidades y la distracción del alma: el cuerpo encadena la mente a lo inmediato." },
      { text: "Porque así gastamos dinero, y solo es libre quien tiene mucho dinero ahorrado.", correct: false,
        explanation: "Para Platón buscar dinero, fama o poder también es parte de la esclavitud del cuerpo." },
      { text: "Porque los antojos vienen de la parte racional del alma, que siempre se equivoca.", correct: false,
        explanation: "Los antojos vienen de la parte concupiscible; la racional es la que debe gobernarlos." }
    ],
    hint: "Quien obedece siempre a sus impulsos, ¿es dueño de sí o esclavo?",
    difficulty: 'intermedio',
    topic: 'Esclavitud del cuerpo'
  },
  {
    id: 'dualismo_011',
    question: "¿Qué virtud corresponde a cada parte del alma según Platón?",
    answers: [
      { text: "Racional: templanza; irascible: sabiduría; concupiscible: fortaleza.", correct: false,
        explanation: "Las virtudes están mezcladas: la templanza modera los apetitos, no la razón." },
      { text: "Racional: fortaleza; irascible: templanza; concupiscible: sabiduría.", correct: false,
        explanation: "La sabiduría es propia de la razón, no de los apetitos." },
      { text: "Las tres partes tienen la misma virtud: la obediencia a las leyes de la ciudad.", correct: false,
        explanation: "Cada parte del alma tiene su propia virtud." },
      { text: "Racional: valentía; irascible: generosidad; concupiscible: amistad.", correct: false,
        explanation: "Esas no son las virtudes que Platón asigna a las partes del alma." },
      { text: "Racional: sabiduría o prudencia; irascible: fortaleza o valor; concupiscible: templanza o autocontrol.", correct: true,
        explanation: "Correcto. Cada parte bien orientada desarrolla su virtud." }
    ],
    hint: "Pensá qué necesita cada parte: la cabeza, saber; el pecho, coraje; el vientre, moderación.",
    difficulty: 'intermedio',
    topic: 'Virtudes del alma'
  },
  {
    id: 'dualismo_012',
    question: "Para Platón, ¿qué es la justicia en el interior de una persona?",
    answers: [
      { text: "Cumplir las leyes de la ciudad, aunque por dentro los apetitos dominen todas las decisiones.", correct: false,
        explanation: "La justicia no es solo una regla social: empieza dentro de cada uno." },
      { text: "Una armonía interior: la razón gobierna, la voluntad la apoya y entre ambas educan a los apetitos.", correct: true,
        explanation: "Correcto. Cuando cada parte del alma cumple su función, la persona es justa y equilibrada." },
      { text: "Darle a cada parte del alma lo que pida en cada momento, para que ninguna se sienta mal.", correct: false,
        explanation: "Si el caballo negro toma el control, la persona cae en el caos y el descontrol." },
      { text: "Que la parte irascible domine a la razón, porque la indignación es más fuerte que el pensamiento.", correct: false,
        explanation: "La parte irascible apoya a la razón; no debe gobernarla." },
      { text: "Que el cuerpo mande sobre el alma, porque es lo que vemos y tocamos todos los días.", correct: false,
        explanation: "Para Platón el cuerpo es la cárcel del alma: no puede ser quien gobierne." }
    ],
    hint: "¿Qué pasa con el carro cuando el auriga lleva bien las riendas de los dos caballos?",
    difficulty: 'intermedio',
    topic: 'Justicia interior'
  },
  {
    id: 'dualismo_013',
    question: "En el diálogo Menón, un esclavo que nunca estudió geometría resuelve un problema respondiendo preguntas de Sócrates. ¿Qué quiere mostrar Platón?",
    answers: [
      { text: "Que el esclavo había estudiado geometría a escondidas y lo estaba ocultando.", correct: false,
        explanation: "El ejemplo supone justamente que el joven nunca estudió geometría." },
      { text: "Que Sócrates le dio las respuestas, porque el maestro es el único que sabe.", correct: false,
        explanation: "Sócrates solo pregunta: el joven encuentra la respuesta por sí mismo." },
      { text: "Que la geometría es fácil y cualquiera la entiende sin ningún esfuerzo.", correct: false,
        explanation: "El punto no es la dificultad de la geometría, sino de dónde viene el saber." },
      { text: "Que el saber estaba dormido en su alma: aprender es recordar (anámnesis).", correct: true,
        explanation: "Correcto. Las preguntas ayudan al alma a recordar lo que contempló en el Mundo de las Ideas." },
      { text: "Que los sentidos son la única fuente del conocimiento matemático.", correct: false,
        explanation: "Para Platón el conocimiento verdadero no viene de los sentidos, sino del recuerdo de las Ideas." }
    ],
    hint: "Si nadie le enseñó, ¿de dónde salió ese saber?",
    difficulty: 'avanzado',
    topic: 'Anámnesis'
  }
],

    stats: {
        totalQuestions: 13,
        estimatedTime: 15,
        difficultyDistribution: {
            basico: 5,
            intermedio: 7,
            avanzado: 1
        },
        topicDistribution: {
            'Dualismo': 1,
            'Dos mundos': 1,
            'Anámnesis': 2,
            'Tres partes del alma': 1,
            'Aprender a morir': 1,
            'Participación': 1,
            'Carro alado': 1,
            'Soma-sema': 1,
            'Engaño de los sentidos': 1,
            'Esclavitud del cuerpo': 1,
            'Virtudes del alma': 1,
            'Justicia interior': 1
        }
    }
};

// ========================================
// 🔧 VALIDACIÓN DEL TEMA
// ========================================

/**
 * Valida la estructura del tema
 * @returns {boolean} True si el tema es válido
 */
function validateTheme() {
    const requiredFields = ['id', 'title', 'questions'];
    const missingFields = requiredFields.filter(field => !DUALISMO_PLATONICO_THEME[field]);
    if (missingFields.length > 0) {
        console.error(`❌ Faltan campos requeridos: ${missingFields.join(', ')}`);
        return false;
    }

    const invalidQuestions = DUALISMO_PLATONICO_THEME.questions.filter((q, index) => {
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
    console.log('✅ Tema del dualismo platónico validado correctamente');
    return true;
}

/**
 * Obtiene estadísticas del tema
 * @returns {Object} Estadísticas detalladas
 */
function getThemeStats() {
    return {
        ...DUALISMO_PLATONICO_THEME.stats,
        validationPassed: validateTheme(),
        loadTime: performance.now() - themeLoadStart
    };
}

// ========================================
// 🚀 INICIALIZACIÓN DEL TEMA
// ========================================

if (!validateTheme()) {
    console.error('❌ Error al cargar el tema del dualismo platónico');
    throw new Error('Tema del dualismo platónico inválido');
}

console.log(`✅ Tema del dualismo platónico cargado: ${DUALISMO_PLATONICO_THEME.questions.length} preguntas`);

if (typeof window !== 'undefined') {
    window.DUALISMO_PLATONICO_THEME = DUALISMO_PLATONICO_THEME;
}
