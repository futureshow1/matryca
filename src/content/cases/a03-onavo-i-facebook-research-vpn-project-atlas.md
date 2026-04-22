---
id: A03
slug: a03-onavo-i-facebook-research-vpn-project-atlas
group: A
group_label: Meta
title: Onavo i Facebook Research VPN (Project Atlas)
year_revealed: 2019
last_updated: '2026-04-17'
companies:
- Meta
status: settled
jurisdictions:
- US
- AU
- global
legal_basis:
- Apple Developer Terms
- Apple Enterprise Program
- COPPA
- australijski Privacy Act
fines:
- amount: 20000000
  currency: EUR
  authority: Federal Court of Australia (ACCC)
  date: '2023'
  category: regulatory_fine
  status: paid
whistleblowers:
- schrems
journalists: []
related_cases:
- A02
- A06
- A04
- E01
- D06
tags:
- pracownicy
categories:
- privacy
geo_coords: []
priority: STANDARD
card_complete: true
word_count: 3458
explainer:
  src: /animations/a03-onavo-i-facebook-research-vpn-project-atlas.html
  duration: '60s'
  title: Onavo / Project Atlas — Facebook płacił za szpiegowanie
subtitle: płacenie nastolatkom za szpiegowanie
years_active:
- 2013
- 2019
---

# A03 — Onavo i Facebook Research VPN (Project Atlas): płacenie nastolatkom za szpiegowanie

> **Kategoria:** Szpiegowanie konkurencji / nadużycie Enterprise Certificate / nastolatki
> **Firma/firmy:** Meta (Facebook)
> **Lata:** 2013 (przejęcie Onavo) – 2019 (zakończenie); Research VPN: 2016–2019
> **Status:** Onavo zamknięte; Research VPN przerwane na iOS po bonie Apple; kara ACCC 20 mln AUD (2023)
> **ID karty:** A03

---

## Metadane

| Pole | Wartość |
|------|---------|
| Kraj/region | Globalnie; kluczowe reakcje regulatora: USA, Australia |
| Rok ujawnienia | 29–30 stycznia 2019 (TechCrunch, Josh Constine) |
| Lata trwania praktyki | 2013–2018 (Onavo), 2016–2019 (Research VPN / Project Atlas), wcześniej: Project Kodiak |
| Łączna kara | 20 mln AUD (~12,5 mln EUR, australijski ACCC, 2023); dodatkowo szkody reputacyjne |
| Waluta | AUD; niemal wyłącznie reputacja + strategiczne |
| Podstawa prawna | Apple Developer Terms, Apple Enterprise Program, COPPA (dzieci USA), australijski Privacy Act |
| Sygnalista/odkrywca | Josh Constine (*TechCrunch*), Will Strafach (analiza bezpieczeństwa) |
| Liczba poszkodowanych | Onavo: dziesiątki mln (ok. 33 mln na piku); Research VPN: ok. 1 mln, w tym 5% nastolatków |
| Status (na dziś) | Zakończone, wszystkie aplikacje wyłączone |

---

## TL;DR

**Onavo** była izraelską aplikacją VPN kupioną przez Facebook w październiku 2013 za ok. 120–200 mln USD. Reklamowała się jako "chroniąca prywatność" i "oszczędzająca dane komórkowe", ale w praktyce była **sondą Meta do śledzenia zachowań użytkowników** na telefonach — widziała całe ich zachowanie sieciowe, które aplikacje otwierali, jak długo, kiedy. Kluczowa wartość strategiczna: **Facebook poznał, że WhatsApp wysyła ponad 2× więcej wiadomości niż Messenger**, co uzasadniło wydanie 19 mld USD na przejęcie WhatsAppa w 2014. Po ostrzeżeniu Apple, Onavo zostało usunięte z App Store (sierpień 2018), a następnie zamknięte (luty 2019).

Ale Facebook **nie chciał zrezygnować z danych**. Równolegle, **od 2016** prowadził tajny program **Facebook Research** (w dokumentach: **Project Atlas**, wcześniej **Project Kodiak**), płacąc użytkownikom **13–35 lat (5% nastolatki)** po **20 USD miesięcznie** w kartach podarunkowych za zainstalowanie VPN-a z **root access do ruchu sieciowego**, deszyfracją HTTPS i żądaniem **zrzutów historii zamówień na Amazonie**. Program dystrybuowany przez firmy-pośredników (BetaBound, uTest, Applause) **bez ujawniania Facebooka** aż do momentu po podpisaniu NDA.

Sprawę ujawnił **Josh Constine z TechCrunch 29 stycznia 2019**, z analizą techniczną **Willa Strafacha** (eksperta bezpieczeństwa iOS). Kluczowe naruszenie: Facebook **obchodził App Store**, używając **Apple Enterprise Certificate Program** — przeznaczonego **wyłącznie do dystrybucji aplikacji wewnętrznych dla pracowników firmy**. Apple zareagował w niecałe 24 godziny, **unieważniając certyfikat enterprise Facebooka**, co unieważniło **wszystkie wewnętrzne aplikacje FB na iOS** — pracownicy Facebooka nie mogli korzystać z wersji beta własnych aplikacji, menu lunchowego, ani nawet rozkładów firmowych autobusów. Menlo Park "wpadło w chaos" na dwa dni. 7 godzin po publikacji Constine'go Facebook ogłosił zamknięcie iOS Research. Analogiczny program Google (**Screenwise Meter**) został zlikwidowany 30 stycznia 2019, również z unieważnieniem certyfikatu.

---

## Oś czasu

- **Październik 2013** — Facebook kupuje **Onavo** (izraelska firma założona przez Guya Rosena i Romana Khavronenko w 2010) za ok. 120–200 mln USD. Onavo staje się podstawą działu mobile analytics Meta.
- **2013–2018** — Onavo Protect działa jako **"darmowy VPN"**, w rzeczywistości służąc Meta jako sonda rynkowa.
- **Luty 2014** — Facebook kupuje **WhatsApp za 19 mld USD**. Dane z Onavo kluczowe w decyzji o wydaniu tak olbrzymiej kwoty.
- **2016** — Facebook uruchamia drugi, **bardziej agresywny** program — **Facebook Research VPN**, wewnętrznie znany jako **Project Kodiak**, potem **Project Atlas**.
- **Od 2016** — rekrutacja przez reklamy na **Instagram i Snapchat** skierowane do osób **13–35 lat**, z płatnością $20/mies + premie za polecenie. Wypłaty w kartach podarunkowych.
- **Czerwiec 2018** — Apple na WWDC ogłasza **nowe zasady dot. VPN-ów w App Store**: zakaz zbierania danych o aktywności na innych aplikacjach. To celuje bezpośrednio w Onavo.
- **27 czerwca 2018** — Facebook **odnawia swój Enterprise Developer Certificate** — kluczowa decyzja, pozwalająca kontynuować dystrybucję Research VPN poza App Store.
- **Sierpień 2018** — Apple usuwa Onavo Protect z iOS App Store. Facebook pozostawia Onavo na Android.
- **Wcześniej (2018)** — dziennikarze BuzzFeed (**Ryan Mac, Charlie Warzel**) ujawniają wewnętrzne dokumenty Meta pokazujące, że Onavo umożliwiło poznanie, iż WhatsApp wysyła 2× więcej wiadomości niż Messenger.
- **29 stycznia 2019, poranek USA** — **Josh Constine publikuje w TechCrunch**: "Facebook pays teens to install VPN that spies on them". Publikacja oparta na analizach **Willa Strafacha** (Guardian Mobile Firewall).
- **29 stycznia 2019, 7 godzin później** — Facebook **ogłasza zakończenie iOS Research app**.
- **30 stycznia 2019** — Apple **unieważnia Enterprise Certificate Facebooka**. Wszystkie wewnętrzne aplikacje Facebooka na iOS przestają działać. Ogłoszenie Apple: *"Zaprojektowaliśmy Enterprise Developer Program wyłącznie do wewnętrznej dystrybucji aplikacji w organizacji. Facebook używał członkostwa do dystrybucji aplikacji zbierającej dane do konsumentów, co jest oczywistym naruszeniem umowy z Apple."*
- **30 stycznia 2019** — TechCrunch ujawnia, że **Google również narusza Enterprise Certificate Program** swoją aplikacją **Screenwise Meter**. Google natychmiast przeprasza i usuwa aplikację.
- **31 stycznia 2019** — Apple unieważnia **również Enterprise Certificate Google** — spójność polityki. Google Play Services na iOS przestają działać.
- **1 lutego 2019** — po niecałych 2 dniach Apple przywraca certyfikaty Facebook i Google.
- **21 lutego 2019** — Facebook ogłasza **zamknięcie Onavo** zarówno na iOS (już zamknięte), jak i na Androidzie; natychmiastowe zaprzestanie zbierania danych.
- **Marzec 2019** — Senator **Mark Warner** wzywa Meta do wsparcia ustawodawstwa wymagającego świadomej zgody dla programów badań rynku. Senator **Richard Blumenthal**: *"Podsłuch nastolatków to nie badanie — to nie może być dozwolone."*
- **2020** — australijski ACCC (Australian Competition & Consumer Commission) rozpoczyna postępowanie przeciwko Meta za Onavo.
- **Czerwiec 2023** — **Federal Court of Australia** nakłada karę **20 mln AUD** (ok. 13 mln USD/12,5 mln EUR) na Meta za **wprowadzający w błąd marketing Onavo**.

---

## Mechanizm

### Onavo — jak działało

Onavo Protect reklamowało się jako **"bezpieczny VPN, który chroni Twoją prywatność i oszczędza dane komórkowe"**. W praktyce:

1. Kierował cały ruch użytkownika przez **serwery Onavo (Facebook)**
2. Facebook widział **metadane wszystkich aplikacji** — które, kiedy, jak długo, ile bajtów
3. Dla niektórych aplikacji — mógł widzieć **ich ruch sieciowy w niezaszyfrowanej formie**, jeśli aplikacja używała HTTP
4. Tworzył **agregatne analityki** trendów na rynku mobilnym

Onavo był **sonda rynkowa Meta** — zastępowała zewnętrzne firmy badawcze (App Annie, Sensor Tower) wewnętrznym narzędziem, które widziało wszystko, co robią ludzie na swoich telefonach.

**Drobny druk** (Onavo Privacy Policy) informował, że aplikacja zbiera: *"Czas spędzony przy użyciu aplikacji, mobilne i Wi-Fi dane wykorzystane przez aplikację, strony, które odwiedzasz, oraz Twój kraj, urządzenie i typ sieci."* — ale to ukrywało, że dane trafiają do Meta jako centrum konkurencyjnej analityki, a nie "do ochrony Twoich danych".

### Strategiczna wartość Onavo dla Meta

Kluczowy przykład — **WhatsApp**. Wewnętrzne dokumenty BuzzFeed ujawniły, że Facebook przez Onavo stwierdził, że WhatsApp wysyła **ponad dwa razy więcej wiadomości dziennie niż Facebook Messenger**. Ta informacja była kluczowa w decyzji o zapłaceniu **19 miliardów dolarów** za przejęcie WhatsAppa w lutym 2014. Bez Onavo Facebook nie miałby tej przewagi informacyjnej — byłaby to **niedoszacowana transakcja**, gdzie Facebook przepłacił lub nie kupił. Z Onavo — kupił i wygrał strategiczną walkę.

### Facebook Research / Project Atlas — jak działało

Po zakazie Onavo (czerwiec 2018 → sierpień 2018), Facebook potrzebował **alternatywy**. Kluczowe różnice technicze:

1. **Dystrybucja poza App Store**: Facebook wykorzystał **Apple Enterprise Certificate Program** — wystawiając aplikację jakby była wewnętrzna korporacyjna (dla pracowników), ale dystrybuując ją na consumers.

2. **Maskowanie przez pośredników**: aplikacja rekrutowała przez strony **BetaBound**, **uTest**, **Applause** — użytkownicy nie wiedzieli, że mają do czynienia z Facebookiem, aż do **po podpisaniu NDA**.

3. **Root certificate**: użytkownicy musieli **zainstalować certyfikat root Facebook** w swoim systemie iOS — co pozwalało Facebookowi na **man-in-the-middle wszelkiego ruchu HTTPS**, w tym deszyfrację.

4. **Skan ekranu Amazon**: Applause aktywnie prosił użytkowników o **zrzuty ekranu historii zamówień Amazon** — tj. wyraźne naruszenie prywatności trzeciej strony.

5. **Nieograniczony monitoring**: aplikacja mogła czytać prywatne wiadomości, e-maile, rozmowy, zdjęcia, historię przeglądania, aktywność zakupową.

**Cytat Willa Strafacha** (eksperta bezpieczeństwa iOS): *"Fairly technical sounding »install our Root Certificate« step is appalling. To daje Facebookowi ciągły dostęp do najbardziej wrażliwych danych o Tobie, i większość użytkowników nie jest w stanie rozsądnie wyrazić zgody na to, bez względu na to, jakie warunki podpisuje, ponieważ nie ma dobrego sposobu na wyartykułowanie, ile władzy przekazuje się Facebookowi, gdy to zrobisz."*

### Docelowa grupa — nastolatki

**Kluczowy szczegół**: Facebook rekrutował użytkowników **w wieku 13–35 lat**, z czego **5% nastolatków (13–17)**. Reklamy pojawiały się na **Instagramie i Snapchacie** — tam, gdzie żyją młodzi ludzie. Wypłata $20 miesięcznie (+ premie za polecenie) — **dla nastolatka istotna kwota**, szczególnie w niższym przedziale dochodowym.

Rodzice musieli "zgodzić się" jedynie **formalnie** (online, przez ich dziecko wypełniające formularz). Brak rzeczywistej weryfikacji.

### Dlaczego to było nielegalne/szkodliwe

- **Naruszenie Apple Developer Agreement** — Enterprise Certificate miał być tylko dla pracowników
- **COPPA (USA)** — Children's Online Privacy Protection Act wymaga rodzicielskiej zgody na zbieranie danych od dzieci poniżej 13 lat; nastolatki 13–17 są formalnie poza COPPA, ale programy targetujące młodsze grupy bez kontroli rodzicielskiej balansują na granicy
- **Wprowadzanie konsumentów w błąd (Onavo)** — reklamowanie "prywatności" i "oszczędności", ukrywanie celu rzeczywistego = sondy rynkowej
- **Deszyfracja HTTPS bez świadomej zgody** — praktyki man-in-the-middle na własnych użytkownikach
- **Australijski Privacy Act 1988** — podstawa kary ACCC 20 mln AUD w 2023

---

## Odkrycie

### Kto odkrył i kiedy

**Josh Constine** (wówczas Editor-At-Large w *TechCrunch*) — od 2016 obserwował wzmianki o Onavo i Research VPN. W styczniu 2019 dostał **tip** (informację od insidera) o tym, że pomimo zablokowania Onavo, Facebook dalej prowadzi analogiczny program. Skontaktował się z **Willem Strafachem**, znanym ekspertem bezpieczeństwa iOS, współzałożycielem firmy **Sudo Security Group** i twórcą aplikacji **Guardian Mobile Firewall**.

Strafach przeprowadził **deep analysis kodu** Research VPN app na iOS. Stwierdził:
- instalację certyfikatu Enterprise
- VPN routujący cały ruch do Facebooka
- żądanie root access
- **liczne odniesienia do kodu Onavo Protect** — czyli Facebook **przeniósł kod z zamkniętej Onavo** do Research VPN, co oznaczało **świadome przejście na inną formę tej samej praktyki**.

### Jak doszło do ujawnienia

**29 stycznia 2019, rano USA** — Constine publikuje pierwszy artykuł: "Facebook pays teens to install VPN that spies on them". Kluczowe tezy:
- program działa od 2016
- nazwa kodowa Project Atlas
- rekrutacja 13–35 lat z Instagramy/Snapchat
- $20/mies + premie
- root access, deszyfracja HTTPS
- naruszenie polityk Apple

**Reakcja Facebooka** (cytowana przez TechCrunch): *"Tak jak wiele firm, zapraszamy ludzi do udziału w badaniach, które pomagają nam identyfikować rzeczy, które możemy robić lepiej. Od momentu uruchomienia tego programu dla dorosłych uczestników 4 lata temu, byliśmy jasni, o jakie dane prosimy, i że uczestnicy otrzymują wynagrodzenie."*

**Kontr-odpowiedź Constine'go** (7 godzin później): *"Facebook nie promował publicznie VPN Research; używał pośredników, którzy często nie ujawniali zaangażowania Facebooka do momentu rozpoczęcia procesu rejestracji. Choć użytkownicy dostawali instrukcje i ostrzeżenia, program nigdy nie podkreśla ani nie wspomina pełnego zakresu danych, które Facebook może zebrać przez VPN."*

### Pierwsze publikacje

- **29 stycznia 2019** — Josh Constine, *TechCrunch*, "Facebook pays teens to install VPN that spies on them"
- **30 stycznia 2019** — TechCrunch, "Apple bans Facebook's Research app"
- **30 stycznia 2019** — TechCrunch, "Mess with the Cook" (Tim Cook Facebook disputes)
- **30 stycznia 2019** — TechCrunch, ujawnienie Google Screenwise Meter
- **Daring Fireball** (John Gruber) — komentarz: *"Running this through their enterprise developer certificate is a flagrant violation of Apple's policies."*

---

## Osoby kluczowe

### Dziennikarze śledczy

- **Josh Constine** — *TechCrunch*, obecnie Venture Partner w SignalFire. Główny autor śledztwa. Wykładowca Stanford GSB. W 2016–2020 **najczęściej cytowany tech-journalist na świecie** (wg Techmeme).
- **Ryan Mac, Charlie Warzel** — *BuzzFeed News*, ujawnili wewnętrzne dokumenty pokazujące wartość Onavo dla Meta (WhatsApp).

### Badacze bezpieczeństwa

- **Will Strafach** — założyciel Sudo Security Group, twórca Guardian Mobile Firewall. Ekspert od bezpieczeństwa iOS. Kluczowa analiza kodu Research VPN.
- **John Gruber** — *Daring Fireball*, krytyczny komentator Apple.

### Firmy-pośrednicy

- **BetaBound** (część Centercode) — platforma do beta testingu
- **uTest** (Applause) — platforma testerska
- **Applause** — to oni prosili o zrzut Amazon orders

### Sprawcy / beneficjenci

- **Guy Rosen** — współzałożyciel Onavo, po przejęciu VP of Product Management w Meta. Obecnie CIO Meta.
- **Mark Zuckerberg** — finalnie odpowiedzialny; Research VPN działał pod jego osobą.
- **Will Cathcart** — szef WhatsAppa (od 2019); Research VPN działało pod nim.

### Regulatorzy

- **Apple** (Tim Cook) — natychmiastowa reakcja z karą certyfikatu
- **Senator Mark Warner (D-VA)**, **Senator Richard Blumenthal (D-CT)** — krytyka publiczna
- **ACCC** (Australia) — jedyny regulator, który wyegzekwował sankcje finansowe

---

## Reakcja firmy

### Meta — pierwsza reakcja (obronna)

Oświadczenie cytowane wyżej: próba zmiany tematu na "wolontariuszy" i "transparentność" — zignorowanie kluczowego problemu, że:
- pośrednicy **nie ujawniali Facebooka** do po NDA
- uczestnicy dostawali NDA **zakazujący publiczne dyskutowanie programu** — "*There was nothing 'secret' about this*" vs. grożenie pozwami za upublicznienie.

### Meta — zamknięcie Research VPN

29 stycznia 2019, 7 godzin po publikacji Constine'go — Facebook ogłasza **zamknięcie iOS wersji Research app**. Android wersja działała **jeszcze kilka tygodni**.

### Meta — zamknięcie Onavo

21 lutego 2019, po naciskach publicznych i regulacyjnych — Facebook ogłasza **definitywne zamknięcie Onavo** na wszystkich platformach. Ogłoszenie wyraziło "przejście na reward-based market research" (tj. płatne badania typu User Interviews).

### Apple — twarda reakcja

Oświadczenie rzecznika Apple: *"Zaprojektowaliśmy Enterprise Developer Program wyłącznie do wewnętrznej dystrybucji aplikacji w organizacji. Facebook używał członkostwa do dystrybucji aplikacji zbierającej dane do konsumentów, co jest oczywistym naruszeniem umowy z Apple. Każdy deweloper używający swoich certyfikatów enterprise do dystrybucji aplikacji konsumentom będzie miał swoje certyfikaty unieważnione — co zrobiliśmy w tej sprawie, żeby chronić naszych użytkowników i ich dane."*

---

## Postępowanie prawne

### USA

- **COPPA** — FTC miała potencjalną podstawę, ale nie prowadziła **osobnego** postępowania; sprawa została absorbowana przez ogólny Consent Order 2019 (Cambridge Analytica).

### Australia — ACCC

- **2020** — ACCC składa pozew przeciwko Meta i Onavo w Federal Court of Australia
- **Czerwiec 2023** — orzeczenie: Meta naruszyła australijskie prawo konsumenckie, wprowadzając w błąd co do charakteru Onavo Protect
- **Kara:** **20 mln AUD** (ok. 13 mln USD / 12,5 mln EUR)

Cytat z wyroku: Meta **"fałszywie lub wprowadzająco reprezentowała"**, że Onavo Protect chroni prywatność użytkowników, podczas gdy faktycznie zbierała szeroki zakres danych na rzecz Facebooka.

### UK / UE

- **ICO, DPC, niemieckie DPA** — brak bezpośrednich postępowań, ale sprawa wpłynęła na ogólną percepcję Meta w Europie.

---

## Kary i ugody

| Data | Organ | Kwota | Jurysdykcja | Podstawa |
|------|-------|-------|-------------|----------|
| 30.01.2019 | Apple (bez kary finansowej) | Unieważnienie Enterprise Certificate | USA | Apple Developer Agreement |
| 21.02.2019 | — (zamknięcie z własnej inicjatywy) | — | Globalnie | Presja publiczna |
| 06.2023 | Federal Court of Australia (ACCC) | 20 mln AUD | Australia | Australian Consumer Law, Privacy Act |

---

## Precedensy i implikacje

### Dla prawa UE

- Stworzyło precedens dla **transparentności VPN-ów** — w UE pojawiły się dyskusje o obowiązkowych etykietach dla aplikacji "VPN" pokazujących, kto jest beneficjentem danych.
- Wykorzystywane przez NOYB jako przykład **"systematycznego omijania regulacji przez Meta"**.

### Dla prawa USA

- Senator Warner i Blumenthal zainicjowali projekty ustaw **wymagających świadomej zgody dla "badań rynkowych"** — żadne z nich nie zostało uchwalone jako federalne prawo.
- **COPPA 2.0 (propozycja)** — rozszerzenie ochrony na nastolatki 13–16, częściowo motywowane Research VPN.

### Dla praktyki Apple

- **Wzmocnienie egzekwowania** Enterprise Certificate Program
- Nowe rewizje i audyty certyfikatów
- **App Tracking Transparency (ATT, 2021)** — rewolucja w prywatności iOS, częściowo motywowana przypadkami Onavo/Research VPN.

### Dla praktyki Big Tech

- Sprawa **zmieniła podejście do darmowych VPN-ów** — rozpoczęła się szersza świadomość, że "darmowy" znaczy "płacisz danymi"
- Analogiczne praktyki u Google (Screenwise) zostały **zlikwidowane tego samego dnia** — domino effect regulacji Apple

---

## Pozwy zbiorowe

Brak znaczących pozwów zbiorowych konsumenckich w USA związanych bezpośrednio z Onavo/Research VPN (włączone do ogólnego Consent Order FTC 2019).

---

## Wnioski dla obywateli

### Co to dla mnie znaczy?

Jeśli **w latach 2013–2019 używałeś aplikacji Onavo Protect** (reklamowanej jako darmowy VPN), Meta widziała **wszystkie metadane aktywności aplikacji na Twoim telefonie** — które aplikacje otwierałeś, kiedy, ile razy, jak długo. Dane były agregowane i używane **konkurencyjnie** — pomagając Meta decydować, które firmy kupić lub skopiować.

Jeśli w latach 2016–2019 (szczególnie jako nastolatek) dałeś się skusić **programem płatnym za instalację VPN-a "dla badań"** — Meta miała **root access do wszystkiego** na Twoim telefonie: wiadomości prywatnych, e-maili, zdjęć, historii zakupów, lokalizacji.

### Jak się chronić?

1. **Nigdy nie instaluj "darmowych" VPN-ów**, których nie zweryfikowałeś pod kątem biznesu — jeśli nie płacisz, jesteś produktem
2. **Płatne VPN-y od zaufanych firm (Proton VPN, Mullvad, IVPN)** — jasno deklarujące, że nie logują ruchu
3. **Nigdy nie instaluj "certyfikatu root"** — jeśli aplikacja prosi, odrzuć i odinstaluj
4. **Jeśli ktoś oferuje Ci pieniądze za instalację aplikacji śledzącej** — to **alarm**, nie promocja
5. **Naucz nastolatków** w rodzinie rozpoznawać takie praktyki — są głównym celem marketingu

### Jakie mam prawa?

- **RODO art. 15, 17, 21** — dostęp, usunięcie, sprzeciw
- **RODO art. 82** — odszkodowanie za szkody niemajątkowe (szacowanie trudne, precedens małych kwot w UE ~100–500 EUR)
- **COPPA (USA)** dla dzieci < 13 lat

### Gdzie się zgłosić?

- **UODO** (Polska)
- **Irlandzki DPC** (Meta główna siedziba EU)
- **FTC** (USA)

### Dla mediatorów i prawników

- Sprawa Onavo jest kanonicznym przykładem **"fałszywej zgody"** — consent został wyrażony, ale pod wpływem **ukrytych faktów**. W polskim prawie cywilnym analogiczne instytucje: **art. 84 k.c. (błąd co do treści czynności prawnej)**, **art. 86 k.c. (podstęp)**, **art. 87 k.c. (groźba bezprawna)**.
- Dla sporów dot. spraw konsumenckich: **dyrektywa 2005/29/WE o nieuczciwych praktykach handlowych** i polska ustawa o przeciwdziałaniu nieuczciwym praktykom rynkowym 2007 — mogą być podstawą do roszczeń.

---

## Ciekawostki

- **19 mld USD za WhatsApp**. Dane z Onavo bezpośrednio uzasadniały tę kwotę. To **najdroższe narzędzie badawcze w historii kapitalizmu** — koszt przejęcia Onavo (~120–200 mln) zwrócił się tysiąckrotnie w strategicznej decyzji o WhatsApp.
- **Onavo było izraelskie** — typowy przykład tech-nabycia przez Meta/Google w Tel Awiwie. **Guy Rosen**, współzałożyciel, dziś jest **CIO Meta** (jednym z kluczowych liderów odpowiedzialnych za bezpieczeństwo).
- **Menlo Park w chaosie**. Kiedy Apple unieważniło Enterprise Certificate Facebooka 30 stycznia 2019, pracownicy Facebooka nie mogli używać **wewnętrznych aplikacji do organizacji pracy**: beta wersji Facebook/Instagram, menu lunchowego, rozkładów autobusów firmowych. Przez **2 dni robocze** setki tysięcy produktowych i deweloperskich procesów zostało wstrzymanych.
- **Google dostało tę samą karę**. Gdy TechCrunch ujawnił, że Google też nadużywa Enterprise Certificate (Screenwise Meter), Apple — w interesie **spójnej polityki** — unieważnił również certyfikat Google. Ironicznie: Google zatrudnia głównie inżynierów pracujących na Androidzie, więc szkoda biznesowa była **mniejsza niż w Facebooku**, gdzie korporacja używa głównie iOS wewnętrznie.
- **Zrzut Amazon orders**. Applause (pośrednik) prosił użytkowników o **zrzuty ekranu historii zamówień Amazon**. To **najbardziej absurdalny element** całego programu — ludzka weryfikacja zakupów jako "research". Pokazywało desperację Meta w walce z Amazon.
- **Project Kodiak** — wcześniejsza nazwa kodowa Research VPN; potem Project Atlas, co pasowało do metafory "mapowania rynku".
- **13-letnie dzieci instalowały VPN-a z root certyfikatem**. To techniczna skomplikowana operacja (trzeba **ręcznie zainstalować Trust profile**), jednak 5% uczestników Research VPN było nastolatkami. Pokazuje, że monetarne zachęty ($20 = ok. 2 kolacje w McDonald's) skutecznie przełamują opór nawet wobec technicznie niezrozumiałych operacji.
- **Josh Constine** (autor śledztwa) kilka lat później został **Venture Partnerem w SignalFire** — funduszu VC. Obrazuje, jak w USA dziennikarstwo tech-badawcze łączy się z ekosystemem VC: czasem dziennikarze zmieniają sektor po dużym śledztwie.
- **Alex Stamos, były CSO Facebooka**, w 2018 **odszedł z firmy** dokładnie w kontekście konfliktów dotyczących etyki danych — po Cambridge Analytica i Onavo. Dziś jest **adjunct professorem Stanford** i byłym wewnętrznym krytykiem Meta.
- **7 godzin**. Tyle minęło od publikacji Constine'go do ogłoszenia Meta o zamknięciu iOS Research. Podobnie jak w **Local Mess (A01)** — pokazuje, że **firma zna swój kod** i ma gotowy plan wycofania, jeśli coś zostanie odkryte publicznie.

---

## Źródła

1. Josh Constine, "Facebook pays teens to install VPN that spies on them", *TechCrunch*, 29 stycznia 2019. URL: https://techcrunch.com/2019/01/29/facebook-project-atlas/ (dostęp: 2026-04-17)
2. Josh Constine, "Apple bans Facebook's Research app that paid users for data", *TechCrunch*, 30 stycznia 2019. URL: https://techcrunch.com/2019/01/30/apple-bans-facebook-vpn/ (dostęp: 2026-04-17)
3. Josh Constine, "Mess with the Cook: Apple reactivates Facebook's employee apps after punishment for Research spying", *TechCrunch*, 31 stycznia 2019. URL: https://techcrunch.com/2019/01/31/mess-with-the-cook/ (dostęp: 2026-04-17)
4. Josh Constine, "Facebook will shut down its spyware VPN app Onavo", *TechCrunch*, 21 lutego 2019. URL: https://techcrunch.com/2019/02/21/facebook-removes-onavo/ (dostęp: 2026-04-17)
5. Ryan Mac, Charlie Warzel, "Mark Zuckerberg's Onavo Gives Facebook An Insight Into What People Do On Their Phones", *BuzzFeed News*, 2018. URL: https://www.buzzfeednews.com/article/ryanmac/facebook-onavo-insights (dostęp: 2026-04-17)
6. John Gruber, "TechCrunch: Facebook Pays Teenagers to Install VPN That Spies on Them", *Daring Fireball*, 29 stycznia 2019. URL: https://daringfireball.net/linked/2019/01/29/facebook-teens-vpn (dostęp: 2026-04-17)
7. Engadget, "Facebook secretly pays users for complete access to their data", 29 stycznia 2019. URL: https://www.engadget.com/2019-01-29-facebook-project-atlas.html (dostęp: 2026-04-17)
8. Cory Doctorow, "Project Atlas: Facebook has been secretly paying iPhone users", *Boing Boing*, 30 stycznia 2019. URL: https://boingboing.net/2019/01/29/atlas-snuck.html (dostęp: 2026-04-17)
9. ACCC, "Meta's Onavo Protect misled consumers", komunikat prasowy, 2023. URL: https://www.accc.gov.au/media-release/court-orders-meta-companies-to-pay-20-million-in-penalties-for-conduct-liable-to-mislead-consumers-about-use-of-their-data (dostęp: 2026-04-17)
10. Will Strafach, komentarze dla TechCrunch i własny blog, styczeń 2019.

---

*Ostatnia aktualizacja: 2026-04-17*
*Karta w bazie: A03_onavo.md*
