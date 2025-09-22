// console.log('🎯 Iniciando carga de configuración del crucigrama de Ética Kantiana...');
// const configStartTime = performance.now();

// try {
//   window.CROSSWORD_CONFIG = {
//     title: "Ética Kantiana - El Deber como Fundamento Moral",
    
//     // Palabra central vertical (se normaliza automáticamente)
//     central: "IMPERATIVO",
    
//     // Palabras horizontales que cruzan con la central
//     // crossIndex indica qué letra de la central usar (0-9 para IMPERATIVO)
//     entries: [
//       {
//         answer: "INTENCION",
//         clue: "Lo que realmente importa en la moral kantiana, más que los resultados",
//         crossIndex: 0 // Cruce en la 'I' de IMPERATIVO
//       },
//       {
//         answer: "MORALIDAD",
//         clue: "Sistema de principios que distingue el bien del mal según la razón",
//         crossIndex: 1 // Cruce en la 'M' de IMPERATIVO
//       },
//       {
//         answer: "PRUDENCIA",
//         clue: "Sabiduría práctica que nos ayuda a aplicar principios morales",
//         crossIndex: 2 // Cruce en la 'P' de IMPERATIVO
//       },
//       {
//         answer: "LIBERTAD",
//         clue: "Capacidad de elegir según la razón, más allá de los instintos naturales",
//         crossIndex: 3 // Cruce en la 'E' de IMPERATIVO
//       },
//       {
//         answer: "RAZON",
//         clue: "Facultad que nos permite descubrir principios morales universales",
//         crossIndex: 4 // Cruce en la 'R' de IMPERATIVO
//       },
//       {
//         answer: "AUTONOMIA",
//         clue: "Capacidad de darse a sí mismo la ley moral, sin imposición externa",
//         crossIndex: 5 // Cruce en la 'A' de IMPERATIVO
//       },
//       {
//         answer: "UNIVERSALIDAD",
//         clue: "Característica de los principios morales válidos para todos los seres racionales",
//         crossIndex: 6 // Cruce en la 'T' de IMPERATIVO
//       },
//       {
//         answer: "DIGNIDAD",
//         clue: "Valor absoluto que posee cada persona y que debe ser respetado siempre",
//         crossIndex: 7 // Cruce en la 'I' de IMPERATIVO
//       },
//       {
//         answer: "VOLUNTAD",
//         clue: "Cuando es buena, es lo único incondicionalmente valioso según Kant",
//         crossIndex: 8 // Cruce en la 'V' de IMPERATIVO
//       },
//       {
//         answer: "OBLIGACION",
//         clue: "Mandato moral que surge de la razón y que debemos cumplir por respeto",
//         crossIndex: 9 // Cruce en la 'O' de IMPERATIVO
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
//       introduction: "La ética kantiana revolucionó la filosofía moral al centrarse en el deber y los principios universales que descubre nuestra razón...",
//       conclusion: "Kant nos enseñó que la verdadera moralidad no depende de resultados o emociones, sino de actuar por respeto al deber moral universal.",
//       keyWords: ["imperativo", "kant", "deber", "autonomía", "dignidad", "universalidad", "razón"],
//       philosophicalContext: "Esta ética deontológica influyó profundamente en el desarrollo de los derechos humanos y la filosofía moral moderna."
//     },
    
//     // Información histórica relevante
//     historical: {
//       philosopher: "Immanuel Kant (1724-1804)",
//       location: "Königsberg, Prusia Oriental",
//       keyPrinciple: "Actúa solo según máximas que puedas querer que sean leyes universales",
//       modernRelevance: "Base filosófica de los derechos humanos, bioética y ética empresarial contemporánea"
//     },
    
//     // Conceptos clave para reforzar aprendizaje
//     keyConcepts: {
//       "Imperativo Categórico": "Orden moral incondicional que aplica a todos los seres racionales",
//       "Imperativo Hipotético": "Orden condicional del tipo 'si quieres X, haz Y'",
//       "Reino de los Fines": "Comunidad ideal donde todos son legisladores y súbditos morales",
//       "Buena Voluntad": "Lo único incondicionalmente bueno, actuar por respeto al deber",
//       "Autonomía vs Heteronomía": "Autodeterminación moral vs. imposición externa de reglas",
//       "Postulados Práticos": "Libertad, inmortalidad del alma y existencia de Dios"
//     },
    
//     // Metadatos para debug y analytics
//     metadata: {
//       version: "2.0_kant_secundaria",
//       created: new Date().toISOString(),
//       theme: "etica-kantiana-secundaria",
//       totalWords: 10,
//       difficulty: "intermediate-advanced",
//       targetAudience: "estudiantes-secundaria-filosofia",
//       educationalLevel: "15-18 años",
//       subject: "filosofía-ética",
//       topics: ["kant", "ética deontológica", "imperativo categórico", "filosofía moral", "autonomía"],
//       estimatedTime: "12-18 minutos",
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
//         "INTENCION": [
//           "Para Kant, esto importa más que los resultados de nuestras acciones",
//           "La diferencia entre actuar por deber y actuar conforme al deber"
//         ],
//         "MORALIDAD": [
//           "Sistema de principios que nos permite distinguir el bien del mal",
//           "Para Kant, se basa en la razón, no en sentimientos o tradiciones"
//         ],
//         "PRUDENCIA": [
//           "Sabiduría práctica necesaria para aplicar principios morales",
//           "Nos ayuda a discernir cómo actuar en situaciones concretas"
//         ],
//         "LIBERTAD": [
//           "Capacidad de elegir más allá de nuestros instintos naturales",
//           "Condición necesaria para que exista responsabilidad moral"
//         ],
//         "RAZON": [
//           "Facultad que nos permite descubrir leyes morales universales",
//           "Lo que distingue a los seres humanos como agentes morales"
//         ],
//         "AUTONOMIA": [
//           "Capacidad de darse a sí mismo la ley moral",
//           "Opuesta a la heteronomía o imposición externa de reglas"
//         ],
//         "UNIVERSALIDAD": [
//           "Característica clave de los principios morales válidos",
//           "Si es moral, debe aplicar a todos los seres racionales"
//         ],
//         "DIGNIDAD": [
//           "Valor absoluto e incondicional que posee toda persona",
//           "Razón por la cual nunca debemos usar a otros solo como medios"
//         ],
//         "VOLUNTAD": [
//           "Cuando es buena, es lo único incondicionalmente valioso",
//           "Disposición a actuar por respeto al deber moral"
//         ],
//         "OBLIGACION": [
//           "Mandato moral que surge de nuestra razón práctica",
//           "Lo que debemos hacer independientemente de nuestros deseos"
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
    
//     // Conexiones temáticas específicas de Kant
//     kantianConnections: {
//       imperativeTypes: {
//         categorical: "Incondicional, válido siempre",
//         hypothetical: "Condicional, depende de nuestros fines"
//       },
//       formulations: {
//         universal_law: "Actúa según máximas universalizables",
//         humanity: "Trata a la humanidad siempre como fin, nunca solo como medio",
//         kingdom_of_ends: "Actúa como legislador en el reino de los fines"
//       },
//       criticalQuestions: [
//         "¿Esta acción puede ser ley universal?",
//         "¿Estoy tratando a otros como fines en sí mismos?",
//         "¿Actúo por deber o por inclinación?",
//         "¿Mi máxima respeta la dignidad humana?"
//       ]
//     },
    
//     // Aplicaciones modernas de conceptos kantianos
//     modernApplications: {
//       humanRights: "Declaraciones internacionales basadas en dignidad kantiana",
//       bioethics: "Consentimiento informado y respeto al paciente",
//       businessEthics: "Tratamiento de empleados como fines, no solo medios",
//       digitalEthics: "Algoritmos que respeten autonomía y privacidad",
//       environmentalEthics: "Deberes hacia futuras generaciones"
//     }
//   };

//   // Validación mejorada de la configuración
//   const config = window.CROSSWORD_CONFIG;
//   const errors = [];
//   const warnings = [];
  
//   console.log('🔍 Validando configuración del crucigrama de Ética Kantiana...');
  
//   // Validar campos obligatorios
//   if (!config.title || config.title.trim().length === 0) {
//     errors.push("Título vacío o inválido");
//   }
  
//   if (!config.central || config.central.trim().length < 3) {
//     errors.push("Palabra central debe tener al menos 3 letras");
//   } else if (config.central.length > 15) {
//     warnings.push("Palabra central muy larga, podría afectar el diseño");
//   }
  
//   if (!config.entries || !Array.isArray(config.entries) || config.entries.length === 0) {
//     errors.push("Debe haber al menos una palabra horizontal");
//   }
  
//   // Validar cada entrada con más detalle
//   const usedCrossIndices = new Set();
//   const kantianTerms = ["IMPERATIVO", "KANT", "DEBER", "AUTONOMIA", "DIGNIDAD", "RAZON", "MORAL"];
  
//   config.entries.forEach((entry, index) => {
//     if (!entry.answer || entry.answer.trim().length === 0) {
//       errors.push(`Entrada ${index + 1}: respuesta vacía`);
//     } else if (entry.answer.trim().length < 4) {
//       warnings.push(`Entrada ${index + 1}: respuesta muy corta`);
//     }
    
//     // Verificar que las respuestas sean conceptos kantianos apropiados
//     if (!kantianTerms.some(term => 
//       entry.answer.toUpperCase().includes(term) || 
//       term.includes(entry.answer.toUpperCase()) ||
//       entry.answer.length >= 6 // Palabras largas suelen ser conceptos importantes
//     )) {
//       console.log(`Info: "${entry.answer}" - verificar relevancia kantiana`);
//     }
    
//     if (!entry.clue || entry.clue.trim().length < 20) {
//       errors.push(`Entrada ${index + 1}: pista muy corta (mínimo 20 caracteres para conceptos kantianos)`);
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
  
//   // Validaciones específicas del tema kantiano
//   if (!config.central.toUpperCase().includes('IMPERATIVO')) {
//     warnings.push("La palabra central no es 'IMPERATIVO', verificar que sea apropiada para la ética kantiana");
//   }
  
//   // Verificar cobertura de conceptos kantianos clave
//   const expectedConcepts = ['DEBER', 'RAZON', 'AUTONOMIA', 'DIGNIDAD', 'MORAL'];
//   const coveredConcepts = config.entries.filter(entry => 
//     expectedConcepts.some(concept => 
//       entry.answer.toUpperCase().includes(concept) || 
//       entry.clue.toUpperCase().includes(concept)
//     )
//   );
  
//   if (coveredConcepts.length < 3) {
//     warnings.push(`Solo ${coveredConcepts.length} conceptos kantianos clave cubiertos. Considerar incluir más.`);
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
//   console.log(`🎯 Resumen: "${config.title}"`);
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
  
//   // Verificar conceptos kantianos clave
//   const kantianConcepts = config.entries.map(e => e.answer.toUpperCase());
//   console.log(`🏛️ Conceptos kantianos incluidos:`, kantianConcepts);
  
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
    
//     // Mostrar conexiones kantianas
//     if (config.kantianConnections) {
//       console.log('⚖️ Conexiones kantianas:');
//       console.log('  Tipos de imperativo:', config.kantianConnections.imperativeTypes);
//       console.log('  Formulaciones:', config.kantianConnections.formulations);
//       console.log('  Preguntas críticas:', config.kantianConnections.criticalQuestions);
//     }
//   }
  
//   // Verificar integridad del crucigrama
//   console.log('🧩 Verificando integridad del crucigrama kantiano...');
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
//     console.log('🎊 ¡Crucigrama kantiano estructuralmente válido!');
//   } else {
//     console.error('💥 Hay errores estructurales en el crucigrama kantiano');
//   }

//   // Verificar coherencia temática kantiana
//   console.log('⚖️ Verificando coherencia temática kantiana...');
//   const coreKantianThemes = ['deber', 'imperativo', 'autonomía', 'dignidad', 'razón', 'universal', 'moral'];
//   let thematicScore = 0;
  
//   config.entries.forEach(entry => {
//     const clueContent = entry.clue.toLowerCase();
//     const answerContent = entry.answer.toLowerCase();
    
//     coreKantianThemes.forEach(theme => {
//       if (clueContent.includes(theme) || answerContent.includes(theme)) {
//         thematicScore++;
//       }
//     });
//   });
  
//   const thematicCoverage = (thematicScore / (coreKantianThemes.length * config.entries.length)) * 100;
//   console.log(`🎯 Cobertura temática kantiana: ${thematicCoverage.toFixed(1)}%`);
  
//   if (thematicCoverage < 30) {
//     warnings.push(`Cobertura temática kantiana baja (${thematicCoverage.toFixed(1)}%). Considerar más referencias directas.`);
//   }

// } catch (error) {
//   console.error('❌ Error cargando configuración del crucigrama kantiano:', error);
  
//   // Configuración de fallback mínima para evitar crashes
//   window.CROSSWORD_CONFIG = {
//     title: "Error en configuración - Ética Kantiana",
//     central: "ERROR",
//     entries: [
//       {
//         answer: "PROBLEMA",
//         clue: "Error en la configuración del crucigrama de ética kantiana",
//         crossIndex: 0
//       }
//     ],
//     promptText: "Error en configuración:",
//     sounds: {},
//     options: {},
//     educational: {
//       introduction: "Error: No se pudo cargar la configuración del crucigrama kantiano",
//       conclusion: "Por favor, reporta este error al administrador"
//     },
//     metadata: {
//       version: "fallback_kant",
//       error: true,
//       errorTime: new Date().toISOString()
//     }
//   };
  
//   console.log('🚨 Configuración de emergencia cargada para ética kantiana');
//   // Re-lanzar el error para que el sistema lo maneje
//   throw new Error(`Error en crucigrama kantiano: ${error.message}`);
// }

console.log('📋 Iniciando carga de configuración del crucigrama de Ética Kantiana...');
const configStartTime = performance.now();

try {
  window.CROSSWORD_CONFIG = {
    title: "Ética Kantiana: El Deber como Fundamento Moral",
    
    // Palabra central vertical (se normaliza automáticamente)
    central: "BUENAS",
    
    // Palabras horizontales que cruzan con la central
    // crossIndex indica qué letra de la central usar (0-5 para BUENAS)
    entries: [
      {
        answer: "OBLIGACION",
        clue: "Mandato moral que surge de la razón y que debemos cumplir por respeto al deber",
        crossIndex: 0 // Cruce en la 'B' de BUENAS
      },
      {
        answer: "UNIVERSAL",
        clue: "Característica de los principios morales válidos para todos los seres racionales",
        crossIndex: 1 // Cruce en la 'U' de BUENAS
      },
      {
      answer: "DEBER",
      clue: "Obligación moral que surge de la razón práctica y que define la acción ética según Kant",
      crossIndex: 2 // Cruce en la 'E' de BUENAS
      },
      {
        answer: "AUTONOMIA",
        clue: "Capacidad de darse a sí mismo la ley moral, sin imposición externa",
        crossIndex: 3 // Cruce en la 'N' de BUENAS
      },
      {
        answer: "MAXIMA",
        clue: "Principio subjetivo que debe poder convertirse en ley universal según Kant",
        crossIndex: 4 // Cruce en la 'A' de BUENAS
      },
      {
        answer: "RESPETO",
        clue: "Sentimiento moral que debemos tener hacia la dignidad de las personas",
        crossIndex: 5 // Cruce en la 'S' de BUENAS
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
      introduction: "La ética kantiana revolucionó la filosofía moral al centrarse en el deber y los principios universales que descubre nuestra razón.",
      conclusion: "Kant nos enseñó que la verdadera moralidad no depende de resultados o emociones, sino de actuar por respeto al deber moral universal.",
      keyWords: ["kant", "deber", "imperativo", "autonomía", "dignidad", "universalidad", "buena voluntad"]
    },
    
    // Metadatos para debug
    metadata: {
      version: "2.0_kant_secundaria",
      created: new Date().toISOString(),
      theme: "etica-kantiana-secundaria",
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