---
title: "Pulling Continuous Delivery inside the agentic loop – Kief Morris | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Kief Morris on all-in hands-off agentic workflows — defining 'good' via harnesses, and pulling CD pipelines inside the agent loop to test code quality, deliverability, and operability."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Pulling Continuous Delivery inside the agentic loop – Kief Morris (Talk Outline)

> Kief Morris (infrastructure-as-code author) on the value of **all-in, hands-off agentic workflows** — and why, to make them safe, we must get better at **articulating what "good" software is** and bring **continuous delivery pipelines inside the agent's loop.**

---

## 1. Hands-Off Workflow

- "All-in, hands-off" = **you don't touch the code**; when output is wrong you **fix the harness, not the code** (like never hot-fixing production — fix the source so it isn't reverted next time). Looking at code becomes a **failure mode** because you can't keep up manually.
- Not a mandate for everyone now — it can go badly, so you need the right things in place; his stance is **experiment and learn** (riffing on Kent Beck's keynote).

## 2. Do We Still Need Good Code?

- Avoid **cognitive debt** (you can't steer what you don't understand) and **cognitive surrender** ("fine, just do it").
- Vibe tools build software "good in the ways obvious to users *now*," but LLMs **won't build software that lasts by default** — they say yes to the next feature until there are **no futures left** (Beck's features vs. futures). Fine for throwaway/personal tools; **not** for software our businesses/customers rely on. LLMs *can* build durable software — **if we make them.**

## 3. Harnesses & Defining "Good"

- A **harness** = **guides** (skills, `AGENTS.md` — what to build) + **sensors** (tests, linters — what's not good) run **inside the loop** until sensors pass; plus **reports/dashboards** (architecture diagrams, complexity) to steer. We've **never been good at articulating "good"** — which is why we still lean on human review.
- Three quality areas to make explicit:
  - **Code quality** — matters because it impacts deliverability.
  - **Deliverability** — can we change/configure/troubleshoot/fix it? Leading sensors: linting, coverage-quality; lagging: **DORA metrics**.
  - **Operability** — know when it breaks, restore/troubleshoot fast, the operational -ilities. Lagging sensors: user satisfaction, business/commercial metrics; leading: the practices that ensure them.

## 4. CD as an Operability Harness

- LLMs focus on the **development box** (code + local tests); operability/performance only surface once **deployed in a realistic environment**. So **pull CD pipelines into the agentic loop**: deploy to a test env (with infrastructure-as-code), run **deployment/config/perf/security** tests as leading operability sensors, and (aspirationally) feed **production monitoring** back to tune software/infra and manage cloud cost.

## 5. What Went Wrong (and fixes)

- Agent fixed infra via the AWS CLI → make it **fix the infra code**, not the live outcome (remove its direct access).
- Agent **didn't take responsibility** ("that build was red before") → teach **build discipline** (don't commit on red).
- **"Worked on my machine"** / hardcoded params → deploy to **two differing environments** before prod (but ephemeral envs are slow and costly; better **local emulation** is still an unsolved gap).
- **Agents fail a lot at deploying** — LLMs are trained on *writing about* deployment, not *doing* it. Fixes: **skills** spelling out deploy/troubleshoot steps ("check GitHub issues before inventing a wild workaround"), and prefer **deterministic scripts** as the only way to do a task (also cheaper as tokens rise). He notes his own habits **deteriorating** into laziness.

## 6. Summary & Q&A

- We can **learn a lot** from all-in hands-off loops even if we can't fully adopt them; fix the **embarrassing gaps** (e.g., a dev env that can reach the prod DB) **before** unleashing agents — build controls into the **system**, not into human vigilance ("DevOps means you *don't* get root on prod").
- CD pipelines are how we've made delivery safe for humans; bring them into the agent loop as an **experiment**. Don't trust agents (or humans) to be deterministic — **red pipeline stage = code can't move**. He wouldn't point an agent at a production database; **infrastructure-as-code + tested scripts** remain the guardrail (cf. the Replit prod-DB deletion). Skeptical of fully end-to-end "dark factory" software delivery — humans still needed to steer, especially on new ground.

---

*Video: https://www.youtube.com/watch?v=Gf9EwRYttmg — Transcript via yt-transcript.sh; outline generated from the transcript.*
