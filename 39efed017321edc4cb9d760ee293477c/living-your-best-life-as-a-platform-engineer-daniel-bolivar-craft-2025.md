---
title: "Living your best life as a platform engineer - Daniel Bolívar | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Daniel Bolívar (Stripe) frames platform engineering as a human problem through two contrasting stories — Personio's accidental 'front-end orchestrator' success and Stripe's convoluted prefetching project — and three rules: no git-gooding, make the correct easy and the incorrect hard, and meet users where they are, plus a Q&A on career visibility, LLM-on-docs, and treating engineers as users who can't leave."
type: "reference"
tags: ["softwaredevelopment"]
---

# Living your best life as a platform engineer - Daniel Bolívar (Talk Outline)

> A Craft 2025 talk by **Daniel Bolívar**, a design-turned-engineer with ~11 years of experience, mostly building product features, now (for the past **8 months**) a **platform engineer on Stripe's core front-end platform team in Barcelona**. Thesis: the hardest part of platform engineering isn't the technology but the **human component** — "code will never love you, but your colleagues will hate you when you mess up their stuff." Format: two disclaimers → two contrasting platform stories (the highs and lows) → why platform is different (scale, blast radius) → three rules → revisiting the stories through those rules → final thoughts → a substantial Q&A. Light on technical detail by design; some React/GraphQL flavor.

---

## 1. Introduction and Disclaimers

### 1.1 Who he is
- Design-turned-engineer, ~11 years in software, most of it building products for end users.
- **8 months ago** switched hats to platform engineering at Stripe (core front-end platform, Barcelona). Writes occasionally, "not a lot lately."

### 1.2 The two disclaimers
- There'll be **React** content here and there, "not super important to understand."
- **Not a lot of technical detail** — no time; find him afterward for deep dives.

---

## 2. Story 1: "Oops, We Built a Platform" (Personio, 2022)

### 2.1 The accidental start
- 2022, post-pandemic; bright-eyed front-end engineers decided "monorepos are cool, let's build one" — and **no one told them no**.

### 2.2 Escalating ambition: the front-end orchestrator
- Emboldened, they asked "what if we change how everyone builds front end?"
- Built a **Next.js app** called the **front-end orchestrator**.
- Bundled the whole front-end codebase as **federated modules**, run **dynamically at runtime** (fetched from somewhere and executed) so small changes wouldn't need big deployments.

### 2.3 It succeeded (to everyone's surprise)
- Company was **Personio**.
- In **9 months**, the first pages ran on the orchestrator; by **2024**, everyone doing front end built as federated modules on it.

### 2.4 The metrics
- **Web performance ~25% faster** across the board (via deduplication in a monorepo vs. separate repos).
- **Thousands of lines deleted** — an internal open-source-like sharing system emerged.
- **Deploy-to-visible time dropped 15 → 3 minutes** (unplanned side effect).
- Most importantly: **people migrated willingly** — little effort, lots of benefit.

### 2.5 Why it worked (retrospection)
- The builders **weren't platform engineers** — they were regular front-end engineers with **real pains** they wanted to solve.
- They knew they'd **have to use the thing themselves**, so they made it **easy to use** — the key to its success.

---

## 3. Story 2: The Prefetching Project (Stripe)

### 3.1 The mandate
- A team of **very experienced platform engineers** (his current team) was asked to improve the performance of **Stripe's most important front-end surface**, "at all costs."
- As a platform team, they couldn't change how people build the product — only pull **platform levers**.

### 3.2 The lever: when data is fetched
- Identified lever: the **moment in time data is fetched**.
- Before: route renders → reaches a component → component starts fetching its data → renders content when done.
- Goal: move fetching **much earlier** — route hits, rendering and data-fetching start **simultaneously**, so data is ready (or in flight) by the time the component renders. Saves milliseconds (good for web performance).

### 3.3 Technical constraints forced a convoluted API
- The already-built system's constraints and framework nuisances blocked the simple approach (tried but failed).

### 3.4 The convoluted instructions
- The prefetching recipe given to users:
  1. **Wrap** your existing data-fetching function into a **prefetch version**.
  2. Go elsewhere and **add it to a list** (a hook) of things to be prefetched.
  3. Remember to **replace** your regular component with the prefetch version.
  4. If done correctly → "profit" (you get prefetching).

### 3.5 Why it worked but didn't work
- Too many steps for something that should be simple.
- People got it wrong, or someone (or themselves) later added a component fetching more data and forgot the steps → **regression**, web performance "back to where it was."
- The solution worked technically but demanded too much context/learning — a **well-crafted solution undermined by complexity**. The **low** of platform work.

---

## 4. Why Platform Engineering Is Different

### 4.1 The framing
- One could debate whether platform differs from product engineering; assume two differences: **scale** and **blast radius**.

### 4.2 Scale
- Far fewer platform engineers than users — every change affects workflows "an order of magnitude higher."
- His team: **9 engineers** responsible for ~**7 tools** used daily by **500+ engineers** on rotation.
- Stripe's Slack has **10,000–11,000 people** on any day; their help channel is **consistently top-5 in traffic**, almost all "how do I…" questions.

### 4.3 Blast radius
- Anyone with code access has "powers of mass destruction."
- A **product** mistake is usually contained ("oops, try again" on one part).
- A **platform** mistake can be a "nuke" — almost every platform change has that potential. "A lot of power and anxiety for humans to deal with."

### 4.4 The choice of focus
- He'll skip "how to make safer changes" (others are more qualified) and focus on the **scale/human** part: "Humans are hard."
- Core line: "**Code does not love you and never will; but your colleagues, when you mess up their stuff, they will hate you.**"

---

## 5. Rule 1: No Git-Gooding

### 5.1 The Dark Souls reference
- Nothing to do with git — everything to do with **Dark Souls**, a famously hard game.
- Players asking "how do I beat this boss?" were told **"get good"** — meaning the game is *designed* to make you learn its systems to progress.

### 5.2 Don't force users to get good
- Software already has "a lot of git-gooding" (e.g., the prior LLM talk asking people to learn LLMs).
- Users are "just trying to do their job" — don't make them the little guy facing a massive boss (your platform APIs).
- Aim for a **smooth learning curve**, not a steep one.

### 5.3 Remember you already got good
- "I already got good because it's my job" (tens/hundreds of hours), but users haven't.
- A question isn't because they didn't read the docs — it's because it **wasn't as simple as you thought**.
- "Stupid"-seeming questions are **opportunities to actually make it simple**.

### 5.4 Automate the getting-good
- Provide good **linters**, **generate code**, run **codemods** — take the brunt of changes on the **platform side** instead of passing it to users.

---

## 6. Rule 2: Make the Correct Easy and the Incorrect Hard

### 6.1 Ideally "impossible," but this is JavaScript
- Ideally the incorrect path would be **impossible**, but "there's nothing impossible about JavaScript, especially doing things incorrectly," so he doesn't bother.

### 6.2 People gravitate to the simpler path
- People naturally take the **simpler path** — no matter how many times docs say "do not do this," they will do it if it's easier, causing problems.
- If the **correct** path is the easy/default one, they gravitate there.

### 6.3 Align their best with yours
- People are "just trying to do their best" — the platform engineer's job is to make **their best align with yours** by making the correct path the **default/easiest** one.

---

## 7. Rule 3: Meet Users Where They Are

### 7.1 From the PM playbook
- Borrowed straight from product managers.

### 7.2 The three things people want
- **Achieve more while doing the same.**
- **Achieve the same while doing less.**
- (Achieve more while doing less — "kind of hard," so keep to the first two.)

### 7.3 Tools should add value or remove work
- Tools should let users **do more without doing more**, or **the same with less** — add value on top, or remove steps.

### 7.4 New work needs clear, immediate, transparent value
- Sometimes the platform must advance and needs users to do something new.
- Extra workflow steps "that do not bring immediate, clear, transparent value will not be liked."
- If you need users to do something new, be **explicit about why** and **what they get**.

---

## 8. Revisiting Story 1 Through the Rules

### 8.1 Why it succeeded
- **No git-gooding:** migration was trivial — "copy your separate repo, move it to the monorepo," and get everything else for free; nobody needed to understand federated modules.
- **No incorrect path:** as soon as you migrated you were on the correct path; there was essentially no incorrect path at the time.
- **Lots of value for little work:** easy migration, immediate clear benefits.

### 8.2 The overcorrection
- "As soon as we made something good, we messed it up."
- Building a user-first platform without knowing how to build platforms made it a bad platform *for the platform itself*; maintenance got hard.
- They **overcorrected**: forced people (already migrated) to make **massive changes** — split code into **very opinionated modules** that didn't always make sense.
- **No user benefit:** same code, same behavior, same platform — "change it because we're asking you."
- **Incorrect became easy:** the weird modularization led to **under-fragmenting or over-fragmenting** — easy, honest mistakes.
- **Value deferred:** grand plans ("then we'll be able to do X, Y, Z") meant migrating people got **nothing at first** — just extra work.
- He's since left Personio; capable people are improving it, "but these were the mistakes we made."

### 8.3 Prefetching through the rules
- **Forced git-gooding:** unclear multi-step instructions people forgot → regressed.
- **No easy-correct/hard-incorrect distinction:** the incorrect path was at least as easy (probably easier), so people took it.
- **Too much extra work** for the value.

---

## 9. The Prefetching Fix (In Progress)

### 9.1 Two guiding principles
- **New APIs must be simpler than the old ones** — cutting options that did nothing or were framework bloat.
- **The correct path is the default** — there's still an incorrect path, but doing things "as you normally would" puts you in a prefetching system.

### 9.2 How it works: collocate data as a GraphQL fragment
- Write a component, **collocate the data it needs as a GraphQL fragment**.

### 9.3 Compose upward to the route
- Platform "magic" **composes that data upward** into parent components — a parent's data contains its children's data — repeatedly, up to the **root/route**.
- The route ends up with a big **composed data object** of everything needed to render the page.

### 9.4 Prefetching by default
- As soon as the route kicks in, the **entire composed data is fetched**, then propagated to the components that need it.
- So a regular component gets **prefetching by default** just by collocating its data.

### 9.5 The magic underneath
- Lots of **GraphQL manipulation** (more than they'd like — GraphQL fragments don't support arguments in some areas, requiring workarounds).
- **Crafty code generation and auto-linting** — as people write code, generation connects parent to children and composes data.

### 9.6 Why it follows the rules
- No git-gooding — people keep doing what they already do, with small changes and clear immediate benefit.
- Doing the familiar thing yields the **default value of prefetching**.

---

## 10. Final Thoughts

### 10.1 The human component is the hardest part
- The hardest part of software in general — and platform especially — is the **human component**, because you affect the work of many people at scale.

### 10.2 Nurture relationships and understand users
- Crafting and nurturing **great human relationships** — learning how users build, understanding what's good/bad for them — is key to the platform role.

### 10.3 A good platform is invisible
- "A good platform is like good UX — almost invisible. It doesn't get in the way; it's just there, it just provides power."

---

## 11. Q&A

### 11.1 Q1 — Is it harder to build a career / get promoted in platform (less visible to PMs) than product?
- Hard to answer after only 8 months ("not getting promoted yet").
- Platform impact is high **if you move the right levers**; it's easy to fall into invisible "keep-the-lights-on" work not reflected in business terms.
- Advice (from peers): **balance** it — find ways your work makes others or the business **faster/easier**, and put some of that in the record.
- Callback to Rule 3: have a clear message of what you're doing and why it's good for coworkers — which always translates to business impact.

### 11.2 Q2 — What is your mission in your role and in life?
- **Role (his LinkedIn):** "make it so others are able to create great stuff by using the things I make." Not "beautiful code" as art — code **used by others** to make people's lives better.
- **Life:** be happy — time for loved ones and hobbies, do good stuff, "keep playing Dark Souls games whenever they come out."

### 11.3 Q3 — Most overlooked technical investment that improves platform engineers' day-to-day?
- Platform work is mostly to improve **others'** experience, but doing that well means fewer questions and problems for you.
- His pick: **put an LLM on your documentation** to auto-answer questions in the help channel.
- With their "**runner**" (question-answerer) concept, the LLM bot suggesting a doc that the asker confirms is helpful is "the best feeling ever." "Put an LLM on your docs. Write good docs."

### 11.4 Q4 — How do you manage the volume of Slack questions?
- Partly the **LLM helper**; partly a **two-person on-call "runner" role** — that week you're expected to turn in **less regular work** because you'll answer many questions.
- Realize **answering questions is part of the job** — "if people can't use your platform, what you did isn't useful."
- After only 8 months there's much he doesn't know, so he sometimes replies with a "looking into it" emoji, then digs into the code — annoying but useful for getting up to speed.

### 11.5 Q5 — How do you know your colleagues love it? (re: "code won't love you but colleagues will hate you")
- Colleagues "loving" you is separate from the code; **disliking a platform they're forced to use** is very common.
- You'll see it in **feedback** (gather feedback!). In this domain, **silence is good** — few questions, no bad feedback, and people building with what you provide means they probably like it (or are okay with it — "high praise for platform teams").

### 11.6 Q6 — How is your advice different from "treat developers as users"?
- It doesn't have to be different — if you build **tools for engineers**, it's basically the same.
- But engineers aren't typical users. Two differences:
  - **Access:** non-engineer users (e.g., people booking hotels on booking.com) don't have access to your private Slack; your engineer colleagues do.
  - **They can't leave:** a regular user who finds something hard just **leaves** (bad). Engineers **can't leave** (it's their job), so they'll find **unhealthy workarounds** that go against the health of the product/platform.
- Condensed: treat fellow engineers as end users, but remember they can't leave.

### 11.7 Q7 — What made you go from product to platform?
- He felt most problems in the product he worked on "were solved the same way" — stuck in his own growth/learning, wanting something new.
- Aligned with wanting to **move to Barcelona** (from Munich); the Barcelona job happened to be a platform team.
- "More serendipitous than anything" — he didn't set out to be a platform engineer, just wanted something different.

---

## People & References Cited

- **Daniel Bolívar** — speaker; design-turned-engineer; platform engineer on Stripe's core front-end platform team (Barcelona).
- **Companies:** Stripe (current), Personio (Story 1), booking.com (Q&A example).
- **Tech / tools:** monorepo, Next.js, federated modules, front-end orchestrator, React, GraphQL (fragments, arguments limitations), code generation, auto-linting, codemods, linters, Slack, LLM-on-docs.
- **Cultural reference:** Dark Souls ("get good" / "git-gooding").
- **Concepts:** platform vs. product engineering, scale (few engineers, many users), blast radius ("nuke" vs. contained oops), the human component as the hardest part, no git-gooding / smooth learning curves / automate getting-good, make the correct easy and the incorrect hard (align users' best with yours), meet users where they are (do more / do less; clear immediate transparent value), prefetching / data-fetching timing, collocated GraphQL fragments composed upward, prefetching-by-default, overcorrection / opinionated modularization, "a good platform is like good UX — invisible," runner on-call role, treat engineers as users who can't leave, career visibility / business impact.

---

*Video: https://www.youtube.com/watch?v=bDTFO3r0aZ0 — Transcript via yt-transcript.sh; outline generated from the transcript.*
