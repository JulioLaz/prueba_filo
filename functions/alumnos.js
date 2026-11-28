/**
 * functions/alumnos.js — borrar un alumno (cuenta de ingreso y todos sus datos) y armar el
 * respaldo de sus notas en CSV.
 *
 * Lo usan:
 *  - la Cloud Function adminBorrarAlumnos (functions/index.js), que llama el panel del docente;
 *  - tools/limpieza/limpiar_progreso.cjs (--borrar-alumno y --fin-de-ciclo), desde la PC.
 *
 * Solo borra perfiles con role "student": nunca la cuenta del docente.
 * Datos del alumno: users/<uid> y, en progreso_temas, examenes, examenes_estado y sesiones,
 * los documentos con uid == <uid> o cuyo id empieza con "<uid>_".
 *
 * Versión: v1.0.0 (2026-11-28)
 */
const {FieldPath} = require("firebase-admin/firestore");

const COLECCIONES_DEL_ALUMNO = ["progreso_temas", "examenes", "examenes_estado", "sesiones"];
const UID_VALIDO = /^[A-Za-z0-9_-]{6,128}$/;

/** Referencias de todos los documentos del alumno (sin users). */
async function documentosDelAlumno(db, uid) {
  const refs = new Map();
  for (const c of COLECCIONES_DEL_ALUMNO) {
    const col = db.collection(c);
    const porCampo = await col.where("uid", "==", uid).get();
    const porId = await col.where(FieldPath.documentId(), ">=", `${uid}_`).where(FieldPath.documentId(), "<", `${uid}_`).get();
    [...porCampo.docs, ...porId.docs].forEach((d) => refs.set(d.ref.path, d.ref));
  }
  return [...refs.values()];
}

/**
 * Borra la cuenta y todos los datos de un alumno.
 * @returns {{uid, nombre, documentos, cuenta}} cuenta: true si existía la cuenta de ingreso.
 */
async function borrarAlumno(db, authAdmin, uid) {
  if (typeof uid !== "string" || !UID_VALIDO.test(uid)) throw new Error("id inválido");
  const perfil = await db.collection("users").doc(uid).get();
  if (!perfil.exists) throw new Error("no hay un alumno con ese id");
  const p = perfil.data();
  if (p.role !== "student") throw new Error("no es un alumno (no se borra)");

  const refs = await documentosDelAlumno(db, uid);
  for (let i = 0; i < refs.length; i += 400) {
    const lote = db.batch();
    refs.slice(i, i + 400).forEach((r) => lote.delete(r));
    await lote.commit();
  }
  await perfil.ref.delete();

  let cuenta = true;
  try {
    await authAdmin.deleteUser(uid);
  } catch (e) {
    if (e.code !== "auth/user-not-found") throw e;
    cuenta = false;
  }
  const nombre = `${p.apellidos || ""}, ${p.nombres || ""}`.trim();
  return {uid, nombre, documentos: refs.length + 1, cuenta};
}

const celda = (v) => {
  const s = String(v ?? "");
  return /[;"\n]/.test(s) ? `"${s.replace(/"/g, "\"\"")}"` : s;
};

/**
 * Respaldo de notas en CSV (separador «;» para Excel en español): una fila por alumno,
 * tema y actividad con su mejor puntaje; los alumnos sin progreso salen con una fila vacía.
 * @param alumnos [{id, apellidos, nombres, curso, email}]  progreso [{uid, moduleId, lessonId, bestScore, score, attempts, timeSpentSeconds}]
 */
function respaldoCSV(alumnos, progreso) {
  const filas = [["id", "apellidos", "nombres", "curso", "email", "tema", "actividad", "mejor_puntaje", "intentos", "minutos"]];
  for (const a of alumnos) {
    const suyos = progreso.filter((p) => p.uid === a.id)
      .sort((x, y) => `${x.moduleId}${x.lessonId}`.localeCompare(`${y.moduleId}${y.lessonId}`));
    const base = [a.id, a.apellidos, a.nombres, a.curso, a.email];
    if (!suyos.length) filas.push([...base, "", "", "", "", ""]);
    suyos.forEach((p) => filas.push([...base, p.moduleId, p.lessonId,
      Math.max(Number(p.bestScore) || 0, Number(p.score) || 0), p.attempts ?? "", Math.round((Number(p.timeSpentSeconds) || 0) / 60)]));
  }
  return "﻿" + filas.map((f) => f.map(celda).join(";")).join("\r\n") + "\r\n";
}

module.exports = {borrarAlumno, documentosDelAlumno, respaldoCSV, UID_VALIDO, COLECCIONES_DEL_ALUMNO};
