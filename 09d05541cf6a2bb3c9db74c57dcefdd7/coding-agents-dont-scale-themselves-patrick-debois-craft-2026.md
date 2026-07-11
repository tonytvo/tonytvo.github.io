---
title: "Coding Agents Don't Scale Themselves – Patrick Debois | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Patrick Debois (the 'father of DevOps') on treating context like code — a context development life cycle — and enabling agents at the developer, team, platform, and org levels."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Coding Agents Don't Scale Themselves – Patrick Debois (Talk Outline)

> Patrick Debois (coined "DevOps" in 2009) asks the parallel question: **"What if context was more like code?"** — applying engineering discipline to context and harnesses, and enabling agents across four organizational layers.

---

## 1. The Context Development Life Cycle

- Just as DevOps was an infinity loop, context has one: **generate → (skip) test → evaluate → distribute → observe in the wild** (and get Slack complaints).
- **Context = the new code:** human prompts, doc tools (Context7, ref), Slack/Jira/GitHub, `AGENTS.md` (a standard so every tool doesn't reinvent it), spec-driven development/ADRs.
- **Testing context:**
  - **Linting** — a skill's front-matter/description has format/field rules.
  - **Evals / LLM-as-judge → agent-as-judge** — one agent checks another's output; build a **regression suite** so new context doesn't break old cases.
  - **Security scanners** (prompt injection, script execution), **compatibility testing** (does the skill work across Claude/Codex/Gemini?), and **cost/turns** (the "non-functionals").

## 2. Context as Packages

- A **skill** is a package of context; plugins add hooks/scripts/rules → the new coding package. Apply **semantic versioning**, **package managers** (e.g., APM), **registries/marketplaces** (mandatory org packages: latest React, deploy patterns, PII guidelines), and **provenance / bill-of-materials** (who generated this, was it tested/scanned?).

## 3. Observing Context in Production

- Analyze **agent logs** across runs/developers to find where agents say "I don't know" or developers say "do it differently" → missing context. Other feedback signals: PR-review comments on generated code, lint failures, sandbox-escape attempts. Feed signals back → **change the system, not the code.**
- New problems recur in new form: **context dependency**, **context drift** (terminology shifts meaning), **context rot** (a rule the model already knows), and the **unsolved human one — authority/conflict resolution** (who gets the final say on context = politics).

## 4. Enable the Agents (Developer Level)

- **What's good for agents is good for humans, and vice versa.** New roles: **AI product engineer** ("80% of time listening to customers" — build the *right* thing), **forward-deployed engineer**.
- The one mindset shift: **when an agent goes wrong, don't fix the code — change the context/harness** so it produces the right code. Developers now write **tests, plans, and documentation because of the agents** (things they never did for themselves). Make systems **observable** so agents learn; measure how often you must intervene.

## 5. Enable the Team (Team-Lead Level)

- Team leads now enable **both humans and agents** (unblock data/permission access; own **agent performance** as a team metric).
- New habits: **pair context-writing**, a **definition of done for agents**, **retros that include "what worked for the agent,"** and a shared Kanban board where **well-scoped items flow to agents, poorly-scoped ones stay with humans**. Make skeptics write down what's bad and how to improve it. Beware seven home-grown harnesses — tooling hasn't caught up.

## 6. Enable the Platform (Platform-Engineer Level)

- Build "the thing that builds the thing that builds the thing": shared, **agent-usable** components — skills registry, eval platform, gateways, sandboxes, monitoring, guardrails, ownership routing (who fixes recurring auth failures?). Distribute **best practices via the agents** (they get adopted because they're used).
- Gradations of tests (fast checks → deeper priority checks → full pipeline); **nightly tests** to catch rot/vulnerabilities. "You're special, but your pipeline is not" — prediction: **harnesses move into the platform team as reusable, configurable components**, not one per team.

## 7. Enable the Organization (VP Level)

- VPs "gave everyone Copilot" and are lost. Their job: **enabler of a system of systems** — unblock cross-team data access securely, drive **ownership/program/budget for context**, align incentives around **reusability** (not just productivity), and keep the **CFO** convinced (rising token prices shrink the trust window).
- North Star: **continuous learning** — how fast are agents and people learning, and how quickly can you swap things in/out to stay competitive? "Your new job is to build the thing that builds the thing."

---

*Video: https://www.youtube.com/watch?v=6zlkwMzY2UE — Transcript via yt-transcript.sh; outline generated from the transcript.*
