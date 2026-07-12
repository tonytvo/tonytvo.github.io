---
title: "Architecture is Designing Knowledge Flow — Diana Montalion | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Diana Montalion on systems architecture as the deliberate design of knowledge flow — why we keep rebuilding the same factory, the two universal failure modes (blame + counterintuitiveness), three skills, three activities, leverage points, and the 18-month rule."
type: "reference"
tags: ["softwaredevelopment", "architecture"]
---

# Architecture is Designing Knowledge Flow — Diana Montalion (Talk Outline)

> Diana Montalion — systems architect, author of the O'Reilly book **_Learning Systems Thinking_** and an upcoming book on this subject — argues that architecture is the deliberate **design of knowledge flow**. Delivered as the end-of-day main-stage talk amid **broken slide transitions** (she's a Mac user; "apparently not compatible with the current system") and last-minute shower-thought edits with no notes — "what happens on the main stage today stays on the main stage today." Technical challenges are "just part of the job."

---

## 1. The Core Problem — We Keep Building the Same Factory

- Montalion works on **transformation/change** — partly by love/skill, partly because "we are in a major time of fast change." She's "the person in the doorway" trying to explain complexity to circumstances that just want a **Gantt chart** — and you can't always translate complexity into a linear process.
- School and software engineering teach that designing software is **linear**: rational, top-down, predictable, procedural, concerned with **control**. Not bad — **necessary** to break work into modular code — but not sufficient.
- **Pierig quote (anchor):** *"If a factory is torn down but the rationality which produced it is left standing, then that rationality will just produce another factory."*
- Her own team's experience: moved monolith → microservices, and **three months later** the microservices were **tightly coupled** — because their **brains** were tightly coupled; they encoded their existing mental models into the software. It took a few tries **not to build another factory**.
- Transformation here is **not** "we bought SAFe." "**The call is coming from inside the house**": **systems are designed perfectly to get the results they get** — collectively we built a factory. Wanting microservices/event-driven/distributed/Team Topologies means **changing how we think, communicate, design, and decide**, i.e., changing the **mindset** from which systems, goals, power structures, rules, and culture arise (all still finely tuned for the old monolith — slow, hard-to-deploy, monthly releases, no personalization).

### 1.1 The Iceberg Model
- **Visible event** (e.g., a production bug) sits atop:
  - **Patterns/structures** that gave rise to it — e.g., too little/too much test coverage; **hiring** shaping the skills available for the current context.
  - **Core mental models** — what we believe. If you believe "**run fast and hot** is the only way," you ship fast **and** ship more bugs — then, rather than owning the trade-off, orgs apply **more predictability and control** to suppress the visible event tied to how they structured the system.
- There's **no silver bullet** — the monolith isn't a werewolf you shoot to poof a distributed system into existence. You change **patterns, structures, and mental models** so the system gives rise to (e.g.) **asynchronicity**.

---

## 2. Two Universal Failure Modes in Human Systems

From **50+ years of research** — what humans do facing complexity and relational complexity.

### 2.1 Blame
- The **Beer Game** (invented by **Jay Forrester**, MIT) — a cross-functional supply/demand simulation: retailer, the "cool hipster brewery" (very hoppy beer — *not* cranberry beer, which nearly got her "thrown out of Germany"), and the boring-but-most-profitable **distributors** in the middle. A celebrity endorsement spikes demand → **the whole ordering system collapses into chaos** → afterward **everyone blames someone else** (retailers blame distributors; distributors blame the brewers…).
- Tech equivalent: **product blames tech, tech blames product, everyone blames the architects** — or the users, the monolith, **Agile** ("Agile is responsible for climate change"), legacy code, leadership, even the **"deep state"** (her new running joke for being late to meetings).
- Corrective: **"blame the system, not the people"** — teams are incentivized differently and under different pressures; "it's unlikely your point of view is the wise one and everyone else is unenlightened."
- **Caveat — sometimes there's Steve:** the person who says no to everything (because it wasn't Steve's idea). Entrenched people working against change are a **social**, not architectural, problem — "**fire Steve**" (there are gentler ways to keep Steve from blocking change). Empathy/"hug it out" is the **starting point, not the whole solution**. (Aside: she "blames Kubernetes for everything.")

### 2.2 Counterintuitiveness
- We blame, then **act — and do exactly the wrong thing**, making the problem worse. Knowing this is likely helps you spot it and decide differently.
- **Forrester's finding:** the people who know a system best are often **pushing change in the wrong direction** — because we don't yet have the different ideas/ways of working. (Back to the factory.)
- Famous tech example — **Brooks's Law:** *"Adding manpower to a late project makes it later."* Intuitive to an inexperienced observer ("give them four more engineers"); takes a real **meeting of the minds** to see why it slows things down.

---

## 3. So How Do You *Not* Build Another Factory?

- The honest answer: **"it depends"** — every system, software system, social system, org, team, and individual has different blockers and supports.
- But there are **skills** and **activities** that lead away from building a better factory. (Montalion: "I'm a **relationship therapist for technology**" — "if you've built more than one API, you're in my profession"; product-hates-tech is itself part of what architects the system.)

### 3.1 Skill — Communicating Context
- An answer is only **more right or more wrong in context** — time (right 50 years ago, wrong now), device/environment (her Mac vs. the slide system), stakeholder perspective. **When contexts collide, nothing is "wrong"** — you just start from different places.
- **Cat-bed metaphor:** from her view, the cat bed is a cat bed; from the cat's view, her **notebook** is the cat bed — neither is wrong, and the cat decides (and will choose her keyboard the moment she sits down). We often don't know whether a change works **for everyone involved, not just us**.
- **"Fast package delivery"** (DDD **core domain** — what gives competitive advantage): easy for FedEx. But ask all the CEOs/VPs "what's *our* fast package delivery?" and **every arrow misses the target** — a different answer each time → **impossible to make coherent software decisions**. One part wants a car, another a boat → engineers build a **"carboat"** nobody wanted. Resolve the **primary goal** first.

### 3.2 Skill — Understanding Relationships (the "And")
- **Danella Meadows:** *"You think because you understand one that you must understand two, because one and one make two — but you forget you also have to understand *and*."* The **"and"** is the art and science of architecture.
- **Russell Ackoff:** *"A system is never the sum of its parts — it's the product of their interaction."* Seen in eventual-consistency bugs, caching layers, and tuning one service until another **crashes** because it can't keep up. Socially too: product-vs-tech shapes what can ship.

### 3.3 Skill — Cultivating a Growth Mindset
- Poll: same tech stack as **10 years** ago? none. **5 years**? ~15. **1 year**? → at least **~30%** are coding in a **different stack than last year**. "We signed up for that" (maybe masochistically).
- The extra step beyond personal curiosity: **sharing knowledge to build others' capacity.** As complexity grows, **you can't know everything** — you need others' knowledge/experience to decide what's best in your context.
- Evidence: a study where doctors **swarmed** decisions vs. diagnosing **analytically/linearly** found the **swarming** decisions **significantly better** — we think and decide better learning together (whiteboard it together).

---

## 4. Three Core Activities

### 4.1 Generating Knowledge Flow
- **Knowledge stock** = the store of knowledge you have/can look up (whiteboard tests, "5 years of JavaScript" job reqs) — **it improves efficiency** (the more you know your monorepo/Astro/Next/React/graph schema, the faster you work). It matters — "I can't solve a JavaScript problem if I can't write JavaScript."
- **Knowledge flow** = your ability to **transfer knowledge between people and technology in ways that change/shift the system** — **it improves effectiveness** (you synthesize beyond your one context → more likely to improve "fast package delivery"/the whole system).
- **Dave Snowden:** *"The flow of knowledge is more important than the storage of knowledge."* **Ted Nelson** coined **hypermedia** in the 1960s, foreseeing knowledge graphs; the internet's founders intended it to be **intertwingled** — sharing information across boundaries.
- **Opinion vs. knowledge:** we're usually asked for an **opinion** ("graphs don't scale"). **Knowledge** is: "here are experiences/information/things I've learned that surface challenges with what you're deciding — let's reason together" → **synthesizing knowledge, experience, and sound judgment into recommendations based on valid reasoning.** *"If you can't reason about reality, you shouldn't be architecting it."*
- **Larry Prusak:** companies that don't treat **knowledge as a force of production** (it's what's *in* production — encoded knowledge) will **slowly die and never know what killed them.** This is *why* orgs call her in.

### 4.2 Discovering Leverage Points
- **Leverage points** = places to intervene where a **small change makes a big difference** in a wider scope — the antidote to blame/counterintuitiveness, and **harder to find**.
- The deeper reframe: **designing data in motion.** We fixate on a **source of truth** ("the vault"), but in live systems the source of truth is **asynchronous and in motion**, not one place at one moment. Until we grapple with that, the same problems recur.

| Surface framing | Outcome framing | Actual leverage point |
|---|---|---|
| Implement new payment system in 6 months | Reduce cost per transaction by 20% | **Reconcile transactions across contexts** — sales software doesn't tell shipping software when payments fail; a new payment system won't fix that |
| Migrate Jenkins → CircleCI | Reduce developer toil 50% | **Make pipelines observable and self-healing** — otherwise you're still paged at 3 a.m. on CircleCI |
| Decouple front end from back end | Publish content to 4+ platforms | **Structure content for distribution** — not "vomiting SQL rows through an API"; distributing content needs a different data/content model |

- **The 18-month rule:** when you find a real leverage point, **almost nobody believes you** ("too abstract, Diana") — then **18 months later** "we always knew that." They won't credit the recommendation. That's fine — **knowledge flow lets the *system* generate the outcome**, not your personal knowledge stock. The final skill is **patience**.

### 4.3 Architecting Capabilities (not platforms/pipelines)
- **Capabilities** = what a system **must do, adapt to, or make sense of** within a domain — relatively **stable** even as implementation changes. For fast package delivery: **get the package, move it, deliver to the right place, get paid.**
- Controversial line: **"Transformation doesn't scale through procedures/pipelines/CI-CD — it scales through capabilities, and capabilities are *architected*, not *engineered*."** (Not two people — a **shift in mind**; same person applies architecture and engineering skills.)

| Implementation framing | Capability framing | The interesting problem |
|---|---|---|
| Implement new payment system | **Process transactions** | Reduce cost per financial transaction 20% |
| Migrate to CircleCI | **Deploy updates** | Reduce pipeline-maintenance toil 50% |
| Decouple front/back end | **Distribute content** (≠ *publish* content) | Get content to many front-ends/platforms, machine-readable, via event streams |

- Prefer being asked to **"reduce cost per financial transaction"** over "implement the new payment system in 6 months" — the former is a **capability/problem** to architect together; the latter is a **solution already encoded**. (Nods to "Andrew's talk about decisions made.")

---

## 5. Key Takeaways

1. You **cannot change a system without changing the mental models** that produced it — else you build another factory.
2. **Blame** and **counterintuitiveness** are **predictable** failure modes in every human system — recognizing them is the first defense.
3. **Knowledge flow** (not stock) is what makes systems **effective** vs. merely **efficient**.
4. Architect toward **capabilities and leverage points**, not tools and platforms; design **data in motion**, not a static source-of-truth vault.
5. Expect an **~18-month lag** between finding the real problem and organizational acknowledgment — **patience is load-bearing**.
6. Go forth and **build knowledgeably** — "I'm learning from you more than I'm presenting." (Book plug: *Learning Systems Thinking*, O'Reilly/Amazon; more writing coming. "Sorry if your name is Steve — I'm sure you're awesome and not Steve-like at all.")

---

## 6. Q&A

- **Without Kubernetes, what's your vision for a scalable distributed app today?** Kubernetes is a fine **tool** (APIs, a way of managing things) for its job. What she pushes back on is *"we need Kubernetes **because we don't have Kubernetes**"* — vs. the Kubernetes that actually solves your stated problem. (Also: she keeps picking snarky targets, and once people like them she has to change.)
- **Can you find leverage points without experience?** Generally **no** — you have to **put a system out in the wild and see what happens**; you think you know and you don't. Experience is required.
- **Is serverless any easier?** If "serverless" means **layering software on software on software** and calling it easier "because there's less software," then no. She prefers using tools **the way they're designed** — not pushing software into a container into the cloud for **no architectural benefit** ("your mileage may vary").

---

## People & References Cited

- **Diana Montalion** — speaker; author of *Learning Systems Thinking* (O'Reilly).
- **Jay Forrester** (MIT, the Beer Game, counterintuitiveness), **Danella Meadows** (the "and"; leverage points; "hardly anybody will believe you"), **Russell Ackoff** ("product of their interaction"), **Ted Nelson** (hypermedia/intertwingled), **Dave Snowden** (flow > storage of knowledge), **Larry Prusak** (knowledge as a force of production), **Fred Brooks** (Brooks's Law), **Pirsig** ("if a factory is torn down…").
- Concepts: iceberg model, blame + counterintuitiveness, knowledge stock vs. flow, leverage points, capabilities vs. implementation, data in motion, the 18-month rule, "carboat," DDD core domain.

---

*Video: https://www.youtube.com/watch?v=BLp1Ye8d290 — Transcript via yt-transcript.sh; outline generated from the transcript.*
