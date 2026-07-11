---
title: "From here to there and back again - Simon Wardley | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Simon Wardley on Wardley mapping — maps vs. graphs, evolution and climatic patterns, why one-size methods fail, and the argument that coding is craft while testing is the real engineering."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# From here to there and back again - Simon Wardley (Keynote Outline)

> Simon Wardley (inventor of Wardley mapping, former CEO) on how he got into mapping and what it reveals about landscape, evolution, AI, and decision-making.

---

## 1. Origin: Strategy → Maps

- As a "clueless" CEO copying others' strategy statements, Sun Tzu's five factors (purpose, landscape, climate, doctrine, leadership) and Boyd's **OODA loop** gave him a frame. Military maps (Thermopylae) let you argue *position and movement* — unlike a **SWOT** "magic framework." His org's "maps" were all really **graphs** (moving a node changes nothing). A real map needs an **anchor** (user need), **position** (a chain of needs / value chain), and **consistency of movement** (**evolution**: genesis → custom-built → product → commodity/utility).

## 2. Patterns from Maps

- **Everything evolves** (an insurance company's "robotics" investment vanished once a map exposed they were using *custom-built racks* — "trapped by past narrative"). **No one-size-fits-all method**: agile/XP on the left (reduce cost of change), lean in the middle, Six Sigma/formal on the right (reduce deviation) — HS2 delivered under budget by applying appropriate methods per map region; **contract structures** that specify the un-specifiable left side guarantee overruns. Learned via **pre-mortem challenge** + post-mortem learning (~30 climatic patterns, ~40 doctrine, ~150 gameplay).

## 3. Change & Anticipation

- **Past success breeds inertia** (Blockbuster *out-innovated* everyone but late-fees/stores created inertia — inertia killed it, not lack of innovation). **Co-evolution of practice** (cloud's low MTTR → DevOps, design-for-failure, chaos engineering), **Jevons paradox** (2,000 servers → 200,000 virtual; sysadmins rehired as pricier DevOps). Cloud/serverless/AI are the same industrialization pattern — "not if, but when." Canonical/Ubuntu went 3% → 70% of cloud with one map, 18 months, £0.5M by targeting where to invest.

## 4. AI & Coding

- **Conversational programming** (2018) → today's copilots/vibe/LLMs; practices still unnamed (like DevOps pre-2018). Expect an explosion of higher-order systems (VP vibe-codes a report and demands prod). **The code is the architecture** — diagrams/ERDs are "statements of belief." The key **architectural decision is where you value human decision-making** (outsource / vibe-code / software-engineering-plus-AI, with shifting boundaries). "AI hallucinates all the time — we just catch some of them."

## 5. Coding is Craft; Testing is Engineering

- Software engineers use **kitchen-blender monolith tools everywhere** instead of contextual tools — *except* tests (small, composable, hypothesis-driven, systematic, generated feedback → the test suite is the real model/spec). Coding, by contrast, is **ad-hoc**: >50% of budget spent *reading code* — "the single most costly thing we do, and we never discuss optimizing it" — ending in gut-feel decisions. Fix: build **thousands of composable micro-tools** for context (Tudor Girba's team solved a 10–20 person-year legacy migration in 4 weeks by first *building the tool*). AI's role: generating hypotheses and building micro-tools.
- **Three takeaways:** observe your landscape; decide where humans matter in decisions; turn coding **from craft into engineering**. Bonus **sovereignty**: whoever controls tools/medium/language (and training data) controls how you reason — AI risks new "theocracies," so openness, diversity of sources, and critical thinking matter; we lack maps for our technological/economic/social/political spaces (China is very good at this).

---

*Video: https://www.youtube.com/watch?v=w6WNitaeOPs — Transcript via yt-transcript.sh; outline generated from the transcript.*
