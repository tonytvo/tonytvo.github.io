---
title: "Humans Steer and Agents Execute – Ryan Lopopolo | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Ryan Lopopolo on harness engineering as just-in-time context delivery — encoding non-functional requirements as executable guardrails and reviewer agents across before/during/after the run."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Humans Steer and Agents Execute – Ryan Lopopolo (Talk Outline)

> Ryan Lopopolo on **harness engineering** — a new way of doing software engineering that "burst into the world this year." Origin: mid-2025 he tried to get early Codex CLI to reproduce his own work (tailing Slack alerts, responding to pages), positioning himself as a *tool the model asks for help* — birthing the pattern "the model can do the full job; it's on us to make that possible at quality."

---

## 1. The Model Is Good Enough — Extract the Good Parts

- Opus 4.5 / GPT-5.2 were the "singularity" for agents; disruption compounds with each point release, so **re-evaluate your priors monthly**. Models *have* seen how to build good software; our job is finding novel ways to **extract the good parts**.
- **Code is now cheap** (the diff production function collapsed). So code is an **abundant asset** to remove friction, not a scarce thing to protect.

## 2. What's Still Scarce

- **Human time** (why we built orgs around planning/backlogs/alignment), **attention** (in the model, attention must sum to 1 — don't frazzle it with rule dumps), and **context window** (auto-compaction helps but keeps blitting working memory). Agents have **no durable institutional memory** — they re-onboard every task — so teams must **write down what "a good job" means**.

## 3. Encode Non-Functional Requirements

- Every PR encodes hundreds of tiny decisions (the non-functional requirements). You can "**just demand the model not produce slop**" *if you can articulate why something is slop*. Turn each divergence into **written guardrails**, **custom linters**, and **adversarial reviewer agents** to narrow output toward the aligned "golden thread." The recurring example: a missing **retry + timeout** that pages you in production — encode it once, eliminate it forever.
- **The codebase itself is prompts:** migrations that remove divergence make next-token prediction easier → good use of tokens.

## 4. Harness Engineering = Context Delivery (three phases)

- Counter to DevOps "shift left," with LLMs you can **start at the far right**: a bad PR is cheapest to fix by trashing and re-rolling. Then shift left progressively: write it in **docs** (15 named "golden principles" files) → tell the agent up front where to look → give guardrails to **reviewer agents** in CI (a matrix job) that leave PR comments enforced by a static check.
- **Before the run:** a *slim* `agents.md` grounding what/why/who + a **static operating loop** that teaches the agent to *classify the work first* (not a giant rule list — preserve creativity, "let them cook").
- **During the run:** don't interpose with blocking hooks (thrashes attention). Let its natural tool-calls/tests **inject error messages** (say what/why/where-to-fix) so it self-corrects.
- **After the run:** validation is easy — judge the artifact against executable guardrails. Treat the model's job as **convincing you it's mergeable**: bug-repro videos, staging logs, screenshots vs. Figma (computer use makes this feasible).

## 5. Team Practices & Results

- `@`-mention Codex at the bottom of a Slack post-mortem → "update guardrails X, Y, Z" → a 3-bullet diff. The agent is the **entry point** to all work, so documentation investment compounds (a new product-minded hire documented critical user journeys → reviewer agents now build manual-QA plans and require visual artifacts).
- **Distillation pipeline:** slurp all Slack/PRs/review comments/session logs — *especially every human interruption* — as signals of missing context; point LLMs at the corpus to propose new lints/tests/migrations (e.g., banning `unknown`/untyped types outside two parse points killed a class of `isPlainObject` misbehavior).
- Built a **~1M-line** repo over 9 months, **wrote none of the code**, high velocity without reviewing most of it. Reviewer agents in CI **bias toward merge** but block P2+; P3s get picked up by async refactoring loops. **Capture steering signals; defer low-priority work** (unlike with humans, where you'd fix-it-now because you'll never return).

## 6. Q&A

- **Keeping docs aligned:** ~1–2 weeks after each model release, watch for thrashing (5.3→5.4 followed "build must pass" too literally) and reword; a daily outer-loop agent flags conflicts/obsolescence against the code as ground truth. **Context-window scaling:** don't stuff docs into context — keep `agents.md` slim, document the *shape* of the docs tree, let the agent stochastically re-page. **Human review:** headless/cron PRs require a human; on-desk agent PRs need only the author's sign-off; plan-worthy (a week's work) changes require **two humans on the plan** (the plan is the instruction set).

---

*Video: https://www.youtube.com/watch?v=ORObF5UuBew — Transcript via yt-transcript.sh; outline generated from the transcript.*
