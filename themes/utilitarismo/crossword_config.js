// themes/utilitarismo/crossword_config.js
// Crucigrama — Utilitarismo. Central FELICIDAD y una palabra por letra, todas del material,
// con sección y frase para las pistas escalonadas.
// Versión 2.0 (2026-11-25): rehecho (antes con palabras genéricas: FILOSOFIA, ETICA, LIBERTAD, DECISION).
console.log('📋 Iniciando carga de configuración del crucigrama...');
const configStartTime = performance.now();

try {
  window.CROSSWORD_CONFIG = {
    title: "Utilitarismo: la mayor felicidad",

    // Palabra central vertical (se normaliza automáticamente)
    central: "FELICIDAD",

    // Palabras horizontales que cruzan con la central
    // crossIndex indica qué letra de la central usar (0-8 para FELICIDAD)
    entries: [
      {
        answer: "SACRIFICIO",
        clue: "Renuncia que, para Mill, solo vale si aumenta la felicidad de los demás",
        seccion: "🧭 El sacrificio",
        frase: "Para Mill, el _____ de la propia felicidad tiene valor moral solo si sirve a los demás.",
        crossIndex: 0 // Cruce en la 'F' de FELICIDAD
      },
      {
        answer: "BENTHAM",
        clue: "Filósofo y jurista inglés que propuso el principio de utilidad",
        seccion: "⚖️ Bentham: el placer y el dolor",
        frase: "Jeremy _____ (1748–1832) fue un filósofo y jurista inglés.",
        crossIndex: 1 // Cruce en la 'E' de FELICIDAD
      },
      {
        answer: "CALIDAD",
        clue: "Lo que Mill agrega a la cantidad para valorar los placeres",
        seccion: "💎 Cantidad y calidad de los placeres",
        frase: "Mill señaló que la cuantificación no alcanzaba: importa también la _____.",
        crossIndex: 2 // Cruce en la 'L' de FELICIDAD
      },
      {
        answer: "IMPARCIALIDAD",
        clue: "Idea de que cada uno cuenta como uno y nadie como más de uno",
        seccion: "👥 Cada uno cuenta como uno",
        frase: "Una idea clave del utilitarismo es la _____: «cada uno cuenta como uno».",
        crossIndex: 3 // Cruce en la 'I' de FELICIDAD
      },
      {
        answer: "CONSECUENCIAS",
        clue: "Según el utilitarismo, deciden si una acción es buena o mala",
        seccion: "🧩 Lo que importa son las consecuencias",
        frase: "Una acción es buena o mala según sus _____, no según la intención.",
        crossIndex: 4 // Cruce en la 'C' de FELICIDAD
      },
      {
        answer: "INGLATERRA",
        clue: "País donde se desarrolló el utilitarismo",
        seccion: "🎯 ¿Qué es el utilitarismo?",
        frase: "Se desarrolló sobre todo en _____, en los siglos XVIII y XIX.",
        crossIndex: 5 // Cruce en la 'I' de FELICIDAD
      },
      {
        answer: "DOLOR",
        clue: "Uno de los dos amos soberanos de la humanidad, según Bentham",
        seccion: "⚖️ Bentham: el placer y el dolor",
        frase: "Dos amos soberanos: el _____ y el placer.",
        crossIndex: 6 // Cruce en la 'D' de FELICIDAD
      },
      {
        answer: "TRANVIA",
        clue: "Vehículo sin frenos del dilema de la palanca",
        seccion: "🚋 El dilema del tranvía",
        frase: "Un dilema muy discutido: un _____ sin frenos va a atropellar a cinco personas.",
        crossIndex: 7 // Cruce en la 'A' de FELICIDAD
      },
      {
        answer: "DESGRACIA",
        clue: "El principio utilitarista pide prevenirla y mitigarla",
        seccion: "🙂 ¿Es alcanzable la felicidad?",
        frase: "El principio utilitarista incluye también la prevención y mitigación de la _____.",
        crossIndex: 8 // Cruce en la 'D' de FELICIDAD
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
      introduction: "Para el utilitarismo, la mejor acción es la que produce la mayor felicidad para el mayor número. Completá el crucigrama con sus conceptos.",
      conclusion: "¡Maximizaste la felicidad! Repasaste el sacrificio, a Bentham, la calidad, la imparcialidad, las consecuencias, Inglaterra, el dolor, el tranvía y la desgracia.",
      keyWords: ["SACRIFICIO", "BENTHAM", "CALIDAD", "IMPARCIALIDAD", "CONSECUENCIAS", "INGLATERRA", "DOLOR", "TRANVIA", "DESGRACIA"]
    },

    // Metadatos para debug
    metadata: {
      version: "2.0_secundaria", // 2026-11-24: palabras del material, con seccion y frase para las pistas escalonadas
      created: new Date().toISOString(),
      theme: "utilitarismo-felicidad-secundaria",
      totalWords: 9,
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