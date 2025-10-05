// ============================================================================
// PARCHE PARA TEMA.HTML v2 - CORRECCIÓN DE saveMaterialProgress
// Versión mejorada que espera correctamente a la autenticación
// ============================================================================

console.log('🔧 Cargando parche de corrección para Material v2...');

(function initPatch() {
  // Esperar a que auth esté disponible
  if (typeof window.auth === 'undefined') {
    console.log('⏳ Esperando módulo auth...');
    setTimeout(initPatch, 100);
    return;
  }

  // Configurar listener de autenticación
  window.auth.onAuthStateChanged((user) => {
    if (!user) {
      console.log('⏳ Esperando autenticación de usuario...');
      return;
    }

    // Usuario autenticado, aplicar parche
    console.log(`✅ Usuario autenticado: ${user.email}`);
    applyMaterialPatch(user);
  });

})();

function applyMaterialPatch(user) {
  console.log('🔧 Aplicando parche de Material...');

  // Obtener tema actual
  const urlParams = new URLSearchParams(window.location.search);
  const currentTheme = urlParams.get('tema') || urlParams.get('theme') || 'filosofia';
  const moduleId = currentTheme.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, '')
    .trim()
    .replace(/\s+/g, '_');

  // Almacén de progreso anterior
  let previousMaterialProgress = {
    percentage: 0,
    sectionsCompleted: 0,
    totalSections: 0,
    completed: false
  };

  // Cargar progreso anterior desde sessionStorage
  function loadPreviousProgress() {
    try {
      const storageKey = `tema.${moduleId}.material`;
      const cached = sessionStorage.getItem(storageKey);
      
      if (cached) {
        const data = JSON.parse(cached);
        const sectionsCount = data.sectionsViewed?.length || 0;
        const total = data.total || 8;
        
        previousMaterialProgress = {
          percentage: Math.round((sectionsCount / total) * 100),
          sectionsCompleted: sectionsCount,
          totalSections: total,
          completed: data.completed || false
        };
        
        console.log(`📥 [PARCHE] Progreso anterior: ${previousMaterialProgress.percentage}% (${previousMaterialProgress.sectionsCompleted}/${previousMaterialProgress.totalSections})`);
      } else {
        console.log('📝 [PARCHE] Sin progreso anterior');
      }
    } catch (error) {
      console.warn('⚠️ Error cargando progreso anterior:', error);
    }
  }

  // Cargar progreso al iniciar
  loadPreviousProgress();

  // SOBRESCRIBIR la función global saveMaterialProgress
  console.log('🔄 Sobrescribiendo saveMaterialProgress...');
  
  window.saveMaterialProgress = async function(sectionsCompleted, totalSections, timeSpentSeconds) {
    console.log(`📊 [PARCHE] Guardado solicitado: ${sectionsCompleted}/${totalSections}`);
    
    try {
      // VALIDACIÓN 1: Calcular porcentaje CORRECTO
      const currentPercentage = Math.round((sectionsCompleted / totalSections) * 100);
      
      console.log(`📐 [PARCHE] Cálculo:`);
      console.log(`   ${sectionsCompleted} ÷ ${totalSections} = ${(sectionsCompleted/totalSections).toFixed(4)}`);
      console.log(`   Redondeado = ${currentPercentage}%`);
      
      // VALIDACIÓN 2: Solo guardar si SUPERA al anterior
      if (previousMaterialProgress.totalSections > 0 && 
          currentPercentage <= previousMaterialProgress.percentage) {
        console.log(`⏸️  [PARCHE] GUARDADO RECHAZADO:`);
        console.log(`   Actual: ${currentPercentage}% (${sectionsCompleted}/${totalSections})`);
        console.log(`   Anterior: ${previousMaterialProgress.percentage}% (${previousMaterialProgress.sectionsCompleted}/${previousMaterialProgress.totalSections})`);
        console.log(`   → No supera el anterior, se omite`);
        return false;
      }
      
      // VALIDACIÓN 3: Status 'completed' SOLO al 100%
      const isFullyCompleted = (sectionsCompleted >= totalSections);
      const status = isFullyCompleted ? 'completed' : 'in_progress';
      
      // VALIDACIÓN 4: Seguridad - evitar inconsistencias
      if (status === 'completed' && currentPercentage < 100) {
        console.error(`❌ [PARCHE] ERROR: status=completed pero porcentaje=${currentPercentage}%`);
        return false;
      }
      
      console.log(`📤 [PARCHE] Guardando en Firebase:`);
      console.log(`   Module: ${moduleId}`);
      console.log(`   Secciones: ${sectionsCompleted}/${totalSections}`);
      console.log(`   Porcentaje: ${currentPercentage}%`);
      console.log(`   Status: ${status}`);
      console.log(`   Tiempo: ${timeSpentSeconds}s`);
      console.log(`   Completado: ${isFullyCompleted ? 'SÍ ✅' : 'NO ⏳'}`);
      
      // Verificar que saveProgress esté disponible
      if (typeof window.saveProgress !== 'function') {
        console.error('❌ [PARCHE] saveProgress no está disponible');
        return false;
      }
      
      // Guardar en Firebase
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
      
      console.log(`✅ [PARCHE] Material guardado exitosamente: ${currentPercentage}%`);
      
      // Forzar sincronización
      if (typeof window.forceSync === 'function') {
        setTimeout(() => window.forceSync(), 1000);
      }
      
      return true;
      
    } catch (error) {
      console.error('❌ [PARCHE] Error guardando:', error);
      return false;
    }
  };
  
  console.log('✅ [PARCHE] saveMaterialProgress sobrescrita');
  
  // Exponer función de debug
  window.debugMaterialPatch = function() {
    console.log('🔍 === DEBUG PARCHE MATERIAL ===');
    console.log('User:', user.email);
    console.log('Module ID:', moduleId);
    console.log('Progreso anterior:', previousMaterialProgress);
    
    const storageKey = `tema.${moduleId}.material`;
    const cached = sessionStorage.getItem(storageKey);
    if (cached) {
      console.log('SessionStorage:', JSON.parse(cached));
    }
    
    return {
      user: user.email,
      moduleId: moduleId,
      previous: previousMaterialProgress,
      storage: cached ? JSON.parse(cached) : null
    };
  };
  
  console.log('✅ [PARCHE] Aplicado exitosamente');
  console.log('💡 Función debug: debugMaterialPatch()');
}

console.log('🎯 Parche v2 cargado - esperando autenticación...');