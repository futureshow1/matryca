#!/usr/bin/env python3
"""
Fixes fine categories across all case frontmatters.

The initial migration script classified every fine as `regulatory_fine`,
which inflates the "kary regulacyjne" total with private class actions and
shareholder derivative suits. This rewrites `category:` fields based on the
`authority:` string.
"""
import re
from pathlib import Path

CASES_DIR = Path(__file__).parent.parent / 'src' / 'content' / 'cases'

# Rules — order matters (first match wins).
CLASS_ACTION_PATTERNS = [
    r'\*In re',
    r'\bv\.',
    r'\bv\s',  # "X v Y"
    r'class action',
    r'Class action',
    r'Pozew akcjonariuszy',
    r'shareholder',
    r'Sąd N\.D\. Cal',
    r'Sąd federalny',
    r'UK courts',
]

STATE_AG_PATTERNS = [
    r'AG\b',
    r'stan(ów|y)?\s+USA',
    r'^50 stanów',
    r'Stan Teksas',
    r'TX osobno',
    r'DC \+ IN',
    r'Ława w NM',
    r'Sąd w Nowym Meksyku',
]

# Everything else defaults to regulatory_fine.

def classify(authority: str) -> str:
    a = authority.strip().strip("'\"")
    for p in CLASS_ACTION_PATTERNS:
        if re.search(p, a):
            return 'class_action_settlement'
    for p in STATE_AG_PATTERNS:
        if re.search(p, a):
            return 'state_attorney_general'
    return 'regulatory_fine'

changed = 0
cases_changed = 0
for f in sorted(CASES_DIR.glob('*.md')):
    text = f.read_text()
    m = re.match(r'---\n(.*?)\n---', text, re.DOTALL)
    if not m:
        continue
    fm = m.group(1)
    fines_match = re.search(r'^fines:(.*?)(?=^[a-z_]+:|\Z)', fm, re.MULTILINE | re.DOTALL)
    if not fines_match:
        continue
    block = fines_match.group(1)
    new_block = block
    # Match a complete fine entry including its category line
    pattern = re.compile(
        r'(-\s*amount:\s*\d+\n\s*currency:\s*\w+\n\s*authority:\s*)([^\n]+)(\n\s*date:\s*[^\n]+\n\s*category:\s*)(\w+)',
    )
    def replace(match):
        global changed
        authority = match.group(2)
        old_cat = match.group(4)
        new_cat = classify(authority)
        if new_cat != old_cat:
            changed += 1
            return f'{match.group(1)}{authority}{match.group(3)}{new_cat}'
        return match.group(0)

    new_block = pattern.sub(replace, block)
    if new_block != block:
        text = text.replace(block, new_block)
        f.write_text(text)
        cases_changed += 1

print(f'Updated {changed} fine entries across {cases_changed} cases.')
