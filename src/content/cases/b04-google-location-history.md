---
id: B04
slug: b04-google-location-history
group: B
group_label: Google
title: Google Location History
year_revealed: 2018
last_updated: '2026-04-17'
companies:
- Google
status: concluded
jurisdictions:
- EU
- US
- AU
legal_basis:
- State consumer protection
- FTC Act § 5
- RODO art. 6
- '7'
- '13'
- ACL
fines:
- amount: 85000000
  currency: USD
  authority: AZ AG
  date: 2022-10
  category: state_attorney_general
  status: paid
- amount: 391500000
  currency: USD
  authority: 40 AG USA
  date: 2022-11
  category: state_attorney_general
  status: paid
- amount: 29500000
  currency: USD
  authority: DC + IN + TX + WA
  date: 2023-01
  category: state_attorney_general
  status: paid
- amount: 8000000
  currency: USD
  authority: TX osobno
  date: 2023-01
  category: state_attorney_general
  status: paid
- amount: 35000000
  currency: EUR
  authority: ACCC (AU, ~60 mln AUD)
  date: '2023'
  category: regulatory_fine
  status: paid
- amount: 48000000
  currency: EUR
  authority: PIPC (KR, ~69,2 mld KRW)
  date: '2023'
  category: regulatory_fine
  status: paid
- amount: 93000000
  currency: USD
  authority: '*Patacsil v. Google*'
  date: '2024'
  category: class_action_settlement
  status: paid
whistleblowers: []
journalists: []
related_cases:
- B02
- B03
- B01
- D04
- B06
tags:
- dark-patterns
- sledzenie-lokalizacji
- dziennikarze
- rodo
- pozew-zbiorowy
categories:
- privacy
geo_coords: []
priority: TOP
card_complete: true
word_count: 3559
explainer:
  src: /animations/b04-google-location-history.html
  duration: '60s'
  title: Location History — śledzenie mimo wyłączenia
subtitle: Śledzenie mimo wyłączenia ustawienia
years_active:
- 2014
- 2022
---

# B04 — Google Location History: Śledzenie mimo wyłączenia ustawienia

> **Kategoria:** Śledzenie lokalizacji / mylące interfejsy / wprowadzanie w błąd
> **Firma/firmy:** Google (Alphabet)
> **Lata:** 2014–2022 (praktyka), 13 sierpnia 2018 (ujawnienie), 2022–2024 (ugody)
> **Status:** Zakończone — rekordowa ugoda 391,5 mln USD z 40 stanami; dodatkowe kary w AU, KR, USA stany
> **ID karty:** B04

---

## Metadane

| Pole | Wartość |
|------|---------|
| Kraj/region | USA (40+ stanów), Australia, Korea Płd., UE (ograniczone) |
| Rok ujawnienia | 13 sierpnia 2018 (*Associated Press*, Ryan Nakashima) |
| Lata trwania praktyki | 2014–2022 (ponad 8 lat) |
| Łączna kara | **~660 mln USD / ~610 mln EUR** łącznie (USA + AU + KR + class actions) |
| Waluta | USD/AUD/KRW/EUR |
| Podstawa prawna | State consumer protection (40 stanów USA), FTC Act § 5, RODO art. 6, 7, 13; ACL (Australia); PIPA (Korea) |
| Sygnalista/odkrywca | **Ryan Nakashima** (*Associated Press*) + **Douglas C. Schmidt** (Vanderbilt) |
| Liczba poszkodowanych | Wszyscy użytkownicy Google/Android na świecie — miliardy osób |
| Status (na dziś) | Google zreformował ustawienia; Location History domyślnie wyłączona dla nowych kont (2024) |

---

## TL;DR

**13 sierpnia 2018** dziennikarz *Associated Press* **Ryan Nakashima** ujawnił, że **Google kontynuuje zbieranie danych lokalizacyjnych** z urządzeń Android i iOS **nawet po wyłączeniu przez użytkownika ustawienia "Historia lokalizacji" (Location History)**. Dane zamiast do widocznej Timeline trafiały do drugiego, ukrytego ustawienia: **"Web & App Activity"** — **domyślnie włączonego** i nie pytającego o lokalizację wprost. Nakashima udowodnił to naukowym eksperymentem: **kupił 20 telefonów z różnymi kontami Google**, wyłączył wszędzie Location History i przeanalizował, co Google zbiera. Rezultat: Google wiedział o pozycji użytkownika przez Wi-Fi, IP, sensor fusion, metadane zdjęć. Naukową weryfikację przeprowadził **Jonathan Mayer** z Princeton (ten sam od Safari Obejście — B02).

Przełomowy raport **prof. Douglasa Schmidta** z Vanderbilt University z 2018: stojący na biurku Android, z którego nikt nie korzysta, **wysyła 340 razy dziennie dane telemetryczne do Google**. Dla porównania iPhone w analogicznym stanie: ok. 30 razy dziennie do Apple.

**14 listopada 2022 — 40 attorneys general stanów USA** zawarło wspólną ugodę z Google na **391,5 mln USD** — **rekordową tego typu w historii prawa konsumenckiego USA przed 2024**. Wcześniej: **Arizona osobno: 85 mln USD** (październik 2022). Po tym: **DC + Indiana + Teksas + Waszyngton: 29,5 mln USD** (styczeń 2023). **Texas jeszcze osobno: 8 mln USD** (ten sam miesiąc). **Australia ACCC: 60 mln AUD** (2023). **Korea Płd. PIPC: 80 mld KRW** (~60 mln USD, 2023). **Pozew zbiorowy federalna: 93 mln USD** (2024).

Wewnętrzne dokumenty Google ujawnione w pozwie Arizona pokazały, że **Google wiedział o zamieszaniu użytkowników od 2014**. Wewnętrzni inżynierowie proponowali uproszczenie ustawień. Kierownictwo odrzuciło: **"to zmniejszy precyzję targetingu reklam"**. W innym wewnętrznym e-mailu **VP Google Maps Jen Fitzpatrick** sama przyznała, że **nie rozumie dokładnie, jak działają dwa ustawienia**.

Sprawa stała się **wzorcowym przykładem mylące interfejsy** — celowo zmylającego UX. Pod RODO to klasyczne naruszenie art. 7 (warunki zgody) i art. 13 (obowiązek informacyjny). W USA to naruszenie state consumer protection w 40+ stanach. W 2024 Google zreformował ustawienia i **domyślnie wyłącza Location History** dla nowych kont.

---

## Oś czasu

- **2005** — Google przejmuje Keyhole → uruchamia Google Earth → później Google Maps Timeline.
- **2009** — debiut Androida. Location Services wprowadzone.
- **2013** — Google wprowadza "Location History" jako funkcję Maps.
- **2014** — Google wprowadza **Web & App Activity** jako osobne ustawienie. **Wewnętrzni inżynierowie zauważają zamieszanie użytkowników**; propozycje uproszczenia zostają odrzucone.
- **2014–2018** — praktyka trwa niewykryta publicznie. Miliardy danych lokalizacyjnych gromadzone od użytkowników, którzy sądzą, że wyłączyli tracking.
- **13 sierpnia 2018** — *Associated Press*, Ryan Nakashima: "Google tracks your movements, like it or not". Eksperyment AP z 20 telefonami.
- **13 sierpnia 2018** — Google w ciągu godzin **aktualizuje teksty pomocy** (niezmieniając funkcjonalności). Tekst "When Location History is off, the places you go are not stored" został przeredagowany.
- **13 sierpnia 2018** — profesor Schmidt z Vanderbilt opublikuje raport "Google Data Collection" — 340 transmisji dziennie z Androida.
- **Wrzesień 2018** — pozew zbiorowy **Patacsil v. Google** (N.D. California).
- **Maj 2020** — AG Arizona (Mark Brnovich) składa pozew *State of Arizona v. Google*.
- **Styczeń 2022** — dołącza AG 4 stanów: DC (Karl Racine), Indiana, Teksas, Waszyngton.
- **Październik 2022** — **Arizona wygrywa: ugoda 85 mln USD**.
- **14 listopada 2022** — **40 attorneys general USA zawierają wspólną ugodę: 391,5 mln USD** (rekord historyczny).
- **Styczeń 2023** — **DC + Indiana + Teksas + Waszyngton: 29,5 mln USD**.
- **Styczeń 2023** — **Teksas osobno: 8 mln USD**.
- **2023** — **Australia ACCC: 60 mln AUD**.
- **2023** — **Korea Południowa PIPC: 80 mld KRW**.
- **2024** — ugoda pozew zbiorowy federalna: **93 mln USD**.
- **2024** — Google ogłasza reformy: **Location History domyślnie wyłączona dla nowych kont**; uproszczenie interfejsu.

---

## Mechanizm

### Jak to działało — architektura wprowadzania w błąd

**Dwa ustawienia, mylne nazwy, jedna iluzja kontroli.**

Google miał (i częściowo ma) **dwa oddzielne ustawienia** dotyczące lokalizacji:

#### 1. "Location History" (Historia lokalizacji)
- Opis Google: "Zachowaj historię miejsc, w których byłeś/aś".
- Tworzy **widoczną Timeline** na mapie (timeline.google.com).
- Użytkownik widzi wizualizację swoich ruchów na tle mapy.
- Wyłączenie: wydawało się logiczne, że kończy gromadzenie lokalizacji.

#### 2. "Web & App Activity" (Aktywność w sieci i aplikacjach)
- Opis Google: "Zachowaj aktywność w Google Search, Maps, Chrome, Gmail".
- **Włączone domyślnie** przy każdym nowym koncie.
- **Nie pyta wprost o lokalizację**.
- Ale **zbiera lokalizację** za każdym razem gdy:
  - otwierasz Google Maps
  - szukasz w Google Search (Google zna, skąd szukasz)
  - piszesz e-mail przez Gmail mobile
  - otwierasz Chrome
  - Android wysyła crash report
  - Google Assistant reaguje na hasło
  - synchronizuje się Google Photos

Wyłączenie **Location History** nie wpływało na **Web & App Activity**. Użytkownik wyłączał "historię" myśląc, że zatrzymał tracking — a Google nadal zbierał dane z drugiego ustawienia.

**Nawet wyłączenie obu ustawień** nie kończyło wszystkiego:
- **Adres IP** sygnalizuje miasto
- **Skany Wi-Fi** (Android skanuje otaczające sieci nawet gdy Wi-Fi wyłączone na telefonie — w "Wi-Fi scanning" i "Bluetooth scanning" w ustawieniach)
- **Sensor fusion** — akcelerometr, żyroskop, magnetometr dają informacje o ruchu i orientacji
- **Metadane EXIF** w zdjęciach zapisywanych w Google Photos (jeśli sync włączony)

### Dark patterns w interfejsie

Gdy użytkownik próbował wyłączyć Web & App Activity, Google wyświetlał **alarmujący pop-up**: *"Without this history, Google Maps, the Assistant, and other services will be less useful."* — obraz katastrofy, żeby odstraszyć od wyłączenia.

Alternatywnie: przycisk "Turn off" był **mniej widoczny** niż "Cancel". Klasyczny mylący interfejs.

Gdy użytkownik odwiedzał `myactivity.google.com`, interfejs pokazywał **dashboards z pięcioma różnymi typami historii**, bez klarownego wyjaśnienia relacji między nimi. Eksperci UX nazwali to **"intencjonalną złożonością"**.

### Dowody wewnętrzne (discovery Arizona 2020–2022)

W pozwie Arizona Google został zmuszony ujawnić wewnętrzne dokumenty. Kluczowe:

1. **Email z 2014**: VP Google Maps **Jen Fitzpatrick** — sama przyznaje, że *"nie wiem dokładnie, jak te dwa ustawienia współpracują"*. Jeśli VP Maps nie rozumie, jak może rozumieć użytkownik?
2. **Memo z 2015**: zespół UX proponuje **uproszczenie ustawień do jednego**. Odpowiedź marketingu: **"to zmniejszy precyzję targetingu reklam o ~12%"**. Propozycja odrzucona.
3. **Prezentacja z 2017**: wewnętrzne dane pokazują, że **73% użytkowników** po wyłączeniu Location History **nie wiedziało**, że lokalizacja nadal jest zbierana.

---

## Odkrycie

### Kim jest Ryan Nakashima

**Ryan Nakashima** — dziennikarz technologii *Associated Press* (wówczas). Specjalizuje się w analitycznym dziennikarstwie tech. Jego eksperyment z **20 telefonami** został opisany jako **"najbardziej opłacalny eksperyment dziennikarski dekady"** — AP zapłaciło ok. 5000 USD za telefony, a sprawa doprowadziła do **660+ mln USD kar i zmian polityki Google**.

### Metodologia eksperymentu

Nakashima kupił **20 telefonów** różnych modeli (Android, iPhone) z różnymi kontami Google. Na każdym:
1. Wyłączył "Location History" w ustawieniach konta Google.
2. Wyłączył "Location" w ustawieniach systemu operacyjnego (gdy dostępne).
3. Wyłączył różne kombinacje uprawnień aplikacji.
4. Przez kilka tygodni **chodził z telefonami** po San Francisco Bay Area.
5. Pobrał z `myactivity.google.com` historię aktywności każdego konta.

**Rezultat:** Google znał dokładną lokalizację użytkownika pomimo wyłączonych ustawień. Dane zawierały nazwy kawiarni, parków, adresy, punkty obserwacyjne.

**Weryfikacja akademicka:** Jonathan Mayer (Princeton, dawniej Stanford) powtórzył eksperyment i potwierdził ustalenia.

### Rola Douglasa Schmidta

**Prof. Douglas C. Schmidt** z Vanderbilt University opublikował w 2018 raport **"Google Data Collection"** — ilościową analizę danych wysyłanych przez Android do Google. Kluczowe ustalenia:
- **Android w spoczynku** na biurku wysyła do Google **340 transmisji telemetrycznych dziennie**.
- iPhone z podobną aktywnością: **~30 transmisji dziennie** do Apple (10x mniej).
- Nawet **bez aktywnego Chrome**, Android wysyła **informacje lokalizacyjne co kilka minut** (jeśli Wi-Fi scanning włączone).

Raport Schmidta został sfinansowany przez **DCN (Digital Content Next)**, stowarzyszenie wydawców, co dało Google argument o konflikcie interesów. Ale metodologia była poprawna — późniejsze badania Mayer, Acar, Narayanan potwierdzały.

### Pierwsze publikacje

- **13 sierpnia 2018** — Ryan Nakashima, "AP Exclusive: Google tracks your movements, like it or not", *Associated Press*.
- **13 sierpnia 2018** — Douglas Schmidt, "Google Data Collection", Vanderbilt University.
- **14 sierpnia 2018** — reakcje w *NYT*, *WSJ*, *WaPo*, *BBC*, *The Guardian*.

---

## Osoby kluczowe

### Odkrywcy

- **Ryan Nakashima** (*AP*) — opisany wyżej.
- **Douglas C. Schmidt** — profesor Computer Science, Vanderbilt University. Autor raportu z 2018. Ekspert w middleware, networking, dawniej DARPA.
- **Jonathan Mayer** (Princeton) — akademicka weryfikacja.
- **Brian Fung** (*Washington Post*) — analiza mylące interfejsy w interfejsach.

### Regulatorzy / prokuratorzy

- **Mark Brnovich** — Attorney General Arizona 2015–2023 (Republikanin). Pierwszy AG, który zaatakował Google za Location History. Pozew maj 2020.
- **Karl Racine** — Attorney General DC 2015–2023 (Demokrata). Dołączył do akcji w styczniu 2022.
- **Letitia James** — AG Nowego Jorku, kluczowa postać koordynująca 40-stanową ugodę.
- **Rob Bonta** — AG Kalifornii.

### Google

- **Jen Fitzpatrick** — VP Google Maps, później VP Core Systems. Wewnętrzny e-mail ujawniony w discovery pokazał, że **sama nie była pewna**, jak działają dwa ustawienia.
- **Sundar Pichai** — CEO. Kampania PR reformy w 2024.

### Prawnicy

- **Bernstein Litowitz Berger & Grossmann LLP** — główna kancelaria pozew zbiorowy.
- **Bob Trujillo** — Arizona Assistant AG, architekt dokumentacji.

---

## Reakcja firmy

### Google

**Etap 1: kosmetyczna zmiana (sierpień 2018).** Google w ciągu godzin po publikacji AP zaktualizował **teksty pomocy**, ale **nie zmienił funkcjonalności**. Stary tekst "*When Location History is off, the places you go are not stored*" został zmieniony na bardziej precyzyjny, wyjaśniający różnicę między LH i W&AA. To nie zmieniło praktyki — tylko dokumentację.

**Etap 2: obrona (2018–2022).** Przez 4 lata Google argumentowało, że ustawienia są jasne i że użytkownicy mają pełną kontrolę. W pozwach AG powtarzali: *"Our products are built with privacy in mind."*

**Etap 3: przegrana (2022).** Arizona wygrywa październik 2022 — 85 mln USD. To rozbija obronę. Miesiąc później 40 stanów zawiera ugodę.

**Etap 4: reforma (2023–2024).** Google ogłasza zmiany:
- **Location History domyślnie wyłączona** dla nowych kont (2024)
- Uproszczenie interfejsu "Your Data in Maps"
- **Auto-delete po 18 miesiącach** (było: unlimited retention)
- Funkcja **Incognito Mode w Maps**
- **Geofence warrants: zmiana architektury** — Google w 2023 ogłosił, że **nowa infrastruktura Location History nie będzie pozwalać na odpowiadanie na geofence warrants**.

---

## Postępowanie prawne

### Jurysdykcje

- USA federalne (FTC nie wszczęła — ciekawe)
- USA stanowe (40+ stanów, różne postępowania)
- USA klasa (Patacsil v. Google i inne)
- Australia (ACCC)
- Korea Płd. (PIPC)
- Szereg państw UE — ograniczone działania (sprawa w Irlandii pod DPC, ale DPC nie wszczął)

### Podstawa prawna

- **State Consumer Protection Acts** — 40+ stanów USA
- **FTC Act § 5** — unfair/deceptive practices (argument użyty, ale FTC nie wszczęła osobno)
- **RODO art. 6** — brak ważnej podstawy przetwarzania
- **RODO art. 7** — warunki zgody (musi być "swobodnie udzielona, konkretna, świadoma, jednoznaczna")
- **RODO art. 13/14** — obowiązek informacyjny
- **ACL (Australian Consumer Law)** — misleading/deceptive conduct
- **PIPA (Personal Information Protection Act, Korea)** — obowiązek świadomej zgody

### Kluczowe etapy

| Data | Etap |
|------|------|
| Sierpień 2018 | Publikacja AP; Google zmienia teksty |
| Maj 2020 | Pozew Arizona |
| Październik 2022 | Arizona wygrywa 85 mln USD |
| 14 listopada 2022 | 40 stanów 391,5 mln USD |
| Styczeń 2023 | DC+3, Teksas osobno |
| 2023 | Australia, Korea |
| 2024 | Pozew zbiorowy 93 mln USD |

### Orzecznictwo powiązane

- ***Carpenter v. United States* (585 U.S. 296, 2018)** — Sąd Najwyższy USA: **4th Amendment wymaga nakazu** dla pobrania danych lokalizacyjnych od operatora komórkowego przez rząd. Bezpośrednio powiązane z Google Location History — później rozszerzone na **geofence warrants**.
- **Sprawa Safari Obejście (B02)** — analogiczny wzorzec "wprowadzania w błąd".
- **Sprawa Onavo (A03)** — szersza praktyka ukrytego trackingu.

---

## Kary i ugody

| Data | Organ | Kwota | Jurysdykcja | Podstawa |
|------|-------|-------|-------------|----------|
| Październik 2022 | AZ AG | 85 000 000 USD | Arizona | Consumer Fraud Act |
| 14 listopada 2022 | 40 AG USA | **391 500 000 USD** | USA stanowe | Consumer protection |
| Styczeń 2023 | DC + IN + TX + WA | 29 500 000 USD | Stany | j.w. |
| Styczeń 2023 | TX osobno | 8 000 000 USD | Teksas | j.w. |
| 2023 | ACCC | 60 000 000 AUD | Australia | ACL |
| 2023 | PIPC | 80 000 000 000 KRW | Korea | PIPA |
| 2024 | *Patacsil v. Google* | 93 000 000 USD | USA klasa | State laws |

**Łącznie: ~660 mln USD / ~610 mln EUR**

---

## Precedensy i implikacje

### Dla prawa USA

- **Rekord stanowej ugody 391,5 mln USD** (listopad 2022) — największa tego typu przed 2024.
- **Model "multi-state AG action"** — ustalony jako skuteczny przeciwko Big Tech. Powtarzany w sprawach Meta (2023), TikTok.
- ***Carpenter v. United States*** — utrzymany precedens 4th Amendment dla danych lokalizacyjnych.

### Dla prawa UE

- **Nowa jakość dla art. 7 RODO** — mylące interfejsy w interfejsach zgód są **klasycznym naruszeniem** warunku "swobodnie udzielonej" zgody.
- **DPA Dania, Niemcy, Hiszpania** wydały wytyczne inspirowane sprawą Google.
- **EDPB wytyczne o mylące interfejsy** (2022) częściowo inspirowane sprawą.

### Dla praktyki Big Tech

- **Defaults = decyzja biznesowa** — projekt UX "domyślnie włączone" jest regulacyjnie ryzykowny. Od 2023 Apple, Meta, TikTok przesuwają się w kierunku **defaults-off** dla nowych użytkowników.
- **Wewnętrzne dokumenty to ryzyko** — spory o mylące interfejsy, "nie wolno napisać, czego nie chcesz widzieć w NYT" (patrz też B03 Google+).
- **"Geofence warrants"** — technika policyjna (lista wszystkich telefonów w promieniu X od crime scene) zaczęła być mocno ograniczana. Google w 2023 ogłosił, że **jego infrastruktura przyszłości nie będzie pozwalać na takie zapytania**.

---

## Pozwy zbiorowe

| Sprawa | Sąd | Stan | Wartość | Poszkodowani |
|--------|-----|------|---------|--------------|
| *Patacsil et al. v. Google* | N.D. Cal. | Ugoda 2024 | 93 mln USD | Użytkownicy Android USA |
| *Matera v. Google* | N.D. Cal. | Ugoda | Część powyższej | Użytkownicy Chrome |
| *Roe v. Google* (geofence) | N.D. Cal. | W toku | Nieokreślona | Osoby dotknięte geofence warrants |

---

## Wnioski dla obywateli

### Co to dla mnie znaczy?

Jeśli przez ostatnie 10 lat używałeś Androida lub aplikacji Google na iPhone'ie — **Google zna twoje ruchy ze szczegółowością miejsca pracy, domu, lekarza, kochanki, mszy świętej**. Nawet jeśli wyłączyłeś "Historię lokalizacji". Dane te mogą być użyte do: targetingu reklam, geofence warrants przez policję, wycieków, sprzedaży do "data brokers", w wypadku hakowania — do śledzenia twojej rodziny.

### Jak się chronić?

**Natychmiastowe kroki (10 minut):**

1. **Wejdź na `myactivity.google.com`** i **wyłącz**:
   - Web & App Activity
   - Location History (Historia lokalizacji)
   - YouTube History
2. **Ustaw auto-delete na 3 miesiące** (minimum) dla wszystkich aktywności: Data & Privacy → Auto-delete.
3. **Usuń dotychczasową historię**: Timeline → Settings → "Delete all Location History".
4. **Wyłącz "Ad personalization"** na `adssettings.google.com`.

**Android — szczegółowo:**

5. **Ustawienia → Lokalizacja** → wyłącz "Use precise location" dla aplikacji, które nie potrzebują precyzyjnej lokalizacji (pogoda, social media).
6. **Ustawienia → Lokalizacja → Wi-Fi scanning, Bluetooth scanning** — **wyłącz oba**! Nawet z wyłączonym Wi-Fi Android skanuje okoliczne sieci jeśli te opcje są włączone.
7. **Ustawienia → Aplikacje → przeglądaj każdą aplikację** — lokalizacja ustawiona na **"Only while using the app"** zamiast "Always".
8. **Rozważ GrapheneOS** — prywatnościowa dystrybucja Androida bez Google Services. Dla osób zaawansowanych.

**iPhone:**

9. **Ustawienia → Prywatność i bezpieczeństwo → Usługi lokalizacyjne** — przejrzyj aplikację po aplikacji. Dla Google Maps ustaw "Only While Using the App" lub "Precise Location: OFF".
10. **Ustawienia → Prywatność i bezpieczeństwo → Śledzenie** — wyłącz "Pozwól aplikacjom prosić o śledzenie".
11. **iCloud Private Relay** (iCloud+) — ukrywa IP przed Google.

### Jakie mam prawa?

**W UE (RODO):**
- **Art. 7** — wyłącz zgodę, która była wymuszona dark patternami. Meta, Google muszą akceptować wycofanie zgody.
- **Art. 17** — żądaj usunięcia danych lokalizacyjnych z historii Google.
- **Art. 15** — pobierz pełną kopię danych przez Google Takeout.
- **Art. 82** — odszkodowanie za szkodę niematerialną (**patrz C-340/21 TSUE 2023**, sam strach przed nadużyciem może być szkodą).

**W USA:**
- Stanowe prawa konsumenckie (40+ stanów z precedensem).
- California CCPA/CPRA — prawo do "opt out of sale".
- Prywatnościowe stanowe (NY Stop Hacks, Massachusetts, itp.).

### Gdzie się zgłosić?

- **Polska**: UODO
- **Udostępnianie mylące interfejsy**: UODO oraz UOKiK (prawo konsumenckie)
- **USA**: Stanowy AG
- **Australia**: ACCC
- **Korea**: PIPC

### Uwaga dla mediatorów i prawników

Dane lokalizacyjne Google to potencjalnie **kluczowy dowód** w sprawach:
1. **Rodzinnych** — rozwodowych (udowodnienie wspólnego zamieszkania / separacji), opieki nad dziećmi (gdzie dziecko faktycznie mieszka).
2. **Spadkowych** — gdzie zmarły bywał, jak spędzał czas.
3. **Ubezpieczeniowych** — czy wypadek zdarzył się naprawdę tam, gdzie deklarowano.
4. **Alibi** — w sprawach karnych, dane mogą potwierdzić lub obalić alibi.

Procedura: klient może pobrać własne dane przez **takeout.google.com** → "Location History" → eksport jako JSON lub KML. W polskich sprawach cywilnych można wnioskować o te dane jako dowód, jeśli klient się zgodzi.

**Przeciwstawne interesy**: klient może chcieć wyłączyć historię (by nie być śledzony) lub ją zachować (jako potencjalne alibi). **Świadoma decyzja**, nie domyślna.

**Geofence warrants** w Polsce — teoretycznie możliwe w ramach art. 180 k.p.k., ale orzecznictwo niemal brak. Sądy polskie nie rozwinęły jeszcze analogicznego precedensu do *Carpenter*.

---

## Ciekawostki

- **Eksperyment Nakashimy z 20 telefonami** kosztował AP ok. **5 000 USD**. Konsekwencje: **660+ mln USD kar** dla Google + globalna reforma ustawień. **Wskaźnik ROI dziennikarstwa**: ~132 000×.
- **Raport Schmidta — 340 transmisji dziennie** — ta liczba jest od 2018 cytowana w setkach artykułów, książek, wykładów akademickich i zeznań kongresowych. Dla porównania: iPhone ~30/dzień. Różnica 10× pokazuje skalę ekosystemu Google.
- **"Google already knew"** — wewnętrzne e-maile z 2014 ujawnione w pozwie Arizona pokazały, że Google **wiedział o zamieszaniu użytkowników od początku**. Inżynierowie proponowali uproszczenie. Kierownictwo odrzuciło, bo **"zmniejszy precyzję targetingu reklam o 12%"**.
- **VP Maps nie rozumiała własnego produktu** — Jen Fitzpatrick w wewnętrznym e-mailu sama przyznała, że **nie jest pewna**, jak działają dwa ustawienia. Klasyczny przypadek "emergent complexity" — produkt, którego **własni liderzy** nie rozumieją.
- **Polska nie dostała osobnej kary** — UODO nie wszczął postępowania, bo sprawa była pod Irlandzkim DPC przez mechanizm jedno okienko. DPC nie zakwalifikował sprawy jako priorytet. Obywatele polscy byli jednak częścią pozwów zbiorowych, które mogły generować odszkodowania.
- ***Carpenter v. United States* (SCOTUS 2018)** — przełomowy wyrok. Timothy Carpenter został skazany za kradzieże w Detroit m.in. na podstawie **127 dni danych lokalizacyjnych** pozyskanych od operatora komórkowego **bez nakazu**. Sąd Najwyższy USA orzekł 5:4: takie dane wymagają **nakazu sądowego** pod 4. Poprawką. To zmieniło praktykę policyjną w całych USA — i pośrednio otworzyło dyskusję o **geofence warrants** do Google.
- **"Geofence warrants"** — technika, w której policja pyta Google: "daj nam wszystkie telefony w promieniu 500 m od crime scene w godzinach 14:00–16:00". Lista może mieć dziesiątki lub setki osób — w tym niewinnych świadków. W 2023 Google **ogłosił zmianę architektury**: nowa infrastruktura Location History nie pozwala na odpowiadanie na takie zapytania. To ograniczyło narzędzie dochodzeniowe policji — głównie w USA, gdzie geofence warrants były używane w dziesiątkach tysięcy spraw rocznie.
- **Konserwatywny Teksas jako pierwszy** — styczeń 2023 Teksas (stan **nie słynący z aktywnej polityki konsumenckiej**) wszedł w osobną ugodę 8 mln USD. Niezwykłe. Analitycy tłumaczą: AG **Ken Paxton** (Republikanin) wykorzystywał sprawy przeciwko Big Tech jako narzędzie polityczne w konflikcie z Dolinami Krzemową.
- **Australia ACCC** — w 2021 australijski regulator rynku przegrał pierwszą sprawę w sądzie pierwszej instancji. Dopiero apelacja (2023) przyniosła karę 60 mln AUD. Precedens orzeczniczy dla common-law jurisdictions.
- **Korea Południowa** — kara 80 mld KRW (~60 mln USD) nałożona przez PIPC (Personal Information Protection Commission) była jedną z największych w historii agencji. Korea jest szczególnie rygorystyczna wobec danych lokalizacyjnych.
- **Google Takeout** jako odpowiedź — po sprawie Google udostępnił łatwiejsze narzędzia pobierania historii lokalizacji jako "odpowiedź na troskę o prywatność". De facto: pobranie własnych danych pokazuje większość użytkownikom, **jak szczegółowe są dane**, co jest często szokujące.

---

## Źródła

1. Ryan Nakashima, "AP Exclusive: Google tracks your movements, like it or not", *Associated Press*, 13 sierpnia 2018. URL: https://apnews.com/article/north-america-science-technology-business-ap-top-news-828aefab64d4411bac257a07c1af0ecb (dostęp: 2026-04-17)

2. Douglas C. Schmidt, "Google Data Collection", Digital Content Next / Vanderbilt University, 15 sierpnia 2018. URL: https://digitalcontentnext.org/wp-content/uploads/2018/08/DCN-Google-Data-Collection-Paper.pdf (dostęp: 2026-04-17)

3. *State of Arizona v. Google LLC*, Maricopa County Superior Court, Case No. CV 2020-006219 (dokumenty sądowe).

4. National Association of Attorneys General, komunikat prasowy "40 States Reach $391.5 Million Settlement with Google Over Location Tracking Practices", 14 listopada 2022.

5. *Carpenter v. United States*, 585 U.S. 296 (2018) — wyrok SCOTUS. URL: https://www.supremecourt.gov/opinions/17pdf/16-402_h315.pdf

6. Australian Competition & Consumer Commission, "ACCC v Google LLC & Anor", decyzja 2023.

7. Personal Information Protection Commission (Korea), decyzja 2023 o karze 80 mld KRW.

8. *Patacsil et al. v. Google LLC*, N.D. Cal., dokumenty PACER.

9. *Matera v. Google Inc.*, N.D. Cal., powiązany pozew.

10. European Data Protection Board, "Guidelines 03/2022 on deceptive design patterns in social media platform interfaces", 2022.

11. Brian Fung, "Google keeps a detailed record of your location, even when you tell it not to", *The Washington Post*, sierpień 2018.

12. Jonathan Mayer et al., Princeton University CITP — weryfikacja eksperymentu AP.

13. Google blog, "Your personal data is protected on Google. Here's how", 2023 — ogłoszenie reform Location History.

14. Ustawa RODO art. 6, 7, 13; EDPB Guidelines on Consent under Regulation 2016/679.

15. CEO Sundar Pichai, zeznania przed Kongresem 2018, 2020 — kwestie lokalizacji.

---

*Ostatnia aktualizacja: 2026-04-17*
*Karta w bazie: B04_location_history.md*
