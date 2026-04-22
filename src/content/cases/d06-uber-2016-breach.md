---
id: D06
slug: d06-uber-2016-breach
group: D
group_label: Amazon, Uber
title: Uber 2016 breach
year_revealed: 2017
last_updated: '2026-04-17'
companies:
- Uber Technologies
status: settled
jurisdictions:
- US
- global
legal_basis:
- Obstruction of justice
- misprision of felony
- breach notification laws
- FTC Act
fines:
- amount: 148000000
  currency: USD
  authority: 50 stanów USA
  date: 2018-09
  category: state_attorney_general
  status: paid
- amount: 50000
  currency: USD
  authority: Sąd federalny
  date: 2023-05
  category: class_action_settlement
  status: paid
whistleblowers: []
journalists: []
related_cases:
- D05
- D04
- E01
- C03
- B06
tags:
- pracownicy
- wyciek-danych
categories:
- privacy
geo_coords: []
priority: TOP
card_complete: true
word_count: 3190
subtitle: Joe Sullivan ukrył wyciek 57 mln rekordów — pierwszy na świecie skazany CISO
years_active:
- 2016
- 2017
---

# D06 — Uber 2016 breach: Joe Sullivan ukrył wyciek 57 mln rekordów — pierwszy na świecie skazany CISO

> **Kategoria:** Wyciek danych / ukrywanie incydentu / criminal liability executives / bug bounty abuse
> **Firma/firmy:** Uber Technologies
> **Lata:** Listopad 2016 (wyciek), listopad 2017 (publiczne ujawnienie), październik 2022 (skazanie)
> **Status:** Zakończone — Sullivan skazany; 9th Circuit potwierdził 2025; Uber ugoda 148 mln USD 2018
> **ID karty:** D06

---

## Metadane

| Pole | Wartość |
|------|---------|
| Kraj/region | USA federalne i stanowe; dane dotknęły klientów globalnie |
| Rok ujawnienia | Listopad 2017 (publiczne — ukryte od 2016) |
| Lata trwania praktyki | Listopad 2016 – listopad 2017 (12 miesięcy ukrywania) |
| Łączna kara | **148 000 000 USD** (50 stanów 2018) + wyrok Sullivan; skazanie karne pierwsze w historii CISO |
| Waluta | USD |
| Podstawa prawna | Obstruction of justice (18 USC § 1505); misprision of felony (18 USC § 4); breach notification laws (50 stanów); FTC Act |
| Sygnalista/odkrywca | Wewnętrzne zgłoszenia + nowa administracja Uber pod Dara Khosrowshahi (2017) |
| Liczba poszkodowanych | **57 milionów** klientów + 600 000 kierowców USA (nr prawa jazdy) |
| Status (na dziś) | Sullivan: 3 lata probation + 50 000 USD; Uber: 148 mln USD ugoda; 9th Circuit potwierdził 13.03.2025 |

---

## TL;DR

**14 listopada 2016** — dwóch hakerów (**Brandon Charles Glover** i **Vasile Mereacre**) włamało się do serwera Uber w **Amazon S3** używając **klucza AWS** znalezionego na prywatnym GitHub pracownika Uber. Ukradli dane **57 milionów kont** — w tym **600 000 numerów prawa jazdy amerykańskich kierowców Uber**. Hakerzy skontaktowali się z Uber, żądając **okupu**.

**Joe Sullivan** — **Chief Security Officer** (CSO) Uber od 2015, wcześniej CSO Facebook i federalny prokurator — odebrał telefon. Wybrał radykalne podejście: **ukrył wyciek przed władzami**.

Kontekst: zaledwie **10 dni wcześniej** Sullivan **zeznawał pod przysięgą przed FTC** ws. wcześniejszego wycieku Uber z 2014 (50 000 kierowców). Ujawnienie drugiego, znacznie większego wycieku, **w kontekście aktywnego śledztwa FTC**, byłoby katastrofalne. Sullivan powiedział podwładnemu: ***"We can't let this get out"*** (cytowane w dokumentach sądowych).

Plan Sullivana:
1. **Nie informować FTC** (które prowadziło śledztwo).
2. **Nie informować klientów** (mimo obowiązków stanowych).
3. **Wypłacić hakerom 100 000 USD w Bitcoin** przez **bug bounty program** Uber (HackerOne), udając, że to "bug bounty reward".
4. **Zmusić hakerów do podpisania NDA** (non-disclosure agreement), w którym **fałszywie oświadczyli**, że nie pobrali danych.
5. **Wewnętrznie** traktować incydent jako "bug bounty discovery", nie "breach".

**Travis Kalanick** (CEO) został poinformowany. Autoryzował plan Sullivana.

**Czerwiec 2017** — Kalanick rezygnuje po serii skandalów. **Sierpień 2017** — **Dara Khosrowshahi** obejmuje CEO. Nowy Chief Legal Officer **Tony West** (były Associate AG USA) odkrywa historię, powiadamia regulatorów.

**21 listopada 2017** — Khosrowshahi **publicznie ujawnia** wyciek i fakt jego ukrywania. **Sullivan zwolniony**.

**Wrzesień 2018** — 50 stanów USA zawiera wspólną ugodę z Uber: **148 mln USD** (za breach notification failures; obejmuje także sprawy D04, D05).

**20 sierpnia 2020** — **DOJ składa zarzuty karne** przeciw Sullivan: **obstruction of justice** (utrudnianie śledztwa FTC) + **misprision of felony** (ukrywanie wiedzy o popełnionym przestępstwie federalnym).

**5 października 2022** — **federalna ława przysięgłych w San Francisco** jednomyślnie skazuje Sullivan na oba zarzuty. **Pierwszy w historii CISO** skazany za karne ukrywanie wycieku.

**4 maja 2023** — sędzia **William H. Orrick** wydaje wyrok: **3 lata probacji** (zamiast 15 miesięcy więzienia, które proponowali prokuratorzy) + **50 000 USD kary** + **200 godzin prac społecznych**. Obronie: niespodziewanie lekki wyrok.

**13 marca 2025** — **9th Circuit Court of Appeals** (sędzia **Mary McKeown**) **jednogłośnie** potwierdza wyrok: *"even if Sullivan believed the hackers were unauthorized... he could not reasonably believe that treating the hack as a bug bounty and having the hackers sign NDAs cleansed the illegal conduct."*

**Precedens:** D06 jest **pierwszym w historii** skazaniem CISO za karne mishandling breach. Stała się **kanoniczną sprawą** w cybersecurity law — każdy podręcznik corporate security compliance zawiera teraz case study *U.S. v. Sullivan*. **SEC Cybersecurity Disclosure Rules (2023)** — bezpośrednio inspirowane sprawą.

---

## Oś czasu

- **Wrzesień 2014** — pierwszy wyciek Uber: **50 000 kierowców**. FTC rozpoczyna śledztwo.
- **Luty 2015** — Uber informuje tylko **50% dotkniętych** kierowców.
- **Kwiecień 2015** — Joe Sullivan zatrudniony jako **CSO Uber** (od Facebook, gdzie był CSO 2008–2015).
- **Czerwiec 2016** — Uber i inne dane aplikacji (w tym stron trzecich) na **GitHub** niezabezpieczonych. Klucze AWS widoczne publicznie.
- **Listopad 2016** — nowi hakerzy Glover i Mereacre odkrywają klucze AWS na GitHub.
- **14 listopada 2016** — hakerzy włamują się do Uber S3, kradną **57 mln rekordów**.
- **4 listopada 2016** — **Sullivan zeznaje pod przysięgą przed FTC** ws. 2014 breach.
- **14 listopada 2016** — **10 dni po zeznaniu** — hakerzy kontaktują Sullivan z żądaniem okupu.
- **Listopad 2016** — Sullivan, z aprobatą Kalanicka, autoryzuje wypłatę **100 000 USD w Bitcoin** przez HackerOne (bug bounty program). Hakerzy podpisują NDA.
- **Listopad 2016 – Listopad 2017** — **12 miesięcy ukrywania**. Sullivan prezentuje incydent wewnętrznie jako "bug bounty discovery".
- **Sierpień 2017** — Dara Khosrowshahi CEO.
- **Jesień 2017** — Tony West (nowy CLO) i zewnętrzna kancelaria odkrywają historię.
- **21 listopada 2017** — Khosrowshahi **publicznie ujawnia** wyciek. Sullivan **zwolniony**.
- **Kwiecień 2018** — FTC drugi consent decree (obejmuje D04, D05, D06).
- **Wrzesień 2018** — 50 stanów USA: **148 mln USD** ugoda.
- **2019** — hakerzy Glover i Mereacre skazani za swoje czyny (nie Sullivana).
- **20 sierpnia 2020** — DOJ składa zarzuty karne przeciw Sullivan.
- **5 września 2022** — początek procesu Sullivan w N.D. California.
- **5 października 2022** — **ława przysięgłych skazuje** Sullivana jednomyślnie na oba zarzuty.
- **4 maja 2023** — **wyrok Sullivana**: 3 lata probacji + 50 000 USD + 200 godzin prac społecznych. Sędzia William H. Orrick.
- **Czerwiec 2023** — Sullivan apeluje.
- **13 marca 2025** — **9th Circuit Court of Appeals** potwierdza wyrok jednogłośnie. Sędzia Mary McKeown (Clinton appointee) autorka opinii.

---

## Mechanizm

### Jak doszło do wycieku

**Krok 1: Klucze AWS na GitHub.**
Programiści Uber, w tym freelancerzy, wgrywali fragmenty kodu na **osobiste repositoria GitHub**. Niektóre zawierały **AWS access keys** (klucze do Amazon S3, gdzie Uber przechowywał dane).

**Krok 2: Hakerzy skanują GitHub.**
Glover i Mereacre używali automatycznych narzędzi do skanowania publicznych repo GitHub w poszukiwaniu kluczy AWS. Znaleźli klucze Uber.

**Krok 3: Włamanie do S3.**
Używając kluczy, hakerzy pobrali **pełną bazę klientów Uber z Amazon S3**:
- 57 mln kont — imię, email, telefon
- 600 000 amerykańskich kierowców — numery prawa jazdy
- **Nie zostały skradzione**: numery kart kredytowych, historia podróży (w tych plikach)

**Krok 4: Żądanie okupu.**
Hakerzy skontaktowali się z Uber (email do security@uber.com) żądając **100 000 USD za nie-upublicznienie**.

### Plan Sullivan — "uczynić to bug bounty"

**Sullivan wybiera bug bounty jako pretext:**

1. **HackerOne** — platforma bug bounty używana przez Uber. Normalnie: jeśli etyczny haker znajdzie lukę, zgłasza przez HackerOne i otrzymuje nagrodę (zwykle 500–10 000 USD).

2. **Sullivan zlecił** przygotowanie wypłaty 100 000 USD **przez HackerOne**, traktując hakerów jako "etyczne znalezisko".

3. Hakerzy podpisali **NDA**, w którym **fałszywie oświadczyli**, że **nie pobrali danych**. To było kluczowe — NDA zawierało kłamstwo pod groźbą odpowiedzialności kontraktowej.

4. Sullivan wewnątrz Uber prezentował: *"znaleźliśmy lukę, wypłaciliśmy bug bounty, problem rozwiązany"*.

5. **Nie zgłosił FTC.** Nie zgłosił stanom (breach notification). Nie zgłosił klientom.

### Cytat "We can't let this get out"

Sullivan do podwładnego (później ujawnione w dokumentach sądowych): *"We can't let this get out."* Dalej: *"This would play very badly based on our previous assertions to the FTC."*

Ten cytat był **kluczowy** w procesie karnym — pokazywał **świadomość bezprawności**.

---

## Odkrycie

### Wewnętrzne ujawnienie (2017)

Po rezygnacji Kalanicka (czerwiec 2017) i przyjęciu CEO przez Khosrowshahi (sierpień 2017):
- Nowy **Chief Legal Officer Tony West** (wcześniej Associate AG USA, brat-szwagier Kamali Harris)
- Zewnętrzna kancelaria **Latham & Watkins** — audyt wszystkich materiałów FTC
- Odkrycie anomalii w **bug bounty wypłatach** (100 000 USD było niezwykle wysokie)
- Odkrycie korespondencji email Sullivan z hakerami
- **Październik–listopad 2017** — pełne dochodzenie wewnętrzne

### Publiczne ogłoszenie (21 listopada 2017)

**Dara Khosrowshahi**, blog post: *"You may be asking why we are just talking about this now. I had the same question, so I immediately asked for a thorough investigation of what happened and how we handled it."*

Khosrowshahi ogłosił:
- Fakt wycieku 57 mln rekordów
- Fakt wypłaty 100 000 USD "outside our bug bounty program"
- **Zwolnienie Sullivan** i jego deputy
- Ofertę darmowego credit monitoring dla dotkniętych kierowców

### DOJ — zarzuty karne

**20 sierpnia 2020** — DOJ pod nowym US Attorney N.D. California Stephanie Hinds składa zarzuty. To **pierwsze w historii** federalne zarzuty karne wobec CISO za mishandling breach.

### Pierwsze publikacje

- **21 listopada 2017** — Bloomberg — pierwsza historia (Eric Newcomer, Brad Stone)
- **21 listopada 2017** — Uber official blog (Dara Khosrowshahi)
- **22 listopada 2017** — NYT, WSJ, WaPo, Reuters, TechCrunch
- **20 sierpnia 2020** — DOJ announcement
- **5 października 2022** — verdict coverage
- **13 marca 2025** — 9th Circuit ruling

---

## Osoby kluczowe

### Uber

- **Joe Sullivan** — CSO 2015–2017. Wcześniej CSO Facebook (2008–2015), federalny prokurator (2000s).
- **Travis Kalanick** — CEO, autoryzował plan Sullivana.
- **Dara Khosrowshahi** — CEO od sierpnia 2017, ujawnił sprawę.
- **Tony West** — Chief Legal Officer od 2017, odkrył.
- **Salle Yoo** — General Counsel 2013–2017. Jej zespół prawny **zatwierdził** plan Sullivana.
- **Craig Clark** — zastępca Sullivana, także zwolniony 2017.

### Hakerzy

- **Brandon Charles Glover** — 26 lat, Floryda.
- **Vasile Mereacre** — 23 lata, Toronto, Kanada.
- Obaj skazani 2019 za ataki na LinkedIn i innych (nie Uber breach konkretnie).

### Prokuratorzy

- **Stephanie Hinds** — U.S. Attorney N.D. California, złożyła zarzuty.
- **Andrew Dawson, Vanessa Baehr-Jones** — Assistant U.S. Attorneys, prowadzili sprawę.

### Sędziowie

- **William H. Orrick** — United States District Judge, N.D. California. Nominowany przez Obama 2013.
- **Mary McKeown** — Senior U.S. Circuit Judge, 9th Circuit. Nominowana przez Clinton.

### Obrońcy Sullivana

- **David Angeli, Lauren K. Martin** — Angeli Law Group (Portland, OR).
- **Argumenty obrony**: Sullivan nie był prawnikiem, traktował incydent zgodnie z opiniami General Counsel Yoo.

---

## Reakcja firmy

### Uber pod Kalanickiem (2016–2017)

**Plan**: ukryj.
**Metoda**: bug bounty + NDA.
**Autoryzacja**: Kalanick + Sullivan + Yoo.

### Uber pod Khosrowshahi (2017+)

**Ujawnienie**: 21 listopada 2017.
**Kooperacja**: pełna współpraca z DOJ w śledztwie przeciw Sullivan.
**Reforma**:
- Nowy CSO
- Obowiązkowe szkolenia breach response
- Polityka "disclosure first"
- Eksterne audyty bezpieczeństwa

---

## Postępowanie prawne

### Jurysdykcje

- USA federalne — DOJ criminal, FTC civil
- USA stanowe — 50 stanów ugoda 2018

### Podstawa prawna

- **Obstruction of justice** (18 USC § 1505) — utrudnianie śledztwa FTC
- **Misprision of felony** (18 USC § 4) — ukrywanie wiedzy o przestępstwie federalnym
- **Breach notification laws** — 50 stanów (różne terminy zgłoszenia)
- **FTC Act § 5** — unfair/deceptive practices

### Kluczowe etapy

| Data | Etap |
|------|------|
| 14 listopada 2016 | Wyciek |
| Listopad 2016 – 2017 | Ukrywanie |
| 21 listopada 2017 | Publiczne ujawnienie |
| Kwiecień 2018 | FTC drugi consent decree |
| Wrzesień 2018 | 148 mln USD ugoda |
| 20 sierpnia 2020 | Zarzuty karne Sullivan |
| 5 października 2022 | **Skazanie jury** |
| 4 maja 2023 | Wyrok (probacja) |
| 13 marca 2025 | **9th Circuit potwierdza** |

### Orzecznictwo powiązane

- **US v. Martoma** — insider trading, podobne koncepty "willful blindness"
- **US v. Friedman** (2014) — obstruction of justice w corporate context
- **In re Yahoo! Inc. Securities Litigation** (N.D. Cal. 2018) — podobne ukrywanie wycieku
- **SEC Cybersecurity Disclosure Rules (2023)** — bezpośrednio inspirowane sprawą

---

## Kary i ugody

| Data | Organ | Kwota | Jurysdykcja | Podstawa |
|------|-------|-------|-------------|----------|
| Wrzesień 2018 | 50 stanów USA | **148 000 000 USD** | USA stanowe | Breach notification |
| 4 maja 2023 | Sąd federalny | 50 000 USD + 3 lata probacji + 200h prac społecznych | USA federalne | Obstruction + misprision |

**Sullivan miał groźbę do 8 lat więzienia**. Dostał probację — prokuratorzy protestowali. Sędzia Orrick argumentował: "message sent" bez "ruining a life".

---

## Precedensy i implikacje

### Dla prawa USA

- **Pierwszy CISO skazany** za karne mishandling breach. **Precedens fundamentalny**.
- **9th Circuit potwierdzenie (2025)** — utrwalenie precedensu.
- **SEC Cybersecurity Disclosure Rules (2023)** — bezpośrednio inspirowane sprawą. Spółki publiczne mają 4 dni na ujawnienie material cybersecurity incidents.
- **State AG cooperation** — 148 mln USD ugoda jako wzór multi-state enforcement.

### Dla praktyki Big Tech

- **CISO pod lupą** — po Sullivan wiele firm **przesunęło odpowiedzialność** na komitety ryzyka zarządu, nie pojedynczego executive.
- **Bug bounty nadużycia** — HackerOne i inne platformy wprowadziły **strykter review** wypłat powyżej określonej kwoty.
- **Breach response** — kanoniczna zasada: **informuj, nie ukrywaj**.

### Dla krajobrazu cybersecurity

- **D&O insurance** — firmy zaczęły oferować ubezpieczenia dla CISO wobec criminal liability. Premium wzrósł 3-krotnie po Sullivan.
- **Shortage CISO** — po skandalu niektórzy specjaliści **odmawiali** ról CISO bez gwarancji ubezpieczenia i jasnej struktury odpowiedzialności.

---

## Pozwy zbiorowe

| Sprawa | Sąd | Stan | Wartość | Poszkodowani |
|--------|-----|------|---------|--------------|
| *In re Uber 2016 Data Breach* | N.D. Cal. | Ugoda | Włączone w 148 mln USD | 57 mln klientów |

Indywidualne pozwy też — większość konsolidowana w wieloagencyjnej ugodzie.

---

## Wnioski dla obywateli

### Co to dla mnie znaczy?

Jeśli byłeś klientem Uber w 2016 — **twoje dane były w wyciekach**. Już niedostępny Uber oferował **darmowy credit monitoring**, ale tylko dla kierowców (nie klientów). Jeśli byłeś kierowcą z USA, twój numer prawa jazdy mógł być w wycieku.

Sprawa pokazuje szerszy trend: **dane klientów nie są dobrze chronione** przez korporacje. Nawet firma o wielomiliardowej wycenie może mieć **klucze AWS na GitHub**.

### Jak chronić się?

1. **Sprawdź **Have I Been Pwned** (haveibeenpwned.com) — podaj email, zobacz, w których wyciekach byłeś. Uber 2016 jest w bazie.
2. **Zmień hasła** w serwisach używających tego samego emaila i podobnych haseł.
3. **Włącz MFA** wszędzie.
4. **Credit monitoring** — darmowe usługi (Credit Karma, AnnualCreditReport.com USA).
5. **Freeze kredytowy** — jeśli twoje dane są w wyciekach, możesz zamrozić kredyt (USA) lub zastrzec BIK (Polska).

### Jakie mam prawa?

**W USA:**
- **State breach notification laws** — firmy mają 30-90 dni na ujawnienie.
- **SEC rules (2023)** — 4 dni dla spółek publicznych.
- Pozwy klasowe.

**W UE (RODO):**
- **Art. 33** — 72 godziny na zgłoszenie DPA.
- **Art. 34** — bezzwłoczne informowanie użytkowników przy wysokim ryzyku.
- **Art. 82** — odszkodowanie.

### Uwaga dla mediatorów, prawników, administratorów danych

**Jeśli jesteś Chief Security Officer (CSO/CISO), Data Protection Officer, lub General Counsel:**

1. **Dokumentuj wszystko.** W razie breach, **natychmiast** powiadom zarząd i radę prawną.
2. **NEVER** próbuj ukryć breach. *U.S. v. Sullivan* pokazuje, że **criminal liability jest realna**.
3. **Breach response plan** — przygotuj **przed** incydentem, nie podczas.
4. **Ubezpieczenie D&O** (Directors & Officers) — upewnij się, że pokrywa criminal defense.
5. **Separate** role: CSO od IO (Incident Officer). Konflikt interesów.
6. **Ścisła współpraca z prokuratorami** — "don't obstruct, don't lie".

**Lekcja D06**: **ukrywanie ZAWSZE kosztuje więcej** niż przyznanie. 12 miesięcy ukrywania = 148 mln USD ugoda + wyrok skazujący CISO + reputacyjna katastrofa vs. szybkie ujawnienie = zwykle <10 mln USD.

---

## Ciekawostki

- **"We can't let this get out"** — cytat Sullivana, który stał się **najsłynniejszym zdaniem w cybersecurity law**. Powtarzany w setkach prezentacji, szkoleń, wykładów akademickich.
- **10 dni po zeznaniu FTC** — timing jest kluczowy. Sullivan zeznawał 4 listopada 2016 pod przysięgą o 2014 breach. 14 listopada 2016 otrzymał wiadomość o nowym breach. **Dosłownie 10 dni**. To robi sprawę **znacznie gorszą** — Sullivan aktywnie wiedział, jakie są oczekiwania prawne, i świadomie je obszedł.
- **Joe Sullivan — karierа paradoks** — były **federalny prokurator** (wczesne lata 2000), potem **CSO Facebook** (2008–2015), potem **CSO Uber** (2015–2017), potem **CSO Cloudflare** (2018–2022, do wszczęcia procesu). Dzień, gdy **federalny prokurator** stał się **pierwszym skazanym CISO**.
- **Sędzia Orrick's leniency** — prokuratorzy prosili 15 miesięcy więzienia. Orrick dał **probację + prace społeczne**. Argument: Sullivan nie ukradł pieniędzy, nie skorzystał osobiście. Prokuratorzy protestowali. Obrona: "fair".
- **9th Circuit potwierdzenie (2025)** — sędzia Mary McKeown, Bill Clinton appointee, autor opinii. Cytat: *"even if Sullivan believed the hackers were unauthorized within the meaning of the Computer Fraud and Abuse Act, he could not reasonably believe that treating the hack as a bug bounty and having the hackers sign NDAs cleansed the illegal conduct."*
- **HackerOne embarrassment** — platforma bug bounty była świadomym uczestnikiem (choć niewinnym) w planie Sullivana. Po skandalu HackerOne wprowadził **stricter review** wypłat, szczególnie powyżej 10 000 USD. Obecnie wypłaty 100 000+ USD wymagają **external legal review**.
- **Yahoo parallel** — wcześniej (2016) Yahoo ujawniło wyciek 500 mln kont z 2014 (2 lata ukrywania). **Marissa Mayer** (CEO Yahoo) utraciła 12 mln USD premii. Ale **nie było criminal charges**. Po Sullivan: **criminal charges są opcją**.
- **Bug bounty etyka** — przed Sullivan społeczność bug bounty (HackerOne, Bugcrowd, YesWeHack) miała silną kulturę "płać za lukę". Po Sullivan: **jeśli znalezisko zostało już wyexploitowane**, to nie jest bug bounty, to **extortion**.
- **Polski kontekst** — polskie UODO nie ma precedensu analogicznego do Sullivan. Art. 107 RODO + polska ustawa RODO (2018) przewidują **odpowiedzialność zarządu** i **kadry kierowniczej** w razie mass breach, ale **criminal liability** wymaga zarzutów pod polskie prawo karne (art. 266 k.k. — naruszenie tajemnicy służbowej).
- **Tony West / Kamala Harris** — Tony West, który odkrył historię i zwolnił Sullivana, jest **szwagrem Kamali Harris** (Wiceprezydent USA 2021–2025). West był **Associate Attorney General USA** za Obamy.
- **"Bug bounty wash"** — termin ukuty po sprawie, opisujący próbę **ukrycia breach** przez kierowanie wypłaty przez bug bounty program. Po Sullivan **poważnie uznawane za naruszenie prawa**.
- **SEC reakcja** — po Sullivan SEC w 2023 opublikował **Cybersecurity Disclosure Rules**: spółki publiczne muszą ujawniać "material cybersecurity incidents" w **4 dniach** od określenia materialności. Krajowa reguła.
- **Darkside reaktywacja** — społeczność ransomware po skandalu Sullivana miała debatę: jeśli duże firmy płacą ransomware ukrywając breach, czy to "extortion" czy "bug bounty"? Większość black-hat społeczności: **extortion**. Linia pozostała niezmieniona.
- **Khosrowshahi reputation repair** — po 2017 Uber aktywnie inwestował w **privacy and security**. 2020 — FTC chwalił Uber za "przykład" transformation. 148 mln USD ugoda była **zdecydowanie bolesna**, ale Uber przetrwał i dziś ma wyższą wycenę niż w 2016.
- **Criminal CISO precedent** — po Sullivan i przed ewentualnymi dalszymi sprawami (np. SolarWinds CISO 2023), ulica cybersec zmieniła się. CISO **negocjują teraz** indemnification, D&O insurance, right to external counsel — jako warunek zatrudnienia. Sprawa D06 zmieniła **rynek pracy** cybersec.
- **Filmy / książki** — Mike Isaac w *Super Pumped* poświęca jeden rozdział Sullivanowi. Showtime serial (2022) adaptuje scenę. Dokumentalny podcast *Darknet Diaries* (odc. 138) szczegółowo opisuje.

---

## Źródła

1. United States v. Joseph Sullivan, Case No. 3:20-cr-00337 (N.D. Cal.), akta sądowe.

2. Department of Justice, "Former Chief Security Officer Of Uber Sentenced To Three Years' Probation For Covering Up Data Breach Involving Millions Of Uber User Records", 4 maja 2023. URL: https://www.justice.gov/usao-ndca/pr/former-chief-security-officer-uber-sentenced-three-years-probation-covering-data (dostęp: 2026-04-17)

3. United States v. Sullivan, 9th Circuit Court of Appeals, opinion by Senior Judge Mary McKeown, 13 marca 2025.

4. Dara Khosrowshahi, "2016 Data Security Incident", Uber blog, 21 listopada 2017.

5. Bloomberg, "Uber Paid Hackers to Delete Stolen Data on 57 Million People", Eric Newcomer, 21 listopada 2017.

6. Federal Trade Commission, "In the Matter of Uber Technologies Inc.", File No. 152-3054, kwiecień 2018.

7. 50 states multi-state settlement, wrzesień 2018.

8. *Darknet Diaries* podcast episode 138, Jack Rhysider.

9. Mike Isaac, *Super Pumped: The Battle for Uber*, W.W. Norton, 2019.

10. Matthew Baker, Baker Botts, "Ninth Circuit Upholds Conviction of Former Uber Security Chief Joseph Sullivan", marzec 2025.

11. Norton Rose Fulbright, analiza sprawy Sullivan, 2022.

12. Arnold & Porter, "Ex-Uber CSO Joseph Sullivan Sentenced to Probation", maj 2023.

13. Courthouse News Service, "Ninth Circuit upholds conviction of ex-Uber security chief in data breach cover-up", 13 marca 2025.

14. SEC Cybersecurity Disclosure Rules, 26 lipca 2023.

15. HackerOne, publiczne oświadczenia o reformach bug bounty, 2018–2023.

---

*Ostatnia aktualizacja: 2026-04-17*
*Karta w bazie: D06_uber_breach.md*
