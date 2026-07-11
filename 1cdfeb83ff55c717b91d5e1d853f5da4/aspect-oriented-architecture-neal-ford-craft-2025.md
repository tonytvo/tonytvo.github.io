---
title: "Aspect-oriented Architecture - Neal Ford | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Neal Ford applies the aspect-oriented pattern to architecture — fitness functions, an Architecture Definition Language generated into ArchUnit tests, and a 'nexus/agentic mesh' future."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Aspect-oriented Architecture - Neal Ford (Talk Outline)

> Neal Ford (with Mark Richards; from their upcoming *Architecture as Code*) reclaims **aspect-oriented programming** — not the painful implementation, but the *pattern* — as a lens on the near-future of software architecture.

---

## 1. From AOP to Architecture

- AOP slices **crosscutting concerns** (logging, exception handling) across method/object hierarchies (it's the guts of DI frameworks like Spring; how Netflix logs consistently). Its bad rap comes from being **hidden/opaque** metaprogramming. Ford maps its four ideas — **advice** (what runs), **point cut** (whether it should run), **join point** (when) — onto architecture, leading to **fitness-function-driven architecture**.

## 2. Architectural Fitness Functions (the "advice")

- From *Building Evolutionary Architectures*: any **objective integrity check** on an architecture characteristic. Broader than unit tests — metrics (SonarQube), monitors, chaos engineering. Must be **objective** (decompose composite traits like "maintainability" into measurable deployability/testability/modularity) and can be **combinations** (security vs. performance).
- Example: **cyclic-dependency** check via **ArchUnit** wired into CI stops "bit rot" from trigger-happy auto-imports. But library-based checks (ArchUnit / ArchUnitNET / NetArchTest / PyTestArch / TSArch) only work on a **single compilation target** — they can't govern cross-service rules.

## 3. Where's the Data? (cross-service fitness functions)

- For "domain services must only talk to the orchestrator," no downloadable tool can exist (polyglot microservices). Mantra: **"where is the data, and how do I get to it?"** — every service logs who it calls, so a small **Ruby/Python/shell** script reads 24h of logs and raises on violations (a **reactive** fitness function; security checks are **proactive** monitors).

## 4. Architecture Definition Language (ADL) + GenAI

- Architecture spans many platforms, so they define a **lightweight, declarative ADL** capturing *intent* (not Turing-complete, never a compiler, meant to be modified). Feed the ADL to **generative AI** (leveraging the "L" — language translation) to generate concrete fitness functions (ArchUnit in Java *and* ArchUnitNET in .NET from one source of truth). Whole point: **fast feedback** — a broken fitness function is "a placeholder for a conversation" (a new directory = a new component the architect should know about immediately).
- Demonstrated across: component/domain structure, **open/closed layered** rules, "only the persistence layer touches the database," **data** fitness functions (eventual **data consistency** via hashing D1 = S + D2, eventual **referential integrity**), monorepo dependency-cheating guards, code-cleanliness metrics ("a tidal wave of functioning but terrible machine-generated code" — PRs already ~10% bigger), and GitHub-action guards on long-lived feature branches.

## 5. Nexus / Agentic Mesh (the future)

- Reuse patterns: **hexagonal architecture** was really "separate operational from domain coupling" — now done better with the **sidecar + service mesh**; **data mesh** adds an analytics **data product** alongside each service. Extending this, each operational service will get an **LLM sidecar** (guardrails, eval, RAG, replay state) → an **"agentic mesh."**
- These stacked crosscutting concerns (operational, analytical, domain, agentic) over a distributed architecture *are* **aspect-oriented architecture** — rebranded **"nexus architecture"** (a nexus of nexuses). The governance mesh runs the **advice** (fitness functions) against holistic **point cuts** (observability) → **fitness-function-driven architecture**.

---

*Video: https://www.youtube.com/watch?v=whe-o6WamJk — Transcript via yt-transcript.sh; outline generated from the transcript.*
