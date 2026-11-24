// themes/metodo/conceptos.js
// Caza de conceptos — El Método Filosófico: Duda, Diálogo y Crítica. Unidad I.
// v1.0 (2026-11-24): tema nuevo en la caza. 8 niveles en el orden del material v2.0,
//   sin negritas, términos literales y palabras «gemelas» emparejadas.

window.CONCEPT_HUNT_CONFIG = {
  author: "El método filosófico",
  menuUrl: "tema.html?tema=metodo",
  levels: [
    {
      html: `
      <p>La palabra método significa camino. La filosofía no tiene laboratorio: sus herramientas son las preguntas y los argumentos, y sobre todo la duda, el diálogo y la crítica.</p>
      `,
      hint: "Identificá qué es un método y las herramientas de la filosofía.",
      concepts: [
        { term: "método", meaning: "Del griego méthodos: camino para llegar a una meta." },
        { term: "camino", meaning: "Lo que significa la palabra método." },
        { term: "preguntas", meaning: "Herramienta básica de la filosofía." },
        { term: "argumentos", meaning: "Razones ordenadas para mostrar por qué algo es así." },
        { term: "duda", meaning: "Pone a prueba lo que creemos." },
        { term: "diálogo", meaning: "Pensar con otros." },
        { term: "crítica", meaning: "Revisa las razones y los límites de todo." }
      ],
      corollary: [
        "El método es un camino.",
        "Duda, diálogo y crítica: las tres herramientas."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>😲 Asombro y problema</h4>
        <p>La filosofía nace del asombro, el thaumázein. El primer paso es problematizar: convertir lo obvio en un problema con una pregunta radical y universal.</p>
      </div>
      `,
      hint: "Identificá de dónde nace la filosofía y cómo es una pregunta filosófica.",
      concepts: [
        { term: "asombro", meaning: "Detenerse ante lo obvio y preguntar por qué: origen de la filosofía." },
        { term: "thaumázein", meaning: "Palabra griega para el asombro." },
        { term: "problematizar", meaning: "Convertir algo obvio en un problema." },
        { term: "obvio", meaning: "Lo que todos dan por sabido sin preguntarse." },
        { term: "problema", meaning: "Una pregunta abierta que pide pensar." },
        { term: "radical", meaning: "Que va a la raíz." },
        { term: "universal", meaning: "Que vale para todos." }
      ],
      corollary: [
        "La filosofía empieza con el asombro.",
        "Una buena pregunta va a la raíz."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🤔 La duda</h4>
        <p>La duda escéptica concluye que no se puede conocer nada. La duda metódica de Descartes cuestiona todo para encontrar algo indudable, con la certeza de la matemática.</p>
      </div>
      `,
      hint: "Identificá los dos tipos de duda y qué buscaba Descartes.",
      concepts: [
        { term: "duda escéptica", meaning: "Concluye que no podemos conocer nada con certeza." },
        { term: "duda metódica", meaning: "Usa la duda como herramienta para encontrar algo firme." },
        { term: "Descartes", meaning: "Filósofo francés (1596–1650) de la duda metódica." },
        { term: "indudable", meaning: "Lo que resiste toda duda." },
        { term: "certeza", meaning: "Seguridad completa de que algo es verdadero." },
        { term: "matemática", meaning: "El modelo de claridad y seguridad para Descartes." }
      ],
      corollary: [
        "Dudar no es rendirse: es buscar algo firme.",
        "Descartes quería la certeza de la matemática."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🌀 Motivos para dudar</h4>
        <p>Los sentidos a veces nos engañan. No hay señal segura para distinguir la vigilia del sueño. Y un genio maligno podría confundirnos hasta al sumar. Pero hay algo que resiste: el cogito, pienso, luego existo.</p>
      </div>
      `,
      hint: "Identificá los tres motivos para dudar y la primera verdad.",
      concepts: [
        { term: "sentidos", meaning: "Primer motivo de duda: a veces nos engañan." },
        { term: "engañan", meaning: "Lo que a veces hacen los sentidos, como con el palo en el agua." },
        { term: "vigilia", meaning: "Estar despierto: no hay señal segura para distinguirla del sueño." },
        { term: "sueño", meaning: "Segundo motivo de duda: mientras soñamos, todo parece real." },
        { term: "genio maligno", meaning: "Tercer motivo: un ser poderoso que podría engañarnos siempre." },
        { term: "cogito", meaning: "Pienso, luego existo: la primera verdad de Descartes." }
      ],
      corollary: [
        "Lo que nos engañó una vez puede volver a engañarnos.",
        "Si dudo, pienso; si pienso, existo."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>📏 Las reglas</h4>
        <p>Las cuatro reglas del Discurso del método son evidencia, análisis, síntesis y enumeración: aceptar solo lo claro y distinto, dividir, ordenar de lo simple a lo complejo y revisar todo.</p>
      </div>
      `,
      hint: "Identificá la obra y las cuatro reglas.",
      concepts: [
        { term: "Discurso del método", meaning: "Obra de Descartes (1637) con sus cuatro reglas." },
        { term: "evidencia", meaning: "Aceptar solo lo que es claro y distinto." },
        { term: "análisis", meaning: "Dividir cada problema en partes." },
        { term: "síntesis", meaning: "Ordenar de lo simple a lo complejo." },
        { term: "enumeración", meaning: "Revisar todo al final para no omitir nada." },
        { term: "claro y distinto", meaning: "Rasgo de lo que se puede aceptar como verdadero." }
      ],
      corollary: [
        "Dividir y ordenar ayuda a pensar.",
        "Revisar al final evita errores."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>💬 El diálogo</h4>
        <p>Desde Sócrates, la filosofía conversa: esa es la dialéctica. Un buen intercambio exige escuchar, dar razones, aceptar objeciones y aplicar el principio de caridad: gana el mejor argumento.</p>
      </div>
      `,
      hint: "Identificá el origen del diálogo filosófico y sus reglas.",
      concepts: [
        { term: "Sócrates", meaning: "El filósofo que hizo filosofía conversando." },
        { term: "dialéctica", meaning: "El método de buscar la verdad dialogando." },
        { term: "escuchar", meaning: "Primera regla: atender de verdad antes de responder." },
        { term: "razones", meaning: "Lo que se da en un diálogo, en lugar de gritos o insultos." },
        { term: "objeciones", meaning: "Críticas de otros que ponen a prueba una idea." },
        { term: "principio de caridad", meaning: "Interpretar al otro de la mejor manera posible." },
        { term: "mejor argumento", meaning: "Lo que gana en un buen diálogo." }
      ],
      corollary: [
        "Pensar con otros muestra lo que no veíamos.",
        "En un buen diálogo gana el mejor argumento."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🧱 Argumentar</h4>
        <p>Un argumento tiene premisas y una conclusión. La deducción va de lo general a lo particular; la inducción generaliza a partir de casos. Una falacia parece correcta pero no lo es, como el ataque a la persona o el hombre de paja.</p>
      </div>
      `,
      hint: "Identificá las partes de un argumento, las formas de razonar y las falacias.",
      concepts: [
        { term: "argumento", meaning: "Razones ordenadas: premisas y conclusión." },
        { term: "premisas", meaning: "Las razones de las que se parte." },
        { term: "conclusión", meaning: "Lo que se quiere probar." },
        { term: "deducción", meaning: "De lo general a lo particular: conclusión segura." },
        { term: "inducción", meaning: "De los casos a lo general: conclusión probable." },
        { term: "falacia", meaning: "Razonamiento que parece correcto pero no lo es." },
        { term: "ataque a la persona", meaning: "Falacia ad hominem: critica a quien habla, no lo que dice." },
        { term: "hombre de paja", meaning: "Falacia que deforma lo que dijo el otro." }
      ],
      corollary: [
        "Opinar no es lo mismo que argumentar.",
        "Las falacias son trampas que parecen razones."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🔍 La crítica</h4>
        <p>Criticar viene de separar y juzgar. Kant resumió la Ilustración con el sapere aude, atrévete a pensar, para salir de la minoría de edad. Hoy el pensamiento crítico exige verificar fuentes y vigilar el sesgo de confirmación.</p>
      </div>
      `,
      hint: "Identificá qué es criticar, el lema de Kant y cómo se piensa críticamente hoy.",
      concepts: [
        { term: "Criticar", meaning: "Separar y juzgar lo que tiene fundamento de lo que no." },
        { term: "Kant", meaning: "Filósofo alemán de la Ilustración (siglo XVIII)." },
        { term: "Ilustración", meaning: "Movimiento del siglo XVIII que confió en la razón." },
        { term: "sapere aude", meaning: "¡Atrévete a pensar por ti mismo!" },
        { term: "minoría de edad", meaning: "Depender de que otros piensen por nosotros." },
        { term: "pensamiento crítico", meaning: "No creer cualquier cosa: pedir pruebas y verificar." },
        { term: "fuentes", meaning: "De dónde viene una información: hay que verificarlas." },
        { term: "sesgo de confirmación", meaning: "Creer solo lo que coincide con lo que ya pensamos." }
      ],
      corollary: [
        "Criticar es separar lo fundado de lo infundado.",
        "Pensar por uno mismo es salir de la minoría de edad."
      ]
    }
  ]
};
