---
title: "From Idea to Model to Code – Martin Dilger | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Martin Dilger on building truly flexible systems with Event Modeling, slices, and event sourcing — taming coupling, counting slices instead of story points, and feeding the model (not markdown) to AI agents running in a Ralph Loop."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# From Idea to Model to Code: Building Truly Flexible Systems – Martin Dilger (Talk Outline)

> Martin Dilger — 20+ years in the industry, author of *Understanding Event Sourcing* — argues that the problems wrecking our projects are **not technical**, so technology can't solve them. His answer is **Event Modeling**: a technology-agnostic, collaborative modeling technique that produces **independent "slices"** you can count for estimation, implement with **event sourcing**, and hand directly (as JSON, not markdown) to **AI agents**. The 40-minute talk packs in event modeling, event sourcing, code generation, "spec-driven development," and AI, plus a live demo and Q&A.

---

## 1. Framing & the "Leaps" of Our Industry

### 1.1 Setup

- Self-deprecating open: he "hates Craft Conf" because so much runs in parallel; was sure he'd speak to an empty room, and thanks the audience for showing up.
- Agenda deliberately stuffed with buzzwords: **event modeling, event sourcing, code generation, spectrum ("spec") development, and AI** — all in 40 minutes.
- His book ***Understanding Event Sourcing*** was just announced — but "it's not really about event sourcing," it's about **building scalable and flexible systems.**
- He started a **new book, *Driven*** (cover not final), literally *that morning*, based on conference discussions — writing it in public, sharing progress on **LinkedIn**; wrote the first 1,000 words before the talk. This talk is the book's starting point.

### 1.2 Industry "leaps" and our tendency to exaggerate

- A "leap" = something that changes how we think and work **overnight**.
- **The Agile Manifesto** was his most prominent leap. (Anyone who remembers before Agile is "officially very old.") Before it: **waterfall** — "becoming modern again."
- Pattern: the **IT industry exaggerates** every leap. Agile → "no upfront planning; if you plan you're a waterfall old-schooler; let design emerge sprint by sprint" — "didn't age too well."
- Other leaps, each over-hyped:
  - **SOA & web services** — "the E in SOA stands for easy to use." Everything distributed.
  - **Cloud** — "deploy on-prem and you were old school; some still think you are."
  - **Microservices** — "we had no idea what we were doing, but boy did we do microservices. Never again monolith — build a monolith, go home, you're drunk."
  - **Docker.**
  - **AI** — "since 2020, every 6 months we get the prediction you'll be out of a job. We're still here, and will be in 6 months."
  - **Agentic engineering** — the leap still ongoing.

### 1.3 The uncomfortable question

- With all these advances, **why don't we deliver 100% of projects on time, budget, and quality?** Are we too dumb?
- Project managers just want a simple answer to **"when is this thing done?"** — and instead we talk **story points**, "measuring complexity."
- "Have you tried explaining story points to a project manager?" Every company secretly has a table where **1 story point = 1 person day.**
- Hypothesis: the causes of our project problems **aren't technical** — so **they can't be solved with technology**, yet we keep trying. **"The answer to all your problems is not microservices."**

## 2. War Story — The Distributed Monolith (2017)

- **2017**, architect on an e-commerce portal, team of ~20, started **2012**, still running today.
- Built a **microservice architecture** with neither the technology nor the knowledge to do so — "if you ask ChatGPT today to design an e-commerce portal, that is exactly our architecture": acquisition, cart, checkout, order, inventory, address check, payment microservices. "Beautiful."
- A new backlog story arrived: **real-time credit check.** Looked like "payment" — but digging in revealed **auto-submitting orders** and **reserving items from virtual inventory.** It **changed how orders were handled.**
- One requirement forced changes to **checkout, order, cart, acquisition — everything.** The "beautiful architecture" was actually the **worst architecture in the world: a distributed monolith** — "all the drawbacks of microservices and none of the benefits."
- His crisis: *Was it my fault? Wrong architecture? Bad planning?* — **first time in his career he had no answers.**

### 2.1 The realization: you can't plan for what you don't know

- Imagined letter: "Dear product owner, why didn't you tell us earlier?" — Reply: **"I would have, if I knew. I didn't know myself."**
- **You cannot plan for what you don't know** — no matter how many meetings. Sooner or later **one tiny requirement** (his was the real-time credit check) won't fit your beautiful domain model printed on the wall behind the architect's desk.
- What you need is **flexibility to change** — but microservices give the **opposite** of flexibility. He "admitted defeat."

## 3. The Cost Curve of a Successful Project

- Typical curve: **cost-per-feature rises over time** as projects accumulate complexity.
- **Greenfield** projects sit at the bottom — fun, no dependencies, no complexity — "but it won't last."
- Root cause of the rising curve: **coupling.** More features → more coupling → changing one feature forces changes to others → costs compound.
- Everyone accepts "software gets more complex over time" as a **law of nature.** He **disagrees.**
- His goal (also his 2017 wish): a **flat — actually declining — cost curve.** A feature built in 5 years should take **as long or less** than one today. "That's the real purpose of architecture."
- Ask an engineer how to achieve it and you get no answer — or "microservices" (wrong) or "just use agents / Claude Code" (not so sure).

## 4. Discovering Event Modeling (November 2021)

- "A cold and stormy winter night" — he read an article titled **Event Modeling**, re-read it **five or six times**, and realized it was **the solution he'd been looking for.** His whole career changed overnight.
- The three things that matter in a project: **communication, collaboration, clarity.** Most projects have **bad communication, no collaboration, and zero clarity** — "guesses in your requirements is not clarity."

### 4.1 What Event Modeling is

- A **collaborative modeling technique** to model, plan, and design systems **before writing any code** — works whether code is written by a **human or an agent.**
- You **sit with business people** and discuss the problem you're solving **at the beginning, not the end.**
- Needs only a **whiteboard** — no tools required. In practice he uses **Miro** ("every company knows Miro") — the model is "just a bunch of sticky notes."

## 5. The Five Elements of Event Modeling

- Only **five elements** describe **any system in the world**, no matter how big.

### 5.1 Event

- Something that **happened** in the system — e.g., *customer registered.*
- **Not a technical term** (not event-driven architecture, not event sourcing) — a **business term.** Event modeling is completely **technology-agnostic**; you can't talk to business people about event sourcing — they care about business problems.

### 5.2 Command

- An **intent** — something you want to happen (e.g., *register this customer*). If executed successfully, it produces a **new event** (new information).

### 5.3 Read model

- A **green sticky note**: how information is **used** in the system — "making sense of information already available."

### 5.4 Screen

- Engineers are surprised by how many **screens** he draws — "screens make people understand."
- Rule: **drawing a screen must not take longer than 2 minutes.** Goal is an **ugly screen** — "you need to be good at ugly screens. Mine are the worst, but everybody understands."

### 5.5 Automation

- Not everything is user-driven — **background processes** get a **gear symbol.** No technical detail (not "an SNS that sends an email") — just "something automatically sends an email." The **side effects** of the system.

## 6. The Four Patterns

- The five elements combine into **four patterns / slices** (a slice = a small piece of functionality).

### 6.1 State change slice

- **How new information gets into the system:** screen → button → command → (if all goes well) new event. One small process step.

### 6.2 State view slice

- **The opposite — how information is used:** events → read model → screen. Must be **explicit about where information comes from** — no assumptions. Several events can feed one read model.

### 6.3 Automation

- An **automatic process step** — roughly a state view + a state change. Example: after registration, send an email — but *do we have all the information* (e.g., the email address), and where does it come from?

### 6.4 Translation

- How your system **interacts with other systems.** A **yellow event** is an **external event**; translation shows how you consume other systems' information into **your bounded context.**

## 7. A Real-World Event Model (Legal-Domain Project)

- Shown in **Miro**; a real project he's allowed to show, from the **law/legal space.**
- Rule: **everything reads left-to-right along a single timeline**; a whole board holds many process models side by side.
- Example: a **lawyer creates a new case** — sees a button, clicks it, fires a **create case** command. The model also names **the information each step needs** — e.g., a **law firm ID.**
- Key value: asking **"where does the law firm ID come from?"** at the **very beginning.** The later that discussion, the more expensive.
- Failure mode without it: you *assume* you have the law firm ID, plan 6 months, allocate budgets — then discover you need a call to **another team with a 6-month backlog**, and you're **blocked.** That's massive waste. Event modeling **uncovers requirement gaps early, while it's cheap.**

### 7.1 Slices are business capabilities, not deployments

- Engineers wrongly ask "**is a slice a microservice? a module?**" — wrong question. A **slice is a business capability / intent** (e.g., "do the registration") that business people understand.

### 7.2 Business rules via Given/When/Then

- Beyond behavior/flow, you must capture **business rules.** Example — cinema reservation:
  - *Given nothing happened, when I make a reservation, then it should work* (new information in the system).
  - *Given the room is fully booked, when I try another reservation, then there's an error.*
- Describe rules **step by step per slice**, and he **asks at least three times: "are there any more business rules we haven't thought of?"**
- Result: **read left-to-right** to see how the system works; **read top-to-bottom** (rules under each slice) to see a slice's details. Like a **prototype with no code written yet.**

## 8. Estimation by Counting Slices

- With event modeling you **stop talking about story points** and talk about **slices.**
- Progress = **count the slices:** 25 of 100 done → ~25% done. Slices turn out to be **roughly equal in size** — "the most accurate estimation I've ever done: just count the slices."
- **Slice cycle time** = average time the team takes to build one slice (e.g., 2 days; "with Claude Code, an hour"). 75 slices left × 2 days = **150 person-days.** Business people understand **person days**, not story points.
- Reports come straight from the model: screenshot the whiteboard and ask **Claude Code**, or use **Miro tooling for event modeling** — shows completion rate (e.g., **75%**).

### 8.1 Live demo — statistics

- A **freely available Miro extension**: pick a context (e.g., **case management**), open statistics, and it computes **slices done (75%)**, updating automatically as slice statuses change — "project managers love this."

### 8.2 Transparent change conversations

- For a new requirement you can read off: "this needs **2 new slices** and adjustments to **4 existing slices** → **6× the cost of a slice.** Is it worth it?" — a great, number-driven discussion. "This is agile."

## 9. Implementation: Slices + Event Sourcing

### 9.1 Slices are what microservices should have been

- Slices are **self-contained, with clear inputs and outputs** — "small, tiny pieces of functionality," **no assumptions about deployment.** A slice can be a plain function or a serverless payload; "a slice is a slice."

### 9.2 Event sourcing as the default

- He's a **big proponent** — "we start with event sourcing and only do something else with a very good reason."
- "Don't believe the internet — **event sourcing is simple**, the simplest way to build a system." If you haven't tried it lately, give it a try.
- **How it works:** instead of many relational tables, one **`events` table** stores all information as events (*customer registered*, *customer activated*, …).
- **Projections** (the green read-model sticky notes) turn events into whatever shape you need — e.g., project *customer registered* into a normal relational **customer activations table.** The app may never know the backend is event-sourced; the **source of truth is the events**, which makes it flexible.
- Events **progress** the projected state: *registered* → status *initial*; *activated* → changes state. **Same events, different projection.**

### 9.3 Isolation kills coupling

- **Every slice gets a dedicated projection** and is **completely isolated** — "you can change a slice without looking at any other slice."
- This directly attacks the 2017 problem/cost curve: a change affects **one or a very small number of slices**, never the whole architecture. "That's the power microservices promised" — but here there are **no dedicated deployables**; the architecture is typically a **monolith** ("much simpler, we always go for a monolith").

### 9.4 What the code looks like

- A **Kotlin** project (the same one shown in the big event model). Open the **case management** package → **one slice after another**, each a dedicated package, "like an isolated microservice," with **no dependencies between slices except events.**
- Workflow: go to the event model, pick the slice to change (a button jumps you straight to it), **work on one slice at a time.**

### 9.5 Why this is an AI enabler

- Everyone celebrated the **1-million-token context window** (Claude Code) — but "**why do you need it? You shouldn't.**"
- He'll **never use the 1M window** — he only cares about **one slice at a time**, and a slice is **three or four classes.** **Agents understand slices perfectly.** "Going small is how you solve AI."

## 10. Live Demo — Model Two Slices, Let the Agent Build Them

- Domain requested from the audience → chose **session scheduling.**
- **Slice 1 (state change):** screen → **schedule session** command → **session scheduled** event (info: title, author). Kept a dummy screen (would normally draw one in 2 minutes).
- **Slice 2 (state view):** a **sessions** list view (plural).
- Assigned both to a **context** he named **"craft planner."**
- Set the slice **status to "planned"** — meaning **any connected agent may pick it up.** He had **Claude Code running in the background** (a **Ralph Loop** — the agent runs in a loop, watching for slices to enter a state, then builds them from the model). **No prompting involved**; the only optional manual step is **reviewing the slice** afterward.
- **Model → JSON export → agent input:** he **exports the model to JSON** and feeds it to the agent — "much better than markdown."

### 10.1 Model as source of truth, not markdown

- The model is what you built **with your business people** — not made-up markdown.
- **Markdown you'll regret** in months/years — it's **not maintainable** and business people never edit it; they still come to you to change it. Using the model as the **living source of truth** everyone shares is far better.
- The demo agent **didn't pick up the slice in time** (he tried restarting; ran out of time) — but "it doesn't really matter" for the point.

## 11. Takeaways

- **Event modeling is no magic** — no tools needed, just a **whiteboard.** It's a **communication tool**, and communication is what solves problems. **Learnable in 15 minutes** — try it in your next refinement meeting.
- It's a **great starting point for integrating AI**: **slices are small, and going small is how you solve AI** — big things are the problem.
- **Don't abandon event sourcing too early** — a simple architecture, and a great way to do **spec-driven development without ending in "markdown hell."**
- **Taming coupling is essential** — "tame coupling, and many problems just go away."

## 12. Q&A

### Q1 — Is this refactored UML?

- **No.** "Have you tried showing UML — a sequence diagram — to your business people? That doesn't end well." Event modeling has **no technology in it**, so it's not UML.

### Q2 — The first slice costs 1,000× more than the tenth. How do you account for that in estimates?

- He **rejects the 1,000× figure** — "simply not true." You first define a **blueprint architecture** with the client (their stack, how to build state-change and state-view slices) — a **template.** In practice the **first slice ~4 days, second ~2 days, eventually half a day** (his typical slice cost now).

### Q3 — How does this work in legacy projects where decisions are already made?

- Event modeling is **especially good** here. The biggest legacy problem is **nobody knows how the system works.** Sit with business experts and **model the existing system to understand it.** You can also use **AI/agents to build event models from legacy code** (they understand legacy well), then drive the new implementation from those models.

### Q4 — How do you start mapping an existing system when you're new to a non-greenfield project?

- Same as Q3: **point an agent at the project** with his available **prompts** (everything he does is **open source** — GitHub / LinkedIn) and get a **finished event model** out.

### Q5 — When does event modeling *not* work?

- It's inherently for **information systems** — information in on the left, do something (buttons/automations), information out on the right (can be pure automations, no UI required).
- It **doesn't help for algorithmic / low-level work** — "you would not model a microprocessor with event modeling."

---

## People, Tools & References Cited

- **Martin Dilger** — speaker; author of *Understanding Event Sourcing*; writing *Driven* in public on **LinkedIn**; open-source prompts/tools on **GitHub**.
- **Event Modeling** — the collaborative technique at the heart of the talk (discovered via an article, Nov 2021).
- **Miro** — whiteboard tool; a free **event-modeling extension** provides slice statistics and slice-status planning.
- **Claude Code** — coding agent run in a **Ralph Loop** to build slices from the exported JSON model; 1M-token context window discussed and dismissed as unnecessary.
- **ChatGPT** — referenced ("design an e-commerce portal" → the canonical microservice split).
- **Kotlin** — language of the demonstrated slice-per-package codebase.
- Concepts referenced: Agile Manifesto, waterfall, SOA / web services, microservices, distributed monolith, event sourcing / projections, bounded context, Given/When/Then, slices & slice cycle time, spec- ("spectrum") driven development, coupling / cost curve.

---

*Video: https://www.youtube.com/watch?v=d5ypk4nitf8 — Transcript via yt-transcript.sh; exhaustive outline generated from the full transcript.*
