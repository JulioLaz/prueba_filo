'''
Script simple para consultar IA via OpenRouter con selección automática de modelo.
Si un modelo falla por rate limit (429) o no existe (404), prueba el siguiente.
Requiere: OPENROUTER_KEY en archivo .env
'''

# ═══════════════════════════════════════
# gemini_simple.py
# Versión: 2.0
# Cambios:
#   v1.0 - Script inicial. Consulta simple via OpenRouter.
#   v2.0 - Selección automática de modelo por descarte (429/404).
# ═══════════════════════════════════════

import os
import requests
from dotenv import load_dotenv
from datetime import datetime

# Ajustá la ruta a tu .env si es necesario
load_dotenv(r'C:\JulioPrograma\prueba_filo\prueba_filo\functions\.env')

API_KEY = os.getenv("OPENROUTER_KEY")
ENDPOINT = "https://openrouter.ai/api/v1/chat/completions"
MAX_TOKENS = 300

# Lista de modelos en orden de preferencia (se prueban uno a uno)
MODELOS_PREFERIDOS = [
    "google/gemma-3-27b-it:free",
    "meta-llama/llama-3.3-70b-instruct:free",
    "mistralai/mistral-small-3.1-24b-instruct:free",
    "google/gemma-3-12b-it:free",
    "google/gemma-3-4b-it:free",
    "qwen/qwen3-4b:free",
    "meta-llama/llama-3.2-3b-instruct:free",
]

ERRORES_REINTENTABLES = {429, 404, 503}


def consultar_modelo(modelo: str, pregunta: str):
    """Intenta consultar un modelo. Retorna (response, status_code)."""
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json",
    }
    payload = {
        "model": modelo,
        "max_tokens": MAX_TOKENS,
        "messages": [{"role": "user", "content": pregunta}]
    }
    response = requests.post(ENDPOINT, headers=headers, json=payload, timeout=30)
    return response, response.status_code


def consultar_con_descarte(pregunta: str) -> tuple:
    """Prueba modelos en orden hasta que uno responda OK. Retorna (respuesta, modelo_usado)."""
    for modelo in MODELOS_PREFERIDOS:
        print(f"   🔄 Probando: {modelo}...", end=" ", flush=True)
        try:
            response, status = consultar_modelo(modelo, pregunta)

            if status == 200:
                print("✅")
                respuesta = response.json()["choices"][0]["message"]["content"]
                return respuesta, modelo

            elif status in ERRORES_REINTENTABLES:
                print(f"⚠️  {status} — pasando al siguiente")
                continue

            else:
                print(f"❌ Error {status} inesperado — abortando")
                response.raise_for_status()

        except requests.exceptions.Timeout:
            print("⏱️  Timeout — pasando al siguiente")
            continue

    raise RuntimeError("❌ Ningún modelo disponible respondió correctamente.")


def main_gemini_simple():
    print(f"\n🤖 Gemini Simple v2.0 | {datetime.now().strftime('%H:%M:%S')}")
    print(f"   Max tokens: {MAX_TOKENS} | Modelos en lista: {len(MODELOS_PREFERIDOS)}")
    print("─" * 55)

    pregunta = input("❓ Tu pregunta: ").strip()
    if not pregunta:
        print("⚠️  Pregunta vacía. Saliendo.")
        return

    print("\n⏳ Consultando...")
    inicio = datetime.now()

    respuesta, modelo_usado = consultar_con_descarte(pregunta)

    elapsed = (datetime.now() - inicio).total_seconds()
    print(f"\n💬 Respuesta ({elapsed:.1f}s) — modelo: {modelo_usado}\n")
    print(respuesta)
    print("\n" + "─" * 55)


if __name__ == "__main__":
    main_gemini_simple()