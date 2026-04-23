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
    bio_long: `W maju 2021 roku Frances Haugen, wówczas menedżerka produktu w zespole Civic Integrity w Mecie,
wyniosła z firmy dziesiątki tysięcy wewnętrznych dokumentów. Przekazała je Wall Street Journal,
który w serii „Facebook Files" (wrzesień–październik 2021) opublikował dowody, że Meta wiedziała,
jak jej algorytmy wzmacniają polaryzację, szkodzą samoocenie nastolatek i służą jako infrastruktura
dla handlu ludźmi oraz przemocy etnicznej.

Haugen zeznawała przed Kongresem USA 5 października 2021 roku i przed parlamentem brytyjskim
w listopadzie. Jej wystąpienia przyspieszyły prace nad aktem o usługach cyfrowych (DSA) w UE.
Jest obecnie dyrektorką organizacji Beyond the Screen, zajmującej się kształtowaniem regulacji
platform.

Była drugą sygnalistką Mety po Sophie Zhang, ale pierwszą, której dokumenty trafiły równolegle
do takiej liczby niezależnych tytułów prasowych (17 redakcji w ramach „Facebook Files Consortium").`,
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
    bio_long: `Kanadyjczyk, urodzony w 1989 roku, w latach 2013–2014 pracownik Cambridge Analytica. W marcu 2018
roku na łamach „The Observer" i „New York Times" Wylie opisał, jak firma — za pośrednictwem
aplikacji „thisisyourdigitallife" stworzonej przez dr. Alexandra Kogana — uzyskała dane 87
milionów użytkowników Facebooka. Dane te zostały wykorzystane do profilowania psychograficznego
wyborców w kampanii Donalda Trumpa w 2016 roku i w referendum brexitowym.

Zeznawał przed brytyjskim parlamentem oraz przed komisją specjalnego prokuratora Roberta Muellera.
Sprawa doprowadziła do kary FTC w wysokości 5 mld USD (2019), bankructwa Cambridge Analytica (2018)
i pierwszego dużego uderzenia w wizerunek Mety. W 2019 roku Wylie wydał książkę „Mindf*ck",
w której opisuje mechanizm operacji psychologicznych jako „cyber-Cambridge" — nową formę wojny
informacyjnej prowadzonej wobec własnych obywateli.

Pozostaje jednym z najbardziej rozpoznawalnych sygnalistów branży technologicznej.`,
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
(2017) oraz — wspólnie z sygnalistą Christopherem Wylie — głównego artykułu ujawniającego Cambridge
Analytica (marzec 2018). Cadwalladr pracowała nad tematem trzy lata, w dużej mierze samodzielnie —
redakcja „Observera" ją wspierała, ale temat był uznawany za niszowy aż do wystąpienia Wyliego.

W 2019 i 2022 roku była pozywana przez Arrona Banksa, jednego z głównych darczyńców kampanii
Leave.EU, o zniesławienie. Obie sprawy przegrała w pierwszej instancji, ale wygrała w apelacji —
co ustanowiło ważny precedens dla ochrony dziennikarstwa śledczego w Wielkiej Brytanii.

Jej wystąpienie TED „Facebook's role in Brexit and the threat to democracy" (kwiecień 2019)
obejrzało ponad 10 milionów osób. Była nominowana do Pulitzera (2019). Należy do kluczowych postaci,
które przeniosły temat manipulacji platformami z niszy akademickiej do świadomości masowej.`,
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
    bio_long: `Chińsko-amerykańska analityczka danych, zatrudniona w Mecie (wówczas Facebook) w latach 2018–2020.
Przed odejściem z firmy napisała wewnętrzne memo — 6600 słów, w którym udokumentowała, jak Meta
wiedziała o koordynowanej manipulacji wyborami przez autorytarne reżimy w Hondurasie, Azerbejdżanie,
Boliwii, Ukrainie i Indiach, a mimo to nie podejmowała działań, bo nie dotyczyły one krajów
o wysokiej wartości reklamowej.

Memo trafiło do BuzzFeed we wrześniu 2020. Zhang zeznawała przed brytyjskim parlamentem w październiku
2021 — tydzień po Haugen. W przeciwieństwie do Haugen nie miała za sobą prawników ani zaplecza
medialnego; zeznawała sama, w konsekwencji własnej decyzji.

Obecnie pisze i występuje publicznie. Jej sprawa pokazała, jak nierówne są warunki, w jakich
działają sygnaliści — Haugen miała zorganizowane wsparcie; Zhang działała w pojedynkę.`,
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
      'Dziennikarka NYT, która ujawniła Clearview AI — bazę 30 miliardów zdjęć twarzy.',
    bio_long: `Amerykańska dziennikarka, obecnie w NYT. W styczniu 2020 roku opublikowała artykuł „The Secret Company
That Might End Privacy as We Know It" — pierwsze publiczne ujawnienie Clearview AI, firmy, która
zbudowała bazę 3 miliardów zdjęć twarzy (później: 30 miliardów) zebranych z Facebooka, LinkedIn,
Instagrama i innych platform i sprzedaje ją agencjom ścigania.

Hill tropiła firmę przez pięć miesięcy, dotarła do jej prezesa Hoana Ton-Thata i udokumentowała, że
z Clearview korzysta ponad 600 agencji policyjnych w USA — mimo że Facebook, Twitter i Google
oficjalnie zakazały pobierania danych ze swoich serwisów. Jej praca doprowadziła do dochodzeń
regulacyjnych w Wielkiej Brytanii, Kanadzie, Francji, Włoszech i Grecji oraz do kar łącznie
około 90 mln EUR.

W 2023 opublikowała książkę „Your Face Belongs to Us" o Clearview i całym rynku rozpoznawania twarzy.
Należy do najbardziej konsekwentnych dziennikarek zajmujących się prywatnością w prasie anglojęzycznej.`,
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
    bio_long: `Brytyjska dziennikarka Financial Times specjalizująca się w technologii. W grudniu 2022 roku
Criddle wraz z zespołem FT ujawniła, że pracownicy ByteDance (właściciela TikToka) w Chinach mieli
dostęp do danych o jej lokalizacji — i wykorzystali ten dostęp, próbując zidentyfikować jej źródło
wewnątrz TikToka.

ByteDance przyznał się do operacji. Cztery osoby zostały zwolnione. Sprawa wzmocniła argumenty
USA i UE za twardą regulacją TikToka, w tym PAFACA — ustawę zmuszającą ByteDance do sprzedaży
TikToka lub wycofania się z rynku amerykańskiego.

Criddle pokazała, że sami dziennikarze stają się celem operacji platform, które próbują chronić
swoje wewnętrzne źródła. Jej sprawa była powoływana w kilkunastu zeznaniach kongresowych jako
dowód tej praktyki.`,
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
    bio_long: `Amerykański dziennikarz Associated Press. W sierpniu 2018 roku opublikował artykuł „Google tracks
your movements, like it or not" — oparty na eksperymencie, w którym kupił 20 telefonów z Androidem,
wyłączył w nich opcję „Location History" i mierzył, co Google mimo to zbiera. Wynik: Google
zbierał dane lokalizacyjne przez drugi, ukryty mechanizm — „Web & App Activity" — domyślnie
włączony i mylący w opisie.

Jego testy zweryfikował naukowo prof. Jonathan Mayer z Princeton. Sprawa doprowadziła do ugód
z 40 prokuratorami generalnymi stanów USA (łącznie 391,5 mln USD w 2022 roku), kary w Arizonie
85 mln USD (2022) oraz dalszych kar w Australii, Korei Południowej i USA.

Nakashima jest przykładem dziennikarza, który przeprowadził własny eksperyment zamiast polegać
na przeciekach — metoda, która dała sprawie wiarygodność trudną do podważenia.`,
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
    bio_long: `Niemiecki prawnik, w latach 2009–2021 komisarz ochrony danych Hamburga. W maju 2010 roku
jego urząd, podczas audytu projektu Google Street View, wymusił na firmie ujawnienie, że
samochody Street View w latach 2007–2010 zbierały nie tylko zdjęcia ulic, ale także fragmenty
ruchu sieciowego z otwartych sieci Wi-Fi (hasła, e-maile, adresy odwiedzanych stron) w ponad
30 krajach.

Google początkowo zaprzeczał. Caspar nie odpuścił — i ostatecznie firma musiała się publicznie
przyznać. Sprawa Wi-Spy stała się pierwszym globalnym precedensem, w którym europejski
regulator krajowy wymusił na gigancie technologicznym ujawnienie praktyki, którą firma przez
trzy lata trzymała w tajemnicy.

Caspar nie jest klasycznym sygnalistą, ale jego urząd pełnił funkcję instytucjonalnego sygnalisty —
pokazując, że nawet niewielki regulator krajowy potrafi być asymetrycznie skuteczny wobec
największych platform.`,
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
      'Niezależny badacz prywatności, współodkrywca obejścia Safari przez Google i wielu innych naruszeń.',
    bio_long: `Irańsko-amerykański badacz. W 2012 roku, razem z Jonathanem Mayerem z Princeton, udowodnił,
że Google omija ustawienia prywatności Safari, śledząc użytkowników Apple mimo ich wyraźnej
konfiguracji. Sprawa trafiła na łamy Wall Street Journal (luty 2012) i doprowadziła do kary FTC
w wysokości 22,5 mln USD — największej w tamtym czasie.

Soltani był później doradcą prezydenta Obamy w Białym Domu (2014–2015), a następnie głównym
technologiem FTC. Od 2022 roku kieruje California Privacy Protection Agency — nowym organem
nadzorczym stanu Kalifornia, odpowiedzialnym za egzekwowanie California Consumer Privacy Act.

Jest jednym z niewielu badaczy prywatności, którzy przeszli od dziennikarstwa technicznego do
stanowienia regulacji — co daje mu perspektywę zarówno odkrywcy, jak i wykonawcy.`,
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
    bio_long: `Amerykańska dziennikarka Forbes, specjalizująca się w ByteDance i TikToku. W grudniu 2022 roku
opublikowała serię artykułów, w których wykazała, że ByteDance próbował wykorzystać aplikację
TikTok do śledzenia dziennikarzy Forbes (w tym jej samej) i Financial Times, aby zidentyfikować
ich wewnętrzne źródła.

Wcześniej, w BuzzFeed, Baker-White ujawniła 85 wewnętrznych rozmów pracowników ByteDance,
z których wynikało, że chińscy pracownicy mieli dostęp do danych amerykańskich użytkowników —
wbrew oficjalnej narracji TikToka, że dane są odseparowane.

Jej praca była jednym z głównych argumentów w pracach nad ustawą PAFACA i w sporze „TikTok
v. Garland" przed Sądem Najwyższym USA w 2025 roku. Jest przykładem dziennikarki, która sama
stała się obiektem działań kontrwywiadowczych platformy.`,
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
