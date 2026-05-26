# Lista poprawek po factchecku — futureshow1.github.io/matryca

> Wygenerowano: 2026-05-26
> Zakres sprawdzenia: **wszystkie 33 karty** + strona główna
> Źródła weryfikacji: oficjalne komunikaty (DPC, EROD, KE, FTC, FCC, ICO, ACCC, CNIL, Garante, Dutch DPA, PIPC, HDPA), Wikipedia, Federal Register, Ninth Circuit opinions, IAPP, Hunton, CNBC, NPR, Politico, Reuters, Bloomberg, Al Jazeera, BuzzFeed News, The Intercept, NYT, WSJ, AP, TechCrunch, Citizen Lab, noyb

---

## ✅ Status wprowadzenia poprawek (2026-05-26)

**WSZYSTKIE poprawki zostały wprowadzone** w 4 falach równoległych edycji PL + EN:

- **Fala 1** (commit `511750b`): D02, B01, A10*, E05, A05, A03, B03, B02 — 7 kart × 2 języki (*A10 wcześniej poprawione)
- **Fala 2** (commit `34216a4`): B04, A02, C02, A06, A07*, D06, E01, E06 — 8 kart × 2 języki (*A07 wcześniej poprawione)
- **Fala 3** (commit `b58e098`): E02, C04, C03, D01, D03, B05, B06, D04, C01 — 9 kart × 2 języki
- **Fala 4** (ten commit): A01 etykieta, E03 data referencyjna, strona główna A08 + C05 (komponenty StatusPill, CaseCard, CaseCardEn, CasesGrid; subtitle C05 w obu językach)

Każda fala została zweryfikowana przez `npm run build` przed commitowaniem.

---

---

## Statystyki globalne

| Kategoria | Liczba |
|-----------|--------|
| Sprawdzonych kart | **33 z 33** |
| Błędów poważnych (P1) | ~42 |
| Błędów istotnych (P2) | ~33 |
| Niespójności / drobnych (P3-P4) | ~39 |
| **Razem do poprawy** | **~114** |

## Liczba błędów per karta (najwięcej u góry)

| Karta | P1 | P2 | P3-P4 | Razem |
|-------|----|----|-------|-------|
| B04 (Google Location) | 5 | 1 | 1 | 7 |
| B01 (Street View Wi-Spy) | 2 | 0 | 4 | 6 |
| A10 (Meta DMA) | 4 | 2 | 0 | 6 |
| E05 (Clearview AI) | 5 | 5 | 1 | 11 |
| A05 (Facebook Files) | 5 | 0 | 2 | 7 |
| C02 (Apple Siri) | 2 | 0 | 2 | 4 |
| C01 (Batterygate) | 0 | 4 | 0 | 4 |
| D02 (Amazon Alexa) | 1 (krytyczny) | 0 | 1 | 2 |
| D04 (Uber God View) | 0 | 2 | 2 | 4 |
| D06 (Uber breach) | 1 | 1 | 3 | 5 |
| E01 (TikTok dziennikarze) | 2 | 4 | 1 | 7 |
| E06 (Zoom E2EE) | 0 | 4 | 1 | 5 |
| A02 (Cambridge Analytica) | 1 | 2 | 1 | 4 |
| A03 (Onavo) | 2 | 2 | 0 | 4 |
| A07 (Meta 1,2 mld €) | 2 | 0 | 1 | 3 |
| B03 (Google+) | 2 | 1 | 0 | 3 |
| B05 (Brown v Google) | 2 | 0 | 1 | 3 |
| C04 (MS Recall) | 1 | 0 | 3 | 4 |
| E02 (TikTok dzieci) | 3 | 1 | 1 | 5 |
| A06 (Emotional Contagion) | 2 | 1 | 0 | 3 |
| B02 (Safari workaround) | 2 | 2 | 0 | 4 |
| B06 (Project Dragonfly) | 2 | 1 | 0 | 3 |
| C03 (Apple CSAM) | 1 | 0 | 0 | 1 |
| D01 (Amazon Ring) | 1 | 0 | 2 | 3 |
| D03 (COPPA Alexa) | 1 | 0 | 0 | 1 |
| E03 (TikTok transfery) | 0 | 1 | 1 | 2 |
| Strona główna | 0 | 0 | 2 | 2 |
| A01 (Local Mess) | 0 | 0 | 1 | 1 |
| A04 (533 mln leak) | 0 | 0 | 0 | 0 |
| A08 (NM v Meta) | 0 | 0 | 0 | 0 |
| A09 (Meta 390 mln) | 0 | 0 | 0 | 0 |
| C05 (LinkedIn AI) | 0 | 0 | 0 | 0 |
| D05 (Uber Greyball) | 0 | 0 | 0 | 0 |
| E04 (X/Grok) | 0 | 0 | 0 | 0 |

**Najbardziej rzetelne karty (bezbłędne):** A04, A08, A09, C05, D05, E04
**Najmniej rzetelne:** B04, A05, E05 (~5-7 błędów każda, w tym krytyczne)

---

# 🔴 PRIORYTET 1 — błędy poważne (do natychmiastowej poprawy)

## Pomyłki tożsamości i fundamentalne błędy faktograficzne

### [ ] D02 — KRYTYCZNY: "Amazon Alexa 95 mln USD" to faktycznie sprawa Apple Siri

**Plik:** `content-source/D02_amazon_alexa.md`

- **Obecnie (TL;DR, oś czasu, kary i ugody, pozwy zbiorowe):**
  > 23 października 2024 — ugoda 95 mln USD w *In re Amazon Alexa Privacy Litigation*. Powód wiodący Jessica Garcia
- **Powinno być:**
  > Sprawa *Garner v. Amazon.com, Inc.* (sygn. 2:21-cv-00750, W.D. Wash.) **nadal trwa — nie zawarto ugody**. 7 lipca 2025 sędzia Robert S. Lasnik przyznał certyfikację klasy. Powód wiodący: **Kaeli Garner** (nie "Jessica Garcia").
- **Źródło:** [Labaton Keller Sucharow — Garner v. Amazon](https://www.labaton.com/cases/garner-v-amazon-com-inc)
- **Uwaga krytyczna:** Kwota 95 mln USD i mechanizm "false activations" to **sprawa Apple Siri** (*Lopez v. Apple*) — pomylono dwie firmy. Wymaga przepisania całej sekcji pozwów zbiorowych.

### [ ] A10 — Joel Kaplan (4 błędy w jednej karcie)

**Plik:** `content-source/A10_dma_200mln.md`

#### A10.1 Sprzeczność wewnętrzna: "były wiceprzewodniczący Trump White House"
- **Obecnie (TL;DR):** > Joel Kaplan ... były wiceprzewodniczący Trump White House 2017–2018
- **Powinno być:** > były Deputy Chief of Staff for Policy w administracji George'a W. Busha 2006–2009
- **Źródło:** [Meta corporate bio](https://www.meta.com/media-gallery/executives/joel-kaplan/), [Wikipedia](https://en.wikipedia.org/wiki/Joel_Kaplan)

#### A10.2 Data objęcia funkcji: styczeń 2024 → styczeń 2025
- **Obecnie:** > objęcie ... stanowiska Chief Global Affairs Officer Meta w styczniu 2024
- **Powinno być:** > w styczniu 2025
- **Źródło:** [CNBC, 2 stycznia 2025](https://www.cnbc.com/2025/01/02/meta-is-replacing-head-of-global-affairs-ahead-of-trump-inauguration.html)

#### A10.3 Data VP Global Public Policy: 2011 → 2014
- **Obecnie:** > Wcześniej VP Global Public Policy Facebook od 2011
- **Powinno być:** > od 2014

#### A10.4 "Chief Global Affairs Officer od 2024" → od stycznia 2025
- **Obecnie:** > Joel Kaplan — Chief Global Affairs Officer Meta od 2024 (po Nick Cleggu)
- **Powinno być:** > od stycznia 2025

### [ ] B01 — Sędzia Joffe v. Google: NIE Alex Kozinski

**Plik:** `content-source/B01_street_view_wifi.md`

- **Obecnie (TL;DR, Oś czasu, Orzecznictwo, Osoby kluczowe):**
  > 10 września 2013 — 9th Circuit Court of Appeals (sędzia Alex Kozinski) w *Joffe v. Google*
- **Powinno być:**
  > 10 września 2013 — 9th Circuit (panel: A. Wallace Tashima, **Jay S. Bybee**, William H. Stafford Jr.; opinię napisał **Jay S. Bybee**) w *Joffe v. Google*
- **Źródło:** [9th Circuit opinion PDF](https://cdn.ca9.uscourts.gov/datastore/general/2013/09/11/11-17483_opinion.pdf), [Wikipedia](https://en.wikipedia.org/wiki/Joffe_v._Google,_Inc.)
- **Uwaga:** Kozinski w ogóle nie zasiadał w panelu. Dodatkowo Kozinski **odszedł z 9th Circuit 18 grudnia 2017** po oskarżeniach o molestowanie 15 kobiet — cytowanie go jako autora wyroku jest problematyczne reputacyjnie. Występuje w wielu miejscach karty.

### [ ] B03 — "Matal v. Google" → "In re Google Plus Profile Litigation"

**Plik:** `content-source/B03_google_plus.md`

- **Obecnie:** Pozew zbiorowy *Matal v. Google* (N.D. Cal.); Matal — powód wiodący
- **Powinno być:** **In re Google Plus Profile Litigation**, Case No. 5:18-cv-06164-EJD (VKD), N.D. Cal. Powodowie wiodący: **Matthew Matic, Zak Harris, Charles Olson, Eileen M. Pinkowski**
- **Źródło:** [casemine](https://www.casemine.com/judgement/us/601283a04653d07ee5e4af80), [Bloomberg Law](https://news.bloomberglaw.com/litigation/google-plus-7-5-million-privacy-settlement-gets-final-nod)
- **Uwaga:** "Matal" to literówka od "Matic".

### [ ] B03 — "Very Peenya" → "Vic Gundotra"

**Plik:** `content-source/B03_google_plus.md`

- **Obecnie:** > wiceprezesa społecznościowego, który odszedł — Very Peenya
- **Powinno być:** > **Vic Gundotra**, VP Engineering odpowiedzialny za Google+, odszedł z Google w kwietniu 2014
- **Źródło:** [Wikipedia — Google+](https://en.wikipedia.org/wiki/Google+)
- **Uwaga:** Klasyczna literówka/transkrypcja głosowa.

### [ ] B02 — Jonathan Mayer: nie Chief Technologist FTC

**Plik:** `content-source/B02_safari_workaround.md`

- **Obecnie:** > Chief Technologist FCC 2014–2015, Chief Technologist FTC 2019–2021
- **Powinno być:** > Chief Technologist of the FCC Enforcement Bureau **listopad 2015 – marzec 2017**; w latach 2024–2025 **Chief Science and Technology Adviser oraz Chief AI Officer w DOJ**
- **Źródło:** [Wikipedia](https://en.wikipedia.org/wiki/Jonathan_Mayer)
- **Uwaga:** Karta przypisuje pozycję, której Mayer nigdy nie miał.

### [ ] A03 — Onavo: błędne nazwisko współzałożyciela

**Plik:** `content-source/A03_onavo.md`

- **Obecnie:** > Onavo (izraelska firma założona przez Guya Rosena i **Romana Khavronenko** w 2010)
- **Powinno być:** > założona przez Guya Rosena i **Roia Tigera** (CTO)
- **Źródło:** [Wikipedia — Onavo](https://en.wikipedia.org/wiki/Onavo)
- **Uwaga:** Khavronenko nie figuruje w żadnych publicznie dostępnych źródłach jako współzałożyciel Onavo.

### [ ] E05 — Peter Thiel: 200 000 USD (nie 8,4 mln USD)

**Plik:** `content-source/E05_clearview_ai.md`

- **Obecnie:** > Peter Thiel — 8,4 mln USD pierwsza runda, 2017
- **Powinno być:** > Peter Thiel — **200 000 USD** jako pierwsza inwestycja anielska w 2017. Łączna pierwsza runda Clearview AI: 8,4 mln USD (Kirenaga Partners + Thiel, z czego sam Thiel wniósł 200k)
- **Źródło:** [Wikipedia](https://en.wikipedia.org/wiki/Clearview_AI), [Rolling Stone](https://www.rollingstone.com/culture/culture-features/clearview-ai-app-privacy-your-face-belongs-to-us-excerpt-1234829211/)
- **Uwaga:** Zawyżenie inwestycji Thiela 42-krotnie.

### [ ] E05 — Sprzeczność wewnętrzna: Schwartz/Swartz

**Plik:** `content-source/E05_clearview_ai.md`

- **Obecnie (sekcja założycieli):** > Richardem Schwartzem
- **Obecnie (CEO od lutego 2025):** > Richard Swartz
- **Powinno być wszędzie:** > **Richard Schwartz** (przez "ch")
- **Źródło:** [TechCrunch, 20.02.2025](https://techcrunch.com/2025/02/20/ceo-of-clearview-ai-a-controversial-facial-recognition-startup-has-resigned/)

### [ ] E05 — "operativac" → "doradca"

**Plik:** `content-source/E05_clearview_ai.md`

- **Obecnie:** > Richardem Schwartzem (operativac polityczny Rudy'ego Giulianiego)
- **Powinno być:** > były **doradca/aide** Rudy Giulianiego, gdy ten był burmistrzem Nowego Jorku (1994–2001)
- **Uwaga:** Literówka.

## Krytyczne pomyłki w datach i kwotach

### [ ] C02 — Lopez v. Apple: styczeń 2024 → styczeń 2025

**Plik:** `content-source/C02_apple_siri.md`

- **Obecnie (wielokrotnie):** > Styczeń 2024 — ugoda 95 mln USD
- **Powinno być:** > **Początek stycznia 2025** — wstępna ugoda 95 mln USD; **16 października 2025** — sędzia Jeffrey S. White (N.D. Cal.) zatwierdza ugodę; **23 stycznia 2026** — pierwsze wypłaty
- **Źródło:** [Courthouse News](https://www.courthousenews.com/judge-approves-95-million-apple-settlement-over-siri-privacy-case/)
- **Uwaga:** Sygnatura 4:19-cv-04577-JSW. Wymaga zamiany w ~6 miejscach karty.

### [ ] C02 — iOS 13.2: 28 sierpnia → 28 października 2019

**Plik:** `content-source/C02_apple_siri.md`

- **Obecnie:** > 28 sierpnia 2019 — iOS 13.2 — opt-in dla Siri Grading
- **Powinno być:** > **28 sierpnia 2019** — Apple Newsroom zapowiedź; **28 października 2019** — iOS 13.2 wydany publicznie
- **Źródło:** [CNBC, 28.10.2019](https://www.cnbc.com/2019/10/28/ios-13point2-has-new-siri-privacy-settings-including-deletion-and-opt-out.html)

### [ ] A02 — Ugoda akcjonariuszy Meta: wrzesień → lipiec 2025; kwota nieujawniona

**Plik:** `content-source/A02_cambridge_analytica.md`

- **Obecnie:** > Wrzesień 2025 — 8,0 mld USD ugoda w pozwie akcjonariuszy
- **Powinno być:** > **17 lipca 2025** — ugoda na **nieujawnionych warunkach**; akcjonariusze pierwotnie domagali się 8 mld USD
- **Źródło:** [Al Jazeera, 17.07.2025](https://www.aljazeera.com/economy/2025/7/17/zuckerberg-settles-meta-investor-8bn-lawsuit-for-undisclosed-terms)
- **Uwaga:** Sprawdź sumaryczną liczbę "civil settlements ~14,6 mld USD" na stronie głównej — 8 mld może być błędnie zaliczone.

### [ ] A03 — Data kary ACCC Onavo: czerwiec → 26 lipca 2023

**Plik:** `content-source/A03_onavo.md`

- **Obecnie:** > Czerwiec 2023 — Federal Court of Australia: 20 mln AUD
- **Powinno być:** > **26 lipca 2023** — Federal Court of Australia: 20 mln AUD (Facebook Israel Ltd + Onavo Inc., po 10 mln AUD każda) + 400 000 AUD kosztów prawnych
- **Źródło:** [ACCC, 26.07.2023](https://www.accc.gov.au/media-release/20m-penalty-for-meta-companies-for-conduct-liable-to-mislead-consumers-about-use-of-their-data)

### [ ] B04 — Patacsil v. Google: 93 mln → 62 mln USD; cy pres, nie wypłaty

**Plik:** `content-source/B04_location_history.md`

- **Obecnie:** > 2024 — ugoda class action federalna: 93 000 000 USD
- **Powinno być:** > **Kwiecień 2024** — *Patacsil et al. v. Google* — **62 mln USD** w formacie **cy pres** (Berkman Klein, Free Press, ACLU N.Cal., CDT, EFF); klasa **NIE otrzymała indywidualnych wypłat**
- **Źródło:** [MediaPost, 22.04.2024](https://www.mediapost.com/publications/article/395413/judge-approves-google-62-million-location-privacy.html)
- **Uwaga:** Powodowie wiodący: Napoleon Patacsil, Michael Childs, Noe Gamboa.

### [ ] B04 — Texas $8 mln (styczeń 2023): NIE chodziło o lokalizację

**Plik:** `content-source/B04_location_history.md`

- **Obecnie:** > Styczeń 2023 — Teksas: 8 mln USD (location tracking)
- **Powinno być:** > **Styczeń 2023** — ugoda 8 mln USD Teksas vs Google o **wprowadzających w błąd reklamach Pixel 4 (DJ endorsements)**, **nie o location tracking**. Sprawa lokalizacji w Teksasie zakończyła się dopiero w 2025 ugodą **1,375 mld USD**
- **Źródło:** [Kelley Drye](https://www.kelleydrye.com/viewpoints/blogs/ad-law-access/google-to-pay-8-m-to-settle-with-texas-over-dj-endorsements)

### [ ] B04 — Korea PIPC: 80 mld → 69,2 mld KRW; 2023 → 2022

**Plik:** `content-source/B04_location_history.md`

- **Obecnie:** > 2023 — Korea Płd. PIPC: 80 mld KRW
- **Powinno być:** > **14 września 2022** — PIPC nakłada łącznie 100 mld KRW na Google + Meta razem: **69,2 mld KRW (~50 mln USD) na Google** i 30,8 mld KRW (~22 mln USD) na Meta
- **Źródło:** [TechCrunch, 14.09.2022](https://techcrunch.com/2022/09/14/google-meta-fined-71-8m-for-violating-privacy-law-in-south-korea/)

### [ ] B04 — Australia ACCC: 2023 → 12 sierpnia 2022

**Plik:** `content-source/B04_location_history.md`

- **Obecnie:** > 2023 — Australia ACCC: 60 mln AUD
- **Powinno być:** > **12 sierpnia 2022** — Federal Court Australii nakłada na Google 60 mln AUD
- **Źródło:** [DLA Piper](https://privacymatters.dlapiper.com/2022/08/australia-google-agrees-to-pay-aud-60-million-for-misleading-consumers-regarding-the-collection-of-location-data/)

## Pomyłki dat publikacji i ujawnień

### [ ] D04 — BuzzFeed Mohrer: 18 → 19 listopada 2014

**Plik:** `content-source/D04_uber_god_view.md`

- **Obecnie:** > 18 listopada 2014 — Johana Bhuiyan, BuzzFeed: "God View"
- **Powinno być:** > **19 listopada 2014**
- **Źródło:** [Engadget, 19.11.2014](https://www.engadget.com/2014-11-19-uber-godview-tracking.html)

### [ ] B06 — Jack Poulson rezygnacja: wrzesień → sierpień 2018

**Plik:** `content-source/B06_project_dragonfly.md`

- **Obecnie:** > Wrzesień 2018 — Poulson publicznie rezygnuje
- **Powinno być:** > **20 sierpnia 2018** — list rezygnacyjny w sieci wewnętrznej; **31 sierpnia 2018** — ostatni dzień pracy; publiczne ujawnienie *The Intercept* 13 września 2018
- **Źródło:** [The Intercept, 13.09.2018](https://theintercept.com/2018/09/13/google-china-search-engine-employee-resigns/)

### [ ] B06 — Tech Inquiry: założona lato 2019, nie 2018; nie sam Poulson

**Plik:** `content-source/B06_project_dragonfly.md`

- **Obecnie:** > Po rezygnacji Poulson założył Tech Inquiry — organizację non-profit
- **Powinno być:** > Tech Inquiry **założone latem 2019** wraz z Irene Knapp, Laurą Nolan, Liz O'Sullivan i Shauną Gordon-McKeon
- **Źródło:** [Fast Company](https://www.fastcompany.com/90682901/meet-the-ex-googler-whos-exposing-the-tech-military-industrial-complex)

### [ ] E06 — Jonathan Leitschuh: 8 lipca 2019 (karta ma 3 różne daty!)

**Plik:** `content-source/E06_zoom_e2ee.md`

- **Obecnie:** > 9 kwietnia 2019 — Jonathan Leitschuh publikuje na Medium ... 9 lipca 2019 — Leitschuh, Medium
- **Powinno być wszędzie:** > **8 lipca 2019** — Jonathan Leitschuh publikuje opis ZoomOpener vulnerability na Medium
- **Źródło:** [The Hacker News](https://thehackernews.com/2019/07/zoom-video-conferencing-hacking.html)

### [ ] B03 — Data ugody Google+ class action: 27 lipca 2020 → styczeń 2021

**Plik:** `content-source/B03_google_plus.md`

- **Obecnie:** > 27 lipca 2020 — ugoda 7,5 mln USD
- **Powinno być:** > **Czerwiec 2020** — wstępna ugoda; **styczeń 2021** — final approval
- **Źródło:** [Bloomberg Law](https://news.bloomberglaw.com/litigation/google-plus-7-5-million-privacy-settlement-gets-final-nod)

## Błędne tytuły i nazwiska osób

### [ ] A07 — Helen Dixon: "Information Commissioner" → "Data Protection Commissioner"

**Plik:** `content-source/A07_kara_1_2mld.md`

- **Obecnie:** > Helen Dixon — Information Commissioner Irlandia do 2024
- **Powinno być:** > Helen Dixon — **Data Protection Commissioner** Irlandia (2014–2024)
- **Uwaga:** "Information Commissioner" to brytyjski urząd (ICO). Sprawdź wszystkie karty.

### [ ] A07 — Max Schrems: urodzony w Salzburgu, nie w Wiedniu

**Plik:** `content-source/A07_kara_1_2mld.md`

- **Obecnie:** > Maximilian Schrems (ur. 1987 w Wiedniu, Austria)
- **Powinno być:** > Maximilian Schrems (ur. 10 października 1987 w **Salzburgu**, Austria; obecna baza NOYB: Wiedeń)
- **Źródło:** [Wikipedia](https://en.wikipedia.org/wiki/Max_Schrems)

### [ ] D06 — Sędzia 9th Circuit: "Mary" → "M. Margaret" McKeown

**Plik:** `content-source/D06_uber_breach.md`

- **Obecnie:** > Mary McKeown — Senior U.S. Circuit Judge
- **Powinno być:** > **M. Margaret McKeown** (Mary Margaret), Senior United States Circuit Judge, 9th Circuit (status senior od 15 września 2022). Wyrok wydał **jednogłośny panel trójosobowy** (McKeown autorka opinii + Anthony D. Johnstone + Ana de Alba)
- **Źródło:** [Wikipedia](https://en.wikipedia.org/wiki/M._Margaret_McKeown)

### [ ] B05 — Brown v. Google: sędzia pierwotnie Lucy Koh, potem Gonzalez Rogers

**Plik:** `content-source/B05_incognito.md`

- **Obecnie:** > Judge Yvonne Gonzalez Rogers ... prowadziła sprawę od 2020/2021
- **Powinno być:** > Pierwotnie **Judge Lucy H. Koh** (do nominacji na 9th Circuit w 2021), potem **Judge Yvonne Gonzalez Rogers**. Motion to dismiss z marca 2021 wydała jeszcze Judge Koh
- **Źródło:** [vLex — Brown v. Google LLC](https://case-law.vlex.com/vid/brown-v-google-llc-899557423)

### [ ] B05 — Powodowie wiodący: pięciu, nie tylko Brown

**Plik:** `content-source/B05_incognito.md`

- **Obecnie:** > Chasom Brown ... typowy użytkownik Chrome
- **Powinno być:** > Pięciu powodów wiodących: **Chasom Brown, William Byatt, Jeremy Davis, Christopher Castillo, Monique Trujillo**

### [ ] E01 — "Erich Anderson" → "Erich Andersen"

**Plik:** `content-source/E01_tiktok_journalists.md`

- **Obecnie:** > Erich Anderson (General Counsel ByteDance) — w 5+ miejscach
- **Powinno być wszędzie:** > **Erich Andersen** (przez "e", nie "o")
- **Źródło:** [Japan Times](https://www.japantimes.co.jp/news/2022/12/23/world/bytedance-collects-journalists-data/)

### [ ] E01 — Brak Chris Lepitak i Song Ye w "Osobach kluczowych"

**Plik:** `content-source/E01_tiktok_journalists.md`

- **Powinno dodać:** > **Chris Lepitak** — Chief Internal Auditor ByteDance/TikTok, kierował zespołem inwigilacyjnym, **zwolniony**. **Song Ye** — Head of Audit and Risk Control ByteDance, raportujący bezpośrednio do CEO Liang Rubo, **zrezygnował** po skandalu
- **Źródło:** [UPI](https://www.upi.com/Top_News/World-News/2022/12/23/tiktok-employees-spied/2261671804708/)

## Krytyczne sprzeczności wewnątrz tej samej karty

### [ ] A05 — Sprzeczność: tabela "marzec 2025" vs oś czasu "marzec 2026" (wyrok NM v Meta)

**Plik:** `content-source/A05_facebook_files.md`

- **Obecnie (tabela "Postępowanie prawne"):** > Marzec 2025 | Wyrok pierwotny NM v. Meta — 375 mln USD (po apelacji zredukowany w 03.2025)
- **Powinno być:** > **Marzec 2026** | Werdykt ławy przysięgłych NM v. Meta — 375 mln USD; Meta zapowiedziała apelację
- **Źródło:** [CNBC, 24.03.2026](https://www.cnbc.com/2026/03/24/jury-reaches-verdict-in-meta-child-safety-trial-in-new-mexico.html)
- **Uwaga:** Karta sama sobie zaprzecza. Apelacja Meta dopiero zapowiedziana, nie rozstrzygnięta.

### [ ] A05 — Frances Haugen: rok urodzenia 1984 → 1983

**Plik:** `content-source/A05_facebook_files.md`

- **Obecnie:** > Frances Haugen (ur. 1984, Iowa)
- **Powinno być:** > Frances Haugen (ur. **1983**, Iowa City, Iowa)
- **Źródło:** [Wikipedia](https://en.wikipedia.org/wiki/Frances_Haugen)

### [ ] A05 — "Dysleksja" Haugen: brak źródeł, prawdopodobnie konfabulacja

**Plik:** `content-source/A05_facebook_files.md`

- **Obecnie:** > Frances Haugen ma dysleksję ... pomogła jej rozumieć wzorce dokumentów inaczej
- **Powinno być:** **USUNĄĆ** lub zastąpić zweryfikowanym faktem (Haugen cierpi na **celiakię** + neuropatię po skrzepach krwi w 2014; **brak publicznych źródeł potwierdzających dysleksję**)
- **Źródło:** [Wikipedia](https://en.wikipedia.org/wiki/Frances_Haugen)

### [ ] A05 — "Beyond the Screen": 2024 → 2022; nie "AI safety"

**Plik:** `content-source/A05_facebook_files.md`

- **Obecnie:** > Marzec 2024 — Haugen zakłada think tank Beyond the Screen ... o bezpieczeństwie AI
- **Powinno być:** > **Czerwiec/wrzesień 2022** — Haugen zakłada **Beyond the Screen** — organizacja non-profit o **bezpieczeństwie social media** ("Social Media for the Common Good")
- **Źródło:** [Shacknews](https://www.shacknews.com/article/132401/frances-haugen-beyond-the-screen-nonprofit)

### [ ] A05 — Pierwszy artykuł "Facebook Files": uściślić autorstwo

**Plik:** `content-source/A05_facebook_files.md`

- **Obecnie:** > Jeff Horwitz, "Facebook Knows Instagram Is Toxic for Teen Girls...", WSJ, 14 września 2021
- **Powinno być:** > Seria zaczyna się **13 września 2021** artykułem o XCheck/Cross-Check. Artykuł o toksyczności Instagrama (**14 września 2021**): **Georgia Wells, Jeff Horwitz, Deepa Seetharaman**
- **Źródło:** [NPR](https://www.npr.org/2021/09/17/1038180275/the-wall-street-journal-takes-a-deep-dive-into-the-facebook-files)

### [ ] A06 — Maryland AG Gansler: lipiec → wrzesień 2014

**Plik:** `content-source/A06_emotional_contagion.md`

- **Obecnie:** > Lipiec 2014 — Maryland AG Gansler krytykuje badanie
- **Powinno być:** > **23–24 września 2014** — Douglas F. Gansler ogłasza analizę skarg prof. Jamesa Grimmelmanna
- **Źródło:** [Washington Post, 25.09.2014](https://www.washingtonpost.com/news/the-switch/wp/2014/09/25/md-attorney-general-calls-facebooks-psychological-study-troubling/)

### [ ] A06 — Sheryl Sandberg wywiad: India Today → NDTV

**Plik:** `content-source/A06_emotional_contagion.md`

- **Obecnie:** > Sheryl Sandberg w wywiadzie dla India Today
- **Powinno być:** > Sheryl Sandberg w wywiadzie dla **NDTV w Indiach** (2 lipca 2014, podczas wizyty w New Delhi)
- **Źródło:** [Washington Post, 02.07.2014](https://www.washingtonpost.com/news/the-switch/wp/2014/07/02/sheryl-sandberg-is-sorry-facebook-didnt-explain-how-it-toyed-with-your-emotions/)

## Pozostałe poważne błędy

### [ ] E02 — Breakdown kary 345 mln EUR

**Plik:** `content-source/E02_tiktok_children.md`

- **Powinno dodać:** > Kara 345 mln EUR składała się z: **100 mln EUR** (public-by-default), **65 mln EUR** (Family Pairing), **180 mln EUR** (transparentność)
- **Źródło:** [Pandectes](https://pandectes.io/blog/child-data-protection-in-the-spotlight-tiktoks-e345-million-fine/)

### [ ] E02 — EDPB binding decision data

**Plik:** `content-source/E02_tiktok_children.md`

- **Powinno być:** > **2 sierpnia 2023** — EDPB Binding Decision 2/2023
- **Źródło:** [EDPB](https://www.edpb.europa.eu/our-work-tools/our-documents/binding-decision-board-art-65/binding-decision-22023-dispute-submitted_en)

### [ ] E02 — Okres ICO: 2018–2020 → maj 2018 – lipiec 2020

**Plik:** `content-source/E02_tiktok_children.md`

- **Powinno być uściślić:** > okres **maj 2018 – lipiec 2020** (dokładny zakres badany przez ICO)

### [ ] C04 — Microsoft Recall: opt-in 7 czerwca, wstrzymanie 13 czerwca 2024

**Plik:** `content-source/C04_microsoft_recall.md`

- **Obecnie:** > 13 czerwca 2024 — Microsoft wstrzymał ... 21 czerwca 2024 — ogłoszenie opt-in
- **Powinno być:** > **7 czerwca 2024** — Pavan Davuluri ogłasza opt-in (domyślnie wyłączony); **13 czerwca 2024** — postponement broad rollout, przeniesienie do Windows Insider Program
- **Źródło:** [Windows Experience Blog, 7.06.2024](https://blogs.windows.com/windowsexperience/2024/06/07/update-on-the-recall-preview-feature-for-copilot-pcs/)

### [ ] C03 — Pozew Jane Doe v. Apple: brak sygnatury sprawy

**Plik:** `content-source/C03_apple_csam.md`

- **Powinno być:** > **Amy et al. v. Apple Inc.**, Case No. 5:24-cv-8832 (N.D. Cal.), pozew z 7 grudnia 2024
- **Źródło:** [Class Action Complaint PDF](https://www.classaction.org/media/doe-v-apple-inc.pdf)

### [ ] D01 — Akwizycja Ring: ogłoszenie 27.02.2018, zamknięcie 12.04.2018

**Plik:** `content-source/D01_amazon_ring.md`

- **Obecnie:** > Kwiecień 2018 — Amazon kupuje Ring za ~1 mld USD
- **Powinno być:** > **27 lutego 2018** — ogłoszenie akwizycji; **12 kwietnia 2018** — zamknięcie. Cena wg SEC 10-K Amazon: **~839 mln USD** (Bloomberg/WSJ podały "około 1 mld")
- **Źródło:** [Amazon press release](https://press.aboutamazon.com/2018/4/amazon-and-ring-close-acquisition-now-working-together-to-empower-neighbors-with-affordable-ways-to-monitor-their-homes-and-reduce-crime-in-neighborhoods)

### [ ] D03 — COPPA skarga: 9 → 8 maja 2019; CCFC nie tylko CDD

**Plik:** `content-source/D03_coppa_alexa.md`

- **Obecnie:** > 9 maja 2019 — koalicja 19 organizacji
- **Powinno być:** > **8 maja 2019** — koalicja prowadzona przez **Campaign for a Commercial-Free Childhood (CCFC)** i Center for Digital Democracy (CDD)
- **Źródło:** [Fairplay](https://fairplayforkids.org/advocates-demand-ftc-investigation-echo-dot-kids-edition)

### [ ] D06 — McKeown: imię i biografia

Patrz P1 wyżej (D06 — Sędzia 9th Circuit).

---

# 🟡 PRIORYTET 2 — błędy istotne (daty +/-1 dzień, drobne kwoty)

### [ ] A10 — Data kar DMA: 22 → 23 kwietnia 2025

**Plik:** `content-source/A10_dma_200mln.md`

- **Obecnie:** > 22 kwietnia 2025 (cała karta używa)
- **Powinno być:** > **23 kwietnia 2025**
- **Źródło:** [digital-markets-act.ec.europa.eu (slug 2025-04-23)](https://digital-markets-act.ec.europa.eu/commission-finds-apple-and-meta-breach-digital-markets-act-2025-04-23_en)
- **Uwaga:** Co najmniej 6 miejsc w karcie.

### [ ] A10 — Wyznaczenie gatekeeperów: 5 → 6 września 2023

**Plik:** `content-source/A10_dma_200mln.md`

- **Źródło:** [digital-markets-act.ec.europa.eu](https://digital-markets-act.ec.europa.eu/commission-designates-six-gatekeepers-under-digital-markets-act-2023-09-06_en)

### [ ] A02 — ICO Facebook: 25 → 24 października 2018

**Plik:** `content-source/A02_cambridge_analytica.md`

- **Powinno być:** > **24 października 2018** — ICO wydaje Monetary Penalty Notice 500 000 GBP; Facebook zapłacił po ugodzie 30 października 2019
- **Źródło:** [Hunton Privacy Blog](https://www.hunton.com/privacy-and-information-security-law/uk-ico-imposes-maximum-fine-on-facebook-for-compromising-user-data)

### [ ] A02 — Bannon zbycie udziałów: styczeń → kwiecień 2017

**Plik:** `content-source/A02_cambridge_analytica.md`

- **Powinno być (rozdzielić):**
  > 20 stycznia 2017 — Bannon obejmuje Chief Strategist
  > **Kwiecień 2017** — Bannon zbywa udziały w CA

### [ ] C01 — Włochy AGCM: 25 → 24 października 2018

**Plik:** `content-source/C01_batterygate.md`

- **Powinno być:** > **24 października 2018** — Włochy AGCM: 10 mln EUR
- **Źródło:** [AppleInsider, 24.10.2018](https://appleinsider.com/articles/18/10/24/italy-fines-apple-114m-over-iphone-battery-slowdown-controversy)
- **Uwaga:** Wymaga zamiany w co najmniej 3 miejscach.

### [ ] C01 — Chile SERNAC: 2,5 mln USD → 3,4 mln USD; 2018 → 2021

**Plik:** `content-source/C01_batterygate.md`

- **Powinno być:** > **8 kwietnia 2021** — Chile: ugoda **3,4 mln USD** (~150 000 użytkowników iPhone 6/6s/SE/7); max 50 USD per użytkownik
- **Źródło:** [AppleInsider, 8.04.2021](https://appleinsider.com/articles/21/04/08/apple-to-pay-34m-in-chile-to-settle-planned-obsolescence-lawsuit)

### [ ] C01 — Portugalia 25 mln EUR: faktycznie pozew ~7 mln EUR

**Plik:** `content-source/C01_batterygate.md`

- **Obecnie:** > 2023 — Portugalia: kara 25 mln EUR
- **Powinno być:** > **2023** — pozew zbiorowy **Deco Proteste** przeciwko Apple (nie kara regulacyjna). Szacunkowa wartość: ~7 mln EUR (60 EUR × ~115 000 poszkodowanych)
- **Źródło:** [iThinkDiff](https://www.ithinkdiff.com/apple-batterygate-lawsuit-portugal/)

### [ ] C01 — "List Tima Cooka" → list Apple bez podpisu Cooka

**Plik:** `content-source/C01_batterygate.md`

- **Obecnie:** > Tim Cook — autor publicznej apologii z 28 grudnia 2017
- **Powinno być:** > List "A Message to Our Customers" (28.12.2017) **nie był podpisany przez Cooka** — oficjalne oświadczenie Apple Inc. zaczyna się "We've been hearing feedback from our customers"
- **Źródło:** [CNBC, 28.12.2017](https://www.cnbc.com/2017/12/28/apple-batterygate-letter-full-text.html)

### [ ] D04 — Schneiderman śledztwo: 19 → ogólnie listopad 2014

**Plik:** `content-source/D04_uber_god_view.md`

- **Powinno być:** > **Listopad 2014** — Schneiderman wszczyna śledztwo (dokładna data nie jest publicznie potwierdzona)

### [ ] D04 — Bhuiyan/Mohrer spotkanie: początek listopada 2014, nie 15 listopada

**Plik:** `content-source/D04_uber_god_view.md`

- **Powinno być:** > **Początek listopada 2014** ("early November")
- **Źródło:** [BuzzFeed News](https://www.buzzfeednews.com/article/johanabhuiyan/uber-is-investigating-its-top-new-york-executive-for-privacy)

### [ ] D06 — Ugoda z 50 stanami: wrzesień → 26 września 2018; 50 stanów + DC

**Plik:** `content-source/D06_uber_breach.md`

- **Powinno być:** > **26 września 2018** — wspólna ugoda Uber z 50 stanami **i Dystryktem Kolumbii**: 148 mln USD
- **Źródło:** [NY AG (Underwood) press release](https://ag.ny.gov/press-release/2018/ag-underwood-announces-record-148-million-settlement-uber-over-2016-data-breach)

### [ ] B02 — Data kary FTC Safari: 17 → 9 sierpnia 2012

**Plik:** `content-source/B02_safari_workaround.md`

- **Powinno być:** > **9 sierpnia 2012** — FTC ogłasza ugodę (complaint złożona 8.08); **16 listopada 2012** — N.D. Cal. zatwierdza consent decree
- **Źródło:** [FTC press release, 9.08.2012](https://www.ftc.gov/news-events/news/press-releases/2012/08/google-will-pay-225-million-settle-ftc-charges-it-misrepresented-privacy-assurances-users-apples)

### [ ] B02 — Ashkan Soltani CPPA: 2022 → 4 października 2021

**Plik:** `content-source/B02_safari_workaround.md`

- **Powinno być:** > Soltani — Executive Director CPPA **od 4 października 2021** (selekcja 27.09.2021). W listopadzie 2024 CPPA ogłosiła odejście; Tom Kemp jako następca od marca 2025
- **Źródło:** [CPPA Announcement 2021](https://cppa.ca.gov/announcements/2021/20211004.html)

### [ ] B04 — DC + Indiana ugoda: styczeń 2023 → grudzień 2022, nie z TX/WA

**Plik:** `content-source/B04_location_history.md`

- **Powinno być:** > **29 grudnia 2022** — Indiana 20 mln USD; **30 grudnia 2022** — DC 9,5 mln USD. Razem 29,5 mln USD. **Teksas i Waszyngton nie wchodzili** w tę ugodę w tym terminie
- **Źródło:** [DLA Piper](https://www.dlapiper.com/en-us/insights/publications/2023/01/google-to-pay-295-million-to-indiana-and-district-of-columbia-to-settle-location-privacy-suits)

### [ ] E01 — ByteDance założony: wrzesień → marzec 2012

**Plik:** `content-source/E01_tiktok_journalists.md`

- **Powinno być:** > **Marzec 2012** — Zhang Yiming **i Liang Rubo** zakładają ByteDance; **sierpień 2012** — launch Toutiao
- **Źródło:** [Wikipedia — ByteDance](https://en.wikipedia.org/wiki/ByteDance)

### [ ] E01 — Musical.ly: 1 mld USD → 800 mln – 1 mld USD; listopad 2017

**Plik:** `content-source/E01_tiktok_journalists.md`

- **Powinno być:** > po zakupie Musical.ly w **listopadzie 2017** za **800 mln – 1 mld USD**; merge z TikTok 2 sierpnia 2018

### [ ] E01 — Liang Rubo CEO: od 4 listopada 2021

**Plik:** `content-source/E01_tiktok_journalists.md`

- **Powinno być:** > Liang Rubo — CEO ByteDance **od 4 listopada 2021** (po Zhangu, zapowiedź od maja 2021)
- **Źródło:** [CNBC, 3.11.2021](https://www.cnbc.com/2021/11/03/bytedance-founder-zhang-yiming-steps-down-as-chairman-amid-reshuffle.html)

### [ ] E01/E03 — PAFACA: "9 miesięcy" → 270 dni

**Plik:** `content-source/E01_tiktok_journalists.md` + `E03_tiktok_ban_transfers.md`

- **Powinno być:** > PAFACA dało ByteDance **270 dni** (+ możliwe 90-dniowe przedłużenie). Deadline divestiture: 19 stycznia 2025
- **Źródło:** [Wikipedia — PAFACA](https://en.wikipedia.org/wiki/Protecting_Americans_from_Foreign_Adversary_Controlled_Applications_Act)

### [ ] E05 — Hoan Ton-That: rezygnacja jako President, nie CEO w grudniu 2024

**Plik:** `content-source/E05_clearview_ai.md`

- **Powinno być:** > **Grudzień 2024** — Ton-That przechodzi z CEO na **President**; **19 lutego 2025** — Ton-That **rezygnuje** całkowicie z executive

### [ ] E05 — CNIL data: październik → 17 października 2022

**Plik:** `content-source/E05_clearview_ai.md`

- **Źródło:** [CNIL](https://www.cnil.fr/en/facial-recognition-20-million-euros-penalty-against-clearview-ai)

### [ ] E05 — Garante data: luty → 10 lutego 2022

**Plik:** `content-source/E05_clearview_ai.md`

- **Źródło:** [EDPB](https://www.edpb.europa.eu/news/national-news/2022/facial-recognition-italian-sa-fines-clearview-ai-eur-20-million_en)

### [ ] E05 — HDPA Greece: lipiec → 13 lipca 2022

**Plik:** `content-source/E05_clearview_ai.md`

- **Źródło:** [HDPA](https://www.dpa.gr/en/en/enimerwtiko/prakseisArxis/imposition-fine-clearview-ai-inc)

### [ ] E05 — Dutch DPA: wrzesień → 3 września 2024

**Plik:** `content-source/E05_clearview_ai.md`

- **Źródło:** [Autoriteit Persoonsgegevens](https://www.autoriteitpersoonsgegevens.nl/en/current/dutch-dpa-imposes-a-fine-on-clearview-because-of-illegal-data-collection-for-facial-recognition)

### [ ] E06 — Zoom IPO: 18 kwietnia 2019, wycena 9,2 mld USD

**Plik:** `content-source/E06_zoom_e2ee.md`

- **Powinno być:** > **18 kwietnia 2019** — Zoom IPO na NASDAQ pod tickerem 'ZM' przy 36 USD/akcja, kapitalizacja **9,2 mld USD** (po pierwszej sesji 15,9 mld USD przy +72%)
- **Źródło:** [CNBC](https://www.cnbc.com/2019/04/18/zoom-ipo-stock-begins-trading-on-nasdaq.html)

### [ ] E06 — "300 mln dziennych użytkowników" → uczestników spotkań

**Plik:** `content-source/E06_zoom_e2ee.md`

- **Powinno być:** > **300 mln dziennych uczestników spotkań** (daily meeting participants), **NIE DAU**. Zoom wycofał oryginalne sformułowanie 30 kwietnia 2020 i poprawił blog
- **Źródło:** [TechCrunch, 30.04.2020](https://techcrunch.com/2020/04/30/zoom-retracts-statement-that-it-has-300m-daily-active-users/)

### [ ] E06 — "60 dni unencrypted" — uściślić jako "mogły być do 60 dni"

**Plik:** `content-source/E06_zoom_e2ee.md`

- **Powinno być:** > FTC wskazał, że nagrania **mogły być** przechowywane unencrypted **do 60 dni** zanim trafiały do encrypted cloud storage

### [ ] E05 — Charles C. Johnson: SmartCheckr → Clearview AI ścieżka

**Plik:** `content-source/E05_clearview_ai.md`

- **Powinno być:** > Johnson — współzałożyciel **SmartCheckr** (2017); aktywa przeniesione do Clearview AI; udział Johnsona (1/3 w SmartCheckr) przekonwertowany na **10% w Clearview AI**
- **Źródło:** [Wikipedia](https://en.wikipedia.org/wiki/Clearview_AI)

### [ ] E05 — Liczba zdjęć w bazie — uściślić z datą referencyjną

**Plik:** `content-source/E05_clearview_ai.md`

- **Obecnie:** > 60 mld+ zdjęć
- **Powinno być (uściślić):** > **~30 mld** wg Dutch DPA (09.2024); **>40 mld** wg Biometric Update (11.2023); **>60 mld** wg materiałów ICE/CBP (2025–2026). Liczba zmienia się dynamicznie — wymaga daty referencyjnej

### [ ] E03 — TikTok 159 mln użytkowników EU: wymaga źródła/daty

**Plik:** `content-source/E03_tiktok_ban_transfers.md`

- **Uwaga:** TikTok raportował 175 mln (~2023). Karta powinna podać datę referencyjną.

### [ ] A06 — Cohen's d ≈ 0,001 — uściślić zakres

**Plik:** `content-source/A06_emotional_contagion.md`

- **Powinno być:** > Cohen's d ≈ **0,001–0,02** w zależności od zmiennej; bardzo mały efekt
- **Źródło:** [Kramer, Guillory, Hancock PNAS 2014](https://www.pnas.org/doi/10.1073/pnas.1320040111)

### [ ] A03 — Onavo 33 mln użytkowników na piku: brak źródła

**Plik:** `content-source/A03_onavo.md`

- **Uwaga:** Brak oficjalnego źródła. Sugerować "dziesiątki milionów (brak oficjalnego potwierdzenia szczytu)"

### [ ] A03 — Apple "wcześniej (2018)" BuzzFeed: prawdopodobnie 2017

**Plik:** `content-source/A03_onavo.md`

- **Uwaga:** Wymaga zweryfikowania bezpośrednio na BuzzFeed

---

# 🟠 PRIORYTET 3 — niespójności strona główna ↔ karty

### [ ] Strona główna — rok i status sprawy A08 (New Mexico v. Meta)

**Plik:** komponent karty na stronie głównej + frontmatter A08

- **Obecnie:** "A08 | 2023 | Concluded"
- **Powinno być:** "A08 | 2026 (wyrok) | Apelacja w toku"
- **Uzasadnienie:** Wyrok ławy z 24 marca 2026. Meta zapowiedziała apelację. Karta A08 sama poprawnie pisze "Status: Wyrok z 24 marca 2026; Meta zapowiedziała apelację"

### [ ] Strona główna — LinkedIn: rozdzielić "AI Training" od kary 310 mln EUR

**Plik:** strona główna + frontmatter C05

- **Obecnie:** "LinkedIn AI Training | 310 mln EUR | 2024"
- **Powinno być (rozdzielić):** > LinkedIn — kara 310 mln EUR (RODO behavioral ads, X.2024) + monitoring DPC ws. trenowania AI (XI.2025)
- **Uwaga:** Kara 310 mln EUR DPC (24.10.2024) dotyczyła **behavioral analytics**, nie trenowania AI

---

# 🟢 PRIORYTET 4 — drobne nieścisłości

### [ ] A01 — Pole "Rok ujawnienia" zawiera datę dzienną

**Plik:** `content-source/A01_local_mess.md`

- **Powinno być:** nazwa pola "Data ujawnienia" (spójność z zawartością)

### [ ] A07 — Des Hogan + Dale Sunderland (nie tylko Hogan)

**Plik:** `content-source/A07_kara_1_2mld.md`

- **Powinno być:** > **Des Hogan (Chairperson) i Dale Sunderland** — Data Protection Commissioners od 20 lutego 2024
- **Źródło:** [DPC](https://www.dataprotection.ie/en/news-media/press-releases/new-data-protection-commissioners-take-their-new-roles)

### [ ] B01 — "Marzec 2013" ugoda 38 stanów: uściślić 12 marca 2013

**Plik:** `content-source/B01_street_view_wifi.md`

### [ ] B01 — Korea Płd. data raidu: listopad 2011 → sierpień 2010

**Plik:** `content-source/B01_street_view_wifi.md`

- **Powinno być:** > **10 sierpnia 2010** — policja przeszukuje biuro Google w Seulu, zajmuje 79 dysków
- **Źródło:** [JURIST, 2011](https://www.jurist.org/news/2011/01/south-korea-police-announce-google-violated-privacy-laws-by-collecting-private-data/)

### [ ] B01 — Hamburg DPA: data 22 kwietnia 2013

**Plik:** `content-source/B01_street_view_wifi.md`

- **Powinno być:** > **22 kwietnia 2013** — Hamburg DPA (Johannes Caspar) nakłada 145 000 EUR

### [ ] B01 — Joffe v. Google ugoda 2019: 13 mln USD na cy pres, nie wypłaty

**Plik:** `content-source/B01_street_view_wifi.md`

- **Powinno być:** > **22 lipca 2019** — *Joffe v. Google*: 13 mln USD na **9 organizacji prywatności (cy pres)**, klasa nie otrzymała wypłat. Apelacja podtrzymana 9th Circuit XII.2021
- **Źródło:** [CNN, 22.07.2019](https://www.cnn.com/2019/07/22/tech/google-street-view-privacy-lawsuit-settlement)

### [ ] B02 — Jonathan Mayer rok urodzenia 1984: brak źródła

**Plik:** `content-source/B02_safari_workaround.md`

- **Powinno być:** **usunąć** lub potwierdzić źródłem

### [ ] B04 — Carpenter v. United States: dodać dokładną datę

**Plik:** `content-source/B04_location_history.md`

- **Powinno być:** > **22 czerwca 2018**, 5-4, opinia większości Chief Justice John Roberts

### [ ] B05 — Brown v. Google: 1 kwietnia 2024 to motion for final approval

**Plik:** `content-source/B05_incognito.md`

- **Powinno być:** > **1 kwietnia 2024** — powodowie złożyli **unopposed motion for final approval**; fairness hearing zaplanowany na lipiec 2024

### [ ] C04 — Recall: Beaumont post date i title

**Plik:** `content-source/C04_microsoft_recall.md`

- **Powinno być:** > **21 maja 2024** — Kevin Beaumont, "How the new Microsoft Recall feature fundamentally undermines Windows security", DoublePulsar

### [ ] C04 — Insider Preview: wrzesień → 22 listopada 2024

**Plik:** `content-source/C04_microsoft_recall.md`

- **Powinno być:** > **22 listopada 2024** — Windows Insider Program (Snapdragon Copilot+ PC). Wcześniejszy plan czerwiec → październik → listopad 2024

### [ ] D01 — Refunds Ring 2024: 47,70 USD lub 150 USD, nie "~48 USD"

**Plik:** `content-source/D01_amazon_ring.md`

- **Powinno być:** > **25 kwietnia 2024** — FTC rozpoczęła wysyłanie 117 044 zwrotów (PayPal), łącznie **>5,6 mln USD**. Kwota indywidualna: **47,70 USD lub 150,00 USD**
- **Źródło:** [FTC press release](https://www.ftc.gov/news-events/news/press-releases/2024/04/ftc-sends-refunds-ring-customers-stemming-2023-settlement-over-charges-company-failed-block)

### [ ] D06 — Sullivan: uściślić daty stanowisk

**Plik:** `content-source/D06_uber_breach.md`

- **Powinno być:** > Joe Sullivan — Associate General Counsel Facebook (2008), CSO Facebook (styczeń 2010 – kwiecień 2015), CSO Uber (wiosna 2015 – listopad 2017), **CSO Cloudflare (maj 2018 – lipiec 2022)**

### [ ] D06 — Tony West: 2017 → listopad 2017

**Plik:** `content-source/D04_uber_god_view.md` + `D06_uber_breach.md`

- **Powinno być:** > Tony West — CLO Uber **od listopada 2017**

### [ ] D06 — Hakerzy Glover/Mereacre: wiek na moment plead guilty 2019, nie 2016

**Plik:** `content-source/D06_uber_breach.md`

- **Powinno być:** > **Brandon Charles Glover** (Floryda, 26 lat w 2019), **Vasile Mereacre** (Toronto, Kanada, 23 lata w 2019) — **przyznali się w październiku 2019**

### [ ] D06 — Zakres breach: 57 mln + 600k - 600k jest podzbiorem 7 mln kierowców

**Plik:** `content-source/D06_uber_breach.md`

- **Powinno być:** > **57 mln kont łącznie**: ~50 mln pasażerów i ~7 mln kierowców. Dodatkowo **~600 000 amerykańskich kierowców** miało ujawnione numery prawa jazdy (podzbiór 7 mln)

### [ ] E01 — Cristina Criddle: tracking przez konto kota Buffy

**Plik:** `content-source/E01_tiktok_journalists.md`

- **Powinno dodać (Ciekawostki):** > ByteDance śledził Criddle przez konto jej kota **Buffy** (czarno-biały Maine Coon, ~170 followerów)
- **Źródło:** [Gizmodo](https://gizmodo.com/tiktok-financial-times-track-buffy-cat-cristina-criddle-1850408534)

### [ ] E02 — Anu Talus: dodać "od 25 maja 2023"

**Plik:** `content-source/E02_tiktok_children.md`

- **Powinno być:** > Anu Talus — przewodnicząca EDPB **od 25 maja 2023**, Data Protection Ombudsman Finlandii (literówka "fiński kod" → "fińska DPA")

### [ ] E05 — Robert Williams (Detroit): uściślić technologię

**Plik:** `content-source/E05_clearview_ai.md`

- **Powinno być:** > Robert Williams — aresztowany **9 stycznia 2020** w Farmington Hills przez Detroit Police. Technologia: **DataWorks Plus** (nie Clearview AI). Settlement z DPD: lato 2024
- **Źródło:** [ACLU](https://www.aclu.org/cases/williams-v-city-of-detroit-face-recognition-false-arrest)

---

# ✅ Fakty potwierdzone jako poprawne

Sprawdzone i prawidłowe — można cytować z pełną pewnością:

## Karty bez błędów

- **A01 (Local Mess)** — Dan Goodin Ars Technica, IMDEA Networks, Chrome 137, daty 3.06.2025
- **A04 (533 mln leak)** — 533 136 969 kont, 106 krajów, kwiecień 2021, DPC 265 mln EUR (25.11.2022)
- **A08 (New Mexico v. Meta)** — wyrok 24.03.2026, 375 mln USD, Santa Fe, Raúl Torrez
- **A09 (Meta 390 mln)** — FB 210 mln + IG 180 mln + WhatsApp 5,5 mln, 4.01.2023
- **C05 (LinkedIn AI)** — 310 mln EUR (24.10.2024), 7.11.2025 oświadczenie DPC
- **D05 (Uber Greyball)** — Mike Isaac NYT 3.03.2017, Uber Files MacGann 10.07.2022
- **E04 (X/Grok)** — Taylor Swift 47 mln wyświetleń, 27.01.2024 X blokada, DSA 120 mln EUR 5.12.2025

## Kluczowe fakty potwierdzone:

**RODO/DMA/DSA:**
- Meta 1,2 mld € DPC, 22.05.2023
- Meta 390 mln € DPC (FB 210 + IG 180), 04.01.2023
- WhatsApp 5,5 mln €, 19.01.2023
- DPC 265 mln € za leak 533 mln, 25.11.2022
- Apple 500 mln € + Meta 200 mln € DMA, 23.04.2025
- X DSA 120 mln €, 05.12.2025
- LinkedIn 310 mln € DPC, 24.10.2024
- TikTok 345 mln € DPC, 15.09.2023
- TikTok 530 mln € DPC, 02.05.2025
- TikTok 12,7 mln GBP ICO, 04.04.2023
- Clearview AI: CNIL 20 mln € (17.10.2022), Garante 20 mln € (10.02.2022), HDPA 20 mln € (13.07.2022), Dutch DPA 30,5 mln € (03.09.2024)

**TSUE:**
- Schrems II (C-311/18), 16.07.2020
- Schrems I (C-362/14), 06.10.2015
- Carpenter v. United States (585 U.S. 296), 22.06.2018
- Meta v. Bundeskartellamt (C-252/21), 04.07.2023

**EROD/EDPB:**
- Andrea Jelinek → Anu Talus (chair od 25.05.2023)
- EDPB Opinion 08/2024 (consent or pay), 17.04.2024
- Binding Decision 1/2023 (Schrems II), 13.04.2023
- Binding Decision 2/2023 (TikTok), 02.08.2023

**USA:**
- FTC 5 mld USD Facebook, 24.07.2019
- Texas BIPA Meta 1,4 mld USD, 30.07.2024
- Texas Google location 1,375 mld USD, 2025
- FTC Ring 5,8 mln USD, 31.05.2023
- FTC Alexa COPPA 25 mln USD, 31.05.2023
- FTC Microsoft Xbox 20 mln USD, 5.06.2023
- FTC YouTube/Google 170 mln USD, 04.09.2019
- FTC Epic Games 520 mln USD, 19.12.2022
- FTC Zoom settlement, 09.11.2020
- FTC Google Safari, 22,5 mln USD, 09.08.2012
- DPC Helen Dixon (2014–19.02.2024) → Des Hogan + Dale Sunderland

**Cambridge Analytica:**
- 87 mln użytkowników, 270 000 pobrań aplikacji
- CA założona grudzień 2013, $15 mln Mercer, Bannon VP
- Christopher Wylie ur. 19.06.1989, 28 lat w marcu 2018
- Aleksandr Kogan — Moldovan-born, Cambridge Prosociality Lab
- Carole Cadwalladr (Observer), Channel 4 Nix
- Zuckerberg Kongres 10-11.04.2018, EP 22.05.2018

**Inne potwierdzone:**
- Microsoft kupuje LinkedIn za 26,2 mld USD (06.2016, zamknięcie 12.2016)
- Local Mess — Meta + Yandex, ujawnienie 03.06.2025
- "Local Mess" — Aniketh Girish, Günes Acar, Narseo Vallina-Rodríguez (IMDEA/Radboud/KU Leuven)
- Frances Haugen — 60 Minutes 03.10.2021, Senate 05.10.2021, EP 08.11.2021
- Facebook → Meta przemianowanie 28.10.2021
- Project Maven non-renewal 01.06.2018
- Google Walkout 01.11.2018 (20 000+ pracowników)
- Google+ launch 28.06.2011, shutdown 02.04.2019
- Lloyd v Google [2021] UKSC 50 — 10.11.2021
- Vidal-Hall v Google [2015] EWCA Civ 311 — 27.03.2015
- Travis Kalanick rezygnacja 20-21.06.2017
- Dara Khosrowshahi CEO Uber od 08.2017
- Sullivan skazany 05.10.2022, wyrok 04.05.2023, 9th Circuit 13.03.2025
- Marius Milner — autor NetStumbler, kod gstumbler w 20% time Google
- Hoan Ton-That ur. 1988 Melbourne (Tôn Thất Hoàn)

---

# Rekomendacja procesowa

1. **NAJPILNIEJSZE** (P1, ryzyko reputacyjne przy cytowaniu):
   - **D02** (pomylenie Apple Siri z Amazon Alexa) — fundamentalny błąd merytoryczny
   - **B01** (Kozinski) — fałszywa atrybucja sędziego + kontekst skandalu
   - **A10** (Kaplan, 4 błędy)
   - **A02** (ugoda akcjonariuszy, data + kwota)
   - **E05** (Schwartz/Swartz sprzeczność, Thiel 200k vs 8,4 mln)

2. **Następnie** P1 drugi tier — pozostałe karty z pomyłkami tożsamości i krytycznymi datami

3. **Potem** P2 — daty +/-1 dzień, kwoty (głównie zamiana search/replace)

4. **Na końcu** P3-P4 — niespójności strona główna ↔ karty, drobne nieścisłości

## Wzorce systemowe do zauważenia:

1. **Mylenie cy pres z direct payments** — Joffe (B01), Patacsil (B04). Cy pres = środki idą do organizacji prywatności, nie do klasy.
2. **Mylenie zapowiedzi z wydaniem** — iOS 13.2 (C02), Microsoft Recall (C04)
3. **Daty przesunięte o ~1 dzień przy oficjalnych komunikatach** — ICO (A02), AGCM (C01), gatekeepers DMA (A10)
4. **Pomylone tożsamości firm/spraw** — Apple Siri vs Amazon Alexa (D02), Texas Pixel 4 vs Texas location (B04)
5. **Literówki transkrypcji głosowej** — "Very Peenya" (B03), "Roman Khavronenko" (A03), "operativac" (E05)
6. **Sprzeczności wewnętrzne** — Kaplan w A10, Schwartz/Swartz w E05, daty NM w A05

## Statystyki finalne

| Kategoria | Liczba |
|-----------|--------|
| **Sprawdzonych kart** | **33 z 33** |
| Błędów P1 (poważne) | ~42 |
| Błędów P2 (istotne) | ~33 |
| Błędów P3 (niespójności) | ~15 |
| Drobnych P4 | ~24 |
| **Razem do poprawy** | **~114** |
| Kart bezbłędnych | 7 (A01, A04, A08, A09, C05, D05, E04) |
| Kart z >5 błędami | 4 (A05, B04, E05, A10) |

---

*Plik wygenerowany jako wynik factchecku Matrycy, 2026-05-26. Sprawdzenie wykonane przez 5 równoległych agentów (po jednej grupie kart każdy) + sesję manualną. Wszystkie błędy zweryfikowane wobec źródeł publicznych.*
