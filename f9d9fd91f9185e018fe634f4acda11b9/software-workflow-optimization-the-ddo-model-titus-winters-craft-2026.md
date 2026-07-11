---
title: "Software Workflow Optimization: The DDO Model – Titus Winters | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Titus Winters on the Develop/Deploy/Operate model — why development is design (not a factory), the four kinds of impact, and using AI evals + token cost as a proxy for the previously unmeasurable human parts."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Software Workflow Optimization: The DDO Model – Titus Winters (Talk Outline)

> Titus Winters uses the **Develop / Deploy / Operate (DDO)** model to reason about impact and efficiency in the software process — AI-assisted or not — and argues AI may finally let us measure the human/creative part.

---

## 1. Why Software Isn't (Yet) an Engineering Discipline

- The 1968 Garmisch conference framed "software engineering" as an aspiration toward rigor and reusable components. Two reasons it never fully arrived:
  - Randell: it's **"multi-person construction of multi-version programs"** — code + **time + people**; we can measure time/maintenance, but **people** parts resist measurement.
  - Mary Shaw: coding maps to **designing** products, not producing them — bespoke, creative, human-centric.
- The DevOps/Toyota lineage (Continuous Delivery, Phoenix Project, **DORA**, SRE) industrialized the **factory** and **operations** parts — but DORA measures the **release pipeline's efficiency, not engineer productivity** (commit→deploy is mechanical; pre-merge is bespoke).

## 2. The DDO Axioms

- **Software only has value when shipped and used** — a great feature stuck in a release queue is work-in-progress with zero return.
- **Production bugs risk real losses**; detect/diagnose/deploy-fix speed matters. → **Faster release cadence is almost always better** (value accrues over time; a team shipping daily can produce ~45× the quarterly value of one shipping once a quarter — quadratic).

## 3. Three Distinct Processes

- **Develop = design** (creative, human, every change unique) — *don't* apply factory reasoning; measuring lines-of-code/PR-count is measuring the wrong thing.
- **Deploy = factory** (post-merge, no human needed — evaluate signals: tests, canary, metrics; machines beat humans at signal processing). Manual shepherding = a testing/automation failure.
- **Operate = automation for stability** (SRE; minimize impact of the unexpected; ideally each failure happens only once).
- Collapsing them into one metric set is a **category error**. Operations gets over-invested because it's high-stakes and easy to measure.

## 4. Two Core Tensions

- **Fixed development costs ≠ losses.** A defect caught in development is a capacity reduction (unfortunate, invisible on the bottom line); a defect reaching users is a **loss** (revenue, trust) — track them **separately**.
- **Counterfactuals can't be measured.** "What's the value of catching this defect earlier?" is a nonsense question against an unestablishable baseline — leadership asking it sets you up to fail.

## 5. Four Kinds of Impact (not interchangeable)

1. **Product success** — revenue, reach, trust (the point of the business).
2. **Hardware efficiency** — very measurable (itemized cloud bills); compiler/code efficiency work.
3. **Engineering capacity** — the human stuff, mostly **flying blind** (release toil, flaky tests, tech debt, slow builds) — the biggest cost yet the least measured (**streetlight effect**).
4. **Strategic capabilities** — changing the game (making the previously impossible possible; most security lives here). **A lot of AI's value hides here** — "more valuable widgets at roughly the same speed," not more widgets faster.

- Ask **tractable** questions (reduce aggregate process cost? hold product success while cutting human deploy toil? shift defect detection earlier?), not counterfactuals. Defect-cost estimate ≈ time-in-buffer × engineers exposed. **Car-company analogy:** develop = design, deploy = manufacturing, operate = dealership/mechanics.

## 6. AI as a Proxy for the Unmeasurable

- Build a **suite of representative eval tasks** (feature/bugfix/refactor × greenfield/brownfield × languages × difficulties) with functional + quality acceptance criteria. Vary harness/model/context/tools and measure impact two ways:
  - **Reduced token cost** on passing evals → proxies **reduced human effort/cognitive load** (e.g., better unit-testing guidance → cheaper feedback signals). Bring **numbers to a feelings fight** about refactoring/testing/tech-debt.
  - **Newly-passing evals** → proof you built a **more powerful tool** (strategic capability), not just a more efficient one.

## 7. Where This Goes

- The unconstrained-IDE model likely fades; developers stay in the loop but **within guardrails** (linters, static analysis, org policy, compliance) applied **as early as possible** (authoring/generation time, not just review) — run everything for compliance, select tools by evals for efficiency.
- Winters (a recent AI skeptic with societal concerns) sees **no path to disarming** — the shift is **away from software expertise toward deeper problem/domain understanding**: "industrializing the infrastructure around developers so they can think about the domain." Token-maxing (the opposite of efficiency) will give way to an **efficiency** conversation that needs exactly this vocabulary.

---

*Video: https://www.youtube.com/watch?v=yNtGXlhDfpQ — Transcript via yt-transcript.sh; outline generated from the transcript.*
