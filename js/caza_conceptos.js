const text = document.getElementById("sartre-text");
const container = document.getElementById("concepts-container");
const feedback = document.getElementById("feedback");
const remainingSpan = document.getElementById("remaining");

// Lista de conceptos clave
const conceptos = [
  { palabra: "libre", significado: "La libertad como condición inevitable del ser humano." },
  { palabra: "responsable", significado: "El ser humano es responsable de sus elecciones." },
  { palabra: "mundo", significado: "El contexto en el que existimos y actuamos." },
  { palabra: "hombre", significado: "El sujeto de la filosofía existencialista." },
  { palabra: "condenado", significado: "La libertad no es opcional, sino una condena." }
];

let encontrados = [];

function renderOpciones() {
  container.innerHTML = "";
  conceptos.forEach(c => {
    const btn = document.createElement("button");
    btn.textContent = c.palabra;
    btn.className = "secondary-btn";
    btn.disabled = encontrados.includes(c.palabra);

    btn.addEventListener("click", () => {
      encontrados.push(c.palabra);
      feedback.innerHTML = `✔ ${c.palabra}: ${c.significado}`;
      renderOpciones();
      updateContador();
    });

    container.appendChild(btn);
  });
}

function updateContador() {
  const restantes = conceptos.length - encontrados.length;
  remainingSpan.textContent = restantes;
  if (restantes === 0) {
    feedback.innerHTML = "🎉 ¡Has cazado todos los conceptos de este párrafo!";
  }
}

// Inicializar
renderOpciones();
updateContador();
