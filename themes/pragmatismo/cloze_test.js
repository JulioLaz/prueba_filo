// // themes/pragmatismo/cloze_test.js - CON SISTEMA DE PISTAS
// window.CLOZE_TEST = {
//   title: "Cloze — Pragmatismo (0:00–4:50)",
//   items: [
//     {
//       id: "p1",
//       text: "El pragmatismo es una [[corriente|escuela|doctrina]] filosófica que evalúa las [[ideas|teorías]] por sus [[consecuencias|efectos|resultados]] y su [[utilidad|aplicación práctica|valor práctico]] en la [[experiencia|vida real]].",
//       feedbackOK: "Bien: centro en consecuencias útiles dentro de la experiencia.",
//       feedbackKO: "Clave: verdad/valor se juzga por efectos prácticos.",
//       videoHints: [
//         "💡 Mira 0:00–0:15 para la definición general.",
//         "💡 Fíjate en 'ideas' evaluadas por 'consecuencias'.",
//         "💡 ¿Qué criterio prima: correspondencia o utilidad?"
//       ],
//       videoSegment: { start: 0, end: 15 }
//     },
//     {
//       id: "p2",
//       text: "Se origina a fines del [[siglo XIX|XIX]] en [[Estados Unidos|EE.UU.|Norteamérica]] con [[Charles Sanders Peirce|Peirce]], [[William James]] y [[John Dewey|Dewey]].",
//       feedbackOK: "Correcto: tríada clásica del pragmatismo en EE.UU.",
//       feedbackKO: "Recuerda: Peirce, James y Dewey en EE.UU. fin de siglo XIX.",
//       videoHints: [
//         "💡 Revisa 0:15–0:35 sobre origen y representantes.",
//         "💡 Son tres apellidos clave.",
//         "💡 Ubícalo temporal y geográficamente."
//       ],
//       videoSegment: { start: 15, end: 35 }
//     },
//     {
//       id: "p3",
//       text: "Peirce formula la [[máxima pragmática|regla pragmática]]: el [[significado|sentido]] de un concepto depende de sus [[consecuencias prácticas|efectos concebibles]] en la [[acción|conducta]].",
//       feedbackOK: "Exacto: significado = consecuencias prácticas.",
//       feedbackKO: "Pista: relaciona 'significado' con 'efectos en la acción'.",
//       videoHints: [
//         "💡 Mira 0:30–1:00 para Peirce.",
//         "💡 '¿Qué pasaría si…?' como test de significado.",
//         "💡 Atención a 'efectos concebibles'."
//       ],
//       videoSegment: { start: 30, end: 60 }
//     },
//     {
//       id: "p4",
//       text: "Para [[William James|James]], la 'verdad' es lo que [[funciona|resulta útil]] en la [[experiencia|práctica]] y tiene [[valor en efectivo|cash value|fruto]] para la [[vida|acción]].",
//       feedbackOK: "Bien: criterio jamesiano de verdad pragmática.",
//       feedbackKO: "Recuerda 'funciona', 'útil', 'valor en efectivo'.",
//       videoHints: [
//         "💡 Mira 0:55–1:25 sobre James.",
//         "💡 Observa la expresión 'lo que funciona'.",
//         "💡 Conecta verdad ↔ utilidad sostenida."
//       ],
//       videoSegment: { start: 55, end: 85 }
//     },
//     {
//       id: "p5",
//       text: "Dewey entiende el conocimiento como [[instrumento|herramienta]] para [[resolver problemas|investigar|adaptarse]], un [[instrumentalismo]] orientado a la [[acción|práctica social]].",
//       feedbackOK: "Perfecto: conocimiento como herramienta en Dewey.",
//       feedbackKO: "Pista: piensa 'instrumento' para resolver situaciones.",
//       videoHints: [
//         "💡 Revisa 1:20–1:50 para Dewey.",
//         "💡 Palabras clave: 'instrumento', 'problema', 'investigación'.",
//         "💡 Foco en contexto y práctica social."
//       ],
//       videoSegment: { start: 80, end: 110 }
//     },
//     {
//       id: "p6",
//       text: "En vez de verdades [[absolutas|inmutables]], el pragmatismo propone [[falibilismo|revisabilidad]]: las creencias se [[corrigen|ajustan]] con [[evidencia|experiencia]] e [[indagación|investigación]].",
//       feedbackOK: "Correcto: falibilismo y revisión continua.",
//       feedbackKO: "Recuerda: no dogmas fijos; revisión por experiencia.",
//       videoHints: [
//         "💡 Mira 1:45–2:10 para 'falibilismo'.",
//         "💡 Se enfatiza la posibilidad de error y corrección.",
//         "💡 Indagación como proceso abierto."
//       ],
//       videoSegment: { start: 105, end: 130 }
//     },
//     {
//       id: "p7",
//       text: "La [[verdad pragmática|teoría pragmática de la verdad]] se prueba en la [[práctica|experiencia]] por sus [[consecuencias satisfactorias|resultados útiles]] y su [[coherencia|funcionamiento]] sostenido.",
//       feedbackOK: "Bien: verificación práctica y funcionamiento estable.",
//       feedbackKO: "Pista: mira 'práctica' + 'consecuencias satisfactorias'.",
//       videoHints: [
//         "💡 Revisa 2:05–2:35 para el criterio de verdad.",
//         "💡 Atención a 'funciona de modo estable'.",
//         "💡 No es mera correspondencia abstracta."
//       ],
//       videoSegment: { start: 125, end: 155 }
//     },
//     {
//       id: "p8",
//       text: "El método pragmatista pide analizar los [[efectos|prácticos]] de adoptar una [[teoría|idea]]: si mejora la [[predicción|solución de problemas]] y la [[conducta|toma de decisiones]], tiene [[valor|mérito]].",
//       feedbackOK: "Correcto: evaluación por mejoras concretas.",
//       feedbackKO: "Recuerda: predicción, solución, decisión.",
//       videoHints: [
//         "💡 Mira 2:30–3:00 sobre método.",
//         "💡 '¿Qué diferencia hace creer esto?'.",
//         "💡 Apunta a utilidad operativa."
//       ],
//       videoSegment: { start: 150, end: 180 }
//     },
//     {
//       id: "p9",
//       text: "Ejemplos típicos: adoptar una [[hipótesis científica|teoría]] que mejora la [[explicación|predicción]]; elegir una [[creencia|regla]] que favorece la [[cooperación|bienestar social]].",
//       feedbackOK: "Bien: ejemplos de evaluación por resultados.",
//       feedbackKO: "Piensa en ciencia y ética aplicada con efectos medibles.",
//       videoHints: [
//         "💡 Revisa 2:55–3:25 para ejemplos.",
//         "💡 Observa ciencia/ética en contexto.",
//         "💡 ¿Qué 'mejora' concreta produce?"
//       ],
//       videoSegment: { start: 175, end: 205 }
//     },
//     {
//       id: "p10",
//       text: "Críticas frecuentes: posible [[relativismo|subjetivismo]], confundir '[[útil|práctico]]' con '[[verdadero|correcto]]' y descuidar [[principios|valores]] [[independientes|no instrumentales]].",
//       feedbackOK: "Exacto: objeciones clásicas al pragmatismo.",
//       feedbackKO: "Pista: utilidad ≠ verdad en cualquier contexto.",
//       videoHints: [
//         "💡 Mira 3:20–3:50 para críticas.",
//         "💡 Distingue utilidad vs. normatividad.",
//         "💡 Señala riesgos de relativismo."
//       ],
//       videoSegment: { start: 200, end: 230 }
//     },
//     {
//       id: "p11",
//       text: "Respuesta pragmatista: la [[utilidad|funcionalidad]] relevante debe ser [[pública|inter-subjetiva]] y sometida a la [[indagación|comunidad de investigación]] con [[evidencia|criterios]] compartidos.",
//       feedbackOK: "Bien: control público de la utilidad y de la verdad.",
//       feedbackKO: "Recuerda: comunidad de investigación como filtro.",
//       videoHints: [
//         "💡 Revisa 3:45–4:15 sobre 'comunidad'.",
//         "💡 Inter-subjetividad y métodos comunes.",
//         "💡 Evidencia compartida, no capricho privado."
//       ],
//       videoSegment: { start: 225, end: 255 }
//     },
//     {
//       id: "p12",
//       text: "En síntesis, el pragmatismo une [[teoría]] y [[práctica]]: valora lo que [[funciona|sirve]] para [[orientar la acción|resolver problemas]] y permanece [[abierto|revisable]] ante nueva [[experiencia|evidencia]].",
//       feedbackOK: "¡Cierre redondo! Núcleo práctico y revisabilidad.",
//       feedbackKO: "Pista final: teoría ↔ práctica con apertura al cambio.",
//       videoHints: [
//         "💡 Mira 4:10–4:50 para la síntesis.",
//         "💡 Une todos los hilos: utilidad, experiencia, revisión.",
//         "💡 ¿Qué queda como idea fuerza?"
//       ],
//       videoSegment: { start: 250, end: 290 }
//     }
//   ]
// };

// // === Sistema de pistas (idéntico al ejemplo) ===
// window.CLOZE_TEST.getHintForItem = function(itemId, hintLevel = 0) {
//   const item = this.items.find(i => i.id === itemId);
//   if (!item || !item.videoHints) return null;

//   const maxHints = item.videoHints.length;
//   if (hintLevel >= maxHints) return null;

//   return {
//     hint: item.videoHints[hintLevel],
//     hasMore: hintLevel < maxHints - 1,
//     videoSegment: item.videoSegment
//   };
// };

// // === Link directo al momento del video (ajusta VIDEO_CONFIG.pragmatismo) ===
// window.CLOZE_TEST.getVideoLink = function(itemId) {
//   const item = this.items.find(i => i.id === itemId);
//   if (!item || !item.videoSegment) return null;

//   const config = window.VIDEO_CONFIG?.pragmatismo;
//   if (!config) return null;

//   const actualStart = (config.startTime || 0) + item.videoSegment.start;
//   return `https://www.youtube.com/watch?v=${config.youtubeId}&t=${actualStart}s`;
// };

// themes/pragmatismo/cloze_test.js - Pragmatismo: Pierce, James y Dewey
window.CLOZE_TEST = {
  title: "Cloze — Pragmatismo (0:00—2:30)",
  items: [
    {
      id: "p1",
      text: "1- La palabra pragmatismo proviene del vocablo griego [[pragma]] que significa [[práctica|practica]] o [[asunto]].",
      feedbackOK: "¡Correcto! Has captado la etimología del término pragmatismo.",
      feedbackKO: "Revisa el origen griego de la palabra pragmatismo.",
      videoHints: [
        "💡 Opciones: praxis | pragma | logos | ethos | pathos | telos",
        "💡 Opciones: teoría | especulación | práctica | contemplación | abstracción | ideal",
        "💡 Opciones: teorema | concepto | idea | asunto | principio | axioma"
      ],
      videoSegment: { start: 0, end: 10 } // 0:00 - 0:10 (inicio, no se resta)
    },
    {
      id: "p2",
      text: "2- El pragmatismo surge formalmente en el siglo [[XIX]] en [[Estados Unidos]]. Su máximo exponente es [[Charles Pierce|Charles Peirce|Pierce]].",
      feedbackOK: "¡Perfecto! Conoces el origen histórico y geográfico del pragmatismo.",
      feedbackKO: "Recuerda cuándo y dónde nace el pragmatismo como corriente filosófica.",
      videoHints: [
        "💡 Opciones: XVII | XVIII | XIX | XX | XXI | XVI",
        "💡 Opciones: Inglaterra | Francia | Alemania | Estados Unidos | Italia | España",
        "💡 Opciones: William James | John Dewey | Charles Pierce | John Locke | David Hume | Bertrand Russell"
      ],
      videoSegment: { start: 8, end: 25 } // 0:08 - 0:25 (9.80 - 2 = 7.8, ajusto a 8)
    },
    {
      id: "p3",
      text: "3- Charles Pierce es considerado el [[padre]] del pragmatismo, además de [[William James]] y [[John Dewey]].",
      feedbackOK: "¡Excelente! Conoces a los tres grandes filósofos pragmatistas.",
      feedbackKO: "Recuerda quién es el fundador del pragmatismo y sus otros exponentes.",
      videoHints: [
        "💡 Opciones: hijo | discípulo | padre | seguidor | crítico | heredero",
        "💡 Opciones: Immanuel Kant | William James | John Locke | David Hume | Friedrich Nietzsche | Karl Marx",
        "💡 Opciones: George Berkeley | John Dewey | Thomas Hobbes | Jean-Jacques Rousseau | Adam Smith | John Stuart Mill"
      ],
      videoSegment: { start: 17, end: 34 } // 0:17 - 0:34 (18.70 - 2 = 16.7, ajusto a 17)
    },
    {
      id: "p4",
      text: "4- El pragmatismo es una corriente filosófica que establece que la [[utilidad]] del conocimiento y de las cosas se refleja en su aplicación [[práctica|practica]].",
      feedbackOK: "¡Correcto! Has captado la definición central del pragmatismo.",
      feedbackKO: "Piensa en qué valora el pragmatismo: ¿teoría o aplicación?",
      videoHints: [
        "💡 Opciones: belleza | verdad | utilidad | bondad | justicia | perfección",
        "💡 Opciones: teórica | abstracta | especulativa | práctica | ideal | conceptual"
      ],
      videoSegment: { start: 29, end: 41 } // 0:32 - 0:41 (34.02 - 2)
    },
    {
      id: "p5",
      text: "5- Para el pragmatismo no es suficiente con los conocimientos [[teóricos|teoricos]]. Una persona pragmática es una persona que se centra en la [[consecución|consecucion]] de sus [[objetivos]].",
      feedbackOK: "¡Perfecto! El pragmatismo prioriza resultados sobre teorías.",
      feedbackKO: "Recuerda: el pragmático busca logros concretos, no solo ideas.",
      videoHints: [
        "💡 Opciones: prácticos | teóricos | aplicados | concretos | reales | efectivos",
        "💡 Opciones: discusión | contemplación | consecución | especulación | reflexión | meditación",
        "💡 Opciones: teorías | ideas | principios | objetivos | conceptos | abstracciones"
      ],
      videoSegment: { start: 37, end: 53 } // 0:39 - 0:53 (40.86 - 2 = 38.86, ajusto a 39)
    },
    {
      id: "p6",
      text: "6- El pragmático se centra más en la [[finalidad]] de los [[resultados]] obtenidos, que en la forma o manera de abordarlos. Se basa en todo aquello que sea [[eficaz]].",
      feedbackOK: "¡Excelente! El fin justifica los medios en el pragmatismo.",
      feedbackKO: "Piensa en qué importa más: ¿el proceso o el resultado?",
      videoHints: [
        "💡 Opciones: forma | proceso | método | finalidad | medio | procedimiento",
        "💡 Opciones: procesos | métodos | medios | resultados | formas | procedimientos",
        "💡 Opciones: ineficaz | inútil | teórico | eficaz | abstracto | ideal"
      ],
      videoSegment: { start: 45, end: 80 } // 0:51 - 1:20 (53.02 - 2)
    },
    {
      id: "p7",
      text: "7- Ejemplo: Una persona pragmática dejaría un lado las [[emociones]] e iría a conseguir el objetivo para que la empresa funcione.",
      feedbackOK: "¡Correcto! El pragmático subordina sentimientos a objetivos.",
      feedbackKO: "Piensa en qué deja de lado una persona pragmática para lograr sus metas.",
      videoHints: [
        "💡 Opciones: objetivos | razones | emociones | metas | estrategias | planes"
      ],
      videoSegment: { start: 64, end: 79 } // 1:04 - 1:19 (66.66 - 2)
    },
    {
      id: "p8",
      text: "8- En el pragmatismo los [[juicios]] son [[posteriores]] y no anteriores a las acciones.",
      feedbackOK: "¡Perfecto! Primero se actúa, después se juzga según consecuencias.",
      feedbackKO: "Recuerda: ¿cuándo se evalúan las acciones en el pragmatismo?",
      videoHints: [
        "💡 Opciones: acciones | resultados | juicios | objetivos | medios | fines",
        "💡 Opciones: anteriores | simultáneos | previos | posteriores | paralelos | precedentes"
      ],
      videoSegment: { start: 78, end: 94 } // 1:18 - 1:34 (80.02 - 2)
    },
    {
      id: "p9",
      text: "9- El pragmatismo establece el significado o [[valor]] de las cosas a partir de sus [[consecuencias]].",
      feedbackOK: "¡Excelente! El pragmatismo es consecuencialista, como el utilitarismo.",
      feedbackKO: "Piensa en qué determina el valor de algo según el pragmatismo.",
      videoHints: [
        "💡 Opciones: origen | esencia | forma | valor | causa | principio",
        "💡 Opciones: intenciones | causas | orígenes | consecuencias | principios | fundamentos"
      ],
      videoSegment: { start: 84, end: 102 } // 1:24 - 1:42 (86.58 - 2)
    },
    {
      id: "p10",
      text: "10- El pragmatismo desecha las verdades [[absolutas]], es decir, las ideas no son [[fijas]] ni [[inamovibles]], ya que estas [[evolucionan]] y están sujetas al cambio.",
      feedbackOK: "¡Correcto! El pragmatismo rechaza dogmas y verdades eternas.",
      feedbackKO: "Recuerda: el pragmatismo es anti-dogmático y evolutivo.",
      videoHints: [
        "💡 Opciones: relativas | parciales | absolutas | temporales | contingentes | dudosas",
        "💡 Opciones: móviles | cambiantes | fijas | variables | dinámicas | inestables",
        "💡 Opciones: movibles | cambiantes | variables | inamovibles | mutables | transformables",
        "💡 Opciones: permanecen | se estancan | evolucionan | se mantienen | persisten | se conservan"
      ],
      videoSegment: { start: 92, end: 109 } // 1:32 - 1:49 (93.66 - 2 = 91.66, ajusto a 92)
    },
    {
      id: "p11",
      text: "11- El pragmatismo fue [[antifundamentalista]], es decir, no acepta la existencia de una verdad [[última|ultima]] y por lo mismo no acepta [[religiones]].",
      feedbackOK: "¡Perfecto! El pragmatismo rechaza fundamentos absolutos y dogmas religiosos.",
      feedbackKO: "Piensa en la postura del pragmatismo ante verdades absolutas y fe religiosa.",
      videoHints: [
        "💡 Opciones: fundamentalista | dogmático | antifundamentalista | ortodoxo | conservador | tradicionalista",
        "💡 Opciones: primera | parcial | relativa | última | temporal | provisional",
        "💡 Opciones: ciencias | artes | filosofías | religiones | técnicas | prácticas"
      ],
      videoSegment: { start: 104, end: 117 } // 1:47 - 1:57 (109.00 - 2)
    },
    {
      id: "p12",
      text: "12- Ejemplo: Una persona vegetariana al borde de la muerte decide comer [[carne]]. Deja de lado sus [[principios]] porque la carne le permite [[sobrevivir]].",
      feedbackOK: "¡Excelente ejemplo! La supervivencia pragmática supera los principios ideológicos.",
      feedbackKO: "Reflexiona sobre cómo el pragmatismo prioriza resultados sobre ideales.",
      videoHints: [
        "💡 Opciones: vegetales | frutas | carne | granos | legumbres | cereales",
        "💡 Opciones: deseos | objetivos | metas | principios | fines | planes",
        "💡 Opciones: morir | sufrir | debilitarse | sobrevivir | enfermarse | desaparecer"
      ],
      videoSegment: { start: 115, end: 143 } // 1:55 - 2:23 (117.12 - 2)
    },
    {
      id: "p13",
      text: "13- Ser pragmático significa darle prioridad a la [[supervivencia]] por encima de los [[ideales]].",
      feedbackOK: "¡Correcto! Resumen perfecto: pragmatismo = resultados > ideología.",
      feedbackKO: "Piensa en qué prioriza el pragmatismo: ¿ideas o resultados concretos?",
      videoHints: [
        "💡 Opciones: teoría | ideología | filosofía | supervivencia | doctrina | especulación",
        "💡 Opciones: objetivos | resultados | ideales | consecuencias | logros | metas"
      ],
      videoSegment: { start: 138, end: 151 } // 2:21 - 2:31 (142.96 - 2 = 140.96, ajusto a 141)
    }
  ]
};

// Sistema de pistas mejorado con sopa de palabras
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

// Función para generar link directo al momento del video
window.CLOZE_TEST.getVideoLink = function(itemId) {
  const item = this.items.find(i => i.id === itemId);
  if (!item || !item.videoSegment) return null;
  
  const config = window.VIDEO_CONFIG?.pragmatismo;
  if (!config) return null;
  
  const actualStart = config.startTime + item.videoSegment.start;
  return `https://www.youtube.com/watch?v=${config.youtubeId}&t=${actualStart}s`;
};

// Función auxiliar para parsear las opciones de la sopa de palabras
window.CLOZE_TEST.parseHintOptions = function(hintText) {
  // Extrae las opciones del formato "💡 Opciones: opción1 | opción2 | ..."
  const match = hintText.match(/💡 Opciones: (.+)/);
  if (!match) return null;
  
  return match[1].split('|').map(opt => opt.trim());
};