---
title: "Transforming Education: Applying AI to Universities - Zach Pendleton | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Zach Pendleton (Instructure/Canvas) on bringing AI to education — building teacher trust (smart search embeddings, AI nutrition labels), saving time (rubrics, the Ignite agent), and shifting from access to outcomes."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Transforming Education: Applying AI to Universities - Zach Pendleton (Talk Outline)

> Zach Pendleton (chief architect, Instructure / Canvas — used by 50%+ of US universities) on applying AI in education, where teachers first *hated* it.

---

## 1. The Problem

- Teachers are overworked and burning out (COVID doubled traffic overnight; ~80% of K-12 educators have considered quitting) while the world needs **70M new teachers by 2030**. Then ChatGPT let every student **cheat almost perfectly** overnight. AI-detection tools **don't work** (~50% accurate, defeated by changing a word or two); banning it (paper, one-on-one oral exams) just increases teacher workload. So instead: **empower educators to use AI positively.**

## 2. Building Trust

- Systems must be explainable, deliver clear value, preserve privacy and **teacher autonomy** (the "glue on pizza" AI-overview cautionary tale — and it later *cited its own mistake* as the source). Anchor models in **existing good data** (curriculum) to reduce hallucination.
- **Smart search** via AI **embeddings** (Cohere multilingual) chunked and indexed in Postgres with **pgvector** (reuses existing permissions/joins — no new infra). **Quantize embeddings**: float32 (~4KB) → int8 (75% smaller, ~96% accuracy) → binary (164GB vs 5TB, ~90% accuracy, enables Hamming distance). Search also powers **RAG** to steer models toward truth.
- **AI "nutrition facts" labels** (model cards in a familiar format: which model, region, data in/out/use), plus **feature flags** (some schools embrace AI, some ban it) and **regional model fallback** (EU/Asia data residency; build features that fail down to available models per region).

## 3. Saving Teachers Time

- Don't start with a chatbot/summary — target the workflows users **hate**. **Rubric authoring**: only 30% used rubrics (painful to create) → an LLM turns the assignment description into learning outcomes prefilled into the existing UI. **The Ignite agent** (an agentic teacher's assistant): connects to Canvas's ~**800 REST API endpoints** to query, generate, write back, and take action.
- **Tool-filtering pipeline** (dumping all 800 tools into one call = 21s, 165k tokens, ~$0.50 *before doing anything*): classify "does this need a tool?" (tiny model, yes/no) → classify tool **classes** → generate a **step-by-step plan** → map to real tool calls via search (chaining outputs→inputs) → a **confirmation step** for destructive/write actions. MCP is promising but **doesn't solve tool-filtering** — it makes it more necessary.

## 4. From Access to Outcomes

- 2,000 years of educational technology (slate, chalkboard, books, radio, internet) was about **equity of access** — but didn't guarantee the recipient could *use* the content. AI shifts education from **access to outcomes**: content in the right format at the right time (skill/journey planning; NotebookLM turning coursework into an interruptible **podcast**; oral-conversation assessments mapped back to scores). Teachers are still needed (LLMs aren't reliable; most students need guidance/affordances, not just answers). The future: **decentralized innovation** — an educator + an LLM, scaled/safeguarded by platforms. Q&A: Cohere embeddings + Anthropic Claude; combat cheating with **honest conversations** and **project-based work** (raise complexity like a calculator did for math); build **probability-based test sets** to guard against model/prompt drift ("otherwise prompts become a vibe-based nightmare").

---

*Video: https://www.youtube.com/watch?v=owhWhxXg9JI — Transcript via yt-transcript.sh; outline generated from the transcript.*
