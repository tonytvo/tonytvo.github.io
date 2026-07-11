---
title: "AI in 6G mobile network – Benedek Kovács | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Benedek Kovács (Ericsson) on AI-native 6G networks — AI for the network vs. networks for AI, edge inference for humanoid robots, intent-based management, network sensing/radar, and sovereign/confidential computing under heavy regulation."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# AI in 6G Mobile Networks – Benedek Kovács (Talk Outline)

> Benedek Kovács of **Ericsson** (150 years old) frames 6G as **AI-native networks**, split into two aspects: **AI *for* the network** (AI embedded as network logic — fraud detection, false-base-station defense, intent-based management) and **networks *for* AI** (the network as a **regulated, trusted platform for edge AI inference**, e.g., offloading humanoid robots). Regulation, privacy, and **data sovereignty / confidential computing** run through the whole talk.

---

## 1. Framing & Ericsson

- His **first Craft Conference** talk was at the very first Budapest Craft (Bálna Conference Center), where the sound failed and he had to **dub the whole thing** — so this deck is deliberately simpler.
- **Ericsson** started as a telecom company in **1876** (~150 years ago) — present through pushcash telephone exchanges, wire lines, and mobile.
- In the **1990s** Ericsson was a major **mobile-device** manufacturer; today it does **everything but the device** — antennas, data centers, protocols, technology, business systems — everything that makes networks secure, safe, high-performing.

### 1.1 Eras of communication

- Up to the **2000s**: **human-to-human** — telecom meant **voice / getting connected.**
- **2000s (3G→4G):** **data connection.** (A famous ~2002 *Index* article predicted people would **never** pull out phones in pubs — now we "live with our phones," enabled by **4G/5G mobile broadband.**)
- Then **human-to-machine** (phone → internet/servers/cloud).
- Now emerging: **human-to-agent** — more and more **agents deployed in the network**: not just fraudulent robo-callers, but **helpful/guiding agents** and **anti-fraud agents** analyzing caller/callee (the "suspected spam" label is AI). "What you see is just the tip of the iceberg."

## 2. Regulation — The Backbone Constraint

- Mobile networks are a **regulated business**: laws dictate how they're built, implemented, operated, and what capabilities they must have.
- Examples: **legal interception** (must be able to tap a call given a legal verdict) **and** **GDPR** (guarantee privacy, anonymity, location/number protection for everyone not under such a verdict).
- Extremely important in the AI era, where a dashcam can record anyone → **privacy becomes a serious issue.**

## 3. AI *for* the Network

### 3.1 From 5G to 6G standardization (3GPP)

- **2018 / 5G:** AI began to be part of the network — **replace traditional algorithms with AI.**
- **6G study items:** **develop the network *based on* AI.** Futuristic proposals even **remove deterministic protocols** between phone and base station, substituting **agent-to-agent communication** (the network could "discuss" what connectivity you need, at what price). He doubts the extreme version happens, but some pieces make sense.
- Sensible example: a **YouTuber in a crowded area** needs **uplink** bandwidth (different from downlink) — AI lets the network **adapt per device.**

### 3.2 Security use cases

- **False base station** at a rally: an attacker **mimics an operator**; your phone pings all operators and tries to identify itself with the fake one → **privacy injured.** Networks develop algorithms to **detect and cut this out on the spot.**
- **New York incident (~6 months ago):** a van full of **eSIMs and Raspberry Pis** drove around, devices communicating — a **physical-device DDoS** that "killed the network." AI detects suspicious **device behavior.**

### 3.3 Intent-based management

- Instead of calling a raw **SMS-gateway API** (e.g., "Voltage"), define an **intent**: "send this SMS **only to users verified by the operator**" — the **network translates** what "verified" means.
- Another intent: for an event (like Craft), **create a private network slice** (like a VLAN over mobile) admitting only chosen devices for safe, reliable comms.
- Other in-network agents: **network positioning** (indoor/outdoor) under strict regulation — with consent, e.g., **verified location for bank authorization** (bankomat withdrawal flagged if your phone is in another country).

## 4. Networks *for* AI — Edge Inference

- Operators' business evolution: **2G/3G sold communication → 4G/5G sold data (to the cloud) → 6G wants to sell AI services** ("**edge AI inference**") — building **regional data centers** to serve AI use cases.

### 4.1 Delivery-robot example (US operator)

- **Delivery robots** on the streets of **Los Angeles** deliver Temu packages/food but **have no arms** — fine with automatic doors, but **US pedestrian crossings require pushing a button.**
- Solution (a US operator + robot maker): the robot **recognizes a nearby human and asks them to push the button.** "Mixed performance" — humans aren't always nice; **robots get kicked.**

### 4.2 Why humanoid robots

- Question: do we need **humanoid** robots vs. purpose-built ones? Insight: **the world is built for humans** (door sizes, buttons, chairs, obstacles) — so **humanoid behavior is often desired** (sometimes just arms/upper body, sometimes legs like robot dogs).

### 4.3 The three-way trade-off & offload

- Robotic movement metrics in three dimensions: **reaction time** (how fast it reacts), **token rate = responsiveness/real-time**, **model size = sentience** (how smart the decision, e.g., the angle to grab a glass). There's a **trade-off** among them.
- **Today, on-device (no offload):** a chart of **max hostable model size (y)** vs. **token output rate (x)** — a trade-off curve. Even extrapolating AI-accelerator progress to **~2030**, on-device **isn't enough** → companies actively pursue **offloading.**

### 4.4 Why offload must often be local, not cloud

- **Latency + jitter:** you normally ping a server and get ~30–50 ms round trip, but AI inference (even audio-visual/camera feed) needs **all packets present** before the GPU's next cycle — **jitter** (packets at 100–200 ms) causes delay even on the best networks if bandwidth is short — worse on the internet. So cloud offload is often **not feasible**; download models **locally.**
- **Data sovereignty (the bigger reason):** humanoid robots run in **factories** with **sensitive production data** that enterprises **won't let leave the premises**; a **city surveillance system** should be processed in-country (e.g., Hungary), not US/China. **EU countries** regulate that such data **must not leave the country**; **India** — not leave its regions. So models run on the **regional edge**, not the cloud.

## 5. Evolving the Exposure Layer

- **Differentiated connectivity** is already implemented — **network APIs** let you ad-hoc request **uplink bandwidth** (perhaps for a price) for influencer streaming.
- **Tomorrow:** more **AI-enabled interfaces** — service exposure via **Model Context Protocol** and **agent-to-agent protocols**, treating the **mobile network as an agent** whose services are represented in an "MCP." (Exact design still in progress.)

### 5.1 The next-generation network platform

- Left side: a **regulated, trusted platform for AI workloads** providing **coverage/uplink**, **location** (verify user location), and **sensing.**
- **Sensing** — a headline 6G feature: use the network **as a radar** (detect a drone, a speeding vehicle). Analogy: university papers claim **Wi-Fi can sense a heartbeat / heart attack in the next room**; he's seen Wi-Fi detect hand positions through a wall. Mobile networks would work similarly — big innovation area, many startups.
- But: if the network can sense, **you don't want to be sensed from outside** — everything exposed via **network agents** that keep **GDPR** while keeping interfaces **open for innovation.**

## 6. Conclusion — AI-Native Networks

- Moving from **AI added to the network** → **AI-native networks (6G).** Two concepts: **AI for the network** (logic built in) and **networks for AI** (network designed for AI).
- Traffic types differ — **voice**, **video download**, and **agent-to-agent** each have different characteristics; the network can be **optimized per traffic type.**
- **6G as AI-network solutions** for **secure, reliable, trusted, sovereign AI applications** — a very important new area.
- **Confidential computing** case: with a **Swedish truck manufacturer**, Ericsson **verified the entire software stack** touched by a packet (device → server → device) so the operator can prove **no eavesdropping or malicious content.** "No cloud provider today provides this" — they can offer tenant separation and claim sovereignty but **can't prove** it with software tools.

## 7. Q&A

- **Reticulum protocol / mesh networks?** Hasn't heard of it — interested (offline chat).
- **What problem does 6G solve that consumers aren't asking for?** Mainly **enterprises/providers**, not consumers — consumers want a "safe city," authorities want **secure/private computing.**
- **Will users notice 6G?** Short answer: **invisible.** Indirectly, once your phone's **AI agent** negotiates with the network you'll see the benefit.
- **Do we need 6G or are we underutilizing 5G?** Depends on the region. **4G/LTE was designed for the long term** — 6G radio is compatible with 4G radio, cores compatible with cores; the distinct new feature is **sensing** (used by apps, not a direct consumer feature). Many regions face **frequency/bandwidth shortages** (China, US, Japan, India); Hungary doesn't.
- **VPN-like ability to virtually change operator?** Yes — VPN-like features exist (operators run hundreds of VPNs); with **eSIM** consumers can already switch quickly; 6G brings **widely available enterprise device VPNs** (e.g., for service robots).
- **Building AI into the network or networks for AI?** **Both.**
- **Edge AI vs. cloud AI importance?** **Edge** is mainly **B2B** with specific models and privacy/sovereignty needs; centralized **cloud** AI runs things like **fraud-detection agents.**
- **Most exciting 6G use case?** Turning **base stations / edge entities into AI contexts** — sense a drone, point a camera, gather device info to build an **environmental context** for smarter app decisions. **Sensing** will be the "aha, this is 6G not 5G" moment.

---

## People, Companies & References Cited

- **Benedek Kovács** — speaker; **Ericsson.**
- **Ericsson** — founded 1876; builds everything but the mobile device.
- **3GPP** — standardization (5G AI in 2018; 6G AI-native study items).
- **Model Context Protocol** & **agent-to-agent protocols** — planned network service exposure.
- Examples/cases: US delivery robots (Temu/LA), humanoid-robot manufacturers, a **Swedish truck manufacturer** (confidential computing), the New York eSIM-van DDoS, false base stations, "Voltage" SMS gateway, the ~2002 *Index* pub-phone prediction.
- Concepts: AI for the network vs. networks for AI, edge AI inference, intent-based management, network slicing, network sensing/radar, data sovereignty, GDPR / legal interception, confidential computing, reaction time / token rate / model size trade-off, jitter vs. inference.

---

*Video: https://www.youtube.com/watch?v=vARsbVTiDo0 — Transcript via yt-transcript.sh; exhaustive outline generated from the full transcript.*
