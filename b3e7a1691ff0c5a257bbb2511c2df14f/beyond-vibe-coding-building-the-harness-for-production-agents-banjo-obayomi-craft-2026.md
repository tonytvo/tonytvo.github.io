---
title: "Beyond Vibe Coding: Building the Harness for Production Agents – Banjo Obayomi | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Banjo Obayomi (Generative AI DC) turns lessons from a fully-agent-run DC-events newsletter into a framework for production agents: verification debt, 'agent debt', the shared-responsibility model, and six ways to build a deterministic harness (spec-driven dev, init+daily worker, tools, skills, verification gates, recovery contexts) — with a live Codex demo where 'the markdown is the program' and Q&A."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Beyond Vibe Coding: Building the Harness for Production Agents – Banjo Obayomi (Talk Outline)

> A **Craft 2026** talk by **Banjo Obayomi**, who runs the **Generative AI DC** organization in Washington, DC (his first time in Budapest). He credits meetups — connecting with other craftspeople, seeing "the art of the possible," then testing the hype yourself by building something — for his start in the industry. His running experiment: an **automated DC-events newsletter built entirely by AI agents**, which he has improved for six months not by editing code but by **fixing the harness** as failures surface. The talk's own structure: (1) the new problem — we don't read the code — and its two debts (verification debt, agent debt), (2) the shared-responsibility model and a definition of "harness," (3) six ways to build a harness, (4) a live Codex demo of the newsletter, (5) the "markdown is the program" mental model, (6) resources, and (7) an extended Q&A.

---

## 1. Framing: Meetups, Hype, and a Side Project

### 1.1 Who he is
- Runs **Generative AI DC**; from Washington, DC; first time in Budapest.

### 1.2 Why meetups matter
- Meetups connect you with other building craftspeople; they're how he got started.
- His first meetup: seeing a speaker show "the art of the possible."

### 1.3 Testing beyond the hype
- When you hear something at a meetup, you must **test it yourself and build something** to see edge cases, what breaks, what works — then share the learnings.
- That is "the theme of this conference."

### 1.4 The side-project method
- AI agents are "all the hype" — harnesses, products — but "how do we actually use any of this stuff?"
- Best approach: **start with a side project** to see where the cracks appear.

### 1.5 The automated DC-events newsletter
- Six months ago he built an **automated DC-events newsletter**: a web scraper that gathers info and reports "here's what happens today."
- The twist: he built it **completely with AI agents** to see where the cracks fail.
- Every day he doesn't update the code — he **improves the harness** based on the failures he observes.

---

## 2. The New Problem: We Don't Read the Code

### 2.1 Agents write code for hours unattended
- **MITRE** (which does many software evaluations) reported **Claude Opus 4.6 wrote code up to 14 hours without human input**.
- **Peter Steinberger** (who made "Open Claude") says **he ships code he doesn't read**.

### 2.2 The question has changed
- We're at an inflection point: code is generated and not even checked or read.
- The question shifts from **"can agents write code?"** to **"how do we engineer around the fact that they do?"** — they write it well and quickly, creating a new set of problems.

### 2.3 Verification debt — definition
- **Verification debt:** code ships faster; people don't want to read all the reviews; "this just looks good to me" reaches production before anything happens.

### 2.4 Verification debt — the fix is old methods, back in front
- Need **new ways to verify without reading every line**: TDD; waterfall-style "decide what needs to happen."
- Formal methods are being introduced; but for regular systems, **unit tests, integration tests, and a staging environment** — "simple, but a lot of these are being skipped."
- The keynote noted how Meta rolled out many things; **user testing end-to-end** must be put back in the forefront.
- "The basics are very important when you're not actually doing any of the coding anymore."

### 2.5 Agent debt — definition
- **Agent debt:** like technical debt, but **for the harness** in which your agent runs around.

### 2.6 Agent debt — prompts are brittle
- Prompts are the first thing and are brittle: "find the 10 events in the area" — what does that mean? What if it can't find 10?
- Prompts will change and evolve as you work with agents.

### 2.7 Agent debt — memory can feed stale instructions
- Agents now **remember** via a **markdown file** ("here's what happened before").
- Reading old memory can **confuse** the agent: instructions changed two months ago, the agent finds an old instruction — how does it handle the difference?
- Clean code, git repos, regression testing all matter here.

### 2.8 Agent debt — tools/APIs change
- If a **tool or API surface changes** (a different method, an MCP server change, an auth change), how do your tools evolve with your agent?

### 2.9 Agent debt — model behavior shifts
- A new model changes behavior: **Opus 4.7** was said to be worse than **Opus 4.6**; now you rewrite tests; **4.8** ships; you want to try the ChatGPT model.
- How do you verify and manage around behavior differences between models?

### 2.10 The Challenger O-ring analogy
- Every success makes the next agentic step "feel safer."
- The **Challenger** rocket: O-rings were flagged as bad, but they kept testing/launching, and it blew up on ~the 25th launch — catastrophic damage.
- Your agent might be on "launch 24," working fine, then the next run the site goes down.

### 2.11 His own day-14 failure
- On **day 14**, his newsletter scraped a **broken event**; a **malformed JSON was pushed to the S3 bucket**, and the **site crashed**.
- Not as dramatic as a rocket, but a malformed JSON "can definitely hurt you a bit"; he didn't see it coming.
- Just because the agent worked one day doesn't mean it works the next — you must engineer around that fact.

---

## 3. Shared Responsibility & the Harness

### 3.1 The AWS shared-responsibility mental model
- From his cloud-computing background: AWS's **shared-responsibility model** — AWS handles the cloud, you handle operation in the cloud.

### 3.2 What the agent owns
- The agent/provider owns: **what it does, how it plans, what tools to call**, plus the **capability, model, runtime, and protocol interaction** — mostly out of your control.

### 3.3 What you own
- You own the middle: **what it does, how to prompt it, the intent, what feels safe, when it gets retired**, and the **consequences**.
- You and the agent work together — "a new type of pair programming."

### 3.4 Definition of a harness
- **Harness = deterministic scaffolding around a probabilistic agent.**
- You don't know what the agent will do, so you add **guardrails, conditions, ways to capture failures, test, and improvise** when things go wrong — "and things will go wrong."

---

## 4. Six Ways to Build a Harness

### 4.1 Way 1 — Spec-driven development
- He reintroduces terms: **spec-driven development is basically waterfall** (requirements, design, tasks, how to test, how to verify) — renamed because "we were all told waterfall is bad."
- It's a way to answer "what exactly am I going to do?"
- The keynote's "think before writing code": this forces understanding up front instead of **live debugging** to fix things.
- Planning with an agent (how the code will look, the **definition of done**, how to verify, the tasks, how it can fail) **saves time up front**.

### 4.2 Way 2 — Initialization + a daily worker
- Once he has a plan, he **initializes** the agent/harness in **one thread** — all the planning and a **proof of concept** — then starts a **new thread**.
- This is **context engineering**: doing everything in one sit-down with multiple agents gets confusing and brittle.
- After initialization, he runs something **daily** that reviews tasks, finds edge cases, and fixes things.
- Think of it as a **stand-up**: "what did I do? what needs to be done next?"

### 4.3 Way 3 — Tools (deterministic CLI scripts)
- Agents love tools; for repeated actions (API calls, tasks), make **stand-alone scripts or CLI tools** — a deterministic way for the agent to act.
- Example: generating 2D assets that needed **background removal** — the agent kept writing its own script/API call each time; he made a single **CLI command** to standardize it.
- You can even ask the agent, "what task am I doing a lot that we should codify into a CLI script?"
- Scraper example: it used **computer use** (opening a Chrome browser, clicking) which **sometimes missed things**; he replaced it with an **API call** — more deterministic, immune to UI changes.

### 4.4 Way 4 — Skills
- **Skills** are a new primitive: **markdown files** describing what the agent does and how to approach tasks (can even embed CLI scripts).
- Maps to shared responsibility: the human provides intent/task; the session/project/prompt holds the skills.
- Different agents/sessions can have different skills.
- A skill **codifies your work style** so the agent follows it — "I'm teaching the agent how I work" — and you can write the skill **while working with the agent**.
- Makes the agent more deterministic and enforces best practices.

### 4.5 Way 5 — Verification gates
- Since you're not reading the code, **verify what works**: don't push a malformed JSON to production; have a way to test.
- Give the agent tools: a **schema**, tests, a way to say "this worked / this did not" and **push back** — don't blindly accept code.
- Have the agent **verify its own code** or run **another agent** to review.
- **Push-to-prod safety:** if you don't want it to delete things, add verification.
- **Scoped / role-based access:** don't let the agent overwrite a production database — script it so only you can. "My prod database was deleted because I let my agent run wild" is a real story.

### 4.6 Way 6 — Recovery contexts
- Something always fails, so have a way to **roll back**.
- Use a **staging / production-test environment**; if a JSON is malformed, don't push it — or if you do, have a rollback.
- Avoid **"Schrödinger's database"** — deleted with no backup and you don't know if recovery works.
- **Actually test** that you can recover from a known-good state.

---

## 5. The Scraper, End to End

### 5.1 The pipeline recap
- Input sources → customized scrapers and tools → validation (make sure everything passes) → push to an **S3 bucket** → a **live site**.

---

## 6. Live Demo (Codex)

### 6.1 "Automations" = renamed cron jobs
- He used **Codex**; "automations" are just renamed **cron jobs** — repeatedly run a task on a schedule.
- His runs **every day at 7:00 a.m.**: follow this skill, update these things, select events.

### 6.2 The "beefy" iterated skill
- The **skill** is long and detailed; he innovated on it over time (not one-time): find primary sources, scrape, dedupe/score, schema, voice, merge, publish.
- Modern models (vs. the ChatGPT-3.5 days) can read very long markdown.
- He asked the agent to **turn the markdown skill into an HTML file** for the conference — easier to understand.

### 6.3 The markdown as executable contract
- "The markdown becomes the program — a plain-language skill file becomes the executable operational contract."
- It defines everything he'd do running a newsletter org: sources, how to stop, schema, voice, merge, how to publish, how to browse the web (another skill opens the browser).

### 6.4 The processing loop
- Inputs → scan → scrapers → **quality gates** (dedupe and score) → look at the JSON → loop each run.
- Example: it scraped seven days, found **overlapping matches** across many websites, verified, and pushed the merged results.
- It **merges** files, runs **schema validation**, pushes to **S3**, and **updates the memory file**.

### 6.5 The memory file as a running stand-up
- The memory file logs what happened this run and the day before — "your stand-up: what happened that day, what to do next" — a running log to spot problems.

### 6.6 Today's new failure — caught, not fatal
- Today he found a **new failure: computer use doesn't work in the EU** (not installed for the session).
- The **whole website did not break**; the failure was **logged and recovered**, and the **contract wasn't broken**.
- New verification learned: in the EU, can't use computer use — but it didn't destroy the site because the harness caught the error and moved on.

### 6.7 The website itself
- He wrote **no code** for the site; it's scoped to the **Washington, DC area**, finds events **up to 7 days** ahead.
- It replaced manually checking ~10 Instagram accounts / websites / articles — "an agent running my social life."
- His guiding idea: take things you do manually on your phone/computer and **codify them for an agent**.

---

## 7. "The Markdown Is the Program"

### 7.1 Two years ago vs. now
- Two years ago: write lots of code + make **one API call to an LLM** — that was the contract.
- Now: the **LLM does all the work**, and you provide a **big markdown file** for information, ideas, contracts, how to run the program, and how to recover.
- Shift from "here's more code, make an API call" to "you're an agent with agency — here's how I want you to solve the problem and recover."

### 7.2 It's not fire-and-forget
- Writing markdown for the agent feels weird, but it's **not one-and-done**: you keep testing and updating.
- Prompts are **disposable**; things break and change.
- **The harness is the product** — you build recovery contexts, skills, tools; you test and iterate. It's the new pair programming.

---

## 8. Resources

### 8.1 Cited sources
- **Simon Willison** — writes a lot about agentic engineering and testing new things.
- **Wakato** — "seven factors for highly effective agents."
- **OpenAI** — material on building with Codex and tool choice (which he's been using).
- **Ramp** — the "Designing for Agents" assignment/channel has good resources.
- Invites connecting on **LinkedIn**.

---

## 9. Q&A

### 9.1 Q1 — The skill is huge; isn't it a candidate to split into multiple skills by problem?
- Many ways to write skills; it's "unsolved right now."
- One approach: a **reference folder** — "look at this reference to update the stock" — for **composable references** inside the skill instead of one giant skill.
- In his example, **each website could have its own reference**; if one changes, update just that reference, not the whole skill.
- No data on better/worse, but it's more composable — "more work to update the harness, but it's never done."

### 9.2 Q2 — What verification-gate checks are in place?
- For this project: if **computer use didn't work**, shut it down (couldn't get info).
- For the JSON that updates the website, he wrote a **script that verifies the JSON works** (that was his first issue from reading many JSON files).
- If a test fails, the agent says "I did not push this update because I could not verify this test" — like a **GitHub CI check blocking a merge**, giving agents the same tools.

### 9.3 Q3 — Your validator tools/processes are also best practices without AI. What changed to make them almost required now?
- From an earlier talk: **less quality, less care** because AI makes it so easy to vibe code — "anyone can be an engineer."
- Then it reaches production, people use it, and things break ("I didn't make a test for this").
- We got excited to build and **forgot the craft**: "code has always been the least important part."
- The product, end user, experience, and testing matter; AI made us forget because we don't look at code — this conference reminds us software engineering is a craft that AI tools don't remove.

### 9.4 Q4 — Opinion on Anthropic developers' take on HTML as the new markdown?
- Good for **visual information** — his agent made an HTML file to show the skill.
- Easier to read HTML than markdown for users; great when **prototyping/testing** and pair programming.
- He wouldn't start from HTML — prototype first, then use a **running HTML file** to validate what's changing as you build.

### 9.5 Q5 — How do you pay down "agent debt" (cleanup process for a real system)?
- Like tech debt: go through the **skill** and the **memory**, and write **verification tests**.
- With agent debt, he logs what happened in the **memory file**, reviews the logs that didn't work, and gives the agent ways to verify/test.
- E.g., "log 27, we made this mistake — did we clarify it, fix it, was it in the skill?"
- Verify what the agent does, then go back and improve the processes.

### 9.6 Q5a — What would you build differently starting from scratch today, six months later?
- He was **very strict early** ("you must have this JSON spec").
- He's now experimenting with **giving the agent free rein**: "make a website yourself, tell me the cool things, no structure" — a new way to do agency.
- Six months ago agents were weaker; **Codex wasn't really a thing** — he was using **Claude Code**. Now agents are better with more tools/processes to engineer around.

### 9.7 Q5b — First thing someone starting from scratch tomorrow should build into their harness?
- **The skill** — codify your thought process and how to test.
- Work with the agent to write the skill, then **execute it via an automation/cron job**, and start iterating.
- The skill is a good starting point because it captures your thought process, testing, and definitions.

### 9.8 Q6 (last) — Do you validate code quality, or does it not matter if the software works?
- Tricky: if you're not reading the code, how do you know?
- You can add validation, but some issues (e.g., an **out-of-memory** issue) you can't test with validation and might not catch in code either.
- The answer: have a way to **roll back, verify a known-good state, and follow a recovery path**.
- You can't solve every edge case — something will break — so **recover, verify, test, log, and improve**. "Have ways to recover and catch" is the best answer.

---

## People & References Cited

- **Banjo Obayomi** — speaker; runs Generative AI DC (Washington, DC).
- **Peter Steinberger** — creator of "Open Claude"; "ships code he doesn't read."
- **Simon Willison** — writes on agentic engineering (Banjo forgot his name mid-talk, then recalled it).
- **Wakato** — "seven factors for highly effective agents."
- **Organizations / products:** MITRE (software evaluations; 14-hour unattended Opus 4.6 report); AWS (shared-responsibility model, S3); OpenAI (Codex, tool-choice guidance); Ramp ("Designing for Agents"); GitHub (CI checks analogy); Anthropic (Claude Opus 4.6/4.7/4.8, Claude Code, "HTML as the new markdown" view); ChatGPT (3.5 era reference, a model to try).
- **Models:** Claude Opus 4.6 / 4.7 / 4.8; Claude Code; Codex; ChatGPT model.
- **Concepts:** the automated DC-events newsletter side project; verification debt; agent debt (prompts / memory / tools & APIs / model behavior); the Challenger O-ring analogy; the day-14 malformed-JSON site crash; shared-responsibility model applied to agents; harness = deterministic scaffolding around a probabilistic agent; new pair programming; six harness techniques (spec-driven development / initialization + daily worker / tools as CLI scripts / skills as markdown / verification gates / recovery contexts); context engineering; computer use vs. API calls; "Schrödinger's database"; scoped/role-based access; "the markdown is the program" / executable operational contract; the memory file as a stand-up; the harness is the product; code as "the least important part"; HTML as the new markdown.

---

*Video: https://www.youtube.com/watch?v=UQUrSqEg1ug — Transcript via yt-transcript.sh; outline generated from the transcript.*
