/**
 * material-progreso.js
 * Hub (tema.html): refresca la barra de progreso cuando el material de lectura
 * (iframe themes/<tema>/content.html) avisa que avanzó.
 *
 * No guarda nada en Firebase: eso lo hace solo js/material-firebase.js dentro
 * del iframe. El progreso guardado se carga al abrir el hub desde Firebase
 * (loadProgressFromFirebase en tema.html).
 *
 * Reemplaza a: parche-material-progreso-real.js, fix-material-listener.js,
 * fix-firebase-sync.js, fix-material-firebase-sync.js y el "console hydrator".
 *
 * Versión: v1.0.0 (2026-10-20)
 */
(function () {
  'use strict';

  const AVISOS = ['MATERIAL_PROGRESS', 'SECTION_COMPLETED', 'ALL_SECTIONS_COMPLETED'];

  window.addEventListener('message', (event) => {
    if (event.origin !== location.origin) return;
    if (!event.data || !AVISOS.includes(event.data.type)) return;

    // El iframe ya escribió tema.<tema>.material en sessionStorage (misma pestaña)
    setTimeout(() => {
      if (typeof window.renderProgressUI === 'function') window.renderProgressUI();
    }, 300);
  });
})();
