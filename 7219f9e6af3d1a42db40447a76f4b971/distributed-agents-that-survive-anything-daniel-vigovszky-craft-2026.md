---
title: "Distributed agents that survive anything – Daniel Vigovszky | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Daniel Vigovszky demos Golem — transparent durable execution on WebAssembly — contrasting hand-written retry/state-machine code with Golem's unchanged four-line workflow, and why its durable, stateful, distributed, exactly-once agents are a natural fit for AI agents."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Distributed agents that survive anything – Daniel Vigovszky (Talk Outline)

> **Daniel Vigovszky** — lead engineer of **Golem Cloud** — on making distributed agents survive **anything**: crashes, deployments, transient network issues, rate limits. He demonstrates **transparent durable execution** on WebAssembly and argues Golem's agent primitives are a natural fit for building AI agents.

---

## 1. Durable Execution 101

- **Not new, not AI-specific** — durable-execution solutions have emerged over 10+ years; the canonical demo is an **order-processing flow** (reserve inventory → charge card → create shipment → …) done durably.
- Useful **anywhere a simple retry isn't good enough**, for three reasons:
  - **Idempotency:** retrying a non-idempotent charge **double-charges** the user.
  - **Performance:** you don't want the user to **wait for a full retry** (his Prezi example ~10 years ago with Máté — a slow, fragile PowerPoint→images converter).
  - **Cost:** with **expensive AI APIs**, you don't want to re-pay for LLM calls already made.
- Demo workflow (all four steps are HTTP calls to a back end): **reserve inventory → charge payment → create shipment → send email.**

---

## 2. The Plain-TypeScript Pain (four failure scenarios)

- Setup: a **"chaos backend"** (TS server with four endpoints that can simulate failures) + a simple TS workflow whose core is **four sequential lines**.
- **Scenario 1 — payment service fails (500):** inventory reserved but nothing else → fix with a hand-written **retry loop** ("don't do it like this at home").
- **Scenario 2 — shipment request never returns:** money taken but nothing shipped → add a **timeout** (`AbortSignal`) that's also retried (wrapping to catch the thrown exception).
- **Scenario 3 — process crashes mid-workflow:** a supervisor restart re-does everything **except the email** (or does steps twice) → the fix requires **rewriting into a persisted state machine** (a **state type with phases**, save/load state to a file/DB), turning the simple four-liner into **much more complicated** `checkout` logic.
- **Scenario 4 — payment succeeds but looks failed:** retries **charge the card four times** → the payment service must support **idempotency keys** (derive from order ID), which the code must send.
- **The lament:** even after all fixes, **infinite other edge cases** remain. "Just tell your coding agent to rewrite it as a persistent state machine" is a **poor use of your codebase and context window** — the complexity is **forever** harder for humans *and* agents. Better: use a runtime built for this.

---

## 3. Golem — Transparent Durability

- Golem = a **serverless execution platform** (runnable locally with `--clean`). Create a Golem app via the **Golem CLI** (TypeScript), paste in the **original, unchanged** four-line workflow inside an **agent class**, add a YAML **retry-policy** tweak for the chaos backend, and deploy locally.
- **Result:** the **same code survives all four scenarios** — Golem auto-applies **retries**, **crash recovery** (scenario 3 needs **no code change** — the big win), and **automatic idempotency-key management** (scenario 4). Only **timeouts** still need an ugly `signal` + **`atomically`** wrapper (because `fetch`'s timeout error is a separate action from the fetch; to be fixed in a future version).
- **How it works (the stack):**
  - User code (copy-pasted TS + an agent class + `atomically`) → **Golem TypeScript SDK** → a **custom JavaScript runtime based on QuickJS, compiled to WebAssembly** → **Golem runs arbitrary WebAssembly**, journaling snapshots and recovering.
  - **WebAssembly is deterministic and sandboxed** → the only way a Wasm program touches the outside world (HTTP, even **generating a random number**) is via **host functions implemented in Golem**, so Golem can **capture every side effect**, persist a **journal**, and **replay from the beginning** (returning persisted values in "replay mode") to reconstruct state, then switch to **live mode** (snapshots speed up long replays). This is **transparent durability** — no code changes.
- **Contrast — Temporal.io (non-transparent):** the same nice-looking four-line workflow, but each step must be **explicitly wrapped as an `activity`** (`proxyActivities`). Forget to, or call `fetch` directly, and it's **not durable**; durability granularity is the activity, so **you must constantly design around the SDK**.

---

## 4. Golem Agents (a feel for the model)

- The basic entity is an **agent** = a class extending **`BaseAgent`** with a constructor. **Constructor params + agent type = identity** (no two `Checkout` agents with the same `orderId`; a different agent type with the same ID doesn't collide).
- **`Checkout.get(orderId)`** returns a **remote handle** (typed `client-to-checkout`, not a local instance) — the agent runs somewhere in the Golem server/cloud, possibly distributed, and you call its methods via **async RPC**. `get` has **get-or-create** semantics (persists across REPL restarts).
- One agent can call another (e.g., an `Order` agent driving a `Checkout` agent) via the same client handle — all remote calls **async**.

### 4.1 Properties
- **Durable** (part 1's demo), **stateful** (arbitrary state — class fields, globals, even an **in-memory SQLite** — all auto-persisted), **distributed** (agents spread across executor nodes; agent-to-agent client calls are transparently distributed), **typed invocations** (each method's input/output schema enforced), **exactly-once** agent-to-agent calls (guaranteed once, not zero/twice), and **scalable** (Wasm low footprint, spawn many, horizontal scaling).

---

## 5. Why Golem Fits AI Agents

- **AI agents** = long-running, stateful flows with **zero trust** (LLMs given **tools** to touch the world) + **memory**, plus **rate-limits, flakiness, and cost** → different problems than the stateless programs we used to write. The space has **AI frameworks** (LangChain, CrewAI…), **sandboxes** (E2B, Daytona, Modal…), and **durable-execution engines** (Temporal.io, Restate, Golem…) all converging.
- **Property-by-property fit:**
  - **Durability** — transparent (vs. **LangChain**, which auto-durabilizes conversational memory but needs **explicit checkpoints/tasks** via lower-level graph/functional APIs for custom durability).
  - **Statefulness** — any in-memory state persists (vs. **CrewAI**, where custom state is a manually saved/loaded data class).
  - **Distributed** — the **agent is the fundamental unit of distribution/sharding** (vs. containers/processes), with automatic sharding/relocation and horizontal scaling.
  - **Typed invocation** — each agent method's schema is available at runtime (reflection), making it **trivial to expose agents as tools/MCP**.
  - **Exactly-once** — needed by many AI agents; free in Golem (plus automatic idempotency keys), so you don't juggle **two frameworks** (durable execution + AI framework).
  - **Scalability** — fast Wasm instantiation and **zero-cost idle instances** (evict idle agents from memory since they're reconstructable), with hard memory/disk limits — resolving the usual sandboxing-vs-performance conflict.

### 5.1 Extra features
- **Fast Wasm sandboxing** — isolated linear memory + isolated root filesystem per agent; the **only** outside interaction is host functions (e.g., `wasi:http/outgoing-handler` is the sole way to make an HTTP request), which Golem fully controls (`wasm-tools print` reveals the imports).
- **Suspension** — idle instances leave memory; **arbitrary long sleeps** ("sleep 2 days, then delete the account") and **webhooks** (get a URL, publish it, await an arbitrarily long completion) consume **zero CPU/memory** while suspended.
- **Typed config & secrets** — inject typed (nestable) config as a constructor param (Golem enforces it's satisfied before deploy); mark fields as **secrets** (any type), which are **dynamic/rotatable without redeploy**.
- **Quotas** — define named resources with a **type** (`concurrency` or `rate`) and value, and an **enforcement action** (`throttle`); hitting the limit **suspends** the agent (no error/busy-loop) and Golem **auto-resumes** it when the resource frees up. Reserved quota can be **split and passed to child agents** over RPC (a consumption hierarchy); generic (works with any third-party library).
- **Observability** — full control of side effects means a complete **op-log/audit** (`golem agent op-log`) of every side effect, plus automatic **OpenTelemetry** export (point the manifest at your collector).

### 5.2 Coming (1.6)
- **Native Golem tools** — enforce **permissions/middlewares** in the runtime (unbypassable by user- or AI-written code), pass **opaque secrets** never materialized in agent memory (so an LLM can't leak them), and let **separate authors** write tools vs. agents (a growing tool ecosystem).
- **Unforgeable permission cards** — fine-grained (which files/secrets/RPC an agent or tool may use), **host-held** (never in Wasm linear memory, so unforgeable), with **derivable subset** cards passed over RPC for temporary delegated allowances.
- **Integration** — auto-expose agents via **HTTP/OpenAPI** (mount point + endpoint decorators), **MCP** (a few manifest lines), **bridge libraries** (generated typed **TypeScript/Rust** clients for external apps), and future **A2A** (agent-to-agent protocol).

---

## 6. History & Status

- Started as **ZIO Flow** (Scala/ZIO workflow engine; PoC 2021, public release 2023) — too niche → became **Golem** (April 2023, Inverness), first as **transparent durable execution on Wasm** for workflows, then **"serverless durable execution,"** now an **"agent-native platform"** (a new release every 3–4 months).
- **Golem 1.5** is **released and open-source** (self-host = production-ready; **Golem Cloud** is developer-preview). Write agents in **TypeScript, Rust, Scala, or Moonbit**.

---

## 7. Q&A

- **Why not use an AI coding plugin to implement the agent live?** "Because I didn't want you to watch an AI agent work while I stand here in silence — otherwise I would."
- **Can you reject an agent recovery?** No — recovery is **fully transparent by design** (adds latency, but as if the crash never happened).
- **How does it handle out-of-memory?** A **hard memory limit**; exceeding it is a **fatal error** — the agent isn't recovered/usable; you can **manually undo** the last operations via API/CLI to bring it back to a prior state.
- **Why the `atomically` wrapper around `fetch` in demo 2?** Only needed for the **timeout** (fetch's timeout error is a separate action) — "awful," to be solved in the next version.

---

## People, Projects & References Cited

- **Daniel Vigovszky** — speaker; lead engineer, **Golem Cloud**. (Worked with **Máté** at **Prezi**.)
- **Golem** (ex-ZIO Flow), **ZIO** ecosystem, **QuickJS**, **WebAssembly / WASI**, **Temporal.io**, **LangChain**, **CrewAI**, **E2B / Daytona / Modal**, **MCP**, **A2A**, **OpenTelemetry**.
- Concepts: durable execution, transparent vs. non-transparent durability, side-effect journaling/replay, agent identity, exactly-once, quotas/throttle-suspend, permission cards, bridge libraries.

---

*Video: https://www.youtube.com/watch?v=Tje4j3-S6oc — Transcript via yt-transcript.sh; outline generated from the transcript.*
