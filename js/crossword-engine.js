(function () {
  const CFG = window.CROSSWORD_CONFIG;
  if (!CFG) { alert("Falta CROSSWORD_CONFIG"); return; }

  // ====== helpers
  const $ = (sel) => document.querySelector(sel);
  const board = $("#board"), sheet = $("#sheet");
  const qEl = $("#question"), ans = $("#answer");
  const btnCheck = $("#check"), btnClose = $("#close");
  const scoreEl = $("#score"), triesEl = $("#tries"), progEl = $("#progress");
  const muteBtn = $("#mute"), toast = $("#toast");

  let muted = false, score = 0, tries = 0;
  const SND_OK = CFG.sounds?.ok || "sound/collect_points.mp3";
  const SND_BAD = CFG.sounds?.bad || "sound/negative_beep.mp3";

  const play = (src) => { if (muted) return; new Audio(src).play().catch(()=>{}); };
  const tilda = (s) => s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9ñ]/g,"")
    .toUpperCase();

  // ====== progreso hub
  function hubTemaSlug(){
    const p = new URLSearchParams(location.search);
    return p.get('tema') || p.get('theme') || sessionStorage.getItem('tema.active') || CFG.slug || 'etica';
  }
  function hubSaveCross(partial){
    const key = `tema.${hubTemaSlug()}.cruci`;
    let prev = {};
    try { prev = JSON.parse(sessionStorage.getItem(key)) || {}; } catch {}
    const num = (v,d=0)=> Number.isFinite(Number(v)) ? Number(v) : d;
    const state = {
      total:    num(partial.total ?? prev.total, 0),
      solved:   num(partial.solved ?? prev.solved, 0),
      score:    num(partial.score ?? prev.score, 0),
      completed:Boolean(partial.completed ?? prev.completed || false)
    };
    sessionStorage.setItem(key, JSON.stringify(state));
  }

  // ====== calcular grilla
  const central = CFG.central.toUpperCase().replace(/\s+/g,"");
  const rows = central.length;

  // ancho = max izq/dcha de las horizontales
  const leftPad  = Math.max(...CFG.words.map(w => w.crossIndex));
  const rightPad = Math.max(...CFG.words.map(w => w.answer.length - w.crossIndex - 1));
  const cols = leftPad + 1 + rightPad;
  const crossCol = leftPad; // columna de la vertical

  board.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

  // estado de solución
  const solved = new Array(CFG.words.length).fill(false);

  // construir matriz
  const grid = Array.from({length: rows}, () => Array(cols).fill(null));
  // central
  for (let r=0; r<rows; r++){
    grid[r][crossCol] = { char: central[r], type: "central" };
  }
  // horizontales (placeholder vacíos)
  CFG.words.forEach((w, i) => {
    const startCol = crossCol - w.crossIndex;
    for (let k=0; k<w.answer.length; k++){
      const c = startCol + k;
      const isCross = (k === w.crossIndex);
      if (!grid[w.row][c]) grid[w.row][c] = { char: isCross ? central[w.row] : "", type: isCross ? "central" : "placeholder" };
      // guardo índice de palabra para clic
      grid[w.row][c].wordIndex = i;
    }
  });

  // render
  function render() {
    board.innerHTML = "";
    grid.forEach((row, r) => {
      row.forEach((cell, c) => {
        const div = document.createElement("div");
        if (!cell) { div.className="cell"; board.appendChild(div); return; }
        div.className = "cell " + (cell.type || "");
        if (cell.type==="placeholder") div.classList.add("placeholder");
        if (cell.type==="central") div.classList.add("central");
        if (cell.filled) div.classList.add("filled");
        div.dataset.r=r; div.dataset.c=c;
        // muestra letra si central o si ya fue llenada
        div.textContent = (cell.type==="central" || cell.filled) ? (cell.char||"") : "";
        // tap para abrir pregunta
        if (typeof cell.wordIndex === "number") {
          div.addEventListener("click", () => openQuestion(cell.wordIndex, r, c));
          div.addEventListener("touchend", () => openQuestion(cell.wordIndex, r, c), {passive:true});
        }
        board.appendChild(div);
      })
    });

    // HUD
    const solvedCount = solved.filter(Boolean).length;
    progEl.textContent = `${solvedCount}/${CFG.words.length}`;
    scoreEl.textContent = `${score}`;
    triesEl.textContent = `${tries}`;

    hubSaveCross({
      total: CFG.words.length,
      solved: solvedCount,
      score,
      completed: solvedCount === CFG.words.length
    });
  }

  let currentWord = -1;

  function openQuestion(i /*, r, c */) {
    currentWord = i;
    const w = CFG.words[i];
    if (solved[i]) { toastMsg("Ya resuelta ✓"); return; }
    $("#sheet-title").textContent = `Fila ${w.row+1} · ${w.answer.length} letras`;
    qEl.textContent = w.clue;
    ans.value = "";
    sheet.classList.add("open");
    setTimeout(() => ans.focus(), 50);

    // remarco banda tocada
    board.querySelectorAll(".cell").forEach(el => el.classList.remove("tap"));
    const startCol = crossCol - w.crossIndex;
    for (let k=0; k<w.answer.length; k++){
      const sel = `.cell[data-r="${w.row}"][data-c="${startCol+k}"]`;
      const el = board.querySelector(sel);
      if (el) el.classList.add("tap");
    }
  }

  function fillWord(i){
    const w = CFG.words[i];
    const startCol = crossCol - w.crossIndex;
    for (let k=0; k<w.answer.length; k++){
      const r = w.row, c = startCol+k;
      grid[r][c].char = w.answer[k].toUpperCase();
      grid[r][c].filled = true;
    }
  }

  btnCheck.addEventListener("click", () => {
    if (currentWord < 0) return;
    tries++;
    const w = CFG.words[currentWord];
    const guess = tilda(ans.value);
    const correct = tilda(w.answer);

    if (guess === correct) {
      solved[currentWord] = true;
      score += Math.max(1, 10 - Math.floor((tries%10)/2)); // simplecita
      play(SND_OK);
      fillWord(currentWord);
      sheet.classList.remove("open");
      board.querySelectorAll(".cell").forEach(el => el.classList.remove("tap"));
      toastMsg("¡Bien! ✓");
      render();
    } else {
      play(SND_BAD);
      ans.classList.add("shake");
      setTimeout(() => ans.classList.remove("shake"), 300);
      toastMsg("Respuesta incorrecta");
      render(); // solo HUD de intentos
    }
  });

  btnClose.addEventListener("click", () => {
    sheet.classList.remove("open");
    board.querySelectorAll(".cell").forEach(el => el.classList.remove("tap"));
  });

  muteBtn.addEventListener("click", () => {
    muted = !muted;
    muteBtn.textContent = muted ? "🔇" : "🔊";
  });

  function toastMsg(msg){
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toast._t); toast._t = setTimeout(()=>toast.classList.remove("show"), 1200);
  }

  render();
})();
