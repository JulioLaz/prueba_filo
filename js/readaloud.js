/* readaloud.js – Seguimiento de lectura en voz alta con Web Speech API (es-AR)
   - Tokeniza el párrafo y resalta a medida que la voz coincide
   - Marca completo cuando supera un umbral de cobertura
   - API: ReadAloud.attachParagraph(pEl, {onComplete, lang, threshold})
*/

(function(){
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;

  // Normaliza texto: minúsculas, sin tildes, sin puntuación “fuerte”
  const norm = (s) => s
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // quita acentos
    .replace(/[.,;:¡!¿?\(\)\[\]«»"“”'’]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  const tokenize = (text) => {
    // Conservamos tokens + indices para resaltar cada palabra
    const raw = text.replace(/\s+/g, ' ').trim();
    const parts = raw.split(/(\s+)/); // incluye espacios para preservar
    const words = [];
    let wi = 0;
    for (let i=0; i<parts.length; i++) {
      const t = parts[i];
      if (!t) continue;
      if (/\s+/.test(t)) {
        words.push({ type:'space', text:t });
      } else {
        words.push({ type:'word', text:t, norm:norm(t), idx:wi++ });
      }
    }
    return words;
  };

  function wrapParagraph(pEl) {
    if (pEl.dataset.rlSetup === '1') return;

    const text = pEl.textContent;
    const tokens = tokenize(text);
    pEl.textContent = '';
    tokens.forEach(tok => {
      if (tok.type === 'space') {
        pEl.appendChild(document.createTextNode(tok.text));
      } else {
        const span = document.createElement('span');
        span.className = 'rl-word rl-pending';
        span.dataset.idx = tok.idx;
        span.dataset.norm = tok.norm;
        span.textContent = tok.text;
        pEl.appendChild(span);
      }
    });
    pEl.dataset.rlSetup = '1';
  }

  function attachToolbar(pEl, lang) {
    // Insertamos toolbar justo antes del párrafo
    const bar = document.createElement('div');
    bar.className = 'rl-toolbar';

    const mic = document.createElement('button');
    mic.className = 'rl-mic';
    mic.type = 'button';
    mic.setAttribute('aria-pressed', 'false');
    mic.textContent = '🎤 Leer este párrafo';

    const status = document.createElement('span');
    status.className = 'rl-status';
    status.textContent = 'En espera';

    const hint = document.createElement('span');
    hint.className = 'rl-hint';
    hint.textContent = 'Leé en voz alta. Se irá marcando en verde lo leído.';

    bar.appendChild(mic);
    bar.appendChild(status);
    bar.appendChild(hint);

    pEl.parentNode.insertBefore(bar, pEl);

    // Si no hay SpeechRecognition, mostramos aviso y desactivamos
    if (!SR) {
      mic.disabled = true;
      const warn = document.createElement('span');
      warn.className = 'rl-unsupported';
      warn.textContent = 'Tu navegador no admite reconocimiento de voz. Usá Chrome/Edge en escritorio.';
      bar.appendChild(warn);
      return { mic, status, recog: null };
    }

    // Config reconocimiento
    const recog = new SR();
    recog.lang = lang || (pEl.dataset.lang || 'es-AR');
    recog.continuous = true;
    recog.interimResults = true;

    return { mic, status, recog };
  }

  function attachLogic(pEl, { onComplete, lang, threshold=0.85 } = {}) {
    wrapParagraph(pEl);
    const { mic, status, recog } = attachToolbar(pEl, lang);

    const wordEls = Array.from(pEl.querySelectorAll('.rl-word'));
    const N = wordEls.length;
    const words = wordEls.map(el => el.dataset.norm);

    let confirmedIdx = -1; // último índice confirmado (verde)
    let running = false;
    let lastTranscript = '';
    let done = false;

    function setRunning(v) {
      running = v;
      mic.setAttribute('aria-pressed', v ? 'true' : 'false');
      status.textContent = v ? 'Escuchando…' : 'En espera';
    }

    function applyHighlight(progressIdx, interimUntil) {
      // Limpia clases:
      wordEls.forEach(el => el.classList.remove('rl-done','rl-current','rl-pending'));

      for (let i=0; i<wordEls.length; i++) {
        if (i <= progressIdx) {
          wordEls[i].classList.add('rl-done');
        } else if (i > progressIdx && i <= interimUntil) {
          wordEls[i].classList.add('rl-current');
        } else {
          wordEls[i].classList.add('rl-pending');
        }
      }
    }

    function computeMatch(transcript) {
      // Intentamos matchear en orden desde confirmedIdx+1 hacia adelante
      const t = norm(transcript);
      if (!t) return { conf: confirmedIdx, interim: confirmedIdx };

      const tWords = t.split(' ').filter(Boolean);
      if (!tWords.length) return { conf: confirmedIdx, interim: confirmedIdx };

      let conf = confirmedIdx;
      let pos = confirmedIdx + 1; // siguiente palabra esperada en el párrafo
      let i = 0;

      // Tolerancia: permitimos saltos mínimos y palabras de “ruido”
      const SOFT_SKIP = 1; // cuántas podemos saltar si hay error
      let skips = 0;

      while (i < tWords.length && pos < N) {
        if (tWords[i] === words[pos]) {
          conf = pos;
          pos++; i++;
          skips = 0;
        } else {
          // Si no coincide, probamos ver si la siguiente palabra de párrafo coincide
          if (skips < SOFT_SKIP) {
            pos++; skips++;
          } else {
            // Avanzamos en el audio (ruido, muletillas) sin romper
            i++;
          }
        }
      }

      // “interim” puede ser igual a conf, o un pequeño plus visual si detecta parcial
      const interim = conf;

      return { conf, interim };
    }

    function checkCompletion() {
      const progress = (confirmedIdx + 1) / N;
      if (!done && progress >= threshold) {
        done = true;
        pEl.classList.add('rl-complete');
        setRunning(false);
        try { recog && recog.stop(); } catch {}
        status.textContent = 'Párrafo leído ✅';
        if (typeof onComplete === 'function') onComplete();
      }
    }

    function resetIfUserRestarts() {
      // Si el usuario para/reinicia, no perdemos progreso (diseño pedagógico).
      // Si quisieras reiniciar todo: descomentar:
      // confirmedIdx = -1;
      // applyHighlight(-1, -1);
    }

    // Estado inicial visual
    applyHighlight(-1, -1);

    if (!recog) return; // sin soporte, salimos

    recog.onresult = (e) => {
      let interim = '';
      let finalChunk = '';
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const res = e.results[i];
        if (res.isFinal) {
          finalChunk += ' ' + res[0].transcript;
        } else {
          interim += ' ' + res[0].transcript;
        }
      }

      const live = (finalChunk || interim || '').trim();
      if (live && live !== lastTranscript) {
        lastTranscript = live;
        const { conf, interim: it } = computeMatch(live);
        if (conf > confirmedIdx) {
          confirmedIdx = conf;
          // Reproducir un “tick” suave si querés: window.playSound?.('show_question');
        }
        applyHighlight(confirmedIdx, it);
        checkCompletion();
      }
    };

    recog.onend = () => {
      if (running && !done) {
        // Reintento automático (a veces el motor corta)
        try { recog.start(); } catch {}
      }
    };

    recog.onerror = (e) => {
      status.textContent = `Error de micrófono: ${e.error}`;
      setRunning(false);
    };

    mic.addEventListener('click', () => {
      if (done) return;
      if (!running) {
        resetIfUserRestarts();
        try { recog.start(); setRunning(true); } catch {
          status.textContent = 'No se pudo iniciar el micrófono';
        }
      } else {
        try { recog.stop(); } catch {}
        setRunning(false);
      }
    });
  }

  // API pública
  window.ReadAloud = {
    attachParagraph: attachLogic,
    attachSection(sectionEl, { onAllComplete, threshold=0.85 } = {}) {
      const paras = Array.from(sectionEl.querySelectorAll('.readaloud'));
      if (!paras.length) { onAllComplete?.(); return; }

      let completed = 0;
      paras.forEach(p => {
        this.attachParagraph(p, {
          threshold,
          onComplete: () => {
            completed++;
            if (completed === paras.length) onAllComplete?.();
          }
        });
      });
    }
  };
})();
