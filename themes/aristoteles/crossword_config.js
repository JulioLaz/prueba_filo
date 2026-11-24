// themes/aristoteles/crossword_config.js
// Crucigrama — Aristóteles. Central SILOGISMO y una palabra por letra, todas del material,
// con sección y frase para las pistas escalonadas.
// Versión 1.0 (2026-11-24): tema nuevo en el crucigrama.
console.log('📋 Iniciando carga de configuración del crucigrama...');
const configStartTime = performance.now();

try {
  window.CROSSWORD_CONFIG = {
    title: "Aristóteles: la lógica y la sustancia",

    // Palabra central vertical (se normaliza automáticamente)
    central: "SILOGISMO",

    // Palabras horizontales que cruzan con la central
    // crossIndex indica qué letra de la central usar (0-8 para SILOGISMO)
    entries: [
      {
        answer: "ESTAGIRA",
        clue: "Ciudad donde nació Aristóteles en el 384 a. C.",
        seccion: "🏛️ El Estagirita",
        frase: "Aristóteles nació en _____ en el 384 a. C.; por eso lo llaman «el Estagirita».",
        crossIndex: 0 // Cruce en la 'S' de SILOGISMO
      },
      {
        answer: "LICEO",
        clue: "Escuela que fundó Aristóteles en el 335 a. C.",
        seccion: "🏛️ El Estagirita",
        frase: "En el 335 a. C. fundó su propia escuela, el _____.",
        crossIndex: 1 // Cruce en la 'I' de SILOGISMO
      },
      {
        answer: "ALEJANDRO",
        clue: "Nombre del rey macedonio que fue alumno de Aristóteles",
        seccion: "🏛️ El Estagirita",
        frase: "Después fue maestro del joven _____ Magno.",
        crossIndex: 2 // Cruce en la 'L' de SILOGISMO
      },
      {
        answer: "ORGANON",
        clue: "Nombre de las obras de lógica: significa «instrumento»",
        seccion: "🔧 La lógica: el Órganon",
        frase: "Sus obras de lógica se reunieron con el nombre de _____, que en griego significa «instrumento».",
        crossIndex: 3 // Cruce en la 'O' de SILOGISMO
      },
      {
        answer: "CATEGORIAS",
        clue: "Las diez maneras en que se dice el ser",
        seccion: "🌌 La filosofía primera: el ser y las categorías",
        frase: "Esas maneras son las diez _____.",
        crossIndex: 4 // Cruce en la 'G' de SILOGISMO
      },
      {
        answer: "PREMISAS",
        clue: "Los dos juicios de los que parte un silogismo",
        seccion: "📐 El silogismo",
        frase: "El razonamiento perfecto es el silogismo: tiene dos _____ y una conclusión que se sigue necesariamente de ellas.",
        crossIndex: 5 // Cruce en la 'I' de SILOGISMO
      },
      {
        answer: "ACCIDENTES",
        clue: "Las nueve categorías que existen en una sustancia",
        seccion: "🌌 La filosofía primera: el ser y las categorías",
        frase: "Las otras nueve son _____: cantidad, cualidad, relación, lugar, tiempo, posición, posesión, acción y pasión.",
        crossIndex: 6 // Cruce en la 'S' de SILOGISMO
      },
      {
        answer: "MOTOR",
        clue: "El primer ___ inmóvil mueve todo sin ser movido",
        seccion: "🌍 El cosmos y el primer motor inmóvil",
        frase: "Debe haber un primer _____ inmóvil, que mueve sin ser movido.",
        crossIndex: 7 // Cruce en la 'M' de SILOGISMO
      },
      {
        answer: "VALIDO",
        clue: "Así es un razonamiento con la forma correcta, aunque tenga premisas falsas",
        seccion: "✅ Válido no es lo mismo que verdadero",
        frase: "Un razonamiento es _____ si su forma es correcta.",
        crossIndex: 8 // Cruce en la 'O' de SILOGISMO
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
      introduction: "Aristóteles ordenó los saberes y creó la lógica. Completá el crucigrama con su vida, la lógica y la metafísica.",
      conclusion: "¡Razonaste como un peripatético! Repasaste Estagira, el Liceo, el Órganon, las categorías, las premisas, los accidentes y el primer motor.",
      keyWords: ["ESTAGIRA", "LICEO", "ALEJANDRO", "ORGANON", "CATEGORIAS", "PREMISAS", "ACCIDENTES", "MOTOR", "VALIDO"]
    },

    // Metadatos para debug
    metadata: {
      version: "2.0_secundaria", // 2026-11-24: palabras del material, con seccion y frase para las pistas escalonadas
      created: new Date().toISOString(),
      theme: "aristoteles-logica-secundaria",
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