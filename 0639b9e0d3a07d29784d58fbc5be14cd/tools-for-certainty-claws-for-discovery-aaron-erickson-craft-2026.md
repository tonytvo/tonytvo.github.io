---
title: "Tools for Certainty, Claws for Discovery – Aaron Erickson | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Aaron Erickson (NVIDIA) traces agent archetypes from 2024 'Lollipop' to shipping NeMo Claw — sandboxed ('jail for agents') agents with tools, guardrails, memory, and human judgment."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Tools for Certainty, Claws for Discovery – Aaron Erickson (Talk Outline)

> Aaron Erickson (NVIDIA) on the journey from early agent demos to shipping **NeMo Claw** — the practical patterns that make agents useful: **tools for certainty, claws for discovery**, wrapped in a sandbox and governed by human taste.

---

## 1. Origin Story & Agent Archetypes

- Started 3 years ago trying to do org-design/reorgs with GPT-4 plugins ("doing the terrible ideas so you don't have to") — realized org charts, positions, and performance management map neatly onto **GPU clusters, idle capacity, and observability**. Built **"Lollipop"** (2024): a hierarchy of agents — **retrieval**, **analyst**, **action**, **task**, and an **orchestrator** running an **OODA loop** (observe-orient-decide-act).
- **Agent patterns** (like design patterns): the **worker** ("look at every one in detail" — *The Big Short*), the **ruminative** (accumulates patterns over long thinking), the **middle-manager** (translates one report into another), the **consultant/observer** (watches inter-agent flow and optimizes). Jensen Huang saw the demo and said **"Go make it work"** — it didn't yet (tool calls/models weren't reliable enough), but it was a great demo.

## 2. What Makes Agents Actually Work

- Don't ask the LLM to count R's in "strawberry" — tell it to **use a calculator / Python** (works since GPT-4). Give customer bots **guardrails** (the airline-upgrade prompt-injection lesson), a **run book** for routine ops (don't reinvent how to fix Kubernetes every incident), and govern with **humans who have judgment**. The most effective agents = **useful tools + effective guardrails + good feedback loops + people with taste**.
- Faith-builder: ride a **Waymo** — with enough training, agents do well. Then **Nov 2025 (Opus 4.5) / Opus 4.6** made code generation "too useful to ignore"; post-training and RL worked.

## 3. The Cambrian Explosion Inside NVIDIA

- Built CLIs (many just wrapping the Microsoft Graph API), plus tools for bugs, Confluence, IT self-service (get a VM/DNS by asking Claude Code), and **Helios** (read the org chart — accidentally rebuilt his old startup). The magic app was **Claude Code against your inbox** — people nearly wept: ignore 90 of 100 emails automatically. Workflows propagated org-wide.

## 4. Shipping NeMo Claw (in a weekend)

- A Saturday call — "let's go make **NeMo Claw**" — 16 hours with ~4 Claude Code terminals (senior engineers on vacation), keynoted Monday. Hacker News assumed it was faked; it wasn't. **Open Claw** made agents popular by combining good-enough models + memory advances + a package you can message from your phone.
- **Safety = "jail for agents."** Open Claw with full access is dangerous ("treat them like eager children — put them in jail first"). **Open Shell / NeMo Claw** sandboxes: **no secrets inside the sandbox** (clever prompting exfiltrates them, especially when exposed via messaging), managed inference gateway (one endpoint / model router / local inference), managed ingress. **Shields up** = immutable sandbox; **shields down** = agent may edit its own tools/config/`soul.md` (a system prompt he's wary of anthropomorphizing).

## 5. Why Agents Are Special: Memory

- YOLO / `--dangerously-skip-permissions` is fine **only in a contained environment** where it can do no damage (then let it run evolutionary experiments — shrink a 10k-line function code-golf-style). You should **message** a persistent agent ("how's it going?") instead of babysitting an open terminal.
- **Agents are stupid without memory** — good harnesses (Claude, Codex) have it. AI is **"the first kind of software that gets better the more you use it"** if designed right: the right *context/facts at the right time*, learning what to remember and forget; new agents inherit prior learnings.

## 6. Engineering Discipline & Close

- AI writes the *average* engineer's code, which is mediocre at **secure coding** — first 3 weeks were hardening ~5–6 bad patterns. Core team of 5 + external contributors; every line AI-generated. **PR pipeline:** signing, dependency hash checks, **Code Rabbit**, NeMo-Claw-on-NeMo-Claw PR advisors (Linus-voice reviews), ~70 end-to-end tests across platforms, and **architectural-coherence** checks (keep `onboard.ts` from becoming 10k lines; he still reads every PR — 30–50/day).
- Announced **Nemotron-3 Ultra** — an open-source (not just open-weights) large model post-trained for **agents/long tool-calling**, for sovereign/cost/capacity cases (save ~30%). Closing: the enduring skill (echoing Kent Beck) is **curiosity** — "the world will belong to those with wild imaginations." Open invitation: contribute to NeMo Claw and @-mention him.

---

*Video: https://www.youtube.com/watch?v=7TD1URiKyMk — Transcript via yt-transcript.sh; outline generated from the transcript.*
