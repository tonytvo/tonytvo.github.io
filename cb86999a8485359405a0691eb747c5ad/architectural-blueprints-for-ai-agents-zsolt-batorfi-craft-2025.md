---
title: "Architectural Blueprints for AI Agents - Zsolt Bátorfi | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Zsolt Bátorfi (Nokia Networks) on building industrial-strength AI agents — avoid generic frameworks, use knowledge graphs over vector RAG, and a full agent architecture (operation manual, memory, tools, worker logic)."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Architectural Blueprints for AI Agents - Zsolt Bátorfi (Talk Outline)

> Zsolt Bátorfi (senior generative-AI architect, Nokia Networks) on a year+ of building **agentic AI** for telecom — where one network function's config has **27,000 entries** and there aren't enough engineers to run the networks.

---

## 1. Two Hard-Won Learnings

- **Avoid generic frameworks:** LangChain / LlamaIndex / atomic-agents use very different abstractions — for **industrial-strength agents embedded in complex systems**, build your own agent hosting/orchestration/architecture. **Knowledge graph over vector RAG:** thousands of PDFs/Confluence/Jira into vector DBs (semantic similarity) is **not enough** — invest in a **deeply connected knowledge graph** for contextual relationships.

## 2. What an Agent Is

- A **semantic execution unit**: structured input → analyze intent/environment, decide, plan, select and execute tools (combining LLM calls with native code) → structured output. It has an **environment** (a graph representing the world) it reads from *and* evolves. Triggered by **human intentions** (provision VIP network slices in 5 min) or **system events** (a failure auto-triggers a troubleshooting agent). It runs on a **host** (chat front-end or the system itself) responsible for **orchestration**.

## 3. Orchestration Patterns (per Anthropic's blog)

- **Router → sequential** (an agent hands off to another), **parallel + synthesizer** (fan out, then a synthesizer agent combines), and **observer/evaluator loop** (a reasoning agent gets N iterations, an evaluator decides if the goal is met).

## 4. The Agent Architecture (each block fundamental)

- **Operation manual** (not just prompts): **identity** (capabilities/scope, so a host's intention-manager can pick the best agent), **operation** (purpose, expectations for evaluation, how to use the graph/providers), and an **ontology** (the schema of "the world" for the agent — e.g. DITA XML for docs, injected from content repositories, not PDFs). Store it externally (repository pattern) so agents can even rewrite other agents' manuals.
- **Structured I/O** (Pydantic/instructor to force LLMs into schemas; enables chaining compatible agents). **Memory** strategies: a queue (overflows context), LLM summaries, a **vectorizer** (semantic search), or a **graph** (most sophisticated). **Environment via property graphs** (Neo4j, or embeddable **Kuzu**) built by injection pipelines from customer docs, real systems (crawl a Kubernetes cluster → graph of services/interfaces/dependencies), functional requirements, and all failures/incidents → **GraphRAG** (find relevant nodes, traverse the neighborhood). Learn the **Cypher** graph query language ("an important skill").
- **Toolbox:** register built-in *and* external tools — don't just wrap a REST API as a tool (describe inputs/outputs so the agent can reason); include platform tools (edit files, run bash/Python), productivity tools (explorative data analysis on logs), and prefer **MCP** clients (the future standard) so others can build tools. **Worker logic:** the unavoidable, per-agent glue combining **LLM calls with native code** and multiple analyze/plan/execute strategies (including deciding to collaborate with another agent).
- Q&A: **evaluate** agents with domain experts *and* evaluator/QA agents (automatable via an Excel of expert Q&As scored by an evaluator agent).

---

*Video: https://www.youtube.com/watch?v=PbllnufHqcE — Transcript via yt-transcript.sh; outline generated from the transcript.*
