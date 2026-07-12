---
title: "Platform Team Structures and Concerns - Adrian Cockcroft | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Adrian Cockcroft on platform engineering — layered evolving platform stacks treated as products, Wardley-mapped platform evolution, Nubank's doomsday-clock prioritization, and Netflix's immutable/version-aware-routing pattern for simultaneous stability and rapid change."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Platform Team Structures and Concerns - Adrian Cockcroft (Keynote Outline)

> **Adrian Cockcroft** — best known as **Netflix's cloud architect** during the AWS migration, early DevOps/microservices/chaos-engineering advocate, ex-**AWS VP** (open source + sustainability), retired 2022, now advises via **OrionX.net** (Nubank, netai.ai). Real-world platform-engineering lessons from **Netflix and Nubank** in three parts: **principles → evolution (Wardley mapping) → making it work.** (Opens by recommending you book extra days in Budapest and get a Hilton room with a Fisherman's-Bastion view.)

---

## 1. Where Platform Engineering Came From

- Three roots: **Kubernetes is complicated** (needs better tooling to become a manageable platform); **vendors** promoting "platform engineering" to sell products; and the **Team Topologies** platform-team concept.

## 2. Four Platform Principles

1. **You don't build a platform — you build a layered stack of platforms.** Each layer has different knowledge/tooling/ownership; different teams own different parts.
2. **Platforms evolve and move up the stack** — they accumulate functionality and **sediment out** things to layers below → keep platforms **thin** and continually **re-evaluate/refactor**.
3. **Treat it like a product** — every platform team needs a **product manager** (or a line manager good at product management) with a **roadmap** to prioritize incoming feature requests. Teams that do this well **hire product experts**.
4. **Distinguish internal vs. external platforms.** External (e.g., the **Netflix API baked into TV firmware** — a remote's Netflix button must keep working for 5–10 years) must be **extremely stable / never break**. Internal platforms change **constantly** and are **messy** — many incompatible versions running at once.

### 2.1 The platform stack
- **Deploy** (Kubernetes / serverless like Lambda) → **virtualization/networking** (VMware / EC2 / cloud) → **language** platforms (JS/Rust/Go people differ) → **OS** (Windows/Linux) → **hardware vendors/instance types**.

### 2.2 Netflix strategy (~2010)
- **AWS as a stable base** + a **thin, fast-changing internal layer**; avoid vendors that "add functionality" to AWS (to keep pushing AWS to grow). Build what's missing (own **KMS** before AWS had one), then **retire it and migrate** when AWS ships theirs. **Open-source some components.**
- **Vendors vs. open source:** a vendor **externalizes and must keep its interface stable** (good only for **slow-changing** parts — e.g., SWIFT/banking APIs), but internal fast-changing parts (routing traffic among microservices) suit internal platforms. Vendor incentive is to **fatten their layer** for lock-in — wrong for a thin, fast-evolving platform. So Netflix **preferred open source**, often **contracting vendors to support the OSS they built** — **Netflix was NGINX's first customer** (paid the founder to start the company); had committers on **Cassandra**, contributed to **Zookeeper**.
- **Domain-specific platforms:** online services, personalization (lots of C++), video players, data science (Python), encoding, security — each with a custom platform on different stacks (most code Java, mobile Swift, web JS). **Internal developer platforms** split into a **developer-experience** platform (CI/CD, library support, vendor integration) and a separate **container/orchestration/infrastructure** platform team.
- **Takeaways:** layered evolving stack; product thinking; know your internal customers; use vendors to support your OSS; separate infra from dev-experience; **optimize for change where you can, stability where you must.**

---

## 3. Platform Evolution via Wardley Mapping

- Always start with **what problem / user (or business) need** are you solving — *not* "install Kubernetes" (wrong answer). Aim at faster feature delivery / international launch / lower cost. (Liam Maxwell printed the "user need" on his phone case to wave in UK-gov meetings.)
- Build the **value chain of dependencies** behind the user need, consider **time to value**, and you get a **Wardley map**: things **commoditize rightward**; you build new things on top; the **innovate → leverage → commoditize** cycle. Getting stuck on a fixed architecture ignores that your foundation is becoming a commodity.
- **Map columns:** *Genesis/uncharted* (e.g., "sprinkle some AI on it"), *Custom* (your business logic), *Product* (product teams building something), *Commodity/utility* (bought-in — Android/iOS from Apple/Google, cloud services).
- **Worked example — faster personalized travel search** (business wants faster releases + lower cost): search UI on top of a travel data store (Sabre/Amadeus), used by an Expedia/TUI-like site. Simon Wardley wants a "most comfortable seats / specific plane" option → more searching → more cost → move **NGINX to cloud API Gateway**, the **travel search to a Lambda**, the **cache to Redis**, migrate the data-center travel search to cloud; **Amadeus can run in-cloud** next to you (plug in directly). The map becomes a shared, **argue-every-arrow roadmap** for platform migration.

---

## 4. Nubank

- **Nubank:** one of the world's largest digital financial platforms — **118M customers** (100M+ Brazil, ~10M Mexico, a few million Colombia), founded 12 years ago cloud-native (**AWS/Brazil**), going global. The app is far more than banking: credit cards, loans, insurance, brokerage, marketplace, travel, World-Cup **betting**, crypto — all in one.
- **Stack:** all **Clojure**, thousands of microservices, **Datomic** (immutable storage) + **DynamoDB** (one of AWS's largest DynamoDB customers), Python for data science, **Istio** service mesh, **Kafka**, on **Kubernetes (EKS)** — tens of very large clusters with **Karpenter**, on **EC2 Intel + Graviton (ARM)** on-demand and heavy **spot market**. "**Core banking on Kubernetes on the spot market on ARM chips** — a traditional banker's head explodes." **~24.5k deploys in April** (~**1,000/day**), ~1,000 engineers.
- **People:** Ed Wible (founding technologist), Vitor Olivier (CTO); Nubank bought **Cognitect** (2020) — **Rich Hickey** (Clojure creator), **Stuart Halloway** (Datomic/Clojure core), **Justin Gehtland** (now VP eng); **Michael Nygard** (*Release It!*) is chief architect; **Cat[herine]** is GM of the platform/foundation org. Cockcroft got involved as AWS's executive sponsor for Nubank, then joined as adviser after leaving AWS.
- **Doomsday-clock prioritization:** with too many platforms, old versions, tech debt, scalability limits, and 20–30% (Mexico >100%) yearly growth — each component's PM estimates **when it stops working** and **how long to fix**; sort by that "doomsday clock" and clear the top so you never hit the doomsday point (non-critical stuff can wait).
- **Cockcroft's work there:** the in-house **observability** platform (Victoria Metrics + Grafana, replaced Splunk); **controllability** (the reliability team — chaos testing, game days, incident management — "if you can control your system, it's reliable"); and new **workload-analysis** tools with the system-performance team (**vibe-coding Python in Cursor** with Claude — tools he could never persuade anyone to write).

---

## 5. Simultaneous Stability + Rapid Change (the Netflix pattern)

- The conflict: a platform must add features/fixes fast **and** be extremely stable (one bug breaks everything).
- **Not all teams are the same:** high-change-appetite teams (building new, not yet business-critical) run the **new platform version and debug it**; once stable, it **sediments** to everyone who "just wants it to work."
- **Versioning:** "there's no perfect way — just less-bad options." The chosen approach (slides from 2016, in his microservices-workshop GitHub):
  - **Immutable service pattern:** each push starts a **new autoscale group / version** alongside the old — you can deploy **the most broken code to production with zero risk** because nothing routes to it yet (blue/green + more).
  - So the fundamental capability is **version-aware traffic routing** (built 2010; "a lot of people still don't use it"). Switch versions via **AB tests / feature flags** (LaunchDarkly; then Wasabi) or direct routing tweaks.
  - First users of a new capability are the **developer/test engineers in a test cell (testing in production)**; then add a **cohort**, look for **measurable improvement** (hypothesis-driven development — *Lean Enterprise*), roll back if none.
  - **Garbage-collect old versions asynchronously** — getting to production is synchronous/immediate; cleanup takes as long as needed ("that's why it gets messy"). Cleanup is either **incremental** or **stop-the-world** ("**Breaking Build**" — quarterly posters with a date; old versions get failed/labeled bad; concentrate the pain).
  - **Change one thing at a time (version pinning):** to test a new **platform library**, keep known-working code + pinned dependencies and change only the platform lib; then dependencies; then your own code — makes breakage trivial to locate (automatable via the build pipeline unpicking multi-deploys).
  - **The client library is the interface** (not the wire protocol) — like a disk's device driver, not the raw SCSI; import the service owner's client library from artifactory and let them hide all wire-protocol versioning. Building a client also makes you consume/load-test your own service; keep it a **simple driver** (not a file system).
  - **Avoid shared object models** — a client and server sharing an object definition are **fully coupled**; instead use **facets** (the customer service knows the full object; a client that only needs names has a different object; the cache serves the requested subset) to break accidental coupling. Fine in a monolith (shared address space), must be broken in microservices.

---

## 6. Replacing Himself with AI

- Built an **AI persona ("Ask Supra Cockcroft")** fed with all his published content — "a better answer than I'd have typed." Open-sourced **MigGPT** (vibe-coded in Python with ChatGPT) to ingest anyone's content (YouTube playlists, book PDFs, files via a CSV + shared Google Drive) into an LLM ("AI, build thyself"; "Claude keeps telling me to use MCP, so I'm asking Claude to figure out MCP"). Send a PR to be an additional sample author. "If I can replace myself completely with AI, I can really retire" — next year, an animated AI Adrian reading the slides that still takes questions.

---

## 7. Q&A

- **How risky is relying heavily on AWS/Azure as integral platform parts — technical or religious choice?** Per **Deming** (via John Willis) and the Japanese auto **keiretsu**: **pick suppliers, go deep, build a mutually beneficial relationship.** Netflix and AWS made each other better; leaving would have been a huge blow, so AWS took great care of them. Avoid too many suppliers at once and get out of **abusive** relationships.
- **Patching old versions on a bug/vulnerability?** If it's in the **platform** (e.g., a Linux security bug), **swap the platform layer under the pinned code**, test, roll out; if it's in **your code**, rapidly retire that version. Cleanup is incremental or "Breaking Build."
- **How many versions run at once / timely cleanup?** "No idea — lots, unlimited." It looks confusing but works; wanting things **tidy** makes evolution hard. The reliability win is that **old versions keep working regardless of new ones** (adding a lightly-used new version is a cleaner rollback than replacing running code). (This was the 2010–2014 Netflix system.)

---

## People, Companies, Tools & References Cited

- **Adrian Cockcroft** — speaker; ex-Netflix, ex-AWS; **OrionX.net**, Ask Supra persona, **MigGPT**.
- **Nubank** people: **Ed Wible, Vitor Olivier, Rich Hickey, Stuart Halloway, Justin Gehtland, Michael Nygard** (*Release It!*), Cat[herine] (GM foundation).
- **Simon Wardley** (Wardley maps), **Liam Maxwell** (UK gov), **Team Topologies**, **W. Edwards Deming / John Willis** (suppliers/keiretsu), **Kent Beck** (keynote referenced).
- Tech: AWS/EKS/EC2/Graviton/DynamoDB/spot, Kubernetes, Karpenter, Clojure, Datomic, Istio, Kafka, NGINX, Cassandra, Zookeeper, Victoria Metrics, Grafana, Splunk, LaunchDarkly, Wasabi, Cursor/Claude, *Lean Enterprise*.
- Concepts: layered platform stack, thin evolving platforms, product-managed platforms, internal vs external, Wardley mapping, doomsday clock, immutable service pattern, version-aware routing, garbage collection / Breaking Build, version pinning, client-library-as-interface, facets.

---

*Video: https://www.youtube.com/watch?v=aHrvYT8W-vM — Transcript via yt-transcript.sh; outline generated from the transcript.*
