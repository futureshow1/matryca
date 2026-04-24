#!/usr/bin/env python3
"""
Generates six static SVGs for embedding in external articles — ENGLISH version.

Each SVG has:
- 1200x675 px (16:9 ratio, good for social and articles)
- Same fonts as the portal (Source Serif 4, Inter, IBM Plex Mono)
- Matryca palette (#FAFAF7 bg, #A32D2D accent, #1A1C20 text)
- Footer "Source: matryca.org — Big Tech Files"
"""
from pathlib import Path
import re
import yaml

ROOT = Path(__file__).parent.parent
OUT = ROOT / 'public' / 'infografiki-en'
CASES_DIR = ROOT / 'src' / 'content' / 'cases'

W, H = 1200, 675

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

  <text x="60" y="60" class="mono accent" font-size="13" letter-spacing="1.5" text-transform="uppercase">BIG TECH FILES · MATRYCA</text>

  {body}

  <line x1="60" y1="{H - 50}" x2="{W - 60}" y2="{H - 50}" stroke="rgba(0,0,0,0.1)" stroke-width="0.5"/>
  <text x="60" y="{H - 25}" class="mono text-3" font-size="11">matryca.org · educational material, free to reuse · 2026</text>
  <text x="{W - 60}" y="{H - 25}" class="mono text-3" font-size="11" text-anchor="end">{title}</text>
</svg>
'''


def infografika_fine_vs_revenue() -> str:
    body = '''
  <text x="60" y="140" class="serif text" font-size="42" letter-spacing="-0.5">
    A €1.2 billion fine is 0.7%
  </text>
  <text x="60" y="185" class="serif text" font-size="42" letter-spacing="-0.5">
    of Meta's annual revenue.
  </text>
  <text x="60" y="225" class="mono text-2" font-size="14">Record GDPR fine (DPC Ireland, 2023) vs. Meta's 2024 revenue</text>

  <g transform="translate(60, 290)">
    <text x="0" y="-10" class="mono text-2" font-size="12" letter-spacing="1">META 2024 REVENUE</text>
    <rect x="0" y="0" width="1080" height="60" fill="#1A1C20"/>
    <text x="540" y="38" class="sans" font-size="22" fill="white" text-anchor="middle" font-weight="500">$164 bn</text>
  </g>

  <g transform="translate(60, 400)">
    <text x="0" y="-10" class="mono accent" font-size="12" letter-spacing="1">GDPR FINE 2023</text>
    <rect x="0" y="0" width="8.5" height="60" class="accent"/>
    <text x="20" y="38" class="sans accent" font-size="16" font-weight="500">&#8364;1.2 bn &#8776; $1.3 bn</text>
  </g>

  <g transform="translate(60, 510)">
    <text x="0" y="0" class="serif accent" font-size="72" letter-spacing="-2" font-weight="500">0.7%</text>
    <text x="200" y="-22" class="mono text-2" font-size="12" letter-spacing="1">META STOCK A WEEK LATER:</text>
    <text x="200" y="10" class="serif accent" font-size="28" font-weight="500">+1.8%</text>
    <text x="200" y="34" class="mono text-3" font-size="11">the market was relieved: the sum was smaller than feared</text>
  </g>
'''
    return svg_wrapper('Fine vs. revenue · A07', body)


def infografika_chronology() -> str:
    cases = []
    for f in sorted(CASES_DIR.glob('*.md')):
        m = re.match(r'---\n(.*?)\n---', f.read_text(), re.DOTALL)
        if not m: continue
        fm = yaml.safe_load(m.group(1))
        cases.append({'id': fm['id'], 'year': fm['year_revealed'], 'group': fm['group']})
    years = sorted(set(c['year'] for c in cases))
    min_y, max_y = min(years), max(years)
    span = max_y - min_y

    group_colors = {'A': '#4f46e5', 'B': '#0d9488', 'C': '#475569', 'D': '#d97706', 'E': '#A32D2D'}

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

    axis = f'<line x1="80" y1="420" x2="1120" y2="420" stroke="#8E9096" stroke-width="1"/>'
    year_labels = []
    for y in range(min_y, max_y + 1, 2):
        x = 80 + (y - min_y) / span * 1040
        year_labels.append(f'<text x="{x}" y="445" class="mono text-2" font-size="12" text-anchor="middle">{y}</text>')

    legend_items = [
        ('A', 'Meta', 60), ('B', 'Google', 180),
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
    33 documented cases.
  </text>
  <text x="60" y="185" class="serif text" font-size="42" letter-spacing="-0.5">
    {min_y}–{max_y}. One pattern.
  </text>
  <text x="60" y="225" class="mono text-2" font-size="14">Each dot = one case. Color = company. Horizontal axis = year of disclosure.</text>

  {axis}
  {''.join(year_labels)}
  {''.join(dots)}

  {legend}
'''
    return svg_wrapper('Chronology of 33 cases', body)


def infografika_top_fines() -> str:
    fines = [
        ('1200', 'Meta / DPC Ireland', 'US data transfers', '2023', 'A07'),
        ('530', 'TikTok / DPC Ireland', 'transfers to China', '2025', 'E03'),
        ('390', 'Meta / DPC Ireland', 'ads without consent', '2023', 'A09'),
        ('345', 'TikTok / DPC Ireland', "children's data", '2023', 'E02'),
        ('310', 'LinkedIn / DPC Ireland', 'AI training without consent', '2024', 'C05'),
    ]
    max_v = 1200
    bars = ''
    for i, (amount, firm, desc, year, cid) in enumerate(fines):
        y = 280 + i * 55
        width = int(amount) / max_v * 900
        bars += f'''
    <text x="60" y="{y - 5}" class="mono text-2" font-size="11">{cid} · {year}</text>
    <rect x="60" y="{y}" width="{width}" height="30" class="accent"/>
    <text x="{60 + width + 10}" y="{y + 20}" class="sans bold" font-size="15" fill="#1A1C20">&#8364;{amount}M</text>
    <text x="60" y="{y + 48}" class="mono text-2" font-size="11">{firm} — {desc}</text>
'''

    body = f'''
  <text x="60" y="140" class="serif text" font-size="42" letter-spacing="-0.5">
    Top 5 GDPR fines.
  </text>
  <text x="60" y="185" class="serif text" font-size="42" letter-spacing="-0.5">
    All from Dublin.
  </text>
  <text x="60" y="225" class="mono text-2" font-size="14">Irish DPC — the lead regulator for Big Tech under GDPR. All five largest fines — from there.</text>

  {bars}

  <text x="60" y="600" class="mono text-3" font-size="11">Total: &#8364;2.775 billion. One regulator office. 13 companies with European headquarters there.</text>
'''
    return svg_wrapper('Top 5 GDPR fines', body)


def infografika_firms() -> str:
    firms = [
        ('Meta', 10, 2.1, 16.0, '#4f46e5'),
        ('Google', 6, 0.084, 5.7, '#0d9488'),
        ('TikTok', 3, 0.875, 0, '#A32D2D'),
        ('Uber', 3, 0, 0.296, '#d97706'),
        ('Apple', 3, 0.06, 0.711, '#475569'),
        ('Amazon', 2, 0, 0.156, '#d97706'),
    ]
    rows = ''
    for i, (name, count, eur, usd, color) in enumerate(firms):
        y = 290 + i * 55
        bar_w = count * 90
        eur_txt = f'{eur} bn EUR' if eur > 0 else '—'
        usd_txt = f'${usd} bn' if usd > 0 else '—'
        rows += f'''
    <text x="60" y="{y + 4}" class="serif bold" font-size="20" fill="#1A1C20">{name}</text>
    <rect x="220" y="{y - 18}" width="{bar_w}" height="30" fill="{color}"/>
    <text x="{230 + bar_w}" y="{y + 4}" class="mono text-2" font-size="13">{count} cases</text>
    <text x="700" y="{y + 4}" class="mono text-2" font-size="13">{eur_txt}</text>
    <text x="900" y="{y + 4}" class="mono text-2" font-size="13">{usd_txt}</text>
'''

    body = f'''
  <text x="60" y="140" class="serif text" font-size="42" letter-spacing="-0.5">
    Six companies. 27 cases.
  </text>
  <text x="60" y="185" class="serif text" font-size="42" letter-spacing="-0.5">
    82% of the Matryca database.
  </text>
  <text x="60" y="225" class="mono text-2" font-size="14">Number of cases per company · EUR regulatory fines · USD fines (all categories)</text>

  <text x="220" y="270" class="mono text-3" font-size="11" letter-spacing="1">CASES IN DB</text>
  <text x="700" y="270" class="mono text-3" font-size="11" letter-spacing="1">EUR FINES</text>
  <text x="900" y="270" class="mono text-3" font-size="11" letter-spacing="1">USD FINES</text>

  {rows}
'''
    return svg_wrapper('Six firms, 27 cases', body)


def infografika_whistleblowers() -> str:
    people = [
        ('Frances Haugen', 'Facebook Files (A05)', 'whistleblower · Meta'),
        ('Christopher Wylie', 'Cambridge Analytica (A02)', 'whistleblower · CA'),
        ('Sophie Zhang', 'election manipulation (A05)', 'whistleblower · Meta'),
        ('Max Schrems', 'Schrems II + GDPR (A07, A09)', 'activist · NOYB'),
        ('Kashmir Hill', 'Clearview AI (E05)', 'journalist · NYT'),
        ('Carole Cadwalladr', 'Cambridge Analytica (A02)', 'journalist · Observer'),
    ]

    rows = ''
    for i, (name, case, role) in enumerate(people):
        col = i % 3
        row = i // 3
        x = 60 + col * 370
        y = 300 + row * 150
        rows += f'''
    <g transform="translate({x}, {y})">
      <line x1="0" y1="0" x2="40" y2="0" class="accent" stroke="#A32D2D" stroke-width="2"/>
      <text x="0" y="30" class="serif bold" font-size="20" fill="#1A1C20">{name}</text>
      <text x="0" y="56" class="mono text-2" font-size="12">{role}</text>
      <text x="0" y="82" class="mono text-3" font-size="11">{case}</text>
    </g>
'''

    body = f'''
  <text x="60" y="140" class="serif text" font-size="42" letter-spacing="-0.5">
    Without these six people
  </text>
  <text x="60" y="185" class="serif text" font-size="42" letter-spacing="-0.5">
    this database would not exist.
  </text>
  <text x="60" y="225" class="mono text-2" font-size="14">Whistleblowers, journalists and activists who unpicked the biggest Big Tech cases.</text>

  {rows}

  <text x="60" y="620" class="mono text-3" font-size="11">Full gallery of 12 people: matryca.org/en/who-revealed</text>
'''
    return svg_wrapper('Who revealed it?', body)


def infografika_geography() -> str:
    body = '''
  <text x="60" y="140" class="serif text" font-size="42" letter-spacing="-0.5">
    Geography of enforcement.
  </text>
  <text x="60" y="185" class="serif text" font-size="42" letter-spacing="-0.5">
    Dublin. Washington. The rest.
  </text>
  <text x="60" y="225" class="mono text-2" font-size="14">Two cities concentrate most regulatory decisions against Big Tech. The rest of Europe catches up — or not.</text>

  <g transform="translate(100, 330)">
    <circle cx="50" cy="50" r="50" class="accent" opacity="0.9"/>
    <text x="50" y="55" class="sans bold" font-size="18" fill="white" text-anchor="middle">DUBLIN</text>
    <text x="50" y="140" class="serif bold" font-size="32" fill="#1A1C20" text-anchor="middle">~&#8364;2.8 bn</text>
    <text x="50" y="165" class="mono text-2" font-size="11" text-anchor="middle">GDPR fines for Big Tech</text>
    <text x="50" y="185" class="mono text-3" font-size="10" text-anchor="middle">DPC Ireland</text>
  </g>

  <g transform="translate(450, 330)">
    <circle cx="50" cy="50" r="45" class="accent" opacity="0.85"/>
    <text x="50" y="55" class="sans bold" font-size="16" fill="white" text-anchor="middle">WASHINGTON</text>
    <text x="50" y="140" class="serif bold" font-size="32" fill="#1A1C20" text-anchor="middle">~$5.4 bn</text>
    <text x="50" y="165" class="mono text-2" font-size="11" text-anchor="middle">US federal fines</text>
    <text x="50" y="185" class="mono text-3" font-size="10" text-anchor="middle">FTC · SEC · FCC</text>
  </g>

  <g transform="translate(800, 330)">
    <circle cx="50" cy="50" r="28" class="accent" opacity="0.6"/>
    <text x="50" y="55" class="sans bold" font-size="11" fill="white" text-anchor="middle">EUROPE</text>
    <text x="50" y="140" class="serif bold" font-size="32" fill="#1A1C20" text-anchor="middle">~&#8364;800M</text>
    <text x="50" y="165" class="mono text-2" font-size="11" text-anchor="middle">other EU regulators</text>
    <text x="50" y="185" class="mono text-3" font-size="10" text-anchor="middle">CNIL · ICO · AEPD · Garante · and others</text>
  </g>

  <text x="60" y="590" class="mono text-3" font-size="11">Poland (UODO): tens of millions of zloty. Meta's quarterly Polish ad budget is larger.</text>
'''
    return svg_wrapper('Geography of enforcement', body)


if __name__ == '__main__':
    OUT.mkdir(parents=True, exist_ok=True)
    infografiki = {
        'fine-vs-revenue.svg': infografika_fine_vs_revenue(),
        'chronology.svg': infografika_chronology(),
        'top-fines.svg': infografika_top_fines(),
        'firms.svg': infografika_firms(),
        'whistleblowers.svg': infografika_whistleblowers(),
        'geography.svg': infografika_geography(),
    }
    for name, content in infografiki.items():
        (OUT / name).write_text(content)
        print(f'  → {OUT / name}')
    print(f'\nGenerated {len(infografiki)} infographics in public/infografiki-en/')
