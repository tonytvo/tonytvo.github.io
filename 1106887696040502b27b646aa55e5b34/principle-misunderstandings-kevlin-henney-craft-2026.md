---
title: "Principle Misunderstandings – Kevlin Henney | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Kevlin Henney traces DRY, information hiding, SRP, and separation of concerns back to their original sources — showing most 'principles' are misunderstood patterns or preferences dressed as principles."
type: "reference"
tags: ["softwaredevelopment"]
---

# Principle Misunderstandings – Kevlin Henney (Talk Outline)

> Kevlin Henney excavates the origins of software's most-cited "principles" and shows how they've been misremembered — a matter that matters *more* in the AI era, because an amplifier applied to bad fundamentals just amplifies the bad.

---

## 1. What "Principle" Even Means

- "Principle" implies **universality** (always do it), unlike a **pattern** (context-dependent). Many so-called principles are really **patterns** — specifically, not generally, applicable — yet we keep calling them principles.
- **Misunderstandings** flow both ways: receivers *and* advocates misinterpret. With LLMs (a "fire hose"), you must be **well-informed, not just opinionated**, to guide them toward the good thing — you need words for what good looks like (Adam Tornhill: agent coding *reinforces* the fundamentals; without them you get "crap everywhere"). "At some level, style becomes substance" — small habits compose into architecture.

## 2. DRY — Don't Repeat Yourself

- Popular understanding: "don't duplicate *code*." Origin (Hunt & Thomas, *Pragmatic Programmer*): "**every piece of knowledge must have a single, unambiguous, authoritative representation**" — about **duplication of knowledge/intent**, not copy-paste. The 2nd edition admits they explained it poorly the first time.
- Related: XP's **"once and only once"** (Beck) — part of *simple design* in **priority order** (communicate everything; no duplicate code; fewest classes; fewest methods) — the priority order got ignored. A DRY-violation tool that points at duplicate *code* isn't finding knowledge duplication. Note: duplication vs. coupling is a **trade-off**; some duplication is unavoidable/fine in a true system.

## 3. Information Hiding ≠ Data Hiding

- Often conflated with data abstraction (Liskov, 1987 / CLU / abstract data types — "characterized by the *operations*, not the implementation"; C# devs: stop exposing public data via properties).
- **Information hiding** traces to Parnas (1972: modules hide a design decision; interfaces reveal as little as possible) and, earlier (1971), to hiding design information from *people* — control the distribution of design info. That original framing is toxic within a team / doesn't fit open source or monorepos; the useful modern reading is **published-API / strong-boundary** design (Lampson, 1983: "an interface is a contract to deliver a certain amount of service").

## 4. SOLID, Especially SRP

- Henney: **L** (Liskov substitution) is the only legitimate principle; **S** and **O** are wrong (O more so); **I** and **D** are contextual practices.
- **SRP** works as a *suggestive* practice (Unix: "do one thing well") but falls apart as precise doctrine. Martin admits the name is "particularly inappropriate"; redefinitions drift: **"single reason to change"** (paradox for multi-class modules; assumes you can predict the future), then **"responsible to one actor/role."**
- **"Responsibility" was always plural** — Booch ("some behavior for which an object is held accountable" — implying more than one), Wirfs-Brock's **responsibility-driven design** (1989), Beck & Cunningham's **CRC cards** (responsibilities, plural). A queue naturally has several responsibilities (containment, enqueue, dequeue, notification). Splitting into `Enqueuer`/`Dequeuer` objects (vs. **interface segregation** by role) just adds code and confusion — "bollocks."
- The real guidance underneath is **cohesion** (DeMarco, Page-Jones, 1970s): a handful of closely-related responsibilities; beware **magic numbers** ("four is the magic number" — no).

## 5. Separation of Concerns

- Not equal to aspect-oriented programming, and not merely "decoupling." Dijkstra (1974): it's a **thinking tool** — "the only available technique for effective ordering of one's thoughts" — being **one- and multiple-track-minded simultaneously**. It has a structural footprint (low coupling, high cohesion) but is fundamentally about **managing attention**.

## 6. Closing

- Russ Miles: *"Most of what we defend so ferociously are not principles. They're preferences dressed up in moral costume."*
- Q&A: applied too literally, **SRP causes fragmentation** — the opposite failure of the mega-class (IKEA furniture with no instructions). There's a Goldilocks middle, not governed by magic numbers.

---

*Video: https://www.youtube.com/watch?v=bBCjSRHWyDw — Transcript via yt-transcript.sh; outline generated from the transcript.*
