---
title: "Is it really that expensive to build an AI system today? – Ivan Petrović | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Ivan Petrović breaks down the true cost of building AI systems — infrastructure, data, talent, maintenance — with a real media-monitoring case study and optimization strategies."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Is it really that expensive to build an AI system today? – Ivan Petrović (Talk Outline)

> Ivan Petrović on the *real* cost of building AI systems — beyond tokens — and how to reason about it, illustrated with a media-monitoring case study.

---

## 1. "Expensive" Depends on Your Side

- An OpenAI "token billionaire" spends thousands/day for free; a CTO paying the bill says it's too much. Cost boils down to **four pillars** regardless of what you build: **infrastructure, data, talent, maintenance**. ~30% of enterprise POCs survive past proof-of-concept.

## 2. Infrastructure

- **Tokens get cheaper** each generation (GPT-3.5: $20 → ~7¢/M in 2 years) — but the *newest* model always costs ~$20/M. **GPUs** are cheaper to rent, but one GPU serves limited users, so **scaling multiplies cost**. Hyperscalers build data centers mostly to **accommodate bigger models + more users**, not to scale down cost.

## 3. Data

- RAG systems are "a giant knowledge base," and **transforming/pre-processing data is 60–80% of the effort** ("garbage in, garbage out" still holds). POCs excite, then **scaling to all data** hits wrong formats, weak parsers, and vendor **connectors** (SharePoint/Atlassian) you don't control.

## 4. Talent

- Someone must build it: upskill internal devs (courses), hire externally (expensive), freelancers, agencies/consultants, or outsourcing — each with downstream cost.
- **AI enablement J-curve:** hype → trough → stabilization. AI coding tools help mostly in **greenfield/boilerplate**; on enterprise systems with thousands of files/hundreds of repos you can't ingest everything, and **trust erodes** when you're not the domain expert (Claude Code editing an NPM package to "fix" a front-end).

## 5. Maintenance

- Hidden costs dominate: AI-generated code (Faros AI, 20k devs) produced **more code but ~200%+ more security vulnerabilities**, more churn/duplication. When external builders leave, **who maintains it?**

## 6. Case Study — Media/Entertainment Monitoring

- Replace human labelers (extract entities/sentiment from ~60k docs/day) with AI, keeping **humans in the loop** for validation; constraints: **managed API only** (GCP), no self-hosting.
- **Cost modeling up front:** at Sonnet, yearly API cost exceeded their ~$1M human-labeling spend, so they optimized from day one (unusual, but required):
  - **Caching** (same ontology/prompt reused) cut cost ~20–50%.
  - Plan to **replace steps with ML/SLMs** later (this phase also collects training data — e.g., sentiment analysis).
  - **Batching** (24h turnaround) not applicable here (they need results today).
  - **Prompt optimization** dropped input from ~39k → ~25k tokens.
- Ended with a **hybrid** (Gemini 2.5 Pro for orchestration, Flash for most tasks). ROI horizon: **4 years** (2028), not overnight.

## 7. Build vs. Buy & Closing

- **Buy** if an off-the-shelf solution covers most needs; **build** when you have internal data/capabilities.
- Needs a **top-down AI strategy** (bottom-up adoption gets cut by management); **data quality**, **value/goal alignment** ("AI for the name" has no ROI), plan for **governance costs** (SOC/GDPR/AI regulation), beware **agent-washing**, and plan for **vendor lock-in** (keep the know-how to switch when prices rise) and the underutilized **cost of inference** (custom inference chips coming).
- Q&A: quality was validated by the **human-in-the-loop** pipeline (overnight run → morning validation); OpenAI OSS was cheapest but not capable enough for the use case.

---

*Video: https://www.youtube.com/watch?v=APtnkVvYt6Q — Transcript via yt-transcript.sh; outline generated from the transcript.*
