---
title: "From Idea to Event Model to Code – Martin Dilger | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Martin Dilger on event modeling as a shared language for business, engineers, and AI — five elements, four patterns, isolated slices, and driving code generation (Ralph-loop agents) from the model instead of markdown."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# From Idea to Event Model to Code – Martin Dilger (Workshop Outline)

> Martin Dilger (author of *Understanding Event Sourcing*, works with event-modeling inventor Adam Dymitruk) on **event modeling, specification-driven development, and code generation** — a workshop, so "I'm not the one doing the work; we work together."

---

## 1. The Real Problem Isn't Technology

- Most project failures are about **communication and clarity of requirements**, not tech. Engineers love solving problems with technology, but you can't discuss technology with business people. The old risk — "it's your **developer's understanding** that goes to production, not the real business knowledge" — now includes a third party: **the AI**. Teams that write endless **markdown and skip the code** end up with unmaintainable specs and no tooling.

## 2. Event Modeling — Five Elements, Four Patterns

- Explainable to a 5-year-old; needs only a whiteboard + sticky notes. **Five elements:** **event** (something that happened / new information — a *business* term, not tech), **command** (an intent), **read model** (how information is used), **screen** (drawn *ugly*, ≤2 min each — business people love it), **automation** (a gear symbol; a side effect, don't show how).
- **Four patterns:** **state change** (screen→command→event), **state view** (where displayed info comes from), **automation** (state view + state change), **translation** (using info from other systems). Information flow is shown with **arrows** — always readable **left-to-right along one single timeline** (great for humans *and* AI).

## 3. Slices & Business Rules

- Break the system into tiny **slices** (one process step / one request — smaller than a Jimmy Bogard vertical slice). Slices are **isolated** (only events connect them) → like true microservices / a **Lego architecture** (add bricks, rarely change what works). This up-front breakdown avoids XL t-shirt-sized backlog items nobody can estimate.
- Capture every rule per slice with **given/when/then** (BDD): *given* current state (events), *when* the user acts, *then* new information. A single step can hide 30 business rules — event modeling makes hidden complexity **visible**. The model is the **single source of truth** and a **task-management tool** (slices carry status: planned / in-progress / done).

## 4. Code: The Blueprint Architecture

- Each slice → a **package** in code, all following the same **blueprint architecture** (e.g., event-sourced with Axon on the JVM, or Node/Supabase/Kotlin build kits). Coding becomes **"painting by numbers"** — deliberately boring/templated. Modeling is ~80% of the work, coding ~20% (less with AI). The model is **implementation-agnostic**; you can even make one slice a serverless Lambda.

## 5. Model → Code with Agents (the Ralph Loop)

- Export the model to **JSON** (a standardized event-modeling format — not markdown; even a screenshot works) and hand it to an agent. Because each slice needs only its own context, you **never need a 1M context window** and can use **cheap/local models (Haiku)**.
- The **Ralph Loop** (just a bash script): agent picks up a slice in status `planned` → implements it per the blueprint skills → **records learnings** to `progress.txt` (compressed into `agents.md`) → marks it done → **context reset**. Every iteration gets *smarter* (vs. normal chats that get dumber as context fills). Independent slices → add more agents to go faster; the agent can even update the model board back.

## 6. Q&A Highlights

- **Legacy CRUD → event sourcing:** point an agent at the codebase to **extract an event model** first, then generate. **Upfront vs. just-in-time planning:** we went too far toward no planning; upfront planning is fine *if the plan (slices) is changeable*. **Bugs:** go back to the model, usually add a given/when/then, re-plan the slice. **Non-screen / research / algorithmic systems:** works with gear-only timelines and small scopes; event modeling shines for **information systems**, less for low-level algorithms. Non-linear systems → **multiple timelines**, each started by a different event.

---

*Video: https://www.youtube.com/watch?v=3I8Cl1s6yPE — Transcript via yt-transcript.sh; outline generated from the transcript.*
