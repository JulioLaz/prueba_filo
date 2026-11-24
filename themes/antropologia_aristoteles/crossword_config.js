// themes/antropologia_aristoteles/crossword_config.js
// Crucigrama — Antropología de Aristóteles. Central SUSTANCIA y una palabra por letra,
// todas del material (content.html), con la sección y la oración para las pistas.
// Versión 1.0 (2026-11-24): tema nuevo.
console.log('📋 Iniciando carga de configuración del crucigrama...');
const configStartTime = performance.now();

try {
  window.CROSSWORD_CONFIG = {
    title: "Antropología de Aristóteles: cuerpo y alma, una sola sustancia",

    // Palabra central vertical (se normaliza automáticamente)
    central: "SUSTANCIA",

    // Palabras horizontales que cruzan con la central
    // crossIndex indica qué letra de la central usar (0-8 para SUSTANCIA)
    entries: [
      {
        answer: "SENSITIVA",
        clue: "Alma de animales y humanos: agrega percepción, deseo y movimiento local",
        seccion: "🐾 El alma sensitiva",
        frase: "El segundo escalón es el alma _____, propia de los animales y de los humanos.",
        crossIndex: 0 // Cruce en la 'S' de SUSTANCIA
      },
      {
        answer: "NUTRICION",
        clue: "Función vegetativa que consiste en alimentarse",
        seccion: "🌿 El alma vegetativa",
        frase: "Sus funciones son tres: la _____ (alimentarse), el crecimiento y la reproducción.",
        crossIndex: 1 // Cruce en la 'U' de SUSTANCIA
      },
      {
        answer: "POLIS",
        clue: "Ciudad o comunidad: solo en ella el ser humano desarrolla su lenguaje, su moral y su fin",
        seccion: "🏛️ Animal político: la vida en la polis",
        frase: "Solo dentro de la comunidad, la _____ o ciudad, podemos desarrollar plenamente el lenguaje, la moral y alcanzar nuestro fin.",
        crossIndex: 2 // Cruce en la 'S' de SUSTANCIA
      },
      {
        answer: "ACTO",
        clue: "Una capacidad ya realizada: el árbol crecido respecto de la semilla",
        seccion: "🌰 Potencia y acto",
        frase: "El alma es el _____: lo que hace que esa capacidad se realice y el cuerpo viva de verdad.",
        crossIndex: 3 // Cruce en la 'T' de SUSTANCIA
      },
      {
        answer: "MATERIA",
        clue: "Aquello de lo que algo está hecho (hylé): en la estatua, el bronce; en el ser humano, el cuerpo",
        seccion: "🧱 Materia y forma: el hilemorfismo",
        frase: "La _____ (en griego hylé) es aquello de lo que algo está hecho.",
        crossIndex: 4 // Cruce en la 'A' de SUSTANCIA
      },
      {
        answer: "POTENCIA",
        clue: "Capacidad de llegar a ser algo: la semilla es un árbol en...",
        seccion: "🌰 Potencia y acto",
        frase: "En el ser vivo, el cuerpo es la _____: tiene la capacidad de vivir.",
        crossIndex: 5 // Cruce en la 'N' de SUSTANCIA
      },
      {
        answer: "ABSTRACCION",
        clue: "Operación del intelecto que separa lo común de muchos casos concretos",
        seccion: "📚 Conocer: de los sentidos al intelecto",
        frase: "Después, el intelecto hace la _____: separa lo común de muchos casos concretos.",
        crossIndex: 6 // Cruce en la 'C' de SUSTANCIA
      },
      {
        answer: "VEGETATIVA",
        clue: "Alma de las plantas (y también de animales y humanos): nutrición, crecimiento y reproducción",
        seccion: "🌿 El alma vegetativa",
        frase: "El primer escalón es el alma _____, la que tienen las plantas, los animales y los humanos.",
        crossIndex: 7 // Cruce en la 'I' de SUSTANCIA
      },
      {
        answer: "FORMA",
        clue: "Lo que hace que la materia sea tal cosa (morphé): en el ser humano, el alma",
        seccion: "⚰️ ¿El alma es inmortal?",
        frase: "Si el alma es la _____ de un cuerpo, no puede existir sin él.",
        crossIndex: 8 // Cruce en la 'A' de SUSTANCIA
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
      introduction: "Aristóteles (384-322 a.C.) pensó al ser humano como una sola sustancia: el cuerpo es la materia y el alma es la forma.",
      conclusion: "Para Aristóteles el alma es la forma del cuerpo: una sola alma con funciones vegetativas, sensitivas y racionales.",
      keyWords: ["hilemorfismo", "materia", "forma", "potencia", "acto"]
    },

    // Metadatos para debug
    metadata: {
      version: "1.0_secundaria", // 2026-11-24: tema nuevo, con seccion y frase de cada palabra para las pistas escalonadas
      created: new Date().toISOString(),
      theme: "antropologia-aristoteles-secundaria",
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