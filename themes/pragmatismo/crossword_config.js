// themes/pragmatismo/crossword_config.js
// Crucigrama — Pragmatismo. Central UTILIDAD y una palabra por letra, todas del material,
// con sección y frase para las pistas escalonadas.
// Versión 2.0 (2026-11-25): rehecho (antes METODO, con MILL y OPTIMISMO, que no son del tema).
console.log('📋 Iniciando carga de configuración del crucigrama...');
const configStartTime = performance.now();

try {
  window.CROSSWORD_CONFIG = {
    title: "Pragmatismo: lo verdadero es lo práctico",

    // Palabra central vertical (se normaliza automáticamente)
    central: "UTILIDAD",

    // Palabras horizontales que cruzan con la central
    // crossIndex indica qué letra de la central usar (0-7 para UTILIDAD)
    entries: [
      {
        answer: "DUDA",
        clue: "Estado incómodo que, según Peirce, nos impulsa a investigar",
        seccion: "🤔 De la duda a la creencia",
        frase: "La _____ es un estado incómodo que nos impulsa a investigar.",
        crossIndex: 0 // Cruce en la 'U' de UTILIDAD
      },
      {
        answer: "HABITO",
        clue: "Para Peirce, una creencia es un ___ de acción",
        seccion: "🤔 De la duda a la creencia",
        frase: "La creencia, en cambio, es un estado tranquilo: un _____ de acción que nos dice cómo actuar.",
        crossIndex: 1 // Cruce en la 'T' de UTILIDAD
      },
      {
        answer: "PEIRCE",
        clue: "Lógico y matemático considerado el padre del pragmatismo",
        seccion: "🧮 Peirce, el padre del pragmatismo",
        frase: "Charles Sanders _____ (1839–1914) fue un lógico, matemático y científico.",
        crossIndex: 2 // Cruce en la 'I' de UTILIDAD
      },
      {
        answer: "FALIBILISMO",
        clue: "Actitud de saber que cualquier conocimiento puede ser corregido",
        seccion: "🔬 Podemos equivocarnos",
        frase: "Esta actitud se llama _____: cualquier conocimiento puede ser corregido.",
        crossIndex: 3 // Cruce en la 'L' de UTILIDAD
      },
      {
        answer: "ARDILLA",
        clue: "Animal del ejemplo de James sobre una disputa de palabras",
        seccion: "🐿️ La ardilla y el árbol",
        frase: "James cuenta una discusión entre amigos. Una _____ se agarra al tronco de un árbol.",
        crossIndex: 4 // Cruce en la 'I' de UTILIDAD
      },
      {
        answer: "DEMOCRACIA",
        clue: "Para Dewey, no es solo votar: es una forma de vida",
        seccion: "🗳️ La democracia como experimento",
        frase: "La _____ no es solo votar cada tantos años: es una forma de vida.",
        crossIndex: 5 // Cruce en la 'D' de UTILIDAD
      },
      {
        answer: "PRAGMA",
        clue: "Palabra griega que significa acción, práctica o asunto",
        seccion: "🛠️ ¿Qué es el pragmatismo?",
        frase: "La palabra pragmatismo viene del griego _____, que significa acción, práctica o asunto.",
        crossIndex: 6 // Cruce en la 'A' de UTILIDAD
      },
      {
        answer: "DEWEY",
        clue: "Filósofo y pedagogo del lema «aprender haciendo»",
        seccion: "🔧 Dewey y el instrumentalismo",
        frase: "John _____ (1859–1952) fue filósofo y pedagogo.",
        crossIndex: 7 // Cruce en la 'D' de UTILIDAD
      }
    ],

    // Texto para el prompt de respuesta
    promptText: "Escribe la palabra completa (sin espacios ni acentos):",

    // Configuración de sonidos (rutas relativas desde crossword.html)
    sounds: {
      correct: "sound/collect_points.mp3",
      wrong: "sound/negative_beep.mp3",
      complete: "sound/fin_caza.mp3"
    },

    // Opciones del juego
    options: {
      showHints: true,
      autoSelectNext: true,
      allowSkip: false,
      caseSensitive: false,
      showProgressBar: true,
      enableTimer: true
    },

    // Información educativa adicional
    educational: {
      introduction: "Para el pragmatismo, las ideas valen por su utilidad práctica. Completá el crucigrama con sus conceptos.",
      conclusion: "¡Funcionó! Repasaste la duda, el hábito, a Peirce, el falibilismo, la ardilla, la democracia, el pragma y a Dewey.",
      keyWords: ["DUDA", "HABITO", "PEIRCE", "FALIBILISMO", "ARDILLA", "DEMOCRACIA", "PRAGMA", "DEWEY"]
    },

    // Metadatos para debug
    metadata: {
      version: "2.0_secundaria", // 2026-11-24: palabras del material, con seccion y frase para las pistas escalonadas
      created: new Date().toISOString(),
      theme: "pragmatismo-utilidad-secundaria",
      totalWords: 8,
      difficulty: "beginner-intermediate",
      targetAudience: "estudiantes-secundaria",
      educationalLevel: "14-18 años"
    }
  };

  // Validación mejorada de la configuración
  const config = window.CROSSWORD_CONFIG;
  const errors = [];
  const warnings = [];
  
  console.log('🔍 Validando configuración del crucigrama...');
  
  // Validar campos obligatorios
  if (!config.title || config.title.trim().length === 0) {
    errors.push("Título vacío o inválido");
  }
  
  if (!config.central || config.central.trim().length < 3) {
    errors.push("Palabra central debe tener al menos 3 letras");
  } else if (config.central.length > 12) {
    warnings.push("Palabra central muy larga, podría afectar el diseño");
  }
  
  if (!config.entries || !Array.isArray(config.entries) || config.entries.length === 0) {
    errors.push("Debe haber al menos una palabra horizontal");
  }
  
  // Validar cada entrada con más detalle
  const usedCrossIndices = new Set();
  config.entries.forEach((entry, index) => {
    if (!entry.answer || entry.answer.trim().length === 0) {
      errors.push(`Entrada ${index + 1}: respuesta vacía`);
    } else if (entry.answer.trim().length < 3) {
      warnings.push(`Entrada ${index + 1}: respuesta muy corta`);
    }
    
    if (!entry.clue || entry.clue.trim().length < 10) {
      errors.push(`Entrada ${index + 1}: pista muy corta (mínimo 10 caracteres)`);
    } else if (entry.clue.trim().length > 150) {
      warnings.push(`Entrada ${index + 1}: pista muy larga, podría no caber en pantalla`);
    }
    
    if (typeof entry.crossIndex === 'number') {
      if (entry.crossIndex < 0 || entry.crossIndex >= config.central.length) {
        errors.push(`Entrada ${index + 1}: crossIndex fuera de rango (0-${config.central.length - 1})`);
      } else if (usedCrossIndices.has(entry.crossIndex)) {
        errors.push(`Entrada ${index + 1}: crossIndex ${entry.crossIndex} ya utilizado`);
      } else {
        usedCrossIndices.add(entry.crossIndex);
      }
    }
  });
  
  // Mostrar warnings si existen
  if (warnings.length > 0) {
    console.warn('⚠️ Advertencias en la configuración:');
    warnings.forEach(warning => console.warn(`  - ${warning}`));
  }
  
  // Mostrar errores si existen
  if (errors.length > 0) {
    console.error('❌ Errores en la configuración:');
    errors.forEach(error => console.error(`  - ${error}`));
    throw new Error(`Configuración inválida: ${errors.length} errores encontrados`);
  }
  
  const configLoadTime = performance.now() - configStartTime;
  console.log(`✅ Configuración del crucigrama validada y cargada en ${configLoadTime.toFixed(2)}ms`);
  console.log(`📊 Resumen: "${config.title}"`);
  console.log(`   📝 ${config.entries.length} palabras - Central: "${config.central}"`);
  console.log(`   🎯 Nivel: ${config.metadata.difficulty} (${config.metadata.targetAudience})`);
  console.log(`   🧠 Audiencia: ${config.metadata.educationalLevel}`);
  
  // Estadísticas adicionales
  const avgClueLength = config.entries.reduce((sum, entry) => sum + entry.clue.length, 0) / config.entries.length;
  const avgAnswerLength = config.entries.reduce((sum, entry) => sum + entry.answer.length, 0) / config.entries.length;
  
  console.log(`📈 Estadísticas:`);
  console.log(`   📏 Longitud promedio de pistas: ${avgClueLength.toFixed(1)} caracteres`);
  console.log(`   📏 Longitud promedio de respuestas: ${avgAnswerLength.toFixed(1)} letras`);
  
  // Log para debug (solo en desarrollo)
  if (location.hostname === 'localhost' || location.search.includes('debug=1')) {
    console.log('🔍 Configuración completa:', config);
    console.table(config.entries.map(entry => ({
      Respuesta: entry.answer,
      Longitud: entry.answer.length,
      Cruce: entry.crossIndex,
      Letra: config.central[entry.crossIndex]
    })));
  }

} catch (error) {
  console.error('❌ Error cargando configuración del crucigrama:', error);
  
  // Configuración de fallback mínima para evitar crashes
  window.CROSSWORD_CONFIG = {
    title: "Error en configuración",
    central: "ERROR",
    entries: [
      {
        answer: "PROBLEMA",
        clue: "Error en la configuración del crucigrama",
        crossIndex: 0
      }
    ],
    promptText: "Error en configuración:",
    sounds: {},
    options: {},
    metadata: {
      version: "fallback",
      error: true
    }
  };
  
  console.log('🔄 Configuración de emergencia cargada');
  // Re-lanzar el error para que el sistema lo maneje
  throw error;
}