---
title: "How AI Fuels BrokerChooser's Growth - Alex Nasli | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Alex Nasli (BrokerChooser) on falling in love with impact not technology — three real AI projects (translation, the Nuri assistant, data collection) scored against scalable/workflow/simple."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# How AI Fuels BrokerChooser's Growth - Alex Nasli (Talk Outline)

> Alex Nasli (AI & data lead, BrokerChooser) — "the Skyscanner of brokers" — on how AI brought real **revenue/traffic/conversion**, not just cool tech. Core message: **fall in love with the impact, not the technology.**

---

## 1. The Framework & Context

- An ideal AI use case is **scalable**, **supports part of your workflow**, and **simple** (won't be true of all projects, but aim for it). BrokerChooser is **bootstrapped, 9 years old, profitable** (~€1M profit, ~900k visitors/month, 60 people) — freedom + reinvestment fuel innovation.

## 2. Project 1 — Translation (the big win)

- After ChatGPT, the board said "do something with AI"; a competitor's localization had brought traffic. They already do **horizontal scaling** (one template article × data points → ~100 broker articles); added **vertical scaling** (languages) → ~70 languages → **7,000 articles from one template** (~1M pages in January). Calibrate GPT (moving to Claude) with **LLM-as-judge** evaluation (closer to human judgment); shipped the first articles in **3 weeks** with a visible "AI-generated translation" disclaimer (user trust first). **Impact: doubled traffic — half now comes from translated pages.** Scalable ✓, workflow ✓ (no translators), simple ✓.

## 3. Project 2 — Nuri, the assistant

- A hackathon → a **RAG** assistant (limited to their knowledge base, LLM-as-judge). Three products: an AI search bar, a chat interface, and forum answers. Challenge: users tried to **hack the system prompt** (had to guard it). **Impact:** Nuri users convert much higher — but **few people use it**. Surprising fix: adding "AI" to the logo raised usage. Still not enough revenue → **on hold**. Scalable ✗ (low usage), workflow ✓, "simple" debatable (RAG isn't simple).

## 4. Project 3 — Data Collection (most innovative, hardest)

- They're data-driven (100 brokers covered, 3,000 exist; weeks per broker manually). Tried Perplexity/GPT-search, scrape+LLM tools (crawl4ai) — **no single solution works for all**; variety of brokers/websites and gated (login) data are the challenges. Built a **longer AI pipeline**: multiple slightly-different Perplexity collectors that flag inconsistencies for analyst review. Still research, but **believed to unlock big money** (scale 100 → 3,000). Not simple at all.

## 5. Learnings

- Sometimes it's **more UX than AI** (the logo tweak); building AI projects is **bumpy** (many redos/trial-and-error, especially data collection); and **talent is key** — university research groups failed; hiring good AI engineers (took ~6 months) far outproduced them. Q&A: **buy don't build RAG** for a small team (used Nuclia's end-to-end system); evaluate with LLM-as-judge (run multiple times and average for consistency); guard the chatbot with heavy prompting + test examples; Python for the AI/eval, but the translation eval hands off to a PHP backend via a simple API call.

---

*Video: https://www.youtube.com/watch?v=Toa_cy1Kb24 — Transcript via yt-transcript.sh; outline generated from the transcript.*
