---
title: "Reuven Cohen – Cognitum (Live Agentic Engineering) | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Reuven Cohen live-demos the 'Roo Stack' (Roo Flow / Claude Flow) — swarm-based, spec/ADR-driven agentic engineering — and Cognitum, contrastive vector intelligence for the physical world running on tiny devices."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Reuven Cohen – Cognitum (Live Agentic Engineering) (Talk Outline)

> Reuven Cohen (Toronto; ~30 years building, ~4 years "vibe coding") live-demos his **Roo Stack** and tells the story from open-source harnesses to **Cognitum** — AI infused into the physical world. Nick joins for demos.

---

## 1. "If agents are the workflow, silicon is the runtime"

- Anyone can now build anything — the **bar to build is asking the right question**. Quality is secondary *if you pick the right harness*. He built a harness (**Roo Flow**, formerly **Claude Flow**) encoding 30 years of what to do/not do around Claude Code.

## 2. The Harness: Roo Flow / Claude Flow

- Install via `npx roo-flow`; `init --force` scaffolds a **swarm environment** — many concurrent, collaborating agents (some on local models for cost) instead of one sequential thread → dramatically faster.
- **Spec-driven** development: the spec defines method, architecture, and practice, so non-programmers get an appropriate enterprise-grade architecture for free (or use it as a jump-off point). Everything is delivered as **plugins** = **agents + commands + skills** (markdown). Warning: skills are MD files → **prompt-injection risk**; be careful enabling **auto-update** on plugins you don't fully trust.

## 3. Architectural Decision Records (ADRs)

- The **ADR** is the basis of every complex build — an interconnected causal chain of decisions (metadata, status, context, why/what, consequences, alternatives, links to prior ADRs/phases). Agents reference and later **revise** ADRs, forming a decision **graph** that grounds the swarm.
- **CI Guard:** because AI *claims* things are secure/scalable but doesn't prove it, every build must pass every prior test in the **CI/CD pipeline** before publishing to NPM — catching breakage before users do. A **meta-package** of many small NPM packages limits the **blast radius** of a regression.

## 4. London-School TDD at Swarm Scale

- His **Spark** spec system lacked TDD; the key was a **recursive feedback loop**. He chose **London-school TDD** (scaffold → test cases → mock → functional → rebuild) — hated by devs because it's "the same work four times," but a swarm doesn't complain, and the forced iteration **catches AI slop** (looks-secure/looks-scalable-but-isn't).
- History: 2022 he began building thousands of tools; early swarms cost ~**$7,500/day** on RooCode/Cline until Anthropic's **~$200/mo flat plan** (Apr 2025) made unlimited swarms viable → **Claude Flow** became one of the first Claude Code harnesses (memory, scheduler, teams — much of which Anthropic later shipped natively). Being MIT-licensed, "you can't steal what I'm giving away." He co-founded the **Agentics Foundation** to democratize agentic engineering for non-traditional builders.

## 5. Cognitum — Intelligence for the Physical World

- A retro-futurist wooden device using **RF/Wi-Fi channel-state (CSI) fingerprinting**: signals permeate a room and minute material transitions are read to sense heartbeat, respiration, gait, brain-wave fluctuations — on a **double-A-battery, no cloud, no GPU**.
- **Contrastive / null-space** intelligence: model the *normal baseline* and only store the **abnormal** (the one person in 10,000 having a medical episode) → tiny storage, huge cost savings vs. monitoring everyone. Learns continuously (like a baby: cause→effect → trajectories → muscle memory) via a **graph+vector** interplay; **sublinear (<1 ms)** retrieval means less time → less energy → less entropy/noise → near-real-time prediction (e.g., anticipating packets faster than NY↔London latency; ~4 hours' warning before an epileptic seizure).
- Built in **Rust** (files <500 lines so he can *grok* them — "agentic engineering, not blind vibing"), compiled to **WASM** (runs in-browser, even a quantum simulator client-side) or via **NAPI-RS** (replacing Node's V8 runtime). **Sovereign AI**: data never leaves the browser → sidesteps GDPR/EU AI Act while still learning on personal/medical info. Use cases: disaster survivor triage, water-pipe leak detection, financial-signal separation, fall/dementia detection, real-time hearing-aid translation.

---

*Video: https://www.youtube.com/watch?v=_nB5r7FmCY0 — Transcript via yt-transcript.sh; outline generated from the transcript.*
