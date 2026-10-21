#!/usr/bin/env python3
# -*- coding: utf-8 -*-
'''
verificar_email_admin.py
Marca como verificado el email de la cuenta administradora en Firebase
Authentication.

Por qué: las reglas de Firestore (firestore.rules) solo reconocen al admin si
su email está verificado (email_verified == true). Sin eso, el panel de
progreso de los alumnos da "permisos insuficientes".

Qué hace:
  1. Busca la cuenta del ADMIN_EMAIL en Authentication.
  2. Muestra si el email está verificado.
  3. Si no lo está, lo marca como verificado (no cambia nada más).

Después de correrlo: cerrar sesión en la app y volver a entrar.

Uso:
  python verificar_email_admin.py                       # busca la clave *firebase-adminsdk*.json
  python verificar_email_admin.py --sa ruta\\clave.json  # o se la pasás

Requiere: pip install firebase-admin

Versión: v1.0.0 (2026-10-21) — versión inicial
'''

import sys
import argparse
from pathlib import Path

__version__ = "1.0.0"

# ─────────────────────────────────────────────
# CONFIGURACIÓN
# ─────────────────────────────────────────────
ADMIN_EMAIL = "julioalbertolazarte00@gmail.com"


def leer_argumentos():
    parser = argparse.ArgumentParser(description="Verifica el email del administrador en Firebase")
    parser.add_argument("--sa", default=None, help="Ruta al JSON de la service account de Firebase")
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


def main_verificar_email_admin():
    args = leer_argumentos()
    print(f"\n🔐 Verificar email del administrador  (v{__version__})\n")

    import firebase_admin
    from firebase_admin import credentials, auth

    firebase_admin.initialize_app(credentials.Certificate(obtener_service_account(args.sa)))

    try:
        usuario = auth.get_user_by_email(ADMIN_EMAIL)
    except auth.UserNotFoundError:
        print(f"❌ No existe ninguna cuenta con el email {ADMIN_EMAIL}")
        sys.exit(1)

    print(f"👤 Cuenta: {usuario.email} (uid: {usuario.uid})")
    print(f"   Email verificado: {'✅ sí' if usuario.email_verified else '❌ no'}")

    if usuario.email_verified:
        print("\nℹ️  Ya estaba verificado: no hace falta cambiar nada.")
        print("   Si el panel sigue sin cargar, cerrá sesión en la app y volvé a entrar.")
        return

    auth.update_user(usuario.uid, email_verified=True)
    print("\n✅ Email marcado como verificado.")
    print("👉 Ahora cerrá sesión en la app y volvé a entrar para que el panel cargue.")


if __name__ == "__main__":
    main_verificar_email_admin()
