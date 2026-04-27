/**
 * Map a current pathname to its counterpart in the other locale.
 * Returns the equivalent path when one exists, or the locale homepage as fallback.
 *
 * Polish is the default locale (no /pl/ prefix). English lives under /en/.
 *
 * Used by the language toggle in Header / HeaderEn so users stay on the
 * same content when switching, instead of being kicked to homepage.
 */

import { url } from './url';

/**
 * Static segment mapping (no slug). Order matters — longer prefixes first
 * inside each block so `/teksty/od-autorow` matches before `/teksty/`.
 */
const PL_TO_EN: Array<[RegExp, (m: RegExpMatchArray) => string]> = [
  // Essays — specific subpages first
  [/^\/teksty\/od-autorow\/?$/, () => '/en/essays/from-authors'],
  [/^\/teksty\/od-prawnika\/?$/, () => '/en/essays/from-a-lawyer'],
  [/^\/teksty\/od-organizacji\/?$/, () => '/en/essays/from-an-organization'],
  [/^\/teksty\/od-obywatelki\/?$/, () => '/en/essays/from-a-citizen'],
  [/^\/teksty\/?$/, () => '/en/essays/'],

  // Cases — slug preserved (md slugs are filename-based, identical PL/EN)
  [/^\/sprawy\/([^/]+)\/?$/, (m) => `/en/cases/${m[1]}`],
  [/^\/sprawy\/?$/, () => '/en/cases/'],

  // Companies — index has EN equivalent, individual companies don't
  [/^\/firmy\/[^/]+\/?$/, () => '/en/companies/'],
  [/^\/firmy\/?$/, () => '/en/companies/'],

  // Whistleblowers — only index has EN
  [/^\/sygnalisci\/[^/]+\/?$/, () => '/en/who-revealed/'],
  [/^\/sygnalisci\/?$/, () => '/en/who-revealed/'],

  // Tags — only index has EN
  [/^\/tagi\/[^/]+\/?$/, () => '/en/tags/'],
  [/^\/tagi\/?$/, () => '/en/tags/'],

  // Single-page sections
  [/^\/gra\/?$/, () => '/en/what-would-you-do/'],
  [/^\/kwestionariusz\/?$/, () => '/en/how-much-they-know/'],
  [/^\/infografiki\/?$/, () => '/en/infographics/'],
  [/^\/metodologia\/?$/, () => '/en/methodology/'],
  [/^\/o-projekcie\/?$/, () => '/en/about/'],
  [/^\/os-czasu\/?$/, () => '/en/timeline/'],
  [/^\/kiedy\/?$/, () => '/en/timeline/'],

  // No EN equivalent — fall back to home
  [/^\/graf\/?$/, () => '/en/'],
  [/^\/mapa\/?$/, () => '/en/'],
  [/^\/zrodla\/?$/, () => '/en/'],

  // Root
  [/^\/$/, () => '/en/'],
];

const EN_TO_PL: Array<[RegExp, (m: RegExpMatchArray) => string]> = [
  // Essays
  [/^\/en\/essays\/from-authors\/?$/, () => '/teksty/od-autorow'],
  [/^\/en\/essays\/from-a-lawyer\/?$/, () => '/teksty/od-prawnika'],
  [/^\/en\/essays\/from-an-organization\/?$/, () => '/teksty/od-organizacji'],
  [/^\/en\/essays\/from-a-citizen\/?$/, () => '/teksty/od-obywatelki'],
  [/^\/en\/essays\/?$/, () => '/teksty/'],

  // Cases
  [/^\/en\/cases\/([^/]+)\/?$/, (m) => `/sprawy/${m[1]}`],
  [/^\/en\/cases\/?$/, () => '/sprawy/'],

  // Lists
  [/^\/en\/companies\/?$/, () => '/firmy/'],
  [/^\/en\/who-revealed\/?$/, () => '/sygnalisci/'],
  [/^\/en\/tags\/?$/, () => '/tagi/'],

  // Single-page sections
  [/^\/en\/what-would-you-do\/?$/, () => '/gra/'],
  [/^\/en\/how-much-they-know\/?$/, () => '/kwestionariusz/'],
  [/^\/en\/infographics\/?$/, () => '/infografiki'],
  [/^\/en\/methodology\/?$/, () => '/metodologia'],
  [/^\/en\/about\/?$/, () => '/o-projekcie'],
  [/^\/en\/timeline\/?$/, () => '/os-czasu'],

  // Root
  [/^\/en\/?$/, () => '/'],
];

/**
 * Strip a leading base path (e.g. `/matryca`) so regex matching works on
 * the canonical route. We re-add the base in `url()` at the end.
 */
function stripBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (base && path.startsWith(base)) return path.slice(base.length) || '/';
  return path;
}

export function altLangUrl(currentPath: string, target: 'en' | 'pl'): string {
  const path = stripBase(currentPath);
  const table = target === 'en' ? PL_TO_EN : EN_TO_PL;
  for (const [re, fn] of table) {
    const m = path.match(re);
    if (m) return url(fn(m));
  }
  // Unknown route — safe fallback to locale home
  return url(target === 'en' ? '/en/' : '/');
}
