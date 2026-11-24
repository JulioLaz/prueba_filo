// themes/origen/crossword_config.js
// Crucigrama — Origen de la Filosofía. Central MILETO y una palabra por letra, todas del material.
// Versión 2.0 (2026-11-24): ASOMBRO en lugar de COSMOS (que no estaba en el material) y
//   sección y frase de cada palabra para las pistas escalonadas.
console.log('📋 Iniciando carga de configuración del crucigrama...');
const configStartTime = performance.now();

try {
  window.CROSSWORD_CONFIG = {
    title: "Origen de la Filosofía: del mito al logos",

    // Palabra central vertical (se normaliza automáticamente)
    central: "MILETO",

    // Palabras horizontales que cruzan con la central
    // crossIndex indica qué letra de la central usar (0-5 para MILETO)
    entries: [
      {
        answer: "MITO",
        clue: "Relato imaginativo con dioses y seres sobrenaturales que explicaba el mundo antes de la filosofía",
        seccion: "📜 El mito: explicar con relatos",
        frase: "Un _____ es un relato imaginativo protagonizado por dioses y seres sobrenaturales, como los que cuentan los poemas de Homero y Hesíodo.",
        crossIndex: 0 // Cruce en la 'M' de MILETO
      },
      {
        answer: "FILOSOFIA",
        clue: "Su etimología es «amor por la sabiduría»; la palabra se atribuye a Pitágoras",
        seccion: "📖 Filosofía: amor por la sabiduría",
        frase: "La palabra _____ viene del griego: philo, que significa «amor» o «tendencia a», y sophía, que significa «sabiduría».",
        crossIndex: 1 // Cruce en la 'I' de MILETO
      },
      {
        answer: "LOGOS",
        clue: "Palabra griega que significa palabra, razón y discurso: el pensamiento racional",
        seccion: "🧠 El logos: explicar con razones",
        frase: "_____ es una palabra griega que significa a la vez palabra, razón y discurso.",
        crossIndex: 2 // Cruce en la 'L' de MILETO
      },
      {
        answer: "APEIRON",
        clue: "Arché de Anaximandro: lo indeterminado, lo ilimitado",
        seccion: "♾️ Anaximandro: el ápeiron",
        frase: "Para él el arché es el _____: lo indeterminado, lo ilimitado.",
        crossIndex: 3 // Cruce en la 'E' de MILETO
      },
      {
        answer: "TALES",
        clue: "Primer filósofo de la historia: propuso el agua como arché",
        seccion: "💧 Tales de Mileto: el agua",
        frase: "_____ de Mileto (siglo VI a. C.) es considerado el primer filósofo de la historia.",
        crossIndex: 4 // Cruce en la 'T' de MILETO
      },
      {
        answer: "ASOMBRO",
        clue: "Actitud con la que empieza la filosofía: curiosidad radical ante lo que nos rodea",
        seccion: "💡 El asombro: donde empieza la filosofía",
        frase: "Todo empieza con una actitud: el _____.",
        crossIndex: 5 // Cruce en la 'O' de MILETO
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
      introduction: "La filosofía nació en Mileto, en el siglo VI a. C., con el paso del mito al logos.",
      conclusion: "Los primeros filósofos buscaron con la razón el arché, el principio de todas las cosas.",
      keyWords: ["mito", "logos", "arché", "asombro", "Mileto"]
    },

    // Metadatos para debug
    metadata: {
      version: "2.0_secundaria", // 2026-11-24: palabras del material, con seccion y frase para las pistas escalonadas
      created: new Date().toISOString(),
      theme: "origen-filosofia-secundaria",
      totalWords: 6,
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