---
title: "Get your systems to define the story of your organization – Kovács & Hermesz | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Kovács & Hermesz on capturing organizational knowledge as ontologies and temporal knowledge graphs, augmenting humans before agents, and building a multi-layer memory engine — surveillance or observability?"
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Get your systems to define the story of your organization – Kovács & Hermesz (Talk Outline)

> Kovács (chief AI strategist, AI Enablement Academy) and Clara Hermesz (ex-Meta/Uber, global upskilling) on capturing what your organization actually knows/does — for a human-and-agent workforce. *"Surveillance, or hyper-optimized operational excellence?"*

---

## 1. The Problem Space

- Knowledge bases are rarely updated; most employees can't precisely describe their job, the standard processes they follow, or how their work connects to company goals. **"Knowledge is not the superpower — *sharing* knowledge is."**

## 2. Why Scale Matters — Blast Radius

- Adding people or **swarms of agents** multiplies output, but **impact radius = blast radius**. Not knowing how work is done operationally becomes a matter of **survival**. Old capture (wikis, PRs, exit interviews) is broken; best people leave with the know-how.

## 3. The New Way — Ontologies & Temporal Knowledge Graphs

- New surveillance-flavored experiments (Meta keylogging to "teach the AI," Benioff reading company Slack DMs) get revolts. Instead: **structure your data** as **ontologies** (an org-level "type system" for business facts) to prevent **semantic drift** — an operational risk when humans/agents act on missing/stale info.
- Build **temporal knowledge graphs** (time matters), establish **provenance** ("who created it, is it true/current/relevant?"), and apply data standards like **FAIR** (findable, accessible, interoperable, reusable) to business operations.

## 4. Bringing Humans Along

- Tension: what works for agents (observability, constant modification) is **surveillance and change** for humans. Solution: **radical transparency from the top** about how AI is used. But be honest — at work, everything is already logged (Slack, email, CrowdStrike). If you run the show, **organize** that information rather than pretend it isn't there.
- Future/soft skills (the hardest): systems thinking, critical thinking, growth + experimental mindset, judgment, clear direction, accountability. Build them in **spaces** — learning circles, show-and-tells, lunch-and-learns, hacker spaces.
- Fight resistance with **practical, relevant enablement** (AI is currently "extra on top" of work). **Augment humans first** (judgment/governance/accountability, human-in-the-loop) before automating; then **extract knowledge** into chatbots/skills/plugins. **Access ≠ enablement** — don't have five engineers build the same skill; **centralize** what everyone uses.

## 5. Audit, Eliminate, Then Automate

- Centralization is a chance to **eliminate → simplify → automate** (old RPA wisdom) — including, tough truth, roles you don't need (have answers ready or employees revolt). Decide what to cut via **input/output metrics** and a **design-thinking flywheel** (empathize→define→ideate→build→test, dozens of tiny experiments/day).

## 6. "Memory Is All You Need" — the Engine

- Business data is messy/multimodal (audio, video, meetings, tables). Build **ingest/egest** and a **multi-layer, multi-speed memory engine** with **recency decay**. Components: a **small-time-model ingestion** system (per-source parsing/chunking/metadata/quality); **hybrid retrieval** (BM25 for exact terms + dense embeddings for meaning); **fusion + re-ranking**; **token economics** (cheap wide net first, expensive models on the narrowed set); **permission-first** memory (who can see/act, prompt-injection, human-in-the-loop); **temporal validity/decay**; and **garbage collection** (dedupe by hash, canonicalize entity IDs, prune, run evals/benchmarks). (They open-source the spec.)

## 7. Redesigning the Workforce

- At scale, **communication breaks first**; smaller teams return — the **hipster/hustler/hacker** (Block's product/builder/player-coach). Examples: **Klarna** fired ~700 too early (costlier than the saving); **IKEA** reskilled support into interior-design help (~$1B extra revenue). Their own engagement: across a 5,000-person client, 13 functions, they trained **40 AI champions** (product/builder/change-agent triads; the all-in-one "unicorn" is rare).
- Adoption fails at **bottlenecks** (engineering races ahead; product/support/GTM don't). The real bottleneck isn't technology — it's **the human in charge deciding not to bring people along**. So: **is it surveillance? No — observability.** "Treat your system as a customer and listen to it; AI is a tool toward business excellence, not the goal."
- Q&A: yes, companies can be **over-optimized** (catch it with high-frequency design thinking); employees can opt out of monitoring **with consequences**; the biggest resistance is **fear of the unknown** and **non-transparent measurement**, not measurement itself.

---

*Video: https://www.youtube.com/watch?v=G2PdKKYzrH8 — Transcript via yt-transcript.sh; outline generated from the transcript.*
