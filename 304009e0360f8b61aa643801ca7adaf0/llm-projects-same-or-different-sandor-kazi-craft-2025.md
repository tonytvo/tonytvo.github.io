---
title: "LLM projects: same or different?! - Sandor Kazi | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Sandor Kazi (EPAM) on how LLM projects differ from normal software delivery — reproducibility, fuzzy testing, data that 'contradicts language,' agents for context, Python constraints, and cost control."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# LLM projects: same or different?! - Sandor Kazi (Talk Outline)

> Sandor Kazi (data solution architect, EPAM) — a technical, warning-laden tour of what surprises software-development-background teams when they start building with **LLMs**. Framed around functional and **non-functional requirements**.

---

## 1. The Two Underlying Problems

- **Misalignment** between what the tool *does* (predict the next token) and what we *use it for* ("cutting cake with a chainsaw"). And LLMs give an **adequate solution quickly** — which lulls you before the hard, non-obvious parts appear.

## 2. Cross-Cutting Themes

- **Consent & adoption:** consider legal/moral use (can you feed a customer's whole codebase to an online LLM?), and **educate users** on what data goes in/out.
- **Reproducibility (key everywhere):** you must be able to recreate a session's exact context in a totally different session — otherwise UAT bug reports become unreproducible "hearsay," and "it should *never* say X" requirements are unenforceable.
- **Control:** vague "let's use AI" ideas crystallize into hard rules ("never give legal advice") — total control pushes you toward **programmatic switches** around the AI's decisions; identify what to program vs. what to leave to the AI. **LLM-as-judge** to validate generated content (but "who watches the watchmen?").

## 3. The Hard Parts

- **Python or not:** Python is most convenient for LLMs, but some customers forbid it in production (no monitoring, dependency-chain policy) → rebuild in Java with fewer integrations.
- **Testing:** you can't just assert input→output (if you could enumerate that, you wouldn't need an LLM). Two paths: **fully determinize** the LLM (kill probabilities/seed — but lose creativity) or **fuzzy testing** (accept an error barrier — e.g. 60% green). Fuzzy testing invites trouble: providers **delete model versions** (green→red→you're down), and **TDD's nice convergence breaks** on larger codebases (great for writing tests and small changes, painful when an LLM edit breaks concepts you didn't internalize).
- **Data — "data contradicts language":** the classic trap — a `stock_type` column with values `new/used/certified/refurbished`. A user asking for a "used laptop" semantically means certified/refurbished too, but the model filters `stock_type = 'used'` and drops them. Because it's a *language* model, if your data contradicts language, no amount of prompting fully fixes it — you must **restructure the data** (e.g. `stock_type = used` + a `used_details` column), which is brutal near a deadline with terabytes to transform.

## 4. Providing Context & Cost

- **Context options:** prompt (simplest), **fine-tuning / training** (expensive, often infeasible; intermediate options like adding a few layers), and **agents** — specialized, focused scopes that fit more relevant info per interaction and shrink the test/adapt surface. **Data quality** underpins all of it.
- **Cost:** measured in **tokens/minute**; runtime *and* initial costs (indexing/embeddings mean discontinued models force full re-indexing). Can you use a **cheaper/mini model**? Dev-mini vs. prod-full is a real but risky compromise (different behavior). Usage is **unpredictable**, so you must **limit usage to limit cost** without breaking UX. Q&A: prefers the **UV** package manager; LLM-as-judge is genuinely hard (same-model judges pass their own errors, cross-model judges create false positives — you still manually check).

---

*Video: https://www.youtube.com/watch?v=pdRZw2rlY6Q — Transcript via yt-transcript.sh; outline generated from the transcript.*
