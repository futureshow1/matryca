#!/usr/bin/env python3
"""
Heurystycznie przypisuje tagi do 33 kart na podstawie ich treści.

Reguły: dla każdego taga zdefiniowany wzorzec regex. Jeśli wzorzec występuje
w sekcji TL;DR lub „Kategoria:" karty — tag dodany. Potem Jan koryguje ręcznie.

Używa PyYAML dla bezpiecznej serializacji.
"""
import re
from pathlib import Path
import yaml

CASES_DIR = Path(__file__).parent.parent / 'src' / 'content' / 'cases'

# (tag, regex) — regex przeszukiwany case-insensitive
TAG_RULES = [
    ('dark-patterns',          r'dark pattern|mylący UX|wprowadzanie w błąd'),
    ('addictive-design',       r'uzależ|addictive|addiction|infinite scroll|autoplay|dopamin'),
    ('rozpoznawanie-twarzy',   r'rozpoznawani[ae] twarz|facial recognition|Clearview|biometryczn'),
    ('sledzenie-lokalizacji',  r'lokalizacj|location tracking|śledzenie lokalizacji|geofenc'),
    ('trening-ai',             r'trenowani[ae].{0,30}model|AI training|LLM training|trening AI|scraping.{0,30}dan'),
    ('moderacja-algorytmiczna', r'moderacj.{0,30}algorytm|algorithmic moderation|algorytm.{0,30}rekomend|algorytm.{0,30}wzmac'),
    ('eksperyment-psychologiczny', r'eksperyment.{0,30}psycholog|emotional contagion|afekt|manipulacj.{0,30}nastroj'),
    ('dezinformacja',          r'dezinformacj|misinformation|disinformation|fake news|fałszyw.{0,30}narracj'),
    ('dzieci',                 r'dzieci|children|nieletn|COPPA|child.{0,20}safety|minor'),
    ('wyborcy',                r'wybor|election|kampani.{0,10}polityczn|Trump.{0,10}campaign|Brexit|Cambridge Analytica'),
    ('pracownicy',             r'pracownic|workers?\b|employees?\b|kierowc.{0,10}Uber|magazyn.{0,10}Amazon|związk.{0,10}zawodow|union'),
    ('dziennikarze',           r'dziennikar|journalists?\b|reporter|Pegasus.{0,20}dziennikar'),
    ('mniejszosci',            r'mniejszośc|minorit|LGBT|Rohingya|Hispanic|Latino|BIPOC|etnicz|religijn'),
    ('rodo',                   r'\bRODO\b|\bGDPR\b'),
    ('coppa',                  r'\bCOPPA\b'),
    ('bipa',                   r'\bBIPA\b|Illinois Biometric'),
    ('schrems-ii',             r'Schrems|transfer.{0,40}USA|transfer.{0,40}trzec|SCC\b|standard contract'),
    ('pozew-zbiorowy',         r'class action|pozew zbiorowy|derivative suit|derivat.{0,10}litig|akcjonariusz'),
    ('wyciek-danych',          r'wyciek.{0,20}dan|data breach|breach.{0,20}dat|leaked.{0,20}dat'),
    ('sygnalista',             r'sygnalist|whistleblower|\bHaugen\b|\bWylie\b|\bSnowden\b|leaker'),
    ('criminal',               r'postępowanie karn|criminal proceed|criminal forfeit|wyrok.{0,10}karn|oskarż.{0,20}karn'),
    ('geopolityka',            r'geopolit|Chin.{0,5}komunist|\bChiny\b|bezpieczeństwo narodowe|national security|PAFACA|ByteDance'),
    # Dodatkowe, do rozważenia przez Jana:
    ('polski-watek',           r'\bPolska\b|\bPoland\b|\bUODO\b|Panoptykon|polskich użytkownik|polsk.{0,20}obywatel'),
    ('deepfake',               r'deepfake|deep.fake|Grok.{0,20}image|sztuczn.{0,20}zdjęci'),
]

FRONTMATTER_RE = re.compile(r'^---\n(.*?)\n---\n(.*)', re.DOTALL)

def extract_search_text(body: str) -> str:
    """Wyciąga sekcję Kategoria: oraz TL;DR — tam szukamy wzorców."""
    parts = []
    # Linia „Kategoria:" z bloku cytatu
    cat = re.search(r'>\s*\*\*Kategoria:\*\*([^\n]+)', body)
    if cat:
        parts.append(cat.group(1))
    # TL;DR section
    tldr = re.search(r'##\s*TL;DR\s*\n(.*?)(?=\n##\s|\Z)', body, re.DOTALL)
    if tldr:
        parts.append(tldr.group(1))
    # Tytuł/subtitle z H1
    h1 = re.search(r'^#\s+([^\n]+)', body, re.MULTILINE)
    if h1:
        parts.append(h1.group(1))
    return '\n\n'.join(parts)

def classify_tags(text: str) -> list[str]:
    tags = []
    for tag, pattern in TAG_RULES:
        if re.search(pattern, text, re.IGNORECASE):
            tags.append(tag)
    return tags

def main():
    updated = 0
    for f in sorted(CASES_DIR.glob('*.md')):
        raw = f.read_text()
        m = FRONTMATTER_RE.match(raw)
        if not m:
            continue
        fm_yaml, body = m.groups()

        # Parsuj YAML
        try:
            fm = yaml.safe_load(fm_yaml)
        except yaml.YAMLError as e:
            print(f'WARN: {f.name} — YAML parse error: {e}')
            continue

        search_text = extract_search_text(body)
        new_tags = classify_tags(search_text)

        # Nie nadpisuj istniejących (jeśli Jan ręcznie dodał)
        existing = fm.get('tags') or []
        if isinstance(existing, list) and len(existing) > 0:
            # Merge — zachowaj unikalne
            combined = list(dict.fromkeys(existing + new_tags))
            if combined == existing:
                continue
            fm['tags'] = combined
        else:
            fm['tags'] = new_tags

        if not fm['tags']:
            continue

        # Serializuj z powrotem — zachowaj porządek pól
        new_fm = yaml.safe_dump(fm, allow_unicode=True, sort_keys=False, default_flow_style=False, width=120)
        new_content = f'---\n{new_fm}---\n{body}'
        f.write_text(new_content)
        updated += 1
        print(f'{f.stem}: {new_tags}')

    print(f'\n--- Zaktualizowano {updated} kart ---')

if __name__ == '__main__':
    main()
