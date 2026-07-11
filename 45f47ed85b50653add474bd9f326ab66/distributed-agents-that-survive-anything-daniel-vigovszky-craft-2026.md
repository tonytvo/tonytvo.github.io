---
title: "Distributed agents that survive anything – Daniel Vigovszky | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Daniel Vigovszky demos Golem — transparent durable execution on WebAssembly — and why its durable, stateful, distributed, exactly-once agents are a natural fit for AI agents."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Distributed agents that survive anything – Daniel Vigovszky (Talk Outline)

> Daniel Vigovszky (lead engineer, Golem Cloud) demonstrates **transparent durable execution** on WebAssembly, and argues Golem's agent primitives are a natural fit for building AI agents.

---

## 1. Durable Execution 101

- Not new, not AI-specific — about **reliability** where a simple retry isn't enough: **idempotency** (don't double-charge), **performance** (don't make users wait for a full retry), and **cost** (don't re-pay for expensive LLM calls).
- Example workflow: reserve inventory → charge payment → create shipment → send email.

## 2. The Plain-TypeScript Pain

Demoing four failure scenarios in hand-written TS:
- **Payment fails** → add a retry loop.
- **Shipment request hangs** → add a timeout (+ retry).
- **Process crashes mid-workflow** → must **rewrite into a persisted state machine** (turn 4 simple lines into complex phase-tracking code — forever harder for humans *and* agents to understand).
- **Payment succeeds but looks failed** → need **idempotency keys**.
- Even with fixes, infinite edge cases remain — and "just tell your agent to rewrite it as a state machine" is a poor use of your codebase and context window.

## 3. Golem — Transparent Durability

- Same four-line workflow, **unchanged**, survives all scenarios: Golem auto-applies retries, crash recovery, and idempotency-key management (only timeouts still need an ugly `atomically`/`signal` wrapper, to be fixed in a future version).
- **How:** code runs on a **QuickJS→WebAssembly** runtime; Golem runs arbitrary Wasm. Because Wasm is **deterministic and sandboxed**, every side effect (HTTP, even random numbers) goes through **host functions Golem controls**, so it can **journal them and replay** to reconstruct state (snapshots speed this up). Contrast: **Temporal.io** is durable but **not transparent** (you must explicitly wrap steps as `activities`).

## 4. Golem Agents

- The basic entity is an **agent** = a class extending `BaseAgent`; **constructor params + agent type form its identity** (no two `checkout` agents with the same order ID). `Checkout.get(orderId)` returns a **remote handle** (RPC), so agents anywhere in the cluster call each other with typed, async methods.
- Properties: **durable, stateful** (any in-memory state — even an in-memory SQLite — is auto-persisted), **distributed** (the agent is the unit of distribution/sharding, scaled horizontally), **typed invocations**, **exactly-once** agent-to-agent calls, and **scalable** (Wasm low footprint, fast instantiation, **zero-cost idle** instances).

## 5. Why It Fits AI Agents

- AI agents are **long-running, stateful flows with zero trust** (LLMs + tools), plus rate-limits, flakiness, and cost. Golem's primitives map cleanly: **transparent durability** (vs. LangChain needing explicit checkpoints), **automatic statefulness** (vs. CrewAI's manual save/load), agent-as-unit-of-distribution, exactly-once, and Wasm scalability.
- Extra features: **fast Wasm sandboxing** (isolated memory/FS/network via host functions); **suspension** (arbitrary long sleeps / **webhooks** consume no resources while idle); **typed config & rotatable secrets**; **quotas** (concurrency/rate limits with a **throttle → suspend-and-auto-resume** action, splittable across child agents); **observability** (full op-log/audit + OpenTelemetry export).
- Coming (1.6): **native Golem tools** (enforced permissions/middleware, opaque secrets, separate tool authors) and **unforgeable permission cards** (fine-grained, host-held, derivable subsets over RPC). **Integration:** auto-expose agents via HTTP/OpenAPI, MCP, generated TS/Rust bridge libraries, and future A2A.

## 6. Status

- **Golem 1.5** is released and open-source (self-host = production-ready; **Golem Cloud** is developer-preview). Agents can be written in **TypeScript, Rust, Scala, or Moonbit**.

---

*Video: https://www.youtube.com/watch?v=Tje4j3-S6oc — Transcript via yt-transcript.sh; outline generated from the transcript.*
