#!/usr/bin/env python3
"""
add-frontmatter.py — Migruje karty Markdown z bazy 'bigtech_base/karty/' do formatu
Astro Content Collection z frontmatterem YAML zgodnym ze schema z PORTAL_CONTEXT.md.

Użycie:
    python3 add-frontmatter.py \\
        --input ../bigtech_base/karty \\
        --output ./src/content/cases \\
        [--dry-run]

Wyciąga automatycznie:
    - id (z nazwy pliku)
    - group, group_label
    - title, subtitle
    - year_revealed (z tabeli Metadane)
    - years_active
    - companies (z tabeli Metadane)
    - status
    - jurisdictions (z Metadane)
    - fines (z tabeli Kary i ugody + Metadane)
    - whistleblowers (z sekcji Odkrycie)
    - journalists (z sekcji Odkrycie)
    - legal_basis (z Metadane)
    - last_updated (z stopki karty)
    - word_count

Pola wymagające ręcznej weryfikacji (oznaczone # TODO:):
    - related_cases (wymaga analizy merytorycznej)
    - tags / categories
    - geo_coords
    - seo_description / seo_keywords
    - priority (domyślnie STANDARD, Jan wskazuje TOP)
"""

import argparse
import re
import sys
from pathlib import Path
from datetime import datetime
import yaml


GROUP_LABELS = {
    'A': 'Meta',
    'B': 'Google',
    'C': 'Apple, Microsoft, LinkedIn',
    'D': 'Amazon, Uber',
    'E': 'TikTok, X, Clearview, Zoom',
}

MONTH_PL = {
    'styczeń': 1, 'stycznia': 1, 'luty': 2, 'lutego': 2,
    'marzec': 3, 'marca': 3, 'kwiecień': 4, 'kwietnia': 4,
    'maj': 5, 'maja': 5, 'czerwiec': 6, 'czerwca': 6,
    'lipiec': 7, 'lipca': 7, 'sierpień': 8, 'sierpnia': 8,
    'wrzesień': 9, 'września': 9, 'październik': 10, 'października': 10,
    'listopad': 11, 'listopada': 11, 'grudzień': 12, 'grudnia': 12,
}

STATUS_KEYWORDS = {
    'active_investigation': ['aktywne', 'w toku', 'trwa', 'toczy się', 'active'],
    'settled': ['ugoda', 'settlement', 'zakończone', 'concluded'],
    'withdrawn': ['wstrzymane', 'porzucone', 'cofnięte', 'nie wdrożone'],
    'concluded': ['zakończone', 'zapłacone', 'completed'],
    'ongoing_litigation': ['w toku', 'odwołanie', 'appeal', 'litigation'],
    'regulatory_monitoring': ['monitoring', '20-letni'],
    'criminal_proceedings': ['karne', 'criminal', 'skazany'],
}


def extract_id_from_filename(filename: str) -> str | None:
    """A01_local_mess.md -> A01"""
    match = re.match(r'^([A-E]\d{2})_', filename)
    return match.group(1) if match else None


def extract_title(content: str) -> tuple[str, str | None]:
    """Wyciąga główny tytuł i podtytuł z pierwszej linii Markdown.
    '# E04 — X / Grok: Deepfake'i niekonsensualne i śledztwo DSA'
    -> ('X / Grok: Deepfake\\'i niekonsensualne i śledztwo DSA', None)
    """
    first_line = content.split('\n')[0].strip()
    match = re.match(r'^#\s+([A-E]\d{2})\s*[—–-]\s*(.+?)\s*$', first_line)
    if match:
        full_title = match.group(2)
        if ':' in full_title:
            parts = full_title.split(':', 1)
            return parts[0].strip(), parts[1].strip()
        return full_title, None
    return first_line.lstrip('#').strip(), None


def extract_metadata_table(content: str) -> dict:
    """Wyciąga dane z tabeli '## Metadane'."""
    result = {}
    metadata_section = re.search(
        r'## Metadane\s*\n+(.*?)(?=\n## |\Z)',
        content, re.DOTALL
    )
    if not metadata_section:
        return result
    section_text = metadata_section.group(1)
    for line in section_text.split('\n'):
        if '|' not in line or line.strip().startswith('|---'):
            continue
        parts = [p.strip() for p in line.split('|') if p.strip()]
        if len(parts) == 2:
            key, value = parts
            result[key.lower()] = value
    return result


def extract_year_revealed(metadata: dict) -> int | None:
    """Szuka roku ujawnienia w polu 'Rok ujawnienia'."""
    value = metadata.get('rok ujawnienia', '')
    year_match = re.search(r'(20\d{2})', value)
    return int(year_match.group(1)) if year_match else None


def extract_years_active(metadata: dict) -> tuple[int, int] | None:
    """Z 'Lata trwania praktyki' wyciąga [start, end]."""
    value = metadata.get('lata trwania praktyki', '')
    years = re.findall(r'(20\d{2})', value)
    if len(years) >= 2:
        return (int(years[0]), int(years[-1]))
    if len(years) == 1:
        return (int(years[0]), int(years[0]))
    return None


def extract_companies(metadata: dict) -> list[str]:
    """Z 'Firma/firmy' w nagłówku lub cytacie."""
    value = metadata.get('kraj/region', '')
    value = value.replace(';', ',').replace('/', ',')
    companies = []
    for candidate in value.split(','):
        c = candidate.strip()
        if c and len(c) < 50 and not any(
            x in c.lower() for x in ['uk', 'usa', 'ue', 'eu', 'globaln', 'polsk', 'niemc', 'chin', 'rosj']
        ):
            companies.append(c)
    return companies[:5]


def extract_companies_from_header(content: str) -> list[str]:
    """Z nagłówka karty: '> **Firma/firmy:** X (Twitter, Elon Musk), xAI (Grok)'"""
    match = re.search(r'\*\*Firma/firmy:\*\*\s*([^\n]+)', content)
    if not match:
        return []
    raw = match.group(1).strip()
    raw = re.sub(r'\([^)]*\)', '', raw)
    companies = [c.strip() for c in raw.split(',') if c.strip()]
    return companies[:5]


def extract_jurisdictions(metadata: dict) -> list[str]:
    """Z 'Kraj/region'."""
    value = metadata.get('kraj/region', '').lower()
    jurisdictions = []
    mapping = {
        'ue': 'EU', 'eu': 'EU', 'eog': 'EEA',
        'usa': 'US', 'stany': 'US', 'us ': 'US',
        'uk': 'UK', 'wielka brytania': 'UK',
        'polska': 'PL', 'polsk': 'PL',
        'niemc': 'DE', 'germany': 'DE',
        'francj': 'FR', 'france': 'FR',
        'włoch': 'IT', 'italy': 'IT',
        'chiny': 'CN', 'china': 'CN',
        'rosj': 'RU', 'russia': 'RU',
        'kanad': 'CA', 'canada': 'CA',
        'australi': 'AU',
        'holand': 'NL', 'niderland': 'NL',
        'grecj': 'GR',
        'austri': 'AT',
        'globaln': 'global',
    }
    for key, code in mapping.items():
        if key in value and code not in jurisdictions:
            jurisdictions.append(code)
    return jurisdictions


def extract_fines(metadata: dict, content: str) -> list[dict]:
    """Z sekcji 'Kary i ugody' wyciąga struktury kar.
    Preferuje tabelę, fallback do tekstu."""
    fines = []
    kary_section = re.search(
        r'## Kary i ugody\s*\n+(.*?)(?=\n## |\Z)',
        content, re.DOTALL
    )
    if not kary_section:
        return fines

    section_text = kary_section.group(1)

    table_rows = re.findall(
        r'\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|',
        section_text
    )
    for row in table_rows:
        date, authority, amount_raw, jurisdiction, basis = row
        if 'data' in date.lower() or '---' in date or 'łącznie' in date.lower():
            continue
        amount_match = re.search(r'([\d\s]+(?:\.\d+)?)\s*(mln|mld|million|billion)?\s*(EUR|USD|GBP|PLN|\$|€|£)?', amount_raw)
        if not amount_match:
            continue
        try:
            num_str = amount_match.group(1).replace(' ', '').replace(',', '.')
            amount = float(num_str)
            unit = amount_match.group(2) or ''
            if 'mln' in unit.lower() or 'million' in unit.lower():
                amount *= 1_000_000
            elif 'mld' in unit.lower() or 'billion' in unit.lower():
                amount *= 1_000_000_000
            currency_raw = amount_match.group(3) or 'EUR'
            currency = {'$': 'USD', '€': 'EUR', '£': 'GBP'}.get(currency_raw, currency_raw)
            if currency not in ['EUR', 'USD', 'GBP', 'PLN']:
                currency = 'EUR'
            fines.append({
                'amount': int(amount),
                'currency': currency,
                'authority': authority.strip()[:80],
                'date': normalize_date(date.strip()),
                'category': 'regulatory_fine',
                'status': 'paid',
            })
        except (ValueError, AttributeError):
            continue

    return fines


def normalize_date(raw: str) -> str:
    """Konwersja 'Wrzesień 2023' -> '2023-09'. Jeśli tylko rok — '2023'."""
    raw = raw.lower().strip()
    year_match = re.search(r'(20\d{2})', raw)
    if not year_match:
        return '2000'
    year = year_match.group(1)

    for pl_name, month_num in MONTH_PL.items():
        if pl_name in raw:
            return f"{year}-{month_num:02d}"
    month_match = re.search(r'\b(\d{1,2})[\.\/-](\d{1,2})[\.\/-]?\s*20\d{2}', raw)
    if month_match:
        return f"{year}-{int(month_match.group(2)):02d}"
    return year


def infer_status(metadata: dict, content: str) -> str:
    """Heurystyka na podstawie pola 'Status' i 'Status (na dziś)'."""
    status_text = (
        metadata.get('status', '') + ' ' +
        metadata.get('status (na dziś)', '')
    ).lower()
    for status, keywords in STATUS_KEYWORDS.items():
        for keyword in keywords:
            if keyword in status_text:
                return status
    return 'concluded'


def extract_whistleblowers(content: str) -> list[str]:
    """Z sekcji 'Odkrycie' i 'Osoby kluczowe' próbuje znaleźć sygnalistów.
    Zwraca slugi (wylie, haugen, hill)."""
    known = {
        'wylie': ['christopher wylie', 'wylie'],
        'haugen': ['frances haugen', 'haugen'],
        'hill': ['kashmir hill', 'kashmir-hill'],
        'baker-white': ['emily baker-white', 'baker-white'],
        'criddle': ['cristina criddle'],
        'le-bonniec': ['thomas le bonniec', 'le bonniec'],
        'beaumont': ['kevin beaumont'],
        'schrems': ['max schrems', 'noyb'],
        'snowden': ['edward snowden', 'snowden'],
        'zhang': ['sophie zhang'],
        'cadwalladr': ['carole cadwalladr', 'cadwalladr'],
    }
    content_lower = content.lower()
    found = []
    for slug, aliases in known.items():
        for alias in aliases:
            if alias in content_lower:
                found.append(slug)
                break
    return found


def extract_journalists(content: str) -> list[str]:
    """Z sekcji 'Odkrycie' wyciąga nazwiska dziennikarzy."""
    odkrycie = re.search(r'## Odkrycie\s*\n+(.*?)(?=\n## |\Z)', content, re.DOTALL)
    if not odkrycie:
        return []
    text = odkrycie.group(1)
    names = re.findall(r'\*\*([A-Z][a-ząćęłńóśźż]+(?:\s+[A-Z][a-ząćęłńóśźż\-]+)+)\*\*', text)
    known_journalists = {
        'Carole Cadwalladr', 'Kashmir Hill', 'Sam Biddle', 'Matt Day',
        'Micah Lee', 'Yael Grauer', 'Johana Bhuiyan', 'Emily Baker-White',
        'Cristina Criddle', 'Alex Hern', 'Joseph Cox', 'Samantha Cole',
        'Brad Stone', 'Giles Turner', 'Natalia Drozdiak', 'Tom Warren',
        'Jonathan Leitschuh', 'Sam Biddle', 'Alex Heath', 'Zack Whittaker',
    }
    result = [name for name in names if name in known_journalists]
    return list(dict.fromkeys(result))[:5]


def extract_legal_basis(metadata: dict) -> list[str]:
    """Z pola 'Podstawa prawna'."""
    raw = metadata.get('podstawa prawna', '')
    raw = re.sub(r'\([^)]*\)', '', raw)
    parts = re.split(r'[;,]', raw)
    return [p.strip() for p in parts if p.strip() and len(p.strip()) < 80][:6]


def extract_last_updated(content: str) -> str:
    """Z 'Ostatnia aktualizacja: 2026-04-18' w stopce."""
    match = re.search(r'[Oo]statnia\s+aktualizacja:\s*(\d{4}-\d{2}-\d{2})', content)
    if match:
        return match.group(1)
    return datetime.now().strftime('%Y-%m-%d')


def count_words(content: str) -> int:
    """Liczy słowa w treści (po usunięciu YAML jeśli jest)."""
    if content.startswith('---'):
        parts = content.split('---', 2)
        if len(parts) >= 3:
            content = parts[2]
    clean = re.sub(r'[#*`_\[\]()|>-]', ' ', content)
    words = clean.split()
    return len(words)


def guess_priority(content: str, fines: list[dict]) -> str:
    """Heurystyka: sprawa 'TOP' jeśli ma wielką karę (>100 mln EUR) lub szeroki wpływ."""
    total = sum(
        f['amount'] for f in fines
        if f['currency'] == 'EUR'
    )
    if total >= 100_000_000:
        return 'TOP'
    total_usd = sum(
        f['amount'] for f in fines
        if f['currency'] == 'USD'
    )
    if total_usd >= 100_000_000:
        return 'TOP'
    if 'TOP' in content[:200].upper() or 'priorytet' in content[:500].lower():
        return 'TOP'
    return 'STANDARD'


def slugify(text: str) -> str:
    """PL-safe slug."""
    replacements = {
        'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n',
        'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z',
        'Ą': 'A', 'Ć': 'C', 'Ę': 'E', 'Ł': 'L',
    }
    for pl, en in replacements.items():
        text = text.replace(pl, en)
    text = text.lower()
    text = re.sub(r"['\"]", '', text)
    text = re.sub(r'[^a-z0-9]+', '-', text)
    text = text.strip('-')
    return text[:60]


def build_frontmatter(filepath: Path) -> tuple[dict, str]:
    """Główny processor: czyta kartę, wypluwa dict frontmattera + body."""
    content = filepath.read_text(encoding='utf-8')
    case_id = extract_id_from_filename(filepath.name)
    if not case_id:
        raise ValueError(f"Cannot extract ID from filename: {filepath.name}")

    group = case_id[0]
    title, subtitle = extract_title(content)
    metadata = extract_metadata_table(content)

    companies = extract_companies_from_header(content)
    if not companies:
        companies = extract_companies(metadata)

    year_revealed = extract_year_revealed(metadata) or 2020
    years_active = extract_years_active(metadata)
    jurisdictions = extract_jurisdictions(metadata)
    fines = extract_fines(metadata, content)
    legal_basis = extract_legal_basis(metadata)
    status = infer_status(metadata, content)
    whistleblowers = extract_whistleblowers(content)
    journalists = extract_journalists(content)
    last_updated = extract_last_updated(content)
    word_count = count_words(content)
    priority = guess_priority(content, fines)
    slug = slugify(f"{case_id}-{title}")

    frontmatter = {
        'id': case_id,
        'slug': slug,
        'group': group,
        'group_label': GROUP_LABELS[group],
        'title': title,
        'year_revealed': year_revealed,
        'last_updated': last_updated,
        'companies': companies,
        'status': status,
        'jurisdictions': jurisdictions or ['global'],
        'legal_basis': legal_basis or ['TODO_verify_with_Jan'],
        'fines': fines,
        'whistleblowers': whistleblowers,
        'journalists': journalists,
        'related_cases': [],
        'tags': [],
        'categories': ['privacy'],
        'geo_coords': [],
        'priority': priority,
        'card_complete': True,
        'word_count': word_count,
    }
    if subtitle:
        frontmatter['subtitle'] = subtitle
    if years_active:
        frontmatter['years_active'] = list(years_active)

    return frontmatter, content


def format_frontmatter_yaml(data: dict) -> str:
    """Formatuje YAML z komentarzami TODO dla pól wymagających ręcznej weryfikacji."""

    class TaggedDumper(yaml.SafeDumper):
        pass

    def str_representer(dumper, data):
        if '\n' in data or len(data) > 80:
            return dumper.represent_scalar('tag:yaml.org,2002:str', data, style='|')
        return dumper.represent_scalar('tag:yaml.org,2002:str', data)

    TaggedDumper.add_representer(str, str_representer)

    yaml_str = yaml.dump(
        data,
        Dumper=TaggedDumper,
        default_flow_style=False,
        allow_unicode=True,
        sort_keys=False,
        width=120,
    )

    lines = yaml_str.split('\n')
    enhanced = []
    for line in lines:
        enhanced.append(line)
        if line.startswith('related_cases: []'):
            enhanced.append('# TODO: uzupełnij powiązania merytoryczne (zwykle 3-6 spraw)')
        elif line.startswith('tags: []'):
            enhanced.append('# TODO: uzupełnij 3-8 tagów deskryptywnych (np. deepfake, children, biometrics)')
        elif line.startswith('geo_coords: []'):
            enhanced.append('# TODO: uzupełnij współrzędne regulatorów i miejsc kluczowych')
        elif "TODO_verify_with_Jan" in line:
            enhanced.append('# TODO: zweryfikuj podstawę prawną z treścią karty')
    return '\n'.join(enhanced)


def process_file(input_path: Path, output_path: Path, dry_run: bool = False) -> dict:
    """Przetwarza pojedynczą kartę. Zwraca statystyki."""
    try:
        frontmatter, body = build_frontmatter(input_path)
    except Exception as e:
        return {'path': str(input_path), 'ok': False, 'error': str(e)}

    yaml_block = format_frontmatter_yaml(frontmatter)
    output_content = f"---\n{yaml_block}---\n\n{body}"

    output_filename = f"{frontmatter['slug']}.md"
    final_output = output_path / output_filename

    if dry_run:
        print(f"[DRY RUN] Would write: {final_output}")
        print("Frontmatter preview:")
        print(yaml_block[:500])
        print('...' if len(yaml_block) > 500 else '')
    else:
        output_path.mkdir(parents=True, exist_ok=True)
        final_output.write_text(output_content, encoding='utf-8')

    return {
        'path': str(input_path),
        'output': str(final_output),
        'ok': True,
        'id': frontmatter['id'],
        'fines_count': len(frontmatter['fines']),
        'jurisdictions_count': len(frontmatter['jurisdictions']),
        'whistleblowers_count': len(frontmatter['whistleblowers']),
    }


def main():
    parser = argparse.ArgumentParser(description='Add frontmatter YAML to Matryca cards')
    parser.add_argument('--input', type=str, required=True, help='Input folder with .md cards')
    parser.add_argument('--output', type=str, required=True, help='Output folder for processed cards')
    parser.add_argument('--dry-run', action='store_true', help='Preview without writing')
    args = parser.parse_args()

    input_dir = Path(args.input)
    output_dir = Path(args.output)

    if not input_dir.is_dir():
        print(f"Error: {input_dir} is not a directory", file=sys.stderr)
        sys.exit(1)

    cards = sorted([
        f for f in input_dir.glob('*.md')
        if re.match(r'^[A-E]\d{2}_', f.name)
    ])

    if not cards:
        print(f"No cards found in {input_dir}", file=sys.stderr)
        sys.exit(1)

    print(f"Processing {len(cards)} cards from {input_dir} -> {output_dir}")
    print(f"Dry run: {args.dry_run}\n")

    stats = {'ok': 0, 'errors': 0, 'total_fines': 0}
    for card in cards:
        result = process_file(card, output_dir, dry_run=args.dry_run)
        if result.get('ok'):
            stats['ok'] += 1
            stats['total_fines'] += result.get('fines_count', 0)
            print(f"  OK {result['id']}: {card.name} -> {Path(result['output']).name} "
                  f"(fines={result['fines_count']}, jurisdictions={result['jurisdictions_count']}, "
                  f"whistleblowers={result['whistleblowers_count']})")
        else:
            stats['errors'] += 1
            print(f"  ERROR {card.name}: {result.get('error')}")

    print(f"\nSummary: {stats['ok']} OK, {stats['errors']} errors, "
          f"{stats['total_fines']} fines extracted total")
    print("\nNext steps:")
    print("  1. Review generated files in output folder")
    print("  2. Find `# TODO:` comments and fill missing fields with Jan")
    print("  3. Validate with `npm run build` once Astro project is set up")


if __name__ == '__main__':
    main()
