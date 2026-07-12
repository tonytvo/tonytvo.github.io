---
title: "Maximizing impact: Measuring the ROI of GenAI in the SDLC - Bruno Passos | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Bruno Passos (Booking.com) on rolling out GenAI to ~3,500 developers — why 'hours saved' is BS, the shift to throughput metrics (30% more MRs, 70% lighter), the Sourcegraph/Cody partnership, mapping a 14-year monolith migration, ethical director-level reporting, vibe-coding VPs in Windsurf, and the business challenges of adoption."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Maximizing impact: Measuring the ROI of GenAI in the SDLC - Bruno Passos (Talk Outline)

> A Craft 2025 talk by **Bruno Passos**, who leads the **product side of developer experience at Booking.com** and, about a year before the talk, began leading the whole **GenAI rollout** — how Booking enables ~3,500 developers to take advantage of generative AI. He opens with a caveat: he is "by no means an expert in measuring it"; this is what they are *trying* to do, they have made progress "over the normal BS of hours saved," and "we are right at the beginning… take it with a pinch of salt." Structure he promises: (1) an overview of Booking.com — its scale and how its development culture has shifted over time; (2) their explorations with GenAI and how they measured it; (3) the business challenges faced while exploring generative AI. Delivered in a post-lunch "nap time" slot ("I hope you had a coffee… let's get out of here energized").

---

## 1. Booking.com — Mission and Scale

### 1.1 The mission and the "connected trip"
- Mission: **"enable everyone to experience the world,"** delivered by leveraging technology.
- Travel is "one of the most stressful things you can do"; the goal is to create the **connected trip**.
- ~5 years ago the focus was **primarily selling hotels** — laser-focused on one thing.
- The market shifted to **multiple verticals**: attractions, hotels, cars, flights.
- Integrating those verticals into the connected trip is one of today's core challenges — and one of the problems Bruno's team approaches through GenAI.

### 1.2 Scale statistics
- One of the **largest online travel agencies** in the world.
- Sells **more than 1.5 million rooms every day**.
- **~3,500 developers** ("approaching 3½ thousand").
- **250+ merge requests** in a given year (stats "fairly out of date," conveying the gist).
- **2.8 million CI pipelines** run in a given year.
- The company is **approaching 30 years old**.

---

## 2. The Old Culture — Ruthless Experimentation and Its Debt

### 2.1 An A/B-test / feature-flag "religion"
- Up until ~5 years ago (going back ~10 years), the main focus was to **experiment via A/B tests and feature flags**.
- They run **more than 1,000 experiments at a given time** (still do, but now with a different mindset).
- It became a **religious-like culture**: morning brainstorms across teams → hypotheses → push live via a "beautiful experiment tool" giving hundreds/thousands of data points.
- Primary success metric: **did it cause more bookings?** (ROI-as-bookings).

### 2.2 What the culture cost engineering
- It got them to where they are — a massively successful company — but **added a ton of load to the codebase**.
- They **over-optimized the website**; a ~10-year-old screenshot shows a convoluted UI reflecting "experiment ruthlessly" (e.g., "new deals listed daily" boxes with tens of experiments each).
- They drifted **farther from the user** and deeper into "the obsession of running experiments."
- The codebase became a huge monolith — actually **three primary monoliths**: users enter the **app monolith**, then a **book monolith** — "essentially where everybody collaborates."

### 2.3 Testing, firefighting, and dead code
- They did **very little testing** — the experiment culture took over validation: ship code between two feature flags, watch the graphs; if graphs drop, switch it off.
- This made them **expert firefighters** — able to recover the website quickly when it went down.
- The **"9 out of 10 experiments fail"** fact got broadcast internally: *why would an engineer focus on quality when 9/10 efforts won't survive?*
- Features toggled off were **left lingering** in the code → today they clear a **huge amount of tech debt**: features gone from the site but still in code.
- Sometimes features **magically switched on** without being there — causing **outages or vulnerabilities**. "Chaos."

### 2.4 The maturing culture
- A screenshot from "a couple of weeks ago" shows a **more mature, simpler, more direct website** — guiding users to what Booking wants them to do rather than what it wants to experiment on.
- Caveat: they **still experiment ruthlessly**, but a **top-down-and-back culture shift** changed how features roll out.

### 2.5 The mission that follows from the debt
- With **big code comes big problems**: the majority of time went to **toil**, not new features or even maintenance.
- Understanding the codebase "took ages"; they relied heavily on **tribal knowledge** that was no longer effective.
- The GenAI team's biggest mission: **re-platform the codebase** — something that would otherwise take forever.

---

## 3. Explorations with GenAI — Sourcegraph and Cody

### 3.1 Why Cody / Sourcegraph
- **Sourcegraph** makes **Cody**, an extension for **JetBrains** and **VS Code** that brings GenAI into the IDE.
- Booking had used **Sourcegraph (code) search** for **almost 5 years** — highly recommended for orgs with a big monolith/codebase; it makes searching code and extracting valuable info dead simple.
- Crucial consequence: their code was **already indexed**, so **Cody had full context of "our mess."** Easy choice.
- They already **knew the folks at Sourcegraph** and where they wanted to take Cody.

### 3.2 A partnership, not just a tool
- Strategy: **"we don't just want to use your tool — bring your knowledge of GenAI into the office."**
- Gave Sourcegraph engineers access to **both offices and the codebase** so they could **live the problem** alongside Booking.
- Ran **many hackathons** — but **strategically targeted**, not global across all 3,500 devs.
- Started on the **hairy/legacy codebase** (not the newer pieces) to attack re-platforming.
- Sourcegraph built **training materials** ("how to prompt," "how to give context to an LLM," "what is an LLM?"); Booking distilled these to the company to build **targeted GenAI buzz**.

### 3.3 The first (bad) way to measure impact — "hours saved"
- Bruno's first question to Sourcegraph: **"How do we measure if this is working?"**
- Their answer: **"That's easy — hours saved."** They claimed Sourcegraph was saving Booking **~40,000 hours** for developers.
- Bruno's objection: **he didn't know where those hours were going.** "A pile of BS."
- The number was survey-based, and the survey covered only **tens** of developers → **no statistical value** (and that's fine, he says).
- Counter-proposal within the partnership: **pair to discover new ways to measure the ROI of GenAI.**

### 3.4 The KPI roadmap (short / mid / long term)
- Built a plan defining **major KPIs** and metrics within them, split into **short-, mid-, and long-term** (where "long-term" = **1 year**; "mid-term" = very short). Reporting value expected nearer the year mark, not that value only appears then.
- **Short-term:** reviewing merge requests (no engineer likes opening MRs — it's vulnerable — or reviewing others' MRs, often unrelated to their day-to-day at Booking's scale); time to **debug** features.
- **Mid-term:** **quality** (acknowledged: "we haven't yet been fully successful, but that's the goal").
- **Long-term:** understand **codebase sites/dead code** — spot and delete unused feature flags/experiments and **non-performant code** → feeding the main goal: **faster tech modernization** (extract pieces into separate services → enable the connected trip).

---

## 4. The 2024 Journey — A Timeline

### 4.1 January 2024 — Adoption problem
- Focus: **adoption**. Big caveat: **folks weren't using Cody for weeks.**
- Rolled out trainings, office hours, more Cody material — and **no one was using it.**
- KPI at this stage was still **hours saved**.

### 4.2 ~July 2024 — Trainings and the knowledge gap
- Talking to developers (and using **DX / getDX**, which runs clever surveys **on Slack** instead of Google Docs) they got a **92% survey response rate**.
- The insight: the missing ingredient was **knowledge** — developers were **ignorant about the topic**, so pushing adoption prematurely was pointless.
- Focused on **trainings**: prompting, how prompts change results, giving context.

### 4.3 Worked example — the DMA re-platforming trial
- Some developers were moving code fast for **DMA** (EU regulation) — a problem they'd worked on for **~a year** before Cody.
- Booking gave them Cody and **stayed quiet**; first reaction: "really cool, we loved it," but it **drew** (tied) with a developer on time-to-done.
- Sourcegraph engineers then showed that an **LLM has an expertise** — and (back then) **not all available LLMs were good** at drilling into Booking's **Perl** codebase to translate between languages.
- They built a **framework**: inject part of the code + pass context → it tells you **which LLM will do the best job**.

### 4.4 Removing the token cap and enabling LLM choice
- In January, Sourcegraph gave **one LLM for the whole org** and **capped tokens** — "that didn't work."
- **First partnership win:** remove the token limit (to explore) and allow **choice of LLM**.
- Evolution: from **one LLM for the company** → **different LLMs for the company** → **per-developer LLM choice** by IDE task — "made things way more possible."

### 4.5 Preparing business units for POCs
- Defined **new KPIs**, then prepared **7 business units** (some with **1,000+ developers**) for POCs.
- Change management is hard at that scale — so they **recruited passionate developers** into monthly hackathons.

### 4.6 December 2024 — Throughput beats "hours saved"
- Measured **throughput before vs. after Cody** — "much better than hours saved, still not perfectly statistically sound."
- **Daily users** (defined as **12+ days/month ≈ 3 days/week**, catering to when devs want Cody) shipped **~30% more MRs** than those who never used it.
- Hidden second metric: those MRs were **~70% lighter (less code)**. **"What the hell does that mean? I still don't know."** Data is coming; next step is understanding **why** and whether quality/vulnerabilities/readability are better.
- **API layer in front of Cody** (rare among providers, per Bruno): enabled integrating Cody into **Slack, Jira**, and other tools.

### 4.7 Three concrete things built in 2024
1. **14-year monolith migration mapping** — an ML-side calculation estimated migrating all legacy code out of the monolith into services would take **~14 years**. Using code search + structured prompts (with Sourcegraph engineers on-site), they built a **dependency graph** of the massive monolith — finally seeing its perimeters — so they could pick which pieces to extract **first, second, third**.
2. **GraphQL code generation** — first they "threw everything into an LLM" hoping for magic; it failed. They **structured** it: pass bits of info, break down the problem. **300+ GraphQL services**; defining the schema took **~1.2 million tokens** — doesn't fit one context window, so having Sourcegraph brainstorm on-site was vital.
3. **Code review** — early review bots were **distracting** (no situational context). They learned review must be **highly targeted** to what the developer is doing, with **IDE integration** to steer it.

---

## 5. The 2025 Journey and Vision

### 5.1 January 2025 — Deeper with business units
- Going deeper with different business units, approached differently: passionate people now join as **"advocates"** of a pseudo GenAI team.
- Pair with a business unit **over 2 days**: **Day 1** a crash course ("beat a dead horse" on prompting, context, what an LLM does — to level the field); **Day 2** bring **that unit's own problems** to attempt with GenAI. Sourcegraph is in the office for these sessions.

### 5.2 Ethical reporting — director level only
- Sourcegraph processes Booking's data and returns **IDs**, which Booking runs through its **staff API** to see who does what with GenAI.
- Conscious decision: **limit visibility (even for the team) and reporting to the director level** — **never the individual** — for **ethical purposes** (individual-level data could be used for **performance reviews**, which he questions is *ever* the right thing to do).

### 5.3 April–June 2025 — Footprint and quality
- **April:** measured the **percentage of code Cody had a footprint on** → **40%** of what "comes out the door" is generated by Cody. Open question: **what is its quality?**
- **~June:** POCing new offerings and trying to **understand the quality** of the generated code — where they essentially are now.
- Current quest: knowing devs are more efficient and code is lighter, **obsess over quality** — vulnerabilities, readability, correctness.

### 5.4 Vision — self-healing services (December? "living in the forest")
- Referenced **Kent Beck's keynote** on **"forest and desert"** — "we're living in the forest, so don't hold me to December."
- **Self-healing services:** feed the **CI pipeline to an LLM** → it suggests changes **as merge requests** (GitLab shop → MR, not PR).
- **Shift CI left into the IDE** so developers see problems **before pushing**.
- Anticipate **vulnerabilities, security issues, bugs** by learning from the past.

---

## 6. Business Challenges

### 6.1 Developers didn't want to use it
- Real quotes: "I don't want anything generative AI at all"; "good for non-coding questions" (someone used it for **pizza/lasagna recipes**); "if I'm going to have internal quality code, I'd rather do it myself."
- Citing **Cat Hicks'** (Kat) morning presentation: **43–45% of devs report feeling threatened by AI.** ("Kat, if you're listening — I'd love to talk.")

### 6.2 Traversing 7 massive business units
- Seven business units, each up to **VP level** — traversing them from a **centralized** team is a persistent challenge.

### 6.3 The Windsurf VP vibe-coding session
- Two weeks before the talk, Bruno put **VPs and senior directors in a room for 2½ hours** (hard to get them for that long).
- He spent **30 minutes** building an app with **Windsurf**, gave them **1 hour** to build their own, then **30 minutes** to demo. **Everyone demoed something** — people who "hadn't coded for decades" were able to **vibe-code**.
- A week later, **nearly every business-unit leader** asked to run the same with their unit — leaders seeing the value should make reaching developers easier.

### 6.4 Uneven skill levels → tailored training
- 3,500 developers arrive with different **engineering skills** and different **GenAI knowledge**.
- Biggest feedback: training was **one level for everyone**. Fix: **pre-work / pre-training** to level everyone before the session.

### 6.5 Evaluating new tools and providers
- They stay **open and honest** with Sourcegraph — "we will try everything," in a fast-moving era.
- Biggest friction: a POC with a new provider takes **~3 months**, due to an **insanely big legal team** and a **very big security team** — so they **paired with legal/security to fast-track**.
- Created an **"intake committee"** ("I hate the word committee") to **log** everything developers want to try and **help them get there** — a **centralized bottleneck** so devs don't each contact risk/security.
- As training worked, devs went from **not wanting GenAI** to **flooding** the team with ideas — "we need to stop a little; we're a team of ~five."

### 6.6 The vendor-evaluation framework
- Built a **framework** to evaluate partners rather than get absorbed by a tool's demo/sales pitch.
- Asks: **what's the bare-minimum offering** to even begin trying the tool? And **how does the vendor measure ROI?**
- **No provider** could say how they measure ROI — it's **basically usage**, measured only to where a developer **creates a merge request**; they **don't know what reaches production**. Booking is pairing with **DX** to measure that.

---

## 7. Closing Messages

- Goal: go from **years of re-platforming to months**; share company progress in these talks over time.
- Vision restated: **declarative / self-healing code**, CI shifted all the way left, LLM-generated fixes as MRs — so **"today's code is no longer tomorrow's legacy."**
- **"Education is key"** and has been for Booking; they tailor and change education continuously; adoption now spans coding *and* other tools.
- Believes they'll use **multiple tools at once** — **Google** and **Amazon** also partner by bringing engineers on-site to "get their hands dirty" on the code.
- Cadence: **monthly posts** on the changing GenAI ecosystem; **quarterly hackathons** (framed as "twice a year," corrected to every quarter).
- The team: until January it was just Bruno; since January — program management (**Deborah, Zane**), product thinking (**Valerio**), and principal developers (**Matt, Jamie**) on R&D and holding business units' hands. ("None are for hire — don't take pictures.")
- Reframe of intent (aligned with leadership from the start): **not to let developers go**, but to **pair each developer with a "principal-level" AI** so they spend less time on monolith toil and more on **innovating in travel**.
- Invitation: QR code / his website has writing on the progress; DevEx "doesn't hold business logic, so there's no reason we shouldn't be talking."

---

## 8. Q&A

### 8.1 Q1 — Examples of GenAI's direct impact on developer productivity and code quality?
- **Code quality: no** — that's exactly the next endeavor (figuring out the **anatomy** of AI-generated code).
- **Productivity: yes** — the **30% efficiency** (more MRs if using GenAI daily); "we're seeing the signs."

### 8.2 Q2 — If GenAI succeeds enough that half the developers could be let go, what happens? Is that possible?
- **"I don't think it is."** Not how they think about it.
- Aligned with leadership from the beginning: **not here to let developers go**; the aim is a **principal-level developer (in the form of AI) pairing with each developer daily**, freeing them from monolith toil to **innovate in travel**.

### 8.3 Q3 — How do you encourage co-workers to learn and develop their own skills?
- Two-pronged: if adding GenAI to your org, **pair with your provider** — depending on company scale they may be more/less able to be in your office holding your hand. Bring that knowledge in.
- **All providers have education material** (Cody, Windsurf) — pick it up, distribute it however you share info internally.
- Above all: **try** — so much is changing that you just have to try.

### 8.4 Q3a — Do developers get dedicated work hours for learning, or is it their own decision?
- **Very loose** on education — they want people educated in what they do and want to train on.
- **Leadership buy-in was important** — leadership is interested and **encourages developers to learn**.

### 8.5 Q4 — Did you choose between multiple tools like Cody?
- **Cody** has been the tool so far (Sourcegraph, for the pairing ability).
- Now rolling out **Windsurf** to try → raises "how do you measure between the two?"
- Approach: instead of org-wide rollout, use **cohorts** — a section gets **Windsurf**, another **Cursor**, and they want to try **Amazon Q** — comparing **throughput** and (aspirationally) **quality** across providers.

### 8.6 Q5 — Challenges integrating GenAI into existing workflows, and how addressed?
- Another reason for Cody: it **integrated with most of Booking's IDEs**.
- **Mobile developers** still "suffer" with access to GenAI; **Windsurf** attempts to solve that but it's "not their wheelhouse." Cody worked because it integrated with **JetBrains and Visual Studio** (Booking's main IDEs).
- As a **GitLab shop**, they're also pairing with **GitLab** to solve the SDLC within GitLab — tailoring the **GitLab interface** to the SDLC they want. "Super excited."

---

## People & References Cited

- **Bruno Passos** — speaker; leads product side of developer experience at Booking.com and the GenAI rollout; on social media as "Bruno Passos."
- **Team:** Deborah, Zane (program management), Valerio (product thinking), Matt, Jamie (principal developers, R&D + business-unit enablement).
- **Cat Hicks (Kat)** — cited for the **43–45% of devs feel threatened by AI** stat, from her morning Craft 2025 presentation.
- **Kent Beck** — his **"forest and desert"** keynote referenced for the "we're in the forest" metaphor.
- **Companies / tools:** Booking.com, **Sourcegraph** (code search + **Cody**), **DX / getDX** (Slack-based surveys, ROI/production measurement), **Windsurf**, **Cursor**, **Amazon Q**, **Google** and **Amazon** (partner engineers on-site), **GitLab** (SDLC tooling), JetBrains, Visual Studio.
- **Concepts:** connected trip, ruthless A/B experimentation ("9 of 10 fail"), three Perl monoliths (app + book), tech debt / dead code / feature flags, firefighting, "hours saved" (~40,000) as flawed metric, throughput KPIs (30% more MRs, 70% lighter code), short/mid/long-term KPI roadmap, LLM-selection framework, per-developer LLM choice, API layer in front of Cody, 14-year monolith migration, dependency-graph mapping, GraphQL schema generation (300+ services, ~1.2M tokens), director-level (not individual) reporting for ethics, self-healing services / shift-left CI, intake committee, vendor-evaluation framework, cohort-based provider comparison, DMA (EU regulation) migration example.

---

*Video: https://www.youtube.com/watch?v=zmj-KfvH2gE — Transcript via yt-transcript.sh; outline generated from the transcript.*
