# Matryca — baza wiedzy o skandalach Big Tech

Portal referencyjny zawierający 33 udokumentowane przypadki naruszeń prywatności,
bezpieczeństwa i etyki w Meta, Google, Apple, Microsoft, Amazon, Uber, TikTok, X, Clearview,
Zoom i LinkedIn — dla dziennikarzy, prawników, akademików i obywateli.

**Stack**: Astro 6 + TypeScript strict + SCSS modules + React islands (tylko gdzie potrzeba)
+ Pagefind (wyszukiwanie statyczne) + d3-geo (mapa światowa build-time).

**Zasady**: bez Tailwind, bez Google Fonts CDN, bez analytics, bez cookies, bez trackerów.
Wszystkie zasoby lokalne. Portal sam nie zbiera danych — bo dokumentuje, jak NIE należy ich zbierać.

---

## Komendy

```sh
npm install            # instalacja zależności
npm run dev            # serwer deweloperski (hot reload) na :4321
npm run build          # produkcyjny build → dist/
npm run preview        # lokalny serwer dist/ na :4321 (po build)
npx astro check        # walidacja TypeScript + schema Zod
```

Po zmianie frontmatterów: `npm run build` przebudowuje indeks Pagefind.

---

## Struktura

```
src/
├── content/cases/*.md         # 33 karty źródłowe (~110 000 słów)
├── content.config.ts          # schemat Zod walidujący frontmattery
├── data/people.ts             # kuratorowana baza 12 sygnalistów/dziennikarzy
├── data/regulators.ts         # baza regulatorów z geokoordynatami
├── layouts/                   # Base, Page, Case, Text
├── components/                # Header, Footer, CaseCard, CaseMeta, KeyFacts, ...
├── pages/                     # wszystkie strony statyczne
│   ├── index.astro            # homepage z pięcioma drzwiami
│   ├── sprawy/                # siatka + detale 33 spraw
│   ├── firmy/                 # indeks 12 firm + strony firm
│   ├── tagi/                  # indeks 24 tagów + strony tagów
│   ├── sygnalisci/            # galeria „Kto odkrył?" + profile
│   ├── mapa.astro             # drzwi GDZIE (v1 — mapa SVG)
│   ├── os-czasu.astro         # drzwi KIEDY (v0 — chronologia)
│   ├── teksty/                # 4 teksty wprowadzające
│   └── o-projekcie, metodologia
└── styles/                    # tokens, reset, typography, global
scripts/                       # skrypty Pythonowe do migracji/kuracji treści
docs/                          # dokumentacja projektu (taksonomia itp.)
```

---

## Deployment

Portal jest w 100% statyczny — deployuje się gdziekolwiek, co serwuje pliki.
Rekomendowane opcje:

### Cloudflare Pages (rekomendowane)

1. Połącz repo z kontem Cloudflare Pages.
2. Konfiguracja build:
   - Framework: `Astro`
   - Build command: `npm run build`
   - Output directory: `dist`
   - Node version: `20`
3. Plik `public/_headers` zawiera już CSP, Permissions-Policy i cache rules.

### Netlify

Plik `netlify.toml` gotowy — wystarczy połączyć repo.
Build command już skonfigurowany, headery bezpieczeństwa załadowane.

### GitHub Pages / inne

```sh
npm run build
# wypchnij zawartość dist/ gdziekolwiek
```

---

## Dokumentacja projektu

- `CLAUDE.md` — konstytucja projektu (stack, design system, co robimy, czego nie)
- `PORTAL_CONTEXT.md` — pełny schema Zod i kontekst treści
- `docs/taksonomia-tagow.md` — propozycja słownika tagów

---

## Licencja treści

Materiał edukacyjny do swobodnego wykorzystania. Przy cytowaniu prosimy o wskazanie źródła:
*Matryca — baza wiedzy o skandalach Big Tech, 2026*.
