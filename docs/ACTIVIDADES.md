# Actividades de cada tema

Versión del documento: 1.0 (2026-11-19). Cada ficha dice qué archivo del tema usa la actividad, su formato, qué motor la ejecuta, cómo calcula el puntaje y **el estándar de calidad** tomado del tema de referencia, `themes/etica_aristoteles` («Aristóteles: Lo Bueno es la Felicidad»).

Números de los temas ya revisados (salen de `node tools/pruebas/verificar_tema.js <tema>`):

| Tema | Material | Cuestionario | Caza | Crucigrama | Mapa | Cloze | Examen |
|---|---|---|---|---|---|---|---|
| **etica_aristoteles** (referencia) | 15 secciones | 13 preguntas | 8 niveles / 49 conceptos | VIRTUD + 6 | 28 nodos / 15 pares | 17 huecos | Aristóteles |
| hedonismo | 16 | 14 | 8 / 45 | PLACER + 6 | 30 / 15 | 15 | Epicuro |
| utilitarismo | 8 | 12 | 8 / 44 | FELICIDAD + 9 | 43 / 15 | 15 | J. S. Mill |
| etica | 17 | 12 | 8 / 51 | LIBERTAD + 8 | 48 / 15 | 23 | Sócrates |

**Regla general de contenido:** todo lo que se pregunta o se busca en una actividad (cuestionario, caza, crucigrama, mapa, examen) **tiene que estar en el material del tema**. Es el error que más apareció: palabras de crucigrama que el tema no trabaja, material copiado de otro tema, preguntas «según el texto» sin texto.

---

## 1. Material de lectura — `content.html`

- **Motor:** `js/readaloud-system.js` (lectura en voz alta) y `js/material-firebase.js` (guardado). Se abre desde el hub en un panel lateral.
- **Formato:** una `<div class="study-section" data-section="...">` por sección (la primera con `active`). Cada sección tiene:
  - `reading-header` con `<h3>` (emoji + título);
  - `<p class="readaloud" data-lang="es-AR">` con el texto (se permiten `<strong>`, `<em>` y `<br><br>` entre párrafos);
  - `reading-controls` (botón de micrófono y una pista `💡`);
  - `comprehension-check` (oculto) con una pregunta y **4 opciones, una con `data-correct="true"`**.
- **Configuración** en `<head>`: `window.ReadAloudSystemConfig = { tema, threshold: 0.80, sections: N, soundsPath, redirectTo: '../../tema.html?tema=<id>', celebrationEmojis, synonymMap }`. También el contador `0 / N secciones` del encabezado.
- **Puntaje (`material`):** secciones completadas ÷ total. Una sección se completa al leer en voz alta al menos el 80% del texto y responder bien la verificación; si se responde mal, las opciones se mezclan y se vuelve a intentar.
- **Estándar (Aristóteles):** 15 secciones de 40 a 100 palabras cada una (se leen en voz alta: más largas cansan); un recorrido completo del tema de lo básico a la síntesis, con una última sección de **síntesis**; preguntas de verificación sobre la idea central de la sección; `synonymMap` con los términos técnicos del tema.
- **Errores ya vistos:**
  - Material copiado de otro tema (Ética y Moral tenía el de «El Método»).
  - `redirectTo` apuntando a otro tema (Kant va a `etica-kantiana`, Sartre a `antropocentrismo`).
  - `sections` o `config.json` desactualizados respecto de las secciones reales.
- **Resumen para la carpeta:** `resumen_material.html` (preguntas y respuestas de las verificaciones).
- **Prueba:** `ver_material.mjs`. La lectura en voz alta no se puede probar automáticamente.

## 2. Cuestionario — `quiz.js`

- **Motor:** `quiz.html` + `js/quiz-engine.js`. Mezcla preguntas y respuestas, tiene pistas y tiempo límite.
- **Formato:** `window.<ID_EN_MAYÚSCULAS>_THEME = { id, title, description, icon, gradient, difficulty, timeLimit, contentFile, metadata, questions: [...], stats }` (por ejemplo `ETICA_ARISTOTELES_THEME`; si el nombre no coincide, no carga). Cada pregunta: `{ id, question, answers: [{ text, correct, explanation }], hint, difficulty, topic }`, con **una sola** respuesta `correct: true` y una `explanation` en cada opción (también en las incorrectas: por qué está mal).
- **Puntaje (`quiz`):** correctas ÷ total.
- **Estándar (Aristóteles):** 13 preguntas de 5 opciones; distractores verosímiles (errores típicos de los alumnos, no absurdos); cada pregunta se responde con el material; la cantidad coincide con `questions` de la tarjeta en `js/main.js` y con `config.json`. (Ética y Moral usa 8 opciones por pregunta: también funciona.)
- **Resumen para la carpeta:** `resumen_cuestionario.html` (las respuestas se ven al aprobar con 80%).

## 3. Caza de conceptos — `conceptos.js`

- **Motor:** `caza_conceptos.html` + `js/caza-conceptos-engine-firebase.js` + `js/caza-conceptos-score.js`.
- **Formato:** `window.CONCEPT_HUNT_CONFIG = { author, menuUrl: 'tema.html?tema=<id>', levels: [...] }`. Cada nivel: `{ html, hint, concepts: [{ term, meaning }], corollary: [dos frases] }`. El `html` del primer nivel es un `<p>`; los demás, `<div class="highlight-box"><h4>emoji Título</h4><p>...</p></div>`.
- **Mecánica:** el alumno toca las palabras importantes del párrafo. El motor resalta una parte de los conceptos como ayuda (70% en el nivel 1, 60%, 40%, 30% y 20% desde el 5). Al encontrar un concepto se abre un cartel con su significado para leerlo en voz alta (se puede omitir pasados 30 s). Hay que encontrar **todos** los conceptos del nivel para avanzar. 10 vidas: cada palabra equivocada resta una; en 0, una pausa breve y vuelve con 3.
- **Puntaje (`caza`):** conceptos encontrados ÷ total (los encontrados se acumulan entre intentos y dispositivos).
- **Estándar (Aristóteles, revisado en v2):**
  - **8 niveles** de unos 6 conceptos (entre 44 y 55 en total), siguiendo el orden de las secciones del material.
  - **Sin `<strong>` ni `<b>`** en el texto: el motor resalta solo, y las negritas sueltas confunden y restan vidas.
  - Cada `term` aparece **literal** en el texto de su nivel, como palabra completa (sin distinguir mayúsculas). Términos de varias palabras **con espacios**, no con guiones (`virtudes éticas`, no `virtudes-eticas`).
  - Sin términos repetidos en un nivel y, en lo posible, sin uno contenido en otro.
  - `meaning` claro para un alumno de 17 años; pista en voseo («Identificá…»); dos corolarios.
- **Errores ya vistos:** cazas viejas de 2 o 3 niveles, negritas en todo el texto, términos con guiones que no coincidían con el texto, niveles sobre otro tema.
- **Resumen para la carpeta:** `resumen_conceptos.html`.
- **Pruebas:** `verificar_caza.js` (texto) y `jugar_caza.mjs` (la juega completa).

## 4. Crucigrama — `crossword_config.js`

- **Motor:** `crossword.html` + `js/crossword_engine.js` + `js/crossword-score.js`.
- **Formato:** `window.CROSSWORD_CONFIG = { title, central, entries: [{ answer, clue, crossIndex, seccion?, frase? }], promptText, sounds, options, educational: { introduction, conclusion, keyWords }, metadata }`, dentro del bloque `try` con la validación que traen los archivos. `central` es la palabra vertical; `crossIndex` es la posición de la letra de la central por la que cruza cada palabra horizontal, y la palabra **tiene que contener esa letra**. Respuestas sin acentos ni espacios.
- **Mecánica (motor v3.2, 2026-11-19):** el alumno elige una palabra tocando el tablero o la **lista de definiciones numeradas** (o con «Otra palabra») y escribe tocando las casillas (el campo de texto está encima, así se abre el teclado del celular). La letra del cruce aparece como guía. Mientras escribe solo ve cuántas letras faltan; al verificar una respuesta equivocada, las letras bien ubicadas quedan en verde y las demás en rojo, y cuenta como intento. Las palabras resueltas se recuerdan al recargar (por alumno, en ese navegador).
- **Pistas (motor v3.3):** botón «Pista», hasta 3 por palabra: 1) la sección del material donde está (si el título contiene la palabra, se tapa); 2) la primera letra (queda de guía); 3) la oración del material con la palabra como «_____» (si no hay, otra letra). Se sacan solas de `content.html`, eligiendo la oración sin otras respuestas del crucigrama y que no sea una lista; si no sirven, se fijan a mano en la entrada con `seccion` y `frase` (como en `etica_aristoteles`). Cada pista resta 3 puntos de juego a esa palabra; no cambia el %. Si la palabra no está en el material, la pista 1 lo indica sin mentir: es señal de que hay que cambiar la palabra.
- **Puntaje (`cruci`):** palabras resueltas ÷ total (100% al completar). El puntaje de juego y la precisión que se ven en pantalla son aparte.
- **Estándar (Aristóteles):** la central es el concepto clave del tema (VIRTUD) y hay **una palabra por letra**; todas las palabras y pistas salen del material; definiciones que no regalen la respuesta; `seccion` y `frase` revisadas para cada palabra (la frase no debe contener otras respuestas del crucigrama).
- **Errores ya vistos:** palabras que el tema no trabaja (Ética y Moral tenía existencialismo, teleología, casuística y altruismo); pistas casi iguales para dos palabras (Kant: DEBER y OBLIGACION); pistas genéricas que no son del tema. Del motor (corregidos para todos): contaba doble cada respuesta (2026-10-28); en el celular podía no abrirse el teclado, decía «¡Respuesta correcta!» mientras se escribía y no dejaba verificar una respuesta equivocada (2026-11-19).
- **Pruebas:** `verificar_tema.js` (controla los cruces) y `jugar_crucigrama.mjs`.

## 5. Mapa conceptual + juego de pares — `mapa.html`

- **Motor:** `js/mapa-system-fixed.js` + `js/mapa-system-score.js` (módulo).
- **Formato:**
  - En `<head>`, `window.MapaSystemConfig = { tema: '<id>', redirectTo: '../../tema.html', soundsPath, gameEnabled: true, autoTrackProgress: true, gameData: [15 × { term, definition }], sounds, celebrationEmojis, gameEmojis }`.
  - El árbol en `<section class="tree">` con `<ul>/<li>` anidados. Cada nodo es `<div class="node" data-title="...">` con `toggle`, `title`, `desc` y, si corresponde, un `badge`.
  - Panel «Palabras Clave» con **los mismos 15 pares** que `gameData`, ventana del juego (`#gameOverlay`) y un panel de «Guía rápida».
  - Copiar la estructura completa de `themes/etica_aristoteles/mapa.html`.
- **Puntaje (`mapa`):** 30% nodos recorridos + 70% juego de pares; el juego se habilita al recorrer todo el mapa.
- **Estándar (Aristóteles):** 28 nodos o más (concepto raíz → ramas por eje del tema → hojas con ejemplos), descripciones de una o dos líneas con `<strong>` en lo central, 15 pares que coinciden con los conceptos del material.
- **Errores ya vistos:** mapas del sistema viejo (`js/mapa-firebase-simple.js`), que puntúan solo el recorrido y no tienen juego que sume (Origen y Sartre siguen así).
- **Prueba:** `jugar_mapa.mjs`.

## 6. Video + cloze — `VIDEO_CONFIG` + `cloze_test.js`

- **Motor:** el modal del hub (`tema.html`) con `js/cloze_&_video-config.js`.
- **Formato del video** (`temas_data.js` → `VIDEO_CONFIG[<id>]`): `{ youtubeId, startTime, endTime, title, duration }`. El `youtubeId` son los 11 caracteres del video (de `https://youtu.be/XXXXXXXXXXX` o `watch?v=XXXXXXXXXXX`), sin `&t=`, `?si=` ni nada más.
- **Formato del cloze:** `window.CLOZE_TEST = { title, items: [...] }`. Cada ítem: `{ id, text, feedbackOK, feedbackKO, videoHints: [3 pistas], videoSegment: { start, end } }`. En `text`, cada hueco es `[[respuesta|alternativa aceptada|...]]`. `videoSegment` está en segundos **contados desde `startTime`**. Ojo: varios archivos tienen primero un bloque viejo comentado y después el real (`window.CLOZE_TEST = {` sin `//`).
- **Puntaje (`video`):** 30% ver el video + 70% completar el cloze (el video se da por visto al pasar la duración del segmento `endTime - startTime`).
- **Estándar (Aristóteles):** 17 huecos en orden con el video; `endTime` ≥ `startTime` + el `end` del último hueco (si no, los últimos huecos quedan sin video); la frase del hueco reproduce lo que se dice en ese tramo.
- **Errores ya vistos:** `youtubeId` con `&t` pegado (Kant: el video no cargaba), `endTime` que cortaba antes del cloze (Kant, Antropocentrismo, Ética y Moral, Hedonismo).
- **Prueba:** `verificar_tema.js` (ID y corte). Que cada hueco coincida con lo que dice el video hay que mirarlo a mano.

## 7. Examen oral con el filósofo — `examen.json` (solo temas con examen)

- **Motor:** `dialogo/examen.html` + Cloud Functions `examenEstado`, `examenIniciar` y `examenResponder` (ver `docs/ARQUITECTURA.md` §7). El tema tiene que estar en `EXAMEN_CONFIG` (`temas_data.js`).
- **Formato del banco:**
  - `_info` y `version`; `filosofo` (igual que en `EXAMEN_CONFIG`); `tema` (título largo); `intro`;
  - `conceptosClave` (vocabulario que la IA tiene en cuenta al corregir);
  - `notaAprobacion` (6), `intentosPorDia` (2), `minimoPorActividad` (60), `actividadesRequeridas` (`["quiz","caza","video","cruci","material","mapa"]`), `cantidadEjes` (4);
  - `aperturas`: 6 escenas `{ id, texto }`: momentos de la vida del filósofo con los que abre el examen;
  - `ejes`: 12 × `{ id, titulo, guia, claves, resumen, palabras: [5], ejemplo }`. `guia` y `claves` son para la IA (qué preguntar y qué esperar); `resumen`, `palabras` y `ejemplo` son para el alumno (resumen final);
  - `casos`: 8 × `{ id, texto, claves }`: situaciones de la vida de un adolescente para aplicar el tema;
  - `reflexiones`: 5 × `{ id, texto }`: preguntas personales;
  - `practica`: 8 preguntas para el resumen final (parecidas a las del examen, pero distintas).
- **Estándar (Aristóteles, Hedonismo, Utilitarismo, Ética y Moral):** los 12 ejes recorren el material completo; `claves` con lo mínimo que tiene que decir un alumno para aprobar; `resumen` de 2 o 3 oraciones en voseo; `ejemplo` cotidiano (escuela, amigos, familia, redes); casos sin respuesta única, que obliguen a usar los conceptos.
- **Puntaje (`examen`):** nota × 10, la guarda solo la función. Aprueba con 6.
- **Devolución:** al terminar, el alumno ve la nota, un mensaje general y la devolución de cada pregunta (qué estuvo bien, para mejorar, nivel por criterio, qué idea repasar del resumen final). Las 2 ideas más flojas vuelven en el intento siguiente, junto con 2 nuevas.
- **Pruebas:** `hub_examen.mjs` y `examen_funciones.cjs` (con el emulador; la IA está simulada). El examen con la IA real hay que probarlo a mano, en «Vista: Como alumno».

## 8. Resumen final del tema — `resumen_tema.html` (solo temas con examen)

Sale del mismo `examen.json`: intro, los 12 ejes (resumen, palabras clave, ejemplo) y las 8 preguntas de práctica. Se desbloquea con el mismo requisito que el examen (60% en cada actividad); el admin en vista Docente lo ve siempre. Se puede imprimir o copiar para la carpeta. Prueba: `resumen_final.mjs`.
