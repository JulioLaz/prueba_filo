/* sound-config.js - Configuración de sonidos para caza de conceptos mejorada
 * Versión: 1.0
 * Compatibilidad: Funciona con sistema existente y nuevo
 */

(function() {
    'use strict';

    // Configuración global de sonidos
    window.ENHANCED_SOUND_CONFIG = {
        // Sonidos existentes (mantener compatibilidad)
        legacy: {
            correct: 'sound/collect_points.mp3',
            wrong: 'sound/negative_beep.mp3',
            levelComplete: 'sound/fin_parrafo.mp3',
            gameComplete: 'sound/fin_caza.mp3'
        },
        
        // Nuevos sonidos para el sistema mejorado
        enhanced: {
            conceptFound: 'sound/concept_found.mp3',
            readingStart: 'sound/reading_start.mp3', 
            readingProgress: 'sound/reading_progress.mp3',
            readingComplete: 'sound/reading_complete.mp3',
            modalOpen: 'sound/modal_open.mp3',
            modalClose: 'sound/modal_close.mp3',
            levelCelebration: 'sound/level_celebration.mp3',
            finalCelebration: 'sound/final_celebration.mp3',
            errorReading: 'sound/error_reading.mp3',
            hintReveal: 'sound/hint_reveal.mp3'
        },
        
        // Configuración de reproducción
        settings: {
            volume: 0.7,
            overlap: false, // No permitir solapamiento de sonidos
            fadeOut: 200,   // Fade out en ms
            preload: true   // Precargar sonidos críticos
        }
    };

    // Sistema de manejo de sonidos mejorado
    class EnhancedSoundManager {
        constructor() {
            this.audioCache = new Map();
            this.currentlyPlaying = new Set();
            this.muted = false;
            this.volume = window.ENHANCED_SOUND_CONFIG.settings.volume;
            
            this.init();
        }

        init() {
            if (window.ENHANCED_SOUND_CONFIG.settings.preload) {
                this.preloadCriticalSounds();
            }
        }

        preloadCriticalSounds() {
            const critical = [
                'enhanced.conceptFound',
                'enhanced.readingComplete', 
                'legacy.correct',
                'legacy.wrong'
            ];

            critical.forEach(soundPath => {
                this.preloadSound(soundPath);
            });
        }

        preloadSound(soundPath) {
            const audioUrl = this.getSoundUrl(soundPath);
            if (!audioUrl) return;

            const audio = new Audio(audioUrl);
            audio.preload = 'auto';
            audio.volume = this.volume;
            this.audioCache.set(soundPath, audio);
        }

        getSoundUrl(soundPath) {
            const [category, name] = soundPath.split('.');
            const config = window.ENHANCED_SOUND_CONFIG[category];
            
            if (!config || !config[name]) {
                console.warn(`[SoundManager] Sonido no encontrado: ${soundPath}`);
                return null;
            }

            return config[name];
        }

        async play(soundPath, options = {}) {
            if (this.muted) return;

            try {
                let audio = this.audioCache.get(soundPath);
                
                if (!audio) {
                    const audioUrl = this.getSoundUrl(soundPath);
                    if (!audioUrl) return;
                    
                    audio = new Audio(audioUrl);
                    audio.volume = options.volume || this.volume;
                    this.audioCache.set(soundPath, audio);
                }

                // Manejar solapamiento
                if (!window.ENHANCED_SOUND_CONFIG.settings.overlap) {
                    if (this.currentlyPlaying.has(soundPath)) {
                        audio.currentTime = 0;
                    }
                }

                this.currentlyPlaying.add(soundPath);
                
                audio.onended = () => {
                    this.currentlyPlaying.delete(soundPath);
                };

                const playPromise = audio.play();
                if (playPromise !== undefined) {
                    await playPromise;
                }

                console.log(`[SoundManager] Reproduciendo: ${soundPath}`);

            } catch (error) {
                console.warn(`[SoundManager] Error reproduciendo ${soundPath}:`, error);
            }
        }

        setMuted(muted) {
            this.muted = muted;
            if (muted) {
                this.stopAll();
            }
        }

        setVolume(volume) {
            this.volume = Math.max(0, Math.min(1, volume));
            this.audioCache.forEach(audio => {
                audio.volume = this.volume;
            });
        }

        stopAll() {
            this.audioCache.forEach(audio => {
                if (!audio.paused) {
                    audio.pause();
                    audio.currentTime = 0;
                }
            });
            this.currentlyPlaying.clear();
        }

        // Métodos de conveniencia para el sistema de caza de conceptos
        playConceptFound() {
            return this.play('enhanced.conceptFound');
        }

        playReadingStart() {
            return this.play('enhanced.readingStart');
        }

        playReadingComplete() {
            return this.play('enhanced.readingComplete');
        }

        playLevelComplete() {
            return this.play('enhanced.levelCelebration');
        }

        playGameComplete() {
            return this.play('enhanced.finalCelebration');
        }

        playError() {
            return this.play('legacy.wrong');
        }

        playSuccess() {
            return this.play('legacy.correct');
        }
    }

    // Crear instancia global para compatibilidad con sistemas existentes
    window.enhancedSoundManager = new EnhancedSoundManager();

    // Función de compatibilidad con el sistema anterior
    window.playEnhancedSound = function(type, options = {}) {
        const soundMap = {
            'correct': 'legacy.correct',
            'wrong': 'legacy.wrong', 
            'concept_found': 'enhanced.conceptFound',
            'reading_start': 'enhanced.readingStart',
            'reading_complete': 'enhanced.readingComplete',
            'level_complete': 'enhanced.levelCelebration',
            'game_complete': 'enhanced.finalCelebration',
            'modal_open': 'enhanced.modalOpen',
            'modal_close': 'enhanced.modalClose'
        };

        const soundPath = soundMap[type];
        if (soundPath) {
            return window.enhancedSoundManager.play(soundPath, options);
        } else {
            console.warn(`[SoundManager] Tipo de sonido no reconocido: ${type}`);
        }
    };

    console.log('[SoundManager] Sistema de sonidos mejorado inicializado');

})();