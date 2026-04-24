---
id: B03
slug: b03-google-api-bugs
group: B
group_label: Google
title: Google+ API bugs
year_revealed: 2018
last_updated: '2026-04-17'
companies:
- Google
status: settled
jurisdictions:
- US
- global
legal_basis:
- US Securities Exchange Act
- state consumer protection
- pre-RODO
fines:
- amount: 7500000
  currency: USD
  authority: '*Matal v. Google* class action'
  date: 2020-07
  category: class_action_settlement
  status: paid
whistleblowers: []
journalists: []
related_cases:
- B04
- B02
- B01
- B06
- D02
tags:
- wyborcy
- rodo
- schrems-ii
- pozew-zbiorowy
- wyciek-danych
categories:
- privacy
geo_coords: []
priority: STANDARD
card_complete: true
word_count: 2947
explainer:
  src: /animations/b03-google-api-bugs.html
  duration: '60s'
  title: Google+ API Bugs — Google knew for 6 months. It stayed silent.
subtitle: Concealing the leak and shutting down the platform
years_active:
- 2015
- 2018
---

# B03 — Google+ API bugs: Concealing the leak and shutting down the platform

> **Category:** Data leak / incident concealment / SEC / corporate product suicide
> **Company/companies:** Google (Alphabet)
> **Years:** 2015–2018 (first bug), October 2018 (disclosure), April 2019 (Google+ shutdown)
> **Status:** Closed — consumer Google+ shut down, settlement of USD 7.5 million
> **Card ID:** B03

---

## Metadata

| Field | Value |
|------|---------|
| Country/region | Global; centers of proceedings: USA, Ireland |
| Year of disclosure | October 8, 2018 (*Wall Street Journal*) |
| Years of practice | 2015–2018 (first bug); second bug: November 2018 (6 days) |
| Total penalty | USD 7,500,000 (class action settlement) |
| Currency | USD |
| Legal basis | US Securities Exchange Act (SOX), state consumer protection, pre-GDPR (for the EU) |
| Whistleblower/discoverer | *WSJ* (Douglas MacMillan, Robert McMillan); leak of Google's internal memo |
| Number of people affected | **500,000** (first bug) + **52.5 million** (second bug) — approximately 53 million users combined |
| Status (as of today) | Closed; consumer Google+ shut down April 2, 2019; Google Currents shut down 2023 |

---

## TL;DR

**On October 8, 2018**, the *Wall Street Journal* (Douglas MacMillan, Robert McMillan) revealed that **Google had known about vulnerabilities in the Google+ API** since **March 2018** — but had **deliberately concealed the information from users and regulators**. The first bug exposed data of **~500,000 users** to access by third-party app developers (non-public profile data: gender, age, email, occupation, place of employment) **since 2015**. Google detected the flaw in March 2018 as part of the **Project Strobe audit** — an internal review of APIs following the Cambridge Analytica scandal. It patched the vulnerability but **informed no one**.

In an internal Google memo from March 2018 (obtained by the *WSJ*), the legal team argued for **non-disclosure**: *"doing so would cause reputational damage greater than the benefits"* and — most damningly — ***"we don't want comparisons with Cambridge Analytica"***. That sentence became a symbol. On the same day the *WSJ* article appeared, Google announced **the shutdown of the consumer version of Google+** within 10 months. A month later, in November 2018, Google detected **a second, larger bug** — affecting **52.5 million users over 6 days** — and this time **disclosed it immediately**, accelerating the Google+ shutdown to **April 2, 2019** (a year earlier than planned).

The *Matal v. Google* class action (N.D. Cal.) ended in 2020 with a settlement of **USD 7.5 million**. The SEC opened and closed without charges (SOX was not deemed to have been violated). Ireland's DPC determined that the bug "did not pose sufficient risk of harm" to require GDPR notification (**pre-Schrems II era** — weaker enforcement). For Big Tech practice, the case left one key trace: **internal documents saying "we don't want comparisons with Cambridge Analytica" became court evidence** in many later cases. The lesson was: **concealing leaks costs more than disclosing them**.

Google+ was a product that **never took off** — in court documents, Google admitted that **90% of Google+ sessions lasted less than 5 seconds** (users passed through G+ unwittingly from Gmail). The case became a model of "preemptive shutdown" — if a product has a flaw and no one uses it, it is easier to shut it down than to fix it.

---

## Timeline

- **June 28, 2011** — Google launches **Google+** as a competitor to Facebook. Users were forced to use G+ through integration with Gmail, YouTube, and Google Search.
- **2012–2014** — G+ quickly reaches hundreds of millions of registered accounts, but **activity is low**. Critics call it a "ghost town."
- **2014** — Google **drops G+ integration with YouTube** (reversing the strategy of Vic Gundotra — the social VP who left).
- **2015** — the first Google+ People API bug becomes active. Third-party app developers pull non-public profile data of users.
- **March 2018** — as part of the **Project Strobe audit** (launched after Cambridge Analytica), Google discovers the bug. The engineering team patches it. The legal team debates disclosure. Internal memo: do not disclose.
- **March–October 2018** — Google **sits on the information for 7 months**.
- **October 8, 2018** — the *WSJ* publishes: "Google Exposed User Data, Feared Repercussions of Disclosing to Public." On the same day, Google announces **the consumer Google+ shutdown within 10 months**.
- **November 2018** — Google detects **a second bug** in the new version of the API. This time it **discloses immediately**. The data of 52.5 million users had been exposed for 6 days.
- **December 11, 2018** — Sundar Pichai testifies before the **House Judiciary Committee**. He is not questioned in detail about Google+ (the focus was on China and Project Dragonfly — case B06).
- **December 10, 2018** — Google announces **the acceleration of the G+ shutdown** to April 2, 2019.
- **April 2, 2019** — consumer Google+ is **formally shut down**. Users can download their data via Google Takeout.
- **2019–2020** — *Matal v. Google* class action (N.D. Cal.).
- **July 27, 2020** — settlement of **USD 7.5 million** (approximately USD 5–12 per user who filed a claim).
- **July 2, 2023** — Google also shuts down **Currents** (the G+ successor for G Suite/Workspace). No Google corporate social network has survived.

---

## Mechanism

### First bug (2015 – March 2018)

**Flaw in the Google+ People API.** The API was used by third-party app developers to integrate with Google+ (e.g., importing friend lists, automatically sharing posts). The bug caused apps to receive **non-public profile data** of users — even those who had **not granted permissions** to the app or had **set visibility to "private."**

Leaked data:
- First name, last name
- Email address (!)
- Gender
- Date of birth / age
- Occupation
- Place of employment
- Profile photo

**What did NOT leak**: passwords, financial data, phone numbers, post contents, messages.

**Scale of exposure**: **500,000 unique profiles**. Google could not determine whether the data was actually **retrieved** by apps — logs only contained data from the last **14 days** before detection (per Google's internal retention policy). In effect: it is unknown how many users were affected over **3 years**.

### Second bug (November 2018, 6 days)

After the first scandal, Google accelerated migration to a **new API version**. In this new version, **another bug** appeared: apps could pull **non-public** data from user profiles through the **Project Photos API**. Google detected and patched it in **6 days**. Those affected: **52.5 million users**.

### Why it was serious despite the "small" dataset

- **Spear phishing** — email address + occupation + place of employment = **ideal material for personalized phishing**.
- **People using Google for work** — business, governments, NGOs — were particularly exposed.
- **Systemic trust** — Google positioned itself as "the platform you can trust." Concealing the leak undermined that narrative.
- **SOX risk** — as a public company, Google has an obligation to disclose "material events" in financial reports. Failure to disclose a leak affecting investor decisions **may be a violation of the Sarbanes-Oxley Act**. The SEC opened an informal investigation and ultimately closed it without charges (the reasoning: 500,000 users is "not a material event" for a company with a market cap of ~USD 800 billion).

---

## Discovery

### How disclosure came about

Disclosure came thanks to an **internal leak** — an unidentified current or former Google employee passed the *WSJ* a copy of an **internal Google legal team memo from March 2018**. The memo described:

1. Detection of the bug by Project Strobe
2. A technical assessment of the scale of the problem
3. **The debate over disclosure**: arguments for and against
4. **The decision not to disclose**, with three main arguments:
   - "No evidence that the data leaked to bad actors"
   - "Google+ is dying anyway — the costs of disclosure > the benefits"
   - ***"We don't want comparisons with Cambridge Analytica"***

The last argument — **revealing the state of mind of Google's legal team** — became the central element of the *WSJ* article and later lawsuits.

The *WSJ* verified the findings over several weeks, consulting with external security experts. Google declined to comment until publication.

### First publications

- **October 8, 2018** — Douglas MacMillan, Robert McMillan, "Google Exposed User Data, Feared Repercussions of Disclosing to Public," *The Wall Street Journal*
- **October 8, 2018** — Google blog post: Ben Smith, VP Engineering, "Project Strobe: Protecting your data, improving our third-party APIs, and sunsetting consumer Google+"
- **October 9, 2018** — numerous follow-ups in the *NYT*, *WaPo*, *The Verge*, *Ars Technica*

---

## Key people

### Investigative journalists

- **Douglas MacMillan** (*WSJ*) — tech reporter specializing in Silicon Valley and corporate governance. After the *WSJ*, he joined the *Washington Post*.
- **Robert McMillan** (*WSJ*) — cybersecurity reporter. Co-author of many key tech disclosures.

### Google

- **Sundar Pichai** — CEO of Google/Alphabet. Testified before Congress on December 11, 2018, but was not questioned in detail about G+.
- **Ben Smith** — VP Engineering, author of the blog post announcing the G+ shutdown and Project Strobe.
- **Kent Walker** — Chief Legal Officer of Google; presumed author of or approver of the March 2018 memo.

### Regulators

- **SEC** — informal investigation, closed.
- **FTC** — did not open proceedings.
- **DPC Ireland** — determined there was insufficient risk of harm for GDPR notification.
- **UK ICO** — informationally engaged.

### Lawyers

- **Matal** — lead plaintiff in the *Matal v. Google* class action (N.D. Cal.).
- **Kaplan Fox & Kilsheimer LLP** — firm representing the class.

---

## Company response

### Google

**Stage 1: concealment (March–October 2018).** Seven months of silence.

**Stage 2: forced response (October 8, 2018).** On the same day as the *WSJ* publication, Google publishes the Project Strobe blog with **three things at once**:
1. Admission of the first bug
2. Announcement of API changes (disabling some third-party app access to Gmail, Calendar)
3. **Shutdown of consumer Google+** within 10 months

Official narrative: *"We want to keep our focus on our enterprise efforts [for G+], where we see strong momentum."* Market interpretation: **"we're closing before they close us."**

**Stage 3: second bug and acceleration (November–December 2018).** When the second bug emerges (52.5 million users), Google **discloses immediately** — the lesson learned from the first. The G+ shutdown is moved up from August 2019 to April 2019.

**Unanswered questions:**
- Why did the legal team **write down** "we don't want comparisons with Cambridge Analytica" rather than discussing it orally? Since 2018, many corporate law firms have adopted the principle **"don't write what you wouldn't want to see in the New York Times."**
- How many other Google products had similar leaks hidden under Project Strobe?
- What actually leaked during the 3 years of the first bug (2015–2018)?

---

## Legal proceedings

### Jurisdictions

1. **US federal** — SEC (closed), FTC (did not open)
2. **US class** — *Matal v. Google*, N.D. Cal.
3. **EU** — DPC Ireland, UK ICO (no penalties)

### Legal basis

- **Sarbanes-Oxley Act 2002** (SOX) — obligation of a public company to disclose material events
- **SEC Rule 10b-5** — misleading investors
- **State consumer protection laws** — basis for the class action
- **UK DPA 1998** — pre-GDPR, harder to enforce
- **GDPR art. 33** — obligation of 72-hour notification (had the case been fully post-May 25, 2018)

### Key stages

| Date | Stage |
|------|------|
| October 8, 2018 | Disclosure, announcement of G+ shutdown |
| 2018–2019 | Regulatory investigations |
| April 2, 2019 | Consumer G+ shutdown |
| July 27, 2020 | Class action settlement of USD 7.5 million |

### Related case law

- **In re Yahoo! Inc. Securities Litigation** (N.D. Cal. 2018) — similar case of Yahoo concealing a leak (500 million accounts in 2014, disclosed in 2016); settlement of USD 80 million.
- **Cambridge Analytica case** — directly compared by Google's internal memo.
- **Brown v. Google** (B05) — precedent for tracking in Chrome Incognito.

---

## Penalties and settlements

| Date | Body | Amount | Jurisdiction | Basis |
|------|-------|-------|-------------|----------|
| July 27, 2020 | *Matal v. Google* class action | USD 7,500,000 | USA (N.D. Cal.) | State consumer protection |

**Total: USD 7.5 million** — approximately 15 cents per leaked profile (on average). This shows that **US civil class actions poorly compensate for privacy**.

---

## Precedents and implications

### For EU law

- **The Google+ case is a classic example of a breach of GDPR art. 33** — the obligation to notify a supervisory authority of a leak within 72 hours. But the leak occurred in 2015–2018, and the GDPR took effect on May 25, 2018. The first bug was disclosed after that date — but **the Irish DPC determined** that, given the **earlier nature** of the leak, the GDPR did not apply.
- **Impetus for strict interpretation of art. 33** by later DPAs: failure to disclose = automatic proceedings.

### For US law

- **The SEC learned its lesson** — after Yahoo and Google+, the SEC in 2018–2020 strengthened rules regarding cybersecurity disclosure.
- **SOX compliance for big tech** — a direct impulse for the **SEC Cybersecurity Disclosure Rules** (2023): public companies must report "material cybersecurity incidents" within 4 days.

### For Big Tech practice

- **"Don't write what you wouldn't want to see in the NYT"** — corporate law firms adopted this as a principle after the Google+ case.
- **"Preemptive shutdown" as strategy** — if a product has a flaw and no one uses it, shutting it down is cheaper than reporting violations. Meta did this later with numerous apps (Hobbi, Neighborhoods, Rooms, Slingshot, etc.).
- **Project Strobe as a template** — internal API audits after Cambridge Analytica became the standard; Apple, Microsoft, and Meta all conducted analogous audits.

---

## Class actions

| Case | Court | Status | Value | Affected |
|--------|-----|------|---------|--------------|
| *Matal v. Google* | N.D. Cal. | Settled 2020 | USD 7,500,000 | ~500,000 + 52.5 million G+ users |

Claim filings: about 1 million people filed claim forms. Payout per person: **USD 5–12**.

---

## Conclusions for citizens

### What does this mean for me?

If you ever had a Google+ account (and if you have had a Google account since 2011, you probably did) — your profile data **could have been leaking for 3 years** without your knowledge. Google concealed the fact of the leak for 7 months. Not because it assessed there was no risk — but because it assessed that **the PR would be worse than the flaw itself**. This shows how Big Tech makes decisions: **corporately, not legally/ethically**.

### How to protect yourself (in general)?

1. **Platforms being shut down = download your data**. Every 6–12 months, visit **takeout.google.com** and download a copy. If Google shuts down Gmail tomorrow (theoretically possible), your archival data will only be accessible if you downloaded it.
2. **Check what Google knows about you**: **myactivity.google.com** — review your activity history. You can delete selected entries or set auto-delete every 3/18/36 months.
3. **Minimize profile data**: in your Google account settings, remove information it doesn't need to have (occupation, place of employment, date of birth — if not required).
4. **Use Gmail aliases** (`your.name+alias@gmail.com`) — allows you to filter where phishing is coming from.
5. **Following a leak-based phishing attack** — use a **password manager** (Bitwarden, 1Password) with **unique passwords** per service. A leak of email + occupation won't help an attacker if passwords are unique.

### What rights do I have?

**In the EU (GDPR):**
- **Art. 33** — the controller has **72 hours** to notify a supervisory authority of a leak.
- **Art. 34** — if a leak creates high risk for individuals, the controller must **promptly notify users**.
- **Art. 82** — right to compensation.

**In the US:**
- **SEC Cybersecurity Disclosure Rules (2023)** — public companies must report material incidents within 4 days.
- State notification laws (California, New York, etc.) — varying deadlines.

### Where to report?

- **Poland**: UODO — breach notifications
- **EU**: national DPA
- **USA**: FTC — identitytheft.gov; SEC for securities matters

### Note for mediators, lawyers, data administrators

The Google+ case shows that **concealing leaks is more expensive** than disclosing them:
- **7 months of concealment** → USD 7.5 million settlement + product shutdown
- **6 days of quick disclosure** (second bug) → no additional penalty
- **Internal memo with unfortunate phrasing** → court evidence

If you are a data administrator (law firm, foundation, company):
- **An incident response plan** is an obligation — not only under GDPR art. 32, but out of **good corporate practice**.
- **Always assume that an internal memo may leak** — write as though it will be published.
- **72 hours is very little** — you must have a worked-out workflow: engineer detects → data protection officer → management → notification to UODO.

---

## Context

- ***"We don't want comparisons with Cambridge Analytica"*** — this sentence from Google's internal memo became **a symbol of corporate PR-calculating ethics**. It is used in hundreds of articles, academic lectures, and regulatory presentations as **a warning**: if you write it, it will come out.
- **Google+ was already a zombie** — in court documents, Google admitted that **90% of Google+ sessions lasted under 5 seconds**. People passed through G+ unwittingly from Gmail (when Google forced the creation of a G+ profile). The "500,000 users" figure is in reality 500,000 accounts, of which probably **fewer than 10,000 were active**.
- **Comparison with Facebook**: the leak of 52.5 million Google+ users = **1/10** of the Facebook leak of 533 million (A04). Google — settlement of USD 7.5 million. Facebook — DPC fine of EUR 265 million. The difference: Facebook was operating **under the GDPR**, while the Google+ bug was **pre-GDPR** (formally).
- **Congressional irony**: Sundar Pichai testified before the House Judiciary Committee on December 11, 2018. The priority for members of Congress was: **China and Project Dragonfly** (case B06), **search bias**. Google+ was passed over. Pichai walked away **practically unscathed**.
- **Project Strobe as a "post-CA audit"** — Google never disclosed the full results of the audit. It is known that "several leaks" were found, but only those from G+ were made public. The others may have been quietly fixed.
- **Google Currents (the G+ successor for business)** — shut down July 2, 2023. No Google corporate social network has survived. Replaced by **Google Spaces** in Google Chat.
- **Google+ as the first "preemptive shutdown"** in Big Tech history. Meta followed this template, closing apps that run into problems (Hobbi, Rooms, Slingshot, Neighborhoods). Amazon also (Spark, Chime Pro).
- **Yahoo precedent** — before Google+, Yahoo in 2016 disclosed a leak of 500 million accounts from 2014 (two years of concealment). SEC settlement of USD 35 million, class action of USD 80 million. Google+ had **the same corporate sins**, but **smaller scale** — and an earlier product.
- **The SEC remembered** — in 2023, the SEC published **"Cybersecurity Disclosure Rules"** requiring 4-day disclosure of material cybersecurity incidents by public companies. Google+ and Yahoo were the templates.
- **Poland — Google+ was popular** (by any Google+ standards) among some IT teams and tech bloggers. The bug also affected Polish users (estimated tens of thousands). UODO did not open proceedings (the case was under DPC Ireland, and the DPC determined there was insufficient risk).

---

## Sources

1. Douglas MacMillan, Robert McMillan, "Google Exposed User Data, Feared Repercussions of Disclosing to Public," *The Wall Street Journal*, October 8, 2018. URL: https://www.wsj.com/articles/google-exposed-user-data-feared-repercussions-of-disclosing-to-public-1539017194 (accessed: 2026-04-17)

2. Ben Smith, "Project Strobe: Protecting your data, improving our third-party APIs, and sunsetting consumer Google+," Google Blog, October 8, 2018. URL: https://blog.google/technology/safety-security/project-strobe/ (accessed: 2026-04-17)

3. Google blog, "Expediting changes to Google+," December 10, 2018 — announcement of the second bug and acceleration of the shutdown.

4. *Matal et al. v. Google LLC*, N.D. Cal., Case No. 5:18-cv-06164 — PACER documents.

5. SEC Cybersecurity Disclosure Rules, July 26, 2023. URL: https://www.sec.gov/news/press-release/2023-139 (accessed: 2026-04-17)

6. Sundar Pichai, testimony before the House Judiciary Committee, December 11, 2018. Transcript: https://judiciary.house.gov/calendar/eventsingle.aspx?EventID=1713 (accessed: 2026-04-17)

7. Google Takeout archive — documentation of the G+ data export process.

8. *In re Yahoo! Inc. Securities Litigation*, N.D. Cal., MDL No. 2752 — precedent.

9. Kaplan Fox & Kilsheimer LLP, press materials on the USD 7.5 million settlement.

10. IAPP, "Google+ data exposure: Lessons for cybersecurity disclosure," October 2018. URL: https://iapp.org

---

*Last updated: 2026-04-17*
*Card in database: B03_google_plus.md*
