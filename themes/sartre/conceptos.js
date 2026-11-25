// themes/sartre/conceptos.js
// Caza de conceptos — Jean-Paul Sartre: El ser humano es libertad. Unidad II.
// v2.0 (2026-11-25): 8 niveles en el orden del material v2.0 (antes 6 con negritas),
//   sin negritas, términos literales y palabras «gemelas» emparejadas.

window.CONCEPT_HUNT_CONFIG = {
  author: "Jean-Paul Sartre",
  menuUrl: "tema.html?tema=sartre",
  levels: [
    {
      html: `
      <p>Jean-Paul Sartre fue un filósofo y novelista francés, figura del existencialismo. Escribió La náusea y El ser y la nada, compartió su vida con Simone de Beauvoir y rechazó el Premio Nobel.</p>
      `,
      hint: "Identificá quién fue Sartre y sus obras.",
      concepts: [
        { term: "Sartre", meaning: "Filósofo y escritor francés (1905–1980)." },
        { term: "existencialismo", meaning: "Filosofía que pone en el centro la existencia concreta y la libertad." },
        { term: "La náusea", meaning: "Novela de Sartre." },
        { term: "El ser y la nada", meaning: "Gran obra filosófica de Sartre (1943)." },
        { term: "Simone de Beauvoir", meaning: "Filósofa francesa, compañera de Sartre." },
        { term: "Premio Nobel", meaning: "Premio de Literatura que Sartre rechazó en 1964." }
      ],
      corollary: [
        "Sartre es el filósofo de la libertad.",
        "El existencialismo mira la existencia concreta."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>✂️ Existencia y esencia</h4>
        <p>Un artesano piensa el cortapapeles antes de fabricarlo. En el ser humano es al revés: como Sartre es ateo, no hay naturaleza humana previa, y la existencia precede a la esencia.</p>
      </div>
      `,
      hint: "Identificá la diferencia entre el objeto y el ser humano.",
      concepts: [
        { term: "artesano", meaning: "Piensa qué es y para qué sirve el objeto antes de fabricarlo." },
        { term: "cortapapeles", meaning: "Objeto cuya esencia precede a su existencia." },
        { term: "ateo", meaning: "Sartre no cree en un Dios creador." },
        { term: "naturaleza humana", meaning: "Una esencia previa que, para Sartre, no existe." },
        { term: "la existencia precede a la esencia", meaning: "Primero existimos, después nos definimos." }
      ],
      corollary: [
        "Los objetos se definen antes de existir; nosotros, después.",
        "Sin Dios creador, no hay naturaleza humana previa."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>📝 Proyecto y libertad</h4>
        <p>El ser humano es un proyecto que se hace con sus actos. Está condenado a ser libre: no eligió nacer, pero es responsable de todo, y no elegir también es elegir.</p>
      </div>
      `,
      hint: "Identificá qué es el ser humano y por qué está condenado a ser libre.",
      concepts: [
        { term: "proyecto", meaning: "Algo que se lanza al futuro y se va haciendo." },
        { term: "actos", meaning: "Con ellos nos hacemos valientes, generosos o cobardes." },
        { term: "condenado a ser libre", meaning: "No elegimos nacer, pero no podemos dejar de elegir." },
        { term: "responsable", meaning: "Debemos responder por lo que hacemos." },
        { term: "no elegir", meaning: "También es una elección." }
      ],
      corollary: [
        "Somos lo que hacemos.",
        "No podemos devolver la libertad."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🌍 Responsabilidad y angustia</h4>
        <p>Al elegirme elijo una imagen del ser humano: soy responsable de todos. Eso produce angustia, como la del jefe militar que manda soldados al ataque, pero la angustia es condición de la acción.</p>
      </div>
      `,
      hint: "Identificá el alcance de la responsabilidad y qué es la angustia.",
      concepts: [
        { term: "imagen del ser humano", meaning: "Lo que proponemos con nuestras elecciones." },
        { term: "responsable de todos", meaning: "Al elegirme, elijo al hombre." },
        { term: "angustia", meaning: "El vértigo de saber que todo depende de mi elección." },
        { term: "jefe militar", meaning: "Ejemplo de Sartre: de su orden dependen muchas vidas." },
        { term: "acción", meaning: "La angustia no paraliza: es su condición." }
      ],
      corollary: [
        "Elegir es proponer una forma de ser humano.",
        "La angustia acompaña a la libertad."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🏚️ Desamparo y desesperación</h4>
        <p>Sin Dios no hay valores escritos: es el desamparo, como el del alumno que dudaba entre la resistencia y su madre. La desesperación es actuar sin esperanza, contando con nuestra voluntad.</p>
      </div>
      `,
      hint: "Identificá qué son el desamparo y la desesperación.",
      concepts: [
        { term: "Dios", meaning: "Para Sartre no existe: no hay valores escritos de antemano." },
        { term: "desamparo", meaning: "Estar solos para elegir, sin excusas." },
        { term: "resistencia", meaning: "Lo que el alumno podía elegir, en lugar de cuidar a su madre." },
        { term: "madre", meaning: "La otra opción del alumno de Sartre." },
        { term: "desesperación", meaning: "Actuar sin garantías." },
        { term: "sin esperanza", meaning: "Obrar sin contar con que todo salga bien." },
        { term: "voluntad", meaning: "Lo único con lo que podemos contar." }
      ],
      corollary: [
        "Nadie elige por nosotros.",
        "Hay que actuar aunque no haya garantías."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🎭 Mala fe</h4>
        <p>La mala fe es un autoengaño para huir de la libertad, como el mozo de café que actúa como una cosa. El ser en-sí es el de las cosas; el ser para-sí, el de la conciencia libre.</p>
      </div>
      `,
      hint: "Identificá la mala fe y los dos modos de ser.",
      concepts: [
        { term: "mala fe", meaning: "Mentirse a uno mismo para no hacerse cargo de la libertad." },
        { term: "autoengaño", meaning: "Engañarse a sí mismo." },
        { term: "mozo de café", meaning: "Ejemplo de Sartre: actúa como si no pudiera ser otra cosa." },
        { term: "ser en-sí", meaning: "El de las cosas: completo, sin posibilidades." },
        { term: "ser para-sí", meaning: "El de la conciencia: abierta y libre." },
        { term: "conciencia", meaning: "Nunca coincide del todo consigo misma." }
      ],
      corollary: [
        "«Yo soy así» es una excusa.",
        "No somos cosas: somos conciencia libre."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>👀 Los otros</h4>
        <p>Cuando alguien me mira siento vergüenza: me ve como un objeto. En A puerta cerrada, Sartre escribe que el infierno son los otros, porque su mirada puede volverse una prisión.</p>
      </div>
      `,
      hint: "Identificá qué produce la mirada del otro.",
      concepts: [
        { term: "mira", meaning: "La mirada del otro me descubre desde afuera." },
        { term: "vergüenza", meaning: "Lo que siento al verme juzgado." },
        { term: "objeto", meaning: "Así me ve el otro." },
        { term: "A puerta cerrada", meaning: "Obra de teatro de Sartre." },
        { term: "el infierno son los otros", meaning: "Frase sobre la mirada y el juicio ajeno." },
        { term: "prisión", meaning: "Lo que puede volverse vivir pendientes de los demás." }
      ],
      corollary: [
        "Me veo a mí mismo a través del otro.",
        "La mirada ajena puede encerrarnos."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🌟 Compromiso y autenticidad</h4>
        <p>El existencialismo es una filosofía de la acción y del compromiso. La autenticidad es asumir la libertad sin excusas. Por eso es un humanismo optimista: el destino está en nuestras manos.</p>
      </div>
      `,
      hint: "Identificá la propuesta positiva de Sartre.",
      concepts: [
        { term: "filosofía de la acción", meaning: "Somos lo que hacemos, no lo que pensamos hacer." },
        { term: "compromiso", meaning: "Tomar partido ante los problemas del propio tiempo." },
        { term: "autenticidad", meaning: "Asumir la libertad y hacerse cargo." },
        { term: "excusas", meaning: "Lo que la persona auténtica no usa." },
        { term: "humanismo", meaning: "El ser humano se supera y se inventa a sí mismo." },
        { term: "optimista", meaning: "Porque el destino está en nuestras manos." }
      ],
      corollary: [
        "La salida de la mala fe es la autenticidad.",
        "No hay nada escrito: todo está por hacer."
      ]
    }
  ]
};
