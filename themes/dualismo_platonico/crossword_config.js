// themes/dualismo_platonico/crossword_config.js
// Crucigrama — El dualismo platónico. Central DUALISMO y una palabra por letra,
// todas del material (content.html), con la sección y la oración para las pistas.
// Versión 1.0 (2026-11-24): tema nuevo.
console.log('📋 Iniciando carga de configuración del crucigrama...');
const configStartTime = performance.now();

try {
  window.CROSSWORD_CONFIG = {
    title: "El dualismo platónico: el alma prisionera del cuerpo",

    // Palabra central vertical (se normaliza automáticamente)
    central: "DUALISMO",

    // Palabras horizontales que cruzan con la central
    // crossIndex indica qué letra de la central usar (0-7 para DUALISMO)
    entries: [
      {
        answer: "IDEAS",
        clue: "Esencias perfectas, eternas e inmutables (la Belleza en sí, la Justicia en sí) que solo capta la razón",
        seccion: "🍎 Las cosas son copias de las Ideas",
        frase: "Las _____ no son pensamientos que tenemos en la cabeza: son modelos reales y perfectos.",
        crossIndex: 0 // Cruce en la 'D' de DUALISMO
      },
      {
        answer: "AURIGA",
        clue: "Conductor del carro alado: representa a la parte racional del alma",
        seccion: "🪽 El mito del carro alado: la caída del alma",
        frase: "Un _____ (conductor) guiaba dos caballos: uno noble y obediente, otro rebelde y torpe.",
        crossIndex: 1 // Cruce en la 'U' de DUALISMO
      },
      {
        answer: "ANAMNESIS",
        clue: "Teoría según la cual aprender es recordar lo que el alma contempló antes de nacer",
        seccion: "💡 Anámnesis: aprender es recordar",
        frase: "Aprender no es adquirir información nueva, sino recordar: eso es la _____ o reminiscencia.",
        crossIndex: 2 // Cruce en la 'A' de DUALISMO
      },
      {
        answer: "TEMPLANZA",
        clue: "Virtud de la parte concupiscible: moderar los apetitos sin dejarse arrastrar por ellos",
        seccion: "🏅 Una virtud para cada parte del alma",
        frase: "La parte concupiscible desarrolla la _____ o autocontrol: moderar los apetitos sin dejarse arrastrar por ellos.",
        crossIndex: 3 // Cruce en la 'L' de DUALISMO
      },
      {
        answer: "INTELIGIBLE",
        clue: "Mundo invisible que no se capta con los sentidos sino solo con la razón",
        seccion: "🌍 Los dos mundos: sensible e inteligible",
        frase: "El Mundo _____ es una dimensión invisible que solo se capta con la razón.",
        crossIndex: 4 // Cruce en la 'I' de DUALISMO
      },
      {
        answer: "SENTIDOS",
        clue: "Vista, oído y tacto: solo muestran apariencias y pueden engañarnos (el remo que parece doblado)",
        seccion: "👁️ La trampa de los sentidos",
        frase: "Los _____ (vista, oído, tacto) solo nos muestran apariencias.",
        crossIndex: 5 // Cruce en la 'S' de DUALISMO
      },
      {
        answer: "MUERTE",
        clue: "Para Platón no es una tragedia ni el final, sino la liberación del alma",
        seccion: "🕊️ Filosofar es aprender a morir",
        frase: "No significa desear la _____, sino prepararse desde hoy.",
        crossIndex: 6 // Cruce en la 'M' de DUALISMO
      },
      {
        answer: "CUERPO",
        clue: "Parte material del ser humano, imperfecta y mortal: la cárcel o tumba del alma",
        seccion: "🧍 Cuerpo y alma: dos realidades opuestas",
        frase: "El _____ es la parte material del ser humano: es imperfecto, cambia, envejece y muere.",
        crossIndex: 7 // Cruce en la 'O' de DUALISMO
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
      introduction: "Platón (427-347 a.C.) pensó al ser humano como un alma inmortal encerrada en un cuerpo mortal: el dualismo.",
      conclusion: "Para Platón, la filosofía libera al alma: la razón gobierna, el alma recuerda las Ideas y se purifica del cuerpo.",
      keyWords: ["dualismo", "alma", "cuerpo", "Ideas", "anámnesis"]
    },

    // Metadatos para debug
    metadata: {
      version: "1.0_secundaria", // 2026-11-24: tema nuevo, con seccion y frase de cada palabra para las pistas escalonadas
      created: new Date().toISOString(),
      theme: "dualismo-platonico-secundaria",
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