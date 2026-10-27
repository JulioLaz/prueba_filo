/*
 * projects/guias/sentido.js
 * Guía del Proyecto Final — Tema: el sentido de la vida.
 * Pensadores de la filosofía, la ciencia, la psicología, la literatura y las
 * tradiciones religiosas, con preguntas de debate, posturas, argumentos,
 * objeciones, casos y un afiche de muestra.
 * Lo muestra projects/guia.html?tema=sentido. Versión: v1.0.0 (2026-10-28)
 */
window.GUIA_TEMA = {
  id: "sentido",
  titulo: "El sentido de la vida",
  icono: "🌟",
  granPregunta: "¿Tiene sentido la vida? ¿Cuál, y quién lo decide?",
  intro: [
    "Es quizás la pregunta más personal de la filosofía. Aristóteles respondió que la vida tiene un fin: la felicidad como florecimiento. Epicuro y Mill la pensaron desde el placer; las religiones, desde algo que trasciende la vida; Sartre y Camus, desde la libertad en un mundo sin sentido dado.",
    "También la ciencia y la psicología tienen algo para decir: qué nos hace felices, por qué necesitamos un propósito, qué lugar ocupamos en un universo inmenso.",
    "No hay una respuesta única, y eso es lo interesante: el desafío del grupo es <strong>tomar posición y defenderla con argumentos</strong>, escuchando a pensadores muy distintos."
  ],
  enfoque: "Se evalúa la argumentación, no las creencias ni las elecciones de vida de nadie.",

  preguntas: [
    {
      id: "descubre_construye",
      texto: "¿El sentido de la vida se descubre o se construye?",
      porQue: "¿Hay un sentido dado (por la naturaleza o por Dios) que tenemos que encontrar, o cada uno lo crea con sus decisiones?",
      posturas: [
        {
          id: "descubre",
          nombre: "Se descubre: hay un sentido dado",
          tesis: "Sostenemos que el sentido de la vida se descubre, porque el ser humano tiene una naturaleza y unas capacidades que apuntan a un fin, y nuestra tarea es reconocerlo y desarrollarlo.",
          autores: ["aristoteles", "cristianismo", "agustin", "frankl", "hinduismo_budismo", "seligman"],
          argumentos: [
            { tipo: "Teleológico (Aristóteles)", texto: "P1: Cada cosa tiene una función propia. P2: Lo propio del ser humano es la razón. → Vivir con sentido es desarrollar la razón y la virtud: ese fin no lo inventamos, lo descubrimos." },
            { tipo: "De autoridad (Frankl)", texto: "Viktor Frankl, que sobrevivió a Auschwitz, sostiene que el sentido no se inventa: se descubre en cada situación, en una tarea, en un amor o en la actitud frente al sufrimiento." },
            { tipo: "Por experiencia", texto: "Cuando alguien encuentra su vocación suele decir «esto es lo mío»: lo vive como un hallazgo, no como un invento." }
          ],
          objeciones: [
            { objecion: "Sartre: no hay naturaleza humana previa; primero existimos y después nos definimos.", replica: "Aun Sartre reconoce que somos libres y responsables: eso ya es algo que descubrimos sobre nosotros, no que inventamos." },
            { objecion: "Si el sentido ya está dado, ¿dónde queda la libertad?", replica: "Descubrir no es obedecer: hay que buscar, elegir y comprometerse para desarrollar ese fin." }
          ],
          cierre: "Conclusión posible: hay en nosotros capacidades y necesidades que orientan la vida; el sentido se descubre, pero hay que elegir vivirlo."
        },
        {
          id: "construye",
          nombre: "Se construye: no hay un sentido dado",
          tesis: "Sostenemos que el sentido de la vida se construye, porque no viene dado de antemano: cada persona lo crea con sus elecciones, sus proyectos y sus vínculos, y es responsable de él.",
          autores: ["sartre", "camus", "nietzsche", "beauvoir", "darwin_ciencia", "sagan"],
          argumentos: [
            { tipo: "Existencialista (Sartre)", texto: "P1: La existencia precede a la esencia. P2: No hay un plan previo para cada ser humano. → Cada uno se hace a sí mismo con sus elecciones; el sentido es una creación." },
            { tipo: "Desde la ciencia", texto: "La evolución no tiene un propósito final: la vida surgió por procesos naturales. Si hay sentido, lo ponemos nosotros." },
            { tipo: "Por ejemplos", texto: "Dos personas con la misma vida pueden darle sentidos muy distintos: uno se siente realizado como docente y otro, con el mismo trabajo, vacío." }
          ],
          objeciones: [
            { objecion: "Si cada uno inventa su sentido, cualquier vida vale lo mismo, incluso una dedicada a hacer daño.", replica: "Sartre dice que al elegirnos elegimos una imagen del ser humano para todos: la libertad trae responsabilidad." },
            { objecion: "Inventar un sentido es engañarse: si no hay un sentido real, todo es una ilusión.", replica: "Camus responde que el absurdo no lleva a la desesperación: crear sentido sabiendo que no está dado es un acto de rebeldía y de dignidad." }
          ],
          cierre: "Conclusión posible: el sentido no está escrito; lo construimos y por eso somos responsables de nuestra vida."
        }
      ]
    },
    {
      id: "placer_virtud",
      texto: "¿La vida buena es placer o virtud?",
      porQue: "¿Vivir bien es disfrutar y no sufrir, o ser una buena persona aunque cueste?",
      posturas: [
        {
          id: "placer",
          nombre: "La vida buena es una vida de placer bien entendido",
          tesis: "Sostenemos que la vida buena es una vida placentera, entendiendo el placer como bienestar duradero y ausencia de sufrimiento, porque es lo que todos buscamos y lo que da sentido a lo demás.",
          autores: ["epicuro", "mill", "waldinger", "seligman", "hinduismo_budismo", "han"],
          argumentos: [
            { tipo: "De la experiencia (Epicuro)", texto: "Todos los seres vivos buscan el placer y huyen del dolor: es el criterio natural para elegir." },
            { tipo: "Placeres superiores (Mill)", texto: "No todos los placeres valen lo mismo: los del pensamiento, el arte y la amistad son más plenos. Una vida con esos placeres es una vida buena." },
            { tipo: "Por la ciencia (Waldinger)", texto: "El estudio de Harvard sobre el desarrollo adulto, que siguió a personas durante más de 80 años, encontró que las buenas relaciones son lo que más predice una vida feliz y saludable." }
          ],
          objeciones: [
            { objecion: "Aristóteles: el placer acompaña a la vida buena, pero no la define; se puede disfrutar haciendo el mal.", replica: "Por eso hablamos de placer bien entendido: Epicuro y Mill exigen prudencia y placeres de calidad, que excluyen dañar a otros." },
            { objecion: "Si todo es placer, ¿por qué admiramos a quienes se sacrifican por otros?", replica: "Mill responde que el sacrificio vale cuando aumenta la felicidad de los demás: el placer sigue siendo el criterio." }
          ],
          cierre: "Conclusión posible: la vida buena es placentera, pero el placer verdadero es sereno, compartido y de calidad."
        },
        {
          id: "virtud",
          nombre: "La vida buena es una vida virtuosa",
          tesis: "Sostenemos que la vida buena es una vida virtuosa, porque el placer va y viene, pero ser una buena persona —justa, valiente, honesta— es lo que hace que una vida valga la pena aunque no siempre sea placentera.",
          autores: ["aristoteles", "estoicos", "kant", "socrates", "frankl", "cristianismo"],
          argumentos: [
            { tipo: "Deductivo (Aristóteles)", texto: "P1: La felicidad es el fin último. P2: La felicidad es actividad del alma conforme a la virtud. → La vida buena es la vida virtuosa; el placer la acompaña." },
            { tipo: "Estoico (Séneca, Marco Aurelio)", texto: "Lo único que depende de nosotros es nuestra actitud; quien es virtuoso es feliz aunque pierda bienes externos." },
            { tipo: "Kant", texto: "El objetivo no es ser feliz, sino ser digno de la felicidad: actuar por deber y tratar a las personas como fines." }
          ],
          objeciones: [
            { objecion: "Una vida virtuosa pero llena de sufrimiento, ¿es una vida buena?", replica: "Aristóteles reconoce que hacen falta algunos bienes externos; pero sin virtud ninguna vida es plena." },
            { objecion: "Epicuro: la virtud vale porque da tranquilidad, o sea, placer.", replica: "Las personas virtuosas actúan bien aun cuando les cuesta y no les da placer: eso muestra que la virtud vale por sí misma." }
          ],
          cierre: "Conclusión posible: el placer es bienvenido, pero lo que da sentido a una vida es ser una buena persona."
        }
      ]
    },
    {
      id: "muerte",
      texto: "¿Puede tener sentido la vida si todo termina con la muerte?",
      porQue: "La muerte es inevitable. ¿Eso le quita sentido a la vida, o se lo da?",
      posturas: [
        {
          id: "si_sentido",
          nombre: "Sí: la vida tiene sentido aunque termine",
          tesis: "Sostenemos que la vida puede tener sentido aunque termine con la muerte, porque el sentido está en lo que vivimos, hacemos y compartimos, y la finitud hace valioso cada momento.",
          autores: ["epicuro", "camus", "estoicos", "sagan", "frankl", "heidegger"],
          argumentos: [
            { tipo: "Epicuro", texto: "«La muerte no es nada para nosotros»: mientras vivimos no está, y cuando llega ya no estamos. No tiene sentido que nos arruine la vida." },
            { tipo: "La finitud da valor", texto: "Lo que es escaso se valora más: si viviéramos para siempre, nada sería urgente ni importante. Heidegger: asumir la muerte nos hace vivir de forma auténtica." },
            { tipo: "Camus", texto: "Sísifo empuja la roca para siempre y sin propósito, pero «hay que imaginarse a Sísifo feliz»: el sentido está en vivir con lucidez y rebeldía." }
          ],
          objeciones: [
            { objecion: "Tolstói: si todo termina en nada, ¿para qué esforzarse?", replica: "El sentido de una canción no depende de que dure para siempre: depende de lo que es mientras suena." },
            { objecion: "Si todo se olvida, lo que hicimos no importa.", replica: "Importa para quienes ayudamos, amamos o enseñamos: el sentido es concreto, no eterno." }
          ],
          cierre: "Conclusión posible: la muerte no le quita sentido a la vida; le da urgencia y valor."
        },
        {
          id: "trasciende",
          nombre: "Solo si hay algo que trascienda la muerte",
          tesis: "Sostenemos que la vida necesita algo que trascienda la muerte para tener un sentido pleno —Dios, el alma, el legado o la humanidad—, porque si todo termina en la nada, el sentido parece frágil.",
          autores: ["tolstoi", "agustin", "cristianismo", "hinduismo_budismo", "platon", "frankl"],
          argumentos: [
            { tipo: "Tolstói", texto: "En plena fama y riqueza, Tolstói entró en crisis: si todo termina con la muerte, ¿qué sentido tiene lo que hago? Encontró una respuesta en la fe." },
            { tipo: "Platón", texto: "El alma es inmortal y la vida es un camino hacia el Bien: el sentido está más allá de lo que se ve." },
            { tipo: "Legado", texto: "Aun sin religión, buscamos dejar algo: hijos, obras, ideas. Eso muestra que necesitamos que el sentido nos sobreviva." }
          ],
          objeciones: [
            { objecion: "Epicuro: preocuparse por lo que viene después nos impide vivir bien ahora.", replica: "La esperanza en algo que trasciende no impide vivir el presente: le da una dirección." },
            { objecion: "No podemos saber si hay algo después de la muerte.", replica: "Es cierto, por eso reconocemos que esta postura se apoya en la fe o en el legado, no en una demostración." }
          ],
          cierre: "Conclusión posible: para muchos, el sentido pleno requiere trascendencia; creer en ella es una decisión personal."
        }
      ]
    },
    {
      id: "proposito",
      texto: "¿Hace falta tener un propósito para ser feliz?",
      porQue: "Hoy se habla mucho de «encontrar tu propósito». ¿Es necesario, o la felicidad está en lo simple?",
      posturas: [
        {
          id: "si_proposito",
          nombre: "Sí: sin un propósito la vida se vacía",
          tesis: "Sostenemos que hace falta un propósito para ser feliz, porque tener un «para qué» orienta las decisiones y ayuda a soportar las dificultades.",
          autores: ["frankl", "nietzsche", "seligman", "aristoteles", "ikigai", "kierkegaard"],
          argumentos: [
            { tipo: "Nietzsche y Frankl", texto: "«Quien tiene un porqué para vivir puede soportar casi cualquier cómo»: Frankl comprobó en los campos de concentración que quienes tenían un sentido resistían más." },
            { tipo: "Psicología positiva (Seligman)", texto: "El sentido —pertenecer y servir a algo más grande que uno— es uno de los pilares del bienestar duradero." },
            { tipo: "Por ejemplo", texto: "Muchas personas jubiladas o que pierden el trabajo sienten un vacío aunque tengan tiempo y comodidad." }
          ],
          objeciones: [
            { objecion: "Byung-Chul Han: la exigencia de tener un propósito y rendir siempre nos agota y nos hace infelices.", replica: "No hablamos de un propósito de éxito o rendimiento, sino de un sentido: personas, valores, una causa." },
            { objecion: "Los niños son felices sin propósito.", replica: "Los niños viven con intensidad lo que hacen; al crecer, la pregunta por el sentido aparece igual." }
          ],
          cierre: "Conclusión posible: un propósito no garantiza la felicidad, pero sin él la vida pierde dirección."
        },
        {
          id: "no_proposito",
          nombre: "No: la felicidad está en vivir el presente",
          tesis: "Sostenemos que no hace falta un gran propósito para ser feliz, porque la felicidad está en lo simple —la amistad, la serenidad, vivir el presente— y la obsesión por el propósito puede generar angustia.",
          autores: ["epicuro", "hinduismo_budismo", "estoicos", "han", "waldinger", "camus"],
          argumentos: [
            { tipo: "Epicuro", texto: "Con pan, agua y amigos se puede ser feliz: la felicidad es no sufrir y vivir sereno, no cumplir grandes metas." },
            { tipo: "Budismo", texto: "El deseo constante de algo más es fuente de sufrimiento; la paz está en la atención al presente." },
            { tipo: "Byung-Chul Han", texto: "La sociedad del rendimiento convierte la vida en un proyecto sin descanso: así aparecen el agotamiento y la depresión." }
          ],
          objeciones: [
            { objecion: "Frankl: sin un sentido, ante el sufrimiento la vida se derrumba.", replica: "Vivir el presente con amigos y serenidad ya es un sentido: no hace falta un gran proyecto." },
            { objecion: "Vivir solo el presente puede ser irresponsable.", replica: "Epicuro pide prudencia: disfrutar el presente no es descuidar el futuro." }
          ],
          cierre: "Conclusión posible: la felicidad no exige un gran propósito; puede estar en una vida sencilla y bien acompañada."
        }
      ]
    }
  ],

  autores: [
    { id: "socrates", nombre: "Sócrates", epoca: "470–399 a. C.", tipo: "filósofo", idea: "Una vida sin examen no vale la pena: el sentido está en buscar la verdad y el bien, conociéndose a uno mismo.", cita: "Una vida sin examen no merece ser vivida (Platón, Apología).", argumento: "Vivir sin pensar en cómo vivimos es vivir a medias.", ejemplo: "Preguntarte por qué hacés lo que hacés, y no solo hacerlo.", enlace: { texto: "Tema: Sócrates", url: "../tema.html?tema=socrates" } },
    { id: "platon", nombre: "Platón", epoca: "427–347 a. C.", tipo: "filósofo", idea: "La vida es un camino del mundo de las apariencias al mundo de las Ideas; el alma es inmortal y busca el Bien.", cita: "La alegoría de la caverna: salir de las sombras hacia la luz (República, VII).", argumento: "El sentido está en elevarse de lo aparente a lo verdadero.", ejemplo: "Dejar de vivir por las apariencias (likes, imagen) para buscar lo que vale de verdad.", enlace: { texto: "Tema: Platón", url: "../tema.html?tema=platon" } },
    { id: "aristoteles", nombre: "Aristóteles", epoca: "384–322 a. C.", tipo: "filósofo", idea: "Todo tiende a un fin; el fin del ser humano es la eudaimonía, la felicidad como florecimiento, que se alcanza viviendo según la razón y la virtud.", cita: "La felicidad es una actividad del alma conforme a la virtud (Ética a Nicómaco).", argumento: "Si lo propio del ser humano es la razón, vivir con sentido es desarrollarla con virtud.", ejemplo: "Un buen músico se realiza tocando bien; una buena persona, viviendo bien.", enlace: { texto: "Tema: Ética de Aristóteles", url: "../tema.html?tema=etica_aristoteles" } },
    { id: "epicuro", nombre: "Epicuro", epoca: "341–270 a. C.", tipo: "filósofo", idea: "El sentido de la vida es el placer entendido como ausencia de dolor y serenidad (ataraxia), con amigos y deseos sencillos.", cita: "La muerte no es nada para nosotros (Carta a Meneceo).", argumento: "Si eliminamos los miedos y los deseos vanos, podemos ser felices con poco.", ejemplo: "Una tarde tranquila con amigos vale más que un lujo que te deja ansioso.", enlace: { texto: "Tema: Hedonismo (Epicuro)", url: "../tema.html?tema=hedonismo" } },
    { id: "estoicos", nombre: "Los estoicos (Séneca, Marco Aurelio)", epoca: "s. I–II", tipo: "filósofo", idea: "Vivir con sentido es vivir con virtud, aceptando lo que no depende de nosotros y cuidando lo que sí: nuestras decisiones y actitudes.", cita: "No es que tengamos poco tiempo, sino que perdemos mucho (Séneca, Sobre la brevedad de la vida).", argumento: "Si ponemos la felicidad en lo externo, la perdemos; si la ponemos en nuestra actitud, nadie nos la quita.", ejemplo: "No podés controlar el resultado de un partido, sí tu esfuerzo y tu manera de jugar.", enlace: null },
    { id: "hinduismo_budismo", nombre: "Hinduismo y budismo", epoca: "tradiciones de la India", tipo: "religión", idea: "El hinduismo propone vivir según el dharma (el deber propio) hasta liberarse del ciclo de renacimientos; el budismo enseña que el deseo causa sufrimiento y que se puede llegar a la paz (nirvana).", cita: "Las cuatro nobles verdades: hay sufrimiento, tiene una causa, puede cesar y hay un camino (budismo).", argumento: "El sentido no está en acumular, sino en liberarse del apego.", ejemplo: "Querer siempre el celular nuevo y nunca estar conforme.", enlace: null },
    { id: "cristianismo", nombre: "Cristianismo (y religiones abrahámicas)", epoca: "tradición judeocristiana", tipo: "religión", idea: "La vida tiene un sentido que la trasciende: fuimos creados por amor y para amar a Dios y al prójimo; la muerte no es el final.", cita: "Amarás a tu prójimo como a ti mismo (Levítico; Evangelios).", argumento: "Si hay un Dios que nos ama, cada vida tiene un valor y un sentido que no depende del éxito.", ejemplo: "Personas que dedican su vida a cuidar a otros por fe.", enlace: null },
    { id: "agustin", nombre: "Agustín de Hipona", epoca: "354–430", tipo: "filósofo", idea: "El ser humano vive inquieto porque busca algo infinito; solo en Dios encuentra descanso.", cita: "Nuestro corazón está inquieto hasta que descanse en ti (Confesiones, I).", argumento: "Ningún bien finito sacia del todo: eso apunta a algo más.", ejemplo: "Conseguís lo que querías y al rato ya querés otra cosa.", enlace: null },
    { id: "mill", nombre: "John Stuart Mill", epoca: "1806–1873", tipo: "filósofo", idea: "La vida buena busca la mayor felicidad para el mayor número; los placeres superiores (pensar, crear, ayudar) valen más que los inferiores.", cita: "Es mejor ser un Sócrates insatisfecho que un tonto satisfecho (El utilitarismo).", argumento: "La felicidad propia se enriquece cuando se busca también la de los demás.", ejemplo: "Estudiar algo que te apasiona y usarlo para ayudar a tu comunidad.", enlace: { texto: "Tema: Utilitarismo", url: "../tema.html?tema=utilitarismo" } },
    { id: "kant", nombre: "Immanuel Kant", epoca: "1724–1804", tipo: "filósofo", idea: "El fin de la vida moral no es ser feliz, sino ser digno de la felicidad: actuar por deber y respetar la dignidad de toda persona.", cita: "Obra de modo que trates a la humanidad siempre como un fin y nunca solo como un medio (Fundamentación).", argumento: "El valor de una vida no se mide por el placer, sino por la buena voluntad.", ejemplo: "Decir la verdad aunque te perjudique.", enlace: { texto: "Tema: Ética de Kant", url: "../tema.html?tema=etica_kant" } },
    { id: "kierkegaard", nombre: "Søren Kierkegaard", epoca: "1813–1855", tipo: "filósofo", idea: "Cada uno tiene que elegirse a sí mismo y comprometerse; la vida puede quedarse en el disfrute superficial (estadio estético) o asumir un compromiso ético y religioso.", cita: "Se trata de encontrar una verdad que sea verdad para mí, la idea por la cual quiero vivir y morir (Diario, 1835).", argumento: "El sentido no se aprende en los libros: se decide con la propia vida.", ejemplo: "Pasar de «ver qué pinta» a comprometerte con algo o alguien.", enlace: null },
    { id: "schopenhauer", nombre: "Arthur Schopenhauer", epoca: "1788–1860", tipo: "filósofo", idea: "La vida es deseo insatisfecho: oscilamos entre el dolor de desear y el aburrimiento de tener. El arte y la compasión alivian ese sufrimiento.", cita: "La vida oscila como un péndulo entre el dolor y el aburrimiento (El mundo como voluntad y representación).", argumento: "Si todo deseo cumplido deja paso a otro, la felicidad completa es imposible.", ejemplo: "Esperar todo el año las vacaciones y aburrirte a la semana.", enlace: null },
    { id: "nietzsche", nombre: "Friedrich Nietzsche", epoca: "1844–1900", tipo: "filósofo", idea: "Con la «muerte de Dios», no hay sentido dado: hay que crear nuevos valores y afirmar la vida tal como es (amor fati).", cita: "Quien tiene un porqué para vivir puede soportar casi cualquier cómo (Crepúsculo de los ídolos).", argumento: "El sentido no se recibe: se crea con fuerza y creatividad.", ejemplo: "Un artista que se inventa su propio camino.", enlace: null },
    { id: "tolstoi", nombre: "León Tolstói", epoca: "1828–1910", tipo: "escritor", idea: "En «Confesión» cuenta su crisis: rico y famoso, sintió que nada tenía sentido si todo terminaba con la muerte. Lo encontró en la vida sencilla y en la fe.", cita: "¿Qué saldrá de lo que hago hoy y mañana? ¿Qué saldrá de toda mi vida? (Confesión).", argumento: "El éxito no responde la pregunta por el sentido.", ejemplo: "Personas que lo tienen todo y se sienten vacías.", enlace: null },
    { id: "heidegger", nombre: "Martin Heidegger", epoca: "1889–1976", tipo: "filósofo", idea: "Somos «seres para la muerte»: asumir que vamos a morir nos saca de la vida superficial del «se» (lo que «se hace», lo que «se dice») y nos permite vivir de forma auténtica.", cita: "La muerte es la posibilidad más propia (Ser y tiempo, paráfrasis).", argumento: "Tener presente la finitud ayuda a elegir lo importante.", ejemplo: "Después de un susto de salud, muchos cambian sus prioridades.", enlace: null },
    { id: "sartre", nombre: "Jean-Paul Sartre", epoca: "1905–1980", tipo: "filósofo", idea: "La existencia precede a la esencia: no hay un sentido dado; cada uno se hace a sí mismo con sus elecciones y es totalmente responsable.", cita: "El hombre está condenado a ser libre (El existencialismo es un humanismo).", argumento: "Si no hay un plan previo, el sentido lo crea cada uno al elegir.", ejemplo: "Nadie nace médico, artista o cobarde: uno se hace con lo que elige.", enlace: { texto: "Tema: Sartre", url: "../tema.html?tema=sartre" } },
    { id: "beauvoir", nombre: "Simone de Beauvoir", epoca: "1908–1986", tipo: "filósofo", idea: "La libertad propia está ligada a la de los demás: una vida tiene sentido cuando se proyecta hacia fines que amplían la libertad de todos.", cita: "Querer ser libre es también querer libres a los otros (Para una moral de la ambigüedad).", argumento: "El sentido se construye con otros, no en soledad.", ejemplo: "Participar en un proyecto que mejora la vida del barrio.", enlace: null },
    { id: "camus", nombre: "Albert Camus", epoca: "1913–1960", tipo: "escritor", idea: "La vida es absurda: buscamos sentido en un universo que no responde. La respuesta no es rendirse sino rebelarse y vivir con intensidad.", cita: "Hay que imaginarse a Sísifo feliz (El mito de Sísifo).", argumento: "Aceptar el absurdo con lucidez nos libera para vivir plenamente.", ejemplo: "Seguir jugando con ganas aunque sepas que el partido no cambia el mundo.", enlace: null },
    { id: "frankl", nombre: "Viktor Frankl", epoca: "1905–1997", tipo: "científico", idea: "Psiquiatra que sobrevivió a los campos de concentración: la principal motivación humana es encontrar sentido, en una tarea, en un amor o en la actitud ante el sufrimiento.", cita: "Al hombre se le puede arrebatar todo salvo la última de las libertades: elegir su actitud (El hombre en busca de sentido).", argumento: "Quienes tenían un sentido resistían mejor el horror.", ejemplo: "Alguien que atraviesa una enfermedad y la vive como una oportunidad de ayudar a otros.", enlace: null },
    { id: "seligman", nombre: "Martin Seligman", epoca: "1942–", tipo: "científico", idea: "Psicólogo, fundador de la psicología positiva: el bienestar tiene varios pilares (emociones positivas, compromiso, relaciones, sentido y logros).", cita: "El sentido es pertenecer y servir a algo que uno cree más grande que uno mismo (La auténtica felicidad, paráfrasis).", argumento: "El placer solo no alcanza para una vida plena: hace falta sentido.", ejemplo: "Voluntarios que dicen sentirse más felices ayudando.", enlace: null },
    { id: "waldinger", nombre: "Robert Waldinger", epoca: "1951–", tipo: "científico", idea: "Psiquiatra que dirige el Estudio de Harvard sobre el desarrollo adulto, que siguió a cientos de personas durante más de 80 años.", cita: "Las buenas relaciones nos mantienen más felices y más sanos (charla TED, 2015).", argumento: "La evidencia muestra que los vínculos importan más que la fama o el dinero.", ejemplo: "Tener con quién hablar cuando las cosas van mal.", enlace: null },
    { id: "sagan", nombre: "Carl Sagan", epoca: "1934–1996", tipo: "científico", idea: "Astrónomo: el universo es inmenso y no fue hecho para nosotros, pero somos una forma en que el cosmos se conoce a sí mismo; eso nos invita al cuidado y la humildad.", cita: "Somos polvo de estrellas (Cosmos) / un punto azul pálido (Un punto azul pálido).", argumento: "Nuestra pequeñez cósmica no quita sentido: lo vuelve una responsabilidad compartida.", ejemplo: "La foto de la Tierra desde lejos: todo lo que conocemos en un punto.", enlace: null },
    { id: "darwin_ciencia", nombre: "Charles Darwin y la biología evolutiva", epoca: "s. XIX–XXI", tipo: "científico", idea: "La vida surgió y evolucionó por selección natural, sin un propósito final escrito en la naturaleza.", cita: "Hay grandeza en esta concepción de la vida (El origen de las especies).", argumento: "Si la naturaleza no tiene un fin dado, el sentido lo construyen los seres humanos.", ejemplo: "Somos parte de una historia de millones de años, no la meta de esa historia.", enlace: null },
    { id: "han", nombre: "Byung-Chul Han", epoca: "1959–", tipo: "filósofo", idea: "Vivimos en la «sociedad del cansancio»: nos exigimos rendir y mostrarnos todo el tiempo, y eso trae agotamiento y vacío. Propone recuperar la contemplación.", cita: "El sujeto del rendimiento se explota a sí mismo (La sociedad del cansancio, paráfrasis).", argumento: "Buscar el sentido en la productividad nos vacía.", ejemplo: "Sentir culpa por descansar o por no estar «haciendo algo».", enlace: null },
    { id: "ikigai", nombre: "El ikigai japonés", epoca: "tradición de Okinawa", tipo: "tradición", idea: "Ikigai es «la razón de ser»: lo que te hace levantarte cada mañana. Se asocia con la longevidad de los habitantes de Okinawa.", cita: "Ikigai: aquello por lo que vale la pena vivir.", argumento: "Tener una razón para cada día da bienestar y salud.", ejemplo: "Una abuela que cuida su huerta y a sus nietos con alegría.", enlace: null }
  ],

  hipotesisEjemplos: {
    buenas: [
      "Sostenemos que el sentido de la vida se construye, porque no hay un plan previo para cada persona: cada uno se hace con sus elecciones y es responsable de ellas.",
      "Sostenemos que la vida buena es la vida virtuosa, porque el placer es pasajero, pero ser justo y honesto le da valor a una vida aunque no siempre sea agradable.",
      "Sostenemos que la muerte no le quita sentido a la vida, porque el sentido está en lo que vivimos y compartimos, y la finitud hace valioso cada momento."
    ],
    malas: [
      { texto: "El sentido de la vida es ser feliz.", porque: "Es demasiado general: ¿qué es ser feliz? Falta el porqué y una posición discutible." },
      { texto: "Cada uno tiene su sentido.", porque: "Puede ser una conclusión, pero así dicha no se argumenta ni responde la pregunta." },
      { texto: "La vida no tiene sentido.", porque: "Es una tesis posible, pero sin el porqué ni qué se sigue de ella (¿y entonces?)." },
      { texto: "Hay que disfrutar la vida.", porque: "Es un consejo, no una hipótesis filosófica." }
    ]
  },

  demostrarEjemplos: {
    deductivo: "P1: Cada cosa es buena cuando cumple su función propia. P2: La función propia del ser humano es vivir según la razón. → Una vida buena es una vida guiada por la razón y la virtud. (Aristóteles)",
    ejemplo: "El estudio de Harvard (Waldinger), los relatos de Frankl y la vida en Okinawa (ikigai) muestran que los vínculos y un «para qué» se asocian con vidas más plenas.",
    analogia: "La vida es como una canción: no vale por cuánto dura, sino por lo que es mientras suena. (Contra quien dice que la muerte le quita sentido.)",
    autoridad: "Viktor Frankl, psiquiatra que sobrevivió a Auschwitz, observó que quienes tenían un sentido resistían mejor: su experiencia y su estudio respaldan la idea.",
    absurdo: "Si el sentido de la vida fuera solo el placer inmediato, la mejor vida sería estar conectado para siempre a una máquina de placer. Casi nadie lo elegiría: el placer solo no alcanza.",
    contraejemplo: "A «el dinero da sentido a la vida» se le opone el caso de Tolstói: rico y famoso, sintió que su vida no tenía sentido."
  },

  falaciasEjemplos: {
    ad_hominem: "«Camus era pesimista, así que no hay que tomarlo en serio.»",
    hombre_paja: "«Los existencialistas dicen que nada importa y que podés hacer cualquier cosa.» (Sartre dice lo contrario: somos totalmente responsables.)",
    ignorancia: "«Nadie demostró que la vida tenga sentido, entonces no lo tiene.»",
    mayoria: "«Todos dicen que hay que tener éxito para ser feliz, entonces es así.»",
    circular: "«La vida tiene sentido porque vale la pena vivirla, y vale la pena porque tiene sentido.»",
    falso_dilema: "«O tenés un gran propósito o tu vida no tiene sentido.»",
    generalizacion: "«Conozco a dos personas ricas que son felices: el dinero da felicidad.»"
  },

  casos: [
    { titulo: "La crisis de Tolstói", texto: "A los 50 años, León Tolstói era rico, famoso y tenía familia. Sin embargo, cayó en una crisis: se preguntaba para qué servía todo si iba a morir.", preguntas: ["¿Qué muestra este caso sobre el éxito y el sentido?", "¿Qué le dirían Epicuro, Camus y un creyente?"] },
    { titulo: "Frankl en Auschwitz", texto: "En el campo de concentración, Viktor Frankl observó que quienes conservaban un motivo para vivir (un ser querido, una obra pendiente) resistían más.", preguntas: ["¿El sentido se descubre o se construye en una situación así?", "¿Qué papel juega la actitud ante el sufrimiento?"] },
    { titulo: "El mito de Sísifo", texto: "Los dioses condenaron a Sísifo a subir una roca a la cima de una montaña para que caiga, una y otra vez, para siempre.", preguntas: ["¿Por qué Camus dice que hay que imaginarlo feliz?", "¿En qué se parece nuestra rutina a la de Sísifo?"] },
    { titulo: "La máquina de experiencias", texto: "El filósofo Robert Nozick imaginó una máquina que te hace vivir las experiencias más placenteras que quieras, pero conectado para siempre y sin saber que es falso.", preguntas: ["¿Te conectarías? ¿Por qué?", "¿Qué muestra este caso sobre el placer como sentido de la vida?"] },
    { titulo: "El influencer feliz", texto: "Una persona con millones de seguidores muestra una vida perfecta, pero en una entrevista confiesa que se siente vacía y agotada.", preguntas: ["¿Qué diría Byung-Chul Han?", "¿Qué diferencia hay entre parecer feliz y tener una vida con sentido?"] },
    { titulo: "El estudio de Harvard", texto: "Desde 1938, un estudio sigue a cientos de personas a lo largo de su vida. Su conclusión principal: las buenas relaciones son lo que más se asocia con la felicidad y la salud.", preguntas: ["¿Este dato apoya a Epicuro, a Aristóteles o a los dos?", "¿Puede la ciencia decirnos cuál es el sentido de la vida?"] }
  ],

  conclusiones: {
    marco: "No hay una respuesta única, pero sí respuestas mejor y peor fundamentadas. La conclusión tiene que responder la pregunta, reconocer lo que dicen las posturas contrarias y dejar una pregunta abierta para el curso.",
    modelos: [
      "Concluimos que el sentido de la vida no está dado de antemano: lo construimos con nuestras elecciones y nuestros vínculos, como dicen Sartre y Beauvoir. Pero Frankl nos hizo ver que ese sentido también se descubre en lo que la vida nos presenta. Nos queda una pregunta: ¿se puede construir un sentido en soledad?",
      "Concluimos que la vida buena no es solo placer ni solo deber: Aristóteles tenía razón en que la virtud es el centro, y Epicuro en que la serenidad y la amistad son indispensables. Pregunta abierta: ¿qué pesa más cuando placer y virtud chocan?"
    ]
  },

  preguntasProbables: [
    { pregunta: "Si el sentido se construye, ¿cualquier sentido vale, incluso dañar a otros?", comoResponder: "No: Sartre y Beauvoir unen libertad con responsabilidad hacia los demás." },
    { pregunta: "¿Ustedes encontraron el sentido de su vida?", comoResponder: "No hace falta responder en lo personal: «lo que defendemos es una tesis filosófica»; pueden dar un ejemplo general." },
    { pregunta: "¿La ciencia puede decir cuál es el sentido de la vida?", comoResponder: "La ciencia dice qué nos hace bien (vínculos, propósito), pero el sentido implica valores: ahí entra la filosofía." },
    { pregunta: "¿No es pesimista decir que la vida es absurda?", comoResponder: "Camus no termina en el pesimismo: el absurdo es el punto de partida para vivir con lucidez y rebeldía." },
    { pregunta: "¿Y si alguien no encuentra ningún sentido?", comoResponder: "Frankl diría que el sentido puede estar en la actitud ante lo que nos pasa; buscarlo ya es empezar a encontrarlo." }
  ],

  recursos: {
    app: [
      { texto: "Tema: Ética de Aristóteles (eudaimonía) y su resumen final", url: "../tema.html?tema=etica_aristoteles" },
      { texto: "Tema: Hedonismo (Epicuro) y su resumen final", url: "../tema.html?tema=hedonismo" },
      { texto: "Tema: Utilitarismo (Mill) y su resumen final", url: "../tema.html?tema=utilitarismo" },
      { texto: "Tema: Ética de Kant", url: "../tema.html?tema=etica_kant" },
      { texto: "Tema: Sartre", url: "../tema.html?tema=sartre" },
      { texto: "Diálogo con Aristóteles (para ensayar preguntas)", url: "../dialogo/chat.html?filosofo=aristoteles" }
    ],
    libros: [
      "Viktor Frankl, El hombre en busca de sentido.",
      "Albert Camus, El mito de Sísifo.",
      "León Tolstói, Confesión.",
      "Epicuro, Carta a Meneceo (texto breve).",
      "Séneca, Sobre la brevedad de la vida.",
      "Jean-Paul Sartre, El existencialismo es un humanismo.",
      "Carl Sagan, Un punto azul pálido.",
      "Robert Waldinger, charla TED «¿Qué hace que una vida sea buena?» (2015)."
    ]
  },

  afiche: {
    pregunta: "¿El sentido de la vida se descubre o se construye?",
    hipotesis: "El sentido de la vida se construye: no viene dado de antemano, cada persona lo crea con sus elecciones, sus proyectos y sus vínculos, y es responsable de él.",
    autores: [
      { nombre: "Sartre", idea: "La existencia precede a la esencia: nos hacemos al elegir.", lado: "favor" },
      { nombre: "Camus", idea: "La vida es absurda; hay que imaginarse a Sísifo feliz.", lado: "favor" },
      { nombre: "Nietzsche", idea: "Sin sentido dado, hay que crear valores.", lado: "favor" },
      { nombre: "Beauvoir", idea: "La libertad se construye con los otros.", lado: "favor" },
      { nombre: "Aristóteles", idea: "El ser humano tiene un fin: la eudaimonía.", lado: "contra" },
      { nombre: "Frankl", idea: "El sentido se descubre en cada situación.", lado: "contra" },
      { nombre: "Cristianismo", idea: "Fuimos creados para amar: el sentido nos es dado.", lado: "contra" }
    ],
    argumentos: [
      "No hay un plan previo para cada persona: primero existimos y después nos definimos (Sartre).",
      "La evolución no tiene una meta final: el sentido lo ponen los seres humanos.",
      "La misma vida puede tener sentidos distintos según cómo la viva cada uno."
    ],
    objeciones: [
      { objecion: "Entonces cualquier sentido vale, incluso hacer daño.", replica: "Al elegir, elegimos también para los demás: la libertad trae responsabilidad." },
      { objecion: "Frankl: el sentido se descubre.", replica: "Descubrir oportunidades no impide que el sentido sea una respuesta que construimos." }
    ],
    caso: "Sísifo empuja su roca para siempre. Camus dice que es feliz: le da sentido a su tarea al asumirla con lucidez.",
    conclusion: "El sentido no está escrito: lo construimos y por eso somos responsables de nuestra vida. Pregunta abierta: ¿se puede construir un sentido en soledad?",
    bibliografia: "Sartre, El existencialismo es un humanismo; Camus, El mito de Sísifo; Frankl, El hombre en busca de sentido; tema «Sartre» de la app.",
    equipo: "6.º año · Integrantes: Dante, Elena y Fabio"
  }
};
