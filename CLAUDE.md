# CLAUDE.md — Konstytucja projektu Matryca

> Ten plik jest pierwszym, który czytasz w każdej sesji. Zawiera decyzje projektowe, których nie podważaj bez konsultacji z użytkownikiem (Jan).

---

## Czym jest ten projekt

**Matryca** to portal referencyjny zawierający 33 udokumentowane sprawy skandali prywatności, bezpieczeństwa i etyki w Big Tech (Meta, Google, Apple, Microsoft, Amazon, Uber, TikTok, X, Clearview, Zoom, LinkedIn). Treść źródłowa — 33 karty Markdown po ~3000-4000 słów każda, razem ~110 000 słów — leży w folderze `content/` (lub analogicznym, do zaproponowania podczas setupu).

**Główny odbiorca:** dziennikarze, prawnicy, akademicy. Portal jest **bazą referencyjną**, nie masowym medium. Cytowalność, trwałość URL i jakość źródeł są nadrzędne.

**Dominujący ton:** ProPublica + The Pudding + Kurzgesagt. Poważny, ale przystępny. Wizualnie ambitny, ale bez "tech bro" estetyki. Polski/angielski od początku.

---

## Stack technologiczny — decyzje finalne

- **Framework:** Astro 4+ (statyczne strony z "wyspami" interaktywności)
- **Język:** TypeScript, strict mode włączony
- **Style:** **bez Tailwind**. Piszemy SCSS modules + globalny design system w `src/styles/`. Powód: projekt ma charakter editorialny, Tailwind wprowadza szum w HTML, a w Astro z komponentami SCSS modules są czystsze.
- **Interaktywność:** React jako framework wysp (`@astrojs/react`). Używamy tam, gdzie **naprawdę** potrzeba (graf, mapa, quiz, filtry). Reszta — `.astro` static.
- **Zarządzanie treścią:** Astro Content Collections. Każda sprawa to plik `.md` z frontmatterem YAML walidowanym przez Zod schema.
- **Wyszukiwarka:** Pagefind (static, client-side, bez backendu).
- **Graf:** Cytoscape.js (dojrzalszy niż D3 dla grafów, lepsza ergonomia).
- **Mapa:** MapLibre GL JS (open source, własne tiles z CartoDB lub Stadia Maps).
- **Scrollytelling osi czasu:** Scrollama (lightweight, battle-tested).
- **Wykresy statyczne:** D3 lub Observable Plot generowane jako SVG w build time (nie runtime).
- **i18n:** Astro native i18n (pl jako default, en jako druga locale).
- **Hosting:** Cloudflare Pages (preferowany) lub Netlify. Build-time static, bez backendu.
- **Domena:** nazwa do ustalenia (rozważane: matryca.org, skandalogram.pl, bigtech.watch).

**Czego NIE używamy:**
- Tailwind CSS (zbyt gęsty w HTML dla editorial content)
- Next.js (niepotrzebny overhead SSR dla statycznego portalu)
- Analytics Google/Plausible **z trackingiem zachowań** — portal nie zbiera danych o użytkownikach
- CMS (Contentful, Strapi, Sanity) — treść w Markdown w repo to część metodologii
- Własny backend — portal jest 100% statyczny
- Cookies inne niż absolutnie niezbędne (np. language toggle w localStorage)

---

## Struktura treści

33 sprawy pogrupowane A-E, każda ma ID (A01, B01, ...):
- **A (10):** Meta / Facebook / Instagram / WhatsApp
- **B (6):** Google / Alphabet
- **C (5):** Apple / Microsoft / LinkedIn
- **D (6):** Amazon / Uber
- **E (6):** TikTok / X / Clearview / Zoom

Każda karta ma 14 sekcji: Metadane, TL;DR, Oś czasu, Mechanizm, Odkrycie, Osoby kluczowe, Reakcja firmy, Postępowanie prawne, Kary i ugody, Precedensy i implikacje, Pozwy zbiorowe, Wnioski dla obywateli, Ciekawostki, Źródła.

**Dodatkowy kontekst treści** — patrz `PORTAL_CONTEXT.md`.

---

## Pięć drzwi wejścia (architektura portalu)

Portal nie ma jednej ścieżki narracyjnej. Strona główna prezentuje **pięć równorzędnych wejść** (wszystkie zasilane tym samym datasetem):

1. **GDZIE** — mapa świata z pinami regulatorów i liniami transferów danych (MapLibre)
2. **KIEDY** — scrollytelling osi czasu 2010-2026, narracyjny łuk (Scrollama + custom)
3. **DLACZEGO** — graf powiązań spraw: precedensy, sygnaliści, firmy, podstawy prawne (Cytoscape)
4. **KOGO** — galeria 15-20 sygnalistów i kluczowych dziennikarzy (static grid)
5. **CO** — siatka 33 spraw z potężnymi filtrami i wyszukiwaniem (React + Pagefind)

**Satelity** (mniej prioritetowe, implementacja po MVP):
- Quiz diagnostyczny "ile Big Tech wie o tobie" (15 pytań)
- Kalkulator kar (z porównaniami skali — "tyle co roczny budżet X")
- Gra decyzyjna (6-8 scenariuszy "co byś zrobił")
- Biblioteka infografik (SVG do embedowania w artykułach innych mediów)

---

## Design system — niewypowiedzialne tokeny

### Typografia

- **Serif (nagłówki, editorial):** Source Serif 4 — dostępny na Google Fonts / Fontsource
- **Sans (UI, body):** Inter — dostępny na Google Fonts / Fontsource
- **Mono (meta, ID, timestampy):** IBM Plex Mono — dostępny na Google Fonts / Fontsource

Wszystkie fonty pobieramy **lokalnie** (npm: `@fontsource-variable/source-serif-4`, `@fontsource-variable/inter`, `@fontsource/ibm-plex-mono`). Nie linkujemy do Google Fonts runtime (privacy + performance).

Skala typograficzna:
- `h1` 42px / serif / weight 500 / line-height 1.15 / letter-spacing -0.02em
- `h2` 28px / serif / weight 500 / line-height 1.3
- `h3` 20px / serif / weight 500
- `h4` 16px / sans / weight 500
- `body` 16px / sans / weight 400 / line-height 1.65
- `small` 13px / sans / weight 400
- `meta` 11-12px / mono / weight 400 / letter-spacing 0.02em

**Dwie wagi tylko:** 400 regular, 500 medium. Nie używamy 600/700 — wyglądają jak "tech blog", nie editorial.

**Sentence case wszędzie.** Nigdy Title Case, nigdy ALL CAPS. Polska typografia ma własny rytm — "Skandale Big Tech", nie "Skandale big tech" ani "SKANDALE BIG TECH".

### Paleta

- **Tło jasne:** `#FAFAF7` (lekko ciepłe białe, nie pure white) + `#FFFFFF` dla cards
- **Tło ciemne:** `#0F1013` (granat-antracyt, nie czarne) + `#1A1C20` dla cards
- **Text primary (light):** `#1A1C20`, **(dark):** `#F2F0EA`
- **Text secondary (light):** `#5C5E64`, **(dark):** `#A8A6A0`
- **Text tertiary:** `#8E9096` / `#6C6A66`
- **Borders:** `rgba(0,0,0,0.08)` / `rgba(255,255,255,0.1)`
- **Akcent jedyny:** `#A32D2D` (polski czerwony, c-red-600 w naszym systemie)
  - Hover darker: `#791F1F`
  - Tło light: `#FCEBEB`
  - Tekst na tle light: `#501313`

**Jeden akcent.** Portal nie używa palety 5 kolorów. Grupa tematyczna A/B/C/D/E może mieć swoje subtelne różnicowanie (mikroakcent w karcie), ale **główny kolor akcji jest zawsze czerwony**.

### Spacing

Rytm pionowy na `rem`, gap wewnętrzny na `px`:
- `0.25rem / 0.5rem / 0.75rem / 1rem / 1.5rem / 2rem / 3rem / 4rem / 6rem`
- wewnętrzne gapy: `4px / 8px / 12px / 16px / 24px`

Radius:
- `--radius-sm: 4px` (pills, badges)
- `--radius-md: 8px` (buttons, small cards)
- `--radius-lg: 12px` (main cards)
- `--radius-xl: 16px` (hero containers, modals)

### Ruch

- **Transitions:** 150-200ms dla hover, 300-400ms dla content transitions, ease-out
- **Żadnych bounce**, żadnych spring animations
- **Fade-in** dozwolony, **slide-up** oszczędnie (staggered dla list)
- **No parallax** (zbyt komercyjne)

### Ikonografia

- **Phosphor Icons** (`phosphor-icons-react`) — preferowana biblioteka, wariant `regular` (1.2px stroke)
- **Tabler Icons** jako backup
- Rozmiar: `16px` w UI, `20-22px` w drzwiach, `24px` max dla dekoracyjnych
- **Żadnych emoji** w UI portalu (tylko w treści kart jeśli autor chce)
- **Żadnych logotypów firm** — ryzyko prawne + estetyka. Zamiast logotypów: typograficzne inicjały, monochrome abstract shapes.

---

## Konwencje kodu

### Nazewnictwo

- **Komponenty:** PascalCase (`CaseCard.astro`, `FilterPanel.tsx`)
- **Pliki treści:** `e04-grok-deepfakes.md` (kebab-case, slug-style)
- **Foldery:** `src/components/case-card/`, nie `src/components/CaseCard/` (unix convention)
- **CSS classes:** BEM-lite — `.case-card`, `.case-card__title`, `.case-card--featured`
- **Zmienne JS:** camelCase
- **Constants:** SCREAMING_SNAKE_CASE tylko dla "prawdziwych" stałych modułu
- **Typy TS:** PascalCase, interfejsy bez prefiksu `I` (`Case`, nie `ICase`)

### Komponenty

- **Preferuj `.astro`** gdzie nie potrzeba JS interaktywności
- **React tylko dla wysp** — graf, mapa, filtrowanie runtime, quiz, scrollytelling state
- **Props interface** zawsze eksplicytnie typowany
- **Default exports** dla komponentów, named exports dla utilities

### Content schema

Każda sprawa w `src/content/cases/*.md` ma frontmatter **walidowany przez Zod** (`src/content/config.ts`). **Nie modyfikuj tej walidacji bez rozmowy**. Pełny schema patrz `PORTAL_CONTEXT.md`.

---

## Czego NIE robić — lista twarda

1. **Nie dodawaj analytics** (Google, Plausible, Matomo, Fathom) bez eksplicytnej zgody Jana. Portal demonstruje, jak NIE zbierać danych o użytkownikach.
2. **Nie dodawaj cookies** poza niezbędnym (language toggle).
3. **Nie używaj logotypów Meta/Google/Apple/etc.** w UI. Prawo i estetyka.
4. **Nie linkuj runtime do Google Fonts, CDN Cloudflare dla fonts, itp.** Wszystkie zasoby lokalne lub self-hosted.
5. **Nie rób scrolljackingu.** Scrollytelling osi czasu TAK (oparty na Scrollama). Scrolljacking całej strony NIE.
6. **Nie używaj gradientów, shadow, glow, blur effects** w UI. Editorial portal = flat, clean, precise.
7. **Nie używaj Title Case ani ALL CAPS.** Sentence case.
8. **Nie używaj boldu w środku zdania.** Bold jest dla nagłówków i labeli.
9. **Nie dodawaj "tech icons"** (rockets, lightning bolts, sparkles) bo portal jest "o AI".
10. **Nie zakładaj, że użytkownik chce dark mode automatycznie** — dawaj toggle, respect `prefers-color-scheme` jako default.
11. **Nie zgaduj wartości frontmatter'ów.** Jeśli pole nie jest jasne z treści karty, **zapytaj Jana** zanim dopiszesz.
12. **Nie twórz nowych formatów treści** (JSON, YAML standalone, TOML) jeśli nie jest to absolutnie konieczne. Markdown + frontmatter to jedyne źródło prawdy dla spraw.

---

## Proces pracy

### Commity

- Komunikaty po angielsku, imperative mood: `Add case card filtering`, nie `Added filtering for cases`
- Jeden commit = jedna zmiana logiczna
- Co-authored-by Claude dozwolone jeśli Jan chce

### Branching

- `main` — produkcja
- `dev` — integracja
- Feature branches: `feat/timeline-scrollytelling`, `fix/case-card-mobile`

### Deployment

- Preview na każdy PR (Cloudflare Pages preview)
- Merge do `main` → deploy production
- **Nie deploy'uj bez zgody Jana** przy dużych zmianach wizualnych

---

## Kiedy pytać Jana

Pytaj **zanim** zrobisz coś z tej listy:

- Dodanie nowej zależności (`npm install X`) — zwłaszcza frontend framework lub CSS library
- Zmiana architektury (np. przejście z Astro na Next.js, albo wprowadzenie backendu)
- Zmiana design tokenów (kolor, font, spacing scale)
- Refactor, który dotyka >5 plików
- Decyzja dotycząca sposobu prezentacji danych (np. "czy TikTok to jedna karta czy trzy?")
- Integracja z zewnętrznym API (mapy, embed social media, newsletter)
- Analytics, cookies, tracking w jakiejkolwiek formie
- Cokolwiek, co wydaje ci się "creative" albo "bold" — portal jest konserwatywny wizualnie

Nie pytaj o:

- Drobny refactor w jednym pliku
- Typowanie TS
- Poprawki linter
- Dodanie testów
- Formatowanie kodu
- Doprecyzowanie responsywności

---

## Plan faz

### Faza 1 (MVP, ~3 tygodnie)

- Setup Astro + TypeScript + SCSS + i18n
- Content collections ze schematem Zod dla spraw
- Frontmatter YAML dla 33 kart (skrypt automatyzujący + ręczna korekta)
- Layout główny (nawigacja, footer, typografia, dark mode toggle)
- Strona główna (5 drzwi — statyczne karty, bez interaktywności, plus stats)
- **Drzwi CO**: siatka 33 spraw + podstawowe filtry (grupa, rok, kara) + Pagefind search
- Karta pojedynczej sprawy (template referencyjny)
- Stopka, strony meta (o projekcie, metodologia, źródła)

### Faza 2 (~4 tygodnie)

- **Drzwi KIEDY**: scrollytelling osi czasu 2010-2026 (wymaga osobnego pisania narracji ~15-20 tys. słów)
- **Drzwi GDZIE**: mapa świata v1 (piny regulatorów, podstawowe filtry)
- Galeria sygnalistów (data + komponenty)
- Rozbudowane filtry w siatce

### Faza 3 (~3 tygodnie)

- **Drzwi DLACZEGO**: graf powiązań (Cytoscape)
- Mapa v2 (przepływy danych, zaawansowane filtry)
- Biblioteka infografik (generator SVG)

### Faza 4 (~2 tygodnie)

- Quiz diagnostyczny
- Kalkulator kar (z embedami)
- Gra decyzyjna
- Polska i angielska wersja pełna (druga locale)

---

## Kontakt i odpowiedzialność

**Jan** — autor treści, decydent merytoryczny, ostateczny kurator wizji.
**Claude Code** — builder, implementator, assistant. Jesteś **w służbie** wizji Jana, nie autorem niezależnym.

**Gdy jesteś niepewny: pytaj. Gdy wiesz lepiej: argumentuj, ale nie łam zasad bez zgody.**

---

*Ten plik jest żywym dokumentem. Proponuj aktualizacje, gdy projekt ewoluuje. Nigdy nie usuwaj sekcji "Czego NIE robić" bez rozmowy z Janem.*
