// // js/crossword_engine.js - Motor completo con UI moderna

// console.log('🎯 Iniciando Crossword Engine v3.0');
// const startTime = performance.now();

// // Protección contra errores de extensiones
// if (!window.__EXT_ERR_GUARD__) {
//   window.__EXT_ERR_GUARD__ = true;
//   window.addEventListener('error', (e) => {
//     const msg = String(e.message || '');
//     if (msg.includes('A listener indicated an asynchronous response')) {
//       e.preventDefault();
//       return false;
//     }
//   });
// }

// (function() {
//   // ===== CONFIGURACIÓN Y UTILIDADES =====
//   const SOUNDS = {
//     OK: "sound/collect_points.mp3",
//     ERROR: "sound/negative_beep.mp3",
//     COMPLETE: "sound/fin_caza.mp3",
//     TYPE: "sound/click.mp3"
//   };

//   let muted = false;
//   let gameState = {
//     solved: new Set(),
//     currentWordId: null,
//     currentAnswer: "",
//     score: 0,
//     attempts: 0,
//     correctAttempts: 0
//   };

//   // Variables globales
//   let layout = null;
//   let uiElements = {};

//   // Reproducir sonidos con manejo de errores
//   const playSound = (file) => {
//     if (muted) return;
//     try {
//       const audio = new Audio(file);
//       audio.volume = 0.2;
//       audio.play().catch(() => {});
//     } catch (e) {}
//   };

//   // Normalizar texto (sin acentos, mayúsculas)
//   const normalizeText = (text) => {
//     return String(text || "")
//       .toUpperCase()
//       .normalize("NFD")
//       .replace(/\p{Diacritic}/gu, "")
//       .replace(/[^A-ZÑÁÉÍÓÚÜ]/gi, "")
//       .replace(/Á/g, "A").replace(/É/g, "E").replace(/Í/g, "I")
//       .replace(/Ó/g, "O").replace(/Ú/g, "U").replace(/Ñ/g, "N");
//   };

//   // Obtener tema desde URL
//   const getCurrentTheme = () => {
//     const params = new URLSearchParams(location.search);
//     return params.get("tema") || params.get("theme") || "sartre";
//   };

//   // ===== GUARDADO DE PROGRESO =====
//   function saveProgress(data) {
//     const tema = getCurrentTheme();
//     const keys = [`tema.${tema}.cruci`, `tema.${tema}.cross`];
    
//     console.log('💾 Guardando progreso:', data);
    
//     keys.forEach(key => {
//       try {
//         const existing = JSON.parse(sessionStorage.getItem(key) || '{}');
//         const updated = {
//           total: data.total ?? existing.total ?? 0,
//           solved: data.solved ?? existing.solved ?? 0,
//           score: data.score ?? existing.score ?? 0,
//           attempts: data.attempts ?? existing.attempts ?? 0,
//           completed: data.completed ?? existing.completed ?? false,
//           lastUpdated: new Date().toISOString()
//         };
//         sessionStorage.setItem(key, JSON.stringify(updated));
//         console.log(`✅ Progreso guardado en ${key}:`, updated);
//       } catch (e) {
//         console.error('❌ Error guardando en', key, ':', e);
//       }
//     });
//   }

//   // ===== ALGORITMO DE LAYOUT MEJORADO =====
//   function buildCrosswordLayout(config) {
//     console.log('🏗️ Construyendo layout del crucigrama...');
    
//     const central = normalizeText(config.central).replace(/\s+/g, "");
//     const rows = central.length;
    
//     if (!config.entries || !Array.isArray(config.entries)) {
//       throw new Error('Config debe tener un array "entries"');
//     }

//     console.log(`📐 Palabra central: "${central}" (${rows} letras)`);

//     const usedRows = new Set();
//     const words = [];

//     config.entries.forEach((entry, index) => {
//       if (!entry.answer || !entry.clue) {
//         console.warn(`⚠️ Entrada ${index} incompleta:`, entry);
//         return;
//       }

//       const answer = normalizeText(entry.answer);
//       let crossRow = -1;
//       let wordIndex = -1;

//       if (typeof entry.crossIndex === "number" && entry.crossIndex >= 0 && entry.crossIndex < rows) {
//         const centralChar = central[entry.crossIndex];
//         wordIndex = answer.indexOf(centralChar);
//         if (wordIndex !== -1) {
//           crossRow = entry.crossIndex;
//         }
//       }

//       if (crossRow === -1) {
//         for (let i = 0; i < central.length; i++) {
//           const char = central[i];
//           const idx = answer.indexOf(char);
//           if (idx !== -1 && !usedRows.has(i)) {
//             crossRow = i;
//             wordIndex = idx;
//             break;
//           }
//         }
//       }

//       if (crossRow === -1) {
//         for (let i = 0; i < rows; i++) {
//           if (!usedRows.has(i)) {
//             crossRow = i;
//             wordIndex = 0;
//             break;
//           }
//         }
//       }

//       if (crossRow === -1) {
//         crossRow = 0;
//         wordIndex = 0;
//       }

//       usedRows.add(crossRow);

//       const word = {
//         id: `word_${index}`,
//         answer: answer,
//         clue: entry.clue,
//         row: crossRow,
//         startCol: -wordIndex,
//         endCol: -wordIndex + answer.length - 1,
//         crossIndex: wordIndex,
//         difficulty: answer.length <= 6 ? 'fácil' : answer.length <= 10 ? 'medio' : 'difícil'
//       };

//       words.push(word);
//       console.log(`✅ Palabra ${index}: "${answer}" en fila ${crossRow}`);
//     });

//     let minCol = 0, maxCol = 0;
//     words.forEach(word => {
//       minCol = Math.min(minCol, word.startCol);
//       maxCol = Math.max(maxCol, word.endCol);
//     });

//     const cols = maxCol - minCol + 1;
//     const colOffset = -minCol;
//     const centralCol = colOffset;

//     const cellMap = new Map();

//     // Palabra central (vertical)
//     for (let r = 0; r < rows; r++) {
//       const key = `${r},${centralCol}`;
//       cellMap.set(key, {
//         char: central[r],
//         isCentral: true,
//         isHorizontal: false,
//         wordId: null,
//         wordIndex: -1
//       });
//     }

//     // Palabras horizontales
//     words.forEach(word => {
//       for (let i = 0; i < word.answer.length; i++) {
//         const col = word.startCol + i + colOffset;
//         const key = `${word.row},${col}`;
        
//         const existing = cellMap.get(key) || {};
//         cellMap.set(key, {
//           ...existing,
//           char: word.answer[i],
//           isHorizontal: true,
//           wordId: word.id,
//           wordIndex: i
//         });
//       }
//     });

//     return { rows, cols, centralCol, colOffset, words, cellMap };
//   }

//   // ===== RENDERIZADO DEL TABLERO =====
//   function renderBoard(layoutData) {
//     console.log('🎨 Renderizando tablero...');
    
//     const gridEl = document.getElementById("grid");
//     if (!gridEl) throw new Error('No se encontró elemento #grid');

//     gridEl.style.gridTemplateColumns = `repeat(${layoutData.cols}, 1fr)`;
//     gridEl.innerHTML = "";

//     // Crear celdas
//     for (let row = 0; row < layoutData.rows; row++) {
//       for (let col = 0; col < layoutData.cols; col++) {
//         const key = `${row},${col}`;
//         const cellData = layoutData.cellMap.get(key);

//         const cellEl = document.createElement("div");
//         cellEl.className = "cell";
//         cellEl.dataset.row = row;
//         cellEl.dataset.col = col;
//         cellEl.dataset.key = key;

//         if (!cellData) {
//           cellEl.classList.add("empty");
//           cellEl.style.visibility = "hidden";
//         } else {
//           cellEl.dataset.char = cellData.char;
          
//           if (cellData.isCentral) {
//             cellEl.classList.add("central");
//             cellEl.textContent = cellData.char;
//             cellEl.style.pointerEvents = "none";
//           }
          
//           if (cellData.isHorizontal) {
//             cellEl.classList.add("h");
//             cellEl.dataset.wordId = cellData.wordId;
//             cellEl.dataset.wordIndex = cellData.wordIndex;
            
//             if (!cellData.isCentral) {
//               cellEl.style.cursor = "pointer";
//             }
//           }
//         }

//         gridEl.appendChild(cellEl);
//       }
//     }

//     console.log('✅ Tablero renderizado');
//     return gridEl;
//   }

//   // ===== ACTUALIZAR HUD =====
//   function updateHUD() {
//     if (!layout) return;
    
//     const totalWords = layout.words.length;
//     const solvedCount = gameState.solved.size;
    
//     if (uiElements.prog) uiElements.prog.textContent = `${solvedCount}/${totalWords}`;
//     if (uiElements.score) uiElements.score.textContent = gameState.score;
//     if (uiElements.tries) uiElements.tries.textContent = gameState.attempts;

//     saveProgress({
//       total: totalWords,
//       solved: solvedCount,
//       score: gameState.score,
//       attempts: gameState.attempts,
//       completed: solvedCount >= totalWords
//     });

//     console.log(`📊 HUD actualizado: ${solvedCount}/${totalWords} palabras, ${gameState.score} puntos`);
//   }

//   // ===== MODAL DE COMPLETADO =====
//   function showCompletionModal() {
//     console.log('🏆 Mostrando modal de completado');
    
//     if (!uiElements.completionModal) return;
    
//     const accuracy = gameState.attempts > 0 ? 
//       Math.round((gameState.correctAttempts / gameState.attempts) * 100) : 100;
    
//     if (uiElements.finalScore) uiElements.finalScore.textContent = gameState.score;
//     if (uiElements.finalAccuracy) uiElements.finalAccuracy.textContent = `${accuracy}%`;
    
//     uiElements.completionModal.classList.add('show');
//     playSound(SOUNDS.COMPLETE);
    
//     // Marcar como completado en progreso
//     saveProgress({
//       total: layout.words.length,
//       solved: gameState.solved.size,
//       score: gameState.score,
//       attempts: gameState.attempts,
//       completed: true
//     });
//   }

//   // ===== UI MODERNA MEJORADA =====
//   function setupModernUI(layoutData) {
//     console.log('🎨 Configurando UI moderna...');

//     // Cache de elementos UI
//     uiElements = {
//       inputSection: document.getElementById("inputSection"),
//       questionText: document.getElementById("questionText"),
//       lengthInfo: document.getElementById("lengthInfo"),
//       difficultyTag: document.getElementById("difficultyTag"),
//       visualInput: document.getElementById("visualInput"),
//       textInput: document.getElementById("textInput"),
//       validation: document.getElementById("validation"),
//       validationIcon: document.getElementById("validationIcon"),
//       validationText: document.getElementById("validationText"),
//       verifyBtn: document.getElementById("verifyBtn"),
//       prog: document.getElementById("prog"),
//       score: document.getElementById("score"),
//       tries: document.getElementById("tries"),
//       muteBtn: document.getElementById("muteBtn"),
//       completionModal: document.getElementById("completionModal"),
//       finalScore: document.getElementById("finalScore"),
//       finalAccuracy: document.getElementById("finalAccuracy")
//     };

//     // Configurar botón de sonido
//     if (uiElements.muteBtn) {
//       uiElements.muteBtn.addEventListener("click", () => {
//         muted = !muted;
//         uiElements.muteBtn.textContent = muted ? "🔇" : "🔊";
//         console.log(`🔊 Sonido ${muted ? 'desactivado' : 'activado'}`);
//       });
//     }

//     // Crear slots visuales para la palabra
//     function createVisualSlots(length) {
//       if (!uiElements.visualInput) return;
      
//       uiElements.visualInput.innerHTML = "";
//       for (let i = 0; i < length; i++) {
//         const slot = document.createElement('div');
//         slot.className = 'letter-slot';
//         slot.dataset.index = i;
//         uiElements.visualInput.appendChild(slot);
//       }
//     }

//     // Actualizar slots visuales
//     function updateVisualSlots(text, correctAnswer = null) {
//       const slots = uiElements.visualInput?.querySelectorAll('.letter-slot') || [];
//       const normalizedText = normalizeText(text);
      
//       slots.forEach((slot, index) => {
//         slot.classList.remove('filled', 'active', 'correct', 'incorrect');
        
//         if (index < normalizedText.length) {
//           slot.textContent = normalizedText[index];
//           slot.classList.add('filled');
          
//           if (correctAnswer && index < correctAnswer.length) {
//             if (normalizedText[index] === correctAnswer[index]) {
//               slot.classList.add('correct');
//             } else {
//               slot.classList.add('incorrect');
//             }
//           }
//         } else {
//           slot.textContent = '';
//           if (index === normalizedText.length) {
//             slot.classList.add('active');
//           }
//         }
//       });
//     }

//     // Validación en tiempo real
//     function validateInput(text, targetWord) {
//       if (!uiElements.validation) return false;
      
//       const normalized = normalizeText(text);
//       const target = targetWord.answer;
      
//       let status, icon, message, isValid = false;
      
//       if (normalized.length === 0) {
//         status = 'incomplete';
//         icon = 'ℹ️';
//         message = 'Escribe tu respuesta...';
//       } else if (normalized.length < target.length) {
//         status = 'incomplete';
//         icon = '⏳';
//         message = `Faltan ${target.length - normalized.length} letras`;
//       } else if (normalized.length > target.length) {
//         status = 'invalid';
//         icon = '⚠️';
//         message = `Demasiadas letras (máximo ${target.length})`;
//       } else {
//         const matches = normalized.split('').filter((char, i) => char === target[i]).length;
//         if (matches === target.length) {
//           status = 'valid';
//           icon = '✅';
//           message = '¡Respuesta correcta!';
//           isValid = true;
//         } else if (matches > target.length * 0.7) {
//           status = 'incomplete';
//           icon = '🔄';
//           message = `${matches}/${target.length} letras correctas`;
//         } else {
//           status = 'invalid';
//           icon = '❌';
//           message = 'Revisa la ortografía';
//         }
//       }
      
//       uiElements.validation.className = `validation ${status}`;
//       uiElements.validation.style.display = 'flex';
//       uiElements.validationIcon.textContent = icon;
//       uiElements.validationText.textContent = message;
      
//       // Habilitar/deshabilitar botón
//       if (uiElements.verifyBtn) {
//         uiElements.verifyBtn.disabled = !isValid;
//       }
      
//       return isValid;
//     }

//     // Input handler mejorado
//     function setupInputHandler(word) {
//       if (!uiElements.textInput) return;
      
//       gameState.currentAnswer = "";
//       uiElements.textInput.value = "";
//       uiElements.textInput.maxLength = word.answer.length + 2; // Un poco de margen
      
//       // Limpiar event listeners previos
//       const newInput = uiElements.textInput.cloneNode(true);
//       uiElements.textInput.parentNode.replaceChild(newInput, uiElements.textInput);
//       uiElements.textInput = newInput;
      
//       // Input en tiempo real
//       uiElements.textInput.addEventListener('input', (e) => {
//         const value = e.target.value;
//         gameState.currentAnswer = value;
        
//         updateVisualSlots(value);
//         validateInput(value, word);
        
//         if (value.length > 0) {
//           playSound(SOUNDS.TYPE);
//         }
//       });
      
//       // Enter para verificar
//       uiElements.textInput.addEventListener('keydown', (e) => {
//         if (e.key === 'Enter' && !uiElements.verifyBtn.disabled) {
//           uiElements.verifyBtn.click();
//         }
//         // Escape para deseleccionar (opcional)
//         if (e.key === 'Escape') {
//           deselectWord();
//         }
//       });
      
//       // Focus automático
//       setTimeout(() => {
//         uiElements.textInput.focus();
//         uiElements.textInput.select();
//       }, 100);
//     }

//     // Seleccionar palabra
//     function selectWord(wordId) {
//       console.log(`🎯 Seleccionando palabra: ${wordId}`);
      
//       if (gameState.solved.has(wordId)) {
//         console.log('⚠️ Palabra ya resuelta:', wordId);
//         return;
//       }
      
//       gameState.currentWordId = wordId;
//       const word = layoutData.words.find(w => w.id === wordId);
//       if (!word) {
//         console.error('❌ Palabra no encontrada:', wordId);
//         return;
//       }
      
//       // Limpiar selección anterior
//       document.querySelectorAll('.cell.sel').forEach(cell => cell.classList.remove('sel'));
      
//       // Marcar celdas seleccionadas
//       for (let i = 0; i < word.answer.length; i++) {
//         const col = word.startCol + i + layoutData.colOffset;
//         const key = `${word.row},${col}`;
//         const cell = document.querySelector(`[data-key="${key}"]`);
//         if (cell && !cell.classList.contains('central')) {
//           cell.classList.add('sel');
//         }
//       }
      
//       // Configurar UI
//       if (uiElements.questionText) uiElements.questionText.textContent = word.clue;
//       if (uiElements.lengthInfo) uiElements.lengthInfo.textContent = `${word.answer.length} letras`;
//       if (uiElements.difficultyTag) uiElements.difficultyTag.textContent = word.difficulty;
      
//       createVisualSlots(word.answer.length);
//       setupInputHandler(word);
      
//       if (uiElements.inputSection) {
//         uiElements.inputSection.classList.add('show');
//       }
      
//       console.log(`✅ Palabra seleccionada: "${word.answer}" - ${word.clue}`);
//     }

//     // Deseleccionar palabra
//     function deselectWord() {
//       console.log('❌ Deseleccionando palabra');
      
//       gameState.currentWordId = null;
//       gameState.currentAnswer = "";
      
//       document.querySelectorAll('.cell.sel').forEach(cell => cell.classList.remove('sel'));
      
//       if (uiElements.inputSection) {
//         uiElements.inputSection.classList.remove('show');
//       }
      
//       if (uiElements.textInput) {
//         uiElements.textInput.value = "";
//       }
//     }

//     // Verificar respuesta
//     function verifyAnswer() {
//       if (!gameState.currentWordId) {
//         console.log('⚠️ No hay palabra seleccionada para verificar');
//         return;
//       }
      
//       const word = layoutData.words.find(w => w.id === gameState.currentWordId);
//       if (!word) {
//         console.error('❌ Palabra no encontrada para verificar');
//         return;
//       }
      
//       const userAnswer = normalizeText(gameState.currentAnswer);
//       const correctAnswer = word.answer;
      
//       console.log(`🔍 Verificando: "${userAnswer}" vs "${correctAnswer}"`);
      
//       gameState.attempts++;
      
//       if (userAnswer === correctAnswer) {
//         console.log('🎉 ¡Respuesta correcta!');
        
//         gameState.solved.add(gameState.currentWordId);
//         gameState.score += 10;
//         gameState.correctAttempts++;
        
//         // Llenar celdas con la respuesta
//         for (let i = 0; i < word.answer.length; i++) {
//           const col = word.startCol + i + layoutData.colOffset;
//           const key = `${word.row},${col}`;
//           const cell = document.querySelector(`[data-key="${key}"]`);
//           if (cell && !cell.classList.contains('central')) {
//             cell.textContent = word.answer[i];
//             cell.dataset.wordSolved = "1";
//             cell.classList.remove('sel');
//             cell.style.pointerEvents = "none";
//             cell.classList.add('pulse');
//           }
//         }
        
//         playSound(SOUNDS.OK);
//         updateHUD();
        
//         // Ocultar input
//         if (uiElements.inputSection) {
//           uiElements.inputSection.classList.remove('show');
//         }
        
//         // Verificar si se completó el juego
//         if (gameState.solved.size >= layoutData.words.length) {
//           console.log('🏆 ¡Juego completado!');
//           document.getElementById('grid').classList.add('done');
//           setTimeout(() => showCompletionModal(), 1000);
//         } else {
//           // Seleccionar siguiente palabra no resuelta
//           setTimeout(() => {
//             const nextWord = layoutData.words.find(w => !gameState.solved.has(w.id));
//             if (nextWord) {
//               selectWord(nextWord.id);
//             }
//           }, 500);
//         }
        
//       } else {
//         console.log('❌ Respuesta incorrecta');
//         playSound(SOUNDS.ERROR);
        
//         // Efecto visual de error
//         updateVisualSlots(gameState.currentAnswer, word);
//         if (uiElements.visualInput) {
//           uiElements.visualInput.classList.add('shake');
//           setTimeout(() => uiElements.visualInput.classList.remove('shake'), 500);
//         }
        
//         // Limpiar input para reintento
//         setTimeout(() => {
//           gameState.currentAnswer = "";
//           uiElements.textInput.value = "";
//           updateVisualSlots("");
//           validateInput("", word);
//           uiElements.textInput.focus();
//         }, 1000);
//       }
      
//       updateHUD();
//     }

//     // Configurar botón verificar
//     if (uiElements.verifyBtn) {
//       uiElements.verifyBtn.addEventListener('click', verifyAnswer);
//     }

//     console.log('✅ UI moderna configurada');

//     return {
//       selectWord,
//       deselectWord,
//       verifyAnswer,
//       createVisualSlots,
//       updateVisualSlots,
//       validateInput,
//       setupInputHandler
//     };
//   }

//   // ===== FUNCIÓN PRINCIPAL =====
//   function start(config, options = {}) {
//     const initTime = performance.now();
//     console.log('🚀 Iniciando crucigrama...');
//     console.log('⚙️ Config recibida:', config);
//     console.log('🎛️ Opciones:', options);

//     try {
//       // Validar configuración
//       if (!config) throw new Error('Configuración requerida');
//       if (!config.central) throw new Error('Palabra central requerida');
//       if (!config.entries) throw new Error('Entradas requeridas');

//       // Resetear estado del juego
//       gameState = {
//         solved: new Set(),
//         currentWordId: null,
//         currentAnswer: "",
//         score: 0,
//         attempts: 0,
//         correctAttempts: 0
//       };

//       // Actualizar título
//       const titleEl = document.getElementById("title");
//       if (titleEl && config.title) {
//         titleEl.textContent = config.title;
//       }

//       // Construir layout
//       layout = buildCrosswordLayout(config);
      
//       // Renderizar tablero
//       renderBoard(layout);
      
//       // Configurar UI moderna
//       const ui = setupModernUI(layout);
      
//       // Configurar clicks en celdas
//       const gridEl = document.getElementById("grid");
//       if (gridEl) {
//         gridEl.addEventListener("click", (e) => {
//           const cell = e.target.closest(".cell.h");
//           if (!cell || cell.classList.contains('central')) return;
          
//           const wordId = cell.dataset.wordId;
//           if (!wordId) return;
          
//           // Si ya está resuelta, no hacer nada
//           if (gameState.solved.has(wordId)) {
//             console.log('⚠️ Intento de seleccionar palabra ya resuelta:', wordId);
//             return;
//           }
          
//           ui.selectWord(wordId);
//         });
//       }

//       // Inicializar HUD
//       updateHUD();

//       // Seleccionar primera palabra automáticamente
//       const firstWord = layout.words.find(w => !gameState.solved.has(w.id));
//       if (firstWord) {
//         setTimeout(() => ui.selectWord(firstWord.id), 500);
//       }

//       const totalTime = performance.now() - initTime;
//       console.log(`✅ Crucigrama iniciado exitosamente en ${totalTime.toFixed(2)}ms`);

//     } catch (error) {
//       console.error('❌ Error inicializando crucigrama:', error);
//       alert(`Error: ${error.message}`);
//     }
//   }

//   // ===== API PÚBLICA =====
//   window.CrosswordEngine = { 
//     start,
//     getState: () => ({ ...gameState }),
//     getLayout: () => layout,
//     playSound,
//     normalizeText
//   };

//   const totalLoadTime = performance.now() - startTime;
//   console.log(`⚡ Crossword Engine cargado en ${totalLoadTime.toFixed(2)}ms`);

// })();

// js/crossword_engine.js - Motor completo con UI moderna y Firebase
//
// Versión: v3.2 (2026-11-19) — arreglos de uso (para todos los temas):
//  - Celular: el campo de texto queda encima de las casillas, así tocarlas abre el teclado
//    (antes era invisible y sin toques: en muchos teléfonos no se podía escribir).
//  - Ya no dice "¡Respuesta correcta!" ni "x/y letras correctas" mientras se escribe
//    (se resolvía probando letras). Se puede verificar cualquier respuesta del largo justo;
//    si está mal, las letras bien ubicadas quedan en verde y las demás en rojo para corregir.
//    "Intentos" y "Precisión" ahora cuentan los errores reales.
//  - Lista de definiciones numeradas (tocar una elige la palabra) y botón "Otra palabra".
//  - La letra que ya se ve en la palabra central aparece como guía en su casilla.
//  - Las palabras resueltas se recuerdan al recargar (por alumno, en este navegador).
//  - Sin etiqueta "fácil/medio/difícil" por largo; textos en voseo.
// v3.1: integración con Firebase (crossword-score.js).

console.log('🎯 Iniciando Crossword Engine v3.2 con Firebase');
const startTime = performance.now();

// Protección contra errores de extensiones
if (!window.__EXT_ERR_GUARD__) {
  window.__EXT_ERR_GUARD__ = true;
  window.addEventListener('error', (e) => {
    const msg = String(e.message || '');
    if (msg.includes('A listener indicated an asynchronous response')) {
      e.preventDefault();
      return false;
    }
  });
}

(function() {
  // ===== CONFIGURACIÓN Y UTILIDADES =====
  const SOUNDS = {
    OK: "sound/collect_points.mp3",
    ERROR: "sound/negative_beep.mp3",
    COMPLETE: "sound/fin_caza.mp3",
    TYPE: "sound/click.mp3"
  };

  let muted = false;
  let gameState = {
    solved: new Set(),
    currentWordId: null,
    currentAnswer: "",
    score: 0,
    attempts: 0,
    correctAttempts: 0
  };

  // Variables globales
  let layout = null;
  let uiElements = {};

  // Reproducir sonidos con manejo de errores
  const playSound = (file) => {
    if (muted) return;
    try {
      const audio = new Audio(file);
      audio.volume = 0.2;
      audio.play().catch(() => {});
    } catch (e) {}
  };

  // Normalizar texto (sin acentos, mayúsculas)
  const normalizeText = (text) => {
    return String(text || "")
      .toUpperCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .replace(/[^A-ZÑÁÉÍÓÚÜ]/gi, "")
      .replace(/Á/g, "A").replace(/É/g, "E").replace(/Í/g, "I")
      .replace(/Ó/g, "O").replace(/Ú/g, "U").replace(/Ñ/g, "N");
  };

  // Obtener tema desde URL
  const getCurrentTheme = () => {
    const params = new URLSearchParams(location.search);
    return params.get("tema") || params.get("theme") || "etica_aristoteles";
  };

  // ===== GUARDADO DE PROGRESO MEJORADO CON FIREBASE =====
  async function saveProgress(data) {
    const tema = getCurrentTheme();
    const keys = [`tema.${tema}.cruci`, `tema.${tema}.cross`];
    
    console.log('💾 [Engine] Guardando progreso:', data);
    
    // 1. Guardar en sessionStorage (compatibilidad local)
    keys.forEach(key => {
      try {
        const existing = JSON.parse(sessionStorage.getItem(key) || '{}');
        const updated = {
          total: data.total ?? existing.total ?? 0,
          solved: data.solved ?? existing.solved ?? 0,
          score: data.score ?? existing.score ?? 0,
          attempts: data.attempts ?? existing.attempts ?? 0,
          completed: data.completed ?? existing.completed ?? false,
          lastUpdated: new Date().toISOString()
        };
        sessionStorage.setItem(key, JSON.stringify(updated));
        console.log(`✅ [Engine] Guardado local en ${key}`);
      } catch (e) {
        console.error('❌ [Engine] Error guardando local:', e);
      }
    });
    
    // 2. Guardar en Firebase si hay progreso real
    if ((data.solved > 0 || data.completed) && typeof window.saveCrosswordProgress === 'function') {
      try {
        const timeSpent = Math.round((Date.now() - (window.crosswordStartTime || Date.now())) / 1000);
        
        console.log('🔥 [Engine] Guardando en Firebase...');
        const success = await window.saveCrosswordProgress(
          data.solved || 0,
          data.total || 0,
          data.score || 0,
          data.attempts || 0,
          timeSpent,
          data.completed || false
        );
        
        if (success) {
          console.log('✅ [Engine] Guardado en Firebase exitoso');
          
          // Actualizar indicador visual
          if (window.updateFirebaseStatus) {
            window.updateFirebaseStatus('connected');
          }
        }
        
        return success;
      } catch (error) {
        console.error('❌ [Engine] Error guardando en Firebase:', error);
        
        if (window.updateFirebaseStatus) {
          window.updateFirebaseStatus('disconnected');
        }
      }
    } else if (data.solved > 0 || data.completed) {
      console.warn('⚠️ [Engine] saveCrosswordProgress no disponible, solo guardado local');
    }
    
    return true;
  }

  // ===== ALGORITMO DE LAYOUT MEJORADO =====
  function buildCrosswordLayout(config) {
    console.log('🗺️ Construyendo layout del crucigrama...');
    
    const central = normalizeText(config.central).replace(/\s+/g, "");
    const rows = central.length;
    
    if (!config.entries || !Array.isArray(config.entries)) {
      throw new Error('Config debe tener un array "entries"');
    }

    console.log(`📏 Palabra central: "${central}" (${rows} letras)`);

    const usedRows = new Set();
    const words = [];

    config.entries.forEach((entry, index) => {
      if (!entry.answer || !entry.clue) {
        console.warn(`⚠️ Entrada ${index} incompleta:`, entry);
        return;
      }

      const answer = normalizeText(entry.answer);
      let crossRow = -1;
      let wordIndex = -1;

      if (typeof entry.crossIndex === "number" && entry.crossIndex >= 0 && entry.crossIndex < rows) {
        const centralChar = central[entry.crossIndex];
        wordIndex = answer.indexOf(centralChar);
        if (wordIndex !== -1) {
          crossRow = entry.crossIndex;
        }
      }

      if (crossRow === -1) {
        for (let i = 0; i < central.length; i++) {
          const char = central[i];
          const idx = answer.indexOf(char);
          if (idx !== -1 && !usedRows.has(i)) {
            crossRow = i;
            wordIndex = idx;
            break;
          }
        }
      }

      if (crossRow === -1) {
        for (let i = 0; i < rows; i++) {
          if (!usedRows.has(i)) {
            crossRow = i;
            wordIndex = 0;
            break;
          }
        }
      }

      if (crossRow === -1) {
        crossRow = 0;
        wordIndex = 0;
      }

      usedRows.add(crossRow);

      const word = {
        id: `word_${index}`,
        answer: answer,
        clue: entry.clue,
        row: crossRow,
        startCol: -wordIndex,
        endCol: -wordIndex + answer.length - 1,
        crossIndex: wordIndex,
        difficulty: answer.length <= 6 ? 'fácil' : answer.length <= 10 ? 'medio' : 'difícil'
      };

      words.push(word);
      console.log(`✅ Palabra ${index}: "${answer}" en fila ${crossRow}`);
    });

    let minCol = 0, maxCol = 0;
    words.forEach(word => {
      minCol = Math.min(minCol, word.startCol);
      maxCol = Math.max(maxCol, word.endCol);
    });

    // Número de cada palabra: de arriba hacia abajo (es el orden de la lista de definiciones)
    [...words].sort((a, b) => a.row - b.row).forEach((w, i) => { w.num = i + 1; });

    const cols = maxCol - minCol + 1;
    const colOffset = -minCol;
    const centralCol = colOffset;

    const cellMap = new Map();

    // Palabra central (vertical)
    for (let r = 0; r < rows; r++) {
      const key = `${r},${centralCol}`;
      cellMap.set(key, {
        char: central[r],
        isCentral: true,
        isHorizontal: false,
        wordId: null,
        wordIndex: -1
      });
    }

    // Palabras horizontales
    words.forEach(word => {
      for (let i = 0; i < word.answer.length; i++) {
        const col = word.startCol + i + colOffset;
        const key = `${word.row},${col}`;
        
        const existing = cellMap.get(key) || {};
        cellMap.set(key, {
          ...existing,
          char: word.answer[i],
          isHorizontal: true,
          wordId: word.id,
          wordIndex: i
        });
      }
    });

    return { rows, cols, centralCol, colOffset, words, cellMap };
  }

  // ===== RENDERIZADO DEL TABLERO =====
  function renderBoard(layoutData) {
    console.log('🎨 Renderizando tablero...');
    
    const gridEl = document.getElementById("grid");
    if (!gridEl) throw new Error('No se encontró elemento #grid');

    gridEl.style.gridTemplateColumns = `repeat(${layoutData.cols}, 1fr)`;
    gridEl.innerHTML = "";

    // Crear celdas
    for (let row = 0; row < layoutData.rows; row++) {
      for (let col = 0; col < layoutData.cols; col++) {
        const key = `${row},${col}`;
        const cellData = layoutData.cellMap.get(key);

        const cellEl = document.createElement("div");
        cellEl.className = "cell";
        cellEl.dataset.row = row;
        cellEl.dataset.col = col;
        cellEl.dataset.key = key;

        if (!cellData) {
          cellEl.classList.add("empty");
          cellEl.style.visibility = "hidden";
        } else {
          cellEl.dataset.char = cellData.char;
          
          if (cellData.isCentral) {
            cellEl.classList.add("central");
            cellEl.textContent = cellData.char;
            cellEl.style.pointerEvents = "none";
          }
          
          if (cellData.isHorizontal) {
            cellEl.classList.add("h");
            cellEl.dataset.wordId = cellData.wordId;
            cellEl.dataset.wordIndex = cellData.wordIndex;
            // Número de la palabra en su primera casilla
            if (cellData.wordIndex === 0) {
              const w = layoutData.words.find((x) => x.id === cellData.wordId);
              if (w) cellEl.dataset.num = w.num;
            }
            
            if (!cellData.isCentral) {
              cellEl.style.cursor = "pointer";
            }
          }
        }

        gridEl.appendChild(cellEl);
      }
    }

    console.log('✅ Tablero renderizado');
    return gridEl;
  }

  // ===== PALABRAS RESUELTAS: TABLERO Y MEMORIA =====
  const ordenadas = () => [...(layout?.words || [])].sort((a, b) => a.num - b.num);

  /** Siguiente palabra sin resolver después de la actual (en el orden de la lista). */
  function siguientePendiente(desdeId) {
    const lista = ordenadas();
    const i = Math.max(0, lista.findIndex((w) => w.id === desdeId));
    for (let k = 1; k <= lista.length; k++) {
      const w = lista[(i + k) % lista.length];
      if (!gameState.solved.has(w.id)) return w;
    }
    return null;
  }

  /** Escribe la palabra en el tablero y la deja resuelta. */
  function pintarResuelta(word) {
    for (let i = 0; i < word.answer.length; i++) {
      const col = word.startCol + i + layout.colOffset;
      const cell = document.querySelector(`[data-key="${word.row},${col}"]`);
      if (cell && !cell.classList.contains('central')) {
        cell.textContent = word.answer[i];
        cell.dataset.wordSolved = "1";
        cell.classList.remove('sel');
        cell.style.pointerEvents = "none";
        cell.classList.add('pulse');
      }
    }
  }

  // Memoria en el navegador: por alumno y por versión del crucigrama (si cambian las
  // palabras, no se restaura nada viejo). Sin sesión iniciada no se guarda.
  const claveMemoria = () => {
    const uid = window.crosswordUid;
    if (!uid || !layout) return null;
    const firma = layout.words.map((w) => w.answer).join('-');
    return `cruci.resueltas.${uid}.${getCurrentTheme()}.${firma}`;
  };
  function recordarResueltas() {
    const k = claveMemoria();
    if (!k) return;
    try { localStorage.setItem(k, JSON.stringify([...gameState.solved])); } catch (e) {}
  }
  function leerResueltas() {
    const k = claveMemoria();
    if (!k) return [];
    try { return JSON.parse(localStorage.getItem(k) || '[]'); } catch (e) { return []; }
  }

  // ===== ACTUALIZAR HUD =====
  async function updateHUD() {
    if (!layout) return;
    
    const totalWords = layout.words.length;
    const solvedCount = gameState.solved.size;
    
    if (uiElements.prog) uiElements.prog.textContent = `${solvedCount}/${totalWords}`;
    if (uiElements.score) uiElements.score.textContent = gameState.score;
    if (uiElements.tries) uiElements.tries.textContent = gameState.attempts;

    // Indicador visual de guardado
    if (window.updateFirebaseStatus && (solvedCount > 0 || gameState.score > 0)) {
      window.updateFirebaseStatus('saving');
    }

    await saveProgress({
      total: totalWords,
      solved: solvedCount,
      score: gameState.score,
      attempts: gameState.attempts,
      completed: solvedCount >= totalWords
    });

    console.log(`📊 HUD actualizado: ${solvedCount}/${totalWords} palabras, ${gameState.score} puntos`);
  }

  // ===== MODAL DE COMPLETADO =====
  async function showCompletionModal() {
    console.log('🏆 Mostrando modal de completado');
    
    if (!uiElements.completionModal) return;
    
    const accuracy = gameState.attempts > 0 ? 
      Math.round((gameState.correctAttempts / gameState.attempts) * 100) : 100;
    
    if (uiElements.finalScore) uiElements.finalScore.textContent = gameState.score;
    if (uiElements.finalAccuracy) uiElements.finalAccuracy.textContent = `${accuracy}%`;
    
    uiElements.completionModal.classList.add('show');
    playSound(SOUNDS.COMPLETE);
    
    // Guardar progreso final
    if (window.updateFirebaseStatus) {
      window.updateFirebaseStatus('saving');
    }
    
    await saveProgress({
      total: layout.words.length,
      solved: gameState.solved.size,
      score: gameState.score,
      attempts: gameState.attempts,
      completed: true
    });
    
    // Forzar sincronización si está disponible
    if (typeof window.forceCrosswordSave === 'function') {
      setTimeout(async () => {
        console.log('🔄 [Engine] Forzando guardado final...');
        await window.forceCrosswordSave();
      }, 500);
    }
  }

  // ===== UI MODERNA MEJORADA =====
  function setupModernUI(layoutData) {
    console.log('🎨 Configurando UI moderna...');

    // Cache de elementos UI
    uiElements = {
      inputSection: document.getElementById("inputSection"),
      questionText: document.getElementById("questionText"),
      lengthInfo: document.getElementById("lengthInfo"),
      difficultyTag: document.getElementById("difficultyTag"),
      visualInput: document.getElementById("visualInput"),
      textInput: document.getElementById("textInput"),
      validation: document.getElementById("validation"),
      validationIcon: document.getElementById("validationIcon"),
      validationText: document.getElementById("validationText"),
      verifyBtn: document.getElementById("verifyBtn"),
      prog: document.getElementById("prog"),
      score: document.getElementById("score"),
      tries: document.getElementById("tries"),
      muteBtn: document.getElementById("muteBtn"),
      completionModal: document.getElementById("completionModal"),
      finalScore: document.getElementById("finalScore"),
      finalAccuracy: document.getElementById("finalAccuracy")
    };

    // Configurar botón de sonido
    if (uiElements.muteBtn) {
      uiElements.muteBtn.addEventListener("click", () => {
        muted = !muted;
        uiElements.muteBtn.textContent = muted ? "🔇" : "🔊";
        console.log(`🔊 Sonido ${muted ? 'desactivado' : 'activado'}`);
      });
    }

    let palabraActual = null;

    // Crear slots visuales para la palabra
    function createVisualSlots(length) {
      if (!uiElements.visualInput) return;

      uiElements.visualInput.innerHTML = "";
      for (let i = 0; i < length; i++) {
        const slot = document.createElement('div');
        slot.className = 'letter-slot';
        slot.dataset.index = i;
        uiElements.visualInput.appendChild(slot);
      }
    }

    // Actualizar slots visuales. Con correctAnswer (al verificar mal): verde = bien ubicada,
    // rojo = a corregir. Vacía en la posición del cruce: muestra como guía la letra central.
    function updateVisualSlots(text, correctAnswer = null) {
      const slots = uiElements.visualInput?.querySelectorAll('.letter-slot') || [];
      const normalizedText = normalizeText(text);

      slots.forEach((slot, index) => {
        slot.classList.remove('filled', 'active', 'correct', 'incorrect', 'guia');

        if (index < normalizedText.length) {
          slot.textContent = normalizedText[index];
          slot.classList.add('filled');

          if (correctAnswer && index < correctAnswer.length) {
            if (normalizedText[index] === correctAnswer[index]) {
              slot.classList.add('correct');
            } else {
              slot.classList.add('incorrect');
            }
          }
        } else {
          const guia = palabraActual && index === palabraActual.crossIndex;
          slot.textContent = guia ? palabraActual.answer[index] : '';
          if (guia) slot.classList.add('guia');
          if (index === normalizedText.length) {
            slot.classList.add('active');
          }
        }
      });
    }

    // Estado mientras se escribe: solo cuántas letras faltan o sobran (NO si está bien:
    // eso se sabe al verificar). Se puede verificar con el largo justo.
    function validateInput(text, targetWord) {
      if (!uiElements.validation) return false;

      const normalized = normalizeText(text);
      const target = targetWord.answer;

      let status, icon, message, isValid = false;

      if (normalized.length === 0) {
        status = 'incomplete';
        icon = 'ℹ️';
        message = 'Tocá las casillas y escribí tu respuesta';
      } else if (normalized.length < target.length) {
        const f = target.length - normalized.length;
        status = 'incomplete';
        icon = '⏳';
        message = `Falta${f > 1 ? 'n' : ''} ${f} letra${f > 1 ? 's' : ''}`;
      } else if (normalized.length > target.length) {
        const s = normalized.length - target.length;
        status = 'invalid';
        icon = '⚠️';
        message = `Sobra${s > 1 ? 'n' : ''} ${s} letra${s > 1 ? 's' : ''}: la palabra tiene ${target.length}`;
      } else {
        status = 'listo';
        icon = '✔️';
        message = 'Lista para verificar';
        isValid = true;
      }
      
      uiElements.validation.className = `validation ${status}`;
      uiElements.validation.style.display = 'flex';
      uiElements.validationIcon.textContent = icon;
      uiElements.validationText.textContent = message;
      
      // Habilitar/deshabilitar botón
      if (uiElements.verifyBtn) {
        uiElements.verifyBtn.disabled = !isValid;
      }
      
      return isValid;
    }

    // Input handler mejorado
    function setupInputHandler(word) {
      if (!uiElements.textInput) return;
      
      gameState.currentAnswer = "";
      uiElements.textInput.value = "";
      uiElements.textInput.maxLength = word.answer.length + 2;
      
      // Limpiar event listeners previos
      const newInput = uiElements.textInput.cloneNode(true);
      uiElements.textInput.parentNode.replaceChild(newInput, uiElements.textInput);
      uiElements.textInput = newInput;
      // Teclado del celular: mayúsculas, sin autocorrector ni sugerencias
      ['autocapitalize:characters', 'autocorrect:off', 'spellcheck:false', 'autocomplete:off', 'enterkeyhint:done']
        .forEach((par) => { const [k, v] = par.split(':'); uiElements.textInput.setAttribute(k, v); });

      // Input en tiempo real
      uiElements.textInput.addEventListener('input', (e) => {
        const value = e.target.value;
        gameState.currentAnswer = value;
        
        updateVisualSlots(value);
        validateInput(value, word);
        
        if (value.length > 0) {
          playSound(SOUNDS.TYPE);
        }
      });
      
      // Enter para verificar
      uiElements.textInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !uiElements.verifyBtn.disabled) {
          uiElements.verifyBtn.click();
        }
        if (e.key === 'Escape') {
          deselectWord();
        }
      });
      
      // Focus automático
      setTimeout(() => {
        uiElements.textInput.focus();
        uiElements.textInput.select();
      }, 100);
    }

    // Seleccionar palabra
    function selectWord(wordId) {
      console.log(`🎯 Seleccionando palabra: ${wordId}`);
      
      if (gameState.solved.has(wordId)) {
        console.log('⚠️ Palabra ya resuelta:', wordId);
        return;
      }
      
      gameState.currentWordId = wordId;
      const word = layoutData.words.find(w => w.id === wordId);
      if (!word) {
        console.error('❌ Palabra no encontrada:', wordId);
        return;
      }
      palabraActual = word;
      
      // Limpiar selección anterior
      document.querySelectorAll('.cell.sel').forEach(cell => cell.classList.remove('sel'));
      
      // Marcar celdas seleccionadas
      for (let i = 0; i < word.answer.length; i++) {
        const col = word.startCol + i + layoutData.colOffset;
        const key = `${word.row},${col}`;
        const cell = document.querySelector(`[data-key="${key}"]`);
        if (cell && !cell.classList.contains('central')) {
          cell.classList.add('sel');
        }
      }
      
      // Configurar UI
      if (uiElements.questionText) uiElements.questionText.textContent = `${word.num}. ${word.clue}`;
      if (uiElements.lengthInfo) uiElements.lengthInfo.textContent = `${word.answer.length} letras`;
      if (uiElements.difficultyTag) uiElements.difficultyTag.style.display = 'none';

      createVisualSlots(word.answer.length);
      setupInputHandler(word);
      updateVisualSlots('');
      validateInput('', word);
      renderClueList();
      // Foco inmediato: si se eligió con un toque, el celular abre el teclado
      try { uiElements.textInput.focus({ preventScroll: true }); } catch (e) {}
      const otra = document.getElementById('skipBtn');
      if (otra) otra.disabled = !siguientePendiente(word.id) || siguientePendiente(word.id).id === word.id;
      
      if (uiElements.inputSection) {
        uiElements.inputSection.classList.add('show');
      }
      
      console.log(`✅ Palabra seleccionada: "${word.answer}" - ${word.clue}`);
    }

    // Lista de definiciones numeradas: tocar una elige la palabra; las resueltas, tachadas
    function renderClueList() {
      const lista = document.getElementById('clueList');
      if (!lista) return;
      lista.innerHTML = '';
      ordenadas().forEach((w) => {
        const li = document.createElement('li');
        const resuelta = gameState.solved.has(w.id);
        li.className = `clue${resuelta ? ' resuelta' : ''}${w.id === gameState.currentWordId ? ' actual' : ''}`;
        li.dataset.wordId = w.id;
        li.innerHTML = `<span class="clue-num">${w.num}</span><span class="clue-txt"></span>`;
        li.querySelector('.clue-txt').textContent = resuelta ? `${w.answer} — ${w.clue}` : `${w.clue} (${w.answer.length} letras)`;
        if (!resuelta) {
          li.tabIndex = 0;
          li.addEventListener('click', () => selectWord(w.id));
        }
        lista.appendChild(li);
      });
    }

    // Deseleccionar palabra
    function deselectWord() {
      console.log('❌ Deseleccionando palabra');
      
      gameState.currentWordId = null;
      gameState.currentAnswer = "";
      
      document.querySelectorAll('.cell.sel').forEach(cell => cell.classList.remove('sel'));
      
      if (uiElements.inputSection) {
        uiElements.inputSection.classList.remove('show');
      }
      
      if (uiElements.textInput) {
        uiElements.textInput.value = "";
      }
    }

    // Verificar respuesta
    async function verifyAnswer() {
      if (!gameState.currentWordId) {
        console.log('⚠️ No hay palabra seleccionada para verificar');
        return;
      }
      
      const word = layoutData.words.find(w => w.id === gameState.currentWordId);
      if (!word) {
        console.error('❌ Palabra no encontrada para verificar');
        return;
      }
      
      const userAnswer = normalizeText(gameState.currentAnswer);
      const correctAnswer = word.answer;
      
      console.log(`🔍 Verificando: "${userAnswer}" vs "${correctAnswer}"`);
      
      gameState.attempts++;
      
      if (userAnswer === correctAnswer) {
        console.log('🎉 ¡Respuesta correcta!');
        
        gameState.solved.add(gameState.currentWordId);
        gameState.score += 10;
        gameState.correctAttempts++;

        // Llenar celdas con la respuesta y recordarla
        pintarResuelta(word);
        recordarResueltas();
        renderClueList();

        playSound(SOUNDS.OK);

        // Ocultar input
        if (uiElements.inputSection) {
          uiElements.inputSection.classList.remove('show');
        }

        // Verificar si se completó el juego
        if (gameState.solved.size >= layoutData.words.length) {
          console.log('🏆 ¡Juego completado!');
          document.getElementById('grid').classList.add('done');
          setTimeout(() => showCompletionModal(), 1000);
        } else {
          // Seleccionar la siguiente palabra sin resolver (en el orden de la lista)
          setTimeout(() => {
            const nextWord = siguientePendiente(word.id);
            if (nextWord) {
              selectWord(nextWord.id);
            }
          }, 500);
        }

      } else {
        console.log('❌ Respuesta incorrecta');
        playSound(SOUNDS.ERROR);

        // Letras bien ubicadas en verde y a corregir en rojo; la respuesta queda escrita
        // para que el alumno corrija solo lo que falla
        updateVisualSlots(gameState.currentAnswer, word.answer);
        const bien = normalizeText(gameState.currentAnswer).split('').filter((c, i) => c === word.answer[i]).length;
        if (uiElements.validation) {
          uiElements.validation.className = 'validation invalid';
          uiElements.validation.style.display = 'flex';
          uiElements.validationIcon.textContent = '❌';
          uiElements.validationText.textContent = bien > 0 ?
            `Todavía no. Las letras en verde (${bien}) están bien ubicadas: corregí las rojas.` :
            'Todavía no. Releé la definición y probá con otra palabra.';
        }
        if (uiElements.visualInput) {
          uiElements.visualInput.classList.add('shake');
          setTimeout(() => uiElements.visualInput.classList.remove('shake'), 500);
        }
        uiElements.textInput.focus();
      }

      await updateHUD();
    }

    // "Otra palabra": pasa a la siguiente sin resolver
    const skipBtn = document.getElementById('skipBtn');
    if (skipBtn) {
      skipBtn.onclick = () => {
        const sig = siguientePendiente(gameState.currentWordId);
        if (sig && sig.id !== gameState.currentWordId) selectWord(sig.id);
      };
    }

    // Configurar botón verificar (onclick y no addEventListener: el motor puede
    // arrancar dos veces —al cargar y desde el modal educativo— y cada respuesta
    // se contaba doble: intentos y puntaje x2)
    if (uiElements.verifyBtn) {
      uiElements.verifyBtn.onclick = verifyAnswer;
    }

    console.log('✅ UI moderna configurada');

    return {
      selectWord,
      deselectWord,
      renderClueList,
      verifyAnswer,
      createVisualSlots,
      updateVisualSlots,
      validateInput,
      setupInputHandler
    };
  }

  // ===== FUNCIÓN PRINCIPAL =====
  function start(config, options = {}) {
    const initTime = performance.now();
    console.log('🚀 Iniciando crucigrama...');
    console.log('⚙️ Config recibida:', config);
    console.log('🎛️ Opciones:', options);

    try {
      // Validar configuración
      if (!config) throw new Error('Configuración requerida');
      if (!config.central) throw new Error('Palabra central requerida');
      if (!config.entries) throw new Error('Entradas requeridas');

      // Resetear estado del juego
      gameState = {
        solved: new Set(),
        currentWordId: null,
        currentAnswer: "",
        score: 0,
        attempts: 0,
        correctAttempts: 0
      };

      // Actualizar título
      const titleEl = document.getElementById("title");
      if (titleEl && config.title) {
        titleEl.textContent = config.title;
      }

      // Construir layout
      layout = buildCrosswordLayout(config);
      
      // Renderizar tablero
      renderBoard(layout);
      
      // Configurar UI moderna
      const ui = setupModernUI(layout);
      
      // Configurar clicks en celdas
      const gridEl = document.getElementById("grid");
      if (gridEl) {
        gridEl.onclick = (e) => {
          const cell = e.target.closest(".cell.h");
          if (!cell || cell.classList.contains('central')) return;
          
          const wordId = cell.dataset.wordId;
          if (!wordId) return;
          
          if (gameState.solved.has(wordId)) {
            console.log('⚠️ Intento de seleccionar palabra ya resuelta:', wordId);
            return;
          }
          
          ui.selectWord(wordId);
        };
      }

      // Restaurar las palabras que este alumno ya resolvió (si ya se sabe quién es;
      // si la sesión se confirma después, lo hace el evento 'crossword-usuario')
      window.__restaurarCruci = () => {
        const ids = leerResueltas().filter((id) => layout.words.some((w) => w.id === id) && !gameState.solved.has(id));
        if (!ids.length) return;
        ids.forEach((id) => {
          gameState.solved.add(id);
          gameState.score += 10;
          gameState.attempts++;
          gameState.correctAttempts++;
          pintarResuelta(layout.words.find((w) => w.id === id));
        });
        console.log(`♻️ Restauradas ${ids.length} palabras resueltas`);
        if (gameState.solved.size >= layout.words.length) {
          document.getElementById('grid')?.classList.add('done');
          uiElements.inputSection?.classList.remove('show');
          gameState.currentWordId = null;
          ui.renderClueList();
        } else if (!gameState.currentWordId || gameState.solved.has(gameState.currentWordId)) {
          ui.selectWord(siguientePendiente(gameState.currentWordId)?.id);
        } else {
          ui.renderClueList();
        }
        updateHUD();
      };
      window.__restaurarCruci();

      // Inicializar HUD
      updateHUD();

      // Seleccionar la primera palabra de la lista sin resolver
      const firstWord = ordenadas().find(w => !gameState.solved.has(w.id));
      if (firstWord) {
        setTimeout(() => { if (!gameState.currentWordId) ui.selectWord(firstWord.id); }, 500);
      } else {
        ui.renderClueList();
      }

      const totalTime = performance.now() - initTime;
      console.log(`✅ Crucigrama iniciado exitosamente en ${totalTime.toFixed(2)}ms`);
      console.log(`🔥 Integración Firebase: ${typeof window.saveCrosswordProgress === 'function' ? 'ACTIVA' : 'INACTIVA'}`);

    } catch (error) {
      console.error('❌ Error inicializando crucigrama:', error);
      alert(`Error: ${error.message}`);
    }
  }

  // La sesión del alumno puede confirmarse después de arrancar el tablero
  window.addEventListener('crossword-usuario', () => {
    if (layout && typeof window.__restaurarCruci === 'function') window.__restaurarCruci();
  });

  // ===== API PÚBLICA =====
  window.CrosswordEngine = {
    start,
    getState: () => ({ ...gameState }),
    getLayout: () => layout,
    playSound,
    normalizeText,
    saveProgress // Exponer para uso externo
  };

  const totalLoadTime = performance.now() - startTime;
  console.log(`⚡ Crossword Engine cargado en ${totalLoadTime.toFixed(2)}ms`);
  console.log(`🔥 Firebase: ${typeof window.saveCrosswordProgress === 'function' ? '✅ Detectado' : '⚠️ No detectado aún'}`);

})();