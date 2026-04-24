---
id: D06
slug: d06-uber-2016-breach
group: D
group_label: Amazon, Uber
title: Uber 2016 breach
year_revealed: 2017
last_updated: '2026-04-17'
companies:
- Uber Technologies
status: settled
jurisdictions:
- US
- global
legal_basis:
- Obstruction of justice
- misprision of felony
- breach notification laws
- FTC Act
fines:
- amount: 148000000
  currency: USD
  authority: 50 stanów USA
  date: 2018-09
  category: state_attorney_general
  status: paid
- amount: 50000
  currency: USD
  authority: Sąd federalny
  date: 2023-05
  category: class_action_settlement
  status: paid
whistleblowers: []
journalists: []
related_cases:
- D05
- D04
- E01
- C03
- B06
tags:
- pracownicy
- wyciek-danych
categories:
- privacy
geo_coords: []
priority: TOP
card_complete: true
word_count: 3190
explainer:
  src: /animations/d06-uber-2016-breach.html
  duration: '60s'
  title: Uber 2016 — the first CISO criminally convicted
subtitle: Joe Sullivan concealed the breach of 57 million records — the world's first CISO convicted of a crime
years_active:
- 2016
- 2017
---

# D06 — Uber 2016 breach: Joe Sullivan concealed the breach of 57 million records — the world's first CISO convicted of a crime

> **Category:** Data breach / incident cover-up / criminal liability of executives / bug bounty abuse
> **Company/companies:** Uber Technologies
> **Years:** November 2016 (breach), November 2017 (public disclosure), October 2022 (conviction)
> **Status:** Closed — Sullivan convicted; 9th Circuit affirmed 2025; Uber settled for $148M in 2018
> **Card ID:** D06

---

## Metadata

| Field | Value |
|------|---------|
| Country/region | US federal and state; data affected customers globally |
| Year revealed | November 2017 (public — hidden since 2016) |
| Years practice active | November 2016 – November 2017 (12 months of concealment) |
| Total penalty | **$148,000,000** (50 states 2018) + Sullivan sentence; first-ever criminal conviction of a CISO |
| Currency | USD |
| Legal basis | Obstruction of justice (18 USC § 1505); misprision of felony (18 USC § 4); breach notification laws (50 states); FTC Act |
| Whistleblower/discoverer | Internal reports + new Uber administration under Dara Khosrowshahi (2017) |
| Number of affected | **57 million** customers + 600,000 US drivers (driver's license numbers) |
| Status (as of today) | Sullivan: 3 years probation + $50,000; Uber: $148M settlement; 9th Circuit affirmed on 03/13/2025 |

---

## TL;DR

**November 14, 2016** — two hackers (**Brandon Charles Glover** and **Vasile Mereacre**) broke into an Uber server on **Amazon S3** using an **AWS key** found on the private GitHub of an Uber employee. They stole data from **57 million accounts** — including **600,000 driver's license numbers of American Uber drivers**. The hackers contacted Uber, demanding a **ransom**.

**Joe Sullivan** — **Chief Security Officer** (CSO) of Uber since 2015, previously CSO at Facebook and a federal prosecutor — took the call. He chose a radical approach: he **concealed the breach from the authorities**.

Context: just **10 days earlier**, Sullivan had **testified under oath before the FTC** regarding Uber's earlier 2014 breach (50,000 drivers). Disclosing a second, much larger breach **in the context of an active FTC investigation** would have been catastrophic. Sullivan told a subordinate: ***"We can't let this get out"*** (quoted in court documents).

Sullivan's plan:
1. **Don't inform the FTC** (which was conducting an investigation).
2. **Don't inform customers** (despite state-level obligations).
3. **Pay the hackers $100,000 in Bitcoin** through Uber's **bug bounty program** (HackerOne), pretending it was a "bug bounty reward."
4. **Force the hackers to sign an NDA** (non-disclosure agreement) in which they **falsely declared** they had not downloaded any data.
5. **Internally** treat the incident as a "bug bounty discovery," not a "breach."

**Travis Kalanick** (CEO) was informed. He authorized Sullivan's plan.

**June 2017** — Kalanick resigns after a series of scandals. **August 2017** — **Dara Khosrowshahi** takes over as CEO. The new Chief Legal Officer **Tony West** (former Associate AG of the US) uncovers the story and notifies regulators.

**November 21, 2017** — Khosrowshahi **publicly discloses** the breach and the fact of its concealment. **Sullivan is fired**.

**September 2018** — 50 US states reach a joint settlement with Uber: **$148M** (for breach notification failures; also covers cases D04, D05).

**August 20, 2020** — **DOJ files criminal charges** against Sullivan: **obstruction of justice** (obstructing the FTC investigation) + **misprision of felony** (concealing knowledge of a committed federal crime).

**October 5, 2022** — a **federal jury in San Francisco** unanimously convicts Sullivan on both counts. The **first CISO in history** convicted for criminally covering up a breach.

**May 4, 2023** — Judge **William H. Orrick** issues the sentence: **3 years of probation** (instead of 15 months of prison, which prosecutors had proposed) + **$50,000 fine** + **200 hours of community service**. For the defense: an unexpectedly lenient sentence.

**March 13, 2025** — the **9th Circuit Court of Appeals** (Judge **Mary McKeown**) **unanimously** affirms the verdict: *"even if Sullivan believed the hackers were unauthorized... he could not reasonably believe that treating the hack as a bug bounty and having the hackers sign NDAs cleansed the illegal conduct."*

**Precedent:** D06 is the **first case in history** of a CISO convicted for criminal mishandling of a breach. It has become a **canonical case** in cybersecurity law — every corporate security compliance textbook now includes a case study of *U.S. v. Sullivan*. The **SEC Cybersecurity Disclosure Rules (2023)** were directly inspired by the case.

---

## Timeline

- **September 2014** — first Uber breach: **50,000 drivers**. FTC opens investigation.
- **February 2015** — Uber informs only **50% of affected** drivers.
- **April 2015** — Joe Sullivan hired as **CSO of Uber** (from Facebook, where he was CSO 2008–2015).
- **June 2016** — Uber and other application data (including third parties) on **GitHub** left unsecured. AWS keys visible publicly.
- **November 2016** — new hackers Glover and Mereacre discover AWS keys on GitHub.
- **November 14, 2016** — the hackers break into Uber S3, steal **57M records**.
- **November 4, 2016** — **Sullivan testifies under oath before the FTC** regarding the 2014 breach.
- **November 14, 2016** — **10 days after the testimony** — the hackers contact Sullivan with a ransom demand.
- **November 2016** — Sullivan, with Kalanick's approval, authorizes payment of **$100,000 in Bitcoin** through HackerOne (bug bounty program). The hackers sign an NDA.
- **November 2016 – November 2017** — **12 months of concealment**. Sullivan presents the incident internally as a "bug bounty discovery."
- **August 2017** — Dara Khosrowshahi becomes CEO.
- **Fall 2017** — Tony West (new CLO) and an outside law firm uncover the story.
- **November 21, 2017** — Khosrowshahi **publicly discloses** the breach. Sullivan is **fired**.
- **April 2018** — FTC reaches a second settlement with the regulator (covering D04, D05, D06).
- **September 2018** — 50 US states: **$148M** settlement.
- **2019** — hackers Glover and Mereacre convicted for their acts (not Sullivan's).
- **August 20, 2020** — DOJ files criminal charges against Sullivan.
- **September 5, 2022** — Sullivan's trial begins in N.D. California.
- **October 5, 2022** — **jury convicts** Sullivan unanimously on both counts.
- **May 4, 2023** — **Sullivan's sentence**: 3 years probation + $50,000 + 200 hours community service. Judge William H. Orrick.
- **June 2023** — Sullivan appeals.
- **March 13, 2025** — **9th Circuit Court of Appeals** affirms the verdict unanimously. Judge Mary McKeown (Clinton appointee) authors the opinion.

---

## Mechanism

### How the breach happened

**Step 1: AWS keys on GitHub.**
Uber developers, including freelancers, uploaded code fragments to **personal GitHub repositories**. Some contained **AWS access keys** (keys to Amazon S3, where Uber stored data).

**Step 2: Hackers scan GitHub.**
Glover and Mereacre used automated tools to scan public GitHub repos for AWS keys. They found Uber's keys.

**Step 3: Breaching S3.**
Using the keys, the hackers downloaded **Uber's full customer database from Amazon S3**:
- 57M accounts — name, email, phone
- 600,000 American drivers — driver's license numbers
- **Not stolen**: credit card numbers, ride history (in those files)

**Step 4: Ransom demand.**
The hackers contacted Uber (email to security@uber.com) demanding **$100,000 for non-disclosure**.

### Sullivan's plan — "make it a bug bounty"

**Sullivan chose bug bounty as the pretext:**

1. **HackerOne** — the bug bounty platform used by Uber. Normally: if an ethical hacker finds a vulnerability, they report it through HackerOne and receive a reward (usually $500–$10,000).

2. **Sullivan ordered** the $100,000 payment to be prepared **through HackerOne**, treating the hackers as an "ethical find."

3. The hackers signed an **NDA** in which they **falsely declared** they had **not downloaded any data**. This was crucial — the NDA contained a lie under the threat of contractual liability.

4. Sullivan presented within Uber: *"we found a vulnerability, paid a bug bounty, problem solved."*

5. **He didn't report to the FTC.** Didn't report to the states (breach notification). Didn't report to customers.

### The "We can't let this get out" quote

Sullivan to a subordinate (later disclosed in court documents): *"We can't let this get out."* Further: *"This would play very badly based on our previous assertions to the FTC."*

This quote was **crucial** in the criminal trial — it demonstrated **awareness of unlawfulness**.

---

## Discovery

### Internal disclosure (2017)

After Kalanick's resignation (June 2017) and Khosrowshahi's acceptance of CEO (August 2017):
- The new **Chief Legal Officer Tony West** (formerly Associate AG of the US, brother-in-law of Kamala Harris)
- The outside law firm **Latham & Watkins** — audit of all FTC materials
- Discovery of anomalies in **bug bounty payouts** ($100,000 was unusually high)
- Discovery of Sullivan's email correspondence with the hackers
- **October–November 2017** — full internal investigation

### Public announcement (November 21, 2017)

**Dara Khosrowshahi**, blog post: *"You may be asking why we are just talking about this now. I had the same question, so I immediately asked for a thorough investigation of what happened and how we handled it."*

Khosrowshahi announced:
- The fact of the breach of 57M records
- The fact of the $100,000 payout "outside our bug bounty program"
- **Firing of Sullivan** and his deputy
- An offer of free credit monitoring for affected drivers

### DOJ — criminal charges

**August 20, 2020** — the DOJ under the new US Attorney for N.D. California Stephanie Hinds files charges. These are the **first-ever** federal criminal charges against a CISO for mishandling a breach.

### First publications

- **November 21, 2017** — Bloomberg — the first story (Eric Newcomer, Brad Stone)
- **November 21, 2017** — Uber official blog (Dara Khosrowshahi)
- **November 22, 2017** — NYT, WSJ, WaPo, Reuters, TechCrunch
- **August 20, 2020** — DOJ announcement
- **October 5, 2022** — verdict coverage
- **March 13, 2025** — 9th Circuit ruling

---

## Key people

### Uber

- **Joe Sullivan** — CSO 2015–2017. Previously CSO of Facebook (2008–2015), federal prosecutor (2000s).
- **Travis Kalanick** — CEO, authorized Sullivan's plan.
- **Dara Khosrowshahi** — CEO since August 2017, disclosed the case.
- **Tony West** — Chief Legal Officer since 2017, uncovered the story.
- **Salle Yoo** — General Counsel 2013–2017. Her legal team **approved** Sullivan's plan.
- **Craig Clark** — Sullivan's deputy, also fired in 2017.

### Hackers

- **Brandon Charles Glover** — 26 years old, Florida.
- **Vasile Mereacre** — 23 years old, Toronto, Canada.
- Both convicted in 2019 for attacks on LinkedIn and others (not specifically the Uber breach).

### Prosecutors

- **Stephanie Hinds** — U.S. Attorney for N.D. California, filed charges.
- **Andrew Dawson, Vanessa Baehr-Jones** — Assistant U.S. Attorneys, tried the case.

### Judges

- **William H. Orrick** — United States District Judge, N.D. California. Nominated by Obama in 2013.
- **Mary McKeown** — Senior U.S. Circuit Judge, 9th Circuit. Nominated by Clinton.

### Sullivan's defense attorneys

- **David Angeli, Lauren K. Martin** — Angeli Law Group (Portland, OR).
- **Defense arguments**: Sullivan was not a lawyer, he handled the incident in accordance with the opinions of General Counsel Yoo.

---

## Company response

### Uber under Kalanick (2016–2017)

**Plan**: conceal.
**Method**: bug bounty + NDA.
**Authorization**: Kalanick + Sullivan + Yoo.

### Uber under Khosrowshahi (2017+)

**Disclosure**: November 21, 2017.
**Cooperation**: full cooperation with the DOJ in the investigation against Sullivan.
**Reform**:
- New CSO
- Mandatory breach response training
- "Disclosure first" policy
- External security audits

---

## Legal proceedings

### Jurisdictions

- US federal — DOJ criminal, FTC civil
- US state — 50-state settlement 2018

### Legal basis

- **Obstruction of justice** (18 USC § 1505) — obstructing the FTC investigation
- **Misprision of felony** (18 USC § 4) — concealing knowledge of a federal crime
- **Breach notification laws** — 50 states (various notification deadlines)
- **FTC Act § 5** — unfair/deceptive practices

### Key stages

| Date | Stage |
|------|------|
| November 14, 2016 | Breach |
| November 2016 – 2017 | Concealment |
| November 21, 2017 | Public disclosure |
| April 2018 | FTC second settlement with the regulator |
| September 2018 | $148M settlement |
| August 20, 2020 | Criminal charges against Sullivan |
| October 5, 2022 | **Jury conviction** |
| May 4, 2023 | Sentence (probation) |
| March 13, 2025 | **9th Circuit affirms** |

### Related case law

- **US v. Martoma** — insider trading, similar "willful blindness" concepts
- **US v. Friedman** (2014) — obstruction of justice in a corporate context
- **In re Yahoo! Inc. Securities Litigation** (N.D. Cal. 2018) — similar breach concealment
- **SEC Cybersecurity Disclosure Rules (2023)** — directly inspired by the case

---

## Penalties and settlements

| Date | Body | Amount | Jurisdiction | Basis |
|------|-------|-------|-------------|----------|
| September 2018 | 50 US states | **$148,000,000** | US state | Breach notification |
| May 4, 2023 | Federal court | $50,000 + 3 years probation + 200h community service | US federal | Obstruction + misprision |

**Sullivan faced up to 8 years in prison.** He received probation — the prosecutors protested. Judge Orrick argued: "message sent" without "ruining a life."

---

## Precedents and implications

### For US law

- **First CISO convicted** for criminal mishandling of a breach. **A fundamental precedent.**
- **9th Circuit affirmation (2025)** — cemented the precedent.
- **SEC Cybersecurity Disclosure Rules (2023)** — directly inspired by the case. Public companies have 4 days to disclose material cybersecurity incidents.
- **State AG cooperation** — the $148M settlement serves as a model of multi-state enforcement.

### For Big Tech practice

- **CISO under scrutiny** — after Sullivan, many companies **shifted responsibility** to board risk committees rather than a single executive.
- **Bug bounty abuse** — HackerOne and other platforms introduced **stricter review** of payments above certain thresholds.
- **Breach response** — the canonical rule: **disclose, don't conceal.**

### For the cybersecurity landscape

- **D&O insurance** — companies began offering insurance for CISOs against criminal liability. Premiums tripled after Sullivan.
- **CISO shortage** — after the scandal, some specialists **refused** CISO roles without guarantees of insurance and a clear structure of accountability.

---

## Class actions

| Case | Court | State | Value | Affected |
|--------|-----|------|---------|--------------|
| *In re Uber 2016 Data Breach* | N.D. Cal. | Settled | Included in $148M | 57M customers |

Individual lawsuits as well — most consolidated into the multi-agency settlement.

---

## Conclusions for citizens

### What does this mean for me?

If you were an Uber customer in 2016 — **your data was in the leaks**. Uber, no longer offering it, provided **free credit monitoring**, but only for drivers (not customers). If you were a US driver, your driver's license number may have been in the breach.

The case illustrates a broader trend: **customer data is not well protected** by corporations. Even a multi-billion-dollar company can have **AWS keys on GitHub**.

### How to protect yourself?

1. **Check **Have I Been Pwned** (haveibeenpwned.com) — enter your email, see which breaches you're in. Uber 2016 is in the database.
2. **Change passwords** on services using the same email and similar passwords.
3. **Enable MFA** everywhere.
4. **Credit monitoring** — free services (Credit Karma, AnnualCreditReport.com US).
5. **Credit freeze** — if your data is in breaches, you can freeze your credit (US) or place a hold on BIK (Poland).

### What rights do I have?

**In the US:**
- **State breach notification laws** — companies have 30–90 days to disclose.
- **SEC rules (2023)** — 4 days for public companies.
- Class action lawsuits.

**In the EU (GDPR):**
- **Art. 33** — 72 hours to notify the DPA.
- **Art. 34** — immediate notification of users in case of high risk.
- **Art. 82** — damages.

### Note for mediators, lawyers, data administrators

**If you are a Chief Security Officer (CSO/CISO), Data Protection Officer, or General Counsel:**

1. **Document everything.** In case of a breach, **immediately** notify the board and legal counsel.
2. **NEVER** attempt to conceal a breach. *U.S. v. Sullivan* shows that **criminal liability is real**.
3. **Breach response plan** — prepare it **before** an incident, not during.
4. **D&O insurance** (Directors & Officers) — make sure it covers criminal defense.
5. **Separate** roles: CSO from IO (Incident Officer). Conflict of interest.
6. **Close cooperation with prosecutors** — "don't obstruct, don't lie."

**Lesson from D06**: **concealment ALWAYS costs more** than admission. 12 months of concealment = $148M settlement + a conviction of the CISO + reputational catastrophe vs. quick disclosure = usually <$10M.

---

## Context

- **"We can't let this get out"** — Sullivan's quote, which has become **the most famous sentence in cybersecurity law**. Repeated in hundreds of presentations, trainings, and academic lectures.
- **10 days after the FTC testimony** — the timing is crucial. Sullivan testified on November 4, 2016, under oath, about the 2014 breach. On November 14, 2016, he received word of a new breach. **Literally 10 days.** This makes the case **considerably worse** — Sullivan was actively aware of the legal expectations and deliberately circumvented them.
- **Joe Sullivan — a career paradox** — former **federal prosecutor** (early 2000s), then **CSO of Facebook** (2008–2015), then **CSO of Uber** (2015–2017), then **CSO of Cloudflare** (2018–2022, until his trial was initiated). The day when a **federal prosecutor** became the **first convicted CISO**.
- **Judge Orrick's leniency** — prosecutors asked for 15 months in prison. Orrick gave **probation + community service**. Argument: Sullivan didn't steal money, didn't personally benefit. Prosecutors protested. Defense: "fair."
- **9th Circuit affirmation (2025)** — Judge Mary McKeown, a Bill Clinton appointee, authored the opinion. Quote: *"even if Sullivan believed the hackers were unauthorized within the meaning of the Computer Fraud and Abuse Act, he could not reasonably believe that treating the hack as a bug bounty and having the hackers sign NDAs cleansed the illegal conduct."*
- **HackerOne embarrassment** — the bug bounty platform was a knowing (if innocent) participant in Sullivan's plan. After the scandal, HackerOne introduced **stricter review** of payouts, particularly those above $10,000. Payouts of $100,000+ now require **external legal review**.
- **Yahoo parallel** — earlier (2016) Yahoo disclosed the breach of 500M accounts from 2014 (2 years of concealment). **Marissa Mayer** (CEO of Yahoo) lost $12M in bonuses. But there were **no criminal charges**. After Sullivan: **criminal charges are an option**.
- **Bug bounty ethics** — before Sullivan, the bug bounty community (HackerOne, Bugcrowd, YesWeHack) had a strong culture of "pay for the vulnerability." After Sullivan: **if the find has already been exploited**, it isn't a bug bounty, it's **extortion**.
- **Polish context** — Poland's UODO has no precedent analogous to Sullivan. Art. 107 of GDPR + the Polish GDPR Act (2018) provide for **liability of the management board** and **senior staff** in case of a mass breach, but **criminal liability** requires charges under Polish criminal law (Art. 266 of the Criminal Code — violation of official secrecy).
- **Tony West / Kamala Harris** — Tony West, who uncovered the story and fired Sullivan, is **brother-in-law to Kamala Harris** (Vice President of the US 2021–2025). West was **Associate Attorney General of the US** under Obama.
- **"Bug bounty wash"** — a term coined after the case, describing an attempt to **conceal a breach** by routing payment through a bug bounty program. After Sullivan, **seriously regarded as a violation of law**.
- **SEC reaction** — after Sullivan, in 2023 the SEC published the **Cybersecurity Disclosure Rules**: public companies must disclose "material cybersecurity incidents" within **4 days** of determining materiality. A nationwide rule.
- **Darkside reactivation** — the ransomware community, after the Sullivan scandal, had a debate: if large companies pay ransomware while concealing the breach, is that "extortion" or "bug bounty"? The majority of the black-hat community: **extortion**. The line remained unchanged.
- **Khosrowshahi reputation repair** — after 2017, Uber actively invested in **privacy and security**. In 2020, the FTC praised Uber as an "example" of transformation. The $148M settlement was **decidedly painful**, but Uber survived and today has a higher valuation than in 2016.
- **Criminal CISO precedent** — after Sullivan, and before any further cases (e.g., SolarWinds CISO 2023), the cybersec street changed. CISOs now **negotiate** indemnification, D&O insurance, right to external counsel — as a condition of employment. The D06 case changed the **cybersec job market**.
- **Films / books** — Mike Isaac in *Super Pumped* devotes a chapter to Sullivan. A Showtime series (2022) adapts the scene. The documentary podcast *Darknet Diaries* (episode 138) describes it in detail.

---

## Sources

1. United States v. Joseph Sullivan, Case No. 3:20-cr-00337 (N.D. Cal.), court files.

2. Department of Justice, "Former Chief Security Officer Of Uber Sentenced To Three Years' Probation For Covering Up Data Breach Involving Millions Of Uber User Records," May 4, 2023. URL: https://www.justice.gov/usao-ndca/pr/former-chief-security-officer-uber-sentenced-three-years-probation-covering-data (accessed: 2026-04-17)

3. United States v. Sullivan, 9th Circuit Court of Appeals, opinion by Senior Judge Mary McKeown, March 13, 2025.

4. Dara Khosrowshahi, "2016 Data Security Incident," Uber blog, November 21, 2017.

5. Bloomberg, "Uber Paid Hackers to Delete Stolen Data on 57 Million People," Eric Newcomer, November 21, 2017.

6. Federal Trade Commission, "In the Matter of Uber Technologies Inc.," File No. 152-3054, April 2018.

7. 50 states multi-state settlement, September 2018.

8. *Darknet Diaries* podcast episode 138, Jack Rhysider.

9. Mike Isaac, *Super Pumped: The Battle for Uber*, W.W. Norton, 2019.

10. Matthew Baker, Baker Botts, "Ninth Circuit Upholds Conviction of Former Uber Security Chief Joseph Sullivan," March 2025.

11. Norton Rose Fulbright, analysis of the Sullivan case, 2022.

12. Arnold & Porter, "Ex-Uber CSO Joseph Sullivan Sentenced to Probation," May 2023.

13. Courthouse News Service, "Ninth Circuit upholds conviction of ex-Uber security chief in data breach cover-up," March 13, 2025.

14. SEC Cybersecurity Disclosure Rules, July 26, 2023.

15. HackerOne, public statements on bug bounty reforms, 2018–2023.

---

*Last updated: 2026-04-17*
*Card in database: D06_uber_breach.md*
