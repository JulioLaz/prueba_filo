// quiz-engine.js - Versión integrada con Firebase
class QuizEngine {
    constructor() {
        this.currentQuestionIndex = 0;
        this.answers = [];
        this.questions = [];
        this.userId = null;
        this.startTime = null;
        
        // Inicializar Firebase
        this.initFirebase();
        
        // Generar ID único para el usuario
        this.userId = this.generateUserId();
    }

    async initFirebase() {
        try {
            // Configuración de Firebase (reemplaza con tus credenciales)
            const firebaseConfig = {
                apiKey: "tu-api-key",
                authDomain: "tu-proyecto.firebaseapp.com",
                databaseURL: "https://tu-proyecto-default-rtdb.firebaseio.com",
                projectId: "tu-proyecto",
                storageBucket: "tu-proyecto.appspot.com",
                messagingSenderId: "123456789",
                appId: "tu-app-id"
            };

            // Inicializar Firebase
            if (!window.firebase?.apps?.length) {
                firebase.initializeApp(firebaseConfig);
            }
            
            this.database = firebase.database();
            console.log('Firebase inicializado correctamente');
        } catch (error) {
            console.error('Error inicializando Firebase:', error);
        }
    }

    generateUserId() {
        return 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    loadQuestions(questionsData) {
        this.questions = questionsData;
        this.currentQuestionIndex = 0;
        this.answers = [];
        this.startTime = new Date().toISOString();
    }

    getCurrentQuestion() {
        return this.questions[this.currentQuestionIndex];
    }

    async saveAnswer(questionId, selectedOption, optionText) {
        const answer = {
            questionId: questionId,
            selectedOption: selectedOption,
            optionText: optionText,
            timestamp: new Date().toISOString(),
            questionIndex: this.currentQuestionIndex
        };

        this.answers.push(answer);

        // Guardar respuesta individual en Firebase
        try {
            await this.saveAnswerToFirebase(answer);
            console.log('Respuesta guardada en Firebase:', answer);
        } catch (error) {
            console.error('Error guardando respuesta:', error);
        }
    }

    async saveAnswerToFirebase(answer) {
        if (!this.database) {
            throw new Error('Firebase no está inicializado');
        }

        const answerRef = this.database.ref(`quiz_responses/${this.userId}/answers`).push();
        await answerRef.set({
            ...answer,
            userId: this.userId
        });
    }

    async nextQuestion() {
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            return this.getCurrentQuestion();
        } else {
            // Quiz completado, guardar resultados finales
            await this.completeQuiz();
            return null;
        }
    }

    async completeQuiz() {
        const endTime = new Date().toISOString();
        const quizResult = {
            userId: this.userId,
            startTime: this.startTime,
            endTime: endTime,
            totalQuestions: this.questions.length,
            answersCount: this.answers.length,
            completed: true,
            answers: this.answers,
            duration: this.calculateDuration(),
            completedAt: firebase.database.ServerValue.TIMESTAMP
        };

        try {
            // Guardar resultado completo del quiz
            await this.database.ref(`quiz_results/${this.userId}`).set(quizResult);
            
            // También guardar en la colección general de sesiones
            await this.database.ref(`quiz_sessions`).push({
                userId: this.userId,
                completedAt: firebase.database.ServerValue.TIMESTAMP,
                duration: quizResult.duration,
                totalQuestions: this.questions.length,
                status: 'completed'
            });

            console.log('Quiz completado y guardado en Firebase:', quizResult);
            return quizResult;
        } catch (error) {
            console.error('Error guardando resultado del quiz:', error);
            throw error;
        }
    }

    calculateDuration() {
        if (!this.startTime) return 0;
        const start = new Date(this.startTime);
        const end = new Date();
        return Math.round((end - start) / 1000); // duración en segundos
    }

    // Método para obtener estadísticas del usuario
    async getUserStats() {
        try {
            const snapshot = await this.database.ref(`quiz_results/${this.userId}`).once('value');
            return snapshot.val();
        } catch (error) {
            console.error('Error obteniendo estadísticas:', error);
            return null;
        }
    }

    // Método para reiniciar el quiz
    resetQuiz() {
        this.currentQuestionIndex = 0;
        this.answers = [];
        this.startTime = new Date().toISOString();
        this.userId = this.generateUserId(); // Nuevo ID para nueva sesión
    }

    // Método para obtener el progreso actual
    getProgress() {
        return {
            current: this.currentQuestionIndex + 1,
            total: this.questions.length,
            percentage: Math.round(((this.currentQuestionIndex + 1) / this.questions.length) * 100)
        };
    }

    // Método para ir a pregunta anterior
    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            // Remover la última respuesta si existe
            this.answers.pop();
            return this.getCurrentQuestion();
        }
        return null;
    }

    // Método para obtener todas las respuestas
    getAllAnswers() {
        return [...this.answers];
    }

    // Método para verificar si el quiz está completado
    isCompleted() {
        return this.currentQuestionIndex >= this.questions.length;
    }
}

// Uso del QuizEngine actualizado
class QuizApp {
    constructor() {
        this.quizEngine = new QuizEngine();
        this.currentQuestionElement = document.getElementById('current-question');
        this.optionsContainer = document.getElementById('options-container');
        this.progressElement = document.getElementById('progress');
        this.nextButton = document.getElementById('next-btn');
        this.prevButton = document.getElementById('prev-btn');
        
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.nextButton?.addEventListener('click', () => this.handleNext());
        this.prevButton?.addEventListener('click', () => this.handlePrevious());
    }

    async loadQuiz(questionsData) {
        this.quizEngine.loadQuestions(questionsData);
        await this.displayCurrentQuestion();
    }

    async displayCurrentQuestion() {
        const question = this.quizEngine.getCurrentQuestion();
        if (!question) {
            await this.showResults();
            return;
        }

        // Mostrar pregunta
        if (this.currentQuestionElement) {
            this.currentQuestionElement.textContent = question.question;
        }

        // Mostrar opciones
        if (this.optionsContainer) {
            this.optionsContainer.innerHTML = '';
            question.options.forEach((option, index) => {
                const optionElement = document.createElement('div');
                optionElement.className = 'quiz-option';
                optionElement.innerHTML = `
                    <input type="radio" id="option-${index}" name="quiz-option" value="${index}">
                    <label for="option-${index}">${option}</label>
                `;
                optionElement.addEventListener('click', () => this.selectOption(index, option));
                this.optionsContainer.appendChild(optionElement);
            });
        }

        // Actualizar progreso
        this.updateProgress();
    }

    selectOption(optionIndex, optionText) {
        // Marcar opción seleccionada visualmente
        document.querySelectorAll('.quiz-option').forEach(el => el.classList.remove('selected'));
        document.getElementById(`option-${optionIndex}`).parentElement.classList.add('selected');
        document.getElementById(`option-${optionIndex}`).checked = true;

        this.selectedOption = { index: optionIndex, text: optionText };
    }

    async handleNext() {
        if (!this.selectedOption) {
            alert('Por favor selecciona una opción');
            return;
        }

        const question = this.quizEngine.getCurrentQuestion();
        
        // Guardar respuesta
        await this.quizEngine.saveAnswer(
            question.id, 
            this.selectedOption.index, 
            this.selectedOption.text
        );

        // Ir a siguiente pregunta
        const nextQuestion = await this.quizEngine.nextQuestion();
        this.selectedOption = null;

        if (nextQuestion) {
            await this.displayCurrentQuestion();
        } else {
            await this.showResults();
        }
    }

    async handlePrevious() {
        const prevQuestion = this.quizEngine.previousQuestion();
        if (prevQuestion) {
            this.selectedOption = null;
            await this.displayCurrentQuestion();
        }
    }

    updateProgress() {
        const progress = this.quizEngine.getProgress();
        if (this.progressElement) {
            this.progressElement.textContent = `Pregunta ${progress.current} de ${progress.total}`;
        }

        // Actualizar barra de progreso si existe
        const progressBar = document.getElementById('progress-bar');
        if (progressBar) {
            progressBar.style.width = `${progress.percentage}%`;
        }
    }

    async showResults() {
        const results = await this.quizEngine.getUserStats();
        
        // Mostrar resultados en la UI
        if (this.currentQuestionElement) {
            this.currentQuestionElement.innerHTML = `
                <h2>¡Quiz Completado!</h2>
                <p>Gracias por completar el cuestionario.</p>
                <p>Respondiste ${results.answersCount} de ${results.totalQuestions} preguntas.</p>
                <p>Duración: ${Math.round(results.duration / 60)} minutos.</p>
                <button onclick="quizApp.restartQuiz()">Reiniciar Quiz</button>
            `;
        }

        if (this.optionsContainer) {
            this.optionsContainer.innerHTML = '';
        }

        // Ocultar botones de navegación
        if (this.nextButton) this.nextButton.style.display = 'none';
        if (this.prevButton) this.prevButton.style.display = 'none';
    }

    async restartQuiz() {
        this.quizEngine.resetQuiz();
        if (this.nextButton) this.nextButton.style.display = 'block';
        if (this.prevButton) this.prevButton.style.display = 'block';
        // Cargar preguntas de nuevo si es necesario
        // await this.loadQuiz(questionsData);
    }
}

// Inicialización global
let quizApp;

// Función para inicializar la aplicación
function initQuizApp() {
    quizApp = new QuizApp();
}

// Función de ejemplo para cargar preguntas
async function loadSampleQuiz() {
    const sampleQuestions = [
        {
            id: 'q1',
            question: '¿Cuál es tu color favorito?',
            options: ['Rojo', 'Azul', 'Verde', 'Amarillo']
        },
        {
            id: 'q2',
            question: '¿Cuál es tu comida favorita?',
            options: ['Pizza', 'Hamburguesa', 'Sushi', 'Tacos']
        },
        {
            id: 'q3',
            question: '¿Cuál es tu hobby favorito?',
            options: ['Leer', 'Deportes', 'Música', 'Viajar']
        }
    ];

    await quizApp.loadQuiz(sampleQuestions);
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    initQuizApp();
});

// CSS para estilos del quiz
const quizStyles = `
<style>
.quiz-option {
    padding: 10px;
    margin: 5px 0;
    border: 2px solid #ddd;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.quiz-option:hover {
    background-color: #f5f5f5;
    border-color: #007bff;
}

.quiz-option.selected {
    background-color: #007bff;
    color: white;
    border-color: #0056b3;
}

.quiz-option input[type="radio"] {
    margin-right: 10px;
}

#progress-bar {
    height: 20px;
    background-color: #007bff;
    border-radius: 10px;
    transition: width 0.3s ease;
}

.progress-container {
    width: 100%;
    background-color: #ddd;
    border-radius: 10px;
    margin: 20px 0;
}

.quiz-buttons {
    margin-top: 20px;
}

.quiz-buttons button {
    padding: 10px 20px;
    margin: 0 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
}

.quiz-buttons button:hover {
    background-color: #0056b3;
}

.quiz-buttons button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}
</style>
`;

// Agregar estilos al documento
document.head.insertAdjacentHTML('beforeend', quizStyles);