#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
🔍 Script para analizar configuración de Firebase en tu proyecto
Detecta si usas Firebase Functions, Hosting, y dónde están tus API keys
"""

import os
import json
from pathlib import Path
from typing import Dict, List, Optional

# ═══════════════════════════════════════════════════════════════════════════
# 🎨 COLORES PARA TERMINAL
# ═══════════════════════════════════════════════════════════════════════════

class Colors:
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    BOLD = '\033[1m'
    ENDC = '\033[0m'
    DIM = '\033[2m'

# ═══════════════════════════════════════════════════════════════════════════
# 🔎 ANALIZADOR DE ESTRUCTURA
# ═══════════════════════════════════════════════════════════════════════════

class FirebaseProjectAnalyzer:
    """Analiza la estructura y configuración de Firebase"""
    
    def __init__(self, project_root: str = "."):
        self.root = Path(project_root)
        self.findings = {
            'firebase_json': None,
            'firebaserc': None,
            'functions_dir': None,
            'env_files': [],
            'firebase_keys': [],
            'package_json': None,
            'config_files': []
        }
    
    def analyze(self) -> Dict:
        """Ejecuta análisis completo"""
        print(f"\n{Colors.BOLD}{Colors.OKBLUE}🔍 Analizando estructura de Firebase...{Colors.ENDC}\n")
        
        self.check_firebase_json()
        self.check_firebaserc()
        self.check_functions_dir()
        self.check_env_files()
        self.check_firebase_keys_in_code()
        self.check_package_json()
        
        return self.findings
    
    def check_firebase_json(self):
        """Busca firebase.json"""
        firebase_json = self.root / "firebase.json"
        
        if firebase_json.exists():
            try:
                with open(firebase_json, 'r') as f:
                    content = json.load(f)
                self.findings['firebase_json'] = {
                    'exists': True,
                    'path': str(firebase_json),
                    'config': content
                }
                print(f"{Colors.OKGREEN}✅ firebase.json encontrado{Colors.ENDC}")
            except Exception as e:
                print(f"{Colors.FAIL}❌ Error leyendo firebase.json: {e}{Colors.ENDC}")
        else:
            print(f"{Colors.WARNING}⚠️  firebase.json NO encontrado{Colors.ENDC}")
    
    def check_firebaserc(self):
        """Busca .firebaserc"""
        firebaserc = self.root / ".firebaserc"
        
        if firebaserc.exists():
            try:
                with open(firebaserc, 'r') as f:
                    content = json.load(f)
                self.findings['firebaserc'] = {
                    'exists': True,
                    'path': str(firebaserc),
                    'projects': list(content.get('projects', {}).keys())
                }
                print(f"{Colors.OKGREEN}✅ .firebaserc encontrado{Colors.ENDC}")
                print(f"   Proyectos configurados: {', '.join(content.get('projects', {}).keys())}")
            except Exception as e:
                print(f"{Colors.FAIL}❌ Error leyendo .firebaserc: {e}{Colors.ENDC}")
        else:
            print(f"{Colors.WARNING}⚠️  .firebaserc NO encontrado{Colors.ENDC}")
    
    def check_functions_dir(self):
        """Busca carpeta functions/"""
        functions_dir = self.root / "functions"
        
        if functions_dir.exists() and functions_dir.is_dir():
            self.findings['functions_dir'] = {
                'exists': True,
                'path': str(functions_dir),
                'files': list(functions_dir.glob('*.js'))[:5],
                'has_package_json': (functions_dir / "package.json").exists(),
                'has_runtimeconfig': (functions_dir / ".runtimeconfig.json").exists()
            }
            print(f"{Colors.OKGREEN}✅ Carpeta 'functions/' encontrada{Colors.ENDC}")
            print(f"   Archivos: {len(list(functions_dir.glob('*.js')))}")
            
            if (functions_dir / ".runtimeconfig.json").exists():
                print(f"{Colors.OKBLUE}   → Archivo .runtimeconfig.json (contiene config:set){Colors.ENDC}")
        else:
            print(f"{Colors.DIM}ℹ️  Carpeta 'functions/' NO encontrada (no usas Cloud Functions){Colors.ENDC}")
    
    def check_env_files(self):
        """Busca archivos .env"""
        env_files = [
            ".env",
            ".env.local",
            ".env.production",
            ".env.development"
        ]
        
        found_envs = []
        for env_file in env_files:
            path = self.root / env_file
            if path.exists():
                found_envs.append(env_file)
                self.findings['env_files'].append(env_file)
        
        if found_envs:
            print(f"{Colors.OKGREEN}✅ Archivos .env encontrados:{Colors.ENDC}")
            for env in found_envs:
                print(f"   • {env}")
        else:
            print(f"{Colors.WARNING}⚠️  Archivos .env NO encontrados{Colors.ENDC}")
    
    def check_firebase_keys_in_code(self):
        """Busca API keys en archivos JS"""
        js_files = list(self.root.glob("**/*.js"))[:20]  # Primeros 20 archivos
        
        api_key_found_in = []
        
        for js_file in js_files:
            try:
                if ".git" in str(js_file) or "node_modules" in str(js_file):
                    continue
                
                with open(js_file, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                    
                if "AIzaSyA8" in content or "apiKey:" in content:
                    api_key_found_in.append(str(js_file))
            except:
                pass
        
        if api_key_found_in:
            print(f"{Colors.FAIL}⚠️  API keys encontradas en código:{Colors.ENDC}")
            for file in api_key_found_in[:5]:
                print(f"   • {file}")
            self.findings['firebase_keys'] = api_key_found_in
        else:
            print(f"{Colors.OKGREEN}✅ API keys NO encontradas en código JS{Colors.ENDC}")
    
    def check_package_json(self):
        """Revisa package.json para dependencias"""
        package_json = self.root / "package.json"
        
        if package_json.exists():
            try:
                with open(package_json, 'r') as f:
                    content = json.load(f)
                
                deps = content.get('dependencies', {})
                dev_deps = content.get('devDependencies', {})
                
                firebase_deps = {
                    'firebase': deps.get('firebase') or dev_deps.get('firebase'),
                    'firebase-tools': deps.get('firebase-tools') or dev_deps.get('firebase-tools'),
                    'firebase-admin': deps.get('firebase-admin') or dev_deps.get('firebase-admin')
                }
                
                self.findings['package_json'] = {
                    'path': str(package_json),
                    'firebase_deps': {k: v for k, v in firebase_deps.items() if v}
                }
                
                print(f"{Colors.OKGREEN}✅ package.json analizado:{Colors.ENDC}")
                for key, version in self.findings['package_json']['firebase_deps'].items():
                    print(f"   • {key}: {version}")
            except Exception as e:
                print(f"{Colors.FAIL}❌ Error leyendo package.json: {e}{Colors.ENDC}")

# ═══════════════════════════════════════════════════════════════════════════
# 📊 GENERADOR DE REPORTE
# ═══════════════════════════════════════════════════════════════════════════

def generate_report(findings: Dict):
    """Genera reporte y recomendaciones"""
    
    print(f"\n{Colors.BOLD}{Colors.OKBLUE}{'='*75}{Colors.ENDC}")
    print(f"{Colors.BOLD}{Colors.OKBLUE}📊 ANÁLISIS DE CONFIGURACIÓN{Colors.ENDC}")
    print(f"{Colors.BOLD}{Colors.OKBLUE}{'='*75}{Colors.ENDC}\n")
    
    # Determinar qué está usando
    has_functions = findings.get('functions_dir', {}).get('exists', False)
    has_firebaserc = findings.get('firebaserc', {}).get('exists', False)
    has_env = len(findings.get('env_files', [])) > 0
    has_keys_in_code = len(findings.get('firebase_keys', [])) > 0
    
    print(f"{Colors.BOLD}🔧 SETUP DETECTADO:{Colors.ENDC}\n")
    print(f"  Firebase Hosting: {'✅' if has_firebaserc else '❌'}")
    print(f"  Cloud Functions: {'✅' if has_functions else '❌'}")
    print(f"  Variables .env: {'✅' if has_env else '❌'}")
    print(f"  API Keys expuestas: {'⚠️ SÍ' if has_keys_in_code else '✅ NO'}\n")
    
    # Recomendaciones
    print(f"{Colors.BOLD}💡 RECOMENDACIONES:{Colors.ENDC}\n")
    
    if has_functions:
        print(f"{Colors.OKBLUE}→ Tienes Cloud Functions:{Colors.ENDC}")
        print(f"  1. Las API keys de cliente pueden estar en .runtimeconfig.json")
        print(f"  2. Ejecuta: {Colors.BOLD}firebase functions:config:get{Colors.ENDC}")
        print(f"  3. O revisa: {Colors.BOLD}functions/.runtimeconfig.json{Colors.ENDC}\n")
    else:
        print(f"{Colors.OKBLUE}→ No tienes Cloud Functions:{Colors.ENDC}")
        print(f"  Tu proyecto usa solo Hosting + Firestore (cliente)")
        print(f"  Usa variables .env como se recomienda\n")
    
    if has_keys_in_code:
        print(f"{Colors.FAIL}⚠️  IMPORTANTE:{Colors.ENDC}")
        print(f"  Tus API keys están visibles en el código JS")
        print(f"  Debes ocultarlas usando:")
        print(f"  • Variables de entorno (.env)")
        print(f"  • Firebase Functions config:set (si usas Functions)")
        print(f"  • Variables del build tool (Vite, webpack, etc.)\n")

# ═══════════════════════════════════════════════════════════════════════════
# 🚀 EJECUCIÓN
# ═══════════════════════════════════════════════════════════════════════════

if __name__ == "__main__":
    import sys
    
    project_path = sys.argv[1] if len(sys.argv) > 1 else "."
    
    print(f"\n{Colors.BOLD}🔍 Verificador de Configuración Firebase{Colors.ENDC}")
    print(f"{Colors.DIM}Proyecto: {os.path.abspath(project_path)}{Colors.ENDC}")
    
    analyzer = FirebaseProjectAnalyzer(project_path)
    findings = analyzer.analyze()
    
    generate_report(findings)
    
    print(f"{Colors.BOLD}{Colors.OKBLUE}{'='*75}{Colors.ENDC}\n")

   #  C:\JulioPrograma\prueba_filo\prueba_filo\check_firebase_setup.py