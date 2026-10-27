/*
 * projects/guias/dios.js
 * Guía del Proyecto Final — Tema: Dios desde la filosofía.
 * Enfoque: la consideración filosófica de Dios (no la fe). Recorrido: lo divino en
 * los griegos, las religiones como concepciones de lo divino, los argumentos
 * racionales y sus críticas, hasta la conclusión de que la existencia de Dios no
 * puede demostrarse positivamente y que la creencia pertenece al plano de la fe.
 * Lo muestra projects/guia.html?tema=dios. Versión: v1.0.0 (2026-10-28)
 */
window.GUIA_TEMA = {
  id: "dios",
  titulo: "Dios desde la filosofía",
  icono: "⛪",
  granPregunta: "¿Qué puede decir la razón sobre Dios?",
  intro: [
    "Desde los griegos, la filosofía se preguntó por lo divino: Sócrates habló de su «daimon», Platón de la Idea de Bien y Aristóteles de un primer motor inmóvil. Las grandes religiones —judaísmo, cristianismo, islam, hinduismo, budismo— pensaron lo divino de maneras muy distintas.",
    "En este proyecto <strong>no se discute la fe de nadie</strong>. La pregunta es filosófica: ¿qué puede saber la razón sobre Dios? ¿Se puede demostrar que existe? ¿Qué lugar ocupan la ciencia, la moral y la fe?",
    "El recorrido lleva a una conclusión que la filosofía sostiene desde Kant: la existencia de Dios <strong>no puede demostrarse positivamente</strong> —tampoco su inexistencia—, y por eso la creencia pertenece al <strong>plano de la fe</strong>. Pensar esto con rigor es respetar tanto a la razón como a la fe."
  ],
  enfoque: "Se evalúa la argumentación, no las creencias. Un grupo creyente y uno no creyente pueden tener la misma nota si argumentan igual de bien.",

  preguntas: [
    {
      id: "razon",
      texto: "¿Puede la razón demostrar que Dios existe?",
      porQue: "Es la pregunta clásica: durante siglos se intentó probar a Dios con argumentos, y la crítica moderna mostró sus límites.",
      posturas: [
        {
          id: "si",
          nombre: "La razón ofrece argumentos a favor",
          tesis: "Sostenemos que la razón ofrece buenos argumentos a favor de la existencia de Dios, como la necesidad de una primera causa y el orden del universo, aunque reconocemos que esos argumentos hacen razonable la creencia sin probarla como se prueba un hecho.",
          autores: ["aristoteles", "anselmo", "tomas", "descartes", "platon", "lemaitre"],
          argumentos: [
            { tipo: "Cosmológico (Tomás)", texto: "P1: Todo lo que empieza a existir tiene una causa. P2: No puede haber una cadena infinita de causas. → Tiene que haber una primera causa no causada, que llamamos Dios." },
            { tipo: "Teleológico o del diseño", texto: "El universo muestra orden y leyes precisas; el orden suele venir de una inteligencia. → Es razonable pensar en una inteligencia ordenadora." },
            { tipo: "Ontológico (Anselmo)", texto: "Dios es «aquello mayor que lo cual nada puede pensarse». Si existiera solo en la mente, se podría pensar algo mayor: que exista también en la realidad. → Dios existe." },
            { tipo: "Por la idea de infinito (Descartes)", texto: "Tenemos la idea de un ser infinito y perfecto, pero somos finitos e imperfectos: esa idea no puede venir de nosotros. → La puso un ser infinito." }
          ],
          objeciones: [
            { objecion: "Kant: «la existencia no es un predicado». Pensar algo perfecto no lo hace existir (contra el argumento ontológico).", replica: "Reconocemos que el argumento ontológico es el más débil; por eso apoyamos la hipótesis en la primera causa y en el orden del universo." },
            { objecion: "Hume: si todo necesita causa, ¿quién causó a Dios? Y si algo puede no tener causa, ¿por qué no el universo mismo?", replica: "Tomás no dice que «todo» tenga causa, sino lo que empieza a existir o es contingente. Dios, por definición, sería necesario. Igual admitimos que esto no es una prueba científica." },
            { objecion: "Darwin y la ciencia: el orden de la naturaleza puede explicarse sin diseñador (selección natural, leyes físicas).", replica: "La ciencia explica cómo funciona el orden, pero no por qué hay leyes y por qué existe algo en lugar de nada: esa es una pregunta filosófica." },
            { objecion: "Aunque haya una primera causa, eso no prueba que sea el Dios personal de las religiones.", replica: "Es cierto: la razón llega a lo sumo a un principio primero. Lo demás (que sea personal, que ame, que se revele) pertenece a la fe." }
          ],
          cierre: "Si defienden esta postura, la conclusión honesta es: los argumentos muestran que la pregunta por Dios es razonable, pero no lo demuestran como se demuestra un hecho. Ahí empieza la fe."
        },
        {
          id: "no",
          nombre: "Es indemostrable: queda en el plano de la fe",
          tesis: "Sostenemos que la existencia de Dios no puede demostrarse con la razón, porque Dios no es un objeto de experiencia y todos los argumentos tienen fallas; por eso creer o no creer pertenece al plano de la fe, y no es irracional ninguna de las dos opciones.",
          autores: ["kant", "hume", "kierkegaard", "pascal", "russell", "huxley", "buda"],
          argumentos: [
            { tipo: "Los límites del conocimiento (Kant)", texto: "P1: Solo podemos conocer lo que puede darse en la experiencia. P2: Dios no es un objeto de experiencia. → Dios no puede ser conocido ni demostrado; solo pensado o creído." },
            { tipo: "Las pruebas fallan (Kant, Hume)", texto: "El argumento ontológico confunde pensar con existir; el cosmológico salta de «primera causa» a «Dios»; el del diseño compara el universo con una máquina sin justificar la analogía." },
            { tipo: "La fe no necesita pruebas (Kierkegaard, Pascal)", texto: "Si Dios se pudiera demostrar, no haría falta la fe. La fe es una decisión y un compromiso personal, no una conclusión lógica." },
            { tipo: "Tampoco se demuestra que no existe (Huxley)", texto: "La razón no puede probar la existencia ni la inexistencia de Dios: la posición racional es reconocer ese límite (agnosticismo)." }
          ],
          objeciones: [
            { objecion: "Entonces creer en Dios es irracional.", replica: "No: indemostrable no es lo mismo que irracional. Hay muchas cosas que no se demuestran (el valor de la amistad, la dignidad humana) y no son irracionales." },
            { objecion: "Las cinco vías de Tomás de Aquino son demostraciones.", replica: "A lo sumo llegan a una «primera causa» o un «primer motor», pero no prueban que sea el Dios personal de las religiones; además suponen que no puede haber una cadena infinita de causas." },
            { objecion: "Si no se puede demostrar, ¿para qué discutirlo?", replica: "Porque pensar los límites de la razón también es conocimiento: saber qué no se puede saber evita el fanatismo y respeta la libertad de creer." }
          ],
          cierre: "Esta postura llega directo a la conclusión filosófica central: Dios es indemostrable para la razón y la creencia pertenece a la fe, que es libre y merece respeto."
        }
      ]
    },
    {
      id: "dios_filosofos",
      texto: "¿Es lo mismo el dios de los filósofos que el Dios de las religiones?",
      porQue: "Aristóteles habló de un motor inmóvil; las religiones, de un Dios que ama, habla y salva. ¿Hablan de lo mismo?",
      posturas: [
        {
          id: "distintos",
          nombre: "Son muy distintos",
          tesis: "Sostenemos que el dios de los filósofos y el Dios de las religiones son distintos, porque el primero es un principio que la razón necesita para explicar el mundo, mientras que el segundo es un Dios personal al que se llega por la fe y la revelación.",
          autores: ["aristoteles", "pascal", "platon", "spinoza", "einstein", "buda"],
          argumentos: [
            { tipo: "Por comparación", texto: "El motor inmóvil de Aristóteles no crea el mundo, no lo conoce en detalle ni ama a nadie; el Dios bíblico crea, habla, ama y se involucra en la historia." },
            { tipo: "De autoridad (Pascal)", texto: "Pascal escribió: «Dios de Abraham, Dios de Isaac, Dios de Jacob, no de los filósofos y de los sabios»: el Dios de la fe no es el resultado de un razonamiento." },
            { tipo: "Por ejemplos", texto: "Spinoza y Einstein hablan de un «Dios» que es la naturaleza y su orden; el budismo no se centra en un Dios creador; el hinduismo habla de Brahman, una realidad última impersonal." }
          ],
          objeciones: [
            { objecion: "Tomás de Aquino usó a Aristóteles para hablar del Dios cristiano: entonces son el mismo.", replica: "Tomás reconoce que la razón llega solo a algunas verdades (que hay un primer motor) y que otras solo se conocen por la fe (la Trinidad, la encarnación): eso confirma que son distintos niveles." },
            { objecion: "Todas las religiones hablan en el fondo de lo mismo.", replica: "Hay parecidos, pero un Dios personal creador, un Brahman impersonal y un camino sin Dios creador como el budismo son concepciones distintas." }
          ],
          cierre: "Conclusión posible: la razón puede pensar un principio primero, pero el Dios personal de las religiones es objeto de fe."
        },
        {
          id: "complementarios",
          nombre: "La razón llega hasta donde la fe completa",
          tesis: "Sostenemos que el dios de los filósofos y el Dios de las religiones pueden ser el mismo visto desde dos caminos: la razón llega a un principio primero y la fe agrega lo que la razón no alcanza.",
          autores: ["agustin", "tomas", "anselmo", "descartes", "aristoteles", "lemaitre"],
          argumentos: [
            { tipo: "De autoridad (Agustín, Anselmo)", texto: "«Creo para entender» y «la fe busca entender»: fe y razón no se oponen, se ayudan." },
            { tipo: "Deductivo (Tomás)", texto: "P1: La razón demuestra un primer motor. P2: La revelación habla de un Dios creador. P3: Un creador es primer motor. → Pueden referirse al mismo ser, conocido de dos maneras." },
            { tipo: "Por ejemplo (Lemaître)", texto: "Lemaître fue sacerdote y físico: aceptaba la ciencia y la fe como dos caminos que no se contradicen." }
          ],
          objeciones: [
            { objecion: "Si la razón solo llega a un «primer motor», no puede saber que es el mismo Dios de la Biblia.", replica: "Es cierto: la identificación la hace la fe, no la razón. Nuestra hipótesis es que no se contradicen, no que la razón lo demuestre todo." },
            { objecion: "El budismo y el hinduismo muestran que no todas las religiones hablan de un Dios personal.", replica: "Nuestra hipótesis se refiere a las religiones de un Dios creador; reconocemos que no vale para todas." }
          ],
          cierre: "Conclusión posible: fe y razón pueden convivir, pero la razón sola no alcanza para afirmar al Dios de las religiones."
        }
      ]
    },
    {
      id: "ciencia",
      texto: "¿Puede la ciencia decir algo sobre la existencia de Dios?",
      porQue: "Hay científicos creyentes y no creyentes. ¿La ciencia confirma, refuta o no puede opinar sobre Dios?",
      posturas: [
        {
          id: "ambitos",
          nombre: "No: son ámbitos distintos",
          tesis: "Sostenemos que la ciencia no puede probar ni refutar la existencia de Dios, porque estudia cómo funciona el mundo natural, mientras que la pregunta por Dios es filosófica y su respuesta pertenece a la fe.",
          autores: ["gould", "lemaitre", "kant", "einstein", "huxley", "pascal"],
          argumentos: [
            { tipo: "Por definición del método", texto: "La ciencia estudia lo que se puede observar, medir y poner a prueba. Dios, tal como lo entienden las religiones, no es un fenómeno observable. → La ciencia no puede decidir sobre él." },
            { tipo: "De autoridad (Gould)", texto: "Stephen Jay Gould propuso los «magisterios no superpuestos»: la ciencia responde cómo es el mundo; la religión, qué sentido y valor tiene." },
            { tipo: "Por ejemplo (Lemaître)", texto: "Lemaître, sacerdote, propuso la teoría del Big Bang y pidió que no se la usara como prueba de la creación: la ciencia no demuestra a Dios." }
          ],
          objeciones: [
            { objecion: "Dawkins: si Dios actúa en el mundo, sus efectos deberían poder estudiarse.", replica: "Eso vale para un Dios que interviene de forma observable; muchas concepciones de Dios (Spinoza, Aristóteles, el Dios como fundamento) no son así." },
            { objecion: "La ciencia ya explicó muchas cosas que antes se atribuían a Dios (el rayo, las enfermedades).", replica: "Explicó fenómenos naturales, pero no responde por qué hay leyes ni por qué existe algo: esas preguntas no son científicas." }
          ],
          cierre: "Conclusión posible: la ciencia y la fe responden preguntas distintas; la existencia de Dios no es una cuestión científica."
        },
        {
          id: "innecesaria",
          nombre: "Sí: la ciencia vuelve innecesaria la hipótesis de Dios",
          tesis: "Sostenemos que la ciencia, aunque no puede refutar a Dios, explica el orden del universo y de la vida sin necesidad de recurrir a él, y por eso la existencia de Dios deja de ser una explicación necesaria.",
          autores: ["laplace", "darwin", "dawkins", "russell", "hume", "huxley"],
          argumentos: [
            { tipo: "Por ejemplos (Laplace, Darwin)", texto: "Laplace explicó el movimiento de los planetas sin Dios; Darwin explicó la adaptación de los seres vivos por selección natural, sin diseñador." },
            { tipo: "Principio de economía", texto: "Si un fenómeno se explica con causas naturales, agregar una causa sobrenatural no aporta nada a la explicación." },
            { tipo: "Carga de la prueba (Russell)", texto: "Quien afirma la existencia de algo tiene que dar pruebas; no alcanza con que no se pueda refutar (la tetera celeste)." }
          ],
          objeciones: [
            { objecion: "La ciencia no explica por qué existen las leyes de la naturaleza ni por qué hay algo en lugar de nada.", replica: "Es cierto, y por eso no decimos que Dios no exista, sino que no es necesario como explicación científica. La pregunta última queda abierta." },
            { objecion: "Muchos grandes científicos fueron creyentes (Newton, Lemaître).", replica: "Eso muestra que se puede ser científico y creyente, pero su fe no surgió de su ciencia: confirma que la creencia está en otro plano." }
          ],
          cierre: "Conclusión posible: la ciencia no necesita a Dios para explicar el mundo, pero tampoco puede negarlo: la cuestión queda en el plano de la fe."
        }
      ]
    },
    {
      id: "moral",
      texto: "¿Hace falta Dios para que haya moral?",
      porQue: "Para muchos, sin Dios no habría bien ni mal. Otros sostienen que la moral se funda en la razón o en la convivencia.",
      posturas: [
        {
          id: "necesita",
          nombre: "Sí: la moral necesita un fundamento divino",
          tesis: "Sostenemos que la moral necesita a Dios como fundamento último, porque sin un bien absoluto los valores serían solo opiniones o costumbres que cambian.",
          autores: ["dostoievski", "agustin", "tomas", "kant", "platon", "judeocristianismo"],
          argumentos: [
            { tipo: "Reducción al absurdo (Dostoievski)", texto: "Si Dios no existe y no hay un bien absoluto, «todo está permitido»: nada sería realmente malo. Como eso es absurdo, la moral necesita un fundamento absoluto." },
            { tipo: "Postulado (Kant)", texto: "Kant no demuestra a Dios, pero dice que la razón práctica lo necesita como postulado: para que la virtud y la felicidad coincidan al final." },
            { tipo: "De autoridad (Platón)", texto: "Para Platón, por encima de todo está la Idea de Bien, que es la medida de lo bueno: un bien que no depende de las opiniones." }
          ],
          objeciones: [
            { objecion: "El dilema de Eutifrón: ¿algo es bueno porque Dios lo quiere, o Dios lo quiere porque es bueno? Si es lo segundo, el bien no depende de Dios.", replica: "Para Tomás, Dios no elige arbitrariamente: el bien es parte de su naturaleza, así que no son dos cosas separadas." },
            { objecion: "Hay muchas personas no creyentes que son profundamente morales.", replica: "No decimos que los no creyentes no puedan ser buenos, sino que el fundamento último de la moral sería Dios, lo sepan o no." }
          ],
          cierre: "Conclusión posible: para esta postura, la moral remite a un fundamento absoluto; pero reconocer ese fundamento es un acto de fe, no una demostración."
        },
        {
          id: "autonoma",
          nombre: "No: la moral se funda en la razón y la convivencia",
          tesis: "Sostenemos que no hace falta Dios para que haya moral, porque podemos distinguir el bien y el mal con la razón, la empatía y la búsqueda de una buena convivencia.",
          autores: ["socrates", "epicuro", "aristoteles", "kant", "feuerbach", "russell", "buda"],
          argumentos: [
            { tipo: "Dilema de Eutifrón (Sócrates)", texto: "¿Lo bueno es bueno porque los dioses lo aman, o los dioses lo aman porque es bueno? Si es lo segundo, el bien tiene sus propias razones, que podemos conocer sin Dios." },
            { tipo: "Por ejemplos", texto: "Aristóteles funda la ética en la virtud y la felicidad; Kant, en la razón (tratar a las personas como fines); el budismo, en la compasión, sin un Dios creador." },
            { tipo: "Contraejemplo", texto: "Hay personas no creyentes que dan la vida por otros, y sociedades laicas con leyes justas: la moral existe sin creer en Dios." }
          ],
          objeciones: [
            { objecion: "Sin un bien absoluto, la moral sería relativa: cada uno haría lo que quiere.", replica: "La razón permite encontrar principios universales (no dañar, respetar la dignidad) que todos pueden reconocer, creyentes o no." },
            { objecion: "Kant mismo necesitó a Dios como postulado.", replica: "Sí, pero para Kant la moral se funda en la razón: Dios aparece después, como esperanza, no como fundamento del deber." }
          ],
          cierre: "Conclusión posible: la moral puede fundarse en la razón; creer en Dios puede dar un sentido más profundo a la moral, pero es una decisión de fe."
        }
      ]
    }
  ],

  autores: [
    { id: "jenofanes", nombre: "Jenófanes de Colofón", epoca: "s. VI a. C.", tipo: "filósofo", idea: "Critica a los dioses de los mitos por parecerse demasiado a los humanos: lo divino tiene que ser algo más alto.", cita: "Si los bueyes y los caballos tuvieran manos y pudieran pintar, pintarían dioses con forma de bueyes y de caballos (fragmento, paráfrasis).", argumento: "Los humanos proyectamos nuestra imagen en los dioses; por eso hay que pensar lo divino con la razón.", ejemplo: "Los dioses griegos se enojaban, mentían y tenían celos: eran muy humanos.", enlace: { texto: "Tema: Los presocráticos", url: "../tema.html?tema=presocraticos" } },
    { id: "socrates", nombre: "Sócrates", epoca: "470–399 a. C.", tipo: "filósofo", idea: "Decía escuchar una voz interior divina (su «daimon») que lo frenaba. En el Eutifrón pregunta qué es la piedad y si lo bueno depende de los dioses.", cita: "¿Lo piadoso es amado por los dioses porque es piadoso, o es piadoso porque los dioses lo aman? (Platón, Eutifrón)", argumento: "Si los dioses aman lo bueno porque es bueno, el bien tiene razones propias que podemos investigar.", ejemplo: "¿Algo está bien porque lo manda una autoridad, o la autoridad lo manda porque está bien?", enlace: { texto: "Tema: Sócrates", url: "../tema.html?tema=socrates" } },
    { id: "platon", nombre: "Platón", epoca: "427–347 a. C.", tipo: "filósofo", idea: "Por encima de todas las Ideas está la Idea de Bien, comparable al sol. En el Timeo, un artesano divino (demiurgo) ordena el mundo mirando las Ideas.", cita: "La Idea de Bien es la causa de todo lo recto y bello (República, VII, paráfrasis).", argumento: "El orden y la belleza del mundo remiten a un principio perfecto que la razón puede vislumbrar.", ejemplo: "Así como el sol permite ver las cosas, el Bien permite comprender todo lo demás.", enlace: { texto: "Tema: Platón", url: "../tema.html?tema=platon" } },
    { id: "aristoteles", nombre: "Aristóteles", epoca: "384–322 a. C.", tipo: "filósofo", idea: "Todo movimiento necesita una causa; para no ir al infinito tiene que haber un primer motor inmóvil, pensamiento puro que mueve al mundo como lo amado mueve al que ama.", cita: "Es pensamiento que se piensa a sí mismo (Metafísica, XII).", argumento: "Si todo lo que se mueve es movido por otro, la cadena necesita un primer motor que no sea movido.", ejemplo: "Una fila de fichas de dominó cae porque alguien empujó la primera.", enlace: { texto: "Tema: Aristóteles", url: "../tema.html?tema=aristoteles" } },
    { id: "epicuro", nombre: "Epicuro", epoca: "341–270 a. C.", tipo: "filósofo", idea: "Los dioses existen, pero viven felices y no se ocupan de los humanos: no hay que temerlos. Se le atribuye la formulación del problema del mal.", cita: "¿Dios quiere evitar el mal y no puede? Entonces no es omnipotente. ¿Puede y no quiere? Entonces no es bueno (atribuida a Epicuro).", argumento: "La existencia del mal parece incompatible con un Dios todopoderoso y bueno.", ejemplo: "¿Por qué sufren los niños inocentes en una catástrofe?", enlace: { texto: "Tema: Hedonismo (Epicuro)", url: "../tema.html?tema=hedonismo" } },
    { id: "judeocristianismo", nombre: "Judaísmo, cristianismo e islam", epoca: "religiones abrahámicas", tipo: "religión", idea: "Un solo Dios, personal, creador de todo a partir de la nada, que se revela a los seres humanos y los ama. Se lo conoce por la revelación y la fe.", cita: "«Yo soy el que soy» (Éxodo 3, 14).", argumento: "Dios no es solo una causa: es alguien con quien se puede tener una relación.", ejemplo: "La oración: hablarle a Dios como a una persona.", enlace: null },
    { id: "hinduismo", nombre: "Hinduismo", epoca: "Upanishads, s. VIII–V a. C.", tipo: "religión", idea: "La realidad última es Brahman, impersonal y presente en todo; el alma de cada uno (Atman) es en el fondo idéntica a Brahman. Los muchos dioses son manifestaciones de lo divino.", cita: "«Tú eres eso» (Tat tvam asi, Chandogya Upanishad).", argumento: "Lo divino no está fuera del mundo, sino que es su fondo último.", ejemplo: "Como las olas y el mar: parecen distintas, pero son la misma agua.", enlace: null },
    { id: "buda", nombre: "Buda y el budismo", epoca: "s. V a. C.", tipo: "religión", idea: "El budismo no se centra en un Dios creador: busca liberar del sufrimiento (dukkha) apagando el deseo, hasta el nirvana. Buda dejaba sin responder las preguntas metafísicas que no ayudan a liberarse.", cita: "Parábola de la flecha: el herido no necesita saber quién la disparó, sino que se la saquen (paráfrasis).", argumento: "Lo importante no es especular sobre Dios, sino transformar la propia vida.", ejemplo: "Un camino espiritual profundo sin un Dios creador.", enlace: null },
    { id: "agustin", nombre: "Agustín de Hipona", epoca: "354–430", tipo: "filósofo", idea: "Fe y razón se ayudan: hay que creer para entender y entender para creer. El ser humano busca a Dios aunque no lo sepa.", cita: "Nos hiciste, Señor, para ti, y nuestro corazón está inquieto hasta que descanse en ti (Confesiones, I).", argumento: "La inquietud del corazón humano apunta a algo infinito.", ejemplo: "Tenemos de todo y aun así sentimos que algo nos falta.", enlace: null },
    { id: "anselmo", nombre: "Anselmo de Canterbury", epoca: "1033–1109", tipo: "filósofo", idea: "Argumento ontológico: de la sola idea de Dios se deduciría su existencia.", cita: "Dios es aquello mayor que lo cual nada puede pensarse (Proslogion).", argumento: "Si Dios existiera solo en la mente, podríamos pensar algo mayor: que exista también en la realidad. Luego, existe.", ejemplo: "El monje Gaunilo respondió: con ese razonamiento también existiría «la isla más perfecta».", enlace: null },
    { id: "tomas", nombre: "Tomás de Aquino", epoca: "1225–1274", tipo: "filósofo", idea: "Cinco vías para llegar a Dios desde el mundo: el movimiento, las causas, la contingencia, los grados de perfección y el orden de la naturaleza.", cita: "Es necesario llegar a un primer motor que no sea movido por nadie, y ese es el que todos entienden por Dios (Suma Teológica, paráfrasis).", argumento: "Las cosas existen y cambian gracias a otras; la cadena necesita un primer principio.", ejemplo: "Nada de lo que vemos es causa de sí mismo: todo depende de algo anterior.", enlace: null },
    { id: "descartes", nombre: "René Descartes", epoca: "1596–1650", tipo: "filósofo", idea: "Tenemos la idea de un ser infinito y perfecto; como somos finitos, esa idea tiene que venir de Dios. Dios garantiza que no nos engañamos al conocer.", cita: "La idea de Dios está en mí como la marca del artesano en su obra (Meditaciones, paráfrasis).", argumento: "Lo menos perfecto no puede producir la idea de lo más perfecto.", ejemplo: "¿De dónde sacamos la idea de «infinito» si nunca vimos nada infinito?", enlace: null },
    { id: "pascal", nombre: "Blaise Pascal", epoca: "1623–1662", tipo: "filósofo", idea: "Matemático y filósofo: la razón no puede decidir sobre Dios. Propuso la «apuesta» y distinguió al Dios de la fe del dios de los filósofos.", cita: "El corazón tiene razones que la razón no conoce (Pensamientos).", argumento: "Si apostás por Dios y existe, ganás todo; si no existe, no perdés nada importante (la apuesta).", ejemplo: "Muchas decisiones importantes de la vida no se toman con pruebas, sino con confianza.", enlace: null },
    { id: "spinoza", nombre: "Baruch Spinoza", epoca: "1632–1677", tipo: "filósofo", idea: "Dios no es una persona fuera del mundo: es la naturaleza misma, la sustancia única de la que todo forma parte.", cita: "Deus sive Natura: Dios, o sea, la Naturaleza (Ética).", argumento: "Si Dios es infinito, nada puede estar fuera de él: Dios y naturaleza son lo mismo.", ejemplo: "El orden de las leyes naturales sería el modo de ser de Dios.", enlace: null },
    { id: "hume", nombre: "David Hume", epoca: "1711–1776", tipo: "filósofo", idea: "Critica el argumento del diseño: comparar el universo con una máquina es una analogía débil. Insiste en el problema del mal.", cita: "Un hombre sabio proporciona su creencia a la evidencia (Investigación sobre el entendimiento humano).", argumento: "Solo conocemos causas de cosas que vimos producirse muchas veces; del origen del universo no tenemos experiencia.", ejemplo: "Sabemos que un reloj tiene relojero porque vimos fabricar relojes; nunca vimos fabricar universos.", enlace: null },
    { id: "kant", nombre: "Immanuel Kant", epoca: "1724–1804", tipo: "filósofo", idea: "La razón no puede demostrar ni refutar a Dios: solo conocemos lo que puede darse en la experiencia. Dios queda como postulado de la razón práctica y objeto de fe.", cita: "Tuve que suprimir el saber para hacer sitio a la fe (Crítica de la razón pura, prólogo).", argumento: "La existencia no es una cualidad más de un concepto: pensar a Dios perfecto no prueba que exista.", ejemplo: "Pensar en cien pesos no me pone cien pesos en el bolsillo.", enlace: { texto: "Tema: Ética de Kant", url: "../tema.html?tema=etica_kant" } },
    { id: "kierkegaard", nombre: "Søren Kierkegaard", epoca: "1813–1855", tipo: "filósofo", idea: "La fe no es el resultado de una demostración sino un «salto»: una decisión personal, con riesgo y pasión.", cita: "Sin riesgo no hay fe (Post scriptum, paráfrasis).", argumento: "Si Dios pudiera demostrarse, la fe sería innecesaria; la fe vive justamente donde la razón no llega.", ejemplo: "Confiar en alguien sin tener garantías.", enlace: null },
    { id: "feuerbach", nombre: "Ludwig Feuerbach", epoca: "1804–1872", tipo: "filósofo", idea: "Dios es una proyección del ser humano: ponemos fuera de nosotros nuestras mejores cualidades (amor, sabiduría, poder) y las adoramos.", cita: "El secreto de la teología es la antropología (La esencia del cristianismo, paráfrasis).", argumento: "Las cualidades de Dios son las del ser humano llevadas al infinito.", ejemplo: "Imaginamos a Dios como padre, juez o rey: imágenes humanas.", enlace: null },
    { id: "nietzsche", nombre: "Friedrich Nietzsche", epoca: "1844–1900", tipo: "filósofo", idea: "Anuncia que «Dios ha muerto»: la cultura moderna ya no se apoya en Dios, y eso obliga a crear nuevos valores.", cita: "Dios ha muerto, y nosotros lo hemos matado (La gaya ciencia, §125).", argumento: "No es una prueba de que Dios no exista, sino un diagnóstico: Dios dejó de ser el centro de la cultura.", ejemplo: "Antes las leyes, el arte y la vida diaria giraban en torno a la religión; hoy, en gran parte, no.", enlace: null },
    { id: "dostoievski", nombre: "Fiódor Dostoievski", epoca: "1821–1881", tipo: "escritor", idea: "En Los hermanos Karamázov, el personaje de Iván plantea que sin Dios no habría fundamento para la moral.", cita: "Si Dios no existe, todo está permitido (idea de Iván Karamázov, paráfrasis).", argumento: "Sin un bien absoluto, ¿por qué algo sería realmente malo?", ejemplo: "¿Qué impide hacer daño si nadie te ve y no hay castigo?", enlace: null },
    { id: "laplace", nombre: "Pierre-Simon Laplace", epoca: "1749–1827", tipo: "científico", idea: "Explicó el movimiento de los planetas con leyes físicas, sin recurrir a Dios.", cita: "Señor, no necesité esa hipótesis (respuesta atribuida, a Napoleón).", argumento: "La ciencia explica los fenómenos con causas naturales.", ejemplo: "Antes se pensaba que Dios corregía las órbitas; la física mostró que son estables por sí mismas.", enlace: null },
    { id: "darwin", nombre: "Charles Darwin", epoca: "1809–1882", tipo: "científico", idea: "La selección natural explica la adaptación de los seres vivos sin necesidad de un diseñador.", cita: "Hay grandeza en esta concepción de la vida (El origen de las especies, final).", argumento: "El orden de la naturaleza puede surgir de procesos naturales graduales.", ejemplo: "El ojo no fue diseñado de una vez: se formó en millones de años de pequeños cambios.", enlace: null },
    { id: "huxley", nombre: "Thomas H. Huxley", epoca: "1825–1895", tipo: "científico", idea: "Biólogo que inventó la palabra «agnóstico»: quien reconoce que no se puede saber si Dios existe o no.", cita: "No afirmar que se sabe lo que no se puede demostrar (paráfrasis de su idea de agnosticismo).", argumento: "La honestidad intelectual pide no afirmar ni negar lo que no podemos probar.", ejemplo: "Decir «no lo sé» también es una postura racional.", enlace: null },
    { id: "einstein", nombre: "Albert Einstein", epoca: "1879–1955", tipo: "científico", idea: "Rechazaba un Dios personal que premia y castiga, pero hablaba de un asombro religioso ante el orden del universo.", cita: "Creo en el Dios de Spinoza, que se revela en la armonía de todo lo que existe, no en un Dios que se ocupa del destino de los hombres (1929).", argumento: "Que el universo sea comprensible es motivo de asombro, no una prueba de un Dios personal.", ejemplo: "Mirar el cielo estrellado y sentir que hay un orden inmenso.", enlace: null },
    { id: "lemaitre", nombre: "Georges Lemaître", epoca: "1894–1966", tipo: "científico", idea: "Sacerdote católico y físico: propuso que el universo se expande desde un «átomo primitivo» (el Big Bang). Pidió no usar su teoría como prueba de la creación.", cita: "La ciencia y la fe son dos caminos distintos hacia la verdad (paráfrasis).", argumento: "Un científico creyente que separa lo que dice la ciencia de lo que cree por fe.", ejemplo: "El Big Bang explica cómo evolucionó el universo, no si alguien lo creó.", enlace: null },
    { id: "gould", nombre: "Stephen Jay Gould", epoca: "1941–2002", tipo: "científico", idea: "Paleontólogo: ciencia y religión son «magisterios no superpuestos»: la ciencia responde cómo es el mundo; la religión, qué sentido y valor tiene.", cita: "Ciencia versus religión: un falso conflicto (título de su libro).", argumento: "No hay conflicto si cada una responde sus propias preguntas.", ejemplo: "La ciencia te dice cómo funciona el corazón; no te dice a quién amar.", enlace: null },
    { id: "dawkins", nombre: "Richard Dawkins", epoca: "1941–", tipo: "científico", idea: "Biólogo: considera a Dios una hipótesis muy improbable y sostiene que la evolución explica la complejidad de la vida.", cita: "¿Quién diseñó al diseñador? (El espejismo de Dios, paráfrasis).", argumento: "Explicar la complejidad del mundo con un ser todavía más complejo no explica nada.", ejemplo: "Si todo lo complejo necesita diseñador, Dios también necesitaría uno.", enlace: null },
    { id: "russell", nombre: "Bertrand Russell", epoca: "1872–1970", tipo: "filósofo", idea: "La carga de la prueba la tiene quien afirma. Propuso el ejemplo de la «tetera celeste».", cita: "Si digo que una tetera gira alrededor del Sol y nadie puede refutarlo, no por eso hay que creerme (paráfrasis).", argumento: "Que algo no pueda refutarse no lo vuelve verdadero.", ejemplo: "Un rumor que nadie puede desmentir no por eso es cierto.", enlace: null }
  ],

  hipotesisEjemplos: {
    buenas: [
      "Sostenemos que la existencia de Dios no puede demostrarse con la razón, porque Dios no es un objeto de experiencia; por eso la creencia pertenece al plano de la fe.",
      "Sostenemos que los argumentos de Tomás de Aquino muestran que es razonable pensar en una primera causa, aunque no prueban que esa causa sea el Dios personal de las religiones.",
      "Sostenemos que la ciencia no puede decidir sobre la existencia de Dios, porque estudia el cómo del mundo natural y no su porqué último."
    ],
    malas: [
      { texto: "Dios existe.", porque: "Es una afirmación sin fundamento: no dice por qué ni se puede discutir con argumentos." },
      { texto: "Hay muchas opiniones sobre Dios.", porque: "No responde la pregunta: es una descripción, no una tesis." },
      { texto: "Dios no existe porque la ciencia lo demostró.", porque: "Es falsa: la ciencia no demostró que Dios no exista. Además confunde los planos." },
      { texto: "Cada uno cree lo que quiere.", porque: "Puede ser parte de la conclusión, pero no es una hipótesis que se pueda argumentar." }
    ]
  },

  demostrarEjemplos: {
    deductivo: "P1: Solo podemos conocer lo que puede darse en la experiencia. P2: Dios no puede darse en la experiencia. → No podemos conocer (demostrar) a Dios. (Kant)",
    ejemplo: "Laplace explicó los planetas sin Dios, Darwin explicó la vida sin diseñador, la medicina explicó las enfermedades sin castigos divinos → la ciencia funciona sin recurrir a Dios.",
    analogia: "Paley: si encontrás un reloj en la playa, pensás que alguien lo fabricó; el universo es más complejo que un reloj → tiene un fabricante. (Hume responde que la analogía es débil.)",
    autoridad: "Kant, que estudió a fondo los argumentos clásicos, concluyó que la razón no puede probar a Dios: «tuve que suprimir el saber para hacer sitio a la fe».",
    absurdo: "Si con el argumento ontológico basta pensar algo perfecto para que exista, entonces existiría «la isla más perfecta» (Gaunilo). Como eso es absurdo, el argumento falla.",
    contraejemplo: "A «sin Dios no hay moral» se le puede oponer el contraejemplo de personas no creyentes que arriesgan su vida por otros."
  },

  falaciasEjemplos: {
    ad_hominem: "«Kant no creía en nada, así que no hay que hacerle caso.» (Además es falso: Kant defendía una fe racional en Dios.)",
    hombre_paja: "«Los creyentes piensan que Dios es un señor con barba en las nubes.»",
    ignorancia: "«Nadie demostró que Dios no exista, entonces existe» o «nadie demostró que exista, entonces no existe».",
    mayoria: "«La mayoría de la humanidad cree en Dios, entonces existe.»",
    circular: "«Dios existe porque lo dice la Biblia, y la Biblia es verdad porque es palabra de Dios.»",
    falso_dilema: "«O Dios existe y la ciencia está equivocada, o la ciencia tiene razón y Dios no existe.» (Hay más opciones.)",
    generalizacion: "«Mi tío es religioso y es intolerante: todos los religiosos son intolerantes.»"
  },

  casos: [
    { titulo: "El reloj en la playa", texto: "William Paley imaginó que caminás por una playa y encontrás un reloj. Nadie pensaría que se formó solo: alguien lo fabricó. ¿Vale lo mismo para el universo?", preguntas: ["¿Es buena la analogía entre un reloj y el universo?", "¿Qué le respondería Darwin? ¿Y Hume?"] },
    { titulo: "El sufrimiento de los inocentes", texto: "Un terremoto destruye un pueblo y mueren niños. Para muchos, esto plantea la pregunta: si Dios es bueno y todopoderoso, ¿por qué lo permite?", preguntas: ["¿Este caso prueba que Dios no existe, o solo muestra un misterio?", "¿Qué responderían Epicuro y Agustín?"] },
    { titulo: "Dos científicos", texto: "Lemaître, sacerdote, propuso el Big Bang; Dawkins, biólogo, es ateo. Los dos aceptan la misma ciencia.", preguntas: ["¿Qué muestra este caso sobre la relación entre ciencia y fe?", "¿Puede la ciencia decidir quién tiene razón?"] },
    { titulo: "Muchas religiones", texto: "En el mundo hay miles de millones de creyentes de religiones distintas: algunas con un Dios personal, otras con lo divino impersonal, y el budismo sin Dios creador.", preguntas: ["¿Qué tienen en común estas concepciones de lo divino?", "¿La diversidad de creencias apoya la idea de que la cuestión pertenece a la fe?"] },
    { titulo: "El cielo estrellado", texto: "Kant escribió que dos cosas lo llenaban de admiración: «el cielo estrellado sobre mí y la ley moral dentro de mí».", preguntas: ["¿El asombro ante el universo es una prueba de Dios o una experiencia que cada uno interpreta?", "¿Por qué Kant, creyente, igual dijo que Dios es indemostrable?"] }
  ],

  conclusiones: {
    marco: "El punto de llegada de este tema: la razón puede pensar a Dios, discutir los argumentos y descubrir sus límites, pero <strong>no puede demostrar positivamente su existencia</strong> (ni su inexistencia). Por eso creer o no creer pertenece al <strong>plano de la fe</strong>, que es libre y merece respeto. Cualquiera sea su hipótesis, la conclusión tiene que mostrar que entendieron este límite.",
    modelos: [
      "Después de analizar los argumentos de Tomás, Anselmo y Descartes, y las críticas de Hume y Kant, concluimos que la razón no puede demostrar que Dios existe. Eso no hace irracional la fe: la ubica en su lugar. Nos queda una pregunta: ¿por qué, aun sin pruebas, la pregunta por Dios no deja de aparecer en todas las culturas?",
      "Concluimos que la ciencia explica cómo funciona el universo sin necesitar a Dios, pero no responde por qué existe algo en lugar de nada. Esa pregunta queda abierta, y cada uno la responde desde la fe o desde la duda."
    ]
  },

  preguntasProbables: [
    { pregunta: "Si es indemostrable, ¿entonces Dios no existe?", comoResponder: "Indemostrable no significa inexistente: significa que la razón no puede decidirlo. Tampoco se puede demostrar que no exista." },
    { pregunta: "¿Ustedes creen en Dios?", comoResponder: "No hace falta contestarlo: «nuestra creencia personal no es lo que defendemos; defendemos un argumento filosófico»." },
    { pregunta: "¿Y el Big Bang no prueba que hubo un creador?", comoResponder: "El Big Bang explica cómo evolucionó el universo desde un estado inicial; el propio Lemaître pidió no usarlo como prueba de la creación." },
    { pregunta: "¿Para qué sirve hablar de algo que no se puede demostrar?", comoResponder: "Pensar los límites de la razón también es conocimiento, y ayuda a respetar las creencias de los demás." },
    { pregunta: "¿Qué pasa con el mal en el mundo?", comoResponder: "Es el argumento más fuerte contra un Dios bueno y todopoderoso; los creyentes responden con la libertad humana o el misterio. Tampoco este argumento cierra la cuestión." }
  ],

  recursos: {
    app: [
      { texto: "Tema: Los presocráticos (lo divino y el arjé)", url: "../tema.html?tema=presocraticos" },
      { texto: "Tema: Sócrates", url: "../tema.html?tema=socrates" },
      { texto: "Tema: Platón (la Idea de Bien)", url: "../tema.html?tema=platon" },
      { texto: "Tema: Aristóteles (el motor inmóvil)", url: "../tema.html?tema=aristoteles" },
      { texto: "Tema: Hedonismo (Epicuro y los dioses)", url: "../tema.html?tema=hedonismo" },
      { texto: "Tema: Ética de Kant", url: "../tema.html?tema=etica_kant" },
      { texto: "Diálogo con Aristóteles (para ensayar preguntas)", url: "../dialogo/chat.html?filosofo=aristoteles" }
    ],
    libros: [
      "Platón, Eutifrón (diálogo breve sobre la piedad).",
      "Tomás de Aquino, Suma Teológica, I, cuestión 2 (las cinco vías).",
      "Blaise Pascal, Pensamientos (la apuesta).",
      "David Hume, Diálogos sobre la religión natural.",
      "Immanuel Kant, Crítica de la razón pura (prólogo a la 2.ª edición).",
      "Stephen Jay Gould, Ciencia versus religión: un falso conflicto.",
      "Jostein Gaarder, El mundo de Sofía (capítulos sobre la Edad Media y Kant)."
    ]
  },

  afiche: {
    pregunta: "¿Puede la razón demostrar que Dios existe?",
    hipotesis: "La existencia de Dios no puede demostrarse con la razón, porque Dios no es un objeto de experiencia. Por eso creer o no creer pertenece al plano de la fe.",
    autores: [
      { nombre: "Aristóteles", idea: "Tiene que haber un primer motor inmóvil.", lado: "contra" },
      { nombre: "Anselmo", idea: "Dios es aquello mayor que lo cual nada puede pensarse: luego existe.", lado: "contra" },
      { nombre: "Tomás de Aquino", idea: "Cinco vías: del mundo a una primera causa.", lado: "contra" },
      { nombre: "Hume", idea: "La analogía universo–máquina es débil; el mal cuestiona a un Dios bueno.", lado: "favor" },
      { nombre: "Kant", idea: "Solo conocemos lo que es experiencia: Dios es indemostrable.", lado: "favor" },
      { nombre: "Kierkegaard", idea: "La fe es un salto, no una conclusión.", lado: "favor" },
      { nombre: "Huxley", idea: "Agnosticismo: no afirmar lo que no se puede probar.", lado: "favor" }
    ],
    argumentos: [
      "Solo conocemos lo que puede darse en la experiencia; Dios no se da en la experiencia (Kant).",
      "Las pruebas clásicas fallan: pensar algo perfecto no lo hace existir.",
      "Si Dios se pudiera demostrar, la fe sería innecesaria (Kierkegaard)."
    ],
    objeciones: [
      { objecion: "Entonces creer es irracional.", replica: "Indemostrable no es irracional: muchas cosas valiosas no se demuestran." },
      { objecion: "Las cinco vías demuestran a Dios.", replica: "Llegan a una «primera causa», no al Dios personal de las religiones." }
    ],
    caso: "Lemaître, sacerdote y físico, propuso el Big Bang y pidió no usarlo como prueba de la creación: separaba lo que se sabe de lo que se cree.",
    conclusion: "La razón puede pensar a Dios y descubrir sus límites, pero no demostrar su existencia. La creencia pertenece a la fe, que es libre. Pregunta abierta: ¿por qué todas las culturas se hacen esta pregunta?",
    bibliografia: "Kant, Crítica de la razón pura (prólogo); Tomás de Aquino, Suma Teológica I, q. 2; Hume, Diálogos sobre la religión natural; tema «Ética de Kant» de la app.",
    equipo: "6.º año · Integrantes: Ana, Bruno y Carla"
  }
};
