---
title: "Delivering with Supervised and Unsupervised Coding Agents – Wesley Reisz | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Wesley Reisz (ThoughtWorks) on moving from supervised to unsupervised agents by encoding domain knowledge, and managing three control surfaces: context, harness, and sandbox."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Delivering with Supervised and Unsupervised Coding Agents – Wesley Reisz (Talk Outline)

> Wesley Reisz (ThoughtWorks, ~99% agent-delivered code) on **"human steer, agents execute"** — how to draw the line between supervised and unsupervised agents, illustrated with real harnesses, linters, evals, and sandboxes. (Artemis II framing: humans present, observing and adapting in real time.)

---

## 1. Three Key Takeaways

1. **Moving to unsupervised requires encoding domain knowledge** (business + technical — boundaries, coding standards, ADRs) into guardrails first. You can't autonomously build what you don't yet understand.
2. **Build software with three control surfaces: context, harness, sandbox.**
3. **The problem isn't the models — it's trusting the system around them.** (State-of-code survey: 72% who tried AI use it daily, but ~96% don't trust it, and only ~48% always check it. Trust comes from harnesses/evals, not the model — cf. Replit deleting a prod DB, Amazon's AI-caused outage, Meta's Instagram hack.)

## 2. The Fundamental Shift

- Amodei's "AI will write ~all code" landed: Reisz's team writes 99% with agents. **Jevons paradox** — lowering cost/raising productivity means *more* software written, not less.
- **Spec-driven development** (feature-level, not a giant PRD): the spec is an **iterated contract** between developer and LLM; "move only at the speed you can verify." Lineage: TLA+/Z (formal specs), Dijkstra's **invariants**, DDD boundaries, TDD/BDD, OpenAPI, evals → today's spec = **context + harness driven from a spec**.
- A 2×2 (verification × longevity): **vibe coding** (short-lived, human-centric, daily use), **domain-sensing** agents (understand legacy/build ontologies), **supervised** and **unsupervised** — you start supervised and move left/up **only after** encoding rules/skills/commands.

## 3. The Process — RIPER-5

- **R**esearch → **I**nnovate → **P**lan → **E**xecute → **R**eview. Research enriches the Jira ticket ("look at the codebase, ask me questions"), plan **decomposes into ~7–12 tasks**, execute runs through guardrails/tests/evals, review detects **drift**. **Forbidden actions per phase** matter as much as allowed ones (research may not code) — it keeps the human and LLM in sync.

## 4. Context

- Even huge windows shouldn't be filled ("lost in the middle"; every added item must attenuate to every other — combinatorial explosion; **context rot**). Manage **stable** (coding standards, architecture principles, invariants), **session** (current spec/tasks/acceptance criteria), and **retrieved** (just-in-time via MCP) context.
- Share rules/commands/skills across many repos via **git submodules** or the `agent-skills` CLI (progressive disclosure). **Feedback loop:** a colleague trained a small model on his IDE's OpenTelemetry activity and fed it back to steer generation in his patterns.

## 5. Sandbox

- Agents get tricked, cause approval fatigue, and delete things. Without fancy internal platforms, use **dev containers** (isolated env, dependencies, linters, restricted network) — then **capture the setup as a skill** so the agent can spin it up itself. Cursor cloud VMs enable background review agents (Reisz's team runs 1–2 agents, not 5–10).

## 6. Harness & Sensors

- **Harness engineering** (Mitchell Hashimoto): every time the agent makes a mistake, engineer a solution so it can't recur. "You own the code" — read the key parts; beware **verification debt** (Werner Vogels).
- **Non-deterministic** sensors (LLM-as-judge): decompose, review-for-drift, code-review persona, security-audit persona, quality skill.
- **Deterministic** sensors: unit/functional tests, static analysis, linters, contract/schema validation, benchmarks, and **custom linters** (AST-based, git hooks) that encode architecture fitness functions and even emit fix instructions for the LLM (e.g., block TODOs, enforce docstrings/MCP metadata).
- Closing: **how you build matters, not just the output** — encode your domain verification before going unsupervised.

---

*Video: https://www.youtube.com/watch?v=UP7r0rt6R5A — Transcript via yt-transcript.sh; outline generated from the transcript (partial for a long workshop).*
