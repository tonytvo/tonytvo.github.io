---
title: "Predicting the Future of Distributed Systems - Colin Breck | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Colin Breck (Tesla) on the future of distributed systems through Bezos's one-way/two-way door lens — object storage everywhere, disruptive but risky programming models, and operationalizing AI as plain systems engineering."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Predicting the Future of Distributed Systems - Colin Breck (Talk Outline)

> Colin Breck (principal engineer, Tesla energy storage): most systems of consequence are distributed systems. Framed by Peter Alvaro — *"there's no perfect failure detector; abstractions leak, so make them fluid."* The goal isn't looking smart, it's making engineering decisions you won't regret.

---

## 1. The Decision Framework

- **One-way doors** (consequential, hard to reverse — slow down, involve leadership) vs. **two-way doors** (cheap to reverse — decide fast, small teams). The costly mistake is treating a one-way door as a two-way door and burdening the org for years. Three topics: object storage, programming models, operationalizing AI.

## 2. Object Storage → Two-Way Doors Everywhere

- **S3** (19 years old, 11-nines durability, ~300 services behind it, innovating in Rust/formal verification, S3 Express One Zone) has a **universal API** implemented by everyone → you can move workloads anywhere = many two-way doors.
- Managing state has moved from databases toward **object storage as primary storage** (Jay Kreps's "The Log"; Rich Hickey's log-centric DB). The pattern — **separate compute from storage** — appears in Aurora ("the log is the database"), Snowflake, WarpStream, SlateDB, InfluxDB. Standard formats (**Parquet**) + query engines as libraries (**DuckDB, DataFusion**) + catalogs (**Iceberg, Delta, Hudi, DuckLake**) keep decomposing the database — "S3 is an object store, not a file system." **Prediction:** object storage for transactional/operational (not just analytical) workloads; more open formats, interoperability, portability — all two-way doors.

## 3. Programming Models → One-Way Doors (for now)

- Inside every container we re-solve the same distributed-systems problems (state, durable execution, retries, logging/metrics libraries — remember Log4j patching). The trend: **abstract the app further from infrastructure** (request a Postgres-compatible API, not a Postgres) so libraries can be patched *underneath*, and apps become portable.
- Three flavors of **durable-execution** frameworks: "adopt our API" (**Akka**, **Temporal**), "give us your code" (**wasmCloud**), and hard-to-categorize (**Golem** event-sourcing the WASM VM, **Unison**). But each is a huge one-way-door investment, engineers resist ceding control, and not all will survive → "easier to keep doing what we know." Needs a shift to make these two-way doors.

## 4. Operationalizing AI = Systems Engineering

- Agentic AI looks like **durable actors**; AI workflows look like **durable-execution frameworks**. Hastily building them risks Lauren Hochstein's "ad-hoc, informally-specified, bug-ridden job queue/workflow/ORM" — a one-way door of technical debt. New acronyms (MCP, RAG, A2A) are "just APIs" — the real work is systems integration, state/transaction management, durable execution, scaling, reliability.
- Because AI-space people "move fast and take risks," AI may be **where the new programming models finally take hold** (Akka now headlines "enterprise agentic AI"); if they succeed there, they'll spread to IoT/manufacturing/commerce. Caution: frameworks optimize for *getting started*, but the hard part is 90% under the waterline (Spolsky's Iceberg Secret). **Close:** "abstractions leak, so make them fluid" — find as many two-way doors as possible to reduce risk and preserve investment.

---

*Video: https://www.youtube.com/watch?v=NEkO7nUmhzU — Transcript via yt-transcript.sh; outline generated from the transcript.*
