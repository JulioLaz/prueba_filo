// (function() {
//   'use strict';
  
//   console.log('🔧 Fix: Sincronización Material desde Firebase');
  
//   // Interceptar cuando se carga progreso de Firebase
//   window.addEventListener('load', () => {
//     setTimeout(() => {
//       const tema = sessionStorage.getItem('tema.active') || new URLSearchParams(location.search).get('tema');
//       const key = `tema.${tema}.material`;
//       const stored = sessionStorage.getItem(key);
      
//       if (!stored) return;
      
//       try {
//         const data = JSON.parse(stored);
        
//         // Si tiene percentage pero sectionsViewed vacío o con 'v', corregir
//         if (data.percentage > 0 && (!data.sectionsViewed || data.sectionsViewed.length === 0 || data.sectionsViewed[0]?.startsWith('v'))) {
//           const totalSections = 8;
//           const sectionsCount = Math.round((data.percentage / 100) * totalSections);
          
//           data.sectionsViewed = [];
//           for (let i = 0; i < sectionsCount; i++) {
//             data.sectionsViewed.push(`s${i}`);
//           }
          
//           sessionStorage.setItem(key, JSON.stringify(data));
          
//           console.log(`✅ Material corregido: ${data.percentage}% = ${sectionsCount}/8 secciones`);
          
//           // Actualizar UI
//           if (typeof window.renderProgressUI === 'function') {
//             window.renderProgressUI();
//           }
//         }
//       } catch (e) {
//         console.error('Error corrigiendo material:', e);
//       }
//     }, 2000);  // Esperar 2s para que Firebase sincronice primero
//   });
// })();

// fix-material-firebase-sync.js - Unifica la clave y corrige sectionsViewed
(function() {
  'use strict';

  console.log('🔧 Fix: Sincronización Material desde Firebase');

  // ---------- Helpers (mismos criterios que el listener) ----------
  function normalizeToSnake(s) {
    return (s || '')
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s]/g, ' ')
      .trim()
      .replace(/\s+/g, '_');
  }

  function findExistingMaterialKey(temaRaw) {
    const temaNorm = normalizeToSnake(temaRaw);
    let candidate = null;

    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      if (!/^tema\.[^.]+\.material$/.test(key)) continue;

      const moduleId = key.slice(5, -9);
      const val = sessionStorage.getItem(key);
      const isMatch = moduleId.includes(temaNorm);
      const hasContent = !!val && val !== '{}' && val !== 'null';

      if (isMatch && hasContent) return key;
      if (!candidate && hasContent) candidate = key;
    }
    return candidate;
  }

  function getMaterialKey() {
    const temaRaw =
      sessionStorage.getItem('tema.active') ||
      new URLSearchParams(location.search).get('tema') ||
      '';

    const existing = findExistingMaterialKey(temaRaw);
    if (existing) return existing;

    const cachedModuleId =
      sessionStorage.getItem('tema.moduleId') ||
      window.ACTIVE_MODULE_ID ||
      null;

    let moduleId = cachedModuleId || normalizeToSnake(temaRaw);

    // Mapea temas "cortos" a sus moduleId reales cuando aplique
    if (!cachedModuleId && moduleId === 'utilitarismo') {
      moduleId = 'utilitarismo_de_stuart_mill';
    }

    return `tema.${moduleId}.material`;
  }

  // ---------------------------------------------------------------

  // Interceptar cuando se carga progreso de Firebase
  window.addEventListener('load', () => {
    setTimeout(() => {
      const key = getMaterialKey();
      const stored = sessionStorage.getItem(key);
      if (!stored) return;

      try {
        const data = JSON.parse(stored);

        // Detectar y corregir sectionsViewed si:
        // - hay percentage>0
        // - no hay sectionsViewed, está vacío, o viene en formato 'v#'
        const needsFix =
          data &&
          Number.isFinite(data.percentage) &&
          data.percentage > 0 &&
          (
            !Array.isArray(data.sectionsViewed) ||
            data.sectionsViewed.length === 0 ||
            (typeof data.sectionsViewed[0] === 'string' && /^v\d+/i.test(data.sectionsViewed[0]))
          );

        if (needsFix) {
          const totalSections = Number.isFinite(data.total) && data.total > 0 ? data.total : 8;
          const sectionsCount = Math.max(
            0,
            Math.min(totalSections, Math.round((data.percentage / 100) * totalSections))
          );

          data.sectionsViewed = [];
          for (let i = 0; i < sectionsCount; i++) {
            data.sectionsViewed.push(`s${i}`); // cero-based, prefijo 's'
          }

          sessionStorage.setItem(key, JSON.stringify(data));

          console.log(`✅ Material corregido: ${data.percentage}% = ${sectionsCount}/${totalSections} secciones`);

          // Actualizar UI si existe renderer
          if (typeof window.renderProgressUI === 'function') {
            window.renderProgressUI();
          }
        }
      } catch (e) {
        console.error('Error corrigiendo material:', e);
      }
    }, 2000);  // Esperar 2s para que Firebase sincronice primero
  });
})();
