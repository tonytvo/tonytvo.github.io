---
title: "How Durable Computing is Reshaping Distributed Systems – Jeremy Edberg | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Jeremy Edberg on durable execution — building reliability into the runtime via checkpointed workflows-as-code — the failure tax, Temporal vs. DBOS styles, forking to debug AI, the saga pattern, and an extensive Q&A on scale, versioning, and storage."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# How Durable Computing is Reshaping Distributed Systems – Jeremy Edberg (Talk Outline)

> **Jeremy Edberg** — ~30 years of reliability work (Reddit, Netflix, Amazon Alexa) — on **durable execution**: making software **reliable by default** by building reliability into the runtime instead of paying the "failure tax."

---

## 1. Opening — The Chess Scorecard

- A **chess scorecard from a game played in 1475** (~600 years ago), recreated and analyzable today — you can replay it and see each move and what went wrong. A metaphor for **recorded, replayable execution**.
- Poll: who's built a reliable distributed workflow — and *enjoyed* it? Most reliability code **isn't business logic**; it's plumbing to survive failures — the **failure tax**.

## 2. Fossilized Architectures

- Architectures are **accumulated, not designed**:
  - **Mainframes** — durable, local, no networks, fixable removable parts.
  - **Client-server** — now you handle **network outages**.
  - **"Serverless"** — the promise of stateless "cattle not pets" was **a lie**: Amazon's own reference serverless architecture is full of stateful services. **State just moved elsewhere** — databases, caches, queues, and **humans** (esp. AI human-in-the-loop). In distributed systems, **moving state is one of the biggest costs.**
- We bolted on **middleware, queues, scattered orchestration** every time something broke → a stack of app servers + non-business "keep-it-running" plumbing + a database. **What if reliability went directly into execution?** → durable execution.

## 3. Durable Execution — The Core Idea

- Almost all software is a **workflow** (step 1, 2, 3 — like the chess card), and **anything can fail at any step** (especially AI back-and-forth).
- Like a **video-game save point**: **checkpoint the running execution state** to a data store; if step 3 fails, pull the last-good state from step 2 and move forward.
- **Replaces** ad-hoc status tables and cron sweepers, and **adds**:
  - **Durable timers** — "continue at this time" without an always-running cron.
  - **Process independence** — long/multi-step processes needn't stay on one live server; a new one resumes.
  - **Signaling** — a request or a **human response** resumes where you left off.
- **New developer experience:** shape business logic as **durable workflows** → **failure recovery becomes a property of the runtime** (monitoring the app monitors recovery — one thing to manage). AIs are decent at writing this too.
- On **determinism:** *"A non-deterministic system becomes deterministic in the past"* — once it happened, it's recorded, so you can **replay** without re-calling the LLM (saving time/money and stabilizing debugging).

## 4. Two Styles of Durability

### 4.1 Temporal style (centralized orchestrator)
- Spun out of **Uber** (~7–8 years ago). A central **workflow service**: clients → app servers → workflow server farms work to **workers** and stores the request; results go back through the coordinator to its **own data store** and back to your app.
- Provides an **append-only event history** (the chess scorecard), replays, **activities** (mark deterministic vs. non-deterministic results), timers/signals, human approvals.
- **Costs:** you must **manage the central orchestrator** (or pay Temporal/competitors), **rewrite app logic** to fit the model, **external-API overhead**, and **cloud vendor lock-in**.

### 4.2 DBOS style (database-backed library)
- Orchestration is a **library inside your app** → each app process (and its copies) becomes its **own distributed orchestrator**, coordinating through **Postgres** (or **SQLite** for quick local durability, no multi-worker).
- Code = **steps and a workflow** that calls them; the library (not you) generates a workflow UUID, marks it **pending**, runs it, and **checkpoints outcomes**. A **step that already has a checkpoint returns it instantly** (no repeated work) — the critical piece that makes crashed workflows resumable (another worker picks up the still-"pending" workflow and skips completed steps).
- **Same Postgres for data + workflow** → tie a step and a data update in **one transaction** (both commit or roll back together). Queues/schedules are just **future workflows** using **Postgres concurrency + `SKIP LOCKED`** (a worker locks rows it takes; others skip them). Bonus: **full SQL observability** of pending/completed work, inputs, outputs.

### 4.3 Shared beliefs & differences
- **Shared:** workflows should be **code** (not YAML), **progress should be durable**, and **long-running work should be normal** — crucial now that **AI requests take 5–10s** (too slow for a normal load-balanced API, too interactive for batch).
- **Differences:** state lives in the **workflow service** (Temporal) vs. **your Postgres** (DBOS); compute is **split** (orchestrator + your systems) vs. **all in your app**; ops needs a **dedicated orchestrator team/vendor** (Temporal) vs. just keeping **your app** running (DBOS).

## 5. Why Build Durably — Especially for AI

- AI agents are **distributed systems with worse debugging** — long-running, **async** (human in the loop; a chatbot may kick to a human), **flaky/rate-limited/timeout-prone**, and **non-deterministic** (dynamic, AI-driven workflows where "what should I do next?" reshapes the flow — vs. fixed **ETL**). (Aside: the Chipotle chatbot asked to write code; a GitHub tool that finds OpenAI-backed chatbots to do your coding for free.)
- Durability **records responses**, enabling:
  - **Forking to debug** — with a bug in step 2 breaking step 3, fork from before step 2 with a **new ID**, reuse the **identical recorded step-1 LLM output**, run the fixed step 2, and **compare results** to verify the fix — the most **constrained** replay (removes all other variables).
  - **Saga pattern** — compensate a multi-step process (an order where inventory/shipping fails) by **stepping back through recorded state**; write small undo chunks for third-party effects, and undo your own DB transactions directly.
  - **Security/compliance/audit** — a full **execution log** of every step (who was affected, how they got in).
  - **Testing** — **regression on real production data** (input/output pairs); **autonomous testing agents** (train an AI on your inputs/outputs to find new failure modes); feed data to an **AI SRE** (e.g., "Wild Muse"-style micro agents trained on parts of your system).

## 6. Adoption

- "Is durable execution right for you?" (a joke on US drug ads): likely **yes** if you have high failure **likelihood** or **cost**, **requests outliving processes**, calls to **unreliable systems**, **harmful duplicate execution**, or **compliance** needs — "everyone answers yes to at least one." **Especially** for AI agents affecting the real world (Alexa asked to open the garage but **turning on the stove** — needs guardrails).
- **Best adoption:** start with your **most painful (most-failing) workflow**, wrap its boundary, split into steps — **you don't have to make everything durable at once** (easier incrementally in DBOS style). **"Once compute is durable, orchestration stops being infrastructure and becomes code."**

## 7. Q&A

- **Assume Postgres writes can't fail?** You already ensure DB writes succeed today; DBOS uses **standard Postgres libraries** for retries (50 years of Postgres tooling).
- **Overhead per call?** **<1%** — within your DB's normal planning; if you can't absorb 1%, scale your DB first.
- **Scale?** DBOS benchmarked **~40,000 workflows/sec** on a single AWS Postgres (shard beyond); Temporal style already runs Uber/Netflix/OpenAI.
- **Like event-driven architecture in SQL?** Yes, similar — event logging in SQL instead of elsewhere.
- **Saga vs. atomic-transaction workflows?** Blurry — both are multi-step; some steps need compensation, some are easy to undo; same shape.
- **Evolving workflows when state is coupled to code?** **Versioning** ties state to software version — either run on the new version or keep it pinned and manually migrate. **Temporal uses patching; DBOS keeps a worker per old version** with pending workflows. (One of the more complex parts.)
- **A library for this?** Yes — **DBOS** (his; GitHub) and **Temporal** (also open source), plus competitors — no need to build your own.
- **Audit data storage/space?** Can be large; all products have **pruning** ("keep last 10k"), plus standard **cold/tepid storage** tricks (pruning is often a commercial add-on).
- **AI-chat transcripts as steps — wasteful?** For large responses, store output in **S3 with a pointer**, or deduplicate; also, huge LLM responses often mean you should **break into smaller steps**.
- **Vs. Camunda et al.?** Those are **predefined workflows** (the opposite of workflow-as-code).
- **Two workers competing on one workflow?** Temporal manages its own store; DBOS **locks rows** with `SKIP LOCKED` so workers get disjoint sets.
- **Duplicating/synchronizing external state?** State is in **one place** (ideally your existing DB), avoiding multi-store synchronization — but only **inputs/outputs** are stored (e.g., an update returns "ok," not the whole customer), so it grows slower than feared; prune/archive as needed.
- **Crashed-workflow worker lacking resources / holding a lock?** Make **lock acquisition its own step** so replay sees it acquired; a residual race still needs the provider to offer an **unlock** — a problem you'd have durable-execution or not.
- **"14 standards → now 15"?** Not a standard — **a new way to develop code**, like OOP (some adopt, some don't).

---

## People, Companies & References Cited

- **Jeremy Edberg** — speaker; reliability at **Reddit, Netflix, Amazon Alexa**.
- **Temporal** (ex-Uber) and **DBOS** (his library) — the two durable-execution styles; **Camunda** (predefined workflows, contrast).
- Tech: **Postgres, SQLite, `SKIP LOCKED`, S3, UUIDs**; "Wild Mouse"-style **AI SRE** micro agents.
- Concepts: failure tax, durable execution/checkpointing, workflows-as-code, activities, durable timers/signals, saga/compensation, forking-to-debug, versioning, autonomous testing agents.

---

*Video: https://www.youtube.com/watch?v=NnAUH3iJZDs — Transcript via yt-transcript.sh; outline generated from the transcript.*
