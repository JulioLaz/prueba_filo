# Pendientes y notas para revisar más adelante

Registro de cosas detectadas en las revisiones que quedaron resueltas de forma
provisoria o sin resolver. Actualizado: 2026-10-28.

## Regla de aprobación de los temas con examen

Desde el 2026-10-28: el examen (y el resumen final) se habilitan con **al menos
60% en cada actividad**; el tema se aprueba con eso y el examen aprobado (nota ≥ 6).
Los temas sin examen siguen con **80% de promedio** para el sello «Aprobado».
Si se quiere unificar, el umbral está en `UMBRAL_APROBADO` (`js/progreso-tarjetas.js`)
y `UMBRAL_APROBADA` (`tema.html`); el mínimo de los temas con examen, en
`minimoActividad` (`temas_data.js`) y `minimoPorActividad` (`themes/<id>/examen.json`).

## Video: avances guardados antes del 2026-10-28

Hasta el 2026-10-28 el video guardaba en Firebase «segundos mirados ÷ 600» en lugar
del avance real (30% video + 70% cloze): con el cloze completo quedaba, por ejemplo,
en 16%. Corregido en `tema.html` y `js/cloze_&_video-config.js`. Los alumnos que ya
hicieron el video antes de esa fecha tienen ese valor bajo: tienen que volver a
abrir el video y completar el cloze para que se guarde el porcentaje correcto
(Firebase conserva el mejor, así que solo puede subir).

## Mapas conceptuales de versión vieja (Ética y Moral, Origen, Sartre)

- **Qué pasaba:** `themes/etica/mapa.html`, `themes/origen/mapa.html` y
  `themes/sartre/mapa.html` guardaban el avance solo en el navegador
  (sessionStorage): no llegaba a Firebase, se perdía al cambiar de dispositivo y
  en la tarjeta del inicio el mapa contaba 0%.
- **Arreglo provisorio (2026-10-28):** `js/mapa-firebase-simple.js` guarda en
  Firebase el **% de nodos recorridos** (actividad `mapa`). Probado: llega a 100%
  y el hub lo lee.
- **Diferencia con los demás mapas:** en los otros 6 temas (sistema completo,
  `js/mapa-system-fixed.js` + `js/mapa-system-score.js`) el puntaje es 30%
  recorrido + 70% juego de pares, y el juego se habilita al completar el mapa.
  En estos tres alcanza con recorrer los nodos.
  - Ética y Moral tiene un juego de pares propio, pero no suma puntaje.
  - Origen y Sartre no tienen juego de pares.
- **Para hacer (opcional):** pasarlos al sistema completo. Hace falta escribir
  15 pares concepto–definición por tema (sacados del material) en
  `window.MapaSystemConfig.gameData`, usar la estructura de nodos con
  `data-title` y cargar los dos scripts del sistema, como en
  `themes/etica_aristoteles/mapa.html`.

## Tema «Ética y Moral» (`themes/etica`)

- El **material** (`content.html`) es una copia del de «El Método»
  (`themes/metodo/content.html`): mismas secciones sobre el asombro. Hay que
  escribir el material propio de ética y moral.
- **Video:** en `temas_data.js` dura 10:33 pero `endTime` es 360 (6:00).
  Revisar hasta dónde llega el cloze y ajustar `endTime`.

## Temas sin cuestionario ni caza de conceptos

`aristoteles`, `metodo`, `platon`, `presocraticos`, `ramas`, `socrates` no tienen
`quiz.js` ni `conceptos.js`. (`orientacion_vocacional` tampoco, pero no los
necesita.)

## Verificaciones hechas y pendientes

- **Crucigrama:** el motor común (`js/crossword_engine.js`) contaba doble cada
  respuesta; corregido el 2026-10-28 para todos los temas. Probado de punta a
  punta en Ética de Aristóteles. Los demás crucigramas no se jugaron uno por uno.
- **Caza de conceptos:** probada completa en Ética de Aristóteles, Hedonismo y
  Utilitarismo. Las cazas de los demás temas no se jugaron una por una.
- **Mapa conceptual:** probado completo en los 9 temas que lo tienen.
- **Exámenes orales con IA** (Aristóteles, Epicuro, Mill): probados con
  respuestas simuladas en el emulador. Falta revisarlos con la IA real (cómo
  pregunta el filósofo y si la nota es razonable).
- **Video de Hedonismo:** `endTime` 168 (2:48) porque el cloze llega a 2:45; no
  se pudo verificar la duración real del video de YouTube.

## Firebase (no se actualiza con GitHub)

- Las **Cloud Functions** se publican con `firebase deploy --only functions`
  cada vez que cambia `functions/index.js`. Última versión: V8.2 (el examen se
  habilita con 60% en cada actividad). **Hasta publicarla, el servidor sigue
  pidiendo el 80% de promedio** aunque la web ya muestre la regla nueva.
- Las **reglas** (`firestore.rules`, v1.1.0) se copian a mano en Firebase
  Console → Firestore → Reglas.
