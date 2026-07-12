---
title: "Platform Engineering: Lessons from the Rise and Fall of eBay - Randy Shoup | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Randy Shoup on eBay's 'Velocity' program — doubling engineering productivity via continuous delivery and DORA metrics — and why strategy, technology dead-ends, and above all a pathological culture meant it still couldn't save the company. Culture eats strategy for breakfast."
type: "reference"
tags: ["softwaredevelopment"]
---

# Platform Engineering: Lessons from the Rise and Fall of eBay - Randy Shoup (Talk Outline)

> **Randy Shoup** — former **eBay chief architect / VP of platform engineering** (his second stint), speaking at Craft for 10 years, following up his 2022 talk. Alternate title: **"How we doubled engineering productivity at eBay but still didn't save the company."** Two lessons: (1) how to execute a large-scale technical transformation, and (2) why a technical transformation is **not enough**.

---

## 1. The Setup — A Pioneer That Went Flat

- eBay (from 1995) was a real internet **pioneer**, co-inventing serious tech ~25 years ago: **database sharding, a real-time search engine (2003), eventual consistency** (instead of transactions everywhere), **distributed tracing, centralized logging, feature flags** (co-invented), **guaranteed messaging (Kafka-like, 2006), SLO-driven config, circuit breakers, graceful degradation, staged cluster deployment, automated coordinated multi-cluster rollout.**
- But **GMV** (gross merchandise volume) went **flat** since ~2007. Meanwhile **US commerce grew 8×** while **eBay grew 1.5×** — ~**20%** of merely keeping pace with e-commerce.
- Hypothesis (5 years ago): **product velocity was too slow to keep up** — they wanted velocity to become a **competitive advantage**, not a lagging indicator.

### 1.1 The value-stream assessment
- ~**4,500 engineers**, ~**4,500 applications/services**. Mapped how an idea becomes a feature across **four stages**:
  - **Planning** (idea → project): too much cross-team coordination, inter-team dependencies, **too much WIP** on every team.
  - **Software development** (project → committed code): slow build/test, context-switching, a **highly coupled architecture**, **no tradition of service contracts**, hidden work.
  - **Software delivery** (code → live feature): minimal automated pipelines, broken common staging, manual testing, no automated rollout, no canaries, minimal **feature flags** (despite co-inventing them).
  - **Post-release iteration**: flying blind on user behavior; **dysfunctional experimentation** (some teams none, others paralyzed for months by tiny experiments).
- **Focused on the center (development + delivery)** because software delivery **makes everything else possible** by lowering the cost of change — you can't safely re-architect while doing monthly releases.

### 1.2 What "good" looks like
- Rolling planning; **small cheap experiments** then double down only on success; small batch sizes with fast build/test; **daily-or-better merge & deploy**; a **decoupled architecture**; a **fully automated test+deploy pipeline** (target: **1 hour** commit→deploy); iterate in production behind **feature flags**; trusted end-to-end monitoring; rapid feedback.

---

## 2. Measuring — DORA Metrics

- Grounded in the **_Accelerate_ book / DORA metrics** (Dr. **Nicole Forsgren**, State of DevOps research since 2014): "if you haven't read it, leave the stage, buy it, come back."
- Four metrics: **deployment frequency, lead time for change, time to restore service, change failure rate.** Performance **clusters** (low/medium/high/elite — measured in months/weeks/days/hours), and **the whole industry improves fast**, so **staying flat = falling behind**.
- eBay in 2020 was a **solid medium performer**: deploy ~**2×/month**, lead time **10 days**, restore ~1–2 days, low change-failure (very risk-averse/slow). After the work, all teams moved to **high performer**: **2–3×/week**, lead time **2 days**, and restore + change-failure **also improved** (CD improves **speed and stability together**) — roughly 35th → 75th percentile.
- **Business result:** **doubled engineering productivity** — the same team delivers **double** the features/bug-fixes.

---

## 3. How They Did It

- **Think big, start small, learn fast:** target **10% pilot domains** (a deliberate **cross-section** — buying, selling, payments — so no one could say "won't work on our side"), a few key apps each, plus parallel **platform tracks** for everyone.
- **Platform tracks:** velocity measurement per team, inner-loop (code-test-run) productivity, build/startup time, local testing (machine or cloud), CI improvements, staging reliability, **traffic mirroring** (tee prod version-N requests to N+1 and compare — black-box testing at scale), **deployment automation** (commit→deploy, no human intervention), and lots of **training/workshops**.
- **Rearchitected two areas:** **View Item** (the product page — deceptively simple, insane configuration combinatorics) and both **mobile apps** (15 years old → modern iOS/Android).
- **How they worked:**
  - **Cross-functional leadership** — Shoup (platform/infra) + a product-engineering VP, closely for the whole program.
  - **Embedding model** — hired senior ICs (architects/tech leads) "sent out to the provinces" to evangelize, understand pain points, coach, and connect platform ↔ pilot teams (the platform team had **never talked to its customers** before).
  - **Communication:** daily standup with the product VP, weekly **team-of-teams** (ambassadors share wins/help), weekly team deep-dives, monthly exec operating review.
  - **Measurement:** a **DORA dashboard** giving each team granular visibility + input metrics for the platform tracks.
  - **Iterate:** the killer reframe — "Hi, I'm your friendly neighborhood chief architect; if you *had* to deploy daily, tell me all the reasons you can't." The list of impediments (build/test times, broken staging, code-review/sign-off waits) → **"your impediments are exactly my team's backlog."**
  - **Removing bottlenecks:** cut build/startup/PR-validation times, invested in staging uptime, automated toil (upgrades, testing, deploy tooling, site-speed measurement), changed team *processes* (surfaced via embedding), and replaced **partner sign-offs** ("the worst distributed coordination algorithm" — five teams manually testing your release) with **contracts/OpenAPI** and automated nagging.
  - **Culture:** **psychological safety** ("it's safe to say I have a problem"); made it **fun** (friendly competition, celebrating wins) — teams **escalated to force their way into** the pilot (planned 10, ended with 15); explicitly partnered with usually-slow teams (**security, compliance, accessibility, localization**) to automate their gates; CEO highlighted it at all-hands, presented to the board.
- **Results:** ~**2× productivity**; ~**5× deployment frequency**, ~**5× lead time**, ~**3× change-failure**, ~**3× MTTR**.

### 3.1 What scaled after he left (2022)
- The team scaled it from 10% to the rest of eBay over three years, built a **velocity playbook**, training videos, etc.
- **Sitewide upgrades:** from **yearly** (accumulate a year of security fixes, then dump on teams) → **"if it hurts, do it more often"** → half-yearly → quarterly → **monthly** (a month of change is far easier to absorb) with automation.
- **Mobile:** a skeptical release manager said weekly releases "can't be done"; stretch goal = one weekly release by year-end. They tried bi-weekly (March/April), it went well, and went **weekly by July** — never less than weekly since, with **blameless retrospectives**, sub-1% **seeded rollouts** (caught real bugs), and any domain able to halt a release (blamelessly). Later, four or five people still ask **"what would Randy do?"** three years on.

### 3.2 What they got vs. didn't
- **Got:** fast build/test iteration, a fully automated test+deploy pipeline for **98–99%** of apps, **reintroduced feature flags**, end-to-end monitoring.
- **Didn't get:** daily merge/deploy, genuinely small cheap experiments, rolling planning.

---

## 4. Why It Still Wasn't Enough — Three Reasons

### 4.1 Strategy & planning
- **Innovator's dilemma** (Clayton Christensen): incumbents won't disrupt a lucrative model and get arbitraged by faster movers. A **flat business selects (evolutionarily) for risk-averse behavior** — people who've been there 15 years have only known a flat eBay.
- **The "seller straitjacket":** every user-facing improvement met near-revolt from sellers whose **business models exploited inefficiencies** — e.g., fixing **spelling mistakes** disrupted people who bought misspelled ("fone") items cheap and resold them corrected; better ranking disrupted other arbitrage.
- **Centralized annual waterfall planning** (hundreds of people, months) → work only happens if the exec team approves it and it's **big enough** for the initiative list; small projects survive by tacking onto big ones. → **massive coordinated releases** measured in **quarters/years** with **50+ teams**. Example: **eBay Managed Payments** (PayPal split) — a ~3-year, **~2,000-person, ~$1.5B** project just to take credit cards, and sellers got **slower** payments (bank days vs. instant PayPal).
- **"Feature factory"** measuring **effort not outcomes** — a VP once celebrated "we delivered **5,000 train seats** this quarter" (a train seat = 2 engineer-weeks → ~$60M of effort as the *win*).
- Counter-example: **Andy Grove** (Budapest-born **Gróf András**) at Intel in 1985 — "if the board fired us and brought in a new CEO, he'd get out of memory; why don't we walk out, pretend we fired ourselves, and come back in?" — which is why Intel then thrived.

### 4.2 Technology dead-ends
- **XSLT-transformed XML → HTML**; **shared-database SOA**; **custom forks** of OpenStack then Kubernetes that **fell years behind mainline** and were abandoned; **Hadoop** data warehouse; a proprietary JS framework (**Marko**) and proprietary mobile frameworks; **no public cloud**; a weak open-source contributor; **late** to microservices (isolated DBs), continuous delivery, automated testing, interface contracts, automated canary, and **GraphQL**.

### 4.3 Organizational culture (the biggest)
- The DevOps insight: **culture directly, predictably determines software-delivery and business performance** (Ron **Westrum**'s typology — generative / bureaucratic / **pathological**). eBay matched **pathological**: a **culture of fear** (acknowledging failure seen as rude/threatening), highly political and risk-averse at leaves and executives, a **zero-sum scarcity mindset** → **empire-building**, top-down waterfall (little real-time team autonomy), and **experimentation used to confirm biases**, not learn. Plus **exceptionalism** that resisted standard industry approaches by default.
- **Cautionary tale:** an unnamed VP ran a **"culture of terror"** — constant fear of mistakes, threatening high performers with bad reviews if they transferred out, a **700-person empire** for one part of the site, faux-agile (planning→design→dev→QA→release "sprints"), and **personally approving every one of that team's deployments for a year**. Karma: the chief architect (Shoup) left; the VP was let go ~6 months later.
- **"Culture eats strategy for breakfast"** (Peter Drucker) — "and product, technology, and process too."

---

## 5. Q&A

- **Are some systems/architectures harder to change, and how to initiate change?** Yes — the more **modular/decoupled** a system (even within one process/service), the easier to pull pieces out; spaghetti/big-balls-of-mud resist. For decoupling, read **Vlad Khononov's** *Balancing Coupling in Software Design* (also a Craft speaker).

---

## People, Books & References Cited

- **Randy Shoup** — speaker; former eBay chief architect / VP platform engineering.
- **Nicole Forsgren** — *Accelerate* / DORA metrics / State of DevOps.
- **Ron Westrum** — organizational-culture typology (generative/bureaucratic/pathological).
- **Clayton Christensen** (innovator's dilemma), **Peter Drucker** ("culture eats strategy for breakfast"), **Andy Grove / Gróf András** (Intel), **Vlad Khononov** (*Balancing Coupling*), **Simon Wardley** (referenced).
- Concepts/tech: value-stream mapping, DORA metrics, traffic mirroring, feature flags, embedding model, partner sign-offs → contracts/OpenAPI, "if it hurts do it more often," seeded rollouts, blameless retrospectives, feature factory, seller straitjacket, XSLT, custom forks of OpenStack/Kubernetes, Marko, GraphQL.

---

*Video: https://www.youtube.com/watch?v=d5TprArcWX0 — Transcript via yt-transcript.sh; outline generated from the transcript.*
