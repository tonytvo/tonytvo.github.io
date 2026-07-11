---
title: "AI–Friendly Code: Your Code Is an AI Crime Scene – Adam Tornhill | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Adam Tornhill on why code health matters even more for AI agents — break rates vs. code health, safeguarding via a deterministic MCP, hotspots for prioritizing uplift, and the CLEAR design principles."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# AI–Friendly Code: Your Code Is an AI Crime Scene – Adam Tornhill (Talk Outline)

> Adam Tornhill (CodeScene; *Your Code as a Crime Scene*) argues the tooling changes weekly but the **fundamentals** — code health, design, architecture — stay stable, and matter *more* in the agentic era. He's been **100% agentic** since 2025.

---

## 1. Agentic Coding Is Harder, Not Easier

- Going fully agentic gave his team a **2–3x speedup** (not the promised 10x) — but the real value is what speed **enables**: experimentation, rapid iteration, and **fewer coordination needs** (e.g., unblocking himself on GitHub Actions without bothering a colleague).

## 2. The Naive-Adoption Traps (with research)

- ~600 devs getting AI tools: **+41% defects, no throughput gain**.
- 1,000+ OSS projects getting Cursor: velocity **+200%** immediately, then **gone within weeks**, and **slower than pre-AI** after 2 months — due to a massive **AI-induced complexity** increase. AI operates in "**self-harm mode**" — it writes code it can't reliably maintain later.

## 3. Code Health as a Metric

- **Code health** = how easy code is to understand for humans *and* machines (an actual metric, not a vibe). Refactoring makes intent "pop out," giving the agent a clear place to work.
- Correlates with outcomes: green code is up to **10x faster** to change and has up to **15x fewer defects** than red; healthy code also **halves review time**.
- New finding (paper extending "Code Red"): plotting **break rate** vs. code health shows AI is **even pickier than humans** — the human cutoff of ~9 already shows escalating break rates; for AI you must aim for near-**10.0**.

## 4. "Won't AI Just Write Perfect Code?"

- Live example (C++ keypress→Amplitude): AI's working code has **no modularity**, deeply nested conditionals, and **catch-all exception swallowing** that leaks resources — unhealthy, and unsafe to extend.
- The **"illusion of instant software":** the first prototype was never the hard part — **95% of cost comes after**. Alibaba research: agents do one-off fixes well but **break down over months** — "the consequences of past decisions accumulate."

## 5. Safeguarding New Code — a Deterministic Loop

- Build code-health metrics into an **MCP server**: generate code → MCP runs a health review → if it declines, push the agent into a **refactoring loop** → re-check. Demo went from code-health 4.2 to healthy via **self-correction**.
- Key insight: give the stochastic agent a **deterministic metric** to target — agents are excellent at working toward **well-defined goals**. (Don't just put rules in an `.md` file — you want the independent double-check.)

## 6. Uplifting Existing Code — Hotspots

- Average enterprise codebase health is **~5.15**, far below the ~9.5 "AI-friendly" cutoff → **legacy code is the bottleneck** for enterprise agentic adoption.
- **Hotspots** (change frequency × code health): change frequency follows a **power law**, so focus uplift on the **1–2%** of code that's both complex and frequently changed; the long tail can wait.
- Agents alone fix only ~20–55% of health issues; **agent + code-health MCP** climbs toward the 10.0 ceiling (tested on ~25,000 programs).

## 7. Safeguarding Behavior — Coverage

- Tornhill reverses his old anti-KPI stance: now uses **two coverage safeguards** — **100% on new/changed code** (hard PR check) and **100% total coverage** on greenfield products — because **AI "fixes" failing regression tests by deleting them.**
- Mental shift: we can no longer read every line. Focus **manual review on end-to-end tests** (agents are even worse at test quality than code quality); iterate heavily on tests to ensure you're **building the right thing**.

## 8. Design & Architecture — Merge Conflicts & CLEAR

- Recurring **merge conflicts** are a **socio-technical** symptom, not a tooling gap. **Coordination analysis** (author density) reveals congested files (a Meta/folly example: 58 authors on async-socket code).
- Root cause is usually a **god class** (low cohesion + "bumpy road" nested complexity) — the "traffic jam" that pulls every agent into the same file.
- Beyond automatable code-health rules, design/architecture needs **principles, not hard rules** — his **CLEAR** principles, unified by **limiting the blast radius** of change. Code health is the *foundation*; CLEAR is the *direction*.

## 9. Payoff & Closing

- AI-friendly code reduces defects **and** saves tokens — unhealthy code wastes **~45% more tokens** for the same change (a growing budget line).
- The future is **more engineering at a higher level of abstraction**. Two emerging roles: the **builder** (product + architecture + technical project management combined) and the **enabler** (meta-work to make agents effective). "Coding is dead, but it still smells funny."

---

*Video: https://www.youtube.com/watch?v=rT_o59v4m00 — Transcript via yt-transcript.sh; outline generated from the transcript.*
