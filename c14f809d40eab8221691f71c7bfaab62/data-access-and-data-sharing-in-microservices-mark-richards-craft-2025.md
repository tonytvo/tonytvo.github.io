---
title: "Data Access and Data Sharing in Microservices - Mark Richards | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Mark Richards on the hardest part of microservices — data. Physical bounded contexts, the database-per-service ideal vs. reality, data domains (the 'football' metaphor), and five (plus a joke sixth) patterns for accessing data you don't own, each solving the prior's problems while adding new trade-offs."
type: "reference"
tags: ["softwaredevelopment"]
---

# Data Access and Data Sharing in Microservices - Mark Richards (Talk Outline)

> **Mark Richards** (Boston; prolific author; co-author with **Neal Ford** of *Fundamentals of Software Architecture*; on a 6-week world tour). Golden nugget for developers: **keep learning and build community**. Thesis: **the hardest part of microservices, hands down, is data** — which is exactly why we can't quite get microservices right. Microservices = **single-purpose functions deployed as separate units of software, each owning its own data.**

---

## 1. Bounded Contexts & the Database-per-Service Ideal

- Mapping DDD to microservices: a **domain bounded context** becomes a **physical bounded context** = the service functionality **with its corresponding data**. Communication between them forms **consumer-supplier collaboration patterns** (part 2 of the talk).
- **Why it matters:** when I change my service and the data I own, **nothing else breaks**. "Without the bounded context, microservices simply would not work."
- Each service owns its data → **dedicated data / database-per-service**. Ownership rule: **if the service writes to a table, it owns it** → group tables into tight bounded contexts (a physical database or a schema).
- **The theory-vs-reality gap** ("microservices is a highly theoretical architecture style"): Richards has seen a "clean" database like the diagram **once in 40 years**. Real databases are full of **foreign key constraints, views, triggers, stored procedures** — plus **semantic coupling** (e.g., **7 tables define the entity of an "order"** — you can't sensibly break them apart) and **implementation coupling**.
- To form tight bounded contexts you'd have to **cut every line** — remove **every foreign key, view, stored procedure, trigger**.
- **DBA joke:** worried GenAI takes your job? **Become a DBA** — a severe shortage (3–4× salary, guaranteed job) because telling a DBA "we're moving to microservices, remove every FK/view/proc/trigger" makes their **head pop off**. "No DBA in the world will let you do this" → forming those contexts is, in most cases, **simply not possible**. And a single shared database is the worst option (change control, scalability, fault tolerance, connection problems).

---

## 2. Pragmatic Microservices — Data Domains

- **Data domain** = sharing data among **a handful of services** that still need the same data context (you may still have good reasons to split the functionality).
- **The football metaphor:** the database is a football; each **white hexagon** is a **data domain** that **preserves both semantic and implementation coupling** (FKs, triggers, views, stored procedures) — cut out the hexagon → a database or schema. Each domain has **1–6 services** connecting to it (avoid >6, or scalability/fault-tolerance/change-control/connection-pool issues creep in). Used for ~**10 years**, works well.
- **The one rule:** **no line (FK/view/trigger/stored-procedure) may cross a hexagon** — remove it or enforce the constraint in **source code**.
- **When a line must stay** (business/data-integrity reason): 
  - If a table isn't bound to anything, **move it to the other domain** (but check the service that uses it — "you just moved my data" → move the service too).
  - If the service needs other data, **ask another service** to retrieve/update on its behalf — sometimes via **delegation**: a private **proxy service** in your bounded context with a **private contract** (still bounded contexts, just broader).
  - If a table is connected to many others, the only option is to **combine the data domains** — which means more services share data → a function of **service granularity** (combine the functionality).
- **Can we share data in microservices? Definitively yes** — and often you must.

---

## 3. Six Ways to Access Data You Don't Own

Scenario: a **wish-list service** shows `item_id` + `item_description`, but **catalog service** owns `item_description`. Each option solves the previous one's problems and adds new trade-offs.

### Option 1 — RESTful call
- Send catalog a list of item IDs → it queries and returns descriptions. **Easy, understandable, no extra frameworks.**
- **Drawbacks:** if catalog is down, wish-list is down (**fault tolerance**); **five kinds of latency** — **network** (60–300 ms), **data** (2 DB calls), **security** (is the endpoint secure? — fallacy #1 of distributed computing "the network is secure"; check/validate the web token, maybe reauthorize), **marshaling/unmarshaling**, and **processing** (aggregations); and **forced 1:1 scaling** ("why are there 63 instances of catalog?").

### Option 2 — Data replication
- Add an `item_description` column to the wish-list table; load descriptions locally → **no dependency on catalog**, scales independently, and it's the **fastest** (a DB join, no extra processing).
- **Trade-off:** **data consistency/integrity** — on add/remove/change you must notify wish-list. Sync or async? Strict or loose contract? Payload (JSON/XML/C# objects)? All three carry significant trade-offs. And **who really owns the data** now (you could start editing descriptions yourself)?

### Option 3 — In-memory replicated cache
- Each catalog instance has an internal key-value cache; wish-list holds a **read-only replica**, kept in sync (~**10–100 ms**) via **Hazelcast, Apache Ignite, GemFire, Coherence, Infinispan**. Catalog "blows up" → wish-list is **fine**, and the data is **guaranteed 100% in sync** — **no cache-invalidation** worry because the **bounded context** means catalog is the **single writer**.
- (Aside — "two hardest things in CS": naming things, **cache invalidation**, and off-by-one errors — US elevators are 1-based, Europe 0-based.)
- **Cautions:** the cache lives in **each instance's memory** (300 MB → **2.1 GB** as you scale; max auto-scale ~25 but you'll never exceed ~6), and **cold start** (wish-list waits until catalog starts and handshakes). Don't store high-update data like **inventory** — update rate exceeds replication latency (still eventually consistent).

### Option 4 — Data sidecar via distributed cache (Redis)
- **North-south vs east-west** insight: a service's primary job is serving the UI/API (**north-south**); "just call another service" **interrupts** it and burns its CPU/threads/memory on **east-west** traffic. (Live demo: Richards kept getting interrupted for "what time does this end?" until he **posted the answer on the curtain**.)
- Fix: put your data **external to you, in your bounded context**, in a **distributed cache (Redis)** — you're the only writer; **no interruptions**, and you can **share** it (the cache is the contract). **Federate** to multiple sidecars via **consumer-driven contracts** (each consumer gets slightly different data). Handles **large data** (6.5 GB fits), **no scaling blowup** (cache stays 300 MB), **better consistency**; catalog can disappear and you still read.
- **Remaining issues:** a **fault-tolerance dependency** on the external cache, and **cold start** on a true cache restart.

### Option 5 — Shared data (data domains)
- The §2 approach: when **semantic + implementation coupling**, **multiple writers**, and **fast access** demand it. **Fastest** (a join), catalog up/down irrelevant, **no cold start**. Solves every issue from options 1–4.
- **Trade-off** (First Law of Software Architecture: *everything is a trade-off*; corollary: *if you think you found something with no trade-off, you just haven't found it yet*): a **broader bounded context**, **harder changes**, possible **security** issues (now the consumer chooses what it reads, vs. you controlling it in options 1–4), and possible read-write concerns.

### Option 6 — Go back to a monolith
- The joke that "solves every issue."

---

## 4. Choosing an Option

- "Which is best? **It depends.**"
  - **Option 1 (REST):** large data volumes, low responsiveness needs (e.g., "send the customer an email").
  - **Option 2 (replication):** reporting/aggregates (he dislikes it for integrity reasons otherwise).
  - **Option 3 (in-memory cache):** high responsiveness + low data volume.
  - **Option 4 (sidecar):** same, but when data is too big or update rate too high for option 3.
  - **Option 5 (shared data):** the fastest, preserves data dependencies.

---

## 5. Q&A

- **Isn't holding item IDs as pseudo-foreign-keys (no real FK) vulnerable?** Breaking up data breaks FK relationships, but you can **keep the constraint in source code**: on add/delete, notify holders via **async messages/events** ("I deleted a product — anyone with this FK, delete it"), and run **fitness functions** (background tests using **counts/hashing**) to ensure primary keys match foreign keys across databases.
- **Caching when you must invalidate on other services' events — best practices?** Cache-invalidation problems arise when you **break the bounded context** with independent, non-communicating in-memory grids. Use **option 3 tools** (Hazelcast/Ignite/GemFire/Coherence/Infinispan) that keep all instances' caches in sync via constant pings (a lost ping shuts the service down to avoid a stale cache); **options 3 and 4** avoid cache-invalidation worries.
- **Two apps modifying the same tables — dangerous side effects?** Updating the **same column** (e.g., inventory) from two services is **disastrous** → **combine the services**. But two services can share a table if they update **different** columns (e.g., a **product service** for static info + an **inventory service** for min/max/current) — use **table split, service consolidation, or delegation**.
- **Why use microservices here at all — why not a bigger service with its own data?** Consolidation is one solution, but **Sam Newman's** advice: **start coarse-grained, move fine-grained** as you learn. **Five disintegration drivers** to split a service: **code volatility** (only one corner changes weekly but you retest/redeploy everything), **scalability/throughput** (notification/SMS at 220,000 texts/sec vs 1–500 elsewhere), **fault tolerance** (a memory-leaking part takes everyone down → carve it out for better MTTR), **security** (access to certain areas), and **cohesion**.

---

## People, Books, Tools & References Cited

- **Mark Richards** — speaker; co-author (with **Neal Ford**) of *Fundamentals of Software Architecture* (First Law of Software Architecture).
- **Sam Newman** — *Building Microservices*; "start coarse-grained, move fine-grained."
- Caching tools: **Hazelcast, Apache Ignite, GemFire, Coherence, Infinispan, Redis**.
- Concepts: physical bounded context, database-per-service, semantic/implementation coupling, data domains ("football"), proxy/delegate service, consumer-driven contracts, north-south vs east-west, fitness functions, five disintegration drivers, fallacies of distributed computing.

---

*Video: https://www.youtube.com/watch?v=mfxR1JkS7us — Transcript via yt-transcript.sh; outline generated from the transcript.*
