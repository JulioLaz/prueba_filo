// // js/caza_conceptos_engine.js
// (function () {
//   const qs = new URLSearchParams(location.search);
//   const tema = qs.get("tema") || "sartre";

//   // Requiere que el archivo de config del tema defina window.CONCEPT_HUNT_CONFIG
//   const CFG = window.CONCEPT_HUNT_CONFIG;
//   if (!CFG || !CFG.levels || !Array.isArray(CFG.levels)) {
//     console.error("CONFIG no encontrada o mal formada");
//     alert("No se pudo cargar la actividad.");
//     return;
//   }

//   // UI refs
//   const paragraphEl = document.getElementById("paragraph");
//   const remainingEl = document.getElementById("remaining");
//   const levelLabelEl = document.getElementById("level-label");
//   const streakEl = document.getElementById("streak");
//   const progressFillEl = document.getElementById("progress-fill");
//   const prevBtn = document.getElementById("prev-btn");
//   const nextBtn = document.getElementById("next-btn");
//   const meaningSheet = document.getElementById("meaning-sheet");
//   const meaningTitle = document.getElementById("meaning-title");
//   const meaningBody = document.getElementById("meaning-body");
//   const closeMeaning = document.getElementById("close-meaning");
//   const cooldown = document.getElementById("cooldown");
//   const muteBtn = document.getElementById("mute-btn");
//   const livesEls = Array.from(document.querySelectorAll(".life"));
//   const hintSlot = document.getElementById("hint-slot");

//   // Estado global
//   let idx = 0; // párrafo actual
//   let foundSet = new Set(); // conceptos encontrados en este párrafo
//   let streak = 0;
//   let lives = 3;
//   let muted = true;

//   // Efectos simples (opcionales)
//   const play = (name) => {
//     if (muted) return;
//     try {
//       const a = new Audio(name);
//       a.play().catch(() => {});
//     } catch {}
//   };

//   const normalize = (s) =>
//     s
//       .toLowerCase()
//       .normalize("NFD")
//       .replace(/\p{Diacritic}/gu, "")
//       .replace(/\s+/g, " ")
//       .trim();

//   function markLives() {
//     livesEls.forEach((el, i) => {
//       if (i < lives) el.classList.add("alive");
//       else el.classList.remove("alive");
//     });
//   }

//   function setCooldown(on) {
//     cooldown.classList.toggle("on", on);
//   }

// function getAdvanceThreshold(level) {
//   if (typeof level.advanceAfter === 'number' && level.advanceAfter > 0) {
//     return Math.min(level.advanceAfter, level.concepts.length);
//   }
//   return level.concepts.length; // por defecto: completar todos
// }


//   function updateHeader(level) {
//     levelLabelEl.textContent = `Párrafo ${idx + 1}/${CFG.levels.length}`;
//     const total = level.concepts.length;
//     const remaining = total - foundSet.size;
//     remainingEl.textContent = remaining;
//     streakEl.textContent = streak;
//     const pct =
//       total === 0 ? 0 : Math.round((foundSet.size / total) * 100);
//     progressFillEl.style.width = `${pct}%`;
//     hintSlot.textContent = level.hint ? `💡 Pista: ${level.hint}` : "";
//   }

//   // Envuelve ocurrencias de frases (multi-palabra) sin solaparse
//   function wrapPhrases(text, phrases) {
//     let html = text;
//     phrases
//       .filter(Boolean)
//       .sort((a, b) => b.length - a.length)
//       .forEach((phrase) => {
//         const esc = phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
//         // límite de palabra aproximado + acentos
//         const re = new RegExp(`\\b(${esc})\\b`, "giu");
//         html = html.replace(re, (m) => {
//           return `<span class="token" data-key="${encodeURIComponent(
//             normalize(phrase)
//           )}" data-correct="1">${m}</span>`;
//         });
//       });
//     return html;
//   }

//   // Envuelve palabras restantes (para feedback en rojo si tocan algo irrelevante)
//   function wrapRemainingWords(container) {
//   const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null);
//   const textNodes = [];
//   while (walker.nextNode()) textNodes.push(walker.currentNode);

//   textNodes.forEach((node) => {
//     // ⛔️ No tocar texto que esté dentro de un token ya marcado
//     if (node.parentElement && node.parentElement.closest('.token')) return;

//     const txt = node.nodeValue;
//     if (!txt || !txt.trim()) return;

//     const frag = document.createDocumentFragment();
//     txt.split(/(\s+)/).forEach((chunk) => {
//       if (/\s+/.test(chunk)) {
//         frag.appendChild(document.createTextNode(chunk));
//       } else {
//         const span = document.createElement('span');
//         span.className = 'token';
//         span.textContent = chunk;
//         frag.appendChild(span);
//       }
//     });
//     node.parentNode.replaceChild(frag, node);
//   });
// }

//   function renderLevel() {
//     const level = CFG.levels[idx];
//     foundSet = new Set();
//     streak = 0;
//     updateHeader(level);

//     // 1) Primero insertamos el texto bruto
//     paragraphEl.innerHTML = level.html;

//     // 2) Envolvemos frases/expresiones objetivo (puede repetir si aparecen varias veces)
//     const conceptTerms = level.concepts.map((c) => c.term);
//     paragraphEl.innerHTML = wrapPhrases(paragraphEl.innerHTML, conceptTerms);

//     // 3) Envolvemos todo lo no marcado para permitir feedback en click
//     wrapRemainingWords(paragraphEl);

//     // 4) Listener de tap
//     paragraphEl.querySelectorAll(".token").forEach((tok) => {
//       tok.addEventListener("click", () => onTokenTap(tok, level));
//       tok.addEventListener("touchstart", () => {}, { passive: true });
//     });

//     markLives();
//     setCooldown(false);
//     updateNavButtons(level);

//   }

//   function showMeaning(term, meaning) {
//     meaningTitle.textContent = term;
//     meaningBody.textContent = meaning;
//     meaningSheet.classList.add("open");
//   }

//   closeMeaning.addEventListener("click", () => {
//     meaningSheet.classList.remove("open");
//   });

// function onCorrect(token, level, keyNorm) {
//   if (token.classList.contains("correct")) return;
//   token.classList.add("correct");
//   streak++;
//   const concept = level.concepts.find(c => normalize(c.term) === keyNorm);
//   if (concept) showMeaning(concept.term, concept.meaning);
//   foundSet.add(keyNorm);

//   updateHeader(level);
//   updateNavButtons(level);

//   if (foundSet.size >= level.concepts.length) {
//     setCooldown(false);
//     setTimeout(() => {
//       meaningTitle.textContent = "¡Nivel superado!";
//       meaningBody.textContent = "Cazaste todos los conceptos clave. Podés avanzar.";
//       meaningSheet.classList.add("open");
//       updateNavButtons(level);
//     }, 250);
//   }
// }

//   let cooling = false;
//   function onWrong(token) {
//     if (cooling) return;
//     token.classList.add("wrong", "shake");
//     setTimeout(() => token.classList.remove("shake"), 250);
//     play("data:audio/mp3;base64,//uQxAA..."); // (silencioso por defecto)
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

//   function onTokenTap(token, level) {
//   if (cooling) return;
//   const isCorrect = token.dataset.correct === "1";
//   if (isCorrect) {
//     const keyNorm = decodeURIComponent(token.dataset.key || "").trim();
//     onCorrect(token, level, keyNorm);
//   } else {
//     onWrong(token);
//   }
// }

//    prevBtn.addEventListener("click", () => {
//    if (idx > 0) {
//       idx--;
//       renderLevel();
//    }
//    });

// nextBtn.addEventListener("click", () => {
//   const level = CFG.levels[idx];
//   const threshold = getAdvanceThreshold(level);
//   if (foundSet.size < threshold) return; // doble seguridad

//   if (idx < CFG.levels.length - 1) {
//     idx++;
//     renderLevel();
//   }
// });

//   muteBtn.addEventListener("click", () => {
//     muted = !muted;
//     muteBtn.textContent = muted ? "🔇" : "🔊";
//   });

// // nueva fucncion
// function updateNavButtons(level) {
//   prevBtn.disabled = idx === 0;

//   const threshold = getAdvanceThreshold(level);
//   const completos = foundSet.size >= threshold;
//   const isLast = idx >= (CFG.levels.length - 1);

//   nextBtn.disabled = !completos || isLast;
// }

//   // Inicio
//   renderLevel();

// })();
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

  // ====== NUEVO: retardo para el modal final (ajustable) ======
  const FINAL_MODAL_DELAY_MS = 900; // 700–1200 ms se siente bien en móvil

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
      if (i < lives) el.classList.add("alive");
      else el.classList.remove("alive");
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

  // ====== NUEVO: render del modal final con corolario ======
  function showLevelCompleted(level) {
    const corollary = Array.isArray(level.corollary) ? level.corollary : [];

    // No cerramos el sheet anterior: simplemente reemplazamos contenido
    meaningTitle.textContent = "¡Nivel superado!";
    // Aquí sí usamos innerHTML para poder listar el corolario
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

    // Aseguramos que el sheet esté visible (por si se cerró)
    meaningSheet.classList.add("open");
    updateNavButtons(level);
  }

  function onCorrect(token, level, keyNorm) {
    if (token.classList.contains("correct")) return;
    token.classList.add("correct");
    streak++;

    const concept = level.concepts.find(c => normalize(c.term) === keyNorm);
    if (concept) {
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

      // ====== NUEVO: Retardo para dejar ver el último meaning antes del modal final ======
      setTimeout(() => {
        showLevelCompleted(level);
      }, FINAL_MODAL_DELAY_MS);
    }
  }

  let cooling = false;
  function onWrong(token) {
    if (cooling) return;
    token.classList.add("wrong", "shake");
    setTimeout(() => token.classList.remove("shake"), 250);
    play("data:audio/mp3;base64,//uQxAA..."); // (silencioso por defecto)
    streak = 0;
    lives = Math.max(0, lives - 1);
    markLives();
    if (lives === 0) {
      // cooldown anti-clicks
      cooling = true;
      setCooldown(true);
      setTimeout(() => {
        setCooldown(false);
        cooling = false;
        lives = 3; // restaurar vidas para seguir practicando
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
