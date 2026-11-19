// themes/etica/conceptos.js
// Caza de conceptos — Ética y moral
// v2.0 (2026-11-19): 8 niveles alineados con el video (cloze), el cuestionario y
// la caza anterior (antes: 5 niveles con negritas y términos con guiones);
// modelo de etica_aristoteles: sin negritas en el texto (el motor resalta los
// conceptos), términos con espacios y hay que encontrar todos los conceptos del
// párrafo para avanzar. El material propio de este tema debe seguir estos ejes.
// v2.1 (2026-11-19): párrafo 2 sin «latín» ni «mos» sueltos (no parecían
//   conceptos y trababan el avance): ahora «mos, moris», «carácter» y «hábitos».

window.CONCEPT_HUNT_CONFIG = {
  author: "Ética y filosofía moral",
  menuUrl: "tema.html?tema=etica",
  levels: [
    {
      html: `
      <p>Ética y moral suelen usarse como sinónimos, pero no son lo mismo. La ética es una rama de la filosofía: reflexiona sobre lo que es bueno o malo y busca los fundamentos de nuestras normas. La moral, en cambio, forma parte de la vida diaria: es el conjunto de normas y costumbres con las que vivimos. Por eso se dice que la ética es la moral pensada y la moral es la moral vivida.</p>
      `,
      hint: "Distingue la ética de la moral.",
      concepts: [
        { term: "ética", meaning: "Rama de la filosofía que reflexiona críticamente sobre la moral y busca sus fundamentos." },
        { term: "costumbres", meaning: "Formas de actuar compartidas por una sociedad. Junto con las normas, forman la moral." },
        { term: "filosofía", meaning: "Saber racional y crítico del que la ética forma parte." },
        { term: "fundamentos", meaning: "Las razones que justifican una norma. La ética pregunta por qué algo es bueno." },
        { term: "moral pensada", meaning: "Así se define la ética: la reflexión teórica sobre la moral." },
        { term: "moral vivida", meaning: "Así se define la moral: las normas que practicamos cada día." }
      ],
      corollary: [
        "La ética es la teoría; la moral, la práctica.",
        "La ética busca los fundamentos de la moral."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>📜 El origen de las palabras</h4>
        <p>La palabra ética proviene del griego ethos, que significa manera de hacer, costumbre o carácter; Aristóteles la entendía como una filosofía de las costumbres. Moral proviene del latín moralis, derivado de mos, moris: costumbre. Ambas palabras remiten a los hábitos, pero hoy las distinguimos: según Paul Ricoeur, la ética se ocupa de lo bueno y la moral de lo obligatorio.</p>
      </div>
      `,
      hint: "Busca las palabras de origen (griega y latina), qué significan y quién distingue ética y moral.",
      concepts: [
        { term: "ethos", meaning: "Palabra griega: costumbre, hábito, carácter, manera de ser. Origen de «ética»." },
        { term: "carácter", meaning: "Manera de ser que se forma con lo que hacemos. Es uno de los sentidos de ethos." },
        { term: "filosofía de las costumbres", meaning: "Traducción aristotélica de lo que estudia la ética." },
        { term: "mos, moris", meaning: "Palabra latina que significa costumbre. De ella viene moralis y de ahí «moral»." },
        { term: "hábitos", meaning: "Costumbres que repetimos. Ética y moral, por su origen, remiten a ellos." },
        { term: "Paul Ricoeur", meaning: "Filósofo francés que distingue la ética (lo bueno) de la moral (lo obligatorio)." },
        { term: "obligatorio", meaning: "Lo que una norma exige cumplir. Según Ricoeur, es el campo de la moral." }
      ],
      corollary: [
        "Ética viene del griego ethos; moral, del latín mos.",
        "La ética trata de lo bueno; la moral, de lo obligatorio."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>👤 Personal o social</h4>
        <p>La ética tiende a ser una postura personal: cada individuo la adopta desde su propia consciencia y suele ser constante en el tiempo. La moral, en cambio, es normativa: son códigos impuestos por una sociedad para regular la conducta, y no cumplirlos trae sanciones sociales o incluso penales. Por eso pueden entrar en conflicto: alguien puede rechazar la pena de muerte aunque su sociedad la acepte.</p>
      </div>
      `,
      hint: "Compara el alcance de la ética y el de la moral.",
      concepts: [
        { term: "personal", meaning: "La ética es una postura propia de cada individuo, según sus principios." },
        { term: "consciencia", meaning: "Capacidad interior de juzgar. Desde ella cada persona regula su conducta ética." },
        { term: "constante", meaning: "La ética no suele cambiar con el tiempo, a diferencia de los códigos morales." },
        { term: "normativa", meaning: "La moral se expresa en normas, reglamentos y prohibiciones." },
        { term: "sanciones", meaning: "Consecuencias sociales o penales que recibe quien no cumple el código moral." },
        { term: "conflicto", meaning: "Choque entre la ética de una persona y la moral de su sociedad." },
        { term: "pena de muerte", meaning: "Ejemplo de conflicto: una sociedad puede aceptarla y una persona rechazarla por razones éticas." }
      ],
      corollary: [
        "La ética es personal; la moral, social.",
        "La ética de alguien puede chocar con la moral de su sociedad."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>📘 Códigos y ejemplos</h4>
        <p>Muchas profesiones tienen códigos éticos con reglas de conducta de cumplimiento obligatorio. La Declaración Universal de Derechos Humanos, proclamada por las Naciones Unidas en 1948, reúne principios éticos de alcance global. Los códigos morales, como los diez mandamientos, se aplican a la vida cotidiana y pueden variar en el tiempo y el espacio: en una misma sociedad conviven valores distintos, porque la moral no es uniforme.</p>
      </div>
      `,
      hint: "Identifica ejemplos de códigos éticos y morales.",
      concepts: [
        { term: "códigos éticos", meaning: "Normas de conducta de una profesión (médicos, abogados, periodistas)." },
        { term: "Declaración Universal de Derechos Humanos", meaning: "Documento de la ONU (1948) que reúne principios éticos válidos para toda la humanidad." },
        { term: "diez mandamientos", meaning: "Ejemplo de código moral religioso que regula la conducta mediante preceptos y prohibiciones." },
        { term: "vida cotidiana", meaning: "Ámbito en el que se aplican los códigos morales: indican cómo actuar en cada situación." },
        { term: "variar", meaning: "Los códigos morales cambian según la época y el lugar." },
        { term: "uniforme", meaning: "Igual en todos lados. La moral no lo es: en una sociedad conviven valores diversos." }
      ],
      corollary: [
        "Hay códigos éticos profesionales y principios éticos universales.",
        "La moral cambia con el tiempo y el lugar."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🤔 Libertad y responsabilidad</h4>
        <p>Un acto puede evaluarse moralmente si lo realiza un agente libre y si afecta, o puede afectar, a otras personas. Sin libertad no hay responsabilidad: quien elige debe responder por las consecuencias de sus actos. El juicio moral evalúa una acción según valores y normas, y la conciencia moral nos permite juzgar nuestros propios actos. Para Sartre, estamos condenados a ser libres: incluso no elegir es una elección.</p>
      </div>
      `,
      hint: "Busca qué condiciones hacen que un acto sea moral.",
      concepts: [
        { term: "agente libre", meaning: "Persona que actúa por decisión propia, con conocimiento y sin coacción." },
        { term: "libertad", meaning: "Capacidad de elegir. Es la condición de todo acto moral." },
        { term: "responsabilidad", meaning: "Obligación de responder por las consecuencias de nuestros actos libres." },
        { term: "juicio moral", meaning: "Evaluación de una acción como buena o mala según valores y normas." },
        { term: "conciencia moral", meaning: "Capacidad interior de juzgar nuestras acciones según principios éticos." },
        { term: "condenados a ser libres", meaning: "Tesis de Sartre: no podemos dejar de elegir y somos responsables de lo que hacemos." }
      ],
      corollary: [
        "Sin libertad no hay responsabilidad.",
        "Incluso no elegir es una forma de elegir."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🧭 Grandes corrientes éticas</h4>
        <p>La deontología de Kant evalúa la máxima de una acción según si puede universalizarse. El utilitarismo busca maximizar el bienestar y minimizar el daño considerando las consecuencias. La ética de la virtud de Aristóteles propone formar el carácter con hábitos y prudencia. La ética del cuidado atiende a las relaciones y la vulnerabilidad del otro concreto. El contractualismo de Rawls elige principios de justicia detrás de un velo de ignorancia.</p>
      </div>
      `,
      hint: "Identifica cada corriente ética y su criterio principal.",
      concepts: [
        { term: "deontología", meaning: "Ética del deber (Kant): una acción es correcta si su máxima puede valer como ley universal." },
        { term: "utilitarismo", meaning: "Ética que juzga las acciones por sus consecuencias: el mayor bienestar para el mayor número." },
        { term: "ética de la virtud", meaning: "Ética de Aristóteles: busca formar un carácter excelente mediante hábitos y prudencia." },
        { term: "ética del cuidado", meaning: "Corriente (Gilligan, Noddings) que pone en el centro las relaciones y la vulnerabilidad." },
        { term: "contractualismo", meaning: "Corriente que funda las normas en un acuerdo racional entre personas libres e iguales." },
        { term: "velo de ignorancia", meaning: "Experimento mental de Rawls: elegir reglas sin saber qué lugar ocuparemos en la sociedad." }
      ],
      corollary: [
        "Cada corriente ética mira un aspecto distinto: deber, consecuencias, carácter, cuidado o acuerdo.",
        "Pensar con varias corrientes ayuda a decidir mejor."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🧠 Dilemas éticos</h4>
        <p>Un dilema ético aparece cuando dos valores entran en conflicto. En el dilema del tranvía, un tren se dirige hacia cinco personas y podemos desviarlo hacia otra vía donde hay una sola: ¿es correcto sacrificar a una para salvar a cinco? En el dilema médico, ¿podría un cirujano sacrificar a un visitante sano para salvar a cinco pacientes? Estos casos ponen en juego la vida humana, el consentimiento y la dignidad humana. Un soldado ante una orden injusta enfrenta la obediencia a su conciencia.</p>
      </div>
      `,
      hint: "Identifica los valores en conflicto en cada dilema.",
      concepts: [
        { term: "dilema ético", meaning: "Situación en la que hay que elegir entre dos valores o deberes en conflicto." },
        { term: "dilema del tranvía", meaning: "Caso clásico: desviar un tren para que mate a una persona en lugar de a cinco." },
        { term: "dilema médico", meaning: "Variante del tranvía: ¿sacrificar a una persona sana para salvar a cinco pacientes?" },
        { term: "vida humana", meaning: "Valor fundamental que está en juego en los dilemas éticos." },
        { term: "consentimiento", meaning: "Aceptación libre e informada de quien resulta afectado por una decisión." },
        { term: "dignidad humana", meaning: "Valor de toda persona, que impide usarla como simple medio." },
        { term: "obediencia", meaning: "Cumplir órdenes de una autoridad. Puede chocar con la conciencia ante una orden injusta." }
      ],
      corollary: [
        "Los dilemas muestran tensiones entre valores fundamentales.",
        "La ética no da respuestas automáticas, pero ayuda a pensar mejor."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🤖 Ética e inteligencia artificial</h4>
        <p>La inteligencia artificial ya toma decisiones que afectan vidas: diagnósticos, créditos, sentencias. Si aprende de datos con sesgos, puede reproducir la discriminación sin que nadie lo note. Los vehículos autónomos plantean cómo programar decisiones ante un accidente inevitable. Y la automatización enfrenta la eficiencia económica con el bienestar social. Siempre vuelve la pregunta: ¿quién es responsable, el programador, el usuario o el sistema?</p>
      </div>
      `,
      hint: "Busca los nuevos problemas éticos que plantea la tecnología.",
      concepts: [
        { term: "inteligencia artificial", meaning: "Sistemas que imitan capacidades humanas como razonar, percibir y decidir." },
        { term: "sesgos", meaning: "Distorsiones en los datos que llevan a resultados injustos." },
        { term: "discriminación", meaning: "Trato desigual hacia personas o grupos, que un algoritmo puede reforzar." },
        { term: "vehículos autónomos", meaning: "Autos sin conductor que deben estar programados para decidir en situaciones de riesgo." },
        { term: "eficiencia económica", meaning: "Obtener el máximo beneficio con los menores costos, a veces sin considerar el impacto social." },
        { term: "bienestar social", meaning: "Calidad de vida de la comunidad, que puede verse afectada por la automatización." },
        { term: "programador", meaning: "Quien diseña el sistema. Uno de los posibles responsables de sus decisiones." }
      ],
      corollary: [
        "La tecnología plantea dilemas éticos nuevos.",
        "Las decisiones de las máquinas siguen siendo responsabilidad humana."
      ]
    }
  ]
};
