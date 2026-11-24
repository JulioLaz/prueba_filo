// ========================================
// 🌱 TEMA: ANTROPOLOGÍA DE ARISTÓTELES (EL HILEMORFISMO)
// ========================================
// 📚 Unidad II: Antropología Filosófica
// Cuestionario de 13 preguntas de 5 opciones; cada una se responde con el material
// (themes/antropologia_aristoteles/content.html).
// Versión 1.0 (2026-11-24): tema nuevo.

const themeLoadStart = performance.now();

const ANTROPOLOGIA_ARISTOTELES_THEME = {
    id: 'antropologia_aristoteles',
    title: 'Aristóteles: El Ser Humano como Unidad de Cuerpo y Alma',
    description: 'La antropología de Aristóteles: el hilemorfismo (materia y forma), el alma como forma del cuerpo, la escala de las almas, el animal racional y político, y su diferencia con Platón.',
    icon: '🌱',
    gradient: 'linear-gradient(135deg, #2f855a 0%, #805ad5 100%)',
    difficulty: 'intermedio',
    timeLimit: 50,
    contentFile: 'themes/antropologia_aristoteles/content.html',

    metadata: {
        author: 'Cuestionarios de Filosofía',
        version: '1.0',
        lastUpdated: '2026-11-24',
        category: 'Antropología Filosófica',
        prerequisites: ['dualismo_platonico'],
        learningObjectives: [
            'Comprender el hilemorfismo: materia y forma, potencia y acto',
            'Explicar el alma como forma y acto primero del cuerpo',
            'Distinguir las funciones del alma vegetativa, sensitiva y racional',
            'Explicar cómo conocemos a partir de los sentidos y la abstracción',
            'Relacionar las definiciones de animal racional y animal político',
            'Comparar la antropología de Aristóteles con el dualismo de Platón'
        ]
    },

questions: [
  {
    id: 'antropologia_001',
    question: "¿Qué sostiene la teoría hilemórfica de Aristóteles?",
    answers: [
      { text: "Que todo ser natural está compuesto por materia (hylé) y forma (morphé), dos principios inseparables.", correct: true,
        explanation: "Correcto. Hylé es materia y morphé es forma: de ahí el nombre «hilemorfismo»." },
      { text: "Que el mundo verdadero es el de las Ideas y las cosas son solo sombras o copias imperfectas.", correct: false,
        explanation: "Esa es la teoría de Platón; Aristóteles busca la forma dentro de las cosas mismas." },
      { text: "Que todo está hecho solo de materia y que la forma es una ilusión de los sentidos.", correct: false,
        explanation: "Para Aristóteles la forma es real: es lo que hace que la materia sea tal cosa." },
      { text: "Que el alma y el cuerpo son dos sustancias opuestas que se unen por accidente.", correct: false,
        explanation: "Eso describe el dualismo platónico, no el hilemorfismo." },
      { text: "Que las cosas cambian al azar, sin ningún principio que las organice ni les dé figura.", correct: false,
        explanation: "Para Aristóteles la forma organiza la materia; nada cambia sin un principio." }
    ],
    hint: "Separá la palabra en dos: hylé + morphé. ¿Qué significa cada parte?",
    difficulty: 'basico',
    topic: 'Hilemorfismo'
  },
  {
    id: 'antropologia_002',
    question: "Platón habla de una unión accidental entre cuerpo y alma. ¿Cómo la llama Aristóteles y qué significa?",
    answers: [
      { text: "Unión temporal: el alma vive un tiempo en el cuerpo y después se muda a otro distinto.", correct: false,
        explanation: "Aristóteles rechaza que el alma pase de un cuerpo a otro." },
      { text: "Unión conflictiva: el cuerpo es la cárcel del alma y la filosofía sirve para liberarla.", correct: false,
        explanation: "Esa es la visión de Platón (soma-sema), no la de Aristóteles." },
      { text: "Unión sustancial: cuerpo y alma forman una única sustancia, con dos principios inseparables.", correct: true,
        explanation: "Correcto. No son dos cosas juntas, sino una sola persona viva." },
      { text: "Unión mecánica: el alma maneja al cuerpo desde afuera, como un piloto maneja un avión.", correct: false,
        explanation: "Aristóteles usa justamente ese ejemplo para decir que no somos así." },
      { text: "Unión imposible: cuerpo y alma no tienen ninguna relación y funcionan por separado.", correct: false,
        explanation: "Para Aristóteles no hay cuerpo vivo sin alma ni alma sin cuerpo." }
    ],
    hint: "¿Somos un piloto dentro de un avión o una sola realidad?",
    difficulty: 'basico',
    topic: 'Unión sustancial'
  },
  {
    id: 'antropologia_003',
    question: "¿Qué significa que el alma sea «el acto primero de un cuerpo natural que tiene la vida en potencia»?",
    answers: [
      { text: "Que el alma existe antes que el cuerpo y espera en el Mundo de las Ideas su turno para encarnarse.", correct: false,
        explanation: "Aristóteles no acepta la preexistencia del alma." },
      { text: "Que el cuerpo tiene la capacidad de vivir, y el alma es lo que hace efectiva esa vida.", correct: true,
        explanation: "Correcto. El cuerpo es potencia (puede vivir); el alma es el acto que la realiza." },
      { text: "Que el alma es lo primero que se mueve en el cuerpo, como un motor que arranca la máquina.", correct: false,
        explanation: "El alma no es una pieza del cuerpo: es su forma, lo que lo hace vivir." },
      { text: "Que el cuerpo es lo verdaderamente valioso y el alma solo un adorno sin función real.", correct: false,
        explanation: "El alma es lo que organiza, anima y da vida al cuerpo." },
      { text: "Que el alma es una representación teatral: un acto en el que el cuerpo actúa un papel.", correct: false,
        explanation: "«Acto» aquí significa realización de una capacidad, no una obra de teatro." }
    ],
    hint: "Recordá la semilla y el árbol: ¿qué es la capacidad y qué es lo realizado?",
    difficulty: 'intermedio',
    topic: 'Potencia y acto'
  },
  {
    id: 'antropologia_004',
    question: "Aristóteles dice: «si el ojo fuera un animal, la vista sería su alma». ¿Qué quiere mostrar?",
    answers: [
      { text: "Que los ojos son el órgano más importante, porque por ellos entra el alma al cuerpo.", correct: false,
        explanation: "El ejemplo no habla de un órgano privilegiado, sino de la relación materia-forma." },
      { text: "Que los sentidos engañan y por eso el alma debe desconfiar de todo lo que ve.", correct: false,
        explanation: "Esa desconfianza hacia los sentidos es de Platón, no de este ejemplo." },
      { text: "Que el alma observa al cuerpo desde afuera, como un ojo que mira un objeto.", correct: false,
        explanation: "El alma no está afuera: es la capacidad del cuerpo vivo." },
      { text: "Que el alma es al cuerpo lo que la vista al ojo: su capacidad propia, inseparable de él.", correct: true,
        explanation: "Correcto. El ojo es la materia y la vista la forma; uno no tiene sentido sin el otro." },
      { text: "Que los animales tienen alma y los seres humanos, en cambio, solo tienen ojos y cuerpo.", correct: false,
        explanation: "Todos los seres vivos tienen alma; el ejemplo explica qué es el alma." }
    ],
    hint: "Un ojo que no ve, como el de una estatua, ¿sigue siendo un ojo de verdad?",
    difficulty: 'intermedio',
    topic: 'El alma como forma'
  },
  {
    id: 'antropologia_005',
    question: "¿Por qué, para Aristóteles, el alma humana es mortal y no puede transmigrar a otro cuerpo?",
    answers: [
      { text: "Porque es la forma de un cuerpo concreto: cuando el cuerpo muere, deja de existir, como la vista sin el ojo.", correct: true,
        explanation: "Correcto. Cada alma es la forma de su cuerpo, como una llave hecha para una sola cerradura." },
      { text: "Porque los dioses castigan a las almas que no fueron virtuosas destruyéndolas al morir.", correct: false,
        explanation: "Aristóteles no lo explica con castigos divinos, sino con la relación materia-forma." },
      { text: "Porque el alma es material, hecha de átomos como cualquier otra piedra o metal.", correct: false,
        explanation: "El alma no es materia: es la forma del cuerpo." },
      { text: "Porque el alma se olvida de todo al morir y por eso necesita volver a nacer.", correct: false,
        explanation: "El olvido y el volver a nacer son ideas platónicas que Aristóteles rechaza." },
      { text: "Porque el alma es inmortal, pero se queda para siempre encerrada en el mismo cadáver.", correct: false,
        explanation: "Para Aristóteles el alma no es inmortal y un cadáver ya no tiene alma." }
    ],
    hint: "¿Qué pasa con la vista cuando el ojo se destruye?",
    difficulty: 'intermedio',
    topic: 'Mortalidad del alma'
  },
  {
    id: 'antropologia_006',
    question: "Una semilla puede llegar a ser un árbol. ¿Cómo lo dice Aristóteles?",
    answers: [
      { text: "La semilla es materia sin forma y el árbol es forma sin materia.", correct: false,
        explanation: "Tanto la semilla como el árbol tienen materia y forma." },
      { text: "La semilla es un árbol en potencia, y el árbol crecido es esa capacidad en acto.", correct: true,
        explanation: "Correcto. Potencia es la capacidad de llegar a ser; acto, la capacidad realizada." },
      { text: "La semilla es una copia imperfecta de la Idea de Árbol que existe en otro mundo.", correct: false,
        explanation: "Esa es una explicación platónica, no la de potencia y acto." },
      { text: "La semilla y el árbol son exactamente lo mismo, solo que vistos con otros ojos.", correct: false,
        explanation: "No son lo mismo: uno es la capacidad y el otro la realización." },
      { text: "La semilla es acto y el árbol es potencia, porque el árbol todavía puede crecer más.", correct: false,
        explanation: "Es al revés: la semilla es potencia y el árbol es acto." }
    ],
    hint: "¿Cuál es la capacidad y cuál la capacidad ya realizada?",
    difficulty: 'basico',
    topic: 'Potencia y acto'
  },
  {
    id: 'antropologia_007',
    question: "Una lechuga, un perro y una persona tienen alma. ¿Qué la diferencia en cada uno?",
    answers: [
      { text: "La lechuga tiene alma racional, el perro sensitiva y la persona vegetativa.", correct: false,
        explanation: "Es al revés: la planta tiene la más básica y el ser humano la más alta." },
      { text: "Los tres tienen la misma alma, con exactamente las mismas funciones.", correct: false,
        explanation: "El alma de cada ser vivo cumple funciones distintas según su nivel." },
      { text: "La lechuga, vegetativa (nutrirse, crecer, reproducirse); el perro, además, sensitiva; la persona, además, racional.", correct: true,
        explanation: "Correcto. Es una escala: cada nivel superior incluye las funciones de los anteriores." },
      { text: "Solo la persona tiene alma; la lechuga y el perro son pura materia sin forma.", correct: false,
        explanation: "Para Aristóteles todo ser vivo tiene alma." },
      { text: "El perro tiene alma racional porque obedece órdenes y aprende trucos con su dueño.", correct: false,
        explanation: "Aprender trucos es percepción y deseo (sensitiva), no pensamiento abstracto ni logos." }
    ],
    hint: "Pensá en los escalones: nutrirse, percibir y moverse, pensar.",
    difficulty: 'basico',
    topic: 'Escala de las almas'
  },
  {
    id: 'antropologia_008',
    question: "¿Cuántas almas tiene el ser humano según Aristóteles?",
    answers: [
      { text: "Tres almas distintas que conviven y a veces se pelean entre sí: vegetativa, sensitiva y racional.", correct: false,
        explanation: "No son tres almas: es una sola con tres funciones." },
      { text: "Dos almas: una inmortal en la cabeza y otra mortal en el resto del cuerpo.", correct: false,
        explanation: "Esa división no es de Aristóteles." },
      { text: "Ninguna, porque el alma es solo un modo antiguo de hablar del cerebro.", correct: false,
        explanation: "Para Aristóteles el alma es real: es la forma del cuerpo vivo." },
      { text: "Una tripartita, con una parte racional, una irascible y una concupiscible.", correct: false,
        explanation: "Esa es la división de Platón." },
      { text: "Una sola alma racional, que también cumple las funciones vegetativas y sensitivas.", correct: true,
        explanation: "Correcto. Como en una escalera, el nivel superior incluye a los anteriores." }
    ],
    hint: "Una sola escalera con tres escalones, no tres escaleras.",
    difficulty: 'intermedio',
    topic: 'Alma racional'
  },
  {
    id: 'antropologia_009',
    question: "¿Cómo conocemos según Aristóteles, a diferencia de Platón?",
    answers: [
      { text: "Recordando las Ideas que el alma contempló antes de nacer, como enseñaba la reminiscencia.", correct: false,
        explanation: "Esa es la teoría de Platón; Aristóteles no cree en la reminiscencia." },
      { text: "Empezando por los sentidos; después el intelecto abstrae lo común de muchos casos concretos.", correct: true,
        explanation: "Correcto. La mente al nacer es como una tablilla de cera sin escribir." },
      { text: "Desconfiando por completo de los sentidos y pensando sin mirar nunca el mundo.", correct: false,
        explanation: "Para Aristóteles los sentidos son el punto de partida del conocimiento." },
      { text: "Recibiendo el conocimiento ya hecho de los dioses en sueños y revelaciones.", correct: false,
        explanation: "Aristóteles explica el conocimiento con los sentidos y la abstracción." },
      { text: "Memorizando definiciones sin necesidad de experiencia ni de observar nada.", correct: false,
        explanation: "Sin experiencia de los sentidos no hay nada que abstraer." }
    ],
    hint: "Al ver muchos perros distintos, ¿cómo llegamos a saber qué es un perro?",
    difficulty: 'intermedio',
    topic: 'Conocimiento y abstracción'
  },
  {
    id: 'antropologia_010',
    question: "Aristóteles define al ser humano como zoon lógon échon. ¿Qué lo distingue de los animales?",
    answers: [
      { text: "Que tiene voz para expresar placer y dolor, cosa que los animales no pueden hacer.", correct: false,
        explanation: "Los animales también tienen voz para expresar placer o dolor." },
      { text: "Que tiene más fuerza física y por eso domina a los demás seres vivos.", correct: false,
        explanation: "La definición no habla de fuerza, sino del logos." },
      { text: "Que tiene logos: palabra y razón para deliberar sobre lo justo y lo injusto, lo bueno y lo malo.", correct: true,
        explanation: "Correcto. Logos significa palabra, razón y capacidad de argumentar." },
      { text: "Que tiene alma, mientras que los animales son máquinas sin vida interior.", correct: false,
        explanation: "Los animales también tienen alma (sensitiva)." },
      { text: "Que vive en grupo, como las abejas y las hormigas, y por eso es racional.", correct: false,
        explanation: "Vivir en grupo no alcanza: lo propio es el logos." }
    ],
    hint: "¿Qué puede hacer una persona con las palabras que no puede hacer un perro con su aullido?",
    difficulty: 'intermedio',
    topic: 'Animal racional'
  },
  {
    id: 'antropologia_011',
    question: "¿Qué quiere decir Aristóteles al afirmar que quien vive fuera de la sociedad por naturaleza «es una bestia o un dios»?",
    answers: [
      { text: "Que los que viven solos son siempre personas peligrosas y deben ser castigados.", correct: false,
        explanation: "La frase no es una condena, sino una definición de lo humano." },
      { text: "Que en la Antigua Grecia los dioses vivían escondidos en el bosque, lejos de las ciudades.", correct: false,
        explanation: "La frase es filosófica, no mitológica." },
      { text: "Que la ciudad convierte a las personas en bestias y por eso conviene vivir aislado.", correct: false,
        explanation: "Es al revés: en la polis nos realizamos como humanos." },
      { text: "Que el ser humano es social por naturaleza: solo en la polis desarrolla su lenguaje, su moral y su fin.", correct: true,
        explanation: "Correcto. Somos zoon politikón: sin comunidad nos falta lo humano o seríamos dioses." },
      { text: "Que solo los reyes y los sabios pueden vivir en la ciudad; el resto debe vivir afuera.", correct: false,
        explanation: "Aristóteles habla de todos los seres humanos, no de un grupo privilegiado." }
    ],
    hint: "¿Qué le falta a una bestia y qué no necesita un dios?",
    difficulty: 'intermedio',
    topic: 'Animal político'
  },
  {
    id: 'antropologia_012',
    question: "Para Aristóteles todo tiende a un fin (teleología). ¿Cuál es el fin del ser humano y en qué consiste?",
    answers: [
      { text: "La felicidad (eudaimonía): realizar bien la actividad propia del ser humano, vivir conforme a la razón.", correct: true,
        explanation: "Correcto. No es acumular placeres ni riquezas, sino vivir bien usando la razón." },
      { text: "El placer: disfrutar todo lo posible de cada momento sin pensar en las consecuencias.", correct: false,
        explanation: "Aristóteles aclara que la felicidad no es acumular placeres." },
      { text: "La riqueza: tener suficiente dinero para no depender de nadie y comprar lo que se desee.", correct: false,
        explanation: "La riqueza es un medio, no el fin último." },
      { text: "La liberación del alma: escapar del cuerpo para volver al Mundo de las Ideas.", correct: false,
        explanation: "Esa es la meta platónica, no la aristotélica." },
      { text: "La fama: ser reconocido por muchos y que el nombre quede en la historia.", correct: false,
        explanation: "La fama depende de otros y no es el fin propio del ser humano." }
    ],
    hint: "Un buen músico es el que toca bien. ¿Qué hace bien una buena vida humana?",
    difficulty: 'basico',
    topic: 'Teleología y felicidad'
  },
  {
    id: 'antropologia_013',
    question: "¿Qué diferencia hay entre las virtudes éticas y las dianoéticas?",
    answers: [
      { text: "Las éticas son de la razón y se aprenden estudiando; las dianoéticas son del carácter y se forman por costumbre.", correct: false,
        explanation: "Es al revés: las éticas son del carácter y las dianoéticas, de la razón." },
      { text: "Las éticas son el término medio y se adquieren por hábito; las dianoéticas se adquieren por enseñanza, como la prudencia y la sabiduría.", correct: true,
        explanation: "Correcto. Ejemplo ético: la valentía, entre la cobardía y la temeridad." },
      { text: "No hay diferencia: son dos nombres griegos para las mismas virtudes del alma.", correct: false,
        explanation: "Son dos familias distintas, con distinto origen." },
      { text: "Las éticas son para los ciudadanos y las dianoéticas solo para los dioses.", correct: false,
        explanation: "Las dos son virtudes humanas." },
      { text: "Las éticas buscan el exceso y las dianoéticas el defecto, para compensarse entre sí.", correct: false,
        explanation: "La virtud ética es el término medio entre exceso y defecto." }
    ],
    hint: "Pensá en cómo se aprende a ser valiente y cómo se aprende geometría.",
    difficulty: 'avanzado',
    topic: 'Virtudes'
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
            'Hilemorfismo': 1,
            'Unión sustancial': 1,
            'Potencia y acto': 2,
            'El alma como forma': 1,
            'Mortalidad del alma': 1,
            'Escala de las almas': 1,
            'Alma racional': 1,
            'Conocimiento y abstracción': 1,
            'Animal racional': 1,
            'Animal político': 1,
            'Teleología y felicidad': 1,
            'Virtudes': 1
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
    const missingFields = requiredFields.filter(field => !ANTROPOLOGIA_ARISTOTELES_THEME[field]);
    if (missingFields.length > 0) {
        console.error(`❌ Faltan campos requeridos: ${missingFields.join(', ')}`);
        return false;
    }

    const invalidQuestions = ANTROPOLOGIA_ARISTOTELES_THEME.questions.filter((q, index) => {
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
    console.log('✅ Tema de la antropología de Aristóteles validado correctamente');
    return true;
}

/**
 * Obtiene estadísticas del tema
 * @returns {Object} Estadísticas detalladas
 */
function getThemeStats() {
    return {
        ...ANTROPOLOGIA_ARISTOTELES_THEME.stats,
        validationPassed: validateTheme(),
        loadTime: performance.now() - themeLoadStart
    };
}

// ========================================
// 🚀 INICIALIZACIÓN DEL TEMA
// ========================================

if (!validateTheme()) {
    console.error('❌ Error al cargar el tema de la antropología de Aristóteles');
    throw new Error('Tema de la antropología de Aristóteles inválido');
}

console.log(`✅ Tema de la antropología de Aristóteles cargado: ${ANTROPOLOGIA_ARISTOTELES_THEME.questions.length} preguntas`);

if (typeof window !== 'undefined') {
    window.ANTROPOLOGIA_ARISTOTELES_THEME = ANTROPOLOGIA_ARISTOTELES_THEME;
}
