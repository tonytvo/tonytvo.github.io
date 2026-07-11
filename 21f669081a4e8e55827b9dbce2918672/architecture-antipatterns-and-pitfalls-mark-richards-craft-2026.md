---
title: "Architecture AntiPatterns and Pitfalls – Mark Richards | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Mark Richards on architecture anti-patterns (architecture-by-implication, stovepipe) and pitfalls (microservice-all-the-things, grains of sand) — capabilities vs. behavior, Gall's Law, and 'learn to ride a horse first.'"
type: "reference"
tags: ["softwaredevelopment"]
---

# Architecture AntiPatterns and Pitfalls – Mark Richards (Talk Outline)

> Mark Richards (co-authoring *Software Architecture Patterns, Anti-Patterns and Pitfalls* with Neal Ford & Raju Gandhi) on what we do that we shouldn't. **Anti-pattern** = seems good, trade-offs, but leads somewhere bad; **pitfall** = never a good idea (a trap).

---

## 1. Anti-Pattern: Architecture by Implication

- **Degree of ephemerality:** high ephemerality (short-lived) → don't need architecture (a doghouse); low ephemerality (permanent) → can't survive without one. Architecture is expensive; applying it where unneeded is overkill.
- **Architecture by implication** = building without considering architecture (spaghetti). Common with **vibe coding / spec-driven development** (focus on *behavior*, tests pass, but no architecture) — and with humans ("good/cheap/fast — pick two"; stakeholders pick cheap + fast).
- Story: a youth-football registration site (high ephemerality) gains features → countries adopt it → ephemerality drops toward permanence → **without architecture it crashes**.
- **Behavior vs. capabilities:** you can *emerge* behavior (roller skate → truck), but **capabilities** (the -ilities: scalability, fault tolerance, availability…) require **planning** — you can't bolt architecture on. **Gall's Law:** a complex working system evolves from a simple working one; a complex system designed from scratch can't be made to work. Apply it: start with a *simple* system that already meets a capability (e.g., scale to 100k users), then emerge the design, measuring and backing up when capabilities break.

## 2. Anti-Pattern: Stovepipe

- An ad-hoc collection of semi-related structures → brittle, unreliable, hard to change. You *have* a solid architecture, but new features get **bolted on haphazardly** (no attention to component responsibilities) until it collapses — in both monoliths and distributed systems (services growing tangled A↔B↔C↔D calls).
- **Avoid both via architecture — structure *and* capabilities.** See the architecture in the **source-code structure**: directories/namespaces = domains/subdomains/components. Reality check: **reverse-engineer** your directory structure and it looks nothing like the diagram you drew (100% tests passing, but ticket-assignment code is "somewhere," survey-receive buried, etc.). The aligned structure is more **agile, reliable, adaptable, extensible, migratable**.
- When adding functionality, always ask: **which existing component should own this?** If none, **should we create a new component, and what must it talk to?**

## 3. Pitfall: Microservice All the Things

- Assuming *every* part of the system must be a microservice. Microservices' superpowers (maintainability/testability/deployability, scalability/elasticity) come with **kryptonite** (most expensive, most complex, possible performance cost from inter-service calls).
- For admin/warehousing/fulfillment functionality that **doesn't need the superpowers**, you incur **all the kryptonite and none of the benefit** — no trade-off, just negatives. Only the customer-facing part justifies it.

## 4. Pitfall: Grains of Sand

- Making services **too fine-grained** (every function a service) → everything must talk to everything. Related to microservice-all-the-things.

## 5. The Fix — "Learn to Ride a Horse First"

- A steeplechase (microservices, EDA) requires learning to ride first:
  1. **Ride a horse** → **service-based architecture** (coarse, domain services sharing data).
  2. **Ride fast** → analyze which domain services actually **need microservice superpowers**.
  3. **Steeplechase** → break *only those* into microservices.

## 6. Four Key Points

1. Apply architecture when you need **capabilities** (or low ephemerality) — architecture requires **planning**.
2. Think of your system/services as **components** — identify and govern them so change lands in the right place.
3. **Not every part must be a microservice**, even if you chose that style.
4. Start **coarse-grained** and split only with justification (avoid grains of sand).

- Q&A: it's not anti-YAGNI — apply *some* architecture (candidate components), then iterate/evolve; fix stovepipes via low-risk **decomposition patterns** (restructure where code lives); AI is great at **behavior** but not trade-off analysis — a human architect is still needed (and can teach agents architecture via a pseudo-language + specs).

---

*Video: https://www.youtube.com/watch?v=jz8wSo9aXtE — Transcript via yt-transcript.sh; outline generated from the transcript.*
