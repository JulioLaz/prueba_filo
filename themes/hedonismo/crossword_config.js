console.log('🎯 Iniciando carga de configuración del crucigrama de Hedonismo...');
const configStartTime = performance.now();

try {
  window.CROSSWORD_CONFIG = {
    title: "Hedonismo Filosófico - El Placer como Fundamento de la Vida",
    
    // Palabra central vertical (se normaliza automáticamente)
    central: "PLACER",
    
    // Palabras horizontales que cruzan con la central
    // crossIndex indica qué letra de la central usar (0-5 para PLACER)
    entries: [
      {
        answer: "PRUDENCIA",
        clue: "Sabiduría práctica que permite elegir qué placeres buscar y cuáles evitar",
        crossIndex: 0 // Cruce en la 'P' de PLACER
      },
      {
        answer: "LIBERTAD",
        clue: "Estado de quien no está esclavizado por deseos compulsivos ni temores irracionales",
        crossIndex: 1 // Cruce en la 'L' de PLACER
      },
      {
        answer: "ATARAXIA",
        clue: "Estado de imperturbabilidad y serenidad mental que buscaba Epicuro",
        crossIndex: 2 // Cruce en la 'A' de PLACER
      },
      {
        answer: "CONTEMPLACION",
        clue: "Actividad intelectual que proporciona placer duradero y elevado",
        crossIndex: 3 // Cruce en la 'C' de PLACER
      },
      {
        answer: "EQUILIBRIO",
        clue: "Balance entre satisfacer necesidades y evitar excesos dañinos",
        crossIndex: 4 // Cruce en la 'E' de PLACER
      },
      {
        answer: "REFLEXION",
        clue: "Pensamiento cuidadoso sobre qué nos hace realmente felices",
        crossIndex: 5 // Cruce en la 'R' de PLACER
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
      introduction: "El hedonismo es una corriente filosófica que considera el placer como el fundamento de una vida plena, pero no cualquier placer...",
      conclusion: "Epicuro nos enseñó que la verdadera felicidad no está en los placeres inmediatos, sino en la serenidad y la sabiduría.",
      keyWords: ["hedonismo", "epicuro", "ataraxia", "placer", "serenidad", "autarquía"],
      philosophicalContext: "Esta filosofía influyó en el desarrollo del pensamiento occidental sobre la felicidad y el bienestar."
    },
    
    // Información histórica relevante
    historical: {
      philosopher: "Epicuro de Samos (341-270 a.C.)",
      school: "El Jardín - Atenas",
      keyPrinciple: "El placer como ausencia de dolor (aponia) y perturbación (ataraxia)",
      modernRelevance: "Sus ideas influyen en la psicología positiva y las terapias de bienestar actuales"
    },
    
    // Conceptos clave para reforzar aprendizaje
    keyConcepts: {
      "Hedonismo Refinado": "Busca placeres duraderos y espirituales, no solo físicos",
      "Hedonismo Vulgar": "Búsqueda descontrolada de placeres inmediatos sin considerar consecuencias",
      "Los Dos Temores": "Miedo a los dioses y miedo a la muerte, que Epicuro buscaba eliminar",
      "Clasificación de Deseos": "Naturales necesarios, naturales no necesarios, y deseos vanos"
    },
    
    // Metadatos para debug y analytics
    metadata: {
      version: "2.0_hedonismo_secundaria",
      created: new Date().toISOString(),
      theme: "hedonismo-filosofico-secundaria",
      totalWords: 6,
      difficulty: "intermediate",
      targetAudience: "estudiantes-secundaria",
      educationalLevel: "15-18 años",
      subject: "filosofía",
      topics: ["hedonismo", "epicureísmo", "ética", "filosofía antigua", "bienestar"],
      estimatedTime: "10-15 minutos",
      language: "español"
    },
    
    // Configuración específica para móviles
    mobile: {
      optimizeForTouch: true,
      responsiveGrid: true,
      enlargedButtons: true,
      swipeGestures: false
    },
    
    // Sistema de pistas progresivas
    hints: {
      enableProgressiveHints: true,
      maxHintsPerWord: 2,
      hintDelay: 30000, // 30 segundos antes de mostrar primera pista
      customHints: {
        "PRUDENCIA": [
          "Virtud intelectual que nos ayuda a tomar buenas decisiones",
          "Para Epicuro, era clave para elegir los placeres correctos"
        ],
        "LIBERTAD": [
          "Estado opuesto a la esclavitud de las pasiones",
          "Para los epicúreos, implica autosuficiencia emocional"
        ],
        "ATARAXIA": [
          "Palabra griega que significa 'sin perturbación'",
          "Estado mental de perfecta tranquilidad buscado por Epicuro"
        ],
        "CONTEMPLACION": [
          "Actividad mental que proporciona placeres elevados",
          "Observación reflexiva de la realidad y el conocimiento"
        ],
        "EQUILIBRIO": [
          "Punto medio entre carencia y exceso",
          "Armonía entre diferentes aspectos de la vida"
        ],
        "REFLEXION": [
          "Actividad mental que examina nuestros pensamientos",
          "Pensamiento profundo sobre lo que realmente importa"
        ]
      }
    },
    
    // Validaciones adicionales
    validation: {
      checkSpelling: true,
      allowAccents: false,
      allowSpaces: false,
      caseSensitive: false,
      acceptPartialMatches: false
    }
  };

  // Validación mejorada de la configuración
  const config = window.CROSSWORD_CONFIG;
  const errors = [];
  const warnings = [];
  
  console.log('🔍 Validando configuración del crucigrama de Hedonismo...');
  
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
  const philosophicalTerms = ["PLACER", "EPICURO", "HEDONISMO", "ATARAXIA", "PRUDENCIA", "REFLEXION"];
  
  config.entries.forEach((entry, index) => {
    if (!entry.answer || entry.answer.trim().length === 0) {
      errors.push(`Entrada ${index + 1}: respuesta vacía`);
    } else if (entry.answer.trim().length < 3) {
      warnings.push(`Entrada ${index + 1}: respuesta muy corta`);
    }
    
    // Verificar que las respuestas sean conceptos filosóficos apropiados
    if (!philosophicalTerms.some(term => 
      entry.answer.toUpperCase().includes(term) || 
      term.includes(entry.answer.toUpperCase()) ||
      entry.answer.length >= 6 // Palabras largas suelen ser conceptos importantes
    )) {
      // Solo advertencia, no error
      console.log(`Info: "${entry.answer}" - verificar relevancia filosófica`);
    }
    
    if (!entry.clue || entry.clue.trim().length < 15) {
      errors.push(`Entrada ${index + 1}: pista muy corta (mínimo 15 caracteres)`);
    } else if (entry.clue.trim().length > 200) {
      warnings.push(`Entrada ${index + 1}: pista muy larga para móviles`);
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
    
    // Validar que la letra de cruce coincida
    if (entry.answer && entry.crossIndex >= 0 && entry.crossIndex < config.central.length) {
      const centralLetter = config.central[entry.crossIndex].toUpperCase();
      if (!entry.answer.toUpperCase().includes(centralLetter)) {
        errors.push(`Entrada ${index + 1}: "${entry.answer}" no contiene la letra "${centralLetter}" para cruzar`);
      }
    }
  });
  
  // Validaciones específicas del tema hedonismo
  if (!config.central.toUpperCase().includes('PLACER')) {
    warnings.push("La palabra central no es 'PLACER', verificar que sea apropiada para el tema hedonismo");
  }
  
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
  console.log(`🎯 Resumen: "${config.title}"`);
  console.log(`   📝 ${config.entries.length} palabras - Central: "${config.central}"`);
  console.log(`   🎯 Nivel: ${config.metadata.difficulty} (${config.metadata.targetAudience})`);
  console.log(`   🧠 Audiencia: ${config.metadata.educationalLevel}`);
  console.log(`   📱 Optimizado para móviles: ${config.mobile.optimizeForTouch ? 'Sí' : 'No'}`);
  
  // Estadísticas adicionales
  const avgClueLength = config.entries.reduce((sum, entry) => sum + entry.clue.length, 0) / config.entries.length;
  const avgAnswerLength = config.entries.reduce((sum, entry) => sum + entry.answer.length, 0) / config.entries.length;
  const totalLetters = config.entries.reduce((sum, entry) => sum + entry.answer.length, 0) + config.central.length;
  
  console.log(`📈 Estadísticas:`);
  console.log(`   📏 Longitud promedio de pistas: ${avgClueLength.toFixed(1)} caracteres`);
  console.log(`   📐 Longitud promedio de respuestas: ${avgAnswerLength.toFixed(1)} letras`);
  console.log(`   🔤 Total de letras en el crucigrama: ${totalLetters}`);
  console.log(`   ⏱️ Tiempo estimado: ${config.metadata.estimatedTime}`);
  
  // Verificar conceptos filosóficos clave
  const philosophicalConcepts = config.entries.map(e => e.answer.toUpperCase());
  console.log(`🏛️ Conceptos filosóficos incluidos:`, philosophicalConcepts);
  
  // Log para debug (solo en desarrollo)
  if (location.hostname === 'localhost' || location.search.includes('debug=1')) {
    console.log('🔍 Configuración completa:', config);
    console.table(config.entries.map((entry, i) => ({
      '#': i + 1,
      Respuesta: entry.answer,
      Longitud: entry.answer.length,
      Cruce: entry.crossIndex,
      'Letra Central': config.central[entry.crossIndex],
      'Pista (inicio)': entry.clue.substring(0, 30) + '...'
    })));
    
    // Mostrar pistas de ayuda si están configuradas
    if (config.hints && config.hints.customHints) {
      console.log('💡 Pistas configuradas:');
      Object.entries(config.hints.customHints).forEach(([word, hints]) => {
        console.log(`  ${word}:`, hints);
      });
    }
  }
  
  // Verificar integridad del crucigrama
  console.log('🧩 Verificando integridad del crucigrama...');
  const centralWord = config.central;
  let crosswordValid = true;
  
  config.entries.forEach((entry, index) => {
    const expectedLetter = centralWord[entry.crossIndex];
    const actualLetterPositions = [];
    
    // Encontrar todas las posiciones donde aparece la letra en la palabra de respuesta
    for (let i = 0; i < entry.answer.length; i++) {
      if (entry.answer[i].toUpperCase() === expectedLetter.toUpperCase()) {
        actualLetterPositions.push(i);
      }
    }
    
    if (actualLetterPositions.length === 0) {
      console.error(`❌ Error en entrada ${index + 1}: "${entry.answer}" no contiene "${expectedLetter}"`);
      crosswordValid = false;
    } else if (actualLetterPositions.length === 1) {
      console.log(`✅ Entrada ${index + 1}: "${entry.answer}" cruza correctamente con "${expectedLetter}"`);
    } else {
      console.warn(`⚠️  Entrada ${index + 1}: "${entry.answer}" tiene múltiples "${expectedLetter}" - verificar posición de cruce`);
    }
  });
  
  if (crosswordValid) {
    console.log('🎊 ¡Crucigrama estructuralmente válido!');
  } else {
    console.error('💥 Hay errores estructurales en el crucigrama');
  }

} catch (error) {
  console.error('❌ Error cargando configuración del crucigrama:', error);
  
  // Configuración de fallback mínima para evitar crashes
  window.CROSSWORD_CONFIG = {
    title: "Error en configuración - Hedonismo",
    central: "ERROR",
    entries: [
      {
        answer: "PROBLEMA",
        clue: "Error en la configuración del crucigrama de hedonismo",
        crossIndex: 0
      }
    ],
    promptText: "Error en configuración:",
    sounds: {},
    options: {},
    educational: {
      introduction: "Error: No se pudo cargar la configuración del crucigrama",
      conclusion: "Por favor, reporta este error al administrador"
    },
    metadata: {
      version: "fallback_hedonismo",
      error: true,
      errorTime: new Date().toISOString()
    }
  };
  
  console.log('🚨 Configuración de emergencia cargada para hedonismo');
  // Re-lanzar el error para que el sistema lo maneje
  throw new Error(`Error en crucigrama de hedonismo: ${error.message}`);
}