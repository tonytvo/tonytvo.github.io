---
title: "Careless by Design: AI with Zero Bugs in Ugly Code – Arlo Belshee | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Arlo Belshee on 'vigilance toil' — why AI shifts work toil to worse vigilance toil — and engineering the agent's universe so a careless agent can't create the defects you'd have to watch for."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Careless by Design: AI with Zero Bugs in Ugly Code – Arlo Belshee (Talk Outline)

> Arlo Belshee: **"better brakes let you stop caring about stopping."** AI is the engine; the *universe around the AI* is the brakes. Build systems so a **careless agent succeeds** — reducing vigilance to zero for the risks that matter.

---

## 1. Vigilance Toil

- Cars didn't get faster from better engines but from **better brakes** — curves require vigilance you can't sustain at speed.
- AI eliminated **work toil** (typing, debugging) but traded it for **vigilance toil** (watching agents) — more boring, higher stress, worse.
- **Vigilance toil ∝ throughput × amount-to-protect × cost-to-protect.** Greenfield: amount-to-protect ≈ 0, so vigilance ≈ 0 at any speed. **Brownfield/legacy:** amount-to-protect is enormous (all customers, reputation, every existing feature), so vigilance already dominates — and AI, by cutting work toil ~75%, produces **4× more events → 4× vigilance**, so you actually **slow down**.
- Probabilistic protections (90% reliable) are the **worst** — they fatigue you until you stop looking, then it bites.

## 2. Two Demos

- **Movement-based branching:** agents get **no git access** — only an MCP tool with deterministic `movement start/commit/merge` (auto rebase, clean linear history, **risk-aware commit notation**). Even when told to lie ("doc-only change" that touches product code), the deterministic tool flags it `@?` (highest risk / unknown intent). Treat minions like **creative but drunk 3 a.m. engineers** — engineer them to do the right thing anyway.
- **Status-email workflow:** iteratively drove a 4-hour task down by (1) **standardizing the workflow into a file** ("never tell it what to do — make a file and tell it to follow the file"), (2) **narrowing the goal** (find key moments, not everything), (3) **scripting** invocation/fetch deterministically with Claude as backup, (4) producing **structured JSON** so deterministic checks act as a **real-time domain lint**.

## 3. Free vs. Cheap

- Because amount-to-protect is huge in brownfield, **cost-to-protect must be zero, not just small** (small × huge = still too expensive). You can't zero everything, but you can build systems that zero specific risks.

## 4. Tool-Builder Mindset & Controlling the Agent's Universe

- App/library devs make their *own* code defect-free. **Tool builders** care about the **defect-creation rate of careless users** — "could I code with Haiku?" Assume a **well-intentioned but careless engineer** and change the universe around them, one error-factor at a time.
- Agents live in **whatever constrained fake world your tools expose** — so you control every side: **memory** (edit the session file between turns), **reachable context** (remap what's readable/writable), **state** (intercept a "refactor" and actually do the extract-method yourself), **tools/workflow**, and **feedback** (rewrite what the tool "tells" it happened — easy "man-in-the-middle" via MCP). Don't give it `bash` (union of all possible actions).
- Move from **vigilance → probabilistic (QA/tests) → prevention/carefree/deterministic** (type systems, refactoring tools). **Carefree is what makes careless succeed.**

## 5. The Recipe — Engineering Carelessness

- Loop: apply a **template** of empty guardians → find one thing you're being vigilant about → use a **spot-checker** to find examples → pull a **lever** to make it impossible or auto-checked (create a **guardian**) → adjust what's left to watch → decide "committable?" → commit and repeat.

## 6. Q&A Highlights

- Works on **Sonnet** (medium/low effort); Haiku's reasoning is still insufficient.
- **Plan optionality:** at a design choice, brainstorm options, **branch per option**, wipe the agent's memory of the choice, let each branch's agent make its option *really* work, then pick 20%-of-this/80%-of-that — reachable-context lever makes exploring optionality free.
- **Required demo:** the agent can't mark a task "done" — only provide a structured **demo** (with Playwright driving) that a reviewer minion runs (and de-uglifies) before the human ever looks — "I only look at good code."

---

*Video: https://www.youtube.com/watch?v=t03bQYC7D8E — Transcript via yt-transcript.sh; outline generated from the transcript.*
