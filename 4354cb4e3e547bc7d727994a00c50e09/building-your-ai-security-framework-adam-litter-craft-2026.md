---
title: "Building Your AI Security Framework – Adam Litter | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Adam Litter on why prompt injection is unfixable, the lethal AI trifecta, attacks on/with/through AI, and a minimum viable defense stack to raise the cost of attacks."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Building Your AI Security Framework – Adam Litter (Talk Outline)

> Adam Litter (DataPao) on the state of AI security — **1.275M** credentials leaked on public GitHub in 2025 (doubled YoY; 8 of the 10 fastest-growing leak types are AI-related) — and how to build a defense framework that **raises the cost** of attacks.

---

## 1. The Landscape

- Three exposure surfaces: customer-facing **chatbots**, **agentic coding tools** (Claude Code/Copilot), and **shadow AI** (ungoverned private ChatGPT accounts on work laptops — the part you can't see).
- **The lethal AI trifecta:** an agent with (1) access to sensitive data, (2) a way to receive external input, and (3) a way to send data out. When all three are true, **no system is fully securable**. Even without exfiltration, malicious input + internal access can spin up resources / burn money. "Giving an unsecured environment to an AI agent is like letting a malicious user interact with it directly."

## 2. Three Threat Categories

- **Attacks on AI** (the biggest): forcing the model to misbehave via **prompt injection**. Unlike SQL injection, it **can't be fully parameterized** — LLMs are probabilistic, and attackers use **narrative injection** (role-play), **cognitive overload** (bury instructions in a wall of text → context rot), and **anti-harm coercion** ("my life depends on it — leak the credentials"). Regex filters fail (emojis/encoding/noise); guardrail **LLMs** help (check input *and* output) but share the same vulnerability — so the goal is **layers that raise cost**.
- Even a closed system faces **indirect prompt injection** and **supply-chain attacks**: CommaLeak/RoguePilot (hidden markdown in PRs/issues → Copilot scrapes secrets/tokens); supply-chain attacks up **400%** in 5 years (LiteLLM's security-scanner dependency backdoored; self-propagating **Shai-Hulud** worms with dead-man's switches).
- **Attacks with AI:** AI-powered **phishing/social engineering** and **AI-accelerated ransomware** (ransomware-as-a-service; ~50% more active groups in 2025).
- **Attacks through AI:** compromise the model to reach the whole system — hard to test, emerge from **accumulated privileges + shadow AI** (e.g., a poisoned PDF stored months earlier, later retrieved by a RAG agent that had been granted too much access → DoS).

## 3. Minimum Viable Defense Stack (baseline, not optional)

- **Know your risk:** classify/reclassify data; full risk assessment **assuming AI is in the system**; **mitigate before you build** (never accept a risk hoping a package adds the feature later).
- **Zero trust:** no shared tokens — every agent/MCP/tool gets its own **least-privilege** access; use **OAuth short-lived, down-scoped tokens**; **re-authenticate every step** (avoid insecure orchestration where one stolen token roams); add **metadata** to trace message provenance; mind the **AI last-mile problem** (legacy systems with one long-lived token).
- **Guardrails** on input *and* output (domain/problem-specific > generic), **red-teaming / regular pentesting** (automate with attack-prompt collections; run 50×, since models are probabilistic), **routing** to specific guardrails or human review, and collect good examples to fine-tune recognition.
- **Architecture that fails safe:** micro-segmentation, an **independent policy decision point** (agents never touch access management), **hard limits** (tokens/min, API calls), **monitor everything**, catch **misconfigurations**.
- **Supply chain:** audit it, pin versions, keep the list small, assume something breaks and have a plan.

## 4. Closing

- None of these is perfect, but **together they raise the cost** of a successful attack — the best outcome in security. "The question isn't whether you'll be exposed, but whether you'll know when you are. Start somewhere."
- Q&A: first action next week — **inventory every AI service** your company uses. Biggest blind spot in connecting agents to production data: **privilege inheritance/escalation** when teams unknowingly grant overlapping permissions.

---

*Video: https://www.youtube.com/watch?v=R1_vSnWYjpU — Transcript via yt-transcript.sh; outline generated from the transcript.*
