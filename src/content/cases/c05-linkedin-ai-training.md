---
id: C05
slug: c05-linkedin-ai-training
group: C
group_label: Apple, Microsoft, LinkedIn
title: LinkedIn AI Training
year_revealed: 2024
last_updated: '2026-04-17'
companies:
- LinkedIn
status: regulatory_monitoring
jurisdictions:
- EU
- UK
- global
legal_basis:
- RODO art. 6
- art. 7
- art. 21
- art. 22
fines:
- amount: 310000000
  currency: EUR
  authority: DPC Irlandia
  date: 2024-10
  category: regulatory_fine
  status: paid
whistleblowers:
- schrems
journalists: []
related_cases:
- A04
- E04
- E02
- B04
- A01
tags:
- trening-ai
- rodo
categories:
- privacy
geo_coords: []
priority: TOP
card_complete: true
word_count: 3782
subtitle: Trenowanie na profilach pracowników bez opt-in
years_active:
- 2003
- 2022
---

# C05 — LinkedIn AI Training: Trenowanie na profilach pracowników bez opt-in

> **Kategoria:** AI training / legitimate interest / opt-out by default / dane zawodowe
> **Firma/firmy:** LinkedIn (Microsoft)
> **Lata:** Wrzesień 2024 (odkrycie) – listopad 2025 (interwencja DPC Irlandia)
> **Status:** Rollout w UE z ograniczeniami; 5-miesięczny monitoring DPC; dodatkowo kara 310 mln € 2024 za behavioral analytics
> **ID karty:** C05

---

## Metadane

| Pole | Wartość |
|------|---------|
| Kraj/region | Globalnie; ogniska postępowań: Irlandia (DPC), UK (ICO), EU krajowe DPA |
| Rok ujawnienia | 18 września 2024 (*404 Media*, *TechCrunch*) |
| Lata trwania praktyki | 2003–2024 (dane użyte do trenowania AI); praktyka trenowania: od ~2022 |
| Łączna kara | **310 000 000 EUR** (DPC Irlandia, październik 2024 — osobna, powiązana sprawa) |
| Waluta | EUR |
| Podstawa prawna | RODO art. 6 (brak ważnej podstawy), art. 7 (warunki zgody), art. 21 (sprzeciw), art. 22 (automated decisions) |
| Sygnalista/odkrywca | ***404 Media*** (pierwsze odkrycie), ***TechCrunch*** (weryfikacja), **DPC Irlandia**, **Dutch DPA (AP)** |
| Liczba poszkodowanych | **1+ mld użytkowników LinkedIn globalnie** (200 mln w EU/EOG) |
| Status (na dziś) | Rollout w UE z ograniczeniami po interwencji DPC (listopad 2025); 5-miesięczny monitoring |

---

## TL;DR

**18 września 2024** — portal *404 Media* (potem kontynuowany przez *TechCrunch*) ujawnił, że **LinkedIn potajemnie zaczął trenować swoje generatywne modele AI na danych użytkowników** — **bez uprzedniego ogłoszenia i bez zgody**. Użytkownicy w USA, UK, Australii, Japonii, Kanadzie, Indiach odkryli w swoich ustawieniach przełącznik **"Data for Generative AI Improvement"**, który był **domyślnie włączony**. LinkedIn **dopiero po publikacji** zaktualizował swoją politykę prywatności, która weszła w życie **18 września 2024**.

W **UE i EOG** LinkedIn nie aktywował trenowania od razu (ze względu na RODO). Zamiast tego w **marcu 2025** notyfikował **irlandzką DPC** o planach rozpoczęcia trenowania **AI na danych EU/EOG od 3 listopada 2025**. Podstawa prawna: **legitimate interest** (art. 6 ust. 1 lit. f RODO). Zakres: publiczne posty, komentarze, profile, **dane do 2003 roku** (22 lata wstecz). DPC **podniosła obawy**, w szczególności co do: (1) zakresu i czasu retencji, (2) ochrony niepełnoletnich, (3) wrażliwych informacji (członkostwo związkowe, wyznanie), (4) prawa sprzeciwu art. 21 RODO.

**7 listopada 2025** — DPC Irlandia opublikowała oświadczenie: LinkedIn **zgodził się na zmiany**: (1) zawężenie zakresu danych i okresu wsteczności, (2) lepsze filtrowanie danych niepełnoletnich (<18 lat), (3) filtry zapobiegające zbieraniu informacji związkowych ze specjalnych LinkedIn Pages i Groups, (4) dedykowany opt-out toggle + formularz sprzeciwu, (5) **5-miesięczny monitoring DPC**. DPC **nie zatwierdziła** praktyki — "*The DPC has not approved, or found compliant, LinkedIn's use of users' personal data for generative AI model training*" — ale nie wszczęła formalnego postępowania karnego.

**Osobno**: **24 października 2024** — DPC nakłada na LinkedIn **karę 310 mln EUR** za **osobne naruszenie RODO** w praktykach analitycznych i reklamowych (oryginalna skarga *La Quadrature du Net* z 2018 we Francji). Podstawy: (1) brak ważnej zgody na przetwarzanie danych stron trzecich, (2) contractual necessity nie usprawiedliwia przetwarzania first-party data, (3) legitimate interests nie usprawiedliwia ani first-party ani third-party data dla analytics.

Sprawa C05 pokazuje **trzy ważne trendy**:
1. **"Legitimate interest" jako podstawa dla AI training** jest kwestionowana przez DPA.
2. **Opt-out by default** dla AI training — standardowa praktyka Mety, Google, LinkedIn, X — jest niezgodna z duchem RODO (art. 7 wymaga *"swobodnie udzielonej, konkretnej, świadomej, jednoznacznej"* zgody).
3. **"Chase-and-regulate"** — DPA reagują **po fakcie**, po wdrożeniu praktyki. Systemowe ograniczenie egzekucji RODO przed wprowadzeniem.

---

## Oś czasu

- **2003** — LinkedIn założony (Reid Hoffman). Początek zbierania danych.
- **2016** — Microsoft kupuje LinkedIn za **26,2 mld USD**.
- **2018** — ***La Quadrature du Net*** (francuska organizacja cyfrowych praw) składa skargi do francuskiego CNIL w sprawie analytics i reklam LinkedIn. Sprawa trafia do irlandzkiej DPC.
- **~2022** — LinkedIn rozpoczyna używanie AI w funkcjach (generatywne sugerowanie tekstu, rekomendacje ofert pracy).
- **Początek 2024** — LinkedIn zaczyna trenować **własne generatywne AI** na danych użytkowników (publicznie ujawnione później).
- **Wrzesień 2024** — LinkedIn **cichaczem** aktywuje trenowanie AI w USA, UK, AU, JP, CA, IN.
- **18 września 2024** — ***404 Media*** jako pierwsi ujawniają (skonkretyzowanym ustawieniem w UI). *TechCrunch* weryfikuje.
- **18 września 2024** — LinkedIn publikuje **aktualizację polityki prywatności** — **tego samego dnia**, co publikacja. *Kolejność podejrzana*: najpierw aktywacja, potem polityka.
- **Wrzesień 2024** — Irish DPC: *"LinkedIn advised us that the policy would include an opt-out... This opt-out is not available to EU/EEA members as LinkedIn is not currently using EU/EEA member data to train or fine-tune these models."*
- **24 października 2024** — DPC **kara 310 mln EUR** (osobna sprawa o behavioral analytics, 2018).
- **Marzec 2025** — LinkedIn **notyfikuje** DPC o planach trenowania AI w EU/EOG od 3 listopada 2025.
- **Wrzesień 2025** — Dutch DPA (AP) publicznie ostrzega o LinkedIn AI training; CNIL (Francja) wydaje wytyczne.
- **Październik 2025** — szereg DPA (IE, NL, FR, DE) kontaktuje LinkedIn.
- **7 listopada 2025** — **DPC oświadczenie**: LinkedIn zgodził się na zmiany. Rollout w EU/EOG od połowy listopada 2025 z ograniczeniami i monitoringiem.
- **Kwiecień 2026** (obecnie) — 5-miesięczny raport LinkedIn oczekiwany przez DPC.

---

## Mechanizm

### Co LinkedIn robi z danymi użytkowników

LinkedIn zbiera od użytkowników:
- **Profile**: imię, nazwisko, zdjęcie, nagłówek, lokalizacja, doświadczenie zawodowe, wykształcenie, umiejętności, certyfikaty, języki, kursy
- **Posty i komentarze** (publiczne)
- **Artykuły** (LinkedIn Pulse)
- **Wiadomości** (**nie** — te są prywatne, ale metadata o kontaktach tak)
- **Interakcje**: lajki, reakcje, udostępnienia
- **Dane analityczne**: kliknięcia, czas spędzony na profilach innych
- **Dane zawodowe**: oferty, na które aplikowałeś, firmy, za którymi śledzisz

### Generatywne AI modele LinkedIn

Modele trenowane (jak ujawnił LinkedIn w Q&A):
1. **Post Suggestions** — sugerowanie tekstu postów (jak Grammarly, ale w LinkedIn).
2. **Message Suggestions** — sugerowane odpowiedzi w LinkedIn Messaging.
3. **Profile Optimization** — sugestie jak ulepszyć profil (nagłówek, "About").
4. **Job Recommendations** — modele rekomendacyjne ofert pracy.
5. **Search Results** — AI-powered wyszukiwanie ludzi i firm.

LinkedIn również wspomniał, że dane **"mogą być używane przez innych dostawców"** — implicite **Microsoft Azure OpenAI**. To oznacza: dane LinkedIn użytkowników **potencjalnie trafiają** do modeli Microsoft OpenAI (konkurenta OpenAI jako takiego).

### Dlaczego to jest problematyczne

**Problem 1: Dane zawodowe to wrażliwe dane.**
Profile LinkedIn zawierają:
- **Przynależność związkową** (jeśli ktoś jest członkiem związku i pisze o tym)
- **Wyznanie religijne** (np. "Katolicki Uniwersytet Lubelski" jako uczelnia; posty o świętach)
- **Poglądy polityczne** (posty, komentarze)
- **Zdrowie** (np. "I've been diagnosed with autism" posty coraz częstsze)
- **Orientację seksualną** (coming-out posty, praca w LGBTQ+ organizacjach)

RODO **art. 9** definiuje te kategorie jako **"szczególne"** i wymaga **explicit consent** dla przetwarzania. LinkedIn używał **legitimate interest**, co DPA uznały za **niewystarczające**.

**Problem 2: Regurgitation i leak.**
Modele AI mogą w odpowiedziach **ujawniać dane treningowe**. Jeśli twój profil LinkedIn został użyty do trenowania, teoretycznie **inny użytkownik pytając AI może otrzymać fragment twojego profilu** lub stylu pisania. Znane są przypadki regurgitation w ChatGPT (cytaty *NYT*, kody GitHub).

**Problem 3: Uniemożliwienie sprzeciwu po fakcie.**
LinkedIn jasno stwierdził: *"Opting out means that LinkedIn and its affiliates won't use your personal data or content on LinkedIn to train models going forward, but does not affect training that has already taken place."* Tłumaczenie: **jeśli twoje dane już są w modelu, nie można ich "oduczyć"**. Model może nadal używać wiedzy z nich.

**Problem 4: Dzieci na LinkedIn.**
Formalnie minimum 16 lat (w niektórych krajach 13). Ale stypendyści, licealiści aplikujący na studia, młode influencerki tworzą profile. Ich dane mogły być użyte bez filtrów.

**Problem 5: Dziennikarze, aktywiści, whistleblowerzy.**
LinkedIn jest używany przez dziennikarzy do budowania sieci kontaktów. Ich profile — wraz z nazwiskami kontaktów — są wrażliwe dla bezpieczeństwa źródeł.

### Ustawienie "Data for Generative AI Improvement"

W interfejsie LinkedIn:
- **Ustawienia → Prywatność danych → Dane do ulepszania generatywnego AI**
- Toggle: **domyślnie włączony**
- Tekst wyjaśniający: wystarczająco zawoalowany, by wielu użytkowników nie rozumiało konsekwencji

Alternatywa: formularz sprzeciwu (Data Processing Objection Form) — **bardziej formalny**, ale **skuteczniejszy** (zaczyna procedurę pod art. 21 RODO).

---

## Odkrycie

### Kim jest *404 Media*

***404 Media*** — nowe amerykańskie niezależne medium (2023), założone przez byłych redaktorów *Motherboard/VICE* (Jason Koebler, Samantha Cole, Joseph Cox, Emanuel Maiberg). Specjalizacja: **technologie i prywatność, AI, nadzór, cyber underground**. Zasłynęło ujawnieniami takich praktyk jak:
- Microsoft Activity Pattern Tracking
- TikTok content moderator trauma
- AI deepfakes i nonconsensual content
- **LinkedIn AI training** (wrzesień 2024)

Model biznesowy: **subskrypcje czytelników** (nie reklamy). 18 września 2024 — Samantha Cole opublikowała pierwszy artykuł o LinkedIn AI opt-out toggle.

### TechCrunch follow-up

***TechCrunch*** (Amanda Silberling, Zack Whittaker) w ciągu godzin zweryfikował i rozszerzył informacje. Kluczowe: zwrócenie uwagi, że LinkedIn **zaktualizował politykę prywatności *tego samego dnia***, co publikacja — sugerując, że **trenowanie zaczęło się wcześniej**, bez polityki.

### DPC i inne DPA — droga regulacyjna

- **DPC Irlandia**: Commissioner Dale Sunderland. Odbył spotkanie z LinkedIn w październiku 2024, następnie negocjacje marzec-październik 2025.
- **Dutch DPA (AP)**: aktywnie ostrzegała publicznie we wrześniu-październiku 2025.
- **CNIL (Francja)**: opublikowała instrukcję opt-out w październiku 2025.
- **ICO (UK)**: zgłoszone skargi od Open Rights Group.
- **noyb (Max Schrems)**: krytyka: *"Opt-out model proves once again to be wholly inadequate"*.

### Pierwsze publikacje

- **18 września 2024** — Samantha Cole, *404 Media*, "LinkedIn Is Training AI on Users Without Having Updated Its Terms"
- **18 września 2024** — *TechCrunch*: "LinkedIn scraped user data for training before updating its terms of service"
- **18 września 2024** — *Reuters*, *Bloomberg*, *The Verge* — szybkie follow-upy
- **19 września 2024** — Ireland's DPC statement
- **7 listopada 2025** — DPC oświadczenie o rollout w UE

---

## Osoby kluczowe

### LinkedIn / Microsoft

- **Ryan Roslansky** — CEO LinkedIn od 2020.
- **Blake Lawit** — General Counsel LinkedIn, autor publicznego komunikatu o zmianach polityki.
- **Ya Xu** — SVP Engineering, Data & AI.
- **Satya Nadella** — CEO Microsoft. Strategiczny nadzór.

### Regulatorzy

- **Dale Sunderland** — Commissioner DPC Irlandia (wraz z Des Hogan jako przewodniczącym).
- **Aleid Wolfsen** — przewodniczący Dutch AP (Autoriteit Persoonsgegevens) do 2024.
- **Marie-Laure Denis** — przewodnicząca CNIL.
- **John Edwards** — UK Commissioner.

### Krytycy

- **Max Schrems / noyb** — najbardziej aktywny krytyk.
- **Mariano delli Santi** — Open Rights Group UK, legal and policy officer.
- ***La Quadrature du Net*** — francuska organizacja, oryginalna skarga 2018.

### Dziennikarze

- **Samantha Cole** (*404 Media*) — główna odkrywczyni.
- **Amanda Silberling, Zack Whittaker** (*TechCrunch*).

---

## Reakcja firmy

### LinkedIn

**Faza 1: ciche wdrożenie (wrzesień 2024).** LinkedIn aktywował trenowanie AI w USA, UK, AU, JP, CA, IN **bez uprzedniego ogłoszenia**. Toggle "Data for Generative AI Improvement" pojawił się w ustawieniach. Użytkownicy, którzy go nie zauważyli = wszyscy byli opt-in.

**Faza 2: reakcja na publikację (18 września 2024).** Tego samego dnia, co *404 Media* publikuje, LinkedIn **aktualizuje politykę prywatności**. Blake Lawit (GC) blog post:
*"As technology and our business evolves, and the world of work changes, we remain committed to providing clarity about our practices and keeping you in control of the information you entrust with us."*

**Faza 3: zatrzymanie w UE (wrzesień 2024).** Ireland's DPC potwierdza, że LinkedIn **nie trenuje na danych EU/EOG** na tym etapie.

**Faza 4: negocjacje z DPA (marzec–listopad 2025).** LinkedIn zgłasza plany do DPC marzec 2025. Negocjacje o zakres.

**Faza 5: ograniczony rollout w UE (listopad 2025+).** Zakres zawężony, opt-out poprawiony, dzieci wykluczone, filtry dla wrażliwych.

**Uwaga**: LinkedIn **pierwotnie ogłosił** na LinkedIn własnym blog post o polityce — i **wyłączył komentarze pod postem**, mimo że w innych postach komentarze były włączone. PR strategy: **nie pozwolić użytkownikom publicznie wyrażać niezadowolenia**.

### Microsoft

Macierzysta firma (od 2016) — Satya Nadella w publicznych komunikatach **nie odniósł się bezpośrednio** do sprawy, pozostawiając komunikację LinkedIn.

---

## Postępowanie prawne

### Jurysdykcje

- **Irlandia** — DPC (lead supervisory authority pod one-stop-shop)
- **Niderlandy** — AP
- **Francja** — CNIL
- **Wielka Brytania** — ICO
- **USA, Australia, Japonia, Kanada, Indie** — brak formalnej regulacji AI training (na razie)

### Podstawa prawna

- **RODO art. 6 ust. 1 lit. f** — legitimate interest — **kwestionowana** przez DPC dla AI training
- **RODO art. 7** — warunki zgody
- **RODO art. 9** — specjalne kategorie danych (członkostwo związkowe, zdrowie, wyznanie)
- **RODO art. 13, 14** — obowiązek informacyjny
- **RODO art. 21** — prawo sprzeciwu
- **RODO art. 22** — zautomatyzowane podejmowanie decyzji
- **RODO art. 35** — DPIA (Data Protection Impact Assessment)

### Kluczowe etapy

| Data | Etap |
|------|------|
| 18 września 2024 | Ujawnienie |
| Wrzesień 2024 | Reakcja DPC |
| 24 października 2024 | Kara 310 mln EUR (osobna sprawa) |
| Marzec 2025 | LinkedIn notyfikuje DPC o planach UE |
| Listopad 2025 | DPC oświadczenie, zmiany warunków, rollout w UE |
| Kwiecień 2026 | 5-miesięczny raport (oczekiwany) |

### Powiązane orzecznictwo

- ***La Quadrature du Net* vs LinkedIn** — oryginalna skarga 2018.
- **TSUE C-252/21, Meta v. Bundeskartellamt (2023)** — precedens zgody w kontekście behavioral advertising.
- **Sprawa Meta A09 i A10** — analogiczne wyzwania dotyczące legitimate interest.
- **EDPB Opinion 28/2024 on AI training data** — kluczowa opinia EDPB o AI training.

---

## Kary i ugody

| Data | Organ | Kwota | Jurysdykcja | Podstawa |
|------|-------|-------|-------------|----------|
| 24 października 2024 | DPC Irlandia | **310 000 000 EUR** | UE | RODO art. 6 (analytics/advertising, sprawa 2018) |

**Uwaga:** kara 310 mln EUR nie dotyczy bezpośrednio AI training, ale **powiązanej sprawy** behavioral advertising (oryginalna skarga 2018). Została ogłoszona **miesiąc po** publikacji o AI training — część szerszej strategii DPC wobec LinkedIn.

**Za AI training — brak kary**, ale **groźba** z DPC wystarczyła, by LinkedIn ustąpił.

---

## Precedensy i implikacje

### Dla prawa UE

- **EDPB Opinion 28/2024 on AI training** (grudzień 2024) — opublikowana **w sam środek sporu LinkedIn**. Wyznaczyła standardy dla training AI na danych osobowych. Kluczowe: legitimate interest **może być** podstawą, ale musi być **bardzo ścisła** DPIA, **lepsze informowanie**, **efektywny opt-out**, **filtrowanie wrażliwych danych**.
- **Sprawa LinkedIn jako test case** dla EDPB guidelines.

### Dla prawa USA

- **Brak federalnej regulacji** AI training. USA śledzi praktyki, ale nie blokuje.
- **California AB 2013 (2024)** — wymaga transparentności co do danych treningowych AI.

### Dla praktyki Big Tech

- **OpenAI, Anthropic, Google DeepMind** — wszystkie zwiększyły transparentność co do danych treningowych.
- **Meta AI** — wstrzymał plany trenowania na EU user data (2024), restartował po zgodzie DPA w 2025.
- **X (Twitter)** — pod Elonem Muskiem używa danych do trenowania Grok; opt-out podobny do LinkedIn.
- **Reddit, Stack Overflow** — sprzedają dane treningowe firmom AI (kontrowersyjne — użytkownicy nie zgadzali się).

### Impuls dla **model cards** i **training data disclosure**

Sprawa przyspieszyła wymóg, by modele AI publikowały **zestawy treningowe** (lub ich charakterystyki). EU AI Act (2024/1689) **art. 53** — wymagania transparentności dla general-purpose AI.

---

## Pozwy zbiorowe

Brak znanych formalnych pozwów zbiorowych (na dzień obecny). Potencjalna możliwość:
- **USA** — class action pod stanowe prawo prywatności (Illinois BIPA teoretycznie, ale dotyczy biometrii).
- **UE** — pozwy grupowe pod RODO art. 82 możliwe, ale Lloyd v. Google (UK) zniechęcił.

---

## Wnioski dla obywateli

### Co to dla mnie znaczy?

Jeśli masz konto LinkedIn — **twoje dane prawdopodobnie są w modelach AI**. Dla użytkowników w USA, UK, AU, JP, CA, IN — trening **już się odbył** i nie da się go "odwrócić". Dla UE — LinkedIn deklaruje, że nie trenuje na danych EU aż do listopada 2025, ale to bazowało na zgłoszeniu LinkedIn — trudne do weryfikacji.

Co zawiera twój profil LinkedIn? Często **więcej niż myślisz**:
- Historia całej kariery zawodowej (datowane, z firmami)
- Sieć kontaktów (widoczna dla connections)
- Umiejętności, języki, kursy
- Poglądy (z postów)
- W niektórych przypadkach: dane wrażliwe (wyznanie, związki, zdrowie)

### Jak się chronić?

**Natychmiastowe kroki (3 minuty):**

1. **Wyłącz AI training** w LinkedIn:
   - Ustawienia → Prywatność danych → **Dane do ulepszania generatywnego AI** → WYŁĄCZ
   - Na mobile: profil → Ustawienia → Prywatność danych → AI setting
2. **Złóż formalny sprzeciw** pod art. 21 RODO:
   - Ustawienia → Prywatność danych → **Formularz sprzeciwu wobec przetwarzania danych** → wypełnij
3. **Sprawdź, co LinkedIn wie o tobie**:
   - Ustawienia → Prywatność danych → **Pobierz dane** → żądaj pełnego archiwum. Dostaniesz ZIP ze wszystkim (zazwyczaj w 24h).

**Długoterminowo:**

4. **Redukuj profil LinkedIn**:
   - Usuń wrażliwe informacje z "About" (wyznanie, poglądy, status zdrowotny)
   - Archiwizuj stare posty (Twoje posty → Archiwizuj)
   - Zmień ustawienie widoczności profilu (publiczny/połączenia/nikt)
5. **Wyłącz "Research data"** — oddzielne ustawienie, sprawdź.
6. **Rozważ usunięcie konta**:
   - Ustawienia → Konto → Zamknij konto
   - Ale uwaga: LinkedIn może zachować dane przez pewien czas po usunięciu

### Jakie mam prawa?

**W UE (RODO):**
- **Art. 21** — prawo sprzeciwu wobec przetwarzania na legitimate interest. Bardzo silne w kontekście AI training.
- **Art. 15** — prawo dostępu do swoich danych.
- **Art. 16** — prawo sprostowania.
- **Art. 17** — prawo do bycia zapomnianym ("right to erasure").
- **Art. 82** — prawo do odszkodowania za szkodę.

**Uwaga**: **art. 17 nie wymusza "oduczenia" modelu**. Jeśli twoje dane już weszły do modelu treningowego, **technicznie nie da się ich cofnąć** bez przekształcenia całego modelu. Prawo do bycia zapomnianym wobec AI training jest **obszarem rozwojowym** (EDPB Opinion 28/2024).

**W USA:**
- **Kalifornia CCPA/CPRA** — ograniczone prawo do "opt out of sale/share". Californians mogą się sprzeciwić.
- **Illinois BIPA** — tylko biometria.
- **Federalne** — brak praw.

### Gdzie się zgłosić?

- **Polska**: UODO
- **UE**: krajowy DPA (dla LinkedIn: DPC Irlandia przez one-stop-shop)
- **UK**: ICO
- **noyb**: noyb.eu — prowadzi skargi strategiczne

### Uwaga dla mediatorów, prawników, HR profesjonalistów

**Dla rekruterów i HR:**
1. Jeśli używasz LinkedIn Recruiter + AI features, **podlegasz pod DPIA** dla procesu przetwarzania danych kandydatów.
2. **Art. 22 RODO** — decyzje zautomatyzowane w rekrutacji mogą być zakazane.
3. Kandydat ma prawo znać, że **AI analizowało jego profil** przed decyzją.

**Dla mediatorów i prawników:**
1. Jeśli twój profil LinkedIn jest bogaty w dane wrażliwe — **rozważ ograniczenie** widoczności.
2. **Cyberstalking po rozwodzie** — były partner może używać LinkedIn jako źródła informacji o nowym miejscu pracy, zmianach w życiu, sieci kontaktów. Rozważ wyłączenie widoczności **Your Network** i **Your Recent Activity**.
3. **Dla klientów w sytuacji kryzysowej** — rekomenduj czasowe ograniczenie profilu lub jego archiwizację.

**Dla dziennikarzy i aktywistów:**
4. Twoja sieć LinkedIn może **ujawniać źródła**. Connections są widoczne dla innych connections.
5. Rozważ **drugie konto** dla pracy publicznej vs osobistej.

---

## Ciekawostki

- **"Tego samego dnia, co publikacja"** — LinkedIn zaktualizował politykę prywatności **18 września 2024** — w tym samym dniu, co *404 Media* publikowało ujawnienie. Krytycy: LinkedIn **nie mógł** zaktualizować polityki na zgodnie ze swoimi zwyczajami (zwykle aktualizacje ogłaszane na 30 dni przed). To było **tłumienie kryzysu**, nie normalna aktualizacja.
- **Wyłączone komentarze** — LinkedIn na swoim postie o AI training **wyłączył komentarze**, mimo że w innych postach były włączone. PR strategia: nie pozwolić użytkownikom publicznie wyrażać niezadowolenia w tym samym miejscu, gdzie się ogłasza politykę.
- **22 lata danych** — LinkedIn zaplanował używać danych **od 2003 roku** (data założenia). To oznacza: **pierwszy post, który zamieściłeś jako 19-letni student**, mógł zostać użyty do trenowania AI 22 lata później. Retroaktywność **bez zgody**.
- **"Data for generative AI improvement"** — nazwa ustawienia zaprojektowana, by wyglądać nieszkodliwie. "Improvement" sugeruje pomoc dla użytkownika; w rzeczywistości: trening modelu biznesowego LinkedIn.
- **Osobna kara 310 mln EUR** — ironia: DPC nakłada 310 mln EUR **miesiąc po** wybuchu AI training sprawy. Kara dotyczy **innej** sprawy (behavioral analytics z 2018), ale timing sugeruje, że DPC **używa tej kary jako sygnału** do LinkedIn: *"nie próbuj z AI training tego samego, co z analytics"*.
- **La Quadrature du Net** — francuska organizacja, która złożyła oryginalną skargę w 2018. 6 lat trwała sprawa. Komentarz dyrektor La Quadrature: *"Six years to a fine. Facebook got €1.2 billion in 4 years. Justice moves slowly, but it moves."*
- **Microsoft dystans** — Satya Nadella nie odnosił się bezpośrednio do sprawy. Microsoft prowadzi LinkedIn jako **"standalone"** — ale wszystkie decyzje AI są **koordynowane** z szerszą strategią Azure OpenAI.
- **EDPB Opinion 28/2024** — wydana **grudnia 2024**, po publikacji o LinkedIn. Ustala **framework** dla AI training na danych osobowych: musi być **DPIA**, **informowanie**, **efektywny opt-out**, **filtrowanie wrażliwych**. Sprawa LinkedIn bezpośrednio wpłynęła.
- **Polski LinkedIn** — w Polsce LinkedIn ma ~4 mln użytkowników (2024). Wielu specjalistów HR, rekruterów, prawników, menedżerów ma bogate profile. Polski UODO **nie wszczął osobnego postępowania** (sprawa pod DPC Irlandia), ale **tłumaczenia** zmian ustawień opublikował w 2025.
- **"Opt-out vs opt-in"** — fundamentalna różnica. **Opt-in** (trzeba aktywnie zgodzić się) → niewielu użytkowników zgodziłoby się na AI training. **Opt-out** (domyślnie włączone, trzeba aktywnie wyłączyć) → 95%+ użytkowników **nie wyłącza**. Nawet jeśli zauważą, inercja wygrywa. To dlatego Big Tech **preferuje opt-out** dla praktyk, które nie chce wyraźnie ogłaszać.
- **noyb Mariano delli Santi**: *"The opt-out model proves once again to be wholly inadequate to protect our rights: the public cannot be expected to monitor and chase every single online company that decides to use our data to train AI. Opt-in consent isn't only legally mandated, but a common-sense requirement."*
- **Signal not on LinkedIn** — wielu pracowników firm technologicznych świadomie **nie ma LinkedIn**. Meredith Whittaker (Signal) jest wyjątkiem — ma LinkedIn, ale bardzo ograniczony. Moxie Marlinspike (były CEO Signal) — **nie ma** LinkedIn.
- **Reddit/Stack Overflow precedent** — obie firmy **sprzedają dane** firmom AI (OpenAI, Google DeepMind, Anthropic). Społeczność Stack Overflow w 2024 zorganizowała **strike** przeciw temu. Reddit miał serię protestów 2023–2024. LinkedIn uniknął takiej mobilizacji — **użytkownicy LinkedIn są bardziej pasywni** niż Reddit.
- **AI training for hiring decisions** — LinkedIn AI może być używane przez firmy do **filtrowania kandydatów**. To podlega pod **art. 22 RODO** (zakaz decyzji wyłącznie zautomatyzowanych) i **NYC Local Law 144** (wymaga audytu bias AI w rekrutacji, 2023).

---

## Źródła

1. Samantha Cole, "LinkedIn Is Training AI on Users Without Having Updated Its Terms", *404 Media*, 18 września 2024. URL: https://www.404media.co/linkedin-is-training-ai-on-users-without-having-updated-its-terms/ (dostęp: 2026-04-17)

2. Amanda Silberling, Zack Whittaker, "LinkedIn scraped user data for training before updating its terms of service", *TechCrunch*, 18 września 2024. URL: https://techcrunch.com/2024/09/18/linkedin-scraped-user-data-for-training-before-updating-its-terms-of-service/ (dostęp: 2026-04-17)

3. Data Protection Commission Ireland, "DPC statement on LinkedIn AI Training", 7 listopada 2025. URL: https://www.dataprotection.ie/en/news-media/latest-news/dpc-statement-linkedin-ai-training (dostęp: 2026-04-17)

4. Data Protection Commission Ireland, decyzja w sprawie LinkedIn — kara 310 mln EUR, 24 października 2024.

5. Blake Lawit, "Sharing our AI commitments", LinkedIn Official Blog, wrzesień 2024.

6. European Data Protection Board, "Opinion 28/2024 on certain data protection aspects related to the processing of personal data in the context of AI models", grudzień 2024. URL: https://www.edpb.europa.eu

7. CNIL, wytyczne opt-out dla LinkedIn AI training, październik 2025.

8. Autoriteit Persoonsgegevens (Dutch DPA), publiczne ostrzeżenie o LinkedIn AI training, październik 2025.

9. Irish Legal News, "LinkedIn changes AI plan after DPC intervention", 10 listopada 2025.

10. MLex, "LinkedIn revises EU AI training plans after Irish regulator's risk flagging", 7 listopada 2025.

11. IAPP, "Irish DPC details legitimate interest prong of its LinkedIn enforcement action", listopad 2024.

12. Pinsent Masons (Andreas Carney), "LinkedIn changes gen-AI training plans after data watchdog intervenes", grudzień 2025.

13. Open Rights Group, call to ICO, wrzesień 2024.

14. noyb, statement on LinkedIn AI training, wrzesień 2024.

15. EU AI Act (Regulation (EU) 2024/1689).

---

*Ostatnia aktualizacja: 2026-04-17*
*Karta w bazie: C05_linkedin_ai.md*
