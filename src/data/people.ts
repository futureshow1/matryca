/**
 * Kuratorowana baza sygnalistów i dziennikarzy.
 *
 * `caseIds` wskazują na ID kart w bazie, w których postać odegrała kluczową rolę
 * (ujawnienie, dochodzenie, pozew). Nie dublujemy wszystkich wystąpień imion
 * z frontmatterów — tu są tylko ~12 postaci, które Matryca uznaje za węzłowe.
 */

export type PersonRole = 'sygnalista' | 'dziennikarz' | 'aktywista' | 'badacz';

export interface Person {
  slug: string;
  name: string;
  role: PersonRole;
  /** Rola w momencie ujawnienia lub pracy nad tematem */
  affiliation?: string;
  years: string; // np. "2018–obecnie"
  portrait_initials: string; // np. "FH" dla Frances Haugen
  bio_short: string; // 1 zdanie, ~100 znaków, na kartę galerii
  bio_long: string; // 2–4 akapity, na stronę profilu
  caseIds: string[];
}

export const PEOPLE: Person[] = [
  {
    slug: 'frances-haugen',
    name: 'Frances Haugen',
    role: 'sygnalista',
    affiliation: 'Meta / dawna product manager',
    years: '2021–obecnie',
    portrait_initials: 'FH',
    bio_short:
      'Ujawniła Facebook Files — wewnętrzne badania Mety o szkodliwości Instagrama dla nastolatek.',
    bio_long: `W maju 2021 roku Frances Haugen, wówczas product manager w zespole Civic Integrity Meta,
wyniosła z firmy dziesiątki tysięcy wewnętrznych dokumentów. Przekazała je Wall Street Journal,
który opublikował w serii „Facebook Files" (wrzesień–październik 2021) dowody, że Meta wiedziała,
jak jej algorytmy wzmacniają polaryzację, szkodzą samoocenie nastolatek i służą jako infrastruktura
dla handlu ludźmi i przemocy etnicznej.

Haugen zeznawała przed Kongresem USA 5 października 2021 i przed parlamentem brytyjskim w listopadzie.
Jej wystąpienia przyspieszyły prace nad Digital Services Act w UE. Jest obecnie dyrektorką organizacji
Beyond the Screen, zajmującej się kształtowaniem regulacji platform.

Była druga sygnalistką Meta po Sophie Zhang, ale pierwsza, której dokumenty trafiły do takiej liczby
niezależnych tytułów prasowych równolegle (17 redakcji w ramach „Facebook Files Consortium").`,
    caseIds: ['A05', 'A08', 'B06'],
  },
  {
    slug: 'christopher-wylie',
    name: 'Christopher Wylie',
    role: 'sygnalista',
    affiliation: 'Cambridge Analytica / dawny Director of Research',
    years: '2018',
    portrait_initials: 'CW',
    bio_short:
      'Ujawnił mechanizm Cambridge Analytica — profilowanie 87 mln użytkowników Facebooka pod kampanię Trumpa.',
    bio_long: `Kanadyjczyk, urodzony w 1989 roku, były pracownik Cambridge Analytica (2013–2014). W marcu 2018
roku w „The Observer" i „New York Times" Wylie opisał, jak firma — za pośrednictwem aplikacji
„thisisyourdigitallife" stworzonej przez dr. Alexandra Kogana — uzyskała dane 87 milionów
użytkowników Facebooka. Dane te zostały wykorzystane do profilowania psychograficznego wyborców
w kampanii Trumpa 2016 i referendum brexit.

Zeznawał przed brytyjskim parlamentem i przed komisją Mueller-a. Sprawa doprowadziła do kary FTC
5 mld USD (2019), bankructwa Cambridge Analytica (2018) i pierwszego dużego uderzenia w wizerunek
Meta. Po 2018 roku Wylie opublikował książkę „Mindf*ck" (2019), w której opisuje mechanizm operacji
psychologicznych jako „cyber-Cambridge" — nowej formy wojny informacyjnej cywilnej.

Pozostaje jednym z najbardziej prominentnych sygnalistów branży technologicznej.`,
    caseIds: ['A02'],
  },
  {
    slug: 'carole-cadwalladr',
    name: 'Carole Cadwalladr',
    role: 'dziennikarz',
    affiliation: 'The Observer / The Guardian',
    years: '2017–obecnie',
    portrait_initials: 'CC',
    bio_short:
      'Dziennikarka śledcza, która ujawniła Cambridge Analytica — po trzech latach dochodzeń.',
    bio_long: `Walijska dziennikarka, autorka serii tekstów „The Great British Brexit Robbery" w „The Observer"
(2017) i głównego artykułu ujawniającego Cambridge Analytica razem z Whistleblowerem Wylie
(marzec 2018). Cadwalladr pracowała nad tematem trzy lata, w dużej mierze samodzielnie — redakcja
„Observer" wspierała ją, ale temat był uważany za niszowy aż do wystąpienia Wylie.

W 2019 i 2022 roku była pozywana przez Aarona Banksa (jednego z głównych donatorów kampanii Leave.EU)
za zniesławienie. Obie sprawy przegrała w pierwszej instancji, ale wygrała w apelacji — co ustanowiło
ważny precedens dla ochrony dziennikarstwa śledczego w UK.

Jej wystąpienie TED „Facebook's role in Brexit and the threat to democracy" (kwiecień 2019)
obejrzało ponad 10 milionów osób. Była nominowana do Pulitzera (2019). Jest jedną z kluczowych
postaci, które przekształciły kwestię manipulacji platformami z niszy akademickiej w masową świadomość.`,
    caseIds: ['A02'],
  },
  {
    slug: 'sophie-zhang',
    name: 'Sophie Zhang',
    role: 'sygnalista',
    affiliation: 'Meta / dawna data scientist',
    years: '2020',
    portrait_initials: 'SZ',
    bio_short:
      'Udokumentowała, jak Meta ignorowała manipulację wyborami w Hondurasie, Azerbejdżanie, Indiach.',
    bio_long: `Chinsko-amerykańska specjalistka ds. danych, zatrudniona w Meta (Facebook) 2018–2020. Przed
odejściem z firmy napisała 6600-słowowe memo wewnętrzne, w którym udokumentowała, że wiedziała
o koordynowanej manipulacji wyborami przez reżimy w Hondurasie, Azerbejdżanie, Boliwii, Ukrainie
i Indiach — a Meta nie podejmowała działań, bo nie dotyczyły one krajów o wysokiej wartości
reklamowej.

Memo wyciekło do BuzzFeed we wrześniu 2020. Zhang zeznawała przed brytyjskim parlamentem
w październiku 2021 — na tydzień po Haugen. W przeciwieństwie do Haugen nie miała wsparcia
prawników i PR-owców; zeznawała bez finansowania organizacji, w konsekwencji swojej indywidualnej
decyzji.

Obecnie pisze i występuje publicznie. Jej sprawa pokazała asymetrię resources'ów wokół
sygnalistów — Haugen miała zorganizowane PR; Zhang działała sama.`,
    caseIds: ['A05'],
  },
  {
    slug: 'kevin-beaumont',
    name: 'Kevin Beaumont',
    role: 'badacz',
    affiliation: 'Badacz cyberbezpieczeństwa, DoublePulsar',
    years: '2024',
    portrait_initials: 'KB',
    bio_short:
      'Jako pierwszy zdiagnozował, że Microsoft Recall rejestruje każde naciśnięcie klawisza w formie nieszyfrowanej.',
    bio_long: `Brytyjski specjalista cyberbezpieczeństwa, prowadzący blog DoublePulsar. Kiedy Microsoft
w maju 2024 ogłosił funkcję Windows Recall, Beaumont był jednym z pierwszych, którzy zdobyli
wersję testową i przeanalizowali jej architekturę. W serii wpisów w czerwcu 2024 pokazał,
że Recall przechowuje wszystkie zrzuty ekranu i teksty w bazie SQLite bez szyfrowania —
dostępnej dla każdej aplikacji działającej na koncie użytkownika.

Beaumont nazwał funkcję „potencjalną katastrofą bezpieczeństwa". Jego analizy, razem z narzędziem TotalRecall
Alexandra Hagenah, zmusiły Microsoft do wstrzymania premiery (13 czerwca 2024) i do przeprojektowania
Recall: funkcja stała się dobrowolna (trzeba ją świadomie włączyć) i szyfrowana przez VBS+TPM.

Jest przykładem sygnalisty zewnętrznego — nie pracownika firmy, ale niezależnego badacza, którego
głos był wystarczająco silny, żeby wpłynąć na strategię produktową Microsoftu.`,
    caseIds: ['C04'],
  },
  {
    slug: 'max-schrems',
    name: 'Max Schrems',
    role: 'aktywista',
    affiliation: 'noyb — European Center for Digital Rights',
    years: '2011–obecnie',
    portrait_initials: 'MS',
    bio_short:
      'Austriacki prawnik, który rozłożył dwa traktaty transferu danych EU→USA: Safe Harbor i Privacy Shield.',
    bio_long: `Austriacki prawnik, urodzony 1987, założyciel noyb (2017). Jego dwie sprawy przed TSUE to
Schrems I (2015, unieważnienie Safe Harbor) i Schrems II (2020, unieważnienie EU-US Privacy Shield) —
fundamenty obecnej architektury transferu danych osobowych między UE a USA.

Schrems zaczął aktywność w 2011 jako student austriackiej uczelni, wysyłając do Facebook Ireland
żądanie dostępu do swoich danych. Otrzymał 1222 strony — dowód masowego zbioru, o którym nie miał
pojęcia. Od tego momentu zbudował sieć strategicznych postępowań sądowych, w których jedno nazwisko
(jego) wygenerowało większość europejskich orzeczeń kluczowych dla RODO.

Noyb, organizacja, którą założył, złożyła dziesiątki skarg — w tym pierwszą w dniu wejścia RODO
(25 maja 2018) przeciwko Meta, Google i WhatsApp za „wymuszoną zgodę". Te skargi doprowadziły
do kar 390 mln EUR (2023) i 1,2 mld EUR (2023).

Nie jest sygnalistą w sensie dosłownym — ale funkcjonalnie pełni tę samą rolę, ujawniając mechanizm
prawny od wewnątrz. Bez Schremsa europejskie RODO miałoby ułamek egzekucyjnej siły.`,
    caseIds: ['A07', 'A09', 'A01'],
  },
  {
    slug: 'kashmir-hill',
    name: 'Kashmir Hill',
    role: 'dziennikarz',
    affiliation: 'The New York Times',
    years: '2020–obecnie',
    portrait_initials: 'KH',
    bio_short:
      'Dziennikarka NYT, która ujawniła Clearview AI — bazę 30 miliardów twarzy.',
    bio_long: `Amerykańska dziennikarka, obecnie w NYT. W styczniu 2020 opublikowała artykuł „The Secret Company
That Might End Privacy as We Know It" — pierwsze publiczne ujawnienie Clearview AI, firmy, która
zbudowała bazę 3 miliardów twarzy (później: 30 miliardów) zeskrobanych z Facebooka, LinkedIn,
Instagrama i innych platform, i sprzedaje ją agencjom ścigania.

Hill śledziła firmę przez 5 miesięcy, znalazła CEO Hoan Ton-Thata i udokumentowała użycie przez
600+ agencji policyjnych w USA — mimo że Facebook, Twitter i Google zakazały scrapowania. Jej praca
doprowadziła do dochodzeń regulacyjnych w UK, Kanadzie, Francji, Włoszech i Grecji — i do kar
łącznie ok. 90 mln EUR.

W 2023 opublikowała książkę „Your Face Belongs to Us" o Clearview i rynku rozpoznawania twarzy.
Jest jedną z najbardziej konsekwentnie pracujących dziennikarek prywatnościowych w anglojęzycznej
prasie.`,
    caseIds: ['E05', 'A06', 'A08', 'D01'],
  },
  {
    slug: 'cristina-criddle',
    name: 'Cristina Criddle',
    role: 'dziennikarz',
    affiliation: 'Financial Times',
    years: '2021–obecnie',
    portrait_initials: 'CC',
    bio_short:
      'Dziennikarka FT, która udokumentowała inwigilację dziennikarzy przez TikTok.',
    bio_long: `Brytyjska dziennikarka Financial Times specjalizująca się w technologii. W grudniu 2022
Criddle wraz z zespołem FT ujawniła, że pracownicy ByteDance (właściciela TikToka) w Chinach
mieli dostęp do danych o jej lokalizacji — co pokazali w praktyce, gdy próbowali zidentyfikować
jej źródło informacji wewnątrz TikToka.

ByteDance przyznał się do operacji. Cztery osoby zostały zwolnione. Sprawa wzmocniła argumentację
USA i UE za regulacją TikToka, w tym PAFACA (ustawa zmuszająca ByteDance do sprzedaży TikToka
lub wycofania się z rynku amerykańskiego).

Criddle jest przykładem, że dziennikarze sami stają się celem operacji platform, które próbują
chronić swoje źródła korporacyjne. Jej sprawa trafiła do kilkunastu zeznań kongresowych jako dowód
praktyki.`,
    caseIds: ['E01'],
  },
  {
    slug: 'ryan-nakashima',
    name: 'Ryan Nakashima',
    role: 'dziennikarz',
    affiliation: 'Associated Press',
    years: '2018',
    portrait_initials: 'RN',
    bio_short:
      'Dziennikarz AP, który udowodnił, że Google śledzi lokalizację mimo wyłączenia ustawienia.',
    bio_long: `Amerykański dziennikarz AP. W sierpniu 2018 opublikował artykuł „Google tracks your movements,
like it or not" — oparty na eksperymencie, w którym kupił 20 telefonów z Androidem, wyłączył w nich
„Location History" Google i mierzył, co Google nadal zbiera. Rezultat: Google zbierał dane
lokalizacyjne przez drugi ukryty mechanizm, „Web & App Activity" — domyślnie włączony i mylnie
opisany.

Naukową weryfikację jego testów przeprowadził prof. Jonathan Mayer z Princeton. Sprawa
doprowadziła do ugód z 40 attorneys general stanów USA (391,5 mln USD łącznie, 2022), kary
Arizony 85 mln USD (2022) i dalszych kar w Australii, Korei Południowej, USA.

Nakashima jest przykładem dziennikarza, który przeprowadził własny eksperyment zamiast polegać
na przeciekach — metodologia, która dała sprawie wiarygodność, której nie dałoby przecieki.`,
    caseIds: ['B04'],
  },
  {
    slug: 'johannes-caspar',
    name: 'Johannes Caspar',
    role: 'aktywista',
    affiliation: 'Hamburgerische Beauftragte für Datenschutz (2009–2021)',
    years: '2010–2021',
    portrait_initials: 'JC',
    bio_short:
      'Niemiecki regulator, który wymusił na Google ujawnienie skali zbioru Wi-Fi przez Street View.',
    bio_long: `Niemiecki prawnik, komisarz ochrony danych miasta Hamburg 2009–2021. W maju 2010 roku jego
urząd, w ramach audytu projektu Google Street View, wymusił na firmie ujawnienie, że samochody
Street View w latach 2007–2010 zbierały nie tylko zdjęcia ulic, ale także fragmenty ruchu
sieciowego z otwartych sieci Wi-Fi (haseł, e-maili, URL) w ponad 30 krajach.

Google pierwotnie zaprzeczał. Caspar nie odpuścił — i w efekcie Google publicznie się przyznał.
Sprawa Wi-Spy stała się pierwszym globalnym precedensem, w którym europejski regulator krajowy
wymusił na Big Tech ujawnienie praktyki, którą firma przez trzy lata utrzymywała w tajemnicy.

Caspar nie jest klasycznym sygnalistą, ale jego urząd pełnił funkcję sygnalisty instytucjonalnego —
pokazując, że dobrze zasoby regulator krajowy może działać asymetrycznie skutecznie wobec gigantów.`,
    caseIds: ['B01'],
  },
  {
    slug: 'ashkan-soltani',
    name: 'Ashkan Soltani',
    role: 'badacz',
    affiliation: 'California Privacy Protection Agency (obecnie)',
    years: '2012–obecnie',
    portrait_initials: 'AS',
    bio_short:
      'Niezależny badacz prywatności, współodkrywca Safari Workaround i wielu naruszeń prywatności.',
    bio_long: `Irańsko-amerykański badacz. W 2012 roku, razem z Jonathanem Mayerem z Princeton, udowodnił,
że Google omija ustawienia prywatności Safari, śledząc użytkowników Apple mimo ich wyraźnej
konfiguracji. Sprawa trafiła na Wall Street Journal (lutego 2012) i doprowadziła do kary FTC
22,5 mln USD — największej w tamtym czasie.

Soltani był później doradcą prezydenta Obamy w Białym Domu (2014–2015), następnie Chief
Technologist w FTC. Od 2022 roku kieruje California Privacy Protection Agency — nowym organem
nadzorczym stanu Kalifornia, odpowiedzialnym za egzekwowanie California Consumer Privacy Act.

Jest jednym z niewielu badaczy prywatności, którzy przeszli z dziennikarstwa technicznego
do wprowadzania regulacji — co daje mu perspektywę zarówno odkrywcy jak i wykonawcy.`,
    caseIds: ['B02'],
  },
  {
    slug: 'emily-baker-white',
    name: 'Emily Baker-White',
    role: 'dziennikarz',
    affiliation: 'Forbes',
    years: '2022–obecnie',
    portrait_initials: 'EB',
    bio_short:
      'Dziennikarka Forbes, która ujawniła, że TikTok używa aplikacji do śledzenia amerykańskich dziennikarzy.',
    bio_long: `Amerykańska dziennikarka Forbes, specjalizująca się w ByteDance i TikToku. W grudniu 2022
opublikowała serię artykułów, w których pokazała, że ByteDance próbował użyć aplikacji TikTok
do śledzenia dziennikarzy Forbes (w tym jej samej) i Financial Times w celu identyfikacji źródeł
wewnętrznych.

Baker-White poprzednio pracowała w BuzzFeed, gdzie ujawniła 85 wewnętrznych rozmów pracowników
ByteDance, w których chińscy pracownicy mieli dostęp do amerykańskich danych użytkowników — wbrew
oficjalnej narracji TikToka, że dane są izolowane.

Jej praca była jednym z głównych argumentów w procesie PAFACA i w sporze przed SCOTUS
„TikTok v. Garland" w 2025. Jest przykładem dziennikarki, która sama stała się obiektem
kontrwywiadu platformy.`,
    caseIds: ['E01', 'E03'],
  },
];

// Ludzie pogrupowani wg roli (dla galerii)
export function peopleByRole(role: PersonRole): Person[] {
  return PEOPLE.filter((p) => p.role === role);
}

// Mapa slug → Person dla lookup
export const PEOPLE_BY_SLUG: Record<string, Person> = Object.fromEntries(
  PEOPLE.map((p) => [p.slug, p])
);

export const ROLE_LABELS: Record<PersonRole, string> = {
  sygnalista: 'sygnalista',
  dziennikarz: 'dziennikarka/dziennikarz',
  aktywista: 'aktywistka/aktywista',
  badacz: 'badaczka/badacz',
};
