/**
 * Decision game — "What would you do?"
 *
 * Each scenario is a real situation drawn from the Matryca database:
 * you face a decision that someone profiled here actually faced
 * (a whistleblower, a regulator, an employee). You pick an answer,
 * see the consequences, and learn how it actually played out in reality.
 */

export interface ScenarioChoice {
  id: string;
  label: string;
  consequence: string;
  score: number; // -3 to +3, where +3 = consistently protects privacy and the public interest
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
    kicker: 'Scenario 1 of 5',
    title: 'Take the documents, or leave quietly?',
    role: 'you are a product manager on the Civic Integrity team at Meta',
    year: 'May 2021',
    context:
      'You have worked at Meta for two years. You have access to internal Facebook documents: research showing that Instagram worsens teenage girls\' self-image, that the algorithm amplifies polarization, that in Myanmar the platform enables ethnic violence. The internal reports are clear. The company does not publish them, and its public statements contradict what you read in those documents. Your Civic Integrity team has just been dissolved. You have a decision to make.',
    question: 'What do you do?',
    choices: [
      {
        id: 'cicho',
        label: 'You leave quietly. You sign an NDA, take the severance, and find a job at another company.',
        consequence:
          'The internal documents never see daylight. Your reputation stays intact. But Meta continues on the same course, because the outside world does not know what you know.',
        score: -2,
      },
      {
        id: 'przeciek',
        label:
          'You copy the documents to a personal drive. You hand them to a Wall Street Journal reporter. You remain anonymous.',
        consequence:
          'The WSJ publishes a series. Meta hunts for the source. Your identity eventually comes out, and you face lawsuits and legal threats without the backing of any organization.',
        score: 1,
      },
      {
        id: 'jawnie',
        label:
          'You take the documents with you. You hire whistleblower lawyers. You go public. You testify before Congress.',
        consequence:
          'You have legal and media infrastructure behind you. The documents reach 17 newsrooms at once. Congress listens. The DSA is accelerated. But you lose your career in tech — you end up at an NGO or running your own foundation.',
        score: 3,
      },
      {
        id: 'wewnetrznie',
        label:
          'You write a series of internal memos to leadership recommending changes. You believe the company will reform from within.',
        consequence:
          'Your memos end up in a leadership drawer. Within months you are pushed out of the team and realize that meaningful change requires outside pressure. By then you have lost the window to publish.',
        score: 0,
      },
    ],
    reality:
      'Frances Haugen chose the third option. On October 5, 2021, she testified before the U.S. Congress. The "Facebook Files" were published simultaneously across 17 newsrooms. Her appearances accelerated work on the Digital Services Act in the EU. She now leads Beyond the Screen, an organization focused on platform regulation.',
    caseIds: ['A05'],
  },
  {
    slug: 'schrems-pytanie',
    kicker: 'Scenario 2 of 5',
    title: 'File the complaint, or drop it?',
    role: 'you are a law student in Vienna',
    year: '2011',
    context:
      'For a privacy law seminar paper you write to Facebook Ireland — where the company has its European headquarters — asking for your data under Austrian law. Facebook sends you a file. You open it: 1,222 pages. It contains your private messages, location history, a list of likes, friends who rejected your invitations, your searches. You did not even know many of these things were being collected. Europe does not yet have the GDPR. You have a decision to make.',
    question: 'What do you do?',
    choices: [
      {
        id: 'zamykam',
        label:
          'You write the seminar paper based on the material. You hand it in. You move on with your studies. The data was interesting, but you have no grievance — you installed Facebook yourself.',
        consequence:
          'Your paper gets an A. Facebook carries on with the same practice toward 500 million European users. Nothing changes in the law.',
        score: -1,
      },
      {
        id: 'skarga',
        label:
          'You file a complaint with the Irish Data Protection Commissioner. You wait patiently for a response.',
        consequence:
          'Two years later the reply arrives: "Facebook is operating lawfully." Complaint dismissed. You realize this is only the beginning, not the end.',
        score: 1,
      },
      {
        id: 'postepowanie',
        label:
          'You file with the Irish DPC + appeal to an Austrian court + submit a preliminary reference to the CJEU. For years.',
        consequence:
          'In 2015 the CJEU strikes down Safe Harbor in Schrems I. In 2020, Privacy Shield falls in Schrems II. You rewrite the legal architecture of EU–U.S. data transfers. One name = an entire body of practice.',
        score: 3,
      },
      {
        id: 'fundacja',
        label:
          'Instead of going it alone: you found an NGO, noyb, that will bring strategic litigation on behalf of European citizens.',
        consequence:
          'noyb files its first complaint on the day the GDPR takes effect (May 25, 2018). Five years later: fines of €390 million (2023) and €1.2 billion (2023). The strategy scales — but it requires a decade of patience.',
        score: 3,
      },
    ],
    reality:
      'Max Schrems chose options three and four at the same time: he litigated to the CJEU (Schrems I and II) and in 2017 founded noyb. Together those two tracks rewrote the legal architecture of data protection in Europe. A one-man initiative by an Austrian student generated most of the European rulings that became foundational for the GDPR.',
    caseIds: ['A07', 'A09'],
  },
  {
    slug: 'caspar-audyt',
    kicker: 'Scenario 3 of 5',
    title: 'Google will not answer. What now?',
    role: 'you are the Hamburg data protection commissioner',
    year: 'April 2010',
    context:
      'As part of an audit of Google Street View, you demand that the company disclose exactly what data the camera cars driving through German streets are collecting. Google\'s answer: "Only street photos and Wi-Fi router SSIDs for location services." Your engineers tell you that cannot be true — the Wi-Fi traffic would have to be captured along with data packets. Google denies it a second time. Your options:',
    question: 'What do you do?',
    choices: [
      {
        id: 'akceptuje',
        label:
          'You accept Google\'s statement. You are a small German regulator and you do not want to tangle with a global corporation.',
        consequence:
          'The practice continues. For several more years Google\'s cars collect fragments of emails, passwords, and banking logins from open Wi-Fi networks in 30+ countries. The scandal breaks years later, without you.',
        score: -2,
      },
      {
        id: 'list',
        label:
          'You send Google a letter demanding detailed technical documentation within 30 days. You expect cooperation.',
        consequence:
          'Google responds after 30 days with documentation that is vague. It takes several more rounds of correspondence. After six months you force a partial disclosure — but the scale remains unknown.',
        score: 1,
      },
      {
        id: 'audyt',
        label:
          'You summon Google to Hamburg for a formal audit of the equipment. You ask for access to a single Street View car and its data logs.',
        consequence:
          'Google refuses. You escalate to the Federal Data Protection Commissioner and the Bundesnetzagentur. Pressure from multiple agencies finally lands: on May 14, 2010, Google publicly admits to collecting payload data. The case becomes a global precedent.',
        score: 3,
      },
      {
        id: 'przeciek',
        label:
          'You leak your findings to the German press before Google has a chance to respond. You bring media pressure to bear.',
        consequence:
          'The press picks it up, but Google has not publicly confirmed anything yet. Your office is accused of acting "before due process." You lose your reputation and possibly your position — even though you were right.',
        score: -1,
      },
    ],
    reality:
      'Johannes Caspar chose the third path. Support from the Bundesnetzagentur and the federal regulator made disclosure unavoidable. On May 14, 2010, Google publicly admitted to collecting traffic fragments from open Wi-Fi networks in more than 30 countries. The Wi-Spy case became the first global precedent in which a European national regulator forced a tech giant to disclose a practice it had hidden for three years.',
    caseIds: ['B01'],
  },
  {
    slug: 'wylie-ujawnienie',
    kicker: 'Scenario 4 of 5',
    title: 'What do you do with knowledge that could swing an election?',
    role: 'you are the former director of research at Cambridge Analytica',
    year: 'early 2018',
    context:
      'You left Cambridge Analytica in 2014. You know the firm used the data of 87 million Facebook users for psychographic profiling — data harvested through Dr. Aleksandr Kogan\'s app "thisisyourdigitallife." You know that data was used in the Trump campaign and in the Brexit referendum. You have the documents. In early 2018 no one has published this publicly. Carole Cadwalladr from The Observer has reached out.',
    question: 'What do you do?',
    choices: [
      {
        id: 'milcze',
        label:
          'You refuse to speak with Cadwalladr. You fear lawsuits and retaliation. You signed an NDA that formally binds you.',
        consequence:
          'The story may be exposed years from now, by someone else. Cambridge Analytica continues operating through further elections. Your role stays hidden.',
        score: -2,
      },
      {
        id: 'anonimowo',
        label:
          'You hand Cadwalladr the documents but stay anonymous. You want the press to do the rest.',
        consequence:
          'The story runs, but without a face. Cambridge Analytica denies everything. Without the possibility of calling you as a witness, the reporting never reaches full credibility.',
        score: 1,
      },
      {
        id: 'ujawniam',
        label:
          'You come forward publicly as a whistleblower. You share the documents and testify in the United Kingdom and before the Mueller inquiry. You accept the lawsuits.',
        consequence:
          'March 2018: The Observer and The New York Times publish a series. Cambridge Analytica collapses within months. The FTC fines Facebook $5 billion (2019). You write the book "Mindf*ck." You become one of the most recognizable whistleblowers in tech.',
        score: 3,
      },
      {
        id: 'parlament',
        label:
          'You write to the UK Parliament demanding an inquiry, without going public. You wait for the authorities to act.',
        consequence:
          'Parliament opens internal consultations, but without a public disclosure the story does not reach the media. The inquiry bogs down at a procedural level. Cambridge Analytica keeps operating.',
        score: 0,
      },
    ],
    reality:
      'Christopher Wylie chose the third option. In March 2018 The Observer and The New York Times published the reporting, with him identified by name. Facebook paid a $5 billion FTC fine. Cambridge Analytica folded. Wylie released the book "Mindf*ck" (2019), in which he described the psychological-operations mechanism as "cyber-Cambridge" — a new form of information warfare.',
    caseIds: ['A02'],
  },
  {
    slug: 'inzynier-dragonfly',
    kicker: 'Scenario 5 of 5',
    title: 'A censored search engine for China. Your project.',
    role: 'you are an engineer at Google Search',
    year: 'spring 2018',
    context:
      'You are assigned to a project with the code name "Dragonfly." It turns out to be a censored version of Google Search for China: a filter that blocks Tiananmen, the Dalai Lama, Hong Kong, democracy. On top of that: every query is tied to the user\'s phone number, making it possible to identify people searching for "forbidden" terms. Leadership\'s rationale: "better to be in China with some restrictions than not at all." You know this contradicts Google\'s earlier commitments to leave China in 2010 after the Aurora attack.',
    question: 'What do you do?',
    choices: [
      {
        id: 'wykonuje',
        label:
          'You do your job. The business call is not yours — your task is implementation. Leadership has made a strategic decision.',
        consequence:
          'The project moves forward. A billion Chinese citizens get a censored Google Search tied to phone number identification. Ryan Gallagher breaks the story in The Intercept in August 2018, but your role stays anonymous.',
        score: -2,
      },
      {
        id: 'odchodze',
        label:
          'You quietly hand in your resignation. You do not want to make a scene, but you do not want to work on this project either.',
        consequence:
          'Your departure changes nothing about the project. Google replaces you with another engineer. The project keeps developing in the shadows.',
        score: 0,
      },
      {
        id: 'list-otwarty',
        label:
          'You sign an open letter from Google employees criticizing the project. The letter is published on a blog, available to the press.',
        consequence:
          'The open letter gathers 1,400 signatures from Google employees. The media cite it. Internal and external pressure forces leadership to wind down the project in December 2018. The project is "effectively ended" — never officially confirmed or denied.',
        score: 3,
      },
      {
        id: 'przeciek',
        label:
          'You reach out anonymously to Ryan Gallagher at The Intercept. You hand over the technical documentation for Dragonfly.',
        consequence:
          'The Intercept publishes a detailed exposé in August 2018. The public learns first — before Google employees do. That helps outside pressure but bypasses the internal mechanism.',
        score: 2,
      },
    ],
    reality:
      'Google employees chose the third option (in parallel with leaks to The Intercept, which fed their knowledge). In August 2018 the open letter was signed by 1,400 people. Leadership was forced to shut the project down. December 2018: Dragonfly "effectively ended." It changed worker culture in Silicon Valley — it showed that employees can be whistleblowers as a collective, not just as individuals.',
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
      level: 'passivity',
      description:
        'Your decisions follow the path of least resistance. In the real world, these choices amounted to leaving things as they were. The whistleblowers who took on more risk generated most of the change documented in this database.',
    };
  if (ratio < 0.5)
    return {
      level: 'caution',
      description:
        'Your decisions are measured, but they leave parts of reality untouched. In the history of these cases, caution often meant change arrived later and cost more.',
    };
  if (ratio < 0.8)
    return {
      level: 'engagement',
      description:
        'Your decisions lead to real change. Every option you chose has a counterpart in reality — the person who made that choice has a name in this database.',
    };
  return {
    level: 'persistence',
    description:
      'Your decisions are consistently the hardest ones — and the most effective. If you had been in these situations in real life, you would have set the precedents others would have to follow.',
  };
}
