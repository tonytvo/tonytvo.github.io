---
title: "Tier 0 Engineering at Tesco Technology – Csorvási & Raksimowicz | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "How a 13-engineer team runs Tesco's tier-0 inter-service communication platform (5B calls/day) with near-zero downtime — cell-based deploys, dry-run validation, synthetic SLIs, DR, and cautious AI."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Tier 0 Engineering at Tesco Technology – Csorvási & Raksimowicz (Talk Outline)

> Two engineers (Yulia & János) on how a **13-engineer team** builds and operates one of Tesco's most mission-critical systems — the **Inter-Service Communication (ISC)** platform — with essentially zero downtime.

---

## 1. The System & Its Criticality

- ISC is a **centralized platform** through which all service-to-service and external HTTP traffic flows (**5B+ API calls/day**) — so if ISC is down, checkouts/tills/supply chain are down. It's classified **tier 0** (of tiers 0–5, criticality-derived by agreement): 24/7 two-on-call, two cloud regions × three AZs, **99.995%** target — actual downtime **<32s over the past year**.
- **Architecture:** a **data plane** (Envoy gateways — private east-west, public north-south — plus a rate limiter) and a **control plane** (Traffic Config Service API + DB). Users write declarative config via a `traffic-ctl` CLI (kubectl-like); the control plane transforms it to Envoy xDS and pushes it.

## 2. Making Changes Safely

- Multi-tenant: syntactic + semantic validation isn't enough — config can pass validation yet be invalid to Envoy and cause a total outage. So every Traffic-Config pod runs a **dry-run gateway sidecar** (same Envoy config, no live traffic) that tries to apply the config first. **Takeaway: static validation is necessary but not sufficient for tier 0 — validate against the real thing.**

## 3. Deploying Without Downtime — Cells

- **Cell-based architecture:** wrap the whole control+data plane in a **cell**; deploy **4 independent cells** (2 regions × 2), each able to handle full production load alone. A **stage** wraps the regions/cells; the pipeline promotes dev → org-dev → org-staging → prod (org-dev/staging treated as production).
- Per-cell deploy: **disable ingress (drain)** → deploy → integration + end-to-end tests → **enable ingress** → check **canary metrics** (~20 min). Any failure **auto-rolls back the whole stage**. **Takeaway: deploy and test in cells, not globally.**

## 4. Knowing It Works — Synthetic SLIs

- SLI/SLO/SLA distinguished; they chose **synthetic probes** (cleaner than noisy real traffic) via a **monitor service** (both client and upstream) exercising data plane (every journey — same/cross-region, cross-subscription, public, on-prem…) every ~5s, plus an **external** monitor testing the public path independently (no single point of failure). Control-plane SLI = **config-propagation time** (submit → first 200 across all gateways) and a **rate-limiting SLI** (send traffic at/above the limit). Each SLI is built **iteratively** (v1 simple → v2 all gateways → v3 tighter/realistic) so as not to overload the very system being monitored. **Takeaway: build synthetic probes as first-class citizens — but don't let monitoring break the thing it monitors.**

## 5. Disaster Recovery

- Back up everything (DBs, secrets, blobs, artifacts) to **Azure-independent storage** on a schedule; recovery **can't depend on Azure DevOps** — any engineer can run a script to redeploy to a new subscription ("one-click restore"). Practice with **DR sessions** (facilitators break a prod-like env; subteams investigate/mitigate/retro), evolved from manual → standardized scenarios → **Azure Chaos Studio** automation. **Takeaway: practice recovery until it's boring.**

## 6. AI on a Tier-0 System

- Guiding principle: **keep humans in the loop** — humans own discovery/architecture/final review; AI helps with implementation, code review, docs, tests. Start with **lowest-risk** uses (explain code, docs), then full implementation with human review, then specialized workflows and external tools (query metrics/docs). Future: incident response, pipeline diagnostics, consumer self-service. **Takeaway: don't revolutionize overnight — add AI gradually, let trust build from evidence.**

## 7. Lessons Learned (what they got wrong)

- **Built features barely anyone used** → shift from feature-driven to **problem-driven** (talk to consumers first).
- **A DNS change broke critical consumers** (no canary) → added **canarying + resolution SLIs/tests** to shrink blast radius.
- **Drowning in support** → invest in **self-service** (discoverable dashboards/docs/CLI, right level of detail, a channel bot).
- **Silos across London/Budapest** → more in-person time, fewer parallel work streams with pairings, documented decisions, retros/health checks. "Team structure matters as much as technical architecture."

---

*Video: https://www.youtube.com/watch?v=UOgsOKzjnC0 — Transcript via yt-transcript.sh; outline generated from the transcript.*
