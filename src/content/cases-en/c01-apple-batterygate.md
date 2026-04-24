---
id: C01
slug: c01-apple-batterygate
group: C
group_label: Apple, Microsoft, LinkedIn
title: Apple Batterygate
year_revealed: 2017
last_updated: '2026-04-17'
companies:
- Apple
status: settled
jurisdictions:
- US
- UK
- FR
- IT
legal_basis:
- Deceptive commercial practices
- state consumer protection
- Magnuson-Moss
- Dyrektywa 2005/29/WE
fines:
- amount: 10000000
  currency: EUR
  authority: AGCM
  date: 2018-10
  category: regulatory_fine
  status: paid
- amount: 25000000
  currency: EUR
  authority: DGCCRF
  date: 2020-02
  category: regulatory_fine
  status: paid
- amount: 500000000
  currency: USD
  authority: '*In re Apple Device Performance Litigation*'
  date: 2020-03
  category: class_action_settlement
  status: paid
- amount: 113000000
  currency: USD
  authority: 33 stany USA
  date: 2020-11
  category: state_attorney_general
  status: paid
- amount: 2500000
  currency: USD
  authority: SERNAC
  date: '2020'
  category: regulatory_fine
  status: paid
- amount: 25000000
  currency: EUR
  authority: DGSI
  date: '2023'
  category: regulatory_fine
  status: paid
whistleblowers: []
journalists: []
related_cases:
- C02
- C03
- B02
- B05
- B04
tags:
- dark-patterns
- pozew-zbiorowy
categories:
- privacy
geo_coords: []
priority: TOP
card_complete: true
word_count: 3949
explainer:
  src: /animations/c01-apple-batterygate.html
  duration: '60s'
  title: Batterygate — planned obsolescence confirmed
subtitle: Deliberate slowdown of older iPhones
years_active:
- 2017
- 2018
---

# C01 — Apple Batterygate: Deliberate slowdown of older iPhones

> **Category:** Planned obsolescence / deception / consumer control / Right to Repair
> **Company/companies:** Apple
> **Years:** January 2017 (iOS 10.2.1) – December 2017 (disclosure), 2018–2024 (proceedings)
> **Status:** Closed — $500M settlement + fines in France, Italy, US states, Portugal
> **Card ID:** C01

---

## Metadata

| Field | Value |
|------|---------|
| Country/region | US (federal and state), France, Italy, Portugal, Chile, UK |
| Year of disclosure | December 10–20, 2017 (Reddit + GeekBench + official Apple admission) |
| Years of practice | January 2017 – December 2017 (hidden throttling without notice); throttling with opt-out from March 2018 |
| Total penalty | **~$650M / ~€600M** (all jurisdictions combined) |
| Currency | USD / EUR |
| Legal basis | Deceptive commercial practices (FR, IT), state consumer protection (US), Magnuson-Moss (US), Directive 2005/29/EC (EU) |
| Whistleblower/discoverer | **Reddit user primate1980** (first signal), **John Poole / Primate Labs (GeekBench)** (scientific verification) |
| Number of affected | Estimated **~25 million** owners of iPhone 6/6s/SE/7 with iOS 10.2.1+ and 11.2+ updates |
| Status (today) | Closed; "Battery Health" feature in iOS; forced change of Apple policy; impulse for Right to Repair |

---

## TL;DR

**On December 20, 2017** Apple **officially admitted** that in the **iOS 10.2.1** (January 2017) and **iOS 11.2** (December 2017) updates it was **deliberately slowing the processor** of older iPhones (**6, 6s, SE, 7**) — ostensibly to prevent unexpected shutdowns caused by worn-out batteries. Apple **did not inform** users, did not warn in release notes ("addresses issues that could in rare cases cause iPhone 6 and iPhone 6s to unexpectedly shut down" — **technically true, but misleading**), and did not provide an option to disable the throttling. The effect: an iPhone 6s with a worn battery could run **40–60% slower** than one with a new battery, without the user knowing.

Discovery came through a **Reddit anecdote**. On December 10, 2017, user **primate1980** posted on r/iphone: *"I replaced the battery in my iPhone 6s after 14 months of use → GeekBench jumped from 1466 to 2526"* — a **70% performance increase** from a battery swap alone. **John Poole** (founder of Primate Labs, creator of **GeekBench**) gathered **data from hundreds of thousands of iPhone benchmarks**. His analysis, published on **December 18, 2017**, showed: devices with iOS 10.2.1+ and worn batteries had a **significant performance downshift**, while devices without the update or with new batteries did not. This was **direct evidence** Apple could not deny. On **December 20, 2017**, Apple confirmed.

**Financial consequences** (~$650M total):
- **March 2020** — **US class action (*In re Apple Device Performance Litigation*): ~$500M** (~$25 per device × ~25M owners)
- **November 2020** — **33 US states: $113M**
- **February 2020** — **France DGCCRF: €25M**
- **October 2018** — **Italy AGCM: €10M**
- **2023** — **Portugal: €25M**
- **2018** — Chile SERNAC: $2.5M

**Operational reforms:** Apple reduced the battery replacement price from $79 to **$29 for all of 2018** — **11 million replacements** were performed (5× more than normal). Apple's estimated lost revenue from new iPhone sales: **$10–15 billion** (people stayed with older phones). In **iOS 11.3** (March 2018), Apple introduced **Settings → Battery → Battery Health** — publicly visible **maximum capacity** of the battery and an **option to disable throttling** (with a warning about the risk of sudden shutdown).

The case carries structural significance: **Batterygate is the first major case of regulatory confrontation with planned obsolescence**. In 2020, France passed a **law criminalizing planned obsolescence** (up to 2 years in prison + €300,000 fine) — a direct consequence of the case. It was an impulse for the **Right to Repair movement** — in 2024, the EU passed Directive 2024/1799; from 2027, every phone in the EU must have a **replaceable battery**.

---

## Timeline

- **September 2014** — iPhone 6/6 Plus launch.
- **September 2015** — iPhone 6s/6s Plus. Apple A9 model, most affected by Batterygate.
- **March 2016** — iPhone SE (based on iPhone 6s hardware).
- **September 2016** — iPhone 7/7 Plus.
- **November 2016** — mounting user reports of **unexpected shutdowns** of iPhone 6s at 30–50% battery charge.
- **December 2016** — Apple launches a **limited battery replacement program** for iPhone 6s units manufactured in a specific period (serial numbers).
- **January 23, 2017** — **iOS 10.2.1** — **hidden throttling introduced**. Release notes: terse.
- **March 2017** — Apple publicly announces an 80% drop in unexpected iPhone 6s shutdowns — **without disclosing that this is the effect of throttling**.
- **December 2, 2017** — **iOS 11.2** — throttling extended to iPhone 7/7 Plus.
- **December 10, 2017** — **Reddit user primate1980** on r/iphone: "I replaced the battery, GeekBench went up 70%".
- **December 18, 2017** — **John Poole** (Primate Labs) publishes analysis of GeekBench data. Direct evidence of throttling.
- **December 20, 2017** — **Apple officially admits** the practice. First public response.
- **December 28, 2017** — **"A Message to Our Customers about iPhone Batteries and Performance"** — Tim Cook's apology. Battery replacement price cut from $79 to **$29** throughout 2018.
- **January 2018** — class action lawsuits start pouring in (ultimately consolidated in **In re Apple Inc. Device Performance Litigation**, N.D. Cal.).
- **March 29, 2018** — **iOS 11.3** — **Battery Health** feature (displaying maximum capacity and option to disable throttling).
- **October 25, 2018** — **Italy AGCM**: **€10M** fine for Apple (+€10M for Samsung for the same practice).
- **February 7, 2020** — **France DGCCRF**: **€25M** fine + requirement to publish a statement on the French Apple website for a month.
- **March 2, 2020** — **US class action settlement**: approx. **$500M**.
- **November 2020** — **33 US states**: **$113M** settlement.
- **2020** — Chile SERNAC: $2.5M.
- **2022** — UK Competition Appeal Tribunal gives the green light for a UK class action.
- **2023** — **Portugal**: **€25M** fine.
- **2024** — EU adopts **Right to Repair Directive 2024/1799**; replaceable-battery requirement by 2027.

---

## Mechanism

### Why Apple throttled in the first place

**The physical problem of lithium-ion batteries.** An iPhone battery has a **limited number of charge cycles** (nominally ~500 full cycles to retain 80% capacity). Beyond that count, **the ability to deliver peak current declines** (peak current delivery). Not the capacity itself — but the ability to deliver, say, 5A momentarily when the CPU needs a boost.

**The consequence**: when the CPU in an iPhone 6s demanded peak power (e.g., opening an app, processing a photograph, playing a game), a worn battery **could not deliver the current**. Voltage dropped below the safety threshold, and **the iPhone shut down abruptly**, even though the indicator showed 30–50% charge.

**Reports from 2016** surfaced the problem especially for the iPhone 6s. Apple launched a limited battery replacement program — but it covered only specific serial numbers, and most users **did not qualify**.

**Apple's decision (2016–2017)**: instead of broadly replacing batteries for free (cost: hundreds of millions), **patch it in software**. The new iOS would:
1. Monitor battery state (internal resistance, voltage under load)
2. If the battery is "worn" → **lower the maximum CPU frequency** (e.g., from 1.85 GHz to 1.2 GHz)
3. As a result, the CPU **does not demand peak power** → the battery **can handle it** → **no shutdowns**

### Technical details of throttling

- **Detection**: iOS monitored battery parameters via the power management chip (PMIC). The key indicator: **internal resistance** (rises with degradation).
- **Threshold**: above a certain resistance, throttling kicked in.
- **Throttling scale**: in extreme cases, **-40 to -60% performance** (GeekBench from ~2500 to ~1000 for iPhone 6s).
- **Dynamics**: throttling was not constant — under "calm" use the CPU could operate normally. Only when it requested a boost.
- **No communication to the user**: **no warning, no opt-out, no mention in release notes**.

### Apple release notes — a manipulation classic

For iOS 10.2.1, Apple published only: *"iOS 10.2.1 addresses issues that could in rare cases cause iPhone 6 and iPhone 6s to unexpectedly shut down."*

**Analysis:**
- "addresses issues" — yes, but via **hidden throttling**, not through software repair or battery management optimization.
- "in rare cases" — in reality it affected millions of devices.
- **No mention of throttling, performance change, or the mechanism**.

This fit the definition of **misrepresentation by omission** — misleading by withholding material information.

---

## Discovery

### Reddit — primate1980

**December 10, 2017**, r/iphone. A user (pseudonym primate1980) posted:
*"My iPhone 6s was getting slower and slower. GeekBench single-core: 1466, multi-core: 2526. Today I replaced the battery (after 14 months of use, the battery was at 90% of declared capacity). Now: single-core 2526, multi-core 4460. 70% improvement."*

The post immediately triggered a wave of replies: *"same here"*, *"my iPhone 6 works like new after the swap"*. The thread had hundreds of comments within hours.

### John Poole and Primate Labs

**John Poole** (Primate Labs, Toronto) — founder of the company publishing **GeekBench**, one of the most popular CPU benchmarks. A coincidence: the name "primate1980" from Reddit and Poole's company name "Primate" are unrelated, but Poole quickly noticed the thread.

Poole had **anonymized data from hundreds of thousands of GeekBench runs** on iPhones (sent by default to Primate Labs as statistics). He ran an analysis:
1. iPhone 6s results **before iOS 10.2.1**: a normal performance distribution.
2. Results **after iOS 10.2.1**: a **bimodal distribution** — some devices at a high score, some at a much lower one.
3. Correlation: devices with lower scores had **older batteries** (proxy: date of purchase, session length).

The Primate Labs blog post (**December 18, 2017**) contained **charts** directly showing the throttling. Google searches for "GeekBench iPhone battery slowdown" exploded.

### Mainstream media reaction

- **December 19, 2017** — *TechCrunch*, *The Verge*, *Ars Technica*
- **December 20, 2017** — *NYT*, *WSJ*, *BBC*
- **December 20, 2017** — **Apple officially admits**

### First publications

- **December 10, 2017** — primate1980's post on r/iphone
- **December 18, 2017** — John Poole, "iPhone Performance and Battery Age", Primate Labs Blog
- **December 20, 2017** — Apple Newsroom, first statement
- **December 28, 2017** — Apple, "A Message to Our Customers about iPhone Batteries and Performance" — Tim Cook's apology

---

## Key people

### Discoverers

- **primate1980** — anonymous Reddit user, first signal.
- **John Poole** — founder of Primate Labs, creator of GeekBench. Scientific verification.
- **Zach Epstein** (*BGR*), **Chance Miller** (*9to5Mac*), **Jason Snell** (*Six Colors*) — Apple-ecosystem journalists who quickly picked up the story.

### Apple

- **Tim Cook** — CEO, author of the public apology of December 28, 2017.
- **Phil Schiller** — SVP Worldwide Marketing (at the time).
- **Dan Riccio** — SVP Hardware Engineering.
- **Bob Mansfield** — formerly SVP Hardware; departed in 2012, but many battery-related decisions on the iPhone 6/6s dated from his tenure.

### Regulators

- **AGCM (Italy)** — Autorità Garante della Concorrenza e del Mercato; fine October 2018.
- **DGCCRF (France)** — Direction générale de la concurrence, de la consommation et de la répression des fraudes; fine February 2020.
- **33 US states** — coordinated action led by the Arizona AG.
- **SERNAC (Chile)**, **DGSI (Portugal)**.

### Lawyers

- **Lieff Cabraser Heimann & Bernstein LLP** — lead firm on the US class action.
- **Joseph Cotchett** (Cotchett, Pitre & McCarthy) — also on the US class action.
- **Foltis & Nicholas** — represented the claimants in the UK Competition Appeal Tribunal.

---

## Company response

### Apple

**Stage 1: silence (January 2017 – December 2017).** Eleven months of throttling with no disclosure. Asked by Apple forums, service centers and journalists, the response was: "iPhones work normally, batteries have a defined lifespan."

**Stage 2: forced candor (December 20, 2017).** After Poole's analysis Apple has no choice. First statement: *"Our goal is to deliver the best experience for customers, which includes overall performance and prolonging the life of their devices. Lithium-ion batteries become less capable of supplying peak current demands when in cold conditions, have a low battery charge or as they age over time, which can result in the device unexpectedly shutting down to protect its electronic components."*

Apple framed throttling as **an act of care for the user** — "to avoid shutdowns." But did not explain **why it was done without informing them**.

**Stage 3: public apology (December 28, 2017).** Tim Cook's letter "A Message to Our Customers":
- Apology for the **failure to communicate**, not for the throttling itself
- Battery replacement price cut to **$29** for 2018
- Announcement of **Battery Health** in iOS

**Stage 4: reforms (iOS 11.3, March 2018):**
- Battery Health visible in Settings
- "Peak Performance Capability" button with an option to **disable throttling** (with a warning)
- Improved power management in subsequent iOS versions

**Stage 5: payment (2018–2024).** The fines do not change Apple's financial fundamentals (a company with $200+ billion in reserves), but they **prove** that planned obsolescence carries regulatory risk.

**Open questions:**
- Could Apple have **offered free battery replacement** instead of throttling? Estimated cost: $1–2 billion. But it would have brought **goodwill** instead of scandal.
- Why did the iOS 10.2.1 update not contain **even one sentence** about throttling?
- Was the $29 price **a fair cost for battery replacement**? Material cost of an iPhone battery: ~$5. Labor: ~20 min. The normal $79 margin was a ~1,500% markup.

---

## Legal proceedings

### Jurisdictions

1. **US federal** — class action (consolidated in N.D. Cal.)
2. **US state** — 33 states (AG action)
3. **France** — DGCCRF
4. **Italy** — AGCM
5. **Portugal** — DGSI
6. **Chile** — SERNAC
7. **UK** — Competition Appeal Tribunal (continuing 2022+)

### Legal basis

- **France**: Art. L121-1 Code de la consommation (deceptive commercial practices); Loi 2020-105 (law criminalizing planned obsolescence)
- **Italy**: Codice del Consumo
- **US federal**: FTC Act § 5; Magnuson-Moss Warranty Act
- **US state**: various state consumer protection acts
- **EU**: Directive 2005/29/EC on unfair commercial practices

### Planned obsolescence — a key concept

Apple Batterygate is the **first high-profile case** in which regulators applied the concept of **planned obsolescence** to a digital product. Previously used mainly for household appliances and industry. France 2020: a **law criminalizing** planned obsolescence (art. L441-2 du Code de la consommation) — up to 2 years in prison + €300,000 fine.

### Key stages

| Date | Stage |
|------|------|
| December 20, 2017 | Apple admission |
| January 2018 | First US lawsuits |
| October 25, 2018 | Italy €10M |
| February 7, 2020 | France €25M |
| March 2, 2020 | US class action $500M |
| November 2020 | 33 states $113M |
| 2023 | Portugal €25M |

### Related case law

- **Italy AGCM vs Samsung** (October 2018, same date as Apple) — **in parallel**, Samsung fined €5M for analogous practices with the Galaxy Note 4.
- **France — first criminal planned-obsolescence cases** (2021, cases involving smaller manufacturers).
- **EU Right to Repair Directive 2024/1799** — a direct regulatory consequence.

---

## Penalties and settlements

| Date | Authority | Amount | Jurisdiction | Basis |
|------|-------|-------|-------------|----------|
| October 25, 2018 | AGCM | 10,000,000 EUR | Italy | Codice del Consumo |
| February 7, 2020 | DGCCRF | 25,000,000 EUR | France | Code de la consommation |
| March 2, 2020 | *In re Apple Device Performance Litigation* | ~500,000,000 USD | US federal | Class action |
| November 2020 | 33 US states | 113,000,000 USD | US state | Consumer protection |
| 2020 | SERNAC | 2,500,000 USD | Chile | Consumer rights |
| 2023 | DGSI | 25,000,000 EUR | Portugal | Consumer protection |

**Total: ~$650M / ~€600M**

Add-on: the cost of **$29 battery replacements** in 2018 — Apple handled ~11 million swaps (compared to ~2 million annually in normal years). For the company, an internal cost of several hundred million dollars plus the **loss of $10–15 billion** in new iPhone sales.

---

## Precedents and implications

### For law

- **France — law criminalizing planned obsolescence (2020)** — a direct consequence.
- **EU Right to Repair Directive (2024)** — replaceable batteries in mobile devices by 2027.
- **US — debate on reforming the Magnuson-Moss Act** — did not pass, but the discussion happened.
- **California Right to Repair Act (SB 244, 2023)** — in force 2024.

### For Big Tech practice

- **Update transparency has become the norm** — Apple, Google, Microsoft publish more detailed release notes after Batterygate.
- **"Performance Mode" as a UX pattern** — in many devices (Samsung Galaxy "Protect Battery", Google Pixel "Adaptive Battery"), the user now has control over the performance/battery trade-off.
- **Battery Health as a feature** — a standard in phones since 2018.

### For the Right to Repair movement

- **iFixit** (Kyle Wiens's company) — became a public voice.
- **Federation of Consumer Associations** in the EU — lobbied for Right to Repair.
- **Fairphone** (Dutch company) — its modular phone model gained visibility.

### For consumer awareness

- **"Apple knows best" erosion** — previously Apple had the image of a company that "acts out of concern for the user." Batterygate showed that Apple **hides decisions**.
- **Forced user control** — since 2018, users know they should monitor battery state.

---

## Class actions

| Case | Court | Status | Value | Affected |
|--------|-----|------|---------|--------------|
| *In re Apple Inc. Device Performance Litigation* | N.D. Cal. | Settled 2020 | ~$500M | iPhone 6/6s/SE/7 owners in US (~25M) |
| *Morgan v. Apple* | UK Competition Appeal Tribunal | Pending since 2022 | Expected | UK iPhone owners |
| Related lawsuits | California, New York, Texas | Consolidated | Part of $500M | US owners |

---

## Conclusions for citizens

### What does this mean for me?

If you own an iPhone older than 3 years (any model) — **your battery is probably worn**, and the phone may be slowed down. Apple now **notifies you** of this, but users rarely check. On Android an analogous mechanism exists (**battery aging → slowdown**), but it is less tightly controlled. Batterygate is **an exceptional situation** in which consumers had a right to know — and they won.

### How to check if your phone is slowed down?

**iPhone:**
1. **Settings → Battery → Battery Health & Charging**.
2. Check "Maximum Capacity." If < 80% — the battery is significantly worn.
3. Check "Peak Performance Capability." If it says "your battery condition has significantly degraded" — throttling is active.
4. **Opt-out option**: tap "Disable..." under the peak performance info. Caution: **this increases the risk of sudden shutdowns**.

**Android** (general):
5. **Settings → Battery → Battery Usage / Battery Health** (naming depends on manufacturer).
6. **Run GeekBench, Antutu, PCMark** — compare against online averages for your model.
7. If the phone is dramatically slower than expected performance → consider a battery replacement.

### Battery replacement — what to know

- **Authorized Apple service** — from $89 (outside the promotion period) up to ~€150 in Poland.
- **Authorized Samsung, Xiaomi service** — €30–80, depending on model.
- **Unauthorized service centers** — cheaper (€30–60), but **watch out for cell quality** (non-original batteries can be dangerous).
- **Self-service repair** (Apple since 2022, other firms following) — you can buy a kit and replace it yourself. Risk: loss of warranty.

### What rights do I have?

**In the EU:**
- **2-year legal warranty** (6 years in the UK) — if the phone stops working properly in this period, repair or replacement is due.
- **GDPR art. 82** — not directly applicable, but deception can be grounds for a claim.
- **Unfair Commercial Practices Directive** — basis for complaints to UOKiK.
- **EU Right to Repair Directive 2024/1799** — from 2027 requirements on manufacturers.

**In Poland:**
- **UOKiK** — reporting unfair practices.
- **Consumer court** — individual claims.
- **Municipal Consumer Ombudsman** — free advice.

**In the US:**
- 2020 class action settlement — **closed** filing period (2021). If you owned an iPhone 6/6s/SE/7 in the US, you may have received $25.
- State consumer laws.

### Where to file

- **Poland**: UOKiK (uokik.gov.pl), Consumer Ombudsman
- **France**: DGCCRF (signal.conso.gouv.fr) — you can report planned obsolescence
- **EU**: European Consumer Centre (ECC-Net)

### Note for mediators, lawyers, individual consumers

**In disputes with Apple/other manufacturers over phone slowdown:**

1. **Evidence collection is key**:
   - Screenshots of benchmarks (GeekBench, Antutu) before and after battery replacement
   - Dates of iOS updates (from Apple's chronicle)
   - Receipts of purchase
   - Reports of unexpected shutdowns
2. **Class actions in Poland** — the 2009 Act on Group Claims permits actions with 10+ people. Barriers are high, but for homogeneous harms realistically achievable.
3. **Contract clauses** — in Poland Apple uses pro-user arbitration clauses (ADR in Ireland). A Polish attorney can argue the invalidity of these clauses (violation of art. 385[3] of the Civil Code — abusive clauses).
4. **Planned obsolescence as an argument** — in Poland it is not formally criminalized, but can be the basis for a claim of non-conformity of goods with the contract (art. 560 of the Civil Code).

For **environmental lawyers** — Batterygate is **evidence that replacement is cheaper ecologically than device replacement**. An argument for cases:
- Leading consumer coalitions against manufacturers
- Undertaking government policies (e.g., e-waste tax)
- Lobbying for a Right to Repair law

---

## Context

- **Apple's double "environmental" irony** — Apple markets itself as a **green company** (the "Mother Nature" campaign 2023, the recycling robot "Liam", "100% renewable energy" ads). Batterygate **undermined** these declarations — **forcing device replacement** instead of battery replacement was **environmentally catastrophic**. The carbon footprint of producing a new iPhone: ~70 kg CO2. Multiplied by millions of potentially "unnecessary" device swaps — **tens of millions of tons of CO2**.
- **iPhone 6s worked like new after battery replacement** — users who replaced the battery regained **~100%** of original performance. Proof: the problem was not "CPU wear", only **artificial throttling**.
- **Apple lost $10–15 billion in sales** — analyst estimates. In 2018, **11 million battery replacements at $29** meant that **11 million users** decided **not to buy a new iPhone**. At an average price of $800 = ~$9 billion in unrealized sales.
- ***"We apologize"*** — in its public apology Apple **did not use the word "batterygate"**. It never officially accepted this name. A classic PR strategy — do not legitimize the scandal's name.
- **Tim Cook's WWDC 2018 keynote** — a month after the apology. Cook **did not mention** Batterygate. Instead, he opened with environment and accessibility. Journalists noted the strategic avoidance of the topic.
- ***A9 to A9 to A9*** — iPhone 6s, SE (first gen), iPad Air 2 — all on the A9 chip. All were affected by throttling in a similar way. Some analysts suspected that **the A9 chip had fundamental power-delivery problems**, which Apple tried to patch in software. Apple never confirmed this.
- **Italy and Samsung** — the same October 2018 AGCM decision also fined **Samsung** for analogous practices with the Galaxy Note 4 (€5M). A rare case of a simultaneous penalty for major competitors.
- **John Poole → received no award** — Poole received no formal recognition for his detective work. Primate Labs remained an independent company. GeekBench became the **de facto standard** in mobile device performance analysis.
- **"Battery after 500 cycles"** — Apple declares that an iPhone battery holds **80% capacity after 500 cycles**. A cycle = full charge from 0 to 100%. With intensive use (2× charge per day) — **500 cycles in ~8 months**. In practice, users should expect degradation after 1–2 years.
- **France — first criminal planned-obsolescence trial** — in 2021, a year after the 2020 law, the first criminal trial against an appliance manufacturer began. Apple formally has a pending argument: *"we were the first model, but now it is not us"*.
- **Polish context** — in 2018 in Poland, UOKiK **did not open** proceedings. Polish users were covered by the DGCCRF France fine (although realistically it was hard for them to file claims). At present (2026), UOKiK has a more active approach to Big Tech.
- **Fairphone** — a Dutch phone maker with a **replaceable battery, modular construction** and a **4-year warranty**. Sales small (~300,000 devices annually), but symbolically significant. Fairphone 5 (2023) also has **8 years of software support** — unprecedentedly long.
- **iOS Performance Mode — an option for power users** — many iPhone users still do not know that throttling can be turned off. The option is in "Settings → Battery → Battery Health → Peak Performance Capability." The danger: the phone may shut down at peak load, but **runs at full performance** between shutdowns.

---

## Sources

1. primate1980, post on r/iphone, December 10, 2017. URL: https://www.reddit.com/r/iphone/ (archive)

2. John Poole, "iPhone Performance and Battery Age", Primate Labs Blog, December 18, 2017. URL: https://www.primatelabs.com/geekbench/blog/iphone-performance-battery-age (accessed: 2026-04-17)

3. Apple, "A Message to Our Customers about iPhone Batteries and Performance", December 28, 2017. URL: https://www.apple.com/newsroom/2017/12/a-message-to-our-customers-about-iphone-batteries-and-performance/ (accessed: 2026-04-17)

4. *In re Apple Inc. Device Performance Litigation*, N.D. Cal., MDL No. 2827 (PACER documents).

5. Autorità Garante della Concorrenza e del Mercato (AGCM), decision October 25, 2018 — €10M fine. URL: https://www.agcm.it/

6. Direction générale de la concurrence, de la consommation et de la répression des fraudes (DGCCRF), decision February 7, 2020. URL: https://www.economie.gouv.fr/dgccrf

7. National Association of Attorneys General, "33-State AG Settlement with Apple", November 2020.

8. Autoridade Nacional (Portugal), decision 2023 — €25M.

9. Loi n° 2020-105 du 10 février 2020 relative à la lutte contre le gaspillage et à l'économie circulaire, Art. L441-2 Code de la consommation.

10. EU Directive 2024/1799 on common rules promoting the repair of goods ("Right to Repair Directive").

11. iFixit, technical materials on iPhone 6s, 7 battery replacement. URL: https://www.ifixit.com/

12. Kyle Wiens, public statements for the Right to Repair Coalition.

13. Apple Support, "iPhone Battery and Performance", technical document. URL: https://support.apple.com/en-us/HT208387

14. Competition Appeal Tribunal UK, *Morgan v. Apple Inc.*, 2022 decision allowing class action.

15. Fairphone, environmental reports 2020–2024. URL: https://www.fairphone.com

---

*Last updated: 2026-04-17*
*Card in database: C01_batterygate.md*
