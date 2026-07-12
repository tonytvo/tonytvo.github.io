---
title: "Tools for Certainty, Claws for Discovery – Aaron Erickson | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Aaron Erickson (NVIDIA) traces the arc from a failed AI reorg startup and 2024's 'Lollipop' agent hierarchy to shipping NeMo Claw in a weekend — the agent archetypes, the tools-guardrails-feedback-taste formula, 'jail for agents' sandboxing, why memory makes agents the first software that improves with use, the AI-generated-code security discipline, and the Nemotron-3 Ultra open-source model."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Tools for Certainty, Claws for Discovery – Aaron Erickson (Talk Outline)

> A Craft 2026 conference talk by **Aaron Erickson** (NVIDIA), a solo storytelling-style keynote tracing a personal journey: from a failed AI org-design startup, through 2024's "Lollipop" multi-agent demo shown to Jensen Huang, to the "Cambrian explosion" of internal NVIDIA agent tools, to shipping **NeMo Claw** over a single weekend, and finally to the engineering discipline and open-source model (Nemotron-3 Ultra) behind it. Structure: origin story and agent archetypes → what makes agents actually work → the internal tooling explosion → the weekend NeMo Claw launch → sandboxing as "jail for agents" → memory as the differentiator → PR/security discipline → Nemotron-3 Ultra → a closing on curiosity. No formal Q&A; the talk closes with an open invitation to contribute.

---

## 1. Opening: AI at Cocktail Parties

### 1.1 The social-repellent joke
- He learned at a cocktail party that mentioning AI now makes everybody "flee your general area."
- His wife's rule: he's only allowed to talk about AI at conferences he attends — "and even then, think about it."

---

## 2. Origin Story: The AI Reorg Startup

### 2.1 The startup premise
- About 3 years ago he had a startup doing **organizational design** — org charts, middle management, performance management.
- When AI arrived, the Silicon Valley funding playbook was "add AI to our product," so he tried.

### 2.2 First contact with agents: GPT-4 plugins
- His first agent experience was **ChatGPT plugins, version 4** ("nobody remembers that?").
- Idea: do **reorgs** using AI — "a terrible idea… I'm here to do the terrible ideas so you don't have to."

### 2.3 It kind of worked
- He'd type prompts like "people are flattening their orgs, prioritize engineering," and it produced a reasonable plan for removing middle management.
- It was an **unverified plugin** he was just testing.
- His revelation: "you can let these things write code on their own and they do things… I wonder what else we can make it do."

### 2.4 The reorg-email observation
- It could generate a flattened org, taking moves like "lay off this person" or "move this person to this team."
- Joke: reorg emails always looked AI-written even before AI — "the perfect application of AI is writing something nobody will ever read."

### 2.5 The startup failed
- "We did not become the future of HR."
- Punchline: "you have no fear of being laid off by a robot — you'll be laid off by a consultant instead." He "laid myself off."

---

## 3. Landing at NVIDIA: The Same Problem, Different Nouns

### 3.1 The isomorphism
- His new problem managing GPUs mapped onto his old org-design problem.
- **Idle GPU clusters** ≈ open positions / blank boxes in an org chart.
- **AI training jobs** ≈ employees.
- Both arranged in complex hierarchies needing **performance management** — are GPUs running too hot, wattage fluctuations, observability.

---

## 4. Lollipop: The 2024 Agent Hierarchy

### 4.1 The name
- They built a system called **"Lollipop."**
- Naming logic: **O11Y** (observability) → "Ollie," a **"pop"** at the end, and **"LL"** because Llama was all the rage.
- "That's why I'm no longer allowed to name things at NVIDIA."

### 4.2 The agent hierarchy (2024)
- A hierarchy of specialized agents; he "was using the term agent a little before it was cool."

### 4.3 Retrieval agent
- Its entire job: know how to **query a database**.

### 4.4 Analyst agent
- Its entire job: know **what good questions to ask** of the database.

### 4.5 Action agent
- Figures out **what tool to call**.

### 4.6 Task agent
- Goes and **does the tool call**.

### 4.7 Orchestrator agent
- Wraps the others, running an **OODA loop** (observe, orient, decide, act).

### 4.8 The Jensen Huang moment
- They wrote a paper; it "did some numbers" internally; he showed it to **Jensen Huang**.
- Jensen said: **"Go make it work"** — "because it definitely didn't work at the time."
- Why it didn't work: AI wasn't good enough, tool calls weren't consistent, models couldn't do reliable instruction-calling over long horizons.
- "But man, was it a cool demo."

---

## 5. Agent Archetypes (Like Design Patterns)

### 5.1 The framing
- He began thinking about **agent patterns** the way we think about enterprise-architecture and design patterns.

### 5.2 The worker agent (The Big Short)
- Reference: a scene in **The Big Short** where the boss says don't just find the top-selling mortgage bonds — "look at each one in detail… rigorous analysis… come back with three or four good ideas."
- Pattern: look at **every single** GPU cluster / transaction / "noun" and do intern-level analysis that surfaces something rote analysis wouldn't.
- Objection handled: it isn't right all the time — but "your bar isn't perfection, your bar is better than the dumb human looking at the 999th report," which isn't hard to beat.

### 5.3 The ruminative agent
- An agent that **thinks a long time**, accumulates and codifies interesting/unusual patterns in data that are hard for an individual to see.

### 5.4 The middle-manager agent
- Replaces the boss who "largely takes the report you write, translates it into a report for their VP," adds bold and words like "value creation."
- "Meta does this now… lots of companies." Then everyone can report to the VP directly.

### 5.5 The consultant / observer agent
- Watches the **information flow** between agents and looks for patterns/optimizations to improve the overall multi-agent system.
- These 2024 "make-believe" ideas "became very real by the end of last year."

---

## 6. What Makes Agents Actually Work

### 6.1 Don't count R's in your head — use a tool
- The LinkedIn "how many R's in strawberry" trick question is a tokenizer artifact.
- Fix that has **worked since GPT-4**: system-prompt it to "use Python / a calculator, do a tool call."
- Analogy: nobody does long division in their head — "we use calculators."

### 6.2 Guardrails (the airline-upgrade lesson)
- Don't give a customer-service AI "unlimited money."
- Reference: an airline (maybe Delta) whose first service bot was **prompt-engineered into giving free upgrades**.
- Guardrails prevent a "$5,000 refund for your Ryanair ticket you bought for $79."

### 6.3 Govern with humans who have judgment
- Humans in this room understand patterns the machine hasn't seen and likely never will.

### 6.4 Run books for routine operations
- On-call incident example: "Oh, it's DNS again."
- Don't reinvent **how to fix Kubernetes** every incident — give the AI a **run book / tool**, and it does really well.

### 6.5 The formula
- Most effective AI agents = **useful tools + effective guardrails + good feedback loops + people with taste and judgment.**

---

## 7. Faith That Agents Work

### 7.1 The Waymo faith-builder
- When people said "AI agents don't work," he'd ride a **Waymo** in San Francisco — "a ghost that drives your car."
- Waymos are **safer and more reliable than human drivers** — "with enough training, agents can do quite well."
- Inference: if we can build a car safer than a human driver, we can build an AI safer than a human accountant *at the task* — the accountant still counts, but AI makes them more powerful.

### 7.2 The inflection point (Nov 2025 / Opus)
- The moment AI became usable "for real": **November? Opus 4.5?** or **January, Opus 4.6**.
- Even skeptics in his professional circle found code generation "too incredibly useful to ignore" around January.
- "Agents got good. Post-training worked. Reinforcement learning… turned out it worked."

---

## 8. The Vibe-Doctoring Detour

### 8.1 The medical-diagnostics startup
- His team took a Lollipop-style system to a startup doing **medical diagnostics** for doctors' offices.

### 8.2 The terrifying realization
- Doctors get ~**10 minutes** to read your entire medical record and diagnose whether you have lupus or another rare disease.
- "Almost every doctor in the world is **vibe doctoring**" — not because they're bad, but because they lack time to do the inference.
- Insight: a **tool** can help do that pattern-matching inference.

---

## 9. The Cambrian Explosion of Internal Tools

### 9.1 CLIs over Microsoft Graph
- His team built a bunch of little tools; the first six or seven were just **Microsoft Graph API** wrapped in a CLI ("for hashtag reasons").

### 9.2 The internal tool zoo
- A **bug system**.
- **Helios** — reads your org chart; "I accidentally built OrgSpace from my startup from first principles by giving Claude Code access to our org chart" — now he can ask it what the reorg will be.
- A way to read **Confluence**.
- **IT self-service**: ask Claude Code for a **VM** or a **DNS entry** and get one — replacing "a day of filing tickets."

### 9.3 Executives discover the system
- In January, NVIDIA executives found the system — "I'm either going to get fired… or it's going to go really well."

### 9.4 His background
- Started with a **TRS-80 in 1980** as an eager 7-year-old, typing long BASIC programs from **Byte magazine** to play video games for free.

### 9.5 The magical app: Claude Code against your inbox
- After 40+ years of software, he'd never had someone say "I have tears of joy for the software you wrote" — until **Claude Code against your inbox.**
- People didn't want Outlook and its buttons — just a terminal to ask "which of these emails should I read? which are important? are they related to my bug tracker / Jira?"
- Gratifying result: of 100 daily emails, "you can just **ignore 90 of them automatically**" — people "would almost cry."
- Workflows created a **Cambrian explosion** propagating across all of NVIDIA.

---

## 10. Shipping NeMo Claw in a Weekend

### 10.1 The Saturday call
- On a Saturday (before GTC keynote, ~March 16–18) — he was about to play a game called **Crimson Desert**.
- A colleague, a big cheerleader of their "unauthorized CLI work," called: **"Let's go make NeMo Claw."**

### 10.2 First deployment that night
- By that night they had NeMo Claw's first deployment on a **"bread machine"** — an internal NVIDIA platform (from an acquired company) for standing up work including agentic work.
- First screenshot: **Open Shell**, the runtime, with a **NeMo Claw sandbox** inside.

### 10.3 The 16-hour build
- He calls it **agentic engineering** ("let's call it what it really is: me panicked for about 16 hours").
- Ran ~**four Claude Code terminals** "like a madman" because his two more-senior engineers were on vacation — the engineering manager had to code again.

### 10.4 Keynoted Monday
- He thought they were doing a **demo**; they were actually **shipping a product**, keynoted on Monday.

### 10.5 The Hacker News reaction
- Hacker News assumed it was faked, with "elaborate conspiracy theories."
- He wanted to respond but ("corporate PR") largely didn't, except to joke "maybe I'm still early career, maybe I'm still learning."
- It became "my first actual viral thing" and one of the bigger launches of the year.

### 10.6 Credit to Open Claw
- NeMo Claw was "a shadow of" what the **Open Claw** folks did to make agents popular.

### 10.7 Why Open Claw worked: timing
- Open Claw combined three things at the right time:
  - **Models good enough** to do long-running agentic work.
  - **Advances in memory** that actually worked well.
  - A **package** you can save to disk and **talk to** — messaging via mobile/phone is much easier than keeping Claude Code open all the time.

---

## 11. Safety: "Jail for Agents"

### 11.1 Open Claw with full access is dangerous
- Is it safe to run Open Claw with access to everything? "No."
- "They're going to ruin your house, spend all your money, make you have a very bad day."
- "Treat them like **eager children**" — you wouldn't let a 4-year-old walk the streets with money to buy candy; "you would put them in jail first."

### 11.2 Open Shell = jail for agents
- **Open Shell** (used in NeMo Claw) is "jail for agents" — a **sandbox**.
- Instead of full access to any endpoint, any binary, or anything outside the sandbox, calls are **monitored**.

### 11.3 No secrets inside the sandbox
- No secrets live in the sandbox (e.g., no banking keys).
- If secrets are in the sandbox, **clever prompt engineering** can extract them.
- This matters especially when you expose the agent to the outside world via a **messaging provider** — it makes theft "trivially easy."

### 11.4 The architecture
- NeMo Claw pulls together **Open Shell + Open Claw** with:
  - **Managed inference** — one inference endpoint you select at the Open Shell layer (today one model; tomorrow a **model router** picking the most token-efficient path; local inference optional).
  - **Managed ingress / standardized networking.**
- Secrets live in the **middle layer**, never inside the sandbox — "a simple concept" with "a lot to it."

---

## 12. Why Agents Are Special: Memory

### 12.1 The laptop-open phenomenon
- People walk around campus with laptops open because they "don't want to lose your session" of an agent.

### 12.2 YOLO mode / --dangerously-skip-permissions
- He admits running **YOLO mode** ("dangerously-skip-permissions") — but only while **watching it**.
- Don't go to lunch and "let it yolo its way to destroying my repository."
- Callback to a prior presenter: "hitting the enter button over and over is just YOLO by another name" — you're not thinking, then "bash rm -rf, cool… oh my god, what did I just do?"

### 12.3 Agents are stupid without memory
- "Agents are extraordinarily stupid without memory."
- His wife knows he's angry at his AI when his **mechanical keyboard** gets loud ("don't revert that last commit… that's bad").
- Good harnesses have memory: **Claude has memory, Codex has memory** — agents are designed to learn and improve over time.

### 12.4 Message your agent, don't babysit it
- You should **message** a persistent agent ("how's it going? what are the latest results?") like a junior employee, not keep a terminal open.

### 12.5 YOLO is fine in a contained environment
- YOLO is "perfectly cool" in a contained network (e.g., Open Shell) where it can do no damage.
- Then let it run **evolutionary techniques** forever — e.g., find 30 ways to add better tests, or **code-golf** a 10,000-line vibe-coded function down to far fewer lines.

### 12.6 The first software that gets better the more you use it
- His real excitement (not just that NVIDIA benefits): AI is **"the first kind of software that gets better the more you use it"** — if designed right.
- Requires good memory: the **right facts/context at the right time**, learning what to remember and what to **forget**.
- "Memory isn't just a database" — human working memory recalls the right words at the right time, not everything at once; agents have **limited context windows** too.
- New agents should **inherit the learnings** of prior ones and spawn "baby agents" for the next tasks.

---

## 13. Engineering Discipline: Securing AI-Generated Code

### 13.1 AI is a mediocre secure coder
- "AI is the average of most software engineers" — and most engineers are "pretty mediocre at writing secure code," so the bad patterns are baked in.

### 13.2 The first three weeks: hardening
- The first 3 weeks were spent hardening ~**five or six bad patterns**; "a lot of work… a few late nights."

### 13.3 Adding Hermes support
- On April 9 he decided to also run **Hermes** (from **Nous Research**) alongside Open Claw — a quick "cool" conversation with his PM and "ship it."
- Two weeks later they got their first **pull request from someone at Nous Research** — found even though the code was **behind a feature flag** ("people will find your code hidden behind feature flags").

### 13.4 Over-steering on immutability, then shields up/down
- Initial security work over-locked the sandbox so tightly that **neither Open Claw nor Hermes could write their own configuration** ("you must be immutable to be safe").
- They added a choice:
  - **Shields up** = immutable sandbox.
  - **Shields down** = the agent can change its tools, system prompt, and **soul.md** ("sounds scary but is really just your system prompt" — he dislikes anthropomorphizing it).
- Immutable was default until they felt safe enough; by **week seven** config was writable by default.

### 13.5 Beyond the happy path
- First versions only got the happy path; a week of work added **recovery, restore, resumability** (e.g., a broken **Ollama** download keeps going).

### 13.6 Team size
- Core team of **five people**, plus significant **external contributors** — "everybody here could be a NeMo Claw developer."

### 13.7 Week-seven Open Shell affordances
- **GPU access from the sandbox** — needed because agentic workloads like **post-training a model** require the GPU (agents can make new models).
- **WebSockets** — most in-agent messaging services want WebSocket connections, not HTTP; their first PR into the Open Shell team made WebSockets work, and "all our mysterious messaging issues just went away."

### 13.8 Messaging expansion
- Added **WeChat** (demand in China) and **WhatsApp** (used heavily in Europe).
- Began **rewriting the bad AI-written code using other AI** with what they learned.

### 13.9 Skills-based onboarding
- Easiest onboarding isn't running the onboarder directly — it's using a **skill** that tells your AI how to run the onboarder ("make me an agent that does X"), which handles the complexity of setting up a claw.

### 13.10 Every line AI-generated
- Every line of NeMo Claw was AI-generated (as, he believes, with Open Claw and Hermes) — deliberately pushing "how far we can drive using AI."

---

## 14. The PR Pipeline (Their Key Takeaway)

### 14.1 Standard hygiene
- **Signing** of artifacts.
- **Hash checks on dependencies** — builds break if binaries change.

### 14.2 Code Rabbit
- Uses **Code Rabbit** as a standard — "I don't normally endorse products, but I've loved Code Rabbit."

### 14.3 NeMo-Claw-on-NeMo-Claw PR advisors
- Agents act as **PR advisors** giving automated, angry reviews "in the voice of **Linus Torvalds**" — "lots of cursing… kind of amazing."

### 14.4 End-to-end tests
- About **70 end-to-end tests**; agents decide which to run.
- They take ~**35 minutes** and run on **every platform**: Jetson, macOS, Ubuntu and other Linux, DGX Station, "really big machines."

### 14.5 Architectural coherence
- The one thing he'd do differently from that Saturday: an **architectural-coherence document** — what should the system do, and static analysis to keep e.g. **onboard.ts** from becoming 10,000 lines, keeping cyclomatic complexity readable by humans.
- He personally **reads the code on every PR** — 30, 35, sometimes **50 a day** — "because we have a lot of users and this really has to work."

---

## 15. Nemotron-3 Ultra (Announced Yesterday)

### 15.1 The announcement
- NVIDIA announced **NeMo-3 / Nemotron-3 Ultra** — one of NVIDIA's first big large models "designed to take out that lane."

### 15.2 Why a Western, post-trainable large model
- A large model built by a Western company that you can **post-train** to do what you want.
- He "loves" OpenAI and Anthropic and uses them daily — but many use cases can't use them.

### 15.3 When you can't use the frontier providers
- **Throttling / capacity** limits.
- **Cost** ("we spent 800 million on tokens because we had a leaderboard" — gets old with the CFO fast).
- **Sovereign workloads** that must run in a certain country.
- Problems so important that "buying an entire data center of **GB300s**" (or the next **Vera Rubin**) is worth it — "knowing an answer immediately might be worth a million dollars of compute."

### 15.4 Open source, not just open weights
- Nemotron-3 Ultra is **open source**, not just open weights, with **playbooks** for any inference or post-training.
- Example: **post-train it on your own codebase** so it understands your code better than the general corpus, encoding knowledge in weights for faster inference.

### 15.5 Post-trained for agents
- Specifically post-trained for **agents / long agentic workflows and tool calling** — needed for reliable AI apps "for everybody in the world, not just people building simple apps."
- Local inference on a **DGX Station** or your own GPU can save "**up to 30%**."

### 15.6 The compute philosophy
- "We're not trying to make you use as much compute as possible."
- Spending less on today's easy problems frees compute for the hard problems of tomorrow.

---

## 16. Closing: Curiosity

### 16.1 The enduring skill (echoing Kent Beck)
- Quoting **Kent Beck** from earlier at the conference: the enduring, success-defining property is **curiosity.**
- "I wonder what's possible… I wonder if I could do this."
- He never wakes without "two or three things I want to type into that box" — new UI, new mobile app — "it used to be something I could just dream about; now it's something I can try."

### 16.2 The open invitation
- If you contribute to **NeMo Claw** and **@-mention him**, he'll look at your PR and "likely accept it if it solves an issue I care about — and if it doesn't, I won't."
- Goal: grow a community; make NeMo Claw "not just NVIDIA's product… everybody's product," so anyone can build **safe agents** and spin off their own.

### 16.3 Not competing — helping
- "We're not competing with the agent providers, we're helping them" — they bring in Peter and Nous Research at GTC and want the whole community to succeed.

### 16.4 The final line
- "The world will belong to those with the **wild imaginations**."

---

## People & References Cited

- **Aaron Erickson** — speaker; NVIDIA; former org-design startup founder; began programming on a TRS-80 in 1980.
- **Jensen Huang** — NVIDIA CEO; saw the Lollipop demo and said "Go make it work."
- **Kent Beck** — quoted at the conference on curiosity as the enduring skill.
- **Linus Torvalds** — the voice imitated by their automated PR-advisor agents.
- **Nous Research** — makers of **Hermes**; source of an early external pull request; "Peter" referenced as a collaborator.
- **Companies / products:** NVIDIA (NeMo Claw, Open Shell, "bread machine," Helios, GB300, Vera Rubin, DGX Station, Jetson, Nemotron-3 / NeMo-3 Ultra), Open Claw, Hermes, OpenAI, Anthropic (Claude Code, Opus 4.5 / 4.6), Meta, Microsoft (Graph API, Outlook), Confluence, Jira, Code Rabbit, Ollama, WeChat, WhatsApp, LinkedIn, Hacker News, Byte magazine, TRS-80, Waymo, Delta/airline service bot, Ryanair (example).
- **Media references:** *The Big Short* (worker-agent analogy), *Crimson Desert* (the game he was about to play).
- **Concepts:** agent archetypes (worker, ruminative, middle-manager, consultant/observer), OODA loop, tools-for-certainty formula (tools + guardrails + feedback loops + people with taste), prompt injection (airline upgrade), run books, "vibe doctoring," "jail for agents" sandboxing, shields up/down, soul.md as system prompt, YOLO / --dangerously-skip-permissions, agent memory / context management, evolutionary/code-golf refactoring, AI as software that improves with use, securing AI-generated code, PR pipeline (signing, dependency hashes, e2e tests, architectural coherence), open source vs. open weights, sovereign/throttled/cost inference cases, post-training on your own codebase, curiosity as the enduring skill.

---

*Video: https://www.youtube.com/watch?v=7TD1URiKyMk — Transcript via yt-transcript.sh; outline generated from the transcript.*
