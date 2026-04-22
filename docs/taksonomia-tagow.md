# Taksonomia tagów — propozycja do akceptacji

## Rola tagów vs kategorii

**Kategorie** (pole `categories[]`, 12 wartości ze schema — już ustalone) to duże kubły tematyczne:
`privacy`, `children_safety`, `election_manipulation`, `biometrics`, `ai_training`, `surveillance`,
`financial_deception`, `content_moderation`, `workers_access`, `false_security_claims`,
`data_transfer`, `geopolitics`.

**Tagi** (pole `tags[]`, string[] — do wypełnienia) to granularne etykiety opisujące
konkretne mechanizmy, osoby dotknięte, konteksty prawne i typy wydarzeń.
Każda karta ma 3–8 tagów.

---

## Zaproponowany słownik (22 tagi, 4 fasety)

### Mechanizmy techniczne (8)

| Tag | Opis |
|-----|------|
| `dark-patterns` | Celowo mylący UX (przyciski odmowy ukryte, domyślne zgody) |
| `addictive-design` | Projektowanie pod uzależnienie (infinite scroll, autoplay, variable rewards) |
| `rozpoznawanie-twarzy` | Scraping twarzy, biometryczna identyfikacja |
| `sledzenie-lokalizacji` | Location tracking, Wi-Fi/Bluetooth triangulation |
| `trening-ai` | Użycie danych użytkowników do trenowania modeli bez jasnej zgody |
| `moderacja-algorytmiczna` | Algorytmiczne wzmacnianie/wyciszanie treści |
| `eksperyment-psychologiczny` | Manipulacja samopoczuciem użytkownika w ramach A/B testu |
| `dezinformacja` | Platformy jako infrastruktura dla fałszywych narracji |

### Kto dotknięty (5)

| Tag | Opis |
|-----|------|
| `dzieci` | Osoby poniżej 13 lub 16 lat |
| `wyborcy` | Konteksty wyborcze, kampanijne |
| `pracownicy` | Pracownicy platform, warunki pracy, związki |
| `dziennikarze` | Dziennikarze jako obiekt inwigilacji lub cenzury |
| `mniejszosci` | Mniejszości etniczne, religijne, seksualne |

### Kontekst prawny (5)

| Tag | Opis |
|-----|------|
| `rodo` | GDPR — sprawa z kluczowym elementem RODO |
| `coppa` | Children's Online Privacy Protection Act (US) |
| `bipa` | Biometric Information Privacy Act (Illinois) |
| `schrems-ii` | Transfer danych EU→USA po wyroku Schrems II |
| `pozew-zbiorowy` | Class action settlement, derivative suit |

### Wydarzenia i konsekwencje (4)

| Tag | Opis |
|-----|------|
| `wyciek-danych` | Data breach, niezamierzone ujawnienie |
| `sygnalista` | Whistleblower ujawnił sprawę |
| `criminal` | Sprawa karna (nie cywilna / regulacyjna) |
| `geopolityka` | Sprawa rzutuje na relacje międzypaństwowe |

---

## Decyzje techniczne

- **Format**: kebab-case, bez polskich znaków z diakrytykami w identyfikatorze
  (ale label wyświetlany po polsku). Przykład: tag `mniejszosci` = etykieta „mniejszości".
- **Liczba na kartę**: 3–8, średnio ~5.
- **Tag nie może zastępować kategorii**: np. karta o dzieciach ma zarówno
  `categories: ['children_safety']` jak i `tags: ['dzieci']` — duplikat jest celowy.
  Kategorie służą filtrom podstawowym, tagi — zaawansowanym.

---

## Jak to stosujemy

1. Ten dokument akceptuje Jan (po wykomentowanych uwagach / usunięciu tagów, które nie pasują).
2. Skrypt `scripts/apply-tags.py` czyta treść karty i przypisuje tagi heurystycznie.
3. Jan przegląda wyniki i koryguje ręcznie tam, gdzie heurystyka była zbyt szeroka lub zbyt wąska.

---

## Pytania otwarte dla Jana

- Czy dorzucić tag `polski-watek` dla spraw z wyraźnym polskim kontekstem (UODO, Panoptykon, lokalne media, polscy poszkodowani)?
- Czy tag `deepfake` warto wydzielić jako osobny (aktualnie kryłby się pod `dezinformacja` lub `trening-ai`)?
- Czy `retencja-danych` (trzymanie danych po usunięciu konta) jest wystarczająco częsty, żeby dostać własny tag?
