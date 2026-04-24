---
id: A04
slug: a04-wyciek-533-milionow-numerow-facebooka-z-2-67-mln-polakow
group: A
group_label: Meta
title: Leak of 533 million Facebook phone numbers (including 2.67 million Poles)
year_revealed: 2021
last_updated: '2026-04-17'
companies:
- Meta
status: concluded
jurisdictions:
- US
- UK
- PL
legal_basis:
- RODO art. 25
- art. 25
- art. 32
fines:
- amount: 265000000
  currency: EUR
  authority: Irlandzki DPC
  date: 2022-11
  category: regulatory_fine
  status: paid
whistleblowers:
- schrems
journalists: []
related_cases:
- A06
- A02
- C04
- A03
- C05
tags:
- trening-ai
- rodo
- wyciek-danych
- polski-watek
categories:
- privacy
geo_coords: []
priority: TOP
card_complete: true
word_count: 3376
years_active:
- 2018
- 2021
explainer:
  src: /animations/a04-wyciek-533-milionow-numerow-facebooka-z-2-67-mln-polakow.html
  duration: '60s'
  title: Leak of 533M Facebook phone numbers — including 2.67M Poles
---

# A04 — Leak of 533 million Facebook phone numbers (including 2.67 million Poles)

> **Category:** Mass scraping / data leak / privacy by design violation
> **Company/companies:** Meta (Facebook)
> **Years:** 2018–2019 (flaw and scraping), January/April 2021 (disclosure), November 2022 (DPC fine)
> **Status:** DPC proceedings concluded; 265 million EUR fine; class actions pending
> **Case ID:** A04

---

## Metadata

| Field | Value |
|------|---------|
| Country/region | 106 countries; including Poland (2.67M), US (32M), UK (11M), India (6M) |
| Year revealed | April 3, 2021 (public disclosure) |
| Years of practice | 2018–2019 (exploit active), ~August 2019 (scraping), 2021 (publication) |
| Total fine | 265 million EUR (DPC Ireland) |
| Currency | EUR |
| Legal basis | GDPR art. 25(1), art. 25(2), art. 32 |
| Whistleblower/discoverer | Alon Gal, CTO Hudson Rock (Israel) |
| Number of victims | 533,136,969 accounts; ~2,669,381 Poles |
| Status (today) | DPC decision of 25.11.2022 final; Meta has implemented reforms |

---

## TL;DR

In **2018–2019**, an unknown attacker exploited the **contact discovery feature by phone number** (the *contact importer* in Messenger) to scrape **533,136,969 Facebook accounts from 106 countries**. The technique used was **phone number enumeration**: a script generated random phone numbers and checked which ones were linked to a Facebook account. When it hit a match, it pulled the associated public data. Facebook **patched the flaw in August 2019** — but **did not inform** users or regulators.

**The first signs** appeared in **January 2021**, when a **Telegram bot** surfaced on the **RaidForums** hacker forum offering phone number lookups by Facebook ID (for a fee in BTC). **April 3, 2021** — **Alon Gal**, CTO of the Israeli firm Hudson Rock, noticed that **the entire dataset** (previously sold for money) had been **published on a hacker forum for free**. The file weighed **about 400 MB per country**; the Polish fragment contained **2,669,381 records**, including first names, last names, phone numbers, **Facebook IDs**, gender, marital status, workplace, city, and **email addresses** (for about 21,645 Polish accounts).

**November 25, 2022** — the **Irish DPC** imposed a **265 million EUR fine** on Meta for **violating GDPR art. 25(1) and 25(2)** (privacy by design, privacy by default). The DPC ruled that Meta **had not designed the system** to prevent mass scraping — this was a **structural flaw**, not an incident. The fine was the fourth-largest in GDPR history against Meta and the first for scraping (rather than a traditional server breach).

In Poland, **UODO publicly warned** citizens; outlets including **niebezpiecznik.pl, press.pl, money.pl, focus.pl** analyzed the Polish data in detail. **The most common first names** among affected Poles: Anna (>64K), Agnieszka (>49K), Piotr (>47K), Marcin (>43K), Krzysztof; **most common cities**: Warsaw (>81K), Wrocław (>50K), Kraków (>46K), Poznań (>37K), Gdańsk (>24K); **absurd detail**: more than **15,000 Poles listed their occupation as "SZLACHTA NIE PRACUJE" (Nobility Does Not Work)**.

---

## Timeline

- **2018 (second half)** — the flaw in the contact importer feature is spotted by an attacker; phone number enumeration begins.
- **August 2019** — Facebook **patches the flaw** (after internal discovery). No user notification.
- **~2019–2020** — the data circulates in hacker environments; **sold** quietly.
- **January 2021** — a **Telegram bot** appears on RaidForums that, for a BTC fee, returns a phone number for a given Facebook ID (or vice versa). **Motherboard (Vice)** reports on the case, but it does not blow up into a wider scandal at the time.
- **January 14, 2021** — Alon Gal posts on Twitter (@UnderTheBreach): *"Who has access to the Facebook database of the first 1.5M Polish phone numbers?"* — showing a sample of the data as a Telegram service.
- **Spring 2021** — an unknown actor decides to **publish the entire database for free** on a hacker forum — a gesture of "end of monetization."
- **April 3, 2021 (Saturday)** — Alon Gal discovers the publication of the full dataset: *"All 533,000,000 Facebook records were just leaked for free. This means that if you have a Facebook account, it is extremely likely that the phone number used for the account was leaked."*
- **April 3, 2021 (afternoon)** — *Business Insider* (Aaron Holmes) confirms the scale and verifies the data.
- **April 4, 2021** — **niebezpiecznik.pl** publishes the first Polish analysis; the Polish file contains **2,669,381 records**, larger than 400 MB. Statistics on Polish accounts: names, cities, occupations.
- **April 5, 2021** — Facebook publishes a post ("*old data from previously reported 2019 leak*"), **still contesting** the novelty of the case.
- **April 6, 2021** — **haveibeenpwned.com** expands its search to include phone numbers (previously only emails were searchable). It lets users check whether their **Polish number (+48...)** is in the leak.
- **April 6–7, 2021** — **UODO** publishes an official warning; **Polish media** (*money.pl, press.pl, focus.pl, spidersweb.pl*) cover the story extensively.
- **April 14, 2021** — the **Irish DPC** officially opens an inquiry under GDPR art. 33(3).
- **November 25, 2022 (Friday)** — the DPC adopts a decision imposing a **265 million EUR fine** on Meta.
- **November 28, 2022** — public announcement of the decision. Meta announces an appeal.
- **2022–2024** — a string of class actions across EU countries (the Netherlands, Germany), most in the judicial phase.
- **2024** — the CJEU answers a preliminary reference from Germany's Federal Court of Justice (BGH) in a related case on non-material damage under GDPR (C-340/21) — **lowering the damage threshold** for GDPR claims.

---

## Mechanism

### How it worked — technically

**Contact importer** was a Messenger feature that let users **find friends on Facebook by their phone numbers**. The mechanism:

1. The user entered a number (or exported the address book from their phone)
2. Facebook returned: **whether the number was linked to an account** + a link to the profile + first and last name + avatar

**Exploit:** the attacker used this feature **at mass scale**, automatically generating billions of numbers (as an **enumeration attack**) and collecting the responses.

**Key data fields pulled for each hit:**
- First and last name
- Phone number
- Facebook User ID (permanent)
- Gender
- Date of birth (if public)
- Location (city)
- Marital status (if public)
- Occupation / workplace (if public)
- Bio (if public)
- Email address (only for ~5% of records)

**Did not include:**
- Passwords
- Private messages
- Photos

### Why Meta claimed it was "not a leak"

A Meta spokesperson: *"This is old data that was scraped using a 'phone number enumeration' technique that exploited public platform features. We patched this in 2019."*

**Criticism:** Meta argued that since the data was **publicly available to anyone with a number** (via the contact importer feature), it was **not a "leak"** in the classical sense. The DPC rejected this argument entirely:

- **GDPR art. 25(1)** — privacy by design: Facebook had to design the feature so that **enumeration was not possible**. It should have applied rate limiting, CAPTCHA, and session authentication.
- **GDPR art. 25(2)** — privacy by default: Facebook's default settings exposed a user's **phone number** as the "friends can find me by number" signal — **without the user's consent**, without a clear opt-in.
- **GDPR art. 32** — security of processing: technical and organizational measures had to be **adequate to the risk** — enumeration of billions of numbers was a foreseeable threat.

### Why it was harmful — even if "only numbers"

The key counter-argument to Meta's defense:
- **Phone number + first name + last name + city** = a ready-made **profile for phishing, smishing, and SIM-swap**
- **Facebook ID + number** = a tool for **deanonymizing** fake/anonymous accounts
- Citizens **cannot change their phone number** as easily as a password — the consequences are **permanent**
- For **public figures, journalists, activists, and victims of domestic violence** — the risk is doubled

---

## Discovery

### Who discovered it and when

**Alon Gal** — Israeli cybersecurity expert, co-founder and CTO of **Hudson Rock** (a cyberintelligence firm based in Tel Aviv). Gal specializes in **monitoring hacker forums** — the dark web and sites like Raid Forums. His Twitter handle **@UnderTheBreach** is the source of many major discoveries (including the 200M Twitter leak in 2023).

**January 14, 2021** — Gal was **the first** to spot a Telegram bot offering reverse lookup services, phone number ↔ Facebook ID. He warned then that the database existed but wasn't yet public.

**April 3, 2021** — a Saturday, on a weekend. Gal notices that **someone had published the entire set on a hacker forum** *"for free."* His tweet: *"All 533,000,000 Facebook records were just leaked for free."*

### Verification

*Business Insider* (Aaron Holmes) took a sample of the records and:
- Cross-referenced known numbers of known users with records in the leak — **matched**
- Verified email addresses and numbers through Facebook's **password reset feature** — for most hits, **the verifier confirmed the account existed**
- Concluded: **the data is authentic**.

### How it was verified in Poland

**niebezpiecznik.pl** (Piotr Konieczny and team) downloaded the Polish portion of the set (400 MB, 2,669,381 records). The analyses:
- **First names:** Anna (>64K), Agnieszka (>49K), Piotr (>47K), Marcin (>43K), Krzysztof
- **Surnames:** Nowak, Kowalski, Kowalska, Kowalczyk, Wójcik — **typical Polish surnames** in proportion to the population
- **Cities:** Warsaw (>81K), Wrocław (>50K), Kraków (>46K), Poznań (>37K), Gdańsk (>24K)
- **Completely absurd occupations, but frequently listed by Poles:** "SZLACHTA NIE PRACUJE" (Nobility Does Not Work) (>15K), "Wyższa Szkoła Melanżu" (Higher School of Partying) (>1K), "Wyższa Szkoła Robienia Hałasu (WSRH)" (Higher School of Making Noise) (>1K)
- **Actually running their own businesses:** about 22,500
- **Emails:** only 21,645 Polish records had an email — most common: GMail

### First publications

- **April 3, 2021** — Alon Gal tweet (@UnderTheBreach)
- **April 3, 2021** — Aaron Holmes, *Business Insider*: "533 million Facebook users' phone numbers and personal data have been leaked online"
- **April 3, 2021** — *Fortune, TechCrunch, Reuters* — Western outlets
- **April 4, 2021** — **niebezpiecznik.pl** — analysis of the Polish portion
- **April 4, 2021** — *press.pl, money.pl, focus.pl, spidersweb.pl*

---

## Key people

### Whistleblower/discoverer

- **Alon Gal** — CTO of Hudson Rock, an Israeli cybersecurity expert. After the 533M case, he also discovered the 200M Twitter leak (2023), T-Mobile, and many others.

### Journalists

- **Aaron Holmes** — *Business Insider* (then Insider Inc.) — the first Western verification
- **Joseph Cox** — *Motherboard (Vice)* — earlier (January 2021) reporting on the Telegram bot
- **Piotr Konieczny** — head of niebezpiecznik.pl, the first Polish analysis
- **teams at press.pl, money.pl, focus.pl, spidersweb.pl** — broad Polish press coverage

### Regulators

- **Helen Dixon** — then Commissioner of the Irish DPC (until 2024; current: Des Hogan). The DPC led the inquiry under art. 33(3).
- **Personal Data Protection Office (UODO)** (Poland) — public warnings for citizens
- **Bundesbeauftragte** (Germany) — independent rolling inquiry with the DPC

### Meta

- **Mark Zuckerberg** (himself one of the victims — his **WhatsApp number (which he doesn't use)** was in the leak)
- **Dan Levy** — VP, Product Management; Meta's spokesperson on the case
- **Andy Stone** — Director of Policy Communications; press statement

---

## Company response

### Meta — initial response

Mike Clark (Product Management Director at Meta) in a company blog post (April 5, 2021):
- Confirmed the scale (533M)
- Claimed the data "was not hacked from our systems"
- Described it as "old data from a previously reported issue"
- Emphasized that Facebook **did not notify users**, because it did not believe a legal obligation existed (an argument rejected by the DPC).

**Analysis:** Meta tried to separate "breach" from "leak," but **practically, for the user**, it is the same thing: **I lost control of my data**. The DPC took a pragmatic stance.

### Remediation measures

- Patching the contact importer (August 2019, before disclosure)
- Adding rate limiting and CAPTCHA
- **Anti-scraping measures** — but only after the DPC fine
- **Transparency reports** expanded to cover scraping

### Open questions

- Why did Meta **not inform users** in 2019 when it was patching?
- Did Meta **know** the scale as early as 2019 while patching, or only discover it after the 2021 publication?
- Why did Meta **not implement privacy by default** from the start?

---

## Legal proceedings

### EU — Irish DPC

- **April 14, 2021** — opening of the inquiry under GDPR art. 33(3) (breach notification obligation)
- **November 25, 2022** — decision imposing **265 million EUR**
- Violations found:
    - **Art. 25(1)** — privacy by design inadequate
    - **Art. 25(2)** — privacy by default inadequate
- **Fine + reprimand + remediation order** within a specified period
- Meta announced an appeal, but as of 2026 — the **decision is final**

### EU — other DPAs

- **Hamburg (Germany), Madrid (Spain)** — parallel investigations, but the case was referred to the DPC under the one-stop-shop mechanism of the GDPR

### Poland

- **UODO** — public warnings; **no separate proceedings**, since Meta falls under the DPC (Ireland) within the one-stop-shop system.
- **Individual lawsuits** — Polish users can sue Meta **individually in Polish courts** for non-material damages under **GDPR art. 82**. Several cases were filed in 2022–2024, with settlements or individual compensation in the range of **200–2,000 PLN**.

### Germany — *Facebook-Urteil* BGH and CJEU

**2023** — Germany's Federal Court of Justice (BGH) submits a preliminary reference to the CJEU: **does the mere fact of a GDPR violation** give rise to compensation, or must a **specific harm** be proven?

**C-340/21 (Natsionalna agentsia za prihodite)** — **the CJEU rules (December 2023)**:
- **Fear of misuse of data** can constitute non-material harm
- There is no need to prove **specific financial harm**
- **The threshold is lowered** for citizen claims

**Implication for 533M:** mass class actions across the EU have been **facilitated** by this CJEU interpretation. **Thousands of lawsuits** in Germany, the Netherlands, and France in 2024–2025.

---

## Penalties and settlements

| Date | Authority | Amount | Jurisdiction | Basis |
|------|-------|-------|-------------|----------|
| 25.11.2022 | Irish DPC | 265,000,000 EUR | EU | GDPR art. 25(1), 25(2) |
| 2024–2026 | Individual and class lawsuits | variable (e.g., 500 EUR/person in some countries) | EU | GDPR art. 82 |

---

## Precedents and implications

### For EU law

- **First major DPC fine for scraping** (rather than a classical breach via intrusion) — confirmed that privacy by design/default are **enforceable**
- **A catalyst for CJEU C-340/21** — lowering the threshold for non-material damage
- **A precedent** in the interpretation of GDPR art. 25 — particularly important for API design and public search functions

### For US law

- The case had no direct legal consequences in the United States (no federal GDPR-like law)
- **California CCPA/CPRA** indirectly — a tightening of the rules for platforms operating in California

### For Big Tech practice

- **The end of public contact importers** as a default setting — Instagram, Twitter/X, and LinkedIn have introduced opt-outs
- **Rate limiting + CAPTCHA** have become standard in search functions
- **Transparency reports on scraping** have become a quarterly custom

---

## Class actions

| Case | Court | Status | Value | Plaintiffs |
|--------|-----|------|---------|--------------|
| Various individual lawsuits in DE, NL, PL | National courts | Ongoing | 500 EUR/person typically | Millions of potential claimants in the EU |
| Massenklagen Germany | Landgericht Berlin, Düsseldorf, Hamburg | Partial rulings 2024–2025 | ~100–1,000 EUR/person | Tens of thousands of plaintiffs |

In Poland, **there is no consolidated class action**, but individual lawsuits are possible (the 2009 Act on pursuing claims through group proceedings requires **22 or more people** to organize themselves).

---

## Conclusions for citizens

### What does this mean for me?

**If you had a Facebook account between 2017 and 2019 and added a phone number to your profile** (even as private, for yourself only) — it is **highly likely** that your number is in the leak. This is not limited to public accounts — **the scraping covered every account** that had a linked phone number. **2.67 million Poles** are affected.

### How do I check?

- Go to **[haveibeenpwned.com](https://haveibeenpwned.com)**
- Enter your phone number in international format: `+48XXXXXXXXX` (no spaces or dashes)
- If the result shows "Facebook 533M" — your data is in the leak

### How do I protect myself?

1. **Remove your phone number from your Facebook and Instagram profiles** (Settings → Personal → Contact)
2. **Enable 2FA via an app (not SMS)** — Authy, Google Authenticator, or a hardware key
3. **Be very wary of SMS messages about "package delivery surcharges,"** "tax refunds," or "BLIK" — these are **favorite phishing techniques** exploiting leaked numbers
4. **Consider changing your number** if you are a public figure or a journalist
5. **Don't give your number to platforms that don't need it** — many apps require "SMS verification" only to build a database for tracking

### What rights do I have?

- **GDPR art. 82** — compensation for material and non-material harm (fear, anxiety) — the **CJEU C-340/21 precedent** lowered the threshold
- **Art. 17** — erasure of data
- **Art. 21** — objection to processing

### Where do I report it?

- **UODO** (Poland) — you can report violations, though the one-stop-shop mechanism ultimately routes them to the DPC in Ireland
- **Irish DPC** — [dataprotection.ie](https://www.dataprotection.ie) — Meta's main EU regulator
- **Civil court in Poland** — for compensation claims (GDPR art. 82 + Polish Code of Civil Procedure)
- **Law firms specializing in GDPR** — some run class or "mass" lawsuits on a contingency-fee basis

### For mediators, lawyers, and advisers

- The **533M** case is a good study for settlements before UODO — standard compensation amounts in Poland are **200–2,000 PLN** for fear of misuse.
- For group lawsuits — art. 1 et seq. of the **2009 Act on pursuing claims through group proceedings** requires **at least 22 people** with **similar claims**. In theory, 2.67 million Polish users easily meet this threshold, but in practice the Polish system **has no tradition of mass class actions** comparable to the US.
- **For family mediators** — the leak has implications for **stalking and post-separation harassment** cases — a victim's phone number in the hands of an abuser is a serious risk.

---

## Context

- **Among the 533M was Mark Zuckerberg**. Meta's own CEO had his number in the leak — which showed the **ironic universality** of the problem. His number, as journalists established, was a **WhatsApp number** (which, paradoxically, Zuckerberg rarely uses).
- **"SZLACHTA NIE PRACUJE" (Nobility Does Not Work)** as an occupation for more than 15,000 Poles. It reflects the Polish **self-deprecating humor** that also happens to build an interesting dataset for sociologists.
- **Polish cities in proportion** — Warsaw > Wrocław > Kraków > Poznań > Gdańsk (81K > 50K > 46K > 37K > 24K) correlates perfectly with the ranking of Polish city populations, which verifies the representativeness of the sample.
- **Alon Gal writes in English, but from Tel Aviv** — a symbol of a new model of cyberintelligence in which independent researchers from Israel, Ukraine, Russia, and Estonia are often faster than regulators.
- **The price of the leak:** Meta earns about **30+ billion USD annually in the EU**. A fine of **265 million EUR** is **less than 1% of a single year's revenue**. Critics (NOYB) call it **"the cost of doing business."**
- **Comparison with Poland's Morele.net fine**: 2.83 million PLN (about 630,000 EUR) for a leak of 2.2 million accounts — **UODO was praised at the time**. With 2,669,381 Polish accounts in 533M, **Meta should have paid proportionally about 3.4 million PLN in Poland** had the case fallen under UODO. It ended up **paying less** thanks to the one-stop-shop.
- **The database was sold for two years** before someone published it "for free." This is the **classic dynamic of dark web data markets** — the seller exploits the value as long as they can, then **publishes it to boost their reputation in the community**. Gal: *"Databases, if they are large or rare, are not distributed widely right away — those who hold them try to monetize them as long as they can. The process sometimes takes years, sometimes days, but ultimately all private databases leak if they were being sold."*
- **The file weighs 400 MB for the Polish portion** — a compact JSON/CSV format. It can be downloaded, opened in Excel, **and used to check yourself and your friends** (illegal in the EU — personal data). This shows how realistic the problem is — **anyone who downloads the file** has instant access to the phonebook of millions of people.
- **The Telegram bot** operated for two months (January–March 2021) before the media reacted. It reveals **a gap in dark web monitoring** by the companies themselves — Meta didn't know its data was being sold until Gal's tweet went viral.
- **No passwords + no private messages** was Meta's argument — but phishing and SIM-swap specialists **don't need passwords**. A number + first name + last name + date of birth is enough to run an effective social engineering attack.

---

## Sources

1. Alon Gal, tweet at @UnderTheBreach, April 3, 2021. URL: https://twitter.com/UnderTheBreach/status/1378314145784557569 (archive: Wayback Machine)
2. Aaron Holmes, "533 million Facebook users' phone numbers and personal data have been leaked online", *Business Insider*, April 3, 2021. URL: https://www.businessinsider.com/stolen-data-of-533-million-facebook-users-leaked-online-2021-4 (accessed: 2026-04-17)
3. niebezpiecznik.pl, "[UPDATE #3] Data of 533 million Facebook users leaked", April 3–6, 2021. URL: https://niebezpiecznik.pl/post/facebook-wyciek-dane-533-milionow-uzytkownikow/ (accessed: 2026-04-17)
4. press.pl, "Data of 2.6 million Polish Facebook users leaked", April 7, 2021. URL: https://www.press.pl/tresc/65483,wyciekly-dane-2_6-mln-polskich-uzytkownikow-facebooka (accessed: 2026-04-17)
5. money.pl, "Facebook data leak. UODO issues a warning", April 7, 2021. URL: https://www.money.pl/gospodarka/wyciek-danych-z-facebooka-uodo-ostrzega-6626549045603008a.html (accessed: 2026-04-17)
6. focus.pl, "Leak of 500 million Facebook users' data. In Poland, those listing 'Nobility Does Not Work' as their occupation were affected", 2021. URL: https://www.focus.pl/artykul/sprawdz-czy-twoje-dane-z-facebooka-zostaly-skradzione (accessed: 2026-04-17)
7. spidersweb.pl, "Major Facebook data leak. Check whether your phone number leaked", April 4, 2021. URL: https://spidersweb.pl/2021/04/facebook-wyciek-numer-telefonu-jak-sprawdzic.html (accessed: 2026-04-17)
8. Irish Data Protection Commission, "Data Protection Commission announces decision in Facebook 'data-scraping' inquiry", press release, November 28, 2022. URL: https://dataprotection.ie/en/news-media/press-releases/data-protection-commission-announces-decision-facebook-data-scraping-inquiry (accessed: 2026-04-17)
9. The Hacker News, "Irish Regulator Fines Facebook $277 Million for Leak of Half a Billion Users' Data", November 29, 2022. URL: https://thehackernews.com/2022/11/irish-regulator-fines-facebook-277.html (accessed: 2026-04-17)
10. Security Affairs, "Irish data protection commission fines Meta over 2021 data-scraping leak", November 29, 2022. URL: https://securityaffairs.com/139063/laws-and-regulations/irish-dpc-fines-meta-data-scraping.html (accessed: 2026-04-17)
11. CJEU, judgment C-340/21 of December 14, 2023 (Natsionalna agentsia za prihodite).
12. Wikipedia (English), "Alon Gal", as of 2026. URL: https://en.wikipedia.org/wiki/Alon_Gal (accessed: 2026-04-17)
13. Socialpress.pl, "Facebook user data leak – how to check if it affected us?", 2021. URL: https://socialpress.pl/en/2021/04/wyciek-danych-uzytkownikow-facebooka-jak-sprawdzic-czy-nas-dotyczyl/ (accessed: 2026-04-17)
14. Have I Been Pwned, dedicated page for the Facebook 533M breach. URL: https://haveibeenpwned.com/ (accessed: 2026-04-17)
15. UODO, warning for citizens (April 2021, archive).

---

*Last updated: 2026-04-17*
*Card in database: A04_533mln.md*
