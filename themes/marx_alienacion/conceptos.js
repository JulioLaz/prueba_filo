// themes/marx_alienacion/conceptos.js
// Caza de conceptos — Karl Marx: El Trabajo y la Alienación. Unidad II.
// v1.0 (2026-11-25): tema nuevo. 8 niveles en el orden del material, sin negritas,
//   términos literales y palabras «gemelas» emparejadas.

window.CONCEPT_HUNT_CONFIG = {
  author: "Karl Marx",
  menuUrl: "tema.html?tema=marx_alienacion",
  levels: [
    {
      html: `
      <p>Karl Marx fue un filósofo y economista alemán. Escribió los Manuscritos de 1844 y El capital, y en una tesis sobre Feuerbach pidió no solo interpretar el mundo, sino transformarlo.</p>
      `,
      hint: "Identificá quién fue Marx, sus obras y su famosa tesis.",
      concepts: [
        { term: "Karl Marx", meaning: "Filósofo y economista alemán (1818–1883)." },
        { term: "economista", meaning: "Estudió cómo se produce y distribuye la riqueza." },
        { term: "Manuscritos de 1844", meaning: "Obra donde Marx desarrolla la alienación del trabajo." },
        { term: "El capital", meaning: "Gran obra de Marx (1867) sobre la economía capitalista." },
        { term: "Feuerbach", meaning: "Filósofo al que Marx dedicó sus tesis." },
        { term: "interpretar", meaning: "Lo que, según Marx, hicieron los filósofos hasta entonces." },
        { term: "transformarlo", meaning: "Lo que hay que hacer con el mundo, según Marx." }
      ],
      corollary: [
        "La filosofía de Marx quiere cambiar el mundo.",
        "El capital y los Manuscritos son sus obras clave."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>❓ La alienación</h4>
        <p>Frente al idealismo, Marx parte de la praxis material. La alienación ocurre cuando las creaciones humanas escapan a nuestro control y se vuelven contra nosotros como potencias extrañas.</p>
      </div>
      `,
      hint: "Identificá el punto de partida de Marx y qué es la alienación.",
      concepts: [
        { term: "idealismo", meaning: "Explicar la historia desde las ideas, como Hegel." },
        { term: "praxis material", meaning: "La actividad concreta con la que producimos nuestra vida." },
        { term: "alienación", meaning: "Volverse extraño: lo que hacemos nos domina." },
        { term: "creaciones humanas", meaning: "Objetos, instituciones e ideas que producimos." },
        { term: "control", meaning: "Lo que perdemos sobre nuestras creaciones." },
        { term: "potencias extrañas", meaning: "Así se nos presentan nuestras creaciones alienadas." }
      ],
      corollary: [
        "Primero la vida material, después las ideas.",
        "En la alienación, lo nuestro se vuelve ajeno."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🛠️ El trabajo</h4>
        <p>El trabajo es el metabolismo entre el ser humano y la naturaleza. Producimos de manera libre y consciente. En la objetivación plasmamos nuestras capacidades, y el producto es un espejo de nuestro ser genérico.</p>
      </div>
      `,
      hint: "Identificá qué es el trabajo humano para Marx.",
      concepts: [
        { term: "trabajo", meaning: "La actividad que nos hace humanos." },
        { term: "metabolismo", meaning: "Intercambio entre el ser humano y la naturaleza." },
        { term: "naturaleza", meaning: "Lo que transformamos al trabajar." },
        { term: "objetivación", meaning: "Plasmar nuestras capacidades en un objeto." },
        { term: "espejo", meaning: "Así es el producto cuando el trabajo es libre." },
        { term: "ser genérico", meaning: "Nuestra condición de especie que coopera y crea." }
      ],
      corollary: [
        "El trabajo libre nos hace humanos.",
        "En el producto podemos reconocernos."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>💰 El capitalismo</h4>
        <p>En el capitalismo hay propiedad privada de los medios de producción. Los obreros venden su fuerza de trabajo por un salario, y su actividad se vuelve trabajo enajenado.</p>
      </div>
      `,
      hint: "Identificá cómo se organiza la producción en el capitalismo.",
      concepts: [
        { term: "capitalismo", meaning: "Sistema basado en la propiedad privada de los medios de producción." },
        { term: "propiedad privada", meaning: "Fábricas y máquinas tienen dueños particulares." },
        { term: "medios de producción", meaning: "Fábricas, máquinas y tierras." },
        { term: "obreros", meaning: "Los que solo tienen su fuerza de trabajo." },
        { term: "fuerza de trabajo", meaning: "Lo que el obrero vende." },
        { term: "salario", meaning: "Lo que recibe el obrero a cambio." },
        { term: "trabajo enajenado", meaning: "El trabajo que deja de ser propio." }
      ],
      corollary: [
        "El obrero vende su fuerza de trabajo.",
        "Sin control de su obra, el trabajo se enajena."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>📦 Las cuatro alienaciones</h4>
        <p>El obrero está alienado del producto, que no le pertenece; de la actividad, que vive como obligación; de su ser genérico, porque la vida se vuelve un medio; y de los demás, con quienes compite.</p>
      </div>
      `,
      hint: "Identificá las cuatro formas de alienación.",
      concepts: [
        { term: "producto", meaning: "Lo que el obrero fabrica y no le pertenece." },
        { term: "actividad", meaning: "El acto de trabajar, vivido como obligación." },
        { term: "obligación", meaning: "Así se vive el trabajo alienado." },
        { term: "ser genérico", meaning: "Se pierde cuando el trabajo es solo para sobrevivir." },
        { term: "medio", meaning: "En qué se convierte la vida: un instrumento para sobrevivir." },
        { term: "compite", meaning: "Lo que hace el obrero con los demás en vez de cooperar." }
      ],
      corollary: [
        "Cuatro alienaciones: producto, actividad, especie y otros.",
        "La vida se vuelve un medio para sobrevivir."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🏛️ Política y religión</h4>
        <p>En la alienación política el Estado aparece separado de la sociedad civil: somos iguales como ciudadanos pero desiguales en clases. Feuerbach vio a Dios como proyección humana, y Marx habló del opio del pueblo.</p>
      </div>
      `,
      hint: "Identificá la alienación política y la religiosa.",
      concepts: [
        { term: "alienación política", meaning: "Igualdad ante el Estado, desigualdad en la vida real." },
        { term: "Estado", meaning: "Aparato que concentra el poder colectivo." },
        { term: "sociedad civil", meaning: "La vida real, dividida en clases." },
        { term: "ciudadanos", meaning: "Así somos iguales ante la ley." },
        { term: "clases", meaning: "Grupos desiguales de la sociedad." },
        { term: "Feuerbach", meaning: "Mostró que Dios es una proyección humana." },
        { term: "proyección", meaning: "Poner en Dios lo mejor de nosotros." },
        { term: "opio del pueblo", meaning: "La religión como analgésico del sufrimiento." }
      ],
      corollary: [
        "Iguales en la ley, desiguales en la vida.",
        "La religión calma el dolor, pero no cura sus causas."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🏷️ El fetichismo</h4>
        <p>En El capital, el fetichismo de la mercancía hace que las relaciones entre personas aparezcan como relaciones entre cosas: precios, marcas y valores de cambio.</p>
      </div>
      `,
      hint: "Identificá qué oculta el fetichismo de la mercancía.",
      concepts: [
        { term: "fetichismo de la mercancía", meaning: "Las cosas parecen tener valor por sí mismas." },
        { term: "relaciones entre personas", meaning: "Lo que queda oculto detrás de los productos." },
        { term: "relaciones entre cosas", meaning: "Lo que vemos en el mercado." },
        { term: "precios", meaning: "Valor expresado en dinero." },
        { term: "marcas", meaning: "Nombres que dan prestigio a los productos." },
        { term: "valores de cambio", meaning: "Lo que vale una mercancía en el mercado." }
      ],
      corollary: [
        "Detrás de cada producto hay trabajo humano.",
        "Las cosas ocultan las relaciones entre personas."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>📱 Alienación hoy</h4>
        <p>Hoy la alienación aparece en las plataformas que controlan con algoritmos y calificaciones, en el consumo y las redes, y en el emprendedor de sí mismo que, según Byung-Chul Han, se autoexplota hasta el cansancio.</p>
      </div>
      `,
      hint: "Identificá las formas actuales de alienación.",
      concepts: [
        { term: "plataformas", meaning: "Aplicaciones que organizan trabajos como el reparto." },
        { term: "algoritmos", meaning: "Programas que asignan tareas y controlan." },
        { term: "calificaciones", meaning: "Puntajes con los que se evalúa al trabajador." },
        { term: "consumo", meaning: "Hoy, una forma de identidad." },
        { term: "emprendedor de sí mismo", meaning: "Quien se exige como si fuera su propia empresa." },
        { term: "Byung-Chul Han", meaning: "Filósofo de La sociedad del cansancio." },
        { term: "autoexplota", meaning: "Se exige rendir cada vez más." },
        { term: "cansancio", meaning: "Síntoma de la autoexplotación." }
      ],
      corollary: [
        "La alienación cambia de forma, pero sigue presente.",
        "Hoy podemos explotarnos a nosotros mismos."
      ]
    }
  ]
};
