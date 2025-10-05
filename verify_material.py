#!/usr/bin/env python3
import time
import json
import re
from pathlib import Path
from typing import Dict, List, Tuple
from datetime import datetime

# ═══════════════════════════════════════════════════════════════════════════
# CONFIGURACIÓN
# ═══════════════════════════════════════════════════════════════════════════

COLORES = {
    'HEADER': '\033[95m',
    'OKBLUE': '\033[94m',
    'OKCYAN': '\033[96m',
    'OKGREEN': '\033[92m',
    'WARNING': '\033[93m',
    'FAIL': '\033[91m',
    'ENDC': '\033[0m',
    'BOLD': '\033[1m',
    'UNDERLINE': '\033[4m',
}

def print_color(text: str, color: str = 'ENDC', bold: bool = False):
    """Imprime texto con color."""
    prefix = COLORES['BOLD'] if bold else ''
    print(f"{prefix}{COLORES[color]}{text}{COLORES['ENDC']}")

def print_box(title: str, content: List[str], color: str = 'OKBLUE'):
    """Imprime un cuadro formateado."""
    width = max(len(line) for line in [title] + content) + 4
    
    print_color('╔' + '═' * width + '╗', color, bold=True)
    print_color(f'║ {title.center(width - 2)} ║', color, bold=True)
    print_color('╠' + '═' * width + '╣', color)
    
    for line in content:
        print_color(f'║ {line.ljust(width - 2)} ║', color)
    
    print_color('╚' + '═' * width + '╝', color)
    print()

def print_separator():
    """Imprime un separador visual."""
    print_color('─' * 80, 'OKBLUE')

# ═══════════════════════════════════════════════════════════════════════════
# FUNCIONES DE VERIFICACIÓN
# ═══════════════════════════════════════════════════════════════════════════

def verificar_archivo(ruta: Path, nombre: str) -> Tuple[bool, str]:
    """Verifica si un archivo existe."""
    inicio = time.time()
    
    existe = ruta.exists()
    tiempo = (time.time() - inicio) * 1000
    
    status = "✅ ENCONTRADO" if existe else "❌ FALTANTE"
    mensaje = f"{status} - {nombre} ({tiempo:.2f}ms)"
    
    return existe, mensaje

def buscar_patron_en_archivo(ruta: Path, patron: str, descripcion: str) -> Tuple[bool, str, int]:
    """Busca un patrón en un archivo y cuenta coincidencias."""
    inicio = time.time()
    
    try:
        contenido = ruta.read_text(encoding='utf-8')
        coincidencias = len(re.findall(patron, contenido, re.IGNORECASE))
        encontrado = coincidencias > 0
        tiempo = (time.time() - inicio) * 1000
        
        status = "✅ ENCONTRADO" if encontrado else "❌ NO ENCONTRADO"
        mensaje = f"{status} - {descripcion} ({coincidencias} veces, {tiempo:.2f}ms)"
        
        return encontrado, mensaje, coincidencias
    
    except Exception as e:
        tiempo = (time.time() - inicio) * 1000
        return False, f"❌ ERROR - {descripcion}: {str(e)} ({tiempo:.2f}ms)", 0

def verificar_estructura_firebase(ruta: Path) -> Tuple[bool, List[str]]:
    """Verifica que material-firebase.js tenga la estructura correcta."""
    inicio = time.time()
    resultados = []
    
    try:
        contenido = ruta.read_text(encoding='utf-8')
        
        # Verificar funciones críticas
        verificaciones = [
            ('loadPreviousProgress', 'Función para cargar progreso anterior'),
            ('saveMaterialProgress', 'Bridge a Firebase'),
            ('VALIDACIÓN 1.*Solo guardar si el progreso actual SUPERA', 'Validación de progreso'),
            ('MIN_CLOZE_FOR_APPROVAL', 'Configuración de aprobación (si aplica)'),
        ]
        
        todo_ok = True
        for patron, descripcion in verificaciones:
            encontrado = re.search(patron, contenido, re.IGNORECASE)
            if encontrado:
                resultados.append(f"  ✅ {descripcion}")
            else:
                resultados.append(f"  ❌ {descripcion}")
                todo_ok = False
        
        tiempo = (time.time() - inicio) * 1000
        resultados.append(f"\n  ⏱️  Análisis completado en {tiempo:.2f}ms")
        
        return todo_ok, resultados
    
    except Exception as e:
        return False, [f"  ❌ Error: {str(e)}"]

def verificar_readaloud_system(ruta: Path) -> Tuple[bool, List[str]]:
    """Verifica que readaloud-system.js envíe notificaciones."""
    inicio = time.time()
    resultados = []
    
    try:
        contenido = ruta.read_text(encoding='utf-8')
        
        # Buscar postMessage en funciones críticas
        tiene_postmessage = 'postMessage' in contenido
        
        if tiene_postmessage:
            # Contar cuántos postMessage hay
            count = contenido.count('postMessage')
            resultados.append(f"  ✅ Sistema de notificaciones presente ({count} llamadas)")
            
            # Verificar que esté en onSectionCompleted
            if 'onSectionCompleted' in contenido:
                section = contenido[contenido.find('onSectionCompleted'):contenido.find('onSectionCompleted') + 1000]
                if 'postMessage' in section or 'SECTION_COMPLETED' in section:
                    resultados.append(f"  ✅ Notificación en onSectionCompleted")
                else:
                    resultados.append(f"  ⚠️  onSectionCompleted sin notificación (agregar)")
            else:
                resultados.append(f"  ❌ Función onSectionCompleted no encontrada")
        else:
            resultados.append(f"  ❌ No se encontró sistema de notificaciones")
            resultados.append(f"  ⚠️  Agregar postMessage en onSectionCompleted")
        
        tiempo = (time.time() - inicio) * 1000
        resultados.append(f"\n  ⏱️  Análisis completado en {tiempo:.2f}ms")
        
        return tiene_postmessage, resultados
    
    except Exception as e:
        return False, [f"  ❌ Error: {str(e)}"]

def verificar_tema_html(ruta: Path) -> Tuple[bool, List[str]]:
    """Verifica la configuración en tema.html."""
    inicio = time.time()
    resultados = []
    
    try:
        contenido = ruta.read_text(encoding='utf-8')
        
        # Verificar que NO tenga el código problemático
        problemas = [
            ('bumpMaterialProgress\(1\)', 'Llamada problemática en load'),
            ('bumpMaterialProgress\(1\).*scroll', 'Llamada problemática en scroll'),
        ]
        
        tiene_problemas = False
        for patron, descripcion in problemas:
            if re.search(patron, contenido, re.IGNORECASE | re.DOTALL):
                resultados.append(f"  ⚠️  {descripcion} - DEBE ELIMINARSE")
                tiene_problemas = True
        
        # Verificar que tenga el parche
        tiene_parche = 'parche-material-progreso-real' in contenido
        
        if tiene_parche:
            resultados.append(f"  ✅ Parche de material incluido")
        else:
            resultados.append(f"  ❌ Parche de material NO incluido")
            resultados.append(f"  ⚠️  Agregar: <script src=\"js/parche-material-progreso-real.js\"></script>")
        
        # Verificar funciones de debug
        funciones_debug = [
            'checkMaterialReadingStatus',
            'forceSyncMaterialReading',
            'resetMaterialProgress'
        ]
        
        for func in funciones_debug:
            if func in contenido:
                resultados.append(f"  ✅ Función {func} disponible")
        
        tiempo = (time.time() - inicio) * 1000
        resultados.append(f"\n  ⏱️  Análisis completado en {tiempo:.2f}ms")
        
        return (tiene_parche and not tiene_problemas), resultados
    
    except Exception as e:
        return False, [f"  ❌ Error: {str(e)}"]

# ═══════════════════════════════════════════════════════════════════════════
# FUNCIÓN PRINCIPAL
# ═══════════════════════════════════════════════════════════════════════════

def main():
    """Ejecuta todas las verificaciones."""
    inicio_total = time.time()
    
    print_box(
        "SISTEMA DE VERIFICACIÓN - MATERIAL DE LECTURA",
        [
            "Verifica que el parche esté correctamente implementado",
            f"Fecha: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}"
        ],
        'HEADER'
    )
    
    # Definir rutas
    proyecto_root = Path.cwd()
    rutas = {
        'tema_html': proyecto_root / 'tema.html',
        'material_firebase': proyecto_root / 'js' / 'material-firebase.js',
        'readaloud_system': proyecto_root / 'js' / 'readaloud-system.js',
        'parche_material': proyecto_root / 'js' / 'parche-material-progreso-real.js',
        'content_html': proyecto_root / 'themes' / 'etica_aristoteles' / 'content.html',
    }
    
    resultados_globales = {
        'archivos': [],
        'firebase': [],
        'readaloud': [],
        'tema': [],
        'errores': []
    }
    
    # ══════════════════════════════════════════════════════════════════════
    # 1. VERIFICAR ARCHIVOS
    # ══════════════════════════════════════════════════════════════════════
    
    print_color("\n📁 VERIFICANDO ARCHIVOS...\n", 'OKCYAN', bold=True)
    
    for nombre, ruta in rutas.items():
        existe, mensaje = verificar_archivo(ruta, nombre)
        print_color(f"  {mensaje}", 'OKGREEN' if existe else 'FAIL')
        resultados_globales['archivos'].append((nombre, existe))
        
        if not existe:
            resultados_globales['errores'].append(f"Archivo faltante: {nombre}")
    
    print_separator()
    
    # ══════════════════════════════════════════════════════════════════════
    # 2. VERIFICAR MATERIAL-FIREBASE.JS
    # ══════════════════════════════════════════════════════════════════════
    
    if rutas['material_firebase'].exists():
        print_color("\n🔥 VERIFICANDO MATERIAL-FIREBASE.JS...\n", 'OKCYAN', bold=True)
        
        firebase_ok, firebase_resultados = verificar_estructura_firebase(rutas['material_firebase'])
        
        for resultado in firebase_resultados:
            color = 'OKGREEN' if '✅' in resultado else 'WARNING' if '⚠️' in resultado else 'FAIL'
            print_color(resultado, color)
        
        resultados_globales['firebase'] = firebase_resultados
        
        if not firebase_ok:
            resultados_globales['errores'].append("material-firebase.js incompleto")
        
        print_separator()
    
    # ══════════════════════════════════════════════════════════════════════
    # 3. VERIFICAR READALOUD-SYSTEM.JS
    # ══════════════════════════════════════════════════════════════════════
    
    if rutas['readaloud_system'].exists():
        print_color("\n🎤 VERIFICANDO READALOUD-SYSTEM.JS...\n", 'OKCYAN', bold=True)
        
        readaloud_ok, readaloud_resultados = verificar_readaloud_system(rutas['readaloud_system'])
        
        for resultado in readaloud_resultados:
            color = 'OKGREEN' if '✅' in resultado else 'WARNING' if '⚠️' in resultado else 'FAIL'
            print_color(resultado, color)
        
        resultados_globales['readaloud'] = readaloud_resultados
        
        if not readaloud_ok:
            resultados_globales['errores'].append("readaloud-system.js sin notificaciones")
        
        print_separator()
    
    # ══════════════════════════════════════════════════════════════════════
    # 4. VERIFICAR TEMA.HTML
    # ══════════════════════════════════════════════════════════════════════
    
    if rutas['tema_html'].exists():
        print_color("\n📄 VERIFICANDO TEMA.HTML...\n", 'OKCYAN', bold=True)
        
        tema_ok, tema_resultados = verificar_tema_html(rutas['tema_html'])
        
        for resultado in tema_resultados:
            color = 'OKGREEN' if '✅' in resultado else 'WARNING' if '⚠️' in resultado else 'FAIL'
            print_color(resultado, color)
        
        resultados_globales['tema'] = tema_resultados
        
        if not tema_ok:
            resultados_globales['errores'].append("tema.html necesita modificaciones")
        
        print_separator()
    
    # ══════════════════════════════════════════════════════════════════════
    # 5. RESUMEN FINAL
    # ══════════════════════════════════════════════════════════════════════
    
    tiempo_total = (time.time() - inicio_total) * 1000
    
    archivos_ok = all(existe for _, existe in resultados_globales['archivos'])
    todo_ok = archivos_ok and len(resultados_globales['errores']) == 0
    
    resumen = [
        f"⏱️  Tiempo total: {tiempo_total:.2f}ms",
        "",
        f"📁 Archivos: {'✅ OK' if archivos_ok else '❌ FALTAN'}",
        f"🔥 Firebase: {'✅ OK' if 'firebase' in resultados_globales and len(resultados_globales['firebase']) > 0 else '⚠️  REVISAR'}",
        f"🎤 ReadAloud: {'✅ OK' if 'readaloud' in resultados_globales and len(resultados_globales['readaloud']) > 0 else '⚠️  REVISAR'}",
        f"📄 Tema.html: {'✅ OK' if 'tema' in resultados_globales and len(resultados_globales['tema']) > 0 else '⚠️  REVISAR'}",
        "",
        f"❌ Errores encontrados: {len(resultados_globales['errores'])}",
    ]
    
    if resultados_globales['errores']:
        resumen.append("")
        resumen.append("ERRORES:")
        for error in resultados_globales['errores']:
            resumen.append(f"  • {error}")
    
    color_resumen = 'OKGREEN' if todo_ok else 'WARNING' if len(resultados_globales['errores']) < 3 else 'FAIL'
    
    print_box(
        "📊 RESUMEN DE VERIFICACIÓN",
        resumen,
        color_resumen
    )
    
    # ══════════════════════════════════════════════════════════════════════
    # 6. RECOMENDACIONES
    # ══════════════════════════════════════════════════════════════════════
    
    if not todo_ok:
        recomendaciones = [
            "1. Implementar el parche en tema.html",
            "2. Modificar readaloud-system.js para enviar notificaciones",
            "3. Eliminar llamadas a bumpMaterialProgress en load/scroll",
            "4. Verificar que material-firebase.js tenga validaciones",
            "",
            "📖 Consulta la guía de implementación para más detalles"
        ]
        
        print_box(
            "💡 RECOMENDACIONES",
            recomendaciones,
            'WARNING'
        )
    else:
        print_box(
            "🎉 ¡TODO CORRECTO!",
            [
                "El sistema está correctamente configurado",
                "",
                "Próximos pasos:",
                "1. Probar en navegador",
                "2. Ejecutar: checkMaterialReadingStatus()",
                "3. Verificar guardado en Firebase Console"
            ],
            'OKGREEN'
        )
    
    print_color(f"\n✅ Verificación completada en {tiempo_total:.2f}ms\n", 'OKGREEN', bold=True)
    
    return 0 if todo_ok else 1


if __name__ == "__main__":
    import sys
    sys.exit(main())