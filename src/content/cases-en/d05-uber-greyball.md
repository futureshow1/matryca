---
id: D05
slug: d05-uber-greyball
group: D
group_label: Amazon, Uber
title: Uber Greyball
year_revealed: 2017
last_updated: '2026-04-17'
companies:
- Uber Technologies
status: concluded
jurisdictions:
- US
- FR
- CN
- AU
legal_basis:
- Federal law
- 'państwa: utrudnianie kontroli regulacyjnej'
fines: []
whistleblowers: []
journalists: []
related_cases:
- D04
- E01
- D06
- B04
- B01
tags:
- sledzenie-lokalizacji
- dziennikarze
- geopolityka
categories:
- privacy
geo_coords: []
priority: STANDARD
card_complete: true
word_count: 2528
explainer:
  src: /animations/d05-uber-greyball.html
  duration: '60s'
  title: Greyball — how Uber blocked regulators
subtitle: A tool for evading regulators in cities where Uber was banned
years_active:
- 2014
- 2017
---

# D05 — Uber Greyball: A tool for evading regulators in cities where Uber was banned

> **Category:** Corporate evasion / geolocation / social media profiling / DOJ inquiry
> **Company/companies:** Uber Technologies
> **Years:** ~2014–2017 (practice), March 2017 (disclosure)
> **Status:** DOJ inquiry closed; Uber discontinued the practice; no criminal charges
> **Card ID:** D05

---

## Metadata

| Field | Value |
|------|---------|
| Country/region | USA (Boston, Portland, Las Vegas, Philadelphia), France, Australia, South Korea, China |
| Year disclosed | March 3, 2017 (***New York Times***, Mike Isaac) |
| Years the practice ran | ~2014–2017 |
| Total penalty | No direct criminal penalties; folded into broader settlements (see D04, D06) |
| Currency | — |
| Legal basis | Federal law (obstructing law enforcement); states: obstruction of regulatory oversight |
| Whistleblower/discoverer | Anonymous Uber employees (fear of retaliation); ***Mike Isaac*** (*NYT*) |
| Number of people harmed | Regulators and law enforcement in at least **a dozen or more US cities and abroad** |
| Status (today) | Program discontinued; new CEO Khosrowshahi committed to a culture change |

---

## TL;DR

**March 3, 2017** — the ***New York Times***, ***Mike Isaac*** published a breakthrough article: **"How Uber Deceives the Authorities Worldwide."** He revealed the existence of a program codenamed **"Greyball"** — an Uber tool designed to **identify and deceive regulators and law enforcement personnel** in cities where Uber was operating illegally or was outright banned.

How Greyball worked:
1. **Geofencing** around city halls, police stations, and transportation agencies
2. **Tracking cheap or government-issued phones** (pre-paid) — Uber identified **low-cost** phones frequently used by officials
3. **Social media profiling** — Uber checked whether the name on an account matched a **local official**, **police officer**, or **inspector**
4. **Credit card verification** — checking whether a card was **tied to a public institution**
5. **Behavior pattern analysis** — someone who **repeatedly** tries to hail an Uber in an area where the company operates illegally is suspect

Once a user was flagged as "Greyballed," they saw a **fake version of the app**:
- The map displayed **phantom Uber vehicles**
- When trying to book a ride: "No drivers available"
- In reality, Uber was operating normally — just not for the flagged individuals

Greyball was used to **thwart regulatory enforcement**:
- An inspector tries to hail an Uber → gets a fake screen → cannot catch a driver in the act
- Cannot issue a citation → has no evidence

Identified cities: **Boston, Portland (Oregon), Las Vegas, Philadelphia**, and countries: **France, Australia, China, South Korea, Italy**. The program was authorized by **Travis Kalanick** (CEO) and **Emil Michael** (SVP).

**March 4, 2017** — the ***DOJ*** (Department of Justice) opened a **federal criminal inquiry**.

**March 8, 2017** — Uber publicly announced **"prohibiting its use against law enforcement going forward"** — an end to the practice when it came to police. But for "private users" (competitors, journalists), it reserved the right to continue using the tool.

The **DOJ inquiry** closed **without criminal charges** (2019), likely because of the difficulty of proving **intent to defraud a federal agency** (most of the targets were local). The matter was absorbed into a broader **FTC consent order in April 2018** (→ D04) and a **$148 million settlement with 50 states** (→ D04, D06).

Greyball became a **symbol of corporate regulatory evasion** and **prompted the new CEO, Dara Khosrowshahi** (from August 2017), to introduce a **zero-tolerance policy** toward such practices.

---

## Timeline

- **2009–2013** — Uber grows in the US and abroad. Clashes with regulators in many cities.
- **2014** — Uber launches **"VTOS"** (Violation of Terms of Service) — an internal system for flagging accounts that breach the TOS. Later expanded into **Greyball**.
- **2014–2017** — Greyball is actively used in Boston (MA), Portland (OR), Las Vegas (NV), Philadelphia (PA), France (Paris), Australia (Sydney, Melbourne), China, South Korea, and Italy.
- **~2015** — Portland, Oregon — the most heavily documented case. Uber was operating illegally. City inspectors were "greyballed."
- **~2016** — Uber expands the program. It was even used to avoid **taxi drivers** who were protesting in certain cities.
- **March 3, 2017** — Mike Isaac, NYT: "How Uber Deceives the Authorities Worldwide." First public disclosure.
- **March 4, 2017** — the DOJ opens a federal criminal inquiry.
- **March 8, 2017** — Uber publicly commits to **not using Greyball against law enforcement** (but reserves it for use against "competitors").
- **June 2017** — Kalanick resigns; Dara Khosrowshahi takes over in August.
- **2018–2019** — DOJ inquiry continues and is ultimately dropped.
- **April 2018** — FTC second consent order (covers Greyball as part of the violations) → D04.
- **September 2018** — $148 million settlement with 50 states → D04, D06.

---

## Mechanism

### How Greyball worked technically

**Step 1: Geofencing.**
Uber defined **polygons around** buildings:
- City hall
- Police headquarters
- Transportation agencies (e.g., PUC — Public Utilities Commission)
- Local **taxi commission** buildings
- Courthouses
- The homes of known regulators (in some cases — extreme)

If a user's phone was regularly in those locations → suspicion was triggered.

**Step 2: Credit card profile.**
- **Government** cards (US government, state, local) had specific BINs (number prefixes). Uber recognized them.
- Cards with billing addresses matching **government offices**.

**Step 3: Device profiling.**
- **Cheap pre-paid phones** often used by undercover inspectors. The combination — a cheap phone + a new SIM card + a pre-paid credit card — was suspect.
- **New accounts** (fresh).

**Step 4: Social media.**
- Uber cross-checked **LinkedIn, Facebook** public profiles against the first and last name on the app.
- If a person worked for a city government / PUC / police department → they were flagged.

**Step 5: Behavior pattern.**
- Multiple **failed** ride requests from the same location where Uber was not operating legally.
- A newly created account appearing during a campaign against Uber.

**Step 6: Manual flagging.**
- Uber's local general managers could **manually add** suspected individuals to Greyball lists.

### What a "greyballed" user saw

The app displayed a **simulation of a working Uber service**:
- A map with "available" vehicles (in reality fake)
- After placing a request: "searching for a driver…" → "no drivers in the area"
- Or: occasionally a **fake driver** would appear but **never arrive** (the idea being to discourage further attempts)

In reality, **actual Uber drivers** were operating in the area — and **regular customers** (non-greyballed) could see them.

### Goals of Greyball

**For Uber:**
- **Avoiding fines** in cities where Uber was illegal
- Avoiding **sting operations** (undercover enforcement)
- **Protecting drivers** from vehicle impoundment
- **Avoiding physical confrontations** with taxi drivers in certain cities

**For regulators:**
- **Preventing oversight** of Uber's actual operations
- **No evidence** for enforcement proceedings

---

## Discovery

### Mike Isaac — NYT

**Mike Isaac** — tech reporter at ***The New York Times*** (Silicon Valley correspondent). Author of the key Uber revelations in 2017:
- **March 2017** — Greyball
- **April 2017** — "Hell" (a program for spying on Lyft)
- **June 2017** — further scandals leading to Kalanick's resignation

In 2019, Isaac published *Super Pumped: The Battle for Uber* — a classic Silicon Valley narrative, adapted for television by Showtime in 2022.

### Internal sources

Isaac relied on **more than 50 anonymous sources** inside Uber. Employees came forward for fear of **retaliation**. Uber had a reputation for a **brutal culture** — employees were pressured to go along. Four of Isaac's six main sources were **former employees** who had left the company.

### DOJ inquiry

- **March 4, 2017** — the DOJ, under **Jeff Sessions** (AG) and **Rod Rosenstein** (Deputy AG), opens a federal criminal inquiry.
- **US Attorney for N.D. California** — coordinator of the investigation.
- **FBI** — collection of documents.

### First publications

- **March 3, 2017** — Mike Isaac, "How Uber Deceives the Authorities Worldwide," *The New York Times*. URL: https://www.nytimes.com/2017/03/03/technology/uber-greyball-program-evade-authorities.html
- **March 4, 2017** — *Reuters*, *CNN*, *WSJ* follow-ups
- **March 8, 2017** — Uber public statement

---

## Key people

### Uber (under Kalanick)

- **Travis Kalanick** — CEO. Authorized the Greyball program.
- **Emil Michael** — SVP. Coordinated the rollout across many cities.
- **Ryan Graves** — SVP Global Operations, rolled the program out locally.
- **Salle Yoo** — Uber General Counsel until 2017. Her legal team **signed off on Greyball**.
- **Joe Sullivan** — CSO (→ D06 — later convicted over the 57 million record breach).

### Journalists

- **Mike Isaac** — NYT, the principal discoverer.

### Regulators

- **DOJ** — criminal inquiry.
- **Erich Zwettler** (Portland Bureau of Transportation) — one of the first people to **identify** phantom vehicles and report them.
- **FTC** — later consent order.

### Reformers

- **Dara Khosrowshahi** — CEO since August 2017. Committed to zero tolerance.
- **Tony West** — new Chief Legal Officer from 2017 (previously US Associate AG).

---

## Company response

### Uber under Kalanick (March 2017)

**Stage 1: initial defense (March 3).** *"This program denies ride requests to fraudulent users who are violating our terms of service — whether that's people aiming to physically harm drivers, competitors looking to disrupt our operations, or opponents who collude with officials on secret 'stings' meant to entrap drivers."*

The argument: Greyball is **defensive** and protects drivers. The criticism: its actual use was **primarily directed at legitimate regulatory enforcement**.

**Stage 2: partial reform (March 8).** Joe Sullivan announces a ban on using Greyball **against law enforcement**. But the company **reserves the right** to use it against:
- Competitors (Lyft)
- Journalists
- "People violating the TOS"

**Stage 3: change under Khosrowshahi (2017+).** The new CEO announces a full shutdown of the program in its known form. Policy: **"We will do the right thing, period."**

### DOJ inquiry — were there charges?

The DOJ investigation ran from 2017 to 2019. **There were no criminal charges.** Reasons:
1. The **difficulty** of proving federal intent to defraud (most targets were local).
2. **A change of administration** (Trump 2017+) — a less active DOJ on corporate matters.
3. **Uber cooperation** — under Khosrowshahi the company cooperated fully.
4. The **FTC settlement** in April 2018 absorbed Greyball as a **civil matter**.

---

## Legal proceedings

### Jurisdictions

- **US federal** — DOJ (criminal, no charges); FTC (civil, consent order)
- **US state** — 50-state settlement 2018 (folded into D04, D06)

### Legal basis

- **18 USC § 1001** — false statements to federal officials (potential)
- **18 USC § 1512** — obstruction of justice (potential)
- **FTC Act § 5** — unfair/deceptive practices
- **State consumer laws** — especially OR, MA, PA

### Key milestones

| Date | Milestone |
|------|------|
| March 3, 2017 | NYT publication |
| March 4, 2017 | DOJ inquiry |
| March 8, 2017 | Uber partial reform |
| 2017–2019 | DOJ inquiry |
| April 2018 | FTC second consent order (D04) |
| September 2018 | 50 states, $148 million (D04, D06) |
| 2019 | DOJ inquiry closed without charges |

---

## Penalties and settlements

**No direct penalties for Greyball.** The matter was folded into broader settlements:
- **FTC consent order 2018** — covers Greyball as part of the violations (D04)
- **$148 million** with 50 states — covers all Uber violations 2014–2016 (D04, D06)

---

## Precedents and implications

### For US law

- **The first major "corporate evasion" case** of the smartphone era.
- **Demonstrated that apps can be used to deceive regulators** — an inspiration for later **algorithmic accountability** regulations.
- **A DOJ inquiry with no charges** — showing that **federal criminal law** is ill-suited to deal with corporate tech obstruction.

### For other companies

- **Airbnb, Lime, Bird** — regulators investigated whether they had similar tools.
- **Facebook Onavo** (A03) — an analogous pattern of **unauthorized collection** of competitor data.
- **TikTok** (→ E01) — similar allegations of geoblocking for regulators.

### For policy

- Cities (Portland, Philadelphia) **tightened their laws** governing rideshare.
- **Federal legislation** on algorithmic accountability — introduced by **Senator Markey** (2019, 2022).
- The EU's **AI Act** and **Digital Services Act** — partly inspired by such practices.

---

## Class actions

No dedicated class action specifically targeting Greyball. The matter was part of broader settlements.

---

## Conclusions for citizens

### What does this mean for me?

If you use rideshare (Uber, Bolt, Lyft) — in theory you can be **"greyballed"** if the app algorithmically deems you a **threat to the company**. Today it is rarer (since the 2017 scandal), but not impossible. Remember: **what the app shows is not objective reality** — the company controls what you see.

### How to protect yourself?

1. **Don't profile yourself as a regulator** on public social media if you aren't one.
2. If you are an inspector / regulator / journalist — use **personal, private accounts** with different phone numbers.
3. **Verify that the driver is actually on the way** — check license plates, speak with the driver.

### Note for regulators, inspectors, journalists

**If you are a transportation inspector or regulator:**
- **Use a personal phone and payment card** during enforcement.
- **Do not use a company credit card** — it has a recognizable BIN.
- **Do not set your LinkedIn profile** to "Transportation Inspector" in public.
- If you detect greyballing — **document it** as part of a competition-law violation and obstruction of oversight.

**If you are a tech journalist:**
- Keep a separate Uber account for work versus personal use.
- **Different credit cards**.
- Watch out for **geofencing** around newsrooms (well-known editorial offices may have been within geofences).

### Note for mediators and lawyers

In cases involving **algorithmic discrimination**:
- Greyball shows that **apps can discriminate against groups of users** in ways that are invisible.
- Analogously: **Zillow pricing**, **Facebook Ads targeting** — systems that automatically discriminate.
- In mediation of employment disputes — **HR algorithm bias** (e.g., CV filtering) is a growing category.
- **GDPR Article 22** — the right not to be subject to a decision based solely on automated processing.

---

## Context

- **Greyball comes from "grey ball"** — a flag designation in the internal system. The color grey meant "let's not trust this person, but let's not formally block them either."
- **Portland, Oregon** — the city where Greyball was most heavily documented. Erich Zwettler (BOT) noticed **discrepancies** between what he saw in the app and the actual Uber vehicles on the streets. His report was **a key source** for Isaac.
- **The Portuguese case** — in Portugal, Uber allegedly used Greyball in 2016 following a court ban. After the worldwide scandal, the company withdrew the program.
- **South Korea** — in Seoul, Uber was operating illegally and using Greyball. It ultimately pulled out of Korea in 2015, returning in 2021 through a partnership with a local taxi company.
- **China** — Uber was fighting Didi Chuxing. Greyball was potentially used against Chinese inspectors, but Uber sold its Chinese operation to Didi in 2016.
- **Joe Sullivan** — Uber's CSO, who publicly announced the March 8, 2017 restrictions on Greyball, was convicted in 2022 over the 57 million record breach (→ D06). The irony.
- **Sessions-era DOJ** — under the Trump administration (Jeff Sessions as AG, Rod Rosenstein as Deputy), the DOJ was not especially focused on corporate tech obstruction. Many inquiries did not result in charges. Had the scandal broken in 2015 or 2022 (Biden/Garland), criminal charges would have been more likely.
- **"VTOS" (Violation of Terms of Service)** — an earlier version of Greyball. Uber had a whole series of user-surveillance systems. VTOS evolved into Greyball.
- **The "Ripley" program** — another internal Uber project, revealed in 2018. When police or regulators raided an Uber office, employees were supposed to **press the Ripley button** — which **remotely shut down computers** in the office, cutting off access to data. Ripley was used **at least 24 times** in various countries.
- **Ben Horowitz / a16z** — an investor in Uber. After the Greyball scandals, he publicly defended Kalanick, arguing that "the company was under attack from corrupt taxi cartels." A controversial stance.
- **Dara Khosrowshahi's memo** — after taking over as CEO, he sent a company-wide memo: *"We do the right thing, period. There are no exceptions."* — a rejection of the Greyball culture.
- **Poland and Greyball** — Uber has operated in Poland since 2014. There is no documentation of Greyball being used in Poland (probably because there was no need — Polish regulations were relatively mild). Taxi drivers protested (a 2017 strike in Warsaw), but Uber did not greyball them — it negotiated.
- **"Uber Files"** (2022) — a leak of 124,000 Uber documents from 2013–2017 to *The Guardian* and the International Consortium of Investigative Journalists. It confirmed Greyball and many other practices. The leak exposed **behind-the-scenes relationships with politicians** (Emmanuel Macron, while he was France's minister of finance, actively helped Uber circumvent French regulations).

---

## Sources

1. Mike Isaac, "How Uber Deceives the Authorities Worldwide," *The New York Times*, March 3, 2017. URL: https://www.nytimes.com/2017/03/03/technology/uber-greyball-program-evade-authorities.html (accessed: 2026-04-17)

2. Joe Sullivan, Uber blog post, March 8, 2017 — announcement of Greyball restrictions.

3. Department of Justice, federal criminal inquiry into Greyball, 2017–2019.

4. FTC, "In the Matter of Uber Technologies Inc.," File No. 152-3054, April 2018 consent order.

5. 50 states multi-state settlement with Uber, September 2018.

6. EPIC (Electronic Privacy Information Center), comments to the FTC, 2018.

7. Mike Isaac, *Super Pumped: The Battle for Uber*, W.W. Norton, 2019.

8. Uber Files (2022) — *The Guardian*, ICIJ. URL: https://www.theguardian.com/news/series/uber-files

9. Erich Zwettler (Portland BOT) — testimony before the Portland city commission, 2017.

10. EFF, analysis of algorithmic discrimination, 2017–2018.

11. Dara Khosrowshahi, letters and communications to employees, 2017+.

12. Eric Holder, "Holder Report on Uber's Workplace Culture," June 2017.

13. Tony West, Uber Chief Legal Officer, public appearances.

14. Senator Markey, **Algorithmic Accountability Act**, drafts 2019, 2022, 2023.

15. Reporters Without Borders, reports on corporate surveillance of journalists, 2017+.

---

*Last updated: 2026-04-17*
*Card in database: D05_uber_greyball.md*
