---
title: "Fractal Geometry of Software Design - Vladik Khononov | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Vladik Khononov applies Geoffrey West's energy-supply-network scaling laws to software — knowledge as the energy, four coupling types, sublinear vs. superlinear growth, and fractal modularity (strength ÷ distance)."
type: "reference"
tags: ["softwaredevelopment"]
---

# Fractal Geometry of Software Design - Vladik Khononov (Talk Outline)

> Vladik Khononov (author of *Learning DDD* and *Balancing Coupling*) applies Geoffrey West's *Scale* — the physics of **energy supply networks** — to software design.

---

## 1. Energy Supply Networks & Software

- Complex adaptive systems (animals, cities, companies) scale in **straight lines on log-log plots** against size — governed by the same physical laws. An **energy supply network** transports energy through hierarchical branches (you, a city, a company). **Software design is one too** — the energy is **knowledge** shared across component boundaries. More shared knowledge → more **cascading changes**.
- **Four coupling types** (decreasing shared knowledge): **intrusive** (using what you shouldn't — reaching into a DB or private methods via reflection), **functional** (sharing business requirements — duplicated rules → conflicting decisions), **model** (sharing a domain model — must co-evolve), **contract** (a "model of a model" — a stable integration contract; DDD's published language, facades, DTOs, API gateways).

## 2. Growth Dynamics

- Most attributes grow **sub-** or **super-linearly**, not linearly. **Sublinear** (economies of scale): metabolic rate grows as the ¾ power of mass (a Newfoundland needs ~1,474 cal, not 3,500) — as systems grow they get **more efficient** (a city doubling needs only ~85% more roads). **Superlinear**: patents scale as the 1.15 power of population (more interactions → more creativity). **In software:** as functionality grows linearly, the **knowledge to add grows sublinearly** (build on existing infrastructure/models).
- **Why growth stops (Galileo, 1638):** weight grows in 3 dimensions, resistance in 2 — beyond a size, a body breaks under its own weight. In software, functionality grows linearly, **knowledge sublinearly**, but the **possible interactions between components grow superlinearly** — against a **flat line: our cognitive limit**. When interactions exceed it → **big ball of mud** ("crushed under the weight of its complexity").

## 3. Extending the Limit: Fractal Modularity

- Galileo's fixes: **change the form** or use **stronger material**; sustainable growth requires **innovation** (industrial revolution let cities exceed ~1M). Software's "stronger material" (higher-cognition engineers) isn't here, so we must **evolve the form** — nature uses **fractal-like hierarchical branching networks** (rivers, circulatory systems — self-similar *branching*, not identical shapes) to enable sublinear efficiency.
- **Fractal modularity** = self-similarity at every level of abstraction. Two quantities: **integration strength** (how much knowledge is shared) and **distance** (physical distance between coupled components — farther = costlier to change together). Four quadrants: **high distance + low strength = loose coupling** (good), **low distance + high strength = high cohesion** (good), **low distance + low strength = local complexity** (unrelated stuff shoehorned together — bad), **high distance + high strength = global complexity** ("world of pain," cascading expensive changes — bad; "red squares for job security").
- **Modularity = strength ÷ distance** (S/D): **minimize shared knowledge** first, then **balance distance** (both high → reduce distance; both low → increase it), and **apply at all levels of abstraction** (a contract at one level is model coupling at a higher one — it's all relative). Energy supply networks get more efficient as they grow — that's the self-similarity to enforce.

---

*Video: https://www.youtube.com/watch?v=qwWSNis8rvw — Transcript via yt-transcript.sh; outline generated from the transcript.*
