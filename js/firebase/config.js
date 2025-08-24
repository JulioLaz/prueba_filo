// ========================================
// 🔥 FIREBASE CONFIGURATION
// ========================================




// Import Firebase modules
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js';

// Firebase configuration - REEMPLAZA CON TU CONFIG REAL
const firebaseConfig = {
    apiKey: "AIzaSyA8GSBbszBeBIVG3C56xfC5yao_1m2UPcQ",
    authDomain: "filosofia-quiz-prod.firebaseapp.com",
    projectId: "filosofia-quiz-prod",
    storageBucket: "filosofia-quiz-prod.firebasestorage.app",
    messagingSenderId: "344375832179",
    appId: "1:344375832179:web:db1ea9ab343fd90b0b4406",
    measurementId: "G-GJ1XNPC80C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

// Export app for other uses
export { app };

console.log('🔥 Firebase initialized successfully');