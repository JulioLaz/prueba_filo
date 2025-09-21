// console.log('🎭 Iniciando carga de configuración del crucigrama de Antropocentrismo...');
// const configStartTime = performance.now();

// try {
//   window.CROSSWORD_CONFIG = {
//     title: "Antropocentrismo - El Humano en el Centro del Universo",
    
//     // Palabra central vertical (se normaliza automáticamente)
//     central: "HUMANISMO",
    
//     // Palabras horizontales que cruzan con la central
//     // crossIndex indica qué letra de la central usar (0-8 para HUMANISMO)
//     entries: [
//       {
//         answer: "HOMBRE",
//         clue: "Ser que se convierte en medida de todas las cosas durante el Renacimiento",
//         crossIndex: 0 // Cruce en la 'H' de HUMANISMO
//       },
//       {
//         answer: "UNIVERSO",
//         clue: "Según el antropocentrismo, el ser humano es el centro de este conjunto de todo lo existente",
//         crossIndex: 1 // Cruce en la 'U' de HUMANISMO
//       },
//       {
//         answer: "MODERNIDAD",
//         clue: "Época histórica caracterizada por el antropocentrismo que sucede a la Edad Media",
//         crossIndex: 2 // Cruce en la 'M' de HUMANISMO
//       },
//       {
//         answer: "AUTORIDAD",
//         clue: "Poder tradicional que el antropocentrismo cuestiona en favor del juicio racional humano",
//         crossIndex: 3 // Cruce en la 'A' de HUMANISMO
//       },
//       {
//         answer: "NATURALEZA",
//         clue: "Conjunto del mundo físico que el antropocentrismo ve como recurso para uso humano",
//         crossIndex: 4 // Cruce en la 'N' de HUMANISMO
//       },
//       {
//         answer: "INDIVIDUO",
//         clue: "Persona considerada como unidad singular que cobra importancia en la modernidad",
//         crossIndex: 5 // Cruce en la 'I' de HUMANISMO
//       },
//       {
//         answer: "ILUSTRACION",
//         clue: "Movimiento intelectual que exalta la razón humana como guía del progreso",
//         crossIndex: 6 // Cruce en la 'S' de HUMANISMO
//       },
//       {
//         answer: "METODO",
//         clue: "Procedimiento científico que permite al hombre conocer y dominar la naturaleza",
//         crossIndex: 7 // Cruce en la 'M' de HUMANISMO
//       },
//       {
//         answer: "ORGANIZACION",
//         clue: "Estructura social que el antropocentrismo basa en principios racionales humanos",
//         crossIndex: 8 // Cruce en la 'O' de HUMANISMO
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
//       caseSensitive: false,
//       showProgressBar: true,
//       enableTimer: true
//     },
    
//     // Información educativa adicional
//     educational: {
//       introduction: "El antropocentrismo marca el paso del mundo medieval teocéntrico al mundo moderno centrado en el ser humano...",
//       conclusion: "El antropocentrismo transformó la civilización occidental pero hoy enfrentamos el desafío de evolucionar hacia formas más responsables y sostenibles.",
//       keyWords: ["antropocentrismo", "humanismo", "renacimiento", "modernidad", "individualismo", "racionalismo"],
//       philosophicalContext: "Esta doctrina influyó en el desarrollo de la ciencia moderna, los derechos humanos, pero también en la crisis ecológica actual."
//     },
    
//     // Información histórica relevante
//     historical: {
//       period: "Siglos XV-XVIII (con antecedentes y consecuencias hasta hoy)",
//       keyLocation: "Europa Occidental (Renacimiento italiano, Ilustración francesa)",
//       keyPrinciple: "El ser humano como medida de todas las cosas y centro del universo moral",
//       modernRelevance: "Base de derechos humanos modernos pero también origen de crisis ambiental planetaria"
//     },
    
//     // Conceptos clave para reforzar aprendizaje
//     keyConcepts: {
//       "Teocentrismo vs Antropocentrismo": "Paso de Dios como centro a el humano como centro",
//       "Humanismo Renacentista": "Corriente que exalta dignidad y capacidades humanas",
//       "Revolución Científica": "Método empírico que permite al hombre conocer la naturaleza",
//       "Individualismo": "Énfasis en la persona individual sobre la comunidad",
//       "Secularización": "Independización de la cultura respecto a la religión",
//       "Críticas Ecológicas": "Cuestionamientos por la destrucción ambiental"
//     },
    
//     // Metadatos para debug y analytics
//     metadata: {
//       version: "2.0_antropocentrismo_secundaria",
//       created: new Date().toISOString(),
//       theme: "antropocentrismo-secundaria",
//       totalWords: 9,
//       difficulty: "intermediate",
//       targetAudience: "estudiantes-secundaria-filosofia",
//       educationalLevel: "15-18 años",
//       subject: "filosofía-historia-ideas",
//       topics: ["antropocentrismo", "humanismo", "modernidad", "renacimiento", "ilustración", "crítica ecológica"],
//       estimatedTime: "12-16 minutos",
//       language: "español"
//     },
    
//     // Configuración específica para móviles
//     mobile: {
//       optimizeForTouch: true,
//       responsiveGrid: true,
//       enlargedButtons: true,
//       swipeGestures: false
//     },
    
//     // Sistema de pistas progresivas
//     hints: {
//       enableProgressiveHints: true,
//       maxHintsPerWord: 2,
//       hintDelay: 30000, // 30 segundos antes de mostrar primera pista
//       customHints: {
//         "HOMBRE": [
//           "Ser que según Protágoras es 'la medida de todas las cosas'",
//           "Protagonista central del humanismo renacentista"
//         ],
//         "UNIVERSO": [
//           "Totalidad de lo existente que el antropocentrismo sitúa al servicio humano",
//           "Cosmos que para esta doctrina tiene al ser humano como centro moral"
//         ],
//         "MODERNIDAD": [
//           "Época que sucede a la Edad Media y está marcada por el antropocentrismo",
//           "Período histórico caracterizado por la secularización y racionalización"
//         ],
//         "AUTORIDAD": [
//           "Poder tradicional (religioso, monárquico) cuestionado por el pensamiento moderno",
//           "Fuente de legitimidad que pasa de lo divino a lo racional humano"
//         ],
//         "NATURALEZA": [
//           "Mundo físico que el antropocentrismo ve principalmente como recurso",
//           "Conjunto de seres vivos y elementos que el hombre busca dominar"
//         ],
//         "INDIVIDUO": [
//           "Persona singular que cobra protagonismo en la modernidad",
//           "Unidad humana básica que se opone al colectivismo medieval"
//         ],
//         "ILUSTRACION": [
//           "Movimiento del siglo XVIII que exalta la razón humana",
//           "Época del 'Sapere aude' - atrévete a saber por ti mismo"
//         ],
//         "METODO": [
//           "Procedimiento sistemático para conocer desarrollado por Bacon y Descartes",
//           "Herramienta intelectual que permite al hombre dominar la naturaleza"
//         ],
//         "ORGANIZACION": [
//           "Estructura social basada en principios racionales, no tradicionales",
//           "Forma de ordenar la sociedad según criterios humanos, no divinos"
//         ]
//       }
//     },
    
//     // Validaciones adicionales
//     validation: {
//       checkSpelling: true,
//       allowAccents: false,
//       allowSpaces: false,
//       caseSensitive: false,
//       acceptPartialMatches: false
//     },
    
//     // Conexiones temáticas específicas del antropocentrismo
//     anthropocentricConnections: {
//       historicalTransition: {
//         from: "Teocentrismo medieval - Dios como centro",
//         to: "Antropocentrismo moderno - Humano como centro",
//         causes: ["Renacimiento urbano", "Descubrimientos geográficos", "Imprenta", "Reforma protestante"]
//       },
//       keyFigures: {
//         "Pico della Mirandola": "Dignidad del hombre como ser libre",
//         "Francis Bacon": "Saber es poder - dominio de la naturaleza", 
//         "René Descartes": "Cogito ergo sum - centralidad de la razón",
//         "Immanuel Kant": "Mayoría de edad - sapere aude"
//       },
//       modernManifestations: [
//         "Derechos humanos universales",
//         "Democracia y soberanía popular", 
//         "Ciencia y tecnología",
//         "Capitalismo e individualismo",
//         "Secularización cultural"
//       ],
//       contemporaryCritiques: [
//         "Crisis ecológica y cambio climático",
//         "Críticas feministas al androcentrismo",
//         "Perspectivas indígenas alternativas",
//         "Posthumanismo y transhumanismo",
//         "Derechos de animales y naturaleza"
//       ]
//     },
    
//     // Aplicaciones modernas y dilemas contemporáneos
//     modernApplications: {
//       environmentalEthics: "Debate entre antropocentrismo ilustrado vs. biocentrismo",
//       artificialIntelligence: "¿Expansión o superación de lo humano?",
//       biotechnology: "Límites éticos del mejoramiento humano",
//       globalJustice: "Derechos humanos universales vs. diversidad cultural",
//       spaceExploration: "Expansión antropocéntrica vs. protección planetaria"
//     },
    
//     // Preguntas de reflexión crítica
//     reflectiveQuestions: [
//       "¿Es posible mantener los beneficios del antropocentrismo sin sus aspectos destructivos?",
//       "¿Cómo podemos redefinir la centralidad humana incluyendo responsabilidad ecológica?",
//       "¿Qué podemos aprender de culturas que no adoptaron el antropocentrismo occidental?",
//       "¿El desarrollo de IA nos obligará a expandir nuestra ética más allá de lo humano?",
//       "¿Es el antropocentrismo una etapa necesaria o podríamos haber evolucionado diferente?"
//     ]
//   };

//   // Validación mejorada de la configuración
//   const config = window.CROSSWORD_CONFIG;
//   const errors = [];
//   const warnings = [];
  
//   console.log('🔍 Validando configuración del crucigrama de Antropocentrismo...');
  
//   // Validar campos obligatorios
//   if (!config.title || config.title.trim().length === 0) {
//     errors.push("Título vacío o inválido");
//   }
  
//   if (!config.central || config.central.trim().length < 3) {
//     errors.push("Palabra central debe tener al menos 3 letras");
//   } else if (config.central.length > 12) {
//     warnings.push("Palabra central muy larga, podría afectar el diseño");
//   }
  
//   if (!config.entries || !Array.isArray(config.entries) || config.entries.length === 0) {
//     errors.push("Debe haber al menos una palabra horizontal");
//   }
  
//   // Validar cada entrada con más detalle
//   const usedCrossIndices = new Set();
//   const anthropocentricTerms = ["HUMANISMO", "HOMBRE", "INDIVIDUO", "RAZON", "MODERNIDAD", "NATURALEZA"];
  
//   config.entries.forEach((entry, index) => {
//     if (!entry.answer || entry.answer.trim().length === 0) {
//       errors.push(`Entrada ${index + 1}: respuesta vacía`);
//     } else if (entry.answer.trim().length < 4) {
//       warnings.push(`Entrada ${index + 1}: respuesta muy corta`);
//     }
    
//     // Verificar que las respuestas sean conceptos antropocéntricos apropiados
//     if (!anthropocentricTerms.some(term => 
//       entry.answer.toUpperCase().includes(term) || 
//       term.includes(entry.answer.toUpperCase()) ||
//       entry.answer.length >= 6 // Palabras largas suelen ser conceptos importantes
//     )) {
//       console.log(`Info: "${entry.answer}" - verificar relevancia antropocéntrica`);
//     }
    
//     if (!entry.clue || entry.clue.trim().length < 20) {
//       errors.push(`Entrada ${index + 1}: pista muy corta (mínimo 20 caracteres para conceptos antropocéntricos)`);
//     } else if (entry.clue.trim().length > 250) {
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
  
//   // Validaciones específicas del tema antropocentrismo
//   if (!config.central.toUpperCase().includes('HUMAN')) {
//     warnings.push("La palabra central no contiene 'HUMAN', verificar que sea apropiada para el antropocentrismo");
//   }
  
//   // Verificar cobertura de conceptos antropocéntricos clave
//   const expectedConcepts = ['HUMAN', 'INDIVIDUO', 'RAZON', 'NATURALEZA', 'MODERNO'];
//   const coveredConcepts = config.entries.filter(entry => 
//     expectedConcepts.some(concept => 
//       entry.answer.toUpperCase().includes(concept) || 
//       entry.clue.toUpperCase().includes(concept)
//     )
//   );
  
//   if (coveredConcepts.length < 3) {
//     warnings.push(`Solo ${coveredConcepts.length} conceptos antropocéntricos clave cubiertos. Considerar incluir más.`);
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
//   console.log(`🎭 Resumen: "${config.title}"`);
//   console.log(`   📝 ${config.entries.length} palabras - Central: "${config.central}"`);
//   console.log(`   🎯 Nivel: ${config.metadata.difficulty} (${config.metadata.targetAudience})`);
//   console.log(`   🧠 Audiencia: ${config.metadata.educationalLevel}`);
//   console.log(`   📱 Optimizado para móviles: ${config.mobile.optimizeForTouch ? 'Sí' : 'No'}`);
  
//   // Estadísticas adicionales
//   const avgClueLength = config.entries.reduce((sum, entry) => sum + entry.clue.length, 0) / config.entries.length;
//   const avgAnswerLength = config.entries.reduce((sum, entry) => sum + entry.answer.length, 0) / config.entries.length;
//   const totalLetters = config.entries.reduce((sum, entry) => sum + entry.answer.length, 0) + config.central.length;
  
//   console.log(`📈 Estadísticas:`);
//   console.log(`   📏 Longitud promedio de pistas: ${avgClueLength.toFixed(1)} caracteres`);
//   console.log(`   📏 Longitud promedio de respuestas: ${avgAnswerLength.toFixed(1)} letras`);
//   console.log(`   🔤 Total de letras en el crucigrama: ${totalLetters}`);
//   console.log(`   ⏱️ Tiempo estimado: ${config.metadata.estimatedTime}`);
  
//   // Verificar conceptos antropocéntricos clave
//   const anthropocentricConcepts = config.entries.map(e => e.answer.toUpperCase());
//   console.log(`🎭 Conceptos antropocéntricos incluidos:`, anthropocentricConcepts);
  
//   // Log para debug (solo en desarrollo)
//   if (location.hostname === 'localhost' || location.search.includes('debug=1')) {
//     console.log('🔍 Configuración completa:', config);
//     console.table(config.entries.map((entry, i) => ({
//       '#': i + 1,
//       Respuesta: entry.answer,
//       Longitud: entry.answer.length,
//       Cruce: entry.crossIndex,
//       'Letra Central': config.central[entry.crossIndex],
//       'Pista (inicio)': entry.clue.substring(0, 40) + '...'
//     })));
    
//     // Mostrar pistas de ayuda si están configuradas
//     if (config.hints && config.hints.customHints) {
//       console.log('💡 Pistas configuradas:');
//       Object.entries(config.hints.customHints).forEach(([word, hints]) => {
//         console.log(`  ${word}:`, hints);
//       });
//     }
    
//     // Mostrar conexiones antropocéntricas
//     if (config.anthropocentricConnections) {
//       console.log('🎭 Conexiones antropocéntricas:');
//       console.log('  Transición histórica:', config.anthropocentricConnections.historicalTransition);
//       console.log('  Figuras clave:', config.anthropocentricConnections.keyFigures);
//       console.log('  Manifestaciones modernas:', config.anthropocentricConnections.modernManifestations);
//     }
//   }
  
//   // Verificar integridad del crucigrama
//   console.log('🧩 Verificando integridad del crucigrama antropocéntrico...');
//   const centralWord = config.central;
//   let crosswordValid = true;
  
//   config.entries.forEach((entry, index) => {
//     const expectedLetter = centralWord[entry.crossIndex];
//     const actualLetterPositions = [];
    
//     // Encontrar todas las posiciones donde aparece la letra en la palabra de respuesta
//     for (let i = 0; i < entry.answer.length; i++) {
//       if (entry.answer[i].toUpperCase() === expectedLetter.toUpperCase()) {
//         actualLetterPositions.push(i);
//       }
//     }
    
//     if (actualLetterPositions.length === 0) {
//       console.error(`❌ Error en entrada ${index + 1}: "${entry.answer}" no contiene "${expectedLetter}"`);
//       crosswordValid = false;
//     } else if (actualLetterPositions.length === 1) {
//       console.log(`✅ Entrada ${index + 1}: "${entry.answer}" cruza correctamente con "${expectedLetter}"`);
//     } else {
//       console.warn(`⚠️  Entrada ${index + 1}: "${entry.answer}" tiene múltiples "${expectedLetter}" - verificar posición de cruce`);
//     }
//   });
  
//   if (crosswordValid) {
//     console.log('🎊 ¡Crucigrama antropocéntrico estructuralmente válido!');
//   } else {
//     console.error('💥 Hay errores estructurales en el crucigrama antropocéntrico');
//   }

//   // Verificar coherencia temática antropocéntrica
//   console.log('🎭 Verificando coherencia temática antropocéntrica...');
//   const coreAnthropocentricThemes = ['humano', 'individuo', 'razón', 'naturaleza', 'moderno', 'central', 'dominio'];
//   let thematicScore = 0;
  
//   config.entries.forEach(entry => {
//     const clueContent = entry.clue.toLowerCase();
//     const answerContent = entry.answer.toLowerCase();
    
//     coreAnthropocentricThemes.forEach(theme => {
//       if (clueContent.includes(theme) || answerContent.includes(theme)) {
//         thematicScore++;
//       }
//     });
//   });
  
//   const thematicCoverage = (thematicScore / (coreAnthropocentricThemes.length * config.entries.length)) * 100;
//   console.log(`🎯 Cobertura temática antropocéntrica: ${thematicCoverage.toFixed(1)}%`);
  
//   if (thematicCoverage < 30) {
//     warnings.push(`Cobertura temática antropocéntrica baja (${thematicCoverage.toFixed(1)}%). Considerar más referencias directas.`);
//   }

// } catch (error) {
//   console.error('❌ Error cargando configuración del crucigrama antropocéntrico:', error);
  
//   // Configuración de fallback mínima para evitar crashes
//   window.CROSSWORD_CONFIG = {
//     title: "Error en configuración - Antropocentrismo",
//     central: "ERROR",
//     entries: [
//       {
//         answer: "PROBLEMA",
//         clue: "Error en la configuración del crucigrama de antropocentrismo",
//         crossIndex: 0
//       }
//     ],
//     promptText: "Error en configuración:",
//     sounds: {},
//     options: {},
//     educational: {
//       introduction: "Error: No se pudo cargar la configuración del crucigrama antropocéntrico",
//       conclusion: "Por favor, reporta este error al administrador"
//     },
//     metadata: {
//       version: "fallback_antropocentrismo",
//       error: true,
//       errorTime: new Date().toISOString()
//     }
//   };
  
//   console.log('🚨 Configuración de emergencia cargada para antropocentrismo');
//   // Re-lanzar el error para que el sistema lo maneje
//   throw new Error(`Error en crucigrama antropocéntrico: ${error.message}`);
// }

console.log('📋 Iniciando carga de configuración del crucigrama de Antropocentrismo...');
const configStartTime = performance.now();

try {
  window.CROSSWORD_CONFIG = {
    title: "Antropocentrismo - El Humano en el Centro del Universo",
    
    // Palabra central vertical (se normaliza automáticamente)
    central: "HUMANO",
    
    // Palabras horizontales que cruzan con la central
    // crossIndex indica qué letra de la central usar (0-5 para HUMANO)
    entries: [
      {
        answer: "HOMBRE",
        clue: "Ser que se convierte en medida de todas las cosas durante el Renacimiento",
        crossIndex: 0 // Cruce en la 'H' de HUMANO
      },
      {
        answer: "UNIVERSO",
        clue: "Según el antropocentrismo, el ser humano es el centro de este conjunto de todo lo existente",
        crossIndex: 1 // Cruce en la 'U' de HUMANO
      },
      {
        answer: "MODERNIDAD",
        clue: "Época histórica caracterizada por el antropocentrismo que sucede a la Edad Media",
        crossIndex: 2 // Cruce en la 'M' de HUMANO
      },
      {
        answer: "AUTORIDAD",
        clue: "Poder tradicional que el antropocentrismo cuestiona en favor del juicio racional humano",
        crossIndex: 3 // Cruce en la 'A' de HUMANO
      },
      {
        answer: "NATURALEZA",
        clue: "Conjunto del mundo físico que el antropocentrismo ve como recurso para uso humano",
        crossIndex: 4 // Cruce en la 'N' de HUMANO
      },
      {
        answer: "ORGANIZACION",
        clue: "Estructura social que el antropocentrismo basa en principios racionales humanos",
        crossIndex: 5 // Cruce en la 'O' de HUMANO
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
      introduction: "El antropocentrismo marca el paso del mundo medieval teocéntrico al mundo moderno centrado en el ser humano y su capacidad racional.",
      conclusion: "El antropocentrismo transformó la civilización occidental pero hoy enfrentamos el desafío de evolucionar hacia formas más responsables y sostenibles.",
      keyWords: ["antropocentrismo", "humanismo", "renacimiento", "modernidad", "individualismo", "racionalismo"]
    },
    
    // Metadatos para debug
    metadata: {
      version: "2.0_antropocentrismo_secundaria",
      created: new Date().toISOString(),
      theme: "antropocentrismo-secundaria",
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