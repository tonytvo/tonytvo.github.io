---
title: "A journey from static documentation to generative AI - Csaba Gecse, Zsófia Sárközi | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Csaba Gecse and Zsófia Sárközi (Tesco Technology) on solving enterprise documentation with a RAG chatbot — the failed static-pages and knowledge-hub phases, RAG architecture, security/cost/observability, RAC quality scoring, an automated knowledge pipeline, and the roadmap."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# A journey from static documentation to generative AI - Csaba Gecse, Zsófia Sárközi (Talk Outline)

> **Csaba Gecse** (software development manager, into smart home/IoT/psychology) and **Zsófia Sárközi** (graduate product manager, ~1.5 years, across three teams) at **Tesco Technology** on one of the most **persistent yet underestimated** enterprise challenges — **documentation** — and how generative AI provides "a completely new lens." Opening poll: *when did you last read documentation that was up-to-date, easy to navigate, and actually helpful?* (Few hands.) Agenda: problem statement → the evolution/journey → the generative-AI (RAG) solution in depth.

---

## 1. Why Generative AI / The Problem

- AI use cases already at Tesco: **meeting & PR summarization, coding/testing assistance, content creation & branding for marketing**, and now a **chatbot for internal knowledge**.
- Every journey starts with a **problem (or "opportunity")**. In a large company, documentation is **scattered across platforms, updated manually and inconsistently**, producing **duplicates with conflicting information**.
- From their **developer-experience survey**: **60% of developers** regularly waste time searching for docs; **15%** waste **>3 hours/month** — small individually, **substantial** across hundreds of engineers.
- Scale numbers: **284 tech teams**, **~2,500 developers**, all contributing docs across **10+ systems** with **10+ integration methods** — keeping it clean/up-to-date is a big challenge.
- **The painful workflow:** browse Jira, Confluence, GitHub READMEs, internal wikis, SharePoint → wade through **semi-relevant results and duplicates** → reach out to owner teams → find a **lengthy doc** → hunt for the **very specific** detail → risk it's **outdated/incomplete/irrelevant** → reach out to the owner team again, wasting everyone's time.

## 2. The Evolution — Two Failed Phases

- **Goal:** solve documentation fragmentation → a **single source of truth**, via an **iterative approach** (lots of trial and error).
- **Phase 1 — Static pages** in the internal developer portal. Popular (teams wanted to be hosted), **but** the team had to **manually map/structure/maintain** each team's docs → very time-consuming for even one team → **not scalable**.
- **Phase 2 — Knowledge hub:** instead of static pages, **link to high-quality resources** in **searchable categories**. But **adoption was lower than expected** and search was poor — it relied on **manually assigned category names/indexes** (an org-wide usable index is itself a huge challenge). The **manual approach** failed again.
- **Reframe (back to square one):** treat documentation as **dynamically changing, like code** — focus on **continuous knowledge capture** and **precise retrieval**. Research showed **AI-driven tools** are the most efficient/popular for coding, testing, documentation, and knowledge retrieval.

## 3. The Vision — A Conversational Interface

- A **chatbot** where developers ask naturally (like asking a colleague), with **unlimited follow-ups** (saving knowledge owners' time), **personalized** with **contextual understanding from chat history**, and **reduced cognitive load** (one tool).
- New concerns: **building trust/adoption**, **onboarding/guidance**, and technically **preparing for failures** and **minimizing hallucination/bias**.

## 4. The RAG Solution (technical)

- Started a **POC**; wanted large-language-model capability with the flexibility to add content → **Retrieval-Augmented Generation (RAG)**.
- **Building blocks:**
  - **LLMs** — generate natural language by predicting upcoming words.
  - **Embedding models** — create **vector (mathematical) representations** of context so it can be **stored in vector databases** and later **searched**.
  - **Vector databases** — hold the contextual chunks for retrieval.
  - **Prompts** — control the **search** and **answering** operations.
- The **big deal**: integrating RAG with Tesco's existing documentation platforms.
- **Typical RAG flow:** documents → **document processors** (transform to desired formats) → storage/indexing. User question → **embedding model** vectorizes it → **vector search** for **semantic** (not exact) meaning → matching chunks **augment/extend the LLM's context** → LLM answers. (Illustrated with a "cat" example: vector dimensions ≈ attributes — 0.8 "living creature," 0.29 "four legs," etc.)

## 5. Challenges & Considerations

### 5.1 Security (different from traditional IT)
- The chatbot talks to humans with **no human supervision** — people may raise **violent/malicious** topics → build **guardrails** (in the prompt or an upper layer) to detect/intervene and maintain **psychological safety**.
- **System-prompt injection** — attackers alter the chatbot's behavior/identity → add **safety layers**; the LLM itself can detect injections with proper setup.
- **Protecting connected-service details / private info** — whatever reaches the LLM context **will be revealed at some point** → control what enters the context via **role-based access control** in the data layer.
- **Pen tests** — important as for any IT system (run differently for chatbots).

### 5.2 Cost (don't bankrupt the company)
- LLMs process **tokens** (words/sub-words/characters); measure/cost via **tokens per minute**.
- Predicting future cost: ran a **closed beta (~40–50 users)**, collected consumption/cost data, then chose the right **subscription/quota**.
- **Two-layer pricing model:** full chat experience under a threshold; past a **hard cost limit**, switch to a **low-pace, reduced-performance, much cheaper** mode — protecting against runaway cost.

### 5.3 Observability
- Like general IT: **measure, log, analyze, visualize** — user/session counts, returning users, tokens used, cost, security events, etc.

### 5.4 Quality — the RAC score
- Answers are **only as good as the augmented context** — tune **controlling factors**: system prompt, content, ingestion format, embedding-model settings, **chunking**, etc.
- Objective measurement: **RAC = Relevance, Accuracy, Completeness** (1–4 scale), from **two sources**: (1) **automated tests** against knowledge-owner-agreed Q&As (the "good," relevant core knowledge), and (2) **user feedback** using the same scoring.
- Auto-test scores and user scores differ naturally (curated vs. random user questions); "good content" = **RAC above a threshold over time**.

## 6. The Automated Knowledge Pipeline

- **Modular scraper framework** integrates with Confluence, SharePoint, Jira, and their own portal (each with different integration specifics) to pull selected content.
- **Data formatting/cleaning** — needed **experimental ingest runs** to learn which source/format works best.
- Upload to **document storage (Azure blob)** → **indexers** create **chunks/vectors** into the vector DB → new knowledge available in **pre-production** (users with pre-prod access test it; **auto RAC tests** + user RAC scores run).
- If RAC stays **above threshold over time** → **promote to production** via a **sync job** (chunks/vectors created in prod; knowledge available to all). RAC scoring continues in prod; a **version backup** in the prod document store allows **rollback** if answer quality is corrupted.

## 7. Learnings & Future

- **Learnings:** accept **non-deterministic** operation (not identical answers); **hallucination is never zero** (minimize via controlling factors); **garbage in → garbage out** (they don't fix low-quality docs in real time — they **raise awareness** and **feed back to knowledge owners**) → the aim is **living documentation** where publishers and consumers work in a streamlined workflow.
- **Impact so far:** less **time-to-knowledge** (single system, growing smarter), less **confusion** from duplicates/conflicts (single, context-aware source), and growing **trust** among knowledge owners and users. Early stages, "no plans to stop."
- **Future:** **image recognition / non-textual document processing** (architecture diagrams, process flows), **fine-tuning semantic ranking and context retrieval** (enough data now to see weak points), a **fully automatic feedback pipeline**, **agentic AI** (e.g., "create a compliant repo with observability/pipelines"), and **MCP (Model Context Protocol)** to join a larger **plug-and-play** ecosystem.

## 8. Q&A

- **What LLM / was it trained on sources?** Commercial products on the **Azure AI** stack — **GPT-4** as the LLM, **text-embedding-3-large** as the embedding model. They **don't train** the LLM; knowledge is added via the **vector database**.
- **Why cloud (Azure) not on-prem?** Discussed with principals; another Tesco service (code-gen/IDE integration) runs **on-prem** and taught them it's **expensive and complicated**, so for the POC they chose **Azure** (could change later).
- **How was the vector DB created / kept up to date?** Azure **abstracts** processing/chunking/vector-DB creation and updates; the doc store is **Azure blob storage**, and add/change/remove is **reflected automatically** (after tuning **indexer** settings).
- **How is new documentation handled / training cutoff?** They **don't train** the LLM — new knowledge is added purely through the **vector DB** (update blob storage → Azure indexers ingest it).
- **What is "completeness" in RAG?** A **subjective** judgment of whether the answer contains everything wanted; knowledge-owner questions are complete by design, but if **user completeness** drops below threshold (**2.8/4**) they investigate why.
- **How smooth was implementation / team size?** Initial POC in a **4-day hackathon** via Azure **AI Foundry** (mimics a chatbot UI) — a playground; making it production-ready with observability took **months** (started in **January**). Team = **7 engineers**.
- **Compared to Microsoft 365 Copilot (which can also search Confluence/SharePoint)?** Bigger than them — Tesco's **privacy/information-protection** stance means it's **not yet clear** they can feed full Tesco context to those cloud services, so they built their own.
- **Plans to integrate with actual code (like GitHub Copilot)?** Yes — another Tesco service integrates with the IDE/GitHub repos, and a possible **vendor can generate documentation from code** they'd like to integrate.

---

## People, Companies & References Cited

- **Csaba Gecse** — software development manager, **Tesco Technology**.
- **Zsófia Sárközi** — graduate product manager, Tesco Technology.
- **Tesco Technology** — 284 tech teams, ~2,500 developers.
- **Azure AI** stack — **GPT-4**, **text-embedding-3-large**, blob storage, indexers, **AI Foundry**.
- Concepts: RAG, embeddings, vector databases, semantic search, chunking, system-prompt injection, guardrails, tokens/minute, two-layer pricing, **RAC** (Relevance/Accuracy/Completeness), automated knowledge pipeline, living documentation, **MCP**, agentic AI.
- Compared against: **Microsoft 365 Copilot**, **GitHub Copilot**.

---

*Video: https://www.youtube.com/watch?v=tTRog8yusS0 — Transcript via yt-transcript.sh; outline generated from the transcript.*
