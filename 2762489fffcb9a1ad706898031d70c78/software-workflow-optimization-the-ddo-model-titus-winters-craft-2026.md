---
title: "Software Workflow Optimization: The DDO Model – Titus Winters | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Titus Winters on the Develop/Deploy/Operate model — why development is design (not a factory), the two core tensions, the four kinds of impact, the streetlight effect, and using AI evals + token cost as a proxy for the previously unmeasurable human parts of software."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Software Workflow Optimization: The DDO Model – Titus Winters (Talk Outline)

> Titus Winters traces software engineering from the **1968 Garmisch conference** to argue that we never became a real engineering discipline because our hardest, most valuable work — **development** — is **creative design**, not manufacturing. His **Develop / Deploy / Operate (DDO)** model separates the human, factory, and world-facing phases (each with different semantics, metrics, and investments), names **four non-interchangeable kinds of impact**, and proposes using **AI evals + token cost** to finally proxy the previously unmeasurable human part.

---

## 1. History — The 1968 Software Crisis

- In **1968**, early luminaries — **Brian Randell, Edsger Dijkstra, Alan Perlis, Niklaus Wirth** — gathered in **Garmisch, Germany** for the first software-engineering conference to discuss the **software crisis** (software mattering to banking, government, military; quality seen as a risk).
- The crisis's symptoms — **blown budgets, missed deadlines, poor quality, unmet requirements** — are still recognizable; "we've just gotten used to things being this way."
- Proposed solution: become a **real engineering discipline** — **reusable components** and **principled processes.** The term "software engineering" was chosen **deliberately provocatively**, implying a need for the theoretical foundations of established engineering.

### 1.1 Why we never got there — two quotes

- **Brian Randell:** software engineering is **"the multi-person construction of multi-version programs"** — it's **code + time + people.** We can apply rigor to **time/maintenance/change** (measurable, plannable), but **the people parts are hard to measure at best.**
- **Mary Shaw:** writing software maps to **designing products, not producing them.** Factory efficiency addresses **tooling/process**, not the **human designers.** How do you measure a team whose every artifact is **entirely unique**?
- Conclusion: our most valuable time is **creative, human-centric design** — quantifying it mechanically is "**like trying to measure the beauty of a painting.**" But that doesn't mean engineering ideas have **no** value.

## 2. A Field-Long March Toward Efficiency

- **DevOps / Continuous Delivery** (late 2000s–early 2010s): the **Continuous Delivery** book (2010), **The Phoenix Project** (2013) inherited manufacturing vocabulary — usually the **Toyota Production System** (work-in-progress, Kanban) — a genuine claim that 2010s software delivery **had become like manufacturing.**
- **DORA** (DevOps Research and Assessment): surveys practices likely **causal** in better outcomes, largely backing the DevOps/manufacturing thinking. **Great work, but widely misconstrued.**
- **Key correction:** DORA is **not measuring productivity of human engineers** or design work — it measures the **efficiency of the release pipeline** (e.g., **commit-to-deploy**), because **post-merge integration/release is mechanical**; pre-merge everything is **bespoke.**
- **SRE:** decades of driving down **human toil**, building **self-healing systems**, automating rollouts — making human involvement the **exception.**
- So the whole field has aimed at **efficiency, automation, reusable components** — but hampered because most **in-IDE time is design, not production.** We've optimized the **factory/ops** parts far better than the **human** parts.

## 3. The DDO Model — Three Distinct Processes

- **AI brings new scrutiny to old practices.** We must reason carefully about the **goals, inputs, outputs** of each phase.
- Based on his paper with **Lea Rivers** (product director) and **Saleem Virji** (SRE "philosopher"): **"Search, Develop, Deploy, Operate"** — written **almost without regard to AI** (mentioned once), yet a good lens as **token/assistant bills** grow.

### 3.1 Two founding axioms

- **Value only exists when software is shipped and used** — not designed, written, or merged. A 12-engineer team building a great feature that then **sits in a release queue for a month** has realized **exactly zero value** (work-in-progress; no ROI). "It doesn't matter how good the code is if it's not running."
- **Production bugs risk real bottom-line losses** — speed to **detect, diagnose, deploy a fix** matters enormously.
- Both push toward **faster release cadence.**

### 3.2 The quadratic value of shipping fast

- Two equal teams: **A ships daily**, **B ships once a quarter.** Value **accrues over time** — a feature deployed on **day 1** yields ~**90 days** of value (all of Team B's quarterly value). By day 2, A's expected value is larger; it's **quadratic** — **~45× more total value** over the quarter.
- Second-order effects (some changes fail, release overhead, experimental features needing iterations) are **real but secondary** — and most **improve the more you ship.**

### 3.3 The three pillars

- **Development = a creative process** — human judgment, expression of intent; **every change is unique.** You **can't apply factory reasoning** without losing something. A feature PR ≠ a lint-fix PR — so **measuring by lines of code or PR count is focusing on the wrong things.**
- **Deployment = a factory process** — once merged, **no fundamental reason for a human in the loop.** It's **signal processing** (test results, production metrics, canary analysis), and **machines beat humans at signal processing.** Manual release shepherding = a **failure of testing/automation/signals.**
- **Operations = an automation process** focused on **stability** — minimize the impact of the unexpected; **SRE lives here**; goal is **scale and resilience** and "the same failure only once." Humans **don't disappear** from later phases, but **routine toil should.** ("If you're doing the same boring job every day, that's toil. Don't put up with it.")
- Collapsing the three into one is a **category error** leading to bad tooling/investment decisions. Ops is **easier to measure and higher-stakes**, so it has drawn most of the last **15 years'** investment (execs like simple, customer-close stories).

## 4. Two Core Tensions

### 4.1 Fixed development costs are not losses

- A defect **caught during development** is a **reduction in capacity** — engineering time to find/fix, some deployment latency — but **doesn't hit the bottom line**, lose contracts, or make headlines.
- A defect **reaching users** is a **loss** — revenue, trust, reputation (jokes about groups without "even one nine").
- Implication: track/manage **internal** defects **separately** from **production** defects. Only managing outages = doing only the **ops** side, ignoring **develop/deploy** → bad investment calls.

### 4.2 Counterfactuals cannot be measured

- "What is the value of catching this defect earlier?" is a **nonsense question** — measuring against **something that didn't happen**, no clean baseline, too many confounders. **Leadership asking this sets you up to fail.**
- This is what started Titus down this whole line of thinking.

## 5. Four Forms of Impact (Not Interchangeable)

1. **Product success** — revenue, reach, adoption, user trust, satisfaction. The point of the business; everyone already talks about it. ("I work in the basement, keep making money.") But **without efficiency/new-capability investment, your revenue days are numbered.**
2. **Hardware efficiency** — production-adjacent, **very measurable** (itemized cloud bills / your fleet). Compiler and code-efficiency teams show up in resource utilization (e.g., "a compiler switch saved 2% of fleet CPU") — satisfying, measurable.
3. **Engineering capacity** — the **human stuff**, where most orgs **fly blind.** Are engineers doing **design/creative** work, or mired in **release toil, flaky tests, tech debt, slow builds?** A **massive cost that shows up on no statement** ("no one gets paged because the build system is slow"), yet real and demoralizing. **The streetlight effect**: we invest where it's easy to see, not where it matters — even though **paychecks dwarf compute costs.** Every bit of **deploy-phase toil** removed is **pure impact.**
4. **Strategic capabilities** — **changing the game**: doing the previously impossible/impractical, or making something bad **impossible** (most of **security**). "**This is where a lot of AI's value is hiding**" — making infeasible tasks doable.

### 5.1 AI value hides in impact #4

- Research doesn't show major **productivity** gains because, done well, we're **churning out substantially more valuable widgets at roughly the same speed**, not more widgets faster. Until we see that, there's a **disconnect** between "measuring productivity" and "the value of AI tools."
- Impacts have **trade-offs**: fewer tests saves compute but risks losses/burnout; more engineers with fixed compute runs jobs too hot and hurts stability. **Balance all four.**

### 5.2 Ask tractable questions

- Good orgs stop asking counterfactuals and ask: **Can we reduce the aggregate cost of the software process? Hold product success stable while reducing human deploy involvement? Shift defect detection earlier (cheaper)?**
- Goal: **ship as much value as possible, as early as possible, as cheaply as possible, at an acceptable level of quality** — "error budgets and efficiency and SRE mindset shifted left."
- A **defect-cost estimate**: *time since the issue was written × number of engineers exposed to it* (see the paper).

## 6. The Car-Company Analogy

- Every **industrial company** wants the same "as much value, as early, as cheaply, at acceptable quality" — cost/quality control are factory hallmarks (even **Student's t-test came out of the Guinness factory**, minimizing barley-testing effort).
- The difference: **other industries can measure their biggest cost; ours is people**, which we can't directly measure. "We've been measuring everything except the biggest line item."
- Mapping:
  - **Develop = design** (Mary Shaw) — creative, human; concept art through tire-tread design; **outputs are not fungible** — stop treating them as such.
  - **Deploy = manufacturing** — measurable; what **DORA** tracks.
  - **Operate = the dealership + on-site mechanics** — sales, satisfaction, warranty/service; feed problems back so the **next model is fixed**; measure dollars and issues.
- Get this analogy into leadership's head → **better decisions.** A **single metric for the whole process is misleading at best.**

## 7. Making the Human Part Empirically Measurable (via AI)

- We couldn't measure the **people part** — but AI coding might let us use **AI as a proxy** for the human parts of development.
- Build a **suite of sample tasks**: a range of **types** (new feature, bug fix, refactoring), **greenfield & brownfield**, representative **languages** and **deployment types** (microservice, front/back end), and a **range of difficulties** (zero-shot up to "best harness can't do it without humans"), each with **functional and quality acceptance criteria.**
- With these **evals**, software engineering becomes **empirically, experimentally verifiable**: vary the **scaffolding, harness, tools, model, or context** and measure, holding acceptance criteria constant.
- Two paths to impact from an experiment:
  - **Reduced token cost** on some evals (e.g., **better unit-testing guidance / API-spec/contract guidance** gives machines cheaper, faster feedback) → **aggregate token reduction proxies human cost / cognitive load** → the unmeasurable development phase becomes **empirically verifiable.**
  - **Previously-unsolvable tasks become solvable** → proof you're building **more powerful tools**, not just more efficient ones (impact #4).

## 8. The Long View on AI

- AI **isn't going away**; much of its workflow impact is a **natural progression** — we've **always wanted this to be an engineering/factory process.**
- Personal honesty: he was **skeptical until recently** and has **grave societal concerns** (wealth distribution, learning, socialization); if it could vanish he "wouldn't miss it" — but there's **no path to unilaterally disarming** (adversaries will use it), so the trick is **using it responsibly.**
- **Encouraging shift in discourse:** from "**AI can generate all our code**" to "**we're generating too much code — we need better tools, testing, and review**" to keep a quality bar.
- **The job has always been solving problems, not writing code** — code is a side effect. Modern software adds **security, privacy, i18n, accessibility, production practices, observability**; encoding expert knowledge lets us **increase quality/consistency/compliance at scale.**
- **Static analysis** in IDE/review works wonders but was **expensive to build** and hard to justify to leadership — the DDO + evals framework can now **quantify** that value. Push those guardrails **as early as possible** (authoring/generation time), so engineers **needn't be experts in every side problem.**
- Expect a shift **from unconstrained IDEs** toward systems with **encoded expert knowledge and org policies**, **remote execution** of tools (run compliance tools always; choose efficiency tools via the evals process). Developers **stay in the loop but no longer free of guardrails.**
- The coming shift is **not fewer engineers** but a move **away from software expertise toward deeper understanding of the actual problem/domain** — "industrializing the infrastructure around developers," exactly what Phoenix Project/DORA/SRE did for deploy/operate.

## 9. Closing — Back to Garmisch (1968)

- The 1968 group were **right about the aspiration** (rigor, reproducibility, reusable components) but **wrong about the details** and would be shocked it's taken **58 years.**
- Design/creative coding **resisted measurement** — rightly, for most of our history (bespoke, no two changes alike) — but **AI changed the rules**; some bespoke design will start to look "**more like cattle than pets.**"
- Not hype: AI won't magically solve everything or replace teams. We're in a "**pretty dumb phase**" where the metric is **how many tokens you can consume — the opposite of efficiency.** What comes **after token-maxing is a conversation about efficiency**, needing exactly this vocabulary.
- **Remember the axioms:** value comes from **customer usage, not effort**; **counterfactuals can't be measured**; **manufacturing costs ≠ user-visible losses**; **factory processes should be free of human toil**; **impact takes multiple forms.**
- Leaders are paying **unprecedented attention** to dev tooling because AI made it **hip, urgent, expensive** (IDE choice is now a **VP talking point**) — "use it against them." Platform leaders should start **measuring engineering capacity via software evals and token-cost proxies.** "The goal is not to replace the craft — it's to **stop wasting humans on things machines do better.**"

## 10. Q&A

### Q1 — What do you wish you knew at the senior→staff transition?

- **Focusing on impact and how to describe it.** From **staff onward** your job is **substantially different at each level** and **less hands-on-keyboard** — find the tools/approaches to **level up everyone around you** rather than doing it yourself.

### Q2 — Explain again how we measure human creative work.

- **A/B test on token cost.** Give ~5 well-specified plans, run each **with and without** (e.g.) "Titus's unit-testing guidance," and measure **token cost** given all produce passing results. A **15–40% reduction** in the cost of generating good software suggests it's a **best practice regardless of AI or people** — letting you **put a number** on refactoring/tech-debt/testing investments ("bringing numbers to a feelings fight").

### Q3 — Which idea do you most wish leaders understood?

- **The four forms of impact.** "I'm sick of being asked the **revenue value of keeping dependencies up to date** — that's the wrong bucket; you're not playing the right game. Stay in your lane; I'll do the engineering."

### Q4 — How has agentic AI changed this model/your thinking?

- **Relatively little**, other than **now we can run experiments.** He still needs to redo his **defect-cost estimate** (*time-since-written × engineers exposed* — 1 solo, 2 for pairing/review, team-size if merged, company-size if shipped org-wide) **with agents in the mix**, though agent costs are luckily more directly measurable.

---

## People, Works & References Cited

- **Titus Winters** — speaker; co-author of the **"Search, Develop, Deploy, Operate" (DDO)** paper.
- **Lea Rivers** (product director) & **Saleem Virji** (SRE) — DDO paper co-authors.
- **Brian Randell** — "multi-person construction of multi-version programs"; 1968 editor.
- **Mary Shaw** — software as **design, not production.**
- **Edsger Dijkstra, Alan Perlis, Niklaus Wirth** — 1968 Garmisch attendees.
- Works: **The Phoenix Project** (2013), **Continuous Delivery** (2010), **DORA** research, **Toyota Production System**, **SRE**, **Student's t-test** (Guinness origin).
- Concepts: DDO model, quadratic value of shipping, streetlight effect, four forms of impact (product success / hardware efficiency / engineering capacity / strategic capabilities), counterfactuals, error budgets / shift-left, AI evals & token-cost proxy, "cattle vs. pets," toil.

---

*Video: https://www.youtube.com/watch?v=yNtGXlhDfpQ — Transcript via yt-transcript.sh; exhaustive outline generated from the full transcript.*
