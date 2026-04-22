#!/usr/bin/env python3
"""
Proponuje pole `related_cases[]` dla każdej karty na podstawie nakładania się
firm, kategorii, tagów, jurysdykcji i podstaw prawnych.

Algorytm scoringu:
  - współdzielona firma: +3 (najmocniejszy sygnał)
  - współdzielona kategoria: +2
  - współdzielony tag: +1
  - współdzielona jurysdykcja: +0.5
  - współdzielona legal_basis: +0.5
  - bonus za różną grupę (A/B/C/D/E): +0.5 (promuje przekrojowe powiązania)

Dla każdej karty wybiera top 4–6 rekordów z niezerowym wynikiem i wpisuje ich `id`
(np. „A02"). Jan może potem ręcznie dodać/usunąć poszczególne wpisy.
"""
import re
from pathlib import Path
import yaml

CASES_DIR = Path(__file__).parent.parent / 'src' / 'content' / 'cases'
FRONTMATTER_RE = re.compile(r'^---\n(.*?)\n---\n(.*)', re.DOTALL)

def load_all():
    cases = []
    for f in sorted(CASES_DIR.glob('*.md')):
        raw = f.read_text()
        m = FRONTMATTER_RE.match(raw)
        if not m:
            continue
        fm = yaml.safe_load(m.group(1))
        cases.append((f, fm, m.group(2)))
    return cases

def score(a: dict, b: dict) -> float:
    s = 0.0
    ca = set(a.get('companies') or [])
    cb = set(b.get('companies') or [])
    s += 3 * len(ca & cb)

    cata = set(a.get('categories') or [])
    catb = set(b.get('categories') or [])
    s += 2 * len(cata & catb)

    ta = set(a.get('tags') or [])
    tb = set(b.get('tags') or [])
    s += 1 * len(ta & tb)

    ja = set(a.get('jurisdictions') or [])
    jb = set(b.get('jurisdictions') or [])
    s += 0.5 * len(ja & jb)

    la = set(a.get('legal_basis') or [])
    lb = set(b.get('legal_basis') or [])
    s += 0.5 * len(la & lb)

    if a.get('group') and b.get('group') and a['group'] != b['group']:
        s += 0.5  # cross-group bonus

    return s

def main():
    cases = load_all()
    print(f'Załadowano {len(cases)} kart.')

    updated = 0
    for i, (f, fm, body) in enumerate(cases):
        if fm.get('related_cases'):
            # Już wypełnione — szanuj
            continue

        scored = []
        for j, (gf, gfm, gbody) in enumerate(cases):
            if i == j:
                continue
            s = score(fm, gfm)
            if s > 0:
                scored.append((s, gfm['id']))

        scored.sort(reverse=True)
        # Bierz top 5 (lub mniej jeśli za mało z niezerowym score)
        top = [id_ for _, id_ in scored[:5]]
        if not top:
            continue

        fm['related_cases'] = top

        # Serializuj z powrotem; usuń TODO jeśli istnieje w body nie — body nietknięte
        new_fm_yaml = yaml.safe_dump(fm, allow_unicode=True, sort_keys=False, default_flow_style=False, width=120)
        f.write_text(f'---\n{new_fm_yaml}---\n{body}')
        updated += 1
        print(f'{fm["id"]} ({fm["title"][:40]}): {top}')

    print(f'\n--- Zaktualizowano {updated} kart ---')

if __name__ == '__main__':
    main()
