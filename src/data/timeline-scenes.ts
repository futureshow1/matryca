/**
 * Scrollytellingowa oś czasu „Kiedy — rok po roku, sprawa po sprawie".
 *
 * Struktura narracyjna: rok + wprowadzenie + ramka + przewrót +
 * 2-3 sprawy danego okresu + refleksja końcowa.
 *
 * v1 — 6 scen demo (2010, 2014, 2018, 2020, 2023, 2025).
 * Pełna wersja v2 (15-20 tys. słów, 16 scen po ~1000 słów każda)
 * wymaga osobnego procesu pisarskiego z Janem.
 */

export interface TimelineScene {
  id: string;
  year: string;
  kicker: string;
  headline: string;
  bodyParagraphs: string[];
  /** ID kart z bazy, których dotyczy scena */
  caseIds: string[];
  /** Krótka lista kluczowych liczb / nazwisk do wyświetlenia obok tekstu */
  highlights?: Array<{ value: string; label: string }>;
}

export const TIMELINE_SCENES: TimelineScene[] = [
  {
    id: 'scene-0',
    year: '2010',
    kicker: 'Początek',
    headline: 'Regulator hamburski mówi: „Pokażcie, co naprawdę zbieracie."',
    bodyParagraphs: [
      'Johannes Caspar jest prawnikiem. W 2010 roku, jako hamburski komisarz ochrony danych, kieruje audytem Google Street View. Pyta firmę: czy samochody jeżdżące z kamerami zbierają coś oprócz zdjęć ulic? Google odpowiada: tylko nazwy sieci Wi-Fi do usług lokalizacyjnych.',
      'Caspar nie odpuszcza. Prosi o szczegółową dokumentację techniczną. Prosi drugi raz. Trzeci. 14 maja 2010 roku Google publicznie przyznaje, że samochody Street View przez trzy lata zbierały fragmenty ruchu z otwartych sieci Wi-Fi: hasła, e-maile, adresy odwiedzanych stron. W ponad trzydziestu krajach.',
      'To pierwszy moment, w którym niewielki europejski regulator krajowy wymusił na gigancie technologicznym ujawnienie praktyki, którą firma przez lata utrzymywała w tajemnicy. Początek czegoś, co w następnej dekadzie rozwinie się w setki postępowań i miliardy euro kar. Ale pierwszym precedensem jest Hamburg w 2010 roku — mały urząd, trzy lata cierpliwości, jedna decyzja, żeby nie odpuścić.',
    ],
    caseIds: ['B01'],
    highlights: [
      { value: '30+', label: 'krajów' },
      { value: '3 lata', label: 'praktyki w ukryciu' },
      { value: '~10 mln €', label: 'łącznie kar' },
    ],
  },
  {
    id: 'scene-1',
    year: '2014',
    kicker: 'Eksperyment',
    headline: '689 tysięcy osób bez pytania o zgodę.',
    bodyParagraphs: [
      'Przez jeden tydzień w styczniu 2012 roku Facebook manipulował treścią kanałów wiadomości 689 003 użytkowników. Grupa A widziała więcej postów smutnych. Grupa B — więcej pozytywnych. Mierzono ton tekstów, które sami pisali po tej ekspozycji.',
      'Badanie wyszło drukiem w czerwcu 2014 w czasopiśmie „Proceedings of the National Academy of Sciences". Autorzy: Adam Kramer z Facebooka, Jamie Guillory i Jeffrey Hancock z Cornell University. Nikt z 689 tysięcy użytkowników nie wyraził świadomej zgody na udział. Podstawa? „Akceptacja regulaminu Facebooka".',
      'Cornell Institutional Review Board orzekł, że zgoda etyczna była niepotrzebna. PNAS wydał później editorial expression of concern, ale bez wycofania publikacji. Kar formalnych nie było. Ale dyskusja o tym, czy i kiedy platformy mają prawo prowadzić eksperymenty psychologiczne na milionach użytkowników — zaczęła się wtedy.',
    ],
    caseIds: ['A06'],
    highlights: [
      { value: '689 003', label: 'osób bez świadomej zgody' },
      { value: '1 tydzień', label: 'manipulacji nastrojem' },
      { value: '0 kar', label: 'ale zmiana debaty' },
    ],
  },
  {
    id: 'scene-2',
    year: '2018',
    kicker: 'Wybuch',
    headline: 'Cambridge Analytica otwiera publiczne oczy.',
    bodyParagraphs: [
      'W marcu 2018 roku „The Observer" i „The New York Times" publikują serię artykułów Carole Cadwalladr, opartych na ujawnieniach Christophera Wylie — byłego dyrektora ds. badań w Cambridge Analytica. Firma, korzystając z aplikacji „thisisyourdigitallife" dr. Alexandra Kogana, pozyskała dane 87 milionów użytkowników Facebooka. Dane wykorzystano do profilowania psychograficznego wyborców w kampanii Donalda Trumpa w 2016 roku i w referendum brexitowym.',
      'Facebook zapłaci 5 miliardów dolarów kary FTC w lipcu 2019 roku — rekord w historii FTC. Tydzień po ogłoszeniu akcje Mety wzrosną o 1,8 procenta. Rynek odetchnie: kwota okaże się mniejsza, niż się obawiano.',
      'Ale sprawa Cambridge Analytica po raz pierwszy przekłada abstrakcyjne „dane osobowe" na konkretne „wybory demokratyczne". Zaczyna się debata publiczna na skalę, której wcześniej nie było. Cambridge Analytica upada. Facebook zostaje — ale z modelem, który musi od tej pory reagować na nacisk regulacyjny, prawniczy i polityczny.',
    ],
    caseIds: ['A02'],
    highlights: [
      { value: '87 mln', label: 'profili Facebooka' },
      { value: '5 mld $', label: 'kara FTC (2019)' },
      { value: '+1,8%', label: 'wzrost akcji Mety po ogłoszeniu kary' },
    ],
  },
  {
    id: 'scene-3',
    year: '2020',
    kicker: 'Wzorzec',
    headline: 'Clearview AI pokazuje, że twarzy nie wyłączysz.',
    bodyParagraphs: [
      'W styczniu 2020 roku Kashmir Hill z „New York Timesa" publikuje artykuł „The Secret Company That Might End Privacy as We Know It". Ujawnia Clearview AI — firmę, która pobrała z internetu miliardy zdjęć twarzy (publicznie dostępnych, z Facebooka, LinkedIna, Instagrama) i sprzedaje narzędzie identyfikacji biometrycznej policji amerykańskiej. Zero zgody osób, których twarze są w bazie.',
      'W tym samym roku, podczas pandemii, Zoom rośnie do 300 milionów uczestników dziennie. Marketing firmy chwali się szyfrowaniem end-to-end. Bill Marczak z Citizen Lab w kwietniu 2020 analizuje ruch: szyfrowanie end-to-end nie istnieje, część ruchu przechodzi przez serwery w Chinach. Zoom zapłaci 85 milionów dolarów ugody.',
      'Rok 2020 to moment, w którym uświadamiamy sobie, że prywatność nie jest pojedynczym naruszeniem — to systemowy wzorzec. Twarzy nie wyłączysz. Szyfrowania nie zweryfikujesz samodzielnie. A platform nie da się po prostu unikać — są infrastrukturą codziennej pracy, edukacji, opieki zdrowotnej.',
    ],
    caseIds: ['E05', 'E06'],
    highlights: [
      { value: '30 mld', label: 'zdjęć twarzy w bazie Clearview' },
      { value: '300 mln', label: 'uczestników Zoom dziennie (szczyt)' },
      { value: '85 mln $', label: 'ugoda Zoom' },
    ],
  },
  {
    id: 'scene-4',
    year: '2023',
    kicker: 'Egzekwowanie',
    headline: 'RODO przestaje być kartką — zaczyna być kwotą.',
    bodyParagraphs: [
      'Maj 2023. Irlandzki Data Protection Commission, pod naciskiem Europejskiej Rady Ochrony Danych, nakłada na Meta karę 1,2 miliarda euro. Największą w historii RODO. Za transfer danych europejskich użytkowników do Stanów Zjednoczonych bez prawnej podstawy — trzy lata po orzeczeniu Schrems II, które taki transfer unieważniło.',
      'Ta sama Meta kilka miesięcy wcześniej dostaje 390 milionów euro kary za reklamy behawioralne oparte o „wykonanie umowy" zamiast świadomej zgody. Następnie: TikTok 345 milionów euro za dane dzieci (wrzesień 2023). LinkedIn 310 milionów euro (listopad 2024) za trening AI bez zgody użytkowników.',
      '2023 rok to moment, w którym europejskie egzekwowanie prawa o danych zaczyna realnie kosztować. Ale dla firm, których roczny przychód liczy się w setkach miliardów, nawet rekordowa kara to 0,7 procenta sprzedaży. „Kara jako koszt prowadzenia działalności" — teza tego portalu — zostaje potwierdzona księgowo.',
    ],
    caseIds: ['A07', 'A09', 'E02', 'C05'],
    highlights: [
      { value: '1,2 mld €', label: 'kara Meta — rekord RODO' },
      { value: '0,7%', label: 'rocznego przychodu Mety' },
      { value: '+1,8%', label: 'akcji tydzień później' },
    ],
  },
  {
    id: 'scene-5',
    year: '2025',
    kicker: 'Dzień dzisiejszy',
    headline: 'Sandboxing przeglądarki — ominięty. Tryb incognito — ominięty.',
    bodyParagraphs: [
      '3 czerwca 2025 roku zespół akademicki z IMDEA Networks, Radboud University i KU Leuven publikuje raport. Meta i Yandex od lat wykorzystują mechanizm lokalnej komunikacji między aplikacją a przeglądarką — localhost, port 12387 — żeby sparować anonimową sesję użytkownika z jego realną tożsamością. Tryb incognito, VPN, blokada ciasteczek stron trzecich — wszystko ominięte przez tylne drzwi.',
      'Tego samego dnia, o godzinie 7:45 rano czasu europejskiego, Meta wyłącza praktykę. Yandex trochę później. Osiem lat praktyki — trzy godziny reakcji. Ten szybkość pokazuje, że technicznie było to zawsze trywialne do wyłączenia. Nie było — bo nie musiało być.',
      'Do dziś trwają postępowania Komisji Europejskiej na mocy DSA i DMA. Kara 200 milionów euro dla Meta (kwiecień 2025) — pierwsza w historii DMA. 120 milionów euro dla X za deepfake\'i Grok Imagine (propozycja). 530 milionów euro dla TikToka za transfery danych do Chin (maj 2025). Matryca trwa. Regulatorzy nadążają tylko częściowo.',
    ],
    caseIds: ['A01', 'A10', 'E03', 'E04'],
    highlights: [
      { value: '8 lat', label: 'praktyki ukrytego nasłuchu' },
      { value: '3 godziny', label: 'między publikacją a reakcją Mety' },
      { value: '200 mln €', label: 'pierwsza kara DMA' },
    ],
  },
];
