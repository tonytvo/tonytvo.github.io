---
title: "Architecture Decisions in the Age of AI – Kenny Schwegler & Evelyn van Kelle | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Kenny Schwegler & Evelyn van Kelle on who really makes architectural decisions — architects, engineers, previous decisions, System 1 bias, and now agentic AI — how AI double-reinforces our biases (additive bias, correlation neglect, cognitive surrender), and how AI tools are behavioral systems you must engineer."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Architecture Decisions in the Age of AI – Kenny Schwegler & Evelyn van Kelle (Talk Outline)

> A follow-up to their (caption-less) **"Debiasing Your Software Design Decision-Making"** session. **Kenny Schwegler** and **Evelyn van Kelle** (co-authors, with Jean(-Marc?), of a book on cognitive bias in decision-making) examine **who is actually making architectural decisions** now that **agentic AI** has entered the room. Highly **interactive** — audience answers via an anonymous live-poll tool (or by joining on stage).

---

## 1. What Is Software Architecture?

- Audience answers: "what architects do," "potato diagrams," "boxes and arrows," "limitations," "the complex stuff," "everything software is built on." **No industry-standard definition** → it's widely misunderstood.
- Working definition (**Grady Booch**): **"All architecture is design, but not all design is architecture."** Architecture = the **significant design decisions that shape a system**, where **significant is measured by cost of change**. The system is more than the software — it's the **socio-technical system** of the organization. (Carnegie Mellon collects many definitions.)
- Poll: "how important is architecture?" → **~8.8/10**.
- **Core idea:** a decision is **architectural when it's expensive or painful to reverse** — about **consequences**, not diagrams/layers. (Barry O'Reilly: **no change → you probably don't need architecture** — e.g., an unchanged 8-year-old SOAP messaging system; don't rush SOAP→REST.)

---

## 2. Who Actually Makes the Decisions?

- Poll: "how much do teams decide themselves?" → a **big divide** (never ↔ as much as they can).
  - Too far left → probably not *allowed* (a bias); too far right → **local optimization** / loss of **coherence** (take the best part of every car → not even a car).
- "**Never**" is doubtful: **Stack Overflow 2016 outage** — a developer wrote ordinary regex to trim Unicode whitespace; a malformed post with **~20,000 consecutive whitespace chars** hit it, consumed high CPU, and (because the post was on the homepage list) the **homepage stopped responding**. A **local implementation detail** created a **cross-functional architectural** consequence — "one regex shaped the architecture," no ADR, no one called it architecture. Engineers say "architects decide"; architects say "we need coherence, we decide" — **neither is fully true** (the **illusion of control** from the previous talk).
- **"Elephant paths"** (Dutch): users cut their own shortcut lines regardless of the poles you place. **You either have good or bad design — not *no* design.** (Users demand the Excel export you didn't design for.)
- **The deciders:** architects, **engineers** (whose decisions teach the team "what good looks like"), **previous architectural decisions** (status quo), **design principles**, and — the **fourth character** — your **System 1**.

---

## 3. System 1, System 2, and Satisficing

- Poll: "what do you base decisions on?" → "what senior colleagues tell me," gut feeling, cognitive biases, "what fits the previous decision," superior knowledge — **already full of biases**.
- **Kahneman (*Thinking, Fast and Slow*):** **System 1** = fast automatic autopilot (trained, conditioned — frees cognitive space, but can trap you in "this is just how we do things"); **System 2** = slow, deliberate, conscious. You want the **balance**.
- Research: architectural decision-making is **far from rational** — architects **satisfice** ("good enough," not optimal). System 1 gets in the way — not that it shouldn't be there (rely on it most of the time), but sometimes it's worth it to **"think twice."**

---

## 4. Agentic AI + System 1 = a Match Made in Heaven

- AI outputs are **candy to System 1**: **fast, well-written, well-formatted, confident**, and **confirming what you already thought** — accepted **before System 2 is even invited**. ("That's an excellent question." "I only ask excellent questions.")
- "Critical review" often degrades to **scanning for anything slightly off, checking a few sources, and removing em-dashes.**
- Unasked question: **how is AI affecting the *social* conditions of decision-making?** You **can't tell people to think harder** — from behavioral science, **you can't change people, only the environment** that triggers/reinforces desired behavior. We're busy engineering **technical** conditions but neglect **social** ones.
- **Double reinforcement loop:** biased artifacts (our input) → train models → biased **suggestion** → back into our **context** → our **decisions** — and around again. We must **engineer for that**.

---

## 5. Biases Amplified by AI

### 5.1 Additive bias / subtraction neglect
- **LEGO experiment:** a crooked platform on one pillar — most people **add** pillars rather than **remove/lower** the one. Research: faced with a flaw, people ask **"what can I add?"** not "what can I remove?"
- Engineers **add code**; **AI adds a lot of code** (trained on it; the new Opus/Claude Code gives "five paragraphs to a simple question" — "why'd you have to go and make things so complicated," Avril Lavigne). Poll: most recognize this in agentic AI.
- **Counter (nudge):** prompt *"If we could not add anything, how would we solve this? What can we remove?"* — and apply 20-year-old habits (TDD, cleanup) to debias yourself and the agent. ("Unwanted extra advice" / "agentic explaining.")

### 5.2 Correlation neglect
- Three people echoing **one source** (same meeting/blog/talk) feels like **independent votes** → **false confidence**; worse when you're **emotionally invested** in the idea. (Kenny's own early example: five blog posts on ORM domain modeling all citing **one** person; GitFlow blog posts all from the same now-"don't use it" source.)
- 2025 research on human-AI interaction: we treat **AI output as another independent source** even though it used the **same sources** we did → teams get **more confident than the data supports**.
- **Fix:** don't **double-count sources** — with people, trace whether they used different sources; with AI, **ask "what sources did you use?"**, compare them, and honestly ask whether AI **confirmed** you or told you something **new**.

### 5.3 Authority bias / algorithm appreciation / cognitive surrender
- **Authority bias:** we weight an authority's opinion more ("I follow my senior developer").
- **Algorithm appreciation** (2019, pre-GenAI): people gave **more weight** to advice labeled as from an **algorithm** than an identical human source; experts who **dismissed** it were **less accurate**. Good when the algorithm is good — but algorithms have limits (three Dutch weather apps, none accurate).
- **Cognitive surrender** (recent): participants accepted **wrong AI answers ~80% of the time** and became **more confident** after consulting AI. **Distinct from cognitive offloading** — offloading a calculation to a **deterministic** calculator is fine; handing over **critical thinking** to non-deterministic GenAI is surrender. Need a **feedback loop** to check you're getting right answers.
- **2025 DORA** (~5,000 developers): **AI amplifies what's already there** — strong engineering practices grow stronger, weak ones break faster; higher AI adoption correlates with **more throughput and stability**. ~90% use AI, ~30% don't trust it. **"AI doesn't replace engineering discipline — it reveals who never had it."** (Nods to Kevlin Henney; David Farley's modern engineering; asks how much orgs coach devs into engineers — socio-technical/agile technical coaching à la **Emily Bache**, TDD, trunk-based development.)

---

## 6. AI Tools Are Behavioral Systems (designed as information systems)

- They **shape behavior** — what you accept/question/review — but are built as **information** systems, full of **unintentional** triggers/nudges/consequences (no behavioral scientist behind them).
- Behavior model: **trigger → behavior → consequence**; positive consequence → **repeat**. Example: AI output (trigger) → engineer accepts it (behavior) → build passes, tests green, colleagues praise the speed (positive consequence) → behavior repeats.
- **"You get what you reinforce."** Orgs **say** they value **deliberate thinking** but **reinforce speedy AI-driven decisions / token-maximizing / output**. If you reinforce speed, don't be frustrated when the lone person who wants "a day or two to reflect" gives up after being overridden.
- Poll: "what behavior is reinforced in decision-making?" → overwhelmingly **fast / output** (the morning keynote was "output, output, output" — lines of code, adoption, never *effect*). Ask: is what we **reinforce** what we **value**?

---

## 7. Nudging Your Way Out

- Recap of deciders: architects, engineers, previous decisions, System 1, agentic AI, **anyone who reinforces behavior** — and the **business** (a "can you implement it?" requirement is often already an architectural decision).
- A **free debiasing toolkit/checklist** (GitHub) — they're adding **prompts to feed agentic AI** so it "debiases" its outputs and manages its memory. (Kenny dislikes anthropomorphizing — "telling a submarine it's swimming" — so frames it as giving outputs "another way out.")
- **Harnessing** (per Rekha/Regita Buckler): feed your **principles, reference docs, and the checklist** into the agent's harness — **feed-forward + feedback** to nudge teams. An opportunity for architects as **enablers** ("finally a foot in the door"). Not fail-safe (agents ignore instructions).

---

## 8. Q&A

- **Does "tools nudge behavior" argue for building your own tools vs. off-the-shelf (biased to the vendor's preferred behavior)?** Not necessarily — build or buy, doesn't matter; what matters is **how it fits your context** and **engineers the conditions** you want. The question itself is a good sign you're doing that thinking.

---

## People, Books & References Cited

- **Kenny Schwegler**, **Evelyn van Kelle** — speakers/co-authors (with a third co-author) on debiasing decision-making.
- **Grady Booch**, **Daniel Kahneman** (*Thinking, Fast and Slow*, System 1/2), **Barry O'Reilly**, **Kevlin Henney**, **David Farley**, **Emily Bache**, **Rekha/Regita Buckler**.
- **Stack Overflow 2016** regex outage; **2019 algorithm appreciation**; **cognitive surrender** research; **2025 DORA** report.
- Concepts: cost of change, illusion of control, elephant paths, satisficing, additive bias/subtraction neglect, correlation neglect, authority bias, cognitive surrender vs. offloading, behavioral reinforcement, debiasing toolkit, harnessing.

---

*Video: https://www.youtube.com/watch?v=pWkz7Qfx16c — Transcript via yt-transcript.sh; outline generated from the transcript. (Companion to their caption-less "Debiasing Your Software Design Decision-Making" session.)*
