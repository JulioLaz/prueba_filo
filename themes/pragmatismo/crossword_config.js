// console.log('🛠️ Iniciando carga de configuración del crucigrama de Pragmatismo...');
// const configStartTime = performance.now();

// try {
//   window.CROSSWORD_CONFIG = {
//     title: "Pragmatismo Americano - Lo Verdadero es lo Práctico",
    
//     // Palabra central vertical (se normaliza automáticamente)
//     central: "UTILIDAD",
    
//     // Palabras horizontales que cruzan con la central
//     // crossIndex indica qué letra de la central usar (0-7 para UTILIDAD)
//     entries: [
//       {
//         answer: "FUNCION",
//         clue: "Para James, lo importante de la mente es su capacidad de ayudar al organismo a adaptarse",
//         crossIndex: 0 // Cruce en la 'U' de UTILIDAD
//       },
//       {
//         answer: "TRUTH",
//         clue: "Concepto que los pragmatistas redefinieron como aquello que funciona en la práctica",
//         crossIndex: 1 // Cruce en la 'T' de UTILIDAD
//       },
//       {
//         answer: "AMERICA",
//         clue: "Continente donde surgió esta filosofía genuinamente original en el siglo XIX",
//         crossIndex: 2 // Cruce en la 'I' de UTILIDAD
//       },
//       {
//         answer: "LEARNING",
//         clue: "Proceso que Dewey revolucionó enfatizando la experiencia y la resolución de problemas",
//         crossIndex: 3 // Cruce en la 'L' de UTILIDAD
//       },
//       {
//         answer: "INQUIRY",
//         clue: "Proceso de investigación que convierte situaciones problemáticas en situaciones determinadas",
//         crossIndex: 4 // Cruce en la 'I' de UTILIDAD
//       },
//       {
//         answer: "DEWEY",
//         clue: "Filósofo pragmatista que aplicó estos principios a la educación y la democracia",
//         crossIndex: 5 // Cruce en la 'D' de UTILIDAD
//       },
//       {
//         answer: "ACTION",
//         clue: "Lo que importa según los pragmatistas: las consecuencias de nuestras decisiones",
//         crossIndex: 6 // Cruce en la 'A' de UTILIDAD
//       },
//       {
//         answer: "DEMOCRACY",
//         clue: "Sistema político que Dewey veía como forma de vida basada en experimentación social",
//         crossIndex: 7 // Cruce en la 'D' de UTILIDAD
//       }
//     ],
    
//     // Texto para el prompt de respuesta
//     promptText: "Escribe la palabra completa (sin espacios ni acentos, en español o inglés según corresponda):",
    
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
//       caseSensitive: false,
//       showProgressBar: true,
//       enableTimer: true,
//       allowMultiLanguage: true // Permite respuestas en inglés para términos específicos
//     },
    
//     // Información educativa adicional
//     educational: {
//       introduction: "El pragmatismo es una filosofía americana que revolucionó la forma de entender la verdad, evaluando las ideas por su utilidad práctica y sus consecuencias reales.",
//       conclusion: "Los pragmatistas nos enseñaron que las mejores ideas no son las más elegantes teóricamente, sino las que funcionan mejor para resolver problemas humanos reales.",
//       keyWords: ["pragmatismo", "utilidad", "experiencia", "método", "dewey", "james", "peirce"],
//       philosophicalContext: "Esta corriente influyó profundamente en la educación moderna, la psicología funcional, la política democrática y el método científico."
//     },
    
//     // Información histórica relevante
//     historical: {
//       philosophers: "Charles Sanders Peirce (1839-1914), William James (1842-1910), John Dewey (1859-1952)",
//       context: "Estados Unidos siglo XIX - industrialización, expansión, democracia",
//       keyPrinciple: "Máxima pragmática: Para entender una idea, considerar todas sus consecuencias prácticas",
//       modernRelevance: "Fundamento de design thinking, desarrollo ágil, educación experiencial y políticas basadas en evidencia"
//     },
    
//     // Conceptos clave para reforzar aprendizaje
//     keyConcepts: {
//       "Máxima Pragmática": "Método de Peirce para clarificar conceptos por sus consecuencias prácticas",
//       "Corriente de la Conciencia": "Descripción de James de la mente como flujo continuo, no estados separados",
//       "Funcionalismo Psicológico": "Enfoque en qué hace la mente, no cómo está estructurada",
//       "Aprender Haciendo": "Revolución educativa de Dewey: aprendizaje activo y experiencial",
//       "Verdad como Utilidad": "Redefinición pragmatista: verdadero es lo que funciona en la práctica",
//       "Experimentalismo": "Método de prueba y error sistemático aplicado a problemas sociales"
//     },
    
//     // Aplicaciones modernas del pragmatismo
//     modernApplications: {
//       "Educación": "Aprendizaje basado en problemas, evaluación auténtica, conexión con la vida real",
//       "Tecnología": "Design thinking, desarrollo ágil, UX/UI centrado en usuario",
//       "Negocios": "Lean startup, decisiones basadas en datos, experimentación continua",
//       "Política": "Políticas basadas en evidencia, programas piloto, evaluación de resultados",
//       "Psicología": "Terapias funcionales, psicología aplicada, medicina basada en evidencia",
//       "Ciencia": "Método científico, falsabilidad, revisión por pares"
//     },
    
//     // Metadatos para debug y analytics
//     metadata: {
//       version: "2.0_pragmatismo_secundaria",
//       created: new Date().toISOString(),
//       theme: "pragmatismo-americano-secundaria",
//       totalWords: 8,
//       difficulty: "intermediate",
//       targetAudience: "estudiantes-secundaria",
//       educationalLevel: "15-18 años",
//       subject: "filosofía-americana",
//       topics: ["pragmatismo", "filosofía-americana", "dewey", "james", "peirce", "utilidad", "experiencia"],
//       estimatedTime: "10-15 minutos",
//       language: "español-inglés",
//       complexity: "media - incluye términos en inglés",
//       culturalContext: "Filosofía estadounidense del siglo XIX-XX"
//     },
    
//     // Configuración específica para móviles
//     mobile: {
//       optimizeForTouch: true,
//       responsiveGrid: true,
//       enlargedButtons: true,
//       swipeGestures: false,
//       compactMode: true,
//       multilanguageSupport: true
//     },
    
//     // Sistema de pistas progresivas
//     hints: {
//       enableProgressiveHints: true,
//       maxHintsPerWord: 3,
//       hintDelay: 40000, // 40 segundos para conceptos filosóficos
//       customHints: {
//         "FUNCION": [
//           "William James preguntaba '¿para qué sirve la mente?'",
//           "En psicología, importa lo que hace, no cómo está estructurada",
//           "Concepto clave del funcionalismo psicológico"
//         ],
//         "TRUTH": [
//           "Concepto central que los pragmatistas redefinieron completamente",
//           "Para James, es lo que funciona en la práctica",
//           "Palabra en inglés para 'verdad'"
//         ],
//         "AMERICA": [
//           "Continente donde nació esta filosofía original",
//           "Estados Unidos en el siglo XIX durante industrialización",
//           "Primera filosofía genuinamente de este continente"
//         ],
//         "LEARNING": [
//           "Dewey lo revolucionó con 'aprender haciendo'",
//           "Proceso activo, no memorización pasiva",
//           "Palabra en inglés para 'aprendizaje'"
//         ],
//         "INQUIRY": [
//           "Proceso sistemático de investigación según Dewey",
//           "Convertir situaciones problemáticas en determinadas",
//           "Palabra en inglés para 'investigación' o 'indagación'"
//         ],
//         "DEWEY": [
//           "John, el pragmatista más influyente en educación",
//           "Vivió 93 años (1859-1952)",
//           "Revolucionó la educación americana"
//         ],
//         "ACTION": [
//           "Lo que realmente importa según los pragmatistas",
//           "Las consecuencias de nuestras decisiones",
//           "Palabra en inglés para 'acción'"
//         ],
//         "DEMOCRACY": [
//           "Sistema que Dewey veía como forma de vida",
//           "Basada en experimentación y cooperación social",
//           "Palabra en inglés para 'democracia'"
//         ]
//       }
//     },
    
//     // Validaciones adicionales
//     validation: {
//       checkSpelling: true,
//       allowAccents: false,
//       allowSpaces: false,
//       caseSensitive: false,
//       acceptPartialMatches: false,
//       strictMode: false, // Más flexible para términos en inglés
//       multiLanguageTerms: ["TRUTH", "LEARNING", "INQUIRY", "ACTION", "DEMOCRACY", "AMERICA"]
//     },
    
//     // Conexiones conceptuales para aprendizaje
//     conceptualConnections: {
//       "UTILIDAD": "Concepto central: las ideas valen por su utilidad práctica",
//       "FUNCION-AMERICA": "Funcionalismo psicológico desarrollado en Estados Unidos",
//       "DEWEY-LEARNING": "Dewey revolucionó la educación con aprendizaje experiencial",
//       "TRUTH-ACTION": "La verdad se demuestra en la acción y sus consecuencias",
//       "INQUIRY-DEMOCRACY": "La investigación como base de la democracia experimental"
//     },
    
//     // Contexto cultural específico
//     culturalContext: {
//       "americanPhilosophy": "Primera escuela filosófica genuinamente americana",
//       "industrialAge": "Surgió durante la industrialización y expansión de EE.UU.",
//       "practicalSpirit": "Refleja el espíritu práctico y emprendedor americano",
//       "democraticValues": "Conectado con valores democráticos de experimentación social"
//     }
//   };

//   // Validación específica para pragmatismo (incluye términos en inglés)
//   const config = window.CROSSWORD_CONFIG;
//   const errors = [];
//   const warnings = [];
  
//   console.log('🔍 Validando configuración del crucigrama de Pragmatismo...');
  
//   // Validar campos obligatorios
//   if (!config.title || config.title.trim().length === 0) {
//     errors.push("Título vacío o inválido");
//   }
  
//   if (!config.central || config.central.trim().length < 4) {
//     errors.push("Palabra central debe tener al menos 4 letras");
//   } else if (config.central.length > 12) {
//     warnings.push("Palabra central muy larga para móviles");
//   }
  
//   if (!config.entries || !Array.isArray(config.entries) || config.entries.length === 0) {
//     errors.push("Debe haber al menos una palabra horizontal");
//   }
  
//   // Validar cada entrada
//   const usedCrossIndices = new Set();
//   const pragmatismTerms = ["UTILIDAD", "FUNCION", "EXPERIENCIA", "MÉTODO", "DEWEY", "JAMES", "PEIRCE"];
//   const englishTerms = ["TRUTH", "LEARNING", "INQUIRY", "ACTION", "DEMOCRACY", "AMERICA"];
  
//   config.entries.forEach((entry, index) => {
//     if (!entry.answer || entry.answer.trim().length === 0) {
//       errors.push(`Entrada ${index + 1}: respuesta vacía`);
//     } else if (entry.answer.trim().length < 3) {
//       warnings.push(`Entrada ${index + 1}: respuesta muy corta`);
//     }
    
//     // Verificar relevancia filosófica para pragmatismo
//     const isPragmatismRelated = pragmatismTerms.some(term => 
//       entry.answer.toUpperCase().includes(term) || 
//       term.includes(entry.answer.toUpperCase())
//     ) || englishTerms.includes(entry.answer.toUpperCase());
    
//     if (!isPragmatismRelated && entry.answer.length < 6) {
//       warnings.push(`Entrada ${index + 1}: "${entry.answer}" - verificar relevancia para pragmatismo`);
//     }
    
//     if (!entry.clue || entry.clue.trim().length < 15) {
//       errors.push(`Entrada ${index + 1}: pista muy corta para concepto filosófico (mínimo 15 caracteres)`);
//     } else if (entry.clue.trim().length > 200) {
//       warnings.push(`Entrada ${index + 1}: pista muy larga para móviles`);
//     }
    
//     if (typeof entry.crossIndex === 'number') {
//       if (entry.crossIndex < 0 || entry.crossIndex >= config.central.length) {
//         errors.push(`Entrada ${index + 1}: crossIndex fuera de rango (0-${config.central.length - 1})`);
//       } else if (usedCrossIndices.has(entry.crossIndex)) {
//         errors.push(`Entrada ${index + 1}: crossIndex ${entry.crossIndex} ya utilizado`);
//       } else {
//         usedCrossIndices.add(entry.crossIndex);
//       }
//     }
    
//     // Validar que la letra de cruce coincida
//     if (entry.answer && entry.crossIndex >= 0 && entry.crossIndex < config.central.length) {
//       const centralLetter = config.central[entry.crossIndex].toUpperCase();
//       if (!entry.answer.toUpperCase().includes(centralLetter)) {
//         errors.push(`Entrada ${index + 1}: "${entry.answer}" no contiene la letra "${centralLetter}" para cruzar`);
//       }
//     }
//   });
  
//   // Validaciones específicas del pragmatismo
//   if (!config.central.toUpperCase().includes('UTILIDAD') && !config.central.toUpperCase().includes('PRACTICA')) {
//     warnings.push("La palabra central no refleja claramente el pragmatismo");
//   }
  
//   // Verificar representación de figuras clave
//   const keyFigures = ["PEIRCE", "JAMES", "DEWEY"];
//   const includedFigures = config.entries.filter(e => 
//     keyFigures.some(figure => e.answer.toUpperCase().includes(figure))
//   );
  
//   if (includedFigures.length === 0) {
//     warnings.push("No se incluyen figuras clave del pragmatismo (Peirce, James, Dewey)");
//   }
  
//   // Verificar balance español-inglés
//   const englishEntries = config.entries.filter(e => 
//     englishTerms.includes(e.answer.toUpperCase())
//   ).length;
  
//   if (englishEntries > config.entries.length * 0.6) {
//     warnings.push(`Muchas palabras en inglés (${englishEntries}/${config.entries.length}) - considerar más términos en español`);
//   }
  
//   // Mostrar warnings si existen
//   if (warnings.length > 0) {
//     console.warn('⚠️ Advertencias en la configuración:');
//     warnings.forEach(warning => console.warn(`  - ${warning}`));
//   }
  
//   // Mostrar errores si existen
//   if (errors.length > 0) {
//     console.error('❌ Errores en la configuración:');
//     errors.forEach(error => console.error(`  - ${error}`));
//     throw new Error(`Configuración inválida: ${errors.length} errores encontrados`);
//   }
  
//   const configLoadTime = performance.now() - configStartTime;
//   console.log(`✅ Configuración del crucigrama validada y cargada en ${configLoadTime.toFixed(2)}ms`);
//   console.log(`🛠️ Resumen: "${config.title}"`);
//   console.log(`   📝 ${config.entries.length} palabras - Central: "${config.central}"`);
//   console.log(`   🎯 Nivel: ${config.metadata.difficulty} (${config.metadata.targetAudience})`);
//   console.log(`   🧠 Audiencia: ${config.metadata.educationalLevel}`);
//   console.log(`   🌍 Idiomas: ${config.metadata.language}`);
//   console.log(`   📱 Optimizado para móviles: ${config.mobile.optimizeForTouch ? 'Sí' : 'No'}`);
  
//   // Estadísticas adicionales
//   const avgClueLength = config.entries.reduce((sum, entry) => sum + entry.clue.length, 0) / config.entries.length;
//   const avgAnswerLength = config.entries.reduce((sum, entry) => sum + entry.answer.length, 0) / config.entries.length;
//   const totalLetters = config.entries.reduce((sum, entry) => sum + entry.answer.length, 0) + config.central.length;
  
//   console.log(`📈 Estadísticas:`);
//   console.log(`   📏 Longitud promedio de pistas: ${avgClueLength.toFixed(1)} caracteres`);
//   console.log(`   📐 Longitud promedio de respuestas: ${avgAnswerLength.toFixed(1)} letras`);
//   console.log(`   🔤 Total de letras en el crucigrama: ${totalLetters}`);
//   console.log(`   ⏱️ Tiempo estimado: ${config.metadata.estimatedTime}`);
//   console.log(`   🏛️ Contexto cultural: ${config.metadata.culturalContext}`);
  
//   // Verificar conceptos pragmatistas incluidos
//   const pragmatismConcepts = config.entries.map(e => e.answer.toUpperCase());
//   console.log(`🛠️ Conceptos pragmatistas incluidos:`, pragmatismConcepts);
  
//   // Verificar balance de idiomas
//   const spanishEntries = config.entries.filter(e => 
//     !englishTerms.includes(e.answer.toUpperCase())
//   ).length;
//   console.log(`🌍 Balance de idiomas: ${spanishEntries} español, ${englishEntries} inglés`);
  
//   // Log para debug (solo en desarrollo)
//   if (location.hostname === 'localhost' || location.search.includes('debug=1')) {
//     console.log('🔍 Configuración completa:', config);
//     console.table(config.entries.map((entry, i) => ({
//       '#': i + 1,
//       Respuesta: entry.answer,
//       Idioma: englishTerms.includes(entry.answer.toUpperCase()) ? 'EN' : 'ES',
//       Longitud: entry.answer.length,
//       Cruce: entry.crossIndex,
//       'Letra Central': config.central[entry.crossIndex],
//       'Pista (inicio)': entry.clue.substring(0, 35) + '...'
//     })));
    
//     // Mostrar contexto cultural
//     if (config.culturalContext) {
//       console.log('🏛️ Contexto cultural:', config.culturalContext);
//     }
//   }
  
//   // Verificar integridad estructural específica para pragmatismo
//   console.log('🧩 Verificando integridad estructural del crucigrama pragmatista...');
//   const centralWord = config.central;
//   let crosswordValid = true;
//   let structuralIssues = [];
  
//   config.entries.forEach((entry, index) => {
//     const expectedLetter = centralWord[entry.crossIndex];
//     const actualLetterPositions = [];
    
//     // Encontrar todas las posiciones donde aparece la letra
//     for (let i = 0; i < entry.answer.length; i++) {
//       if (entry.answer[i].toUpperCase() === expectedLetter.toUpperCase()) {
//         actualLetterPositions.push(i);
//       }
//     }
    
//     if (actualLetterPositions.length === 0) {
//       console.error(`❌ Error estructural en entrada ${index + 1}: "${entry.answer}" no contiene "${expectedLetter}"`);
//       structuralIssues.push(`${entry.answer} vs ${expectedLetter}`);
//       crosswordValid = false;
//     } else if (actualLetterPositions.length === 1) {
//       console.log(`✅ Entrada ${index + 1}: "${entry.answer}" cruza correctamente con "${expectedLetter}"`);
//     } else {
//       console.warn(`⚠️  Entrada ${index + 1}: "${entry.answer}" tiene múltiples "${expectedLetter}" - verificar posición`);
//     }
//   });
  
//   // Verificar cobertura de letras centrales
//   const usedLetters = new Set(config.entries.map(e => e.crossIndex));
//   const unusedIndices = [];
//   for (let i = 0; i < centralWord.length; i++) {
//     if (!usedLetters.has(i)) {
//       unusedIndices.push(`${i}(${centralWord[i]})`);
//     }
//   }
  
//   if (unusedIndices.length > 0) {
//     console.warn(`⚠️ Letras centrales sin usar: ${unusedIndices.join(', ')}`);
//   } else {
//     console.log('✅ Todas las letras centrales están utilizadas');
//   }
  
//   if (crosswordValid && unusedIndices.length === 0) {
//     console.log('🎊 ¡Crucigrama pragmatista estructuralmente perfecto!');
//   } else if (crosswordValid) {
//     console.log('✅ Crucigrama pragmatista estructuralmente válido');
//   } else {
//     console.error('💥 Errores estructurales críticos:', structuralIssues);
//   }
  
//   // Evaluación educativa específica para pragmatismo
//   console.log('📚 Evaluando calidad educativa del crucigrama pragmatista...');
//   const educationalMetrics = {
//     conceptCoverage: (pragmatismConcepts.length / pragmatismTerms.length) * 100,
//     historicalFigures: includedFigures.length,
//     modernRelevance: config.modernApplications ? Object.keys(config.modernApplications).length : 0,
//     culturalContext: config.culturalContext ? 'Incluido' : 'Faltante',
//     multilingualSupport: config.options.allowMultiLanguage ? 'Sí' : 'No'
//   };
  
//   console.log('📊 Métricas educativas:', educationalMetrics);

// } catch (error) {
//   console.error('❌ Error cargando configuración del crucigrama de pragmatismo:', error);
  
//   // Configuración de fallback para pragmatismo
//   window.CROSSWORD_CONFIG = {
//     title: "Error en configuración - Pragmatismo",
//     central: "ERROR",
//     entries: [
//       {
//         answer: "PROBLEMA",
//         clue: "Error en la configuración del crucigrama de pragmatismo",
//         crossIndex: 0
//       }
//     ],
//     promptText: "Error en configuración:",
//     sounds: {},
//     options: {},
//     educational: {
//       introduction: "Error: No se pudo cargar la configuración del crucigrama de pragmatismo",
//       conclusion: "Por favor, reporta este error al administrador del sistema"
//     },
//     metadata: {
//       version: "fallback_pragmatismo",
//       error: true,
//       errorTime: new Date().toISOString(),
//       errorDetails: error.message,
//       theme: "pragmatismo-error"
//     }
//   };
  
//   console.log('🚨 Configuración de emergencia cargada para pragmatismo');
//   throw new Error(`Error en crucigrama de pragmatismo: ${error.message}`);
// }

console.log('📋 Iniciando carga de configuración del crucigrama de Pragmatismo...');
const configStartTime = performance.now();

try {
  window.CROSSWORD_CONFIG = {
    title: "Pragmatismo Americano: Lo Verdadero es lo Práctico",
    
    // Palabra central vertical (se normaliza automáticamente)
    central: "METODO",
    
    // Palabras horizontales que cruzan con la central
    // crossIndex indica qué letra de la central usar (0-5 para METODO)
    entries: [
      {
        answer: "MILL",
        clue: "John Stuart, filósofo que influyó en el desarrollo del pragmatismo americano",
        crossIndex: 0 // Cruce en la 'M' de METODO
      },
      {
        answer: "EXPERIENCIA",
        clue: "Base del conocimiento según los pragmatistas, más importante que la teoría abstracta",
        crossIndex: 1 // Cruce en la 'E' de METODO
      },
      {
        answer: "UTILIDAD",
        clue: "Criterio pragmatista para evaluar la verdad: lo que funciona en la práctica",
        crossIndex: 2 // Cruce en la 'T' de METODO
      },
      {
        answer: "ACCION",
        clue: "Lo que realmente importa según los pragmatistas: las consecuencias de nuestras decisiones",
        crossIndex: 3 // Cruce en la 'O' de METODO
      },
      {
        answer: "DEWEY",
        clue: "John, filósofo pragmatista que revolucionó la educación con el aprender haciendo",
        crossIndex: 4 // Cruce en la 'D' de METODO
      },
      {
        answer: "OPTIMISMO",
        clue: "Actitud característica del pragmatismo: confianza en la capacidad humana de resolver problemas",
        crossIndex: 5 // Cruce en la 'O' de METODO
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
      introduction: "El pragmatismo es una filosofía americana que revolucionó la forma de entender la verdad, evaluando las ideas por su utilidad práctica y sus consecuencias reales.",
      conclusion: "Los pragmatistas nos enseñaron que las mejores ideas no son las más elegantes teóricamente, sino las que funcionan mejor para resolver problemas humanos reales.",
      keyWords: ["pragmatismo", "utilidad", "experiencia", "método", "dewey", "james", "peirce"]
    },
    
    // Metadatos para debug
    metadata: {
      version: "2.0_pragmatismo_secundaria",
      created: new Date().toISOString(),
      theme: "pragmatismo-americano-secundaria",
      totalWords: 6,
      difficulty: "intermediate",
      targetAudience: "estudiantes-secundaria",
      educationalLevel: "15-18 años"
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
  console.log(`   🔤 ${config.entries.length} palabras - Central: "${config.central}"`);
  console.log(`   🎯 Nivel: ${config.metadata.difficulty} (${config.metadata.targetAudience})`);
  console.log(`   🧠 Audiencia: ${config.metadata.educationalLevel}`);
  
  // Estadísticas adicionales
  const avgClueLength = config.entries.reduce((sum, entry) => sum + entry.clue.length, 0) / config.entries.length;
  const avgAnswerLength = config.entries.reduce((sum, entry) => sum + entry.answer.length, 0) / config.entries.length;
  
  console.log(`📈 Estadísticas:`);
  console.log(`   📝 Longitud promedio de pistas: ${avgClueLength.toFixed(1)} caracteres`);
  console.log(`   📝 Longitud promedio de respuestas: ${avgAnswerLength.toFixed(1)} letras`);
  
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