---
title: "Craft Still Matters – Gregor Riegler | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Gregor Riegler shows why software craft beats complexity with coding agents — the complexity wall, hypothesis-driven debugging, process files and extreme smallness, software entropy, focused reviews (modularity = strength XOR distance), and characterization testing at scale within the effective context window."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Craft Still Matters – Gregor Riegler (Talk Outline)

> **Gregor Riegler** — principal software engineer & technical coach — argues **software craft matters more, not less**, in the age of coding agents: because AI shares our cognitive limit, craft keeps work inside the small, simple, verifiable space where agents produce **high-quality output cheaply**. Told through real war stories.

---

## 1. Framing — Craft as Managing a Cognitive Limit

- Opening story: a colleague (Simon) shows him code with a **smell** (too complicated); Gregor's brain **blocks** — he can't follow it until it's refactored. He has the luxury to say "refactor first, understand later." **The AI does not have that luxury.**
- **Context rot:** the more you put into the model's head, the more it **drops** and quality **declines** — *and* the more you **pay** (more to compute). So the **sweet spot is far to the left** (little in context).
- AI has **cognitive capacity** limits, and **software craft has always been about dealing with this limitation** — putting effort into making things **smaller, simpler, verifiable, easy to consume** so what goes into a head/context is **worth the space** → higher-quality output at lower cost.

---

## 2. The Complexity Wall (debugging war story)

- On a **multi-million-line** product, a complicated **login system froze** in a scenario; customers escalated ("fire on the roof"); the best idea (architectural refactoring) had no time.
- Threw AI at it: the agent confidently said "fixed" repeatedly — **it wasn't** — going in circles, burning tokens. This is the **complexity wall**: the system is so complex there's **no intelligence left in the room** to make progress in reasonable time. Complexity often grows **exponentially**, and "**any exponential curve is indistinguishable from a wall**." The AI **couldn't help but tell him what he wanted to hear — because we trained it to.**
- **Craft fix — hypothesis first:** "we don't change arbitrary files; form a hypothesis, then try to prove it." The agent formed a hypothesis, added **trace statements**, ran the repro; the first hypothesis was **disproved**, the second **confirmed** — and this time the fix **really worked** (customers happy). **Craft beats complexity with agents.**

---

## 3. AI's Default Isn't Clean — and Clean Code Matters

- His journey started in **2023** with ChatGPT + Python. A generated **Roman-numeral converter** ran but was messy — violating **Kent Beck's four rules of simple design**: passes all tests (**no tests**), reveals intention (**didn't**), no duplication (**had it**), fewest elements (**didn't**).
- Why: AI returns **the most normal answer** from its training data — **publicly available code, which isn't very good**. "They say it's an **amplifier** — I don't want to amplify crap."
- But agents work **much better *and* cheaper on clean code**. So the gap between AI's mediocre default and good code is a **recipe for complexity walls** — he set out to **teach it software craft**.

---

## 4. Process Files & Extreme Smallness

- Early on he built a **"Software Craft" GPT** running strict **predictive TDD** in a single context; its system prompt had **high-level intent → rules → workflow steps** — a structure he'd reuse constantly and call a **process file** (today often called a **skill**).
- Building refactoring tools *by* the agent *for* the agent: a `process/` folder, **one process per context, discarded after** each:
  - **Align on goal** (conversation → write to a goal markdown).
  - **Plan small** (Gall's Law: complex working systems evolve from **simple working** ones) → order candidates by **simplicity**, take only the first.
  - **Refine** further (too big) → ask for **scenarios** → order by simplicity → "rename a local variable."
  - Still too big → **TDD zombies** scenarios → "**rename a local variable with no usages**." *"See how much effort I put into smallness?"* Yes it's slower — "**but that's good.**"
  - **Failing test** (emphasize **test-code quality** — the primary place to understand behavior; skimmable, problem-language).
  - **Make it pass** (AI over-produces).
  - **Refactor/simplify** (delete what you don't need) using **mutation testing** — change production code, run tests; passing tests = a **mutant** (delete unimportant code, or add missing tests).
- The real product wasn't the refactoring tools — it was **learning how to teach the agent** (he'd revert features just to refine process files).
- Anchors pulling output to the **clean side**: **software craft as a harness** (code-quality rules), an **expert-guided scaffold** (big say in the **initial testable architecture** and the **first test** to set a pattern), and **expert oversight** (always watching/refining). Still felt like fighting a **strong spring** stuck on the dirty side.

---

## 5. Autonomy, Entropy, and Focused Reviews

- Wanting out of the loop, he discovered **sub-agents** (in Claude Code) — **plug all process files together into an autonomous loop**. It ran so fast he was "paralyzed by the beauty." (His partner **Christina**, doom-scrolling: "isn't it boring to have the agent do all the work?")
- He stepped away (espresso, laundry), then stopped it — **a mess**: overly defensive code, redundancies, **leaky abstractions** (no idea how to abstract), long methods, deep nesting. Letting go of the anchors let it **slowly pull back to the dirty side** — one problem, then another, compounding: **software entropy**.
- He first **obsessed over more rules** — but **more rules → more ignored**. Better insight: he never gets code right on the first try, so **let the agent review its own code and act on the findings**. **Focused reviews** are endlessly powerful.
- **Example — modularity review** (Vlad Khononov's formula): **modularity = strength XOR distance, never both** (both = a problem). **Strength** = how much knowledge two elements share (many arguments passed = high strength); **distance** = e.g., lines between two related lines (reduce by moving them together). Fed as review guidance, it yielded **lots of tangible, small improvements**.

---

## 6. Brownfield — Characterization Testing at Scale

- Colleague **Jake** was extracting a **routing algorithm** for reuse — too **coupled**, **legacy**, no tests, **business-critical**, and the **manager** insisted on the deadline ("2 weeks in!"). Gregor proposed running his own approach in parallel — an opportunity for **characterization testing** (encode current behavior, including bugs, to enable refactoring).
- Workflow, obsessing over **context-window size**:
  - Agent analyzes the code → a **seams/boundaries diagram** → save analysis to **markdown** → **clear context**.
  - Fresh context: write a **first characterization test** (readable, but with a **weak assert** — checks one number when more is available).
  - Can't just run the tests (thousands of console lines would explode context) → hand-write a **wrapper script** for tests+coverage and another so the agent sees **which lines are covered**.
  - Generate a plan to add **one test at a time** — *why not 50?* Because you must **prove each test adds coverage** (avoid redundant tests).
  - Watch **% context used**: over **~40%** → "update your plan with status/learnings" and **continue in a fresh session**. → reached **100% coverage**.
- Not enough for business-critical code → **kill the mutants** (Stryker). Generating too many tests made a **2,800-line** test file (>50% context) — caused by the **weak asserts** (need many tests). **Strengthen asserts** (verify all info, readable/token-efficient) → remove redundant tests → trim below **1,000 lines** → **all mutants killed**.
- Then the whole team did **ensemble programming** to decide the interface and extract a clean **3-argument function returning a data structure**. Proof: **craft beats complexity**, lets us work **beyond a single context window**, and keeps agents in the **effective zone** (high quality, low cost).

---

## 7. Q&A

- **Is 40% the magic number?** No — it varies by model and improves over time (40% suited Sonnet/Opus then); but **never keep anything irrelevant in context**.
- **How did mutant-killing work?** Run **Stryker** on the code, generate tests; too many to read → **strengthen asserts**, let the AI mark redundant tests, remove them, re-check against Stryker.
- **Mutation testing on a 1M-line project?** Each mutant reruns the whole suite, so it's slow — find a **test boundary** covering a few thousand lines with **fast tests** (see **Michael Feathers'** *Working Effectively with Legacy Code* for seams/boundaries).

---

## People & References Cited

- **Gregor Riegler** — speaker; principal software engineer / technical coach. Thanks to talk coaches **Susan, Coley, Jacqueline**; partner **Christina**.
- **Kent Beck** — four rules of simple design. **Vlad Khononov** — modularity = strength XOR distance. **John Gall** — Gall's Law. **Michael Feathers** — *Working Effectively with Legacy Code* (seams/boundaries). **Stryker** — mutation testing.
- Concepts: context rot, complexity wall, hypothesis-first debugging, process files/skills, TDD zombies, mutation testing, software entropy, focused/modularity reviews, characterization testing, effective context window.

---

*Video: https://www.youtube.com/watch?v=9TKjyPk9eFA — Transcript via yt-transcript.sh; outline generated from the transcript.*
