---
title: "Designing Deploy-Time Flexibility for Modular Systems - Florin Coros | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Florin Coros on monolith vs. microservices as the wrong question — build a modular system with contracts-only dependencies, proxies, and type discovery so you choose in-process vs. REST at deploy time."
type: "reference"
tags: ["softwaredevelopment"]
---

# Designing Deploy-Time Flexibility for Modular Systems - Florin Coros (Talk Outline)

> Florin Coros (founder, CodeDesign) on deciding **at deploy time** whether a modular system runs as a monolith (function calls) or distributed (REST/gRPC/bus) — same binaries, no recompile.

---

## 1. Monolith vs. Microservices Is the Wrong Question

- Monoliths are easy (one repo, F5, debug) but weak on scalability (all-or-nothing), reliability/resilience, maintainability/testability, and modernization. Microservices add **complexity** (communication, transactions, infra cost, hard diagnostics) and integration-testing/maintenance pain — often **unnecessary complexity**. Both suffer from **bad decomposition**, so we swung back to **modular monoliths** ("history repeats"). The real goal is a **modular system** with **maintainability + extensibility + reusability** ("the *ility* — they come together"; Juval Löwy) — and it lets you **separate the communication concern** from decomposition.
- Cautionary story: an investment bank spent **3 years** splitting a Delphi monolith into subsystems (for C# migration + faster releases), only to hit **performance** problems (10–15 network hops per order). How many services? Minimize the sum of **cost-to-build + cost-to-integrate** — in orders of magnitude, ~**10–25**, not 1 and not 1000 (diminishing returns).

## 2. The Three Pillars

- **Contracts-only dependencies:** services depend **only on explicit contracts** (good abstraction + encapsulation) in a **contracts assembly** where *no logic* is allowed (only interfaces/DTOs/exceptions). Enforce via a dependency diagram (ReSharper) in code review or CI (implementations are `internal`).
- **Proxies:** each contract is implemented by a **proxy** that either forwards the call over REST (remote) or to a local class (in-process).
- **Type discovery:** a **generic host** configures the DI container declaratively (not imperatively, which would force the host to reference every implementation) by scanning assemblies for a `[Service]` attribute (his open-source **AppBoot** library — just reflection + DI, "no black magic").

## 3. The Demo

- Three trading services (quotation, orders, portfolio) with contract dependencies. Start fully **distributed** (each in its own process, communicating via REST). To optimize a chatty pair (orders ↔ quotation), **copy the quotation binaries into the sales folder and restart** — no recompile — and they now communicate **in-process** while the REST endpoints for external callers stay unchanged.
- **Key trick:** both the real implementation *and* a proxy are registered for each contract; a **priority-ordered registration** (add proxy behavior first, then the real-service behavior which overrides it) means every deployment always has proxies available (can forward anything over the wire), but uses the real implementation when it's present in the same process.

## 4. Production Notes & Q&A

- In production, always wrap the in-process call in **another proxy** too (for consistent error handling/logging/telemetry — otherwise a null-reference vs. HTTP 500 makes the contract inconsistent across deployment modes). **Timeouts/retries** belong on the client-side proxy. **Deployment:** Docker files / pipelines copy the right DLLs per configuration (separate folders to avoid name conflicts across differing dependency versions), plus a **service discovery** (DNS-like) to resolve addresses by name. DLL loading happens at **startup** (warm-up), so it's negligible server-side (preload for desktop/front-end modular monoliths).

---

*Video: https://www.youtube.com/watch?v=wDfKA8N6NE8 — Transcript via yt-transcript.sh; outline generated from the transcript.*
