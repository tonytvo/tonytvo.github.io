---
title: "How Durable Computing is Reshaping Distributed Systems – Jeremy Edberg | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Jeremy Edberg on durable execution — building reliability into the runtime via checkpointed workflows-as-code — the Temporal vs. DBOS styles, and why AI agents need it."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# How Durable Computing is Reshaping Distributed Systems – Jeremy Edberg (Talk Outline)

> Jeremy Edberg (reliability at Reddit, Netflix, Amazon Alexa) on **durable execution** — making software reliable *by default* by building reliability into the runtime instead of paying the "failure tax."

---

## 1. The Failure Tax & Fossilized Architectures

- Most reliability code isn't business logic — it's the plumbing we add to survive failures (the **failure tax**).
- Architectures accumulated over time: mainframe → client-server (networks) → "serverless" (a lie — **state just moved elsewhere**: DBs, caches, queues, humans). We bolted on middleware, queues, scattered orchestration every time something broke. **What if reliability went directly into execution?**

## 2. Durable Execution

- Almost all software is a **workflow** — step 1, 2, 3 (like a chess scorecard); anything can fail at any step. **Checkpoint the running state** to a data store (like a video-game save point); on failure, resume from the last good step.
- Replaces ad-hoc status tables and cron sweepers, and adds **durable timers** (no polling cron), **process independence** (a new server resumes), and **signaling** (a request/human response resumes the workflow).
- Developer experience: **shape business logic as durable workflows** — failure recovery becomes a **property of the runtime** (monitor the app = monitor recovery). "A non-deterministic system becomes deterministic **in the past**" — recorded results enable replay (and save re-calling the LLM).

## 3. Two Styles

- **Temporal style** (centralized orchestrator, from Uber): a workflow service farms work to your workers and stores event history; handles determinism via **activities**, timers, signals, human approvals. Costs: you **manage the orchestrator** (or pay), rewrite app logic to fit, API overhead, vendor lock-in.
- **DBOS style** (database-backed library): the orchestration is a **library inside your app**, so each app process is its own distributed orchestrator, coordinating through **Postgres/SQLite**. Steps checkpoint to the DB; a returning checkpoint skips re-work; a crashed workflow is picked up by another worker (still "pending"). Using the **same Postgres** for data + workflow lets you tie a step and a data update in **one transaction** (both commit or roll back). Queues/schedules are just future workflows via Postgres concurrency + `SKIP LOCKED`; plus SQL observability.
- **Shared beliefs:** workflows should be **code** (not YAML), progress should be durable, **long-running work should be normal** — crucial now that AI requests take 5–10s (between fast APIs and batch jobs).

## 4. Why It Matters for AI

- AI agents are distributed systems with worse debugging — long-running, async (human in the loop), flaky, rate-limited, timeout-prone, and **non-deterministic** (dynamic, AI-driven workflows vs. fixed ETL). Durability **records responses**, enabling:
  - **Forking to debug** — replay from a checkpoint with the *identical* recorded LLM output to isolate exactly the one broken step.
  - **Saga pattern** — compensate/undo multi-step processes by stepping back through recorded state.
  - **Security/compliance/audit** — a full execution log of every input/output.
  - **Testing** — regression on real production data; **autonomous testing agents** and **AI SREs** trained on the execution data.

## 5. Adoption & Q&A

- "Is durable execution right for you?" — likely yes if you have high failure likelihood/cost, requests outliving processes, calls to unreliable systems, harmful duplicate execution, or compliance needs. **Especially** for AI agents that affect the real world (Alexa "open the garage" vs. "turn on the stove").
- **Start with your most painful workflow**, wrap its boundary, split into steps — you don't have to make everything durable at once. "Once compute is durable, orchestration stops being infrastructure and becomes code."
- Q&A: ~<1% overhead per call; DBOS benchmarked ~40k workflows/s on one Postgres (shard beyond); **versioning** ties state to code version (patching / keep old-version workers); prune/cold-store audit data; store large LLM outputs in S3 with a pointer; only inputs/outputs are stored (not full data), so it grows slower than feared.

---

*Video: https://www.youtube.com/watch?v=NnAUH3iJZDs — Transcript via yt-transcript.sh; outline generated from the transcript.*
