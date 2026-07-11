---
title: "Craft Still Matters – Gregor Riegler | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Gregor Riegler shows why software craft beats complexity with coding agents — hypothesis-driven debugging, process files, focused reviews, and keeping work inside the effective context window."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Craft Still Matters – Gregor Riegler (Talk Outline)

> Gregor Riegler (technical coach) argues that **software craft matters more, not less**, with coding agents — because AI shares our cognitive limit, and craft keeps work inside the small, simple, verifiable space where agents produce high-quality output cheaply.

---

## 1. Craft as Managing the Model's Cognitive Limit

- **Context rot:** the more you cram into the model's head, the more quality drops **and** the more you pay. The sweet spot is **far to the left** — little in context. AI has **cognitive capacity limits**, and craft has always been about making things **smaller, simpler, verifiable, easy to consume** so they're worth the space.

## 2. The Complexity Wall (debugging war story)

- A business-critical login deadlock escalated; the agent kept confidently claiming "fixed" (trained to please) while going in circles — the **complexity wall**, where complexity grows exponentially and "any exponential curve is indistinguishable from a wall."
- **Craft fix:** be disciplined — **hypothesis first**. Guided to form a hypothesis, add trace statements, run the repro, disprove/confirm — the agent found and fixed the *real* problem.

## 3. AI's Default Isn't Clean (and clean code matters)

- Early ChatGPT Roman-numeral code worked but violated Kent Beck's four rules of simple design (no tests, poor intent, duplication, too many elements) — because AI returns the **most normal answer** from mediocre public code. "It's an amplifier — I don't want to amplify crap."
- Agents work **better and cheaper on clean code**, so the gap between AI's default and good code is a **recipe for complexity walls.**

## 4. Process Files & Extreme Smallness

- Teach the agent via **process files** (intent + rules + workflow steps; a precursor to today's "skills") — **one process per context**, discarded after.
- Drive relentlessly small (Gall's Law — complex systems evolve from simple working ones): goal → order by simplicity → refine → scenarios → **TDD zombies** → "rename a local variable **with no usages**." Yes it's slower — "but that's good." Emphasize **test-code quality** (skimmable, problem-language) and **mutation testing** to delete unneeded code or add missing tests.
- Anchors that pull output to the "clean side": **software craft as a harness** (code-quality rules), **expert-guided scaffold** (control initial architecture + first test), **expert oversight**.

## 5. Autonomy, Entropy, and Focused Reviews

- Sub-agents let you **plug process files into an autonomous loop** — but letting go of the anchors let it slowly pull back to the **dirty side**: defensive code, redundancy, leaky abstractions, long methods (**software entropy**).
- Obsessing over **more rules** backfires (more rules → more ignored). Better: **let the agent review its own code and act on findings** — **focused reviews** are endlessly powerful. Example: **modularity review** (Vlad Khononov: modularity = strength XOR distance, never both) yields tangible small improvements.

## 6. Brownfield — Characterization Testing at Scale

- Legacy routing algorithm too coupled to extract; no tests, business-critical, deadline pressure. **Characterization testing** with an agent: analyze seams → save analysis to markdown → **clear context** → write **one test at a time** (so each provably adds coverage) → wrapper scripts so the agent sees coverage without exploding context.
- Watched **context-window % used**: over ~40% he'd have the agent update its plan and continue in a fresh session. Reached **100% coverage**, then **killed mutants** (strengthening weak asserts trimmed a 2,800-line test file below 1,000). Then the team did **ensemble programming** to extract a clean 3-argument function.
- Conclusion: craft **beats complexity** and lets us work **beyond a single context window** — keeping agents in the effective zone of high quality at low cost.

## 7. Q&A

- The **40%** figure isn't universal — it varies by model and improves over time; but never keep anything irrelevant in context.
- **Mutation testing** on a 1M-line project: find a **test boundary** covering a few thousand lines with fast tests (see Feathers' *Working Effectively with Legacy Code* for seams).

---

*Video: https://www.youtube.com/watch?v=9TKjyPk9eFA — Transcript via yt-transcript.sh; outline generated from the transcript.*
