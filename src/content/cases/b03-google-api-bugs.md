---
id: B03
slug: b03-google-api-bugs
group: B
group_label: Google
title: Google+ API bugs
year_revealed: 2018
last_updated: '2026-04-17'
companies:
- Google
status: settled
jurisdictions:
- US
- global
legal_basis:
- US Securities Exchange Act
- state consumer protection
- pre-RODO
fines:
- amount: 7500000
  currency: USD
  authority: '*Matal v. Google* class action'
  date: 2020-07
  category: class_action_settlement
  status: paid
whistleblowers: []
journalists: []
related_cases:
- B04
- B02
- B01
- B06
- D02
tags:
- wyborcy
- rodo
- schrems-ii
- pozew-zbiorowy
- wyciek-danych
categories:
- privacy
geo_coords: []
priority: STANDARD
card_complete: true
word_count: 2947
explainer:
  src: /animations/b03-google-api-bugs.html
  duration: '60s'
  title: Google+ API Bugs — Google wiedział 6 miesięcy. Milczał.
subtitle: Ukrywanie wycieku i zamknięcie platformy
years_active:
- 2015
- 2018
---

# B03 — Google+ API bugs: Ukrywanie wycieku i zamknięcie platformy

> **Kategoria:** Wyciek danych / ukrywanie incydentu / SEC / korporacyjne samobójstwo produktu
> **Firma/firmy:** Google (Alphabet)
> **Lata:** 2015–2018 (pierwszy bug), październik 2018 (ujawnienie), kwiecień 2019 (zamknięcie Google+)
> **Status:** Zakończone — Google+ consumer zamknięty, ugoda 7,5 mln USD
> **ID karty:** B03

---

## Metadane

| Pole | Wartość |
|------|---------|
| Kraj/region | Globalnie; ogniska postępowań: USA, Irlandia |
| Rok ujawnienia | 8 października 2018 (*Wall Street Journal*) |
| Lata trwania praktyki | 2015–2018 (pierwszy bug); drugi bug: listopad 2018 (6 dni) |
| Łączna kara | 7 500 000 USD (ugoda pozew zbiorowy) |
| Waluta | USD |
| Podstawa prawna | US Securities Exchange Act (SOX), state consumer protection, pre-RODO (dla UE) |
| Sygnalista/odkrywca | *WSJ* (Douglas MacMillan, Robert McMillan); wyciek wewnętrznego memo Google |
| Liczba poszkodowanych | **500 000** (pierwszy bug) + **52,5 mln** (drugi bug) — łącznie ~53 mln użytkowników |
| Status (na dziś) | Zakończone; Google+ consumer zamknięty 2.04.2019; Google Currents zamknięte 2023 |

---

## TL;DR

**8 października 2018** *Wall Street Journal* (Douglas MacMillan, Robert McMillan) ujawnił, że **Google wiedział o lukach w API Google+** od **marca 2018** — ale **celowo ukrył informację przed użytkownikami i regulatorami**. Pierwszy bug wystawił dane **~500 000 użytkowników** na dostęp deweloperów aplikacji trzecich (niepubliczne dane profilu: płeć, wiek, email, zawód, miejsce pracy) **od 2015 roku**. Google wykrył błąd w marcu 2018 w ramach **audytu Project Strobe** — wewnętrznej rewizji API po skandalu Cambridge Analytica. Załatał lukę, ale **nie poinformował nikogo**.

W wewnętrznym memo Google z marca 2018 (zdobytym przez *WSJ*) zespół prawny argumentował za **niepublikowaniem**: *"spowoduje to reputacyjne szkody większe niż korzyści"* i — najbardziej obciążająco — ***"nie chcemy porównań z Cambridge Analytica"***. To zdanie stało się symbolem. Tego samego dnia, w którym ukazał się artykuł *WSJ*, Google ogłosił **zamknięcie konsumenckiej wersji Google+** w ciągu 10 miesięcy. Miesiąc później, w listopadzie 2018, Google wykrył **drugi, większy bug** — dotykający **52,5 mln użytkowników przez 6 dni** — i tym razem **ujawnił natychmiast**, przyspieszając zamknięcie Google+ do **2 kwietnia 2019** (rok wcześniej niż planowano).

Pozew zbiorowy *Matal v. Google* (N.D. Cal.) zakończył się w 2020 ugodą **7,5 mln USD**. SEC wszczęła i zamknęła bez zarzutów (SOX nie został uznany za naruszony). Irlandzki DPC uznał, że bug "nie stanowi wystarczającego ryzyka szkody" by wymagać powiadomienia RODO (**pre-Schrems II era** — słabsza egzekucja). Dla praktyki Big Tech sprawa zostawiła jeden kluczowy ślad: **wewnętrzne dokumenty "nie chcemy porównań z Cambridge Analytica" stały się dowodem sądowym** w wielu późniejszych sprawach. To była lekcja: **ukrywanie wycieków kosztuje więcej niż ich ujawnienie**.

Google+ był produktem, który **nigdy nie wystartował** — w dokumentach sądowych Google przyznał, że **90% sesji Google+ trwało poniżej 5 sekund** (użytkownicy przechodzili przez G+ nieświadomie z Gmaila). Sprawa stała się modelem "preemptive shutdown" — jeśli produkt ma lukę i nikt go nie używa, łatwiej zamknąć niż naprawić.

---

## Oś czasu

- **28 czerwca 2011** — Google uruchamia **Google+** jako konkurencja dla Facebooka. Użytkowników zmuszano do korzystania z G+ przez integrację z Gmailem, YouTube, Google Search.
- **2012–2014** — G+ szybko osiąga setki milionów zarejestrowanych kont, ale **aktywność jest niska**. Krytycy nazywają go "miasto duchów".
- **2014** — Google **rezygnuje z integracji G+ z YouTube** (odwrócenie strategii Very Peenya — wiceprezesa społecznościowego, który odszedł).
- **2015** — pierwszy bug API Google+ People zaczyna być aktywny. Deweloperzy aplikacji pobierają niepubliczne dane profilu użytkowników.
- **Marzec 2018** — w ramach **audytu Project Strobe** (uruchomionego po Cambridge Analytica) Google odkrywa bug. Zespół inżynierski załata go. Zespół prawny debatuje nad ujawnieniem. Wewnętrzne memo: nie ujawniać.
- **Marzec–październik 2018** — Google **siedzi na informacji 7 miesięcy**.
- **8 października 2018** — *WSJ* publikuje: "Google Exposed User Data, Feared Repercussions of Disclosing to Public". Tego samego dnia Google ogłasza **zamknięcie Google+ consumer w 10 miesięcy**.
- **Listopad 2018** — Google wykrywa **drugi bug** w nowej wersji API. Tym razem **ujawnia natychmiast**. Dane 52,5 mln użytkowników były wystawione przez 6 dni.
- **11 grudnia 2018** — Sundar Pichai zeznaje przed **House Judiciary Committee**. Nie jest szczegółowo pytany o Google+ (fokus był na Chinach i Project Dragonfly — sprawa B06).
- **10 grudnia 2018** — Google ogłasza **przyspieszenie zamknięcia G+** do 2 kwietnia 2019.
- **2 kwietnia 2019** — Google+ consumer **formalnie zamknięty**. Użytkownicy mogą pobrać swoje dane przez Google Takeout.
- **2019–2020** — klasowy pozew *Matal v. Google* (N.D. Cal.).
- **27 lipca 2020** — ugoda **7,5 mln USD** (ok. 5–12 USD za użytkownika, który zgłosił roszczenie).
- **2 lipca 2023** — Google zamyka również **Currents** (następca G+ dla G Suite/Workspace). Żadna korporacyjna sieć społecznościowa Google nie przetrwała.

---

## Mechanizm

### Pierwszy bug (2015 – marzec 2018)

**Luka w Google+ People API.** API było używane przez deweloperów aplikacji trzecich do integracji z Google+ (np. importowanie listy znajomych, automatyczne udostępnianie postów). Bug powodował, że aplikacje otrzymywały **niepubliczne dane profilu** użytkowników — nawet tych, którzy **nie dali uprawnień** aplikacji lub **ustawili widoczność "private"**.

Wyciekające dane:
- Imię, nazwisko
- Adres e-mail (!)
- Płeć
- Data urodzenia / wiek
- Zawód
- Miejsce pracy
- Zdjęcie profilowe

**NIE wyciekły**: hasła, dane finansowe, numery telefonów, treści postów, wiadomości.

**Skala ekspozycji**: **500 000 unikalnych profili**. Google nie mógł ustalić, czy dane zostały faktycznie **pobrane** przez aplikacje — logi zawierały tylko dane z ostatnich **14 dni** przed wykryciem (według wewnętrznej polityki retencji Google). Efektywnie: nie wiadomo, ilu użytkowników było dotkniętych przez **3 lata**.

### Drugi bug (listopad 2018, 6 dni)

Po pierwszym skandalu Google przyspieszył migrację na **nową wersję API**. W tej nowej wersji pojawił się **inny bug**: aplikacje mogły pobrać dane **niepubliczne** z profili użytkowników przez **Project Photos API**. Google wykrył i załatał w **6 dni**. Dotknięci: **52,5 mln użytkowników**.

### Dlaczego to było poważne mimo "małego" zestawu danych

- **Spear phishing** — adres e-mail + zawód + miejsce pracy = **idealny materiał do spersonalizowanego phishingu**.
- **Osoby korzystające z Google dla pracy** — biznes, rządy, NGO-sy — były szczególnie narażone.
- **Zaufanie systemowe** — Google pozycjonował się jako "platform you can trust". Ukrywanie wycieku podkopało tę narrację.
- **Ryzyko SOX** — Google jako spółka publiczna ma obowiązek ujawniać "material events" w raportach finansowych. Nie ujawnienie wycieku wpływającego na decyzje inwestorów **może być naruszeniem Sarbanes-Oxley Act**. SEC wszczęła nieformalne dochodzenie, ostatecznie umorzyła bez zarzutów (argumentacja: 500 000 użytkowników to "nie material event" dla firmy o kapitalizacji ~800 mld USD).

---

## Odkrycie

### Jak doszło do ujawnienia

Ujawnienie nastąpiło dzięki **wewnętrznemu przeciekowi** — nieznany pracownik lub były pracownik Google przekazał *WSJ* kopię **wewnętrznego memo zespołu prawnego Google z marca 2018**. W memo opisano:

1. Wykrycie bugu przez Project Strobe
2. Ocenę techniczną skali problemu
3. **Debatę o ujawnieniu**: argumenty za i przeciw
4. **Decyzję o nieujawnieniu** z trzema głównymi argumentami:
   - "Brak dowodów, że dane wyciekły do bad actors"
   - "Google+ i tak umiera — koszty ujawnienia > korzyści"
   - ***"Nie chcemy porównań z Cambridge Analytica"***

Ostatni argument — **ujawniający stan umysłu zespołu prawnego Google** — stał się głównym elementem artykułu *WSJ* i późniejszych pozwów.

*WSJ* weryfikowało ustalenia przez kilka tygodni, konsultując z zewnętrznymi ekspertami bezpieczeństwa. Google odmówił komentarza aż do publikacji.

### Pierwsze publikacje

- **8 października 2018** — Douglas MacMillan, Robert McMillan, "Google Exposed User Data, Feared Repercussions of Disclosing to Public", *The Wall Street Journal*
- **8 października 2018** — Google blog post: Ben Smith, VP Engineering, "Project Strobe: Protecting your data, improving our third-party APIs, and sunsetting consumer Google+"
- **9 października 2018** — liczne kontynuacje w *NYT*, *WaPo*, *The Verge*, *Ars Technica*

---

## Osoby kluczowe

### Dziennikarze śledczy

- **Douglas MacMillan** (*WSJ*) — dziennikarz tech, specjalizuje się w Silicon Valley i corporate governance. Po *WSJ* dołączył do *Washington Post*.
- **Robert McMillan** (*WSJ*) — dziennikarz cyberbezpieczeństwa. Współautor wielu kluczowych ujawnień tech.

### Google

- **Sundar Pichai** — CEO Google/Alphabet. Zeznawał przed Kongresem 11 grudnia 2018, ale nie był szczegółowo pytany o G+.
- **Ben Smith** — VP Engineering, autor blog postu ogłaszającego zamknięcie G+ i Project Strobe.
- **Kent Walker** — Chief Legal Officer Google; domniemany autor lub akceptujący memo z marca 2018.

### Regulatorzy

- **SEC** — nieformalne dochodzenie, umorzone.
- **FTC** — nie wszczęła postępowania.
- **DPC Irlandia** — uznał, że brak wystarczającego ryzyka szkody dla RODO notification.
- **UK ICO** — informacyjnie zaangażowany.

### Prawnicy

- **Matal** — powód wiodący w class action *Matal v. Google* (N.D. Cal.).
- **Kaplan Fox & Kilsheimer LLP** — kancelaria reprezentująca klasę.

---

## Reakcja firmy

### Google

**Etap 1: ukrywanie (marzec–październik 2018).** 7 miesięcy ciszy.

**Etap 2: wymuszona reakcja (8 października 2018).** Tego samego dnia co publikacja *WSJ* Google publikuje blog Project Strobe z **trzema rzeczami naraz**:
1. Przyznanie się do pierwszego bugu
2. Ogłoszenie zmian w API (wyłączenie części dostępu aplikacji trzecich do Gmaila, Kalendarza)
3. **Zamknięcie Google+ consumer** w ciągu 10 miesięcy

Oficjalna narracja: *"We want to keep our focus on our enterprise efforts [for G+], where we see strong momentum."* Rynkowa interpretacja: **"zamykamy zanim nas zamkną"**.

**Etap 3: drugi bug i przyspieszenie (listopad–grudzień 2018).** Gdy pojawia się drugi bug (52,5 mln użytkowników), Google **natychmiast ujawnia** — lekcja z pierwszego. Przyspieszenie zamknięcia G+ z sierpnia 2019 do kwietnia 2019.

**Pytania bez odpowiedzi:**
- Dlaczego zespół prawny **pisemnie** napisał "nie chcemy porównań z Cambridge Analytica", zamiast omówić to ustnie? Wiele kancelarii korporacyjnych od 2018 wprowadziło zasadę **"don't write what you wouldn't want to see in the New York Times"**.
- Ilu innych produktów Google miało podobne wycieki ukryte pod Project Strobe?
- Co faktycznie wyciekło przez 3 lata pierwszego bugu (2015–2018)?

---

## Postępowanie prawne

### Jurysdykcje

1. **USA federalne** — SEC (umorzone), FTC (nie wszczęła)
2. **USA klasa** — *Matal v. Google*, N.D. Cal.
3. **UE** — DPC Irlandia, UK ICO (bez kar)

### Podstawa prawna

- **Sarbanes-Oxley Act 2002** (SOX) — obowiązek ujawnienia material events przez spółkę publiczną
- **SEC Rule 10b-5** — misleading investors
- **State consumer protection laws** — podstawa pozew zbiorowy
- **UK DPA 1998** — pre-RODO, trudniej wyegzekwować
- **RODO art. 33** — obowiązek 72h notification (gdyby sprawa była post-25.05.2018 w pełni)

### Kluczowe etapy

| Data | Etap |
|------|------|
| 8 października 2018 | Ujawnienie, ogłoszenie zamknięcia G+ |
| 2018–2019 | Dochodzenia regulacyjne |
| 2 kwietnia 2019 | Zamknięcie G+ consumer |
| 27 lipca 2020 | Ugoda pozew zbiorowy 7,5 mln USD |

### Orzecznictwo powiązane

- **In re Yahoo! Inc. Securities Litigation** (N.D. Cal. 2018) — podobna sprawa ukrycia wycieku przez Yahoo (500 mln kont 2014, ujawnione 2016); ugoda 80 mln USD.
- **Sprawa Cambridge Analytica** — bezpośrednio porównywana przez wewnętrzne memo Google.
- **Brown v. Google** (B05) — precedens dla tracking w Chrome Incognito.

---

## Kary i ugody

| Data | Organ | Kwota | Jurysdykcja | Podstawa |
|------|-------|-------|-------------|----------|
| 27 lipca 2020 | *Matal v. Google* class action | 7 500 000 USD | USA (N.D. Cal.) | State consumer protection |

**Łącznie: 7,5 mln USD** — ok. 15 centów na wyciekły profil (średnio). Pokazuje, że **cywilne pozwy klasowe USA słabo kompensują prywatność**.

---

## Precedensy i implikacje

### Dla prawa UE

- **Sprawa Google+ jest klasycznym przykładem naruszenia art. 33 RODO** — obowiązku 72-godzinnego zgłoszenia wycieku do organu nadzorczego. Ale wyciek był w 2015–2018, a RODO weszło w życie 25 maja 2018. Pierwszy bug był ujawniony po tej dacie — ale **DPC Irlandia uznał**, że ze względu na **wcześniejszy charakter** wycieku RODO nie ma zastosowania.
- **Impuls do ścisłej interpretacji art. 33** przez późniejsze DPA: brak ujawnienia = automatyczne postępowanie.

### Dla prawa USA

- **SEC nauczyła się** — po Yahoo i Google+ SEC w 2018–2020 wzmocnił reguły dot. cybersecurity disclosure.
- **SOX compliance dla big tech** — bezpośredni impuls do **SEC Cybersecurity Disclosure Rules** (2023): spółki publiczne muszą w 4 dni zgłaszać "material cybersecurity incidents".

### Dla praktyki Big Tech

- **"Don't write what you wouldn't want to see in the NYT"** — kancelarie korporacyjne wprowadziły jako zasadę po sprawie Google+.
- **"Preemptive shutdown" jako strategia** — jeśli produkt ma lukę i nikt go nie używa, zamknięcie jest tańsze od zgłaszania naruszeń. Meta robił to później z licznymi aplikacjami (Hobbi, Neighborhoods, Rooms, Slingshot, etc.).
- **Project Strobe jako wzór** — wewnętrzne audyty API po Cambridge Analytica stały się standardem; Apple, Microsoft, Meta wszystkie przeprowadziły analogiczne audyty.

---

## Pozwy zbiorowe

| Sprawa | Sąd | Stan | Wartość | Poszkodowani |
|--------|-----|------|---------|--------------|
| *Matal v. Google* | N.D. Cal. | Ugoda 2020 | 7 500 000 USD | ~500 000 + 52,5 mln użytkowników G+ |

Zgłoszenia roszczeń: ok. 1 mln osób złożyło formularz claim. Wypłata per person: **5–12 USD**.

---

## Wnioski dla obywateli

### Co to dla mnie znaczy?

Jeśli kiedykolwiek miałeś konto Google+ (a jeśli masz konto Google od 2011, prawdopodobnie tak) — twoje dane profilowe **mogły wyciekać przez 3 lata** bez twojej wiedzy. Google ukrył fakt wycieku przez 7 miesięcy. Nie dlatego, że ocenił, iż nie ma ryzyka — ale dlatego, że ocenił, iż **PR będzie gorszy niż sama luka**. To pokazuje, jak Big Tech podejmuje decyzje: **korporacyjnie, nie prawnie/etycznie**.

### Jak się chronić (ogólnie)?

1. **Zamykane platformy = pobierz swoje dane**. Każde 6-12 miesięcy odwiedź **takeout.google.com** i pobierz kopię. Jeśli Google jutro zamknie Gmail (teoretycznie możliwe), twoje dane archiwalne będą dostępne tylko jeśli je pobrałeś.
2. **Sprawdź, co Google o tobie wie**: **myactivity.google.com** — przejrzyj historię aktywności. Możesz usuwać wybrane wpisy lub ustawić auto-delete co 3/18/36 miesięcy.
3. **Minimizuj dane profilowe**: w ustawieniach konta Google usuń informacje, których nie musi mieć (zawód, miejsce pracy, data urodzenia — jeśli nie jest wymagana).
4. **Używaj aliasów Gmail** (`twoje.imie+alias@gmail.com`) — pozwala filtrować, skąd przychodzi phishing.
5. **Po phishingu opartym na wycieku** — używaj **menedżera haseł** (Bitwarden, 1Password) z **unikalnymi hasłami** per serwis. Wyciek e-maila + zawód nie pomoże napastnikowi, jeśli hasła są unikalne.

### Jakie mam prawa?

**W UE (RODO):**
- **Art. 33** — administrator ma **72 godziny** na zgłoszenie wycieku do organu nadzorczego.
- **Art. 34** — jeśli wyciek stwarza wysokie ryzyko dla osób, administrator musi **bezzwłocznie poinformować użytkowników**.
- **Art. 82** — prawo do odszkodowania.

**W USA:**
- **SEC Cybersecurity Disclosure Rules (2023)** — spółki publiczne muszą w 4 dni zgłaszać material incidents.
- Stanowe ustawy notification (Kalifornia, Nowy Jork, itp.) — zróżnicowane terminy.

### Gdzie się zgłosić?

- **Polska**: UODO — zgłoszenia naruszeń
- **UE**: krajowy DPA
- **USA**: FTC — identitytheft.gov; SEC dla kwestii giełdowych

### Uwaga dla mediatorów, prawników, administratorów danych

Sprawa Google+ pokazuje, że **ukrywanie wycieków jest droższe** niż ich ujawnienie:
- **7 miesięcy ukrywania** → 7,5 mln USD ugoda + zamknięcie produktu
- **6 dni szybkiego ujawnienia** (drugi bug) → brak dodatkowej kary
- **Wewnętrzne memo z niefortunnymi sformułowaniami** → dowód sądowy

Jeśli jesteś administratorem danych (kancelaria prawna, fundacja, firma):
- **Plan reagowania na incydenty** to obowiązek — nie tylko z art. 32 RODO, ale z **dobrej praktyki korporacyjnej**.
- **Zawsze zakładaj, że wewnętrzne memo może wyciec** — pisz tak, jakby miało być opublikowane.
- **72 godziny to bardzo mało** — musisz mieć wypracowany przepływ: inżynier wykrywa → inspektor ochrony danych → zarząd → zgłoszenie UODO.

---

## Ciekawostki

- ***"Nie chcemy porównań z Cambridge Analytica"*** — to zdanie z wewnętrznego memo Google stało się **symbolem korporacyjnego PR-kalkulowania etyki**. Używane w setkach artykułów, wykładów akademickich, prezentacji regulatorskich jako **ostrzeżenie**: jeśli to napiszesz, wyjdzie.
- **Google+ był już zombie** — w dokumentach sądowych Google przyznał, że **90% sesji Google+ trwało poniżej 5 sekund**. Ludzie przechodzili przez G+ nieświadomie z Gmaila (kiedy Google zmusił do utworzenia profilu G+). "500 000 użytkowników" to w rzeczywistości 500 000 kont, z których prawdopodobnie **aktywnych było <10 000**.
- **Porównanie z Facebookiem**: wyciek 52,5 mln użytkowników Google+ = **1/10** wycieku 533 mln Facebooka (A04). Google — ugoda 7,5 mln USD. Facebook — kara DPC 265 mln EUR. Różnica: Facebook działał **pod RODO**, Google+ bug był **przed RODO** (formalnie).
- **Ironia kongresowa**: Sundar Pichai 11 grudnia 2018 zeznawał przed House Judiciary Committee. Priorytet kongresmenów: **Chiny i Project Dragonfly** (sprawa B06), **stronniczość wyszukiwania**. Google+ był pomijany. Pichai wyszedł **praktycznie bez uszczerbku**.
- **Project Strobe jako "audyt post-CA"** — Google nigdy nie ujawnił pełnych wyników audytu. Wiadomo, że znaleziono "kilka wycieków", ale upublicznione zostały tylko te z G+. Być może pozostałe zostały naprawione po cichu.
- **Google Currents (następca G+ dla biznesu)** — zamknięty 2 lipca 2023. Żadna korporacyjna sieć społecznościowa Google nie przetrwała. Zastąpiony przez **Google Spaces** w Google Chat.
- **Google+ jako pierwszy "preemptive shutdown"** w historii Big Tech. Meta po tym wzorze zamyka aplikacje, które mają problemy (Hobbi, Rooms, Slingshot, Neighborhoods). Amazon też (Spark, Chime Pro).
- **Yahoo precedent** — przed Google+, Yahoo w 2016 ujawniło wyciek 500 mln kont z 2014 (dwuletnie ukrywanie). Ugoda SEC 35 mln USD, pozew zbiorowy 80 mln USD. Google+ miał **te same grzechy korporacyjne**, ale **mniejszą skalę** — i wcześniejszy produkt.
- **SEC zapamiętał** — w 2023 SEC opublikował **"Cybersecurity Disclosure Rules"** wymagające 4-dniowego ujawnienia material cybersecurity incidents przez spółki publiczne. Google+ i Yahoo były wzorami.
- **Polska — Google+ był popularny** (wg jakichkolwiek standardów Google+) wśród niektórych zespołów IT i blogerów tech. Bug dotknął również polskich użytkowników (szacunkowo kilkadziesiąt tysięcy). UODO nie wszczął postępowania (sprawa była pod DPC Irlandia, a DPC uznał, że brak wystarczającego ryzyka).

---

## Źródła

1. Douglas MacMillan, Robert McMillan, "Google Exposed User Data, Feared Repercussions of Disclosing to Public", *The Wall Street Journal*, 8 października 2018. URL: https://www.wsj.com/articles/google-exposed-user-data-feared-repercussions-of-disclosing-to-public-1539017194 (dostęp: 2026-04-17)

2. Ben Smith, "Project Strobe: Protecting your data, improving our third-party APIs, and sunsetting consumer Google+", Google Blog, 8 października 2018. URL: https://blog.google/technology/safety-security/project-strobe/ (dostęp: 2026-04-17)

3. Google blog, "Expediting changes to Google+", 10 grudnia 2018 — ogłoszenie drugiego bugu i przyspieszenie zamknięcia.

4. *Matal et al. v. Google LLC*, N.D. Cal., Case No. 5:18-cv-06164 — dokumenty PACER.

5. SEC Cybersecurity Disclosure Rules, 26 lipca 2023. URL: https://www.sec.gov/news/press-release/2023-139 (dostęp: 2026-04-17)

6. Sundar Pichai, zeznanie przed House Judiciary Committee, 11 grudnia 2018. Transkrypt: https://judiciary.house.gov/calendar/eventsingle.aspx?EventID=1713 (dostęp: 2026-04-17)

7. Google Takeout archive — dokumentacja procesu eksportu danych G+.

8. *In re Yahoo! Inc. Securities Litigation*, N.D. Cal., MDL No. 2752 — precedens.

9. Kaplan Fox & Kilsheimer LLP, materiały prasowe o ugodzie 7,5 mln USD.

10. IAPP, "Google+ data exposure: Lessons for cybersecurity disclosure", październik 2018. URL: https://iapp.org

---

*Ostatnia aktualizacja: 2026-04-17*
*Karta w bazie: B03_google_plus.md*
