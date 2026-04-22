export function formatFine(amount: number, currency: string): string {
  const formatted = new Intl.NumberFormat('pl-PL', {
    maximumFractionDigits: 0,
  }).format(amount);
  return `${formatted} ${currency}`;
}

export function formatFineSummary(
  fines: Array<{ amount: number; currency: string }>
): string {
  if (fines.length === 0) return '—';
  // Group by currency and sum
  const totals = fines.reduce<Record<string, number>>((acc, f) => {
    acc[f.currency] = (acc[f.currency] ?? 0) + f.amount;
    return acc;
  }, {});
  return Object.entries(totals)
    .map(([currency, amount]) => formatFine(amount, currency))
    .join(' + ');
}

export function getTopFine(
  fines: Array<{ amount: number; currency: string; status?: string; category?: string }>
): { amount: number; currency: string; authority?: string; category?: string } | null {
  if (fines.length === 0) return null;
  // Najwyższa kara = najwyższa kwota (waluta pokazana obok, więc czytelnik
  // widzi kontekst). Priorytet dla kar rządowych przed ugodami cywilnymi,
  // bo pierwsze są bardziej „reprezentatywne" dla skali egzekucji prawa.
  const govPriority = (f: { category?: string }) => {
    if (f.category === 'regulatory_fine' || f.category === 'state_attorney_general') return 0;
    return 1;
  };
  const sorted = [...fines].sort((a, b) => {
    const ga = govPriority(a);
    const gb = govPriority(b);
    if (ga !== gb) return ga - gb;
    return b.amount - a.amount;
  });
  return sorted[0] as { amount: number; currency: string; authority?: string; category?: string };
}

export function formatAmount(amount: number): string {
  if (amount >= 1_000_000_000) {
    return `${(amount / 1_000_000_000).toFixed(1).replace('.0', '')} mld`;
  }
  if (amount >= 1_000_000) {
    return `${(amount / 1_000_000).toFixed(0)} mln`;
  }
  return new Intl.NumberFormat('pl-PL').format(amount);
}

export function formatBillions(n: number): string {
  if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(1)} mld`;
  if (n >= 1_000_000) return `${Math.round(n / 1_000_000)} mln`;
  return new Intl.NumberFormat('pl-PL').format(n);
}

export const STATUS_LABELS: Record<string, string> = {
  active_investigation: 'Aktywne śledztwo',
  settled: 'Ugoda',
  withdrawn: 'Wycofano',
  concluded: 'Zakończono',
  ongoing_litigation: 'Postępowanie trwa',
  regulatory_monitoring: 'Monitoring regulatora',
  criminal_proceedings: 'Postępowanie karne',
};

export const GROUP_LABELS: Record<string, string> = {
  A: 'Meta',
  B: 'Google',
  C: 'Apple / Microsoft / LinkedIn',
  D: 'Amazon / Uber',
  E: 'TikTok / X / Clearview / Zoom',
};

export const CATEGORY_LABELS: Record<string, string> = {
  privacy: 'Prywatność',
  children_safety: 'Bezpieczeństwo dzieci',
  election_manipulation: 'Manipulacja wyborami',
  biometrics: 'Biometria',
  ai_training: 'Trening AI',
  surveillance: 'Inwigilacja',
  financial_deception: 'Oszustwa finansowe',
  content_moderation: 'Moderacja treści',
  workers_access: 'Dostęp pracowników',
  false_security_claims: 'Fałszywe claims bezpieczeństwa',
  data_transfer: 'Transfer danych',
  geopolitics: 'Geopolityka',
};
