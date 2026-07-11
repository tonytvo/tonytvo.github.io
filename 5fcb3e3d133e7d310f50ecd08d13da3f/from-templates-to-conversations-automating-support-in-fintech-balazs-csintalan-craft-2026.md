---
title: "From Templates to Conversations: Automating Support in Fintech – Balázs Csintalan | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "How Wise's Assistant team climbed from simple templates to personalized messages to full conversations — reusable domain 'ingredients,' guardrails, and building a system (not just an agent)."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# From Templates to Conversations: Automating Support in Fintech – Balázs Csintalan (Talk Outline)

> Wise's **Assistant** team automates customer support at scale (≈19M customers, hundreds of thousands of contacts/month) — *faster, cheaper, without compromising quality*. The journey: templates → personalized messages → conversations → (aspirationally) autonomous agents.

---

## 1. The Problem

- Support doesn't scale with the user base (you can't hire 100k agents juggling 20 chats). Contacts cluster into categories (transfers — the biggest, cards, local account details, verification) and subgroups (e.g., the anxious **"Where is my money?"** — money already sent, banks still processing).

## 2. Start Simple — Templates

- The "Where is my money?" answer is nearly identical thousands of times/month. Auto-detecting these and sending the same template reached **~5% automation** and saved thousands of agent-hours (which lowers costs — tying to Wise's mission). But templates hit a **ceiling** (few questions fit one template for everyone). **Lesson: a simple solution still delivers value.**

## 3. Personalized Messages (with LLMs)

- As a regulated fintech, they **can't let an LLM loose** — risks: off-topic answers, over-promising (refunds), leaking sensitive data. They **invested early in a review process** aligning security/compliance/privacy — lengthy but it unlocked LLM use.
- Same underlying logic, now **personalized** ("Hi Sarah, your £500 transfer was sent at 14:32…") → customers feel heard and accept the answer more. **Lesson: personalization builds trust.** But one-shot messages can't handle follow-ups → another ceiling.

## 4. Conversations — Platform vs. Domain Ingredients

- Split the system: the **engine/platform** (conversational orchestrator, context management, agent memory, knowledge management, tool support, message generation) vs. **domain-specific ingredients** (customer context, knowledge, skills, guardrails).
- Chose a **partner** for the engine (black box) to move fast, building only the ingredients (which they'd have to build anyway and which **travel with them** as a reusable baseline).
- **Ingredients in detail:** **customer context** (integrate internal services, then *map* to LLM-friendly, jargon-free, non-sensitive form — anything in context can reach the customer); **knowledge** about Wise (structured, public-safe); **skills** (step-by-step instructions/tools per case, like coding-agent skills); **guardrails** on inputs (prompt-attack, vulnerable-customer/complaint detection, human requests) and outputs (no leaks, tone of voice, no financial/tax advice).
- Example skills walk multi-turn cases (gather info → compute ETA via internal tool → reassure or, later, request proof of payment and **escalate to the responsible team**). Reached **~50% automation**.

## 5. Building In-House — Swapping the Engine

- After ~50%, the partner platform limits control (they serve hundreds of companies; Wise has unique edge cases). So they keep the partner running while building an **in-house engine** for full control and de-risking.
- Stack: **TypeScript** (not Wise's usual Java, which "doesn't feel right for AI agents") with **Mastra** + **Vercel AI SDK**. Workflow ≈ three phases: **pre-process** (intent detection → route to in-house/partner/human; guardrails; knowledge retrieval via semantic search + re-ranking) → **generate** (three-step: diagnose → plan/clarify → write) → **output guardrails**.

## 6. Build the System, Not Just the Agent

- Invest in **observability and feedback loops**: a tool to inspect any answer (reasoning, frustration, knowledge used, guardrail outputs, confidence); a **re-simulation** tool to replay past conversations (simulating the customer side) against a changed config — for one or thousands of conversations; and **evals** (AI "unit tests") added from real messages as an ever-growing safety net (not expecting 100%). **Lesson: the system is what lets you improve safely and quickly.**

## 7. Wrap-Up & Q&A

- Now transitioning from partner to in-house (not immediately raising numbers, since it re-takes already-automated contacts) toward **fully autonomous agents** and possibly moving beyond support (send money, order/freeze cards in chat).
- Q&A: dedicated **QA reviewers** for both human- and AI-resolved contacts; feedback surveys track quality (a held-out % is never automated as a baseline); LLMs are far cheaper than humans; hallucinations are minimized by guardrails and customers can always ask for a human; multi-language via the partner for now; agents **offer** actions (e.g., cancel a transfer) but keep a **human in the loop** to confirm.

---

*Video: https://www.youtube.com/watch?v=GlUeLoiw9rw — Transcript via yt-transcript.sh; outline generated from the transcript.*
