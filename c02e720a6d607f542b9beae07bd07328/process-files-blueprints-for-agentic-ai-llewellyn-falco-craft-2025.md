---
title: "Process Files: Blueprints for Agentic AI - Llewellyn Falco | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Llewellyn Falco on agentic AI — capturing repeatable workflows in markdown 'process files', the anatomy of a prompt, keeping the effective context clean, separating deterministic scripts from fuzzy AI, and 'automating yourself'."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Process Files: Blueprints for Agentic AI - Llewellyn Falco (Talk Outline)

> Llewellyn Falco (technical coach, author of ApprovalTests) on how agentic AI changed his world — turning repeated AI conversations into reusable markdown **process files**, live-coding a game with volunteers from the audience.

---

## 1. Agentic AI Changed Everything (~2 months ago)

- Agentic AI can **see your whole system** (if it asks — and it knows it can) and **use your tools**. Walking through fixing bug #49 in Windsurf: it used the **GitHub CLI** to fetch the bug payload, wrote a **failing unit test**, ran it, fixed the code, re-ran tests, cleaned up comments/names, and committed using his own **Arlo's Commit Notation**. "For decades programming meant automating *other people's* processes — now I'm **automating me**."

## 2. Process Files

- After a good interaction, ask the AI to "**create a process file based on this conversation**." It's just a **markdown** file listing the steps (ask the bug number, write the failing test, fix, clean up, commit with the right notation, use the GitHub CLI). Next time: "read the process file and follow the instructions" — and all the earlier **course corrections are baked in**. They're a nice byproduct for other engineers, but he'd never hand-write them for humans. Keep them ~**60 lines**; the magic phrase to shrink them is "**reread and improve and simplify**" (not just "improve," which only adds). They typically stabilize after ~4–5 rounds of AI refinement, and they **travel between agents/projects**.

## 3. Anatomy of a Prompt & Building Data-in-Context

- A prompt layers: an **impromptu prompt**, **process files**, **examples**, and **data-in-context**. The data file usually starts empty and is **built up with a human in the loop** (without one, "this tends to not work well at all"). Three ways to build it: **build a doc**, **interview me** (give it so little it asks questions — or consciously ask it to interview you), and **preheating** (let it draft from generally-available knowledge). Live demo: voting on a project (FPS game won), volunteers drove a project spec, then an **architecture diagram** (mermaid vs. ASCII), then a `new-project.process.md`, then a **to-do list** with progress tracking.

## 4. Keeping Context Clean

- He restarts context constantly — enabled by the external files (he can discard context and get it back instantly). Beyond convenience: LLMs have a huge **context window** (millions of tokens) but a much smaller **effective context** (~10–20k tokens) where attention degrades ("remember 7±2 thousand things"). Restart *before* you blow it. The **brown M&Ms trick** (Van Halen): a **starting emoji** (puzzle piece for rules, rocket for the new-project process) at the reply's start proves the AI is still reading your rules — if it vanishes, it's forgotten them.

## 5. Separate Deterministic from Fuzzy; "Is This Programming?"

- Computers are now **two things** — deterministic machines *and* fuzzy AI — and you should **sever** them: never let AI do what a script can. Put "**how to run tests / build**" in a short script the rules point to, so the AI doesn't rediscover Maven flags every time. Crucially, pipe test output through a script that on success emits **almost nothing** (so it doesn't pollute context) but on **failure** dumps everything (so the AI can diagnose) — he wishes tools shipped an `output=AI` flag. Oddly, tool-native "rules/workflows/instructions" work *less* reliably than plain process files he asks it to read (which also port across agents).
- **Model landscape moves fast:** models must be **trained for agentic** tool use — Claude (3.5, oldest via Claude Code), GPT-4.1, Gemini, Windsurf's SWE; DeepSeek/Llama give poor agentic results (for now). He even writes a **daily status file** (with a generated pixel-art image for the email) via a process file — no code, no Java, but a process he does every day that he's now automating. **"Is this programming? Yes. I don't know. Maybe."**

---

*Video: https://www.youtube.com/watch?v=MMqahx1PRQo — Transcript via yt-transcript.sh; outline generated from the transcript.*
