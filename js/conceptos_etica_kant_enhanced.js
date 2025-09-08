// js/conceptos_etica_kant_enhanced.js
// Configuración mejorada con significados contextualizados y ampliados

window.CONCEPT_HUNT_CONFIG = {
  author: "Immanuel Kant",
  menuUrl: "https://juliolaz.github.io/prueba_filo/quiz.html?tema=etica_kant&theme=etica_kant",
  
  // Niveles con destacado gradual y significados enriquecidos
  levels: [
    {
      html: `
      <p>La ética de Kant se conoce como <strong>ética-deontológica</strong>, del griego <em>deon</em>, que significa 'deber'. Kant no se enfoca en las <strong>consecuencias</strong> de las acciones, sino en la <strong>intención</strong> y el <strong>deber</strong>. Para él, una acción es moralmente buena si se realiza por respeto al deber, no por inclinación o por buscar un resultado favorable. La única cosa buena sin restricción es una <strong>buena-voluntad</strong>.</p>
      `,
      hint: "Identifica cómo Kant fundamenta la moralidad en el deber y la intención, no en las consecuencias.",
      advanceAfter: 3, // De 5 conceptos, permitir avanzar con 3
      concepts: [
        { 
          term: "ética-deontológica", 
          meaning: "📜 ÉTICA DEONTOLÓGICA (del griego deon = deber): Teoría ética que juzga la moralidad de una acción basándose en el cumplimiento del deber o las reglas morales, no en sus consecuencias. Desarrollada por Kant en oposición al utilitarismo, sostiene que hay acciones intrínsecamente correctas o incorrectas independientemente de sus resultados. En este párrafo, se contrapone explícitamente al enfoque consecuencialista.",
          priority: 10
        },
        { 
          term: "consecuencias", 
          meaning: "⚡ CONSECUENCIAS: Los resultados o efectos de una acción. Para Kant, las consecuencias son irrelevantes para determinar el valor moral de un acto porque están fuera de nuestro control completo y pueden ser impredecibles. Lo que importa moralmente es la intención con que actuamos. En este párrafo, representan lo que la ética kantiana explícitamente rechaza como criterio moral.",
          priority: 8
        },
        { 
          term: "intención", 
          meaning: "🎯 INTENCIÓN: El motivo o razón interna que impulsa una acción. Para Kant, es lo único que determina el valor moral de un acto porque es lo único completamente bajo nuestro control. Una acción es moral solo si se hace 'por deber', no por inclinación, miedo, o búsqueda de beneficio. En este párrafo, se establece como el criterio central de evaluación moral.",
          priority: 10
        },
        { 
          term: "deber", 
          meaning: "⚖️ DEBER (Pflicht): La obligación moral incondicional de actuar según la ley moral, independientemente de nuestras inclinaciones, deseos o las consecuencias esperadas. El deber surge de la razón práctica pura y es universal para todos los seres racionales. Actuar 'por deber' significa actuar por respeto a la ley moral, no por otros motivos. En este párrafo, aparece como el fundamento último de la moralidad.",
          priority: 10
        },
        { 
          term: "buena-voluntad", 
          meaning: "💎 BUENA VOLUNTAD (guter Wille): La única cosa que es buena en sí misma, sin ninguna restricción o condición. Es la voluntad que actúa exclusivamente por respeto al deber moral, sin mezcla de inclinaciones o intereses. Ni el talento, ni la fortuna, ni la felicidad son buenos sin restricción porque pueden usarse para el mal, pero la buena voluntad conserva su valor incluso si fracasa en lograr sus propósitos. En este párrafo, representa el único bien moral absoluto.",
          priority: 10
        }
      ],
      corollary: [
        "La ética kantiana juzga las acciones por la intención (deber) con que se realizan, no por sus consecuencias.",
        "La buena voluntad es el único bien moral absoluto porque actúa exclusivamente por respeto al deber."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>📜 El Imperativo Categórico</h4>
        <p>El principio central de la ética de Kant es el <strong>imperativo-categórico</strong>. Este es un mandato universal y absoluto de la <strong>razón</strong> que debemos seguir sin excepciones. Su primera formulación es: "Actúa solo según una <strong>máxima</strong> tal que puedas querer al mismo tiempo que se convierta en <strong>ley-universal</strong>". Esto significa que una acción solo es moral si quisiéramos que todas las personas, en todas las situaciones similares, la siguieran. Es el <strong>test-de-universalización</strong> que distingue lo moral de lo inmoral.</p>
      </div>
      `,
      hint: "Comprende el principio moral fundamental de Kant y cómo funciona como test de moralidad.",
      advanceAfter: 3, // De 5 conceptos, permitir avanzar con 3
      concepts: [
        { 
          term: "imperativo-categórico", 
          meaning: "👑 IMPERATIVO CATEGÓRICO (kategorischer Imperativ): Principio moral incondicional y universal que nos obliga a actuar de cierta manera sin importar las consecuencias o nuestros deseos. Es 'categórico' (no hipotético) porque no depende de condiciones como 'si quieres X, entonces haz Y'. Es la ley moral fundamental de la razón práctica pura. En este párrafo, aparece como el mandato supremo que gobierna toda acción moral.",
          priority: 10
        },
        { 
          term: "razón", 
          meaning: "🧠 RAZÓN PRÁCTICA: La facultad que nos permite conocer y seguir principios morales universales. Para Kant, la razón práctica pura (libre de influencias empíricas) puede descubrir por sí misma la ley moral. Es lo que nos hace seres autónomos capaces de autolegislación moral. En este párrafo, aparece como la fuente del imperativo categórico.",
          priority: 9
        },
        { 
          term: "máxima", 
          meaning: "📝 MÁXIMA: El principio subjetivo que guía una acción particular. Es la regla personal que seguimos cuando actuamos, formulada como 'en la situación S, haré A para lograr F'. Por ejemplo: 'cuando necesite dinero, pediré prestado prometiendo devolver aunque no pueda hacerlo'. En este párrafo, es lo que debe someterse al test de universalización.",
          priority: 10
        },
        { 
          term: "ley-universal", 
          meaning: "🌍 LEY UNIVERSAL: Una regla que se aplica necesariamente a todos los seres racionales en todas las situaciones relevantes similares. El test kantiano pregunta: ¿podría mi máxima convertirse en ley universal sin contradicción lógica o práctica? Si sí, la acción es permisible; si no, es inmoral. En este párrafo, representa el criterio de universalidad que toda acción moral debe satisfacer.",
          priority: 10
        },
        { 
          term: "test-de-universalización", 
          meaning: "🔍 TEST DE UNIVERSALIZACIÓN: Procedimiento kantiano para determinar la moralidad de una acción: (1) formular la máxima de la acción, (2) universalizarla ('que todos actúen así'), (3) verificar si es posible sin contradicción, (4) verificar si se puede querer racionalmente. Si pasa ambas pruebas, la acción es moral. En este párrafo, operacionaliza el imperativo categórico como método práctico.",
          priority: 9
        }
      ],
      corollary: [
        "El imperativo categórico es la ley moral universal que distingue lo correcto de lo incorrecto mediante el test de universalización.",
        "Una máxima es moral si puede convertirse en ley universal sin contradicción lógica o práctica."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🤝 La Humanidad como Fin en Sí Misma</h4>
        <p>Una segunda formulación del imperativo categórico dice: "Actúa de tal modo que uses a la <strong>humanidad</strong>, tanto en tu persona como en la persona de cualquier otro, siempre al mismo tiempo como un <strong>fin</strong> y nunca simplemente como un <strong>medio</strong>". Esto nos enseña que cada persona tiene una <strong>dignidad</strong> infinita como ser <strong>racional</strong> y no puede ser utilizada como un simple objeto para lograr nuestros fines. Esto es la base de los derechos humanos y del respeto incondicional que debemos a los demás.</p>
      </div>
      `,
      hint: "Explora cómo Kant fundamenta la dignidad humana y el respeto mutuo en la racionalidad.",
      advanceAfter: 4, // De 5 conceptos, permitir avanzar con 4
      concepts: [
        { 
          term: "humanidad", 
          meaning: "👥 HUMANIDAD: Para Kant, no se refiere a la especie biológica sino a la capacidad racional que nos permite ser seres morales autónomos. Es la 'personalidad moral' que nos capacita para seguir principios por respeto al deber, no por instinto. Esta capacidad racional es lo que nos da dignidad y nos convierte en 'fines en sí mismos'. En este párrafo, abarca tanto uno mismo como los demás.",
          priority: 10
        },
        { 
          term: "fin", 
          meaning: "🎯 FIN EN SÍ MISMO: Algo que tiene valor intrínseco e incondicional, que se valora por sí mismo y no como medio para otra cosa. Para Kant, solo los seres racionales son fines en sí mismos porque pueden actuar según principios autoimpuestos. Esto significa que tienen derechos inherentes que no pueden ser violados incluso para producir mayor bien general. En este párrafo, define el estatus moral único de las personas.",
          priority: 10
        },
        { 
          term: "medio", 
          meaning: "🔧 MEDIO: Algo que se utiliza para lograr otro propósito y cuyo valor depende de su utilidad instrumental. Tratar a alguien 'meramente como medio' significa usarlo como herramienta sin reconocer su dignidad. Esto no prohíbe toda instrumentalización (podemos contratar servicios) sino la instrumentalización que ignora la dignidad de la persona. En este párrafo, representa el trato moralmente prohibido hacia otros.",
          priority: 9
        },
        { 
          term: "dignidad", 
          meaning: "👑 DIGNIDAD (Würde): El valor intrínseco e incondicional que cada ser racional posee simplemente por su capacidad de autonomía moral. A diferencia del 'precio' (valor condicional e intercambiable), la dignidad es absoluta e incomparable. No puede perderse por mal comportamiento ni ganarse por méritos: es inherente a la naturaleza racional. En este párrafo, fundamenta los derechos humanos universales.",
          priority: 10
        },
        { 
          term: "racional", 
          meaning: "🧠 SER RACIONAL: Entidad capaz de actuar según principios universales autoimpuestos, no meramente según instintos o condicionamientos. La racionalidad práctica (no solo teórica) es lo que nos permite ser morales: podemos preguntarnos 'qué debo hacer' y actuar según la respuesta. En este párrafo, es la característica que confiere dignidad y estatus moral especial.",
          priority: 9
        }
      ],
      corollary: [
        "La segunda formulación del imperativo categórico prohíbe tratar a las personas meramente como medios para nuestros fines.",
        "La dignidad humana se basa en nuestra capacidad racional para la autonomía moral, no en características empíricas."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🗳️ Autonomía y Autolegislación Moral</h4>
        <p>Para Kant, los seres racionales somos <strong>autónomos</strong> porque podemos darnos nuestras propias leyes morales a través de la razón. La <strong>autonomía</strong> es la capacidad de actuar según principios que nosotros mismos reconocemos como válidos, no por imposición externa. Esto contrasta con la <strong>heteronomía</strong>, donde actuamos según principios impuestos desde fuera (autoridad, tradición, consecuencias). La autonomía moral es lo que nos hace libres y responsables, capaces de <strong>autolegislación</strong> en el reino de los fines.</p>
      </div>
      `,
      hint: "Comprende cómo Kant conecta libertad, autonomía y responsabilidad moral.",
      advanceAfter: 3, // De 4 conceptos, permitir avanzar con 3
      concepts: [
        { 
          term: "autónomos", 
          meaning: "🗽 AUTONOMÍA (del griego autos = uno mismo + nomos = ley): La capacidad de darse a uno mismo las leyes morales mediante el uso de la razón práctica pura. No significa hacer lo que se quiere (eso sería libertinaje) sino actuar según principios universales que uno mismo reconoce como válidos. La autonomía moral es lo que nos hace verdaderamente libres y dignos de respeto. En este párrafo, define la característica esencial de los seres morales.",
          priority: 10
        },
        { 
          term: "autonomía", 
          meaning: "👑 AUTONOMÍA MORAL: La propiedad de la voluntad por la cual es ley para sí misma, independientemente de cualquier objeto de volición. Significa que podemos actuar según principios que nosotros mismos nos damos a través de la razón, no por impulsos, amenazas o promesas. Es la condición de posibilidad de la moralidad y la libertad genuina. En este párrafo, se contrasta con la heteronomía como forma superior de acción.",
          priority: 10
        },
        { 
          term: "heteronomía", 
          meaning: "⛓️ HETERONOMÍA (del griego heteros = otro + nomos = ley): Condición en la que actuamos según principios impuestos desde fuera de nuestra razón: autoridad religiosa, tradición cultural, consecuencias deseadas, inclinaciones naturales. Aunque estas fuentes puedan ser buenas, actuar por ellas no es genuinamente moral porque no ejercemos nuestra autonomía racional. En este párrafo, representa la forma inferior y no-moral de determinación de la acción.",
          priority: 8
        },
        { 
          term: "autolegislación", 
          meaning: "📜 AUTOLEGISLACIÓN: La capacidad de crear leyes morales universales para uno mismo mediante el uso de la razón práctica pura. No significa relativismo (cada uno hace sus reglas) sino que todos los seres racionales, usando correctamente la razón, llegarán a las mismas leyes morales universales. Es el ejercicio activo de la autonomía moral. En este párrafo, describe la actividad central del ser moral autónomo.",
          priority: 9
        }
      ],
      corollary: [
        "La autonomía moral es la capacidad de actuar según leyes que nos damos a nosotros mismos mediante la razón.",
        "La heteronomía (actuar por imposición externa) es incompatible con la verdadera moralidad kantiana."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🌟 Los Postulados de la Razón Práctica</h4>
        <p>Kant identificó tres <strong>postulados</strong> que la razón práctica debe asumir para que la moralidad tenga sentido: la <strong>libertad</strong> de la voluntad (podemos elegir actuar moralmente), la <strong>inmortalidad</strong> del alma (necesaria para el progreso moral infinito hacia la santidad), y la <strong>existencia-de-Dios</strong> (como garantía de que la virtud será recompensada con felicidad en el <strong>sumo-bien</strong>). Estos no son demostrables teóricamente, pero son necesarios prácticamente para la <strong>esperanza</strong> moral.</p>
      </div>
      `,
      hint: "Identifica las tres condiciones que Kant considera necesarias para que la moralidad sea coherente.",
      advanceAfter: 3, // De 5 conceptos, permitir avanzar con 3
      concepts: [
        { 
          term: "postulados", 
          meaning: "📐 POSTULADOS DE LA RAZÓN PRÁCTICA: Presupuestos que la razón práctica debe asumir como verdaderos para que la moralidad sea coherente, aunque no puedan demostrarse teóricamente. Son 'hipótesis necesarias' desde el punto de vista práctico: si no los asumiéramos, el proyecto moral perdería sentido. En este párrafo, representan las condiciones de posibilidad de la vida moral.",
          priority: 9
        },
        { 
          term: "libertad", 
          meaning: "🗽 LIBERTAD TRASCENDENTAL: La capacidad de la voluntad para determinarse a sí misma según la ley moral, independientemente de las causas naturales. Sin libertad, no habría responsabilidad moral genuina porque todas nuestras acciones estarían determinadas por causas ajenas a nosotros. Es el postulado más fundamental porque sin él la moralidad sería imposible. En este párrafo, es la condición básica de la acción moral.",
          priority: 10
        },
        { 
          term: "inmortalidad", 
          meaning: "♾️ INMORTALIDAD DEL ALMA: Postulado que afirma que el alma debe ser inmortal para permitir el progreso infinito hacia la santidad moral. Como en esta vida nunca alcanzamos la perfección moral completa, debe haber continuidad post-mortem para que el ideal moral tenga sentido. En este párrafo, justifica la esperanza en el perfeccionamiento moral continuo.",
          priority: 8
        },
        { 
          term: "existencia-de-Dios", 
          meaning: "🙏 EXISTENCIA DE DIOS: Postulado que afirma que debe existir un ser supremo que garantice la armonía final entre virtud y felicidad en el sumo bien. Como en este mundo la virtud no siempre es recompensada, debe haber una justicia divina que eventualmente alinee merecimiento moral con bienestar. En este párrafo, asegura que el universo moral tenga sentido últimamente.",
          priority: 8
        },
        { 
          term: "sumo-bien", 
          meaning: "🏆 SUMO BIEN (summum bonum): La unión perfecta de virtud y felicidad, donde cada uno es feliz en proporción exacta a su mérito moral. Es el objeto completo de la razón práctica pura: no solo ser virtuoso sino ser virtuoso y feliz. Como esto no ocurre naturalmente en este mundo, requiere los postulados para ser concebible. En este párrafo, representa el ideal moral último.",
          priority: 9
        }
      ],
      corollary: [
        "Los tres postulados (libertad, inmortalidad, Dios) son necesarios para que la moralidad tenga sentido coherente.",
        "Aunque no demostrables teóricamente, deben asumirse prácticamente para justificar la esperanza moral."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>⚖️ Críticas y Limitaciones de la Ética Kantiana</h4>
        <p>La ética kantiana enfrenta críticas importantes. Se la acusa de <strong>rigorismo</strong>: sus reglas son tan estrictas que prohíben mentir incluso para salvar una vida inocente. También presenta el problema del <strong>conflicto-de-deberes</strong>: ¿qué hacer cuando dos deberes morales se contradicen? Además, algunos critican su <strong>formalismo</strong>: se enfoca tanto en la forma del deber que ignora el contenido específico y el contexto. Sin embargo, sigue siendo influyente en <strong>derechos-humanos</strong> y ética aplicada contemporánea.</p>
      </div>
      `,
      hint: "Evalúa las principales objeciones a la ética kantiana y su relevancia contemporánea.",
      advanceAfter: 3, // De 5 conceptos, permitir avanzar con 3
      concepts: [
        { 
          term: "rigorismo", 
          meaning: "⛓️ RIGORISMO: Crítica que señala que la ética kantiana es excesivamente rígida e inflexible. Kant sostenía que mentir es siempre incorrecto, incluso si mentir a un asesino podría salvar una vida inocente. Los críticos argumentan que esto muestra insensibilidad al contexto y a las consecuencias moralmente relevantes. En este párrafo, representa el problema de la inflexibilidad absoluta de las reglas kantianas.",
          priority: 9
        },
        { 
          term: "conflicto-de-deberes", 
          meaning: "⚔️ CONFLICTO DE DEBERES: Situaciones donde dos o más deberes morales genuinos se contradicen y no pueden cumplirse simultáneamente. Por ejemplo, el deber de decir la verdad vs. el deber de proteger la vida inocente. Kant creía que los verdaderos deberes nunca conflictuarían, pero los críticos señalan casos reales donde parecen hacerlo. En este párrafo, muestra una limitación práctica del sistema kantiano.",
          priority: 8
        },
        { 
          term: "formalismo", 
          meaning: "📐 FORMALISMO: Crítica que sostiene que la ética kantiana se enfoca excesivamente en la forma lógica del deber (universalización) ignorando el contenido sustantivo y el contexto particular de las acciones. Los críticos argumentan que esto puede llevar a conclusiones abstractas desconectadas de la realidad moral vivida. En este párrafo, señala el posible divorcio entre forma moral y sustancia ética.",
          priority: 8
        },
        { 
          term: "derechos-humanos", 
          meaning: "🌍 DERECHOS HUMANOS: Conjunto de derechos inherentes a todos los seres humanos independientemente de nacionalidad, raza, sexo, etc. La segunda formulación kantiana (humanidad como fin) es una de las bases filosóficas más importantes de la doctrina moderna de derechos humanos. La dignidad humana kantiana sustenta declaraciones como la de 1948. En este párrafo, muestra la influencia positiva continuada de la ética kantiana.",
          priority: 9
        },
        { 
          term: "ética aplicada contemporánea", 
          meaning: "🏥 ÉTICA APLICADA CONTEMPORÁNEA: Campos como bioética, ética empresarial, ética ambiental que aplican principios morales a problemas específicos actuales. La ética kantiana sigue siendo influyente especialmente en bioética (consentimiento informado, prohibición de experimentación no consensual) y ética de los negocios (no tratar empleados como meros medios). En este párrafo, demuestra la relevancia práctica continuada del kantismo.",
          priority: 8
        }
      ],
      corollary: [
        "La ética kantiana enfrenta críticas por rigorismo, conflictos de deberes y exceso de formalismo.",
        "A pesar de las críticas, sigue siendo influyente en derechos humanos y ética aplicada contemporánea."
      ]
    }
  ]
};