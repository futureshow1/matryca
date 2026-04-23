/**
 * Gra decyzyjna — „Co byś zrobił(a)?"
 *
 * Każdy scenariusz to realna sytuacja z bazy Matrycy: stajesz przed
 * decyzją, którą faktycznie podejmował ktoś z opisywanych postaci
 * (sygnalista, regulator, pracownik). Wybierasz odpowiedź —
 * widzisz konsekwencje + jak to faktycznie się skończyło w rzeczywistości.
 */

export interface ScenarioChoice {
  id: string;
  label: string;
  consequence: string;
  score: number; // -3 do +3, gdzie +3 = konsekwentnie chroni prywatność/interes społeczny
}

export interface Scenario {
  slug: string;
  kicker: string;
  title: string;
  role: string;
  year: string;
  context: string;
  question: string;
  choices: ScenarioChoice[];
  reality: string;
  caseIds: string[];
}

export const SCENARIOS: Scenario[] = [
  {
    slug: 'haugen-decyzja',
    kicker: 'Scenariusz 1 z 5',
    title: 'Zabierasz dokumenty, czy odchodzisz cicho?',
    role: 'jesteś menedżerką produktu w zespole Civic Integrity w Mecie',
    year: 'maj 2021',
    context:
      'Pracujesz w Mecie od dwóch lat. Masz dostęp do dokumentów wewnętrznych Facebooka: badań pokazujących, że Instagram pogarsza samoocenę nastolatek, że algorytm wzmacnia polaryzację, że w Birmie platforma ułatwia przemoc etniczną. Wewnętrzne raporty są jasne. Firma ich nie publikuje, a publiczne komunikaty są sprzeczne z tym, co widzisz w dokumentach. Twój zespół Civic Integrity został właśnie rozwiązany. Masz decyzję do podjęcia.',
    question: 'Co robisz?',
    choices: [
      {
        id: 'cicho',
        label: 'Odchodzisz cicho. Podpisujesz NDA, bierzesz odprawę, znajdujesz pracę w innej firmie.',
        consequence:
          'Wewnętrzne dokumenty nigdy nie ujrzą światła dziennego. Twoja reputacja zostaje nietknięta. Ale Meta kontynuuje dotychczasową politykę, bo zewnętrzny świat nie wie o tym, co wiesz ty.',
        score: -2,
      },
      {
        id: 'przeciek',
        label:
          'Kopiujesz dokumenty na dysk prywatny. Przekazujesz je dziennikarzowi Wall Street Journal. Pozostajesz anonimowa.',
        consequence:
          'WSJ publikuje serię artykułów. Meta szuka źródła. Twoja tożsamość w końcu wychodzi na jaw — będziesz mierzyć się z pozwami i groźbami prawnymi bez wsparcia organizacji.',
        score: 1,
      },
      {
        id: 'jawnie',
        label:
          'Wynosisz dokumenty. Zatrudniasz prawników od sygnalistów. Ujawniasz się publicznie. Zeznajesz przed Kongresem.',
        consequence:
          'Masz zaplecze prawne i medialne. Dokumenty trafiają do 17 redakcji jednocześnie. Kongres słucha. DSA przyspieszone. Ale tracisz karierę w branży technologicznej — dostaniesz stanowisko w organizacji pozarządowej albo własnej fundacji.',
        score: 3,
      },
      {
        id: 'wewnetrznie',
        label:
          'Piszesz serię wewnętrznych memo do kierownictwa z rekomendacjami zmian. Wierzysz, że firma się poprawi od środka.',
        consequence:
          'Twoje memo trafiają do szuflady kierownictwa. Za kilka miesięcy zostajesz wyparta z zespołu i dochodzisz, że skuteczna zmiana wymaga zewnętrznego nacisku. Ale straciłaś już okno na publikację.',
        score: 0,
      },
    ],
    reality:
      'Frances Haugen wybrała trzecią opcję. 5 października 2021 zeznawała przed Kongresem USA. „Facebook Files" opublikowane zostały równolegle w 17 redakcjach. Jej wystąpienia przyspieszyły prace nad Digital Services Act w UE. Obecnie kieruje organizacją Beyond the Screen zajmującą się regulacją platform.',
    caseIds: ['A05'],
  },
  {
    slug: 'schrems-pytanie',
    kicker: 'Scenariusz 2 z 5',
    title: 'Pisz skargę czy zamknij temat?',
    role: 'jesteś studentem prawa w Wiedniu',
    year: '2011',
    context:
      'W ramach pracy semestralnej z prawa prywatności piszesz do Facebook Ireland — gdzie firma ma europejską centralę — o udostępnienie twoich danych zgodnie z prawem austriackim. Facebook wysyła ci plik. Otwierasz go: 1222 strony. Zawiera twoje wiadomości prywatne, historię lokalizacji, listę polubień, znajomych, którzy odrzucili twoje zaproszenia, wyszukiwania. O wielu rzeczach nawet nie wiedziałeś, że są zbierane. W Europie nie ma jeszcze RODO. Masz decyzję.',
    question: 'Co robisz?',
    choices: [
      {
        id: 'zamykam',
        label:
          'Piszesz pracę semestralną na podstawie materiału. Oddajesz. Idziesz dalej z nauką. To były ciekawe dane, ale nie masz pretensji — sam zainstalowałeś Facebooka.',
        consequence:
          'Twoja praca dostaje piątkę. Facebook kontynuuje tę praktykę wobec 500 milionów użytkowników europejskich. Nie ma zmian w prawie.',
        score: -1,
      },
      {
        id: 'skarga',
        label:
          'Składasz skargę do irlandzkiego Data Protection Commissioner. Oczekujesz cierpliwie na odpowiedź.',
        consequence:
          'Po dwóch latach dostajesz odpowiedź: „Facebook działa zgodnie z prawem". Skarga oddalona. Zdajesz sobie sprawę, że to sam początek — a nie koniec.',
        score: 1,
      },
      {
        id: 'postepowanie',
        label:
          'Składasz skargę do DPC Ireland + zaskarżasz decyzję do sądu austriackiego + pytanie prejudycjalne do TSUE. Latami.',
        consequence:
          'W 2015 TSUE unieważnia Safe Harbor w orzeczeniu Schrems I. W 2020 — Privacy Shield w Schrems II. Zmieniasz architekturę prawną transferu danych UE → USA. Jedno nazwisko = cała praktyka.',
        score: 3,
      },
      {
        id: 'fundacja',
        label:
          'Zamiast iść sam: zakładasz organizację pozarządową noyb, która będzie prowadzić strategiczne postępowania w imieniu obywateli europejskich.',
        consequence:
          'noyb składa pierwszą skargę w dniu wejścia RODO (25 maja 2018). Za 5 lat: kary 390 mln € (2023) i 1,2 mld € (2023). Strategia się skaluje — ale wymaga cierpliwości dekady.',
        score: 3,
      },
    ],
    reality:
      'Max Schrems wybrał trzecią i czwartą opcję jednocześnie: procesował się do TSUE (Schrems I + II) i w 2017 założył noyb. Te dwie ścieżki razem zmieniły architekturę prawną ochrony danych w Europie. Jednoosobowa inicjatywa austriackiego studenta wygenerowała większość europejskich orzeczeń kluczowych dla RODO.',
    caseIds: ['A07', 'A09'],
  },
  {
    slug: 'caspar-audyt',
    kicker: 'Scenariusz 3 z 5',
    title: 'Google nie chce odpowiedzieć. Co dalej?',
    role: 'jesteś hamburskim komisarzem ochrony danych',
    year: 'kwiecień 2010',
    context:
      'W ramach audytu Google Street View żądasz od firmy ujawnienia, jakie dokładnie dane zbierają samochody kamerowe jeżdżące po niemieckich ulicach. Google odpowiada: „Tylko zdjęcia ulic i SSID routerów Wi-Fi do usług lokalizacyjnych". Twoi inżynierowie mówią ci, że to nie może być prawda — ruch Wi-Fi musiałby być wychwytywany wraz z pakietami danych. Google zaprzecza po raz drugi. Masz do wyboru:',
    question: 'Co robisz?',
    choices: [
      {
        id: 'akceptuje',
        label:
          'Akceptujesz oświadczenie Google. Jesteś małym urzędem niemieckim, nie chcesz się mieszać w globalną korporację.',
        consequence:
          'Praktyka trwa dalej. Przez kilka kolejnych lat samochody Google zbierają fragmenty e-maili, haseł i logowań bankowych z otwartych sieci Wi-Fi w 30+ krajach. Skandal wybucha kilka lat później, ale bez twojego udziału.',
        score: -2,
      },
      {
        id: 'list',
        label:
          'Piszesz do Google list żądający szczegółowej dokumentacji technicznej w 30 dni. Oczekujesz współpracy.',
        consequence:
          'Google odpowiada po 30 dniach dokumentacją, która jest niejasna. Wymaga to kolejnych rund wymiany. Po pół roku udaje ci się wymusić częściowe ujawnienie — ale skala pozostaje nieznana.',
        score: 1,
      },
      {
        id: 'audyt',
        label:
          'Wzywasz Google do Hamburga na formalny audyt sprzętu. Prosisz o dostęp do jednego samochodu Street View i zapisu jego danych.',
        consequence:
          'Google odmawia. Eskalujesz sprawę do Federalnego Komisarza Ochrony Danych i Bundesnetzagentur. Presja wielu organów wreszcie przynosi efekt: 14 maja 2010 Google publicznie przyznaje się do zbierania payload data. Sprawa staje się globalnym precedensem.',
        score: 3,
      },
      {
        id: 'przeciek',
        label:
          'Przeciekasz swoje ustalenia do niemieckiej prasy zanim Google zdąży odpowiedzieć. Wywierasz presję medialną.',
        consequence:
          'Prasa nagłośnia sprawę, ale Google jeszcze nic publicznie nie potwierdziło. Twój urząd zostaje oskarżony o działanie „przed procesem". Utracisz reputację i ewentualnie stanowisko — mimo że miałeś rację.',
        score: -1,
      },
    ],
    reality:
      'Johannes Caspar wybrał trzecią drogę. Wsparcie Bundesnetzagentur i federalnego regulatora pozwoliło wymusić ujawnienie. 14 maja 2010 Google publicznie przyznał się do zbierania fragmentów ruchu z otwartych sieci Wi-Fi w ponad 30 krajach. Sprawa Wi-Spy stała się pierwszym globalnym precedensem, w którym europejski regulator krajowy wymusił na gigancie technologicznym ujawnienie praktyki ukrywanej przez trzy lata.',
    caseIds: ['B01'],
  },
  {
    slug: 'wylie-ujawnienie',
    kicker: 'Scenariusz 4 z 5',
    title: 'Co zrobić z wiedzą, która może zmienić wybory?',
    role: 'jesteś byłym dyrektorem ds. badań w Cambridge Analytica',
    year: 'początek 2018',
    context:
      'Odszedłeś z Cambridge Analytica w 2014 roku. Wiesz, że firma wykorzystała dane 87 milionów użytkowników Facebooka do profilowania psychograficznego — dane pozyskane przez aplikację „thisisyourdigitallife" dr. Alexandra Kogana. Wiesz, że te dane zostały użyte w kampanii Trumpa i w referendum brexitowym. Masz dokumenty. W 2018 roku nadal nikt publicznie tego nie ujawnił. Skontaktowała się z tobą Carole Cadwalladr z „The Observer".',
    question: 'Co robisz?',
    choices: [
      {
        id: 'milcze',
        label:
          'Odmawiasz rozmowy z Cadwalladr. Boisz się pozwów i represji. Podpisałeś NDA, które formalnie cię obowiązuje.',
        consequence:
          'Sprawa może zostać ujawniona za kilka lat, przez kogoś innego. Cambridge Analytica kontynuuje operacje w kolejnych wyborach. Twoja rola w tym pozostaje ukryta.',
        score: -2,
      },
      {
        id: 'anonimowo',
        label:
          'Przekazujesz Cadwalladr dokumenty, ale pozostajesz anonimowy. Chcesz, żeby prasa zrobiła resztę.',
        consequence:
          'Materiał wychodzi, ale bez twarzy. Cambridge Analytica zaprzecza. Bez możliwości wezwania cię na świadka, sprawa nie zyskuje pełnej wiarygodności.',
        score: 1,
      },
      {
        id: 'ujawniam',
        label:
          'Ujawniasz się publicznie jako sygnalista. Udostępniasz dokumenty i zeznajesz w Wielkiej Brytanii oraz przed komisją Muellera. Godzisz się na pozwy.',
        consequence:
          'Marzec 2018: „The Observer" i NYT publikują serię. Cambridge Analytica upada w ciągu miesięcy. FTC nakłada karę 5 mld USD na Facebooka (2019). Piszesz książkę „Mindf*ck". Stajesz się jedną z najbardziej rozpoznawalnych postaci wśród sygnalistów branży technologicznej.',
        score: 3,
      },
      {
        id: 'parlament',
        label:
          'Piszesz do parlamentu brytyjskiego z żądaniem dochodzenia, nie ujawniając się publicznie. Czekasz, aż organy zareagują.',
        consequence:
          'Parlament wszczyna wewnętrzne konsultacje, ale bez ujawnienia publicznego sprawa nie trafia do mediów. Dochodzenie utyka na poziomie proceduralnym. Cambridge Analytica kontynuuje działalność.',
        score: 0,
      },
    ],
    reality:
      'Christopher Wylie wybrał trzecią opcję. W marcu 2018 „The Observer" i „New York Times" opublikowały materiały, w których wystąpił pod nazwiskiem. Facebook zapłacił 5 mld USD kary FTC. Cambridge Analytica upadła. Wylie wydał książkę „Mindf*ck" (2019), w której opisał mechanizm operacji psychologicznych jako „cyber-Cambridge" — nową formę wojny informacyjnej.',
    caseIds: ['A02'],
  },
  {
    slug: 'inzynier-dragonfly',
    kicker: 'Scenariusz 5 z 5',
    title: 'Ocenzurowana wyszukiwarka dla Chin. Twoja praca.',
    role: 'jesteś inżynierką w Google Search',
    year: 'wiosna 2018',
    context:
      'Zostajesz przydzielona do projektu z kodową nazwą „Dragonfly". Okazuje się, że to ocenzurowana wersja wyszukiwarki Google dla Chin: filtr blokujący Tiananmen, Dalaj Lamę, Hongkong, demokrację. Dodatkowo: każde zapytanie jest powiązane z numerem telefonu użytkownika, co umożliwia identyfikację osób szukających „zakazanych" fraz. Kierownictwo uzasadnia: „lepiej być w Chinach z pewnymi ograniczeniami niż wcale". Wiesz, że to sprzeczne z wcześniejszymi deklaracjami Google o wyjściu z Chin w 2010 roku po ataku Aurora.',
    question: 'Co robisz?',
    choices: [
      {
        id: 'wykonuje',
        label:
          'Wykonujesz swoją pracę. Nie twoja decyzja biznesowa — twoje zadanie to implementacja. Kierownictwo podjęło decyzję strategiczną.',
        consequence:
          'Projekt idzie naprzód. Miliard obywateli Chin dostaje ocenzurowaną wyszukiwarkę Google powiązaną z identyfikacją numerów telefonów. Ryan Gallagher publikuje ujawnienie w The Intercept w sierpniu 2018, ale twoja rola pozostaje anonimowa.',
        score: -2,
      },
      {
        id: 'odchodze',
        label:
          'Cicho składasz wypowiedzenie. Nie chcesz robić sceny, ale nie chcesz też pracować nad tym projektem.',
        consequence:
          'Twoje odejście nie powoduje zmian w projekcie. Google zastępuje cię innym inżynierem. Projekt kontynuuje rozwój w cieniu.',
        score: 0,
      },
      {
        id: 'list-otwarty',
        label:
          'Podpisujesz się pod listem otwartym pracowników Google krytykującym projekt. List jest publikowany na blogu, dostępny dla prasy.',
        consequence:
          'List otwarty zdobywa 1400 podpisów pracowników Google. Media go cytują. Presja wewnętrzna i zewnętrzna zmusza kierownictwo do wygaszenia projektu w grudniu 2018. Projekt „effectively ended" — nigdy nie potwierdzony ani nie zanegowany oficjalnie.',
        score: 3,
      },
      {
        id: 'przeciek',
        label:
          'Kontaktujesz się anonimowo z Ryanem Gallagherem z The Intercept. Przekazujesz dokumentację techniczną Dragonfly.',
        consequence:
          'The Intercept publikuje szczegółowe ujawnienie w sierpniu 2018. Opinia publiczna dowiaduje się pierwsza — bez wiedzy pracowników Google. To pomaga presji z zewnątrz, ale pomija mechanizm wewnętrzny.',
        score: 2,
      },
    ],
    reality:
      'Pracownicy Google wybrali trzecią opcję (równolegle z przeciekami do The Intercept, które zasilały ich wiedzą). W sierpniu 2018 list otwarty podpisało 1400 osób. Kierownictwo zostało zmuszone do wygaszenia projektu. Grudzień 2018: Dragonfly „effectively ended". Zmieniło to kulturę pracowniczą w Dolinie Krzemowej — pokazało, że pracownicy potrafią być sygnalistami jako zbiorowość, nie tylko jednostki.',
    caseIds: ['B06'],
  },
];

export function scoreToLevel(total: number, maxPossible: number): {
  level: string;
  description: string;
} {
  const ratio = total / maxPossible;
  if (ratio < 0.2)
    return {
      level: 'bierność',
      description:
        'Twoje decyzje idą po linii najmniejszego oporu. W realnym świecie te wybory dały się na zostawienie rzeczy takich, jakie były. Sygnaliści, którzy ryzykowali więcej, wygenerowali większość zmian dokumentowanych w tej bazie.',
    };
  if (ratio < 0.5)
    return {
      level: 'ostrożność',
      description:
        'Twoje decyzje są rozważne, ale zostawiają część rzeczywistości nieruszoną. W historii tych spraw ostrożność często oznaczała, że zmiana przyszła później i kosztowała więcej.',
    };
  if (ratio < 0.8)
    return {
      level: 'zaangażowanie',
      description:
        'Twoje decyzje prowadzą do realnej zmiany. Każda z opcji, którą wybrałeś/aś, ma swój odpowiednik w rzeczywistości — osoba, która ten wybór zrobiła, ma nazwisko w tej bazie.',
    };
  return {
    level: 'konsekwencja',
    description:
      'Twoje decyzje są konsekwentnie najtrudniejsze — i najskuteczniejsze. Gdybyś był(a) w tych sytuacjach w rzeczywistości, stworzył(a)byś precedensy, które inni musieliby naśladować.',
  };
}
