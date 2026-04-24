---
id: E01
slug: e01-tiktok-bytedance
group: E
group_label: TikTok, X, Clearview, Zoom
title: TikTok / ByteDance
year_revealed: 2022
last_updated: '2026-04-18'
companies:
- ByteDance
status: active_investigation
jurisdictions:
- US
- UK
- CN
- global
legal_basis:
- 18 USC § 2510
- 18 USC § 1030
- potencjalne bankowanie zagraniczne
fines: []
whistleblowers:
- baker-white
- criddle
journalists:
- Cristina Criddle
related_cases:
- C03
- B06
- D05
- C02
- A05
tags:
- pracownicy
- dziennikarze
- sygnalista
- geopolityka
categories:
- privacy
geo_coords: []
priority: STANDARD
card_complete: true
word_count: 2961
explainer:
  src: /animations/e01-tiktok-bytedance.html
  duration: '60s'
  title: ByteDance — surveilling FT and Forbes journalists
subtitle: Surveillance of journalists by Chinese and American employees
years_active:
- 2022
- 2021
---

# E01 — TikTok / ByteDance: Surveillance of journalists by Chinese and American employees

> **Category:** Journalist surveillance / source identification / internal audit / press freedom violation
> **Company/companies:** ByteDance (TikTok)
> **Years:** July–October 2022 (practice), December 2022 (disclosure), 2023+ (DOJ proceedings)
> **Status:** 4 employees fired; DOJ Eastern District of Virginia investigation; no regulatory penalties
> **Card ID:** E01

---

## Metadata

| Field | Value |
|------|---------|
| Country/region | US, UK; global impact (ByteDance in China, TikTok globally) |
| Year revealed | December 22, 2022 (*Forbes*, Emily Baker-White) |
| Years the practice lasted | July–October 2022 (specific incident); broader internal culture from 2021+ |
| Total penalty | None (DOJ investigation ongoing; no formalized charges) |
| Currency | — |
| Legal basis | 18 USC § 2510 (Wiretap Act), 18 USC § 1030 (CFAA); potential foreign banking |
| Whistleblower/discoverer | **Emily Baker-White** (*Forbes*, previously *BuzzFeed News*), **Cristina Criddle** (*Financial Times*); internal memo from GC Erich Anderson |
| Number of victims | At least **4 journalists**: Emily Baker-White, Cristina Criddle, Katharine Schwab, Richard Nieva — plus their contacts |
| Status (as of today) | DOJ Eastern District of Virginia investigation ongoing; 4 employees fired |

---

## TL;DR

**On December 22, 2022**, *Forbes* (Emily Baker-White) revealed that **four ByteDance employees** — the parent of TikTok — **two in China and two in the US** — had **deliberately accessed the TikTok account data of journalists** in an effort to **identify internal sources** leaking information to them. Affected journalists: **Emily Baker-White** (*BuzzFeed News*, later *Forbes*), **Cristina Criddle** (*Financial Times*), **Katharine Schwab** (*Forbes*), **Richard Nieva** (*Forbes*). All had previously written **critical articles about ByteDance's practices regarding access to US TikTok user data**.

**The ByteDance employees' method**: pulling **IP addresses, location data, and usage timestamps** from the journalists' TikTok apps. Then **cross-referencing** them with the IP addresses of ByteDance employees — the goal being to identify which employee had physically met with a journalist in the same city at the same time = a potential source.

The practice was revealed by an internal memo from **Erich Anderson** (General Counsel of ByteDance) sent to all employees. The memo leaked to *Forbes*. **Rubo Liang** (CEO of ByteDance, China), in an email to employees: *"The public trust that we have spent huge efforts building is going to be significantly undermined by the misconduct of a few individuals."* **4 employees were fired**.

The scandal broke at a critical moment:
1. TikTok was negotiating with CFIUS (Committee on Foreign Investment in the U.S.) on **"Project Texas"** — a $1.5 billion plan under which all American user data would be hosted by **Oracle** and inaccessible to ByteDance employees in China.
2. A month earlier, in November 2022, FBI Director **Christopher Wray** had publicly voiced concerns about Chinese officials' access to TikTok data.
3. The US Congress was debating **PAFACA** (the ban-or-divest act) — the bill was passed in April 2024.

**January 2023** — the **US Department of Justice (DOJ)**, through the **Eastern District of Virginia** office, opened an investigation. In March 2023, Forbes revealed that ByteDance had received a **federal subpoena**. The investigation remains ongoing today (2026). **Senator Marco Rubio**: *"No one should be surprised or fooled by ByteDance's public apology. We need to ban TikTok."*

Case E01 shows that **employee access to platform data can be used to surveil journalists and whistleblowers** — not only by states, but by **the companies themselves**. An analogy to the **Uber God View** case (D04) — different platforms, the same mechanics.

---

## Timeline

- **September 2012** — Zhang Yiming founds **ByteDance** in Beijing.
- **September 2016** — ByteDance launches **Douyin** in China.
- **August 2018** — ByteDance launches **TikTok** globally after acquiring **Musical.ly** for $1 billion.
- **2019–2022** — TikTok grows to **~1 billion users globally**.
- **June 17, 2022** — ***BuzzFeed News*** (Emily Baker-White): "TikTok Data on American Users Repeatedly Accessed From China." The revelation that **ByteDance employees in China had access** to American user data despite official denials.
- **August 2022** — further Baker-White articles about Chinese employees' access to US data.
- **August 1, 2022** — *Financial Times* (Cristina Criddle): further disclosures about access practices.
- **July–October 2022** — four ByteDance employees (2 US, 2 China) **deliberately access** the TikTok account data of Baker-White and Criddle, trying to identify sources.
- **November 2022** — an internal ByteDance audit discovers the breach.
- **December 22, 2022** — *Forbes* publishes: "TikTok Parent ByteDance Spied On Forbes Journalists." The GC Erich Anderson memo leaks.
- **December 22, 2022** — ByteDance publicly confirms, **fires 4 employees**.
- **January 2023** — the **US Department of Justice (Eastern District of Virginia)** opens an investigation.
- **March 2023** — ByteDance receives a federal subpoena.
- **March 13, 2024** — House passes PAFACA (ban-or-divest).
- **April 24, 2024** — Biden signs PAFACA.
- **January 17, 2025** — SCOTUS upholds the law in *TikTok v. Garland*.
- **January 22, 2026** — the **TikTok USDS Joint Venture** formally closes (Oracle, Silver Lake, MGX at 15% each, ByteDance 19.9%).
- **April 2026** (currently) — DOJ investigation ongoing; no formal charges.

---

## Mechanism

### How ByteDance employees surveilled journalists

**TikTok data architecture (2022):**
- TikTok collected from users: IP, location (GPS + Wi-Fi + cellular network), device, OS, timestamp of every action, contacts, browsing data.
- ByteDance employees in various countries had **internal tools** for analyzing data (**Aeolus** — an internal tool, per a 2023 whistleblower).
- The tools required **manager approval** for broad queries, but **individual queries for a single user** had fewer barriers.

**Step by step:**
1. **Account identification**: employees located the TikTok accounts of Emily Baker-White (*BuzzFeed News* at the time), Cristina Criddle (*Financial Times*), Katharine Schwab and Richard Nieva (*Forbes*). The journalists' personal accounts were identifiable by names in their profiles or metadata.
2. **Pulling IP and location data**: ByteDance's internal tools allowed retrieval of **IP history** from recent months. The journalists used TikTok personally (not for work), so they had IP histories from **offices, homes, and coffee shops**.
3. **Cross-referencing**: comparing the journalists' IPs and locations with the **IPs and locations of ByteDance employees**. If a ByteDance employee was in the same city/neighborhood at the same time that a journalist met with a source, that employee became a suspect for **leaking information**.
4. **Goal**: to identify **who inside ByteDance** had passed Baker-White and Criddle information about Chinese employees' access to US data.

**Why this matters legally:**
- **Wiretap Act 18 USC § 2510** — prohibits the interception of electronic communications. Legal question: is accessing a TikTok user's metadata an "interception"?
- **CFAA 18 USC § 1030** — Computer Fraud and Abuse Act. Access beyond authorization.
- **State privacy laws** (California, Virginia).
- **First Amendment** — freedom of the press. Surveillance of journalists by a private company is potentially a chilling-effect action.

### Broader context: "Project Aeolus" and access to US data

In March 2023, a **whistleblower** (per *Forbes*, anonymous) informed Senator **Josh Hawley** (R-MO) that:
- The internal tool **Aeolus** allowed ByteDance employees (including those in China) to run **broad queries against US user data**.
- Authorization required only manager and "data owner" approval — **which in practice meant employees in China**.
- **Project Texas** (Oracle hosting) was not fully implemented — data **circulated between Oracle's cloud and ByteDance's systems** in China.

---

## Discovery

### Emily Baker-White

**Emily Baker-White** — the key journalist in the case. Initially at *BuzzFeed News* (2021–2022), then *Forbes* (2022+). Specializes in tech accountability. Her series of articles about ByteDance's access to US data (**June–August 2022**) was based on **internal ByteDance recordings** from 80 meetings — obtained from a whistleblower. Those articles motivated ByteDance employees to attempt to **deanonymize her source** — which became the E01 scandal itself.

In December 2022, Baker-White revealed that **she herself had been a target of surveillance**. *Forbes*: *"ByteDance's confirmation that it surveilled journalists appeared to contradict the promises it had made to the U.S. government."*

### Cristina Criddle

**Cristina Criddle** — *Financial Times*, tech correspondent. Published similar material about ByteDance. Also was a target.

### Erich Anderson's internal memo

**Erich Anderson** — General Counsel of ByteDance. In November/December 2022 he circulated an internal memo describing the audit and the firing of the 4 employees. The memo was passed to *Forbes* by another anonymous source. Disclosed on December 22, 2022.

### First publications

- **December 22, 2022** — Emily Baker-White, Alexandra S. Levine, "TikTok Parent ByteDance Spied On Forbes Journalists," *Forbes*
- **December 22, 2022** — *Financial Times* (Criddle): "ByteDance spied on FT reporter"
- **December 22, 2022** — *Washington Post*: "TikTok admits its workers accessed journalists' data"
- **December 23, 2022** — reactions in *NYT*, *WSJ*, *Reuters*

---

## Key people

### ByteDance / TikTok

- **Zhang Yiming** — founder of ByteDance (2012), CEO until 2021. Afterwards formally outside the company.
- **Liang Rubo** (Rubo Liang) — CEO of ByteDance since 2021 (China). Author of the email to employees: *"I believe this situation will serve as a lesson to us all."*
- **Shou Chew** (Shou Zi Chew) — CEO of TikTok (a separate global entity). Testified before the US Congress in March 2023 and May 2024.
- **Erich Anderson** — General Counsel of ByteDance.

### Journalist victims

- **Emily Baker-White** (*BuzzFeed News*/*Forbes*) — the central figure.
- **Cristina Criddle** (*Financial Times*)
- **Katharine Schwab** (*Forbes*)
- **Richard Nieva** (*Forbes*)

### Regulators / prosecutors

- **FBI Director Christopher Wray** — public warnings since 2022.
- **Eastern District of Virginia US Attorney** — has led the investigation since January 2023.
- **CFIUS** — Committee on Foreign Investment in the U.S., negotiated Project Texas.

### Politicians

- **Sen. Marco Rubio** (R-FL) — the leading critic, senator on the Intelligence Committee.
- **Sen. Josh Hawley** (R-MO) — received the whistleblower in 2023.
- **Rep. Mike Gallagher** (R-WI) — co-author of PAFACA.
- **Rep. Raja Krishnamoorthi** (D-IL) — co-author of PAFACA.

### Randall Lane

**Randall Lane** — Chief Content Officer of *Forbes*: *"This is a direct assault on the idea of a free press and its critical role in a functioning democracy."*

---

## Company response

### ByteDance

**Stage 1: confirmation and firings (December 22, 2022).** After the *Forbes* publication, ByteDance confirmed the audit and disclosed:
- 4 employees fired
- 2 in the US, 2 in China
- GC memo sent to all employees

Official statement by **Jennifer Banks** (spokesperson): *"We have strongly condemned the actions of the individuals found to have been involved, and they are no longer employed at ByteDance. Our internal investigation is still ongoing."*

**Stage 2: Shou Chew's congressional testimony (March 2023).** A 5-hour hearing. Chew: *"We have not been asked to share any U.S. data with the Chinese government. And we would not do so if we were asked."* Members of Congress from both parties were unconvinced.

**Stage 3: Project Texas intensification (2023–2024).** Oracle hosting, $1.5 billion spent, USDS (US Data Security) as a separate entity.

**Stage 4: PAFACA and ban (April 2024 – January 2025).** TikTok loses its legal battle. On January 19, 2025, the app is temporarily shut down in the US.

**Stage 5: USDS Joint Venture (January 22, 2026).** Oracle, Silver Lake, MGX at 15% each, ByteDance 19.9%, "qualified divestiture." Critics (House Select Committee on the CCP, Sen. Markey): **the algorithm is still in Beijing**, a license, not ownership.

---

## Legal proceedings

### Jurisdictions

- **US federal** — DOJ Eastern District of Virginia (investigation ongoing)
- **US state** — Virginia (prosecutor's office), California (CPPA)
- **EU** — Ireland's DPC is conducting separate proceedings

### Legal basis

- **18 USC § 2510** (Wiretap Act)
- **18 USC § 1030** (CFAA — Computer Fraud and Abuse Act)
- **PAFACA** (Protecting Americans from Foreign Adversary Controlled Applications Act, 2024) — causally linked
- **SCA** (Stored Communications Act)

### Key stages

| Date | Stage |
|------|------|
| December 22, 2022 | Disclosure |
| January 2023 | DOJ opens investigation |
| March 2023 | Federal subpoena |
| April 24, 2024 | PAFACA signed |
| January 17, 2025 | SCOTUS upholds the law |
| January 22, 2026 | USDS Joint Venture |

---

## Penalties and settlements

**No direct penalties** for the surveillance of journalists. The DOJ Eastern District of Virginia investigation has been ongoing since 2023.

Related: **PAFACA** as a **de facto sanction** — it forced ByteDance into **divestiture** in January 2026.

---

## Precedents and implications

### For US law

- **PAFACA** as the first-ever **app-specific ban** on grounds of foreign ownership.
- **A precedent for future Chinese apps** (WeChat, Lemon8, Temu, Shein, CapCut).
- **Press freedom vs. security** — the case showed that private tech companies can surveil journalists.

### For EU law

- **The TikTok DPC case for EUR 530 million** (2025) — directly linked (→ E03).
- **A precedent for Schrems III** scenarios concerning transfers to states without an adequacy decision.

### For Big Tech practice

- **All platforms have similar capabilities** — Uber (D04), Meta, Google could and can do this. The difference in the ByteDance case: **they bore a jurisdictional Chinese shadow** and **had to explain themselves publicly**.
- **Zero trust for employee access** — Project Texas forced the isolation of data from employees in China.

---

## Class actions

No formalized class actions specifically for E01 (surveillance of journalists). Related class actions on general TikTok privacy (Illinois BIPA): **$92 million settlement in 2022**.

---

## Conclusions for citizens

### What does this mean for me?

If you use TikTok — **your location data, IP, and activity history are accessible to ByteDance employees**. Project Texas (USDS, Oracle hosting) **limited access**, but **the recommendation algorithm is still in China** (proved by the January 2026 deal). For the average user, the risk is **theoretical** — the chance that you are a target is very low. But for **journalists, activists, dissidents** — the risk is real and proven.

### How to protect yourself?

**For the average user:**

1. **Limit location data** — Settings → Privacy → Location → **Never** for TikTok.
2. **Turn off "Personalized Ads"** in settings.
3. **Do not use TikTok** on a work device with access to company data.
4. **Use TikTok in a separate browser session** (desktop) instead of the dedicated app — less access to metadata.

**For journalists and activists:**

5. **Do not use a personal TikTok account** for work with sensitive sources.
6. **Use a dedicated device** (burner phone) for contact with sensitive sources.
7. **Signal, ProtonMail, Tor** for communication with sources.
8. **SecureDrop** for anonymous submissions.
9. **Burner accounts** on social media platforms.

### What rights do I have?

**In the EU (GDPR):**
- **Art. 15** — download your own data from TikTok (Settings → Privacy → Download Your Data).
- **Art. 17** — right to be forgotten.
- **Art. 82** — compensation for damages.

**In the US:**
- **PAFACA** — TikTok is formally under restrictions.
- **State laws** — BIPA (Illinois), VCDPA (Virginia), CCPA (California).

### A note for mediators, lawyers, journalists

**Professional confidentiality in the TikTok era:**

- If a client uses TikTok and you spoke with them in a room — **the metadata from your device** may have been collected.
- For **high-risk cases** (political activists, dissidents, whistleblowers) — recommendation: do not use TikTok at all.
- **WhatsApp, Signal** are safer for professional communication.

**For investigative journalists in Poland:**

- Poland has not introduced PAFACA-style bans. TikTok in Poland has ~16 million users.
- UODO has not conducted its own proceedings regarding the surveillance of journalists.
- For work with sensitive sources: SecureDrop (Gazeta Wyborcza, Pismo), Signal, ProtonMail.

---

## Context

- **"Can't let this get out"** — an echo of the 2016 Uber case (Joe Sullivan, D06). In both cases, the companies had an internal culture of concealment. The difference: Uber paid hackers; ByteDance surveilled journalists.
- **Emily Baker-White** — in April 2022 she left *BuzzFeed News* for *Forbes*. A few months later she became **a target of surveillance** by the company she was writing about. Her career in tech accountability is a model of "journalism that matters." Pulitzer finalist 2023.
- **Randall Lane (Forbes)**: *"This is a direct assault on the idea of a free press and its critical role in a functioning democracy."* — a statement that became a symbol of the media's fight against Big Tech.
- **Chris Wray, FBI Director** — a month before the E01 disclosure, he issued a public warning about TikTok. The timing was critical — the Baker-White case confirmed his concerns.
- **Project Texas = $1.5 billion** — ByteDance spent $1.5 billion building infrastructure in the US (Oracle hosting, USDS). Despite that: in January 2026, Congress concluded that **it was not enough**.
- **Shou Chew before Congress (March 2023)** — a 5-hour hearing. Members of Congress from both parties asked pointed questions. **Rep. Kat Cammack (R-FL)**: *"Will you commit to not sharing U.S. user data with the Chinese government?"* Chew: *"Yes, I can commit to that."* Cammack: insufficient.
- **"60% institutional investors"** — ByteDance emphasizes that **60%** of its shares are held by global institutional investors. **20% Zhang Yiming**, 20% employees. Despite this: ByteDance **is a Chinese company** (Cayman Islands incorporation, but operations in Beijing).
- **Cayman Islands** — ByteDance Ltd. is formally incorporated in the Caymans. TikTok Inc. — in California/Delaware. The structure is **unusually complicated** even by tech standards.
- **The TikTok algorithm as a weapon** — critics (FBI, Congress) argue that TikTok's recommendation algorithm is **a tool of Chinese influence** on American youth. **Subtle propaganda** — e.g., the promotion of anti-Ukrainian, anti-LGBT, pro-Kremlin content. ByteDance: **no evidence**.
- **Polish TikTok** — ~16 million users. UODO has not conducted a separate proceeding on the surveillance of journalists. But Polish media (Gazeta Wyborcza, OKO.press) are active on TikTok — the theoretical risk is real.
- **"Tulsa rally 2020"** — an episode prior to E01: **TikTok users** organized mass reservations of tickets for Trump's rally in Tulsa, June 2020. **19,000 people were expected** — **6,000 showed up**. TikTok as a tool of **political trolls** (in this case against Trump). ByteDance: **no involvement**.
- **USDS Joint Venture (January 2026)** — Oracle (15%), Silver Lake (15%), MGX (UAE, 15%), ByteDance (19.9%). Critics: **an algorithm license is not ownership**. Sen. Ed Markey: *"This lack of transparency reeks."*
- **ACLU + EFF + Knight First Amendment Institute amicus brief** — in *TikTok v. Garland* (SCOTUS 2025) they argued that PAFACA is **prior restraint** — censorship forbidding speech before it occurs. SCOTUS rejected the argument.

---

## Sources

1. Emily Baker-White, Alexandra S. Levine, "TikTok Parent ByteDance Spied On Forbes Journalists," *Forbes*, December 22, 2022. URL: https://www.forbes.com/sites/emilybaker-white/2022/12/22/tiktok-tracks-forbes-journalists-bytedance/

2. Drew Harwell, Taylor Lorenz, "TikTok admits its workers accessed journalists' data; 4 fired," *Washington Post*, December 22, 2022.

3. Memo from GC Erich Anderson, ByteDance, November/December 2022 (disclosed by *Forbes*).

4. Emily Baker-White, "TikTok Data on American Users Repeatedly Accessed From China," *BuzzFeed News*, June 17, 2022.

5. *United States v. ByteDance*, federal subpoena, Eastern District of Virginia, March 2023.

6. FBI Director Christopher Wray, testimony before Congress, November 2022.

7. Shou Chew, testimony before the House Energy and Commerce Committee, March 23, 2023.

8. Protecting Americans from Foreign Adversary Controlled Applications Act (PAFACA), April 24, 2024.

9. *TikTok, Inc. v. Garland*, 604 U.S. 56 (2025) — SCOTUS.

10. Joshua Hawley, whistleblower disclosures, March 2023.

11. House Select Committee on the CCP, reports 2023–2026.

12. Sen. Marco Rubio, public statements 2022–2025.

13. Sen. Ed Markey, statement on the USDS Joint Venture, January 2026.

14. TikTok USDS Joint Venture documents, January 22, 2026.

15. Milton Mueller, "Yes, it's a Ban," Internet Governance Project, March 2024.

---

*Last updated: 2026-04-18*
*Card in the database: E01_tiktok_journalists.md*
