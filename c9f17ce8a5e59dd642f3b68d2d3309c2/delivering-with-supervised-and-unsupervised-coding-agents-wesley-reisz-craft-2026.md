---
title: "Delivering with Supervised and Unsupervised Coding Agents – Wesley Reisz | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Wesley Reisz (ThoughtWorks) on 'human steer, agents execute' — moving from supervised to unsupervised agents by encoding domain knowledge, managing three control surfaces (context, harness, sandbox), the RIPER-5 workflow, real linters/evals/dev-container sandboxes, and an extensive Q&A."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Delivering with Supervised and Unsupervised Coding Agents – Wesley Reisz (Workshop Outline)

> **Wesley Reisz** — technical principal at **ThoughtWorks**, building deep-research agents (corpus → knowledge graph → traditional systems). His team ships **~99% agent-generated code** with a "pure AI-first software delivery" approach plus ThoughtWorks' **sensible defaults** and agile methodology. Thesis: **"human steer, agents execute."** A 90-minute hybrid talk/workshop with live-ish demos (linters, evals, sandboxes, harnesses).

---

## 1. Framing — Artemis II

- On April 1, three Americans + one Canadian rode **~9 million lbf (~40 MN)** of thrust around the Moon (Artemis II) — passing ~**4,000 mi / 6,000 km** from the surface, testing humans in space and their ability to take control. What captured attention was the **12,000 photographs** — because **humans were present, observing, reacting, and adapting in real time**, not just following a script/PRD. (Four lunar orbiters exist — e.g., the LRO ~50 mi up — but the human presence is what mattered.)
- Analogy: like 25 years of agile (delivering **thin slices of value**), we shouldn't just "push things through an agent" — **humans steer, agents execute.**

## 2. Three Key Takeaways

1. **Moving from supervised → unsupervised requires encoding domain knowledge** (business + technical) into guardrails first — DDD **boundaries**, **coding standards**, ADRs, rules/commands/skills. You can't autonomously build what you don't yet understand (ThoughtWorks does **6–18-month** contracts, arriving with **zero domain knowledge**).
2. **Build software with three control surfaces: context, harness, sandbox.** (Simplification of "context engineering + harness engineering.")
3. **The problem isn't the models — it's trusting the system around them.** Trust comes from **harnesses, evals, sandboxes**, not the model.

## 3. The Fundamental Shift

- **Dario Amodei** (~a year ago): AI would write "90% of code in 3–6 months, essentially all in 12." His team **laughed** at QCon London — then on March 14 his team hit **99% agent-written code**. More recent Amodei: automating **90%** of a job → everyone focuses on the **10%** → **~10× productivity** via **Jevons paradox** (lower cost/higher productivity → *more* software written, not less — like electricity; hiring is still up).
- **SonarQube "state of developer" survey:** **72%** who tried AI once use it **daily**, yet **96%** don't fully trust it — and (later stat) only **~48% always check** the code. Distrust is fed by real disasters: **Replit deleting a prod DB in 9 seconds**, a **13-hour Amazon/AWS outage** requiring senior review, **Anthropic model regressions**, and the **Meta/Instagram hack** (Obama's account posting off-message).
- AI systems are **stochastic/probabilistic in complex environments** — the goal isn't perfection but a **delivery system that stays trustworthy** under unpredictable behavior.

## 4. Spec-Driven Development (his definition)

- Rewrites ChatGPT's definition: a spec is a **detailed, *iterated* contract** ("iterated on, not one-shot") between developer and LLM, and between developer and **harness that verifies output** — **"move only at the speed you can verify."** Crucially: **feature-level**, a thin slice pulled from Jira — **not** a giant PRD for a whole app (that's waterfall).
- **Lineage of the spec:** TLA+ / Z / VDM (Lamport, '80s–90s formal specs), **Dijkstra's invariants** ('60s–70s), **DDD boundaries** (Eric Evans, 2004), **TDD/BDD** ('90s–2000s — write the test the LLM must match, not fit tests to output), **OpenAPI/GraphQL** (2010s), **chat-oriented programming** (2022, specs became important & fragile), **evals** (~2023–25) → today's spec = **context + harness driven from a spec**.
- **What goes in a spec** (not one-size-fits-all): deliverable/overview, prerequisites, (careful) architecture context — *"only tell it what you want; more context → more it generates"* — I/O formats, verification steps, **acceptance/success criteria** (none of which were in the original Jira ticket — they came from the research phase). Also objectives, illities/NFRs (e.g., **Neal Ford's architecture description languages**), interfaces, edge cases, observability, **invariants/constraints**, and (per **Matei Zaharia's** paper) **proof-carrying outputs**, pre/postconditions, and **statistical verification** (run N times).

## 5. The 2×2 (verification × longevity)

- **Vibe coding** (short-lived, human-centric) — used **daily** to validate requirements ("is this what you meant?" → `rm -rf`, redo) or run quick experiments over spec options.
- **Domain-sensing agents** (short-lived, automated) — understand legacy code, find **domain boundaries** (à la Michael Feathers), create specs from legacy, build **ontologies** from legal docs.
- **Supervised agents** (long-lived) — where you start on a new project: humans heavily involved because the **rules aren't known yet**; discover them and **step back** by encoding them.
- **Unsupervised agents** (long-lived, automated) — move here **only after** encoding rules, commands, skills, MCPs, ADRs, and harness/automated verification. **Not one-size-fits-all** (nod to Gregor's "every consultant needs a 2×2" and Reuven's "mobs of agents").

## 6. RIPER-5 Workflow

- **R**esearch → **I**nnovate → **P**lan → **E**xecute → **R**eview ("five letters — I didn't name it"). Used in **both** supervised and unsupervised modes (~10 months):
  - **Research** — enrich the Jira ticket: "look at the codebase, samples, ADRs, and **ask me questions**"; iterate into a **shared canvas** = the spec.
  - **Innovate** — explore approaches (often skipped when the answer is known; the real **bottleneck** when not — vibe out 3–4 options).
  - **Plan** — **decompose into ~7–12 tasks** (ordered, some parallel/some sequential), reviewed until domain knowledge is baked in.
  - **Execute** — implement each task through **guardrails**, generate source, run deterministic + non-deterministic tests and **evals**, feed feedback back to the LLM.
  - **Review** — detect **drift** from the contract; alert humans (esp. in unsupervised mode).
- **Forbidden actions per phase matter as much as allowed ones** (research may read/ask/analyze but **not** suggest/plan/code) — keeps human and LLM **in sync** ("time out, don't jump ahead of me"). Many equivalents exist (**Spec Kit, Addy Osmani's workflow, BMAD, Boris/DDD**) — all converge on **think → plan → execute** with **small steps / thin slices of value**.

## 7. Three Control Surfaces

### 7.1 Context (a finite resource to manage)
- Even huge (1M–3M) windows shouldn't be filled ("**lost in the middle**"; every added item must **attenuate** to every other — **combinatorial explosion**: 5 items = 10 pairs, 10 = 45, 1,000 ≈ half a million → **context rot**). A Cursor context bar at **100%** means the LLM will silently **drop** something — maybe what you needed.
- Three kinds: **stable** (coding standards — C#/.NET, Cloud Run, Terraform modules — architecture principles, **invariants**), **session** (current spec, decomposed tasks, acceptance criteria, constraints), **retrieved** (just-in-time via **MCP** / harness feedback).
- **Sharing rules/commands/skills** across many repos: **git submodules** (simple, versioned, PR-able) or the **`agent-skills` CLI** (progressive disclosure — a header loaded first, full skill loaded at runtime). Cursor separates **rules / commands / skills / agents** (an "agent" = a command + persona); skills are increasingly the primary mechanism.
- **Feedback loop:** a ThoughtWorks colleague pushed **OpenTelemetry** from his IDE activity, trained a **small language model** on it, and fed it back so later generation **followed his patterns** (QCon AI NY talk) — impossible without first capturing domain/how-you-build knowledge.

### 7.2 Sandbox (execution boundary)
- Agents get **tricked**, cause **approval fatigue** (clicking "yes, yes, yes"), access things you forgot, and **delete** things; in-sandbox mistakes are cheap, out-of-sandbox aren't.
- Without fancy internal platforms (Firecracker/Kubernetes VMs), use **dev containers**: `cursor` detects it → "reopen in dev container" → isolated env with all **dependencies, harnesses, linters (ruff), pre-commit hooks, restricted network, and IAM/agent identity** — reproducible for the whole team. Then **capture the setup as a *skill*** so the agent can spin the container up/tear it down itself (a step toward unsupervised). **Cursor cloud VMs** enable **background review agents**; his team runs **1–2 agents**, not 5–10.

### 7.3 Harness & Sensors (code that checks the generated code)
- **Harness engineering** (Mitchell Hashimoto, term coined ~Feb this year): every time the agent makes a mistake, **engineer a solution so it can't recur**. "**You own the code**" — read the key parts (not every Terraform line); beware **verification debt** (Werner Vogels — producing faster than you verify) → **only move at the speed you can verify**.
- **Non-deterministic sensors (LLM-as-judge):** `decompose` (break spec into ordered tasks), `review` (**drift-only**, may not write code), a **code-reviewer persona** (staff-engineer reviewing correctness/readability/architecture with skills), a **security-audit persona** (input handling, authz/authn, data protection, hardening skills), a **quality skill** (owned by QAs). (Reference: **Addy Osmani's agent-skills** repo, installable via the CLI.)
- **Deterministic sensors:** unit/functional tests, **static analysis, linters, security scanning, contract/schema validation, benchmarks**, and **custom linters** — AST-based checks wired to **git pre-commit hooks** that encode **architecture fitness functions** and even **emit fix instructions to the LLM** (e.g., **block TODOs/unimplemented commits**, enforce **docstrings ≥ N chars** and correct **MCP metadata**). (Reference: the **pre-commit** ecosystem — 30–50 ready hooks.)
- **"How you build matters, not just the output"** — encode domain verification **before** going unsupervised, or you build something that works but isn't scalable/secure/maintainable.

## 8. Closing

- AI coding workflows are **converging** on systems where **context + automated verification (deterministic & non-deterministic) + human insight** let you **steer as agents execute**. The **missing piece is the person** (like the Artemis II astronauts). The much-maligned **spec is the heart** — at the **task level**, a **shared canvas/contract**. Restate the three takeaways: encode domain knowledge; manage context/harness/sandbox; **trust comes from the system, not the model** → *human steer, agents execute.*

## 9. Q&A (highlights)

- **How to start without reinventing everything?** Pick one tool and focus — he chose **Cursor** ~9 months ago; today he'd suggest **Claude Code** (open-source ones leave too much open / few guardrails). When overnight Claude Code "goes wrong," **each failure → build a check** (grab pre-commit hooks; write an AST-based hook so a PR can't repeat it). "I wish something built it for me" — "it's still software," but a pre-commit hook is literally "give the repo a command to create this hook."
- **MCP vs. plain API?** Both work; **MCP** is more native (multi-turn lifecycle) and **model-agnostic** (not tied to one vendor's custom tool call).
- **DORA / measurable improvements?** Doesn't track DORA well; knows lead time; project was **AI-first from the start**, still moving toward unsupervised.
- **SOC 2 / four-eyes?** Build a workflow that runs parallel/sequential tasks and produces a **PR** you review — review the PR for compliance.
- **DDD/TDD in Execute?** Uses **BDD** vocabulary for acceptance criteria; not pure TDD (writing tests → generating code from them is "compelling" but he hasn't used it).
- **Agent identity (IAM)?** Give the agent its **own, lesser permissions** than the developer via the sandbox's IAM config — actively work to restrict destructive actions.
- **AI for monitoring/incidents?** Yes — "agents are glorified workflows" — but test them and set clear boundaries so they don't cause new incidents.
- **Token budgets for unsupervised runs?** Yes, set a **token budget** (his team currently runs "unlimited").
- **Deterministic structured output?** Use each model's JSON-format feature + **Pydantic** pre/post validation; then **other agents in the LangGraph cycle** verify/populate ("it's a good start; then it's complete crap when you run it, so you add more checks").
- **Will sandboxes/harnesses converge to a standard?** Probably — "early stages" now.
- **Clean-room AI agents killing open source?** Hopes not; Mitchell Hashimoto has anti-slop / human-in-the-loop strategies.
- **Risk of spending more customizing the workflow than the work is worth?** Agreed — don't jump straight to autonomous; if the encoding isn't worth it, don't do it.
- **Multiple work streams on one component?** "Carefully" — parallel/sequential tasking at story level, **git worktrees**, then handle merges.
- **Deploying skill updates to many repos?** **Submodule** approach (team of 16); or the `agent-skills` install + a managed repo — unproven at 160.
- **Iterating between spec and implementation?** Yes, **every loop is iterative** — change in code between tasks; if it materially differs, go **back to the spec**.
- **Supervised → unsupervised timeline?** No estimate (depends on domain); ~9–10 months in, they run **hours-long semi-unsupervised** workflows (RIPER-5 parallel+sequential) but not full feature-to-done — **skeptical they ever fully will** because of the human-expertise iteration at the start (also a context-window limit).
- **Harness rot from model updates?** You **maintain the harness code** (not the generated code) — remove harnesses that don't pull their weight; "**it's gardening.**"
- **Unit/E2E vs. manual testing effort?** Every feature is still **manually tested** by a testing team; E2E isn't well built into the harness yet.

---

## People, Companies, Tools & References Cited

- **Wesley Reisz** — ThoughtWorks (technical principal).
- **Dario Amodei / Anthropic**, **Werner Vogels (AWS)**, **Mitchell Hashimoto** (harness engineering), **Michael Feathers** (domain boundaries), **Neal Ford** (architecture description languages), **Matei Zaharia** (proof-carrying outputs), **Addy Osmani** (agent-skills), **Leslie Lamport** (TLA+), **Dijkstra** (invariants), **Eric Evans** (DDD), **Gregor** (2×2), **Reuven** (agent mobs), **Michelle Brush** (Jevons paradox).
- Tools: **Cursor, Claude Code, Goose, dev containers, ruff, pre-commit, git submodules, `agent-skills` CLI, MCP, Pydantic, LangGraph, Vertex, OpenTelemetry, SonarQube**.
- Concepts: human-steer/agents-execute, Jevons paradox, spec-driven development, RIPER-5, context/harness/sandbox, context rot / lost-in-the-middle, LLM-as-judge, custom AST linters, verification debt.

---

*Video: https://www.youtube.com/watch?v=UP7r0rt6R5A — Transcript via yt-transcript.sh; outline generated from the full ~90-minute workshop transcript.*
