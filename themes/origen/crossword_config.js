console.log('📋 Iniciando carga de configuración del crucigrama...');
const configStartTime = performance.now();

try {
  window.CROSSWORD_CONFIG = {
    title: "Origen de la Filosofía: Conceptos Fundamentales",

    // Palabra central vertical
    central: "MILETO",

    // Palabras horizontales que cruzan con la central
    entries: [
      {
        answer: "MITO",
        clue: "Narración de dioses y héroes que explicaba el origen del mundo antes del pensamiento racional",
        crossIndex: 0 // Cruce en la 'M' de MILETO
      },
      {
        answer: "FILOSOFIA",
        clue: "Amor por la sabiduría; término acuñado por Pitágoras de Samos",
        crossIndex: 1 // Cruce en la 'I' de MILETO
      },
      {
        answer: "LOGOS",
        clue: "Pensamiento racional que reemplazó al mito como forma de explicar la realidad",
        crossIndex: 2 // Cruce en la 'L' de MILETO
      },
      {
        answer: "APEIRON",
        clue: "Principio indefinido e ilimitado propuesto por Anaximandro como origen de todas las cosas",
        crossIndex: 3 // Cruce en la 'E' de MILETO
      },
      {
        answer: "TALES",
        clue: "Primer filósofo de la Historia; propuso el agua como principio de todo lo real",
        crossIndex: 4 // Cruce en la 'T' de MILETO
      },
      {
        answer: "COSMOS",
        clue: "Orden racional del universo que los primeros filósofos buscaban explicar sin recurrir a los dioses",
        crossIndex: 5 // Cruce en la 'O' de MILETO
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
      introduction: "La filosofía occidental nació en el siglo VI a.C. en Mileto, ciudad de Asia Menor, cuando los primeros pensadores buscaron explicaciones racionales al origen del universo.",
      conclusion: "Del mito al logos: el paso de las explicaciones sobrenaturales a las racionales marcó el nacimiento de la filosofía y la ciencia occidental.",
      keyWords: ["arché", "logos", "mito", "presocráticos", "Mileto"]
    },

    metadata: {
      version: "1.0",
      created: new Date().toISOString(),
      theme: "origen-filosofia",
      totalWords: 6,
      difficulty: "beginner-intermediate",
      targetAudience: "estudiantes-secundaria",
      educationalLevel: "14-18 años"
    }
  };

  // Validación
  const config = window.CROSSWORD_CONFIG;
  const errors = [];
  const usedCrossIndices = new Set();

  if (!config.central || config.central.length < 3) errors.push("Palabra central inválida");
  config.entries.forEach((entry, index) => {
    if (!entry.answer || entry.answer.length < 3) errors.push(`Entrada ${index + 1}: respuesta inválida`);
    if (!entry.clue || entry.clue.length < 10) errors.push(`Entrada ${index + 1}: pista muy corta`);
    if (typeof entry.crossIndex === 'number') {
      if (entry.crossIndex < 0 || entry.crossIndex >= config.central.length) errors.push(`Entrada ${index + 1}: crossIndex fuera de rango`);
      else if (usedCrossIndices.has(entry.crossIndex)) errors.push(`Entrada ${index + 1}: crossIndex duplicado`);
      else usedCrossIndices.add(entry.crossIndex);
    }
  });

  if (errors.length > 0) {
    errors.forEach(e => console.error('  -', e));
    throw new Error(`Configuración inválida: ${errors.length} errores`);
  }

  const configLoadTime = performance.now() - configStartTime;
  console.log(`✅ Crucigrama Origen cargado en ${configLoadTime.toFixed(2)}ms`);
  console.log(`📊 Central: "${config.central}" · ${config.entries.length} palabras`);

} catch (error) {
  console.error('❌ Error cargando crucigrama Origen:', error);
  window.CROSSWORD_CONFIG = {
    title: "Error en configuración",
    central: "ERROR",
    entries: [{ answer: "PROBLEMA", clue: "Error en la configuración del crucigrama", crossIndex: 0 }],
    promptText: "Error:",
    sounds: {}, options: {}, metadata: { version: "fallback", error: true }
  };
  throw error;
}
