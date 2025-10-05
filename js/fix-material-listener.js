// fix-material-listener.js - LISTENER GLOBAL PARA MATERIAL
(function() {
  'use strict';
  
  console.log('🔧 Configurando listener GLOBAL para material de lectura...');
  
  // Listener permanente para TODOS los mensajes
  window.addEventListener('message', function(event) {
    const data = event.data;
    
    // Filtrar solo mensajes del sistema ReadAloud
    if (!data.type) return;
    
    const tema = sessionStorage.getItem('tema.active') || new URLSearchParams(location.search).get('tema');
    
    if (data.type === 'SECTION_COMPLETED') {
      console.log(`📨 Mensaje recibido del iframe: Sección ${data.sectionIndex}`);
      
      const key = `tema.${tema}.material`;
      const currentState = JSON.parse(sessionStorage.getItem(key) || '{"sectionsViewed":[], "total":8, "completed":false}');
      
      const sectionId = `s${data.sectionIndex}`;
      
      // Evitar duplicados
      if (currentState.sectionsViewed.includes(sectionId)) {
        console.log(`ℹ️ Sección ${data.sectionIndex} ya estaba completada`);
        return;
      }
      
      // Agregar sección
      currentState.sectionsViewed.push(sectionId);
      currentState.sectionsViewed.sort();
      currentState.percentage = Math.round((currentState.sectionsViewed.length / currentState.total) * 100);
      currentState.completed = currentState.sectionsViewed.length >= currentState.total;
      currentState.lastUpdated = new Date().toISOString();
      currentState.readingSystemUsed = true;
      
      sessionStorage.setItem(key, JSON.stringify(currentState));
      
      console.log(`✅ Sección ${data.sectionIndex} registrada (${currentState.sectionsViewed.length}/${currentState.total})`);
      
      // Guardar en Firebase
      setTimeout(async () => {
        if (typeof saveMaterialProgress === 'function') {
          const success = await saveMaterialProgress(
            currentState.sectionsViewed.length,
            currentState.total,
            currentState.sectionsViewed.length * 120
          );
          
          if (success) {
            console.log('🔥 Progreso guardado en Firebase');
          }
        }
      }, 500);
      
      // Actualizar UI
      if (typeof window.renderProgressUI === 'function') {
        setTimeout(() => window.renderProgressUI(), 1000);
      }
    }
    
    if (data.type === 'ALL_SECTIONS_COMPLETED') {
      console.log('🎉 ¡TODAS LAS SECCIONES COMPLETADAS!');
      
      const key = `tema.${tema}.material`;
      const state = JSON.parse(sessionStorage.getItem(key) || '{"sectionsViewed":[], "total":8}');
      state.completed = true;
      state.percentage = 100;
      
      sessionStorage.setItem(key, JSON.stringify(state));
      
      setTimeout(async () => {
        if (typeof saveMaterialProgress === 'function') {
          await saveMaterialProgress(8, 8, 960);
        }
      }, 500);
    }
  });
  
  console.log('✅ Listener GLOBAL configurado para material de lectura');
})();