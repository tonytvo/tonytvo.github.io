---
title: "Governance Without the Red Tape – Sarah Wells | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Sarah Wells on governance that speeds teams up rather than slowing them down — governance's image problem, why change advisory boards don't work, how AI accelerates both external threats and code volume, the three governance challenges AI worsens (ownership, review volume, security), and three concrete practices: foundations (service catalog, change tracking, SBOMs), choices (boring tech, tech radar, architecture advice process), and guardrails (policy vs. standard vs. guardrail, checklists, Sigstore/SLSA/OpenSSF, progressive delivery)."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Governance Without the Red Tape – Sarah Wells (Talk Outline)

> A **Craft 2026** talk by **Sarah Wells** — 11-year veteran of the **Financial Times** (senior engineer → principal engineer → head of platform engineering groups), now working in **security engineering**. She defines governance as "the set of **principles, practices, and tools that help teams make consistent, informed, and safe technical decisions**" and argues it can both **protect you and speed you up** — but only if implemented well. Structure: governance's image problem (CABs) → why we now need governance (AI-accelerated threats + AI-transformed code) → good governance = "yes, safely" → three practices (foundations, choices, guardrails) → getting it right → Q&A. She notes a **QR code / URL** at the end links to her slides and all references, so the audience needn't scribble notes.

---

## 1. Governance Has an Image Problem

### 1.1 Nobody has excited hallway talks about governance
- Governance "has an image problem" — you don't hear people having **excited hallway conversations** about governance, policies, and guardrails.
- But it's really important: get it wrong and it **costs your company a great deal of money**; get it right and it has **high impact on delivering value**.

### 1.2 The definition sounds enabling
- Governance = principles, practices, and tools for **consistent, informed, safe technical decisions**.
- That sounds like something **enabling teams rather than gatekeeping** them.

### 1.3 But the lived experience is a gate
- The experience most of us had (especially when she started ~**25 years ago**): governance as **a gate** — someone standing in front saying "No, fill out this form before you can release."

---

## 2. Case Study: Change Advisory Boards (CABs)

### 2.1 What a CAB is
- A **Change Advisory Board** reviews all changes going into production.
- It typically includes people from **infrastructure and development teams** deciding "is this safe to release to production?"
- (~A third of the audience had worked somewhere with a CAB.)

### 2.2 The FT's original release process
- When she started at the FT, the process was: complete code → **CAB meeting to release to staging on a Tuesday** → if testing went well, release to production **one Saturday a month**.
- They did **12 releases a year** — it's a newspaper; they couldn't release while still publishing news.
- Lucky to do **business news**, so on a Saturday there were usually a few hours where journalists didn't need to publish.

### 2.3 From 12 to 20,000 releases a year
- By the time she left the FT, they were doing **20,000 releases a year** — a shift driven largely by **changing how they did governance**.

### 2.4 We've known for a decade CABs don't help
- **Accelerate** (out ~8 years ago / "a decade ago") showed **approval by an external body doesn't increase the stability** of production systems.
- Logic: how would an external group **know more than you** about whether your change is sensible? It's **box-ticking**.
- It might catch two teams changing the same area — but there are **better ways** (e.g., structure the company so two teams aren't in the same code).

### 2.5 CABs slow you down (DORA metrics)
- On **DORA/Accelerate metrics**, CABs give **no improvement in change failure rate** but a **much longer cycle time** between finishing and going live.

### 2.6 The FCA research
- CABs are popular in **financial institutions**; in the UK the **Financial Conduct Authority (FCA)** researched them.
- **93% of major changes get approved**; some companies **hadn't rejected a single change** in an entire year.
- The average **post-CAB failure rate of major changes was 3.8%** — CABs weren't stopping problems, just slowing everyone down ("a nice conversation where you get some tea").

---

## 3. Why We Now Need Governance

### 3.1 Modern complexity and risk demand it
- Modern software has **so much complexity and risk** — third parties, integration code, and now **code written by agents** — that you **need some form of governance** to feel confident it'll all work.

### 3.2 The NPM supply-chain attacks
- A series of attacks on **NPM** over the last year (asks who works in the Node ecosystem).
- A **phishing attack**: a very realistic email from "NPM support" **compromised a maintainer's account** and injected malware into packages like **chalk and debug** — collectively downloaded over **2.6 billion times a week**.
- A **second iteration** was **self-propagating**, stealing tokens and trying to compromise other packages — and the attacks keep continuing.

### 3.3 Could you even tell you're compromised?
- The governance question: **could you tell you'd pulled down a compromised version?**
- Many organizations she worked with **couldn't answer** — they didn't know **what dependencies** they had across their services, or whether they'd **rebuilt a library** while a compromised version was live.

### 3.4 AI is accelerating external threats
- AI makes attacks **quicker and cheaper** — even before hype about "**mythos**"; people use **standard agents** to do this.
- Last year the average **breakout time** (getting beyond the initial compromise) was **29 minutes**; the shortest was about **27 seconds**.
- The **first documented case** of an attack largely done by an AI: the AI was told "you are a pen tester, test our service."
- **87% of orgs** were targeted by an **AI-powered cyber attack in 2025**.
- **AI phishing achieves a ~60% success rate** against humans — nearly **4× higher** than traditional campaigns (AIs write very convincing emails).

### 3.5 AI is also transforming your own code
- AI transforming your code creates its **own governance challenges**; lots of people started talking about governance "in the last month or so," wondering how to stay safe.
- Her research (already out of date because everything changes so fast):
  - **90% of teams** use AI coding tools as of end of 2025 (suspects it's higher now).
  - **42% of committed code** is now AI-generated.
  - **The Pragmatic Engineer** survey (~1,000 respondents): **95%** use tools weekly.
  - Most engineers use **2–4 different tools**; **15% use five or more** ("a bit overwhelming").

### 3.6 Governance has not kept up
- Only **45% of organizations** have **formal AI usage policies** — so 95% use tools but most don't know the rules.
- **35% of developers** were using AI tools via **personal accounts** — terrifying from a security standpoint: **your organization's data shared** with a company you know nothing about.
- **96% of engineers don't trust AI code**, but only **~48% always verify before committing** — "I don't trust it, but I don't have time to check it."

---

## 4. Three Governance Challenges AI Worsens

### 4.1 Ownership
- Processes assume **someone owns the code**.
- Code review let you ask questions — but now **even the committer may not understand what's in it**; how do you find the **intent** or why a decision was made?

### 4.2 Review volume
- Far more code is coming through; existing **review processes struggle** with the volume.
- She thinks we'll **inevitably move away from code reviews** — they become too much of a bottleneck. If an AI writes **8,000 lines**, you're not going to read it.

### 4.3 Security
- AI **doesn't know your standards or policies**, and agents are **not very good at writing secure code**.
- **Veracode** tested (October, last year) the security of **over 100 LLMs**: in **45% of tasks the models introduced a known security flaw**.
- Security review tools (she works "a bit with Claude") keep improving, but the **context of your organization** and what you expect is harder to guarantee.
- AI is "just scaling up the existing challenges"; she's always found **PRs frustrating** and less rewarding than working with someone to understand what they're building.

---

## 5. Good Governance = "Yes, Safely"

### 5.1 It's an implementation problem, not just image
- We need governance that **speeds people up rather than slowing them down** — easy to say, but the problem is **implementation**, not just image.
- Often governance is **43 documents** engineers must read — and security/compliance **think you've read them** ("it's in the standard").
- Even if you read them all, **would you know when they get updated?** No one tells you.

### 5.2 DORA capabilities point the way
- **DORA capabilities** associated with high performance mostly relate to **knowing what's happening** in your organization: **version control, streamlined change approval, monitoring and observability, fast feedback**.
- We can have governance **embedded in how we work** — or at least not slowing us down.

### 5.3 Bring engineering skills to governance
- Compliance and infrastructure teams often **lack software development skills**.
- Adding those skills — using **code (and AI)** to solve governance problems — greatly **speeds up other teams**.

### 5.4 Governance is a culture change too
- "Good governance is not about saying no — it's about **saying yes safely**."
- Sometimes it's a culture change: if a governance team's only interface is **opening a Jira ticket** (or "I'll put that on our backlog"), maybe they need a **Slack channel** and a way for people to talk to them.

### 5.5 Goal 1 — Clarity
- She's never met engineers who don't want to do the right thing — **they just don't know what the right thing is**.
- Question: **can I easily tell how to do something that keeps the organization safe?**

### 5.6 Goal 2 — Consistency
- Humans are **bad at doing the same thing repeatedly without mistakes**.
- **Automation** helps — and that's **not AI agents**, it's **scripts / fully automated things** you know will be done the same way every time.

### 5.7 Goal 3 — Alignment
- People don't **magically align**; governance should help align people, but it takes **effort**.
- The **Spotify model** (Henrik Kniberg): **autonomy isn't enough** — you must also be **aligned**, using autonomy to hit a particular direction.
- Without a shared direction: one team is **building a bridge** while another is **building a tunnel** — she's repeatedly seen teams doing the exact same work because they never spoke.

---

## 6. Practice 1 — Foundations (Know Your Estate)

> "You can't govern what you don't understand."

### 6.1 Foundation A — the service catalog / inventory
- She still goes into orgs where nobody can answer **"who owns this service?"** — hard with many services.
- The common answer ("ask my manager, he's been here 10 years") **doesn't scale** and fails when they leave.

### 6.2 A spreadsheet is a fine start (don't over-engineer)
- Engineers "almost always want to install **Backstage**" because it's cool to play with — but **a spreadsheet or Confluence page is a good start**.
- You must **keep it up to date**, but unless you're like **Monzo** (3,000–4,000 microservices), you don't build services often enough to need more.

### 6.3 Why the catalog matters (the incident scenario)
- During an incident: "who owns this?" → "**Claire, but she left 6 months ago**" → docs **not updated in 5 years** → written in **a language no one here knows**.
- This is why you must understand what you already have — it's **table stakes**.

### 6.4 Shadow AI makes it worse
- With developers using AI tools via **personal accounts**, you don't know **what tools are used or where your information goes**.
- **Legal** never saw the licenses/IP risks; **compliance** can't check whether policies apply.
- The catalog is about **making the invisible visible** — then you can rationalize and improve.

### 6.5 Foundation B — tracking changes
- Know **what changed in production and when** — many companies find this hard with no single place to see today's changes.
- At the FT they had a **change API**: every team **called it on each production release**.
- They made it easy — provided integrations, wrote a **CircleCI orb**, wrote **shell scripts**.
- The **product team tracked feature-flag on/off** events, so you could see "we flipped this flag, then there was a problem."
- Because it was an **open API**, anybody could use it.

### 6.6 Foundation C — SBOMs
- **SBOMs** = machine-readable inventories of everything that went into building a piece of software, **generated automatically during release** and **queryable**.
- On a supply-chain vulnerability, you have "a good chance of finding out whether you're affected."
- A survey (last year): only **11% of engineering orgs generate an SBOM for all their stuff**.
- A large part of any modern app is **open source you've never looked at**.
- The **EU Cyber Resilience Act** will **mandate SBOMs** for products sold into European markets — in force **December 2027**, with **reporting requirements from September** this year. If you don't have them, start reading up now.

### 6.7 What strong foundations give you
- A **clear picture**: how many services, how many **unowned** services.
- The FT kept a **web page of all unowned services**, constantly asking "who owns this? Who can we assign it to?"
- See where to **pay attention**: outdated technology, systems **nobody understands**.
- They asked teams to rate, **1–5, their conviction** they could solve a problem with a service; a **low team average = a problem**.
- Foundations are also a **basis for automation** and automated checks.

---

## 7. Practice 2 — Choices (Smart Technology Decisions)

### 7.1 Technology changes; decisions must be revisited
- You don't get to decide once and never revisit — otherwise "I'd still be writing **Enterprise Java Beans**," and she's thankful she isn't.

### 7.2 "Choose Boring Technology" (Dan McKinley)
- Highly recommended and "quite amusing."
- **Dan McKinley**: choose **boring technology** that everyone uses and whose **failure cases are known**, and **save your innovation** for what's truly distinctive to your company.

### 7.3 Tool A — the Technology Radar
- Categorize the technologies in your org into **adopt / trial / assess / hold**:
  - **Adopt** — the thing we're using.
  - **Trial** — one team tests it (rather than five teams trying the same thing) and reports back if it's usable.
  - **Assess** — we like it but aren't quite ready to try.
  - **Hold** — "please don't write anything more in this; we want to get it out of the organization."
- Makes governance **visible** — anyone can see "should I use this? is another team already using something that helps?"

### 7.4 Tool B — the Technology Governance Group (TGG)
- An **architecture group** with an **open meeting** where anyone could propose a **significant cross-cutting change** for discussion.
- Influenced by the **architecture advice process** in **Andrew Harmel-Law's** book *Facilitating Software Architecture* (the FT did this before the book).

### 7.5 The key insight: work happens before the meeting
- The proposer's job is to **go talk to everyone affected or who has information** — so by the meeting, the nitty-gritty is dealt with and people are mostly **aligned**; the meeting is about **communication**.
- It **forces engineers to have those conversations**.
- Online during the pandemic, **50–60 people** attended; you could **listen**, but to **take part you had to have read the documents**.
- Many people **listened to learn how to make architectural decisions**.

### 7.6 Deciding what's "significant"
- She watched Slack channels and flagged things for the TGG.
- If it **affects other teams**, it's significant — bring it along; they also encouraged bringing things where **someone else might have useful information**.

### 7.7 Benefits of the choices process
- A **legitimate path for change**: "great — do an evaluation, write a **two-page document**, come talk to everybody."
- **Shared understanding** of what you're doing and where a technology doesn't match your estate.
- **Decisions get recorded** — she can't remember why she chose something six months ago, but if it's written down she can revisit the reason (even when "it turns out we were wrong").
- Net: **innovation in the right places**, **standardization** for the unexciting stuff, and **plans rather than chaos** (some chaos remains, but better).

---

## 8. Practice 3 — Guardrails

### 8.1 Policy vs. Standard vs. Guardrail
- She had an **hour-and-a-half conversation** defining these, so she wrote it down.
- **Policy** — the **high-level rule / statement of intent**, no technology detail, changes rarely (e.g., "**all data must be encrypted at rest**").
- **Standard** — more **actionable**, digging into requirements; may differ by service type (e.g., different encryption standards).
- **Guardrail** — the thing that **helps you just do it** / **automates** (e.g., **stops you deploying storage without encryption enabled**).
- Guardrails are about **making the right thing the easy thing**.

### 8.2 The paved road / golden path
- In platform engineering, the **golden path / paved road** is the great place to put guardrails, so engineers **don't have to read anything** — they're **guided in the right direction**.

### 8.3 The engineering checklist
- At the FT they had an **engineering checklist**, loosely ordered by the path to production.
- They **didn't include standard software-development activities** (teams know those) — only the things people **forget because they rarely do them**.

### 8.4 The Checklist Manifesto
- Reference: **Atul Gawande's *The Checklist Manifesto*** — checklists in **aviation and health care**, for the stuff that could be forgotten.
- Anecdote: starting every surgery with **everyone introducing themselves by name** makes **surgical mishaps much less likely** — when the nurse knows the surgeon's name, she's more likely to say "**that's the wrong leg**" (people do have the wrong leg removed).

### 8.5 How the checklist worked
- You **could click in and read the guardrails** — some did — but mostly you didn't need to; it was **baked into everything you were doing**.

### 8.6 Build guardrails into the build/release process
- The build/release pipeline is a natural place; **change/release logging** was part of their standard release process — powerful for **security**.

### 8.7 Sigstore
- **Sigstore** — an open-source project for software supply-chain security that **signs and verifies container images**; the whole chain is **auditable** and it's easy to add to CI. Do it once and every release benefits.

### 8.8 SBOM generation
- **Generate SBOMs** in the pipeline (a couple of competing standards) — helps **comply with the EU Cyber Resilience Act** and **find out whether you're affected by a vulnerability**.

### 8.9 SLSA
- **SLSA** — about **provenance and build integrity**; a checklist of standards/controls to **prevent tampering** and **prove software came from you**.
- Choose your **level of assurance** ("this artifact is **SLSA level three**") for a **common language**; integrates with CI tools.
- You're **turning rules into signals**.

### 8.10 Making good behavior visible — the System Operability Score (SOS)
- At the FT they had a **System Operability Score (SOS)**.
- They had poor **run books**, so they **scored every field** a run book should contain and **summed it into a single score**.
- It **didn't block deployment**, but you could **see the gaps** — teams fixed things because they could see how they were doing.
- One team went from **zero run books to 99% completed** because they were **competitive** and could see the number.
- Unexpected benefit: they gave every team a **ready-made OKR key result** because it was already being measured.
- They also **checked whether the text just said "to do"** — because that's not enough.

### 8.11 OpenSSF Scorecard
- **OpenSSF Scorecard** — runs in CI; checks whether **dependencies are pinned**, **branch protection**, **security policies**.
- A **visible signal** teams can see; **ramp it up** — turn on a few rules, then add more once teams are compliant.
- Someone at **Outcast** puts this **on the front page of the repo** — an incredibly good nudge; developers **don't want to make something go red** for the first time.

### 8.12 Keep weeding the garden
- A **mindset shift** toward **constant maintenance**: **update dependencies even when there's no change** — the opposite of the **big-bang upgrade**.

### 8.13 Guardrails for AI-generated code
- Changing fast; she gives three (likely to be different soon):
  - **Scanning tools** actively looking for **AI anti-patterns**.
  - **Tagging code written (or partly written) by AI** so you can identify it.
  - **Hooks** (e.g., "cloud hooks") that **deterministically run things at lifecycle points** — e.g., "run **`make pre-push`** before anything gets committed," as an actual executed script.

### 8.14 What effective guardrails give you
- **Catch problems early**, **clarity** (developers understand what good looks like), and **continuous security** (shift left, not a review every 6 months).

---

## 9. Getting Governance Right

### 9.1 Manual code review was never that rigorous
- A line that "spoke to" her: "**Manual code review was never as rigorous as we told ourselves.**"
- Not a new problem — reviews miss things because you pay attention to the **small bit**, not the larger picture; you catch small changes but **logic flaws are much harder**.

### 9.2 Progressive delivery replaces CABs
- **Progressive delivery** — **canary releases, gradual rollouts, automated checks** as part of release — is a great replacement for CABs.
- It **replaces bureaucracy with automation**.

### 9.3 AI makes good governance more urgent
- "**AI doesn't change what good governance looks like — it makes it more urgent to get it right.**"
- **Friction can now be vibe-coded away**: if a platform team has something laborious that people hate, they'll **write an alternative in a day and not tell you**.

### 9.4 Anyone can now ship code (the Chrome extension)
- AI coding tools mean **anyone can build**.
- She did a **security review for a Chrome extension** a **customer-success manager** wrote using **Claude** to move data between **Gmail** and their CS tool.
- Surprisingly, he'd **asked Claude how to make it secure** and it was **incredibly secure** — nothing needed fixing — but that's **exceptional**.
- In most orgs you **don't know** your CS manager is building a Chrome extension; it "probably has a **hard-coded API key**, and likely an **admin key**, because that's how things go wrong."

### 9.5 Good governance is largely invisible
- Good governance can be **largely invisible** to developers day-to-day: **helpful automation, clear guidelines, self-service tools**.
- Recap of the three practices: **foundations, choices, guardrails** — with a **QR code / URL** to the slides and all references.

---

## 10. Q&A

### 10.1 Q1 — Have you tried Mend for advising your dev toolchain (keeping dependencies current, flagging CVEs)?
- No, but she'll **look it up** afterward.
- There are loads of such tools; every time she hears about a new one she **adds it to her toolkit**.

### 10.2 Q2 — AI agents aren't good at secure code, but neither are humans — AI just makes the same mistakes at scale; yet it takes huge effort to upskill humans while it only takes harness engineering to steer agents, so isn't it easier?
- She **totally agrees**.
- Now that we're getting the **skills and harnesses**, she loves being able to go to **Claude for a security review** and have issues pointed out — **especially on the front end** (she's a back-end developer with no front-end skills).
- Being able to ask "**what have I done that's insecure?**" is really useful; she thinks we'll reach a point where that's a genuine benefit.

---

## People & References Cited

- **Sarah Wells** — speaker; ex-**Financial Times** (senior → principal engineer → head of platform engineering); works in **security engineering**.
- **Companies/orgs named:** Financial Times, Financial Conduct Authority (FCA), Monzo, Outcast, Mend (Q&A), NPM (chalk, debug), Gmail.
- **People/authors:** Dan McKinley (*Choose Boring Technology*), Andrew Harmel-Law (*Facilitating Software Architecture*, architecture advice process), Atul Gawande (*The Checklist Manifesto*), Henrik Kniberg (Spotify model).
- **Research/reports:** *Accelerate* / DORA metrics & capabilities, FCA CAB research (93% approved, 3.8% failure), Veracode LLM security test (45% introduced a known flaw), The Pragmatic Engineer AI-tools survey, SBOM adoption survey (11%).
- **Tools/standards:** Backstage, CircleCI (orb), Sigstore, SBOMs, SLSA (levels), OpenSSF Scorecard, Claude (security review), "cloud hooks" (`make pre-push`), technology radar (adopt/trial/assess/hold).
- **Regulations:** EU Cyber Resilience Act (reporting Sept, in force Dec 2027).
- **Concepts:** governance as enabling vs. gatekeeping; Change Advisory Boards; 12 → 20,000 releases/year; DORA change failure rate & cycle time; NPM supply-chain attacks; breakout time (29 min / 27s); AI-powered attacks (87%), AI phishing (60%); shadow AI / personal accounts; three AI challenges (ownership, review volume, security); clarity/consistency/alignment; autonomy vs. alignment ("bridge vs. tunnel"); service catalog; change API + feature-flag tracking; System Operability Score (SOS); policy vs. standard vs. guardrail; paved road / golden path; engineering checklist; progressive delivery (canaries); "friction vibe-coded away"; "governance is not about saying no, it's about saying yes safely"; harness engineering for secure code.

---

*Video: https://www.youtube.com/watch?v=Hmgq1511YHA — Transcript via yt-transcript.sh; outline generated from the transcript.*
