---
id: C04
slug: c04-microsoft-recall
group: C
group_label: Apple, Microsoft, LinkedIn
title: Microsoft Recall
year_revealed: 2024
last_updated: '2026-04-19'
companies:
- Microsoft
status: concluded
jurisdictions:
- EEA
- global
legal_basis:
- RODO art. 25
- art. 32
- krajowe prawa pracy
fines: []
whistleblowers:
- beaumont
journalists: []
related_cases:
- A04
- E06
- D06
- B05
- B03
tags:
- trening-ai
- dark-patterns
- wyciek-danych
categories:
- privacy
geo_coords: []
priority: STANDARD
card_complete: true
word_count: 3208
subtitle: AI-powered screenshots wszystkiego, co robisz na komputerze
years_active:
- 2024
- 2025
---

# C04 — Microsoft Recall: AI-powered screenshots wszystkiego, co robisz na komputerze

> **Kategoria:** AI telemetria / screenshots bez zgody / keylogger przez projekt
> **Firma/firmy:** Microsoft
> **Lata:** Maj 2024 (ogłoszenie) – czerwiec 2024 (wstrzymanie) – kwiecień 2025 (relaunch ograniczony)
> **Status:** Wdrożone w ograniczonej formie; spory o bezpieczeństwo trwają
> **ID karty:** C04

---

## Metadane

| Pole | Wartość |
|------|---------|
| Kraj/region | Globalnie (Windows 11); wdrożenie w EOG opóźnione |
| Rok ujawnienia | 20 maja 2024 (Microsoft sam ogłosił funkcję) |
| Lata trwania praktyki | Maj 2024 – czerwiec 2024 (zapowiedź), kwiecień 2025+ (ograniczony rollout) |
| Łączna kara | **Brak kar** — wstrzymane przed wdrożeniem; brak postępowań regulacyjnych |
| Waluta | — |
| Podstawa prawna | RODO art. 25 (privacy by design), art. 32 (bezpieczeństwo); krajowe prawa pracy |
| Sygnalista/odkrywca | **Kevin Beaumont** (DoublePulsar); UK ICO; wewnętrzna krytyka środowiska cybersec |
| Liczba poszkodowanych | Potencjalnie wszyscy użytkownicy Copilot+ PC (miliony urządzeń) |
| Status (na dziś) | Opt-in; szyfrowane; wdrożone selektywnie poza UE; badania bezpieczeństwa wciąż wykazują luki |

---

## TL;DR

**20 maja 2024** Microsoft na konferencji **Build 2024** ogłosił **"Windows Recall"** — funkcję AI dla nowych komputerów **Copilot+ PC**, która **co kilka sekund robi screenshot pulpitu użytkownika**, OCR-uje tekst i tworzy **przeszukiwalną bazę danych wszystkiego, co zobaczyłeś/napisałeś na komputerze**. Reklama Microsoftu: *"remember anything you've ever seen"*. Premiera miała nastąpić **18 czerwca 2024** na nowych Copilot+ PC, **domyślnie włączona**.

Reakcja cybersec była **natychmiastowa i zabójcza**. **Kevin Beaumont** (DoublePulsar) jako pierwszy opublikował szczegółową analizę na podstawie preview builds: (1) baza Recall była przechowywana w **plaintext SQLite** (niezaszyfrowanym), (2) wszystkie screenshoty, w tym **hasła, numery kart kredytowych, poufne e-maile**, były dostępne dla **każdej aplikacji** działającej na koncie użytkownika, (3) **infostealery** (Agent Tesla, Redline, Lumma) mogły w ciągu sekund ekstrahować **całą historię aktywności użytkownika**, (4) BitLocker nie pomaga przeciwko lokalnym złośliwym aplikacjom. Beaumont nazwał to **"potential security disaster"**.

**7 czerwca 2024** — badacz **Alexander Hagenah** opublikował narzędzie **TotalRecall** na GitHub, demonstrujące jak w kilka sekund eksfiltrować dane z bazy Recall. **13 czerwca 2024** — Microsoft **wstrzymał** premiery. **21 czerwca 2024** — ogłoszenie, że Recall będzie **opt-in**, wymagać **Windows Hello** authentication i **encrypted database**. Sygnalizacji z tego czasu: **Signal** (komunikator) wprowadził **Screen Security** by blokować Recall od robienia screenshotów Signal. Brave, AdGuard dołączyli w 2025.

**W 2025** Microsoft zaczął **ograniczony rollout** dla Windows Insiders, później dla Copilot+ PC (bez EOG). Wymagania:
- Copilot+ PC z NPU ≥ 40 TOPS
- 16 GB RAM, 256 GB storage
- **Windows Hello biometric** do dostępu
- **Virtualization-Based Security + Trusted Platform Module**
- **Opt-in** dwukrotnie (przy setup + first run)
- **Pause z system tray**
- Wykluczanie aplikacji/stron (blokowanie)

**Recall w EOG** wciąż opóźniony — Microsoft w rozmowie z krajowymi DPA (przede wszystkim **irlandzka DPC** i **UK ICO**). W październiku 2024 **Microsoft ogłosił dalsze opóźnienie** z powodu "regulacyjnych dyskusji". W 2025–2026 funkcja zaczyna wchodzić selektywnie.

**W kwietniu 2026** (obecna data): TotalRecall Reloaded — nowa wersja narzędzia Hagenah — **nadal pokazuje, że dane można ekstrahować**, mimo ulepszeń Microsoft. Kontrowersja trwa. Sprawa C04 to studium przypadku **"privacy vs convenience"** w erze AI oraz **co się dzieje, gdy Big Tech ogłasza funkcję bez głębszej analizy**.

---

## Oś czasu

- **20 maja 2024** — Microsoft Build 2024. Satya Nadella, Yusuf Mehdi ogłaszają **Copilot+ PC** i **Windows Recall** jako główną funkcję.
- **21 maja 2024** — pierwsze artykuły tech media. Ogólny ton: "interesujące, ale potrzeba testów".
- **22–31 maja 2024** — Kevin Beaumont (DoublePulsar) na blogu publikuje pierwsze techniczne analizy. Ostra krytyka: **plaintext SQLite, brak szyfrowania, każda aplikacja czyta bazę**.
- **30 maja 2024** — **UK ICO** (Information Commissioner's Office) oficjalnie zwraca się do Microsoftu z pytaniami.
- **3 czerwca 2024** — Signal (messenger) ogłasza **Screen Security** w Signal Desktop — blokuje Recall od robienia zrzutów Signal chats.
- **7 czerwca 2024** — **Alexander Hagenah** publikuje **TotalRecall** na GitHub. Narzędzie w kilka sekund ekstrahuje bazę Recall.
- **13 czerwca 2024** — Microsoft **wstrzymuje premiery** Recall. Komunikat: funkcja będzie Windows Insider-only.
- **21 czerwca 2024** — Microsoft ogłasza nowy model: **opt-in**, **Windows Hello**, **encrypted database**.
- **Wrzesień 2024** — Microsoft rozpoczyna testy Windows Insider Preview.
- **Listopad 2024** — **dalsze opóźnienie** ze względu na odkryte luki.
- **Grudzień 2024** — Recall w Windows Insider Preview, ale tylko dla ograniczonej grupy.
- **Kwiecień 2025** — **rollout do Copilot+ PC** (globalnie poza EOG).
- **Lipiec 2025** — **Brave, AdGuard** wprowadzają domyślne blokowanie Recall.
- **2025** — Microsoft rozmawia z irlandzkim DPC, UK ICO.
- **Początek 2026** — TotalRecall Reloaded pokazuje nowe luki w zaktualizowanej wersji. Microsoft odpowiada: "nie stanowi realnego ryzyka".
- **Kwiecień 2026** — Recall dostępny selektywnie, nadal kontrowersyjny.

---

## Mechanizm

### Jak Recall działa (wersja 2025)

**1. Snapshotting:**
- Co **5 sekund** Recall robi screenshot całego pulpitu.
- Screenshoty są **OCRowane** (tekst wyciągany przez Optical Character Recognition).
- Obrazy + tekst + metadane (tytuł okna, nazwa aplikacji, timestamp) zapisywane lokalnie.

**2. Indexowanie:**
- NPU (Neural Processing Unit) lokalnie analizuje obrazy i tekst.
- Budowana jest **semantyczna baza wyszukiwania** — użytkownik może pytać naturalnym językiem: *"open the PDF about solar inverters I was reading last week"*.

**3. Storage:**
- Lokalna baza SQLite.
- **W wersji 2025**: szyfrowana przez **Virtualization-Based Security (VBS)** + **Trusted Platform Module (TPM)**.
- W wersji 2024 (przed wstrzymaniem): **plaintext**, chroniona tylko BitLockerem.

**4. Dostęp:**
- **W wersji 2025**: wymaga **Windows Hello** biometric (twarz, linia papilarna, PIN) przy każdym odwołaniu.
- W wersji 2024: brak dodatkowej autoryzacji — każda aplikacja działająca jako użytkownik miała dostęp do bazy.

**5. Opcjonalnie:**
- Użytkownik może **wykluczyć aplikacje** (np. 1Password, banki).
- Użytkownik może **pauzować** Recall z system tray.
- Użytkownik może **usuwać** snapshoty ręcznie.

### Dlaczego to było kontrowersyjne — luki wersji 1 (maj 2024)

**Luka 1: plaintext SQLite.** Baza nie była zaszyfrowana poza standardowym BitLockerem. BitLocker chroni przed **kradzieżą fizyczną laptopa** (offline attack), ale **nie chroni** przed złośliwym oprogramowaniem działającym w sesji zalogowanego użytkownika.

**Luka 2: każda aplikacja czyta bazę.** Baza była w `AppData/Local` użytkownika. Każda aplikacja (nawet pobrany z sieci skrypt) mogła ją czytać, tak samo jak read cookies Chrome.

**Luka 3: infostealery.** Wirusy takie jak **Agent Tesla, Redline, Lumma, Raccoon** są **masowo używane** (miliony zakażeń rocznie) do kradzieży haseł z przeglądarek. Recall dodaje do ich celu **przeszukiwalną historię wszystkiego, co użytkownik robił**.

**Luka 4: screenshoty haseł.** Menedżery haseł (1Password, LastPass) czasami wyświetlają hasło w plaintext. Recall robił screenshot, więc **hasło było w bazie**. Mimo iż menedżery próbowały to blokować, Recall był **powyżej** OS level.

**Luka 5: wrażliwe dane domyślnie.** Recall zbierał wszystko: rozmowy terapeutyczne na Zoom, dokumenty medyczne, treści porno, maile osobiste, kody 2FA. **Domyślnie włączone**.

### TotalRecall (Alexander Hagenah, GitHub)

**TotalRecall** to proof-of-concept narzędzie opublikowane 7 czerwca 2024. W ~50 linii Python skrypt:
1. Lokalizuje bazę Recall
2. Kopiuje do tymczasowego folderu
3. Wyciąga wszystkie screenshoty i OCR text
4. Eksportuje jako ZIP

Czas: **<30 sekund** na typowym komputerze. Po załadowaniu na **Pastebin** lub serwer C&C, atakujący ma kompletną historię użytkownika.

### TotalRecall Reloaded (2025–2026)

W 2025 Hagenah zaktualizował narzędzie, by ominąć Windows Hello autoryzację przez **session hijacking** i **browser automation prompts**. Microsoft w odpowiedzi: *"TotalRecall Reloaded requires local administrative access and the user's authentication, which means it's not a remote exploit."* Ale jak pokazuje praktyka infostealers, **dostęp lokalny to już połowa bitwy dla hackerów** — infostealery rutynowo uzyskują user-level access przez phishing.

---

## Odkrycie

### Kevin Beaumont — główny ostrzegacz

**Kevin Beaumont** (pseudonim online **GossiTheDog**) — brytyjski specjalista cyberbezpieczeństwa, były security manager Microsoft UK, niezależny badacz i bloger **DoublePulsar**. Specjalista od:
- Ransomware (m.in. śledzenie Conti, LockBit)
- Ekstensywne publikowanie o ataku WannaCry 2017
- Incydenty Microsoftu w przeszłości (Exchange ProxyLogon 2021)

Beaumont **zdobył dostęp do preview** Windows 11 z Recall i opublikował serię ostrzegawczych postów na X/Twitter oraz blogu DoublePulsar. Jego kluczowe posty maj–czerwiec 2024:
- Analiza techniczna SQLite bazy Recall
- Demonstracja, że **infostealery będą w raju**
- Porównanie do **Xbox One E3 launch** jako PR disaster

### Alexander Hagenah — autor TotalRecall

**Alexander Hagenah** (pseudonim **xaitax**) — europejski badacz cybersec. Jego narzędzie TotalRecall było kluczowym dowodem, że luki w Recall są **trywialnie exploitable**. Demonstracja podobna do tego, co zrobił Jonathan Mayer z Safari Workaround (B02) — dowód koncepcji uniemożliwiał Microsoftowi bronienie się przez "to tylko teoretyczne".

### UK ICO

UK Information Commissioner's Office — John Edwards (Commissioner) — zwrócił się do Microsoft 30 maja 2024 z pytaniami. Publiczne oświadczenie: *"We are making enquiries with Microsoft to understand the safeguards in place to protect user privacy."*

### Społeczność cybersec

Masowa krytyka:
- **Troy Hunt** (Have I Been Pwned)
- **Mikko Hyppönen** (F-Secure)
- **Graham Cluley**
- **Jake Williams** (SpecterOps)
- **Dave Kennedy** (TrustedSec)

### Pierwsze publikacje

- **22 maja 2024** — Kevin Beaumont, "Stealing Everything You've Ever Typed or Viewed on Your Own Windows PC is Now Possible With Two Lines of Code — Inside the Copilot+ Recall Disaster", DoublePulsar
- **23 maja 2024** — *Ars Technica*, *The Verge*, *Wired* — krytyczne analizy
- **7 czerwca 2024** — *The Register*, *BleepingComputer* — o TotalRecall
- **13 czerwca 2024** — *Reuters*, *Bloomberg* — wstrzymanie

---

## Osoby kluczowe

### Microsoft

- **Satya Nadella** — CEO. Główny promotor strategii AI.
- **Yusuf Mehdi** — Executive Vice President Consumer Marketing. Ogłaszał Recall na Build 2024.
- **Pavan Davuluri** — Corporate VP, Windows and Devices.
- **Charlie Bell** — Executive Vice President, Microsoft Security.
- **David Weston** — Corporate Vice President, OS Security and Enterprise — po wstrzymaniu kierował redesignem.

### Krytycy / odkrywcy

- **Kevin Beaumont** — DoublePulsar. Opisany wyżej.
- **Alexander Hagenah** — autor TotalRecall.
- **UK ICO** — John Edwards, Commissioner.
- **Signal Foundation** — Meredith Whittaker (prezeska), ogłoszenie Screen Security 3 czerwca 2024.

### Dziennikarze

- **Tom Warren** — *The Verge*, długotrwała analityka Microsoft.
- **Zack Whittaker** — *TechCrunch*.
- **Andy Greenberg** — *Wired*.

---

## Reakcja firmy

### Microsoft

**Faza 1: euforia marketingowa (maj 2024).** Build conference, wielkie ogłoszenie, Windows Copilot+ PC jako "największa zmiana od Windows 95".

**Faza 2: wstrzymanie (13 czerwca 2024).** Pavan Davuluri, blog post: *"We are adjusting the release model for Recall to leverage the expertise of the Windows Insider community to ensure the experience meets our high standards for quality and security."* Tłumaczenie: mieliśmy błąd, zawiesili wdrożenie.

**Faza 3: redesign (lato 2024).** Zmiany:
- Opt-in (dwukrotne) zamiast domyślnie włączonej
- Encrypted database
- Windows Hello requirement
- Wykluczanie aplikacji
- Auto-delete dla wrażliwych kategorii

**Faza 4: relaunch ograniczony (2025).** Powolny rollout dla Copilot+ PC, poza EOG.

**Faza 5: spory trwają (2026).** TotalRecall Reloaded pokazuje, że nawet zaktualizowana wersja ma problemy. Microsoft minimalizuje ryzyko.

### Sygnalizacje innych firm

- **Signal** (3 czerwca 2024) — **Screen Security** domyślnie włączony w Signal Desktop dla Windows 11. Pierwszy komunikator, który **aktywnie blokuje** Recall.
- **Brave Browser** (lipiec 2025) — dodał opcję blokady Recall.
- **AdGuard** (lipiec 2025) — blokuje przez API.
- **1Password, Bitwarden, LastPass** — zalecają wyłączenie Recall.

---

## Postępowanie prawne

### Jurysdykcje

- **UK** — ICO formalne pytania, bez kary.
- **UE** — brak formalnych postępowań; Microsoft opóźnia wdrożenie.
- **USA** — brak postępowań federalnych.

### Podstawa prawna (teoretyczna)

- **RODO art. 25** — privacy by design. Domyślnie włączony Recall bez szyfrowania = klasyczne naruszenie.
- **RODO art. 32** — bezpieczeństwo przetwarzania. Plaintext SQLite = niedopuszczalne.
- **RODO art. 35** — DPIA (Data Protection Impact Assessment). Wymagane przed wdrożeniem.
- **Krajowe prawa pracy** — Recall na komputerach służbowych to klasyczne pytanie o **monitoring pracownika**. W wielu jurysdykcjach (w tym PL, DE, FR) wymaga zgody związkowej lub konsultacji.

### Kluczowe etapy

| Data | Etap |
|------|------|
| 20 maja 2024 | Ogłoszenie |
| 13 czerwca 2024 | Wstrzymanie |
| Kwiecień 2025 | Ograniczony rollout |
| W toku | Dialog z DPA UE |

---

## Kary i ugody

**Brak kar**. Brak formalnych postępowań. Microsoft wstrzymał wdrożenie przed regulacyjną interwencją.

---

## Precedensy i implikacje

### Dla prawa UE

- **Przypadek podręcznikowy** naruszenia **privacy by design** (art. 25 RODO). Gdyby Microsoft wdrożył Recall w pierwotnej formie w UE, DPA (prawdopodobnie irlandzka DPC, ew. BSI w Niemczech) nakładałyby kary.
- **Impuls dla AI Act** — Recall jest przykładem AI-powered surveillance gdzie problemy privacy by design są jasne.
- **EDPB może w przyszłości** wydać **guidelines on AI recall/memory systems**.

### Dla prawa pracy

- **Monitoring pracowniczy**: Recall na komputerze służbowym = pełne nagrywanie aktywności pracownika. W większości jurysdykcji UE **wymaga zgody związkowej, konsultacji pracowniczej, informacji**.
- **Kodeks Pracy PL art. 22^2** — monitoring dozwolony ale z informacjami.
- **Sąd Pracy może** uznać Recall za nadmierny monitoring.

### Dla praktyki Big Tech

- **"Launch first, security later"** jako antywzorzec. Microsoft pokazał, że nawet największa firma tech może ogłosić coś, co jest security disaster. Po **Recall disaster** Google, Apple, Meta zaostrzyli **security review** przed ogłoszeniami AI funkcji.
- **Kevin Beaumont jako "canary"** — niezależni badacze są **ostatnią linią obrony** przed błędami Big Tech.
- **Sygnalizacje (Signal, Brave)** — pokazanie, że komunikatory mogą blokować OS-level funkcje.

---

## Pozwy zbiorowe

Brak pozwów zbiorowych (funkcja wstrzymana przed masowym wdrożeniem).

---

## Wnioski dla obywateli

### Co to dla mnie znaczy?

Jeśli masz Copilot+ PC (nowy laptop od 2024 z NPU) — **Recall może być włączony**. Domyślnie **nie jest** (po wstrzymaniu 2024) — ale sprawdź. Jeśli używasz starszego komputera z Windows 10/11 bez Copilot+: **Recall na twoim komputerze nie działa**.

Jeśli korzystasz z komputera służbowego — **zapytaj administratora IT**, czy Recall jest wyłączony. W wielu firmach (szczególnie prawniczych, medycznych, bankowych) Recall może być **domyślnie wyłączony** przez Group Policy.

### Jak się chronić?

**Na prywatnym komputerze z Copilot+ PC:**
1. **Podczas setup** — przy pytaniu o Recall wybierz **"Don't enable"**.
2. Jeśli już włączyłeś: **Ustawienia → Prywatność i bezpieczeństwo → Recall & snapshots** → wyłącz.
3. **Odinstaluj Recall**: Windows Features control panel → odznacz Recall.
4. **Dla wrażliwych aplikacji** — dodaj do Recall blocklist (1Password, Bitwarden, banki).

**Na komputerze służbowym:**
5. Zapytaj IT / Data Protection Officer o politykę.
6. Jeśli Recall włączony — rozważ **pisemną odmowę** i wskazanie art. 22² Kodeksu Pracy (nadmierny monitoring).

**Dla użytkowników wrażliwych danych:**
7. **Signal Desktop** — domyślnie blokuje Recall w sesjach Signal.
8. **Brave, AdGuard** — blokują Recall.
9. **Komunikatory z auto-destruct** (Signal disappearing messages) — dodatkowa ochrona.

### Jakie mam prawa?

**W UE (RODO):**
- **Prawo do informacji** (art. 13) — pracodawca musi poinformować, jeśli używa Recall.
- **Prawo do sprzeciwu** (art. 21) — wobec monitoringu nie mającego podstawy prawnej.
- **DPIA** — pracodawca musi zrobić ocenę skutków.

**W Polsce:**
- **Art. 22² Kodeksu Pracy** — monitoring dozwolony ale z ograniczeniami i informacją.
- **Art. 111 k.p.** — pracodawca nie może naruszać dóbr osobistych pracownika.
- **UODO** — skargi na nadmierny monitoring.

### Uwaga dla mediatorów, prawników, administratorów systemów

**Jeśli jesteś prawnikiem lub mediatorem** — Recall na komputerze służbowym to **prima facie naruszenie tajemnicy zawodowej** (art. 180 k.p.k.). Dane klientów trafiają do bazy Microsoftu (nawet jeśli lokalnej — potencjalnie dostępnej hackerom). **Zalecenie**: Wyłącz Recall i wyłącz innym w kancelarii.

**Jeśli jesteś mediatorem** — notatki z mediacji mogą być **przechwycone** przez Recall. Klient w mediacji ma prawo oczekiwać poufności. Zalecenie jak dla prawników.

**Jeśli jesteś administratorem IT** — w Active Directory / Intune **Disable Recall** przez Group Policy dla wszystkich komputerów służbowych. Szczególnie w branżach regulowanych (prawo, medycyna, bankowość, ubezpieczenia, HR). Szacunek dla **art. 25 RODO (privacy by default)**.

**Jako mediator z klientem w kryzysie** — zapytaj klienta, czy ma Copilot+ PC i czy Recall jest włączony. Może to być ukryty wektor **cyberstalkingu** przez byłego partnera, jeśli ma fizyczny dostęp do komputera ofiary.

---

## Ciekawostki

- **"Canary in the coal mine"** — Kevin Beaumont w 2024 po raz kolejny wystąpił w roli "kanarka", który ostrzega przed katastrofą. Wcześniej: WannaCry 2017, ProxyLogon 2021. DoublePulsar to jego blog nazwany od narzędzia NSA (wcześniej skradzionego przez Shadow Brokers i użytego w WannaCry) — ironia geeky cybersec.
- **Xbox One E3 parallel** — wielu komentatorów porównywało ogłoszenie Recall do Xbox One E3 2013, gdzie Microsoft ogłosił always-online wymagania, monitoring kamery Kinect. Masywne negatywne reakcje. Microsoft musiał odwołać większość planów w tym samym roku. Ten sam wzór: **execs misaligned with customers, botched messaging**.
- **Signal's Screen Security** (3 czerwca 2024) — **pierwszy komercyjny program** aktywnie **blokujący OS-level funkcję Microsoftu**. Meredith Whittaker (prezeska Signal): *"We're protecting our users from what is effectively always-on surveillance."* Teks API użyte: `SetWindowDisplayAffinity(hwnd, WDA_EXCLUDEFROMCAPTURE)` — dodany w Windows 10 1809, ale **nigdy szeroko używany** aż do Recall.
- **TotalRecall w 50 linii** — Hagenah opublikował narzędzie **z kodem źródłowym** na GitHub, co jest nietypowym krokiem (zazwyczaj exploits są zgłaszane prywatnie). Argument Hagenah: problem był **publicznie widoczny**, więc badacze powinni móc go replikować.
- **UK ICO vs Microsoft** — John Edwards (UK Commissioner) zwrócił się do Microsoft **w tym samym tygodniu** co Beaumont publikował ostrzeżenia. Paradoksalnie ICO **nie mógł** nałożyć kary (funkcja nie była jeszcze wdrożona), ale **groźba postępowania** była wystarczająca, by Microsoft się wycofał. To **pokazuje skuteczność** regulacyjnego dialogu nawet bez kar.
- **Polska a Recall** — UODO nigdy nie wydał oficjalnego stanowiska, ale polscy eksperci (Panoptykon, Fundacja Panoptykon) pisali analizy ostrzegające przed funkcją. Polski sektor bankowy i prawny szybko ogłosił, że Recall jest **niedopuszczalny** na komputerach z dostępem do danych klientów.
- **"AI PC hype"** — Recall było flagowym produktem **Microsoft Copilot+ PC** strategii. Intel, AMD, Qualcomm zainwestowali w **NPU** (Neural Processing Unit). Po wstrzymaniu Recall cała kategoria "AI PC" zwolniła tempo. W 2025 **sprzedaż Copilot+ PC poniżej oczekiwań**; Microsoft stracił na forsowaniu narracji.
- **AI Act EU kategoryzacja** — Recall jest potencjalnym **"high-risk AI system"** pod art. 6 AI Act (wszedł w 2024–2026). Monitoring pracowników przez AI to explicitly high-risk. Microsoft musiałby wdrożyć **conformity assessment** przed wdrożeniem w UE. To jeden z powodów, dla których EOG jest opóźniony.
- **Chińska paranoja** — w chińskich kanałach tech media Recall był przedstawiany jako **"amerykańskie narzędzie szpiegowskie"**. Paradoksalnie: Chiny mają własne, znacznie bardziej inwazyjne systemy monitoringu (Social Credit, CCTV+AI). Ale Microsoft jako obcy aktor napotkał tam wzmożony sceptycyzm.
- **Infostealery w raju** — cybersec specialiści w 2024 obliczyli, że **30%+ wszystkich infostealer infekcji** mogłoby wykorzystać Recall. Po wstrzymaniu statystyka dotyczy tylko potencjału. Ale pokazuje skalę zagrożenia.
- **TotalRecall Reloaded (2025)** — Hagenah pokazał, że **nawet z Windows Hello i szyfrowaniem** można eksfiltrować dane przez **session hijacking** i **prompt injection**. Microsoft: *"not realistic threat"*. Społeczność cybersec: *"tell that to info stealers"*.
- **Precedens dla "AI memory" systemów** — Recall to jedna z pierwszych prób **AI-powered memory** wbudowanego w OS. Analogiczne systemy eksperymentalnie testowane: **Apple Intelligence** (bardziej ograniczone), **Google Project Astra**, **Meta AI Memory**. Wszystkie mają teraz **dodatkowy ciężar** showing they learned from Recall disaster.

---

## Źródła

1. Microsoft Build 2024 keynote, 20 maja 2024. Satya Nadella, Yusuf Mehdi. URL: https://build.microsoft.com/en-US/sessions (dostęp: 2026-04-17)

2. Kevin Beaumont, "Stealing everything you've ever typed or viewed on your own Windows PC is now possible with two lines of code — inside the Copilot+ Recall disaster", DoublePulsar, 22 maja 2024. URL: https://doublepulsar.com/ (dostęp: 2026-04-17)

3. Kevin Beaumont, "Microsoft Recall on Copilot+ PC: testing the security and privacy implications", DoublePulsar, kwiecień 2025.

4. Alexander Hagenah, "TotalRecall", GitHub, 7 czerwca 2024. URL: https://github.com/xaitax/TotalRecall (dostęp: 2026-04-17)

5. Pavan Davuluri, "Update on the Recall (preview) feature for Copilot+ PCs", Windows Experience Blog, 13 czerwca 2024. URL: https://blogs.windows.com (dostęp: 2026-04-17)

6. UK Information Commissioner's Office, "Enquiries into Microsoft Recall", maj 2024 — komunikat prasowy.

7. Signal Foundation, "Signal Desktop on Windows 11 now includes Screen Security", 3 czerwca 2024.

8. Windows Recall — Wikipedia. URL: https://en.wikipedia.org/wiki/Windows_Recall (dostęp: 2026-04-17)

9. Nihad A. Hassan, "Privacy and security risks surrounding Microsoft Recall", TechTarget, 4 listopada 2024.

10. Alexander Hagenah, "TotalRecall Reloaded", GitHub, 2025.

11. TechRadar, "Microsoft's Recall tool is back and still has major security concerns", 2026.

12. Microsoft blog, "Privacy and control for Recall", 2024.

13. EU AI Act (Regulation (EU) 2024/1689), szczególnie art. 6 (high-risk AI systems).

14. Kodeks Pracy (PL), art. 22² (monitoring).

15. EDPB, "Guidelines 05/2020 on consent under Regulation 2016/679" (kontekst privacy by design).

---

*Ostatnia aktualizacja: 2026-04-17*
*Karta w bazie: C04_microsoft_recall.md*
