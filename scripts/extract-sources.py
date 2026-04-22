#!/usr/bin/env python3
"""
Ekstrahuje źródła z sekcji „Źródła" każdej karty do strukturalnego JSON.

Format wejścia: numerowana lista w markdown po nagłówku `## Źródła`.
Każda pozycja: `autor/nazwa, "tytuł", *wydawca*, data. URL: https://... (dostęp: YYYY-MM-DD)`

Wynik: `src/data/sources.generated.json` z tablicą obiektów:
  { caseId, caseTitle, citation, url, publisher, domain, dateAccessed }
"""
import re
import json
from pathlib import Path
from urllib.parse import urlparse

CASES_DIR = Path(__file__).parent.parent / 'src' / 'content' / 'cases'
OUT = Path(__file__).parent.parent / 'src' / 'data' / 'sources.generated.json'

FRONTMATTER_RE = re.compile(r'^---\n(.*?)\n---\n(.*)', re.DOTALL)
SOURCES_SECTION_RE = re.compile(r'^##\s*Źródła\s*\n(.*?)(?=\n##\s|\n---\s*$|\Z)', re.MULTILINE | re.DOTALL)
# Każda pozycja numerowanej listy (może zajmować wiele linii aż do następnej liczby lub końca)
ITEM_RE = re.compile(r'^\s*\d+\.\s+(.*?)(?=^\s*\d+\.\s+|\Z)', re.MULTILINE | re.DOTALL)

def extract_url(text: str) -> str | None:
    m = re.search(r'URL:\s*(https?://\S+?)(?=[\s)]|$)', text)
    if m:
        return m.group(1).rstrip('.,;')
    # fallback — just bare URL
    m = re.search(r'(https?://\S+)', text)
    if m:
        return m.group(1).rstrip('.,;)')
    return None

def extract_publisher(text: str) -> str | None:
    """Wyciąga wydawcę z *italics* po pierwszym przecinku."""
    m = re.search(r',\s*\*([^*]+)\*', text)
    if m:
        return m.group(1).strip()
    return None

def extract_access_date(text: str) -> str | None:
    m = re.search(r'dostęp:\s*(\d{4}-\d{2}-\d{2})', text)
    return m.group(1) if m else None

def clean_citation(text: str) -> str:
    """Usuwa URL: i (dostęp: ...) — zostawia czysty cytat."""
    text = re.sub(r'URL:\s*https?://\S+', '', text)
    text = re.sub(r'\(dostęp:\s*\d{4}-\d{2}-\d{2}\)', '', text)
    return text.strip().rstrip('.').strip() + '.'

def main():
    all_sources = []
    for f in sorted(CASES_DIR.glob('*.md')):
        raw = f.read_text()
        m = FRONTMATTER_RE.match(raw)
        if not m:
            continue
        fm_text, body = m.groups()
        # Get id and title from frontmatter
        cid = re.search(r'^id:\s*(\S+)', fm_text, re.MULTILINE)
        ctitle = re.search(r'^title:\s*(.+)', fm_text, re.MULTILINE)
        if not cid or not ctitle:
            continue
        case_id = cid.group(1).strip()
        case_title = ctitle.group(1).strip().strip('\'"')

        sec = SOURCES_SECTION_RE.search(body)
        if not sec:
            continue

        items = ITEM_RE.findall(sec.group(1))
        for item in items:
            text = item.strip().replace('\n', ' ')
            url = extract_url(text)
            domain = None
            if url:
                try:
                    domain = urlparse(url).netloc.replace('www.', '')
                except Exception:
                    domain = None
            publisher = extract_publisher(text)
            access_date = extract_access_date(text)
            citation = clean_citation(text)

            all_sources.append({
                'caseId': case_id,
                'caseTitle': case_title,
                'citation': citation,
                'url': url,
                'publisher': publisher,
                'domain': domain,
                'dateAccessed': access_date,
            })

    OUT.write_text(json.dumps(all_sources, ensure_ascii=False, indent=2))
    print(f'Extracted {len(all_sources)} sources → {OUT.relative_to(Path.cwd())}')

    # Print some stats
    from collections import Counter
    domains = Counter(s['domain'] for s in all_sources if s['domain'])
    print(f'\nTop 15 domen:')
    for d, n in domains.most_common(15):
        print(f'  {n:>3}  {d}')

if __name__ == '__main__':
    main()
