// /prueba_filo/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getAuth, onAuthStateChanged, signInWithEmailAndPassword,
  createUserWithEmailAndPassword, signOut, updateProfile
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import {
  getFirestore, doc, setDoc, getDoc, serverTimestamp
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

// const firebaseConfig = {
//   apiKey: "TU_API_KEY",
//   authDomain: "tu-proyecto.firebaseapp.com",
//   projectId: "tu-proyecto",
//   storageBucket: "tu-proyecto.appspot.com",
//   messagingSenderId: "1234567890",
//   appId: "1:123:web:abc"
// };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

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
    });
  }
}

onAuthStateChanged(auth, async (user) => {
  const isLogged = !!user;
  document.documentElement.dataset.logged = isLogged ? "1" : "0";
  const userNameEl = document.querySelector("#userName");
  if (isLogged) {
    await ensureUserDoc(user);
    if (userNameEl) userNameEl.textContent = user.displayName || user.email;
  } else {
    if (userNameEl) userNameEl.textContent = "";
  }
});

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

// API simple para guardar progreso por módulo/lección
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
