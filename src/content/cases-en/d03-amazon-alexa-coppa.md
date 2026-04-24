---
id: D03
slug: d03-amazon-alexa-coppa
group: D
group_label: Amazon, Uber
title: Amazon Alexa & COPPA
year_revealed: 2023
last_updated: '2026-04-17'
companies:
- Amazon
status: concluded
jurisdictions:
- US
legal_basis:
- '**COPPA**'
- FTC Act § 5
fines:
- amount: 25000000
  currency: USD
  authority: FTC + DOJ
  date: 2023-05
  category: regulatory_fine
  status: paid
whistleblowers: []
journalists: []
related_cases:
- D02
- D01
- B04
- E04
- D04
tags:
- sledzenie-lokalizacji
- dzieci
- coppa
categories:
- privacy
geo_coords: []
priority: STANDARD
card_complete: true
word_count: 2419
explainer:
  src: /animations/d03-amazon-alexa-coppa.html
  duration: '60s'
  title: Alexa & COPPA — children had rights. Amazon had to implement them.
subtitle: Children's data kept "forever" despite parents' deletion requests
years_active:
- 2018
- 2023
---

# D03 — Amazon Alexa & COPPA: Children's data kept "forever" despite parents' deletion requests

> **Category:** Children's privacy / COPPA / Alexa Kids / deletion requests ignored
> **Company/companies:** Amazon
> **Years:** 2018 (Alexa Kids launch) – May 2023 (FTC fine of 25 million USD)
> **Status:** Concluded — 25 million USD fine, order to delete data and change policies
> **Card ID:** D03

---

## Metadata

| Field | Value |
|------|---------|
| Country/region | US federal |
| Year revealed | May 31, 2023 (FTC/DOJ complaint); practice known since 2019 |
| Years practice was active | 2018–2023 (Alexa Kids and children's recordings) |
| Total fine | **25,000,000 USD** (FTC + DOJ, May 2023) |
| Currency | USD |
| Legal basis | **COPPA** (Children's Online Privacy Protection Act, 1998), FTC Act § 5 |
| Whistleblower/discoverer | FTC investigation + internal disclosures; reports by *Common Sense Media*, *Mozilla Foundation* |
| Number of affected | Millions of Alexa Kids child users in the US (mainly under 13) |
| Status (as of today) | Fine paid; Amazon obligated to delete children's data and report |

---

## TL;DR

**May 31, 2023** — on the same day as the 5.8 million USD Ring fine (→ D01), the **Federal Trade Commission** and **Department of Justice** imposed on Amazon a **separate 25 million USD fine** for violations of **COPPA (Children's Online Privacy Protection Act)** in connection with **Alexa Kids**. The allegations:

1. **Amazon kept children's voice recordings "forever"** — without any time limit, even though COPPA requires retention only as long as business needs demand.
2. **Amazon retained children's geolocation data** indefinitely.
3. **Amazon repeatedly ignored deletion requests** from parents — recordings remained in the database despite formal requests.
4. **Amazon used children's recordings to train Alexa algorithms** — even after parents asked for deletion.
5. **Amazon shared children's transcripts with other Amazon systems** — not just Alexa, but other company products as well (details under FTC supervision).

**Samuel Levine** (Director, Bureau of Consumer Protection FTC): *"Amazon's history of misleading parents, keeping children's recordings indefinitely, and flouting parents' deletion requests violated COPPA and sacrificed privacy for profits."*

**Amazon's response**: *"While we disagree with the FTC's claims regarding both Alexa and Ring, and deny violating the law, these settlements put these matters behind us."* A classic corporate formula: **no admission of wrongdoing**, but payment of the fine.

**Settlement terms** (in addition to the 25 million USD):
- **Deletion** of inactive Alexa Kids accounts after 18 months
- **Deletion** of children's geolocation and recordings at a parent's request — **in full**
- **Prohibition** on using deleted recordings to train algorithms
- **Implementation** of a COPPA compliance program (independent audit every 2 years)
- **Notification** of all Alexa Kids customers about FTC actions
- **Reporting** to the FTC every 60 days for the first 2 years

Case D03 is a **direct extension** of the Alexa case (D02), but it concerns a **special category of data** — data of children under 13 years of age. COPPA is one of the **oldest and strictest** US privacy laws (since 1998), carrying **high rank** in precedents. Amazon was the sixth major company fined for violating COPPA (previously: Google/YouTube 170 million USD in 2019; TikTok 5.7 million USD in 2019; Microsoft Xbox Live 20 million USD in 2023).

---

## Timeline

- **1998** — **COPPA** (Children's Online Privacy Protection Act) enters into force. It requires verifiable parental consent for collecting data of children under 13 online.
- **2013** — COPPA Rule update. Extended to geolocation, audio/video files, persistent identifiers.
- **2018** — Amazon launches **Echo Dot Kids** and **Alexa Kids Service** (Amazon Kids+, formerly FreeTime Unlimited). Dedicated to children.
- **2019** — ***Common Sense Media*** and ***Mozilla Foundation*** publish reports about Alexa Kids privacy problems.
- **May 2019** — **19 children's rights organizations** (Center for Digital Democracy, EPIC, others) **file a COPPA complaint** with the FTC against Amazon and Alexa.
- **2019–2022** — FTC investigation.
- **May 31, 2023** — **FTC + DOJ impose a 25 million USD fine**.
- **2023–2025** — Amazon implements policy changes; independent compliance audits.

---

## Mechanism

### What Amazon did with children's data

**1. Recording capture.**
Alexa Kids recorded a child's voice recordings (commands, conversations with Alexa). By default **stored in Amazon's cloud** — **without any time limit**. The FTC in its complaint: *"retained children's voice recordings indefinitely"*.

**2. Geolocation.**
Echo Dot Kids sent location data (IP geo, possibly GPS) to Amazon. **Retained indefinitely**.

**3. Deletion requests.**
A parent could submit a deletion request via:
- The Alexa app ("Delete voice recordings" button)
- Calling Amazon Support
- In writing

The FTC established that Amazon **did not always actually delete** the data. In particular:
- Transcripts remained in the database
- Metadata (who, when, what was done) was retained
- Data from trained algorithms (face embeddings, voice embeddings) **had already been absorbed** and could not be "flushed out"

**4. Use for training.**
Children's voices were used to **train Alexa models**. The models learned to:
- Recognize children's accents
- Intonation and phrases typical of children
- Intentions (what a 5-year-old probably wants when they say "Alexa, dog")

The problem: **even after deletion of the original recordings**, the **training effect remained in the model**. Children's voices were already "baked into" Alexa's neural weights.

**5. Sharing within Amazon.**
The FTC established that data from Alexa Kids was **shared with other Amazon teams** (not just the Alexa team) — which is potentially **inconsistent with COPPA's minimization principles**.

### Why this was a COPPA violation

The COPPA Rule (16 CFR § 312) requires an operator of a site/service **directed to children** to:

1. **Verifiable parental consent** — before collecting data.
2. **Minimization** — collect only what is necessary.
3. **Retention** — only as long as needed for the purpose.
4. **Deletion on request** — a parent may request deletion at any time.
5. **Prohibition on use for unrelated purposes** — children's data cannot be used to train AI for adult products.
6. **Security** — "reasonable procedures".

Amazon violated **at least points 3, 4, 5**. Particularly egregious: ignoring parents' requests and using children's data to train products **not related to them**.

### Selected cases

**A parent from Texas** (mentioned anonymously in the FTC complaint): repeatedly asked Amazon to delete recordings of their 6-year-old son. Amazon "deleted" them from the app interface, but the data **remained in other systems**. The parent found out about this when, after 2 years, the son received **an advertisement for a game featuring his voice as a "suggestion for similar accounts"**.

**A teacher** reported to the FTC that school Echo Dot Kids devices used with the class **retained children's recordings**, even though the school was not informed about the retention policy.

---

## Discovery

### Reports from children's rights organizations

**Common Sense Media** (Jim Steyer, CEO) — a non-profit organization advising parents about media. In 2019 it published a report about Alexa Kids. Key findings:
- Alexa Kids collects **more data than needed** for functionality
- No clear retention policy
- Deletion requests difficult to locate in the interface

**Mozilla Foundation** — "Privacy Not Included" — report on smart speakers. Alexa Kids received a **negative privacy rating**.

### The 2019 COPPA complaint

**May 9, 2019** — a coalition of **19 organizations** (Center for Digital Democracy, Electronic Privacy Information Center, Consumer Federation of America, etc.) filed a **formal COPPA complaint** with the FTC against Amazon. The key allegations:
- Insufficient parental consent
- Excessive data retention
- Lack of an effective deletion mechanism

The complaint was the **starting point** for the FTC investigation of 2019–2023.

### The 2023 FTC/DOJ complaint

On May 31, 2023, the FTC together with the Department of Justice filed a federal complaint. A parallel settlement.

### First publications

- **May 9, 2019** — Center for Digital Democracy, COPPA complaint
- **May 31, 2023** — FTC press release, extensive coverage by NYT, WaPo, NPR, CNN, Bloomberg

---

## Key people

### Amazon

- **Dave Limp** — SVP Devices and Services (Echo, Alexa), until 2023.
- **Rohit Prasad** — VP Alexa AI.
- **Andy Jassy** — CEO of Amazon since 2021.

### Regulators

- **Samuel Levine** — Director, FTC Bureau of Consumer Protection. Author of the complaint's key quote.
- **Lina Khan** — Chair of the FTC since 2021. Deep involvement in Big Tech cases.
- **DOJ Consumer Protection Branch** — co-authors of the complaint.

### Critics

- **Jeff Chester** (Center for Digital Democracy) — main organizer of the 2019 COPPA complaint coalition.
- **Katharina Kopp** (Center for Digital Democracy) — co-author of the analyses.
- **Shuman Ghosemajumder** (former CEO of Shape Security) — technical expert.

---

## Company response

### Amazon

**Statement (May 31, 2023):** *"We built Alexa with strong privacy protections and customer controls, designed Amazon Kids to comply with COPPA, and collaborated with the FTC before expanding Amazon Kids to include Alexa. While we disagree with the FTC's claims regarding both Alexa and Ring, and deny violating the law, these settlements put these matters behind us."*

A classic **"neither admit nor deny"** strategy.

**Actions (2023+):**
- New retention policy: children's recordings **automatically deleted after 18 months**
- Deletion of inactive Alexa Kids profiles
- Independent COPPA compliance audit every 2 years
- Blocked use of children's recordings to train AI for adult products

---

## Legal proceedings

### Legal basis

- **COPPA** (15 USC § 6501–6506)
- **COPPA Rule** (16 CFR § 312)
- **FTC Act § 5** (unfair/deceptive practices)

### Key stages

| Date | Stage |
|------|------|
| May 9, 2019 | Complaint from 19 organizations to the FTC |
| 2019–2022 | FTC investigation |
| May 31, 2023 | Fine of 25 million USD |

---

## Penalties and settlements

| Date | Body | Amount | Jurisdiction | Basis |
|------|-------|-------|-------------|----------|
| May 31, 2023 | FTC + DOJ | **25,000,000 USD** | US federal | COPPA |

**Context** of COPPA fines in history:
- YouTube/Google (2019): **170 million USD**
- TikTok/ByteDance (2019): **5.7 million USD**
- Microsoft Xbox Live (2023): **20 million USD**
- Amazon Alexa Kids (2023): **25 million USD**
- Epic Games (2022): **520 million USD** (COPPA + FTC Act)

---

## Precedents and implications

### For US law

- **Record-setting for smart speakers** COPPA fine.
- Precedent that **"indefinite retention is inadmissible"** — explicitly for children.
- **"Deletion requests MUST be real"** — not just pretended.

### For Big Tech practice

- **Apple** — Kids mode on HomePod was introduced with **limitations from the start**.
- **Google** — analogous changes to Google Kids.
- **Meta** — Messenger Kids was previously fined (2020, $10 million).

### For EU law

- **GDPR Art. 8** — consent age 13–16 years (depending on the member state, 16 in Poland).
- **GDPR Kids Code** (ICO UK, 2020) — 15 standards for services directed to children.

---

## Class actions

No separate class actions exclusively about COPPA for Alexa Kids. Part of the broader Alexa case (D02, 95 million USD settlement 2024).

---

## Conclusions for citizens

### What does this mean for me?

If you have children and there is an Echo/Alexa/Google Home in your home — **your children's data is being collected**. Amazon claims it currently complies with COPPA, but history shows: **declarations ≠ practice**. The Xbox Live, Epic Games, YouTube Kids cases — all had a similar pattern.

### How to protect children?

1. **Don't use Alexa Kids / Google Home Kids / Siri Kids** for children under 13 unless you trust the company. Alternatives: toys without connectivity, local devices.
2. **If you do use them** — review the settings:
   - Alexa App → Settings → Alexa Privacy → **Delete voice recordings**
   - Enable **auto-delete** (3/18 months)
   - Amazon Kids App → delete the child's profile after use ends
3. **Conversation with the child** — a 7-year-old may not understand, but a 10-year-old will already grasp that "the robot is listening".
4. **Outside the home** — don't take the Echo on vacation with your child.

### What rights do I have?

**In the US (COPPA):**
- Verifiable parental consent — required before collecting data.
- **Right to deletion** — full, for every type of data.
- **Right to inspection** — to see what the company has collected.

**In the EU (GDPR):**
- **Art. 8** — children under 16 (in Poland) require parental consent.
- **UODO Code of Practice for Children** (approaching publication) — modeled on the UK ICO.

### Note for family mediators and lawyers

- In divorce cases involving children: **who controls Alexa/Google Home** in the home after the divorce? This may be a vector of surveillance by the ex-partner over the child.
- **Changing Amazon passwords** after separation — necessary if the former partner had access.
- **Deleting children's Alexa profiles** after divorce — worth planning.
- **In custody cases** — Alexa recordings **may be evidence** in family court (who spent time with the child, what they did together).

---

## Context

- **Samuel Levine** quote: *"Amazon's history of misleading parents, keeping children's recordings indefinitely, and flouting parents' deletion requests violated COPPA and sacrificed privacy for profits."* The sentence became a **symbol** of the debate about trading in children's privacy. Frequently cited.
- **Epic Games 520 million USD** (December 2022) — the largest COPPA fine in history. Epic (Fortnite) collected children's data without consent and used deceptive interfaces. A precedent predecessor for the Amazon case.
- **YouTube Kids 170 million USD** (2019) — the previous largest fine. Google/YouTube collected children's data on YouTube Kids without consent. After the fine, Google announced "YouTube Kids as separate product".
- **"Flouting parents' deletion requests"** — the phrasing in the FTC complaint was particularly damning. It means that Amazon **deliberately** ignored the requests. Not "forgot", not "had a bug". **Flouting** = disregard.
- **18 months** — Amazon's new retention policy. This is still long (a child will utter thousands of sentences over 18 months that are analyzed), but better than "indefinite".
- **COPPA since 1998** — one of the oldest US internet laws. Written in the AOL era, modernized for smart speakers and AI. It shows that a well-designed law **can last for decades**.
- **Poland and children+Alexa** — UODO did not initiate a separate proceeding. In Poland, regulations for children are weaker than in the US/UK. GDPR **Art. 8** + **the national act of 2018** govern.
- **Coalition of 19 organizations** — such a large coalition is rare in the US. It showed that **children's privacy** unites the left, the right, and religious organizations (Focus on the Family also signed on). A united front.
- **Center for Digital Democracy** — Jeff Chester, one of the oldest and most effective American children's privacy advocates. The organization has existed since 1991 and has been behind nearly every American children's reform.
- **Amazon Kids+ (formerly FreeTime Unlimited)** — an Amazon subscription for families ($9.99/month). Books, games, films for children. After the 2023 fine, Amazon limited data collection — but the business model requires knowledge of the child's preferences.
- **Voice cloning risk** — a child's voice in Amazon's database is potentially **material for voice deepfakes**. Parents are concerned: a child's recordings in the cloud could be used for deception ("your son had an accident, transfer money" — known scams since 2023 use voice cloning).
- **UK Children's Code (2020)** — the United Kingdom introduced the **Age-Appropriate Design Code** — 15 standards for digital services for children. A model for other jurisdictions. Poland (UODO) is planning an analogous code.

---

## Sources

1. Federal Trade Commission / Department of Justice, "FTC and DOJ Charge Amazon with Violating Children's Privacy Law by Keeping Kids' Alexa Voice Recordings Forever and Undermining Parents' Deletion Requests", May 31, 2023. URL: https://www.ftc.gov/news-events/news/press-releases/2023/05/ftc-doj-charge-amazon-violating-childrens-privacy-law-keeping-kids-alexa-voice-recordings-forever (accessed: 2026-04-17)

2. Center for Digital Democracy et al., "Complaint and Request for Investigation of Amazon's Alexa for Unlawfully Collecting, Using, and Sharing Children's Personal Information Without Parental Consent", May 9, 2019.

3. United States v. Amazon.com, Inc., Case No. 2:23-cv-00811 (W.D. Wash.), FTC Complaint, May 31, 2023.

4. Common Sense Media, "Smart Speakers and Kids", 2019.

5. Mozilla Foundation, "Privacy Not Included — Amazon Echo Dot Kids", 2019–2023.

6. COPPA — Children's Online Privacy Protection Act, 15 USC § 6501–6506.

7. COPPA Rule — 16 CFR Part 312.

8. FTC, "YouTube / Google settlement for $170 million for COPPA violations", 2019.

9. FTC, "Epic Games settlement for $520 million", 2022.

10. FTC, "Microsoft Xbox Live settlement for $20 million", 2023.

11. Samuel Levine, public statements, 2023.

12. Andy Jassy, Amazon response, 2023.

13. UK ICO, "Age-Appropriate Design Code", 2020.

14. EDPB, guidelines on children, 2020–2023.

15. NPR, CNN, NYT, WaPo — coordinated coverage on May 31, 2023.

---

*Last updated: 2026-04-17*
*Card in database: D03_coppa_alexa.md*
