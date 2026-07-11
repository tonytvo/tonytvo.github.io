---
title: "Maximizing impact: Measuring the ROI of GenAI in the SDLC - Bruno Passos | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Bruno Passos (Booking.com) on rolling out GenAI to 3,500 developers — moving past 'hours saved' to throughput metrics, replatforming a 14-year monolith, and the business challenges of adoption."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Maximizing impact: Measuring the ROI of GenAI in the SDLC - Bruno Passos (Talk Outline)

> Bruno Passos (product lead for developer experience, Booking.com) on rolling out generative AI to **~3,500 developers** and honestly trying to **measure its ROI** — "we're right at the beginning."

---

## 1. Booking's Culture & Debt

- Mission: the "connected trip" (hotels + attractions + cars + flights). Scale: 1.5M+ rooms/day, 3,500 devs, 2.8M CI pipelines/year. A ~decade of **ruthless A/B experimentation** ("9 of 10 experiments fail") built a hugely successful company but also **three giant Perl monoliths**, little automated testing (they validated via feature flags and became expert **firefighters**), and mountains of **tech debt** (dead code, features magically switching on → outages/vulnerabilities). The culture is now maturing (simpler site) — the GenAI team's mission is to **re-platform** the monolith into services.

## 2. Exploring GenAI with Sourcegraph/Cody

- Chose **Cody** (Sourcegraph) because their code-search product had **already indexed** the messy codebase (full context). Strategy: a real **partnership** (Sourcegraph engineers in the office living the problem), **targeted hackathons** on the hairy code first, and lots of **training material** (what's an LLM, prompting, giving context).
- **Measurement journey:** rejected the vendor's "hours saved" (surveys of ~tens of devs — "a pile of BS"). Built a KPI roadmap (short: MR review/debug time; mid: quality; long: dead-code detection, non-performant code, tech modernization). Early blockers: nobody used Cody for weeks (fixed with **training** — via **DX/getDX** Slack surveys with 92% response, the gap was *knowledge*); removed the single-LLM token cap and enabled **per-developer LLM choice**; a Sourcegraph **API layer in front of Cody** let them integrate it into Slack/Jira.

## 3. Results & Replatforming

- **By December 2024:** using **throughput** (before/after Cody), developers who used it **daily** (12+ days/month) shipped **~30% more MRs** that were **~70% lighter (less code)** — "what does that mean? We don't know yet" (quality is the next quest). Applied it to: mapping a **dependency graph** of the monolith (an ML estimate said migration would take **14 years**); **GraphQL** schema generation (300+ services, ~1.2M tokens — doesn't fit one context, so break it down); and IDE-integrated **code review**. **2025:** ~**40% of code** now has a Cody footprint; ethically **capped reporting at director level** (never individual, to avoid performance-review misuse). Vision: **self-healing services** (feed the CI pipeline to an LLM → fixes as MRs, shift CI "left" into the IDE).

## 4. Business Challenges

- **Devs didn't want it** (43–45% feel threatened — citing Cat Hicks) — the unlock was putting **VPs/senior directors** in a room to vibe-code apps in Windsurf, after which business units asked for the same. Tailor training to skill level (pre-work); **evaluating vendors** takes ~3 months (huge legal/security teams) so they built an **intake committee** and an evaluation **framework** (bare-minimum offering, how they measure ROI — no vendor could, and none know what reaches *production*). **Education is key**; they run quarterly hackathons, monthly GenAI-ecosystem posts, and partner with multiple providers (Cody, Windsurf, Cursor, Amazon Q, Google, GitLab) via **cohorts** to compare. Goal: replatforming from **years to months**; "today's code is no longer tomorrow's legacy." Not about replacing developers — about pairing each with a "principal-level" AI so they can focus on innovating in travel.

---

*Video: https://www.youtube.com/watch?v=zmj-KfvH2gE — Transcript via yt-transcript.sh; outline generated from the transcript.*
