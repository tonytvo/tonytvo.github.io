---
title: "Mind Your P's and Queues - Daniel Vacanti | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Daniel Vacanti on why prioritization (the order things START) doesn't maximize value — it's controlling WIP / queue size (which governs when things FINISH) that matters — with a Monte Carlo demonstration of how WIP scrambles priority, plus Q&A on capacity, team size, and lean."
type: "reference"
tags: ["softwaredevelopment"]
---

# Mind Your P's and Queues - Daniel Vacanti (Talk Outline)

> **Daniel Vacanti** (from Miami; agile ambassador, three books on agile/Kanban, "Craft's Stanley Tucci") — golden nugget: **be curious and do your homework.** The English idiom **"mind your P's and Q's"** means *watch what you're doing* — the recurring theme: agile obsesses over **P**rioritization while neglecting the thing that actually governs outcomes, your **Q**ueues (work in progress).

---

## 1. Framing — English, and the P-words

- Opening bit on English being a hard language (he attempts five words of Hungarian). "Mind your P's and Q's" = behave / **watch what you're doing** (origins: P/Q confusion in movable type; or **pints and quarts** in pubs).
- Agile is full of **P-words** — portfolios, projects/products, prioritization, planning, predictability: *"you prioritize so you can plan, so you can be predictable."* In the interest of **limiting WIP**, he picks **one**: **prioritization.**

## 2. What Problem Does Prioritization Solve?

- Frameworks mandate it: Scrum requires an **ordered product backlog**; SAFe uses **WSJF** ("the less said about SAFe's weighted-shortest-job-first, the better").
- The real purpose (per the Scrum Guide): **maximize value** (maximize, not optimize). You order items because you believe some are more valuable (e.g., "bank setup" #1 over "model my pay").
- **The catch:** value is only realized when an item is **delivered to the customer** → what we truly care about is the **order in which items *finish***. But **priority determines the order in which items *start***. That's backward.
- Two unverified assumptions: items that **start sooner finish sooner**, and items **finish roughly in start order.** "Has anyone ever gone and matched finish order to start order?" (In every org he's seen: **no**.)

## 3. Queues Are Everywhere

- What actually **influences when items finish** is **how many things you're working on at once** — **queue size / WIP** — which no agile framework talks about.
- Everything is a queue: board columns (up-next, analyzing, creating, validating) and every level of a **work-breakdown structure** (initiative → feature → team boards) — "queues coming out your R's."
- **The WIP explosion:** with features A–E each broken into stories, a team working **stories in priority order** pulls story 1 of A, then B, then C, D, E — quietly pulling **all five features into progress**. It looks disciplined at the story level, but multiply by an initiative board and **10/20/50 teams** → a massive **explosion of WIP** across the org.

## 4. Monte Carlo & How WIP Scrambles Priority

- Customers only ask: **"When will it be done?"** — or, for a fixed date, **"How many of these features will make it?"**
- With a known number of stories, a **Monte Carlo simulation** can assign each feature a probability of finishing by a date — but it makes **two hidden assumptions**: the team works on **one thing at a time** and in **strict priority order** (neither is ever true).
- Re-modeling with more WIP (18 features):
  - **WIP = 2:** already funky — priority #9 now has a **lower** chance than #10.
  - **WIP = 9:** priority **#1** has a lower chance of finishing than **#2 through #15**.
  - **Pull everything into progress:** "**stories not assigned to a feature**" beats **#1 "bank setup"**; **nine** features have a higher chance than #1. A product owner's carefully-built prioritization is "out the window."
- **As WIP grows (especially org-wide), finish order is dictated by WIP, not priority** — everything is at risk, so "**prioritization is waste**." (Extra jab: "**WSJF is a real thing; SAFe's implementation of WSJF is not** — happy to argue it in Q&A.")

## 5. The Snowball & Takeaway

- If WIP wrecks priority, **why plan?** If you can't plan, you can't be **predictable**; if you can't be predictable, you can't decide **which products to invest in** across the portfolio. **Every agile P-word comes back to controlling queue size / WIP.**
- (Joke: 2025 law requires an AI talk — his next: "You can't spell Daniel/Vacanti — or Stanley Tucci — without AI.")

## 6. Q&A

- **Old agile vs. new agile?** The Manifesto (2001) was very software-centric and "got a lot of stuff wrong" — no language for **managing WIP or flow**; worst perversion: **Scrum/SAFe became synonymous with agile**. (Plug: his talk "**The New Agile Economics**".)
- **Should we only work on one thing at a time?** **No** — he's not saying that. Find your **optimal organizational capacity** (maybe 1, maybe 2 — "I guarantee it's not 18"); if you ignore capacity and blow out WIP, finish order is dictated by WIP, not priority.
- **Ideal dev-team size to limit parallel stories?** **There isn't one** — "seven ± two"/two-pizza teams "don't exist." He ran a **60-person** standup (finished under 15 min); a colleague had a 40-person team. The limit is **how many *things* you work on**, not headcount.
- **Team picked random stories ignoring priority — a team-level problem?** Clarification: the team **did** work in story priority (story 1 of A, story 1 of B…) and **thought they were doing right** — but starting one story starts the whole feature.
- **Book on queuing theory?** No single great one for agile; read **John Little** (Little's Law) for queuing, **Shewhart/Deming/Wheeler** for variation.
- **Which of your books first?** *When Will It Be Done?* (forecasting) → *Actionable Agile Metrics for Predictability* (why forecasts work) → the third to go further.
- **Switch to Lean (where limiting WIP is core)?** Not mutually exclusive — **do both** ("conferences used to be called *lean-agile*"; "there is no agile without lean").

---

## People & References Cited

- **Daniel Vacanti** — speaker; books *Actionable Agile Metrics for Predictability*, *When Will It Be Done?*, and a third; talk *The New Agile Economics*.
- **Scrum Guide** (ordered backlog), **SAFe / WSJF** (criticized), **Monte Carlo simulation**, **Little's Law / John Little**, **Shewhart / Deming / Wheeler** (variation).
- Concepts: prioritization vs. WIP/queue size, start order vs. finish order, WIP explosion, flow, lean-agile.

---

*Video: https://www.youtube.com/watch?v=Q5D2odLVEAY — Transcript via yt-transcript.sh; outline generated from the transcript.*
