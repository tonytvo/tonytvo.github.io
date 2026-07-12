---
title: "Connect Business Goals and Your Daily Work with Impact Mapping - Büsra Coskuner | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Büsra Coskuner on 'taming your product manager' with impact mapping — Stan/triangle/trees, aligning the trio on outcomes, the five levels and three twists, three framework-agnostic decision questions, and reverse impact mapping."
type: "reference"
tags: ["softwaredevelopment"]
---

# Connect Business Goals and Your Daily Work with Impact Mapping - Büsra Coskuner (Talk Outline)

> **Büsra Coskuner** — ex-product-manager/PM-lead (Doodle, Deutsche Telekom, Home24), now product coach/trainer/advisor — golden nugget: **"collaboration works best if we understand each other's worlds."** The talk uses **impact mapping** to connect business goals to daily work so engineers and PMs stop fighting over "the right thing to build." Three helpers: **Stan, a triangle, and trees.**

---

## 1. Stan — The Misalignment

- **Stan (your PM)** says his magic prioritization spreadsheet spat out the next feature that'll "definitely make customers happy." You counter: the buggy **search** (the most important feature), the un-intuitive **filtering**, the degraded **page speed**, and the **tech debt** ("Mount Everest") — "won't a working page make them happier than this feature?" Stan says **No** ("new features = more value"). You debate, and you build the feature anyway. (Audience: this happened *last week* — "sucks on a scale of 0–10? A 15.")
- **The real problem:** not that you have **different ideas** (you *want* many, from different minds/disciplines — higher chance the right thing is in there), but **fixating on "the right thing" while completely misaligned on what you're actually trying to achieve** — because "make customers happy" is **too vague**.

## 2. The Triangle — The Trio

- The **trio/triad**: **designer + engineer + PM** at the same table, same level of information, **deciding together based on data/insights/evidence** on *"what is the right thing to build?"* — which requires debating **what you're trying to achieve**.
- The "right thing" matters to **customers *and* the business**: ignore the business → **run out of cash**; ignore customers → **unsustainable**. Goal: **shared language, same information, shared ownership, and a shared understanding** of "driving business with products customers love" (still vague — hence the tool).

## 3. The Trees — Impact Mapping (Gojko Adzic, 2012)

- A **tree with five levels** connecting **business goal → daily work** (impactmapping.org; "attach what you do to higher-level OKRs/business goals" — echoing Patrick Kua's talk):
  1. **Goal** — a **SMART** business goal, **time-bound to ≤3–6 months** (beyond 6 months is unpredictable — "ChatGPT came out and you threw everything away"); a metric (90-day retention, average order value, new bookings +X%).
  2. **Actors** — anyone who can **help or hinder** the goal (segmentation, internal/external) — find the **biggest lever**.
  3. **Impact** — the **behavior change** you want in the actor (test: superlatives/comparatives "faster/cheaper/in less time," or **start / stop / do differently / do more often**). *This is where the name comes from.*
  4. **Deliverable** — any **solution** (feature, iteration, process change, or a copy word) that helps the actor make that behavior change.
  5. The fifth level.
- **Three twists:**
  1. **Product-management wording** — say **outcome** (not "impact") and **solution/output** (not "deliverable" — a project-management word; "never say *project manager* to your PM").
  2. Use the **last level to decide what to do next** — enough evidence the solution is right → **deliver**; not enough → **experiment/gather evidence**.
  3. (Later) use it to **structure product discovery** (blend with an opportunity-solution tree).
- **Zone of control:** without a trio, engineers influence only **solution + delivery**; *within* a trio it shifts up into the **outcome space** (and sometimes the **segment**).

### 3.1 Examples
- "Increase first-time US bookings 10% by year-end" (Airbnb-style, from students new to impact mapping): actors (first-time US visitors, budget-less workers/musicians, single parents) → pick the biggest lever → behavior change ("quickly understand which region fits their needs / decide faster where to book") → solutions where the **engineers'** version wins: "**improve region-search relevance via metadata filtering**" (vs. a PM's vaguer "push relevant reasons") — *that's your zone of control, because you're now aligned on the goal.*
- Real (abstracted) example: "increase user activation X→Y% within 7 days over two quarters" → actor "new users" → behavior "understand how to get started within 2 minutes / complete first meaningful action / not feel overwhelmed" → the engineer's "**auto-detect magic setup**" solution ("we can do that? yeah, easy → *natürlich*, let's do it").
- **Real-world impact maps are messy** (blurred examples, some not even reaching the solution level) — "and that's okay; it depends what you need it for."

## 4. Three Decision Questions (framework-agnostic)

1. **What are the biggest levers?** Build the tree from data/discovery, and at each level (actor → behavior → solution) ask "where's the biggest potential?" and narrow down. (Your PM won't expect *you* to ask this — "force it.")
2. **Is it a known, a belief, or an assumption?** Define first (heated debates otherwise): **known** = fact/physics/painfully-proven ("stop debating it"); **belief** = strong evidence, too costly/impossible to prove further; **assumption** = one weak data point. Making it **explicit** matters — a salesperson's "our biggest customers said they'd buy it" turned out to be **one** customer, no commitment = an **assumption**. You can consciously **proceed on an assumption *and then experiment*.**
3. **Where is the win-win?** Synthesize discovery ("the US is so big, I just want to find something interesting quickly") into a win-win: "first-time US travelers want to find interesting regions/Airbnbs quickly without being overwhelmed → they book with us → we increase first-time bookings; the solution is X." Ask it in any stakeholder debate.

## 5. Reverse Impact Mapping & Other Uses

- **Reverse impact mapping** (real, furniture e-commerce): marketing wanted "an **internal SEO-metadata tool**" (~4 months → a "project" → management road map → **9–12 months**). Working **backwards** from the *real goal* (increase organic traffic to product pages — less important to management than other projects) let engineering offer a **2-hour CSV upload** (fill product IDs + metadata, upload) that ships in **two sprints**. They took it. "Understand what they're *really* trying to achieve and offer a different solution" — works for any stakeholder, including your PM.
- Other uses: **capture the current state** of a feature (a color-coded Miro scribble), **rationalize the backlog** (what's for whom, why → what to say **no** to), and **scope a new product** (Scott Sehlhorst examples). **Twist #3 (favorite):** structure **product discovery** by blending impact maps with **opportunity-solution trees** (turn problems into outcomes → opportunities → solutions → experiments).

## 6. Taming

- You and your PM **both want to build the right thing** — you're just not aligned on what "right" means. Get **specific** about the **business goal** and the **customer outcome**, find the **win-win**, align, and even a **"disagree and commit"** sticks because all of you stand behind it. **Upgrade your own product thinking** to understand the PM's world (and why prioritization went so wrong) — impact mapping is one way "to build the right damn thing together."

## 7. Q&A

- **Why distinguish known/belief/assumption instead of just two categories?** Try what works, but the big benefit is **making thoughts explicit** — the "biggest customers" story (a sure-sounding "we *know* we have to build it" that turned out to be one customer's un-committed assumption).

---

## People & References Cited

- **Büsra Coskuner** — speaker; product coach (ex-Doodle/Deutsche Telekom/Home24).
- **Gojko Adzic** — *Impact Mapping* (2012), impactmapping.org.
- **Patrick Kua** (OKR-attaching talk), **Teresa Torres** (opportunity-solution tree, referenced), **Scott Sehlhorst** (backlog/scoping examples), **Sander Hoogendoorn** (product-engineer reference).
- Concepts: trio/triad, impact mapping five levels, outcome vs. output, zone of control, biggest-lever / known-belief-assumption / win-win questions, reverse impact mapping.

---

*Video: https://www.youtube.com/watch?v=Xq3-JGAl6EY — Transcript via yt-transcript.sh; outline generated from the transcript.*
