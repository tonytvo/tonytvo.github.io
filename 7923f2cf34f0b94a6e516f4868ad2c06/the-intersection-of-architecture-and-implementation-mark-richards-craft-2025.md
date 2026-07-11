---
title: "The Intersection of Architecture and Implementation - Mark Richards | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Mark Richards on seeing architecture in source code — how structure and constraints drift from the intended design, and using an Architecture Definition Language + GenAI to generate fitness functions that keep them aligned."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# The Intersection of Architecture and Implementation - Mark Richards (Talk Outline)

> Mark Richards (Developer to Architect; co-author of *Fundamentals of Software Architecture*, *Software Architecture: The Hard Parts*) on the most critical of nine "architectural nexus" intersections — **architecture and implementation** — an impromptu talk on brand-new material with Neal Ford.

---

## 1. Seeing Architecture in Source Code

- Systems don't live in a silo — architecture intersects with implementation, infra, data/team topologies, engineering practices, the enterprise, and GenAI. **Logical components** (payment processing, ticket assignment) are the *building blocks* — implemented as **leaf nodes** of your directory/namespace structure; higher-level nodes are domains/subdomains. So the **structure of your source code *is* your architecture** — and you can reverse-engineer any system's real architecture from it ("your homework for Monday").

## 2. How It Drifts (structure and constraints)

- **Structural drift:** the intended Sysop Squad architecture (ticketing/customer/survey domains, an assignment subdomain, clear components) vs. what developers actually shipped — a mess where components are missing/misplaced. 85–95% of systems look like this, and the intended (left) architecture beats the drifted (right) one on **agility, reliability, adaptability, evolvability, and migration**.
- **Constraint drift:** a layered architecture chosen for tight budget + frequent data changes needs constraints (no one but persistence touches the DB, respect open/closed layers, all DB logic in persistence). Devs bypass them ("just query the DB from the UI") → the first data change touches *every* layer → dumpster fire.

## 3. Architecture as Code (ADL + GenAI)

- **Architecture Definition Language (ADL):** language-agnostic pseudocode describing metadata, artifacts (system/domains/subdomains/components), and **assertions** (e.g. "classes only reside within these domains"; "presentation has no dependency on services/persistence"; "persistence is the only layer with database logic"). Feed it to **ChatGPT/Gemini/Copilot** to generate **executable structural fitness functions** — ArchUnit (Java, ~95–100% hit rate), ArchUnitNET/NetArchTest (~80%), PyTestArch/TSArch (~70%) — hooked into CI. GenAI even interprets "database logic" into the concrete framework types (JDBC / IDbConnection).
- Resolve the friction ("don't dictate my namespaces!") through **collaboration** ("DDD = *Demonstration Defeats Discussion*"): the architect owns the *structure*, developers name the directories and share the physical locations. Keep **small ADL files** (per domain/subdomain). When a dev adds a component, the test **fails immediately** = fast feedback → update the ADL, regenerate code and diagrams (so **diagrams stay current**); often delegated to a tech lead. This is **test-driven architecture** (write failing ADL tests, refactor to pass).

## 4. Refactoring: The Flattening Pattern

- For existing "hills" (namespace-upon-namespace) with **orphan** classes (code stranded in a **root namespace** — "no code shall exist in a root namespace"), **collapse** or **expand** namespaces (right-click refactor-move, no code changes) to push all code to **leaf-node components**. This is **bottom-up DDD** — discovering domains/subdomains/components. **Implicit coupling** (shared abstract classes/DTOs left in the root) becomes **explicit coupling** by moving them to a `shared` component.
- Close (favorite quote): "Developers should never take components designed by architects as the last word... the initial design is a **first draft** where implementation reveals refinements." Governance tools only *tell* you there's a problem — they force the **collaboration** that makes architecture work. Combine **diagrams (how)** + **ADRs (why)** + **ADL (executable enforcement)** = complete documentation.

---

*Video: https://www.youtube.com/watch?v=f6-mYeMNEyk — Transcript via yt-transcript.sh; outline generated from the transcript.*
