// ========================================
// 🎯 CAZA-CONCEPTOS-ENGINE-FIREBASE.JS
// Motor integrado con Firebase para caza de conceptos
// Basado en el motor enhanced pero con integración Firebase completa
// ========================================

(function () {
  const qs = new URLSearchParams(location.search);
  const tema = qs.get("tema") || "aristoteles";

  // Verificar que existe configuración
  const CFG = window.CONCEPT_HUNT_CONFIG;
  if (!CFG || !CFG.levels || !Array.isArray(CFG.levels)) {
    console.error("CONFIG no encontrada o mal formada");
    alert("No se pudo cargar la actividad.");
    return;
  }

  console.log("🎯 Iniciando Caza de Conceptos con Firebase...");
  console.log("📊 Configuración cargada:", CFG);

  // ====== CONFIGURACIÓN DE DESTACADO GRADUAL ======
  const HIGHLIGHT_RATIOS = {
    1: 0.7,    // Párrafo 1: 70% de términos destacados
    2: 0.6,    // Párrafo 2: 60%
    3: 0.4,    // Párrafo 3: 40%
    4: 0.3,    // Párrafo 4: 30%
    default: 0.2  // Párrafos 5+: 20%
  };

  // Retardos para efectos
  const FINAL_MODAL_DELAY_MS = 1400;
  const SUMMARY_DIALOG_DELAY_MS = 1000;
  const LEVEL_COMPLETED_AUTO_CLOSE_MS = 4000;

  // Rutas de sonidos
  const SND_CORRECT = "sound/collect_points.mp3";
  const SND_WRONG = "sound/negative_beep.mp3";
  const SND_LEVEL_DONE = "sound/fin_parrafo.mp3";   
  const SND_GAME_DONE = "sound/fin_caza.mp3";
  const SND_CONCEPT_READ = "sound/celebration.mp3";

  // Referencias UI
  const paragraphEl = document.getElementById("paragraph");
  const remainingEl = document.getElementById("remaining");
  const levelLabelEl = document.getElementById("level-label");
  const streakEl = document.getElementById("streak");
  const progressFillEl = document.getElementById("progress-fill");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const meaningSheet = document.getElementById("meaning-sheet");
  const meaningTitle = document.getElementById("meaning-title");
  const meaningBody = document.getElementById("meaning-body");
  const closeMeaning = document.getElementById("close-meaning");
  const cooldown = document.getElementById("cooldown");
  const muteBtn = document.getElementById("mute-btn");
  const livesEls = Array.from(document.querySelectorAll(".life"));
  const hintSlot = document.getElementById("hint-slot");

  // === VARIABLES DE PROGRESO GLOBAL CON FIREBASE ===
  const TOTAL_CONCEPTS = CFG.levels.reduce((acc, lv) => acc + ((lv.concepts || []).length), 0);
  let overallFoundCount = 0;
  let globalFound = new Set();
  let gameStartTime = Date.now();
  // ===============================
  let isLastConceptReadingPending = false;
  let currentLevelForCompletion = null;
  // ===============================
  console.log(`📈 Total de conceptos en el juego: ${TOTAL_CONCEPTS}`);

  // Leer progreso existente
  const existingProgress = JSON.parse(sessionStorage.getItem(`tema.${hubTemaSlug()}.caza`) || '{}');
  overallFoundCount = existingProgress.found || 0;
  globalFound = new Set(existingProgress.foundConcepts || []);

  // === SISTEMA DE LECTURA MODAL ===
  let currentReadAloudModal = null;

  // === FUNCIONES DE FIREBASE ===
  function hubTemaSlug() {
    const p = new URLSearchParams(location.search);
    return p.get('tema') || p.get('theme') || sessionStorage.getItem('tema.active') || 'aristoteles';
  }

  // FUNCIÓN PRINCIPAL DE GUARDADO CON FIREBASE
  async function saveConceptProgressFirebase(data) {
    const tema = hubTemaSlug();
    const key = `tema.${tema}.caza`;
    
    const total = typeof data.total === 'number' && !isNaN(data.total) ? data.total : TOTAL_CONCEPTS;
    const found = typeof data.found === 'number' && !isNaN(data.found) ? data.found : 0;
    const completed = typeof data.completed === 'boolean' ? data.completed : false;
    const foundConcepts = Array.isArray(data.foundConcepts) ? data.foundConcepts : Array.from(globalFound);

    const state = {
      total: total,
      found: found,
      completed: completed,
      foundConcepts: foundConcepts,
      timestamp: new Date().toISOString()
    };

    console.log(`💾 [CazaFirebase] Guardando progreso local para ${tema}:`, state);
    
    // Guardar en sessionStorage (compatibilidad)
    sessionStorage.setItem(key, JSON.stringify(state));

    // Guardar en Firebase si hay progreso y función disponible
    if (found > 0 && typeof window.saveCazaProgress === 'function') {
      const timeSpent = Math.round((Date.now() - gameStartTime) / 1000);
      
      try {
        const success = await window.saveCazaProgress(
          found,
          total,
          timeSpent,
          foundConcepts
        );
        
        if (success) {
          console.log(`✅ [CazaFirebase] Guardado exitoso en Firebase: ${Math.round((found/total)*100)}%`);
          
          // Forzar sincronización si está disponible
          if (window.forceSync) {
            setTimeout(() => {
              console.log('🔄 [CazaFirebase] Forzando sincronización...');
              window.forceSync();
            }, 1000);
          }
        }
        
        return success;
      } catch (error) {
        console.error('❌ [CazaFirebase] Error guardando en Firebase:', error);
        return false;
      }
    }
    
    // Emitir evento para otros sistemas
    window.dispatchEvent(new CustomEvent('caza-progress-updated', {
      detail: { data: state, tema }
    }));
    
    return true;
  }

  // Inicializar progreso en Firebase
  saveConceptProgressFirebase({ total: TOTAL_CONCEPTS, found: overallFoundCount, completed: false });

  // === DESTACADO GRADUAL INTELIGENTE ===
  function getHighlightRatio(levelIndex) {
    const levelNum = levelIndex + 1;
    return HIGHLIGHT_RATIOS[levelNum] || HIGHLIGHT_RATIOS.default;
  }

  function selectConceptsToHighlight(concepts, ratio) {
    if (!concepts || concepts.length === 0) return [];
    
    const maxHighlighted = Math.max(1, Math.floor(concepts.length * ratio));
    const actualHighlighted = Math.min(maxHighlighted, concepts.length);
    
    const conceptsWithPriority = concepts.map((concept, index) => ({
      ...concept,
      originalIndex: index,
      priority: calculateConceptPriority(concept)
    }));

    conceptsWithPriority.sort((a, b) => b.priority - a.priority);
    const selected = conceptsWithPriority.slice(0, actualHighlighted);

    console.log(`🎯 Nivel ${idx + 1}: Destacando ${actualHighlighted}/${concepts.length} conceptos (${Math.round(ratio * 100)}%)`);
    
    return selected;
  }

  function calculateConceptPriority(concept) {
    let priority = 0;
    
    priority += concept.term.length * 0.1;
    priority += (concept.meaning || '').length * 0.01;
    
    const specialWords = ['eudaimonía', 'virtud', 'justicia', 'prudencia', 'aristoteles', 'felicidad'];
    if (specialWords.some(word => concept.term.toLowerCase().includes(word.toLowerCase()))) {
      priority += 10;
    }
    
    if (concept.term.includes('-') || concept.term.includes('_')) {
      priority += 5;
    }
    
    return priority;
  }

  // === CONSTRUCCIÓN DE RESUMEN ===
  function buildSummaryData(cfg) {
    const keywords = [];
    const corollaries = [];
    cfg.levels.forEach(lv => {
      (lv.concepts || []).forEach(c => {
        if (c && c.term) {
          keywords.push({
            term: String(c.term),
            meaning: c.meaning ? String(c.meaning) : ""
          });
        }
      });
      if (Array.isArray(lv.corollary)) {
        lv.corollary.forEach(fr => { if (fr) corollaries.push(String(fr)); });
      }
    });
    return { keywords, corollaries };
  }

  // === DIÁLOGO DE RESUMEN ===
  function ensureSummaryDialog() {
    let dlg = document.getElementById('summary-dialog');
    if (dlg) return dlg;

    dlg = document.createElement('div');
    dlg.id = 'summary-dialog';
    dlg.style.cssText = `
      position: fixed; inset: 0; background: rgba(0,0,0,.45); display: none;
      align-items: center; justify-content: center; z-index: 9999;
    `;

    dlg.innerHTML = `
      <style>
        .summary-card {
          width: min(720px, 92vw); max-height: 85vh; overflow: auto;
          background-color: #111827; color: #e5e7eb; border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5); padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }
        .summary-header { display: flex; align-items: center; justify-content: space-between; gap: 8px; padding-bottom: 16px; flex-direction: column; }
        .summary-title { margin: 0; font-size: 1.5rem; display: flex; gap: 0.75rem; align-items: center; }
        .summary-title-btn { display:flex;align-items:center;gap:12px;justify-content:space-between;width:100%; }
        .author-tag { font-size: 1.1rem; background: #a3e635; color: #111827; border: none; border-radius: 6px; padding: 4px 10px; font-weight: 600; }
        .close-btn { background: #1f2937; color: #e5e7eb; border: 1px solid gray; border-radius: 10px; padding: 8px 12px; cursor: pointer; transition: background-color 0.3s, transform 0.1s; font-size: .9rem; }
        .close-btn:hover { background-color: #374151; transform: scale(1.02); }
        .summary-body { margin-top: 14px; }
        .section-title { margin: 0.25rem 0 0.5rem 0; font-size: 1.2rem; color: #9ca3af; }
        .keyword-list, .corollary-list { font-size: 1rem; margin: 0 0 1.5rem 1.2rem; font-style: italic; font-weight: 400; line-height: 2; }
        .keyword-list strong { color: #38bdf8; }
        .divider { border: none; height: 1px; background-color: #374151; margin: 1rem 0; }
      </style>
      <div class="summary-card">
        <div class="summary-header">
         <div class="summary-title-btn">
               <span id="summary-author" class="author-tag">${CFG.author || 'Aristóteles'}</span>
               <button id="summary-close" class="close-btn">X</button>
         </div>
          <h3 class="summary-title">📚 Resumen de conceptos</h3>
        </div>
        <div class="summary-body">
          <h4 class="section-title">Palabras clave</h4>
          <ul id="summary-keywords" class="keyword-list"></ul>
          <hr class="divider">
          <h4 class="section-title">Frases claves</h4>
          <p id="summary-corollaries" class="corollary-list"></p>
        </div>
        <div style="display:flex;gap:10px;justify-content:flex-end;margin-top:8px;">
          <button id="summary-back" style="background:linear-gradient(90deg,#6d28d9,#7c3aed);color:white;border:none;border-radius:10px;padding:10px 14px;cursor:pointer;">
            ← Volver al menú
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(dlg);

    dlg.querySelector('#summary-close').addEventListener('click', () => {
      dlg.style.display = 'none';
    });

    dlg.querySelector('#summary-back').addEventListener('click', () => {
      const temaSlug = hubTemaSlug();
      const hub = new URL('tema.html', location);
      hub.searchParams.set('tema', temaSlug);
      hub.searchParams.set('theme', temaSlug);
      dlg.remove();
      location.href = hub.toString();
    });

    return dlg;
  }

  function showSummaryDialog(cfg) {
    const dlg = ensureSummaryDialog();
    const { keywords, corollaries } = buildSummaryData(cfg);

    const kwEl = dlg.querySelector('#summary-keywords');
    const coEl = dlg.querySelector('#summary-corollaries');

    kwEl.innerHTML = keywords
      .map(k => `<p><strong>${escapeHtml(k.term)}:</strong> ${escapeHtml(k.meaning)}</p>`)
      .join('');

    coEl.innerHTML = corollaries
      .map(f => `<p>✔️ ${escapeHtml(f)}</p>`)
      .join('');

    dlg.style.display = 'flex';
  }

  // === ESTADO DEL JUEGO ===
  let idx = 0;
  let foundSet = new Set();
  let streak = 0;
  let lives = 10;
  let muted = false;
  let levelCompletedTimer = null;

  // === EFECTOS DE SONIDO ===
  const play = (name) => {
    if (muted) return;
    try {
      const a = new Audio(name);
      a.play().catch(() => {});
    } catch {}
  };

  const normalize = (s) =>
    s.toLowerCase()
     .normalize("NFD")
     .replace(/\p{Diacritic}/gu, "")
     .replace(/\s+/g, " ")
     .trim();

  function markLives() {
    livesEls.forEach((el, i) => {
      if (i < lives) {
        el.classList.add("alive");
        el.textContent = "❤️";
      } else {
        el.classList.remove("alive");
        el.textContent = "💔";
      }
    });
  }

  function setCooldown(on) {
    cooldown.classList.toggle("on", on);
  }

  function getAdvanceThreshold(level) {
    if (typeof level.advanceAfter === 'number' && level.advanceAfter > 0) {
      return Math.min(level.advanceAfter, level.concepts.length);
    }
    return level.concepts.length;
  }

  function updateHeader(level) {
    levelLabelEl.textContent = `Párrafo ${idx + 1}/${CFG.levels.length}`;
    const total = level.concepts.length;
    const remaining = total - foundSet.size;
    remainingEl.textContent = remaining;
    streakEl.textContent = streak;
    const pct = total === 0 ? 0 : Math.round((foundSet.size / total) * 100);
    progressFillEl.style.width = `${pct}%`;
    hintSlot.textContent = level.hint ? `💡 Pista: ${level.hint}` : "";
    
    // Actualizar indicador de dificultad si existe
    if (window.updateDifficultyIndicator) {
      window.updateDifficultyIndicator(idx);
    }
  }

  // === RENDERIZADO CON DESTACADO GRADUAL ===
  function wrapPhrases(text, highlightedConcepts, allConcepts) {
    let html = text;
    
    const highlightedTerms = new Set(highlightedConcepts.map(c => c.term));
    
    // Términos destacados (visibles)
    highlightedConcepts
      .sort((a, b) => b.term.length - a.term.length)
      .forEach((concept) => {
        const esc = concept.term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const re = new RegExp(`(^|[^a-záéíóúüñA-ZÁÉÍÓÚÜÑ\\d_])(${esc})(?=[^a-záéíóúüñA-ZÁÉÍÓÚÜÑ\\d_]|$)`, "gi");
        
        html = html.replace(re, (match, prefix, word) => {
          return `${prefix}<strong><span class="token highlighted-concept" data-key="${encodeURIComponent(
            normalize(concept.term)
          )}" data-correct="1">${word}</span></strong>`;
        });
      });

    // Términos ocultos (clickeables pero no visibles)
    allConcepts
      .filter(concept => !highlightedTerms.has(concept.term))
      .sort((a, b) => b.term.length - a.term.length)
      .forEach((concept) => {
        const esc = concept.term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const re = new RegExp(`(^|[^a-záéíóúüñA-ZÁÉÍÓÚÜÑ\\d_])(${esc})(?=[^a-záéíóúüñA-ZÁÉÍÓÚÜÑ\\d_]|$)`, "gi");
        
        html = html.replace(re, (match, prefix, word) => {
          return `${prefix}<span class="token hidden-concept" data-key="${encodeURIComponent(
            normalize(concept.term)
          )}" data-correct="1">${word}</span>`;
        });
      });
    
    return html;
  }

  function wrapRemainingWords(container) {
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null);
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);

    textNodes.forEach((node) => {
      if (node.parentElement && node.parentElement.closest('.token')) return;

      const txt = node.nodeValue;
      if (!txt || !txt.trim()) return;

      const frag = document.createDocumentFragment();
      txt.split(/(\s+)/).forEach((chunk) => {
        if (/\s+/.test(chunk)) {
          frag.appendChild(document.createTextNode(chunk));
        } else {
          const span = document.createElement('span');
          span.className = 'token';
          span.textContent = chunk;
          frag.appendChild(span);
        }
      });
      node.parentNode.replaceChild(frag, node);
    });
  }

  function renderLevel() {
    const level = CFG.levels[idx];
    foundSet = new Set();
    streak = 0;
    updateHeader(level);

    console.log(`📄 Renderizando nivel ${idx + 1}: ${level.concepts?.length || 0} conceptos`);

    const highlightRatio = getHighlightRatio(idx);
    const highlightedConcepts = selectConceptsToHighlight(level.concepts || [], highlightRatio);
    const allConcepts = level.concepts || [];

    paragraphEl.innerHTML = level.html;
    paragraphEl.innerHTML = wrapPhrases(paragraphEl.innerHTML, highlightedConcepts, allConcepts);
    wrapRemainingWords(paragraphEl);

    paragraphEl.querySelectorAll(".token").forEach((tok) => {
      tok.addEventListener("click", () => onTokenTap(tok, level));
      tok.addEventListener("touchstart", () => {}, { passive: true });
    });

    markLives();
    setCooldown(false);
    updateNavButtons(level);
    
    // Guardar progreso actualizado
    saveConceptProgressFirebase({
      total: TOTAL_CONCEPTS,
      found: overallFoundCount,
      completed: (overallFoundCount >= TOTAL_CONCEPTS),
      foundConcepts: Array.from(globalFound)
    });
  }

  // === SISTEMA DE MODAL CON LECTURA ===
  function showMeaningWithReadAloud(concept) {
    if (!window.ReadAloudModalSystem) {
      console.error('[CazaFirebase] Sistema ReadAloudModal no encontrado');
      showMeaningFallback(concept.term, concept.meaning);
      return;
    }

    console.log('[CazaFirebase] Iniciando lectura obligatoria para:', concept.term);

    if (currentReadAloudModal) {
      currentReadAloudModal.destroy();
      currentReadAloudModal = null;
    }

    // ➡️ AÑADIR CLASE PARA BLOQUEAR EL FONDO
    document.body.classList.add("modal-open");

    meaningSheet.classList.add("open");

    currentReadAloudModal = new window.ReadAloudModalSystem(
      meaningSheet, 
      concept, 
      {
        onComplete: (completedConcept) => {
          onConceptReadingComplete(completedConcept);
        }
      }
    );
  }

  function showMeaningFallback(term, meaning) {
    meaningTitle.textContent = term;
    meaningBody.textContent = meaning;
    meaningSheet.classList.add("open");
  }

  // ★ REEMPLAZAR la función onConceptReadingComplete:
function onConceptReadingComplete(concept) {
  console.log('[CazaFirebase] Lectura completada para:', concept.term);
  play(SND_CONCEPT_READ);
  
  // ★ GUARDAR PROGRESO INMEDIATAMENTE después de leer
  saveConceptProgressFirebase({
    total: TOTAL_CONCEPTS,
    found: overallFoundCount,
    completed: (overallFoundCount >= TOTAL_CONCEPTS),
    foundConcepts: Array.from(globalFound)
  });
  
  // ★ NUEVO: Verificar si fue el último concepto
  if (isLastConceptReadingPending) {
    console.log(`🎉 [Lectura] ¡Último concepto leído! Mostrando resumen del párrafo...`);
    
    isLastConceptReadingPending = false;
    
    // Cerrar el modal de lectura después de un breve delay
    setTimeout(() => {
      closeMeaningModal();
      
      // Ahora mostrar el modal de nivel completado
      setTimeout(() => {
        const isLastLevel = idx >= (CFG.levels.length - 1);
        showLevelCompleted(currentLevelForCompletion, { isLastLevel });
        currentLevelForCompletion = null;
        
        if (isLastLevel) {
          setTimeout(() => {
            showSummaryDialog(CFG);
          }, SUMMARY_DIALOG_DELAY_MS);
        }
      }, 500);
    }, 1500);
  } else {
    // Concepto normal (no es el último)
    setTimeout(() => {
      closeMeaningModal();
    }, 2000);
  }
}

  function onConceptReadingComplete_00(concept) {
    console.log('[CazaFirebase] Lectura completada para:', concept.term);
    play(SND_CONCEPT_READ);
    
    setTimeout(() => {
      closeMeaningModal();
    }, 2000);
  }

  function closeMeaningModal() {
    if (levelCompletedTimer) {
      clearTimeout(levelCompletedTimer);
      levelCompletedTimer = null;
    }

    meaningSheet.classList.remove("open");

    // ➡️ REMOVER CLASE PARA DESBLOQUEAR EL FONDO
    document.body.classList.remove("modal-open");
    

    if (currentReadAloudModal) {
      currentReadAloudModal.destroy();
      currentReadAloudModal = null;
    }
  }

  closeMeaning.addEventListener("click", () => {
    closeMeaningModal();
  });

  // === LÓGICA DE ACIERTOS Y ERRORES ===
  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function showLevelCompleted(level, { isLastLevel = false } = {}) {
    if (levelCompletedTimer) {
      clearTimeout(levelCompletedTimer);
      levelCompletedTimer = null;
    }

    const corollary = Array.isArray(level.corollary) ? level.corollary : [];

    if (isLastLevel) {
      play(SND_GAME_DONE);
    } else {
      play(SND_LEVEL_DONE);
    }

    meaningTitle.textContent = "¡Nivel superado!";
    let html = `<p>🎉 Cazaste todos los conceptos clave. Podés avanzar.</p>`;
    
    if (corollary.length > 0) {
      const list = corollary.map(fr => `<li>${escapeHtml(fr)}</li>`).join("");
      html += `
        <div class="corollary-box">
          <h4>Frases clave del texto</h4>
          <ul class="corollary-list">${list}</ul>
        </div>`;
    }

    html += `
      <div class="auto-close-indicator" id="auto-close-progress">
        <div class="auto-close-text">Se cerrará automáticamente en <span id="countdown">4</span>s</div>
        <div class="auto-close-bar">
          <div class="auto-close-fill" id="auto-close-fill"></div>
        </div>
      </div>`;

    meaningBody.innerHTML = html;
    meaningSheet.classList.add("open");

    const closeButton = document.getElementById('close-meaning');
    if (closeButton) {
      closeButton.disabled = false;
      closeButton.style.opacity = '1';
      closeButton.title = 'Cerrar modal';
    }

    updateNavButtons(level, { isLastLevel });

    startAutoCloseCountdown();

    levelCompletedTimer = setTimeout(() => {
      console.log('📄 Auto-cerrando modal de nivel completado');
      closeMeaningModal();
      levelCompletedTimer = null;
    }, LEVEL_COMPLETED_AUTO_CLOSE_MS);

    if (isLastLevel) {
      setTimeout(() => {
        showSummaryDialog(CFG);
      }, SUMMARY_DIALOG_DELAY_MS);
    }
  }

  function startAutoCloseCountdown() {
    const countdownEl = document.getElementById('countdown');
    const fillEl = document.getElementById('auto-close-fill');
    
    if (!countdownEl || !fillEl) return;

    let timeLeft = 4;
    const interval = 100;
    const totalSteps = LEVEL_COMPLETED_AUTO_CLOSE_MS / interval;
    let currentStep = 0;

    const countdownInterval = setInterval(() => {
      currentStep++;
      
      const progress = (currentStep / totalSteps) * 100;
      fillEl.style.width = `${progress}%`;
      
      const newTimeLeft = Math.ceil((totalSteps - currentStep) * interval / 1000);
      if (newTimeLeft !== timeLeft) {
        timeLeft = newTimeLeft;
        countdownEl.textContent = timeLeft;
      }
      
      if (currentStep >= totalSteps) {
        clearInterval(countdownInterval);
      }
    }, interval);

    setTimeout(() => {
      clearInterval(countdownInterval);
    }, LEVEL_COMPLETED_AUTO_CLOSE_MS + 500);
  }

  function onCorrect(token, level, keyNorm) {
  if (token.classList.contains("correct")) return;
  
  token.classList.add("correct");
  streak++;

  const concept = level.concepts.find(c => normalize(c.term) === keyNorm);
  if (concept) {
    play(SND_CORRECT);
    showMeaningWithReadAloud(concept);
  }

  foundSet.add(keyNorm);
  updateHeader(level);
  updateNavButtons(level);

  // *** INTEGRACIÓN FIREBASE ***
  const gkey = `${idx}:${keyNorm}`;
  if (!globalFound.has(gkey)) {
    globalFound.add(gkey);
    overallFoundCount = Math.min(overallFoundCount + 1, TOTAL_CONCEPTS);
    
    console.log(`✅ [CazaFirebase] Nuevo concepto encontrado! Total: ${overallFoundCount}/${TOTAL_CONCEPTS}`);
    
    saveConceptProgressFirebase({
      total: TOTAL_CONCEPTS,
      found: overallFoundCount,
      completed: (overallFoundCount >= TOTAL_CONCEPTS),
      foundConcepts: Array.from(globalFound)
    });
  }

  const total = level.concepts.length;
  
  // ★ NUEVO: Verificar si es el último concepto
  if (foundSet.size >= total) {
    console.log(`🎯 [Lectura] Último concepto encontrado. Esperando lectura...`);
    
    // Marcar que el último concepto requiere lectura
    isLastConceptReadingPending = true;
    currentLevelForCompletion = level;
    
    // ★ NO abrir automáticamente el modal. Esperar a que complete la lectura
    // El modal de lectura ya está abierto desde showMeaningWithReadAloud(concept)
    console.log(`📖 Por favor lee el último término para completar el párrafo`);
  }
}


  function onCorrect_00(token, level, keyNorm) {
    if (token.classList.contains("correct")) return;
    
    token.classList.add("correct");
    streak++;

    const concept = level.concepts.find(c => normalize(c.term) === keyNorm);
    if (concept) {
      play(SND_CORRECT);
      showMeaningWithReadAloud(concept);
    }

    foundSet.add(keyNorm);
    updateHeader(level);
    updateNavButtons(level);

    // *** AQUÍ LA INTEGRACIÓN FIREBASE PRINCIPAL ***
    const gkey = `${idx}:${keyNorm}`;
    if (!globalFound.has(gkey)) {
      globalFound.add(gkey);
      overallFoundCount = Math.min(overallFoundCount + 1, TOTAL_CONCEPTS);
      
      console.log(`✅ [CazaFirebase] Nuevo concepto encontrado! Total: ${overallFoundCount}/${TOTAL_CONCEPTS}`);
      
      // Guardar inmediatamente en Firebase
      saveConceptProgressFirebase({
        total: TOTAL_CONCEPTS,
        found: overallFoundCount,
        completed: (overallFoundCount >= TOTAL_CONCEPTS),
        foundConcepts: Array.from(globalFound)
      });
    }

    const total = level.concepts.length;
    if (foundSet.size >= total) {
      setCooldown(false);
      const isLastLevel = idx >= (CFG.levels.length - 1);
      setTimeout(() => {
        showLevelCompleted(level, { isLastLevel });
      }, FINAL_MODAL_DELAY_MS);
    }
  }

  let cooling = false;

  function onWrong(token) {
    if (cooling) return;
    token.classList.add("wrong", "shake");
    setTimeout(() => token.classList.remove("shake"), 250);

    play(SND_WRONG);

    streak = 0;
    lives = Math.max(0, lives - 1);
    markLives();
    if (lives === 0) {
      cooling = true;
      setCooldown(true);
      setTimeout(() => {
        setCooldown(false);
        cooling = false;
        lives = 3;
        markLives();
      }, 1500);
    }
  }

  function onTokenTap(token, level) {
    if (cooling) return;
    const isCorrect = token.dataset.correct === "1";
    if (isCorrect) {
      const keyNorm = decodeURIComponent(token.dataset.key || "").trim();
      onCorrect(token, level, keyNorm);
    } else {
      onWrong(token);
    }
  }

  // === NAVEGACIÓN ===
  prevBtn.addEventListener("click", () => {
    if (idx > 0) {
      idx--;
      renderLevel();
    }
  });

  nextBtn.addEventListener("click", () => {
    const level = CFG.levels[idx];
    const threshold = getAdvanceThreshold(level);
    if (foundSet.size < threshold) return;

    if (idx < CFG.levels.length - 1) {
      idx++;
      renderLevel();
    }
  });

  muteBtn.addEventListener("click", () => {
    muted = !muted;
    muteBtn.textContent = muted ? "🔇" : "🔊";
  });

  function updateNavButtons(level, options = {}) {
    const { isLastLevel = false } = options;
    
    prevBtn.disabled = idx === 0;

    const threshold = getAdvanceThreshold(level);
    const completos = foundSet.size >= threshold;
    const isLast = idx >= (CFG.levels.length - 1);

    nextBtn.disabled = !completos || isLast || isLastLevel;
  }

  // === ESTILOS ADICIONALES ===
  function addEnhancedStyles() {
    if (document.getElementById('caza-firebase-styles')) return;
    
    const styles = document.createElement('style');
    styles.id = 'caza-firebase-styles';
    styles.textContent = `
      .highlighted-concept {
        background: linear-gradient(120deg, #fef3c7 0%, #fcd34d 100%);
        padding: 2px 4px; border-radius: 4px; transition: all 0.3s ease; cursor: pointer;
      }
      .highlighted-concept:hover {
        background: linear-gradient(120deg, #fbbf24 0%, #f59e0b 100%);
        transform: scale(1.05);
      }
      .hidden-concept { cursor: pointer; transition: background 0.3s ease; }
      .hidden-concept:hover { background: rgba(251, 191, 36, 0.2); border-radius: 3px; }
      .token.correct {
        background: linear-gradient(120deg, #dcfce7 0%, #bbf7d0 100%) !important;
        color: #166534 !important; font-weight: bold;
      }
      .corollary-box {
        background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin: 16px 0;
      }
      .corollary-box h4 { margin: 0 0 12px 0; color: #374151; font-size: 1.1rem; }
      .corollary-list { margin: 0; padding-left: 0; list-style: none; }
      .corollary-list li { padding: 6px 0; border-bottom: 1px solid #e5e7eb; color: #4b5563; }
      .corollary-list li:last-child { border-bottom: none; }
      .auto-close-indicator {
        margin: 16px 0; padding: 12px; background: linear-gradient(135deg, #eff6ff, #dbeafe);
        border: 1px solid #93c5fd; border-radius: 8px; text-align: center;
      }
      .auto-close-text {
        font-size: 0.9rem; color: #1e40af; font-weight: 600; margin-bottom: 8px;
      }
      .auto-close-bar {
        width: 100%; height: 6px; background: #e5e7eb; border-radius: 3px; overflow: hidden;
      }
      .auto-close-fill {
        height: 100%; background: linear-gradient(90deg, #3b82f6, #1d4ed8);
        border-radius: 3px; width: 0%; transition: width 0.1s linear;
      }
      .auto-close-text span {
        display: inline-block; animation: countdownPulse 1s infinite;
        color: #dc2626; font-weight: 700;
      }
      @keyframes countdownPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }
    `;
    document.head.appendChild(styles);
  }

  // === API PÚBLICA PARA DIAGNÓSTICO ===
  window.checkCazaFirebaseStatus = () => {
    console.log('🔍 === ESTADO FIREBASE CAZA DE CONCEPTOS ===');
    console.log(`📊 Progreso: ${overallFoundCount}/${TOTAL_CONCEPTS} (${Math.round((overallFoundCount/TOTAL_CONCEPTS)*100)}%)`);
    console.log(`🎯 Tema: ${hubTemaSlug()}`);
    console.log(`🔥 Firebase: ${typeof window.saveCazaProgress === 'function' ? '✅' : '❌'}`);
    console.log(`⏱️ Tiempo de juego: ${Math.round((Date.now() - gameStartTime) / 1000)}s`);
    console.log(`📝 Conceptos globales encontrados:`, Array.from(globalFound));
  };

  // === INICIALIZACIÓN ===
  console.log("🚀 Iniciando juego con Firebase integrado...");
  addEnhancedStyles();
  
  // Configurar tiempo de inicio global
  window.cazaStartTime = gameStartTime;
  
  renderLevel();

  console.log("✅ Caza de conceptos con Firebase inicializada");
  console.log("🛠️ Función de diagnóstico: checkCazaFirebaseStatus()");

})();