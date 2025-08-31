// js/caza_conceptos_engine.js

(function () {
  const qs = new URLSearchParams(location.search);
  const tema = qs.get("tema") || "sartre";

  // Requiere que el archivo de config del tema defina window.CONCEPT_HUNT_CONFIG
  const CFG = window.CONCEPT_HUNT_CONFIG;
  if (!CFG || !CFG.levels || !Array.isArray(CFG.levels)) {
    console.error("CONFIG no encontrada o mal formada");
    alert("No se pudo cargar la actividad.");
    return;
  }

  console.log("🎯 Iniciando Caza de Conceptos...");
  console.log("📊 Configuración cargada:", CFG);

  // ====== NUEVO: retardo para el modal final (ajustable) ======
  const FINAL_MODAL_DELAY_MS = 1400; // 700–1200 ms se siente bien en móvil

  // Rutas de sonidos
  const SND_CORRECT = "sound/collect_points.mp3";
  const SND_WRONG = "sound/negative_beep.mp3";
  const SND_LEVEL_DONE = "sound/fin_parrafo.mp3";   
  const SND_GAME_DONE  = "sound/fin_caza.mp3";    

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

  const SUMMARY_DIALOG_DELAY_MS = 1000;

  // === VARIABLES DE PROGRESO GLOBAL UNIFICADAS ===
  const TOTAL_CONCEPTS = CFG.levels.reduce((acc, lv) => acc + ((lv.concepts || []).length), 0);
  let overallFoundCount = 0;
  let globalFound = new Set();

  console.log(`📈 Total de conceptos en el juego: ${TOTAL_CONCEPTS}`);

// Leer progreso existente al inicializar
const existingProgress = JSON.parse(sessionStorage.getItem(`tema.${hubTemaSlug()}.caza`) || '{}');
overallFoundCount = existingProgress.found || 0;
globalFound = new Set(existingProgress.foundConcepts || []);
// Reconstruir globalFound basándose en el progreso guardado


  // === Funciones de progreso para el hub ===
  function hubTemaSlug() {
    const p = new URLSearchParams(location.search);
    return p.get('tema') || p.get('theme') || sessionStorage.getItem('tema.active') || 'sartre';
  }

  function hubSaveConcept(data) {
    const slug = hubTemaSlug();
    const key = `tema.${slug}.caza`;
    
    // Validar que los datos sean números válidos
    const total = typeof data.total === 'number' && !isNaN(data.total) ? data.total : TOTAL_CONCEPTS;
    const found = typeof data.found === 'number' && !isNaN(data.found) ? data.found : 0;
    const completed = typeof data.completed === 'boolean' ? data.completed : false;

    const state = {
      total: total,
      found: found,
      completed: completed,
       oundConcepts: Array.from(globalFound) // Nuevo campo

    };

    console.log(`💾 Guardando progreso para ${slug}:`, state);
    sessionStorage.setItem(key, JSON.stringify(state));
  }

  // Inicializa el progreso para el hub
  hubSaveConcept({ total: TOTAL_CONCEPTS, found: 0, completed: false });

  // Construye el dataset de resumen desde la config
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
    return {
      keywords,
      corollaries
    };
  }

  // Crea el cuadro de diálogo si no existe
  function ensureSummaryDialog() {
    let dlg = document.getElementById('summary-dialog');
    if (dlg) return dlg;

    dlg = document.createElement('div');
    dlg.id = 'summary-dialog';
    dlg.style.position = 'fixed';
    dlg.style.inset = '0';
    dlg.style.background = 'rgba(0,0,0,.45)';
    dlg.style.display = 'none';
    dlg.style.alignItems = 'center';
    dlg.style.justifyContent = 'center';
    dlg.style.zIndex = '9999';

    dlg.innerHTML = `
    <style>
    /* Estilo base de la tarjeta */
  .summary-card {
      width: min(720px, 92vw);
      max-height: 85vh;
      overflow: auto;
      background-color: #111827;
      color: #e5e7eb;
      border-radius: 16px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
      padding: 24px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  }

  /* Encabezado */
  .summary-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      padding-bottom: 16px;
  }

  .summary-title {
      margin: 0;
      font-size: 1.5rem;
      display: flex;
      gap: 0.75rem;
      align-items: center;
  }

  /* Etiqueta del autor */
  .author-tag {
      font-size: 1.1rem;
      background: #a3e635;
      color: #111827;
      border: none;
      border-radius: 6px;
      padding: 4px 10px;
      font-weight: 600;
  }

  /* Botón de cerrar */
  .close-btn {
      background: #1f2937;
      color: #e5e7eb;
      border: none;
      border-radius: 10px;
      padding: 8px 12px;
      cursor: pointer;
      transition: background-color 0.3s, transform 0.1s;
  }

  .close-btn:hover {
      background-color: #374151;
      transform: scale(1.02);
  }

  /* Cuerpo del resumen */
  .summary-body {
      margin-top: 14px;
  }

  .section-title {
      margin: 0.25rem 0 0.5rem 0;
      font-size: 1.2rem;
      color: #9ca3af;
  }
      
  /* Listas de conceptos y corolarios */
  .keyword-list, .corollary-list {
    font-size: 1rem;
    margin: 0 0 1.5rem 1.2rem;
    font-style: italic;
    font-weight: 400;
    line-height: 2;
  }

  /* El estilo de las palabras clave en sí */
  .keyword-list strong {
      color: #38bdf8;
  }

  /* Separador horizontal */
  .divider {
      border: none;
      height: 1px;
      background-color: #374151;
      margin: 1rem 0;
  }
    
    </style>
      <div class="summary-card">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
          <h3 style="margin:0;font-size:1.25rem;display:flex;gap:.5rem;align-items:center;">
          <span id="summary-author" style="font-size:1.2rem;background:#0f172a;color:#a3e635;border:1px solid #3f6212;border-radius:8px;padding:4px 10px;"></span>
            📚 Resumen de conceptos
          </h3>
        </div>

          <button id="summary-close" style="
            background:#1f2937;color:#e5e7eb;border:none;border-radius:10px;padding:8px 12px;cursor:pointer;">
            Cerrar
          </button>
        </div>

        <div class="summary-body">
          <h4 class="section-title">Palabras clave</h4>
          <ul id="summary-keywords" class="keyword-list"></ul>
          <hr class="divider">
          <h4 class="section-title">Frases claves</h4>
          <p id="summary-corollaries" class="corollary-list"></p>
        </div>

        <div style="display:flex;gap:10px;justify-content:flex-end;margin-top:8px;">
        <button id="summary-back" style="
        background:linear-gradient(90deg,#6d28d9,#7c3aed);
        color:white;border:none;border-radius:10px;padding:10px 14px;cursor:pointer;">
        ⬅ Volver al menú
        </button>
        </div>
      </div>
      `;

    document.body.appendChild(dlg);

    // Configurar autor
    const authorEl = dlg.querySelector('#summary-author');
    if (authorEl) {
      const author = (window.CONCEPT_HUNT_CONFIG && window.CONCEPT_HUNT_CONFIG.author) || "Jean-Paul Sartre";
      authorEl.textContent = `${author}`;
    }

    // Cerrar
    dlg.querySelector('#summary-close').addEventListener('click', () => {
      dlg.style.display = 'none';
    });

    const backBtn = dlg.querySelector('#summary-back');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        // Resolver el slug del tema de forma robusta
        const qs = new URLSearchParams(location.search);
        const temaSlug =
          qs.get('tema') ||
          qs.get('theme') ||
          sessionStorage.getItem('tema.active') ||
          sessionStorage.getItem('tema_actual') ||
          localStorage.getItem('tema_actual') ||
          'sartre';

        // Construir la URL usando la URL actual como base
        const hub = new URL('tema.html', location);
        hub.searchParams.set('tema', temaSlug);
        hub.searchParams.set('theme', temaSlug);

        // Limpiar el diálogo antes de salir
        dlg.remove();

        // Navegar
        location.href = hub.toString();
      });
    }
    return dlg;
  }

  // Rellena y muestra el cuadro
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

  // Estado del juego
  let idx = 0; // párrafo actual
  let foundSet = new Set(); // conceptos encontrados en este párrafo
  let streak = 0;
  let lives = 10;
  let muted = false;

  // Efectos simples (opcionales)
  const play = (name) => {
    if (muted) return;
    try {
      const a = new Audio(name);
      a.play().catch(() => {});
    } catch {}
  };

  const normalize = (s) =>
    s
      .toLowerCase()
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
    return level.concepts.length; // por defecto: completar todos
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

  // Envuelve ocurrencias de frases (multi-palabra) sin solaparse
  function wrapPhrases(text, phrases) {
    let html = text;
    phrases
      .filter(Boolean)
      .sort((a, b) => b.length - a.length)
      .forEach((phrase) => {
        const esc = phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        
        // Usar una aproximación de límites de palabra que funcione con acentos
        const re = new RegExp(`(^|[^a-záéíóúüñA-ZÁÉÍÓÚÜÑ\\d_])(${esc})(?=[^a-záéíóúüñA-ZÁÉÍÓÚÜÑ\\d_]|$)`, "gi");
        
        html = html.replace(re, (match, prefix, word) => {
          return `${prefix}<span class="token" data-key="${encodeURIComponent(
            normalize(phrase)
          )}" data-correct="1">${word}</span>`;
        });
      });
    return html;
  }
        
  // Envuelve palabras restantes (para feedback en rojo si tocan algo irrelevante)
  function wrapRemainingWords(container) {
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null);
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);

    textNodes.forEach((node) => {
      // No tocar texto que esté dentro de un token ya marcado
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

    // 1) Primero insertamos el texto bruto
    paragraphEl.innerHTML = level.html;

    // 2) Envolvemos frases/expresiones objetivo
    const conceptTerms = level.concepts.map((c) => c.term);
    paragraphEl.innerHTML = wrapPhrases(paragraphEl.innerHTML, conceptTerms);

    // 3) Envolvemos todo lo no marcado para permitir feedback en click
    wrapRemainingWords(paragraphEl);

    // 4) Listener de tap
    paragraphEl.querySelectorAll(".token").forEach((tok) => {
      tok.addEventListener("click", () => onTokenTap(tok, level));
      tok.addEventListener("touchstart", () => {}, { passive: true });
    });

    markLives();
    setCooldown(false);
    updateNavButtons(level);
    
    // Actualizar progreso en el hub
    hubSaveConcept({
      total: TOTAL_CONCEPTS,
      found: overallFoundCount,
      completed: (overallFoundCount >= TOTAL_CONCEPTS)
    });
  }

  function showMeaning(term, meaning) {
    meaningTitle.textContent = term;
    meaningBody.textContent = meaning;
    meaningSheet.classList.add("open");
  }

  closeMeaning.addEventListener("click", () => {
    meaningSheet.classList.remove("open");
  });

  // Helper para escapar HTML en corolario
  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function showLevelCompleted(level, { isLastLevel = false } = {}) {
    const corollary = Array.isArray(level.corollary) ? level.corollary : [];

    // Sonido de cierre (nivel o juego completo)
    if (isLastLevel) {
      play(SND_GAME_DONE);
    } else {
      play(SND_LEVEL_DONE);
    }

    meaningTitle.textContent = "¡Nivel superado!";
    let html = `<p>Cazaste todos los conceptos clave. Podés avanzar.</p>`;
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

    // Botones (deshabilita "Siguiente" si es el último)
    updateNavButtons(level, { isLastLevel });

    // Al terminar todo, mostramos el cuadro de resumen pasado un pequeño delay
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
      showMeaning(concept.term, concept.meaning);
    }

    // Estado local (párrafo)
    foundSet.add(keyNorm);
    updateHeader(level);
    updateNavButtons(level);

    // ACTUALIZA PROGRESO GLOBAL DEL HUB EN CADA ACIERTO
    const gkey = `${idx}:${keyNorm}`; // cuenta por párrafo+concepto
    if (!globalFound.has(gkey)) {
      globalFound.add(gkey);
      overallFoundCount = Math.min(overallFoundCount + 1, TOTAL_CONCEPTS); // Evitar overflow
      
      console.log(`✅ Nuevo concepto encontrado! Total: ${overallFoundCount}/${TOTAL_CONCEPTS}`);
      
      hubSaveConcept({
        total: TOTAL_CONCEPTS,
        found: overallFoundCount,
        completed: (overallFoundCount >= TOTAL_CONCEPTS)
      });
    }

    // ¿Completaste TODOS los términos de este párrafo?
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

  prevBtn.addEventListener("click", () => {
    if (idx > 0) {
      idx--;
      renderLevel();
    }
  });

  nextBtn.addEventListener("click", () => {
    const level = CFG.levels[idx];
    const threshold = getAdvanceThreshold(level);
    if (foundSet.size < threshold) return; // doble seguridad

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

  // Inicialización del juego
  console.log("🚀 Iniciando juego...");
  renderLevel();

})();