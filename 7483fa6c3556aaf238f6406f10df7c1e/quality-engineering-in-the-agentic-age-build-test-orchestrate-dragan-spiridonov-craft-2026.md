---
title: "Quality Engineering in the Agentic Age: Build, Test, Orchestrate – Dragan Spiridonov | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Dragan Spiridonov demos an open-source 'Agentic QE Fleet' — 65+ specialized quality agents orchestrated by a queen, with hooks, trust tiers, self-learning patterns, and live analysis of open-source projects."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Quality Engineering in the Agentic Age: Build, Test, Orchestrate – Dragan Spiridonov (Workshop Outline)

> Dragan Spiridonov (33+ years experience, 12 in quality) demos his open-source **Agentic QE Fleet** — a quality-engineering layer of specialized agents that build, test, and orchestrate across the whole SDLC, with live analysis of audience-chosen open-source projects.

---

## 1. Setup

- Install as an npm package (`agentic-qe`), then `aqe init auto` — analyzes the project, initializes a **persistent database** (learning system), builds a **code-intelligence knowledge graph**, configures hooks/MCP, and installs **skills, agents**, and **Vibium** (an agent-friendly UI-testing framework — ~10× smaller footprint and ~20–30% fewer tokens than Playwright/Selenium).

## 2. The Fleet

- **65+ specialized quality agents** across **13 quality domains**, built on Reuven's roo-flow orchestration (research/planning/dev/CI-CD) with a **quality-engineering layer** on top covering the whole SDLC (from requirements validation to production observability).
- Agents use **markdown-sectioned definitions** (per Anthropic's guidance — better instruction adherence), a **queen orchestrator** (hierarchical mesh; agents talk via memory namespaces), and each agent **retrieves prior patterns** before working and **stores learned patterns** after — reducing LLM reasoning calls over time.
- **Skills** with **trust tiers** ("I assume my agents lie to me") and an evaluation suite (`aqe skills evaluate`) to re-check behavior when models change.

## 3. Determinism & Cost Control

- **Hooks** infuse determinism (agents ignore 20–30% of instructions even when marked "never"): `pre-tool-use` checks content for **prompt injection / private data** before it reaches the LLM; `user-prompt-submit` uses a **smart router** to send simple tasks (unit tests) to Haiku, most to Sonnet, only high-security/architecture to Opus — controlling token spend.
- **Constitution/invariants** and per-domain rule shards guide agents. **Specialized agents use 2–3× fewer tokens** than a vanilla agent for the same task.

## 4. Self-Learning & Trust

- Patterns are saved with a **confidence** score; repeated successful use raises confidence (plateaus at 0.95). **"Dream cycles"** in idle mode consolidate patterns into **meta-patterns** that become deterministic (no LLM call needed). **GOAP planning** (goal → current state → steps) executes goals like "achieve 80% line coverage."
- **Witness chain** — cryptographically signed, tamper-evident log of every agent action for **explainability/observability** (you can't trust results you can't trace).

## 5. Live Demo

- Ran a **swarm** on audience-chosen open-source projects (OpenClaw, etc.): code quality, code smells, complexity, performance, **security**, and **QX/product** persona-journey analysis (black-box journeys, not just white-box). ~7 agents produced a full multi-perspective report in ~15 min for ~330k tokens; a **learned** environment used fewer tokens (330k vs 450k) and produced richer, pattern-shaped reports.
- Reports include **prioritized actions by criticality** and both strengths and weaknesses. He regularly submits findings as issues to OSS projects (Semaphore/Super Plane, Apache Spark — 2M lines, found 8,000-line god objects) — maintainers often "didn't know we had these problems."

## 6. Takeaways & Q&A

- Even without a quality-oriented person, the fleet gives an **"exoskeleton"** of codified quality experience — but it **surfaces what's already broken**, so you need good CI/CD and QE practices first (else it just moves bottlenecks around).
- Ecosystem: colleague Lit's **QCSD** framework as five swarms across ideation→refinement→dev→CI/CD→monitoring; agent behavior evaluated via the **PACT** framework (Proactive, Autonomous, Collaborative, Targeted) — he's adding **S** for **Structured** (governance/observability, inspired by DORA). Confidence (mathematical) over "trust" (human feeling).
- Q&A: self-learning uses **SQLite + roo-vector** (retrieval <1 ms, speeds up over time); patterns = problem→solution→confidence (not coding patterns); UI tests via **Vibium** (not Selenium), driven in a loop until the goal is done.

---

*Video: https://www.youtube.com/watch?v=g20WggTdAYQ — Transcript via yt-transcript.sh; outline generated from the transcript.*
