---
id: C05
slug: c05-linkedin-ai-training
group: C
group_label: Apple, Microsoft, LinkedIn
title: LinkedIn AI Training
year_revealed: 2024
last_updated: '2026-04-17'
companies:
- LinkedIn
status: regulatory_monitoring
jurisdictions:
- EU
- UK
- global
legal_basis:
- RODO art. 6
- art. 7
- art. 21
- art. 22
fines:
- amount: 310000000
  currency: EUR
  authority: DPC Irlandia
  date: 2024-10
  category: regulatory_fine
  status: paid
whistleblowers:
- schrems
journalists: []
related_cases:
- A04
- E04
- E02
- B04
- A01
tags:
- trening-ai
- rodo
categories:
- privacy
geo_coords: []
priority: TOP
card_complete: true
word_count: 3782
explainer:
  src: /animations/c05-linkedin-ai-training.html
  duration: '60s'
  title: LinkedIn AI Training — training on profiles without voluntary opt-in
subtitle: Training on employee profiles without voluntary opt-in
years_active:
- 2003
- 2022
---

# C05 — LinkedIn AI Training: Training on employee profiles without voluntary opt-in

> **Category:** AI training / legitimate interest / opt-out by default / professional data
> **Company/companies:** LinkedIn (Microsoft)
> **Years:** September 2024 (discovery) – November 2025 (Irish DPC intervention)
> **Status:** EU rollout with restrictions; 5-month DPC monitoring; additionally, a €310 million fine in 2024 for behavioral analytics
> **Card ID:** C05

---

## Metadata

| Field | Value |
|------|---------|
| Country/region | Global; enforcement hotspots: Ireland (DPC), UK (ICO), national EU DPAs |
| Year revealed | September 18, 2024 (*404 Media*, *TechCrunch*) |
| Years of practice | 2003–2024 (data used for AI training); training practice: since ~2022 |
| Total fine | **€310,000,000** (Irish DPC, October 2024 — a separate, related case) |
| Currency | EUR |
| Legal basis | GDPR art. 6 (no valid basis), art. 7 (conditions for consent), art. 21 (objection), art. 22 (automated decisions) |
| Whistleblower/discoverer | ***404 Media*** (first discovery), ***TechCrunch*** (verification), **Irish DPC**, **Dutch DPA (AP)** |
| Number of affected | **1+ billion LinkedIn users globally** (200 million in EU/EEA) |
| Status (as of today) | EU rollout with restrictions following DPC intervention (November 2025); 5-month monitoring |

---

## TL;DR

**September 18, 2024** — *404 Media* (later followed by *TechCrunch*) revealed that **LinkedIn had quietly begun training its generative AI models on user data** — **without prior announcement and without consent**. Users in the US, UK, Australia, Japan, Canada, and India discovered a toggle in their settings labeled **"Data for Generative AI Improvement"**, which was **on by default**. LinkedIn **only after publication** updated its privacy policy, which took effect on **September 18, 2024**.

In the **EU and EEA**, LinkedIn did not activate training immediately (due to GDPR). Instead, in **March 2025**, it notified the **Irish DPC** of plans to begin training **AI on EU/EEA data starting November 3, 2025**. Legal basis: **legitimate interest** (art. 6(1)(f) GDPR). Scope: public posts, comments, profiles, **data back to 2003** (22 years). The DPC **raised concerns**, particularly regarding: (1) the scope and retention period, (2) protection of minors, (3) sensitive information (trade union membership, religion), (4) the right to object under art. 21 GDPR.

**November 7, 2025** — the Irish DPC published a statement: LinkedIn **agreed to changes**: (1) narrowing the scope of data and retroactive period, (2) better filtering of minors' data (<18 years), (3) filters preventing the collection of union-related information from special LinkedIn Pages and Groups, (4) a dedicated opt-out toggle + objection form, (5) **5-month DPC monitoring**. The DPC **did not approve** the practice — "*The DPC has not approved, or found compliant, LinkedIn's use of users' personal data for generative AI model training*" — but did not initiate formal enforcement proceedings.

**Separately**: **October 24, 2024** — the DPC imposes a **€310 million fine** on LinkedIn for a **separate GDPR violation** in analytics and advertising practices (original complaint by *La Quadrature du Net* from 2018 in France). Grounds: (1) lack of valid consent for processing third-party data, (2) contractual necessity does not justify processing first-party data, (3) legitimate interests do not justify either first-party or third-party data for analytics.

Case C05 illustrates **three important trends**:
1. **"Legitimate interest" as a basis for AI training** is being challenged by DPAs.
2. **Opt-out by default** for AI training — the standard practice of Meta, Google, LinkedIn, X — is incompatible with the spirit of GDPR (art. 7 requires *"freely given, specific, informed, unambiguous"* consent).
3. **"Chase-and-regulate"** — DPAs react **after the fact**, once a practice has already been deployed. A systemic limitation of GDPR enforcement before rollout.

---

## Timeline

- **2003** — LinkedIn founded (Reid Hoffman). Start of data collection.
- **2016** — Microsoft buys LinkedIn for **$26.2 billion**.
- **2018** — ***La Quadrature du Net*** (French digital rights organization) files complaints with the French CNIL regarding LinkedIn analytics and advertising. The case moves to the Irish DPC.
- **~2022** — LinkedIn begins using AI in features (generative text suggestions, job recommendations).
- **Early 2024** — LinkedIn begins training **its own generative AI** on user data (publicly revealed later).
- **September 2024** — LinkedIn **quietly** activates AI training in the US, UK, AU, JP, CA, IN.
- **September 18, 2024** — ***404 Media*** first reveals the practice (based on the actual UI setting). *TechCrunch* verifies.
- **September 18, 2024** — LinkedIn publishes a **privacy policy update** — **on the same day** as the publication. *Suspicious sequencing*: activation first, then policy.
- **September 2024** — Irish DPC: *"LinkedIn advised us that the policy would include an opt-out... This opt-out is not available to EU/EEA members as LinkedIn is not currently using EU/EEA member data to train or fine-tune these models."*
- **October 24, 2024** — DPC **€310 million fine** (separate case regarding behavioral analytics, 2018).
- **March 2025** — LinkedIn **notifies** the DPC of plans to train AI in the EU/EEA starting November 3, 2025.
- **September 2025** — Dutch DPA (AP) publicly warns about LinkedIn AI training; CNIL (France) issues guidance.
- **October 2025** — a series of DPAs (IE, NL, FR, DE) contact LinkedIn.
- **November 7, 2025** — **DPC statement**: LinkedIn agrees to changes. EU/EEA rollout from mid-November 2025 with restrictions and monitoring.
- **April 2026** (currently) — 5-month LinkedIn report expected by the DPC.

---

## Mechanism

### What LinkedIn does with user data

LinkedIn collects from users:
- **Profiles**: first name, last name, photo, headline, location, professional experience, education, skills, certifications, languages, courses
- **Posts and comments** (public)
- **Articles** (LinkedIn Pulse)
- **Messages** (**not** — these are private, but metadata about contacts is)
- **Interactions**: likes, reactions, shares
- **Analytics data**: clicks, time spent on others' profiles
- **Professional data**: jobs you've applied to, companies you follow

### LinkedIn generative AI models

Models being trained (as LinkedIn disclosed in a Q&A):
1. **Post Suggestions** — text suggestions for posts (similar to Grammarly, but inside LinkedIn).
2. **Message Suggestions** — suggested replies in LinkedIn Messaging.
3. **Profile Optimization** — suggestions for improving a profile (headline, "About").
4. **Job Recommendations** — job recommendation models.
5. **Search Results** — AI-powered search for people and companies.

LinkedIn also mentioned that data **"may be used by other providers"** — implicitly **Microsoft Azure OpenAI**. This means: LinkedIn user data **potentially flows** into Microsoft OpenAI models (a competitor of OpenAI itself).

### Why this is problematic

**Problem 1: Professional data is sensitive data.**
LinkedIn profiles contain:
- **Trade union membership** (if someone is a union member and writes about it)
- **Religious affiliation** (e.g., "Catholic University of Lublin" as alma mater; posts about religious holidays)
- **Political views** (posts, comments)
- **Health** (e.g., "I've been diagnosed with autism" posts, which are increasingly common)
- **Sexual orientation** (coming-out posts, employment with LGBTQ+ organizations)

GDPR **art. 9** defines these categories as **"special"** and requires **explicit consent** for processing. LinkedIn used **legitimate interest**, which DPAs deemed **insufficient**.

**Problem 2: Regurgitation and leakage.**
AI models can **reveal training data** in their responses. If your LinkedIn profile was used for training, theoretically **another user asking an AI could receive a fragment of your profile** or writing style. Cases of regurgitation in ChatGPT are well known (*NYT* quotes, GitHub code).

**Problem 3: Inability to object after the fact.**
LinkedIn stated clearly: *"Opting out means that LinkedIn and its affiliates won't use your personal data or content on LinkedIn to train models going forward, but does not affect training that has already taken place."* Translation: **if your data is already in the model, it cannot be "unlearned."** The model may continue to use knowledge derived from it.

**Problem 4: Children on LinkedIn.**
Formally, the minimum age is 16 (in some countries 13). But scholarship holders, high school students applying to universities, and young influencers create profiles. Their data may have been used without filters.

**Problem 5: Journalists, activists, whistleblowers.**
LinkedIn is used by journalists to build networks of contacts. Their profiles — including the names of contacts — are sensitive for source protection.

### The "Data for Generative AI Improvement" setting

In the LinkedIn interface:
- **Settings → Data Privacy → Data for Generative AI Improvement**
- Toggle: **on by default**
- Explanatory text: sufficiently obscured that many users didn't understand the consequences

Alternative: an objection form (Data Processing Objection Form) — **more formal**, but **more effective** (it initiates a procedure under art. 21 GDPR).

---

## Discovery

### Who *404 Media* is

***404 Media*** — a new independent American outlet (2023) founded by former editors of *Motherboard/VICE* (Jason Koebler, Samantha Cole, Joseph Cox, Emanuel Maiberg). Specialty: **technology and privacy, AI, surveillance, cyber underground**. It became known for exposing practices such as:
- Microsoft Activity Pattern Tracking
- TikTok content moderator trauma
- AI deepfakes and nonconsensual content
- **LinkedIn AI training** (September 2024)

Business model: **reader subscriptions** (not ads). On September 18, 2024, Samantha Cole published the first article about the LinkedIn AI opt-out toggle.

### TechCrunch follow-up

***TechCrunch*** (Amanda Silberling, Zack Whittaker) verified and expanded the reporting within hours. Key point: drawing attention to the fact that LinkedIn **updated its privacy policy *on the same day*** as the publication — suggesting that **training had begun earlier**, without the policy.

### DPC and other DPAs — the regulatory path

- **Irish DPC**: Commissioner Dale Sunderland. Held a meeting with LinkedIn in October 2024, followed by negotiations from March to October 2025.
- **Dutch DPA (AP)**: actively issued public warnings in September–October 2025.
- **CNIL (France)**: published opt-out instructions in October 2025.
- **ICO (UK)**: received complaints from the Open Rights Group.
- **noyb (Max Schrems)**: criticism: *"Opt-out model proves once again to be wholly inadequate"*.

### First publications

- **September 18, 2024** — Samantha Cole, *404 Media*, "LinkedIn Is Training AI on Users Without Having Updated Its Terms"
- **September 18, 2024** — *TechCrunch*: "LinkedIn scraped user data for training before updating its terms of service"
- **September 18, 2024** — *Reuters*, *Bloomberg*, *The Verge* — quick follow-ups
- **September 19, 2024** — Irish DPC statement
- **November 7, 2025** — DPC statement on the EU rollout

---

## Key people

### LinkedIn / Microsoft

- **Ryan Roslansky** — CEO of LinkedIn since 2020.
- **Blake Lawit** — General Counsel of LinkedIn, author of the public statement on policy changes.
- **Ya Xu** — SVP Engineering, Data & AI.
- **Satya Nadella** — CEO of Microsoft. Strategic oversight.

### Regulators

- **Dale Sunderland** — Commissioner of the Irish DPC (alongside Des Hogan as chair).
- **Aleid Wolfsen** — chair of the Dutch AP (Autoriteit Persoonsgegevens) until 2024.
- **Marie-Laure Denis** — chair of CNIL.
- **John Edwards** — UK Commissioner.

### Critics

- **Max Schrems / noyb** — the most active critic.
- **Mariano delli Santi** — Open Rights Group UK, legal and policy officer.
- ***La Quadrature du Net*** — French organization behind the original 2018 complaint.

### Journalists

- **Samantha Cole** (*404 Media*) — primary discoverer.
- **Amanda Silberling, Zack Whittaker** (*TechCrunch*).

---

## Company response

### LinkedIn

**Phase 1: quiet rollout (September 2024).** LinkedIn activated AI training in the US, UK, AU, JP, CA, IN **without prior announcement**. The "Data for Generative AI Improvement" toggle appeared in settings. Users who didn't notice it = everyone was voluntarily opted in.

**Phase 2: reaction to publication (September 18, 2024).** On the same day as the *404 Media* story, LinkedIn **updates its privacy policy**. Blake Lawit (GC) blog post:
*"As technology and our business evolves, and the world of work changes, we remain committed to providing clarity about our practices and keeping you in control of the information you entrust with us."*

**Phase 3: halt in the EU (September 2024).** The Irish DPC confirms that LinkedIn is **not training on EU/EEA data** at this stage.

**Phase 4: negotiations with DPAs (March–November 2025).** LinkedIn notifies the DPC of its plans in March 2025. Negotiations over scope.

**Phase 5: limited EU rollout (November 2025+).** Scope narrowed, opt-out improved, children excluded, filters for sensitive data added.

**Note**: LinkedIn **originally announced** the policy via its own blog post on LinkedIn — and **disabled comments on the post**, even though comments were enabled on other posts. PR strategy: **don't let users publicly voice dissatisfaction**.

### Microsoft

The parent company (since 2016) — Satya Nadella in public communications **did not directly address** the matter, leaving communication to LinkedIn.

---

## Legal proceedings

### Jurisdictions

- **Ireland** — DPC (lead supervisory authority under the one-stop-shop)
- **Netherlands** — AP
- **France** — CNIL
- **United Kingdom** — ICO
- **USA, Australia, Japan, Canada, India** — no formal regulation of AI training (for now)

### Legal basis

- **GDPR art. 6(1)(f)** — legitimate interest — **contested** by the DPC for AI training
- **GDPR art. 7** — conditions for consent
- **GDPR art. 9** — special categories of data (trade union membership, health, religion)
- **GDPR art. 13, 14** — obligation to inform
- **GDPR art. 21** — right to object
- **GDPR art. 22** — automated decision-making
- **GDPR art. 35** — DPIA (Data Protection Impact Assessment)

### Key stages

| Date | Stage |
|------|------|
| September 18, 2024 | Disclosure |
| September 2024 | DPC reaction |
| October 24, 2024 | €310 million fine (separate case) |
| March 2025 | LinkedIn notifies DPC of EU plans |
| November 2025 | DPC statement, changes to terms, EU rollout |
| April 2026 | 5-month report (expected) |

### Related case law

- ***La Quadrature du Net* v. LinkedIn** — original 2018 complaint.
- **CJEU C-252/21, Meta v. Bundeskartellamt (2023)** — precedent on consent in the context of behavioral advertising.
- **Meta cases A09 and A10** — analogous challenges concerning legitimate interest.
- **EDPB Opinion 28/2024 on AI training data** — key EDPB opinion on AI training.

---

## Penalties and settlements

| Date | Authority | Amount | Jurisdiction | Basis |
|------|-------|-------|-------------|----------|
| October 24, 2024 | Irish DPC | **€310,000,000** | EU | GDPR art. 6 (analytics/advertising, 2018 case) |

**Note:** the €310 million fine does not directly concern AI training, but a **related case** on behavioral advertising (original 2018 complaint). It was announced **a month after** the AI training story broke — part of the DPC's broader strategy toward LinkedIn.

**For AI training — no fine**, but the **threat** from the DPC was enough to make LinkedIn back down.

---

## Precedents and implications

### For EU law

- **EDPB Opinion 28/2024 on AI training** (December 2024) — published **in the middle of the LinkedIn dispute**. It set standards for AI training on personal data. Key points: legitimate interest **may** be a basis, but it requires **very strict** DPIA, **better notification**, **effective opt-out**, **filtering of sensitive data**.
- **The LinkedIn case as a test case** for EDPB guidelines.

### For US law

- **No federal regulation** of AI training. The US monitors practices but does not block them.
- **California AB 2013 (2024)** — requires transparency regarding AI training data.

### For Big Tech practice

- **OpenAI, Anthropic, Google DeepMind** — all have increased transparency around training data.
- **Meta AI** — suspended plans to train on EU user data (2024), restarted after DPA approval in 2025.
- **X (Twitter)** — under Elon Musk, uses data to train Grok; opt-out similar to LinkedIn.
- **Reddit, Stack Overflow** — sell training data to AI companies (controversial — users did not consent).

### Impulse for **model cards** and **training data disclosure**

The case accelerated the requirement for AI models to publish **training datasets** (or their characteristics). EU AI Act (2024/1689) **art. 53** — transparency requirements for general-purpose AI.

---

## Class actions

No known formal class actions (as of today). Potential avenues:
- **USA** — class action under state privacy law (Illinois BIPA theoretically, but it covers biometrics).
- **EU** — group lawsuits under GDPR art. 82 are possible, but Lloyd v. Google (UK) discouraged them.

---

## Conclusions for citizens

### What does this mean for me?

If you have a LinkedIn account — **your data is likely in the AI models**. For users in the US, UK, AU, JP, CA, IN — training **has already taken place** and cannot be "reversed." For the EU — LinkedIn declares it did not train on EU data until November 2025, but this is based on LinkedIn's self-reporting — hard to verify.

What does your LinkedIn profile contain? Often **more than you think**:
- Your entire career history (dated, with company names)
- Your network of contacts (visible to connections)
- Skills, languages, courses
- Opinions (from posts)
- In some cases: sensitive data (religion, unions, health)

### How to protect yourself?

**Immediate steps (3 minutes):**

1. **Turn off AI training** on LinkedIn:
   - Settings → Data Privacy → **Data for Generative AI Improvement** → TURN OFF
   - On mobile: profile → Settings → Data Privacy → AI setting
2. **File a formal objection** under art. 21 GDPR:
   - Settings → Data Privacy → **Data Processing Objection Form** → fill out
3. **Check what LinkedIn knows about you**:
   - Settings → Data Privacy → **Download your data** → request the full archive. You'll get a ZIP with everything (usually within 24h).

**Long-term:**

4. **Reduce your LinkedIn profile**:
   - Remove sensitive information from "About" (religion, views, health status)
   - Archive old posts (Your posts → Archive)
   - Change profile visibility settings (public/connections/no one)
5. **Turn off "Research data"** — a separate setting, check it.
6. **Consider deleting your account**:
   - Settings → Account → Close account
   - But note: LinkedIn may retain data for some time after deletion

### What rights do I have?

**In the EU (GDPR):**
- **Art. 21** — right to object to processing based on legitimate interest. Very strong in the AI training context.
- **Art. 15** — right of access to your data.
- **Art. 16** — right of rectification.
- **Art. 17** — right to be forgotten ("right to erasure").
- **Art. 82** — right to compensation for damages.

**Note**: **art. 17 does not force "unlearning" of a model**. If your data has already entered a training model, **technically it cannot be rolled back** without retraining the whole model. The right to be forgotten in the context of AI training is a **developing area** (EDPB Opinion 28/2024).

**In the US:**
- **California CCPA/CPRA** — limited right to "opt out of sale/share." Californians can object.
- **Illinois BIPA** — biometrics only.
- **Federal** — no rights.

### Where to file a complaint?

- **Poland**: UODO
- **EU**: your national DPA (for LinkedIn: Irish DPC via the one-stop-shop)
- **UK**: ICO
- **noyb**: noyb.eu — pursues strategic complaints

### Note for mediators, lawyers, HR professionals

**For recruiters and HR:**
1. If you use LinkedIn Recruiter + AI features, you are **subject to a DPIA** for the candidate data processing.
2. **GDPR art. 22** — automated decisions in recruitment may be prohibited.
3. The candidate has the right to know that **AI analyzed their profile** before the decision.

**For mediators and lawyers:**
1. If your LinkedIn profile is rich in sensitive data — **consider restricting** its visibility.
2. **Cyberstalking after divorce** — a former partner may use LinkedIn as a source of information about a new job, life changes, network of contacts. Consider disabling visibility of **Your Network** and **Your Recent Activity**.
3. **For clients in a crisis situation** — recommend temporarily restricting the profile or archiving it.

**For journalists and activists:**
4. Your LinkedIn network may **reveal sources**. Connections are visible to other connections.
5. Consider a **second account** for public work vs. personal use.

---

## Context

- **"Same day as the publication"** — LinkedIn updated its privacy policy on **September 18, 2024** — on the same day as the *404 Media* disclosure. Critics: LinkedIn **could not** have updated the policy in line with its customary practices (usually updates are announced 30 days in advance). This was **crisis suppression**, not a normal update.
- **Comments disabled** — LinkedIn **disabled comments** on its own post about AI training, even though comments were enabled on other posts. PR strategy: don't let users publicly voice dissatisfaction in the same place where the policy is announced.
- **22 years of data** — LinkedIn planned to use data **from 2003** (the founding date). That means: **the first post you made as a 19-year-old student** could have been used to train AI 22 years later. Retroactivity **without consent**.
- **"Data for generative AI improvement"** — the setting name was designed to look innocuous. "Improvement" suggests help for the user; in reality: training LinkedIn's business model.
- **Separate €310 million fine** — irony: the DPC imposes €310 million **a month after** the AI training story broke. The fine concerns a **different** matter (behavioral analytics from 2018), but the timing suggests the DPC is **using this fine as a signal** to LinkedIn: *"don't try with AI training what you did with analytics"*.
- **La Quadrature du Net** — the French organization that filed the original 2018 complaint. The case took 6 years. Comment from the director of La Quadrature: *"Six years to a fine. Facebook got €1.2 billion in 4 years. Justice moves slowly, but it moves."*
- **Microsoft distance** — Satya Nadella did not address the matter directly. Microsoft runs LinkedIn as **"standalone"** — but all AI decisions are **coordinated** with the broader Azure OpenAI strategy.
- **EDPB Opinion 28/2024** — issued in **December 2024**, after the LinkedIn disclosure. It sets the **framework** for AI training on personal data: there must be a **DPIA**, **notification**, **effective opt-out**, **filtering of sensitive data**. The LinkedIn case had a direct influence.
- **Polish context** — in Poland, LinkedIn has ~4 million users (2024). Many HR specialists, recruiters, lawyers, and managers have rich profiles. The Polish UODO **did not open a separate proceeding** (the case is under the Irish DPC), but it **published translations** of setting changes in 2025.
- **"Opt-out vs opt-in"** — a fundamental difference. **Voluntary opt-in** (you have to actively agree) → few users would have agreed to AI training. **Opt-out** (on by default, you have to actively turn it off) → 95%+ of users **do not turn it off**. Even if they notice, inertia wins. That is why Big Tech **prefers opt-out** for practices it doesn't want to announce loudly.
- **noyb's Mariano delli Santi**: *"The opt-out model proves once again to be wholly inadequate to protect our rights: the public cannot be expected to monitor and chase every single online company that decides to use our data to train AI. Opt-in consent isn't only legally mandated, but a common-sense requirement."*
- **Signal not on LinkedIn** — many tech company employees deliberately **do not have LinkedIn**. Meredith Whittaker (Signal) is an exception — she has a LinkedIn, but very limited. Moxie Marlinspike (former Signal CEO) — **does not have** LinkedIn.
- **Reddit/Stack Overflow precedent** — both companies **sell data** to AI companies (OpenAI, Google DeepMind, Anthropic). The Stack Overflow community organized a **strike** against this in 2024. Reddit had a series of protests in 2023–2024. LinkedIn avoided such mobilization — **LinkedIn users are more passive** than Reddit's.
- **AI training for hiring decisions** — LinkedIn AI may be used by companies to **filter candidates**. This is subject to **GDPR art. 22** (prohibition of decisions based solely on automated processing) and **NYC Local Law 144** (requires bias audits for AI in hiring, 2023).

---

## Sources

1. Samantha Cole, "LinkedIn Is Training AI on Users Without Having Updated Its Terms", *404 Media*, September 18, 2024. URL: https://www.404media.co/linkedin-is-training-ai-on-users-without-having-updated-its-terms/ (accessed: 2026-04-17)

2. Amanda Silberling, Zack Whittaker, "LinkedIn scraped user data for training before updating its terms of service", *TechCrunch*, September 18, 2024. URL: https://techcrunch.com/2024/09/18/linkedin-scraped-user-data-for-training-before-updating-its-terms-of-service/ (accessed: 2026-04-17)

3. Data Protection Commission Ireland, "DPC statement on LinkedIn AI Training", November 7, 2025. URL: https://www.dataprotection.ie/en/news-media/latest-news/dpc-statement-linkedin-ai-training (accessed: 2026-04-17)

4. Data Protection Commission Ireland, decision in the LinkedIn case — €310 million fine, October 24, 2024.

5. Blake Lawit, "Sharing our AI commitments", LinkedIn Official Blog, September 2024.

6. European Data Protection Board, "Opinion 28/2024 on certain data protection aspects related to the processing of personal data in the context of AI models", December 2024. URL: https://www.edpb.europa.eu

7. CNIL, opt-out guidance for LinkedIn AI training, October 2025.

8. Autoriteit Persoonsgegevens (Dutch DPA), public warning on LinkedIn AI training, October 2025.

9. Irish Legal News, "LinkedIn changes AI plan after DPC intervention", November 10, 2025.

10. MLex, "LinkedIn revises EU AI training plans after Irish regulator's risk flagging", November 7, 2025.

11. IAPP, "Irish DPC details legitimate interest prong of its LinkedIn enforcement action", November 2024.

12. Pinsent Masons (Andreas Carney), "LinkedIn changes gen-AI training plans after data watchdog intervenes", December 2025.

13. Open Rights Group, call to ICO, September 2024.

14. noyb, statement on LinkedIn AI training, September 2024.

15. EU AI Act (Regulation (EU) 2024/1689).

---

*Last updated: 2026-04-17*
*Card in database: C05_linkedin_ai.md*
