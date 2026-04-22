# D03 — Amazon Alexa & COPPA: Dane dzieci zachowywane "na zawsze" mimo żądań rodziców

> **Kategoria:** Prywatność dzieci / COPPA / Alexa Kids / żądania usunięcia ignorowane
> **Firma/firmy:** Amazon
> **Lata:** 2018 (Alexa Kids launch) – maj 2023 (kara FTC 25 mln USD)
> **Status:** Zakończone — 25 mln USD kara, nakaz usuwania danych i zmiany polityki
> **ID karty:** D03

---

## Metadane

| Pole | Wartość |
|------|---------|
| Kraj/region | USA federalne |
| Rok ujawnienia | 31 maja 2023 (skarga FTC/DOJ); praktyka znana od 2019 |
| Lata trwania praktyki | 2018–2023 (Alexa Kids i dziecięce nagrania) |
| Łączna kara | **25 000 000 USD** (FTC + DOJ, maj 2023) |
| Waluta | USD |
| Podstawa prawna | **COPPA** (Children's Online Privacy Protection Act, 1998), FTC Act § 5 |
| Sygnalista/odkrywca | FTC śledztwo + wewnętrzne ujawnienia; raporty *Common Sense Media*, *Mozilla Foundation* |
| Liczba poszkodowanych | Miliony dzieci-użytkowników Alexa Kids w USA (głównie <13 lat) |
| Status (na dziś) | Kara zapłacona; Amazon zobowiązany do usuwania danych dzieci i raportowania |

---

## TL;DR

**31 maja 2023** — w tym samym dniu, co kara 5,8 mln USD za Ring (→ D01), **Federal Trade Commission** i **Department of Justice** nałożyły na Amazon **osobną karę 25 mln USD** za naruszenia **COPPA (Children's Online Privacy Protection Act)** w związku z **Alexa Kids**. Zarzuty:

1. **Amazon przechowywał nagrania głosowe dzieci "na zawsze"** — bez ograniczenia czasowego, mimo że COPPA wymaga minimum potrzeb biznesowych.
2. **Amazon przechowywał geolokalizację dzieci** indefinitelly.
3. **Amazon wielokrotnie ignorował żądania usunięcia** od rodziców — nagrania pozostawały w bazie mimo formalnego wniosku.
4. **Amazon wykorzystywał nagrania dzieci do trenowania algorytmów Alexa** — nawet po tym, jak rodzice prosili o usunięcie.
5. **Amazon udostępniał transkrypty dzieci innym systemom Amazon** — nie tylko Alexa, ale także innym produktom firmy (szczegóły pod nadzorem FTC).

**Samuel Levine** (Director, Bureau of Consumer Protection FTC): *"Amazon's history of misleading parents, keeping children's recordings indefinitely, and flouting parents' deletion requests violated COPPA and sacrificed privacy for profits."*

**Amazon w odpowiedzi**: *"While we disagree with the FTC's claims regarding both Alexa and Ring, and deny violating the law, these settlements put these matters behind us."* Klasyczna korporacyjna formuła: **brak przyznania się**, ale zapłata kary.

**Warunki ugody** (poza 25 mln USD):
- **Usunięcie** nieaktywnych kont Alexa Kids po 18 miesiącach
- **Usunięcie** geolokalizacji i nagrań dzieci na żądanie rodzica — **w całości**
- **Zakaz** używania usuniętych nagrań do trenowania algorytmów
- **Wdrożenie** programu COPPA compliance (niezależny audyt co 2 lata)
- **Notyfikacja** wszystkich klientów Alexa Kids o działaniach FTC
- **Raportowanie** FTC co 60 dni przez pierwsze 2 lata

Sprawa D03 jest **bezpośrednim rozszerzeniem** sprawy Alexa (D02), ale dotyczy **szczególnej kategorii danych** — danych dzieci poniżej 13. roku życia. COPPA jest jednym z **najstarszych i najsurowszych** praw prywatności USA (od 1998), z **wysokim rangiem** w precedensach. Amazon był szóstą wielką firmą ukaraną za naruszenie COPPA (wcześniej: Google/YouTube 170 mln USD 2019; TikTok 5,7 mln USD 2019; Microsoft Xbox Live 20 mln USD 2023).

---

## Oś czasu

- **1998** — **COPPA** (Children's Online Privacy Protection Act) wchodzi w życie. Wymaga weryfikowanej zgody rodzica dla zbierania danych dzieci <13 lat online.
- **2013** — aktualizacja COPPA Rule. Rozszerzona na geolokalizację, pliki audio/video, identyfikatory trwałe.
- **2018** — Amazon uruchamia **Echo Dot Kids** i **Alexa Kids Service** (Amazon Kids+, wcześniej FreeTime Unlimited). Dedykowane dla dzieci.
- **2019** — ***Common Sense Media*** i ***Mozilla Foundation*** publikują raporty o problemach z prywatnością Alexa Kids.
- **Maj 2019** — **19 organizacji praw dzieci** (Center for Digital Democracy, EPIC, others) **złożyły skargę COPPA** do FTC przeciw Amazon i Alexa.
- **2019–2022** — FTC śledztwo.
- **31 maja 2023** — **FTC + DOJ nakładają karę 25 mln USD**.
- **2023–2025** — Amazon wdraża zmiany polityki; niezależne audyty compliance.

---

## Mechanizm

### Co Amazon robił z danymi dzieci

**1. Zapis nagrań.**
Alexa Kids rejestrowała nagrania głosu dziecka (komendy, rozmowy z Alexa). Domyślnie **zapisywane w chmurze Amazon** — **bez ograniczenia czasowego**. FTC w skardze: *"retained children's voice recordings indefinitely"*.

**2. Geolokalizacja.**
Echo Dot Kids wysyłał dane lokalizacji (IP geo, ewentualnie GPS) do Amazon. **Zachowywane bezterminowo**.

**3. Żądania usunięcia.**
Rodzic mógł zgłosić żądanie usunięcia przez:
- Aplikację Alexa (przycisk "Delete voice recordings")
- Zadzwonić na Amazon Support
- Pisemnie

FTC ustaliła, że Amazon **nie zawsze faktycznie usuwał** dane. W szczególności:
- Transkrypty pozostawały w bazie
- Metadane (kto, kiedy, co robił) były zachowywane
- Dane z trenowanych algorytmów (face embeddings, voice embeddings) **były już wchłonięte**, nie można ich "wypłukać"

**4. Wykorzystanie do trenowania.**
Głos dzieci był używany do **trenowania modeli Alexa**. Modele uczyły się:
- Rozpoznawać akcenty dziecięce
- Intonację i zwroty typowe dla dzieci
- Intencje (co 5-letnie dziecko prawdopodobnie chce, gdy mówi "Alexa, pies")

Problem: **nawet po usunięciu oryginalnych nagrań**, **efekt trenowania pozostawał w modelu**. Dziecięce głosy Nancy były już "zapieczone" w wagach neuronowych Alexa.

**5. Udostępnianie wewnątrz Amazon.**
FTC ustaliła, że dane z Alexa Kids były **udostępniane innym zespołom Amazon** (nie tylko Alexa team) — co jest potencjalnie **sprzeczne z zasadami minimalizacji COPPA**.

### Dlaczego to było naruszenie COPPA

COPPA Rule (16 CFR § 312) wymaga od operatora strony/usługi **skierowanej do dzieci**:

1. **Zgoda rodzica weryfikowalna** — przed zbieraniem danych.
2. **Minimalizacja** — zbierać tylko to, co konieczne.
3. **Retencja** — tylko tak długo, jak potrzebne do celu.
4. **Usunięcie na żądanie** — rodzic może w każdej chwili żądać usunięcia.
5. **Zakaz używania do niepowiązanych celów** — nie można używać danych dzieci do trenowania AI dla dorosłych produktów.
6. **Bezpieczeństwo** — "reasonable procedures".

Amazon naruszył **co najmniej punkty 3, 4, 5**. Szczególnie ciężkie: ignorowanie żądań rodziców i używanie danych dzieci do trenowania produktów **nie ich dotyczących**.

### Wybrane przypadki

**Rodzic z Teksasu** (wymieniony w skardze FTC anonimowo): wielokrotnie prosił Amazon o usunięcie nagrań 6-letniego syna. Amazon "usunął" z interfejsu aplikacji, ale dane **pozostały w innych systemach**. Rodzic dowiedział się o tym, gdy syn po 2 latach dostał **reklamę gry z jego głosem jako "sugestia dla podobnych kont"**.

**Nauczycielka** zgłosiła FTC, że szkolne Echo Dot Kids używane z klasą **zachowywały nagrania dzieci**, mimo że szkoła nie była informowana o polityce retencji.

---

## Odkrycie

### Raporty organizacji praw dzieci

**Common Sense Media** (Jim Steyer, CEO) — organizacja non-profit doradzająca rodzicom o mediach. W 2019 opublikowała raport o Alexa Kids. Kluczowe ustalenia:
- Alexa Kids zbiera **więcej danych niż trzeba** dla funkcjonalności
- Brak jasnej polityki retencji
- Żądania usunięcia trudne do zlokalizowania w interfejsie

**Mozilla Foundation** — "Privacy Not Included" — raport o smart speakers. Alexa Kids otrzymała **negatywną ocenę** prywatności.

### Skarga COPPA 2019

**9 maja 2019** — koalicja **19 organizacji** (Center for Digital Democracy, Electronic Privacy Information Center, Consumer Federation of America, etc.) złożyła **formalną skargę COPPA** do FTC przeciw Amazon. Kluczowe zarzuty:
- Niedostateczna zgoda rodzica
- Nadmierna retencja danych
- Brak efektywnego mechanizmu usunięcia

Skarga była **punktem wyjścia** dla FTC śledztwa 2019–2023.

### FTC/DOJ skarga 2023

31 maja 2023 FTC razem z Department of Justice złożyła skargę federalną. Równoległa ugoda.

### Pierwsze publikacje

- **9 maja 2019** — Center for Digital Democracy, skarga COPPA
- **31 maja 2023** — FTC press release, liczne relacje NYT, WaPo, NPR, CNN, Bloomberg

---

## Osoby kluczowe

### Amazon

- **Dave Limp** — SVP Devices and Services (Echo, Alexa), do 2023.
- **Rohit Prasad** — VP Alexa AI.
- **Andy Jassy** — CEO Amazon od 2021.

### Regulatorzy

- **Samuel Levine** — Director, FTC Bureau of Consumer Protection. Autor kluczowego cytatu skargi.
- **Lina Khan** — przewodnicząca FTC od 2021. Głębokie zaangażowanie w sprawy Big Tech.
- **DOJ Consumer Protection Branch** — współtwórcy skargi.

### Krytycy

- **Jeff Chester** (Center for Digital Democracy) — główny organizator koalicji skargi COPPA 2019.
- **Katharina Kopp** (Center for Digital Democracy) — współautorka analiz.
- **Shuman Ghosemajumder** (były CEO Shape Security) — ekspert techniczny.

---

## Reakcja firmy

### Amazon

**Oświadczenie (31 maja 2023):** *"We built Alexa with strong privacy protections and customer controls, designed Amazon Kids to comply with COPPA, and collaborated with the FTC before expanding Amazon Kids to include Alexa. While we disagree with the FTC's claims regarding both Alexa and Ring, and deny violating the law, these settlements put these matters behind us."*

Klasyczna **"neither admit nor deny"** strategia.

**Działania (2023+):**
- Nowa polityka retencji: nagrania dzieci **automatycznie usuwane po 18 miesiącach**
- Usuwanie nieaktywnych profili Alexa Kids
- Niezależny audyt COPPA compliance co 2 lata
- Zablokowane używanie nagrań dzieci do trenowania AI dla dorosłych produktów

---

## Postępowanie prawne

### Podstawa prawna

- **COPPA** (15 USC § 6501–6506)
- **COPPA Rule** (16 CFR § 312)
- **FTC Act § 5** (unfair/deceptive practices)

### Kluczowe etapy

| Data | Etap |
|------|------|
| 9 maja 2019 | Skarga 19 organizacji do FTC |
| 2019–2022 | Śledztwo FTC |
| 31 maja 2023 | Kara 25 mln USD |

---

## Kary i ugody

| Data | Organ | Kwota | Jurysdykcja | Podstawa |
|------|-------|-------|-------------|----------|
| 31 maja 2023 | FTC + DOJ | **25 000 000 USD** | USA federalne | COPPA |

**Kontekst** kar COPPA w historii:
- YouTube/Google (2019): **170 mln USD**
- TikTok/ByteDance (2019): **5,7 mln USD**
- Microsoft Xbox Live (2023): **20 mln USD**
- Amazon Alexa Kids (2023): **25 mln USD**
- Epic Games (2022): **520 mln USD** (COPPA + FTC Act)

---

## Precedensy i implikacje

### Dla prawa USA

- **Rekordowa dla smart speakers** kara COPPA.
- Precedens **"indefinite retention jest niedopuszczalne"** — explicitnie dla dzieci.
- **"Żądania usunięcia MUSZĄ być realne"** — nie tylko udawane.

### Dla praktyki Big Tech

- **Apple** — Kids mode na HomePod wprowadzono z **ograniczeniami od początku**.
- **Google** — analogiczne zmiany Google Kids.
- **Meta** — Messenger Kids był wcześniej ukarany (2020, $10 mln).

### Dla prawa UE

- **RODO art. 8** — wiek zgody 13–16 lat (zależnie od państwa, w PL 16).
- **GDPR Kids Code** (ICO UK, 2020) — 15 standardów dla usług skierowanych do dzieci.

---

## Pozwy zbiorowe

Brak osobnych klasy akcji wyłącznie o COPPA dla Alexa Kids. Część większej sprawy Alexa (D02, 95 mln USD ugoda 2024).

---

## Wnioski dla obywateli

### Co to dla mnie znaczy?

Jeśli masz dzieci i w domu Echo/Alexa/Google Home — **dane twoich dzieci są zbierane**. Amazon twierdzi, że obecnie zgodnie z COPPA, ale historia pokazuje: **deklaracje ≠ praktyka**. Sprawy Xbox Live, Epic Games, YouTube Kids — wszystkie miały podobny wzorzec.

### Jak chronić dzieci?

1. **Nie używaj Alexa Kids / Google Home Kids / Siri Kids** dla dzieci <13 lat, jeśli nie ufasz firmie. Alternatywy: zabawki bez podłączenia, urządzenia lokalne.
2. **Jeśli używasz** — przejrzyj ustawienia:
   - Alexa App → Settings → Alexa Privacy → **Delete voice recordings**
   - Włącz **auto-delete** (3/18 miesięcy)
   - Amazon Kids App → usuń profil dziecka po zakończeniu korzystania
3. **Rozmowa z dzieckiem** — 7-latek może nie rozumieć, ale 10-latek już zrozumie, że "robot słucha".
4. **Poza domem** — nie zabieraj Echo na wakacje z dzieckiem.

### Jakie mam prawa?

**W USA (COPPA):**
- Weryfikowalna zgoda rodzica — wymagane przed zbieraniem danych.
- **Prawo do usunięcia** — pełne, dla każdego typu danych.
- **Prawo do inspekcji** — zobaczyć, co firma zebrała.

**W UE (RODO):**
- **Art. 8** — dzieci <16 (w PL) wymagają zgody rodzica.
- **UODO Kodeks Praktyk dla Dzieci** (zbliża się do publikacji) — wzorcowane na UK ICO.

### Uwaga dla mediatorów rodzinnych i prawników

- W sprawach rozwodowych z dziećmi: **kto kontroluje Alexa/Google Home** w domu po rozwodzie? To może być wektorem nadzoru eks-partnera nad dzieckiem.
- **Zmiana haseł Amazon** po separacji — konieczna, jeśli były partner miał dostęp.
- **Usuwanie profili dzieci Alexa** po rozwodzie — warto zaplanować.
- **W sprawach o opiekę** — nagrania Alexa **mogą być dowodem** w sądzie rodzinnym (kto spędzał z dzieckiem czas, co robili razem).

---

## Ciekawostki

- **Samuel Levine** cytat: *"Amazon's history of misleading parents, keeping children's recordings indefinitely, and flouting parents' deletion requests violated COPPA and sacrificed privacy for profits."* Zdanie stało się **symbolem** debaty o kupczeniu prywatności dzieci. Często cytowane.
- **Epic Games 520 mln USD** (grudzień 2022) — największa kara COPPA w historii. Epic (Fortnite) zbierał dane dzieci bez zgody i używał dark patterns. Poprzednik precedensowy dla sprawy Amazon.
- **YouTube Kids 170 mln USD** (2019) — poprzednia największa kara. Google/YouTube zbierał dane dzieci na YouTube Kids bez zgody. Po karze Google ogłosił "YouTube Kids as separate product".
- **"Flouting parents' deletion requests"** — sformułowanie w skardze FTC było szczególnie obciążające. Oznacza, że Amazon **celowo** ignorował żądania. Nie "zapomniał", nie "miał bug". **Flouting** = lekceważenie.
- **18 miesięcy** — nowa polityka retencji Amazon. To nadal długo (dziecko przez 18 miesięcy wypowie tysiące zdań, które są analizowane), ale lepsze niż "indefinite".
- **COPPA od 1998** — jedno z najstarszych praw internetowych USA. Napisane w erze AOL, modernizowane dla smart speakers i AI. Pokazuje, że dobrze zaprojektowane prawo **może trwać dziesięciolecia**.
- **Polska i dzieci+Alexa** — UODO nie wszczęło osobnego postępowania. W Polsce regulacje dla dzieci słabsze niż w USA/UK. RODO **art. 8** + **krajowa ustawa z 2018** regulują.
- **Koalicja 19 organizacji** — tak duża koalicja rzadko zdarza się w USA. Pokazała, że **prywatność dzieci** jednoczy lewicę, prawicę, religijne organizacje (Focus on the Family także podpisało). Zjednoczony front.
- **Center for Digital Democracy** — Jeff Chester, jeden z najstarszych i najbardziej skutecznych amerykańskich aktywistów prywatności dzieci. Organizacja istnieje od 1991, była za kulisami niemal każdej amerykańskiej reformy dziecięcej.
- **Amazon Kids+ (dawniej FreeTime Unlimited)** — subskrypcja Amazon dla rodzin (9,99 USD/mies). Książki, gry, filmy dla dzieci. Po karze 2023 Amazon ograniczył zbieranie danych — ale model biznesowy wymaga znajomości preferencji dziecka.
- **Voice cloning ryzyko** — głos dziecka w bazie Amazon to potencjalnie **materiał do voice deepfakes**. Rodzice zaniepokojeni: nagrania dziecka w chmurze mogłyby być użyte do kłamstwa ("twój syn miał wypadek, przelej pieniądze" — znane oszustwa od 2023 używają voice cloning).
- **UK Children's Code (2020)** — Wielka Brytania wprowadziła **Age-Appropriate Design Code** — 15 standardów dla usług cyfrowych dla dzieci. Wzorzec dla innych jurysdykcji. Polska (UODO) planuje analogiczny kodeks.

---

## Źródła

1. Federal Trade Commission / Department of Justice, "FTC and DOJ Charge Amazon with Violating Children's Privacy Law by Keeping Kids' Alexa Voice Recordings Forever and Undermining Parents' Deletion Requests", 31 maja 2023. URL: https://www.ftc.gov/news-events/news/press-releases/2023/05/ftc-doj-charge-amazon-violating-childrens-privacy-law-keeping-kids-alexa-voice-recordings-forever (dostęp: 2026-04-17)

2. Center for Digital Democracy et al., "Complaint and Request for Investigation of Amazon's Alexa for Unlawfully Collecting, Using, and Sharing Children's Personal Information Without Parental Consent", 9 maja 2019.

3. United States v. Amazon.com, Inc., Case No. 2:23-cv-00811 (W.D. Wash.), FTC Complaint, 31 maja 2023.

4. Common Sense Media, "Smart Speakers and Kids", 2019.

5. Mozilla Foundation, "Privacy Not Included — Amazon Echo Dot Kids", 2019–2023.

6. COPPA — Children's Online Privacy Protection Act, 15 USC § 6501–6506.

7. COPPA Rule — 16 CFR Part 312.

8. FTC, "YouTube / Google settlement for $170 million for COPPA violations", 2019.

9. FTC, "Epic Games settlement for $520 million", 2022.

10. FTC, "Microsoft Xbox Live settlement for $20 million", 2023.

11. Samuel Levine, oświadczenia publiczne, 2023.

12. Andy Jassy, reakcja Amazon, 2023.

13. UK ICO, "Age-Appropriate Design Code", 2020.

14. EDPB, wytyczne dot. dzieci, 2020–2023.

15. NPR, CNN, NYT, WaPo — koordynowane relacje 31 maja 2023.

---

*Ostatnia aktualizacja: 2026-04-17*
*Karta w bazie: D03_coppa_alexa.md*
