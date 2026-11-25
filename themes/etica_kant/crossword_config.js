// themes/etica_kant/crossword_config.js
// Crucigrama — Ética de Kant. Central DIGNIDAD y una palabra por letra, todas del material,
// con sección y frase para las pistas escalonadas.
// Versión 2.0 (2026-11-25): rehecho (antes BUENAS, con definiciones sueltas).
console.log('📋 Iniciando carga de configuración del crucigrama...');
const configStartTime = performance.now();

try {
  window.CROSSWORD_CONFIG = {
    title: "Kant: lo bueno es lo que se hace por deber",

    // Palabra central vertical (se normaliza automáticamente)
    central: "DIGNIDAD",

    // Palabras horizontales que cruzan con la central
    // crossIndex indica qué letra de la central usar (0-7 para DIGNIDAD)
    entries: [
      {
        answer: "DEBER",
        clue: "Necesidad de una acción por respeto a la ley moral",
        seccion: "🫡 Actuar por deber",
        frase: "Para Kant, el _____ es la necesidad de una acción por respeto a la ley moral.",
        crossIndex: 0 // Cruce en la 'D' de DIGNIDAD
      },
      {
        answer: "INCLINACIONES",
        clue: "Deseos, gustos y sentimientos que no dan valor moral",
        seccion: "🫡 Actuar por deber",
        frase: "Las _____ (deseos, gustos, sentimientos) no dan valor moral.",
        crossIndex: 1 // Cruce en la 'I' de DIGNIDAD
      },
      {
        answer: "CATEGORICO",
        clue: "Imperativo incondicional: manda sin «si»",
        seccion: "⚖️ El imperativo categórico",
        frase: "El imperativo _____ es incondicional: manda sin «si».",
        crossIndex: 2 // Cruce en la 'G' de DIGNIDAD
      },
      {
        answer: "AUTONOMIA",
        clue: "Darse a uno mismo la ley moral con la propia razón",
        seccion: "🗽 Autonomía y heteronomía",
        frase: "_____ viene del griego autós (uno mismo) y nómos (ley): es darse a uno mismo la ley.",
        crossIndex: 3 // Cruce en la 'N' de DIGNIDAD
      },
      {
        answer: "HIPOTETICO",
        clue: "Imperativo condicional: «si querés X, hacé Y»",
        seccion: "🔀 El imperativo hipotético",
        frase: "Kant distingue dos. El _____ es condicional.",
        crossIndex: 4 // Cruce en la 'I' de DIGNIDAD
      },
      {
        answer: "MEDIO",
        clue: "Nunca hay que tratar a una persona solamente como un ___",
        seccion: "👤 Segunda fórmula: la humanidad como fin",
        frase: "Siempre como un fin y nunca solamente como un _____.",
        crossIndex: 5 // Cruce en la 'D' de DIGNIDAD
      },
      {
        answer: "MAXIMA",
        clue: "Regla personal que seguimos al actuar",
        seccion: "📝 Máximas y ley moral",
        frase: "Cuando actuamos, seguimos una _____: la regla personal que nos damos.",
        crossIndex: 6 // Cruce en la 'A' de DIGNIDAD
      },
      {
        answer: "VOLUNTAD",
        clue: "Lo único bueno sin restricción es la buena ___",
        seccion: "💖 La buena voluntad",
        frase: "Si actuás con buena _____, nadie podrá reprocharte nada.",
        crossIndex: 7 // Cruce en la 'D' de DIGNIDAD
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
      introduction: "Para Kant las personas tienen dignidad y no precio. Completá el crucigrama con los conceptos de su ética.",
      conclusion: "¡Actuaste por deber! Repasaste el deber, las inclinaciones, los imperativos, la autonomía, el medio, la máxima y la buena voluntad.",
      keyWords: ["DEBER", "INCLINACIONES", "CATEGORICO", "AUTONOMIA", "HIPOTETICO", "MEDIO", "MAXIMA", "VOLUNTAD"]
    },

    // Metadatos para debug
    metadata: {
      version: "2.0_secundaria", // 2026-11-24: palabras del material, con seccion y frase para las pistas escalonadas
      created: new Date().toISOString(),
      theme: "kant-dignidad-secundaria",
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