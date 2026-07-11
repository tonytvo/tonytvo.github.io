---
title: "Intelligence as Infrastructure: What Developers Must Learn to Build with AI - Igor Sevo | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Igor Sevo (HTEC) on building with AI — proactive UI-shaping chatbots, routing-agent RAG, process automation, prompt-as-code practices, an agentic runtime, and why intelligence equals generality."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Intelligence as Infrastructure: What Developers Must Learn to Build with AI - Igor Sevo (Talk Outline)

> Igor Sevo (head of AI, HTEC; PhD in ML) — a concrete-to-abstract list of lessons for developers *and* managers, from chatbots to a theory of intelligence.

---

## 1. Beyond Basic Chatbots

- Back-and-forth chat is trivial and will be obsolete soon — build **proactive** chatbots that initiate and act. Not just conversation: agents should **shape the UI** (buttons, images, ad-hoc "HTML page rendered as you go"), use **negotiation messages** between agents to agree on format, and **personalize** by pulling in all user documents/profiles (a Middle East real-estate giant wanted conversations pre-shaped by customer research). **RAG without vector DBs:** traditional engineers can use **routing agents** (a B+-tree-like structure where only leaf agents hit a database) — fast to prototype in POCs without ML.

## 2. Process Automation & Personal Tooling

- **Robotic process automation:** subdivide a process until a step is agent-automatable; automate 70% and you've saved 70% (e.g. RFP file triage — pipeline what you can, hand the rest to a human "parser," and agents gradually absorb the UI). **Automate yourself:** build your own scripts. Favorite: an **extended-reasoning agent** (evolutionary/fan-out-fan-in — clone a prompt with a **revision prompt** "are you sure you followed the instructions?", majority-vote the candidates) built in 4 hours; use **meta-prompts** so you just chat and it builds the revision prompts.

## 3. Development Practices

- **Segregate prompts from code** — a separate prompt store (Azure blob) with its own pipeline (don't redeploy the app because a text file changed). **Treat prompts as code** (Mustache/Jinja templating, composition/inheritance, ethics/bias review). **Practical ethics:** the same app across US/Middle East/Japan pulls different prompt repos and models tuned per culture. **Refactor every 3–5 steps** — AI blows up code fast (duplication/poor code); the loop is generate → inspect/verify → clean/refactor → test/document (not vibe coding for production; "you can't be a poor programmer"). **Onboarding is rising for everyone** → deploy **teaching agents / automated tech leads** (you can't test 3,000 people in 2 months, but chatbots can), and adopt **MCP/A2A** protocols so tools merge into more general agents.

## 4. An Agentic Runtime (research)

- Fine-tune for **behavior, not conversation** (models are too eager to talk). A prototype **agentic runtime**: a dual virtual machine where text is executed partly by a **deterministic interpreter** and partly by an **LLM**, switching between LLM / deterministic / **human-as-a-function-endpoint** contexts; agents write to a shared **XAML** object store; "agentic program prototypes" (apps) in YAML render differently per user (a definition tag = a system prompt for an LLM, a job description/contract for a human). Enables **A/B testing** (human vs. agent doing a step, vote the winner, reinforce). "Your company is *already* an agentic runtime — just mostly run by humans; the ratio is shifting." Not viable yet (nested agents confuse instruction scope; ~10× the cost of a person).

## 5. A Theory of Intelligence (four lessons)

- **Modularity is a linguistic artifact** — more intelligent systems are *less* separable (architecture exists for human readability/management, not because it's better). Intelligence implies **information compression** (tested via "distributed needle in a haystack"). Intelligence requires **agency** (you can't have a non-agentic intelligent system; the environment is itself interacting agents, so a real benchmark is *embedded in the environment*, not a table). **Intelligence = generality** — we can only benchmark the subset of a model's generality that overlaps with *our own* (hence flaky benchmarks). Closing aphorism: as systems get more intelligent they become **more coupled to the user** (shared representation — "if it can preempt your action, it's already you"), so the big repercussion of scaling intelligence will be **philosophical/psychological**, not technological. Q&A: when agents match human intelligence, you can no longer reliably verify them — "you'll have the same benchmarking problems you have with people"; everyone must develop more **general/soft skills**.

---

*Video: https://www.youtube.com/watch?v=Q6dCnhAfS3c — Transcript via yt-transcript.sh; outline generated from the transcript.*
