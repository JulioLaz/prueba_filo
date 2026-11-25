// themes/antropocentrismo/crossword_config.js
// Crucigrama — Antropocentrismo. Central HUMANISMO y una palabra por letra, todas del material,
// con sección y frase para las pistas escalonadas.
// Versión 2.0 (2026-11-25): rehecho (antes HUMANO, con ORGANIZACION, que no está en el material).
console.log('📋 Iniciando carga de configuración del crucigrama...');
const configStartTime = performance.now();

try {
  window.CROSSWORD_CONFIG = {
    title: "Antropocentrismo: el humano en el centro",

    // Palabra central vertical (se normaliza automáticamente)
    central: "HUMANISMO",

    // Palabras horizontales que cruzan con la central
    // crossIndex indica qué letra de la central usar (0-8 para HUMANISMO)
    entries: [
      {
        answer: "HELIOCENTRISMO",
        clue: "Teoría de Copérnico: el Sol está en el centro",
        seccion: "🔭 La revolución científica",
        frase: "En 1543, Copérnico propuso el _____: el Sol, y no la Tierra, está en el centro.",
        crossIndex: 0 // Cruce en la 'H' de HUMANISMO
      },
      {
        answer: "BURGUESIA",
        clue: "Nueva clase de comerciantes que creció en las ciudades",
        seccion: "🔄 Del teocentrismo al antropocentrismo",
        frase: "Crecieron las ciudades y una nueva _____ de comerciantes, con riqueza propia.",
        crossIndex: 1 // Cruce en la 'U' de HUMANISMO
      },
      {
        answer: "MEDIDA",
        clue: "Según Protágoras, el hombre es la ___ de todas las cosas",
        seccion: "🏛️ Raíces griegas: el hombre es la medida",
        frase: "«El hombre es la _____ de todas las cosas».",
        crossIndex: 2 // Cruce en la 'M' de HUMANISMO
      },
      {
        answer: "PROTAGORAS",
        clue: "Sofista griego que puso al hombre como medida de todas las cosas",
        seccion: "🏛️ Raíces griegas: el hombre es la medida",
        frase: "En el siglo V a. C., el sofista _____ afirmó una frase famosa.",
        crossIndex: 3 // Cruce en la 'A' de HUMANISMO
      },
      {
        answer: "NATURALEZA",
        clue: "Para Bacon y Descartes, lo que la ciencia debía dominar",
        seccion: "⚙️ Dominar la naturaleza",
        frase: "La _____ pasó a ser un recurso para usar.",
        crossIndex: 4 // Cruce en la 'N' de HUMANISMO
      },
      {
        answer: "IMPRENTA",
        clue: "Invento de Gutenberg que multiplicó los libros hacia 1450",
        seccion: "🔄 Del teocentrismo al antropocentrismo",
        frase: "La _____ de Gutenberg (hacia 1450) multiplicó los libros.",
        crossIndex: 5 // Cruce en la 'I' de HUMANISMO
      },
      {
        answer: "ERASMO",
        clue: "Humanista de Rotterdam, autor del Elogio de la locura",
        seccion: "📚 El humanismo",
        frase: "_____ de Rotterdam, autor del Elogio de la locura, defendió la tolerancia.",
        crossIndex: 6 // Cruce en la 'S' de HUMANISMO
      },
      {
        answer: "MIRANDOLA",
        clue: "Pico della ___, autor del Discurso sobre la dignidad del hombre",
        seccion: "🦎 Pico della Mirandola: la dignidad del hombre",
        frase: "En 1486, Giovanni Pico della _____ escribió el Discurso sobre la dignidad del hombre.",
        crossIndex: 7 // Cruce en la 'M' de HUMANISMO
      },
      {
        answer: "TEOCENTRISMO",
        clue: "Visión medieval con Dios en el centro de todo",
        seccion: "⛪ El teocentrismo medieval",
        frase: "Durante la Edad Media, Europa vivió en el _____: Dios era el centro de todo.",
        crossIndex: 8 // Cruce en la 'O' de HUMANISMO
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
      introduction: "El humanismo puso al ser humano en el centro. Completá el crucigrama con los conceptos del antropocentrismo.",
      conclusion: "¡Sos el escultor de vos mismo! Repasaste el heliocentrismo, la burguesía, la medida, a Protágoras, la naturaleza, la imprenta, a Erasmo, a Pico della Mirandola y el teocentrismo.",
      keyWords: ["HELIOCENTRISMO", "BURGUESIA", "MEDIDA", "PROTAGORAS", "NATURALEZA", "IMPRENTA", "ERASMO", "MIRANDOLA", "TEOCENTRISMO"]
    },

    // Metadatos para debug
    metadata: {
      version: "2.0_secundaria", // 2026-11-24: palabras del material, con seccion y frase para las pistas escalonadas
      created: new Date().toISOString(),
      theme: "antropocentrismo-humanismo-secundaria",
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