// themes/etica/cloze_test.js
// Cloze — Diferencias entre ética y moral. Video eHIDwx6J-lA (10:31): 26 frases en el orden del
// video, con sus tiempos (videoSegment contado desde startTime = 1) y una pista de opciones por hueco.
// Versión 2.0 (2026-11-25): revisado con la transcripción: tramos con los tiempos reales, suma el
//   Juramento Hipocrático y los ejemplos finales de comportamiento moral, y el link al video
//   funciona (buscaba VIDEO_CONFIG.etica_y_moral).
window.CLOZE_TEST = {
  title: "Cloze — Ética y Moral (0:00—10:31)",
  items: [
    {
      id: "em1",
      text: "1- Las diferencias entre la ética y la moral no son tan evidentes como podría parecer, y es muy común que ambos términos se utilicen de manera [[indistinta]], pero no es así.",
      feedbackOK: "¡Correcto! Muchas veces se confunden estos conceptos.",
      feedbackKO: "Piensa en cómo se usan comúnmente estos términos.",
      videoHints: [
        "💡 Opciones: distinta | diferenciada | indistinta | contraria | separada | opuesta"
      ],
      videoSegment: { start: 0, end: 16 } // 0:01 - 0:17
    },
    {
      id: "em2",
      text: "2- La ética es una rama de la [[filosofía]], mientras que la moral forma parte de la vida [[diaria]]. Algunos autores la comparan con la teoría y la [[práctica|practica]].",
      feedbackOK: "¡Perfecto! Has captado la diferencia fundamental: filosofía vs vida cotidiana.",
      feedbackKO: "Recuerda: una es teórica, la otra práctica.",
      videoHints: [
        "💡 Opciones: antropología | teología | psicología | filosofía | economía | sociología",
        "💡 Opciones: académica | diaria | especulativa | teórica | abstracta | conceptual",
        "💡 Opciones: abstracción | práctica | contemplación | especulación | teoría | reflexión"
      ],
      videoSegment: { start: 15, end: 27 } // 0:16 - 0:28
    },
    {
      id: "em3",
      text: "3- La ética sería la moral [[pensada]] mientras lo que llamamos moral sería la moral [[vivida]].",
      feedbackOK: "¡Excelente síntesis! Ética = reflexión, Moral = acción.",
      feedbackKO: "Piensa en la distinción: pensar vs vivir.",
      videoHints: [
        "💡 Opciones: vivida | practicada | experimentada | pensada | realizada | sentida",
        "💡 Opciones: reflexionada | teorizada | pensada | conceptualizada | vivida | especulada"
      ],
      videoSegment: { start: 21, end: 33 } // 0:22 - 0:34
    },
    {
      id: "em4",
      text: "4- La ética es la búsqueda del [[bien]], de la realización personal en armonía con los otros seres humanos, e implica una relación dinámica entre nuestros [[valores]] y los de la [[sociedad]].",
      feedbackOK: "¡Correcto! La ética busca el bien personal en relación con la sociedad.",
      feedbackKO: "Piensa en qué busca la ética y cómo se relaciona con lo social.",
      videoHints: [
        "💡 Opciones: bien | poder | riqueza | placer | honor | mal",
        "💡 Opciones: instintos | valores | necesidades | deseos | pasiones | placeres",
        "💡 Opciones: sociedad | familia | Estado | naturaleza | individuo | religión"
      ],
      videoSegment: { start: 60, end: 74 } // 1:01 - 1:15
    },
    {
      id: "em5",
      text: "5- Aristóteles en Ética a Nicómaco afirma que la [[felicidad]] es el fin último de todo ser humano, y la ética nos enseña cómo [[alcanzarla]].",
      feedbackOK: "¡Perfecto! La ética aristotélica busca la felicidad como fin último.",
      feedbackKO: "Recuerda qué es el fin último según Aristóteles.",
      videoHints: [
        "💡 Opciones: placer | poder | felicidad | riqueza | virtud | honor",
        "💡 Opciones: evitarla | alcanzarla | ignorarla | abandonarla | rechazarla | negarla"
      ],
      videoSegment: { start: 73, end: 92 } // 1:14 - 1:33
    },
    {
      id: "em6",
      text: "6- La ética intenta responder en la teoría y en la práctica a la pregunta de [[cómo debemos vivir|como debemos vivir]], y es la rama de la filosofía que estudia los [[principios morales]], lo que es [[bueno]] y malo.",
      feedbackOK: "¡Excelente! Has captado la pregunta central y el objeto de estudio de la ética.",
      feedbackKO: "Piensa en la pregunta fundamental de la ética.",
      videoHints: [
        "💡 Opciones: qué debemos saber | cómo debemos vivir | qué existe | qué es verdad | qué es real | por qué existimos",
        "💡 Opciones: teoremas matemáticos | dogmas religiosos | leyes naturales | normas jurídicas | principios morales | hechos científicos",
        "💡 Opciones: bello | verdadero | bueno | útil | placentero | conveniente"
      ],
      videoSegment: { start: 95, end: 111 } // 1:36 - 1:52
    },
    {
      id: "em7",
      text: "7- Etimología: La palabra ética proviene del [[griego]], de la unión de ethos (manera de hacer, costumbre, hábito), y según Aristóteles podría traducirse como [[filosofía de las costumbres|filosofia de las costumbres]].",
      feedbackOK: "¡Correcto! Conoces el origen etimológico de la palabra ética.",
      feedbackKO: "Recuerda de qué lengua antigua proviene la palabra ética.",
      videoHints: [
        "💡 Opciones: griego | hebreo | sánscrito | latín | egipcio | árabe",
        "💡 Opciones: ciencia de las leyes | lógica del pensamiento | análisis de la belleza | filosofía de las costumbres | teoría del conocimiento | estudio de la verdad"
      ],
      videoSegment: { start: 113, end: 132 } // 1:54 - 2:13
    },
    {
      id: "em8",
      text: "8- En el campo personal, la ética suele apuntar a valores fundamentales como saber diferenciar el [[bien]] del [[mal]], qué es [[justo]] y deseable, y cuál debe ser nuestra postura en torno a la libertad y las desigualdades.",
      feedbackOK: "¡Perfecto! Has identificado los valores fundamentales de la ética personal.",
      feedbackKO: "Piensa en las distinciones morales básicas que hace la ética.",
      videoHints: [
        "💡 Opciones: conveniente | bello | útil | verdadero | bien | placer",
        "💡 Opciones: placer | verdad | bien | mal | belleza | utilidad",
        "💡 Opciones: justo | placentero | bello | útil | verdadero | conveniente"
      ],
      videoSegment: { start: 133, end: 155 } // 2:14 - 2:36
    },
    {
      id: "em9",
      text: "9- Podría decirse que la ética tiende a ser una postura [[personal]] e íntima, adoptada por cada [[individuo]] según sus principios.",
      feedbackOK: "¡Excelente! La ética es una reflexión individual y personal.",
      feedbackKO: "Recuerda: la ética es una reflexión íntima de cada persona.",
      videoHints: [
        "💡 Opciones: colectiva | pública | social | grupal | comunitaria | personal",
        "💡 Opciones: colectivo | Estado | grupo | sociedad | comunidad | individuo"
      ],
      videoSegment: { start: 154, end: 164 } // 2:35 - 2:45
    },
    {
      id: "em10",
      text: "10- En muchas profesiones existen los [[códigos éticos|codigos eticos]], que se corresponden con el código de [[conducta]] del profesional y contemplan reglas de cumplimiento [[obligatorio]].",
      feedbackOK: "¡Correcto! Los códigos éticos profesionales regulan la conducta laboral.",
      feedbackKO: "Piensa en cómo se regula la ética en el ámbito profesional.",
      videoHints: [
        "💡 Opciones: reglamentos administrativos | decretos gubernamentales | códigos éticos | leyes penales | ordenanzas municipales | normas civiles",
        "💡 Opciones: fe | pensamiento | ideología | conducta | opinión | creencia",
        "💡 Opciones: sugerido | recomendado | opcional | discrecional | obligatorio | voluntario"
      ],
      videoSegment: { start: 173, end: 196 } // 2:54 - 3:17
    },
    {
      id: "em11",
      text: "11- La ética tiende a ser [[teórica|teorica]] y personal, continuamente se pregunta por la naturaleza del bien en las actividades humanas y sobre la validez de la [[moralidad]] en cada sociedad.",
      feedbackOK: "¡Perfecto! La ética es reflexión teórica sobre la moralidad.",
      feedbackKO: "Recuerda: la ética es teórica, la moral es práctica.",
      videoHints: [
        "💡 Opciones: experimental | empírica | práctica | concreta | teórica | aplicada",
        "💡 Opciones: legalidad | moralidad | religiosidad | política | economía | ciencia"
      ],
      videoSegment: { start: 205, end: 227 } // 3:26 - 3:48
    },
    {
      id: "em12",
      text: "12- Una postura ética puede entrar en [[conflicto]] con códigos y valores morales de determinadas sociedades. Por ejemplo, si no compartimos la idea de la [[pena de muerte]].",
      feedbackOK: "¡Excelente! Has captado que ética y moral pueden chocar.",
      feedbackKO: "Piensa en cómo la ética personal puede oponerse a la moral social.",
      videoHints: [
        "💡 Opciones: unidad | consenso | concordancia | armonía | conflicto | acuerdo",
        "💡 Opciones: igualdad de género | educación pública | seguridad social | libertad de expresión | pena de muerte | derecho al voto"
      ],
      videoSegment: { start: 226, end: 242 } // 3:47 - 4:03
    },
    {
      id: "em13",
      text: "13- La ética es [[constante]], no suele cambiar con el tiempo y regula el comportamiento humano desde cada [[persona]] y desde su propia [[conciencia|consciencia]].",
      feedbackOK: "¡Correcto! La ética tiene pretensión de universalidad y permanencia.",
      feedbackKO: "Piensa en cómo la ética se mantiene a lo largo del tiempo.",
      videoHints: [
        "💡 Opciones: efímera | cambiante | temporal | variable | constante | relativa",
        "💡 Opciones: Estado | grupo | sociedad | persona | religión | comunidad",
        "💡 Opciones: costumbre | ley | tradición | conciencia | regla | norma"
      ],
      videoSegment: { start: 268, end: 280 } // 4:29 - 4:41
    },
    {
      id: "em14",
      text: "14- Ejemplo de ética: La [[Declaración Universal de Derechos Humanos|Declaracion Universal de Derechos Humanos]] proclamada por las Naciones Unidas en [[1948]] es un compendio global de principios éticos.",
      feedbackOK: "¡Perfecto! Has identificado el documento ético universal por excelencia.",
      feedbackKO: "Recuerda el documento de la ONU sobre derechos fundamentales.",
      videoHints: [
        "💡 Opciones: Tratado de Versalles | Declaración de Independencia | Código de Hammurabi | Declaración Universal de Derechos Humanos | Carta de las Naciones Unidas | Constitución Europea",
        "💡 Opciones: 1947 | 1950 | 1949 | 1948 | 1946 | 1945"
      ],
      videoSegment: { start: 282, end: 316 } // 4:43 - 5:17
    },
    {
      id: "em24",
      text: "15- Otro ejemplo clásico de código ético laboral es el [[Juramento Hipocrático|juramento hipocratico]], que realizan los profesionales de la [[medicina]] al terminar sus estudios y que está vigente desde hace más de [[2.000|2000|dos mil]] años.",
      feedbackOK: "Correcto. Un código ético profesional muy antiguo.",
      feedbackKO: "Revisá el segundo ejemplo de ética.",
      videoHints: [
        "💡 Opciones: Juramento Hipocrático | Juramento Olímpico | Tratado de Paz | Manifiesto Comunista | Código de Hammurabi | Contrato Social",
        "💡 Opciones: arquitectura | política | ingeniería | abogacía | medicina | docencia",
        "💡 Opciones: 50 | 2.000 | 10 | 100 | 20 | 300"
      ],
      videoSegment: { start: 316, end: 337 } // 5:17 - 5:38
    },
    {
      id: "em15",
      text: "16- La moral se refiere a los códigos de [[normas]] impuestos por una [[sociedad]] para regular la [[conducta]] o el comportamiento de los individuos.",
      feedbackOK: "¡Excelente! Has captado la definición de moral como código social.",
      feedbackKO: "Piensa en qué es la moral: normas sociales de comportamiento.",
      videoHints: [
        "💡 Opciones: teorías | normas | especulaciones | reflexiones | ideas | conceptos",
        "💡 Opciones: pensador | individuo | persona | sociedad | sabio | filósofo",
        "💡 Opciones: conducta | teoría | reflexión | meditación | especulación | pensamiento"
      ],
      videoSegment: { start: 377, end: 394 } // 6:18 - 6:35
    },
    {
      id: "em16",
      text: "17- Se dice que una persona es moral cuando actúa de acuerdo con las [[normas]], [[costumbres]] y valores de su sociedad, aunque estos pueden estar en contradicción con la [[ética]] de esa misma persona.",
      feedbackOK: "¡Correcto! Una persona puede ser moral pero no ética, o viceversa.",
      feedbackKO: "Reflexiona sobre la posible contradicción entre moral y ética.",
      videoHints: [
        "💡 Opciones: normas | ideas | principios | reflexiones | teorías | especulaciones",
        "💡 Opciones: especulaciones | teorías | abstracciones | conceptos | reflexiones | costumbres",
        "💡 Opciones: ética | economía | ley | política | religión | ciencia"
      ],
      videoSegment: { start: 393, end: 407 } // 6:34 - 6:48
    },
    {
      id: "em17",
      text: "18- Según Paul Ricoeur, la ética versa sobre lo que es [[bueno]], mientras la moral trata sobre lo que es [[obligatorio]].",
      feedbackOK: "¡Perfecto! Distinción clave: bien vs obligación.",
      feedbackKO: "Recuerda la diferencia según Ricoeur: bueno vs obligatorio.",
      videoHints: [
        "💡 Opciones: verdadero | bueno | conveniente | útil | bello | placentero",
        "💡 Opciones: discrecional | sugerido | voluntario | recomendado | opcional | obligatorio"
      ],
      videoSegment: { start: 407, end: 415 } // 6:48 - 6:56
    },
    {
      id: "em18",
      text: "19- Etimología: Moral proviene del [[latín]] moralis, que deriva de mos-moris y puede traducirse como [[costumbre]], principios y reglas que rigen la vida social.",
      feedbackOK: "¡Excelente! Conoces el origen etimológico de la palabra moral.",
      feedbackKO: "Recuerda de qué lengua antigua proviene la palabra moral.",
      videoHints: [
        "💡 Opciones: griego | sánscrito | egipcio | latín | árabe | hebreo",
        "💡 Opciones: ley | deber | razón | derecho | verdad | costumbre"
      ],
      videoSegment: { start: 414, end: 431 } // 6:55 - 7:12
    },
    {
      id: "em19",
      text: "20- Los códigos morales se aplican a la [[vida cotidiana]] y a la conducta diaria, nos dice cómo es el modo correcto de actuar en cada [[situación]] y lugar.",
      feedbackOK: "¡Correcto! La moral es práctica y contextual.",
      feedbackKO: "Piensa en dónde se aplica la moral: en la vida diaria.",
      videoHints: [
        "💡 Opciones: teoría abstracta | contemplación pura | reflexión académica | pensamiento teórico | especulación filosófica | vida cotidiana",
        "💡 Opciones: concepto | situación | abstracción | reflexión | teoría | especulación"
      ],
      videoSegment: { start: 430, end: 442 } // 7:11 - 7:23
    },
    {
      id: "em20",
      text: "21- Faltar al código moral suele acarrear [[sanciones]] sociales y penales en algunos casos. Ejemplos: los testigos de Jehová en la Segunda Guerra Mundial fueron [[presos]] por negarse a tomar un fusil.",
      feedbackOK: "¡Perfecto! Has captado que violar la moral tiene consecuencias sociales.",
      feedbackKO: "Piensa en qué pasa cuando alguien viola las normas morales de una sociedad.",
      videoHints: [
        "💡 Opciones: premios | honores | recompensas | sanciones | elogios | reconocimientos",
        "💡 Opciones: condecorados | presos | exaltados | homenajeados | liberados | premiados"
      ],
      videoSegment: { start: 453, end: 473 } // 7:34 - 7:54
    },
    {
      id: "em21",
      text: "22- La moral tiende a ser [[normativa]], a reflejarse en reglamentos y prohibiciones, como algunos preceptos recogidos en textos judeocristianos como los [[10 mandamientos|diez mandamientos]].",
      feedbackOK: "¡Excelente! La moral se expresa en normas y mandatos concretos.",
      feedbackKO: "Piensa en cómo se manifiesta la moral: en reglas y prohibiciones.",
      videoHints: [
        "💡 Opciones: normativa | abstracta | reflexiva | teórica | especulativa | contemplativa",
        "💡 Opciones: 5 pilares | 4 evangelios | 12 apóstoles | 7 pecados capitales | 10 mandamientos | 8 nobles verdades"
      ],
      videoSegment: { start: 491, end: 503 } // 8:12 - 8:24
    },
    {
      id: "em22",
      text: "23- Los códigos morales pueden [[variar]] en el tiempo y el espacio. En una misma cultura, los valores morales se van [[modificando]] de acuerdo con las dinámicas y los distintos procesos sociales.",
      feedbackOK: "¡Correcto! La moral es relativa y cambiante, a diferencia de la ética.",
      feedbackKO: "Reflexiona sobre cómo la moral cambia con el tiempo y el lugar.",
      videoHints: [
        "💡 Opciones: fijarse | estabilizarse | mantenerse | consolidarse | permanecer | variar",
        "💡 Opciones: manteniéndose | estabilizándose | preservándose | modificando | conservándose | fijándose"
      ],
      videoSegment: { start: 531, end: 550 } // 8:52 - 9:11
    },
    {
      id: "em23",
      text: "24- Diferentes valores morales pueden convivir en una misma [[sociedad]] bajo una misma ética. La moral no es [[uniforme]] ni perenne.",
      feedbackOK: "¡Perfecto! Has captado la pluralidad moral dentro de una misma sociedad.",
      feedbackKO: "Piensa en cómo diferentes morales coexisten en una sociedad.",
      videoHints: [
        "💡 Opciones: familia | sociedad | individuo | nación | religión | persona",
        "💡 Opciones: variada | heterogénea | diversa | múltiple | plural | uniforme"
      ],
      videoSegment: { start: 549, end: 572 } // 9:10 - 9:33
    },
    {
      id: "em25",
      text: "25- Ejemplos de comportamiento moral: la [[cortesía|cortesia]] verbal, o no mentir, a menos que se trate de una mentira socialmente [[aceptada]], como decirle a un enfermo terminal que va a [[mejorarse]].",
      feedbackOK: "Exacto. Una mentira piadosa que la sociedad acepta.",
      feedbackKO: "Revisá los ejemplos de comportamiento moral.",
      videoHints: [
        "💡 Opciones: cortesía | violencia | timidez | ironía | pereza | rapidez",
        "💡 Opciones: prohibida | castigada | olvidada | escrita | aceptada | pagada",
        "💡 Opciones: enojarse | operarse | morir | mejorarse | casarse | mudarse"
      ],
      videoSegment: { start: 572, end: 596 } // 9:33 - 9:57
    },
    {
      id: "em26",
      text: "26- Coherencia en la vida pública y privada: ser [[honrados]] en el trabajo y en la vida diaria, devolver el cambio de más o buscar al propietario de una [[cartera]] encontrada; y si se es funcionario, combatir la [[corrupción|corrupcion]].",
      feedbackOK: "Muy bien. Así termina el video.",
      feedbackKO: "Revisá el final del video.",
      videoHints: [
        "💡 Opciones: rápidos | astutos | callados | famosos | ricos | honrados",
        "💡 Opciones: carta | cartera | llave | casa | mascota | bicicleta",
        "💡 Opciones: eficiencia | educación | corrupción | honestidad | puntualidad | cultura"
      ],
      videoSegment: { start: 595, end: 631 } // 9:56 - 10:32
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
  const config = window.VIDEO_CONFIG?.etica;
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
