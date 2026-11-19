/*
 * tools/pruebas/comun.mjs — funciones compartidas por las pruebas en navegador.
 *
 * Sirve el repo como si fuera la web publicada (http://localhost:5000/prueba_filo/...)
 * sin levantar ningún servidor: Playwright intercepta cada pedido y responde con el
 * archivo del repo. Firebase se reemplaza por "stubs" (módulos falsos) para que las
 * actividades funcionen sin internet ni cuenta real, y lo que guardarían en Firestore
 * queda en window.__saves para revisarlo.
 *
 * Versión: v1.0.0 (2026-11-19)
 */
import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';

const require = createRequire(import.meta.url);
// require (y no import) para usar el Playwright ya instalado en la máquina (NODE_PATH)
const { chromium } = require('playwright');

export const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
export const SALIDA = path.join(REPO, 'tools/pruebas/salida');
fs.mkdirSync(SALIDA, { recursive: true });

export const BASE = 'http://localhost:5000/prueba_filo';

/** Navegador Chromium. CHROMIUM_PATH permite indicar otro ejecutable. */
export function abrirNavegador() {
  const op = { args: ['--no-proxy-server'] };
  if (process.env.CHROMIUM_PATH) op.executablePath = process.env.CHROMIUM_PATH;
  return chromium.launch(op);
}

const TIPOS = { '.js': 'application/javascript', '.mjs': 'application/javascript', '.css': 'text/css',
  '.json': 'application/json', '.html': 'text/html', '.png': 'image/png', '.svg': 'image/svg+xml', '.mp3': 'audio/mpeg' };

/** Firebase falso: alumno "alu1" con sesión; saveProgress guarda en window.__saves. */
export const STUB_FIREBASE = `export const app={}; export const auth={currentUser:{uid:'alu1'}}; export const db={};
export async function saveProgress(p){ (window.__saves ||= []).push(JSON.parse(JSON.stringify(p))); }
export function onAuthStateChanged(a,cb){ setTimeout(()=>cb(a.currentUser),10); return ()=>{}; }
export async function isCurrentUserAdmin(){ return false; }
export function collection(d,n){ return {n}; } export function where(c,o,v){ return {c,v}; } export function query(col,...f){ return {...col,f}; }
export function doc(){ return {}; } export async function getDoc(){ return { exists:()=>false, data:()=>({}) }; }
export async function getDocs(){ return { docs: [], forEach(){} }; }`;
export const STUB_AUTH = `export function getAuth(){ return { currentUser:{uid:'alu1'}, onAuthStateChanged(cb){ cb(this.currentUser); return ()=>{}; } }; }`;
export const STUB_FIRESTORE = `export function getFirestore(){ return {}; } export function doc(){ return {}; } export async function getDoc(){ return { exists:()=>false, data:()=>({}) }; }
export function collection(d,n){ return {n}; } export function where(c,o,v){ return {c,v}; } export function query(col,...f){ return {...col,f}; }
export async function getDocs(){ return { docs: [], forEach(){} }; }`;

/**
 * Intercepta los pedidos de la página:
 *  - localhost:5000/prueba_filo/... → archivos del repo (firebase.js → firebaseJs si se indica)
 *  - www.gstatic.com (SDK de Firebase) → gstatic(url) si se indica
 *  - cualquier otro host → bloqueado
 */
export const STUB_FUNCTIONS = `export function getFunctions(){ return {}; } export function httpsCallable(){ return async () => ({ data: {} }); }`;
const stubGstatic = (url) => (url.includes('firestore') ? STUB_FIRESTORE : url.includes('functions') ? STUB_FUNCTIONS
  : url.includes('firebase-app') ? 'export function initializeApp(){ return {}; } export function getApp(){ return {}; }' : STUB_AUTH);

export async function servirRepo(page, { firebaseJs = STUB_FIREBASE, gstatic = stubGstatic } = {}) {
  await page.route((u) => u.hostname === 'www.gstatic.com', (r) =>
    r.fulfill({ contentType: 'application/javascript', body: gstatic(r.request().url()) }));
  await page.route((u) => u.hostname === 'localhost', (r) => {
    const p = new URL(r.request().url()).pathname.replace(/^\/prueba_filo/, '');
    if (p === '/firebase.js' && firebaseJs) return r.fulfill({ contentType: 'application/javascript', body: firebaseJs });
    const fp = path.join(REPO, decodeURIComponent(p));
    if (fs.existsSync(fp) && fs.statSync(fp).isFile()) {
      return r.fulfill({ contentType: TIPOS[path.extname(fp)] || 'application/octet-stream', body: fs.readFileSync(fp) });
    }
    return r.fulfill({ status: 404, body: '' });
  });
  await page.route((u) => !['localhost', 'www.gstatic.com'].includes(u.hostname), (r) => r.abort());
}

/** Contador de controles: check(nombre, condición, detalle). fin() cierra y devuelve el código de salida. */
export function controles() {
  let fallas = 0;
  const check = (nombre, ok, detalle = '') => { console.log(ok ? '✅' : '❌', nombre, detalle); if (!ok) fallas++; };
  const fin = () => { console.log(fallas ? `\n${fallas} FALLA(S)` : '\nTODO OK'); return fallas ? 1 : 0; };
  return { check, fin };
}

/** Tema pedido por línea de comandos (obligatorio). */
export function temaDeArgs(uso) {
  const t = process.argv[2];
  if (!t || !/^[a-z0-9_]+$/.test(t)) { console.error(`Uso: ${uso}`); process.exit(2); }
  return t;
}
