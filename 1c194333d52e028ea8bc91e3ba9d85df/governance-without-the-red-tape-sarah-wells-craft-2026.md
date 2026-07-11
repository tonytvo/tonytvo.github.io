---
title: "Governance Without the Red Tape – Sarah Wells | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Sarah Wells on governance that speeds teams up — why change advisory boards don't work, and how foundations, technology choices, and automated guardrails embed safety into the way you work."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Governance Without the Red Tape – Sarah Wells (Talk Outline)

> Sarah Wells (ex-Financial Times platform lead) reframes governance — "the principles, practices, and tools that help teams make consistent, informed, safe decisions" — as something that **speeds you up, not slows you down**, especially now that AI amplifies both threats and code volume.

---

## 1. Governance Has an Image Problem

- Governance is remembered as a **gate** (fill out a form to release). Example: **Change Advisory Boards**. At the FT she went from **12 releases/year → 20,000** by changing governance. Accelerate showed a decade ago that **external approval doesn't improve stability** — the FCA found **93% of major changes get approved** (some firms rejected none all year), with ~3.8% still failing post-CAB. CABs slow you down without stopping anything.

## 2. Why We Now Need Governance

- **External threats accelerated by AI:** NPM supply-chain attacks (chalk/debug — 2.6B downloads/week), self-propagating token theft; average **breakout time ~29 min** (shortest 27s), the first largely-AI attack, **87%** of orgs hit by AI-powered attacks in 2025, AI phishing **~60%** success (4× traditional). Could you even tell you pulled a compromised dependency?
- **AI transforming your code:** ~90% of teams use AI tools, ~42% of committed code is AI-generated, yet only ~45% have formal AI policies, ~35% use **personal accounts** (shadow AI), and **96% distrust AI code but only ~48% verify**. Three challenges AI worsens: **ownership** (the committer may not understand the code), **review volume** (you won't read 8,000 lines → code review as bottleneck fades), and **security** (Veracode: models introduced a known flaw in ~45% of tasks).

## 3. Good Governance = "Yes, Safely"

- The problem is *implementation*, not image — governance shouldn't be 43 documents nobody reads (or knows when they change). DORA's high-performance capabilities are mostly about **knowing what's happening** (version control, streamlined approval, monitoring, fast feedback). Goals: **clarity** (engineers want to do the right thing; make it obvious), **consistency** (automate — scripts, not agents, do the same thing every time), **alignment** (autonomy isn't enough — one team builds a bridge, another a tunnel).

## 4. Three Practices

- **Foundations — know your estate:** a **service catalog** (a spreadsheet/Confluence page is fine to start — who owns this service?); **change tracking** (the FT's open change API + feature-flag tracking); **SBOMs** (only ~11% generate them for everything; EU Cyber Resilience Act mandates them, reporting from Sept, in force Dec 2027). Also surface **shadow AI**.
- **Choices — smart technology decisions:** "choose boring technology" (Dan McKinley); a **Tech Radar** (adopt/trial/assess/hold); a **Technology Governance Group / architecture advice process** (Andrew Harmel-Law) where **work happens before the meeting** (the proposer talks to affected people; you must read the docs to participate) — legitimate path for change, shared understanding, recorded decisions.
- **Guardrails — automate the policy:** distinguish **policy** (high-level intent) → **standard** (actionable) → **guardrail** (the automation that makes the right thing easy). Bake into the **paved road / CI pipeline**: an engineering **checklist** (Gawande's *Checklist Manifesto* — only for easily-forgotten steps), change/release logging, **Sigstore** (sign container images), **SBOM generation**, **SLSA** (provenance), **OpenSSF Scorecard** — turning rules into **visible signals** (the FT's "System Operability Score" made teams competitive to improve run books). Ramp rules up gradually; "keep weeding the garden." For AI code: anti-pattern scanners, tagging AI-written code, and **hooks** to deterministically run scripts (e.g., `make pre-push`).

## 5. Getting Governance Right

- "Manual code review was never as rigorous as we told ourselves." **Progressive delivery** (canaries, gradual rollouts, automated checks) replaces CABs — bureaucracy → automation. AI doesn't change what good governance is; it makes it **more urgent** (friction can now be **vibe-coded away**, and *anyone* — even a customer-success manager building a Chrome extension — can now ship code). Good governance is largely **invisible**: helpful automation, clear guidelines, self-service. Q&A: agreed that steering agents via **harness engineering** may be easier than upskilling humans on secure coding.

---

*Video: https://www.youtube.com/watch?v=Hmgq1511YHA — Transcript via yt-transcript.sh; outline generated from the transcript.*
