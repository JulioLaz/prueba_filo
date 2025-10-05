// fix-firebase-sync.js
(function() {
  'use strict';
  
  console.log('🔧 Aplicando fix de sincronización Firebase → SessionStorage...');
  
  // Interceptar la función updateUIWithFirebaseProgress
  const originalUpdateUI = window.updateUIWithFirebaseProgress;
  
  if (originalUpdateUI) {
    window.updateUIWithFirebaseProgress = function(firebaseProgress) {
      console.log('🔄 Sincronizando datos de Firebase...');
      
      // Llamar función original
      originalUpdateUI(firebaseProgress);
      
      // Fix específico para material
      const materialData = firebaseProgress['material'];
      if (materialData) {
        const tema = sessionStorage.getItem('tema.active') || new URLSearchParams(location.search).get('tema');
        const materialKey = `tema.${tema}.material`;
        
        const totalSections = 8;
        const sectionsCount = Math.round((materialData.percentage / 100) * totalSections);
        
        const materialState = {
          sectionsViewed: [],
          total: totalSections,
          completed: materialData.completed,
          percentage: materialData.percentage,
          syncedFromFirebase: true,
          lastSync: new Date().toISOString(),
          readingSystemUsed: true
        };
        
        // Reconstruir sectionsViewed
        for (let i = 0; i < sectionsCount; i++) {
          materialState.sectionsViewed.push(`s${i}`);
        }
        
        sessionStorage.setItem(materialKey, JSON.stringify(materialState));
        
        console.log(`✅ Material sincronizado: ${materialData.percentage}% = ${sectionsCount}/${totalSections} secciones`);
        console.log('   Secciones:', materialState.sectionsViewed);
      }
    };
    
    console.log('✅ Fix aplicado correctamente');
  } else {
    console.warn('⚠️ updateUIWithFirebaseProgress no encontrada');
  }
})();