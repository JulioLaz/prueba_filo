// // js/crossword_engine.js

// // Ignorar errores de extensiones que ensucian la consola o bloquean la página
// if (!window.__EXT_ERR_GUARD__) {
//   window.__EXT_ERR_GUARD__ = true;
//   window.addEventListener('error', (e) => {
//     const msg = String(e.message || '');
//     if (msg.includes('A listener indicated an asynchronous response')) {
//       e.preventDefault();
//       return false;
//     }
//   });
//   window.addEventListener('unhandledrejection', (e) => {
//     const msg = String((e.reason && e.reason.message) || e.reason || '');
//     if (msg.includes('A listener indicated an asynchronous response')) {
//       e.preventDefault();
//     }
//   });
// }


// (function () {
//   // ===== util =====
//   const SND_OK = "sound/collect_points.mp3";
//   const SND_ERR = "sound/negative_beep.mp3";
//   let muted = false;

//   const play = (file) => {
//     if (muted) return;
//     try { new Audio(file).play().catch(()=>{}); } catch {}
//   };

//   const norm = (s) => String(s || "")
//     .toUpperCase()
//     .normalize("NFD")
//     .replace(/\p{Diacritic}/gu, "")
//     .replace(/[^A-ZÑÁÉÍÓÚÜ]/gi, "") // letras solo
//     .replace(/Á/g,"A").replace(/É/g,"E").replace(/Í/g,"I").replace(/Ó/g,"O").replace(/Ú/g,"U");

//   const getTema = () => {
//     const qs = new URLSearchParams(location.search);
//     return qs.get("tema") || qs.get("theme") || "sartre";
//   };

//   // guardar progreso para el hub
//   function hubSaveCross(partial) {
//     const slug = getTema();
//     const keys = [`tema.${slug}.cruci`, `tema.${slug}.cross`]; // 2 claves por compat
//     for (const key of keys) {
//       let prev = {};
//       try { prev = JSON.parse(sessionStorage.getItem(key)) || {}; } catch {}
//       const state = { total: partial.total ?? prev.total ?? 0,
//                       solved: partial.solved ?? prev.solved ?? 0,
//                       score: partial.score ?? prev.score ?? 0,
//                       attempts: partial.attempts ?? prev.attempts ?? 0,
//                       completed: partial.completed ?? prev.completed ?? false };
//       sessionStorage.setItem(key, JSON.stringify(state));
//     }
//   }

//   // ===== layout automático =====
//   // Espera config: { title, central, entries: [{answer, clue, crossIndex?, crossLetter?}] }
//   function buildLayout(cfg) {
//     const central = norm(cfg.central).replace(/\s+/g, "");
//     const rows = central.length;

//     // calcular para cada palabra horizontal su fila y columna inicial
//     const usedRows = new Set();
//     const words = cfg.entries.map((e, i) => {
//       // const source = (cfg.entries || []).filter(e => e && e.answer && String(e.answer).trim());
//       // const words = source.map((e, i) => {
//       const ans = norm(e.answer);
//       // 1) elegir punto de cruce
//       let cIdx = typeof e.crossIndex === "number" ? e.crossIndex : -1;
//       let wIdx = -1;

//       if (cIdx >= 0 && cIdx < rows) {
//         const ch = central[cIdx];
//         wIdx = ans.indexOf(ch);
//         if (wIdx === -1) { cIdx = -1; } // si no cruza, seguimos buscando
//       }
//       if (cIdx === -1) {
//         // buscar la primera letra común que deje fila libre
//         outer: for (let ci = 0; ci < central.length; ci++) {
//           const ch = central[ci];
//           const wi = ans.indexOf(ch);
//           if (wi !== -1) {
//             // preferimos filas no usadas
//             if (!usedRows.has(ci)) { cIdx = ci; wIdx = wi; break outer; }
//           }
//         }
//         if (cIdx === -1) { // si nada coincide, forzamos fila libre y cruce en 0
//           for (let ci = 0; ci < central.length; ci++) {
//             if (!usedRows.has(ci)) { cIdx = ci; wIdx = 0; break; }
//           }
//           if (cIdx === -1) { cIdx = 0; wIdx = 0; } // fallback
//         }
//       }

//       usedRows.add(cIdx);

//       // columna de inicio (centralCol = 0)
//       const colStart = -wIdx;
//       const colEnd = colStart + ans.length - 1;

//       return {
//         id: "w" + i,
//         answer: ans,
//         clue: e.clue || "",
//         row: cIdx,
//         colStart, colEnd,
//       };
//     });

//     // dimensiones
//     let minC = 0, maxC = 0;
//     for (const w of words) { minC = Math.min(minC, w.colStart); maxC = Math.max(maxC, w.colEnd); }
//     const cols = (maxC - minC + 1);
//     const shift = -minC; // para llevar todo a >= 0

//     // mapa de celdas
//     const cells = new Map(); // "r,c" -> { ch, central?, wordId?, wordIndex? }
//     for (let r = 0; r < rows; r++) {
//       const key = `${r},${shift}`;
//       cells.set(key, { ch: central[r], central: true });
//     }
//     for (const w of words) {
//       for (let i = 0; i < w.answer.length; i++) {
//         const c = w.colStart + i + shift;
//         const key = `${w.row},${c}`;
//         const cur = cells.get(key) || {};
//         const ch = w.answer[i];
//         cells.set(key, {
//           ...cur,
//           ch,
//           wordId: w.id,
//           wordIndex: i,
//           // guardamos que es celda de palabra horizontal
//           h: true
//         });
//       }
//     }

//     return { rows, cols, shift, centralCol: shift, words, cells };
//   }

//   // añade esto arriba (fuera de start)
// function wireOverlayClose() {
//   // IDs según el HTML del crucigrama que te pasé
//   const overlay  = document.getElementById('cw-modal');
//   const closeBtn = document.getElementById('cw-close');

//   if (!overlay || !closeBtn) return; // si no existe el modal, no hace nada

//   // Botón cerrar
//   closeBtn.addEventListener('click', () => overlay.classList.remove('open'));

//   // Click fuera de la tarjeta
//   overlay.addEventListener('click', (e) => {
//     if (e.target === overlay) overlay.classList.remove('open');
//   });

//   // Tecla ESC
//   document.addEventListener('keydown', (e) => {
//     if (e.key === 'Escape') overlay.classList.remove('open');
//   });
// }

//   // ===== render + interacción =====
//   function start(cfg, options = {}) {
//     const tema = options.tema || getTema();

//     const state = {
//       solved: new Set(),    // ids de palabras resueltas
//       letters: new Map(),   // "r,c" -> letra ingresada (para persistencia si quieres)
//       score: 0,
//       tries: 0
//     };

//     const gridEl = document.getElementById("grid");
//     const cluebar = document.getElementById("cluebar");
//     const clueText = document.getElementById("clueText");
//     const clueLen = document.getElementById("clueLen");
//     const answerBtn = document.getElementById("answerBtn");
//     const cancelBtn = document.getElementById("cancelBtn");
//     const muteBtn = document.getElementById("muteBtn");

//     const progEl = document.getElementById("prog");
//     const scoreEl = document.getElementById("score");
//     const triesEl = document.getElementById("tries");

//     muteBtn.addEventListener("click", () => {
//       muted = !muted;
//       muteBtn.textContent = muted ? "🔇" : "🔊";
//     });

//     const layout = buildLayout(cfg);

//     // grilla
//     gridEl.style.gridTemplateColumns = `repeat(${layout.cols}, 1fr)`;
//     gridEl.innerHTML = "";

//     // track por palabra -> coordenadas
//     const wordCells = new Map(); // id -> array [{r,c,el}]
//     for (let r = 0; r < layout.rows; r++) {
//       for (let c = 0; c < layout.cols; c++) {
//         const K = `${r},${c}`;
//         const data = layout.cells.get(K);
//         if (!data) {
//           const cell = document.createElement("div");
//           cell.className = "cell empty";
//           gridEl.appendChild(cell);
//           continue;
//         }

//         const cell = document.createElement("div");
//         cell.className = "cell";
//         if (data.central) cell.classList.add("central");
//         if (data.h) cell.classList.add("h");
//         cell.dataset.rc = K;
//         cell.dataset.ch = data.ch;

//         // central visible; horizontales vacías
//         cell.textContent = data.central ? data.ch : "";

//         // vincular a palabra
//         if (data.wordId) {
//           cell.dataset.wordId = data.wordId;
//           let arr = wordCells.get(data.wordId);
//           if (!arr) { arr = []; wordCells.set(data.wordId, arr); }
//           arr.push({ r, c, el: cell });
//         }

//         gridEl.appendChild(cell);
//       }
//     }

//     // ordenar celdas de cada palabra por columna ascendente para rellenar bien
//     for (const [id, arr] of wordCells) {
//       arr.sort((a,b)=>a.c-b.c);
//     }

//     // estado y HUD
//     const total = layout.words.length;
//     function refreshHUD() {
//       progEl.textContent = `${state.solved.size}/${total}`;
//       scoreEl.textContent = state.score;
//       triesEl.textContent = state.tries;
//       hubSaveCross({
//         total,
//         solved: state.solved.size,
//         score: state.score,
//         attempts: state.tries,
//         completed: state.solved.size >= total
//       });
//     }
//     refreshHUD();

//     // selección de palabra al tocar una celda horizontal
//     let currentWordId = null;
//     const kb = document.getElementById("kb");

//     function selectWord(id) {
//       currentWordId = id;
//       // limpiar selección
//       gridEl.querySelectorAll(".cell.sel").forEach(n => n.classList.remove("sel"));

//       const w = layout.words.find(x => x.id === id);
//       const celdas = wordCells.get(id) || [];

//       celdas.forEach(o => o.el.classList.add("sel"));
//       // mostrar barra
//       // clueText.textContent = cfg.entries[parseInt(id.slice(1),10)].clue || "—";
//       clueText.textContent = w.clue || "—";
//       clueLen.textContent = `(${w.answer.length} letras)`;
//       cluebar.style.display = "block";
//       document.getElementById("kb").style.display = "none";
//       cluebar.style.display = "block";
//       if (kb) kb.style.display = "none"; // ← guarda si no existe
//     }

//     gridEl.addEventListener("click", (e) => {
//       const cell = e.target.closest(".cell.h");
//       if (!cell) return;
//       const id = cell.dataset.wordId;
//       if (!id) return;
//       if (state.solved.has(id)) return; // ya resuelto
//       selectWord(id);
//     });

//     cancelBtn.addEventListener("click", () => {
//       currentWordId = null;
//       gridEl.querySelectorAll(".cell.sel").forEach(n => n.classList.remove("sel"));
//       cluebar.style.display = "none";
//     });

//     // respuesta: prompt simple (rápido y mobile-friendly)
//     answerBtn.addEventListener("click", async () => {
//       if (!currentWordId) return;
//       const w = layout.words.find(x => x.id === currentWordId);
//       const want = w.answer;
//       // input con prompt (simple) – si prefieres teclado on-screen, se puede ampliar
//       const val = window.prompt(cfg.promptText || "Escribí la palabra:", "");
//       if (val == null) return;

//       const given = norm(val);
//       if (given === want) {
//         // rellenar celdas
//         const celdas = wordCells.get(currentWordId) || [];
//         celdas.forEach((o, i) => {
//           o.el.textContent = want[i];
//           o.el.dataset.wordSolved = "1";
//           o.el.classList.remove("sel");
//         });
//         state.solved.add(currentWordId);
//         state.score += 10;
//         play(SND_OK);
//         cluebar.style.display = "none";
//         refreshHUD();

//         // fin
//         if (state.solved.size >= total) {
//           gridEl.classList.add("done");
//           setTimeout(()=>alert("¡Excelente! Completaste el crucigrama."), 200);
//         }
//       } else {
//         state.tries++;
//         play(SND_ERR);
//         refreshHUD();
//         // pequeño shake visual
//         gridEl.querySelectorAll(".cell.sel").forEach(n=>{
//           n.style.transform = "translateX(2px)";
//           setTimeout(()=> n.style.transform = "", 120);
//         });
//       }
//     });

//  wireOverlayClose(); 

//     // ayuda: seleccionar primera palabra pendiente
//     const firstPending = layout.words.find(w=>!state.solved.has(w.id));
//     if (firstPending) selectWord(firstPending.id);
//   }

//   // API pública
//   window.CrosswordEngine = { start };
// })();

// js/crossword_engine.js - Versión corregida y optimizada

console.log('🎯 Iniciando Crossword Engine v2.0');
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
    COMPLETE: "sound/fin_caza.mp3"
  };

  let muted = false;
  let gameState = {
    solved: new Set(),
    letters: new Map(),
    score: 0,
    attempts: 0,
    currentWordId: null
  };

  // Reproducir sonidos con manejo de errores
  const playSound = (file) => {
    if (muted) return;
    try {
      const audio = new Audio(file);
      audio.volume = 0.3;
      audio.play().catch(() => console.log('⚠️ No se pudo reproducir sonido:', file));
    } catch (e) {
      console.log('⚠️ Error de audio:', e.message);
    }
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
    console.log(`📝 Palabras horizontales: ${config.entries.length}`);

    const usedRows = new Set();
    const words = [];

    // Procesar cada palabra horizontal
    config.entries.forEach((entry, index) => {
      if (!entry.answer || !entry.clue) {
        console.warn(`⚠️ Entrada ${index} incompleta:`, entry);
        return;
      }

      const answer = normalizeText(entry.answer);
      let crossRow = -1;
      let wordIndex = -1;

      // 1. Si se especifica crossIndex, usarlo
      if (typeof entry.crossIndex === "number" && entry.crossIndex >= 0 && entry.crossIndex < rows) {
        const centralChar = central[entry.crossIndex];
        wordIndex = answer.indexOf(centralChar);
        if (wordIndex !== -1) {
          crossRow = entry.crossIndex;
        }
      }

      // 2. Si no hay crossIndex o no funcionó, buscar automáticamente
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

      // 3. Fallback: usar primera fila disponible
      if (crossRow === -1) {
        for (let i = 0; i < rows; i++) {
          if (!usedRows.has(i)) {
            crossRow = i;
            wordIndex = 0; // Cruce en primera letra
            break;
          }
        }
      }

      // 4. Si todas las filas están ocupadas, usar la primera
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
        startCol: -wordIndex, // Columna inicial (puede ser negativa)
        endCol: -wordIndex + answer.length - 1,
        crossIndex: wordIndex
      };

      words.push(word);
      console.log(`✅ Palabra ${index}: "${answer}" en fila ${crossRow}, cols ${word.startCol}-${word.endCol}`);
    });

    // Calcular dimensiones del tablero
    let minCol = 0, maxCol = 0;
    words.forEach(word => {
      minCol = Math.min(minCol, word.startCol);
      maxCol = Math.max(maxCol, word.endCol);
    });

    const cols = maxCol - minCol + 1;
    const colOffset = -minCol; // Para convertir coordenadas negativas a positivas
    const centralCol = colOffset; // Columna donde va la palabra central

    console.log(`📊 Dimensiones: ${rows}x${cols}, columna central: ${centralCol}`);

    // Crear mapa de celdas
    const cellMap = new Map();

    // Colocar palabra central (vertical)
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

    // Colocar palabras horizontales
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

    const layout = {
      rows,
      cols,
      centralCol,
      colOffset,
      words,
      cellMap
    };

    console.log('✅ Layout construido exitosamente');
    return layout;
  }

  // ===== RENDERIZADO DEL TABLERO =====
  function renderBoard(layout) {
    console.log('🎨 Renderizando tablero...');
    
    const gridEl = document.getElementById("grid");
    if (!gridEl) {
      throw new Error('No se encontró elemento #grid');
    }

    gridEl.style.gridTemplateColumns = `repeat(${layout.cols}, 1fr)`;
    gridEl.innerHTML = "";

    const cellElements = new Map(); // Para referencia rápida

    // Crear celdas
    for (let row = 0; row < layout.rows; row++) {
      for (let col = 0; col < layout.cols; col++) {
        const key = `${row},${col}`;
        const cellData = layout.cellMap.get(key);

        const cellEl = document.createElement("div");
        cellEl.className = "cell";
        cellEl.dataset.row = row;
        cellEl.dataset.col = col;
        cellEl.dataset.key = key;

        if (!cellData) {
          // Celda vacía
          cellEl.classList.add("empty");
          cellEl.style.visibility = "hidden";
        } else {
          // Celda con contenido
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
            
            // Solo las celdas horizontales son clickeables
            if (!cellData.isCentral) {
              cellEl.style.cursor = "pointer";
            }
          }
        }

        gridEl.appendChild(cellEl);
        cellElements.set(key, cellEl);
      }
    }

    console.log('✅ Tablero renderizado');
    return cellElements;
  }

  // ===== LÓGICA DE JUEGO =====
  function setupGameLogic(layout, cellElements) {
    console.log('🎮 Configurando lógica de juego...');

    const elements = {
      cluebar: document.getElementById("cluebar"),
      clueText: document.getElementById("clueText"),
      clueLen: document.getElementById("clueLen"),
      answerBtn: document.getElementById("answerBtn"),
      cancelBtn: document.getElementById("cancelBtn"),
      prog: document.getElementById("prog"),
      score: document.getElementById("score"),
      tries: document.getElementById("tries"),
      muteBtn: document.getElementById("muteBtn"),
      grid: document.getElementById("grid")
    };

    // Verificar elementos requeridos
    Object.entries(elements).forEach(([key, el]) => {
      if (!el) console.warn(`⚠️ Elemento #${key} no encontrado`);
    });

    // Configurar botón de sonido
    if (elements.muteBtn) {
      elements.muteBtn.addEventListener("click", () => {
        muted = !muted;
        elements.muteBtn.textContent = muted ? "🔇" : "🔊";
        console.log(`🔊 Sonido ${muted ? 'desactivado' : 'activado'}`);
      });
    }

    // Actualizar HUD
    function updateHUD() {
      const totalWords = layout.words.length;
      const solvedCount = gameState.solved.size;
      
      if (elements.prog) elements.prog.textContent = `${solvedCount}/${totalWords}`;
      if (elements.score) elements.score.textContent = gameState.score;
      if (elements.tries) elements.tries.textContent = gameState.attempts;

      // Guardar progreso
      saveProgress({
        total: totalWords,
        solved: solvedCount,
        score: gameState.score,
        attempts: gameState.attempts,
        completed: solvedCount >= totalWords
      });

      console.log(`📊 HUD actualizado: ${solvedCount}/${totalWords} palabras, ${gameState.score} puntos`);
    }

    // Seleccionar palabra
    function selectWord(wordId) {
      console.log(`🎯 Seleccionando palabra: ${wordId}`);
      
      gameState.currentWordId = wordId;
      
      // Limpiar selección anterior
      cellElements.forEach(cell => cell.classList.remove("sel"));
      
      // Encontrar palabra
      const word = layout.words.find(w => w.id === wordId);
      if (!word) {
        console.error('❌ Palabra no encontrada:', wordId);
        return;
      }

      // Verificar si ya está resuelta
      if (gameState.solved.has(wordId)) {
        console.log('⚠️ Palabra ya resuelta:', wordId);
        return;
      }

      // Marcar celdas de la palabra como seleccionadas
      for (let i = 0; i < word.answer.length; i++) {
        const col = word.startCol + i + layout.colOffset;
        const key = `${word.row},${col}`;
        const cell = cellElements.get(key);
        if (cell && !cell.classList.contains('central')) {
          cell.classList.add("sel");
        }
      }

      // Mostrar pista
      if (elements.cluebar && elements.clueText && elements.clueLen) {
        elements.clueText.textContent = word.clue;
        elements.clueLen.textContent = `(${word.answer.length} letras)`;
        elements.cluebar.style.display = "block";
      }

      console.log(`✅ Palabra seleccionada: "${word.answer}" - ${word.clue}`);
    }

    // Deseleccionar palabra
    function deselectWord() {
      console.log('❌ Deseleccionando palabra');
      
      gameState.currentWordId = null;
      cellElements.forEach(cell => cell.classList.remove("sel"));
      
      if (elements.cluebar) {
        elements.cluebar.style.display = "none";
      }
    }

    // Manejar clicks en celdas
    if (elements.grid) {
      elements.grid.addEventListener("click", (e) => {
        const cell = e.target.closest(".cell.h");
        if (!cell || cell.classList.contains('central')) return;
        
        const wordId = cell.dataset.wordId;
        if (!wordId) return;
        
        // Si ya está resuelta, no hacer nada
        if (gameState.solved.has(wordId)) {
          console.log('⚠️ Intento de seleccionar palabra ya resuelta:', wordId);
          return;
        }
        
        selectWord(wordId);
      });
    }

    // Botón cancelar
    if (elements.cancelBtn) {
      elements.cancelBtn.addEventListener("click", deselectWord);
    }

    // Botón responder
    if (elements.answerBtn) {
      elements.answerBtn.addEventListener("click", () => {
        if (!gameState.currentWordId) {
          console.log('⚠️ No hay palabra seleccionada');
          return;
        }

        const word = layout.words.find(w => w.id === gameState.currentWordId);
        if (!word) {
          console.error('❌ Palabra no encontrada para responder');
          return;
        }

        // Solicitar respuesta
        const userAnswer = window.prompt(
          `Palabra de ${word.answer.length} letras:\n"${word.clue}"`,
          ""
        );

        if (userAnswer === null) return; // Usuario canceló

        const normalizedAnswer = normalizeText(userAnswer);
        const correctAnswer = word.answer;

        console.log(`🔍 Respuesta usuario: "${userAnswer}" → "${normalizedAnswer}"`);
        console.log(`✅ Respuesta correcta: "${correctAnswer}"`);

        gameState.attempts++;

        if (normalizedAnswer === correctAnswer) {
          console.log('🎉 ¡Respuesta correcta!');
          
          // Marcar como resuelta
          gameState.solved.add(gameState.currentWordId);
          gameState.score += 10;
          
          // Llenar celdas con la respuesta
          for (let i = 0; i < word.answer.length; i++) {
            const col = word.startCol + i + layout.colOffset;
            const key = `${word.row},${col}`;
            const cell = cellElements.get(key);
            if (cell && !cell.classList.contains('central')) {
              cell.textContent = word.answer[i];
              cell.dataset.wordSolved = "1";
              cell.classList.remove("sel");
              cell.style.pointerEvents = "none"; // Deshabilitar clicks
            }
          }
          
          playSound(SOUNDS.OK);
          deselectWord();
          updateHUD();
          
          // Verificar si se completó el juego
          if (gameState.solved.size >= layout.words.length) {
            console.log('🏆 ¡Juego completado!');
            elements.grid.classList.add("done");
            playSound(SOUNDS.COMPLETE);
            setTimeout(() => {
              alert("¡Excelente! Has completado el crucigrama.");
            }, 500);
          } else {
            // Seleccionar siguiente palabra no resuelta
            const nextWord = layout.words.find(w => !gameState.solved.has(w.id));
            if (nextWord) {
              setTimeout(() => selectWord(nextWord.id), 300);
            }
          }
          
        } else {
          console.log('❌ Respuesta incorrecta');
          playSound(SOUNDS.ERROR);
          
          // Efecto visual de error
          const selectedCells = Array.from(cellElements.values()).filter(cell => 
            cell.classList.contains("sel")
          );
          
          selectedCells.forEach(cell => {
            cell.style.transform = "translateX(4px)";
            cell.style.backgroundColor = "#ef4444";
            setTimeout(() => {
              cell.style.transform = "";
              cell.style.backgroundColor = "";
            }, 200);
          });
        }
        
        updateHUD();
      });
    }

    // Inicializar HUD
    updateHUD();

    // Seleccionar primera palabra
    const firstWord = layout.words.find(w => !gameState.solved.has(w.id));
    if (firstWord) {
      setTimeout(() => selectWord(firstWord.id), 500);
    }

    console.log('✅ Lógica de juego configurada');
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
        letters: new Map(),
        score: 0,
        attempts: 0,
        currentWordId: null
      };

      // Actualizar título si existe
      const titleEl = document.getElementById("title");
      if (titleEl && config.title) {
        titleEl.textContent = config.title;
      }

      // Construir layout
      const layout = buildCrosswordLayout(config);
      
      // Renderizar tablero
      const cellElements = renderBoard(layout);
      
      // Configurar lógica
      setupGameLogic(layout, cellElements);

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
    playSound,
    normalizeText
  };

  const totalLoadTime = performance.now() - startTime;
  console.log(`⚡ Crossword Engine cargado en ${totalLoadTime.toFixed(2)}ms`);

})();