---
title: "From Idea to Model to Code – Martin Dilger | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Martin Dilger on building truly flexible systems with Event Modeling, slices, and event sourcing — taming coupling and feeding the model (not markdown) to AI agents."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# From Idea to Model to Code – Martin Dilger (Talk Outline)

> Martin Dilger (author of *Understanding Event Sourcing*, writing a new book *Driven* in public) on why our project problems aren't technical, and how **Event Modeling + slices + event sourcing** produce flexible systems that also happen to be ideal for AI agents.

---

## 1. Leaps & the Real Problem

- Our industry makes overnight **leaps** (Agile, SOA, cloud, microservices, Docker, AI/agentic) and always **over-hypes** them ("no more upfront planning!").
- Yet we still don't deliver projects on time/budget/quality, and can't answer "when is it done?" **The root problems aren't technical** — so technology (microservices, agents) can't solve them.

## 2. The Distributed-Monolith War Story

- 2017 e-commerce portal: a "beautiful" microservice architecture (the same one ChatGPT would draw). One new requirement — **real-time credit check** — forced changes across *every* service. They'd built the **worst architecture: a distributed monolith** (all the drawbacks of microservices, none of the benefits).
- Lesson: **you can't plan for what you don't know.** Sooner or later a requirement arrives that doesn't fit your model. What you need is **flexibility to change**.

## 3. The Cost Curve

- Successful projects accumulate **coupling**, so cost-per-feature rises exponentially. The real purpose of architecture is a **flat (or falling) cost curve** — a feature in 5 years should take as long or less than today. **Tame coupling and the problems go away.**

## 4. Event Modeling

- A **collaborative modeling technique** to design systems *before* code (human- or agent-written), sitting with business people to understand the problem — **technology-agnostic**, just a whiteboard (they use Miro).
- **Five elements:** Event (something that happened — a *business* term), Command (intent), Read Model (how info is used), Screen (draw **ugly** screens in <2 min), Automation (a gear/side-effect).
- **Four patterns:** state change (how info enters), state view (how info is used), automation, translation (integrating external/other-context events).
- Model along **one left-to-right timeline**; capture **business rules per slice** with **Given/When/Then** ("are there any more rules?" ×3). Uncover requirement gaps **early, when they're cheap** (e.g., a missing `lawFirmId` that needs another team's 6-month backlog).

## 5. Slices & Estimation

- A **slice** is a small, self-contained business capability (not a microservice/module/deployment). Systems are a continuous flow of slices.
- **Count slices** to estimate: they're roughly equal-sized, so "25/100 done = 25%," and with a **slice cycle time** (e.g., 2 days, or an hour with Claude Code) you get person-days business people understand. Tooling computes completion %, and change impact ("2 new + 4 changed slices = 6× slice cost").

## 6. Event Sourcing & Flexibility

- Default architecture: **event sourcing** (simpler than the internet claims). One **events** table is the source of truth; **projections** (the green read models) build ordinary relational tables per slice.
- **Every slice = a dedicated, isolated projection** → change one slice without touching others → **truly flexible**. Usually shipped as a **monolith** (no dedicated deployables — "what microservices always should have been").

## 7. Slices Are an AI Enablement

- In code, each slice is a dedicated package (3–4 classes) with no dependencies but events. You never need the **1M-token context window** — the agent works on **one tiny slice at a time**, which it understands perfectly.
- **Feed the model, not markdown:** export the event model to JSON as the agent's spec — a **living source of truth** everyone uses, unlike unmaintained markdown. Demo: assign a slice status "planned," and a background **Ralph-loop** agent picks it up and builds it (no prompting; optional human review).

## 8. Takeaways & Q&A

- Event Modeling needs no tools (learn it in 15 min); it's about **communication, collaboration, clarity**. Going **small (slices)** is how you make AI work. Don't abandon event sourcing too early.
- It's **not refactored UML** (no technology, business-readable). First slice costs more (define a blueprint template), then ~half a day each — not "1000x."
- Works great for **legacy** (model the existing system, even with AI building the event model) and **information systems**; not for low-level/algorithmic code.

---

*Video: https://www.youtube.com/watch?v=d5ypk4nitf8 — Transcript via yt-transcript.sh; outline generated from the transcript.*
