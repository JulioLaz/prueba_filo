/* system-validator.js - Validador del sistema integrado
 * Versión: 1.0
 * Valida la correcta carga e integración de todos los componentes
 */

(function() {
    'use strict';

    class SystemValidator {
        constructor() {
            this.results = {
                passed: 0,
                failed: 0,
                warnings: 0,
                tests: []
            };
            
            this.requiredComponents = [
                'window.CONCEPT_HUNT_CONFIG',
                'window.ReadAloudSystemModular', 
                'window.ReadAloudModalSystem',
                'document.getElementById("meaning-sheet")',
                'document.getElementById("paragraph")',
                'SpeechRecognition || webkitSpeechRecognition'
            ];

            this.optionalComponents = [
                'window.enhancedSoundManager',
                'window.ENHANCED_SOUND_CONFIG',
                'window.playEnhancedSound'
            ];
        }

        runAllTests() {
            console.log('🔍 Iniciando validación del sistema...');
            
            this.testRequiredComponents();
            this.testConfiguration();
            this.testDOM();
            this.testReadAloudIntegration();
            this.testSoundSystem();
            this.testBrowserSupport();
            
            this.printResults();
            return this.results;
        }

        test(name, condition, isWarning = false) {
            const result = {
                name,
                passed: !!condition,
                isWarning,
                timestamp: new Date().toISOString()
            };
            
            this.results.tests.push(result);
            
            if (result.passed) {
                this.results.passed++;
                console.log(`✅ ${name}`);
            } else {
                if (isWarning) {
                    this.results.warnings++;
                    console.warn(`⚠️ ${name}`);
                } else {
                    this.results.failed++;
                    console.error(`❌ ${name}`);
                }
            }
            
            return result.passed;
        }

        testRequiredComponents() {
            console.log('\n📋 Testando componentes requeridos...');
            
            this.test(
                'Configuración CONCEPT_HUNT_CONFIG cargada',
                window.CONCEPT_HUNT_CONFIG && Array.isArray(window.CONCEPT_HUNT_CONFIG.levels)
            );

            this.test(
                'Sistema ReadAloud base disponible', 
                typeof window.ReadAloudSystemModular === 'function'
            );

            this.test(
                'Sistema ReadAloud modal disponible',
                typeof window.ReadAloudModalSystem === 'function'
            );

            const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.test(
                'SpeechRecognition API soportada',
                !!speechRecognition
            );

            this.test(
                'Audio API soportada',
                typeof Audio === 'function'
            );
        }

        testConfiguration() {
            console.log('\n⚙️ Testando configuración...');
            
            if (window.CONCEPT_HUNT_CONFIG) {
                const config = window.CONCEPT_HUNT_CONFIG;
                
                this.test(
                    'Configuración tiene autor definido',
                    typeof config.author === 'string' && config.author.length > 0
                );

                this.test(
                    'Configuración tiene niveles válidos',
                    Array.isArray(config.levels) && config.levels.length > 0
                );

                let totalConcepts = 0;
                let hasValidConcepts = true;

                config.levels.forEach((level, index) => {
                    const levelValid = level.html && level.concepts && Array.isArray(level.concepts);
                    if (!levelValid) hasValidConcepts = false;
                    
                    if (level.concepts) {
                        totalConcepts += level.concepts.length;
                        
                        level.concepts.forEach(concept => {
                            if (!concept.term || !concept.meaning) {
                                hasValidConcepts = false;
                            }
                        });
                    }
                });

                this.test(
                    'Todos los niveles tienen estructura válida',
                    hasValidConcepts
                );

                this.test(
                    'Configuración tiene conceptos suficientes',
                    totalConcepts >= 10,
                    true // warning si menos de 10
                );

                console.log(`📊 Total de conceptos en configuración: ${totalConcepts}`);
            }
        }

        testDOM() {
            console.log('\n🏗️ Testando elementos DOM...');
            
            const requiredElements = [
                'paragraph',
                'meaning-sheet', 
                'meaning-title',
                'meaning-body',
                'close-meaning',
                'progress-fill',
                'remaining',
                'streak'
            ];

            requiredElements.forEach(id => {
                this.test(
                    `Elemento #${id} existe en DOM`,
                    !!document.getElementById(id)
                );
            });

            const meaningSheet = document.getElementById('meaning-sheet');
            if (meaningSheet) {
                this.test(
                    'Modal tiene estructura correcta',
                    meaningSheet.querySelector('#meaning-title') && 
                    meaningSheet.querySelector('#meaning-body') &&
                    meaningSheet.querySelector('#close-meaning')
                );
            }
        }

        testReadAloudIntegration() {
            console.log('\n🎤 Testando integración ReadAloud...');
            
            this.test(
                'ReadAloudModalSystem puede instanciarse',
                () => {
                    try {
                        if (!window.ReadAloudModalSystem) return false;
                        
                        const mockElement = document.createElement('div');
                        const mockConcept = { term: 'test', meaning: 'test meaning' };
                        const instance = new window.ReadAloudModalSystem(mockElement, mockConcept);
                        return !!instance;
                    } catch (e) {
                        console.error('Error creando instancia ReadAloudModal:', e);
                        return false;
                    }
                }()
            );

            this.test(
                'Configuración ReadAloud es válida',
                () => {
                    if (!window.ReadAloudModalSystem) return false;
                    
                    // Verificar que la clase tiene los métodos esperados
                    const proto = window.ReadAloudModalSystem.prototype;
                    return typeof proto.init === 'function' &&
                           typeof proto.setupModalContent === 'function' &&
                           typeof proto.onReadingComplete === 'function';
                }
            );
        }

        testSoundSystem() {
            console.log('\n🔊 Testando sistema de sonidos...');
            
            this.test(
                'Configuración de sonidos disponible',
                !!window.ENHANCED_SOUND_CONFIG,
                true // warning
            );

            this.test(
                'Manager de sonidos disponible',
                !!window.enhancedSoundManager,
                true // warning
            );

            if (window.enhancedSoundManager) {
                this.test(
                    'Manager de sonidos funcional',
                    typeof window.enhancedSoundManager.play === 'function' &&
                    typeof window.enhancedSoundManager.setMuted === 'function'
                );
            }

            // Test básico de reproducción de audio
            this.test(
                'Audio puede reproducirse (básico)',
                () => {
                    try {
                        const audio = new Audio();
                        audio.src = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+LvwGIhBC2I0+/TcyEBJHfP8N6NPQULPWyu7apV'; // Sonido silent
                        return true;
                    } catch (e) {
                        return false;
                    }
                }(),
                true // warning
            );
        }

        testBrowserSupport() {
            console.log('\n🌐 Testando soporte del navegador...');
            
            this.test(
                'ES6 Classes soportadas',
                typeof class {} === 'function'
            );

            this.test(
                'Promise API soportada',
                typeof Promise === 'function'
            );

            this.test(
                'Fetch API soportada',
                typeof fetch === 'function',
                true // warning
            );

            this.test(
                'LocalStorage disponible',
                () => {
                    try {
                        localStorage.setItem('test', 'test');
                        localStorage.removeItem('test');
                        return true;
                    } catch (e) {
                        return false;
                    }
                }(),
                true // warning
            );

            this.test(
                'CSS Custom Properties soportadas',
                CSS && CSS.supports && CSS.supports('color', 'var(--test)'),
                true // warning
            );

            // Detectar dispositivo móvil
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            console.log(`📱 Dispositivo móvil detectado: ${isMobile ? 'Sí' : 'No'}`);

            this.test(
                'Touch events soportados',
                'ontouchstart' in window,
                true // warning solo en móviles
            );
        }

        printResults() {
            console.log('\n📊 Resultados de validación:');
            console.log(`✅ Exitosos: ${this.results.passed}`);
            console.log(`❌ Fallidos: ${this.results.failed}`);
            console.log(`⚠️ Advertencias: ${this.results.warnings}`);
            
            const total = this.results.passed + this.results.failed + this.results.warnings;
            const successRate = Math.round((this.results.passed / total) * 100);
            
            console.log(`📈 Tasa de éxito: ${successRate}%`);
            
            if (this.results.failed === 0) {
                console.log('🎉 Sistema listo para uso!');
            } else if (this.results.failed <= 2) {
                console.log('⚠️ Sistema funcional con limitaciones menores');
            } else {
                console.log('🚨 Sistema requiere correcciones antes del uso');
            }

            // Recommendations
            this.printRecommendations();
        }

        printRecommendations() {
            const failedTests = this.results.tests.filter(t => !t.passed && !t.isWarning);
            const warningTests = this.results.tests.filter(t => !t.passed && t.isWarning);

            if (failedTests.length > 0) {
                console.log('\n🔧 Correcciones requeridas:');
                failedTests.forEach(test => {
                    console.log(`- ${test.name}`);
                });
            }

            if (warningTests.length > 0) {
                console.log('\n💡 Mejoras recomendadas:');
                warningTests.forEach(test => {
                    console.log(`- ${test.name}`);
                });
            }

            console.log('\n📚 Para más ayuda, revisa la documentación del sistema.');
        }

        // Método para exportar resultados
        exportResults() {
            return {
                ...this.results,
                timestamp: new Date().toISOString(),
                userAgent: navigator.userAgent,
                url: window.location.href
            };
        }
    }

    // Crear instancia global
    window.SystemValidator = SystemValidator;

    // Auto-ejecutar validación si está en modo desarrollo
    if (window.location.search.includes('validate=true') || 
        window.location.search.includes('debug=true')) {
        
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => {
                const validator = new SystemValidator();
                const results = validator.runAllTests();
                
                // Guardar resultados para debugging
                window.lastValidationResults = results;
            }, 1000); // Esperar a que se carguen todos los scripts
        });
    }

    console.log('🔍 Validador del sistema cargado. Usar: new SystemValidator().runAllTests()');

})();