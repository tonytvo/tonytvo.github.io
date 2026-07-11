---
title: "Framework Agnostic Capacity Planning at Scale - Nick Brown | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Nick Brown (Thrive Partners) on evidence-based capacity planning across ~100 teams without mandating a single framework — right-sizing features, probabilistic forecasting to confidence levels, and continuous reforecasting."
type: "reference"
tags: ["softwaredevelopment"]
---

# Framework Agnostic Capacity Planning at Scale - Nick Brown (Talk Outline)

> Nick Brown (principal flow consultant at Thrive Partners) on making planning easier — data-driven, framework-agnostic capacity planning across ~100 teams, letting each keep its own way of working.

---

## 1. What's Wrong With "Capacity Planning"

- Most industry definitions and templates are weak (Scrum-centric, "project managers" in Scrum, Gantt charts, Excel files with 40-member rows). The good definition: **"capacity planning creates evidence-based expectations of what your team can achieve."** The bad approaches play **Tetris** (cram in as much as possible instead of limiting WIP), trap the **frozen middle manager** (leaders want control, teams want autonomy) into bad techniques, and take **hours/days** when it should take seconds/minutes. Worst of all: **SAFe normalized story points** (mandating one way to estimate, where a "1" never really means the same thing).

## 2. The Real-World Problem

- In a quarterly planning session (stack-ranked, prioritized initiatives) the org had a **misaligned understanding of "capacity"** (some teams read it as "capacity to *start*" — a Jeff Patton alignment gap), teams **guessed** ("finger in the air"), while "data-driven" teams did pseudo-science with velocity plus catch-up buffers. Inspirations for a better path: **Prateek Singh** (probabilistic thinking; "how many bottles of whiskey in four months") and the book **Scaling Simplified** (framework-agnostic scaling of **flow** practices). **Framework-agnostic** = a common capacity approach that still lets teams choose Scrum, Kanban, or a blend.

## 3. Three Practices

- **1. Break features down consistently (right-sizing).** A "feature" is the level above story (epic/initiative — the name doesn't matter). Use slicing (Neil Kick's capability/functional/implementation slicing; Jeff Patton **story mapping**) to make thin vertical slices. **Right-size**: plot completed features (child-item count vs. completion date) with percentile lines — e.g. 85% had ≤7 child items → keep features no bigger than that, then flag open features that are at/over the size. A real team dropped their right-size from 26→10 child items and went from **4 features / 40-day cycle time to 19 features / 23 days** — more, smaller, faster. Watch for gaming (a "backend feature" that isn't a slice of value), but breaking into thin vertical slices is *good* gaming. Prerequisites: actually move features to **done** (use a **work-item-age chart**), monitor size, slice at all levels, and have **one team own a feature** (add an aggregating backlog level above if needed).
- **2. Forecast to confidence levels.** Move from **deterministic** (points ÷ average velocity → one date) to **probabilistic** thinking (a *range* of outcomes with probabilities). Rather than telling stakeholders "12–60 items," run **Monte Carlo simulation** (~4,000 runs sampling historical throughput) to get "95% → ≥70 items, 85% → ≥76, 50% → ≥86." Combine the item forecast with the right-size to get **feature capacity** (e.g. 76 items ÷ 4-item features ≈ 19 features/quarter). Teams control the percentile (85th default; 95th, 70th, etc.). But **data informs, doesn't drive** — beware bad data and the "**computer says no**" (Little Britain) trap.
- **3. Continuously reforecast.** With feature WIP = 1, forecasting is trivial; with WIP = 2+ the completion split is unpredictable, so apply the same probabilistic forecasting **at the feature level** (pick time horizon, confidence, and how many features run in parallel) with color-coding (green = makes the date, orange = misses by ≤1 week, red = >1 week). This makes "**stop starting, start finishing**" concrete: fewer parallel features → more gets done.

## 4. Does It Scale? & Getting Started

- Real Miro-board rollout: each team fills a section before quarterly planning showing **capacity for N features** *minus* what's **carrying over** from the prior quarter (a key thing normal planning misses), with a chosen percentile reflecting their context (new members → 95th). Roll up teams → **platforms** → **domains**, each with a delivery plan (carryover finish dates from Monte Carlo, capacity gaps, cross-team dependency dots) and a **portfolio-alignment** metric tying features to strategic pillars with monetary value — so teams see how their work connects to the top.
- **Advice:** make sure it's a real problem worth solving; be ready to explain it "again and again"; use **fictional data** to learn if real data is missing; sell it via the **benefits to the planning participants** (even adopting personas — "Nichollet Broom"); free GitHub templates exist for the capacity planning and epic/feature flow metrics. Q&A: with a fresh team, ask an experienced member or **guess and quickly reforecast**; "accurate estimation" is an oxymoron — play with percentiles and learn your context; keep forecasts **short-term** when team membership churns; **story mapping** is the most effective way to get teams good at breaking work down.

---

*Video: https://www.youtube.com/watch?v=BQDILfWiRAc — Transcript via yt-transcript.sh; outline generated from the transcript.*
