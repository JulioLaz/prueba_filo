// themes/presocraticos/cloze_test.js
// CLOZE TEST — Presocráticos (una frase por pensador)

window.CLOZE_TEST = {
  title: "Cloze — Presocráticos: una frase por pensador",
  items: [
    // 1) Tales de Mileto
    {
      id: "pr1",
      text: "El primer filósofo fue [[Tales de Mileto|Tales]], que propuso que el [[arjé|arje]] era el [[agua]] y que pensaba que todo está lleno de [[dioses]] y de [[vida]].",
      feedbackOK: "Muy bien. Tales inaugura la búsqueda del arjé con el agua y una visión animada del mundo.",
      feedbackKO: "Recuerda: Tales, arjé, agua, dioses y vida son las palabras clave.",
      videoHints: [
        "💡 Está cuando se presenta a Tales como el primer filósofo.",
        "💡 Justo después se explica que el arjé es el agua.",
        "💡 Luego se menciona que pensaba que todo está lleno de dioses y de vida."
      ],
      videoSegment: { start: 103, end: 123 } // ≈ 01:43
    },

    // 2) Anaximandro
    {
      id: "pr2",
      text: "En lugar del agua, [[Anaximandro]] propuso que el arjé era un elemento [[caótico|caotico]] y [[amorfo]], [[indeterminado]], que no era nada en [[concreto]], al que llamó el [[ápeiron|apeiron]], que en griego significa \"[[sin límites|sin limites]]\".",
      feedbackOK: "Correcto. El ápeiron es el arjé indefinido de Anaximandro.",
      feedbackKO: "Piensa en ápeiron como elemento caótico, amorfo, indeterminado y 'sin límites'.",
      videoHints: [
        "💡 Busca cuando se dice que en lugar del agua Anaximandro propuso otro arjé.",
        "💡 Allí se describe como caótico, amorfo e indeterminado.",
        "💡 Se explica que lo llamó ápeiron, que significa 'sin límites'."
      ],
      videoSegment: { start: 213, end: 233 } // ≈ 03:33
    },

    // 3) Anaxímenes
    {
      id: "pr3",
      text: "[[Anaxímenes|Anaximenes]] de Mileto vuelve, como [[Tales]], a proponer un arjé [[físico|fisico]] [[concreto]], y dice que es el [[aire]]; además es el primero en proponer un [[mecanismo]] para explicar cómo pasamos del [[arjé|arje]] a todas las demás cosas mediante [[rarefacción|rarefaccion]] y [[condensación|condensacion]].",
      feedbackOK: "Muy bien. Aire como arjé y rarefacción/condensación como mecanismo del cambio.",
      feedbackKO: "Recuerda: aire, mecanismo, rarefacción y condensación.",
      videoHints: [
        "💡 Está cuando se presenta al tercer presocrático, Anaxímenes de Mileto.",
        "💡 Se dice que vuelve a un arjé físico concreto: el aire.",
        "💡 Luego se explica el mecanismo de rarefacción y condensación."
      ],
      videoSegment: { start: 249, end: 299 } // ≈ 04:09
    },

    // 4) Pitágoras
    {
      id: "pr4",
      text: "Para lo que nos interesa a nosotros, los [[pitagóricos|pitagoricos]] pensaban literalmente que la [[realidad]] estaba compuesta de [[números|numeros]]; es decir, el [[arjé|arje]], para ellos, era el [[número|numero]].",
      feedbackOK: "Correcto. Para los pitagóricos, el número es el principio de todo.",
      feedbackKO: "Piensa en realidad compuesta de números y el número como arjé.",
      videoHints: [
        "💡 Aparece cuando se pasa a Pitágoras de Samos.",
        "💡 Tras la parte 'secta medio religiosa', se explica qué pensaban sobre la realidad.",
        "💡 Allí se dice que la realidad estaba compuesta de números: el arjé es el número."
      ],
      videoSegment: { start: 347, end: 357 } // ≈ 05:47
    },

    // 5) Jenófanes
    {
      id: "pr5",
      text: "Dios, en realidad, dice [[Jenófanes|Xenofanes]], no es ni [[figura]] ni [[cuerpo]], ni ha [[nacido]] como los dioses [[homéricos|homericos]], sino que es [[eterno]], sin [[principio]] ni [[fin]], e [[inmóvil|inmovil]].",
      feedbackOK: "Muy bien. Esa es la crítica de Jenófanes a la imagen antropomórfica de los dioses.",
      feedbackKO: "Recuerda: Dios sin figura ni cuerpo, eterno, sin principio ni fin e inmóvil.",
      videoHints: [
        "💡 Está cuando se describe la crítica de Jenófanes a las representaciones de los dioses.",
        "💡 Se menciona que son imaginaciones vulgares viciadas de antropomorfismo.",
        "💡 Luego viene esta definición positiva de Dios según Jenófanes."
      ],
      videoSegment: { start: 440, end: 455 } // ≈ 07:20
    },

    // 6) Heráclito
    {
      id: "pr6",
      text: "La doctrina por la que es más conocido [[Heráclito|Heraclito]] es aquélla acerca del [[cambio]] o el [[flujo]] [[universal]] de todas las cosas: \"[[Panta rhei]]\", \"[[Todo fluye]]\".",
      feedbackOK: "Exacto. Ésta es la famosa tesis del flujo universal asociada a Heráclito.",
      feedbackKO: "Piensa en cambio, flujo universal y la fórmula 'Panta rhei'.",
      videoHints: [
        "💡 Está cuando se dice 'la doctrina por la que es más conocido'.",
        "💡 Se menciona explícitamente el cambio o flujo universal de todas las cosas.",
        "💡 Luego se añade 'Panta rhei', 'Todo fluye'."
      ],
      videoSegment: { start: 518, end: 526 } // ≈ 08:38
    },

    // 7) Parménides
    {
      id: "pr7",
      text: "El intelecto nos fuerza a reconocer que lo único que [[existe]] es el [[Ser]], puro, [[único|unico]], [[increado]], [[eterno]], [[perfecto]] y [[esférico|esferico]]; todo lo demás que [[vemos]] y [[experimentamos]] queda reducido a una [[ilusión|ilusion]], a una [[apariencia]], a pura [[opinión|opinion]].",
      feedbackOK: "Muy bien. Es la ontología radical de Parménides: sólo el Ser es, todo lo demás es apariencia.",
      feedbackKO: "No olvides: Ser único, increado, eterno, perfecto y esférico frente a ilusión, apariencia y opinión.",
      videoHints: [
        "💡 Está después de que se diga que el cambio es imposible.",
        "💡 Se concluye que lo único que existe es el Ser.",
        "💡 Todo lo demás se presenta como ilusión, apariencia u opinión."
      ],
      videoSegment: { start: 652, end: 667 } // ≈ 10:52
    },

    // 8) Zenón de Elea
    {
      id: "pr8",
      text: "Zenón de [[Elea]] intentó reforzar la [[tesis]] de [[Parménides|Parmenides]] acerca de la [[imposibilidad]] del [[cambio]] con diversas [[paradojas]].",
      feedbackOK: "Correcto. Zenón es famoso precisamente por sus paradojas en defensa de Parménides.",
      feedbackKO: "Recuerda: Elea, tesis de Parménides, imposibilidad del cambio y paradojas.",
      videoHints: [
        "💡 Está cuando se habla de los discípulos de Parménides.",
        "💡 Se presenta a Zenón de Elea como el más famoso.",
        "💡 Luego se menciona que intentó reforzar la tesis con diversas paradojas."
      ],
      videoSegment: { start: 713, end: 721 } // ≈ 11:53
    },

    // 9) Empédocles
    {
      id: "pr9",
      text: "Empédocles de [[Agrigento]] propuso que los arjés o [[principios]] eran [[cuatro]], los cuatro [[elementos]]: la [[tierra]], el [[agua]], el [[aire]] y el [[fuego]], y que el [[cambio]] se explica por la [[mezcla]] y [[separación|separacion]] de estos elementos bajo la lucha entre el [[Amor]] y el [[Odio]].",
      feedbackOK: "Muy bien. Ahí está el esquema de cuatro elementos y las fuerzas del Amor y el Odio.",
      feedbackKO: "Piensa en cuatro elementos como arjés y en las dos fuerzas que los mezclan y separan.",
      videoHints: [
        "💡 Es cuando se presenta al primer pluralista: Empédocles de Agrigento.",
        "💡 Se enumeran los cuatro elementos: tierra, agua, aire y fuego.",
        "💡 Luego se introduce el Amor y el Odio como fuerzas cósmicas."
      ],
      videoSegment: { start: 771, end: 800 } // ≈ 12:51
    },

    // 10) Anaxágoras
    {
      id: "pr10",
      text: "Lo importante es que para [[Anaxágoras|Anaxagoras]], [[todo]] está en [[todo]]: cada cosa contiene literalmente todas las [[cosas]] del [[universo]], aunque en distinta [[proporción|proporcion]], y un [[Noûs|Nous]] o [[Intelecto]] [[cósmico|cosmico]] separado es el encargado de [[ordenar]] todas las cosas.",
      feedbackOK: "Excelente. Has recogido tanto el 'todo está en todo' como el papel del Noûs.",
      feedbackKO: "Recuerda: todo está en todo y el Noûs como Intelecto cósmico ordenante.",
      videoHints: [
        "💡 Está cuando se dice que lo importante es que para Anaxágoras todo está en todo.",
        "💡 Se explica que cada cosa contiene todas las cosas del universo en distinta proporción.",
        "💡 Después se introduce el Noûs o Intelecto cósmico que ordena la mezcla originaria."
      ],
      videoSegment: { start: 893, end: 965 } // ≈ 14:53
    },

    // 11) Leucipo y Demócrito (atomistas)
    {
      id: "pr11",
      text: "Por último, tenemos el [[atomismo]] de [[Leucipo]] de Mileto y [[Demócrito|Democrito]] de Abdera: los arjés son en cierto sentido [[dos]] y en otro sentido [[infinitos]] —lo [[lleno]] (equivalente al [[ser]]) y lo [[vacío|vacio]] (equivalente al [[no-ser|no ser]]), y los [[átomos|atomos]] como unidades mínimas e [[indivisibles]].",
      feedbackOK: "Muy bien. Resumes la estructura básica del atomismo: lleno/vacío y átomos indivisibles.",
      feedbackKO: "Piensa en los dos principios (lleno/vacío) y en los infinitos átomos como unidades indivisibles.",
      videoHints: [
        "💡 Aparece cuando se dice 'Por último, tenemos el atomismo de Leucipo y Demócrito'.",
        "💡 Se explica que los arjés son dos y a la vez infinitos.",
        "💡 Luego se define el átomo como unidad mínima e indivisible de materia."
      ],
      videoSegment: { start: 987, end: 1020 } // ≈ 16:27
    }
  ]
};

// === Sistema de pistas (igual que en los otros temas) ===
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

// === Link directo al momento del video (3s ANTES de la frase) ===
window.CLOZE_TEST.getVideoLink = function(itemId) {
  const item = this.items.find(i => i.id === itemId);
  if (!item || !item.videoSegment) return null;

  const config = window.VIDEO_CONFIG?.presocraticos; // 👈 ajusta este nombre si usas otro tema
  if (!config) return null;

  const baseStart = (config.startTime || 0) + item.videoSegment.start;
  const safeStart = Math.max(baseStart - 3, 0); // 3 segundos antes de la frase

  return `https://www.youtube.com/watch?v=${config.youtubeId}&t=${safeStart}s`;
};
