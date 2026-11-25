// themes/hedonismo/crossword_config.js
// Crucigrama — Hedonismo (Epicuro). Central SERENIDAD y una palabra por letra, todas del material,
// con sección y frase para las pistas escalonadas.
// Versión 3.0 (2026-11-25): rehecho (antes PLACER con 6 palabras, sin sección ni frase, y con
//   CONTEMPLACION, REFLEXION y LIBERTAD, que el material no trabaja).
console.log('📋 Iniciando carga de configuración del crucigrama...');
const configStartTime = performance.now();

try {
  window.CROSSWORD_CONFIG = {
    title: "Hedonismo: el placer según Epicuro",

    // Palabra central vertical (se normaliza automáticamente)
    central: "SERENIDAD",

    // Palabras horizontales que cruzan con la central
    // crossIndex indica qué letra de la central usar (0-8 para SERENIDAD)
    entries: [
      {
        answer: "DIOSES",
        clue: "Según Epicuro, existen pero viven felices y no intervienen en los asuntos humanos",
        seccion: "😱 Dos grandes temores: dioses y muerte",
        frase: "Sobre los _____, afirma que existen pero viven felices y no intervienen en asuntos humanos.",
        crossIndex: 0 // Cruce en la 'S' de SERENIDAD
      },
      {
        answer: "EPICURO",
        clue: "Filósofo griego (341–270 a. C.) para quien el placer es ausencia de dolor",
        seccion: "🏛️ Epicuro de Samos: vida y escuela",
        frase: "_____ (341–270 a. C.) enseñó en Atenas.",
        crossIndex: 1 // Cruce en la 'E' de SERENIDAD
      },
      {
        answer: "JARDIN",
        clue: "Escuela y comunidad de Epicuro, que integró mujeres y esclavos",
        seccion: "🏛️ Epicuro de Samos: vida y escuela",
        frase: "Enseñó en Atenas y fundó el _____, comunidad que valoró la amistad e integró mujeres y esclavos.",
        crossIndex: 2 // Cruce en la 'R' de SERENIDAD
      },
      {
        answer: "MUERTE",
        clue: "Uno de los dos grandes temores: «no es nada para nosotros»",
        seccion: "😱 Dos grandes temores: dioses y muerte",
        frase: "Sobre la _____: mientras vivimos no la sentimos; cuando llega, ya no sentimos.",
        crossIndex: 3 // Cruce en la 'E' de SERENIDAD
      },
      {
        answer: "VANOS",
        clue: "Deseos que hay que eliminar, como la fama eterna",
        seccion: "📚 Conocer necesidades y ordenar deseos",
        frase: "Deseos naturales y necesarios, naturales no necesarios (lujos) y _____ (fama eterna).",
        crossIndex: 4 // Cruce en la 'N' de SERENIDAD
      },
      {
        answer: "AUTARQUIA",
        clue: "Autosuficiencia razonable: depender menos de caprichos externos",
        seccion: "🏛️ Autarquía → Ataraxia → Felicidad",
        frase: "La _____ es autosuficiencia razonable: depender menos de caprichos externos.",
        crossIndex: 5 // Cruce en la 'I' de SERENIDAD
      },
      {
        answer: "PRUDENCIA",
        clue: "Sabiduría práctica inseparable de la vida de placer que propone Epicuro",
        seccion: "🔍 Malentendidos históricos",
        frase: "Una vida de placer continuo y calculado, inseparable de _____, belleza y justicia.",
        crossIndex: 6 // Cruce en la 'D' de SERENIDAD
      },
      {
        answer: "ATARAXIA",
        clue: "Imperturbabilidad mental: el estado ideal para Epicuro",
        seccion: "🧘 Ataraxia: estado ideal",
        frase: "_____ es imperturbabilidad mental: equilibrio y lucidez frente a lo que ocurre.",
        crossIndex: 7 // Cruce en la 'A' de SERENIDAD
      },
      {
        answer: "CALIDAD",
        clue: "Para Epicuro, pesa más que la cantidad de placeres",
        seccion: "🌟 Síntesis y legado del epicureísmo",
        frase: "La _____ pesa más que la cantidad de placeres.",
        crossIndex: 8 // Cruce en la 'D' de SERENIDAD
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
      introduction: "Para Epicuro, el placer verdadero es la serenidad: no sufrir en el cuerpo ni en el alma. Completá el crucigrama con los conceptos del hedonismo.",
      conclusion: "¡Alcanzaste la ataraxia! Repasaste los dioses, a Epicuro, el Jardín, la muerte, los deseos vanos, la autarquía, la prudencia, la ataraxia y la calidad de los placeres.",
      keyWords: ["DIOSES", "EPICURO", "JARDIN", "MUERTE", "VANOS", "AUTARQUIA", "PRUDENCIA", "ATARAXIA", "CALIDAD"]
    },

    // Metadatos para debug
    metadata: {
      version: "2.0_secundaria", // 2026-11-24: palabras del material, con seccion y frase para las pistas escalonadas
      created: new Date().toISOString(),
      theme: "hedonismo-serenidad-secundaria",
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