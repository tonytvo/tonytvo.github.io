---
title: "Platform as a Product: A dive into the Technical Foundations – Abby Bangser | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Abby Bangser on treating internal platforms as software — a day-two banking war story, the walking skeleton (frame → flesh → future), API-first capabilities, a marketplace contributor model, two-tier GitOps reconciliation, and real optionality via externalized runnable tests."
type: "reference"
tags: ["softwaredevelopment"]
---

# Platform as a Product: A dive into the Technical Foundations – Abby Bangser (Talk Outline)

> Abby Bangser argues that platform engineering underpins every successful engineering organization — AI or otherwise — and that we "let ourselves off the hook" as technologists by celebrating product *thinking* and product *experiences* while ignoring the **technical** foundations. Her thesis: **internal tools are just software; treat them that way.** The talk moves from a day-two war story, through why the technical debt matters, to a three-phase construction method (frame → flesh out → finish the look), and closes with five audience Q&As.

---

## 1. Opening Frame — Platform Engineering Underpins Everything

- Platform engineering is "what underpins successful engineering organizations using AI or otherwise."
- The topic is close to her heart: it's about **the internal tools we build to accelerate our colleagues**, and treating them the way we treat any other product — because our colleagues are **users** who care and get value.
- This talk takes the **technical** perspective specifically.
- Over recent years there's been a rise in thinking about internal tools **as products**, with great talks on bringing product thinking and product experiences to the space.
- Her provocation: **we are letting ourselves off the hook as technologists** if we only discuss product thinking and never confront what tech is doing wrong.

## 2. The Banking War Story — "Holiday Cover" That Became Three Months

### 2.1 The setup

- ~10 years ago, just after moving to the UK, she was flown over just before Christmas for what looked like **the cushiest job**: two weeks of holiday cover with a project team entering its go-live period.
- **No red flags, no blockers** — she was "just doing holiday cover to help out."
- The two weeks turned into a **~3-month engagement**.

### 2.2 Why it's *not* a hero story

- She could tell it as "I'm the hero who saved the day" — but that's not the truth.
- The team was **absolutely fabulous**: designers and researchers making sure they built the **right thing** for end users of a **retail banking product**.
- The technologists were **amazing**: using **TDD and DDD**, **XP practices**, **pair programming**, caring deeply about quality.
- They'd been building for a **year**, about a **month from going live**.

### 2.3 Day-two reality bites

- When she — a QA at the time — walked in and asked what it looked like to **work this way in production**, hard questions surfaced.
- **Change advisory boards (CABs):** popular in high-regulation environments like banks. What does **trunk-based development** look like when CABs gate every change?
- **Support:** to date they'd only used **local debuggers**. Now they'd need **first- and second-line support** people equipped with the right information to take early calls.
- **Debugging without data:** in a highly regulated environment you must debug the hard bits **without access to user data**.
- Everything the team did so well *before* go-live was now "staring down the barrel" of the **day-two situation.**

### 2.4 The lesson: products are not projects

- "**Products are not projects.**" Projects have a **start and an end**; products have a **lifespan**.
- The team had to shift from "go live with a new idea" to "a product that lives on for hopefully **years** of success within the bank."
- Now they had to consider not just **valuable** and **usable**, but also **feasible to support in the long run** and how to **evolve** it.
- This challenges the multidisciplinary-team idea: how do you bring **business requirements, technical requirements, and human requirements** together as you move to day two?

## 3. Why Platform Engineering Is Failing — and Why That's Proof It's Succeeding

### 3.1 The failure cases

- People are **frustrated** by how much work they pour into internal tooling.
- The **consumers** — application developers, product managers, QAs — are frustrated and **not adopting** platforms as much as the engineers who built them wish.
- **ROI failures:** organizations sink **millions of dollars** into internal tools and don't get the return, which affects **employment** and **long-term business investment**.
- The **platform engineering hype cycle** — "gloriously cut short by the AI hype cycle" — is entering the **trough of disillusionment**, as all hype cycles do.

### 3.2 The reframe

- Entering the trough **proves it is succeeding**: it's surviving past the "silver bullet" phase into the **nuance** of how to do platforms / internal tooling *right*.
- She thanks the people doing product engineering / product thinking and sharing knowledge:
  - **Samantha** (from Spotify).
  - **William** (from a large org, **SUSE**).
  - **Cat** — her own product manager — bringing the product-management skillset to the space.
- These aren't new ideas: the **"Platform as a Product" white paper came out in 2017**; there's a lot of history to build on.
- But we let ourselves off the hook if we **don't talk about what tech is doing wrong.**

### 3.3 Where our energy actually goes

- Much of our time is eaten by **managing legacy code bases** and **patching security challenges**.
- Question: how much energy actually goes toward **improving and delivering value** to end users — and is technology itself compressing the time available? She thinks it is.

## 4. Technology *Is* the Product (for Internal Tooling)

- For internal tooling, **technology is the product** — not merely how it's built.
- Platforms have **user-facing features** like **failure recovery, scaling, and updating**.
- You can't ask every user to understand **how to roll out a patch, scale cost-efficiently, and upgrade** across the whole org.
- Internal tooling teams are ~**10–15% of the technology organization for a reason** — they're meant to be **high-leverage** and provide **scalability**.
- If every consumer must learn the details, you **reduce the team's value** and call the **economics/ROI** into question.

### 4.1 Neglected tech debt → decay

- "When you fail to take care of your tech debt, you end up in **decay**."
- Maintenance metaphor: a car, household, or **bicycle** in **maintenance mode** is cheap and painless — oil the chain, service the boiler yearly.
- Once something falls into **disrepair/decay**, it becomes **really expensive to fix** — the same happens with unchecked tech debt.
- She's done work on **platform decay** and its **business impacts** (available via a QR code in the deck).

### 4.2 Why we don't invest

- It's already hard to get orgs to care about tech debt at the **business** end of the spectrum.
- Platform tech has **no clear path to revenue**, so investment looks like **CV-driven development** or "tech for tech's sake."
- Yet it's the **highest-leverage work** the org can do — that 10–15% enables the rest to:
  - **Differentiate** from competitors.
  - **Go to market faster** with ideas.
  - **Reduce cloud/hardware/software costs.**
  - **Recruit and retain** employees (a head start).

## 5. The Core Message — Internal Platforms Are Software

- **Internal platforms are software, and software should be treated that way.**
- Internal tools **aren't special** — "it's never the right time to work on them," yet they're **force multipliers.**
- There *is* context to internal tooling (covered later), but the baseline is: **treat it like software.**
- **Planting-trees metaphor:** you'd rather have started yesterday, but **today is easier than tomorrow** — getting ahead of the curve matters, cost-effectively.
- **Design for growth**, not for a single go-live — the same challenge the banking team faced: build a **lifespan**, not a launch.

## 6. Defining "Platform" and "Platform Engineering"

- A platform provides a **uniform delivery mechanism for internal tooling** — you shouldn't need to know how to get different tools from different parts of the org; **one consumption model** for everything.
- Platforms offer things **as a service through APIs**, treated **uniformly**.
- Like **microservices**, individual pieces may be built differently but roll into a **uniform consumption model.**
- Also like microservices, the **cognitive load** of building platform services is **heavy** and must be managed.
- Reinforced by **Gregor** (on a podcast with **Dave Farley**): platform engineering is often treated like **infrastructure engineering** — **without testing, without software practices** — even though it's some of the **most valuable and difficult** work. Applying decades of software learnings will have huge impact.

## 7. The Walking Skeleton — Applying an Existing Idea to Platforms

### 7.1 What a walking skeleton is

- A **walking skeleton** (a.k.a. **tracer bullet**) is a **minimal but completely deployable** solution.
- Key point: it's **not** just a minimum viable *idea* — it takes the idea **all the way through the delivery process to production.**
- The payoff is **feedback and validation**: where are your **challenges, costs, risks**, and where do you need to invest — **unpicked very early.**

### 7.2 Needing a vision

- To build a skeleton you need a **vision** of where you want to get to.
- Today many people target a **developer portal**: a single place people can go to get what they need from internal teams, with each individual piece available inside.
- The vision delivers a **coherent experience made of individual puzzle pieces.**

### 7.3 The three phases

- **Frame** — build the skeleton: the first thin end-to-end slice of the vision into production.
- **Flesh it out** — add muscle to the bones; gain confidence by exercising it.
- **Finish the look / future** — "throw on that fancy hat," figure out what it looks like for the **next decade.**

## 8. Phase 1 — Frame (the Skeleton)

### 8.1 Decide what to automate for the capability

- A platform typically offers some **infrastructure** to the org.
- Could be **narrow** (a single bucket, a single database) or **compound** (an **ephemeral test environment** per change).
- Whatever you pick, it's **not just infrastructure-as-code** — it's **end-to-end** from "I want something" to it being **compatible with the org and all its rules**: **manual approvals, security scans, auditing/logging.**
- Map all of that and put it into a **system**.
- **CI/CD analogy:** before CI/CD you *still had* a delivery process — maybe "walk to your colleague's desk and **SCP a file** to the server." A big part of moving to CI/CD was **acknowledging and codifying** that the process existed, then building on it. Same move here for platform offerings.

### 8.2 Expose a contract / API independent of implementation

- It must be **available as a service**, meaning a **contract and API** with users.
- The API is **independent of how you implement** the service — just **inputs and outputs**, like any HTTP POST.
- She built an **open-source game** (Creative Commons, under that QR code) to help people **design APIs from a platform perspective**:
  - A gentleman in the **Japanese platform engineering community** is helping **translate it and bring it to Japan.**
  - It's **open for extension**, to be made **white-labelable** — early stages, open to ideas and contributions.

### 8.3 Implement CRUD → a working capability service

- The last piece of a **"Hello, World" capability** is enabling real interactions: **create, read, update, delete.**
- How does the capability respond to **create / update / delete** requests?
- Now you have a **working microservice / capability service** — your **Hello, World capability.**

### 8.4 Put it into the puzzle — turn the service into APIs

- Turn the service into a **set of APIs**, **decoupling how you built it from how people access it.**
- **Don't treat IaC tools (Helm, Terraform) as an API** — they're **fantastic structured inputs, but not an API.** If you change your implementation, users are forced to **change how they consume it** — that's not an API.
- Move to an API that lets you **change under the hood** and **separates production from consumption.**

### 8.5 Why decouple — value-flow separation and org design

- You get **separation in the flow of value**: **remove the impact of change** from between consumers and producers.
- Be **intentional with organizational design** — "bring back **domain-driven design**." Think about **composability.**
- A **monolithic platform** struggles when the market changes: hard to integrate **new commodity tools** and to **reduce load on custom tools** as commodities appear.

### 8.6 Make it accessible — an agnostic marketplace

- Create an **agnostic marketplace** where, no matter how the thing is built, people can **see it.**
- **Interfaces are where people wrongly start** — they're really just **one piece of the puzzle.**
- Investing in **API-first** means you can front it with an **MCP server, a portal, an IDE plugin** — whatever the team wants.
- A **visual representation aids adoption** — which is why **portals are so popular today.**

### 8.7 Market it — internal tooling still needs a brand

- "It is **silly how much marketing works**," and nobody wants to talk about marketing for internal tools.
- Technologists say "we're in internal tools *because* we hate marketing — we want servers, code, the command line."
- But a **brand** gives people something to **talk about, ask about, and remember to go to.**
- **LEGO example:** the LEGO team named their internal platform **"base plate"** — brilliant. It gives people a handle, plus **stickers** and conversation.
- At some level **we are all marketing our products** because we want **adoption.**

## 9. Phase 2 — Flesh It Out (Add Muscle, Sustainably)

- After Phase 1 you have an **end-to-end flow** of something people need, available **on demand as an API in a centralized location** — but no **sustainable** way to make **more** of these. That's this phase.

### 9.1 Test suites — risk-first, one example per level

- Get **test suites** in (she's a former QA — of course).
- **Brainstorm your risks** and turn them into tests **as early in the feedback loop as possible**: can you catch it in **local dev**, or must you wait for **CI/CD** or **production**? Push detection **earlier.**
- Don't chase **100% coverage** early — that contradicts "start quickly, build iteratively."
- Provide **one example test at each level of detail**, so whoever picks up the next work can **add the tests they find relevant** rather than shouldering "add a whole new type of testing" inside a tiny story.
- This is something a **centralized team can provide** the org.

### 9.2 Operate it — measuring success

- You'll have to **operate** the thing, so decide **how you measure success**: **adoption** and **ROI.**
- Build a framework of **leading and lagging indicators.**
- **SLIs and SLOs** are the technical reality: are you **moving too fast** (missing expected reliability) or **too slow** (missing expected innovation)? Learn from the **SRE** team.

### 9.3 Game days / chaos — "you never know what you don't know"

- You find the unknowns by **testing yourself with creativity**: **chaos engineering, game days.**
- Exercise the **muscles of operating in production early and often.**
- The **banking team hadn't done this** a month before go-live, so they ran **twice-a-week game days**, acting as if in production in a bank: **couldn't see the data, but got errors.**
- The questions they stress-tested: did we have **enough metrics, traces, logs**?
- Insight: it's easy to watch logs stream past and assume all is well — but are they **useful logs or noise?** The only way to know is to **actually test it.**

### 9.4 Real packaging — meet users where they are

- Do **end-to-end updates** and **get it into users' hands.**
- Anti-pattern: "Don't worry, just **`npm install`**" — which version of Node? Do I keep it updated? How?
- Use the **team's real packaging mechanism**: **brew** (Mac), **Chocolatey** (Windows), whatever fits.
- This boosts **adoption** and gives you a **delivery mechanism** to **prompt upgrades** when new versions ship.
- Combined with **API separation**, **centralized teams update what they own** while **users keep full CRUD** over the bits they care about.

### 9.5 Users are second-party customers

- "Your users are **customers**" — a staple of **platform-as-a-product** talks.
- But they're **not third-party** customers (unknown, untalkable-to); they're **second-party**: **not on your team**, so you can't build what **you** personally want — but you **can go talk to them** and **build a relationship** for **early feedback loops.**
- Figure out how to **support them as close, easily-accessible customers** — not as yourself and not as your team.

## 10. Phase 3 — Finish the Look (Scale for the Next Decade)

- At this stage you can **create a component** and, with **testing and operability safety nets**, **scale** creating them. Now introduce a **contributor model.**

### 10.1 Platforms must not become "new ops"

- The **biggest source of failure today**: platforms turning into **new ops.**
- History: **centralized ops → decentralized DevOps → re-centralization** to regain **economies of scale**, reduce **cognitive load** and **duplication**, and cut **DevOps risk.**
- But when re-centralizing, we **didn't learn from past mistakes**: bringing everything back **without independent build capability** just recreates the **bottlenecks** of 5–10 years ago.
- Enable a **contribution model independent of pull requests to a single monolithic code base** — the monolith gets you stuck fast.

### 10.2 The marketplace model — Etsy

- The model that "clicks" is a **marketplace**, like **Etsy.**
- Etsy's software engineers **aren't knitting sweaters** or Christmas shopping at work — they **build the tools** that let **producers of custom goods** connect with **buyers.**
- They build tools that help **sellers** see what to do differently (and make more revenue) and help **buyers** find what they want.
- That's the internal platform team's job: **build the tools that let experts** (database experts, security experts, …) **expose their expertise**, and let the **wider org consume it** rather than rebuild it.

### 10.3 Inner-sourcing done wrong vs. right

- **Inner sourcing** is a challenging term because people equate it with **open source**: a **centralized code base**, anyone can PR, "want a feature? do it yourself."
- But open-source-style change **offloads and asks for free labor, on *your* terms.**
- The frame-then-walk model instead lets contributors **build on *their* terms** while **integrating into your centralized platform** — "a world of difference" for actually getting contributions.

### 10.4 Keep it up to date — two-tier GitOps reconciliation

- Once people can contribute, you must **keep things up to date** to **ward off decay** — a feature the **centralized team can offer.**
- Offer **reconciliation loops** to detect **drift** in production **not just at the infrastructure level but at the policy level** too.
- Watch whether **policies stay current** and **introduce reconciliation to fix them over time.**
- **Two-tier GitOps:** not just "make production match what I declared," but "**the way I declared what I want can itself change**, which changes production."
- Example: "I want the **most recent version** of a package" — that can't be **static**; you must **search for the next version, update it, and change production.**
- The model: **from idea → declared code → production**, as a two-tier loop the centralized team offers.

### 10.5 Real optionality — externalized, runnable tests

- Everyone says platforms/products **should be optional** — the only real user feedback is when users can **vote with their feet.**
- The trick: **are you really optional?** If people must go through you to reach production (they can't just "put in a credit card and go to a cloud account"), **not really.**
- Create optionality by **separating success metrics from how those metrics are met.**
- **Externalize the validation of success** as **runnable tests against any infrastructure**, including your own — now **someone else can bring infrastructure and test against it.**
- Bonus: this makes your **value visible.** "Sure, go off on your own — but **here are the 100 tests** you have to pass. By the way, over here you get **all 100 for free.**"
- Historically those tests stay **hidden on our own team**, and we **lose track** of the value we provide.

## 11. Closing Takeaways

- **Tech isn't just how we build the product — it *is* the product.**
- Build **road maps that aren't projects** — ones that support the team and org **long-term.**
- Do research use cases, product thinking, product road maps, UX — **and** the **tech that supports what we learn.**
- Accept that building products means **marketing and evangelizing** them — **internal developer relations**, which doesn't come naturally to internal-tooling folks.
- **Products demand a multidisciplinary approach**, and it's **tech's job** to bring the **human and business** requirements to the table to be iterated on.
- **Internal tools are just software.** Yes, infrastructure has **longer feedback loops** and is **harder to test** — "but it's because we **haven't challenged ourselves** to do so better."
- **Bring quality to the table.** Everything we expect of our software teams, we should expect of our **internal development teams.**
- **Plant the tree today:** set up the **most minimal tracer bullet / walking skeleton end-to-end**, then build on top.
- **Beyond features:** people ask "do we have the newest AI agents / all the database types / ephemeral test envs per PR?" — but a **feature-only road map** means you **never step back to the bigger picture.**
- The platform team's real worry: **how to enable scaling of contributions** — there will **always be another feature**; introduce features **scalably and maintainably.**
- **Gregor Hohpe** (around the conference) talks about **"thinnest viable platforms"** — worth looking into. The one constant in tech is **change**; build platforms so the **technology around you can change** and you can **adopt it.**

### 11.1 Community work — a "12-Factor" for platform capabilities

- She's contributing to a **CNCF (Cloud Native Computing Foundation)** paper.
- A group is writing something **mimicking the 12-Factor App, but for platform capabilities.**
- If you're bought into **creating capabilities independent of a centralized platform** and **exposing them as a marketplace option**, the next question is **what makes a capability successful and easy to integrate.**
- Just as **12-Factor App** brought applications to platforms sustainably, this work aims to describe the **architecture that brings capabilities to platforms sustainably.**

## 12. Q&A

### Q1 — How important is introducing golden paths in the platform journey?

- Golden paths = **higher-level abstractions** that help engineers move **consistently, easily, and safely** across the org — "**make the right thing the easy thing.**"
- **Really important** for supporting the **~80%** of the engineering team.
- The other **~20%** want to do things their own way — sometimes for **good reason**, sometimes **CV-driven development**, sometimes just habit.
- Key: a **golden path will need to be broken at times.** If you build it **monolithically/singularly** (assuming no one wants 80% but not the other 20%), you'll be in trouble.
- Build the path out of **"golden bricks"** — pieces someone can **pick up a subset of** without taking the **entire path.**

### Q2 — Backstage off the shelf, or build our own platform? Buy vs. build trade-offs?

- **Build vs. buy is a never-ending question** — the reality is it's **always a blend**: take tools off the shelf and **customize** to your org. Even **open-source components** are a form of "buying" something to build on.
- **Question whether Backstage is the right foundation** — not out of dislike (it's a **fantastic portal framework**) — but **Backstage is a UI.**
- **Phone-app analogy:** when phone apps arrived, companies scrambled to **pull logic out of the website into the back-end server** so they could serve **website + iOS + Android** — logic belonged **server-side, not app-side.**
- If you **put your logic into Backstage**, you'll struggle with **MCP servers** (AI era) and **other portals.**
- On buy vs. build: **own your interfaces.** Technology will change — **Backstage** is today's crème of open-source portals but will be something else in 10 years; **Terraform** was the belle of the ball 10 years ago and now frustrates people. **Own the interface with your users** and let the tech **evolve underneath it.**

### Q3 — At a huge company with many internal platforms, should we have a "platform for platforms"? Where does it stop?

- The confusion is between **API endpoints** and **what people actually access daily.**
- Advocate: serve your **APIs from a coherent, discoverable location** — but that **doesn't** mean your **data scientist** should see the same things your **front-end app developers** see.
- **Separate the logic API** of your platform from the **consumption model.**
- That way you can have **many platform interfaces** while keeping a **uniform API consumption model underneath.**

### Q4 — Concrete example where wrapping an API over a custom Terraform module is worth it? Terraform is already a well-documented IaC abstraction.

- This is where she "gets tomatoes thrown" for saying **Terraform is not an API.**
- Many orgs with Terraform **also have other tools** (Ansible, Pulumi, Crossplane) or **want to introduce a new tool but can't** because it's "**too high a barrier of entry**" to make users learn it — that friction is exactly what you **own** by **not making the implementation your user interface.**
- **Day-two problem:** with Terraform, people often **give users modules to run in their own account.** Great for **getting started quickly**, but on day two — "**I need to update that module**" — do you even **know where modules are running**, **what version** they're at, or **have any control** over updates?
- Having something **as a service** (in the **Team Topologies** "as-a-service" communication sense) is **undervalued**, and it **challenges whether Terraform should be the enterprise interface.**
- Decide **from a principles point of view, not a diehard-technology point of view.**

### Q5 — What if the people pushing against platform updates are the *product* people themselves?

- In her experience, product people push back because **they can't trust the updates.**
- "I hate to break it to my fellow platform engineers — **we aren't always the most trustworthy of humans.**" We've made mistakes and broken things, so we must **build and earn trust.**
- Do updates in a **safe way** that **doesn't break people** — earn trust **little by little.**
- Second, **they shouldn't have to know** about updates — but if you're going to **hide** updates **below the API/implementation line**, you'd **better not break them.**
- **Build trust and experience little by little** to update in a trustworthy way.

---

## People, Organizations & References Cited

- **Abby Bangser** — speaker.
- **Samantha (Spotify)** — cited for product thinking in the platform space.
- **William (SUSE)** — cited for product thinking in the platform space.
- **Cat** — Abby's product manager; applying product-management skillset to platforms.
- **Gregor** — quoted (podcast with Dave Farley) on platform engineering being treated like untested infra engineering.
- **Dave Farley** — host of the referenced podcast conversation.
- **Gregor Hohpe** — "thinnest viable platform" concept; around the conference.
- **LEGO team** — internal platform branded **"base plate."**
- **Etsy** — marketplace metaphor for the contributor model.
- **Backstage** — portal framework discussed as "a UI," not a place for logic.
- **Terraform / Helm / Ansible / Pulumi / Crossplane** — IaC tools; "structured inputs, not an API."
- **Japanese platform engineering community** — translating her open-source API-design game.
- **CNCF (Cloud Native Computing Foundation)** — "12-Factor for platform capabilities" paper she's contributing to.
- Concepts referenced: platform-as-a-product (2017 white paper), walking skeleton / tracer bullet, trough of disillusionment / hype cycle, domain-driven design, CRUD, MCP server, developer portal, SLIs/SLOs, SRE, chaos engineering / game days, GitOps & reconciliation loops (two-tier), golden paths / golden bricks, Team Topologies "as-a-service" communication, 12-Factor App.

---

*Video: https://www.youtube.com/watch?v=VieEf9qbjAA — Transcript via yt-transcript.sh; exhaustive outline generated from the full transcript.*
