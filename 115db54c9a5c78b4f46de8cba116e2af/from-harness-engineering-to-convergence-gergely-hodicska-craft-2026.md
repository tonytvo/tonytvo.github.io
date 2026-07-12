---
title: "From Harness Engineering to Convergence – Gergely Hodicska | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Gergely Hodicska on building a harness (PairFlow) around coding agents — bounded work steps, a deterministic orchestrator/gates, 'convergence' and 'gradual consistency' beyond mere control, specification splitting, fitness functions as an architecture linter, and hard-won lessons."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# From Harness Engineering to Convergence – Gergely Hodicska (Talk Outline)

> **Gergely Hodicska** ("Felho"; also runs the Craft Hub, and stepped in for another speaker) — ex-backend engineer, high-availability/scale background, now focused on **agentic engineering** — on the shift from prompting to **building the system that builds your system** (harness engineering), and the next level he calls **convergence**, illustrated with his tool **PairFlow**.

---

## 1. From Prompting to Delegation

- Prepping for Craft (from ~August), amid the vibe-coding hype, he found **legit practitioners** who around September had shifted from **prompt-by-prompt** work to **delegating bigger chunks to reliable workflows** — and for them, **the system they built around their codebase mattered more than the model itself**. They "focus on building the system that builds their own system."
- The **naive 2025 approach** — give the model many MCPs + context + a huge task and let it figure out the rest — is **inherently fragile**: models claim to run tests they didn't, can't pick what's important among too many tools/contexts, don't reliably adhere to instructions, and give you **no evidence** to judge quality.
- **Paradox:** to delegate *more*, you need **more control**.

## 2. Harness Engineering

- (Points to two "brilliant introductions" via links; doesn't re-derive.) The gist: to build a solid system around models you need **good guidance** and **good feedback** so the model can judge its own work → make the agent **steerable, observable, correctable**.
- Break the workflow into **bounded work steps** — each with a **clear role, input, output, and gates** — which makes delegation **safer** and lets you **validate (and recover)** at each step (a guardrail around the agent).
- **PairFlow** roles: **implementer, reviewer, meta-reviewer**, all routed by a **workflow orchestrator**. Example meta-reviewer: input = all reviewer findings + execution context + change set; role = verify findings were actually fixed and the solution fits the system; output = a **structured approve/rework decision**; **gates** live in a **deterministic core** that runs final tests and makes the routing/policy decision — **the agent doesn't decide routing.**
- **"You can't control every token, but you can control your workflow."**

## 3. Convergence & Gradual Consistency

- Control alone isn't enough: LLM output often isn't good enough on the first pass and needs **multiple iterations** — so the harness must make a task **converge** toward a ready state.
- **Gradual consistency:** ask an agent to make a coherent change, then "double-check it," and it keeps finding and fixing more issues — sometimes **10 rounds** before it's good enough. This is inherent to how LLMs work, so **handle it at the harness level**.
- **Evolution:** prompting → agents → harness (**control**) → **convergence** (reliable, or higher-chance-reliable, outcomes).

## 4. How He Works & Builds It

- General workflow: **discuss with the LLM** → create a **task file** → `run this task with PairFlow` → **review** (still reads the code — "I don't fully believe the result"). Uses **Codex** currently, but PairFlow is an **agent-native CLI** usable with any tool; a UI shows the orchestrator kicking off implementer/reviewer steps to the **convergence point** (meta-reviewer). Supports **worktrees**, lets him **attach to the tmux session** (developing intuition à la "Peter Steinberg"), intervene mid-run, and open the worktree in an editor.
- **Method:** whenever a **pain point** arises → do it **manually** → capture as a **skill** → iterate the skill → when it stops adding value, turn it into a **tool** and/or add to the harness. **"If I don't understand how it works, I don't automate it."**
- **Model empathy:** the model is "an alien, different technology" — don't assume it reasons like you. When it goes the wrong way, **ask it why** and use that to write better guidance.
- A refinement CLI: takes a plan → runs a skill that checks plan status, refines/**splits** the next task per the review-spec workflow, triggers the next PairFlow run, waits, and loops — his **longest autonomous run was 12 hours** of meaningful work (he still checks the end result).

## 5. Specifications — the Hardest Part

- Bloated task files **never converge** (the LLM always finds something to improve). Fix: **divide and conquer** —
  - **PRD** level: only **intent** and control model of the feature.
  - **Plan**: mostly a **gap analysis** (current vs. desired capability, sequencing, dependencies).
  - **Per-task files**: only **contract-boundary** info (types, DB schema, API shape) — **not** implementation detail (LLMs handle that well). → tasks converged much faster.
- Remaining implementation-convergence problems and their fixes (all handled by the **review-spec workflow** with **gates**):
  - **Entanglement trap** — too many constraints in one task; even huge context windows can't reliably follow all instructions → fix one part, break another (never-ending). Gate: measure how **ambitious** a task is (e.g., how many data sources/readers change) → **refine or split**.
  - **Poor anchoring** — the reviewer keeps finding edge cases (20–30 rounds) → gate lists the **canonical sources of authority** and **what must not change** so the task is better anchored.
  - **Non-determinism** — one reviewer won't find all issues → run **multiple parallel, focused reviewer agents** (more compute → find issues faster).
- Key harness-design point: deliberately design **what guidance and what feedback** you give agents so they can take corrective action.

## 6. Fitness Functions as an Architecture Linter

- After noticing that a small change touched 25 files (architecture had drifted), he rewrote PairFlow ("we have almost free tokens") — but how to keep it clean two weeks later? **Fitness functions** (Neal Ford / Mark Richards — tests for the architecture) became part of the harness:
  - **Boundary fitness** (core logic can't write DB/files directly), **dependency fitness** (no cyclic dependencies), **layering** enforcement.
- With trust built (moving step-by-step first), he unleashed **many parallel agents** — **~60 commits every ~15 minutes**; after **~800 commits** the system built and ran without issue. "A linter, but for the architecture" (later found the end code wasn't as beautiful as hoped — "I wasn't a good enough engineer before").

## 7. Payoff & Closing Thoughts

- Investing in a harness = **trading tokens** for **managed risk / higher success**, and above all **saved attention** (agents work autonomously; he engages only when they're ready) — plus a lot of learning (theory vs. actually doing it).
- One **peak week: 100+ user stories** delivered (all manually tested) on a real app (Stripe, Edge Functions, DB, React/Next.js) — only possible with the **safety net** (else "you're accelerating chaos and slop").
- **Compounding impact:** solve a class of work once, put it in the harness, and get it **free** on all future work — a "compounding intelligence" beyond normal CI/CD.
- **Build vs. buy:** emerging space (things he built later appear in Claude Code) — still **build your own**, because you must develop the **muscle** to work with LLMs, and part of the harness will always be **team/architecture/codebase-specific** (you'll customize any third-party tool heavily).
- **Hard-won lessons:** transferring **intent** is hard (ask the LLM to **summarize its understanding**; interrogate strange word choices); keep a **good-enough relationship with the codebase** (dig into parts where issues arise, like dropping code when a TDD test won't pass); make **system boundaries type-safe** (most post-implementation bugs are **integration** bugs); and **"frustration is a signal"** — when most frustrated but pushing forward, he found the most interesting solutions (you're near a breakthrough).
- **Key takeaway:** invest in your **harness**, design **guidance + feedback** carefully, and specifically enable **gradual consistency** (inevitable with LLMs).

## 8. Q&A

- **Finding pet projects for PairFlow?** He had a real project; PairFlow itself; plus small ones (investment tracker, RAG search over favorite YouTube channels).
- **PairFlow on GitHub?** Yes — search **`felho/pairflow`** (another project has the same name).
- **The 12-hour run — change-set size / review time?** Can't fully recall; "cheating" a bit because his usual per-task human attention is now missing (a next step: bring that attention earlier into the plan). Testing took ~half an hour depending on bugs found.
- **Fitness functions — how to start?** Read **Neal Ford & Mark Richards, *Building Evolutionary Architectures*** (there's also a Craft talk).
- **Fit into a team on the same system?** A **collaboration** problem more than technical — store skills as **plugins**, pair, keep improving (Intercom/Finn did it at whole-engineering-team level); needs dedication (go slower first to gain speed).
- **Review with the team — code or plan?** Contextual; some weight **plan review over code review** if the harness is trustworthy; many **classify risk** and route to human vs. AI review accordingly. He prefers to **build trust first**.
- **What gates for review steps?** Trial-and-error — e.g., ambition check (how many data sources/readers change → recommend split), anchoring (list canonical sources of authority), and "what cannot be changed" (reviewer verifies it wasn't). The skill ships with PairFlow.

---

## People, Projects & References Cited

- **Gergely Hodicska ("Felho")** — speaker; **PairFlow** (`github.com/felho/pairflow`).
- **Neal Ford & Mark Richards** — *Building Evolutionary Architectures* (fitness functions).
- **Gregor (Riegler)**, **Peter Steinberg**, **Intercom/Finn** — referenced.
- Tools/concepts: Codex, MCP, harness engineering, bounded work steps, deterministic orchestrator/gates, convergence, gradual consistency, model empathy, PRD/plan/task split, review-spec gates, entanglement trap, fitness functions, plugins.

---

*Video: https://www.youtube.com/watch?v=uI93BqycwzY — Transcript via yt-transcript.sh; outline generated from the transcript.*
