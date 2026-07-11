---
title: "Patterns for Coding with AI – Lada Kesseler | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Lada Kesseler's dense pattern catalog for controlling coding agents — context management, reliability under non-determinism, and smarter communication."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Patterns for Coding with AI – Lada Kesseler (Workshop Outline)

> Lada Kesseler (15+ years) shares a dense catalog of ~29 hands-on **patterns** for controlling coding agents, organized in three "trails": **context management**, **reliability/quality**, and **smart communication**. Patterns exist to *communicate, teach, and combine* techniques.

---

## 1. Trail 1 — Context Management

- **LLMs can't learn from you** (fixed weights, stateless). The "memory" is a lie: your prompt is really the **whole concatenated conversation** re-sent each turn — longer conversations cost more and **degrade** ("context rot") long before the window limit.
- **Knowledge Document** — when something valuable (TDD process, project facts) is in context, **save it to a file** so you can reset cleanly and reload it. Most-important bits go in **always-on ground rules** (`AGENTS.md`/`CLAUDE.md`/rules) — keep them minimal.
- **Focused Agent** — attention is a scarce resource; a **specialist** (e.g., a dedicated "committer" agent with your commit rules + ground rules) becomes **proactively helpful** ("you're about to commit `node_modules`") where a generalist never was. **Anything in context that isn't followed is actively harmful.**
- **References** — split knowledge into pulled-in-as-needed files (maps, guides, playbooks, to-dos, scratchpads) by **separating concerns** so you load only front-end *or* back-end.
- **Skills** = ground rules + references + **progressive disclosure** (only the front-matter loads until needed) — cheaper than old MCPs that flood context.
- **Semantic Zoom / Noise Cancellation** — AI is too verbose; force succinctness ("be succinct / TL;DR"), zoom in with questions, delete mercilessly, separate temp vs. permanent files (ASCII diagrams are handy). **External Context** — offload side-quests to another agent/sub-agent to protect space and attention.

## 2. Trail 2 — Reliability Under Non-Determinism

- Non-determinism is a problem *and* a tool (like the 1950s memory-reliability problem — solvable).
- **Knowledge Checkpoint** — before implementing, save the plan to markdown and **commit**, so you can roll back cheaply (and Claude is "super eager" — make it document first).
- **Parallel Implementations** — roll the die several times (worktrees), pick the best or **combine** pieces (great for front-ends).
- **Right Tool for the Job** — don't hammer everything with AI; have it **write a reliable script/tool** (screenshot script, "count the r's in strawberry") instead of doing the task non-deterministically each time.
- **Unvalidated Leaps** → slow down, validate each step; **predictive TDD** (predict pass/fail) keeps the model close to reality and forces small steps.
- **Chain of Small Steps** — "make many more smaller steps" (GeePaw Hill); e.g., hardcode a version number → script to increment → git hook (right tool, focused agent, checkpoints).
- **AI Slop** — don't expect a single pass to be good. **Flip it:** coder + reviewer (two agents, or one context: "now find all the problems") — the model isn't bad at *recognizing* problems, it's an attention/intention issue. **Refinement Loop** — set a goal (simplest refactoring, "get to the gist"), **commit after each step** (forces real iteration), repeat until nothing to improve, *then* review (a "centrifuge" that spins out the slop before human review).
- **Selective Hearing** — some instructions won't stick (training noise: "don't comment my code" is even in Claude's system prompt; Whisper hallucinating "like and subscribe" on silence). Fix by **letting it happen then removing** (iterate), or **refocusing** via recency bias — **hooks** (deterministic life-cycle interception, e.g., a comment-detector that makes the agent behave), **to-dos/lists**, and the **instruction sandwich** (put "run tests" before and after steps).

## 3. Trail 3 — Smarter Communication

- Two compounding problems: **hidden internals** (its "mental model" can silently differ from yours) and **compliance bias** (trained to please). → **Silent Misalignment** (e.g., "make the panels even" failed because the agent saw only `div`s, not your "top/bottom panels"; coloring them revealed the mismatch).
- **Active Partner** — put into ground rules: *tell me what I need to hear even if I don't want to; push back when something's wrong; ask questions when unclear; don't randomly choose* (Elizabeth Hendrickson's rule).

## 4. Practical Q&A Nuggets

- Instructions are interpreted differently per model — introduce **stability** and re-tune; **read the vendor's guidance** for each new model (Opus 4.8 gets "stressed" by shouting).
- Keep to-do/scratch files out of PRs via a **separate "brain" repo** or a git-ignored **playground** folder where the agent can experiment before you extract validated knowledge into skills.
- **Full autonomy** doesn't reliably work yet — build **reliable primitives** (a trustworthy refactoring/TDD skill) first, tested with parallel runs/evals; consider cheaper/local models and an **advisor pattern** (strong main model + sub-agents for discovery to save tokens).

---

*Video: https://www.youtube.com/watch?v=gTgEZsfyzoo — Transcript via yt-transcript.sh; outline generated from the transcript (partial for a long transcript).*
