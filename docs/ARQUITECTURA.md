# Arquitectura de la app

Versión del documento: 1.0 (2026-11-19). Escrito a partir del código; si algo no coincide, manda el código y hay que corregir este archivo.

## 1. Visión general

Web estática publicada en GitHub Pages (`https://juliolaz.github.io/prueba_filo/`), sin compilación: cada página es un HTML que carga sus scripts. Todas las rutas absolutas empiezan con `/prueba_filo/` (por eso, para probar en la PC hay que servirla bajo esa ruta: ver `README.md`).

Tres capas:

1. **Contenido** (`themes/<id>/`): un archivo por actividad, con datos (JS o JSON) que leen los motores.
2. **Motores y páginas** (`*.html` en la raíz, `js/`): una página por actividad, el hub de cada tema y los paneles del docente.
3. **Firebase**: login (Auth), progreso y exámenes (Firestore), IA del examen y de los diálogos (Cloud Functions).

## 2. Páginas

| Página | Quién la usa | Qué hace |
|---|---|---|
| `index.html` | todos | Login y registro, tarjetas de temas con filtros por unidad, panel del admin. Tarjetas: `js/main.js` (`AVAILABLE_THEMES`); su pie con avance real y sellos: `js/progreso-tarjetas.js`. |
| `tema.html?tema=<id>` | alumno | **Hub del tema**: una tarjeta por actividad con su %, barra de avance del tema, sellos «Aprobado/Completo», tarjeta del examen. Abre cada actividad con `?tema=<id>&theme=<id>`. El material se abre en un panel (iframe) y el video + cloze en un modal dentro del hub. |
| `themes/<id>/content.html` | alumno | Material de lectura (lectura en voz alta + verificación por sección). |
| `quiz.html` | alumno | Cuestionario (`js/quiz-engine.js` carga `themes/<id>/quiz.js`). |
| `caza_conceptos.html` | alumno | Caza de conceptos (`js/caza-conceptos-engine-firebase.js` + `js/caza-conceptos-score.js`, lee `themes/<id>/conceptos.js`). |
| `crossword.html` | alumno | Crucigrama (`js/crossword_engine.js` + `js/crossword-score.js`, lee `themes/<id>/crossword_config.js`). |
| `themes/<id>/mapa.html` | alumno | Mapa conceptual + juego de pares (`js/mapa-system-fixed.js` + `js/mapa-system-score.js`). |
| `dialogo/examen.html?tema=<id>` | alumno | Examen oral con el filósofo (llama a las Cloud Functions `examen*`). |
| `resumen_conceptos.html`, `resumen_material.html`, `resumen_cuestionario.html` | alumno | Resúmenes para la carpeta (imprimir / PDF / copiar) de la caza, el material y el cuestionario. |
| `resumen_tema.html?tema=<id>` | alumno | Resumen final del tema (lo que se evalúa en el examen), sale de `examen.json`. |
| `progress.html` | admin | Tabla del curso: alumnos × actividades, columna GENERAL (promedio) y EXAMEN (nota). |
| `examenes.html?tema=<id>` | admin | Cada intento de examen: conversación completa, rúbrica y nota. |
| `dialogo/chat.html` | alumno | Diálogos libres con filósofos (Cloud Function `chatFilosofo`). |
| `projects/project_t3.html`, `projects/guia.html` | alumno | Proyecto final del trimestre 3 (guías de trabajo; no registran avance). |

## 3. Archivos de configuración (dónde se «da de alta» un tema)

| Archivo | Qué define | Lo leen |
|---|---|---|
| `js/main.js` → `AVAILABLE_THEMES` | Tarjeta del inicio: `id`, `title`, `description`, `icon`, `gradient`, `difficulty` (unidad: `UNIDAD_I`, `UNIDAD_II`, `UNIDAD_III`, `PROYECTO_TRIMESTRAL`, `DIALOGO`, `GAME`), `questions` (= preguntas del cuestionario), `timeEstimate`, `contentFile`. | `index.html` (los filtros usan `data-filter` = `difficulty`) |
| `temas_data.js` → `TOPICS` | Datos del hub: `icon`, `name`, `desc`, `biography`. | hub, resúmenes, paneles |
| `temas_data.js` → `VIDEO_CONFIG` | Video del tema: `youtubeId` (11 caracteres, **sin** `&t=` ni `?si=`), `startTime`, `endTime` (segundos), `title`, `duration`. Si el tema no está acá, no tiene actividad de video. | hub (video + cloze), `progreso-tarjetas.js`, `progress.html` |
| `temas_data.js` → `EXAMEN_CONFIG` | Temas con examen oral: `filosofo`, `icono`, `notaAprobacion` (6), `minimoActividad` (60). Estar acá activa la tarjeta del examen, el resumen final, la regla de aprobación con examen y la columna EXAMEN. | hub, `dialogo/examen.html`, `progreso-tarjetas.js`, `progress.html`, `examenes.html` |
| `themes/<id>/config.json` | Metadatos del tema (cantidad de secciones, preguntas, niveles, nodos; tiempos estimados). Debe coincidir con los archivos reales (`tools/pruebas/verificar_tema.js` lo controla). | hub (información) |
| `themes/<id>/examen.json` | Banco del examen oral y del resumen final. | Cloud Function (desde Pages), `resumen_tema.html` |
| `index.html` → `formatThemeName` | Nombre legible del tema en el panel del admin. | `index.html` |

## 4. Firebase

### Autenticación
Email y contraseña (`firebase.js`: `login`, `registerStudent`, `resetPassword`, `logout`). El **admin** es el docente: `isCurrentUserAdmin()` en el cliente y `ADMIN_EMAIL` (con email verificado) en `functions/index.js`. Sin sesión, las actividades se pueden ver pero no guardan.

### Firestore (colecciones)
| Colección / documento | Contenido | Quién escribe |
|---|---|---|
| `users/{uid}` | Perfil: `nombres`, `apellidos`, `curso`, `role`, avatar, `estadisticas` (tiempo total, actividades completadas). | alumno (lo suyo), admin |
| `sesiones/{uid_timestamp}` | Cada login y logout. | alumno |
| `progreso_temas/{uid}_{tema}_{actividad}` | Una por alumno, tema y actividad: `score` y `bestScore` (récord), `lastScore`, `status`, `attempts`, `timeSpentSeconds`, `lastAttemptId`, `updatedAt`; en la caza, `foundConcepts`. | alumno (salvo `examen`) |
| `progreso_temas/{uid}_{tema}_examen` | Nota del examen: `score` = nota × 10, `bestNota`, `lastNota`, `attempts`. | **solo la Cloud Function** |
| `examenes/{uid}_{tema}_{ms}` | Un intento de examen: plan (preguntas sorteadas), turnos, estado, rúbrica, nota. | solo la Cloud Function |
| `examenes_estado/{uid}_{tema}` | Intentos del día, examen en curso, mejor nota. | solo la Cloud Function |

Reglas en `firestore.rules` (v1.1.0): cada alumno lee y escribe solo lo suyo; el admin lee todo; las notas y los exámenes solo los escribe la función. **Se pegan a mano en la consola.**

### Cloud Functions (`functions/index.js`)
- `chatFilosofo`: diálogos libres con filósofos (personajes definidos en el mismo archivo).
- `examenEstado`, `examenIniciar`, `examenResponder`: examen oral (ver §7).
- IA: Gemini, con respaldo en OpenRouter; claves como secretos (`GOOGLE_API_KEY`, `OPENROUTER_KEY`).
- Se publican con `firebase deploy --only functions` (lo hace el usuario). El banco `examen.json` **no** requiere publicar la función.

## 5. Recorrido de un puntaje

1. La actividad calcula su porcentaje (0-100) y llama a `saveProgress({ moduleId: <tema>, lessonId: <actividad>, status, score, seconds, metadata })` de `firebase.js`. Se guarda varias veces durante un intento (no solo al final).
2. `saveProgressToFirebase` escribe `progreso_temas/{uid}_{tema}_{actividad}`:
   - **Intentos y tiempo siempre**: cada carga de página es un intento (`ATTEMPT_ID`); el tiempo se suma una sola vez por intento.
   - **`score`, `bestScore` y `status` solo si mejora el récord**: un intento peor no baja nada.
   - En `users/{uid}.estadisticas` suma el tiempo y cuenta la actividad como completada la primera vez que llega a «completed».
3. También deja una copia en `sessionStorage` (`tema.<tema>.<...>`), que el hub usa para refrescarse sin esperar a Firestore.
4. **Lectores** (todos usan el mayor entre `bestScore` y `score`):
   - Hub (`tema.html`): consulta `progreso_temas` del alumno y el tema, y muestra el % de cada tarjeta y la barra del tema (promedio de las actividades).
   - Inicio (`js/progreso-tarjetas.js`): una consulta al cargar; pie de cada tarjeta (actividades aprobadas, avance, minutos) y sellos.
   - Docente (`progress.html`): todos los alumnos del curso.
   - Examen (Cloud Function): verifica el mínimo por actividad antes de habilitar.

Identificadores de actividad (`lessonId`): `material`, `quiz`, `caza` (en datos viejos `caza_conceptos`, que se toma como alias), `cruci`, `mapa`, `video` (video + cloze) y `examen`.

## 6. Reglas de aprobación

| | Tema **sin** examen | Tema **con** examen (`EXAMEN_CONFIG`) |
|---|---|---|
| Actividad aprobada | ≥ 80% | ≥ 60% (`minimoActividad`) |
| Tema «Aprobado» | promedio de actividades ≥ 80% | ≥ 60% en **cada** actividad **y** examen ≥ 6 |
| Sello intermedio | — | «Falta examen» (todas ≥ 60% sin examen aprobado) |
| Tema «Completo» | 100% | 100% en todas y examen aprobado |
| «Aprobadas» en la tarjeta | x / 6 | x / 7 (6 actividades + examen) |

Las actividades son 5 (material, cuestionario, caza, crucigrama, mapa) más el video si el tema está en `VIDEO_CONFIG`. Constantes: `UMBRAL_APROBADO` (`js/progreso-tarjetas.js`), `UMBRAL_APROBADA` (`tema.html`), `minimoActividad` (`temas_data.js`), `minimoPorActividad` (`examen.json`). El admin no tiene bloqueos.

## 7. Examen oral (resumen técnico)

- `examenEstado`: avance del alumno, si está habilitado (60% en cada actividad de `actividadesRequeridas`), intentos que quedan hoy, examen en curso, mejor nota.
- `examenIniciar`: sortea un plan de **6 preguntas**: 4 ejes (de 12), 1 caso (de 8) y 1 reflexión (de 5), más una escena de apertura (de 6). El 2.º intento usa otros ejes. Máximo **2 intentos por día** (hora de Argentina); un examen sin actividad por 45 minutos queda abandonado.
- `examenResponder`: la IA hace de `filosofo` (voseo, cálido), pregunta de a una, puede **repreguntar una vez** si la respuesta es vaga, no da respuestas. No se puede pegar texto (se registra si se intenta). Al terminar, otra llamada a la IA corrige con rúbrica: comprensión, vocabulario, aplicación y argumentación, de 0 a 2 por pregunta (máximo 48 puntos) → nota de 1 a 10; se aprueba con 6. Si la corrección falla, el examen queda «corrigiendo» y se puede reintentar sin perder respuestas.
- Guarda `progreso_temas/{uid}_{tema}_examen` (récord) y el intento completo en `examenes/`.

## 8. Admin (docente)

- En el inicio y en el hub ve todo y no tiene bloqueos.
- Selector **«Vista: Docente / Como alumno»** (guardado en `localStorage` como `admin.vistaAlumno`) para ver la app con su propio progreso, como la vería un alumno.
- `progress.html` (tabla del curso) y `examenes.html` (exámenes con conversación y rúbrica).
- Scripts Python de administración en la raíz (`alumnos_anio_curso.py`, `verificar_email_admin.py`, `limpiar_ddbb.py`): usan la clave de service account, que no se sube al repo.
