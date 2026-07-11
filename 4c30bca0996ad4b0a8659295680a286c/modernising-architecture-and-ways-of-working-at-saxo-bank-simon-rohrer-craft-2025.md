---
title: "Modernising architecture & ways of working at Saxo Bank - Simon Rohrer | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Simon Rohrer (Saxo Bank) on modern enterprise architecture — the ABCDE model (Alignment, Better value sooner safer happier, Continuous governance, DevOps at scale, Evolution), black-box GitOps governance, and taming legacy complexity."
type: "reference"
tags: ["softwaredevelopment"]
---

# Modernising architecture & ways of working at Saxo Bank - Simon Rohrer (Talk Outline)

> Simon Rohrer (Head of Enterprise Technology Architecture & Ways of Working at Saxo Bank, co-author of a *Sooner Safer Happier* chapter) on modern enterprise architecture in a 30-year-old, highly regulated fintech stack.

---

## 1. The Context & the Complexity Problem

- Saxo Bank: a global multi-asset facilitator (~$120B AUM, 1.2M clients, both B2C and B2B via APIs), a **30-year-old** mostly C#/Microsoft stack (no mainframes, but real tech debt), ~1,200 configuration items **for a single product**, ~900 technologists organized around **10 client-journey value streams**. A **paradigm shift** over 25 years moved software from siloed months-long plan/code/test/handoff phases to teams that **build *and* run** software, concept-to-cash in days or hours.
- But **complexity in the legacy landscape dominates the pace of change** — a spider's web of dependencies. **Roger Sessions**: an org lacking a viable enterprise-architecture program pays a severe cost in IT complexity; **complexity is the enemy**. His "autonomous business capability" (ABC) was microservices before microservices.

## 2. Modern Enterprise Architecture: ABCDE

- **Modern enterprise** = teams of teams of teams (>~150 employees), digital customers, constant change, heterogeneous (old/new, big/small, monolith/distributed, built/bought), and **systems of systems of systems**. The model:
- **A — Alignment.** Conway's Law and a **feedback-loop triangle** (Ruth Malan): organization architecture, system architecture, and **business architecture (value streams)** all constrain each other — align all three for sustainable flow. Nested **two-pizza teams** (full-stack, full-lifecycle "full burrito," software that fits in the team's head) → **teams of teams** (~≤150, Dunbar) → business lines. Saxo: ~89 tech teams, 55 stream-aligned, ~34 platform/enabling; a **fractal organization**.
- **B — Better value, Sooner, Safer, Happier** (architect for **outcomes**, not outputs like "go to cloud" or "reduce duplication"): quality, flow, agile-not-fragile/minimum-viable-compliance, and happier customers/colleagues/climate. "We shape our architecture and then it shapes us" (Kim) — layered "Hello World" architectures force release trains; restructure so one full-stack team owns a micro-frontend + microservice + DB. Removing one dependency can cut handoffs ~4× (Scott Prugh).

## 3. Governance, DevOps at Scale & Evolution

- **C — Continuous (black-box) governance.** Architecture **review boards** are an anti-pattern in a lean/DevOps world (no single artifact to rubber-stamp). Instead, govern **realized architecture, not paper**, via **GitOps**: want a new service or a new connection between capabilities (default async)? Submit a **pull request** to the service catalog — approved instantly, or triggers a quick conversation. Compliance (e.g. EU **DORA**) is **baked into pipelines** so developers only deal with it when a pipeline fails and tells them what to fix (Charlie Betts: platform strategy shrinks the old checklists; enabling constraints).
- **D — DevOps at enterprise scale.** A small **architecture center of excellence** + distributed architects (community of practice), aligned with service management, security, and SREs. **Platform engineering** reduces cognitive load: developers need to know *a little* below the line, not deep Kubernetes/storage.
- **E — Evolution.** **Punctuated gradualism** — continuous improvement (the **20% of spend on tech debt / new techniques**, continuous funding) *plus* occasional **step changes** (business case for a rewrite/buy/outsource) to sustain systems over 30+ years. Saxo has modernized ~30% of services into ABCs, upskilled teams, and pushed **DORA metrics** up (concept-to-cash within an hour, deploy 10×/day, automated change advisory boards). Q&A: an EA team's effectiveness depends on **mandate** and the ability to "ride the architect elevator" (Hohpe) top to bottom, not org placement; ServiceNow still holds the regulatory audit trail but changes are raised/approved/completed via automated Azure DevOps pipelines; developers should see **as little infrastructure as possible, but not nothing**.

---

*Video: https://www.youtube.com/watch?v=9qOecF4PVDI — Transcript via yt-transcript.sh; outline generated from the transcript.*
