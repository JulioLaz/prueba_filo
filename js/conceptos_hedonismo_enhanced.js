// js/conceptos_hedonismo_enhanced.js
// Configuración mejorada con significados contextualizados y ampliados

window.CONCEPT_HUNT_CONFIG = {
  author: "Epicuro",
  menuUrl: "https://juliolaz.github.io/prueba_filo/quiz.html?tema=hedonismo&theme=hedonismo",
  
  // Niveles con destacado gradual y significados enriquecidos
  levels: [
    {
      html: `
      <p>El <strong>hedonismo</strong> es una corriente filosófica que considera el <strong>placer</strong> como el único y verdadero <strong>bien</strong>. El fin de la vida es la búsqueda del placer y la evitación del <strong>dolor</strong>. Para los <strong>hedonistas</strong>, la felicidad se encuentra en una vida placentera. Sin embargo, no todos los placeres son iguales. Hay que distinguir entre los que nos dan un bienestar duradero y los que nos causan problemas a largo plazo.</p>
      `,
      hint: "Identifica la idea central del hedonismo y su enfoque discriminativo hacia los placeres.",
      advanceAfter: 3, // Permitir avanzar con 3 de 5 conceptos
      concepts: [
        { 
          term: "hedonismo", 
          meaning: "🌺 HEDONISMO (del griego hedone = placer): Corriente filosófica que postula que el placer es el fin supremo y único bien de la vida humana. No obstante, el hedonismo antiguo, especialmente el de Epicuro, no abogaba por el libertinaje sino por una búsqueda inteligente del placer verdadero. En este párrafo, observa cómo se distingue entre diferentes tipos de placeres.",
          priority: 10
        },
        { 
          term: "placer", 
          meaning: "✨ PLACER (hedone): Sensación agradable que guía la vida según el hedonismo. Para Epicuro, no se trata de placeres desenfrenados sino de aquellos que contribuyen a una vida feliz y tranquila. Hay placeres naturales y necesarios (como la amistad), naturales pero no necesarios (como el sexo), y vanos (como la inmortalidad). En este párrafo, nota la distinción entre placeres duraderos y problemáticos.",
          priority: 10
        },
        { 
          term: "bien", 
          meaning: "🎯 BIEN: Aquello que es valioso, deseable o moralmente correcto. Para los hedonistas, el único bien verdadero es el placer, y todo lo demás (virtudes, conocimiento, etc.) solo es valioso en la medida que produce placer. Esta perspectiva monista contrasta con filosofías que reconocen múltiples bienes independientes.",
          priority: 8
        },
        { 
          term: "dolor", 
          meaning: "⚡ DOLOR (ponos): Sensación desagradable que se busca evitar. Para Epicuro, el dolor no es solo físico sino también mental (ansiedad, miedo, perturbación). El objetivo no es experimentar placer intenso, sino estar libre de dolor. En este párrafo, representa el polo negativo que define por contraste lo que se busca.",
          priority: 9
        },
        { 
          term: "hedonistas", 
          meaning: "🏛️ HEDONISTAS: Filósofos y seguidores que adoptan el hedonismo como principio de vida. Históricamente incluye a Aristipo de Cirene (hedonismo cirenaico), Epicuro de Samos (hedonismo epicúreo), y pensadores modernos como Bentham y Mill (utilitarismo hedonista). En este párrafo, representa la comunidad filosófica que defiende esta visión.",
          priority: 7
        }
      ],
      corollary: [
        "El hedonismo auténtico discrimina entre placeres según su calidad y consecuencias a largo plazo.",
        "El objetivo no es cualquier placer, sino el placer que contribuye al bienestar duradero."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🧘 Ataraxia y Aponía</h4>
        <p>El hedonismo de <strong>Epicuro</strong> no se centraba en los placeres excesivos, sino en la <strong>serenidad</strong>. El mayor placer es la ausencia de perturbación mental (<strong>ataraxia</strong>) y la ausencia de dolor físico (<strong>aponía</strong>). Para Epicuro, la felicidad se alcanza con un placer moderado, rodeado de buenos <strong>amigos</strong>, y dedicando tiempo a la reflexión <strong>filosófica</strong>. No se trata de una vida de excesos, sino de una vida de <strong>autocontrol</strong>.</p>
      </div>
      `,
      hint: "Explora los conceptos centrales del hedonismo epicúreo y su enfoque en la serenidad.",
      advanceAfter: 4, // De 6 conceptos, permitir avanzar con 4
      concepts: [
        { 
          term: "Epicuro", 
          meaning: "👤 EPICURO (341-270 a.C.): Filósofo griego fundador del hedonismo epicúreo. Estableció el 'Jardín' en Atenas, una comunidad filosófica que incluía mujeres y esclavos. Su hedonismo era sofisticado: distinguía entre placeres cinéticos (movimiento, actividad) y catatestáticos (ausencia de dolor). En este párrafo, observa cómo su enfoque difiere del hedonismo vulgar popular.",
          priority: 10
        },
        { 
          term: "serenidad", 
          meaning: "🕊️ SERENIDAD: Tranquilidad y calma del espíritu. Para Epicuro, la serenidad es el estado ideal del alma, libre de perturbaciones como el miedo a la muerte, a los dioses, o al dolor. Es un placer catatestático (negativo) porque consiste en la ausencia de algo malo más que en la presencia de algo bueno. En este párrafo, representa el verdadero objetivo del hedonismo epicúreo.",
          priority: 10
        },
        { 
          term: "ataraxia", 
          meaning: "🌊 ATARAXIA (del griego: sin perturbación): Estado de serenidad y paz mental, libre de ansiedad y turbación emocional. Es uno de los dos pilares del hedonismo epicúreo junto con la aponía. Se alcanza mediante la filosofía, que libera de temores irracionales (muerte, dioses, destino). En este párrafo, aparece como el aspecto mental del placer perfecto.",
          priority: 10
        },
        { 
          term: "aponía", 
          meaning: "💫 APONÍA (del griego: sin dolor): Estado de ausencia de dolor físico. Junto con la ataraxia, constituye la felicidad completa según Epicuro. No significa insensibilidad, sino estar libre de sufrimientos corporales evitables. La aponía se logra mediante un estilo de vida prudente que evita excesos. En este párrafo, complementa la ataraxia para definir el bienestar total.",
          priority: 10
        },
        { 
          term: "amigos", 
          meaning: "👥 AMISTAD (philía): Para Epicuro, la amistad es el mayor de los placeres naturales y necesarios. El Jardín epicúreo era esencialmente una comunidad de amigos unidos por la filosofía. La amistad proporciona seguridad, placer emocional y apoyo en momentos difíciles. En este párrafo, representa un elemento clave del estilo de vida epicúreo frente al aislamiento.",
          priority: 9
        },
        { 
          term: "filosófica", 
          meaning: "🤔 REFLEXIÓN FILOSÓFICA: La filosofía como medicina del alma (therapeia). Para Epicuro, filosofar no es ejercicio académico sino práctica curativa que libera de temores y supersticiones. La filosofía enseña a discriminar entre placeres, a comprender la naturaleza, y a vivir sin miedo. En este párrafo, aparece como actividad esencial para alcanzar la serenidad.",
          priority: 8
        },
        { 
          term: "autocontrol", 
          meaning: "⚖️ AUTOCONTROL (enkrateia): Capacidad de moderar los propios deseos y pasiones para alcanzar la felicidad a largo plazo. No significa ascetismo sino prudencia hedonista: saber cuándo rechazar un placer inmediato para evitar dolor futuro, o cuándo aceptar dolor presente para obtener placer mayor. En este párrafo, contrasta con la imagen popular del hedonismo como desenfreno.",
          priority: 9
        }
      ],
      corollary: [
        "El hedonismo epicúreo busca la serenidad (ataraxia) y la ausencia de dolor (aponía) como placeres supremos.",
        "La verdadera felicidad hedonista requiere autocontrol, amistad y reflexión filosófica, no excesos."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>⚡ Placeres Cinéticos y Catatestáticos</h4>
        <p>Epicuro distinguía entre <strong>placeres-cinéticos</strong>, que implican movimiento y actividad (como comer cuando se tiene hambre), y <strong>placeres-catatestáticos</strong>, que consisten en estados estables de satisfacción sin perturbación. Los placeres catatestáticos son superiores porque no generan <strong>ansiedad</strong> por su pérdida y son más duraderos. El <strong>hedonismo-epicúreo</strong> prefiere la estabilidad del placer antes que su intensidad.</p>
      </div>
      `,
      hint: "Comprende la distinción epicúrea entre tipos de placer y su importancia.",
      advanceAfter: 3, // De 4 conceptos, permitir avanzar con 3
      concepts: [
        { 
          term: "placeres-cinéticos", 
          meaning: "🏃 PLACERES CINÉTICOS (del griego kinesis = movimiento): Placeres que implican actividad, movimiento o proceso. Incluyen placeres sexuales, gastronómicos en el acto de comer, la euforia del ejercicio, etc. Son intensos pero breves, y su búsqueda puede generar dependencia y ansiedad. En este párrafo, se contraponen a los catatestáticos como tipo inferior de placer.",
          priority: 9
        },
        { 
          term: "placeres-catatestáticos", 
          meaning: "🛡️ PLACERES CATATESTÁTICOS (del griego katastasis = estado estable): Placeres que consisten en estados de equilibrio y ausencia de perturbación. Incluyen la ataraxia, aponía, la contemplación serena, la seguridad de la amistad. Son menos intensos pero más duraderos y no generan ansiedad por su pérdida. En este párrafo, representan el ideal epicúreo de placer.",
          priority: 10
        },
        { 
          term: "ansiedad", 
          meaning: "😰 ANSIEDAD: Perturbación mental que surge del temor a perder placeres o sufrir dolores. Para Epicuro, la ansiedad es uno de los principales obstáculos para la felicidad. Los placeres cinéticos generan ansiedad porque son temporales y su pérdida es dolorosa. En este párrafo, explica por qué los placeres catatestáticos son preferibles.",
          priority: 8
        },
        { 
          term: "hedonismo-epicúreo", 
          meaning: "🏛️ HEDONISMO EPICÚREO: Versión sofisticada del hedonismo que prioriza la calidad sobre la cantidad del placer. A diferencia del hedonismo cirenaico (que buscaba placeres intensos inmediatos), el epicúreo busca placeres duraderos y estables. Su lema: 'No es posible vivir placenteramente sin vivir prudentemente'. En este párrafo, se define por su preferencia por la estabilidad.",
          priority: 10
        }
      ],
      corollary: [
        "Los placeres catatestáticos (estables) son superiores a los cinéticos (activos) porque generan menos ansiedad.",
        "El hedonismo epicúreo valora la duración y estabilidad del placer por encima de su intensidad."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>💀 Los Cuatro Remedios</h4>
        <p>El <strong>tetraphármakos</strong> o 'cuatro remedios' resume la <strong>medicina-filosófica</strong> epicúrea: No hay que temer a los <strong>dioses</strong> (son perfectamente felices y no intervienen en asuntos humanos), no hay que temer a la <strong>muerte</strong> ('mientras existimos no está presente, cuando está presente ya no existimos'), el <strong>dolor</strong> es breve si es intenso, soportable si es duradero, y el <strong>placer</strong> es fácil de alcanzar si sabemos contentarnos con placeres simples y naturales.</p>
      </div>
      `,
      hint: "Identifica los cuatro miedos fundamentales que Epicuro quería eliminar.",
      advanceAfter: 3, // De 5 conceptos, permitir avanzar con 3
      concepts: [
        { 
          term: "tetraphármakos", 
          meaning: "💊 TETRAPHÁRMAKOS (cuatro remedios): Resumen de la filosofía terapéutica epicúrea en cuatro máximas contra los principales temores humanos. Como una medicina para el alma, cada 'remedio' elimina una fuente específica de perturbación. En este párrafo, representa la síntesis práctica del hedonismo epicúreo como sistema de vida.",
          priority: 10
        },
        { 
          term: "medicina-filosófica", 
          meaning: "🏥 MEDICINA FILOSÓFICA: Concepción epicúrea de la filosofía como terapia para el alma. Así como la medicina cura el cuerpo, la filosofía cura las enfermedades mentales (miedos, supersticiones, deseos vanos). No es especulación abstracta sino praxis curativa. En este párrafo, enmarca la función práctica del tetraphármakos.",
          priority: 9
        },
        { 
          term: "dioses", 
          meaning: "⚡ DIOSES: Para Epicuro, los dioses existen pero viven en perfecta felicidad (ataraxia y aponía) en los intermundia, sin preocuparse por los asuntos humanos. No castigan ni premian, no envían males ni bendiciones. Esta visión libera del temor religioso y la superstición. En este párrafo, representan el primer miedo que debe eliminarse.",
          priority: 8
        },
        { 
          term: "muerte", 
          meaning: "💀 MUERTE: Para Epicuro, la muerte no es nada para nosotros porque todo bien y todo mal radica en la sensación, y la muerte es ausencia de sensación. El miedo a la muerte corrompe la vida presente con ansiedad innecesaria. En este párrafo, aparece como el segundo gran temor que la filosofía debe curar.",
          priority: 9
        },
        { 
          term: "dolor", 
          meaning: "⚡ DOLOR: En el contexto del tetraphármakos, Epicuro enseña que el dolor intenso es breve (el cuerpo no puede sostenerlo mucho tiempo) y el dolor duradero es soportable (si perdura es porque no es extremo). Esta perspectiva quita el terror al sufrimiento futuro. En este párrafo, es el tercer temor que debe desarmarse racionalmente.",
          priority: 8
        }
      ],
      corollary: [
        "El tetraphármakos elimina los cuatro miedos principales: dioses, muerte, dolor y la dificultad del placer.",
        "La filosofía epicúrea funciona como medicina preventiva contra las perturbaciones del alma."
      ]
    }
  ]
};