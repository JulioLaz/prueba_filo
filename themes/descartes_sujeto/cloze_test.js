// themes/descartes_sujeto/cloze_test.js — Cloze del video «Descartes» (trwXp6hMN8M, 0:00–14:20; después vienen la despedida y preguntas).
// v1.0 (2026-11-25): 16 frases tomadas de la transcripción del video, en orden y con sus tiempos
//   (videoSegment en segundos contados desde startTime = 1) y una pista de opciones por hueco.
window.CLOZE_TEST = {
  title: "Cloze — Descartes: de la duda al dualismo (0:00–14:20)",
  items: [
    {
      id: "d1",
      text: "René Descartes es el padre de la filosofía [[moderna]]. Todo su pensamiento está marcado por la búsqueda de la [[certeza]]: si hay algo de lo que pueda tener la más mínima [[duda]], es mejor rechazarlo y tenerlo como [[falso]].",
      feedbackOK: "Correcto. Solo vale lo indudable.",
      feedbackKO: "Revisá el comienzo del video.",
      videoHints: [
        "💡 Opciones: antigua | moderna | medieval | griega | oriental | religiosa",
        "💡 Opciones: certeza | felicidad | fama | belleza | libertad | riqueza",
        "💡 Opciones: alegría | sed | duda | suerte | fuerza | prisa",
        "💡 Opciones: sagrado | verdadero | bello | útil | seguro | falso"
      ],
      videoSegment: { start: 28, end: 49 } // 0:29 - 0:50
    },
    {
      id: "d2",
      text: "Descartes admira el rigor de las [[matemáticas|matematicas]], que dan resultados exactos e indudables. Le decepcionan los [[filósofos|filosofos]], que nunca se ponen de [[acuerdo]]; por eso propone un nuevo [[método|metodo]].",
      feedbackOK: "Exacto. Quiere el rigor matemático en la filosofía.",
      feedbackKO: "¿Qué admira y qué le decepciona a Descartes?",
      videoHints: [
        "💡 Opciones: costumbres | leyendas | poesías | modas | matemáticas | religiones",
        "💡 Opciones: médicos | soldados | filósofos | matemáticos | comerciantes | pintores",
        "💡 Opciones: luto | viaje | acuerdo | fiesta | pie | moda",
        "💡 Opciones: mito | templo | rey | rito | dios | método"
      ],
      videoSegment: { start: 48, end: 77 } // 0:49 - 1:18
    },
    {
      id: "d3",
      text: "Solo dudando de todo, al menos una vez en la vida, se puede alcanzar alguna [[verdad]]. La duda es un [[camino]] para llegar a la certeza, y su método tendrá [[cuatro]] reglas.",
      feedbackOK: "Muy bien. La duda es un medio, no un fin.",
      feedbackKO: "Revisá qué papel tiene la duda en el método.",
      videoHints: [
        "💡 Opciones: victoria | verdad | fama | fortuna | venganza | excusa",
        "💡 Opciones: juego | castigo | camino | error | muro | final",
        "💡 Opciones: cuatro | diez | tres | dos | cien | siete"
      ],
      videoSegment: { start: 76, end: 105 } // 1:17 - 1:46
    },
    {
      id: "d4",
      text: "La regla de la [[evidencia]] pide no aceptar nada como verdadero sin estar completamente convencido, evitando la [[precipitación|precipitacion]]. El criterio de verdad son las ideas [[claras]] y [[distintas]].",
      feedbackOK: "Correcto. Claridad y distinción.",
      feedbackKO: "Revisá la primera regla del método.",
      videoHints: [
        "💡 Opciones: tradición | fe | evidencia | obediencia | opinión | costumbre",
        "💡 Opciones: duda | prudencia | calma | precipitación | paciencia | reflexión",
        "💡 Opciones: oscuras | antiguas | famosas | confusas | útiles | claras",
        "💡 Opciones: comunes | iguales | repetidas | mezcladas | distintas | borrosas"
      ],
      videoSegment: { start: 104, end: 128 } // 1:45 - 2:09
    },
    {
      id: "d5",
      text: "La regla del [[análisis|analisis]] divide los problemas en partes; la de la [[síntesis|sintesis]] asciende con orden de lo simple a lo complejo; y la de la [[enumeración|enumeracion]] revisa todos los pasos para no dejar nada afuera.",
      feedbackOK: "Exacto. Análisis, síntesis y enumeración.",
      feedbackKO: "Revisá las otras tres reglas.",
      videoHints: [
        "💡 Opciones: memoria | oración | intuición | costumbre | análisis | suerte",
        "💡 Opciones: repetición | sospecha | prisa | síntesis | opinión | confusión",
        "💡 Opciones: decoración | emoción | enumeración | invención | imaginación | intuición"
      ],
      videoSegment: { start: 127, end: 174 } // 2:08 - 2:55
    },
    {
      id: "d6",
      text: "En las [[Meditaciones]] metafísicas, Descartes se propone dudar de todas sus opiniones [[antiguas]] y empezar de [[cero]]. Para eso se encierra en una [[habitación|habitacion]] y confía solo en su pensamiento.",
      feedbackOK: "Muy bien. Demoler para reconstruir.",
      feedbackKO: "¿Qué hace Descartes en la primera meditación?",
      videoHints: [
        "💡 Opciones: Leyes | Fábulas | Odas | Meditaciones | Crónicas | Confesiones",
        "💡 Opciones: ajenas | felices | nuevas | populares | antiguas | secretas",
        "💡 Opciones: abajo | cero | afuera | arriba | nuevo | lejos",
        "💡 Opciones: taberna | iglesia | plaza | habitación | biblioteca | escuela"
      ],
      videoSegment: { start: 183, end: 224 } // 3:04 - 3:45
    },
    {
      id: "d7",
      text: "Los [[sentidos]] ya lo engañaron alguna vez, como el [[palo]] que parece roto dentro del agua. Y no hay un criterio seguro para distinguir cuándo estoy [[soñando|sonando]] de cuándo estoy [[despierto]].",
      feedbackOK: "Correcto. Sentidos y sueño no pasan la prueba.",
      feedbackKO: "Revisá los primeros motivos de duda.",
      videoHints: [
        "💡 Opciones: recuerdos | sentidos | números | amigos | maestros | libros",
        "💡 Opciones: barco | palo | pez | zapato | puente | anillo",
        "💡 Opciones: comiendo | cantando | corriendo | soñando | leyendo | escribiendo",
        "💡 Opciones: enfermo | despierto | cansado | feliz | solo | callado"
      ],
      videoSegment: { start: 227, end: 269 } // 3:48 - 4:30
    },
    {
      id: "d8",
      text: "Podría existir un genio [[maligno]] que me hiciera creer que 2 más 2 son 4 cuando en realidad son [[cinco|5]]. Esta duda llevada al extremo se llama duda [[hiperbólica|hiperbolica]].",
      feedbackOK: "Exacto. Ni las matemáticas resisten.",
      feedbackKO: "Revisá la hipótesis más extrema.",
      videoHints: [
        "💡 Opciones: tonto | dormido | bondadoso | maligno | lejano | pequeño",
        "💡 Opciones: seis | cinco | tres | cuatro | dos | ocho",
        "💡 Opciones: musical | hiperbólica | leve | científica | pasajera | religiosa"
      ],
      videoSegment: { start: 268, end: 302 } // 4:29 - 5:03
    },
    {
      id: "d9",
      text: "En la segunda meditación, Descartes encuentra una verdad [[indudable]]: si dudo, [[pienso]]; y si pienso, [[existo]]. Existo como cosa pensante, como [[res cogitans]].",
      feedbackOK: "¡Excelente! Es el cogito.",
      feedbackKO: "Revisá el gran descubrimiento de la segunda meditación.",
      videoHints: [
        "💡 Opciones: probable | falsa | indudable | pequeña | dudosa | antigua",
        "💡 Opciones: duermo | olvido | corro | pienso | como | callo",
        "💡 Opciones: sueño | existo | muero | dudo | miento | caigo",
        "💡 Opciones: res infinita | res divina | res cogitans | res extensa | res natura | res publica"
      ],
      videoSegment: { start: 309, end: 351 } // 5:10 - 5:52
    },
    {
      id: "d10",
      text: "Solo estoy seguro de que soy una cosa que piensa, porque del [[cuerpo]] todavía puedo dudar. Aquí empieza la distinción entre [[alma]] y cuerpo, base del [[dualismo]] cartesiano.",
      feedbackOK: "Muy bien. Así nace el dualismo.",
      feedbackKO: "¿Qué distinción empieza con el cogito?",
      videoHints: [
        "💡 Opciones: idioma | cuerpo | nombre | pensamiento | alma | recuerdo",
        "💡 Opciones: casa | piedra | ciudad | máquina | alma | planta",
        "💡 Opciones: empirismo | monismo | escepticismo | idealismo | dualismo | relativismo"
      ],
      videoSegment: { start: 352, end: 378 } // 5:53 - 6:19
    },
    {
      id: "d11",
      text: "En la tercera meditación encuentra tres tipos de ideas: las [[innatas]], que nacen conmigo; las [[adventicias]], que vienen de afuera; y las [[facticias]], que invento yo, como un [[centauro]].",
      feedbackOK: "Correcto. Innatas, adventicias y facticias.",
      feedbackKO: "Revisá la clasificación de las ideas.",
      videoHints: [
        "💡 Opciones: compradas | ajenas | prestadas | olvidadas | innatas | falsas",
        "💡 Opciones: perfectas | dormidas | eternas | divinas | adventicias | secretas",
        "💡 Opciones: reales | sagradas | heredadas | facticias | simples | naturales",
        "💡 Opciones: centauro | perro | caballo | árbol | triángulo | río"
      ],
      videoSegment: { start: 439, end: 463 } // 7:20 - 7:44
    },
    {
      id: "d12",
      text: "Tengo en mí la idea de un Dios perfecto e [[infinito]], que no puedo haber inventado porque soy una sustancia [[finita]]. Dios la puso en mí como el [[artista]] que pone su [[firma]] en su obra.",
      feedbackOK: "Exacto. Lo finito no produce lo infinito.",
      feedbackKO: "Revisá el primer argumento sobre Dios.",
      videoHints: [
        "💡 Opciones: infinito | pequeño | material | mortal | cercano | visible",
        "💡 Opciones: divina | eterna | absoluta | finita | infinita | perfecta",
        "💡 Opciones: soldado | viajero | artista | médico | juez | ladrón",
        "💡 Opciones: firma | sombra | deuda | huella | queja | pregunta"
      ],
      videoSegment: { start: 468, end: 499 } // 7:49 - 8:20
    },
    {
      id: "d13",
      text: "¿Por qué nos equivocamos? La [[inteligencia]] es finita, pero la [[voluntad]] es infinita. El error sucede cuando me [[precipito]] en el juicio, como cuando saludo a Pedro y resulta que era Juana.",
      feedbackOK: "Muy bien. El brazo más largo que la manga.",
      feedbackKO: "Revisá la explicación del error en la cuarta meditación.",
      videoHints: [
        "💡 Opciones: fuerza | risa | inteligencia | mano | memoria | suerte",
        "💡 Opciones: estatura | memoria | vista | edad | fuerza | voluntad",
        "💡 Opciones: detengo | precipito | callo | aburro | duermo | distraigo"
      ],
      videoSegment: { start: 556, end: 606 } // 9:17 - 10:07
    },
    {
      id: "d14",
      text: "El argumento [[ontológico|ontologico]] dice que la idea de Dios implica su [[existencia]], igual que no puedo pensar una montaña sin [[valle]] o un triángulo sin tres [[lados]].",
      feedbackOK: "Correcto. La perfección implica la existencia.",
      feedbackKO: "Revisá el argumento de la quinta meditación.",
      videoHints: [
        "💡 Opciones: estético | ontológico | histórico | político | moral | biológico",
        "💡 Opciones: historia | ausencia | sombra | imagen | forma | existencia",
        "💡 Opciones: valle | nube | nieve | río | cumbre | árbol",
        "💡 Opciones: círculos | lados | colores | puntos | ángulos rectos | nombres"
      ],
      videoSegment: { start: 638, end: 661 } // 10:39 - 11:02
    },
    {
      id: "d15",
      text: "Como Dios es perfecto y [[bueno]], no puede ser [[engañador]]: cae la hipótesis del genio maligno. Dios se vuelve la [[garantía|garantia]] de mi conocimiento.",
      feedbackOK: "Exacto. Un Dios bueno no engaña.",
      feedbackKO: "¿Qué papel cumple Dios en el conocimiento?",
      videoHints: [
        "💡 Opciones: pequeño | lejano | cruel | dormido | bueno | olvidadizo",
        "💡 Opciones: creador | poderoso | engañador | sabio | infinito | eterno",
        "💡 Opciones: garantía | obstáculo | problema | enemigo | duda | límite"
      ],
      videoSegment: { start: 700, end: 728 } // 11:41 - 12:09
    },
    {
      id: "d16",
      text: "Al final hay tres sustancias: la res cogitans, Dios como sustancia [[infinita]] y la res [[extensa]], la realidad material. Esto da lugar al [[mecanicismo]]: los animales quedan reducidos a [[máquinas|maquinas]], como un reloj.",
      feedbackOK: "¡Excelente! Así se completa el sistema cartesiano.",
      feedbackKO: "Revisá el final del video.",
      videoHints: [
        "💡 Opciones: finita | infinita | visible | pequeña | mortal | material",
        "💡 Opciones: breve | extensa | pensante | infinita | divina | pública",
        "💡 Opciones: mecanicismo | misticismo | humanismo | romanticismo | idealismo | escepticismo",
        "💡 Opciones: personas | sueños | almas | ángeles | dioses | máquinas"
      ],
      videoSegment: { start: 805, end: 859 } // 13:26 - 14:20
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
  const config = window.VIDEO_CONFIG?.descartes_sujeto;
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
