// ============================================================================
// PARCHE PARA TEMA.HTML - CORRECCIÓN DE saveMaterialProgress
// Agregar este código AL FINAL de tema.html, antes del cierre </body>
// ============================================================================

console.log('🔧 Aplicando parche de corrección para Material de Lectura...');

// Esperar a que el sistema esté listo
(function patchMaterialProgress() {
  const MAX_RETRIES = 10;
  let retries = 0;
  
  const applyPatch = setInterval(() => {
    retries++;
    
    // Verificar que Firebase y auth estén listos
    if (typeof window.auth === 'undefined' || !window.auth.currentUser) {
      if (retries >= MAX_RETRIES) {
        clearInterval(applyPatch);
        console.warn('⚠️ No se pudo aplicar parche: usuario no autenticado');
      }
      return;
    }
    
    // Verificar que la función saveProgress de Firebase esté disponible
    if (typeof window.saveProgress !== 'function') {
      if (retries >= MAX_RETRIES) {
        clearInterval(applyPatch);
        console.warn('⚠️ No se pudo aplicar parche: saveProgress no disponible');
      }
      return;
    }
    
    clearInterval(applyPatch);
    
    // ========================================================================
    // APLICAR PARCHE
    // ========================================================================
    
    console.log('✅ Condiciones cumplidas, aplicando parche...');
    
    // Obtener tema actual
    const urlParams = new URLSearchParams(window.location.search);
    const currentTheme = urlParams.get('tema') || urlParams.get('theme') || 'filosofia';
    const moduleId = currentTheme.toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s]/g, '')
      .trim()
      .replace(/\s+/g, '_');
    
    // Almacenar progreso anterior en memoria
    let previousMaterialProgress = {
      percentage: 0,
      sectionsCompleted: 0,
      totalSections: 0,
      completed: false
    };
    
    // Función para cargar progreso anterior desde Firebase
    async function loadPreviousMaterialProgress() {
      try {
        // Intentar desde sessionStorage primero
        const storageKey = `tema.${moduleId}.material`;
        const cached = sessionStorage.getItem(storageKey);
        
        if (cached) {
          const data = JSON.parse(cached);
          previousMaterialProgress = {
            percentage: data.percentage || 0,
            sectionsCompleted: data.sectionsViewed?.length || 0,
            totalSections: data.total || 0,
            completed: data.completed || false
          };
          console.log(`📥 Progreso material anterior: ${previousMaterialProgress.percentage}%`);
        }
      } catch (error) {
        console.warn('⚠️ Error cargando progreso anterior:', error);
      }
    }
    
    // SOBRESCRIBIR la función global saveMaterialProgress
    const originalSaveMaterialProgress = window.saveMaterialProgress;
    
    window.saveMaterialProgress = async function(sectionsCompleted, totalSections, timeSpentSeconds) {
      console.log(`📊 [PARCHE] Evaluando guardado: ${sectionsCompleted}/${totalSections}`);
      
      try {
        // Calcular porcentaje actual
        const currentPercentage = Math.round((sectionsCompleted / totalSections) * 100);
        
        // VALIDACIÓN 1: Verificar que totalSections coincida con lo esperado
        if (previousMaterialProgress.totalSections > 0 && 
            totalSections !== previousMaterialProgress.totalSections) {
          console.warn(`⚠️ Cambio en total de secciones: ${previousMaterialProgress.totalSections} → ${totalSections}`);
        }
        
        // VALIDACIÓN 2: Solo guardar si el progreso SUPERA al anterior
        if (currentPercentage <= previousMaterialProgress.percentage) {
          console.log(`⏸️ [PARCHE] Guardado rechazado:`);
          console.log(`   Actual: ${currentPercentage}% (${sectionsCompleted}/${totalSections})`);
          console.log(`   Anterior: ${previousMaterialProgress.percentage}% (${previousMaterialProgress.sectionsCompleted}/${previousMaterialProgress.totalSections})`);
          console.log(`   → No se guarda para evitar retroceso`);
          return false;
        }
        
        // VALIDACIÓN 3: Status 'completed' SOLO si completó TODAS las secciones
        const isFullyCompleted = (sectionsCompleted >= totalSections);
        const status = isFullyCompleted ? 'completed' : 'in_progress';
        
        console.log(`📤 [PARCHE] Guardando en Firebase:`);
        console.log(`   Secciones: ${sectionsCompleted}/${totalSections}`);
        console.log(`   Porcentaje: ${currentPercentage}%`);
        console.log(`   Status: ${status}`);
        console.log(`   Completado: ${isFullyCompleted ? 'SÍ' : 'NO'}`);
        
        // Guardar en Firebase usando la función importada
        await window.saveProgress({
          moduleId: moduleId,
          lessonId: 'material',
          status: status,
          score: currentPercentage,
          seconds: timeSpentSeconds
        });
        
        // Actualizar progreso anterior
        previousMaterialProgress = {
          percentage: currentPercentage,
          sectionsCompleted: sectionsCompleted,
          totalSections: totalSections,
          completed: isFullyCompleted
        };
        
        // Actualizar sessionStorage
        const storageKey = `tema.${moduleId}.material`;
        const sectionsViewed = [];
        for (let i = 1; i <= sectionsCompleted; i++) {
          sectionsViewed.push(`v${i}`);
        }
        
        sessionStorage.setItem(storageKey, JSON.stringify({
          sectionsViewed: sectionsViewed,
          total: totalSections,
          completed: isFullyCompleted,
          percentage: currentPercentage,
          timeSpentSeconds: timeSpentSeconds,
          lastUpdated: new Date().toISOString(),
          syncedWithFirebase: true
        }));
        
        console.log(`✅ [PARCHE] Material guardado: ${currentPercentage}%`);
        
        // Forzar sincronización de UI
        if (typeof window.forceSync === 'function') {
          setTimeout(() => window.forceSync(), 1000);
        }
        
        return true;
        
      } catch (error) {
        console.error('❌ [PARCHE] Error guardando:', error);
        return false;
      }
    };
    
    // Cargar progreso anterior al iniciar
    loadPreviousMaterialProgress();
    
    console.log('✅ Parche aplicado exitosamente');
    console.log('🔧 saveMaterialProgress ahora incluye validaciones:');
    console.log('   • No permite retrocesos de progreso');
    console.log('   • Status completed solo al 100%');
    console.log('   • Cálculo correcto de porcentajes');
    
    // Exponer función de debug
    window.debugMaterialProgress = function() {
      console.log('🔍 === DEBUG MATERIAL PROGRESS ===');
      console.log('Progreso anterior:', previousMaterialProgress);
      console.log('Module ID:', moduleId);
      
      const storageKey = `tema.${moduleId}.material`;
      const cached = sessionStorage.getItem(storageKey);
      if (cached) {
        console.log('SessionStorage:', JSON.parse(cached));
      }
      
      return {
        previous: previousMaterialProgress,
        moduleId: moduleId,
        storage: cached ? JSON.parse(cached) : null
      };
    };
    
    console.log('💡 Función de debug disponible: debugMaterialProgress()');
    
  }, 500); // Verificar cada 500ms
  
})();

console.log('🎯 Parche de Material cargado - esperando condiciones...');