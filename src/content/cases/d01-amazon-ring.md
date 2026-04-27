---
id: D01
slug: d01-amazon-ring
group: D
group_label: Amazon, Uber
title: Amazon Ring
year_revealed: 2019
last_updated: '2026-04-17'
companies:
- Amazon / Ring LLC
status: concluded
jurisdictions:
- US
- global
legal_basis:
- FTC Act § 5
fines:
- amount: 5800000
  currency: USD
  authority: FTC
  date: 2023-05
  category: regulatory_fine
  status: paid
- amount: 5600000
  currency: USD
  authority: FTC (dystrybucja)
  date: 2024-04
  category: regulatory_fine
  status: paid
whistleblowers:
- hill
journalists:
- Sam Biddle
related_cases:
- D02
- C03
- D03
- E01
- B06
tags:
- dzieci
- pracownicy
- coppa
categories:
- privacy
geo_coords: []
priority: STANDARD
card_complete: true
word_count: 2955
explainer:
  src: /animations/d01-amazon-ring.html
  duration: '60s'
  title: Amazon Ring — kamery, policja, hakerzy
subtitle: Pracownicy podglądali klientów, hakerzy grozili dzieciom
years_active:
- 2016
- 2020
---

# D01 — Amazon Ring: Pracownicy podglądali klientów, hakerzy grozili dzieciom

> **Kategoria:** Kamery domowe / nadzór pracowniczy / hakerzy z dostępem / FTC
> **Firma/firmy:** Amazon / Ring LLC
> **Lata:** 2016–2020 (praktyka), 2018–2019 (hakerzy), maj 2023 (kara FTC)
> **Status:** Zakończone — kara FTC 5,8 mln USD; 117 044 klientów otrzymało zwroty 2024
> **ID karty:** D01

---

## Metadane

| Pole | Wartość |
|------|---------|
| Kraj/region | USA głównie; kamery Ring sprzedawane globalnie |
| Rok ujawnienia | 2019 (dziennikarskie doniesienia o dostępie pracowników) – 2023 (kara FTC) |
| Lata trwania praktyki | 2016–2020 (dostęp pracowników); styczeń 2019 – marzec 2020 (hakerzy: 55 000+ klientów) |
| Łączna kara | **5 800 000 USD** (FTC 2023) + zwroty konsumenckie |
| Waluta | USD |
| Podstawa prawna | FTC Act § 5 (unfair/deceptive practices) |
| Sygnalista/odkrywca | Sama pracownica Ring (2017); *The Intercept* (2019); FTC śledztwo 2020+ |
| Liczba poszkodowanych | 81+ kobiet śledzonych przez pracownika; 55 000+ klientów ofiarą hakerów |
| Status (na dziś) | Kara zapłacona; 117 044 zwrotów 2024; Amazon wciąż prowadzi Ring |

---

## W skrócie

**Ring**, założony 2013 w Kalifornii, produkował domowe kamery bezpieczeństwa (dzwonki wideo, wewnętrzne, zewnętrzne). W **2018 roku Amazon kupił Ring** za ~1 mld USD. **31 maja 2023** Federal Trade Commission (FTC) ogłosiła, że Ring zgodził się zapłacić **5,8 mln USD** za rażące naruszenia prywatności klientów. Dwa wątki skargi FTC:

**Wątek 1: Pracownicy mieli nieograniczony dostęp do wideo klientów.** Do stycznia 2018 każdy pracownik i kontraktor Ring (w tym zespół w Ukrainie) mógł przeglądać **dowolne wideo** z kamer klientów — łazienki, sypialnie, pokoje dziecięce. Kluczowy przypadek: **pracownik w 2017 roku przez kilka miesięcy oglądał tysiące nagrań z kamer 81 kobiet-użytkowniczek**. Wykryła to **jego koleżanka z pracy**, zgłosiła przełożonemu. Pierwsze zgłoszenie zostało **zignorowane**. Dopiero gdy supervisor zauważył, że pracownik ogląda tylko **"ładne dziewczyny"**, sprawa została eskalowana i pracownik zwolniony. Ring nie potrafił nawet ustalić, ilu innych pracowników mogło robić to samo — **nie monitorował dostępu pracowników do wideo**.

**Wątek 2: Hakerzy przejęli 55 000+ kamer między styczniem 2019 a marcem 2020.** Ring nie wprowadził podstawowych zabezpieczeń: **wieloskładnikowej autoryzacji (MFA) aż do 2019**, wykrywania **credential stuffing** i **brute force attacks**. Hakerzy wykorzystywali **skradzione hasła z innych wycieków** do logowania do kont Ring. Po zalogowaniu przejmowali **dwustronny komunikator** kamery i:
- **Grozili rodzinom okupem**, żeby nie publikowali kompromitujących nagrań
- **Wyzywali dzieci po imieniu**, używając obelg rasistowskich (niesławny przypadek z Mississippi: haker rozmawiał z 8-letnią afroamerykańską dziewczynką w jej pokoju)
- **Propozycjonowali seksualnie** kobiety, w tym **87-letnią mieszkankę domu opieki**
- **Śledzili i zastraszali** właścicieli domów

Po publikacji FTC Ring zgodził się:
- Zapłacić **5,8 mln USD** (zwroty konsumenckie)
- **Usunąć wszystkie nagrania i face embeddings** sprzed 2018
- Usunąć algorytmy i modele wytrenowane na nielegalnie oglądanych wideo
- Wdrożyć **multi-factor authentication**
- Ograniczyć dostęp pracowników
- Zgłaszać FTC naruszenia bezpieczeństwa
- 20-letni monitoring zgodności

**Kwiecień 2024** — FTC wysłała **117 044 zwroty po ok. 48 USD** via PayPal.

Osobno: **31 maja 2023 Amazon zapłacił dodatkowo 25 mln USD za naruszenia COPPA przez Alexa** (→ karta D02/D03). Łącznie Amazon zapłacił w tym dniu **30,8 mln USD** za dwa osobne naruszenia prywatności (Ring + Alexa).

Sprawa Ring to **jeden z najbardziej jaskrawych przykładów "move fast and break privacy"** w sektorze IoT/smart home. Pokazuje, że kamery w domu — sprzedawane jako bezpieczeństwo — mogą być **wektorem głębszego nadzoru** niż klasyczny phishing czy cyber-stalking.

---

## Oś czasu

- **2013** — Jamie Siminoff zakłada **"Doorbot"** (później: Ring) w Santa Monica. Pitch na *Shark Tank* w 2013 — odrzucony.
- **2014–2017** — Ring rośnie. Centra operacji w USA i **Ukrainie** (Kijów, Charków).
- **2016** — Ring zaczyna działalność z **Ring Neighborhoods** — aplikacją do udostępniania nagrań sąsiadom.
- **2017** — **pracownik Ring** w USA przez ~6 miesięcy ogląda **tysiące nagrań** z kamer **81 kobiet**. Wykryty przez koleżankę z pracy.
- **Kwiecień 2018** — **Amazon kupuje Ring** za ~1 mld USD (wg raportów Bloomberg). Cena nigdy oficjalnie nie potwierdzona.
- **Styczeń 2018** — Ring, po nieformalnej presji FTC, **po raz pierwszy próbuje informować użytkowników** o dostępie pracowników.
- **Styczeń 2019** — ***The Intercept*** (Sam Biddle) publikuje: "For Owners of Amazon's Ring Security Cameras, Strangers May Have Been Watching Too". Ujawnienie zespołu w Ukrainie mającego nieograniczony dostęp.
- **Styczeń 2019 – Marzec 2020** — okres, w którym **55 000+ klientów Ring** padło ofiarą credential stuffing i brute force. **Tysiące wideo** pobranych przez hakerów.
- **Grudzień 2019** — viralny klip na TikTok: haker rozmawia z **8-letnią afroamerykańską dziewczynką** w jej pokoju w Mississippi, używa obelg rasistowskich. Jej matka zainstalowała kamerę "dla bezpieczeństwa".
- **2020** — FTC zaczyna śledztwo.
- **31 maja 2023** — **FTC ogłasza kary**: **5,8 mln USD (Ring)** + **25 mln USD (Alexa/COPPA)** = łącznie 30,8 mln USD dla Amazon.
- **Kwiecień 2024** — FTC wysyła **117 044 zwroty** konsumenckie po ok. 48 USD.
- **2025+** — Ring kontynuuje działalność; Amazon rozszerza o Ring Alarm, Ring for Business.

---

## Mechanizm

### Domyślna architektura Ring (2016–2018)

Ring sprzedawał kamery jako **"smart home security"**. Technicznie:
1. Kamera robi nagrania **na stale** (lub przy ruchu, zależnie od ustawień).
2. Wideo szyfrowane w transporcie, ale **niezaszyfrowane na serwerach Amazon/Ring**.
3. Serwery dostępne dla:
   - Użytkownika (właściciela kamery)
   - **Wszystkich pracowników Ring** (do stycznia 2018)
   - **Zespołu Ring w Ukrainie** (Kijów, Charków) — **nieograniczony dostęp do wszystkiego** aż do 2018
   - Policji w niektórych przypadkach (przez **Ring Neighborhoods**)
4. AI/ML do rozpoznawania ruchu, osób, pojazdów — **trenowane na nagraniach klientów bez zgody**.

### Luki 2019–2020: credential stuffing

**Credential stuffing** — atak, w którym haker używa **skradzionych haseł z innych wycieków** (np. Yahoo, LinkedIn, eBay) do logowania do konta. Jeśli klient Ring miał **to samo hasło** jak w innym zhakowanym serwisie, haker mógł wejść.

**Ring nie wprowadził MFA aż do 2019**. Nie wykrywał nawet masowych prób logowania. FTC: *"hundreds of thousands of videos of the personal spaces of consumers' homes"* zostało ujawnione tym sposobem.

**Po zalogowaniu haker mógł**:
- Oglądać live video
- Pobrać wszystkie archiwalne nagrania
- Używać **dwustronnego komunikatora** (mówić do osób w domu)
- Zmieniać ustawienia

### Kluczowy przypadek — 81 kobiet

Wrzesień 2017, Kalifornia. Pracownik Ring (men, ~30 lat, nazwisko nieujawnione) w swoim komputerze służbowym:
- Szukał kont użytkowniczek **wyglądających atrakcyjnie** (na podstawie zdjęcia profilowego)
- Oglądał ich **nagrania kamer w sypialniach i łazienkach**
- Wielokrotnie wracał do tych samych kont przez kilka miesięcy
- Zgromadził **tysiące nagrań** z kamer **81 kobiet**

**Koleżanka z pracy** zauważyła dziwne zachowanie. Zgłosiła do supervisora. **Pierwszy supervisor zignorował**. Sprawa eskalowana dopiero gdy kolejny supervisor zauważył, że pracownik **ogląda tylko ładne dziewczyny** — dosłowne słowa w raporcie FTC. Wtedy dopiero:
- Zespół audytujący przeanalizował jego aktywność
- Pracownik zwolniony
- Ring **nie poinformował** 81 ofiar
- Ring **nie poinformował** władz

### Głośne przypadki hakerskie

**Grudzień 2019, Mississippi** — rodzice Ashley LeMay kupili Ring Indoor Cam dla pokoju dziewczynek (8, 6, 5 lat). 4 dni po instalacji haker dostał się do kamery. Mówił do **8-letniej Alyssa**: *"I'm your best friend. I'm Santa Claus."* Potem: **obelgi rasistowskie**. Alyssa krzyczała do matki. Matka opublikowała nagranie na Facebooku. **Viral w całych USA**.

**Florida, 2019** — 15-letnia dziewczynka odkryła, że kamera w jej pokoju została przejęta przez hakera, który **mówił do niej** w różnych momentach przez tygodnie. Rodzice nie wierzyli jej przez miesiące.

**Kalifornia, dom opieki, 2020** — 87-letnia kobieta w swoim pokoju. Haker **seksualnie ją propozycjonował** przez dwustronny komunikator kamery, którą rodzina zainstalowała "dla bezpieczeństwa".

---

## Odkrycie

### *The Intercept* — Sam Biddle

**Sam Biddle** — dziennikarz *The Intercept* specjalizujący się w tech i nadzorze. W styczniu 2019 opublikował przełomowy artykuł **"For Owners of Amazon's Ring Security Cameras, Strangers May Have Been Watching Too"**. Kluczowe ustalenia:
- Zespół Ring w **Kijów i Charków** miał nieograniczony dostęp do wszystkich nagrań
- Pracownicy pokazywali sobie "śmieszne" lub "dziwne" nagrania
- Dostęp był wykorzystywany do **trenowania AI** (rozpoznawanie obiektów) bez zgody klientów
- Brak logów audytu: Ring nie wiedział, kto co oglądał

### FTC śledztwo

- **Luty 2020** — FTC zaczyna śledztwo po wpływie skarg i raportu *The Intercept*.
- **2020–2023** — discovery, korespondencja, ugoda.
- **31 maja 2023** — kara 5,8 mln USD.

### Pierwsze publikacje

- **10 stycznia 2019** — Sam Biddle, *The Intercept*, "For Owners of Amazon's Ring Security Cameras, Strangers May Have Been Watching Too"
- **11 grudnia 2019** — video Alyssa LeMay viral na TikTok, Twitter
- **Styczeń 2020** — *Vice*, *Motherboard*: "Hackers Are Breaking Into Ring Cameras to Harass Families"
- **31 maja 2023** — komunikaty FTC, NYT, WSJ, WaPo

---

## Osoby kluczowe

### Ring / Amazon

- **Jamie Siminoff** — założyciel Ring (2013), CEO do 2023. Inwestorem był Richard Branson.
- **Andy Jassy** — CEO Amazon od 2021.
- **Jeff Bezos** — CEO Amazon w czasie zakupu Ring (2018).

### Dziennikarze

- **Sam Biddle** (*The Intercept*) — kluczowy odkrywca.
- **Kashmir Hill** (*New York Times*) — długoterminowa analiza.
- **Caroline Haskins** (*Motherboard/Vice*) — wiele historii o Ring Neighborhoods i policji.

### Ofiary

- **Ashley i Alyssa LeMay** — rodzina z Mississippi, publiczne wezwanie do zmiany.
- 81 kobiet-ofiar pracownika Ring (tożsamość chroniona)

### Regulatorzy

- **Samuel Levine** — dyrektor Bureau of Consumer Protection FTC. Główny sygnatariusz skargi.
- **Lina Khan** — przewodnicząca FTC od 2021.

### Krytycy

- **EFF** (Electronic Frontier Foundation) — liczne raporty o Ring Neighborhoods i współpracy z policją.
- **Fight for the Future** — kampania "End Surveillance Camera Networks".

---

## Reakcja firmy

### Ring/Amazon

**Etap 1: zaprzeczanie (2019).** Oświadczenie: *"Under no circumstances does an employee have access to livestreams from any Ring device."* Po raporcie *Intercept* to okazało się fałszywe.

**Etap 2: ograniczanie dostępu (2019–2020).** Ograniczenie dostępu pracowników do nagrań, wprowadzenie MFA, audyt.

**Etap 3: ugoda FTC (maj 2023).** Oświadczenie: *"Ring promptly addressed these issues on its own years ago, well before the FTC began its inquiry. While we disagree with the FTC's allegations and deny violating the law, this settlement resolves this matter so we can focus on innovating on behalf of our customers."*

**Etap 4: reformy produktowe (2023+).**
- **End-to-End Encryption** opcjonalne (od 2021)
- **Two-factor authentication** obowiązkowe
- Ring **wycofał się z Ring Neighborhoods and Law Enforcement Portal** (2024) po krytyce
- Ring **już nie pozwala** policji na żądanie nagrań bez wniosku sądowego (2024)

---

## Postępowanie prawne

### Jurysdykcje

- **USA federalne** — FTC (kara 5,8 mln)
- **USA stanowe** — kilka stanów prowadziło równoległe śledztwa, ale nie zakończyły się osobnymi karami
- **UE** — brak formalnych postępowań (Ring ma ograniczoną obecność)

### Podstawa prawna

- **FTC Act § 5** — unfair and deceptive practices
- Ring reklamował "zwiększa bezpieczeństwo" — wprowadzenie w błąd, skoro firma sama nie zabezpieczała danych

### Kluczowe etapy

| Data | Etap |
|------|------|
| 10 stycznia 2019 | *Intercept* — ujawnienie |
| Styczeń 2020 | Wybuch historii LeMay |
| 2020 | FTC rozpoczyna śledztwo |
| 31 maja 2023 | Kara 5,8 mln USD |
| Kwiecień 2024 | Zwroty konsumenckie |

---

## Kary i ugody

| Data | Organ | Kwota | Jurysdykcja | Podstawa |
|------|-------|-------|-------------|----------|
| 31 maja 2023 | FTC | 5 800 000 USD | USA | FTC Act § 5 |
| Kwiecień 2024 | FTC (dystrybucja) | 5 600 000 USD wypłacone 117 044 klientom | USA | (z kary) |

---

## Precedensy i implikacje

### Dla prawa USA

- **FTC wzmocniło uprawnienia** w zakresie IoT/smart home.
- Kara 5,8 mln USD była **relatywnie mała** — ale **zniszczenie algorytmów wytrenowanych na nielegalnie oglądanych wideo** było bezprecedensowe. Analogia do *Brown v. Google* (B05) "data destruction".
- **20-letni monitoring** jako element kary.

### Dla prawa UE

- Ring ma **ograniczoną obecność** w UE. Gdyby był bardziej popularny, kara DPC/niemieckie DPA byłaby znacznie wyższa.
- **Pokrewne postępowania** dotyczące **Eufy** (kamer Anker) w 2023 — naruszenia E2E encryption.

### Dla praktyki Big Tech

- **Ring Neighborhoods i policja** — po krytyce EFF Amazon wycofał najkontrowersyjniejsze funkcje w 2024. Policja nie może już **żądać nagrań masowo** od użytkowników Ring.
- **IoT privacy-by-default** — regulatorzy zaczęli wymagać E2E i MFA jako domyślnych opcji.

---

## Pozwy zbiorowe

Główna sprawa: FTC (nie klasyczny pozew zbiorowy). **Indywidualne pozwy** — niektóre rodziny ofiar hakerów złożyły pozwy. Wyniki pojedyncze, zwykle ugody ze zgodą na **NDA**.

---

## Wnioski dla obywateli

### Co to dla mnie znaczy?

Jeśli masz kamerę domową (Ring, Arlo, Wyze, Eufy, TP-Link Tapo, lub jakąkolwiek inną) — **potencjalnie pracownicy firmy mogą mieć dostęp do twoich nagrań**. Nawet jeśli firma deklaruje, że nie, historia Ring pokazuje, że takie deklaracje **mogą być fałszywe**. Dodatkowo **hakerzy mogą przejąć twoją kamerę**, jeśli nie masz MFA i używasz tego samego hasła co w innych serwisach.

### Jak chronić się?

1. **Włącz MFA wszędzie** (Ring, Arlo, Google Nest, Apple HomeKit, Wyze). To **najważniejszy krok**.
2. **Unikalne hasła** dla kamer — nigdy te same, co gdzie indziej.
3. **Menedżer haseł** — Bitwarden, 1Password, KeePassXC.
4. **Włącz E2E encryption** jeśli dostępne:
   - Ring: Control Center → Video Encryption → Advanced End-to-End
   - Apple HomeKit Secure Video — domyślnie E2E
5. **Pozycjonowanie kamer** — NIE w sypialni, łazience, pokoju dziecka. Tylko wejście, salon, podwórko.
6. **Zakryj kamerę fizycznie** gdy domownicy w domu (Ring ma **Privacy Zones** i **Disable Motion**).
7. **Rozważ kamery lokalne** — Synology Surveillance Station, UniFi Protect, Home Assistant + Frigate — nagrania tylko na twoim serwerze.

### Dla rodziców

8. **Kamery w pokoju dziecka** — **przemyśl dwa razy**. Historia LeMay pokazuje ryzyko.
9. **Baby monitors** — te same ryzyka. Wybierz lokalne (Wi-Fi only) zamiast chmurowych.
10. **Rozmowa z dzieckiem** — jeśli używasz kamery, dziecko powinno wiedzieć o tym.

### Uwaga dla mediatorów, prawników, ofiar przemocy domowej

- **Cyberstalking przez kamery** — były partner, który znał hasło, może mieć **nadal dostęp** do kamer. Po separacji: **zmień hasła, włącz MFA, usuń jego konto z Family Share**.
- **W sprawach o opiekę nad dziećmi** — kamery w domu mogą być **dowodem** (gdzie dziecko było, z kim). Ale mogą też być **narzędziem nadzoru** rodzica przez drugiego.
- **W sprawach karnych** — nagrania z Ring były często używane przez policję. **Ring wycofał bezpośrednie żądania** w 2024, ale policja nadal może wnioskować sądownie.

---

## Ciekawostki

- **"Tylko ładne dziewczyny"** — dosłowne słowa w raporcie FTC. Ten sformułowanie, wskazujące na jawną motywację pracownika, było jednym z kluczowych punktów w decyzji FTC o karze.
- **Ring został odrzucony na Shark Tank** w 2013. Jamie Siminoff pitchował **"Doorbot"** — dzwonek z kamerą. Tankinwestorzy (Kevin O'Leary, Daymond John, Lori Greiner) wszyscy odrzucili. 5 lat później Amazon zapłacił za firmę ~1 mld USD. Siminoff wrócił do Shark Tank jako gość dwóch sezonów.
- **Ring Neighborhoods** — aplikacja "sąsiedzka", w której użytkownicy udostępniali nagrania sąsiadom. Krytykowana za **wzmacnianie profilowania rasowego** (disproportionalnie nagrania "czarnoskórych podejrzanych"). EFF prowadził kampanię **"Catalog of Police Partnerships"**, identyfikując **2000+ amerykańskich departamentów policji** współpracujących z Ring. Amazon wycofał program w 2024.
- **Alyssa LeMay** (Mississippi) — matka Ashley LeMay po incydencie w 2019 została aktywistką na rzecz bezpieczeństwa IoT dla dzieci. Alyssa występowała w *Good Morning America* i **Time magazine**. Rodzina pozwała Ring w sądzie federalnym w Mississippi; sprawa skończyła się ugodą z NDA.
- **Jeff Bezos i Ring** — Amazon kupił Ring w kwietniu 2018 za ~1 mld USD. Bezos osobiście poparł decyzję, widząc Ring jako kluczowy element **ekosystemu smart home Amazon** (Alexa + Ring + Key = Prime). Po skandalu 2023 Amazon **nie zmienił strategicznie** pozycji Ring, ale zmniejszył marketing funkcji "sąsiedzkich".
- **Ukraiński zespół** — Ring miał zespół operacyjny w Kijów i Charków. Po inwazji Rosji w 2022 Ring ewakuował pracowników, ale skandal z **nieograniczonym dostępem do wideo** przez ten zespół pozostał w pamięci regulatorów.
- **"Smart home paradox"** — kamery są najczęściej kupowane dla **poczucia bezpieczeństwa**, ale mogą być źródłem **większej niepewności**. Badania NIST (2023) pokazują, że rodziny z kamerami Ring ogólnie **czują się mniej bezpiecznie** niż te bez.
- **FTC rekord zniszczenia** — 5,8 mln USD to mała kara, ale FTC wymagała **zniszczenia**:
  - Wszystkich nagrań sprzed 2018
  - **Face embeddings** — numerycznych reprezentacji twarzy, używanych do trenowania AI
  - Algorytmów i modeli wytrenowanych na nielegalnie oglądanych wideo
  To jest cenne z AI perspektywy — znacznie więcej niż tylko kara finansowa.
- **Polski wymiar** — Ring nie jest szeroko dostępny w Polsce (Amazon PL sprzedaje od 2021, ale Ring ma ograniczoną obecność). UODO nie miało formalnej pozycji. Popularne kamery w PL: Eufy (Anker), Tapo (TP-Link), Xiaomi, EZVIZ (Hikvision) — wszystkie z własną listą kontrowersji.
- **Eufy scandal 2022** — **Anker Eufy** reklamował E2E encryption, okazało się, że miniaturowe nagrania były **nieszyfrowane na serwerach AWS**. Analogia do Ring. Anker zapłacił ~5 mln USD w klasowych pozwach.
- **Wyze scandal 2022** — **Wyze Labs** ukrywał lukę bezpieczeństwa przez **3 lata** (2019-2022). Klienci nie byli informowani.
- **Kontrowersyjne "Police Ring"** — Ring współpracował z 2000+ departamentami policji w USA, udostępniając im interfejs do **zapytania użytkowników o nagrania** bez nakazu sądowego. EFF krytykował to jako **"neighborhood watch panopticon"**. Amazon wycofał bezpośrednie żądania w 2024 po wielu latach presji.
- **Andy Jassy reforms** — po objęciu pozycji CEO Amazon w 2021, Jassy stopniowo redukował najbardziej kontrowersyjne elementy Ring. W 2024 ogłosił **"Privacy-First Approach"** — ale bez fundamentalnych zmian w biznesie.

---

## Źródła

1. Federal Trade Commission, "FTC Says Ring Employees Illegally Surveilled Customers, Failed to Stop Hackers from Taking Control of Users' Cameras", 31 maja 2023. URL: https://www.ftc.gov/news-events/news/press-releases/2023/05/ftc-says-ring-employees-illegally-surveilled-customers-failed-stop-hackers-taking-control-users (dostęp: 2026-04-17)

2. Sam Biddle, "For Owners of Amazon's Ring Security Cameras, Strangers May Have Been Watching Too", *The Intercept*, 10 stycznia 2019. URL: https://theintercept.com/2019/01/10/amazon-ring-security-camera/ (dostęp: 2026-04-17)

3. United States of America v. Ring LLC, Case No. 1:23-cv-01407 (D.D.C.), FTC Complaint, 31 maja 2023.

4. FTC, "FTC Sends Refunds to Ring Customers Stemming from 2023 Settlement", kwiecień 2024.

5. Kashmir Hill, "The Ring Doorbell and the Rise of Mass Surveillance", *New York Times*, 2020.

6. Caroline Haskins, liczne artykuły dla *Motherboard/Vice* 2019–2020 o Ring i policji.

7. EFF, "Catalog of Police Partnerships with Ring", liczne raporty 2019–2024.

8. CNN Business, "Amazon to pay more than $30 million to settle FTC privacy complaints over Alexa and Ring", 31 maja 2023.

9. NPR, "Amazon to pay over $30 million to settle claims Ring, Alexa invaded user privacy", 1 czerwca 2023.

10. CBS News, "Amazon's Ring gave employees 'unfettered' access to customer videos, FTC alleges", maj 2023.

11. Ashley LeMay interview, *Good Morning America*, grudzień 2019.

12. Fight for the Future, kampania "End Surveillance Camera Networks", 2020–2024.

13. NIST, "Smart Home Privacy: User Perception vs Reality", 2023.

14. Amazon, communique o reformach Ring, 2024.

15. Jamie Siminoff, publiczne wystąpienia, powroty w *Shark Tank* 2019, 2022.

---

*Ostatnia aktualizacja: 2026-04-17*
*Karta w bazie: D01_amazon_ring.md*
