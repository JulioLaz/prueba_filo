// themes/origen/conceptos.js - Caza de conceptos: Origen de la Filosofía

window.CONCEPT_HUNT_CONFIG = {
  author: "Origen de la Filosofía",
  menuUrl: "../../tema.html?tema=origen",
  levels: [
    {
      // 1) Etimología y actitud filosófica
      html: `
      <p>La palabra <strong>filosofía</strong> es un compuesto griego: <strong>philo</strong> (amor o tendencia a) y <strong>sophia</strong> (sabiduría). Su etimología es el <em>amor por la sabiduría</em>. El filósofo no es quien posee la <strong>verdad</strong>, sino quien la <strong>busca</strong> activamente. La filosofía nace de una actitud de <strong>asombro</strong> o <strong>curiosidad</strong> radical ante lo que nos rodea, que nos lleva a cuestionar las certezas cotidianas usando el <strong>pensamiento crítico</strong>.</p>
      `,
      hint: "Identifica los componentes del término y la actitud filosófica.",
      advanceAfter: 1,
      concepts: [
        { term: "filosofía", meaning: "Del griego: philo (amor) + sophia (sabiduría). El amor por la sabiduría." },
        { term: "philo", meaning: "Raíz griega que significa 'amor' o 'tendencia hacia'. Está presente en palabras como 'filantrópico' (amor al ser humano)." },
        { term: "sophia", meaning: "Raíz griega que significa 'sabiduría'. De aquí derivan palabras como 'sofisticado' o 'sofista'." },
        { term: "verdad", meaning: "Lo que el filósofo busca, no lo que posee. La búsqueda es continua e inacabable." },
        { term: "busca", meaning: "El filósofo es el que busca, no el que ha llegado. La filosofía es un camino, no un destino." },
        { term: "asombro", meaning: "El origen de la filosofía: la capacidad de maravillarse ante lo cotidiano y preguntarse por qué las cosas son como son." },
        { term: "curiosidad", meaning: "Impulso que mueve al filósofo a cuestionar lo que todos dan por sentado." },
        { term: "pensamiento crítico", meaning: "Herramienta fundamental de la filosofía: cuestionar, argumentar, buscar fundamentos para las creencias." },
      ],
      corollary: [
        "Filosofía = amor por la sabiduría (philo + sophia).",
        "El filósofo no sabe: busca. El asombro es el inicio.",
        "Pensar filosóficamente es cuestionar lo que damos por sentado."
      ],
    },
    {
      // 2) Pitágoras y el origen del término
      html: `
      <div class="highlight-box">
        <h4>🔢 Pitágoras: El origen del término "filósofo"</h4>
        <p>El término se atribuye a <strong>Pitágoras</strong>. Cuando el general <strong>León de Fliunte</strong> lo llamó <em>sabio</em> (<strong>sofós</strong>), Pitágoras respondió que solo los <strong>dioses</strong> pueden ser verdaderamente sabios. Él se definió como <strong>filósofo</strong> (φιλό-σοφος): alguien que <em>ama la sabiduría</em>, no quien la posee. Comparó la vida con una feria donde algunos van por <strong>gloria</strong>, otros por <strong>lucro</strong>, y los más nobles van solo para <strong>contemplar</strong> la naturaleza de las cosas.</p>
      </div>
      `,
      hint: "¿Quién creó el término y qué distinción hizo?",
      advanceAfter: 1,
      concepts: [
        { term: "Pitágoras", meaning: "Matemático y pensador griego (siglo VI a.C.), a quien se atribuye el origen del término 'filosofía'. Fundó la escuela pitagórica que asoció los números con el principio de la realidad." },
        { term: "sofós", meaning: "Término griego que significa 'sabio'. Para Pitágoras, solo los dioses pueden ser verdaderamente sofós." },
        { term: "dioses", meaning: "Para Pitágoras, los únicos que pueden ser verdaderamente sabios. El ser humano solo puede aspirar a amar la sabiduría." },
        { term: "filósofo", meaning: "El que ama la sabiduría (φιλό-σοφος). No el que sabe, sino el que desea saber. Distinción clave de Pitágoras." },
        { term: "gloria", meaning: "Lo que buscan algunos en la 'feria de la vida' según la analogía de Pitágoras." },
        { term: "lucro", meaning: "Lo que buscan otros en la feria de la vida. El filósofo no busca ni gloria ni lucro." },
        { term: "contemplar", meaning: "La actitud del filósofo: observar y comprender la naturaleza de las cosas, sin otro objetivo que el saber mismo." },
      ],
      corollary: [
        "Pitágoras: el filósofo ama la sabiduría, no la posee.",
        "Distinción clave: sofós (sabio, solo los dioses) vs. filósofo (amante de la sabiduría).",
        "La contemplación desinteresada es la actitud filosófica genuina."
      ],
    },
    {
      // 3) Del mito al logos
      html: `
      <div class="highlight-box">
        <h4>📜 Del Mito al Logos: El gran giro del pensamiento</h4>
        <p>El nacimiento de la filosofía se conoce como el paso <strong>del mito al logos</strong>.<br>
        <strong>El mito</strong>: explicaciones del mundo basadas en narraciones con <strong>dioses</strong> y seres sobrenaturales (como las de <strong>Homero</strong> y <strong>Hesíodo</strong>).<br>
        <strong>El logos</strong>: el <strong>pensamiento racional</strong> que busca explicar la realidad mediante <strong>causas naturales</strong> y <strong>argumentos</strong>. Fue un proceso <em>progresivo</em>, no un abandono repentino, sino una <strong>racionalización</strong> del mundo.</p>
      </div>
      `,
      hint: "Diferencia el mito del logos y entiende el proceso de cambio.",
      advanceAfter: 1,
      concepts: [
        { term: "mito", meaning: "Narración tradicional protagonizada por dioses y héroes que explica el origen del mundo y los fenómenos naturales (cosmogonía). No pretende argumentar, solo narrar." },
        { term: "logos", meaning: "Término griego que significa 'razón', 'palabra', 'discurso racional'. El logos busca causas naturales y argumentos, no personajes sobrenaturales." },
        { term: "dioses", meaning: "Protagonistas de las explicaciones míticas. Los filósofos prescinden de ellos al buscar causas naturales." },
        { term: "Homero", meaning: "Poeta griego autor de la Ilíada y la Odisea. Sus relatos son ejemplos de pensamiento mítico que explicaba el mundo a través de los dioses." },
        { term: "Hesíodo", meaning: "Poeta griego autor de la Teogonía, donde relata el origen de los dioses y el cosmos desde una perspectiva mítica." },
        { term: "causas naturales", meaning: "Lo que busca el logos: explicaciones basadas en elementos y procesos de la naturaleza, sin intervención sobrenatural." },
        { term: "argumentos", meaning: "La herramienta del logos: razonamientos que pueden ser discutidos, refutados y mejorados." },
        { term: "racionalización", meaning: "El proceso gradual por el que los griegos comenzaron a dar explicaciones racionales a fenómenos que antes explicaban con mitos." },
      ],
      corollary: [
        "Mito: explica con dioses y narraciones.",
        "Logos: explica con razón y causas naturales.",
        "El paso fue progresivo: racionalización, no rechazo abrupto del mito."
      ],
    },
    {
      // 4) El arché y la Escuela de Mileto
      html: `
      <div class="highlight-box">
        <h4>❓ El Arché: El primer problema filosófico</h4>
        <p>Los <strong>presocráticos</strong> (filósofos anteriores a Sócrates) buscaron el <strong>arché</strong>: el principio de todas las cosas. Este término tiene triple sentido: <strong>origen</strong>, <strong>substrato</strong> y <strong>causa</strong>.<br><br>
        <strong>Tales de Mileto</strong>: arché = <strong>agua</strong> (elemento concreto, observable, esencial para la vida).<br>
        <strong>Anaximandro</strong>: arché = <strong>ápeiron</strong> (lo indefinido e ilimitado; primer arché abstracto).<br>
        <strong>Anaxímenes</strong>: arché = <strong>aire</strong> (se transforma por <strong>rarefacción</strong> y <strong>condensación</strong>).</p>
      </div>
      `,
      hint: "El arché: origen, substrato y causa. Los tres filósofos de Mileto.",
      advanceAfter: 1,
      concepts: [
        { term: "presocráticos", meaning: "Filósofos anteriores a Sócrates (siglo VI-V a.C.). Se concentraron en buscar el principio (arché) de la naturaleza (physis). Son los primeros filósofos de Occidente." },
        { term: "arché", meaning: "Del griego ἀρχή. El principio de todas las cosas con triple sentido: (1) origen — de dónde surge todo; (2) substrato — de qué está hecho todo; (3) causa — qué produce el movimiento." },
        { term: "origen", meaning: "Primer sentido del arché: aquello a partir de lo cual surgen todos los seres." },
        { term: "substrato", meaning: "Segundo sentido del arché: aquello de lo que se componen los seres en su interior." },
        { term: "causa", meaning: "Tercer sentido del arché: aquello que produce cambio y movimiento en las cosas." },
        { term: "Tales de Mileto", meaning: "Primer filósofo de la Historia. Propuso el agua como arché, una explicación natural y concreta, sin recurrir a dioses." },
        { term: "agua", meaning: "Arché propuesto por Tales. Elegido porque es esencial para la vida, puede transformarse (sólido, líquido, gaseoso) y todo parece nacer de lo húmedo." },
        { term: "Anaximandro", meaning: "Sucesor de Tales, fue el primero en usar el término 'arché'. Propuso el ápeiron: un principio abstracto, indefinido e ilimitado." },
        { term: "ápeiron", meaning: "Del griego: lo indefinido, ilimitado. Arché propuesto por Anaximandro. Es abstracto: no es agua, fuego, aire ni tierra, porque estos elementos se anulan entre sí." },
        { term: "Anaxímenes", meaning: "Tercer filósofo de la Escuela de Mileto. Propuso el aire como arché. Volvió a lo concreto, pero añadió un mecanismo de transformación: rarefacción y condensación." },
        { term: "aire", meaning: "Arché propuesto por Anaxímenes. Invisible pero presente en todas partes, esencial para la vida. Se transforma en otros elementos por rarefacción o condensación." },
        { term: "rarefacción", meaning: "El aire se hace menos denso → se convierte en fuego. Mecanismo de transformación propuesto por Anaxímenes." },
        { term: "condensación", meaning: "El aire se hace más denso → se convierte en viento, nubes, agua, tierra y piedras. Mecanismo opuesto a la rarefacción en Anaxímenes." },
      ],
      corollary: [
        "Arché: origen, substrato y causa de todo lo real.",
        "Tales (agua) → Anaximandro (ápeiron) → Anaxímenes (aire).",
        "Escuela de Mileto: los primeros en buscar explicaciones naturales sin dioses."
      ],
    },
    {
      // 5) Otros presocráticos
      html: `
      <div class="highlight-box">
        <h4>🌟 Otros grandes presocráticos</h4>
        <p><strong>Pitágoras</strong>: el arché es el <strong>número</strong>. El universo tiene estructura <strong>matemática</strong>.<br>
        <strong>Heráclito</strong> ("el oscuro"): arché = <strong>fuego</strong>, pero su idea central es el <strong>devenir</strong> (cambio constante). <em>"Nadie se baña dos veces en el mismo río"</em>.<br>
        <strong>Parménides</strong> (Escuela de Elea): el arché es el <strong>ser</strong> inmutable. Inauguró la <strong>metafísica</strong>. <em>"El ser es y el no ser no es"</em>. El <strong>cambio</strong> es una ilusión de los <strong>sentidos</strong>; solo la razón conoce la verdad.</p>
      </div>
      `,
      hint: "Tres propuestas diferentes: número, fuego/devenir, y ser inmutable.",
      advanceAfter: 1,
      concepts: [
        { term: "número", meaning: "Arché propuesto por Pitágoras. Para los pitagóricos, los números no son solo herramientas matemáticas sino la estructura real del universo." },
        { term: "matemática", meaning: "Pitágoras creía que el cosmos tiene una estructura matemática: las cosas son o imitan números." },
        { term: "fuego", meaning: "Arché propuesto por Heráclito. Símbolo del cambio constante: el fuego nunca es idéntico, siempre está transformándose." },
        { term: "Heráclito", meaning: "Filósofo griego conocido como 'el oscuro' por la dificultad de sus textos. Propuso el fuego como arché y el devenir como ley de la realidad. Frase célebre: 'Nadie se baña dos veces en el mismo río'." },
        { term: "devenir", meaning: "El cambio constante de la realidad según Heráclito. Todo fluye (panta rhei): nada permanece idéntico a sí mismo. Es lo opuesto al ser inmutable de Parménides." },
        { term: "ser", meaning: "Concepto central de Parménides: 'el ser es y el no ser no es'. El ser es eterno, inmutable y uno. El cambio es apariencia." },
        { term: "Parménides", meaning: "Filósofo de la Escuela de Elea (siglo VI-V a.C.). Inauguró la metafísica occidental con su idea del ser inmutable y eterno. Su método: la razón (logos) es la única fuente de verdad." },
        { term: "metafísica", meaning: "Rama de la filosofía que estudia el ser como ser, más allá de la naturaleza física. Parménides la inaugura con su pregunta sobre qué significa 'ser'." },
        { term: "cambio", meaning: "Para Heráclito, la ley fundamental de la realidad. Para Parménides, una ilusión de los sentidos." },
        { term: "sentidos", meaning: "Para Parménides, los sentidos nos engañan al mostrarnos un mundo de cambios. Solo la razón puede conocer el ser verdadero, inmutable." },
      ],
      corollary: [
        "Pitágoras: el número es la estructura del cosmos.",
        "Heráclito: todo cambia (devenir). Nadie se baña dos veces en el mismo río.",
        "Parménides: solo el ser es real; el cambio es ilusión de los sentidos."
      ],
    },
  ],
};
