---
id: C02
slug: c02-apple-siri-grading
group: C
group_label: Apple, Microsoft, LinkedIn
title: Apple Siri Grading
year_revealed: 2019
last_updated: '2026-04-17'
companies:
- Apple
status: settled
jurisdictions:
- US
- global
legal_basis:
- California Invasion of Privacy Act
- Federal Wiretap Act
- w UE hipotetycznie RODO art. 5
- '6'
- '9'
fines:
- amount: 95000000
  currency: USD
  authority: '*Lopez v. Apple*'
  date: 2024-01
  category: class_action_settlement
  status: paid
whistleblowers:
- le-bonniec
- schrems
journalists:
- Alex Hern
related_cases:
- C03
- C01
- B04
- A01
- E01
tags:
- dziennikarze
- rodo
- pozew-zbiorowy
- sygnalista
categories:
- privacy
geo_coords: []
priority: STANDARD
card_complete: true
word_count: 3593
explainer:
  src: /animations/c02-apple-siri-grading.html
  duration: '60s'
  title: Siri Grading — contractors listened to conversations about sex, drugs, therapy
subtitle: Contractors listened in on intimate conversations
years_active:
- 2011
- 2019
---

# C02 — Apple Siri Grading: Contractors listened in on intimate conversations

> **Category:** Voice assistants / eavesdropping / whistleblower / Apple "Privacy" branding
> **Company/companies:** Apple (contractors: GlobeTech in Cork, Ireland)
> **Years:** 2014–2019 (practice), July 26, 2019 (disclosure), January 2024 (settlement)
> **Status:** Concluded — program suspended; $95 million settlement (Lopez v. Apple)
> **Card ID:** C02

---

## Metadata

| Field | Value |
|------|---------|
| Country/region | Global (Apple); contractors in Ireland (Cork), USA, India |
| Year revealed | July 26, 2019 (*The Guardian*, Alex Hern) |
| Years the practice ran | From Siri launch in 2011, especially 2014–2019 (scale) |
| Total penalty | **$95,000,000** (class action settlement Lopez v. Apple) |
| Currency | USD |
| Legal basis | California Invasion of Privacy Act (CIPA), Federal Wiretap Act; in the EU hypothetically GDPR art. 5, 6, 9 |
| Whistleblower/discoverer | **Thomas Le Bonniec** (former GlobeTech contractor); journalist **Alex Hern** (*The Guardian*) |
| Number of affected users | Tens/hundreds of millions of Siri users (since 2014); contractors heard millions of recordings |
| Current status | External program ended 2019; opt-in since iOS 13.2; settlement 2024 |

---

## TL;DR

On **July 26, 2019**, *The Guardian* (journalist **Alex Hern**) revealed that **Apple had been employing external contractors** to **listen to Siri recordings** — to "improve speech recognition quality." The contractors worked at places such as **GlobeTech Technical Services** in **Cork, Ireland**, as part of the "**Apple grading program**." They heard **intimate**, **medical**, **business**, and **criminal** recordings — very often originating from **accidental activations** of Siri (e.g., the sound of a zipper resembling "Hey Siri," an Apple Watch activated by raising the wrist, the sound of footsteps).

The **whistleblower** was **Thomas Le Bonniec** — a Frenchman and former GlobeTech contractor. He initially disclosed the case anonymously to *The Guardian* (July 2019). On **May 20, 2020**, he **went public**, sending a letter to every European data protection authority: *"Apple systematically violates the fundamental rights of millions of users worldwide. I could not tolerate this any longer."*

In his statement, Le Bonniec listed specific categories of recordings he had personally heard:
- **Medical consultations** (doctors with patients)
- **Business meetings** (financial data, strategies)
- **Home addresses, personal data**
- **Sexual intercourse** (the zipper sound = a frequent Siri trigger)
- **Conversations with lovers / in extramarital relationships**
- **Critical statements about Apple**
- **Surgical procedures** (a surgeon's Apple Watch activated during an operation)

Apple **immediately suspended the program** (August 2, 2019), Tim Cook **publicly apologized**, and the company introduced **opt-in in iOS 13.2** (August 28, 2019). **Since 2020**, Siri recordings are listened to only by **Apple's internal employees** (not contractors) and only **with the user's explicit consent** (*Settings → Privacy → Analytics & Improvements → Improve Siri & Dictation*).

**US class action: *Lopez et al. v. Apple Inc.* (N.D. Cal.)** — a **$95 million** settlement was finalized in **January 2024**. Up to $20 per user who filed a claim. Apple **admitted no wrongdoing**.

**In the EU**: despite Le Bonniec's letter, CNIL (France) and the Irish DPC **imposed no penalties** — the argument being "Apple changed the practice, no grounds for a fine." This represents **very weak** GDPR enforcement, criticized by NOYB. In Germany, Hamburg Commissioner Johannes Caspar opened a proceeding but did not lead to a fine before his departure in 2021.

The case matters for three reasons: (1) it **undermined Apple's "Privacy" marketing** (the 2019 "What happens on your iPhone stays on your iPhone" campaign); (2) it became **a template for all voice assistants** — 2019 was **"the year of the voice assistant scandal"** (Amazon Alexa, Google Assistant, Microsoft Cortana, and Samsung Bixby were revealed in parallel); (3) it set **a contractor-whistleblower precedent** — Le Bonniec showed that people working in Big Tech's supply chain can be the source of critical disclosures.

---

## Timeline

- **2011** — Apple introduces **Siri** on the iPhone 4s (following the 2010 acquisition of Siri Inc.).
- **2014** — Apple introduces **"Hey Siri"** — voice activation without pressing a button (iPhone 6). At the same time, it rolls out the **Siri Grading Program** — external listening to recordings.
- **2015** — Apple Watch with Siri (activation via **Raise to Speak**).
- **2018** — the program reaches global scale; GlobeTech in Cork employs dozens of contractors working eight hours a day.
- **July 2019** — **Thomas Le Bonniec** finishes his work at GlobeTech and contacts *The Guardian*.
- **July 26, 2019** — Alex Hern, "Apple contractors 'regularly hear confidential details' on Siri recordings," *The Guardian*.
- **August 2, 2019** — Apple publicly **suspends the program** globally. Official statement.
- **August 28, 2019** — **iOS 13.2** — **opt-in** for Siri Grading. Disabled by default.
- **Late 2019** — Apple dismisses GlobeTech contractors (300+ people).
- **May 20, 2020** — Le Bonniec **goes public** — letter to European DPAs. *Politico Europe* publishes the story.
- **2020** — US class action suits. Consolidated as *Lopez et al. v. Apple Inc.*
- **2021–2023** — settlement negotiations.
- **January 2024** — **$95 million settlement**.
- **August 2024** — court approves the settlement.

---

## Mechanism

### Siri Grading Program — what, when, why

**Purpose** (as declared): to improve speech recognition. In every ASR (Automatic Speech Recognition) system, models learn through **human-in-the-loop** — people listen to recordings and mark whether the system transcribed correctly, what was wrong, and how to fix it.

**More precisely**:
1. Apple selected a **statistical sample** of recordings (a small percentage of all Siri queries).
2. The samples were sent to **external firms** (GlobeTech in Cork, counterparts in the USA and India).
3. Contractors listened and noted:
   - Did Siri recognize the query correctly?
   - Was the response correct?
   - What accents, dialects, style?
   - **Was the activation intentional** (the user said "Hey Siri") or **accidental**?

**Scale**: Le Bonniec estimated that he **listened to about 1,000 recordings a day**. With ~300 contractors x 240 workdays = **~72 million recordings per year** evaluated in Cork alone. Globally: hundreds of millions.

### What contractors heard — concrete examples (from The Guardian and Le Bonniec's letter)

- **Medical consultations**: a doctor and patient talking in an exam room, an Apple Watch activates Siri
- **Business meetings**: financial data, tender strategies
- **Home addresses, personal data**: users dictating contact information to Siri
- **Sexual intercourse**: the sound of a zipper often resembles "Hey Siri"; iPhone/Apple Watch activates
- **Conversations in extramarital relationships**: extremely intimate privacy violations
- **Surgical operations**: surgeons with Apple Watches; movement + commands activate Siri
- **Criminal conversations**: Le Bonniec noted **planned crimes** ("drug dealing, violence") that **were not reported to police** by the contractors

### Why so many accidental activations

"Hey Siri" is a **wake word** based on an ML model. The model is not perfect:
- The sound of a zipper or a snap
- The names "Syrio," "Cyril," "Sarah" in certain contexts
- Apple Watch: **Raise to Speak** — activation by **raising the wrist** to the mouth (but the Apple Watch cannot actually tell — it activates Siri **on any wrist-raising motion**)
- Background noises (a light switch, a door slam) at specific frequencies

According to Apple's internal statistics: **approximately 5–10% of Siri activations are accidental**. With 500 million Siri users averaging 10 activations per day = **~50 million accidental activations per day** globally.

### No information for users

Apple **did not inform** users about this program before the 2019 disclosure:
- **It was not in the Terms of Service** (at least not clearly)
- **No pop-up appeared** on first use of Siri
- **There was no "opt-out" setting** (until iOS 13.2 in August 2019)
- Apple's 2019 "Privacy" campaign ("**What happens on your iPhone stays on your iPhone**") **ran during active Siri Grading**

---

## Discovery

### Who is Thomas Le Bonniec

**Thomas Le Bonniec** — a French linguistics graduate who spent several years in Ireland, where he encountered Siri Grading through job postings at **GlobeTech Technical Services** (Cork). He worked there for several months in 2019 as a **Siri recording analyst** — known internally as a "Siri grader."

After a few months, Le Bonniec concluded that he **could no longer tolerate it**. He resigned and contacted *The Guardian*.

On **May 20, 2020**, he sent an **open letter** to every European DPA — coordinated by a non-profit organization:

*"I am writing this letter to inform you about the practices I have witnessed while working as a contractor for Apple on the Siri speech recognition program. It is my belief that Apple systematically violates the fundamental rights of millions of users worldwide. I could not tolerate this any longer."*

Le Bonniec enumerated specific GDPR violations:
- Art. 5 — principles of processing
- Art. 6 — legal basis
- Art. 9 — special categories of data (health!)
- Art. 13 — information obligation

After going public, Le Bonniec gained the support of **NOYB (Max Schrems)** and became **a model whistleblower** in Europe. He has spoken at numerous conferences (IAPP Europe, Privacy Camp Brussels).

### Journalist — Alex Hern

**Alex Hern** — a technology journalist for *The Guardian* since 2013. He specializes in digital privacy, Big Tech, and AI. He authored a series of 2019 disclosures about voice assistants (Apple, Amazon, Google). His method: **approaching whistleblowers** in Big Tech's contractor-labor ecosystem.

### First publications

- **July 26, 2019** — Alex Hern, "Apple contractors 'regularly hear confidential details' on Siri recordings," *The Guardian*
- **July 28, 2019** — coverage in *NYT*, *WaPo*, *BBC*, *TechCrunch*
- **August 2, 2019** — Apple Newsroom, "Improving Siri's privacy protections"
- **May 20, 2020** — Le Bonniec's letter; coverage in *Politico Europe*, *The Guardian*, *Le Monde*

---

## Key people

### Whistleblower

- **Thomas Le Bonniec** — former GlobeTech contractor. Since going public, he has worked with privacy advocacy organizations; he has spoken at numerous IAPP, Privacy Camp, and CPDP conferences.

### Investigative journalists

- **Alex Hern** (*The Guardian*) — described above.
- **Geoffrey A. Fowler** (*Washington Post*) — parallel investigations on Amazon Alexa.
- **Sarah Emerson** (*OneZero*, later *Insider*) — reporting on Samsung Bixby and Microsoft Cortana.

### Apple

- **Tim Cook** — CEO, responsible for the public apology
- **Craig Federighi** — SVP Software Engineering; host of iOS 13.2 (introduction of opt-in)
- **Erik Neuenschwander** — Head of User Privacy; key contact for the media

### Other parallel whistleblowers (2019 — "the year of the voice assistant scandal")

- Amazon Alexa whistleblowers (Bloomberg, April 2019)
- Google Assistant whistleblowers (Belgian VRT, July 2019)
- Microsoft Cortana / Skype Translator whistleblowers (Motherboard, August 2019)
- Samsung Bixby whistleblowers (*Vice*, 2019)

### Class action lawyers

- **Hunter J. Shkolnik** (Napoli Shkolnik) — lead US law firm.

### Regulators (inactive!)

- **CNIL** (France) — opened an investigation but imposed no fine
- **Johannes Caspar** (Hamburg) — opened a proceeding with no consequences
- **Irish DPC** — Apple's EU headquarters — **did not launch a proceeding**
- **ICO UK** — engaged informationally

---

## Company response

### Apple

**Stage 1: silence (2014–2019).** The program operated in secret. Contractors signed NDAs.

**Stage 2: rapid reaction (August 2, 2019).** A week after The Guardian:
- Global suspension of the program
- Official statement: *"We take customer privacy extremely seriously. We have decided to suspend Siri grading globally while we conduct a thorough review."*
- Announcement of reforms

**Stage 3: public apology (August 28, 2019).** Apple Newsroom: "Improving Siri's privacy protections." Key changes:
1. **Apple will disable Siri grading by default.**
2. **Users will be able to opt in** ("help improve Siri") knowingly.
3. **Only Apple employees** (not contractors) will listen to recordings.
4. **Accidental activations** will be **deleted** automatically.

**Stage 4: rollout (iOS 13.2, October 2019).**
- Setting: *Settings → Privacy → Analytics & Improvements → Improve Siri & Dictation* — **disabled by default**.
- "Delete Siri & Dictation History" button — users can delete their recordings.

**Stage 5: payment (2024).** $95 million class action settlement.

**Unanswered questions:**
- What did Apple do with the **billions of recordings collected before 2019**? Officially: deleted as part of the reset program. Independent verification: none.
- Why were contractors **not required** to report the planned crimes they heard to the police?
- Did similar practices take place in **Apple Dictation**, **Apple TV voice remote**, and **HomePod**?

---

## Legal proceedings

### Jurisdictions

1. **US federal** — class action *Lopez v. Apple* (N.D. Cal.)
2. **US state** — parallel suits, consolidated with the federal one
3. **EU** — CNIL, DPC, Hamburg, and others — **no penalties**
4. **UK** — ICO informationally

### Legal basis

**USA:**
- **California Invasion of Privacy Act (CIPA)** — $5,000 per violation
- **Federal Wiretap Act** (18 USC § 2510)
- **California Consumers Legal Remedies Act**

**EU (hypothetical, not enforced):**
- **GDPR art. 5** (principles of processing)
- **GDPR art. 6** (legal basis)
- **GDPR art. 9** (special categories of data — health, sex life)
- **GDPR art. 13** (information obligation)

### The key legal issue — "intentional" vs "accidental" activation

Apple argued that when a user says "Hey Siri," they **express consent** to the recording being processed. Basis: GDPR art. 6(1)(a) (consent) + Terms of Service.

**Counterargument**: **many recordings originated from accidental activations** — the user **never said** "Hey Siri." An Apple Watch activated by movement, a zipper, a similar sound. In such cases, **there is no consent** — instead, there is an **accidental recording of a private conversation**, which qualifies as **the interception of communications** (wiretap).

US courts accepted the counterargument. In the EU, **enforcement was weaker** (the Irish DPC did not launch a proceeding).

### Key stages

| Date | Stage |
|------|------|
| July 26, 2019 | Guardian publication |
| August 2, 2019 | Apple suspends the program |
| August 28, 2019 | iOS 13.2 reforms |
| May 20, 2020 | Le Bonniec's letter to European DPAs |
| 2020 | US lawsuits |
| January 2024 | $95 million settlement |

### Related case law

- ***In re Google Assistant Privacy Litigation*** (N.D. Cal.) — a parallel case; smaller settlement
- ***In re Amazon Alexa Privacy Litigation*** — parallel
- **The Amazon Alexa case (D01 in this database)** — the same dynamic
- ***Bodenbender v. Samsung*** — Bixby; pending

---

## Penalties and settlements

| Date | Authority | Amount | Jurisdiction | Basis |
|------|-------|-------|-------------|----------|
| January 2024 | *Lopez v. Apple* | $95,000,000 | US federal (N.D. Cal.) | CIPA, Wiretap Act |

**Total: $95 million** — in the USA only. **No regulatory penalty in the EU.**

---

## Precedents and implications

### For US law

- **CIPA $5,000 per violation** — a continuation of the strengthening of CIPA following Brown v. Google (B05).
- **Wiretap Act for voice assistants** — entrenchment of the line of case law holding that **accidental activation = interception of communications**.

### For EU law

- **Weak GDPR enforcement** — the case showed that European DPAs (especially the Irish DPC) **are unable** to effectively enforce GDPR against Apple.
- **Impetus for the AI Act** (2024) — the AI Act contains provisions on **voice biometrics** and **transparency of AI systems**.

### For Big Tech practice

- **2019 "the year of the voice assistant scandal"** — **all the major voice assistants** (Siri, Alexa, Google Assistant, Cortana, Bixby) had the same problem. They all introduced opt-in in 2019–2020.
- **"Privacy by default" for voice AI** became the norm.
- **Internal audit processes for contractors** — Apple, Amazon, and Google introduced new audit procedures for contract work.

### For Big Tech whistleblowers

- **Le Bonniec as a model** — he showed that **contractors** (not full-time employees) can be a source of disclosures. Similar channels: Meta moderation contractors (Sama, Accenture in Kenya), TikTok moderators, OpenAI data labelers.
- **EU Whistleblower Directive 2019/1937** — came into effect in 2021; protects contractor whistleblowers.

---

## Class actions

| Case | Court | Status | Value | Affected |
|--------|-----|------|---------|--------------|
| *Lopez et al. v. Apple Inc.* | N.D. Cal. | Settlement 2024 | $95 million | ~100 million US Siri users |
| *In re Apple Inc. Siri Litigation* | N.D. Cal. | Consolidated | Part of the above | — |

---

## Conclusions for citizens

### What does this mean for me?

If you have been using **Siri on your iPhone, iPad, Mac, Apple Watch, or HomePod** since 2014 — some of your commands, jokes, and conversation fragments (especially **accidentally triggered** ones) may have ended up with a **contractor in Cork, Sunnyvale, or India** who evaluated them under the Apple Grading program. This potentially includes:
- **Fragments of intimate conversations** (if you had your iPhone nearby)
- **Medical conversations** (in an exam room or hospital)
- **Business conversations** (meetings with an Apple Watch)
- **Anything that occurred within microphone range**

Since 2019, Apple claims that **these practices have ended**. Independent verification: none.

### How to protect yourself

**iPhone/iPad:**
1. **Settings → Siri & Search** → disable "Listen for 'Hey Siri'" if you don't use it regularly. You can keep **activation via the side button** (safer, requires a deliberate action).
2. **Settings → Privacy & Security → Analytics & Improvements → Improve Siri & Dictation** — **check that it is disabled** (the default since iOS 13.2, but worth confirming).
3. **Delete Siri history**: in the same place → "Delete Siri & Dictation History."

**Apple Watch:**
4. **Settings → Siri** → disable **"Raise to Speak"** (activates Siri when the watch is raised to the mouth — a very common **accidental activation**).
5. Leave **"Hey Siri"** disabled.
6. Activate Siri only via **a long press on the Digital Crown** (deliberate).

**HomePod / HomePod mini:**
7. Consider disabling "Listen for Hey Siri" if sensitive conversations take place in the home.
8. You can **physically mute** with "Hey Siri, stop listening" — but Siri will reactivate itself after some time.

### General rules for voice assistants

**Do not use voice assistants near sensitive conversations:**
- **Medical conversations** with patients / doctors
- **Legal conversations** with clients (attorney, mediator, or notary privilege)
- **Financial or strategic conversations**
- **HR and personnel meetings**
- **Intimate situations**

**Physical microphone off switch:**
- Amazon Echo has **a physical mute button** (with a light indicator).
- Google Nest — similarly.
- Apple HomePod — **does not have** a physical button (software only).
- iPhone — no physical microphone switch (iOS 15+ shows microphone activity in the status bar).

### What rights do I have?

**In the EU (GDPR):**
- **Art. 15** — right of access: you can ask Apple whether they hold **recordings from your device** and how many contractors listened to them.
- **Art. 17** — right to erasure.
- **Art. 82** — compensation for non-material harm.

**In the USA:**
- **CIPA (California)** — $5,000 per violation. *Lopez v. Apple* set the precedent.
- **Wiretap Act** — federal claim.

### Where to file a complaint

- **Poland**: UODO
- **EU**: national DPA; NOYB
- **USA**: state AG, FTC

### A note for mediators, lawyers, doctors, psychologists

**Professional privilege vs voice assistants:**

If you work in a profession protected by professional privilege (art. 180 of the Polish Code of Criminal Procedure, art. 6 of the Competition Act):
- **Doctor, nurse** — art. 40 of the Act on the Professions of Physician and Dentist
- **Attorney, legal advisor** — art. 6 of the Law on the Bar
- **Mediator** — art. 1834 of the Polish Code of Civil Procedure, art. 19 of the Mediators Act
- **Psychologist** — art. 14 of the Act on the Profession of Psychologist
- **Clergy** — Concordat, art. 178 of the Polish Code of Criminal Procedure

**A voice assistant in your office or chambers may breach professional privilege.** Even if it was not "deliberately turned on," accidental activations happen regularly. Recommendations:

1. **Physically disable voice assistants in your office** — ideally, do not have them at all.
2. **Apple Watch in the office**: disable "Raise to Speak." Or **take the watch off** before a client meeting.
3. **iPhone on the desk**: disable "Hey Siri" in settings.
4. **HomePod / smart speaker in a home office** — **remove or unplug**.
5. **Remote conversations (Zoom, Teams, Signal)** — make sure the conversation is not being recorded by your counterpart's voice assistant.
6. **In your terms of service**, consider a clause: *"The client is aware that the presence of devices with voice assistants in the room may breach professional privilege."*

**Potential client claims**: if a client reveals that their case leaked via a voice assistant (e.g., Siri recorded a conversation with an attorney, and the recording was heard by a contractor in Ireland), this may form the basis for:
- A claim against the attorney (breach of privilege)
- A claim against Apple (GDPR art. 82)

**A provision in the Polish Bar's Code of Ethics** (NRA resolution of November 19, 2022) mentions "new technologies" — voice assistants fall within this category.

---

## Context

- **Apple "Privacy"** — the 2019 campaign "**What happens on your iPhone stays on your iPhone**." Posters, billboards, TV commercials. **At the very same time**, hundreds of contractors in Cork were listening to users' intimate conversations. A classic case of *privacy washing*.
- **Le Bonniec — the typical profile** of a Big Tech contractor — young, with a languages degree, a short-term contract, **15 EUR/h**, no prospect of full-time employment. A textbook example of Big Tech's **IT precariat**.
- **Apple vs Amazon contractors**: Amazon paid **~$15/h** in Romania and India. Apple — **~15 EUR/h** in Cork. Neither **fully informed users**. The business model: outsourcing sensitive work to low-cost countries.
- **Apple Watch and zipper** — one of the most frequent causes of accidental activation. A zipper's sound has a frequency similar to "Hey Siri" under many conditions. **Users are unaware.**
- **Surgical operation** — Le Bonniec in his letter: *"I heard full recordings of a surgical operation."* A surgeon's Apple Watch activated Siri through movement and commands by an assistant. The surgeon likely **did not know** this was happening.
- **Hours per contractor** — Le Bonniec: **~1,000 recordings per day** at 8–30 seconds each = several hours of recordings. Over half a year of work = **hundreds of thousands of recordings per single contractor**.
- **Apple "never" stores recordings permanently** — so Apple claims. But: merely sending samples to contractors required **temporary storage** in GlobeTech's infrastructure (third-party company servers). There is no independent verification that recordings were deleted after grading.
- **No EU regulator fined Apple** — this is especially painful for NOYB. The case is a **symbol of weak GDPR enforcement** against American Big Tech in Ireland.
- **All voice assistants in 2019** — "the year of the scandal": April Amazon Alexa (Bloomberg), July Apple Siri (Guardian), August Google Assistant (VRT Belgium), August Microsoft Cortana / Skype Translator (Motherboard), October Samsung Bixby (*Vice*). **All** used external contractors. **All** changed their policies in 2019–2020.
- **Record speaker sales in 2019**: despite the scandals, **smart speaker sales rose 30%** in 2019. Consumers **did not care** about privacy as much as they should have. This is an indicator that Big Tech PR scandals **do not fundamentally change** consumer choices.
- **Poland — little data**: in Poland, Siri users never received formal notification that their recordings might have been listened to. UODO did not open a proceeding. Polish citizens are excluded from the US class action.
- **Siri in Poland** — since iOS 13 (2019), Siri **supports Polish**. But **Polish recordings** were routed to contractors **who knew Polish** — mostly in Poland (Eastern Europe was a hub for Slavic languages). The specific firm: not disclosed.
- ***Lopez v. Apple*** — a $95 million settlement. For Apple (a $3 trillion company): **0.003% of market cap**. Practically imperceptible financially, yet symbolically important.

---

## Sources

1. Alex Hern, "Apple contractors 'regularly hear confidential details' on Siri recordings," *The Guardian*, July 26, 2019. URL: https://www.theguardian.com/technology/2019/jul/26/apple-contractors-regularly-hear-confidential-details-on-siri-recordings (accessed: 2026-04-17)

2. Apple Newsroom, "Improving Siri's privacy protections," August 28, 2019. URL: https://www.apple.com/newsroom/2019/08/improving-sirisi-privacy-protections/ (accessed: 2026-04-17)

3. Thomas Le Bonniec, "Open letter to European data protection authorities," May 20, 2020. Published by: *Politico Europe*, *The Guardian*.

4. *Lopez et al. v. Apple Inc.*, N.D. Cal. — PACER documents.

5. Matt Day et al., "Amazon Workers Are Listening to What You Tell Alexa," *Bloomberg*, April 10, 2019 — parallel case.

6. VRT NWS (Belgium), Google Assistant disclosure, July 2019.

7. *Motherboard* (Joseph Cox), Microsoft Cortana / Skype Translator disclosure, August 2019.

8. NOYB, materials on weak GDPR enforcement against Apple, 2020–2023.

9. EU Whistleblower Directive 2019/1937.

10. Personal Information Protection Commission (Korea), parallel proceedings.

11. CNIL (France), results of investigation with no fine, 2020.

12. EDPB, Guidelines on processing personal data by voice assistants, 2021.

13. Polish Bar Code of Ethics, NRA resolution of November 19, 2022 — provisions on new technologies.

14. Geoffrey A. Fowler, "Alexa has been eavesdropping on you this whole time," *The Washington Post*, 2019.

15. Apple Support: "Ask Siri, Dictation & Privacy." URL: https://support.apple.com/en-us/HT210657 (accessed: 2026-04-17)

---

*Last updated: 2026-04-17*
*Card in database: C02_apple_siri.md*
