// themes/marx_alienacion/crossword_config.js
// Crucigrama — Marx. Central TRABAJO y una palabra por letra, todas del material,
// con sección y frase para las pistas escalonadas.
// Versión 1.0 (2026-11-25): tema nuevo.
console.log('📋 Iniciando carga de configuración del crucigrama...');
const configStartTime = performance.now();

try {
  window.CROSSWORD_CONFIG = {
    title: "Marx: el trabajo y la alienación",

    // Palabra central vertical (se normaliza automáticamente)
    central: "TRABAJO",

    // Palabras horizontales que cruzan con la central
    // crossIndex indica qué letra de la central usar (0-6 para TRABAJO)
    entries: [
      {
        answer: "ESTADO",
        clue: "Aparato separado que concentra el poder colectivo, según la alienación política",
        seccion: "🏛️ La alienación política",
        frase: "El poder colectivo de las personas se delega y se concentra en un _____ separado, que parece neutral pero protege el orden existente.",
        crossIndex: 0 // Cruce en la 'T' de TRABAJO
      },
      {
        answer: "RELIGION",
        clue: "Para Marx, el ser humano la hace, y no al revés",
        seccion: "⛪ La religión: un mundo invertido",
        frase: "Marx afirma que el ser humano hace la _____, y no al revés.",
        crossIndex: 1 // Cruce en la 'R' de TRABAJO
      },
      {
        answer: "ALIENACION",
        clue: "Entfremdung: cuando lo que creamos se vuelve contra nosotros",
        seccion: "❓ ¿Qué es la alienación?",
        frase: "Marx llama _____ (Entfremdung, «volverse extraño») a algo más que un malestar personal.",
        crossIndex: 2 // Cruce en la 'A' de TRABAJO
      },
      {
        answer: "FEUERBACH",
        clue: "Filósofo que mostró que Dios es una proyección de la esencia humana",
        seccion: "⛪ La religión: un mundo invertido",
        frase: "Marx parte de Ludwig _____, que mostró que Dios es una proyección de la esencia humana.",
        crossIndex: 3 // Cruce en la 'B' de TRABAJO
      },
      {
        answer: "SALARIO",
        clue: "Lo que reciben los obreros a cambio de su fuerza de trabajo",
        seccion: "💰 El capitalismo y el trabajo enajenado",
        frase: "Los obreros no tienen más que su fuerza de trabajo, y la venden a cambio de un _____.",
        crossIndex: 4 // Cruce en la 'A' de TRABAJO
      },
      {
        answer: "OBJETIVACION",
        clue: "Plasmar en un objeto nuestras ideas y capacidades",
        seccion: "🪞 Objetivación y ser genérico",
        frase: "Marx llama a esto _____.",
        crossIndex: 5 // Cruce en la 'J' de TRABAJO
      },
      {
        answer: "OPIO",
        clue: "La religión es el «___ del pueblo»: un analgésico",
        seccion: "💊 El opio del pueblo",
        frase: "Por eso es el «_____ del pueblo».",
        crossIndex: 6 // Cruce en la 'O' de TRABAJO
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
      introduction: "Para Marx, el trabajo nos hace humanos, pero en el capitalismo se aliena. Completá el crucigrama con los conceptos del tema.",
      conclusion: "¡Lo lograste! Repasaste el Estado, la religión, la alienación, a Feuerbach, el salario, la objetivación y el opio del pueblo.",
      keyWords: ["ESTADO", "RELIGION", "ALIENACION", "FEUERBACH", "SALARIO", "OBJETIVACION", "OPIO"]
    },

    // Metadatos para debug
    metadata: {
      version: "2.0_secundaria", // 2026-11-24: palabras del material, con seccion y frase para las pistas escalonadas
      created: new Date().toISOString(),
      theme: "marx-alienacion-secundaria",
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