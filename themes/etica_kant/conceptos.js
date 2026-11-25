// themes/etica_kant/conceptos.js
// Caza de conceptos — Ética Kantiana: Lo Bueno es lo que se Hace por Deber. Unidad III.
// v2.0 (2026-11-25): 8 niveles en el orden del material v2.0, sin negritas,
//   términos literales y palabras «gemelas» emparejadas.

window.CONCEPT_HUNT_CONFIG = {
  author: "Immanuel Kant",
  menuUrl: "tema.html?tema=etica_kant",
  levels: [
    {
      html: `
      <p>Immanuel Kant vivió siempre en Königsberg, en Prusia. Fue la gran figura de la Ilustración, cuyo lema es sapere aude: atrévete a pensar por ti mismo. Escribió la Fundamentación de la metafísica de las costumbres y la Crítica de la razón práctica.</p>
      `,
      hint: "Identificá quién fue Kant y sus obras.",
      concepts: [
        { term: "Kant", meaning: "Filósofo alemán (1724–1804)." },
        { term: "Königsberg", meaning: "Ciudad de Prusia donde vivió siempre." },
        { term: "Ilustración", meaning: "Movimiento del siglo XVIII que confía en la razón." },
        { term: "sapere aude", meaning: "Lema de la Ilustración: atrévete a pensar por ti mismo." },
        { term: "Fundamentación de la metafísica de las costumbres", meaning: "Obra de 1785 sobre la moral." },
        { term: "Crítica de la razón práctica", meaning: "Obra de 1788 sobre la moral." }
      ],
      corollary: [
        "Kant es el filósofo del deber.",
        "Pensar por uno mismo es el lema de la Ilustración."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🎯 Resultados y fines</h4>
        <p>Las corrientes teleológicas juzgan una acción por sus resultados, pero nadie puede predecir todo lo que va a pasar. Las éticas materiales buscan un fin: Aristóteles, la felicidad; Epicuro, el placer. Kant propone una ética formal, universal y necesaria.</p>
      </div>
      `,
      hint: "Identificá qué critica Kant y qué propone.",
      concepts: [
        { term: "teleológicas", meaning: "Corrientes que juzgan las acciones por sus consecuencias." },
        { term: "predecir", meaning: "Lo que no podemos hacer con todas las consecuencias." },
        { term: "éticas materiales", meaning: "Valoran las acciones según si consiguen un fin." },
        { term: "Epicuro", meaning: "Su ética busca el placer." },
        { term: "formal", meaning: "Así es la ética de Kant: se fija en la forma, no en un fin." },
        { term: "necesaria", meaning: "Vale siempre, sin excepción." }
      ],
      corollary: [
        "Kant no juzga por los resultados.",
        "Su ética no da recetas."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>💖 Buena voluntad y deber</h4>
        <p>Lo único bueno sin restricción es la buena voluntad. Un comerciante que no engaña a un niño para cuidar su fama actúa conforme al deber, pero por interés. Solo tiene valor moral actuar por respeto a la ley moral, no por inclinación ni por gusto.</p>
      </div>
      `,
      hint: "Identificá cuándo una acción tiene valor moral.",
      concepts: [
        { term: "buena voluntad", meaning: "Lo único bueno sin restricción." },
        { term: "comerciante", meaning: "Ejemplo de Kant: no engaña a un niño." },
        { term: "conforme al deber", meaning: "Acción correcta hecha por otro motivo." },
        { term: "interés", meaning: "Motivo del comerciante: cuidar su fama." },
        { term: "respeto", meaning: "Sentimiento ante la ley moral que mueve a actuar por deber." },
        { term: "inclinación", meaning: "Deseo o gusto que no da valor moral." }
      ],
      corollary: [
        "No alcanza con hacer lo correcto.",
        "Importa por qué lo hacemos."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>📝 Máximas e imperativos</h4>
        <p>La razón práctica guía nuestras acciones. Una máxima es la regla personal que me doy. Un imperativo es un mandato: el hipotético es condicional, como no robar por miedo al castigo; el categórico manda sin condiciones.</p>
      </div>
      `,
      hint: "Identificá las reglas y los mandatos.",
      concepts: [
        { term: "razón práctica", meaning: "La razón que guía nuestras acciones." },
        { term: "máxima", meaning: "Regla personal que sigue alguien al actuar." },
        { term: "imperativo", meaning: "Mandato de la razón." },
        { term: "hipotético", meaning: "Imperativo condicional: si querés X, hacé Y." },
        { term: "castigo", meaning: "Temerlo es actuar por imperativo hipotético." },
        { term: "categórico", meaning: "Imperativo que manda sin condiciones." }
      ],
      corollary: [
        "Con «si» o sin «si».",
        "El categórico vale para todos."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🌍 Ley universal</h4>
        <p>La primera fórmula pide obrar según una regla que pueda ser ley universal. Quien pide un préstamo con una promesa falsa no pasa la prueba: si todos lo hicieran, nadie confiaría en la palabra de otro y caería en contradicción. No vale la doble moral.</p>
      </div>
      `,
      hint: "Identificá la prueba de la universalidad.",
      concepts: [
        { term: "primera fórmula", meaning: "La del imperativo categórico que habla de ley universal." },
        { term: "ley universal", meaning: "Regla que valdría para todos." },
        { term: "préstamo", meaning: "Lo que se pide en el ejemplo de Kant." },
        { term: "promesa falsa", meaning: "Prometer devolver sabiendo que no se podrá." },
        { term: "contradicción", meaning: "La máxima se destruye a sí misma." },
        { term: "doble moral", meaning: "Pedir algo a todos y hacer una excepción conmigo." }
      ],
      corollary: [
        "¿Y si todos hicieran lo mismo?",
        "Mentir no puede ser ley para todos."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>👤 Fines y dignidad</h4>
        <p>La segunda fórmula manda tratar a la humanidad siempre como un fin y nunca solamente como un medio. Las cosas tienen precio y pueden reemplazarse; las personas tienen dignidad. En esa idea se basan los derechos humanos.</p>
      </div>
      `,
      hint: "Identificá por qué las personas no son herramientas.",
      concepts: [
        { term: "segunda fórmula", meaning: "La del imperativo categórico sobre la humanidad." },
        { term: "humanidad", meaning: "Hay que tratarla siempre como un fin." },
        { term: "medio", meaning: "Nunca hay que tratar a alguien solamente así." },
        { term: "precio", meaning: "Lo que tienen las cosas: pueden reemplazarse." },
        { term: "dignidad", meaning: "Lo que tienen las personas: no tienen equivalente." },
        { term: "derechos humanos", meaning: "Se basan en la idea de dignidad." }
      ],
      corollary: [
        "Personas, no herramientas.",
        "Todos somos igual de dignos."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🗽 Autonomía</h4>
        <p>La autonomía es darse a uno mismo la ley con la propia razón. En la heteronomía la ley viene de afuera: premios, castigos o deseos. En el reino de los fines todos son legisladores y súbditos. La moral exige postulados como la inmortalidad del alma.</p>
      </div>
      `,
      hint: "Identificá de dónde viene la ley moral.",
      concepts: [
        { term: "autonomía", meaning: "Darse a uno mismo la ley." },
        { term: "heteronomía", meaning: "La ley viene de afuera." },
        { term: "reino de los fines", meaning: "Comunidad ideal donde todos se tratan como fines." },
        { term: "legisladores", meaning: "Todos lo son en el reino de los fines." },
        { term: "postulados", meaning: "Supuestos que exige la moral: libertad, inmortalidad y Dios." },
        { term: "inmortalidad del alma", meaning: "Postulado: tiempo infinito para la perfección moral." }
      ],
      corollary: [
        "Autós y nómos: la ley propia.",
        "Todos legisladores, todos súbditos."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🔪 Dilema y críticas</h4>
        <p>Ante un asesino que pregunta por tu amigo, Kant sostiene que no hay que mentir: su rigorismo no admite excepciones. Los críticos señalan los conflictos de deberes y el formalismo. Kant admiraba el cielo estrellado sobre él y la ley moral en él.</p>
      </div>
      `,
      hint: "Identificá el dilema, las críticas y la frase final.",
      concepts: [
        { term: "asesino", meaning: "Pregunta dónde se esconde tu amigo." },
        { term: "mentir", meaning: "Kant dice que no hay que hacerlo ni en ese caso." },
        { term: "rigorismo", meaning: "Ética tan estricta que no admite excepciones." },
        { term: "conflictos de deberes", meaning: "Cuando un deber choca con otro." },
        { term: "formalismo", meaning: "Crítica de Hegel: dice cómo, no qué." },
        { term: "cielo estrellado", meaning: "Lo que, junto a la ley moral, llenaba de admiración a Kant." }
      ],
      corollary: [
        "¿Decir siempre la verdad?",
        "El cielo estrellado y la ley moral."
      ]
    }
  ]
};
