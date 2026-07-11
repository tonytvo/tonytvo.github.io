---
title: "Beyond Vibe Coding: Building the Harness for Production Agents – Banjo Obayomi | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Banjo Obayomi on verification debt, 'agent debt,' and six ways to build a deterministic harness around a probabilistic agent — learned from a fully agent-run newsletter side project."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Beyond Vibe Coding: Building the Harness for Production Agents – Banjo Obayomi (Talk Outline)

> Banjo Obayomi (Generative AI DC) shares harness-building lessons from a **side project run entirely by AI agents** — an automated DC-events newsletter he improves by fixing the *harness*, not the code.

---

## 1. The New Problem: We Don't Read the Code

- Agents write code for hours unattended (MITRE: Opus 4.6 up to 14h; Peter Steinberger "ships code he doesn't read"). The question shifts from *can agents write code?* to *how do we engineer around the fact that they do?*
- **Verification debt:** code ships faster than it's reviewed ("looks good to me" → prod). Need new ways to **verify without reading every line** — TDD, unit/integration tests, staging, real end-to-end user tests; "the basics are more important when you're not coding anymore."
- **Agent debt** (technical debt for the harness): **prompts** are brittle and evolve; **memory** files can feed stale instructions; **tools/MCP/APIs** change; **model behavior** shifts (4.6 → 4.7 → 4.8) breaking your tests. Every success makes the next feel safe — until the "Challenger O-ring" failure (his site crashed on day 14 from a malformed JSON pushed to S3).

## 2. Shared Responsibility & the Harness

- Borrowing AWS's shared-responsibility model: the **agent/provider** owns the model, runtime, tool-calling; **you** own the intent, prompts, what feels safe, consequences — a new kind of **pair programming**.
- **Harness = deterministic scaffolding around a probabilistic agent** — guardrails, conditions, ways to capture failures, test, and recover.

## 3. Six Ways to Build a Harness

1. **Spec-driven development** (waterfall renamed) — decide requirements/design/tasks/verification up front; "think before writing code."
2. **Initialization + daily worker** — plan/POC in one thread, then a scheduled worker (a "stand-up": what did I do, what's next) to manage context.
3. **Tools** — turn repeated actions into deterministic **CLI scripts** (e.g., a fixed "remove background" command; replacing flaky computer-use browsing with an API call).
4. **Skills** — markdown files that codify your work style/approach (the `.md` becomes the program); compose via reference folders per source.
5. **Verification gates** — schema/JSON validation, tests the agent must pass, self-review or a second agent, scoped/role-based access ("don't let it overwrite prod"), and **push-to-prod** safety.
6. **Recovery contexts** — staging, rollback, backups — avoid "Schrödinger's database" (verify a known-good state; test the rollback).

## 4. Demo & Model Shift

- Codex "automations" (renamed cron jobs) run a **beefy, iterated skill** daily: find primary sources → scrape → dedupe/score → schema-validate → push to S3 → update the **memory log** (the stand-up). A new failure (computer-use unavailable in the EU) was **caught and logged without breaking the site** — the harness held.
- Two years ago: lots of code + one LLM API call. Now: the LLM does the work, and **you provide a markdown contract** (intent, recovery, tools). "The markdown is the program" — but it's not fire-and-forget; **the harness is the product**, tested and iterated.

## 5. Q&A Highlights

- Huge skills can be **split into composable references** (per website) so a change updates one reference, not the whole skill.
- The validator practices are just **classic software best practices** — needed again because AI made it easy to skip the craft; "code was always the least important part."
- **Agent debt** is paid down like tech debt: mine the memory logs for failures, add verification, improve the skill/process.
- Best first thing to build: **the skill** (codify your thought process + how to test), then run it via automation and iterate.

---

*Video: https://www.youtube.com/watch?v=UQUrSqEg1ug — Transcript via yt-transcript.sh; outline generated from the transcript.*
