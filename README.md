# 🎓 Filosofía App

Aplicación web para estudiar filosofía en el secundario: cada tema reúne material de lectura, quiz, caza de conceptos, mapa conceptual, crucigrama y video con cloze. El progreso de cada alumno se guarda en Firebase y el docente lo sigue desde un panel de administración.

**🔗 App publicada:** https://juliolaz.github.io/prueba_filo/

---

## 📚 Cómo se usa

1. El alumno se registra o ingresa desde la pantalla principal (`index.html`).
   Cada tarjeta de tema muestra su avance real (actividades aprobadas, minutos dedicados y %), con sello dorado **Aprobado** o **Completo** (100%) — `js/progreso-tarjetas.js`. Aprobado: 80% de promedio; en los temas con examen, 60% en cada actividad y el examen aprobado.
2. Elige un tema (filtros por Unidad 1, 2, 3, Diálogos y Juegos).
3. En el hub del tema (`tema.html?tema=<id>`) hace las actividades; la barra muestra su avance.
4. El docente (cuenta admin) ve el progreso de todos los alumnos en el inicio y en `progress.html`.

## 🧩 Actividades de cada tema

| Actividad | Archivo del tema | Motor |
|---|---|---|
| 📖 Material de lectura (lectura en voz alta + preguntas de comprensión) | `themes/<id>/content.html` | `js/readaloud-system.js`, `js/material-firebase.js` |
| 📝 Quiz (preguntas y respuestas mezcladas, pistas y timer) | `themes/<id>/quiz.js` | `quiz.html` + `js/quiz-engine.js` |
| 🔎 Caza de conceptos | `themes/<id>/conceptos.js` | `caza_conceptos.html` + `js/caza-conceptos-engine-firebase.js` |
| 📚 Resumen de la caza (para la carpeta: imprimir / PDF / copiar) | `themes/<id>/conceptos.js` | `resumen_conceptos.html` |
| 📚 Resumen del material (preguntas y respuestas para la carpeta) | `themes/<id>/content.html` | `resumen_material.html` |
| 📚 Resumen del cuestionario (respuestas visibles al aprobar con 80%) | `themes/<id>/quiz.js` | `resumen_cuestionario.html` |
| 🗺️ Mapa conceptual + juego de pares | `themes/<id>/mapa.html` | `js/mapa-system-fixed.js`, `js/mapa-system-score.js` |
| 🧩 Crucigrama | `themes/<id>/crossword_config.js` | `crossword.html` + `js/crossword_engine.js` |
| 🎬 Video + cloze | `themes/<id>/cloze_test.js` | `tema.html` (video en `temas_data.js` → `VIDEO_CONFIG`) |
| 🏛️ Examen oral con el filósofo (actividad final) | `themes/<id>/examen.json` | `dialogo/examen.html` + Cloud Functions `examen*` |
| 📜 Resumen final del tema (lo que se evalúa en el examen; se desbloquea con 60% en cada actividad) | `themes/<id>/examen.json` | `resumen_tema.html` |

Cada tema tiene además un `themes/<id>/config.json` con sus metadatos (cantidad de secciones, preguntas, niveles, etc.).

## ✨ Proyecto Final (trimestre 3)

`projects/project_t3.html` presenta el proyecto y los dos temas; cada uno abre su guía en `projects/guia.html?tema=dios|sentido`. Es una guía de trabajo para grupos de 2 o 3 (no registra avance): requisitos (mínimo 6 pensadores, afiche, exposición de 8 minutos + 4 de preguntas), hoja de ruta, preguntas de debate, mapa de pensadores (filósofos, científicos, escritores y tradiciones religiosas), asistente que arma la postura (hipótesis, argumentos, objeciones y réplicas), cómo demostrar y falacias, casos, conclusiones, afiche de muestra y armador de afiche imprimible, guion de la exposición, guía para el público y rúbrica. La hoja de ruta y el borrador del afiche quedan solo en el navegador.

El contenido se edita en `projects/guias/comun.js` (lo común), `projects/guias/dios.js` y `projects/guias/sentido.js`.

## 🏛️ Examen oral (cierra el tema)

Lo tienen **Ética de Aristóteles** (con Aristóteles), **Hedonismo** (con Epicuro) y **Utilitarismo** (con John Stuart Mill). Es un diálogo guiado con el filósofo:

- Se habilita con **al menos 60% en cada actividad** del tema (cuestionario, caza, video, crucigrama, material y mapa). No alcanza con el promedio: ninguna puede quedar por debajo.
- **6 preguntas**: 4 ideas centrales sorteadas entre 12, un caso práctico (entre 8) y una reflexión personal (entre 5). La escena de apertura también se sortea, así que no empieza igual para todos. El segundo intento usa otros ejes.
- El filósofo pregunta de a una, puede repreguntar una vez si la respuesta es vaga, y no da respuestas ni evalúa durante el examen. No se puede pegar texto.
- Al terminar, la IA corrige con una rúbrica (comprensión, vocabulario, aplicación y argumentación, de 0 a 2 por pregunta) y pone la nota de 1 a 10. **Se aprueba con 6.**
- **2 intentos por día**, cuenta la mejor nota. Si se cierra la página, se retoma (hasta 45 minutos sin actividad).
- El tema queda **aprobado** con 60% en cada actividad **y** el examen aprobado (sello "Falta examen" mientras tanto). En estos temas, cada actividad cuenta como aprobada desde el 60%.
- En la tabla de progreso del docente (`progress.html`) el examen aparece en su propia columna **EXAMEN** (la nota), al lado de **GENERAL**, y no entra en ese promedio.
- La nota la guarda la Cloud Function: el alumno no puede escribirla (`firestore.rules`).
- El docente ve cada intento, con la conversación completa y la rúbrica, en `examenes.html?tema=<id>` (botón "Exámenes del curso" en la página del examen).

**Resumen final** (`resumen_tema.html`, botón "Resumen final" en la tarjeta del examen): las 12 ideas centrales que se evalúan, cada una con su explicación, palabras clave y un ejemplo, más preguntas "Para practicar" (parecidas a las del examen, pero distintas). Se desbloquea con el mismo requisito que el examen (60% en cada actividad) y se puede imprimir o copiar para la carpeta. Sale del mismo `examen.json`: en cada eje, `guia` y `claves` son para la IA, y `resumen`, `palabras` y `ejemplo` son para el alumno.

Para editar las preguntas, casos o reflexiones: cambiar `themes/<id>/examen.json` y hacer push (no hace falta volver a desplegar la función). Para agregar el examen a otro tema: crear su `examen.json` (copiar el de un tema existente; `conceptosClave` es el vocabulario que la IA tiene en cuenta al corregir) y sumarlo a `EXAMEN_CONFIG` en `temas_data.js`.

## 🗂️ Estructura

```
index.html            Inicio: login/registro, selector de temas, panel admin
tema.html             Hub del tema (actividades + barra de progreso)
quiz.html             Quiz
caza_conceptos.html   Caza de conceptos
crossword.html        Crucigrama
progress.html         Panel de progreso (admin)
firebase.js           Autenticación, perfiles, sesiones y guardado de progreso
firestore.rules       Reglas de seguridad de Firestore (copiar en la consola)
temas_data.js         Datos de las tarjetas del hub (TOPICS) y videos (VIDEO_CONFIG)
js/                   Motores de las actividades
themes/<id>/          Contenido de cada tema
css/, sound/          Estilos y sonidos
dialogo/              Diálogos con filósofos (IA)
functions/            Cloud Functions de Firebase (diálogos y examen oral con IA)
examenes.html         Exámenes orales del curso (admin): conversación, rúbrica y nota
alumnos_anio_curso.py Reporte de alumnos activos del año y limpieza de anteriores
verificar_email_admin.py Marca verificado el email del admin (lo exigen las reglas)
limpiar_ddbb.py       Borra datos de Firestore (excepto el admin)
```

## 🔥 Firebase

- **Authentication:** email y contraseña (con recuperación de contraseña).
- **Firestore:**
  - `users/{uid}`: perfil del alumno (nombre, curso, rol, avatar, estadísticas).
  - `sesiones/{uid_timestamp}`: registro de cada login y logout.
  - `progreso_temas/{uid}_{tema}_{actividad}`: récord (`score`, `bestScore`), último intento (`lastScore`), intentos y tiempo.
  - `examenes/{uid}_{tema}_{ms}` y `examenes_estado/{uid}_{tema}`: intentos del examen oral (los escribe solo la Cloud Function).
- **Cloud Functions** (`functions/index.js`, región southamerica-east1): `chatFilosofo` (diálogos) y `examenEstado`, `examenIniciar`, `examenResponder` (examen oral). Usan Gemini con respaldo en OpenRouter; las claves van como secretos (`GOOGLE_API_KEY`, `OPENROUTER_KEY`). Publicar con `firebase deploy --only functions`.
- **Reglas:** `firestore.rules`. Cada alumno lee y escribe solo lo suyo; el admin lee todo. Si se cambian, hay que pegarlas en la consola de Firebase → Firestore → Reglas.
- **Scripts de administración (Python):** usan la clave de service account (`*firebase-adminsdk*.json`), que **no se sube al repo** (está en `.gitignore`).
  ```
  pip install firebase-admin pandas openpyxl
  python alumnos_anio_curso.py            # reporte de activos del año
  python alumnos_anio_curso.py --borrar   # borra alumnos sin actividad en el año
  python verificar_email_admin.py         # marca verificado el email del admin (requerido por las reglas)
  ```

## ➕ Agregar un tema

1. Crear `themes/<id>/` con `config.json`, `content.html`, `quiz.js`, `conceptos.js`, `mapa.html`, `crossword_config.js` y `cloze_test.js` (copiar de un tema existente, por ejemplo `etica_aristoteles`).
2. En `quiz.js`, la variable debe llamarse `<ID_EN_MAYÚSCULAS>_THEME` (ej.: `ETICA_ARISTOTELES_THEME`).
3. Agregar la tarjeta en `js/main.js` (`AVAILABLE_THEMES`) y los datos del hub y del video en `temas_data.js`.

## 🔄 Flujo de trabajo con git

Trabajar siempre en la rama `main` (GitHub Pages publica desde `main`):

```
git pull origin main                  # antes de empezar
git add .
git commit -m "descripción del cambio"
git push origin main                  # publica en la web en 1-2 minutos
```

## 💻 Probar la app en la PC

Abrir `index.html` con doble clic o Ctrl+F5 **no funciona** para el login: el navegador bloquea los módulos de Firebase con `file://`, y el código usa rutas `/prueba_filo/...` como en la web publicada.

La solución es servirla con un servidor local en la misma ruta `/prueba_filo/`. En PowerShell, una sola vez:

```
cd C:\JulioPrograma\filo_app
New-Item -ItemType Junction -Path prueba_filo -Target .\filo_app
```

Esto crea un acceso `prueba_filo` que apunta a tu carpeta `filo_app`. No copia ni mueve nada.
Después, cada vez que quieras probar:

```
cd C:\JulioPrograma\filo_app
python -m http.server 8000
```

Y abrí en Chrome: http://localhost:8000/prueba_filo/index.html

## 📝 Pendientes

Lo que quedó resuelto de forma provisoria o falta revisar está anotado en [`PENDIENTES.md`](PENDIENTES.md).
