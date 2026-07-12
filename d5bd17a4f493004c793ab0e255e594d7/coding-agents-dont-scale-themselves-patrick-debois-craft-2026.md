---
title: "Coding Agents Don't Scale Themselves – Patrick Debois | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Patrick Debois (the 'father of DevOps') on 'what if context was more like code?' — a full context development life cycle (generate, test/lint/eval/security-scan, package/version/registry, distribute, observe, feedback) — plus enabling agents across four layers (developer, team, platform, organization), the 'build the thing that builds the thing' mindset, and context drift/rot/authority as unsolved problems."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Coding Agents Don't Scale Themselves – Patrick Debois (Talk Outline)

> A Craft 2026 (second-day afternoon) talk by **Patrick Debois** — known for sparking DevOps in 2009 with "what if ops was more like dev?" His new framing: **"what if context was more like code?"** — i.e., put engineering practices around context. The talk has two big parts: **(1)** a **Context Development Life Cycle** (an infinity loop mirroring the SDLC), and **(2)** **four layers of enablement** for scaling coding agents — developer, team, platform, and organization — plus a section on the still-**unsolved problems** (context drift, context rot, authority/conflict). He references his company **Tessl** and its tooling throughout, closes with a request for stories and slides "only if you give me feedback (I love bad feedback)," and takes an unplanned Q&A.

---

## 1. Framing: Context Is the New Code

### 1.1 The origin parallel
- In 2009 Debois asked "what if ops was more like dev?" → led to **DevOps**.
- He thinks in parallels; now the question is **"what if context was more like code?"**

### 1.2 The audience-poll setup
- "Who has used prompting?" — everybody (don't bother raising hands).
- "Who's using skills in some form?" — a good number.
- "Who's familiar with evals?" — only a few.

### 1.3 The problem with today's practice
- Current context work feels like "I think this looks good to me, let's do it that way" — not structured engineering.
- Goal: make it **more structured** — what does a **Context Development Life Cycle** look like versus a software development life cycle?

---

## 2. The Context Development Life Cycle (the Infinity Loop)

### 2.1 Why an infinity diagram
- Everything in DevOps is an infinity diagram; context is also a loop.
- Loop stages: **generate** context (daily) → skip testing (as devs do) → **evaluate** → **distribute** to teams → **observe** it "in the wild" when people complain on Slack that it doesn't work.

### 2.2 The AI-reordered-slide anecdote
- A previous slide version: AI **reordered** the loop and he got "slack on the internet" for vibe-coding his diagram.
- But AI put **generate before distribute** — which is what most of humanity actually does — so "the AI was smarter than me."

---

## 3. Phase — Generate Context

### 3.1 Human prompting
- The context you put in yourself.

### 3.2 Documentation tools
- Tools like **Context7** and **ref** take documentation and **massage it** for use in a coding agent.

### 3.3 Integrations as context
- **Slack, Jira, GitHub issues** — all sources of context you generate/type.

### 3.4 AGENTS.md as an emerging standard
- **AGENTS.md** was "probably one of the first standards" — instead of every tool solving it alone, everyone uses the same file.
- Analogy: standardizing on an **S3 bucket format or API**.

### 3.5 Spec-driven development
- A form of "clever prompting" — some people write **ADRs up front**.
- The format doesn't matter; the point is everyone is **generating prompts** as the first phase — without it, nothing gets into the agent.

---

## 4. Phase — Test Context

### 4.1 The naive approach
- Write some context, add two lines to your AGENTS.md, type, and see if it reacts.

### 4.2 Linting context
- A **skill** has a front-matter block: the description can only be a certain length, has specific items/fields.
- Checking that is **linting** — syntax/format checks in the new format.

### 4.3 Evals (LLM-as-judge → agent-as-judge)
- To beat AI, use more AI: one AI generates, another judges.
- Started as **LLM-as-a-judge**; now the judge is a **full agent** (memory, repeated loops, verification).
- Toy example: a CLAUDE.md rule "every API endpoint must include the word **awesome**"; ask another LLM to generate an API and check "awesome" is present.
- Could be done with regex — kept simple deliberately; more elaborate testing exists.
- This builds a **test suite for context** so new additions don't break previously handled cases.

### 4.4 Security scanning (post-"Open Claw")
- After "Open Claw," people worried about **prompt injection** and scripts executing → need **context security scanners** as another test.

### 4.5 Cross-agent compatibility testing
- If you provide a **skill library** to an org, users run **Gemini, OpenAI**, etc. — you must ensure **compatibility**.
- Like end-to-end library testing: can I run my tests **with different agents**?
- Distinct from LLM-as-judge: here you ask the **coding agent itself** to generate the code and check it works — maybe your CLAUDE.md/AGENTS.md works better for **Codex** than another.
- Library providers need this **compatibility testing**.

### 4.6 Cost / efficiency (non-functionals)
- Beyond "can it solve it," measure **how many turns** the agent takes → **costs, efficiency** — the "non-functionals" for context.

### 4.7 The takeaway
- Do this instead of "adding two lines and hoping" — "tomorrow you're going to write your first test."

---

## 5. Phase — Package & Distribute Context

### 5.1 Skills as packages
- Shared code = a **library / package**; a **skill** in simple form is "a package of context."
- Plugins have scripts; skills have hooks; plugins have rules → it becomes the **coding package**, a new entity.

### 5.2 Semantic versioning
- As with packages, use **semantic versioning** so updates are tracked (old vs. new package).

### 5.3 Package managers (APM)
- Package managers like **APM** install pieces of context/skills/plugins **neutrally across teams**.
- People often share via a repo, then hit problems: what about the next project? git submodules? outside access? → think **package manager** for distributed context.

### 5.4 Mandatory packages
- Companies want **every developer** to have a mandatory set: latest React for front-end, latest platform deploy rules, latest **PII/security guidelines** → **mandatory packages**.

### 5.5 Marketplaces / registries
- Pull mandatory packages from a **marketplace / registry** — like **NPM registry, NuGet**; such tools are emerging.

### 5.6 Provenance / bill of materials
- As with libraries on GitHub (what does it do? who's the author? can I trust it?), you need a **bill of materials** for context: how was it generated? by whom? was it tested? security-scanned? → **provenance**.

---

## 6. Phase — Observe & Feedback

### 6.1 "Is it working in production?"
- Publishing/distributing context is "like deploying to production" — how do you know it works?

### 6.2 Agent-log analysis (Tessl)
- The tool at **Tessl** looks at **all agent logs across all runs and developers** using a skill.
- Analyze where the agent said "I don't know what to do" or the developer said "no, do it differently."
- Missing context that repeatedly confuses agents → write that context, test, distribute → **everybody gets better context** (a feedback loop).

### 6.3 PR-review feedback
- Look at whether the generated code got **comments on PR reviews** — another feedback signal to improve the skill.

### 6.4 Harness sensors
- The more **harness** around things, the more **sensors** for feedback — e.g., "every time linting failed when I used that skill."

### 6.5 Security signals
- Attempts to **escape the sandbox** or use an **unknown API** are signals too.

---

## 7. Unsolved / Recurring Problems

### 7.1 Context dependency problems
- Old problems return in a new form factor — e.g., **context dependency** issues.

### 7.2 Context drift
- Terminology changes with your team over time; published context must keep the **same meaning** → beware **context drift**.

### 7.3 Context rot
- A rule like "in React, do it like this" may become redundant once the **model already knows it** → remove no-longer-valid rules → **context rot**.

### 7.4 Authority / conflict resolution (human territory)
- **Who has final say on context?** Who overrides whose rules — architect vs. developer vs. team?
- This is **politics** and remains **unsolved**; tests can't fix it.

---

## 8. Solo vs. Sharing: The Compounding Effect

### 8.1 Beyond solo play
- Solo dev makes their own skills/harness — fine, but log analysis lets you look **across teams / the whole org**.
- Fixing context for one team can help another → **compounding effect** of context.
- Don't limit yourself to "work more efficiently"; **share** so the whole org benefits — like open source, the more shared, the more hardened.

### 8.2 Fork vs. trust
- People publish to a registry, dislike others' versions, and **fork** (like code).
- They may like one skill but it **has no tests** → different behavior each time → **trust factor**.
- Hardening at one point benefits everyone; doing everything yourself forfeits the compounding effect.

### 8.3 "Build the thing that builds the thing"
- Your new job: **build the thing that builds the thing**, not build the code.
- **Context is the new code**; the **harness is like the compiler** that makes it executable and good — both equally important.
- Your new role reviews code, but there's still real engineering on those pieces; teams **reinvent it daily** — understandable in a learning phase, but the end state should be **reusable libraries**.

---

## 9. Four Layers of Enablement (Overview)

### 9.1 The generic transformation everyone does
- Prediction of how AI transformations went: "We need to do something about AI" → **hackathon**, **champions**, a **channel**, "give people time to experiment" — all generic.
- He wants **concrete stories** of what people explicitly do to make context and harness better.

### 9.2 The guiding principle
- Other speakers reassure that architecture and social thinking still matter — just reframed.
- Key mantra: **"what is good for agents is good for humans, and what's good for humans is good for agents."**
- He explains enablement at four layers: **developer, team, platform, organization**.

---

## 10. Layer 1 — Developer (Enable the Agents)

### 10.1 The AI product engineer
- New role: **AI product engineer** — at Lovable, "80% of an engineer's time should be listening to customers."
- It's **building the right thing**, not building the thing right. (If you signed up for code, work on harnesses instead.)

### 10.2 The forward-deployed engineer
- Another new term — **forward-deployed engineer** (like a "field CTO" rebrand) — same idea: **seek customer feedback**.

### 10.3 The one mindset shift
- If an agent goes wrong, **don't fix the code** — **change the context, change the harness**, and have it produce the right code.
- Your job is to **change the system, not the code**.

### 10.4 What "good" looks like — the Claude evolution
- **Generate code** ("look how cool").
- Add a **planning phase** — breaking down the big requirements prompt, now inside the tool.
- Add **tests** — split so one agent writes code and another does testing (dedupe the process).
- Add **documentation** — developers who never documented for themselves now **write docs for the agents**; they write tests and plan better **because of agents** — "it's insane" — like becoming the manager and finally understanding the value.

### 10.5 Observability so the agent learns
- Make the system **observable** so the agent can **learn from itself** — same reason as tests: it sees what it produced and learns when it runs.

### 10.6 The developer job mentality
- Build **reusable components**; feed **every bad signal** back; **change the system**; make **smaller tasks**; **measure** how often you had to **intervene** and whether that's going down.

### 10.7 Why it's hard today
- Everybody builds their own context and their own harness — "in our company we have **seven harnesses**. Why? I don't know."
- Tooling hasn't caught up (versioning etc.) → a "free-fall" state, but push the mentality anyway.
- Give agents the **right permissions, not all permissions** — "**No YOLO, please**," or at least in the **sandbox**.

### 10.8 DevOps lesson — DRY
- Don't repeat yourself: every time you intervene, ask **how can I change the system?**
- (Not about exploratory learning — but when it does something it shouldn't, fix the system.)

---

## 11. Layer 2 — Team (Enable Humans + Agents)

### 11.1 The new team-lead job
- Help **both humans and agents** — remove blockers on **data access, permissions**, etc.
- Not treating agents as humans, but **enabling two identities** (machines doing work, humans doing the job).
- Team leads (used to owning microservice uptime) are now **responsible for agent performance** — driving humans and agents together.

### 11.2 Good agent habits = good team habits
- Specify **goals correctly** (or it does the wrong thing).
- Give **fast feedback** (or it runs a whole day and returns the wrong thing).
- **Share context** — one agent writes back to a shared place, others learn.
- **Restrict** sensibly — no surprises, but not over-restricted.

### 11.3 Pair context writing
- Like pair programming: **pair context writing** — you chat more about how things work and should work.

### 11.4 Definition of done for agents
- Have a **definition of done** for agents, not just the team → track how fast/good they are → **agent performance as a team metric**.

### 11.5 Retros for agents
- Teams now run retros about **what worked well for the agent** and how to improve the system next sprint.

### 11.6 Shared Kanban/Scrum board dynamic
- Using one board for humans and agents: **poorly-scoped items stay with humans**; **well-scoped items go straight to agents** — scoping is the differentiator.
- **Quality metrics** become part of your **velocity** to measure.

### 11.7 Different skill: coding vs. context
- A person good at writing code may not be good at writing context.
- Trick: have the **AI-skeptic** write down what's not good and how to improve it — like workshops.

### 11.8 On losing the "coding rockstar" identity
- Fear that all your knowledge is being drained into the system.
- Debois always worked to make himself **redundant**, and something new/more interesting emerges.
- Every new technology sparks "will it kill our craft?" — reality: it **changes** the craft and makes it **more complex** → need more **system thinkers** (like DevOps SREs managing 100 machines, not one).
- Shift from current throughput to running **~15 experiments in the background** and choosing among them.

### 11.9 Shared ownership → agent owners
- Who owns a piece of context? Make ownership explicit — **not code owners, but agent owners** — including what you must report on an agent/pipeline.
- Think of agents as **team members** you must **nurture** (not in the human sense, but it's your responsibility).

---

## 12. Layer 3 — Platform (Enable the Whole)

### 12.1 The AI product platform engineer
- A (predicted) role that **builds for the team that builds the thing that builds the thing** — **optimizing the whole**.
- They put **shared components** in reusable form and **radiate** them out, balancing cost/productivity.
- New part: feed **learnings from all agents on all projects back into all the others**.

### 12.2 Shared platform components
- Provide as infrastructure: **skills registry, eval system, testing** — devs shouldn't reinvent their own.

### 12.3 Agent-usable, not just human-usable
- Components must be **agent-usable** — can an agent find the right skill **from the description** without a human?

### 12.4 Self-serve, best practices, monitoring, guardrails (sounds like cloud)
- **Self-serve**; collect best practices; **monitor**; put **guardrails** — same needs as cloud, now for agents.
- Centrally pull the **best reviewing agent**, or a **domain-expert agent** (e.g., authentication).

### 12.5 Distributing best practices that stick
- As a former **VP Engineering**, he hated **nagging** people about best practices (and might've been wrong).
- Distributing best practices **through the agents** gives them a much better chance to be learned/adopted — like documentation, useful docs get used and improved.

### 12.6 Standard monitoring & guardrails
- Provide **agent monitoring** (like machine monitoring) and standard **guardrails, sandboxes, prompts, proxies** so people don't build their own.
- Same components used in **AI products** are now arriving for the **AI coding infrastructure/fabric**: registries, gateways, eval platforms, ownership.

### 12.7 Ownership and routing
- "We have **700 GitHub repos** — who's the owner?" Only owned things get improved.
- Route recurring failures (e.g., authentication) to the responsible team.

### 12.8 Make evals/tests snappy (gradations)
- Evals/tests feel like a burden → make them **fast** (not "when I have time after the project").
- Gradation like testing: **fast unit tests → judgment testing of priority functionality → more in a bigger release pipeline**.

### 12.9 Skill rot → nightly tests
- Skills rot → keep them updated with **nightly tests / running reports** to catch vulnerabilities.

### 12.10 The company context owner (open question)
- Who's responsible for pulling context together? AI team? Platform team? DevEx team? — all good at tools, but **who has end responsibility, the program, the budget**?

### 12.11 "You're special, but your pipeline is not"
- Early cloud: "I can recompile the kernel" — nobody cares anymore.
- Let go of over-tuning; **good enough that passes** is fine.

### 12.12 Prediction — harnesses move to the platform team
- Most pipelines/harnesses become **reusable platform components**; not every team builds its own.
- Maybe **configurable**, perhaps one per language for big companies — more a **configurable tool** than hand-built harnesses.

### 12.13 The career choice
- Choose: go deep on **platform/harness engineering** (pipelines, hardening) or go deep on **expressing context** (product, specifying what it should do).
- Not binary — understand both for best results, but they diverge technically vs. product-wise.

---

## 13. Layer 4 — Organization (VP Level)

### 13.1 Build the org that builds for the team that builds the thing
- VPs are "at a loss": "we gave them all the tools... they're blowing through our budget... I have no way of controlling this."
- Shift from **hiring engineers to ship reliably** to being an **enabler of the system of systems**.

### 13.2 Secure cross-team data access
- Some data was human-restricted; VPs must decide **how to give the agent that information securely** — teams hit **friction**, and the VP's job is to **unblock**.

### 13.3 Ownership from the top
- Someone **drives the program** from the top.

### 13.4 Aligned incentives — reusability
- Not only productivity, but **how reusable is this?** — reframes the whole company around **reusable context**.

### 13.5 Tests, regression, swap-ability, cost
- Need **tests and regression**; ability to **swap things in/out quickly**; **show the cost**.
- "We gave everybody Copilot" means you're **already behind**; they invested in tools but not necessarily in **context and harness**.

### 13.6 Governance (the nagging, made mandatory)
- Mandatory checks: did you do it **in a sandbox**? standard? RPI/required things installed?
- If you just hand out tools without caring, governance "will never happen."

### 13.7 KPIs — pipeline of pipelines
- See the **pipeline of pipelines** and throughput across them.
- Most think KPIs measure job quality; the VP's real question is **"what do I need to do to unblock an underperforming team?"** — training? bring in the enablement team? — that's the investment.

### 13.8 Defending it to the CFO
- With **token prices rising**, VPs struggle to defend spend and rely on **trust that it'll get better**.
- There's a **window** (maybe a year) before the CFO asks "where are the results?" — quick wins help, but the investment is **long-term**, not a one-shot migration.

### 13.9 No playbook → continuous learning
- There's **no playbook** — hence his push for stories.
- The VP's focus: after CI/CD, ask **how fast are our agents learning? our people? how fast can we swap things in/out to stay competitive?**

### 13.10 The "new kids" experiment
- Debois is experimenting with agents to find **signals of new industry practices** — hard because it's easy to see what everyone does, not what the "new kids" do; he's putting it on a website and asking for stories/feedback (find him on **LinkedIn**; slides available **only if you give feedback**, "I love more bad").

---

## 14. Q&A

### 14.1 Q1 — What production data makes sense to feed back to the agent? An example?
- If your production system has recurring issues (e.g., **timeouts**) visible in monitoring, and you have a **skill** saying "timeouts are handled like this" yet you still see issues — that's the data to look for.
- You **enforced** something meant to improve it, but production reality didn't improve → investigate **where in the pipeline/harness** it wasn't caught.

### 14.2 Q2 — What new roles, feedback loops, or team habits become necessary moving from developers-using-tools to teams-with-autonomous-agents?
- Addressed in the talk: **retros (for agents)**, looking at **observability logs**, **context writing**.

### 14.3 Q3 — Is this only about SDLC/engineering, or is all knowledge work changing?
- Analogy to CI/CD: a junior could push to main — would you trust them? Only if the **test harness is good enough** ("what is good enough?").
- You may not stop everything via the test suite; consider **architectural changes** (easy rollback, rolling out to specific pieces).
- People contribute, but you gate with a **context test suite** (not just "does the code pass").

### 14.4 Q4 — Which job frameworks/estimation (Scrum, Kanban, SAFe) make sense with agent networks?
- Estimation internally is now often "**just do it**" — like moving Scrum → Kanban: pick the most important thing and ship it, don't wait for a sprint.
- **Time windows are shrinking**: a "month" list comes back done in **2 weeks**; agents say "5 hours" then finish in **20 minutes** ("ridiculous estimations").
- But more harnesses add **scrutiny** and can slow things down.

### 14.5 Q5 — Any agent testing frameworks or best practices as starting points?
- His company (**Tessl**) is building a **test framework specifically for coding agents**.
- Many generic-agent testing frameworks and data evals exist and can theoretically be used, but you'd have to set up your own **coding-agent sandboxing and evals automation** — he hasn't found much else.

### 14.6 Q6 — Does it scale to make the same mandatory agent skill set/tools for all teams, or is it very specific?
- Biggest problem is **testing/maintenance**: "we tried yours, good for a month, then it broke, so we built our own."
- Like any shared library, you must **keep it up to date and listen to your customers**.
- It does scale: **broadly-adopted skills** plus **niche skills**.
- Use **private registries** within the company (not just the public registry) for more quality control.

---

## People & References Cited

- **Patrick Debois** — speaker; sparked DevOps (2009); former VP Engineering; works at **Tessl**; findable on **LinkedIn**.
- **Companies/products:** Tessl (agent-log analysis, coding-agent test framework), Lovable ("80% listening to customers"), Anthropic/Claude (CLAUDE.md, the "Claude evolution" of code→plan→test→docs), OpenAI/Codex, Gemini, GitHub Copilot.
- **Tools/standards:** AGENTS.md, Context7, ref, APM (package manager for context), NPM registry, NuGet, S3 (format analogy), Slack, Jira, GitHub issues, "Open Claw" (prompt-injection/security context).
- **Concepts:** context-as-code / Context Development Life Cycle (generate → test → package/version → distribute → observe → feedback); linting context; evals (LLM-as-judge → agent-as-judge); context security scanners; cross-agent compatibility testing; cost/turn non-functionals; skills/plugins/hooks as packages; semantic versioning; registries/marketplaces; provenance / bill of materials for context; context drift; context rot; authority/conflict resolution; compounding effect of shared context; fork-vs-trust; "build the thing that builds the thing"; harness-as-compiler; four enablement layers (developer/team/platform/organization); AI product engineer; forward-deployed engineer; "change the system, not the code"; pair context writing; definition of done for agents; agent performance as a team metric; agent owners; agent-usable components; self-serve platform; nightly tests / skill rot; pipeline of pipelines; "No YOLO"; DRY; "you're special, but your pipeline is not."

---

*Video: https://www.youtube.com/watch?v=6zlkwMzY2UE — Transcript via yt-transcript.sh; outline generated from the transcript.*
