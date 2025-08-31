// js/crossword_engine.js - Motor completo con UI moderna

console.log('🎯 Iniciando Crossword Engine v3.0');
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
    return params.get("tema") || params.get("theme") || "sartre";
  };

  // ===== GUARDADO DE PROGRESO =====
  function saveProgress(data) {
    const tema = getCurrentTheme();
    const keys = [`tema.${tema}.cruci`, `tema.${tema}.cross`];
    
    console.log('💾 Guardando progreso:', data);
    
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
        console.log(`✅ Progreso guardado en ${key}:`, updated);
      } catch (e) {
        console.error('❌ Error guardando en', key, ':', e);
      }
    });
  }

  // ===== ALGORITMO DE LAYOUT MEJORADO =====
  function buildCrosswordLayout(config) {
    console.log('🏗️ Construyendo layout del crucigrama...');
    
    const central = normalizeText(config.central).replace(/\s+/g, "");
    const rows = central.length;
    
    if (!config.entries || !Array.isArray(config.entries)) {
      throw new Error('Config debe tener un array "entries"');
    }

    console.log(`📐 Palabra central: "${central}" (${rows} letras)`);

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

  // ===== ACTUALIZAR HUD =====
  function updateHUD() {
    if (!layout) return;
    
    const totalWords = layout.words.length;
    const solvedCount = gameState.solved.size;
    
    if (uiElements.prog) uiElements.prog.textContent = `${solvedCount}/${totalWords}`;
    if (uiElements.score) uiElements.score.textContent = gameState.score;
    if (uiElements.tries) uiElements.tries.textContent = gameState.attempts;

    saveProgress({
      total: totalWords,
      solved: solvedCount,
      score: gameState.score,
      attempts: gameState.attempts,
      completed: solvedCount >= totalWords
    });

    console.log(`📊 HUD actualizado: ${solvedCount}/${totalWords} palabras, ${gameState.score} puntos`);
  }

  // ===== MODAL DE COMPLETADO =====
  function showCompletionModal() {
    console.log('🏆 Mostrando modal de completado');
    
    if (!uiElements.completionModal) return;
    
    const accuracy = gameState.attempts > 0 ? 
      Math.round((gameState.correctAttempts / gameState.attempts) * 100) : 100;
    
    if (uiElements.finalScore) uiElements.finalScore.textContent = gameState.score;
    if (uiElements.finalAccuracy) uiElements.finalAccuracy.textContent = `${accuracy}%`;
    
    uiElements.completionModal.classList.add('show');
    playSound(SOUNDS.COMPLETE);
    
    // Marcar como completado en progreso
    saveProgress({
      total: layout.words.length,
      solved: gameState.solved.size,
      score: gameState.score,
      attempts: gameState.attempts,
      completed: true
    });
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

    // Actualizar slots visuales
    function updateVisualSlots(text, correctAnswer = null) {
      const slots = uiElements.visualInput?.querySelectorAll('.letter-slot') || [];
      const normalizedText = normalizeText(text);
      
      slots.forEach((slot, index) => {
        slot.classList.remove('filled', 'active', 'correct', 'incorrect');
        
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
          slot.textContent = '';
          if (index === normalizedText.length) {
            slot.classList.add('active');
          }
        }
      });
    }

    // Validación en tiempo real
    function validateInput(text, targetWord) {
      if (!uiElements.validation) return false;
      
      const normalized = normalizeText(text);
      const target = targetWord.answer;
      
      let status, icon, message, isValid = false;
      
      if (normalized.length === 0) {
        status = 'incomplete';
        icon = 'ℹ️';
        message = 'Escribe tu respuesta...';
      } else if (normalized.length < target.length) {
        status = 'incomplete';
        icon = '⏳';
        message = `Faltan ${target.length - normalized.length} letras`;
      } else if (normalized.length > target.length) {
        status = 'invalid';
        icon = '⚠️';
        message = `Demasiadas letras (máximo ${target.length})`;
      } else {
        const matches = normalized.split('').filter((char, i) => char === target[i]).length;
        if (matches === target.length) {
          status = 'valid';
          icon = '✅';
          message = '¡Respuesta correcta!';
          isValid = true;
        } else if (matches > target.length * 0.7) {
          status = 'incomplete';
          icon = '🔄';
          message = `${matches}/${target.length} letras correctas`;
        } else {
          status = 'invalid';
          icon = '❌';
          message = 'Revisa la ortografía';
        }
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
      uiElements.textInput.maxLength = word.answer.length + 2; // Un poco de margen
      
      // Limpiar event listeners previos
      const newInput = uiElements.textInput.cloneNode(true);
      uiElements.textInput.parentNode.replaceChild(newInput, uiElements.textInput);
      uiElements.textInput = newInput;
      
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
        // Escape para deseleccionar (opcional)
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
      if (uiElements.questionText) uiElements.questionText.textContent = word.clue;
      if (uiElements.lengthInfo) uiElements.lengthInfo.textContent = `${word.answer.length} letras`;
      if (uiElements.difficultyTag) uiElements.difficultyTag.textContent = word.difficulty;
      
      createVisualSlots(word.answer.length);
      setupInputHandler(word);
      
      if (uiElements.inputSection) {
        uiElements.inputSection.classList.add('show');
      }
      
      console.log(`✅ Palabra seleccionada: "${word.answer}" - ${word.clue}`);
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
    function verifyAnswer() {
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
        
        // Llenar celdas con la respuesta
        for (let i = 0; i < word.answer.length; i++) {
          const col = word.startCol + i + layoutData.colOffset;
          const key = `${word.row},${col}`;
          const cell = document.querySelector(`[data-key="${key}"]`);
          if (cell && !cell.classList.contains('central')) {
            cell.textContent = word.answer[i];
            cell.dataset.wordSolved = "1";
            cell.classList.remove('sel');
            cell.style.pointerEvents = "none";
            cell.classList.add('pulse');
          }
        }
        
        playSound(SOUNDS.OK);
        updateHUD();
        
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
          // Seleccionar siguiente palabra no resuelta
          setTimeout(() => {
            const nextWord = layoutData.words.find(w => !gameState.solved.has(w.id));
            if (nextWord) {
              selectWord(nextWord.id);
            }
          }, 500);
        }
        
      } else {
        console.log('❌ Respuesta incorrecta');
        playSound(SOUNDS.ERROR);
        
        // Efecto visual de error
        updateVisualSlots(gameState.currentAnswer, word);
        if (uiElements.visualInput) {
          uiElements.visualInput.classList.add('shake');
          setTimeout(() => uiElements.visualInput.classList.remove('shake'), 500);
        }
        
        // Limpiar input para reintento
        setTimeout(() => {
          gameState.currentAnswer = "";
          uiElements.textInput.value = "";
          updateVisualSlots("");
          validateInput("", word);
          uiElements.textInput.focus();
        }, 1000);
      }
      
      updateHUD();
    }

    // Configurar botón verificar
    if (uiElements.verifyBtn) {
      uiElements.verifyBtn.addEventListener('click', verifyAnswer);
    }

    console.log('✅ UI moderna configurada');

    return {
      selectWord,
      deselectWord,
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
        gridEl.addEventListener("click", (e) => {
          const cell = e.target.closest(".cell.h");
          if (!cell || cell.classList.contains('central')) return;
          
          const wordId = cell.dataset.wordId;
          if (!wordId) return;
          
          // Si ya está resuelta, no hacer nada
          if (gameState.solved.has(wordId)) {
            console.log('⚠️ Intento de seleccionar palabra ya resuelta:', wordId);
            return;
          }
          
          ui.selectWord(wordId);
        });
      }

      // Inicializar HUD
      updateHUD();

      // Seleccionar primera palabra automáticamente
      const firstWord = layout.words.find(w => !gameState.solved.has(w.id));
      if (firstWord) {
        setTimeout(() => ui.selectWord(firstWord.id), 500);
      }

      const totalTime = performance.now() - initTime;
      console.log(`✅ Crucigrama iniciado exitosamente en ${totalTime.toFixed(2)}ms`);

    } catch (error) {
      console.error('❌ Error inicializando crucigrama:', error);
      alert(`Error: ${error.message}`);
    }
  }

  // ===== API PÚBLICA =====
  window.CrosswordEngine = { 
    start,
    getState: () => ({ ...gameState }),
    getLayout: () => layout,
    playSound,
    normalizeText
  };

  const totalLoadTime = performance.now() - startTime;
  console.log(`⚡ Crossword Engine cargado en ${totalLoadTime.toFixed(2)}ms`);

})();