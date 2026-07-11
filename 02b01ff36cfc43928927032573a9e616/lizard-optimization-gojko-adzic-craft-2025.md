---
title: "Lizard Optimization - Gojko Adzic | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Gojko Adzic on growing products by studying 'lizards' — users who misuse or exploit your product — reframing bugs vs. features as expected vs. unexpected, and the LZRD loop for unlocking growth."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Lizard Optimization - Gojko Adzic (Talk Outline)

> Gojko Adzic (author; builds his own products) on making products grow like crazy by applying observability/exploratory-testing thinking to product management — studying users who use your product in ways you never expected.

---

## 1. Bugs vs. Features → Expected vs. Unexpected

- Building your own products makes some decisions easy but brings customers directly to you (ChatGPT hallucinating URLs → "broken" complaints; the challenge is **retaining** the customer it created). Two revealing cases: a user **too smart** (a forex rounding exploit that cost £20k) and users **too stupid** (someone loading the software on a **fridge** with a Samsung screen — which, once made touch-friendly and keyboard-optional, unlocked huge COVID-era growth).
- Reframe: not right/wrong (whoever "pays for it") but **expected vs. unexpected**. A 2×2 of *did the product do what you expected × what users expected* gives good features, bugs, and two interesting corners: **mismatches** (Kat Holmes — a gap between design and users' capabilities/environment) and **exploits** (people getting unexpected benefit). Both are **product opportunities, not things to fight** (Haier's washing machines returned because farmers washed potatoes in them → a new potato-washing-machine market).

## 2. Why Lizards Matter

- Scott Alexander's **"lizardman constant" (~4%)** — a chunk of users you'll never understand. Figure out what the lizards are doing and you make the product better for everyone. **PayPal** grew from a Palm-Pilot crypto demo website (1.5M users on the "dummy" site vs. 12k on the app) — they stopped fighting it and rebranded. **Retention is exponential** (Amy Gallo/HBR: +5% retention → 25–95% more profit), and the 4% lizards are a big chunk of it.
- His own product (PowerPoint → AI video): a "blank PowerPoint" bug was a lizard extracting **audio tracks** → he built a document-upload path → months later **124k audio files/day vs. 264 videos** (3 orders of magnitude growth from letting lizards do what they wanted).

## 3. The LZRD Loop

- **L — Learn how people misuse the product:** use observability/support tools for product intelligence; **log every error condition** (found people uploading APKs, PNGs of handwriting, and **SRT subtitle files** — the subtitle case, ~2.5 hrs of work, became his most profitable feature when an enterprise needed 200k videos translated to 50 languages).
- **Z — Zoom in** on one behavior change consistent with strategy now (the *5 stages of growth* from *Lean Analytics* to set targets *and* guardrails; escape Kat Holmes's **"suck zone"** fast — got onboarding to ~30s). 
- **R — Remove obstacles** to user success (detect "Hindi text → Irish voice" and suggest voices that *can* read it — huge growth). 
- **D — Detect undesirable effects:** the Hindi fix drove growth but **99.9% free users** (near-bankruptcy) → blocking India then VPNs surfaced real paying customers on VPNs (people under surveillance, "too spiritual for regular internet") → a free-user VPN block that still let commercial users through added ~25% profit. **Solve for one, extend for many** (Kat Holmes) — never per-lizard hacks. Tighten the loop between **support/observability and product**.

---

*Video: https://www.youtube.com/watch?v=_ch7LvVFPYg — Transcript via yt-transcript.sh; outline generated from the transcript.*
