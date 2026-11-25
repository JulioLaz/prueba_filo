// themes/sartre/crossword_config.js
// Crucigrama — Sartre. Central LIBERTAD y una palabra por letra, todas del material,
// con sección y frase para las pistas escalonadas.
// Versión 1.0 (2026-11-25): tema nuevo en el crucigrama.
console.log('📋 Iniciando carga de configuración del crucigrama...');
const configStartTime = performance.now();

try {
  window.CROSSWORD_CONFIG = {
    title: "Sartre: el ser humano es libertad",

    // Palabra central vertical (se normaliza automáticamente)
    central: "LIBERTAD",

    // Palabras horizontales que cruzan con la central
    // crossIndex indica qué letra de la central usar (0-7 para LIBERTAD)
    entries: [
      {
        answer: "CORTAPAPELES",
        clue: "Objeto que el artesano piensa antes de fabricarlo, en el ejemplo de Sartre",
        seccion: "✂️ El cortapapeles: primero la esencia",
        frase: "Un artesano que fabrica un _____ primero tiene en la cabeza qué es y para qué sirve.",
        crossIndex: 0 // Cruce en la 'L' de LIBERTAD
      },
      {
        answer: "ANGUSTIA",
        clue: "Vértigo de saber que todo depende de mi elección",
        seccion: "😰 La angustia",
        frase: "Quien toma conciencia de esa responsabilidad total siente _____.",
        crossIndex: 1 // Cruce en la 'I' de LIBERTAD
      },
      {
        answer: "BEAUVOIR",
        clue: "Simone de ___, filósofa que compartió su vida con Sartre",
        seccion: "🌀 Sartre y el existencialismo",
        frase: "Compartió su vida con la filósofa Simone de _____.",
        crossIndex: 2 // Cruce en la 'B' de LIBERTAD
      },
      {
        answer: "ESENCIA",
        clue: "En el ser humano, la existencia la precede",
        seccion: "🚶 La existencia precede a la esencia",
        frase: "Por eso la existencia precede a la _____.",
        crossIndex: 3 // Cruce en la 'E' de LIBERTAD
      },
      {
        answer: "PROYECTO",
        clue: "Así es el ser humano: algo que se lanza al futuro y se va haciendo",
        seccion: "📝 El ser humano es un proyecto",
        frase: "Para Sartre, el ser humano es un _____: algo que se lanza hacia el futuro y se va haciendo.",
        crossIndex: 4 // Cruce en la 'R' de LIBERTAD
      },
      {
        answer: "AUTENTICIDAD",
        clue: "Asumir la libertad y hacerse cargo de lo que elegimos, sin excusas",
        seccion: "🌟 La autenticidad",
        frase: "Frente a la mala fe está la _____.",
        crossIndex: 5 // Cruce en la 'T' de LIBERTAD
      },
      {
        answer: "DESAMPARO",
        clue: "Estar solos para elegir, sin valores escritos en el cielo",
        seccion: "🏚️ El desamparo",
        frase: "Estamos solos, sin excusas: eso es el _____.",
        crossIndex: 6 // Cruce en la 'A' de LIBERTAD
      },
      {
        answer: "DESESPERACION",
        clue: "Actuar sin esperar garantías, contando solo con nuestra voluntad",
        seccion: "🎲 La desesperación",
        frase: "La _____ no significa estar deprimido.",
        crossIndex: 7 // Cruce en la 'D' de LIBERTAD
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
      introduction: "Para Sartre estamos condenados a ser libres. Completá el crucigrama con los conceptos del existencialismo.",
      conclusion: "¡Elegiste bien! Repasaste el cortapapeles, la angustia, a Beauvoir, la esencia, el proyecto, la autenticidad, el desamparo y la desesperación.",
      keyWords: ["CORTAPAPELES", "ANGUSTIA", "BEAUVOIR", "ESENCIA", "PROYECTO", "AUTENTICIDAD", "DESAMPARO", "DESESPERACION"]
    },

    // Metadatos para debug
    metadata: {
      version: "2.0_secundaria", // 2026-11-24: palabras del material, con seccion y frase para las pistas escalonadas
      created: new Date().toISOString(),
      theme: "sartre-libertad-secundaria",
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