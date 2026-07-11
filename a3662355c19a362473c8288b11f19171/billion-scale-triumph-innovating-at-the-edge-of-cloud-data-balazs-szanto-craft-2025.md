---
title: "Billion-Scale Triumph: Innovating at the Edge of Cloud Data - Balázs Szántó | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Balázs Szántó (Accenture) on a petabyte-scale on-prem-to-cloud migration on Databricks + Azure SQL Hyperscale — architecture, PySpark repartitioning gotchas, clustered columnstore, and tuple-mover outages."
type: "reference"
tags: ["softwaredevelopment"]
---

# Billion-Scale Triumph: Innovating at the Edge of Cloud Data - Balázs Szántó (Talk Outline)

> Balázs Szántó (senior data engineer/architect, Accenture) on a **petabyte-scale** migration from on-prem **Cloudera Impala/Kudu** to **Databricks + Azure SQL Hyperscale** — where "losing a single record was the red line; perfection was a requirement."

---

## 1. The Project

- 3+ PB to migrate, ~**4 billion records/day** inflow (up to 8B during anomalies), 5,000 sources, **20,000 users** relying on the data 24/7, ~100 engineers in a SAFe train. 70% delivered, two private previews, and **60% cost cut** (vs. an unstable legacy system with multi-day outages). Data arrives in packages/manual uploads → a batch record system (arrival handling, encryption) that must stay compatible with the client's existing **virtual database** auth/authz layer (replaced only in phase 2).

## 2. Architecture

- **Databricks** unpacks via auto-loaders into **bronze → silver → gold** (+ a custom **platinum** layer for special business records). **Azure SQL Hyperscale**: a read-write **primary replica**, 1–4 HA replicas, a fast-SSD **log service** distributing to **page servers** (~1 TB each, HA-paired — 50 page servers for 50 TB), with Azure Blob backing (cheap but a ~100 TB cap, so ~99% of users query back 2 years). Validation: ~5:1 compression, **JMeter concurrency testing** (~400 concurrent post-lunch peaks answered in 5–10s), **Terraform**, ~80% code coverage / 95% integration coverage, and a **YAML-driven Databricks SDK** orchestration (clusters/sizes/jobs + a transformation file with advanced Spark/SQL).

## 3. The Big Challenge: Ingestion Speed & Repartitioning

- Ingestion evolved from the basic Databricks connector (too slow) → Microsoft's **SQL Spark connector** (~2×) → Spark optimization → a **private preview** raising the log service from **100 → 150 MB/s** (achieving ~47M rows/min; ~39M with broadcast joins).
- **PySpark repartitioning gotcha:** `repartition(col)` does **not** distribute evenly (it uses hash % partitions), causing skewed **bulk inserts** into Azure SQL. Adding a unique count still collides; the real fix is **`repartition by range`**, which yields evenly distributed unique partitions → un-blocked parallel bulk inserts (~25M rows/min, ~40B rows/24h).

## 4. Clustered Columnstore & Tuple-Mover Pain

- Failed bulk inserts can't use transactions with clustered columnstore + PySpark distribution, so they added a **batch ID** + delete/retry — but deletes are terrible on columnstore, so they **redesigned to append-only** with cleanup on the data layers. Rows land in compressed **row groups** (100k–1M records) or the **delta store**; the background **tuple mover** (the "bad guy") recompacts — and it kicks in **randomly (~every 5 min)**, causing outages up to **12 hours** during partition moves.
- **Metadata flush issue:** two large CCI tables sharing the same system flushed each other's metadata (`userstore_schemamanager` memory clerk) — discovered with 40 TB already in prod, took Microsoft (4 teams) + them ~2 weeks and an **architectural split into separate production servers**. They built their **own monitoring** (Azure database watchers can't expose tuple-mover internals) → driving a version 2.

## 5. Verdict

- Stable "to a certain level"; some **bad design decisions** made under time pressure (partitions created on-the-fly rather than in advance). Hyperscale isn't bad, but "test lots of things in advance and use the latest tools" — in hindsight **Azure Data Explorer** or **Databricks SQL Warehouse** might suit some use cases better, and the solution may need migrating again. Q&A: the legacy Impala/Kudu wasn't viable (multi-day outages, cost); updates/merges work on CCI only up to ~10–20 TB; a **green, supportive, speak-up culture** carried them through unpredictable issues like the metadata flush.

---

*Video: https://www.youtube.com/watch?v=ZRxW2Ir1C2I — Transcript via yt-transcript.sh; outline generated from the transcript.*
