---
id: A03
slug: a03-onavo-i-facebook-research-vpn-project-atlas
group: A
group_label: Meta
title: Onavo and Facebook Research VPN (Project Atlas)
year_revealed: 2019
last_updated: '2026-04-17'
companies:
- Meta
status: settled
jurisdictions:
- US
- AU
- global
legal_basis:
- Apple Developer Terms
- Apple Enterprise Program
- COPPA
- australijski Privacy Act
fines:
- amount: 20000000
  currency: EUR
  authority: Federal Court of Australia (ACCC)
  date: '2023'
  category: regulatory_fine
  status: paid
whistleblowers:
- schrems
journalists: []
related_cases:
- A02
- A06
- A04
- E01
- D06
tags:
- pracownicy
categories:
- privacy
geo_coords: []
priority: STANDARD
card_complete: true
word_count: 3458
explainer:
  src: /animations/a03-onavo-i-facebook-research-vpn-project-atlas.html
  duration: '60s'
  title: Onavo / Project Atlas — Facebook paid to spy
subtitle: paying teenagers to be spied on
years_active:
- 2013
- 2019
---

# A03 — Onavo and Facebook Research VPN (Project Atlas): paying teenagers to be spied on

> **Category:** Competitor surveillance / abuse of Enterprise Certificate / teenagers
> **Company/companies:** Meta (Facebook)
> **Years:** 2013 (Onavo acquisition) – 2019 (shutdown); Research VPN: 2016–2019
> **Status:** Onavo shut down; Research VPN halted on iOS after Apple's ban; ACCC fine of AUD 20 million (2023)
> **Card ID:** A03

---

## Metadata

| Field | Value |
|------|---------|
| Country/region | Global; key regulatory responses: USA, Australia |
| Year of disclosure | January 29–30, 2019 (TechCrunch, Josh Constine) |
| Years of practice | 2013–2018 (Onavo), 2016–2019 (Research VPN / Project Atlas), earlier: Project Kodiak |
| Total fine | AUD 20 million (~EUR 12.5 million, Australian ACCC, 2023); additional reputational damage |
| Currency | AUD; almost exclusively reputational + strategic |
| Legal basis | Apple Developer Terms, Apple Enterprise Program, COPPA (US children), Australian Privacy Act |
| Whistleblower/discoverer | Josh Constine (*TechCrunch*), Will Strafach (security analysis) |
| Number of those affected | Onavo: tens of millions (approx. 33 million at peak); Research VPN: approx. 1 million, including 5% teenagers |
| Status (as of today) | Closed, all applications shut down |

---

## TL;DR

**Onavo** was an Israeli VPN application acquired by Facebook in October 2013 for approximately USD 120–200 million. It marketed itself as "protecting privacy" and "saving mobile data," but in practice it served as **Meta's probe for tracking user behavior** on phones — it saw their entire network activity, which applications they opened, for how long, and when. Its key strategic value: **Facebook learned that WhatsApp sends more than 2x as many messages as Messenger**, which justified the USD 19 billion spent on the WhatsApp acquisition in 2014. After Apple's warning, Onavo was removed from the App Store (August 2018) and then shut down (February 2019).

But Facebook **did not want to give up the data**. In parallel, **since 2016** it had been running a secret program called **Facebook Research** (internally known as **Project Atlas**, previously **Project Kodiak**), paying users **aged 13–35 (5% teenagers)** **USD 20 per month** in gift cards to install a VPN with **root access to network traffic**, HTTPS decryption, and requests for **screenshots of Amazon order history**. The program was distributed through intermediary firms (BetaBound, uTest, Applause) **without disclosing Facebook's involvement** until after the NDA was signed.

The case was exposed by **Josh Constine of TechCrunch on January 29, 2019**, based on technical analysis by **Will Strafach** (an iOS security expert). The key violation: Facebook **circumvented the App Store** by using the **Apple Enterprise Certificate Program** — intended **solely for distributing internal applications to a company's employees**. Apple reacted within 24 hours, **revoking Facebook's enterprise certificate**, which invalidated **all of FB's internal iOS applications** — Facebook employees could not use beta versions of their own apps, the lunch menu, or even company shuttle schedules. Menlo Park "descended into chaos" for two days. Seven hours after Constine's story ran, Facebook announced the shutdown of iOS Research. An analogous Google program (**Screenwise Meter**) was terminated on January 30, 2019, also with certificate revocation.

---

## Timeline

- **October 2013** — Facebook acquires **Onavo** (an Israeli company founded by Guy Rosen and Roman Khavronenko in 2010) for approximately USD 120–200 million. Onavo becomes the foundation of Meta's mobile analytics division.
- **2013–2018** — Onavo Protect operates as a **"free VPN,"** in reality serving Meta as a market probe.
- **February 2014** — Facebook acquires **WhatsApp for USD 19 billion**. Data from Onavo was pivotal in the decision to spend such an enormous sum.
- **2016** — Facebook launches a second, **more aggressive** program — **Facebook Research VPN**, internally known as **Project Kodiak** and later **Project Atlas**.
- **From 2016** — recruitment through ads on **Instagram and Snapchat** targeting people **aged 13–35**, with payments of USD 20/month plus referral bonuses. Payouts issued in gift cards.
- **June 2018** — At WWDC, Apple announces **new rules for VPNs in the App Store**: a prohibition on collecting data about activity in other applications. This directly targets Onavo.
- **June 27, 2018** — Facebook **renews its Enterprise Developer Certificate** — a crucial decision allowing it to continue distributing Research VPN outside the App Store.
- **August 2018** — Apple removes Onavo Protect from the iOS App Store. Facebook keeps Onavo on Android.
- **Earlier (2018)** — BuzzFeed journalists (**Ryan Mac, Charlie Warzel**) expose internal Meta documents showing that Onavo allowed the company to learn that WhatsApp sends 2x more messages than Messenger.
- **January 29, 2019, US morning** — **Josh Constine publishes in TechCrunch**: "Facebook pays teens to install VPN that spies on them." The story is based on analyses by **Will Strafach** (Guardian Mobile Firewall).
- **January 29, 2019, 7 hours later** — Facebook **announces the shutdown of the iOS Research app**.
- **January 30, 2019** — Apple **revokes Facebook's Enterprise Certificate**. All of Facebook's internal iOS applications stop working. Apple's statement: *"We designed our Enterprise Developer Program solely for the internal distribution of apps within an organization. Facebook has been using their membership to distribute a data-collecting app to consumers, which is a clear breach of their agreement with Apple."*
- **January 30, 2019** — TechCrunch reveals that **Google is also violating the Enterprise Certificate Program** with its **Screenwise Meter** application. Google immediately apologizes and removes the app.
- **January 31, 2019** — Apple revokes **Google's Enterprise Certificate as well** — a matter of policy consistency. Google Play Services on iOS stop working.
- **February 1, 2019** — after less than 2 days, Apple restores Facebook's and Google's certificates.
- **February 21, 2019** — Facebook announces **the shutdown of Onavo** on both iOS (already shut down) and Android; immediate cessation of data collection.
- **March 2019** — Senator **Mark Warner** calls on Meta to support legislation requiring informed consent for market research programs. Senator **Richard Blumenthal**: *"Wiretapping teens is not research — it cannot be allowed."*
- **2020** — Australia's ACCC (Australian Competition & Consumer Commission) initiates proceedings against Meta over Onavo.
- **June 2023** — The **Federal Court of Australia** imposes a fine of **AUD 20 million** (approximately USD 13 million / EUR 12.5 million) on Meta for **misleading marketing of Onavo**.

---

## Mechanism

### Onavo — how it worked

Onavo Protect was advertised as a **"secure VPN that protects your privacy and saves mobile data."** In practice:

1. It routed all of the user's traffic through **Onavo's (Facebook's) servers**
2. Facebook saw the **metadata of all applications** — which ones, when, how long, how many bytes
3. For some applications, it could see **their network traffic in unencrypted form**, if the app used HTTP
4. It produced **aggregate analytics** of trends in the mobile market

Onavo was **Meta's market probe** — it replaced external research firms (App Annie, Sensor Tower) with an internal tool that saw everything people did on their phones.

The **fine print** (Onavo Privacy Policy) stated that the application collects: *"time spent using apps, mobile and Wi-Fi data used by apps, the websites you visit, and your country, device, and network type."* — but this obscured the fact that the data went to Meta as a competitive analytics hub, rather than "to protect your data."

### Strategic value of Onavo for Meta

The key example is **WhatsApp**. Internal documents disclosed by BuzzFeed revealed that Facebook, through Onavo, determined that WhatsApp sends **more than twice as many messages per day as Facebook Messenger**. This information was decisive in the choice to pay **USD 19 billion** for the WhatsApp acquisition in February 2014. Without Onavo, Facebook would not have had that information advantage — the deal would have been **undervalued**, and Facebook would have either overpaid or failed to buy. With Onavo, it bought and won the strategic battle.

### Facebook Research / Project Atlas — how it worked

After Onavo was banned (June 2018 → August 2018), Facebook needed an **alternative**. Key technical differences:

1. **Distribution outside the App Store**: Facebook leveraged the **Apple Enterprise Certificate Program** — submitting the application as if it were an internal corporate tool (for employees), while actually distributing it to consumers.

2. **Masking via intermediaries**: the app recruited through sites like **BetaBound**, **uTest**, and **Applause** — users did not know they were dealing with Facebook until **after signing an NDA**.

3. **Root certificate**: users had to **install a Facebook root certificate** on their iOS system — which allowed Facebook to perform a **man-in-the-middle on all HTTPS traffic**, including decryption.

4. **Amazon screen scrape**: Applause actively asked users for **screenshots of their Amazon order history** — a clear violation of third-party privacy.

5. **Unrestricted monitoring**: the application could read private messages, emails, conversations, photos, browsing history, and purchasing activity.

**Quote from Will Strafach** (iOS security expert): *"The fairly technical-sounding 'install our Root Certificate' step is appalling. It gives Facebook continuous access to the most sensitive data about you, and most users are not able to reasonably consent to this, no matter the terms they sign, because there is no good way to articulate just how much power is handed over to Facebook when you do this."*

### Target group — teenagers

**Key detail**: Facebook recruited users **aged 13–35**, of whom **5% were teenagers (13–17)**. The ads appeared on **Instagram and Snapchat** — where young people live. Payment of USD 20 per month (plus referral bonuses) — **a meaningful amount for a teenager**, especially in a lower income bracket.

Parents had to "consent" only **formally** (online, via their child filling out the form). No actual verification.

### Why it was illegal/harmful

- **Violation of the Apple Developer Agreement** — the Enterprise Certificate was meant only for employees
- **COPPA (USA)** — the Children's Online Privacy Protection Act requires parental consent for collecting data from children under 13; teenagers aged 13–17 are formally outside COPPA, but programs targeting younger groups without parental control skirt the boundary
- **Misleading consumers (Onavo)** — advertising "privacy" and "savings" while concealing the actual purpose = a market probe
- **HTTPS decryption without informed consent** — man-in-the-middle practices on one's own users
- **Australian Privacy Act 1988** — the basis for the ACCC fine of AUD 20 million in 2023

---

## Discovery

### Who discovered it and when

**Josh Constine** (then Editor-At-Large at *TechCrunch*) — since 2016 had been tracking mentions of Onavo and Research VPN. In January 2019, he received a **tip** (information from an insider) that despite Onavo's shutdown, Facebook was still running an analogous program. He contacted **Will Strafach**, a well-known iOS security expert, co-founder of **Sudo Security Group**, and creator of the **Guardian Mobile Firewall** app.

Strafach performed a **deep code analysis** of the Research VPN app on iOS. He identified:
- installation of an Enterprise certificate
- a VPN routing all traffic to Facebook
- a request for root access
- **numerous references to Onavo Protect code** — meaning that Facebook **ported code from the shuttered Onavo** into Research VPN, indicating a **deliberate shift to another form of the same practice**.

### How the exposure unfolded

**January 29, 2019, US morning** — Constine publishes the first article: "Facebook pays teens to install VPN that spies on them." Key points:
- the program has been running since 2016
- code name Project Atlas
- recruitment of people aged 13–35 from Instagram/Snapchat
- USD 20/month plus bonuses
- root access, HTTPS decryption
- violation of Apple's policies

**Facebook's reaction** (quoted by TechCrunch): *"Like many companies, we invite people to participate in research that helps us identify things we can be doing better. Since this research program launched for adult participants 4 years ago, we have been clear about the data we were asking for, and that participants are being compensated."*

**Constine's counter-response** (7 hours later): *"Facebook did not publicly promote the Research VPN itself; it used intermediaries that often did not disclose Facebook's involvement until users began the registration process. Although participants received instructions and warnings, the program nowhere emphasizes or mentions the full scope of data Facebook can collect via the VPN."*

### First publications

- **January 29, 2019** — Josh Constine, *TechCrunch*, "Facebook pays teens to install VPN that spies on them"
- **January 30, 2019** — TechCrunch, "Apple bans Facebook's Research app"
- **January 30, 2019** — TechCrunch, "Mess with the Cook" (Tim Cook Facebook disputes)
- **January 30, 2019** — TechCrunch, the exposure of Google Screenwise Meter
- **Daring Fireball** (John Gruber) — commentary: *"Running this through their enterprise developer certificate is a flagrant violation of Apple's policies."*

---

## Key people

### Investigative journalists

- **Josh Constine** — *TechCrunch*, currently Venture Partner at SignalFire. Lead author of the investigation. Lecturer at Stanford GSB. From 2016 to 2020, **the most frequently cited tech journalist in the world** (per Techmeme).
- **Ryan Mac, Charlie Warzel** — *BuzzFeed News*, exposed internal documents demonstrating Onavo's value to Meta (WhatsApp).

### Security researchers

- **Will Strafach** — founder of Sudo Security Group, creator of Guardian Mobile Firewall. An expert in iOS security. Key code analysis of Research VPN.
- **John Gruber** — *Daring Fireball*, a critical Apple commentator.

### Intermediary firms

- **BetaBound** (part of Centercode) — beta testing platform
- **uTest** (Applause) — testing platform
- **Applause** — the ones who requested Amazon order screenshots

### Perpetrators / beneficiaries

- **Guy Rosen** — co-founder of Onavo, after the acquisition VP of Product Management at Meta. Currently CIO of Meta.
- **Mark Zuckerberg** — ultimately responsible; Research VPN operated under his authority.
- **Will Cathcart** — head of WhatsApp (since 2019); Research VPN operated under him.

### Regulators

- **Apple** (Tim Cook) — immediate reaction with a certificate penalty
- **Senator Mark Warner (D-VA)**, **Senator Richard Blumenthal (D-CT)** — public criticism
- **ACCC** (Australia) — the only regulator that enforced financial sanctions

---

## Company response

### Meta — first reaction (defensive)

The statement quoted above: an attempt to shift the topic to "volunteers" and "transparency" — ignoring the key issue, that:
- the intermediaries **did not disclose Facebook's involvement** until after the NDA
- participants received an NDA **prohibiting public discussion of the program** — *"There was nothing 'secret' about this"* vs. threats of lawsuits for disclosure.

### Meta — shutdown of Research VPN

January 29, 2019, 7 hours after Constine's publication — Facebook announces the **shutdown of the iOS version of the Research app**. The Android version continued operating for **several more weeks**.

### Meta — shutdown of Onavo

February 21, 2019, after public and regulatory pressure — Facebook announces the **definitive shutdown of Onavo** on all platforms. The announcement spoke of "transitioning to reward-based market research" (i.e. paid studies of the User Interviews type).

### Apple — a tough reaction

Apple spokesperson's statement: *"We designed our Enterprise Developer Program solely for the internal distribution of apps within an organization. Facebook has been using their membership to distribute a data-collecting app to consumers, which is a clear breach of their agreement with Apple. Any developer using their enterprise certificates to distribute apps to consumers will have their certificates revoked, which is what we did in this case to protect our users and their data."*

---

## Legal proceedings

### USA

- **COPPA** — the FTC had a potential basis, but did not pursue a **separate** proceeding; the matter was absorbed into the broader 2019 Consent Order (Cambridge Analytica).

### Australia — ACCC

- **2020** — ACCC files a lawsuit against Meta and Onavo in the Federal Court of Australia
- **June 2023** — ruling: Meta breached Australian consumer law by misrepresenting the nature of Onavo Protect
- **Fine:** **AUD 20 million** (approximately USD 13 million / EUR 12.5 million)

Quote from the ruling: Meta **"falsely or misleadingly represented"** that Onavo Protect protected user privacy, when in fact it collected a broad range of data for Facebook.

### UK / EU

- **ICO, DPC, German DPAs** — no direct proceedings, but the case influenced the general perception of Meta in Europe.

---

## Penalties and settlements

| Date | Body | Amount | Jurisdiction | Basis |
|------|-------|-------|-------------|----------|
| 01/30/2019 | Apple (no financial penalty) | Revocation of Enterprise Certificate | USA | Apple Developer Agreement |
| 02/21/2019 | — (voluntary shutdown) | — | Global | Public pressure |
| 06/2023 | Federal Court of Australia (ACCC) | AUD 20 million | Australia | Australian Consumer Law, Privacy Act |

---

## Precedents and implications

### For EU law

- Created a precedent for **VPN transparency** — in the EU, discussions began about mandatory labels for "VPN" applications indicating who is the beneficiary of the data.
- Used by NOYB as an example of **"systematic circumvention of regulation by Meta."**

### For US law

- Senators Warner and Blumenthal initiated bills **requiring informed consent for "market research"** — none of them were enacted as federal law.
- **COPPA 2.0 (proposal)** — extending protections to teenagers aged 13–16, in part motivated by Research VPN.

### For Apple's practice

- **Strengthened enforcement** of the Enterprise Certificate Program
- New reviews and audits of certificates
- **App Tracking Transparency (ATT, 2021)** — a revolution in iOS privacy, partly motivated by the Onavo/Research VPN cases.

### For Big Tech practice

- The case **changed the approach to free VPNs** — broader awareness began that "free" means "you pay with data"
- Analogous practices at Google (Screenwise) were **dismantled the same day** — the domino effect of Apple's action

---

## Class actions

No significant consumer class actions in the US directly tied to Onavo/Research VPN (included in the general FTC 2019 Consent Order).

---

## Conclusions for citizens

### What does this mean for me?

If **between 2013 and 2019 you used the Onavo Protect application** (marketed as a free VPN), Meta saw **all metadata of application activity on your phone** — which apps you opened, when, how many times, and for how long. The data was aggregated and used **competitively** — helping Meta decide which companies to acquire or copy.

If between 2016 and 2019 (especially as a teenager) you were tempted by **a program paying you to install a "research" VPN** — Meta had **root access to everything** on your phone: private messages, emails, photos, purchase history, location.

### How to protect yourself?

1. **Never install "free" VPNs** that you have not vetted for their business model — if you are not paying, you are the product
2. **Paid VPNs from trusted companies (Proton VPN, Mullvad, IVPN)** — which clearly declare that they do not log traffic
3. **Never install a "root certificate"** — if an app asks, decline and uninstall
4. **If someone offers you money to install a tracking application** — that is a **warning sign**, not a promotion
5. **Teach the teenagers** in your family to recognize such practices — they are the main target of the marketing

### What rights do I have?

- **GDPR art. 15, 17, 21** — access, erasure, objection
- **GDPR art. 82** — compensation for non-material damage (difficult to estimate; EU precedent involves small sums of approximately EUR 100–500)
- **COPPA (USA)** for children under 13

### Where to report?

- **UODO** (Poland)
- **Irish DPC** (Meta's EU headquarters)
- **FTC** (USA)

### For mediators and lawyers

- The Onavo case is a canonical example of **"false consent"** — consent was expressed, but under the influence of **concealed facts**. In Polish civil law, analogous institutions include: **art. 84 of the Civil Code (error as to the content of a legal act)**, **art. 86 of the Civil Code (deceit)**, **art. 87 of the Civil Code (unlawful threat)**.
- For disputes concerning consumer matters: **Directive 2005/29/EC on unfair commercial practices** and the Polish Act on Counteracting Unfair Market Practices of 2007 — may serve as a basis for claims.

---

## Context

- **USD 19 billion for WhatsApp**. Data from Onavo directly justified that figure. This is **the most expensive research tool in the history of capitalism** — the cost of acquiring Onavo (~USD 120–200 million) paid back a thousandfold through the strategic decision on WhatsApp.
- **Onavo was Israeli** — a typical example of a Meta/Google tech acquisition in Tel Aviv. **Guy Rosen**, co-founder, is today **Meta's CIO** (one of the key leaders responsible for security).
- **Menlo Park in chaos**. When Apple revoked Facebook's Enterprise Certificate on January 30, 2019, Facebook employees could not use **internal apps for coordinating work**: beta versions of Facebook/Instagram, the lunch menu, or company shuttle schedules. For **2 business days**, hundreds of thousands of product and developer processes were suspended.
- **Google received the same penalty**. When TechCrunch revealed that Google was also abusing the Enterprise Certificate (Screenwise Meter), Apple — in the interest of a **consistent policy** — revoked Google's certificate as well. Ironically: Google employs mostly engineers working on Android, so the business harm was **less than at Facebook**, where the corporation mainly uses iOS internally.
- **Amazon order screenshots**. Applause (the intermediary) asked users for **screenshots of their Amazon order history**. This is **the most absurd element** of the entire program — human verification of purchases as "research." It showed Meta's desperation in its fight with Amazon.
- **Project Kodiak** — an earlier code name for Research VPN; then Project Atlas, which fit the metaphor of "mapping the market."
- **13-year-old children installed a VPN with a root certificate**. This is a technically complex operation (you have to **manually install a Trust profile**), yet 5% of Research VPN participants were teenagers. It shows that monetary incentives (USD 20 = about 2 McDonald's dinners) effectively break down resistance even to technically incomprehensible operations.
- **Josh Constine** (the author of the investigation) became, a few years later, a **Venture Partner at SignalFire** — a VC fund. It illustrates how in the US, investigative tech journalism overlaps with the VC ecosystem: sometimes journalists switch sectors after a major scoop.
- **Alex Stamos, former Facebook CSO**, in 2018 **left the company** precisely in the context of conflicts over data ethics — following Cambridge Analytica and Onavo. Today he is an **adjunct professor at Stanford** and a former internal critic of Meta.
- **7 hours**. That is how long it took from Constine's publication to Meta's announcement shutting down iOS Research. Similar to **Local Mess (A01)** — it shows that **the company knows its code** and has a ready withdrawal plan if something becomes publicly exposed.

---

## Sources

1. Josh Constine, "Facebook pays teens to install VPN that spies on them," *TechCrunch*, January 29, 2019. URL: https://techcrunch.com/2019/01/29/facebook-project-atlas/ (accessed: 2026-04-17)
2. Josh Constine, "Apple bans Facebook's Research app that paid users for data," *TechCrunch*, January 30, 2019. URL: https://techcrunch.com/2019/01/30/apple-bans-facebook-vpn/ (accessed: 2026-04-17)
3. Josh Constine, "Mess with the Cook: Apple reactivates Facebook's employee apps after punishment for Research spying," *TechCrunch*, January 31, 2019. URL: https://techcrunch.com/2019/01/31/mess-with-the-cook/ (accessed: 2026-04-17)
4. Josh Constine, "Facebook will shut down its spyware VPN app Onavo," *TechCrunch*, February 21, 2019. URL: https://techcrunch.com/2019/02/21/facebook-removes-onavo/ (accessed: 2026-04-17)
5. Ryan Mac, Charlie Warzel, "Mark Zuckerberg's Onavo Gives Facebook An Insight Into What People Do On Their Phones," *BuzzFeed News*, 2018. URL: https://www.buzzfeednews.com/article/ryanmac/facebook-onavo-insights (accessed: 2026-04-17)
6. John Gruber, "TechCrunch: Facebook Pays Teenagers to Install VPN That Spies on Them," *Daring Fireball*, January 29, 2019. URL: https://daringfireball.net/linked/2019/01/29/facebook-teens-vpn (accessed: 2026-04-17)
7. Engadget, "Facebook secretly pays users for complete access to their data," January 29, 2019. URL: https://www.engadget.com/2019-01-29-facebook-project-atlas.html (accessed: 2026-04-17)
8. Cory Doctorow, "Project Atlas: Facebook has been secretly paying iPhone users," *Boing Boing*, January 30, 2019. URL: https://boingboing.net/2019/01/29/atlas-snuck.html (accessed: 2026-04-17)
9. ACCC, "Meta's Onavo Protect misled consumers," press release, 2023. URL: https://www.accc.gov.au/media-release/court-orders-meta-companies-to-pay-20-million-in-penalties-for-conduct-liable-to-mislead-consumers-about-use-of-their-data (accessed: 2026-04-17)
10. Will Strafach, comments to TechCrunch and his own blog, January 2019.

---

*Last updated: 2026-04-17*
*Card in database: A03_onavo.md*
