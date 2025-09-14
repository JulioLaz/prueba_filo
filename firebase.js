// // /prueba_filo/firebase.js
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
// import {
//   getAuth, onAuthStateChanged, signInWithEmailAndPassword,
//   createUserWithEmailAndPassword, signOut, updateProfile
// } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
// import {
//   getFirestore, doc, setDoc, getDoc, serverTimestamp
// } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";


// const firebaseConfig = {
//   apiKey: "AIzaSyA8GSBbszBeBIVG3C56xfC5yao_1m2UPcQ",
//   authDomain: "filosofia-quiz-prod.firebaseapp.com",
//   databaseURL: "https://filosofia-quiz-prod-default-rtdb.firebaseio.com",
//   projectId: "filosofia-quiz-prod",
//   storageBucket: "filosofia-quiz-prod.firebasestorage.app",
//   messagingSenderId: "344375832179",
//   appId: "1:344375832179:web:db1ea9ab343fd90b0b4406",
//   measurementId: "G-GJ1XNPC80C"
// };

// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);

// // Crea doc de usuario si no existe
// async function ensureUserDoc(user, classroomId="4toA") {
//   const ref = doc(db, "users", user.uid);
//   const snap = await getDoc(ref);
//   if (!snap.exists()) {
//     await setDoc(ref, {
//       displayName: user.displayName || "",
//       email: user.email,
//       role: "student",
//       classroomId,
//       createdAt: serverTimestamp()
//     });
//   }
// }

// onAuthStateChanged(auth, async (user) => {
//   const isLogged = !!user;
//   document.documentElement.dataset.logged = isLogged ? "1" : "0";
//   const userNameEl = document.querySelector("#userName");
//   if (isLogged) {
//     await ensureUserDoc(user);
//     if (userNameEl) userNameEl.textContent = user.displayName || user.email;
//   } else {
//     if (userNameEl) userNameEl.textContent = "";
//   }
// });

// export async function register(email, password, displayName, classroomId="4toA") {
//   const { user } = await createUserWithEmailAndPassword(auth, email, password);
//   if (displayName) await updateProfile(user, { displayName });
//   await ensureUserDoc(user, classroomId);
//   return user;
// }

// export function login(email, password) {
//   return signInWithEmailAndPassword(auth, email, password);
// }

// export function logout() { return signOut(auth); }

// // API simple para guardar progreso por módulo/lección
// export async function saveProgress({ moduleId, lessonId=null, status="in_progress", score=0, seconds=0 }) {
//   const user = auth.currentUser;
//   if (!user) throw new Error("No autenticado");
//   const id = `${user.uid}__${moduleId}${lessonId ? `__${lessonId}` : ""}`;
//   const ref = doc(db, "progress", id);
//   const userRef = doc(db, "users", user.uid);
//   const userSnap = await getDoc(userRef);
//   const classroomId = userSnap.exists() ? (userSnap.data().classroomId || null) : null;
//   await setDoc(ref, {
//     uid: user.uid,
//     moduleId, lessonId,
//     status, score,
//     timeSpentSec: seconds,
//     classroomId,
//     updatedAt: serverTimestamp()
//   }, { merge: true });
// }

// /prueba_filo/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getAuth, onAuthStateChanged, signInWithEmailAndPassword,
  createUserWithEmailAndPassword, signOut, updateProfile
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import {
  getFirestore, doc, setDoc, getDoc, updateDoc, serverTimestamp
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

// ---------- helpers ----------
function getInitialsFrom(user) {
  const base = (user?.displayName || user?.email || "").trim();
  if (!base) return "🙂";
  const parts = base.includes("@") ? [base.split("@")[0]] : base.split(/\s+/);
  const letters = parts.flatMap(p => p.slice(0,1)).slice(0,2);
  return letters.join("").toUpperCase() || "🙂";
}

async function renderHeaderAvatar(user) {
  const avatarEl = document.querySelector("#userAvatar");
  if (!avatarEl) return;

  try {
    const ref = doc(db, "users", user.uid);
    const snap = await getDoc(ref);
    const data = snap.data() || {};

    if (data.avatarType === "emoji" && data.avatarValue) {
      avatarEl.textContent = data.avatarValue; // 🦊 etc.
      avatarEl.className = "avatar emoji";
    } else {
      // fallback a iniciales
      avatarEl.textContent = getInitialsFrom(user);
      avatarEl.className = "avatar initials";
    }
  } catch {
    // en caso de error, mostramos iniciales
    avatarEl.textContent = getInitialsFrom(user);
    avatarEl.className = "avatar initials";
  }
}

// Crea doc de usuario si no existe
async function ensureUserDoc(user, classroomId="4toA") {
  const ref = doc(db, "users", user.uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    await setDoc(ref, {
      displayName: user.displayName || "",
      email: user.email,
      role: "student",
      classroomId,
      createdAt: serverTimestamp()
      // avatarType/avatarValue se setean luego si elige emoji o iniciales de forma explícita
    });
  }
}

// ---------- auth state ----------
onAuthStateChanged(auth, async (user) => {
  const isLogged = !!user;
  document.documentElement.dataset.logged = isLogged ? "1" : "0";
  const userNameEl = document.querySelector("#userName");

  if (isLogged) {
    await ensureUserDoc(user);
    if (userNameEl) userNameEl.textContent = user.displayName || user.email;
    // mostrar avatar en header
    await renderHeaderAvatar(user);
  } else {
    if (userNameEl) userNameEl.textContent = "";
  }
});

// ---------- API pública ----------
export async function register(email, password, displayName, classroomId="4toA") {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  if (displayName) await updateProfile(user, { displayName });
  await ensureUserDoc(user, classroomId);
  return user;
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() { return signOut(auth); }

// Guardar progreso por módulo/lección
export async function saveProgress({ moduleId, lessonId=null, status="in_progress", score=0, seconds=0 }) {
  const user = auth.currentUser;
  if (!user) throw new Error("No autenticado");
  const id = `${user.uid}__${moduleId}${lessonId ? `__${lessonId}` : ""}`;
  const ref = doc(db, "progress", id);
  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);
  const classroomId = userSnap.exists() ? (userSnap.data().classroomId || null) : null;
  await setDoc(ref, {
    uid: user.uid,
    moduleId, lessonId,
    status, score,
    timeSpentSec: seconds,
    classroomId,
    updatedAt: serverTimestamp()
  }, { merge: true });
}

// Elegir avatar UNA SOLA VEZ (emoji o iniciales); si ya hay avatarType, no deja cambiar
export async function lockAvatar(type, value=null) {
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
    avatarType: type,          // "emoji" | "initials"
    avatarValue: value ?? null // "🦊" si emoji, null si initials
  });

  // refrescamos el header
  await renderHeaderAvatar(user);
}
