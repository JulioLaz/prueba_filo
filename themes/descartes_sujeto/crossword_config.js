// themes/descartes_sujeto/crossword_config.js
// Crucigrama — Descartes. Central COGITO y una palabra por letra, todas del material,
// con sección y frase para las pistas escalonadas.
// Versión 1.0 (2026-11-25): tema nuevo.
console.log('📋 Iniciando carga de configuración del crucigrama...');
const configStartTime = performance.now();

try {
  window.CROSSWORD_CONFIG = {
    title: "Descartes: pienso, luego existo",

    // Palabra central vertical (se normaliza automáticamente)
    central: "COGITO",

    // Palabras horizontales que cruzan con la central
    // crossIndex indica qué letra de la central usar (0-5 para COGITO)
    entries: [
      {
        answer: "CERTEZA",
        clue: "Lo que buscó Descartes en todo su pensamiento",
        seccion: "📐 La búsqueda de certeza",
        frase: "Todo el pensamiento de Descartes está marcado por la búsqueda de la _____.",
        crossIndex: 0 // Cruce en la 'C' de COGITO
      },
      {
        answer: "ONTOLOGICO",
        clue: "Argumento: la idea de un ser perfecto implica su existencia",
        seccion: "🔺 El argumento ontológico",
        frase: "Es el argumento _____: así como no puedo pensar una montaña sin valle.",
        crossIndex: 1 // Cruce en la 'O' de COGITO
      },
      {
        answer: "GENIO",
        clue: "El ___ maligno, que podría engañarme hasta en las matemáticas",
        seccion: "😈 El genio maligno",
        frase: "Para llevar la duda al extremo, Descartes imagina un _____ maligno.",
        crossIndex: 2 // Cruce en la 'G' de COGITO
      },
      {
        answer: "PINEAL",
        clue: "Glándula del cerebro que Descartes propuso como contacto entre mente y cuerpo",
        seccion: "🔗 ¿Cómo se comunican mente y cuerpo?",
        frase: "Descartes propuso como punto de contacto la glándula _____, en el cerebro.",
        crossIndex: 3 // Cruce en la 'I' de COGITO
      },
      {
        answer: "EXTENSA",
        clue: "Res ___: la realidad material",
        seccion: "🌍 La res extensa y el mecanicismo",
        frase: "Así obtiene tres sustancias: la res cogitans (yo), Dios (la sustancia infinita) y la res _____, la realidad material.",
        crossIndex: 4 // Cruce en la 'T' de COGITO
      },
      {
        answer: "AUTOMATA",
        clue: "Máquina que imitara nuestros movimientos, en el Discurso del método",
        seccion: "🤖 ¿Máquina o persona?",
        frase: "Descartes se pregunta cómo distinguir a un ser humano de un _____ perfecto.",
        crossIndex: 5 // Cruce en la 'O' de COGITO
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
      introduction: "Descartes buscó una certeza absoluta y la encontró en el cogito. Completá el crucigrama con sus conceptos.",
      conclusion: "¡Pensaste, luego exististe! Repasaste la certeza, el argumento ontológico, el genio maligno, la glándula pineal, la res extensa y el autómata.",
      keyWords: ["CERTEZA", "ONTOLOGICO", "GENIO", "PINEAL", "EXTENSA", "AUTOMATA"]
    },

    // Metadatos para debug
    metadata: {
      version: "2.0_secundaria", // 2026-11-24: palabras del material, con seccion y frase para las pistas escalonadas
      created: new Date().toISOString(),
      theme: "descartes-sujeto-secundaria",
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