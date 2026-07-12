---
title: "Billion-Scale Triumph: Innovating at the Edge of Cloud Data - Balázs Szántó | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Balázs Szántó (Accenture) on a 3+ petabyte on-prem (Cloudera Impala/Kudu) to cloud migration on Databricks + Azure SQL Hyperscale handling ~4 billion records/day — architecture (bronze/silver/gold/platinum, Hyperscale internals), technology/concurrency validation, the PySpark repartition-by-range gotcha, clustered columnstore index and tuple-mover outages (up to 12 hours), the metadata-flush disaster, and hard-won lessons."
type: "reference"
tags: ["softwaredevelopment"]
---

# Billion-Scale Triumph: Innovating at the Edge of Cloud Data - Balázs Szántó (Talk Outline)

> A Craft 2025 talk by **Balázs Szántó**, senior data engineer and architect at **Accenture** (10+ years at scale), telling the story of a **petabyte-scale cloud migration** processing **billions of records/day** on **Databricks** and **Azure SQL Hyperscale**. He thanks his team and platform lead **Máté Futó**. Structure: project overview → minor challenges (technology & concurrency validation, delivery) → major challenges (the largest dataset / ingestion speed, PySpark repartitioning truth, clustered columnstore index, tuple-mover and metadata-flush outages) → lessons learned → Q&A. Emotional throughline: "**losing a single record was our red line** — perfection wasn't a goal, it was a requirement," because one lost record could mean financial loss or compliance nightmares.

---

## 1. Project Overview

### 1.1 The mandate
- Migrate a **Cloudera Impala/Kudu** on-premise solution into the cloud.
- Chosen technologies: **Databricks** and **Azure SQL Hyperscale** (rationale explained later).

### 1.2 The on-prem starting point
- More than **3 petabytes** of data to migrate.
- The system was under huge stress with **frequent daily outages** — data engineers and consumers couldn't reliably get their data.

### 1.3 The scale numbers
- ~**4 billion records/day** total data inflow.
- Project **70% delivered** at talk time.
- Two **private previews** conducted (now public to the community).
- ~**100 people** working in a **SAFe (Scaled Agile) train** (data engineers, excluding managers).
- **5,000 sources** ("machines") supplying data.
- **10,000 → 20,000 users** relying on the data by the time of the talk.
- Cost outcome: **60% of the budget cut** (project not yet finished).

---

## 2. Architecture

### 2.1 Data sources and ingest modes
- Data arrives in **packages**, other ways, and **manual uploads**.
- Challenges: **late-arriving files**, ensuring everything is in place so 20,000 operators can keep machines working 24/7.

### 2.2 The batch record system layer
- All package data lands in a **batch record system**.
- Responsible for the **arrival process**, **encrypting data** to a certain level, and ensuring all consumer services (including the legacy **Impala/Kudu** system) can process incoming data.

### 2.3 The virtual database (auth) layer
- A **virtual database solution** the client used for **authentication and authorization**.
- **Not replaced in phase one** (a challenging migration) — deferred to **phase two**.
- The new solution had to remain **compatible** with it.
- Different user groups had **direct data access**; others consumed via the virtual DB — a key challenge was providing a **unified query layer** going forward.

### 2.4 The new cloud workflow (medallion layers)
- Only a **simplified** architecture shown (confidentiality); the client uses ~80% of Azure resource types across their orgs.
- **Databricks auto loaders** unpack data.
- **Bronze** layer (unpacked) → **Silver** and **Gold** layers (further cleaning).
- A special **Platinum** layer added for **very special business records** for specific use cases.

### 2.5 Azure SQL Hyperscale — what it is
- A **database tier** designed for very heavy workloads.

### 2.6 Hyperscale internals — primary + HA replicas
- A **read-write primary replica** handles data ingestion.
- **1 to 4 high-availability replicas** alongside it take over on **failover**, keeping the app accepting data 24/7.

### 2.7 Hyperscale internals — the log service
- Everything sent to the primary is distributed through the **log service** — a **super-fast SSD** ensuring all cloud VMs catch up with the data.
- Important: they have **non-covering caches** — not all data is available in those systems.

### 2.8 Hyperscale internals — page servers
- The log service moves data to **page servers** (also HA-enabled — two at any time).
- Each pair holds ~**1 TB total**; storing **50 TB** needs ~**50** page servers.
- This is what makes Hyperscale **super stable** and feasible for the solution.

### 2.9 Storage layers and the 100 TB limit
- **Azure Blob Storage** used for cheap backups/file storage.
- "Storage is cheap" — but their system has a **~100 TB capacity limit**.
- Design: **99% of users query back 2 years**; users wanting **historical data** take it from **data tables**.

---

## 3. Technology Validation (Minor Challenge)

### 3.1 Five steps, two highlighted
- Five validation steps overall; two brought to the talk.

### 3.2 Compression testing
- Basic result: **~1:5 compression ratio**.
- Surprise: the **legacy system initially had better compression**.
- But after migrating the first two datasets, they ended up with **better compression** — an amazing finding.

### 3.3 Concurrency / stress testing
- ~20,000 users on different reporting tools → must stress-test → **concurrency testing** with **Apache JMeter**.
- Joke: "for one user it works, so we're done" — of course not.
- Real peaks (especially **after lunch**): ~**400 concurrent users**.
- **Hyperscale performed within 5–10 seconds** — an amazing achievement vs. the legacy system.

### 3.4 Fixing client-side misconfigurations
- Hyperscale performance **through the virtual databases** was initially not good.
- Found **client-side misconfigurations**; fixing them boosted performance **even on the legacy system** — a huge (though "minor") finding.

---

## 4. Delivery & Engineering Practices

### 4.1 Infrastructure and coverage
- **Terraform** used to deliver code.
- **~80% code coverage** in a data & AI project (standout).
- **Integration tests** reaching **95% coverage**.

### 4.2 Data-quality notebooks
- Notebooks to ensure **upstream stability** and catch data issues.
- Caught **100 issues before production release**.

### 4.3 Pipeline orchestration via Databricks SDK
- Used the **Databricks SDK** to orchestrate pipelines/workflows.
- A simple **YAML file** defined cluster count, cluster size, and job orchestration.
- A **transformation file** (no single mapping) could include **advanced Spark and SQL commands**, enabling the team to deliver datasets day by day.
- **CI/CD** and **robust monitoring** in place; a **version two** with in-depth details is planned.

---

## 5. The Biggest Challenge — Largest Dataset / Ingestion Speed

### 5.1 Candlestick-chart anatomy (measurement method)
- **Low** = minimum throughput (rows/batch) the pipeline could process; **high** = maximum — the **wicks**.
- The **body** = where most time is spent (the interesting part).
- Want the **shortest wick possible**: a long/low wick means an **unstable system**.
- Used these charts to see whether a given solution version could process the required daily ingestion volume.

### 5.2 Why ingestion speed matters
- Upstream **anomalies** meant sometimes **8 billion records/day** arrived.
- The earlier "4 billion/day" was **total**; the largest dataset alone was one table needing this throughput → ingest as fast as possible.
- Example: **47 million records/minute** in a 6-hour chart; with **broadcast joins**, **39 million records/minute**.

### 5.3 Version 1 — the simple Databricks connector
- Started ~**5 billion records** processing capacity in **March 2023**.
- The simple **Databricks connector** wasn't enough even for daily inflow, let alone migrating the 3-petabyte backlog.

### 5.4 Version 2 — the SQL Spark connector
- **Microsoft** brought the **SQL Spark connector** ("for their system they always have the solution").
- **Nearly doubled** ingestion speed — still not enough as upstreams lagged.

### 5.5 Version 3 — Spark execution optimization
- Looked into **Spark executions**, optimized the code, "squeezed out the most of it."
- Set up the **PySpark repartitioning** surprise (detailed next).

### 5.6 Version 4 — Microsoft private preview (log service boost)
- **May 2025** private preview with Microsoft.
- The **log service** at ~**100 MB/s** wasn't enough → increased to **150 MB/s**.

---

## 6. The Truth Behind PySpark Repartitioning

### 6.1 The test setup
- Disabled the **adaptive query optimizer** (to avoid its "magic" for the demo).
- Repartition a ~1,000-row DataFrame by a column (e.g., `country`) to see where data lands.

### 6.2 Why partitioning differs by system
- **PySpark** partitioning is built for **scalable parallel computing** — distributing data across worker executions.
- **SQL-based systems** partition to do **aggregations** on that data — different goals.

### 6.3 The uneven-distribution finding
- Default **200 partitions**; multiple values land in different partitions but **not evenly** as you'd expect.

### 6.4 Attempting a distinct-count fix
- Defining a **unique volume / distinct count** for the repartition function **still doesn't distribute evenly** — some values share the same partition.
- Adding **+1/+2/+3** to experiment produces **lots of anomalies**.

### 6.5 Reverse-engineering the hash partitioner
- Checked **PySpark source code** — emulated Spark's **hash partitioner**: the **non-negative modulo of the hash with the partition count**.
- Could then **predict** the behavior in their code — but this wasn't the real solution.

### 6.6 The real solution — repartition by range
- **`repartitionByRange`** gives the desired result: **unique partitions** with values **distributed equally**.

### 6.7 Why it mattered for ingestion
- Azure SQL ingestion speed needs **parallel** ingestion.
- Bad repartitioning created **bulk inserts** mixing records that should have been **separated**, blocking the system between bulk inserts.
- After equal distribution, the system was **not blocked** between bulk inserts → ~**25 million rows/minute**, and a **24-hour ingestion of ~40 billion records**.

---

## 7. Bulk-Insert Failure Handling

### 7.1 The transaction problem with CCI
- Bulk inserts could **fail**; wrapping them in a transaction isn't really possible with **clustered columnstore index (CCI)** tables under this PySpark distribution.

### 7.2 The batch-ID cleanup workaround
- Introduced a **batch ID** per insert/group of inserts and did a **delete** at the end, then **retried** the process.
- During this, **ingestion stopped** — CCI is **poorly suited to delete/update operations**.

### 7.3 The redesign to append-only
- Concluded this isn't the best approach for huge, **not-append-only** datasets.
- **Redesigned nearly everything** into an **append-only stream**, cleaning data on the **data layers** instead.

---

## 8. Clustered Columnstore Index (CCI) Mechanics

### 8.1 How row groups form
- CCI takes **sorted chunks** of data; a **row group** forms when a chunk is **above ~100,000 and below ~1 million records** (spoken as "above 1,000" then "below ~1 million").
- Meeting the criteria auto-**compresses** the row group during insert — the desired result (uncompressed would cause many issues).

### 8.2 The delta store and the tuple mover
- Data **below ~100,000** lands in the **delta store**.
- A background service, the **tuple mover** ("the bad guy"), takes delta-store values, re-reads already-compressed row groups, and re-does operations to get **~1 million+ records per row group** (needed for compression and concurrent users).
- They engineered data to ingest into CCI **in the desired state without maintenance**.

---

## 9. The Tuple-Mover & Metadata-Flush Disasters

### 9.1 CCI metadata
- Like PySpark executions, CCI row groups store **metadata**: min, max, null counts, average — mostly at metadata level.
- In Hyperscale this metadata lives in **memory** via **memory clerks**.

### 9.2 The user-store schema-manager clerk
- One memory clerk stands out: the **user store schema manager**, responsible for storing this metadata.
- Problem: with **two CCI metadata tables in the same system**, this metadata can be **flushed out**.

### 9.3 The production disaster (before Christmas)
- Discovered **after 40 TB** was already in production — "all the struggles just before Christmas."
- Alerted **four Microsoft teams**; it took Microsoft **~two weeks** to figure out; the team investigated in parallel, and a joint meeting pieced it together.
- Fix: **separate the two huge tables** → an **architectural change splitting two production environments**.
- Consequence: planned CCI datasets couldn't be used → still hit **60% cost cut** (they'd aimed for **80%**).

### 9.4 Building custom monitoring
- Azure **Database Watcher** connects to multiple DBs and shows performance logs, but **can't expose metadata details** like **how the tuple mover is working**.
- Hence a **custom monitoring system** — the driver for **version two**.

### 9.5 CCI partitioning challenges
- Creating a new CCI partition requires: **move data out to a temp table → create the new partition → move data back**.
- Early on they couldn't create partitions in advance, so (with Microsoft) tried it **on the way** — "yes, it wasn't [a good idea]."
- The **tuple mover** can kick in **every 5 minutes and also randomly**; when it fired during partition moves, it caused **even bigger outages**.

### 9.6 The 12-hour outage
- Biggest outage: **12 hours**.
- Is the system stable? "To a certain level, yes." Did they make bad design decisions? "Yes."
- Current state: multiple production servers supporting up to **500 TB** (or **128 TB each** with elastic pools, not pursued given retention).
- Root cause of pain: **not taking time to figure things out in advance**, forcing a whole architecture/design change.

---

## 10. Closing Lessons

### 10.1 The journey isn't over
- Migration not ended; the solution **may need migrating again** due to Hyperscale struggles.

### 10.2 Is Hyperscale a bad technology?
- **No** — but you must **test many things in advance** and use the **latest available tools**.

### 10.3 What he'd choose differently
- If restarting phase one, maybe **Azure Data Explorer** or **Databricks SQL Warehouse** for different use cases — but they lacked time to compare against the actual system.

---

## 11. Q&A

### 11.1 Q1 — Did you retrospect on keeping the legacy provider and just optimizing it?
- Yes — the legacy **Impala/Kudu** system was hard to keep up to date, with outages lasting **several days** (vs. their ~10-hour ones), and its **cost** was high; they saved **60%**.

### 11.2 Q2 — The customer waited 2 years; how did you build trust?
- Work in a **safe, supportive environment** where everyone speaks up.
- Management and teams were supportive; because issues were **unpredictable**, they weren't blamed for not detecting them in advance.

### 11.3 Q3 — You mentioned two private previews; the other one (besides 100→150 MB/s)?
- The other was with **Databricks**: with a **single-user cluster** + **Unity Catalog**, their library failed due to dependency conflicts.
- Workaround: split pipelines — a **shared cluster** copied data from Unity Catalog, then a **single-user cluster** ingested into Hyperscale.
- Databricks then delivered a solution (battle-tested on theirs) letting a **single-user cluster** do both steps as one while keeping single-cluster features.

### 11.4 Q4 — Did you manage updates for large datasets, and how?
- To a point: **up to ~10 TB**, CCI can handle deletes/updates.
- Beyond ~**20–30 TB**, you **can't** do merge-style operations.
- Tried a **CDC style** (separate inserts/deletes/updates) — same performance struggles; a **merge took ~20 hours**, too slow to accept daily inflow.

### 11.5 Q5 — Did you consider an open table format (e.g., Iceberg) on blob storage?
- The client's built-in solution (not removed in phase one) may **not be compatible** with Iceberg-like solutions.
- Considered other technologies at the start, but assessment (2.5 years ago) found Hyperscale the **best option** then.

### 11.6 Q6 — YAML for workloads: Databricks Asset Bundles or something else?
- ~80–90% of the team came from **software development**, so they **built their own solution** rather than using the built-in — **inspired by Databricks Asset Bundles**.

### 11.7 Q7 — How did you manage stakeholder expectations during challenges like the metadata-flush issue?
- "Butterflies in the stomach," but the **supportive environment** let them talk it through.
- Solution found in **~1.5 weeks**; Hyperscale's **fast backup** let them implement it in a week (total issue ~two weeks) — though **partitioning issues followed**.

---

## People & References Cited

- **Balázs Szántó** — speaker; senior data engineer/architect at **Accenture**.
- **Máté Futó** — platform lead, thanked for support/contributions.
- **Companies:** Accenture, Microsoft (Azure, SQL Spark connector, private preview support, four teams on the metadata issue), Databricks (SDK, auto loaders, Unity Catalog, Asset Bundles inspiration, SQL Warehouse), Cloudera (Impala/Kudu legacy).
- **Technologies & tools:** Azure SQL Hyperscale (primary/HA replicas, log service, page servers, memory clerks, user store schema manager), Databricks, PySpark (hash partitioner, `repartitionByRange`, adaptive query optimizer, broadcast joins), Azure Blob Storage, Terraform, Apache JMeter, Azure Database Watcher, Azure Data Explorer, clustered columnstore index / delta store / tuple mover, Unity Catalog, SAFe (Scaled Agile).
- **Concepts:** medallion architecture (bronze/silver/gold/platinum), "losing a single record is the red line," candlestick throughput charts, compression ratio (~1:5), concurrency testing (~400 users, 5–10s), ingestion-speed optimization across four versions, PySpark vs. SQL partitioning intent, bulk-insert parallelism and batch-ID cleanup, append-only redesign, CCI row-group formation and compression, tuple-mover randomness, metadata-flush with two CCI tables, custom monitoring / version two, retention-driven storage sizing, cost cut (60% vs. 80% target).

---

*Video: https://www.youtube.com/watch?v=ZRxW2Ir1C2I — Transcript via yt-transcript.sh; outline generated from the transcript.*
