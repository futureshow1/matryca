#!/usr/bin/env python3
"""
Masowa kuracja językowa — bezpieczne zamiany anglicyzmów na polskie odpowiedniki.

Reguły bezpieczeństwa:
  1. Tylko na polskojęzycznej treści (pliki .md w src/content/cases/ + docs/ + niektóre .astro + people.ts).
  2. Pomijamy cudzysłowy: tekst w "cudzysłowach angielskich" i „cudzysłowach polskich" — nazwy własne.
  3. Pomijamy nazwy postępowań sądowych (Joffe v. Google, In re X) — wzorzec "v. " i "In re".
  4. Pomijamy tytuły publikacji w kursywie (*X*).
  5. Pomijamy linie URL.

Wyświetla podsumowanie zmian per plik przed commitem (dry-run opcjonalnie).
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).parent.parent

# Kolejność ma znaczenie — najdłuższe frazy pierwsze
REPLACEMENTS = [
    # Wyrazy złożone
    (r'\bone-stop-shop\b', 'jedno okienko'),
    (r'\bperformance of contract\b', 'wykonanie umowy'),
    (r'\bdark pattern(s)?\b', lambda m: 'myląc' + ('e interfejsy' if m.group(1) else 'y interfejs')),
    (r'\baddictive design\b', 'projektowanie pod uzależnienie'),
    (r'\bplaintext keylogger\b', 'rejestracja klawiatury w formie nieszyfrowanej'),
    (r'\bfalse trigger(s)?\b', lambda m: 'fałszywe uruchomieni' + ('a' if m.group(1) else 'e')),
    (r'\bbrowser sandbox(?:ing)?\b', 'piaskownica przeglądarki'),
    (r'\bpolice access\b', 'dostęp policji'),
    (r'\bconsent decree\b', 'ugoda z regulatorem'),
    (r'\bprocedural grounds\b', 'przesłanki proceduralne'),
    (r'\bhuman review\b', 'weryfikacja przez ludzi'),
    (r'\blaunchowan', 'uruchomion'),  # „launchowany" → „uruchomiony"

    # Pojedyncze słowa
    (r'\bclass action\b', 'pozew zbiorowy'),
    (r'\bClass action\b', 'Pozew zbiorowy'),
    (r'\bClass Action\b', 'Pozew zbiorowy'),
    (r'\bbottleneck\b', 'wąskie gardło'),
    (r'\bnewsfeed\b', 'kanał wiadomości'),
    (r'\bworkaround\b', 'obejście'),
    (r'\bWorkaround\b', 'Obejście'),
    (r'\bopt-in\b', 'dobrowolne włączenie'),
    (r'\bopt-out\b', 'rezygnacja'),
    (r'\bOpt-in\b', 'Dobrowolne włączenie'),
    (r'\bOpt-out\b', 'Rezygnacja'),
    (r'\bdeployment\b', 'wdrożenie'),
    (r'\bDeployment\b', 'Wdrożenie'),

    # Compliance — zależne od kontekstu; w kartach zostawiamy (prawniczy żargon), tylko w docs i niektórych
    # (r'\bcompliance\b', 'zgodność z prawem'),

    # Tracking — tylko w zwykłym tekście (nie w nazwach typu "Anti-Tracking Protection")
    (r'(?<![-\w])tracking(?=\s+(?:danych|użytkownik|lokalizacj|internet|web|sieci|cyfrowe))', 'śledzenie'),
    (r'(?<![-\w])Tracking(?=\s+(?:danych|użytkownik|lokalizacj|internet|web|sieci|cyfrowe))', 'Śledzenie'),
]

# Anchors które WYKLUCZAJĄ zamianę w danej linii (nazwy własne, URL itp.)
EXCLUDE_LINE_PATTERNS = [
    r'\bv\. ',       # nazwa sądowa "Joffe v. Google"
    r'\bvs?\. ',     # "Matter vs. Google"
    r'\bIn re\b',    # In re X
    r'^\s*URL:',     # linie URL
    r'https?://',    # inline URLs
]

def should_skip_line(line: str) -> bool:
    """Zwraca True, gdy zamiana w tej linii jest ryzykowna (nazwa własna)."""
    for pat in EXCLUDE_LINE_PATTERNS:
        if re.search(pat, line):
            return True
    return False

def is_in_quoted_segment(text: str, pos: int) -> bool:
    """Czy pozycja w tekście jest w środku cytatu (angielskie lub polskie cudzysłowy)."""
    before = text[:pos]
    # angielski cudzysłów
    en_count = before.count('"') - before.count('\\"')
    if en_count % 2 == 1:
        return True
    # polski cudzysłów — sprawdzamy, czy „ bez zamykającego "
    po_open = before.count('„')
    po_close = before.count('"')
    if po_open > po_close:
        return True
    return False

def apply_replacements(text: str) -> tuple[str, list[tuple[str, str, int]]]:
    """Zwraca (nowy_tekst, lista_zmian) gdzie każda zmiana = (co, na_co, numer_linii)."""
    lines = text.split('\n')
    changes = []
    for idx, line in enumerate(lines, start=1):
        if should_skip_line(line):
            continue
        new_line = line
        for pattern, replacement in REPLACEMENTS:
            # Zachowaj pozycje cytatów przez aplikowanie tylko poza nimi
            def smart_sub(m):
                if is_in_quoted_segment(new_line, m.start()):
                    return m.group(0)
                if callable(replacement):
                    new = replacement(m)
                else:
                    new = replacement
                changes.append((m.group(0), new, idx))
                return new
            new_line = re.sub(pattern, smart_sub, new_line)
        lines[idx - 1] = new_line
    return '\n'.join(lines), changes

# Pliki do przeskanowania (tylko polska treść)
TARGETS = [
    *ROOT.glob('src/content/cases/*.md'),
    *ROOT.glob('docs/*.md'),
    *ROOT.glob('src/pages/teksty/*.astro'),
    ROOT / 'src/data/people.ts',
    ROOT / 'src/data/quiz.ts',
    ROOT / 'src/pages/sygnalisci/index.astro',
    ROOT / 'src/pages/o-projekcie.astro',
    ROOT / 'src/pages/metodologia.astro',
]

def main():
    dry_run = '--dry-run' in sys.argv
    total_changes = 0
    files_changed = 0
    for f in TARGETS:
        if not f.exists():
            continue
        text = f.read_text()
        new_text, changes = apply_replacements(text)
        if not changes:
            continue
        files_changed += 1
        total_changes += len(changes)
        print(f'\n{f.relative_to(ROOT)} — {len(changes)} zmian:')
        for old, new, ln in changes[:8]:
            print(f'  L{ln}: {old!r} → {new!r}')
        if len(changes) > 8:
            print(f'  ... + {len(changes) - 8} więcej')
        if not dry_run:
            f.write_text(new_text)

    print(f'\n{"="*60}')
    print(f'{"DRY RUN: " if dry_run else ""}Zmieniono {total_changes} fraz w {files_changed} plikach.')

if __name__ == '__main__':
    main()
