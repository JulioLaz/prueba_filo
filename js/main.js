// ========================================
//  SELECTOR DE TEMAS - CUESTIONARIOS DE FILOSOFÍA
// ========================================
// Este archivo define la lista de temas disponibles en la aplicación.
// Cada objeto en `AVAILABLE_THEMES` representa un tema con su
// configuración básica: id, título, descripción, icono, gradiente de
// color, nivel de dificultad, número de preguntas, tiempo estimado,
// prerrequisitos, color principal y fichero de contenido HTML asociado.

console.log('🔍 Iniciando selector de temas (versión modificada)...');

// Lista de temas disponibles.  Se pueden añadir nuevos temas o
// modificar los existentes.  Para cada tema se debe especificar un
// identificador único (`id`) que coincida con el nombre del archivo
// JavaScript en la carpeta `js/themes`.  La propiedad `contentFile`
// debe apuntar al archivo HTML que contiene el material de estudio.

const AVAILABLE_THEMES = [
    {
        id: 'cassirer',
        title: 'Ernst Cassirer: El ser humano como animal simbólico',
        description: 'Explora la antropología filosófica de Cassirer: el hombre como creador de símbolos, el lenguaje, el arte, el mito y la cultura como mediaciones de nuestra vida humana.',
        icon: '🎭',
        gradient: 'linear-gradient(135deg, #6a85b6 0%, #bac8e0 100%)',
        difficulty: 'basico',
        questions: 10,
        timeEstimate: 10,
        prerequisites: [],
        color: '#6a85b6',
        contentFile: 'content/cassirer.html'
    },
    {
        id: 'sartre',
        title: 'Jean‑Paul Sartre: El ser humano es libertad',
        description: 'Existencialismo: existencia precede a la esencia, libertad ineludible, angustia, desamparo, desesperación, mala fe y autenticidad.',
        icon: '🌀',
        gradient: 'linear-gradient(135deg, #222831 0%, #393e46 50%, #00adb5 100%)',
        // El nivel de dificultad del tema de Sartre es intermedio.  Se
        // actualiza aquí para reflejar la complejidad añadida por los
        // nuevos niveles (caza de conceptos, síntesis y mapa conceptual).
        difficulty: 'intermedio',
        // Este tema utiliza 10 preguntas en el cuestionario final.
        questions: 10,
        // El tiempo estimado total incluye los niveles previos al quiz.
        timeEstimate: 12,
        // No hay prerrequisitos específicos para el tema de Sartre en
        // esta versión, aunque podrían añadirse como ['antropologia_filosofica'].
        prerequisites: [],
        color: '#00adb5',
        contentFile: 'content/sartre.html'
    },
    {
        id: 'etica',
        title: 'Ética y Moral',
        description: 'Explora dilemas morales, libertad, responsabilidad y los grandes debates sobre cómo debemos actuar.',
        icon: '⚖️',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        difficulty: 'basico',
        questions: 10,
        timeEstimate: 8,
        prerequisites: [],
        color: '#667eea',
        contentFile: 'content/etica.html'
    },
    {
        id: 'aristoteles',
        title: 'Aristóteles: Lo Bueno es la Felicidad',
        description: 'Descubre la ética aristotélica: la felicidad como fin último, la virtud como término medio y la vida contemplativa.',
        icon: '🏛️',
        gradient: 'linear-gradient(135deg, #d4af37 0%, #ffd700 100%)',
        difficulty: 'basico',
        questions: 12,
        timeEstimate: 10,
        prerequisites: ['etica'],
        color: '#d4af37',
        contentFile: 'content/aristoteles.html'
    }
    // Otros temas podrían añadirse aquí siguiendo el mismo esquema.
];

// Función para renderizar la lista de temas en la página de inicio.
// En esta versión simplificada, simplemente imprimimos la lista por consola.
function renderThemeList() {
    console.log('📚 Temas disponibles:');
    AVAILABLE_THEMES.forEach(theme => {
        console.log(` • ${theme.title} [${theme.difficulty}]`);
    });
}

renderThemeList();