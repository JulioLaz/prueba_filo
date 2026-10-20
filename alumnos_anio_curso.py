#!/usr/bin/env python3
# -*- coding: utf-8 -*-
'''
alumnos_anio_curso.py
Reporte de alumnos activos en el año en curso y limpieza de los anteriores.

Qué hace:
  1. Lista TODAS las cuentas de Firebase Authentication con su fecha de
     creación y su última actividad (último ingreso o renovación de sesión,
     y el lastLogin del perfil si existe).
  2. Las cruza con la colección "users" (nombres, apellidos, nickname,
     curso, rol) y cuenta sus documentos de progreso y sesiones.
  3. Clasifica cada cuenta como ACTIVA (tuvo actividad desde el 1/1 del
     año indicado) o ANTERIOR. El admin nunca se clasifica para borrar.
  4. Exporta un Excel con hojas "activos", "anteriores" y
     "perfiles_sin_cuenta" en la carpeta reportes_alumnos/.
  5. Solo con --borrar: guarda un backup JSON de los datos de los
     alumnos ANTERIORES y, tras confirmar escribiendo BORRAR, elimina su
     cuenta de Authentication, su perfil (users), su progreso
     (progreso_temas) y sus sesiones (sesiones).

Uso:
  python alumnos_anio_curso.py                         # solo reporte
  python alumnos_anio_curso.py --anio 2026             # año a considerar
  python alumnos_anio_curso.py --borrar                # reporte + borrado
  python alumnos_anio_curso.py --sa ruta\\clave.json    # service account

Requiere: pip install firebase-admin pandas openpyxl

Versión: v1.0.0 (2026-10-20) — versión inicial
'''

import sys
import json
import argparse
from datetime import datetime, timezone
from pathlib import Path

import pandas as pd

__version__ = "1.0.0"

# ─────────────────────────────────────────────
# CONFIGURACIÓN
# ─────────────────────────────────────────────
ADMIN_EMAIL = "julioalbertolazarte00@gmail.com"
CARPETA_SALIDA = Path(__file__).resolve().parent / "reportes_alumnos"
TAMANIO_LOTE = 400          # escrituras por batch de Firestore (máx. 500)


# ─────────────────────────────────────────────
# ARGUMENTOS Y CONEXIÓN
# ─────────────────────────────────────────────
def leer_argumentos():
    parser = argparse.ArgumentParser(description="Alumnos activos del año en curso")
    parser.add_argument("--anio", type=int, default=datetime.now().year,
                        help="Año en curso (por defecto, el actual)")
    parser.add_argument("--borrar", action="store_true",
                        help="Borra los alumnos sin actividad en el año indicado")
    parser.add_argument("--sa", default=None,
                        help="Ruta al JSON de la service account de Firebase")
    return parser.parse_args()


def obtener_service_account(ruta):
    if ruta:
        if Path(ruta).exists():
            return ruta
        print(f"❌ No se encontró el archivo: {ruta}")
        sys.exit(1)

    carpeta = Path(__file__).resolve().parent
    candidatos = list(carpeta.glob("*firebase-adminsdk*.json")) + list(Path(".").glob("*firebase-adminsdk*.json"))
    if candidatos:
        print(f"🔍 Service account encontrada: {candidatos[0]}")
        return str(candidatos[0])

    ruta = input("📄 Ruta al JSON de la service account: ").strip().strip('"')
    if not Path(ruta).exists():
        print(f"❌ No se encontró el archivo: {ruta}")
        sys.exit(1)
    return ruta


def conectar_firebase(service_account):
    import firebase_admin
    from firebase_admin import credentials, firestore

    firebase_admin.initialize_app(credentials.Certificate(service_account))
    print("✅ Firebase conectado")
    return firestore.client()


# ─────────────────────────────────────────────
# LECTURA DE DATOS
# ─────────────────────────────────────────────
def ms_a_fecha(ms):
    return datetime.fromtimestamp(ms / 1000, tz=timezone.utc) if ms else None


def a_fecha(valor):
    """Convierte Timestamp de Firestore / datetime a datetime UTC."""
    if valor is None or not hasattr(valor, "year"):
        return None
    return valor if valor.tzinfo else valor.replace(tzinfo=timezone.utc)


def leer_cuentas_auth():
    from firebase_admin import auth

    cuentas = []
    for u in auth.list_users().iterate_all():
        meta = u.user_metadata
        cuentas.append({
            "uid": u.uid,
            "email_auth": (u.email or "").lower(),
            "creado": ms_a_fecha(meta.creation_timestamp),
            "ultimo_ingreso": ms_a_fecha(meta.last_sign_in_timestamp),
            "ultima_renovacion": ms_a_fecha(getattr(meta, "last_refresh_timestamp", None)),
        })
    print(f"👥 Cuentas en Authentication: {len(cuentas)}")
    return cuentas


def leer_coleccion(db, nombre):
    docs = {d.id: d.to_dict() for d in db.collection(nombre).stream()}
    print(f"📚 {nombre}: {len(docs)} documentos")
    return docs


def agrupar_por_uid(docs):
    grupos = {}
    for doc_id, data in docs.items():
        uid = (data or {}).get("uid")
        if uid:
            grupos.setdefault(uid, []).append(doc_id)
    return grupos


# ─────────────────────────────────────────────
# CLASIFICACIÓN
# ─────────────────────────────────────────────
def construir_tabla(cuentas, perfiles, progreso_por_uid, sesiones_por_uid, anio):
    inicio_anio = datetime(anio, 1, 1, tzinfo=timezone.utc)
    filas = []
    for c in cuentas:
        perfil = perfiles.get(c["uid"], {})
        fechas = [c["ultimo_ingreso"], c["ultima_renovacion"], a_fecha(perfil.get("lastLogin"))]
        fechas = [f for f in fechas if f]
        ultima_actividad = max(fechas) if fechas else c["creado"]

        es_admin = c["email_auth"] == ADMIN_EMAIL or perfil.get("role") == "admin"
        filas.append({
            "uid": c["uid"],
            "email": c["email_auth"],
            "apellidos": perfil.get("apellidos", ""),
            "nombres": perfil.get("nombres", ""),
            "nickname": perfil.get("nickname", ""),
            "curso": perfil.get("curso", ""),
            "rol": "admin" if es_admin else perfil.get("role", "sin perfil"),
            "tiene_perfil": c["uid"] in perfiles,
            "creado": c["creado"],
            "ultima_actividad": ultima_actividad,
            "docs_progreso": len(progreso_por_uid.get(c["uid"], [])),
            "docs_sesiones": len(sesiones_por_uid.get(c["uid"], [])),
            "activo_anio": bool(ultima_actividad and ultima_actividad >= inicio_anio),
            "es_admin": es_admin,
        })

    df = pd.DataFrame(filas)
    if df.empty:
        return df
    return df.sort_values(["activo_anio", "curso", "apellidos", "nombres"],
                          ascending=[False, True, True, True]).reset_index(drop=True)


def perfiles_sin_cuenta(perfiles, cuentas):
    uids_auth = {c["uid"] for c in cuentas}
    return pd.DataFrame([
        {"uid": uid, "email": p.get("email", ""), "apellidos": p.get("apellidos", ""),
         "nombres": p.get("nombres", ""), "curso": p.get("curso", "")}
        for uid, p in perfiles.items() if uid not in uids_auth
    ])


# ─────────────────────────────────────────────
# EXPORTACIÓN
# ─────────────────────────────────────────────
def exportar_excel(df, huerfanos, anio):
    CARPETA_SALIDA.mkdir(exist_ok=True)
    ruta = CARPETA_SALIDA / f"alumnos_{anio}_{datetime.now():%Y%m%d_%H%M}.xlsx"

    def sin_tz(tabla):
        tabla = tabla.copy()
        for col in ("creado", "ultima_actividad"):
            if col in tabla:
                tabla[col] = pd.to_datetime(tabla[col], utc=True).dt.tz_localize(None)
        return tabla

    with pd.ExcelWriter(ruta, engine="openpyxl") as xls:
        if df.empty:
            pd.DataFrame().to_excel(xls, sheet_name="activos", index=False)
        else:
            sin_tz(df[df["activo_anio"]]).to_excel(xls, sheet_name="activos", index=False)
            sin_tz(df[~df["activo_anio"]]).to_excel(xls, sheet_name="anteriores", index=False)
        huerfanos.to_excel(xls, sheet_name="perfiles_sin_cuenta", index=False)

    print(f"📊 Excel generado: {ruta}")
    return ruta


def serializar(valor):
    if hasattr(valor, "isoformat"):
        return valor.isoformat()
    return str(valor)


def guardar_backup(a_borrar, perfiles, progreso, sesiones, progreso_por_uid, sesiones_por_uid, anio):
    CARPETA_SALIDA.mkdir(exist_ok=True)
    ruta = CARPETA_SALIDA / f"backup_borrado_{anio}_{datetime.now():%Y%m%d_%H%M}.json"
    backup = {
        uid: {
            "users": perfiles.get(uid),
            "progreso_temas": {d: progreso[d] for d in progreso_por_uid.get(uid, [])},
            "sesiones": {d: sesiones[d] for d in sesiones_por_uid.get(uid, [])},
        }
        for uid in a_borrar["uid"]
    }
    ruta.write_text(json.dumps(backup, ensure_ascii=False, indent=2, default=serializar), encoding="utf-8")
    print(f"💾 Backup guardado: {ruta}")
    return ruta


# ─────────────────────────────────────────────
# BORRADO
# ─────────────────────────────────────────────
def borrar_documentos(db, coleccion, ids):
    ids = list(ids)
    for i in range(0, len(ids), TAMANIO_LOTE):
        batch = db.batch()
        for doc_id in ids[i:i + TAMANIO_LOTE]:
            batch.delete(db.collection(coleccion).document(doc_id))
        batch.commit()
    print(f"🗑️  {coleccion}: {len(ids)} documentos borrados")


def borrar_alumnos(db, a_borrar, perfiles, progreso_por_uid, sesiones_por_uid):
    from firebase_admin import auth

    uids = list(a_borrar["uid"])
    borrar_documentos(db, "progreso_temas", [d for u in uids for d in progreso_por_uid.get(u, [])])
    borrar_documentos(db, "sesiones", [d for u in uids for d in sesiones_por_uid.get(u, [])])
    borrar_documentos(db, "users", [u for u in uids if u in perfiles])

    fallidos = 0
    for i in range(0, len(uids), 1000):
        resultado = auth.delete_users(uids[i:i + 1000])
        fallidos += resultado.failure_count
        for err in resultado.errors:
            print(f"   ⚠️  No se pudo borrar la cuenta {uids[i + err.index]}: {err.reason}")
    print(f"🗑️  Authentication: {len(uids) - fallidos} cuentas borradas, {fallidos} con error")


# ─────────────────────────────────────────────
# PRINCIPAL
# ─────────────────────────────────────────────
def main_alumnos_anio_curso():
    args = leer_argumentos()
    print(f"\n🎓 Alumnos del año {args.anio}  (v{__version__})\n")

    db = conectar_firebase(obtener_service_account(args.sa))

    cuentas = leer_cuentas_auth()
    perfiles = leer_coleccion(db, "users")
    progreso = leer_coleccion(db, "progreso_temas")
    sesiones = leer_coleccion(db, "sesiones")
    progreso_por_uid = agrupar_por_uid(progreso)
    sesiones_por_uid = agrupar_por_uid(sesiones)

    df = construir_tabla(cuentas, perfiles, progreso_por_uid, sesiones_por_uid, args.anio)
    huerfanos = perfiles_sin_cuenta(perfiles, cuentas)
    exportar_excel(df, huerfanos, args.anio)

    if df.empty:
        print("ℹ️  No hay cuentas en Authentication.")
        return

    activos = df[df["activo_anio"]]
    a_borrar = df[~df["activo_anio"] & ~df["es_admin"]]

    print(f"\n✅ Activos en {args.anio}: {len(activos)}")
    print(activos.groupby("curso").size().to_string() if not activos.empty else "   (ninguno)")
    print(f"\n💤 Sin actividad en {args.anio}: {len(a_borrar)}")
    if not a_borrar.empty:
        vista = a_borrar[["email", "apellidos", "nombres", "curso", "ultima_actividad"]].copy()
        vista["ultima_actividad"] = pd.to_datetime(vista["ultima_actividad"], utc=True).dt.strftime("%Y-%m-%d")
        print(vista.to_string(index=False))
    if not huerfanos.empty:
        print(f"\n⚠️  Perfiles en 'users' sin cuenta en Authentication: {len(huerfanos)} (ver Excel)")

    if not args.borrar:
        print("\nℹ️  Solo reporte. Para borrar a los alumnos sin actividad, ejecutá con --borrar")
        return
    if a_borrar.empty:
        print("\nℹ️  No hay alumnos para borrar.")
        return

    guardar_backup(a_borrar, perfiles, progreso, sesiones, progreso_por_uid, sesiones_por_uid, args.anio)

    print(f"\n⚠️  Se borrarán {len(a_borrar)} cuentas con su perfil, progreso y sesiones.")
    print("   Esta acción NO se puede deshacer (salvo reimportando el backup).")
    if input("   Escribí BORRAR para confirmar: ").strip() != "BORRAR":
        print("❎ Cancelado. No se borró nada.")
        return

    borrar_alumnos(db, a_borrar, perfiles, progreso_por_uid, sesiones_por_uid)
    print("\n🎉 Limpieza terminada.")


if __name__ == "__main__":
    main_alumnos_anio_curso()
