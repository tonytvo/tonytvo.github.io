---
title: "Lessons learned from introducing Team Topologies - Michael Plöd | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Michael Plöd reflects on 5 years of Team Topologies — what's well understood vs. misunderstood across team types, interaction modes, platforms, fast flow, and the human/organizational side of transformation."
type: "reference"
tags: ["softwaredevelopment"]
---

# Lessons learned from introducing Team Topologies - Michael Plöd (Talk Outline)

> Michael Plöd (INNOQ fellow, DDD/Team Topologies advocate) reflects on 5+ years of applying **Team Topologies** — not a marketing talk; the nuances of what works and what's misunderstood (blue = well understood, orange = difficult/missing).

---

## 1. Team Types & Interaction Modes

- **Misconception:** reducing Team Topologies to "4 team types, 3 interaction modes, colorful icons as templates." It's really about **fast flow**. The four team types are fairly understood, but applied without **preciseness** (like "bounded context" slapped on anything, or a DevOps team simply renamed "platform team" with no product mindset). Team types should act like **magnets** (a team can lean streamlined while having other attributes) — use the **"team type undefined"** label (from the website, not the book) honestly when a team is doing everything (enabling + platform + complicated-subsystem + stream-aligned) and drowning in cognitive load.
- **Team boundaries:** don't collapse into "DDD-only fanciness" ("dogmatism-driven design") — bounded contexts are a great *start*, but use **fracture planes** (regulatory, change cadence, location, change risk, quality attributes, tech, personas) and **Independent Service Heuristics**. **Cognitive load** is well-appreciated but hard to measure (he takes **retrospectives** very seriously; TeamTemp exists). **Interaction modes:** the big misconception is "X-as-a-Service good, collaboration bad" — **wrong**: collaboration means a **clear purpose for a limited time** (the way to establish healthy X-as-a-Service). Use **"interaction mode undefined"** for purposeless, infinite collaboration; the 3 modes are too superficial, so he augments with **DDD context maps** (open-host service, ACL, shared kernel, partnership, separate ways) for nuance.

## 2. Platforms & Fast Flow

- Platform engineering is taken seriously, but **product thinking** less so. Distinguish the **logical platform** (can contain internal stream-aligned teams) from the **platform team**; embrace the **Thinnest Viable Platform (TVP)** — MVP thinking for platforms (too many "Full Viable Platforms"); **self-service capabilities** are key to fast flow (not "file a ticket for an Oracle DB in 3 months").
- **Do Team Topologies for fast flow**, not the icons. Visualizing flow is often unstructured — use **value stream mapping / flow engineering** (Steve Pereira's book/talk) to find blockers, their reasons, and address them *before* reaching for Team Topologies.

## 3. The Human Side of Transformation

- Transformation isn't "colorful icons on your org" or "reorg of the reorg" — it involves **people and culture**. Beware giving teams **full autonomy overnight** (mind the **cognitive-load-o-meter**: split monolith + new tech + DevOps + distributed systems + end-to-end ownership = burnout) — grow autonomy **over time** with a safety net. **Enable the enablers first** (an ivory-tower architecture team must learn to teach, not command — needs coaching, career paths, psychological safety, management backing).
- **Middle management fears** (mortgages, families) are valid — use a **management enabling team**; managers as **gardeners** (fertilize the ground, give boundaries, sometimes cut back). **Salary systems** can be showstoppers (an insurer's architect salary bands rewarded "giving orders," directly opposing enabling — took a year to fix via HR). **Budgeting** is uncovered by the book — match strategy to type (value-stream funding for stream-aligned/complicated-subsystem, team-based for enabling, value-stream/team-based evolving to SaaS-subscription for platforms). Q&A: **visualize flow/blockers** to convince skeptical leadership; measure cognitive load **from within the team** (retrospectives, anonymous polls, sentiment); understand where **resistance** comes from (often personal, not technical); Team Topologies still helps even without full DevOps maturity — find the **best compromise for your constraints**.

---

*Video: https://www.youtube.com/watch?v=Xvi0sNKKfys — Transcript via yt-transcript.sh; outline generated from the transcript.*
