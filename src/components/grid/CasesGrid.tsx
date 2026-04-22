import { useState, useMemo } from 'react';

interface Fine {
  amount: number;
  currency: string;
  status?: string;
  category?: string;
}

interface CaseItem {
  id: string;
  slug: string;
  group: 'A' | 'B' | 'C' | 'D' | 'E';
  title: string;
  subtitle?: string;
  companies: string[];
  year_revealed: number;
  status: string;
  fines: Fine[];
  jurisdictions?: string[];
  priority?: string;
  categories: string[];
  tags?: string[];
}

interface Props {
  cases: CaseItem[];
}

const GROUP_LABELS: Record<string, string> = {
  A: 'Meta',
  B: 'Google',
  C: 'Apple / MS / LinkedIn',
  D: 'Amazon / Uber',
  E: 'TikTok / X / Clearview / Zoom',
};

const STATUS_LABELS: Record<string, string> = {
  active_investigation: 'Aktywne śledztwo',
  settled: 'Ugoda',
  withdrawn: 'Wycofano',
  concluded: 'Zakończono',
  ongoing_litigation: 'Postępowanie trwa',
  regulatory_monitoring: 'Monitoring',
  criminal_proceedings: 'Postępowanie karne',
};

const CATEGORY_LABELS: Record<string, string> = {
  privacy: 'Prywatność',
  children_safety: 'Bezpieczeństwo dzieci',
  election_manipulation: 'Manipulacja wyborami',
  biometrics: 'Biometria',
  ai_training: 'Trening AI',
  surveillance: 'Inwigilacja',
  financial_deception: 'Oszustwa finansowe',
  content_moderation: 'Moderacja treści',
  workers_access: 'Dostęp pracowników',
  false_security_claims: 'Fałszywe claims',
  data_transfer: 'Transfer danych',
  geopolitics: 'Geopolityka',
};

const TAG_LABELS: Record<string, string> = {
  'dark-patterns': 'dark patterns',
  'addictive-design': 'addictive design',
  'rozpoznawanie-twarzy': 'rozpoznawanie twarzy',
  'sledzenie-lokalizacji': 'śledzenie lokalizacji',
  'trening-ai': 'trening AI',
  'moderacja-algorytmiczna': 'moderacja algorytmiczna',
  'eksperyment-psychologiczny': 'eksperyment psychologiczny',
  dezinformacja: 'dezinformacja',
  dzieci: 'dzieci',
  wyborcy: 'wyborcy',
  pracownicy: 'pracownicy',
  dziennikarze: 'dziennikarze',
  mniejszosci: 'mniejszości',
  rodo: 'RODO',
  coppa: 'COPPA',
  bipa: 'BIPA',
  'schrems-ii': 'Schrems II',
  'pozew-zbiorowy': 'pozew zbiorowy',
  'wyciek-danych': 'wyciek danych',
  sygnalista: 'sygnalista',
  criminal: 'criminal',
  geopolityka: 'geopolityka',
  'polski-watek': 'polski wątek',
  deepfake: 'deepfake',
};

function formatAmount(amount: number): string {
  if (amount >= 1_000_000_000) return `${(amount / 1_000_000_000).toFixed(1).replace('.0', '')} mld`;
  if (amount >= 1_000_000) return `${Math.round(amount / 1_000_000)} mln`;
  return new Intl.NumberFormat('pl-PL').format(amount);
}

function getTopFine(fines: Fine[]): Fine | null {
  if (!fines.length) return null;
  const govPriority = (f: Fine) =>
    f.category === 'regulatory_fine' || f.category === 'state_attorney_general' ? 0 : 1;
  return [...fines].sort((a, b) => {
    const ga = govPriority(a);
    const gb = govPriority(b);
    if (ga !== gb) return ga - gb;
    return b.amount - a.amount;
  })[0];
}

function StatusPill({ status }: { status: string }) {
  const label = STATUS_LABELS[status] ?? status;
  const isActive = ['active_investigation', 'ongoing_litigation', 'criminal_proceedings'].includes(status);
  return (
    <span
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '10px',
        letterSpacing: '0.03em',
        padding: '2px 7px',
        borderRadius: 'var(--radius-sm)',
        border: '0.5px solid currentColor',
        color: isActive ? '#b45309' : 'var(--text-secondary)',
        background: isActive ? 'rgba(180,83,9,0.06)' : 'transparent',
        whiteSpace: 'nowrap' as const,
      }}
    >
      {label}
    </span>
  );
}

function GroupBadge({ group }: { group: string }) {
  const colors: Record<string, { bg: string; color: string }> = {
    A: { bg: 'rgba(99,102,241,0.08)', color: '#4f46e5' },
    B: { bg: 'rgba(16,163,127,0.08)', color: '#0d9488' },
    C: { bg: 'rgba(100,116,139,0.1)', color: '#475569' },
    D: { bg: 'rgba(245,158,11,0.08)', color: '#d97706' },
    E: { bg: 'rgba(163,45,45,0.08)', color: 'var(--accent)' },
  };
  const style = colors[group] ?? { bg: 'transparent', color: 'var(--text-secondary)' };
  return (
    <span
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '10px',
        padding: '1px 5px',
        borderRadius: 'var(--radius-sm)',
        background: style.bg,
        color: style.color,
      }}
    >
      {group}
    </span>
  );
}

function TagPill({ tag, onClick, active }: { tag: string; onClick?: () => void; active?: boolean }) {
  const label = TAG_LABELS[tag] ?? tag;
  return (
    <span
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          e.stopPropagation();
          onClick();
        }
      }}
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '10px',
        padding: '1px 6px',
        borderRadius: 'var(--radius-sm)',
        background: active ? 'var(--accent-bg)' : 'var(--bg-secondary)',
        color: active ? 'var(--accent)' : 'var(--text-secondary)',
        cursor: onClick ? 'pointer' : 'default',
        whiteSpace: 'nowrap' as const,
      }}
    >
      {label}
    </span>
  );
}

export default function CasesGrid({ cases }: Props) {
  const [filterGroup, setFilterGroup] = useState<string>('');
  const [filterStatus, setFilterStatus] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('');
  const [filterTag, setFilterTag] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('year');
  const [query, setQuery] = useState<string>('');

  const allCategories = useMemo(() => {
    const cats = new Set<string>();
    cases.forEach((c) => c.categories.forEach((cat) => cats.add(cat)));
    return Array.from(cats).sort();
  }, [cases]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    cases.forEach((c) => (c.tags ?? []).forEach((t) => tags.add(t)));
    return Array.from(tags).sort();
  }, [cases]);

  const filtered = useMemo(() => {
    let result = [...cases];

    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          (c.subtitle ?? '').toLowerCase().includes(q) ||
          c.companies.some((co) => co.toLowerCase().includes(q)) ||
          (c.tags ?? []).some((t) => t.toLowerCase().includes(q)) ||
          c.id.toLowerCase().includes(q)
      );
    }

    if (filterGroup) result = result.filter((c) => c.group === filterGroup);
    if (filterStatus) result = result.filter((c) => c.status === filterStatus);
    if (filterCategory) result = result.filter((c) => c.categories.includes(filterCategory));
    if (filterTag) result = result.filter((c) => (c.tags ?? []).includes(filterTag));

    if (sortBy === 'year') result.sort((a, b) => b.year_revealed - a.year_revealed);
    else if (sortBy === 'year_asc') result.sort((a, b) => a.year_revealed - b.year_revealed);
    else if (sortBy === 'title') result.sort((a, b) => a.title.localeCompare(b.title, 'pl'));
    else if (sortBy === 'fine') {
      result.sort((a, b) => {
        const aFine = getTopFine(a.fines);
        const bFine = getTopFine(b.fines);
        return (bFine?.amount ?? 0) - (aFine?.amount ?? 0);
      });
    }

    return result;
  }, [cases, query, filterGroup, filterStatus, filterCategory, filterTag, sortBy]);

  const selectStyle: React.CSSProperties = {
    fontFamily: 'var(--font-sans)',
    fontSize: '13px',
    color: 'var(--text-primary)',
    background: 'var(--bg-card)',
    border: '0.5px solid var(--border-hover)',
    borderRadius: 'var(--radius-md)',
    padding: '6px 10px',
    cursor: 'pointer',
    outline: 'none',
  };

  const activeFilters = [filterGroup, filterStatus, filterCategory, filterTag, query].filter(Boolean).length;

  return (
    <div>
      {/* Filters */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          marginBottom: '16px',
          alignItems: 'center',
        }}
      >
        <input
          type="search"
          placeholder="Szukaj sprawy, firmy, tagu..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            ...selectStyle,
            padding: '6px 12px',
            flex: '1',
            minWidth: '200px',
          }}
          aria-label="Szukaj"
        />

        <select
          value={filterGroup}
          onChange={(e) => setFilterGroup(e.target.value)}
          style={selectStyle}
          aria-label="Filtruj według grupy"
        >
          <option value="">Wszystkie grupy</option>
          {Object.entries(GROUP_LABELS).map(([key, label]) => (
            <option key={key} value={key}>
              {key} — {label}
            </option>
          ))}
        </select>

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          style={selectStyle}
          aria-label="Filtruj według statusu"
        >
          <option value="">Wszystkie statusy</option>
          {Object.entries(STATUS_LABELS).map(([key, label]) => (
            <option key={key} value={key}>{label}</option>
          ))}
        </select>

        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          style={selectStyle}
          aria-label="Filtruj według kategorii"
        >
          <option value="">Wszystkie kategorie</option>
          {allCategories.map((cat) => (
            <option key={cat} value={cat}>{CATEGORY_LABELS[cat] ?? cat}</option>
          ))}
        </select>

        <select
          value={filterTag}
          onChange={(e) => setFilterTag(e.target.value)}
          style={selectStyle}
          aria-label="Filtruj według tagu"
        >
          <option value="">Wszystkie tagi</option>
          {allTags.map((tag) => (
            <option key={tag} value={tag}>{TAG_LABELS[tag] ?? tag}</option>
          ))}
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={selectStyle}
          aria-label="Sortuj"
        >
          <option value="year">Rok (najnowsze)</option>
          <option value="year_asc">Rok (najstarsze)</option>
          <option value="fine">Kara (najwyższa)</option>
          <option value="title">Alfabetycznie</option>
        </select>

        {activeFilters > 0 && (
          <button
            onClick={() => {
              setQuery('');
              setFilterGroup('');
              setFilterStatus('');
              setFilterCategory('');
              setFilterTag('');
            }}
            style={{
              ...selectStyle,
              color: 'var(--accent)',
              border: '0.5px solid var(--accent)',
              background: 'transparent',
            }}
          >
            Wyczyść filtry
          </button>
        )}
      </div>

      {/* Results count */}
      <p
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'var(--text-tertiary)',
          marginBottom: '16px',
        }}
      >
        {filtered.length} {filtered.length === 1 ? 'sprawa' : filtered.length < 5 ? 'sprawy' : 'spraw'}
        {filtered.length !== cases.length && ` z ${cases.length}`}
      </p>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '12px',
        }}
      >
        {filtered.map((c) => {
          const topFine = getTopFine(c.fines);
          const displayTags = (c.tags ?? []).slice(0, 3);
          const remainingTags = (c.tags?.length ?? 0) - displayTags.length;
          const jCount = c.jurisdictions?.length ?? 0;
          return (
            <a
              key={c.id}
              href={`/sprawy/${c.slug}/`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                padding: '18px',
                background: 'var(--bg-card)',
                border: '0.5px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'border-color 150ms ease-out',
                ...(c.priority === 'TOP' ? { borderLeft: '2px solid var(--accent)' } : {}),
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  c.priority === 'TOP' ? 'var(--accent)' : 'var(--border)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <GroupBadge group={c.group} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-tertiary)', marginRight: 'auto' }}>
                  {c.id}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-tertiary)' }}>
                  {c.year_revealed}
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '18px',
                    fontWeight: 500,
                    lineHeight: 1.3,
                    color: 'var(--text-primary)',
                    margin: 0,
                  }}
                >
                  {c.title}
                </p>
                {c.subtitle && (
                  <p style={{
                    fontSize: '13px',
                    lineHeight: 1.45,
                    color: 'var(--text-secondary)',
                    margin: 0,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}>
                    {c.subtitle}
                  </p>
                )}
              </div>

              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-secondary)', margin: 0, marginTop: 'auto' }}>
                {c.companies.slice(0, 3).join(' · ')}
                {jCount > 0 && (
                  <span style={{ color: 'var(--text-tertiary)' }}>
                    {' '}· {jCount} {jCount === 1 ? 'jurysdykcja' : 'jurysdykcji'}
                  </span>
                )}
              </p>

              {displayTags.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                  {displayTags.map((t) => (
                    <TagPill
                      key={t}
                      tag={t}
                      active={filterTag === t}
                      onClick={() => setFilterTag(filterTag === t ? '' : t)}
                    />
                  ))}
                  {remainingTags > 0 && (
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      color: 'var(--text-tertiary)',
                      alignSelf: 'center',
                    }}>
                      +{remainingTags}
                    </span>
                  )}
                </div>
              )}

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '8px',
                borderTop: '0.5px solid var(--border)',
              }}>
                <StatusPill status={c.status} />
                {topFine && (
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent)', fontWeight: 500 }}>
                    {formatAmount(topFine.amount)} {topFine.currency}
                  </span>
                )}
              </div>
            </a>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', padding: '48px 0' }}>
          Brak wyników dla podanych filtrów.
        </p>
      )}
    </div>
  );
}
