---
title: "Agents Need Names: Trust at the age of agentic web – Balázs Némethi | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Balázs Némethi on identity, discovery, and trust for the agentic web — first-hop trust, capability cards, DNS-based agent discovery (AID), and making .agent a public good."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Agents Need Names: Trust at the age of agentic web – Balázs Némethi (Talk Outline)

> Balázs Némethi (agent.community) on why AI agents need **names, identity, and discovery** — and why that infrastructure must be **open/public**, not owned by one platform.

---

## 1. A New Actor on the Internet

- The internet split neatly into humans and services/bots (CAPTCHAs told them apart). **Agents** (tool-using AI with decision-making autonomy) break that — they carry out **economic output**, call/operate/create services, and become participants in the economy. Like an RPG hero, an agent that represents you/your company will need a **name** to interact in a human-oriented environment (usernames, domains, company names all exist because names ease discovery and relation).

## 2. Identity, Silos, and Scale

- Identity emerged as society scaled (passports let you cross any border via global issuance/resolution). But platform handles (Twitter/Instagram) are **unique, first-come, and siloed** — your Twitter handle doesn't work elsewhere because platforms have no incentive. The agentic web (potentially **hundreds of billions** of agents, some ephemeral like coding agents, some long-running like OpenClaw-style) needs **global, interoperable** referencing **not owned by a single entity**.

## 3. Trust as the First Hop

- Interaction starts with a **first hop** — like a first impression: does the other party look trustworthy (which domain/IP)? Then digital signatures create a secure channel. This first hop isn't new, but it must **scale** to the agentic web and be **open** (not an app-store toll of 30% + gatekept verification).

## 4. Capabilities & Provenance

- Beyond "who are you," agents carry **what can you do** — abilities + permissions from their creator/operator. Because LLMs make mistakes and autonomous agents retry to finish, unlimited approval is dangerous (deleted bank accounts, drained crypto). So agents carry **capability cards** with **provenance** (controller, legal entity) and **selective disclosure** — "yellow-mode do-everything" agents vs. limited **enterprise** agents.
- Communication is fluid: protocols/abilities (**MCP**, **A2A**), authentication, and — if an agent lacks a needed protocol — it can **build its own tool** to interact. But without a working **first hop** (proving where you're coming from, resolving the same way), no interaction happens.

## 5. DNS-Based Discovery (AID)

- Their open spec — **Agent Identity & Discovery (AID)** — is a **DNS record** that, given a website (e.g., `supabase.com`), resolves **where the agent endpoint is**. DNS is chosen because it's **decentralized, global, and highly reliable**; capability/credentials come after. Verification is an **artifact** (does the agent hold my password / its own account?) — hence emerging **agent-onboarding flows** and "agent mail" (agents as second accounts or coworkers).

## 6. Make `.agent` a Public Good

- At scale, agents will **coordinate** (hordes from many parties), needing decentralized discovery — not a single central party. If naming becomes a Facebook/Instagram owned by one platform, they set the rules. So they founded **agent.community** to make **`.agent`** (an especially valuable TLD because of how English works) a **community-governed public good**, applying to ICANN.
- Ideas: reserved/valuable names; a **regulated-agent** naming layer (e.g., `.eu.agent` subdomain signaling EU-compliance as a trust signal); and (playfully) an agent eventually on the governance board. Call to action: **join the community** (28,000+ members) to strengthen the ICANN claim — "public infrastructure is great; private infrastructure will be exploited."

## 7. Q&A

- Independent economic transactions by agents **already happen** (experimentally, unreliably). An agent is arguably **already an actor** (it uses/creates tools), becoming more of an **economic** actor over time.
- **What's broken today because agents lack identity? Nothing yet** — the agents that will *need* it don't exist at scale. But when they arrive (a "ChatGPT moment"), scaling will be too fast to plan then — the infrastructure must be **ready to pick up**.

---

*Video: https://www.youtube.com/watch?v=NzyJudAhVok — Transcript via yt-transcript.sh; outline generated from the transcript.*
