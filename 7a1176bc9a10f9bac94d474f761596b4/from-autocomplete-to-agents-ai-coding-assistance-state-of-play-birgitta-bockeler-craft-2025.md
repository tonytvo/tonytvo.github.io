---
title: "From autocomplete to agents: AI coding assistance state of play - Birgitta Böckeler | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Birgitta Böckeler (Thoughtworks) surveys AI coding assistants from autocomplete to agents — the speed-impact heuristic, MCP/custom rules, emerging workflows, and why our skills still matter (with cautionary data)."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# From autocomplete to agents: AI coding assistance state of play - Birgitta Böckeler (Talk Outline)

> Birgitta Böckeler (Thoughtworks' global lead for AI-assisted software delivery, ~20 years) gives a "public service" summary of where coding assistants are — a journey **from autocomplete to agents** — including her own FOMO despite doing this full-time.

---

## 1. The Feature Evolution

- Autocomplete on steroids → **chat in the IDE** → deeper IDE integration (explain/fix, inline chat) → **chat with the codebase** (natural-language → background search query) → more **context providers** (change sets, web pages, terminal, Jira) → constantly-evolving models (Claude Sonnet series a clear favorite for months). Unit of assistance ≈ a **method**.
- **Speed heuristic:** if a team spends ~40% of cycle time coding, ~60% of that is assistant-supportable, and you're ~55% faster (GitHub's 2023 number) → ~**13% cycle-time impact** (optimistic; one team measured ~8% over 150 tickets — but a coding assistant costs <0.1% of the team, so still worth it).

## 2. Agents

- Two buckets: **supervised IDE agents** (you drive/intervene) and **autonomous background agents** (Codex, Jules — "not ready for prime time"). She focuses on supervised. **How agents work:** the assistant sends the LLM your instructions *plus a list of available tools* (read/change files, run commands); the LLM decides to, e.g., run the tests, see the output, and fix a failure automatically — plus **web research** and picking up IDE **lint/compile "squiggly lines."** Expands the impact radius to the **size of a problem** (but "what's a good size/type of problem?" is the new challenge). She always uses them on *existing* code, not from-scratch.

## 3. Core Features That Matter More With Agents

- **MCP** (Model Context Protocol): run servers (usually on *your machine*) so the agent can search Confluence, comment on Jira, query a test DB, or browse an app — powerful ecosystem, but **wild-west security**: treat MCP servers as **supply-chain dependencies** (your machine has the keys to prod). **Custom rules/instructions**: configure the agent per project (tech stack, recurring pitfalls, pseudo-commands like "wrap up") — no guarantees it follows them, hard to test, and vulnerable (the **"rules file backdoor"** with hidden characters).
- **Emerging workflows:** **plan first** (break into small pieces, often with a reasoning model), **small concrete sessions** (start fresh often — full context windows lose attention on your rules), and **memory** = markdown files (write the plan to a to-do file, hand over to the next session). Concrete instructions raise success probability but reduce serendipitous ideas.

## 4. Vibe Coding & Why Skills Still Matter

- Pulling the "faster" lever to 80% (some teams swear by it for new code); AI works better on **well-factored, modular** codebases (so code quality still matters). **Vibe coding** (Karpathy: "don't look at the code") is one valid mode (good for throwaway projects) — but establish in conversation what someone means by it. The viral "my SaaS built with Cursor is under attack" (unprotected API keys) shows the risk. Anthropomorphize the AI: **eager, well-read, inexperienced, overconfident** (intern/genie) — now with access to prod.
- She **intervenes all the time**: brute-force "increase the memory limit" hiding a bad build (npm install ×3 with dev deps); silent **backwards-compatibility** shims that keep tests green (context/trade-offs matter); test smells (over-assertive/brittle, too much mocking, wrong places, fixing the wrong side of a red test); spaghetti design (a param threaded through the wrong constructor). **Blast-radius** framing: time-to-commit (you notice), team-noticeable within days, or insidious **codebase-lifetime** maintainability harm you don't notice.

## 5. Cautionary Data & Recommendations

- **GetClear** data: more added lines, more **churn** (reverted within 2 weeks), less **moved code** (refactoring) → more duplication, less maintainability. Surveys: 59% hit deployment problems ≥half the time, 67% spend more time debugging AI code. GenAI is here to stay — figure out how to use it **responsibly**.
- **Individuals:** fight complacency/sunk-cost ("it works, ship it") — **review** what matters, mind **feedback loops** (infra changes are slow to verify), know when to **quit/roll back to a checkpoint**. **Teams/orgs:** dust off static-analysis/code-quality tools; don't shift all review "to the right" (do it while developing); avoid **overhyped speed expectations** (they make people cut corners); build a culture that rewards **both experimentation and skepticism**.

---

*Video: https://www.youtube.com/watch?v=rDS9BT1QiGo — Transcript via yt-transcript.sh; outline generated from the transcript.*
