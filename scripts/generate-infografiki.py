#!/usr/bin/env python3
"""
Generuje sześć statycznych SVG do embedowania w zewnętrznych artykułach.

Każdy SVG ma:
- 1200x675 px (ratio 16:9, dobre do social i artykułów)
- Te same fonty co portal (Source Serif 4, Inter, IBM Plex Mono)
- Paleta Matrycy (#FAFAF7 bg, #A32D2D akcent, #1A1C20 text)
- Stopkę „Źródło: matryca.org — Sprawy Big Techu"
"""
from pathlib import Path
import re
import yaml

ROOT = Path(__file__).parent.parent
OUT = ROOT / 'public' / 'infografiki'
CASES_DIR = ROOT / 'src' / 'content' / 'cases'

W, H = 1200, 675

# Shared SVG header/footer
def svg_wrapper(title: str, body: str) -> str:
    return f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}">
  <style>
    .bg {{ fill: #FAFAF7; }}
    .accent {{ fill: #A32D2D; }}
    .text {{ fill: #1A1C20; }}
    .text-2 {{ fill: #5C5E64; }}
    .text-3 {{ fill: #8E9096; }}
    .serif {{ font-family: 'Source Serif 4', Georgia, serif; font-weight: 500; }}
    .sans {{ font-family: 'Inter', -apple-system, system-ui, sans-serif; }}
    .mono {{ font-family: 'IBM Plex Mono', monospace; }}
    .bold {{ font-weight: 700; }}
  </style>
  <rect class="bg" width="{W}" height="{H}"/>

  <!-- Header: tagline -->
  <text x="60" y="60" class="mono accent" font-size="13" letter-spacing="1.5" text-transform="uppercase">MATRYCA · SPRAWY BIG TECHU</text>

  <!-- Body -->
  {body}

  <!-- Footer -->
  <line x1="60" y1="{H - 50}" x2="{W - 60}" y2="{H - 50}" stroke="rgba(0,0,0,0.1)" stroke-width="0.5"/>
  <text x="60" y="{H - 25}" class="mono text-3" font-size="11">matryca.org · materiał do swobodnego wykorzystania · 2026</text>
  <text x="{W - 60}" y="{H - 25}" class="mono text-3" font-size="11" text-anchor="end">{title}</text>
</svg>
'''

# =========================================================================
# 1. Kara a przychód — stacked bar
# =========================================================================
def infografika_kara_vs_przychod() -> str:
    body = '''
  <text x="60" y="140" class="serif text" font-size="42" letter-spacing="-0.5">
    Kara 1,2 miliarda euro to 0,7%
  </text>
  <text x="60" y="185" class="serif text" font-size="42" letter-spacing="-0.5">
    rocznego przychodu Mety.
  </text>
  <text x="60" y="225" class="mono text-2" font-size="14">Rekordowa kara RODO (DPC Ireland, 2023) vs. przychód Mety 2024</text>

  <!-- Bar: roczny przychód Mety — pełny -->
  <g transform="translate(60, 290)">
    <text x="0" y="-10" class="mono text-2" font-size="12" letter-spacing="1">PRZYCHÓD META 2024</text>
    <rect x="0" y="0" width="1080" height="60" fill="#1A1C20"/>
    <text x="540" y="38" class="sans" font-size="22" fill="white" text-anchor="middle" font-weight="500">164 mld USD</text>
  </g>

  <!-- Bar: kara 1.2B EUR -->
  <g transform="translate(60, 400)">
    <text x="0" y="-10" class="mono accent" font-size="12" letter-spacing="1">KARA RODO 2023</text>
    <rect x="0" y="0" width="8.5" height="60" class="accent"/>
    <text x="20" y="38" class="sans accent" font-size="16" font-weight="500">1,2 mld € ≈ 1,3 mld USD</text>
  </g>

  <!-- Statistic callout -->
  <g transform="translate(60, 510)">
    <text x="0" y="0" class="serif accent" font-size="72" letter-spacing="-2" font-weight="500">0,7%</text>
    <text x="200" y="-22" class="mono text-2" font-size="12" letter-spacing="1">AKCJE META TYDZIEŃ PÓŹNIEJ:</text>
    <text x="200" y="10" class="serif" font-size="28" class="accent" font-weight="500">+1,8%</text>
    <text x="200" y="34" class="mono text-3" font-size="11">rynek odetchnął: kwota mniejsza niż się obawiano</text>
  </g>
'''
    return svg_wrapper('Kara vs. przychód · A07', body)


# =========================================================================
# 2. 33 sprawy — grouped by year
# =========================================================================
def infografika_chronologia() -> str:
    # Read all cases, group by year
    cases = []
    for f in sorted(CASES_DIR.glob('*.md')):
        m = re.match(r'---\n(.*?)\n---', f.read_text(), re.DOTALL)
        if not m:
            continue
        fm = yaml.safe_load(m.group(1))
        cases.append({
            'id': fm['id'],
            'year': fm['year_revealed'],
            'group': fm['group'],
        })
    years = sorted(set(c['year'] for c in cases))
    min_y, max_y = min(years), max(years)
    span = max_y - min_y

    group_colors = {
        'A': '#4f46e5', 'B': '#0d9488', 'C': '#475569',
        'D': '#d97706', 'E': '#A32D2D',
    }

    dots = []
    year_positions = {}
    for c in sorted(cases, key=lambda x: (x['year'], x['id'])):
        x = 80 + (c['year'] - min_y) / span * 1040
        year_positions.setdefault(c['year'], 0)
        y = 380 - year_positions[c['year']] * 22
        year_positions[c['year']] += 1
        color = group_colors[c['group']]
        dots.append(f'<circle cx="{x}" cy="{y}" r="7" fill="{color}"/>')
        dots.append(f'<text x="{x}" y="{y + 4}" class="mono" font-size="8" fill="white" text-anchor="middle">{c["id"][1:]}</text>')

    # Axis
    axis = f'<line x1="80" y1="420" x2="1120" y2="420" stroke="#8E9096" stroke-width="1"/>'
    year_labels = []
    for y in range(min_y, max_y + 1, 2):
        x = 80 + (y - min_y) / span * 1040
        year_labels.append(f'<text x="{x}" y="445" class="mono text-2" font-size="12" text-anchor="middle">{y}</text>')

    # Legend
    legend_items = [
        ('A', 'Meta', 60),
        ('B', 'Google', 180),
        ('C', 'Apple / MS / LinkedIn', 300),
        ('D', 'Amazon / Uber', 510),
        ('E', 'TikTok / X / Clearview / Zoom', 660),
    ]
    legend = ''
    for key, label, x in legend_items:
        legend += f'<circle cx="{x}" cy="540" r="5" fill="{group_colors[key]}"/>'
        legend += f'<text x="{x + 12}" y="545" class="mono text-2" font-size="11">{key} — {label}</text>'

    body = f'''
  <text x="60" y="140" class="serif text" font-size="42" letter-spacing="-0.5">
    33 udokumentowane sprawy.
  </text>
  <text x="60" y="185" class="serif text" font-size="42" letter-spacing="-0.5">
    {min_y}–{max_y}. Jeden wzorzec.
  </text>
  <text x="60" y="225" class="mono text-2" font-size="14">Każda kropka = jedna sprawa. Kolor = firma. Pozioma oś = rok ujawnienia.</text>

  {axis}
  {''.join(year_labels)}
  {''.join(dots)}

  <!-- Legend -->
  {legend}
'''
    return svg_wrapper('Chronologia 33 spraw', body)


# =========================================================================
# 3. Top 5 kar EUR — horizontal bars
# =========================================================================
def infografika_top_kar() -> str:
    # Hardcoded top regulatory fines EUR
    kary = [
        ('1200', 'Meta / DPC Ireland', 'transfer danych do USA', '2023', 'A07'),
        ('530', 'TikTok / DPC Ireland', 'transfery do Chin', '2025', 'E03'),
        ('390', 'Meta / DPC Ireland', 'reklamy bez zgody', '2023', 'A09'),
        ('345', 'TikTok / DPC Ireland', 'dane dzieci', '2023', 'E02'),
        ('310', 'LinkedIn / DPC Ireland', 'trening AI bez zgody', '2024', 'C05'),
    ]
    max_v = 1200
    bars = ''
    for i, (amount, firma, desc, rok, cid) in enumerate(kary):
        y = 280 + i * 55
        width = int(amount) / max_v * 900
        bars += f'''
    <text x="60" y="{y - 5}" class="mono text-2" font-size="11">{cid} · {rok}</text>
    <rect x="60" y="{y}" width="{width}" height="30" class="accent"/>
    <text x="{60 + width + 10}" y="{y + 20}" class="sans bold" font-size="15" fill="#1A1C20">{amount} mln €</text>
    <text x="60" y="{y + 48}" class="mono text-2" font-size="11">{firma} — {desc}</text>
'''

    body = f'''
  <text x="60" y="140" class="serif text" font-size="42" letter-spacing="-0.5">
    Top 5 kar RODO.
  </text>
  <text x="60" y="185" class="serif text" font-size="42" letter-spacing="-0.5">
    Wszystkie z Dublina.
  </text>
  <text x="60" y="225" class="mono text-2" font-size="14">Irlandzki DPC — wiodący regulator dla Big Techu pod RODO. Wszystkie pięć największych kar — stąd.</text>

  {bars}

  <text x="60" y="600" class="mono text-3" font-size="11">Razem: 2,775 mld €. Jedna centrala regulatora. 13 firm, które tam mają siedzibę europejską.</text>
'''
    return svg_wrapper('Top 5 kar RODO', body)


# =========================================================================
# 4. Dolina Krzemowa — kto ile
# =========================================================================
def infografika_firmy() -> str:
    firmy = [
        ('Meta', 10, 2.1, 16.0, '#4f46e5'),
        ('Google', 6, 0.084, 5.7, '#0d9488'),
        ('TikTok', 3, 0.875, 0, '#A32D2D'),
        ('Uber', 3, 0, 0.296, '#d97706'),
        ('Apple', 3, 0.06, 0.711, '#475569'),
        ('Amazon', 2, 0, 0.156, '#d97706'),
    ]
    rows = ''
    for i, (name, count, eur, usd, color) in enumerate(firmy):
        y = 290 + i * 55
        bar_w = count * 90
        rows += f'''
    <text x="60" y="{y + 4}" class="serif bold" font-size="20" fill="#1A1C20">{name}</text>
    <rect x="220" y="{y - 18}" width="{bar_w}" height="30" fill="{color}"/>
    <text x="{230 + bar_w}" y="{y + 4}" class="mono text-2" font-size="13">{count} spraw</text>
    <text x="700" y="{y + 4}" class="mono text-2" font-size="13">{eur if eur > 0 else "—"}{"  mld €" if eur > 0 else ""}</text>
    <text x="900" y="{y + 4}" class="mono text-2" font-size="13">{usd if usd > 0 else "—"}{"  mld $" if usd > 0 else ""}</text>
'''

    body = f'''
  <text x="60" y="140" class="serif text" font-size="42" letter-spacing="-0.5">
    Sześć firm. 27 spraw.
  </text>
  <text x="60" y="185" class="serif text" font-size="42" letter-spacing="-0.5">
    82% bazy Matrycy.
  </text>
  <text x="60" y="225" class="mono text-2" font-size="14">Liczba spraw per firma · kary regulacyjne w EUR · kary w USA (USD, wszystkie kategorie)</text>

  <!-- Column headers -->
  <text x="220" y="270" class="mono text-3" font-size="11" letter-spacing="1">SPRAW W BAZIE</text>
  <text x="700" y="270" class="mono text-3" font-size="11" letter-spacing="1">KARY EUR</text>
  <text x="900" y="270" class="mono text-3" font-size="11" letter-spacing="1">KARY USD</text>

  {rows}
'''
    return svg_wrapper('Sześć firm, 27 spraw', body)


# =========================================================================
# 5. Kuchnia sygnalistów — role
# =========================================================================
def infografika_sygnalisci() -> str:
    sygn = [
        ('Frances Haugen', 'Facebook Files (A05)', 'sygnalistka · Meta'),
        ('Christopher Wylie', 'Cambridge Analytica (A02)', 'sygnalista · CA'),
        ('Sophie Zhang', 'manipulacja wyborami (A05)', 'sygnalistka · Meta'),
        ('Max Schrems', 'Schrems II + RODO (A07, A09)', 'aktywista · noyb'),
        ('Kashmir Hill', 'Clearview AI (E05)', 'dziennikarka · NYT'),
        ('Carole Cadwalladr', 'Cambridge Analytica (A02)', 'dziennikarka · Observer'),
    ]

    rows = ''
    for i, (name, sprawa, rola) in enumerate(sygn):
        col = i % 3
        row = i // 3
        x = 60 + col * 370
        y = 300 + row * 150
        rows += f'''
    <g transform="translate({x}, {y})">
      <line x1="0" y1="0" x2="40" y2="0" class="accent" stroke="#A32D2D" stroke-width="2"/>
      <text x="0" y="30" class="serif bold" font-size="20" fill="#1A1C20">{name}</text>
      <text x="0" y="56" class="mono text-2" font-size="12">{rola}</text>
      <text x="0" y="82" class="mono text-3" font-size="11">{sprawa}</text>
    </g>
'''

    body = f'''
  <text x="60" y="140" class="serif text" font-size="42" letter-spacing="-0.5">
    Bez tych sześciu osób
  </text>
  <text x="60" y="185" class="serif text" font-size="42" letter-spacing="-0.5">
    nie byłoby tej bazy.
  </text>
  <text x="60" y="225" class="mono text-2" font-size="14">Sygnaliści, dziennikarze i aktywiści, którzy rozłożyli największe sprawy Big Techu.</text>

  {rows}

  <text x="60" y="620" class="mono text-3" font-size="11">Pełna galeria 12 postaci: matryca.org/sygnalisci</text>
'''
    return svg_wrapper('Kto odkrył?', body)


# =========================================================================
# 6. Geografia egzekwowania
# =========================================================================
def infografika_geografia() -> str:
    body = '''
  <text x="60" y="140" class="serif text" font-size="42" letter-spacing="-0.5">
    Geografia egzekwowania.
  </text>
  <text x="60" y="185" class="serif text" font-size="42" letter-spacing="-0.5">
    Dublin. Waszyngton. Reszta.
  </text>
  <text x="60" y="225" class="mono text-2" font-size="14">Dwa miasta skupiają większość decyzji regulacyjnych wobec Big Techu. Reszta Europy nadąża — lub nie.</text>

  <!-- Dublin -->
  <g transform="translate(100, 330)">
    <circle cx="50" cy="50" r="50" class="accent" opacity="0.9"/>
    <text x="50" y="55" class="sans bold" font-size="18" fill="white" text-anchor="middle">DUBLIN</text>
    <text x="50" y="140" class="serif bold" font-size="32" fill="#1A1C20" text-anchor="middle">~2,8 mld €</text>
    <text x="50" y="165" class="mono text-2" font-size="11" text-anchor="middle">kar RODO dla Big Techu</text>
    <text x="50" y="185" class="mono text-3" font-size="10" text-anchor="middle">DPC Ireland</text>
  </g>

  <!-- Washington -->
  <g transform="translate(450, 330)">
    <circle cx="50" cy="50" r="45" class="accent" opacity="0.85"/>
    <text x="50" y="55" class="sans bold" font-size="16" fill="white" text-anchor="middle">WASZYNGTON</text>
    <text x="50" y="140" class="serif bold" font-size="32" fill="#1A1C20" text-anchor="middle">~5,4 mld $</text>
    <text x="50" y="165" class="mono text-2" font-size="11" text-anchor="middle">kar federalnych USA</text>
    <text x="50" y="185" class="mono text-3" font-size="10" text-anchor="middle">FTC · SEC · FCC</text>
  </g>

  <!-- Reszta Europy -->
  <g transform="translate(800, 330)">
    <circle cx="50" cy="50" r="28" class="accent" opacity="0.6"/>
    <text x="50" y="55" class="sans bold" font-size="11" fill="white" text-anchor="middle">EUROPA</text>
    <text x="50" y="140" class="serif bold" font-size="32" fill="#1A1C20" text-anchor="middle">~800 mln €</text>
    <text x="50" y="165" class="mono text-2" font-size="11" text-anchor="middle">pozostali regulatorzy UE</text>
    <text x="50" y="185" class="mono text-3" font-size="10" text-anchor="middle">CNIL · ICO · AEPD · Garante · i inni</text>
  </g>

  <text x="60" y="590" class="mono text-3" font-size="11">Polska (UODO): kilkadziesiąt milionów złotych. Kwartalny budżet marketingowy Mety w Polsce jest wyższy.</text>
'''
    return svg_wrapper('Geografia egzekwowania', body)


# =========================================================================
# Main
# =========================================================================
if __name__ == '__main__':
    OUT.mkdir(parents=True, exist_ok=True)
    infografiki = {
        'kara-vs-przychod.svg': infografika_kara_vs_przychod(),
        'chronologia.svg': infografika_chronologia(),
        'top-kar.svg': infografika_top_kar(),
        'firmy.svg': infografika_firmy(),
        'sygnalisci.svg': infografika_sygnalisci(),
        'geografia.svg': infografika_geografia(),
    }
    for name, content in infografiki.items():
        (OUT / name).write_text(content)
        print(f'  → {OUT / name}')
    print(f'\nWygenerowano {len(infografiki)} infografik w public/infografiki/')
