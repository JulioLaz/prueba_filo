# Estado de los temas y pendientes

Actualizado: 2026-11-19. Reemplaza a `PENDIENTES.md`. **Actualizar al terminar cada trabajo** (qué se hizo, qué se verificó y qué falta). Para el diagnóstico de un tema: `node tools/pruebas/verificar_tema.js <tema>`.

Referencias: ✅ revisado y completo · 🟡 existe pero falta revisar o corregir · ❌ no existe · — no corresponde.

## Unidad 3 (ética)

| Tema | Material | Cuestionario | Caza | Crucigrama | Mapa | Video + cloze | Examen + resumen |
|---|---|---|---|---|---|---|---|
| `etica_aristoteles` (**referencia**) | ✅ 15 | ✅ 13 | ✅ 8 niveles | ✅ VIRTUD | ✅ 28 / 15 pares | ✅ 17 | ✅ Aristóteles |
| `hedonismo` | ✅ 16 | ✅ 14 | ✅ 8 | ✅ PLACER | ✅ 30 / 15 | ✅ 15 (*) | ✅ Epicuro |
| `utilitarismo` | ✅ 8 | ✅ 12 | ✅ 8 | ✅ FELICIDAD | ✅ 43 / 15 | ✅ 15 | ✅ J. S. Mill |
| `etica` (Ética y Moral) | ✅ 17 | ✅ 12 | ✅ 8 | ✅ LIBERTAD | ✅ 48 / 15 | 🟡 23 (**) | ✅ Sócrates |
| `etica_kant` | 🟡 18 | 🟡 12 | ✅ 8 | 🟡 BUENAS | 🟡 57 / 15 | ✅ 20 | ❌ |
| `pragmatismo` | 🟡 16 | 🟡 12 | ✅ 8 | 🟡 METODO | 🟡 45 / 15 | ✅ 13 | ❌ |
| `antropocentrismo` | 🟡 20 | 🟡 12 | ✅ 8 | 🟡 HUMANO | 🟡 58 / 15 | 🟡 13 (**) | ❌ |

(*) No se pudo verificar la duración real del video de Hedonismo (`endTime` 168 porque el cloze llega a 2:45).
(**) El `endTime` ya alcanza a todos los huecos, pero no se comprobó que cada hueco coincida con lo que dice el video (YouTube no se reproduce en las pruebas).

### Pendientes concretos de la Unidad 3

**Ética de Kant (`etica_kant`)**
- Material: al terminar redirige a `tema.html?tema=etica-kantiana`, un tema que no existe. Corregir `redirectTo` a `tema=etica_kant`.
- `config.json` dice 6 secciones (son 18) y 10 preguntas (son 12); la tarjeta de `js/main.js` dice 10 preguntas.
- Revisar el cuestionario contra el material, el crucigrama (sus palabras sí están en el material) y el contenido del mapa.
- Video: se corrigió el ID (tenía `&t` pegado) y el corte (`endTime` 330). La duración «5:30» es aproximada. El cloze se comparó con un resumen del video y coincide.
- Examen oral: no tiene (opcional).

**Pragmatismo (`pragmatismo`)**
- `config.json` dice 4 secciones (son 16) y 10 preguntas (son 12).
- Crucigrama: MILL (es del utilitarismo, no del pragmatismo) y OPTIMISMO no están en el material. Rehacerlo con palabras del material.
- Revisar el cuestionario y el mapa contra el material. Examen oral: no tiene (opcional).

**Antropocentrismo (`antropocentrismo`)**
- `config.json` dice 8 secciones (son 20) y 10 preguntas (son 12).
- Crucigrama: ORGANIZACION no está en el material.
- `quiz.js`: el comentario inicial dice «Unidad IV».
- Revisar el cuestionario y el mapa contra el material; comprobar el cloze con el video. Examen oral: no tiene (opcional).

## Unidad 2

| Tema | Estado |
|---|---|
| `dualismo_platonico` (nuevo) | ✅ Material 16 · cuestionario 13 · caza 8 niveles / 55 · crucigrama DUALISMO + 8 · mapa 34 nodos / 15 pares · video + cloze de 14 huecos (teXin, 2:45; falta mirar a mano que cada hueco coincida con el video) · examen con Platón y resumen final. |
| `antropologia_aristoteles` (nuevo) | ✅ Material 16 · cuestionario 13 · caza 8 niveles / 55 · crucigrama SUSTANCIA + 9 · mapa 39 nodos / 15 pares · video + cloze de 12 frases / 24 huecos (FILOSOFÍA: APRENDE Y APRUEBA, 0:23-5:27; falta mirar a mano que cada hueco coincida con el video) · examen con Aristóteles y resumen final. |
| `sartre` | 🟡 Material de solo 3 secciones (`config.json` dice 8) y al terminar redirige a `antropocentrismo`. Cuestionario de 10. Caza de 6 niveles con negritas. Mapa del sistema viejo (sin juego de pares). ❌ Crucigrama, ❌ cloze, sin video. |
| `cassirer` | 🟡 Solo cuestionario (10) y caza (2 niveles con negritas; `config.json` dice 5). El material está en `content/cassirer.html`. ❌ Crucigrama, mapa y cloze. |

## Unidad 1

| Tema | Estado |
|---|---|
| `origen` | ✅ v2.0 (2026-11-24): material 15 secciones cortas (redirige bien a `origen`), cuestionario 13 (variable `ORIGEN_THEME`: antes no cargaba), caza 8 niveles / 55 sin negritas, crucigrama MILETO + 6 (ASOMBRO por COSMOS), mapa al sistema completo (29 nodos / 15 pares), cloze 12, revisado con la transcripción del video (6:28). Examen con Tales de Mileto y resumen final. |
| `presocraticos` | ✅ v2.0 (2026-11-24): material 16 secciones cortas (suma Pitágoras y Jenófanes, que están en el video), cuestionario 13, caza 8 niveles / 55, crucigrama PRINCIPIO + 9, mapa 28 nodos / 15 pares, cloze 11 con el video hasta 17:03 (antes cortaba en 10:01). Examen con Heráclito y resumen final. |
| `socrates` | ✅ v2.0 (2026-11-24): material 16 secciones cortas (suma fuentes, definiciones universales y «mejor sufrir una injusticia que cometerla», del video), cuestionario 13, caza 8 niveles / 50, crucigrama SOCRATES + 8, mapa 28 nodos / 15 pares, cloze 16. Examen con Sócrates y resumen final. |
| `platon` | ✅ v2.0 (2026-11-24): material 17 secciones cortas centradas en las Ideas, el símil del Sol, la línea dividida, la caverna (en 4 partes y «la caverna hoy»), educar como girar la mirada, la dialéctica y el rey filósofo. El alma (anámnesis, cuerpo-cárcel, carro alado, muerte) queda para `dualismo_platonico`. Cuestionario 13, caza 8 niveles / 52, crucigrama CAVERNA + 7, mapa 35 nodos / 15 pares, cloze 16 (video hasta 10:00; antes cortaba en 9:01). Examen con Platón y resumen final. El video y su cloze sí hablan del alma y de la reminiscencia. Cloze **revisado con la transcripción del video** (2026-11-24): tiempos corregidos en las 16 frases. |
| `aristoteles` | ✅ v2.0 (2026-11-24): material 17 secciones cortas: grados del saber, clasificación de las ciencias, biología, Órganon, concepto/juicio/razonamiento, silogismo, validez y verdad, primeros principios, categorías, sustancia y accidentes, materia y forma, acto y potencia, cuatro causas y cosmos. El alma queda para `antropologia_aristoteles` y la ética para `etica_aristoteles`. Cuestionario 13, caza 8 / 54, crucigrama SILOGISMO + 9, mapa 34 / 15, cloze 16 (video hasta 17:00; antes cortaba en 6:31 y quedaban 7 huecos sin video), **revisado con la transcripción del video**: todos los huecos coinciden con sus tiempos. Examen con Aristóteles. |
| `metodo` | ✅ v2.0 (2026-11-24): material 16 secciones cortas que siguen el título (antes era sobre la dialéctica de Platón y Aristóteles): método, asombro, problematizar, duda escéptica y metódica, Descartes, tres motivos para dudar, cogito, cuatro reglas, diálogo y sus reglas (principio de caridad), argumentar, deducción e inducción, falacias, crítica (Kant, sapere aude) y pensamiento crítico hoy. `redirectTo` corregido (iba a `metodo_filosofico`). Cuestionario 13, caza 8 / 55, crucigrama CRITICA + 7, mapa 33 / 15. Examen con René Descartes. Cloze v2.0: 13 frases armadas con la transcripción del video (duda de Descartes, 0:00–8:12), con sus tiempos y una pista de opciones por hueco; antes eran 5 y las pistas no se mostraban (faltaba `getHintForItem`). El video pide 8:12 (antes 12 min). |
| `ramas` | 🟡 Solo material. |

## Otros

- **Proyecto final T3** (`projects/project_t3.html`, guías en `projects/guias/`): guía de trabajo sin registro de avance; sin cambios pendientes.
- **Diálogos** (`dialogo/chat.html`, `chatFilosofo`) y **orientación vocacional**: sin revisar en esta etapa.

## Notas técnicas que siguen vigentes

- **Regla de aprobación** (desde 2026-10-28): con examen, 60% en cada actividad y examen ≥ 6; sin examen, 80% de promedio. Para unificarla: `UMBRAL_APROBADO` (`js/progreso-tarjetas.js`), `UMBRAL_APROBADA` (`tema.html`), `minimoActividad` (`temas_data.js`) y `minimoPorActividad` (`examen.json`).
- **Video, avances anteriores al 2026-10-28:** hasta esa fecha el video guardaba «segundos mirados ÷ 600» en lugar del avance real (30% video + 70% cloze). Los alumnos que lo hicieron antes tienen un valor bajo: tienen que volver a abrir el video y completar el cloze (Firestore conserva el mejor, así que solo puede subir).
- **Mapas del sistema viejo** (`js/mapa-firebase-simple.js`; hoy Origen y Sartre): guardan en Firebase solo el % de nodos recorridos. Para pasarlos al sistema completo: 15 pares en `gameData`, nodos con `data-title` y los dos scripts del sistema, como en `themes/etica_aristoteles/mapa.html` (así se hizo con Ética y Moral).
- **Crucigrama:** el motor contaba doble cada respuesta; corregido para todos el 2026-10-28.

## Firebase (no se actualiza con git)

- **Cloud Functions:** se publican con `firebase deploy --only functions` cuando cambia `functions/index.js`. **Pendiente de publicar: V8.5** (2026-11-24: reintentos con espera ante modelos saturados, razonamiento bajo en OpenRouter, más respaldos de Gemini). Última publicada: V8.4 (botón «Corregir» y más tiempo). Los cambios en `examen.json` no necesitan publicar.
- **Reglas** (`firestore.rules` v1.1.0): se pegan a mano en Firebase Console → Firestore → Reglas. Sin confirmar que estén pegadas.
- **Exámenes con la IA real:** probados solo con respuestas simuladas (emulador). Falta rendir cada uno como alumno para ver cómo pregunta el filósofo y si la nota es razonable (Aristóteles, Epicuro, Mill, Sócrates, Platón, Aristóteles en la Unidad II, Tales, Heráclito y Sócrates en la Unidad I).

## Historial reciente

- 2026-11-24: Origen: cloze revisado con la transcripción del video «Del mito al logos» (6:28). Las 12 frases coinciden con el video; se corrigieron los tiempos (varias empezaban tarde o cortaban antes) y el video pide 6:28 (antes 11 minutos, más de lo que dura).
- 2026-11-24: Platón: cloze revisado con la transcripción del video. 7 frases apuntaban a otro momento del video y 5 cortaban antes de terminar; «anamnesis» dejó de ser hueco (el video no la dice) y se acepta «concupiscible». El material usa también los nombres del video (conjetura; trabajadores y soldados).
- 2026-11-24: Método: cloze nuevo de 13 frases con la transcripción del video (antes 5 y sin pistas visibles); el video se mira completo (8:12).
- 2026-11-24: Aristóteles (Unidad I): cloze revisado con la transcripción del video (los 16 coinciden). Se alinearon material y video: llegó a la Academia con 17 o 18 años, y la especie (sustancia segunda) no es una Idea separada (se quitó «lo más real es el individuo», que contradecía el video). «Zoon politikon» dejó de ser hueco porque el video no lo dice.
- 2026-11-24: Unidad I completa en Platón, Aristóteles (Lógica y Sustancia) y El Método Filosófico (v2.0): material en secciones cortas, cuestionario de 13, caza de 8 niveles, crucigrama, mapa con 15 pares, examen y resumen final (Platón, Aristóteles y René Descartes). Platón ya no repite el alma de «Dualismo Platónico», y Aristóteles deja el alma y la ética a sus temas. Tarjetas con 13 preguntas; videos de Platón y Aristóteles estirados hasta el último hueco del cloze. Nombres de los temas de la Unidad I en el panel de progreso.
- 2026-11-24: `tools/limpieza/limpiar_progreso.cjs` (se corre en la PC del docente con la clave de administrador): informa documentos por año y registros de progreso de temas que ya no existen; borra solo con `--borrar-obsoletos` o `--borrar-anteriores-a AAAA` y confirmando con SI (nunca toca `users`). Al 2026-11-24 había 3 registros obsoletos: `etica_de_aristoteles`, `dialectica_asombro_y_el_metodo_filosofico` y uno de `pragmatismo` sin actividad.
- 2026-11-24: functions V8.5. Los registros mostraron Gemini con 503 (sobrecarga de Google), Gemma gratis con 429 (saturado) y Nemotron vacío (gastaba todo en razonar). Ahora: hasta 3 vueltas con espera (4 s y 10 s) a los modelos saturados, OpenRouter con razonamiento bajo, 3 respaldos más de Gemini y corrección con 8192 tokens.
- 2026-11-24: examen: los párrafos <p> de la IA ya no se ven como texto; functions V8.4 (más tiempo para corregir: hasta 200 s probando modelos) y botón «Corregir» en el panel docente para los exámenes «Sin corregir». Requiere `firebase deploy --only functions`.
- 2026-11-24: lectura en voz alta (motor v1.2): cada error del micrófono muestra al alumno los pasos para resolverlo (navegador, permiso, micrófono ocupado, internet, voz baja, lectura rápida).
- 2026-11-24: examen oral y resumen final en Origen (Tales de Mileto), Presocráticos (Heráclito de Éfeso) y Sócrates (Sócrates). Desde ahora esos temas se aprueban con 60% en cada actividad y el examen aprobado.
- 2026-11-24: Sócrates completo (v2.0): material en 16 secciones cortas, cuestionario de 13, caza de 8 niveles, crucigrama SOCRATES, mapa con 15 pares. Los cuestionarios de Origen, Presocráticos, Sócrates, Dualismo y Antropología de Aristóteles se probaron cargando en el navegador.
- 2026-11-24: Presocráticos completo (v2.0): material en 16 secciones cortas con Pitágoras y Jenófanes, cuestionario de 13, caza de 8 niveles, crucigrama PRINCIPIO, mapa con 15 pares y video estirado hasta el último hueco del cloze.
- 2026-11-24: Origen de la Filosofía revisado (v2.0): material en 15 secciones cortas y redirección corregida; cuestionario de 13 que ahora carga (la variable no coincidía con el id); caza de 8 niveles sin negritas; crucigrama con palabras del material; mapa con juego de 15 pares; tarjeta con 13 preguntas y `contentFile` corregido.
- 2026-11-24: tema nuevo de la Unidad II, «El Dualismo Platónico» (`dualismo_platonico`), ampliado desde el resumen del docente: material, cuestionario, caza, crucigrama, mapa, examen con Platón y resumen final. Sin video todavía (el examen no lo pide hasta que se agregue).
- 2026-11-24: tema nuevo de la Unidad II, «Antropología de Aristóteles» (`antropologia_aristoteles`), ampliado desde la guía del docente (hilemorfismo, potencia y acto, escala de las almas, conocimiento, animal racional y político, felicidad, comparación con Platón): todas las actividades, video con cloze y examen con Aristóteles.
- 2026-11-24: Dualismo platónico: video (teXin, `pP53wnoy3Vc`) y cloze de 14 huecos; el examen ya pide el video.
- 2026-11-19: cazas de la Unidad 3 revisadas: las 7 se juegan completas. Conceptos emparejados (si una palabra es concepto, su gemela del párrafo también) en Utilitarismo, Hedonismo, Kant, Pragmatismo y Aristóteles, y ocultos muy generales reemplazados.
- 2026-11-19: caza de conceptos: ayuda en el motor v1.3 (3 errores seguidos iluminan un concepto oculto pendiente). Ética y Moral v2.1: el párrafo 2 trababa con «latín» y «mos» ocultos; ahora «mos, moris», «carácter» y «hábitos».
- 2026-11-19: grupo nuevo «Taller» en el inicio (filtro y tarjeta). Copia del taller de cierre «Lo que traje, lo que me llevo» en `taller/taller.html` v2.6 (original en el repo `emociones`): abre en el paso de `?paso=N`; la tarjeta abre en el 6 (El bambú).
- 2026-11-19: motor del crucigrama v3.2 (teclado en el celular, sin adelantar la respuesta, se puede verificar un error con letras verdes/rojas, lista de definiciones, «Otra palabra», guía con la letra del cruce, recuerda las resueltas). Probado en los 7 crucigramas de la Unidad 3 y en Origen. Pistas escalonadas (motor v3.3): automáticas desde el material en todos; revisadas a mano en Aristóteles. **Pendiente:** rehacer el contenido de los crucigramas de Utilitarismo, Pragmatismo, Antropocentrismo, Hedonismo y Kant.
- 2026-11-19: examen oral más pedagógico (functions V8.3): devolución de cada pregunta y las 2 ideas más flojas vuelven en el intento siguiente.
- 2026-11-19: Ética y Moral completa (material propio, mapa al sistema completo, crucigrama nuevo, examen con Sócrates y resumen final). Videos de Kant, Antropocentrismo y Ética y Moral corregidos. Cazas de Kant, Pragmatismo, Antropocentrismo y Ética y Moral rehechas con 8 niveles. Pruebas automáticas guardadas en `tools/pruebas/`. Documentación en `CLAUDE.md` y `docs/`.
- 2026-10-27/28: Hedonismo y Utilitarismo revisados con examen oral; regla del 60% por actividad en temas con examen; corrección del guardado del video y del conteo del crucigrama.
- 2026-10-21: Ética de Aristóteles revisada como tema de referencia.
