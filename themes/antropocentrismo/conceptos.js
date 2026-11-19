// themes/antropocentrismo/conceptos.js
// Caza de conceptos — Antropocentrismo: el ser humano en el centro
// v2.0 (2026-11-19): 8 niveles alineados con las 20 secciones del material
// (antes: 3 niveles y 11 conceptos); modelo de etica_aristoteles: sin negritas en
// el texto (el motor resalta los conceptos), términos con espacios y hay que
// encontrar todos los conceptos del párrafo para avanzar.

window.CONCEPT_HUNT_CONFIG = {
  author: "Antropocentrismo y humanismo",
  menuUrl: "tema.html?tema=antropocentrismo",
  levels: [
    {
      html: `
      <p>La palabra antropocentrismo viene del griego anthropos (ser humano) y kentron (centro). Es la doctrina que pone al ser humano como medida de todas las cosas y lo ubica en el centro del universo moral. Sus intereses y valores se consideran supremos, y se asume que la naturaleza existe para servir a los propósitos humanos. Durante siglos fue un marco indiscutido; hoy lo cuestionamos.</p>
      `,
      hint: "Identifica el origen de la palabra y qué afirma el antropocentrismo.",
      concepts: [
        { term: "antropocentrismo", meaning: "Doctrina que coloca al ser humano en el centro del universo y considera supremos sus intereses y valores." },
        { term: "anthropos", meaning: "Palabra griega que significa «ser humano»." },
        { term: "kentron", meaning: "Palabra griega que significa «centro»." },
        { term: "medida de todas las cosas", meaning: "Idea de que el ser humano es el criterio para valorar y conocer todo lo que existe." },
        { term: "universo moral", meaning: "El conjunto de seres que importan moralmente. El antropocentrismo pone al humano en su centro." },
        { term: "naturaleza", meaning: "El mundo natural. Para el antropocentrismo, existe para servir a los fines humanos." }
      ],
      corollary: [
        "Antropocentrismo: el ser humano como centro y medida.",
        "La naturaleza aparece al servicio del hombre."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>⛪ Del teocentrismo a la crisis</h4>
        <p>En la Edad Media dominaba el teocentrismo: Dios era el centro absoluto y la razón debía someterse a la fe. El saber era escolástica, filosofía al servicio de la teología, y cada uno tenía un lugar fijo en un orden jerárquico. Entre los siglos XIV y XV ese mundo se resquebrajó: creció la burguesía, la imprenta difundió el conocimiento y la Reforma protestante cuestionó a la Iglesia. Surgió así una crisis de autoridad.</p>
      </div>
      `,
      hint: "Busca qué se derrumbó y qué factores provocaron el cambio.",
      concepts: [
        { term: "teocentrismo", meaning: "Visión medieval que pone a Dios en el centro de todo: verdad, ley, arte y vida." },
        { term: "fe", meaning: "Creencia en la verdad revelada. En el teocentrismo, la razón debía subordinarse a ella." },
        { term: "escolástica", meaning: "Filosofía medieval enseñada en las escuelas y puesta al servicio de la teología." },
        { term: "orden jerárquico", meaning: "Organización fija de la sociedad medieval: Dios, Iglesia, rey, nobleza, pueblo." },
        { term: "burguesía", meaning: "Nueva clase de comerciantes urbanos que acumuló riqueza y poder independientes de la Iglesia." },
        { term: "imprenta", meaning: "Invento del siglo XV que multiplicó los libros y democratizó el conocimiento." },
        { term: "Reforma protestante", meaning: "Movimiento religioso del siglo XVI que rompió el monopolio de la Iglesia sobre la verdad." },
        { term: "crisis de autoridad", meaning: "Si Dios ya no era la única fuente de verdad, ¿quién lo era? La respuesta fue: el ser humano y su razón." }
      ],
      corollary: [
        "Del teocentrismo medieval a la centralidad humana.",
        "La crisis de autoridad abrió paso al antropocentrismo."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🎨 Renacimiento y humanismo</h4>
        <p>En el Renacimiento los pintores descubrieron la perspectiva, que organiza el espacio desde el punto de vista del observador, y el David de Miguel Ángel celebró la belleza del cuerpo humano. Pico della Mirandola escribió el Discurso sobre la dignidad del hombre: somos libres para autodeterminarnos. El humanismo renovó la educación con los studia humanitatis, que formaban ciudadanos en gramática, retórica, historia, poesía y filosofía moral.</p>
      </div>
      `,
      hint: "Identifica las expresiones artísticas y educativas del nuevo protagonismo humano.",
      concepts: [
        { term: "Renacimiento", meaning: "Período (siglos XIV-XVI) de florecimiento cultural centrado en el ser humano." },
        { term: "perspectiva", meaning: "Técnica pictórica que organiza el espacio desde la mirada del observador humano." },
        { term: "Miguel Ángel", meaning: "Artista renacentista; su David expresa la perfección, la fuerza y la belleza humanas." },
        { term: "Pico della Mirandola", meaning: "Humanista italiano autor del Discurso sobre la dignidad del hombre." },
        { term: "autodeterminarnos", meaning: "Decidir quiénes somos. Para Pico, el ser humano no tiene un lugar fijo: se hace a sí mismo." },
        { term: "humanismo", meaning: "Movimiento que pone en el centro la formación integral y la dignidad del ser humano." },
        { term: "studia humanitatis", meaning: "Estudios humanísticos (gramática, retórica, historia, poesía, filosofía moral) para formar ciudadanos." }
      ],
      corollary: [
        "El arte renacentista celebra al ser humano.",
        "El humanismo educa personas libres y responsables."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🔬 La Revolución Científica</h4>
        <p>En los siglos XVI y XVII la razón humana se impuso sobre la autoridad tradicional. Copérnico puso al Sol en el centro del universo, y Galileo usó el telescopio para mostrar que la observación vale más que el dogma. Descartes proclamó «pienso, luego existo» y vio la naturaleza como una máquina. Francis Bacon formuló el método inductivo y declaró que «saber es poder»: conocer la naturaleza sirve para dominarla.</p>
      </div>
      `,
      hint: "Busca los científicos y filósofos que pusieron la razón como medida del saber.",
      concepts: [
        { term: "Copérnico", meaning: "Astrónomo que colocó al Sol en el centro del universo, contra la enseñanza oficial." },
        { term: "Galileo", meaning: "Científico que observó el cielo con telescopio y fue juzgado por la Inquisición." },
        { term: "dogma", meaning: "Verdad que se impone sin discusión. La ciencia moderna la reemplaza por la observación." },
        { term: "Descartes", meaning: "Filósofo francés que hizo de la razón la base de toda certeza." },
        { term: "pienso, luego existo", meaning: "Frase de Descartes (cogito ergo sum): la primera certeza es el propio pensamiento." },
        { term: "método inductivo", meaning: "Método de Bacon: de las observaciones particulares se obtienen leyes generales." },
        { term: "saber es poder", meaning: "Lema de Bacon: el conocimiento sirve para dominar la naturaleza." }
      ],
      corollary: [
        "La razón humana se vuelve medida del conocimiento.",
        "Conocer la naturaleza es poder dominarla."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>💰 Individuo, economía y política</h4>
        <p>El antropocentrismo transformó la sociedad. Nació el capitalismo y, con él, el homo economicus, que actúa racionalmente para maximizar su beneficio. Surgió el individuo moderno, con nuevos derechos como la libertad de conciencia. En política, John Locke defendió los derechos naturales y el contrato social, y Rousseau afirmó que la legitimidad nace de la voluntad general: la soberanía popular reemplaza al derecho divino de los reyes.</p>
      </div>
      `,
      hint: "Identifica los cambios económicos, sociales y políticos.",
      concepts: [
        { term: "capitalismo", meaning: "Sistema económico basado en la propiedad privada, el mercado y la búsqueda de ganancias." },
        { term: "homo economicus", meaning: "Imagen del ser humano como alguien que actúa racionalmente para maximizar su beneficio personal." },
        { term: "individuo moderno", meaning: "Persona con identidad propia y derechos, ya no definida solo por su rol en la comunidad." },
        { term: "libertad de conciencia", meaning: "Derecho a pensar y creer por uno mismo." },
        { term: "contrato social", meaning: "Para Locke, el gobierno existe por acuerdo del pueblo, que consiente ser gobernado a cambio de protección." },
        { term: "soberanía popular", meaning: "El poder reside en el pueblo y no en el monarca." },
        { term: "derecho divino", meaning: "Idea medieval de que el rey recibe su poder de Dios." }
      ],
      corollary: [
        "El individuo y sus derechos pasan al centro.",
        "El poder ya no viene de Dios sino del pueblo."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🏭 Industria y colonialismo</h4>
        <p>La Revolución Industrial aplicó la ciencia a la producción y alimentó la ideología del progreso: la fe en que la técnica resolvería todos los problemas. El costo fue la contaminación y la alienación de los obreros. El antropocentrismo europeo también se expandió con la colonización, presentada como misión civilizadora. Su humanismo funcionó como eurocentrismo, y en la Controversia de Valladolid (1550) se discutió si los pueblos indígenas eran plenamente humanos.</p>
      </div>
      `,
      hint: "Busca la cara oscura del dominio humano sobre la naturaleza y sobre otros pueblos.",
      concepts: [
        { term: "Revolución Industrial", meaning: "Transformación de los siglos XVIII y XIX: máquinas, fábricas y uso masivo de la naturaleza como recurso." },
        { term: "progreso", meaning: "Creencia en que la historia avanza siempre a mejor gracias a la ciencia y la técnica." },
        { term: "alienación", meaning: "Situación del obrero que se siente convertido en una máquina, ajeno a su trabajo." },
        { term: "misión civilizadora", meaning: "Justificación colonial: llevar el progreso europeo a pueblos considerados primitivos." },
        { term: "eurocentrismo", meaning: "Tomar la cultura europea como modelo universal, desvalorizando a las demás." },
        { term: "Controversia de Valladolid", meaning: "Debate de 1550 entre Las Casas y Sepúlveda sobre la humanidad y los derechos de los indígenas." }
      ],
      corollary: [
        "El progreso técnico tuvo costos humanos y ambientales.",
        "El humanismo europeo fue excluyente con otros pueblos."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🌿 Las críticas</h4>
        <p>En 1962, Rachel Carson denunció en Primavera silenciosa los daños de los pesticidas. Aldo Leopold propuso una ética de la tierra y Arne Naess la ecología profunda, que reconoce valor a todos los seres vivos. Peter Singer extendió la consideración moral a los animales. Hoy se habla del Antropoceno, una era definida por el impacto humano en el planeta. El feminismo agrega que el antropocentrismo fue en realidad androcentrismo, y el ecofeminismo vincula la opresión de las mujeres con la destrucción de la naturaleza.</p>
      </div>
      `,
      hint: "Identifica las críticas ecológicas y feministas al antropocentrismo.",
      concepts: [
        { term: "Rachel Carson", meaning: "Bióloga autora de Primavera silenciosa (1962), sobre los efectos del pesticida DDT." },
        { term: "ética de la tierra", meaning: "Propuesta de Aldo Leopold: la naturaleza tiene valor propio y debemos preservar los ecosistemas." },
        { term: "ecología profunda", meaning: "Corriente de Arne Naess que reconoce igual valor a todos los seres vivos." },
        { term: "Peter Singer", meaning: "Filósofo que defiende considerar moralmente el sufrimiento de los animales." },
        { term: "Antropoceno", meaning: "Nueva era geológica marcada por el impacto humano: cambio climático y extinción de especies." },
        { term: "androcentrismo", meaning: "Poner al varón como medida de lo humano. Para el feminismo, el «hombre» universal era masculino." },
        { term: "ecofeminismo", meaning: "Corriente que une la crítica a la dominación de las mujeres con la crítica a la explotación de la naturaleza." }
      ],
      corollary: [
        "El dominio humano produjo una crisis planetaria.",
        "El «hombre» universal dejó fuera a muchos."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🪶 Otros caminos</h4>
        <p>Los pueblos originarios ofrecen alternativas: el Buen Vivir andino busca el equilibrio entre humanos, naturaleza y cosmos, y el Ubuntu africano afirma «yo soy porque nosotros somos». Ecuador y Bolivia reconocen en sus constituciones los derechos de la naturaleza. Al mismo tiempo, el transhumanismo propone mejorar al ser humano con tecnología, y el posthumanismo cuestiona la idea misma de lo humano. Algunos proponen un antropocentrismo crítico que avance hacia el ecocentrismo.</p>
      </div>
      `,
      hint: "Busca las alternativas al antropocentrismo y los debates sobre el futuro.",
      concepts: [
        { term: "Buen Vivir", meaning: "Sumak Kawsay andino: vivir en equilibrio y reciprocidad con la comunidad y la naturaleza." },
        { term: "Ubuntu", meaning: "Filosofía africana de la identidad relacional: «yo soy porque nosotros somos»." },
        { term: "derechos de la naturaleza", meaning: "Reconocimiento de que la Tierra tiene derechos propios, como en las constituciones de Ecuador y Bolivia." },
        { term: "transhumanismo", meaning: "Propuesta de mejorar al ser humano con tecnología: edición genética, implantes, extensión de la vida." },
        { term: "posthumanismo", meaning: "Corriente que cuestiona el concepto tradicional y excluyente de «humano»." },
        { term: "antropocentrismo crítico", meaning: "Postura que conserva la dignidad humana, pero con responsabilidad hacia el planeta y las futuras generaciones." },
        { term: "ecocentrismo", meaning: "Visión que pone en el centro a los ecosistemas y a toda la trama de la vida." }
      ],
      corollary: [
        "Hay otras formas de pensar la relación con la naturaleza.",
        "La pregunta ya no es qué podemos hacer, sino qué debemos hacer."
      ]
    }
  ]
};
