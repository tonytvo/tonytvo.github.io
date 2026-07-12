---
title: "Modernising architecture & ways of working at Saxo Bank - Simon Rohrer | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Simon Rohrer (Saxo Bank) on modern enterprise architecture — the ABCDE model (Alignment of value/people/tech, Better value sooner-safer-happier, Continuous conversational governance, DevOps at enterprise scale, Evolution), the Conway/Ruth-Malan/value-stream triangle, the 'Hello World' layering anti-pattern, black-box GitOps governance via pull requests, automated DORA-era compliance, and a Q&A on EA placement, the architect elevator, and ServiceNow evidencing."
type: "reference"
tags: ["softwaredevelopment"]
---

# Modernising architecture & ways of working at Saxo Bank - Simon Rohrer (Talk Outline)

> A Craft 2025 (Budapest) talk by **Simon Rohrer**, head of **enterprise technology architecture and ways of working at Saxo Bank**. His arc: started 30 years ago as a developer who "wanted to be an architect when I grow up," became chief architect at **Barclays Wealth** in London, shift-*left*ed into a **ways-of-working lead** role (with John Smart and colleagues) during an agile-then-"not-a-transformation" transformation, made a "Brexit exit" to Copenhagen, and co-authored a chapter of the IT Revolution Press book **_Sooner Safer Happier_**. Thesis: **complexity is the enemy** and modern enterprise architecture is how you fight it — summarized as an **ABCDE** model. Structure: Saxo context → the industry paradigm shift → what "modern enterprise" means → A/B/C/D/E in depth → where Saxo is on the journey → Q&A.

---

## 1. Saxo Bank Context

- A "global multi-asset facilitator" — a trading platform comparable to **Robinhood / Interactive Brokers**.
- **$120 billion** assets under management; **1.2 million clients**.
- Both **B2C** (app / trading screens direct to clients) and **B2B** (APIs offered to other businesses).
- A **30-year-old tech stack** — but, unlike some banks, **no mainframes** ("I am really happy about that"), though plenty of tech debt.
- Mainly a **C#/Microsoft shop**, with newer **Python** and niche **C++**.
- **~1,200 configuration items** (lowest-level services/microservices/shared DBs) **for just one customer-facing product** — "pretty complex."
- Organized ~2.5 years ago around **value streams** ("client journeys") — **10 high-level client journeys**.
- **~2,500 people total, ~900 in tech** — small for Rohrer (he previously worked at a UK bank with ~50,000 people), "a really nice scale."

---

## 2. The Industry Paradigm Shift

### 2.1 The old siloed model
- Months planning → months coding → testing (squeezed to weeks/days) → hand off to a release team → thrown over the wall to an operate-forever team.

### 2.2 The new loop
- The best now go **concept to cash** in days or hours — "we don't necessarily even need AI for that."
- The **whole team develops and operates** the software, iterating around the loop.

### 2.3 Legacy complexity dominates the pace of change
- Techniques/tech let us go around the loop, but **legacy complexity** and a "spider's web of dependencies" dominate — especially in financial services.

### 2.4 Roger Sessions and the ABC pattern
- **Roger Sessions** (2000s) documented patterns for "simple architectures for complex enterprises": microservices-before-microservices, first called **fortress**, then **snowman**, finally **Autonomous Business Capability (ABC)**.
- His claim: "an organization that lacks a viable program in enterprise architecture will pay a severe cost in IT complexity; **complexity is the enemy** and **enterprise architecture is the only solution**."
- Sessions is now retired and runs a **meditation community in Mexico** — "maybe that's a lesson for all of us."

### 2.5 What "modern enterprise" means (five traits)
- **Teams of teams of teams** (roughly >150 employees — that number matters).
- You interact with customers **digitally**.
- **Change is the only constant.**
- A **heterogeneous** environment: old/new, big/small, slow/fast, monoliths/distributed, vendor/built.
- **Systems of systems of systems** — "really similar to Vlad Khononov's talk this morning" (fractal software).

---

## 3. A — Alignment (of value, people, and technology)

### 3.1 The Conway triangle
- **Conway's Law** (roughly): organization architecture drives system architecture — but "the design which occurs first is almost never the best possible."
- **Ruth Malan:** if system and organization architectures are at odds, **the organization architecture wins**; system architects and business/org architects (often called "managers") should not act as if their work has no impact on the other.
- **Allan Kelly:** "where all hell breaks loose is when management try to reorganize" — the software won't let it, so system architecture ends up driving the organization.
- There's a **feedback loop** among three constraining points: **organization architecture**, **system architecture**, and **business architecture (value streams)** — you must consciously align all three for **sustainable flow**.

### 3.2 The ideal team ("two-pizza / full burrito")
- **Two-pizza teams** (Amazon; Martin Fowler notes those are huge American pizzas) — roughly **<20 people**.
- **Full stack, full life cycle** ("the full burrito"), **T-shaped** people who test/analyze/develop/operate — **"you build it, you run it"** — and self-organizing.
- **Team Topologies** (Skelton & Pais) + **Dan North**: software that **fits in your head** (class/method sizes, and the team's ownership scope) — domain-driven, eventually consistent, independently deployable.
- Not really monolith-vs-microservices ("monolith vs microservices — missing the point," DevOps Enterprise Summit ~2018): it's **emergent, evolutionary architecture**. No software is an island — every piece has some coupling (an advert for **Vlad Khononov**'s book), and the same is true of teams.

### 3.3 Nested fractal organization
- **Team of teams** owns a value area (e.g., payments), roughly **<150** (Dunbar), with a **system of systems** and a domain it understands well — **nested DDD**, shared (eventually-consistent) data model, independently deployable/testable components.
- Zoom out again to a **business line** (team of team of teams / department) delivering unique value — a **system of system of systems** that fits in **no one's head**; what fits in Rohrer's head is the **organization** (who to talk to).
- Saxo: ~900 technologists → **~89 tech teams** (55 aligned to value streams as Team-Topologies **stream-aligned** teams; ~34 **platform** teams, some enabling).
- Conway again: reward design managers for keeping organizations **lean and flexible**; organizations are **fractal** (cybernetics — Stafford Beer, 1960s; Patrick Hoverstadt's *The Fractal Organization*). Note: **Dave Snowden** dislikes applying cybernetics to human systems — "but I do."

---

## 4. B — Better value Sooner, Safer, Happier (architecting for outcomes)

- Architect for **business outcomes**, not outputs/interim outcomes; principles should not be "go to cloud/Kubernetes" or "reduce duplication."
- **Better = quality; Sooner = flow; Safer = agile not fragile** (security, privacy, **minimum viable compliance** — Rohrer is in a highly regulated industry); **Happier = customers *and* colleagues, citizens, and climate**; **Value = what makes you *you***.
- **Churchill:** after Parliament was bombed he kept the opposing benches — "We shape our buildings, and thereafter they shape us." **Gene Kim** adapts it: "We shape our architecture and then our architecture shapes us" — systems grow, coordination increases, and you spend all your time coordinating instead of adding value.

### 4.1 The "Hello World" layering anti-pattern
- Even "Hello World" gets built with a team per layer: UI team, API team, business-logic team, tightly-coupled-business-logic team, database team — plus **solution architects** to orchestrate.
- "Hello" → the greeting service; "World" → the planet service; a Slappy for the space, Chrome for quotes/exclamation mark; the DB team's naming convention allows only two letters → **`t_hw`** ("who knows what that means"); the test team ships "close enough" (a missing letter isn't a showstopper) → concept-to-cash took forever.
- **Gregor Hohpe:** "layering considered harmful" — a layered architecture forces a **release train** (maybe hidden behind feature flags), because everything must be working together.

### 4.2 The restructuring fix
- **Restructure** (he's told not to say "refactor") so one full-stack/full-burrito team owns a **micro-frontend + microservice + microservice DB** → build it and run it → concept-to-cash much faster.
- **Scott Prugh** ("accounting vs. physics," a DevOps Enterprise talk): removing just **one dependency** can save ~**4x** in handoffs, with real bottom-line accounting.
- Saxo: of the 55 stream-aligned teams, some are now **full-stack** — hard on their stack (e.g., getting .NET teams great at **React**), some still work-in-progress; part of the **tech strategy** Rohrer co-writes and takes to the **board of directors**.

---

## 5. C — Continuous (conversational) Governance

### 5.1 Complexity is asymmetric
- An **HBR** article (not about software): creating and reducing complexity aren't opposites — they're **asymmetrical**; introducing complexity is **cheap**, removing it is far more **expensive** → avoid introducing it in the first place.

### 5.2 The architecture-review-board anti-pattern
- Old waterfall/hybrid phases (initiate/plan/execute/close; analysis/design/build/test/release) let an **architecture board** rubber-stamp a design after the analysis phase.
- In agile/lean, planning/execution are **continuous**, you **release early and often**, and there's no single artifact to pin down and rubber-stamp — the board doesn't fit; even less so in long-lived **product mode**.

### 5.3 Black-box GitOps governance (Saxo's pattern)
- Govern **realized (or about-to-be-realized) architectures, not paper**.
- **New service?** Submit a **pull request** to the service catalog; auto-approve, or reach out for a conversation ("this looks weird — is it really a new service, or an addition to an existing one?").
- **New connectivity** between autonomous business capabilities (gRPC / REST endpoint / Kafka topic)? Same PR flow — remember the spider's web.
- **Exceptions to automated governance** (e.g., a **synchronous** connection when async is the default)? Same PR flow.
- Not a bottleneck / no fortnightly board — it's **pull requests**; conversation only when needed.

### 5.4 Automated compliance
- **Charlie Betts** (now at Forrester): EA was "too high-handed and bureaucratic to support rapid innovation," but a proper **platform strategy** means the checks (EA + security) **already happened at the platform level**, shrinking the design/go-live checklist.
- A two-way street: architects don't block progress, but developers accept a degree of **standardization** — these are **enabling constraints**.
- Regulatory example: the EU **Digital Operational Resilience Act (DORA)** came into force in January; they bake as much genuine compliance as possible **into the pipelines**, so developers don't think about it until a **pipeline fails and tells them what to fix**.

---

## 6. D — DevOps at Enterprise Scale

- Continuous conversational governance needs a **small architecture center of excellence** working with **distributed architects** (community of practice) and long-term partners: **service management, security, and SREs** (who operate at enterprise scale) — all aligned (back to **A**).
- Evolution of the developer's scope:
  - **Old:** developer cares only about the top-left "application build" quadrant; others support/run infra.
  - **Naive:** throw the developer in at the deep end, needing full-stack depth into Kubernetes/storage.
  - **Now:** **platform engineering** reduces cognitive load — **platform developers** know most of the infrastructure; developers need to know **a little** (go "below the line" just a bit).

---

## 7. E — Evolution of enterprise architecture and organization

### 7.1 Evolutionary architecture
- **Neal Ford**'s prior-day talk on evolutionary architecture / ArchUnit; a Thoughtworks podcast on **fitness functions for distributed systems** — theoretical but inspiring.

### 7.2 Punctuated gradualism
- Two old evolutionary theories: gradual straight-line change vs. **punctuated equilibrium** (long stasis, then an asteroid-like shock); both are right → **punctuated gradualism**.
- Apply to long-lived enterprise systems:
  - **Continuous evolution / improvement:** continuously pay down tech debt — the "**20% of tech spend on improvement**" rule (not new features), also to adopt new techniques and optimize pipelines (**continuous funding**).
  - **Punctuated step change:** for a 30-year system, occasionally you need a **business case** for a big rewrite/buy/**outsource** of a part that's too slow to change or can't meet regulations.
- **Nick Tune** isn't a fan of the **strangler pattern**, but Saxo has been using it.

### 7.3 Where Saxo is on the journey
- Five years ago the landscape looked like Sessions's spider's web — and "it still looks a lot like" it; a long journey.
- They've **componentized ~30% of services** into autonomous business capabilities, upskilled teams, and changed delivery pipelines.
- **DORA metrics** are way up: **concept-to-cash (or at least a check into production) within an hour** for the most important systems, **deploy 10× a day**, **automated change advisory boards** — the old slowdowns are gone.

### 7.4 Recap of the ABCDE model
- **A**lign value/people/technology (understand all three, not bilateral deals).
- **B**etter value sooner/safer/happier (business outcomes, not de-duplication/standardization/cost-cutting).
- **C**ontinuous conversational governance (the world is not phase-gated).
- **D**evOps at enterprise scale (both sides of the wall, not just "change").
- **E**volutionary enterprise architecture (invest in existing systems; don't wait for a mythical "2.0/3.0/4.0" program).

---

## 8. Q&A

### 8.1 Q1 — Where should an EA team sit in the org hierarchy, and how does placement affect effectiveness?
- "It genuinely depends" — less about placement, more about **mandate**.
- Saxo's EA sits "to the side" but with a **strong mandate from the top**.
- Key is riding **Gregor Hohpe's architect elevator** top-to-bottom: one week presenting the **resilience strategy** to the board for sign-off, the next half hour coaching teams.

### 8.2 Q2 — Using Git for conversations means doing the work first, then getting a "no"; doesn't that make saying no harder?
- Teams **haven't necessarily done the work** — the conversation shifts to "do you really want a new service? come talk to us" (coaching the org to have those conversations early; avoid waste).
- Concrete case: to consume events from a new service you **must** submit the PR to get on the **Kafka access-control list** — "you can't do it any other way," so the governance point is enforced structurally.

### 8.3 Q3 — How much of the underlying infrastructure should a developer see?
- Currently "**too much**."
- Ideal: "**as little as possible, but not nothing**" — developers shouldn't need to know "insane nginx patterns for stopping URLs for pre-stop hooks." Like the definition of pornography, "you know it when you see it."

### 8.4 Q4 — With ServiceNow and heavy regulation, where does ServiceNow/regulatory evidencing fit in the GitOps model?
- They **still use ServiceNow** — every change request is recorded there and it remains the **point of evidence and audit**.
- Removed the need for **humans** to raise change requests in the ServiceNow UI: heavy use of **ServiceNow APIs** + **Azure DevOps** to raise, approve, and complete changes.
- They've **passed regulatory audits** on this; evidence is generated **in the pipeline**.

---

## People & References Cited

- **Simon Rohrer** — speaker; head of enterprise tech architecture & ways of working, Saxo Bank; ex-chief-architect Barclays Wealth; co-author of a chapter in *Sooner Safer Happier*.
- **Roger Sessions** — complexity patterns; fortress/snowman/**Autonomous Business Capability**; now runs a meditation community in Mexico.
- **Ruth Malan** — org vs. system architecture alignment.
- **Allan Kelly** — reorganizations and the software's resistance.
- **Melvin Conway** — Conway's Law.
- **Martin Fowler** — two-pizza teams / "full burrito."
- **Dan North** — "software that fits in your head."
- **Matthew Skelton & Manuel Pais** — Team Topologies (stream-aligned/platform/enabling teams).
- **Vlad Khononov** — fractal software / coupling (book plug).
- **Gene Kim** — "we shape our architecture…"; DevOps Enterprise Summit.
- **Gregor Hohpe** — "layering considered harmful"; the **architect elevator**.
- **Scott Prugh** — "accounting vs. physics" (dependency-removal savings).
- **Charlie Betts** — EA + platform strategy (Forrester).
- **Stafford Beer** — cybernetics; **Patrick Hoverstadt** — *The Fractal Organization*.
- **Dave Snowden** — skeptic of cybernetics for human systems.
- **Neal Ford** — evolutionary architecture / ArchUnit / fitness functions.
- **Nick Tune** — strangler-pattern skeptic.
- **Winston Churchill** — "we shape our buildings…"
- **John Smart** — ways-of-working collaborator.
- **Books/orgs:** *Sooner Safer Happier* (IT Revolution Press), HBR (complexity asymmetry), Team Topologies, DORA/DORA metrics, ServiceNow, Azure DevOps, Kafka, EU Digital Operational Resilience Act.

---

*Video: https://www.youtube.com/watch?v=9qOecF4PVDI — Transcript via yt-transcript.sh; outline generated from the transcript.*
