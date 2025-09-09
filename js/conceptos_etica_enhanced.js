// from pathlib import Path

// enhanced_js = r"""// js/conceptos_etica_enhanced.js
// Configuración específica para el tema "ética" siguiendo el formato enriquecido de etica_aristoteles

window.CONCEPT_HUNT_CONFIG = {
  author: "Ética y Filosofía Moral",
  menuUrl: "https://juliolaz.github.io/prueba_filo/quiz.html?tema=etica&theme=etica",
  levels: [
    {
      html: `
      <p>La <strong>ética</strong> es una rama de la filosofía que reflexiona críticamente sobre la <strong>moral</strong>, es decir, sobre los criterios con los que juzgamos cada acción como <strong>buena</strong> o <strong>malo</strong>. No se limita a describir costumbres: busca <em>fundamentos</em> racionales para orientar la vida humana.</p>
      `,
      hint: "Distinguir entre Ética (reflexión) y Moral (práctica social).",
      advanceAfter: 4,
      concepts: [
        { term: "ética", priority: 10, meaning: "Disciplina filosófica <em>normativa y crítica</em> que investiga qué debemos hacer y por qué. Analiza principios, valores y justificaciones de los juicios morales, diferenciándose de la moral porque no solo describe costumbres, sino que <strong>evalúa</strong> su validez." },
        { term: "moral", priority: 9, meaning: "Conjunto de <em>normas, valores, hábitos y costumbres</em> de una comunidad que guían la conducta. Es vivida, transmitida y aprendida socialmente; puede variar entre culturas y épocas." },
        { term: "buena", priority: 7, meaning: "Aquello que, según un marco de valores, se considera correcto, virtuoso o deseable. En ética, 'bueno' exige <em>razones</em>, no solo aprobación social." },
        { term: "malo", priority: 7, meaning: "Aquello que se juzga incorrecto o dañino. La ética pregunta: ¿en base a qué principios lo llamamos 'malo'?" }
      ],
      corollary: [
        "La ética somete a examen las normas morales vigentes.",
        "La moral describe prácticas; la ética pregunta por sus razones."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🤔 Libertad y Responsabilidad</h4>
        <p>La ética presupone <strong>libertad</strong>: solo los actos <strong>intencionales</strong> pueden ser <strong>responsables</strong>. Elegir implica reconocer y asumir <strong>consecuencias</strong>. Por eso, los dilemas morales surgen cuando <em>valores</em> apreciados entran en conflicto.</p>
      </div>
      `,
      hint: "Los actos morales son libres, conscientes e intencionales.",
      advanceAfter: 4,
      concepts: [
        { term: "libertad", priority: 10, meaning: "Capacidad de <em>elegir entre alternativas</em> con conciencia de razones y fines. Fundamento de la imputación moral." },
        { term: "responsables", priority: 10, meaning: "Responsabilidad: Deber de <em>responder por los propios actos</em> y sus efectos previsibles. Supone libertad, conocimiento y control suficiente de la acción." },
        { term: "intencionales", priority: 8, meaning: "Intencional: Acción realizada con propósito y deliberación. Lo no intencional (accidente) reduce o anula responsabilidad." },
        { term: "consecuencias", priority: 8, meaning: "Resultados de una acción. Algunas teorías (por ejemplo, utilitarismo) valoran la moralidad en función de maximizar consecuencias valiosas (bienestar, utilidad)." }
      ],
      corollary: [
        "Sin libertad no hay responsabilidad moral.",
        "La deliberación conecta intención, medios y fines."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>⚖️ Juicio Moral y Valores</h4>
        <p>Un <strong>juicio-moral</strong> evalúa acciones según <strong>valores</strong> y <strong>normas-morales</strong>. Algunos valores reclaman validez <strong>universales</strong> (p. ej., dignidad), otros son <strong>contextuales</strong>. La aprobación (<strong>reconocimiento-social</strong>) o la <strong>culpa</strong> expresan la fuerza de estas evaluaciones.</p>
      </div>
      `,
      hint: "Relación entre valores, normas y evaluación moral.",
      advanceAfter: 9,
      concepts: [
        { term: "juicio-moral", priority: 10, meaning: "Evaluación <em>racional y práctica</em> de una acción (o intención) como correcta o incorrecta, justificándola con principios." },
        { term: "valores", priority: 9, meaning: "Criterios que orientan el obrar (justicia, autonomía, cuidado, lealtad, etc.). Pueden entrar en conflicto entre sí." },
        { term: "universales", priority: 8, meaning: "Valores que se reclaman válidos para toda persona por su condición humana (por ejemplo, respeto a la dignidad)." },
        { term: "contextuales", priority: 7, meaning: "Valores dependientes de cultura/época/situación; requieren interpretación prudente para aplicarse con justicia." },
        { term: "normas-morales", priority: 9, meaning: "Reglas que prescriben o prohíben conductas. Pueden ser jurídicas, religiosas o sociales; la ética discute su <em>fundamentación</em>." },
        { term: "reconocimiento-social", priority: 6, meaning: "Aprobación o estima que una comunidad concede a quien actúa conforme a valores compartidos." },
        { term: "culpa", priority: 6, meaning: "Emoción moral que surge al vulnerar una norma interiorizada; puede motivar reparación y aprendizaje." }
      ],
      corollary: [
        "Los juicios morales combinan hechos, principios y contextos.",
        "La ética clarifica conflictos de valores y jerarquías prácticas."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🧩 Dilemas Éticos</h4>
        <p>Los dilemas hacen visible la tensión entre valores. El <strong>dilema-del-tranvía</strong> enfrenta la <strong>vida-humana</strong> y el <strong>principio-utilitarista</strong>. El <strong>dilema-médico</strong> problematiza <strong>consentimiento</strong> y <strong>dignidad-humana</strong>. El <strong>dilema-militar</strong> contrasta <strong>obediencia</strong> y <strong>conciencia-moral</strong>.</p>
      </div>
      `,
      hint: "Identifica valores en conflicto y modos de justificar decisiones.",
      advanceAfter: 9,
      concepts: [
        { term: "dilema-del-tranvía", priority: 9, meaning: "Experimento mental: ¿es lícito sacrificar a uno para salvar a varios? Explora choque entre deberes, consecuencias y reglas." },
        { term: "vida-humana", priority: 10, meaning: "Valor básico que funda derechos y límites morales; su protección suele tener prioridad fuerte." },
        { term: "principio-utilitarista", priority: 8, meaning: "Buscar el <em>mayor bien para el mayor número</em>. Compite con principios deontológicos (por ejemplo, inviolabilidad de la persona)." },
        { term: "dilema-médico", priority: 8, meaning: "Conflictos en salud: asignación de recursos, trasplantes, fin de vida. Pone en juego consentimiento, proporcionalidad y dignidad." },
        { term: "consentimiento", priority: 8, meaning: "Aceptación <em>libre e informada</em> de intervenciones; sine qua non de la ética clínica." },
        { term: "dignidad-humana", priority: 10, meaning: "Valor intrínseco de toda persona por el que no puede tratarse como simple medio. Núcleo de derechos humanos." },
        { term: "dilema-militar", priority: 7, meaning: "Tensión entre obedecer órdenes y obedecer a la conciencia cuando la orden es injusta." },
        { term: "obediencia", priority: 6, meaning: "Seguir una orden/regla. Virtud cívica que puede volverse vicio si desconoce límites éticos." },
        { term: "conciencia-moral", priority: 9, meaning: "Juicio interior sobre el bien y el mal en la situación concreta; exige formación y veracidad." }
      ],
      corollary: [
        "Los dilemas no siempre admiten solución única; sí exigen <em>buenas razones</em>.",
        "La deliberación ética busca <em>proporcionalidad</em>, <em>respeto</em> y <em>consistencia</em>."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🤖 IA y Ética Contemporánea</h4>
        <p>La <strong>inteligencia-artificial</strong> plantea <strong>dilema-algoritmico</strong>: decisiones automáticas pueden amplificar <strong>discriminación</strong>. Con <strong>vehículos-autónomos</strong> aparece el <strong>dilema-moral-tecnológico</strong>. También hay tensiones entre <strong>eficiencia-económica</strong> y <strong>bienestar-social</strong> en el <strong>dilema-laboral</strong>.</p>
      </div>
      `,
      hint: "Riesgos, responsabilidades y diseño de salvaguardas éticas.",
      advanceAfter: 9,
      concepts: [
        { term: "inteligencia-artificial", priority: 9, meaning: "Sistemas que ejecutan tareas cognitivas (predicción, clasificación, decisión). Pueden escalar sesgos y afectar derechos." },
        { term: "dilema-algoritmico", priority: 9, meaning: "Conflicto cuando un modelo <em>opaco</em> decide sobre vidas (crédito, justicia, salud). Urge transparencia, auditoría y reparación." },
        { term: "discriminación", priority: 8, meaning: "Trato desigual injustificado hacia personas o grupos. En IA surge por datos sesgados o metas mal definidas." },
        { term: "vehículos-autónomos", priority: 7, meaning: "Sistemas de conducción sin intervención humana. Exigen reglas de seguridad, responsabilidad y priorización de riesgos." },
        { term: "dilema-moral-tecnológico", priority: 7, meaning: "Situaciones donde una máquina debe elegir entre daños inevitables; obliga a codificar principios morales." },
        { term: "programación-ética", priority: 9, meaning: "Diseño con <em>principios</em>: privacidad por defecto, explicabilidad, no discriminación, trazabilidad y mecanismos de apelación." },
        { term: "eficiencia-económica", priority: 6, meaning: "Maximizar beneficios/recursos. Si es fin único, puede ignorar derechos o impactos sociales." },
        { term: "bienestar-social", priority: 7, meaning: "Calidad de vida colectiva: salud, educación, trabajo digno, cohesión. Métrica clave junto al crecimiento." },
        { term: "dilema-laboral", priority: 6, meaning: "Tensión entre automatización y empleo. Respuestas: reconversión, renta básica parcial, políticas de transición justa." }
      ],
      corollary: [
        "Gobernar la IA requiere principios, regulaciones y diseño responsable.",
        "La ética aplicada conecta técnica, derecho y filosofía práctica."
      ]
    }
  ]
};
// """

// out_path = Path("/mnt/data/conceptos_etica_enhanced.js")
// out_path.write_text(enhanced_js, encoding="utf-8")
// print(f"Archivo generado en: {out_path}")
