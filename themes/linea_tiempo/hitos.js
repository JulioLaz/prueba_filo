/*
 * themes/linea_tiempo/hitos.js — hitos de la línea de tiempo «¿Progresa la humanidad?».
 *
 * Base: la Línea del Tiempo del Prof. Julio Lazarte (50 hitos), con épocas corregidas
 * (la época sale de "sort") y 13 hitos nuevos: 5 argentinos, más técnica y violencia.
 * Campos: id, year (texto que se muestra), sort (año para ordenar; en filósofos, el de
 * su obra clave), clave (qué pasó ese año, solo filósofos), era, axis (pensamiento |
 * poder | tecnica | violencia | emancipacion), title, intro, desc, philosophy, figures.
 * Lo usan js/linea-tiempo.js (explorar, ordenar, simultáneos, termómetro).
 * Versión: v1.0 (2026-11-26)
 */
window.LINEA_EJES = {
  pensamiento: { nombre: 'Pensamiento', color: '#d69e2e', desc: 'Filosofía, ciencia y revoluciones del conocimiento' },
  poder: { nombre: 'Poder', color: '#e53e3e', desc: 'Imperios, Estados y formas de gobierno' },
  tecnica: { nombre: 'Técnica', color: '#3182ce', desc: 'Inventos que transformaron la vida humana' },
  violencia: { nombre: 'Violencia', color: '#805ad5', desc: 'Guerras y catástrofes que redefinieron el mundo' },
  emancipacion: { nombre: 'Emancipación', color: '#38a169', desc: 'Luchas por la libertad y la dignidad humana' },
};
window.LINEA_ERAS = [
 "Prehistoria y Antigüedad",
 "Edad Media (s. V – XV)",
 "Modernidad temprana (s. XVI – XVII)",
 "Ilustración y revoluciones (s. XVIII)",
 "Siglo XIX: independencias e industrialización",
 "Siglo XX: crisis de la modernidad",
 "Siglo XX: Guerra Fría y descolonización",
 "Fin del siglo XX y era digital",
 "Siglo XXI"
];
window.LINEA_HITOS = [
 {
  "id": "revolucion_neolitica",
  "year": "c. 10.000 a.C.",
  "sort": -10000,
  "era": "Prehistoria y Antigüedad",
  "axis": "tecnica",
  "title": "Revolución neolítica: la agricultura",
  "intro": "En el Creciente Fértil, los humanos empiezan a cultivar la tierra y a domesticar animales.",
  "desc": "Durante cientos de miles de años, los humanos vivieron como cazadores y recolectores nómades. Con la agricultura aparecen las aldeas, los graneros, el excedente de comida y, con él, la propiedad, la división del trabajo y las primeras desigualdades. Casi todo lo que vino después (ciudades, Estados, escritura) depende de este cambio.",
  "philosophy": "Rousseau verá en este paso el origen de la desigualdad: «el primero que cercó un terreno y dijo esto es mío» fundó la sociedad civil y sus males. La técnica resuelve el hambre, pero abre nuevas formas de dominación. Primera pista de que el progreso técnico no trae solo avances.",
  "figures": [
   "Creciente Fértil",
   "Rousseau (origen de la desigualdad)",
   "Gordon Childe"
  ]
 },
 {
  "id": "invencion_de_la_escritura",
  "year": "c. 3500 a.C.",
  "sort": -3500,
  "era": "Prehistoria y Antigüedad",
  "axis": "tecnica",
  "title": "Invención de la escritura",
  "intro": "Los sumerios crean la escritura cuneiforme en Mesopotamia.",
  "desc": "El nacimiento de la escritura no fue solo un avance técnico: fue la creación de la memoria externa de la humanidad. Por primera vez, el conocimiento podía sobrevivir a quien lo producía. Las tablillas de arcilla registraban contratos comerciales, pero también mitos, leyes y oraciones. La humanidad dejó de depender exclusivamente del cuerpo para transmitir su experiencia.",
  "philosophy": "Platón desconfiaría de la escritura: en el Fedro argumenta que debilita la memoria viva y crea la ilusión del conocimiento sin la comprensión real. Sin embargo, sin escritura no hay filosofía occidental tal como la conocemos. La tensión entre escritura y pensamiento vivo atraviesa toda la historia del saber.",
  "figures": [
   "Sumerios",
   "Mesopotamia",
   "Platón (crítica)",
   "Derrida (gramatología)"
  ]
 },
 {
  "id": "unificacion_del_egipto_faraonico",
  "year": "c. 3000 a.C.",
  "sort": -3000,
  "era": "Prehistoria y Antigüedad",
  "axis": "poder",
  "title": "Unificación del Egipto Faraónico",
  "intro": "Menes une el Alto y Bajo Egipto. Nace el primer Estado centralizado.",
  "desc": "El faraón no era solo un rey: era un dios viviente, intermediario entre el cosmos y los hombres. El Estado egipcio fusionó religión y política de forma tan radical que resultó casi indestructible durante 3.000 años. Nadie cuestionaba el poder porque cuestionar al faraón era cuestionar al orden del universo.",
  "philosophy": "¿Puede un Estado sostenerse solo por la fuerza? Egipto sugiere que no: la legitimidad requiere un relato sagrado. Maquiavelo lo entenderá siglos después: el príncipe necesita ser amado o temido, pero sobre todo, necesita que crean en él. Weber llamará a esto 'dominación carismática'.",
  "figures": [
   "Menes",
   "Maquiavelo",
   "Max Weber",
   "Durkheim (religión y sociedad)"
  ]
 },
 {
  "id": "codigo_de_hammurabi",
  "year": "c. 1750 a.C.",
  "sort": -1750,
  "era": "Prehistoria y Antigüedad",
  "axis": "poder",
  "title": "Código de Hammurabi",
  "intro": "Babilonia. Primera gran codificación legal escrita de la historia.",
  "desc": "282 leyes grabadas en una estela de basalto de 2,25 metros. El principio rector: 'ojo por ojo, diente por diente' (talión). No es crueldad sino proporcionalidad: la ley como límite a la venganza ilimitada. Por primera vez, el poder del rey quedaba escrito y, en teoría, era predecible para todos los ciudadanos.",
  "philosophy": "Hammurabi plantea la pregunta que obsesionará a toda la filosofía política: ¿qué funda la legitimidad de la ley? ¿La fuerza del soberano o la justicia en sí misma? Platón buscará la justicia como idea eterna; los sofistas dirán que la ley es convención del más fuerte. El debate sigue abierto.",
  "figures": [
   "Hammurabi",
   "Platón (justicia)",
   "Sofistas",
   "Hobbes",
   "Rawls"
  ]
 },
 {
  "id": "el_periodo_axial",
  "year": "c. 600–400 a.C.",
  "sort": -500,
  "clave": "c. 500 a.C.: Buda, Confucio, los presocráticos",
  "era": "Prehistoria y Antigüedad",
  "axis": "pensamiento",
  "title": "El Período Axial — Nacimiento de la Filosofía",
  "intro": "Buda, Confucio, Sócrates y los presocráticos irrumpen simultáneamente en el mundo.",
  "desc": "Karl Jaspers llamó 'período axial' al siglo V a.C.: por primera vez, en Grecia, India y China, pensadores radicales cuestionan el mito y la tradición con la razón. Los presocráticos buscan el arché (principio de todas las cosas). Sócrates afirma que 'solo sé que no sé nada' y convierte la duda en método. Buda diagnostica el sufrimiento y ofrece un camino de liberación. Confucio sistematiza la ética social.",
  "philosophy": "El giro axial es el momento en que la humanidad se pregunta a sí misma por qué. Ya no basta el mito para explicar el mundo: se exige razón, argumento, demostración. Tales de Mileto afirma que todo es agua —la primera explicación naturalista sin dioses. Anaxímenes dice que es aire; Heráclito, que es fuego en movimiento perpetuo. Nace la metafísica: la pregunta por el ser.",
  "figures": [
   "Tales",
   "Heráclito",
   "Parménides",
   "Sócrates",
   "Buda",
   "Confucio",
   "Jaspers"
  ]
 },
 {
  "id": "socrates",
  "year": "469–399 a.C.",
  "sort": -430,
  "clave": "c. 430 a.C.: dialoga en el ágora de Atenas",
  "era": "Prehistoria y Antigüedad",
  "axis": "pensamiento",
  "title": "Sócrates — El método del diálogo",
  "intro": "Sócrates no escribe nada, pero transforma para siempre el pensamiento occidental.",
  "desc": "Sócrates recorre Atenas interrogando a políticos, poetas y artesanos que se creen sabios. Siempre demuestra que no lo son. Su método, la mayéutica, es el arte de hacer parir ideas: mediante preguntas, conduce al interlocutor a descubrir la verdad por sí mismo. Es condenado a muerte por 'corromper a la juventud' y 'no creer en los dioses de la ciudad'. Bebe la cicuta sin escapar, fiel a las leyes que lo matan.",
  "philosophy": "La muerte de Sócrates es el acta de nacimiento de la filosofía política occidental. ¿Debe el individuo obedecer leyes injustas? ¿Qué es la justicia? ¿Puede la democracia matar a su mejor ciudadano? Platón responderá con la República. Thoreau y Gandhi usarán la misma pregunta para fundamentar la desobediencia civil.",
  "figures": [
   "Sócrates",
   "Platón",
   "Jenofonte",
   "Aristófanes",
   "Thoreau",
   "Gandhi"
  ]
 },
 {
  "id": "platon",
  "year": "427–347 a.C.",
  "sort": -387,
  "clave": "387 a.C.: funda la Academia",
  "era": "Prehistoria y Antigüedad",
  "axis": "pensamiento",
  "title": "Platón — El mundo de las Ideas",
  "intro": "Platón funda la Academia y construye el primer gran sistema filosófico de Occidente.",
  "desc": "Para Platón, el mundo visible es apenas una sombra del mundo verdadero: el mundo de las Ideas (o Formas), eternas e inmutables. Lo que vemos no es la belleza, la justicia o el bien: son copias imperfectas de los originales eternos. El alma inmortal conoció ese mundo antes de nacer; aprender es recordar (anamnesis). En La República, el filósofo-rey gobierna porque es el único que conoce la verdad.",
  "philosophy": "La teoría de las Ideas es la primera gran apuesta metafísica: hay un mundo más real que el mundo de los sentidos, accesible solo por la razón. Su mito de la caverna sigue siendo el relato más poderoso sobre la diferencia entre apariencia y realidad, ignorancia e iluminación. Toda la filosofía occidental es, según Whitehead, 'notas al pie de Platón'.",
  "figures": [
   "Platón",
   "Sócrates",
   "Aristóteles",
   "Whitehead",
   "Agustín de Hipona"
  ]
 },
 {
  "id": "imperio_de_alejandro_magno",
  "year": "336–323 a.C.",
  "sort": -336,
  "era": "Prehistoria y Antigüedad",
  "axis": "poder",
  "title": "Imperio de Alejandro Magno",
  "intro": "La primera globalización cultural: helenismo que fusiona Grecia, Persia, Egipto e India.",
  "desc": "En apenas 13 años, Alejandro conquista el mayor imperio conocido hasta entonces. Pero su legado no es solo militar: es cultural. El helenismo lleva la filosofía, la arquitectura, el arte y el idioma griego hasta la India. Alejandría de Egipto se convierte en la capital intelectual del mundo, con la mayor biblioteca de la antigüedad.",
  "philosophy": "Alejandro fue discípulo de Aristóteles, quien le enseñó que el bárbaro era inferior al griego. Sin embargo, Alejandro adoptó costumbres persas, se casó con princesas locales y promovió la mezcla de culturas. Surge el cosmopolitismo estoico: los seres humanos son ciudadanos del mundo (kosmopolites), no de una sola ciudad.",
  "figures": [
   "Alejandro Magno",
   "Aristóteles",
   "Zenón de Citio",
   "Diógenes el Cínico"
  ]
 },
 {
  "id": "aristoteles",
  "year": "384–322 a.C.",
  "sort": -335,
  "clave": "335 a.C.: funda el Liceo",
  "era": "Prehistoria y Antigüedad",
  "axis": "pensamiento",
  "title": "Aristóteles — La filosofía como enciclopedia",
  "intro": "Aristóteles sistematiza todo el saber de su época: lógica, ética, política, biología, metafísica.",
  "desc": "Discípulo de Platón pero radicalmente opuesto: para Aristóteles, la realidad está en las cosas concretas, no en un mundo separado de Ideas. Crea la lógica formal (silogismo), la ética de la virtud (eudaimonía: la vida buena como plenitud), la política (el ser humano como 'animal político') y el primer sistema de clasificación biológica. Tutor de Alejandro Magno.",
  "philosophy": "Aristóteles inventa la ética como disciplina autónoma. Su pregunta central: ¿qué es la vida buena? No se trata de obedecer reglas sino de desarrollar virtudes (arête) que nos hagan plenos como seres humanos. La felicidad (eudaimonía) no es placer ni riqueza: es la actividad del alma conforme a su excelencia. Dos mil años después, MacIntyre reivindicará esta ética frente al liberalismo.",
  "figures": [
   "Aristóteles",
   "Platón",
   "Alejandro Magno",
   "Tomás de Aquino",
   "MacIntyre"
  ]
 },
 {
  "id": "asesinato_de_julio_cesar",
  "year": "44 a.C.",
  "sort": -44,
  "era": "Prehistoria y Antigüedad",
  "axis": "poder",
  "title": "Asesinato de Julio César",
  "intro": "El fin de la República Romana y el inicio del Imperio.",
  "desc": "Los senadores que matan a César creen defender la República. En realidad, aceleran su fin. César había concentrado poder como ningún romano antes; su muerte desata guerras civiles que terminan con Augusto como primer emperador. La paradoja: para salvar la República, la destruyen.",
  "philosophy": "El asesinato de César plantea la pregunta del tiranicidio: ¿es legítimo matar a un tirano para salvar la República? Cicerón —el gran teórico republicano— justificó el magnicidio. Agustín y Tomás de Aquino debatirán los límites del poder legítimo. Maquiavelo estudiará a César como modelo del nuevo príncipe.",
  "figures": [
   "Julio César",
   "Cicerón",
   "Augusto",
   "Maquiavelo",
   "Brutus",
   "Marco Aurelio"
  ]
 },
 {
  "id": "jesus_de_nazaret",
  "year": "c. 30–33 d.C.",
  "sort": 30,
  "clave": "c. 30: predica en Galilea y Judea",
  "era": "Prehistoria y Antigüedad",
  "axis": "pensamiento",
  "title": "Jesús de Nazaret — El giro ético del amor",
  "intro": "La predicación de Jesús transforma la ética del mundo antiguo.",
  "desc": "Jesús no escribe nada, pero sus palabras transmitidas por los evangelios alteran la historia del mundo. Frente a la ética del honor greco-romana (la virtud del fuerte), proclama una ética del amor al prójimo, la misericordia y la igualdad ante Dios. El último será el primero. El poder se invierte: bienaventurados los pobres, los humildes, los que lloran.",
  "philosophy": "Nietzsche verá en el cristianismo una 'moral de esclavos': la inversión de valores que convierte la debilidad en virtud. Pero también es posible leer en Jesús la primera proclamación universal de la dignidad humana sin distinción de clase, género o etnia. Hannah Arendt encontrará en el perdón cristiano una categoría política fundamental: la posibilidad de comenzar de nuevo.",
  "figures": [
   "Jesús",
   "Pablo de Tarso",
   "Agustín",
   "Tomás de Aquino",
   "Nietzsche",
   "H. Arendt"
  ]
 },
 {
  "id": "san_agustin",
  "year": "354–430 d.C.",
  "sort": 400,
  "clave": "c. 400: escribe las Confesiones",
  "era": "Prehistoria y Antigüedad",
  "axis": "pensamiento",
  "title": "San Agustín — Fe y razón",
  "intro": "Agustín de Hipona construye el puente entre la filosofía griega y el pensamiento cristiano.",
  "desc": "Agustín es el gran sintetizador: toma el platonismo (el alma inmortal, el mundo inteligible) y lo pone al servicio de la teología cristiana. En las Confesiones escribe la primera autobiografía espiritual de Occidente. En La Ciudad de Dios, frente a la caída de Roma, opone dos ciudades: la terrenal (amor propio) y la celestial (amor a Dios).",
  "philosophy": "'Nuestro corazón está inquieto hasta que descanse en Ti.' Agustín inventa la interioridad: la búsqueda de la verdad hacia adentro, no hacia afuera. Descartes recorrerá siglos después el mismo camino con el cogito. La conciencia subjetiva como lugar de la verdad es una herencia agustiniana.",
  "figures": [
   "Agustín de Hipona",
   "Platón",
   "Descartes",
   "Wittgenstein"
  ]
 },
 {
  "id": "la_hegira",
  "year": "622 d.C.",
  "sort": 622,
  "era": "Edad Media (s. V – XV)",
  "axis": "pensamiento",
  "title": "La Hégira — Nacimiento del Islam y la filosofía árabe",
  "intro": "Muhammad parte de La Meca. Nace una civilización que preservará y expandirá el saber antiguo.",
  "desc": "El Islam no solo es una religión: es una civilización que durante la Edad Media fue el centro intelectual del mundo. Mientras Europa perdía los textos de Aristóteles, los filósofos árabes los traducían, comentaban y enriquecían. Avicena sintetizó la medicina y la metafísica; Averroes escribió los comentarios más influyentes sobre Aristóteles; Algazel criticó la filosofía desde la teología.",
  "philosophy": "La falsafa (filosofía árabe) plantea el problema de la doble verdad: ¿puede la razón contradecir la fe? Averroes dice que no hay contradicción posible: la verdad es una. Algazel responde con su Incoherencia de los filósofos. Este debate llegará a la Universidad de París y definirá a Tomás de Aquino.",
  "figures": [
   "Muhammad",
   "Avicena",
   "Averroes",
   "Algazel",
   "Maimónides",
   "Tomás de Aquino"
  ]
 },
 {
  "id": "la_magna_carta",
  "year": "1215",
  "sort": 1215,
  "era": "Edad Media (s. V – XV)",
  "axis": "emancipacion",
  "title": "La Magna Carta",
  "intro": "Los barones ingleses limitan el poder del rey Juan sin Tierra.",
  "desc": "Por primera vez en la historia occidental, un rey acepta por escrito que existen límites a su poder. La Carta establece que ningún hombre libre puede ser encarcelado, exiliado o dañado sin un juicio legal previo. Es el embrión del habeas corpus, el Estado de derecho y el constitucionalismo moderno.",
  "philosophy": "¿De dónde viene la obligación del rey de respetar la ley? La Carta sugiere que hay un derecho natural anterior al poder político. Locke desarrollará esta idea: el gobierno es un contrato; si el soberano lo viola, el pueblo tiene derecho a resistir. Rousseau radicalizará la idea: la soberanía pertenece al pueblo, no al rey.",
  "figures": [
   "Juan sin Tierra",
   "Locke",
   "Rousseau",
   "Montesquieu",
   "Kant"
  ]
 },
 {
  "id": "tomas_de_aquino",
  "year": "1224–1274",
  "sort": 1265,
  "clave": "1265: empieza la Suma teológica",
  "era": "Edad Media (s. V – XV)",
  "axis": "pensamiento",
  "title": "Tomás de Aquino — Fe, razón y síntesis medieval",
  "intro": "Tomás construye la gran síntesis entre Aristóteles y el cristianismo.",
  "desc": "La Suma Teológica de Tomás de Aquino es la catedral intelectual de la Edad Media: 3.000 artículos que intentan armonizar la razón (Aristóteles) con la fe (Biblia). Tomás argumenta que la razón natural puede demostrar la existencia de Dios (cinco vías) pero no puede comprender el misterio de la Trinidad: allí comienza la fe.",
  "philosophy": "Tomás inventa la filosofía cristiana del derecho natural: existe una ley eterna (en la mente de Dios), una ley natural (accesible por la razón humana) y una ley positiva (hecha por los hombres). Una ley positiva injusta no es verdadera ley: puede resistirse. Esta doctrina fundará siglos después la teología de la liberación.",
  "figures": [
   "Tomás de Aquino",
   "Aristóteles",
   "Agustín",
   "Averroes",
   "Grocio",
   "Maritain"
  ]
 },
 {
  "id": "la_peste_negra",
  "year": "1347–1353",
  "sort": 1347,
  "era": "Edad Media (s. V – XV)",
  "axis": "violencia",
  "title": "La Peste Negra",
  "intro": "El 30–60% de Europa muere. La catástrofe que sacude la fe medieval.",
  "desc": "La Yersinia pestis llega desde Asia central y en seis años mata entre 25 y 50 millones de personas en Europa. Los flagelantes se azotan en público para aplacar la ira divina. Los judíos son masacrados acusados de envenenar los pozos. La Iglesia pierde credibilidad: sus rezos no detienen la muerte. El feudalismo se tambalea porque los pocos sobrevivientes campesinos ahora tienen poder de negociación.",
  "philosophy": "La Peste plantea el problema del mal con brutalidad inédita: ¿cómo puede existir un Dios bueno y omnipotente si permite esto? El problema de la teodicea (justificación de Dios ante el mal) se vuelve urgente. Agustín lo había planteado; Leibniz intentará resolverlo; Voltaire lo destruirá con el terremoto de Lisboa.",
  "figures": [
   "Agustín (teodicea)",
   "Leibniz",
   "Voltaire",
   "Camus (La Peste)",
   "Boccaccio"
  ]
 },
 {
  "id": "imprenta_de_gutenberg",
  "year": "1450",
  "sort": 1450,
  "era": "Edad Media (s. V – XV)",
  "axis": "tecnica",
  "title": "Imprenta de Gutenberg",
  "intro": "La reproducción masiva del conocimiento rompe el monopolio del saber.",
  "desc": "Antes de Gutenberg, un libro tardaba meses en copiarse a mano. La imprenta de tipos móviles permite imprimir cientos de copias en horas. En 50 años, hay más libros en Europa que en todos los siglos anteriores juntos. La Biblia deja de ser solo del clero. Cualquiera puede leerla —y discutirla.",
  "philosophy": "La imprenta hace posible la Reforma protestante: sin ella, Lutero no es Lutero. Hace posible la ciencia moderna: los hallazgos pueden circular y corregirse en red. Habermas ve en la imprenta el origen de la esfera pública. McLuhan dirá que el medio es el mensaje.",
  "figures": [
   "Gutenberg",
   "Lutero",
   "McLuhan",
   "Habermas",
   "Erasmo de Rotterdam"
  ]
 },
 {
  "id": "llegada_de_colon_a_america",
  "year": "1492",
  "sort": 1492,
  "era": "Modernidad temprana (s. XVI – XVII)",
  "axis": "poder",
  "title": "Llegada de Colón a América",
  "intro": "El encuentro que cambió ambos mundos. Inicio del colonialismo global.",
  "desc": "Colón llega creyendo que está en Asia. Lo que encuentra es un continente de 60–80 millones de personas con civilizaciones avanzadas: aztecas, mayas, incas. En un siglo, el 90% de la población indígena morirá por enfermedades, guerras y esclavitud. El oro americano financia la modernidad europea.",
  "philosophy": "Bartolomé de las Casas denuncia el genocidio y plantea la primera gran debate sobre derechos universales: ¿tienen los indígenas alma? ¿Puede haber guerra justa contra ellos? La Escuela de Salamanca (Francisco de Vitoria) funda el derecho internacional moderno respondiendo estas preguntas.",
  "figures": [
   "Colón",
   "Bartolomé de las Casas",
   "Francisco de Vitoria",
   "Todorov",
   "Dussel"
  ]
 },
 {
  "id": "maquiavelo",
  "year": "1469–1527",
  "sort": 1513,
  "clave": "1513: escribe El Príncipe",
  "era": "Modernidad temprana (s. XVI – XVII)",
  "axis": "pensamiento",
  "title": "Maquiavelo — El realismo político",
  "intro": "El Príncipe separa por primera vez la política de la moral.",
  "desc": "Maquiavelo escribe El Príncipe después de ser torturado por los Médici y perder su cargo. Su tesis escandaliza: el gobernante no puede actuar según la moral cristiana si quiere mantener el poder. La política tiene sus propias reglas. Es mejor ser temido que amado. Las apariencias son más importantes que la realidad.",
  "philosophy": "Maquiavelo es el primer pensador moderno porque describe la política como es, no como debería ser. Separa el ser del deber ser. Funda el realismo político que continuarán Hobbes, Morgenthau y Kissinger. Gramsci lo releerá desde la izquierda: el 'moderno príncipe' es el partido político que organiza la voluntad colectiva.",
  "figures": [
   "Maquiavelo",
   "Hobbes",
   "Gramsci",
   "Max Weber",
   "Schmitt",
   "Arendt"
  ]
 },
 {
  "id": "reforma_protestante",
  "year": "1517",
  "sort": 1517,
  "era": "Modernidad temprana (s. XVI – XVII)",
  "axis": "pensamiento",
  "title": "Reforma Protestante — Lutero",
  "intro": "Las 95 tesis cuestionan la autoridad papal. Nace la conciencia individual moderna.",
  "desc": "Lutero clava sus 95 tesis en la puerta de Wittenberg protestando contra la venta de indulgencias. Pero su revolución va más lejos: proclama que cada cristiano puede interpretar la Biblia por sí mismo, sin intermediarios. La autoridad de la Iglesia cede ante la conciencia individual. En el juicio de Worms, ante el emperador, dice: 'Aquí estoy, no puedo hacer otra cosa'.",
  "philosophy": "La Reforma es la revolución de la conciencia individual. Para Hegel, es el momento en que el espíritu humano toma conciencia de su propia libertad. Max Weber verá en la ética protestante el origen del capitalismo moderno. La autonomía moral de Kant —actúa según tu propia razón— es el hijo secular del protestantismo.",
  "figures": [
   "Lutero",
   "Calvino",
   "Erasmo",
   "Hegel",
   "Max Weber",
   "Kant",
   "Münzer"
  ]
 },
 {
  "id": "la_conquista_de_america",
  "year": "c. 1519–1550",
  "sort": 1521,
  "era": "Modernidad temprana (s. XVI – XVII)",
  "axis": "violencia",
  "title": "La Conquista de América",
  "intro": "Caída de Tenochtitlan (1521) y del Imperio inca (1533). Una catástrofe demográfica sin precedentes.",
  "desc": "La conquista española destruyó los grandes imperios americanos. Guerras, trabajos forzados y, sobre todo, las enfermedades traídas de Europa hicieron que la población originaria cayera, según muchas estimaciones, en más del 80% en un siglo. Para Europa fue la entrada a la modernidad; para los pueblos originarios, el fin de su mundo.",
  "philosophy": "En la Controversia de Valladolid (1550), Bartolomé de las Casas defendió que los indígenas eran plenamente humanos y tenían derechos, contra Sepúlveda, que justificaba la conquista. Dussel dirá que la modernidad nace en 1492 con un rostro oculto: la violencia sobre el otro.",
  "figures": [
   "Bartolomé de las Casas",
   "Sepúlveda",
   "Enrique Dussel"
  ]
 },
 {
  "id": "copernico",
  "year": "1543",
  "sort": 1543,
  "era": "Modernidad temprana (s. XVI – XVII)",
  "axis": "pensamiento",
  "title": "Copérnico — La Tierra no es el centro",
  "intro": "El heliocentrismo desplaza a la humanidad del centro del universo.",
  "desc": "Nicolás Copérnico publica De revolutionibus orbium coelestium en el año de su muerte. Su tesis: la Tierra gira alrededor del Sol, no al revés. Galileo las entenderá demasiado bien: lo obligarán a retractarse bajo amenaza de tortura. Bruno no se retractará: lo quemarán vivo.",
  "philosophy": "El giro copernicano es el símbolo máximo de la revolución científica moderna. Kant lo usará metafóricamente: así como Copérnico cambió la perspectiva, Kant propone que no son los objetos los que se conforman a nuestra razón, sino nuestra razón la que impone sus formas a los objetos.",
  "figures": [
   "Copérnico",
   "Galileo",
   "Bruno",
   "Kepler",
   "Newton",
   "Kant (giro copernicano)"
  ]
 },
 {
  "id": "la_trata_atlantica_de_esclavos",
  "year": "s. XVI – XIX",
  "sort": 1600,
  "era": "Modernidad temprana (s. XVI – XVII)",
  "axis": "violencia",
  "title": "La trata atlántica de esclavos",
  "intro": "Más de 12 millones de africanos son llevados por la fuerza a América para trabajar como esclavos.",
  "desc": "Durante más de tres siglos, barcos europeos transportaron personas secuestradas en África hacia las plantaciones y minas de América. Millones murieron en la travesía. La esclavitud fue legal, rentable y defendida por leyes y discursos científicos y religiosos. Sobre ese trabajo forzado se construyó buena parte de la riqueza del mundo moderno.",
  "philosophy": "¿Cómo convivieron la Ilustración, que proclamaba la libertad y la igualdad, y la esclavitud? Muchos filósofos la criticaron, otros la toleraron. La pregunta muestra que las ideas de emancipación avanzan despacio y con contradicciones: los derechos se proclaman antes de alcanzar a todos.",
  "figures": [
   "Olaudah Equiano",
   "Montesquieu (crítica)",
   "Frederick Douglass"
  ]
 },
 {
  "id": "descartes",
  "year": "1596–1650",
  "sort": 1637,
  "clave": "1637: publica el Discurso del método",
  "era": "Modernidad temprana (s. XVI – XVII)",
  "axis": "pensamiento",
  "title": "Descartes — El cogito y la duda metódica",
  "intro": "Descartes funda la filosofía moderna con una pregunta radical: ¿de qué podemos estar seguros?",
  "desc": "Descartes decide dudar de todo lo que puede dudarse: los sentidos engañan, los sueños se confunden con la vigilia, podría haber un demonio maligno que distorsione todo. Solo hay algo de lo que no puede dudar: que está dudando. 'Pienso, luego existo' (cogito ergo sum). El yo pensante se convierte en el primer fundamento firme del conocimiento.",
  "philosophy": "El cogito cartesiano inaugura la modernidad filosófica: el punto de partida ya no es Dios ni la tradición sino el sujeto racional. Pero crea el problema mente-cuerpo: si el alma es pura razón y el cuerpo es pura extensión, ¿cómo interactúan? Este dualismo cartesiano aún persiste en el debate contemporáneo. Gilbert Ryle lo llamará 'el fantasma en la máquina'.",
  "figures": [
   "Descartes",
   "Spinoza",
   "Locke",
   "Hume",
   "Kant",
   "Ryle",
   "Chomsky"
  ]
 },
 {
  "id": "hobbes",
  "year": "1588–1679",
  "sort": 1651,
  "clave": "1651: publica el Leviatán",
  "era": "Modernidad temprana (s. XVI – XVII)",
  "axis": "pensamiento",
  "title": "Hobbes — El Leviatán y el contrato social",
  "intro": "Hobbes justifica el Estado absoluto a partir de la razón, no de Dios.",
  "desc": "Hobbes escribe el Leviatán durante la guerra civil inglesa. Su punto de partida: en el estado de naturaleza (sin Estado), la vida humana es 'solitaria, pobre, desagradable, brutal y corta'. Para salir de esa guerra de todos contra todos, los hombres ceden sus derechos a un soberano absoluto mediante un contrato.",
  "philosophy": "Hobbes es el primer gran teórico del contrato social secular. Su imagen del ser humano es pesimista: movido por el miedo y el deseo de poder. Locke responderá que el estado de naturaleza es tolerable y que el contrato solo limita el poder del Estado para proteger derechos previos. Rousseau invertirá todo: el hombre natural es bueno; la sociedad lo corrompe.",
  "figures": [
   "Hobbes",
   "Locke",
   "Rousseau",
   "Spinoza",
   "Rawls",
   "Nozick"
  ]
 },
 {
  "id": "spinoza",
  "year": "1632–1677",
  "sort": 1677,
  "clave": "1677: se publica la Ética",
  "era": "Modernidad temprana (s. XVI – XVII)",
  "axis": "pensamiento",
  "title": "Spinoza — Dios es la Naturaleza",
  "intro": "Spinoza construye la filosofía más radical de su época.",
  "desc": "El rabino Spinoza es excomulgado de la comunidad judía de Ámsterdam con la excomunión más severa registrada. Su crimen: identificar a Dios con la Naturaleza (Deus sive Natura). Para Spinoza, todo lo que existe es un solo y único ser infinito. No hay milagros, no hay libre albedrío, no hay alma separada del cuerpo. La ética no se funda en mandamientos sino en la comprensión de las causas.",
  "philosophy": "Spinoza es el filósofo más odiado y más admirado de la modernidad. Para él, la libertad no es hacer lo que uno quiere (eso es servidumbre a las pasiones) sino actuar conforme a la razón, entendiendo las causas que nos determinan. Su Tratado Teológico-Político es la primera defensa sistemática de la libertad de expresión y la separación Iglesia-Estado.",
  "figures": [
   "Spinoza",
   "Descartes",
   "Leibniz",
   "Hegel",
   "Nietzsche",
   "Deleuze"
  ]
 },
 {
  "id": "maquina_de_vapor_y_revolucion_industrial",
  "year": "1769",
  "sort": 1769,
  "era": "Ilustración y revoluciones (s. XVIII)",
  "axis": "tecnica",
  "title": "Máquina de vapor y Revolución Industrial",
  "intro": "James Watt perfecciona la máquina de vapor. Empieza la era de las fábricas.",
  "desc": "La energía del vapor reemplaza a la fuerza humana, animal y del agua. Aparecen las fábricas, el ferrocarril y las grandes ciudades industriales. La producción se multiplica como nunca antes, pero también las jornadas de 14 horas, el trabajo infantil y la contaminación. En pocas décadas, el ritmo del cambio técnico se acelera de golpe.",
  "philosophy": "Marx analizará cómo la máquina, que podría liberar al ser humano del trabajo pesado, termina sometiendo al obrero a su ritmo: es la alienación. La técnica aumenta la riqueza total, pero no decide por sí misma cómo se reparte.",
  "figures": [
   "James Watt",
   "Adam Smith",
   "Marx (alienación)"
  ]
 },
 {
  "id": "independencia_de_ee_uu",
  "year": "1776",
  "sort": 1776,
  "era": "Ilustración y revoluciones (s. XVIII)",
  "axis": "emancipacion",
  "title": "Independencia de EE.UU.",
  "intro": "El primer Estado moderno fundado sobre principios ilustrados.",
  "desc": "La Declaración de Independencia proclama verdades 'evidentes por sí mismas': todos los hombres son creados iguales y poseen derechos inalienables a la vida, la libertad y la búsqueda de la felicidad. Es la primera vez que una nación se funda no en la sangre o la religión sino en ideas abstractas. La paradoja brutal: sus redactores eran esclavistas.",
  "philosophy": "Jefferson y Madison tomaron directamente de Locke la idea de derechos naturales y contrato social. Su contradicción fundacional —libertad proclamada, esclavitud practicada— será el nudo que ningún liberalismo ha podido desatar completamente.",
  "figures": [
   "Jefferson",
   "Locke",
   "Montesquieu",
   "Madison",
   "T. Paine",
   "Toni Morrison"
  ]
 },
 {
  "id": "kant",
  "year": "1724–1804",
  "sort": 1781,
  "clave": "1781: publica la Crítica de la razón pura",
  "era": "Ilustración y revoluciones (s. XVIII)",
  "axis": "pensamiento",
  "title": "Kant — La razón como legisladora",
  "intro": "Kant realiza la revolución filosófica más importante de la modernidad.",
  "desc": "Emmanuel Kant no sale de Königsberg pero revoluciona el pensamiento universal. En la Crítica de la razón pura (1781) demuestra que no podemos conocer las cosas en sí mismas (noúmeno) sino solo como se nos aparecen. En la Crítica de la razón práctica formula el imperativo categórico: actúa solo según aquella máxima que puedas querer que sea ley universal.",
  "philosophy": "El imperativo categórico es la fórmula más influyente de la ética deontológica: actúa siempre tratando a la humanidad —en tu persona y en la de los demás— como fin en sí mismo, nunca solo como medio. Esta distinción funda la dignidad humana moderna. La Declaración Universal de Derechos Humanos es kantiana en su estructura.",
  "figures": [
   "Kant",
   "Hume",
   "Rousseau",
   "Fichte",
   "Hegel",
   "Habermas",
   "Rawls"
  ]
 },
 {
  "id": "revolucion_francesa",
  "year": "1789",
  "sort": 1789,
  "era": "Ilustración y revoluciones (s. XVIII)",
  "axis": "poder",
  "title": "Revolución Francesa",
  "intro": "Liberté, Égalité, Fraternité. El pueblo soberano derroca al rey.",
  "desc": "El 14 de julio de 1789, el pueblo toma la Bastilla. En meses, la monarquía absoluta de mil años cae. La Declaración de los Derechos del Hombre proclama la soberanía popular, la igualdad ante la ley, la libertad de expresión. Luis XVI es guillotinado. La Revolución devora a sus propios hijos en el Terror. Robespierre muere en la misma guillotina que firmaba.",
  "philosophy": "La Revolución es el laboratorio de todas las filosofías políticas modernas. Burke critica el racionalismo abstracto (nace el conservadurismo). Paine defiende los derechos del hombre. Marx verá en la Revolución la revolución burguesa que prepara la proletaria. Hegel considerará a Napoleón 'el espíritu del mundo a caballo'.",
  "figures": [
   "Robespierre",
   "Burke",
   "Paine",
   "Hegel",
   "Marx",
   "Arendt",
   "Tocqueville"
  ]
 },
 {
  "id": "revolucion_haitiana",
  "year": "1791",
  "sort": 1791,
  "era": "Ilustración y revoluciones (s. XVIII)",
  "axis": "emancipacion",
  "title": "Revolución Haitiana",
  "intro": "Los esclavos de Saint-Domingue se liberan. La primera república negra del mundo.",
  "desc": "Toussaint Louverture conduce la única revolución de esclavos exitosa de la historia. En 1804, Haití declara su independencia —la primera nación negra libre del mundo moderno. Francia cobra venganza: en 1825 impone una deuda de 150 millones de francos. Haití termina de pagar esa deuda en 1947.",
  "philosophy": "La Revolución Haitiana es la prueba de fuego de la Ilustración: ¿los 'derechos del hombre' son para todos los hombres o solo para los blancos europeos? Toussaint Louverture toma a la Ilustración en serio más que sus propios creadores.",
  "figures": [
   "Toussaint Louverture",
   "Rousseau",
   "C.L.R. James",
   "Fanon",
   "Césaire"
  ]
 },
 {
  "id": "hegel",
  "year": "1770–1831",
  "sort": 1807,
  "clave": "1807: publica la Fenomenología del espíritu",
  "era": "Siglo XIX: independencias e industrialización",
  "axis": "pensamiento",
  "title": "Hegel — La dialéctica y el espíritu de la historia",
  "intro": "Hegel construye el sistema filosófico más ambicioso de la modernidad.",
  "desc": "Para Hegel, la realidad no es estática sino un proceso: la dialéctica (tesis–antítesis–síntesis). La historia no es un caos de guerras y accidentes sino el desarrollo del Espíritu (Geist) hacia la autoconciencia. El fin de la historia es la libertad.",
  "philosophy": "La filosofía de Hegel es el punto de inflexión del pensamiento occidental. Su legado se bifurca: los hegelianos de derecha ven en el Estado prusiano el fin de la historia. Los hegelianos de izquierda (Marx) invierten la dialéctica: no son las ideas las que mueven la historia sino las condiciones materiales.",
  "figures": [
   "Hegel",
   "Marx",
   "Kierkegaard",
   "Nietzsche",
   "Croce",
   "Kojève",
   "Fukuyama"
  ]
 },
 {
  "id": "revolucion_de_mayo",
  "year": "1810",
  "sort": 1810,
  "era": "Siglo XIX: independencias e industrialización",
  "axis": "poder",
  "title": "Revolución de Mayo",
  "intro": "En Buenos Aires, un cabildo abierto destituye al virrey y forma la Primera Junta.",
  "desc": "Aprovechando la crisis de la monarquía española, ocupada por Napoleón, los criollos de Buenos Aires reemplazaron al virrey Cisneros por un gobierno propio: la Primera Junta, presidida por Saavedra, con Moreno y Belgrano entre sus miembros. Fue el primer paso hacia la independencia y hacia la idea de que el poder surge del pueblo.",
  "philosophy": "Los revolucionarios se apoyaban en la idea de que, si falta el rey, la soberanía vuelve al pueblo. Mariano Moreno tradujo El contrato social de Rousseau. Las ideas de la Ilustración y de la Revolución Francesa cruzaron el océano y se volvieron acción política.",
  "figures": [
   "Mariano Moreno",
   "Manuel Belgrano",
   "Cornelio Saavedra",
   "Rousseau"
  ]
 },
 {
  "id": "independencia_argentina_en_tucuman",
  "year": "1816",
  "sort": 1816,
  "era": "Siglo XIX: independencias e industrialización",
  "axis": "emancipacion",
  "title": "Independencia argentina en Tucumán",
  "intro": "El 9 de julio, el Congreso reunido en San Miguel de Tucumán declara la independencia.",
  "desc": "En una casa de Tucumán, diputados de las provincias declararon la independencia de las Provincias Unidas en Sud América «de los reyes de España y de toda otra dominación extranjera». El contexto era difícil: en Europa volvían las monarquías y San Martín preparaba el cruce de los Andes. Declarar la independencia fue una decisión audaz.",
  "philosophy": "Independencia significa darse la propia ley: es la idea de autonomía que Kant defendía para la razón, llevada a un pueblo. Pero la emancipación política no trajo de inmediato la igualdad: los pueblos originarios, los afrodescendientes y las mujeres quedaron afuera durante mucho tiempo.",
  "figures": [
   "Congreso de Tucumán",
   "San Martín",
   "Belgrano",
   "Kant (autonomía)"
  ]
 },
 {
  "id": "kierkegaard",
  "year": "1813–1855",
  "sort": 1843,
  "clave": "1843: publica O lo uno o lo otro",
  "era": "Siglo XIX: independencias e industrialización",
  "axis": "pensamiento",
  "title": "Kierkegaard — El individuo y la angustia",
  "intro": "Kierkegaard, padre del existencialismo, enfrenta al individuo con su propia libertad.",
  "desc": "Søren Kierkegaard se burla de la filosofía sistemática de Hegel: la verdad no se deduce de un sistema, se vive desde la experiencia individual. Define tres estadios de la existencia: el estético (búsqueda del placer), el ético (deber y normas) y el religioso (el salto de fe).",
  "philosophy": "Kierkegaard inventa la angustia como categoría filosófica: el vértigo ante la libertad. No la angustia por algo concreto (miedo), sino la angustia por la libertad misma, por la posibilidad de elegir. Heidegger desarrollará esta idea en Ser y Tiempo. Sartre la secularizará.",
  "figures": [
   "Kierkegaard",
   "Hegel",
   "Dostoievski",
   "Heidegger",
   "Sartre",
   "Camus"
  ]
 },
 {
  "id": "marx",
  "year": "1818–1883",
  "sort": 1848,
  "clave": "1848: publica el Manifiesto comunista",
  "era": "Siglo XIX: independencias e industrialización",
  "axis": "pensamiento",
  "title": "Marx — La crítica del capitalismo",
  "intro": "Marx analiza el capitalismo y propone su superación mediante la lucha de clases.",
  "desc": "Karl Marx es el filósofo más influyente del siglo XX. En El Capital desmonta el funcionamiento del capitalismo: el trabajador vende su fuerza de trabajo por un salario menor al valor que produce; la diferencia es la plusvalía que acumula el capitalista. La historia es la historia de la lucha de clases.",
  "philosophy": "Marx invierte a Hegel: no son las ideas las que mueven la historia sino las condiciones materiales de producción. Su concepto de alienación —el trabajador se convierte en extraño a su propio producto— es central para entender la crítica cultural contemporánea.",
  "figures": [
   "Marx",
   "Engels",
   "Hegel",
   "Feuerbach",
   "Gramsci",
   "Adorno",
   "Althusser"
  ]
 },
 {
  "id": "darwin",
  "year": "1859",
  "sort": 1859,
  "era": "Siglo XIX: independencias e industrialización",
  "axis": "pensamiento",
  "title": "Darwin — El Origen de las Especies",
  "intro": "La evolución por selección natural desplaza al diseño divino de la naturaleza.",
  "desc": "Darwin reúne evidencias de 20 años de investigación para demostrar que todas las especies —incluido el ser humano— son el resultado de variaciones aleatorias y selección natural. No hay diseñador; no hay propósito; no hay jerarquía cósmica que ponga al hombre en la cima.",
  "philosophy": "El impacto filosófico de Darwin es doble: amenaza el dualismo cartesiano y el excepcionalismo humano. Spencer inventará el 'darwinismo social' (perversión de Darwin que justifica el capitalismo salvaje). Dewey usará la evolución para fundar el pragmatismo.",
  "figures": [
   "Darwin",
   "Huxley",
   "Spencer",
   "Dewey",
   "Dawkins",
   "Wilson (sociobiología)"
  ]
 },
 {
  "id": "nietzsche",
  "year": "1844–1900",
  "sort": 1883,
  "clave": "1883: publica Así habló Zaratustra",
  "era": "Siglo XIX: independencias e industrialización",
  "axis": "pensamiento",
  "title": "Nietzsche — La muerte de Dios y la voluntad de poder",
  "intro": "Nietzsche declara la muerte de Dios y desafía los valores de la modernidad.",
  "desc": "'Dios ha muerto. Dios sigue muerto. Y nosotros lo hemos matado.' Con estas palabras, Nietzsche diagnostica la crisis de la modernidad: la ciencia y el racionalismo han destruido el fundamento metafísico de los valores occidentales. Su respuesta: la revalorización de todos los valores y el Übermensch como ideal de quien crea sus propios valores.",
  "philosophy": "Nietzsche es el filósofo de la sospecha: desconfía de la razón, la moral y la metafísica como disfraces del deseo de poder. Critica el platonismo, el cristianismo (moral de esclavos) y el socialismo. Foucault y Derrida lo reivindicarán en el siglo XX.",
  "figures": [
   "Nietzsche",
   "Schopenhauer",
   "Wagner",
   "Heidegger",
   "Foucault",
   "Derrida",
   "Vattimo"
  ]
 },
 {
  "id": "einstein_freud_saussure",
  "year": "1905–1921",
  "sort": 1905,
  "clave": "1905: Einstein publica la relatividad especial",
  "era": "Siglo XX: crisis de la modernidad",
  "axis": "pensamiento",
  "title": "Einstein, Freud, Saussure — El mundo se fragmenta",
  "intro": "Tres revoluciones simultáneas derrumban las certezas del siglo XIX.",
  "desc": "En apenas dos décadas, tres pensadores transforman radicalmente la comprensión de la realidad. Einstein (1905): el espacio y el tiempo son relativos al observador. Freud (1900–1920): el yo consciente es apenas la superficie del iceberg; el inconsciente nos gobierna. Saussure (1916): el lenguaje no refleja la realidad, la constituye.",
  "philosophy": "Los tres convergen en destruir las certezas absolutas de la modernidad. Ya no hay espacio universal, tiempo universal, ni sujeto racional transparente a sí mismo. El positivismo del siglo XIX —la fe en la ciencia como acceso directo a la verdad— comienza a desmoronarse.",
  "figures": [
   "Einstein",
   "Freud",
   "Saussure",
   "Wittgenstein",
   "Lévi-Strauss",
   "Lacan"
  ]
 },
 {
  "id": "primera_guerra_mundial",
  "year": "1914–1918",
  "sort": 1914,
  "era": "Siglo XX: crisis de la modernidad",
  "axis": "violencia",
  "title": "Primera Guerra Mundial",
  "intro": "17 millones de muertos. La modernidad devora a sus hijos.",
  "desc": "La guerra de trincheras, el gas mostaza, los tanques y las ametralladoras industrializan la muerte. Los imperios austro-húngaro, otomano, ruso y alemán colapsan. La clase obrera europea, que debía unirse internacionalmente según Marx, se masacra nacionalmente.",
  "philosophy": "La Gran Guerra destruye el optimismo ilustrado. Walter Benjamin dirá que el 'progreso' es en realidad una catástrofe continua. El Manifiesto Dadaísta (1916) es la respuesta artístico-filosófica: el absurdo de la guerra solo puede responderse con el absurdo.",
  "figures": [
   "Benjamin",
   "Spengler",
   "Wittgenstein (en las trincheras)",
   "Remarque",
   "Celan"
  ]
 },
 {
  "id": "reforma_universitaria_de_cordoba",
  "year": "1918",
  "sort": 1918,
  "era": "Siglo XX: crisis de la modernidad",
  "axis": "emancipacion",
  "title": "Reforma Universitaria de Córdoba",
  "intro": "Los estudiantes de Córdoba exigen una universidad libre, laica y gobernada también por ellos.",
  "desc": "Los estudiantes de la Universidad de Córdoba se rebelaron contra una institución cerrada y dogmática. Lograron la autonomía universitaria, el cogobierno con estudiantes y graduados, los concursos docentes y la libertad de cátedra. El Manifiesto Liminar se difundió por toda América Latina. Todavía hoy, las universidades públicas argentinas funcionan con esos principios.",
  "philosophy": "El Manifiesto dice: «los dolores que quedan son las libertades que faltan». La Reforma une saber y emancipación, como la Ilustración: pensar por uno mismo exige instituciones libres. El conocimiento no puede depender de la obediencia.",
  "figures": [
   "Deodoro Roca",
   "Manifiesto Liminar",
   "Kant (¿Qué es la Ilustración?)"
  ]
 },
 {
  "id": "heidegger",
  "year": "1889–1976",
  "sort": 1927,
  "clave": "1927: publica Ser y tiempo",
  "era": "Siglo XX: crisis de la modernidad",
  "axis": "pensamiento",
  "title": "Heidegger — El ser y el tiempo",
  "intro": "Heidegger pregunta por el sentido del ser y transforma la filosofía del siglo XX.",
  "desc": "Heidegger plantea la pregunta más fundamental: ¿qué significa que las cosas sean? La metafísica occidental ha olvidado esta pregunta originaria. El Dasein (ser-aquí, el hombre) es el único ente que se pregunta por el ser. La angustia ante la muerte nos revela nuestra finitud.",
  "philosophy": "Heidegger es inseparable de su adhesión al nazismo (1933). Hannah Arendt —su alumna y amante, judía— pasará décadas respondiendo: ¿puede separarse la filosofía del filósofo? Su crítica de la técnica —que convierte todo en recurso explotable— es profética ante la crisis ecológica.",
  "figures": [
   "Heidegger",
   "Husserl",
   "Sartre",
   "Gadamer",
   "Derrida",
   "Arendt",
   "Levinas"
  ]
 },
 {
  "id": "la_penicilina_y_la_medicina_moderna",
  "year": "1928",
  "sort": 1928,
  "era": "Siglo XX: crisis de la modernidad",
  "axis": "tecnica",
  "title": "La penicilina y la medicina moderna",
  "intro": "Alexander Fleming descubre la penicilina, el primer antibiótico.",
  "desc": "Una infección en una herida, una neumonía o un parto podían ser mortales. Con los antibióticos y las vacunas, la esperanza de vida en el mundo pasó de unos 30 años en 1900 a más de 70 hoy. Es uno de los ejemplos más claros de progreso: la técnica médica salvó cientos de millones de vidas.",
  "philosophy": "Aquí el progreso parece indiscutible. Pero surge otra pregunta: ¿quién accede a esos avances? La distribución desigual de medicamentos y vacunas muestra que el progreso técnico no alcanza a todos por igual. Avance técnico y justicia son ejes distintos.",
  "figures": [
   "Alexander Fleming",
   "Louis Pasteur",
   "Hans Jonas (ética de la técnica)"
  ]
 },
 {
  "id": "segunda_guerra_mundial_y_el_holocausto",
  "year": "1939–1945",
  "sort": 1939,
  "era": "Siglo XX: crisis de la modernidad",
  "axis": "violencia",
  "title": "Segunda Guerra Mundial y el Holocausto",
  "intro": "85 millones de muertos. El Holocausto. El límite del pensamiento occidental.",
  "desc": "El Tercer Reich industrializa el exterminio: 6 millones de judíos, 5 millones de otros grupos son asesinados en campos de concentración. Hiroshima y Nagasaki, agosto de 1945: por primera vez, un arma puede exterminar una ciudad en segundos.",
  "philosophy": "Theodor Adorno escribe: 'Escribir poesía después de Auschwitz es un acto de barbarie.' Hannah Arendt analiza el juicio a Eichmann: la 'banalidad del mal'. El mal extremo no requiere monstruos; basta con la obediencia irreflexiva.",
  "figures": [
   "Adorno",
   "Horkheimer",
   "Arendt",
   "Levinas",
   "Primo Levi",
   "Frankl",
   "Wiesel"
  ]
 },
 {
  "id": "sartre",
  "year": "1905–1980",
  "sort": 1943,
  "clave": "1943: publica El ser y la nada",
  "era": "Siglo XX: crisis de la modernidad",
  "axis": "pensamiento",
  "title": "Sartre — La existencia precede a la esencia",
  "intro": "Sartre funda el existencialismo ateo: somos radicalmente libres y responsables.",
  "desc": "Jean-Paul Sartre proclama en 1945: 'la existencia precede a la esencia'. El ser humano existe primero y se define después. No hay naturaleza humana predeterminada, ni Dios que nos haya dado un propósito. Somos libertad pura: 'estamos condenados a ser libres'. No hay excusa posible: la mala fe es pretender que no podemos elegir.",
  "philosophy": "Simone de Beauvoir aplicará el existencialismo al feminismo: 'No se nace mujer, se llega a serlo.' La segunda ola feminista nace en parte de esta frase. El intelectual debe 'comprometerse' con las causas de su tiempo.",
  "figures": [
   "Sartre",
   "Beauvoir",
   "Camus",
   "Merleau-Ponty",
   "Fanon",
   "Lévi-Strauss"
  ]
 },
 {
  "id": "hiroshima_y_nagasaki",
  "year": "1945",
  "sort": 1945,
  "era": "Siglo XX: crisis de la modernidad",
  "axis": "violencia",
  "title": "Hiroshima y Nagasaki: la bomba atómica",
  "intro": "Estados Unidos lanza dos bombas atómicas sobre Japón. Más de 200.000 muertos.",
  "desc": "El 6 y el 9 de agosto de 1945, dos bombas destruyeron ciudades enteras en segundos. Por primera vez, la humanidad tuvo la capacidad técnica de destruirse a sí misma. Desde entonces, la amenaza nuclear acompaña la política mundial: la Guerra Fría fue, en buena parte, un equilibrio del terror.",
  "philosophy": "Adorno escribió que no hay una historia universal que lleve del salvajismo a la humanidad, pero sí una que lleva «de la honda a la bomba atómica». La técnica progresa sin parar; la violencia que puede ejercer, también. Hans Jonas propondrá una ética de la responsabilidad ante ese poder.",
  "figures": [
   "Adorno",
   "Hans Jonas",
   "Hannah Arendt",
   "Oppenheimer"
  ]
 },
 {
  "id": "guerra_fria",
  "year": "1947–1991",
  "sort": 1947,
  "era": "Siglo XX: Guerra Fría y descolonización",
  "axis": "poder",
  "title": "Guerra Fría",
  "intro": "El mundo bipolar: EE.UU. vs. URSS. Capitalismo vs. Comunismo.",
  "desc": "Durante 45 años, dos superpotencias con arsenales nucleares capaces de destruir la Tierra varias veces se enfrentan sin guerra directa. Pero sí hay guerras por procuración: Corea, Vietnam, Angola, Nicaragua, Afganistán.",
  "philosophy": "La Guerra Fría es también una guerra filosófica. Karl Popper defiende la 'sociedad abierta' contra el totalitarismo. Isaiah Berlin distingue libertad negativa y libertad positiva. Herbert Marcuse analiza El hombre unidimensional (1964).",
  "figures": [
   "Popper",
   "Berlin",
   "Marcuse",
   "Camus",
   "Sartre",
   "Chomsky",
   "Arendt"
  ]
 },
 {
  "id": "voto_femenino_en_argentina",
  "year": "1947",
  "sort": 1947,
  "era": "Siglo XX: Guerra Fría y descolonización",
  "axis": "emancipacion",
  "title": "Voto femenino en Argentina",
  "intro": "La Ley 13.010 reconoce el derecho de las mujeres a votar y ser elegidas.",
  "desc": "Tras décadas de lucha de mujeres como Alicia Moreau de Justo y Julieta Lanteri, y con el impulso de Eva Perón, las argentinas conquistaron el voto. En 1951 votaron por primera vez en una elección nacional y fueron elegidas las primeras legisladoras. La democracia, que se decía universal, empezaba a incluir a la mitad de la población.",
  "philosophy": "Simone de Beauvoir publicará en 1949 El segundo sexo: «no se nace mujer: se llega a serlo». Los derechos no caen del cielo: se conquistan. La emancipación avanza, pero lento: entre la Revolución Francesa (1789) y el voto femenino argentino pasaron más de 150 años.",
  "figures": [
   "Julieta Lanteri",
   "Alicia Moreau de Justo",
   "Eva Perón",
   "Simone de Beauvoir"
  ]
 },
 {
  "id": "declaracion_universal_de_derechos_humano",
  "year": "1948",
  "sort": 1948,
  "era": "Siglo XX: Guerra Fría y descolonización",
  "axis": "emancipacion",
  "title": "Declaración Universal de Derechos Humanos",
  "intro": "La humanidad intenta codificar su propia dignidad después de la catástrofe.",
  "desc": "En 1948, la ONU proclama la Declaración Universal de Derechos Humanos. 30 artículos que enumeran los derechos inherentes a todo ser humano por el solo hecho de serlo: vida, libertad, seguridad, igual protección ante la ley, libertad de pensamiento, de religión, de expresión.",
  "philosophy": "La Declaración es un hijo directo de Kant: la dignidad humana como fin en sí mismo, nunca como medio. Bobbio dirá que el problema no es fundamentarlos sino protegerlos. Ignatieff propone un 'mínimo universalismo' pragmático.",
  "figures": [
   "Eleanor Roosevelt",
   "Kant",
   "Bobbio",
   "Ignatieff",
   "Sen",
   "Nussbaum"
  ]
 },
 {
  "id": "frantz_fanon",
  "year": "1952–1961",
  "sort": 1961,
  "clave": "1961: publica Los condenados de la Tierra",
  "era": "Siglo XX: Guerra Fría y descolonización",
  "axis": "pensamiento",
  "title": "Frantz Fanon — Los condenados de la Tierra",
  "intro": "Fanon analiza el colonialismo desde la piel del colonizado.",
  "desc": "Frantz Fanon, psiquiatra martiniqués, trabaja en Argelia durante la guerra de independencia. En Los condenados de la Tierra (1961) analiza la psicología del colonialismo: el colonizado internaliza la inferioridad que le impone el colonizador. La descolonización no es solo política sino psicológica.",
  "philosophy": "Fanon funda los estudios postcoloniales modernos. Edward Said continuará esta crítica en Orientalismo (1978). La pregunta de Fanon resuena hoy: ¿puede haber filosofía descolonial?",
  "figures": [
   "Fanon",
   "Sartre (prólogo)",
   "Said",
   "Bhabha",
   "Césaire",
   "Dussel",
   "Quijano"
  ]
 },
 {
  "id": "el_68_global",
  "year": "1968",
  "sort": 1968,
  "era": "Siglo XX: Guerra Fría y descolonización",
  "axis": "emancipacion",
  "title": "El 68 Global",
  "intro": "Mayo francés, Tlatelolco, Praga. Jóvenes en todo el mundo desafían al poder.",
  "desc": "1968 es el año en que todo el mundo explota al mismo tiempo. En París, estudiantes y obreros toman las calles: 'sous les pavés, la plage'. En México, el ejército masacra a estudiantes en Tlatelolco. En Praga, los tanques soviéticos aplastan la primavera checa.",
  "philosophy": "El 68 es la crisis del marxismo ortodoxo y el nacimiento de las nuevas izquierdas. Herbert Marcuse es el filósofo del 68. La filosofía post-estructuralista (Deleuze, Derrida, Lyotard) surge en este contexto.",
  "figures": [
   "Marcuse",
   "Cohn-Bendit",
   "Deleuze",
   "Guattari",
   "Lyotard",
   "Derrida"
  ]
 },
 {
  "id": "llegada_a_la_luna",
  "year": "1969",
  "sort": 1969,
  "era": "Siglo XX: Guerra Fría y descolonización",
  "axis": "tecnica",
  "title": "Llegada a la Luna",
  "intro": "Neil Armstrong camina sobre la Luna, ante 600 millones de espectadores.",
  "desc": "Apenas 66 años después del primer vuelo de los hermanos Wright, una nave llevó personas a la Luna y las trajo de vuelta. Fue un logro científico y técnico enorme, pero también un episodio de la Guerra Fría: la carrera espacial era una competencia de poder entre Estados Unidos y la Unión Soviética.",
  "philosophy": "«Un pequeño paso para un hombre, un gran salto para la humanidad». La imagen de la Tierra vista desde el espacio cambió la conciencia de muchos: un planeta pequeño, frágil y compartido. Arendt se preguntaba qué significa para el ser humano querer escapar de la Tierra.",
  "figures": [
   "Neil Armstrong",
   "Hannah Arendt (La condición humana)",
   "Carl Sagan"
  ]
 },
 {
  "id": "foucault",
  "year": "1960–1980",
  "sort": 1975,
  "clave": "1975: publica Vigilar y castigar",
  "era": "Siglo XX: Guerra Fría y descolonización",
  "axis": "pensamiento",
  "title": "Foucault — El poder y el saber",
  "intro": "Foucault analiza cómo el poder produce verdad, cuerpos y subjetividades.",
  "desc": "Michel Foucault estudia no los grandes poderes visibles sino los micropoderes que operan en hospitales, prisiones, escuelas y clínicas. En Vigilar y castigar (1975) analiza cómo el Panóptico (diseño carcelario de Bentham) es una metáfora del poder moderno.",
  "philosophy": "Foucault muestra que la ciencia, la medicina y la psiquiatría no son saberes neutros sino productores de poder: definen lo normal y lo anormal, lo sano y lo loco. Su genealogía del poder influye en la teoría política, el feminismo, los estudios queer y la filosofía latinoamericana.",
  "figures": [
   "Foucault",
   "Nietzsche",
   "Bentham",
   "Bourdieu",
   "Butler",
   "Agamben"
  ]
 },
 {
  "id": "terrorismo_de_estado_en_argentina",
  "year": "1976–1983",
  "sort": 1976,
  "era": "Siglo XX: Guerra Fría y descolonización",
  "axis": "violencia",
  "title": "Terrorismo de Estado en Argentina",
  "intro": "La última dictadura cívico-militar instaura un plan sistemático de desaparición de personas.",
  "desc": "El 24 de marzo de 1976, un golpe de Estado derrocó al gobierno constitucional. La dictadura secuestró, torturó y desapareció a miles de personas en centros clandestinos, robó bebés y persiguió a quien pensara distinto. Los organismos de derechos humanos, como Madres y Abuelas de Plaza de Mayo, mantuvieron viva la denuncia.",
  "philosophy": "Arendt habló de la «banalidad del mal»: crímenes enormes cometidos por funcionarios que cumplían órdenes. La memoria es una tarea ética: recordar para que no vuelva a pasar. El Estado, que debía proteger, se convirtió en el agresor: el poder sin límites es la peor violencia.",
  "figures": [
   "Madres de Plaza de Mayo",
   "Abuelas de Plaza de Mayo",
   "Hannah Arendt"
  ]
 },
 {
  "id": "vuelta_de_la_democracia_en_argentina",
  "year": "1983",
  "sort": 1983,
  "era": "Siglo XX: Guerra Fría y descolonización",
  "axis": "poder",
  "title": "Vuelta de la democracia en Argentina",
  "intro": "Raúl Alfonsín asume la presidencia. En 1985, el Juicio a las Juntas condena a los dictadores.",
  "desc": "Después de la dictadura, la democracia volvió el 10 de diciembre de 1983. La CONADEP documentó los crímenes en el informe Nunca Más y en 1985 los jefes militares fueron juzgados por tribunales civiles, algo casi único en el mundo. Desde 1983, Argentina vive el período democrático más largo de su historia.",
  "philosophy": "La democracia no es solo votar: es un sistema de límites al poder, de derechos y de justicia. Que los responsables fueran juzgados con las garantías que ellos negaron muestra la diferencia entre la ley y la venganza, la misma que ya buscaba el Código de Hammurabi.",
  "figures": [
   "Raúl Alfonsín",
   "CONADEP (Nunca Más)",
   "Juicio a las Juntas"
  ]
 },
 {
  "id": "caida_del_muro_de_berlin",
  "year": "1989",
  "sort": 1989,
  "era": "Fin del siglo XX y era digital",
  "axis": "poder",
  "title": "Caída del Muro de Berlín",
  "intro": "El fin de la Guerra Fría. La URSS se desintegra. ¿El fin de la historia?",
  "desc": "El 9 de noviembre de 1989, los berlineses derriban el muro que dividió Alemania durante 28 años. En dos años, la URSS se disuelve. 15 repúblicas se independizan. El capitalismo liberal parece el horizonte inevitable de toda la humanidad.",
  "philosophy": "Francis Fukuyama publica El fin de la historia y el último hombre (1992). Samuel Huntington responderá con El choque de civilizaciones (1993). Hoy, con el auge del populismo autoritario, Fukuyama parece derrotado.",
  "figures": [
   "Fukuyama",
   "Huntington",
   "Habermas",
   "Zizek",
   "Rawls",
   "Mouffe"
  ]
 },
 {
  "id": "world_wide_web",
  "year": "1991",
  "sort": 1991,
  "era": "Fin del siglo XX y era digital",
  "axis": "tecnica",
  "title": "World Wide Web — Nacimiento del mundo digital",
  "intro": "Tim Berners-Lee hace pública la WWW. La mayor transformación comunicacional desde Gutenberg.",
  "desc": "En 1991, Tim Berners-Lee hace accesible al público el protocolo HTTP y el lenguaje HTML. Internet existía desde 1969 (ARPANET), pero la Web lo democratiza. En 30 años, más de 5 mil millones de personas están conectadas.",
  "philosophy": "Marshall McLuhan había profetizado: el medio es el mensaje. Habermas ve en Internet la posibilidad de una nueva esfera pública. Byung-Chul Han ve lo contrario: la sociedad del rendimiento digital produce agotamiento y narcisismo. Shoshana Zuboff describe el 'capitalismo de la vigilancia'.",
  "figures": [
   "Berners-Lee",
   "McLuhan",
   "Habermas",
   "Byung-Chul Han",
   "Zuboff",
   "Bauman"
  ]
 },
 {
  "id": "fin_del_apartheid",
  "year": "1994",
  "sort": 1994,
  "era": "Fin del siglo XX y era digital",
  "axis": "emancipacion",
  "title": "Fin del Apartheid — Mandela presidente",
  "intro": "Sudáfrica elige a Nelson Mandela. La reconciliación como modelo político.",
  "desc": "Después de 27 años en prisión, Nelson Mandela gana las primeras elecciones multirraciales de Sudáfrica en 1994. La Comisión de Verdad y Reconciliación, presidida por el obispo Desmond Tutu, ofrece amnistía a cambio de confesión pública.",
  "philosophy": "La justicia transicional sudafricana es el laboratorio más importante de la filosofía política contemporánea. El modelo del ubuntu ('soy porque somos') propone una ética comunitaria africana alternativa al individualismo liberal occidental.",
  "figures": [
   "Mandela",
   "Tutu",
   "Ricoeur",
   "Appiah",
   "ubuntu (filosofía africana)"
  ]
 },
 {
  "id": "atentados_del_11_de_septiembre",
  "year": "2001",
  "sort": 2001,
  "era": "Siglo XXI",
  "axis": "violencia",
  "title": "Atentados del 11 de septiembre",
  "intro": "Las Torres Gemelas caen. El terrorismo global reestructura el mundo.",
  "desc": "19 terroristas de Al-Qaeda secuestran cuatro aviones y destruyen las Torres Gemelas. 3.000 muertos. EE.UU. invade Afganistán (2001) e Irak (2003). Se crea el Departamento de Seguridad Nacional y la Ley Patriota. Guantánamo. La tortura institucionalizada.",
  "philosophy": "Giorgio Agamben analiza el estado de excepción: la 'emergencia' permanente justifica la suspensión de derechos que, una vez suspendidos, no se recuperan. Judith Butler estudia las vidas que se consideran 'llorables' y las que no.",
  "figures": [
   "Agamben",
   "Butler",
   "Habermas",
   "Derrida",
   "Zizek",
   "Chomsky"
  ]
 },
 {
  "id": "crisis_financiera_global",
  "year": "2008",
  "sort": 2008,
  "era": "Siglo XXI",
  "axis": "poder",
  "title": "Crisis Financiera Global",
  "intro": "El colapso de Lehman Brothers. La mayor crisis del capitalismo desde 1929.",
  "desc": "El sistema financiero global colapsa por la burbuja de hipotecas subprime. Los bancos 'demasiado grandes para caer' son rescatados con dinero público mientras millones de familias pierden sus hogares. Los movimientos de indignados (15-M, Occupy Wall Street) emergen.",
  "philosophy": "Thomas Piketty publicará El capital en el siglo XXI (2013): la desigualdad es la norma del capitalismo, no la excepción. Mark Fisher describe el 'realismo capitalista': la incapacidad de imaginar una alternativa al capitalismo.",
  "figures": [
   "Piketty",
   "Fraser",
   "Mark Fisher",
   "Harvey",
   "Zizek",
   "Badiou",
   "Laclau"
  ]
 },
 {
  "id": "crisis_climatica",
  "year": "2015",
  "sort": 2015,
  "era": "Siglo XXI",
  "axis": "tecnica",
  "title": "Crisis Climática — El Antropoceno",
  "intro": "La humanidad reconoce que está destruyendo las condiciones de su propia existencia.",
  "desc": "El Acuerdo de París (2015) establece el compromiso de limitar el calentamiento global a 1,5°C sobre los niveles preindustriales. Los científicos proponen un nuevo nombre para la era geológica actual: el Antropoceno. La biodiversidad colapsa. Los hielos polares retroceden.",
  "philosophy": "El Antropoceno es el problema filosófico más profundo del siglo XXI. Donna Haraway propone el Chthuluceno: pensar con y para otras especies. Bruno Latour rediseña la política para incluir 'no-humanos': el clima, los microbios, los ecosistemas son actores políticos.",
  "figures": [
   "IPCC",
   "Haraway",
   "Latour",
   "Morton",
   "Serres",
   "Chakrabarty",
   "Jonas"
  ]
 },
 {
  "id": "pandemia_de_covid_19",
  "year": "2020",
  "sort": 2020,
  "era": "Siglo XXI",
  "axis": "violencia",
  "title": "Pandemia de COVID-19",
  "intro": "El mundo se detiene. 7 millones de muertos. La fragilidad de la civilización al desnudo.",
  "desc": "El virus SARS-CoV-2 emerge en Wuhan en diciembre de 2019 y se convierte en pandemia global en marzo de 2020. Por primera vez desde la Segunda Guerra Mundial, el mundo entero se detiene simultáneamente. Los sistemas de salud colapsan.",
  "philosophy": "La pandemia actualiza el debate sobre el estado de excepción (Agamben), la biopolítica (Foucault: el Estado que administra la vida y la muerte) y los límites de la libertad individual frente al bien común. Yuval Harari advertirá sobre la vigilancia digital instalada en nombre de la salud.",
  "figures": [
   "Agamben",
   "Foucault (biopolítica)",
   "Zizek",
   "Harari",
   "Han",
   "Butler"
  ]
 },
 {
  "id": "explosion_de_la_inteligencia_artificial",
  "year": "2023",
  "sort": 2023,
  "era": "Siglo XXI",
  "axis": "tecnica",
  "title": "Explosión de la Inteligencia Artificial",
  "intro": "La IA generativa transforma el trabajo, el conocimiento y la creatividad humana.",
  "desc": "El lanzamiento de ChatGPT en noviembre de 2022 y la explosión de modelos de lenguaje en 2023 marca un antes y un después. Por primera vez, una máquina puede producir texto, imágenes, código y música indistinguibles de los humanos. La educación enfrenta una crisis de autenticidad.",
  "philosophy": "La IA generativa replantea las preguntas filosóficas más antiguas: ¿qué es la inteligencia? ¿qué es la conciencia? Searle respondería que la IA es un 'cuarto chino': manipula símbolos sin comprenderlos. La filosofía del siglo XXI tendrá que redefinir autoría, verdad, trabajo y humanidad.",
  "figures": [
   "Turing",
   "Searle",
   "Dreyfus",
   "Chalmers",
   "Nick Bostrom",
   "Yudkowsky",
   "LeCun"
  ]
 }
];
