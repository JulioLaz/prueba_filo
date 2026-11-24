// themes/presocraticos/crossword_config.js
// Crucigrama — Los Presocráticos. Central PRINCIPIO (lo que significa arché) y una palabra
// por letra, todas del material, con sección y frase para las pistas escalonadas.
// Versión 1.0 (2026-11-24): tema nuevo en el crucigrama.
console.log('📋 Iniciando carga de configuración del crucigrama...');
const configStartTime = performance.now();

try {
  window.CROSSWORD_CONFIG = {
    title: "Los Presocráticos: el arché y la naturaleza",

    // Palabra central vertical (se normaliza automáticamente)
    central: "PRINCIPIO",

    // Palabras horizontales que cruzan con la central
    // crossIndex indica qué letra de la central usar (0-8 para PRINCIPIO)
    entries: [
      {
        answer: "PARMENIDES",
        clue: "Filósofo de Elea: «el ser es, y el no ser no es»; el cambio es ilusión",
        seccion: "🏃 Zenón: las paradojas del movimiento",
        frase: "Zenón de Elea, discípulo de _____, defendió a su maestro con paradojas.",
        crossIndex: 0 // Cruce en la 'P' de PRINCIPIO
      },
      {
        answer: "HERACLITO",
        clue: "Filósofo llamado «el Oscuro»: todo fluye, nadie se baña dos veces en el mismo río",
        seccion: "🔥 Heráclito, el Oscuro: el fuego",
        frase: "_____ de Éfeso fue llamado «el Oscuro» por sus frases enigmáticas y paradójicas.",
        crossIndex: 1 // Cruce en la 'R' de PRINCIPIO
      },
      {
        answer: "APEIRON",
        clue: "Arché de Anaximandro: lo indefinido, lo ilimitado",
        seccion: "♾️ Anaximandro: el ápeiron",
        frase: "Anaximandro, discípulo de Tales, propuso un principio abstracto: el _____, lo indefinido, lo ilimitado.",
        crossIndex: 2 // Cruce en la 'I' de PRINCIPIO
      },
      {
        answer: "NOUS",
        clue: "Mente ordenadora, pura y sin mezcla, que según Anaxágoras ordenó las semillas",
        seccion: "🧠 Anaxágoras: las semillas y el nous",
        frase: "Para explicar el orden propuso el _____, una mente ordenadora, pura y sin mezcla.",
        crossIndex: 3 // Cruce en la 'N' de PRINCIPIO
      },
      {
        answer: "DISCORDIA",
        clue: "Fuerza que, según Empédocles, separa las cuatro raíces",
        seccion: "🌍 Empédocles: las cuatro raíces",
        frase: "Dos fuerzas las mueven: el Amor, que une, y la _____, que separa.",
        crossIndex: 4 // Cruce en la 'C' de PRINCIPIO
      },
      {
        answer: "AIRE",
        clue: "Arché de Anaxímenes: se vuelve fuego por rarefacción y piedra por condensación",
        seccion: "💨 Anaxímenes: el aire",
        frase: "Anaxímenes, discípulo de Anaximandro, volvió a un arché concreto: el _____.",
        crossIndex: 5 // Cruce en la 'I' de PRINCIPIO
      },
      {
        answer: "PITAGORAS",
        clue: "Fundador de una escuela para la que el arché es el número",
        seccion: "🔢 Pitágoras: todo es número",
        frase: "_____ de Samos fundó en el sur de Italia una comunidad que mezclaba matemática, música y religión.",
        crossIndex: 6 // Cruce en la 'P' de PRINCIPIO
      },
      {
        answer: "VACIO",
        clue: "Para los atomistas, espacio necesario para que los átomos se muevan",
        seccion: "⚛️ Leucipo y Demócrito: átomos y vacío",
        frase: "Se mueven en el _____, que tiene que existir para que haya movimiento.",
        crossIndex: 7 // Cruce en la 'I' de PRINCIPIO
      },
      {
        answer: "LOGOS",
        clue: "Para Heráclito, la ley universal que ordena el cambio",
        seccion: "⚖️ El logos: el orden del cambio",
        frase: "Está regido por una ley universal que llamó _____: razón, palabra, discurso.",
        crossIndex: 8 // Cruce en la 'O' de PRINCIPIO
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
      introduction: "Los presocráticos fueron los primeros en buscar con la razón el arché, el principio de todas las cosas.",
      conclusion: "Del monismo de Mileto al pluralismo y los átomos: muchas respuestas a la misma pregunta.",
      keyWords: ["arché", "monismo", "pluralismo", "cambio", "ser"]
    },

    // Metadatos para debug
    metadata: {
      version: "2.0_secundaria", // 2026-11-24: palabras del material, con seccion y frase para las pistas escalonadas
      created: new Date().toISOString(),
      theme: "presocraticos-secundaria",
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