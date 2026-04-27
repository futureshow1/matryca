---
id: A01
slug: a01-local-mess
group: A
group_label: Meta
title: '"Local Mess"'
year_revealed: 2025
last_updated: '2026-04-17'
companies:
- Meta Platforms
- Yandex
status: active_investigation
jurisdictions:
- EU
- US
- RU
- global
legal_basis:
- RODO
- ePrivacy Directive 2002/58/EC art. 5
- DMA art. 5
- 'w USA: Electronic Communications Privacy Act 1986'
- California Invasion of Privacy Act
- California Unfair Competition Law
fines: []
whistleblowers:
- schrems
journalists: []
related_cases:
- C02
- A05
- B05
- B04
- B03
tags:
- rodo
- pozew-zbiorowy
categories:
- privacy
geo_coords: []
priority: STANDARD
card_complete: true
word_count: 3749
explainer:
  src: /animations/a01-local-mess-v2.html
  duration: '60s'
  title: Jak Meta i Yandex śledziły cię w trybie incognito
subtitle: Meta i Yandex śledzili przeglądarki Androida przez localhost
years_active:
- 2017
- 2025
---

# A01 — "Local Mess": Meta i Yandex śledzili przeglądarki Androida przez localhost

> **Kategoria:** Śledzenie / omijanie zabezpieczeń przeglądarki / bezpieczeństwo mobilne
> **Firma/firmy:** Meta Platforms (Facebook, Instagram), Yandex (Maps, Browser, Navi, Search)
> **Lata:** 2017–2025 (Yandex od 2017, Meta od września 2024, zakończenie 3 czerwca 2025)
> **Status:** Praktyki zaprzestane po ujawnieniu; pozew zbiorowy w toku; postępowania regulatorów UE w badaniu
> **ID karty:** A01

---

## Metadane

| Pole | Wartość |
|------|---------|
| Kraj/region | Globalnie; ogniska postępowań: USA (Kalifornia), UE (niemieckie i hiszpańskie DPA), Rosja (Yandex) |
| Rok ujawnienia | 3 czerwca 2025 |
| Lata trwania praktyki | Yandex: 2017–2025; Meta: wrzesień 2024 – 3 czerwca 2025 |
| Łączna kara | Brak (stan na 04.2026) — postępowania w toku |
| Waluta | — |
| Podstawa prawna | RODO (art. 5, 6, 25, 32), ePrivacy Directive 2002/58/EC art. 5(3), DMA art. 5(2), w USA: Electronic Communications Privacy Act 1986, California Invasion of Privacy Act (CIPA), California Unfair Competition Law |
| Sygnalista/odkrywca | Zespół akademicki IMDEA Networks / Radboud University / KU Leuven |
| Liczba poszkodowanych | Szacunkowo miliardy użytkowników Androida globalnie; Meta Pixel na 5,8 mln stron (BuiltWith), Yandex Metrica na ~3 mln |
| Status (na dziś) | Praktyka zatrzymana; pozwy i postępowania trwają |

---

## W skrócie

3 czerwca 2025 międzynarodowy zespół badaczy akademickich ujawnił, że aplikacje **Facebook i Instagram na Androidzie** — a od 2017 również aplikacje **Yandex (Maps, Browser, Navi, Search)** — latami prowadziły ukryte śledzenie aktywności użytkowników w przeglądarkach, **omijając piaskownicę (sandboxing)** systemu Android oraz wszystkie tryby prywatności dostępne dla użytkownika (incognito, VPN, czyszczenie ciasteczek, blokada ciasteczek stron trzecich). Technika, nazwana przez badaczy **"Local Mess"**, polegała na uruchamianiu w tle aplikacji ukrytego nasłuchu na porcie lokalnym (localhost, 127.0.0.1) — gdy użytkownik odwiedzał dowolną z **milionów stron** z osadzonym skryptem Meta Pixel lub Yandex Metrica, skrypt wysyłał identyfikator sesji do tego ukrytego kanału, a aplikacja (z zalogowanym użytkownikiem) łączyła anonimową tożsamość przeglądarki z realnym kontem.

Odkrycie ujawniono 3 czerwca 2025 przez zespół: **Aniketh Girish** (IMDEA Networks), **Günes Acar** (Radboud University), **Narseo Vallina-Rodríguez** (IMDEA Networks), **Nipuna Weerasekara** i **Tim Vlummens** (KU Leuven). Publikację zsynchronizowano z artykułem **Dana Goodina w *Ars Technica***. Tego samego dnia o 7:45 CEST skrypt Meta Pixel **przestał wysyłać pakiety na localhost** — Meta zareagowała w ciągu kilku godzin. Google nazwał tę praktykę "rażącym naruszeniem zasad bezpieczeństwa i prywatności". W czerwcu 2025 w USA złożono pozew zbiorowy przeciwko Meta, Alphabet/Google i Yandex.

"Local Mess" to przełomowa sprawa, bo nie jest to wyciek ani błąd — jest to **celowo zaprojektowana architektura obchodzenia fundamentalnych zabezpieczeń systemowych**. Dla europejskich regulatorów to test, czy RODO, DMA i ePrivacy potrafią reagować na tak niskopoziomowe techniki omijania piaskownicy. Dla obywateli — dowód, że samo włączenie trybu incognito lub VPN nie chroni przed śledzeniem przez aplikacje Big Tech.

---

## Oś czasu

- **2017** — Yandex rozpoczyna nasłuchiwanie swoich aplikacji na portach lokalnych urządzeń z Androidem; skrypt Yandex Metrica wysyła dane do tego kanału.
- **2020 (Schrems II)** — TSUE unieważnia Privacy Shield UE-USA, zaostrzając ramy transferu danych; kontekst prawny dla późniejszych kar Meta.
- **Wrzesień 2024** — Meta wdraża analogiczną technikę na aplikacjach Facebook i Instagram; początkowo transmisja odbywa się przez HTTP. Deweloperzy zauważają dziwne żądania do localhostu i zadają pytania na forach Facebook for Developers.
- **Październik 2024** — Meta rezygnuje z HTTP, przechodzi na WebSocket i warianty WebRTC (STUN z SDP Munging, TURN bez SDP Munging); metoda staje się trudniejsza do wykrycia.
- **Koniec 2024** — Günes Acar z Radboud University przygotowuje ćwiczenie dla studentów na temat trackerów i w ramach demonstracji na stronie własnej uczelni zauważa połączenie skryptu Meta Pixel z lokalnym portem swojego komputera.
- **Początek 2025** — Acar konsultuje się z Narseo Vallina-Rodríguezem z IMDEA Networks; zespół rozszerza dochodzenie, analizuje ruch sieciowy aplikacji Facebook, Instagram i aplikacji Yandex.
- **Marzec–maj 2025** — cichy disclosure: badacze informują dostawców przeglądarek (Google, Mozilla, Brave, DuckDuckGo, Vivaldi), aby przygotowali łatki przed publikacją.
- **26 maja 2025** — Google wypuszcza **Chrome 137** z częściową mitygacją (blokada SDP Munging, ale tylko dla części użytkowników w field trial).
- **3 czerwca 2025, poranek** — Dan Goodin publikuje w *Ars Technica*: "Meta and Yandex are de-anonymizing Android users' web browsing identifiers". Równolegle uruchamiana jest strona **localmess.github.io** z pełną analizą techniczną.
- **3 czerwca 2025, 07:45 CEST** — badacze odnotowują, że skrypt Meta Pixel **przestał wysyłać pakiety na localhost**. Kod odpowiedzialny za ciasteczko `_fbp` w tym kanale został niemal całkowicie usunięty.
- **3–4 czerwca 2025** — oświadczenia: Meta mówi o "potencjalnym nieporozumieniu co do polityk Google"; Yandex twierdzi, że "ściśle przestrzega standardów ochrony danych"; Google nazywa praktykę "rażącym naruszeniem naszych zasad bezpieczeństwa i prywatności"; Mozilla uznaje to za "poważne naruszenie polityk antytrackingowych".
- **5 czerwca 2025** — publikacja pełnego raportu technicznego "Covert Web-to-App Tracking via Localhost on Android" na localmess.github.io.
- **Czerwiec 2025** — złożenie pozwu zbiorowego w USA (39 stron) przeciwko Meta, Alphabet, Google LLC i Yandex; powództwo oparte m.in. o Electronic Communications Privacy Act 1986, CIPA, California Unfair Competition Law, California Consumers Legal Remedies Act.
- **Czerwiec 2025** — hiszpański adwokat i ekspert ds. prywatności **Jorge García Herrero** szacuje, że kary RODO dla Meta mogą sięgnąć miliardów dolarów.
- **II połowa 2025** — Firefox nadal opracowuje łatkę; Brave od początku nieodporny ze względu na wymóg zgody dla localhost; DuckDuckGo zaktualizował blocklistę.
- **Stan na kwiecień 2026** — postępowania trwają; brak publicznie potwierdzonych kar; europejskie DPA badają sprawę; pozew zbiorowy w fazie certyfikacji klasy.

---

## Mechanizm

### Jak to działało — architektura techniczna

Schemat ataku można rozłożyć na cztery warstwy:

**Warstwa 1: Aplikacja natywna otwiera ukryty nasłuch.**
Gdy użytkownik po raz pierwszy uruchamiał aplikację Facebook lub Instagram, aplikacja **tworzyła usługę w tle** (background service), która otwierała nasłuch na stałych portach:
- TCP 12387 i 12388
- UDP — pierwszy wolny port z zakresu 12580–12585

Nasłuchiwanie działało **nawet po przeniesieniu aplikacji w tło**. Android pozwala dowolnej aplikacji z uprawnieniem INTERNET otworzyć socket na loopback interface (127.0.0.1) bez dodatkowych uprawnień użytkownika — to luka w samym designie platformy.

**Warstwa 2: Skrypt na stronie internetowej wysyła dane do localhostu.**
Strony z osadzonym Meta Pixel lub Yandex Metrica (łącznie miliony) ładowały JavaScript, który niezależnie od trybu przeglądania (incognito, VPN, z wyczyszczonymi ciasteczkami) **wysyłał ciasteczko `_fbp` na 127.0.0.1:12387**. Pierwsza wersja (wrzesień 2024) używała zwykłego HTTP — łatwego do wykrycia. Po październiku 2024 Meta zmigrowała do:

- **WebSocket** — trwałe połączenie dwukierunkowe
- **WebRTC STUN z SDP Munging** — manipulacja protokołem Session Description Protocol przed przekazaniem go do przeglądarki
- **WebRTC TURN bez SDP Munging** — kierowanie ruchu przez serwery TURN

**Warstwa 3: Aplikacja linkuje dane.**
Aplikacja natywna otrzymywała `_fbp` cookie od skryptu w przeglądarce, a następnie **wysyłała je jako GraphQL mutation** do `https://graph.facebook.com/graphql` razem z trwałym identyfikatorem użytkownika (ID konta Facebook/Instagram lub Android Advertising ID). Od tego momentu Meta wiedziała: "anonimowa sesja przeglądania o ID X należy do konta Y".

**Warstwa 4: Omijanie zabezpieczeń.**
Co ta technika skutecznie omijała:
- **Tryb incognito** — bez efektu, bo dane i tak trafiały do aplikacji z zalogowanym kontem
- **VPN** — bez efektu, bo transmisja szła lokalnie, nie przez sieć
- **Czyszczenie ciasteczek** — efemeryczne `_fbp` było łączone z trwałym identyfikatorem aplikacji
- **Blokada ciasteczek stron trzecich** — obchodzona, bo `_fbp` to cookie **pierwszej strony**
- **Sandboxing przeglądarka-aplikacja** — fundament Androida obalony

### Dlaczego to było nielegalne/szkodliwe

**Po stronie UE:**
- **RODO art. 5** — brak transparentności, uczciwości i celowości przetwarzania
- **RODO art. 6** — brak ważnej podstawy prawnej (zgoda nie może być świadoma, jeśli użytkownik nie wie o istnieniu kanału)
- **RODO art. 25** — naruszenie zasady privacy by design
- **ePrivacy Directive art. 5(3)** — wymaga zgody na przechowywanie i dostęp do informacji na urządzeniu użytkownika (tzw. cookie directive)
- **DMA art. 5(2)** — zakaz łączenia danych z różnych usług gatekeepera bez wyraźnej zgody

**Po stronie USA:**
- **Electronic Communications Privacy Act 1986** (Wiretap Act) — przechwytywanie komunikacji elektronicznej
- **California Invasion of Privacy Act (CIPA)** — zakaz podsłuchu bez zgody
- **California Unfair Competition Law** — wprowadzanie konsumentów w błąd

**Dodatkowe ryzyko bezpieczeństwa:** badacze stworzyli **proof-of-concept** złośliwej aplikacji, która — nasłuchując na tych samych portach — mogła **przechwytywać ruch innych aplikacji Meta**. To znaczy, że architektura nie tylko naruszała prywatność, ale była **wektorem ataku** dla złośliwego oprogramowania.

---

## Odkrycie

### Kto odkrył i kiedy

Pierwotne odkrycie: **Günes Acar**, assistant professor na Radboud University w Holandii, specjalista od trackingu internetowego. Moment eureki to **ćwiczenie dla studentów magisterskich** z końca 2024. Acar przygotowywał nietypową demonstrację trackingu na stronie swojej uczelni, którą studenci mieli analizować. W trakcie analizy zauważył, że skrypt Meta Pixel łączy się z **lokalnym portem jego własnego komputera** — 127.0.0.1. W wywiadzie dla *El País* opisał tę reakcję: "Wiedziałem, że strona ma kilka trackerów, w tym Facebooka. Ale nagle zobaczyłem połączenie z lokalnym portem — czyli z moim własnym komputerem. W pierwszej chwili nic nie rozumiałem."

Acar skonsultował odkrycie z **Narseo Vallina-Rodríguezem**, specjalistą od bezpieczeństwa aplikacji mobilnych z IMDEA Networks w Madrycie. Reakcja Vallina-Rodrígueza według *El País*: *"Jak to, do cholery…"*. Od tego momentu zespół rozszerzył się o trzech doktorantów (Girish, Weerasekara, Vlummens) i rozpoczął systematyczne badania.

### Jak doszło do ujawnienia

Metodologia badawcza:
1. Statyczna i dynamiczna analiza aplikacji Facebook i Instagram (decompile, monitoring syscalli).
2. Crawl 100 000 najpopularniejszych stron z Frankfurtu i Nowego Jorku (z akceptacją i bez akceptacji zgody cookie).
3. Porównanie aplikacji Yandex — odkrycie analogicznego mechanizmu działającego od 2017.
4. Analiza danych historycznych z **HTTP Archive** — ustalenie osi czasu: kiedy Meta i Yandex uruchamiały kolejne warianty.
5. Odpowiedzialne ujawnienie (responsible disclosure) dostawcom przeglądarek: Google, Mozilla, Apple, Brave, DuckDuckGo, Vivaldi — z wyprzedzeniem kilku miesięcy przed publikacją.

### Pierwsze publikacje

- **3 czerwca 2025**: Dan Goodin, *Ars Technica*, "Meta and Yandex are de-anonymizing Android users' web browsing identifiers"
- **3 czerwca 2025**: strona **localmess.github.io** z pełną dokumentacją techniczną
- **5 czerwca 2025**: pełen raport "Covert Web-to-App Tracking via Localhost on Android"
- Następnie: *The Register, El País, TechRadar, Security Boulevard, Daring Fireball, CPO Magazine, Business & Human Rights Resource Centre* i wiele innych.

---

## Osoby kluczowe

### Badacze akademiccy (serce odkrycia)

- **Aniketh Girish** — doktorant, IMDEA Networks, Madryt. Koordynator analizy technicznej.
- **Günes Acar** — assistant professor, Radboud University, Nijmegen. Pierwotny odkrywca; **symboliczna bohaterka przypadku** — pokazuje, że niekomercyjna nauka wciąż potrafi wykrywać to, czego regulatorzy nie widzą. Wcześniejsze prace Acara: OpenWPM, analiza fingerprintingu w Canvas API.
- **Narseo Vallina-Rodríguez** — associate professor, IMDEA Networks. Specjalista od bezpieczeństwa aplikacji mobilnych i prywatności w ekosystemach Android/iOS. Współautor wielu wpływowych raportów (Lumen Privacy Monitor).
- **Nipuna Weerasekara** — doktorant, KU Leuven.
- **Tim Vlummens** — doktorant, KU Leuven.

### Dziennikarze śledczy

- **Dan Goodin** — Security Editor *Ars Technica*. Autor pierwszej publikacji. Goodin od dekad prowadzi rubrykę bezpieczeństwa, słynną z technicznej precyzji i ostrych reakcji regulatorów na jego teksty.
- **Jordi Pérez Colomé** — dziennikarz *El País*, który przeprowadził wywiad z Acarem i opisał osobisty wątek odkrycia.
- **Thomas Claburn** — *The Register*; szczegółowa analiza techniczna dla społeczności developerskiej.

### Prawnicy i aktywiści

- **Jorge García Herrero** — hiszpański adwokat ds. prywatności; publicznie oszacował potencjalne kary dla Meta na "miliardy dolarów".
- **NOYB (None Of Your Business)** — organizacja Maxa Schremsa; nie była stroną inicjującą tę sprawę, ale prowadzi równolegle szereg postępowań RODO przeciwko Meta (w tym za "Pay or Okay" i trening AI na danych EU), które tworzą kontekst enforcement.

### Regulatorzy

- **Google** — potwierdził naruszenie zasad Play Store.
- **Europejskie DPA** — w tym **niemieckie i hiszpańskie** — wszczęły analizy sprawy.
- **FTC (USA)** — według publicznych źródeł otrzymała zgłoszenia, ale nie uruchomiła publicznie oficjalnego dochodzenia (stan na 04.2026).

---

## Reakcja firmy

### Meta

Oficjalny komentarz rzecznika Meta dla *The Register*: *"Jesteśmy w dyskusjach z Google w celu wyjaśnienia potencjalnego nieporozumienia dotyczącego stosowania ich polityk. Po otrzymaniu informacji o obawach zdecydowaliśmy się wstrzymać funkcję, podczas gdy pracujemy z Google nad rozwiązaniem kwestii."*

**Analiza:** komunikat jest klasycznym przykładem PR-owego "spinu". Określenie nielegalnej techniki omijania zabezpieczeń jako "funkcji" i "potencjalnego nieporozumienia" — przy skali **miliardów potencjalnych poszkodowanych** i **latach działania** — spotkało się z ostrą krytyką społeczności bezpieczeństwa.

**Działania naprawcze:**
- 3 czerwca 2025, 07:45 CEST — wyłączenie skryptu Meta Pixel w zakresie wysyłki do localhost
- Niemal całkowite usunięcie kodu odpowiedzialnego za `_fbp` na localhost
- **Brak publicznych przeprosin**, brak wyjaśnienia, **brak ujawnienia skali** zbieranych danych, brak deklaracji o ich usunięciu

### Yandex

Oświadczenie: *"Yandex ściśle przestrzega standardów ochrony danych i nie deanonimizuje danych użytkowników. Dana funkcja nie zbiera żadnych wrażliwych informacji i służy wyłącznie personalizacji w naszych aplikacjach."*

**Analiza:** twierdzenie "nie deanonimizuje" jest bezpośrednio sprzeczne z ustaleniami badaczy. *The Register* próbował uzyskać dodatkowy komentarz od Yandex — zapytanie zostało odbite jako spam.

### Google (jako platforma Android)

Rzecznik Google dla *Ars Technica*: praktyki Meta i Yandex *"rażąco naruszają nasze zasady bezpieczeństwa i prywatności"*. Google **zdystansował się** od praktyk, ale jednocześnie jest stroną pozwaną w pozwie zbiorowym — pozew zarzuca Google zaniedbanie w nadzorze nad platformą Android, która umożliwiła tę lukę.

### Mozilla

Rzecznik Mozilli nazwał praktyki *"poważnymi naruszeniami naszych polityk antytrackingowych"*. Firefox rozpoczął prace nad łatką.

---

## Postępowanie prawne

### Jurysdykcje

1. **USA** — pozew zbiorowy (czerwiec 2025) w sądzie federalnym, przeciwko Meta, Alphabet, Google LLC i Yandex
2. **UE** — europejskie DPA badają naruszenia RODO, potencjalnie DMA
3. **Rosja** — teoretycznie Yandex podlega rosyjskiemu prawu ochrony danych, ale w praktyce enforcement jest minimalny

### Podstawa prawna (wg pozwu zbiorowego w USA)

- **Electronic Communications Privacy Act of 1986** — zakaz przechwytywania komunikacji elektronicznej bez zgody
- **California Invasion of Privacy Act (CIPA)** — zakaz podsłuchu
- **California Unfair Competition Law** — wprowadzanie konsumentów w błąd
- **California Consumers Legal Remedies Act**
- Dodatkowe zarzuty wobec Google — negligent failure to enforce (zaniedbanie w egzekwowaniu polityk platformy)

### Kluczowe etapy

- **Czerwiec 2025** — złożenie pozwu
- **Druga połowa 2025** — fazy wniosków wstępnych, motions to dismiss
- **2026** — faza certyfikacji klasy (spodziewana w drugiej połowie roku)
- **Potencjalnie 2027–2028** — merytoryczny proces lub ugoda

### Orzecznictwo powiązane

- **Schrems II (C-311/18, TSUE 2020)** — kontekst dla transferów EU→USA
- **Meta v. Bundeskartellamt (C-252/21, TSUE 2023)** — podstawy łączenia danych przez gatekeepera
- **Brown v. Google (Brown et al. v. Google LLC, N.D. Cal. 2020)** — analogiczna sprawa śledzenia w trybie incognito — potencjalnie wykorzystywany precedens

---

## Kary i ugody

| Data | Organ | Kwota | Jurysdykcja | Podstawa |
|------|-------|-------|-------------|----------|
| — | — | Brak potwierdzonych kar (stan 04.2026) | — | Postępowania w toku |

**Potencjalne ekspozycje (szacunki eksperckie):**
- Jorge García Herrero szacuje potencjalne kary RODO na **miliardy dolarów**
- Wartość pozwu zbiorowego w USA — zależnie od wielkości klasy i definicji szkody (możliwe odszkodowania statutowe per osoba × miliardy potencjalnych poszkodowanych — choć realne wyroki są zwykle znacząco niższe przez procedury certyfikacji klasy)

---

## Precedensy i implikacje

### Dla prawa UE

- **Pierwsza duża sprawa o omijanie sandboxingu systemowego** w kontekście RODO. Dotychczas skargi dotyczyły głównie ciasteczek, trackingu cross-site, transferów międzynarodowych. "Local Mess" testuje, czy regulatorzy UE potrafią reagować na niskopoziomowe techniki systemowe.
- Potencjalny impuls do **rewizji ePrivacy Regulation** (następcy dyrektywy 2002/58), która ugrzęzła w negocjacjach od lat.
- Argument na rzecz **egzekwowania DMA art. 5(2)** — zakazu łączenia danych z różnych usług gatekeepera bez zgody; Meta już dostała 200 mln € za "consent or pay" w kwietniu 2025, "Local Mess" może być drugim frontem.

### Dla prawa USA

- **Wzmacnia interpretację Wiretap Act** jako mającego zastosowanie do niskopoziomowego śledzenia mobilnego.
- Buduje precedens dla pozwów zbiorowych o **"deanonimizację"** — dotychczas sądy USA akceptowały argument firm, że pseudonimizowane identyfikatory nie są "danymi osobowymi" i szkoda nie występuje; "Local Mess" pokazuje czystszy przypadek celowego łączenia.
- Test dla **FTC** — czy reaguje na takie praktyki.

### Dla praktyki Big Tech

- Firmy mobilne i dostawcy przeglądarek przyspieszyli prace nad **"local network access" permission** dla Androida (propozycja Google) — nowym mechanizmem uprawnień, który wymagałby zgody użytkownika na komunikację z localhostem.
- Brave, DuckDuckGo, Chrome, Firefox wzmocniły blokady komunikacji z localhostem.
- **Apple iOS okazał się bezpieczniejszy** — badacze potwierdzili, że analogiczna technika jest teoretycznie możliwa, ale restrykcje App Store i zarządzanie tłem aplikacji na iOS skutecznie ją blokowały. To argument dla Apple w sporze z Komisją Europejską o DMA.

---

## Pozwy zbiorowe

| Sprawa | Sąd | Stan | Wartość | Poszkodowani |
|--------|-----|------|---------|--------------|
| Proposed class action vs. Meta, Alphabet, Google, Yandex | Federalny (USA) | Faza wstępna, oczekuje na motion to dismiss | Niepotwierdzona | Wszyscy użytkownicy Androida w USA z zainstalowaną aplikacją Meta lub Yandex, którzy odwiedzali strony z trackerami (potencjalnie setki mln) |

**Kluczowi pozwani:**
- Meta Platforms, Inc.
- Alphabet, Inc.
- Google LLC
- (Yandex, w praktyce trudny do wyegzekwowania roszczeń ze względu na jurysdykcję rosyjską i sankcje)

**Podstawy roszczeń:** ECPA, CIPA, California UCL, California CLRA, negligence (wobec Google).

---

## Wnioski dla obywateli

> **Sekcja portalowa — praktyczna, adresowana do czytelnika.**

### Co to dla mnie znaczy?

Jeśli masz telefon z Androidem i zainstalowaną aplikację Facebook, Instagram lub Yandex, a w okresie wrzesień 2024 – czerwiec 2025 (Meta) lub od 2017 (Yandex) odwiedzałeś strony z Meta Pixel albo Yandex Metrica — czyli miliony popularnych witryn — Twoja aktywność w przeglądarce została powiązana z Twoją tożsamością w aplikacji, **nawet jeśli używałeś trybu incognito lub VPN**. Dotyczy to również zakupów online, wrażliwych wyszukiwań (zdrowotnych, politycznych, religijnych), trasy przeglądania.

### Jak się chronić?

1. **Zainstaluj przeglądarkę szanującą prywatność** — Brave lub DuckDuckGo na Androidzie blokują komunikację z localhostem z poziomu skryptów stron.
2. **Odinstaluj aplikacje Meta i Yandex**, jeśli możesz. Korzystaj z Facebooka i Instagrama przez przeglądarkę — mobilna wersja web nie ma tych możliwości nasłuchu.
3. **Aktualizuj Chrome** — wersja 137 i wyższa (od maja 2025) blokuje część technik.
4. **Tryb incognito ≠ prywatność** — to tylko ustawienie lokalne telefonu/przeglądarki, które nie chroni przed aplikacjami.
5. **VPN ≠ prywatność** — VPN chroni przed siecią zewnętrzną, ale nie przed komunikacją lokalną między aplikacjami na tym samym urządzeniu.
6. **Rozważ Lockdown Mode** (na iOS) lub **GrapheneOS** (Android) — dla osób o podwyższonym profilu ryzyka (dziennikarze, aktywiści, mediatorzy prowadzący wrażliwe sprawy).

### Jakie mam prawa?

Jako obywatel UE masz na podstawie **RODO**:
- **Art. 15** — prawo dostępu: możesz zażądać od Meta i Yandex pełnej kopii przetwarzanych danych, w tym informacji o tym kanale śledzenia
- **Art. 17** — prawo do usunięcia ("prawo do bycia zapomnianym")
- **Art. 21** — prawo sprzeciwu wobec przetwarzania w celach marketingowych

### Gdzie się zgłosić?

- **Polska**: Prezes UODO — [uodo.gov.pl](https://uodo.gov.pl) — skargi można składać elektronicznie
- **NOYB**: noyb.eu — wspiera skargi zbiorowe
- **Irlandzki DPC** — główny regulator Meta w UE — [dataprotection.ie](https://www.dataprotection.ie)
- Możesz też przyłączyć się do pozwu zbiorowego w USA, jeśli jesteś rezydentem USA

---

## Ciekawostki

- **"Moment eureki" Acara** był zupełnie przypadkowy — gdyby nie improwizowane ćwiczenie dla studentów na uniwersytecie, praktyka Meta mogłaby trwać wiele kolejnych miesięcy lub lat. To symboliczna lekcja, że wysokobudżetowe zespoły bezpieczeństwa Big Tech nie są jedynym źródłem odkrywania nadużyć.
- **Reakcja Meta w niecałe 12 godzin** od publikacji to rekord szybkości usuwania kodu produkcyjnego — co paradoksalnie jest dowodem, że firma **wiedziała dokładnie, co robi kod**, i miała gotową procedurę wycofania.
- **Skrypt Meta Pixel** działa na ponad **5,8 mln stron** (BuiltWith); teoretycznie każda z tych stron była współodpowiedzialna jako "host" skryptu, choć większość właścicieli stron nie miała pojęcia o mechanizmie.
- **Brave browser był jedyną przeglądarką odporną z założenia** — wymaga zgody użytkownika dla każdego połączenia z localhostem. Co pokazuje, że "privacy-by-design" to nie slogan, tylko realny wybór projektowy.
- **Yandex** okazał się "pierwszym wynalazcą" techniki (od 2017), ale to **Meta** dostała większą uwagę medialną ze względu na skalę. Historycznie: Yandex jest rosyjski, a zachodnia prasa bezpieczeństwa śledzi go mniej systematycznie.
- **Ironia WebRTC**: protokół WebRTC został stworzony w celu **komunikacji w czasie rzeczywistym** (wideokonferencje, rozmowy). Meta wykorzystała go do fingerprintowania użytkowników — komentarz badacza **b0a04gl**: *"WebRTC miało służyć real-time comms, nie fingerprintowaniu ludzi na podstawie tego, jakie losowe aplikacje mają uruchomione na localhost."*
- **Dziennikarze i deweloperzy latami zgłaszali nietypowe zachowania Meta Pixel** na forach Facebook for Developers od września 2024. Meta **ignorowała zapytania**. Günes Acar publicznie podkreślił: *"Meta nie tylko nie poinformowała właścicieli stron o tej metodzie śledzenia, ale też ignorowała ich skargi i pytania."*
- **Pierwsza kara 1,2 mld € dla Meta (maj 2023) była warta mniej niż roczny budżet marketingowy Meta** — co pokazuje skalę biznesu, który te praktyki wspierały.

---

## Źródła

1. Dan Goodin, "Meta and Yandex are de-anonymizing Android users' web browsing identifiers", *Ars Technica*, 3 czerwca 2025. URL: https://arstechnica.com/security/2025/06/meta-and-yandex-are-de-anonymizing-android-users-web-browsing-identifiers/ (dostęp: 2026-04-17)

2. localmess.github.io — "Covert Web-to-App Tracking via Localhost on Android", zespół badawczy IMDEA/Radboud/KU Leuven, 3–5 czerwca 2025. URL: https://localmess.github.io/ (dostęp: 2026-04-17)

3. Thomas Claburn, "Meta Pixel halts Android localhost tracking after disclosure", *The Register*, 3 czerwca 2025. URL: https://www.theregister.com/2025/06/03/meta_pauses_android_tracking_tech/ (dostęp: 2026-04-17)

4. Richi Jennings, "Meta's Secret Spyware: 'Local Mess' Hack Tracks You Across the Web", *Security Boulevard*, 4 czerwca 2025. URL: https://securityboulevard.com/2025/06/meta-local-mess-richixbw/ (dostęp: 2026-04-17)

5. "Privacy abuse involving Meta and Yandex discovered", *TechXplore* (Radboud University press release), 3 czerwca 2025. URL: https://techxplore.com/news/2025-06-privacy-abuse-involving-meta-yandex.html (dostęp: 2026-04-17)

6. "Class Action Lawsuit Claims Meta, Yandex Track Android Users' Data Without Consent", *ClassAction.org*, 19 czerwca 2025. URL: https://www.classaction.org/news/class-action-lawsuit-claims-meta-yandex-track-android-users-data-without-consent (dostęp: 2026-04-17)

7. "Meta and Yandex Accused of Using Android Loophole for Surreptitious User Tracking", *CPO Magazine*, 17 czerwca 2025. URL: https://www.cpomagazine.com/data-privacy/meta-and-yandex-accused-of-using-android-loophole-for-surreptitious-user-tracking/ (dostęp: 2026-04-17)

8. "Meta's Stealth Tracking: Another EU Wake-Up Call", *Wire Blog*, 18 czerwca 2025. URL: https://wire.com/en/blog/metas-stealth-tracking-another-eu-wake-up-call (dostęp: 2026-04-17)

9. John Gruber, "Meta and Yandex's 'Local Mess' Exploit Seemingly Only Works on Android", *Daring Fireball*, 4 czerwca 2025. URL: https://daringfireball.net/linked/2025/06/04/meta-and-yandexs-local-mess-exploit-seemingly-only-works-on-android (dostęp: 2026-04-17)

10. "Meta halts covert Android tracking following research disclosure", *PPC Land*, 7 czerwca 2025. URL: https://ppc.land/meta-halts-covert-android-tracking-following-research-disclosure/ (dostęp: 2026-04-17)

11. Captain Compliance, "Meta and Yandex's Android Tracking Scandal: Unveiling the Privacy Breach", 7 czerwca 2025. URL: https://captaincompliance.com/education/meta-and-yandexs-android-tracking-scandal-unveiling-the-privacy-breach/ (dostęp: 2026-04-17)

12. Jorge García Herrero, komentarz dla *We speak IoT*, "Localhost Tracking: Meta and Yandex allegedly spied on Android users covertly", 13 czerwca 2025. URL: https://www.wespeakiot.com/localhost-tracking-meta-and-yandex/ (dostęp: 2026-04-17)

13. Benedict Collins, "Meta halts phone and browser tracking tools after researchers expose user snooping", *TechRadar*, 4 czerwca 2025. URL: https://www.techradar.com/pro/security/meta-halts-phone-and-browser-tracking-tools-after-researchers-expose-user-tracking (dostęp: 2026-04-17)

14. Business & Human Rights Resource Centre, "Meta & Yandex allegedly abuse Android protocols for user de-anonymization raising privacy concerns", czerwiec 2025. URL: https://www.business-humanrights.org/en/latest-news/meta-yandex-allegedly-abuse-android-protocols-for-user-de-anonymization-raising-privacy-concerns/ (dostęp: 2026-04-17)

15. Akshay Aryan, "Facebook's Hidden Android Tracking: A New Loophole Exposed", *Medium*, 25 lipca 2025. URL: https://medium.com/@infinityTime/facebooks-hidden-android-tracking-a-new-loophole-exposed-a4d548bd5656 (dostęp: 2026-04-17)

---

*Ostatnia aktualizacja: 2026-04-17*
*Karta w bazie: A01_local_mess.md*
*Status karty: WZORCOWA — zatwierdzona jako wzór struktury*
