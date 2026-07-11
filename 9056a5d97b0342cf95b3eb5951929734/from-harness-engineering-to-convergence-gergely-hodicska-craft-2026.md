---
title: "From Harness Engineering to Convergence – Gergely Hodicska | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Gergely Hodicska on building a harness (PairFlow) around coding agents — bounded work steps, deterministic gates, and 'convergence' as the next level beyond control."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# From Harness Engineering to Convergence – Gergely Hodicska (Talk Outline)

> Gergely Hodicska (Felho) on the shift from prompting to **building the system that builds your system** — harness engineering — and the next level he calls **convergence**, illustrated with his tool **PairFlow**.

---

## 1. From Prompting to Delegation

- Legit practitioners shifted from prompt-by-prompt work to **delegating bigger chunks to reliable workflows** — the **system around the code matters more than the model**. The naive "many MCPs + huge task, let the model figure it out" is **fragile** (models claim to run tests they didn't; poor tool selection; no evidence).

## 2. Harness Engineering

- To delegate more, you paradoxically need **more control**: make the agent **steerable, observable, correctable** via good **guidance** and **feedback**. Break work into **bounded work steps** (clear role/input/output/**gates**), each independently validatable and recoverable.
- **PairFlow** roles: implementer, reviewer, **meta-reviewer**, all routed by a **deterministic workflow orchestrator**. Gates live in a **deterministic core** — the agent doesn't decide routing; the code runs final tests and makes the approve/rework decision. "You can't control every token, but you can control your workflow."

## 3. Convergence & Gradual Consistency

- Control alone isn't enough: LLM output often needs **many iterations** to reach "good enough" — the harness must make tasks **converge** to a ready state.
- **Gradual consistency:** ask an agent to make a coherent change and it keeps finding more issues over 10+ rounds — this is inherent to LLMs, so handle it at the harness level. Evolution: prompting → agents → harness (control) → **convergence** (reliable outcomes).

## 4. How He Builds It

- General flow: discuss with the LLM → create a **task file** → run it (with `pairflow run`), then review (still reads the code). Agent-native CLI (works with Codex/any tool), supports worktrees, easy to intervene mid-run.
- Method: whenever a **pain point** arises, do it manually → capture as a **skill** → iterate → turn into a **tool** and/or add to the harness. "If I don't understand it, I don't automate it." Practice **model empathy** (it's an alien technology; ask it *why* it went the wrong way to write better guidance).
- **Specifications** took the most work: bloated task files never converge (the LLM always finds something). Split into **PRD (intent) → plan (gap analysis/sequencing) → per-task files** with only **contract-boundary** info (types, schema, API), not implementation detail. Added a **review-spec workflow** with **gates** to detect over-ambitious tasks (split them), poorly-anchored tasks (list canonical sources / what must not change), and use **parallel focused reviewers** (more compute → find issues faster).

## 5. Fitness Functions & Results

- To stop **architectural drift** after a rewrite, he added **fitness functions** (Neal Ford/Mark Richards — tests for the architecture: boundary rules, no cyclic deps, layering) into the harness — "a linter for the architecture." With trust built, he ran many parallel agents (~60 commits/15 min); after **~800 commits** the system built and ran cleanly.
- Payoff: **trading tokens** for reduced risk / higher success / saved **attention** (autonomous work, review when ready). One peak week: **100+ user stories** delivered (manually tested) on a real Stripe/Next.js app — only possible with the safety net (else "you're accelerating chaos and slop"). Harness investment has **compounding impact** (solve a class of work once, get it free thereafter).

## 6. Lessons & Q&A

- Build vs. buy: an emerging space, but **build your own** to develop the muscle (and it'll be team/codebase-specific anyway). Hard parts: **transferring intent** (ask the LLM to summarize its understanding; interrogate strange word choices), keeping a **good-enough relationship with the codebase** (dig in where issues arise), **type-safe system boundaries** (most bugs are integration bugs), and "**frustration is a signal**" — you're often close to a breakthrough.
- Q&A: team adoption is a collaboration problem (share skills as **plugins**, pair, go slow to gain speed); some teams weight **plan review over code review** and route by risk classification.

---

*Video: https://www.youtube.com/watch?v=uI93BqycwzY — Transcript via yt-transcript.sh; outline generated from the transcript.*
