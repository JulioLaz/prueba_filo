// // fix-firebase-sync.js
// (function() {
//   'use strict';
  
//   console.log('🔧 Aplicando fix de sincronización Firebase → SessionStorage...');
  
//   // Interceptar la función updateUIWithFirebaseProgress
//   const originalUpdateUI = window.updateUIWithFirebaseProgress;
  
//   if (originalUpdateUI) {
//     window.updateUIWithFirebaseProgress = function(firebaseProgress) {
//       console.log('🔄 Sincronizando datos de Firebase...');
      
//       // Llamar función original
//       originalUpdateUI(firebaseProgress);
      
//       // Fix específico para material
//       const materialData = firebaseProgress['material'];
//       if (materialData) {
//         const tema = sessionStorage.getItem('tema.active') || new URLSearchParams(location.search).get('tema');
//         const materialKey = `tema.${tema}.material`;
        
//         const totalSections = 8;
//         const sectionsCount = Math.round((materialData.percentage / 100) * totalSections);
        
//         const materialState = {
//           sectionsViewed: [],
//           total: totalSections,
//           completed: materialData.completed,
//           percentage: materialData.percentage,
//           syncedFromFirebase: true,
//           lastSync: new Date().toISOString(),
//           readingSystemUsed: true
//         };
        
//         // Reconstruir sectionsViewed
//         for (let i = 0; i < sectionsCount; i++) {
//           materialState.sectionsViewed.push(`s${i}`);
//         }
        
//         sessionStorage.setItem(materialKey, JSON.stringify(materialState));
        
//         console.log(`✅ Material sincronizado: ${materialData.percentage}% = ${sectionsCount}/${totalSections} secciones`);
//         console.log('   Secciones:', materialState.sectionsViewed);
//       }
//     };
    
//     console.log('✅ Fix aplicado correctamente');
//   } else {
//     console.warn('⚠️ updateUIWithFirebaseProgress no encontrada');
//   }
// })();

// fix-firebase-sync.js - Unifica clave + fallback de UI hook
(function() {
  'use strict';

  console.log('🔧 Aplicando fix de sincronización Firebase → SessionStorage...');

  // ---------- Helpers compartidos ----------
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

    // Mapa manual (ajusta según tus temas)
    if (!cachedModuleId && moduleId === 'utilitarismo') {
      moduleId = 'utilitarismo_de_stuart_mill';
    }

    return `tema.${moduleId}.material`;
  }

  function readState(key) {
    const raw = sessionStorage.getItem(key);
    if (!raw) return null;
    try { return JSON.parse(raw); } catch { return null; }
  }

  function writeState(key, state) {
    sessionStorage.setItem(key, JSON.stringify(state));
  }

  function mergeMaterialFromFirebase(firebaseProgress) {
    const key = getMaterialKey();
    const current = readState(key) || { sectionsViewed: [], total: 8, completed: false };

    // Estructura robusta: busca material en varios posibles nodos
    const fp = firebaseProgress || {};
    const materialData =
      fp.material ||
      fp.materialProgress ||
      (fp.progress && fp.progress.material) ||
      (fp.modules && fp.modules.material) ||
      null;

    if (!materialData) return;

    // Determinar total y porcentaje
    const totalSections = Number.isFinite(materialData.total) && materialData.total > 0
      ? materialData.total
      : (Number.isFinite(current.total) && current.total > 0 ? current.total : 8);

    const percentage = Number.isFinite(materialData.percentage)
      ? materialData.percentage
      : (Number.isFinite(materialData.score) ? materialData.score : null);

    if (percentage == null) return;

    // Reconstruir sectionsViewed en formato s0..sN-1
    const sectionsCount = Math.max(
      0,
      Math.min(totalSections, Math.round((percentage / 100) * totalSections))
    );

    const newSections = [];
    for (let i = 0; i < sectionsCount; i++) {
      newSections.push(`s${i}`);
    }

    const updated = {
      ...current,
      total: totalSections,
      sectionsViewed: newSections,
      percentage: Math.round((newSections.length / totalSections) * 100),
      completed: newSections.length >= totalSections,
      lastUpdated: new Date().toISOString(),
      readingSystemUsed: true,
      syncedFromFirebase: true
    };

    writeState(key, updated);

    console.log(`✅ Material sincronizado: ${updated.percentage}% = ${newSections.length}/${totalSections} secciones`);
    console.log('   Secciones:', updated.sectionsViewed);

    if (typeof window.renderProgressUI === 'function') {
      window.renderProgressUI();
    }
  }

  // ---------- Hook/patch ----------
  const originalUpdateUI = window.updateUIWithFirebaseProgress;

  if (typeof originalUpdateUI === 'function') {
    window.updateUIWithFirebaseProgress = function(firebaseProgress) {
      console.log('🔄 Sincronizando datos de Firebase...');
      try { originalUpdateUI(firebaseProgress); } catch (e) { console.warn('⚠️ updateUI original lanzó error:', e); }
      try { mergeMaterialFromFirebase(firebaseProgress); } catch (e) { console.warn('⚠️ Error mergeando material:', e); }
    };
    console.log('✅ Fix aplicado correctamente (envolviendo updateUIWithFirebaseProgress)');
  } else {
    console.warn('⚠️ updateUIWithFirebaseProgress no encontrada; activando fallback mínimo');
    // Fallback: define un hook básico para futuras llamadas
    window.updateUIWithFirebaseProgress = function(firebaseProgress) {
      try { mergeMaterialFromFirebase(firebaseProgress); } catch (e) { console.warn('⚠️ Error mergeando material (fallback):', e); }
    };
  }
})();
