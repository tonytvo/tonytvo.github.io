---
title: "Legacy Architecture Migration Patterns - Nick Tune, Guillaume Rahbari | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Nick Tune and Guillaume Rahbari (Payfit) on migrating legacy architecture — migration as domain-model improvement, the pattern catalog (strangler fig, bubble, wrapping, migrate-write/read-first, bidirectional sync, event republishing), and two real Payfit case studies with observability lessons."
type: "reference"
tags: ["softwaredevelopment"]
---

# Legacy Architecture Migration Patterns - Nick Tune, Guillaume Rahbari (Talk Outline)

> **Nick Tune** (hands-on tech leader; author of *Architecture Modernization*; ~1 year at Payfit) and **Guillaume Rahbari** (senior software engineer, 5+ years at Payfit; owns ACL/authentication, third-party integrations, and led a core entity migration). For anyone with a legacy system and a vision of a target architecture: principles, patterns, and two **Payfit** case studies with two different migration approaches.

---

## 1. Context — Payfit & the Vision

- **Payfit** = an all-in-one **HR & payroll** platform (employees, contracts, payroll data in one place). Creating an employee involves many steps to collect personal + contract data so HR and payroll work together.
- **Tech transformation** goal: scale in a **healthy, sustainable** way — empower teams to innovate faster, work autonomously, improve developer experience, reduce reliability issues.
- Approach: **decouple** the architecture using **domains and layers** (modular/independent), using **low-code** where it delivers faster.
- **Long-term vision:** **domain-driven + event-driven** — each business domain **owned by a team**; teams communicate via **domain events** when something important happens → decoupled, autonomous teams.

---

## 2. Migration Is Model Improvement, Not Just Rewriting

- Migration isn't "take the old system and rewrite in new tech." You choose what to migrate/fix/improve/modernize — including the **old UI**, the **software/infrastructure** (latest tech = productivity), and, deeper, the **domain model** (how the business is represented) and even **the business itself** (simplify, automate, delete, inject AI everywhere).
- **Semantic drift:** code semantics get "crystallized" and hard to change, while business terminology keeps evolving. Metaphor: the business first had a **triangle**, evolved to a **square** — developers either refactor everywhere or **cut a corner off the triangle, duplicate and reuse** to fake four corners → features work, technical debt accrues.
- **Coupling & boundaries:** legacy has many cross-domain dependencies and related logic scattered around — **don't migrate the coupling**; **cut dependencies, bring cohesive logic together**, and **change domain boundaries** while migrating.

---

## 3. The Pattern Catalog

- **Strangler Fig** — "every workshop group lists it first; calm down." A **router** shifts requests to modernized code incrementally. Good ideas, but in reality models/APIs/schemas change, so routing isn't as clean; and it **doesn't solve data**.
- **Data integration** (new and old code read/write the same conceptual info): **domain events**, **change data capture**, **batch/import jobs**, or a **shared database**.
- **Bubble context** (DDD) — build the **new domain model as a bubble** behind an **anti-corruption layer**, gradually moving logic in without replacing the whole legacy. **Autonomous bubble** — same but with **its own database** kept in sync via **async replication**.
- **Wrapping** — wrap the legacy with an **API** (or, better, **domain events**) to expose assets without touching the old codebase.
- **Migrate-write-first** — **writes** go through the new system, **reads** stay on the old, background sync keeps both in step → learn/own the new domain incrementally with quick feedback (can take a year+; done step by step).
- **Migrate-read-first** — **reads** through the new system, **writes** on the old, sync both → e.g., reduce **load on the legacy database**; also incremental.
- **Bidirectional sync** — reads **and** writes on both systems, syncing both directions — **risky** (data inconsistencies, more complexity/maintenance/observability, harder debugging). **Not recommended**, but good to know it exists (spoiler: they used it).

---

## 4. Case Study 1 — Employee Management (migrate-write-first)

### 4.1 The domain and the mess
- The **employee management (EM)** domain sits **upstream** of payroll, absences, etc., which need up-to-date info.
- Current state: **System A** (company monolith — successful, no bad feelings), plus a **2020** EM extraction attempt and a **2024** second attempt with different use cases → **three systems**, and **three countries** with **different models** (France payroll-complex vs. simpler UK).
- **Semantic-drift example:** an `employee` (personal info + contract details + type) assumed **one contract each**; when employees got multiple contracts, `employee` was renamed to `contract` but the model stayed → **duplicated personal info**, and `employeeId` sometimes is actually a **contract ID** (inconsistent APIs).
- **Target model:** a **collaborator** (= a kind of employee) with **one personal information/profile** regardless of contract count; a **contract** becomes a kind of **working agreement** (alongside **mandate**, **internship**, currently forced into "contract").

### 4.2 The decision and the reality
- Pulled three ways: other domains want **events ASAP**; partners want **new read APIs / advanced search**; complexity pushes toward **the new model first**.
- Chose **migrate-write-first** because it (1) was **faster** (forces handling the most complex flow up front) and (2) let them **understand and own the domain model early** → fewer bugs early. Done **incrementally** (both systems run together, deliver value along the way, no big-bang switch).
- Reality bites: it's actually a **three-directional sync** (collaborators can be created in each of the three systems, all kept in sync + domain events published) — despite the earlier "don't use bidirectional sync" advice.
- **"Doublons"** (French for duplicates): support tickets showed the same employee **four times** — one active, four "call in progress"; deleting a duplicate returned "URL doesn't exist" (one part thinks it exists, another doesn't). Cause: a **broken matching process** during UI-create + import-file flows across **four data stores** (System A **MongoDB**, System B **Postgres**, event store, read model) — synchronization is really **sync + translation of different models**; diagnosing takes time while more tickets arrive. (Doing support is a great way to learn legacy pain points.)
- **21 entry points** just to create an employee in the legacy (plus country-specific variations) — **reverse-engineered and merged** to cut accidental complexity/duplication and enable **reliable, consistent domain events** (publishing an event in some cases but not others blocks other domains).
- **Migration order** choice: back-end first (easy to validate business logic, hard to improve UX), front-end first (quick UX win, more complexity/inconsistency), or **both together** (consistent end-to-end but must coordinate). They chose **both together** because front-end/back-end were **tightly coupled in the low-code platform**.
- **Benefits:** deliver value incrementally to users and other teams (earlier feedback, quick adaptation) and **country-specific simplification** (from one employee entity per country → **one entity for all countries**). Trade-off: **take control of the domain fast** but **slower to unlock other domains**.

---

## 5. Case Study 2 — Contract (legacy event republishing)

- Problem: EM became a **bottleneck** for teams waiting on **working-agreement events/APIs** while EM focused on the employee write model. (Payfit's culture is good — no pressure — but they felt the need.)
- **Rejected option:** let other teams consume the **raw legacy events** EM already receives → would **couple everyone to the old model**, more migration work later, risk of a permanent half-finished migration ("people at this conference in five years talking about systems A, B, C, **and D**").
- **Chosen: republishing** — consume legacy (mostly **technical**) events, **convert to the new model**, and **publish those** → encapsulates the legacy, gives other teams **new-architecture events**, keeps EM focused. ("Republishing" doesn't accurately describe it — **translating between models is more work than you'd expect**.)
- **Observability** is essential:
  - An **internal portal**: enter any entity ID → see all public/private event-sourcing events across domains/systems.
  - All events in **Snowflake** for advanced/correlated queries (e.g., correlate an employee create + a file upload that broke state).
  - A **DLQ** ("you'll grow to hate it") — evolved logging to capture the **full message + full error** so failures are diagnosed quickly.
- **Challenges:** legacy events are **unreliable** — direct DB edits emit **no events**, some legacy flows don't publish, plus **duplicates** and **out-of-order** events (e.g., a contract "terminated" then later "updated"); country specifics; and a **stricter new model** ("how do we fit old data into it?"). Still happy — it **unblocked other teams fast** while EM learned the new contract/working-agreement model.

---

## 6. Takeaways & Q&A

- **Three takeaways:** (1) think about which **principles/patterns** fit your company; (2) incremental write migration (not all writes at once) **almost guarantees a bidirectional sync** — prepare for consistency issues early; (3) it needs **leadership priority** and a clear **architecture vision** to steer through hard moments. And: **"progress feels good — don't give up"** (a year in, **half of manual creations** run on the new system as of February); it happens via **teamwork and knowledge sharing**.
- **Q&A:**
  - *An intermediate ACL module that translates legacy→new events so all modules consume it without pulling EM?* Valid — translate at source/target/intermediate. But here most translation logic lived **in their domain** (legacy event → operation on the new contract aggregate), so a separate component wasn't worth it; it'd make sense if the translation were **temporary/throwaway**, not part of evolving the model.
  - *How do you synchronize data?* Mainly via a **private event store** (push events, other tools listen and create entities), on an **integration platform** built on AWS with common tools/templates supporting **both directions**; **standard sync mechanisms beat ad-hoc integrations**.
  - *How did you find the 21 entry points / ensure no more?* Took **several months**, asking many people at Payfit; none found for a while now (they hope).

---

## People, Companies & References Cited

- **Nick Tune** — author of *Architecture Modernization*; **Guillaume Rahbari** — senior engineer, both at **Payfit**.
- **Payfit** — HR/payroll platform; systems A/B/C across France/UK; MongoDB, Postgres, event store, read model, **Snowflake**, AWS integration platform, DLQ.
- Patterns: strangler fig, bubble/autonomous bubble context, anti-corruption layer, wrapping, migrate-write-first, migrate-read-first, bidirectional/three-directional sync, legacy event republishing.
- Concepts: semantic drift, domain events, event-driven/domain-driven architecture, collaborator/working-agreement model, "doublons," observability portal.

---

*Video: https://www.youtube.com/watch?v=X1imE1ks_3Y — Transcript via yt-transcript.sh; outline generated from the transcript.*
