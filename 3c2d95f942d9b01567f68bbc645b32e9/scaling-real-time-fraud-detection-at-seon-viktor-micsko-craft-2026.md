---
title: "Scaling Real–Time Fraud Detection at SEON – Viktor Micskó | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Viktor Micskó on SEON's database evolution for real-time fraud scoring — the two query shapes, single PostgreSQL and its four limits, sharding, ClickHouse + a measurement-driven router, custom pre-aggregation, and the move to distributed YugabyteDB with bucket-key/bucket-skew hash sharding."
type: "reference"
tags: ["softwaredevelopment"]
---

# Scaling Real-Time Fraud Detection at SEON – Viktor Micskó (Talk Outline)

> **Viktor Micskó** — lead of the **performance engineering team at SEON** — traces years of database evolution behind SEON's **fraud-scoring engine**, driven by two access patterns and relentless **tail-latency** and **storage** limits. Milestones: single **PostgreSQL** → **sharded PostgreSQL** → **ClickHouse** → **pre-aggregation** → distributed **YugabyteDB**.

---

## 1. The Product & Two Query Shapes

- SEON catches fraud with (1) hundreds of **enrichment signals** (data about the customer's customers — e.g., an iGaming withdrawal) and (2) a **deep-and-wide scoring engine** (a competitive advantage) that boils down to **time-frame aggregations** — **"velocity rules"** like "how many email addresses did we see for this IP in the past 24h?" A rule = an aggregation function + field + time-frame scope + filters/features, evaluated at **high QPS** and **latency-sensitive** ("no point catching fraud too slowly").
- **Two access patterns:**
  - **Query A (OLTP-like):** a **high-cardinality filter** (user ID) → few actual events.
  - **Query B (analytical-like):** **long time frames**, no/low-cardinality filters, group-by aggregations (per merchant). Most of the journey is about **Query B**.

## 2. Single PostgreSQL → Four Limits

- A great default, but they grew out of it. Four limits:
  1. **32 TB relation size** — **compiled into PostgreSQL**, effectively fixed.
  2. **TOAST table exhaustion** — they'd stored whole request/response **JSON** in a wide table → large values get **toasted** to an auxiliary table whose identifier is an **unsigned int** (also compiled in) → exhaustion (months of his life fighting this).
  3. **Self-inflicted integer primary key** running out — hard to replace an ID column (vs. a normal column: add new, backfill, drop) → switched to **bigint**.
  4. **RDS EBS volume size** cap — eventually just too much data for a single DB.

## 3. Sharding

- Since one transaction belongs to exactly **one customer** (customers don't share data), shard **one customer per shard** (multiple customers may share a DB instance), with fully **dedicated "premium" shards** for customers who insist.
- **Downside:** connection pools to every customer's shard (limited count; doubled during releases).
- **Wins:** pushed the storage deadline out, customer-group insulation. **But Query B is still slow** — still PostgreSQL, still visiting tuples. Storage/begin/TOAST limits resolved (moved data to **S3/DynamoDB**, near-TOAST-free schema); two "hourglasses" remain.

## 4. ClickHouse

- Query B "resembles an analytical/BI query," so add **ClickHouse** (a column store) — usable for transactional low-latency stuff (avoid if you can, but a good ~2-year temporary solution, still partly live).
- **Advantages:** **cache locality** (columns stored contiguously — timestamp next to timestamp), strong **compression** (10–100×; **delta / delta-of-delta** for low-jitter values like timestamps — they use delta compression for OTel telemetry), **vectorization**.
- **Numbers:** PostgreSQL "died" at a 30-day window (a not-real-but-representative query; even 9s is too much, 2s pushing it for a fraud API); **ClickHouse crunched ~6M transactions in ~1.5s**.
- **Measurement-driven router:** background-samples each rule's evaluation on **both** stores and uses the winner (stable — a rule doesn't flip every moment). Catches PostgreSQL's **bimodal** pattern (sometimes fast, sometimes hits the timeout threshold) → route to ClickHouse for a good **P99** at the cost of losing the very fast cases. **A good general pattern.**
- ClickHouse's *primary* SEON uses turned out to be **observability** (OTel traces, billions of rows; rollup tables), **ad-hoc analytics/BI** (invaluable for the perf team), and the **admin UI** (customers explore the same huge dataset with random filters and long time frames — a bit more latency budget). Example: 600M rows / 9 GB RAM in ~4s — "you start using these queries just because you can."

## 5. Pre-Aggregation (custom)

- ClickHouse still **recomputes the same long-window aggregation every second** — wasted CPU. Fix: **not caching** (results change slightly each second) but **pre-aggregation**:
  - **Batch group-by aggregations in ClickHouse → store in PostgreSQL** (great point-lookup performance).
  - At request time, look up the big **pre-aggregated body** + two small **edge** queries (start/end) → combine three sub-results → **same accuracy**, ~**constant** latency (**~150 ms**, three point-lookups) regardless of time frame.
  - Constraint: finish the next batch within the small-query window (e.g., a 1-hour small query gives you 1 hour to finish the batch — ClickHouse's seconds are fine for batching, not for the live fraud call).
- Query B is only a **few %** of rules, but rules run **in parallel**, so the **slowest rule determines response time** → always chasing **tail latencies**; when you can't meet the latency budget, **reshape the workload / trade computation for space**.

## 6. YugabyteDB (rolling out)

- **Not about latency** (some latency gained) — about **storage** (the doomsday clock returns for the largest customers). **Yugabyte** = distributed, **PostgreSQL-compatible**.
- **Selection:** evaluated **25 candidates** (Aurora & friends) — most failed on missing **data types** (esp. **JSON/JSONB**) or storage limits (against the whole point) or lack of PostgreSQL compatibility. Finalists **CockroachDB vs. Yugabyte** — advice: **measure your own use case**; they measured **Yugabyte more efficient** (more queries per money) and picked it (both are fine engineering).
- **How it works:** **hash sharding** into **tablets** (~**50 GB** each, replicated **3×** across the cluster, **Raft** consensus — need 2 of 3 votes to commit). **Strong consistency**, **read/write on every node** (full utilization vs. RDS provisioning for peak), **lower storage footprint** (3 copies vs. RDS primary+2 read replicas = 4×, with better resiliency), and push-button **scale-out** ("World Cup coming → add capacity"). Secondary indexes = tables with a different primary key.
- **Primary key** of the main fraud table: `(customer_id, bucket_key) HASH, timestamp, id` — the tablet is identified by customer_id + bucket_key; data ordered by **timestamp** (ties broken by id) for time-series aggregation.
  - **Bucket key** — a number that **grows with customer size**, spreading a large customer's writes across many tablets to avoid **write/read hotspots** (wastes some read capacity; a shrinking customer would need data migration — rare).
  - **Bucket skew** — same idea for **naturally skewed fields** (e.g., a **device-hash** where some iOS versions collide to the same value) — a small number (0–~5) distributing the highest-frequency values so you don't fall back to "single PostgreSQL but more expensive."
  - (**bucket key / bucket skew are general hash-sharding patterns**, not Yugabyte-specific.) Plus generated columns and covering-index equivalents.
- End state: **Yugabyte** for Query A, **pre-aggregation** for Query B, **ClickHouse** phasing to background/observability/admin-UI, **sharded RDS PostgreSQL retired**. The measurement-router may be phased out as rule↔store fit becomes known.

## 7. Five Lessons & Q&A

- **Lessons:** (1) every move targets **capacity or latency**; (2) the **slowest rule** determines response time; (3) recognizing **Query A vs. Query B** guided everything; (4) the **router + alternative store** was a great backstop (even in incidents); (5) the real fix is **not recomputing the same thing** (pre-aggregation) — but ClickHouse was invaluable until then.
- **Q&A:**
  - Most general lesson outside fraud: **look at ClickHouse** if you have lots of data + some time budget; long-time-frame **aggregations over time-series** are a general problem.
  - Advice to past self: **start saving measurement/telemetry data earlier** — invaluable later.
  - Most educational phase: **Yugabyte** — the biggest architectural/complexity/operational leap.
  - Building business confidence for infra migrations: growth-phase company means you're **1–2 steps ahead of what you can provide** — keep evaluating the next solution and mind the **deadlines** when limits run out.
  - SLAs: internal **P99 target ~600 ms** by year-end (~1s now); some customers have (higher) SLAs.
  - Data-type limits that eliminated candidates: **JSON/JSONB** (the big one).
  - Migration safety: **shadow-run** evaluations (everything double-checked, sampled, latency-verified) — Yugabyte rollout takes **months** with shadow-run throughout.
  - When to consider sharding: watch the **storage limit** — at ~**50% capacity** you already know sharding is coming and roughly how long you have.

---

## People, Companies, Tech & References Cited

- **Viktor Micskó** — speaker; performance engineering lead, **SEON**.
- Databases: **PostgreSQL/RDS**, **ClickHouse**, **YugabyteDB**, **CockroachDB**, **Aurora**; **S3, DynamoDB**; **OpenTelemetry**.
- Concepts: velocity rules / time-frame aggregation, Query A vs. Query B, TOAST, sharding, column store, delta compression, measurement-driven router, pre-aggregation, hash sharding / tablets / Raft, bucket key, bucket skew, tail latency, shadow-run migration.

---

*Video: https://www.youtube.com/watch?v=CRCqgX-yBVI — Transcript via yt-transcript.sh; outline generated from the transcript.*
