---
title: "ESSENTIALS - Essentials from a Real-World Microservices Journey - Sander Hoogendoorn | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Sander Hoogendoorn (iBOOD CTO) on real-world microservices — right problems, a simple adaptable per-service architecture, DDD breakdown, CI/CD, testing, service-owned data, and simplify-to-amplify ways of working."
type: "reference"
tags: ["softwaredevelopment"]
---

# ESSENTIALS - Essentials from a Real-World Microservices Journey - Sander Hoogendoorn (Talk Outline)

> Sander Hoogendoorn (CTO, iBOOD e-commerce; ~47 years coding) — a fast tour of everything to consider in a microservices world, structured around **Martin Fowler's definition** as the table of contents. A team of **13 devs, ~160 repos**, deploying **40–50×/day**.

---

## 1. Right Problems (most people pick wrong ones)

- People adopt microservices for **scalability** they don't have (an insurance login service handled 68,000 logins/min — problem solved, none existed). Real drivers he's seen: **legacy escape** (18M lines of COBOL + 12M Java; Gall's Law — a complex system can't be built from scratch, they failed 6 times) and **untangling dependencies** (data synced everywhere, broke down). Beware **technical death** (all effort on keeping the lights on, no room for innovation) — "dependencies will kill you."

## 2. Architecture: Simple & Adaptable Per Service

- The most **adaptable** architectures survive (not 13-layer ones). Every service uses the same simple structure: **domain → repositories → use cases** (also the authorization unit) **→ resource classes**, with data coming from **anywhere** (DB, another service, external system) and the service **owning its data**. His code has looked the same since a UML book 25 years ago, in C#/Java/Python/TypeScript. With 13 devs they moved to a **single stack** (TypeScript, even the mobile app → React Native) so anyone can open any repo. Also break up the **UI** into small independently deployable apps (products/basket/account/orders) mapped to business processes — apps talk only to services, services talk to data.

## 3. Breaking Down the Domain (DDD)

- Low coupling / high cohesion (1970s) = Unix philosophy = Bob Martin's SRP ("gather things that change for the same reasons"). From the DDD blue book: **bounded contexts** (product means different things in replenishment vs. ordering), **ubiquitous language** (one meaning per context), and **aggregates** (a group changing as one unit, demarcated by a boundary, accessed only via its **root** by ID) → **an aggregate maps nicely to a microservice**. Boundaries **evolve** ("forest, not desert").

## 4. CI/CD & Testing

- Small services make continuous delivery feasible ("if it hurts, do it more often; bring the pain forward"). **The bus metaphor** (the one thing to remember): "missing the bus is fine if the next one's in 5 minutes" — deploy early because you can redeploy in minutes; small deltas make testing easier. **Automate everything** (infra as code, pipeline definitions); build quality in (Deming). **Testing:** kill manual test scripts; unit tests (Feathers' anti-definition: not a unit test if it hits a DB/network/config or can't run in parallel), plus automated API/integration/web/load tests, **static analysis (Sonar** — coverage on **new** code, ~80% threshold). They dropped **pull requests / code reviews** (they slow you down; reviewers are absent, context-switching is costly) for **trunk-based development** (push small and often to avoid merge conflicts).

## 5. Data & Ways of Working

- **Services own their data** (not a shared DB — "you don't talk to another service's database"): call the owning service or keep a **snapshot** (an order snapshots product data so a price change doesn't alter the order); **duplicated data is normal**; not everything needs a relational DB (they use **document DBs** — store/fetch the whole aggregate in one call).
- **Simplify to amplify** (Dee Hock: "simple, clear purpose and principles give rise to complex, intelligent behavior; complex rules give rise to simple, stupid behavior" — like removing traffic lights so people communicate). **No individual code ownership**, no Scrum/sprints/retros/PO/estimation (beyond ballparks), experimenting with fewer standups; they **do** event storming, lots of **pair/mob programming**, and dynamic **micro-teams** — pull an item from the board, whoever's needed joins, push to production, repeat. Adopt microservices **for the right reasons**, "solve a single problem every day," experiment, and never stop learning.

---

*Video: https://www.youtube.com/watch?v=JJzYwtVow9Q — Transcript via yt-transcript.sh; outline generated from the transcript.*
