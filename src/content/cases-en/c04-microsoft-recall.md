---
id: C04
slug: c04-microsoft-recall
group: C
group_label: Apple, Microsoft, LinkedIn
title: Microsoft Recall
year_revealed: 2024
last_updated: '2026-04-19'
companies:
- Microsoft
status: concluded
jurisdictions:
- EEA
- global
legal_basis:
- RODO art. 25
- art. 32
- krajowe prawa pracy
fines: []
whistleblowers:
- beaumont
journalists: []
related_cases:
- A04
- E06
- D06
- B05
- B03
tags:
- trening-ai
- dark-patterns
- wyciek-danych
categories:
- privacy
geo_coords: []
priority: STANDARD
card_complete: true
word_count: 3208
explainer:
  src: /animations/c04-microsoft-recall.html
  duration: '60s'
  title: Windows Recall — plain-text screenshots every 5 seconds
subtitle: AI-powered screenshots of everything you do on your computer
years_active:
- 2024
- 2025
---

# C04 — Microsoft Recall: AI-powered screenshots of everything you do on your computer

> **Category:** AI telemetry / screenshots without consent / keylogger by design
> **Company/companies:** Microsoft
> **Years:** May 2024 (announcement) – June 2024 (halt) – April 2025 (limited relaunch)
> **Status:** Deployed in a restricted form; security disputes ongoing
> **Card ID:** C04

---

## Metadata

| Field | Value |
|------|---------|
| Country/region | Global (Windows 11); EEA rollout delayed |
| Year revealed | 20 May 2024 (Microsoft announced the feature itself) |
| Years the practice lasted | May 2024 – June 2024 (announcement), April 2025+ (limited rollout) |
| Total penalties | **No penalties** — halted before deployment; no regulatory proceedings |
| Currency | — |
| Legal basis | GDPR art. 25 (privacy by design), art. 32 (security); national labor laws |
| Whistleblower/discoverer | **Kevin Beaumont** (DoublePulsar); UK ICO; internal cybersec community criticism |
| Number of people harmed | Potentially all Copilot+ PC users (millions of devices) |
| Status (as of today) | Opt-in; encrypted; selectively deployed outside the EU; security researchers continue to find flaws |

---

## TL;DR

**On 20 May 2024**, at the **Build 2024** conference, Microsoft unveiled **"Windows Recall"** — an AI feature for the new **Copilot+ PC** machines that **takes a screenshot of the user's desktop every few seconds**, OCRs the text, and builds a **searchable database of everything you have seen or typed on the computer**. Microsoft's own marketing: *"remember anything you've ever seen."* The launch was scheduled for **18 June 2024** on new Copilot+ PCs, **enabled by default**.

The cybersecurity community's reaction was **immediate and devastating**. **Kevin Beaumont** (DoublePulsar) was the first to publish a detailed analysis based on preview builds: (1) the Recall database was stored in **plaintext SQLite** (unencrypted), (2) every screenshot — including **passwords, credit-card numbers, and sensitive emails** — was accessible to **any application** running under the user's account, (3) **infostealers** (Agent Tesla, Redline, Lumma) could exfiltrate **the user's entire activity history** within seconds, and (4) BitLocker provides no protection against malicious local applications. Beaumont called it **"a potential security disaster."**

**On 7 June 2024**, researcher **Alexander Hagenah** published a tool called **TotalRecall** on GitHub, demonstrating how to exfiltrate data from the Recall database in seconds. **On 13 June 2024**, Microsoft **halted** the rollout. **On 21 June 2024**, the company announced that Recall would now be **opt-in**, require **Windows Hello** authentication, and use an **encrypted database**. Other signals from the period: **Signal** (the messenger) introduced **Screen Security** to block Recall from screenshotting Signal. Brave and AdGuard followed in 2025.

**In 2025** Microsoft began a **limited rollout** for Windows Insiders and then Copilot+ PC owners (excluding the EEA). Requirements:
- A Copilot+ PC with NPU ≥ 40 TOPS
- 16 GB RAM, 256 GB storage
- **Windows Hello biometric** for access
- **Virtualization-Based Security + Trusted Platform Module**
- **Opt-in** twice (at setup and at first run)
- **Pause from the system tray**
- Exclusion of apps/sites (blocklisting)

**Recall in the EEA** remains delayed — Microsoft is in dialogue with national DPAs (primarily the **Irish DPC** and the **UK ICO**). In October 2024 **Microsoft announced a further delay** citing "regulatory discussions." In 2025–2026 the feature has been entering the market selectively.

**As of April 2026** (the current date): TotalRecall Reloaded — a new version of Hagenah's tool — **still shows that data can be extracted**, despite Microsoft's improvements. The controversy continues. Case C04 is a case study in **"privacy vs. convenience"** in the AI era and **what happens when Big Tech announces a feature without deeper analysis**.

---

## Timeline

- **20 May 2024** — Microsoft Build 2024. Satya Nadella and Yusuf Mehdi unveil **Copilot+ PC** and **Windows Recall** as the flagship feature.
- **21 May 2024** — first articles in the tech press. General tone: "interesting, but needs testing."
- **22–31 May 2024** — Kevin Beaumont (DoublePulsar) publishes the first technical analyses on his blog. Sharp criticism: **plaintext SQLite, no encryption, any application can read the database**.
- **30 May 2024** — the **UK ICO** (Information Commissioner's Office) formally approaches Microsoft with questions.
- **3 June 2024** — Signal (messenger) announces **Screen Security** in Signal Desktop — blocking Recall from capturing Signal chats.
- **7 June 2024** — **Alexander Hagenah** publishes **TotalRecall** on GitHub. The tool exfiltrates the Recall database within seconds.
- **13 June 2024** — Microsoft **halts** the Recall rollout. The message: the feature will be Windows Insider-only.
- **21 June 2024** — Microsoft announces the new model: **opt-in**, **Windows Hello**, **encrypted database**.
- **September 2024** — Microsoft begins Windows Insider Preview testing.
- **November 2024** — **further delay** because of newly discovered flaws.
- **December 2024** — Recall lands in Windows Insider Preview, but only for a limited cohort.
- **April 2025** — **rollout to Copilot+ PCs** (globally, except the EEA).
- **July 2025** — **Brave and AdGuard** introduce default blocking of Recall.
- **2025** — Microsoft negotiates with the Irish DPC and the UK ICO.
- **Early 2026** — TotalRecall Reloaded exposes new flaws in the updated version. Microsoft's response: "does not constitute a real risk."
- **April 2026** — Recall is selectively available and remains controversial.

---

## Mechanism

### How Recall works (2025 version)

**1. Snapshotting:**
- Every **5 seconds** Recall captures a screenshot of the entire desktop.
- Screenshots are **OCR'd** (text is extracted via Optical Character Recognition).
- Images + text + metadata (window title, application name, timestamp) are saved locally.

**2. Indexing:**
- The NPU (Neural Processing Unit) analyzes images and text locally.
- A **semantic search database** is built — the user can query in natural language: *"open the PDF about solar inverters I was reading last week."*

**3. Storage:**
- A local SQLite database.
- **In the 2025 version**: encrypted via **Virtualization-Based Security (VBS)** + **Trusted Platform Module (TPM)**.
- In the 2024 version (before the halt): **plaintext**, protected only by BitLocker.

**4. Access:**
- **In the 2025 version**: **Windows Hello** biometric (face, fingerprint, PIN) is required on every access.
- In the 2024 version: no additional authorization — every application running as the user had access to the database.

**5. Optional:**
- The user can **exclude applications** (e.g., 1Password, banks).
- The user can **pause** Recall from the system tray.
- The user can **delete** snapshots manually.

### Why it was controversial — vulnerabilities in version 1 (May 2024)

**Flaw 1: plaintext SQLite.** The database was not encrypted beyond standard BitLocker. BitLocker protects against **physical laptop theft** (offline attack) but **does not protect** against malware running inside a logged-in user's session.

**Flaw 2: any application can read the database.** It sat in the user's `AppData/Local`. Any application — even a script downloaded from the internet — could read it, the same way Chrome cookies are read.

**Flaw 3: infostealers.** Malware such as **Agent Tesla, Redline, Lumma, and Raccoon** is **used at massive scale** (millions of infections per year) to steal passwords from browsers. Recall adds to their target set **a searchable history of everything the user has done**.

**Flaw 4: screenshots of passwords.** Password managers (1Password, LastPass) sometimes display the password in plaintext. Recall took a screenshot, so **the password ended up in the database**. Even though the managers tried to block this, Recall sat **above** them at the OS level.

**Flaw 5: sensitive data by default.** Recall captured everything: therapy conversations on Zoom, medical documents, pornographic content, personal emails, 2FA codes. **Enabled by default.**

### TotalRecall (Alexander Hagenah, GitHub)

**TotalRecall** is a proof-of-concept tool published on 7 June 2024. In ~50 lines of Python, the script:
1. Locates the Recall database
2. Copies it to a temporary folder
3. Extracts every screenshot and OCR text
4. Exports it as a ZIP archive

Runtime: **under 30 seconds** on a typical computer. Once uploaded to **Pastebin** or a C&C server, the attacker has a complete history of the user.

### TotalRecall Reloaded (2025–2026)

In 2025 Hagenah updated the tool to bypass Windows Hello authorization via **session hijacking** and **browser automation prompts**. Microsoft replied: *"TotalRecall Reloaded requires local administrative access and the user's authentication, which means it's not a remote exploit."* But, as infostealer practice shows, **local access is already half the battle for hackers** — infostealers routinely obtain user-level access through phishing.

---

## Discovery

### Kevin Beaumont — the chief alarm-raiser

**Kevin Beaumont** (online handle **GossiTheDog**) — British cybersecurity specialist, former security manager at Microsoft UK, independent researcher and blogger at **DoublePulsar**. Specializes in:
- Ransomware (tracking Conti, LockBit, and others)
- Extensive coverage of the 2017 WannaCry attack
- Past Microsoft incidents (Exchange ProxyLogon 2021)

Beaumont **obtained access to a preview** of Windows 11 with Recall and published a series of warning posts on X/Twitter and on the DoublePulsar blog. His key posts from May and June 2024:
- A technical analysis of the Recall SQLite database
- A demonstration that **infostealers would be in paradise**
- A comparison to the **Xbox One E3 launch** as a PR disaster

### Alexander Hagenah — author of TotalRecall

**Alexander Hagenah** (handle **xaitax**) — a European cybersecurity researcher. His TotalRecall tool was crucial evidence that the flaws in Recall were **trivially exploitable**. The demonstration was similar to what Jonathan Mayer did with the Safari bypass (B02) — a proof of concept that prevented Microsoft from defending itself with "that's only theoretical."

### UK ICO

The UK Information Commissioner's Office — John Edwards (Commissioner) — approached Microsoft on 30 May 2024 with questions. Public statement: *"We are making enquiries with Microsoft to understand the safeguards in place to protect user privacy."*

### The cybersecurity community

Mass criticism from:
- **Troy Hunt** (Have I Been Pwned)
- **Mikko Hyppönen** (F-Secure)
- **Graham Cluley**
- **Jake Williams** (SpecterOps)
- **Dave Kennedy** (TrustedSec)

### Earliest publications

- **22 May 2024** — Kevin Beaumont, "Stealing Everything You've Ever Typed or Viewed on Your Own Windows PC is Now Possible With Two Lines of Code — Inside the Copilot+ Recall Disaster," DoublePulsar
- **23 May 2024** — *Ars Technica*, *The Verge*, *Wired* — critical analyses
- **7 June 2024** — *The Register*, *BleepingComputer* — on TotalRecall
- **13 June 2024** — *Reuters*, *Bloomberg* — on the halt

---

## Key people

### Microsoft

- **Satya Nadella** — CEO. The main proponent of the AI strategy.
- **Yusuf Mehdi** — Executive Vice President, Consumer Marketing. Announced Recall at Build 2024.
- **Pavan Davuluri** — Corporate VP, Windows and Devices.
- **Charlie Bell** — Executive Vice President, Microsoft Security.
- **David Weston** — Corporate Vice President, OS Security and Enterprise — led the redesign after the halt.

### Critics / discoverers

- **Kevin Beaumont** — DoublePulsar. Described above.
- **Alexander Hagenah** — author of TotalRecall.
- **UK ICO** — John Edwards, Commissioner.
- **Signal Foundation** — Meredith Whittaker (president), announced Screen Security on 3 June 2024.

### Journalists

- **Tom Warren** — *The Verge*, long-running Microsoft analyst.
- **Zack Whittaker** — *TechCrunch*.
- **Andy Greenberg** — *Wired*.

---

## Company response

### Microsoft

**Phase 1: marketing euphoria (May 2024).** The Build conference, a grand announcement, Windows Copilot+ PC as "the biggest change since Windows 95."

**Phase 2: the halt (13 June 2024).** Pavan Davuluri, blog post: *"We are adjusting the release model for Recall to leverage the expertise of the Windows Insider community to ensure the experience meets our high standards for quality and security."* Translation: we made a mistake, we're pausing the rollout.

**Phase 3: redesign (summer 2024).** Changes:
- Opt-in (twice) instead of on by default
- Encrypted database
- Windows Hello requirement
- Application exclusion
- Auto-deletion for sensitive categories

**Phase 4: limited relaunch (2025).** A slow rollout to Copilot+ PCs, excluding the EEA.

**Phase 5: disputes continue (2026).** TotalRecall Reloaded shows that even the updated version has problems. Microsoft downplays the risk.

### Signals from other companies

- **Signal** (3 June 2024) — **Screen Security** enabled by default in Signal Desktop for Windows 11. The first messenger to **actively block** Recall.
- **Brave Browser** (July 2025) — added an option to block Recall.
- **AdGuard** (July 2025) — blocks via API.
- **1Password, Bitwarden, LastPass** — recommend disabling Recall.

---

## Legal proceedings

### Jurisdictions

- **UK** — the ICO issued formal questions; no penalty.
- **EU** — no formal proceedings; Microsoft is delaying the rollout.
- **USA** — no federal proceedings.

### Legal basis (theoretical)

- **GDPR art. 25** — privacy by design. Recall enabled by default without encryption = a classic violation.
- **GDPR art. 32** — security of processing. Plaintext SQLite = unacceptable.
- **GDPR art. 35** — DPIA (Data Protection Impact Assessment). Required before deployment.
- **National labor laws** — Recall on company computers is a textbook question about **employee monitoring**. In many jurisdictions (including PL, DE, and FR) it requires union consent or consultation.

### Key milestones

| Date | Stage |
|------|------|
| 20 May 2024 | Announcement |
| 13 June 2024 | Halt |
| April 2025 | Limited rollout |
| Ongoing | Dialogue with EU DPAs |

---

## Penalties and settlements

**No penalties.** No formal proceedings. Microsoft halted the rollout ahead of regulatory intervention.

---

## Precedents and implications

### For EU law

- **A textbook case** of violating **privacy by design** (GDPR art. 25). Had Microsoft deployed Recall in its original form in the EU, the DPAs (most likely the Irish DPC, possibly the BSI in Germany) would have imposed penalties.
- **Impetus for the AI Act** — Recall is an example of AI-powered surveillance where privacy-by-design problems are plain.
- **The EDPB may in the future** issue **guidelines on AI recall/memory systems**.

### For labor law

- **Employee monitoring**: Recall on a company computer = full recording of an employee's activity. In most EU jurisdictions this **requires union consent, employee consultation, and notification**.
- **Polish Labor Code art. 22²** — monitoring is permitted, but with notice.
- **A labor court could** rule that Recall constitutes excessive monitoring.

### For Big Tech practice

- **"Launch first, security later"** as an anti-pattern. Microsoft showed that even the largest tech company can announce something that is a security disaster. After the **Recall disaster**, Google, Apple, and Meta tightened their **security review** before unveiling AI features.
- **Kevin Beaumont as a "canary"** — independent researchers are the **last line of defense** against Big Tech mistakes.
- **Signals (Signal, Brave)** — a demonstration that messengers can block OS-level features.

---

## Class actions

No class actions (the feature was halted before mass deployment).

---

## Conclusions for citizens

### What does this mean for me?

If you have a Copilot+ PC (a new laptop from 2024 onward with an NPU) — **Recall may be enabled**. By default **it is not** (after the 2024 halt) — but check. If you use an older Windows 10/11 computer without Copilot+: **Recall does not run on your machine**.

If you use a work computer — **ask your IT administrator** whether Recall is disabled. In many companies (especially law, medical, and banking firms), Recall may be **disabled by default** via Group Policy.

### How to protect yourself

**On a personal Copilot+ PC:**
1. **During setup** — when asked about Recall, choose **"Don't enable."**
2. If you already enabled it: **Settings → Privacy & security → Recall & snapshots** → turn it off.
3. **Uninstall Recall**: Windows Features control panel → uncheck Recall.
4. **For sensitive applications** — add them to the Recall blocklist (1Password, Bitwarden, banks).

**On a work computer:**
5. Ask IT / the Data Protection Officer about policy.
6. If Recall is enabled — consider a **written objection** citing art. 22² of the Polish Labor Code (excessive monitoring).

**For users of sensitive data:**
7. **Signal Desktop** — blocks Recall by default within Signal sessions.
8. **Brave, AdGuard** — block Recall.
9. **Messengers with auto-destruct** (Signal disappearing messages) — additional protection.

### What rights do I have?

**In the EU (GDPR):**
- **Right to information** (art. 13) — the employer must inform you if they use Recall.
- **Right to object** (art. 21) — against monitoring without a legal basis.
- **DPIA** — the employer must carry out an impact assessment.

**In Poland:**
- **Art. 22² of the Labor Code** — monitoring is permitted but with limitations and notice.
- **Art. 11¹ of the Labor Code** — the employer may not violate an employee's personal rights.
- **UODO** — complaints about excessive monitoring.

### A note for mediators, lawyers, and system administrators

**If you are a lawyer or a mediator** — Recall on a work computer is a **prima facie breach of professional secrecy** (art. 180 of the Polish Code of Criminal Procedure). Client data ends up in Microsoft's database (even if local — potentially accessible to hackers). **Recommendation**: Disable Recall and have your colleagues in the firm do the same.

**If you are a mediator** — notes from mediation can be **captured** by Recall. A client in mediation has a right to expect confidentiality. The recommendation is the same as for lawyers.

**If you are an IT administrator** — in Active Directory / Intune, **disable Recall** via Group Policy on all company computers. Especially in regulated industries (law, medicine, banking, insurance, HR). Respect **art. 25 GDPR (privacy by default)**.

**As a mediator with a client in crisis** — ask the client whether they have a Copilot+ PC and whether Recall is enabled. This can be a hidden vector for **cyberstalking** by a former partner who has physical access to the victim's computer.

---

## Context

- **"Canary in the coal mine"** — Kevin Beaumont in 2024 once again played the role of the canary warning of disaster. Earlier cases: WannaCry 2017, ProxyLogon 2021. DoublePulsar is the name of his blog, taken from the NSA tool (previously stolen by the Shadow Brokers and used in WannaCry) — cybersec geek irony.
- **Xbox One E3 parallel** — many commentators compared the Recall announcement to the Xbox One E3 2013 reveal, when Microsoft announced always-online requirements and Kinect camera monitoring. A massive negative reaction. Microsoft had to cancel most of the plans the same year. The same pattern: **executives misaligned with customers, botched messaging**.
- **Signal's Screen Security** (3 June 2024) — **the first commercial program** to **actively block an OS-level Microsoft feature**. Meredith Whittaker (Signal's president): *"We're protecting our users from what is effectively always-on surveillance."* The API used: `SetWindowDisplayAffinity(hwnd, WDA_EXCLUDEFROMCAPTURE)` — added in Windows 10 1809, but **never widely adopted** until Recall.
- **TotalRecall in 50 lines** — Hagenah published the tool **with source code** on GitHub, which is an unusual move (exploits are usually reported privately). Hagenah's argument: the problem was **publicly visible**, so researchers should be able to reproduce it.
- **UK ICO vs. Microsoft** — John Edwards (UK Commissioner) approached Microsoft **the same week** Beaumont was publishing his warnings. Paradoxically, the ICO **could not** impose a fine (the feature had not yet been deployed), but **the threat of proceedings** was enough to make Microsoft pull back. This **demonstrates the effectiveness** of regulatory dialogue even without fines.
- **Polish context** — the UODO never issued an official position, but Polish experts (Panoptykon, the Panoptykon Foundation) wrote analyses warning against the feature. The Polish banking and legal sectors quickly declared Recall **unacceptable** on computers with access to client data.
- **"AI PC hype"** — Recall was the flagship product of the **Microsoft Copilot+ PC** strategy. Intel, AMD, and Qualcomm invested in **NPUs** (Neural Processing Units). After the Recall halt, the entire "AI PC" category lost momentum. In 2025 **Copilot+ PC sales came in below expectations**; Microsoft lost out on pushing the narrative.
- **EU AI Act categorization** — Recall is potentially a **"high-risk AI system"** under art. 6 of the AI Act (in force 2024–2026). AI-based employee monitoring is explicitly high-risk. Microsoft would have to carry out a **conformity assessment** before deploying in the EU. That is one reason the EEA rollout is delayed.
- **Chinese paranoia** — in Chinese tech media, Recall was framed as an **"American spy tool."** The paradox: China has its own, far more invasive monitoring systems (Social Credit, CCTV+AI). But as a foreign actor, Microsoft met with heightened skepticism there.
- **Infostealers in paradise** — in 2024, cybersec specialists estimated that **more than 30% of all infostealer infections** could weaponize Recall. After the halt, the statistic only describes potential. But it shows the scale of the threat.
- **TotalRecall Reloaded (2025)** — Hagenah showed that **even with Windows Hello and encryption** data can be exfiltrated via **session hijacking** and **prompt injection**. Microsoft: *"not a realistic threat."* The cybersec community: *"tell that to infostealers."*
- **A precedent for "AI memory" systems** — Recall is one of the first attempts at **AI-powered memory** built into the OS. Analogous systems under experimental testing: **Apple Intelligence** (more restricted), **Google Project Astra**, **Meta AI Memory**. All of them now carry an **extra burden** of showing they learned from the Recall disaster.

---

## Sources

1. Microsoft Build 2024 keynote, 20 May 2024. Satya Nadella, Yusuf Mehdi. URL: https://build.microsoft.com/en-US/sessions (accessed: 2026-04-17)

2. Kevin Beaumont, "Stealing everything you've ever typed or viewed on your own Windows PC is now possible with two lines of code — inside the Copilot+ Recall disaster," DoublePulsar, 22 May 2024. URL: https://doublepulsar.com/ (accessed: 2026-04-17)

3. Kevin Beaumont, "Microsoft Recall on Copilot+ PC: testing the security and privacy implications," DoublePulsar, April 2025.

4. Alexander Hagenah, "TotalRecall," GitHub, 7 June 2024. URL: https://github.com/xaitax/TotalRecall (accessed: 2026-04-17)

5. Pavan Davuluri, "Update on the Recall (preview) feature for Copilot+ PCs," Windows Experience Blog, 13 June 2024. URL: https://blogs.windows.com (accessed: 2026-04-17)

6. UK Information Commissioner's Office, "Enquiries into Microsoft Recall," May 2024 — press release.

7. Signal Foundation, "Signal Desktop on Windows 11 now includes Screen Security," 3 June 2024.

8. Windows Recall — Wikipedia. URL: https://en.wikipedia.org/wiki/Windows_Recall (accessed: 2026-04-17)

9. Nihad A. Hassan, "Privacy and security risks surrounding Microsoft Recall," TechTarget, 4 November 2024.

10. Alexander Hagenah, "TotalRecall Reloaded," GitHub, 2025.

11. TechRadar, "Microsoft's Recall tool is back and still has major security concerns," 2026.

12. Microsoft blog, "Privacy and control for Recall," 2024.

13. EU AI Act (Regulation (EU) 2024/1689), in particular art. 6 (high-risk AI systems).

14. Polish Labor Code, art. 22² (monitoring).

15. EDPB, "Guidelines 05/2020 on consent under Regulation 2016/679" (privacy-by-design context).

---

*Last updated: 2026-04-17*
*Card in database: C04_microsoft_recall.md*
