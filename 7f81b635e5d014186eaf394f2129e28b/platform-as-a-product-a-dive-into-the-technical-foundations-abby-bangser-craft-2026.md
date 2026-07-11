---
title: "Platform as a Product: A dive into the Technical Foundations – Abby Bangser | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Abby Bangser on treating internal platforms as software — a walking skeleton from frame to fleshed-out to future, API-first capabilities, marketplace contribution, and optionality."
type: "reference"
tags: ["softwaredevelopment"]
---

# Platform as a Product: A dive into the Technical Foundations – Abby Bangser (Talk Outline)

> Abby Bangser argues platform engineering underpins every successful engineering org (AI or otherwise) — and that we "let ourselves off the hook" by discussing product *thinking* while ignoring the **technical** foundations. **Internal tools are just software; treat them that way.**

---

## 1. Products Are Not Projects

- War story (a UK retail-banking team, ~10 years ago): a great product team hit **day-two** reality at go-live — change advisory boards vs. trunk-based development, first/second-line support, debugging without user data. **Products have a lifespan** (not a start/end), needing value + usability + **feasibility to support and evolve**.
- Platform engineering is entering the **trough of disillusionment** — which means it's succeeding past the silver-bullet hype into real nuance. Internal tooling teams are ~10–15% of eng **for a reason** (high leverage); unchecked **tech debt → decay** (cheap maintenance vs. expensive repair). "Plant the tree yesterday, but today is easier than tomorrow."

## 2. What a Platform Is

- A **uniform delivery mechanism** for internal tooling: one consumption model, things offered **as-a-service via APIs**. High cognitive load, so apply decades of software practice (it's often treated like untested infra engineering — Gregor/Dave Farley).

## 3. The Walking Skeleton (frame → flesh → future)

- **Walking skeleton / tracer bullet:** a minimal but **fully deployed** end-to-end slice to surface risks/costs early. Vision (e.g., a developer portal) = coherent experience of individual puzzle pieces.
- **Frame:** map the whole automation (not just IaC — approvals, security scans, auditing); expose a **contract/API independent of implementation** (Terraform/Helm are *structured inputs, not an API*); implement CRUD → a working capability service; put it in an **agnostic marketplace** (MCP server / portal / IDE plugin — API-first); and **market it** (LEGO's "base plate" branding).
- **Flesh it out:** test suites (one example per level, catch risks early in the feedback loop); operate it (adoption + ROI metrics, SLIs/SLOs, **game days/chaos** — the banking team ran twice-weekly game days); ship via real packaging (brew/Chocolatey) so users can upgrade; treat users as **second-party customers** (talk to them).
- **Finish the look (scale):** a **contributor model** so platforms don't become "new ops" — think **marketplace** (Etsy: build tools for experts to expose expertise, not build it yourself; inner-sourcing on *your* terms is offloading free labor); **reconciliation loops** (two-tier GitOps) to fight drift at infra *and* policy level; and real **optionality** by externalizing success criteria as **runnable tests against any infrastructure** (which also makes the platform's value visible: "here are the 100 tests — or get them free over here").

## 4. Takeaways & Q&A

- **Tech is the product**; bring quality/marketing/DevRel *internally*; build for growth, not features forever (Gregor Hohpe's "thinnest viable platform"). Contributing to a **CNCF "12-Factor for platform capabilities"** paper.
- Q&A: **golden paths** matter but build them from **golden bricks** (pickable pieces); **build vs. buy** is always a blend — **own your interfaces** (Backstage is a *UI*; don't put logic in it, technology will change); wrap Terraform in an API because implementations should change without users relearning tools, and to actually manage day-two updates/versions; product people resist updates when they can't **trust** them — earn trust with safe, non-breaking changes.

---

*Video: https://www.youtube.com/watch?v=VieEf9qbjAA — Transcript via yt-transcript.sh; outline generated from the transcript.*
