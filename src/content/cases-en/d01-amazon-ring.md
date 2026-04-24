---
id: D01
slug: d01-amazon-ring
group: D
group_label: Amazon, Uber
title: Amazon Ring
year_revealed: 2019
last_updated: '2026-04-17'
companies:
- Amazon / Ring LLC
status: concluded
jurisdictions:
- US
- global
legal_basis:
- FTC Act § 5
fines:
- amount: 5800000
  currency: USD
  authority: FTC
  date: 2023-05
  category: regulatory_fine
  status: paid
- amount: 5600000
  currency: USD
  authority: FTC (dystrybucja)
  date: 2024-04
  category: regulatory_fine
  status: paid
whistleblowers:
- hill
journalists:
- Sam Biddle
related_cases:
- D02
- C03
- D03
- E01
- B06
tags:
- dzieci
- pracownicy
- coppa
categories:
- privacy
geo_coords: []
priority: STANDARD
card_complete: true
word_count: 2955
explainer:
  src: /animations/d01-amazon-ring.html
  duration: '60s'
  title: Amazon Ring — cameras, police, hackers
subtitle: Employees spied on customers, hackers threatened children
years_active:
- 2016
- 2020
---

# D01 — Amazon Ring: Employees spied on customers, hackers threatened children

> **Category:** Home cameras / employee surveillance / hackers with access / FTC
> **Company/companies:** Amazon / Ring LLC
> **Years:** 2016–2020 (practice), 2018–2019 (hackers), May 2023 (FTC penalty)
> **Status:** Concluded — FTC penalty 5.8 million USD; 117,044 customers received refunds in 2024
> **Card ID:** D01

---

## Metadata

| Field | Value |
|------|---------|
| Country/region | Primarily USA; Ring cameras sold globally |
| Year revealed | 2019 (journalistic reporting on employee access) – 2023 (FTC penalty) |
| Years the practice lasted | 2016–2020 (employee access); January 2019 – March 2020 (hackers: 55,000+ customers) |
| Total penalty | **5,800,000 USD** (FTC 2023) + consumer refunds |
| Currency | USD |
| Legal basis | FTC Act § 5 (unfair/deceptive practices) |
| Whistleblower/discoverer | A Ring employee (2017); *The Intercept* (2019); FTC investigation 2020+ |
| Number of victims | 81+ women surveilled by one employee; 55,000+ customers victimized by hackers |
| Status (as of today) | Penalty paid; 117,044 refunds in 2024; Amazon still operates Ring |

---

## TL;DR

**Ring**, founded in 2013 in California, manufactured home security cameras (video doorbells, indoor, outdoor). In **2018, Amazon acquired Ring** for roughly 1 billion USD. On **May 31, 2023**, the Federal Trade Commission (FTC) announced that Ring had agreed to pay **5.8 million USD** for egregious violations of customer privacy. The FTC complaint contained two threads:

**Thread 1: Employees had unrestricted access to customer video.** Until January 2018, every Ring employee and contractor (including the team in Ukraine) could view **any video** from customer cameras — bathrooms, bedrooms, children's rooms. A key case: **in 2017, one employee spent several months watching thousands of recordings from the cameras of 81 women users**. He was discovered by **a female colleague at work**, who reported him to a supervisor. The first report was **ignored**. Only when another supervisor noticed that the employee was watching only **"pretty girls"** was the case escalated and the employee fired. Ring could not even determine how many other employees might have been doing the same thing — **it was not monitoring employee access to video**.

**Thread 2: Hackers took over 55,000+ cameras between January 2019 and March 2020.** Ring had not implemented basic safeguards: **multi-factor authentication (MFA) until 2019**, detection of **credential stuffing** and **brute force attacks**. Hackers used **stolen passwords from other breaches** to log into Ring accounts. Once logged in, they seized the camera's **two-way intercom** and:
- **Threatened families with ransom** to stop them from publishing compromising footage
- **Called children by name with racist slurs** (the infamous Mississippi case: a hacker spoke to an 8-year-old African American girl in her bedroom)
- **Made sexual propositions** to women, including an **87-year-old resident of a nursing home**
- **Stalked and intimidated** homeowners

After the FTC's findings, Ring agreed to:
- Pay **5.8 million USD** (consumer refunds)
- **Delete all recordings and face embeddings** from before 2018
- Delete algorithms and models trained on illegally viewed video
- Implement **multi-factor authentication**
- Restrict employee access
- Report security breaches to the FTC
- 20 years of compliance monitoring

**April 2024** — the FTC sent out **117,044 refunds of roughly 48 USD each** via PayPal.

Separately: on **May 31, 2023, Amazon paid an additional 25 million USD for COPPA violations by Alexa** (→ cards D02/D03). In total, Amazon paid **30.8 million USD** that day for two separate privacy violations (Ring + Alexa).

The Ring case is **one of the starkest examples of "move fast and break privacy"** in the IoT/smart home sector. It shows that home cameras — sold as security devices — can be **a vector of deeper surveillance** than classic phishing or cyberstalking.

---

## Timeline

- **2013** — Jamie Siminoff founds **"Doorbot"** (later: Ring) in Santa Monica. Pitched on *Shark Tank* in 2013 — rejected.
- **2014–2017** — Ring grows. Operations centers in the USA and **Ukraine** (Kyiv, Kharkiv).
- **2016** — Ring launches **Ring Neighborhoods** — an app for sharing recordings with neighbors.
- **2017** — a **Ring employee** in the USA spends roughly 6 months watching **thousands of recordings** from the cameras of **81 women**. Discovered by a female colleague.
- **April 2018** — **Amazon buys Ring** for roughly 1 billion USD (per Bloomberg reports). The price has never been officially confirmed.
- **January 2018** — Ring, after informal FTC pressure, **begins informing users for the first time** about employee access.
- **January 2019** — ***The Intercept*** (Sam Biddle) publishes: "For Owners of Amazon's Ring Security Cameras, Strangers May Have Been Watching Too." Reveals the Ukraine team's unrestricted access.
- **January 2019 – March 2020** — the period in which **55,000+ Ring customers** fell victim to credential stuffing and brute force. **Thousands of videos** downloaded by hackers.
- **December 2019** — a viral TikTok clip: a hacker speaks to an **8-year-old African American girl** in her bedroom in Mississippi, using racist slurs. Her mother had installed the camera "for safety."
- **2020** — the FTC opens an investigation.
- **May 31, 2023** — **FTC announces penalties**: **5.8 million USD (Ring)** + **25 million USD (Alexa/COPPA)** = total of 30.8 million USD against Amazon.
- **April 2024** — the FTC sends out **117,044 consumer refunds** of roughly 48 USD each.
- **2025+** — Ring continues to operate; Amazon expands with Ring Alarm, Ring for Business.

---

## Mechanism

### Default Ring architecture (2016–2018)

Ring sold its cameras as **"smart home security."** Technically:
1. The camera records **continuously** (or upon motion, depending on settings).
2. Video is encrypted in transit, but **unencrypted on Amazon/Ring servers**.
3. The servers are accessible to:
   - The user (camera owner)
   - **All Ring employees** (until January 2018)
   - **The Ring team in Ukraine** (Kyiv, Kharkiv) — **unrestricted access to everything** until 2018
   - Police in certain cases (via **Ring Neighborhoods**)
4. AI/ML for recognizing motion, people, vehicles — **trained on customer recordings without consent**.

### 2019–2020 vulnerabilities: credential stuffing

**Credential stuffing** — an attack in which a hacker uses **stolen passwords from other breaches** (for example Yahoo, LinkedIn, eBay) to log into an account. If a Ring customer used **the same password** as on another hacked service, the attacker could get in.

**Ring did not introduce MFA until 2019**. It did not even detect mass login attempts. Per the FTC: *"hundreds of thousands of videos of the personal spaces of consumers' homes"* were exposed in this way.

**Once logged in, a hacker could**:
- View live video
- Download all archived recordings
- Use the **two-way intercom** (speaking to people in the home)
- Change settings

### The key case — 81 women

September 2017, California. A Ring employee (male, around 30 years old, name not disclosed) used his work computer to:
- Search for user accounts **belonging to women he found attractive** (based on the profile photo)
- Watch their **bedroom and bathroom camera recordings**
- Return repeatedly to the same accounts over several months
- Accumulate **thousands of recordings** from the cameras of **81 women**

**A female colleague** noticed the strange behavior. She reported it to a supervisor. **The first supervisor ignored it**. The case was escalated only when another supervisor noticed that the employee was **watching only pretty girls** — those are the literal words in the FTC report. Only then:
- An audit team analyzed his activity
- The employee was fired
- Ring **did not notify** the 81 victims
- Ring **did not notify** the authorities

### High-profile hacking cases

**December 2019, Mississippi** — Ashley LeMay and her husband bought a Ring Indoor Cam for their daughters' room (ages 8, 6, and 5). Four days after installation, a hacker got into the camera. He spoke to **8-year-old Alyssa**: *"I'm your best friend. I'm Santa Claus."* Then came **racist slurs**. Alyssa screamed for her mother. Her mother posted the recording to Facebook. **It went viral across the USA**.

**Florida, 2019** — a 15-year-old girl discovered that the camera in her room had been taken over by a hacker who had been **speaking to her** at various times over several weeks. Her parents did not believe her for months.

**California, nursing home, 2020** — an 87-year-old woman in her room. A hacker **sexually propositioned her** through the two-way intercom of the camera her family had installed "for safety."

---

## Discovery

### *The Intercept* — Sam Biddle

**Sam Biddle** — *The Intercept* reporter specializing in tech and surveillance. In January 2019, he published the landmark article **"For Owners of Amazon's Ring Security Cameras, Strangers May Have Been Watching Too."** Key findings:
- The Ring team in **Kyiv and Kharkiv** had unrestricted access to all recordings
- Employees showed one another "funny" or "weird" recordings
- The access was used to **train AI** (object recognition) without customer consent
- No audit logs: Ring did not know who had watched what

### The FTC investigation

- **February 2020** — the FTC opens an investigation after an influx of complaints and *The Intercept* report.
- **2020–2023** — discovery, correspondence, settlement.
- **May 31, 2023** — penalty of 5.8 million USD.

### First publications

- **January 10, 2019** — Sam Biddle, *The Intercept*, "For Owners of Amazon's Ring Security Cameras, Strangers May Have Been Watching Too"
- **December 11, 2019** — Alyssa LeMay video goes viral on TikTok and Twitter
- **January 2020** — *Vice*, *Motherboard*: "Hackers Are Breaking Into Ring Cameras to Harass Families"
- **May 31, 2023** — FTC announcements, NYT, WSJ, WaPo coverage

---

## Key people

### Ring / Amazon

- **Jamie Siminoff** — founder of Ring (2013), CEO until 2023. Richard Branson was an early investor.
- **Andy Jassy** — CEO of Amazon since 2021.
- **Jeff Bezos** — CEO of Amazon at the time of the Ring acquisition (2018).

### Journalists

- **Sam Biddle** (*The Intercept*) — key discoverer.
- **Kashmir Hill** (*New York Times*) — long-term analysis.
- **Caroline Haskins** (*Motherboard/Vice*) — many stories on Ring Neighborhoods and the police.

### Victims

- **Ashley and Alyssa LeMay** — the Mississippi family, public call for change.
- 81 women who were victims of the Ring employee (identities protected)

### Regulators

- **Samuel Levine** — director of the FTC Bureau of Consumer Protection. Lead signatory on the complaint.
- **Lina Khan** — FTC chair since 2021.

### Critics

- **EFF** (Electronic Frontier Foundation) — numerous reports on Ring Neighborhoods and cooperation with the police.
- **Fight for the Future** — the "End Surveillance Camera Networks" campaign.

---

## Company response

### Ring/Amazon

**Stage 1: denial (2019).** Statement: *"Under no circumstances does an employee have access to livestreams from any Ring device."* After *The Intercept* report, this proved to be false.

**Stage 2: restricting access (2019–2020).** Restricted employee access to recordings, introduced MFA, audit.

**Stage 3: FTC settlement (May 2023).** Statement: *"Ring promptly addressed these issues on its own years ago, well before the FTC began its inquiry. While we disagree with the FTC's allegations and deny violating the law, this settlement resolves this matter so we can focus on innovating on behalf of our customers."*

**Stage 4: product reforms (2023+).**
- **End-to-end encryption** optional (since 2021)
- **Two-factor authentication** mandatory
- Ring **wound down the Ring Neighborhoods and Law Enforcement Portal** (2024) after criticism
- Ring **no longer allows** police to request recordings without a court order (2024)

---

## Legal proceedings

### Jurisdictions

- **US federal** — FTC (5.8 million penalty)
- **US states** — several states ran parallel investigations, but these did not conclude with separate penalties
- **EU** — no formal proceedings (Ring has a limited presence)

### Legal basis

- **FTC Act § 5** — unfair and deceptive practices
- Ring advertised that it "enhances safety" — a misrepresentation, given that the company itself failed to secure the data

### Key stages

| Date | Stage |
|------|------|
| January 10, 2019 | *The Intercept* — disclosure |
| January 2020 | LeMay story breaks |
| 2020 | FTC opens investigation |
| May 31, 2023 | 5.8 million USD penalty |
| April 2024 | Consumer refunds |

---

## Penalties and settlements

| Date | Authority | Amount | Jurisdiction | Basis |
|------|-------|-------|-------------|----------|
| May 31, 2023 | FTC | 5,800,000 USD | USA | FTC Act § 5 |
| April 2024 | FTC (distribution) | 5,600,000 USD paid out to 117,044 customers | USA | (from the penalty) |

---

## Precedents and implications

### For US law

- **The FTC strengthened its authority** over IoT/smart home.
- The 5.8 million USD penalty was **relatively small** — but the **destruction of algorithms trained on illegally viewed video** was unprecedented. An analogy to *Brown v. Google* (B05) "data destruction."
- **20 years of monitoring** as part of the penalty.

### For EU law

- Ring has a **limited presence** in the EU. Had it been more popular, a penalty from the Irish DPC or a German DPA would have been significantly higher.
- **Parallel proceedings** involving **Eufy** (Anker cameras) in 2023 — violations of E2E encryption.

### For Big Tech practice

- **Ring Neighborhoods and the police** — after EFF criticism, Amazon wound down the most controversial features in 2024. Police can no longer **request recordings en masse** from Ring users.
- **IoT privacy-by-default** — regulators began to require E2E and MFA as default options.

---

## Class actions

The main case: the FTC (not a classic class action). **Individual lawsuits** — some families of hacker victims filed suits. The outcomes were piecemeal, usually settlements subject to **NDA**.

---

## Conclusions for citizens

### What does this mean for me?

If you have a home camera (Ring, Arlo, Wyze, Eufy, TP-Link Tapo, or any other) — **employees of the company can potentially have access to your recordings**. Even if the company declares that they cannot, the Ring story shows that such declarations **can be false**. In addition, **hackers can take over your camera** if you don't have MFA and if you use the same password you use on other services.

### How to protect yourself?

1. **Enable MFA everywhere** (Ring, Arlo, Google Nest, Apple HomeKit, Wyze). This is **the single most important step**.
2. **Unique passwords** for cameras — never the same as anywhere else.
3. **Password manager** — Bitwarden, 1Password, KeePassXC.
4. **Turn on E2E encryption** if available:
   - Ring: Control Center → Video Encryption → Advanced End-to-End
   - Apple HomeKit Secure Video — E2E by default
5. **Camera positioning** — NOT in the bedroom, bathroom, or child's room. Only at the entrance, in the living room, or outside.
6. **Physically cover the camera** when household members are home (Ring has **Privacy Zones** and **Disable Motion**).
7. **Consider local cameras** — Synology Surveillance Station, UniFi Protect, Home Assistant + Frigate — with recordings only on your own server.

### For parents

8. **Cameras in a child's room** — **think twice**. The LeMay story shows the risk.
9. **Baby monitors** — the same risks apply. Choose local (Wi-Fi only) over cloud-based.
10. **Talk to the child** — if you use a camera, the child should know about it.

### A note for mediators, lawyers, and victims of domestic violence

- **Cyberstalking via cameras** — a former partner who knew the password may **still have access** to the cameras. After separation: **change passwords, enable MFA, and remove their account from Family Share**.
- **In custody cases** — home cameras can be **evidence** (where the child was, with whom). But they can also be **an instrument of surveillance** by one parent over the other.
- **In criminal cases** — Ring recordings were frequently used by the police. **Ring discontinued direct requests** in 2024, but the police can still request them through the courts.

---

## Context

- **"Only pretty girls"** — the literal words in the FTC report. This phrasing, indicating the employee's overt motive, was one of the key points in the FTC's decision to impose a penalty.
- **Ring was rejected on Shark Tank** in 2013. Jamie Siminoff pitched **"Doorbot"** — a doorbell with a camera. The Shark Tank investors (Kevin O'Leary, Daymond John, Lori Greiner) all passed. Five years later Amazon paid roughly 1 billion USD for the company. Siminoff returned to Shark Tank as a guest in two seasons.
- **Ring Neighborhoods** — a "neighborhood" app in which users shared recordings with their neighbors. Criticized for **amplifying racial profiling** (disproportionate recordings of "Black suspects"). EFF ran the **"Catalog of Police Partnerships"** campaign, identifying **2,000+ US police departments** working with Ring. Amazon wound down the program in 2024.
- **Alyssa LeMay** (Mississippi) — after the 2019 incident, Ashley LeMay became an activist for IoT safety for children. Alyssa appeared on *Good Morning America* and in **Time magazine**. The family sued Ring in federal court in Mississippi; the case ended in an NDA-bound settlement.
- **Jeff Bezos and Ring** — Amazon acquired Ring in April 2018 for roughly 1 billion USD. Bezos personally backed the decision, viewing Ring as a key element of **Amazon's smart home ecosystem** (Alexa + Ring + Key = Prime). After the 2023 scandal, Amazon **did not strategically change** Ring's position, but it reduced marketing of the "neighborhood" features.
- **The Ukrainian team** — Ring had an operations team in Kyiv and Kharkiv. After Russia's invasion in 2022, Ring evacuated its staff, but the scandal of **unrestricted video access** by that team remained in regulators' memory.
- **"The smart home paradox"** — cameras are most often bought for a **sense of security**, but they can be a source of **greater insecurity**. NIST research (2023) shows that families with Ring cameras generally **feel less safe** than those without them.
- **An FTC destruction milestone** — 5.8 million USD is a small penalty, but the FTC required **destruction** of:
  - All recordings from before 2018
  - **Face embeddings** — numerical representations of faces used to train AI
  - Algorithms and models trained on illegally viewed video
  This is valuable from an AI perspective — far more consequential than a financial penalty alone.
- **Polish context** — Ring is not widely available in Poland (Amazon PL has sold in the country since 2021, but Ring has a limited presence). The Polish DPA (UODO) did not take a formal position. Popular cameras in Poland: Eufy (Anker), Tapo (TP-Link), Xiaomi, EZVIZ (Hikvision) — each with its own list of controversies.
- **The Eufy scandal, 2022** — **Anker Eufy** advertised E2E encryption, and it turned out that thumbnail recordings were **unencrypted on AWS servers**. An analogy to Ring. Anker paid roughly 5 million USD in class action settlements.
- **The Wyze scandal, 2022** — **Wyze Labs** concealed a security vulnerability for **3 years** (2019–2022). Customers were not informed.
- **The controversial "Police Ring"** — Ring partnered with 2,000+ US police departments, giving them an interface to **request recordings from users** without a court order. EFF criticized this as a **"neighborhood watch panopticon."** Amazon wound down direct requests in 2024 after years of pressure.
- **Andy Jassy's reforms** — after taking over as CEO of Amazon in 2021, Jassy gradually scaled back Ring's most controversial elements. In 2024, he announced a **"Privacy-First Approach"** — but without any fundamental changes to the business.

---

## Sources

1. Federal Trade Commission, "FTC Says Ring Employees Illegally Surveilled Customers, Failed to Stop Hackers from Taking Control of Users' Cameras," May 31, 2023. URL: https://www.ftc.gov/news-events/news/press-releases/2023/05/ftc-says-ring-employees-illegally-surveilled-customers-failed-stop-hackers-taking-control-users (accessed: 2026-04-17)

2. Sam Biddle, "For Owners of Amazon's Ring Security Cameras, Strangers May Have Been Watching Too," *The Intercept*, January 10, 2019. URL: https://theintercept.com/2019/01/10/amazon-ring-security-camera/ (accessed: 2026-04-17)

3. United States of America v. Ring LLC, Case No. 1:23-cv-01407 (D.D.C.), FTC Complaint, May 31, 2023.

4. FTC, "FTC Sends Refunds to Ring Customers Stemming from 2023 Settlement," April 2024.

5. Kashmir Hill, "The Ring Doorbell and the Rise of Mass Surveillance," *New York Times*, 2020.

6. Caroline Haskins, numerous articles for *Motherboard/Vice*, 2019–2020, on Ring and the police.

7. EFF, "Catalog of Police Partnerships with Ring," numerous reports, 2019–2024.

8. CNN Business, "Amazon to pay more than $30 million to settle FTC privacy complaints over Alexa and Ring," May 31, 2023.

9. NPR, "Amazon to pay over $30 million to settle claims Ring, Alexa invaded user privacy," June 1, 2023.

10. CBS News, "Amazon's Ring gave employees 'unfettered' access to customer videos, FTC alleges," May 2023.

11. Ashley LeMay interview, *Good Morning America*, December 2019.

12. Fight for the Future, "End Surveillance Camera Networks" campaign, 2020–2024.

13. NIST, "Smart Home Privacy: User Perception vs Reality," 2023.

14. Amazon, communiqué on Ring reforms, 2024.

15. Jamie Siminoff, public appearances, returns on *Shark Tank* 2019, 2022.

---

*Last updated: 2026-04-17*
*Card in the database: D01_amazon_ring.md*
