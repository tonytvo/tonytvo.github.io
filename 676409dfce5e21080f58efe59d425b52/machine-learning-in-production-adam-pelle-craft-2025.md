---
title: "Machine learning in production - Adam Pelle | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Adam Pelle (Marshmallow) on the operational side of ML — offline-to-real-time history, SageMaker inference endpoints, the operational=analytical data circle, feature stores (Tecton), drift detection, and verifying models with bidirectional contract testing, schema verification, and back-testing."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Machine learning in production - Adam Pelle (Talk Outline)

> **Adam Pelle** — staff engineer at **Marshmallow** (insurance), Budapest — on the **operational** side of ML: *"how we keep the lights on for those endpoints in production"* — not the algorithms or training internals. Three parts: history, data flows, and verifying endpoints (with marshmallow jokes).

---

## 1. History — Offline → Real-Time

- **Old world:** product engineers wrote services emitting data to an **offline warehouse** (Snowflake); data scientists did **offline analysis**, extracting insights fed back into the product for engineers to act on. Problems: **offline, reactive, slow**.
- **What changed:** demand for **real-time intelligence** — in insurance, **risk scoring, fraud detection, dynamic pricing** must be computed **on the fly** when a quote comes in. Plus fast iteration / speed-to-market. *"Let me get back to you next week" → "let me get back to you in **150 milliseconds**."*
- **Numbers:** classification/prediction models in **claims, fraud, pricing**; **14 online inference endpoints** (~**25 models** — multi-model endpoints), plus many offline models; busiest endpoint ~**30 req/s** P99 (enough to need autoscaling/resourcing). **Future:** **>100 models** across every major domain ("more models than marshmallows in the office snack bar").

## 2. Serving (Online Inference)

- **AWS SageMaker** — a full platform to train/deploy ML models; endpoints are **REST APIs** treated like any microservice (**Python** is the main language).
- Tooling: **Python project templates**, **helper libraries** for common logic, **CI/CD** (a **base Docker image** + endpoint code layered on top), **canary releases** (SageMaker **variants**, plus custom releases), and monitoring via the **four golden signals** (latency, throughput, error ratio, saturation).

## 3. Data Flow — Operational = Analytical Data

- Oversimplified pipeline: services → **streaming pipeline (Kafka)** → **raw** (untransformed) offline warehouse → data-science **ETL** → **staging** data → **train** models → **deploy** to endpoints → used **live** by services.
- **The circle:** analytical data started as analytical data and ends up as **production/operational data** — so **operational data = analytical data**, and **there's no distinction** once ML is added. Best-effort "if it's sent, it's sent" emission is **no longer acceptable** because it has consequences.
- **Consequences:**
  - **Data quality matters more than ever** — model success is **explicitly bound to data**; **garbage in → garbage out**; missing fields / inconsistent mappings cause **significant prediction degradation** → need standardization and consistent transformations. ("Data quality is like a marshmallow — we ignore it and suddenly everything's on fire.")
  - **Trade-off:** service **data minimization** ("need to know") vs. model **precision** (needs lots of data) → an **organizational tension** requiring clear **governance**.

## 4. Feature Store & Drift

- A **feature** = a model input derived from raw data (the interface between service data and the model). Types:
  - **On-demand/computed** — a plain value from input data (e.g., a **risk score**).
  - **Dynamic/aggregational** — needs lookup/aggregation (e.g., vehicle values a customer insured **over the last 5 years**).
  - **Embedded/periodic** — updated periodically (e.g., a vehicle's value vs. the **market average**).
- A **feature store** stores/manages features for **online *and* offline** use. Benefits: **versioning** (history/auditability), **consistency/reuse** across models/teams (avoid each team doing it slightly differently), and **automated ETL/backfill** (e.g., backfill last year's features when you introduce it). Examples: **Tecton** (boxed, all-in-one — what Marshmallow uses), **Feast** (open-source, self-hosted).
- **Drift detection** (data changes over time):
  - **Data drift** — the **input distribution** shifts (often market conditions — e.g., **pandemic** → low vehicle mileage). Detect by comparing the **test/validation** distribution vs. **production** distribution.
  - **Concept drift** — the **input→output relationship** shifts (e.g., a repair shop raises vehicle-repair costs above the ground truth used in training).
  - **Remediation:** **monitor** (statistical methods — **PSI (Population Stability Index)**, **Kolmogorov–Smirnov** — comparing two distributions) and **retrain** — reactively, or better **proactively** (e.g., weekly) with automation.

## 5. Verifying Endpoints

- **Why it matters:** models power pricing/risk scoring with **direct revenue and UX** impact, and insurance is **heavily regulated** (compliance/legal risk). So apply **production standards** like microservices: **latency SLAs**, **high availability**, **code quality/testing**.
- **Propagating template changes** across many models: trivial ones via scripted GitHub PRs (many tools); harder ones (a new test needing **different mocks per model**) — they experiment with **AI agents** to iterate over every model.
- **Contract testing (bidirectional Pact):**
  - **Consumer** side unchanged — still generates expectations; being a Java company, they use **Wiremock** (a network-testing tool capturing calls) to **generate pact files**.
  - **Provider** side — instead of the provider verifying pacts directly, it supplies a **contract schema** (an **OpenAPI/Swagger JSON**, easily generated from **Pydantic**) uploaded to a **Pact broker**, which validates the consumer pact against the provider contract. (They already had OpenAPI contracts, so it was a no-brainer.)
  - **Gap:** the provider **doesn't verify its own schema** — e.g., you make a previously-optional field required in logic but forget to update the schema → the contract is invalid. Fix with **schema verification** (**Schemathesis** / **Dredd**) — generate **random data from the contract**, call the endpoint, observe behavior. Custom work was needed because they represent every **decimal as a string** (to avoid cross-language serialization/rounding issues), which loses min/max boundaries → they built **custom fields** across the stack (cumbersome, but worth it: *"schema verification catches more bugs than Dan Vacanti can fire"* — the biggest root cause of endpoint issues).
- **Back-testing:** replay **historical (anonymized) inputs** through a **candidate model** (Docker image built from a PR branch) to check a change does what's expected (e.g., a pricing change giving ~20% lower prices). Crucially, **re-run the old data through the *current* production model state** (old calculations used an old model). Used to **compare predictions, detect regression, and do statistical evaluation** — building **confidence** and mitigating **financial/legal risk**.
- **Future directions:** better **data lineage** (across every product, service → warehouse via feature store), **data-lake access** so data scientists **self-serve** (data discovery of available raw data), **scheduled retraining** (weekly/daily) to fight drift, and **cost optimization** (SageMaker + feature store are expensive).
- **Q&A — biggest challenge?** **Timing** — everything happened fast because the business needed live inference; models went to production first with few considerations to hit the market, which introduced failures, so they built a road map and stood up an **MLOps team** to retrofit the rigor.

---

## People, Companies, Tech & References Cited

- **Adam Pelle** — speaker; staff engineer, **Marshmallow** (insurance).
- Tech: **AWS SageMaker, Snowflake, Kafka, Python, Pydantic, Docker, Tecton, Feast, Pact, Wiremock, OpenAPI/Swagger, Schemathesis, Dredd, PSI, Kolmogorov–Smirnov**.
- Concepts: online inference endpoints, four golden signals, operational=analytical data circle, features / feature store, data vs. concept drift, contract/schema verification, back-testing, MLOps.

---

*Video: https://www.youtube.com/watch?v=tzYNqUoA290 — Transcript via yt-transcript.sh; outline generated from the transcript.*
