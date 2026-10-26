/**
 * /prueba_filo/firebase.js
 * Módulo central de Firebase: autenticación (login, registro, logout),
 * perfiles de usuario (users), registro de sesiones (sesiones) y
 * guardado de progreso por tema/actividad (progreso_temas).
 *
 * Versión: v1.4.0 (2026-10-26)
 *   - saveProgress acepta metadata (antes se descartaba) y acumula
 *     foundConcepts (conceptos encontrados en la caza) entre intentos
 * v1.3.0 (2026-10-20)
 *   - resetPassword(): email para recuperar la contraseña
 *   - authErrorMessage(): errores de login/registro en español
 * v1.2.0 (2026-10-20)
 *   - saveProgress registra TODOS los intentos (uno por apertura de la
 *     actividad) y el tiempo real; score/bestScore/status solo si mejora
 *   - temasCompletados se suma una sola vez por actividad
 *   - getBestScore acepta lessonId (antes siempre devolvía 0)
 *   - migración: usa el ID uid_modulo_actividad y solo "percentage" válido
 * v1.1.0 (2026-10-20)
 *   - login() registra cada ingreso (lastLogin, totalSesiones, sesiones)
 *   - registro: evita que onAuthStateChanged cree un perfil vacío antes
 *     de guardar nombres/apellidos/fecha/curso (y repara si ya existía vacío)
 *   - curso "Docente" solo para el email del admin (validación previa)
 *   - logout y cambio de usuario limpian el progreso local del navegador
 */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getAuth, onAuthStateChanged, signInWithEmailAndPassword,
  createUserWithEmailAndPassword, signOut, updateProfile,
  sendPasswordResetEmail
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
auth.languageCode = "es"; // emails de Firebase (recuperar contraseña) en español
export const db = getFirestore(app);

// ✅ EXPORTAR FUNCIONES DE FIRESTORE PARA USO EN OTROS MÓDULOS
// IMPORTANTE: Re-exportar las funciones importadas, NO crearlas de nuevo
export { 
  doc, getDoc, setDoc, updateDoc, serverTimestamp, 
  collection, query, where, orderBy, limit, getDocs, 
  onAuthStateChanged 
};

// ====================================
// CONFIGURACIÓN ADMINISTRATIVA
// ====================================
const ADMIN_EMAIL = "julioalbertolazarte00@gmail.com";
const CURSO_DEFAULT = "6to A";

// ====================================
// UTILIDADES
// ====================================
function isAdminEmail(email) {
  return (email || "").trim().toLowerCase() === ADMIN_EMAIL;
}

// Mientras login/registro están en curso, onAuthStateChanged no debe
// crear el perfil por su cuenta (lo hace el propio flujo con los datos completos)
let authFlowInProgress = false;

// Borra el progreso guardado en el navegador para que no se mezcle
// entre alumnos que usan la misma PC
function clearLocalUserData() {
  try {
    sessionStorage.clear();
    Object.keys(localStorage)
      .filter(k => k.startsWith("tema.") || k === "filosofia-quiz-progress")
      .forEach(k => localStorage.removeItem(k));
    console.log("🧹 Datos locales del usuario limpiados");
  } catch (error) {
    console.warn("⚠️  No se pudieron limpiar los datos locales:", error);
  }
}

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

function validateStudentData(studentData) {
  const errors = [];
  
  if (!studentData.nombres?.trim()) errors.push("- Nombres es requerido");
  if (!studentData.apellidos?.trim()) errors.push("- Apellidos es requerido");
  if (!studentData.fechaNacimiento) errors.push("- Fecha de nacimiento es requerida");
  if (!studentData.nickname?.trim()) errors.push("- Nickname es requerido");
  if (!studentData.curso?.trim()) errors.push("- Curso es requerido");
  if (studentData.curso?.trim() === "Docente" && !isAdminEmail(studentData.email)) {
    errors.push("- El curso Docente/Profesor es solo para el profesor");
  }

  if (studentData.fechaNacimiento) {
    const edad = calculateAge(studentData.fechaNacimiento);
    if (!isValidAge(edad)) {
      errors.push(`- Edad inválida (${edad} años). Debe estar entre 12 y 25 años.`);
    }
  }
  
  return errors;
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
    const updates = {
      lastLogin: now,
      'estadisticas.ultimaActividad': now,
      'estadisticas.totalSesiones': (existingData.estadisticas?.totalSesiones || 0) + 1
    };

    // Si viene del registro (perfil creado vacío antes), completar los datos
    if (profileData.nombres) {
      Object.assign(updates, {
        displayName: user.displayName || existingData.displayName || "",
        nombres: profileData.nombres,
        apellidos: profileData.apellidos || "",
        fechaNacimiento: profileData.fechaNacimiento || null,
        edad: profileData.fechaNacimiento ? calculateAge(profileData.fechaNacimiento) : null,
        nickname: profileData.nickname || "",
        curso: profileData.curso || existingData.curso || CURSO_DEFAULT
      });
    }

    await updateDoc(userRef, updates);
    
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
// Un "intento" = una apertura de la actividad (cada carga de página/iframe
// genera un ATTEMPT_ID nuevo). Las actividades guardan varias veces por
// intento y mandan "seconds" acumulado desde que se abrió la actividad.
const ATTEMPT_ID = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

async function saveProgressToFirebase({ uid, moduleId, lessonId = null, status = "in_progress", score = 0, seconds = 0, metadata = {} }) {
  console.log(`🔄 Procesando progreso: ${moduleId} para ${uid}`);
  
  try {
    const progressId = lessonId ? `${moduleId}_${lessonId}` : moduleId;
    const progressRef = doc(db, "progreso_temas", `${uid}_${progressId}`);
    
    const existingSnap = await getDoc(progressRef);
    const existingData = existingSnap.exists() ? existingSnap.data() : {};
    const previousScore = existingData.bestScore ?? existingData.score ?? 0;
    const previousAttempts = existingData.attempts || 0;
    const previousStatus = existingData.status || null;
    
    // Intentos y tiempo: se registran SIEMPRE (no solo al mejorar)
    const isNewAttempt = existingData.lastAttemptId !== ATTEMPT_ID;
    const attempts = previousAttempts + (isNewAttempt ? 1 : 0);
    const prevAttemptSeconds = isNewAttempt ? 0 : (existingData.lastAttemptSeconds || 0);
    const attemptSeconds = Math.max(Math.round(seconds) || 0, prevAttemptSeconds);
    const deltaSeconds = attemptSeconds - prevAttemptSeconds;
    
    const newScore = Math.max(0, Math.min(score, 100));
    const improved = !existingSnap.exists() || newScore > previousScore;
    
    const progressData = {
      uid,
      moduleId,
      lessonId,
      attempts,
      timeSpentSeconds: (existingData.timeSpentSeconds || 0) + deltaSeconds,
      lastScore: newScore,
      lastAttemptId: ATTEMPT_ID,
      lastAttemptSeconds: attemptSeconds,
      lastActivityAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };
    
    // Lista de conceptos encontrados (caza): se acumula entre intentos y dispositivos
    if (Array.isArray(metadata.foundConceptsList)) {
      progressData.foundConcepts = [...new Set([...(existingData.foundConcepts || []), ...metadata.foundConceptsList])];
    }
    
    // Score, bestScore y status: solo si mejora el récord
    if (improved) {
      Object.assign(progressData, {
        status,
        score: newScore,
        bestScore: newScore,
        metadata: {
          ...metadata,
          scoreDifference: newScore - previousScore,
          updatedReason: 'better_score'
        }
      });
      console.log(`✅ Nuevo mejor score: ${previousScore}% → ${newScore}%`);
    } else {
      console.log(`⏸️  Score ${newScore}% no supera al récord ${previousScore}%: se registra el intento sin cambiar el récord`);
    }
    
    await setDoc(progressRef, progressData, { merge: true });
    console.log(`✅ Progreso guardado: ${progressId} | Intento: ${attempts} | +${deltaSeconds}s`);
    
    // Estadísticas del usuario: tiempo real sumado y "completado" una sola vez
    const newlyCompleted = improved && status === "completed" && previousStatus !== "completed";
    if (deltaSeconds > 0 || newlyCompleted) {
      const userRef = doc(db, "users", uid);
      const userSnap = await getDoc(userRef);
      
      if (userSnap.exists()) {
        const currentStats = userSnap.data().estadisticas || {};
        await updateDoc(userRef, {
          'estadisticas.tiempoTotalSegundos': (currentStats.tiempoTotalSegundos || 0) + deltaSeconds,
          'estadisticas.temasCompletados': (currentStats.temasCompletados || 0) + (newlyCompleted ? 1 : 0),
          'estadisticas.ultimaActividad': serverTimestamp()
        });
      }
    }
    
  } catch (error) {
    console.error("Error guardando progreso:", error);
    throw error;
  }
}

// ====================================
// API PÚBLICA - OBTENER DATOS DE USUARIO
// ====================================

/**
 * Obtiene todos los datos del usuario actual logueado
 * @returns {Promise<Object|null>} Objeto con todos los datos del usuario o null si no está autenticado
 */
export async function getCurrentUserData() {
  const user = auth.currentUser;
  if (!user) {
    console.warn("⚠️  No hay usuario autenticado");
    return null;
  }
  
  try {
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      const userData = userSnap.data();
      console.log(`✅ Datos obtenidos para: ${user.email}`);
      return {
        uid: user.uid,
        email: user.email,
        ...userData
      };
    }
    
    console.warn(`⚠️  No se encontró perfil para: ${user.uid}`);
    return null;
    
  } catch (error) {
    console.error("❌ Error obteniendo datos de usuario:", error);
    return null;
  }
}

/**
 * Obtiene solo la fecha de nacimiento del usuario
 * @param {string|null} uid - ID del usuario (opcional, usa el usuario actual si no se proporciona)
 * @returns {Promise<string|null>} Fecha en formato "YYYY-MM-DD" o null
 */
export async function getUserBirthDate(uid = null) {
  const userId = uid || auth.currentUser?.uid;
  
  if (!userId) {
    console.warn("⚠️  No se proporcionó UID y no hay usuario autenticado");
    return null;
  }
  
  try {
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      const fechaNacimiento = userSnap.data().fechaNacimiento;
      console.log(`📅 Fecha de nacimiento obtenida: ${fechaNacimiento}`);
      return fechaNacimiento;
    }
    
    return null;
    
  } catch (error) {
    console.error("❌ Error obteniendo fecha de nacimiento:", error);
    return null;
  }
}

/**
 * Obtiene datos específicos de un usuario por su UID
 * @param {string} uid - ID del usuario
 * @returns {Promise<Object|null>} Datos del usuario o null
 */
export async function getUserDataByUid(uid) {
  if (!uid) {
    console.error("❌ Se requiere un UID");
    return null;
  }
  
  try {
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      return {
        uid,
        ...userSnap.data()
      };
    }
    
    return null;
    
  } catch (error) {
    console.error(`❌ Error obteniendo datos del usuario ${uid}:`, error);
    return null;
  }
}

// ====================================
// API PÚBLICA - GUARDAR PROGRESO
// ====================================
export async function saveProgress({ moduleId, lessonId = null, status = "in_progress", score = 0, seconds = 0, metadata = {} }) {
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
      ...metadata,
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

// ====================================
// API PÚBLICA - OBTENER MEJOR SCORE
// ====================================
export async function getBestScore(uid, moduleId, lessonId = null) {
  try {
    const progressId = lessonId ? `${moduleId}_${lessonId}` : moduleId;
    const progressRef = doc(db, "progreso_temas", `${uid}_${progressId}`);
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

// ====================================
// API PÚBLICA - LOGIN
// ====================================
export async function login(email, password) {
  authFlowInProgress = true;
  try {
    const cred = await signInWithEmailAndPassword(auth, email, password);
    // Registra el ingreso: lastLogin, totalSesiones y documento en "sesiones"
    // (si el perfil no existe, lo crea)
    try {
      await ensureUserDoc(cred.user);
    } catch (error) {
      console.error("⚠️  Login OK pero no se pudo registrar la sesión:", error);
    }
    return cred;
  } finally {
    authFlowInProgress = false;
  }
}

// ====================================
// API PÚBLICA - RECUPERAR CONTRASEÑA
// ====================================
export function resetPassword(email) {
  return sendPasswordResetEmail(auth, (email || "").trim());
}

// ====================================
// API PÚBLICA - MENSAJES DE ERROR EN ESPAÑOL
// ====================================
const AUTH_ERRORS = {
  "auth/invalid-credential": "Email o contraseña incorrectos.",
  "auth/wrong-password": "Email o contraseña incorrectos.",
  "auth/user-not-found": "No hay ninguna cuenta con ese email.",
  "auth/invalid-email": "El formato del email no es válido.",
  "auth/missing-email": "Escribí tu email.",
  "auth/missing-password": "Escribí tu contraseña.",
  "auth/user-disabled": "Esta cuenta está deshabilitada. Consultá con el profesor.",
  "auth/too-many-requests": "Demasiados intentos. Esperá unos minutos y volvé a probar.",
  "auth/network-request-failed": "Sin conexión a internet. Revisá tu conexión y volvé a probar.",
  "auth/email-already-in-use": "Este email ya está registrado. Intentá con otro email o iniciá sesión.",
  "auth/weak-password": "La contraseña es muy débil. Usá al menos 6 caracteres."
};

export function authErrorMessage(error, fallback = "Ocurrió un error. Volvé a intentar.") {
  return AUTH_ERRORS[error?.code] || fallback;
}

// ====================================
// API PÚBLICA - LOGOUT
// ====================================
export async function logout() {
  if (auth.currentUser) {
    await registrarSesion(auth.currentUser.uid, 'logout');
  }
  await signOut(auth);
  clearLocalUserData();
}

// ====================================
// API PÚBLICA - GESTIÓN DE AVATAR
// ====================================
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
// API PÚBLICA - FUNCIONES ADMIN
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

// ====================================
// API PÚBLICA - REGISTRO DE ESTUDIANTE
// ====================================
export async function registerStudent(email, password, studentData) {
  console.log("🎓 Iniciando registro de estudiante...");
  
  const validationErrors = validateStudentData({ ...studentData, email });
  if (validationErrors.length > 0) {
    throw new Error(`Datos inválidos:\n${validationErrors.join('\n')}`);
  }
  
  authFlowInProgress = true;
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    
    const fullName = `${studentData.nombres.trim()} ${studentData.apellidos.trim()}`;
    await updateProfile(user, { displayName: fullName });
    
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
  } finally {
    authFlowInProgress = false;
  }
}

// ====================================
// API PÚBLICA - MIGRACIÓN
// ====================================
export async function migrateLocalProgressToFirebase() {
  const user = auth.currentUser;
  if (!user) return;
  
  console.log("🔄 Iniciando migración de progreso local a Firebase...");
  
  // Solo claves tema.<modulo>.<actividad> de actividades conocidas y con
  // "percentage" explícito (en sessionStorage "score" suele ser cantidad de
  // aciertos, no porcentaje, y no sirve para migrar)
  const ACTIVIDADES = ['quiz', 'caza', 'cruci', 'material', 'mapa', 'video'];
  
  try {
    const keys = [];
    for (let i = 0; i < sessionStorage.length; i++) keys.push(sessionStorage.key(i));
    
    for (const key of keys) {
      const [prefix, moduleId, lessonId, ...rest] = (key || '').split('.');
      if (prefix !== 'tema' || !moduleId || !ACTIVIDADES.includes(lessonId) || rest.length) continue;
      
      try {
        const data = JSON.parse(sessionStorage.getItem(key));
        const percentage = Number(data?.percentage);
        if (data?.syncedFromFirebase || !Number.isFinite(percentage) || percentage <= 0) continue;
        
        await saveProgressToFirebase({
          uid: user.uid,
          moduleId,
          lessonId,
          status: percentage >= 100 ? "completed" : percentage >= 80 ? "approved" : "in_progress",
          score: percentage,
          seconds: data.timeSpent || data.seconds || 0,
          metadata: { migratedFrom: 'sessionStorage' }
        });
        
        console.log(`✅ Migrado: ${moduleId}/${lessonId} (${percentage}%)`);
      } catch (parseError) {
        console.warn(`Error migrando ${key}:`, parseError);
      }
    }
    
    console.log("🎉 Migración completada");
  } catch (error) {
    console.error("Error en migración:", error);
  }
}

// ====================================
// LISTENER DE AUTENTICACIÓN
// ====================================
onAuthStateChanged(auth, async (user) => {
  const userNameEl = document.querySelector("#userName");
  // Se toma al inicio: login()/registerStudent() ya crean/actualizan el perfil
  const flowActive = authFlowInProgress;
  
  if (user) {
    // Si en esta pestaña había otro usuario, limpiar su progreso local
    // ANTES de marcar data-logged (que dispara la migración a Firebase)
    try {
      const prevUid = sessionStorage.getItem("auth.uid");
      if (prevUid && prevUid !== user.uid) clearLocalUserData();
      sessionStorage.setItem("auth.uid", user.uid);
    } catch {}

    // ✅ ESTABLECER ATRIBUTO data-logged PARA CONTROLAR LA UI
    document.documentElement.setAttribute("data-logged", "1");
    
    // ✅ Verificar si el usuario tiene perfil en Firestore
    try {
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);
      
      if (!userSnap.exists() && !flowActive) {
        // Si no existe el perfil, crearlo (caso de usuario registrado antes de este sistema)
        await ensureUserDoc(user);
      }
      
      // Actualizar nombre de usuario en el header
      if (userNameEl) {
        const userData = userSnap.exists() ? userSnap.data() : {};
        const displayName = userData?.nickname || userData?.nombres || user.displayName || user.email;
        userNameEl.textContent = displayName;
      }
      
      // Renderizar avatar
      await renderHeaderAvatar(user);
      
      console.log(`✅ Usuario autenticado: ${user.email}`);
      
    } catch (error) {
      console.error("❌ Error obteniendo datos del usuario:", error);
      // En caso de error, mostrar al menos el email
      if (userNameEl) {
        userNameEl.textContent = user.email.split('@')[0];
      }
    }
    
  } else {
    // ✅ REMOVER ATRIBUTO data-logged CUANDO NO HAY USUARIO
    document.documentElement.removeAttribute("data-logged");
    
    // Limpiar UI
    if (userNameEl) userNameEl.textContent = "";
    
    console.log("🚪 Usuario desconectado");
  }
});

// ====================================
// 🎯 RESUMEN DE EXPORTS DISPONIBLES
// ====================================
// Configuración: app, auth, db
// Funciones Firebase re-exportadas: doc, getDoc, setDoc, updateDoc, serverTimestamp, collection, query, where, orderBy, limit, getDocs, onAuthStateChanged
// 
// Autenticación: login, logout, registerStudent
// 
// Datos de usuario: getCurrentUserData, getUserBirthDate, getUserDataByUid
// 
// Progreso: saveProgress, getBestScore, migrateLocalProgressToFirebase
// 
// Avatar: lockAvatar
// 
// Admin: isCurrentUserAdmin, getAllStudents, getStudentProgress