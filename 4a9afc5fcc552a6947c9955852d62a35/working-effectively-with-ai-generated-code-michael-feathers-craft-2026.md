---
title: "Working Effectively with AI-Generated Code – Michael Feathers | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Michael Feathers reframes legacy code as code we don't understand, invokes Naur's 'programming as theory building,' and shares techniques — lensing, projections, ask-for-N, rough-outs, deliberate struggle, and AI quizzing you — for understanding AI-generated systems, closing with Bainbridge's ironies of automation."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Working Effectively with AI-Generated Code – Michael Feathers (Talk Outline)

> **Michael Feathers** (author of *Working Effectively with Legacy Code* — "I always hoped that problem was solved... I guess not") argues the core issue with code, **human- or AI-generated, is understandability**. Bugs come from making changes we didn't fully understand; AI is a new **avenue to understand**, but it also generates far more code we have to understand. He tabled a book on AI-assisted programming ~a year ago because things kept changing.

---

## 1. Where We Are & the Risk Spectrum

- The AI progression: **chatbot copy-paste → IDE integration → local environment access** (Claude runs tools/files) → **autonomous agents** (reduce tech debt, etc.) → **unattended full-lifecycle systems** ("go build this").
- **Risk varies wildly:** avionics (high risk) vs. a game company with **tens of thousands of open bugs** that "sold like hotcakes" (low risk, tolerant clients). Much software affects **human life, finances, environment** — awareness matters.
- Early caution ("don't generate anything bigger than you can understand"; refactor across a couple of functions, not the whole repo) is being **pushed aside** as technologists probe the edges. A speculative future: AI **generates feature ideas and AB-tests them** — do we even need product managers? (He loves PMs; unsure we'll get that autonomous.)

---

## 2. Legacy Code = Code We Don't Understand

- His current lens on legacy code: the distinction between **systems we understand and systems we don't**. Do you fully understand your current system? Probably not — and even if you did **3 years ago**, has it changed / have you forgotten? Understanding is **slippery**; as we dig, we understand more and must **reconcile** new knowledge with old.
- We've always been at the mercy of **co-workers' changes** (trust, then verify). Now **AI generates code itself** → a flood → review overload → "let AI review the PRs" → a **runaway train** (fitting, in a train museum).

---

## 3. Programming as Theory Building (Peter Naur)

- **Naur:** programming is **theory building**; a "theory" is not just the model of the system but **the model plus its implications** (tacit "if this happens, then that"). Good systems' theories are **general — few special cases**.
- **Special cases as a goodness measure:** "everything reconciles on Wednesday" vs. "one client needs Thursday" = an extra `if` branch → richer behavior *and* a place bugs hide.
- **Humans are like LLMs — pattern matchers.** A veteran consultant who's seen thousands of systems "knows" your system by matching patterns (like an LLM matching against a prompt).
- **Models can be wrong** (fragility — changes since your last update leave you on a faulty model; rebuilding is painful) and **dissipate** (memory fades; people leave and take knowledge — it must be reconstructed from source/stories). **Updating your model is productive work, as valuable as the feature itself.**
- **Hold models lightly:** gather info, build **five or six models** in the background, and let them **battle it out** against experience to see which is most accurate.
- **Limited attention** = the human version of the **context-window problem** (no surprise — we built LLMs to mimic human pattern-matching/reasoning).

### 3.1 Thresholds we've crossed
- **Solo project** (you understand all the code) → **teams** (no one understands it all, but **tests** let you change what you don't fully grasp) — a flip where **developers** can now work with the system while **product people** can't keep up (developers add features faster than the product model updates).
- **Next threshold:** **AI generating so much code** that review is overwhelmed — and eventually AI **"chokes"** (can't fit the next feature; the system is too big/complex). Hope: bigger/more effective models get a **holistic view** — but it's a real **scaling issue** teams already hit. "Feels like danger."

---

## 4. Techniques for Understanding

### 4.1 Explain it to me
- Ask AI to explain the system (you don't have to figure it all out yourself). Early **hallucination** burned people; it's improving, with mitigations.

### 4.2 Lensing
- Like a **telescoping telescope** — zoom close and pan back. Imagine an iPad where pinch-zoom yields **simpler/more-complex explanations** ("explain like I'm 5" ↔ deep analysis).
- **Ask a *scaled* question:** "list the **5** most important responsibilities of this function," then "list the **3**." It doesn't drop two — it **reconceptualizes** at that scale, merging responsibilities under a new general name → reveals **alternative designs**.
- **Vary the scope:** "what do these 5 files do together — is there a common name?" then add/remove files → probe **alternative modularizations** and **more resonant naming**.

### 4.3 Projections
- Cheap **renderings you'd never have asked for** (working with AI is unlearning old "too expensive" habits):
  - **Code → mathematics** (output as **LaTeX**, render it).
  - **Code → state diagram** (**PlantUML**) to see what's really stateful.
  - **Code → another language/paradigm** (Haskell, Clojure ↔ OO) — go back and forth to learn.
- Each **viewpoint** teaches by **comparison** (Alan Kay: more perspectives → smarter responses). Tools increasingly render these **inline / create tools on demand** without calling out.
- **Go rogue:** ask for **silly/out-of-bounds** features in a **sandbox** to see how the system reacts (like wondering what happens if you feed the puppy marshmallows — without hurting the puppy).

### 4.4 The "rough out"
- Think of the artifact you iterate on as a sculptor's **"rough out"** — an unfinished piece you return to, run experiments on, sometimes discard and restart. It's **a thing you're working on**, not just an AI response.

---

## 5. Testing with AI

- **Fun experiment:** in a project (under version control), **delete the source, keep the tests**, and have AI regenerate code to pass them — a great **capability check**. Earlier models did "insane things" (nested **flag variables** to pass tests without reaching the elemental computation); it's getting much better.
- He now (ironically) **generates lots of tests** — less for understanding-by-reading, more as a **backstop/change-detector** ("coverage is at 95 — bring it to 100," done every time). But reviewing generated tests is **review debt** — **train AI to match your test style/organization**.
- Still does **TDD** at times; often uses generated tests as a backstop. Idea: **two test suites** — **human-intended** tests and **background-generated change detectors** you don't fret over.

---

## 6. Trust, Comparison & Availability Bias

- **Ask again** in a **fresh session** (no shared memory) and compare — is one right, both right differently? Great for **non-technical** things too (fed **two construction bids** to Claude *and* GPT to find overlapping/missed concerns).
- **Ask for two** (direct comparison) and **ask for N** independent implementations (no cross-contamination → different viewpoints; direct each agent slightly differently) — experiments we could never run this easily before. "You can't test in quality" — but many agents hurling exploratory tests find things you wouldn't.
- Ask **"what in here is unnecessary?"** — bigger and fuzzier than dead-code/duplication detection (e.g., "another technology already does this," "something upstream handles this").
- **Probe stability with hypothetical features** ("what would it look like with this feature?" — echoing Kent Beck's morning point about looking far enough ahead).
- **Availability bias is the enemy:** "write me Tetris" → the model makes countless decisions for you (platform, framework, scoring); you **get tired and accept it**. Human behavior minimizes effort for a satisfactory result (the coffee shop next door vs. a mile away). **Extraneous features make future changes harder** — watch for the point where a system becomes **unmodifiable** and you must **start over**. The degree AI **anticipates good patterns/practices** is the degree that stops happening.

---

## 7. Skill & the Irony of Automation

- Fight **de-skilling deliberately** — some skills you're happy to lose (writing regexes by hand), but for the important ones:
  1. **Try it yourself first**, then ask AI — the prior **struggle** makes the answer *stick* (his math professor: "want an A? **do the homework**"; he doesn't rehearse talks but thinks them through for months so the ideas persist).
  2. **Choose where to struggle** — the things vital to your career and your systems; it's real work.
  3. **Most important — after AI's answer, ask "what was I missing?"** (or "what was **AI** missing?" if yours was better) — comparison is fundamental to learning.
  4. **Put AI in the driver's seat:** have it **quiz you** on the code it generated (security characteristics, patterns used) before **you** commit it → **directed learning** more approachable than reading A-to-Z.
  5. **Build from facts:** once you know a system has behaviors X/Y/Z, have AI **generate a tiny system doing just those** → compare to the complex real one → find the **simple core kernel** you couldn't see.
- **Closing — Lisanne Bainbridge, "Ironies/Icarus of Automation":** the **more you automate, the more capable the humans must be** — automation handles the routine, humans get invoked only when it can't cope, which demands **deep systems knowledge**. "Things are going to get crazy... if you love learning, here we are. **AI teaches us to ask better questions if we use it properly.**"

---

## People & References Cited

- **Michael Feathers** — speaker; author of *Working Effectively with Legacy Code*.
- **Peter Naur** — "Programming as Theory Building."
- **Alan Kay** — perspectives increase intelligence of responses.
- **Kent Beck** — morning keynote (looking far enough ahead).
- **Lisanne Bainbridge** — "Ironies of Automation."
- Concepts/tools: legacy = code we don't understand, theory building, model fragility/dissipation, lensing, scaled questions, projections (LaTeX/PlantUML/language translation), "go rogue," rough-out, delete-the-source test, review debt, ask-again/two/N, availability bias, deliberate struggle, AI-quiz-you, build-from-facts.

---

*Video: https://www.youtube.com/watch?v=Mcsb4_7U-LY — Transcript via yt-transcript.sh; outline generated from the transcript.*
