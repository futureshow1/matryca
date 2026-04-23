/**
 * Kuratowany quiz diagnostyczny — 15 pytań o nawyki cyfrowe,
 * każde powiązane z konkretnymi sprawami w bazie.
 */

export interface QuizQuestion {
  id: string;
  question: string;
  /** Co znaczy odpowiedź „tak" — co o tobie wiadomo jeśli robisz X. */
  revelation: string;
  /** Waga w sumarycznym wyniku. */
  weight: 1 | 2 | 3;
  /** ID kart w bazie, które opisują tę praktykę. */
  caseIds: string[];
  /** Konkretna akcja, którą można podjąć. */
  action: string;
}

export const QUESTIONS: QuizQuestion[] = [
  {
    id: 'facebook',
    question: 'Masz konto na Facebooku lub Instagramie?',
    revelation:
      'Meta utrzymuje profil reklamowy zawierający setki etykiet o tobie: przewidywany dochód, stan cywilny, poglądy polityczne, zainteresowania, listę miejsc, które odwiedzasz. Profil jest aktualizowany cały czas na podstawie treści, które przewijasz — nawet tych, w które nie kliknęłaś/nie kliknąłeś.',
    weight: 3,
    caseIds: ['A02', 'A05', 'A06', 'A07'],
    action: 'Otwórz ustawienia reklam (Settings → Ads) i wyłącz personalizację reklam. Usuń zainteresowania, których nie dodałaś/-eś. Sprawdź, jakie firmy „udostępniły Metę twoje dane" (zwykle 200–1000 firm).',
  },
  {
    id: 'messenger-whatsapp',
    question: 'Używasz Messengera lub WhatsAppa?',
    revelation:
      'Metadane wszystkich twoich rozmów (kto, kiedy, jak długo, z jakiej lokalizacji) są dostępne dla Mety. WhatsApp ma E2EE na treść wiadomości, ale metadane — nie. W 2021 Meta została ukarana w Irlandii 390 mln € za nieprzejrzystość tej polityki.',
    weight: 2,
    caseIds: ['A07', 'A09'],
    action: 'Rozważ Signal dla rozmów, które mają być prywatne. Dla codziennej korespondencji: przyjmij, że metadane są znane (kto z kim, kiedy).',
  },
  {
    id: 'gmail',
    question: 'Masz konto Gmail?',
    revelation:
      'Google skanuje e-maile, żeby budować profil zainteresowań (mimo oficjalnych deklaracji, że nie używa ich do reklam — dane są używane do „ulepszania produktu"). Dla Androida i Chrome to samo konto jest centralnym identyfikatorem — wszystko, co robisz w ekosystemie, jest zszywane.',
    weight: 2,
    caseIds: ['B03', 'B04'],
    action: 'Wyłącz „Web & App Activity" i „Location History" na myaccount.google.com/data-and-privacy. Rozważ ProtonMail lub Fastmail jako alternatywę dla krytycznej korespondencji.',
  },
  {
    id: 'android',
    question: 'Używasz Androida?',
    revelation:
      'Telefon z Androidem wysyła do Google średnio 340 transmisji telemetrycznych dziennie (wg badań prof. Douglasa Schmidta, Vanderbilt). Obejmuje to lokalizację nawet po wyłączeniu „Location History" — przez drugie ustawienie „Web & App Activity", ujawnione przez AP w 2018.',
    weight: 3,
    caseIds: ['B04', 'B01', 'B03'],
    action: 'Wyłącz oba: „Location History" i „Web & App Activity". Rozważ ograniczenie uprawnień aplikacji (szczególnie lokalizacja: „tylko gdy używam"). Dla użytkowników zaawansowanych: CalyxOS / GrapheneOS.',
  },
  {
    id: 'alexa-smart-speaker',
    question: 'Masz Alexę, Echo, Google Home lub HomePod w domu?',
    revelation:
      'Asystenty głosowe są stale włączone — mikrofon cały czas nasłuchuje słowa aktywującego. Amazon w latach 2014–2019 wysyłał nagrania z Alexy do pracowników kontraktowych na całym świecie, w tym z rozmów z udziałem dzieci, bez zgody rodziców. Sprawa zakończyła się karą 25 mln USD za naruszenie COPPA.',
    weight: 2,
    caseIds: ['D02', 'D03', 'C02'],
    action: 'Wyłącz „continuous improvement" / „help improve Amazon services" w ustawieniach. Ręcznie usuń historię nagrań. Rozważ wyłączanie urządzenia, gdy masz rozmowy wrażliwe.',
  },
  {
    id: 'tiktok',
    question: 'Ty lub twoje dziecko korzystacie z TikToka?',
    revelation:
      'TikTok (ByteDance) ma jeden z najbardziej precyzyjnych algorytmów rekomendacyjnych i ma dostęp do lokalizacji, kontaktów, pamięci urządzenia. Dane są przetwarzane również w Chinach — ujawniono w 2022, że ByteDance próbował śledzić amerykańskich dziennikarzy. Kary RODO: 345 mln € (2023, dane dzieci) + 530 mln € (2025, transfery do Chin).',
    weight: 3,
    caseIds: ['E01', 'E02', 'E03'],
    action: 'Dla dzieci: rozważ Family Pairing lub ograniczenie czasu w aplikacji. Dla siebie: wyłącz „personalizowany kanał", cofnij uprawnienia (lokalizacja, kontakty), rozważ korzystanie w przeglądarce zamiast w aplikacji.',
  },
  {
    id: 'cookies',
    question: 'Klikasz „Akceptuj wszystkie" w banerach cookies, żeby szybciej zamknąć?',
    revelation:
      'Każde „akceptuj wszystkie" to zgoda dla 300–1500 firm z branży reklamowej, żeby śledzić cię na wielu witrynach naraz. Projektanci interfejsu robią przycisk „odmów" mały i ukryty — to klasyczny mylący interfejs. CNIL nałożył za to w 2022 roku kary 150 mln € na Google i 60 mln € na Facebooka.',
    weight: 2,
    caseIds: ['A10', 'B04'],
    action: 'Zainstaluj rozszerzenie „Consent-O-Matic" lub „I don\'t care about cookies" — automatycznie odrzuca zbędne cookies na większości stron. Używaj Firefox z włączoną „Total Cookie Protection".',
  },
  {
    id: 'zoom',
    question: 'Używasz Zoom do spotkań, które są dla ciebie ważne?',
    revelation:
      'Zoom przez lata twierdził, że ma „end-to-end encryption" — w 2020 FTC udowodnił, że nie miał. Część ruchu była routowana przez serwery w Chinach (również dla klientów poza Chinami). Zoom zapłacił 85 mln USD ugody.',
    weight: 1,
    caseIds: ['E06'],
    action: 'Dla krytycznych rozmów: Signal video-calls (prawdziwe E2EE) lub Jitsi Meet. Dla biznesowych: płatna wersja Zoom z włączonym E2EE w ustawieniach spotkania.',
  },
  {
    id: 'amazon',
    question: 'Zamawiasz regularnie w Amazonie?',
    revelation:
      'Amazon ma najbogatszy profil zakupowy ze wszystkich platform handlu internetowego. Historia zamówień, wyszukiwań, czasu spędzonego na produktach, recenzji. Do tego Prime Video, Alexa, Ring (kamery) — wszystko pod jednym kontem, wszystko ze sobą łączone.',
    weight: 2,
    caseIds: ['D01', 'D02', 'D03'],
    action: 'Rozważ polskie alternatywy (Allegro, Empik, lokalne sklepy) dla zakupów, których nie musisz robić wyłącznie w Amazonie. Jeśli zostajesz na platformie: przeglądaj historię zamówień co kwartał i usuwaj zbędne wpisy.',
  },
  {
    id: 'ring-camera',
    question: 'Masz kamerę Ring albo inny inteligentny dzwonek w domu?',
    revelation:
      'Amazon Ring udostępniał nagrania policji amerykańskiej bez zgody właścicieli urządzeń (ponad 1800 przypadków w 2022 roku). W Polsce bezpośrednio nas to nie dotyczy, ale architektura usługi jest ta sama. FTC ukarała Amazon 5,8 mln USD za brak zabezpieczeń danych biometrycznych i nachalne reklamy.',
    weight: 2,
    caseIds: ['D01'],
    action: 'Rozważ alternatywy z lokalnym zapisem zamiast chmury (np. lokalne NVR). Jeśli masz Ring: wyłącz aplikację społecznościową „Neighbors", zablokuj udostępnianie nagrań policji, włącz szyfrowanie end-to-end w ustawieniach.',
  },
  {
    id: 'icloud',
    question: 'Masz iPhone z włączonym iCloud Backup?',
    revelation:
      'Kopia zapasowa iCloud nie jest szyfrowana end-to-end (chyba że włączysz Advanced Data Protection, domyślnie wyłączone). Apple przez lata planował funkcję CSAM — skanowanie twoich zdjęć lokalnie pod kątem treści dziecięcych (2021). Plan został wycofany po globalnej krytyce. Wcześniej Apple współpracował ze służbami przy odblokowywaniu iPhonów.',
    weight: 2,
    caseIds: ['C03', 'C02'],
    action: 'Włącz Advanced Data Protection (Ustawienia → Apple ID → iCloud) — szyfruje kopię zapasową. Rozważ też osobną kopię lokalną przez Finder/iTunes dla wrażliwych zdjęć.',
  },
  {
    id: 'linkedin',
    question: 'Masz konto LinkedIn?',
    revelation:
      'LinkedIn (własność Microsoftu) od września 2024 roku domyślnie używa wszystkich twoich wpisów, artykułów i profilu do trenowania modeli AI Microsoftu. Możliwość rezygnacji istnieje, ale jest ukryta trzy poziomy menu głębiej. Kara irlandzkiego DPC: 310 mln € (2024) za naruszenie RODO.',
    weight: 2,
    caseIds: ['C05'],
    action: 'Ustawienia → Prywatność danych → „Dane do doskonalenia AI" → wyłącz. Sprawdź też „Dostęp aplikacji trzecich" — domyślnie wiele zewnętrznych aplikacji ma dostęp do twojego profilu.',
  },
  {
    id: 'login-with',
    question: 'Używasz „Zaloguj się przez Facebook/Google" na zewnętrznych stronach?',
    revelation:
      'Każde takie logowanie przekazuje dostawcy (Mecie lub Google) informację, że odwiedziłaś/-eś konkretną stronę — buduje międzywitrynowy profil twojego zachowania. Dodatkowo: jeśli stracisz konto Meta (zawieszenie, blokada), tracisz dostęp do wszystkich powiązanych kont.',
    weight: 1,
    caseIds: ['A02', 'B02'],
    action: 'Używaj oddzielnego hasła dla każdego serwisu + menedżera haseł (Bitwarden, 1Password). Powstrzymaj się od nowych „Zaloguj przez..." — zakładaj konta od zera.',
  },
  {
    id: 'public-photos',
    question: 'Masz publicznie dostępne zdjęcia swojej twarzy (Facebook, Instagram, LinkedIn, blog)?',
    revelation:
      'Clearview AI zeskrobało 30+ miliardów zdjęć twarzy z publicznych źródeł w internecie — bez twojej zgody. Baza jest sprzedawana policji (400+ agencji USA), wywiadowi, a przez subskrypcje: niemal każdemu. W Polsce usługa PimEyes (nie w bazie, ale podobny model) działa komercyjnie. Od 2024 UE zakazała tego typu działalności.',
    weight: 2,
    caseIds: ['E05'],
    action: 'Ustaw profile jako prywatne (tryb prywatny Instagrama, ograniczenia na FB). Dla zdjęć publicznych: przyjmij, że twoja twarz jest już w kilku bazach rozpoznawania. W UE możesz żądać usunięcia na podstawie RODO (Clearview musi usunąć dane obywateli UE).',
  },
  {
    id: 'child-account',
    question: 'Twoje dziecko (poniżej 13 lat) używa serwisu, który wymaga wieku 13+?',
    revelation:
      'Ponad 70% dzieci obchodzi minimalny wiek rejestracji — często z pomocą rodziców. Platformy wiedzą, że dzieci tam są, ale nie weryfikują wieku skutecznie. TikTok, Meta, YouTube — wszyscy dostali kary za dane dzieci (TikTok: 345 mln € w 2023 roku). Skutki: reklamy profilowane na dzieci, rekomendacje szkodliwych treści, budowanie profilu, który zostanie wykorzystany po ukończeniu 13 lat.',
    weight: 3,
    caseIds: ['A08', 'D03', 'E02'],
    action: 'Dla dzieci: dedykowane konta rodzinne (Google Family Link, TikTok Family Pairing, iOS Screen Time). Rozmowy wprost o tym, że „darmowe" aplikacje kosztują danych. YouTube Kids zamiast YouTube.',
  },
];

export function scoreProfile(answers: Record<string, 'tak' | 'nie' | 'nie-wiem'>): {
  score: number;
  maxScore: number;
  level: 'niski' | 'średni' | 'wysoki' | 'bardzo wysoki';
  description: string;
} {
  let score = 0;
  const maxScore = QUESTIONS.reduce((s, q) => s + q.weight, 0);
  QUESTIONS.forEach((q) => {
    if (answers[q.id] === 'tak') score += q.weight;
    if (answers[q.id] === 'nie-wiem') score += q.weight * 0.5;
  });

  const ratio = score / maxScore;
  if (ratio < 0.25)
    return {
      score,
      maxScore,
      level: 'niski',
      description:
        'Poziom ekspozycji jest niski — korzystasz z niewielu usług Big Techu albo świadomie rezygnujesz z ich wybranych funkcji. Dalsze działania: edukacja innych, wsparcie organizacji praw cyfrowych.',
    };
  if (ratio < 0.5)
    return {
      score,
      maxScore,
      level: 'średni',
      description:
        'Poziom typowy dla świadomego użytkownika. Kilka podstawowych kroków (menedżer haseł, wyłączenie lokalizacji, Signal dla ważnych rozmów) obniży go istotnie.',
    };
  if (ratio < 0.75)
    return {
      score,
      maxScore,
      level: 'wysoki',
      description:
        'Ekspozycja wyższa niż średnia — korzystasz intensywnie z kilku ekosystemów naraz. Konkretne działania (poniżej) mogą obniżyć ją o 40–60% bez rezygnacji z usług.',
    };
  return {
    score,
    maxScore,
    level: 'bardzo wysoki',
    description:
      'Twój cyfrowy ślad jest rozległy — kilkanaście firm dzieli między sobą pełny profil twoich zachowań. To nie jest „wstyd", tylko konsekwencja architektury, w której jesteśmy. Lista działań poniżej obniża ekspozycję skokowo.',
  };
}
