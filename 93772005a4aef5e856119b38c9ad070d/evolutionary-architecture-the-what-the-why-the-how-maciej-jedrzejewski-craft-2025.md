---
title: "Evolutionary Architecture: The What. The Why. The How. - Maciej Jedrzejewski | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Maciej Jedrzejewski ('MJ') on evolutionary architecture — start simple, fit architecture to current needs (not wishful thinking), and evolve a healthcare app through four phases: simplicity, maintainability, growth, and complexity."
type: "reference"
tags: ["softwaredevelopment"]
---

# Evolutionary Architecture: The What. The Why. The How. - Maciej Jedrzejewski (Talk Outline)

> **Maciej Jedrzejewski ("MJ")** — tech-agnostic software architect, DDD evangelist, currently a team lead in Switzerland (13 years in IT). Author of ***Master Software Architecture*** and co-creator (with **Kamil Bączek**) of the open-source ***Evolutionary Architecture by Example*** (.NET). Philosophy: **"start small, dream big."** Framed by **Charles Darwin** — all species descend from one ancestor; likewise software architecture must **evolve**.

---

## 1. The Problem

- Architecture is **too naive** or **too complex**:
  - **Too naive:** a startup ships a 2-week MVP (products with names/descriptions); requirements keep changing (colors, sizes, prices, statuses) → keep adding columns → a **product table with 150 properties**.
  - **Too complex:** the **"Redis-Kafka-Kubernetes-microservices apocalypse"** thrown in from the start for problems you don't have.
- Either way, we **react too late** to change our initial architecture.
- **The project paradox:** you must make the **most decisions at the beginning**, when your **knowledge of the business domain is minimal**; by the time you know the domain, there aren't many technical decisions left.

### 1.1 The one thing to remember
- **Choose architecture based on your current needs and current context — not wishful thinking** ("maybe in a year we'll have 1M users / 3PB of data").
- **But don't close doors** — keep technical options open (e.g., don't build yourself out of ever using a relational database).

---

## 2. The Healthcare Example & Cohesive Grouping

- A startup building software for **private medical clinics**: request/schedule appointments, prepare/start/complete treatment, select drugs, provide prescriptions, manage medical records, keep disease history, prepare/send invoices, and more.
- Where to start? With **his free 86-page book** on analyzing requirements → transforming them into software → **grouping** features into **highly cohesive areas** (closely related, single purpose/business capability). "Invoicing shouldn't schedule appointments — you don't hire a **Formula 1 driver to make a sandwich**."
- Areas: **Appointment Scheduling, Patient Treatment, Drug Prescription, Medical Records Management, Invoicing** — with data-flow dependencies between them.

---

## 3. Phase 1 — Simplicity

- **Considerations:** 3–5 clinics in the first 3 months, ~1,500 patients, 100 employees, Europe, **99% availability SLA** (~4 days downtime/year).
- **Deployment:** **single deployment unit** (monolith / modular monolith — runs in one process), not microservices — you're starting small.
- **Code structure:** replicate the areas as **folders** (no separate projects needed in .NET/Java — one project, folders). Within each area, **a folder per use case** (e.g., `ConfirmAppointment`, `ScheduleAppointment`) containing **everything the use case needs** (business rule "cannot be scheduled without valid insurance," endpoint, request).
- **Guard the structure:** **architecture tests** (ArchUnit for Java, NetArchTest for .NET; easy to write yourself) — e.g., a contracts module can't depend on forbidden modules; classes can be sealed, etc. MJ prefers to call these **"solution-structure tests"** (software architecture is bigger than that).
- **Database:** one database, but **modularize from the start** with a **schema per module** — modules can't access each other's schema directly; they must ask via the module's API.
- **Communication:** for a modular monolith, **reference** (not HTTP) the other module's **public API**; to avoid coupling, **extract the interface/contract to a separate project** (the implementation stays in the owning module). For one-to-many, **send an event** — other modules listen, read, duplicate data as they wish. Do it simply with an **in-memory queue** (if you lose an event on this scale, it's fixable) or the **database's own inbox/outbox** (no RabbitMQ needed — leverage Postgres).
- **Building blocks:** always present (exception middleware, API filtering) — reusable across modules.
- **Summary:** each module has a schema; use cases contain all their code (drop a use case = delete its folder; extract an area = move its folder to a new deployment unit + middleware).

---

## 4. Phase 2 — Maintainability

- **Considerations:** now **20 clinics**, **10,000 patients**, patient-treatment module is complicated and growing, drug-prescription is used far more, some modules CRUD / some complex, and **3 teams** (up from 1). Drivers: performance ↓, complexity ↑, **maintainability ↓ (worst)**.
- **Deployment:** **still a single deployment unit** (10k users isn't many for this domain).
- **Code structure:** a **main project** references and registers all modules; each module gets a **separate project** with its **own internal structure** — **don't copy the same layered structure** across modules (CRUD vs. complex differ). Extract **building blocks to a separate project** (multiple projects now reference them).
- **Scaling:** add a **load balancer** to run multiple instances (instance 1/2, each with all 5 modules). For read traffic, **don't add cache** — first fix **indexes/queries**, then add **read replicas**; only later consider cache.
- **Communication:** keep public APIs, but adopt **outbox/inbox** (message stored in outbox → other module reads → processes via inbox) — in-memory queue still possible, or consider a **message broker**.
- **Teams:** split **by business capability** (a team owns cohesive areas; Team A doesn't touch drug prescription, etc.), with integration where areas communicate (invoicing ↔ drug prescription).
- **Summary:** main project holds appointment scheduling, invoicing, medical records (+ drug prescription); the two problematic modules are separated (candidates for future extraction); 3 teams; async via inbox/outbox.

---

## 5. Phase 3 — Growth

- **Considerations:** **300 clinics**, **100,000 patients** (10×), **patient-treatment = 40% of traffic** and the most-updated, needing another team. Drivers: performance ↓ (huge), complexity ↑, maintainability ↓.
- **Deployment:** now **extract patient-treatment as a microservice** — reasons: multiple teams stepping on each other's toes, better **security** for sensitive data, or a **hot/frequently-updated** module.
- **Building blocks** become a **versioned package** (NuGet/npm) used by both the modular monolith and the microservice → now you must manage **versioning** (major/minor/patch) and keep teams updated (maybe a team owns the package).
- **Database:** multiple instances — e.g., invoicing + medical records on one, appointment scheduling + drug prescription on another, patient-treatment's own DB on a third → scale patient-treatment independently.
- **Cache/communication:** now maybe **add cache** (optimize reads / simplify monolith↔microservice comms) — but "wait with cache" ("added cache to solve one problem, now I have two"). Cross-deployment communication needs a **message broker** (no more in-memory queue; Postgres still an option). For write problems: **partitioning, sharding**.

---

## 6. Phase 4 — Complexity

- **Considerations:** **new EU regulations** make the **drug-prescription** module super complex; hard to maintain; the team raises concerns → maintainability ↓ again.
- **Deployment unchanged**, but fix **code** complexity. Problem: a "stupid entity" `prescription` mutated by many external services (business logic scattered around it).
- Use **event storming** at the design level to find the **commands** and who triggers them: a **doctor** can look for drugs, select/change selection, prepare/modify/provide/cancel a prescription; **business rules/policies** (no more than 10 drugs, unique number assigned, valid insurance); and the **events** emitted (prescription prepared/modified/provided/cancelled; drugs found/selected).
- Insight: stateless bits (drug selection) can move to the **front end**; the `cancel` **command** is sent **into the prescription**, which checks its **own rule** ("within one hour"), changes state, and emits the event.
- Formalize as an **aggregate** — a **"guardian of consistency"**: no external business logic mutates it directly; everything is encapsulated. Database/cache/communication choices remain flexible.
- Complexity isn't only code — it can be **database-, cache-, or API-related**; all fall into the "complex things" bag.

---

## 7. Takeaways

- "I was going to tell a joke about evolutionary architecture, but **it's still evolving**." 
- **Start as simple as possible**; don't be the "new kid" throwing every tech into the project (or onto your CV). Be **pragmatic**, **defer technical decisions** to the future (project paradox), **fit architecture to current needs, not wishful thinking**, and **assume the business — and thus the architecture — will change**.

---

## 8. Q&A

- **Story-map-like requirements — should known future iterations shape the design?** *It depends.* If "1M users in a year" is grounded (your company already runs similar 1M-user apps), consider it; if you're a startup guessing, **cut imaginary features** from the roadmap.
- **Introducing event sourcing mid-way / migrating existing data to an event store?** Ask **Oskar Dudycz** (an expert). It's doable but ask if you **really need** the full history/business events (a karate club probably doesn't) — belongs in the complexity phase; it's a "Pandora's box," not a 2-minute answer.
- **Already have an over-complicated system?** Run proper workshops (**event storming**, **domain storytelling**) to identify cohesive areas, then either **decompose** feature-by-feature into modules/microservices, or use **tactical forking** (fork, strip everything but the target area, refactor) — MJ prefers decomposition.
- **Is DDD "simple" enough to start with?** As a DDD evangelist, he cares most about **strategic DDD** — exactly what he did here (finding cohesive areas → **subdomains** → **bounded contexts** → a **context map** of relationships). Strategic DDD fits every business app; **don't jump to tactical** (aggregates/value objects/entities) while **skipping strategic** ("then you're hacked up"). Bounded contexts aren't set in stone — a **car-leasing company buying a truck-leasing company** must evolve them. (Resource: **DDD Crew** on GitHub.)

---

## People, Books & References Cited

- **Maciej Jedrzejewski ("MJ")** — speaker; author of *Master Software Architecture*.
- **Kamil Bączek** — co-creator of *Evolutionary Architecture by Example* (.NET, open source).
- **Charles Darwin** — evolution framing.
- **Oskar Dudycz** — event sourcing expert (referenced in Q&A).
- **DDD Crew** (github.com/ddd-crew) — bounded-context / context-map materials.
- Concepts/tools: modular monolith, schema-per-module, public-API contracts, in-memory queue, **inbox/outbox**, ArchUnit/NetArchTest ("solution-structure tests"), read replicas, message broker, partitioning/sharding, event storming, **aggregate** ("guardian of consistency"), strategic vs. tactical DDD, tactical forking, project paradox.

---

*Video: https://www.youtube.com/watch?v=E5w2Hjw2szk — Transcript via yt-transcript.sh; outline generated from the transcript.*
