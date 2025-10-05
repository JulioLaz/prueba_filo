// // fix-material-listener.js - LISTENER GLOBAL PARA MATERIAL
// (function() {
//   'use strict';
  
//   console.log('🔧 Configurando listener GLOBAL para material de lectura...');
  
//   // Listener permanente para TODOS los mensajes
//   window.addEventListener('message', function(event) {
//     const data = event.data;
    
//     // Filtrar solo mensajes del sistema ReadAloud
//     if (!data.type) return;
    
//     const tema = sessionStorage.getItem('tema.active') || new URLSearchParams(location.search).get('tema');
    
//     if (data.type === 'SECTION_COMPLETED') {
//       console.log(`📨 Mensaje recibido del iframe: Sección ${data.sectionIndex}`);
      
//       const key = `tema.${tema}.material`;
//       const currentState = JSON.parse(sessionStorage.getItem(key) || '{"sectionsViewed":[], "total":8, "completed":false}');
      
//       const sectionId = `s${data.sectionIndex}`;
      
//       // Evitar duplicados
//       if (currentState.sectionsViewed.includes(sectionId)) {
//         console.log(`ℹ️ Sección ${data.sectionIndex} ya estaba completada`);
//         return;
//       }
      
//       // Agregar sección
//       currentState.sectionsViewed.push(sectionId);
//       currentState.sectionsViewed.sort();
//       currentState.percentage = Math.round((currentState.sectionsViewed.length / currentState.total) * 100);
//       currentState.completed = currentState.sectionsViewed.length >= currentState.total;
//       currentState.lastUpdated = new Date().toISOString();
//       currentState.readingSystemUsed = true;
      
//       sessionStorage.setItem(key, JSON.stringify(currentState));
      
//       console.log(`✅ Sección ${data.sectionIndex} registrada (${currentState.sectionsViewed.length}/${currentState.total})`);
      
//       // Guardar en Firebase
//       setTimeout(async () => {
//         if (typeof saveMaterialProgress === 'function') {
//           const success = await saveMaterialProgress(
//             currentState.sectionsViewed.length,
//             currentState.total,
//             currentState.sectionsViewed.length * 120
//           );
          
//           if (success) {
//             console.log('🔥 Progreso guardado en Firebase');
//           }
//         }
//       }, 500);
      
//       // Actualizar UI
//       if (typeof window.renderProgressUI === 'function') {
//         setTimeout(() => window.renderProgressUI(), 1000);
//       }
//     }
    
//     if (data.type === 'ALL_SECTIONS_COMPLETED') {
//       console.log('🎉 ¡TODAS LAS SECCIONES COMPLETADAS!');
      
//       const key = `tema.${tema}.material`;
//       const state = JSON.parse(sessionStorage.getItem(key) || '{"sectionsViewed":[], "total":8}');
//       state.completed = true;
//       state.percentage = 100;
      
//       sessionStorage.setItem(key, JSON.stringify(state));
      
//       setTimeout(async () => {
//         if (typeof saveMaterialProgress === 'function') {
//           await saveMaterialProgress(8, 8, 960);
//         }
//       }, 500);
//     }
//   });
  
//   console.log('✅ Listener GLOBAL configurado para material de lectura');
// })();
// fix-material-listener.js - LISTENER GLOBAL PARA MATERIAL (versión unificada de claves)
(function() {
  'use strict';

  console.log('🔧 Configurando listener GLOBAL para material de lectura...');

  // --- Helpers --------------------------------------------------------------

  // Normaliza texto a "snake" sin tildes, solo [a-z0-9_]
  function normalizeToSnake(s) {
    return (s || '')
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s]/g, ' ')
      .trim()
      .replace(/\s+/g, '_');
  }

  // Busca si ya existe en sessionStorage una clave 'tema.<algo>.material' para este tema
  // Prioriza la que coincida (parcialmente) con el tema normalizado y que ya tenga datos.
  function findExistingMaterialKey(temaRaw) {
    const temaNorm = normalizeToSnake(temaRaw);
    let candidate = null;

    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      if (!/^tema\.[^.]+\.material$/.test(key)) continue;

      // key = "tema.<moduleId>.material"
      const moduleId = key.slice(5, -9); // extrae lo del medio
      const val = sessionStorage.getItem(key);
      // damos prioridad a:
      //  - que ya tenga contenido usable
      //  - que contenga el tema normalizado en su nombre
      const isMatch = moduleId.includes(temaNorm);
      const hasContent = !!val && val !== '{}' && val !== 'null';

      if (isMatch && hasContent) return key;
      if (!candidate && hasContent) candidate = key; // fallback si no hay match exacto
    }

    return candidate; // puede ser null si no encontró nada
  }

  // Devuelve la clave correcta en sessionStorage para material:
  // 1) si ya existe una 'tema.<moduleId>.material' la usa
  // 2) si no, construye 'tema.<moduleIdNormalizado>.material' a partir del tema
  function getMaterialKey() {
    const temaRaw =
      sessionStorage.getItem('tema.active') ||
      new URLSearchParams(location.search).get('tema') ||
      '';

    // 1) Reusar si ya hay una clave válida
    const existing = findExistingMaterialKey(temaRaw);
    if (existing) return existing;

    // 2) Construir una nueva clave con moduleId normalizado
    //    OJO: Si tenés un mapa propio de temas → moduleId, puedes colocarlo aquí.
    //    Por ejemplo:
    //    const MAP = { utilitarismo: 'utilitarismo_de_stuart_mill' };
    //    const moduleId = MAP[temaRaw] || normalizeToSnake(temaRaw);
    //    Para generalidad, primero intentamos leer un moduleId cacheado:
    const cachedModuleId =
      sessionStorage.getItem('tema.moduleId') ||
      window.ACTIVE_MODULE_ID ||
      null;

    let moduleId = cachedModuleId || normalizeToSnake(temaRaw);

    // Caso especial frecuente: "utilitarismo" → "utilitarismo_de_stuart_mill"
    // (ajusta/añade los tuyos si lo necesitas)
    if (!cachedModuleId && moduleId === 'utilitarismo') {
      moduleId = 'utilitarismo_de_stuart_mill';
    }

    return `tema.${moduleId}.material`;
  }

  // Lee estado actual o construye uno por defecto
  function readState(key) {
    const raw = sessionStorage.getItem(key);
    if (raw) {
      try { return JSON.parse(raw); } catch {}
    }
    return { sectionsViewed: [], total: 8, completed: false };
  }

  // Guarda estado
  function writeState(key, state) {
    sessionStorage.setItem(key, JSON.stringify(state));
  }

  // -------------------------------------------------------------------------

  window.addEventListener('message', function(event) {
    const data = event.data;
    if (!data || !data.type) return;

    const key = getMaterialKey();
    if (!key) return;

    if (data.type === 'SECTION_COMPLETED') {
      console.log(`📨 Mensaje recibido del iframe: Sección ${data.sectionIndex}`);

      const currentState = readState(key);
      // Asegura 'total' (si ya existe respetarlo; si no, asumir 8)
      if (!Number.isFinite(currentState.total) || currentState.total <= 0) {
        currentState.total = 8;
      }

      // Usamos s0..sN-1 (cero-based) como en el integrador "corregido"
      const sectionId = `s${data.sectionIndex}`;

      if (currentState.sectionsViewed.includes(sectionId)) {
        console.log(`ℹ️ Sección ${data.sectionIndex} ya estaba completada`);
        return;
      }

      currentState.sectionsViewed.push(sectionId);
      // Ordena tipo s0,s1,… (cuidamos sort numérico)
      currentState.sectionsViewed.sort((a, b) => {
        const ai = parseInt(a.slice(1), 10);
        const bi = parseInt(b.slice(1), 10);
        return ai - bi;
      });

      currentState.percentage = Math.round((currentState.sectionsViewed.length / currentState.total) * 100);
      currentState.completed  = currentState.sectionsViewed.length >= currentState.total;
      currentState.lastUpdated = new Date().toISOString();
      currentState.readingSystemUsed = true;

      writeState(key, currentState);

      console.log(`✅ Sección ${data.sectionIndex} registrada (${currentState.sectionsViewed.length}/${currentState.total})`);

      // Guardar en Firebase usando el total detectado
      setTimeout(async () => {
        if (typeof saveMaterialProgress === 'function') {
          try {
            const ok = await saveMaterialProgress(
              currentState.sectionsViewed.length,
              currentState.total,
              currentState.sectionsViewed.length * 120
            );
            if (ok) console.log('🔥 Progreso guardado en Firebase');
          } catch (e) {
            console.warn('⚠️ Error guardando progreso en Firebase:', e);
          }
        }
      }, 500);

      // Actualizar UI si hay renderer disponible
      if (typeof window.renderProgressUI === 'function') {
        setTimeout(() => window.renderProgressUI(), 1000);
      }
    }

    if (data.type === 'ALL_SECTIONS_COMPLETED') {
      console.log('🎉 ¡TODAS LAS SECCIONES COMPLETADAS!');

      const state = readState(key);
      state.completed  = true;
      state.percentage = 100;
      state.lastUpdated = new Date().toISOString();
      writeState(key, state);

      setTimeout(async () => {
        if (typeof saveMaterialProgress === 'function') {
          try {
            await saveMaterialProgress(state.total || 8, state.total || 8, (state.total || 8) * 120);
          } catch (e) {
            console.warn('⚠️ Error guardando progreso final en Firebase:', e);
          }
        }
      }, 500);
    }
  });

  console.log('✅ Listener GLOBAL configurado para material de lectura');
})();
