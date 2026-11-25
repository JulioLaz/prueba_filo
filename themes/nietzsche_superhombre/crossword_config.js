// themes/nietzsche_superhombre/crossword_config.js
// Crucigrama — Nietzsche. Central NIHILISMO y una palabra por letra, todas del material,
// con sección y frase para las pistas escalonadas.
// Versión 1.0 (2026-11-25): tema nuevo.
console.log('📋 Iniciando carga de configuración del crucigrama...');
const configStartTime = performance.now();

try {
  window.CROSSWORD_CONFIG = {
    title: "Nietzsche: la muerte de Dios y el superhombre",

    // Palabra central vertical (se normaliza automáticamente)
    central: "NIHILISMO",

    // Palabras horizontales que cruzan con la central
    // crossIndex indica qué letra de la central usar (0-8 para NIHILISMO)
    entries: [
      {
        answer: "RESENTIMIENTO",
        clue: "Emoción de los impotentes de la que nace la moral de esclavos",
        seccion: "⛓️ La moral de esclavos",
        frase: "La moral de esclavos nace del _____ de quienes se sienten impotentes frente a los fuertes.",
        crossIndex: 0 // Cruce en la 'N' de NIHILISMO
      },
      {
        answer: "MARTILLO",
        clue: "Nietzsche filosofaba «a golpes de ___»",
        seccion: "⚡ Nietzsche, el filósofo del martillo",
        frase: "Por eso se definió como un filósofo que piensa «a golpes de _____».",
        crossIndex: 1 // Cruce en la 'I' de NIHILISMO
      },
      {
        answer: "HOMBRE",
        clue: "El último ___: solo busca comodidad y pequeños placeres",
        seccion: "😑 El último hombre",
        frase: "Zaratustra advierte sobre el «último _____»: el que ya no sabe crear ni arriesgar.",
        crossIndex: 2 // Cruce en la 'H' de NIHILISMO
      },
      {
        answer: "TIERRA",
        clue: "Zaratustra pide permanecer fieles a ella",
        seccion: "🌍 El superhombre: fiel a la tierra",
        frase: "Zaratustra pide «¡Permaneced fieles a la _____!».",
        crossIndex: 3 // Cruce en la 'I' de NIHILISMO
      },
      {
        answer: "LEON",
        clue: "Segunda transformación del espíritu: dice «yo quiero»",
        seccion: "🐫 Las tres transformaciones",
        frase: "Luego el espíritu se convierte en _____: dice «yo quiero» y destruye el «tú debes».",
        crossIndex: 4 // Cruce en la 'L' de NIHILISMO
      },
      {
        answer: "IDOLOS",
        clue: "Los viejos valores que el nihilismo activo destruye",
        seccion: "🎨 Nihilismo pasivo y activo",
        frase: "El nihilismo activo destruye con valentía los viejos _____ para crear valores nuevos.",
        crossIndex: 5 // Cruce en la 'I' de NIHILISMO
      },
      {
        answer: "SUPERHOMBRE",
        clue: "Übermensch: quien crea sus valores y es fiel a la tierra",
        seccion: "🌍 El superhombre: fiel a la tierra",
        frase: "Nietzsche llama _____ (Übermensch) a quien supera ese estancamiento.",
        crossIndex: 6 // Cruce en la 'S' de NIHILISMO
      },
      {
        answer: "CAMELLO",
        clue: "Primera transformación del espíritu: carga con los deberes",
        seccion: "🐫 Las tres transformaciones",
        frase: "Primero el espíritu es un _____: carga con el peso de los deberes, de la religión y de los valores heredados.",
        crossIndex: 7 // Cruce en la 'M' de NIHILISMO
      },
      {
        answer: "RETORNO",
        clue: "El eterno ___ de lo mismo: todo vuelve, idéntico",
        seccion: "🔁 El eterno retorno",
        frase: "Es la hipótesis del eterno _____ de lo mismo.",
        crossIndex: 8 // Cruce en la 'O' de NIHILISMO
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
      introduction: "Tras la muerte de Dios llega el nihilismo. Completá el crucigrama con los conceptos de Nietzsche.",
      conclusion: "¡Del camello al niño! Repasaste el resentimiento, el martillo, el último hombre, la tierra, el león, los ídolos, el superhombre, el camello y el eterno retorno.",
      keyWords: ["RESENTIMIENTO", "MARTILLO", "HOMBRE", "TIERRA", "LEON", "IDOLOS", "SUPERHOMBRE", "CAMELLO", "RETORNO"]
    },

    // Metadatos para debug
    metadata: {
      version: "2.0_secundaria", // 2026-11-24: palabras del material, con seccion y frase para las pistas escalonadas
      created: new Date().toISOString(),
      theme: "nietzsche-superhombre-secundaria",
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