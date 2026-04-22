---
id: C03
slug: c03-apple-csam
group: C
group_label: Apple, Microsoft, LinkedIn
title: Apple CSAM
year_revealed: 2021
last_updated: '2026-04-17'
companies:
- Apple
status: concluded
jurisdictions:
- US
- UK
- global
legal_basis:
- 18 USC § 2255
- stanowe prawa o odpowiedzialności za produkt
fines: []
whistleblowers:
- schrems
- snowden
journalists: []
related_cases:
- C02
- E01
- D02
- C01
- D01
tags:
- dzieci
- pracownicy
- sygnalista
categories:
- privacy
geo_coords: []
priority: STANDARD
card_complete: true
word_count: 3418
subtitle: Niewdrożony skaner zdjęć jako konflikt prywatności z ochroną dzieci
---

# C03 — Apple CSAM: Niewdrożony skaner zdjęć jako konflikt prywatności z ochroną dzieci

> **Kategoria:** On-device scanning / bezpieczeństwo dzieci vs prywatność / konflikt praw podstawowych
> **Firma/firmy:** Apple
> **Lata:** Sierpień 2021 (ogłoszenie) – grudzień 2022 (porzucenie projektu) – grudzień 2024 (pozew ofiary)
> **Status:** Funkcja nigdy nie wdrożona; pozew ofiary CSAM 2024 w toku
> **ID karty:** C03

---

## Metadane

| Pole | Wartość |
|------|---------|
| Kraj/region | Globalnie (produkt Apple); postępowania: USA |
| Rok ujawnienia | 5 sierpnia 2021 (Apple ogłasza funkcję) |
| Lata trwania praktyki | Brak – funkcja nigdy nie weszła w życie |
| Łączna kara | Brak (nie wdrożono); pozew ofiary na potencjalne **1,2 mld USD+** dla ~2 680 ofiar |
| Waluta | USD |
| Podstawa prawna | 18 USC § 2255 (Masha's Law, 150 000 USD minimum per ofiara); stanowe prawa o odpowiedzialności za produkt |
| Sygnalista/odkrywca | Apple sam ogłosił; krytyka od **Edward Snowden**, **EFF**, **Matthew Green** (Johns Hopkins), pracownicy Apple |
| Liczba poszkodowanych | Konflikt wartości: **2 680+ ofiar CSAM** (wg pozwu 2024) vs **1+ mld użytkowników iCloud** |
| Status (na dziś) | Funkcja porzucona; pozew Jane Doe v. Apple (2024) może wymusić powrót lub odszkodowania |

---

## TL;DR

**5 sierpnia 2021** Apple ogłosił plany wprowadzenia **trzech nowych funkcji ochrony dzieci** — w tym najbardziej kontrowersyjnej **"CSAM Detection"**: systemu, który miał **skanować na urządzeniu (on-device)** zdjęcia użytkownika przesyłane do iCloud Photos i porównywać ich hash **NeuralHash** z bazą znanych materiałów wykorzystywania seksualnego dzieci (CSAM) dostarczoną przez **NCMEC (National Center for Missing & Exploited Children)**. Przy przekroczeniu progu ~30 dopasowań Apple miał **ręcznie przejrzeć zdjęcia i zgłosić do NCMEC**, a następnie władz. Cel: walka z CSAM bez skanowania w chmurze (przeciwnie niż Google, Meta, Microsoft).

Reakcja była **bezprecedensowa**. W ciągu tygodni ponad **90 organizacji praw obywatelskich** (EFF, CDT, ACLU, OpenMedia, Access Now, WITNESS) podpisało list otwarty przeciw funkcji. **Edward Snowden**: *"Apple is rolling out mass surveillance to the entire world."* Eksperci bezpieczeństwa (**Matthew Green, Johns Hopkins**; **Carmela Troncoso, EPFL**; **Sarah Jamie Lewis**) opublikowali analizy pokazujące, jak system może być **wykorzystany przez autorytarne rządy** do skanowania innych treści (obrazy protestów, memów politycznych). Wewnętrzni pracownicy Apple — **rzadko** — wyrazili sprzeciw publicznie. Były szef bezpieczeństwa Facebooka **Alex Stamos** nazwał to "największym PR disaster Apple w historii".

**3 września 2021** — Apple **opóźnił** wdrożenie. **15 grudnia 2021** — Apple **usunął wszystkie referencje** z witryny Child Safety. **7 grudnia 2022** — Apple oficjalnie **porzucił projekt**: *"We have decided to not move forward with our previously proposed CSAM detection tool for iCloud Photos."* Apple uzasadnił to argumentacją prywatnościową: *"Children can be protected without companies combing through personal data."*

**8 grudnia 2024** — **Jane Doe**, 27-letnia ofiara CSAM, **pozywa Apple** w sądzie federalnym N.D. Cal. Zarzut: Apple **obiecał** skanowanie, potem **wycofał się**, przez co Apple wie, że na iCloud znajdują się materiały z jej wykorzystywania, ale nic z tym nie robi. Pozew dotyczy do **2 680 ofiar**, potencjalna odpowiedzialność: **1,2 mld USD+** (150 000 USD minimum per ofiara pod **18 USC § 2255 / Masha's Law**). W sierpniu 2024 podobny pozew złożyła **9-letnia ofiara** w Karolinie Północnej — nieznajomi wysłali jej CSAM przez linki iCloud.

Dla porównania skali: w 2022 **Meta zgłosiła do NCMEC 27 mln raportów CSAM**. **Google: 2,2 mln**. **Apple: 234 raporty**. Krytycy mówią: Apple chroni prywatność za cenę niedziałającego systemu zgłaszania CSAM. Apple: chronimy prywatność przez nie-skanowanie w chmurze.

Sprawa C03 jest w bazie jako **fascynujący przypadek konfliktu dwóch wartości** — **prywatność vs ochrona dzieci** — bez prostego rozwiązania. Nie ma kary. Jest otwarty pozew i pytania dla całego przemysłu.

---

## Oś czasu

- **2008** — Microsoft opracowuje **PhotoDNA**, hash system do wykrywania CSAM (używany przez większość platform).
- **2014** — iCloud Photos wprowadzony.
- **2019** — Apple zaczyna skanować **iCloud Mail** pod kątem CSAM (ujawnione dopiero w sierpniu 2021 przez 9to5Mac, retrospektywnie).
- **5 sierpnia 2021** — Apple ogłasza **trzy funkcje Child Safety**: (1) **CSAM Detection** w iCloud Photos, (2) **Communication Safety** w Messages, (3) rozszerzone wytyczne Siri/Search.
- **6–18 sierpnia 2021** — **fala krytyki**. Ponad 90 organizacji w liście otwartym. EFF, Snowden, Matthew Green, Carmela Troncoso, pracownicy Apple.
- **13 sierpnia 2021** — Craig Federighi (SVP Software) w wywiadzie z Joanną Stern (*WSJ*): system jest *"widely misunderstood"*.
- **18 sierpnia 2021** — badacze pokazują **kolizję NeuralHash** — dwa różne obrazy generujące ten sam hash. Apple odpowiada: *"behaves as described"*.
- **3 września 2021** — Apple **opóźnia** wdrożenie.
- **14 grudnia 2021** — **Communication Safety** (mniej kontrowersyjna funkcja) wprowadzona w iOS 15.2. CSAM Detection nie.
- **15 grudnia 2021** — Apple **usuwa referencje** do CSAM Detection z witryny.
- **7 grudnia 2022** — Apple **oficjalnie porzuca** projekt. Oświadczenie: *"We have decided to not move forward."*
- **Sierpień 2024** — pozew 9-letniej ofiary CSAM w Karolinie Północnej.
- **8 grudnia 2024** — **Jane Doe v. Apple** — pozew federalny N.D. Cal., potencjalnie 2 680 ofiar, 1,2 mld USD.
- **2025–2026** — rozprawy, motions. Sprawa w toku.

---

## Mechanizm

### Planowany system (nigdy nie wdrożony)

**Trzy komponenty:**

**1. CSAM Detection w iCloud Photos** (najbardziej kontrowersyjny):
- Zdjęcia przesyłane do iCloud Photos są **lokalnie hashowane** przez algorytm **NeuralHash** (percepcyjny hash neural network — nie kryptograficzny).
- Hash porównywany z **zaszyfrowanym zestawem hashy CSAM** dostarczonym przez NCMEC (w Apple'owym formacie **Private Set Intersection + Threshold Secret Sharing**).
- Apple **nie widzi** pojedynczych dopasowań.
- Po **przekroczeniu progu** (~30 dopasowań) Apple otrzymuje **klucze do odszyfrowania voucherów** i może przejrzeć zdjęcia.
- **Human review** przed zgłoszeniem do NCMEC.
- **Fałszywe alarmy**: Apple szacował **1 na 1 bilion rocznie**.

**2. Communication Safety w Messages**:
- iMessage **lokalnie skanuje obrazy** wysyłane/odbierane przez dzieci (<13 lat w koncie Apple).
- Jeśli wykryta nagość, zdjęcie jest rozmyte, wyświetlane ostrzeżenie.
- Opcjonalnie: rodzic otrzymuje powiadomienie (kontrowersyjne — potem wycofane).
- Wprowadzone grudzień 2021, **nadal działa**.

**3. Siri/Search guidance**:
- Jeśli użytkownik szuka CSAM w Safari lub Siri, otrzymuje ostrzeżenie i linki do pomocy.
- Wprowadzone, **nadal działa**.

### Dlaczego CSAM Detection była kontrowersyjna — 4 osie krytyki

**Oś 1: On-device scanning = backdoor.**
Matthew Green (Johns Hopkins): *"This is an Apple-operated surveillance system for content on users' devices."* Kluczowa obawa: **precedens**. Jeśli Apple zaakceptuje, że może skanować iPhone'y pod kątem CSAM, autorytarne rządy mogą wymagać skanowania **innych treści** (memy polityczne, obrazy Tiananmen, symbole LGBT+).

**Oś 2: NeuralHash nie jest bezpieczny.**
W ciągu tygodni od ogłoszenia badacze znaleźli **kolizje** (dwa różne obrazy z tym samym hashem). Możliwość **adversarial attacks**: złośliwy aktor mógłby zmodyfikować niewinne zdjęcie tak, żeby miało hash CSAM — i wysłać użytkownikowi, przez co ofiara zostanie fałszywie oskarżona.

**Oś 3: Rozszerzanie zakresu (mission creep).**
EFF: *"Mission creep is a foregone conclusion."* Chiny, Indie, Turcja, Arabia Saudyjska, Iran — rządy, które wielokrotnie wymagały od Apple wdrażania lokalnych ograniczeń (usuwanie aplikacji, szyfrowanie on-soil). Jeśli CSAM Detection istniało, rządy mogły wymagać skanowania innych treści.

**Oś 4: Skuteczność wątpliwa.**
Krytycy: prawdziwi sprawcy CSAM **nie używają iCloud Photos z włączonym sync**. Używają zaszyfrowanych dysków, Tora, darknet. Skanowanie on-device uderzałoby głównie w **nieostrożnych amatorów**, a koszt systemu był ogromny.

### Jak Apple argumentował za

- **Privacy by design**: on-device skanowanie jest **prywatniejsze** niż skanowanie w chmurze (jak robią Google, Meta).
- Apple **nie widziałby** zdjęć niepasujących.
- System **"nie był dla rządów"** — klucze hashy pochodzą wyłącznie od NCMEC.

### Co zostało z pomysłu (2024+)

Apple zrezygnował z **CSAM Detection** w iCloud. Zamiast tego:
- **Advanced Data Protection** dla iCloud (2022) — **end-to-end encryption** dla iCloud Photos (opt-in). To **praktycznie uniemożliwia** skanowanie w chmurze przez Apple.
- Apple zgłasza do NCMEC tylko **Communication Safety** i spotkania z ograniczonymi raportami e-mail.
- **Communication Safety** rozszerzona na dorosłych w 2024 (bez notyfikacji rodzica).

---

## Odkrycie

### Kto krytykował — "koalicja dziwnych towarzyszy"

Sprawa CSAM zjednoczyła **skrajnie różne środowiska**:

- **Organizacje obywatelskie**: EFF, ACLU, Access Now, OpenMedia, WITNESS, CDT, Tactical Tech, NOYB.
- **Eksperci bezpieczeństwa**: Matthew Green (Johns Hopkins University), Carmela Troncoso (EPFL), Sarah Jamie Lewis (Open Privacy Research Society), Alec Muffett, Bruce Schneier.
- **Sygnaliści**: Edward Snowden ostrzegł przed **"mass surveillance"**.
- **Były szef bezpieczeństwa Facebooka**: Alex Stamos nazwał to "największą PR katastrofą Apple".
- **Pracownicy Apple**: wewnętrzny Slack firmy (ujawniony przez *Reuters*) zawierał **ponad 800 wiadomości** pracowników wyrażających obawy.
- **Dziennikarze**: Joanna Stern (*WSJ*) — krytyczny wywiad z Federighi; Alex Heath (*The Verge*) — analizy głębokie.

### Pierwsze publikacje krytyczne

- **5 sierpnia 2021** — Matthew Green, Twitter: pierwsze wysokoprofilowe ostrzeżenia.
- **6 sierpnia 2021** — EFF, "Apple's Plan to 'Think Different' About Encryption Opens a Backdoor to Your Private Life".
- **19 sierpnia 2021** — list otwarty 90+ organizacji.
- **Październik 2021** — Matthew Green et al., akademicki paper "Bugs in our Pockets: The Risks of Client-Side Scanning" — najcięższa akademicka krytyka.

### Pozew 2024

**8 grudnia 2024** — *Jane Doe v. Apple Inc.*, N.D. California. Jane Doe (pseudonim sądowy) to 27-letnia ofiara CSAM z dzieciństwa, molestowana przez krewnego. Jej zdjęcia krążą w sieci od lat. Zarzut: Apple **obiecał CSAM Detection w 2021**, potem **porzucił w 2022**. Apple **wie**, że na iCloud są materiały wykorzystywania Jane Doe (NCMEC hash w bazie), ale **nie zgłasza** (Apple zgłosił tylko 234 przypadki CSAM w 2022 — 27 mln raportów Mety dla kontekstu). Pozew dotyczy do **2 680 ofiar** z bazy NCMEC, których materiały są krążą. Potencjalna odpowiedzialność: **1,2 mld USD+**.

---

## Osoby kluczowe

### Apple

- **Tim Cook** — CEO. Przez lata pozycjonował Apple jako "privacy company". CSAM był w bezpośrednim konflikcie z tym narracyjnym.
- **Craig Federighi** — SVP Software Engineering. Główny obrońca publiczny w sierpniu 2021. Jego wywiad z Joanną Stern (*WSJ*, 13 sierpnia 2021) — nieudana próba wyjaśnienia.
- **Erik Neuenschwander** — Director Privacy Apple. Architekt techniczny systemu. W 2023 w odpowiedzi dla grupy Heat Initiative: *"Scanning every user's privately stored iCloud data would create new threat vectors for data thieves."*
- **Jennifer Bailey** — VP Apple Pay, była zaangażowana w NCMEC relations.

### Krytycy akademiccy

- **Matthew Green** — prof. Johns Hopkins, kryptografia. Jeden z najważniejszych krytyków. Współautor paperu "Bugs in our Pockets".
- **Carmela Troncoso** — prof. EPFL, bezpieczeństwo prywatności. Współautorka analizy.
- **Sarah Jamie Lewis** — Open Privacy Research Society, Vancouver.
- **Bruce Schneier** — Harvard, bezpieczeństwo.

### Whistleblowerzy / aktywiści

- **Edward Snowden** — najbardziej znany krytyk globalnego nadzoru.
- **Alex Stamos** — Stanford Internet Observatory, były szef bezpieczeństwa Facebooka.

### NCMEC i organizacje ochrony dzieci

- **John Shehan** — VP NCMEC. Wspierał plan Apple w 2021. Po porzuceniu krytykował Apple publicznie.
- **Heat Initiative** — organizacja lobbyjąca za CSAM Detection. Założona 2023 w odpowiedzi na porzucenie przez Apple.

### Pozwy

- **Jane Doe** (pseudonim) — powódka wiodąca w pozwie z grudnia 2024.
- **Marsh Law Firm** (Nowy Jork) — kancelaria specjalizująca się w sprawach CSAM i ofiar wykorzystywania.

---

## Reakcja firmy

### Apple, sierpień 2021 – grudzień 2022

**Etap 1: obrona (sierpień 2021).** Apple publikuje FAQ, white papery, robi wywiady (Federighi z *WSJ*). Argument: "Privacy by design".

**Etap 2: opóźnienie (wrzesień 2021).** *"Based on feedback from customers, advocacy groups, researchers and others, we have decided to take additional time over the coming months to collect input and make improvements."*

**Etap 3: ciche usunięcie referencji (grudzień 2021).** Z witryny Child Safety.

**Etap 4: porzucenie (grudzień 2022).** Oświadczenie dla Wired (Joanna Stern): *"Children can be protected without companies combing through personal data, and we will continue working with governments, child advocates, and other companies to help protect young people, preserve their right to privacy, and make the internet a safer place for children and for us all."*

**Etap 5: pozwy (2024+).** Apple w procesie przeciwko Jane Doe argumentuje, że nie ma obowiązku prawnego wdrożenia systemu, który **zapowiedział**.

### Communication Safety (2021+)

Funkcja **została wdrożona** w iOS 15.2 (grudzień 2021). W 2022–2024 rozszerzana:
- Rozszerzenie na UK (2022), więcej krajów 2023.
- Opcja dla kont dorosłych (2024).
- **Rezygnacja z notyfikacji rodzica** (po krytyce, że to może być niebezpieczne dla LGBT+ dzieci w abuzywnych rodzinach).

---

## Postępowanie prawne

### Jurysdykcje

- USA — *Jane Doe v. Apple* (N.D. Cal. 2024), sprawa 9-latki (NC 2024)

### Podstawa prawna

- **18 USC § 2255** ("Masha's Law", od 2006) — 150 000 USD minimum odszkodowania dla ofiar CSAM jeśli firma wiedziała / powinna była wiedzieć.
- **18 USC § 2258A** — obowiązek zgłoszenia CSAM do NCMEC przez platformy.
- **Prawo produktu** — odpowiedzialność za produkt, który obiecano i wycofano.
- **Negligent misrepresentation** — obietnica 2021 nie wykonana.

### Kluczowe etapy

| Data | Etap |
|------|------|
| 5 sierpnia 2021 | Apple ogłasza |
| Sierpień 2021 | Fala krytyki |
| Wrzesień 2021 | Opóźnienie |
| Grudzień 2022 | Porzucenie |
| Sierpień 2024 | Pozew 9-latki (NC) |
| 8 grudnia 2024 | Jane Doe v. Apple (N.D. Cal.) |

### Precedensy i analogie

- ***New York v. Meta*** (A08) — analogiczne konflikty: bezpieczeństwo dzieci vs architektura platformy.
- ***In re Social Media Addiction MDL 3047*** — powiązana sprawa federalna.
- Apple w UK — **Online Safety Act 2023** ma podobne kontrowersje dotyczące end-to-end encryption.

---

## Kary i ugody

**Brak** — funkcja nigdy nie wdrożona, brak regulacyjnych kar. **Potencjalna odpowiedzialność**: do 1,2 mld USD+ w przypadku Jane Doe v. Apple.

---

## Precedensy i implikacje

### Globalne znaczenie

- **Client-side scanning (CSS)** jako koncept stała się przedmiotem debaty regulacyjnej.
- **UK Online Safety Act 2023** — zawiera klauzulę umożliwiającą żądanie od platform "client-side scanning" — Apple publicznie odmawiało wdrożenia iMessage w UK, jeśli to zostanie wymagane.
- **EU CSAM Regulation** (projekt 2022, nadal debatowany) — wymagałoby platformom skanowania komunikacji. Apple lobbyje przeciwko.
- **Australia**: eSafety Commissioner popiera client-side scanning.

### Dla prawa UE

- **E2E encryption vs child safety** — debata dotycząca **Article 6 CSAM Regulation** (projekt 2022): Chat Control. Wielka koalicja przeciw: EDRi, Pirate Party, noyb, niektóre DPA. Projekt wielokrotnie odrzucony.
- **Niemcy, Austria, Holandia** — przeciw. **Francja, Irlandia, Hiszpania** — za. Blokada w Radzie UE.

### Dla praktyki Big Tech

- **Microsoft PhotoDNA** (cloud scanning) nadal standardem.
- **Signal, Wire, Session** — komunikatory z E2E nie skanują i nie planują.
- **Meta WhatsApp** — E2E od 2016, nie skanuje zawartości, zgłasza metadane i raporty użytkowników.
- **Google** — skanowanie w chmurze Gmail, Photos, Drive (nie on-device).

---

## Pozwy zbiorowe

| Sprawa | Sąd | Stan | Wartość | Poszkodowani |
|--------|-----|------|---------|--------------|
| *Jane Doe v. Apple Inc.* | N.D. Cal. | W toku od 12.2024 | Potencjalnie 1,2 mld USD+ | Do 2 680 ofiar CSAM |
| Sprawa 9-latki | NC court | W toku od 8.2024 | Nieokreślona | Indywidualna |

---

## Wnioski dla obywateli

### Co to dla mnie znaczy?

Sprawa Apple CSAM to **nietypowa** pozycja w bazie — nie było kary, nie było ujawnienia szkodliwej praktyki. Było **ogłoszenie** systemu, **powszechna krytyka** i **porzucenie**. Ale warto zrozumieć, bo to **pierwsza wielka debata w erze cyfrowej** o **konflikcie dwóch praw podstawowych**: ochrona dzieci przed wykorzystywaniem vs ochrona prywatności.

Jeśli jesteś rodzicem: obecnie **żadna duża platforma nie skanuje on-device twojego telefonu**. Google, Microsoft, Meta skanują w chmurze (gdy przesyłasz obraz na ich serwery). Apple **nie skanuje** — jest to argument za i przeciw. Za: prywatność. Przeciw: Apple zgłasza ułamek raportów w porównaniu z konkurencją (234 vs 27 mln Mety w 2022).

### Jak chronić dzieci online?

1. **Używaj Communication Safety** na iPhone dziecka: Ustawienia → Screen Time → Content & Privacy Restrictions → Communication Safety. Funkcja nadal działa.
2. **Family Sharing** z odpowiednimi ograniczeniami.
3. **NCMEC, Dyżurnet.pl** — zgłaszaj, jeśli widzisz CSAM.
4. **Rozmowa z dzieckiem** o rozpoznawaniu groomingu (patrz A08).

### Jakie mam prawa w tej sprawie?

**Jako ofiara CSAM:**
- W USA: **18 USC § 2255** — 150 000 USD minimum odszkodowania.
- W Polsce: prawo karne ściga CSAM (art. 202 § 3 k.k.); odszkodowania cywilne możliwe.
- **NCMEC** prowadzi bazę hashy; polskie Dyżurnet.pl współpracuje.

**Jako użytkownik obawiający się skanowania:**
- Włącz **Advanced Data Protection** dla iCloud (Apple) — E2E encryption uniemożliwia Apple skanowanie.
- Używaj **Signal** do komunikacji (E2E + brak skanowania).
- **E2E encryption w iMessage** — domyślne.

### Uwaga dla mediatorów, prawników

W sprawach rozwodowych, ustalania kontaktów z dzieckiem:
1. **Pytanie kluczowe**: czy dziecko używa iCloud Photos z sync? Jeśli dorosły w domu miał dostęp, zdjęcia dziecka mogły krążyć.
2. **Cyber-stalking po rozwodzie** — sprawca może mieć login do wspólnego konta iCloud. Opcja: zmiana haseł, wyłączenie Family Sharing.
3. **Komunikatory dla dzieci** — Messenger Kids (Meta), Signal dla starszych. iMessage z Communication Safety.
4. **Jako adwokat specjalizujący się w prawie dzieci** — śledź sprawę *Jane Doe v. Apple*; precedens może zmienić obowiązki platform.

---

## Ciekawostki

- **"Apple i 234 raporty"** — w 2022 Apple zgłosił NCMEC **234 przypadki CSAM**. Meta: **27 000 000**. Google: **2 174 548**. Microsoft: **107 274**. Apple broni się: skanuje tylko emails i tylko nieliczne miejsca, bo szanuje prywatność. Krytycy: Apple wie, że materiały są, ale nie szuka.
- **Koalicja "dziwnych towarzyszy"** — sprawa zjednoczyła ludzi, którzy zwykle nie stoją po tej samej stronie: **EFF + ACLU** (liberałowie prywatności) + **Edward Snowden** (radykalny libertarianin) + **Alex Stamos** (eks-Facebook security) + **800 pracowników Apple** + **ekstremici religijni** obawiający się skanowania memów + **Chiny dissidentów** obawiający się rozszerzenia.
- **NeuralHash collision w 18 dni** — Apple pokazał system 5 sierpnia. **18 sierpnia 2021** badacze z GitHub/Reddit znaleźli kolizje NeuralHash. System "sprawdza się jak opisano" — odpowiedział Apple — ale pokazanie kolizji w tak krótkim czasie było PR kompromitacją.
- **"Heat Initiative"** — założona w 2023 organizacja lobbyjąca za CSAM Detection Apple, finansowana przez donorów ochrony dzieci. Jej list do Apple wywołał odpowiedź Neuenschwandera: *"Scanning every user's privately stored iCloud data would create new threat vectors for data thieves to find and exploit."* To zdanie stało się **public pivot** Apple.
- **Advanced Data Protection (2022)** — **tydzień po porzuceniu CSAM** Apple ogłosił E2E dla iCloud Photos jako opt-in. Krytycy: Apple wybrał drogę, która **uniemożliwia** własne skanowanie (nawet gdyby chciał). Wspierający: spójna strategia prywatności.
- **Wewnętrzny Slack Apple** — rzadko się zdarza, żeby pracownicy Apple publicznie protestowali. Culture Apple tradycyjnie zabrania. Wyciek Slacka do Reuters z ponad 800 wiadomości pracowników był **bezprecedensowy**.
- **Federighi w WSJ** — wywiad 13 sierpnia 2021 z Joanną Stern. Zamiast uspokoić, dał się zepchnąć do defensywy. Cytat: *"This is a widely misunderstood."* Stern: *"But why?"* Federighi nie miał dobrej odpowiedzi.
- **Polski aspekt** — UODO nie miał formalnej pozycji (funkcja nigdy nie weszła do UE). Ale **Ministerstwo Cyfryzacji** (ówczesne Centrum Projektów Polska Cyfrowa) w 2021 wyraziło obawy w kontekście EU **CSAM Regulation** (tzw. Chat Control).
- **UK Online Safety Act 2023** — zawiera **Section 122** (w oryginalnym projekcie: Section 104), który daje OFCOM prawo żądać od platform client-side scanning. **Apple publicznie zagroziło wycofaniem iMessage z UK**, jeśli wymaganie zostanie zastosowane. Rząd UK w 2023 obiecał, że wymaganie nie będzie egzekwowane, póki brak "technicznie wykonalnego" rozwiązania — efektywnie zawieszone.
- **"Bugs in our Pockets" (2021)** — akademicki paper Matthew Greena, Carmeli Troncoso, Bruce'a Schneiera i 12 innych kryptografów. Tytuł nawiązuje do idei, że **nasze telefony stają się ukrytymi narzędziami nadzoru**. Jedna z najczęściej cytowanych publikacji w debacie CSAM-CSS.
- **Chat Control UE**: projekt rozporządzenia CSAM Regulation (2022, 2023, 2024) kilkakrotnie odrzucony w Radzie. Najbardziej aktywna opozycja: Niemcy (Federalny Inspektor Ochrony Danych), Austria, Holandia, noyb (Max Schrems), EDRi. 2025: projekt **w zasadzie martwy**, choć formalnie nadal na liście legislacyjnej.
- **Paradoks Apple marketingu**: slogan *"What happens on your iPhone, stays on your iPhone"* (CES 2019) — de facto zobowiązanie. CSAM Detection byłoby naruszeniem tej obietnicy. Apple wybrał konsekwencję. Ofiary CSAM zapłaciły tę konsekwencję.

---

## Źródła

1. Apple, "Expanded Protections for Children", 5 sierpnia 2021 (archiwalne). URL: https://web.archive.org/web/20210805230950/https://www.apple.com/child-safety/ (dostęp: 2026-04-17)

2. Apple, oświadczenie o porzuceniu CSAM Detection, 7 grudnia 2022, cytowane w *Wired* (Lily Hay Newman).

3. EFF, "Apple's Plan to 'Think Different' About Encryption Opens a Backdoor to Your Private Life", 5 sierpnia 2021. URL: https://www.eff.org/deeplinks/2021/08/apples-plan-think-different-about-encryption-opens-backdoor-your-private-life (dostęp: 2026-04-17)

4. Matthew Green et al., "Bugs in our Pockets: The Risks of Client-Side Scanning", arXiv:2110.07450, październik 2021. URL: https://arxiv.org/abs/2110.07450 (dostęp: 2026-04-17)

5. Joanna Stern, wywiad z Craig Federighi, *WSJ*, 13 sierpnia 2021.

6. *Jane Doe v. Apple Inc.*, N.D. California, pozew z 8 grudnia 2024. Dokumenty PACER.

7. Malcolm Owen, "Apple sued over 2022 dropping of CSAM detection features", *AppleInsider*, 8 grudnia 2024. URL: https://appleinsider.com/articles/24/12/08/apple-sued-over-2022-dropping-of-csam-detection-features

8. National Center for Missing & Exploited Children (NCMEC), CyberTipline Reports, 2021, 2022, 2023, 2024.

9. Open letter to Apple, 19 sierpnia 2021, 90+ organizations. URL: https://appleprivacyletter.com (archiwalne)

10. Erik Neuenschwander, list do Heat Initiative, sierpień 2023.

11. Alex Stamos, Twitter/X, sierpień 2021.

12. Edward Snowden, Twitter, sierpień 2021.

13. UK Online Safety Act 2023 — Section 121, 122 (client-side scanning provisions).

14. EU Commission, Proposal for Regulation to prevent and combat child sexual abuse (CSAM Regulation), COM/2022/209, maj 2022.

15. *Bugs in our Pockets* co-authors: Hal Abelson, Ross Anderson, Steven M. Bellovin, Josh Benaloh, Matt Blaze, Jon Callas, Whit Diffie, Susan Landau, Peter G. Neumann, Ronald L. Rivest, Jeffrey I. Schiller, Bruce Schneier, Vanessa Teague, Carmela Troncoso.

---

*Ostatnia aktualizacja: 2026-04-17*
*Karta w bazie: C03_apple_csam.md*
