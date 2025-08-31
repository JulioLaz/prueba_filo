// // Config del crucigrama para el tema Ética y Moral
// window.CROSSWORD_CONFIG = {
//   slug: "etica",             // para guardar progreso: tema.<slug>.cruci
//   title: "Ética y moral",
//   central: "ETICAYMORAL",    // palabra vertical (sin espacios)
//   sounds: {
//     ok:  "sound/collect_points.mp3",
//     bad: "sound/negative_beep.mp3"
//   },
//   // Cada palabra horizontal:
//   // row: índice dentro de la palabra vertical (0..central.length-1)
//   // answer: palabra a completar (sin espacios)
//   // crossIndex: en qué posición de 'answer' cae la letra que cruza la vertical
//   // clue: la pregunta
//   words: [
//     { row: 0,  answer: "EMPATIA",        crossIndex: 0, clue: "Capacidad de ponerse en el lugar del otro." },
//     { row: 1,  answer: "RESPETO",        crossIndex: 4, clue: "Reconocer al otro como fin y no como medio." },
//     { row: 2,  answer: "INTENCION",      crossIndex: 0, clue: "Para Kant, ¿qué valora la ética para juzgar una acción?" },
//     { row: 3,  answer: "CONSECUENCIAS",  crossIndex: 0, clue: "¿Qué evalúa principalmente el utilitarismo?" },
//     { row: 4,  answer: "AUTONOMIA",      crossIndex: 0, clue: "Capacidad de darse a sí mismo la ley." },
//     { row: 5,  answer: "LEY",            crossIndex: 2, clue: "Norma que expresa lo permitido y lo prohibido." },
//     { row: 6,  answer: "MAXIMA",         crossIndex: 0, clue: "En Kant: regla subjetiva de la acción." },
//     { row: 7,  answer: "OBLIGACION",     crossIndex: 0, clue: "Deber que impone la ley moral." },
//     { row: 8,  answer: "RESPONSABILIDAD",crossIndex: 0, clue: "Responder por los actos propios." },
//     { row: 9,  answer: "ARISTOTELES",    crossIndex: 0, clue: "Filósofo de la ética de la virtud." },
//     { row: 10, answer: "LIBERTAD",       crossIndex: 0, clue: "Condición de posibilidad de la responsabilidad." }
//   ]
// };
// themes/etica/crossword_config.js
// Estructura simple: palabra central vertical + palabras horizontales que cruzan
// window.CROSSWORD_CONFIG = {
//   title: "Ética y moral",
//   // Se normaliza a mayúsculas sin acentos/espacios para el tablero
//   central: "ETICAYMORAL",   // “ÉTICA Y MORAL”
//   // Cada entrada: answer (solo letras), clue, crossIndex = índice (0-based) de la letra de 'central' donde cruza,
//   // offset = desplazamiento hacia la izquierda (negativo) o derecha (positivo) desde la columna del cruce.
//   // El motor puede calcular la posición H en base a (fila = índice del cruce en central).
//   words: [
//     { answer: "DEONTOLOGIA", clue: "Ética del deber (Kant): normas universales y obligación moral.", crossIndex: 1, offset: -4 },
//     { answer: "UTILITARISMO", clue: "Corriente que busca el mayor bien para el mayor número (Bentham/Mill).", crossIndex: 3, offset: -5 },
//     { answer: "VIRTUD", clue: "Enfoque aristotélico: hábito excelente que perfecciona el carácter.", crossIndex: 5, offset: -2 },
//     { answer: "AUTONOMIA", clue: "Capacidad de darse a sí mismo la ley moral.", crossIndex: 7, offset: -3 },
//     { answer: "DILEMA", clue: "Situación con conflictos de valores sin solución obvia.", crossIndex: 9, offset: -1 },
//   ],
//   sounds: {
//     correct: "sound/collect_points.mp3",
//     wrong: "sound/negative_beep.mp3",
//     level: "sound/fin_parrafo.mp3",
//     done:  "sound/fin_caza.mp3"
//   }
// };

// themes/etica/crossword_config.js



// window.CROSSWORD_CONFIG = {
//   title: "Ética y moral",
//   central: "ETICAyMORAL", // la columna vertical central (se muestra completa)
//   // Palabras horizontales. El motor intentará cruzarlas solo.
//   // Si querés forzar fila, podés pasar crossIndex (índice de la letra del central donde cruza).
//   entries: [
//     { answer: "DEONTOLOGIA", clue: "Enfoque ético centrado en el deber y las normas." },
//     { answer: "UTILITARISMO", clue: "Doctrina que evalúa los actos por sus consecuencias y la mayor felicidad." },
//     { answer: "VIRTUD", clue: "Concepto clave en Aristóteles: hábito excelente que perfecciona al agente." },
//     { answer: "AUTONOMIA", clue: "Capacidad de darse a sí mismo la ley moral (Kant)." },
//     { answer: "DILEMA", clue: "Situación de conflicto moral entre opciones con razones de peso." },
//     { answer: "NORMAS", clue: "Reglas o pautas que orientan la conducta en una comunidad." }
//   ],
//   // opcional
//   promptText: "Escribí la palabra completa:"
// };

// themes/etica/crossword_config.js - Configuración robusta y validada
console.log('📋 Iniciando carga de configuración del crucigrama...');
const configStartTime = performance.now();

try {
  window.CROSSWORD_CONFIG = {
    title: "Ética y Moral",
    
    // Palabra central vertical (se normaliza automáticamente a "ETICA")
    central: "ÉTICA",
    
    // Palabras horizontales que cruzan con la central
    // crossIndex especifica qué letra de la palabra central usar (0-4 para ETICA)
    entries: [
      {
        answer: "EXISTENCIALISMO",
        clue: "Corriente filosófica que enfatiza la existencia, libertad y responsabilidad individual",
        crossIndex: 0  // Cruce en la 'E' de ETICA
      },
      {
        answer: "TELEOLOGÍA", 
        clue: "Estudio de los fines y propósitos, especialmente en ética aristotélica",
        crossIndex: 1  // Cruce en la 'T' de ETICA
      },
      {
        answer: "IMPERATIVO",
        clue: "Mandato categórico en la filosofía moral de Kant", 
        crossIndex: 2  // Cruce en la 'I' de ETICA
      },
      {
        answer: "CASUÍSTICA",
        clue: "Método de resolver problemas morales aplicando principios a casos específicos",
        crossIndex: 3  // Cruce en la 'C' de ETICA
      },
      {
        answer: "ALTRUISMO",
        clue: "Principio moral de preocuparse por el bienestar de otros",
        crossIndex: 4  // Cruce en la 'A' de ETICA
      }
    ],
    
    // Texto que aparece en el prompt de respuesta
    promptText: "Escribe la palabra completa (sin espacios ni acentos):",
    
    // Configuración de sonidos (rutas relativas desde crossword.html)
    sounds: {
      correct: "sound/collect_points.mp3",
      wrong: "sound/negative_beep.mp3", 
      complete: "sound/fin_caza.mp3"
    },
    
    // Opciones adicionales del juego
    options: {
      showHints: true,
      autoSelectNext: true,
      allowSkip: false,
      caseSensitive: false
    },
    
    // Metadatos para debug
    metadata: {
      version: "1.0",
      created: new Date().toISOString(),
      theme: "etica",
      totalWords: 5,
      difficulty: "intermediate"
    }
  };

  // Validación de la configuración
  const config = window.CROSSWORD_CONFIG;
  const errors = [];
  
  // Validar campos obligatorios
  if (!config.title || config.title.trim().length === 0) {
    errors.push("Título vacío o inválido");
  }
  
  if (!config.central || config.central.trim().length < 3) {
    errors.push("Palabra central debe tener al menos 3 letras");
  }
  
  if (!config.entries || !Array.isArray(config.entries) || config.entries.length === 0) {
    errors.push("Debe haber al menos una palabra horizontal");
  }
  
  // Validar cada entrada
  config.entries.forEach((entry, index) => {
    if (!entry.answer || entry.answer.trim().length === 0) {
      errors.push(`Entrada ${index}: respuesta vacía`);
    }
    if (!entry.clue || entry.clue.trim().length < 10) {
      errors.push(`Entrada ${index}: pista muy corta`);
    }
    if (typeof entry.crossIndex === 'number' && 
        (entry.crossIndex < 0 || entry.crossIndex >= config.central.length)) {
      errors.push(`Entrada ${index}: crossIndex fuera de rango`);
    }
  });
  
  // Mostrar errores si existen
  if (errors.length > 0) {
    console.error('❌ Errores en la configuración:');
    errors.forEach(error => console.error(`  - ${error}`));
    throw new Error(`Configuración inválida: ${errors.length} errores encontrados`);
  }
  
  const configLoadTime = performance.now() - configStartTime;
  console.log(`✅ Configuración del crucigrama validada y cargada en ${configLoadTime.toFixed(2)}ms`);
  console.log(`📊 Resumen: "${config.title}" - ${config.entries.length} palabras - Central: "${config.central}"`);
  
  // Log para debug (solo en desarrollo)
  if (location.hostname === 'localhost' || location.search.includes('debug=1')) {
    console.log('🔍 Configuración completa:', config);
  }

} catch (error) {
  console.error('❌ Error cargando configuración del crucigrama:', error);
  
  // Configuración de fallback mínima para evitar crashes
  window.CROSSWORD_CONFIG = {
    title: "Error en configuración",
    central: "ERROR",
    entries: [
      {
        answer: "ERROR",
        clue: "Error en la configuración del crucigrama",
        crossIndex: 0
      }
    ],
    promptText: "Error en configuración:",
    sounds: {},
    options: {}
  };
  
  // Re-lanzar el error para que el sistema lo maneje
  throw error;
}