/**
 * Kanoniczne slugi firm i mapa dla normalizacji wariantów nazw.
 * Tylko firmy z dedykowaną stroną indeksową mają tu wpis.
 */

export interface CompanyInfo {
  slug: string;
  label: string;
  description: string;
  group: 'A' | 'B' | 'C' | 'D' | 'E';
}

export const COMPANIES: Record<string, CompanyInfo> = {
  meta: {
    slug: 'meta',
    label: 'Meta',
    description:
      'Meta Platforms (dawniej Facebook Inc.) — właściciel Facebooka, Instagrama, WhatsAppa, Messengera. Centrala europejska: Dublin.',
    group: 'A',
  },
  google: {
    slug: 'google',
    label: 'Google',
    description:
      'Alphabet Inc. / Google LLC — wyszukiwarka, Chrome, Android, YouTube, Maps, Gmail. Dominujący gracz rynku reklamy internetowej i mobilnej.',
    group: 'B',
  },
  apple: {
    slug: 'apple',
    label: 'Apple',
    description:
      'Apple Inc. — iPhone, Mac, iPad, iCloud, App Store. Marka pozycjonowana jako „firma prywatności" — co jest częścią jej komunikacji marketingowej i przedmiotem niejednej z tu dokumentowanych spraw.',
    group: 'C',
  },
  microsoft: {
    slug: 'microsoft',
    label: 'Microsoft',
    description:
      'Microsoft Corporation — Windows, Office, Azure, LinkedIn, GitHub, Xbox. Jedna z firm najmocniej integrujących AI z produktami konsumenckimi.',
    group: 'C',
  },
  linkedin: {
    slug: 'linkedin',
    label: 'LinkedIn',
    description:
      'LinkedIn (własność Microsoftu) — portal zawodowy. Tu ujawniono problem trenowania modeli AI na danych użytkowników bez wyraźnej zgody.',
    group: 'C',
  },
  amazon: {
    slug: 'amazon',
    label: 'Amazon',
    description:
      'Amazon.com Inc. — handel internetowy, AWS, Alexa, Ring, Kindle. Operator sieci kamer domowych udostępnianych policji w USA.',
    group: 'D',
  },
  uber: {
    slug: 'uber',
    label: 'Uber',
    description:
      'Uber Technologies Inc. — transport, dostawy, logistyka. Historyczny przykład strategii „działaj szybko, łam rzeczy" przeniesionej na infrastrukturę miejską.',
    group: 'D',
  },
  tiktok: {
    slug: 'tiktok',
    label: 'TikTok / ByteDance',
    description:
      'ByteDance (chiński właściciel) / TikTok — platforma krótkich filmów z dominującym algorytmem rekomendacyjnym dla młodych użytkowników. Wątek bezpieczeństwa narodowego w USA i UE.',
    group: 'E',
  },
  x: {
    slug: 'x',
    label: 'X (dawniej Twitter)',
    description:
      'X Corp. / xAI — platforma mikroblogowa przejęta przez Elona Muska w 2022 roku. Zmiana zasad moderacji, rozwój Grok (model AI) i nieograniczone generowanie obrazów.',
    group: 'E',
  },
  clearview: {
    slug: 'clearview',
    label: 'Clearview AI',
    description:
      'Clearview AI Inc. — baza 30+ miliardów zdjęć twarzy pobranych z internetu, sprzedawana policji i agencjom. Zakazana przez regulatorów UE i Wielkiej Brytanii.',
    group: 'E',
  },
  zoom: {
    slug: 'zoom',
    label: 'Zoom',
    description:
      'Zoom Video Communications — komunikator wideo, który rozrósł się w pandemii. Sprawa fałszywego szyfrowania end-to-end i przesyłania ruchu przez serwery w Chinach.',
    group: 'E',
  },
  yandex: {
    slug: 'yandex',
    label: 'Yandex',
    description:
      'Yandex N.V. — rosyjski odpowiednik Google. Pojawia się jako współwykonawca w sprawach lokalnego pobierania danych, w pewnych kontekstach wspólnie z Metą.',
    group: 'A',
  },
};

/**
 * Mapuje wariant nazwy z frontmatter na kanoniczny slug.
 * Zwraca null jeśli firma nie ma dedykowanej strony.
 */
export function companyToSlug(name: string): string | null {
  const n = name.toLowerCase().trim();
  if (n.includes('meta') || n === 'facebook') return 'meta';
  if (n.includes('google')) return 'google';
  if (n === 'apple') return 'apple';
  if (n === 'microsoft') return 'microsoft';
  if (n === 'linkedin') return 'linkedin';
  if (n.includes('amazon')) return 'amazon';
  if (n.includes('uber')) return 'uber';
  if (n.includes('tiktok') || n === 'bytedance') return 'tiktok';
  if (n === 'x' || n === 'xai') return 'x';
  if (n.includes('clearview')) return 'clearview';
  if (n.includes('zoom')) return 'zoom';
  if (n === 'yandex') return 'yandex';
  return null;
}
