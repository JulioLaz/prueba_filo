// /prueba_filo/firebase.js - VERSIÓN AMPLIADA
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

// ====================================
// CONFIGURACIÓN ADMINISTRATIVA
// ====================================
const ADMIN_EMAIL = "julioalbertolazarte00@gmail.com"; // Tu email de admin
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
  return age >= 12 && age <= 25; // Rango típico de estudiantes secundarios
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
    // Crear nuevo perfil de usuario
    const newUserData = {
      // Datos básicos
      email: user.email,
      displayName: user.displayName || "",
      
      // Perfil educativo
      nombres: profileData.nombres || "",
      apellidos: profileData.apellidos || "",
      fechaNacimiento: profileData.fechaNacimiento || null,
      edad: profileData.fechaNacimiento ? calculateAge(profileData.fechaNacimiento) : null,
      nickname: profileData.nickname || "",
      curso: profileData.curso || CURSO_DEFAULT,
      
      // Sistema
      role: isAdmin ? "admin" : "student",
      createdAt: now,
      lastLogin: now,
      
      // Configuración inicial
      avatarType: null,
      avatarValue: null,
      
      // Estadísticas iniciales
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
    
    // Registrar sesión inicial
    await registrarSesion(user.uid, 'login');
    
  } else {
    // Actualizar último login
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
      tipo, // 'login', 'logout', 'activity'
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
// GESTIÓN DE PROGRESO POR TEMA
// ====================================

// ====================================
// GUARDAR PROGRESO CON CONTROL DE BEST SCORE
// ====================================
async function saveProgressToFirebase({ uid, moduleId, lessonId = null, status = "in_progress", score = 0, seconds = 0, metadata = {} }) {
  console.log(`🔄 Procesando progreso: ${moduleId} para ${uid}`);
  
  try {
    const progressId = lessonId ? `${moduleId}_${lessonId}` : moduleId;
    const progressRef = doc(db, "progreso_temas", `${uid}_${progressId}`);
    
    // 📊 PASO 1: Leer el progreso anterior
    const existingSnap = await getDoc(progressRef);
    let previousScore = 0;
    let previousAttempts = 0;
    
    if (existingSnap.exists()) {
      const existingData = existingSnap.data();
      previousScore = existingData.score || 0;
      previousAttempts = existingData.attempts || 0;
      console.log(`📈 Score anterior: ${previousScore}% | Intentos: ${previousAttempts}`);
    }
    
    // 🎯 PASO 2: Determinar si actualizar (solo si el nuevo score es mejor)
    const newScore = Math.min(score, 100); // Tope máximo 100%
    const shouldUpdate = newScore > previousScore;
    
    if (!shouldUpdate) {
      console.log(`⏸️  Score ${newScore}% no supera al anterior ${previousScore}%. NO se actualiza.`);
      return; // Salir sin actualizar
    }
    
    console.log(`✅ Nuevo mejor score: ${previousScore}% → ${newScore}%`);
    
    // 💾 PASO 3: Preparar datos del progreso
    const progressData = {
      uid,
      moduleId,
      lessonId,
      status,
      score: newScore,              // Solo actualizar si es mejor
      bestScore: Math.max(newScore, previousScore), // Garantizar que es el máximo
      attempts: previousAttempts + 1, // Incrementar contador
      timeSpentSeconds: seconds,
      updatedAt: serverTimestamp(),
      metadata: {
        ...metadata,
        scoreDifference: newScore - previousScore,
        updatedReason: shouldUpdate ? 'better_score' : 'skipped_lower_score'
      }
    };
    
    // 🔐 PASO 4: Guardar en Firebase
    await setDoc(progressRef, progressData, { merge: true });
    
    console.log(`✅ Progreso guardado: ${progressId} | Score: ${newScore}% | Intento: ${progressData.attempts}`);
    
    // 📊 PASO 5: Actualizar estadísticas globales del usuario
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      const userData = userSnap.data();
      const currentTotalTime = userData.estadisticas?.tiempoTotalSegundos || 0;
      
      await updateDoc(userRef, {
        'estadisticas.tiempoTotalSegundos': currentTotalTime + seconds,
        'estadisticas.ultimaActividad': serverTimestamp()
      });
      
      console.log(`⏱️  Tiempo total acumulado: ${currentTotalTime + seconds}s`);
    }
    
  } catch (error) {
    console.error("❌ Error guardando progreso:", error);
    throw error;
  }
}

// async function saveProgressToFirebase({ uid, moduleId, lessonId = null, status = "in_progress", score = 0, seconds = 0, metadata = {} }) {
//   console.log(`💾 Guardando progreso: ${moduleId} para ${uid}`);
  
//   try {
//     const progressId = lessonId ? `${moduleId}_${lessonId}` : moduleId;
//     const progressRef = doc(db, "progreso_temas", `${uid}_${progressId}`);
    
//     const progressData = {
//       uid,
//       moduleId,
//       lessonId,
//       status,
//       score,
//       timeSpentSeconds: seconds,
//       updatedAt: serverTimestamp(),
//       metadata
//     };
    
//     await setDoc(progressRef, progressData, { merge: true });
    
//     // Actualizar estadísticas globales del usuario
//     const userRef = doc(db, "users", uid);
//     const userSnap = await getDoc(userRef);
    
//     if (userSnap.exists()) {
//       const userData = userSnap.data();
//       const currentTotalTime = userData.estadisticas?.tiempoTotalSegundos || 0;
      
//       await updateDoc(userRef, {
//         'estadisticas.tiempoTotalSegundos': currentTotalTime + seconds,
//         'estadisticas.ultimaActividad': serverTimestamp()
//       });
//     }
    
//     console.log(`✅ Progreso guardado: ${progressId}`);
    
//   } catch (error) {
//     console.error("Error guardando progreso:", error);
//     throw error;
//   }
// }

// ====================================
// OBTENER PROGRESO DE UN TEMA
// ====================================
async function getProgressFromFirebase(uid, moduleId, lessonId = null) {
  try {
    const progressId = lessonId ? `${moduleId}_${lessonId}` : moduleId;
    const progressRef = doc(db, "progreso_temas", `${uid}_${progressId}`);
    const progressSnap = await getDoc(progressRef);
    
    if (progressSnap.exists()) {
      return progressSnap.data();
    }
    
    return null;
  } catch (error) {
    console.error("Error obteniendo progreso:", error);
    return null;
  }
}

// ====================================
// VALIDACIÓN DE DATOS DEL FORMULARIO
// ====================================
function validateStudentData({ nombres, apellidos, fechaNacimiento, nickname, curso }) {
  const errors = [];
  
  // Validar nombres
  if (!nombres || nombres.trim().length < 2) {
    errors.push("Los nombres deben tener al menos 2 caracteres");
  }
  
  // Validar apellidos
  if (!apellidos || apellidos.trim().length < 2) {
    errors.push("Los apellidos deben tener al menos 2 caracteres");
  }
  
  // Validar fecha de nacimiento
  if (!fechaNacimiento) {
    errors.push("La fecha de nacimiento es requerida");
  } else {
    const edad = calculateAge(fechaNacimiento);
    if (!isValidAge(edad)) {
      errors.push(`Edad inválida: ${edad} años. Debe estar entre 12 y 25 años`);
    }
  }
  
  // Validar nickname
  if (!nickname || nickname.trim().length < 3) {
    errors.push("El nombre de fantasía debe tener al menos 3 caracteres");
  } else if (!/^[a-zA-Z0-9_áéíóúñ ]+$/.test(nickname)) {
    errors.push("El nombre de fantasía solo puede contener letras, números y espacios");
  }
  
  // Validar curso
  if (!curso || curso.trim().length < 2) {
    errors.push("El curso es requerido");
  }
  
  return errors;
}

// ====================================
// AUTH STATE LISTENER
// ====================================
onAuthStateChanged(auth, async (user) => {
  const isLogged = !!user;
  document.documentElement.dataset.logged = isLogged ? "1" : "0";
  const userNameEl = document.querySelector("#userName");

  if (isLogged) {
    await ensureUserDoc(user);
    if (userNameEl) {
      // Mostrar nickname si existe, sino nombre completo o email
      const userDoc = await getDoc(doc(db, "users", user.uid));
      const userData = userDoc.data();
      const displayName = userData?.nickname || userData?.nombres || user.displayName || user.email;
      userNameEl.textContent = displayName;
    }
    await renderHeaderAvatar(user);
  } else {
    if (userNameEl) userNameEl.textContent = "";
  }
});

// ====================================
// API PÚBLICA - REGISTRO AMPLIADO
// ====================================
export async function registerStudent(email, password, studentData) {
  console.log("🎓 Iniciando registro de estudiante...");
  
  // Validar datos
  const validationErrors = validateStudentData(studentData);
  if (validationErrors.length > 0) {
    throw new Error(`Datos inválidos:\n${validationErrors.join('\n')}`);
  }
  
  try {
    // Crear cuenta de Firebase Auth
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    
    // Actualizar perfil con nombre completo
    const fullName = `${studentData.nombres.trim()} ${studentData.apellidos.trim()}`;
    await updateProfile(user, { displayName: fullName });
    
    // Crear documento completo del usuario
    await ensureUserDoc(user, {
      nombres: studentData.nombres.trim(),
      apellidos: studentData.apellidos.trim(),
      fechaNacimiento: studentData.fechaNacimiento,
      nickname: studentData.nickname.trim(),
      curso: studentData.curso.trim()
    });
    
    console.log(`✅ Estudiante registrado exitosamente: ${email}`);
    return user;
    
  } catch (error) {
    console.error("Error en registro:", error);
    throw error;
  }
}

// API PÚBLICA - LOGIN SIMPLE
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// API PÚBLICA - LOGOUT CON REGISTRO DE SESIÓN
export async function logout() {
  if (auth.currentUser) {
    await registrarSesion(auth.currentUser.uid, 'logout');
  }
  return signOut(auth);
}


// ====================================
// API PÚBLICA - GUARDAR PROGRESO (MEJORADA)
// ====================================
export async function saveProgress({ moduleId, lessonId = null, status = "in_progress", score = 0, seconds = 0 }) {
  const user = auth.currentUser;
  if (!user) throw new Error("No autenticado");
  
  // Garantizar que score está entre 0 y 100
  const validScore = Math.max(0, Math.min(score, 100));
  
  console.log(`🎯 Guardando progreso: ${moduleId} | Score: ${validScore}% | Tiempo: ${seconds}s`);
  
  // Guardar en Firebase
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
  
  // Mantener compatibilidad con sessionStorage
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

// API PÚBLICA - GUARDAR PROGRESO (INTERFAZ SIMPLIFICADA)
// export async function saveProgress({ moduleId, lessonId = null, status = "in_progress", score = 0, seconds = 0 }) {
//   const user = auth.currentUser;
//   if (!user) throw new Error("No autenticado");
  
//   // Guardar en Firebase
//   await saveProgressToFirebase({
//     uid: user.uid,
//     moduleId,
//     lessonId,
//     status,
//     score,
//     seconds,
//     metadata: {
//       timestamp: Date.now(),
//       url: window.location.href
//     }
//   });
  
//   // Mantener compatibilidad con sistema anterior (temporal)
//   const id = `${user.uid}__${moduleId}${lessonId ? `__${lessonId}` : ""}`;
//   const sessionKey = `tema.${moduleId}.progress`;
  
//   try {
//     sessionStorage.setItem(sessionKey, JSON.stringify({
//       moduleId,
//       lessonId,
//       status,
//       score,
//       seconds,
//       updatedAt: new Date().toISOString()
//     }));
//   } catch (error) {
//     console.warn("No se pudo guardar en sessionStorage:", error);
//   }
// }

// ====================================
// FUNCIÓN PARA CONSULTAR MEJOR SCORE
// ====================================
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

// API PÚBLICA - GESTIÓN DE AVATAR (SIN CAMBIOS)
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

// ====================================
// FUNCIONES PARA EL DASHBOARD ADMIN
// ====================================
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
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
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
    return snapshot.docs.map(doc => doc.data());
    
  } catch (error) {
    console.error("Error obteniendo progreso:", error);
    throw error;
  }
}

// ====================================
// FUNCIÓN DE MIGRACIÓN (TEMPORAL)
// ====================================
export async function migrateLocalProgressToFirebase() {
  const user = auth.currentUser;
  if (!user) return;
  
  console.log("🔄 Iniciando migración de progreso local a Firebase...");
  
  try {
    // Buscar datos en sessionStorage
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