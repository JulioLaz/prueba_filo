// themes/socrates/crossword_config.js
// Crucigrama — Sócrates. Central SOCRATES y una palabra por letra, todas del material,
// con sección y frase para las pistas escalonadas.
// Versión 1.0 (2026-11-24): tema nuevo en el crucigrama.
console.log('📋 Iniciando carga de configuración del crucigrama...');
const configStartTime = performance.now();

try {
  window.CROSSWORD_CONFIG = {
    title: "Sócrates: el giro antropológico y la mayéutica",

    // Palabra central vertical (se normaliza automáticamente)
    central: "SOCRATES",

    // Palabras horizontales que cruzan con la central
    // crossIndex indica qué letra de la central usar (0-7 para SOCRATES)
    entries: [
      {
        answer: "SOFISTAS",
        clue: "Maestros que cobraban por enseñar retórica y defendían el relativismo",
        seccion: "🎭 Los sofistas",
        frase: "En la misma época había en Atenas otros maestros: los _____.",
        crossIndex: 0 // Cruce en la 'S' de SOCRATES
      },
      {
        answer: "ORACULO",
        clue: "El de Delfos dijo que nadie era más sabio que Sócrates",
        seccion: "🤔 «Solo sé que no sé nada»",
        frase: "Un amigo de Sócrates, Querefonte, le preguntó al _____ de Delfos si había alguien más sabio que Sócrates.",
        crossIndex: 1 // Cruce en la 'O' de SOCRATES
      },
      {
        answer: "CICUTA",
        clue: "Veneno que Sócrates fue condenado a beber en el 399 a. C.",
        seccion: "🏛️ El juicio y la muerte de Sócrates",
        frase: "Un jurado lo condenó a morir bebiendo _____, un veneno.",
        crossIndex: 2 // Cruce en la 'C' de SOCRATES
      },
      {
        answer: "IRONIA",
        clue: "Primera fase del método: fingir no saber para que el otro descubra su ignorancia",
        seccion: "😏 La ironía socrática",
        frase: "La primera fase del método es la _____.",
        crossIndex: 3 // Cruce en la 'R' de SOCRATES
      },
      {
        answer: "MAYEUTICA",
        clue: "Segunda fase del método: el arte de ayudar a «dar a luz» la verdad",
        seccion: "👶 La mayéutica",
        frase: "La segunda fase del método es la _____, palabra griega que significa «arte de ayudar a dar a luz».",
        crossIndex: 4 // Cruce en la 'A' de SOCRATES
      },
      {
        answer: "TABANO",
        clue: "Insecto con el que Sócrates comparaba su tarea de despertar a los atenienses",
        seccion: "💬 El diálogo y el tábano",
        frase: "Se comparaba con un _____, un insecto que pica al caballo para que no se duerma.",
        crossIndex: 5 // Cruce en la 'T' de SOCRATES
      },
      {
        answer: "DEFINICIONES",
        clue: "Lo que buscaba Sócrates: qué es algo en sí, válido para todos los casos (universales)",
        seccion: "📐 La búsqueda de definiciones universales",
        frase: "Las preguntas de Sócrates tenían un objetivo preciso: encontrar _____ universales.",
        crossIndex: 6 // Cruce en la 'E' de SOCRATES
      },
      {
        answer: "INTELECTUALISMO",
        clue: "Nombre de la ética de Sócrates (... moral): la virtud es conocimiento",
        seccion: "🧠 El intelectualismo moral",
        frase: "La ética de Sócrates se llama _____ moral.",
        crossIndex: 7 // Cruce en la 'S' de SOCRATES
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
      introduction: "Sócrates (470-399 a. C.) llevó la filosofía de la naturaleza al ser humano: el giro antropológico.",
      conclusion: "Con la ironía y la mayéutica buscó definiciones universales; para él, la virtud es conocimiento.",
      keyWords: ["giro antropológico", "ironía", "mayéutica", "intelectualismo moral", "alma"]
    },

    // Metadatos para debug
    metadata: {
      version: "2.0_secundaria", // 2026-11-24: palabras del material, con seccion y frase para las pistas escalonadas
      created: new Date().toISOString(),
      theme: "socrates-secundaria",
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