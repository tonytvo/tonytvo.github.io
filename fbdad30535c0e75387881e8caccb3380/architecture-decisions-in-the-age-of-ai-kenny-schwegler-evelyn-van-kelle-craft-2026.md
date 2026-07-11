---
title: "Architecture Decisions in the Age of AI – Kenny Schwegler & Evelyn van Kelle | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Kenny Schwegler & Evelyn van Kelle on who really makes architectural decisions — architects, engineers, System 1 bias, and now agentic AI — and how AI double-reinforces our biases."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Architecture Decisions in the Age of AI – Kenny Schwegler & Evelyn van Kelle (Talk Outline)

> A follow-up to their **Debiasing** talk: Kenny Schwegler & Evelyn van Kelle (co-authors on cognitive bias in decision-making) examine **who is actually making architectural decisions** now that agentic AI has entered the room — an interactive, audience-polled session.

---

## 1. What Architecture Is

- Grady Booch: **all architecture is design, but not all design is architecture** — the significant decisions that shape a system, where *significant = cost of change*. A decision is **architectural when it's expensive/painful to reverse** (not about diagrams/boxes). No change → you may not need architecture.

## 2. Who Actually Decides?

- Not just architects — **engineers** make architectural decisions unknowingly (the Stack Overflow 2016 outage: one local regex on 20k whitespace chars took down the homepage — architecture "nobody designed on purpose"). The "architect in the tower" **illusion of control**.
- **You either have good or bad design, not no design** (Dutch "elephant paths" — users cut their own shortcuts).
- Deciders: architects, engineers, **previous architectural decisions** (status quo), **design principles**, and — the fourth character — your **System 1** (Kahneman): the fast, biased autopilot vs. deliberate System 2. Research: architectural decision-making is far from rational — architects **satisfice** ("good enough").

## 3. Agentic AI + System 1 = a Match Made in Heaven

- AI output is **candy to System 1**: fast, well-formatted, confident, and **confirming what you already thought** — accepted before System 2 is invited. "Critical review" often degrades to scanning and removing em-dashes.
- **Double reinforcement loop:** biased artifacts → train the model → biased suggestion → back into your context → your decisions. You can't tell people to "think harder" — **behavioral science: change the environment** to trigger/reinforce the behavior you want. We engineer the *technical* conditions but neglect the *social* ones.

## 4. Biases Amplified by AI

- **Additive bias / subtraction neglect:** LEGO experiment — people **add** a pillar rather than remove one; engineers add code, and **AI adds a lot of code** (trained on it). Counter by prompting "how can we solve this by *removing*?"
- **Correlation neglect:** treating repeated (correlated) signals as independent votes → false confidence; worse when emotionally invested. 2025 research: humans treat **AI output as an independent source** even when it used the same sources. Fix: ask AI for its **sources** and don't double-count.
- **Authority bias / algorithm appreciation:** we over-weight advice labeled as coming from an algorithm; **cognitive surrender** — participants accepted wrong AI answers ~80% of the time and grew *more* confident. Distinct from safe **cognitive offloading** (a deterministic calculator).
- 2025 DORA: **AI amplifies what's already there** — strong practices strengthen, weak ones break faster. "AI doesn't replace engineering discipline; it reveals who never had it."

## 5. AI Tools Are Behavioral Systems (designed as information systems)

- Behavior model: trigger → behavior → consequence; **you get what you reinforce.** Orgs *say* they value deliberate thinking but **reinforce speedy AI-driven decisions / token-maxing / output**. If you reinforce speed, don't be frustrated when the one person who wants to slow down gives up.
- Question to ask your org: *what behavior is actually reinforced in decision-making?* (Overwhelmingly: **fast/output**.)

## 6. Nudging Your Way Out

- A free **debiasing toolkit / checklist** (GitHub) — increasingly you can **feed principles + docs + the checklist into your agent's harness** to nudge it toward debiased outputs (an opportunity for architects as enablers). Not fail-safe (agents ignore instructions), but feed-forward + feedback via harnessing is a good start.

---

*Video: https://www.youtube.com/watch?v=pWkz7Qfx16c — Transcript via yt-transcript.sh; outline generated from the transcript. (Companion to their caption-less "Debiasing Your Software Design Decision-Making" session.)*
