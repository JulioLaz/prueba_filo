// // js/caza_conceptos_engine.js

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

  // ====== NUEVO: retardo para el modal final (ajustable) ======
  const FINAL_MODAL_DELAY_MS = 1200; // 700–1200 ms se siente bien en móvil

  // Rutas de sonidos
  const SND_CORRECT = "sound/collect_points.mp3";
  const SND_WRONG = "sound/negative_beep.mp3";
  const SND_LEVEL_DONE = "sound/fin_parrafo.mp3";   // <- agregá este archivo
  const SND_GAME_DONE  = "sound/fin_caza.mp3";    // <- y este también

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

// modal final
// Aparece el resumen un ratito después del modal final:
const SUMMARY_DIALOG_DELAY_MS = 900;

// Construye el dataset de resumen desde la config
function buildSummaryData(cfg) {
  const keywords = [];
  const corollaries = [];
  cfg.levels.forEach(lv => {
    (lv.concepts || []).forEach(c => {
      if (c && c.term) keywords.push(String(c.term));
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
    <div class="summary-card" style="
      width:min(720px,92vw);
      max-height:85vh;
      overflow:auto;
      background:#111827;
      color:#e5e7eb;
      border-radius:16px;
      box-shadow:0 20px 40px rgba(0,0,0,.35);
      padding:20px 22px;
      border:1px solid rgba(255,255,255,.08);
    ">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
        <h3 style="margin:0;font-size:1.25rem;">📚 Resumen de la caza de conceptos</h3>
        <button id="summary-close" style="
          background:#1f2937;color:#e5e7eb;border:none;border-radius:10px;padding:8px 12px;cursor:pointer;">
          Cerrar
        </button>
      </div>

      <div style="margin-top:14px;">
        <h4 style="margin:.25rem 0 .5rem 0;">Palabras clave</h4>
        <ul id="summary-keywords" style="margin:0 0 1rem 1.2rem;line-height:1.5;"></ul>

        <h4 style="margin:.25rem 0 .5rem 0;">Frases del corolario</h4>
        <ul id="summary-corollaries" style="margin:0 0 1rem 1.2rem;line-height:1.5;"></ul>
      </div>

      <div style="display:flex;gap:10px;justify-content:flex-end;margin-top:8px;">
        <button id="summary-back" style="
          background:linear-gradient(90deg,#6d28d9,#7c3aed);
          color:white;border:none;border-radius:10px;padding:10px 14px;cursor:pointer;">
          ⬅ Volver al menú de Sartre
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(dlg);

  // Cerrar
  dlg.querySelector('#summary-close').addEventListener('click', () => {
    dlg.style.display = 'none';
  });

  // Volver al menú
  dlg.querySelector('#summary-back').addEventListener('click', () => {
    // ajustá la ruta si tu menú de Sartre es otro archivo/url
    location.href = 'sartre.html';
  });

  return dlg;
}

// Rellena y muestra el cuadro
function showSummaryDialog(cfg) {
  const dlg = ensureSummaryDialog();
  const { keywords, corollaries } = buildSummaryData(cfg);

  const kwEl = dlg.querySelector('#summary-keywords');
  const coEl = dlg.querySelector('#summary-corollaries');

  kwEl.innerHTML = keywords.map(k => `<li>${escapeHtml(k)}</li>`).join('');
  coEl.innerHTML = corollaries.map(f => `<li>${escapeHtml(f)}</li>`).join('');

  dlg.style.display = 'flex';
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~fin modal resumen


  // Estado global
  let idx = 0; // párrafo actual
  let foundSet = new Set(); // conceptos encontrados en este párrafo
  let streak = 0;
  let lives = 3;
  let muted = true;

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
      el.textContent = "❤️";   // vida activa
    } else {
      el.classList.remove("alive");
      el.textContent = "💔";   // vida perdida
    }
  });
}
  // function markLives() {
  //   livesEls.forEach((el, i) => {
  //     if (i < lives) el.classList.add("alive");
  //     else el.classList.remove("alive");
  //   });
  // }

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
        // límite de palabra aproximado + acentos
        const re = new RegExp(`\\b(${esc})\\b`, "giu");
        html = html.replace(re, (m) => {
          return `<span class="token" data-key="${encodeURIComponent(
            normalize(phrase)
          )}" data-correct="1">${m}</span>`;
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
      // ⛔️ No tocar texto que esté dentro de un token ya marcado
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

    // 1) Primero insertamos el texto bruto
    paragraphEl.innerHTML = level.html;

    // 2) Envolvemos frases/expresiones objetivo (puede repetir si aparecen varias veces)
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
  }

  function showMeaning(term, meaning) {
    // Para el meaning normal, usamos textContent (sin HTML inyectado)
    meaningTitle.textContent = term;
    meaningBody.textContent = meaning;
    meaningSheet.classList.add("open");
  }

  closeMeaning.addEventListener("click", () => {
    meaningSheet.classList.remove("open");
  });

  // ====== NUEVO: helper para escapar HTML en corolario ======
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

  // Botones (deshabilita “Siguiente” si es el último)
  updateNavButtons(level, { isLastLevel });

  // 👉 Al terminar todo, mostramos el cuadro de resumen pasado un pequeño delay
  if (isLastLevel) {
    setTimeout(() => {
      showSummaryDialog(CFG);
    }, SUMMARY_DIALOG_DELAY_MS);
  }
}


//   function showLevelCompleted(level, { isLastLevel = false } = {}) {
//   const corollary = Array.isArray(level.corollary) ? level.corollary : [];

//   // 🔊 Sonido de cierre (nivel o juego completo)
//   if (isLastLevel) {
//     play(SND_GAME_DONE);
//   } else {
//     play(SND_LEVEL_DONE);
//   }

//   meaningTitle.textContent = "¡Nivel superado!";
//   let html = `<p>Cazaste todos los conceptos clave. Podés avanzar.</p>`;
//   if (corollary.length > 0) {
//     const list = corollary.map(fr => `<li>${escapeHtml(fr)}</li>`).join("");
//     html += `
//       <div class="corollary-box">
//         <h4>Frases clave del texto</h4>
//         <ul class="corollary-list">${list}</ul>
//       </div>`;
//   }
//   meaningBody.innerHTML = html;
//   meaningSheet.classList.add("open");
//   updateNavButtons(level);
// }

  // ====== NUEVO: render del modal final con corolario ======
  // function showLevelCompleted(level) {
  //   const corollary = Array.isArray(level.corollary) ? level.corollary : [];

  //   // No cerramos el sheet anterior: simplemente reemplazamos contenido
  //   meaningTitle.textContent = "¡Nivel superado!";
  //   // Aquí sí usamos innerHTML para poder listar el corolario
  //   let html = `<p>Cazaste todos los conceptos clave. Podés avanzar.</p>`;
  //   if (corollary.length > 0) {
  //     const list = corollary.map(fr => `<li>${escapeHtml(fr)}</li>`).join("");
  //     html += `
  //       <div class="corollary-box">
  //         <h4>Frases clave del texto</h4>
  //         <ul class="corollary-list">${list}</ul>
  //       </div>`;
  //   }
  //   meaningBody.innerHTML = html;

  //   // Aseguramos que el sheet esté visible (por si se cerró)
  //   meaningSheet.classList.add("open");
  //   updateNavButtons(level);
  // }

  function onCorrect(token, level, keyNorm) {
    if (token.classList.contains("correct")) return;
    token.classList.add("correct");
    streak++;

    const concept = level.concepts.find(c => normalize(c.term) === keyNorm);
    if (concept) {
      play(SND_CORRECT); // 🔊 ACERTO      
      // 1) Mostrar significado del acierto (último también)
      showMeaning(concept.term, concept.meaning);
    }

    // 2) Actualizar estado
    foundSet.add(keyNorm);
    updateHeader(level);
    updateNavButtons(level);

    // 3) ¿Completó TODOS los términos del nivel?
    const total = level.concepts.length;
    if (foundSet.size >= total) {
      setCooldown(false);

          // ¿este es el último párrafo del tema?
    const isLastLevel = idx >= (CFG.levels.length - 1);

    setTimeout(() => {
      showLevelCompleted(level, { isLastLevel }); // ← le pasamos el flag
    }, FINAL_MODAL_DELAY_MS);
      // ====== NUEVO: Retardo para dejar ver el último meaning antes del modal final ======
      // setTimeout(() => {
      //   showLevelCompleted(level);
      // }, FINAL_MODAL_DELAY_MS);
    }
  }

  let cooling = false;

  function onWrong(token) {
  if (cooling) return;
  token.classList.add("wrong", "shake");
  setTimeout(() => token.classList.remove("shake"), 250);

  play(SND_WRONG); // 🔊 ERROR

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

//   function onWrong(token) {
//     if (cooling) return;
//     token.classList.add("wrong", "shake");
//     setTimeout(() => token.classList.remove("shake"), 250);
//     // play("data:audio/mp3;base64,//uQxAA...");
//     play("sound/negative_beep.mp3");
//     play("sound/collect_points.mp3");

//  // (silencioso por defecto)
//     streak = 0;
//     lives = Math.max(0, lives - 1);
//     markLives();
//     if (lives === 0) {
//       // cooldown anti-clicks
//       cooling = true;
//       setCooldown(true);
//       setTimeout(() => {
//         setCooldown(false);
//         cooling = false;
//         lives = 3; // restaurar vidas para seguir practicando
//         markLives();
//       }, 1500);
//     }
//   }

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

  // nueva funcion
  function updateNavButtons(level) {
    prevBtn.disabled = idx === 0;

    const threshold = getAdvanceThreshold(level);
    const completos = foundSet.size >= threshold;
    const isLast = idx >= (CFG.levels.length - 1);

    nextBtn.disabled = !completos || isLast;
  }

  // Inicio
  renderLevel();

})();
