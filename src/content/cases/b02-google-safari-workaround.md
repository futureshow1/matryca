---
id: B02
slug: b02-google-safari-obejście
group: B
group_label: Google
title: Google Safari Obejście
year_revealed: 2012
last_updated: '2026-04-17'
companies:
- Google
status: settled
jurisdictions:
- US
- UK
- global
legal_basis:
- FTC Act § 5
- FTC Consent Decree 2011
- state consumer protection
- UK DPA 1998
- ePrivacy art. 5
fines:
- amount: 22500000
  currency: USD
  authority: FTC
  date: 2012-08
  category: regulatory_fine
  status: paid
- amount: 17000000
  currency: USD
  authority: 37 stanów USA
  date: 2013-11
  category: state_attorney_general
  status: paid
- amount: 0
  currency: EUR
  authority: UK courts
  date: '2017'
  category: class_action_settlement
  status: paid
whistleblowers:
- schrems
journalists: []
related_cases:
- B04
- B03
- B06
- C01
- B01
tags:
- dark-patterns
- dziennikarze
- pozew-zbiorowy
categories:
- privacy
geo_coords: []
priority: STANDARD
card_complete: true
word_count: 3650
explainer:
  src: /animations/b02-google-safari-obejście.html
  duration: '60s'
  title: Safari Obejście — jak Google obszedł blokadę Apple
subtitle: Omijanie domyślnej prywatności iPhone'ów
years_active:
- 2011
- 2012
---

# B02 — Google Safari Obejście: Omijanie domyślnej prywatności iPhone'ów

> **Kategoria:** Obchodzenie ustawień prywatności przeglądarki / wprowadzanie w błąd / cookies
> **Firma/firmy:** Google (DoubleClick)
> **Lata:** 2011–2012 (praktyka), luty 2012 (ujawnienie), 2012–2021 (postępowania)
> **Status:** Zakończone — FTC rekord w swoim czasie; Lloyd v. Google odrzucone w UK 2021
> **ID karty:** B02

---

## Metadane

| Pole | Wartość |
|------|---------|
| Kraj/region | USA (FTC, 37 stanów), UK, globalnie (wszędzie gdzie używano Safari) |
| Rok ujawnienia | 17 lutego 2012 (*Wall Street Journal*, badania Jonathana Mayera) |
| Lata trwania praktyki | 2011 – 17 lutego 2012 |
| Łączna kara | **~42,5 mln USD** (22,5 mln FTC + 17 mln 37 stanów + ~3 mln inne) |
| Waluta | USD |
| Podstawa prawna | FTC Act § 5, FTC Consent Decree 2011, state consumer protection, UK DPA 1998, ePrivacy art. 5(3) |
| Sygnalista/odkrywca | **Jonathan Mayer** (Stanford), **Ashkan Soltani**, **Julia Angwin** (WSJ) |
| Liczba poszkodowanych | Dziesiątki milionów użytkowników Safari na iPhone/iPad/Mac (w UK oceniono **4,4 mln**) |
| Status (na dziś) | Zakończone; apelacje rozliczone; sprawa precedensowa dla Apple ITP |

---

## W skrócie

W **lutym 2012** **Jonathan Mayer**, doktorant Stanford Law School i Stanford CS, wspólnie z dziennikarzami *Wall Street Journal* (**Julia Angwin**) ujawnił, że **Google celowo omijał domyślne ustawienia prywatności przeglądarki Safari** na iPhone'ach, iPadach i komputerach Mac. Safari była wówczas jedyną mainstreamową przeglądarką, która **domyślnie blokowała ciasteczka stron trzecich** (third-party cookies używane do śledzenia). Google wykorzystał techniczną lukę — wyjątek w Safari pozwalający na cookies po **"interakcji użytkownika z formularzem"** — wstawiając **niewidoczne formularze HTML z autosubmit** w reklamach swojej sieci **DoubleClick**. Safari interpretowała automatyczne zgłoszenie formularza jako interakcję użytkownika i akceptowała ciasteczko. Konsekwencja: **Google śledził miliony użytkowników iPhone'ów mimo ich ustawień prywatności**, podczas gdy na stronie Google "Advertising Help" publicznie **chwalił się, że szanuje ustawienia Safari**.

**Sierpień 2012** — FTC nałożyła **wówczas rekordową karę 22,5 mln USD** za naruszenie Consent Decree z 2011. **Listopad 2013** — 37 stanów USA zamknęło wspólną ugodę na **17 mln USD**. W Wielkiej Brytanii ruszyła sprawa **Lloyd v. Google** (class action 4,4 mln Brytyjczyków), która miała być testem czy brytyjskie prawo pozwala na pozwy grupowe za naruszenie prywatności. 10 listopada 2021 **Sąd Najwyższy UK odrzucił** pozew z powodów proceduralnych — de facto zablokował class actions ochrony danych w UK na lata.

Sprawa wywołała **lawinę reform po stronie Apple**. Safari stopniowo wprowadzała coraz silniejsze mechanizmy: **Intelligent Tracking Prevention (ITP)** w 2017, **Full Third-Party Cookie Blocking** w 2020, **App Tracking Transparency (ATT)** w iOS 14.5 (2021). Te zmiany kosztowały Google i Meta **miliardy dolarów** w przychodach reklamowych — szczególnie Meta w 2022 ogłosił spadek przychodów o **~10 mld USD rocznie** wyłącznie z powodu ATT. Pokazuje to, jak pojedyncza sprawa o **22,5 mln USD kary** może zainicjować strukturalne zmiany o skali dziesiątek miliardów.

Mayer po odkryciu zrobił karierę jako regulator: **Chief Technologist FCC 2014–2015, Chief Technologist FTC 2019–2021**. Ashkan Soltani został **dyrektorem California Privacy Protection Agency (CPPA)** — najsilniejszego regulatora prywatności w USA.

---

## Oś czasu

- **2003** — powstanie Apple Safari, od początku z polityką blokowania third-party cookies domyślnie.
- **2008** — Google przejmuje **DoubleClick** (za 3,1 mld USD) — największą wówczas sieć reklamową świata. DoubleClick staje się podstawą silnika reklamowego Google.
- **2011** — **FTC Consent Decree** z Google po wycieku Buzz (2010). Google zobowiązał się **nie wprowadzać użytkowników w błąd** co do prywatności; zobowiązał się również do **comprehensive privacy program** z audytami zewnętrznymi co 2 lata.
- **2011** — Google zaczyna używać Safari Obejście: niewidoczne formularze HTML w reklamach DoubleClick obchodzące blokadę third-party cookies.
- **Styczeń 2012** — Jonathan Mayer, prowadząc projekt Stanford Web Privacy Census, **zauważa anomalię**: iPhone'y i Maci mają nienaturalnie dużo cookies DoubleClick mimo domyślnej blokady Safari. Analiza reverse engineering reklam DoubleClick ujawnia mechanizm.
- **17 lutego 2012** — *Wall Street Journal* (Julia Angwin, Jennifer Valentino-DeVries) publikuje: "*Google's iPhone Tracking*". Równolegle Mayer publikuje techniczny raport na Stanford CIS.
- **17 lutego 2012** — Google **tego samego dnia** ogłasza zaprzestanie praktyki. Oficjalny komunikat: *"We used known Safari functionality to provide features that signed-in Google users had enabled."*
- **Marzec 2012** — FTC wszczyna śledztwo za naruszenie Consent Decree 2011.
- **17 sierpnia 2012** — **FTC: kara 22,5 mln USD** — **rekordowa w historii FTC w tamtym czasie**.
- **Listopad 2012** — akcja 37 AG stanowych zaczyna się; koordynacja.
- **18 listopada 2013** — **ugoda 37 stanów USA: 17 mln USD**. Google zobowiązane do edukacji konsumentów i utrzymania zgodności.
- **2015** — Court of Appeal UK w sprawie **Vidal-Hall v Google**: szkoda niemajątkowa (distress) może być podstawą pozwu DPA 1998. Zielone światło dla pozew zbiorowy.
- **2017** — formalne złożenie **Lloyd v. Google** — Richard Lloyd reprezentuje 4,4 mln użytkowników iPhone w UK.
- **Czerwiec 2017** — Apple wprowadza **Intelligent Tracking Prevention (ITP) 1.0** w Safari 11 (macOS High Sierra, iOS 11).
- **Marzec 2019** — **High Court UK** odrzuca Lloyd v. Google.
- **Październik 2019** — Court of Appeal UK przywraca sprawę.
- **2019** — Apple wprowadza **ITP 2.3** z Storage Access API.
- **Marzec 2020** — Safari wprowadza **Full Third-Party Cookie Blocking**.
- **Kwiecień 2021** — iOS 14.5 i **App Tracking Transparency (ATT)** — użytkownicy muszą aktywnie zgodzić się na tracking przez aplikacje.
- **10 listopada 2021** — **Sąd Najwyższy UK** w **Lloyd v. Google [2021] UKSC 50** odrzuca class action z przyczyn proceduralnych: każdy powód musi wykazać konkretną szkodę indywidualnie.
- **2022** — Meta ogłasza, że ATT Apple kosztowało firmę **~10 mld USD** spadku przychodów reklamowych rocznie.
- **2024** — **UK Data Protection and Digital Information Bill** (Rishi Sunak) — częściowa reforma ograniczeń Lloyd v. Google.

---

## Mechanizm

### Jak to działało — architektura techniczna

**Kontekst Safari.**
W 2011 Safari była **jedyną mainstreamową przeglądarką** domyślnie blokującą third-party cookies. Chrome, Firefox, Internet Explorer akceptowały wszystko. Blokowanie third-party cookies to kluczowe zabezpieczenie: trackery reklamowe (DoubleClick, Facebook Pixel, AdSense) osadzają się w stronach A, B, C i mogą śledzić użytkownika przez **to samo cookie** na wszystkich stronach. Blokada third-party cookies **łamie ten mechanizm**.

**Luka w Safari (zamierzona jako wyjątek).**
Inżynierowie Apple zdawali sobie sprawę, że pełna blokada third-party cookies łamałaby legitimate use cases, takie jak **OAuth login** (zaloguj przez Facebook, zaloguj przez Google), **płatności online** (zaloguj przez PayPal), **some embeddable forms**. Wprowadzili więc wyjątek: jeśli użytkownik **interaguje z formularzem** na third-party origin (klika submit), Safari **akceptuje cookie**. Rozumowanie: użytkownik **świadomie angażuje się** z tą zewnętrzną domeną.

**Exploit Google/DoubleClick.**
Google dodał do reklam DoubleClick niewidoczny kod HTML/JavaScript:

```html
<iframe src="ad.doubleclick.net/..." style="display:none; height:0; width:0">
  <form action="https://googleads.g.doubleclick.net/..." method="POST">
    <input type="hidden" name="track" value="1" />
  </form>
  <script>
    document.forms[0].submit();
  </script>
</iframe>
```

Gdy użytkownik odwiedzał stronę z reklamą DoubleClick:
1. Reklama ładowała się w ukrytej ramce (display:none, 0x0 px).
2. JavaScript **automatycznie klikał submit** na niewidocznym formularzu.
3. Safari interpretowała to jako "interakcję użytkownika z formularzem" i **akceptowała cookie DoubleClick**.
4. Cookie stałe (nie session), ważne przez **2 lata**, używane do cross-site tracking.

**Konsekwencja:**
- Miliony użytkowników Safari były śledzeni mimo domyślnych ustawień prywatności.
- Każdy DoubleClick ad na dowolnej stronie "wszczepiał" cookie.
- **Google publicznie chwalił się** na stronie "Advertising Help", że **respektuje ustawienia Safari**: *"if you haven't changed your default Safari settings, your browser already blocks third-party cookies. No additional action is required by users to opt out of personalized advertising from Google."* Tę stronę musiano szybko zmodyfikować po publikacji WSJ.

### Dlaczego to była sprawa wagi ciężkiej

- **Naruszenie Consent Decree FTC z 2011** — Google dopiero rok wcześniej zawarł z FTC porozumienie, w którym zobowiązał się nie wprowadzać w błąd. To pierwsze **formalne naruszenie** Consent Decree, co zwiększyło grawitację prawną.
- **Techniczny charakter** — nie "błąd", nie "pojedynczy inżynier" (jak w Street View Wi-Spy), ale **celowa implementacja produkcyjna** ukryta w warstwie JavaScript reklam.
- **Systemowa skala** — dotknięci byli **wszyscy użytkownicy Safari**, czyli prawie wszyscy użytkownicy iPhone'a globalnie.

---

## Odkrycie

### Kim jest Jonathan Mayer

**Jonathan Mayer** (ur. 1984) — amerykański informatyk i prawnik specjalizujący się w prywatności cyfrowej. Wykształcenie: **Princeton** (BA Computer Science), **Stanford Law School** (JD), **Stanford CS** (PhD). W latach 2011–2013 był **doktorantem Stanford** prowadzącym projekt **Web Privacy Census** — automatyczne skanowanie **milionów stron** pod kątem trackerów. Jego metodologia (OpenWPM, FourthParty) stała się standardem w badaniach prywatności webowej.

Po ujawnieniu Safari Obejście: **Chief Technologist FCC** (2014–2015) za kadencji Toma Wheelera, następnie **Chief Technologist FTC** (2019–2021). Obecnie **assistant professor** na Princeton.

Dodatkowe osiągnięcia:
- Współautor standardu **Do Not Track (DNT)** (2010–2011)
- Współautor ***"The Web Never Forgets"* (2014)** — badania o fingerprintingu przez Canvas API
- Współautor badania pokazującego, że **metadane telefoniczne wystarczą do identyfikacji stanu zdrowia, religii, orientacji seksualnej** osób (2014, argument w debacie o NSA)

### Jak doszło do ujawnienia

Mayer odkrył anomalię, prowadząc **Web Privacy Census 2012**. Jego skrypty automatycznie skanowały top 1000 stron webowych i liczyły cookies każdego typu. Zauważył, że w przeglądarce Safari liczba cookies DoubleClick była **nieproporcjonalnie wysoka** w stosunku do oczekiwań (blokowanie third-party cookies powinno znacznie zmniejszyć liczbę). Analiza reverse engineering kodu reklam DoubleClick ujawniła trick z iframe + form + auto-submit.

Mayer skontaktował się z **Julią Angwin** z *Wall Street Journal*, która prowadziła serię **"What They Know"** — wielomiesięczne śledztwo o trackerach online. Wspólnie z Angwin, Jennifer Valentino-DeVries i Ashkanem Soltanim zweryfikowali ustalenia. Publikacja 17 lutego 2012.

### Pierwsze publikacje

- **17 lutego 2012** — Julia Angwin, Jennifer Valentino-DeVries, "Google's iPhone Tracking", *The Wall Street Journal*
- **17 lutego 2012** — Jonathan Mayer, "Web Policy: Safari Trackers" — techniczny raport Stanford CIS
- **18 lutego 2012** — reakcje w *The New York Times*, *The Guardian*, *Ars Technica*, *The Verge*

---

## Osoby kluczowe

### Odkrywcy

- **Jonathan Mayer** — opisany wyżej.
- **Ashkan Soltani** — niezależny badacz bezpieczeństwa i prywatności, były pracownik Google, później **Chief Technologist FTC** (po Mayerze), obecnie (od 2022) **Executive Director California Privacy Protection Agency (CPPA)** — najważniejszego regulatora prywatności w USA. CPPA egzekwuje CCPA i CPRA.
- **Julia Angwin** — dziennikarka prywatności. Założycielka **The Markup** (2019), redaktorka ProPublica (2014–2018), autorka książek **"Dragnet Nation"** (2014) i **"Stealing MySpace"** (2009). Pozwana i nękana przez dilera pestycydów w 2012 za artykuł o pestycydach DBCP; odmówiła ugody. Nominowana do Pulitzera.
- **Jennifer Valentino-DeVries** — była WSJ, dziś *NYT*; specjalizuje się w inwestygatywnej analityce cyfrowej.

### Regulatorzy

- **FTC** — przewodniczący Jon Leibowitz (2012) podczas kary 22,5 mln USD.
- **Eric Schneiderman** — AG Nowego Jorku, koordynator 37-stanowej akcji.
- **ICO UK** — informacyjnie angażowane, nie nałożyły kary (argument: brak jurysdykcji + "brak istotnej szkody", analogicznie jak w Wi-Spy).

### Prawnicy

- **Richard Lloyd** — były dyrektor **Which?** (brytyjskiej organizacji konsumenckiej), reprezentował 4,4 mln użytkowników iPhone w UK w **Lloyd v. Google**.
- **Hugh Tomlinson KC** — reprezentował Lloyd w UKSC; jeden z czołowych brytyjskich prawników od praw człowieka i prywatności.

### Google

- **David Drummond** — wówczas Chief Legal Officer Google; autor odpowiedzi publicznych.
- **Ginny Marvin** — PR Google.

---

## Reakcja firmy

### Google

**17 lutego 2012** (ten sam dzień co publikacja WSJ) — Google **natychmiast zaprzestał** praktyki. Oficjalny komunikat:

*"The Journal mischaracterizes what happened and why. We used known Safari functionality to provide features that signed-in Google users had enabled. It's important to stress that these advertising cookies do not collect personal information."*

**Obrona Google:**
1. Wyjątek z formularzem w Safari to "known functionality", nie luka.
2. Używali tego dla "features that signed-in Google users had enabled" — np. przyciski +1 (poprzednik Like).
3. Cookies DoubleClick nie zawierały "personal information".

**Dlaczego obrona upadła:**
1. FTC Consent Decree 2011 zabraniał **wprowadzania w błąd** co do prywatności. Google na stronie "Advertising Help" chwalił się respektowaniem ustawień Safari — podczas gdy w kodzie reklam **celowo je obchodził**. To było klasyczne misrepresentation.
2. Sam fakt, że cookie **"nie zawiera PII w sobie"**, nie oznacza, że **nie jest danymi osobowymi** — może być używany jako identyfikator śledzący użytkownika między sesjami.
3. Praktyka była znacząca dla reklamy DoubleClick (miliony identyfikowanych użytkowników), nie tylko dla niszowej funkcji +1.

**Ugody (2012, 2013)** — Google nie przyznał winy (formuła "neither admit nor deny"), zapłacił 22,5 mln FTC + 17 mln stanowe, zobowiązał się do edukacji konsumentów.

---

## Postępowanie prawne

### Jurysdykcje

1. **USA federalne** — FTC
2. **USA stanowe** — 37 stanów w koordynowanej akcji
3. **Wielka Brytania** — Lloyd v. Google, odrzucony 2021
4. **Szereg śledztw UE** — nie zakończyły się karami (przed RODO, trudniej wyegzekwować)

### Podstawa prawna

- **FTC Consent Decree 2011** — główna podstawa kary 22,5 mln
- **FTC Act § 5** — unfair/deceptive practices
- **State consumer protection laws** (37 stanów)
- **UK Data Protection Act 1998** — podstawa Lloyd v. Google
- **ePrivacy Directive art. 5(3)** — cookies require consent

### Kluczowe etapy

| Data | Etap |
|------|------|
| 17 lutego 2012 | Publikacja; Google zaprzestaje praktyki |
| Marzec 2012 | FTC rozpoczyna śledztwo |
| 17 sierpnia 2012 | Kara FTC 22,5 mln USD |
| 18 listopada 2013 | Ugoda 37 stanów 17 mln USD |
| 2015–2017 | Lloyd v. Google w sądach niższych UK |
| 10 listopada 2021 | Lloyd v. Google UKSC — pozew odrzucony |

### Orzecznictwo powiązane

- ***Vidal-Hall v Google* [2015] EWCA Civ 311** — Court of Appeal UK: szkoda niemajątkowa (distress) jest podstawą roszczenia pod DPA 1998.
- ***Lloyd v Google LLC* [2021] UKSC 50** — Sąd Najwyższy UK odrzucił pozew zbiorowy z przesłanki proceduralne. Orzeczenie uważane za **odebranie UK narzędzia pozew zbiorowy** w sprawach prywatności.
- ***Fashion ID v Verbraucherzentrale NRW* (C-40/17, 2019)** — TSUE: właściciele stron z Facebook Like są współadministratorami danych.

---

## Kary i ugody

| Data | Organ | Kwota | Jurysdykcja | Podstawa |
|------|-------|-------|-------------|----------|
| 17 sierpnia 2012 | FTC | 22 500 000 USD | USA federalne | FTC Consent Decree 2011 |
| 18 listopada 2013 | 37 stanów USA | 17 000 000 USD | USA stanowe | Prawo konsumenckie |
| 2017–2021 | UK courts | 0 | UK | Lloyd odrzucony |

**Łącznie: ~39,5 mln USD** + obowiązki zgodności.

---

## Precedensy i implikacje

### Dla prawa USA

- **Rekord FTC 22,5 mln USD** — w 2012 największa kara w historii agencji; po Cambridge Analytica wygląda jak drobna, ale wtedy była przełomem.
- **Precedens dla egzekwowania Consent Decree** — Google był pierwszą firmą, która zapłaciła za naruszenie FTC Consent Decree.
- **Ashkan Soltani w CPPA** — pokazuje, że **whistleblowerzy/badacze** mogą zostać regulatorami i domykać koło.

### Dla prawa UK

- **Lloyd v. Google UKSC 2021** — negatywny precedens. **De facto zniósł class actions** ochrony danych w UK. Problem: każdy powód musi wykazać indywidualną szkodę. Dla milionów osób nękanych cookies to praktycznie niemożliwe.
- **Data Protection and Digital Information Bill (2024)** — częściowa reforma.

### Dla praktyki Big Tech i Apple

- **Eskalacja Apple vs Google** — Safari Obejście to **moment nieodwracalny**. Apple postanowił strategicznie **zróżnicować się od Google przez prywatność**. Kolejne kroki:
  - **2017**: ITP 1.0 (Intelligent Tracking Prevention) — automatyczne wygaszanie cookies
  - **2019**: ITP 2.x — Storage Access API
  - **2020**: Full Third-Party Cookie Blocking
  - **2021**: **App Tracking Transparency (ATT)** — użytkownicy muszą świadomie zgodzić się na tracking
- **ATT kosztowało Meta ~10 mld USD rocznie** (ogłoszenie 2022).
- **Chrome deprecjacja third-party cookies** — zapowiedziana na 2024, wielokrotnie odłożona, obecnie cofnięta w 2024 na rzecz "Topics API" i wyboru użytkownika.

---

## Pozwy zbiorowe

| Sprawa | Sąd | Stan | Wartość | Poszkodowani |
|--------|-----|------|---------|--------------|
| *Lloyd v. Google LLC* | UK Supreme Court | Odrzucony 2021 | 0 | 4,4 mln użytkowników iPhone UK |
| Indywidualne pozwy USA | Różne | Złożone z klasami FTC | Różne | Użytkownicy Safari USA |

---

## Wnioski dla obywateli

### Co to dla mnie znaczy?

Jeśli w 2011–2012 używałeś iPhone'a, Macbooka lub iPada i surfowałeś po internecie — **Google prawdopodobnie śledził cię mimo twoich ustawień prywatności**. Dziś sytuacja jest lepsza dzięki reformom Apple, ale **reklamodawcy ciągle szukają nowych sposobów**, by obchodzić zabezpieczenia. Przykład z A01: "Local Mess" Mety to w istocie **Safari Obejście następnej generacji** — inny trick, ten sam cel.

### Jak się chronić?

1. **Używaj Safari na iPhone** — ma najsilniejszą ochronę przed trackingiem (ITP, ATT). Chrome na iOS pod spodem używa Safari (WebKit) z dodatkowymi trackerami Google.
2. **Na desktopie używaj Firefox z Enhanced Tracking Protection** lub **Brave** (domyślnie blokuje trackery). Firefox ma **Total Cookie Protection** — izoluje ciasteczka per-strona.
3. **Zainstaluj uBlock Origin** — najskuteczniejszy bloker (Firefox, Edge). W Chrome jest ograniczony przez Manifest V3 (od 2024 roku).
4. **Przejrzyj ustawienia prywatności iOS** — Ustawienia → Prywatność i bezpieczeństwo → Śledzenie. Wyłącz "Pozwól aplikacjom prosić o śledzenie" (zablokuje prośby ATT na starcie).
5. **W przeglądarce Safari** — włącz "Zapobiegaj śledzeniu między witrynami" (Ustawienia → Prywatność).
6. **Używaj Private Relay** (iCloud+) na iOS — ukrywa IP przed trackerami.
7. **Dark patterns w banerach cookies**: jeśli strona nie daje równorzędnego "Odrzuć wszystko" (tak samo widocznego jak "Akceptuj wszystko"), **łamie RODO i ePrivacy**. Możesz zgłosić do UODO.

### Jakie mam prawa?

**W UE:**
- **ePrivacy Directive art. 5(3)** — cookies strony trzeciej wymagają **uprzedniej, świadomej zgody**.
- **RODO art. 6** — przetwarzanie danych (w tym z cookies identyfikujących) wymaga podstawy prawnej.
- **RODO art. 7** — zgoda musi być **swobodna, konkretna, świadoma i jednoznaczna**.

**W UK (po Lloyd v. Google):**
- Indywidualne pozwy są nadal możliwe (nie pozew zbiorowy).
- ICO może nakładać kary — w 2024 uchwalono reformę, która częściowo przywraca class actions.

### Gdzie się zgłosić?

- **Polska**: UODO
- **Cookies banner bez równorzędnego rezygnacja**: można zgłaszać do UODO i NOYB (noyb.eu)
- **Ochrona konsumenta**: UOKiK dla mylące interfejsy

### Uwaga dla mediatorów, prawników, stron WWW

Jeśli **prowadzisz stronę internetową kancelarii, fundacji, firmy**:
- Twój cookie banner **musi mieć równorzędne opcje** "Akceptuj" i "Odrzuć" (tak wyraźne i klikalne).
- Używanie **Google Analytics** w UE jest od 2022 **kwestionowane** (kilka DPA, w tym austriackie, holenderskie, francuskie, uznało że narusza RODO przez transfery do USA). Alternatywy: **Matomo** (EU-hostowany), **Plausible Analytics**, **Fathom**.
- **Fashion ID** (TSUE C-40/17) — jeśli masz na stronie Facebook Like button, jesteś **współadministratorem** danych zbieranych przez Meta. To oznacza **wspólną odpowiedzialność**.

---

## Ciekawostki

- **Jonathan Mayer** — odkrywca Safari Obejście — został później **Chief Technologist FCC** (2014–2015) i **Chief Technologist FTC** (2019–2021). Klasyczny przypadek "zmiany strony": badacz → regulator → badacz. Rzadki wzorzec w świecie prywatności.
- **"Do Not Track" (DNT)** — standard, którego Mayer był współautorem (2010–2011). Google **nigdy nie zaimplementował** respektowania DNT w reklamach. Jeden z powodów, dla których Mayer zajął się publikacją: *"Jeśli Google nie respektuje DNT, to ciekawe jak respektuje inne ustawienia prywatności..."*.
- **Ashkan Soltani → California** — został w 2022 szefem **CPPA (California Privacy Protection Agency)**, najsilniejszego regulatora prywatności w USA. CPPA egzekwuje CCPA i CPRA. Soltani zaczynał jako niezależny badacz, pracował z WSJ na Safari Obejście, potem FTC, potem CPPA. Dziś kieruje egzekwowaniem prawa, które uchwalono częściowo w odpowiedzi na praktyki jak Safari Obejście.
- **Internet Explorer też dotknięty** — Microsoft wkrótce po WSJ ogłosił, że Google używa analogicznych technik w IE (trick z **P3P Policy tag**, używany w sposób niewłaściwy). Google potwierdził ("P3P jest przestarzały, nie traktowaliśmy go serio"), ale wywołało to dodatkowe PR negative.
- **FTC 22,5 mln USD to rekord FTC w 2012** — dziś, po karze 5 mld za Cambridge Analytica, wygląda nominalnie. Ale w 2012 to było **największe osiągnięcie agencji**.
- **Akcje Google wzrosły po karze** — inwestorzy zinterpretowali 22,5 mln jako **jednodniowy przychód** Google (który w 2012 wynosił ok. 37 mld USD rocznie, czyli ~100 mln dziennie).
- **Google nie przyznał winy** — ugoda "neither admit nor deny". Standardowa strategia korporacyjna w USA.
- **Symboliczna skala kary FTC 22,5 mln vs przychody Google 2012 (37 mld)** = **0,06% przychodów**. Dla porównania: kara prywatności w przypadku obywatela od UODO może sięgnąć 4% przychodów RODO (5% dochodów osobistych). Big Tech w 2012 miał de facto **niższe progi kar niż obywatele**.
- **Apple vs Google — definiująca rywalizacja**: Safari Obejście zradykalizował Apple. **Steve Jobs** w 2010 w wywiadzie dla *All Things Digital* podkreślał, że "*privacy means people know what they're signing up for, in plain English*". Tim Cook po 2012 zrobił z prywatności **strategiczną różnicę marki Apple** — linie reklamowe typu "*Privacy. That's iPhone.*"
- **Meta ATT hit: 10 mld USD rocznie** — App Tracking Transparency Apple (kwiecień 2021) kosztował Meta około 10 mld USD spadku przychodów reklamowych rocznie (ogłoszenie 2022). Zuckerberg publicznie ostro skrytykował Apple. Strategiczna reakcja Apple zaczęła się wiele lat wcześniej — od Safari Obejście.
- **Chrome i Manifest V3** — od 2024 Chrome ogranicza rozszerzenia blokujące reklamy (Manifest V3). uBlock Origin jest w ograniczonej wersji w Chrome. To jest **przeciwieństwo** kierunku Apple: Google broni modelu reklamowego, Apple atakuje go w imię prywatności.
- **Polska — "Fashion ID"** — wyrok TSUE z 2019 dotyczący właścicieli stron z przyciskiem Facebook Like. Sprawa pierwotnie niemiecka (Verbraucherzentrale NRW). Wyrok ma bezpośrednie znaczenie dla polskich sklepów internetowych, blogów, instytucji publicznych: jeśli masz Facebook Like, jesteś **współadministratorem**.

---

## Źródła

1. Julia Angwin, Jennifer Valentino-DeVries, "Google's iPhone Tracking", *The Wall Street Journal*, 17 lutego 2012. URL: https://www.wsj.com/articles/SB10001424052970204880404577225380456599176 (dostęp: 2026-04-17)

2. Jonathan Mayer, "Web Policy: Safari Trackers", Stanford Center for Internet and Society, 17 lutego 2012. URL: https://cyberlaw.stanford.edu/blog/2012/02/safari-trackers (dostęp: 2026-04-17)

3. Federal Trade Commission, "Google Will Pay $22.5 Million to Settle FTC Charges it Misrepresented Privacy Assurances to Users of Apple's Safari Internet Browser", 9 sierpnia 2012. URL: https://www.ftc.gov/news-events/news/press-releases/2012/08/google-will-pay-225-million-settle-ftc-charges-it-misrepresented-privacy-assurances-users-apples (dostęp: 2026-04-17)

4. National Association of Attorneys General, "37 States and D.C. Reach $17 Million Settlement with Google Over Cookie Policies on Apple Safari Browser", 18 listopada 2013.

5. *Lloyd v Google LLC* [2021] UKSC 50 — wyrok Sądu Najwyższego UK. URL: https://www.supremecourt.uk/cases/docs/uksc-2019-0213-judgment.pdf (dostęp: 2026-04-17)

6. *Vidal-Hall v Google Inc* [2015] EWCA Civ 311 — Court of Appeal UK.

7. Jennifer Valentino-DeVries, Jeremy Singer-Vine, "They Know What You're Shopping For", *WSJ*, 7 grudnia 2012 (seria "What They Know").

8. Apple Safari release notes, ITP documentation (webkit.org, 2017–2024).

9. Kate Brennan, "The legacy of Lloyd v Google: what happens to representative actions now?", *Journal of Data Protection & Privacy*, 2022.

10. Ashkan Soltani, zeznania przed Kongresem 2013, 2019.

11. Jonathan Mayer et al., "Signals of Interest: Identifying Privacy-Sensitive Browsing Behavior", Stanford CS, 2012.

12. *Fashion ID GmbH & Co. KG v Verbraucherzentrale NRW e.V.*, C-40/17, TSUE, 29 lipca 2019.

13. Meta Platforms, Q4 2021 Earnings Call (luty 2022) — ogłoszenie wpływu ATT na przychody.

14. California Privacy Protection Agency — przemówienia Ashkana Soltaniego 2022–2025.

15. The Markup (markup.org) — długoterminowa analiza Safari Obejście i następnych technik, 2020.

---

*Ostatnia aktualizacja: 2026-04-17*
*Karta w bazie: B02_safari_workaround.md*
