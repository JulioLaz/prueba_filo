// cloze_test_hedonismo.js
// Generado a partir de: “¿Qué es el hedonismo? Filosofía para la vida”.
// Estructura compatible con tu motor de cloze tests.

(function(){
  // Opcional: configura aquí el ID del video en tu reproductor si lo usás
  window.VIDEO_CONFIG = window.VIDEO_CONFIG || {};
  // VIDEO_CONFIG.hedonismo = { platform: 'youtube', id: 'REEMPLAZAR_ID', startAt: 0 };

  window.CLOZE_TEST = {
    key: 'hedonismo_basico_v1',
    title: 'Hedonismo · Conceptos Clave (cloze)',
    source: {
      audio: '¿Qué es el hedonismo? Filosofía para la vida.mp3',
      transcript_by: 'Sonix.ai',
      note: 'Fragmento 0:00–0:55 (aprox.)'
    },
    items: [
      {
        id: 'h1_definicion',
        text: 'El hedonismo es una [[filosofía]] que propone como su [[máximo bien|bien supremo|fin supremo|bien]] el [[placer]].',
        videoSegment: { start: 0, end: 8 },
        videoHints: [
          '0:00–0:08: Definición corta de hedonismo.',
          'Pista: No es “vicio sin control”; es una doctrina con un fin.'
        ],
        feedbackOK: '✔️ Correcto: hedonismo = filosofía cuyo fin supremo es el placer.',
        feedbackKO: 'Recuerda: el hedonismo define el placer como bien/fin supremo, no como capricho.'
      },
      {
        id: 'h2_malentendido',
        text: 'No debe confundirse el hedonismo con un [[arrojo indiscriminado|impulso irreflexivo|abuso]] hacia los [[vicios|excesos|placeres]].',
        videoSegment: { start: 0, end: 15 },
        videoHints: [
          '0:00–0:15: El orador corrige un prejuicio inicial.',
          'Pista: advierte contra identificar hedonismo con “vicio sin conciencia”.'
        ],
        feedbackOK: '✔️ Bien: el video corrige ese prejuicio desde el primer minuto.',
        feedbackKO: 'Pista: menciona “arrojo indiscriminado” y “vicios/placer” como error común.'
      },
      {
        id: 'h3_tipos_de_placer',
        text: 'Existen distintos tipos de placeres: algunos son [[físicos|corporales|sensibles]] y otros pueden ser [[intelectuales|mentales|espirituales]].',
        videoSegment: { start: 15, end: 25 },
        videoHints: [
          '0:15–0:25: Clasifica el placer en dos grandes rubros.',
          'Pista: contrasta lo corporal con lo que atañe a la mente.'
        ],
        feedbackOK: '✔️ Exacto: el video distingue placeres físicos e intelectuales.',
        feedbackKO: 'Revisa: el presentador nombra “físicos” y “intelectuales” explícitamente.'
      },
      {
        id: 'h4_instinto_vs_hedonismo',
        text: 'Arrojarnos sin [[conciencia|criterio|reflexión]] a lo que da placer no es hedonismo, sino una vida meramente [[instintiva|impulsiva]].',
        videoSegment: { start: 20, end: 35 },
        videoHints: [
          '0:20–0:35: Distingue la práctica hedonista de la mera impulsividad.',
          'Pista: habla de “carácter meramente instintivo”.'
        ],
        feedbackOK: '✔️ Correcto: el hedonismo no es impulsividad sin control.',
        feedbackKO: 'Recuerda: hedonismo requiere deliberación; lo instintivo no basta.'
      },
      {
        id: 'h5_criterios',
        text: 'El hedonismo propone que quienes lo practican establezcan ciertos [[criterios|principios|parámetros]] para orientar la [[búsqueda|aproximación|gestión]] del placer.',
        videoSegment: { start: 30, end: 42 },
        videoHints: [
          '0:30–0:42: Menciona “establecer ciertos criterios”.',
          'Pista: no basta con desear; hay que normar la elección de placeres.'
        ],
        feedbackOK: '✔️ Bien: el énfasis está en pautas/criterios para elegir placeres.',
        feedbackKO: 'Clave: escucha “establezcan ciertos criterios”.'
      },
      {
        id: 'h6_fin_bien_felicidad',
        text: 'A través del [[placer]] se alcanza el [[bien|bienestar]], la [[felicidad|eudaimonía]] y la [[alegría|gozo|júbilo]].',
        videoSegment: { start: 40, end: 55 },
        videoHints: [
          '0:40–0:55: Cierre del fragmento con los fines que se alcanzan por el placer.',
          'Pista: menciona explícitamente bien/felicidad/alegría.'
        ],
        feedbackOK: '✔️ Perfecto: el placer funciona como vía hacia bien, felicidad y alegría.',
        feedbackKO: 'Repite el final: enumera tres fines unidos al placer.'
      }
    ],

    // Utilidades opcionales (coinciden con tu API previa)
    getHintForItem(id, level=0){
      const it = this.items.find(x=>x.id===id);
      if(!it) return null;
      const idx = Math.min(level, (it.videoHints?.length||1)-1);
      return it.videoHints ? it.videoHints[idx] : null;
    },
    getVideoLink(id){
      const it = this.items.find(x=>x.id===id);
      const base = (window.VIDEO_CONFIG && window.VIDEO_CONFIG.hedonismo && window.VIDEO_CONFIG.hedonismo.id) ? `https://youtu.be/${window.VIDEO_CONFIG.hedonismo.id}` : '';
      return (base && it) ? `${base}?t=${Math.floor(it.videoSegment.start)}` : null;
    }
  };
})();