const EMBEDDED_CONFIG = {
  "id": "proyecto_antropologia_trimestre2",
  "title": "¡A Filosofar! Proyecto de Antropología Filosófica (Cierre 2º Trimestre)",
  "description": "Desentrañar el misterio humano con método, investigación y debate. Elegí un gran problema, proponé una hipótesis y defendela con argumentos.",
  "meta": {
    "difficulty": "PROYECTO_TRIMESTRAL",
    "timeEstimate": 240,
    "prerequisites": ["cassirer", "sartre", "etica", "etica_aristoteles", "etica_kant"],
    "color": "#8a5cf6"
  },
  "project": {
    "mission": "Aplicar el método filosófico para investigar una gran pregunta sobre el ser humano y defender una posición fundada.",
    "methodTagline": "El método filosófico al estilo detective: preguntar, indagar, hipotetizar, argumentar, concluir.",
    "structure": [
      {
        "key": "pregunta_clave",
        "title": "1) La Pregunta Clave (Tu Enigma)",
        "prompt": "Formulá una pregunta clara y directa que guíe toda tu investigación (¿qué te ‘carcome’ sobre el ser humano?).",
        "deliverableHint": "1–2 oraciones; que sea específica y debatible."
      },
      {
        "key": "investigacion",
        "title": "2) El Mapa del Tesoro (Investigación y Teoría)",
        "prompt": "Relevá qué dicen filósofos y corrientes sobre tu pregunta. Priorizá fuentes confiables.",
        "deliverableHint": "Citas breves y referencias; mínimo 3 autores/corrientes pertinentes."
      },
      {
        "key": "hipotesis",
        "title": "3) Tu Hipótesis (Primera Apuesta)",
        "prompt": "Proponé una respuesta tentativa a tu pregunta antes de argumentar.",
        "deliverableHint": "1 párrafo con una tesis clara."
      },
      {
        "key": "argumentacion",
        "title": "4) El Gran Debate (Tu Argumentación)",
        "prompt": "Presentá argumentos a favor y en contra de tu hipótesis, compará autores y conectá ideas.",
        "deliverableHint": "2–3 páginas. Incluí ejemplos (cine, casos reales, literatura)."
      },
      {
        "key": "conclusion",
        "title": "5) El Veredicto Final (Conclusión)",
        "prompt": "Cerrá con tu respuesta justificada y una reflexión personal: ¿qué cambió en tu mirada?",
        "deliverableHint": "1–2 párrafos que sinteticen hallazgos y posición final."
      }
    ],
    "topics": [
      {
        "id": "t1_razon_emocion",
        "title": "Tema 1: ¿Razón vs. Emoción? ¿Quién manda en el ser humano?",
        "hotQuestion": "¿Nos define más la lógica o las emociones? ¿O la mezcla nos hace únicos?",
        "explore": {
          "teamRazon": "Descartes, Kant: ‘animal racional’, autonomía, universalidad.",
          "teamEmocion": "Nietzsche, existencialistas, romanticismo: voluntad, afecto, vida.",
          "teamEquilibrio": "Modelos que articulan razón y emoción (p.ej., Aristóteles: phronesis)."
        },
        "hypothesisExamples": [
          "La razón es nuestro superpoder moral y cognitivo.",
          "Las emociones son el motor; la razón justifica después.",
          "Somos una síntesis dinámica de razón y emoción."
        ],
        "argumentation": [
          "Evaluá fortalezas y límites de cada bando.",
          "Conectá con ética, política y autocomprensión.",
          "Ilustrá con ejemplos (películas, noticias, situaciones cotidianas)."
        ],
        "conclusion": [
          "Resumí ideas centrales.",
          "Respondé a la pregunta inicial con fundamentos.",
          "Agregá una reflexión sobre tu vida cotidiana."
        ],
        "debateQuestions": [
          "¿Podríamos vivir sin emociones o sin razón?",
          "¿Cómo se mezclan en tus decisiones diarias?",
          "¿La cultura jerarquiza una sobre la otra?"
        ]
      },
      {
        "id": "t2_libertad_determinismo",
        "title": "Tema 2: ¿Libres como el viento o atados al destino?",
        "hotQuestion": "¿Decidimos de verdad o todo está escrito por biología, mente o sociedad?",
        "explore": {
          "teamDeterminismo": "Causalismo fuerte; conductismo; neurodeterminismo.",
          "teamLibreAlbedrio": "Sartre (libertad radical), Kant (autonomía).",
          "teamCompatibilista": "Libertad y causalidad pueden coexistir."
        },
        "hypothesisExamples": [
          "La libertad es un espejismo: todo está determinado.",
          "Somos radicalmente libres y responsables.",
          "La libertad existe con límites reales."
        ],
        "argumentation": [
          "Pro y contra de cada postura.",
          "Implicaciones para moral, culpa y castigo.",
          "Mirada histórica (estoicos, epicúreos, existencialistas)."
        ],
        "conclusion": [
          "Sintetizá posturas.",
          "Tomá posición razonada.",
          "Explicá por qué importa para la vida humana."
        ],
        "debateQuestions": [
          "Si no hay libre albedrío, ¿tiene sentido el bien/mal?",
          "¿Qué dice la neurociencia sobre la libertad?",
          "¿La libertad se nace o se construye?"
        ]
      },
      {
        "id": "t3_individuo_sociedad",
        "title": "Tema 3: ¿Lobo solitario o animal de manada?",
        "hotQuestion": "¿Necesitamos a los demás para ser ‘nosotros’, o la sociedad nos limita?",
        "explore": {
          "teamSocial": "Aristóteles: ‘animal político’ (lenguaje, polis, virtud).",
          "teamContrato": "Hobbes, Locke, Rousseau: estado de naturaleza y pacto.",
          "teamCritico": "Críticas a la sociedad (alienación, poder): anarquismos, Foucault."
        },
        "hypothesisExamples": [
          "Somos sociales por naturaleza: identidad desde la comunidad.",
          "La sociedad necesaria, pero alienante.",
          "Tensión creativa individuo–sociedad."
        ],
        "argumentation": [
          "Necesidad de sociedad (lenguaje, moral, cultura).",
          "Críticas (opresión, pérdida de autenticidad).",
          "Política e instituciones: moldean y limitan."
        ],
        "conclusion": [
          "Balance de tensiones individuo–colectivo.",
          "Respuesta argumentada a la pregunta inicial.",
          "Retos para una vida en común justa."
        ],
        "debateQuestions": [
          "¿Podrías desarrollarte solo en una isla?",
          "¿Qué rol tiene la educación para integrarnos?",
          "¿La sociedad nos hace más o menos libres?"
        ]
      },
      {
        "id": "t4_dimension_espiritual",
        "title": "Tema 4: ¿Hay algo más allá? Dimensión espiritual del ser humano",
        "hotQuestion": "¿Existe una dimensión espiritual o todo se reduce a materia?",
        "explore": {
          "teamEspiritual": "Platón; tradiciones religiosas; alma y trascendencia.",
          "teamMaterialista": "Ateísmo filosófico; naturalismo; mente como cerebro.",
          "teamTrascendenciaLaica": "Sentido, arte, ética sin religión."
        },
        "hypothesisExamples": [
          "La dimensión espiritual es clave para entendernos.",
          "Todo ‘espiritual’ se explica por procesos cerebrales.",
          "Trascendencia sin religión: arte, sentido, proyecto vital."
        ],
        "argumentation": [
          "Argumentos filosófico-religiosos pro-espiritualidad.",
          "Objeciones naturalistas/materialistas.",
          "Impacto en moral, sentido, muerte y felicidad."
        ],
        "conclusion": [
          "Síntesis de perspectivas.",
          "Respuesta final y por qué importa para la condición humana.",
          "Reflexión personal."
        ],
        "debateQuestions": [
          "¿Qué evidencias hay para lo ‘espiritual’?",
          "¿Cómo se conecta con conciencia e identidad?",
          "¿Se puede vivir con sentido sin trascendencia?"
        ]
      },
      {
        "id": "t5_cuerpo_mente",
        "title": "Tema 5: ¿Cuerpo y mente: dos en uno o cada uno por su lado?",
        "hotQuestion": "¿Cómo se relacionan cuerpo y mente? ¿Dualismo o monismo?",
        "explore": {
          "teamDualista": "Descartes: dos sustancias; problema de la interacción.",
          "teamMonista": "Materialismo/idealismo; Spinoza (dos atributos).",
          "teamActual": "Emergentismo, fenomenología, funcionalismo."
        },
        "hypothesisExamples": [
          "Somos unión accidental de cuerpo y mente.",
          "La mente es un producto del cerebro.",
          "Dos caras de una misma realidad encarnada."
        ],
        "argumentation": [
          "A favor del dualismo (conciencia) y sus objeciones.",
          "A favor del monismo y el ‘difícil problema’ de la conciencia.",
          "Implicancias para medicina, psicología e identidad."
        ],
        "conclusion": [
          "Mapa de teorías y evaluación crítica.",
          "Toma de posición argumentada.",
          "Consecuencias prácticas (dolor, enfermedad, muerte)."
        ],
        "debateQuestions": [
          "¿Cómo explica cada postura los sueños o las ECM?",
          "Si la mente es cerebro, ¿qué pasa con libertad y responsabilidad?",
          "¿Puede una IA tener conciencia?"
        ]
      }
    ],
    "rubric": [
      { "item": "Pregunta e Hipótesis Claras", "weight": 10, "descriptor": "Enigma preciso y tesis inicial definida." },
      { "item": "Investigación Pro", "weight": 25, "descriptor": "Dominio de autores/corrientes, uso de fuentes serias." },
      { "item": "Argumentos Sólidos", "weight": 30, "descriptor": "Coherencia, contraargumentos, ejemplos bien integrados." },
      { "item": "Originalidad y Reflexión", "weight": 15, "descriptor": "Aporte personal y pensamiento crítico." },
      { "item": "Conclusión Épica", "weight": 10, "descriptor": "Cierre que responde y sintetiza con claridad." },
      { "item": "Formato y Redacción", "weight": 10, "descriptor": "Orden, lenguaje filosófico, ortografía." }
    ],
    "deliverables": {
      "format": [
        "Ensayo 3–5 páginas (o presentación equivalente con notas del orador).",
        "Bibliografía mínima: 3 fuentes filosóficas + 1 fuente complementaria (artículo, capítulo, video académico).",
        "Citas breves con referencia (autor, obra, sección/página si aplica)."
      ],
      "optionalArtefacts": [
        "Mapa conceptual/infografía de las posturas.",
        "Línea de tiempo de autores clave.",
        "Ejemplos audiovisuales (cine/series/noticias) con análisis."
      ]
    },
    "tips": [
      "Redactá primero tu tesis en una oración. Si no podés, todavía no está clara.",
      "Cada párrafo debe defender una idea (mini-tesis) y conectar con la central.",
      "Usá ejemplos concretos: iluminan argumentos abstractos.",
      "Anticipá objeciones fuertes y respondelas con seriedad."
    ],
    "debateKit": {
      "howToUse": "Al final de cada exposición, elegí 2–3 preguntas del tema para un mini-debate de 5–8 minutos.",
      "generalQuestions": [
        "¿Qué cambiaría tu conclusión si sumás evidencia científica reciente?",
        "¿Qué diría un filósofo que no consideraste (p. ej., Hume, Marx, Arendt)?",
        "¿Cómo impacta tu postura en decisiones éticas reales?"
      ]
    }
  }
}
