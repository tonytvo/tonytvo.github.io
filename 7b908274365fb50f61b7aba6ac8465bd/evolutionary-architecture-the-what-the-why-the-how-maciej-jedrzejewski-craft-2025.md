---
title: "Evolutionary Architecture: The What. The Why. The How. - Maciej Jedrzejewski | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Maciej Jedrzejewski ('MJ') on evolutionary architecture — start simple, fit architecture to current needs, and evolve through four phases (simplicity, maintainability, growth, complexity) via a healthcare example."
type: "reference"
tags: ["softwaredevelopment"]
---

# Evolutionary Architecture: The What. The Why. The How. - Maciej Jedrzejewski (Talk Outline)

> Maciej Jedrzejewski ("MJ"; author of *Master Software Architecture*, co-creator of *Evolutionary Architecture by Example*): "start small, dream big." Architecture, like Darwin's species, must **evolve**.

---

## 1. The Problem

- Architecture is either **too naive** (a 2-week MVP whose product table grows to 150 columns) or **too complex** ("Redis-Kafka-Kubernetes-microservices apocalypse" for imaginary problems) — and we **react too late**. The **project paradox:** you make the most decisions when you know least about the domain. **The one thing to remember:** choose architecture based on your **current needs and context, not wishful thinking** — but **don't close doors** (keep technical options open).

## 2. Four Phases (a healthcare/clinic example)

Requirements group into **highly cohesive areas** (appointment scheduling, patient treatment, drug prescription, medical records, invoicing) — "don't hire a Formula 1 driver to make a sandwich."

- **Phase 1 — Simplicity** (3–5 clinics, ~1,500 patients, 99% SLA): a **single deployment unit** (modular monolith); code = **folders per area, folders per use case** (all code for a use case together); **solution-structure tests** (ArchUnit/NetArchTest) guard the module boundaries; **one database, schema per module** (no cross-schema access); communication via referenced **public API interfaces** (extract the contract to a separate project) or **events** (in-memory queue or the DB's own inbox/outbox — no RabbitMQ yet); shared **building blocks**.
- **Phase 2 — Maintainability** (20 clinics, 10k patients, 3 teams): still a single deployment unit, but **separate project per module** (don't copy the same layered structure everywhere), extract building blocks, add a **load balancer** to scale instances, use **read replicas** (after indexes/queries) before cache, adopt **outbox/inbox** (maybe a message broker), and split **teams by business capability**.
- **Phase 3 — Growth** (300 clinics, 100k patients; patient-treatment = 40% of traffic): extract **patient-treatment as a microservice** (teams stepping on toes, security, hot module) — building blocks become a **versioned package**; scale the microservice independently; now consider **cache**, a **message broker** (can't use in-memory queue across deployments), and eventually **partitioning/sharding**.
- **Phase 4 — Complexity** (new EU regs make drug-prescription complex): fix **code** complexity with **event storming** → an **aggregate** ("guardian of consistency" — no external service mutates the object; the `cancel` command checks its own rule "within one hour" and emits an event; move stateless bits like drug selection to the front end). Complexity can equally be database/cache/API-related.

## 3. Takeaways & Q&A

- Start **as simple as possible**, be pragmatic, **defer technical decisions** to the future (project paradox), fit architecture to current needs, and evolve as the business changes. Q&A: don't build for imaginary "1M users" unless you have real evidence; **DDD strategic** (finding cohesive bounded contexts) fits everything — don't jump to **tactical** (aggregates/value objects) while skipping strategic; refactor an over-complicated system by **decomposition** (feature by feature) or **tactical forking**; bounded contexts aren't set in stone (a car-leasing company buying a truck-leasing company must evolve them).

---

*Video: https://www.youtube.com/watch?v=E5w2Hjw2szk — Transcript via yt-transcript.sh; outline generated from the transcript.*
