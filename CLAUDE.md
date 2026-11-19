# FILOSOFÍA APP — guía para Claude

Web estática (HTML/CSS/JS) para estudiar Filosofía en el secundario (alumnos de ~17 años, Tucumán, Argentina). Cada tema tiene actividades (material, cuestionario, caza de conceptos, crucigrama, mapa conceptual, video + cloze) y algunos cierran con un examen oral con un filósofo (IA). El progreso de cada alumno se guarda en Firebase y el docente lo sigue desde paneles de administración.

- Repo: `JulioLaz/prueba_filo` · Web: https://juliolaz.github.io/prueba_filo/ (GitHub Pages publica desde **main**).
- Backend: Firebase Auth + Firestore + Cloud Functions (región `southamerica-east1`, proyecto `filosofia-quiz-prod`).

## Leer antes de trabajar

| Documento | Para qué |
|---|---|
| `docs/ARQUITECTURA.md` | Cómo se conecta todo: páginas, configuración, Firebase, recorrido de un puntaje, reglas de aprobación. |
| `docs/ACTIVIDADES.md` | Ficha de cada actividad: archivo, formato, motor, puntaje y **estándar de calidad** (con números). |
| `docs/OBJETIVOS.md` | Objetivos generales de la app y particulares de cada actividad. |
| `docs/GUIA_TEMA.md` | Paso a paso para crear o mejorar un tema hasta el nivel de referencia, con lista de «terminado». |
| `docs/ESTADO_TEMAS.md` | Qué está revisado y qué falta en cada tema, y pendientes de Firebase. **Actualizarlo al terminar cada trabajo.** |
| `tools/pruebas/README.md` | Pruebas automáticas (verificación de temas, jugar actividades, examen con emulador). |
| `README.md` | Descripción para usuarios: cómo se usa la app, examen oral, Firebase, git. |

**Tema de referencia de calidad:** `etica_aristoteles` («Aristóteles: Lo Bueno es la Felicidad», Unidad 3). Todo tema nuevo o revisado se compara con él.

## Preferencias del usuario (Julio, docente de Filosofía)

- Responder **en español con voseo**, breve, empezando por una frase con lo que se entendió del pedido.
- **No programar sin pedido explícito.** Si pide opinión, análisis o un plan: proponer y preguntar antes de tocar código.
- No dar información ni explicaciones que no pidió.
- Botones: **violetas (#805ad5), sin emojis**.
- Scripts Python: reseña inicial entre `'''...'''`, número de versión y función de entrada `main_<nombre_alusivo>()` (nunca `main()`). En JS: comentario inicial con reseña y versión.
- Su PC: Windows con Git Bash, repo en `/c/JulioPrograma/filo_app/filo_app`.

## Cómo se trabaja

- Se trabaja **directo en `main`** (así lo quiere el usuario) y se hace push al terminar cada parte. GitHub Pages tarda ~1-2 min; los alumnos ven los cambios después de **Ctrl+F5** (caché de ~10 min).
- **Verificar antes de subir:** `node tools/pruebas/verificar_tema.js <tema>` y las pruebas de las actividades tocadas (ver `tools/pruebas/README.md`).
- Escribir los cambios a partir del código real, no de memoria. Al cambiar algo, actualizar el comentario de versión del archivo.
- **Lo que NO se publica con git** (avisarle al usuario cuando haga falta):
  - Cloud Functions: `firebase deploy --only functions` (lo corre el usuario en su PC).
  - Reglas: `firestore.rules` se pega a mano en Firebase Console → Firestore → Reglas.
  - El banco del examen (`themes/<id>/examen.json`) **sí** se publica con git: la función lo lee desde Pages.

## Reglas que no se rompen

- **Nunca** pegar claves en el chat ni subirlas al repo: las de IA van con `firebase functions:secrets:set` (`GOOGLE_API_KEY`, `OPENROUTER_KEY`). `.env` y `*firebase-adminsdk*.json` están en `.gitignore`.
- El email del usuario es privado: no escribirlo en código nuevo, documentos ni pedidos externos (el admin ya está definido en `functions/index.js` y `firebase.js`).
- La consola de Firebase requiere el login del usuario: no intentar acceder.
- El admin (docente) saltea los bloqueos de actividades y examen; tiene un selector «Vista: Docente / Como alumno».
- Las notas del examen solo las escribe la Cloud Function (el alumno no puede, por `firestore.rules`).
- Firestore guarda el **mejor** puntaje de cada actividad: un intento peor no baja el récord.

## Mapa rápido de carpetas

```
index.html, tema.html, quiz.html, caza_conceptos.html, crossword.html   páginas principales
resumen_*.html, progress.html, examenes.html, dialogo/examen.html        resúmenes, paneles del docente, examen
temas_data.js      TOPICS (datos del hub), VIDEO_CONFIG, EXAMEN_CONFIG
js/main.js         tarjetas del inicio (AVAILABLE_THEMES): unidad, título, cantidad de preguntas
js/                motores de las actividades
themes/<id>/       contenido de cada tema (ver docs/ACTIVIDADES.md)
functions/         Cloud Functions (chatFilosofo, examenEstado/Iniciar/Responder)
firebase.js        login, perfiles, saveProgress (Firestore)
tools/pruebas/     pruebas automáticas
docs/              esta documentación
```
