# Storyboardy 60-sekundowych explainerów — 33 sprawy

**Cel**: każda z 33 spraw dostaje jednominutowy explainer w tej samej gramatyce wizualnej co A01 (v2 grafika):
- 8 scen, łącznie 60 sekund
- Duża typografia kapitaliki (sans-serif bold) + serif dla dramatycznych momentów
- Akcent czerwony `#A32D2D` jako jedyny kolor akcji
- Kluczowe liczby/nazwy w serif, kontekst w mono
- Maksymalnie jedna ciemna scena na explainer (finał albo hook)
- Format 16:9, statyczne SVG + CSS, zero zewnętrznych skryptów

**Struktura każdej sceny:**

| # | Faza | Czas | Funkcja |
|---|---|---|---|
| 1 | Setup | 0–7s | Ramka emocjonalna / punkt wejścia widza |
| 2 | Tension | 7–13s | „To powinno działać. A nie działa." |
| 3 | Reveal | 13–19s | Kiedy/kto zaczął |
| 4 | Mechanism | 19–29s | Jak to technicznie działało (diagram) |
| 5 | Scale | 29–37s | Skala — liczby, lata, osoby |
| 6 | Discovery | 37–45s | Sygnalista / dziennikarz / regulator |
| 7 | Reaction | 45–53s | Kara / ugoda / konsekwencja |
| 8 | Close | 53–60s | Nazwa sprawy + link do karty |

---

## A01 — Local Mess (Meta + Yandex, 2017–2025)

**Hook**: Nasłuchiwanie na localhost omija każdą warstwę prywatności przeglądarki.

1. **SETUP** — wielki czerwony napis „INCOGNITO" na jasnym tle. Podpis: „tryb prywatny · VPN · cookies wyłączone".
2. **TENSION** — „~~POWINNO~~ WYSTARCZYĆ" z czerwonym slashem. Podpis: „i tak nie wystarcza".
3. **REVEAL** — split screen: lewa strona „2017 YANDEX" + Maps/Browser/Navi/Search; prawa „2024 META" + Facebook/Instagram.
4. **MECHANISM** — diagram: PRZEGLĄDARKA (incognito) → `127.0.0.1` → APLIKACJA FB (zalogowana). Animowane pakiety czerwone. Label: „ID sesji → localhost".
5. **SCALE** — „OSIEM LAT. MILIARDY TELEFONÓW." Pasek czasu 2017 → IX 2024 → VI 2025. Statystyki: 5,8 mln stron Meta Pixel / 3 mln Yandex Metrica / ~2 mld użytkowników FB na Androidzie.
6. **DISCOVERY** — „3 CZERWCA 2025". Trzy uczelnie: IMDEA Networks / Radboud / KU Leuven. Dan Goodin, Ars Technica.
7. **REACTION** — zegar „07:45" czerwony wielki. „Osiem lat praktyki | Trzy godziny reakcji". Pozew zbiorowy w USA.
8. **CLOSE** (dark) — „LOCAL MESS" gigant czerwony. „Sandboxing — ominięty. Tryb incognito — ominięty. Karta A01".

---

## A02 — Cambridge Analytica (Meta + CA, 2013–2018)

**Hook**: 87 mln profili Facebooka → kampania Trumpa 2016 + Brexit.

1. **SETUP** — „MYŚLAŁEŚ, ŻE LIKE NA FACEBOOKU TO TYLKO LIKE". Podpis: „2013 rok".
2. **TENSION** — liczba rośnie na ekranie: 300 tys. → 87 mln. Label: „tyle profili wyciekło".
3. **REVEAL** — „thisisyourdigitallife" nazwa aplikacji. Autor: Aleksandr Kogan, Cambridge. Kontekst: „quiz psychometryczny".
4. **MECHANISM** — diagram: 300 tys. zainstalowało aplikację → aplikacja pobrała też dane *znajomych* → 87 mln profili. „OCEAN (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism)".
5. **SCALE** — „KAMPANIA TRUMPA". Brexit. 5,8 mld wyświetleń profilowanych reklam.
6. **DISCOVERY** — „CHRISTOPHER WYLIE". Zdjęcie? Typograficzny portret. The Observer / NYT, marzec 2018. Carole Cadwalladr obok.
7. **REACTION** — „5 000 000 000 USD" — kara FTC, rekord. + 725 mln USD class action + 100 mln SEC. Cambridge Analytica upada.
8. **CLOSE** — „CAMBRIDGE ANALYTICA" + „pierwsza sprawa, która przekonała świat, że dane to broń polityczna". Karta A02.

---

## A03 — Onavo / Facebook Research VPN / Project Atlas (Meta, 2013–2019)

**Hook**: Facebook płacił nastolatkom 20 USD/miesiąc za zainstalowanie VPN-a, który szpiegował każdą ich aplikację.

1. **SETUP** — „VPN. PRYWATNOŚĆ." Czerwone słowa. „Tak brzmiała reklama Onavo".
2. **TENSION** — „CZEGO NIE POWIEDZIELI". Czerwony slash.
3. **REVEAL** — „2013–2018: Onavo" → „2016–2019: Project Atlas". Facebook przejmuje Onavo w 2013.
4. **MECHANISM** — diagram: VPN → cały ruch urządzenia → Facebook. „Widzimy JAKIE aplikacji używasz i ile czasu". Zdjęcie schematu: WhatsApp wzrost → FB kupuje go za 19 mld USD.
5. **SCALE** — „20 USD MIESIĘCZNIE". Wiek użytkowników: 13–35 lat. Nieletni: dopuszczeni. Liczba urządzeń: ok. 187 tys.
6. **DISCOVERY** — „TechCrunch, Josh Constine, styczeń 2019". Wcześniej: Apple rozwiązuje umowę w 2018 (naruszenie Enterprise Developer Program).
7. **REACTION** — Apple usuwa Onavo z App Store (2018). Facebook zamyka Research VPN (2019). FTC — bez osobnej kary, ale włączone do 5 mld USD Cambridge Analytica.
8. **CLOSE** — „ONAVO + PROJECT ATLAS" + „kupiłeś się na darmowy VPN. Płaciłeś sobą". Karta A03.

---

## A04 — Wyciek 533 mln numerów Facebooka (2019, ujawniony 2021)

**Hook**: 2,67 miliona polskich numerów telefonów razem z 533 mln globalnie w ręce przestępców.

1. **SETUP** — „TWÓJ NUMER NA FACEBOOKU". Podpis: „dałeś go do 2FA".
2. **TENSION** — „W 2019 WYPŁYNĄŁ". Czerwony slash na słowie „prywatny".
3. **REVEAL** — „Contact Importer". Bug, który pozwalał na mass-lookup przez numer telefonu.
4. **MECHANISM** — diagram: atakujący → API Contact Importer → dopasowanie numeru do profilu FB → eksfiltracja. Skala: 533 000 000 rekordów.
5. **SCALE** — mapa świata: USA 32 mln, Egipt 45 mln, Tunezja 40 mln, Polska **2,67 mln**. 106 krajów dotkniętych.
6. **DISCOVERY** — „ALON GAL". Januar 2021 — dane w darknet forum za 5 000 USD. Wcześniej: Facebook wiedział od 2019, nie powiadomił użytkowników.
7. **REACTION** — 265 mln € kara irlandzkiego DPC (2022). Pozew zbiorowy trwa. Facebook odmawia zawiadamiania użytkowników o wycieku ich danych.
8. **CLOSE** — „2,67 MLN POLAKÓW" + „Twój numer mogli kupić za 0,01 USD". Karta A04.

---

## A05 — Facebook Files (Meta, ujawnione IX–X 2021)

**Hook**: Wewnętrzne badania Mety pokazały, że Instagram szkodzi dziewczynkom. Firma wiedziała. Firma ukryła.

1. **SETUP** — „32% DZIEWCZYNEK". Podpis: „że Instagram pogarsza ich samoocenę".
2. **TENSION** — „FACEBOOK WIEDZIAŁ". Czerwony slash.
3. **REVEAL** — „FRANCES HAUGEN" — typograficzny portret. Product manager Civic Integrity. Przekazała dokumenty WSJ we wrześniu 2021.
4. **MECHANISM** — okładki 17 redakcji, które opublikowały „Facebook Files Consortium". WSJ, NYT, Bloomberg, Le Monde, Süddeutsche Zeitung, Politico…
5. **SCALE** — lista zagadnień: Instagram/nastolatki, XCheck (VIP bez moderacji), przemoc etniczna (Mjanma, Etiopia), handel ludźmi, kartele meksykańskie.
6. **DISCOVERY** — zeznania przed Kongresem USA 5 października 2021. Parlament brytyjski, listopad 2021.
7. **REACTION** — brak bezpośredniej kary federalnej. Ale: przyspieszył Digital Services Act w UE. Kara 1,3 mld € (A07) i 390 mln € (A09) częściowo wynikają z tej narracji.
8. **CLOSE** — „FACEBOOK FILES" + „największa seria przecieków w historii Doliny Krzemowej". Karta A05.

---

## A06 — Emotional Contagion (Meta + Cornell, 2014)

**Hook**: Przez tydzień w 2012 Facebook manipulował newsfeedami 689 tys. użytkowników, żeby sprawdzić, czy można wywołać u nich depresję.

1. **SETUP** — „NASZ NEWSFEED TO MY". Podpis: „to MY wybieramy, co widzimy".
2. **TENSION** — „2012: KTOŚ TO WYBIERA ZA NAS". Czerwony slash.
3. **REVEAL** — nazwa badania: „Experimental evidence of massive-scale emotional contagion through social networks". Autorzy: Adam D. I. Kramer (Meta), Jamie Guillory + Jeffrey Hancock (Cornell).
4. **MECHANISM** — diagram: 689 000 użytkowników podzielonych na grupy. Grupa A: więcej smutnych postów. Grupa B: więcej pozytywnych. Mierzono ton ich własnych postów.
5. **SCALE** — 689 003 osób. 3 mln postów analizowanych. Żadnej świadomej zgody — „klauzula akceptacji regulaminu".
6. **DISCOVERY** — publikacja w PNAS, czerwiec 2014. Okrzyk w prasie: Forbes, The Atlantic, New York Times.
7. **REACTION** — Cornell IRB: „to nie wymagało zgody etycznej". PNAS wydaje Editorial Expression of Concern. Zero kar formalnych. Ale: zmiana dyskusji o „informed consent" w badaniach na platformach.
8. **CLOSE** — „EMOTIONAL CONTAGION" + „pierwsze publicznie opisane użycie 689 000 ludzi jako królików doświadczalnych". Karta A06.

---

## A07 — Meta 1,2 mld € kara DPC (2023)

**Hook**: Największa kara RODO w historii. Meta miała 5 miesięcy, żeby przestać przesyłać dane do USA. Nie przestała.

1. **SETUP** — „SCHREMS II". Podpis: „lipiec 2020, wyrok TSUE".
2. **TENSION** — „MUSIALI SIĘ ZATRZYMAĆ". Czerwony slash.
3. **REVEAL** — „MAX SCHREMS" — typograficzny portret. „noyb", 2011. Chronologia: Schrems I (2015, Safe Harbor upada) → Schrems II (2020, Privacy Shield upada).
4. **MECHANISM** — diagram: Meta Ireland → Meta USA → serwery w Kalifornii → zakres NSA Section 702. Bez SCC. Bez prawnej podstawy po 2020.
5. **SCALE** — „450 MILIONÓW EUROPEJCZYKÓW" — użytkownicy Facebooka i Instagrama. Transfery od 2013. Po Schrems II: dalsze. 3 lata ignorowania wyroku.
6. **DISCOVERY** — DPC Irlandia (po presji Europejskiej Rady Ochrony Danych). Decyzja 22 maja 2023.
7. **REACTION** — „1 200 000 000 EUR" — rekord RODO. **0,7% rocznego przychodu Mety**. Akcje wzrosły o 1,8% tydzień później.
8. **CLOSE** — „1,2 MLD €" + „Meta się odwołuje. Transfery trwają". Karta A07.

---

## A08 — New Mexico v. Meta (2023)

**Hook**: Pierwsza sprawa, w której ława przysięgłych USA uznała Big Tech winnego szkody dla dzieci.

1. **SETUP** — „INSTAGRAM, TIKTOK, SNAPCHAT". Podpis: „platformy, z których korzysta twoje dziecko".
2. **TENSION** — „DLA NASTOLATEK — SKLEP Z NARKOTYKAMI". Czerwony slash na „bezpieczne".
3. **REVEAL** — „Raúl Torrez, Attorney General stanu Nowy Meksyk, grudzień 2023". Wcześniejsze podejście: tylko regulacyjne. Nowa strategia: ława przysięgłych.
4. **MECHANISM** — diagram: pozew cywilny → fałszywe profile 13-latek utworzone przez prokuraturę → rekomendacje predatorów seksualnych w ciągu godzin → dowody.
5. **SCALE** — w bazie NM: 100+ milionów profili dzieci USA. Globalnie Instagram ma ~500 mln użytkowników poniżej 18.
6. **DISCOVERY** — Sąd Nowego Meksyku, 2024. Frances Haugen (A05) jako świadek ekspert.
7. **REACTION** — **pierwszy w historii wyrok ławy przeciwko Big Tech za szkody dla dzieci**. Ugoda nieujawniona. Precedens: otwarcie drogi do kolejnych AG.
8. **CLOSE** — „PIERWSZY WYROK" + „New Mexico 2023. Precedens.". Karta A08.

---

## A09 — Meta 390 mln € kara DPC (2023)

**Hook**: „Klikając akceptuję regulamin" — Meta chciała, żeby to była zgoda na reklamy. TSUE powiedział nie.

1. **SETUP** — „AKCEPTUJĘ REGULAMIN". Czerwone. Podpis: „to jest zgoda?".
2. **TENSION** — „TSUE: NIE". Czerwony slash.
3. **REVEAL** — „PERFORMANCE OF CONTRACT" — argument Mety. Twierdzili: reklamy behawioralne to CZĘŚĆ usługi, więc wystarczy akceptacja regulaminu.
4. **MECHANISM** — diagram: co robiła Meta → „akceptujesz regulamin = akceptujesz reklamy oparte na twoich danych". Co wymaga RODO → **osobna, świadoma, dobrowolna zgoda** dla reklam.
5. **SCALE** — 400+ mln europejskich użytkowników. 10 lat tej interpretacji.
6. **DISCOVERY** — skarga noyb 25 maja 2018 (pierwszy dzień RODO). Pięć lat procesu. Decyzja DPC: styczeń 2023 — po przymusie Europejskiej Rady.
7. **REACTION** — „390 000 000 EUR" (Facebook 210 mln + Instagram 180 mln). WhatsApp osobno: 5,5 mln €. Meta zmuszona do ponownej weryfikacji zgody.
8. **CLOSE** — „390 MLN €" + „to nie jest zgoda. To jest wymuszenie.". Karta A09.

---

## A10 — Meta DMA 200 mln € kary Komisji (2025)

**Hook**: „Płać albo zaakceptuj reklamy" — model biznesowy uznany za niezgodny z DMA.

1. **SETUP** — „CONSENT OR PAY". Czerwone. Podpis: „wybór Mety od listopada 2023".
2. **TENSION** — „KOMISJA EUROPEJSKA: NIE". Czerwony slash na „wybór".
3. **REVEAL** — „DIGITAL MARKETS ACT" — od III 2024. „Gatekeepers": Meta, Google, Apple, Amazon, Microsoft, ByteDance.
4. **MECHANISM** — diagram: użytkownik loguje do FB/IG → dwa przyciski: „płać 12,99 €/miesiąc" lub „akceptuj reklamy spersonalizowane". Brak wariantu „bez reklam behawioralnych, bez płacenia".
5. **SCALE** — 250+ mln użytkowników UE. Wdrożenie: listopad 2023. Formalna skarga: marzec 2024.
6. **DISCOVERY** — Komisja Europejska, Thierry Breton, pierwsze postępowanie DMA w historii. Współbadają: Panoptykon, noyb, BEUC.
7. **REACTION** — „200 000 000 EUR" (23 kwietnia 2025). Meta się odwołuje. Apple dostaje równolegle 500 mln € za App Store.
8. **CLOSE** — „200 MLN €" + „pierwsza kara DMA. Model biznesowy nie spełnia prawa.". Karta A10.

---

## B01 — Google Street View Wi-Spy (2007–2010, ujawnione 2010)

**Hook**: Samochody Google jeżdżące po ulicach zbierały też fragmenty twojego Wi-Fi. Przez trzy lata. W 30 krajach.

1. **SETUP** — „GOOGLE MAPUJE ULICE". Podpis: „od 2007".
2. **TENSION** — „ALE NIE TYLKO ULICE". Czerwony slash.
3. **REVEAL** — „JOHANNES CASPAR" — hamburski komisarz ochrony danych. Audyt 2010.
4. **MECHANISM** — diagram: samochód Street View → anteny Wi-Fi → „payload data" z otwartych sieci: hasła, emaile, logowania bankowe. „To był błąd jednego inżyniera" — Marius Milner, autor NetStumbler.
5. **SCALE** — „30 KRAJÓW. 3 LATA. SETKI GIGABAJTÓW." W tym Polska.
6. **DISCOVERY** — maj 2010, publiczne przyznanie Google. Listopad 2011: policja w Korei Płd. przeszukuje biuro Google.
7. **REACTION** — łącznie ~30 mln EUR/USD kar: Niemcy 145 tys., Francja 100 tys., Hiszpania 900 tys., 38 stanów USA 7 mln, Joffe v. Google 13 mln. Precedens: 9th Circuit — otwarta sieć Wi-Fi NIE jest „publicznie dostępna".
8. **CLOSE** — „WI-SPY" + „pierwsza globalna sprawa Big Tech przed regulatorami krajowymi". Karta B01.

---

## B02 — Google Safari Obejście (2011–2012)

**Hook**: Google pisało w reklamie: „Safari domyślnie blokuje tracking". W kodzie: bypass.

1. **SETUP** — „SAFARI BLOKUJE COOKIES STRON TRZECICH". Podpis: „domyślnie, od 2003".
2. **TENSION** — „GOOGLE OBSZEDŁ TO W DOUBLECLICK". Czerwony slash.
3. **REVEAL** — „Jonathan Mayer, Ashkan Soltani". Stanford, luty 2012. Przeanalizowali kod.
4. **MECHANISM** — diagram: skrypt DoubleClick na stronie → submit niewidocznego formularza → Safari interpretuje jako „użytkownik zainicjował" → cookie dopuszczone. Tak przez 8 miesięcy.
5. **SCALE** — miliony użytkowników iPhone'ów i Maców. Uruchomione na stronach z DoubleClick = większość internetu.
6. **DISCOVERY** — Wall Street Journal, luty 2012. Badacze: Mayer + Soltani. Później FTC.
7. **REACTION** — „22 500 000 USD" — rekord FTC w 2012. Pozwy stanów: 17 mln USD. Class action Joffe — 5,5 mln USD.
8. **CLOSE** — „SAFARI WORKAROUND" + „pierwsze udowodnienie programowego obchodzenia blokad prywatności". Karta B02.

---

## B03 — Google+ API Bugs (2015–2018, ujawnione 2018)

**Hook**: Bug w Google+ odkrywał dane 500 tys. użytkowników. Google wiedział pół roku. Ukrył. Wall Street Journal ujawnił. Google+ zamknęli.

1. **SETUP** — „BUG". Podpis: „API Google+ ujawnia dane znajomych, którzy ustawili profil na prywatny".
2. **TENSION** — „GOOGLE WIEDZIAŁ. MILCZAŁ.". Czerwony slash.
3. **REVEAL** — memo wewnętrzne Google, marzec 2018: „ujawnienie spowoduje dochodzenie regulacyjne porównywalne z Cambridge Analytica".
4. **MECHANISM** — diagram: aplikacja zewnętrzna → API Google+ People → zwracało dane profilowe „prywatnych" znajomych użytkownika → wyciek imion, emaili, zawodu.
5. **SCALE** — „500 000 KONT". Bug istniał od 2015 do marca 2018. 438 zewnętrznych aplikacji.
6. **DISCOVERY** — Wall Street Journal, Douglas MacMillan, październik 2018. Na bazie wewnętrznych dokumentów Google.
7. **REACTION** — Google ogłasza zamknięcie Google+ (8 października 2018). Listopad 2018: drugi bug, 52,5 mln kont. Pozew zbiorowy settlement: 7,5 mln USD.
8. **CLOSE** — „GOOGLE+" + „zamknięty nie dlatego, że nie był popularny. Zamknięty, bo naruszenie wyciekło.". Karta B03.

---

## B04 — Google Location History (2014–2022)

**Hook**: Wyłączałeś „Historia lokalizacji" 10 razy. Google śledził dalej, przez drugie ustawienie.

1. **SETUP** — „WYŁĄCZYŁAM HISTORIĘ LOKALIZACJI". Podpis: „Google: OK. A jednak nie".
2. **TENSION** — „DRUGIE USTAWIENIE: WEB & APP ACTIVITY". Czerwony slash.
3. **REVEAL** — „RYAN NAKASHIMA, AP, SIERPIEŃ 2018". Kupił 20 telefonów, wyłączył Location History, zmierzył, co Google zbiera.
4. **MECHANISM** — diagram: Location History (widoczny) → Timeline. „Web & App Activity" (ukryty, domyślnie włączony) → lokalizacja przez Wi-Fi, IP, sensor fusion. 340 transmisji dziennie z Androida.
5. **SCALE** — 8 lat praktyki (2014–2022). Miliardy użytkowników Androida. Wewnętrzne e-maile Google: „uproszczenie UX zmniejszy precyzję targetingu reklam".
6. **DISCOVERY** — profil Douglas Schmidt, Vanderbilt — raport „Google Data Collection". Pozwy AG Arizony (2020), 40 stanów (2022).
7. **REACTION** — Arizona 85 mln USD, 40 AG 391,5 mln USD (rekord historyczny), DC+IN+TX+WA 29,5 mln USD, Korea PIPC 48 mln EUR, Australia ACCC 35 mln EUR, pozew zbiorowy 93 mln USD. **Łącznie ~660 mln USD**.
8. **CLOSE** — „LOCATION HISTORY" + „dark patterns jako model biznesowy". Karta B04.

---

## B05 — Brown v. Google (Incognito Mode, 2020–2024)

**Hook**: „Tryb incognito" → miał być prywatny. Google: zbieraliśmy tak samo.

1. **SETUP** — „TRYB INCOGNITO". Podpis: „co to właściwie jest?".
2. **TENSION** — „NIE JEST PRYWATNY". Czerwony slash.
3. **REVEAL** — class action: Brown v. Google, ND Kalifornia, czerwiec 2020. Chasom Brown, William Byatt, Jeremy Davis, Christopher Castillo.
4. **MECHANISM** — diagram: użytkownik otwiera incognito → Google Analytics / Ad Manager / Firebase / DoubleClick śledzą tak samo przez cookies trzeciej strony, które Google osadza w milionach witryn.
5. **SCALE** — „MILIARDY SESJI INCOGNITO DZIENNIE". Szacunki: 136 mln Amerykanów używa incognito regularnie.
6. **DISCOVERY** — dokumenty wewnętrzne Google ujawnione w procesie: „nie możemy pozwolić, żeby użytkownicy myśleli, że incognito to prywatność — ale też nie możemy im tego powiedzieć wprost".
7. **REACTION** — **5 000 000 000 USD ugoda** (XII 2023): nie pieniądze, ale zniszczenie danych. Google musi też zmienić komunikaty incognito. Zmienili — subtelnie.
8. **CLOSE** — „INCOGNITO MODE" + „przez 10 lat sprzedawane jako prywatność, która nie istniała". Karta B05.

---

## B06 — Project Dragonfly (Google + Chiny, 2017–2018)

**Hook**: Google pracował nad ocenzurowaną wersją wyszukiwarki dla Chin. Zatrzymali to pracownicy — nie zarząd.

1. **SETUP** — „GOOGLE W CHINACH". Podpis: „wyszedł w 2010 po ataku Aurora".
2. **TENSION** — „WRACA W 2017". Czerwony slash na „zasady".
3. **REVEAL** — „DRAGONFLY" — kodowe. Ocenzurowana wyszukiwarka Android dla Chin. Filtry: Tiananmen, Dalai Lama, prawa człowieka.
4. **MECHANISM** — diagram: zapytanie → filter list rządu ChRL → jeśli blocked, zero wyników (bez komunikatu). Link do numeru telefonu użytkownika dla service'u (identyfikacja).
5. **SCALE** — 1,4 mld obywateli Chin. Potencjalnie 100 mln użytkowników Android.
6. **DISCOVERY** — „RYAN GALLAGHER, THE INTERCEPT, SIERPIEŃ 2018". Wewnętrzne memo. List otwarty 1400 pracowników Google (sierpień 2018). Zeznania przed Kongresem.
7. **REACTION** — Google nigdy nie potwierdził ani nie zaprzeczył. Grudzień 2018: projekt „effectively ended" (według liderów, ale zespół rozpuszczony powoli). Sprawa stała się motorem zmiany kultury pracowniczej w Dolinie.
8. **CLOSE** (dark) — „DRAGONFLY" + „sygnalistami byli pracownicy. Nie zarząd.". Karta B06.

---

## C01 — Apple Batterygate (2016–2017)

**Hook**: Twój stary iPhone nagle zwolnił. To nie był przypadek — to aktualizacja iOS.

1. **SETUP** — „MÓJ iPHONE STAŁ SIĘ WOLNY". Podpis: „to akurat, że kończy się bateria?".
2. **TENSION** — „TO NIE BATERIA. TO AKTUALIZACJA.". Czerwony slash.
3. **REVEAL** — „iOS 10.2.1, styczeń 2017". Apple dodał ukrytą funkcję throttlingu.
4. **MECHANISM** — diagram: stara bateria → iPhone pobiera chwilowo więcej mocy, niż bateria może dać → urządzenie się wyłącza. Apple's fix: zwolnić procesor, żeby zapotrzebowanie malało. Skutek uboczny: iPhone wydaje się „wyczerpany", co popycha do kupna nowego.
5. **SCALE** — „WSZYSTKIE iPhone 6, 6S, SE, 7". Setki milionów urządzeń globalnie.
6. **DISCOVERY** — reddit post John Poole (Geekbench), grudzień 2017. Potwierdzenie Apple: „Yes, we do that. But for your own good.".
7. **REACTION** — „500 000 000 USD" class action (2020, In re Apple Device Performance Litigation). 113 mln USD 34 AG USA. Francja: 25 mln €. Włochy: 10 mln €. Apple wprowadza „Battery Health" UI w iOS 11.3.
8. **CLOSE** — „BATTERYGATE" + „planned obsolescence potwierdzona dokumentacją wewnętrzną". Karta C01.

---

## C02 — Apple Siri Grading (2019)

**Hook**: Twoje „Hey Siri" słyszał nie tylko iPhone — także kontraktorzy na drugim końcu świata. Także twój seks. Także twoją terapię.

1. **SETUP** — „HEY SIRI". Podpis: „i tylko iPhone?".
2. **TENSION** — „I TYSIĄCE KONTRAKTORÓW". Czerwony slash.
3. **REVEAL** — „THOMAS LE BONNIEC" — hiszpański kontraktor Globe Technical Services w Cork. Lipiec 2019 — ujawnił proces „grading" dla The Guardian.
4. **MECHANISM** — diagram: Siri nieświadomie uruchamiana (np. zamki błyskawicznie, mikrofonu iPhone'a w kieszeni) → nagrania (do 10 sekund) wysyłane do kontraktorów → odsłuchiwane „w celach oceny jakości". Bez szyfrowania użytkownik-kontraktor.
5. **SCALE** — szacunki: 0,2% wszystkich aktywacji Siri były przesyłane do odsłuchu. Globalnie: miliardy próbek. Kontraktorzy słyszeli: dealing drugs, seks, medical conversations.
6. **DISCOVERY** — The Guardian, Alex Hern, 26 lipca 2019. Le Bonniec potem: list do CNIL (2020), europejski DPA.
7. **REACTION** — Apple zawiesza program (2 sierpnia 2019), wprowadza opt-in. Class action Lopez v. Apple — **95 mln USD ugoda** (XII 2024, zatwierdzona 2025). Pierwsza w historii ugoda za nagrania głosowe bez zgody.
8. **CLOSE** — „SIRI GRADING" + „twój asystent słuchał. A ty nie wiedziałeś, że ludzie słuchali jego.". Karta C02.

---

## C03 — Apple CSAM (2021, wycofane)

**Hook**: Apple chciał skanować każde zdjęcie w twoim iPhonie lokalnie. Pod pozorem ochrony dzieci.

1. **SETUP** — „CHRONIMY DZIECI". Podpis: „sierpień 2021, Apple".
2. **TENSION** — „SKANUJEMY TWOJE ZDJĘCIA LOKALNIE". Czerwony slash.
3. **REVEAL** — „CSAM DETECTION". Hash scan każdego zdjęcia przed wysłaniem do iCloud. Lista hashów NCMEC (Amerykańskie Centrum Dzieci Wykorzystywanych).
4. **MECHANISM** — diagram: zdjęcie → NeuralHash algorithm → 256-bit perceptual hash → porównanie z bazą CSAM → threshold 30 → raport do Apple → weryfikacja ludzka → raport do NCMEC → raport do FBI.
5. **SCALE** — 1 mld iPhone'ów. „Privacy-preserving", twierdziło Apple. 90+ kryptografów podpisało list otwarty: „wszystkie argumenty stosują się też do rządów żądających skanowania pod innym kątem".
6. **DISCOVERY** — ogłoszenie 5 sierpnia 2021. W ciągu tygodnia: EFF, ACLU, Edward Snowden, Matthew Green krytykują. Wewnątrz Apple — Erik Neuenschwander zeznaje w Kongresie.
7. **REACTION** — Apple zawiesza plany (wrzesień 2021), formalnie wycofuje (grudzień 2022). Zamiast tego: „Advanced Data Protection" (E2EE dla iCloud) — dobrowolne. Nauczka: skanowanie lokalne = backdoor.
8. **CLOSE** — „CSAM DETECTION" + „nie wdrożone. Ale plan istniał. I może wrócić.". Karta C03.

---

## C04 — Microsoft Recall (2024–2025)

**Hook**: Windows Recall robi screenshoty twojego ekranu co 5 sekund. I zapisuje. I są w plain text.

1. **SETUP** — „WINDOWS RECALL". Podpis: „maj 2024, Build conference".
2. **TENSION** — „REMEMBER ANYTHING YOU'VE EVER SEEN". Czerwony slash na „prywatnie".
3. **REVEAL** — Copilot+ PC, NPU 40 TOPS wymagane. Funkcja: AI OCR + search.
4. **MECHANISM** — diagram: co 5 sekund → screenshot pulpitu → OCR → SQLite plaintext. Dostęp: każda aplikacja uruchomiona jako ten sam użytkownik.
5. **SCALE** — wszystkie Copilot+ PC. Windows 11 ma 1,5 mld urządzeń.
6. **DISCOVERY** — „KEVIN BEAUMONT, DOUBLEPULSAR, MAJ 2024". Pierwsza analiza. Alexander Hagenah (TotalRecall tool, czerwiec 2024): eksfiltracja w sekundach.
7. **REACTION** — Microsoft wstrzymuje premiera 13 czerwca 2024 (3 tygodnie po ogłoszeniu). Redesign: dobrowolne włączenie, Windows Hello, VBS+TPM encryption. Ale 2026: TotalRecall Reloaded pokazuje kolejne luki.
8. **CLOSE** — „RECALL" + „najszybciej wycofana funkcja AI w historii Microsoftu". Karta C04.

---

## C05 — LinkedIn AI Training (2024)

**Hook**: LinkedIn trenuje swoje modele AI na twoim profilu, twoich postach, twoich rekomendacjach. Rezygnacja ukryty 3 menu głęboko.

1. **SETUP** — „TWÓJ PROFIL LINKEDIN". Podpis: „dla kogo jest?".
2. **TENSION** — „DLA AI MICROSOFTU". Czerwony slash.
3. **REVEAL** — „SEPTEMBER 2024". LinkedIn globalnie zmienia domyślnie ustawienie „Use data for Generative AI Improvement" na „ON".
4. **MECHANISM** — diagram: profile, posty, komentarze, reaction → modele AI → Copilot, Bing, Generative AI products Microsoftu. Rezygnacja: 3 menu głęboko.
5. **SCALE** — „1,1 MLD UŻYTKOWNIKÓW LINKEDIN". Większość nigdy nie zauważyła zmiany.
6. **DISCOVERY** — 404 Media, Joseph Cox, wrzesień 2024. TechCrunch, Verge potwierdzają.
7. **REACTION** — **310 mln € kara DPC** (listopad 2024). Rekord dla kategorii „dark patterns AI training". LinkedIn: „to było na tydzień". DPC: „to wystarczyło".
8. **CLOSE** — „LINKEDIN AI" + „trenował na tobie, zanim się dowiedziałaś". Karta C05.

---

## D01 — Amazon Ring (2019)

**Hook**: Twój domowy dzwonek wideo. Widzą go pracownicy Amazona. Widzi go policja. Hakerzy krzyczą do dzieci przez głośnik.

1. **SETUP** — „RING". Podpis: „bezpieczeństwo domu".
2. **TENSION** — „LUB ODWROTNIE". Czerwony slash.
3. **REVEAL** — „STYCZEŃ 2019, THE INTERCEPT". Ring Ukraine — pracownicy z pełnym dostępem do nagrań wszystkich klientów.
4. **MECHANISM** — diagram: kamera Ring → S3 bucket niezaszyfrowany → Ring Ukraine zespół adnotujący → opcja „podwójne kliknięcie, żeby wrócić do kamery klienta". Osobno: „Request for Assistance" z policją USA — 20+ tys. nagrań bez nakazu (2020–2022).
5. **SCALE** — 10+ mln Ring devices USA. Partnership z 2000+ lokalnymi wydziałami policji.
6. **DISCOVERY** — The Intercept, Sam Biddle, styczeń 2019. Motherboard, Vice — 2019 ujawnia hakerów krzyczących do dzieci.
7. **REACTION** — **5,8 mln USD kara FTC** (maj 2023). Przymusowe kasowanie danych. Obecnie: Ring wymaga nakazu sądowego, zero domyślnego sharing.
8. **CLOSE** — „RING" + „nie tylko ty patrzysz na to, co jest przed twoimi drzwiami". Karta D01.

---

## D02 — Amazon Alexa (2019)

**Hook**: Tysiące pracowników Amazona w Rumunii, Indiach, USA słuchało twoich rozmów w kuchni, sypialni, łazience. „W celu doskonalenia usługi".

1. **SETUP** — „ALEXA, PLAY JAZZ". Podpis: „kto usłyszał?".
2. **TENSION** — „BUCHAREST, BOSTON, CHENNAI". Czerwony slash.
3. **REVEAL** — „BLOOMBERG, MATT DAY, KWIECIEŃ 2019". 7 pracowników anonimowo — słyszeli intymne rozmowy, potencjalne przestępstwa, seks.
4. **MECHANISM** — diagram: Echo device → trigger word „Alexa" (lub false trigger: „Alexis", „exit") → nagranie 10–30 sekund → S3 → losowy sample → Amazon transcribe team.
5. **SCALE** — 100+ mln Echo devices. „Subset" nagrań, ale od milionów urządzeń. Pracownicy 24/7 w 3 kontynentach.
6. **DISCOVERY** — Bloomberg; The Sun; The Guardian. Sprawy w CNIL, Garante.
7. **REACTION** — **120 mln USD class action settlement** (In re Amazon Alexa Privacy, 2024). **25 mln USD FTC** (za naruszenie COPPA wobec dzieci, osobna sprawa D03). BIPA Illinois: class action trwa.
8. **CLOSE** — „ALEXA" + „always-on znaczy zawsze". Karta D02.

---

## D03 — Amazon Alexa & COPPA (2023)

**Hook**: Rodzic prosi Amazon o usunięcie nagrań swojego dziecka. Amazon: „zachowamy je na zawsze, do ulepszania Alexy".

1. **SETUP** — „USUŃ DANE MOJEGO DZIECKA". Podpis: „prawo rodzica pod COPPA".
2. **TENSION** — „AMAZON: NIE". Czerwony slash.
3. **REVEAL** — „COPPA, 1998". Amerykańska ustawa o prywatności dzieci poniżej 13 lat. Kary: do 50 000 USD per violation.
4. **MECHANISM** — diagram: dziecko mówi „Alexa" → nagranie → transkrypcja → nawet jeśli rodzic żąda usunięcia, Amazon zachowuje transkrypcje „do doskonalenia algorytmu".
5. **SCALE** — miliony Echo devices w amerykańskich domach z dziećmi. Od 2019: ~10 mln Echo Dot Kids.
6. **DISCOVERY** — FTC v. Amazon, maj 2023. Inspekcja wewnętrzna wyjawia dokumenty techniczne.
7. **REACTION** — **25 mln USD FTC + 20-letnie zobowiązanie prywatnościowe**. Amazon musi skasować wszystkie historyczne nagrania dzieci (na żądanie rodzica LUB gdy konto jest nieaktywne). Ring dostaje osobne 5,8 mln USD.
8. **CLOSE** — „COPPA" + „dzieci mają prawa. Platforma musiała wdrożyć to 25 lat później.". Karta D03.

---

## D04 — Uber God View (2011–2014)

**Hook**: Wewnętrzne narzędzie Ubera pokazywało w czasie rzeczywistym każdego klienta na mapie. Dziennikarze byli śledzeni dla zabawy.

1. **SETUP** — „ZAMAWIASZ UBERA". Podpis: „kto widzi, gdzie jesteś?".
2. **TENSION** — „KAŻDY W UBERZE". Czerwony slash.
3. **REVEAL** — „GOD VIEW" — wewnętrzne dashboard Ubera. Dostęp: menedżerowie, rekruterzy, nawet staże.
4. **MECHANISM** — diagram: mapa miasta → każdy aktualny przejazd Uber → kliknięcie = pełna historia klienta. Używane do: „imprezy korporacyjne Ubera gdzie pokazywano tor jazdy dziennikarki Johany Bhuiyan".
5. **SCALE** — wszystkie miasta Uber. Liczba mających dostęp: nieznana. Tysiące.
6. **DISCOVERY** — „JOHANA BHUIYAN, BUZZFEED, LISTOPAD 2014". Uber's Emil Michael chciał śledzić dziennikarkę. Sarah Lacy, PandoDaily: „God View pokazali mi w biurze jako feature".
7. **REACTION** — **20 000 USD ugoda NY AG** (pierwsza) — symboliczna. **148 mln USD w 50 stanach** (2018, połączone z wyciekiem D06). FTC ugoda z regulatorem.
8. **CLOSE** — „GOD VIEW" + „śledzenie klientów było feature, nie bug". Karta D04.

---

## D05 — Uber Greyball (2014–2017)

**Hook**: Uber identyfikował i blokował regulatorów, którzy chcieli złapać firmę łamiącą prawo w ich miastach.

1. **SETUP** — „UBER W PORTLAND, PARIS, BOSTON". Podpis: „gdzie był zakazany".
2. **TENSION** — „I DZIAŁAŁ MIMO TO". Czerwony slash.
3. **REVEAL** — „GREYBALL" — wewnętrzny system Ubera. Klient zidentyfikowany jako regulator = fałszywa aplikacja, brak kierowców.
4. **MECHANISM** — diagram: użytkownik otwiera aplikację → backend sprawdza: geofence (stacje policji? ratusz?) + historia (kupił telefon na prepaid?) + wzorzec (próbuje zamówić co kilka minut?) → jeśli podejrzany → pokaż „nie ma kierowców" albo fake car że znika.
4. **MECHANISM** — diagram jw.
5. **SCALE** — „10+ MIAST". Portland, Paris, Boston, Philadelphia, Las Vegas, Australia, Chiny, Korea Płd.
6. **DISCOVERY** — „MIKE ISAAC, NYT, MARZEC 2017". Ujawnił przez anonimowych byłych pracowników.
7. **REACTION** — DOJ criminal investigation (wciąż trwa). Portland wymierza karę. CEO Travis Kalanick odchodzi w 2017 (Greyball jeden z wielu czynników). Uber zmienia politykę: zero greyballowania regulatorów.
8. **CLOSE** — „GREYBALL" + „program nie do ukrywania się przed klientami. Przed państwem.". Karta D05.

---

## D06 — Uber 2016 Breach (ujawnione 2017)

**Hook**: 57 milionów rekordów wyciekło. CISO Ubera zapłacił hakerom 100 tys. USD, żeby milczeli. Pierwszy raz CISO został za to skazany karnie.

1. **SETUP** — „2016: WYCIEK 57 MILIONÓW REKORDÓW". Podpis: „dane klientów + kierowców".
2. **TENSION** — „UBER NIE POWIEDZIAŁ NIKOMU". Czerwony slash.
3. **REVEAL** — „JOE SULLIVAN" — CISO Ubera. Wypłacił hakerom 100 tys. USD z budżetu „bug bounty" — z wymogiem podpisania NDA i usunięcia danych.
4. **MECHANISM** — diagram: hakerzy włamują się do AWS → pobierają bazę → kontaktują Sullivana → transakcja „bug bounty" → NDA → ukrycie przed FTC, AG stanów, użytkownikami.
5. **SCALE** — 57 000 000 rekordów: 600 tys. numerów prawa jazdy (kierowcy USA), miliony nazwisk/emaili/numerów.
6. **DISCOVERY** — Dara Khosrowshahi, nowy CEO Ubera (listopad 2017), ujawnia. Bloomberg potwierdza.
7. **REACTION** — **148 mln USD** ugoda 50 stanów (2018). **FTC ugoda z regulatorem**. Krytycznie: **październik 2022 — Joe Sullivan skazany** w federalnym sądzie USA. Pierwszy CISO skazany karnie za ukrycie wycieku.
8. **CLOSE** — „JOE SULLIVAN" + „wyciek danych nie jest wstydem. Ukrycie wycieku jest przestępstwem.". Karta D06.

---

## E01 — TikTok / ByteDance inwigilacja dziennikarzy (2022)

**Hook**: ByteDance próbował użyć aplikacji TikTok, żeby zidentyfikować źródła informacji Financial Times i Forbes.

1. **SETUP** — „TIKTOK MA MOJE DANE". Podpis: „ale co z nimi robi?".
2. **TENSION** — „ŚLEDZI DZIENNIKARKI". Czerwony slash.
3. **REVEAL** — „CRISTINA CRIDDLE, FINANCIAL TIMES, GRUDZIEŃ 2022". Jednocześnie: „EMILY BAKER-WHITE, FORBES".
4. **MECHANISM** — diagram: Criddle pisze o TikToku dla FT → zespół ByteDance Internal Audit and Risk Control Department → użył danych aplikacji do geolokalizacji Criddle → próbował zidentyfikować jej źródło wewnątrz TikToka.
5. **SCALE** — „KILKUSET DZIENNIKARZY GLOBALNIE" potencjalnie pod obserwacją. 4 pracowników ByteDance zwolnionych (2 w Chinach, 2 w USA).
6. **DISCOVERY** — Financial Times + Forbes + New York Times publikują śledztwa grudzień 2022.
7. **REACTION** — DOJ kryminalne dochodzenie USA. Senat USA: zeznania Shou Zi Chew, CEO. PAFACA (kwiecień 2024): ByteDance ma 270 dni na sprzedaż TikToka lub ban USA. SCOTUS styczeń 2025: ban potwierdzony.
8. **CLOSE** (dark) — „BYTEDANCE" + „platforma śledziła tych, którzy o niej pisali". Karta E01.

---

## E02 — TikTok dane dzieci (2021)

**Hook**: TikTok zakładał profile dzieci poniżej 13 lat publiczne-by-default. Przez lata.

1. **SETUP** — „TIKTOK. MOJE DZIECKO. 11 LAT.". Podpis: „i ma tam konto".
2. **TENSION** — „PROFIL PUBLICZNY. DOMYŚLNIE.". Czerwony slash.
3. **REVEAL** — „COPPA + RODO". Dla dzieci poniżej 13 — wymagana zgoda rodzica. Dla 13–17 — domyślnie profil prywatny.
4. **MECHANISM** — diagram: dziecko rejestruje konto → podaje datę urodzenia (bez weryfikacji) → domyślnie: profil publiczny, komentarze aktywne, DM od wszystkich, algorytm serwuje treści dorosłe. Family Pairing — opcjonalne, rzadko używane.
5. **SCALE** — „400+ MLN UŻYTKOWNIKÓW UE". Dzieci: szacunki 40% aktywnych kont.
6. **DISCOVERY** — Anne Longfield, Children's Commissioner UK. ICO UK dochodzenie 2020. DPC Irlandia dochodzenie 2021.
7. **REACTION** — **ICO UK: 12,7 mln £** (kwiecień 2023). **DPC Irlandia: 345 mln €** (wrzesień 2023). TikTok w odwołaniu.
8. **CLOSE** — „TIKTOK — DANE DZIECI" + „dzieci nie czytają regulaminów. Platforma to wiedziała.". Karta E02.

---

## E03 — TikTok transfery do Chin (2021–2025)

**Hook**: Dane europejskich nastolatków płynęły do Chin. Pracownicy w Pekinie mieli do nich dostęp. DPC: 530 mln €.

1. **SETUP** — „MOJE DANE NA TIKTOKU". Podpis: „gdzie fizycznie są?".
2. **TENSION** — „W SINGAPURZE. NORWEGII. I W CHINACH.". Czerwony slash na „tylko Europa".
3. **REVEAL** — „SCHREMS II" (A07). Transfer do państw trzecich bez adequacy decision = potrzeba SCC + zabezpieczeń dodatkowych. Chiny: bez adequacy. USA: bez adequacy do 2023.
4. **MECHANISM** — diagram: użytkownik EU TikTok → serwery Dublin/Oslo/Singapur → ale dostęp: zespoły ByteDance w Chinach (Trust and Safety, engineering). Bez efektywnych zabezpieczeń technicznych.
5. **SCALE** — „150+ MLN UŻYTKOWNIKÓW UE". Okres audytowany: 2020–2022.
6. **DISCOVERY** — DPC Ireland rozpoczyna 2021 — po skargach w Niemczech. Szczegółowe audyty do 2024.
7. **REACTION** — **530 mln € kara DPC** (maj 2025). Druga największa kara po Mecie (1,2 mld €). TikTok zmienia architekturę (Project Clover w EU, 12 mld € inwestycja).
8. **CLOSE** — „PROJECT CLOVER" + „zbudowano, gdy wyciekło.". Karta E03.

---

## E04 — X / Grok — niekonsensualne deepfake'i (2024)

**Hook**: Elon Musk uruchamia Grok Imagine w X. W ciągu 24 godzin: rozbierania celebrytek, polityczki. Bez filtrów.

1. **SETUP** — „GROK IMAGINE". Podpis: „sierpień 2024, premiera na X".
2. **TENSION** — „BEZ FILTRÓW". Czerwony slash.
3. **REVEAL** — „DAY ONE: TAYLOR SWIFT, KAMALA HARRIS, AOC". Fałszywe nagie zdjęcia. Wirusowo na X, w ciągu godzin.
4. **MECHANISM** — diagram: użytkownik wpisuje prompt „X naga" → Grok image model Black Forest Labs (FLUX.1) → brak SafetyAPI → generuje → X platform jako rozprzestrzeniacz.
5. **SCALE** — 1000+ deepfake'ów w pierwszym tygodniu. 600 mln użytkowników X.
6. **DISCOVERY** — media techniczne w ciągu 24h: The Verge, 404 Media, NBC. EU DSA: formalne postępowanie ogłoszone wrzesień 2024.
7. **REACTION** — Komisja Europejska: **120 mln € kara DSA** (propozycja, kwiecień 2025). Grok Image: „safety model" (jesień 2024). Pozwy osobiste Taylor Swift i AOC w USA: dziesiątki milionów USD. UE Take It Down Act.
8. **CLOSE** — „GROK IMAGINE" + „deepfake jako produkt. Bez filtra jako feature.". Karta E04.

---

## E05 — Clearview AI (2020)

**Hook**: 30 miliardów twarzy zeskrapowanych z internetu. Firma sprzedaje identyfikację policji. W UE już nie wolno.

1. **SETUP** — „TWOJA TWARZ NA INSTAGRAMIE". Podpis: „publicznie. Bo tak wybrałaś.".
2. **TENSION** — „I W BAZIE 30 MILIARDÓW". Czerwony slash.
3. **REVEAL** — „CLEARVIEW AI" — firma założona 2017, Hoan Ton-That. Zeskrapowała Facebook, Instagram, LinkedIn, VK, Twitter.
4. **MECHANISM** — diagram: policjant wysyła zdjęcie z monitoringu → Clearview dopasowuje → zwraca link do FB/IG tej osoby. 0,5 sekundy zapytanie.
5. **SCALE** — „30 000 000 000 TWARZY". 3 400 agencji policji USA klientami. Australijska policja: bez jakiejkolwiek jurysdykcji.
6. **DISCOVERY** — „KASHMIR HILL, NYT, STYCZEŃ 2020". Książka „Your Face Belongs to Us" (2023).
7. **REACTION** — **UK: 7,5 mln £** (ICO, 2022). **Francja: 20 mln €** (CNIL, 2022). **Włochy: 20 mln €** (Garante, 2022). **Grecja: 20 mln €** (HDPA, 2022). **Holandia: 30 mln €** (AP, 2024). AI Act (2024): zakaz retroactive biometric ID w przestrzeni publicznej.
8. **CLOSE** — „CLEARVIEW" + „twarzy nie wyłączysz. Wyłączyć muszą regulatorzy.". Karta E05.

---

## E06 — Zoom Fałszywe E2EE (2020)

**Hook**: „Zoom is using end-to-end encryption" — przez lata w marketingu. W rzeczywistości: nie. Serwery część ruchu przez Chiny.

1. **SETUP** — „MARZEC 2020. PANDEMIA. ZOOM KAŻDY DZIEŃ.". Podpis: „300 mln uczestników dziennie".
2. **TENSION** — „END-TO-END ENCRYPTION — NIE". Czerwony slash.
3. **REVEAL** — „CITIZEN LAB, KWIECIEŃ 2020". Bill Marczak. Przeanalizował ruch Zoom: nie E2EE, część routing przez serwery w Beijing.
4. **MECHANISM** — diagram: użytkownik w UE → Zoom server Bay Area → ALE pod obciążeniem → serwer w Chinach. Klucze szyfrujące: generowane przez Zoom, nie tylko uczestników.
5. **SCALE** — 300 mln uczestników dziennie (szczyt pandemii). 500 mln kont. Szkoły, szpitale, rządy.
6. **DISCOVERY** — „CITIZEN LAB + THE INTERCEPT, Micah Lee + Yael Grauer, kwiecień 2020". Wcześniejsze alarmy: Matthew Green (Johns Hopkins).
7. **REACTION** — **85 mln USD class action** (lipiec 2021, In re Zoom Video Communications). **FTC settlement** — naprawdę E2EE implementowane, zakaz fałszywych reklam. Zoom 5.0 (maj 2020) wprowadza prawdziwe E2EE.
8. **CLOSE** — „ZOOM" + „E2EE było słowem marketingowym, zanim stało się funkcją.". Karta E06.

---

## Co dalej

- Ten dokument jest **briefem dla implementacji**. Każdy storyboard → plik `public/animations/[id]-[slug].html` według wzorca v2 (`a01-local-mess-v2.html`).
- Kolejność pracy: TOP priority cases (17 z 33) najpierw, potem pozostałe 16.
- Po akceptacji Jana: dodajemy `explainer` w frontmatter każdej karty (analogicznie do A01), layout `Case.astro` automatycznie embed'uje.
- Sumarycznie: ~40 godzin pracy implementacyjnej na wszystkie 33.

Kolumna wizualna zachowuje spójność: ta sama paleta, ta sama typografia, ta sama struktura 8 scen × 60s. Przy 33 animacjach portal dostaje **formę, która go odróżnia od każdego innego portalu referencyjnego** — fact-based, ale z graficzną tożsamością.
