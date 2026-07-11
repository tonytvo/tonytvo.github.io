---
title: "The Past as a Compass for Systems Engineers in the Age of AI – John Michael Willis | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "John Willis (DevOps Handbook) on learning from history in the age of AI — benchmarks, the coming technical-debt tsunami and Shadow AI, the NORMAL stack, RAG/evaluations, and AI as 'alien cognition'."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# The Past as a Compass for Systems Engineers in the Age of AI – John Michael Willis (Talk Outline)

> John Willis (DevOps founder, co-author *The DevOps Handbook*, Deming devotee; writing *The Operational History of Generative AI*) on why not understanding AI's history is the bottleneck.

---

## 1. History Matters

- AI history isn't linear — **symbolic** (expert systems, deductive) vs. **sub-symbolic** (neural nets, inductive). The first neural-network paper (1943, McCulloch & **Walter Pitts** — a homeless 13-year-old who corrected Russell's *Principia*, a real Good Will Hunting) and figures like Grace Hopper and Fei-Fei Li ("no ChatGPT in 2022 without Fei-Fei"). Knowing the route from Deep Blue → AlphaGo → today helps you understand the daily shifts (even the "T/transformer" in GPT may be superseded).

## 2. Benchmarks & Denial

- **Hallucination** is misused — humans hallucinate too (abstractions in conversation); LabCorp proved an AI help-desk was **10% better** than 5 years of human answers via **evaluations**. Benchmarks: GPQA reasoning ~60% (Jun 2024) → ~84%; **HumanEval** coding ~70% → ~99%; **SWE-bench** 2% (Mar 2024) → ~60%. The point isn't replacing coders — it's **consistency** humans can't match (Capital One's 20,000 Java devs don't all produce at 99%). "Dear CIO: stop ignoring this."

## 3. The Technical-Debt Tsunami & Shadow AI

- Like cloud (CIOs who said "never" now run 30–40% in cloud), **Shadow AI** is coming — **BYO AI**: in a 100k-person org, ~70k will use AI (vs. ~5k for early cloud). AI is ~80% network/compute/storage + cloud-native on top — "if you were terrible at that before GenAI, Bob's your uncle." **Prototype ≠ production** (Eric Ries's MVP). **Air Canada** cautionary tale: a RAG scraped everything (policy-of-record *and* an FAQ), gave one grieving customer a wrong refund answer → weeks on the WSJ front page, ~half a billion in market cap lost over an **$800** payout. Adversarial risks are on steroids (Wiz poisoned an embedding model with Python pickle → broke out of an unhardened Kubernetes install onto a shared AWS host; zero-byte codes in PDFs execute on ingestion). Read the **OWASP LLM Top 10** (prompt injection, sensitive data, supply chain, model poisoning, vector-embedding weaknesses).

## 4. The NORMAL Stack & AI as Alien Cognition

- CIOs must stop denial and get literate (like the LAMP stack did for web). His **NORMAL** stack: **Observability** = **evaluations** (computational/quantitative/qualitative correctness, bias, toxicity — "it's geometry, not vibes"; calibrate acceptable risk with the policy org), **RAG** ("not dead" — one tool of many: CAG, GraphRAG — vectorize your own corpus, feed a frontier model; don't let 10,000 unmanaged Jupyter notebooks proliferate; keep models in an **artifactory** with pipelines/SBOMs), **agentic protocols** (MCP *and* Google's A2A mesh), and managed **language models** behind a gateway (Okta auth → approved models).
- **The philosophy of AI:** stop wasting breath on AGI; adopt an **epistemological, evidence-based** (Deming/scientific-method) approach. We built a **thinking machine that doesn't think like us** — an **"alien cognition"** between the social and the technical. *Arrival* analogy: don't ask "can it ride a bike / do our math?" Neural nets do **inductive** reasoning (correlation → hallucination) but lack human **abductive** reasoning (Columbo) — "the missing part of the AI conversation" (echoing Snowden). Q&A: the key CIO competency is to **stop being in denial** — it's your job to protect the brand; educate leadership (hand them the book three times until they read it), because getting this wrong is existential.

---

*Video: https://www.youtube.com/watch?v=ShDMvzenNJ8 — Transcript via yt-transcript.sh; outline generated from the transcript.*
