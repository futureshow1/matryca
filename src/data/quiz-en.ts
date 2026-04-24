/**
 * Curated diagnostic quiz — 15 questions about digital habits,
 * each linked to specific cases in the database.
 */

export interface QuizQuestion {
  id: string;
  question: string;
  /** What a "yes" answer means — what is known about you if you do X. */
  revelation: string;
  /** Weight in the total score. */
  weight: 1 | 2 | 3;
  /** IDs of cases in the database that describe this practice. */
  caseIds: string[];
  /** A concrete action you can take. */
  action: string;
}

export const QUESTIONS: QuizQuestion[] = [
  {
    id: 'facebook',
    question: 'Do you have a Facebook or Instagram account?',
    revelation:
      'Meta maintains an advertising profile containing hundreds of labels about you: predicted income, marital status, political views, interests, a list of places you visit. The profile is updated continuously based on the content you scroll through — even content you did not click on.',
    weight: 3,
    caseIds: ['A02', 'A05', 'A06', 'A07'],
    action: 'Open ad settings (Settings → Ads) and turn off ad personalization. Remove interests you did not add yourself. Check which companies "shared your data with Meta" (usually 200–1,000 companies).',
  },
  {
    id: 'messenger-whatsapp',
    question: 'Do you use Messenger or WhatsApp?',
    revelation:
      'The metadata of all your conversations (who, when, for how long, from what location) is available to Meta. WhatsApp has end-to-end encryption for message content, but not for metadata. In 2021, Meta was fined 390 million euros in Ireland for lack of transparency about this policy.',
    weight: 2,
    caseIds: ['A07', 'A09'],
    action: 'Consider Signal for conversations meant to be private. For everyday correspondence: assume metadata is known (who talks to whom, when).',
  },
  {
    id: 'gmail',
    question: 'Do you have a Gmail account?',
    revelation:
      'Google scans emails to build an interest profile (despite official statements that they are not used for ads — the data is used to "improve the product"). For Android and Chrome, the same account is the central identifier — everything you do in the ecosystem is stitched together.',
    weight: 2,
    caseIds: ['B03', 'B04'],
    action: 'Turn off "Web & App Activity" and "Location History" at myaccount.google.com/data-and-privacy. Consider ProtonMail or Fastmail as an alternative for critical correspondence.',
  },
  {
    id: 'android',
    question: 'Do you use Android?',
    revelation:
      'An Android phone sends an average of 340 telemetry transmissions per day to Google (per research by Prof. Douglas Schmidt, Vanderbilt). This includes location even after turning off "Location History" — via a second setting, "Web & App Activity," revealed by the AP in 2018.',
    weight: 3,
    caseIds: ['B04', 'B01', 'B03'],
    action: 'Turn off both: "Location History" and "Web & App Activity." Consider restricting app permissions (especially location: "only while using"). For advanced users: CalyxOS / GrapheneOS.',
  },
  {
    id: 'alexa-smart-speaker',
    question: 'Do you have an Alexa, Echo, Google Home, or HomePod in your home?',
    revelation:
      'Voice assistants are always on — the microphone is constantly listening for the wake word. Between 2014 and 2019, Amazon sent Alexa recordings to contract workers around the world, including recordings of conversations involving children, without parental consent. The case ended with a $25 million fine for violating COPPA.',
    weight: 2,
    caseIds: ['D02', 'D03', 'C02'],
    action: 'Turn off "continuous improvement" / "help improve Amazon services" in settings. Manually delete recording history. Consider turning off the device when you are having sensitive conversations.',
  },
  {
    id: 'tiktok',
    question: 'Do you or your child use TikTok?',
    revelation:
      'TikTok (ByteDance) has one of the most precise recommendation algorithms and has access to location, contacts, and device storage. Data is also processed in China — it was revealed in 2022 that ByteDance attempted to track American journalists. GDPR fines: 345 million euros (2023, children\'s data) + 530 million euros (2025, transfers to China).',
    weight: 3,
    caseIds: ['E01', 'E02', 'E03'],
    action: 'For children: consider Family Pairing or limiting app time. For yourself: turn off the "personalized feed," revoke permissions (location, contacts), consider using the browser version instead of the app.',
  },
  {
    id: 'cookies',
    question: 'Do you click "Accept all" on cookie banners just to close them faster?',
    revelation:
      'Every "accept all" is consent for 300–1,500 companies in the advertising industry to track you across many websites at once. Interface designers make the "reject" button small and hidden — a classic dark pattern. In 2022, CNIL imposed fines of 150 million euros on Google and 60 million euros on Facebook for this practice.',
    weight: 2,
    caseIds: ['A10', 'B04'],
    action: 'Install the "Consent-O-Matic" or "I don\'t care about cookies" extension — it automatically rejects unnecessary cookies on most sites. Use Firefox with "Total Cookie Protection" enabled.',
  },
  {
    id: 'zoom',
    question: 'Do you use Zoom for meetings that are important to you?',
    revelation:
      'For years, Zoom claimed to have "end-to-end encryption" — in 2020, the FTC proved it did not. Some traffic was routed through servers in China (including for customers outside China). Zoom paid $85 million in a settlement.',
    weight: 1,
    caseIds: ['E06'],
    action: 'For critical conversations: Signal video calls (true E2EE) or Jitsi Meet. For business use: paid Zoom with E2EE enabled in meeting settings.',
  },
  {
    id: 'amazon',
    question: 'Do you regularly order from Amazon?',
    revelation:
      'Amazon has the richest purchasing profile of any e-commerce platform. Order history, searches, time spent on products, reviews. Add to that Prime Video, Alexa, Ring (cameras) — everything under one account, everything linked together.',
    weight: 2,
    caseIds: ['D01', 'D02', 'D03'],
    action: 'Consider local alternatives for purchases that do not have to be made exclusively on Amazon. If you stay on the platform: review your order history every quarter and delete unnecessary entries.',
  },
  {
    id: 'ring-camera',
    question: 'Do you have a Ring camera or another smart doorbell in your home?',
    revelation:
      'Amazon Ring shared recordings with US police without the consent of device owners (more than 1,800 cases in 2022). The architecture of the service is the same everywhere. The FTC fined Amazon $5.8 million for failing to secure biometric data and for invasive advertising.',
    weight: 2,
    caseIds: ['D01'],
    action: 'Consider alternatives with local storage instead of cloud (e.g., local NVR). If you keep Ring: disable the "Neighbors" social app, block sharing recordings with police, enable end-to-end encryption in settings.',
  },
  {
    id: 'icloud',
    question: 'Do you have an iPhone with iCloud Backup enabled?',
    revelation:
      'iCloud Backup is not end-to-end encrypted (unless you enable Advanced Data Protection, which is off by default). For years, Apple planned a CSAM feature — scanning your photos locally for child abuse content (2021). The plan was withdrawn after global criticism. Previously, Apple cooperated with law enforcement on unlocking iPhones.',
    weight: 2,
    caseIds: ['C03', 'C02'],
    action: 'Enable Advanced Data Protection (Settings → Apple ID → iCloud) — it encrypts your backup. Also consider a separate local backup via Finder/iTunes for sensitive photos.',
  },
  {
    id: 'linkedin',
    question: 'Do you have a LinkedIn account?',
    revelation:
      'LinkedIn (owned by Microsoft) has, since September 2024, by default used all your posts, articles, and profile information to train Microsoft\'s AI models. An opt-out exists, but it is buried three menus deep. The Irish DPC fine: 310 million euros (2024) for GDPR violations.',
    weight: 2,
    caseIds: ['C05'],
    action: 'Settings → Data Privacy → "Data for AI improvement" → turn off. Also check "Third-party app access" — many external apps have access to your profile by default.',
  },
  {
    id: 'login-with',
    question: 'Do you use "Log in with Facebook/Google" on external websites?',
    revelation:
      'Every such login sends the provider (Meta or Google) information that you visited a specific site — building a cross-site profile of your behavior. In addition: if you lose your Meta account (suspension, ban), you lose access to all linked accounts.',
    weight: 1,
    caseIds: ['A02', 'B02'],
    action: 'Use a separate password for each service plus a password manager (Bitwarden, 1Password). Refrain from new "Log in with..." — create accounts from scratch.',
  },
  {
    id: 'public-photos',
    question: 'Do you have publicly accessible photos of your face (Facebook, Instagram, LinkedIn, a blog)?',
    revelation:
      'Clearview AI scraped 30+ billion face photos from public sources on the internet — without your consent. The database is sold to police (400+ US agencies), intelligence services, and through subscriptions: to nearly anyone. PimEyes (a similar model) operates commercially. Since 2024, the EU has banned this type of activity.',
    weight: 2,
    caseIds: ['E05'],
    action: 'Set profiles to private (Instagram private mode, restrictions on FB). For public photos: assume your face is already in several facial recognition databases. In the EU, you can demand deletion under GDPR (Clearview must delete data of EU citizens).',
  },
  {
    id: 'child-account',
    question: 'Does your child (under 13) use a service that requires an age of 13+?',
    revelation:
      'More than 70% of children bypass the minimum registration age — often with their parents\' help. Platforms know children are there but do not effectively verify age. TikTok, Meta, YouTube — all have been fined for children\'s data (TikTok: 345 million euros in 2023). Consequences: ads targeted at children, recommendations for harmful content, building a profile that will be used after they turn 13.',
    weight: 3,
    caseIds: ['A08', 'D03', 'E02'],
    action: 'For children: dedicated family accounts (Google Family Link, TikTok Family Pairing, iOS Screen Time). Direct conversations about how "free" apps cost data. YouTube Kids instead of YouTube.',
  },
];

export function scoreProfile(answers: Record<string, 'yes' | 'no' | 'dont-know'>): {
  score: number;
  maxScore: number;
  level: 'low' | 'medium' | 'high' | 'very high';
  description: string;
} {
  let score = 0;
  const maxScore = QUESTIONS.reduce((s, q) => s + q.weight, 0);
  QUESTIONS.forEach((q) => {
    if (answers[q.id] === 'yes') score += q.weight;
    if (answers[q.id] === 'dont-know') score += q.weight * 0.5;
  });

  const ratio = score / maxScore;
  if (ratio < 0.25)
    return {
      score,
      maxScore,
      level: 'low',
      description:
        'Your exposure level is low — you use few Big Tech services, or you consciously opt out of selected features. Next steps: educate others, support digital rights organizations.',
    };
  if (ratio < 0.5)
    return {
      score,
      maxScore,
      level: 'medium',
      description:
        'A level typical for an aware user. A few basic steps (password manager, disabling location, Signal for important conversations) will lower it significantly.',
    };
  if (ratio < 0.75)
    return {
      score,
      maxScore,
      level: 'high',
      description:
        'Higher than average exposure — you use several ecosystems intensively at once. The concrete actions below can reduce it by 40–60% without giving up services.',
    };
  return {
    score,
    maxScore,
    level: 'very high',
    description:
      'Your digital footprint is extensive — a dozen or so companies share a full profile of your behavior between them. This is not "shame," but a consequence of the architecture we live in. The list of actions below reduces exposure sharply.',
  };
}
