---
title: "Pulling Continuous Delivery inside the agentic loop – Kief Morris | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Kief Morris on all-in hands-off agentic workflows — defining 'good' via harnesses (guides + sensors), the three quality areas (code quality, deliverability, operability), pulling CD pipelines inside the agent loop as an operability harness, what went wrong, and why guardrails must be in the system not human vigilance."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Pulling Continuous Delivery inside the agentic loop – Kief Morris (Talk Outline)

> **Kief Morris** (author of *Infrastructure as Code*) sees real value in **all-in, hands-off agentic workflows** — but to make them safe we must get better at **articulating what "good" software is** and bring **continuous delivery pipelines inside the agent's loop.** Framed as experimentation and learning, riffing on Kent Beck's morning keynote.

---

## 1. What "All-In, Hands-Off" Means

- You **don't touch the code** — and even when output is wrong, you **don't hand-edit it**. Analogy: you don't fix code in production; you fix the **source** so the change isn't lost/reverted next push. Same with agents — if you restructure code the agent doesn't understand *why*, it'll do something different with it later.
- You **probably shouldn't even look at the code** (aspirational) — you *will* for troubleshooting, but **looking at code is a failure mode**; the goal is to **steer without dropping to code level**, because you can't keep up manually once you get going.
- **Not a mandate** for everyone now — it can go very wrong, so you need the right things in place. His approach: **experiment and learn.**

---

## 2. Do We Still Need Good Code? Cognitive Debt & Surrender

- **Cognitive debt:** let agents rip and eventually you **can't steer** because you don't understand what/how they built → throw it away or declare "this doesn't work." **Cognitive surrender:** "fine, just do it."
- **Is code quality still important if the LLM owns the code?** Vibe tools build software **good in the ways obvious to users *now*** ("it does what I want") — great for people with a builder mentality who aren't programmers, and we'll see a **proliferation of self-built tools** (fine if they're throwaway/personal).
- But LLMs **don't build software good in the ways users care about *later*** — left to say yes to the next feature, they go "all the way down to where there are **no more futures**" (Beck's **features vs. futures**): more features, no optionality, hard to change. This is the **same old fight** with managers over investing in system quality that "doesn't show up until later" (the **desert phase**). Most of us build **software that must last** (businesses, paying customers, citizens) → it needs to be better. **LLMs can build durable software — if we make them.**

---

## 3. Harnesses & Defining "Good"

- A **harness** = things you put around the coding agent to drive the LLM to better code. Old-school loop = **humans are the loop**; agentic loop = **we work on the harness**, look at the outcome, and if it's wrong we **change the harness, not the code**.
- Two parts + a third:
  - **Guides** — what to build (skills, `AGENTS.md`, "here's how I want you to work").
  - **Sensors** — detect what's not good (tests, linters), run **inside the loop** until they pass; then a human **checks by *using* the software**.
  - **Reports/dashboards** — architecture diagrams, code-complexity reports, etc., to **steer** (and improve the harness when something's off).
- To make this work we must **clearly say what good looks like** — and "we've never been good about it," which is why we cling to **human code review** ("I'll know it when I see it"). It requires actually **thinking through what we want.**

### 3.1 Three quality areas to make explicit
- **Code quality** — even if only the LLM reads it, it matters because it impacts **deliverability**.
- **Deliverability** — being able to change/configure/improve/add/troubleshoot/fix. LLMs won't build this in by default; it bites **later** (agent loops and fails to change hard code). **Leading sensors:** linting, test coverage/quality. **Lagging sensors:** **DORA metrics** (lead time, deploy frequency, failure rate) — meaningful to business folks.
- **Operability** — know when it breaks, be alerted, restore/troubleshoot/debug/fix fast, plus operational cross-functional -ilities. **Lagging sensors:** deliverability problems, user satisfaction (laggy/unreliable), business/operational and commercial metrics. **Leading sensors:** the practices we build in. Agents make implementing this **somewhat easier** but it's still real work.

---

## 4. CD as an Operability Harness

- **CD/continuous deployment** is how we did operability before agents (Dev/Ops → DevOps → pipeline makes every change **production-ready**, or actually deployed — "not done until it's running in production"), forcing operability **as you code**.
- The problem: people using AI focus on the **development box** (what agents do with the code + local linting/tests). But **operability and performance only surface once deployed** in a realistic-enough environment.
- His experiment: **pull CD pipelines into the agentic loop** as an **operability harness** — take the agent loop past commit and `deploy` to a **test environment**, building the **infrastructure-as-code** with it, running **deployment testing** (does it deploy/configure?), plus **performance** and **security/penetration** tests. Aspirationally, feed **production monitoring** back to tune software/infra (e.g., manage **cloud costs**).

---

## 5. What Went Wrong (and fixes)

- **Agent fixed live infra via the AWS CLI** → tell it to **fix the infra *code*** (repeatable), and **remove its direct access** so a red build must be fixed in code (diagnose → reproduce locally → fix → push → repeat).
- **Agent doesn't take responsibility** ("that build was red before" — no, you broke it) → teach **build discipline** ("don't commit on a red build"). Partly works.
- **"Worked on my machine"** — even worked in the *test* env but failed in prod due to **hardcoded params/names (overfitting)** → deploy to **two differing environments** before prod to test parameterization — but **ephemeral environments are slow and expensive**, and agents **get it wrong more often than people**, making it painful. Better **local emulation** would help but is **hard/unsolved** (LocalStack relicensed pricier; "now you have two problems" maintaining an infra replica).
- **Agents fail a lot at deploying** — the root issue: LLMs are trained on **writing *about* deployment**, not **doing** it (not trained on processes/workflows/actions; tool use is bootstrapped by the coding-agent harness). "These things are not people, not smart" — they don't translate text into action unless you **lead them there**. Fixes:
  - **Skills** spelling out how to deploy/troubleshoot (e.g., "**check the tool's GitHub issues** for a known bug + workaround before inventing a crazy workaround" — and never file/post on his behalf).
  - Prefer **deterministic scripts** as the *only* way to do a repeatable task (instructions get forgotten as context grows; scripts also cut token cost). We'll spend more time deciding **what should be scripts** vs. left to the LLM.
  - Watch out for **your own laziness** — his habits deteriorated (during a Claude outage: "I guess I can't work" → "wait, I can still type commands"). Future models or **non-generative ML** may handle processes/tasks better.

---

## 6. Summary

- We can **learn a lot** from all-in hands-off loops even if we can't fully adopt them (larger orgs/legacy code need a lot of work to do it safely; the teams doing it fully are **greenfield or already very disciplined**).
- **Fix the embarrassing gaps first** — e.g., a dev environment that can reach the **production database** is a problem *without* agents; agents **amplify** every existing weakness. Build controls into the **system**, not into human vigilance: **"DevOps means you *don't* get root on prod."**
- CD pipelines are how we made delivery safe for (non-deterministic, lazy, sometimes malicious) **humans** — bring them into the agent loop as an **experiment**; a **red pipeline stage means the code can't move**. Expect to learn better ways (e.g., rethinking **batch sizes** since agents go faster but deploys don't).

---

## 7. Q&A

- **Seen this in production?** Not directly — his clients are traditional orgs still adopting Claude Code for *coding*. The extreme adopters are **small startup-y teams** — e.g., **System Initiative** (Adam Jacob, Chef founder) pivoting to an **agent-focused** IaC tool ("swamp"), very heavy on evals, ~5 hardcore people. The exception, not the rule.
- **Trust issues exposing the reproduction cycle to agents?** Don't give agents free rein — controls aren't just markdown "please don't break prod" but a **deterministic pipeline**: a failed stage goes **red** and the code **cannot move past it**. Humans aren't deterministic either; agents **raise the risk**, forcing us to be stricter than we've been.
- **Specific cloud-vendor agents (AWS/GCP)?** Mostly used **Claude** + some **Codex** on **AWS**; hasn't gone deep on dedicated infra agents — prefers one team caring about software *and* infra, not separate agents.
- **Does faster/larger-scale change break incremental delivery?** No — **waterfall won't work better with agents than with people**; humans still need to **get their heads around** small changes, look, and decide "is that what I wanted?" AI "just build the whole app from a spec" demos ignore **what happens on the next change/bug** (users don't want the software to completely change every couple of weeks).
- **End-to-end agentic software delivery in a few years (like automated supply chains)?** Skeptical of full "dark factories" — there'll be **layers**; some regular, well-understood software can be viewed from a distance, but on **new ground** you still need people to steer. It may get much easier with better tools/visibility, "but people like us still need to be involved."
- **A deterministic end-gate to stop a destructive command (à la the Replit prod-DB deletion)?** That's what harnesses/pipelines are — **deterministic tests/controls**, not a single silver bullet. He **wouldn't point an agent at a production database**; build **infrastructure-as-code + tested scripts** and let a **tool** deploy them, not the agent deciding at runtime — "old school, still applies."

---

## People, Companies & References Cited

- **Kief Morris** — speaker; author of *Infrastructure as Code*.
- **Kent Beck** — keynote (features vs. futures, forest/desert).
- **Adam Jacob / System Initiative** ("swamp", agent-focused IaC), **Chef**.
- Tools: **Claude / Claude Code, Codex, Windsurf/Cascade, AWS CLI, Terraform, GitHub Actions, LocalStack**; **DORA metrics**.
- Concepts: all-in hands-off workflow, cognitive debt/surrender, harness (guides + sensors), code quality / deliverability / operability, CD as operability harness, build discipline, deterministic scripts, guardrails-in-the-system.

---

*Video: https://www.youtube.com/watch?v=Gf9EwRYttmg — Transcript via yt-transcript.sh; outline generated from the transcript.*
