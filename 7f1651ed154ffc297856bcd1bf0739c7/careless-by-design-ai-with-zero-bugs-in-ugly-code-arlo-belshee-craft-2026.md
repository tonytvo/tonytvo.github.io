---
title: "Careless by Design: AI with Zero Bugs in Ugly Code – Arlo Belshee | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Arlo Belshee on 'vigilance toil' — why AI trades work toil for worse vigilance toil, why brownfield needs cost-to-protect to be zero not cheap, and how to engineer the agent's universe (memory, context, tools, feedback) so a careless agent can't create the defects you'd have to watch for."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Careless by Design: AI with Zero Bugs in Ugly Code – Arlo Belshee (Talk Outline)

> **Arlo Belshee**: *"Better brakes let you stop **caring** about stopping."* AI is the **engine**; the **universe around the AI is the brakes.** The goal is to build systems so a **careless agent succeeds** — driving **vigilance to zero** for the risks that actually matter.

---

## 1. The Brakes Metaphor

- Early cars drove **20–25 mph** and stayed there even as engines improved. People sped up only when **brakes** improved (better material, better tires/traction, ABS). **Engines are fine in a straight line; curves are the problem** — without good brakes, a curve kills you, and at 120 km/h you can't be **vigilant** the way a Model T driver white-knuckled it. **Better brakes don't just let you stop — they let you stop *caring* about stopping.**

## 2. Vigilance Toil

- A work week used to be ~**1.5 hours of valuable work** + **38.5 hours of work toil** (typing it in, debugging). AI eliminated most **work toil** — but traded it for **vigilance toil** (watching agents so they don't go astray), which is **more boring, less fun, higher stress** — a **worse** trade.
- Not new: a brownfield team he worked with had a **2.5–3-year** release cadence — open the codebase, senior engineers work carefully for **2.5 weeks**, then the bugs created (and bugs from fixing bugs…) take **2.5 years** to clear. "If they add AI, what happens?"
- **Formula: vigilance toil ∝ throughput × amount-to-protect.** Greenfield: little code/few features/few customers → **amount-to-protect ≈ 0** → vigilance ≈ 0 at **any** speed. **Brownfield/legacy:** amount-to-protect = **all customers, reputation, every existing feature** — each new feature's upside is far smaller than the risk of breaking everything (pure risk-optimization says *stop all development*). Companies spend **8–9 hours of vigilance per hour of work**.
- **AI makes it worse:** cutting work toil ~**75%** means **4× more events → 4× vigilance**; since vigilance already exceeded work toil, you **increase labor cost and slow down**.
- **Probabilistic protections are the worst:** something that works 90% of the time **fatigues** you (you're looking for something that rarely happens), so you stop looking and get burned — worse than something that fails **all** the time (you'd just build a workflow around it).

## 3. Demo 1 — Movement-Based Branching

- Goal: minions commit with a **clean, linear git history** — small commits on a side branch, merged with a summary of intent, using **risk-aware commit notation** on the side branch and intentional-commit summaries on merges.
- **Agents get no git access** — only an MCP tool exposing three deterministic operations: **movement start / commit / merge** (implemented in deterministic code that syncs to main, rebases correctly, keeps history clean). The agent just says "I want to start working"; it needn't know the details.
- Minions **attest** intent at commit ("documentation-only change," "ran the tests") → the system **computes risk**. But minions are **creative but drunk 3 a.m. engineers** — sometimes they're "drunk," not lying. Told to lie (mark a product-code change as doc-only), even Claude's own probabilistic protections sometimes stop it — but this time it complied, and the **deterministic tool caught it**, flagging the commit **`@?`** (highest risk / unknown-or-multiple intent: "you said docs but changed product code"). The dot/`D` first commit (fixing a README typo) was correctly low-risk documentation.

## 4. Demo 2 — Status-Email Workflow

- A Samman-style coaching engagement (2 h/day for 10 days) needed a **daily status email** + lesson planning. Day 1 took **~4 hours** (billed 1) — overproducing while figuring it out. Iterative reductions:
  1. **Standardize the workflow into a file** — "**never tell it what you want to do; make a file that says what/how, and tell it to follow that file**" (his #1 recommendation; ideally two files — process + work definition).
  2. **Narrow the goal** — realized he only needed "**identify key moments**" (moment + before/after + quotes), not "everything that happened."
  3. **Better iteration** — a standard pattern letting Claude choose when to ask for word-vomit vs. pointed questions vs. review-with-comments.
  4. **Let Claude manage the day** via a **deterministic script** (`pnpm do today` → figures out the next step, runs Claude, repeat until the email is sent).
  5. **Script the fetch** (transcript via API in deterministic code; Claude only as rarely-used backup) + **text-to-speech** so the mostly-autonomous machine calls for attention only when needed.
  6. **Iterative analysis → structured JSON** (schema-validated: "≥3 quotes," required fields) checked **while Claude is still running** → a **real-time, domain-specific lint** ("you missed a spot").
- Net effect varies per lever: the branching tool slashed **vigilance toil** (no merge/history/notation worries); the "document iterator" cut **work toil** but **not vigilance** (fine in greenfield, useless in brownfield).

## 5. Free vs. Cheap

- Vigilance toil actually has **three** factors: **throughput × amount-to-protect × cost-to-protect.** Because brownfield **amount-to-protect** is enormous, it **doesn't matter if cost-to-protect is small — only whether it's zero** ("small × very large = still too damn expensive"). There's a **fundamental difference between free and cheap.** You can't zero everything, but you can build systems that zero **specific** risks.

## 6. Where Defects Come From — Tool-Builder Mindset

- **App/library developers** make their **own** code defect-free-enough (economic trade-off; even early Google Sheets couldn't add correctly, an acceptable bug then — "not anymore"). Strategy: find/fix defects before they pile up.
- **Tool builders** don't look at bugs in their own software — they care about the **defect-creation rate of the careless people using their tools**. "Am I leaving the careless developer unsupervised, or making an environment where he won't make mistakes?" **Goal: make even crappier AI succeed** — "could I code with **Haiku**? can my orchestration make **Gemini** a valid option?" Assume a **well-intentioned but careless engineer** and **change the universe around them, one error-factor at a time.**

## 7. Controlling the Agent's Universe

- Unlike humans (who live in the raw real world), **agents live only in the constrained fake world your tools expose** — they can only think until given a tool. So **you control every side**:
  - **Memory** — the session/context is a file on disk; shut the agent down, edit the file, restart → it "knows" whatever you told it.
  - **Reachable context** — it sees only what's mapped in source control (not everything that exists); remap readable/writable, transform bidirectionally.
  - **State control** — when it "changes a file / does a refactor," maybe it did — or maybe it told you "extract method," you **undid its work, did the extract-method yourself**, and told it "yeah, it worked."
  - **Goals, tooling, workflow** (where deterministic vs. non-deterministic code acts), and **feedback** — every tool response is under your control (or an easy **man-in-the-middle** via MCP): "is that really what I want to tell it happened?"
- **Don't give it `bash`** — the union of all possible actions; a careless drunk engineer will make **typos in bash**. **Constrain its tooling.**

## 8. The Safety Spectrum & The Recipe

- Spectrum: **vigilance → probabilistic** (manual/semi-auto QA — finds what you thought to look for) **→ deterministic** (unit tests) **→ prevention/carefree** (type systems you can't forget to satisfy; refactoring tools where people **stop editing and start refactoring**). **Carefree is what makes careless succeed.**
- **The recipe (engineer carelessness):** apply a **template** of empty guardians → find one thing you're being **vigilant** about → use a **spot-checker** (probabilistic test) to find examples → pull a **lever** to make it **impossible or auto-checked** (create a **guardian**) → adjust what's left to watch → decide "committable now?" → commit and loop.

## 9. Q&A

- **Cheaper/local models?** Not **Haiku** yet (reasoning insufficient); **Sonnet** works (trivially at low effort with medium effort).
- **Plan optionality (avoiding premature lock-in):** at a design choice, brainstorm **more** options (you know more now than the planner did), check them in, then **branch per option** ("probably-wrong/…"), replace the decision node with one chosen answer per branch, **wipe the agent's memory of the choice**, let each branch's agent make its option **really** work, then compare successes and pick "20% of this, 80% of that." The **reachable-context** lever makes exploring optionality **free**; branch-per-focus gives total single-thing focus.
- **Controlling their universe:** an agent starts with almost nothing and can only gain info via the **tools you give it** — it can't "bumble around the real world." Stories of agents "doing unexpected things" come from **over-powerful tools** (give it `bash` and it can do *everything*, with typos) → **constrain tooling**.
- **Structured status emails:** narrowed from "write the email" all the way down to "read this part of the JSON analysis, turn it into sentences, put them here" — markdown → HTML → `.eml` with recipients all generated **deterministically** so format/structure never drifts (Mermaid diagrams always look the same). The **goal** is the lever.
- **Required demo/verification (feedback lever):** the agent **can't mark a task done** — it can only provide a **structured demo** (steps + a **Playwright**-driven run) that a **reviewer minion** executes and **de-uglifies** (front-end skill loaded) before the human ever looks. "I only look at good code." (Built for **Vue/TypeScript** apps.)
- **Closing:** "We didn't ask for care — we **redesigned the world**." Use the levers to make some things **zero risk** → reduce vigilance toil. **AI is the engine; the universe around the AI is the brakes.** Make careless AI succeed.

---

## People & References Cited

- **Arlo Belshee** — speaker; "minions" ecosystem, risk-aware commit notation, movement-based branching, Samman-style coaching.
- Tools/models: **Claude Code, Sonnet/Haiku, Gemini, MCP, Playwright, Vue/TypeScript, Fireflies, Mermaid**.
- Concepts: vigilance toil vs. work toil, free vs. cheap, tool-builder mindset, controlling the agent's universe (memory/context/state/tools/feedback), carefree/prevention safety, guardians, plan optionality via branch-per-option, required-demo verification.

---

*Video: https://www.youtube.com/watch?v=t03bQYC7D8E — Transcript via yt-transcript.sh; outline generated from the transcript.*
