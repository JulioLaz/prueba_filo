(function() {
  'use strict';
  
  console.log('🔧 Fix: Sincronización Material desde Firebase');
  
  // Interceptar cuando se carga progreso de Firebase
  window.addEventListener('load', () => {
    setTimeout(() => {
      const tema = sessionStorage.getItem('tema.active') || new URLSearchParams(location.search).get('tema');
      const key = `tema.${tema}.material`;
      const stored = sessionStorage.getItem(key);
      
      if (!stored) return;
      
      try {
        const data = JSON.parse(stored);
        
        // Si tiene percentage pero sectionsViewed vacío o con 'v', corregir
        if (data.percentage > 0 && (!data.sectionsViewed || data.sectionsViewed.length === 0 || data.sectionsViewed[0]?.startsWith('v'))) {
          const totalSections = 8;
          const sectionsCount = Math.round((data.percentage / 100) * totalSections);
          
          data.sectionsViewed = [];
          for (let i = 0; i < sectionsCount; i++) {
            data.sectionsViewed.push(`s${i}`);
          }
          
          sessionStorage.setItem(key, JSON.stringify(data));
          
          console.log(`✅ Material corregido: ${data.percentage}% = ${sectionsCount}/8 secciones`);
          
          // Actualizar UI
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