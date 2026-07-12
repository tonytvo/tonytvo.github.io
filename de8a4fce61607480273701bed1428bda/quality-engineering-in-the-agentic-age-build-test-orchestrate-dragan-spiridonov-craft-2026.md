---
title: "Quality Engineering in the Agentic Age: Build, Test, Orchestrate – Dragan Spiridonov | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Dragan Spiridonov demos his open-source 'Agentic QE Fleet' — 65+ specialized quality agents across 13 domains, orchestrated by a Queen, with hooks, trust tiers, self-learning patterns, dream cycles, a witness chain, and live analysis of audience-chosen open-source projects."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Quality Engineering in the Agentic Age: Build, Test, Orchestrate – Dragan Spiridonov (Workshop Outline)

> Dragan Spiridonov ("Prof," from Novi Sad, Serbia — husband, father of two, owner of five dogs and two cats, home-distiller of rakija/pálinka) brings **33+ years of experience, the last 12 in quality engineering**. Ten months before the talk he open-sourced three testing platforms plus a self-learning agent memory system. This is a hands-on workshop (run in a "silent"/no-audience-audio format) demoing his open-source **Agentic QE Fleet** — a quality-engineering layer of specialized agents that **build, test, and orchestrate** across the whole SDLC — with **live analysis of audience-chosen open-source projects**.

---

## 1. Intro & Setup

### 1.1 Who he is
- "Prof" (short for Professor); 33+ years working experience, last 12 in quality engineering/quality control.
- Recently open-sourced **three testing-related platforms** (~10 months ago) plus a **self-learning memory system for agents** (a couple of months ago).

### 1.2 The intended hands-on setup
- Planned as a laptops-out, follow-along session with **live testing on an open-source project of the audience's choice**.
- Environment: **DevPod + Docker** to spin up a prepared **GitHub Codespace** for the conference, with examples.
- Two shared links: (1) the prepared Codespace config; (2) the **Agentic QE Fleet** open-source project.
- The arc: **fork & customize the fleet → tour it → choose/extend agents → run agents (or a swarm) → test human-written and AI-generated code → integrate into a real workflow.**

### 1.3 Installing the fleet
- It's an **npm package** — install locally or **globally in a Codespace/workspace** so multiple projects can use it. Current version: **3.10.3**.
- Needs **Claude Code** installed. He runs in **"dangerously skip permissions" mode**, aliased **`DSP`** in `.bashrc` (Dangerous Skip Permissions).
- Bootstrap: **`aqe init auto`** (AQE = Agentic QE Fleet) — automatic install of all elements.

### 1.4 What `aqe init auto` does
- **Analyzes the project** and **initializes a persistent database** — because quality agents **save patterns as they work**, learning and improving over time.
- Builds a **code-intelligence knowledge graph** of the codebase so agents understand it before working.
- Configures **Claude hooks**, an **MCP server**, and installs **skills + agents**.
- Auto-installs **Vibium** (used by a UI-testing skill).

### 1.5 Vibium (agent-friendly UI testing)
- Created by **Jason Huggins** (creator of **Selenium**) ~6 months earlier — an **agent-friendly UI-testing framework**.
- **~30 MB install** vs. Playwright's **~200–300 MB** (≈10× smaller footprint).
- **~20–30% lower token consumption** vs. the classic Playwright MCP server.

---

## 2. The Fleet Architecture

### 2.1 Domain-driven quality; inspiration from Reuven
- Uses a **domain-driven approach** to quality engineering; credits **Reuven** (Reuven Cohen) and his **roo-flow / claw-flow** project as the main inspiration and building base.
- **roo-flow** is the **orchestration layer** (research, planning, development, deployment, CI/CD, GitHub Actions); the fleet **adds a quality-engineering layer on top** covering the **whole SDLC** — from validating **requirements** to observing product **behavior in production**.

### 2.2 Keep CLAUDE.md neat
- His **CLAUDE.md is ~163 lines**. Good practice: **< 500 lines**; better: **< 300 lines** — don't add too much noise. Claude Code is his coding-agent harness/orchestrator.
- `aqe` adds the **AQE MCP server** (disableable) and **65 specialized quality-oriented agents**.

### 2.3 13 quality domains
- Quality split into **13 domains** that are "logical to me" — adapt to your context.
- Examples drawn from 30+ years of experience: an **"exoskeleton"** of a seasoned quality person + industry good practices for teams lacking a quality specialist.

### 2.4 Agent definitions — requirements example
- **Smart acceptance-criteria validation** during requirements analysis — Claude suggested using the **INVEST criteria**, which gave good results Spiridonov (a 12-year quality leader) hadn't used before.
- Definitions use **markdown sections** — updated ~3 months earlier per **Anthropic's new agent-definition guidance**; agents adhere better to sectioned markdown than to flat instruction lists.
- Sections cover: default-to-action, parallel execution, capabilities, a **13-step validation pipeline** for requirements.
- **Catching bugs in requirements is the cheapest place to catch them**; bugs that escape into implementation cost far more.

### 2.5 Memory namespaces & the pattern loop
- Every agent **saves data/patterns into memory namespaces** in the database (adopted from roo-flow).
- Before a task, an agent **checks for an existing pattern** from prior runs and retrieves it → fewer LLM reasoning calls over time.
- After finishing, the agent **stores newly learned patterns**.

### 2.6 The Queen orchestrator
- The **Queen orchestrator** runs a **hierarchical mesh**: agents talk to each other via task memory namespaces, but the **Queen does overall orchestration** and receives success/failure feedback so it knows whether to proceed or collect more data.

### 2.7 Output formats
- Configurable **reward criteria / output formats** fit his context: **JSON** for data analysis, **Gherkin** for BDD scenarios, **markdown** for requirements reports.

### 2.8 Skills & trust tiers
- Beyond ~65 agents, agents get **quality-related skills** (e.g., **accessibility testing** invoking visual tester, test generator, quality gates, accessibility auditor at different phases).
- **Trust tiers** — "as a quality person I approach everything from distrust; I assume my agents will lie to me." Tiers: **schema-bot, validator-bot, ai-bot**.
- Model changes can silently change SEAL/skill behavior — run **`aqe skills evaluate`** to check whether behavior drifted with a new model; the evaluation suite runs against different models and itself needs **periodic reconfiguration** as new (better) models ship.

---

## 3. Determinism & Cost Control

### 3.1 Why hooks (the 20–30% problem)
- Agents follow instructions only **70–80%** of the time; **20–30%** get ignored even when marked "important / never do."
- **Hooks infuse determinism** — actions the agent won't skip — triggered on harness events.

### 3.2 pre-tool-use / post-tool-use hooks
- **pre-tool-use**: before reading files/context, evaluate whether it's **safe to pass to the LLM** — the place where **prompt injection / agent poisoning** happens, and where **private data** could leak into vendor LLM context. Instructions alone would be ignored >20% of the time; a hook enforces it every time.

### 3.3 user-prompt-submit + smart router
- A **tiny, dense smart router** (from roo-flow building blocks) allocates tasks by complexity:
  - Simple (e.g., **unit tests**) → **Haiku**.
  - Most tasks → **Sonnet**.
  - High-security / test-architecture → **Opus**.
- Avoids overkill models and keeps **token consumption** under daily/weekly/monthly limits (he runs near the limits of a Claude Max subscription across many projects).

### 3.4 Constitution, invariants, per-domain shards
- Provide agents a **constitution** and **invariants** (what must hold before an agent starts) — borrowed from **Agentic Foundation** contributors — which improved swarm result quality.
- Per-domain **shards** define rules each domain's agents must follow.

### 3.5 Specialized agents are cheaper
- Specialized agents use **2–3× fewer tokens** than a vanilla agent on the same task (e.g., a security analysis: **150–200k** vanilla vs. **80–100k** specialized). Easily observable — try the same prompt both ways.

---

## 4. Self-Learning & Trust

### 4.1 Confidence-scored patterns
- Patterns are saved with an initial **confidence** assessed by the executing agent (not all deserve equal confidence).
- Repeated successful use raises confidence; it **plateaus at 0.95** ("100% belongs in dreaming cycles").

### 4.2 Dream cycles → meta-patterns
- In **idle mode**, the system runs **consolidation ("dream cycles")**: reprocess collected concepts/patterns to find **novel insights** and surface **meta-patterns**.
- A learned **meta-pattern** becomes a **deterministic action** — the agent no longer calls the LLM for that reasoning task → fewer tokens.

### 4.3 GOAP planning
- **GOAP** (Goal-Oriented Action Planning, a "military" planning method): analyze the goal, assess current state, identify desired state, break down and execute steps. E.g., "achieve 80% line coverage" → a specific plan.

### 4.4 Witness chain (explainability/observability)
- **Explainability & observability** matter — you can't be confident in results you can't trace.
- The **witness chain** (idea from Reuven/roo-flow) records every agent action, **cryptographically signed** and **tamper-evident** — you can't change data without breaking the chain, flagging that "somebody tried to mess with my data" (agents will try to misbehave repeatedly).

---

## 5. Live Demo

### 5.1 Picking a target
- Offered a list of "10 open-source projects you'll actually use" (Open-Nathan, Llama, LF/lang-flow, OpenClaw, etc.); audience picked **OpenClaw**.
- Deliberately ran on **an unprepared repo** ("I'm a tester, I like testing things") — a fresh fleet with **no saved memories/patterns**, to contrast with his own months-trained dev environment.

### 5.2 Invoking agents
- Invoke agents directly by name, or via **slash commands**; keyword triggers work too.
- A favorite combo command: **"Linus + Gordon Ramsay standards + James Bond detection"** to check whether a phase is truly done (agents tend to claim "done" when they aren't).
- Specialized adversarial agents: a **devil's-advocate / "met" agent** that challenges other agents' outputs.
- If unsure which agent to use, ask Claude (via CLAUDE.md instructions) to pick.

### 5.3 The demo prompt
- Clone OpenClaw → have the **QE Queen** organize specialized agents/skills to analyze: **code quality, code complexity, code smells, performance, security**, plus **QX/product analysis with the "SVO" framework**.

### 5.4 What the agents did (7 perspectives)
- Multiple specialized agents ran as subtasks (Claude Code generated each agent's prompt from the QE agent/skill definitions + CLAUDE.md).
- **Code quality + code smells** agent: dual-dimension analysis (~17k tokens on a 335-line TypeScript project).
- **Code complexity** agent: worst-5 files, cognitive complexity, deep nesting, mixed abstraction.
- **Security** agent: SAST sweep via grep + targeted reads → security-posture grade + findings table (like Sonar/other white-box tools engineers already use).
- **QX/product** agent: **black-box journey testing** through the app (not just white-box) — journeys specific to the project's context.

### 5.5 Two environments compared
- Fresh vs. trained: same prompt, different behavior. The **trained** environment (6 months of data, dozens of prior projects) produced **richer, pattern-shaped reports** (grades, more journeys) and used **fewer tokens** — **330k** (trained) vs **450k** (fresh) input.
- A **custom status line** (adapted from roo-flow) shows agent count, patterns collected, experiences, and DB size.

### 5.6 Report quality & real impact
- Reports include **strengths and weaknesses** (a "sandwich"), a **scorecard/grade**, and **prioritized actions by criticality**.
- OpenClaw's security had improved (grade ~**88%** now vs ~**40%** five months earlier).
- Example findings: onboarding English-only while UI speaks **19 languages**; operator-grade error messages leaking into end-user chat; non-internationalized user-facing strings; god files; bad error handling.
- Real-world submissions: analyzed **Semaphore** and the new **Super Plane** (agentic pipelines) by his Novi Sad friends (**363 MB, ~5.5k files**, Elixir/Go/Ruby/TypeScript) → found critical issues maintainers "didn't know they had"; also submitted findings for **Nickolas's** project (thanked on LinkedIn) and to **"Craftsman" Rishop** from Agentic Foundation.
- Big-code test: **Apache Spark — ~2M lines Scala across ~3,390 files**, all human-written → immediately flagged complexity hotspots, an **8,000-line god object**, security issues, plus positives.

### 5.7 Cost framing
- Uses **Claude Max ($200)** subscription, so no exact per-run API cost; the plugin's estimate reflects total tokens priced at the most expensive model (not that all tokens went to Opus).
- Today's session: **~330k tokens** for ~7 agents — cheap for a full quality risk report; ~**15-minute** run gives a complete analysis of a codebase. Lots of **cache reads** because the system has learned.

---

## 6. Ecosystem, Frameworks & Readiness

### 6.1 Getting started yourself
- `npm install agentic-qe@latest` → `aqe init auto` → ask it to "select the best QE agents/skills for this analysis" until you learn which to invoke.

### 6.2 Contributed QCSD swarms
- Friend **Lit (Accenture)** implemented his **QCSD** framework as **five swarms** covering **ideation → refinement → development → CI/CD deployment → production monitoring** — previously done manually, then ported onto the fleet. (Lit is presenting it as a tutorial at **Nordic Testing Days**; Spiridonov chose Craft instead.)

### 6.3 PACT → PACTS evaluation framework
- **PACT** (from Agentic Foundation): agents should be **Proactive, Autonomous, Collaborative, Targeted**.
- He's adding an **S** → **PACTS**: **Structured** — governance, observability, explainability of agent behavior (inspired by **DORA metrics**), important for **highly regulated industries**.
- Prefers **"confidence"** (mathematically explainable) over **"trust"** (which carries human feelings).
- There's a **playbook + assessment guide** to check whether your team is ready — if you **lack good QE/CI-CD practices first**, agents will just **surface what's broken and move bottlenecks around teams**. Teams already deploying daily will get a **velocity increase**.

---

## 7. Q&A

- **Exact cost of the live demo?** Unknown — subscription mode, not API. You *can* configure API calls (with better cost-tracking plugins), but subscription is cheaper.
- **Token difference between the two chats?** Fresh **~450k** input vs. learned **~330k** — learned patterns mean fewer LLM reasoning consultations.
- **How does it optimize tokens / prompt caching?** Not directly — the **pre-tool-use hook** makes agents check for an existing pattern before executing, which is what saves tokens.
- **Do you offer paid services?** He's a consultant but now full-time engaged; he **trains others** and can connect people to good quality engineers via LinkedIn.
- **Can it generate UI tests (Playwright/Selenium)?** **Not Selenium** (outdated) — use **Vibium**. Invoke the **QE browser skill / QE visual tester** ("run headless, walk major user journeys, find bugs") driven in a **loop until the goal is done** (loop idea from Reuven).
- **How does self-learning work?** Patterns/experiences saved in the DB; a **knowledge graph** built at init and updated as agents work; **dream cycles** consolidate patterns (promote/demote by success).
- **How do agents trigger at the right time?** **Keyword triggers** — quality-characteristic names (security, performance, QX, product, code smell, complexity) match the **trigger-word lists in agent descriptions**.
- **What is a "pattern"?** **Not** a coding pattern — a **problem → solution → confidence** record of what the agent tried.
- **Doesn't the pattern DB slow down over time / what DB?** **SQLite + roo-vector** locally; roo-vector adds a self-learning layer and **speeds retrieval** (sub-millisecond) as it learns — it gets faster, not slower.

---

## People, Projects & References Cited

- **Dragan Spiridonov ("Prof")** — speaker; Novi Sad, Serbia.
- **Reuven Cohen** — inspiration; **roo-flow / claw-flow** orchestration, roo-vector, witness chain, loop, custom status line.
- **Jason Huggins** — creator of Selenium and **Vibium**.
- **Agentic Foundation** — source of the constitution/invariants, **PACT** framework, "Craftsman Rishop."
- **Lit (Accenture)** — **QCSD** five-swarm framework contributor.
- Projects analyzed: **OpenClaw**, **Semaphore / Super Plane**, **Apache Spark** (2M lines), **Nickolas's** project.
- Tools/concepts: **Claude Code** harness, **Haiku/Sonnet/Opus** routing, **INVEST** criteria, **GOAP** planning, **DORA** metrics, **Vibium/Playwright/Selenium**, **SQLite + roo-vector**.

---

*Video: https://www.youtube.com/watch?v=g20WggTdAYQ — Transcript via yt-transcript.sh; outline generated from the transcript.*
