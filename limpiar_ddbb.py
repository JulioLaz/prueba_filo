#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
🗑️  limpiar_ddbb.py
Borra todos los datos de la base de datos Firebase (Firestore)
EXCEPTO el usuario administrador.

Colecciones que limpia:
  • users           → todos los alumnos (no el admin)
  • progreso_temas  → todo el progreso
  • sesiones        → todo el historial de sesiones

Uso:
  python limpiar_ddbb.py                        # pide la ruta del service account
  python limpiar_ddbb.py serviceAccount.json    # pasa la ruta como argumento
"""
"""

RUTA DE JSON PARA ACCEDER A FIREBASE:

C:\JulioPrograma\prueba_filo\prueba_filo\filosofia-quiz-prod-firebase-adminsdk-fbsvc-130b53c6fd.json

"""



import sys
import json
from pathlib import Path

# ─────────────────────────────────────────────
# CONFIGURACIÓN
# ─────────────────────────────────────────────
ADMIN_EMAIL = "julioalbertolazarte00@gmail.com"

COLECCIONES = [
    "progreso_temas",   # primero el progreso (no tiene restricción de admin)
    "sesiones",         # luego las sesiones
    "users",            # al final los usuarios (acá filtramos el admin)
]

BATCH_SIZE = 400        # Firestore permite max 500 por batch


# ─────────────────────────────────────────────
# COLORES
# ─────────────────────────────────────────────
class C:
    RED    = '\033[91m'
    GREEN  = '\033[92m'
    YELLOW = '\033[93m'
    BLUE   = '\033[94m'
    CYAN   = '\033[96m'
    BOLD   = '\033[1m'
    DIM    = '\033[2m'
    RESET  = '\033[0m'

def rojo(t):    return f"{C.RED}{t}{C.RESET}"
def verde(t):   return f"{C.GREEN}{t}{C.RESET}"
def amarillo(t):return f"{C.YELLOW}{t}{C.RESET}"
def azul(t):    return f"{C.BLUE}{t}{C.RESET}"
def negrita(t): return f"{C.BOLD}{t}{C.RESET}"
def dim(t):     return f"{C.DIM}{t}{C.RESET}"


# ─────────────────────────────────────────────
# VERIFICAR DEPENDENCIAS
# ─────────────────────────────────────────────
def verificar_dependencias():
    try:
        import firebase_admin
        return True
    except ImportError:
        print(rojo("\n❌ Falta el paquete 'firebase-admin'"))
        print(amarillo("   Instalalo con:"))
        print(negrita("   pip install firebase-admin\n"))
        return False


# ─────────────────────────────────────────────
# OBTENER RUTA DEL SERVICE ACCOUNT
# ─────────────────────────────────────────────
def obtener_service_account():
    # 1) Desde argumento
    if len(sys.argv) > 1:
        path = Path(sys.argv[1])
        if path.exists():
            return str(path)
        else:
            print(rojo(f"❌ No se encontró el archivo: {path}"))
            sys.exit(1)

    # 2) Buscar automáticamente en el directorio actual
    candidatos = list(Path(".").glob("*serviceAccount*.json")) + \
                 list(Path(".").glob("*service_account*.json")) + \
                 list(Path(".").glob("*firebase*admin*.json"))

    if candidatos:
        print(azul(f"\n🔍 Service account encontrado automáticamente: {candidatos[0]}"))
        resp = input(f"   ¿Usar este archivo? [S/n]: ").strip().lower()
        if resp in ("", "s", "si", "sí", "y", "yes"):
            return str(candidatos[0])

    # 3) Pedir manualmente
    print(amarillo("\n📄 Necesitás un archivo de Service Account de Firebase."))
    print(dim("   Descargalo desde: Firebase Console → Configuración → Cuentas de servicio"))
    print(dim("   → Generar nueva clave privada\n"))
    path = input("   Ruta al archivo .json: ").strip().strip('"')

    if not Path(path).exists():
        print(rojo(f"❌ Archivo no encontrado: {path}"))
        sys.exit(1)

    return path


# ─────────────────────────────────────────────
# INICIALIZAR FIREBASE
# ─────────────────────────────────────────────
def inicializar_firebase(service_account_path):
    import firebase_admin
    from firebase_admin import credentials, firestore

    try:
        cred = credentials.Certificate(service_account_path)
        firebase_admin.initialize_app(cred)
        db = firestore.client()
        print(verde(f"✅ Firebase conectado correctamente"))
        return db
    except Exception as e:
        print(rojo(f"❌ Error conectando a Firebase: {e}"))
        sys.exit(1)


# ─────────────────────────────────────────────
# CONTAR DOCUMENTOS
# ─────────────────────────────────────────────
def contar_documentos(db, coleccion, excluir_uid_admin=None):
    """Cuenta cuántos docs se borrarían en una colección."""
    docs = db.collection(coleccion).stream()
    total = 0
    omitidos = 0

    for doc in docs:
        if coleccion == "users" and excluir_uid_admin:
            if doc.id == excluir_uid_admin:
                omitidos += 1
                continue
        # En progreso_temas y sesiones, filtramos por uid del admin
        if coleccion in ("progreso_temas", "sesiones") and excluir_uid_admin:
            data = doc.to_dict() or {}
            if data.get("uid") == excluir_uid_admin:
                omitidos += 1
                continue
        total += 1

    return total, omitidos


# ─────────────────────────────────────────────
# OBTENER UID DEL ADMIN
# ─────────────────────────────────────────────
def obtener_uid_admin(db):
    """Busca el UID del admin por email en la colección users."""
    docs = db.collection("users").where("email", "==", ADMIN_EMAIL).stream()
    for doc in docs:
        uid = doc.id
        print(verde(f"✅ Admin encontrado: {ADMIN_EMAIL} → UID: {uid}"))
        return uid

    print(amarillo(f"⚠️  No se encontró el admin ({ADMIN_EMAIL}) en Firestore."))
    print(dim("   Sus datos de progreso y sesiones NO serán protegidos."))
    return None


# ─────────────────────────────────────────────
# BORRAR COLECCIÓN (con filtro)
# ─────────────────────────────────────────────
def borrar_coleccion(db, coleccion, excluir_uid_admin=None):
    from google.cloud.firestore_v1 import base_client

    borrados = 0
    omitidos = 0
    batch = db.batch()
    count_en_batch = 0

    docs = db.collection(coleccion).stream()

    for doc in docs:
        debe_omitir = False

        if coleccion == "users" and excluir_uid_admin:
            if doc.id == excluir_uid_admin:
                debe_omitir = True

        if coleccion in ("progreso_temas", "sesiones") and excluir_uid_admin:
            data = doc.to_dict() or {}
            if data.get("uid") == excluir_uid_admin:
                debe_omitir = True

        if debe_omitir:
            omitidos += 1
            continue

        batch.delete(doc.reference)
        count_en_batch += 1
        borrados += 1

        # Confirmar batch cuando llegue al límite
        if count_en_batch >= BATCH_SIZE:
            batch.commit()
            batch = db.batch()
            count_en_batch = 0
            print(dim(f"   ... {borrados} documentos borrados hasta ahora"))

    # Commit del último batch
    if count_en_batch > 0:
        batch.commit()

    return borrados, omitidos


# ─────────────────────────────────────────────
# MAIN
# ─────────────────────────────────────────────
def main():
    print(f"\n{negrita('='*60)}")
    print(negrita("  🗑️  LIMPIEZA DE BASE DE DATOS FIREBASE"))
    print(negrita('='*60))
    print(dim(f"  Admin protegido: {ADMIN_EMAIL}"))
    print(negrita('='*60) + "\n")

    # 1. Verificar dependencias
    if not verificar_dependencias():
        sys.exit(1)

    # 2. Obtener service account
    sa_path = obtener_service_account()

    # 3. Conectar a Firebase
    print(f"\n{azul('🔌 Conectando a Firebase...')}")
    db = inicializar_firebase(sa_path)

    # 4. Obtener UID del admin
    print(f"\n{azul('🔍 Buscando usuario admin...')}")
    uid_admin = obtener_uid_admin(db)

    # 5. Mostrar resumen de lo que se va a borrar
    print(f"\n{azul('📊 Analizando datos...')}")
    resumen = {}
    total_general = 0

    for col in COLECCIONES:
        n, omit = contar_documentos(db, col, uid_admin)
        resumen[col] = {"borrar": n, "omitir": omit}
        total_general += n
        print(f"   • {col:<20} {rojo(str(n) + ' a borrar'):>25}  {verde('  ' + str(omit) + ' protegidos'):>20}")

    print(f"\n   {negrita('TOTAL A BORRAR: ' + rojo(str(total_general) + ' documentos'))}")

    if total_general == 0:
        print(verde("\n✅ La base de datos ya está vacía (sin datos de alumnos). Nada que borrar."))
        return

    # 6. Confirmación
    print(f"\n{amarillo('⚠️  ATENCIÓN: Esta operación NO se puede deshacer.')}")
    print(amarillo("   Se borrarán PERMANENTEMENTE los datos de todos los alumnos.\n"))

    confirmacion = input(f"   Escribí {negrita('CONFIRMAR')} para continuar: ").strip()

    if confirmacion != "CONFIRMAR":
        print(rojo("\n❌ Operación cancelada."))
        return

    # 7. Borrar
    print(f"\n{azul('🗑️  Borrando datos...')}\n")

    for col in COLECCIONES:
        n_esperado = resumen[col]["borrar"]
        if n_esperado == 0:
            print(dim(f"   ⏭  {col}: sin documentos que borrar"))
            continue

        print(f"   Borrando {col}...")
        borrados, omitidos = borrar_coleccion(db, col, uid_admin)
        print(verde(f"   ✅ {col}: {borrados} borrados, {omitidos} protegidos"))

    # 8. Resumen final
    print(f"\n{negrita('='*60)}")
    print(verde(f"  ✅ Limpieza completada exitosamente"))
    print(dim(f"  El admin ({ADMIN_EMAIL}) y sus datos están intactos."))
    print(negrita('='*60) + "\n")


if __name__ == "__main__":
    main()
