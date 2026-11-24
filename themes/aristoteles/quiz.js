// ========================================
// 📐 TEMA: ARISTÓTELES: LA LÓGICA Y LA SUSTANCIA
// ========================================
// 📚 Unidad I: ¿Qué es la Filosofía?
// Cuestionario de 13 preguntas de 5 opciones; cada una se responde con el material
// (themes/aristoteles/content.html).
// Versión 1.0 (2026-11-24): tema nuevo en el cuestionario, alineado con el material v2.0.

const themeLoadStart = performance.now();

const ARISTOTELES_THEME = {
    id: 'aristoteles',
    title: 'Aristóteles: La Lógica y la Sustancia',
    description: 'Los grados del saber, las ciencias, la lógica y el silogismo, la sustancia, materia y forma, acto y potencia y las cuatro causas.',
    icon: '📐',
    gradient: 'linear-gradient(135deg, #607D8B 0%, #9E9E9E 100%)',
    difficulty: 'intermedio',
    timeLimit: 50,
    contentFile: 'themes/aristoteles/content.html',

    metadata: {
        author: 'Cuestionarios de Filosofía',
        version: '2.0',
        lastUpdated: '2026-11-24',
        category: 'Filosofía Antigua',
        prerequisites: [],
        learningObjectives: [
            'Explicar la crítica de Aristóteles a las Ideas de Platón',
            'Describir los grados del saber y la clasificación de las ciencias',
            'Analizar un silogismo y distinguir validez de verdad',
            'Distinguir sustancia y accidentes, materia y forma, acto y potencia',
            'Aplicar las cuatro causas a un objeto'
        ]
    },

questions: [
  {
    id: 'aristoteles_001',
    question: "¿Por qué llaman a Aristóteles «el Estagirita»?",
    answers: [
      { text: "Porque fundó la escuela de Estagira.", correct: false,
        explanation: "Fundó el Liceo, en Atenas." },
      { text: "Porque nació en Estagira, en el 384 a. C.", correct: true,
        explanation: "Correcto. Después estudió veinte años en la Academia de Platón." },
      { text: "Porque era el maestro de los estagiritas, un grupo de sabios.", correct: false,
        explanation: "No existía ese grupo." },
      { text: "Porque escribió un libro llamado Estagira.", correct: false,
        explanation: "No es el nombre de una obra." },
      { text: "Porque vivió siempre en una isla llamada Estagira.", correct: false,
        explanation: "Vivió muchos años en Atenas." }
    ],
    hint: "Su ciudad natal.",
    difficulty: 'basico',
    topic: 'Vida'
  },
  {
    id: 'aristoteles_002',
    question: "¿Qué significa «soy amigo de Platón, pero más amigo de la verdad»?",
    answers: [
      { text: "Que Aristóteles odiaba a Platón.", correct: false,
        explanation: "Lo admiraba; por eso dice «amigo»." },
      { text: "Que respetaba a su maestro, pero lo criticaba cuando creía que se equivocaba: no aceptó las Ideas separadas.", correct: true,
        explanation: "Correcto. Para Aristóteles la forma está en las cosas mismas." },
      { text: "Que copiaba todo lo que decía Platón.", correct: false,
        explanation: "Al contrario: lo discutió." },
      { text: "Que la verdad depende de quién sea tu amigo.", correct: false,
        explanation: "Eso sería relativismo." },
      { text: "Que Platón era su único amigo.", correct: false,
        explanation: "La frase habla de la verdad, no de la amistad." }
    ],
    hint: "Respetar no es repetir.",
    difficulty: 'intermedio',
    topic: 'Crítica a Platón'
  },
  {
    id: 'aristoteles_003',
    question: "Una cocinera sabe por experiencia que un té calma la tos; un médico sabe por qué. Según Aristóteles, ¿qué tiene el médico?",
    answers: [
      { text: "Sensación.", correct: false,
        explanation: "Es el grado más bajo." },
      { text: "Solo experiencia.", correct: false,
        explanation: "La experiencia sabe que algo funciona, no por qué." },
      { text: "Ciencia: conoce el porqué, las causas.", correct: true,
        explanation: "Correcto. La ciencia es el grado más alto del saber." },
      { text: "Opinión.", correct: false,
        explanation: "No es un grado del saber en esta escala." },
      { text: "Nada: solo la cocinera sabe.", correct: false,
        explanation: "Los dos saben algo, pero en grados distintos." }
    ],
    hint: "Conocer el porqué.",
    difficulty: 'intermedio',
    topic: 'Grados del saber'
  },
  {
    id: 'aristoteles_004',
    question: "¿A qué tipo de ciencias pertenecen la ética y la política?",
    answers: [
      { text: "Teóricas: buscan saber por saber.", correct: false,
        explanation: "Las teóricas son la matemática, la física y la metafísica." },
      { text: "Productivas: enseñan a fabricar.", correct: false,
        explanation: "Las productivas son la retórica y la poética." },
      { text: "Prácticas: guían la acción y tratan de lo posible.", correct: true,
        explanation: "Correcto. Se ocupan de cómo actuar y convivir." },
      { text: "Ninguna: no son ciencias.", correct: false,
        explanation: "Para Aristóteles sí lo son." },
      { text: "Biológicas: estudian a los animales.", correct: false,
        explanation: "La biología es parte de la física, una ciencia teórica." }
    ],
    hint: "Guían la acción.",
    difficulty: 'basico',
    topic: 'Clasificación de las ciencias'
  },
  {
    id: 'aristoteles_005',
    question: "¿Qué método usaba Aristóteles al estudiar a los animales?",
    answers: [
      { text: "Imaginarlos sin verlos, a partir de las Ideas.", correct: false,
        explanation: "Él partía de la observación." },
      { text: "Copiar lo que decían los mitos.", correct: false,
        explanation: "No se basaba en mitos." },
      { text: "Observar muchos casos, compararlos y clasificarlos en géneros y especies.", correct: true,
        explanation: "Correcto. Por eso es el padre de la biología." },
      { text: "Preguntarle al oráculo de Delfos.", correct: false,
        explanation: "Nada que ver con su método." },
      { text: "Usar un microscopio.", correct: false,
        explanation: "No existía en su época." }
    ],
    hint: "Observar y clasificar.",
    difficulty: 'basico',
    topic: 'Biología'
  },
  {
    id: 'aristoteles_006',
    question: "¿Por qué la lógica de Aristóteles se llama Órganon?",
    answers: [
      { text: "Porque estudia los órganos del cuerpo.", correct: false,
        explanation: "Órganon significa «instrumento»." },
      { text: "Porque es el instrumento que todas las ciencias usan para razonar bien.", correct: true,
        explanation: "Correcto. Estudia la forma de los razonamientos." },
      { text: "Porque la escribió un alumno llamado Órganon.", correct: false,
        explanation: "Es el nombre de sus obras de lógica." },
      { text: "Porque es la ciencia más alta, por encima de la metafísica.", correct: false,
        explanation: "No es una ciencia más: es una herramienta." },
      { text: "Porque solo sirve para los debates políticos.", correct: false,
        explanation: "Sirve para todas las ciencias." }
    ],
    hint: "Instrumento.",
    difficulty: 'basico',
    topic: 'Lógica'
  },
  {
    id: 'aristoteles_007',
    question: "«El hombre es mortal» es...",
    answers: [
      { text: "un concepto.", correct: false,
        explanation: "Un concepto sería solo «hombre» o «mortal»." },
      { text: "un juicio: une dos conceptos afirmando algo, y puede ser verdadero o falso.", correct: true,
        explanation: "Correcto. Es la segunda operación del pensamiento." },
      { text: "un razonamiento completo.", correct: false,
        explanation: "Le faltan las premisas y la conclusión." },
      { text: "un axioma que no se puede entender.", correct: false,
        explanation: "Es un juicio común." },
      { text: "una categoría.", correct: false,
        explanation: "Las categorías son maneras de decir el ser." }
    ],
    hint: "Afirmar o negar.",
    difficulty: 'intermedio',
    topic: 'Concepto, juicio y razonamiento'
  },
  {
    id: 'aristoteles_008',
    question: "En el silogismo «Todos los perros son mamíferos; Toby es un perro; luego, Toby es mamífero», ¿cuál es el término medio?",
    answers: [
      { text: "Toby.", correct: false,
        explanation: "Es el sujeto de la conclusión." },
      { text: "mamífero.", correct: false,
        explanation: "Es el predicado de la conclusión." },
      { text: "perro.", correct: true,
        explanation: "Correcto. Está en las dos premisas y no aparece en la conclusión." },
      { text: "luego.", correct: false,
        explanation: "Es una palabra que indica la conclusión, no un término." },
      { text: "todos.", correct: false,
        explanation: "Es un cuantificador, no un término." }
    ],
    hint: "El puente entre las premisas.",
    difficulty: 'avanzado',
    topic: 'Silogismo'
  },
  {
    id: 'aristoteles_009',
    question: "«Todos los peces vuelan; el tiburón es un pez; luego, el tiburón vuela». ¿Qué se puede decir?",
    answers: [
      { text: "Es válido por su forma, pero una premisa es falsa: por eso la conclusión no es segura.", correct: true,
        explanation: "Correcto. Validez y verdad son cosas distintas." },
      { text: "Es inválido porque los tiburones no vuelan.", correct: false,
        explanation: "La validez depende de la forma, no de si la conclusión es verdadera." },
      { text: "Es válido y verdadero.", correct: false,
        explanation: "La primera premisa es falsa." },
      { text: "No es un silogismo porque habla de peces.", correct: false,
        explanation: "Tiene dos premisas y una conclusión." },
      { text: "Demuestra que los tiburones vuelan.", correct: false,
        explanation: "Con una premisa falsa no se demuestra nada." }
    ],
    hint: "Válido no es verdadero.",
    difficulty: 'avanzado',
    topic: 'Validez y verdad'
  },
  {
    id: 'aristoteles_010',
    question: "¿Por qué la ciencia necesita primeros principios o axiomas?",
    answers: [
      { text: "Porque así nadie puede discutirla.", correct: false,
        explanation: "No es para evitar discusiones." },
      { text: "Porque no se puede demostrar todo: hay que partir de verdades evidentes, como el principio de no contradicción.", correct: true,
        explanation: "Correcto. Si todo necesitara demostración, nunca terminaríamos." },
      { text: "Porque los inventa cada científico como quiere.", correct: false,
        explanation: "Son evidentes, no arbitrarios." },
      { text: "Porque la ciencia no demuestra nada.", correct: false,
        explanation: "La ciencia demuestra a partir de ellos." },
      { text: "Porque los dioses los dictaron.", correct: false,
        explanation: "Aristóteles no los funda en los dioses." }
    ],
    hint: "No todo se demuestra.",
    difficulty: 'intermedio',
    topic: 'Primeros principios'
  },
  {
    id: 'aristoteles_011',
    question: "«Sócrates es pálido» y después «Sócrates está bronceado». ¿Qué cambió según Aristóteles?",
    answers: [
      { text: "La sustancia: ya no es Sócrates.", correct: false,
        explanation: "Sigue siendo Sócrates." },
      { text: "Un accidente (la cualidad), mientras la sustancia permanece.", correct: true,
        explanation: "Correcto. Los accidentes existen en la sustancia y pueden cambiar." },
      { text: "Nada: el cambio es una ilusión.", correct: false,
        explanation: "Eso diría Parménides." },
      { text: "La Idea de Sócrates en el mundo inteligible.", correct: false,
        explanation: "Aristóteles no acepta Ideas separadas." },
      { text: "La causa final de Sócrates.", correct: false,
        explanation: "Cambió solo su color." }
    ],
    hint: "Lo que existe en otro.",
    difficulty: 'intermedio',
    topic: 'Sustancia y accidentes'
  },
  {
    id: 'aristoteles_012',
    question: "¿Cómo responde Aristóteles a Parménides, que negaba el cambio?",
    answers: [
      { text: "Le da la razón: nada cambia.", correct: false,
        explanation: "Aristóteles explica el cambio." },
      { text: "Con acto y potencia: cambiar es pasar de lo que se puede ser a lo que se es, como la semilla al árbol.", correct: true,
        explanation: "Correcto. Lo nuevo no sale de la nada: ya estaba en potencia." },
      { text: "Diciendo que todo sale de la nada.", correct: false,
        explanation: "Eso es justamente lo que Aristóteles evita." },
      { text: "Con la teoría de las Ideas separadas.", correct: false,
        explanation: "Eso es de Platón." },
      { text: "Con el principio de no contradicción, que prohíbe el cambio.", correct: false,
        explanation: "El principio no prohíbe el cambio." }
    ],
    hint: "Lo que es y lo que puede ser.",
    difficulty: 'avanzado',
    topic: 'Acto y potencia'
  },
  {
    id: 'aristoteles_013',
    question: "Un celular: plástico y metal, diseño, fábrica, comunicarse. ¿Qué causa es «comunicarse»?",
    answers: [
      { text: "Material.", correct: false,
        explanation: "La material es el plástico y el metal." },
      { text: "Formal.", correct: false,
        explanation: "La formal es el diseño." },
      { text: "Eficiente.", correct: false,
        explanation: "La eficiente es la fábrica." },
      { text: "Final: para qué existe.", correct: true,
        explanation: "Correcto. La causa final responde al «para qué»." },
      { text: "Ninguna: los celulares no tienen causas.", correct: false,
        explanation: "Toda cosa tiene cuatro causas." }
    ],
    hint: "Para qué.",
    difficulty: 'basico',
    topic: 'Cuatro causas'
  }
],

    stats: {
        totalQuestions: 13,
        estimatedTime: 15,
        difficultyDistribution: {
            basico: 5,
            intermedio: 5,
            avanzado: 3
        },
        topicDistribution: {
            'Vida': 1,
            'Crítica a Platón': 1,
            'Grados del saber': 1,
            'Clasificación de las ciencias': 1,
            'Biología': 1,
            'Lógica': 1,
            'Concepto, juicio y razonamiento': 1,
            'Silogismo': 1,
            'Validez y verdad': 1,
            'Primeros principios': 1,
            'Sustancia y accidentes': 1,
            'Acto y potencia': 1,
            'Cuatro causas': 1
        }
    }
};

// ========================================
// 🔧 VALIDACIÓN DEL TEMA
// ========================================

function validateTheme() {
    const requiredFields = ['id', 'title', 'questions'];
    const missingFields = requiredFields.filter(field => !ARISTOTELES_THEME[field]);
    if (missingFields.length > 0) {
        console.error(`❌ Faltan campos requeridos: ${missingFields.join(', ')}`);
        return false;
    }
    const invalidQuestions = ARISTOTELES_THEME.questions.filter((q, index) => {
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
    console.log('✅ Tema de Aristóteles validado correctamente');
    return true;
}

function getThemeStats() {
    return {
        ...ARISTOTELES_THEME.stats,
        validationPassed: validateTheme(),
        loadTime: performance.now() - themeLoadStart
    };
}

if (!validateTheme()) {
    console.error('❌ Error al cargar el tema de Aristóteles');
    throw new Error('Tema de Aristóteles inválido');
}

console.log(`✅ Tema de Aristóteles cargado: ${ARISTOTELES_THEME.questions.length} preguntas`);

if (typeof window !== 'undefined') {
    window.ARISTOTELES_THEME = ARISTOTELES_THEME;
}
