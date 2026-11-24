// themes/platon/crossword_config.js
// Crucigrama — Platón. Central CAVERNA y una palabra por letra, todas del material,
// con sección y frase para las pistas escalonadas.
// Versión 1.0 (2026-11-24): tema nuevo en el crucigrama.
console.log('📋 Iniciando carga de configuración del crucigrama...');
const configStartTime = performance.now();

try {
  window.CROSSWORD_CONFIG = {
    title: "Platón: el mundo de las Ideas y la caverna",

    // Palabra central vertical (se normaliza automáticamente)
    central: "CAVERNA",

    // Palabras horizontales que cruzan con la central
    // crossIndex indica qué letra de la central usar (0-6 para CAVERNA)
    entries: [
      {
        answer: "DIALECTICA",
        clue: "Método de diálogo con el que la razón asciende de idea en idea hasta el Bien",
        seccion: "🪜 La dialéctica: el camino hacia las Ideas",
        frase: "Pero el camino más alto es la _____.",
        crossIndex: 0 // Cruce en la 'C' de CAVERNA
      },
      {
        answer: "ACADEMIA",
        clue: "Escuela de filosofía que Platón fundó en Atenas",
        seccion: "🏛️ Platón, de político a filósofo",
        frase: "Viajó por Egipto, Italia y Siracusa, y al volver fundó la _____ (387 a. C.), la primera gran escuela de filosofía.",
        crossIndex: 1 // Cruce en la 'A' de CAVERNA
      },
      {
        answer: "DIVIDIDA",
        clue: "Así es la línea con la que Platón muestra los grados del conocimiento",
        seccion: "📏 Los grados del conocimiento",
        frase: "Para mostrar cómo se pasa de la ignorancia a la sabiduría, Platón imagina una línea _____.",
        crossIndex: 2 // Cruce en la 'V' de CAVERNA
      },
      {
        answer: "EPISTEME",
        clue: "Conocimiento verdadero o ciencia, que trata sobre lo inteligible",
        seccion: "📏 Los grados del conocimiento",
        frase: "La parte alta es la _____ (ciencia), sobre lo inteligible.",
        crossIndex: 3 // Cruce en la 'E' de CAVERNA
      },
      {
        answer: "REPUBLICA",
        clue: "Diálogo de Platón donde imagina la ciudad justa gobernada por filósofos",
        seccion: "🏛️ La ciudad justa y el rey filósofo",
        frase: "Platón nunca dejó de pensar en la política. En La _____ imagina una ciudad justa con tres grupos.",
        crossIndex: 4 // Cruce en la 'R' de CAVERNA
      },
      {
        answer: "BIEN",
        clue: "La Idea suprema, que Platón compara con el Sol",
        seccion: "☀️ La Idea suprema y el símil del Sol",
        frase: "Las Ideas forman una jerarquía, y en la cima está la Idea del _____, la más importante de todas.",
        crossIndex: 5 // Cruce en la 'N' de CAVERNA
      },
      {
        answer: "SOMBRAS",
        clue: "Lo único que ven los prisioneros en la pared de la caverna",
        seccion: "🔦 La caverna (1): los prisioneros",
        frase: "Los prisioneros solo ven las _____ de esos objetos en la pared y escuchan ecos.",
        crossIndex: 6 // Cruce en la 'A' de CAVERNA
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
      introduction: "Platón buscó algo firme en un mundo que cambia y lo encontró en las Ideas. Completá el crucigrama con los conceptos de la caverna, la línea dividida y la ciudad justa.",
      conclusion: "¡Saliste de la caverna! Repasaste la Academia, la Idea del Bien, la línea dividida, la episteme, la dialéctica y La República.",
      keyWords: ["DIALECTICA", "ACADEMIA", "DIVIDIDA", "EPISTEME", "REPUBLICA", "BIEN", "SOMBRAS"]
    },

    // Metadatos para debug
    metadata: {
      version: "2.0_secundaria", // 2026-11-24: palabras del material, con seccion y frase para las pistas escalonadas
      created: new Date().toISOString(),
      theme: "platon-caverna-secundaria",
      totalWords: 7,
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