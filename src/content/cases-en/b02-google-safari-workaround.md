---
id: B02
slug: b02-google-safari-obejście
group: B
group_label: Google
title: Google Safari Workaround
year_revealed: 2012
last_updated: '2026-04-17'
companies:
- Google
status: settled
jurisdictions:
- US
- UK
- global
legal_basis:
- FTC Act § 5
- FTC Consent Decree 2011
- state consumer protection
- UK DPA 1998
- ePrivacy art. 5
fines:
- amount: 22500000
  currency: USD
  authority: FTC
  date: 2012-08
  category: regulatory_fine
  status: paid
- amount: 17000000
  currency: USD
  authority: 37 stanów USA
  date: 2013-11
  category: state_attorney_general
  status: paid
- amount: 0
  currency: EUR
  authority: UK courts
  date: '2017'
  category: class_action_settlement
  status: paid
whistleblowers:
- schrems
journalists: []
related_cases:
- B04
- B03
- B06
- C01
- B01
tags:
- dark-patterns
- dziennikarze
- pozew-zbiorowy
categories:
- privacy
geo_coords: []
priority: STANDARD
card_complete: true
word_count: 3650
explainer:
  src: /animations/b02-google-safari-obejście.html
  duration: '60s'
  title: Safari Workaround — how Google bypassed Apple's block
subtitle: Circumventing the default privacy settings of iPhones
years_active:
- 2011
- 2012
---

# B02 — Google Safari Workaround: Circumventing the default privacy settings of iPhones

> **Category:** Circumventing browser privacy settings / misrepresentation / cookies
> **Company/companies:** Google (DoubleClick)
> **Years:** 2011–2012 (practice), February 2012 (disclosure), 2012–2021 (proceedings)
> **Status:** Closed — FTC record at the time; Lloyd v. Google rejected in UK 2021
> **Card ID:** B02

---

## Metadata

| Field | Value |
|-------|-------|
| Country/region | USA (FTC, 37 states), UK, globally (wherever Safari was used) |
| Year revealed | February 17, 2012 (*Wall Street Journal*, research by Jonathan Mayer) |
| Years the practice ran | 2011 – February 17, 2012 |
| Total penalty | **~$42.5 million USD** ($22.5M FTC + $17M 37 states + ~$3M other) |
| Currency | USD |
| Legal basis | FTC Act § 5, FTC Consent Decree 2011, state consumer protection, UK DPA 1998, ePrivacy art. 5(3) |
| Whistleblower/discoverer | **Jonathan Mayer** (Stanford), **Ashkan Soltani**, **Julia Angwin** (WSJ) |
| Number of affected users | Tens of millions of Safari users on iPhone/iPad/Mac (in the UK, estimated at **4.4 million**) |
| Status (as of today) | Closed; appeals settled; landmark case for Apple ITP |

---

## TL;DR

In **February 2012**, **Jonathan Mayer**, a PhD candidate at Stanford Law School and Stanford CS, together with *Wall Street Journal* journalists (**Julia Angwin**), revealed that **Google had deliberately circumvented the default privacy settings of the Safari browser** on iPhones, iPads, and Mac computers. Safari was at the time the only mainstream browser that **blocked third-party cookies by default** (third-party cookies used for tracking). Google exploited a technical loophole — an exception in Safari that allowed cookies after a **"user interaction with a form"** — by inserting **invisible auto-submitting HTML forms** into ads served through its **DoubleClick** network. Safari interpreted the automatic form submission as user interaction and accepted the cookie. The consequence: **Google tracked millions of iPhone users despite their privacy settings**, while on Google's "Advertising Help" page it publicly **boasted about respecting Safari's settings**.

**August 2012** — the FTC imposed a **then-record $22.5 million penalty** for violating the 2011 Consent Decree. **November 2013** — 37 US states closed a joint settlement of **$17 million**. In the UK, the **Lloyd v. Google** case got underway (a class action on behalf of 4.4 million Britons), intended as a test of whether British law permitted class actions over privacy violations. On November 10, 2021, the **UK Supreme Court rejected** the lawsuit on procedural grounds — effectively blocking data-protection class actions in the UK for years.

The case triggered **a cascade of reforms on Apple's side**. Safari gradually introduced ever more robust mechanisms: **Intelligent Tracking Prevention (ITP)** in 2017, **Full Third-Party Cookie Blocking** in 2020, **App Tracking Transparency (ATT)** in iOS 14.5 (2021). These changes cost Google and Meta **billions of dollars** in advertising revenue — in 2022, Meta alone announced a revenue decline of **~$10 billion per year** solely due to ATT. This shows how a single case with a **$22.5 million penalty** can initiate structural changes at a scale of tens of billions.

After the discovery, Mayer built a career as a regulator: **Chief Technologist of the FCC 2014–2015, Chief Technologist of the FTC 2019–2021**. Ashkan Soltani became **Executive Director of the California Privacy Protection Agency (CPPA)** — the most powerful privacy regulator in the US.

---

## Timeline

- **2003** — Apple Safari launches, from the outset with a policy of blocking third-party cookies by default.
- **2008** — Google acquires **DoubleClick** (for $3.1 billion) — at the time, the largest advertising network in the world. DoubleClick becomes the foundation of Google's advertising engine.
- **2011** — **FTC Consent Decree** with Google following the Buzz leak (2010). Google committed to **not misleading users** about privacy; it also committed to a **comprehensive privacy program** with external audits every 2 years.
- **2011** — Google starts using the Safari Workaround: invisible HTML forms in DoubleClick ads bypassing the third-party cookie block.
- **January 2012** — Jonathan Mayer, running the Stanford Web Privacy Census project, **notices an anomaly**: iPhones and Macs have an unnaturally high number of DoubleClick cookies despite Safari's default block. Reverse-engineering analysis of DoubleClick ads reveals the mechanism.
- **February 17, 2012** — the *Wall Street Journal* (Julia Angwin, Jennifer Valentino-DeVries) publishes "*Google's iPhone Tracking*". In parallel, Mayer publishes a technical report at Stanford CIS.
- **February 17, 2012** — Google, **the same day**, announces it will stop the practice. Official statement: *"We used known Safari functionality to provide features that signed-in Google users had enabled."*
- **March 2012** — the FTC opens an investigation for violating the 2011 Consent Decree.
- **August 17, 2012** — **FTC: $22.5 million penalty** — **a record in FTC history at the time**.
- **November 2012** — the 37-state attorneys general action begins; coordination.
- **November 18, 2013** — **37-state settlement: $17 million**. Google is required to educate consumers and maintain compliance.
- **2015** — the UK Court of Appeal in **Vidal-Hall v Google**: non-pecuniary damage (distress) may be grounds for a DPA 1998 claim. Green light for a class action.
- **2017** — formal filing of **Lloyd v. Google** — Richard Lloyd represents 4.4 million iPhone users in the UK.
- **June 2017** — Apple introduces **Intelligent Tracking Prevention (ITP) 1.0** in Safari 11 (macOS High Sierra, iOS 11).
- **March 2019** — the **UK High Court** dismisses Lloyd v. Google.
- **October 2019** — the UK Court of Appeal reinstates the case.
- **2019** — Apple introduces **ITP 2.3** with the Storage Access API.
- **March 2020** — Safari introduces **Full Third-Party Cookie Blocking**.
- **April 2021** — iOS 14.5 and **App Tracking Transparency (ATT)** — users must actively consent to tracking by apps.
- **November 10, 2021** — the **UK Supreme Court** in **Lloyd v. Google [2021] UKSC 50** rejects the class action on procedural grounds: each claimant must demonstrate specific individual harm.
- **2022** — Meta announces that Apple's ATT cost the company **~$10 billion** in declining advertising revenue per year.
- **2024** — the **UK Data Protection and Digital Information Bill** (Rishi Sunak) — a partial reform of the Lloyd v. Google restrictions.

---

## Mechanism

### How it worked — technical architecture

**Safari context.**
In 2011, Safari was the **only mainstream browser** that blocked third-party cookies by default. Chrome, Firefox, and Internet Explorer accepted everything. Blocking third-party cookies is a key safeguard: advertising trackers (DoubleClick, Facebook Pixel, AdSense) embed in sites A, B, C and can track a user via **the same cookie** across every site. Blocking third-party cookies **breaks that mechanism**.

**The Safari loophole (intended as an exception).**
Apple's engineers were aware that a complete block on third-party cookies would break legitimate use cases such as **OAuth login** (log in with Facebook, log in with Google), **online payments** (log in with PayPal), and **some embeddable forms**. They therefore introduced an exception: if a user **interacts with a form** on a third-party origin (clicks submit), Safari **accepts the cookie**. The reasoning: the user is **knowingly engaging** with that external domain.

**The Google/DoubleClick exploit.**
Google added invisible HTML/JavaScript code to DoubleClick ads:

```html
<iframe src="ad.doubleclick.net/..." style="display:none; height:0; width:0">
  <form action="https://googleads.g.doubleclick.net/..." method="POST">
    <input type="hidden" name="track" value="1" />
  </form>
  <script>
    document.forms[0].submit();
  </script>
</iframe>
```

When a user visited a page with a DoubleClick ad:
1. The ad loaded in a hidden frame (display:none, 0x0 px).
2. JavaScript **automatically clicked submit** on the invisible form.
3. Safari interpreted this as "user interaction with a form" and **accepted the DoubleClick cookie**.
4. The cookie was persistent (not session), valid for **2 years**, used for cross-site tracking.

**Consequence:**
- Millions of Safari users were tracked despite their default privacy settings.
- Every DoubleClick ad on any page "implanted" a cookie.
- **Google publicly boasted** on its "Advertising Help" page that it **respected Safari's settings**: *"if you haven't changed your default Safari settings, your browser already blocks third-party cookies. No additional action is required by users to opt out of personalized advertising from Google."* That page had to be quickly revised after the WSJ publication.

### Why this was a heavyweight case

- **Violation of the 2011 FTC Consent Decree** — Google had only one year earlier entered into an agreement with the FTC committing not to mislead. This was the first **formal violation** of the Consent Decree, which increased the legal gravity.
- **Technical character** — not a "bug," not a "lone engineer" (as in Street View Wi-Spy), but a **deliberate production implementation** hidden in the JavaScript layer of ads.
- **Systemic scale** — **all Safari users** were affected, that is, nearly all iPhone users globally.

---

## Discovery

### Who is Jonathan Mayer

**Jonathan Mayer** (b. 1984) — an American computer scientist and lawyer specializing in digital privacy. Education: **Princeton** (BA Computer Science), **Stanford Law School** (JD), **Stanford CS** (PhD). From 2011 to 2013 he was a **PhD candidate at Stanford** running the **Web Privacy Census** project — the automated scanning of **millions of sites** for trackers. His methodology (OpenWPM, FourthParty) became the standard in web privacy research.

After revealing the Safari Workaround: **Chief Technologist of the FCC** (2014–2015) under Tom Wheeler, then **Chief Technologist of the FTC** (2019–2021). He is currently an **assistant professor** at Princeton.

Additional accomplishments:
- Co-author of the **Do Not Track (DNT)** standard (2010–2011)
- Co-author of ***"The Web Never Forgets"* (2014)** — research on fingerprinting via the Canvas API
- Co-author of research showing that **phone metadata is sufficient to identify a person's health status, religion, and sexual orientation** (2014, an argument in the NSA debate)

### How the disclosure came about

Mayer discovered the anomaly while running **Web Privacy Census 2012**. His scripts automatically scanned the top 1000 websites and counted cookies of every type. He noticed that in the Safari browser the number of DoubleClick cookies was **disproportionately high** relative to expectations (blocking third-party cookies should significantly reduce the count). Reverse-engineering analysis of the DoubleClick ad code revealed the iframe + form + auto-submit trick.

Mayer contacted **Julia Angwin** of the *Wall Street Journal*, who was running the **"What They Know"** series — a multi-month investigation into online trackers. Together with Angwin, Jennifer Valentino-DeVries, and Ashkan Soltani, he verified the findings. Publication on February 17, 2012.

### First publications

- **February 17, 2012** — Julia Angwin, Jennifer Valentino-DeVries, "Google's iPhone Tracking," *The Wall Street Journal*
- **February 17, 2012** — Jonathan Mayer, "Web Policy: Safari Trackers" — a Stanford CIS technical report
- **February 18, 2012** — reactions in *The New York Times*, *The Guardian*, *Ars Technica*, *The Verge*

---

## Key people

### Discoverers

- **Jonathan Mayer** — described above.
- **Ashkan Soltani** — independent security and privacy researcher, former Google employee, later **Chief Technologist of the FTC** (succeeding Mayer), currently (as of 2022) **Executive Director of the California Privacy Protection Agency (CPPA)** — the most important privacy regulator in the US. The CPPA enforces the CCPA and CPRA.
- **Julia Angwin** — a privacy journalist. Founder of **The Markup** (2019), editor at ProPublica (2014–2018), author of the books **"Dragnet Nation"** (2014) and **"Stealing MySpace"** (2009). Sued and harassed by a pesticide dealer in 2012 over an article about the pesticide DBCP; she refused to settle. Pulitzer nominee.
- **Jennifer Valentino-DeVries** — formerly WSJ, today *NYT*; specializes in investigative digital analytics.

### Regulators

- **FTC** — Chairman Jon Leibowitz (2012) at the time of the $22.5 million penalty.
- **Eric Schneiderman** — Attorney General of New York, coordinator of the 37-state action.
- **UK ICO** — engaged informally, did not impose a penalty (reasoning: lack of jurisdiction + "no substantial harm," analogously to Wi-Spy).

### Lawyers

- **Richard Lloyd** — former director of **Which?** (the British consumer organization), represented 4.4 million UK iPhone users in **Lloyd v. Google**.
- **Hugh Tomlinson KC** — represented Lloyd at the UKSC; one of Britain's leading human-rights and privacy lawyers.

### Google

- **David Drummond** — at the time Chief Legal Officer of Google; author of the public responses.
- **Ginny Marvin** — Google PR.

---

## Company response

### Google

**February 17, 2012** (the same day as the WSJ publication) — Google **immediately stopped** the practice. Official statement:

*"The Journal mischaracterizes what happened and why. We used known Safari functionality to provide features that signed-in Google users had enabled. It's important to stress that these advertising cookies do not collect personal information."*

**Google's defense:**
1. The Safari form exception is "known functionality," not a loophole.
2. They used it for "features that signed-in Google users had enabled" — e.g., +1 buttons (the predecessor of Like).
3. DoubleClick cookies did not contain "personal information."

**Why the defense collapsed:**
1. The 2011 FTC Consent Decree prohibited **misrepresentation** regarding privacy. On its "Advertising Help" page, Google boasted about respecting Safari's settings — while in the ad code it was **deliberately circumventing them**. That was classic misrepresentation.
2. The mere fact that a cookie **"does not contain PII by itself"** does not mean it is **not personal data** — it can be used as an identifier tracking a user across sessions.
3. The practice was significant for DoubleClick advertising (millions of identified users), not just for the niche +1 feature.

**Settlements (2012, 2013)** — Google did not admit guilt (the "neither admit nor deny" formula), paid $22.5M to the FTC + $17M to the states, and committed to consumer education.

---

## Legal proceedings

### Jurisdictions

1. **US federal** — FTC
2. **US states** — 37 states in a coordinated action
3. **United Kingdom** — Lloyd v. Google, rejected 2021
4. **A series of EU investigations** — did not end in penalties (pre-GDPR, harder to enforce)

### Legal basis

- **FTC Consent Decree 2011** — the main basis for the $22.5M penalty
- **FTC Act § 5** — unfair/deceptive practices
- **State consumer protection laws** (37 states)
- **UK Data Protection Act 1998** — the basis for Lloyd v. Google
- **ePrivacy Directive art. 5(3)** — cookies require consent

### Key stages

| Date | Stage |
|------|-------|
| February 17, 2012 | Publication; Google stops the practice |
| March 2012 | FTC opens investigation |
| August 17, 2012 | FTC penalty $22.5M |
| November 18, 2013 | 37-state settlement $17M |
| 2015–2017 | Lloyd v. Google in lower UK courts |
| November 10, 2021 | Lloyd v. Google UKSC — lawsuit rejected |

### Related case law

- ***Vidal-Hall v Google* [2015] EWCA Civ 311** — UK Court of Appeal: non-pecuniary damage (distress) is grounds for a claim under DPA 1998.
- ***Lloyd v Google LLC* [2021] UKSC 50** — the UK Supreme Court rejected the class action on procedural grounds. The ruling is considered to have **stripped the UK of the class-action tool** in privacy cases.
- ***Fashion ID v Verbraucherzentrale NRW* (C-40/17, 2019)** — CJEU: owners of sites with Facebook Like buttons are joint data controllers.

---

## Penalties and settlements

| Date | Authority | Amount | Jurisdiction | Basis |
|------|-----------|--------|--------------|-------|
| August 17, 2012 | FTC | $22,500,000 USD | US federal | FTC Consent Decree 2011 |
| November 18, 2013 | 37 US states | $17,000,000 USD | US states | Consumer protection law |
| 2017–2021 | UK courts | 0 | UK | Lloyd rejected |

**Total: ~$39.5 million USD** + compliance obligations.

---

## Precedents and implications

### For US law

- **The $22.5M FTC record** — in 2012, the largest penalty in the agency's history; after Cambridge Analytica it looks minor, but at the time it was a breakthrough.
- **A precedent for enforcing Consent Decrees** — Google was the first company to pay for violating an FTC Consent Decree.
- **Ashkan Soltani at the CPPA** — shows that **whistleblowers/researchers** can become regulators and close the loop.

### For UK law

- **Lloyd v. Google UKSC 2021** — a negative precedent. It **de facto abolished class actions** in data protection in the UK. The problem: every claimant has to demonstrate individual harm. For millions of people harassed by cookies, that is practically impossible.
- **Data Protection and Digital Information Bill (2024)** — a partial reform.

### For Big Tech practice and Apple

- **The Apple vs Google escalation** — the Safari Workaround is a **point of no return**. Apple strategically decided to **differentiate itself from Google through privacy**. The subsequent steps:
  - **2017**: ITP 1.0 (Intelligent Tracking Prevention) — automatic expiration of cookies
  - **2019**: ITP 2.x — Storage Access API
  - **2020**: Full Third-Party Cookie Blocking
  - **2021**: **App Tracking Transparency (ATT)** — users must consciously consent to tracking
- **ATT cost Meta ~$10 billion per year** (announcement in 2022).
- **Chrome third-party cookie deprecation** — announced for 2024, repeatedly postponed, and now reversed in 2024 in favor of the "Topics API" and user choice.

---

## Class actions

| Case | Court | Status | Value | Affected |
|------|-------|--------|-------|----------|
| *Lloyd v. Google LLC* | UK Supreme Court | Rejected 2021 | 0 | 4.4 million UK iPhone users |
| Individual US lawsuits | Various | Filed alongside FTC classes | Various | US Safari users |

---

## Conclusions for citizens

### What does this mean for me?

If in 2011–2012 you used an iPhone, MacBook, or iPad and browsed the internet — **Google was likely tracking you despite your privacy settings**. Today the situation is better thanks to Apple's reforms, but **advertisers are constantly looking for new ways** to bypass safeguards. The example from A01: Meta's "Local Mess" is essentially a **next-generation Safari Workaround** — a different trick, the same goal.

### How can I protect myself?

1. **Use Safari on iPhone** — it has the strongest protection against tracking (ITP, ATT). Chrome on iOS under the hood uses Safari (WebKit) with additional Google trackers.
2. **On desktop use Firefox with Enhanced Tracking Protection** or **Brave** (which blocks trackers by default). Firefox has **Total Cookie Protection** — it isolates cookies per-site.
3. **Install uBlock Origin** — the most effective blocker (Firefox, Edge). In Chrome it is constrained by Manifest V3 (since 2024).
4. **Review iOS privacy settings** — Settings → Privacy & Security → Tracking. Turn off "Allow Apps to Request to Track" (this will block ATT prompts at startup).
5. **In the Safari browser** — enable "Prevent Cross-Site Tracking" (Settings → Privacy).
6. **Use Private Relay** (iCloud+) on iOS — it hides your IP from trackers.
7. **Dark patterns in cookie banners**: if a site does not offer an equally prominent "Reject All" (as visible as "Accept All"), it **violates GDPR and ePrivacy**. You can report it to your DPA.

### What rights do I have?

**In the EU:**
- **ePrivacy Directive art. 5(3)** — third-party cookies require **prior, informed consent**.
- **GDPR art. 6** — processing of data (including from identifying cookies) requires a legal basis.
- **GDPR art. 7** — consent must be **freely given, specific, informed, and unambiguous**.

**In the UK (after Lloyd v. Google):**
- Individual lawsuits are still possible (not class actions).
- The ICO can impose penalties — in 2024 a reform was enacted that partially restores class actions.

### Where to report?

- **Poland**: UODO
- **Cookie banners without an equivalent refusal option**: can be reported to UODO and NOYB (noyb.eu)
- **Consumer protection**: UOKiK for deceptive interfaces

### A note for mediators, lawyers, website owners

If you **run a website for a law firm, foundation, or company**:
- Your cookie banner **must have equivalent** "Accept" and "Reject" options (equally visible and clickable).
- Using **Google Analytics** in the EU has been **challenged** since 2022 (several DPAs, including the Austrian, Dutch, and French, have found that it violates the GDPR through transfers to the US). Alternatives: **Matomo** (EU-hosted), **Plausible Analytics**, **Fathom**.
- **Fashion ID** (CJEU C-40/17) — if your site has a Facebook Like button, you are a **joint controller** of the data collected by Meta. This means **joint liability**.

---

## Context

- **Jonathan Mayer** — the discoverer of the Safari Workaround — later became **Chief Technologist of the FCC** (2014–2015) and **Chief Technologist of the FTC** (2019–2021). A classic case of "switching sides": researcher → regulator → researcher. A rare pattern in the privacy world.
- **"Do Not Track" (DNT)** — a standard that Mayer co-authored (2010–2011). Google **never implemented** respect for DNT in its ads. One of the reasons Mayer took up the publication: *"If Google doesn't respect DNT, it's interesting how it respects other privacy settings..."*.
- **Ashkan Soltani → California** — in 2022 he became the head of the **CPPA (California Privacy Protection Agency)**, the strongest privacy regulator in the US. The CPPA enforces the CCPA and CPRA. Soltani started out as an independent researcher, worked with WSJ on the Safari Workaround, then joined the FTC, then the CPPA. Today he leads enforcement of laws enacted partly in response to practices like the Safari Workaround.
- **Internet Explorer was also affected** — shortly after the WSJ, Microsoft announced that Google was using analogous techniques in IE (a trick with the **P3P Policy tag**, used improperly). Google confirmed it ("P3P is outdated, we didn't take it seriously"), but it triggered additional negative PR.
- **The $22.5M FTC penalty was an FTC record in 2012** — today, after the $5 billion Cambridge Analytica penalty, it looks nominal. But in 2012 it was **the agency's greatest achievement**.
- **Google's stock rose after the penalty** — investors interpreted $22.5M as **one day's revenue** for Google (which in 2012 was about $37 billion a year, or ~$100 million a day).
- **Google did not admit guilt** — a "neither admit nor deny" settlement. A standard corporate strategy in the US.
- **The symbolic scale of the FTC $22.5M penalty vs Google's 2012 revenue ($37B)** = **0.06% of revenue**. For comparison: a GDPR privacy penalty for a citizen can reach 4% of revenue (5% of personal income). Big Tech in 2012 de facto had **lower penalty thresholds than citizens**.
- **Apple vs Google — a defining rivalry**: the Safari Workaround radicalized Apple. **Steve Jobs** in 2010 in an interview with *All Things Digital* emphasized that "*privacy means people know what they're signing up for, in plain English*". After 2012, Tim Cook turned privacy into a **strategic brand difference for Apple** — ad lines like "*Privacy. That's iPhone.*"
- **The Meta ATT hit: $10 billion a year** — Apple's App Tracking Transparency (April 2021) cost Meta about $10 billion in declining advertising revenue per year (announcement in 2022). Zuckerberg publicly harshly criticized Apple. Apple's strategic response had begun many years earlier — with the Safari Workaround.
- **Chrome and Manifest V3** — since 2024 Chrome has restricted ad-blocking extensions (Manifest V3). uBlock Origin is available in a limited version on Chrome. This is **the opposite** of Apple's direction: Google defends the advertising model, Apple attacks it in the name of privacy.
- **Polish context — "Fashion ID"** — a 2019 CJEU ruling concerning owners of sites with a Facebook Like button. The case was originally German (Verbraucherzentrale NRW). The ruling has direct significance for Polish online stores, blogs, and public institutions: if you have a Facebook Like button, you are a **joint controller**.

---

## Sources

1. Julia Angwin, Jennifer Valentino-DeVries, "Google's iPhone Tracking," *The Wall Street Journal*, February 17, 2012. URL: https://www.wsj.com/articles/SB10001424052970204880404577225380456599176 (accessed: 2026-04-17)

2. Jonathan Mayer, "Web Policy: Safari Trackers," Stanford Center for Internet and Society, February 17, 2012. URL: https://cyberlaw.stanford.edu/blog/2012/02/safari-trackers (accessed: 2026-04-17)

3. Federal Trade Commission, "Google Will Pay $22.5 Million to Settle FTC Charges it Misrepresented Privacy Assurances to Users of Apple's Safari Internet Browser," August 9, 2012. URL: https://www.ftc.gov/news-events/news/press-releases/2012/08/google-will-pay-225-million-settle-ftc-charges-it-misrepresented-privacy-assurances-users-apples (accessed: 2026-04-17)

4. National Association of Attorneys General, "37 States and D.C. Reach $17 Million Settlement with Google Over Cookie Policies on Apple Safari Browser," November 18, 2013.

5. *Lloyd v Google LLC* [2021] UKSC 50 — judgment of the UK Supreme Court. URL: https://www.supremecourt.uk/cases/docs/uksc-2019-0213-judgment.pdf (accessed: 2026-04-17)

6. *Vidal-Hall v Google Inc* [2015] EWCA Civ 311 — UK Court of Appeal.

7. Jennifer Valentino-DeVries, Jeremy Singer-Vine, "They Know What You're Shopping For," *WSJ*, December 7, 2012 (from the "What They Know" series).

8. Apple Safari release notes, ITP documentation (webkit.org, 2017–2024).

9. Kate Brennan, "The legacy of Lloyd v Google: what happens to representative actions now?," *Journal of Data Protection & Privacy*, 2022.

10. Ashkan Soltani, congressional testimony 2013, 2019.

11. Jonathan Mayer et al., "Signals of Interest: Identifying Privacy-Sensitive Browsing Behavior," Stanford CS, 2012.

12. *Fashion ID GmbH & Co. KG v Verbraucherzentrale NRW e.V.*, C-40/17, CJEU, July 29, 2019.

13. Meta Platforms, Q4 2021 Earnings Call (February 2022) — announcement of the impact of ATT on revenue.

14. California Privacy Protection Agency — speeches by Ashkan Soltani 2022–2025.

15. The Markup (markup.org) — long-term analysis of the Safari Workaround and subsequent techniques, 2020.

---

*Last updated: 2026-04-17*
*Card in database: B02_safari_workaround.md*
