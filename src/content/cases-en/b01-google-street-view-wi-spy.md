---
id: B01
slug: b01-google-street-view-wi-spy
group: B
group_label: Google
title: Google Street View Wi-Spy
year_revealed: 2010
last_updated: '2026-04-17'
companies:
- Google
status: settled
jurisdictions:
- US
- UK
- DE
- FR
- IT
- CA
- AU
legal_basis:
- Wiretap Act
- ePrivacy Directive 2002/58/EC art. 5
- Telemediengesetz
- national laws
fines:
- amount: 100000
  currency: EUR
  authority: CNIL
  date: 2011-03
  category: regulatory_fine
  status: paid
- amount: 900000
  currency: EUR
  authority: AEPD
  date: 2011-03
  category: regulatory_fine
  status: paid
- amount: 25000
  currency: USD
  authority: FCC
  date: 2012-04
  category: regulatory_fine
  status: paid
- amount: 0
  currency: EUR
  authority: FTC
  date: 2012-04
  category: regulatory_fine
  status: paid
- amount: 7000000
  currency: USD
  authority: 38 US states
  date: 2013-03
  category: state_attorney_general
  status: paid
- amount: 145000
  currency: EUR
  authority: Hamburg DPA
  date: '2013'
  category: regulatory_fine
  status: paid
- amount: 0
  currency: EUR
  authority: UK ICO
  date: '2014'
  category: regulatory_fine
  status: paid
- amount: 13000000
  currency: USD
  authority: '*Joffe v. Google*'
  date: '2019'
  category: class_action_settlement
  status: paid
whistleblowers: []
journalists: []
related_cases:
- B04
- B03
- B02
- B06
- D05
tags:
- sledzenie-lokalizacji
- wyciek-danych
categories:
- privacy
geo_coords: []
priority: STANDARD
card_complete: true
word_count: 3664
explainer:
  src: /animations/b01-google-street-view-wi-spy.html
  duration: '60s'
  title: Street View Wi-Spy — Google cars eavesdropping on Wi-Fi
subtitle: Google cars harvested private data from Wi-Fi networks
years_active:
- 2007
- 2010
---

# B01 — Google Street View Wi-Spy: Google cars harvested private data from Wi-Fi networks

> **Category:** Communications interception / mass scraping / "rogue engineer" alibi
> **Company/companies:** Google (Alphabet)
> **Years:** 2007–2010 (practice), May 2010 (disclosure), 2011–2019 (proceedings)
> **Status:** Closed — multiple fines in many countries; class action settled in 2019
> **Card ID:** B01

---

## Metadata

| Field | Value |
|------|---------|
| Country/region | 30+ countries, including the US, Germany, UK, France, South Korea, Japan, Canada, Australia, Italy, Spain, Czech Republic, Korea |
| Year disclosed | May 14, 2010 (following an audit by Germany's Bundesnetzagentur) |
| Duration of the practice | 2007–2010 (approx. 3.5 years) |
| Total penalties | ~8–10 million EUR + 7 million USD settlement with 38 states + 13 million USD class action settlement = **~30 million EUR/USD in total** |
| Currency | EUR/USD |
| Legal basis | Wiretap Act (US, 18 USC § 2511), ePrivacy Directive 2002/58/EC art. 5, Telemediengesetz (DE), national laws |
| Whistleblower/discoverer | **Johannes Caspar** (Hamburg Commissioner for Data Protection), Bundesnetzagentur |
| Number of victims | Millions of users of unsecured Wi-Fi networks across 30+ countries |
| Status (today) | Closed; data reportedly deleted, though without independent verification |

---

## TL;DR

In **May 2010**, Google **publicly admitted** that its **Street View** cars, between **2007 and 2010 in more than 30 countries**, collected not only panoramic street photography but also **fragments of network traffic from unsecured (open) Wi-Fi networks** that they drove past. The data included: **fragments of emails, passwords transmitted over unencrypted protocols, URLs of visited pages, filenames, fragments of instant messenger conversations, login credentials for online services** — one UK ICO report specifically mentioned **banking login credentials of several citizens**. In total, **hundreds of gigabytes** of data from private communications were collected.

The case broke after an audit by **Germany's Bundesnetzagentur** (the telecommunications regulator) in April–May 2010, when **Johannes Caspar** — Hamburg's Commissioner for Data Protection — pressured Google into disclosing the scope of the collection. Google first denied the allegations, then **publicly admitted them on May 14, 2010**, blaming the incident on a **"rogue engineer"** (later identified by the FTC as **Marius Milner**) and an **"error in experimental code"** that had supposedly made it into production software by mistake. The explanation was widely rejected — **Marius Milner was well known in the cybersecurity community as the author of NetStumbler**, the most popular **wardriving** application (driving around a city looking for Wi-Fi networks). Google hired him to do exactly what he did, then feigned surprise afterward.

Proceedings unfolded in dozens of countries. The total came to approximately **30 million EUR/USD in fines and settlements**. The largest: the **7 million USD settlement with 38 US states** (March 2013), the **13 million USD class action settlement in Joffe v. Google** (2019), **900,000 EUR in Spain**, and **145,000 EUR in Germany**. In South Korea, **in November 2011 police raided Google's Seoul office** — the first instance of law enforcement physically entering a local Google office. In the US, the FTC closed the case without penalty (arguing it lacked jurisdiction under the Wiretap Act), while the FCC imposed a symbolic fine of **25,000 USD for refusing to cooperate** with the investigation.

The key legal precedent: **Joffe v. Google (9th Circuit, 2013)** — Judge Alex Kozinski ruled that an **open Wi-Fi network is NOT "publicly accessible"** within the meaning of the Wiretap Act simply because it is technically unencrypted. This shaped American network privacy jurisprudence for an entire decade.

---

## Timeline

- **2007** — Street View launches in the US.
- **2008** — start of the **Wi-Fi positioning** project — Google begins using Wi-Fi antennas on Street View cars to map router positions (for geolocation services). According to Google, the data was to be limited to **SSIDs and router MAC addresses**.
- **2008–2010** — Street View cars operate in more than 30 countries. In parallel: **contrary to the official specification** they also collect **payload data** (packet contents) from open Wi-Fi networks.
- **April 2010** — the Bundesnetzagentur opens an audit of the Street View program in the context of geospatial projects.
- **May 9, 2010** — Google formally responds to the Bundesnetzagentur, **denying** the collection of payload data.
- **May 14, 2010** — following an internal audit conducted at Caspar's demand, Google **publicly admits** in a blog post: "*we have been collecting samples of payload data*." Alan Eustace (SVP Engineering): "this was a mistake, it was unintentional."
- **May–June 2010** — an explosion of regulatory action. Investigations open in: Germany, France, the UK, Italy, Spain, Australia, New Zealand, South Korea, the Czech Republic, Hong Kong, Japan, Canada, the US (FCC, FTC).
- **October 2010** — UK ICO: "no substantial harm found," no fine imposed (**later widely criticized**).
- **November 2010** — UK ICO **reopens** the investigation after new evidence emerges.
- **March 2011** — France (CNIL): **100,000 EUR** fine.
- **March 2011** — Spain (AEPD): **900,000 EUR** fine.
- **November 2011** — **South Korea: police raid Google's Seoul office**. The first such incident anywhere in the world.
- **April 2012** — US FCC: **25,000 USD** fine for refusing to cooperate (symbolic); **the FTC closes** the case without penalty.
- **June 2012** — FCC report: Google's practice "was both pervasive and deliberate."
- **September 10, 2013** — the **9th Circuit Court of Appeals** (Judge Alex Kozinski) in *Joffe v. Google*: the Wiretap Act **does apply**; an open Wi-Fi network is not publicly accessible within the meaning of the statute.
- **March 2013** — **settlement with 38 US states: 7,000,000 USD** plus mandatory privacy training programs for Google employees.
- **2013** — Germany (Hamburg): **145,000 EUR**.
- **2014** — UK ICO formally closes the case without a fine.
- **2019** — *Joffe v. Google*: class action settlement — **13,000,000 USD**.
- **2023** — Google resumes Street View mapping in Germany after a 12-year hiatus.

---

## Mechanism

### How it worked — the technical architecture

Each Google Street View car carried on its roof:
1. A **panoramic camera** (15 lenses) — the official purpose of the program.
2. A **Wi-Fi 802.11 antenna** — officially for **Wi-Fi positioning** (scanning Wi-Fi routers to map their locations for GPS-free geolocation services).
3. A **LIDAR system** — for distance measurement and 3D modeling.
4. A **high-precision GPS** — for accurate position tagging.

**Wi-Fi positioning** is a legal and widely used model — Apple, Microsoft, Skyhook, Mozilla, and others all map Wi-Fi networks to deliver GPS-free geolocation services. The standard practice is to record only: the **SSID** (network name), the **MAC address** (the router's hardware address), **signal strength**, and the **GPS location** of the observation. This is lawful.

**What Marius Milner's code did** (and should not have done): in addition to the metadata above, the software also **intercepted packet fragments (payload)** from open Wi-Fi networks. Because the car was moving, only fragments — not full sessions — were captured, but enough to contain:
- Fragments of **email headers and bodies** (POP3, IMAP, SMTP without TLS)
- **Passwords** transmitted over unencrypted protocols (HTTP basic auth, FTP, telnet)
- **URLs of visited pages** (before the widespread adoption of HTTPS)
- **Filenames** from SMB/CIFS shares
- Fragments of **IM conversations** (ICQ, MSN Messenger, older versions of XMPP without TLS)
- **Banking logins** (in some older systems without HTTPS, as the UK ICO disclosed in 2014)

The data was written to the cars' local hard drives and then **replicated to Google's servers**.

### Why Google "might not have known" — a plausibility check

Google's official line: the code was written by **a single engineer**, Milner, who "did not obtain approval from his superiors," and the feature was "experimental." The FTC's 2012 report laid out why this narrative does not hold together:

1. **The code ran in production for more than 3 years** (2007–2010).
2. Data was **actively transferred to Google's servers** — hundreds of gigabytes.
3. The feature was **documented** in the project's internal documentation, which other engineers had access to.
4. Any project manager reviewing **the data volumes being generated by Street View** should have noticed they were substantially larger than Wi-Fi positioning metadata alone would produce.
5. Marius Milner was **publicly known as the author of NetStumbler** — a specialist in Wi-Fi scanning recognizable to anyone in the cybersec community. Hiring him for a geolocation project and claiming that no one "suspected" he would do what he did is not credible.

FTC: *"The 'rogue engineer' story does not hold up."*

---

## Discovery

### Who is Johannes Caspar

**Johannes Caspar** (b. 1962) — a German lawyer and Hamburg Commissioner for Data Protection from 2009 to 2021. One of the most important European privacy regulators of the past decade. Before the Wi-Spy case, he was known for a confrontational style toward Big Tech. After Street View Wi-Spy, he also led investigations into **Facebook facial recognition** (2012, forcing changes across Europe), **Google Analytics** (2022, banned in Germany), and **Zoom** (2021, ordered to stop being used in schools).

His quote from the Google case: *"Google has a problem with the truth."* Google's response: *"Germany has a problem with progress."* That public exchange defined the tone of German regulators' relationship with Silicon Valley for years.

### How the disclosure happened

The Bundesnetzagentur opened its audit in April 2010 as part of a broader investigation into geospatial projects — concerns centered on compliance with German geodata law (Geodatenzugangsgesetz). During the audit, technical specialists noticed that Google's cars were collecting substantially more data than the declared SSIDs/MACs — and they asked Google for an explanation.

Google initially denied it. Caspar pushed back. On May 14, 2010, following an internal audit, Google **publicly admitted** it — in a blog post by **Alan Eustace** (SVP Engineering & Research): "*It's now clear that we have been mistakenly collecting samples of payload data.*"

### First published reports

- **May 14, 2010** — Alan Eustace, "Wi-Fi data collection: An update," Google Official Blog (post now archived)
- **May 14, 2010** — first articles in *Der Spiegel*, *Süddeutsche Zeitung*
- **May 15, 2010** — *The New York Times* (Kevin J. O'Brien), *The Guardian*
- **May 17, 2010** — Kevin Poulsen, *Wired*, "Google Street View Cars Grabbed Locations of Cellphones, Wi-Fi"

---

## Key people

### Whistleblowers / discoverers

- **Johannes Caspar** — described above. The architect of the disclosure.
- **Bundesnetzagentur** — Germany's telecommunications regulator (today: BNetzA).
- **Peter Schaar** — Germany's federal commissioner for data protection (2003–2013). He supported Caspar at the federal level.

### Investigative journalists

- **Kevin Poulsen** (*Wired*) — the first major article in English-language media; a hacker-journalist with a criminal past (the first person convicted in the US of hacking with an espionage element, 1995).
- **Declan McCullagh** (*CNET*) — detailed technical analyses.
- **Kevin J. O'Brien** (*NYT*) — the first international coverage.

### Google engineer and managers

- **Marius Milner** — a Google software engineer. Previously known as the author of **NetStumbler** (2001), a popular Wi-Fi scanning application. After the Wi-Spy case he remained at Google for several more years, then left the company. The FTC named him publicly in 2012 — an unusual step for a private-company engineer.
- **Alan Eustace** — Google's SVP Engineering & Research. Author of the blog post that announced the scandal. He left Google in 2014 (to become **the highest-jumping skydiver in history** — he fell from a balloon at an altitude of 41 km in 2014).

### Regulators

- **FCC, FTC** — US federal agencies.
- **CNIL** (France), **AEPD** (Spain), **ICO** (UK), **Garante Privacy** (Italy), **KCC** (Korea), **Ministry of Internal Affairs** (Japan).
- **Johannes Caspar** again (Germany).

### Lawyers

- **Benjamin Joffe** — lead plaintiff in the *Joffe v. Google* class action (N.D. California).
- **Judge Alex Kozinski** (9th Circuit) — author of the landmark 2013 opinion.

---

## Company response

### Google

**Stage 1: denial (early May 2010).** Before going public, Google told German regulators that it was collecting only Wi-Fi metadata. After an internal audit, that turned out to be false.

**Stage 2: admission + blame the engineer (May 14, 2010).** Alan Eustace, on the blog: *"It's now clear that we have been mistakenly collecting samples of payload data from open (i.e., non-password-protected) WiFi networks, even though we never used that data in any Google products."*

**Stage 3: the "rogue engineer" defense (2010–2012).** Google's entire messaging concentrated on the claim that this was "the mistake of a single experimental engineer." The FTC rejected that framing in its 2012 report.

**Stage 4: fees (2011–2019).** Roughly 30 million USD in fines and settlements — a nominal cost for a company worth hundreds of billions.

**Remedial actions:**
- Suspension of the Wi-Fi collection project in Street View cars (May 2010).
- Agreement to external auditing of the data and its deletion (with regulator oversight in some countries).
- Introduction of **mandatory privacy training** for all engineers (as part of the 38-state US settlement).
- **A 10-year pause on Street View mapping in Germany** (forced by the Bundesnetzagentur and local Länder laws).

Unanswered questions:
- Exactly how much data was collected? Google disclosed **hundreds of gigabytes** but never gave a precise figure.
- Where was this data stored, and did it end up with US intelligence agencies?
- Why was Milner not fired but instead left in his role for years afterward?

---

## Legal proceedings

### Jurisdictions

Investigations in: the US (FCC, FTC, 38 states), Germany, France, the UK, Italy, Spain, Australia, New Zealand, South Korea, Japan, Canada, the Czech Republic, Hong Kong, Belgium, the Netherlands, Ireland, Switzerland, Denmark.

### Legal basis

- **Wiretap Act (US, 18 USC § 2511)** — a prohibition on intercepting electronic communications. Exception: communications "readily accessible to the general public." The key question before the court: is Wi-Fi traffic on an open network **publicly accessible simply because it has no password**? The 9th Circuit: **no**.
- **ePrivacy Directive 2002/58/EC art. 5** (EU) — confidentiality of electronic communications.
- **Directive 95/46/EC** (pre-GDPR) — processing of personal data.
- **Telemediengesetz § 13** (DE) — information obligations on service providers.
- **BDSG** (Bundesdatenschutzgesetz) — Germany's data protection law prior to BDSG 2018.

### Key stages

| Date | Stage |
|------|------|
| April 2010 | Bundesnetzagentur opens its audit |
| May 14, 2010 | Google admits the practice |
| May 2010 | Cascade of investigations across 30+ countries |
| March 2011 | First fines (FR, ES) |
| March 2013 | 38-state US settlement: 7 million USD |
| September 2013 | 9th Circuit ruling in *Joffe v. Google* |
| 2019 | Class action settlement of 13 million USD |

### Related case law

- ***Joffe v. Google* (9th Circuit, 2013)** — the key precedent. The court: an open Wi-Fi network **is not** "readily accessible to the general public" within the meaning of the Wiretap Act simply because it is technically unencrypted.
- ***Gubala v. Time Warner Cable* (7th Circuit, 2016)** — an extension of the approach to liability for data breaches.
- **The Facebook facial recognition case** (2012, Germany) — Caspar's next major case, drawing on the Wi-Spy precedent.

---

## Penalties and settlements

| Date | Authority | Amount | Jurisdiction | Basis |
|------|-------|-------|-------------|----------|
| March 2011 | CNIL | 100,000 EUR | France | Loi Informatique et Libertés |
| March 2011 | AEPD | 900,000 EUR | Spain | LOPD |
| April 2012 | FCC | 25,000 USD | US federal | Refusal to cooperate |
| April 2012 | FTC | 0 | US federal | Closed |
| March 2013 | 38 US states | 7,000,000 USD | US state | Consumer protection law |
| 2013 | Hamburg DPA | 145,000 EUR | Germany | BDSG |
| 2014 | UK ICO | 0 | UK | "No substantial harm" |
| 2019 | *Joffe v. Google* | 13,000,000 USD | US federal | Wiretap Act |

**Total: ~30 million EUR/USD** plus tens of millions in compliance and audit costs.

---

## Precedents and implications

### For US law

- ***Joffe v. Google* (2013)** — precedent: an open Wi-Fi network is not publicly accessible within the meaning of the Wiretap Act. This shaped American jurisprudence on Wi-Fi sniffing, session interception, and packet capture for a decade.
- **The FCC's 25,000 USD fine for refusing to cooperate** — a small sum, but a precedent establishing that refusing to turn over documents to a regulator is **a separate offense**.

### For EU law

- **The first major test of ePrivacy Directive art. 5** against a global tech company.
- An impetus for **strengthening national DPA powers** — a cause Caspar and Schaar lobbied for, which made it into the GDPR in 2018.
- **A precedent for the German "technical prüfung" approach** — regulators may conduct technical audits of Big Tech companies.

### For other jurisdictions

- **South Korea** — the first time police physically entered a Google office. A precedent for later interventions (for example, in India in 2021).
- **Australia, Canada** — impetus for reform of their privacy laws.

### For Big Tech practice

- **The "rogue engineer alibi"** is henceforth presumed **unreliable**. Regulators now expect evidence of process and oversight.
- **Mandatory privacy training** for all engineers became standard.
- **External audits after scandals** — Google established a **Privacy Working Group** after the case.
- **Street View was reformed** — face and license plate blurring was added, along with the ability to request that one's house be blurred.

---

## Class actions

| Case | Court | Status | Value | Affected parties |
|--------|-----|------|---------|--------------|
| *Joffe v. Google Inc.* | N.D. Cal. / 9th Cir. | Settled 2019 | 13,000,000 USD | Users of open Wi-Fi networks in the US |

---

## Conclusions for citizens

### What does this mean for me?

The Wi-Spy case shows that **Big Tech physically traverses your neighborhood and passively collects whatever it can get** until someone notices. If your home network was unsecured between 2007 and 2010 and a Street View car drove past your house, fragments of your emails and passwords may have ended up on Google's servers. Today the Wi-Spy practice has been halted, but the **wardriving** ecosystem (real-time collection of Wi-Fi metadata) continues — Apple, Microsoft, Skyhook, Mozilla, and thousands of smartphone apps all do it.

### How do I protect myself?

1. **Always encrypt your home network** — WPA3 (the newest) or, at minimum, WPA2. Never "Open." WEP is practically useless (it can be broken in minutes).
2. **Use strong Wi-Fi passwords** — long, random, ideally generated by a password manager (Bitwarden, KeePassXC). Don't use a street name, birth date, or the name of your dog.
3. **Disable WPS** (Wi-Fi Protected Setup) — nearly every router has this option in its admin interface. WPS is vulnerable to brute-force attacks (Reaver, Pixie Dust).
4. **Hide your SSID** at home — this doesn't prevent attacks, but it reduces your visibility profile.
5. **On public Wi-Fi** (cafes, airports, hotels) **always use a VPN**. Don't log in to your bank or email, and don't type passwords, outside a VPN.
6. **Consider mobile tethering** instead of open Wi-Fi when traveling.
7. **Change your Wi-Fi password every 6–12 months**, especially after visits from guests or service technicians.

### What rights do I have?

**In the EU (GDPR + ePrivacy):**
- **ePrivacy art. 5** — the right to confidentiality of electronic communications.
- **GDPR art. 15** — the right of access: you can ask Google whether they hold any data tied to your IP address, your router's MAC, or your network's SSID.
- **The right to blur your house in Street View** — a feature available in Google Maps → Street View → "Report a problem" → "Blur my house."
- **GDPR art. 82** — compensation for damages.

**In the US:**
- Wiretap Act 18 USC § 2511 — a civil right of action.
- State privacy laws (California CIPA, Illinois, etc.).

### Where to report

- **Poland**: UODO, uodo.gov.pl
- **Germany**: the relevant state DPA (Hamburg, Bavaria, Berlin, etc.)
- **France**: CNIL
- **Wardriving incidents**: can be reported to your national CERT (in Poland: CERT Polska)

### A note for mediators, lawyers, and business owners

If you run a law firm, a foundation, or a business and your clients or staff use your company Wi-Fi:
- **Make sure you have WPA3/WPA2** with a strong password that is changed regularly.
- **Segment your networks**: a separate Wi-Fi for guests, another for employees, another for IoT (printers, cameras).
- **If you conduct mediations** — make sure the room does not have an open Wi-Fi network that exposes client traffic.
- For **GDPR art. 32** (security of processing) — an open company network is prima facie a violation.

---

## Context

- **Marius Milner — the "rogue engineer"** was well known in the cybersec community as the author of **NetStumbler** (2001), one of the most popular applications for **wardriving** (driving a car around a city to scan for Wi-Fi). Google hired him to work on the Wi-Fi positioning project — and then feigned surprise that he had written code collecting more than was declared. The FTC, bluntly: *"The 'rogue engineer' story does not hold up."*
- **Alan Eustace**, Google's SVP and the author of the blog post that broke the scandal, left Google in 2014 and became **the highest-jumping skydiver in history** — he fell from a stratospheric balloon at an altitude of **41,419 meters** (October 24, 2014). Record broken.
- **South Korea, November 2011** — the world's first **police raid on a Google office**, at its local branch in Seoul. Ten investigators were dispatched; servers were seized.
- **The FCC's 25,000 USD fine for refusing to cooperate** — Google was sanctioned **not for collecting the data**, but for **refusing to hand over documents to the FCC** during its investigation. The sum was laughably small, but it signaled to the regulator: "we won't help you with your investigation." That cost Google later when other countries calculated their own penalties.
- **The UK ICO closed the case in 2010** on grounds of "no substantial harm." After three years of criticism and new evidence (including banking login credentials), it **reopened**, but ultimately still **imposed no fine**. The ICO's 2014 document contains the sentence: *"the data included banking login credentials of a small number of UK residents"* — and yet no penalty followed.
- **Germany blocked Street View mapping** in 2011. For **12 years**, most German cities remained stuck in Google Street View at their 2010 state. Only in **2023** did Google resume mapping. For Google Maps users in Germany, street-level views from 2010 are a common sight.
- **Wi-Fi positioning without violations** is a huge business today — Apple runs the same kind of mapping through users' iPhones (with metadata sent subject to local consent). Google stopped doing it with its own cars, outsourcing the work instead to its Android users through location services.
- **"Camera cars" in Central and Eastern Europe**: Street View arrived in Poland 2–3 years later than in Western Europe. Mapping of Poland began in 2013, after the Wi-Fi policy reform.
- **Apple and Microsoft were doing the same thing** — analogous tools for gathering Wi-Fi metadata for a decade. Apple was criticized in 2011 over **the iPhone tracker** (Alasdair Allan, Pete Warden) — which showed that the iPhone was passively collecting Wi-Fi and cellular locations and storing them on the device. Microsoft did the same. The difference: no one with **production-grade, paid-for code was saving payload** — Google was the exception.
- **Google "reportedly" deleted the data** — in every country, Google declared that it had deleted all collected payload data after the court cases. **There was never any independent verification**. In Germany, Caspar received a "certification" from Google, but could not verify it himself.
- **The first large-scale public "wardriving" attack** took place in 2001 in San Francisco, when Peter Shipley and Matt Peterson spent a week scanning the Bay Area. Milner knew that world well.

---

## Sources

1. Alan Eustace, "Wi-Fi data collection: An update," Google Official Blog, May 14, 2010. URL: https://googleblog.blogspot.com/2010/05/wifi-data-collection-update.html (accessed: 2026-04-17)

2. Kevin J. O'Brien, "Google Admits It Collected Data, But Minimizes Effect," *The New York Times*, May 15, 2010.

3. Kevin Poulsen, "Google Street View Cars Grabbed Locations of Cellphones, Wi-Fi," *Wired*, May 17, 2010. URL: https://www.wired.com/2010/05/googlewifi/ (accessed: 2026-04-17)

4. Federal Communications Commission, "In the Matter of Google Inc.: Notice of Apparent Liability for Forfeiture," DA 12-592, April 13, 2012. URL: https://docs.fcc.gov/public/attachments/DA-12-592A1.pdf (accessed: 2026-04-17)

5. Federal Trade Commission, "Closing letter: Google Inc.," October 27, 2010. URL: https://www.ftc.gov/legal-library/browse/cases-proceedings/closing-letters/google-inc-closing-letter (accessed: 2026-04-17)

6. Hamburger Beauftragte für Datenschutz, multiple communications 2010–2013. URL: https://datenschutz-hamburg.de (accessed: 2026-04-17)

7. *Joffe v. Google, Inc.*, 729 F.3d 1262 (9th Cir. 2013). URL: https://caselaw.findlaw.com/court/us-9th-circuit/1643949.html (accessed: 2026-04-17)

8. UK Information Commissioner's Office, "Findings on Google Street View cars," November 2010; November 2014 (follow-up).

9. CNIL, press release March 21, 2011. URL: https://www.cnil.fr/

10. AEPD (Agencia Española de Protección de Datos), communication 2011.

11. Korea Communications Commission, 2011 report on the results of the search of Google's offices.

12. Benjamin Joffe et al. v. Google Inc., Class Action Complaint, N.D. Cal. 2010 — court documents via PACER.

13. Adam Tanner, "What Google's Wi-Spy Scandal Reveals," *Forbes*, May 2010.

14. Declan McCullagh, "Google's Wi-Fi data collection: What you need to know," *CNET*, May 2010.

15. Peter Schaar, official statements by Germany's federal Commissioner for Data Protection, 2010–2011.

---

*Last updated: 2026-04-17*
*Card in database: B01_street_view_wifi.md*
