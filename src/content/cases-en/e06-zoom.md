---
id: E06
slug: e06-zoom
group: E
group_label: TikTok, X, Clearview, Zoom
title: Zoom
year_revealed: 2020
last_updated: '2026-04-18'
companies:
- Zoom Video Communications
status: active_investigation
jurisdictions:
- US
- global
legal_basis:
- FTC Act § 5
- NY Executive Law § 63
- state consumer laws
fines:
- amount: 85000000
  currency: USD
  authority: Class action (shareholder)
  date: '2021'
  category: class_action_settlement
  status: paid
whistleblowers:
- snowden
journalists:
- Micah Lee
- Yael Grauer
related_cases:
- E05
- B02
- D04
- B05
- B04
tags:
- dark-patterns
- geopolityka
categories:
- privacy
geo_coords: []
priority: STANDARD
card_complete: true
word_count: 3937
explainer:
  src: /animations/e06-zoom.html
  duration: '60s'
  title: Zoom — the "end-to-end encryption" that wasn't
subtitle: False "end-to-end encryption" and servers in China
years_active:
- 2016
- 2020
---

# E06 — Zoom: False "end-to-end encryption" and servers in China

> **Category:** Deception / false security claims / China / zoom-bombing / pandemic
> **Company/companies:** Zoom Video Communications, Inc.
> **Years:** 2016–2020 (false claims), March–April 2020 (pandemic), November 2020 (FTC settlement)
> **Status:** Closed with FTC settlement; no direct compensation; true E2E added in 2020
> **Card ID:** E06

---

## Metadata

| Field | Value |
|------|---------|
| Country/region | USA, global reach |
| Year revealed | March–April 2020 (COVID-19 pandemic exposed the issues) |
| Years of practice | 2016–2020 (false E2E claims); pandemic March–November 2020 (zoom-bombing, China) |
| Total penalty | **No direct payouts to users** (FTC settlement 11/9/2020); additionally, NY state settlement May 2020 |
| Currency | — |
| Legal basis | FTC Act § 5 (deceptive practices); NY Executive Law § 63(12); state consumer laws |
| Whistleblower/discoverer | **Micah Lee, Yael Grauer** (*The Intercept*, March 2020); **Citizen Lab** (Ron Deibert, Toronto) |
| Number of victims | **300 million daily users** at peak (April 2020) |
| Status (today) | True E2E available since October 2020 (opt-in); FTC 20-year monitoring continues until 2040 |

---

## TL;DR

**Zoom Video Communications** — founded in 2011 by **Eric Yuan** (former Cisco WebEx engineer). By **December 2019**, Zoom had **10 million daily users**. After the **outbreak of the COVID-19 pandemic** (March 2020), the scale exploded to **300 million daily users** (April 2020). All schools, universities, companies, governments, therapists, and lawyers migrated to Zoom overnight.

At the same moment, a series of **explosive revelations** showed that Zoom **had been systematically lying** about security:

**Lie 1: "End-to-End Encryption."** Since at least **2016**, Zoom had advertised on its website, in its app, in security guides, and in marketing communications **"end-to-end, AES 256-bit encryption"** for all meetings. **Truth**: this was **transport encryption** — data encrypted between the user and the Zoom server, but **Zoom retained the cryptographic keys** and could **read** the contents of meetings itself. **This was not E2E** in any technical sense.

**Lie 2: "256-bit encryption."** Citizen Lab (Toronto), in April 2020, discovered that Zoom was **actually** using **AES-128** in **ECB** mode — a **known weak mode** that leaves patterns in encrypted data. **The 256-bit claim was false.**

**Lie 3: "Secure cloud storage of recordings."** Zoom advertised that meeting recordings from paying customers were saved immediately to secure cloud. **Truth**: recordings were stored **unencrypted on Zoom servers for 60 days** before transfer to secure storage.

**Lie 4: "ZoomOpener on Mac" as a security feature.** Zoom installed a **hidden web server** on Macs — **ZoomOpener** — which **circumvented** Safari's security. Apple later had to release a **silent update** removing ZoomOpener from Macs.

**Lie 5 (not a lie, but a concealment): Servers in China.** Zoom had servers in **Beijing** for routing meetings. *Citizen Lab* discovered that even **meetings between American users** were routed through Chinese servers in some cases. The **Chinese government** could potentially require Zoom to hand over encryption keys.

**April 2020: the shocking Time Magazine revelation** — **Chinese operatives** were using Zoom to **spy** on foreign citizens and block political **discussions** (including Tiananmen conferences, the June 4 anniversary, disrupted by "Chinese operatives"). Zoom **shut down activist accounts** in the USA at China's request.

**Zoom-bombing**: hackers crashed public Zoom meetings, broke into school meetings, displayed porn content, and hurled racist slurs. A global problem, it **particularly** affected **elementary schools** and **Alcoholics Anonymous sessions**.

**May 2020**: **Letitia James, NY AG**, forced a settlement — Zoom committed to enhanced encryption and better moderation.

**November 9, 2020**: **FTC settlement**. Zoom committed to:
- **Comprehensive information security program**
- **20-year monitoring** by independent auditors
- **Ban on misrepresentations** regarding privacy and security
- **Ban on circumventing browser security**

**NO payouts to users** — criticism from Democratic Commissioners **Rohit Chopra** and **Rebecca Kelly Slaughter**: *"No redress for users. Zoom is not required to offer refunds, or even notice to its customers that material claims were false."*

**Act of redemption (2020–2021):** Zoom **bought Keybase** (May 2020) — a startup specializing in cryptography. **On October 26, 2020**, Zoom released **true E2E** as a **technical preview** (opt-in).

Case E06 is a **model of "the pandemic as a crisis stress test"** — Zoom survived, reformed, but **built its reputation** on **lies** that might never have come to light without the 300-million-user surge.

---

## Timeline

- **2011** — Eric Yuan founds Zoom Video Communications.
- **2013** — Product launch of Zoom.
- **2016** — Zoom begins publicly advertising **"end-to-end AES 256-bit encryption"** — **FALSE**.
- **April 9, 2019** — researcher **Jonathan Leitschuh** publishes: **ZoomOpener** (hidden web server on Mac) circumvents Safari security. Apple releases a silent update.
- **April 2019 Zoom IPO** — NASDAQ.
- **December 2019** — **10 million daily Zoom users**.
- **January–February 2020** — COVID-19 spreads.
- **March 2020** — global lockdowns. Zoom explodes: **200 million daily** by the end of March.
- **March 17, 2020** — zoom-bombing begins to be a mass problem (schools, churches, AA meetings).
- **March 30, 2020** — ***The Intercept*** (Micah Lee, Yael Grauer): **"Zoom Meetings Aren't End-to-End Encrypted, Despite Misleading Marketing"**
- **April 2, 2020** — **FBI issues a warning** about zoom-bombing.
- **April 3, 2020** — **Citizen Lab** (University of Toronto) report: **AES-128-ECB**, servers in China, keys generated in Beijing. *Time Magazine* and *Washington Post* publish.
- **April 2020** — **peak of 300 million daily users**.
- **April 2020** — **NYC Department of Education bans Zoom** for schools. Elon Musk bans it at SpaceX. Germany's federal MFA bans it.
- **April 9, 2020** — *Time*: **Chinese operatives** using Zoom to spy.
- **April 1, 2020** — Eric Yuan public apology: *"We recognize we have fallen short of the community's — and our own — privacy and security expectations."*
- **May 7, 2020** — Zoom **buys Keybase** (amount undisclosed) — to develop true E2E.
- **May 2020** — **NY Attorney General Letitia James** settlement: enhanced encryption protocols.
- **October 26, 2020** — Zoom releases **true E2E** as a **technical preview** (opt-in).
- **November 9, 2020** — **FTC settlement**: comprehensive security program, 20-year monitoring, **no payouts**.
- **December 2020** — dissent statements: **Rohit Chopra, Rebecca Kelly Slaughter** (FTC Democrats).
- **2021–2026** — Zoom continues, grows; E2E remains opt-in by default; transparency reports published.
- **April 2026** (currently) — Zoom under FTC monitoring until **2040**.

---

## Mechanism

### What Zoom advertised vs. what it actually did

**Zoom's marketing claims (2016–2020):**
> *"End-to-end AES 256-bit encryption for all meetings"*

**Technical reality:**

| Claim | Reality |
|-------|---------------|
| **End-to-end encryption** | **Transport encryption** — Zoom held the keys |
| **AES 256-bit** | **AES-128 in ECB mode** (weaker) |
| **Keys only on user devices** | **Keys held by Zoom**, generated on servers |
| **Encrypted recordings** | **Unencrypted on servers for 60 days** |
| **Globally secure** | **Routed through China** in some cases |

### Why "transport encryption" ≠ "E2E"

**True E2E** (like Signal, WhatsApp):
- Alice and Bob generate keys **on their own devices**
- Zoom (the server) never sees the keys
- **No one** other than Alice and Bob (not even Zoom) can read the conversation

**Transport encryption** (what Zoom had until 2020):
- Alice encrypts → Zoom server **decrypts** → server **re-encrypts** → Bob decrypts
- **The server sees everything** (known as **man-in-the-middle with authority**)
- An attacker with access to the server (hacker, government, internal employee) sees everything

### AES-128-ECB — a technical problem

**ECB (Electronic Codebook)** — the simplest AES mode. Problem: **identical data yields identical output**. If you encrypt the same image twice, the result is identical. The **classic Linux Tux image in ECB** (penguin silhouette remains visible after "encryption") illustrates the problem.

Citizen Lab: Zoom meetings **showed patterns** in encrypted data, potentially allowing for **metadata analysis** (number of participants, type of content).

### Servers in China

Citizen Lab (Ron Deibert, University of Toronto, April 2020) investigated Zoom's infrastructure. Findings:
- **Servers in Beijing** generated encryption keys for meetings
- In some cases, **keys for meetings between Americans** were generated in China
- Chinese companies are subject to the **Chinese National Intelligence Law (2017)** — an obligation to cooperate with the CCP
- Zoom **has significant R&D operations in China** (Hefei, Hangzhou, Suzhou) — **~700 employees** in 2020

### ZoomOpener — a backdoor on Mac

**Jonathan Leitschuh** (April 2019) discovered:
- Zoom installed a **hidden web server** on macOS (ZoomOpener)
- It allowed **one-click join** — but also **automatic camera activation** via a malicious link
- **Uninstalling Zoom** did not remove ZoomOpener — it remained active
- Apple had to release a **silent system update** removing ZoomOpener

### Zoom-bombing

**March–April 2020** — disruption of public meetings. Mechanism:
- Zoom meetings had **short IDs** (9–10 digits)
- **No password by default**
- **ID scanners** — scripts trying random IDs
- Once inside: **screen share, unmuted audio**

**Victims**:
- **Elementary schools** — children exposed to porn, swastikas, racist slurs
- **AA meetings** — anonymous alcoholics subjected to public humiliation
- **Synagogues** — antisemitic attacks
- **Churches** — obscene disruptions of Sunday Service
- **Federal courts** — federal court meetings disrupted
- **Graduation ceremonies** — racist chants

### Chinese operations — Time Magazine report

**April 9, 2020** — *Time* revealed that **Chinese operatives**:
- Disrupted **Tiananmen memorial meetings** (June 4 anniversary)
- Monitored **Hong Kong activist conferences**
- Zoom **shut down accounts** of activists in the USA at China's request
- **Lee Cheuk-yan** (Hong Kong, pro-democracy) — his account blocked

This was the **worst blow to Zoom's reputation**: not just technical lies, but **active cooperation** with the Chinese regime.

---

## Discovery

### Micah Lee, Yael Grauer (*The Intercept*)

**Micah Lee** — journalist at *The Intercept*, previously a technologist at EFF. He collaborated with Snowden on Glenn Greenwald reporting. **Yael Grauer** — tech security journalist.

**March 30, 2020** — the article "Zoom Meetings Aren't End-to-End Encrypted, Despite Misleading Marketing". It forced an **immediate response** from Zoom. Zoom's reply: *"We erroneously used the term 'end-to-end.'"*

### Citizen Lab (University of Toronto)

**Ron Deibert** — director of Citizen Lab. A think tank + research center specializing in human rights + cybersecurity. Earlier discoveries include:
- **Pegasus spyware** (NSO Group) — used against journalists
- **China's Great Firewall**
- **FinFisher** surveillance software

**April 3, 2020** — the report "Move Fast and Roll Your Own Crypto: A Quick Look at the Confidentiality of Zoom Meetings" (Bill Marczak, John Scott-Railton). It revealed AES-128-ECB and the Chinese servers.

### FBI Boston

**April 2, 2020** — FBI Boston issued an official warning about zoom-bombing. The term "zoom-bombing" entered the language.

### First publications

- **April 9, 2019** — Jonathan Leitschuh, Medium: ZoomOpener
- **March 30, 2020** — Micah Lee, Yael Grauer, *The Intercept*
- **April 1, 2020** — Eric Yuan, Zoom blog: public apology
- **April 3, 2020** — Citizen Lab report
- **April 9, 2020** — *Time Magazine*: Chinese operations
- **November 9, 2020** — FTC press release

---

## Key people

### Zoom

- **Eric Yuan** — founder, CEO of Zoom. Born in China, naturalized American in 2007. Former VP of Engineering at Cisco WebEx. After the pandemic: billionaire (on paper, ~$20 billion at the peak).
- **Alex Stamos** — joined as an **outside security consultant** in April 2020. Former CSO at Facebook and Yahoo. Previously a critic of Apple's CSAM scanning (→ C03).
- **Oded Gal** — CTO of Zoom. Responsible for the architecture redesign.

### Journalists / researchers

- **Micah Lee** (*The Intercept*) — key publication.
- **Yael Grauer** (*The Intercept*).
- **Ron Deibert** (Citizen Lab).
- **Bill Marczak, John Scott-Railton** (Citizen Lab).
- **Jonathan Leitschuh** — discoverer of ZoomOpener.
- **Craig Silverman** (*BuzzFeed News*) — early investigative work.

### Regulators

- **Letitia James** — NY Attorney General. Settlement May 2020.
- **Rohit Chopra** — FTC Commissioner (Democrat), dissent in the FTC settlement (no payouts).
- **Rebecca Kelly Slaughter** — FTC Commissioner (Democrat), dissent.
- **Joseph Simons** — FTC Chairman (Republican). Supported the settlement.
- **Christine S. Wilson** — FTC Commissioner (Republican).

### Critics / activists

- **Elon Musk** — banned Zoom at SpaceX (April 2020). Ironic given his later tech-safety positions.
- **EFF**
- **ACLU**
- **Lee Cheuk-yan** (Hong Kong) — activist, victim of account shutdown.

---

## Company response

### Zoom — a remarkable reputational transformation

**Stage 1: defense (March 2020).** Initially, Zoom defended itself: *"E2E in the industry parlance means encryption from user to server, server to user."* A **total fabrication** in the cryptographic field.

**Stage 2: apology (April 1, 2020).** Eric Yuan's public apology: *"We recognize we have fallen short of the community's — and our own — privacy and security expectations."* He announced:
- **90-day feature freeze** — focus on security
- **CISO Council** — external experts
- **Alex Stamos** as consultant
- **End-to-end encryption** announced

**Stage 3: action (April–October 2020).**
- Change to **AES-256-GCM** (true 256-bit)
- **Default password protection**
- **Waiting Rooms** by default
- **Security icon** in meetings
- Acquisition of **Keybase** (May 2020)
- **True E2E preview** (October 2020)

**Stage 4: settlements.**
- NY AG settlement (May 2020)
- FTC settlement (November 2020)

**Stage 5: growth (2020–2022).** Zoom **won** the pandemic. Stock price up 6x. Eric Yuan: billionaire.

**Stage 6: consolidation (2023–2026).** Zoom expanded: Zoom Phone, Zoom Contact Center, Zoom AI Companion (generative AI). Competition: Microsoft Teams, Google Meet.

### Controversial position regarding E2E

**Important**: Zoom's **E2E is opt-in**, not default. **By default, everyone gets transport encryption**. Business decision: **E2E disables** certain features (cloud recording, phone dial-in, live transcription). Zoom chose **convenience over security** for the mass of users.

---

## Legal proceedings

### Jurisdictions

- **USA federal** — FTC
- **USA state** — NY AG (James), numerous class actions
- **EU** — no major proceedings (Zoom EU compliance better)

### Legal basis

- **FTC Act § 5** — deceptive practices
- **NY Executive Law § 63(12)** — false claims
- **California BPC 17200** — unfair competition
- **California CCPA** — privacy
- **State consumer laws**
- **COPPA** — children on Zoom (schools)

### Key stages

| Date | Stage |
|------|------|
| March–April 2020 | Pandemic crisis |
| May 2020 | NY AG settlement |
| November 9, 2020 | FTC settlement |
| October 2020 | E2E preview launch |

### Related case law

- ***In re Zoom Video Communications Inc. Privacy Litigation*** (N.D. Cal.) — class action by shareholders and users; settlement of **$85 million** (2021).
- **Equivalent** to other FTC deceptive practices cases (Facebook, Google).

---

## Penalties and settlements

| Date | Authority | Amount | Jurisdiction | Status |
|------|-------|-------|-------------|--------|
| May 2020 | NY AG | No financial penalty | Settlement with enhanced security | Completed |
| November 9, 2020 | FTC | **NO payouts to users** | 20-year monitoring | Ongoing until 2040 |
| 2021 | Class action (shareholder) | **$85,000,000** | Private settlement | Completed |

**Characteristics:** The FTC settlement **did not contain** compensation for consumers, which was **criticized** by Commissioners Chopra and Slaughter. The class action (shareholders) paid out **$85 million**, but this was mainly for investors, not for mass users.

---

## Precedents and implications

### For US law

- **FTC deceptive practices** as the main tool — strengthened.
- **20-year monitoring** as a template — similar to Facebook 2012 (after Cambridge Analytica → A02).
- **No payouts** — a controversy leading to FTC reforms during the Biden era (Lina Khan 2021+).

### For EU law

- **Precedent for accelerated pandemic enforcement** — regulators learned to respond quickly.
- **EDPB** guidelines on video conferencing 2020–2021 were partly inspired by the Zoom case.

### For Big Tech practice

- **Google Meet, Microsoft Teams, Cisco WebEx** — all adjusted marketing materials after Zoom. **None** advertise "E2E" anymore if it's not true.
- **Signal, Keybase (now Zoom), Wire, Threema** — gained reputationally as "true E2E."

### "Pandemic as a stress test"

- Showed how Big Tech treats security when **no one is watching**. Zoom had 10 million users in December 2019 — **no one** cared how it worked. When it grew to 300 million, **everyone** wanted to know.
- Precedent: **pandemic as a regulatory accelerator**. Some companies (Zoom) won; others (such as Instacart in the USA, Uber Eats) had their own crises.

---

## Class actions

| Case | Court | Status | Value | Affected parties |
|--------|-----|------|---------|--------------|
| *In re Zoom Video Communications Inc. Privacy Litigation* | N.D. Cal. | Settlement 2021 | $85,000,000 | US users (paid) |
| Class actions shareholders | N.D. Cal. | Ongoing/settlements | Unknown | Investors |

For the average Zoom user — payouts were **minimal** (~$15–50 per person).

---

## Conclusions for citizens

### What does this mean for me?

If you used Zoom in 2020 (especially March–October) — **your meetings were not E2E encrypted**. Zoom and potentially Chinese employees/authorities could **see** the content. For a typical family Zoom call — the risk was probably theoretical. For **journalists, lawyers, therapists, activists** — the risk was real.

Today (2026), Zoom is **significantly better**:
- **AES-256-GCM** by default
- **E2E available** (opt-in)
- **Default passwords** and waiting rooms
- **No Chinese routing** for US meetings
- **20-year FTC monitoring** (until 2040)

### How to protect yourself?

1. **Enable E2E** when you need privacy:
   - Zoom → Settings → Security → **End-to-End Encryption** → ON
   - **Note**: disables cloud recording, dial-in, live transcription
2. **Always use a password + waiting room** for meetings.
3. **Don't share meeting IDs publicly** (Twitter, screenshots).
4. **Use Signal** for truly sensitive conversations.
5. **Alternatives for sensitive meetings**:
   - **Signal video calls** (full E2E, up to 40 people)
   - **Wire** (E2E, business-grade)
   - **Jitsi Meet** (self-hosted, E2E)
   - **BigBlueButton** (open source, self-hosted)

### For professionals

6. **Lawyers**: use Zoom E2E for client consultations. Alternatively, Signal.
7. **Therapists**: Zoom has a HIPAA-compliant plan for the USA. EU: Doxy.me, Jitsi Meet, Wire.
8. **Journalists**: for sensitive sources — **Signal, Jitsi**, not Zoom.
9. **Teachers**: Google Meet (school) with Google Workspace Education has better privacy than consumer Zoom.

### What are my rights?

**In the USA:**
- **FTC Act** — deceptive practices. Zoom is under 20-year monitoring.
- **State-level** — California, Virginia, Illinois have privacy laws.
- **HIPAA** — for medical use cases. Zoom has a BAA for HIPAA.

**In the EU (GDPR):**
- **Art. 15** — download Zoom data about you.
- **Art. 17** — request erasure of recordings.
- **Art. 21** — objection.
- **Art. 82** — compensation.

### Note for mediators, lawyers, psychologists

**Mediators using Zoom:**
- **Enable E2E** for every mediation session.
- **Do not record** in the Zoom cloud (unless protocol requires it and the parties have consented).
- **Waiting room** — always.
- **Inform the parties** of the technology used and the limitations of E2E.

**Lawyers consulting clients:**
- Zoom E2E for attorney-client privilege. Alternatively, Signal/Wire.
- **DO NOT use Zoom AI Companion** (automatic transcription) — it violates privilege.

**Psychologists / therapists:**
- Zoom **Pro + HIPAA BAA** in the USA.
- In the EU: **doxy.me, Jane App, SimplePractice** with EU data residency.
- **DO NOT use free Zoom** for therapy sessions.

**Courts:**
- **Polish courts** began using Zoom/Teams after COVID. Recommendation: update policy to E2E for sensitive cases (family, criminal, data protection).

**Family mediators in domestic violence cases:**
- **Particular caution**. A harassing partner may **try to break into** sessions. Password + waiting room + E2E + identity protection.

---

## Context

- **Eric Yuan — born in China, naturalized American**. He grew up in **Shandong**. As a young engineer after finishing his studies, he intended to take a job at Cisco WebEx, but **was rejected for a US visa 8 times**. The **ninth time** he got it. A classic American dream story — which later came back to haunt him through problems with China in 2020.
- **Keybase acquisition (May 2020)** — Zoom bought the startup Keybase for an undisclosed sum in the millions. Keybase was a pioneer of **zero-knowledge encryption** — a perfect fit for building true E2E. The Keybase team (including **Max Krohn**) **stayed** and built Zoom E2E in ~5 months. The fastest post-acquisition delivery in tech.
- **"90-day feature freeze"** (April 1, 2020) — Eric Yuan announced that **Zoom was halting** the addition of new features for 90 days and would focus exclusively on security. **Unprecedented** in the tech industry: a company publicly suspending growth priority for security.
- **Alex Stamos** — former CSO at Facebook, Yahoo. Previously one of the sharpest critics of Apple's CSAM scanning (C03) and Meta (Cambridge Analytica). In April 2020 he **joined Zoom as an outside consultant**. For many critics — legitimization of Zoom. For Stamos — a **fascinating problem** at scale.
- **Time Magazine "Chinese operatives spying on Zoom" (April 9, 2020)** — the article that **most** damaged Zoom's reputation. Not just "bugs in encryption" (a technical issue), but **"actively helping an authoritarian regime"** (a geopolitical issue). In the era of the US-China tech war, it changed perceptions of Zoom.
- **ZoomOpener (2019) — Mac silent backdoor** — Jonathan Leitschuh discovered that Zoom installed a **hidden web server** on Macs, which:
  - Responded to requests even if Zoom was uninstalled
  - Allowed a malicious website to **activate the user's camera** without consent
  - Apple had to release **the first silent system update in history** (Mojave Security Update 2019-002) removing malware from the system
- **Rohit Chopra dissent** (November 9, 2020) — the FTC Commissioner (Democrat) wrote a scathing dissent:
  > *"Today's settlement with Zoom is long on promises, but short on follow-through. Zoom is not required to offer redress, refunds, or even notice to its customers that material claims regarding the security of its services were false."*
  Chopra later became director of the CFPB (2021). Her dissent became a **template** for future FTC enforcement pushes under **Lina Khan** (FTC Chair 2021–2025).
- **"Going from 10 million to 300 million daily users"** — **30x growth in 4 months**. Zoom's infrastructure **nearly collapsed**. Zoom moved workloads to **Amazon AWS, Oracle Cloud, Microsoft Azure** simultaneously in March–April 2020.
- **Polish context** — Polish schools, universities, courts, and government offices **massively** used Zoom in 2020–2021. UODO **did not initiate** a separate proceeding, but the **Ministry of Digital Affairs** issued recommendations after April 2020. Polish schools partially switched to Google Meet and Microsoft Teams.
- **"Singing Happy Birthday on Zoom" (April 2020) phenomenon** — a cultural phenomenon. **Birthdays on Zoom**, **weddings on Zoom** (New York legalized remote weddings), **funerals on Zoom**. Zoom became **the infrastructure of social life**. Effect: **no one could** back out, even after the revelations.
- **Zoom-bombing and schools** — the most tragic incidents. In **New York**, elementary classes were disrupted by pornography. **Germany**, **United Kingdom** — swastikas in history lessons. **Israel, France** — antisemitic slurs. Schools quickly switched to **passwords + waiting rooms**.
- **NYC Dept of Education bans Zoom** (April 4, 2020) — the world's largest school district (1.1 million students) banned Zoom and moved to Microsoft Teams. After Zoom's reforms — **unban** in May 2020.
- **Zoom IPO valued at ~$10 billion** (April 2019). By **October 2020**, valued at **$160 billion**. Eric Yuan: **billionaire**. **2023**: Zoom's value dropped by over 80% from peak — pandemic over. A classic **pandemic stock bubble**.
- **Post-pandemic reckoning (2022–2024)** — companies return to offices, students to classrooms. Zoom **struggles** for relevance. Strategy: **Zoom AI Companion** (2023, generative AI), **Zoom Workplace** (rebrand 2024). Mixed success.
- **E2E "opt-in not default"** — Zoom's E2E is **not default**. Business decision: default E2E disables key features (cloud recording, dial-in, live transcription). Critics: Zoom **chose convenience over security** for the masses. Apologists: **users have a choice**.
- **Signal vs. Zoom** — Signal **grew** throughout the pandemic, offering **free group video** (up to 8 people, then 40). People who needed E2E migrated. Signal **doesn't have 300 million daily users** — but it has **reputation**. A classic **growth vs. quality tradeoff**.
- **Zoom AI Companion (2023)** — automatic transcriptions, meeting summaries. For lawyers, mediators, therapists: **risk of privilege breach**. It must be **disabled** by default.
- **"Zoom fatigue"** — scientists (Stanford Virtual Human Interaction Lab) studied whether Zoom causes **more fatigue** than in-person meetings. Jeremy Bailenson: *yes*, because of **constant eye contact**, **audio latency**, **self-mirror reflection**. Pandemic-era research.
- **Zoom Phone and Contact Center** — after the pandemic, Zoom expanded into telephony and call centers. Competition: Cisco, Microsoft, Genesys. Zoom holds a niche, not a dominant position.

---

## Sources

1. Federal Trade Commission, "FTC Requires Zoom to Enhance its Security Practices as Part of Settlement", November 9, 2020. URL: https://www.ftc.gov/news-events/news/press-releases/2020/11/ftc-requires-zoom-enhance-its-security-practices-part-settlement

2. Micah Lee, Yael Grauer, "Zoom Meetings Aren't End-to-End Encrypted, Despite Misleading Marketing", *The Intercept*, March 30, 2020. URL: https://theintercept.com/2020/03/31/zoom-meeting-encryption/

3. Bill Marczak, John Scott-Railton, "Move Fast and Roll Your Own Crypto: A Quick Look at the Confidentiality of Zoom Meetings", Citizen Lab University of Toronto, April 3, 2020.

4. Eric Yuan, "A Message to Our Users", Zoom Blog, April 1, 2020.

5. Kate O'Flaherty, *Time Magazine*, "Chinese Operatives Used Zoom to Target Foreign Activists", April 2020.

6. Jonathan Leitschuh, "Zoom Zero Day: 4+ Million Webcams & Maybe an RCE?", Medium, July 9, 2019.

7. Letitia James, New York Attorney General, settlement press release, May 2020.

8. Rohit Chopra, dissent statement, FTC settlement, November 9, 2020.

9. Rebecca Kelly Slaughter, dissent statement, FTC settlement, November 9, 2020.

10. *In re Zoom Video Communications Inc. Privacy Litigation*, N.D. Cal., settlement 2021 ($85 million).

11. Bitdefender, "Zoom Settles with FTC over Allegations of Deceptive Security Practices", November 2020.

12. Social Media Today, "Zoom Announces Settlement with the FTC Over False Encryption Claims", November 2020.

13. IT Pro, "Zoom settles with the FTC over 'deceptive' encryption claims", November 10, 2020.

14. Stanford Virtual Human Interaction Lab (Jeremy Bailenson), "Nonverbal Overload: A Theoretical Argument for the Causes of Zoom Fatigue", Technology, Mind, and Behavior, 2021.

15. FBI Boston Field Office, public warning on "Zoom-bombing", April 2, 2020.

---

*Last updated: 2026-04-18*
*Card in database: E06_zoom_e2ee.md*
