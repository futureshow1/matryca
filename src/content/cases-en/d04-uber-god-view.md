---
id: D04
slug: d04-uber-god-view
group: D
group_label: Amazon, Uber
title: Uber God View
year_revealed: 2014
last_updated: '2026-04-17'
companies:
- Uber Technologies
status: concluded
jurisdictions:
- US
legal_basis:
- FTC Act § 5
- NY state consumer protection
fines:
- amount: 20000
  currency: USD
  authority: NY AG
  date: 2016-01
  category: state_attorney_general
  status: paid
- amount: 0
  currency: USD
  authority: FTC
  date: 2018-04
  category: regulatory_fine
  status: paid
- amount: 148000000
  currency: USD
  authority: 50 stanów
  date: 2018-09
  category: state_attorney_general
  status: paid
whistleblowers: []
journalists:
- Johana Bhuiyan
related_cases:
- D05
- B04
- D06
- B02
- E06
tags:
- dark-patterns
- sledzenie-lokalizacji
- dziennikarze
categories:
- privacy
geo_coords: []
priority: TOP
card_complete: true
word_count: 2513
explainer:
  src: /animations/d04-uber-god-view.html
  duration: '60s'
  title: God View — Uber tracked journalists for fun
subtitle: An internal tool for tracking journalists and customers
years_active:
- 2013
- 2014
---

# D04 — Uber God View: An internal tool for tracking journalists and customers

> **Category:** Access abuse / journalist tracking / FTC consent decree
> **Company/companies:** Uber Technologies
> **Years:** ~2013–2014 (practice), November 2014 (disclosure), 2017–2018 (FTC consent decree)
> **Status:** Concluded — FTC consent decree with 20-year monitoring; NY AG settlement 2016
> **Card ID:** D04

---

## Metadata

| Field | Value |
|------|---------|
| Country/region | US federal and state (New York) |
| Year revealed | November 17–18, 2014 (*BuzzFeed News*) |
| Years the practice ran | ~2013–2014 (God View as an internal tool) |
| Total penalty | No financial fine (FTC); **20-year consent decree with audits** |
| Currency | — |
| Legal basis | FTC Act § 5, NY state consumer protection |
| Whistleblower/discoverer | **Johana Bhuiyan, Ben Smith** (*BuzzFeed News*) |
| Number of victims | Journalists, Uber users (no scale provided) |
| Status (today) | Uber undergoing reforms under FTC supervision (2018–2038) |

---

## TL;DR

**November 17, 2014** — ***BuzzFeed News***, **Ben Smith** (editor-in-chief) and **Johana Bhuiyan** (reporter) published a series of articles that triggered **Uber's first major scandal**. It started with an incident: Bhuiyan ordered an Uber to meet with **Josh Mohrer** (regional general manager of Uber NYC). When she arrived, Mohrer said: *"I was tracking you."* During a dinner for journalists, **Emil Michael** (SVP Business, #2 at Uber) suggested in an off-record conversation (later published) that Uber could hire **"opposition researchers"** to **dig up dirt on journalists** critical of Uber — specifically on **Sarah Lacy** of PandoDaily, who had been writing about the company's **"asshole culture."**

*BuzzFeed* also revealed the existence of a tool called **"God View"** (internally: "Heaven View") — an interface used by Uber employees that showed a **bird's-eye view of all active customers and drivers** in a given city, with full names, routes, and ride histories. God View was accessible to **literally every employee** — from engineers to recruiters, from marketing to BI.

The scandal escalated. **Eric Schneiderman** (NY Attorney General) opened an investigation. **Travis Kalanick** (CEO) issued a statement that God View was **"used in a limited way"** (false).

**January 6, 2016** — NY AG announces a settlement: Uber pays a **$20,000 fine** (a symbolic sum for violating the 2014 NY breach notification law — concerning a different incident), but agrees to:
- Encrypt passenger location data
- Implement MFA
- Restrict access to God View
- Conduct an annual privacy audit

**August 15, 2017** — **FTC opens** its first consent decree against Uber for **misrepresentation** ("we assured safeguards... not necessarily"). **No financial fine**, but 20-year monitoring.

**April 2018** — FTC **withdraws** the first consent decree and enters into a **new, broader one** — also covering the **57 million breach (2016, undisclosed)** → case D06. The new consent decree: a **$148 million** penalty in total, including state settlements.

God View became a symbol of Uber's **"bro culture"** and the subject of many books (including Mike Isaac's *"Super Pumped: The Battle for Uber"* in 2019). Case D04 was **the first major corporate privacy scandal** of the smartphone era — a textbook case of **abuse of internal data access**.

---

## Timeline

- **2009** — Uber (then UberCab) founded in San Francisco by Travis Kalanick and Garrett Camp.
- **2010–2013** — expansion, app development. Internal tools, including **God View**.
- **~2011–2014** — God View used by Uber employees **without effective access controls**.
- **2013–2014** — documented instances of God View use: tracking journalists, celebrities, employees spying on ex-partners.
- **October 2014** — Uber dinner with journalists at Waverly Inn (NYC). Emil Michael makes comments about "opposition researchers" investigating Sarah Lacy.
- **November 15, 2014** — Bhuiyan orders an Uber to the office; Josh Mohrer admits he had been tracking her.
- **November 17, 2014** — ***Ben Smith***, *BuzzFeed*: "Uber Executive Suggests Digging Up Dirt On Journalists." Dinner comments revealed.
- **November 18, 2014** — ***Johana Bhuiyan, Charlie Warzel***, *BuzzFeed*: "'God View': Uber Investigates Its Top New York Executive For Privacy Violations." Mohrer and God View.
- **November 18, 2014** — Uber speaks publicly and **publishes its privacy policy for the first time** (it had not had one before).
- **November 19, 2014** — **Eric Schneiderman** (NY AG) opens an investigation.
- **February 2015** — Uber reveals that **a breach of 50,000 drivers took place in 2014** (but not 2016).
- **2015** — investigations continue.
- **January 6, 2016** — **NY AG settlement**: $20,000 for 2014 breach notification + privacy obligations.
- **2016** — Uber suffers **another, larger breach (57 million records)** — concealed → D06.
- **August 15, 2017** — **FTC consent decree** (first version).
- **November 2017** — public disclosure of the 57 million record breach (concealed since 2016) → D06.
- **April 12, 2018** — FTC **withdraws** the first consent decree and enters into a **new one** — also covering the 57 million breach.
- **September 2018** — joint settlement of 50 US states: **$148 million**.
- **2018–2022** — Uber reforms under new CEO **Dara Khosrowshahi** (since 2017).
- **2038** — projected end of the 20-year consent decree.

---

## Mechanism

### How God View worked

**Uber's internal interface** known as **"God View"** (in some versions: "Heaven View"):

- Map of the city with **all active Uber vehicles in real time** (bird's-eye view)
- **All active customers** — with full names, phone numbers, addresses
- **Ride history** of every customer — origin, destination, time, price
- **Driver** — who is driving, how many times, ratings
- Ability to **search by name, phone number, or email**

**Who had access (until 2014):**
- Engineers
- Account managers
- Recruiters (yes — including those recruiting drivers)
- Marketing
- BI (Business Intelligence)
- Operations managers
- **Regional** employees (such as Josh Mohrer in NYC)

Effectively: **hundreds, if not thousands of employees** had access to **the full location data of every customer**.

### Documented abuses

**Sarah Lacy / Emil Michael case:** At the Waverly Inn dinner, Emil Michael suggested that Uber could hire "opposition researchers" to dig up dirt on journalists. He specifically mentioned **Sarah Lacy** — who had criticized Uber's "asshole culture."

**Johana Bhuiyan / Josh Mohrer case:** Mohrer (general manager of Uber NYC) **tracked Bhuiyan** before her arrival at the office. When she got there, he said *"I was tracking you."* Similar cases were reported by other journalists.

**Celebrity tracking:** Peter Sims (venture capitalist) revealed on his blog in 2014 that Uber employees in Chicago had used God View to display his location at a **party** they were attending. Without his consent.

**Ex-partners / stalking:** Internal Uber reports (later disclosed) show that employees repeatedly used God View to **track former girlfriends/boyfriends**. Many were fired, but only **after public exposure**.

### Why it was possible

In 2014 Uber had no:
- **RBAC** (Role-Based Access Control) — everyone had full access
- **Access logging** — no record of who viewed what and when
- **MFA** — no multi-factor authentication
- **Audit trails** — no audit trail at all

The "**move fast**" culture prioritized growth over security. God View was **a key debugging and customer support tool** — so it was **given to everyone**.

---

## Discovery

### BuzzFeed — the key role

**Ben Smith** — then editor-in-chief of *BuzzFeed News*. Before founding his own outlet (Semafor, 2022) and writing at *NYT*. Invited to the Uber dinner at Waverly Inn, he witnessed Emil Michael's comments. He initially considered them **off-record**, but later decided to **publish** — the situation was too scandalous to withhold.

**Johana Bhuiyan** — tech reporter at *BuzzFeed News*, later *Recode*, currently *Los Angeles Times* and *NY Times*. Specializes in Silicon Valley culture reporting. Her personal experience with Mohrer became **a landmark case**.

**Charlie Warzel** — co-author, currently at *The Atlantic* and his own newsletter.

### First publications

- **November 17, 2014** — Ben Smith, "Uber Executive Suggests Digging Up Dirt On Journalists," *BuzzFeed News*. URL: buzzfeed.com/bensmith/uber-executive-suggests-digging-up-dirt-on-journalists
- **November 18, 2014** — Johana Bhuiyan, Charlie Warzel, "'God View': Uber Investigates Its Top New York Executive For Privacy Violations," *BuzzFeed News*. URL: buzzfeed.com/johanabhuiyan/uber-is-investigating-its-top-new-york-executive-for-privacy
- **November 19, 2014** — numerous follow-ups in *NYT*, *Wired*, *Recode*

---

## Key people

### Uber

- **Travis Kalanick** — CEO of Uber until June 2017. Iconic representative of tech's "bro culture." Forced to resign after a string of scandals in 2017.
- **Emil Michael** — SVP Business at Uber. #2 after Kalanick. Author of the infamous "opposition researchers" comments. Stayed at Uber until 2017 (left along with the wave).
- **Josh Mohrer** — General Manager of Uber NYC. Publicly tracked Bhuiyan. Fired after the NY AG investigation.
- **Dara Khosrowshahi** — CEO of Uber since August 2017. Previously CEO of Expedia. Reformer.

### Journalists

- **Ben Smith** — *BuzzFeed News*, later Semafor.
- **Johana Bhuiyan** — lead discoverer.
- **Charlie Warzel** — co-author.
- **Sarah Lacy** — *PandoDaily*, target of Emil Michael's attack.
- **Mike Isaac** — *NYT*, author of the book *"Super Pumped: The Battle for Uber"* (2019).
- **Kara Swisher** — *Recode*, incisive critic of Uber's culture.

### Regulators

- **Eric Schneiderman** — NY Attorney General 2011–2018 (later resigned after his own scandals). Led the God View investigation.
- **Edith Ramirez** — FTC chair 2013–2017. Launched the investigation in 2016.
- **Joseph Simons** — FTC chair 2018–2021. Reached the second consent decree.

---

## Company response

### Uber under Kalanick (2014–2017)

**Phase 1: denial (November 2014).** Kalanick on Twitter: *"Emil's comments at the recent dinner party were terrible and do not represent the company."* Emil Michael: *"I'm sorry... These remarks were wrong no matter the circumstance or audience."*

**Phase 2: privacy posturing (November 2014).** Uber **publishes its privacy policy for the first time** (it had not had one before). Statement: *"Access to customer and driver accounts is being closely monitored and audited."* The FTC later established that **this was false** — Uber was not effectively monitoring anything.

**Phase 3: partial reforms (2015–2016).** Basic safeguards introduced for God View. But **the 2014 and 2016 breaches were concealed**.

### Uber under Khosrowshahi (2017+)

Reform era:
- Travis Kalanick **ousted** in June 2017
- Khosrowshahi (from Expedia) takes over the company
- **New cultural code** ("Cultural Norms"): integrity first
- **Reform CTO** — new Chief Legal Officer, Chief Privacy Officer
- Implementation of the **Holder Report** recommendations (Eric Holder, former US AG, conducted a review of Uber's culture in 2017)

---

## Legal proceedings

### Jurisdictions

- **US federal** — FTC
- **US state** — NY AG Schneiderman (2016); later 50 states jointly (2018)

### Legal basis

- **FTC Act § 5** — unfair/deceptive practices
- **NY Executive Law** — breach notification
- **State consumer protection laws**

### Key stages

| Date | Stage |
|------|------|
| November 17–18, 2014 | BuzzFeed publications |
| November 19, 2014 | NY AG opens investigation |
| January 6, 2016 | NY AG settlement $20,000 |
| August 15, 2017 | FTC first consent decree |
| April 12, 2018 | FTC second consent decree (broader) |
| September 2018 | 50 states $148 million (covers D06 as well) |

---

## Penalties and settlements

| Date | Authority | Amount | Jurisdiction | Basis |
|------|-------|-------|-------------|----------|
| January 6, 2016 | NY AG | $20,000 | New York | Breach notification 2014 |
| April 12, 2018 | FTC | $0 (consent decree, 20 years) | US federal | FTC Act § 5 |
| September 2018 | 50 states | $148,000,000 (covers D06 as well) | US state | Consumer protection |

---

## Precedents and implications

- **First FTC consent decree for a unicorn app company** — a precedent.
- **20-year audit** — standard for serious violations (Microsoft 2002, Google 2011, Facebook 2011).
- **Journalistic whistleblowing** — showing that **one careless executive comment** can unleash a regulatory avalanche.

---

## Class actions

Minimal. Case D04 was **absorbed** into the broader 2017 Uber scandal and subsequent cases.

---

## Conclusions for citizens

### What does this mean for me?

If you use Uber (or a similar app — Bolt, Lyft, FreeNow), **your location, ride history, and contacts** sit in the company's database. History shows that even firms claiming safeguards can have **inadequate internal access controls**. Today Uber is **significantly better** (after 20 years of FTC oversight), but **the problem is systemic**.

### How can you protect yourself?

1. **Limit the data in the app** — a pseudonym, an alternative phone number (if payment can be shielded).
2. **Delete your ride history** regularly in the app (Uber → Menu → Settings → Privacy → Manage Your Data).
3. **Do not connect Uber with Facebook** (profile data).
4. **Uber Family / Uber for Business** — separate accounts for work and private life.

### Note for mediators, lawyers, victims of abuse

- **Stalking victims after divorce** — Uber history may be **used by a former partner** (if they have access to the account). Change the password, enable MFA.
- **Journalists, dissidents** — consider **Uber on an account separate** from your professional one, with a different phone number.
- **In family cases** — Uber ride history may serve as **evidence** (where someone was, when).

---

## Context

- **"I was tracking you"** — Josh Mohrer's quote to Bhuiyan became **an idiom of tech journalism**. It symbolizes the **abuse of internal access** to customer data.
- **Emil Michael at Waverly Inn** — the dinner where it all began. Michael believed the conversation was off-record. Ben Smith reconsidered and published. Michael never recovered his reputation in tech.
- **Sarah Lacy** — the original target of Michael's attack. After the scandal she wrote the book **"A Uterus Is A Feature, Not A Bug"** (2017) on Silicon Valley culture.
- **Johana Bhuiyan's career** — after the Uber scandal she became one of the most respected tech journalists in the US. *LA Times*, *NYT*. Her personal experience **became a source of strength**.
- **"Heaven View"** — an alternative name for God View in some internal documents. The irony: surveillance "from the heavens."
- **Peter Sims / Chicago party** — venture capitalist Peter Sims publicly described in 2014 how Uber employees in Chicago had shown his **real-time location** to other party guests — without his consent. One of the first public cases of God View abuse.
- **Stalking ex-partners** — internal documents showed that **many employees used God View to track former partners**. Documents concerning a concealed disciplinary program were disclosed in 2017.
- **Holder Report (2017)** — Eric Holder, former US Attorney General (under Obama), conducted an independent review of Uber's culture in 2017 after a series of scandals. 47 recommendations. Travis Kalanick was forced to resign following this report.
- **Dara Khosrowshahi reforms** — the new CEO changed the company's culture. 2018 statement: **"We will do the right thing, period."** — a strong commitment.
- **Mike Isaac — "Super Pumped"** (2019) — *NYT* book, a Pulitzer-nominated piece of reporting. A classic of tech literature. Adapted as a Showtime series in 2022.
- **Polish context** — Uber has operated in Poland since 2014, competing with Bolt (Estonia) and FreeNow (Daimler). The Polish UODO did not conduct a separate investigation into God View. Polish users' data was, however, held in Uber's global database.
- **"Boober"** — an infamous internal Uber project (2014) analyzing **"Rides of Glory"** — evening rides home from one-night stands. Disclosed in a post on the Uber blog in 2012, quickly deleted. It showed a thorough lack of respect for personal data.
- **20-year FTC monitoring** (through 2038) — Uber is under a privacy audit nearly every year. One of the longest FTC monitoring regimes in history.

---

## Sources

1. Ben Smith, "Uber Executive Suggests Digging Up Dirt On Journalists," *BuzzFeed News*, November 17, 2014. URL: https://www.buzzfeed.com/bensmith/uber-executive-suggests-digging-up-dirt-on-journalists (accessed: 2026-04-17)

2. Johana Bhuiyan, Charlie Warzel, "'God View': Uber Investigates Its Top New York Executive For Privacy Violations," *BuzzFeed News*, November 18, 2014. URL: https://www.buzzfeed.com/johanabhuiyan/uber-is-investigating-its-top-new-york-executive-for-privacy (accessed: 2026-04-17)

3. New York State Attorney General, "A.G. Schneiderman Announces Settlement with Uber to Enhance Rider Privacy," January 6, 2016.

4. Federal Trade Commission, "Uber Settles FTC Allegations that It Made Deceptive Privacy and Data Security Claims," August 15, 2017.

5. FTC, "In the Matter of Uber Technologies Inc.," File No. 152-3054, April 12, 2018.

6. 50 states multi-state settlement with Uber, September 2018 — $148 million.

7. Eric Holder, "Holder Report on Uber's Workplace Culture," June 2017.

8. Mike Isaac, *Super Pumped: The Battle for Uber*, W.W. Norton, 2019.

9. Sarah Lacy, *A Uterus Is A Feature, Not A Bug*, HarperBusiness, 2017.

10. Kara Swisher, numerous *Recode* articles, 2014–2017.

11. Peter Sims, blog post on the Chicago incident, 2014.

12. Travis Kalanick public statements, Twitter, 2014.

13. Emil Michael, statement after the scandal, November 2014.

14. EPIC (Electronic Privacy Information Center), comments on the FTC settlement.

15. Dara Khosrowshahi, letters to Uber employees, 2017–2018.

---

*Last updated: 2026-04-17*
*Card in database: D04_uber_god_view.md*
