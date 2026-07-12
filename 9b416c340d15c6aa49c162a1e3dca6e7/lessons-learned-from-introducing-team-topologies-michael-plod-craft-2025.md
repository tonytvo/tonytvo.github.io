---
title: "Lessons learned from introducing Team Topologies - Michael Plöd | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Michael Plöd reflects on 5+ years of applying Team Topologies — what's well understood vs. misunderstood across team types, interaction modes, platforms, fast flow, and the human/organizational side of transformation (salary bands, budgeting, middle-management fear)."
type: "reference"
tags: ["softwaredevelopment"]
---

# Lessons learned from introducing Team Topologies - Michael Plöd (Talk Outline)

> **Michael Plöd** (independent tech consultant; **INNOQ fellow**; DDD, Team Topologies, software architecture, collaborative modeling) reflects on **5+ years** since *Team Topologies* (Matthew Skelton & Manuel Pais). **Not a marketing talk** — the nuances of what works and what's misunderstood, from applying it across large and small organizations. Slide color scheme: **blue/orange text = well understood/proven**; **orange = difficult, missing, or misunderstood** (each followed by recommendations). Four categories: fundamental team types & interaction modes → platforms/platform engineering → fast flow → transformation.

---

## 1. Team Types

- **Misconception:** reducing Team Topologies to **"four team types, three interaction modes, and colorful imagery"** used as templates ("draw a fancy org picture and we're done"). It's really about **fast flow** — improving the flow of work.
- The four types (**stream-aligned, enabling, platform, complicated-subsystem**) are fairly understood, but applied **without preciseness** — an industry habit. Parallel from DDD: **"bounded context"** slapped onto whole systems/modules, when it's actually a boundary around a domain model with a **precise ubiquitous language** for a specific purpose.
- Most widespread abuse: the **platform team** — like DevOps before it (rename Ops → "DevOps" without the culture), now DevOps → "platform team" **without a product mindset**, still ticket-driven, no service capabilities. The book gives real advice (a stream-aligned team needs a **steady flow of feature delivery**, **time/space to address code quality**, and is **evaluated on sustainable flow to production**) — few teams actually get that time. Labeling a team "stream-aligned" is the **beginning of the journey, not the end**.
- **Magnets nuance (often missed):** Skelton/Pais say team types should act like **magnets** — a team is attracted to one type while still having attributes of others. Plöd uses a non-official **visualization** with teams: "how much are you stream-aligned / enabling / platform…?" for a nuanced discussion.
- **"Team type undefined"** (on the website, not the book): valuable. Example from a **socio-technical architecture review** — an "enabling-platform-complicated-subsystem-stream-aligned" team in the MDSD space (building code generators, enabling, delivering features) with **insane cognitive load**. Labeling it **undefined** honestly signals "we must do something with this team," rather than a false "everything's fine" icon.

## 2. Team Boundaries

- **Well understood:** teams need clear scope/responsibilities. **But** — surprising from a DDD person — **we talk too much about DDD** when discussing team boundaries. Don't collapse into "bounded context = team boundary," which turns DDD into **"dogmatism-driven design."**
- Use the book's **fracture planes**: start with business-domain bounded context/purpose, then broaden to **regulatory compliance, change cadence, team location, change risk**, and (Plöd's swap for "performance isolation") **quality attributes** (performance, availability, UX, security), plus **technologies** and **user personas**.
- Also the **Independent Service Heuristics** (blog posts + GitHub): can you **brand** the responsibility? clear **cost allocation**? **singled-out revenue streams**? (Workshop example with **Eduardo da Silva**.) There's a **mini-book** on the topic (costs an email address); most of its authors have spoken at Craft (**Nick** is on this stage after him).

## 3. Cognitive Load & Interaction Modes

- **Cognitive load** awareness is high, but **measuring** it is hard (there's **TeamTemp**, which he hasn't applied). His approach: take **retrospectives** very seriously — the single most important agile meeting and a good indicator.
- Three interaction modes: **X-as-a-Service, Collaboration, Facilitating/Enabling** — mostly well known, but a big **misconception**: **"X-as-a-Service good, Collaboration bad" — utterly wrong** and not promoted by anyone. **Collaboration** means a **clear purpose for a limited time** — *not* two teams hanging out in meetings forever — and it's the **way to establish healthy X-as-a-Service** (you must collaborate first to learn what suits users).
- **"Interaction mode undefined"** (website): purposeless collaboration over infinite time — a clear signal to shorten/tailor the interaction.
- The three modes are **too superficial** for the real world → augment with **DDD context maps** (21 years old): open-host service, anti-corruption layer, **customer-supplier**, **shared kernel**, **partnership** (deep collaboration), **separate ways**. His contribution to the mini-book is an in-depth article combining the two. **X-as-a-Service** is often interpreted too loosely — it means a **self-service capability with no coordination** (like calling the **Google Maps API** — you don't sit in meetings with the Maps team).

## 4. Platforms & Platform Engineering

- Platform engineering is taken seriously; **product thinking** for platform teams, less so.
- **Terminology caveat:** the **logical platform** vs. the **platform team** — a logical platform can internally consist of **stream-aligned teams** serving platform users.
- **Thinnest Viable Platform (TVP)** — MVP thinking for platforms; start small and evolve to user needs, treat the platform as a **product**. Too many **"Full Viable Platforms/Products"** ignore this.
- Team Topologies **ignited a desire for self-service capabilities** — key to fast flow. "File a ticket for a production Oracle DB in 3 months" is **not** self-service; there should be an **API**.

## 5. Fast Flow

- **Do Team Topologies for fast flow**, not the icons/imagery — an evolution he's seen over the last two years, increasingly reaching the software-architecture world.
- Visualizing flow is often **unstructured** — the standard "flow of change" diagram (with handovers and many undefined teams) is a nice start but **not operational**.
- Use **value stream mapping** / **flow engineering** — **Steve Pereira's** book (one of his favorites last year; Pereira speaks this afternoon). Plöd now **always starts** by visualizing flow, finding blockers and their reasons, addressing them — **then** Team Topologies comes into play (create a platform, sharpen an interaction, streamline a team).

## 6. Transformation — the Human Side

- Doesn't work by "applying colorful icons on your org" or "reorg of the reorg of the reorg" in 6 months — it **involves people and rattles culture**. High drive for Team Topologies among **engineering teams**; **enabling teams** are a key success factor.
- **Autonomy overnight is a trap.** Example: a boss wants faster time-to-market; teams complain of bottlenecks; an architecture team says "microservices in the cloud + cross-functional agile teams," goal = "you're autonomous now." For people used to **templates** for every task ("how to build a REST microservice with Spring Boot"), "make your own architectural decisions, good luck" won't fly.
- **Cognitive-load-o-meter:** split the monolith + learn new tech (COBOL → Go microservices) + DevOps + **distributed systems** (super hard) + **end-to-end responsibility** = **burnout**. Grow autonomy **over time** with a **safety net** (inspired by a scrum.org visualization) — start with **less** autonomy matched to the team's current knowledge.
- **Enable the enablers first.** An **ivory-tower architecture team** (used to telling others what to do) must learn to **teach** — needs personal development (coaching, training, **career paths**), **psychological safety**, management backing, small first steps ("things will go wrong, we'll learn"), then remove the safety net.
- **Middle-management fear is valid** — "where am I in this picture? Will I lose my job?" They have mortgages and families; the "manager" label doesn't exempt them, and **they have power to block**. Establish a **management enabling team** and reframe managers as **gardeners** (fertilize the ground, give boundaries/ropes = career paths, sometimes cut back, sometimes let grow). Team Topologies doesn't address this explicitly; **Jurgen Appelo's unFIX** model does (a **governance crew**), which Plöd sometimes adds.
- **Salary systems as showstoppers** (real story, an insurer): starting an **architecture enabling team**, the **workers' council** flagged that architect **salary bands** rewarded **giving orders** — directly opposing the enabling team's aim of helping others do the job themselves; "no architect would jump on that." Same for **domain experts** (bands rewarded giving requirements, opposing collaborative modeling). Fix: change bands to **"gives orders **or** enables others"** — but that alone **took a year**. Look at this early.
- **Budgeting** is uncovered by the book but crucial — match strategy to type: **value-stream funding** for stream-aligned/complicated-subsystem; **outcome-based** for special stuff; **team-based** for enabling (the extreme "internal consulting company" is a hard economic stretch); **value-stream** (or team-based evolving to internal **SaaS subscription**) for platforms.

## 7. Q&A

- **Raising awareness of lack of structure / cross-team dependencies when leadership doesn't recognize it?** Use **value stream maps / flow engineering** to visualize **blockers and their reasons** — "remove this blocker → speed delivery by X days." The more specific/in-your-face, the better.
- **How to measure if a team's cognitive load is too high?** Don't measure from outside — it must come **from the team** and not be challenged (**psychological safety**). Use **retrospectives**, anonymous voting/polling, or **sentiment analysis**; watch for single overworked individuals vs. a **collective** overload (then act). Involve the team in the remedies too.
- **Addressing resistance from leadership/teams?** (Conversation with **Andrew Harmel-Law** and **Diana Montalion**.) **Understand where resistance comes from** — often **personal** (fear of losing a job), not technical/political. Have **empathy for everyone**.
- **Can Team Topologies work without full DevOps maturity?** The full-blown thing is hard, but every organization is individual with regulatory/investor/market constraints — **find the best compromise good enough for your environment**. Reject black-and-white thinking; even a bank/insurer/regulated org can do meaningful parts.

---

## People, Books & References Cited

- **Michael Plöd** — speaker; INNOQ fellow, Team Topologies advocate.
- **Matthew Skelton & Manuel Pais** — *Team Topologies*; the website's "team type undefined" / "interaction mode undefined," Independent Service Heuristics, mini-book.
- **Steve Pereira** — flow engineering / value stream mapping (book + Craft talk).
- **Eduardo da Silva**, **Nick** (Tune), **Andrew Harmel-Law**, **Diana Montalion** — collaborators/co-speakers referenced.
- **Jurgen Appelo** — unFIX model / governance crew.
- Concepts: fracture planes, DDD bounded contexts & context maps (open-host service, ACL, shared kernel, partnership, customer-supplier, separate ways), Thinnest Viable Platform, self-service, cognitive-load-o-meter, management-as-gardeners, budgeting strategies, **TeamTemp**.

---

*Video: https://www.youtube.com/watch?v=Xvi0sNKKfys — Transcript via yt-transcript.sh; outline generated from the transcript.*
