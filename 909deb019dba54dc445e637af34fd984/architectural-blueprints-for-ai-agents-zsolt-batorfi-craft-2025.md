---
title: "Architectural Blueprints for AI Agents - Zsolt Bátorfi | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Zsolt Bátorfi (Nokia Networks) on building industrial-strength AI agents for telecom — avoid generic frameworks, use knowledge graphs over vector RAG, and a full agent architecture: operation manual/ontology, structured I/O, memory strategies, GraphRAG, toolbox, and worker logic."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Architectural Blueprints for AI Agents - Zsolt Bátorfi (Talk Outline)

> **Zsolt Bátorfi** — senior generative-AI solution architect (25+ years; ex-Microsoft, Telenor, GE), now at **Nokia Networks**, Worldwide Private Network Solutions R&D (~2,000 people). With a small AI dev team he's spent 1+ year building **agentic AI** for industry-vertical telecom solutions — where systems are highly complex legacy-telco + cloud-native distributed IT (one network function's config file has **27,000 entries**) and there **aren't enough engineers** to plan/operate/fix networks. The talk: what they learned, plus a concrete **agent architecture blueprint**, with two live demos.

---

## 1. Context — Why Agents at Nokia

- Nokia provides voice/data connectivity **plus end-to-end solutions** for verticals (energy, transportation, trains, mines) needing **private on-prem/private-cloud networks**.
- Goal: use agents to make engineers **more productive** and eventually embed **autonomous multi-agent** solutions into the network.
- They're building many agents for **engineering efficiency** — e.g., a **highly knowledgeable system architect agent** that knows the whole network architecture, all support/failures, and customer docs, backed by **knowledge graphs**. Currently **CLI-based, human-in-the-loop** agents; **background autonomous** agents to come.

### 1.1 Live demo #1
- Logged into a Linux host running network services; **agents are embedded into the network service itself**. An **intention manager** understands human intent and starts an agent (e.g., an "enterprise voice core configure" session). Responses come **not from a vector DB but from a true knowledge graph** representing the service's realities; you can ask "what's your knowledge?" and it answers from the internal operation manual.

---

## 2. Two Hard-Won Learnings

1. **Avoid generic frameworks.** They tried **LangChain, LlamaIndex**, and the newer **Atomic Agents** — all use very different abstractions. For **industrial-strength agents embedded in real, highly complex systems**, build your **own agent-hosting, orchestration, and architecture** concept. Do this immediately if you're going beyond toy/general-purpose agents.
2. **Knowledge graph over vector RAG.** They tried thousands of PDFs/architectural docs, injected Confluence/Jira into various vector DBs — **semantic-similarity RAG is simply not enough**. Invest in a **deeply connected knowledge graph** for **contextual relationships**, not just similarity.

---

## 3. What an Agent Is (their definition)

- A **semantic execution unit** — like an integrated service/class: **structured input → operations → structured output**, but *semantically*: it analyzes **intentions** and **environment situations**, makes **decisions**, **plans**, and **selects/executes tools** (combining **LLM calls with native code** = the **worker logic**).
- It has an **environment** precisely describing the world (a **graph**) — agents **fetch/traverse** it and also **create new knowledge / evolve** it. Key design question: how is the environment represented, how does the agent get context, and how does it give information back?
- **Triggers:**
  - **Human intentions** (human-in-the-loop): e.g., a **Formula 1 event** — provision dedicated high-reliability bandwidth "slices" to 100–500 VIP devices in **5 minutes** while others use public quality.
  - **System events** (autonomous): a **failure** normally spawns a support ticket → L1/L2 support → architects → developers; instead a **troubleshooting agent** auto-triggers, understands all logs/environment/context, and does the job itself.
- **Host:** agents run somewhere — a chat front-end **or the system itself** (as in the demo) — and the host handles **orchestration**.

---

## 4. Orchestration Patterns (recommends Anthropic's blog)

1. **Router → sequential/linear:** an event (human/system) hits a **router** that picks the agent; an agent may realize it can't do everything and **chain to another agent**.
2. **Parallel + synthesizer:** parallelize independent work, then a **synthesizer agent** combines the results.
3. **Observer/evaluator loop:** for reasoning agents that can't self-validate, an **observer/evaluator agent** grants N iterations (e.g., **5**) and decides whether the goal is met.

---

## 5. The Agent Architecture (each block fundamental)

### 5.1 Operation manual (not just prompts)
- Three areas:
  - **Identity** — capabilities and **scope** (so the host's **intention manager** can pick the best agent, and the agent knows when something is beyond its scope).
  - **Operation** — the **purpose**, the **expectations** (needed to **evaluate** behavior), and **how to work with the graph/providers**.
  - **Ontology** — the **schema of "the world"** for the agent (a new concept to many). For a troubleshooter, the world is logs/tabular datasets + a network function; for an architect agent, it's **all documentation**. They use **DITA** (the official XML schema for technical content) and **inject XML from content repositories, not PDFs/office files** — describing the meaning and structure of the content.
- Store the manual **externally (repository pattern)** so an agent reloads the latest each run — and **one agent can even rewrite another agent's operation manual** (agents building agents). Externalize/extensible as much as possible.

### 5.2 Structured I/O
- Inputs range from a **user message** to a **structured system event** to **another agent** (when agents evaluate agents); outputs mirror this (structured output or an agent).
- Structure enables **chaining** — one agent's output schema matches the next's input schema (Pydantic data classes). LLMs are **bad at structured output**, so use libraries like **instructor** to **force schemas** (schematized JSON, not free text).

### 5.3 Memory strategies (increasing sophistication)
- **Queue** — save every entry, but injecting the full queue **overflows the context window**.
- **LLM summary** — summarize each round into short memory (sometimes good/bad; adds complexity).
- **Vectorizer** — vectorize conversations into a (in-memory) vector DB and search by similarity (sometimes relevant, sometimes not).
- **Graph** — build/continuously update a graph per run, connecting conversations/topics → the most sophisticated (and most complex) memory.

### 5.4 Environment via property graphs (the hottest topic)
- Semantic/classic search can't guarantee **relevant context with relationships** → use a **property graph**. Engines: **Neo4j**, and embeddable in-memory analytical graphs like **Kuzu**.
- **Injection pipelines** from four sources: **customer documentation** (DITA schema), a **real system** (crawl a **Kubernetes cluster** → graph of microservices/components/interfaces/dependencies — mirroring reality), **functional requirements** (how features work), and **all failures/bug-fixes/incidents** (correlated in the graph).
- **GraphRAG:** an agent first **queries the graph**, finds relevant nodes, then **traverses the neighborhood** (e.g., "create a checklist to enable a feature for system components") for sophisticated context.
- **Live demo #2 (Jupyter):** visualized a property graph (Kuzu) — red = documentation sets, blue = documentations/steps, yellow = topics (each node carries a **float-array vector**). Views: tree/hierarchical, circular/centrality (most-relevant context central, less-relevant branched out). Agents pick perspectives — top-N nodes, neighborhoods, longest paths. Learn the **Cypher** graph query language ("an important skill; if you know SQL you can learn it").

### 5.5 Toolbox
- A component to register **built-in and external** tools: **core network** tools, **API** tools, **platform/environment** tools (edit files, run commands/bash, dynamically write & execute Python), **productivity** tools (explorative data analysis / ML over tabular logs).
- **Don't just wrap a REST API as a tool** — precisely describe what it does and its input/output params so the agent can reason. Prefer **MCP clients** (others will build tools; MCP will be the future standard) via a flexible, configuration-driven architecture.

### 5.6 Worker logic
- The **unavoidable, per-agent glue** combining **LLM calls with native code** across multiple **analyze/plan/execute** strategies — checking whether info exists to complete a goal, whether tools are sufficient, or whether to **collaborate with another agent**. Often it's "just simple native logic."

---

## 6. Q&A

- **How do you evaluate agents?** With **domain experts** *and* **evaluator/QA agents** — automatable via an **Excel of expert questions/answers** scored by an evaluator agent that compares agent responses to human responses and yields a **quality score**. You still need experts to craft meaningful intentions/goals and correct answers.

---

## People, Companies, Tools & References Cited

- **Zsolt Bátorfi** — speaker; Nokia Networks (ex-Microsoft, Telenor, GE).
- **Nokia Networks** — Worldwide Private Network Solutions.
- Frameworks tried: **LangChain, LlamaIndex, Atomic Agents** (advised against for industrial use).
- Tech: **Neo4j, Kuzu** (graph engines), **Cypher** (graph query language), **DITA** (XML tech-content schema), **instructor** (structured output), **MCP**, **GraphRAG**, Pydantic.
- **Anthropic blog** — orchestration patterns reference.

---

*Video: https://www.youtube.com/watch?v=PbllnufHqcE — Transcript via yt-transcript.sh; outline generated from the transcript.*
