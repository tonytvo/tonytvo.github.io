---
title: "ESSENTIALS - Event Storming for fun and profit - Daniel Terhorst-North | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Daniel Terhorst-North explains event storming — meta-demonstrated by event-storming the talk itself — for business processes, legacy and new applications, with facilitation advice and archetypes."
type: "reference"
tags: ["softwaredevelopment"]
---

# ESSENTIALS - Event Storming for fun and profit - Daniel Terhorst-North (Talk Outline)

> Daniel Terhorst-North gives "a talk about a talk" — he **event-storms the very talk** he's presenting about event storming, using the **Disney story arc** (once upon a time → until finally).

---

## 1. The Mechanics (Alberto Brandolini)

- A collaborative **discovery/mapping** exercise. Stickies: **orange = domain event** (a thing that happened, perfect tense), **blue = command/external stimulus** (person, system, or time-based), **pink = question/puzzle** (placed diagonally), **read model/view**. Lay **time left→right**; start at the **end** ("they all lived happily ever after"), then "once upon a time" on the right, and leave **more space than you think** (before and after). Bring **everyone with fragmented knowledge** so "everyone knows what everyone knows" — people, questions, answers, and **lots of stationery**. Events cluster into **aggregates/subsystems**.

## 2. Three Applications

- **Business process:** people map their parts (expect arguments/fights), then separate the **core** process from the **vestigial** ("we've always done it this way") — crucial *before* automating, because automation both de-errors *and* **calcifies** the process (bake in the cruft otherwise).
- **Legacy application:** people answer "surprisingly quick, no questions" — because they're describing the **data model**, not the behavior. Let them "**clear their throat**" (dump what they *think* it does), then get to how it actually works. Clusters reveal the **seams** (Michael Feathers).
- **New application:** far more **questions than events** — "we all learned in real time that none of us knew." The work isn't "design the system," it's **pay down uncertainty** with discovery (a step usually skipped → the usual ball of mud).

## 3. Facilitation Advice

- Bring more stationery than you think (running out of pink kills the conversation); **let arguments run** (Goldratt's "universal harmony" — one reality; find where views last agreed, then teach each other; "arguing to learn" vs. "arguing to be right"); be a **time cop**, set **ground rules**, park off-scope debates as pink stickies. Use a **Pomodoro** (25/5 with a distraction notepad) — modeling is cognitively intense. Real payoff: a trading firm's **30-day server procurement → 2 hours** (pre-approvals, parallelizing, three pre-stocked server types) purely from **seeing the whole process laid out** — "visualizing how the work works is your first step"; getting cross-org people in one room is enormously valuable.

## 4. Archetypes & Adoption

- Watch for the **disruptor / know-it-all** ("Post-its? Can't we use AI?"), the **wallflower** (often the wisest, frequently talked-over/mansplained-past — bring them in), the **helper** (wants to co-facilitate — needs to *participate*), the **last-word** (let them), and the **surprise star** (a space where people grow). To **introduce it:** "**trust me once**" — an inexpensive morning-long experiment (like pair programming); ask forgiveness not permission (Grace Hopper). Q&A: don't fight mixed abstraction levels (cluster them later); Miro / searchable photos suffice; **positive intent** (Virginia Satir — everyone thinks they're *helping*; "what must be true for them such that this behavior helps?") to handle disruptive actors. **UX** = the *experience/emotion* a user feels (Bill Buxton) — run a UX-discovery event-storming session too.

---

*Video: https://www.youtube.com/watch?v=W0Eatrk8cgo — Transcript via yt-transcript.sh; outline generated from the transcript.*
