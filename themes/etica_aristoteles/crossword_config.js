// console.log('📋 Iniciando carga de configuración del crucigrama...');
// const configStartTime = performance.now();

// try {
//   window.CROSSWORD_CONFIG = {
//     title: "Ética de Aristóteles",
    
//     // Palabra central vertical (se normaliza automáticamente)
//     central: "VIRTUD",
    
//     // Palabras horizontales que cruzan con la central
//     // crossIndex indica qué letra de la central usar (0-5 para VIRTUD)
//     entries: [
//       {
//         answer: "VALENTIA",
//         clue: "Virtud que equilibra la cobardía y la temeridad (término medio sobre el miedo)",
//         crossIndex: 0 // Cruce en la 'V' de VIRTUD
//       },
//       {
//         answer: "INCONTINENCIA",
//         clue: "Akrasia: saber lo mejor pero obrar en contra por debilidad del deseo",
//         crossIndex: 1 // Cruce en la 'I' de VIRTUD
//       },
//       {
//         answer: "RAZONPRACTICA",
//         clue: "Facultad que delibera sobre medios adecuados al fin humano (fronesis en acción), son dos palabras",
//         crossIndex: 2 // Cruce en la 'R' de VIRTUD
//       },
//       {
//         answer: "TERMINOMEDIO",
//         clue: "Doctrina del equilibrio relativo a nosotros entre exceso y defecto, son dos palabras",
//         crossIndex: 3 // Cruce en la 'T' de VIRTUD
//       },
//       {
//         answer: "ULTIMOFIN",
//         clue: "Fin perseguido por sí mismo que detiene la cadena de fines: la eudaimonia, son dos palabras",
//         crossIndex: 4 // Cruce en la 'U' de VIRTUD
//       },
//       {
//         answer: "DIANOETICAS",
//         clue: "Familia de virtudes intelectuales: entendimiento, ciencia, sabiduría, arte y prudencia",
//         crossIndex: 5 // Cruce en la 'D' de VIRTUD
//       }
//     ],
    
//     // Texto para el prompt de respuesta
//     promptText: "Escribe la palabra completa (sin espacios ni acentos):",
    
//     // Configuración de sonidos (rutas relativas desde crossword.html)
//     sounds: {
//       correct: "sound/collect_points.mp3",
//       wrong: "sound/negative_beep.mp3", 
//       complete: "sound/fin_caza.mp3"
//     },
    
//     // Opciones del juego
//     options: {
//       showHints: true,
//       autoSelectNext: true,
//       allowSkip: false,
//       caseSensitive: false
//     },
    
//     // Metadatos para debug
//     metadata: {
//       version: "1.0",
//       created: new Date().toISOString(),
//       theme: "etica-aristoteles",
//       totalWords: 6,
//       difficulty: "intermediate"
//     }
//   };

//   // Validación de la configuración
//   const config = window.CROSSWORD_CONFIG;
//   const errors = [];
  
//   // Validar campos obligatorios
//   if (!config.title || config.title.trim().length === 0) {
//     errors.push("Título vacío o inválido");
//   }
  
//   if (!config.central || config.central.trim().length < 3) {
//     errors.push("Palabra central debe tener al menos 3 letras");
//   }
  
//   if (!config.entries || !Array.isArray(config.entries) || config.entries.length === 0) {
//     errors.push("Debe haber al menos una palabra horizontal");
//   }
  
//   // Validar cada entrada
//   config.entries.forEach((entry, index) => {
//     if (!entry.answer || entry.answer.trim().length === 0) {
//       errors.push(`Entrada ${index}: respuesta vacía`);
//     }
//     if (!entry.clue || entry.clue.trim().length < 10) {
//       errors.push(`Entrada ${index}: pista muy corta`);
//     }
//     if (typeof entry.crossIndex === 'number' && 
//         (entry.crossIndex < 0 || entry.crossIndex >= config.central.length)) {
//       errors.push(`Entrada ${index}: crossIndex fuera de rango`);
//     }
//   });
  
//   // Mostrar errores si existen
//   if (errors.length > 0) {
//     console.error('❌ Errores en la configuración:');
//     errors.forEach(error => console.error(`  - ${error}`));
//     throw new Error(`Configuración inválida: ${errors.length} errores encontrados`);
//   }
  
//   const configLoadTime = performance.now() - configStartTime;
//   console.log(`✅ Configuración del crucigrama validada y cargada en ${configLoadTime.toFixed(2)}ms`);
//   console.log(`📊 Resumen: "${config.title}" - ${config.entries.length} palabras - Central: "${config.central}"`);
  
//   // Log para debug (solo en desarrollo)
//   if (location.hostname === 'localhost' || location.search.includes('debug=1')) {
//     console.log('🔍 Configuración completa:', config);
//   }

// } catch (error) {
//   console.error('❌ Error cargando configuración del crucigrama:', error);
  
//   // Configuración de fallback mínima para evitar crashes
//   window.CROSSWORD_CONFIG = {
//     title: "Error en configuración",
//     central: "ERROR",
//     entries: [
//       {
//         answer: "ERROR",
//         clue: "Error en la configuración del crucigrama",
//         crossIndex: 0
//       }
//     ],
//     promptText: "Error en configuración:",
//     sounds: {},
//     options: {}
//   };
  
//   // Re-lanzar el error para que el sistema lo maneje
//   throw error;
// }

// console.log('📋 Iniciando carga de configuración del crucigrama...');
// const configStartTime = performance.now();

// try {
//   window.CROSSWORD_CONFIG = {
//     title: "Crucigrama: Ética de Aristóteles",

//     // La palabra central del crucigrama (vertical)
//     central: "EUDEMONIA",

//     // Palabras horizontales que cruzan con la central
//     // El 'crossIndex' indica en qué letra de la palabra central se cruza (0-7 para EUDEMONIA)
//     entries: [
//       {
//         answer: "FINES",
//         clue: "Propósito último de la acción humana, perseguido por sí mismo en plural.",
//         crossIndex: 0 // Cruce en la 'E' de EUDEMONIA
//       },
//       {
//         answer: "HABITOS",
//         clue: "Disposiciones que se adquieren por la repetición de acciones, fundamentales para el carácter.",
//         crossIndex: 1 // Cruce en la 'U' de EUDEMONIA
//       },
//       {
//         answer: "PRAXIS",
//         clue: "Tipo de acción que tiene su fin en sí misma, a diferencia de la producción.",
//         crossIndex: 2 // Cruce en la 'D' de EUDEMONIA
//       },
//       {
//         answer: "TEORICA",
//         clue: "El tipo de vida más elevada, dedicada a la contemplación y el conocimiento puro.",
//         crossIndex: 3 // Cruce en la 'E' de EUDEMONIA
//       },
//       {
//         answer: "PRUDENCIA",
//         clue: "Virtud intelectual (fronesis) que permite deliberar correctamente sobre los medios para la felicidad.",
//         crossIndex: 4 // Cruce en la 'M' de EUDEMONIA
//       },
//       {
//         answer: "VIRTUDES",
//         clue: "Excelencias del carácter que se encuentran en el justo medio entre dos vicios, en plural.",
//         crossIndex: 5 // Cruce en la 'O' de EUDEMONIA
//       },
//       {
//         answer: "DIANOETICAS",
//         clue: "Nombre de las virtudes que perfeccionan el intelecto y la razón.",
//         crossIndex: 6 // Cruce en la 'N' de EUDEMONIA
//       },
//       {
//         answer: "MEDIO",
//         clue: "El punto de equilibrio entre un exceso y un defecto, la clave de la virtud.",
//         crossIndex: 7 // Cruce en la 'I' de EUDEMONIA
//       }
//     ],

//     // Texto para el prompt de respuesta
//     promptText: "Escribe la palabra completa (sin espacios ni acentos):",

//     // Configuración de sonidos (rutas relativas desde crossword.html)
//     sounds: {
//       correct: "sound/collect_points.mp3",
//       wrong: "sound/negative_beep.mp3",
//       complete: "sound/fin_caza.mp3"
//     },

//     // Opciones del juego
//     options: {
//       showHints: true,
//       autoSelectNext: true,
//       allowSkip: false,
//       caseSensitive: false
//     },

//     // Metadatos para debug
//     metadata: {
//       version: "2.0",
//       created: new Date().toISOString(),
//       theme: "etica-aristoteles",
//       totalWords: 8,
//       difficulty: "avanzado"
//     }
//   };

//   // --- Validación del script (recomendado para evitar errores) ---
//   const config = window.CROSSWORD_CONFIG;
//   const errors = [];

//   if (!config.title || config.title.trim().length === 0) {
//     errors.push("Título vacío o inválido");
//   }

//   if (!config.central || config.central.trim().length < 3) {
//     errors.push("Palabra central debe tener al menos 3 letras");
//   }

//   if (!config.entries || !Array.isArray(config.entries) || config.entries.length === 0) {
//     errors.push("Debe haber al menos una palabra horizontal");
//   }

//   config.entries.forEach((entry, index) => {
//     if (!entry.answer || entry.answer.trim().length === 0) {
//       errors.push(`Entrada ${index}: respuesta vacía`);
//     }
//     if (!entry.clue || entry.clue.trim().length < 10) {
//       errors.push(`Entrada ${index}: pista muy corta`);
//     }
//     if (typeof entry.crossIndex !== 'number' ||
//       entry.crossIndex < 0 || entry.crossIndex >= config.central.length) {
//       errors.push(`Entrada ${index}: crossIndex fuera de rango`);
//     }
//   });

//   if (errors.length > 0) {
//     console.error('❌ Errores en la configuración:');
//     errors.forEach(error => console.error(`  - ${error}`));
//     throw new Error(`Configuración inválida: ${errors.length} errores encontrados`);
//   }

//   const configLoadTime = performance.now() - configStartTime;
//   console.log(`✅ Configuración del crucigrama validada y cargada en ${configLoadTime.toFixed(2)}ms`);
//   console.log(`📊 Resumen: "${config.title}" - ${config.entries.length} palabras - Central: "${config.central}"`);

// } catch (error) {
//   console.error('❌ Error cargando configuración del crucigrama:', error);
//   // Se usa un fallback mínimo para evitar que la página se rompa
//   window.CROSSWORD_CONFIG = {
//     title: "Error en configuración",
//     central: "ERROR",
//     entries: [{ answer: "ERROR", clue: "Error en la configuración del crucigrama", crossIndex: 0 }],
//     promptText: "Error en configuración:",
//     sounds: {},
//     options: {}
//   };
//   throw error;
// }

console.log('📋 Iniciando carga de configuración del crucigrama...');
const configStartTime = performance.now();

try {
  window.CROSSWORD_CONFIG = {
    title: "Ética de Aristóteles - Conceptos Fundamentales",
    
    // Palabra central vertical (se normaliza automáticamente)
    central: "VIRTUD",
    
    // Palabras horizontales que cruzan con la central
    // crossIndex indica qué letra de la central usar (0-5 para VIRTUD)
    entries: [
      {
        answer: "VALOR",
        clue: "Cualidad de quien actúa con coraje y enfrenta los peligros sin cobardía",
        crossIndex: 0 // Cruce en la 'V' de VIRTUD
      },
      {
        answer: "INTELIGENCIA",
        clue: "Capacidad para entender, razonar y tomar buenas decisiones en la vida",
        crossIndex: 1 // Cruce en la 'I' de VIRTUD
      },
      {
        answer: "RESPETO",
        clue: "Consideración y reconocimiento hacia otros seres humanos y hacia uno mismo",
        crossIndex: 2 // Cruce en la 'R' de VIRTUD
      },
      {
        answer: "TEMPLANZA",
        clue: "Moderación en los placeres y deseos, evitar los extremos",
        crossIndex: 3 // Cruce en la 'T' de VIRTUD
      },
      {
        answer: "PRUDENCIA",
        clue: "Sabiduría práctica para tomar decisiones correctas en cada situación",
        crossIndex: 4 // Cruce en la 'U' de VIRTUD
      },
      {
        answer: "FELICIDAD",
        clue: "Estado de bienestar y plenitud que se alcanza viviendo bien",
        crossIndex: 5 // Cruce en la 'D' de VIRTUD
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
      introduction: "Aristóteles (384-322 a.C.) fue un filósofo griego que desarrolló una teoría ética basada en las virtudes.",
      conclusion: "Para Aristóteles, la felicidad se alcanza cultivando virtudes y encontrando el equilibrio en nuestras acciones.",
      keyWords: ["virtud", "ética", "equilibrio", "carácter", "hábitos"]
    },
    
    // Metadatos para debug
    metadata: {
      version: "2.0_secundaria",
      created: new Date().toISOString(),
      theme: "etica-aristoteles-secundaria",
      totalWords: 6,
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