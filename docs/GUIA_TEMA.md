# Guía para crear o mejorar un tema

Versión del documento: 1.0 (2026-11-19). Objetivo: dejar el tema al nivel de `themes/etica_aristoteles`. Los formatos y estándares de cada archivo están en `docs/ACTIVIDADES.md`.

## Orden de trabajo

El orden importa: **primero el material**, porque todas las demás actividades salen de él.

1. **Diagnóstico.** `node tools/pruebas/verificar_tema.js <tema>` y `node tools/pruebas/verificar_caza.js <tema>`. Leer el material completo y comparar cada actividad con él. Proponerle al usuario un plan antes de tocar nada.
2. **Material** (`content.html`): secciones de 40 a 100 palabras, una verificación por sección, síntesis al final; `sections`, contador, `redirectTo` y `config.json` coincidiendo.
3. **Video** (`VIDEO_CONFIG` en `temas_data.js`): `youtubeId` limpio y `endTime` que alcance al último hueco del cloze. Si cambia el video, rehacer el cloze con sus tiempos.
4. **Cloze** (`cloze_test.js`): huecos en el orden del video, `videoSegment` desde `startTime`.
5. **Cuestionario** (`quiz.js`): cada pregunta se responde con el material; actualizar `questions` en la tarjeta de `js/main.js` y en `config.json`.
6. **Caza** (`conceptos.js`): 8 niveles siguiendo el material, sin negritas, términos literales.
7. **Crucigrama** (`crossword_config.js`): central = concepto clave, una palabra por letra, todas del material.
8. **Mapa** (`mapa.html`): sistema completo, 15 pares iguales en `gameData` y en «Palabras Clave».
9. **Examen y resumen final** (si el usuario lo pide): `examen.json` (12 ejes, 8 casos, 5 reflexiones, 6 aperturas, 8 de práctica) y entrada en `EXAMEN_CONFIG`. Para Ética y Moral se eligió a Sócrates como examinador porque el tema no es de un solo autor.
10. **Verificar y subir** (ver la lista de abajo), actualizar `docs/ESTADO_TEMAS.md` y, si cambió algo general, el `README.md`.

## Tema nuevo (desde cero)

1. Copiar la carpeta `themes/etica_aristoteles` a `themes/<id>` y reemplazar todo el contenido (no dejar nada del original: ni textos, ni `tema`/`redirectTo`, ni la variable del cuestionario).
2. En `quiz.js`, renombrar la variable a `<ID_EN_MAYÚSCULAS>_THEME`.
3. Alta en `js/main.js` (`AVAILABLE_THEMES`: `id`, `title`, `description`, `icon`, `gradient`, `difficulty` = unidad, `questions`, `timeEstimate`, `contentFile`).
4. Alta en `temas_data.js`: `TOPICS[<id>]` y, si tiene video, `VIDEO_CONFIG[<id>]`; si tiene examen, `EXAMEN_CONFIG[<id>]`.
5. Nombre legible en `index.html` (`formatThemeName`) y, si hace falta, ícono en `js/educational-modal.js`.
6. Seguir el «Orden de trabajo» desde el paso 2.

## Lista de «terminado»

Un tema está terminado cuando:

- [ ] `verificar_tema.js <tema>` da OK (archivos, cantidades, redirección, cruces, mapa, video, examen).
- [ ] `verificar_caza.js <tema>` da OK.
- [ ] Pasan `ver_material.mjs`, `jugar_caza.mjs`, `jugar_crucigrama.mjs` y `jugar_mapa.mjs`.
- [ ] Si tiene examen: pasan `hub_examen.mjs`, `resumen_final.mjs` y `examen_funciones.cjs` (con el emulador).
- [ ] Cada pregunta del cuestionario, término de la caza, palabra del crucigrama, par del mapa y eje del examen aparece en el material.
- [ ] Ningún archivo menciona otro tema por error (copias, redirecciones, comentarios como «Unidad IV»).
- [ ] Comentario de versión actualizado en cada archivo tocado.
- [ ] `docs/ESTADO_TEMAS.md` actualizado.
- [ ] Commit y push a `main`; avisarle al usuario que recargue con Ctrl+F5 y qué tiene que mirar a mano: el cloze contra el video, la lectura en voz alta y el examen con la IA real.
