// themes/simbolo_tecnica_muerte/crossword_config.js
// Crucigrama — Símbolo, Técnica y Muerte. Central SIMBOLO y una palabra por letra, todas del material,
// con sección y frase para las pistas escalonadas.
// Versión 1.0 (2026-11-24): tema nuevo.
console.log('📋 Iniciando carga de configuración del crucigrama...');
const configStartTime = performance.now();

try {
  window.CROSSWORD_CONFIG = {
    title: "Símbolo, técnica y muerte: ¿qué nos hace humanos?",

    // Palabra central vertical (se normaliza automáticamente)
    central: "SIMBOLO",

    // Palabras horizontales que cruzan con la central
    // crossIndex indica qué letra de la central usar (0-6 para SIMBOLO)
    entries: [
      {
        answer: "SAVATER",
        clue: "Filósofo español: lo humano es saber que vamos a morir",
        seccion: "⏳ Savater: el animal que sabe que muere",
        frase: "El filósofo español Fernando _____ (nacido en 1947), autor de Ética para Amador y Las preguntas de la vida, propone otra respuesta.",
        crossIndex: 0 // Cruce en la 'S' de SIMBOLO
      },
      {
        answer: "PROTESIS",
        clue: "Extensión del cuerpo: así funciona la técnica para Maliandi",
        seccion: "🦾 La técnica, nuestra prótesis",
        frase: "Para Maliandi, la técnica funciona como una _____: una extensión del cuerpo, como ya había dicho Ernst Kapp.",
        crossIndex: 1 // Cruce en la 'I' de SIMBOLO
      },
      {
        answer: "MUERTE",
        clue: "Su conciencia es lo que nos hace humanos, según Savater",
        seccion: "⏳ Savater: el animal que sabe que muere",
        frase: "Lo que nos hace humanos es la conciencia de la _____.",
        crossIndex: 2 // Cruce en la 'M' de SIMBOLO
      },
      {
        answer: "LIBERTAD",
        clue: "Saber que somos finitos es su raíz",
        seccion: "🎯 Finitud, libertad y proyecto",
        frase: "Saber que somos finitos es la raíz de la _____.",
        crossIndex: 3 // Cruce en la 'B' de SIMBOLO
      },
      {
        answer: "PROYECTO",
        clue: "Obra abierta: así se vuelve la vida cuando nos hacemos cargo de ella",
        seccion: "🎯 Finitud, libertad y proyecto",
        frase: "La conciencia de la finitud nos obliga a hacernos cargo de nuestra existencia como un _____ vital.",
        crossIndex: 4 // Cruce en la 'O' de SIMBOLO
      },
      {
        answer: "LENGUAJE",
        clue: "Forma simbólica hecha de palabras",
        seccion: "🌐 Las formas simbólicas",
        frase: "Las grandes formas simbólicas son el mito y la religión, el _____, el arte, la historia y la ciencia.",
        crossIndex: 5 // Cruce en la 'L' de SIMBOLO
      },
      {
        answer: "JONAS",
        clue: "Hans ___, autor de El principio de responsabilidad",
        seccion: "🌍 Responsabilidad hacia el futuro",
        frase: "Siguiendo a Hans _____, autor de El principio de responsabilidad, Maliandi advierte que la ética tradicional pensaba en acciones cercanas.",
        crossIndex: 6 // Cruce en la 'O' de SIMBOLO
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
      introduction: "Cassirer, Maliandi y Savater dan tres respuestas a qué nos hace humanos. Completá el crucigrama con sus conceptos.",
      conclusion: "¡Lo lograste! Repasaste a Savater, la prótesis técnica, la muerte, la libertad, el proyecto, el lenguaje y a Jonas.",
      keyWords: ["SAVATER", "PROTESIS", "MUERTE", "LIBERTAD", "PROYECTO", "LENGUAJE", "JONAS"]
    },

    // Metadatos para debug
    metadata: {
      version: "2.0_secundaria", // 2026-11-24: palabras del material, con seccion y frase para las pistas escalonadas
      created: new Date().toISOString(),
      theme: "simbolo-tecnica-muerte-secundaria",
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