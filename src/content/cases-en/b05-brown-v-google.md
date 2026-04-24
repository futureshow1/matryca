---
id: B05
slug: b05-brown-v-google
group: B
group_label: Google
title: Brown v. Google
year_revealed: 2020
last_updated: '2026-04-17'
companies:
- Google  / Chrome
status: settled
jurisdictions:
- US
- global
legal_basis:
- California Invasion of Privacy Act
- California Unfair Competition Law
- ECPA
- CDA § 230
fines:
- amount: 5000000000
  currency: USD
  authority: Sąd N.D. Cal.
  date: 2024-04
  category: class_action_settlement
  status: paid
whistleblowers:
- schrems
journalists: []
related_cases:
- A01
- D02
- C02
- C01
- B02
tags:
- dark-patterns
- pozew-zbiorowy
categories:
- privacy
geo_coords: []
priority: TOP
card_complete: true
word_count: 3492
explainer:
  src: /animations/b05-brown-v-google.html
  duration: '60s'
  title: Brown v. Google — the Incognito that wasn't incognito
subtitle: Incognito mode is not private
years_active:
- 2016
- 2023
---

# B05 — Brown v. Google: Incognito mode is not private

> **Category:** Deceptive practices / class action / destruction of billions of records
> **Company/companies:** Google (Alphabet) / Chrome
> **Years:** 2016–2023 (practice), June 2020 (lawsuit), April 2024 (settlement)
> **Status:** Closed — "up to $5 billion" settlement (destruction of billions of records); systemic precedent
> **Card ID:** B05

---

## Metadata

| Field | Value |
|------|---------|
| Country/region | USA (California); global impact (Chrome holds ~65% of the market) |
| Year revealed | June 2, 2020 (lawsuit); December 2023 (tentative settlement); April 1, 2024 (finalization) |
| Years of practice | June 1, 2016 – December 2023 (period covered by the settlement) |
| Total penalty | **"Up to $5 billion" in value** (destruction of billions of records); no direct payouts to users |
| Currency | USD |
| Legal basis | California Invasion of Privacy Act (CIPA), California Unfair Competition Law, ECPA, CDA § 230 (rejected) |
| Whistleblower/discoverer | Chasom Brown (lead plaintiff); lawyers **Boies Schiller Flexner** |
| Number of affected | Estimated **136 million users** of Chrome Incognito in the U.S. |
| Status (as of today) | Settlement finalized; Google destroying billions of records; 5-year monitoring |

---

## TL;DR

On **June 2, 2020**, **Chasom Brown** and several other Chrome users filed a class action in the *Northern District of California* — *Brown v. Google LLC* (No. 4:20-cv-03664-YGR). The allegation: Google **tracks Chrome users in Incognito mode** despite promising privacy. Chrome displayed the message: *"Now you can browse privately, and other people who use this device won't see your activity."* Users understood this to mean "Google doesn't see me." In reality, Google collected data even in Incognito through **Google Analytics** (on about 80% of websites), **Google Ads**, **reCAPTCHA**, **Google Fonts**, **YouTube embeds**, and other services embedded on pages.

**The breakthrough came during the discovery phase (2021–2022)**, when Google was compelled to disclose **internal documents**. The most damning: an email from **Lorraine Twohill**, Google's CMO, to **Sundar Pichai** (CEO): *"Incognito should be truly private. We are limited in how strongly we can market Incognito because it's not truly private, thus requiring really fuzzy, hedging language that is almost more damaging."* Translation: "We can't boast about Incognito's privacy because it's a lie — and the fuzzy marketing language **hurts us more**." The company's CMO **explicitly acknowledged internally** that the product was deceptive.

The settlement was finalized on **April 1, 2024**. The terms were unprecedented: (1) **Google will destroy billions of records** collected in Incognito between June 1, 2016, and the settlement date; (2) **Chrome Incognito will block third-party cookies by default** for at least 5 years; (3) **a new, more honest Incognito notice**; (4) **5-year independent monitoring** by a special master; (5) **NO direct payouts** to the class — each user may individually sue for $5,000 under CIPA, which analysts value at a potential **$5–7.8 billion**.

The case is significant for three reasons: (1) **the first "data destruction" settlement** in history — normally Big Tech pays a fine and keeps the data; here Google **destroys the data**; (2) **a precedent for privacy class actions** in the U.S. — after Lloyd v. Google (UK 2021), privacy class actions appeared to be dying; this showed they still work in the U.S.; (3) **Big Tech internal documentation as evidence** — the Twohill email became a template for hundreds of subsequent lawsuits.

---

## Timeline

- **2008** — Chrome debuts with Incognito mode. From the start, the formula: "other people on this device."
- **2016** — Google introduces technologies enabling more precise re-identification in Incognito (including improved browser fingerprinting in Google Analytics, Ad Manager).
- **2018** — Google internal memo: *"Incognito (Third Paper)"* — *"People often think Incognito protects them more than it does."*
- **2019** — *Hacking Week* at Google: engineers identify **12 ways** in which Incognito fails its privacy promise. The report was **not implemented**.
- **February 2020** — Lorraine Twohill's email to Sundar Pichai.
- **June 2, 2020** — **Chasom Brown et al. v. Google LLC** — class action filed in N.D. California. The firm **Boies Schiller Flexner** (the same firm that represented Al Gore in Bush v. Gore 2000).
- **March 2021** — Google files a motion to dismiss. **Judge Yvonne Gonzalez Rogers** rejects it. The case proceeds. (Gonzalez Rogers is the same judge who presided over *Epic v. Apple*.)
- **August 2021** — the Boies Schiller team obtains access to Google's internal documents.
- **2022** — discovery. Disclosure of the Twohill email to Pichai. Disclosure of the "Third Paper" memo. Disclosure of the Hacking Week report.
- **March 2022** — Google tries to block publication of the Twohill email. The judge rejects.
- **December 2022** — Google offers $5 million to settle. Rejected as too low.
- **2023** — continued discovery and negotiations.
- **October 2023** — Sundar Pichai testifies in the DOJ antitrust case (separate *US v. Google* case), where he is also questioned about Incognito.
- **December 28, 2023** — **tentative settlement** announced.
- **April 1, 2024** — **settlement finalized** with court approval.
- **2024–2029** — implementation period for Chrome changes and 5-year independent monitoring.

---

## Mechanism

### What Chrome promised

Chrome in Incognito displayed the message:
*"Now you can browse privately, and other people who use this device won't see your activity. Chrome won't save the following information: your browsing history, cookies and site data, information entered in forms."*

The average user read this as: **"Google doesn't see me."** In reality, Chrome honestly speaks only of **local device history** — but no one reads it critically.

### What Google (and most of the internet) was doing

Google collected data even in Incognito because the websites a user visited **themselves sent information** about the visit to Google. The main channels:

1. **Google Analytics** — statistics for site owners. Present on about 80% of global websites. Each visit sends Google: IP, User-Agent, URL, timestamp, referrer.
2. **Google Ad Manager / AdSense** — ad network. Each Google ad on a page = transmission to Google.
3. **reCAPTCHA** — Google's "verify you're not a robot." Requires behavioral analysis → Google receives data.
4. **Google Fonts** — free fonts loaded from fonts.googleapis.com. Each load = a visit registered.
5. **Google Tag Manager** — orchestration of trackers.
6. **YouTube embeds** — every embedded YouTube video on a page sends data.
7. **Gmail tracking pixels** — in Gmail emails, the images opened are hosted on Google.
8. **Google Maps embeds** — maps on pages.

Each of these services saw: **IP, User-Agent, the exact URL visited, time, referrer, browser fingerprint**. In many cases also a **cookie identifier** carried over from a normal Chrome session (though that was supposed to work only if cookies were clean, but it wasn't always required — fingerprinting was enough).

### Re-identification of users in Incognito

Incognito blocked cookies and history **locally**. But Google could **link an Incognito session to a specific identity** through:

- **Temporal correlation** — if Jan logged out of Chrome and within 2 minutes opened Incognito from the same IP, Google knew.
- **Browser fingerprinting** — a unique combination: screen size, OS version, installed fonts, plugins, Canvas API hash, WebGL renderer, AudioContext fingerprint, time zone, language. Statistically, **over 99% of browsers have a unique fingerprint**.
- **Logins in Incognito** — if you logged into Gmail, YouTube, or any other Google service in Incognito, the session was already deanonymized.
- **IP + User-Agent** — for most users, enough to identify the session's identity with 95–99% certainty.

### Why this worked without the user "doing anything"

Here's the crux: the user opens Incognito, visits a page (e.g., **a news portal** that has Google Analytics and Google ads). The user **does nothing** — the page itself sends visit data to Google. The entire deanonymization chain happens without user interaction.

---

## Discovery

### How the disclosure came about

The discovery came through **a class action lawsuit**, not through a whistleblower or researcher. The firm **Boies Schiller Flexner** in 2020 noticed that the way Chrome Incognito was marketed ("browse privately") was **classic deception** under the California Unfair Competition Law. They assembled representative plaintiffs (including Chasom Brown), filed the lawsuit, and — crucially — **forced discovery**. Discovery exposed the internal documents that became the foundation of the case.

### Google's internal documents — evidentiary material

**Email from Lorraine Twohill (Google CMO) to Sundar Pichai (CEO), February 2020** — likely **the most damaging document in Big Tech court history**. The text:

*"Incognito should be truly private. We are limited in how strongly we can market Incognito because it's not truly private, thus requiring really fuzzy, hedging language that is almost more damaging."*

Translation:
- "Incognito should be truly private."
- "We are limited in how strongly we can market Incognito because it's not truly private."
- "Which requires really fuzzy, hedging language that is almost more damaging."

**What this means legally**: The company's CMO **explicitly acknowledged internally** that the product was deceptive. This is a **classic party admission** — the strongest kind of evidence in U.S. evidence law.

**The "Incognito (Third Paper)" memo from 2018** — an internal analysis: *"People often think Incognito protects them more than it does."*

**Hacking Week report 2019–2020** — Google engineers identified **12 ways** in which Incognito fails. Proposed fixes. **Not implemented** for 3 years.

### First publications

- **June 2, 2020** — lawsuit publicly available through PACER
- **June 2020** — first articles in *Reuters*, *Bloomberg*, *Law360*, *The Register*
- **March 2022** — *Bloomberg* first reveals the content of the Twohill email after the initial court motions
- **December 28, 2023** — *Reuters* first announces the tentative settlement
- **April 1, 2024** — full settlement terms in *Reuters*, *NYT*, *WSJ*

---

## Key people

### Lead plaintiff

- **Chasom Brown** — a California resident, a typical Chrome user. Deliberately chosen as a "test case" — not an activist, not an expert, a representative of the average American consumer.

### Lawyers

- **David Boies** — founder of **Boies Schiller Flexner**, one of the most famous American lawyers. Represented Al Gore in *Bush v. Gore* (2000), the DOJ in the Microsoft antitrust case (1998), Apple vs Samsung (multiple cases). Regarded as "the best trial lawyer in the U.S."
- **Mark C. Mao** — partner at Boies Schiller, lead counsel in *Brown v. Google*. Specialization: privacy and emerging technologies.
- **William Carmody** — Susman Godfrey, co-lead counsel.

### Judge

- **Judge Yvonne Gonzalez Rogers** — federal judge for the Northern District of California since 2011 (Obama nominee). Known for a tough approach to Big Tech: she presided over *Epic v. Apple* (2020–2021), *In re: Google Play Store Antitrust Litigation*, and others. Frequently quoted for: *"You are not above the law, simply because of your size."*

### Google

- **Lorraine Twohill** — CMO (Chief Marketing Officer) of Google. Author of the email that was the "killer evidence" in the case.
- **Sundar Pichai** — CEO of Alphabet and Google.
- **Kent Walker** — Chief Legal Officer.
- **Aparna Sridhar** — Deputy General Counsel.

### Experts

- **Jonathan Mayer** (Princeton) — testified as a scientific expert on fingerprinting and re-identification.
- **Serge Egelman** (UC Berkeley) — expert on browser security.

---

## Company response

### Google

**Stage 1: defense by motion to dismiss (2020–2021).** Google argued that Incognito "never promised total privacy" and that the notice concerns "other users of the device." Judge Gonzalez Rogers rejected this.

**Stage 2: fight to conceal documents (2021–2022).** Google tried to cover as many internal documents as possible under "attorney-client privilege." The judge rejected most of the motions — not every communication with a lawyer is protected, particularly if it concerns **business decisions**, not legal advice.

**Stage 3: lowball offer (December 2022).** $5 million settlement — laughably low. Rejected by the class.

**Stage 4: real negotiations and settlement (2023).** Gonzalez Rogers set a trial date. Pressure mounted. Google entered serious negotiations.

**Stage 5: execution (2024+).** Destruction of billions of records, updates to Incognito messaging, 5-year monitoring.

**The new Incognito notice** (2024):
*"Others who use this device won't see your activity, so you can browse more privately. This won't change how data is collected by websites you visit and the services they use, including Google."*

Significantly **more candid** — but it's worth noting: the last sentence is a **de facto admission** that Google still sees visits.

---

## Legal proceedings

### Jurisdictions

The case was solely in the U.S. (California federal). Global impact via the Chrome market.

### Legal basis

- **California Invasion of Privacy Act (CIPA), Cal. Penal Code § 631–632** — $5,000 per violation, enacted 1967
- **California Unfair Competition Law, Bus. & Prof. Code § 17200**
- **California Consumers Legal Remedies Act**
- **Electronic Communications Privacy Act (ECPA), 18 USC § 2510**
- **Defenses rejected for Google**: CDA § 230 (does not shield a company's own misrepresentations); Terms of Service (consumers did not consent to tracking in Incognito)

### Key stages

| Date | Stage |
|------|------|
| June 2020 | Lawsuit filed |
| March 2021 | Motion to dismiss rejected |
| 2022 | Disclosure of internal documents |
| December 2023 | Tentative settlement |
| April 1, 2024 | Settlement finalized |

### Related case law

- ***Peña v. Google*** (2021) — an earlier, similar case; Google won on procedural grounds.
- ***Calhoun v. Google*** (N.D. Cal.) — a related case concerning Chrome sync tracking.
- **The Safari Workaround case (B02)** — a pattern of deception.
- ***In re Meta Pixel Healthcare Litigation*** — a similar pattern in the context of medical data.

---

## Penalties and settlements

| Date | Authority | Amount | Jurisdiction | Basis |
|------|-------|-------|-------------|----------|
| April 1, 2024 | N.D. Cal. court | **Up to $5 billion in value** | USA (CA) | CIPA, UCL, CLRA, ECPA |

**Value structure:**
- Destruction of billions of records (estimated data value: $5–7.8 billion — **per analysts**)
- No direct payouts to the class
- Individual rights to sue for $5,000 under CIPA remain

**Attorneys' fees**: ~$0 from the settlement (Boies Schiller worked on a contingency based on percentages of the damages' value; complicated).

---

## Precedents and implications

### For U.S. law

- **The first major "data destruction" settlement in Big Tech history.** Normally companies pay and keep data; here they **destroy** it.
- **Strengthening CIPA** — $5,000 per violation × millions of users = potentially enormous exposures.
- **A template for privacy lawsuits** — Boies Schiller has already filed similar cases against Meta, TikTok, Amazon.
- **Weakening CDA § 230** — § 230 does not shield against claims of **a company's own misrepresentations**. Analogy to New Mexico v. Meta (A08).

### For EU law

- **An impulse for interpretation of GDPR Art. 5** (transparency principle) — app messages must be **accurate**, not just formally correct.
- **EDPB Guidelines on Dark Patterns (2022)** — the Incognito UI would be a textbook example.

### For Big Tech practice

- **Documentation is a risk.** The Twohill email shows that internal correspondence can become evidence. Since 2024, law firms have been training executives **not to write** things that could later be used in court.
- **Marketing must match the product.** Incognito UI was inaccurate for years; Firefox, Safari, and Brave adjusted their marketing faster.
- **Browser fingerprinting as a regulatory target** — after Brown, Apple and Firefox strengthened fingerprinting protection; Google Chrome announced **Privacy Sandbox** and the deprecation of third-party cookies.

---

## Class actions

| Case | Court | Status | Value | Affected |
|--------|-----|------|---------|--------------|
| *Brown v. Google LLC* | N.D. Cal. 4:20-cv-03664-YGR | Settled 04.2024 | Up to $5 billion in value | ~136 million Chrome Incognito users in the U.S. |
| *Calhoun v. Google* | N.D. Cal. | Separate | Related | Chrome sync |
| *In re Meta Pixel Healthcare* | N.D. Cal. | Ongoing | Pending | Hospital patients |

---

## Conclusions for citizens

### What does this mean for me?

If you thought **"Incognito" protected you from Google** — you were **one of hundreds of millions who were misled**. Incognito protects only against **other people on the same device** (family members, coworkers using the same computer). It does not protect against:
- Google itself (Analytics, Ads, reCAPTCHA, Fonts, Maps embeds, YouTube embeds)
- The Meta Pixel (present on tens of thousands of sites)
- Your ISP (internet provider) — it sees every URL and DNS addressing
- Your employer (if you use a corporate network)
- Your school (if on an education network)
- A government surveillance provider

### How to protect yourself?

**If you want truly private browsing:**

1. **Tor Browser** — the only realistically anonymous browser. The cost: slower, some sites block Tor.
2. **Brave Browser with Tor Mode** ("New Private Window with Tor") — a compromise between speed and anonymity.
3. **Firefox with Total Cookie Protection + uBlock Origin + NoScript** — blocks most tracking.
4. **VPN + a browser with fingerprinting protection** — Firefox or Brave.

**For everyday "more private":**

5. **Safari on iPhone/Mac** — the strongest protection against tracking (ITP, ATT).
6. **Brave Browser** — blocks ads and trackers by default.
7. **DuckDuckGo Privacy Browser** — mobile alternative to Chrome.
8. **Disable Chrome sync** — Settings → Sync → Off.
9. **Disable "Help improve Chrome"** (telemetry).

**Important: A VPN is not enough.** A VPN hides your IP from the site, but if you **log in** to Gmail, Google knows who you are anyway. Browser fingerprinting enables re-identification regardless of IP.

### What rights do I have?

**In the U.S.:**
- **CIPA** (California) — if you are a California resident, you can individually sue Google for **$5,000 per violation**. The Brown lawsuit established the precedent. Law firms are sending demand letters en masse.
- State privacy laws (NY Stop Hacks, IL BIPA, etc.).

**In the EU:**
- **GDPR Art. 5** — the transparency principle. Google violated GDPR in the EU in **exactly the same way**; European DPAs could have imposed a fine, but did not.
- **GDPR Art. 6** — no valid basis for processing (consent was not informed).
- **An "EU analog to Brown v. Google"** — possible through the Irish DPA, but to date has not occurred.

### Where to report?

- **Poland**: UODO
- **EU**: national DPA; NOYB has an open case against Google regarding tracking
- **California**: you can individually sue Google for $5,000

### Note for mediators, lawyers, journalists, activists

**Never use Incognito as the sole protection** when working with clients in sensitive matters:

1. **A client in a crisis situation (domestic violence, divorce)** — Incognito **does not protect** against a former partner if they have access to the family router/ISP.
2. **Professional secrecy** — lawyers, doctors, psychologists, mediators — should use **Tails OS** (a live Linux on a USB stick that forgets everything after shutdown) for sensitive communication. Alternatives: **ProtonMail/ProtonDrive** (Switzerland), **Signal** (E2E messaging).
3. **Investigative journalists** — **SecureDrop**, Tor, Tails.
4. **Activists** — **Access Now**, **EFF Surveillance Self-Defense** have guides tailored to risk profiles.

**For Polish attorneys and mediators**: Chrome's default settings may **theoretically violate professional secrecy** (Art. 180 of the Code of Criminal Procedure — doctors, attorneys, legal advisers, clergy). Google's data is data held by U.S. companies, accessible to U.S. intelligence under **FISA 702**. For confidential matters, consider **Firefox + uBlock Origin + a European VPN** as a minimum.

---

## Context

- **The Twohill email became a meme** in the privacy community. The phrase **"fuzzy, hedging language that is almost more damaging"** is cited in academic lectures as **the definition of the effect of "marketing privacy-washing."** A CMO admitted that the company knew its product was a lie.
- **The names "private" in different browsers**: Chrome "Incognito," Firefox "Private Browsing," Safari "Private Browsing Mode," Edge "InPrivate," Brave "Private Window" (and "Private Window with Tor"). The only mode that **truly approaches anonymity** is Brave with Tor (and the Tor Browser).
- ***Jury instruction***: Judge Gonzalez Rogers was planning to instruct the jury to **treat the Twohill email as a "party admission"** — the strongest kind of evidence. That likely forced Google into settlement — the risk of a verdict was enormous.
- **Boies Schiller Flexner** — David Boies's firm. Boies began his career as a conservative, representing IBM in the 1970s. In 2000, he represented Al Gore. In privacy cases, he became one of the key figures. His approach: **"everyone has a right to privacy, even Chrome consumers."**
- **Data destruction as currency** — analysts estimate the value of data destroyed in the settlement at **$5–7.8 billion**. For Google, the loss is not directly on the books, but removes future targeting and AI training opportunities. It can be compared to **destroying raw material reserves**.
- **The new Incognito notice (2024)** — Google was forced to write: *"This won't change how data is collected by websites you visit and the services they use, including Google."* A de facto **admission** that Google still sees. Honestly.
- **Chrome still dominates**: despite the settlement, Chrome has about 65% of the global market (2025). The changes in Incognito did not threaten its position.
- **DuckDuckGo, Brave, Firefox**: after the settlement, their downloads rose by about 30%. A long-term trend of shifting toward privacy-focused browsers.
- ***Epic v. Apple* and *Brown v. Google* — the same judge**. Judge Yvonne Gonzalez Rogers presided over both cases. Her approach: **Big Tech is not above the law**. In the U.S. legal community, she is regarded as one of the **most influential federal judges** in technology cases.
- **Polish context**: Polish citizens are part of the **global impact** of the settlement (Chrome changes affect all users), but **will not receive direct payouts** (the settlement applies only to the U.S./California). There is no parallel lawsuit in the EU.
- **The paradox of Google's marketing** — they could not advertise Incognito as "private" (because it was a lie), but they also could not remove the feature (users would notice). The solution: **fuzzy messaging**. This is a classic example of **"privacy theater"** — theaters of privacy that provide an illusion of safety without real protection.
- **The precedent's value for future lawsuits**: Boies Schiller and other firms are already filing analogous cases against Meta (tracking in Facebook app private mode), TikTok (in-app browser tracking), Amazon (Kindle tracking). *Brown v. Google* is a **template legal model** for them.

---

## Sources

1. *Chasom Brown et al. v. Google LLC*, 4:20-cv-03664-YGR, N.D. California. Documents via PACER. URL: https://pacer.uscourts.gov

2. Final settlement agreement, April 1, 2024 (publicly filed).

3. Boies Schiller Flexner LLP, press releases 2020–2024. URL: https://www.bsfllp.com

4. Reuters, "Google to destroy browsing data to settle Chrome privacy lawsuit," April 1, 2024. URL: https://www.reuters.com/technology/google-destroy-browsing-data-settle-chrome-privacy-lawsuit-2024-04-01/ (accessed: 2026-04-17)

5. Bloomberg, "Google's 'Incognito Mode' Inspires Lawsuits and Ire," 2022 — first disclosure of the Twohill email.

6. *Peña v. Google LLC*, N.D. Cal. — an earlier, similar case.

7. California Invasion of Privacy Act, Cal. Penal Code § 631–632.

8. Jonathan Mayer et al., Stanford/Princeton papers on fingerprinting.

9. EDPB Guidelines 03/2022 on deceptive interfaces.

10. Sundar Pichai, testimony in *United States v. Google* (DOJ antitrust), October 2023.

11. NOYB, open complaint vs. Google regarding tracking, 2023.

12. Judge Yvonne Gonzalez Rogers, orders and rulings in *Brown v. Google* (available via PACER).

13. The Register, "Google to destroy billions of records in data privacy settlement," 2024.

14. *Calhoun v. Google LLC* — a related case.

15. Serge Egelman, expert testimony, UC Berkeley.

---

*Last updated: 2026-04-17*
*Card in database: B05_incognito.md*
