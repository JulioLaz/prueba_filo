// themes/hedonismo/cloze_test.js - CON SISTEMA DE PISTAS
window.CLOZE_TEST = {
  title: "Cloze — Hedonismo (0:00–0:55)",
  items: [
    {
      id: "a1",
      text: "El hedonismo es una [[filosofía|doctrina]] que propone como [[bien máximo|fin supremo]] el [[placer]].",
      feedbackOK: "Correcto. El hedonismo define el placer como bien/fin supremo.",
      feedbackKO: "Recuerda: es una doctrina que toma el placer como valor central.",
      videoHints: [
        "💡 Revisa 0:00 - 0:08 para la definición breve",
        "💡 No es 'vicio sin control'; es una doctrina con fin claro",
        "💡 ¿Cuál es el 'bien supremo' que menciona?"
      ],
      videoSegment: { start: 0, end: 8 }
    },
    {
      id: "a2",
      text: "No debe confundirse con un [[arrojo indiscriminado|impulso irreflexivo|abuso]] hacia los [[vicios|excesos|placeres]].",
      feedbackOK: "Bien. Desmonta el prejuicio 'vicio = hedonismo'.",
      feedbackKO: "Pista: advierte contra identificarlo con 'vicio sin conciencia'.",
      videoHints: [
        "💡 Revisa 0:00 - 0:15 donde corrige el prejuicio",
        "💡 'Arrojo indiscriminado' y 'vicios': palabras clave",
        "💡 ¿Qué diferencia establece con una vida meramente impulsiva?"
      ],
      videoSegment: { start: 0, end: 15 }
    },
    {
      id: "a3",
      text: "Existen distintos tipos de placeres: algunos [[físicos|corporales|sensibles]] y otros [[intelectuales|mentales|espirituales]].",
      feedbackOK: "Exacto. Distingue placeres físicos e intelectuales.",
      feedbackKO: "Recuerda: el video contrasta lo corporal con lo intelectual.",
      videoHints: [
        "💡 Revisa 0:15 - 0:25 para la clasificación",
        "💡 Dos rubros: cuerpo y mente",
        "💡 ¿Qué ejemplos menciona de cada tipo?"
      ],
      videoSegment: { start: 15, end: 25 }
    },
    {
      id: "a4",
      text: "Arrojarnos sin [[conciencia|criterio|reflexión]] a lo que da placer no es hedonismo, sino vida [[instintiva|impulsiva]].",
      feedbackOK: "Correcto. Hedonismo ≠ impulsividad sin control.",
      feedbackKO: "Pista: habla de 'carácter meramente instintivo'.",
      videoHints: [
        "💡 Revisa 0:20 - 0:35 para esta distinción",
        "💡 Subraya la necesidad de deliberación",
        "💡 ¿Qué término usa para describir esa vida sin control?"
      ],
      videoSegment: { start: 20, end: 35 }
    },
    {
      id: "a5",
      text: "La práctica hedonista pide establecer [[criterios|principios|parámetros]] para orientar la [[búsqueda|aproximación|gestión]] del placer.",
      feedbackOK: "Bien. Enfatiza pautas para elegir placeres.",
      feedbackKO: "Pista: escucha 'establezcan ciertos criterios'.",
      videoHints: [
        "💡 Revisa 0:30 - 0:42 donde lo dice explícitamente",
        "💡 No basta desear: hay que normar la elección",
        "💡 ¿Qué se debe establecer antes de buscar placer?"
      ],
      videoSegment: { start: 30, end: 42 }
    },
    {
      id: "a6",
      text: "A través del [[placer]] se alcanza el [[bien|bienestar]], la [[felicidad|eudaimonía]] y la [[alegría|gozo|júbilo]].",
      feedbackOK: "Perfecto. Enumera los fines que se logran por el placer.",
      feedbackKO: "Revisa el cierre: menciona tres fines explícitos.",
      videoHints: [
        "💡 Revisa 0:40 - 0:55 para el cierre del fragmento",
        "💡 Cita 'bien', 'felicidad' y 'alegría'",
        "💡 ¿Qué función cumple el placer según el cierre?"
      ],
      videoSegment: { start: 40, end: 55 }
    }
  ]
};

// Sistema de pistas (igual que en Ética de Aristóteles)
window.CLOZE_TEST.getHintForItem = function(itemId, hintLevel = 0) {
  const item = this.items.find(i => i.id === itemId);
  if (!item || !item.videoHints) return null;
  const maxHints = item.videoHints.length;
  if (hintLevel >= maxHints) return null;
  return {
    hint: item.videoHints[hintLevel],
    hasMore: hintLevel < maxHints - 1,
    videoSegment: item.videoSegment
  };
};

// Link directo al momento del video (ajusta VIDEO_CONFIG.hedonismo)
window.CLOZE_TEST.getVideoLink = function(itemId) {
  const item = this.items.find(i => i.id === itemId);
  if (!item || !item.videoSegment) return null;
  const config = window.VIDEO_CONFIG?.hedonismo;
  if (!config) return null;
  const actualStart = (config.startTime || 0) + item.videoSegment.start;
  return `https://www.youtube.com/watch?v=${config.youtubeId}&t=${actualStart}s`;
};
