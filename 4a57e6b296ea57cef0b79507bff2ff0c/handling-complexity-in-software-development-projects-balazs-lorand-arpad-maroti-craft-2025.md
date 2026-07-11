---
title: "Handling Complexity in Software Development Projects - Balázs Lóránd, Árpád Maróti | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Balázs Lóránd and Árpád Maróti (Continental) on matching work mode to project phase and complexity — using the Stacey matrix and architecture to organize teams across pre-development, productization, and fine-tuning."
type: "reference"
tags: ["softwaredevelopment"]
---

# Handling Complexity in Software Development Projects - Balázs Lóránd, Árpád Maróti (Talk Outline)

> Balázs Lóránd (heads Continental's largest global AI dev center / AI for autonomous mobility) and Árpád Maróti (architect) share hard-won lessons on handling complexity in automotive software (ADAS/automated parking) — "our sweat and blood."

---

## 1. The Complexity

- Automated parking is *one* software system on the surface, but decomposes into products (computer vision) → components (object detection) → units, plus configuration/variant management, delivered by a large org into vehicles across markets (North America, Asia). Three phases: **pre-development** (build a demo, win projects), **productization** (fulfill automotive standards on target hardware), **fine-tuning** (fix bugs, tune parameters with the customer). Innovation happens in all phases, bottom-up and top-down.

## 2. Match Work Mode to Phase (the Stacey Matrix)

- The **Stacey matrix** plots **requirement uncertainty × technological uncertainty**. **Pre-development** sits in the middle (target hardware unknown, requirements shift on feedback) → **Scrum/agile** fits (be *really* agile: working solutions first, co-locate with the test vehicle, empower/trust teams — a "forest").
- Winning a customer brings hundreds of contracted requirements, deadlines, and revenue — but also **technical debt** (corners cut for the demo), **implementation gaps** (what about snow, a broken camera, leaf-covered markers?), overconfidence/unknown-unknowns, and **strict automotive processes** (documentation, architecture, requirements, traceability) that contradict agile.

## 3. Productization: It's Not Just Waterfall

- On the surface productization looks "simple" (parking hasn't changed in 50 years; C++ for 20 years) → seemingly back to **waterfall**. But **break the problem down with architecture** and sub-problems have their own uncertainty: computer vision = **complex**, path planning = **complicated**, odometry = **simple** (audience-voted live). Map teams onto the matrix and **let different teams use different work modes even in the same phase** — don't apply "the agile hammer" everywhere.
- Align teams via **empowered people at the interfaces** (not standardized standups/tools) — find the right key individuals for synchronization. Keep only the processes/documents that genuinely help; a manager's most important job is to **provide context**; socialize teams to expect constant requirement changes.

## 4. Fine-Tuning & Takeaways

- Reorganize into a **base team** (Europe) + **application team** (near the customer, e.g. Asia) — base provides software, app team adapts UI/parameters and reports bugs, base ships fixes (limits communication efficiency but works). As deadlines loom it becomes **politics**: negotiate schedule/content/priorities (requirements go *up* the matrix, technology can't change late). Advice: triage the *real* burning problem (a car crash beats quality debt), budget for **flights** (bring engineers to the app team), and **communicate constantly** so firefighters know the next step.
- **Key takeaways:** different phases need different work modes (and different teams can differ within a phase); **consciously drive the transitions** so teams know when to start writing requirements; use **architectural design** to identify complex parts and organize teams accordingly; and always check the **value to the customer** — only they pay. Q&A: know-how transfers best by **moving people between co-located teams**; app teams contribute PRs or branch off (especially UI); Continental's 150-year stability allows quarterly reorgs / "quick reaction forces."

---

*Video: https://www.youtube.com/watch?v=vJi8agDfonc — Transcript via yt-transcript.sh; outline generated from the transcript.*
