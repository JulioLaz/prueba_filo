// themes/etica/crossword_config.js
// Crucigrama de Ética y Moral — v3.0 (2026-11-19): central LIBERTAD y 8 palabras
// del material nuevo (antes: EXISTENCIALISMO, TELEOLOGÍA, CASUÍSTICA y ALTRUISMO,
// que no se trabajan en el tema). Misma estructura que etica_aristoteles.

console.log('📋 Iniciando carga de configuración del crucigrama...');
const configStartTime = performance.now();

try {
  window.CROSSWORD_CONFIG = {
    title: "Ética y Moral: Conceptos Fundamentales",

    // Palabra central vertical (se normaliza automáticamente)
    central: "LIBERTAD",

    // Palabras horizontales que cruzan con la central
    // crossIndex indica qué letra de la central usar (0-7 para LIBERTAD)
    entries: [
      {
        answer: "DILEMA",
        clue: "Situación en la que dos valores entran en conflicto y toda elección tiene un costo",
        crossIndex: 0 // Cruce en la 'L' de LIBERTAD
      },
      {
        answer: "INTENCION",
        clue: "El porqué de una acción: junto con los medios y los fines, se mira al juzgar un acto",
        crossIndex: 1 // Cruce en la 'I' de LIBERTAD
      },
      {
        answer: "BIENESTAR",
        clue: "El utilitarismo busca maximizar el ... y minimizar el daño total",
        crossIndex: 2 // Cruce en la 'B' de LIBERTAD
      },
      {
        answer: "ETHOS",
        clue: "Palabra griega que significa costumbre o manera de ser: origen de la palabra «ética»",
        crossIndex: 3 // Cruce en la 'E' de LIBERTAD
      },
      {
        answer: "RAWLS",
        clue: "Filósofo contractualista que propuso el velo de ignorancia",
        crossIndex: 4 // Cruce en la 'R' de LIBERTAD
      },
      {
        answer: "TRANVIA",
        clue: "Dilema clásico: ¿desviar un tren para que muera una persona en lugar de cinco?",
        crossIndex: 5 // Cruce en la 'T' de LIBERTAD
      },
      {
        answer: "SARTRE",
        clue: "Filósofo que afirmó que estamos condenados a ser libres",
        crossIndex: 6 // Cruce en la 'A' de LIBERTAD
      },
      {
        answer: "DEONTOLOGIA",
        clue: "Ética del deber de Kant: una acción es correcta si su máxima puede ser ley universal",
        crossIndex: 7 // Cruce en la 'D' de LIBERTAD
      }
    ],

    promptText: "Escribe la palabra completa (sin espacios ni acentos):",

    sounds: {
      correct: "sound/collect_points.mp3",
      wrong: "sound/negative_beep.mp3",
      complete: "sound/fin_caza.mp3"
    },

    options: {
      showHints: true,
      autoSelectNext: true,
      allowSkip: false,
      caseSensitive: false,
      showProgressBar: true,
      enableTimer: true
    },

    educational: {
      introduction: "La ética reflexiona sobre la moral: las normas y costumbres con las que vivimos.",
      conclusion: "Sin libertad no hay responsabilidad: por eso la ética nos ayuda a decidir mejor.",
      keyWords: ["ética", "moral", "libertad", "responsabilidad", "dilema"]
    },

    metadata: {
      version: "3.0_secundaria", // 2026-11-19: palabras y pistas tomadas del material nuevo (antes 4 de 5 palabras no estaban en el material)
      created: new Date().toISOString(),
      theme: "etica-moral-secundaria",
      totalWords: 8,
      difficulty: "beginner-intermediate",
      targetAudience: "estudiantes-secundaria",
      educationalLevel: "14-18 años"
    }
  };

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