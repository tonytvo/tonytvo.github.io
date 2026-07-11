---
title: "Platform Team Structures and Concerns - Adrian Cockcroft | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Adrian Cockcroft on platform engineering — layered evolving platform stacks as products, Wardley-mapped platform evolution, Nubank's doomsday clock, and Netflix's version-aware routing for stability + change."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Platform Team Structures and Concerns - Adrian Cockcroft (Keynote Outline)

> Adrian Cockcroft (ex-Netflix cloud architect, ex-AWS VP; advises Nubank) on real-world platform engineering — how to structure for success and what to avoid — in three parts: principles, evolution, and making it work.

---

## 1. Platform Engineering Principles

- Came from **Kubernetes complexity + vendors selling "platform engineering" + Team Topologies**. Four principles: (1) you don't build *a* platform — you build a **layered stack** (deploy → virtualization/networking → language → OS → hardware), each with different ownership; (2) platforms **evolve upward**, sedimenting functionality to layers below — keep them **thin**; (3) treat each as a **product** with a product manager and roadmap; (4) distinguish **internal** (fast-changing, messy, many incompatible versions) from **external** (stable — the Netflix API baked into TVs for 10 years).
- **Netflix strategy (2010):** thin fast-changing layer on **AWS as a stable base**; build what's missing (own KMS), retire it when AWS ships theirs. Prefer **open source over vendors** (vendors fatten their layer for lock-in; Netflix funded NGINX, committed to Cassandra/Zookeeper). Separate **infrastructure** and **developer-experience** teams; "optimize for change where you can, stability where you must."

## 2. Platform Evolution via Wardley Mapping

- Start from **what problem / user need** (not "install Kubernetes"), build the dependency value chain, and map evolution (genesis → custom → product → commodity) with the **innovate-leverage-commoditize** cycle. Example: faster personalized travel search → move NGINX to API Gateway, search to Lambda, cache to Redis, plug Amadeus in-cloud. The map becomes a shared, argue-the-arrows **roadmap**.

## 3. Nubank & Making It Work

- **Nubank:** 118M customers, cloud-native (AWS/Brazil), thousands of **Clojure** microservices (bought Cognitect — Rich Hickey/Stuart Halloway; Michael Nygard is chief architect), Datomic + DynamoDB, ~**24.5k deploys/month** (~1,000/day), core banking on **Kubernetes + spot market + ARM/Graviton**. Prioritize platform work via a **"doomsday clock"** — each component's PM estimates *when it stops working* and *how long to fix* → sort and clear the top.
- **Stability + rapid change (Netflix):** not all teams are the same — high-change-appetite teams debug new platform versions; stability sediments to everyone else. The key is **version-aware traffic routing** + the **immutable service pattern** (deploy a new version alongside; zero risk until you route traffic). Roll out via canary/feature flags/AB tests, **garbage-collect** old versions asynchronously ("Breaking Build" quarterly cleanups). **Version pinning — change one thing at a time** (platform lib, then dependencies, then your code) makes breakage trivial to locate; the **client library is the interface** (not the wire protocol); avoid shared object models (use **facets** to break accidental coupling).
- Bonus: he built an **AI persona** ("Ask Supra Cockcroft") fed with his content, and open-sourced **MigGPT** (vibe-coded in Python) to ingest one's content into an LLM — "if I can replace myself with AI, I can really retire." Q&A: pick suppliers deeply (Deming/keiretsu, mutually beneficial); patch old versions by swapping the platform layer under pinned code.

---

*Video: https://www.youtube.com/watch?v=aHrvYT8W-vM — Transcript via yt-transcript.sh; outline generated from the transcript.*
