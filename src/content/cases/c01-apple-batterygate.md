---
id: C01
slug: c01-apple-batterygate
group: C
group_label: Apple, Microsoft, LinkedIn
title: Apple Batterygate
year_revealed: 2017
last_updated: '2026-04-17'
companies:
- Apple
status: settled
jurisdictions:
- US
- UK
- FR
- IT
legal_basis:
- Deceptive commercial practices
- state consumer protection
- Magnuson-Moss
- Dyrektywa 2005/29/WE
fines:
- amount: 10000000
  currency: EUR
  authority: AGCM
  date: 2018-10
  category: regulatory_fine
  status: paid
- amount: 25000000
  currency: EUR
  authority: DGCCRF
  date: 2020-02
  category: regulatory_fine
  status: paid
- amount: 500000000
  currency: USD
  authority: '*In re Apple Device Performance Litigation*'
  date: 2020-03
  category: class_action_settlement
  status: paid
- amount: 113000000
  currency: USD
  authority: 33 stany USA
  date: 2020-11
  category: state_attorney_general
  status: paid
- amount: 2500000
  currency: USD
  authority: SERNAC
  date: '2020'
  category: regulatory_fine
  status: paid
- amount: 25000000
  currency: EUR
  authority: DGSI
  date: '2023'
  category: regulatory_fine
  status: paid
whistleblowers: []
journalists: []
related_cases:
- C02
- C03
- B02
- B05
- B04
tags:
- dark-patterns
- pozew-zbiorowy
categories:
- privacy
geo_coords: []
priority: TOP
card_complete: true
word_count: 3949
explainer:
  src: /animations/c01-apple-batterygate.html
  duration: '60s'
  title: Batterygate — planned obsolescence potwierdzona
subtitle: Celowe spowalnianie starszych iPhone'ów
years_active:
- 2017
- 2018
---

# C01 — Apple Batterygate: Celowe spowalnianie starszych iPhone'ów

> **Kategoria:** Planowane starzenie / wprowadzanie w błąd / kontrola konsumenta / Right to Repair
> **Firma/firmy:** Apple
> **Lata:** styczeń 2017 (iOS 10.2.1) – grudzień 2017 (ujawnienie), 2018–2024 (postępowania)
> **Status:** Zakończone — ugoda 500 mln USD + kary we Francji, Włoszech, USA stanowe, Portugalia
> **ID karty:** C01

---

## Metadane

| Pole | Wartość |
|------|---------|
| Kraj/region | USA (federalne i stanowe), Francja, Włochy, Portugalia, Chile, UK |
| Rok ujawnienia | 10–20 grudnia 2017 (Reddit + GeekBench + oficjalne przyznanie Apple) |
| Lata trwania praktyki | Styczeń 2017 – grudzień 2017 (ukryty throttling bez informacji); throttling z opcją wyłączenia od marca 2018 |
| Łączna kara | **~650 mln USD / ~600 mln EUR** (wszystkie jurysdykcje łącznie) |
| Waluta | USD / EUR |
| Podstawa prawna | Deceptive commercial practices (FR, IT), state consumer protection (USA), Magnuson-Moss (USA), Dyrektywa 2005/29/WE (UE) |
| Sygnalista/odkrywca | **Reddit user primate1980** (pierwszy sygnał), **John Poole / Primate Labs (GeekBench)** (naukowa weryfikacja) |
| Liczba poszkodowanych | Szacunkowo **~25 mln** posiadaczy iPhone 6/6s/SE/7 z aktualizacjami iOS 10.2.1+ i 11.2+ |
| Status (na dziś) | Zakończone; feature "Battery Health" w iOS; wymuszona zmiana polityki Apple; impuls dla Right to Repair |

---

## W skrócie

**20 grudnia 2017** Apple **oficjalnie przyznał**, że w aktualizacjach **iOS 10.2.1** (styczeń 2017) i **iOS 11.2** (grudzień 2017) **celowo spowalnia procesor** starszych iPhone'ów (**6, 6s, SE, 7**) — rzekomo by zapobiec niespodziewanym wyłączeniom spowodowanym zużytymi bateriami. Apple **nie poinformował** użytkowników, nie ostrzegł w release notes ("addresses issues that could in rare cases cause iPhone 6 and iPhone 6s to unexpectedly shut down" — **technicznie prawda, ale wprowadzająca w błąd**), nie dał opcji wyłączenia throttlingu. Efekt: iPhone 6s z zużytą baterią mógł działać **o 40–60% wolniej** niż z nową, bez wiedzy użytkownika.

Odkrycie nastąpiło przez **anegdotę na Reddit**. 10 grudnia 2017 użytkownik **primate1980** na r/iphone opisał: *"wymieniłem baterię iPhone 6s po 14 miesiącach użytkowania → GeekBench wzrósł z 1466 do 2526"* — **70% wzrost wydajności** po samej wymianie baterii. **John Poole** (założyciel Primate Labs, twórca **GeekBench**) zebrał **dane z setek tysięcy benchmarków** iPhone'ów. Jego analiza opublikowana **18 grudnia 2017** pokazała: urządzenia z iOS 10.2.1+ i zużytymi bateriami miały **znaczący downshift wydajności**, urządzenia bez aktualizacji lub z nowymi bateriami — nie. To był **bezpośredni dowód**, którego Apple nie mógł zaprzeczyć. **20 grudnia 2017** Apple potwierdził.

**Konsekwencje finansowe** (~650 mln USD łącznie):
- **Marzec 2020** — **Class action USA (*In re Apple Device Performance Litigation*): ~500 mln USD** (~25 USD per urządzenie × ~25 mln posiadaczy)
- **Listopad 2020** — **33 stany USA: 113 mln USD**
- **Luty 2020** — **Francja DGCCRF: 25 mln EUR**
- **Październik 2018** — **Włochy AGCM: 10 mln EUR**
- **2023** — **Portugalia: 25 mln EUR**
- **2018** — Chile SERNAC: 2,5 mln USD

**Reformy operacyjne:** Apple obniżył cenę wymiany baterii z 79 USD do **29 USD na cały 2018 rok** — wykonano **11 mln wymian** (5× więcej niż normalnie). Szacowana strata Apple w przychodach ze sprzedaży nowych iPhone'ów: **10–15 mld USD** (ludzie zostawali przy starszych telefonach). W **iOS 11.3** (marzec 2018) Apple wprowadził **Settings → Battery → Battery Health** — publicznie widoczną **maksymalną pojemność** baterii i **opcję wyłączenia throttlingu** (z ostrzeżeniem o ryzyku nagłego wyłączenia).

Sprawa ma znaczenie strukturalne: **Batterygate to pierwszy wielki przypadek regulacyjnej konfrontacji z planned obsolescence** (planowanym starzeniem). Francja w 2020 uchwaliła **ustawę kryminalizującą planowane starzenie** (do 2 lat więzienia + 300 000 EUR grzywny) — bezpośrednia konsekwencja sprawy. Impuls dla **Right to Repair movement** — UE w 2024 uchwaliła Dyrektywę 2024/1799; od 2027 wszystkie telefony w UE muszą mieć **wymienną baterię**.

---

## Oś czasu

- **Wrzesień 2014** — premiera iPhone 6/6 Plus.
- **Wrzesień 2015** — iPhone 6s/6s Plus. Model Apple A9, najbardziej dotknięty przez Batterygate.
- **Marzec 2016** — iPhone SE (bazuje na sprzęcie iPhone 6s).
- **Wrzesień 2016** — iPhone 7/7 Plus.
- **Listopad 2016** — narastające raporty użytkowników o **niespodziewanych wyłączeniach** iPhone 6s przy 30–50% naładowania baterii.
- **Grudzień 2016** — Apple uruchamia **ograniczony program wymiany baterii** dla iPhone 6s wyprodukowanych w określonym okresie (numery seryjne).
- **23 stycznia 2017** — **iOS 10.2.1** — **ukryty throttling wprowadzony**. Release notes: lakoniczne.
- **Marzec 2017** — Apple publicznie ogłasza 80% spadek niespodziewanych wyłączeń iPhone 6s — **nie ujawniając, że to efekt throttlingu**.
- **2 grudnia 2017** — **iOS 11.2** — throttling rozszerzony na iPhone 7/7 Plus.
- **10 grudnia 2017** — **Reddit user primate1980** na r/iphone: "wymieniłem baterię, GeekBench wzrósł o 70%".
- **18 grudnia 2017** — **John Poole** (Primate Labs) publikuje analizę danych GeekBench. Bezpośredni dowód throttlingu.
- **20 grudnia 2017** — **Apple oficjalnie przyznaje** praktykę. Pierwsza publiczna odpowiedź.
- **28 grudnia 2017** — **"A Message to Our Customers about iPhone Batteries and Performance"** — apologia Tima Cooka. Obniżenie ceny wymiany baterii z 79 USD do **29 USD** przez cały 2018.
- **Styczeń 2018** — pozwy class action zaczynają napływać (ostatecznie skonsolidowane w **In re Apple Inc. Device Performance Litigation**, N.D. Cal.).
- **29 marca 2018** — **iOS 11.3** — feature **Battery Health** (pokazywanie maksymalnej pojemności i opcja wyłączenia throttlingu).
- **25 października 2018** — **Włochy AGCM**: kara **10 mln EUR** dla Apple (+10 mln dla Samsunga za tę samą praktykę).
- **7 lutego 2020** — **Francja DGCCRF**: kara **25 mln EUR** + obowiązek publikacji oświadczenia na francuskiej stronie Apple przez miesiąc.
- **2 marca 2020** — **ugoda pozew zbiorowy USA**: ok. **500 mln USD**.
- **Listopad 2020** — **33 stany USA**: ugoda **113 mln USD**.
- **2020** — Chile SERNAC: 2,5 mln USD.
- **2022** — UK Competition Appeal Tribunal zielone światło dla pozew zbiorowy w UK.
- **2023** — **Portugalia**: kara **25 mln EUR**.
- **2024** — UE uchwala **Right to Repair Directive 2024/1799**; obowiązek wymiennych baterii do 2027.

---

## Mechanizm

### Dlaczego Apple w ogóle zrobił throttling

**Problem fizyczny baterii lithium-ion.** Bateria w iPhone ma **ograniczoną liczbę cykli ładowania** (nominalnie ~500 pełnych cykli dla zachowania 80% pojemności). Po przekroczeniu tej liczby **maleje zdolność dostarczania szczytowego prądu** (peak current delivery). Nie sama pojemność — ale zdolność dostarczenia np. 5A na chwilę, gdy CPU potrzebuje boost.

**Konsekwencja**: gdy CPU w iPhonie 6s żądał peak power (np. przy otwieraniu aplikacji, przetwarzaniu fotografii, grze), zużyta bateria **nie mogła dostarczyć prądu**. Napięcie spadało poniżej progu bezpieczeństwa, **iPhone wyłączał się nagle**, mimo że wskaźnik pokazywał 30–50% naładowania.

**Doniesienia z 2016** pokazały problem szczególnie dla iPhone 6s. Apple uruchomił ograniczony program wymiany baterii — ale objął tylko konkretne numery seryjne, większość użytkowników **nie kwalifikowała się**.

**Decyzja Apple (2016–2017)**: zamiast szeroko wymieniać baterie za darmo (koszt: setki milionów), **załatać software**. Nowy iOS miał:
1. Monitorować stan baterii (wewnętrzna rezystancja, napięcie pod obciążeniem)
2. Jeśli bateria "zużyta" → **obniżać maksymalną częstotliwość CPU** (np. z 1,85 GHz do 1,2 GHz)
3. Dzięki temu CPU **nie żąda peak power** → bateria **daje radę** → **brak wyłączeń**

### Techniczne szczegóły throttlingu

- **Detekcja**: iOS monitorował parametry baterii przez chip zarządzania energią (PMIC). Kluczowy wskaźnik: **wewnętrzna rezystancja** (rośnie z degradacją).
- **Próg**: powyżej określonej rezystancji throttling włączał się.
- **Skala throttlingu**: w skrajnych przypadkach **-40 do -60% wydajności** (GeekBench z ~2500 do ~1000 dla iPhone 6s).
- **Dynamika**: throttling nie był stały — w "spokojnym" użytkowaniu CPU mógł działać normalnie. Tylko gdy żądał boost.
- **Brak komunikacji użytkownikowi**: **żadnego ostrzeżenia, żadnej opcji wyłączenia, żadnej informacji w release notes**.

### Release notes Apple — klasyka manipulacji

Apple w iOS 10.2.1 opublikował jedynie: *"iOS 10.2.1 addresses issues that could in rare cases cause iPhone 6 and iPhone 6s to unexpectedly shut down."*

**Analiza:**
- "addresses issues" — tak, ale przez **ukryty throttling**, nie przez naprawę oprogramowania czy optymalizację zarządzania baterii.
- "in rare cases" — w rzeczywistości dotykało milionów urządzeń.
- **Brak wzmianki o throttlingu, o zmianie wydajności, o mechanizmie**.

To zmieściło się w definicji **misrepresentation by omission** — wprowadzania w błąd przez pominięcie istotnej informacji.

---

## Odkrycie

### Reddit — primate1980

**10 grudnia 2017**, r/iphone. Użytkownik (pseudonim primate1980) opublikował:
*"Mój iPhone 6s stawał się coraz wolniejszy. GeekBench single-core: 1466, multi-core: 2526. Dzisiaj wymieniłem baterię (po 14 miesiącach użytkowania, bateria miała 90% pojemności deklarowanej). Teraz: single-core 2526, multi-core 4460. 70% poprawa."*

Post wywołał natychmiast falę replik: *"mam to samo"*, *"iPhone 6 po wymianie działa jak nowy"*. Wątek miał setki komentarzy w ciągu godzin.

### John Poole i Primate Labs

**John Poole** (Primate Labs, Toronto) — założyciel firmy wydającej **GeekBench**, jeden z najpopularniejszych benchmarków CPU. Zbieg okoliczności: nazwa "primate1980" z Reddit i nazwa firmy Poole'a "Primate" są niepowiązane, ale Poole szybko dostrzegł wątek.

Poole miał **anonimowe dane ze setek tysięcy uruchomień GeekBench** na iPhone'ach (domyślnie wysyłane do Primate Labs jako statystyki). Wykonał analizę:
1. Wyniki dla iPhone 6s **przed iOS 10.2.1**: normalny rozkład wydajności.
2. Wyniki **po iOS 10.2.1**: **bimodalny rozkład** — niektóre urządzenia na wysokim wyniku, niektóre na znacznie niższym.
3. Korelacja: urządzenia z niższym wynikiem miały **starsze baterie** (proxy: data zakupu, długość sesji).

Post na blogu Primate Labs (**18 grudnia 2017**) zawierał **wykresy** pokazujące bezpośrednio throttling. Google search "GeekBench iPhone battery slowdown" eksplodował.

### Reakcja mainstream mediów

- **19 grudnia 2017** — *TechCrunch*, *The Verge*, *Ars Technica*
- **20 grudnia 2017** — *NYT*, *WSJ*, *BBC*
- **20 grudnia 2017** — **Apple oficjalnie przyznaje**

### Pierwsze publikacje

- **10 grudnia 2017** — post primate1980 na r/iphone
- **18 grudnia 2017** — John Poole, "iPhone Performance and Battery Age", Primate Labs Blog
- **20 grudnia 2017** — Apple Newsroom, pierwsze oświadczenie
- **28 grudnia 2017** — Apple, "A Message to Our Customers about iPhone Batteries and Performance" — apologia Tima Cooka

---

## Osoby kluczowe

### Odkrywcy

- **primate1980** — anonimowy Reddit user, pierwszy sygnał.
- **John Poole** — założyciel Primate Labs, twórca GeekBench. Naukowa weryfikacja.
- **Zach Epstein** (*BGR*), **Chance Miller** (*9to5Mac*), **Jason Snell** (*Six Colors*) — dziennikarze Apple-ecosystem, którzy szybko podchwycili temat.

### Apple

- **Tim Cook** — CEO, autor publicznej apologii z 28 grudnia 2017.
- **Phil Schiller** — SVP Worldwide Marketing (wówczas).
- **Dan Riccio** — SVP Hardware Engineering.
- **Bob Mansfield** — wcześniej SVP Hardware; odszedł w 2012, ale wiele decyzji dot. baterii w iPhone 6/6s było z jego kadencji.

### Regulatorzy

- **AGCM (Włochy)** — Autorita Garante della Concorrenza e del Mercato; kara październik 2018.
- **DGCCRF (Francja)** — Direction générale de la concurrence, de la consommation et de la répression des fraudes; kara luty 2020.
- **33 stany USA** — koordynowana akcja pod przewodnictwem AG Arizona.
- **SERNAC (Chile)**, **DGSI (Portugalia)**.

### Prawnicy

- **Lieff Cabraser Heimann & Bernstein LLP** — główna kancelaria pozew zbiorowy USA.
- **Joseph Cotchett** (Cotchett, Pitre & McCarthy) — także pozew zbiorowy USA.
- **Foltis & Nicholas** — reprezentował powodów w UK Competition Appeal Tribunal.

---

## Reakcja firmy

### Apple

**Etap 1: cisza (styczeń 2017 – grudzień 2017).** 11 miesięcy throttlingu bez informacji. Na pytania z forum Apple, serwisów i dziennikarzy odpowiedź: "iPhone działa normalnie, bateria ma określoną żywotność".

**Etap 2: wymuszona szczerość (20 grudnia 2017).** Po analizie Poole'a Apple nie ma wyboru. Pierwsze oświadczenie: *"Our goal is to deliver the best experience for customers, which includes overall performance and prolonging the life of their devices. Lithium-ion batteries become less capable of supplying peak current demands when in cold conditions, have a low battery charge or as they age over time, which can result in the device unexpectedly shutting down to protect its electronic components."*

Apple przedstawiał throttling jako **akt troski o użytkownika** — "by uniknąć wyłączeń". Ale nie tłumaczył **dlaczego bez informowania**.

**Etap 3: publiczna apologia (28 grudnia 2017).** List Tima Cooka "A Message to Our Customers":
- Apologia za **brak komunikacji**, nie za sam throttling
- Obniżka ceny wymiany baterii do **29 USD** na 2018 rok
- Zapowiedź **Battery Health** w iOS

**Etap 4: reformy (iOS 11.3, marzec 2018):**
- Battery Health visible w Settings
- Przycisk "Peak Performance Capability" z opcją **wyłączenia throttlingu** (z ostrzeżeniem)
- W kolejnych wersjach iOS — ulepszone zarządzanie energią

**Etap 5: zapłata (2018–2024).** Kary nie zmieniają podstaw finansowych Apple (firma z rezerwami 200+ mld USD), ale **dowodzą**, że planowane starzenie jest regulacyjnie ryzykowne.

**Pytania bez odpowiedzi:**
- Czy Apple mogłoby **zaoferować darmową wymianę baterii** zamiast throttlingu? Koszt: szacowany 1–2 mld USD. Ale przyniosłoby to **goodwill** zamiast skandalu.
- Dlaczego aktualizacja iOS 10.2.1 nie zawierała **nawet jednego zdania** o throttlingu?
- Czy obniżka do 29 USD była **uczciwą ceną wymiany baterii**? Koszty materiałowe baterii iPhone: ~5 USD. Robocizna: ~20 min. Normalna marża 79 USD była ~1 500% markup.

---

## Postępowanie prawne

### Jurysdykcje

1. **USA federalne** — pozew zbiorowy (konsolidacja w N.D. Cal.)
2. **USA stanowe** — 33 stany (AG action)
3. **Francja** — DGCCRF
4. **Włochy** — AGCM
5. **Portugalia** — DGSI
6. **Chile** — SERNAC
7. **UK** — Competition Appeal Tribunal (kontynuacja 2022+)

### Podstawa prawna

- **Francja**: Art. L121-1 Code de la consommation (deceptive commercial practices); Loi 2020-105 (ustawa kryminalizująca planowane starzenie)
- **Włochy**: Codice del Consumo
- **USA federalne**: FTC Act § 5; Magnuson-Moss Warranty Act
- **USA stanowe**: various state consumer protection acts
- **UE**: Dyrektywa 2005/29/WE o nieuczciwych praktykach handlowych

### Planned obsolescence — kluczowy koncept

Apple Batterygate to **pierwszy głośny przypadek**, gdy regulatorzy zastosowali koncept **planned obsolescence** (planowanego starzenia) do cyfrowego produktu. Wcześniej używany głównie dla sprzętu AGD i przemysłu. Francja 2020: **ustawa kryminalizująca** planowane starzenie (art. L441-2 du Code de la consommation) — do 2 lat więzienia + 300 000 EUR grzywny.

### Kluczowe etapy

| Data | Etap |
|------|------|
| 20 grudnia 2017 | Przyznanie Apple |
| Styczeń 2018 | Pierwsze pozwy USA |
| 25 października 2018 | Włochy 10 mln EUR |
| 7 lutego 2020 | Francja 25 mln EUR |
| 2 marca 2020 | Pozew zbiorowy USA 500 mln USD |
| Listopad 2020 | 33 stany 113 mln USD |
| 2023 | Portugalia 25 mln EUR |

### Orzecznictwo powiązane

- **Włochy AGCM vs Samsung** (październik 2018, ta sama data co Apple) — **paralelnie** Samsung ukarany 5 mln EUR za analogiczne praktyki z Galaxy Note 4.
- **Francja — pierwsze kryminalne sprawy planned obsolescence** (2021, sprawy mniejszych producentów).
- **UE Right to Repair Directive 2024/1799** — bezpośrednia konsekwencja regulacyjna.

---

## Kary i ugody

| Data | Organ | Kwota | Jurysdykcja | Podstawa |
|------|-------|-------|-------------|----------|
| 25 października 2018 | AGCM | 10 000 000 EUR | Włochy | Codice del Consumo |
| 7 lutego 2020 | DGCCRF | 25 000 000 EUR | Francja | Code de la consommation |
| 2 marca 2020 | *In re Apple Device Performance Litigation* | ~500 000 000 USD | USA federalne | Class action |
| Listopad 2020 | 33 stany USA | 113 000 000 USD | USA stanowe | Consumer protection |
| 2020 | SERNAC | 2 500 000 USD | Chile | Consumer rights |
| 2023 | DGSI | 25 000 000 EUR | Portugalia | Consumer protection |

**Łącznie: ~650 mln USD / ~600 mln EUR**

Uzupełnienie: koszt **wymian baterii za 29 USD** w 2018 — Apple obsłużył ~11 mln wymian (w porównaniu do ~2 mln rocznie normalnie). Dla firmy wewnętrzny koszt kilkuset milionów USD plus **utrata ~10–15 mld USD** w sprzedaży nowych iPhone'ów.

---

## Precedensy i implikacje

### Dla prawa

- **Francja — ustawa kryminalizująca planned obsolescence (2020)** — bezpośrednia konsekwencja.
- **UE Right to Repair Directive (2024)** — wymienne baterie w urządzeniach mobilnych do 2027.
- **USA — debata nad reformą Magnuson-Moss Act** — nie przeszła, ale dyskusja.
- **California Right to Repair Act (SB 244, 2023)** — w życie 2024.

### Dla praktyki Big Tech

- **Transparentność aktualizacji stała się normą** — Apple, Google, Microsoft publikują bardziej szczegółowe release notes po Batterygate.
- **"Performance Mode" jako UX pattern** — w wielu urządzeniach (Samsung Galaxy "Protect Battery", Google Pixel "Adaptive Battery") użytkownik ma kontrolę nad kompromisem wydajność/bateria.
- **Battery Health jako funkcja** — standard w telefonach od 2018.

### Dla ruchu Right to Repair

- **iFixit** (firma Kyle'a Wiensa) — stała się głosem publicznym.
- **Federacja Stowarzyszeń Konsumenckich** w UE — lobbing za Right to Repair.
- **Fairphone** (holenderska firma) — model modułowego telefonu zyskał na widoczności.

### Dla świadomości konsumentów

- **"Apple knows best" erosion** — wcześniej Apple miał wizerunek firmy, która "robi w trosce o użytkownika". Batterygate pokazał, że Apple **ukrywa decyzje**.
- **Wymuszona kontrola użytkownika** — od 2018 użytkownicy wiedzą, że powinni monitorować stan baterii.

---

## Pozwy zbiorowe

| Sprawa | Sąd | Stan | Wartość | Poszkodowani |
|--------|-----|------|---------|--------------|
| *In re Apple Inc. Device Performance Litigation* | N.D. Cal. | Ugoda 2020 | ~500 mln USD | Posiadacze iPhone 6/6s/SE/7 USA (~25 mln) |
| *Morgan v. Apple* | UK Competition Appeal Tribunal | W toku od 2022 | Oczekiwana | Posiadacze iPhone UK |
| Powiązane pozwy | Kalifornia, Nowy Jork, Teksas | Skonsolidowane | Część 500 mln | Posiadacze USA |

---

## Wnioski dla obywateli

### Co to dla mnie znaczy?

Jeśli masz iPhone'a starszego niż 3 lata (dowolnego modelu) — **twoja bateria prawdopodobnie jest zużyta**, a telefon może być spowolniony. Apple obecnie to **informuje**, ale użytkownicy rzadko sprawdzają. Na Androidzie analogiczny mechanizm istnieje (**battery aging → slowdown**), ale rzadziej kontrolowany. Batterygate to **wyjątkowa sytuacja**, w której konsumenci mieli prawo wiedzieć — i wygrali.

### Jak sprawdzić, czy twój telefon jest spowolniony?

**iPhone:**
1. **Ustawienia → Bateria → Stan baterii i ładowanie** (**Settings → Battery → Battery Health & Charging**).
2. Sprawdź "Maksymalna pojemność" (Maximum Capacity). Jeśli < 80% — bateria znacząco zużyta.
3. Sprawdź "Peak Performance Capability". Jeśli pokazuje "your battery condition has significantly degraded" — throttling aktywny.
4. **Opcja wyłączenia**: kliknij "Disable..." pod informacją o peak performance. Uwaga: **zwiększa ryzyko nagłego wyłączenia**.

**Android** (ogólnie):
5. **Ustawienia → Bateria → Zużycie baterii / Kondycja baterii** (nazewnictwo zależy od producenta).
6. **Uruchom GeekBench, Antutu, PCMark** — porównaj do średnich online dla twojego modelu.
7. Jeśli telefon dramatycznie wolniejszy niż oczekiwana wydajność → rozważ wymianę baterii.

### Wymiana baterii — co wiedzieć

- **Autoryzowany serwis Apple** — od 89 USD (poza okresem promocji) do ~150 EUR w Polsce.
- **Autoryzowany serwis Samsung, Xiaomi** — 30–80 EUR, zależy od modelu.
- **Nieautoryzowane serwisy** — tańsze (30–60 EUR), ale **uwaga na jakość ogniw** (nieoryginalne baterie mogą być niebezpieczne).
- **Self-service repair** (Apple od 2022, inne firmy następują) — można kupić zestaw i wymienić samemu. Ryzyko: utrata gwarancji.

### Jakie mam prawa?

**W UE:**
- **2-letnia gwarancja prawna** (6-letnia w UK) — jeśli telefon przestaje działać dobrze w tym okresie, przysługuje naprawa lub wymiana.
- **RODO art. 82** — nie dotyczy bezpośrednio, ale wprowadzanie w błąd może być podstawą roszczenia.
- **Dyrektywa o nieuczciwych praktykach handlowych** — podstawa dla skarg do UOKiK.
- **UE Right to Repair Directive 2024/1799** — od 2027 wymagania na producentów.

**W Polsce:**
- **UOKiK** — zgłaszanie nieuczciwych praktyk.
- **Sąd konsumencki** — indywidualne roszczenia.
- **Rzecznik Konsumentów** w miastach — bezpłatne doradztwo.

**W USA:**
- Pozew zbiorowy settlement 2020 — **zamknięty** okres zgłoszeń (2021). Jeśli byłeś właścicielem iPhone 6/6s/SE/7 w USA, mogłeś otrzymać 25 USD.
- Stanowe prawa konsumenckie.

### Gdzie się zgłosić?

- **Polska**: UOKiK (uokik.gov.pl), Rzecznik Konsumentów
- **Francja**: DGCCRF (signal.conso.gouv.fr) — można zgłaszać planned obsolescence
- **UE**: European Consumer Centre (ECC-Net)

### Uwaga dla mediatorów, prawników, konsumentów indywidualnych

**W sporach z Apple/innymi producentami o spowolnienie telefonu:**

1. **Zbiór dowodów jest kluczowy**:
   - Screenshoty benchmarków (GeekBench, Antutu) przed i po wymianie baterii
   - Daty aktualizacji iOS (z kroniki Apple)
   - Paragony zakupu
   - Raporty o niespodziewanych wyłączeniach
2. **Pozwy zbiorowe w Polsce** — Ustawa o dochodzeniu roszczeń w postępowaniu grupowym (2009) pozwala na pozwy z 10+ osobami. Bariery są wysokie, ale dla jednorodnych szkód realnie możliwe.
3. **Klauzule w umowach** — Apple w Polsce używa klauzul arbitrażu pro-użytkownika (ADR w Irlandii). Polski adwokat może argumentować nieważność tych klauzul (naruszenie art. 385[3] k.c. — klauzule abuzywne).
4. **Planowane starzenie jako argument** — w Polsce nie jest formalnie skryminalizowane, ale może być podstawą roszczenia z tytułu niezgodności towaru z umową (art. 560 k.c.).

Dla **prawników ochrony środowiska** — Batterygate to **dowód, że wymiana jest tańsza ekologicznie niż wymiana urządzenia**. Argument do spraw:
- Prowadzenia koalicji konsumenckich przeciwko producentom
- Podejmowania polityk rządowych (np. podatek od e-odpadów)
- Lobbingu za ustawą Right to Repair

---

## Ciekawostki

- **Podwójna ironia Apple "environmental"** — Apple marketingowo pozycjonuje się jako **zielona firma** (kampania "Mother Nature" 2023, robot recyklingowy "Liam", reklamy "100% renewable energy"). Batterygate **podważył** te deklaracje — **zmuszanie do wymiany telefonów** zamiast baterii było **środowiskowo katastrofalne**. Ślad węglowy produkcji nowego iPhone'a: ~70 kg CO2. Pomnożone przez miliony potencjalnych "niepotrzebnych" wymian urządzeń — **dziesiątki milionów ton CO2**.
- **iPhone 6s działał jak nowy po wymianie baterii** — użytkownicy, którzy wymieniali baterię, odzyskiwali **~100%** oryginalnej wydajności. Dowód: problem nie był w "zużyciu CPU", tylko w **sztucznym throttlingu**.
- **Apple stracił 10–15 mld USD w sprzedaży** — szacunki analityków. W 2018 **11 mln wymian baterii za 29 USD** oznaczało, że **11 mln użytkowników** zdecydowało się **nie kupować nowego iPhone'a**. Przy średniej cenie 800 USD = ~9 mld USD w niezrealizowanych sprzedażach.
- ***"We apologize"*** — Apple w publicznej apologii **nie użył słowa "batterygate"**. Nigdy oficjalnie nie zaakceptował tej nazwy. To klasyczna strategia PR — nie legitymizować nazwy skandalu.
- **Tim Cook WWDC 2018 keynote** — miesiąc po apologii. Cook **nie wspomniał** Batterygate. Zamiast tego rozpoczął od środowiska i dostępności. Dziennikarze zauważyli strategiczne unikanie tematu.
- ***A9 to A9 to A9*** — iPhone 6s, SE (first gen), iPad Air 2 — wszystkie na chipie A9. Wszystkie były dotknięte throttlingiem w podobny sposób. Niektórzy analitycy podejrzewali, że **chip A9 miał fundamentalne problemy z power delivery**, co Apple próbował załatać software'owo. Apple nigdy tego nie potwierdził.
- **Włochy i Samsung** — ta sama AGCM decyzja z października 2018 ukarała również **Samsunga** za analogiczną praktykę z Galaxy Note 4 (5 mln EUR). Rzadki przypadek symultanicznej kary dla głównych konkurentów.
- **John Poole → nie dostał nagrody** — Poole nie otrzymał żadnego formalnego wyróżnienia za swoją pracę detektywistyczną. Primate Labs pozostało niezależną firmą. GeekBench stał się **de facto standardem** w analizie wydajności urządzeń mobilnych.
- **"Bateria po 500 cyklach"** — Apple deklaruje, że bateria iPhone ma **80% pojemności po 500 cyklach**. Cykl = pełne naładowanie od 0 do 100%. Przy intensywnym użytkowaniu (2× ładowanie dziennie) — **500 cykli w ~8 miesięcy**. W praktyce użytkownicy powinni spodziewać się degradacji po 1–2 latach.
- **Francja — pierwszy kryminalny proces planned obsolescence** — w 2021 rok po ustawie 2020 rozpoczął się pierwszy kryminalny proces przeciwko producentowi sprzętu AGD. Apple formalnie ma w zawieszeniu argument: *"byliśmy pierwszym modelem, ale teraz to nie my"*.
- **Polski wymiar** — w 2018 w Polsce UOKiK **nie wszczął** postępowania. Polscy użytkownicy byli objęci karą DGCCRF Francja (jednak realnie trudno im było zgłosić roszczenie). Obecnie (2026) UOKiK ma bardziej aktywne podejście do Big Tech.
- **Fairphone** — holenderski producent telefonów z **wymienną baterią, modułową konstrukcją** i **4-letnią gwarancją**. Sprzedaż niewielka (~300 000 urządzeń rocznie), ale symbolicznie istotna. Fairphone 5 (2023) ma też **8 lat wsparcia software'owego** — bezprecedensowo długo.
- **iOS Performance Mode — opcja dla power users** — wielu użytkowników iPhone nadal nie wie, że można wyłączyć throttling. Opcja jest w "Ustawienia → Bateria → Stan baterii → Peak Performance Capability". Niebezpieczeństwo: telefon może wyłączać się przy peak load, ale **działa pełną wydajnością** między wyłączeniami.

---

## Źródła

1. primate1980, post na r/iphone, 10 grudnia 2017. URL: https://www.reddit.com/r/iphone/ (archiwum)

2. John Poole, "iPhone Performance and Battery Age", Primate Labs Blog, 18 grudnia 2017. URL: https://www.primatelabs.com/geekbench/blog/iphone-performance-battery-age (dostęp: 2026-04-17)

3. Apple, "A Message to Our Customers about iPhone Batteries and Performance", 28 grudnia 2017. URL: https://www.apple.com/newsroom/2017/12/a-message-to-our-customers-about-iphone-batteries-and-performance/ (dostęp: 2026-04-17)

4. *In re Apple Inc. Device Performance Litigation*, N.D. Cal., MDL No. 2827 (dokumenty PACER).

5. Autorità Garante della Concorrenza e del Mercato (AGCM), decyzja 25 października 2018 — kara 10 mln EUR. URL: https://www.agcm.it/

6. Direction générale de la concurrence, de la consommation et de la répression des fraudes (DGCCRF), decyzja 7 lutego 2020. URL: https://www.economie.gouv.fr/dgccrf

7. National Association of Attorneys General, "33-State AG Settlement with Apple", listopad 2020.

8. Autoridade Nacional (Portugalia), decyzja 2023 — 25 mln EUR.

9. Loi n° 2020-105 du 10 février 2020 relative à la lutte contre le gaspillage et à l'économie circulaire, Art. L441-2 Code de la consommation.

10. EU Directive 2024/1799 on common rules promoting the repair of goods ("Right to Repair Directive").

11. iFixit, materiały techniczne o wymianie baterii iPhone 6s, 7. URL: https://www.ifixit.com/

12. Kyle Wiens, wystąpienia publiczne Right to Repair Coalition.

13. Apple Support, "iPhone Battery and Performance", dokument techniczny. URL: https://support.apple.com/en-us/HT208387

14. Competition Appeal Tribunal UK, *Morgan v. Apple Inc.*, decyzja 2022 umożliwiająca class action.

15. Fairphone, raporty środowiskowe 2020–2024. URL: https://www.fairphone.com

---

*Ostatnia aktualizacja: 2026-04-17*
*Karta w bazie: C01_batterygate.md*
