---
title: "Machine learning in production - Adam Pelle | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Adam Pelle (Marshmallow) on the operational side of ML — SageMaker inference endpoints, feature stores, drift detection, and verifying models with contract/schema testing and back-testing."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Machine learning in production - Adam Pelle (Talk Outline)

> Adam Pelle (staff engineer, Marshmallow insurance) on the **operational** side of ML — "how we keep the lights on for those endpoints in production" — not the algorithms.

---

## 1. History: Offline → Real-Time

- Old world: product engineers emit data to an offline warehouse (Snowflake); data scientists do **offline, reactive, slow** analysis fed back into the product. Insurance demanded **real-time intelligence** (risk scoring, fraud detection, dynamic pricing): "let me get back to you next week" → "**let me get back to you in 150 ms**." Marshmallow now runs models in claims/fraud/pricing: **14 online inference endpoints** (~25 models, multi-model endpoints), busiest ~30 req/s P99; goal >100 models across every domain.

## 2. Serving

- **AWS SageMaker** hosts models as REST endpoints (treated like microservices). Tooling: Python project **templates**, helper libraries, **CI/CD** with a base Docker image, **canary releases** (SageMaker variants), and the **four golden signals** (latency, throughput, error ratio, saturation).

## 3. Data Flow: Operational = Analytical Data

- Services → streaming pipeline (Kafka) → raw offline warehouse → ETL → staging → train models → deploy → endpoints used live. The pipeline is a **circle**: analytical data becomes production/operational data, so there's **no distinction** — best-effort "if it's sent, it's sent" data emission is no longer acceptable.
- Consequences: **data quality matters more than ever** ("garbage in, garbage out" — small inconsistencies cause big prediction degradation) and a **trade-off** between service data-minimization ("need to know") and model precision requiring lots of data → organizational tension needing governance.

## 4. Feature Store & Drift

- A **feature** is a model input derived from raw data (on-demand/computed like a risk score, dynamic/aggregational like insured vehicle values over 5 years, embedded/periodic like market-average vehicle value). A **feature store** (Marshmallow uses **Tecton**; Feast is open-source) provides **versioning, consistency/reuse across models (online + offline), and automated ETL/backfill**.
- **Drift detection:** **data drift** (input distribution shifts — e.g. pandemic → low mileage) and **concept drift** (input→output relationship shifts — e.g. repair-shop costs rise). Monitor by comparing training vs. production distributions (PSI, Kolmogorov–Smirnov) and **retrain** (reactively, or better proactively on a weekly schedule with automation).

## 5. Verifying Endpoints

- Models drive revenue/UX and are heavily regulated → apply **production standards** (latency SLAs, high availability, code quality/testing). Propagating template changes across models is hard — trivial ones via scripted PRs, harder ones (new tests needing per-model mocks) via **AI agents**.
- **Contract testing** (bidirectional Pact): consumer generates expectations (via **Wiremock** capturing network calls); provider supplies an **OpenAPI schema** (generated from Pydantic) checked by a **Pact broker**. But the provider doesn't verify its *own* schema — so add **schema verification** (Schemathesis/Dredd generate random data from the contract and call the endpoint). Custom work was needed for **decimal-as-string** financial fields (min/max boundaries) but "**schema verification catches more bugs than Dan Vacanti can fire**" — the biggest root cause of endpoint issues.
- **Back-testing:** replay historical (anonymized) inputs through a candidate model (built from a PR branch) — re-running old data through the *current* model state — to compare predictions, detect regressions, and build confidence before a pricing change (mitigating financial/legal risk). Future: better **data lineage** across products, self-serve **data-lake access** for data scientists, scheduled retraining, and **cost optimization** (SageMaker/feature store are expensive). Biggest challenge: **timing** — models went to production fast for speed-to-market, then an MLOps team retrofitted the rigor.

---

*Video: https://www.youtube.com/watch?v=tzYNqUoA290 — Transcript via yt-transcript.sh; outline generated from the transcript.*
