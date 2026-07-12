---
title: "Modernizing legacy through thousands of contextual tools per system - Tudor Girba | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Tudor Girba on moldable development — industrializing code reading by building thousands of small contextual tools, exactly as automated tests once industrialized testing, live-demoed on LifeWare's 35M-line Swiss insurance system in Glamorous Toolkit."
type: "reference"
tags: ["softwaredevelopment"]
---

# Modernizing legacy through thousands of contextual tools per system - Tudor Girba (Talk Outline)

> Tudor Girba (originally Romania, now Switzerland; **CEO of feenk**) modernizes legacy systems by creating **thousands of contextual tools per system**. His golden nugget for future developers: **"It can be much simpler to understand code."** The talk's spine: tests are little tools that once industrialized testing → **code reading** is stuck where testing was 25 years ago → do the same thing by turning "tests" into "tools" → a live demo on LifeWare → the method, **moldable development**.

---

## 1. Framing — Legacy and the Crowd

- Poll results: many work with legacy systems; **few love it**; **fewer** feel comfortable and highly efficient with it. "We can change that."
- feenk modernizes legacy **through thousands of contextual tools** — a phrase nobody in the room does. But everyone does **automatic testing**, and most have **thousands of tests**.

## 2. Tests Are Little Tools

- A **test is a tiny tool**: it runs functionality and **compresses** it into a signal of **green / yellow / red** — letting you make sense of something regardless of how large the functionality was. "A pretty impressive thing."

### 2.1 Before automation — manual regression didn't scale
- ~3 decades back, everyone did **manual regression testing**.
- Anecdote (first job, ~2001): a QA person "tested" by clicking. Girba: *"Did you throw your mouse away?"* — a mouse is only guaranteed for a **few hundred thousand clicks**; if you didn't wear it out, you didn't really test.
- Manual testing produced a manual report but **no coverage** — you couldn't cover the whole intricacy of the system.

### 2.2 The Wardley map of testing's evolution
- **Wardley map** = a notation for the **evolution** of concepts/artifacts/products. X-axis: four evolution phases (**genesis → … → commodity/accepted**). Y-axis: **visibility**.
- Top (visible): business/developers make decisions (e.g., **whether to release**) based on information about whether the system complies with expectations.
- That information moved from **manually produced → generated** (via a bit of specific coding).
- **Consequence — better conversations:** without coverage you only have impressions of *data points*, not a coherent model; with coverage you can build a **cohesive model** in your head.
- Manual testing meant per-item bespoke mechanics ("set up this server, wait 5 minutes, log in, then click"); testing made it **systematic** — the same little code pieces whether testing a tiny function or a whole system.
- The deep payoff: **hypothesis-driven decisions** — the **scientific method applied to every engineering context**.

### 2.3 The differentiator and what disappeared
- What made it possible: a **new development experience made of little tools/tests** — the totality of small pieces provides the whole picture.
- All the **processes built on "we can only manually test" went *boop*** — they disappeared once testing became an engineering discipline.

## 3. The Unexamined Cost — Reading Code

- Poll: nearly everyone reads code **more than half their time** (backed by good studies, thousands asked).
- But: **when did you last hear developers talk about *how* they read** (not the code, the *reading*)? Never. **Not explicit → never optimized** — and it's our **single largest expense**.
- **Take-home ask:** go home, talk about it, spend **at least 15 minutes a day** on how you read code.
- On the map, **code reading is in the synthesis part, bottom-left** — exactly **where testers were 25 years ago**. Fix it the same way: change **one tiny thing** — the word **"testing" → "tools."** Composable micro-tools answer the many other questions we have about systems.

## 4. Case Study — LifeWare (Swiss life-insurance systems)

### 4.1 Scale and history
- **~35M lines of code** (up to **~70M** counting all artifacts).
- Invests in software engineering as a **competitive advantage**: appeared as a case study in **Kent Beck's *TDD by Example* (2002)** — then the section on "is testing applicable to large systems?" where large = 250k lines / 250k tests; Beck's largest at the time was **4,000 tests running in 20 minutes**.
- Today: **150,000 tests still running in under 20 minutes** — an "exciting curve." Early adopter of **continuous delivery, trunk-based development, and cloud**.
- Next wave: **investing in tools** — **~2,000 little tools** in 2025 (vs. 4,000 tests in 2002).

### 4.2 How LifeWare works — TDD of the whole business
- Proposition to an insurer: **"just give us the data, only the data"** — they throw away the old policy system(s) (often duplicated from acquisitions) and **reverse-engineer a whole new system**, delivered on a fixed date, **at their own cost** — done successfully for **20+ years**.
- The data (sometimes arriving on **magnetic tapes**) holds not just each policy's history but **every document sent to the customer** (reviews, invoices, statements).
- Method: **replay all the data and build a system that produces pixel-identical documents** to the ones previously sent → **test-driven design of the whole business** from the exterior constraints inward.

### 4.3 Live demo — starting point
- Connected to a remote server / the company's dev environment. Ran **150,000+ tests**: would take **10 days** on a single machine; ran in **~18 minutes** (expected ~15).
- Two problems appear: **454 yellow tests** (invalidated assertions — hypothesis no longer holds) → go toward **business/domain**; and **18 vs 15 minutes** → go toward **ops**.

### 4.4 Business path — the Inspector and views
- Inspect the test-results object in an **Inspector** with **views**. First view groups failures by **comparison failure**; **36 failed for the same reason**.
- Double-click one → the raw **trace/log** ("how many of you look at console logs like this?") — reasonable but **not useful**.
- Switch the **view** to see the **actual document with the change highlighted (pink)**: the pattern is that **the insurer's CEO changed → all signatures changed → all signature assertions must be updated**.
- Take that document view **straight to business** — from inside the dev environment.
- Beyond TDD: TDD assumes you know the assertion first; here you often want to **see the narrative first, explore, then decide** ("not always hypothesis first"). Liking what you see → press a button to **auto-refactor the test** (tools aren't generic — they know about *this* specific problem). Then **batch-accept all 36 similar tests** — a daunting problem becomes trivial.

### 4.5 Ops path — from cluster to the slow test
- Inspect the **AWS cluster** (every developer on the 100+ team has on-demand access to **thousands of processors**).
- Views: machines & processor allocation → per-worker performance (spot a **spike**) → split by machine (one took longer) → inside the machine: workers → tasks → **red bubbles** = tasks longer than the one to their left (goal: **compress execution**, longest first).
- Drill to a **task with a ~5-minute test** (a planted `wait`) → open the test case in an **in-place editor**, remove the wait, **re-run** → test goes **green** and returns a result object with a **URL**; the **web application appears inside the environment**.
- **"I don't go to tools — tools come to me."** In the physical world you move between stations (or a factory floor brings tools to the material); in the **digital world any boundary is artificial** — you can manufacture any experience you need.
- Key point: **the editor was the *last* thing shown, not the first.** "Only when you know what to read does reading make sense." Always ask: **what tool/view helps me *not* read, but see through, this problem?**
- You don't always need a complete tool — reuse the same little tools and **switch course** to test another hypothesis (e.g., "the worker ran out of memory"). **Manufacture your experience at development time.**

### 4.6 Three scenarios recap
- 150k tests in 2025 ran faster than 4k tests in 2002 → **it scales; system size doesn't matter unless you do things manually.**
- From a developer start you could go toward **business** (converse) or **ops** — **never leaving the environment**. **"The I in IDE stands for *Integrated* — every time you leave, the I has failed."** Fix: make everything **come to where you are**.

## 5. A Harder Case — Polish translations for *only* the admin interface

- Requirement: a company opened a back office in another country (say **Poland**); add **Polish translations to only the admin interface** of one part of the system — not everything.
- Approach: take **one test case** (an admin use case) → **instrument the system** to see what actually executes → run an analysis listing **all translations involved from that execution point** → these are the places to change.
- Double-click a place → a **dedicated browser** built from a scripted query that combines **runtime + source-code** information → ask it to **rewrite just this snippet** and show the diff → **accept** to apply.
- Scale to full coverage: wrap it in a **job distributed over the cluster** → results list all places to change → double-click, **translate, accept** — now **coverage for the whole system**.

### 5.1 Ephemeral tools, decomposed questions
- Note the contrast: the *test* had a beautiful Polish UI; here you just have **code snippets/queries** — because the use case is **ephemeral** ("I have it now"), so you build **just enough tool** (no frame).
- The big question ("add Polish only to admin") decomposes into **leaf questions**: how to detect where to add translations, what was detected, how a translation looks, how a change looks — **each leaf answered by a little tool/view** in context.

## 6. Moldable Development — Roles, Metrics, and the Shift

### 6.1 Two roles
- **Stakeholder** (top): "**anyone with a stake in the system has the right to a question**."
- **Facilitator** (bottom, blue): **manufactures the answers** via tiny micro-tools; the **environment's job** is to help construct **larger narratives** from them. Views are **sometimes reused** (the refactoring case), **sometimes built from scratch**, and **compound over time**.

### 6.2 Where the budget goes vs. where it should
- Top = **how you use information**; bottom = **how you extract information**.
- Today most development budget goes into **manual inspection** (blue) — "digging through a mine for nuggets." Energy should shift to the **red (use)** part.

### 6.3 Guiding metrics
- **Time to answer** (bottom) and **time to question** (top) — *guides*, not optimization targets.
- To adopt moldable development, **start at the bottom: decrease time-to-answer** — and you'll discover the **real bottleneck is time-to-interesting-question**. This changes your relationship to systems, legacy or new.

### 6.4 The invitation
- The approach is **moldable development**; Girba is writing **"The Rewilding of Software Engineering"** with **Simon Wardley**, free/open-source at **moldabledevelopment.com** (written in the open; feedback wanted, especially on presentation).
- The body of work is public and works across **many technologies/languages**. Once you ask "**how do you read code?**", legacy becomes something to **leverage for new value**, not just defensively modernize.

## 7. Q&A

- **How much effort to keep tools working as the system evolves?** Same worry people had about tests 25 years ago ("now we double the code!"). If you **build tools to manage your tools**, it's **highly scalable** — just like tests.
- **How do you manage thousands of tools without being overwhelmed?** You never see thousands at once — you see the **few that make sense in a little context**. Split the large problem into tiny ones, each hosting tools; **tools come to you**. Crucial rule: **never let the tool drive the decision — start with the question, then pick the tool.** Then optionality becomes a **benefit, not a cost**.
- **How do you manage all the data/references linking the tools?** As software engineers, we already **turn data problems into decision-making problems** for users about **data they'll never see**. Everything about your system is **just data**, governed by the same rules as any other data you manipulate — references are **not that hard to find or maintain**. It's work, but **work you already know how to do**.
- **What's the tech stack?** **Glamorous Toolkit** — free/open-source, no licensing model; built over **~15 years** as a research platform to discover moldable development. It's **not a tool to use on your problems directly** — it's the **first large case study** of moldable development to learn from.

---

## People, Companies, Tools & References Cited

- **Tudor Girba** — speaker; **CEO of feenk**; multiple-dispatch ambassador.
- **LifeWare** — Swiss life-insurance systems provider; the case study (35M–70M lines, 150k tests <20 min).
- **Kent Beck — *TDD by Example* (2002)** — where LifeWare first appeared as a case study.
- **Wardley map / Simon Wardley** — co-author of "The Rewilding of Software Engineering."
- **Glamorous Toolkit** — the free/open-source moldable-development environment shown.
- **AWS** — the on-demand test/analysis cluster.
- Concepts: **moldable development**, contextual micro-tools, Inspector + views, time-to-question / time-to-answer, "tools come to me," "the I in IDE is Integrated."
- Resource: **moldabledevelopment.com**.

---

*Video: https://www.youtube.com/watch?v=DB5ZOGpkL9k — Transcript via yt-transcript.sh; outline generated from the transcript.*
