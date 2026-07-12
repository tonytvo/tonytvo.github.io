---
title: "Architecture in the Age of Autonomous Code – Matthew Clark | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Matthew Clark (BBC Head of Architecture) on architecting the conditions for safe autonomous change — a map (living knowledge base), an environment (harness + platform), and a compass (architecture diffs), plus a learning loop and an extensive Q&A."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Architecture in the Age of Autonomous Code – Matthew Clark (Talk Outline)

> Matthew Clark — **Head of Architecture at the BBC** (a not-for-profit; **1,000+ engineers**, apps/websites in **43 languages**, adding **Hungarian and Polish** this month) — on the architect's role when AI writes much of the code. First time at Craft ("10 stages… a talk on AI, a talk on AI, a talk on AI"). Thesis: architects have a **superpower — stepping back from the noise** to see trends, because AI moves at crazy speed but **architecture, tied to organizations, moves slowly**. The answer to "if software builds itself, what are we architecting?" → **the conditions under which autonomous change can happen safely**, via three concepts: a **map**, an **environment**, and a **compass**.

---

## 1. The Question & the Reassurance

- Synopsis question: **"If software builds itself, what are we architecting?"** We've entered the **agentic era** — AI changes whole codebases and multiple systems, doing a lot of the architecture itself.
- Don't worry about your job: the need for a **brilliant, dependable architecture from which AI can run is more critical than ever** — the *amount* of work is bigger than ever, but the *way* we do it must change.

## 2. Three Sources of Autonomous Change

1. **Engineers using AI to develop faster** — now ubiquitous; goal is productivity/value.
2. **The rest of the organization using AI daily** — software engineering was hit first, but a **McKinsey partner** expects **30–50% of all work to be AI-related within 5 years** (sales, marketing, finance…), building their own tools/workflows.
3. **Agents operating across the organization** — automating customer work, analysis, etc.
- Common effect on architecture: **more change, more agents making more requests** on systems/data, **less human comprehension**, and **more risk**. Core question: **how to support and govern a more rapid and much larger surface area of software change** as creation gets **democratized**.

## 3. Why Today's Model Doesn't Scale

- BBC uses **two-pizza teams** (6–10 people, Amazon's "enough that two pizzas fill"), **squads that own things** (Team Topologies, DDD). An **architect is embedded across several related teams**; multiple such areas form a **network of architects** who also coordinate across areas.
- Hard job, "in two teams at once," lots of dependencies — **already strains to scale** today; a long way to the other side, hard to stay in sync.
- With AI it's worse: teams get **their own agents**, plus the **5x** productivity from the keynote → far more change, faster. **Amazon's "AI DLC"** replaces two-week sprints with **"bolts"** (~a day: plan in the morning, AI works over lunch, fix & release in the afternoon) — architects can't check in at that pace.
- **Architecture review boards** (AI-drawn as a clock with four hands and a projector), **official sign-off processes**, and **more manual guardrails** are **bureaucratic regression** — they won't run at **machine pace**. Same problem for **security/legal** review. → We must **architect the conditions for safe autonomous change**.

## 4. The Map

- **"Agents cannot use what they cannot discover."** "Go and talk to Fred" doesn't scale — too much lives in heads, not written down accessibly.
- What goes in: the same things you'd want in an architecture review — **what exists** (systems, data catalogs), how it fits together, **dependencies**, **contracts**, **data flow**; **boundaries/compliance** (org rules + stricter agent rules); **how you build** (skills.md — patterns, principles, approaches); and **how you validate/test**. It's a **living, continually-updating knowledge base**.
- Format can be **formal specifications *or* plain human language** — LLMs read English/any language well, so you can encode **nuance** (this is deprecated, not scalable, has limitations). It's a muscle we need to build — stop relying on **implicit knowledge**.
- **Map + intent = context** (the key agentic word). **Humans own** the map/intent (AI may help write them) → given to agents. Agent work may be pure analysis or may **produce software** — internal **tools/dashboards** and external **product features**. Keep internal vs. external separate: **higher risk tolerance for internal** than production/external.
- Users also **write intent** (make requests on agents) themselves.
- Consequence: creating software becomes easy → **a lot of it** (do we want a million dashboards? an org concern) → be ready to **manage and support that load**.
- **Harness-engineering flywheel** (Mitchell Hashimoto): when an agent does something it shouldn't, **update the map/rules**, then re-run — fix now *and* prevent recurrence, getting better and better.
- **Beware context rot:** a dump of thousands of docs **degrades LLM reasoning** — the BBC has thousands of docs but finding one that says "how X works" is hard. Keep the map **clear and succinct**.

### 4.1 The Goldilocks spectrum of trust (code)
- Five levels: humans write all code → **AI assistants** → agents write **most** code (review or not?) → **not reviewing but keeping understanding** → **vibe coding (a black box** — just make a request and hope). The keynote showed real pressure to move **rightward**.
- As you move right: **cost down** (AI will get cheaper than humans over a multi-year transition), **speed up**, **empowerment up** (non-engineers build things) — but **risk up**. The job is to find the **Goldilocks level** you're comfortable with and **mitigate the risk**; **trust must be earned**.

## 5. The Environment — Harness + Platform

### 5.1 Harness
- (Lots to read on harness engineering — e.g., **Adnan Masood's** diagrams.) Headline functions: **limit reach / access control**, **blast radius**, **spend**, **validation** (does it do the right thing), and **context**.
- Three of those (reach, spend, validation) are just **useful anyway** — so we need a harness not only around the **agent** but around the **software the agent produces** (possibly different tech).
- Existing tech: **containers, network restrictions** — but containerization "isn't as good as it needs to be." **Vercel/Cloudflare** are moving toward more **isolated, well-contained, measurable** systems — important because we'll run **code we don't fully trust**.

### 5.2 Platform
- Hosting, **CI/CD/release**, **observability/monitoring**, and critically **identity & governance** (who is the human, who is the agent — right access), access to **data** and **shared capabilities** (finance/HR, or BBC's **media transcoding**), behind a **clear interface** the agent (and produced software, with write permissions) can access.
- Platform engineering becomes far more important. **Nathan Harvey (ThoughtWorks)**, on a Substack/YouTube chat with **Sam Newman**: *"Every product engineer building features right now should stop and build the platform instead"* — admittedly wild, but a provocation, since **features get cheap** for anyone with permission.
- Platform must be **scalable** (elastic cloud for extra requests), **safe** (right access at the right time, not a free-for-all), and **simple** — avoid the **"orientation tax"** (an over-complex estate burns tokens just to be understood → cost and mistakes).
- The BBC built a system describing everything + a **C4 diagram** to render it — "that's how the world's largest news organization works" — famously **overwhelming**; cognitive load too high for humans, worse for agents. Need to **simplify** so agents can understand.

## 6. The Compass — Architecture Diffs

- Even with a map and safe environment: each change may be **locally sound**, but they add up to **drift** (15 systems doing the same thing, 20 database choices) and **epistemic debt** (not understanding what's going on). Architects remain **accountable** for long-term maintainability.
- **Architecture diff**: not a code diff but a review of **strategic consequence** — changed **responsibilities**, new **dependencies**, **data usage**, **cost**, **risk**, **ownership**, **violated standards**. (Code diffs are essential but "not fun" — this is a better altitude.)
- Ask the agent to **run an architectural assessment on everything it does**: minor/no impact → **create the diff record and proceed**; **significant impact → pause and send the diff to a human to review** ("review by exception," at machine pace). The trust threshold rises as the system earns trust.
- Fits existing practice: **RFCs** (request-for-comments — broad opinion, ~a week to reply) and **ADRs** (architecture decision records). The diff trail is an **audit log**; a diff can trigger an RFC, and an RFC's conclusion can become an ADR (which the agent can write).

## 7. Bringing It Together + a Learning Loop

- **Map** (owned by humans, evolving) → used on every request → **context** to the agent team → **more software** (internal + external once trusted) → each wrapped in a **harness** (better containerization) → within an **environment** (harness + a clear, complete **platform**) → overseen by a **compass** (architecture diffs; keep using ADRs/RFCs; **review by exception**).
- Add a **learning loop** (big arrow at the bottom): improve the rules/map/testing over time → **gain more trust** → eventually architecture can **support automated tooling at scale** (years away).

## 8. Three Things to Do Now

1. **Make the architecture visible** — write down what's in your head; "only I/he knows that" is the signal. (**DORA 2023**: well-documenting teams are **~25% more productive** — good anyway, critical in the agentic world.)
2. **Reduce unnecessary variation** — tackle the long tail, add standards; **Spotify** (QCon London) went to monorepos and killed edge cases because **agents need consistency**.
3. **Strengthen your platforms** — a solid foundation to build on.
- Answer restated: we're **architecting the conditions under which autonomous change can happen safely** — still accountable, still in control, but working at machine pace → a big productivity unlock.

## 9. Q&A

- **How to create a map if none exists?** Just **write it down** — a set of **markdown files** brought into your Claude Code/etc. workflow. Example: teams edit in **Confluence** (easy editing + diagrams) then **auto-export to markdown** for agents.
- **Won't teams/architects lose comprehension of the system, and you can't write down 100% of what's in your head?** Right — don't go too far (Goldilocks). Keep some understanding; some things you must **react to**, not pre-write. Do your best to write down, decide what you truly need to understand vs. treat as a **constrained black box** (know inputs/outputs, trust it).
- **Consequences for team structure — focus on platforms without creating silos?** No complete answer; yes, tilt toward **capabilities/foundations/platforms over features**, which is hard because features are the "sexy" asked-for things. Need **storytelling**: build the platform → features get cheaper.
- **When to create an RFC vs. ADR (avoiding too many/few)?** BBC has **thousands of ADRs** — local ones in a codebase, larger cross-team ones in Confluence; that's fine because each is close to one thing and you consult the relevant ones. **RFCs** are used **only when you can't resolve it another way** (a Slack chat/meeting suffices otherwise) — when you need broad opinion beyond a meeting's worth of people.
- **Keeping context/docs short and up to date at scale?** Use **levels** — high-level docs linking to deeper ones; and AI is good at **summarizing** to help.
- **How to train which changes have significant architectural impact?** **Trust is earned** — start by allowing little/reviewing lots, learn over time where mistakes occur vs. where things fly through fine, then increase autonomy accordingly.
- **How do humans keep oversight when systems evolve faster than people can understand?** The "million-dollar question" — the **architecture diff** helps; ask the agent to **write the docs/draw the diagram** you need to feel comfortable (Kent Beck's morning point) so you don't review every change.
- **If AI writes most code, is architecture more or less important?** **More** — more happens, more people are empowered, so architecture must scale, provide data access, and provide **control, security, durability**.
- **Does the learning loop review happen by us or autonomously (self-learning)?** Agents are great at reviewing, so you'd use one; full **self-learning** would be "the dream" (à la OpenAI running overnight self-testing). New "skills"/Obsidian-style brains make some of it possible already.
- **Users reluctant to write intent / don't know how?** Lots of online guidance; mainly **practice, give it a go, learn, and share** what you learn.
- **If AI writes the architecture docs and other agents code against them, where's validation?** Ultimately validation is **within the system (agents)** at the trust level you've earned; right now do **a lot of validation** — have the **AI architect write what it did in enough detail** (the architecture diff) to review confidently. "Isn't working code the validation?" — partly, but **non-functional** consequences (unknown dependencies, a Sunday spike burning cloud credits, cost) matter as much as functionality.
- **Can we trust AI to build the map from existing architecture?** Tried it — **not a bad first pass**, but a good document describes the **why** (purpose, business value), which you **can't get from the codebase** alone. A start, not the whole story.
- **Any OSS tools (e.g., "Allium") for map/compass/environment?** Doesn't know Allium; **this space is moving fast** — expect better tools in coming months.
- **How to introduce rigor where vibe coding/speed is above all?** Be **agile/pragmatic** — document a few things, buy/build helper tools, start down the path; vibe coding alone soon hits a **security vulnerability**, so make the case to spend **10–30%** on foundations. (MC/host note: see the companion talk **"Code Health Guardian"** by **Artie Shevchenko**.)
- **Start in a legacy/brownfield system with big expertise gaps?** **Absolutely — all the more reason**: those systems hold the data the business needs and must be described/made accessible for this era.
- **Using tools like "Understand Anything"/"Graphify" for knowledge graphs?** Built **internal tools** instead (vibe-coded tools that take YAML descriptions → visualizations); hasn't tried those specific ones.

---

## People, Companies & References Cited

- **Matthew Clark** — speaker; Head of Architecture, **BBC** (from Manchester).
- **Mitchell Hashimoto** — harness engineering / the flywheel.
- **Adnan Masood** — harness-engineering diagrams.
- **Nathan Harvey (ThoughtWorks)** & **Sam Newman** — "build the platform instead" provocation.
- **Amazon** — two-pizza teams, **AI DLC / "bolts."** **McKinsey** — 30–50% of work AI-related in 5 years.
- **Vercel, Cloudflare** — isolation/containerization direction. **Spotify** — monorepos/consistency (QCon London). **DORA (2023)** — documentation → 25% more productive.
- **Kent Beck** — get AI to write docs/diagrams for comfort. **Artie Shevchenko** — companion "Code Health Guardian" talk.
- Concepts: map / environment (harness + platform) / compass, context rot, orientation tax, Goldilocks trust level, architecture diff, epistemic debt, RFCs & ADRs, learning loop, C4 diagram.

---

*Video: https://www.youtube.com/watch?v=9SZW2yQJazA — Transcript via yt-transcript.sh; outline generated from the transcript.*
