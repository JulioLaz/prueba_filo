// themes/hedonismo/conceptos.js
// Caza de conceptos — Hedonismo: el placer como fin de la vida (Epicuro)
// v2.0 (2026-10-27): 8 niveles alineados con las 16 secciones del material
// (antes: 4 niveles y uno sobre utilitarismo, que es otro tema); sin negritas en
// el texto (el motor resalta los conceptos); hay que encontrar todos los
// conceptos del párrafo para avanzar (como en etica_aristoteles).

window.CONCEPT_HUNT_CONFIG = {
  author: "Epicuro y el hedonismo",
  menuUrl: "tema.html?tema=hedonismo",
  levels: [
    {
      html: `
      <p>El hedonismo es la doctrina que sostiene que el placer es el bien fundamental de la vida humana, y que la felicidad consiste en evitar el dolor y cultivar gozos estables. Pero la palabra placer es ambigua: puede ser un estímulo físico inmediato o un bienestar duradero. Según cómo la entendamos, el hedonismo será vulgar o refinado.</p>
      `,
      hint: "Buscá la definición del hedonismo y qué tiene de problemático la palabra placer.",
      concepts: [
        { term: "hedonismo", meaning: "Doctrina que considera el placer como el bien fundamental y el fin de la vida humana." },
        { term: "placer", meaning: "Para el hedonismo, el bien que todos buscamos. La palabra es ambigua: puede ser un estímulo inmediato o un bienestar estable." },
        { term: "dolor", meaning: "Lo contrario del placer: lo que todo ser vivo busca evitar." },
        { term: "felicidad", meaning: "Para el hedonismo, una vida sin dolor y con gozos estables." },
        { term: "ambigua", meaning: "Que tiene más de un sentido. La palabra placer es ambigua: de cómo la entendamos depende el tipo de hedonismo." }
      ],
      corollary: [
        "El placer es el bien fundamental para el hedonismo.",
        "No todos los placeres son iguales: hay que distinguir su calidad."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>📊 Dos formas de hedonismo</h4>
        <p>El hedonismo absoluto persigue estímulos sensibles inmediatos sin moderación. El hedonismo mitigado, en cambio, privilegia placeres más altos, como la amistad, el conocimiento y el arte, por su duración y estabilidad. Algunas críticas religiosas temen que buscar el placer fomente el egoísmo o las adicciones; Epicuro responde con una propuesta de moderación y serenidad.</p>
      </div>
      `,
      hint: "Identificá las dos formas de hedonismo y la crítica que recibe.",
      concepts: [
        { term: "hedonismo absoluto", meaning: "Forma de hedonismo que persigue estímulos inmediatos de los sentidos, sin moderación." },
        { term: "hedonismo mitigado", meaning: "También llamado eudemonista: prefiere placeres más altos y duraderos (amistad, conocimiento, arte)." },
        { term: "moderación", meaning: "Medida en la búsqueda de placeres: evita los excesos que terminan causando dolor." },
        { term: "estabilidad", meaning: "Cualidad de los placeres que duran y no dejan malestar después. Es lo que hace valiosos a los placeres altos." },
        { term: "críticas religiosas", meaning: "Objeciones de tradiciones religiosas: poner el placer primero degradaría lo espiritual y fomentaría el egoísmo." },
        { term: "egoísmo", meaning: "Buscar solo el propio beneficio. Es una de las acusaciones contra el hedonismo." }
      ],
      corollary: [
        "Hedonismo absoluto: placer inmediato y sin medida.",
        "Hedonismo mitigado: placeres altos, duraderos y moderados."
      ]
    },
    {
      html: `
      <p>Epicuro de Samos (341–270 a. C.) enseñó en Atenas y fundó el Jardín, una comunidad filosófica que valoraba la amistad y que aceptaba a mujeres y esclavos. Con el tiempo fue caricaturizado: unos lo acusaron de licencioso y otros lo vieron como un asceta. En realidad, propuso una vida sencilla de placer continuo y calculado, inseparable de la prudencia y la justicia.</p>
      `,
      hint: "Buscá quién fue Epicuro, su escuela y los malentendidos sobre él.",
      concepts: [
        { term: "Epicuro", meaning: "Filósofo griego (341–270 a. C.), el principal representante del hedonismo clásico." },
        { term: "Jardín", meaning: "La escuela de Epicuro en Atenas: una comunidad de amigos que vivían de manera sencilla y filosofaban juntos." },
        { term: "amistad", meaning: "Para Epicuro, uno de los mayores placeres y el sostén de la vida feliz." },
        { term: "licencioso", meaning: "Que vive entregado a los excesos. Es la caricatura falsa del epicúreo." },
        { term: "asceta", meaning: "Quien renuncia a los placeres. Epicuro tampoco lo era: no rechazaba el placer, lo ordenaba." },
        { term: "prudencia", meaning: "Sabiduría práctica para calcular qué placeres conviene buscar y cuáles evitar." }
      ],
      corollary: [
        "Epicuro no fue ni un libertino ni un asceta.",
        "Su ideal: una vida sencilla, con amigos y con placer calculado."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>🧘 La ataraxia</h4>
        <p>Para Epicuro no buscamos un pico interminable de intensidad, sino una vida de placer. El placer tiene un límite de intensidad, pero puede variar en sus formas: contemplación, amistad, descanso, diálogo. El estado ideal es la ataraxia, la imperturbabilidad del alma: serenidad, equilibrio y lucidez. No suprime las emociones; ordena los deseos para evitar la ansiedad que destruye el placer.</p>
      </div>
      `,
      hint: "Encontrá el estado ideal del sabio epicúreo y lo que lo amenaza.",
      concepts: [
        { term: "ataraxia", meaning: "Imperturbabilidad del alma: serenidad y paz mental. Es el estado ideal para Epicuro." },
        { term: "imperturbabilidad", meaning: "No dejarse alterar por lo que pasa: mantener la calma interior." },
        { term: "serenidad", meaning: "Calma del espíritu. Para Epicuro vale más que la excitación." },
        { term: "intensidad", meaning: "Fuerza de un placer. Tiene un límite: más intensidad no da más felicidad." },
        { term: "deseos", meaning: "Lo que nos mueve a buscar placeres. Hay que ordenarlos para no vivir en la ansiedad." },
        { term: "ansiedad", meaning: "Inquietud y temor constante. Es lo que destruye el placer y la ataraxia." }
      ],
      corollary: [
        "La serenidad supera a la excitación.",
        "La ataraxia no elimina las emociones: ordena los deseos."
      ]
    },
    {
      html: `
      <p>Para Epicuro, el placer es la ausencia de dolor: no tener hambre ni sed, ni ansiedad ni miedo. La ausencia de dolor del cuerpo se llama aponía, y la del alma, ataraxia. Ese estado tranquilo ya es bienestar. Los placeres sensuales, como el gusto, la música o el amor, no son malos, pero son medios y no fines: convertirlos en fin último genera adicción.</p>
      `,
      hint: "Buscá cómo define Epicuro el placer y qué lugar ocupan los sentidos.",
      concepts: [
        { term: "ausencia de dolor", meaning: "La definición epicúrea del placer: no sufrir en el cuerpo ni en el alma." },
        { term: "aponía", meaning: "Ausencia de dolor en el cuerpo. Junto con la ataraxia, forma el placer pleno." },
        { term: "bienestar", meaning: "El estado de no sufrir. Para Epicuro ya es valioso por sí mismo." },
        { term: "placeres sensuales", meaning: "Los placeres de los sentidos (gusto, música, amor). Son buenos como medios, no como fin último." },
        { term: "medios", meaning: "Lo que sirve para otra cosa. Los placeres sensuales deben servir a la serenidad." },
        { term: "adicción", meaning: "Dependencia que aparece cuando un placer sensual se vuelve el fin de la vida." }
      ],
      corollary: [
        "Placer = no sufrir en el cuerpo (aponía) ni en el alma (ataraxia).",
        "Los placeres de los sentidos son medios, no fines."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>😱 Dos grandes temores</h4>
        <p>Epicuro quiere liberarnos de dos temores que nos quitan la paz. Sobre los dioses: existen, pero viven felices y no intervienen en los asuntos humanos, así que no hay por qué temerlos. Sobre la muerte: mientras vivimos no la sentimos, y cuando llega ya no sentimos nada. Por eso concluye que la muerte no es nada para nosotros. La filosofía funciona como una medicina del alma.</p>
      </div>
      `,
      hint: "Identificá los dos temores y cómo los desarma Epicuro.",
      concepts: [
        { term: "temores", meaning: "Miedos que perturban el alma. Epicuro busca eliminar los dos principales." },
        { term: "dioses", meaning: "Para Epicuro existen, pero viven felices y no se ocupan de los humanos: no hay que temerlos." },
        { term: "muerte", meaning: "No es nada para nosotros: cuando estamos, ella no está; cuando ella llega, ya no estamos." },
        { term: "medicina del alma", meaning: "La filosofía, que cura el sufrimiento quitando miedos falsos y ordenando los deseos." }
      ],
      corollary: [
        "No hay que temer a los dioses ni a la muerte.",
        "La filosofía cura el alma de miedos falsos."
      ]
    },
    {
      html: `
      <p>La autarquía es la autosuficiencia razonable: depender menos de caprichos y cosas externas. La autarquía conduce a la ataraxia, y ésta a la felicidad. Así se distingue un hedonismo refinado, que busca placeres de alta calidad y duración como la belleza, la amistad y la filosofía, de un hedonismo vulgar, que gira en torno a la compulsión por estímulos y suele producir más dolor que gozo.</p>
      `,
      hint: "Buscá el camino hacia la felicidad y los dos tipos de hedonismo.",
      concepts: [
        { term: "autarquía", meaning: "Autosuficiencia: necesitar poco y no depender de caprichos externos. Lleva a la ataraxia." },
        { term: "autosuficiencia", meaning: "Bastarse a uno mismo con lo necesario." },
        { term: "hedonismo refinado", meaning: "El que busca placeres de calidad y duración: belleza, amistad, filosofía." },
        { term: "hedonismo vulgar", meaning: "El que vive de estímulos compulsivos y termina causando más dolor que placer." },
        { term: "compulsión", meaning: "Impulso que no se puede controlar. Es la marca del hedonismo vulgar." },
        { term: "calidad", meaning: "Lo que vale en un placer: pesa más que la cantidad." }
      ],
      corollary: [
        "Autarquía → ataraxia → felicidad.",
        "La calidad de los placeres pesa más que la cantidad."
      ]
    },
    {
      html: `
      <div class="highlight-box">
        <h4>📚 Ordenar los deseos</h4>
        <p>Epicuro clasifica los deseos en tres tipos. Los deseos naturales y necesarios, como la comida simple, el refugio y la amistad, hay que satisfacerlos. Los deseos naturales no necesarios, como los lujos, hay que moderarlos. Los deseos vanos, como la fama o la riqueza sin límite, hay que eliminarlos. Hoy esto se aplica al consumo, a las redes y al estudio, y su legado llega al utilitarismo.</p>
      </div>
      `,
      hint: "Identificá los tres tipos de deseos y qué hacer con cada uno.",
      concepts: [
        { term: "naturales y necesarios", meaning: "Deseos básicos (comida simple, refugio, amistad): hay que satisfacerlos." },
        { term: "naturales no necesarios", meaning: "Deseos naturales pero prescindibles, como los lujos: hay que moderarlos." },
        { term: "deseos vanos", meaning: "Deseos ni naturales ni necesarios (fama, riqueza sin límite): hay que eliminarlos." },
        { term: "lujos", meaning: "Ejemplo de deseo natural no necesario: comer manjares caros en vez de comida simple." },
        { term: "consumo", meaning: "Ámbito actual donde se aplica Epicuro: distinguir necesidades reales de lo que impone la publicidad." },
        { term: "utilitarismo", meaning: "Ética moderna (Bentham, Mill) que hereda del hedonismo la idea del placer como medida del bien." }
      ],
      corollary: [
        "Satisfacer lo necesario, moderar lo prescindible, eliminar lo vano.",
        "El epicureísmo sigue vigente: consumo, redes, estudio."
      ]
    }
  ]
};
