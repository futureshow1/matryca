---
id: D02
slug: d02-amazon-alexa
group: D
group_label: Amazon, Uber
title: Amazon Alexa
year_revealed: 2019
last_updated: '2026-04-17'
companies:
- Amazon
status: concluded
jurisdictions:
- US
- UK
- DE
- global
legal_basis:
- Stanowe prawa konsumenckie
- ECPA
- pozew zbiorowy
fines:
- amount: 25000000
  currency: USD
  authority: FTC
  date: 2023-05
  category: regulatory_fine
  status: paid
- amount: 95000000
  currency: USD
  authority: '*In re Amazon Alexa Privacy*'
  date: 2024-10
  category: class_action_settlement
  status: paid
whistleblowers:
- le-bonniec
- snowden
journalists:
- Alex Hern
related_cases:
- D03
- D01
- C03
- A02
- B03
tags:
- dzieci
- wyborcy
- pracownicy
- coppa
- bipa
- pozew-zbiorowy
categories:
- privacy
geo_coords: []
priority: TOP
card_complete: true
word_count: 2717
explainer:
  src: /animations/d02-amazon-alexa.html
  duration: '60s'
  title: Amazon Alexa — thousands of workers listened to your kitchen
subtitle: Human review of recordings from kitchens, bedrooms, and private conversations
years_active:
- 2014
- 2019
---

# D02 — Amazon Alexa: human review of recordings from kitchens, bedrooms, and private conversations

> **Category:** Smart speakers / always-on listening / human review / AI training
> **Company/companies:** Amazon
> **Years:** 2014 (Echo debut) – 2019 (human review disclosure) – 2024 (class action settlement)
> **Status:** Settlements concluded; practice changed to opt-out; recordings still collected
> **Card ID:** D02

---

## Metadata

| Field | Value |
|------|---------|
| Country/region | Global; enforcement hotspots: US, Germany, UK |
| Year disclosed | April 10, 2019 (*Bloomberg*, Matt Day, Giles Turner, Natalia Drozdiak) |
| Years of practice | 2014–2019 (default human review) |
| Total penalty | USD 95,000,000 (class action 2024); no regulatory fines specifically for human review |
| Currency | USD |
| Legal basis | State consumer laws (Illinois BIPA, Washington BPA), ECPA, class action |
| Whistleblower/discoverer | Bloomberg (inside sources); later VICE and The Guardian with further revelations |
| Number of affected | ~100+ million Alexa users globally |
| Status (as of today) | Amazon introduced opt-out; human review still exists; class action settled 2024 |

---

## TL;DR

**Amazon Echo** — a smart speaker with the voice assistant **Alexa** — debuted in November 2014. By 2019, Amazon had sold **more than 100 million Echo devices**. On **April 10, 2019**, *Bloomberg* (Matt Day, Giles Turner, Natalia Drozdiak) published an investigation: **Amazon employed thousands of workers and contractors around the world** who **listened to private Alexa recordings** from customers' homes. Teams operated in **Boston, Costa Rica, India, and Romania**. Each worker listened to **roughly 1,000 clips per day**. The task was to **improve transcription** for AI training.

Recordings they listened to:
- **Private conversations** among household members (Alexa triggered accidentally on words similar to "Alexa" — "election," "Alexis," street names in Texas)
- **Singing in the shower** (clips shared as internal anecdotes)
- **Children speaking with parents**
- **Probable sexual assaults** (workers reported them — Amazon's response: "intervention is not our job")
- **Discussions of domestic violence**

Amazon did not inform users that **a human might hear the recordings**. By default, all recordings were **used for AI training**. Bloomberg:
> *"The team includes a mix of contractors and full-time Amazon employees who work in outposts from Boston to Costa Rica, India, and Romania. They transcribe, annotate and then feed the data back into the system."*

Within **3 days** of publication Amazon introduced **opt-out**. It was still **enabled by default**. Meta, Apple, and Google (who did similar things) quickly announced policy changes. Apple **suspended human review of Siri** for several months.

**May 31, 2023** — the FTC imposed a **USD 25 million fine** on Amazon for **COPPA** violations related to Alexa Kids → separate case, card D03.

**2022–2024** — the class action ***In re Amazon Alexa Privacy Litigation*** in W.D. Washington. Lead plaintiff **Jessica Garcia**, represented by **Keller Rohrback L.L.P.**, represented approximately 100 million Alexa users. **October 23, 2024** — a settlement of **USD 95,000,000**. Illinois residents — separate claims under **BIPA** (Biometric Information Privacy Act).

Case D02 shows that **voice AI assistants were trained on private conversations** without disclosed consent — a classic "the user doesn't know a human is listening" pattern. The practice today is **opt-out** by default, but **voice recordings are still collected** and analyzed (mostly automatically, but some still pass through human review).

---

## Timeline

- **November 2014** — Amazon Echo debut (initially only for Prime members).
- **2015–2019** — Alexa expansion to hundreds of millions of devices. Echo, Echo Dot, Echo Show, Echo Auto.
- **2014–2019** — Amazon builds **human review teams** in Boston, Costa Rica, India, and Romania. Workers listen to recordings to train the AI.
- **April 10, 2019** — ***Bloomberg*** publishes: "Amazon Workers Are Listening to What You Tell Alexa."
- **April 2019** — *Guardian*, *VICE Motherboard* — further revelations of similar practices at **Apple Siri**, **Google Assistant**, **Facebook Messenger voice clips**.
- **July 2019** — **Apple suspends** human review of Siri globally. Google — partial suspension for the EU. Facebook — suspends.
- **April 13, 2019** — Amazon introduces opt-out for **human review** (but enabled by default).
- **August 2019** — **Hamburg DPA Johannes Caspar** (the same one from Google WiFi Street View) opens proceedings on Alexa in Germany.
- **2020–2022** — a series of class actions in the US.
- **May 31, 2023** — **FTC fine of USD 25 million** for COPPA violations (→ D03).
- **October 23, 2024** — **USD 95 million settlement** in *In re Amazon Alexa Privacy Litigation*.
- **2025** — Amazon updates default options: **"Don't save voice recordings"** as the new default for new users.

---

## Mechanism

### How Alexa collects recordings

**1. Always-on mic.**
The Echo has a microphone active **24/7**. It records locally in a **rolling buffer**. When it detects a **wake word** ("Alexa," "Amazon," "Echo," "Computer"), it starts **sending to the Amazon cloud**.

**2. The false-wake problem.**
Words similar to "Alexa" — **"election"**, **"Alexis"**, **"Alex"**, street names like **"Alexander"** — can activate the device. Bloomberg revealed that in Texas workers listened to **many recordings of political conversations** when people said "election."

**3. Sending to the cloud.**
After wake word detection, 5–10 seconds of audio before and after is sent to Amazon servers. There:
- **Automatic transcription** (Alexa AI)
- **Intent recognition** (NLP)
- **Voice response**
- **Saving the recording** with timestamp, user ID, location

**4. Human review.**
**~0.1%** of recordings went to human review. But 0.1% × **billions of recordings** × **100+ million users** = **millions of hours of audio** processed by humans. Workers' tasks:
- Check whether the transcription is correct
- Tag the speaker's gender (male/female/child)
- Tag emotions
- Tag language/accent
- Correct the transcription if it was wrong

**5. Feeding the AI.**
Transcriptions + audio + annotations **return to the model**. The model learns to better recognize accents, genders, intents. The more human review, the better the model.

### Bloomberg's key revelations

**Workers shared anecdotes on Amazon's Slack:**
- Women singing in the shower (**"it's funny"** — quote)
- Children cursing
- People arguing

**Workers heard potential crimes:**
- **At least two cases** of probable **sexual assault** (according to Bloomberg sources).
- Workers reported these to supervisors. Response: **"intervention is not our job; keep working."**

**Worker locations:**
- **Boston** (US) — full-time Amazon
- **Costa Rica** — contractors
- **Romania** (Bucharest) — contractors
- **India** (Chennai) — contractors
- **Poland, Spain, Germany** — identified later

### Why it was a violation

1. **No disclosure** — in 2019 Amazon **did not tell** users that humans were listening.
2. **Enabled by default** — there was no opt-out until April 2019.
3. **Recordings of children** — COPPA requires parental consent (→ D03).
4. **Accidental recordings** — false wake activations → workers listened to intimate conversations without any consent.
5. **ECPA violations** — the Electronic Communications Privacy Act prohibits intercepting communications without consent (classic **wiretapping**).
6. **BIPA** (Illinois) — voice analysis = biometric information. Collecting without consent = violation.

---

## Discovery

### The Bloomberg investigation

***Matt Day, Giles Turner, Natalia Drozdiak*** — three Bloomberg journalists. Basis: **7 sources** inside Amazon and contracting firms. Key: obtaining allegations that workers had been forbidden to describe the practices to outsiders.

Publication: **April 10, 2019**: "Amazon Workers Are Listening to What You Tell Alexa." Effect: **immediate global scandal**.

### Guardian → Apple Siri

***Alex Hern*** (*The Guardian*), on **July 26, 2019** — a similar story about Apple Siri. An anonymous Apple contractor whistleblower (later identified as **Thomas le Bonniec**, France) described that Apple workers listened to Siri recordings, including:
- **Conversations with doctors** (dictaphone-style recordings)
- **Intimate conversations** (microphone activated by the sound of a zipper)
- **Drug dealers** discussing transactions

Le Bonniec reported to the French CNIL in 2020.

### VICE/Motherboard → Facebook

***Sam Biddle, Joseph Cox*** (*Motherboard*) — August 13, 2019 — Facebook transcribed **Messenger voice chat** recordings via contractors.

### First publications

- **April 10, 2019** — Matt Day, Giles Turner, Natalia Drozdiak, *Bloomberg*
- **July 26, 2019** — Alex Hern, *The Guardian*, Apple Siri
- **August 13, 2019** — *Motherboard*, Facebook Messenger

---

## Key people

### Amazon

- **Jeff Bezos** — Amazon CEO until 2021.
- **Andy Jassy** — AWS CEO, Amazon CEO from 2021.
- **Rohit Prasad** — VP Alexa AI, chief engineer.
- **Dave Limp** — SVP Devices and Services (Echo), until 2023.

### Journalists

- **Matt Day** (*Bloomberg*) — main discoverer.
- **Alex Hern** (*Guardian*) — Apple Siri.
- **Joseph Cox, Sam Biddle** (*Motherboard/Vice*) — Facebook and broader analysis.

### Whistleblowers

- Anonymous Amazon workers (7 people for Bloomberg).
- **Thomas le Bonniec** — Apple Siri contractor in France.

### Regulators

- **Johannes Caspar** (Hamburg DPA) — opened proceedings against Amazon in August 2019.
- **CNIL** (France) — proceedings after le Bonniec.

### Class

- **Jessica Garcia** — lead plaintiff in *In re Amazon Alexa Privacy Litigation*.
- **Keller Rohrback L.L.P.** — class action firm.

---

## Company response

### Amazon

**Stage 1: defense (April 10, 2019).** Statement: *"We take the security and privacy of our customers' personal information seriously. We only annotate an extremely small sample of Alexa voice recordings in order to improve the customer experience."*

**Stage 2: quick opt-out introduction (April 13, 2019).** Three days after the Bloomberg publication, Amazon introduces the option:
- Settings → Alexa Privacy → **Manage Your Alexa Data** → **Help Improve Alexa** → off

**Stage 3: public communication about the practice.** Rohit Prasad (VP Alexa AI) writes a blog post explaining how human review works and why it is "essential."

**Stage 4: default reform (2019–2020).**
- **"Don't save voice recordings"** option (but the new default = saving)
- **"Delete voice recordings after 3 months"** option (auto-delete)
- **"Delete what I just said"** option (by voice command)

**Stage 5: class settlements (2022–2024).**
- Illinois BIPA class actions — separate settlements
- Main: USD 95 million settlement in 2024

---

## Legal proceedings

### Jurisdictions

- **US federal** — FTC (USD 25 million for COPPA, → D03)
- **US state** — Illinois (BIPA), Washington (BPA), California
- **Germany** — Hamburg DPA, investigation 2019+
- **France** — CNIL (after the le Bonniec Siri case)

### Legal basis

- **ECPA** — Electronic Communications Privacy Act
- **Illinois BIPA** (Biometric Information Privacy Act) — voice as biometrics
- **Washington BPA** — Biometric Privacy Act
- **California CCPA/CPRA**
- **GDPR art. 6, 9** (in the EU) — voice may be sensitive data

### Key stages

| Date | Stage |
|------|------|
| April 10, 2019 | Bloomberg publication |
| April 13, 2019 | Opt-out introduced |
| May 31, 2023 | FTC COPPA fine of USD 25 million |
| October 23, 2024 | Class settlement of USD 95 million |

---

## Penalties and settlements

| Date | Authority | Amount | Jurisdiction | Basis |
|------|-------|-------|-------------|----------|
| May 31, 2023 | FTC | USD 25,000,000 | US (COPPA) | → D03 |
| October 23, 2024 | *In re Amazon Alexa Privacy* | USD 95,000,000 | US class | BIPA, ECPA, state laws |

**Total: ~USD 120 million** (with COPPA as a separate fine).

---

## Precedents and implications

### For US law

- **BIPA as a powerful tool** — voice = biometrics. USD 500 per violation × millions = potentially billions.
- **Strengthening the FTC** for smart speakers.

### For EU law

- **Hamburg DPA Caspar** — Alexa, Siri investigations 2019+. They did not end in fines, but they strengthened the **EDPB Guidelines on Voice Assistants** (2021).

### For Big Tech practice

- **Apple** — suspended human review of Siri; later introduced **voluntary opt-in as the default**.
- **Google Assistant** — analogous changes.
- **Meta (Facebook Portal, WhatsApp voice)** — withdrew human review.
- **Microsoft Cortana** — withdrew most voice functions in 2020.

---

## Class actions

| Case | Court | Status | Value | Affected |
|--------|-----|------|---------|--------------|
| *In re Amazon Alexa Privacy Litigation* | W.D. Wash. | Settlement 10.2024 | USD 95,000,000 | ~100 million users |

---

## Conclusions for citizens

### What does this mean for me?

If you own an Echo, Apple HomePod, or Google Nest, **remember that the microphone is active 24/7**. Even if the "wake word" works correctly, **false activations** happen every day. Fragments of your private conversations **are already** in the Amazon/Apple/Google databases. The Alexa story shows that **people may have listened to them** — and probably did.

### How to protect yourself?

1. **Turn off "Help Improve Alexa"**: Amazon app → Settings → Alexa Privacy → Manage Your Alexa Data → **Off**.
2. **Enable auto-delete**: Settings → Alexa Privacy → Manage Your Alexa Data → Delete after 3 months.
3. **Physically turn off the microphone** when you are not using it — most Echo devices have a button.
4. **Consider "Stop Listening"** before sensitive conversations: say "Alexa, stop listening."
5. **Do not place an Echo in a bedroom/bathroom/child's room**.
6. **Consider Home Assistant + Rhasspy** — a local voice assistant, no cloud.

### For parents

7. **Echo Dot Kids** — has special restrictions but still collects data. Consider alternatives.
8. **Alexa Kids skills** — were the main area of COPPA violations (→ D03).

### What rights do I have?

**In the US:**
- **Illinois BIPA** — if you are a resident, you can individually sue for voice collection without consent.
- **ECPA** — prohibits interception of communications.

**In the EU (GDPR):**
- **Art. 9** — voice may be sensitive data (health, biometric).
- **Art. 17** — right to delete recordings.
- **Art. 82** — compensation for harm.

### Note for mediators, lawyers, domestic violence victims

- **Professional confidentiality** — **DO NOT conduct legal consultations/mediations in a room with an Echo/HomePod/Google Nest**. Even if the wake word is not triggered, false activations can record fragments.
- **For victims of violence** — a former partner who knew the Amazon password can listen to Alexa recording history. Change the password, log their devices out.
- **For lawyers** — turn off the Echo in your office. Apple HomePod has a better privacy reputation (E2E), but the microphone is still on 24/7.

---

## Context

- **"Singing in the shower"** — one of Bloomberg's anecdotal quotes — Amazon workers in Boston shared their best clips as anecdotes on Slack. **"It's funny"** — quote. Critics: this is a **culture of unseriousness about the privacy** of customers.
- **Worker listening to a sexual assault** — Bloomberg's most shocking detail. Workers reported the potential crime; Amazon replied: **"intervention is not our job"**. This triggered a debate: does a company have an **obligation to report** crimes heard in recordings to law enforcement?
- **Romania, Bucharest** — Amazon's main European hub for human review. Workers spoke English, Spanish, French, and German. In 2022 Amazon moved many operations to India.
- **Thomas le Bonniec** — French Apple Siri contractor. Reported to CNIL in 2020. His whistleblowing was *Snowden-light* — he did not leak data, only the practice. Apple's response: hired its own workers instead of outsourcing (positive), but paid no compensation.
- **Apple's response was the best** — suspended human review globally in July 2019, then introduced **voluntary opt-in as the default**. Tim Cook statement: *"We will not improve Siri at the cost of our customers' privacy."*
- **"Ring + Alexa paradox"** — on the same day (May 31, 2023) Amazon received two FTC fines: Ring (USD 5.8 million) + Alexa COPPA (USD 25 million) = **USD 30.8 million total**. A record-breaking day of bad news for Amazon smart home.
- **Polish context** — the Echo has been in Poland since 2019, but the market is small compared to the US/UK/DE. Polish-language Alexa was introduced only in 2021. The location of recordings from Polish Echos is unclear (probably in the AWS cloud in the EU, but human review may have been in Costa Rica/India).
- **Hamburg's Caspar again** — Johannes Caspar (Google WiFi Street View case — B01) opened proceedings against Amazon in August 2019. Amazon committed to EU changes earlier than in the US. Classic **Brussels effect**.
- **False wake "election"** — the word "election" sounds similar to "Alexa" with a Texas accent. Bloomberg revealed that Amazon workers listened to **thousands of recordings of political conversations** during the 2016 and 2018 campaigns in the US. People talking about elections near an Echo — their comments were listened to by strangers in India and Romania.
- **"It knows your address"** — Amazon critics noted that human reviewers saw **user ID, device type, IP location** (city). In theory it was possible to **link the voice to a specific person**.
- **Amazon Alexa+ (2025)** — a new version of Alexa with **generative AI**. Amazon promises **better privacy**, but skeptics (including Edward Snowden, Bruce Schneier) warn that LLM-powered voice assistants have an **even larger** attack surface.
- **Spotify Car Thing** — Spotify's unofficial smart speaker (2022, later discontinued) had **local** processing without the cloud. Showed that **a different model is possible**.
- **"Apparently"** — one of the frequently spoken words that for a long time **activated Alexa** (phonetically close to "Alexa" in some accents). Amazon fixed it in 2021, but the list of false wakes still exists.

---

## Sources

1. Matt Day, Giles Turner, Natalia Drozdiak, "Amazon Workers Are Listening to What You Tell Alexa," *Bloomberg*, April 10, 2019. URL: https://www.bloomberg.com/news/articles/2019-04-10/is-anyone-listening-to-you-on-alexa-a-global-team-reviews-audio (accessed: 2026-04-17)

2. Alex Hern, "Apple contractors 'regularly hear confidential details' on Siri recordings," *The Guardian*, July 26, 2019.

3. Federal Trade Commission, "FTC and DOJ Charge Amazon with Violating Children's Privacy Law by Keeping Kids' Alexa Voice Recordings Forever and Undermining Parents' Deletion Requests," May 31, 2023.

4. *In re Amazon Alexa Privacy Litigation*, W.D. Wash., Case No. 2:19-cv-00910.

5. Amazon blog post, Rohit Prasad, "Alexa and Privacy," April 2019.

6. Thomas le Bonniec, testimony to CNIL, 2020.

7. Hamburg DPA (Johannes Caspar), decision on Alexa, August 2019.

8. European Data Protection Board, "Guidelines 02/2021 on Virtual Voice Assistants," 2021.

9. Illinois Biometric Information Privacy Act (740 ILCS 14).

10. Keller Rohrback L.L.P., press releases on the settlement, October 2024.

11. Joseph Cox, Sam Biddle, "Facebook Contractors Transcribe Audio from Messenger," *Motherboard/Vice*, August 13, 2019.

12. Tim Cook, statement on Siri, 2019.

13. Bruce Schneier, "Alexa and the Privacy Paradox," blog, 2019.

14. CNBC, NPR, CNN Business — wide coordinated coverage on May 31, 2023.

15. Natalia Drozdiak, follow-up articles in *Bloomberg* 2019–2020.

---

*Last updated: 2026-04-17*
*Card in database: D02_amazon_alexa.md*
