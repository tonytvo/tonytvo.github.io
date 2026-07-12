---
title: "Humans Steer and Agents Execute – Ryan Lopopolo | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Ryan Lopopolo on harness engineering as just-in-time context delivery — the origin story of trying to reproduce himself with Codex CLI, what remains scarce (human time, attention, context window), encoding non-functional requirements as executable guardrails and adversarial reviewer agents, the before/during/after-run phases, the distillation pipeline over steering signals, building a ~1M-line repo without writing the code, and a deep Q&A."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Humans Steer and Agents Execute – Ryan Lopopolo (Talk Outline)

> A **Craft 2026** talk by **Ryan Lopopolo** on **harness engineering** — "a sort of new way of doing software engineering that has kind of burst into the world this year." Origin story: around **June 2025**, when the state-of-the-art model was **o3**, he tried to use the earliest versions of **Codex CLI** to reproduce himself and his own work as a software engineer, starting by getting Codex to tail a Slack alert channel and respond to pages as he would. As the model failed, he positioned himself as **a tool the model could ask for help**, interposing with increasingly heavyweight tools — birthing the pattern where the human is "in the backseat" steering, and "the model can do the full job; it's up to us as software engineers to make that possible at high quality." Structure: models are good enough → what's still scarce → encode non-functional requirements → harness engineering as context delivery (before/during/after the run) → team practices and results → Q&A.

---

## 1. Origin Story of Harness Engineering

### 1.1 The crazy idea: reproduce myself with Codex
- Around **June 2025**, the state-of-the-art model was **o3**.
- He had "the crazy idea" to use the **very earliest versions of Codex CLI** to reproduce himself and some of the things he does as a software engineer.

### 1.2 First task: respond to pages like he would
- The very first thing he tried: get Codex to **tail one of their alert channels in Slack** and **respond to pages** as he would.
- With the much less capable model and harness of the time, the model **simply could not do these things** when asked.

### 1.3 Positioning himself as a tool for the model
- Part of what it means to be a software engineer (for him) is to **write code to give himself tools and leverage** to do the job — so he set about having the model do the same.
- The operating pattern that emerged: ask the model to do part of the SDLC → it fails → **position himself as a tool the model can ask for help** → interpose on those asks with **increasingly complex, heavyweight tools** given to the model.

### 1.4 The birth of the pattern: human in the backseat
- In this mode, he's "**in the backseat**" — the only thing he can do is **steer the model to unblock itself**, much like steering a software engineering team.
- This gave birth to the belief that **the model can do the full job**, and it's up to us as engineers to make that possible at high quality.

---

## 2. The Model Is Good Enough

### 2.1 The agent "singularity"
- The way we build software has changed significantly over the last **6 months**.
- He points to **Opus 4.5** and **GPT-5.2** being released as "the singularity" for agents — the point where models were **more than capable of using tools effectively** to write code and do the jobs of software engineering and code production.

### 2.2 Disruption compounds with every point release
- With each point release, the level of disruption and change **continues over and over**.
- It's not just that how we write software changed — it **continues to change at an ever-increasing rate**, with new capability levels "we kind of haven't seen before in the software era."

### 2.3 Re-evaluate your priors monthly
- If he and his teams are **not re-evaluating their priors every month**, they're often not keeping track of "the most latest magic" the models can do.
- Using these tools effectively means constantly asking: **why haven't I asked the model to do this part of the job? What would it take to have confidence in it? Then build the tools and verification loops** to get it to take on that task.

### 2.4 Models know how to make good software
- The models today are good enough (echoed in the morning keynote and by many others).
- It's not that they haven't seen how to make good software — **they do know how**; it's up to us to find **increasingly novel ways to extract the good parts** out of the model.

### 2.5 Code is now cheap to produce
- A new thing in the world: **code is very free to produce now** — the **production function of code (of diffs) is much, much cheaper** than before.
- This means the **traditional way we tooled our software teams is kind of broken**.
- We can think of code not as the **scarce thing** whose production we protect, but as an **abundant asset** to **remove friction** in the software development pipeline.
- Producing code can increasingly **unblock team members and agents** from making more complex, high-quality, verified changes.

---

## 3. What Is Still Scarce

### 3.1 Human time
- **Human time** is still scarce — the resource around which we historically built our software engineering organizations.
- Planning, backlogs, alignment, and organizational structure all come from the idea that **human synchronous time on the keyboard is scarce** — and it remains scarce.

### 3.2 Attention (human and model)
- The **human's and the model's attention** — their ability to focus on the task at hand and do it at high quality — is scarce.
- In the model architecture, **attention must sum to one** — "an immutable fact that cannot change."
- So we must structure tasks so the model **isn't frazzled with a ton of instructions** and can do the creative work end-to-end.

### 3.3 Context window
- In LLMs, **context window is always a limit** — it keeps increasing but remains a constraint.
- With **auto-compaction** as good as it is, he no longer worries about exhausting context windows.
- But auto-compaction works by **blitting out the current working memory, summarizing it, and continuing** — so we must be aware of **how we delegate work** so it's **robust to the context window constantly changing** over long-horizon work.

### 3.4 Agents have no durable institutional memory
- The thing producing the code **has no durable institutional memory** the way humans did "in the before times."
- You **can't onboard agents effectively** to the codebase — they are **effectively onboarding every time** you give them a task.
- So organizations, teams, and individuals must **write down what it means to do a good job**.

---

## 4. Encode Non-Functional Requirements

### 4.1 Why outcomes vary so widely between engineers
- We see **wide dispersion in success and outcomes** when engineers use these tools.
- Every PR requires **hundreds or thousands of tiny decisions** to encode the **non-functional requirements** of what a good job looks like.
- Some clusters of decisions are more natural to the model than others — but it's not that the model hasn't seen them; it has seen **billions of diffs** with **every possible combination** of non-functional requirements.

### 4.2 Write them down as executable guardrails
- It's up to us to **encode those decisions, write them down in the repository**, turn them into **executable guardrails**, and use **review agents in adversarial review** to **narrow the possibility space** of produced code toward what we've decided "good" looks like.

### 4.3 "Just demand the model not produce slop"
- Pithily: **you can just demand the models not produce slop — if you can articulate what that means.**
- It's easy to look at a PR and say "this is slop," but dive a layer deeper: **why is it slop? What don't I like? How can we avoid those divergences going forward?**
- Articulating that lets you turn to **another agent** to write code or documentation to disallow the misbehavior and **level up the team's capability**.

### 4.4 The code-review analogy (onboarding a new engineer)
- Onboarding a new engineer, you leave **code-review comments** expecting them to **distill the underlying principles** of good software.
- The need to leave the comment exists only because the engineer **lacked that mental model** for a well-formed patch.
- Same mindset applies to agents.

### 4.5 The recurring retry + timeout example
- If he must leave a review comment that a **fetch call is missing a retry and a timeout** (leading to production unreliability), the fix is to **write it down or encode it as a guardrail** given to an **LLM-as-judge** in the review cycle.
- That judge can look at a **static diff**, see the missing retry/timeout, and leave feedback on the PR to **align the implementation agent's output**.
- He "keeps harping on" this example: nearly **everyone in the room has been paged** because of a missing retry and timeout in production — a huge amount of collective human effort wasted on a common maladaptive behavior the industry hasn't eliminated.
- Because code and docs are cheap to produce ("token-generating machines"), we can now **eliminate this locally, bespoke to how we operate**.

### 4.6 Custom linters and linter harnesses
- He loves **custom linters and custom linter harnesses** to encode requirements.
- Take a rule like "**you must have a timeout**," adapt it to your codebase's **AST and modules**, write "vibed terrible code" to **assert the property with exhaustive table-driven tests**, and actually **migrate the whole codebase** to be better.

### 4.7 The codebase itself is prompts
- A non-obvious pattern: **the codebase itself is also prompts.**
- Removing misalignment/divergence across **wide corpuses of code** further aligns output — agents can apply patterns from one area **elsewhere without thinking too hard**.
- **Doing migrations is a very good use of tokens**: it makes the codebase more **predictable** and the **next tokens easier to predict** — a mostly mechanical operation that's **easy to statically verify**.

---

## 5. Harness Engineering = Context Delivery

### 5.1 The definition
- **Harness engineering is context delivery** — increasingly creative ways of **just-in-time delivering context** to the model so it produces code aligned with all the guardrails, expertise, and collective understanding of the team.

### 5.2 Start at the far right (counter to "shift left")
- Unlike DevOps, where we **shift left** ASAP to decrease the cost of a bad change, with LLMs we can **start at the far right** of the spectrum.
- If a PR is bad, the **cheapest fix is to trash it, change the prompt, and re-roll**.
- But that throwaway context **doesn't scale** to teammates or their agents.

### 5.3 Shift left #1 — write it in docs
- Shift left once: **take the feedback and write it down in docs**.
- A "super, super effective" pattern: keep **~15 different docs files** in the repo — "named golden principles" around **reliability, performance, maintainable front-end architecture** — and **append bullets** as a team as mistakes are made.

### 5.4 Shift left #2 — point the agent at the docs up front
- Take the static guardrails and **tell the model up front** to look in those places for common workflows.
- Example: touching **React** code → look at how to write effective JavaScript in the repo, front-end architecture, and the component library.

### 5.5 Shift left #3 — reviewer agents in CI
- Give the static guardrails to **one or many reviewer agents** to judge a diff as proposed.
- This accounts for the fact that the implementation agent's context window and its adherence to guardrails is **stochastic**.
- In **CI** (possibly a **matrix job**), a reviewer looks at the diff for a specific concern (e.g., front-end architecture guardrails) — **reliably injecting guardrails** via a PR review comment, which a **static CI check** requires be responded to, returning to the "golden implementation thread."

### 5.6 Non-functional requirements are wildly divergent
- The requirements you might encode are **wildly divergent** in scope.

---

## 6. Before / During / After the Run

> Three phases of context delivery over the production of a diff.

### 6.1 Before the run — the agents file grounds the change
- The **agents file** is **forcibly injected into agent context by the harness**.
- Tell the agent **where it's working**: what the code does and why, which team it interposes into, **who the customers are**, and their **use cases**.

### 6.2 Before the run — a static operating loop, not a rule list
- Put a **static operating loop** in place to teach the agent **how to go about its work**.
- Never give a **big bulleted list of all the rules** — there's a fundamental tension between **instruction-following and creativity**.
- To exploit reasoning effectively, **let them be creative — "let them cook"**; too many upfront requirements prevents that.

### 6.3 Before the run — classify the work first (monorepo example)
- Teach the model **how**, not **what it must do**.
- Example: a **Node monorepo with a Vite bundler step** — the `agents.md` describes several workflows for common change types and where to find docs.
- The operating loop directive: the agent **must first classify the work** it's asked to do to see which workflow it falls into, then proceed — rather than a ton of upfront steps.

### 6.4 During the run — don't interpose too much
- In the "messy middle" of implementation, don't interpose too much.
- Many **static hooks that fire and block execution** will **thrash the model, smear its attention**, and make it appear **less intelligent than it is**.

### 6.5 During the run — refine via coherent context and error messages
- Refine outputs by making sure all the code the model pulls into context is **coherent and similar**.
- Use what the model **naturally does** — **call tools, run tests** — to **inject error messages** into its output stream.
- Lints should fail with messages saying **what was wrong, why, and where to look for remediation**.
- The model reads those **tool-call outputs at lower priority than user messages**, letting it **locally address the divergence** and carry on.

### 6.6 After the run — validation is the easy job
- After the run there are **no implementation decisions** to make — you have a **proposal/artifact** to judge against **static/executable guardrails and tests** to get it acceptable.

### 6.7 After the run — the model convinces you it's mergeable
- Treat the model's role as **convincing you the code is acceptable to merge** — take it as far as you want.
- He'd never **shoulder-surf all his teammates** to verify their code — no need to treat models that way either.
- To reach **billions of tokens a day and highly parallel usage**, you can't be **blocking on your own ability to monitor** all the output.

### 6.8 After the run — trust artifacts (as from human teammates)
- What he'd want from human teammates to build trust: a **video of a bug reproduction**, **logs from a staging deploy**, or a **screenshot** showing front-end components render and **match the Figma** the designer gave.
- Because code is cheap, you can **use the model to give the model tools** to produce these — easier now with **computer use** and **GPT-5.5**.
- The more instructions you give to teach it a good job, the more complex work it can take on.
- (Aside: a "freak out moment" with his clicker drew audience laughter.)

---

## 7. The Agents File as a Map

### 7.1 A map of guardrails and working style
- The **agents-style MD file** is a **map** — of both the **guardrails** in the repo and **how you want the agent to go about its work**.

### 7.2 Grounding in existing knowledge
- Agents can ground their understanding in **existing features, critical user journeys, historical design docs / ADRs** — if you tell them to and make those accessible.
- Easiest: a **docs folder** in the repo; also **connectors to Linear, Jira, or Google Drive**.

### 7.3 Static personas accrue guardrails cheaply
- A **static set of personas** that accrue guardrails is a **super cheap** way to improve model behavior as a team.

### 7.4 @-mention Codex from a Slack post-mortem
- Often after a **Slack discussion of what went wrong in a PR**, he'll **@-mention Codex at the bottom of the thread**: "update guardrails X, Y, Z with these changes, please."
- He gets back a **diff with three bullet points** — making it easy to improve agent behavior and **align the humans on what good looks like** too.

---

## 8. Compounding Investment: A Team Case

### 8.1 The agent as entry point compounds documentation value
- When the **agent is the entry point** to all work, the more you invest in **documented, reliable work**, the more **everybody benefits**.

### 8.2 The new product-minded hire
- Having a **documentation corpus** feeding reviewer agents in CI paid off when they **hired a new, product-minded engineer**.
- He realized they **lacked documentation on the critical user journeys** and how they related to business logic.

### 8.3 Critical user journeys stack into the pipeline
- Using agents to produce documentation enumerating those journeys **stacked naturally into the review pipeline**.
- The same pipelines now look at a proposed diff, **construct a manual QA plan**, and **require the implementation agent to produce visual artifacts** attesting the critical user journeys still work.
- Result: **more complex changes accepted with fewer human interventions and less review**, and it stacks into **agentic verification loops for weekly deploys** after cutting a release branch.

---

## 9. When to Shift Further Left & the Distillation Pipeline

### 9.1 The trigger to invest more
- Invest effort to shift further left **when static guardrails and docs are not enough** — when **reviewer agents give the same feedback over and over**.

### 9.2 Slurp up all context of "doing work as a team"
- A favorite pattern: **slurp up all the context** of what it means to do work as a team.
- Sources: **all Slack messages, all PRs, all review comments, all agent rollout files and session logs** — **specifically every time a human had to interrupt and steer**.
- Treat all human/agent input as **areas where context was missing** and steering had to be supplied.

### 9.3 Point LLMs at the corpus for suggestions
- Point **one or several LLMs** at this corpus to **suggest how to improve** how the team works with agents.
- **Repeated failure modes** are the base for deciding which **lints** to add, which **tests** are missing, which **migrations** remove confusing business logic.

### 9.4 The `isPlainObject` example
- A concrete example: weirdly named functions like **`isPlainObject`** with "insane type-probe shaping" — "why is this even in my codebase?"
- They **observed humans steering away** from this pattern repeatedly.

### 9.5 Banning untyped types outside two locations
- Solution: **syntax-tree walking** that — apart from two known places (**parsing incoming data from a route handler** and **parsing records from the database**) — **bans `unknown` and other untyped types**.
- This forced Codex to **not have `unknown`s**, which made `isPlainObject`-style functions **unreachable** because code was always typed.
- The "chunky guardrail": you **must use a parser** in those particular locations and can only pass around **validated data**.

### 9.6 The runbook and "parse, don't validate"
- The chunky lints **point to a runbook** in the codebase, continuously refined over weeks, on **how to properly validate data**.
- References the famous blog post **"Parse, don't validate"** and how to remediate this misbehavior.

---

## 10. Reframing the Software Engineer's Role

### 10.1 Increase the team's productivity and autonomy
- Our job as engineers is to **increase the productivity and autonomy** of the people we hire — and we can hold the **same expectation for the model**.
- Models can produce high-quality code — **we should demand it**; if they can't, **give them tools to learn from, heal, and fix their mistakes** and work more autonomously.

### 10.2 The ~1M-line repo they never wrote
- Over **9 months** they built a **~1M-line repo** (a lot of **TypeScript**, a lot of **Markdown**).
- They **didn't write any of the code** and achieved **high velocity without reviewing most of it** — because they got a **representative sample of code review** in place.
- Continuously **fought slop as it accrued**, turning observed misbehaviors into **static verification checks**, then turning attention elsewhere to keep leveling up quality.

### 10.3 Reviewer agents bias toward merge, block P2+
- Reviewer agents in CI look at **every proposed patch on every PR synchronization**, **biasing toward merge** but ensuring **no P2s or above** exist.
- They **never defined what a P2 was**, but this steering let the system **bias toward merging** — preventing the implementation agent from being **"bullied by endless code review"** — while **excising the worst parts**.

### 10.4 Async refactoring loops for P3s and below
- Biasing toward velocity means **P3s and below**, if important, get picked up by **asynchronous refactoring loops** and merged later as **small follow-up PRs**.
- Deferring lower-priority asks **keeps agents focused** on the primary objective (fixing a bug / implementing a feature) rather than micro-refactorings.

### 10.5 Agents vs. humans: defer, don't fix-in-place
- With **humans**, since time is scarce, you'd never return to a spot you noticed while poking in VS Code — so you **do the micro-refactor right there** or it never gets done.
- With **agents**, **writing it down, forking off another agent, or deferring** is more often the correct approach.

### 10.6 Capture steering signals as the highest-quality signal
- **Capture all steering signals** over time — they're the **highest-quality signal of where the system is still underspecified**.
- All human/agent input signals the task was **misspecified/ill-specified** or the agent **couldn't pull context at the right time**.
- **Write them down, distill themes, turn them into executable or written guardrails.**

### 10.7 The vibe-coded distillation pipeline
- These distillation pipelines can be **vibe-coded into existence**.
- Implementation: invoked **Codex via an npm run script** wrapping the CLI, then **trolled the session log** to **slurp all agent and sub-agent JSONL files** and **"yeeted them into blob storage"** — valuable to spider through with LLMs.

### 10.8 The closing thesis
- The software engineer's role now: **imagine any guardrail, any quality-production signal, any tool** and bring it into existence **just by a prompt**.
- Use those prompts to **remove the need for your attention** on the agents — give them powerful vibed tools so your need to focus on quality/productivity in those parts **vanishes**.
- Closing line: "**you can just build things**" — hoping to get everyone up to being **"token billionaires."**

---

## 11. Q&A

### 11.1 Q1 — How do you keep multiple documents aligned (not pointing in opposite directions)?
- Two things. First, **each model release changes instruction-following behavior**, so they constantly figure out whether rules must be **adapted, removed, collapsed, or reworded**.
- Concrete example: from **GPT-5.3 to 5.4**, their docs on **local validation/testing before a PR** regressed — sometimes the agent gets stuck and he wants it to **put up a PR so he can help**.
- **5.3** read "local build must pass" as **metaphorical shift-left guidance**; **5.4** followed it **very tightly** and **refused to push a PR** with a failing build.
- They had to **caveat the docs**, adding color that **tests still run in CI** and it's **okay to push if the build isn't passing**.
- They spend **~1–2 weeks after each model release** observing whether agents **thrash over documentation** and resolving ambiguities.
- Second: a **large outer-loop agent runs once a day in CI**, forks off sub-agents, **reviews docs for conflicts/obsolescence**, and **proposes fix PRs** — using the **codebase as ground truth** against the docs.

### 11.2 Q2 — How does putting docs/decisions/constraints in context scale given a finite context window?
- (Top-upvoted question.) He **doesn't advocate putting them in context at all**.
- Keep the **agent file slim** — the thing forcibly injected by the CLIs.
- Instead, **document the shape of the documentation corpus**: what lives there, when to consult an **ADR vs. design-system reference docs**, when to review historical design docs to ground design.
- They "cheat" with a **well-defined tree structure** in the filesystem, but otherwise want the agent to **stochastically discover** it while implementing.
- Necessary because **auto-compaction removes it from context anyway** over a long session — so the operating loop must **continually re-page** stuff back in.
- For things that **absolutely must be adhered to**, use the **review agents**: one context window looks at the proposed diff plus the static guardrails and makes a yes/no determination.

### 11.3 Q3 — How do you make sure steering signals aren't overwhelming for Codex?
- A lot of **trial and error**.
- If he finds himself **interrupting and steering a bunch**, he's probably in **unrecoverable territory** — likely **misspecified the task upfront**, and is now fighting his own **high-signal initial instructions**.
- Still, **drive the session to completion** to put up a PR (even to throw away), so he can **interrogate himself or another Codex** on what went wrong and how to change the prompt.
- Maybe there's **pre-work**: decompose into several tickets, or add **app infrastructure** to make the change easier.
- **Being willing to throw code away** is much easier now that it's cheap; **knowing when NOT to merge is just as important** as merging as much as possible.

### 11.4 Q4 — How much human reviewing still happens, and will it change?
- (First question with two thumbs — the "human review" one.)
- The "**Twitter version**" of the technique — "we don't look at code at all" — is **not true**.
- Two categories of changes:
  - **Headless** changes (crons/background jobs kicking off agents to produce PRs) **require a human review** — not necessarily detailed, aimed at finding **missing guardrails** to take on.
  - PRs produced by **agents on his own computer** (whether 1 or 5 at a time) — a **review from just the person whose name is on the PR** is sufficient.
- One exception: if a change is **complex enough to warrant a plan** (typically ~**a week's worth of human engineering time**), they structure it to **first produce a plan and milestones** as the only thing in the initial PR, and require **two humans to sign off** on it.
- Reason: **the plan is the instruction set** given to the model — if it's not read closely with misalignment shaken out, you're **wasting time at implementation** fighting bad instructions.

---

## People & References Cited

- **Ryan Lopopolo** — speaker.
- **Models/tools named:** OpenAI o3 (June 2025 SOTA), Codex CLI / Codex, Anthropic **Opus 4.5**, GPT-5.2, GPT-5.3, GPT-5.4, GPT-5.5 (with computer use).
- **Technologies:** Slack (alert channels, `@`-mention Codex), Node monorepo, Vite, React/JavaScript, TypeScript, Markdown, Figma, Linear, Jira, Google Drive (connectors), npm run scripts, blob storage, JSONL session logs, custom linters / AST walking, CI matrix jobs.
- **Concepts:** harness engineering; context delivery; human-in-the-backseat steering; the agent "singularity"; re-evaluating priors monthly; code as an abundant asset (cheap diff production); scarce resources (human time, attention "must sum to one," context window); auto-compaction; agents lacking durable institutional memory (re-onboarding every task); non-functional requirements; "demand no slop"; LLM-as-judge / adversarial reviewer agents; the retry+timeout paging example; custom linter harnesses; "the codebase itself is prompts"; migrations as good token use; shift-left vs. "start at the far right"; 15 "golden principles" docs files; slim `agents.md`; static operating loop ("classify the work first," "let them cook"); avoiding blocking hooks that thrash attention; error-message injection via tool calls; trust artifacts (bug-repro video, staging logs, Figma screenshots); computer use; agents-file as a map; critical user journeys; manual QA plans + visual artifacts; distillation pipeline over steering signals; the `isPlainObject` / banning `unknown` example; **"Parse, don't validate"** blog post; P2/P3 triage; bias toward merge; async refactoring loops; two-human sign-off on plans; "token billionaires"; "you can just build things."

---

*Video: https://www.youtube.com/watch?v=ORObF5UuBew — Transcript via yt-transcript.sh; outline generated from the transcript.*
