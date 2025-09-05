/* celebration.js
   Celebraciones modulares con overlay + lluvia de emojis
   Uso: Celebration.show({ activity:'study', topic:'Sartre', message:'...' })
*/

const Celebration = (() => {
  // Presets por actividad
  const PRESETS = {
    study: {
      title: "¡Felicitaciones!",
      defaultMessage: (topic) =>
        `Has completado el material de estudio de <strong>${topic}</strong>.<br>¡Ahora podés avanzar con confianza 💪!`,
      emojis: ["🎉", "📚", "✨", "🎊", "🌟"],
      palette: ["#6b7cff", "#b074ff", "#7df1a8", "#4cc3ff", "#ffd166"]
    },
    quiz: {
      title: "¡Quiz completado!",
      defaultMessage: (topic) =>
        `Dominaste el quiz de <strong>${topic}</strong>. ¡Puntaje desbloqueado! 🏆`,
      emojis: ["🎉", "✅", "🏆", "🧠", "✨"],
      palette: ["#10b981", "#4cc3ff", "#f59e0b", "#e11d48", "#6b7cff"]
    },
    crossword: {
      title: "¡Crucigrama resuelto!",
      defaultMessage: (topic) =>
        `Completaste el crucigrama de <strong>${topic}</strong>. ¡Palabras a tu favor! 🔤`,
      emojis: ["🧩", "🔠", "🎉", "✨", "🔤"],
      palette: ["#60a5fa", "#a78bfa", "#34d399", "#f472b6", "#f59e0b"]
    },
    wordhunt: {
      title: "¡Caza de palabras lograda!",
      defaultMessage: (topic) =>
        `Detective lingüístico: ¡encontraste todo en <strong>${topic}</strong>! 🕵️‍♀️`,
      emojis: ["🔎", "📝", "✨", "🎉", "🧠"],
      palette: ["#4cc3ff", "#7df1a8", "#e879f9", "#f59e0b", "#6b7cff"]
    },
    conceptmap: {
      title: "¡Mapa conceptual completado!",
      defaultMessage: (topic) =>
        `Ordenaste las ideas clave de <strong>${topic}</strong>. ¡Excelente síntesis! 🗺️`,
      emojis: ["🗺️", "🧠", "✨", "🔗", "🎉"],
      palette: ["#7df1a8", "#6b7cff", "#b074ff", "#4cc3ff", "#f59e0b"]
    },
  };

  // Crea overlay base
  function createOverlay({ title, htmlMessage, palette }) {
    const overlay = document.createElement("div");
    overlay.className = "cele-overlay";

    const content = document.createElement("div");
    content.className = "cele-content";

    content.innerHTML = `
      <h2 class="cele-title">${title}</h2>
      <p class="cele-msg">${htmlMessage}</p>
      <div class="cele-actions">
        <button class="cele-btn cele-btn-primary" id="cele-continue">Continuar</button>
      </div>
    `;

    overlay.appendChild(content);
    document.body.appendChild(overlay);

    // Borde/halo dinámico según paleta
    if (palette?.length) {
      content.style.boxShadow = `0 0 24px ${hexToRGBA(palette[0], 0.35)}`;
    }

    // Accesibilidad: foco al botón
    setTimeout(() => {
      const btn = document.getElementById("cele-continue");
      btn?.focus();
    }, 60);

    // Cerrar overlay
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) overlay.remove();
    });
    document.getElementById("cele-continue")?.addEventListener("click", () => {
      overlay.remove();
    });

    return overlay;
  }

  // Lluvia de emojis (baja costo, sin canvas)
  function emojiRain({ emojis, duration = 5000, density = 80 }) {
    const layer = document.createElement("div");
    layer.className = "cele-rain";
    document.body.appendChild(layer);

    const total = Math.min(Math.max(density, 20), 180);
    for (let i = 0; i < total; i++) {
      const piece = document.createElement("span");
      piece.className = "cele-emoji";
      piece.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      piece.style.left = Math.random() * 100 + "vw";
      piece.style.fontSize = 16 + Math.random() * 22 + "px";
      piece.style.animationDuration = 2.5 + Math.random() * 3.5 + "s";
      piece.style.animationDelay = Math.random() * 0.8 + "s";
      layer.appendChild(piece);
    }
    setTimeout(() => layer.remove(), duration + 1000);
  }

  // Utilidad
  const hexToRGBA = (hex, a = 1) => {
    const h = hex.replace("#", "");
    const bigint = parseInt(h, 16);
    const r = (bigint >> 16) & 255, g = (bigint >> 8) & 255, b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  };

  // API principal
  function show({
    activity = "study",        // 'study' | 'quiz' | 'crossword' | 'wordhunt' | 'conceptmap'
    topic = "Filosofía",
    message = null,           // HTML permitido (sanear si viene de usuario)
    emojis = null,            // array opcional para override
    palette = null,           // array opcional de colores
    duration = 5200,          // duración lluvia
    density = 90,             // densidad lluvia
    onContinue = null,        // callback al cerrar
  } = {}) {
    const preset = PRESETS[activity] ?? PRESETS.study;
    const title = preset.title;
    const htmlMessage = message ?? preset.defaultMessage(topic);
    const usedEmojis = Array.isArray(emojis) && emojis.length ? emojis : preset.emojis;
    const usedPalette = Array.isArray(palette) && palette.length ? palette : preset.palette;

    const overlay = createOverlay({ title, htmlMessage, palette: usedPalette });

    // Arranca la lluvia
    emojiRain({ emojis: usedEmojis, duration, density });

    // Sonidito opcional si ya tenés playSound en tu app
    try {
      if (typeof window.playSound === "function") window.playSound("success");
    } catch {}

    // Botón continuar → callback
    overlay.querySelector("#cele-continue")?.addEventListener("click", () => {
      if (typeof onContinue === "function") onContinue();
    });
  }

  // Azúcares por actividad
  const celebrateStudyComplete     = (topic, opts={}) => show({ activity: "study", topic, ...opts });
  const celebrateQuizComplete      = (topic, opts={}) => show({ activity: "quiz", topic, ...opts });
  const celebrateCrosswordComplete = (topic, opts={}) => show({ activity: "crossword", topic, ...opts });
  const celebrateWordHuntComplete  = (topic, opts={}) => show({ activity: "wordhunt", topic, ...opts });
  const celebrateConceptMapComplete= (topic, opts={}) => show({ activity: "conceptmap", topic, ...opts });

  return {
    show,
    celebrateStudyComplete,
    celebrateQuizComplete,
    celebrateCrosswordComplete,
    celebrateWordHuntComplete,
    celebrateConceptMapComplete,
  };
})();

// ------------------------------------------------------------------
// Ejemplos de uso (podés borrar esto en producción):
// Celebration.celebrateStudyComplete('Sartre');
// Celebration.show({ activity:'quiz', topic:'Ética Aristóteles', emojis:['🌟','🏆','🎉'] });
// ------------------------------------------------------------------
