---
title: "AI in 6G mobile network – Benedek Kovács | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Benedek Kovács (Ericsson) on AI-native 6G networks — AI for the network vs. networks for AI, edge inference, sensing, and sovereign/confidential computing."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# AI in 6G mobile network – Benedek Kovács (Talk Outline)

> Benedek Kovács (Ericsson, 150 years old) on how 6G becomes **AI-native** — two complementary directions: **AI *for* the network** and **the network *for* AI** (edge inference).

---

## 1. The Communication Ladder

- Telecom evolved human-to-human (voice, →2000s) → mobile broadband/human-to-machine (3G/4G/5G) → **human-to-agent** (more AI agents in the network — spam/fraud detection is the visible tip). Mobile networks are a **regulated business** (legal interception *and* GDPR/anonymity) — critical as AI raises privacy issues.

## 2. AI for the Network

- 3GPP moved from adding AI (5G) to **designing the network based on AI** (6G study items) — e.g., agent-to-agent negotiation of connectivity/price (futuristic), or adapting to a YouTuber needing **uplink** vs. downlink bandwidth in a crowd.
- Security examples: detecting **false base stations** at protests (protecting privacy), and a NYC **DDoS-with-physical-devices** van (eSIMs + Raspberry Pis) flagged by anomalous device behavior.
- **Intent-based management:** declare intent ("only SMS verified users"; "create a private network slice/VLAN for this event") and the network translates it; plus positioning (opt-in **verified location** for bank-card fraud checks).

## 3. Networks for AI — Edge Inference

- Operators want to **sell AI services** over 6G (edge AI inference), building **regional data centers**.
- Examples: US delivery robots that ask nearby humans to push crossing buttons (they lack arms); **humanoid** robots (the world is built for humans) whose movement trades off **reaction time / token rate (responsiveness) / model size (sentience)** — today's on-device hardware can't hit all three, so companies **offload**.
- But cloud offload hurts: **latency + jitter** (the GPU waits for all packets), and — more importantly — **data sovereignty** (factory/production data and city-surveillance feeds must not leave the country; EU/India regulations). So models run on the **regional edge**.

## 4. Where It's Heading

- Already shipping **differentiated connectivity** (ad-hoc uplink via network APIs); next, **AI-enabled interfaces** exposing the network via **MCP / agent-to-agent** so the network is a "mobile agent."
- 6G as a **regulated, trusted platform** for AI workloads: coverage, verified location, and **sensing** (the network as a radar — detect drones, speeding vehicles; even Wi-Fi can sense a heartbeat) — all exposed via **network agents** that keep GDPR while opening interfaces for innovation.
- **Sovereign/confidential computing:** with a Swedish truck maker, verified the **entire software stack** touching a packet — provable that no one eavesdrops or injects malicious content (something cloud providers can't prove today).

## 5. Q&A Highlights

- 6G solves problems for **enterprises/providers**, not consumers directly (a "safe city" vs. asking for surveillance cameras); users notice it **indirectly** via AI agents on their phones negotiating with the network. Its most distinctive new feature is **sensing** ("aha, this is 6G, not 5G"). **Edge AI** is for B2B/privacy/sovereignty use cases; fraud-detection agents run centrally in the cloud.

---

*Video: https://www.youtube.com/watch?v=vARsbVTiDo0 — Transcript via yt-transcript.sh; outline generated from the transcript.*
