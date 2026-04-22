---
id: A04
slug: a04-wyciek-533-milionow-numerow-facebooka-z-2-67-mln-polakow
group: A
group_label: Meta
title: Wyciek 533 milionów numerów Facebooka (z 2,67 mln Polaków)
year_revealed: 2021
last_updated: '2026-04-17'
companies:
- Meta
status: concluded
jurisdictions:
- US
- UK
- PL
legal_basis:
- RODO art. 25
- art. 25
- art. 32
fines:
- amount: 265000000
  currency: EUR
  authority: Irlandzki DPC
  date: 2022-11
  category: regulatory_fine
  status: paid
whistleblowers:
- schrems
journalists: []
related_cases:
- A06
- A02
- C04
- A03
- C05
tags:
- trening-ai
- rodo
- wyciek-danych
- polski-watek
categories:
- privacy
geo_coords: []
priority: TOP
card_complete: true
word_count: 3376
years_active:
- 2018
- 2021
---

# A04 — Wyciek 533 milionów numerów Facebooka (z 2,67 mln Polaków)

> **Kategoria:** Masowy scraping / wyciek danych / naruszenie privacy by design
> **Firma/firmy:** Meta (Facebook)
> **Lata:** 2018–2019 (luka i scraping), styczeń/kwiecień 2021 (ujawnienie), listopad 2022 (kara DPC)
> **Status:** Zakończone postępowanie DPC; kara 265 mln EUR; pozostały pozwy zbiorowe
> **ID karty:** A04

---

## Metadane

| Pole | Wartość |
|------|---------|
| Kraj/region | 106 krajów; w tym Polska (2,67 mln), USA (32 mln), UK (11 mln), Indie (6 mln) |
| Rok ujawnienia | 3 kwietnia 2021 (publiczne upublicznienie) |
| Lata trwania praktyki | 2018–2019 (exploit działał), ~sierpień 2019 (scraping), 2021 (publikacja) |
| Łączna kara | 265 mln EUR (DPC Ireland) |
| Waluta | EUR |
| Podstawa prawna | RODO art. 25(1), art. 25(2), art. 32 |
| Sygnalista/odkrywca | Alon Gal, CTO Hudson Rock (Izrael) |
| Liczba poszkodowanych | 533 136 969 kont; ~2 669 381 Polaków |
| Status (na dziś) | DPC decyzja 25.11.2022 prawomocna; Meta zaimplementowała reformy |

---

## TL;DR

W **2018–2019** nieznany atakujący wykorzystał **funkcję odnajdywania użytkowników po numerze telefonu** (tzw. *contact importer* w Messengerze) do scrapingu **533 136 969 kont Facebooka ze 106 krajów**. Wykorzystana technika to **phone number enumeration**: skrypt generował losowe numery telefonów i sprawdzał, które są powiązane z kontem Facebooka. Gdy trafiał, pobierał powiązane dane publiczne. Facebook **załatał lukę w sierpniu 2019** — ale **nie poinformował** użytkowników ani regulatorów.

**Pierwsze sygnały** pojawiły się w **styczniu 2021**, gdy na forum hakerskim **RaidForums** pojawił się **bot Telegram** oferujący wyszukiwanie numerów telefonów po Facebook ID (za opłatą w BTC). **3 kwietnia 2021** — **Alon Gal**, CTO izraelskiej firmy Hudson Rock, zauważył, że **cały zbiór** (wcześniej sprzedawany za pieniądze) został **upubliczniony na forum hakerskim za darmo**. Plik ważył **ok. 400 MB per kraj**; polski fragment zawierał **2 669 381 rekordów**, w tym imiona, nazwiska, numery telefonów, **Facebook ID**, płeć, stan cywilny, miejsce pracy, miasto, **adresy e-mail** (dla ok. 21 645 polskich kont).

**25 listopada 2022** — **Irlandzki DPC** nałożył na Meta **265 mln EUR grzywny** za **naruszenie art. 25(1) i 25(2) RODO** (privacy by design, privacy by default). DPC uznał, że Meta **nie zaprojektowała systemu tak**, aby zapobiec masowemu scrapingowi — była to **wada strukturalna**, nie incydent. Kara była czwartą największą w historii RODO dla Mety i pierwszą za scraping (nie za wyciek z serwerów w tradycyjnym sensie).

W Polsce **UODO publicznie ostrzegło** obywateli; serwisy **niebezpiecznik.pl, press.pl, money.pl, focus.pl** szczegółowo analizowały polskie dane. **Najpopularniejsze imiona** wśród poszkodowanych Polaków: Anna (>64 tys.), Agnieszka (>49 tys.), Piotr (>47 tys.), Marcin (>43 tys.), Krzysztof; **najpopularniejsze miasta**: Warszawa (>81 tys.), Wrocław (>50 tys.), Kraków (>46 tys.), Poznań (>37 tys.), Gdańsk (>24 tys.); **absurdalny szczegół**: ponad **15 000 Polaków wpisało jako zawód "SZLACHTA NIE PRACUJE"**.

---

## Oś czasu

- **2018 (druga połowa)** — luka w funkcji contact importer zostaje zauważona przez atakującego; rozpoczęcie enumeracji numerów telefonów.
- **Sierpień 2019** — Facebook **łata lukę** (po wewnętrznym wykryciu). Brak informacji dla użytkowników.
- **~2019–2020** — dane krążą w środowiskach hakerskich; **sprzedawane** po cichu.
- **Styczeń 2021** — na forum RaidForums pojawia się **bot Telegram**, który za opłatą w BTC zwraca numer telefonu dla podanego Facebook ID (lub odwrotnie). **Motherboard (Vice)** opisuje tę sprawę, ale wówczas nie wybuchła szerszą aferę.
- **14 stycznia 2021** — Alon Gal pisze na Twitterze (@UnderTheBreach): *"Kto ma dostęp do bazy Facebook pierwszych 1,5M polskich numerów telefonów?"* — pokazuje próbkę danych w formie usługi Telegram.
- **Wiosna 2021** — nieznany aktor postanawia **upublicznić całą bazę za darmo** na forum hakerskim — gestem "końca monetyzacji".
- **3 kwietnia 2021 (sobota)** — Alon Gal odkrywa publikację całego zbioru: *"All 533,000,000 Facebook records were just leaked for free. This means that if you have a Facebook account, it is extremely likely that the phone number used for the account was leaked."*
- **3 kwietnia 2021 (popołudnie)** — *Business Insider* (Aaron Holmes) potwierdza skalę i weryfikuje dane.
- **4 kwietnia 2021** — **niebezpiecznik.pl** publikuje pierwszą polską analizę; plik Polski ma **2 669 381 rekordów** o rozmiarze ponad 400 MB. Statystyki polskich kont: imiona, miasta, zawody.
- **5 kwietnia 2021** — Facebook publikuje post ("*old data from previously reported 2019 leak*"), **nadal kwestionując** nowość sprawy.
- **6 kwietnia 2021** — **haveibeenpwned.com** rozszerza funkcję wyszukiwania po numerach telefonów (dotychczas działało tylko po e-mailach). Pozwala sprawdzić, czy nasz **polski numer (+48...)** znajduje się w wycieku.
- **6–7 kwietnia 2021** — **UODO** publikuje oficjalne ostrzeżenie; **polskie media** (*money.pl, press.pl, focus.pl, spidersweb.pl*) szeroko informują.
- **14 kwietnia 2021** — **Irlandzki DPC** oficjalnie otwiera dochodzenie pod art. 33(3) RODO.
- **25 listopada 2022 (piątek)** — DPC przyjmuje decyzję nakładającą **265 mln EUR kary** na Meta.
- **28 listopada 2022** — publiczne ogłoszenie decyzji. Meta zapowiada appelację.
- **2022–2024** — szereg pozwów zbiorowych w różnych krajach UE (Holandia, Niemcy), większość w fazie sądowej.
- **2024** — TSUE odpowiada na pytanie prejudycjalne Federalnego Sądu Najwyższego Niemiec (BGH) w powiązanej sprawie dot. szkody niemajątkowej z RODO (C-340/21) — **obniża próg szkody** dla roszczeń RODO.

---

## Mechanizm

### Jak to działało — technicznie

**Contact importer** to funkcja Messengera, która pozwalała użytkownikowi **znaleźć znajomych na Facebooku po ich numerach telefonów**. Mechanizm:

1. Użytkownik wpisywał numer (lub eksportował książkę adresową z telefonu)
2. Facebook zwracał: **czy numer jest powiązany z kontem** + link do profilu + imię i nazwisko + avatar

**Exploit:** atakujący użył tej funkcji **w masowej skali**, generując automatycznie miliardy numerów (jako **enumeration attack**) i zbierając zwroty.

**Kluczowe pole danych pobrane dla każdego trafienia:**
- Imię i nazwisko
- Numer telefonu
- Facebook User ID (stały)
- Płeć
- Data urodzenia (jeśli publiczna)
- Lokalizacja (miasto)
- Stan cywilny (jeśli publiczny)
- Zawód / miejsce pracy (jeśli publiczne)
- Bio (jeśli publiczne)
- Adres e-mail (tylko dla ~5% rekordów)

**Nie zawierało:**
- Haseł
- Prywatnych wiadomości
- Zdjęć

### Dlaczego Meta twierdziła, że to "nie wyciek"

Rzecznik Meta: *"To są stare dane, które zostały pobrane przy użyciu techniki »phone number enumeration«, wykorzystującej publiczne funkcje platformy. Załatkaliśmy to w 2019."*

**Krytyka:** Meta argumentowała, że skoro dane były **publicznie dostępne dla każdego, kto miał numer** (poprzez funkcję contact importer), to **nie były "wyciekiem"** w sensie klasycznym. DPC odrzucił ten argument w całości:

- **Art. 25(1) RODO** — privacy by design: Facebook musiał zaprojektować funkcję tak, żeby **nie umożliwiała enumeracji**. Powinien był zastosować rate limiting, captcha, uwierzytelnianie sesji.
- **Art. 25(2) RODO** — privacy by default: ustawienia domyślne Facebooka pokazywały **numer telefonu** jako informację "znajomi mogą znaleźć mnie przez numer" — **bez zgody użytkownika**, bez jasnego opt-inu.
- **Art. 32 RODO** — bezpieczeństwo przetwarzania: środki techniczne i organizacyjne musiały być **adekwatne do ryzyka** — enumeracja miliardów numerów była foreseeable threat.

### Dlaczego to było szkodliwe — nawet jeśli "tylko numery"

Kluczowy kontr-argument do obrony Meta:
- **Numer telefonu + imię + nazwisko + miasto** = gotowy **profil pod phishing, smishing, SIM-swap**
- **Facebook ID + numer** = narzędzie **deanonimizacji** kont fałszywych/anonimowych
- Obywatele **nie mogą zmienić numeru telefonu** tak łatwo jak hasła — skutki są **permanentne**
- Dla **osób publicznych, dziennikarzy, aktywistów, ofiar przemocy domowej** — ryzyko podwójne

---

## Odkrycie

### Kto odkrył i kiedy

**Alon Gal** — izraelski ekspert ds. cyberbezpieczeństwa, współzałożyciel i CTO **Hudson Rock** (firma cyberintelligence, Tel Awiw). Gal specjalizuje się w **monitorowaniu forum hakerskich** — dark web i forum jak Raid Forums. Jego profil Twittera **@UnderTheBreach** jest źródłem wielu dużych odkryć (m.in. wyciek 200 mln Twittera w 2023).

**14 stycznia 2021** — Gal **pierwszy** zauważył bota Telegram oferującego usługi odwrotnego wyszukiwania numer ↔ Facebook ID. Ostrzegał wtedy, że baza istnieje, ale nie jeszcze publicznie.

**3 kwietnia 2021** — sobota, w weekend. Gal zauważa, że **ktoś opublikował cały zbiór na forum hakerskim** *"za darmo"*. Tweet: *"All 533,000,000 Facebook records were just leaked for free."*

### Weryfikacja

*Business Insider* (Aaron Holmes) wziął próbkę rekordów i:
- Zestawił znane numery znanych użytkowników z rekordami w wycieku — **zgodne**
- Zweryfikował adresy e-mail i numery przez funkcję **password reset Facebooka** — dla większości trafień **weryfikator potwierdzał istnienie konta**
- Stwierdził: **dane są autentyczne**.

### Jak weryfikowano w Polsce

**niebezpiecznik.pl** (Piotr Konieczny i zespół) pobrał polską część zbioru (400 MB, 2 669 381 rekordów). Analizy:
- **Imiona:** Anna (>64 tys.), Agnieszka (>49 tys.), Piotr (>47 tys.), Marcin (>43 tys.), Krzysztof
- **Nazwiska:** Nowak, Kowalski, Kowalska, Kowalczyk, Wójcik — **typowe polskie nazwiska** w proporcji odpowiadającej populacji
- **Miasta:** Warszawa (>81 tys.), Wrocław (>50 tys.), Kraków (>46 tys.), Poznań (>37 tys.), Gdańsk (>24 tys.)
- **Zawody kompletnie absurdalne, ale często wpisywane przez Polaków:** "SZLACHTA NIE PRACUJE" (>15 tys.), "Wyższa Szkoła Melanżu" (>1 tys.), "Wyższa Szkoła Robienia Hałasu (WSRH)" (>1 tys.)
- **Realnie prowadzący własne firmy:** ok. 22,5 tys.
- **E-maile:** tylko 21 645 polskich rekordów miało e-mail — najpopularniejszy: GMail

### Pierwsze publikacje

- **3 kwietnia 2021** — Tweet Alon Gal (@UnderTheBreach)
- **3 kwietnia 2021** — Aaron Holmes, *Business Insider*: "533 million Facebook users' phone numbers and personal data have been leaked online"
- **3 kwietnia 2021** — *Fortune, TechCrunch, Reuters* — serwisy zachodnie
- **4 kwietnia 2021** — **niebezpiecznik.pl** — analiza polskiej części
- **4 kwietnia 2021** — *press.pl, money.pl, focus.pl, spidersweb.pl*

---

## Osoby kluczowe

### Sygnalista/odkrywca

- **Alon Gal** — CTO Hudson Rock, izraelski ekspert ds. cyberbezpieczeństwa. Po sprawie 533 mln, odkrył także wyciek 200 mln Twittera (2023), T-Mobile, i wiele innych.

### Dziennikarze

- **Aaron Holmes** — *Business Insider* (wówczas Insider Inc.) — pierwsza weryfikacja zachodnia
- **Joseph Cox** — *Motherboard (Vice)* — wcześniejsze (styczeń 2021) doniesienia o bocie Telegram
- **Piotr Konieczny** — szef niebezpiecznik.pl, pierwsza polska analiza
- **zespoły press.pl, money.pl, focus.pl, spidersweb.pl** — szeroka polska prasa

### Regulatorzy

- **Helen Dixon** — wówczas Commissioner Irlandzkiego DPC (do 2024; obecnie: Des Hogan). DPC prowadził dochodzenie pod art. 33(3).
- **Urząd Ochrony Danych Osobowych** (Polska) — publiczne ostrzeżenia dla obywateli
- **Bundesbeauftragte** (Niemcy) — niezależne dochodzenie rolling z DPC

### Meta

- **Mark Zuckerberg** (sam jeden z ofiar — jego numer **WhatsApp (który sam nie używa)** był w wycieku)
- **Dan Levy** — VP, Product Management; rzecznik Meta w tej sprawie
- **Andy Stone** — Director of Policy Communications; komunikat medialny

---

## Reakcja firmy

### Meta — initial response

Mike Clark (Product Management Director Meta) w blogu firmowym (5 kwietnia 2021):
- Potwierdził skalę (533 mln)
- Twierdził, że dane "nie zostały zhakowane z naszych systemów"
- Określił je jako "old data from a previously reported issue"
- Podkreślił, że Facebook **nie powiadomił użytkowników**, bo nie uważał, że istnieje prawny obowiązek (argument odrzucony przez DPC).

**Analiza:** Meta próbowała oddzielić "breach" od "leak", ale **praktycznie dla użytkownika** jest to to samo: **straciłem kontrolę nad swoimi danymi**. DPC przyjął pragmatyczne stanowisko.

### Działania naprawcze

- Łatka w contact importer (sierpień 2019, przed ujawnieniem)
- Dodanie rate limiting i captcha
- **Anti-scraping measures** — ale dopiero po karze DPC
- **Transparency reports** rozszerzone o scraping

### Pytania bez odpowiedzi

- Dlaczego Meta **nie poinformowała użytkowników** w 2019, gdy łatała?
- Czy Meta **znała** skalę już w 2019, gdy łatała, czy odkryła dopiero po publikacji 2021?
- Dlaczego **nie zaimplementowała privacy by default** od początku?

---

## Postępowanie prawne

### UE — Irlandzki DPC

- **14 kwietnia 2021** — otwarcie śledztwa pod RODO art. 33(3) (obowiązek powiadamiania o naruszeniu)
- **25 listopada 2022** — decyzja nakładająca **265 mln EUR**
- Stwierdzone naruszenia:
    - **Art. 25(1)** — privacy by design nieadekwatna
    - **Art. 25(2)** — privacy by default nieadekwatna
- **Kara + reprimand + nakaz remediation** w określonym czasie
- Meta zapowiedziała apelację, ale stan na 2026 — **decyzja prawomocna**

### UE — inne DPA

- **Hamburg (Niemcy), Madrid (Hiszpania)** — równoległe badania, ale sprawa została przekazana DPC zgodnie z one-stop-shop mechanism RODO

### Polska

- **UODO** — publiczne ostrzeżenia; **brak osobnego postępowania**, bo Meta podlega DPC (Irlandia) w ramach one-stop-shop.
- **Indywidualne pozwy** — Polscy użytkownicy mogą pozwać Meta **indywidualnie w polskich sądach** o szkody niemajątkowe na podstawie **art. 82 RODO**. Kilka spraw zgłoszonych w 2022–2024, ugody lub odszkodowania indywidualne w granicach **200–2000 PLN**.

### Niemcy — *Facebook-Urteil* BGH i TSUE

**2023** — Federalny Sąd Najwyższy Niemiec (BGH) zwraca się z pytaniem prejudycjalnym do TSUE: **czy sam fakt naruszenia RODO** uprawnia do odszkodowania, czy trzeba udowodnić **konkretną szkodę**?

**C-340/21 (Natsionalna agentsia za prihodite)** — **TSUE orzeka (grudzień 2023)**:
- **Obawa przed niewłaściwym wykorzystaniem danych** może stanowić szkodę niemajątkową
- Nie trzeba udowadniać **konkretnej szkody finansowej**
- **Obniżony próg** dla roszczeń obywateli

**Implikacja dla 533 mln:** masowe pozwy zbiorowe w UE zostały **ułatwione** przez tę wykładnię TSUE. **Tysiące pozwów** w Niemczech, Holandii, Francji w 2024–2025.

---

## Kary i ugody

| Data | Organ | Kwota | Jurysdykcja | Podstawa |
|------|-------|-------|-------------|----------|
| 25.11.2022 | Irlandzki DPC | 265 000 000 EUR | UE | RODO art. 25(1), 25(2) |
| 2024–2026 | Pozwy indywidualne i zbiorowe | zmienne (np. 500 EUR/osobę w niektórych krajach) | UE | RODO art. 82 |

---

## Precedensy i implikacje

### Dla prawa UE

- **Pierwsza duża kara DPC za scraping** (a nie za klasyczny breach z włamaniem) — potwierdziła, że privacy by design/default są **egzekwowalne**
- **Katalizator dla TSUE C-340/21** — obniżenie progu szkody niemajątkowej
- **Precedens** w interpretacji art. 25 RODO — szczególnie ważne dla designu API i publicznych funkcji wyszukiwania

### Dla prawa USA

- Sprawa nie miała bezpośrednich skutków prawnych w USA (brak federalnego prawa RODO-podobnego)
- **California CCPA/CPRA** pośrednio — zaostrzenie zasad dla platform operujących w Kalifornii

### Dla praktyki Big Tech

- **Koniec publicznych contact importers** jako domyślnego ustawienia — Instagram, Twitter/X, LinkedIn wprowadziły opt-out
- **Rate limiting + captcha** standardem w funkcjach wyszukiwania
- **Transparency reports o scrapingu** stały się kwartalnym zwyczajem

---

## Pozwy zbiorowe

| Sprawa | Sąd | Stan | Wartość | Poszkodowani |
|--------|-----|------|---------|--------------|
| Różne pozwy indywidualne w DE, NL, PL | Krajowe sądy | Trwające | 500 EUR/osobę typowo | Miliony potencjalnych w UE |
| Massenklagen Niemcy | Landgericht Berlin, Dusseldorf, Hamburg | Częściowe wyroki 2024–2025 | ~100–1000 EUR/osobę | Dziesiątki tysięcy pozywających |

W Polsce, **brak skonsolidowanego pozwu zbiorowego**, ale indywidualne pozwy możliwe (ustawa o dochodzeniu roszczeń w postępowaniu grupowym z 2009 wymaga **22+ osób**, które się zorganizują).

---

## Wnioski dla obywateli

### Co to dla mnie znaczy?

**Jeśli miałeś konto na Facebooku w latach 2017–2019 i dodałeś do profilu numer telefonu** (nawet jako prywatny, tylko dla siebie) — jest **bardzo wysoce prawdopodobne**, że Twój numer znajduje się w wycieku. Nie dotyczy to tylko kont publicznych — **scraping objął wszystkie konta**, które miały numer telefonu powiązany. **2,67 miliona Polaków** jest dotkniętych.

### Jak sprawdzić?

- Wejdź na **[haveibeenpwned.com](https://haveibeenpwned.com)**
- Wpisz swój numer telefonu w formacie międzynarodowym: `+48XXXXXXXXX` (bez spacji i myślników)
- Jeśli wynik pokazuje "Facebook 533M" — Twoje dane są w wycieku

### Jak się chronić?

1. **Usuń numer telefonu z profilu Facebook i Instagram** (Ustawienia → Osobowe → Kontakt)
2. **Włącz 2FA przez aplikację (nie SMS)** — Authy, Google Authenticator, lub klucz sprzętowy
3. **Bądź bardzo czujny na SMS-y o "dopłacie do paczki"**, "zwrocie podatku", "BLIK-u" — to **ulubione techniki phishingu** wykorzystujące wyciek numerów
4. **Rozważ zmianę numeru**, jeśli jesteś osobą publiczną lub dziennikarzem
5. **Nie podawaj numeru platformom, które go nie potrzebują** — wiele aplikacji wymaga "weryfikacji SMS" jedynie po to, by zbudować bazę do śledzenia

### Jakie mam prawa?

- **RODO art. 82** — odszkodowanie za szkody majątkowe i niemajątkowe (obawa, niepokój) — **precedens TSUE C-340/21** obniżył próg
- **Art. 17** — usunięcie danych
- **Art. 21** — sprzeciw wobec przetwarzania

### Gdzie się zgłosić?

- **UODO** (Polska) — można zgłaszać naruszenia, chociaż one-stop-shop kieruje ostatecznie do DPC Irlandii
- **Irlandzki DPC** — [dataprotection.ie](https://www.dataprotection.ie) — Meta main EU regulator
- **Sąd cywilny w Polsce** — dla roszczeń odszkodowawczych (art. 82 RODO + polski k.p.c.)
- **Kancelarie prawne specjalizujące się w RODO** — niektóre prowadzą pozwy zbiorowe lub "masowe" na zasadzie opłaty warunkowej

### Dla mediatorów, prawników i doradców

- Sprawa **533 mln** jest dobrym case study w ugodach przed UODO — standardowe kwoty odszkodowawcze w Polsce **200–2000 PLN** za obawę niewłaściwego wykorzystania.
- Dla pozwów grupowych — art. 1 i następne **ustawy z 2009 o dochodzeniu roszczeń w postępowaniu grupowym** wymaga **co najmniej 22 osób** z **podobnymi roszczeniami**. Teoretycznie 2,67 mln polskich użytkowników spełnia to z zapasem, ale w praktyce polski system **nie ma tradycji masowych spraw klasowych** porównywalnych z USA.
- **Dla mediatorów rodzinnych** — sprawa wycieku ma implikacje dla spraw **stalkingu, nękania po rozstaniu** — numer telefonu ofiary w rękach napastnika to poważne ryzyko.

---

## Ciekawostki

- **Wśród 533 mln był Mark Zuckerberg**. Sam CEO Meta miał numer w wycieku — co pokazało **ironiczną uniwersalność** problemu. Jego numer, jak ustalili dziennikarze, był **WhatsAppowy** (co paradoksalnie — Zuckerberg rzadko używa WhatsAppa).
- **"SZLACHTA NIE PRACUJE"** jako zawód dla ponad 15 000 Polaków. Pokazuje polski **humor samoironiczny**, który jednocześnie buduje ciekawy dataset dla socjologów.
- **Polskie miasta w proporcji** — Warszawa > Wrocław > Kraków > Poznań > Gdańsk (81k > 50k > 46k > 37k > 24k) idealnie koreluje z ranking populacji miast Polski, co weryfikuje reprezentatywność próby.
- **Alon Gal pisze po angielsku, ale z Tel Awiwu** — symbol nowego modelu cyberintelligence, gdzie niezależni badacze z Izraela, Ukrainy, Rosji, Estonii są często szybsi niż regulatorzy.
- **Cena wycieku**: Meta rocznie zarabia ok. **30+ mld USD w UE**. Kara **265 mln EUR** to **< 1% jednego rocznego przychodu**. Krytycy (NOYB) nazywają to **"kosztem prowadzenia biznesu"**.
- **Porównanie z polską karą Morele.net**: 2,83 mln PLN (ok. 630 tys. EUR) za wyciek 2,2 mln kont — **UODO dostał wtedy pochwałę**. Z 2 669 381 kont Polaków w 533M, **proporcjonalnie Meta powinno było zapłacić ok. 3,4 mln PLN w Polsce**, gdyby sprawa była pod UODO. Wyszła **na mniej** dzięki one-stop-shop.
- **Baza była sprzedawana przez 2 lata**, zanim ktoś ją upublicznił "za darmo". To **klasyczna dynamika dark web data markets** — sprzedawca eksploatuje wartość, dopóki może, potem **upublicznia dla zwiększenia reputacji w środowisku**. Gal: *"Bazy danych, jeśli są duże lub rzadkie, nie są rozpowszechniane szeroko natychmiast — ci, którzy je trzymają, próbują je monetyzować tak długo, jak mogą. Proces czasem trwa lata, czasem dni, ale ostatecznie wszystkie prywatne bazy wyciekają, jeśli były sprzedawane."*
- **Plik waży 400 MB dla polskiej części** — kompaktowy format JSON/CSV. Można go pobrać, otworzyć w Excelu, **i sprawdzać siebie i znajomych** (nielegalne w UE — dane osobowe). To pokazuje, jak realistyczny jest problem — **każdy, kto pobierze plik**, ma natychmiastowy dostęp do phonebook'a milionów osób.
- **Bot Telegram** odwiedzał przez 2 miesiące (styczeń–marzec 2021) zanim ktoś zareagował medialnie. Pokazuje **lukę w monitorowaniu dark webu** przez same firmy — Meta nie wiedziała, że ich dane są sprzedawane, aż tweet Gala stał się viralem.
- **Brak hasła + bez prywatnych wiadomości** to argumentacja Meta — ale specjaliści phishingu i SIM-swap **nie potrzebują haseł**. Wystarczy numer + imię + nazwisko + data urodzenia, by skutecznie poprowadzić atak social engineering.

---

## Źródła

1. Alon Gal, tweet na @UnderTheBreach, 3 kwietnia 2021. URL: https://twitter.com/UnderTheBreach/status/1378314145784557569 (archiwum: Wayback Machine)
2. Aaron Holmes, "533 million Facebook users' phone numbers and personal data have been leaked online", *Business Insider*, 3 kwietnia 2021. URL: https://www.businessinsider.com/stolen-data-of-533-million-facebook-users-leaked-online-2021-4 (dostęp: 2026-04-17)
3. niebezpiecznik.pl, "[AKTUALIZACJA #3] Dane 533 milionów użytkowników Facebooka wyciekły", 3–6 kwietnia 2021. URL: https://niebezpiecznik.pl/post/facebook-wyciek-dane-533-milionow-uzytkownikow/ (dostęp: 2026-04-17)
4. press.pl, "Wyciekły dane 2,6 mln polskich użytkowników Facebooka", 7 kwietnia 2021. URL: https://www.press.pl/tresc/65483,wyciekly-dane-2_6-mln-polskich-uzytkownikow-facebooka (dostęp: 2026-04-17)
5. money.pl, "Wyciek danych z Facebooka. UODO ostrzega", 7 kwietnia 2021. URL: https://www.money.pl/gospodarka/wyciek-danych-z-facebooka-uodo-ostrzega-6626549045603008a.html (dostęp: 2026-04-17)
6. focus.pl, "Wyciek danych 500 mln użytkowników Facebooka. W Polsce ucierpieli ci z zawodem 'Szlachta nie pracuje'", 2021. URL: https://www.focus.pl/artykul/sprawdz-czy-twoje-dane-z-facebooka-zostaly-skradzione (dostęp: 2026-04-17)
7. spidersweb.pl, "Wielki wyciek danych z Facebooka. Sprawdź, czy nie wyciekł twój numer telefonu", 4 kwietnia 2021. URL: https://spidersweb.pl/2021/04/facebook-wyciek-numer-telefonu-jak-sprawdzic.html (dostęp: 2026-04-17)
8. Irlandzki Data Protection Commission, "Data Protection Commission announces decision in Facebook 'data-scraping' inquiry", komunikat prasowy, 28 listopada 2022. URL: https://dataprotection.ie/en/news-media/press-releases/data-protection-commission-announces-decision-facebook-data-scraping-inquiry (dostęp: 2026-04-17)
9. The Hacker News, "Irish Regulator Fines Facebook $277 Million for Leak of Half a Billion Users' Data", 29 listopada 2022. URL: https://thehackernews.com/2022/11/irish-regulator-fines-facebook-277.html (dostęp: 2026-04-17)
10. Security Affairs, "Irish data protection commission fines Meta over 2021 data-scraping leak", 29 listopada 2022. URL: https://securityaffairs.com/139063/laws-and-regulations/irish-dpc-fines-meta-data-scraping.html (dostęp: 2026-04-17)
11. TSUE, wyrok C-340/21 z 14 grudnia 2023 (Natsionalna agentsia za prihodite).
12. Wikipedia (English), "Alon Gal", stan na 2026. URL: https://en.wikipedia.org/wiki/Alon_Gal (dostęp: 2026-04-17)
13. Socialpress.pl, "Facebook user data leak – how to check if it affected us?", 2021. URL: https://socialpress.pl/en/2021/04/wyciek-danych-uzytkownikow-facebooka-jak-sprawdzic-czy-nas-dotyczyl/ (dostęp: 2026-04-17)
14. Have I Been Pwned, dedykowana strona Facebook breach 533M. URL: https://haveibeenpwned.com/ (dostęp: 2026-04-17)
15. UODO, ostrzeżenie dla obywateli (kwiecień 2021, archiwum).

---

*Ostatnia aktualizacja: 2026-04-17*
*Karta w bazie: A04_533mln.md*
