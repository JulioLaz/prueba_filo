// js/caza_conceptos_engine_enhanced.js
// Versión mejorada con lectura obligatoria y destacado gradual

(function () {
  const qs = new URLSearchParams(location.search);
  const tema = qs.get("tema") || "aristoteles";

  // Requiere que el archivo de config del tema defina window.CONCEPT_HUNT_CONFIG
  const CFG = window.CONCEPT_HUNT_CONFIG;
  if (!CFG || !CFG.levels || !Array.isArray(CFG.levels)) {
    console.error("CONFIG no encontrada o mal formada");
    alert("No se pudo cargar la actividad.");
    return;
  }

  console.log("🎯 Iniciando Caza de Conceptos Mejorada...");
  console.log("📊 Configuración cargada:", CFG);

  // ====== CONFIGURACIÓN DE DESTACADO GRADUAL ======
  const HIGHLIGHT_RATIOS = {
    1: 0.7,    // Párrafo 1: 70% de términos destacados
    2: 0.6,    // Párrafo 2: 60%
    3: 0.4,    // Párrafo 3: 40%
    4: 0.3,    // Párrafo 4: 30%
    default: 0.2  // Párrafos 5+: 20% (máximo 2 términos)
  };

  // Retardos para efectos
  const FINAL_MODAL_DELAY_MS = 1400;
  const SUMMARY_DIALOG_DELAY_MS = 1000;

  // Rutas de sonidos
  const SND_CORRECT = "sound/collect_points.mp3";
  const SND_WRONG = "sound/negative_beep.mp3";
  const SND_LEVEL_DONE = "sound/fin_parrafo.mp3";   
  const SND_GAME_DONE = "sound/fin_caza.mp3";
  const SND_CONCEPT_READ = "sound/celebration.mp3";

  // UI refs
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

  // === VARIABLES DE PROGRESO GLOBAL ===
  const TOTAL_CONCEPTS = CFG.levels.reduce((acc, lv) => acc + ((lv.concepts || []).length), 0);
  let overallFoundCount = 0;
  let globalFound = new Set();

  console.log(`📈 Total de conceptos en el juego: ${TOTAL_CONCEPTS}`);

  // Leer progreso existente
  const existingProgress = JSON.parse(sessionStorage.getItem(`tema.${hubTemaSlug()}.caza`) || '{}');
  overallFoundCount = existingProgress.found || 0;
  globalFound = new Set(existingProgress.foundConcepts || []);

  // === SISTEMA DE LECTURA MODAL ===
  let currentReadAloudModal = null;

  // === Funciones de progreso para el hub ===
  function hubTemaSlug() {
    const p = new URLSearchParams(location.search);
    return p.get('tema') || p.get('theme') || sessionStorage.getItem('tema.active') || 'aristoteles';
  }

  function hubSaveConcept(data) {
    const slug = hubTemaSlug();
    const key = `tema.${slug}.caza`;
    
    const total = typeof data.total === 'number' && !isNaN(data.total) ? data.total : TOTAL_CONCEPTS;
    const found = typeof data.found === 'number' && !isNaN(data.found) ? data.found : 0;
    const completed = typeof data.completed === 'boolean' ? data.completed : false;

    const state = {
      total: total,
      found: found,
      completed: completed,
      foundConcepts: Array.from(globalFound)
    };

    console.log(`💾 Guardando progreso para ${slug}:`, state);
    sessionStorage.setItem(key, JSON.stringify(state));
  }

  // === DESTACADO GRADUAL INTELIGENTE ===
  function getHighlightRatio(levelIndex) {
    const levelNum = levelIndex + 1;
    return HIGHLIGHT_RATIOS[levelNum] || HIGHLIGHT_RATIOS.default;
  }

  function selectConceptsToHighlight(concepts, ratio) {
    if (!concepts || concepts.length === 0) return [];
    
    const maxHighlighted = Math.max(1, Math.floor(concepts.length * ratio));
    const actualHighlighted = Math.min(maxHighlighted, concepts.length);
    
    // Selección inteligente: priorizar conceptos más importantes/complejos
    const conceptsWithPriority = concepts.map((concept, index) => ({
      ...concept,
      originalIndex: index,
      priority: calculateConceptPriority(concept)
    }));

    // Ordenar por prioridad y tomar los primeros N
    conceptsWithPriority.sort((a, b) => b.priority - a.priority);
    const selected = conceptsWithPriority.slice(0, actualHighlighted);

    console.log(`🎯 Nivel ${idx + 1}: Destacando ${actualHighlighted}/${concepts.length} conceptos (${Math.round(ratio * 100)}%)`);
    
    return selected;
  }

  function calculateConceptPriority(concept) {
    let priority = 0;
    
    // Prioridad por longitud del término (conceptos más complejos)
    priority += concept.term.length * 0.1;
    
    // Prioridad por longitud de significado (conceptos más ricos)
    priority += (concept.meaning || '').length * 0.01;
    
    // Prioridad por palabras especiales en el término
    const specialWords = ['eudaimonía', 'virtud', 'justicia', 'prudencia', 'aristoteles', 'felicidad'];
    if (specialWords.some(word => concept.term.toLowerCase().includes(word.toLowerCase()))) {
      priority += 10;
    }
    
    // Prioridad por guiones (conceptos compuestos)
    if (concept.term.includes('-') || concept.term.includes('_')) {
      priority += 5;
    }
    
    return priority;
  }

  // Inicializa el progreso para el hub
  hubSaveConcept({ total: TOTAL_CONCEPTS, found: overallFoundCount, completed: false });

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

  // === CUADRO DE RESUMEN FINAL ===
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
        .close-btn { background: #1f2937; color: #e5e7eb; border: 1px solid gray; border-radius: 10px; padding: 8px 12px; cursor: pointer; transition: background-color 0.3s, transform 0.1s; font-size: .9rem; width: auto;}
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
          <h3 class="summary-title">
            📚 Resumen de conceptos
          </h3>
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
            ⬅ Volver al menú
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(dlg);

    // Configurar eventos
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
  let idx = 0; // párrafo actual
  let foundSet = new Set(); // conceptos encontrados en este párrafo
  let streak = 0;
  let lives = 10;
  let muted = false;

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
  }

  // === RENDERIZADO CON DESTACADO GRADUAL ===
  function wrapPhrases(text, highlightedConcepts, allConcepts) {
    let html = text;
    
    // Crear un conjunto de términos destacados para búsqueda rápida
    const highlightedTerms = new Set(highlightedConcepts.map(c => c.term));
    
    // Primero, envolver términos destacados (visibles)
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

    // Luego, envolver términos ocultos (sin <strong>, invisibles pero clickeables)
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

    // Calcular destacado gradual
    const highlightRatio = getHighlightRatio(idx);
    const highlightedConcepts = selectConceptsToHighlight(level.concepts || [], highlightRatio);
    const allConcepts = level.concepts || [];

    // 1) Insertar texto base
    paragraphEl.innerHTML = level.html;

    // 2) Envolver con destacado gradual
    paragraphEl.innerHTML = wrapPhrases(paragraphEl.innerHTML, highlightedConcepts, allConcepts);

    // 3) Envolver palabras restantes
    wrapRemainingWords(paragraphEl);

    // 4) Configurar eventos
    paragraphEl.querySelectorAll(".token").forEach((tok) => {
      tok.addEventListener("click", () => onTokenTap(tok, level));
      tok.addEventListener("touchstart", () => {}, { passive: true });
    });

    markLives();
    setCooldown(false);
    updateNavButtons(level);
    
    hubSaveConcept({
      total: TOTAL_CONCEPTS,
      found: overallFoundCount,
      completed: (overallFoundCount >= TOTAL_CONCEPTS)
    });
  }

  // === SISTEMA DE MODAL CON LECTURA OBLIGATORIA ===
  function showMeaningWithReadAloud(concept) {
    // Verificar que el sistema ReadAloudModal esté disponible
    if (!window.ReadAloudModalSystem) {
      console.error('[CazaConceptos] Sistema ReadAloudModal no encontrado');
      // Fallback al sistema anterior
      showMeaningFallback(concept.term, concept.meaning);
      return;
    }

    console.log('[CazaConceptos] Iniciando lectura obligatoria para:', concept.term);

    // Limpiar modal anterior si existe
    if (currentReadAloudModal) {
      currentReadAloudModal.destroy();
      currentReadAloudModal = null;
    }

    // Mostrar modal base
    meaningSheet.classList.add("open");

    // Crear sistema de lectura modal
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

  function onConceptReadingComplete(concept) {
    console.log('[CazaConceptos] Lectura completada para:', concept.term);
    
    // Sonido de celebración por concepto
    play(SND_CONCEPT_READ);
    
    // Cerrar modal automáticamente después de un delay
    setTimeout(() => {
      closeMeaningModal();
    }, 3500);
  }

  function closeMeaningModal() {
    meaningSheet.classList.remove("open");
    
    // Limpiar sistema ReadAloud
    if (currentReadAloudModal) {
      currentReadAloudModal.destroy();
      currentReadAloudModal = null;
    }
  }

  // Configurar evento de cerrar modal
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

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 1. AGREGAR NUEVA CONSTANTE PARA AUTO-CERRAR MODAL
// Agregar esta línea junto a las otras constantes de delay (línea ~28)
const LEVEL_COMPLETED_AUTO_CLOSE_MS = 4000; // 4 segundos para leer el contenido

// 2. VARIABLE PARA CONTROLAR EL TEMPORIZADOR
let levelCompletedTimer = null;

// 3. MODIFICAR LA FUNCIÓN showLevelCompleted
function showLevelCompleted(level, { isLastLevel = false } = {}) {
  // Limpiar temporizador anterior si existe
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

  // NUEVA LÍNEA: Agregar indicador visual de auto-cerrado
  html += `
    <div class="auto-close-indicator" id="auto-close-progress">
      <div class="auto-close-text">Se cerrará automáticamente en <span id="countdown">4</span>s</div>
      <div class="auto-close-bar">
        <div class="auto-close-fill" id="auto-close-fill"></div>
      </div>
    </div>`;

  meaningBody.innerHTML = html;
  meaningSheet.classList.add("open");

  // NUEVA FUNCIONALIDAD: Habilitar botón cerrar inmediatamente
  const closeButton = document.getElementById('close-meaning');
  if (closeButton) {
    closeButton.disabled = false;
    closeButton.style.opacity = '1';
    closeButton.title = 'Cerrar modal';
  }

  updateNavButtons(level, { isLastLevel });

  // NUEVA FUNCIONALIDAD: Iniciar countdown visual
  startAutoCloseCountdown();

  // NUEVA FUNCIONALIDAD: Auto-cerrar después del delay
  levelCompletedTimer = setTimeout(() => {
    console.log('🔄 Auto-cerrando modal de nivel completado');
    closeMeaningModal();
    levelCompletedTimer = null;
  }, LEVEL_COMPLETED_AUTO_CLOSE_MS);

  if (isLastLevel) {
    setTimeout(() => {
      showSummaryDialog(CFG);
    }, SUMMARY_DIALOG_DELAY_MS);
  }
}

// 4. NUEVA FUNCIÓN: Countdown visual
function startAutoCloseCountdown() {
  const countdownEl = document.getElementById('countdown');
  const fillEl = document.getElementById('auto-close-fill');
  
  if (!countdownEl || !fillEl) return;

  let timeLeft = 4; // segundos
  const interval = 100; // actualizar cada 100ms
  const totalSteps = LEVEL_COMPLETED_AUTO_CLOSE_MS / interval;
  let currentStep = 0;

  const countdownInterval = setInterval(() => {
    currentStep++;
    
    // Actualizar barra de progreso
    const progress = (currentStep / totalSteps) * 100;
    fillEl.style.width = `${progress}%`;
    
    // Actualizar contador cada segundo
    const newTimeLeft = Math.ceil((totalSteps - currentStep) * interval / 1000);
    if (newTimeLeft !== timeLeft) {
      timeLeft = newTimeLeft;
      countdownEl.textContent = timeLeft;
    }
    
    // Limpiar cuando termine
    if (currentStep >= totalSteps) {
      clearInterval(countdownInterval);
    }
  }, interval);

  // Limpiar intervalo si se cierra manualmente
  setTimeout(() => {
    clearInterval(countdownInterval);
  }, LEVEL_COMPLETED_AUTO_CLOSE_MS + 500);
}

// 5. MODIFICAR closeMeaningModal PARA LIMPIAR TEMPORIZADOR
function closeMeaningModal() {
  // Limpiar temporizador de auto-cerrado
  if (levelCompletedTimer) {
    clearTimeout(levelCompletedTimer);
    levelCompletedTimer = null;
    console.log('⏹️ Cancelado auto-cerrado de modal (cerrado manualmente)');
  }

  meaningSheet.classList.remove("open");
  
  // Limpiar sistema ReadAloud
  if (currentReadAloudModal) {
    currentReadAloudModal.destroy();
    currentReadAloudModal = null;
  }
}

// 6. ESTILOS CSS PARA EL INDICADOR DE AUTO-CERRADO
// Agregar estos estilos al final de la función addEnhancedStyles()
function addEnhancedStyles() {
  const styles = document.createElement('style');
  styles.textContent = `
    /* ... estilos existentes ... */

    /* NUEVOS ESTILOS PARA AUTO-CERRADO */
    .auto-close-indicator {
      margin: 16px 0;
      padding: 12px;
      background: linear-gradient(135deg, #eff6ff, #dbeafe);
      border: 1px solid #93c5fd;
      border-radius: 8px;
      text-align: center;
    }

    .auto-close-text {
      font-size: 0.9rem;
      color: #1e40af;
      font-weight: 600;
      margin-bottom: 8px;
    }

    .auto-close-bar {
      width: 100%;
      height: 6px;
      background: #e5e7eb;
      border-radius: 3px;
      overflow: hidden;
    }

    .auto-close-fill {
      height: 100%;
      background: linear-gradient(90deg, #3b82f6, #1d4ed8);
      border-radius: 3px;
      width: 0%;
      transition: width 0.1s linear;
    }

    /* Animación de pulso para el countdown */
    .auto-close-text span {
      display: inline-block;
      animation: countdownPulse 1s infinite;
      color: #dc2626;
      font-weight: 700;
    }

    @keyframes countdownPulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }

    /* Hover para cancelar auto-cerrado */
    .meaning-sheet:hover .auto-close-indicator {
      opacity: 0.7;
    }
  `;
  document.head.appendChild(styles);
}

// 7. OPCIONAL: PAUSAR AUTO-CERRADO AL HACER HOVER
// Agregar event listeners para pausar/reanudar en hover
function setupModalHoverPause() {
  meaningSheet.addEventListener('mouseenter', () => {
    if (levelCompletedTimer) {
      console.log('⏸️ Pausando auto-cerrado (mouse over modal)');
      clearTimeout(levelCompletedTimer);
      levelCompletedTimer = null;
      
      // Opcional: Mostrar mensaje de pausa
      const indicator = document.getElementById('auto-close-progress');
      if (indicator) {
        indicator.innerHTML = `
          <div class="auto-close-text">Auto-cerrado pausado - Haz clic fuera para reanudar</div>
          <div class="auto-close-bar"><div class="auto-close-fill" style="width: 100%; background: #f59e0b;"></div></div>
        `;
      }
    }
  });
}

// INTEGRACIÓN: Llamar setupModalHoverPause() al final de la inicialización
console.log("🚀 Iniciando juego mejorado con auto-cerrado de modales...");
addEnhancedStyles();
setupModalHoverPause(); // NUEVA LÍNEA
renderLevel();


  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function showLevelCompleted_000(level, { isLastLevel = false } = {}) {
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
    meaningBody.innerHTML = html;
    meaningSheet.classList.add("open");

    updateNavButtons(level, { isLastLevel });

    if (isLastLevel) {
      setTimeout(() => {
        showSummaryDialog(CFG);
      }, SUMMARY_DIALOG_DELAY_MS);
    }
  }

  function onCorrect(token, level, keyNorm) {
    if (token.classList.contains("correct")) return;
    
    token.classList.add("correct");
    streak++;

    const concept = level.concepts.find(c => normalize(c.term) === keyNorm);
    if (concept) {
      play(SND_CORRECT);
      
      // Usar nuevo sistema de lectura obligatoria
      showMeaningWithReadAloud(concept);
    }

    // Estado local
    foundSet.add(keyNorm);
    updateHeader(level);
    updateNavButtons(level);

    // Progreso global
    const gkey = `${idx}:${keyNorm}`;
    if (!globalFound.has(gkey)) {
      globalFound.add(gkey);
      overallFoundCount = Math.min(overallFoundCount + 1, TOTAL_CONCEPTS);
      
      console.log(`✅ Nuevo concepto encontrado! Total: ${overallFoundCount}/${TOTAL_CONCEPTS}`);
      
      hubSaveConcept({
        total: TOTAL_CONCEPTS,
        found: overallFoundCount,
        completed: (overallFoundCount >= TOTAL_CONCEPTS)
      });
    }

    // Verificar si completó el párrafo
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
    const styles = document.createElement('style');
    styles.textContent = `
      .highlighted-concept {
        background: linear-gradient(120deg, #fef3c7 0%, #fcd34d 100%);
        padding: 2px 4px;
        border-radius: 4px;
        transition: all 0.3s ease;
        cursor: pointer;
      }

      .highlighted-concept:hover {
        background: linear-gradient(120deg, #fbbf24 0%, #f59e0b 100%);
        transform: scale(1.05);
      }

      .hidden-concept {
        cursor: pointer;
        transition: background 0.3s ease;
      }

      .hidden-concept:hover {
        background: rgba(251, 191, 36, 0.2);
        border-radius: 3px;
      }

      .token.correct {
        background: linear-gradient(120deg, #dcfce7 0%, #bbf7d0 100%) !important;
        color: #166534 !important;
        font-weight: bold;
      }

      .corollary-box {
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        padding: 16px;
        margin: 16px 0;
      }

      .corollary-box h4 {
        margin: 0 0 12px 0;
        color: #374151;
        font-size: 1.1rem;
      }

      .corollary-list {
        margin: 0;
        padding-left: 0;
        list-style: none;
      }

      .corollary-list li {
        padding: 6px 0;
        border-bottom: 1px solid #e5e7eb;
        color: #4b5563;
      }

      .corollary-list li:last-child {
        border-bottom: none;
      }
    `;
    document.head.appendChild(styles);
  }

  // === INICIALIZACIÓN ===
  console.log("🚀 Iniciando juego mejorado...");
  addEnhancedStyles();
  renderLevel();

})();