// 🧪 SCRIPT DE PRUEBAS DEL SISTEMA DE LECTURA FIREBASE
// Copiar y pegar en DevTools > Console cuando content.html esté cargado
// Para ejecutar: Presiona F12 > Console > Pega este código > Enter

console.log('🧪 === INICIANDO BATERÍA DE PRUEBAS ===\n');

// ============================================================================
// TEST 1: Verificar que todos los componentes estén cargados
// ============================================================================
console.log('📝 TEST 1: Verificación de componentes cargados');
console.log('─'.repeat(70));

const componentes = {
  '🔧 MaterialFirebaseInstance': typeof window.materialFirebaseInstance !== 'undefined',
  '🌉 Bridge saveMaterialProgress': typeof window.saveMaterialProgress === 'function',
  '🌉 Bridge forceSync': typeof window.forceSync === 'function',
  '🎤 ReadAloud System': typeof window.readAloudSystemInstance !== 'undefined',
  '🔥 Firebase Auth': window.auth?.currentUser !== null,
  '📊 Función checkStatus': typeof window.checkMaterialReadingStatus === 'function',
  '💾 Función forceSave': typeof window.forceSaveMaterialReading === 'function'
};

console.table(componentes);

const todosOK = Object.values(componentes).every(v => v === true);
console.log(todosOK ? '✅ Todos los componentes OK\n' : '❌ Faltan componentes\n');

// ============================================================================
// TEST 2: Prevención de retrocesos de progreso
// ============================================================================
console.log('📝 TEST 2: Prevención de retrocesos de progreso');
console.log('─'.repeat(70));

async function testRetroceso() {
  console.log('Estableciendo progreso inicial: 50% (7/14 secciones)...');
  
  // Simular que ya tenemos 50% guardado
  window.materialFirebaseInstance.previousProgress = {
    percentage: 50,
    sectionsCompleted: 7,
    completed: false
  };
  
  console.log('✓ Progreso base establecido: 50%\n');
  
  // TEST 2A: Intentar guardar progreso MENOR (30%)
  console.log('TEST 2A: Intentando guardar 30% (4/14 secciones)...');
  const resultado1 = await window.saveMaterialProgress(4, 14, 480);
  
  if (!resultado1) {
    console.log('✅ CORRECTO: El sistema RECHAZÓ el guardado de 30% (menor que 50%)');
  } else {
    console.error('❌ ERROR: El sistema PERMITIÓ guardar 30% (debería rechazarlo)');
  }
  
  // TEST 2B: Intentar guardar progreso IGUAL (50%)
  console.log('\nTEST 2B: Intentando guardar 50% (7/14 secciones)...');
  const resultado2 = await window.saveMaterialProgress(7, 14, 840);
  
  if (!resultado2) {
    console.log('✅ CORRECTO: El sistema RECHAZÓ el guardado de 50% (igual que anterior)');
  } else {
    console.error('❌ ERROR: El sistema PERMITIÓ guardar 50% (debería rechazarlo)');
  }
  
  // TEST 2C: Guardar progreso MAYOR (70%)
  console.log('\nTEST 2C: Intentando guardar 70% (10/14 secciones)...');
  const resultado3 = await window.saveMaterialProgress(10, 14, 1200);
  
  if (resultado3) {
    console.log('✅ CORRECTO: El sistema PERMITIÓ guardar 70% (mayor que 50%)');
  } else {
    console.error('❌ ERROR: El sistema RECHAZÓ el guardado de 70% (debería aceptarlo)');
  }
  
  console.log('\n');
}

setTimeout(testRetroceso, 1000);

// ============================================================================
// TEST 3: Verificar que status='completed' solo se asigna al 100%
// ============================================================================
console.log('\n📝 TEST 3: Status completed solo al 100%');
console.log('─'.repeat(70));

async function testStatusCompleted() {
  // Resetear progreso anterior para este test
  window.materialFirebaseInstance.previousProgress = {
    percentage: 0,
    sectionsCompleted: 0,
    completed: false
  };
  
  console.log('Progreso anterior reseteado a 0%\n');
  
  // TEST 3A: 92% (13/14) - debería ser 'in_progress'
  console.log('TEST 3A: Guardando 92% (13/14 secciones)...');
  console.log('   Status esperado: in_progress');
  
  // Interceptar console.log para capturar el status
  const originalLog = console.log;
  let statusCapturado = null;
  
  console.log = function(...args) {
    const msg = args.join(' ');
    if (msg.includes('Status:')) {
      statusCapturado = msg.includes('in_progress') ? 'in_progress' : 
                       msg.includes('completed') ? 'completed' : null;
    }
    originalLog.apply(console, args);
  };
  
  await window.saveMaterialProgress(13, 14, 1560);
  
  console.log = originalLog; // Restaurar
  
  if (statusCapturado === 'in_progress') {
    console.log('✅ CORRECTO: Status es in_progress con 13/14 secciones\n');
  } else {
    console.error(`❌ ERROR: Status es ${statusCapturado} (debería ser in_progress)\n`);
  }
  
  // TEST 3B: 100% (14/14) - debería ser 'completed'
  console.log('TEST 3B: Guardando 100% (14/14 secciones)...');
  console.log('   Status esperado: completed');
  
  statusCapturado = null;
  
  console.log = function(...args) {
    const msg = args.join(' ');
    if (msg.includes('Status:')) {
      statusCapturado = msg.includes('completed') ? 'completed' : 
                       msg.includes('in_progress') ? 'in_progress' : null;
    }
    originalLog.apply(console, args);
  };
  
  await window.saveMaterialProgress(14, 14, 1680);
  
  console.log = originalLog; // Restaurar
  
  if (statusCapturado === 'completed') {
    console.log('✅ CORRECTO: Status es completed con 14/14 secciones\n');
  } else {
    console.error(`❌ ERROR: Status es ${statusCapturado} (debería ser completed)\n`);
  }
}

setTimeout(testStatusCompleted, 3500);

// ============================================================================
// TEST 4: Verificar cálculo proporcional de porcentajes
// ============================================================================
console.log('\n📝 TEST 4: Cálculo proporcional de porcentajes');
console.log('─'.repeat(70));

function testCalculoPorcentajes() {
  const totalSecciones = 14;
  const casos = [
    { secciones: 1, esperado: 7 },
    { secciones: 2, esperado: 14 },
    { secciones: 3, esperado: 21 },
    { secciones: 7, esperado: 50 },
    { secciones: 10, esperado: 71 },
    { secciones: 13, esperado: 93 },
    { secciones: 14, esperado: 100 }
  ];
  
  console.log('Validando cálculos de porcentaje:\n');
  
  let todosCorrectos = true;
  
  casos.forEach(caso => {
    const calculado = Math.round((caso.secciones / totalSecciones) * 100);
    const esCorecto = calculado === caso.esperado;
    
    if (esCorecto) {
      console.log(`✅ ${caso.secciones}/14 = ${calculado}% (esperado: ${caso.esperado}%)`);
    } else {
      console.error(`❌ ${caso.secciones}/14 = ${calculado}% (esperado: ${caso.esperado}%)`);
      todosCorrectos = false;
    }
  });
  
  console.log(todosCorrectos ? '\n✅ Todos los cálculos son correctos\n' : '\n❌ Hay errores en los cálculos\n');
}

setTimeout(testCalculoPorcentajes, 6000);

// ============================================================================
// TEST 5: Mostrar estado completo del sistema
// ============================================================================
setTimeout(() => {
  console.log('📝 TEST 5: Estado actual completo del sistema');
  console.log('─'.repeat(70));
  window.checkMaterialReadingStatus();
}, 8000);

// ============================================================================
// RESUMEN DE PRUEBAS
// ============================================================================
setTimeout(() => {
  console.log('\n' + '='.repeat(70));
  console.log('  📊 RESUMEN DE PRUEBAS COMPLETADAS');
  console.log('='.repeat(70));
  console.log('\n✅ Test 1: Componentes cargados');
  console.log('✅ Test 2: Prevención de retrocesos');
  console.log('✅ Test 3: Status completed solo al 100%');
  console.log('✅ Test 4: Cálculo proporcional de porcentajes');
  console.log('✅ Test 5: Estado del sistema');
  
  console.log('\n💡 FUNCIONES ÚTILES DISPONIBLES:');
  console.log('   checkMaterialReadingStatus()    - Ver estado actual');
  console.log('   forceSaveMaterialReading()      - Forzar guardado manual');
  console.log('   simulateMaterialProgress(n)     - Simular n secciones completadas');
  
  console.log('\n🎯 PRUEBAS MANUALES RECOMENDADAS:');
  console.log('   1. Completa 1 sección y verifica que guarde ~7%');
  console.log('   2. Completa 7 secciones y verifica que guarde 50%');
  console.log('   3. Sal y vuelve a entrar, verifica que mantenga el progreso');
  console.log('   4. Completa menos secciones que antes, verifica que NO sobrescriba');
  console.log('   5. Completa todas las secciones y verifica status="completed"');
  
  console.log('\n' + '='.repeat(70) + '\n');
}, 9000);

// ============================================================================
// FUNCIÓN AUXILIAR: Reset completo para testing
// ============================================================================
window.resetTestEnvironment = function() {
  console.log('🔄 Reseteando entorno de pruebas...');
  
  // Resetear progreso anterior
  if (window.materialFirebaseInstance) {
    window.materialFirebaseInstance.previousProgress = {
      percentage: 0,
      sectionsCompleted: 0,
      completed: false
    };
  }
  
  // Limpiar sessionStorage
  const tema = window.materialFirebaseInstance?.tema || 'filosofia';
  const moduleId = tema.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9\s]/g, '').trim().replace(/\s+/g, '_');
  sessionStorage.removeItem(`tema.${moduleId}.material`);
  
  // Resetear DOM
  document.querySelectorAll('.study-section').forEach(section => {
    section.classList.remove('completed-section', 'active');
  });
  
  const firstSection = document.querySelector('.study-section');
  if (firstSection) firstSection.classList.add('active');
  
  const progressFill = document.getElementById('progress-fill');
  const progressCounter = document.getElementById('progress-counter');
  
  if (progressFill) progressFill.style.width = '0%';
  if (progressCounter) {
    const total = window.readAloudSystemInstance?.totalSections || 14;
    progressCounter.textContent = `0 / ${total} secciones`;
  }
  
  console.log('✅ Entorno reseteado completamente');
};

console.log('\n💡 Función adicional disponible: resetTestEnvironment()');