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
| `sartre` | 🟡 Material de solo 3 secciones (`config.json` dice 8) y al terminar redirige a `antropocentrismo`. Cuestionario de 10. Caza de 6 niveles con negritas. Mapa del sistema viejo (sin juego de pares). ❌ Crucigrama, ❌ cloze, sin video. |
| `cassirer` | 🟡 Solo cuestionario (10) y caza (2 niveles con negritas; `config.json` dice 5). El material está en `content/cassirer.html`. ❌ Crucigrama, mapa y cloze. |

## Unidad 1

| Tema | Estado |
|---|---|
| `origen` | 🟡 Tiene todo menos examen: material 10, cuestionario 10, caza de 5 niveles con negritas, crucigrama MILETO (palabras del material), mapa del sistema viejo, cloze de 12 sin video en `VIDEO_CONFIG`. |
| `aristoteles`, `metodo`, `platon`, `presocraticos`, `socrates` | 🟡 Solo material y `cloze_test.js` (sin video en `VIDEO_CONFIG`). ❌ Cuestionario, caza, crucigrama y mapa. |
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

- **Cloud Functions:** se publican con `firebase deploy --only functions` cuando cambia `functions/index.js`. Última publicada: **V8.3** (2026-11-19: devolución por pregunta e ideas flojas que vuelven en el intento siguiente). Los cambios en `examen.json` no necesitan publicar.
- **Reglas** (`firestore.rules` v1.1.0): se pegan a mano en Firebase Console → Firestore → Reglas. Sin confirmar que estén pegadas.
- **Exámenes con la IA real:** probados solo con respuestas simuladas (emulador). Falta rendir cada uno como alumno para ver cómo pregunta el filósofo y si la nota es razonable (Aristóteles, Epicuro, Mill, Sócrates y Platón).

## Historial reciente

- 2026-11-24: tema nuevo de la Unidad II, «El Dualismo Platónico» (`dualismo_platonico`), ampliado desde el resumen del docente: material, cuestionario, caza, crucigrama, mapa, examen con Platón y resumen final. Sin video todavía (el examen no lo pide hasta que se agregue).
- 2026-11-24: Dualismo platónico: video (teXin, `pP53wnoy3Vc`) y cloze de 14 huecos; el examen ya pide el video.
- 2026-11-19: cazas de la Unidad 3 revisadas: las 7 se juegan completas. Conceptos emparejados (si una palabra es concepto, su gemela del párrafo también) en Utilitarismo, Hedonismo, Kant, Pragmatismo y Aristóteles, y ocultos muy generales reemplazados.
- 2026-11-19: caza de conceptos: ayuda en el motor v1.3 (3 errores seguidos iluminan un concepto oculto pendiente). Ética y Moral v2.1: el párrafo 2 trababa con «latín» y «mos» ocultos; ahora «mos, moris», «carácter» y «hábitos».
- 2026-11-19: grupo nuevo «Taller» en el inicio (filtro y tarjeta). Copia del taller de cierre «Lo que traje, lo que me llevo» en `taller/taller.html` v2.6 (original en el repo `emociones`): abre en el paso de `?paso=N`; la tarjeta abre en el 6 (El bambú).
- 2026-11-19: motor del crucigrama v3.2 (teclado en el celular, sin adelantar la respuesta, se puede verificar un error con letras verdes/rojas, lista de definiciones, «Otra palabra», guía con la letra del cruce, recuerda las resueltas). Probado en los 7 crucigramas de la Unidad 3 y en Origen. Pistas escalonadas (motor v3.3): automáticas desde el material en todos; revisadas a mano en Aristóteles. **Pendiente:** rehacer el contenido de los crucigramas de Utilitarismo, Pragmatismo, Antropocentrismo, Hedonismo y Kant.
- 2026-11-19: examen oral más pedagógico (functions V8.3): devolución de cada pregunta y las 2 ideas más flojas vuelven en el intento siguiente.
- 2026-11-19: Ética y Moral completa (material propio, mapa al sistema completo, crucigrama nuevo, examen con Sócrates y resumen final). Videos de Kant, Antropocentrismo y Ética y Moral corregidos. Cazas de Kant, Pragmatismo, Antropocentrismo y Ética y Moral rehechas con 8 niveles. Pruebas automáticas guardadas en `tools/pruebas/`. Documentación en `CLAUDE.md` y `docs/`.
- 2026-10-27/28: Hedonismo y Utilitarismo revisados con examen oral; regla del 60% por actividad en temas con examen; corrección del guardado del video y del conteo del crucigrama.
- 2026-10-21: Ética de Aristóteles revisada como tema de referencia.
