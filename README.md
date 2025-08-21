# 🧠 Cuestionarios de Filosofía - Sistema Modular

Una aplicación web interactiva para evaluar conocimientos sobre diferentes temas de filosofía, con sistema modular escalable.

## 🚀 Ver la aplicación

**[🔗 Abrir Cuestionarios](https://tu-usuario.github.io/cuestionarios-filosofia/)**

## 📱 Características principales

- ✅ **Sistema modular** - Fácil agregar nuevos temas de filosofía
- ✅ **Selector de temas** - Interfaz intuitiva para elegir tema de estudio
- ✅ **Diseño responsive** - Funciona perfectamente en móviles y desktop
- ⏱️ **Timer dinámico** - 30 segundos por pregunta con alertas visuales
- 💡 **Sistema de pistas** - Ayuda contextual antes de cada pregunta
- 📚 **Material integrado** - Acceso completo al contenido teórico
- 🎯 **Estadísticas detalladas** - Progreso guardado y análisis de rendimiento
- 🔄 **Preguntas aleatorias** - Respuestas mezcladas en cada intento
- 🔒 **Sistema de prerrequisitos** - Temas que se desbloquean progresivamente
- 📊 **Revisión de respuestas** - Explicaciones detalladas post-cuestionario

## 🎮 Cómo usar

1. **Selecciona un tema** desde la pantalla principal
2. **Lee la pista** de cada pregunta para contextualizar
3. **Responde en 30 segundos** - El timer te alertará cuando quede poco tiempo
4. **Consulta el material** cuando necesites repasar conceptos
5. **Revisa tus respuestas** al final para entender los errores
6. **Desbloquea nuevos temas** completando los prerrequisitos

## 📊 Temas disponibles

### 🧭 **Ética y Moral** (Básico) ✅
- **10 preguntas** - 8 minutos estimados
- Dilemas morales, libertad, responsabilidad
- Sartre, Skinner, Fromm
- **Prerrequisitos:** Ninguno

### 🔍 **Conocimiento y Verdad** (Intermedio) 🚧
- **12 preguntas** - 10 minutos estimados  
- Epistemología, límites del conocimiento
- **Prerrequisitos:** Ninguno

### 🧠 **Lógica y Argumentación** (Intermedio) 🚧
- **15 preguntas** - 12 minutos estimados
- Razonamiento válido, falacias lógicas
- **Prerrequisitos:** Ética y Moral

### 🌌 **Realidad y Existencia** (Avanzado) 🚧
- **18 preguntas** - 15 minutos estimados
- Metafísica, naturaleza del ser
- **Prerrequisitos:** Conocimiento y Verdad

### 🎨 **Belleza y Arte** (Intermedio) 🚧
- **10 preguntas** - 8 minutos estimados
- Estética, experiencia artística
- **Prerrequisitos:** Ética y Moral

### 🏛️ **Poder y Sociedad** (Avanzado) 🚧
- **20 preguntas** - 18 minutos estimados
- Filosofía política, justicia, derechos
- **Prerrequisitos:** Ética y Moral, Lógica

**Leyenda:** ✅ Completo | 🚧 En desarrollo

## 📁 Estructura del proyecto

```
cuestionarios-filosofia/
├── index.html                    # 🏠 Selector de temas
├── quiz.html                     # 🎮 Motor del cuestionario
├── css/
│   ├── main.css                  # 🎨 Estilos del selector
│   └── quiz.css                  # 🎨 Estilos del cuestionario
├── js/
│   ├── main.js                   # 🎯 Lógica del selector de temas
│   ├── quiz-engine.js            # ⚙️ Motor reutilizable del cuestionario
│   └── themes/
│       ├── etica.js              # 🧭 Tema completo: Ética y Moral
│       ├── epistemologia.js      # 🔍 [Por crear]
│       ├── logica.js             # 🧠 [Por crear]
│       ├── metafisica.js         # 🌌 [Por crear]
│       ├── estetica.js           # 🎨 [Por crear]
│       └── filosofia-politica.js # 🏛️ [Por crear]
├── content/
│   ├── etica.html                # 📚 Material: Ética y Moral
│   ├── epistemologia.html        # 📚 [Por crear]
│   ├── logica.html               # 📚 [Por crear]
│   ├── metafisica.html           # 📚 [Por crear]
│   ├── estetica.html             # 📚 [Por crear]
│   └── filosofia-politica.html   # 📚 [Por crear]
└── README.md                     # 📖 Documentación
```

## 🔧 Cómo agregar un nuevo tema

### 1. **Crear archivo de preguntas** (`js/themes/nombre-tema.js`)

```javascript
const NOMBRE_TEMA_THEME = {
    id: 'nombre-tema',
    title: '🔥 Título del Tema',
    description: 'Descripción del tema...',
    icon: '🔥',
    gradient: 'linear-gradient(135deg, #color1, #color2)',
    difficulty: 'basico', // basico | intermedio | avanzado
    timeLimit: 30,
    contentFile: 'content/nombre-tema.html',
    
    questions: [
        {
            id: 'tema_001',
            question: "¿Pregunta del tema?",
            answers: [
                { text: "Opción 1", correct: false, explanation: "Explicación..." },
                { text: "Opción 2", correct: true, explanation: "Explicación..." },
                { text: "Opción 3", correct: false, explanation: "Explicación..." },
                { text: "Opción 4", correct: false, explanation: "Explicación..." },
                { text: "Opción 5", correct: false, explanation: "Explicación..." }
            ],
            hint: "Pista para la pregunta...",
            difficulty: 'basico',
            topic: 'Subtema'
        }
        // ... más preguntas
    ]
};

// Exportar tema
if (typeof window !== 'undefined') {
    window.NOMBRE_TEMA_THEME = NOMBRE_TEMA_THEME;
}
```

### 2. **Crear material de estudio** (`content/nombre-tema.html`)

```html
<h2>🔥 Título del Tema</h2>

<h3>📖 Introducción</h3>
<p>Contenido teórico...</p>

<div class="highlight-box">
    <h4>💡 Concepto clave</h4>
    <p>Explicación importante...</p>
</div>

<!-- Más contenido estructurado -->
```

### 3. **Registrar en selector** (`js/main.js`)

Agregar entrada en `AVAILABLE_THEMES`:

```javascript
{
    id: 'nombre-tema',
    title: '🔥 Título del Tema',
    description: 'Descripción...',
    icon: '🔥',
    gradient: 'linear-gradient(135deg, #color1, #color2)',
    difficulty: 'basico',
    questions: 10,
    timeEstimate: 8,
    prerequisites: [], // ['tema-requerido']
    color: '#color1',
    contentFile: 'content/nombre-tema.html'
}
```

## 🏗️ Tecnologías utilizadas

- **HTML5** - Estructura semántica y accesible
- **CSS3** - Diseño moderno con gradientes, animaciones y glassmorphism
- **JavaScript ES6+** - Lógica modular con async/await y módulos
- **LocalStorage** - Persistencia de progreso del usuario
- **GitHub Pages** - Hosting gratuito y confiable

## 🎯 Arquitectura del sistema

### **Flujo de navegación:**
```
🏠 index.html (Selector)
    ↓ Usuario selecciona tema
🎯 quiz.html?theme=etica
    ↓ Motor carga dinámicamente:
       • js/themes/etica.js (preguntas)
       • content/etica.html (material)
    ↓ Sistema de fases:
💡 Pista → 📝 Pregunta → 🏆 Resultado
    ↓ Al completar:
📊 Estadísticas + Navegación
```

### **Características técnicas:**
- **Carga dinámica** - Solo carga el tema seleccionado
- **Validación automática** - Verifica estructura de preguntas
- **Logging profesional** - Medición de tiempos y debugging
- **Error handling** - Manejo robusto de errores de carga
- **Progressive Enhancement** - Funciona sin JavaScript básico

## 📱 Optimizado para móviles

- **Viewport responsive** - Se adapta a cualquier pantalla
- **Touch-friendly** - Botones optimizados para dedos
- **Offline-ready** - Funciona sin conexión después de la primera carga
- **PWA-ready** - Se puede instalar como app nativa
- **Performance** - Carga rápida con lazy loading

## 🎨 Sistema de diseño

- **Dark theme** moderno con acentos de color
- **Gradientes dinámicos** específicos por tema
- **Animaciones fluidas** para mejor UX
- **Iconos emoji** para fácil comprensión
- **Efectos glassmorphism** para estética moderna
- **Estados visuales** claros (hover, focus, active)

## 🔧 Desarrollo local

### **Servidor simple con Python:**
```bash
python -m http.server 8000
# Abrir: http://localhost:8000
```

### **Servidor con Node.js:**
```bash
npx http-server
# Abrir: http://localhost:8080
```

### **VS Code Live Server:**
1. Instalar extensión "Live Server"
2. Click derecho en `index.html`
3. "Open with Live Server"

## 📊 Ejemplo de datos guardados

```javascript
// localStorage: 'filosofia-quiz-progress'
{
    "completedThemes": {
        "etica": {
            "score": 85,
            "attempts": 2,
            "bestScore": 90,
            "lastAttempt": "2024-08-20T15:30:00.000Z",
            "timeSpent": 420000
        }
    },
    "totalTime": 420000,
    "lastVisit": "2024-08-20T15:30:00.000Z"
}
```

## 🤝 Contribuir

1. **Fork** el repositorio
2. **Crea** un nuevo tema siguiendo la estructura
3. **Testa** localmente que funcione correctamente
4. **Envía** pull request con descripción detallada

### **Estándares de calidad:**
- ✅ 10+ preguntas por tema con explicaciones
- ✅ Material de estudio completo y estructurado
- ✅ Preguntas validadas (exactamente 5 opciones, 1 correcta)
- ✅ Logging con `console.log` para debugging
- ✅ Comentarios descriptivos en el código

## 📜 Licencia

Este proyecto está bajo licencia MIT. Siéntete libre de usarlo, modificarlo y distribuirlo.

---

**Desarrollado con ❤️ para el aprendizaje de la filosofía**

🎓 *"La filosofía comienza con el asombro"* - Aristóteles├── index.html      # Página principal
├── style.css       # Estilos CSS
├── script.js       # Lógica JavaScript
├── txt.html        # Material de estudio
└── README.md       # Documentación
```

## 🎯 Contenido académico

Basado en la **Unidad III: Ética** que incluye:

- **Dilemas morales** - El caso de Juan y la toma de decisiones éticas
- **Libertad y responsabilidad** - Diferencia entre actos humanos y fenómenos naturales
- **Filosofías de la libertad** - Sartre, Skinner y Fromm
- **Problemas éticos cotidianos** - Abuso de poder, nepotismo, soborno, etc.
- **Principios éticos básicos** - Honestidad, integridad, compromiso, etc.

## 🔧 Desarrollo local

Para ejecutar localmente:

```bash
# Opción 1: Python
python -m http.server 8000

# Opción 2: Node.js
npx http-server

# Opción 3: VS Code Live Server
# Instalar extensión "Live Server" y hacer clic derecho > "Open with Live Server"
```

## 📱 Optimizado para móviles

- **Viewport responsive**
- **Botones táctiles grandes**
- **Texto legible en pantallas pequeñas**
- **Navegación intuitiva**
- **Carga rápida**

## 🎨 Diseño

- **Gradientes modernos** con colores azul y púrpura
- **Animaciones suaves** para mejor UX
- **Iconos emoji** para fácil comprensión
- **Contraste accesible** para buena legibilidad
- **Efectos glassmorphism** para estética moderna

---

**Desarrollado con ❤️ para el aprendizaje de la filosofía**