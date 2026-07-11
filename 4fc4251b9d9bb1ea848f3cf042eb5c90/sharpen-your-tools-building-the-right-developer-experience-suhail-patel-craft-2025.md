---
title: "Sharpen Your Tools: Building the right Developer Experience - Suhail Patel | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Suhail Patel (Monzo) on building developer tooling engineers actually want — a paved road of uniform microservices, proto-generated code, static analysis, fast CI, and CLIs that never show YAML."
type: "reference"
tags: ["softwaredevelopment"]
---

# Sharpen Your Tools: Building the right Developer Experience - Suhail Patel (Talk Outline)

> Suhail Patel (principal engineer, Monzo) on building developer tooling engineers **actually want to use** — make the paved road so fast and easy that they prefer it to building their own stack.

---

## 1. The Philosophy

- Stop making engineers care about Kubernetes/AWS/Terraform/bash — end users don't, and neither should non-platform engineers. Spend the energy on **"do the right thing by default."** Build/integrate opinionated tools (don't expose Kafka/Cassandra semantics directly). The ultimate testimonial: engineers only realize what they had when they leave and lose your ecosystem; DX friction is a real (if unmeasured) reason people leave.
- **Monzo:** a fully-regulated UK bank, ~12M customers, no branches, must work 24/7. Many financial firms accept slow, big-bang releases gated by a miserable **change-approval board** — but that's a self-perpetuating cycle caused by an inability to release **small atomic units** (poor DX).

## 2. Uniformity: The Anatomy of a Service

- **3,000+ microservices, a couple hundred engineers**, one platform. The key principle is **uniformity**: every service uses the same template, folder structure, and battle-hardened **library layer** — engineers fill in only the small slice of business logic (HTTP servers, marshaling, metrics are batteries-included). A **code generator** + **monorepo** keep iteration fast and cognitive load low.
- **Proto everywhere:** define RPCs *and* Kafka producers/consumers in protobuf → generated, strongly-typed Go stubs with validation on top of the transport libraries; improvements (compression/encryption) are added transparently at the library layer and regenerated. (Tip: Git can auto-reconcile generated-code merge conflicts by regenerating.)

## 3. Static Analysis, CI & Security

- Use the **AST / Semgrep** to discourage patterns cheaply (ban print statements, forbid importing another service's internals except its `proto` package, catch SQL injection). **Turn incident learnings into CI checks** ("can we add a check for this?"). Manage the **service dependency graph** (ingress/egress firewalls — a branches API that returns an empty list should never call the ledger) via static analysis, flagged as a failing GitHub check.
- **Fast, reliable, high-signal CI** is one of the biggest points of leverage (not buyable off the shelf); make bypassing checks **high-friction** on purpose. Human review checks you built *the right thing*; CI checks you built the thing *right* (LLM reviewers only find typos/logic bugs).

## 4. Deploy, Debug & Measure

- **Shipper** CLI orchestrates GitHub → container build → registry → Kubernetes, **never showing YAML** ("goal: engineers never see YAML"). Shared libraries give thousands of **templated metrics/dashboards/alerts** (Prometheus/Grafana/Jaeger/OTel) out of the box, feeding auto-paging for a new unhealthy service and even capacity decisions (e.g. "Get Paid Early").
- A **Monzo CLI** lets engineers query/create production data in a **sanitized, authenticated, authorized** way (per-RPC "who can RPC" encoded in protobuf) — no random curl/Postman/PII-into-ChatGPT. Tip: **write CLIs in Go/Rust** for a portable binary. **Make profiling easy in production** (Go pprof via web UI, Java Flight Recorder, py-spy, Pyroscope) — "the best software is also fast" (a Llama.cpp PR made inference 10–100× faster).

## 5. Full Circle to AI

- All this tooling/CI/telemetry investment is timely for LLM-generated code (checks enforce best practices on auto-generated code). **MCP servers** should reuse the same backend authorization/sanitization as your CLI/web UI — just a different interface. **Takeaways:** automate your org's painful processes; prize **composability**; don't expect an off-the-shelf product (or a 6–12-month "introduce Kubernetes" project) to magically fix DX; standardize on a small tech subset behind a **well-defined, opinionated interface** and continuously improve it (contributions from everyone) to raise the level of abstraction and organizational leverage.

---

*Video: https://www.youtube.com/watch?v=G4jONbRWpow — Transcript via yt-transcript.sh; outline generated from the transcript.*
