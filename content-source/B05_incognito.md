# B05 — Brown v. Google: Tryb Incognito nie jest prywatny

> **Kategoria:** Wprowadzanie w błąd / pozew zbiorowy / niszczenie miliardów rekordów
> **Firma/firmy:** Google (Alphabet) / Chrome
> **Lata:** 2016–2023 (praktyka), czerwiec 2020 (pozew), kwiecień 2024 (ugoda)
> **Status:** Zakończone — ugoda "do 5 mld USD" (zniszczenie miliardów rekordów); precedens systemowy
> **ID karty:** B05

---

## Metadane

| Pole | Wartość |
|------|---------|
| Kraj/region | USA (Kalifornia); wpływ globalny (Chrome ma ~65% rynku) |
| Rok ujawnienia | 2 czerwca 2020 (pozew); grudzień 2023 (ugoda tentatywna); 1 kwietnia 2024 (finalizacja) |
| Lata trwania praktyki | 1 czerwca 2016 – grudzień 2023 (okres objęty ugodą) |
| Łączna kara | **"Do 5 mld USD" wartości** (niszczenie miliardów rekordów); brak bezpośrednich wypłat użytkownikom |
| Waluta | USD |
| Podstawa prawna | California Invasion of Privacy Act (CIPA), California Unfair Competition Law, ECPA, CDA § 230 (odrzucone) |
| Sygnalista/odkrywca | Chasom Brown (powód wiodący); prawnicy **Boies Schiller Flexner** |
| Liczba poszkodowanych | Szacunkowo **136 mln użytkowników** Chrome Incognito w USA |
| Status (na dziś) | Ugoda sfinalizowana; Google niszczy miliardy rekordów; 5-letni monitoring |

---

## TL;DR

**2 czerwca 2020** **Chasom Brown** i kilku innych użytkowników Chrome złożyli pozew zbiorowy w *Northern District of California* — *Brown v. Google LLC* (nr 4:20-cv-03664-YGR). Zarzut: Google **śledzi użytkowników Chrome w trybie Incognito** mimo obietnicy prywatności. Chrome wyświetlał komunikat: *"Now you can browse privately, and other people who use this device won't see your activity"*. Użytkownicy rozumieli to jako "Google mnie nie widzi". W rzeczywistości Google zbierał dane nawet w trybie Incognito przez **Google Analytics** (na ~80% stron WWW), **Google Ads**, **reCAPTCHA**, **Google Fonts**, **YouTube embeds** i inne usługi osadzone na stronach.

**Przełomem była faza discovery (2021–2022)**, gdy Google został zmuszony ujawnić **wewnętrzne dokumenty**. Najbardziej obciążający: e-mail **Lorraine Twohill**, CMO Google, do **Sundara Pichai** (CEO): *"Incognito should be truly private. We are limited in how strongly we can market Incognito because it's not truly private, thus requiring really fuzzy, hedging language that is almost more damaging."* Tłumaczenie: "Nie możemy się chwalić prywatnością Incognito, bo to kłamstwo — a niewyraźny język marketingu **szkodzi nam bardziej**". CMO firmy **wprost przyznała wewnętrznie**, że produkt jest wprowadzeniem w błąd.

Ugoda sfinalizowana **1 kwietnia 2024**. Warunki bezprecedensowe: (1) **Google zniszczy miliardy rekordów** zebranych w Incognito między 1 czerwca 2016 a datą ugody; (2) **Chrome Incognito będzie domyślnie blokował third-party cookies** przez co najmniej 5 lat; (3) **nowy, bardziej szczery komunikat Incognito**; (4) **5-letni niezależny monitoring** przez special master; (5) **BRAK bezpośrednich wypłat** klasie — każdy użytkownik może indywidualnie pozwać o 5 000 USD pod CIPA, co analitycy wyceniają na potencjalne **5–7,8 mld USD wartości**.

Sprawa jest istotna z trzech powodów: (1) **pierwsza ugoda "data destruction"** w historii — zwykle Big Tech płaci karę i zatrzymuje dane; tu Google **zniszczy dane**; (2) **precedens dla class actions prywatnościowych** w USA — po Lloyd v. Google (UK 2021) wydawało się, że class actions prywatnościowe umierają; tu pokazano, że w USA nadal działają; (3) **wewnętrzna dokumentacja Big Tech jako dowód** — e-mail Twohill stał się wzorcem dla setek późniejszych pozwów.

---

## Oś czasu

- **2008** — Chrome debiutuje z trybem Incognito. Od początku formuła: "innym osobom na tym urządzeniu".
- **2016** — Google wprowadza technologie pozwalające na precyzyjniejszą re-identyfikację w Incognito (m.in. ulepszone browser fingerprinting w Google Analytics, Ad Manager).
- **2018** — wewnętrzne memo Google: *"Incognito (Third Paper)"* — *"People often think Incognito protects them more than it does."*
- **2019** — *Hacking Week* w Google: inżynierowie identyfikują **12 sposobów**, w których Incognito zawodzi obietnicę prywatności. Raport **nie został wdrożony**.
- **Luty 2020** — e-mail Lorraine Twohill do Sundara Pichai.
- **2 czerwca 2020** — **Chasom Brown et al. v. Google LLC** — pozew zbiorowy złożony w N.D. California. Kancelaria **Boies Schiller Flexner** (ta sama, która reprezentowała Ala Gore'a w Bush v. Gore 2000).
- **Marzec 2021** — Google składa motion to dismiss. **Judge Yvonne Gonzalez Rogers** odrzuca. Sprawa idzie dalej. (Gonzalez Rogers to ta sama sędzia, która prowadziła *Epic v. Apple*.)
- **Sierpień 2021** — zespół Boies Schiller uzyskuje access do wewnętrznych dokumentów Google.
- **2022** — discovery. Ujawnienie e-maila Twohill do Pichai. Ujawnienie memo "Third Paper". Ujawnienie raportu Hacking Week.
- **Marzec 2022** — Google próbuje zablokować publikację e-maila Twohill. Sędzia odrzuca.
- **Grudzień 2022** — Google oferuje 5 mln USD ugody. Odrzucone jako zbyt niskie.
- **2023** — dalszy discovery i negocjacje.
- **Październik 2023** — Sundar Pichai zeznaje w sprawie antytrustowej DOJ (osobna sprawa *US v. Google*), gdzie jest pytany także o Incognito.
- **28 grudnia 2023** — **tentatywna ugoda** ogłoszona.
- **1 kwietnia 2024** — **ugoda sfinalizowana** z zatwierdzeniem sądu.
- **2024–2029** — okres wdrażania zmian w Chrome i 5-letni monitoring niezależny.

---

## Mechanizm

### Co obiecywał Chrome

Chrome w Incognito wyświetlał komunikat:
*"Now you can browse privately, and other people who use this device won't see your activity. Chrome won't save the following information: your browsing history, cookies and site data, information entered in forms."*

Przeciętny użytkownik czytał to jako: **"Google mnie nie widzi"**. W rzeczywistości Chrome uczciwie mówi tylko o **lokalnej historii urządzenia** — ale nikt tego nie czyta krytycznie.

### Co robił Google (i większość internetu)

Google zbierał dane nawet w Incognito, bo strony internetowe, które odwiedzał użytkownik, **same wysyłały do Google** informacje o wizycie. Główne kanały:

1. **Google Analytics** — statystyki dla właścicieli stron. Obecne na ~80% globalnych stron WWW. Każda wizyta wysyła do Google: IP, User-Agent, URL, timestamp, referrer.
2. **Google Ad Manager / AdSense** — sieć reklamowa. Każda reklama Google na stronie = transmisja do Google.
3. **reCAPTCHA** — "sprawdź czy nie jesteś robotem" Google'a. Wymaga analizy behawioralnej → Google otrzymuje dane.
4. **Google Fonts** — darmowe fonty ładowane z fonts.googleapis.com. Każde załadowanie = wizyta zarejestrowana.
5. **Google Tag Manager** — orkiestracja trackerów.
6. **YouTube embeds** — każdy osadzony filmik YouTube na stronie wysyła dane.
7. **Gmail tracking pixels** — w e-mailach z Gmaila odwiedzone obrazki są hostowane na Google.
8. **Google Maps embeds** — mapki na stronach.

Każda z tych usług widziała: **IP, User-Agent, dokładny URL odwiedzany, czas, referrer, browser fingerprint**. W wielu przypadkach także **identyfikator cookie** pochodzący z sesji w normalnym trybie Chrome (chociaż to miało działać, jeśli cookies były czyste, ale nie zawsze było wymagane — fingerprinting wystarcza).

### Re-identyfikacja użytkownika w Incognito

Incognito blokowało cookies i historię **lokalnie**. Ale Google mógł **połączyć sesję Incognito z konkretną tożsamością** przez:

- **Korelację czasową** — jeśli Jan wylogował się z Chrome i w ciągu 2 minut otworzył Incognito z tego samego IP, Google wiedział.
- **Browser fingerprinting** — unikalna kombinacja: rozmiar ekranu, wersja OS, zainstalowane fonty, wtyczki, Canvas API hash, WebGL renderer, AudioContext fingerprint, strefa czasowa, język. Statystycznie **>99% przeglądarek ma unikalny fingerprint**.
- **Loginy w Incognito** — jeśli w Incognito zalogowałeś się do Gmaila, YouTube, czy innego serwisu Google, sesja była już zdeanonimizowana.
- **IP + User-Agent** — dla większości użytkowników wystarczy, by ustalić tożsamość sesji z 95–99% pewnością.

### Dlaczego to działało bez użytkownika "robi coś"

Tu jest sedno: użytkownik otwiera Incognito, wchodzi na stronę (np. **portal z wiadomościami**, który ma Google Analytics i reklamy Google). Użytkownik **nic nie robi** — strona sama wysyła do Google dane o wizycie. Cały łańcuch deanonimizacji dzieje się bez interakcji użytkownika.

---

## Odkrycie

### Jak doszło do ujawnienia

Odkrycie nastąpiło przez **pozew zbiorowy**, nie przez sygnalistę czy badacza. Kancelaria **Boies Schiller Flexner** w 2020 zauważyła, że sposób marketingu Chrome Incognito ("browse privately") był **klasycznym wprowadzaniem w błąd** w rozumieniu California Unfair Competition Law. Zebrali powodów reprezentacyjnych (w tym Chasoma Browna), podnieśli pozew i — kluczowo — **wymusili discovery**. Discovery ujawniło wewnętrzne dokumenty, które stały się fundamentem sprawy.

### Wewnętrzne dokumenty Google — materiały dowodowe

**E-mail Lorraine Twohill (CMO Google) do Sundara Pichai (CEO), luty 2020** — prawdopodobnie **najbardziej szkodliwy dokument w historii Big Tech w sądzie**. Treść:

*"Incognito should be truly private. We are limited in how strongly we can market Incognito because it's not truly private, thus requiring really fuzzy, hedging language that is almost more damaging."*

Tłumaczenie:
- "Incognito powinien być naprawdę prywatny."
- "Jesteśmy ograniczeni w tym, jak mocno możemy reklamować Incognito, bo nie jest naprawdę prywatny."
- "Co wymaga naprawdę niewyraźnego, asekuracyjnego języka, który jest prawie bardziej szkodliwy."

**Co to znaczy prawnie**: CMO firmy **wprost przyznała wewnętrznie**, że produkt jest wprowadzeniem w błąd. To **classic party admission** — najmocniejszy rodzaj dowodu w prawie dowodowym USA.

**Memo "Incognito (Third Paper)" z 2018** — wewnętrzna analiza: *"People often think Incognito protects them more than it does."*

**Raport Hacking Week 2019–2020** — inżynierowie Google zidentyfikowali **12 sposobów**, w których Incognito zawodzi. Propozycje napraw. **Nie wdrożono** przez 3 lata.

### Pierwsze publikacje

- **2 czerwca 2020** — pozew dostępny publicznie przez PACER
- **Czerwiec 2020** — pierwsze artykuły w *Reuters*, *Bloomberg*, *Law360*, *The Register*
- **Marzec 2022** — *Bloomberg* jako pierwszy ujawnia treść e-maila Twohill po pierwszych motionach sądowych
- **28 grudnia 2023** — *Reuters* jako pierwszy ogłasza tentatywną ugodę
- **1 kwietnia 2024** — pełne warunki ugody w *Reuters*, *NYT*, *WSJ*

---

## Osoby kluczowe

### Powód wiodący

- **Chasom Brown** — mieszkaniec Kalifornii, typowy użytkownik Chrome. Celowo wybrany jako "test case" — nie aktywista, nie ekspert, reprezentant przeciętnego amerykańskiego konsumenta.

### Prawnicy

- **David Boies** — założyciel **Boies Schiller Flexner**, jeden z najsłynniejszych amerykańskich prawników. Reprezentował Ala Gore'a w *Bush v. Gore* (2000), DOJ w antytrustowej sprawie Microsoft (1998), Apple vs Samsung (wiele spraw). Uważany za "najlepszego procesualistę w USA".
- **Mark C. Mao** — partner Boies Schiller, lead counsel w *Brown v. Google*. Specjalizacja: prywatność i nowe technologie.
- **William Carmody** — Susman Godfrey, co-lead counsel.

### Sędzia

- **Judge Yvonne Gonzalez Rogers** — sędzia federalna Northern District of California od 2011 (nominacja Obama). Znana z twardego podejścia do Big Tech: prowadziła *Epic v. Apple* (2020–2021), *In re: Google Play Store Antitrust Litigation* i inne. Często cytowana za zdanie: *"You are not above the law, simply because of your size."*

### Google

- **Lorraine Twohill** — CMO (Chief Marketing Officer) Google. Autorka e-maila, który był "killer evidence" w sprawie.
- **Sundar Pichai** — CEO Alphabet i Google.
- **Kent Walker** — Chief Legal Officer.
- **Aparna Sridhar** — Deputy General Counsel.

### Eksperci

- **Jonathan Mayer** (Princeton) — zeznawał jako biegły naukowy o fingerprintingu i re-identyfikacji.
- **Serge Egelman** (UC Berkeley) — biegły ds. bezpieczeństwa przeglądarek.

---

## Reakcja firmy

### Google

**Etap 1: obrona przez motion to dismiss (2020–2021).** Google argumentował, że Incognito "nigdy nie obiecywało totalnej prywatności" i że komunikat dotyczy "innych użytkowników urządzenia". Sędzia Gonzalez Rogers odrzuciła.

**Etap 2: walka o ukrycie dokumentów (2021–2022).** Google próbował objąć ochroną "attorney-client privilege" maksimum wewnętrznych dokumentów. Sędzia odrzuciła większość wniosków — nie każda korespondencja z prawnikiem jest chroniona, szczególnie jeśli dotyczy **business decisions**, nie porady prawnej.

**Etap 3: niska oferta (grudzień 2022).** 5 mln USD ugody — śmiesznie niska. Odrzucona przez klasę.

**Etap 4: realne negocjacje i ugoda (2023).** Gonzalez Rogers wyznaczyła datę procesu. Presja. Google przystąpił do poważnych negocjacji.

**Etap 5: realizacja (2024+).** Zniszczenie miliardów rekordów, aktualizacja komunikatów Incognito, 5-letni monitoring.

**Nowy komunikat Incognito** (2024):
*"Others who use this device won't see your activity, so you can browse more privately. This won't change how data is collected by websites you visit and the services they use, including Google."*

Znacznie **bardziej szczery** — ale warto zauważyć: ostatnie zdanie to **de facto przyznanie się**, że Google nadal widzi wizyty.

---

## Postępowanie prawne

### Jurysdykcje

Sprawa wyłącznie w USA (California federalna). Globalny wpływ przez rynek Chrome.

### Podstawa prawna

- **California Invasion of Privacy Act (CIPA), Cal. Penal Code § 631–632** — 5000 USD za naruszenie, wprowadzenie 1967
- **California Unfair Competition Law, Bus. & Prof. Code § 17200**
- **California Consumers Legal Remedies Act**
- **Electronic Communications Privacy Act (ECPA), 18 USC § 2510**
- **Odrzucone przez Google obrony**: CDA § 230 (nie chroni własnych wprowadzeń w błąd firmy); Terms of Service (konsumenci nie akceptowali zgody na tracking w Incognito)

### Kluczowe etapy

| Data | Etap |
|------|------|
| Czerwiec 2020 | Pozew złożony |
| Marzec 2021 | Motion to dismiss odrzucony |
| 2022 | Ujawnienie wewnętrznych dokumentów |
| Grudzień 2023 | Tentatywna ugoda |
| 1 kwietnia 2024 | Ugoda sfinalizowana |

### Orzecznictwo powiązane

- ***Peña v. Google*** (2021) — wcześniejsza, podobna sprawa; Google wygrał na procedural grounds.
- ***Calhoun v. Google*** (N.D. Cal.) — pokrewna sprawa o tracking Chrome sync.
- **Sprawa Safari Workaround (B02)** — wzorzec wprowadzania w błąd.
- ***In re Meta Pixel Healthcare Litigation*** — podobny wzorzec w kontekście danych medycznych.

---

## Kary i ugody

| Data | Organ | Kwota | Jurysdykcja | Podstawa |
|------|-------|-------|-------------|----------|
| 1 kwietnia 2024 | Sąd N.D. Cal. | **Do 5 mld USD wartości** | USA (CA) | CIPA, UCL, CLRA, ECPA |

**Struktura wartości:**
- Zniszczenie miliardów rekordów (szacowana wartość danych: 5–7,8 mld USD — **analitycy**)
- Brak bezpośrednich wypłat dla klasy
- Indywidualne prawa do pozwu 5 000 USD pod CIPA pozostają

**Honoraria prawników**: ~0 USD z ugody (Boies Schiller pracowało na kontyngentówce opartej na procentach z wartości szkody; skomplikowane).

---

## Precedensy i implikacje

### Dla prawa USA

- **Pierwsza wielka "data destruction" ugoda w historii Big Tech.** Zwykle firmy płacą i zatrzymują dane; tu **niszczą**.
- **Wzmocnienie CIPA** — 5 000 USD za naruszenie × miliony użytkowników = potencjalnie ogromne ekspozycje.
- **Wzór dla pozwów prywatnościowych** — Boies Schiller podniosła już podobne sprawy przeciwko Meta, TikTok, Amazon.
- **Osłabienie CDA § 230** — § 230 nie chroni przed zarzutami o **własne wprowadzenia w błąd firmy**. Analogia do New Mexico v. Meta (A08).

### Dla prawa UE

- **Impuls dla interpretacji RODO art. 5** (zasada przejrzystości) — komunikaty w aplikacjach muszą być **rzetelne**, nie tylko formalnie poprawne.
- **EDPB Guidelines on Dark Patterns (2022)** — Incognito UI byłby tekstbookowym przykładem.

### Dla praktyki Big Tech

- **Dokumentacja jest ryzykiem.** Twohill e-mail pokazuje, że wewnętrzna korespondencja może być dowodem. Kancelarie od 2024 szkolą executives, aby **nie pisać** rzeczy, które później mogłyby być użyte w sądzie.
- **Marketing musi odpowiadać produktowi.** Incognito UI przez lata był niedokładny; Firefox, Safari, Brave szybciej dostosowały marketing.
- **Browser fingerprinting jako cel regulacji** — po Brown Apple i Firefox wzmocniły fingerprinting protection; Google Chrome zapowiedział **Privacy Sandbox** i deprecjację third-party cookies.

---

## Pozwy zbiorowe

| Sprawa | Sąd | Stan | Wartość | Poszkodowani |
|--------|-----|------|---------|--------------|
| *Brown v. Google LLC* | N.D. Cal. 4:20-cv-03664-YGR | Ugoda 04.2024 | Do 5 mld USD wartości | ~136 mln użytkowników Chrome Incognito USA |
| *Calhoun v. Google* | N.D. Cal. | Oddzielne | Pokrewna | Chrome sync |
| *In re Meta Pixel Healthcare* | N.D. Cal. | W toku | Oczekiwana | Pacjenci szpitali |

---

## Wnioski dla obywateli

### Co to dla mnie znaczy?

Jeśli myślałeś, że **"Incognito" chroni cię przed Google** — byłeś **jednym z setek milionów wprowadzonych w błąd**. Incognito chroni tylko przed **innymi osobami na tym samym urządzeniu** (domownicy, współpracownicy korzystający z tego samego komputera). Nie chroni przed:
- Samym Google (Analytics, Ads, reCAPTCHA, Fonts, Maps embeds, YouTube embeds)
- Meta Pixel (obecnym na dziesiątkach tysięcy stron)
- ISP (dostawcą internetu) — widzi każdy URL i adresowanie DNS
- Pracodawcą (jeśli używasz firmowej sieci)
- Szkołą (jeśli w sieci edukacyjnej)
- Rządowym dostawcą nadzoru

### Jak się chronić?

**Jeśli chcesz naprawdę prywatnego przeglądania:**

1. **Tor Browser** — jedyna realistycznie anonimowa przeglądarka. Kosztem: wolniej, niektóre strony blokują Tor.
2. **Brave Browser z Tor Mode** ("New Private Window with Tor") — kompromis szybkości i anonimowości.
3. **Firefox z Total Cookie Protection + uBlock Origin + NoScript** — blokuje większość trackingu.
4. **VPN + przeglądarka z fingerprinting protection** — Firefox lub Brave.

**Dla codziennego "bardziej prywatnego":**

5. **Safari na iPhone/Mac** — najsilniejsza ochrona przed trackingiem (ITP, ATT).
6. **Brave Browser** — domyślnie blokuje reklamy i trackery.
7. **DuckDuckGo Privacy Browser** — mobilna alternatywa Chrome.
8. **Wyłącz Chrome sync** — Ustawienia → Sync → Wyłącz.
9. **Wyłącz "Pomóż ulepszyć Chrome"** (telemetria).

**Ważne: VPN nie wystarcza.** VPN ukrywa twój IP przed stroną, ale jeśli **zalogujesz się** do Gmaila, Google i tak wie, kim jesteś. Fingerprinting przeglądarki pozwala na re-identyfikację niezależnie od IP.

### Jakie mam prawa?

**W USA:**
- **CIPA** (California) — jeśli jesteś rezydentem Kalifornii, możesz indywidualnie pozwać Google o **5 000 USD za naruszenie**. Pozew Brown ustanowił precedens. Kancelarie masowo wysyłają demand letters.
- Stanowe prawa prywatności (NY Stop Hacks, IL BIPA, itp.).

**W UE:**
- **RODO art. 5** — zasada przejrzystości. Google naruszał RODO w UE w **dokładnie taki sam sposób**; DPA europejskie mogłyby nałożyć karę, ale nie zrobiły tego.
- **RODO art. 6** — brak ważnej podstawy przetwarzania (zgoda nie była świadoma).
- **Analog "Brown v. Google" w UE** — możliwy przez DPA Irlandia, ale dotychczas nie wystąpił.

### Gdzie się zgłosić?

- **Polska**: UODO
- **UE**: krajowy DPA; NOYB ma otwartą sprawę przeciwko Google dot. trackingu
- **Kalifornia**: można indywidualnie pozwać Google o 5 000 USD

### Uwaga dla mediatorów, prawników, dziennikarzy, aktywistów

**Nigdy nie używaj Incognito jako jedynej ochrony** w pracy z klientami w sprawach wrażliwych:

1. **Klient w sytuacji kryzysu (przemoc domowa, rozwód)** — Incognito **nie chroni** przed byłym partnerem, jeśli on ma dostęp do rodzinnego routera/ISP.
2. **Tajemnica zawodowa** — adwokaci, lekarze, psychologowie, mediatorzy — powinni używać **Tails OS** (żywy Linux na pendrive, zapomina wszystko po wyłączeniu) do komunikacji wrażliwej. Alternatywy: **ProtonMail/ProtonDrive** (Szwajcaria), **Signal** (E2E messaging).
3. **Dziennikarze śledczy** — **Secure Drop**, Tor, Tails.
4. **Aktywiści** — **Access Now**, **EFF Surveillance Self-Defense** mają poradniki dostosowane do profilu ryzyka.

**Dla polskich adwokatów i mediatorów**: domyślne ustawienia Chrome mogą **teoretycznie naruszać tajemnicę zawodową** (art. 180 k.p.k. — lekarza, adwokata, radcy, duchownego). Dane Google to dane firm USA, dostępne dla wywiadu USA pod **FISA 702**. Dla spraw poufnych rozważ **Firefox + uBlock Origin + europejski VPN** jako minimum.

---

## Ciekawostki

- **E-mail Twohill stał się memem** w społeczności prywatności. Sformułowanie **"fuzzy, hedging language that is almost more damaging"** jest cytowane w wykładach akademickich jako **definicja skutku "marketing privacy-washing"**. CMO przyznała, że firma wie, iż produkt jest kłamstwem.
- **Nazwy "private" w różnych przeglądarkach**: Chrome "Incognito", Firefox "Private Browsing", Safari "Private Browsing Mode", Edge "InPrivate", Brave "Private Window" (i "Private Window with Tor"). Jedynym trybem, który **naprawdę zbliża się do anonimowości** jest Brave z Torem (i Tor Browser).
- ***Jury instruction***: sędzia Gonzalez Rogers planowała instruować ławę przysięgłych, aby **traktowała e-mail Twohill jako "party admission"** — najsilniejszy rodzaj dowodu. Prawdopodobnie to zmusiło Google do ugody — ryzyko werdyktu było ogromne.
- **Boies Schiller Flexner** — kancelaria Davida Boiesa. Boies zaczął karierę jako konserwatysta, reprezentując IBM w latach 70-tych. W 2000 reprezentował Ala Gore'a. W sprawach prywatnościowych stał się jedną z kluczowych postaci. Jego podejście: **"każdy ma prawo do prywatności, nawet konsumenci Chrome"**.
- **Data destruction jako waluta** — analitycy szacują wartość danych zniszczonych w ugodzie na **5–7,8 mld USD**. Dla Google strata nie jest bezpośrednio księgowa, ale odebranie przyszłych możliwości targetingu i trenowania AI. Można porównać do **zniszczenia rezerw surowców**.
- **Nowy komunikat Incognito (2024)** — Google zmuszony napisać: *"This won't change how data is collected by websites you visit and the services they use, including Google."* De facto **admission**, że Google nadal widzi. Uczciwie.
- **Chrome wciąż dominuje**: mimo ugody, Chrome ma ~65% udziału w rynku globalnym (2025). Zmiany w Incognito nie zagroziły pozycji.
- **DuckDuckGo, Brave, Firefox**: po ugodzie ich pobrania wzrosły o ~30%. Długoterminowy trend przesunięcia w stronę prywatnościowych przeglądarek.
- ***Epic v. Apple* i *Brown v. Google* — ta sama sędzia**. Judge Yvonne Gonzalez Rogers prowadziła obie sprawy. Jej podejście: **Big Tech nie jest ponad prawem**. W środowisku prawniczym USA uznawana za jedną z **najbardziej wpływowych sędzi federalnych** w sprawach technologicznych.
- **Polski wątek**: obywatele polscy są częścią **globalnego wpływu** ugody (zmiany w Chrome dotyczą wszystkich użytkowników), ale **nie otrzymają bezpośrednich wypłat** (ugoda dotyczy tylko USA/Kalifornii). Brak równoległego pozwu w UE.
- **Paradoks marketingu Google** — nie mogli reklamować Incognito jako "prywatnego" (bo to kłamstwo), ale też nie mogli pozbyć się funkcji (użytkownicy by się zorientowali). Rozwiązanie: **niewyraźny komunikat**. To klasyczny przykład **"privacy theater"** — teatrów prywatności, które dają iluzję bezpieczeństwa bez realnej ochrony.
- **Wartość precedensu dla przyszłych pozwów**: Boies Schiller i inne kancelarie już podnoszą analogiczne sprawy przeciwko Meta (tracking w trybie prywatnym Facebook app), TikTok (in-app browser tracking), Amazon (Kindle tracking). *Brown v. Google* to **wzorzec modelu prawnego** dla ich.

---

## Źródła

1. *Chasom Brown et al. v. Google LLC*, 4:20-cv-03664-YGR, N.D. California. Dokumenty przez PACER. URL: https://pacer.uscourts.gov

2. Final settlement agreement, April 1, 2024 (publicly filed).

3. Boies Schiller Flexner LLP, komunikaty prasowe 2020–2024. URL: https://www.bsfllp.com

4. Reuters, "Google to destroy browsing data to settle Chrome privacy lawsuit", 1 kwietnia 2024. URL: https://www.reuters.com/technology/google-destroy-browsing-data-settle-chrome-privacy-lawsuit-2024-04-01/ (dostęp: 2026-04-17)

5. Bloomberg, "Google's 'Incognito Mode' Inspires Lawsuits and Ire", 2022 — pierwsze ujawnienie e-maila Twohill.

6. *Peña v. Google LLC*, N.D. Cal. — wcześniejsza, podobna sprawa.

7. California Invasion of Privacy Act, Cal. Penal Code § 631–632.

8. Jonathan Mayer et al., prace Stanford/Princeton o fingerprintingu.

9. EDPB Guidelines 03/2022 on dark patterns.

10. Sundar Pichai, zeznania w *United States v. Google* (DOJ antitrust), październik 2023.

11. NOYB, open complaint vs. Google o tracking, 2023.

12. Judge Yvonne Gonzalez Rogers, orders and rulings w *Brown v. Google* (dostępne przez PACER).

13. The Register, "Google to destroy billions of records in data privacy settlement", 2024.

14. *Calhoun v. Google LLC* — pokrewna sprawa.

15. Serge Egelman, zeznanie biegłego, UC Berkeley.

---

*Ostatnia aktualizacja: 2026-04-17*
*Karta w bazie: B05_incognito.md*
