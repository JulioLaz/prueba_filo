// console.log('🎯 Iniciando carga de configuración del crucigrama de Utilitarismo...');
// const configStartTime = performance.now();

// try {
//   window.CROSSWORD_CONFIG = {
//     title: "Utilitarismo de John Stuart Mill - La Mayor Felicidad para el Mayor Número",
    
//     // Palabra central vertical (se normaliza automáticamente)
//     central: "FELICIDAD",
    
//     // Palabras horizontales que cruzan con la central
//     // crossIndex indica qué letra de la central usar (0-8 para FELICIDAD)
//     entries: [
//       {
//         answer: "FILOSOFIA",
//         clue: "Disciplina que estudia los principios fundamentales de la moral y la búsqueda del bien",
//         crossIndex: 0 // Cruce en la 'F' de FELICIDAD
//       },
//       {
//         answer: "ETICA",
//         clue: "Rama de la filosofía que estudia lo correcto e incorrecto en el comportamiento humano",
//         crossIndex: 1 // Cruce en la 'E' de FELICIDAD
//       },
//       {
//         answer: "LIBERTAD",
//         clue: "Capacidad de actuar según la propia voluntad, defendida por Mill en su famosa obra",
//         crossIndex: 2 // Cruce en la 'L' de FELICIDAD
//       },
//       {
//         answer: "IMPARCIALIDAD",
//         clue: "Actitud de evaluar las consecuencias sin favorecer a ninguna persona en particular",
//         crossIndex: 3 // Cruce en la 'I' de FELICIDAD
//       },
//       {
//         answer: "CONSECUENCIAS",
//         clue: "Resultados de nuestras acciones que determinan si son moralmente correctas",
//         crossIndex: 4 // Cruce en la 'C' de FELICIDAD
//       },
//       {
//         answer: "INTELECTUAL",
//         clue: "Tipo de placer superior que distingue a los humanos de otros animales",
//         crossIndex: 5 // Cruce en la 'I' de FELICIDAD
//       },
//       {
//         answer: "DECISION",
//         clue: "Acto de elegir entre alternativas evaluando cuál maximiza el bienestar general",
//         crossIndex: 6 // Cruce en la 'D' de FELICIDAD
//       },
//       {
//         answer: "ALTRUISMO",
//         clue: "Preocupación genuina por el bienestar de otros, no solo por el propio",
//         crossIndex: 7 // Cruce en la 'A' de FELICIDAD
//       },
//       {
//         answer: "DOLOR",
//         clue: "Lo opuesto a la felicidad que el utilitarismo busca minimizar en el mundo",
//         crossIndex: 8 // Cruce en la 'D' de FELICIDAD
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
//       introduction: "El utilitarismo es una teoría ética que evalúa la moralidad de las acciones según sus consecuencias, buscando la mayor felicidad para el mayor número de personas.",
//       conclusion: "John Stuart Mill refinó esta filosofía distinguiendo entre placeres superiores e inferiores, y promoviendo la imparcialidad moral como base de una sociedad justa.",
//       keyWords: ["utilitarismo", "mill", "felicidad", "consecuencias", "imparcialidad", "altruismo"],
//       philosophicalContext: "Esta corriente influyó profundamente en la ética aplicada, las políticas públicas y los derechos humanos modernos."
//     },
    
//     // Información histórica relevante
//     historical: {
//       philosopher: "John Stuart Mill (1806-1873)",
//       context: "Revolución Industrial inglesa",
//       keyWork: "Utilitarismo (1863), Sobre la libertad (1859)",
//       principleCore: "Principio de la Mayor Felicidad: maximizar bienestar general",
//       modernRelevance: "Fundamento de análisis costo-beneficio en políticas públicas, bioética médica y ética empresarial"
//     },
    
//     // Conceptos clave para reforzar aprendizaje
//     keyConcepts: {
//       "Principio de la Mayor Felicidad": "Las acciones son correctas si promueven la felicidad, incorrectas si causan lo contrario",
//       "Placeres Superiores vs Inferiores": "Distinction entre placeres intelectuales (superiores) y físicos (inferiores)",
//       "Espectador Imparcial": "Evaluemos las acciones sin dar peso especial a nuestros propios intereses",
//       "Utilitarismo del Acto vs Regla": "Evaluar cada acción individual vs seguir reglas que generalmente maximizan felicidad",
//       "Test de Mill": "Quienes han experimentado ambos tipos de placeres prefieren consistentemente los superiores"
//     },
    
//     // Aplicaciones modernas relevantes
//     modernApplications: {
//       "Políticas Públicas": "Análisis costo-beneficio, impuestos progresivos, educación universal",
//       "Bioética": "Distribución de recursos médicos, investigación con animales, decisiones al final de la vida",
//       "Tecnología": "Ética de IA, diseño de redes sociales, big data y privacidad",
//       "Medio Ambiente": "Cambio climático, sostenibilidad, derechos de generaciones futuras",
//       "Empresa": "Responsabilidad social corporativa, impacto social positivo"
//     },
    
//     // Metadatos para debug y analytics
//     metadata: {
//       version: "2.0_utilitarismo_secundaria",
//       created: new Date().toISOString(),
//       theme: "utilitarismo-mill-secundaria",
//       totalWords: 9,
//       difficulty: "intermediate-advanced",
//       targetAudience: "estudiantes-secundaria",
//       educationalLevel: "15-18 años",
//       subject: "filosofía-ética",
//       topics: ["utilitarismo", "mill", "ética-consecuencialista", "filosofía-moral", "bienestar"],
//       estimatedTime: "12-18 minutos",
//       language: "español",
//       complexity: "alta - requiere comprensión de conceptos abstractos"
//     },
    
//     // Configuración específica para móviles
//     mobile: {
//       optimizeForTouch: true,
//       responsiveGrid: true,
//       enlargedButtons: true,
//       swipeGestures: false,
//       compactMode: true
//     },
    
//     // Sistema de pistas progresivas
//     hints: {
//       enableProgressiveHints: true,
//       maxHintsPerWord: 3,
//       hintDelay: 45000, // 45 segundos - conceptos más complejos
//       customHints: {
//         "FILOSOFIA": [
//           "Disciplina académica que estudia la realidad y el conocimiento",
//           "Literalmente significa 'amor a la sabiduría' en griego",
//           "Mill fue uno de sus grandes representantes en el siglo XIX"
//         ],
//         "ETICA": [
//           "Rama que estudia el bien y el mal en las acciones",
//           "Se pregunta '¿qué debemos hacer?' en situaciones morales",
//           "El utilitarismo es una de sus corrientes principales"
//         ],
//         "LIBERTAD": [
//           "Mill escribió una obra famosa 'Sobre la...' en 1859",
//           "Capacidad de actuar sin coerción externa",
//           "Mill defendió la de expresión y pensamiento"
//         ],
//         "IMPARCIALIDAD": [
//           "Actitud del 'espectador imparcial' en el utilitarismo",
//           "Evaluar sin favorecer nuestros propios intereses",
//           "Esencial para la moralidad utilitarista según Mill"
//         ],
//         "CONSECUENCIAS": [
//           "El utilitarismo es una ética consecuencialista",
//           "Son los resultados de nuestras acciones",
//           "Para Mill, determinan si algo es moralmente correcto"
//         ],
//         "INTELECTUAL": [
//           "Tipo de placer superior según Mill",
//           "Relacionado con la mente y el pensamiento",
//           "Arte, filosofía y conocimiento proporcionan este tipo de placer"
//         ],
//         "DECISION": [
//           "Acto de elegir entre alternativas",
//           "En el utilitarismo debe maximizar bienestar general",
//           "Requiere evaluar cuidadosamente las consecuencias"
//         ],
//         "ALTRUISMO": [
//           "Preocupación genuina por el bienestar de otros",
//           "Opuesto al egoísmo",
//           "El utilitarismo es fundamentalmente altruista según Mill"
//         ],
//         "DOLOR": [
//           "Lo opuesto a la felicidad para Mill",
//           "El utilitarismo busca minimizarlo",
//           "Junto con el sufrimiento, es lo que debemos evitar"
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
//       strictMode: true // Para conceptos filosóficos precisos
//     },
    
//     // Conexiones conceptuales para aprendizaje
//     conceptualConnections: {
//       "FELICIDAD": "Objetivo último del utilitarismo de Mill",
//       "ETICA-CONSECUENCIAS": "Evaluamos la moralidad por los resultados",
//       "LIBERTAD-IMPARCIALIDAD": "Libertad individual con consideración de otros",
//       "INTELECTUAL-FILOSOFIA": "Los placeres superiores incluyen la reflexión filosófica",
//       "ALTRUISMO-DECISION": "Las decisiones éticas deben considerar el bienestar de todos"
//     }
//   };

//   // Validación mejorada de la configuración
//   const config = window.CROSSWORD_CONFIG;
//   const errors = [];
//   const warnings = [];
  
//   console.log('🔍 Validando configuración del crucigrama de Utilitarismo...');
  
//   // Validar campos obligatorios
//   if (!config.title || config.title.trim().length === 0) {
//     errors.push("Título vacío o inválido");
//   }
  
//   if (!config.central || config.central.trim().length < 4) {
//     errors.push("Palabra central debe tener al menos 4 letras");
//   } else if (config.central.length > 15) {
//     warnings.push("Palabra central muy larga, podría afectar el diseño móvil");
//   }
  
//   if (!config.entries || !Array.isArray(config.entries) || config.entries.length === 0) {
//     errors.push("Debe haber al menos una palabra horizontal");
//   }
  
//   // Validar cada entrada con más detalle
//   const usedCrossIndices = new Set();
//   const philosophicalTerms = ["ETICA", "FILOSOFIA", "MORAL", "BIEN", "MAL", "LIBERTAD", "JUSTICIA", "FELICIDAD"];
  
//   config.entries.forEach((entry, index) => {
//     if (!entry.answer || entry.answer.trim().length === 0) {
//       errors.push(`Entrada ${index + 1}: respuesta vacía`);
//     } else if (entry.answer.trim().length < 4) {
//       warnings.push(`Entrada ${index + 1}: respuesta muy corta para conceptos filosóficos`);
//     }
    
//     // Verificar relevancia filosófica
//     const isPhilosophical = philosophicalTerms.some(term => 
//       entry.answer.toUpperCase().includes(term) || 
//       term.includes(entry.answer.toUpperCase()) ||
//       entry.answer.length >= 7 // Palabras largas suelen ser conceptos específicos
//     );
    
//     if (!isPhilosophical && entry.answer.length < 7) {
//       warnings.push(`Entrada ${index + 1}: "${entry.answer}" - verificar relevancia filosófica`);
//     }
    
//     if (!entry.clue || entry.clue.trim().length < 20) {
//       errors.push(`Entrada ${index + 1}: pista muy corta para concepto filosófico (mínimo 20 caracteres)`);
//     } else if (entry.clue.trim().length > 250) {
//       warnings.push(`Entrada ${index + 1}: pista muy larga para móviles (máximo recomendado: 250 caracteres)`);
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
//         errors.push(`Entrada ${index + 1}: "${entry.answer}" no contiene la letra "${centralLetter}" para cruzar en posición ${entry.crossIndex}`);
//       }
//     }
//   });
  
//   // Validaciones específicas del tema utilitarismo
//   if (!config.central.toUpperCase().includes('FELICIDAD')) {
//     warnings.push("La palabra central no es 'FELICIDAD', verificar que sea apropiada para el utilitarismo");
//   }
  
//   // Verificar conceptos utilitaristas clave
//   const utilitarian_concepts = ["FELICIDAD", "LIBERTAD", "ETICA", "CONSECUENCIAS", "IMPARCIALIDAD"];
//   const included_concepts = config.entries.map(e => e.answer.toUpperCase());
//   const missing_key_concepts = utilitarian_concepts.filter(concept => 
//     !included_concepts.some(answer => answer.includes(concept) || concept.includes(answer))
//   );
  
//   if (missing_key_concepts.length > 2) {
//     warnings.push(`Conceptos utilitaristas importantes ausentes: ${missing_key_concepts.join(', ')}`);
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
//   console.log(`   🧩 Complejidad: ${config.metadata.complexity}`);
  
//   // Estadísticas adicionales
//   const avgClueLength = config.entries.reduce((sum, entry) => sum + entry.clue.length, 0) / config.entries.length;
//   const avgAnswerLength = config.entries.reduce((sum, entry) => sum + entry.answer.length, 0) / config.entries.length;
//   const totalLetters = config.entries.reduce((sum, entry) => sum + entry.answer.length, 0) + config.central.length;
  
//   console.log(`📈 Estadísticas:`);
//   console.log(`   📏 Longitud promedio de pistas: ${avgClueLength.toFixed(1)} caracteres`);
//   console.log(`   📐 Longitud promedio de respuestas: ${avgAnswerLength.toFixed(1)} letras`);
//   console.log(`   🔤 Total de letras en el crucigrama: ${totalLetters}`);
//   console.log(`   ⏱️ Tiempo estimado: ${config.metadata.estimatedTime}`);
//   console.log(`   📚 Tema: ${config.metadata.subject}`);
  
//   // Verificar conceptos filosóficos clave
//   const philosophicalConcepts = config.entries.map(e => e.answer.toUpperCase());
//   console.log(`🏛️ Conceptos utilitaristas incluidos:`, philosophicalConcepts);
  
//   // Verificar balance de dificultad
//   const shortWords = config.entries.filter(e => e.answer.length <= 6).length;
//   const longWords = config.entries.filter(e => e.answer.length >= 10).length;
//   console.log(`⚖️ Balance de dificultad: ${shortWords} palabras cortas, ${longWords} palabras largas`);
  
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
//       console.log('💡 Sistema de pistas configurado:');
//       Object.entries(config.hints.customHints).forEach(([word, hints]) => {
//         console.log(`  ${word}:`, hints.length + ' pistas');
//       });
//     }
    
//     // Mostrar conexiones conceptuales
//     if (config.conceptualConnections) {
//       console.log('🔗 Conexiones conceptuales:', config.conceptualConnections);
//     }
//   }
  
//   // Verificar integridad del crucigrama
//   console.log('🧩 Verificando integridad estructural del crucigrama...');
//   const centralWord = config.central;
//   let crosswordValid = true;
//   let structuralIssues = [];
  
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
//       console.error(`❌ Error estructural en entrada ${index + 1}: "${entry.answer}" no contiene "${expectedLetter}"`);
//       structuralIssues.push(`${entry.answer} vs ${expectedLetter}`);
//       crosswordValid = false;
//     } else if (actualLetterPositions.length === 1) {
//       console.log(`✅ Entrada ${index + 1}: "${entry.answer}" cruza correctamente con "${expectedLetter}" en posición ${actualLetterPositions[0]}`);
//     } else {
//       console.warn(`⚠️  Entrada ${index + 1}: "${entry.answer}" tiene múltiples "${expectedLetter}" en posiciones ${actualLetterPositions.join(', ')} - verificar posición de cruce óptima`);
//     }
//   });
  
//   // Verificar que todas las letras de la palabra central estén utilizadas
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
//     console.log('🎊 ¡Crucigrama estructuralmente perfecto!');
//   } else if (crosswordValid) {
//     console.log('✅ Crucigrama estructuralmente válido (con letras centrales opcionales sin usar)');
//   } else {
//     console.error('💥 Errores estructurales críticos en el crucigrama:', structuralIssues);
//   }
  
//   // Verificar calidad educativa
//   console.log('📚 Evaluando calidad educativa...');
//   const educationalScore = {
//     conceptCoverage: (included_concepts.length / utilitarian_concepts.length) * 100,
//     averageClueQuality: avgClueLength >= 20 ? 'Buena' : 'Mejorable',
//     difficulty: config.metadata.difficulty,
//     ageAppropriate: config.metadata.educationalLevel === '15-18 años' ? 'Sí' : 'Verificar'
//   };
  
//   console.log('📊 Puntuación educativa:', educationalScore);

// } catch (error) {
//   console.error('❌ Error cargando configuración del crucigrama de utilitarismo:', error);
  
//   // Configuración de fallback mínima para evitar crashes
//   window.CROSSWORD_CONFIG = {
//     title: "Error en configuración - Utilitarismo",
//     central: "ERROR",
//     entries: [
//       {
//         answer: "PROBLEMA",
//         clue: "Error en la configuración del crucigrama de utilitarismo",
//         crossIndex: 0
//       }
//     ],
//     promptText: "Error en configuración:",
//     sounds: {},
//     options: {},
//     educational: {
//       introduction: "Error: No se pudo cargar la configuración del crucigrama de utilitarismo",
//       conclusion: "Por favor, reporta este error al administrador del sistema"
//     },
//     metadata: {
//       version: "fallback_utilitarismo",
//       error: true,
//       errorTime: new Date().toISOString(),
//       errorDetails: error.message
//     }
//   };
  
//   console.log('🚨 Configuración de emergencia cargada para utilitarismo');
//   // Re-lanzar el error para que el sistema lo maneje
//   throw new Error(`Error en crucigrama de utilitarismo: ${error.message}`);
// }

// crossword_config.js (versión corregida y compatible con Firebase)
console.log('🎯 Iniciando carga de configuración del crucigrama de Utilitarismo...');
const configStartTime = performance.now();

window.CROSSWORD_CONFIG = {
  title: "Utilitarismo de John Stuart Mill - La Mayor Felicidad para el Mayor Número",
  central: "FELICIDAD", // 9 letras (ideal 6-8, válido 3-12)
  entries: [
    {
      answer: "FILOSOFIA",
      clue: "Disciplina que estudia los principios fundamentales de la moral y la búsqueda del bien",
      crossIndex: 0
    },
    {
      answer: "ETICA",
      clue: "Rama de la filosofía que estudia lo correcto e incorrecto en el comportamiento humano",
      crossIndex: 1
    },
    {
      answer: "LIBERTAD",
      clue: "Capacidad de actuar según la propia voluntad, defendida por Mill en su famosa obra",
      crossIndex: 2
    },
    {
      answer: "IMPARCIAL",
      clue: "Actitud de evaluar las consecuencias sin favorecer a ninguna persona en particular",
      crossIndex: 3
    },
    {
      answer: "CONSECUENCIAS",
      clue: "Resultados de nuestras acciones que determinan si son moralmente correctas",
      crossIndex: 4
    },
    {
      answer: "INTELECTUAL",
      clue: "Tipo de placer superior que distingue a los humanos de otros animales",
      crossIndex: 5
    },
    {
      answer: "DECISION",
      clue: "Acto de elegir entre alternativas evaluando cuál maximiza el bienestar general",
      crossIndex: 6
    },
    {
      answer: "ALTRUISMO",
      clue: "Preocupación genuina por el bienestar de otros, no solo por el propio",
      crossIndex: 7
    },
    {
      answer: "DOLOR",
      clue: "Lo opuesto a la felicidad que el utilitarismo busca minimizar en el mundo",
      crossIndex: 8
    }
  ],
  promptText: "Escribe la palabra completa (sin espacios ni acentos):",
  sounds: {
    correct: "sound/collect_points.mp3",
    wrong: "sound/negative_beep.mp3",
    complete: "sound/fin_caza.mp3"
  },
  options: {
    showHints: true,
    autoSelectNext: true,
    allowSkip: false,
    caseSensitive: false,
    showProgressBar: true,
    enableTimer: true
  },
  educational: {
    introduction: "El utilitarismo evalúa la moralidad por sus consecuencias: busca la mayor felicidad para el mayor número.",
    conclusion: "Mill distinguió entre placeres superiores e inferiores y defendió la imparcialidad como base de una sociedad justa.",
    keyWords: ["utilitarismo", "felicidad", "consecuencias", "imparcialidad", "altruismo", "libertad"]
  },
  metadata: {
    version: "2.0_tema_secundaria",
    created: new Date().toISOString(),
    theme: "utilitarismo-mill-secundaria",
    totalWords: 9,
    difficulty: "intermediate",
    targetAudience: "estudiantes-secundaria",
    educationalLevel: "15-18 años"
  }
};

// === Validación estándar mínima (solo estructura base) ===
(function validateCrosswordConfig(config){
  const errors = [];
  const warnings = [];

  // Título
  if (!config.title || config.title.trim().length === 0) {
    errors.push("Título vacío o inválido");
  }

  // Palabra central
  if (!config.central || config.central.trim().length < 3) {
    errors.push("Palabra central debe tener al menos 3 letras");
  }

  // Entradas
  if (!Array.isArray(config.entries) || config.entries.length === 0) {
    errors.push("Debe haber al menos una entrada");
  } else {
    // Reglas del crucigrama educativo
    if (config.central && config.entries.length !== config.central.length) {
      warnings.push(`Se recomiendan ${config.central.length} entradas (1 por letra de "${config.central}"). Actual: ${config.entries.length}`);
    }

    const used = new Set();
    config.entries.forEach((e, i) => {
      if (!e.answer || e.answer.trim().length < 5 || e.answer.trim().length > 12) {
        errors.push(`Entrada ${i + 1}: longitud de "answer" fuera de 5–12`);
      }
      if (!e.clue || e.clue.trim().length < 15 || e.clue.trim().length > 300) {
        errors.push(`Entrada ${i + 1}: "clue" debe tener entre 15 y 300 caracteres`);
      }
      if (typeof e.crossIndex !== "number" || e.crossIndex < 0 || (config.central && e.crossIndex >= config.central.length)) {
        errors.push(`Entrada ${i + 1}: "crossIndex" fuera de rango`);
      } else {
        if (used.has(e.crossIndex)) {
          errors.push(`Entrada ${i + 1}: "crossIndex" ${e.crossIndex} repetido`);
        }
        used.add(e.crossIndex);
      }
      // Debe contener la letra correspondiente de la central
      if (config.central && typeof e.crossIndex === "number" && e.answer) {
        const letter = config.central[e.crossIndex].toUpperCase();
        if (!e.answer.toUpperCase().includes(letter)) {
          errors.push(`Entrada ${i + 1}: "${e.answer}" no contiene la letra "${letter}" para el cruce`);
        }
      }
    });

    // Deben usarse exactamente todas las posiciones de la central
    if (config.central && used.size !== config.central.length) {
      warnings.push(`Se recomienda utilizar todas las posiciones 0..${config.central.length - 1}. Usadas: ${[...used].sort().join(", ")}`);
    }
  }

  // Resultado en consola
  if (warnings.length) {
    console.warn("⚠️ Advertencias de configuración:", warnings);
  }
  if (errors.length) {
    console.error("❌ Errores de configuración:", errors);
  }

  const configLoadTime = performance.now() - configStartTime;
  console.log(`✅ Configuración del crucigrama validada y cargada en ${configLoadTime.toFixed(2)}ms`);
})(window.CROSSWORD_CONFIG);
