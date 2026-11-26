'''
tools/fuente_notebooklm.py — arma un documento de texto (Markdown) con todo el contenido del tema
«Línea del tiempo» para cargarlo como fuente en NotebookLM (presentaciones, videos, guías).

Junta, sin HTML ni emojis:
  1) el material de lectura (themes/<tema>/content.html, sección por sección);
  2) los cinco aspectos (ejes) y las épocas (hitos.js);
  3) el reloj de la humanidad (misma cuenta que linea.html);
  4) la evolución de cada aspecto (hitos en orden);
  5) los hitos completos por época (qué pasó, mirada filosófica, figuras);
  6) el termómetro del progreso (termometro.js: conclusiones mejor fundadas y por qué).

Necesita Node (para leer hitos.js y termometro.js tal como los usa la app).
Uso:  python tools/fuente_notebooklm.py [tema]      (por defecto linea_tiempo)
Salida: themes/<tema>/fuente_notebooklm.md
Versión: v1.0.0 (2026-11-26)
'''
import html
import json
import re
import subprocess
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
AHORA = 2025
RELOJ_IDS = ['invencion_de_la_escritura', 'socrates', 'imprenta_de_gutenberg', 'maquina_de_vapor_y_revolucion_industrial',
             'independencia_argentina_en_tucuman', 'la_penicilina_y_la_medicina_moderna', 'world_wide_web',
             'explosion_de_la_inteligencia_artificial']
EMOJIS = re.compile('[\U0001F000-\U0001FAFF⌀-⏿☀-➿⬀-⯿️‍]+')


def leer_datos(tema):
    '''Ejecuta hitos.js y termometro.js con Node y devuelve sus datos como dict.'''
    carpeta = REPO / 'themes' / tema
    js = ("global.window={}; require(process.argv[1]); try { require(process.argv[2]); } catch (e) {} "
          "console.log(JSON.stringify({ejes: window.LINEA_EJES, eras: window.LINEA_ERAS, "
          "hitos: window.LINEA_HITOS, termo: window.LINEA_TERMOMETRO || null}));")
    salida = subprocess.run(['node', '-e', js, str(carpeta / 'hitos.js'), str(carpeta / 'termometro.js')],
                            capture_output=True, text=True, encoding='utf-8', check=True)
    return json.loads(salida.stdout)


def texto_limpio(fragmento):
    '''HTML → texto plano (sin etiquetas, sin emojis, con saltos de párrafo).'''
    t = re.sub(r'<br\s*/?>', '\n', fragmento)
    t = re.sub(r'<[^>]+>', '', t)
    t = EMOJIS.sub('', html.unescape(t))
    return '\n'.join(re.sub(r'[ \t]+', ' ', linea).strip() for linea in t.split('\n')).strip()


def leer_material(tema):
    '''Secciones del material: [(título, texto, idea clave)].'''
    fuente = (REPO / 'themes' / tema / 'content.html').read_text(encoding='utf-8')
    titulos = list(re.finditer(r'<h3[^>]*>(.*?)</h3>', fuente, re.S))
    secciones = []
    for i, m in enumerate(titulos):
        bloque = fuente[m.end(): titulos[i + 1].start() if i + 1 < len(titulos) else len(fuente)]
        texto = re.search(r'<p class="readaloud"[^>]*>(.*?)</p>', bloque, re.S)
        pista = re.search(r'<div class="reading-hint">(.*?)</div>', bloque, re.S)
        secciones.append((texto_limpio(m.group(1)), texto_limpio(texto.group(1)) if texto else '',
                          texto_limpio(pista.group(1)) if pista else ''))
    return secciones


def hora_reloj(anio, desde0):
    minutos = min(1439, round((anio - desde0) / (AHORA - desde0) * 1440))
    return f'{minutos // 60:02d}:{minutos % 60:02d}'


def main_fuente_notebooklm():
    tema = sys.argv[1] if len(sys.argv) > 1 else 'linea_tiempo'
    d = leer_datos(tema)
    ejes, eras, hitos, termo = d['ejes'], d['eras'], d['hitos'], d['termo']
    por_id = {h['id']: h for h in hitos}
    ordenados = sorted(hitos, key=lambda h: h['sort'])
    nombre_eje = {k: e['nombre'] for k, e in ejes.items()}
    L = []
    w = L.append

    w('# Línea del tiempo: ¿progresa la humanidad?')
    w('')
    w('Fuente de estudio para estudiantes de 6.º año de la secundaria (17 años), Tucumán, Argentina. '
      'Materia: Filosofía, Unidad I. Pregunta central del tema: ¿la historia humana avanza siempre hacia algo mejor, '
      'o progresa en algunos aspectos y no en otros?')
    w('')
    w(f'Contenido: el material de lectura, los {len(ejes)} aspectos con los que se mira la historia, las {len(eras)} épocas, '
      f'el reloj de la humanidad, la evolución de cada aspecto, los {len(hitos)} hitos completos y el «termómetro del progreso» '
      'con las conclusiones mejor fundadas.')
    w('')

    # 1) Material
    w('## Parte 1. Material de lectura')
    w('')
    for titulo, texto, pista in leer_material(tema):
        w(f'### {titulo}')
        w('')
        w(texto)
        if pista:
            w('')
            w(f'Idea clave: {pista}')
        w('')

    # 2) Aspectos y épocas
    w('## Parte 2. Los cinco aspectos para mirar la historia')
    w('')
    for k, e in ejes.items():
        n = sum(1 for h in hitos if h['axis'] == k)
        w(f'- **{e["nombre"]}**: {e["desc"]} ({n} hitos).')
    w('')
    w('## Parte 3. Las épocas de la línea')
    w('')
    for era in eras:
        de_era = [h for h in ordenados if h['era'] == era]
        if de_era:
            w(f'- **{era}**: {len(de_era)} hitos, de «{de_era[0]["title"]}» ({de_era[0]["year"]}) a «{de_era[-1]["title"]}» ({de_era[-1]["year"]}).')
    w('')

    # 3) Reloj
    desde0 = hitos[0]['sort']
    w('## Parte 4. El reloj de la humanidad')
    w('')
    miles = lambda n: f'{n:,}'.replace(',', '.')
    w(f'Si los {miles(AHORA - desde0)} años que pasaron desde la revolución neolítica (la agricultura, hacia el {miles(abs(desde0))} a.C.) '
      'fueran un solo día de 24 horas, cada hito ocurriría a esta hora:')
    w('')
    for i in RELOJ_IDS:
        h = por_id.get(i)
        if h:
            w(f'- **{hora_reloj(h["sort"], desde0)}**: {h["title"]} ({h["year"]}).')
    mitad = ordenados[len(ordenados) // 2]
    w('')
    w(f'Casi toda la historia escrita ocurre en las últimas horas del día, y la mitad de los hitos de esta línea pasó en los últimos {AHORA - mitad["sort"]} años: '
      'los cambios son cada vez más rápidos.')
    w('')

    # 4) Evolución por aspecto
    w('## Parte 5. La evolución de cada aspecto (hitos en orden)')
    w('')
    for k, e in ejes.items():
        w(f'### {e["nombre"]}')
        w('')
        for h in ordenados:
            if h['axis'] == k:
                w(f'- {h["year"]}: {h["title"]}. {h["intro"]}')
        w('')

    # 5) Hitos completos
    w('## Parte 6. Los hitos, época por época')
    w('')
    for era in eras:
        de_era = [h for h in ordenados if h['era'] == era]
        if not de_era:
            continue
        w(f'### {era}')
        w('')
        for h in de_era:
            w(f'#### {h["title"]} ({h["year"]}). Aspecto: {nombre_eje.get(h["axis"], h["axis"])}')
            w('')
            if h.get('clave'):
                w(f'Año de referencia: {h["clave"]}.')
            w(h['intro'])
            w('')
            w(h['desc'])
            if h.get('philosophy'):
                w('')
                w(f'Mirada filosófica: {h["philosophy"]}')
            if h.get('figures'):
                w('')
                w(f'Figuras: {", ".join(h["figures"])}.')
            w('')

    # 6) Termómetro
    if termo:
        w('## Parte 7. El termómetro del progreso: ¿avanzó, siguió igual o retrocedió?')
        w('')
        w('Para cada aspecto se comparan cuatro hitos en orden. Las conclusiones de abajo son las mejor fundadas con los datos de la línea; '
          'las otras opciones son errores frecuentes.')
        w('')
        for t in termo['ejes']:
            w(f'### {nombre_eje.get(t["eje"], t["eje"])}')
            w('')
            w('Recorrido: ' + ' → '.join(f'{por_id[i]["title"]} ({por_id[i]["year"]})' for i in t['hitos'] if i in por_id) + '.')
            w('')
            w(f'Conclusión mejor fundada: {t["opciones"][t["correcta"]]}')
            w('')
            w(f'Por qué: {t["porque"]}')
            otras = [o for j, o in enumerate(t['opciones']) if j != t['correcta']]
            w('')
            w('Conclusiones mal fundadas (errores frecuentes): ' + ' / '.join(otras))
            w('')
        f = termo['final']
        w('### Pregunta final: ' + f['pregunta'])
        w('')
        w(f'Respuesta mejor fundada: {f["opciones"][f["correcta"]]}')
        w('')
        w(f'Por qué: {f["porque"]}')
        w('')

    destino = REPO / 'themes' / tema / 'fuente_notebooklm.md'
    destino.write_text('\n'.join(L).rstrip() + '\n', encoding='utf-8')
    print(f'{destino.relative_to(REPO)}: {len(L)} líneas, {len(hitos)} hitos')


if __name__ == '__main__':
    main_fuente_notebooklm()
