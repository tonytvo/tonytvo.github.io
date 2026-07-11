---
title: "Platform Engineering: Lessons from the Rise and Fall of eBay - Randy Shoup | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Randy Shoup on eBay's 'Velocity' program — how they doubled engineering productivity via continuous delivery and DORA metrics, and why culture (not technology) still ate the strategy."
type: "reference"
tags: ["softwaredevelopment"]
---

# Platform Engineering: Lessons from the Rise and Fall of eBay - Randy Shoup (Talk Outline)

> Randy Shoup (former eBay chief architect / VP of platform engineering): "How we doubled engineering productivity at eBay but still didn't save the company." A story of technical transformation succeeding while culture failed.

---

## 1. The Setup

- eBay was a real pioneer (DB sharding, real-time search 2003, eventual consistency, feature flags, Kafka-like messaging in 2006, circuit breakers, staged rollout) — yet GMV went **flat**: US commerce grew **8×** while eBay grew **1.5×** (~20% of keeping pace). Hypothesis: **product velocity was too slow.**
- Value-stream map across four stages — **planning → software development → software delivery → post-release iteration** — surfaced issues everywhere (too much WIP/coordination, slow build/test, coupled architecture, no service contracts, manual testing, no canaries, flying blind on user behavior).

## 2. The Velocity Program

- Focused on the center (**development + delivery**) because it makes everything else possible by lowering the cost of change. Measured with **DORA metrics** (*Accelerate* / Nicole Forsgren): deployment frequency, lead time, time-to-restore, change-failure rate — the whole industry improves fast, so staying flat = falling behind. eBay moved from a solid **medium performer** (deploy 2×/month, 10-day lead time) to **high performer** (2–3×/week, 2-day lead time); stability metrics improved *too* (CD improves speed and stability together).
- **Approach:** think big, start small (10% pilot domains as a cross-section), learn fast; parallel **platform tracks** (velocity measurement, inner-loop productivity, build/startup time, local testing, CI, staging reliability, **traffic mirroring**, deployment automation, training). Rearchitected **View Item** and both **mobile apps**.

## 3. How They Worked

- **Cross-functional leadership** (platform + product VPs), an **embedding model** (senior ICs "sent to the provinces" to coach), daily standups, weekly **team-of-teams**, monthly exec reviews, a **DORA dashboard** per team. Killer reframe: "tell me all the reasons you *can't* deploy daily" → "your impediments are exactly my team's backlog." Replaced manual **partner sign-offs** ("worst distributed coordination algorithm") with contracts/OpenAPI; **"if it hurts, do it more often"** turned yearly sitewide upgrades into monthly; mobile went monthly → weekly releases faster than thought possible.
- **Results:** ~2× engineering productivity (same team, double the features/fixes); ~5× deployment frequency & lead time, ~3× change-failure & MTTR. Fostered **psychological safety** ("it's safe to say I have a problem") and made it *fun* (friendly competition; teams escalated to force their way into the pilot).

## 4. Why It Still Wasn't Enough

- **Strategy/planning:** the **innovator's dilemma** — a flat business selects for **risk-averse** behavior; the **"seller straitjacket"** (fixing spelling/ranking disrupted arbitrage sellers' business models); centralized annual waterfall planning → massive multi-quarter releases (eBay Managed Payments: ~2,000 people, ~$1.5B, and sellers got *slower* payments); a **"feature factory"** measuring effort ("5,000 train seats") not outcomes.
- **Technology dead-ends:** XSLT-generated HTML, shared-DB SOA, custom forks of OpenStack/Kubernetes falling years behind, proprietary Marko/mobile frameworks, no public cloud, late to microservices/CD/GraphQL.
- **Organizational culture (the biggest):** Westrum's **pathological** culture — fear, politics, risk-aversion, zero-sum empire-building, top-down waterfall, experimentation used to confirm bias. A cautionary "culture of terror" VP (700-person empire, personally approved every deploy for a year). **"Culture eats strategy for breakfast"** (Drucker) — and product, technology, and process too. Aspirational counter-example: Andy Grove (Budapest-born Gróf András) "firing" himself to exit the memory business.

---

*Video: https://www.youtube.com/watch?v=d5TprArcWX0 — Transcript via yt-transcript.sh; outline generated from the transcript.*
