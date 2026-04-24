# Gap analysis — Matryca vs korpus Panoptykon / Szymielewicz

_Raport porównawczy, kwiecień 2026. Źródła: 33 karty Matrycy (`src/content/cases/`), 12 profili (`src/data/people.ts`), 16 scen KIEDY, 4 eseje; oraz korpus 4262 dokumentów Panoptykonu (2904 HTML + 1358 PDF, ~51,5 mln słów) z profilami Szymielewicz/Klicki/Obem, timeline 2009–2026 i 28 kolekcjami cytatów tematycznych._

---

## 0. Rama porównania

Matryca to **galeria skandali korporacyjnych** — 33 sprawy, 31 czysto zachodnich/chińskich, 2 z polskim wątkiem ubocznym (A04 wyciek FB, A10 DMA). Tag `polski-watek` funkcjonuje jako ciekawostka, nie odrębna oś.

Panoptykon w 17 lat zbudował **dwa paralelne fronty**: europejski (RODO → DSA/DMA/AI Act → DFA 2026) i **polski** (służby, retencja, UODO, fiskus, szkoły, platformy pracy). Drugiego frontu w Matrycy prawie nie ma. Mostek `matryca_bridge` pokazał: z 33 kart Panoptykon komentował merytorycznie **12**. Reszta to sprawy czysto amerykańskie (Apple CSAM, Microsoft Recall, Amazon Ring, Uber God View, TikTok transfers, Zoom, Dragonfly). Równolegle Panoptykon pisał o **dziesiątkach polskich spraw nieobecnych w Matrycy wcale**.

Gap nie jest brakiem materiałów — jest decyzją kuratorską: dopasowanie polskiego odcinka (rozbudowa istniejących kart + opcjonalnie nowe karty F/G + „Kronika polska" jako kolejne drzwi).

---

## 1. Sprawy nieobecne w Matrycy, udokumentowane u Panoptykon/KS

### 1.1. Pegasus w Polsce (2017–)
**286 dok / 1099 wzm.** CBA kupuje Pegasus (2017), używa na Giertychu, Brejzie, Wrzosek; ujawnienie Citizen Lab 11.2021; komisja sejmowa 2023–24. Panoptykon: raport *Osiodłać Pegaza* (56 traf.), wyjaśniacze z Adamem Haertle, recenzja książki *Pegasus. Jak szpieg, którego nosisz*. Źródło: `panoptykon-analiza/analiza/cytaty/pegasus_spyware.md`.
**Dlaczego:** Matryca opisuje inwigilację korporacyjną; Pegasus = państwowa na tej samej infrastrukturze. Bez tej karty czytelnik nie zobaczy, że Uber „God View" ma polski odpowiednik kontroli politycznej opozycji.

### 1.2. Retencja danych telekomunikacyjnych PL (2010–2026)
**638 dok / 3693 wzm.** Kluczowa liczba: **~2 mln zapytań służb rocznie**, bez kontroli sądowej. 2025: precedensowe wnioski do telekomów (Klicki + Chachuła + Szymielewicz + Kula, prawnik Litwiński) → UODO → TSUE. 24.04.2025: rząd deklaruje brak dalszego przedłużenia. Źródła: `cytaty/polskie_sluzby_inwigilacja.md`, `PROFIL_Klicki.md`.
**Dlaczego:** To polski pendant spraw TSUE Digital Rights Ireland 2014 i Tele2 Sverige 2016 — kanonicznych precedensów retencji. Matryca nie ma żadnej karty o retencji.

### 1.3. Profilowanie bezrobotnych w urzędach pracy (2015–2018)
Raport Panoptykonu *Profiling the Unemployed in Poland* (2015) — **pierwsze polskie case study algorytmicznej dyskryminacji**. TK 2018: system częściowo niezgodny z konstytucją. Źródło: `TIMELINE_Panoptykon_2009_2026.md`, sekcja 2015.
**Dlaczego:** Jedno z trzech kanonicznych case'ów Europy (obok holenderskiej SyRI i duńskiej Gladsaxe). Mamy polską sprawę, nie trzeba pożyczać.

### 1.4. Smart Borders / inwigilacja uchodźców (2016–)
**49 dok / 184 wzm.** Raport *Uchodźcy pod szczególnym nadzorem* (2016) + konsultacje EES/ETIAS/Eurodac. Źródło: `cytaty/strefa_schengen_smart_borders.md`.
**Dlaczego:** Matryca ma tag `mniejszosci`, zero kart o migrantach. Nadzór graniczny = pierwsza linia biometrycznej inwigilacji masowej w UE.

### 1.5. Chat Control / CSAM regulacja (2022–)
**42 dok / 268 wzm.** Propozycja KE (Ylva Johansson, 2022) skanowania E2E pod CSAM. Panoptykon przeciw — rozmowa z Michałem „ryśkiem" Woźniakiem (12.2024). Źródło: `cytaty/chat_control_csam.md`.
**Dlaczego:** Matryca ma C03 (Apple CSAM, klient-side scanning) ale nie ma karty o europejskim Chat Control, który jest nadal żywy (2026) i dotyczy Signal/WhatsApp/Proton.

### 1.6. ABW/CBA dostęp do metadanych (2013–)
Raport *100 pytań o inwigilację* (2013 — 63 traf.), stanowiska o ustawie inwigilacyjnej 2016, opinia TK K 54/07 o CBA. **11 polskich służb** ma prawo do kontroli operacyjnej (pełne uprawnienia: ABW, AW, CBA, SKW, SWW). Źródło: `cytaty/polskie_sluzby_inwigilacja.md`.
**Dlaczego:** Bez tej karty Matryca pozostaje portalem o tym, co robią amerykańskie korporacje obywatelowi PL — nie o tym, co polskie państwo robi obywatelowi PL.

### 1.7. Panoptykon v. IAB Europe / TCF (2018–)
Skarga UODO (2019) o standard Transparency and Consent Framework (infrastruktura zgód cookies w całej Europie). W TSUE. Źródło: `PROFIL_Szymielewicz.md` sekcja 3.1.
**Dlaczego:** Matryca ma A09/A10, ale brak karty o samym TCF — podstawie całego systemu cookies-consent.

### 1.8. SIN vs Facebook (2018–)
Konto Społecznej Inicjatywy Narkopolityki zablokowane od 2018; Panoptykon w sądzie o precedens procedury odwoławczej. Źródła: `PROFIL_Szymielewicz.md` 3.1, `PROFIL_Klicki.md` 4.5.
**Dlaczego:** Polski case o globalnym znaczeniu — idealny pendant do A05 (Facebook Files).

### 1.9. FRT w polskiej policji
**166 dok / 485 wzm.** Polskie służby używają FRT bez dedykowanej ustawy. AI Act 2025: Panoptykon walczy o utrzymanie zakazu FRT w czasie rzeczywistym. Źródło: `cytaty/rozpoznawanie_twarzy.md`.
**Dlaczego:** Matryca ma E05 (Clearview, USA). Polski FRT = systematyczny, mniej znany, potrzebuje pendanta od strony państwowej.

### 1.10. E-paragony / wzmocnienie fiskusa (KAS)
Klicki 26.05.2025 i 9.09.2025 — rozszerzanie uprawnień służb skarbowych, kasy fiskalne online, wymóg identyfikacji. Źródło: `PROFIL_Klicki.md` 4.4.
**Dlaczego:** Państwo zbiera dane transakcyjne na skalę, której IRS nie ma. Naturalny rozdział „państwo jako Big Data".

### 1.11. ProteGo Safe / COVID (2020)
Panoptykon krytykuje scentralizowany model polski wobec DP-3T (Google/Apple ENS). Źródło: `TIMELINE_*` sekcja 2020.

### 1.12. BIK / art. 22 RODO (2019)
Wygrana Panoptykonu: banki muszą tłumaczyć decyzje kredytowe. Brak w Matrycy mimo tagu `rodo`. Źródło: `TIMELINE_*` sekcja 2019.

### 1.13. Weto Nawrockiego dla ustawy wdrażającej DSA (11.2025)
Ping-pong Kancelaria Prezydenta (Andruszkiewicz) ↔ MinCyf ↔ Panoptykon. Trilog w Pałacu 04.2026. **Najgorętsza polska sprawa 2026 roku.** Źródło: `TIMELINE_*` sekcje 2025/2026.

### 1.14. Algorytmy traumy (Panoptykon × Sapieżyński, 2022)
Eksperyment z University of Northwestern — 1 na 5 reklam zdrowotnych u osoby z zadeklarowaną traumą. Polski empiryczny replikat Haugen. Źródło: `PROFIL_Szymielewicz.md` 3.1.

### 1.15. Panoptykon v. X (2026)
Nowa sprawa — szczegóły w `TIMELINE_*` sekcja 2026. Pendant do E04 od strony strukturalnej (model biznesowy, nie deepfake).

---

## 2. Osoby nieobecne w `people.ts` (zero polskich)

W Matrycy 12 postaci — 10 zachodnich, Schrems (AT), Caspar (DE). Polski ekosystem praw cyfrowych ma w korpusie Panoptykonu pełną biografię kilkunastu postaci:

- **Katarzyna Szymielewicz** — 1745 wzm. Prezeska Panoptykonu, autorka manifestu *A New Deal for Data* (2019), metafory „cyfrowa biomasa" (2018). Rola: aktywistka. `PROFIL_Szymielewicz.md`.
- **Wojciech Klicki** — 3137 wzm. Prawnik-kampanier. Flagowe: retencja, Pegasus, podsłuchy, Uber. Rola: aktywista/prawnik. `PROFIL_Klicki.md`.
- **Anna Obem** — 524 artykuły autorskie. Dyrektorka zarządzająca, współautorka flagowego polskiego tekstu o Facebook Files (4.11.2021). Rola: aktywistka. `PROFIL_Obem.md`.
- **Małgorzata Szumańska** — współzałożycielka Panoptykonu (2009), 142 artykuły.
- **Dorota Głowacka** — prawniczka, domena: blokady platform, SIN vs FB.
- **Mirosław Wróblewski** — Prezes UODO (2024–), regulator publicznie występujący. `REFERENCJE_polska_swiat.md` A.3.
- **Adam Bodnar** — katalizator założenia Panoptykonu, RPO 2015–2020, Min. Sprawiedliwości 2023–.
- **Mikołaj Pietrzak** — adwokat ofiar Pegasusa (m.in. Giertycha).
- **Sylwia Czubkowska** — Spider's Web / Techstorie. *Kto się boi Chin?* (2022). Pendant do kart TikTok. Rola: dziennikarka. `REFERENCJE_*` A.2.
- **Piotr Sapieżyński** — Northwestern, współautor *Algorytmów traumy* (2022). Rola: badacz.
- **Elżbieta Rutkowska / Tomasz Pietryga / Sławomir Wikariak (DGP)** — polska linia dziennikarska legislacji cyfrowej.

Rozsądna rozbudowa: do 18–20 osób, z tego 4–6 polskie (Szymielewicz, Klicki, Obem, Wróblewski + Bodnar lub Czubkowska).

---

## 3. Tematy marginalne w Matrycy, wiodące u Panoptykon

1. **Polskie służby vs Big Tech** — 638 dok u Panoptykona, zero w Matrycy.
2. **Praca platformowa** (Uber/Bolt/Glovo/Free Now) — Matryca D04–D06 bez wątku pracowniczego i bez ustawy platformowej UE 2024.
3. **FRT w szkołach, CCTV miejskie** — 32 + 166 dok u Panoptykona. Brak w Matrycy.
4. **ZUS/NFZ/KAS jako źródła danych** — polska specyfika państwowych rejestrów. Brak.
5. **Retencja danych telekomunikacyjnych** — flagowy temat Klickiego. Brak.
6. **AI Act — polska implementacja** („lider deregulacji?" — Klicki 5.2025). Brak.
7. **Digital Omnibus 2025–2026** — list otwarty 126 NGO, pakiet deregulacyjny KE. Brak.
8. **Cyfrowa suwerenność / PLLM / podatek cyfrowy** — Panoptykon + izby wydawców + SpeakLeash. Brak.

---

## 4. „New Deal for Data" (Szymielewicz, 2019) — postulaty do esejów

Manifest: `panoptykon-analiza/linkedin/04_manifesto_new_deal_for_data_2019.md`. Osiem postulatów:

1. **Storage vs Story** — rozdzielenie „co zapisane" (RODO art. 15) od „co wywnioskowane" (RODO art. 22).
2. **Standardised API** definiowana przez regulatora — użytkownik edytuje swój profil marketingowy.
3. **Data trusts / data management services** — pośrednicy reprezentujący użytkownika.
4. **Non-curated chronological newsfeed** — częściowo zdobyte w DSA art. 38.
5. **Interconnection between platforms** — inspiracja telekomami lat 90.
6. **Labels for algorithms** (jak leki, auta) — transparentność skutków.
7. **Privacy by design** jak pasy bezpieczeństwa. W 2026 Szymielewicz rozwija jako *Safety by design* (przeciw social media bans).
8. **Citizens-users** — nie klient/konsument; podstawa rozróżnienia „biomasa vs podmiot" (2020).

Rekomendacja: rozszerzyć esej „Od organizacji" o storage/story + standardised API. To będzie pierwsze miejsce w Matrycy z rozwiązaniem infrastrukturalnym, nie tylko diagnozą.

---

## 5. Brakujące precedensy prawne

Matryca ma tag `schrems-ii` i ogólne odwołania do A07/A09. Brakujący łańcuch orzeczeń:

- **Digital Rights Ireland (2014, C-293/12)** — unieważnienie dyrektywy 2006/24/WE o retencji. Matka polskiej sprawy retencji.
- **Tele2 Sverige / Watson (2016, C-203/15, C-698/15)** — standard „ukierunkowanej retencji".
- **La Quadrature du Net (2020, C-511/18)** — trzecie orzeczenie w linii retencyjnej.
- **Bărbulescu v. Romania (2017, ETPC)** — limity monitoringu korespondencji pracowników.
- **Big Brother Watch v. UK (2018, ETPC)** — masowa inwigilacja po Snowdenie.
- **Klass i inni p. Niemcom (1978, ETPC)** — klasyczny precedens ETPC o kontroli sądowej nad inwigilacją.
- **IAB Europe v. Gegevensbeschermingsautoriteit (2024, TSUE)** — TCF. Panoptykon współskarży.
- **Polskie wyroki NSA o BIK** — Panoptykon wygrywa 2019.

Źródła: `REFERENCJE_polska_swiat.md`, `cytaty/rodo_gdpr.md`. Rekomendacja: rozszerzyć `legal_basis` we frontmatterze o sygnatury TSUE/ETPC, lub osobny „Atlas precedensów".

---

## 6. Rekomendacje

### 6.a Nowe karty — 10 propozycji

Proponuję nową grupę **F (państwo PL)** i **G (prywatna infrastruktura PL)**; alternatywnie wcielenie do A–E.

| ID | Tytuł | Streszczenie | Źródło |
|---|---|---|---|
| F01 | Pegasus w Polsce | CBA kupuje (2017), Giertych/Brejza/Wrzosek; komisja sejmowa 2023–24 | `cytaty/pegasus_spyware.md` |
| F02 | Retencja danych PL | 2 mln zapytań/rok; precedensowe wnioski 04.2025; droga do TSUE | `cytaty/polskie_sluzby_inwigilacja.md` + `PROFIL_Klicki.md` |
| F03 | Profilowanie bezrobotnych | Algorytm 2015, TK 2018 — częściowo niekonstytucyjny | `TIMELINE_*` 2015 |
| F04 | Weto Nawrockiego / DSA | Ping-pong 2025–26, trilog w Pałacu 04.2026 | `TIMELINE_*` 2025/26 |
| F05 | ProteGo Safe / COVID | Centralny vs DP-3T | `TIMELINE_*` 2020 |
| F06 | E-paragony / KAS | Klicki 5.2025 i 9.2025 | `PROFIL_Klicki.md` 4.4 |
| G01 | Panoptykon v. IAB / TCF | Skarga o standard cookies, TSUE 2024 | `PROFIL_Szymielewicz.md` 3.1 |
| G02 | SIN vs Facebook | Konto zablokowane 2018; precedens procedury odwoławczej | `PROFIL_Szymielewicz.md` 3.1, `PROFIL_Klicki.md` 4.5 |
| G03 | Algorytmy traumy (2022) | Polski replikat Haugen; 1 na 5 reklam zdrowotnych | `PROFIL_Szymielewicz.md` 3.1, `PROFIL_Obem.md` 4.4 |
| F07 | BIK / art. 22 RODO | Wygrana 2019: banki muszą tłumaczyć decyzje | `TIMELINE_*` 2019 |

Minimum operacyjne: **F01 Pegasus, F02 Retencja, G02 SIN, G03 Algorytmy traumy** — wszystkie mają gotowy materiał źródłowy porównywalny z istniejącymi kartami.

### 6.b Wzbogacenie istniejących kart o polski wątek

| Karta | Rekomendacja | Źródło |
|---|---|---|
| A02 Cambridge Analytica | Szymielewicz 21/26.03.2018 (pierwsze „biomasa"); raport *Who (really) targets you?* 2018–19 | `analiza/matryca/A02_cambridge_analytica.md` + CYTATY |
| A05 Facebook Files | Obem + Iwańska 4.11.2021; *Algorytmy traumy* jako replikat | `analiza/matryca/A05_*` + CYTATY |
| A06 Emotional contagion | *Algorytmy traumy* (Sapieżyński + Spider's Web+) | `PROFIL_Obem.md` 4.4 |
| A07 Meta 1,2 mld DPC | Komentarz Panoptykonu 2023, skutki dla polskich firm | `cytaty/meta_facebook.md` |
| A09 Kara 390 mln DPC | Stanowisko wobec „legitimate interest" + kampania wydawców 2025 | `PROFIL_Szymielewicz.md` 3.4 |
| A10 DMA 200 mln | Szymielewicz 8.04.2026 *Francuzi karzą Google'a. Co z tego dla polskich firm?* | `analiza/matryca/A10_*` |
| B04 Location History | Polskie orzecznictwo dostępu służb do danych lokal. | `analiza/matryca/B04_*` |
| C03 Apple CSAM | Chat Control 2022–24, rozmowa z Woźniakiem 12.2024 | `cytaty/chat_control_csam.md` |
| C04 Microsoft Recall | Polska administracja publiczna, rządowe zamówienia Microsoftu | `cytaty/microsoft.md` |
| C05 LinkedIn AI | Szymielewicz jako użytkowniczka LinkedIn, komentarze 2025–26 | `linkedin/03_activity_feed_full.md` |
| D04–D06 Uber | Klicki 19.03.2026 *Nadchodzi blokada na Ubera?*; ustawa o platformach 2024 | `PROFIL_Klicki.md` 4.7 |
| E01 TikTok/ByteDance | Czubkowska *Kto się boi Chin?* (2022) | `cytaty/tiktok.md` + `REFERENCJE_*` A.2 |
| E02 TikTok — dzieci | Kampania *15 powodów* z FDDS 02.2026; 1,4 mln dzieci <13 z kontami SM | `TIMELINE_*` 2026 |
| E04 X / Grok | Panoptykon v. X (2026) | `TIMELINE_*` 2026 |
| E05 Clearview | FRT w polskiej policji, stanowisko z AI Act 2025 | `cytaty/rozpoznawanie_twarzy.md` |

Dla 12 kart Panoptykon przygotował mapowanie (`analiza/matryca/*.md`). Dla A02, A05 gotowe są cytaty (`analiza/matryca_cytaty/*_CYTATY.md`). Pozostałe można wygenerować skryptem `08_matryca_bridge.py`.

### 6.c Nowe sekcje/strony

1. **„Kronika polska"** — chronologiczny przegląd 2009–2026 na bazie `TIMELINE_Panoptykon_2009_2026.md`. 16–18 scen scrollytellingowych, odpowiednik osi KIEDY, ale lokalny.
2. **„Alfabet inwigilacji PL"** — 26 haseł (A = ABW, B = billing, C = CBA, P = Pegasus, R = retencja, S = SORM, U = UODO…). Format: 200–400 słów per hasło, z linkami do kart i źródeł.
3. **Piąty esej „Od sygnalisty / adwokata prywatności"** — profil na bazie Klickiego i Szymielewicz (prawnik-kampanier, precedensowe postępowania, praca z RPO/TK).
4. **„Atlas precedensów"** — tabela TSUE/ETPC/NSA (10–15 pozycji), nie karta skandalu, tylko warstwa odniesień.
5. **„Panoptykon w 33 sprawach"** — jedno zdanie komentarza Panoptykona na kartę (gotowe dla 12, reszta szybko do dorobienia).

### 6.d Rozbudowa tagów

Obecnie 25. Brakuje 11:

`polskie-sluzby`, `platformowa-praca`, `inwigilacja-szkolna`, `retencja-danych`, `profilowanie-algorytmiczne`, `chat-control`, `smart-borders`, `digital-fairness-act`, `digital-omnibus`, `cookies-tcf`, `interoperability`.

Łącznie 36 tagów — kontrolowana rozbudowa bez inflacji.

---

## 7. Decyzje dla Jana

1. **Czy Matryca ma pozostać portalem o skandalach Big Tech, czy rozszerzyć się na „infrastrukturę władzy cyfrowej"?** Pierwsza wersja zachowuje 33 karty korporacyjne, polska perspektywa jako wątek. Druga otwiera ekspansję o polskie państwo (Pegasus, retencja, CBA) — wymaga misji krytyki polskich służb. Panoptykon łączy jedno z drugim bez problemu; Matryca w obecnym stylu nie.
2. **Osobna grupa F (państwo PL) i G (prywatna infrastruktura PL), czy wcielać polskie sprawy do A–E?** Za F/G: jasność kategorii, odrębna narracja. Za A–E: mniej opakowania, prostsza nawigacja.
3. **Zachować `people.ts` w 12 osobach zachodnich, czy rozbudować do 18–20 z polskim filarem?** Za jedną galerią uniwersalną: „sygnaliści cyfrowi świata". Za dwiema: Polska + świat, z własną narracją.
4. **Archiwum spraw zamkniętych, czy również tracker spraw otwartych?** Weto Nawrockiego DSA, retencja-TSUE, Panoptykon v. X są w toku. Karta „żywa" (z datą aktualizacji, skumulowanymi wpisami) wymaga zmian w workflow.
5. **Partnerstwo merytoryczne z Panoptykonem?** Korpus jest tak obszerny, że operacyjnie rozsądne jest: Matryca linkuje do publikacji Panoptykonu w „Źródłach" każdej karty; Panoptykon może wzajemnie linkować do Matrycy jako bazy referencyjnej. Cytaty Szymielewicz/Klickiego/Obem w „Osobach kluczowych" bez dodawania jako autorów. Wymaga rozmowy z Obem lub Szymielewicz.

---

## 8. Podsumowanie

Matryca jest dobrze wykonanym portalem o skandalach **korporacyjnych zachodnich**. Polski kontekst istnieje jako ślad: jeden tag, dwie karty z polskim akcentem, kilka zdań w C03, eseje otwierające debatę.

Panoptykon przez 17 lat wytworzył korpus, który na każdym elemencie Matrycy ma polski pendant: do Facebook Files — Obem/Iwańska 2021; do Cambridge Analytica — Szymielewicz 2018–19; do Clearview — AI Act 2025; do Emotional Contagion — *Algorytmy traumy* 2022; do Uber — ustawa platformowa 2026; do Microsoft Recall — polska administracja.

Równolegle Panoptykon dokumentuje **dziesięć polskich spraw nieobecnych w Matrycy wcale**: Pegasus, retencja, profilowanie bezrobotnych, CBA/ABW/SKW, weto Nawrockiego, BIK, SIN vs Facebook, Smart Borders, Chat Control, IAB/TCF. Każda ma 30–300 dokumentów źródłowych i gotową chronologię w `TIMELINE_Panoptykon_2009_2026.md`.

Gap nie jest brakiem materiałów. Gap jest decyzją kuratorską: **polska oś narracyjna jako drugie równoległe piętro, czy polski wątek wewnątrz istniejących kart?** Pierwsze wymaga +8–10 kart F/G + kroniki PL + rozbudowy `people.ts`. Drugie — tylko wzbogacenia 15 istniejących kart o polskie cytaty z korpusu + 11 nowych tagów.

Obie drogi są zgodne z konstytucją portalu. Wybór należy do Jana.
