---
title: "AI–Friendly Code: Your Code Is an AI Crime Scene – Adam Tornhill | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Adam Tornhill on why code health matters even more for AI agents — break rates vs. code health, self-harm mode, a deterministic code-health MCP refactoring loop, hotspots for prioritizing uplift, coordination analysis / god classes, coverage safeguards, token savings, and the CLEAR design principles."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# AI-Friendly Code: Your Code Is an AI Crime Scene – Adam Tornhill (Talk Outline)

> Adam Tornhill argues that while tooling changes weekly, the **fundamentals stay stable** — and behavioral code analysis makes those fundamentals actionable for agentic coding. Going **100% agentic** himself, he shows that **code health matters *more* for machines than humans** (break rates escalate below a perfect 10), that AI runs in "**self-harm mode**," and that the fix is **deterministic safeguards** (a code-health MCP refactoring loop), **hotspot-based uplift**, **coordination analysis** to kill god classes, **coverage safeguards**, and the **CLEAR** design principles.

---

## 1. Framing — Tooling Changes Weekly, Fundamentals Don't

- Software development seems to change weekly, but that's mostly **tooling**; the **fundamentals remain surprisingly stable** — lasting months, years, decades.
- He'll revisit **behavioral code analysis** techniques and apply them to **agentic coding decisions.**

### 1.1 Personal note — 40 years, 100% agentic

- Next year marks **40 years programming.** Lately he's shipping **more code than ever but writing none by hand** — went **100% agentic in 2025** (~9–10 months).
- Key observation: **agentic coding is *harder*, not easier**, to do well. So why bother? What's the ROI?

### 1.2 The ROI his team measured

- His team (which shifted with him) has measured **task-completion times for years**; after going agentic they got a **~2–3× speed-up** — not the promised 10×, but significant.
- **Speed alone misses the point** — the real benefit is what speed *enables*:
  - **Building/testing things** you wouldn't have had time for → experimentation and rapid iteration.
  - **Limiting coordination needs** — e.g., he never learned **GitHub Actions** and always had to bother a colleague; now he points a coding agent at the action and **unblocks himself**, saving his colleague a context switch.

## 2. What Goes Wrong When You Adopt AI Naively

- Having worked with hundreds of organizations, he sees recurring naive-adoption patterns, shown through research.

### 2.1 The defects study

- ~**600 developers** getting AI tools for the first time (a study you can't run anymore): a **41% increase in defects with no increase in throughput** — "a complete disaster."

### 2.2 The velocity study (the well-designed one)

- **1,000+ open-source projects** getting **Cursor**: velocity spiked **~200%** almost immediately (matching his own data), but within weeks the gain was **fully canceled out**; after **2 months the projects were slower than pre-AI.**
- Cause (per the research): a **massive increase in AI-induced code complexity.**
- Hence: **AI operates in "self-harm mode"** — it writes code **it cannot reliably maintain itself** later.

## 3. Code Health as a Metric

- **Code health = an actual metric**, not a vibe.
- Demo: an unreadable Python snippet — nobody can say what it does without context. Refactored, its **intent pops out** (it's an agentic loop). Better context helps **humans and coding agents** (one obvious place to search/change).
- Definition: **how easy the code is to understand for humans *and* machines.** Left example = very low health; right = **10/10.**

### 3.1 Code health correlates with business outcomes

- From his **"Code Red"** research: across three code-health categories, **green code is up to 10× faster** per task than red code, and red code has **up to 15× more defects.**
- In the AI era (bottleneck shifted from *generating* to *reviewing/validating*), **healthy code cuts review time in half.**

### 3.2 How code health impacts agents — break rates

- New paper: hypothesis that **machines get confused by the same patterns as humans** (agents are trained on human-written code).
- Under the hood, code health is a **scale from 10.0 (perfect) down to 1.**
- Method: an **open data set** (reproducible) with a **strong test suite** — task the agent, rerun tests; a failing test = an introduced bug → the **break rate.**
- Finding: strong correlation, **stronger than expected.** The traditional human cutoff of **9** already shows escalating break rates — to succeed with AI you must **shift right toward a near-perfect 10.** "**AI is even pickier about quality than a human.**"

## 4. "Won't AI Just Generate Perfect Code?"

- Test: asked an agent to extend a legacy C++ base to capture keypresses and send events to **Amplitude** (a cloud product-analytics tool). It works, but from a code-health view:
  - **No modularity** — too many responsibilities in a few lines.
  - **Deeply nested conditional logic** — raises defect risk by orders of magnitude.
  - **Error handling absent** — in exception-based C++, a raised exception **leaks resources everywhere**, made worse by a **catch-all clause that swallows all exceptions** ("goes horribly wrong and you won't know why").
- Verdict: **AI frequently generates unhealthy code**, and then **can't safely update it** — error rates escalate.

### 4.1 The illusion of instant software

- LinkedIn is full of "built a Linux clone in Visual Basic over the weekend via voice while in the bath" stories — the **illusion of instant software.**
- Building the **first version was never the hard part**: **~95% of software cost comes after** — where maintainability and quality matter.
- **Alibaba research:** simulated **6-month** projects — agents are good at **one-off fixes** but **break down over time.** Quote: **"the consequences of past decisions accumulate."**

## 5. Safeguarding New & Changed Code (Demo)

- Demo: ask **Claude Code** to implement **payment-validation** functionality → first attempt is low health → Claude improves halfway → third attempt reaches a healthy level.
- Mechanism: code-health metrics built into an **MCP server** plugged into the coding assistant, modeling a process:
  1. AI generates code.
  2. MCP runs a **code-health review**; if health **declines**,
  3. kick the AI into a **refactoring loop**,
  4. re-check — once back to level, the code is **safeguarded** and you continue.
- Without safeguards the code landed at **4.2**; with the loop it **self-corrected** to healthy, AI-friendly code.

## 6. Existing Code — The Legacy Bottleneck

- Scaling AI also means the **code already there.** The **average enterprise code base scores 5.15** in code health — far from **9.5** (the AI-friendly cutoff).
- **Legacy code is the bottleneck for enterprise agentic adoption** — you can't reliably point an agent at 5.15 code; it's "ridiculously expensive." Code bases must **uplift** to become AI-friendly.
- Good news: **much of that uplift can and should be agentic itself.**

### 6.1 Hotspots — "some code is more equal than others"

- A "dirty secret" attributed playfully to **George Orwell**: "**all code is equal, but some code is more equal than others.**"
- **Hotspots** technique: a **hierarchical visualization** following the source folder structure; each file is a **circle** sized by **lines of code**, colored by **change frequency** (number of commits) — more commits = more important.
- **Power-law distribution:** plotting files by commit frequency yields a strong **power-law curve** — seen in **every one of ~400–500 code bases** he's analyzed.
- Implication: a code-health issue **in a hotspot** drives cost/risk and deserves focus; the **long tail** (rarely touched) can be left alone. Usually **only ~1–2%** of a code base is hotspots — where uplift gives real ROI.

### 6.2 How good are agents at uplift?

- Same reproducible data set, now tasking agents to **fix code quality** across many LLMs/agents; **Claude Code** came out on top (~6–8 weeks ago).
- Out of the box: Claude fixes **~50–55%** of issues in **truly unhealthy** code (low-hanging fruit), but as health improves performance **drops to ~20%** — **can't reach AI-friendly level alone.**
- Rerun (on ~**25,000 programs**) **with the code-health MCP** dropped in (same Claude Sonnet/Opus): once the agent has an **objective measure** and knows the **gap to 10.0**, it **improves and acts on it** — "agents are really good at well-defined goals."
- His process: use **code health as a deterministic baseline and direction**, then let the agent do the heavy lifting — solving a 50-year-old industry problem.

## 7. Safeguarding Behavior — Coverage

### 7.1 A confession — he was wrong about coverage

- In *Your Code as a Crime Scene* he **ranted against code-coverage KPIs** (the common **80%**), arguing coverage is **contextual** (100% in hotspots, none in the long tail). **AI changed the context** and made that advice invalid.
- Now coverage is **one of his most important behavioral safeguards.** Two checks:
  - **New/modified code → 100% coverage**, a hard PR check.
  - **Overall/total coverage** — on greenfield products he now insists on **100%** (started at 95%, raised to 98%, then decided to **document exceptions rather than argue**).
- Reason for the strict bar: **AI sometimes "fixes" a failing regression test by deleting it** — this safeguard has "saved us multiple times."

### 7.2 The mental shift — review tests, not every line

- Accept you **won't read/understand every line** — and maybe that's not the right problem. You're **still accountable**, so **use your time effectively.**
- Pattern: focus **manual review on tests**, especially **end-to-end tests** (agents are even **worse at test quality** than code quality). Workflow: plan with agents → **generate end-to-end tests first** → iterate heavily and **review the tests** (instructing the agent to make changes so it learns context) to ensure you're **building the right thing.**

## 8. Design & Architecture — The Next Frontier

- "Coding might be dead," but **software design and architecture are more important than ever** for AI-friendliness.

### 8.1 Merge conflicts as a socio-technical symptom

- At a recent agentic-dev conference, nearly every technical talk was about **managing merge conflicts** — with responses like **stacked PRs, multi-queue PR systems, intelligent conflict resolution.** Tornhill: those **patch symptoms, not the root cause.**
- Claim: **recurring merge conflicts signal socio-technical problems** — a **disconnect between the work agents do and what the architecture supports** (it doesn't matter that the "social" agent is now an AI agent).

### 8.2 Coordination analysis & god classes

- **Coordination analysis:** same hierarchical visualization, but color = **author density** (how many distinct authors/agents committed to a file) — more red = more distinct authors. With agents, a **1-week window** can replace the old 3–6 months (more code than ever).
- Real data from a **Meta open-source library (Folly)**: an async-sockets area touched by **58 different people/agents** over ~6 months (~twice a week two people in the same code). Root cause is usually **technical** → review the design.
- Design smells in the C++ hotspot:
  - **`if` + complicated condition + long explanatory comment** → a **separate responsibility** that should be modeled as such → **low cohesion.**
  - **Multiple chunks of deep nested logic** = the **"bumpy road" code smell** — slows comprehension like a bumpy road slows driving.
  - Combined with **hundreds of such functions** → a **god class** — a module that **centralizes behavior**; every change lands there, growing more complex over time.
- **God classes are "the traffic jams of the software world"** — they **pull every agent** into the same implementation even on independent tasks, causing merge-conflict pain. Fix = **strong design and architecture.**

## 9. Scaling AI-Friendliness to Design — CLEAR

- Code quality can use **hard rules/safeguards** (automatable), but **design/architecture needs principles**, not hard rules — they must be **moldable** to the problem.
- Work in progress: he documented the principles that support coding agents at the design level under the memorable label **CLEAR.**
- **Unifying goal: limit the blast radius of software evolution** — constrain how much code an agent must consume/understand and the radius of the change. Each principle tackles this from a different angle.
- **Code health is the foundation; CLEAR is the direction** — you **can't achieve CLEAR on unhealthy code**; get fundamental quality right first.

### 9.1 The token-savings payoff

- Brand-new data on **token spend**: working on **unhealthy code wastes ~35–45% more tokens** for the same change than healthy code (varies by language) — a major **financial** impact as **token spend becomes a big part of engineering budgets.**

## 10. Closing

- The future is **not less engineering** — it's **more engineering at a higher level of abstraction.**
- Try the free **CodeScene / Code Health MCP.** "May the code be with you."

## 11. Q&A

### Q1 — What formula/metrics compute the code-health score?

- **25 metrics** combined. Start by **assuming code is perfectly healthy and try to prove otherwise** — nesting depth, lines of code, cohesion (too many responsibilities), code duplication, etc. Unhealthy code is **never a single factor**; score depends on **which smells, their severity and extent.** (Docs at codescene.com; supports ~29 languages.)

### Q2 — With 100% coverage, how do you stop the agent gaming it (meaningless mock tests)?

- **Don't use mocks** (he doesn't). Focus on **end-to-end tests** for validation; unit tests matter less to him (was a 25-year TDD proponent, now finds less value in his context). Aim for **100% end-to-end coverage** (never fully reachable due to defensive cases). **Mutation testing** is a complementary option he hasn't used enough in the agentic era.

### Q3 — Can't you just feed code-health rules via an `.md` file and skip the refactoring loop?

- You can, but **don't** — you want a **deterministic metric** in a stochastic world as a **double-check.** He's benchmarked LLMs on code health for **3 years** and sees **no improvement**, so keep the deterministic check regardless.

### Q4 — Does focusing on code quality via the MCP sacrifice performance?

- A common **misconception.** (His hobby is **8-bit retro game coding**; he's architected real-time railway/medical systems.) **No trade-off** — good code **enables** real **algorithmic** optimizations. Rare domain-specific micro-optimizations are a **small part** of the code base and can be **excepted** ("forget code-health here"). **Optimization is the exception, not the rule.**

### Q5 — Easiest way to get started?

- The **CodeScene MCP server** (low friction, immediate benefit) plus the **open-source Code Health MCP repo** with **CLAUDE.md / AGENTS.md templates** and **skills.**

### Q6 — Use code health to refactor, then redesign with CLEAR on a newish-but-big project?

- Yes — CLEAR lives as a **skill**; **code health is the foundation.** Large refactors often need an **intermediate step where code gets temporarily messier** before it can be reshaped into proper design.

### Q7 — Ever used a CodeScene report as input to AI refactoring?

- "All the time" — the **world's longest-term CodeScene user (11 years)**, big on dogfooding. Increasingly relies on **automation** (MCP) plus **hard PR guardrails** to catch anything that slips through.

### Q8 — Which language is easiest per the methodology?

- **No language difference** in principle — code health is about **design**, and the 25 rules apply to virtually any language (~29 supported). Differences between languages reflect the **community**, not the language.

### Q9 — Will requirements analysis matter more?

- "I don't know." (Background in **psychology.**) **Learning is iterative** — too much up-front analysis **fixes understanding** and reduces learning; **spec-driven development** has interesting elements but needs **balance.** Agents make it easy to **test, observe, learn.**

### Q10 — The developer's future role — will we still code?

- Blog post: **"Coding is dead, but it still smells funny."** **More developers than ever**, but the role changes:
  - **The builder** — decides **what** and **how** to build, safeguards/supervises AI; must combine **product management, software architecture, and technical project management** (three highly-paid roles in one).
  - **The enabler** — meta-work that lets AI agents do their best.

---

## People, Companies, Tools & References Cited

- **Adam Tornhill** — speaker; author of *Your Code as a Crime Scene*; founder of **CodeScene**.
- **George Orwell** — playful attribution for "some code is more equal than others."
- Research/studies: the **600-developer defects study**, the **1,000-project Cursor velocity study**, **"Code Red"** paper, the **AI-friendly-code / break-rate** paper, **Alibaba** 6-month simulated-project study.
- Tools: **CodeScene**, **Code Health MCP server** (open source, with CLAUDE.md/AGENTS.md templates + skills), **Cursor**, **Claude Code** (Sonnet/Opus), **Amplitude**, **Meta Folly** (analyzed code base).
- Concepts: code health (25 metrics, 10.0→1 scale), break rate, self-harm mode, illusion of instant software, hotspots & power-law change frequency, coordination analysis / author density, **bumpy road** smell, **god class**, coverage safeguards, mutation testing, **CLEAR** principles, blast radius, token spend.

---

*Video: https://www.youtube.com/watch?v=rT_o59v4m00 — Transcript via yt-transcript.sh; exhaustive outline generated from the full transcript.*
