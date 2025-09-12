(function(){
  window.CLOZE_TEST = {
    key: "etica_utilitarismo_v1",
    title: "Teoría Ética: Utilitarismo",
    source: {
      audio: "utilitarismo_teoria_etica",
      transcript_by: "Sonix.ai",
      note: "00:00:00 - 00:01:40"
    },
    items: [
      {
        id: "x1_definicion_utilitarismo",
        text: "El [[utilitarismo|teoría utilitaria]] es una teoría ética que sostiene que la mejor acción es la que produce mayor [[bienestar|felicidad]] para el mayor número de personas involucradas.",
        videoSegment: { start: 0, end: 10 },
        videoHints: ["0:00–0:10: Definición inicial de utilitarismo", "Teoría que prioriza el bienestar colectivo"],
        feedbackOK: "✔️ Correcto. El utilitarismo busca maximizar el bienestar para la mayoría.",
        feedbackKO: "El utilitarismo es una teoría ética centrada en el bienestar colectivo."
      },
      {
        id: "x2_valor_supremo",
        text: "Se toma como valor supremo a la [[utilidad|beneficio]], entendiendo que si algo es valioso, entonces es útil.",
        videoSegment: { start: 10, end: 20 },
        videoHints: ["0:10–0:20: Valor supremo en el utilitarismo", "Concepto central que define lo valioso"],
        feedbackOK: "✔️ Exacto. La utilidad es el valor supremo en esta teoría.",
        feedbackKO: "El valor supremo en el utilitarismo es la utilidad."
      },
      {
        id: "x3_origen_filosofico",
        text: "Como teoría filosófica, se desarrolló principalmente en [[Inglaterra|Reino Unido]] a partir de los estudios de Jeremy Bentham, James Mill y John Stuart Mill.",
        videoSegment: { start: 20, end: 30 },
        videoHints: ["0:20–0:30: Origen geográfico del utilitarismo", "País donde surgió esta teoría"],
        feedbackOK: "✔️ Correcto. El utilitarismo se desarrolló en Inglaterra.",
        feedbackKO: "El utilitarismo se originó en Inglaterra."
      },
      {
        id: "x4_principio_utilidad",
        text: "Bentham defendió el [[principio de utilidad|principio utilitario]] para atraer el placer y eludir el dolor, llevándonos a la felicidad.",
        videoSegment: { start: 30, end: 45 },
        videoHints: ["0:30–0:45: Principio defendido por Bentham", "Concepto que busca maximizar el placer"],
        feedbackOK: "✔️ Bien. El principio de utilidad es clave en Bentham.",
        feedbackKO: "Bentham defendió el principio de utilidad."
      },
      {
        id: "x5_enfoque_cuantitativo",
        text: "Propuso una mirada [[cuantitativa|numérica]] respecto del bienestar, calculando cuánto placer genera una acción y a cuántas personas involucra.",
        videoSegment: { start: 45, end: 59 },
        videoHints: ["0:45–0:59: Enfoque de Bentham sobre el bienestar", "Método para medir el placer"],
        feedbackOK: "✔️ Así es. Bentham propuso un enfoque cuantitativo.",
        feedbackKO: "Bentham propuso un enfoque cuantitativo para medir el bienestar."
      },
      {
        id: "x6_enfoque_cualitativo",
        text: "Stuart Mill afirmó el carácter [[cualitativo|de calidad]] de las afecciones, destacando la superioridad de los placeres intelectuales y afectivos por sobre los sensibles.",
        videoSegment: { start: 60, end: 75 },
        videoHints: ["0:60–1:15: Enfoque de Stuart Mill", "Tipo de placeres que Mill consideraba superiores"],
        feedbackOK: "✔️ Correcto. Mill valoró la calidad de los placeres.",
        feedbackKO: "Stuart Mill destacó el carácter cualitativo de las afecciones."
      },
      {
        id: "x7_consecuencias_acciones",
        text: "El utilitarismo se basa en las [[consecuencias|resultados]] de las acciones para determinar si son buenas o malas, es decir, no le interesan las intenciones o los valores que promueven dichas acciones.",
        videoSegment: { start: 75, end: 90 },
        videoHints: ["1:15–1:30: Criterio para evaluar acciones", "Lo que importa en la evaluación ética"],
        feedbackOK: "✔️ Exacto. Las consecuencias son centrales en el utilitarismo.",
        feedbackKO: "El utilitarismo evalúa las acciones por sus consecuencias."
      },
      {
        id: "x8_beneficio_mayoria",
        text: "Si una acción beneficia a la [[mayoría|mayor cantidad de personas]], entonces es buena, incluso si perjudica a unos pocos.",
        videoSegment: { start: 90, end: 100 },
        videoHints: ["1:30–1:40: Criterio de bondad de una acción", "Beneficio colectivo vs. perjuicio individual"],
        feedbackOK: "✔️ Correcto. El beneficio mayoritario define la bondad de la acción.",
        feedbackKO: "En el utilitarismo, una acción es buena si beneficia a la mayoría."
      }
    ],
    getHintForItem(id, level=0) {
      const item = this.items.find(item => item.id === id);
      return item ? item.videoHints[level] : null;
    },
    getVideoLink(id) {
      return `#t=${this.items.find(item => item.id === id).videoSegment.start}`;
    }
  };
})();

