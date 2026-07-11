---
title: "AI Won't Eat Your Stack – Randy Shoup | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Randy Shoup on why free code generation won't let us rewrite everything — the psychological, economic, and completeness fallacies behind the 'SaaSpocalypse', and predictions that components and services win."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# AI Won't Eat Your Stack – Randy Shoup (Talk Outline)

> Randy Shoup (his ~11th Craft) on why we **won't rewrite everything just because code generation is free** — AI simply forces us to remember software fundamentals. Framed around the "**SaaSpocalypse**" (Terminator parody): after Claude Opus 4.5 (Nov 24, 2025), ~**$300B** was wiped off software stocks on the fantasy that anyone can now just regenerate all software.

---

## 1. The Fallacies

- **Psychological — Dunning-Kruger** (to a newcomer everything looks trivial; real understanding brings the "valley of despair") and **inappropriate generalization** (one black swan → "all swans are black"; a vibe-coded calendar app is ~10 orders of magnitude simpler than a global distributed system — a paper airplane vs. an A380).
- **Economic — "free just like a puppy":** tokens are a **scarce resource** (a third-party module is like "cached tokens"), plus **maintenance cost** (every line is a *liability* living 10 years, not an asset), **opportunity cost**, and **cognitive cost** — companies exist to solve *particular* problems, not all problems.
- **Completeness:** an automated learning loop needs an **objective success function with ground truth** (else the LLM reward-hacks), a deterministic/isolated/**unexploitable** eval environment, and convergence monitoring. Reproducing SaaS from its outside API is insufficient — **every bug must violate the spec**, and specs evolve (waterfall doesn't work). Examples of "meets the spec but doesn't": **cargo-cult** radio dishes, Blue Origin's pad explosion, and the Apollo guidance system we *still* can't reproduce 57 years on ("**there's no compression algorithm for experience**").

## 2. Implications

- **Glue code is free** — vibe-coding adapters between protocols/formats/ecosystems has little value; the value is in **what you connect**. Real value = **domain expertise + operational experience** hidden behind clean APIs (US sales-tax calculation, moving €1 through the banking system — simple interface, Byzantine implementation), plus **efficiency** and **non-functional requirements** (security, scalability, compliance). "**Code is the truth — but only at this instant**"; it doesn't capture the discarded alternatives or the domain reasoning.
- **Modular components** combine orthogonally for **geometric** value (Ackoff: "a system is the product of its interactions"). AI *loves* clean abstractions (smaller context window, fewer output tokens, fewer things to break) — "isn't this just **DDD**?" Yes: bounded contexts = modules, anti-corruption layers = adapters, aggregates = safe units of change.
- **Option value** (Carliss Baldwin, IBM 360 → ~25× value): value scales with #modules × #parallel experiments ÷ time-per-experiment. When big SaaS **unbundles** into smaller independent chunks, huge value is released.

## 3. Predictions

- **Components win** — agents make combination/recombination free, so expect more, smaller modules; assembly moves **from vendors/consultancies to customers** (e.g., Salesforce's April 2026 **headless/MCP/CLI** interface after 30 years).
- **Services win** — you *can* see the source of MySQL/Postgres/Valkey/Kafka, but you still don't want to **operate** them; managed RDS/Confluent value is unchanged by AI codegen (specialization is efficient).
- **Smaller players win** — AI-native teams with **less legacy overhang** move, learn, and iterate faster and "skate to where the puck is going" (Gall's law: complex working systems evolve from simple working ones).
- Bottom line: thin layers over other things aren't interesting; **deep, highly encapsulated capabilities win.** The era where "software got a premium just for being software is not coming back."

## 4. Q&A

- **Geometric value:** combining 5×5 things → ~n² combinations (eBay/PayPal split in 2015 freed each to combine with others). **Deterministic vs. non-deterministic integration:** use AI's non-determinism to **generate something deterministic** — an "AI cron" is both unreliable and absurdly expensive (like asking an intern to hand-type a command daily instead of writing a script). **Internal tooling:** mission-critical stays valuable; "nice-to-have" tools are the ones people will spend tokens to replace.

---

*Video: https://www.youtube.com/watch?v=DJ0eu2EufmI — Transcript via yt-transcript.sh; outline generated from the transcript.*
