// themes/antropocentrismo/cloze_test.js
// Cloze — Antropocentrismo. Video xf96Q4NAdwY: 13 frases en el orden del video, con sus tiempos
// (videoSegment contado desde startTime = 1) y una pista de opciones por hueco.
// Versión 2.0 (2026-11-25): revisado con la transcripción (las 13 frases coinciden); tramos con
//   los tiempos reales y el video termina en 2:32, cuando termina la narración.
window.CLOZE_TEST = {
  title: "Cloze — Antropocentrismo (0:00—2:32)",
  items: [
    {
      id: "a1",
      text: "1- El antropocentrismo es la perspectiva filosófica y ética que sitúa al [[ser humano]] en el [[centro]] de todas las consideraciones [[morales]] y del conocimiento.",
      feedbackOK: "¡Correcto! Has captado la definición fundamental del antropocentrismo.",
      feedbackKO: "Revisa la definición: ¿quién está en el centro según esta perspectiva?",
      videoHints: [
        "💡 Opciones: universo | animal | ser humano | planeta | naturaleza | dios",
        "💡 Opciones: límite | frontera | periferia | centro | borde | margen",
        "💡 Opciones: científicas | morales | económicas | estéticas | lógicas | políticas"
      ],
      videoSegment: { start: 0, end: 9 } // 0:01 - 0:10
    },
    {
      id: "a2",
      text: "2- El antropocentrismo sostiene que los humanos son la [[medida]] de todas las cosas y que el mundo natural tiene [[valor]] en la medida en que sirve a los [[intereses humanos]].",
      feedbackOK: "¡Perfecto! El valor de todo se mide según los intereses humanos.",
      feedbackKO: "Piensa en cómo el antropocentrismo valora la naturaleza.",
      videoHints: [
        "💡 Opciones: causa | medida | principio | origen | esencia | fin",
        "💡 Opciones: utilidad | función | beneficio | valor | provecho | precio",
        "💡 Opciones: leyes naturales | principios éticos | intereses divinos | valores universales | intereses humanos | fines cósmicos"
      ],
      videoSegment: { start: 9, end: 21 } // 0:10 - 0:22
    },
    {
      id: "a3",
      text: "3- El origen del antropocentrismo puede rastrearse en la tradición filosófica [[occidental]], desde los tiempos de la antigua [[Grecia]], que ha enfatizado la [[preeminencia]] del ser humano en el cosmos.",
      feedbackOK: "¡Excelente! Conoces el origen histórico y geográfico del antropocentrismo.",
      feedbackKO: "Recuerda dónde y cuándo surge esta perspectiva filosófica.",
      videoHints: [
        "💡 Opciones: occidental | americana | asiática | africana | oceánica | oriental",
        "💡 Opciones: China | Grecia | Persia | Roma | India | Egipto",
        "💡 Opciones: preeminencia | dependencia | inferioridad | igualdad | subordinación | equivalencia"
      ],
      videoSegment: { start: 22, end: 33 } // 0:23 - 0:34
    },
    {
      id: "a4",
      text: "4- El filósofo [[Protágoras]] declaró que [[el hombre]] es la [[medida]] de todas las cosas, ejemplificando la postura antropocéntrica.",
      feedbackOK: "¡Correcto! Protágoras es el autor de esta célebre frase antropocéntrica.",
      feedbackKO: "Recuerda quién dijo la frase más representativa del antropocentrismo.",
      videoHints: [
        "💡 Opciones: Platón | Heráclito | Protágoras | Parménides | Sócrates | Aristóteles",
        "💡 Opciones: la naturaleza | el hombre | los dioses | el universo | el cosmos | la razón",
        "💡 Opciones: origen | medida | causa | principio | esencia | fin"
      ],
      videoSegment: { start: 34, end: 41 } // 0:35 - 0:42
    },
    {
      id: "a5",
      text: "5- Durante la [[Edad Media]] y el [[Renacimiento]], el antropocentrismo encontró apoyo renovado en las teorías [[religiosas]] y [[humanistas]] que destacaban la especial posición del ser humano en el universo.",
      feedbackOK: "¡Perfecto! Has identificado los periodos históricos clave del antropocentrismo.",
      feedbackKO: "Piensa en qué épocas reforzaron la visión antropocéntrica.",
      videoHints: [
        "💡 Opciones: Edad Contemporánea | Ilustración | Antigüedad | Romanticismo | Edad Media | Edad Moderna",
        "💡 Opciones: Barroco | Ilustración | Renacimiento | Romanticismo | Modernismo | Posmodernismo",
        "💡 Opciones: religiosas | económicas | artísticas | científicas | militares | políticas",
        "💡 Opciones: materialistas | relativistas | deterministas | humanistas | escépticas | nihilistas"
      ],
      videoSegment: { start: 42, end: 53 } // 0:43 - 0:54
    },
    {
      id: "a6",
      text: "6- En la [[modernidad]], la revolución [[científica]] y las filosofías [[ilustradas]] consolidaron esta visión, situando al hombre como el sujeto [[racional]] capaz de [[dominar]] la naturaleza.",
      feedbackOK: "¡Excelente! La modernidad refuerza el antropocentrismo con razón y dominio.",
      feedbackKO: "Recuerda qué periodo consolidó el dominio humano sobre la naturaleza.",
      videoHints: [
        "💡 Opciones: contemporaneidad | posmodernidad | edad media | renacimiento | modernidad | antigüedad",
        "💡 Opciones: tecnológica | política | industrial | científica | económica | social",
        "💡 Opciones: ilustradas | medievales | contemporáneas | románticas | posmodernas | barrocas",
        "💡 Opciones: emocional | espiritual | instintivo | sensible | irracional | racional",
        "💡 Opciones: preservar | proteger | contemplar | respetar | adorar | dominar"
      ],
      videoSegment: { start: 54, end: 65 } // 0:55 - 1:06
    },
    {
      id: "a7",
      text: "7- Los movimientos [[ecologistas]] y las filosofías [[postumanistas]] denuncian las consecuencias [[destructivas]] del antropocentrismo.",
      feedbackOK: "¡Correcto! Has identificado los principales críticos del antropocentrismo.",
      feedbackKO: "Piensa en quiénes critican la visión antropocéntrica actualmente.",
      videoHints: [
        "💡 Opciones: tecnócratas | consumistas | ecologistas | industrialistas | productivistas | capitalistas",
        "💡 Opciones: modernistas | humanistas | idealistas | postumanistas | ilustradas | racionalistas",
        "💡 Opciones: beneficiosas | positivas | constructivas | regenerativas | destructivas | creativas"
      ],
      videoSegment: { start: 66, end: 85 } // 1:07 - 1:26
    },
    {
      id: "a8",
      text: "8- Las críticas argumentan que el antropocentrismo ha llevado a una [[explotación]] insostenible de los recursos naturales y a la [[degradación ambiental|degradacion ambiental]].",
      feedbackOK: "¡Perfecto! Has captado las consecuencias negativas del antropocentrismo.",
      feedbackKO: "Reflexiona sobre los daños ambientales causados por esta perspectiva.",
      videoHints: [
        "💡 Opciones: cuidado | protección | conservación | preservación | explotación | restauración",
        "💡 Opciones: mejora ambiental | degradación ambiental | restauración ecológica | protección ecosistémica | conservación natural | regeneración planetaria"
      ],
      videoSegment: { start: 72, end: 85 } // 1:13 - 1:26
    },
    {
      id: "a9",
      text: "9- Los críticos proponen una ética [[biocéntrica|biocentrica]] o [[ecocéntrica|ecocentrica]], que reconozca el valor [[intrínseco|intrinseco]] de todos los seres vivos y sus interrelaciones.",
      feedbackOK: "¡Excelente! Has identificado las alternativas éticas al antropocentrismo.",
      feedbackKO: "Piensa en qué éticas se proponen como alternativa al antropocentrismo.",
      videoHints: [
        "💡 Opciones: cosmocéntrica | logocéntrica | etnocéntrica | antropocéntrica | biocéntrica | teocéntrica",
        "💡 Opciones: económica | política | social | antropocéntrica | ecocéntrica | tecnológica",
        "💡 Opciones: utilitario | instrumental | condicional | extrínseco | intrínseco | relativo"
      ],
      videoSegment: { start: 86, end: 95 } // 1:27 - 1:36
    },
    {
      id: "a10",
      text: "10- En los debates contemporáneos, el antropocentrismo se enfrenta a desafíos significativos en el contexto de la [[crisis climática|crisis climatica]] y la pérdida de [[biodiversidad]].",
      feedbackOK: "¡Correcto! Has identificado los retos actuales que cuestionan el antropocentrismo.",
      feedbackKO: "Piensa en los problemas ambientales actuales que desafían esta visión.",
      videoHints: [
        "💡 Opciones: crisis política | crisis cultural | crisis económica | crisis climática | crisis social | crisis religiosa",
        "💡 Opciones: productividad | riqueza | tecnología | biodiversidad | urbanización | industrialización"
      ],
      videoSegment: { start: 96, end: 109 } // 1:37 - 1:50
    },
    {
      id: "a11",
      text: "11- Es esencial analizar los fundamentos [[históricos]] y [[filosóficos|filosoficos]] del antropocentrismo, así como explorar alternativas que promuevan una convivencia más [[armónica|armonica]] y [[sostenible]] con el entorno natural.",
      feedbackOK: "¡Perfecto! Has captado la necesidad de repensar nuestra relación con la naturaleza.",
      feedbackKO: "Reflexiona sobre qué tipo de relación se propone con el entorno natural.",
      videoHints: [
        "💡 Opciones: artísticos | políticos | científicos | históricos | económicos | religiosos",
        "💡 Opciones: políticos | artísticos | religiosos | filosóficos | económicos | científicos",
        "💡 Opciones: armónica | agresiva | dominante | explotadora | conflictiva | destructiva",
        "💡 Opciones: explotadora | depredadora | agotadora | insostenible | sostenible | destructiva"
      ],
      videoSegment: { start: 110, end: 123 } // 1:51 - 2:04
    },
    {
      id: "a12",
      text: "12- La discusión sobre el antropocentrismo es relevante en áreas como la [[política ambiental|politica ambiental]], la [[educación|educacion]] y la [[ética aplicada|etica aplicada]].",
      feedbackOK: "¡Excelente! Has identificado los campos prácticos donde impacta este debate.",
      feedbackKO: "Piensa en qué áreas prácticas se ven afectadas por esta discusión filosófica.",
      videoHints: [
        "💡 Opciones: política militar | política ambiental | política industrial | política económica | política comercial | política cultural",
        "💡 Opciones: economía | educación | industria | tecnología | comercio | finanzas",
        "💡 Opciones: ética metafísica | ética teórica | ética especulativa | ética aplicada | ética conceptual | ética abstracta"
      ],
      videoSegment: { start: 124, end: 135 } // 2:05 - 2:16
    },
    {
      id: "a13",
      text: "13- Cuestionar el paradigma [[antropocéntrico|antropocentrico]] es parte de un esfuerzo por reconceptualizar nuestra [[posición|posicion]] en el mundo y asumir [[responsabilidades]] hacia el bienestar del [[planeta]] y de todas las formas de vida.",
      feedbackOK: "¡Correcto! Has captado el llamado a repensar nuestro lugar en el mundo.",
      feedbackKO: "Reflexiona sobre el objetivo final de cuestionar el antropocentrismo.",
      videoHints: [
        "💡 Opciones: antropocéntrico | teocéntrico | ecocéntrico | etnocéntrico | cosmocéntrico | biocéntrico",
        "💡 Opciones: posición | marginalidad | insignificancia | inferioridad | subordinación | dependencia",
        "💡 Opciones: libertades | derechos | ventajas | beneficios | privilegios | responsabilidades",
        "💡 Opciones: planeta | continente | nación | sociedad | individuo | país"
      ],
      videoSegment: { start: 135, end: 151 } // 2:16 - 2:32
    }
  ]
};

// Pistas escalonadas: una por hueco, con opciones para elegir
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

// Link directo al momento del video
window.CLOZE_TEST.getVideoLink = function(itemId) {
  const item = this.items.find(i => i.id === itemId);
  if (!item || !item.videoSegment) return null;
  const config = window.VIDEO_CONFIG?.antropocentrismo;
  if (!config) return null;
  const actualStart = config.startTime + item.videoSegment.start;
  return `https://www.youtube.com/watch?v=${config.youtubeId}&t=${actualStart}s`;
};

// Extrae las opciones del formato "💡 Opciones: a | b | ..."
window.CLOZE_TEST.parseHintOptions = function(hintText) {
  const match = hintText.match(/💡 Opciones: (.+)/);
  if (!match) return null;
  return match[1].split('|').map(opt => opt.trim());
};
