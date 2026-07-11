---
title: "Taste: The main advantage in AI – Tejas Kumar | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Tejas Kumar on taste as trainable, corrected pattern-matching — where it comes from, how to train it (immersion + cues + corrective feedback), and bringing taste to AI via streaming and MCP apps."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Taste: The main advantage in AI – Tejas Kumar (Talk Outline)

> Tejas Kumar (IBM DevRel; HCI background) argues that when *anyone can make an AI approximation of anything*, **taste** is what separates value from **slop** — and it's a trainable skill grounded in research.

---

## 1. Where Taste Comes From

- Nobody is born with taste, but we're born with its precursor: **pattern-matching** (babies: "if I cry, I'm fed"). The flaw: we assume the **easy pattern is the right one**, which produces bias/prejudice.
- **Taste = pattern-matching, corrected by science.** Working definition: *a **trainable skill** where we **tacitly** (gut feeling) judge quality against **external standards** — not internal bias.*
- Examples: counterfeit-money experts train on **real money** (know the genuine so well the fake is obvious); a creative director "just knows" something isn't centered (font metrics) via immersion in aligned things; musicians hear an off note via **relative pitch**.

## 2. Why It Matters

- Taste raises **perceived value → profit and purchase intent** (Apple's titanium/glass close-ups). Personally, it's the difference between making slop and making considerate things.

## 3. How to Train Taste

- **Recipe (Kahneman & Klein, 2009):** **immersion + valid cues + corrective feedback.** Immersion alone → echo chamber; +cues → self-appointed judge; you need **authoritative corrective feedback** (plus **humility**).
- **Externalize a standard** (Dieter Rams' *Ten Principles*; Jony Ive studied it) — write down your values/taste and check work against it.
- **Cross-pollinate** (Jobs' typography class → Apple).
- Taste doesn't just judge better, it **perceives differently**: juniors critique the *button*; seniors critique the *environment around it* (does it load on a slow network? below the fold?) — like an AI *harness* controlling the environment. Standards on the web: performance (INP, LCP, CLS), accessibility (WAI-ARIA, WCAG), and **"time to value"** (Google's "milliseconds make millions").
- **Pixar's Brain Trust:** bring "ugly babies" (unfinished work), **diagnose not prescribe**, **no hierarchy** — the full immersion + cues + corrective-feedback loop.

## 4. Bringing Taste to AI (demos)

- **Streaming:** waiting 4.6s for a full LLM response feels awful; **streaming tokens** (pipe the response body through a `TextDecoderStream`, append deltas) feels better *even when total time is longer* — **time-to-value ≠ time-to-completion**.
- **MCP as "bring the info to my house":** the web makes you visit someone else's site (cookie banners, carousels). An **MCP server** (~100 lines) lets Claude/ChatGPT fetch just the data ("when is Banjo's talk?") — but you **lose the brand/taste**.
- **MCP apps:** register an HTML resource (`text/html+...mcp-app`) so the server ships **branded UI** rendered inside ChatGPT — data on your terms *with* the author's taste preserved. "Bringing taste back into otherwise tasteless slop."

## 5. Close

- Taste begins as pattern-matching, goes wrong via unconscious bias, and becomes quality when refined by external cues + corrective feedback. (IBM's open-source **open-rag** as their attempt to do this tastefully.) "Go create beautiful, tasteful things." Q&A: yes — teach students by reading/critiquing good code and systems (Montessori-style real cues).

---

*Video: https://www.youtube.com/watch?v=VlKTUq0pdL0 — Transcript via yt-transcript.sh; outline generated from the transcript.*
