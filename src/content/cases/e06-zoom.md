---
id: E06
slug: e06-zoom
group: E
group_label: TikTok, X, Clearview, Zoom
title: Zoom
year_revealed: 2020
last_updated: '2026-04-18'
companies:
- Zoom Video Communications
status: active_investigation
jurisdictions:
- US
- global
legal_basis:
- FTC Act § 5
- NY Executive Law § 63
- stanowe prawa konsumenckie
fines:
- amount: 85000000
  currency: USD
  authority: Class action (shareholder)
  date: '2021'
  category: class_action_settlement
  status: paid
whistleblowers:
- snowden
journalists:
- Micah Lee
- Yael Grauer
related_cases:
- E05
- B02
- D04
- B05
- B04
tags:
- dark-patterns
- geopolityka
categories:
- privacy
geo_coords: []
priority: STANDARD
card_complete: true
word_count: 3937
subtitle: Fałszywe "end-to-end encryption" i serwery w Chinach
years_active:
- 2016
- 2020
---

# E06 — Zoom: Fałszywe "end-to-end encryption" i serwery w Chinach

> **Kategoria:** Wprowadzanie w błąd / false security claims / Chiny / zoom-bombing / pandemia
> **Firma/firmy:** Zoom Video Communications, Inc.
> **Lata:** 2016–2020 (fałszywe claims), marzec–kwiecień 2020 (pandemia), listopad 2020 (FTC settlement)
> **Status:** Zakończone settlement FTC; brak bezpośrednich odszkodowań; prawdziwe E2E dodane w 2020
> **ID karty:** E06

---

## Metadane

| Pole | Wartość |
|------|---------|
| Kraj/region | USA, globalny zasięg |
| Rok ujawnienia | Marzec–kwiecień 2020 (pandemia COVID-19 ujawniła problemy) |
| Lata trwania praktyki | 2016–2020 (false E2E claims); pandemia marzec–listopad 2020 (zoom-bombing, Chiny) |
| Łączna kara | **Brak bezpośrednich wypłat użytkownikom** (FTC settlement 9.11.2020); dodatkowo stan NY settlement maj 2020 |
| Waluta | — |
| Podstawa prawna | FTC Act § 5 (deceptive practices); NY Executive Law § 63(12); stanowe prawa konsumenckie |
| Sygnalista/odkrywca | **Micah Lee, Yael Grauer** (*The Intercept*, marzec 2020); **Citizen Lab** (Ron Deibert, Toronto) |
| Liczba poszkodowanych | **300 mln dziennych użytkowników** w szczytowym momencie (kwiecień 2020) |
| Status (na dziś) | Prawdziwe E2E dostępne od października 2020 (opt-in); FTC 20-letni monitoring trwa do 2040 |

---

## TL;DR

**Zoom Video Communications** — założona 2011 przez **Erica Yuan** (były inżynier Cisco WebEx). Do **grudnia 2019** Zoom miał **10 mln dziennych użytkowników**. Po **wybuchu pandemii COVID-19** (marzec 2020) skala eksplodowała do **300 mln dziennych użytkowników** (kwiecień 2020). Wszystkie szkoły, uczelnie, firmy, rządy, terapeuci, prawnicy przenieśli się na Zoom z dnia na dzień.

W tym samym momencie seria **wybuchowych ujawnień** pokazała, że Zoom **systematycznie kłamał** o bezpieczeństwie:

**Kłamstwo 1: "End-to-End Encryption".** Od co najmniej **2016 roku** Zoom reklamował na stronie, w aplikacji, w guides bezpieczeństwa i komunikacji marketingowej **"end-to-end, AES 256-bit encryption"** dla wszystkich meetingów. **Prawda**: był to **transport encryption** — dane szyfrowane między użytkownikiem a serwerem Zoom, ale **Zoom zachowywał klucze kryptograficzne** i mógł **sam odczytać** zawartość spotkań. **Nie było to E2E** w żadnym sensie technicznym.

**Kłamstwo 2: "256-bit encryption".** Citizen Lab (Toronto) w kwietniu 2020 odkrył, że Zoom **w rzeczywistości** używał **AES-128** w trybie **ECB** — **znany słaby tryb**, który zostawia wzorce w zaszyfrowanych danych. **256-bit claim fałszywy**.

**Kłamstwo 3: "Bezpieczne chmurowe storage nagrań".** Zoom reklamował, że nagrania meetingów płatnych klientów są natychmiast zapisywane w secure cloud. **Prawda**: nagrania były przechowywane **unencrypted na serwerach Zoom przez 60 dni** przed transferem do secure storage.

**Kłamstwo 4: "ZoomOpener na Mac" jako security feature.** Zoom instalował na Macach **ukryty web server** — **ZoomOpener** — który **obchodził** Safari's security. Apple musiał później wypuścić **silent update** usuwający ZoomOpener z Maców.

**Kłamstwo 5 (nie kłamstwo, ale ukrycie): Serwery w Chinach.** Zoom miał serwery w **Pekinie** dla rutingu meetingów. *Citizen Lab* odkrył, że nawet **meetingi między amerykańskimi użytkownikami** były routowane przez chińskie serwery w niektórych przypadkach. **Rząd chiński** mógł potencjalnie wymagać od Zoom dostępu do kluczy szyfrowania.

**Kwiecień 2020: szokująca rewelacja Time Magazine** — **chińscy operatywnicy** używali Zoom do **szpiegowania** obcych obywateli i blokowania **dyskusji** politycznych (włącznie z konferencjami o Tiananmen, rocznicą 4 czerwca, zakłóconymi przez "Chinese operatives"). Zoom **zamknął konta aktywistów** w USA na prośbę Chin.

**Zoom-bombing**: hakerzy wchodzili na publiczne Zoom meetings, włamywali się do meetingów szkolnych, wyświetlali treści porno, krzyczeli obelgi rasistowskie. Problem globalny, **szczególnie** dotknął **szkoły podstawowe** i **sesje anonimowe alkoholików**.

**Maj 2020**: **Letitia James, NY AG**, wymusiła settlement — Zoom zobowiązał się do enhanced encryption i lepszej moderacji.

**9 listopada 2020**: **FTC settlement**. Zoom zobowiązał się do:
- **Comprehensive information security program**
- **20-letni monitoring** przez niezależnych audytorów
- **Zakaz misrepresentations** ws. prywatności i bezpieczeństwa
- **Zakaz circumventing browser security**

**BRAK wypłat dla użytkowników** — krytyka demokratycznych komisarek **Rohit Chopra** i **Rebecca Kelly Slaughter**: *"No redress for users. Zoom is not required to offer refunds, or even notice to its customers that material claims were false."*

**Akt nawrotu (2020–2021):** Zoom **kupił Keybase** (maj 2020) — startup specjalizujący się w kryptografii. **26 października 2020** Zoom wypuścił **prawdziwe E2E** jako **technical preview** (opt-in). 

Sprawa E06 to **wzorzec "pandemia jako crisis stress-test"** — Zoom przetrwał, reformował, ale **zbudował reputację** na **kłamstwach**, które wyszłyby na jaw być może nigdy bez 300-milionowego przyrostu użytkowników.

---

## Oś czasu

- **2011** — Eric Yuan zakłada Zoom Video Communications.
- **2013** — Debut produktu Zoom.
- **2016** — Zoom zaczyna publicznie reklamować **"end-to-end AES 256-bit encryption"** — **FALSE**.
- **9 kwietnia 2019** — badacz **Jonathan Leitschuh** publikuje: **ZoomOpener** (hidden web server na Mac) obchodzi Safari security. Apple wypuszcza silent update.
- **April 2019 Zoom IPO** — NASDAQ.
- **Grudzień 2019** — **10 mln dziennych użytkowników Zoom**.
- **Styczeń–luty 2020** — COVID-19 rozprzestrzenia się.
- **Marzec 2020** — lockdowny globalne. Zoom explodes: **200 mln dziennych** do końca marca.
- **17 marca 2020** — zoom-bombing zaczyna być masowym problemem (szkoły, kościoły, AA meetings).
- **30 marca 2020** — ***The Intercept*** (Micah Lee, Yael Grauer): **"Zoom Meetings Aren't End-to-End Encrypted, Despite Misleading Marketing"**
- **2 kwietnia 2020** — **FBI ostrzega** o zoom-bombing.
- **3 kwietnia 2020** — **Citizen Lab** (University of Toronto) raport: **AES-128-ECB**, serwery w Chinach, klucze generowane w Pekinie. *Time Magazine* i *Washington Post* publikują.
- **April 2020** — **szczytowe 300 mln dziennych użytkowników**.
- **Kwiecień 2020** — **NYC Department of Education banuje Zoom** dla szkół. Elon Musk ban SpaceX. Niemcy federalne MFA ban.
- **9 kwietnia 2020** — *Time*: **chińscy operatywnicy** używają Zoom do szpiegowania.
- **1 kwietnia 2020** — Eric Yuan publiczne przeprosiny: *"We recognize we have fallen short of the community's — and our own — privacy and security expectations."*
- **7 maja 2020** — Zoom **kupuje Keybase** (kwota nieujawniona) — do rozwoju prawdziwego E2E.
- **Maj 2020** — **NY Attorney General Letitia James** settlement: enhanced encryption protocols.
- **26 października 2020** — Zoom wypuszcza **prawdziwe E2E** jako **technical preview** (opt-in).
- **9 listopada 2020** — **FTC settlement**: comprehensive security program, 20-letni monitoring, **brak wypłat**.
- **Grudzień 2020** — dissent statements: **Rohit Chopra, Rebecca Kelly Slaughter** (FTC Democrats).
- **2021–2026** — Zoom kontynuuje, rośnie; E2E domyślnie opt-in; raporty transparentności publikowane.
- **Kwiecień 2026** (obecnie) — Zoom pod monitoringiem FTC do **2040**.

---

## Mechanizm

### Co Zoom reklamował vs co faktycznie robił

**Zoom's marketing claims (2016–2020):**
> *"End-to-end AES 256-bit encryption for all meetings"*

**Prawda techniczna:**

| Claim | Rzeczywistość |
|-------|---------------|
| **End-to-end encryption** | **Transport encryption** — Zoom miał klucze |
| **AES 256-bit** | **AES-128 w trybie ECB** (słabszy) |
| **Klucze tylko u użytkowników** | **Klucze u Zoom**, generowane na serwerach |
| **Nagrania szyfrowane** | **Unencrypted na serwerach przez 60 dni** |
| **Bezpieczne globalnie** | **Ruting przez Chiny** w niektórych przypadkach |

### Dlaczego "transport encryption" ≠ "E2E"

**Prawdziwy E2E** (jak Signal, WhatsApp):
- Alice i Bob generują klucze **na swoich urządzeniach**
- Zoom (serwer) nigdy nie widzi kluczy
- **Nikt** poza Alice i Bob (nawet Zoom) nie może odczytać rozmowy

**Transport encryption** (co Zoom miał do 2020):
- Alice szyfruje → serwer Zoom **deszyfruje** → serwer **szyfruje ponownie** → Bob odszyfrowuje
- **Serwer widzi wszystko** (zwany **man-in-the-middle z uprawnieniami**)
- Atakujący z dostępem do serwera (hacker, rząd, wewnętrzny pracownik) widzi wszystko

### AES-128-ECB — problem techniczny

**ECB (Electronic Codebook)** — najsimpliejszy tryb AES. Problem: **same dane dają same wyniki**. Jeśli szyfrujesz ten sam obraz dwa razy, wynik jest identyczny. **Klasyczne zdjęcie linuxa-tux w ECB** (penguin silhouette pozostaje widoczna po "szyfrowaniu") pokazuje problem.

Citizen Lab: Zoom meetings **pokazywały wzorce** w zaszyfrowanych danych, potencjalnie pozwalające na **metadata analysis** (liczba uczestników, typ treści).

### Serwery w Chinach

Citizen Lab (Ron Deibert, University of Toronto, kwiecień 2020) zbadał infrastrukturę Zoom. Odkrycia:
- **Servery w Pekinie** generowały klucze szyfrowania dla meetingów
- W niektórych przypadkach **klucze dla meetingów między Amerykanami** były generowane w Chinach
- Chińskie firmy podlegają **Chinese National Intelligence Law (2017)** — obowiązek współpracy z CCP
- Zoom **ma znaczne operacje R&D w Chinach** (Hefei, Hangzhou, Suzhou) — **~700 pracowników** w 2020

### ZoomOpener — backdoor na Macu

**Jonathan Leitschuh** (kwiecień 2019) odkrył:
- Zoom instalował **ukryty web server** na macOS (ZoomOpener)
- Pozwalało na **one-click join** — ale także **automatyczne uruchomienie kamery** przez złośliwy link
- **Odinstalowanie Zoom** nie usuwało ZoomOpener — pozostawał aktywny
- Apple musiał wypuścić **silent system update** usuwający ZoomOpener

### Zoom-bombing

**Marzec–kwiecień 2020** — przerywanie publicznych meetingów. Mechanizm:
- Zoom meetings miały **krótkie ID** (9–10 cyfr)
- **Żadnego hasła domyślnie**
- **Przeszukiwacze ID** — skrypty próbujące losowe ID
- Po wejściu: **screen share, unmuted audio**

**Ofiary**:
- **Szkoły podstawowe** — dzieci widziały porno, swastyki, obelgi rasistowskie
- **AA meetings** — anonimowi alkoholicy wystawiani na publiczne ośmieszenie
- **Synagogi** — antisemickie ataki
- **Kościoły** — obsceniczne przerwania Sunday Service
- **Sądy federalne** — meetingi federalnych sądów przerywane
- **Graduation ceremonies** — skandowania rasistowskie

### Chińskie operacje — Time Magazine raport

**9 kwietnia 2020** — *Time* ujawnił, że **chińscy operatywnicy**:
- Zakłócali **Tiananmen memorial meetings** (4 czerwca rocznica)
- Monitorowali **konferencje aktywistów hong kongskich**
- Zoom **zamknął konta** aktywistów w USA na prośbę Chin
- **Lee Cheuk-yan** (Hong Kong, pro-demokracja) — jego konto zablokowane

To było **najgorsze dla reputacji Zoom**: nie tylko techniczne kłamstwa, ale **aktywna współpraca** z reżimem chińskim.

---

## Odkrycie

### Micah Lee, Yael Grauer (*The Intercept*)

**Micah Lee** — dziennikarz *The Intercept*, wcześniej technologist w EFF. Współpracował z Snowdenem nad Glenn Greenwald reporting. **Yael Grauer** — dziennikarka tech security.

**30 marca 2020** — artykuł "Zoom Meetings Aren't End-to-End Encrypted, Despite Misleading Marketing". Wymusił **natychmiastową reakcję** Zoom. Zoom w odpowiedzi: *"We erroneously used the term 'end-to-end'."*

### Citizen Lab (University of Toronto)

**Ron Deibert** — dyrektor Citizen Lab. Think tank + research center specjalizujący się w human rights + cybersecurity. Wcześniej odkrywali:
- **Pegasus spyware** (NSO Group) — używany przeciw dziennikarzom
- **China's Great Firewall**
- **FinFisher** surveillance software

**3 kwietnia 2020** — raport "Move Fast and Roll Your Own Crypto: A Quick Look at the Confidentiality of Zoom Meetings" (Bill Marczak, John Scott-Railton). Ujawnił AES-128-ECB i chińskie serwery.

### FBI Boston

**2 kwietnia 2020** — FBI Boston oficjalne ostrzeżenie o zoom-bombing. Nazwa "zoom-bombing" weszła do języka.

### Pierwsze publikacje

- **9 kwietnia 2019** — Jonathan Leitschuh, Medium: ZoomOpener
- **30 marca 2020** — Micah Lee, Yael Grauer, *The Intercept*
- **1 kwietnia 2020** — Eric Yuan, Zoom blog: public apology
- **3 kwietnia 2020** — Citizen Lab raport
- **9 kwietnia 2020** — *Time Magazine*: chińskie operacje
- **9 listopada 2020** — FTC press release

---

## Osoby kluczowe

### Zoom

- **Eric Yuan** — założyciel, CEO Zoom. Urodzony w Chinach, naturalizowany Amerykanin 2007. Były VP Engineering w Cisco WebEx. Po pandemii: bilioner (na papierze, ~20 mld USD na szczycie).
- **Alex Stamos** — dołączył jako **outside security consultant** w kwietniu 2020. Były CSO Facebook, Yahoo. Wcześniej krytyk Apple CSAM (→ C03).
- **Oded Gal** — CTO Zoom. Odpowiedzialny za redesign architektury.

### Dziennikarze / badacze

- **Micah Lee** (*The Intercept*) — kluczowa publikacja.
- **Yael Grauer** (*The Intercept*).
- **Ron Deibert** (Citizen Lab).
- **Bill Marczak, John Scott-Railton** (Citizen Lab).
- **Jonathan Leitschuh** — odkrywca ZoomOpener.
- **Craig Silverman** (*BuzzFeed News*) — early investigative work.

### Regulatorzy

- **Letitia James** — NY Attorney General. Settlement maj 2020.
- **Rohit Chopra** — FTC Commissioner (Democrat), dissent w FTC settlement (brak wypłat).
- **Rebecca Kelly Slaughter** — FTC Commissioner (Democrat), dissent.
- **Joseph Simons** — FTC Chairman (Republican). Poparł settlement.
- **Christine S. Wilson** — FTC Commissioner (Republican).

### Krytycy / aktywiści

- **Elon Musk** — ban Zoom w SpaceX (kwiecień 2020). Ironiczne w kontekście jego późniejszych tech-safety pozycji.
- **EFF**
- **ACLU**
- **Lee Cheuk-yan** (Hong Kong) — aktywista, ofiara account shutdown.

---

## Reakcja firmy

### Zoom — piękna transformacja reputacyjna

**Etap 1: obrona (marzec 2020).** Początkowo Zoom broniło się: *"E2E in the industry parlance means encryption from user to server, server to user."* **Totalne kłamstwo** w branży kryptograficznej.

**Etap 2: przeprosiny (1 kwietnia 2020).** Eric Yuan publiczne przeprosiny: *"We recognize we have fallen short of the community's — and our own — privacy and security expectations."* Ogłosił:
- **90-day feature freeze** — koncentracja na bezpieczeństwie
- **CISO Council** — zewnętrzni eksperci
- **Alex Stamos** jako consultant
- **End-to-end encryption** zapowiedziany

**Etap 3: akcja (kwiecień–październik 2020).**
- Zmiana na **AES-256-GCM** (prawdziwy 256-bit)
- **Default password protection**
- **Waiting Rooms** domyślnie
- **Security icon** w meetingu
- Kupno **Keybase** (maj 2020)
- **True E2E preview** (październik 2020)

**Etap 4: settlements.**
- NY AG settlement (maj 2020)
- FTC settlement (listopad 2020)

**Etap 5: wzrost (2020–2022).** Zoom **wygrał** pandemię. Cena akcji x6. Eric Yuan: bilioner.

**Etap 6: konsolidacja (2023–2026).** Zoom rozszerzył się: Zoom Phone, Zoom Contact Center, Zoom AI Companion (generative AI). Konkurencja: Microsoft Teams, Google Meet.

### Kontrowersyjna pozycja dot. E2E

**Ważne**: Zoom **E2E jest opt-in**, nie default. **Domyślnie wszyscy mają transport encryption**. Decyzja biznesowa: **E2E wyłącza** niektóre funkcje (cloud recording, telefoniczne dial-in, live transcription). Zoom wybrał **convenience over security** dla masy użytkowników.

---

## Postępowanie prawne

### Jurysdykcje

- **USA federalne** — FTC
- **USA stanowe** — NY AG (James), liczne klasy akcje
- **UE** — brak dużych postępowań (Zoom UE compliance better)

### Podstawa prawna

- **FTC Act § 5** — deceptive practices
- **NY Executive Law § 63(12)** — false claims
- **California BPC 17200** — unfair competition
- **California CCPA** — privacy
- **Stanowe prawa konsumenckie**
- **COPPA** — dzieci na Zoom (szkoły)

### Kluczowe etapy

| Data | Etap |
|------|------|
| Marzec–kwiecień 2020 | Kryzys pandemiczny |
| Maj 2020 | NY AG settlement |
| 9 listopada 2020 | FTC settlement |
| Październik 2020 | E2E preview launch |

### Orzecznictwo powiązane

- ***In re Zoom Video Communications Inc. Privacy Litigation*** (N.D. Cal.) — klasa akcja shareholders i użytkowników; ugoda **85 mln USD** (2021).
- **Equivalent** do innych FTC deceptive practices cases (Facebook, Google).

---

## Kary i ugody

| Data | Organ | Kwota | Jurysdykcja | Status |
|------|-------|-------|-------------|--------|
| Maj 2020 | NY AG | Brak kary finansowej | Settlement z enhanced security | Zrealizowane |
| 9 listopada 2020 | FTC | **BRAK wypłat użytkownikom** | 20-letni monitoring | W toku do 2040 |
| 2021 | Class action (shareholder) | **85 000 000 USD** | Private settlement | Zrealizowane |

**Charakterystyka:** FTC settlement **nie zawierał** odszkodowań dla konsumentów, co **skrytykowały** Komisarki Chopra i Slaughter. Class action (shareholders) wypłacił **85 mln USD**, ale to głównie dla inwestorów, nie dla masowych użytkowników.

---

## Precedensy i implikacje

### Dla prawa USA

- **FTC deceptive practices** jako główne narzędzie — wzmocnione.
- **20-letni monitoring** jako wzorzec — podobny do Facebook 2012 (po Cambridge Analytica → A02).
- **Brak wypłat** — kontrowersja prowadząca do reform FTC podczas Biden era (Lina Khan 2021+).

### Dla prawa UE

- **Precedens przyspieszonego enforcementu** pandemicznego — regulatorzy nauczyli się reagować szybko.
- **EDPB** guidelines on video conferencing 2020–2021 częściowo inspirowane Zoom case.

### Dla praktyki Big Tech

- **Google Meet, Microsoft Teams, Cisco WebEx** — wszyscy dostosowali marketing materiały po Zoom. **Żaden** więcej nie reklamuje "E2E" jeśli to nie prawda.
- **Signal, Keybase (teraz Zoom), Wire, Threema** — zyskały na reputacji jako "prawdziwe E2E".

### "Pandemia jako stress test"

- Pokazano, jak Big Tech traktuje security gdy **nikt nie patrzy**. Zoom miał 10 mln użytkowników w grudniu 2019 — **nikogo** nie interesowało, jak działa. Gdy wzrósł do 300 mln, **każdy** chciał wiedzieć.
- Precedens: **pandemia jako przyspieszenie regulacyjne**. Niektóre firmy (Zoom) wygrały; inne (np. Instacart w USA, Uber Eats) miały własne kryzysy.

---

## Pozwy zbiorowe

| Sprawa | Sąd | Stan | Wartość | Poszkodowani |
|--------|-----|------|---------|--------------|
| *In re Zoom Video Communications Inc. Privacy Litigation* | N.D. Cal. | Ugoda 2021 | 85 000 000 USD | Użytkownicy USA (płatni) |
| Class actions shareholders | N.D. Cal. | W toku/ugody | Nieznane | Inwestorzy |

Dla przeciętnego użytkownika Zoom — wypłaty były **minimalne** (~15-50 USD per osoba).

---

## Wnioski dla obywateli

### Co to dla mnie znaczy?

Jeśli używałeś Zoom w 2020 (szczególnie marzec–październik) — **twoje meetingi nie były E2E encrypted**. Zoom i potencjalnie chińscy pracownicy/władze mogli **widzieć** zawartość. Dla typowej rodzinnej Zoom call — prawdopodobnie ryzyko było teoretyczne. Dla **dziennikarzy, prawników, terapeutów, aktywistów** — ryzyko realne.

Dzisiaj (2026) Zoom jest **znacznie lepszy**:
- **AES-256-GCM** domyślnie
- **E2E dostępne** (opt-in)
- **Default passwords** i waiting rooms
- **Bez chińskiego routingu** dla USA meetings
- **20-letni FTC monitoring** (do 2040)

### Jak chronić się?

1. **Włącz E2E** gdy potrzebujesz prywatności:
   - Zoom → Settings → Security → **End-to-End Encryption** → ON
   - **Uwaga**: wyłącza cloud recording, dial-in, live transcription
2. **Zawsze password + waiting room** dla meetingów.
3. **Nie udostępniaj meeting ID publicznie** (Twitter, screenshot).
4. **Używaj Signal** dla naprawdę wrażliwych rozmów.
5. **Alternatywy dla wrażliwych spotkań**:
   - **Signal video calls** (pełny E2E, do 40 osób)
   - **Wire** (E2E, biznesowy)
   - **Jitsi Meet** (self-hosted, E2E)
   - **BigBlueButton** (open source, self-hosted)

### Dla profesjonalistów

6. **Prawnicy**: używaj Zoom E2E dla konsultacji klientów. Alternatywnie Signal.
7. **Terapeuci**: Zoom ma HIPAA-compliant plan dla USA. EU: Doxy.me, Jitsi Meet, Wire.
8. **Dziennikarze**: dla wrażliwych źródeł — **Signal, Jitsi**, nie Zoom.
9. **Nauczyciele**: Google Meet (szkoła) z Google Workspace Education ma lepsze privacy niż Zoom konsumencki.

### Jakie mam prawa?

**W USA:**
- **FTC Act** — deceptive practices. Zoom jest pod 20-letnim monitoringiem.
- **Stanowe** — California, Virginia, Illinois mają privacy laws.
- **HIPAA** — dla medycznych use-cases. Zoom ma BAA dla HIPAA.

**W UE (RODO):**
- **Art. 15** — pobierz dane Zoom o tobie.
- **Art. 17** — żądaj usunięcia nagrań.
- **Art. 21** — sprzeciw.
- **Art. 82** — odszkodowanie.

### Uwaga dla mediatorów, prawników, psychologów

**Mediatorzy używający Zoom:**
- **Włącz E2E** dla każdej sesji mediacyjnej.
- **Nie nagraj** w chmurze Zoom (chyba że wymaga tego protocol, a strony wyraziły zgodę).
- **Waiting room** — zawsze.
- **Informuj strony** o używanej technologii i ograniczeniach E2E.

**Prawnicy konsultujący klientów:**
- Zoom E2E dla tajemnicy zawodowej. Alternatywnie Signal/Wire.
- **NIE używaj Zoom AI Companion** (automatyczne transkrypcje) — narusza tajemnicę.

**Psychologowie / terapeuci:**
- Zoom **Pro + HIPAA BAA** w USA.
- W EU: **doxy.me, Jane App, SimplePractice** z EU data residency.
- **NIE używaj darmowego Zoom** dla sesji terapeutycznych.

**Sądy:**
- **Polskie sądy** zaczęły Zoom/Teams po COVID. Polecam: aktualizacja polityki na E2E dla spraw wrażliwych (rodzinnych, karnych, ochrony danych).

**Mediatorzy rodzinni w sprawach przemocy domowej:**
- **Szczególna ostrożność**. Partner nękający może **próbować włamywać się** na sesje. Password + waiting room + E2E + obrona tożsamości.

---

## Ciekawostki

- **Eric Yuan — urodzony w Chinach, naturalizowany Amerykanin**. Dorastał w **Shandong**. Jako młody inżynier po skończeniu studiów zamierzał podjąć pracę w Cisco WebEx, ale **odrzucono go wizy USA 8 razy**. **Dziewiąty raz** dostał. Klasyczna historia amerykańskiego dream — która potem wróciła do niego przez problemy z Chinami w 2020.
- **Keybase acquisition (maj 2020)** — Zoom kupił startup Keybase za nieznane miliony. Keybase był pionierem **zero-knowledge encryption** — idealny wybór do budowy prawdziwego E2E. Team Keybase (w tym **Max Krohn**) **zostal** i zbudował Zoom E2E w ~5 miesięcy. Najszybszy post-acquisition delivery w tech.
- **"90-day feature freeze"** (1 kwietnia 2020) — Eric Yuan ogłosił, że **Zoom wstrzymuje** dodawanie nowych funkcji na 90 dni, skupi się wyłącznie na bezpieczeństwie. **Bezprecedensowe** w tech industry: firma publicznie zawiesza priorytet wzrostu dla bezpieczeństwa.
- **Alex Stamos** — były CSO Facebook, Yahoo. Wcześniej jedno z najostrzejszych krytyków Apple CSAM (C03), Meta (Cambridge Analytica). W kwietniu 2020 **dołączył do Zoom jako outside consultant**. Dla wielu krytyków — legitymizacja Zoom. Dla Stamosa — **fascinating problem** w skali.
- **Time Magazine "Chinese operatives spying on Zoom" (9 kwietnia 2020)** — artykuł, który **najbardziej** zaszkodził reputacji Zoom. Nie tylko "bugs in encryption" (techniczny problem), ale **"actively helping authoritarian regime"** (geopolityczny problem). W erze US-China tech war zmienił postrzeganie Zoom.
- **ZoomOpener (2019) — Mac silent backdoor** — Jonathan Leitschuh odkrył, że Zoom instalował na Macu **ukryty web server**, który:
  - Odpowiadał na requests, nawet jeśli Zoom był odinstalowany
  - Pozwalał złośliwemu website **uruchomić kamerę** użytkownika bez zgody
  - Apple musiał wypuścić **pierwszy w historii silent system update** (Mojave Security Update 2019-002) usuwający malware z systemu
- **Rohit Chopra dissent** (9 listopada 2020) — Komisarka FTC (Democrat) napisała miażdżący dissent:
  > *"Today's settlement with Zoom is long on promises, but short on follow-through. Zoom is not required to offer redress, refunds, or even notice to its customers that material claims regarding the security of its services were false."*
  Chopra potem został dyrektorem CFPB (2021). Jej dissent stał się **wzorcem** dla przyszłych FTC enforcement pushes pod **Liną Khan** (FTC Chair 2021–2025).
- **"Skoczyć z 10 mln do 300 mln dziennych użytkowników"** — **30x wzrost w 4 miesiące**. Infrastruktura Zoom **prawie się zawaliła**. Zoom przeniósł workloads do **Amazon AWS, Oracle Cloud, Microsoft Azure** jednocześnie w marcu–kwietniu 2020.
- **Polski wymiar** — polskie szkoły, uczelnie, sądy, urzędy **masowo** używały Zoom w 2020–2021. UODO **nie wszczął** osobnego postępowania, ale **Ministerstwo Cyfryzacji** wydało zalecenia po kwietniu 2020. Polskie szkoły częściowo przeszły na Google Meet i Microsoft Teams.
- **"Śpiewając Happy Birthday na Zoom" (kwiecień 2020) phenomenon** — kulturowy fenomen. **Urodziny na Zoom**, **śluby na Zoom** (Nowy Jork zalegalizował zdalne śluby), **pogrzeby na Zoom**. Zoom stał się **infrastrukturą życia społecznego**. Efekt: **nikt nie mógł** wycofać się, nawet po ujawnieniach.
- **Zoom-bombing a szkoły** — najbardziej tragiczne incydenty. W **Nowym Jorku** klasy podstawowe przerywane przez pornografię. **Niemcy**, **Wielka Brytania** — swastyki w lekcjach historii. **Izrael, Francja** — obelgi antysemickie. Szkoły szybko przeszły na **password + waiting rooms**.
- **NYC Dept of Education banuje Zoom** (4 kwietnia 2020) — największy na świecie okręg szkolny (1,1 mln uczniów) zbanował Zoom, przeszedł na Microsoft Teams. Po reformach Zoom — **unban** w maju 2020.
- **Zoom IPO wartościowany ~10 mld USD** (kwiecień 2019). W **październiku 2020** wartość **160 mld USD**. Eric Yuan: **bilioner**. **2023**: wartość Zoom spadła o 80%+ vs szczyt — pandemic over. Klasyczny **pandemic stock bubble**.
- **Post-pandemic reckoning (2022–2024)** — firmy wracają do biura, studenci do klas. Zoom **walczy** o relewanc. Strategia: **Zoom AI Companion** (2023, generative AI), **Zoom Workplace** (rebrand 2024). Mieszany sukces.
- **E2E "opt-in not default"** — Zoom's E2E **nie jest domyślne**. Decyzja biznesowa: domyślne E2E wyłącza kluczowe funkcje (cloud recording, dial-in, live transcription). Krytycy: Zoom **wybrał convenience over security** dla masy. Apologizers: **użytkownik ma wybór**.
- **Signal vs Zoom** — Signal przez całą pandemię **rosło**, oferując **darmowe group video** (do 8 osób, potem 40). Ludzie wymagający E2E przenieśli się. Signal **nie ma 300 mln dziennych** — ale ma **reputację**. Klasyczne **tradeoff wzrost vs jakość**.
- **Zoom AI Companion (2023)** — automatyczne transkrypcje, podsumowania meetingów. Dla prawników, mediatorów, terapeutów: **ryzyko naruszenia tajemnicy**. Należy **wyłączyć** default.
- **"Zoom fatigue"** — naukowcy (Stanford Virtual Human Interaction Lab) badali, czy Zoom powoduje **więcej zmęczenia** niż spotkania osobiste. Jeremy Bailenson: *yes*, przez **nieustanne spojrzenie w oczy**, **opóźnienie audio**, **lustrzane odbicie siebie**. Pandemic-era research.
- **Zoom Phone i Contact Center** — po pandemii Zoom rozszerzył o telefonię i call centers. Konkurencja: Cisco, Microsoft, Genesys. Zoom ma niszę, nie dominacji.

---

## Źródła

1. Federal Trade Commission, "FTC Requires Zoom to Enhance its Security Practices as Part of Settlement", 9 listopada 2020. URL: https://www.ftc.gov/news-events/news/press-releases/2020/11/ftc-requires-zoom-enhance-its-security-practices-part-settlement

2. Micah Lee, Yael Grauer, "Zoom Meetings Aren't End-to-End Encrypted, Despite Misleading Marketing", *The Intercept*, 30 marca 2020. URL: https://theintercept.com/2020/03/31/zoom-meeting-encryption/

3. Bill Marczak, John Scott-Railton, "Move Fast and Roll Your Own Crypto: A Quick Look at the Confidentiality of Zoom Meetings", Citizen Lab University of Toronto, 3 kwietnia 2020.

4. Eric Yuan, "A Message to Our Users", Zoom Blog, 1 kwietnia 2020.

5. Kate O'Flaherty, *Time Magazine*, "Chinese Operatives Used Zoom to Target Foreign Activists", kwiecień 2020.

6. Jonathan Leitschuh, "Zoom Zero Day: 4+ Million Webcams & Maybe an RCE?", Medium, 9 lipca 2019.

7. Letitia James, New York Attorney General, settlement press release, maj 2020.

8. Rohit Chopra, dissent statement, FTC settlement, 9 listopada 2020.

9. Rebecca Kelly Slaughter, dissent statement, FTC settlement, 9 listopada 2020.

10. *In re Zoom Video Communications Inc. Privacy Litigation*, N.D. Cal., settlement 2021 (85 mln USD).

11. Bitdefender, "Zoom Settles with FTC over Allegations of Deceptive Security Practices", listopad 2020.

12. Social Media Today, "Zoom Announces Settlement with the FTC Over False Encryption Claims", listopad 2020.

13. IT Pro, "Zoom settles with the FTC over 'deceptive' encryption claims", 10 listopada 2020.

14. Stanford Virtual Human Interaction Lab (Jeremy Bailenson), "Nonverbal Overload: A Theoretical Argument for the Causes of Zoom Fatigue", Technology, Mind, and Behavior, 2021.

15. FBI Boston Field Office, public warning on "Zoom-bombing", 2 kwietnia 2020.

---

*Ostatnia aktualizacja: 2026-04-18*
*Karta w bazie: E06_zoom_e2ee.md*
