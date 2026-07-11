---
title: "Scaling Real–Time Fraud Detection at SEON – Viktor Micskó | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Viktor Micskó on SEON's database evolution for real-time fraud scoring — from a single PostgreSQL through sharding, ClickHouse, pre-aggregation, to distributed YugabyteDB."
type: "reference"
tags: ["softwaredevelopment"]
---

# Scaling Real-Time Fraud Detection at SEON – Viktor Micskó (Talk Outline)

> Viktor Micskó (performance engineering lead, SEON) traces years of database evolution behind SEON's fraud-scoring engine — driven by two access patterns and relentless tail-latency and storage limits.

---

## 1. The Product & Two Query Shapes

- Fraud detection = hundreds of **enrichment signals** + a complex **scoring engine** built on **time-frame aggregations** ("velocity rules": e.g., how many emails seen for this IP in 24h). High QPS, latency-sensitive.
- **Query A (OLTP-like):** high-cardinality filter (user ID), few events. **Query B (analytical-like):** long time frames, low/no filters, group-bys (per merchant). The evolution is mostly about **Query B**.

## 2. Single PostgreSQL → Its Limits

- Great default, but hit four limits: **32 TB relation size** (compiled-in), **TOAST** table `unsigned int` exhaustion (they'd stored whole request/response JSON in a wide table), a self-inflicted **integer primary key** running out (switched to bigint), and the **RDS EBS volume size** cap.

## 3. Sharding

- Customers don't share data → shard **one customer per shard** (multiple customers per instance), with dedicated **premium shards**. Pushed the storage deadline out and gave customer insulation — but **Query B is still slow** (still PostgreSQL, still visiting tuples).

## 4. ClickHouse

- Query B "resembles an analytical query," so add **ClickHouse** (column store): cache locality, strong **compression** (10–100×; delta/delta-of-delta for low-jitter timestamps), vectorization. PostgreSQL died at 30-day windows (>9s); ClickHouse crunched ~6M transactions in ~1.5s.
- A **measurement-driven router** samples rule evaluation on both stores and picks the winner (stable, catches the bimodal PostgreSQL timeout pattern). ClickHouse's *primary* uses turned out to be **observability** (OTel traces, billions of rows), ad-hoc analytics, and the **admin UI**.

## 5. Pre-Aggregation (custom)

- ClickHouse still recomputes the same long-window aggregation every second. Solution: **batch group-by aggregations in ClickHouse into PostgreSQL** (great point-lookups); at request time, fetch the big pre-aggregated body + two small edge queries → same accuracy, ~constant **3-point-lookup** latency (~150 ms) regardless of time frame. You just must finish the next batch within the allotted window.
- Query B is only a few % of rules, but the **slowest rule determines response time** — hence chasing tail latencies.

## 6. YugabyteDB (rolling out)

- Not about latency — about **storage** (the doomsday clock returns). **Yugabyte** = distributed, PostgreSQL-compatible; evaluated 25 candidates, finalists CockroachDB vs. Yugabyte (measured Yugabyte more efficient for their use case).
- Design: **hash sharding** into **tablets** (~50 GB, replicated 3× via Raft — strong consistency, read/write on every node, *lower* storage footprint than RDS primary+2 replicas, easy scale-out). Primary key = `(customer_id, bucket_key) HASH, timestamp, id` — **bucket key** grows with customer size to spread big customers across tablets (avoid read/write hotspots); **bucket skew** column spreads naturally-skewed fields (e.g., device-hash collisions on some iOS versions).

## 7. Five Lessons

1. Every move targets **capacity or latency**.
2. The **slowest rule** determines response time.
3. Recognizing **Query A vs. Query B** guided the whole journey.
4. The **router + alternative store** was a great backstop (even during incidents).
5. The real fix is **not recomputing the same thing** (pre-aggregation) — but ClickHouse was invaluable until then.
- Q&A: start saving **measurement/telemetry data early** (invaluable later); Yugabyte was the biggest architectural leap; JSON/JSONB support eliminated many database candidates; continuous **shadow-run** validation ensures migrations don't break rows.

---

*Video: https://www.youtube.com/watch?v=CRCqgX-yBVI — Transcript via yt-transcript.sh; outline generated from the transcript.*
