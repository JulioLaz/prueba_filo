# 🎓 Filosofía App

Aplicación web para estudiar filosofía en el secundario: cada tema reúne material de lectura, quiz, caza de conceptos, mapa conceptual, crucigrama y video con cloze. El progreso de cada alumno se guarda en Firebase y el docente lo sigue desde un panel de administración.

**🔗 App publicada:** https://juliolaz.github.io/prueba_filo/

---

## 📚 Cómo se usa

1. El alumno se registra o ingresa desde la pantalla principal (`index.html`).
2. Elige un tema (filtros por Unidad 1, 2, 3, Diálogos y Juegos).
3. En el hub del tema (`tema.html?tema=<id>`) hace las actividades; la barra muestra su avance.
4. El docente (cuenta admin) ve el progreso de todos los alumnos en el inicio y en `progress.html`.

## 🧩 Actividades de cada tema

| Actividad | Archivo del tema | Motor |
|---|---|---|
| 📖 Material de lectura (lectura en voz alta + preguntas de comprensión) | `themes/<id>/content.html` | `js/readaloud-system.js`, `js/material-firebase.js` |
| 📝 Quiz (preguntas y respuestas mezcladas, pistas y timer) | `themes/<id>/quiz.js` | `quiz.html` + `js/quiz-engine.js` |
| 🔎 Caza de conceptos | `themes/<id>/conceptos.js` | `caza_conceptos.html` + `js/caza-conceptos-engine-firebase.js` |
| 🗺️ Mapa conceptual + juego de pares | `themes/<id>/mapa.html` | `js/mapa-system-fixed.js`, `js/mapa-system-score.js` |
| 🧩 Crucigrama | `themes/<id>/crossword_config.js` | `crossword.html` + `js/crossword_engine.js` |
| 🎬 Video + cloze | `themes/<id>/cloze_test.js` | `tema.html` (video en `temas_data.js` → `VIDEO_CONFIG`) |

Cada tema tiene además un `themes/<id>/config.json` con sus metadatos (cantidad de secciones, preguntas, niveles, etc.).

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
functions/            Cloud Functions de Firebase (diálogos con Gemini)
alumnos_anio_curso.py Reporte de alumnos activos del año y limpieza de anteriores
limpiar_ddbb.py       Borra datos de Firestore (excepto el admin)
```

## 🔥 Firebase

- **Authentication:** email y contraseña (con recuperación de contraseña).
- **Firestore:**
  - `users/{uid}`: perfil del alumno (nombre, curso, rol, avatar, estadísticas).
  - `sesiones/{uid_timestamp}`: registro de cada login y logout.
  - `progreso_temas/{uid}_{tema}_{actividad}`: récord (`score`, `bestScore`), último intento (`lastScore`), intentos y tiempo.
- **Reglas:** `firestore.rules`. Cada alumno lee y escribe solo lo suyo; el admin lee todo. Si se cambian, hay que pegarlas en la consola de Firebase → Firestore → Reglas.
- **Scripts de administración (Python):** usan la clave de service account (`*firebase-adminsdk*.json`), que **no se sube al repo** (está en `.gitignore`).
  ```
  pip install firebase-admin pandas openpyxl
  python alumnos_anio_curso.py            # reporte de activos del año
  python alumnos_anio_curso.py --borrar   # borra alumnos sin actividad en el año
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
