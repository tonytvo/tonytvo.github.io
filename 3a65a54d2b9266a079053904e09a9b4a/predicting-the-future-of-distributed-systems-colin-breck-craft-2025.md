---
title: "Predicting the Future of Distributed Systems - Colin Breck | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Colin Breck (Tesla) forecasts distributed systems through Bezos's one-way/two-way door lens — object storage as primary storage everywhere, disruptive-but-risky durable-execution programming models, and operationalizing AI as plain distributed-systems engineering."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Predicting the Future of Distributed Systems - Colin Breck (Talk Outline)

> **Colin Breck** — principal engineer at **Tesla** (energy storage); golden nugget: **"work on systems that really matter."** Most systems of consequence (transportation, banking, manufacturing, power, commerce) are **distributed systems**. Anchored by **Peter Alvaro**: *"there's no perfect failure detector; no single computer has a complete picture; abstractions will leak — don't hide it."* The goal isn't looking smart (bold predictions are "a good way to look foolish") — it's helping orgs make engineering decisions they **won't regret next year**.

---

## 1. The Decision Framework (Bezos)

- **One-way doors** — consequential, hard/irreversible → **slow down**, involve executive leadership, gather info. **Two-way doors** — cheap to reverse → **decide fast**, individuals/small teams.
- The costly failure mode: applying a **heavyweight process to two-way doors** — or worse, treating a **one-way door as a two-way door** and burdening the org for years. Strike a balance.
- Three topics: **object storage**, **programming models**, **operationalizing AI** — and "how do we pick technologies that last, or does it even matter in the age of AI?"

## 2. Object Storage → Two-Way Doors Everywhere

- **Amazon S3** (19 years old; others followed ~4–5 years later): ~unlimited storage, **4-nines availability, 11-nines durability**, storage classes, pre-signed URLs, object lock (immutability), versioning, cross-region replication, batch ops — **~300 services behind the scenes** (Andy Warfield's talk: rebuilding the core storage engine in **Rust**, formally verifying it, shadow-mode experiments; **S3 Express One Zone** ~block-storage latency; using huge scale to shape/balance traffic — query variance is high at low scale but **evens out at large scale**).
- The **S3 API has become universal** (other clouds, software, on-prem hardware appliances) → an app on Kubernetes + S3 API can move **anywhere** — **many two-way doors**.
- **State management** has moved from databases toward **object storage as primary storage**:
  - Intellectual roots: **Jay Kreps's "The Log"** ("reliable, flexible building blocks... the pressure to coalesce into a single monolithic system disappears" = two-way doors); **Rich Hickey's** log-centric DB (views as projections of a common log).
  - Breck's own 2012 Azure story: a stateless-broker + object-storage data-sharing service (object storage handles durability/availability/scalability; stateless brokers scale instantly) beat a Paxos/Cassandra-style server approach.
  - The pattern **separates compute from storage** across a diverse set: **Amazon Aurora** ("the log is the database"; embarrassingly-parallel IO), **Snowflake** (object storage as primary), **WarpStream** (Kafka-compatible on object storage; acquired by Confluent), **SlateDB** (KV), **InfluxDB** (time-series in Parquet).
- **Open formats + libraries** keep decomposing the database: **Apache Parquet** (columnar) read/written by big-data tools *and* **Pandas/Polars** *and* embeddable query engines **DuckDB / DataFusion** ("leading DB experts working for your company for free"); catalogs **Hudi / Delta Lake / Apache Iceberg** (partitioning, schema evolution, **time travel**), **S3 Table Buckets** (Iceberg), and **DuckLake** (announced 2 days prior — a SQL-DB-backed catalog standard, solving small-file consistency/perf). **"S3 is an object store, not a file system"** (Chris Riccomini). Also: **many small in-process DBs** (Cloudflare **D1** SQLite per durable worker; **MotherDuck** blurring local/cloud via DuckDB).
- **Predictions:** object storage increasingly for **transactional/operational** (not just analytical) workloads; DBs keep decomposing onto object storage; edge/cloud blur; more **open formats, interoperability, portability** — **all two-way doors** (only getting more popular/better).

## 3. Programming Models → One-Way Doors (for now)

- How we package software evolved: whole stack → VMs → containers + infra-as-code (today's Kubernetes model). But **inside every container** we re-solve the same problems: keys/certs/tools, HTTP/JSON, gRPC, DB client + dedicated DB, Kafka client, logs, metrics — then finally the **business logic**. Repeated across **hundreds** of apps, all re-solving persistence, durable execution, retries, and library maintenance (**Log4j**: which apps use it, are patched?).
- **The trend:** abstract the app **further from infrastructure** with **pluggable interfaces** — request a **Postgres-compatible API** rather than a Postgres — so libraries (logging, DB) can be **patched *underneath*** like the OS beneath Kubernetes (developers don't even need to care), and apps become **portable** across clouds/data centers.
- **Three flavors of durable-execution frameworks:**
  1. **"Adopt our API, we manage state/failures"** — **Akka** (now a platform/API, not self-run clusters), **Temporal** (imperative code + persistence/retries/timers).
  2. **"Give us your code, we execute it"** — **wasmCloud** (WebAssembly binaries requesting infra services via the component model).
  3. **Hard to categorize** — **Golem** (event-sourcing the WASM VM itself), **Unison** (a whole new language + runtime).
- All promising, but **choosing one is incredibly hard**: a huge investment; engineers resist ceding control (though that will change, as it did for the OS); **not all will survive** ("in five years, is the one I picked dead?"); vendor lock-in vs. wanting to move providers/on-prem. → **one-way door after one-way door**, so "easier to keep doing what we know." Needs the frameworks/vendors to make these **two-way doors**, or a larger shift to drive adoption.

## 4. Operationalizing AI = Systems Engineering

- **Agentic AI** looks like **durable actors**; **AI workflows** look like **durable-execution frameworks**. Building them hastily risks **Lauren Hochstein's** quip ("by 35 you'll have built an ad-hoc, informally-specified, bug-ridden, slow job queue / workflow system / ORM") — a **one-way door of technical debt** disguised as a two-way door. "We'll keep building workflow engines until morale improves."
- New acronyms **MCP / RAG / A2A / ACP** are "just interfaces and protocols" (**Chamath**: "an API by any other name is still an API — unless you need to raise money for your AI startup, in which case I prefer MCP"). So operationalizing AI **is** traditional distributed-systems engineering: integration, workflow/state management, transactions, durable execution, scaling, reliability, availability.
- Because AI-space people **move fast and take risks**, AI may be **where the new programming models finally take hold** (**Akka's landing page now headlines "enterprise agentic AI"**); success there could spread to **IoT, manufacturing, commerce**. **Caution:** frameworks optimize for *getting started*, but the hard part is **90% under the waterline** (Joel Spolsky's *Iceberg Secret*) — should we bet on platforms already focused on durable execution *before* AI? Full circle: **DeepSeek** open-sourced **Smallpond** (DuckDB-based decomposed data processing) and an AI-specific storage engine — expect such innovations to flow back into object storage / query processors and benefit everyone.

## 5. Summary & Close

- **Object storage:** decomposition onto object storage is well underway — all **two-way doors** (easy to jump in).
- **Programming models:** potentially very disruptive (even changing how we view infrastructure), but currently **one-way doors** — easier to keep doing what we know.
- **AI:** just systems engineering; distributed-systems people have a lot to offer, and AI may be where new programming/operational models take hold (people take risks).
- Back to Alvaro: **"abstractions leak, so make them fluid"** — an invitation to find **as many two-way doors as possible** (reduce risk, ease migration, encourage interoperability, preserve investment). The future is promising because we're "getting back to basics in storage and query, with abstraction lines drawn in different places" → simpler, more modular systems. Open question: will early adopters out-compete, or will the industry catch up once the new models are clear? (Based on an essay on his personal blog — minus the AI parts.)

---

## People, Companies, Tech & References Cited

- **Colin Breck** — speaker; Tesla energy storage.
- **Peter Alvaro** (leaky/fluid abstractions), **Jeff Bezos** (one-/two-way doors; via Lex Fridman), **Jay Kreps** ("The Log"), **Rich Hickey**, **Andy Warfield** (S3), **Chris Riccomini** (DB disaggregation), **Lauren Hochstein**, **Joel Spolsky** (*Iceberg Secret*), **Chamath**.
- Tech: **S3 / S3 Express One Zone / Table Buckets, Parquet, DuckDB / DuckLake, DataFusion, Iceberg / Delta Lake / Hudi, Pandas / Polars, Aurora, Snowflake, WarpStream / Kafka / Confluent, SlateDB, InfluxDB, Cloudflare D1, MotherDuck, Akka, Temporal, wasmCloud, Golem, Unison, DeepSeek Smallpond**.
- Concepts: one-way/two-way doors, compute-storage separation, object-storage-as-primary, durable execution, pluggable infrastructure APIs, operationalizing AI as systems engineering.

---

*Video: https://www.youtube.com/watch?v=NEkO7nUmhzU — Transcript via yt-transcript.sh; outline generated from the transcript.*
