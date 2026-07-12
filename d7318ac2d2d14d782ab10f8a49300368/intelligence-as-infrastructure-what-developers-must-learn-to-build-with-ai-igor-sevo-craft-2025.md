---
title: "Intelligence as Infrastructure: What Developers Must Learn to Build with AI - Igor Sevo | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Igor Sevo (HTEC) on building with AI — proactive UI-shaping chatbots, routing-agent RAG without vector DBs, process automation, an extended-reasoning agent, prompt-as-code practices, a dual-VM agentic runtime, and a theory that intelligence equals generality."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Intelligence as Infrastructure: What Developers Must Learn to Build with AI - Igor Sevo (Talk Outline)

> **Igor Sevo** — computer scientist, writer, theorist; **PhD in machine learning**; **Head of AI at HTEC Group** (agentic systems, LLM integration, AI infrastructure; interdisciplinary work across software engineering, cognitive science, philosophy). A **concrete-to-abstract list of lessons** geared at **both developers and managers** (significant overlap), moving from basic chatbots → development practices → a research agentic runtime → a theory of intelligence.

---

## 1. Beyond Basic Chatbots

- **Reactive back-and-forth chat is trivial** and "you'll be obsoleted in a couple of months" if that's all you build. Build **proactive** chatbots — they initiate conversation and do things while you're not asking.
- **Not just conversation** — as you converse, the agent should **shape the UI** (buttons, images), like an **HTML page rendered ad hoc as you go**. Chat is the basis; UI-shaping is the goal.
- **Negotiation messages** between agents: when multiple agents talk, exchange negotiations **first** to agree on the best communication format (with people, prefer rendered HTML) — then switch from chat to that format ("replacing a front-end engineer in some sense").
- **Personalization** — don't have the *user* negotiate the interface; the **system** pulls in all documents/personal profiles and shapes both content and UI automatically. Real example: a **Middle East real-estate giant** automating customer conversations that are **pre-shaped by research about the customer** — and evolving that to use UI is paramount.

### 1.1 RAG without vector databases
- Traditional (non-ML) developers can build RAG via **routing agents** rather than embeddings/vector DBs: a **category/routing agent** routes queries down a **tree**; only the **leaf agents** actually hit a database (SQL, vector, whatever) — a **B*/B+-tree-inspired** architecture (with balancing agents).
- Very fast to prototype, great for **POCs** — no embeddings, less testing than a vector DB, and no ML vernacular required.

---

## 2. Process Automation & Personal Tooling

- Chatbots are basic; AI shines at **process automation / RPA**. A **reductionist guide**: subdivide a process until you reach a step an **agent** can automate. Below that layer sits everything **already automated** and taken for granted (typing a query into Chrome — logs exist but you don't audit them); the **semi-automated** layer surfaces a **UI wherever a human action is needed**.
- **File-triage example** (built ~2.5 years ago, pre-GPT-4 general availability): an **RFP** with thousands of files (schematics — electrical, plumbing…). Process each file through **data ingestion** (Azure/AWS); auto-process what you can, hand the rest to a **human acting as a parser**; over time agents absorb more and the **UI disappears**. You don't need to automate the whole thing — **filter 70%** and you've saved 70%.
- **Automate yourself:** even if not building for others, write your own scripts (you control them, needn't publish them) — they greatly expedite your work.
- **Favorite: an extended-reasoning agent** (built in ~4 hours with GitHub Copilot + ChatGPT): a main prompt + a **revision prompt** ("are you sure you followed the instructions? repeat this") cloned many times and run across models (Claude, DeepSeek R1, etc.) → **majority voting** on candidates (fan-out/fan-in), or **evolutionary** development of documents with tunable parameters. Because developers are lazy, he built **meta-prompts** that generate the revision prompts, so he "just uses it like a chatbot" (even feeding screenshots). "If you're a developer, you should have your own repository."

---

## 3. Development Practices

- **Segregate prompts from code.** Don't redeploy the whole app because a text file changed. Keep a **separate prompt store** (they use **Azure blob**) with **two pipelines**: code changes deploy the app; prompt-folder changes push to the prompt store. (You can keep both in one repo — just two deployment pipelines.)
- **Treat prompts as code** — templating (**Mustache**, or **Jinja**), **composition** and **inheritance**, so you can do **ethics/bias review** later.
- **Practical ethics / cultural agnosticism:** the same app running on the US West Coast, the Middle East, and Japan should **tailor behavior to the local culture** — pull from different **prompt repositories** and even different **models** (knowing which models are biased for which things). "Alignment varies by time zone and culture."
- **Refactor every 3–5 steps.** With AI interjected into the write/debug/test/profile loop you must **commit far more frequently**; AI **blows up code fast** (duplication, poor code). The loop: **generate → inspect/verify → clean/refactor → write/revise → test/document** — with refactoring built in. **Not vibe coding** (good only for rapid prototyping, not production) — "you can't be a poor programmer."

### 3.1 The rising entry threshold
- If this continues, **junior developers never enter the workforce**. Solution: **automate onboarding** — internships don't scale, so deploy **teaching agents / automated tech leads / onboarding agents** (you can't test **3,000 people in 2 months**, but chatbots can test, evaluate, and report). Entry thresholds rise for **everyone**, not just developers.
- HTEC's internal learning initiative deploys multiple bots/"tech leads" separated by staff/leadership; a **hand-holding tech lead for junior developers** is doable now (figure out your own stack).
- **Start small and build up with protocols** — **MCP** (Model Context Protocol) and **A2A**. They built an entire AI architecture for the real-estate giant "mostly on the protocols" — expose tools as MCP and co-pilots can communicate, merging into more general agents.

---

## 4. A Research Agentic Runtime (fine-tuning for behavior)

- Models are fine-tuned for **conversation** (eager to talk); **automation needs behavior** (doing things, not talking about them).
- Prototype on a **simulated OS**: fine-tune for **behavior** — e.g., recognize/operate on **XAML** (user tags, elements with IDs; XML can render to HTML → the UI point from §1). Agents write to a **shared XAML object store**; routing an element to "agent number 12" makes **turn-based conversation emerge from general behavior**.
- **Agentic runtime = a dual virtual machine / emulator**: text is executed by two VMs — a **deterministic interpreter** and an **LLM** — plus **data/code/instruction/definition** segments. A program can be written **partly in English, partly in C#, partly in if-statements**, with the runtime **switching contexts** (an interrupt handler written in English).
- **Human user as a function endpoint:** a function call presents a UI to the user; their action returns as the result — so the runtime switches between **LLM / deterministic / human** contexts.
- On top: **"agentic program prototypes" (apps)** in YAML that **render differently per user** — a **definition tag** is a **system instruction** for an LLM but a **job description / legal contract** for a human (you're "an agent hooked up to the runtime"). Enables **A/B testing**: run a step with a human vs. an agent, whoever ran it votes the better output (blind), and the winner is **reinforced** next run.
- Thesis: **"Your company is already an agentic runtime — just mostly run by humans; the ratio is shifting toward the digital."**
- **Not viable yet:** it's over-tuned for conversation (tries to talk instead of doing the task); **nested agents** (agent-in-agent-in-agent) confuse whose instruction is whose; the goal was **agents that build agents** — "at the very line between sci-fi and reality," doable but ~**10× the cost of a person**.

---

## 5. A Theory of Intelligence — Four Lessons

*(More abstract but applicable; a 100-page treatise is linked.)*

1. **Intelligent systems are not modular.** The more intelligent, the **less separable**. **Architecture is a linguistic artifact** — we compartmentalize for **human readability/management** (separation of concerns), not because it's better; tightly coupled parts we box as a "module," loosely coupled parts we call "communication."
2. **Intelligence implies information compression.** Tested with a **"distributed needle in a haystack"** benchmark (scatter one piece of info across the context) — more intelligent models retrieve it because they see the whole **more connectedly**; the model's internal concept must **encapsulate the entire context**.
3. **Intelligence requires agency.** You cannot have a **non-agentic** intelligent system. But the **environment itself consists of interacting agents**, so a real benchmark is **embedded in the environment**, not a table — hence models that ace benchmarks but aren't practical.
4. **Intelligence = generality** (he'd use them as synonyms). We can only benchmark the **subset of a model's generality that overlaps with our own** — we're general only over what mattered in our evolution, so a model excellent at something we deem "not useful" isn't called intelligent though it may be. This causes today's flaky benchmarking.

- **Closing aphorism:** because these systems compress information and are agentic, the more intelligent they get, the **more coupled to the user** they become (a **shared representation** — "if it can preempt your action, it's already you"). So the big repercussion of scaling intelligence is **philosophical / phenomenal / psychological**, not technological — "the more coupled the system, the more **singular** the intelligence feels."

---

## 6. Q&A

- **Agents mostly on LLMs, or other forms?** Other forms already exist/are used — he built his **evolutionary agent** a month before Google's **AlphaEvolve**. Eventually it all merges and you just call it **"AI"** (a chatbot when you need one, something else otherwise).
- **Does testing-AI-against-humans apply to deterministic algorithms too?** Yes — ideally a model is **general over what humans are good at** *and* excels at what humans aren't (already-automated tasks). We need **more benchmarks**, some practical/ensemble.
- **Are regular enterprises ready to scale agents; does it depend on size/maturity?** Depends on business model and the **maturity of the tech in that niche** and the org's **internal AI understanding** (many requests are "sci-fi"). Most can automate **10–20%** (>60% is unrealistic today); the best readiness signal is **top-level enthusiasm** — you have to talk to them.
- **Where's the limit of information compression — team/department/company?** Technically **Shannon entropy**; metaphorically, when **teams dissolve** and you can't tell what AI vs. the team vs. the manager did (it "feels like a singular thing"), or when a system **knows what you want to do** (shared representation).
- **A separate prompt repo seems cumbersome — how do devs not forget to pull it?** Clarification: keep code and prompts in **one repo** but with **two pipelines** — code changes deploy to the app slot, prompt-folder changes push to the prompt store (Azure blob) the app reads from. For **small** projects, just **treat prompts as code**.
- **With trust/accuracy critical, must a human verify results between steps?** "Blazing speed answer: **no, you can't.**" Some things **cannot be benchmarked** — when agents approach human intelligence, you get the **same benchmarking problems you have with people**. Everyone must develop more **general/soft skills** to spot issues at all — "brace yourselves."

---

## People, Companies & References Cited

- **Igor Sevo** — speaker; Head of AI, **HTEC Group**; PhD in ML; author of a 100-page treatise on intelligence.
- Tools/tech: **GitHub Copilot, ChatGPT, Claude, DeepSeek R1, Google AlphaEvolve, Azure/AWS, Azure blob, Mustache/Jinja, MCP, A2A, XAML/YAML**.
- Concepts: proactive/UI-shaping chatbots, routing-agent RAG (B+-tree), RPA, extended-reasoning/meta-prompting, prompt-as-code, practical ethics, agentic runtime (dual VM, human-as-function-endpoint), distributed needle-in-a-haystack, intelligence = generality/compression/agency/non-modularity.

---

*Video: https://www.youtube.com/watch?v=Q6dCnhAfS3c — Transcript via yt-transcript.sh; outline generated from the transcript.*
