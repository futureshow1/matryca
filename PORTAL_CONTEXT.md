# PORTAL_CONTEXT.md — Pełen kontekst projektu Matryca

> Ten plik rozszerza `CLAUDE.md` o szczegóły techniczne, kontekst treści i wizję. Czytaj po `CLAUDE.md`.

---

## O Janie i o projekcie

**Jan** — mediator sądowy, dokumentalista filmowy, programista (Laravel), wszechstronny twórca z Warszawy. Wnuk emigracyjnego poety Bronisława Przyłuskiego. Związany z polską kulturą niezależną, dokumentem, sztuką kontekstualną (Jan Świdziński). Pracuje nad własną platformą SaaS do mediacji (System Mediacji).

Baza wiedzy "Skandale Big Tech" powstała jako projekt **obywatelskiej edukacji cyfrowej**. 33 karty, ~110 000 słów, rygorystycznie udokumentowane. Każda karta zawiera sekcję "Wnioski dla obywateli" i "Uwaga dla mediatorów, prawników, pedagogów" — to nie jest akademicka analiza, to **narzędzie użytkowe**.

Portal **Matryca** jest warstwą publikacyjną tej bazy. Ma **trzy cele równolegle**:

1. **Referencja** — cytowalność dla dziennikarzy i prawników. Trwałe URL, pełne źródła, eksport.
2. **Edukacja** — przystępne wprowadzenie do tematu dla szerszej publiczności.
3. **Prowokacja intelektualna** — pokazanie wzorców (graf), które są niewidoczne przy czytaniu pojedynczych historii.

---

## Struktura folderów (proponowana)

Po `npm create astro@latest matryca`:

```
matryca/
├── CLAUDE.md                          # konstytucja — najważniejszy plik
├── PORTAL_CONTEXT.md                  # ten plik
├── README.md                          # publiczny opis projektu
├── astro.config.ts
├── tsconfig.json
├── package.json
├── .prettierrc
├── .eslintrc.cjs
├── .gitignore
├── public/
│   ├── fonts/                         # lokalne fonty (opcjonalnie, jeśli nie fontsource npm)
│   └── favicon.svg
├── src/
│   ├── content/
│   │   ├── config.ts                  # Zod schema dla collections
│   │   ├── cases/                     # 33 karty .md
│   │   │   ├── a01-local-mess.md
│   │   │   ├── a02-cambridge-analytica.md
│   │   │   ├── ...
│   │   │   └── e06-zoom-e2ee.md
│   │   ├── whistleblowers/            # 15-20 portretów (osobna collection)
│   │   │   ├── wylie.md
│   │   │   ├── haugen.md
│   │   │   └── ...
│   │   ├── regulators/                # DPC, CNIL, FTC itd.
│   │   └── laws/                      # RODO, DSA, COPPA itd.
│   ├── data/
│   │   ├── timeline-events.yaml       # wydarzenia osi czasu (zewnętrzny kontekst)
│   │   ├── relationships.yaml         # dla grafu — ręcznie kurowane powiązania
│   │   └── map-points.yaml            # geo-coords regulatorów
│   ├── layouts/
│   │   ├── Base.astro                 # HTML shell, fonts, meta
│   │   ├── Page.astro                 # nawigacja + content + footer
│   │   ├── Case.astro                 # template pojedynczej sprawy
│   │   └── Editorial.astro            # długie treści narracyjne (strony o)
│   ├── components/
│   │   ├── layout/                    # Header, Footer, Nav, LanguageToggle, ThemeToggle
│   │   ├── case/                      # CaseCard, CaseTable, CaseFilters, CaseMeta, CaseTimeline
│   │   ├── doors/                     # HomeDoor, DoorGrid (5 drzwi)
│   │   ├── graph/                     # CytoscapeGraph (React island)
│   │   ├── map/                       # MapLibreMap (React island)
│   │   ├── timeline/                  # TimelineScroller (React island, Scrollama)
│   │   ├── grid/                      # CasesGrid (React island, filters + search)
│   │   ├── gallery/                   # WhistleblowerCard, Gallery
│   │   ├── quiz/                      # QuizEngine, QuizResult
│   │   └── ui/                        # Button, Badge, Pill, Card, Metric
│   ├── pages/
│   │   ├── index.astro                # strona główna, 5 drzwi
│   │   ├── sprawy/
│   │   │   ├── index.astro            # drzwi CO (siatka)
│   │   │   └── [slug].astro           # karta sprawy (generowane z content)
│   │   ├── mapa.astro                 # drzwi GDZIE
│   │   ├── os-czasu.astro             # drzwi KIEDY
│   │   ├── graf.astro                 # drzwi DLACZEGO
│   │   ├── sygnalisci/
│   │   │   ├── index.astro            # drzwi KOGO (galeria)
│   │   │   └── [slug].astro           # portret sygnalisty
│   │   ├── narzedzia/
│   │   │   ├── quiz.astro
│   │   │   ├── kalkulator.astro
│   │   │   └── gra.astro
│   │   ├── o-projekcie.astro
│   │   ├── metodologia.astro
│   │   └── en/                        # angielska wersja (mirror)
│   ├── styles/
│   │   ├── tokens.scss                # CSS vars: kolory, typografia, spacing
│   │   ├── reset.scss
│   │   ├── typography.scss
│   │   ├── utilities.scss
│   │   └── global.scss                # import wszystkiego
│   ├── scripts/                       # build-time utilities
│   │   ├── generate-graph-data.ts     # z content → JSON dla grafu
│   │   ├── generate-sitemap.ts
│   │   └── ...
│   └── utils/
│       ├── format.ts                  # liczby, waluty, daty
│       └── i18n.ts
├── scripts/                           # osobne scripts Node/Python
│   └── add-frontmatter.py             # auto-fill frontmatterów z kart
└── content-source/                    # oryginalne karty bez frontmatterów (backup)
    ├── A01_local_mess.md
    └── ...
```

---

## Content schema (Zod + frontmatter YAML)

Każda karta sprawy ma frontmatter walidowany przez Zod. Plik `src/content/config.ts`:

```typescript
import { defineCollection, z } from 'astro:content';

const caseCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Identyfikacja
    id: z.string().regex(/^[A-E]\d{2}$/),  // "E04"
    slug: z.string(),                        // "x-grok-deepfakes"
    group: z.enum(['A', 'B', 'C', 'D', 'E']),
    group_label: z.string(),                 // "TikTok, X, Clearview, Zoom"
    title: z.string(),                       // pełny tytuł sprawy
    subtitle: z.string().optional(),         // podtytuł dla SEO

    // Chronologia
    year_revealed: z.number().int().min(2000).max(2030),
    years_active: z.tuple([z.number(), z.number()]).optional(),  // [start, end]
    last_updated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),

    // Podmioty
    companies: z.array(z.string()),          // ["X", "xAI"]
    company_parents: z.array(z.string()).optional(),  // ["Musk"]

    // Status
    status: z.enum([
      'active_investigation',
      'settled',
      'withdrawn',
      'concluded',
      'ongoing_litigation',
      'regulatory_monitoring',
      'criminal_proceedings'
    ]),

    // Jurysdykcje
    jurisdictions: z.array(z.string()),      // ["EU", "UK", "US"]
    lead_regulator: z.string().optional(),
    affected_users: z.number().optional(),   // liczba dotkniętych osób jeśli znana
    affected_users_description: z.string().optional(),

    // Podstawa prawna
    legal_basis: z.array(z.string()),        // ["GDPR Art. 46(1)", "DSA"]

    // Kary finansowe
    fines: z.array(z.object({
      amount: z.number(),
      currency: z.enum(['EUR', 'USD', 'GBP', 'PLN']),
      authority: z.string(),
      date: z.string(),                      // "2023-09" lub "2023-09-15"
      category: z.enum([
        'regulatory_fine',
        'class_action_settlement',
        'state_attorney_general',
        'criminal_forfeiture',
        'consumer_refund'
      ]),
      status: z.enum(['paid', 'pending', 'appealed', 'unpaid']).optional(),
    })).default([]),

    // Ludzie
    whistleblowers: z.array(z.string()).default([]),       // slugi whistleblowers collection
    journalists: z.array(z.string()).default([]),          // lista imion (nie collection — per case)
    key_people: z.array(z.object({
      name: z.string(),
      role: z.string(),                      // "CEO", "FTC Commissioner"
      company: z.string().optional(),
    })).default([]),

    // Powiązania
    related_cases: z.array(z.string()).default([]),        // ["A02", "E03"]
    precedents_cited: z.array(z.string()).default([]),     // nazwy spraw/praw

    // Taksonomia
    tags: z.array(z.string()),               // ["deepfake", "children", "biometrics"]
    categories: z.array(z.enum([
      'privacy',
      'children_safety',
      'election_manipulation',
      'biometrics',
      'ai_training',
      'surveillance',
      'financial_deception',
      'content_moderation',
      'workers_access',
      'false_security_claims',
      'data_transfer',
      'geopolitics',
    ])),

    // Geo
    geo_coords: z.array(z.object({
      lat: z.number(),
      lng: z.number(),
      label: z.string(),                     // "Bruksela"
      role: z.enum(['regulator', 'company_hq', 'incident_location', 'court']).optional(),
    })).default([]),

    // Meta
    priority: z.enum(['TOP', 'STANDARD']).default('STANDARD'),
    card_complete: z.boolean().default(true),
    word_count: z.number().optional(),       // auto-computed w build time

    // SEO
    seo_description: z.string().max(160).optional(),
    seo_keywords: z.array(z.string()).default([]),
  }),
});

export const collections = {
  cases: caseCollection,
};
```

### Schema dla whistleblowers

```typescript
const whistleblowerCollection = defineCollection({
  type: 'content',
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    role: z.string(),              // "Former Facebook Data Scientist"
    organization: z.string().optional(),
    nationality: z.string().optional(),
    related_cases: z.array(z.string()),      // ID sprawy
    revealed_year: z.number(),
    current_status: z.string(),    // "Nadal aktywna w sprawach tech accountability"
    photo: z.string().optional(),  // ścieżka lub zewnętrzny URL
    quote: z.string().optional(),
    wikipedia_url: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
  }),
});
```

---

## Strona główna — referencyjny prototyp

Plik `prototypes/home.html` zawiera pierwszy mockup strony głównej — to **nie jest kod do skopiowania**, ale referencja **tonalna i strukturalna**. Kluczowe obserwacje z prototypu:

- **Header minimalistyczny:** logo (czerwony pasek + serif "Matryca"), mono meta "/ baza wiedzy", prawa strona: liczniki + language toggle
- **Hero editorialne:** duży serif h1 (42px), podtytuł sans 17px, CTA czerwony + link tekstowy
- **Pięć drzwi:** grid `auto-fit minmax(210px, 1fr)`, każde drzwi to karta z ikoną + numerem + tytułem (serif) + opisem (sans secondary) + tagami
- **Strefa "wiodące":** mikro-etykieta (czerwona, mono, 10px) dla grafu — sugestia, nie wymuszenie
- **Statystyki:** szeroki pasek na `background-secondary`, 4 metryki, każda: mono label / serif wielka liczba / sans description
- **Ostatnio dodane:** 3 karty spraw, status-badge, data-ID w mono, tytuł serif, meta sans
- **Narzędzia:** 2 kolumny (Quiz, Kalkulator), mniejsze karty
- **Stopka:** polityka prywatności portalu jako statement ("Portal nie zbiera danych") + nawigacja meta

**Wzorzec interakcji:** hover na karcie drzwi zmienia border z szarego na czerwony, bez innych efektów.

---

## Kluczowe decyzje, które jeszcze nie są podjęte

Te **będą wymagać rozmowy z Janem** — nie zgaduj:

1. **Nazwa portalu.** "Matryca" jest robocza. Alternatywy: Atlas, Rejestr, Lustra, Skandaleogram, Długi Cień.
2. **Domena.** Do wyboru: matryca.org / bigtech.watch / skandalogram.pl / inna.
3. **Logo.** Obecnie "pasek + tekst serif". Może wymagać custom designu.
4. **Open Graph / social media images.** Czy portal generuje OG dla każdej sprawy? Template?
5. **Newsletter.** Czy portal będzie miał newsletter? Jeśli tak — jaki provider (Buttondown, ConvertKit)?
6. **Feedback loop.** Czy portal ma mieć formularz kontaktowy, możliwość zgłaszania poprawek?
7. **Print styles.** Czy PDF export ma być wbudowany?
8. **Archiwizacja.** Czy portal ma być regularnie snapshotowany do Internet Archive?

---

## Przykładowe frontmattery — referencja

### A02 Cambridge Analytica (pełny przykład dużej sprawy)

```yaml
---
id: A02
slug: cambridge-analytica
group: A
group_label: Meta
title: "Cambridge Analytica"
subtitle: "Manipulacja wyborcza przez wyciek 87 mln profili Facebook"
year_revealed: 2018
years_active: [2014, 2018]
last_updated: 2026-04-15
companies: [Meta, Facebook, Cambridge Analytica]
company_parents: []
status: concluded
jurisdictions: [US, UK, global]
lead_regulator: FTC
affected_users: 87000000
legal_basis:
  - FTC Act Section 5
  - GDPR (retrospektywnie)
  - UK Data Protection Act
fines:
  - amount: 5000000000
    currency: USD
    authority: FTC
    date: 2019-07
    category: regulatory_fine
    status: paid
  - amount: 725000000
    currency: USD
    authority: N.D. California (class action)
    date: 2022-12
    category: class_action_settlement
    status: paid
whistleblowers: [christopher-wylie]
journalists:
  - Carole Cadwalladr
  - Matthew Rosenberg
  - Nicholas Confessore
key_people:
  - name: Mark Zuckerberg
    role: CEO
    company: Meta
  - name: Alexander Nix
    role: CEO
    company: Cambridge Analytica
  - name: Aleksandr Kogan
    role: Researcher
    company: Global Science Research
related_cases: [A01, A03, A05, A07, B02, B03]
precedents_cited:
  - FTC v. Facebook (2012 consent order)
tags: [election-manipulation, data-scraping, psychographics, political-targeting, third-party-apps]
categories: [privacy, election_manipulation]
geo_coords:
  - lat: 51.5074
    lng: -0.1278
    label: Londyn
    role: incident_location
  - lat: 38.8951
    lng: -77.0364
    label: Washington DC
    role: regulator
priority: TOP
card_complete: true
seo_description: "87 mln profili Facebooka wykradzionych przez Cambridge Analytica w 2014-2018. Kara FTC 5 mld USD, ugoda class action 725 mln USD. Whistleblower: Christopher Wylie."
seo_keywords: [cambridge analytica, facebook, christopher wylie, wybory 2016, brexit, meta]
---
```

### E04 X/Grok (przykład aktywnej sprawy bez pełnych kar jeszcze)

```yaml
---
id: E04
slug: x-grok-deepfakes
group: E
group_label: TikTok, X, Clearview, Zoom
title: "X / Grok: Deepfake'i niekonsensualne i śledztwo DSA"
subtitle: "Elon Musk, Grok Imagine, śledztwo Komisji Europejskiej"
year_revealed: 2024
years_active: [2022, 2026]
last_updated: 2026-04-18
companies: [X, xAI]
company_parents: [Musk]
status: active_investigation
jurisdictions: [EU, UK, FR, US, MY, ID]
lead_regulator: European Commission
affected_users_description: "Setki tysięcy ofiar NCII; 98% celów — kobiety"
legal_basis:
  - DSA (Digital Services Act)
  - GDPR Art. 9 (dane biometryczne)
  - UK Online Safety Act 2023
  - Stanowe prawa NCII
fines:
  - amount: 120000000
    currency: EUR
    authority: European Commission
    date: 2025-12
    category: regulatory_fine
    status: appealed
whistleblowers: []
journalists:
  - Kalley Huang
  - CBS News investigation team
key_people:
  - name: Elon Musk
    role: CEO
    company: X
  - name: Henna Virkkunen
    role: EU Commissioner tech sovereignty
  - name: Thomas Regnier
    role: EU Commission spokesperson
related_cases: [A02, A09, E01, E02, E03, E05]
precedents_cited:
  - DSA enforcement framework
tags: [deepfake, ncii, ai-generation, dsa, content-moderation, elon-musk]
categories: [content_moderation, ai_training, privacy]
geo_coords:
  - lat: 50.8503
    lng: 4.3517
    label: Bruksela
    role: regulator
  - lat: 51.5074
    lng: -0.1278
    label: Londyn
    role: regulator
priority: TOP
card_complete: true
seo_description: "Grok (xAI, Elon Musk) generuje niekonsensualne deepfake'i, w tym Taylor Swift. Kara DSA 120 mln EUR, aktywne śledztwo 2026."
seo_keywords: [grok, elon musk, deepfake, taylor swift, dsa, x twitter]
---
```

---

## Content pipeline — jak dane zasilają widoki

**Single source of truth:** pliki `.md` w `src/content/cases/`.

Build-time transformacje (generowane przez skrypty w `src/scripts/`):

1. **`generate-graph-data.ts`** — czyta wszystkie karty, generuje `public/data/graph.json`:
   ```typescript
   {
     nodes: [
       { id: "A02", label: "Cambridge Analytica", group: "A", priority: "TOP", ... },
       { id: "E04", label: "X/Grok", group: "E", ... },
     ],
     edges: [
       { source: "A02", target: "E04", type: "same_category" },
       { source: "A02", target: "A07", type: "same_company" },
       { source: "A02", target: "A05", type: "shared_whistleblower" },
     ]
   }
   ```

2. **`generate-map-data.ts`** — wyciąga `geo_coords` ze wszystkich kart → `public/data/map.geojson`.

3. **`generate-timeline-data.ts`** — łączy `year_revealed` + `years_active` ze wszystkich kart + osobny `data/timeline-events.yaml` (kontekst zewnętrzny: Snowden 2013, Schrems II 2020, COVID 2020, ChatGPT 2022) → `public/data/timeline.json`.

4. **`generate-search-index.ts`** — Pagefind uruchamiane automatycznie po build.

5. **`validate-content.ts`** — walidacja cross-references (czy `related_cases: [A02]` rzeczywiście istnieje? Czy `whistleblowers: [wylie]` wskazuje istniejący plik?).

---

## Inspiracje wizualne

Pokazać Claude Code, jaki ton chcemy osiągnąć:

- **ProPublica** (propublica.org) — editorial layout, serif headlines, data-driven storytelling
- **The Pudding** (pudding.cool) — interactive explainers, data viz, lekka osobowość
- **Bellingcat** (bellingcat.com) — investigative tone, szare i czerwone, ciężar treści
- **Kurzgesagt** (kurzgesagt.org) — klarowność, przystępność (ale portal nie będzie animowany)
- **Nieman Lab** (niemanlab.org) — minimalistyczny portal referencyjny
- **Rest of World** (restofworld.org) — global tech journalism, piękna typografia

**Czego NIE chcemy:**
- TechCrunch / VentureBeat — tech-blog estetyka
- Medium — corporate blog feel
- Wikipedia — zbyt "dokument urzędowy"
- Substack — reader-centric, my chcemy portal-centric

---

## Polskie konteksty — co dodać w treści

Portal adresuje polskiego odbiorcę (ale jest dwujęzyczny). Trzymamy polskie detale:

- **UODO** (nie tylko DPC Irlandia) jako organ regulacyjny
- **Dyżurnet.pl**, **CERT Polska**, **NASK** jako polskie podmioty
- **Panoptykon Foundation** jako polska organizacja praw cyfrowych
- **Polskie przepisy** — art. 22² Kodeksu Pracy (monitoring), art. 191a k.k. (NCII), RODO implementacja
- **Polski wymiar** w "Ciekawostkach" każdej karty — jeśli sprawa ma polski aspekt, to jest tam

---

## Faza 1 — konkretne zadania dla Claude Code

Gdy Jan powie "zaczynamy", wykonaj **w tej kolejności**:

### 1. Bootstrap (pierwszy dzień)

```bash
# Jan powinien to zrobić przed otwarciem CC, ale jeśli nie:
npm create astro@latest matryca --template minimal --typescript strict --install --no-git
cd matryca
npm install @astrojs/react @astrojs/sitemap sass
npm install -D @types/node prettier eslint
```

Wtedy:
- Dodaj CLAUDE.md, PORTAL_CONTEXT.md do repo (z folderu `portal_starter/`)
- Skopiuj 33 karty z `bigtech_base/karty/` do `content-source/` (backup bez frontmatterów)
- Setup `src/styles/tokens.scss` z paletą z `CLAUDE.md`
- Setup `src/content/config.ts` z pełnym schema powyżej
- Skopiuj pierwsze 5 kart (po jednej z grupy) do `src/content/cases/` i ręcznie dopisz im frontmatter — to jest referencja dla reszty

### 2. Skrypt migracyjny

Uruchom skrypt (jeśli jest) lub napisz go: czyta karty z `content-source/`, wyciąga co może (id, tytuł, rok, kary, firmy — dostępne w sekcji Metadane każdej karty), dopisuje YAML frontmatter, zapisuje w `src/content/cases/`.

**Krytyczne pola, których skrypt NIE wypełni automatycznie:**
- `related_cases` — wymaga analizy merytorycznej
- `tags` / `categories` — wymaga decyzji taksonomicznej
- `geo_coords` — wymaga mapowania regulatorów do współrzędnych

Dla tych pól: **wygeneruj sensowny default na bazie analizy treści, ale oznacz komentarzem `# TODO: verify with Jan`** w YAML.

### 3. Layout + strona główna

- `src/layouts/Base.astro` — HTML shell, meta, fonts
- `src/layouts/Page.astro` — nav + slot + footer
- `src/components/layout/Header.astro` — wg prototypu
- `src/components/layout/Footer.astro` — wg prototypu
- `src/pages/index.astro` — strona główna wg prototypu

### 4. Content collection działa

- Strona `/sprawy/[slug].astro` renderuje kartę z Content Collection
- Wszystkie 33 karty są dostępne pod URL-ami typu `/sprawy/e04-grok-deepfakes`
- Template minimalistyczny, ale sparsowany z frontmatterem (meta card z karami, statusem, kategoriami)

### 5. Siatka spraw + filtry

- `src/pages/sprawy/index.astro` — siatka wszystkich 33
- Filtry: grupa (A-E), rok ujawnienia, status, kategoria
- Search przez Pagefind
- Sortowanie: data, alfabetycznie, kara

To jest **MVP Fazy 1**. Z tym działającym portal jest już publikowalny.

---

## Gotowe dane referencyjne

W folderze `portal_starter/` (gdzie leży ten plik) jest też:

- `prototypes/home.html` — prototyp strony głównej jako statyczny HTML
- `scripts/add-frontmatter.py` — skrypt migracyjny (jeśli został wygenerowany)
- `bigtech_base/` — 33 karty źródłowe + indeks (może być wgrane do repo jako `content-source/`)

---

## Anty-wzorce — czego unikaj specyficznie

1. **"Dynamiczne" budowanie komponentów kart w runtime** — wszystko build-time, bo portal jest statyczny.
2. **Ukrywanie treści za tabami** — portal ma długie strony, nie tabs.
3. **"Read more" truncate** — pokazujemy pełną treść albo klarowną kartę, nie obcinamy.
4. **Emoji w tagach / kategoriach / statusach** — tekst tylko.
5. **Custom router** — używamy Astro file-based routing.
6. **Zarządzanie stanem globalnym** (Redux, Zustand) — nie potrzeba, portal jest w 95% statyczny. React islands mają lokalny state.
7. **Więcej niż 2 poziomy nawigacji** — flat hierarchy.
8. **"Sticky CTA" na dole ekranu** — nie. Portal nie konwertuje, edukuje.
9. **Share buttons wbudowane** — jeśli user chce udostępnić, skopiuje URL. Każdy share button to kolejny tracker.
10. **"Trending" / "Popular"** sekcje — nie zbieramy statystyk. Możemy mieć "Ostatnio dodane" (factual) lub "Wybór redakcji" (editorialne), ale nie "Trending".

---

*Koniec kontekstu. Jeśli coś jest niejasne — pytaj Jana. Jeśli czujesz, że brakuje decyzji — pytaj Jana. Jeśli wiesz, co robić — działaj, ale dokumentuj.*
