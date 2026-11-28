# Pruebas automáticas

Scripts para comprobar que un tema funciona **antes de publicarlo**. Ninguno toca la base de datos real ni gasta cuota de IA: el navegador usa un Firebase simulado y el examen usa el emulador de Firestore con la IA simulada.

Todos se corren **desde la raíz del repo**. Las capturas y PDF quedan en `tools/pruebas/salida/` (no se suben a git).

## Qué prueba cada uno

| Script | Necesita | Qué comprueba |
|---|---|---|
| `verificar_tema.js <tema> [...]` | Node | Lo estructural, sin navegador: archivos, cantidades reales contra `config.json` y la tarjeta de `js/main.js`, que el material vuelva al tema correcto, una sola correcta por pregunta, cruces del crucigrama, mapa con el sistema completo y 15 pares, `youtubeId` válido y video que no corte antes del último hueco del cloze, banco del examen completo. **Correr siempre primero.** |
| `verificar_caza.js [tema ...]` | Node | El texto de la caza: términos literales en su nivel, sin negritas, sin repetidos, pista y corolarios. Sin temas, revisa todos. |
| `jugar_caza.mjs <tema>` | Node + Playwright | Juega todos los niveles; resumen final al 100%, guardado (`caza`), avance para el hub, botón «Resumen para la carpeta». |
| `retomar_caza.mjs <tema>` | Node + Playwright | Retomar la caza: recargar abre en el párrafo donde quedó con los conceptos marcados (◀ muestra los anteriores completos); con avance solo en Firebase (otro dispositivo) abre en el párrafo correcto; todo completo abre el resumen. |
| `jugar_crucigrama.mjs <tema>` | Node + Playwright | Muestra el tablero, resuelve todas las palabras, cartel final y guardado (`cruci`). |
| `jugar_mapa.mjs <tema>` | Node + Playwright | Visita todos los nodos, juega los 15 pares (con un error a propósito) y guardado (`mapa`). |
| `jugar_video.mjs <tema>` | Node + Playwright | Video + cloze en `tema.html` (reloj simulado): abre con el ejercicio desplegado, botón violeta que lo oculta y muestra, ejercicio al lado del video en compu, incompleto guarda menos de 100%, ver el video, reabrir y completar guarda 100% (`video`). |
| `jugar_linea.mjs [tema]` | Node + Playwright | Tema con línea de tiempo (por defecto `linea_tiempo`): hub con solo sus tarjetas y 7 segmentos (incluye el video), examen habilitado con 90%; Explorar (abrir y cerrar no cuenta; lectura en voz alta simulada que marca y guarda; aviso sin reconocimiento de voz; escala real, zoom, retomar solo lo leído en voz alta), Ordenar 8 rondas, Al mismo tiempo 10 preguntas y Termómetro (su ventana no pide lectura; gráfico con saldo, área verde/roja y flechas; resumen con 5 gráficos), todos al 100%. |
| `ver_material.mjs <tema>` | Node + Playwright | Carga el material: contador = secciones reales, primera sección activa, una verificación por sección. La lectura en voz alta no se puede probar (no hay micrófono). |
| `hub_examen.mjs <tema>` | Node + Playwright | Tarjeta del examen en `tema.html`: bloqueada (60% en cada actividad), habilitada, nota baja, sello con nota, enlace a `dialogo/examen.html`. |
| `resumen_final.mjs <tema>` | Node + Playwright | `resumen_tema.html`: tapado si falta una actividad, completo con 60% en todas, copiar, vistas del admin. |
| `jugar_vocacional.mjs` | Node + Playwright | Orientación vocacional: autotest, diálogo de 10 mensajes con el contexto para la función, puntaje por intercambio, retomar, IA caída, ficha «Mi plan» (con la IA y de respaldo), ficha desde otro dispositivo, vista docente y presentación (opciones de Tucumán, botones violetas). |
| `vocacional_funcion.cjs` | Node | `chatFilosofo` con el orientador y la IA simulada (sin emulador): banco de Tucumán, fase y extensión por intercambio, contexto inválido, modo plan con JSON validado, cadena de modelos y que los demás filósofos no cambien. |
| `probar_modelos.cjs` | Node, **con claves reales** | Prueba de verdad cada modelo de `MODELOS_GEMINI` y `MODELOS_OPENROUTER` (cuáles responden y cuánto tardan). Las claves van solo como variables de entorno en la PC: `GOOGLE_API_KEY=... OPENROUTER_KEY=... node tools/pruebas/probar_modelos.cjs`. |
| `examen_funciones.cjs [tema]` | Node + emulador | Las Cloud Functions del examen con la IA simulada: 6 preguntas, repregunta, IA caída, permisos, nota, récord, 2 intentos por día, abandono, y cada tema con examen con su filósofo. |

Todos terminan con `TODO OK` o `N FALLA(S)` (y código de salida 0 o 1).

## Preparar la máquina (una vez)

**En la sesión de Claude Code en la nube** ya está todo: Node y Playwright con Chromium vienen instalados. Para el examen hace falta además:

```
cd functions && npm ci && cd ..
cd tools/pruebas && npm install && cd ../..     # instala firebase-tools (emulador; usa Java)
```

**En la PC (Windows, Git Bash):** instalar Node 22. Después, dentro de `tools/pruebas`:

```
npm install
npm install playwright@1.56.1
npx playwright install chromium
```

(Para el examen también: `cd functions && npm ci`, y Java para el emulador.)

## Cómo correr el examen

En una terminal (queda abierta):

```
cd tools/pruebas && npm run emulador
```

En otra, desde la raíz del repo:

```
node tools/pruebas/examen_funciones.cjs etica
```

Para probar también el acceso del admin, definir antes la variable `EXAMEN_ADMIN_EMAIL` con el email del admin (no está escrito en el script a propósito).

## Recorrido recomendado al terminar un tema

```
node tools/pruebas/verificar_tema.js <tema>
node tools/pruebas/verificar_caza.js <tema>
node tools/pruebas/ver_material.mjs <tema>
node tools/pruebas/jugar_caza.mjs <tema>
node tools/pruebas/jugar_crucigrama.mjs <tema>
node tools/pruebas/jugar_mapa.mjs <tema>
# si el tema tiene examen:
node tools/pruebas/hub_examen.mjs <tema>
node tools/pruebas/resumen_final.mjs <tema>
node tools/pruebas/ver_admin_progreso.mjs     # inicio, tarjeta del admin «Progreso de alumnos»: unidad y orden de los temas, selectores de temas y alumnos, id visible
node tools/pruebas/ver_inicio.mjs              # inicio: línea de época y lugar con banderas en cada tarjeta; recuerda el filtro (Unidad 1) y vuelve a la última tarjeta
node tools/pruebas/examen_funciones.cjs <tema>    # con el emulador corriendo
```

## Lo que NO prueban (hay que mirarlo a mano)

- Que los huecos del cloze coincidan con lo que se dice en el video (YouTube no se puede reproducir en las pruebas).
- La lectura en voz alta del material y de la caza (micrófono).
- El examen con la IA real (cómo pregunta el filósofo, calidad de la corrección).
- El guardado real en Firestore y las reglas de seguridad (`firestore.rules`).

## Cómo funcionan por dentro

`comun.mjs` sirve el repo como si fuera la web publicada (`http://localhost:5000/prueba_filo/...`) interceptando los pedidos con Playwright, sin levantar servidor. `firebase.js` y el SDK de `www.gstatic.com` se reemplazan por módulos falsos: el alumno de prueba es `alu1` y lo que la actividad guardaría en Firestore queda en `window.__saves`. Si una página nueva importa algo más de `firebase.js`, hay que agregarlo a `STUB_FIREBASE` en `comun.mjs`.
