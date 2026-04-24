---
id: C03
slug: c03-apple-csam
group: C
group_label: Apple, Microsoft, LinkedIn
title: Apple CSAM
year_revealed: 2021
last_updated: '2026-04-17'
companies:
- Apple
status: concluded
jurisdictions:
- US
- UK
- global
legal_basis:
- 18 USC § 2255
- stanowe prawa o odpowiedzialności za produkt
fines: []
whistleblowers:
- schrems
- snowden
journalists: []
related_cases:
- C02
- E01
- D02
- C01
- D01
tags:
- dzieci
- pracownicy
- sygnalista
categories:
- privacy
geo_coords: []
priority: STANDARD
card_complete: true
word_count: 3418
explainer:
  src: /animations/c03-apple-csam.html
  duration: '60s'
  title: CSAM Detection — the plan to scan iPhones locally
subtitle: The unshipped photo scanner as a collision between privacy and child protection
---

# C03 — Apple CSAM: The unshipped photo scanner as a collision between privacy and child protection

> **Category:** On-device scanning / child safety vs privacy / conflict of fundamental rights
> **Company/companies:** Apple
> **Years:** August 2021 (announcement) – December 2022 (project abandoned) – December 2024 (victim lawsuit)
> **Status:** Feature never deployed; CSAM victim lawsuit 2024 ongoing
> **Card ID:** C03

---

## Metadata

| Field | Value |
|------|---------|
| Country/region | Global (Apple product); proceedings: USA |
| Year revealed | August 5, 2021 (Apple announces the feature) |
| Years the practice ran | None — feature never went live |
| Total penalties | None (not deployed); victim lawsuit seeking potentially **$1.2B+** for ~2,680 victims |
| Currency | USD |
| Legal basis | 18 USC § 2255 (Masha's Law, $150,000 minimum per victim); state product liability laws |
| Whistleblower/discoverer | Apple announced it itself; criticism from **Edward Snowden**, **EFF**, **Matthew Green** (Johns Hopkins), Apple employees |
| Number of people affected | Value collision: **2,680+ CSAM victims** (per 2024 lawsuit) vs **1+ billion iCloud users** |
| Status (today) | Feature abandoned; Jane Doe v. Apple (2024) may force revival or damages |

---

## TL;DR

On **August 5, 2021**, Apple announced plans to roll out **three new child-safety features** — including the most controversial, **"CSAM Detection"**: a system that would **scan user photos on-device** as they were uploaded to iCloud Photos, comparing their **NeuralHash** fingerprints against a database of known child sexual abuse material (CSAM) supplied by the **National Center for Missing & Exploited Children (NCMEC)**. Once a threshold of ~30 matches was crossed, Apple would **manually review the photos and report them to NCMEC**, then to law enforcement. The goal: fight CSAM without cloud scanning (unlike Google, Meta, and Microsoft).

The reaction was **unprecedented**. Within weeks more than **90 civil-liberties organizations** (EFF, CDT, ACLU, OpenMedia, Access Now, WITNESS) signed an open letter against the feature. **Edward Snowden**: *"Apple is rolling out mass surveillance to the entire world."* Security experts (**Matthew Green, Johns Hopkins**; **Carmela Troncoso, EPFL**; **Sarah Jamie Lewis**) published analyses showing how the system could be **co-opted by authoritarian governments** to scan other content (protest imagery, political memes). Apple's own staff — **rarely** — voiced dissent publicly. Former Facebook security chief **Alex Stamos** called it "the biggest Apple PR disaster in history."

On **September 3, 2021**, Apple **delayed** the rollout. On **December 15, 2021**, Apple **removed all references** from its Child Safety page. On **December 7, 2022**, Apple officially **abandoned** the project: *"We have decided to not move forward with our previously proposed CSAM detection tool for iCloud Photos."* Apple framed it as a privacy argument: *"Children can be protected without companies combing through personal data."*

On **December 8, 2024**, **Jane Doe**, a 27-year-old CSAM survivor, **sued Apple** in federal court in the Northern District of California. The allegation: Apple **promised** scanning, then **walked away**, so Apple knows that iCloud contains material from her abuse but does nothing about it. The suit covers up to **2,680 victims**, with potential liability of **$1.2B+** ($150,000 minimum per victim under **18 USC § 2255 / Masha's Law**). In August 2024 a similar suit was filed by a **9-year-old victim** in North Carolina — strangers had sent her CSAM via iCloud links.

For scale: in 2022 **Meta reported 27 million CSAM reports to NCMEC**. **Google: 2.2 million. Apple: 234 reports.** Critics say Apple protects privacy at the cost of a non-functioning CSAM reporting pipeline. Apple's position: we protect privacy precisely by not scanning in the cloud.

C03 sits in the database as a **fascinating case of collision between two values** — **privacy vs child protection** — with no simple resolution. There is no fine. There is an open lawsuit and questions for the entire industry.

---

## Timeline

- **2008** — Microsoft develops **PhotoDNA**, the hash system for detecting CSAM (adopted by most platforms).
- **2014** — iCloud Photos launches.
- **2019** — Apple begins scanning **iCloud Mail** for CSAM (revealed only retrospectively in August 2021 by 9to5Mac).
- **August 5, 2021** — Apple announces **three Child Safety features**: (1) **CSAM Detection** in iCloud Photos, (2) **Communication Safety** in Messages, (3) expanded Siri/Search guidance.
- **August 6–18, 2021** — **wave of criticism**. More than 90 organizations sign an open letter. EFF, Snowden, Matthew Green, Carmela Troncoso, Apple employees.
- **August 13, 2021** — Craig Federighi (SVP Software), in an interview with Joanna Stern (*WSJ*): the system is *"widely misunderstood."*
- **August 18, 2021** — researchers demonstrate a **NeuralHash collision** — two different images producing the same hash. Apple responds: *"behaves as described."*
- **September 3, 2021** — Apple **delays** the rollout.
- **December 14, 2021** — **Communication Safety** (the less controversial feature) ships in iOS 15.2. CSAM Detection does not.
- **December 15, 2021** — Apple **removes references** to CSAM Detection from its site.
- **December 7, 2022** — Apple **officially abandons** the project. Statement: *"We have decided to not move forward."*
- **August 2024** — suit filed by a 9-year-old CSAM victim in North Carolina.
- **December 8, 2024** — **Jane Doe v. Apple** — federal suit in the Northern District of California, potentially 2,680 victims, $1.2B.
- **2025–2026** — hearings, motions. The case is ongoing.

---

## Mechanism

### The planned system (never deployed)

**Three components:**

**1. CSAM Detection in iCloud Photos** (the most controversial):
- Photos uploaded to iCloud Photos would be **hashed locally** by the **NeuralHash** algorithm (a perceptual neural-network hash, not a cryptographic one).
- The hash would be compared against an **encrypted set of CSAM hashes** supplied by NCMEC (in Apple's **Private Set Intersection + Threshold Secret Sharing** format).
- Apple would **not see** individual matches.
- Once a **threshold** (~30 matches) was crossed, Apple would receive the **keys to decrypt the safety vouchers** and could review the images.
- **Human review** before any report to NCMEC.
- **False positives**: Apple estimated **1 in 1 trillion per year**.

**2. Communication Safety in Messages**:
- iMessage would **scan images locally** sent or received by children (under 13 on a family Apple account).
- If nudity was detected, the image would be blurred and a warning displayed.
- Optionally: the parent received a notification (controversial — later dropped).
- Launched in December 2021, **still operating**.

**3. Siri/Search guidance**:
- If a user searched for CSAM in Safari or Siri, they would see a warning and links to help resources.
- Launched, **still operating**.

### Why CSAM Detection was controversial — four lines of critique

**Line 1: On-device scanning = a backdoor.**
Matthew Green (Johns Hopkins): *"This is an Apple-operated surveillance system for content on users' devices."* The core worry: **precedent**. If Apple accepts that it can scan iPhones for CSAM, authoritarian governments can demand scanning of **other content** (political memes, Tiananmen imagery, LGBT+ symbols).

**Line 2: NeuralHash is not secure.**
Within weeks of the announcement, researchers found **collisions** (two different images with the same hash). Possibility of **adversarial attacks**: a malicious actor could tweak an innocuous photo so its hash matched known CSAM — and send it to a user, framing the victim for false accusation.

**Line 3: Mission creep.**
EFF: *"Mission creep is a foregone conclusion."* China, India, Turkey, Saudi Arabia, Iran — governments that have repeatedly required Apple to implement local restrictions (pulling apps, on-soil encryption). If CSAM Detection existed, governments could demand scanning of other content.

**Line 4: Effectiveness is dubious.**
Critics: real CSAM offenders **don't use iCloud Photos with sync turned on**. They use encrypted drives, Tor, darknet markets. On-device scanning would mostly hit **careless amateurs**, while the cost of the system was enormous.

### How Apple argued in favor

- **Privacy by design**: on-device scanning is **more private** than cloud scanning (as done by Google and Meta).
- Apple **would not see** non-matching photos.
- The system **"was not for governments"** — hash keys came solely from NCMEC.

### What remained of the idea (2024+)

Apple dropped **CSAM Detection** in iCloud. Instead:
- **Advanced Data Protection** for iCloud (2022) — **end-to-end encryption** for iCloud Photos (opt-in). This **effectively prevents** Apple from scanning in the cloud.
- Apple now reports to NCMEC only via **Communication Safety** and encounters via limited email-based reports.
- **Communication Safety** was extended to adults in 2024 (without parental notification).

---

## Discovery

### Who pushed back — a "coalition of strange bedfellows"

The CSAM case united **radically different camps**:

- **Civil-society organizations**: EFF, ACLU, Access Now, OpenMedia, WITNESS, CDT, Tactical Tech, noyb.
- **Security experts**: Matthew Green (Johns Hopkins University), Carmela Troncoso (EPFL), Sarah Jamie Lewis (Open Privacy Research Society), Alec Muffett, Bruce Schneier.
- **Whistleblowers**: Edward Snowden warned of **"mass surveillance."**
- **Former Facebook security chief**: Alex Stamos called it "Apple's biggest PR disaster."
- **Apple employees**: Apple's internal Slack (leaked to *Reuters*) contained **more than 800 messages** from staff voicing concern.
- **Journalists**: Joanna Stern (*WSJ*) — critical interview with Federighi; Alex Heath (*The Verge*) — in-depth analysis.

### Early critical coverage

- **August 5, 2021** — Matthew Green, Twitter: the first high-profile warnings.
- **August 6, 2021** — EFF, "Apple's Plan to 'Think Different' About Encryption Opens a Backdoor to Your Private Life."
- **August 19, 2021** — open letter by 90+ organizations.
- **October 2021** — Matthew Green et al., academic paper "Bugs in our Pockets: The Risks of Client-Side Scanning" — the heaviest academic critique.

### The 2024 lawsuit

On **December 8, 2024** — *Jane Doe v. Apple Inc.*, N.D. California. Jane Doe (court pseudonym) is a 27-year-old CSAM survivor abused as a child by a relative. Her images have circulated online for years. Allegation: Apple **promised CSAM Detection in 2021**, then **abandoned it in 2022**. Apple **knows** that iCloud contains material from Jane Doe's abuse (NCMEC hashes in the database) but **does not report** (Apple reported only 234 CSAM instances in 2022 — 27 million for Meta for context). The suit covers up to **2,680 victims** from the NCMEC database whose materials circulate. Potential liability: **$1.2B+**.

---

## Key people

### Apple

- **Tim Cook** — CEO. For years positioned Apple as a "privacy company." CSAM was in direct conflict with that narrative.
- **Craig Federighi** — SVP Software Engineering. The main public defender in August 2021. His interview with Joanna Stern (*WSJ*, August 13, 2021) — an unsuccessful attempt at explanation.
- **Erik Neuenschwander** — Director of Privacy at Apple. The system's technical architect. In 2023, in a response to the Heat Initiative: *"Scanning every user's privately stored iCloud data would create new threat vectors for data thieves."*
- **Jennifer Bailey** — VP Apple Pay, involved in NCMEC relations.

### Academic critics

- **Matthew Green** — professor, Johns Hopkins, cryptography. One of the most important critics. Co-author of "Bugs in our Pockets."
- **Carmela Troncoso** — professor, EPFL, privacy and security. Co-author of the analysis.
- **Sarah Jamie Lewis** — Open Privacy Research Society, Vancouver.
- **Bruce Schneier** — Harvard, security.

### Whistleblowers / activists

- **Edward Snowden** — the best-known critic of global surveillance.
- **Alex Stamos** — Stanford Internet Observatory, former head of security at Facebook.

### NCMEC and child-protection organizations

- **John Shehan** — VP, NCMEC. Supported Apple's plan in 2021. After the abandonment, criticized Apple publicly.
- **Heat Initiative** — organization lobbying for CSAM Detection. Founded in 2023 in response to Apple's abandonment.

### Litigation

- **Jane Doe** (pseudonym) — lead plaintiff in the December 2024 suit.
- **Marsh Law Firm** (New York) — firm specializing in CSAM and abuse-victim cases.

---

## Company response

### Apple, August 2021 – December 2022

**Stage 1: defense (August 2021).** Apple publishes FAQs, white papers, gives interviews (Federighi with *WSJ*). Argument: "Privacy by design."

**Stage 2: delay (September 2021).** *"Based on feedback from customers, advocacy groups, researchers and others, we have decided to take additional time over the coming months to collect input and make improvements."*

**Stage 3: quiet removal of references (December 2021).** From the Child Safety page.

**Stage 4: abandonment (December 2022).** Statement to *Wired* (Lily Hay Newman): *"Children can be protected without companies combing through personal data, and we will continue working with governments, child advocates, and other companies to help protect young people, preserve their right to privacy, and make the internet a safer place for children and for us all."*

**Stage 5: lawsuits (2024+).** In the Jane Doe case, Apple argues that it has no legal obligation to deploy a system it **announced**.

### Communication Safety (2021+)

The feature **was deployed** in iOS 15.2 (December 2021). In 2022–2024 it was expanded:
- Extended to the UK (2022), more countries in 2023.
- Option for adult accounts (2024).
- **Parental notification dropped** (after criticism that it could endanger LGBT+ children in abusive households).

---

## Legal proceedings

### Jurisdictions

- USA — *Jane Doe v. Apple* (N.D. Cal. 2024), the 9-year-old's case (NC 2024)

### Legal basis

- **18 USC § 2255** ("Masha's Law," since 2006) — $150,000 minimum damages for CSAM victims if a company knew or should have known.
- **18 USC § 2258A** — obligation for platforms to report CSAM to NCMEC.
- **Product law** — liability for a product that was promised and then withdrawn.
- **Negligent misrepresentation** — 2021 promise not fulfilled.

### Key milestones

| Date | Stage |
|------|------|
| August 5, 2021 | Apple announces |
| August 2021 | Wave of criticism |
| September 2021 | Delay |
| December 2022 | Abandonment |
| August 2024 | 9-year-old's suit (NC) |
| December 8, 2024 | Jane Doe v. Apple (N.D. Cal.) |

### Precedents and analogues

- ***New York v. Meta*** (A08) — analogous conflicts: child safety vs platform architecture.
- ***In re Social Media Addiction MDL 3047*** — related federal proceeding.
- Apple in the UK — the **Online Safety Act 2023** has similar controversy over end-to-end encryption.

---

## Penalties and settlements

**None** — the feature was never deployed, so there are no regulatory penalties. **Potential liability**: up to $1.2B+ in Jane Doe v. Apple.

---

## Precedents and implications

### Global significance

- **Client-side scanning (CSS)** as a concept became a subject of regulatory debate.
- **UK Online Safety Act 2023** — contains a clause allowing regulators to demand "client-side scanning" from platforms — Apple publicly refused to ship iMessage in the UK if that requirement were enforced.
- **EU CSAM Regulation** (draft 2022, still debated) — would require platforms to scan communications. Apple lobbies against it.
- **Australia**: the eSafety Commissioner backs client-side scanning.

### For EU law

- **E2E encryption vs child safety** — debate around **Article 6 of the CSAM Regulation** (draft 2022): Chat Control. A broad coalition against: EDRi, Pirate Party, noyb, some DPAs. The draft has been repeatedly rejected.
- **Germany, Austria, Netherlands** — against. **France, Ireland, Spain** — in favor. Blocked in the EU Council.

### For Big Tech practice

- **Microsoft PhotoDNA** (cloud scanning) remains the standard.
- **Signal, Wire, Session** — E2E messengers do not scan and have no such plans.
- **Meta WhatsApp** — E2E since 2016, does not scan content, reports metadata and user reports.
- **Google** — cloud scanning of Gmail, Photos, Drive (not on-device).

---

## Class actions

| Case | Court | Status | Value | Affected |
|--------|-----|------|---------|--------------|
| *Jane Doe v. Apple Inc.* | N.D. Cal. | Active since 12.2024 | Potentially $1.2B+ | Up to 2,680 CSAM victims |
| 9-year-old's case | NC court | Active since 8.2024 | Undetermined | Individual |

---

## Conclusions for citizens

### What does this mean for me?

The Apple CSAM case is an **atypical** entry in this database — there was no penalty, no revelation of a harmful practice. There was an **announcement** of a system, **widespread criticism**, and an **abandonment**. But it is worth understanding because it is **the first great digital-era debate** over **a collision of two fundamental rights**: protecting children from abuse vs protecting privacy.

If you are a parent: today **no major platform scans your phone on-device**. Google, Microsoft, and Meta scan in the cloud (when you upload an image to their servers). Apple **does not scan** — which is both an argument for and against. For: privacy. Against: Apple reports a fraction of what competitors do (234 vs Meta's 27 million in 2022).

### How to protect children online?

1. **Use Communication Safety** on your child's iPhone: Settings → Screen Time → Content & Privacy Restrictions → Communication Safety. The feature still works.
2. **Family Sharing** with appropriate restrictions.
3. **NCMEC, Dyżurnet.pl** — report CSAM if you see it.
4. **Talk to your child** about recognizing grooming (see A08).

### What are my rights here?

**As a CSAM victim:**
- In the US: **18 USC § 2255** — $150,000 minimum in damages.
- In Poland: criminal law prosecutes CSAM (Article 202 § 3 of the Criminal Code); civil damages are possible.
- **NCMEC** maintains a hash database; Poland's Dyżurnet.pl cooperates.

**As a user worried about scanning:**
- Turn on **Advanced Data Protection** for iCloud (Apple) — E2E encryption prevents Apple from scanning.
- Use **Signal** for communication (E2E + no scanning).
- **E2E encryption in iMessage** — default.

### A note for mediators and lawyers

In divorce cases and custody determinations:
1. **Key question**: does the child use iCloud Photos with sync? If an adult in the household had access, photos of the child may have circulated.
2. **Post-divorce cyber-stalking** — the perpetrator may still have login credentials for a shared iCloud account. Response: change passwords, disable Family Sharing.
3. **Messengers for children** — Messenger Kids (Meta), Signal for older children. iMessage with Communication Safety.
4. **As a lawyer specializing in children's rights** — track *Jane Doe v. Apple*; the precedent may reshape platform obligations.

---

## Context

- **"Apple and the 234 reports"** — in 2022 Apple reported **234 CSAM instances** to NCMEC. Meta: **27,000,000**. Google: **2,174,548**. Microsoft: **107,274**. Apple's defense: it scans only email and only a few places, out of respect for privacy. Critics: Apple knows the material is there, but doesn't look.
- **The "strange bedfellows" coalition** — the case united people who rarely stand together: **EFF + ACLU** (privacy liberals) + **Edward Snowden** (radical libertarian) + **Alex Stamos** (ex-Facebook security) + **800 Apple employees** + **religious extremists** worried about meme scanning + **Chinese dissidents** worried about mission creep.
- **NeuralHash collision in 18 days** — Apple unveiled the system on August 5. On **August 18, 2021**, researchers on GitHub/Reddit found NeuralHash collisions. The system "behaves as described," Apple responded — but demonstrating collisions in such a short time was a PR debacle.
- **"Heat Initiative"** — an organization founded in 2023 to lobby for Apple's CSAM Detection, funded by child-safety donors. Its letter to Apple prompted Neuenschwander's reply: *"Scanning every user's privately stored iCloud data would create new threat vectors for data thieves to find and exploit."* That sentence became Apple's **public pivot**.
- **Advanced Data Protection (2022)** — **a week after abandoning CSAM**, Apple announced E2E for iCloud Photos as an opt-in. Critics: Apple chose a path that **makes** its own scanning **impossible** (even if it wanted to). Supporters: consistent privacy strategy.
- **Apple's internal Slack** — it is rare for Apple employees to protest publicly. Apple culture traditionally forbids it. The Slack leak to Reuters with more than 800 messages from staff was **unprecedented**.
- **Federighi on WSJ** — interview with Joanna Stern on August 13, 2021. Instead of calming nerves, he got pushed onto the defensive. Quote: *"This is a widely misunderstood."* Stern: *"But why?"* Federighi had no good answer.
- **Polish context** — UODO (the Polish DPA) took no formal position (the feature never entered the EU). But the **Ministry of Digital Affairs** (then the Centre for Polish Digital Projects) voiced concerns in 2021 in the context of the EU **CSAM Regulation** (so-called Chat Control).
- **UK Online Safety Act 2023** — contains **Section 122** (Section 104 in the original draft), which empowers OFCOM to demand client-side scanning from platforms. **Apple publicly threatened to pull iMessage from the UK** if the requirement were enforced. In 2023 the UK government promised the requirement would not be enforced while no "technically feasible" solution existed — effectively suspending it.
- **"Bugs in our Pockets" (2021)** — academic paper by Matthew Green, Carmela Troncoso, Bruce Schneier and 12 other cryptographers. The title invokes the idea that **our phones are becoming hidden surveillance tools**. One of the most-cited publications in the CSAM-CSS debate.
- **EU Chat Control**: the CSAM Regulation (2022, 2023, 2024) draft has been rejected in the Council several times. The most active opposition: Germany (the Federal Data Protection Commissioner), Austria, the Netherlands, noyb (Max Schrems), EDRi. 2025: the project is **effectively dead**, though it remains formally on the legislative docket.
- **Apple's marketing paradox**: the slogan *"What happens on your iPhone, stays on your iPhone"* (CES 2019) — a de facto commitment. CSAM Detection would have violated that promise. Apple chose consistency. CSAM victims paid the price of that consistency.

---

## Sources

1. Apple, "Expanded Protections for Children," August 5, 2021 (archived). URL: https://web.archive.org/web/20210805230950/https://www.apple.com/child-safety/ (accessed: 2026-04-17)

2. Apple, statement abandoning CSAM Detection, December 7, 2022, quoted in *Wired* (Lily Hay Newman).

3. EFF, "Apple's Plan to 'Think Different' About Encryption Opens a Backdoor to Your Private Life," August 5, 2021. URL: https://www.eff.org/deeplinks/2021/08/apples-plan-think-different-about-encryption-opens-backdoor-your-private-life (accessed: 2026-04-17)

4. Matthew Green et al., "Bugs in our Pockets: The Risks of Client-Side Scanning," arXiv:2110.07450, October 2021. URL: https://arxiv.org/abs/2110.07450 (accessed: 2026-04-17)

5. Joanna Stern, interview with Craig Federighi, *WSJ*, August 13, 2021.

6. *Jane Doe v. Apple Inc.*, N.D. California, complaint filed December 8, 2024. PACER documents.

7. Malcolm Owen, "Apple sued over 2022 dropping of CSAM detection features," *AppleInsider*, December 8, 2024. URL: https://appleinsider.com/articles/24/12/08/apple-sued-over-2022-dropping-of-csam-detection-features

8. National Center for Missing & Exploited Children (NCMEC), CyberTipline Reports, 2021, 2022, 2023, 2024.

9. Open letter to Apple, August 19, 2021, 90+ organizations. URL: https://appleprivacyletter.com (archived)

10. Erik Neuenschwander, letter to Heat Initiative, August 2023.

11. Alex Stamos, Twitter/X, August 2021.

12. Edward Snowden, Twitter, August 2021.

13. UK Online Safety Act 2023 — Sections 121, 122 (client-side scanning provisions).

14. EU Commission, Proposal for Regulation to prevent and combat child sexual abuse (CSAM Regulation), COM/2022/209, May 2022.

15. *Bugs in our Pockets* co-authors: Hal Abelson, Ross Anderson, Steven M. Bellovin, Josh Benaloh, Matt Blaze, Jon Callas, Whit Diffie, Susan Landau, Peter G. Neumann, Ronald L. Rivest, Jeffrey I. Schiller, Bruce Schneier, Vanessa Teague, Carmela Troncoso.

---

*Last updated: 2026-04-17*
*Card in database: C03_apple_csam.md*
