/**
 * Prepend Astro base path to an internal URL.
 *
 * Use this for all internal <a href> values so the portal works
 * both at root (`/`) and in subpath deployments (`/matryca/`).
 *
 * Do NOT use for CSS `url(...)`, <img src>, or `<link href>` — Astro
 * handles those automatically at build time.
 */
export function url(path: string): string {
  // BASE_URL may or may not end with '/'; normalize both sides.
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`;
}
