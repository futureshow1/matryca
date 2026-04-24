/**
 * Curated database of whistleblowers and journalists.
 *
 * `caseIds` point to the IDs of cards in the database in which the figure played a key role
 * (disclosure, investigation, lawsuit). We do not duplicate every appearance of names
 * from the frontmatters — here we only include the ~12 figures that Matryca treats as nodal.
 */

export type PersonRole = 'sygnalista' | 'dziennikarz' | 'aktywista' | 'badacz';

export interface Person {
  slug: string;
  name: string;
  role: PersonRole;
  /** Role at the moment of disclosure or while working on the subject */
  affiliation?: string;
  years: string; // e.g. "2018–present"
  portrait_initials: string; // e.g. "FH" for Frances Haugen
  bio_short: string; // 1 sentence, ~100 characters, for the gallery card
  bio_long: string; // 2–4 paragraphs, for the profile page
  caseIds: string[];
}

export const PEOPLE: Person[] = [
  {
    slug: 'frances-haugen',
    name: 'Frances Haugen',
    role: 'sygnalista',
    affiliation: 'Meta / former product manager',
    years: '2021–present',
    portrait_initials: 'FH',
    bio_short:
      'Disclosed the Facebook Files — Meta\'s internal research on Instagram\'s harm to teenage girls.',
    bio_long: `In May 2021, Frances Haugen, then a product manager on Meta's Civic Integrity team,
carried tens of thousands of internal documents out of the company. She handed them to the Wall Street Journal,
which in its "Facebook Files" series (September–October 2021) published evidence that Meta knew
how its algorithms amplified polarization, harmed teenage girls' self-image, and served as infrastructure
for human trafficking and ethnic violence.

Haugen testified before the U.S. Congress on October 5, 2021, and before the U.K. Parliament
in November. Her testimony accelerated work on the Digital Services Act (DSA) in the EU.
She is currently the director of Beyond the Screen, an organization focused on shaping platform
regulation.

She was the second Meta whistleblower after Sophie Zhang, but the first whose documents reached
so many independent press outlets in parallel (17 newsrooms in the "Facebook Files Consortium").`,
    caseIds: ['A05', 'A08', 'B06'],
  },
  {
    slug: 'christopher-wylie',
    name: 'Christopher Wylie',
    role: 'sygnalista',
    affiliation: 'Cambridge Analytica / former Director of Research',
    years: '2018',
    portrait_initials: 'CW',
    bio_short:
      'Exposed the Cambridge Analytica operation — profiling of 87 million Facebook users for the Trump campaign.',
    bio_long: `A Canadian, born in 1989, who worked at Cambridge Analytica from 2013 to 2014. In March 2018,
in the pages of The Observer and The New York Times, Wylie described how the firm — by way of
the "thisisyourdigitallife" app built by Dr. Aleksandr Kogan — obtained the data of 87
million Facebook users. That data was used for psychographic profiling of
voters in Donald Trump's 2016 campaign and in the Brexit referendum.

He testified before the U.K. Parliament and before Special Counsel Robert Mueller's investigation.
The case led to a $5 billion FTC penalty (2019), Cambridge Analytica's bankruptcy (2018),
and the first major blow to Meta's public image. In 2019, Wylie published "Mindf*ck,"
in which he describes the mechanism of psychological operations as "cyber-Cambridge" — a new form of
information warfare waged against a country's own citizens.

He remains one of the most recognizable whistleblowers in the tech industry.`,
    caseIds: ['A02'],
  },
  {
    slug: 'carole-cadwalladr',
    name: 'Carole Cadwalladr',
    role: 'dziennikarz',
    affiliation: 'The Observer / The Guardian',
    years: '2017–present',
    portrait_initials: 'CC',
    bio_short:
      'Investigative journalist who exposed Cambridge Analytica — after three years of digging.',
    bio_long: `A Welsh journalist and author of The Observer's "The Great British Brexit Robbery" series
(2017) and — together with whistleblower Christopher Wylie — the lead article exposing Cambridge
Analytica (March 2018). Cadwalladr worked on the story for three years, largely on her own —
The Observer's newsroom supported her, but the subject was seen as niche until Wylie came forward.

In 2019 and 2022, she was sued for defamation by Arron Banks, one of the largest donors to the
Leave.EU campaign. She lost both cases at first instance, but won on appeal —
setting an important precedent for the protection of investigative journalism in the U.K.

Her TED talk "Facebook's role in Brexit and the threat to democracy" (April 2019)
has been viewed more than 10 million times. She was a Pulitzer finalist (2019). She is one of the key figures
who moved the subject of platform manipulation from an academic niche into mass awareness.`,
    caseIds: ['A02'],
  },
  {
    slug: 'sophie-zhang',
    name: 'Sophie Zhang',
    role: 'sygnalista',
    affiliation: 'Meta / former data scientist',
    years: '2020',
    portrait_initials: 'SZ',
    bio_short:
      'Documented how Meta ignored election manipulation in Honduras, Azerbaijan, and India.',
    bio_long: `A Chinese-American data scientist, employed at Meta (then Facebook) from 2018 to 2020.
Before leaving the company, she wrote an internal memo — 6,600 words in which she documented how Meta
knew about coordinated election manipulation by authoritarian regimes in Honduras, Azerbaijan,
Bolivia, Ukraine, and India, and yet took no action because these were not countries
of high advertising value.

The memo reached BuzzFeed in September 2020. Zhang testified before the U.K. Parliament in October
2021 — a week after Haugen. Unlike Haugen, she had no lawyers or media
infrastructure behind her; she testified on her own, as the consequence of her own decision.

She currently writes and speaks publicly. Her case showed how unequal the conditions are under which
whistleblowers operate — Haugen had organized support; Zhang acted alone.`,
    caseIds: ['A05'],
  },
  {
    slug: 'kevin-beaumont',
    name: 'Kevin Beaumont',
    role: 'badacz',
    affiliation: 'Cybersecurity researcher, DoublePulsar',
    years: '2024',
    portrait_initials: 'KB',
    bio_short:
      'First to diagnose that Microsoft Recall was logging every keystroke in unencrypted form.',
    bio_long: `A British cybersecurity specialist who runs the DoublePulsar blog. When Microsoft
announced the Windows Recall feature in May 2024, Beaumont was among the first to obtain
a test build and analyze its architecture. In a series of posts in June 2024, he showed
that Recall stored every screenshot and text sample in an unencrypted SQLite database —
accessible to any application running under the user's account.

Beaumont called the feature "a potential security disaster." His analyses, together with Alexander
Hagenah's TotalRecall tool, forced Microsoft to delay the launch (June 13, 2024) and to redesign
Recall: the feature became opt-in (the user has to deliberately turn it on) and encrypted via VBS+TPM.

He is an example of an external whistleblower — not a company employee, but an independent researcher whose
voice was strong enough to affect Microsoft's product strategy.`,
    caseIds: ['C04'],
  },
  {
    slug: 'max-schrems',
    name: 'Max Schrems',
    role: 'aktywista',
    affiliation: 'noyb — European Center for Digital Rights',
    years: '2011–present',
    portrait_initials: 'MS',
    bio_short:
      'Austrian lawyer who dismantled two EU–U.S. data transfer frameworks: Safe Harbor and Privacy Shield.',
    bio_long: `An Austrian lawyer, born in 1987, founder of noyb (2017). His two cases before the Court of Justice
of the EU — Schrems I (2015, striking down Safe Harbor) and Schrems II (2020, striking down the EU–U.S. Privacy Shield) —
are foundations of the current architecture of personal data transfers between the EU and the U.S.

Schrems began his activism in 2011 as a student at an Austrian university, sending Facebook Ireland
a request for access to his data. He received 1,222 pages — proof of a mass collection of which he had
no idea. From that moment he built a network of strategic litigation in which a single name
(his) generated most of the European rulings crucial for the GDPR.

Noyb, the organization he founded, has filed dozens of complaints — including the first one on the day the GDPR
took effect (May 25, 2018) against Meta, Google, and WhatsApp over "forced consent." Those complaints led
to fines of 390 million EUR (2023) and 1.2 billion EUR (2023).

He is not a whistleblower in the literal sense — but functionally he plays the same role, exposing the
legal mechanism from within. Without Schrems, Europe's GDPR would have a fraction of its enforcement power.`,
    caseIds: ['A07', 'A09', 'A01'],
  },
  {
    slug: 'kashmir-hill',
    name: 'Kashmir Hill',
    role: 'dziennikarz',
    affiliation: 'The New York Times',
    years: '2020–present',
    portrait_initials: 'KH',
    bio_short:
      'NYT reporter who exposed Clearview AI — a database of 30 billion face photos.',
    bio_long: `An American journalist, currently at The New York Times. In January 2020 she published "The Secret Company
That Might End Privacy as We Know It" — the first public exposure of Clearview AI, a company that
had built a database of 3 billion face photos (later: 30 billion) scraped from Facebook, LinkedIn,
Instagram, and other platforms and sold to law-enforcement agencies.

Hill tracked the company for five months, reached its CEO Hoan Ton-That, and documented that
more than 600 U.S. police agencies were using Clearview — even though Facebook, Twitter, and Google
officially forbid scraping data from their services. Her work triggered regulatory investigations
in the U.K., Canada, France, Italy, and Greece and penalties totaling
roughly 90 million EUR.

In 2023 she published "Your Face Belongs to Us," a book about Clearview and the entire face-recognition market.
She is one of the most consistent privacy reporters in the English-language press.`,
    caseIds: ['E05', 'A06', 'A08', 'D01'],
  },
  {
    slug: 'cristina-criddle',
    name: 'Cristina Criddle',
    role: 'dziennikarz',
    affiliation: 'Financial Times',
    years: '2021–present',
    portrait_initials: 'CC',
    bio_short:
      'FT reporter who documented TikTok\'s surveillance of journalists.',
    bio_long: `A British journalist at the Financial Times specializing in technology. In December 2022,
Criddle and her FT team revealed that ByteDance employees (the owner of TikTok) in China had
access to her location data — and used that access in an attempt to identify her source
inside TikTok.

ByteDance acknowledged the operation. Four people were fired. The case strengthened arguments
in the U.S. and the EU for hard regulation of TikTok, including PAFACA — the law forcing ByteDance to sell
TikTok or exit the U.S. market.

Criddle showed that journalists themselves become targets of platform operations that try to protect
their internal sources. Her case has been cited in more than a dozen congressional testimonies as
evidence of that practice.`,
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
      'AP reporter who proved Google tracks your location even when the setting is turned off.',
    bio_long: `An American Associated Press reporter. In August 2018 he published "Google tracks
your movements, like it or not" — built on an experiment in which he purchased 20 Android phones,
turned off the "Location History" option on each, and measured what Google was collecting anyway. The result: Google
was gathering location data through a second, hidden mechanism — "Web & App Activity" — on by
default and misleading in its description.

His tests were scientifically verified by Professor Jonathan Mayer of Princeton. The case led to settlements
with 40 U.S. state attorneys general (a combined $391.5 million in 2022), an $85 million
Arizona penalty (2022), and further penalties in Australia, South Korea, and the United States.

Nakashima is an example of a journalist who ran his own experiment instead of relying
on leaks — a method that gave the case a credibility that was hard to dispute.`,
    caseIds: ['B04'],
  },
  {
    slug: 'johannes-caspar',
    name: 'Johannes Caspar',
    role: 'aktywista',
    affiliation: 'Hamburg Commissioner for Data Protection (2009–2021)',
    years: '2010–2021',
    portrait_initials: 'JC',
    bio_short:
      'German regulator who forced Google to disclose the scale of Wi-Fi collection by Street View.',
    bio_long: `A German lawyer who served as Hamburg's data-protection commissioner from 2009 to 2021. In May 2010,
during an audit of Google's Street View project, his office forced the company to disclose that
Street View cars between 2007 and 2010 had collected not only street imagery, but also fragments
of network traffic from open Wi-Fi networks (passwords, e-mails, URLs of visited pages) in more than
30 countries.

Google initially denied it. Caspar did not let go — and in the end the company had to admit it
publicly. The Wi-Spy case became the first global precedent in which a European
national regulator forced a tech giant to disclose a practice that the company had
kept secret for three years.

Caspar is not a classic whistleblower, but his office played the role of an institutional whistleblower —
showing that even a small national regulator can be asymmetrically effective against
the largest platforms.`,
    caseIds: ['B01'],
  },
  {
    slug: 'ashkan-soltani',
    name: 'Ashkan Soltani',
    role: 'badacz',
    affiliation: 'California Privacy Protection Agency (present)',
    years: '2012–present',
    portrait_initials: 'AS',
    bio_short:
      'Independent privacy researcher, co-discoverer of Google\'s Safari bypass and many other violations.',
    bio_long: `An Iranian-American researcher. In 2012, together with Jonathan Mayer of Princeton, he proved
that Google was bypassing Safari's privacy settings and tracking Apple users despite their explicit
configuration. The case landed in The Wall Street Journal (February 2012) and led to an FTC penalty
of $22.5 million — the largest at that time.

Soltani later served as an adviser to President Obama in the White House (2014–2015) and then as chief
technologist at the FTC. Since 2022 he has headed the California Privacy Protection Agency — the state's new
oversight body responsible for enforcing the California Consumer Privacy Act.

He is one of the few privacy researchers who has moved from technical journalism into
rulemaking — which gives him the perspective of both discoverer and enforcer.`,
    caseIds: ['B02'],
  },
  {
    slug: 'emily-baker-white',
    name: 'Emily Baker-White',
    role: 'dziennikarz',
    affiliation: 'Forbes',
    years: '2022–present',
    portrait_initials: 'EB',
    bio_short:
      'Forbes reporter who revealed that TikTok used its app to track American journalists.',
    bio_long: `An American Forbes reporter specializing in ByteDance and TikTok. In December 2022 she
published a series of articles showing that ByteDance had attempted to use the
TikTok app to track Forbes reporters (including herself) and Financial Times reporters, in order to identify
their internal sources.

Earlier, at BuzzFeed, Baker-White disclosed 85 internal recordings of ByteDance employees,
from which it emerged that Chinese staff had access to the data of American users —
contrary to TikTok's official narrative that the data was siloed.

Her work was one of the main arguments in the drafting of the PAFACA statute and in "TikTok
v. Garland" before the U.S. Supreme Court in 2025. She is an example of a journalist who herself
became the target of a platform's counter-intelligence activity.`,
    caseIds: ['E01', 'E03'],
  },
];

// People grouped by role (for the gallery)
export function peopleByRole(role: PersonRole): Person[] {
  return PEOPLE.filter((p) => p.role === role);
}

// Map slug → Person for lookup
export const PEOPLE_BY_SLUG: Record<string, Person> = Object.fromEntries(
  PEOPLE.map((p) => [p.slug, p])
);

export const ROLE_LABELS: Record<PersonRole, string> = {
  sygnalista: 'sygnalista',
  dziennikarz: 'dziennikarka/dziennikarz',
  aktywista: 'aktywistka/aktywista',
  badacz: 'badaczka/badacz',
};

// English-facing labels for roles — use when rendering in the English locale.
export const ROLE_LABELS_EN: Record<PersonRole, string> = {
  sygnalista: 'whistleblower',
  dziennikarz: 'journalist',
  aktywista: 'activist',
  badacz: 'researcher',
};
