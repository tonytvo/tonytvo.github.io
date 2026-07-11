---
title: "Working Effectively with AI-Generated Code – Michael Feathers | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Michael Feathers reframes legacy code as code we don't understand, and shares techniques — lensing, projections, ask-for-N, deliberate struggle — for understanding AI-generated systems."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Working Effectively with AI-Generated Code – Michael Feathers (Talk Outline)

> Michael Feathers (*Working Effectively with Legacy Code*) argues the core issue with code — human- or AI-generated — is **understandability**. Bugs come from making changes we didn't fully understand; AI now gives us a new avenue *to* understand, but also generates far more code to understand.

---

## 1. Legacy Code = Code We Don't Understand

- The AI progression: chatbot copy-paste → IDE integration → local environment access (Claude) → autonomous agents → unattended full-lifecycle systems. Risk varies wildly (avionics vs. a buggy game selling like hotcakes). Early caution ("never generate more than you can understand") is being abandoned as we push limits.
- Redefine **legacy code as code/systems we don't understand** — a sliding, slippery thing: even code you understood 3 years ago may have changed or faded from memory.

## 2. Programming as Theory Building (Peter Naur)

- A "theory" = the **model plus its implications** (tacit knowledge). Good systems have **few special cases** (each exception = an `if` branch where bugs hide). Humans, like LLMs, are **pattern matchers** trained on many systems (why a veteran consultant "knows" your system). **Models can be wrong** (fragility from changes since last update; painful to rebuild) and **dissipate** (we forget; people leave and take knowledge). Hold **five or six models lightly** and let them battle it out against experience.
- **Thresholds we've crossed:** teams where no one understands all the code (tests let us change what we don't fully grasp — now *product* people can't keep up); next: **AI generating so much code review is overwhelmed** (and eventually AI "chokes" — can't add the next feature).

## 3. Techniques for Understanding

- **Explain it to me** — ask AI to explain (hallucination risk is shrinking).
- **Lensing** — zoom in/out for simpler/more-complex explanations; ask a *scaled* question ("list the 5, then the 3 most important responsibilities") — it **reconceptualizes** at each scale, revealing alternative designs. Add/remove files to probe alternative modularizations and naming.
- **Projections** — cheap renderings you'd never have asked for before: convert code to **mathematics (LaTeX)**, a **state diagram (PlantUML)**, or another **programming language/paradigm** (Haskell, Clojure ↔ OO). Each viewpoint teaches by comparison. **Go rogue:** ask for silly/out-of-bounds features in a sandbox to probe how the system reacts.
- Think of the artifact you're iterating on as a **"rough out"** (a sculptor's unfinished piece) — a durable *thing* you return to, not just an AI response.

## 4. Testing with AI

- Fun experiment: **delete the source, keep the tests**, have AI regenerate code — a great capability check (early models hacked flag variables to pass; getting much better).
- He now **generates lots of tests** as a **backstop/change-detector** ("bring coverage to 100"), not mainly for understanding — but reviewing generated tests is **review debt**; train AI to match your test style. Consider **two test suites**: human-intended tests and background-generated change detectors.

## 5. Trust, Comparison, and Bias

- **Ask again** in a fresh session (no shared memory) and compare; **ask for two** (direct comparison — even non-technical, e.g., two construction bids across Claude *and* GPT); **ask for N** independent implementations for different viewpoints. Ask **"what in here is unnecessary?"** (fuzzier and bigger than dead-code/duplication detection). Probe stability with **hypothetical features**.
- **Availability bias is the enemy:** "write me Tetris" → the model makes countless decisions for you; you get tired and accept it. Extraneous features make future changes harder — watch for the point where a system becomes **unmodifiable** and you must start over. The more AI anticipates good patterns, the less often that happens.

## 6. Skill & the Irony of Automation

- Fight **de-skilling** deliberately: **try it yourself first**, then ask AI — the prior struggle makes the answer *stick* ("do the homework"). Most important: after getting AI's answer, ask **what were you missing?** (or what was *AI* missing). Put AI in the **driver's seat**: have it **quiz you** on code before you commit it (security, patterns) for directed learning; **build from facts** (generate a tiny system from the behaviors you've learned, then compare to the complex real one to find the simple core).
- Closing (Bainbridge, *Ironies of Automation*): the more you automate, the **more capable** the humans must be — automation handles the routine; humans handle everything it can't. Deep systems knowledge still matters. "AI teaches us to ask better questions if we use it properly."

---

*Video: https://www.youtube.com/watch?v=Mcsb4_7U-LY — Transcript via yt-transcript.sh; outline generated from the transcript.*
