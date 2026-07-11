---
title: "Data Access and Data Sharing in Microservices - Mark Richards | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Mark Richards on the hardest part of microservices — data. Data domains, and six patterns for accessing data you don't own, each solving the prior's problems while introducing new trade-offs."
type: "reference"
tags: ["softwaredevelopment"]
---

# Data Access and Data Sharing in Microservices - Mark Richards (Talk Outline)

> Mark Richards: the hardest part of microservices, hands down, is **data** — which is why we can't quite get microservices right. Microservices = single-purpose functions deployed separately, **each owning its own data**.

---

## 1. Bounded Contexts & the Database-per-Service Ideal

- A **physical bounded context** (service + its data) is why a change to my service breaks nothing else — without it, microservices wouldn't work. The ideal (each table owned by its writing service) collides with reality: real databases are full of **foreign keys, views, triggers, stored procedures** plus **semantic coupling** (7 tables define an "order") and **implementation coupling**. Cutting every line is impossible ("no DBA will let you do this" — hence the DBA shortage joke).

## 2. Pragmatic Microservices: Data Domains

- Share data among a **handful (1–6) of services** via **data domains** (the "football" metaphor — each white hexagon is a domain that *preserves* semantic + implementation coupling). Rule: **no line may cross a hexagon** (remove it, or enforce in source code). When a constraint must stay, shuffle tables/services between domains, use a **proxy/delegate service** with a private contract, or **combine domains** (a function of service granularity).

## 3. Six Ways to Access Data You Don't Own

Scenario: a wish-list service needs `item_description` owned by the catalog service. Each option solves the previous one's problems but adds new trade-offs (First Law: *everything is a trade-off*).

1. **RESTful call** — easy, no frameworks; but latency (5 kinds: network, data, security, marshaling, processing), fault tolerance, and forced 1:1 scaling (63 catalog instances).
2. **Data replication** (add the column, DB join) — fastest, no dependency on catalog; but **data consistency/integrity** and unclear ownership; needs a sync mechanism (sync vs async? strict vs loose contract? payload format?).
3. **In-memory replicated cache** (Hazelcast/Ignite/GemFire/Coherence/Infinispan) — read-only replica stays in sync (~10–100 ms), survives catalog going down, no cache-invalidation worry (single writer via bounded context); but **memory grows per instance** (300 MB → 2.1 GB as you scale) and **cold start** waits for catalog.
4. **Data sidecar via distributed cache** (Redis) — externalizes data in your own bounded context; stops "interrupting" the owning service (north-south vs **east-west** traffic), holds large data (6.5 GB), no scaling blowup, can federate via consumer-driven contracts; but a dependency on the external cache and cold start remain.
5. **Shared data (data domains)** — when semantic/implementation coupling and multiple writers demand it; fastest (a join), catalog up/down irrelevant, no cold start; but **broader bounded context**, harder changes, possible security/read-write concerns.
6. **Go back to a monolith** — (the joke that solves everything).

## 4. Choosing & Q&A

- "Which is best? **It depends.**" REST for large volumes/low responsiveness (send an email); replication for reporting aggregates; option 3 for high responsiveness/low volume; sidecar when data is too big or update rate too high; shared data for speed + preserved dependencies.
- Q&A: enforce cross-service **foreign-key integrity** via async events + **fitness functions** (count/hash checks); caching invalidation is only a problem when you break the bounded context; two services writing the *same column* is disastrous — consolidate. **Sam Newman's advice:** start coarse-grained, move fine-grained. Disintegration drivers: **code volatility, scalability, fault tolerance, security, cohesion.**

---

*Video: https://www.youtube.com/watch?v=mfxR1JkS7us — Transcript via yt-transcript.sh; outline generated from the transcript.*
