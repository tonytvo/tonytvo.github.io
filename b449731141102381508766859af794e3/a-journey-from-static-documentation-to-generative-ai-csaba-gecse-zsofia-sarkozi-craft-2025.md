---
title: "A journey from static documentation to generative AI - Csaba Gecse, Zsófia Sárközi | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Csaba Gecse and Zsófia Sárközi (Tesco) on solving enterprise documentation with a RAG chatbot — the failed static/knowledge-hub phases, RAG architecture, and RAC quality scoring with an automated knowledge pipeline."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# A journey from static documentation to generative AI - Csaba Gecse, Zsófia Sárközi (Talk Outline)

> Csaba Gecse (software dev manager) and Zsófia Sárközi (product manager) at Tesco Technology on solving the persistent, underestimated problem of **enterprise documentation** with generative AI.

---

## 1. The Problem

- 60% of Tesco developers regularly waste time searching for docs (15% waste >3h/month); scaled across **2,500 developers in 284 teams** across 10+ systems with 10+ integration methods, the cumulative cost is huge. The typical workflow: browse Jira/Confluence/GitHub/SharePoint, wade through duplicates and conflicting info, find a lengthy doc, hunt for the specific detail, and still end up **messaging the owner team** (maybe it's outdated anyway).

## 2. Two Failed Phases

- **Static pages** in the internal developer portal — popular, but the team had to manually map/structure/maintain each team's docs → not scalable. **Knowledge hub** (links + searchable categories) — low adoption and poor search reliant on **manually assigned indexes/categories**. Both failed on the **manual approach**. Reframe: treat documentation as **dynamic, like code** — focus on continuous capture and precise retrieval.

## 3. The RAG Chatbot

- A **conversational interface**: ask naturally, unlimited follow-ups, personalized to chat history, reducing cognitive load. Built with **RAG** (retrieval-augmented generation): LLM (GPT-4) generates; **embedding models** (text-embedding-3-large) create vector representations stored in a **vector DB** for **semantic** (not exact) search; **prompts** control search and answering. User question → embed → vector-search relevant doc chunks → **augment** the LLM context → answer. Runs on the **Azure AI** stack (chosen for POC speed; on-prem was expensive/complex).

## 4. Challenges Addressed

- **Security:** guardrails against malicious/unsafe topics (psychological safety), defenses against **system-prompt injection**, role-based access control in the data layer (whatever reaches the LLM context can be revealed), plus **pen tests**. **Cost:** measured in **tokens/minute** — ran a closed beta (~40–50 users) to size a subscription, and a **two-layer pricing model** (full performance under a threshold, reduced-performance low-cost mode past a hard limit). **Observability** like any IT system.
- **Quality — the RAC score** (Relevance, Accuracy, Completeness): from **automated tests** against knowledge-owner-defined Q&As *and* **user feedback** (same scale). "Good content" = RAC above threshold over time.

## 5. Automated Knowledge Pipeline & Future

- A **modular scraper framework** pulls from Confluence/SharePoint/Jira/portal → data cleaning/formatting → document storage (Azure blob) → indexers create chunks/vectors → available in **pre-production** for testing (auto RAC tests + user scores) → if RAC stays above threshold, **promote to production** (with version backup to roll back if quality degrades). Learnings: accept **non-deterministic** operation, hallucination is never zero, **garbage in → garbage out** (they raise awareness and give feedback to knowledge owners rather than fixing docs in real time) → **living documentation**.
- Future: image/diagram (non-textual) processing, fine-tuning semantic ranking/retrieval, a fully automatic feedback pipeline, **agentic AI** (e.g. "create a compliant repo with observability/pipelines"), and **MCP** to join a larger plug-and-play ecosystem. Built by ~7 engineers since January (initial POC in a 4-day hackathon via Azure AI Foundry).

---

*Video: https://www.youtube.com/watch?v=tTRog8yusS0 — Transcript via yt-transcript.sh; outline generated from the transcript.*
