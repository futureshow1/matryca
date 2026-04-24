---
id: A01
slug: a01-local-mess
group: A
group_label: Meta
title: '"Local Mess"'
year_revealed: 2025
last_updated: '2026-04-17'
companies:
- Meta Platforms
- Yandex
status: active_investigation
jurisdictions:
- EU
- US
- RU
- global
legal_basis:
- RODO
- ePrivacy Directive 2002/58/EC art. 5
- DMA art. 5
- 'in the US: Electronic Communications Privacy Act 1986'
- California Invasion of Privacy Act
- California Unfair Competition Law
fines: []
whistleblowers:
- schrems
journalists: []
related_cases:
- C02
- A05
- B05
- B04
- B03
tags:
- rodo
- pozew-zbiorowy
categories:
- privacy
geo_coords: []
priority: STANDARD
card_complete: true
word_count: 3749
explainer:
  src: /animations/a01-local-mess-v2.html
  duration: '60s'
  title: How Meta and Yandex tracked you in incognito mode
subtitle: Meta and Yandex tracked Android browsers via localhost
years_active:
- 2017
- 2025
---

# A01 — "Local Mess": Meta and Yandex tracked Android browsers via localhost

> **Category:** Tracking / bypassing browser safeguards / mobile security
> **Company/Companies:** Meta Platforms (Facebook, Instagram), Yandex (Maps, Browser, Navi, Search)
> **Years:** 2017–2025 (Yandex from 2017, Meta from September 2024, halted on June 3, 2025)
> **Status:** Practices ceased after disclosure; class action underway; EU regulatory proceedings under review
> **Card ID:** A01

---

## Metadata

| Field | Value |
|------|---------|
| Country/region | Global; enforcement hotspots: US (California), EU (German and Spanish DPAs), Russia (Yandex) |
| Year revealed | June 3, 2025 |
| Years practice was active | Yandex: 2017–2025; Meta: September 2024 – June 3, 2025 |
| Total fines | None (as of 04.2026) — proceedings ongoing |
| Currency | — |
| Legal basis | GDPR (art. 5, 6, 25, 32), ePrivacy Directive 2002/58/EC art. 5(3), DMA art. 5(2), in the US: Electronic Communications Privacy Act 1986, California Invasion of Privacy Act (CIPA), California Unfair Competition Law |
| Whistleblower/discoverer | Academic team from IMDEA Networks / Radboud University / KU Leuven |
| Number of affected | Estimated billions of Android users globally; Meta Pixel on 5.8 million sites (BuiltWith), Yandex Metrica on ~3 million |
| Status (as of today) | Practice halted; lawsuits and proceedings ongoing |

---

## TL;DR

On June 3, 2025, an international team of academic researchers revealed that the **Facebook and Instagram apps on Android** — and, since 2017, the **Yandex apps (Maps, Browser, Navi, Search)** — had spent years conducting covert tracking of user browser activity, **bypassing the Android sandboxing** system and every privacy mode available to the user (incognito, VPN, clearing cookies, blocking third-party cookies). The technique, which researchers dubbed **"Local Mess,"** consisted of running a hidden background service in the app that listened on a local port (localhost, 127.0.0.1) — whenever a user visited any of **millions of sites** carrying an embedded Meta Pixel or Yandex Metrica script, the script sent a session identifier to that hidden channel, and the app (with the user logged in) linked the browser's anonymous identity to a real account.

The finding was disclosed on June 3, 2025 by a team of: **Aniketh Girish** (IMDEA Networks), **Günes Acar** (Radboud University), **Narseo Vallina-Rodríguez** (IMDEA Networks), **Nipuna Weerasekara** and **Tim Vlummens** (KU Leuven). Publication was synchronized with an article by **Dan Goodin in *Ars Technica***. That same day at 7:45 CEST, the Meta Pixel script **stopped sending packets to localhost** — Meta responded within hours. Google called the practice a "blatant violation of our security and privacy policies." In June 2025, a class action lawsuit was filed in the US against Meta, Alphabet/Google, and Yandex.

"Local Mess" is a landmark case because it is not a leak or a bug — it is a **deliberately engineered architecture for circumventing fundamental system safeguards**. For European regulators, it is a test of whether GDPR, DMA, and ePrivacy can respond to such low-level sandbox-bypassing techniques. For citizens, it is proof that simply enabling incognito mode or a VPN does not protect you from being tracked by Big Tech apps.

---

## Timeline

- **2017** — Yandex begins having its apps listen on local ports of Android devices; the Yandex Metrica script sends data to that channel.
- **2020 (Schrems II)** — The CJEU invalidates the EU-US Privacy Shield, tightening the framework for data transfers; legal context for later Meta fines.
- **September 2024** — Meta deploys an analogous technique in the Facebook and Instagram apps; the transmission initially runs over HTTP. Developers notice odd requests to localhost and raise questions on Facebook for Developers forums.
- **October 2024** — Meta drops HTTP and moves to WebSocket and WebRTC variants (STUN with SDP Munging, TURN without SDP Munging); the method becomes harder to detect.
- **Late 2024** — Günes Acar of Radboud University prepares a student exercise on trackers and, while setting up a demonstration on his university's own site, notices the Meta Pixel script connecting to a local port on his computer.
- **Early 2025** — Acar consults with Narseo Vallina-Rodríguez of IMDEA Networks; the team expands the investigation, analyzing network traffic from the Facebook and Instagram apps and from the Yandex apps.
- **March–May 2025** — Silent disclosure: researchers inform browser vendors (Google, Mozilla, Brave, DuckDuckGo, Vivaldi) so they can prepare patches before publication.
- **May 26, 2025** — Google releases **Chrome 137** with partial mitigation (blocking SDP Munging, but only for a subset of users in a field trial).
- **June 3, 2025, morning** — Dan Goodin publishes in *Ars Technica*: "Meta and Yandex are de-anonymizing Android users' web browsing identifiers." In parallel, the site **localmess.github.io** goes live with the full technical analysis.
- **June 3, 2025, 07:45 CEST** — Researchers observe that the Meta Pixel script **has stopped sending packets to localhost**. The code responsible for the `_fbp` cookie on that channel has been almost entirely removed.
- **June 3–4, 2025** — Statements: Meta speaks of a "potential miscommunication regarding Google's policies"; Yandex claims it "strictly adheres to data protection standards"; Google calls the practice a "blatant violation of our security and privacy policies"; Mozilla deems it a "serious violation of anti-tracking policies."
- **June 5, 2025** — Publication of the full technical report "Covert Web-to-App Tracking via Localhost on Android" on localmess.github.io.
- **June 2025** — Filing of a 39-page class action lawsuit in the US against Meta, Alphabet, Google LLC, and Yandex; the suit is grounded in, among other things, the Electronic Communications Privacy Act 1986, CIPA, California Unfair Competition Law, and the California Consumers Legal Remedies Act.
- **June 2025** — Spanish attorney and privacy expert **Jorge García Herrero** estimates that GDPR fines for Meta could reach into the billions of dollars.
- **Second half of 2025** — Firefox is still developing a patch; Brave was immune from the start because of its localhost consent requirement; DuckDuckGo updates its blocklist.
- **As of April 2026** — Proceedings ongoing; no publicly confirmed fines; European DPAs are investigating; the class action is in the class certification phase.

---

## Mechanism

### How it worked — technical architecture

The attack breaks down into four layers:

**Layer 1: The native app opens a hidden listener.**
When the user first launched the Facebook or Instagram app, the app **created a background service** that opened a listener on fixed ports:
- TCP 12387 and 12388
- UDP — the first free port in the 12580–12585 range

The listener kept running **even after the app moved to the background**. Android lets any app with the INTERNET permission open a socket on the loopback interface (127.0.0.1) without requiring additional user permissions — a flaw in the platform's very design.

**Layer 2: A script on the web page sends data to localhost.**
Sites embedding Meta Pixel or Yandex Metrica (millions in total) loaded JavaScript that, regardless of browsing mode (incognito, VPN, cleared cookies), **sent the `_fbp` cookie to 127.0.0.1:12387**. The first version (September 2024) used plain HTTP — easy to detect. After October 2024, Meta migrated to:

- **WebSocket** — a persistent two-way connection
- **WebRTC STUN with SDP Munging** — manipulating the Session Description Protocol before passing it to the browser
- **WebRTC TURN without SDP Munging** — routing traffic through TURN servers

**Layer 3: The app links the data.**
The native app received the `_fbp` cookie from the browser script and then **sent it as a GraphQL mutation** to `https://graph.facebook.com/graphql` together with a persistent user identifier (the Facebook/Instagram account ID or the Android Advertising ID). From that moment on, Meta knew: "the anonymous browsing session with ID X belongs to account Y."

**Layer 4: Bypassing safeguards.**
What the technique effectively bypassed:
- **Incognito mode** — ineffective, because the data reached the app with a logged-in account anyway
- **VPN** — ineffective, because the transmission ran locally, not over the network
- **Clearing cookies** — the ephemeral `_fbp` was linked to the app's persistent identifier
- **Blocking third-party cookies** — circumvented, because `_fbp` is a **first-party** cookie
- **Browser-app sandboxing** — the very foundation of Android, overthrown

### Why it was illegal/harmful

**On the EU side:**
- **GDPR art. 5** — lack of transparency, fairness, and purpose limitation in processing
- **GDPR art. 6** — no valid legal basis (consent cannot be informed if the user is unaware the channel exists)
- **GDPR art. 25** — violation of the privacy by design principle
- **ePrivacy Directive art. 5(3)** — requires consent for storing and accessing information on the user's device (the so-called cookie directive)
- **DMA art. 5(2)** — prohibition on combining data from a gatekeeper's various services without explicit consent

**On the US side:**
- **Electronic Communications Privacy Act 1986** (Wiretap Act) — interception of electronic communications
- **California Invasion of Privacy Act (CIPA)** — prohibition on eavesdropping without consent
- **California Unfair Competition Law** — misleading consumers

**Additional security risk:** the researchers built a **proof-of-concept** malicious app that — by listening on the same ports — could **intercept traffic from other Meta apps**. Which means the architecture did not merely violate privacy; it was an **attack vector** for malware.

---

## Discovery

### Who discovered it and when

The original discovery: **Günes Acar**, an assistant professor at Radboud University in the Netherlands, a specialist in web tracking. The eureka moment came during **a student exercise for master's students** in late 2024. Acar was preparing an unconventional tracking demonstration on his university's website for students to analyze. In the course of that analysis, he noticed that the Meta Pixel script was connecting to a **local port on his own computer** — 127.0.0.1. In an interview with *El País*, he described his reaction: "I knew the site had several trackers, including Facebook. But suddenly I saw a connection to a local port — that is, to my own computer. At first I didn't understand anything."

Acar consulted the discovery with **Narseo Vallina-Rodríguez**, a mobile application security specialist at IMDEA Networks in Madrid. Vallina-Rodríguez's reaction, per *El País*: *"What the hell…"*. From that point, the team expanded to include three doctoral students (Girish, Weerasekara, Vlummens) and began systematic research.

### How the disclosure unfolded

Research methodology:
1. Static and dynamic analysis of the Facebook and Instagram apps (decompile, syscall monitoring).
2. Crawl of the 100,000 most popular sites from Frankfurt and New York (both with and without cookie consent accepted).
3. Comparison with Yandex apps — uncovering an analogous mechanism in operation since 2017.
4. Analysis of historical data from **HTTP Archive** — establishing the timeline: when Meta and Yandex rolled out each variant.
5. Responsible disclosure to browser vendors: Google, Mozilla, Apple, Brave, DuckDuckGo, Vivaldi — with several months' lead time before publication.

### First publications

- **June 3, 2025**: Dan Goodin, *Ars Technica*, "Meta and Yandex are de-anonymizing Android users' web browsing identifiers"
- **June 3, 2025**: the site **localmess.github.io** with full technical documentation
- **June 5, 2025**: the full report "Covert Web-to-App Tracking via Localhost on Android"
- Subsequently: *The Register, El País, TechRadar, Security Boulevard, Daring Fireball, CPO Magazine, Business & Human Rights Resource Centre*, and many others.

---

## Key people

### Academic researchers (the heart of the discovery)

- **Aniketh Girish** — PhD student, IMDEA Networks, Madrid. Coordinator of the technical analysis.
- **Günes Acar** — assistant professor, Radboud University, Nijmegen. The original discoverer; **the symbolic hero of this case** — a demonstration that non-commercial academic research can still detect what regulators miss. Acar's earlier work: OpenWPM, analysis of Canvas API fingerprinting.
- **Narseo Vallina-Rodríguez** — associate professor, IMDEA Networks. A specialist in mobile application security and privacy within the Android/iOS ecosystems. Co-author of numerous influential reports (Lumen Privacy Monitor).
- **Nipuna Weerasekara** — PhD student, KU Leuven.
- **Tim Vlummens** — PhD student, KU Leuven.

### Investigative journalists

- **Dan Goodin** — Security Editor at *Ars Technica*. Author of the first publication. Goodin has run the security desk for decades, famous for technical precision and sharp regulatory reactions to his reporting.
- **Jordi Pérez Colomé** — *El País* reporter who interviewed Acar and captured the personal thread of the discovery.
- **Thomas Claburn** — *The Register*; detailed technical analysis for the developer community.

### Lawyers and activists

- **Jorge García Herrero** — Spanish privacy attorney; publicly estimated the potential fines against Meta at "billions of dollars."
- **NOYB (None Of Your Business)** — Max Schrems's organization; not the party that initiated this case, but it is simultaneously pursuing a series of GDPR proceedings against Meta (including over "Pay or Okay" and AI training on EU data) that establish the enforcement context.

### Regulators

- **Google** — confirmed a violation of Play Store policies.
- **European DPAs** — including **the German and Spanish ones** — have opened inquiries into the case.
- **FTC (US)** — according to public sources, has received reports, but has not publicly opened an official investigation (as of 04.2026).

---

## Company response

### Meta

The official statement from a Meta spokesperson to *The Register*: *"We are in discussions with Google to clarify a potential miscommunication regarding the application of their policies. After receiving the concerns raised, we decided to pause the feature while we work with Google to resolve the issue."*

**Analysis:** the statement is a classic example of PR "spin." Framing an illegal technique for bypassing safeguards as a "feature" and a "potential miscommunication" — given the scale of **billions of potential victims** and **years of operation** — met with sharp criticism from the security community.

**Remedial actions:**
- June 3, 2025, 07:45 CEST — the Meta Pixel script disabled in the localhost-sending path
- Near-total removal of the code responsible for `_fbp` on localhost
- **No public apology**, no explanation, **no disclosure of the scale** of data collected, no declaration that it would be deleted

### Yandex

Statement: *"Yandex strictly adheres to data protection standards and does not de-anonymize user data. This feature collects no sensitive information and serves solely to personalize within our own apps."*

**Analysis:** the claim "does not de-anonymize" stands in direct contradiction with the researchers' findings. *The Register* tried to obtain an additional comment from Yandex — the query bounced back as spam.

### Google (as the Android platform)

A Google spokesperson told *Ars Technica* that Meta's and Yandex's practices *"blatantly violate our security and privacy policies."* Google **distanced itself** from the practices, but is simultaneously a defendant in the class action — the lawsuit accuses Google of negligent oversight of the Android platform, which made the loophole possible.

### Mozilla

A Mozilla spokesperson described the practices as *"serious violations of our anti-tracking policies."* Firefox began work on a patch.

---

## Legal proceedings

### Jurisdictions

1. **US** — class action (June 2025) in federal court, against Meta, Alphabet, Google LLC, and Yandex
2. **EU** — European DPAs investigate GDPR violations, potentially DMA
3. **Russia** — Yandex is theoretically subject to Russian data protection law, but enforcement is minimal in practice

### Legal basis (per the US class action)

- **Electronic Communications Privacy Act of 1986** — prohibition on intercepting electronic communications without consent
- **California Invasion of Privacy Act (CIPA)** — prohibition on eavesdropping
- **California Unfair Competition Law** — misleading consumers
- **California Consumers Legal Remedies Act**
- Additional claims against Google — negligent failure to enforce (negligence in enforcing platform policies)

### Key milestones

- **June 2025** — filing of the lawsuit
- **Second half of 2025** — preliminary motions phase, motions to dismiss
- **2026** — class certification phase (expected in the second half of the year)
- **Potentially 2027–2028** — full trial on the merits or settlement

### Related case law

- **Schrems II (C-311/18, CJEU 2020)** — context for EU→US transfers
- **Meta v. Bundeskartellamt (C-252/21, CJEU 2023)** — foundations of data combination by a gatekeeper
- **Brown v. Google (Brown et al. v. Google LLC, N.D. Cal. 2020)** — an analogous case of tracking in incognito mode — a potentially applicable precedent

---

## Penalties and settlements

| Date | Body | Amount | Jurisdiction | Basis |
|------|-------|-------|-------------|----------|
| — | — | No confirmed fines (as of 04.2026) | — | Proceedings ongoing |

**Potential exposure (expert estimates):**
- Jorge García Herrero estimates potential GDPR fines in the **billions of dollars**
- The value of the US class action — depending on class size and the definition of harm (possible statutory damages per person × billions of potential victims — though real-world verdicts are typically far lower due to class certification procedures)

---

## Precedents and implications

### For EU law

- **The first major case of system-level sandbox bypass** in a GDPR context. Until now, complaints have mostly concerned cookies, cross-site tracking, and international transfers. "Local Mess" tests whether EU regulators can respond to low-level system techniques.
- A potential impetus to **revise the ePrivacy Regulation** (successor to Directive 2002/58), which has been mired in negotiations for years.
- An argument for **enforcement of DMA art. 5(2)** — the prohibition on combining data from a gatekeeper's various services without consent; Meta already received a 200 million euro fine for "consent or pay" in April 2025, and "Local Mess" may become a second front.

### For US law

- **Strengthens the interpretation of the Wiretap Act** as applicable to low-level mobile tracking.
- Builds precedent for class action suits over **"de-anonymization"** — until now, US courts have tended to accept companies' argument that pseudonymized identifiers are not "personal data" and no harm has occurred; "Local Mess" presents a cleaner case of deliberate linking.
- A test for the **FTC** — whether it responds to such practices.

### For Big Tech practice

- Mobile companies and browser vendors accelerated work on the **"local network access" permission** for Android (Google's proposal) — a new permission mechanism that would require user consent for communication with localhost.
- Brave, DuckDuckGo, Chrome, and Firefox strengthened blocks on localhost communication.
- **Apple's iOS turned out to be safer** — researchers confirmed that an analogous technique is theoretically possible, but App Store restrictions and iOS's management of background apps effectively blocked it. That is a point in Apple's favor in its dispute with the European Commission over the DMA.

---

## Class actions

| Case | Court | Status | Value | Victims |
|--------|-----|------|---------|--------------|
| Proposed class action vs. Meta, Alphabet, Google, Yandex | Federal (US) | Preliminary phase, awaiting motion to dismiss | Unconfirmed | All Android users in the US with a Meta or Yandex app installed who visited sites with those trackers (potentially hundreds of millions) |

**Key defendants:**
- Meta Platforms, Inc.
- Alphabet, Inc.
- Google LLC
- (Yandex, in practice difficult to reach with claims due to Russian jurisdiction and sanctions)

**Grounds for claims:** ECPA, CIPA, California UCL, California CLRA, negligence (against Google).

---

## Conclusions for citizens

> **Portal section — practical, addressed to the reader.**

### What does this mean for me?

If you have an Android phone with the Facebook, Instagram, or Yandex app installed, and between September 2024 and June 2025 (Meta) or since 2017 (Yandex) you visited sites carrying Meta Pixel or Yandex Metrica — meaning millions of popular websites — your browser activity was linked to your in-app identity, **even if you used incognito mode or a VPN**. This also covers online purchases, sensitive searches (health, political, religious), and your browsing path.

### How to protect yourself

1. **Install a privacy-respecting browser** — Brave or DuckDuckGo on Android block site scripts from communicating with localhost.
2. **Uninstall the Meta and Yandex apps** if you can. Use Facebook and Instagram via a browser — the mobile web version does not have these listening capabilities.
3. **Update Chrome** — version 137 and above (from May 2025) blocks some of the techniques.
4. **Incognito mode ≠ privacy** — it is only a local phone/browser setting and does not protect you from apps.
5. **VPN ≠ privacy** — a VPN protects against the outside network but not against local communication between apps on the same device.
6. **Consider Lockdown Mode** (on iOS) or **GrapheneOS** (Android) — for people with an elevated risk profile (journalists, activists, mediators handling sensitive cases).

### What are my rights?

As an EU citizen, under the **GDPR** you have:
- **Art. 15** — right of access: you can demand a full copy of the data Meta and Yandex process about you, including information about this tracking channel
- **Art. 17** — right to erasure ("right to be forgotten")
- **Art. 21** — right to object to processing for marketing purposes

### Where to file a complaint

- **Poland**: President of UODO — [uodo.gov.pl](https://uodo.gov.pl) — complaints can be filed electronically
- **NOYB**: noyb.eu — supports collective complaints
- **Irish DPC** — Meta's lead regulator in the EU — [dataprotection.ie](https://www.dataprotection.ie)
- You can also join the US class action if you are a US resident

---

## Context

- **Acar's "eureka moment"** was entirely accidental — had it not been for an improvised student exercise at his university, Meta's practice could have continued for many more months or years. It is a symbolic lesson that high-budget Big Tech security teams are not the only source of abuse detection.
- **Meta's response in under 12 hours** from publication is a record for the speed of removing production code — which, paradoxically, is evidence that the company **knew exactly what the code was doing** and had a rollback procedure ready to go.
- **The Meta Pixel script** runs on more than **5.8 million sites** (BuiltWith); in theory, every one of those sites shared co-responsibility as a "host" of the script, though most site owners had no idea of the mechanism.
- **Brave browser was the only browser immune by design** — it requires user consent for every localhost connection. Which shows that "privacy-by-design" is not a slogan, but a real design choice.
- **Yandex** turned out to be the "first inventor" of the technique (since 2017), but it was **Meta** that drew the greater media attention because of scale. Historically: Yandex is Russian, and the Western security press tracks it less systematically.
- **The irony of WebRTC**: the WebRTC protocol was created for **real-time communication** (video calls, chats). Meta used it to fingerprint users — as researcher **b0a04gl** commented: *"WebRTC was meant for real-time comms, not fingerprinting people based on what random apps they have running on localhost."*
- **Journalists and developers had been reporting unusual Meta Pixel behavior for years** on Facebook for Developers forums, starting in September 2024. Meta **ignored the queries**. Günes Acar stated publicly: *"Meta not only failed to inform site owners about this tracking method, it also ignored their complaints and questions."*
- **The first 1.2 billion euro fine against Meta (May 2023) was worth less than Meta's annual marketing budget** — which shows the scale of the business these practices were underwriting.

---

## Sources

1. Dan Goodin, "Meta and Yandex are de-anonymizing Android users' web browsing identifiers," *Ars Technica*, June 3, 2025. URL: https://arstechnica.com/security/2025/06/meta-and-yandex-are-de-anonymizing-android-users-web-browsing-identifiers/ (accessed: 2026-04-17)

2. localmess.github.io — "Covert Web-to-App Tracking via Localhost on Android," research team from IMDEA/Radboud/KU Leuven, June 3–5, 2025. URL: https://localmess.github.io/ (accessed: 2026-04-17)

3. Thomas Claburn, "Meta Pixel halts Android localhost tracking after disclosure," *The Register*, June 3, 2025. URL: https://www.theregister.com/2025/06/03/meta_pauses_android_tracking_tech/ (accessed: 2026-04-17)

4. Richi Jennings, "Meta's Secret Spyware: 'Local Mess' Hack Tracks You Across the Web," *Security Boulevard*, June 4, 2025. URL: https://securityboulevard.com/2025/06/meta-local-mess-richixbw/ (accessed: 2026-04-17)

5. "Privacy abuse involving Meta and Yandex discovered," *TechXplore* (Radboud University press release), June 3, 2025. URL: https://techxplore.com/news/2025-06-privacy-abuse-involving-meta-yandex.html (accessed: 2026-04-17)

6. "Class Action Lawsuit Claims Meta, Yandex Track Android Users' Data Without Consent," *ClassAction.org*, June 19, 2025. URL: https://www.classaction.org/news/class-action-lawsuit-claims-meta-yandex-track-android-users-data-without-consent (accessed: 2026-04-17)

7. "Meta and Yandex Accused of Using Android Loophole for Surreptitious User Tracking," *CPO Magazine*, June 17, 2025. URL: https://www.cpomagazine.com/data-privacy/meta-and-yandex-accused-of-using-android-loophole-for-surreptitious-user-tracking/ (accessed: 2026-04-17)

8. "Meta's Stealth Tracking: Another EU Wake-Up Call," *Wire Blog*, June 18, 2025. URL: https://wire.com/en/blog/metas-stealth-tracking-another-eu-wake-up-call (accessed: 2026-04-17)

9. John Gruber, "Meta and Yandex's 'Local Mess' Exploit Seemingly Only Works on Android," *Daring Fireball*, June 4, 2025. URL: https://daringfireball.net/linked/2025/06/04/meta-and-yandexs-local-mess-exploit-seemingly-only-works-on-android (accessed: 2026-04-17)

10. "Meta halts covert Android tracking following research disclosure," *PPC Land*, June 7, 2025. URL: https://ppc.land/meta-halts-covert-android-tracking-following-research-disclosure/ (accessed: 2026-04-17)

11. Captain Compliance, "Meta and Yandex's Android Tracking Scandal: Unveiling the Privacy Breach," June 7, 2025. URL: https://captaincompliance.com/education/meta-and-yandexs-android-tracking-scandal-unveiling-the-privacy-breach/ (accessed: 2026-04-17)

12. Jorge García Herrero, commentary for *We speak IoT*, "Localhost Tracking: Meta and Yandex allegedly spied on Android users covertly," June 13, 2025. URL: https://www.wespeakiot.com/localhost-tracking-meta-and-yandex/ (accessed: 2026-04-17)

13. Benedict Collins, "Meta halts phone and browser tracking tools after researchers expose user snooping," *TechRadar*, June 4, 2025. URL: https://www.techradar.com/pro/security/meta-halts-phone-and-browser-tracking-tools-after-researchers-expose-user-tracking (accessed: 2026-04-17)

14. Business & Human Rights Resource Centre, "Meta & Yandex allegedly abuse Android protocols for user de-anonymization raising privacy concerns," June 2025. URL: https://www.business-humanrights.org/en/latest-news/meta-yandex-allegedly-abuse-android-protocols-for-user-de-anonymization-raising-privacy-concerns/ (accessed: 2026-04-17)

15. Akshay Aryan, "Facebook's Hidden Android Tracking: A New Loophole Exposed," *Medium*, July 25, 2025. URL: https://medium.com/@infinityTime/facebooks-hidden-android-tracking-a-new-loophole-exposed-a4d548bd5656 (accessed: 2026-04-17)

---

*Last updated: 2026-04-17*
*Card in database: A01_local_mess.md*
*Card status: REFERENCE — approved as structural template*
