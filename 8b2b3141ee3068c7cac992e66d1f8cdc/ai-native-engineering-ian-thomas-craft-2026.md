---
title: "AI Native Engineering – Ian Thomas | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "How Ian Thomas's team at Meta Horizon drove AI-tool adoption from ad hoc to 95%+ — via a community, a six-dimension maturity model, safe spaces, and concrete high-ROI patterns."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# AI Native Engineering – Ian Thomas (Talk Outline)

> Ian Thomas (Meta, Horizon Experiences / Reality Labs) on the journey from a leadership "5x productivity" challenge to a mature, 95%+-adopted AI-native engineering practice — and what actually made it work.

---

## 1. The Challenge & Starting Point

- Leadership set an (arbitrary) **5x productivity** vision: engineers as builders → supervisors of agents → explorers/innovators, by **reducing toil** (~50% of work was ops overhead).
- Early **ad hoc adoption** gave poor outcomes: people couldn't match tool to problem; out-of-work experimenters advanced faster; leadership couldn't measure ROI. Nowhere near 5x.

## 2. Context: Scale & Culture

- Meta's **monorepo** is enormous (500M+ lines of Hack, 100M+ diffs); Horizon spans Hack, C++, JavaScript/React Native/React VR, and C# (Unity).
- Culture is a **social graph** — "**code wins arguments**," so change spreads **virally** (demonstrate value), not by top-down mandate.

## 3. The Adoption Program

- Anchored on the existing **Engineering Excellence** program (implementation quality, production excellence, better engineering) — low-risk places to experiment with motivated champions.
- **Start small → safe space → permission to fail.** Avoid a "theatre of success" so people can be vulnerable ("I don't know what I'm doing, help").
- Built **community** with a deliberate focus on **belonging** (lean coffees, brown bags, informal support) — intangible but essential; grew the community **40x**, active users to **80%→95%+**.

## 4. The Six-Dimension Maturity Model

- Dimensions (workflow integration, prompting/context engineering, process integration, team, individual, …), five stages **Sit → Crawl → Walk → Run → Leap** (0-indexed, naturally).
- Delivered as a **self-assessment workshop** teams run themselves: context-specific, in a safe space, repeatable over time — and the **dialogue matters more than the scores** (dot-vote anonymously, then discuss). Feeds novel practices back into the framework.

## 5. Recurring Concerns Surfaced

- **Trust** ("how do we know the code is good?"), hallucinations, poor architecture, **huge diffs** ("am I just reviewing AI slop?").
- **Test slop** — easy to generate many worthless tests. Response: engineers built an **anti-test-slop CLI** encoding ~15–20 "why is this bad?" rules; it went viral and is now part of **Meta-wide CI** on every change. Small idea + support → far, fast.

## 6. High-ROI Patterns

- **Data-mining for test coverage:** teach AI to read internal tables to find the most valuable code to test → ~half-a-week of work down to **3 hours**, ~94% coverage (target was 70%), largely autonomous.
- **Legacy refactoring:** engineer drives architecture, AI does the legwork on a heavily-forked Unity codebase → ~**50% time reduction**, less machine lock-up, big tech-debt cut.
- **Domain knowledge via MCP:** a former skeptic built an MCP letting the model query thousands of user-generated "worlds" to test changes — also unlocked on-demand/parallel environments (off the single beefy Windows box).
- **Agentic code mods:** AI decides fuzzy quality issues that rigid if-this-then-that codemods can't, and **explains why** the change is needed. Now a company-wide pattern.

## 7. Platforms as the Glue

- Success rode on **mature platforms** with hooks to inject agentic workflows at scale (DRS risk scoring for diffs; **Confucius**, a LangChain-based platform to build agents fast). Example: an agent that flagged diffs still touching the old Unity runtime during a migration — hours of manual work reduced to a daily chat ping.

## 8. Lessons

- **Start small**, anchor on a framework, invest in **community** (intangible but real).
- Watch the **new bottleneck** (code review) — theory of constraints.
- **Full autonomy was discounted** — human taste/judgment still needed; automation shines for codemods, test improvement, bug triage.
- **Adoption is a vanity metric** — measure **outcomes, not output** (e.g., incidents per 1,000 changes).
- **Bottom-up first, then leadership** — top-down mandates without education breed rejection; leadership support after a groundswell accelerates.
- The future is **more engineering at a higher level of abstraction**, offloading toil to focus on what only human insight/taste can do.

---

*Video: https://www.youtube.com/watch?v=F5oGUwdPVfY — Transcript via yt-transcript.sh; outline generated from the transcript.*
