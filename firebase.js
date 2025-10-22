// /prueba_filo/firebase.js - VERSIÓN MEJORADA CON EXPORTS
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getAuth, onAuthStateChanged, signInWithEmailAndPassword,
  createUserWithEmailAndPassword, signOut, updateProfile
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import {
  getFirestore, doc, setDoc, getDoc, updateDoc, serverTimestamp,
  collection, query, where, orderBy, limit, getDocs
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA8GSBbszBeBIVG3C56xfC5yao_1m2UPcQ",
  authDomain: "filosofia-quiz-prod.firebaseapp.com",
  databaseURL: "https://filosofia-quiz-prod-default-rtdb.firebaseio.com",
  projectId: "filosofia-quiz-prod",
  storageBucket: "filosofia-quiz-prod.firebasestorage.app",
  messagingSenderId: "344375832179",
  appId: "1:344375832179:web:db1ea9ab343fd90b0b4406",
  measurementId: "G-GJ1XNPC80C"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// ✅ EXPORTAR FUNCIONES DE FIRESTORE PARA USAR EN OTROS MÓDULOS
export { doc, getDoc, setDoc, updateDoc, serverTimestamp, collection, query, where, orderBy, limit, getDocs, onAuthStateChanged };

// ====================================
// CONFIGURACIÓN ADMINISTRATIVA
// ====================================
const ADMIN_EMAIL = "julioalbertolazarte00@gmail.com";
const CURSO_DEFAULT = "6to A";

// ====================================
// UTILIDADES
// ====================================
function getInitialsFrom(user) {
  const base = (user?.displayName || user?.email || "").trim();
  if (!base) return "😊";
  const parts = base.includes("@") ? [base.split("@")[0]] : base.split(/\s+/);
  const letters = parts.flatMap(p => p.slice(0,1)).slice(0,2);
  return letters.join("").toUpperCase() || "😊";
}

function calculateAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return age;
}

function isValidAge(age) {
  return age >= 12 && age <= 25;
}

// ====================================
// RENDERIZADO DE AVATAR
// ====================================
async function renderHeaderAvatar(user) {
  const avatarEl = document.querySelector("#userAvatar");
  if (!avatarEl) return;

  try {
    const ref = doc(db, "users", user.uid);
    const snap = await getDoc(ref);
    const data = snap.data() || {};

    if (data.avatarType === "emoji" && data.avatarValue) {
      avatarEl.textContent = data.avatarValue;
      avatarEl.className = "avatar emoji";
    } else {
      avatarEl.textContent = getInitialsFrom(user);
      avatarEl.className = "avatar initials";
    }
  } catch {
    avatarEl.textContent = getInitialsFrom(user);
    avatarEl.className = "avatar initials";
  }
}

// ====================================
// CREACIÓN/ACTUALIZACIÓN DE PERFIL DE USUARIO
// ====================================
async function ensureUserDoc(user, profileData = {}) {
  console.log(`📝 Verificando perfil de usuario: ${user.uid}`);
  
  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);
  
  const now = serverTimestamp();
  const isAdmin = user.email === ADMIN_EMAIL;
  
  if (!userSnap.exists()) {
    const newUserData = {
      email: user.email,
      displayName: user.displayName || "",
      nombres: profileData.nombres || "",
      apellidos: profileData.apellidos || "",
      fechaNacimiento: profileData.fechaNacimiento || null,
      edad: profileData.fechaNacimiento ? calculateAge(profileData.fechaNacimiento) : null,
      nickname: profileData.nickname || "",
      curso: profileData.curso || CURSO_DEFAULT,
      role: isAdmin ? "admin" : "student",
      createdAt: now,
      lastLogin: now,
      avatarType: null,
      avatarValue: null,
      estadisticas: {
        totalSesiones: 0,
        tiempoTotalSegundos: 0,
        temasCompletados: 0,
        ultimaActividad: now,
        primeraActividad: now
      }
    };
    
    await setDoc(userRef, newUserData);
    console.log(`✅ Nuevo perfil creado para: ${user.email}`);
    await registrarSesion(user.uid, 'login');
    
  } else {
    const existingData = userSnap.data();
    await updateDoc(userRef, {
      lastLogin: now,
      'estadisticas.ultimaActividad': now,
      'estadisticas.totalSesiones': (existingData.estadisticas?.totalSesiones || 0) + 1
    });
    
    console.log(`🔄 Login actualizado para: ${user.email}`);
    await registrarSesion(user.uid, 'login');
  }
}

// ====================================
// REGISTRO DE SESIONES
// ====================================
async function registrarSesion(uid, tipo, metadata = {}) {
  try {
    const sessionId = Date.now().toString();
    const sessionRef = doc(db, "sesiones", `${uid}_${sessionId}`);
    
    await setDoc(sessionRef, {
      uid,
      tipo,
      timestamp: serverTimestamp(),
      metadata: {
        userAgent: navigator.userAgent,
        viewport: `${window.innerWidth}x${window.innerHeight}`,
        ...metadata
      }
    });
    
    console.log(`📊 Sesión registrada: ${tipo} para ${uid}`);
  } catch (error) {
    console.error("Error registrando sesión:", error);
  }
}

// ====================================
// GUARDAR PROGRESO CON CONTROL DE BEST SCORE
// ====================================
async function saveProgressToFirebase({ uid, moduleId, lessonId = null, status = "in_progress", score = 0, seconds = 0, metadata = {} }) {
  console.log(`🔄 Procesando progreso: ${moduleId} para ${uid}`);
  
  try {
    const progressId = lessonId ? `${moduleId}_${lessonId}` : moduleId;
    const progressRef = doc(db, "progreso_temas", `${uid}_${progressId}`);
    
    const existingSnap = await getDoc(progressRef);
    let previousScore = 0;
    let previousAttempts = 0;
    
    if (existingSnap.exists()) {
      const existingData = existingSnap.data();
      previousScore = existingData.score || 0;
      previousAttempts = existingData.attempts || 0;
      console.log(`📈 Score anterior: ${previousScore}% | Intentos: ${previousAttempts}`);
    }
    
    const newScore = Math.min(score, 100);
    const shouldUpdate = newScore > previousScore;
    
    if (!shouldUpdate) {
      console.log(`⏸️  Score ${newScore}% no supera al anterior ${previousScore}%. NO se actualiza.`);
      return;
    }
    
    console.log(`✅ Nuevo mejor score: ${previousScore}% → ${newScore}%`);
    
    const progressData = {
      uid,
      moduleId,
      lessonId,
      status,
      score: newScore,
      bestScore: Math.max(newScore, previousScore),
      attempts: previousAttempts + 1,
      timeSpentSeconds: seconds,
      updatedAt: serverTimestamp(),
      metadata: {
        ...metadata,
        scoreDifference: newScore - previousScore,
        updatedReason: shouldUpdate ? 'better_score' : 'skipped_lower_score'
      }
    };
    
    await setDoc(progressRef, progressData, { merge: true });
    console.log(`✅ Progreso guardado: ${progressId} | Score: ${newScore}% | Intento: ${progressData.attempts}`);
    
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      const currentStats = userSnap.data().estadisticas || {};
      const completados = (currentStats.temasCompletados || 0) + (status === "completed" ? 1 : 0);
      
      await updateDoc(userRef, {
        'estadisticas.tiempoTotalSegundos': (currentStats.tiempoTotalSegundos || 0) + seconds,
        'estadisticas.temasCompletados': completados,
        'estadisticas.ultimaActividad': serverTimestamp()
      });
    }
    
  } catch (error) {
    console.error("Error guardando progreso:", error);
    throw error;
  }
}

// API PÚBLICA - GUARDAR PROGRESO
export async function saveProgress({ moduleId, lessonId = null, status = "in_progress", score = 0, seconds = 0 }) {
  const user = auth.currentUser;
  if (!user) throw new Error("No autenticado");
  
  const validScore = Math.max(0, Math.min(score, 100));
  console.log(`🎯 Guardando progreso: ${moduleId} | Score: ${validScore}% | Tiempo: ${seconds}s`);
  
  await saveProgressToFirebase({
    uid: user.uid,
    moduleId,
    lessonId,
    status,
    score: validScore,
    seconds,
    metadata: {
      timestamp: Date.now(),
      url: window.location.href
    }
  });
  
  const sessionKey = `tema.${moduleId}.progress`;
  try {
    sessionStorage.setItem(sessionKey, JSON.stringify({
      moduleId,
      lessonId,
      status,
      score: validScore,
      seconds,
      updatedAt: new Date().toISOString()
    }));
  } catch (error) {
    console.warn("⚠️  No se pudo guardar en sessionStorage:", error);
  }
}

// API PÚBLICA - OBTENER MEJOR SCORE
export async function getBestScore(uid, moduleId) {
  try {
    const progressRef = doc(db, "progreso_temas", `${uid}_${moduleId}`);
    const progressSnap = await getDoc(progressRef);
    
    if (progressSnap.exists()) {
      const data = progressSnap.data();
      return data.bestScore || data.score || 0;
    }
    
    return 0;
  } catch (error) {
    console.error("❌ Error obteniendo best score:", error);
    return 0;
  }
}

// API PÚBLICA - LOGIN
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// API PÚBLICA - LOGOUT
export async function logout() {
  if (auth.currentUser) {
    await registrarSesion(auth.currentUser.uid, 'logout');
  }
  return signOut(auth);
}

// API PÚBLICA - AVATAR
export async function lockAvatar(type, value = null) {
  const user = auth.currentUser;
  if (!user) throw new Error("No autenticado");

  const ref = doc(db, "users", user.uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) throw new Error("Perfil no encontrado.");

  const data = snap.data() || {};
  if (data.avatarType) {
    throw new Error("El avatar ya fue elegido y no se puede cambiar.");
  }

  await updateDoc(ref, {
    avatarType: type,
    avatarValue: value ?? null
  });

  await renderHeaderAvatar(user);
}

// API PÚBLICA - ADMIN
export async function isCurrentUserAdmin() {
  const user = auth.currentUser;
  if (!user) return false;
  return user.email === ADMIN_EMAIL;
}

export async function getAllStudents() {
  if (!await isCurrentUserAdmin()) {
    throw new Error("Acceso denegado: Solo para administradores");
  }
  
  try {
    const studentsQuery = query(
      collection(db, "users"),
      where("role", "==", "student"),
      orderBy("apellidos")
    );
    
    const snapshot = await getDocs(studentsQuery);
    return snapshot.docs.map(d => ({
      id: d.id,
      ...d.data()
    }));
    
  } catch (error) {
    console.error("Error obteniendo estudiantes:", error);
    throw error;
  }
}

export async function getStudentProgress(studentId) {
  if (!await isCurrentUserAdmin()) {
    throw new Error("Acceso denegado: Solo para administradores");
  }
  
  try {
    const progressQuery = query(
      collection(db, "progreso_temas"),
      where("uid", "==", studentId)
    );
    
    const snapshot = await getDocs(progressQuery);
    return snapshot.docs.map(d => d.data());
    
  } catch (error) {
    console.error("Error obteniendo progreso:", error);
    throw error;
  }
}

// API PÚBLICA - REGISTRO
export async function registerStudent(studentData) {
  const { email, password, nombres, apellidos, fechaNacimiento, nickname, curso } = studentData;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await updateProfile(user, {
      displayName: `${nombres} ${apellidos}`.trim()
    });

    await ensureUserDoc(user, {
      nombres: nombres.trim(),
      apellidos: apellidos.trim(),
      fechaNacimiento: fechaNacimiento,
      nickname: nickname.trim(),
      curso: curso.trim()
    });
    
    console.log(`✅ Estudiante registrado exitosamente: ${email}`);
    return user;
    
  } catch (error) {
    console.error("Error en registro:", error);
    throw error;
  }
}

// API PÚBLICA - MIGRACIÓN
export async function migrateLocalProgressToFirebase() {
  const user = auth.currentUser;
  if (!user) return;
  
  console.log("🔄 Iniciando migración de progreso local a Firebase...");
  
  try {
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      if (key && key.startsWith('tema.') && key.includes('.')) {
        const value = sessionStorage.getItem(key);
        if (!value) continue;
        
        try {
          const data = JSON.parse(value);
          const moduleId = key.split('.')[1];
          
          if (data.completed || data.score > 0) {
            await saveProgressToFirebase({
              uid: user.uid,
              moduleId,
              status: data.completed ? "completed" : "in_progress",
              score: data.score || 0,
              seconds: data.seconds || data.timeSpentSec || 0,
              metadata: { migratedFrom: 'sessionStorage' }
            });
            
            console.log(`✅ Migrado: ${moduleId}`);
          }
        } catch (parseError) {
          console.warn(`Error parseando ${key}:`, parseError);
        }
      }
    }
    
    console.log("🎉 Migración completada");
  } catch (error) {
    console.error("Error en migración:", error);
  }
}
// ✅ EXPORTAR PARA QUE CHAT.HTML PUEDA USARLAS
// export { doc, getDoc, db, onAuthStateChanged };