---
id: B04
slug: b04-google-location-history
group: B
group_label: Google
title: Google Location History
year_revealed: 2018
last_updated: '2026-04-17'
companies:
- Google
status: concluded
jurisdictions:
- EU
- US
- AU
legal_basis:
- State consumer protection
- FTC Act § 5
- RODO art. 6
- '7'
- '13'
- ACL
fines:
- amount: 85000000
  currency: USD
  authority: AZ AG
  date: 2022-10
  category: state_attorney_general
  status: paid
- amount: 391500000
  currency: USD
  authority: 40 US AGs
  date: 2022-11
  category: state_attorney_general
  status: paid
- amount: 20000000
  currency: USD
  authority: Indiana AG
  date: 2022-12
  category: state_attorney_general
  status: paid
- amount: 9500000
  currency: USD
  authority: DC AG
  date: 2022-12
  category: state_attorney_general
  status: paid
- amount: 8000000
  currency: USD
  authority: TX AG (Pixel 4 DJ ads, not location)
  date: 2023-01
  category: state_attorney_general
  status: paid
- amount: 40000000
  currency: USD
  authority: ACCC / Federal Court of Australia (~AUD 60M)
  date: 2022-08
  category: regulatory_fine
  status: paid
- amount: 50000000
  currency: USD
  authority: PIPC South Korea (~KRW 69.2B)
  date: 2022-09
  category: regulatory_fine
  status: paid
- amount: 62000000
  currency: USD
  authority: '*Patacsil v. Google* (cy pres)'
  date: 2024-04
  category: class_action_settlement
  status: paid
whistleblowers: []
journalists: []
related_cases:
- B02
- B03
- B01
- D04
- B06
tags:
- dark-patterns
- sledzenie-lokalizacji
- dziennikarze
- rodo
- pozew-zbiorowy
categories:
- privacy
geo_coords: []
priority: TOP
card_complete: true
word_count: 3559
explainer:
  src: /animations/b04-google-location-history.html
  duration: '60s'
  title: Location History — tracking despite being turned off
subtitle: Tracking despite the setting being turned off
years_active:
- 2014
- 2022
---

# B04 — Google Location History: Tracking despite the setting being turned off

> **Category:** Location tracking / misleading interfaces / deceptive practices
> **Company/companies:** Google (Alphabet)
> **Years:** 2014–2022 (practice), August 13, 2018 (disclosure), 2022–2024 (settlements)
> **Status:** Concluded (on the location track) — record $391.5 million settlement with 40 states; additional penalties in AU, KR, US states; the separate Texas location case closed in 2025 with a $1.375 billion settlement
> **Card ID:** B04

---

## Metadata

| Field | Value |
|-------|-------|
| Country/region | USA (40+ states), Australia, South Korea, EU (limited) |
| Year revealed | August 13, 2018 (*Associated Press*, Ryan Nakashima) |
| Years of practice | 2014–2022 (over 8 years) |
| Total penalties | **~$620 million** (location track: state AGs + ACCC + PIPC on Google + *Patacsil* cy pres). Excludes the $8M Texas Pixel 4 ad settlement (separate case) and the $1.375B Texas location settlement of 2025. |
| Currency | USD/AUD/KRW/EUR |
| Legal basis | State consumer protection (40 US states), FTC Act § 5, GDPR art. 6, 7, 13; ACL (Australia); PIPA (Korea) |
| Whistleblower/discoverer | **Ryan Nakashima** (*Associated Press*) + **Douglas C. Schmidt** (Vanderbilt) |
| Number of affected | All Google/Android users worldwide — billions of people |
| Current status | Google has reformed the settings; Location History is off by default for new accounts (2024) |

---

## TL;DR

**On August 13, 2018**, *Associated Press* journalist **Ryan Nakashima** revealed that **Google continues collecting location data** from Android and iOS devices **even after the user turns off the "Location History" setting**. Instead of feeding the visible Timeline, the data was routed to a second, hidden setting: **"Web & App Activity"** — **on by default** and without asking explicitly about location. Nakashima proved it with a scientific experiment: he **bought 20 phones with different Google accounts**, disabled Location History on all of them, and analyzed what Google was collecting. The result: Google knew the user's position via Wi-Fi, IP, sensor fusion, and photo metadata. Academic verification was carried out by **Jonathan Mayer** of Princeton (the same researcher behind Safari Workaround — B02).

A landmark 2018 report by **Prof. Douglas Schmidt** of Vanderbilt University: an Android sitting idle on a desk, with nobody using it, **sends 340 telemetry transmissions to Google per day**. By comparison, an iPhone in an analogous state: about 30 per day to Apple.

**November 14, 2022 — 40 US state attorneys general** reached a joint settlement with Google for **$391.5 million** — **a record of its kind in US consumer-law history before 2024**. Earlier: **Arizona separately: $85 million** (October 2022). After: **December 29, 2022 — Indiana $20 million; December 30, 2022 — DC $9.5 million** (totaling $29.5M; Texas and Washington did NOT enter this settlement in that timeframe). **January 2023 — Texas separately: $8 million** — but that settlement was over **misleading Pixel 4 ads (DJ endorsements), NOT location tracking**. The Texas location case ended in 2025 with a $1.375 billion settlement. **August 12, 2022 — Federal Court of Australia: AUD 60 million**. **September 14, 2022 — South Korea PIPC: KRW 69.2 billion** (~$50 million) on Google (and a separate KRW 30.8 billion on Meta — totaling KRW 100 billion). **April 2024 — Patacsil et al. v. Google: $62 million cy pres** (Berkman Klein, Free Press, ACLU N. Cal., CDT, EFF); class members did NOT receive individual payments.

Internal Google documents disclosed in the Arizona lawsuit showed that **Google had known about user confusion since 2014**. Internal engineers proposed simplifying the settings. Management rejected the idea: **"this will reduce ad targeting precision."** In another internal email, **Google Maps VP Jen Fitzpatrick** herself admitted that **she did not fully understand how the two settings worked**.

The case became **a textbook example of misleading interfaces** — deliberately confusing UX. Under GDPR, it is a classic violation of art. 7 (conditions for consent) and art. 13 (information obligation). In the US, it is a violation of state consumer protection law in 40+ states. In 2024, Google reformed the settings and **turns off Location History by default** for new accounts.

---

## Timeline

- **2005** — Google acquires Keyhole → launches Google Earth → later Google Maps Timeline.
- **2009** — Android debuts. Location Services introduced.
- **2013** — Google introduces "Location History" as a Maps feature.
- **2014** — Google introduces **Web & App Activity** as a separate setting. **Internal engineers notice user confusion**; simplification proposals are rejected.
- **2014–2018** — the practice continues undetected publicly. Billions of location data points collected from users who believe they have turned tracking off.
- **August 13, 2018** — *Associated Press*, Ryan Nakashima: "Google tracks your movements, like it or not." AP experiment with 20 phones.
- **August 13, 2018** — Within hours, Google **updates its help text** (without changing functionality). The line "When Location History is off, the places you go are not stored" is rewritten.
- **August 13, 2018** — Prof. Schmidt of Vanderbilt publishes the report "Google Data Collection" — 340 transmissions per day from Android.
- **September 2018** — Class action **Patacsil v. Google** (N.D. California).
- **May 2020** — Arizona AG (Mark Brnovich) files *State of Arizona v. Google*.
- **January 2022** — 4 state AGs join: DC (Karl Racine), Indiana, Texas, Washington.
- **August 12, 2022** — **Federal Court of Australia imposes AUD 60 million on Google** (ACCC action).
- **September 14, 2022** — **South Korea PIPC: KRW 69.2 billion** (~$50M) on Google + KRW 30.8 billion (~$22M) on Meta (KRW 100 billion combined).
- **October 2022** — **Arizona wins: $85 million settlement**.
- **November 14, 2022** — **40 US attorneys general reach a joint settlement: $391.5 million** (historic record).
- **December 29, 2022** — **Indiana: $20 million**.
- **December 30, 2022** — **DC: $9.5 million** (combined with Indiana: $29.5M).
- **January 2023** — **Texas separately: $8 million** — but for **misleading Pixel 4 ads (DJ endorsements)**, NOT location tracking.
- **April 2024** — **federal class-action settlement *Patacsil et al. v. Google*: $62 million cy pres** (Berkman Klein, Free Press, ACLU N. Cal., CDT, EFF); class members did NOT receive individual payments. Lead plaintiffs: Napoleon Patacsil, Michael Childs, Noe Gamboa.
- **2024** — Google announces reforms: **Location History off by default for new accounts**; interface simplification.
- **2025** — the Texas location case closes with a **$1.375 billion** settlement (separate from the Pixel 4 settlement).

---

## Mechanism

### How it worked — the architecture of deception

**Two settings, misleading names, one illusion of control.**

Google had (and in part still has) **two separate settings** for location:

#### 1. "Location History"
- Google's description: "Save a history of places you've been."
- Creates the **visible Timeline** on a map (timeline.google.com).
- The user sees a visualization of their movements against a map.
- Turning it off: it seemed logical that this would end location collection.

#### 2. "Web & App Activity"
- Google's description: "Save activity in Google Search, Maps, Chrome, Gmail."
- **On by default** with every new account.
- **Does not ask explicitly about location.**
- But **collects location** every time you:
  - open Google Maps
  - search on Google Search (Google knows where you are searching from)
  - write an email via Gmail mobile
  - open Chrome
  - Android sends a crash report
  - Google Assistant responds to a hotword
  - Google Photos syncs

Turning off **Location History** did not affect **Web & App Activity**. The user would turn off "history" thinking tracking had stopped — but Google kept collecting data from the second setting.

**Even turning off both settings** did not end everything:
- **IP address** signals the city
- **Wi-Fi scans** (Android scans surrounding networks even when Wi-Fi is turned off on the phone — via "Wi-Fi scanning" and "Bluetooth scanning" in settings)
- **Sensor fusion** — accelerometer, gyroscope, magnetometer provide information about movement and orientation
- **EXIF metadata** in photos saved to Google Photos (if sync is enabled)

### Dark patterns in the interface

When a user tried to turn off Web & App Activity, Google displayed an **alarming pop-up**: *"Without this history, Google Maps, the Assistant, and other services will be less useful."* — a picture of catastrophe designed to deter the user from turning it off.

Alternatively: the "Turn off" button was **less visible** than "Cancel." A classic misleading interface.

When the user visited `myactivity.google.com`, the interface showed **dashboards with five different types of history**, without a clear explanation of the relationships between them. UX experts called it **"intentional complexity."**

### Internal evidence (Arizona discovery, 2020–2022)

In the Arizona lawsuit, Google was compelled to disclose internal documents. The key ones:

1. **2014 email**: Google Maps VP **Jen Fitzpatrick** — admits herself that *"I don't know exactly how these two settings work together."* If the VP of Maps doesn't understand, how can a user?
2. **2015 memo**: the UX team proposes **consolidating the settings into one**. The marketing response: **"this will reduce ad targeting precision by about 12%."** Proposal rejected.
3. **2017 presentation**: internal data shows that **73% of users**, after turning off Location History, **did not know** that location was still being collected.

---

## Discovery

### Who is Ryan Nakashima

**Ryan Nakashima** — a technology journalist at *Associated Press* (at the time). He specializes in analytical tech journalism. His **20-phone** experiment has been described as **"the most cost-effective journalistic experiment of the decade"** — AP paid around $5,000 for the phones, and the case led to **$660+ million in fines and changes in Google's policy**.

### Experimental methodology

Nakashima bought **20 phones** of various models (Android, iPhone) with different Google accounts. On each one he:
1. Turned off "Location History" in Google account settings.
2. Turned off "Location" in the operating system settings (where available).
3. Turned off various combinations of app permissions.
4. Over several weeks, **walked around with the phones** across the San Francisco Bay Area.
5. Downloaded the activity history of each account from `myactivity.google.com`.

**Result:** Google knew the user's exact location despite the settings being turned off. The data contained names of cafés, parks, addresses, observation points.

**Academic verification:** Jonathan Mayer (Princeton, formerly Stanford) repeated the experiment and confirmed the findings.

### The role of Douglas Schmidt

**Prof. Douglas C. Schmidt** of Vanderbilt University published the 2018 report **"Google Data Collection"** — a quantitative analysis of data sent by Android to Google. Key findings:
- **An Android at rest** on a desk sends Google **340 telemetry transmissions per day**.
- An iPhone with comparable activity: **~30 transmissions per day** to Apple (10× fewer).
- Even **without active Chrome**, Android sends **location information every few minutes** (if Wi-Fi scanning is on).

Schmidt's report was funded by **DCN (Digital Content Next)**, a publishers' association, which gave Google an argument about conflict of interest. But the methodology was sound — later studies by Mayer, Acar, and Narayanan confirmed it.

### First publications

- **August 13, 2018** — Ryan Nakashima, "AP Exclusive: Google tracks your movements, like it or not," *Associated Press*.
- **August 13, 2018** — Douglas Schmidt, "Google Data Collection," Vanderbilt University.
- **August 14, 2018** — reactions in *NYT*, *WSJ*, *WaPo*, *BBC*, *The Guardian*.

---

## Key people

### Discoverers

- **Ryan Nakashima** (*AP*) — described above.
- **Douglas C. Schmidt** — professor of Computer Science, Vanderbilt University. Author of the 2018 report. Expert in middleware, networking, formerly DARPA.
- **Jonathan Mayer** (Princeton) — academic verification.
- **Brian Fung** (*Washington Post*) — analysis of misleading interfaces.

### Regulators / prosecutors

- **Mark Brnovich** — Attorney General of Arizona 2015–2023 (Republican). The first AG to go after Google for Location History. Lawsuit filed May 2020.
- **Karl Racine** — Attorney General of DC 2015–2023 (Democrat). Joined the action in January 2022.
- **Letitia James** — AG of New York, a key figure coordinating the 40-state settlement.
- **Rob Bonta** — AG of California.

### Google

- **Jen Fitzpatrick** — VP of Google Maps, later VP of Core Systems. The internal email disclosed in discovery showed that **she herself was not sure** how the two settings worked.
- **Sundar Pichai** — CEO. Led the PR campaign for reforms in 2024.

### Lawyers

- **Bernstein Litowitz Berger & Grossmann LLP** — lead firm on the class action.
- **Bob Trujillo** — Arizona Assistant AG, architect of the documentation.

---

## Company response

### Google

**Stage 1: cosmetic change (August 2018).** Within hours of the AP publication, Google updated its **help text** but **did not change the functionality**. The old line *"When Location History is off, the places you go are not stored"* was rewritten to be more precise, explaining the difference between LH and W&AA. This did not change the practice — only the documentation.

**Stage 2: defense (2018–2022).** For 4 years Google argued that the settings were clear and that users had full control. In AG lawsuits, they repeated: *"Our products are built with privacy in mind."*

**Stage 3: loss (2022).** Arizona wins in October 2022 — $85 million. This breaks the defense. One month later, 40 states reach a settlement.

**Stage 4: reform (2023–2024).** Google announces changes:
- **Location History off by default** for new accounts (2024)
- Simplification of the "Your Data in Maps" interface
- **Auto-delete after 18 months** (previously: unlimited retention)
- **Incognito Mode in Maps** feature
- **Geofence warrants: architecture change** — in 2023 Google announced that **the new Location History infrastructure will not allow responses to geofence warrants**.

---

## Legal proceedings

### Jurisdictions

- US federal (FTC did not open a case — notably)
- US state (40+ states, various proceedings)
- US class actions (Patacsil v. Google and others)
- Australia (ACCC)
- South Korea (PIPC)
- Several EU states — limited actions (a case was before Ireland's DPC, but the DPC did not open proceedings)

### Legal basis

- **State Consumer Protection Acts** — 40+ US states
- **FTC Act § 5** — unfair/deceptive practices (argument used, but FTC did not open a separate case)
- **GDPR art. 6** — lack of a valid legal basis for processing
- **GDPR art. 7** — conditions for consent (must be "freely given, specific, informed, and unambiguous")
- **GDPR art. 13/14** — information obligation
- **ACL (Australian Consumer Law)** — misleading/deceptive conduct
- **PIPA (Personal Information Protection Act, Korea)** — duty of informed consent

### Key stages

| Date | Stage |
|------|-------|
| August 2018 | AP publication; Google changes help text |
| May 2020 | Arizona lawsuit |
| August 12, 2022 | Federal Court of Australia: AUD 60M |
| September 14, 2022 | South Korea PIPC: KRW 69.2B (Google) |
| October 2022 | Arizona wins $85 million |
| November 14, 2022 | 40 states, $391.5 million |
| December 29–30, 2022 | Indiana $20M + DC $9.5M |
| January 2023 | Texas $8M (Pixel 4 DJ ads — NOT location) |
| April 2024 | *Patacsil v. Google*: $62M cy pres |
| 2025 | Texas (location, separate case): $1.375B |

### Related case law

- ***Carpenter v. United States* (585 U.S. 296, 2018)** — US Supreme Court, decided **June 22, 2018** by a 5-4 vote (majority opinion: Chief Justice **John Roberts**): **the 4th Amendment requires a warrant** for the government to obtain cell-site location data from a mobile carrier. Directly connected to Google Location History — later extended to **geofence warrants**.
- **Safari Workaround case (B02)** — analogous pattern of "deception."
- **Onavo case (A03)** — broader practice of hidden tracking.

---

## Penalties and settlements

| Date | Body | Amount | Jurisdiction | Basis |
|------|------|--------|--------------|-------|
| August 12, 2022 | Federal Court of Australia (ACCC) | AUD 60,000,000 | Australia | ACL |
| September 14, 2022 | PIPC | KRW 69,200,000,000 (~$50M) | Korea | PIPA |
| October 2022 | AZ AG | $85,000,000 | Arizona | Consumer Fraud Act |
| November 14, 2022 | 40 US AGs | **$391,500,000** | US state | Consumer protection |
| December 29, 2022 | Indiana AG | $20,000,000 | Indiana | Consumer protection |
| December 30, 2022 | DC AG | $9,500,000 | DC | Consumer protection |
| January 2023 | TX AG (Pixel 4 DJ ads — NOT location) | $8,000,000 | Texas | False advertising |
| April 2024 | *Patacsil v. Google* (cy pres, no individual payments) | $62,000,000 | US class | State laws |

**Total (location-track cases, excluding Pixel 4 and 2025 Texas): ~$620 million**

> **Note:** the $8M Texas settlement (January 2023) was about **misleading Pixel 4 advertising** (DJ endorsements), NOT location tracking. The Texas location case ended only in **2025 with a $1.375 billion settlement**. From Korea: KRW 69.2B on Google + KRW 30.8B on Meta = KRW 100B combined.

---

## Precedents and implications

### For US law

- **Record state settlement of $391.5 million** (November 2022) — the largest of its kind before 2024.
- **The "multi-state AG action" model** — established as effective against Big Tech. Repeated in cases against Meta (2023), TikTok.
- ***Carpenter v. United States*** — a sustained 4th Amendment precedent for location data.

### For EU law

- **A new quality for GDPR art. 7** — misleading interfaces in consent flows are **a classic violation** of the "freely given" consent requirement.
- **The DPAs of Denmark, Germany, Spain** issued guidance inspired by the Google case.
- **The EDPB's guidelines on misleading interfaces** (2022) were partly inspired by the case.

### For Big Tech practice

- **Defaults = a business decision** — UX design with "on by default" is regulatorily risky. Since 2023, Apple, Meta, and TikTok have been moving toward **defaults-off** for new users.
- **Internal documents are a risk** — disputes about misleading interfaces, "don't write anything you don't want to see in the NYT" (see also B03 Google+).
- **"Geofence warrants"** — a police technique (a list of all phones within X radius of a crime scene) began to be heavily restricted. In 2023, Google announced that **its future infrastructure will not allow such queries**. This curtailed an investigative tool for police — mainly in the US, where geofence warrants were used in tens of thousands of cases per year.

---

## Class actions

| Case | Court | Status | Value | Affected |
|------|-------|--------|-------|----------|
| *Patacsil et al. v. Google* | N.D. Cal. | Settled April 2024 | **$62 million cy pres** (Berkman Klein, Free Press, ACLU N. Cal., CDT, EFF) — class members did NOT receive individual payments. Lead plaintiffs: Napoleon Patacsil, Michael Childs, Noe Gamboa | Android users, USA |
| *Matera v. Google* | N.D. Cal. | Settled | Part of the above | Chrome users |
| *Roe v. Google* (geofence) | N.D. Cal. | Pending | Undetermined | People affected by geofence warrants |

---

## Conclusions for citizens

### What does this mean for me?

If you have used Android or Google apps on an iPhone for the last 10 years — **Google knows your movements in detail: your workplace, your home, your doctor, your lover, your Sunday Mass**. Even if you turned off "Location History." That data can be used for: ad targeting, police geofence warrants, leaks, sales to "data brokers," and, in the event of a hack — to track your family.

### How to protect yourself?

**Immediate steps (10 minutes):**

1. **Go to `myactivity.google.com`** and **turn off**:
   - Web & App Activity
   - Location History
   - YouTube History
2. **Set auto-delete to 3 months** (minimum) for all activity: Data & Privacy → Auto-delete.
3. **Delete existing history**: Timeline → Settings → "Delete all Location History."
4. **Turn off "Ad personalization"** at `adssettings.google.com`.

**Android — in detail:**

5. **Settings → Location** → turn off "Use precise location" for apps that don't need precise location (weather, social media).
6. **Settings → Location → Wi-Fi scanning, Bluetooth scanning** — **turn both off**! Even with Wi-Fi off, Android scans nearby networks if these options are enabled.
7. **Settings → Apps → review each app** — location should be set to **"Only while using the app"** instead of "Always."
8. **Consider GrapheneOS** — a privacy-focused Android distribution without Google Services. For advanced users.

**iPhone:**

9. **Settings → Privacy & Security → Location Services** — review app by app. For Google Maps, set "Only While Using the App" or "Precise Location: OFF."
10. **Settings → Privacy & Security → Tracking** — turn off "Allow Apps to Request to Track."
11. **iCloud Private Relay** (iCloud+) — hides your IP from Google.

### What are my rights?

**In the EU (GDPR):**
- **Art. 7** — withdraw consent that was coerced by dark patterns. Meta and Google must accept withdrawal of consent.
- **Art. 17** — demand erasure of location data from Google's history.
- **Art. 15** — obtain a full copy of the data via Google Takeout.
- **Art. 82** — compensation for non-material damage (**see CJEU C-340/21, 2023**, the mere fear of misuse may constitute damage).

**In the US:**
- State consumer protection laws (40+ states with precedent).
- California CCPA/CPRA — right to "opt out of sale."
- State privacy laws (NY Stop Hacks, Massachusetts, etc.).

### Where to file complaints?

- **Poland**: UODO
- **Reporting misleading interfaces**: UODO and UOKiK (consumer law)
- **USA**: State AG
- **Australia**: ACCC
- **Korea**: PIPC

### A note for mediators and lawyers

Google location data is potentially **key evidence** in cases involving:
1. **Family law** — divorces (proving cohabitation / separation), child custody (where the child actually lives).
2. **Inheritance** — where the deceased spent time, how they spent it.
3. **Insurance** — whether an accident truly occurred where it was claimed.
4. **Alibis** — in criminal cases, the data can confirm or refute an alibi.

Procedure: the client can download their own data via **takeout.google.com** → "Location History" → export as JSON or KML. In Polish civil proceedings, these data can be requested as evidence if the client consents.

**Conflicting interests**: a client may want to turn off history (to avoid being tracked) or keep it (as a potential alibi). **An informed decision**, not a default.

**Geofence warrants** in Poland — theoretically possible under art. 180 of the Code of Criminal Procedure, but case law is almost nonexistent. Polish courts have not yet developed a precedent analogous to *Carpenter*.

---

## Context

- **Nakashima's 20-phone experiment** cost AP about **$5,000**. The consequences: **$620+ million in fines** for Google (location track only, excluding the Pixel 4 settlement and the $1.375B Texas 2025 settlement) and a global reform of its settings. **Journalism ROI**: ~124,000×.
- **Schmidt's report — 340 transmissions per day** — since 2018 this number has been cited in hundreds of articles, books, academic lectures, and congressional testimony. By comparison: iPhone ~30/day. The 10× difference shows the scale of Google's ecosystem.
- **"Google already knew"** — internal emails from 2014, disclosed in the Arizona lawsuit, showed that Google **had known about user confusion from the start**. Engineers proposed simplification. Management rejected it because **"it will reduce ad targeting precision by 12%."**
- **The VP of Maps didn't understand her own product** — in an internal email, Jen Fitzpatrick herself admitted that **she was not sure** how the two settings worked. A classic case of "emergent complexity" — a product that **its own leaders** do not understand.
- **Poland did not receive a separate penalty** — UODO did not open proceedings, because the case sat with Ireland's DPC via the one-stop-shop mechanism. The DPC did not treat the case as a priority. Polish citizens were, however, part of class actions that could generate compensation.
- ***Carpenter v. United States* (SCOTUS 2018)** — a landmark ruling decided **June 22, 2018**, majority opinion by Chief Justice **John Roberts**. Timothy Carpenter was convicted of robberies in Detroit in part on the basis of **127 days of location data** obtained from a mobile carrier **without a warrant**. The US Supreme Court ruled 5:4: such data requires **a judicial warrant** under the 4th Amendment. This changed police practice across the US — and indirectly opened a discussion on **geofence warrants** to Google.
- **"Geofence warrants"** — a technique in which police ask Google: "give us all phones within a 500 m radius of a crime scene between 2:00 and 4:00 p.m." The list may contain dozens or hundreds of people — including innocent bystanders. In 2023, Google **announced an architecture change**: the new Location History infrastructure does not allow such queries to be answered. This limited an investigative tool for police — mainly in the US, where geofence warrants were used in tens of thousands of cases per year.
- **Texas — note: two distinct cases** — the January 2023 settlement under AG **Ken Paxton** (Republican) of $8 million was over **misleading Pixel 4 ads (DJ endorsements)**, NOT location tracking. The Texas location case ended only in **2025 with a $1.375 billion settlement**.
- **Australia ACCC** — in 2021, the Australian market regulator lost the first trial-level case. The appeal resulted in a decision by the **Federal Court of Australia on August 12, 2022 imposing AUD 60 million**. A case-law precedent for common-law jurisdictions.
- **South Korea** — on **September 14, 2022**, the PIPC (Personal Information Protection Commission) imposed a **combined KRW 100 billion** on Google + Meta: **KRW 69.2 billion (~$50M) on Google** and **KRW 30.8 billion (~$22M) on Meta**. One of the largest decisions in the agency's history. Korea is particularly strict about location data.
- **Google Takeout as an answer** — after the case, Google made it easier to download location history as a "response to privacy concerns." In practice: downloading one's own data shows most users **how detailed it is**, which is often shocking.

---

## Sources

1. Ryan Nakashima, "AP Exclusive: Google tracks your movements, like it or not," *Associated Press*, August 13, 2018. URL: https://apnews.com/article/north-america-science-technology-business-ap-top-news-828aefab64d4411bac257a07c1af0ecb (accessed: 2026-04-17)

2. Douglas C. Schmidt, "Google Data Collection," Digital Content Next / Vanderbilt University, August 15, 2018. URL: https://digitalcontentnext.org/wp-content/uploads/2018/08/DCN-Google-Data-Collection-Paper.pdf (accessed: 2026-04-17)

3. *State of Arizona v. Google LLC*, Maricopa County Superior Court, Case No. CV 2020-006219 (court documents).

4. National Association of Attorneys General, press release "40 States Reach $391.5 Million Settlement with Google Over Location Tracking Practices," November 14, 2022.

5. *Carpenter v. United States*, 585 U.S. 296 (2018) — SCOTUS ruling. URL: https://www.supremecourt.gov/opinions/17pdf/16-402_h315.pdf

6. Australian Competition & Consumer Commission, *ACCC v Google LLC & Anor*, Federal Court of Australia decision of August 12, 2022 (AUD 60M). See DLA Piper analysis.

7. Personal Information Protection Commission (Korea), decision of September 14, 2022 — KRW 69.2 billion on Google + KRW 30.8 billion on Meta (KRW 100 billion combined). See TechCrunch, "South Korea's privacy watchdog fines Google and Meta…," September 14, 2022.

8. *Patacsil et al. v. Google LLC*, N.D. Cal., PACER documents. Settlement approved in April 2024 ($62 million cy pres distribution to Berkman Klein, Free Press, ACLU N. Cal., CDT, EFF; class members did not receive individual payments). See MediaPost, April 22, 2024.

8a. Kelley Drye & Warren LLP — analysis of the January 2023 Texas vs Google settlement ($8 million over misleading Pixel 4 ads — DJ endorsements; NOT location tracking).

9. *Matera v. Google Inc.*, N.D. Cal., related lawsuit.

10. European Data Protection Board, "Guidelines 03/2022 on deceptive design patterns in social media platform interfaces," 2022.

11. Brian Fung, "Google keeps a detailed record of your location, even when you tell it not to," *The Washington Post*, August 2018.

12. Jonathan Mayer et al., Princeton University CITP — verification of the AP experiment.

13. Google blog, "Your personal data is protected on Google. Here's how," 2023 — announcement of Location History reforms.

14. GDPR art. 6, 7, 13; EDPB Guidelines on Consent under Regulation 2016/679.

15. CEO Sundar Pichai, congressional testimony 2018, 2020 — location-related issues.

---

*Last updated: 2026-04-17*
*Card in database: B04_location_history.md*
