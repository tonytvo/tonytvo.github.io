---
title: "Map and Measure your way to Performance - Steve Pereira | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Steve Pereira on flow engineering — the $20M artifact-deployment story that would have delivered zero lead-time improvement, why AI/tools off the constraint just move the dam, the five mapping activities (outcome → value stream → dependency → future state → flow roadmap), value-stream-mapping mechanics and data, and a Q&A on capabilities-vs-products, VSM vs. theory of constraints, and getting good-enough data."
type: "reference"
tags: ["softwaredevelopment"]
---

# Map and Measure your way to Performance (Flow Engineering) - Steve Pereira (Talk Outline)

> A Craft 2025 (Budapest) talk by **Steve Pereira** — two decades improving flow of work; roles across tech support, IT management, build/release engineering, and founding CTO of an enterprise SaaS; lead consultant at **Visible (value-stream consulting)**, board adviser to the **Value Stream Management Consortium**, chair of the **OASIS Value Stream Management Interoperability** technical committee, co-founder of the **Flow Collective**, and (since 2017) developer of **flow engineering**. Thesis: productivity isn't the point — **getting the *right* things done** is; most organizations are distracted by shiny objects (AI mentioned "in the triple digits" today) and micro-optimize off the constraint, spending big for zero bottom-line impact. Flow engineering fixes the **how** of work via a sequence of mapping activities that turn noise into signal and produce a data-backed roadmap. Aimed at current and aspiring **leaders**. Structure: the proposition → the $20M story → constraints/AI → value streams & VSM → the five maps → where to apply it → Q&A.

---

## 1. The Proposition of Flow Engineering

### 1.1 The right things, not just more things
- Being more productive while "running in the wrong direction" just **creates waste** — more distance between you and the goal.
- We're constantly distracted by **shiny objects**; we want **signal, not noise** — actionable insights that hit the **bottom line**.

### 1.2 It's about *how* we work
- The biggest difference usually isn't the latest tool/technology or *what* we work on, but **how** we work — often lots of **low-hanging fruit**.
- Flow engineering aims squarely at that **how**.

---

## 2. The $20M Artifact-Deployment Story

- Early in his consulting career (before he'd even named it "flow engineering" — "just a catchy title"), doing **value stream mapping**.
- A large org called him in to help **make the case for automating artifact deployment** — they already had a tool target and needed to convince leadership.
- Measuring a typical flow through their value stream revealed **two other opportunities** with **10× and 100× the impact** — artifact deployment was **not their biggest bottleneck**.
- The automation would have cost **~$20 million** (rolled out across teams), taken **18 months** plus training — impact on actual lead time: **zero, no noticeable difference**.
- Lesson: as leaders pitching leaders/teams, show **measurable results quickly**; choose measurable low-hanging fruit over a tool that "may pay off in the future" with massive investment. **Go with the data.**

---

## 3. Constraints and Where AI Actually Helps

### 3.1 Off-constraint effort is wasted
- Your constraint usually **isn't** "we can't create more code" — adding a code-gen bot just piles work up at the existing constraint.
- Metaphor: breaking one dam only floods a **reservoir with another dam** — no throughput gain, just clogging.
- This applies **anywhere that isn't your constraint**: even more effective testing doesn't help if the constraint upstream means there's **less to test**.

### 3.2 Address the hot spots
- Target the **choke points** that meaningfully limit throughput — what the org, bosses, and customers care about.
- Big piles of work = customers waiting, work aging, no feedback → **risk and waste** to avoid.

---

## 4. Value Streams and the Visibility Problem

### 4.1 What a value stream is
- Delivering value often means traversing the **entire org chart** — divisions, approvals, up/down/across — all "in the way" of getting an idea to production and getting feedback.
- That end-to-end path is the **value stream**; in many orgs it isn't even a defined/shared term.

### 4.2 Siloed visibility → micro-optimization
- We can't see the whole value stream, so we **micro-optimize** — the same mistake as adding AI off the constraint: won't help, may hurt.
- Leaders should **tighten the connection between what they think will happen and what actually happens**, and be able to hypothesize/demonstrate/sell results with **data and better illustrations**.

---

## 5. Value Stream Mapping

### 5.1 What VSM is
- Represent the **entire flow of activity**, then **measure it** to collect data that tells a story about performance.
- The map enables a **productive conversation** — point at things, shift focus, weigh opportunities against each other.

### 5.2 Focal points
- You can't improve everything at once — dividing focus means getting nothing done.
- The map gives **focal points** to prioritize against a goal (quality, throughput, time-to-feedback) — "let's focus on bottleneck one," or divide and conquer with a **hypothesis** about the improvement.

### 5.3 Bridging business and tech
- A shared map + numbers lets **business and tech** agree/disagree on data and representation but **agree on where to focus** — business understands capacity/bad upstream requirements/broken test environments; tech understands strategy/aggressive targets/throughput.
- A **single focal point** saves time and stops people talking past each other.

---

## 6. The Flow Engineering Sequence (Five Maps)

> A sequence from identifying value to enabling flow by designing a future state; each map builds on the previous. You *can* skip to flow roadmapping if you already know what to do, but Pereira suggests starting from the outcome map. Roles: the **value stream**, a **key sponsor** (someone who can say yes/give budget), a **facilitator** (ideally not part of the value stream, to arbitrate politics/feelings), and **representation** across the value stream (who build the picture and feel ownership). Target: each workshop **~90 minutes**.

### 6.1 Map 1 — Outcome mapping
- **Discovery** of the current state: pains, goals, context — acknowledge concerns or people disengage.
- **Affinity map** the raw material (noise → signal), then distill a **target outcome** for the next ~3 months.
- Cadence: do it, deliver, **monitor ~3 months, reassess**. "Do it once and see how it goes"; going **zero to one** is meaningful.
- Get the working group **bought in** ("what's in this for you?" — people may benefit only indirectly), then surface **obstacles** and **next steps**.
- You don't have to use outcome mapping (some use **impact mapping**), but **set a clear target before starting**.

### 6.2 Map 2 — Value stream mapping
- Finding value streams: you have one **anywhere you deliver value today** — work **backwards** from how value reaches the customer.
- Examples everywhere: **platform development**, **hiring new employees** — any value-delivering process is a value stream.
- Trace backwards through the activities, then **add data** — commonly **cycle time** and **wait time**.
- **Data fidelity matters less than relative value:** if most activities take hours and one takes weeks, precision on the hours is insignificant — outliers don't need precision. In software orgs going zero-to-one, "there's opportunities all over the place."
- The current-state map is the **baseline** for comparing to the future state and the **ROI story** ("nobody gives budget for free").
- Detail (rework, tools/artifacts, roles) has **diminishing returns** — you just need a focal point.
- **Example:** a financial institution's **two-year, $2M-per-feature release process** (large batches); color-coding tells the story. Quick wins: **pull sequential steps into parallel**, drop steps once thought mandatory, automate the easy ones, combine meetings.
- The human payoff: a project manager of **19 years** saw the process **end-to-end for the first time**; others met people they hand work to daily for the **first time**.
- The multiplier: mapping several value streams reveals **common issues** — fix a shared platform (e.g., artifact deployment) and you **"raise the tide for all those boats."** You don't have to map everything to improve everything.

### 6.3 Map 3 — Dependency mapping
- Dig **deeper** into what actually contributes to the constraint / makes the hot spot problematic.
- Rule: **only dig where there's gold** — find a nugget, look for the vein, but **don't strip-mine** the whole environment (keeps it fast).

### 6.4 Map 4 — Future state mapping
- **Design a better system of work** — highlight everything you could do to improve performance (ideas, actions, experiments).

### 6.5 Map 5 — Flow roadmap
- Surfaced opportunity you don't act on is **waste — worse than nothing** (people get excited, nothing happens; cf. the retro that ends "we'll try better next time" with no action).
- **Prioritize** at the nexus of **easy-to-do and very valuable**; plot on a **now/next/later** roadmap.
- What's different: don't just list things to do — define **how you'll know you're headed the right direction**, measures of progress, **owners**, and who **tees up the next thing** (no need for later's metrics yet).
- The narrative: "here's what we wanted, where we started, what we noticed, what we decided to address, how/when, and how we'll measure it" — an **executive brief** that won't bounce off a leader; explicitly "about getting you promoted and making you look good."
- **Ownership** is essential — someone drives it "over the finish line."

---

## 7. Recap and Where to Apply It

### 7.1 The end-to-end loop
- Start with **what we want** (a target → buy-in, participation, and a closeable loop) → **what's stopping us** → **why** it's in the way → **how** to address it → **what getting there looks like**.

### 7.2 "Process" isn't the enemy
- People are allergic to "process" because "our processes suck" — the path to better processes is to **make them valuable**, not to avoid the word.
- Applies to partnerships, acquisitions, new ventures, entering new countries, even planning conference travel — but focus only on the **high-value** things (releasing products, what's holding you back).

### 7.3 How to pick a starting point
- Where you feel **friction** / things take longer than they should.
- Where people are **unclear / get stuck / waste time** wandering the org for the right person or calendar slot.
- Where you're **missing value** — doing things that don't matter, or getting criticized for things you think are valuable.

### 7.4 Concrete opportunities
- **Where to invest in AI** — don't decide without first knowing where you're **constrained**; apply tools where lead time bogs down / people struggle.
- **Dependencies** — heard weekly; **mitigate**, don't just "manage" (people wrongly treat them as things to "grin and bear").
- **Career/impact** — highlight throughput, quality, fewer production fires, less rework, fewer sev-1 incidents.
- **Aligning business and tech** — the classic.
- **Any system that isn't working** — e.g., **PI planning**: are we getting more value than the cost? Map it to have a better conversation.

---

## 8. Q&A

### 8.1 Q1 — Value streams around products vs. capability-focused design; how to support engineering without being product-specific?
- **Products/services** are what customers buy; **capabilities** are what make them compelling.
- Speak your **organization's language** (ITIL/TOGAF/classical IT orgs talk capabilities) — "yes, and": trace a path from building/delivering/operating capabilities out to **why you get paid** (how capabilities are produced, distributed, and made available).

### 8.2 Q2 — VSM vs. Theory of Constraints?
- He runs a **very loose interpretation** of TOC; the science behind TOC is powerful, but flow engineering just wants an **actionable focal point** — which may not be the system's true global constraint.
- Reality: your **sphere of influence/control is smaller than the whole system**, so VSM can be a **subset leveraging TOC**, not fully interdependent with it.

### 8.3 Q3 — Complex adaptive systems can't define a future state — how handle that?
- Not defining a definitive future state doesn't stop us **envisioning an improvement**.
- "Future state" here means a **better design of the way we work**, not "state" in the network/complexity/systems-thinking sense — not ultimate optimization, just **better than today**.

### 8.4 Q4 — How to get good-enough data with bad/scattered data and unreliable "it depends" answers?
- Use **typical / best-case / worst-case**, pull data where you have it, and only care about precision **where the data has value** — you don't need perfect data everywhere.
- People **already know where the friction is** — the strongest signal.
- The value of collecting perspectives isn't perfect data — it's **highlighting that everyone has different ideas of how long things take** (i.e., **variation**), which is a signal you want to **drive down toward predictability**.
- Highlighting high variation isn't a problem — "we can go from a mess to better." Don't let a mess stop you starting.

---

## People & References Cited

- **Steve Pereira** — speaker; flow engineering creator; Visible; Value Stream Management Consortium; OASIS VSM Interoperability TC; Flow Collective.
- **Nigel** — an audience member Pereira jokingly credits with the anonymous Slido questions.
- **Book/course:** *Flow Engineering* (book, with a newly released course and an audiobook).
- **Concepts/tools:** value stream mapping, value streams, Theory of Constraints, constraints/bottlenecks/choke points, cycle time & wait time, outcome mapping, impact mapping, dependency mapping, future-state mapping, flow roadmap (now/next/later), affinity mapping, DORA-style flow metrics, PI planning, ITIL/TOGAF (capabilities language), signal vs. noise.

---

*Video: https://www.youtube.com/watch?v=11Dc-PKhnuc — Transcript via yt-transcript.sh; outline generated from the transcript.*
