---
title: "From autocomplete to agents: AI coding assistance state of play - Birgitta Böckeler | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Birgitta Böckeler (Thoughtworks) gives a public-service tour of AI coding assistants from autocomplete to supervised agents — the speed-impact heuristic, how agents/MCP/custom rules actually work, emerging plan-first/small-session/memory workflows, vibe coding, worked examples of why developer skills still matter, the blast-radius model, GetClear churn data, and responsible-adoption recommendations, plus Q&A."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# From autocomplete to agents: AI coding assistance state of play - Birgitta Böckeler (Talk Outline)

> A **Craft 2025** conference talk by **Birgitta Böckeler**, a software developer, architect and technical leader with ~20 years in technology, currently **Thoughtworks' global lead ("global theme") for AI-assisted software delivery** — where she "drinks from the AI fire hose every day." She frames the talk as a **"public service"** summary of where coding assistance stands, admitting she has **FOMO** about keeping up even doing this full-time. It complements an earlier talk by **Patrick** at the same conference. The talk's own structure: (1) a rundown of how coding-assistant features evolved, (2) what agents are and how they work, (3) core features that matter more with agents (MCP, custom rules, emerging workflows), (4) a speed-impact heuristic, (5) the vibe-coding debate, (6) worked examples of why our skills still matter, (7) the blast-radius model, (8) cautionary data, (9) recommendations for individuals and organizations, and (10) Q&A.

---

## 1. The Feature Evolution: From Autocomplete to Chat to Context

### 1.1 Autocomplete "on steroids"
- The starting point (a GitHub Copilot screenshot from ~2 years before the talk).
- Workflow: type a comment or a method signature, then "wait and pray" that it suggests a line — or multiple lines — of code.

### 1.2 Chat in the IDE
- Not even two years earlier these tools had **no chat component** — now unimaginable.
- Started with simple questions; her example as a Java developer learning Python: "is there the concept of a static function in Python?"
- Worked well already for simple questions even with the models of the time.

### 1.3 More IDE integration (explain / fix)
- Copilot added "explain using Copilot" and "fix using Copilot" in the quick-fix functionality.
- Could point at specific files in the codebase.

### 1.4 Inline chat windows
- Little inline chat windows to ask questions or give instructions.
- Replaced the "cumbersome" commenting method.

### 1.5 Chat with the codebase
- Ask natural-language questions about the codebase.
- Her example in **Cursor**: a full natural-language question is broken down into a **search query in the background**, which then finds the right place in the codebase.
- Frequently adds value **on top of a plain text search**.
- This is one of the features that **differs a lot between products** in how it is implemented under the hood.

### 1.6 More context providers
- Point at other pieces of information as context:
  - the current **local change set** (e.g., to summarize it for a commit message);
  - a **web page**;
  - **reference documentation**;
  - the **terminal**.
- First integrations with places like **Jira** — pulling in the contents of a ticket.

### 1.7 Constantly-evolving models
- Felt like every other week a new model appeared with a headline "this is better at coding than GPT-4."
- Hard to evaluate what was actually true.
- **Claude Sonnet series** has been a constant and **clear favorite for coding** for maybe 5–6 months.
- Advice for the disoriented beginner: "you cannot go wrong with the Sonnet model series."

### 1.8 The unit of assistance ≈ a method
- With these features, the size of the unit of assistance was "round about a method," especially in a **brownfield** context.
- People starting a new codebase would have it generate whole classes, but often it was "size of my head" code.

---

## 2. The Speed Heuristic (First Pass)

### 2.1 Keep it simple: talk only about speed
- Productivity impact is hard to measure because a lot goes on in software delivery.
- She narrows the question to impact on **speed**.

### 2.2 The heuristic math
- Assume a team spends ~**40%** of cycle time on coding (which is "actually quite high").
- Assume ~**60%** of that coding is supportable by a coding assistant (not all tasks are helped).
- Assume you are ~**55% faster** when you do use it — the famous number **GitHub put into the world in 2023**.
- Multiply out → ballpark **~13% impact on cycle time**.

### 2.3 The 55% number was misread by executives
- 55% was **faster task completion**, not headcount — but it "made a lot of executives think they can now cut teams in half."

### 2.4 Reality check: ~8% over 150 tickets
- One of her teams estimated per-task speedup across ~**150 tickets** and concluded they were about **8% faster** in cycle time.
- You might **not even see this in hard data** because cycle time is very variable across teams.

### 2.5 Still worth it
- A coding assistant costs **less than ~0.1%** of what the team costs — so even a small real gain is worthwhile.

---

## 3. Agents

### 3.1 The latest step change
- Agentic modes in coding assistants are the latest step change; GenAI tooling is a "moving target."

### 3.2 Two rough buckets of agents
1. **Supervised IDE agents** — you are in the chat, you drive the implementation, and you intervene/steer.
2. **Autonomous background agents** — e.g., **OpenAI Codex**, **Google's Jules**; some have been around a while.

### 3.3 Why she focuses on supervised agents
- Autonomous background agents are "not quite ready for prime time yet."
- She focuses on the supervised ones.

### 3.4 Timeline of the tools
- **Cline** and **Aider** already had a fairly agentic mode in autumn/late-summer of the prior year, but few used it yet.
- Then **Windsurf**, **Cursor**, and most recently **GitHub Copilot** got agentic modes.
- She uses Cursor/Windsurf the most; her experience is mostly based on them.
- She usually runs a **Claude Sonnet** model so at least the model is a **constant** when comparing tools.

### 3.5 Agents expand the impact radius to "the size of a problem"
- Agents expand the size of the task worked on together with AI to "the size of a problem."
- She puts a **question mark** on this: problems come in many shapes and sizes.
- The new challenge for the profession/individual: figure out what is a good **size and type of problem** to work on.

### 3.6 What an "agent" actually is (mechanics)
- "Agent" is one of the most overused words right now.
- The coding assistant is a **plugin in the IDE** (VS Code, IntelliJ) or a **terminal chat session**.
- Its available capabilities usually include: **read a file, change one or multiple files, execute commands**.
- When it sends a prompt to the LLM, it sends both your instruction **and a list of available tools**.
- The LLM may decide a tool is useful — e.g., "run the tests" — and asks the assistant to do it.

### 3.7 Worked example — Cursor runs the tests
- She asked Cursor to make a change; it changed both **implementation and test**.
- It then **ran the test**, saw the output, said "the test is green, we're done."
- Even nicer when the test **fails**: it reacts automatically, reads the error, and does another fixing round.
- Automates "basic hygiene" she used to do manually (run tests in terminal, copy-paste errors into chat).

### 3.8 Worked example — Windsurf researches the web
- A **compatibility problem between two libraries** arose.
- Windsurf **searched and researched the web**, found GitHub issues and a patch.
- It then **added the patch library as a dependency**.
- Not all assistants have this research capability yet; it automates the first step you'd always do (web-search the error).

### 3.9 Worked example — picking up "squiggly lines"
- Because the LLM (which "only knows tokens") is partnered with the IDE (which knows code structure), the agent can pick up **lint errors / "squiggly lines"** — compile errors, interpretation errors, linting warnings.
- In one case Windsurf messed up a file's syntax and **fixed it automatically** without her telling it.

### 3.10 The lived experience: waiting, and the "slot machine"
- Now she gives instructions and **waits** ("I have tense shoulders, so I can stretch").
- Someone on **Reddit** likened it to a **slot machine** — sometimes you win, sometimes you lose, and you keep putting in more money.
- It frequently reduces her **cognitive load** — even with concrete instructions, it does the last step of finding the exact place in the code.

### 3.11 She always uses agents on existing code
- She "hardly ever" does "give me an application from scratch."
- From-scratch generation isn't representative of what we usually do.

---

## 4. Core Features That Matter More With Agents

### 4.1 MCP (Model Context Protocol) — what it is
- A standard **by Anthropic** that "exploded" over the last month or two.
- You run **MCP servers**; despite the name "server," developers mostly run them **on their own machine** (a Python or JavaScript process).
- The coding assistant is the **client**; when the agent goes to the LLM, it includes a **list of MCP servers**.

### 4.2 MCP — what it unlocks
- Custom, possibly personal capabilities, e.g.:
  - **search Confluence**;
  - **add a comment to a Jira ticket** (her Atlassian instance, with her API key);
  - **query a test database** to help debug.
- Her experiment: an MCP server let the LLM **browse an application**, create a **description of what the app does**, and even **take screenshots** — for modernizing/rebuilding an existing app.

### 4.3 MCP — the "wild west" security warning
- Developers are cloning MCP servers **that strangers wrote** and giving their agent access.
- Treat MCP servers as a **software-supply-chain dependency**, as carefully as any other.
- Your developer machine has access to the "**golden goose**": pipelines, secrets, production environment, production database.
- Beyond technical fixes, it's about the developer **feeling responsible** for what they unleash on the supply chain.

### 4.4 Custom instructions / rules — what they are
- A way to **configure the agent for your project**.
- Sent to the LLM **every time you start a new session**.
- Her rules-file excerpt describes the **tech stack** and reminds it of recurring pitfalls.

### 4.5 Custom rules — a concrete pitfall reminder
- Using **Python virtual environments**, the agent kept **forgetting to activate the environment** — so she put that in the rules file.

### 4.6 Custom rules — project vs. global scope
- **Project level:** push to the repo, shared across the team.
- **Global/individual level:** respond to your skill level or personal preferences.

### 4.7 Custom rules — pseudo-commands
- She defines pseudo-commands, e.g., **"wrap up"** → draft a commit message **and** remind her to restart the application once (a gap in their testing).

### 4.8 Custom rules — no guarantees
- No 100% guarantee the agent follows the rules (you can't force all your code-quality rules).
- She has "begged" the model — "this is important, please always always always do this."
- Hard to **test** whether/how it follows a rule; "follow JavaScript best practices" is interpreted unpredictably — you must **iterate** and try different phrasings.
- You can't rely on it interpreting rules the way a human would.

### 4.9 Custom rules — the "rules file backdoor" security vector
- A discovered vulnerability: **hidden characters** in rules files can instruct the model to **generate malicious code**.
- An attack vector because people **share rules online** and copy-paste them ("these rules were helpful for my tech stack").

---

## 5. Emerging Workflows

### 5.1 Plan first / break down into smaller pieces
- Plan and break work into smaller pieces **with AI** before coding.
- People report better results doing this with a **reasoning model**.
- The plan produces more **concrete instructions**, raising the probability the agent is useful.

### 5.2 Small, concrete sessions
- Agents work better in **small, concrete sessions**.
- Even though context windows are growing, bigger windows don't guarantee good results.
- The **fuller/longer** the conversation, the more the agent **loses attention on your custom rules**.
- Good practice: **frequently start a new session**; don't let conversations get long.

### 5.3 Concrete instructions raise success probability
- Weak instruction: "make it so I can toggle the visibility of the edit button."
- Strong instruction: "add a new boolean to the database, expose it through the following endpoint, and toggle visibility based on that."

### 5.4 The trade-off: concreteness vs. serendipity
- Patrick's point (referenced): the more concrete you get, the **fewer interesting alternative ideas/solutions** the LLM offers.
- Depends on your situation — do you know exactly what you want, or are you still **brainstorming**?

### 5.5 Memory = markdown files
- "Memory" sounds fancy but is usually just **markdown files**.
- Write the plan into a **to-do / plan file** and update it as you work.
- On a new session, do a **handover**: "this is what we're working on, here's the context, now continue with the following task."

---

## 6. The Speed Heuristic (Revisited With Agents)

### 6.1 Pulling the "faster" lever to 80%
- She raises the "rate of faster task completion" lever to **80%** in the model.
- Not everyone will be 80% faster — depends on the task, tech stack, and how messy the codebase is.
- She has talked to teams who **swear they are 80% faster** for their types of tasks.

### 6.2 More impact on new code
- More impact when **building new code** (new part of a codebase, a new service).
- Impact goes **down again** when editing existing code.
- You can do "scenario planning" for your own situation's ballpark impact.

### 6.3 Making your coding more AI-friendly
- AI works **better with a well-factored, modularized codebase** — easier to point at the right context.
- A messy codebase where you must change 15 disparate pieces is much harder.
- So far, the things that make AI work better are also things that are **good for humans**; she expects some AI-specific practices to emerge later.
- Rebuttal to "I don't need code quality anymore because AI will maintain it": **AI works better with good structure**.

### 6.4 The "code more" lever is unrealistic
- In theory you could get more cycle-time impact by **coding more**, but software delivery is much more than coding.
- The relative "how much faster" numbers may not even be that useful given how much else goes on.

---

## 7. The Vibe-Coding Debate

### 7.1 The viral "snake in 2 minutes" videos
- The internet is full of videos of someone building **snake or tic-tac-toe** in ~2 minutes.
- Leads to statements like: in **3–6 months AI will write 90% of the code** developers were in charge of.

### 7.2 What does "AI writes 90% of the code" even mean?
- Does it mean AI **types** 90% (developer still in charge) or does it mean **fully autonomously without developer intervention**?
- Does "in charge only 10% of the time" follow? She doubts it.

### 7.3 Karpathy's definition of vibe coding
- **Andrej Karpathy** on Twitter: vibe coding = "you don't look at the code, you just tell the AI what you want," maybe even by **voice**, iterating over chat until it does what you meant — "chaotic, fast, fun."
- At her first presentation of these slides the tweet was ~2 months old; by talk time ~4 months old, though "it feels like it's been around for a year."

### 7.4 Vibe coding goes mainstream fast
- ~6 weeks after the tweet: **job boards for "vibe coders"** (the site itself probably vibe-coded).

### 7.5 The viral "my SaaS is under attack" cautionary tale
- Someone tweeted their **SaaS was built with Cursor AI** — "AI is no longer just an assistant, it's the builder... people pay for it."
- **Two days later:** "guys, I'm under attack" — maxed-out API-key usage, people **bypassing the subscription**, random rows in the database.
- The builder said "as you know, I'm not technical, so this is taking me longer to figure out."
- A reply pinned it on being non-technical; the audience feels pity but also some professional **schadenfreude**.

### 7.6 Vibe coding is one valid mode
- Karpathy also said it's "not too bad for **throwaway weekend projects**."
- It's one valid way to use these assistants; she switches into and out of it herself.

### 7.7 The polarized terminology
- The term became **polarizing**; many people met these features **through** the term.
- One camp (hers): keep the original definition and find a different word for the whole space.
- Other camp: "the train has left the station."
- Practical advice: when someone says "vibe coding," **establish in conversation** what they mean (no code review at all vs. AI-assisted coding in general vs. agent-assisted coding).

---

## 8. Why Our Skills Still Matter (Worked Examples)

### 8.1 Anthropomorphizing the AI teammate
- ~1.5 years earlier she wrote about anthropomorphizing the AI teammate to reason about when to trust it — like building a mental model of a human teammate.
- You might trust the backend expert's advice blindly but double-check when they touch CSS.
- Her characterization: **eager to help, very well read but inexperienced, stubborn** (won't admit it doesn't know something), lots of **overconfidence**.
- Others call it an **intern**; **Kent Beck** calls it a **genie**.
- It's become slightly less stubborn/more sophisticated, but the model holds — except now it **has access to all these tools** (including production).

### 8.2 Amateurs vs. professionals
- The "under attack" amateur didn't know to protect an AI API endpoint.
- **Professionals** know such things and can tell the AI to do them — so can professionals just give the instructions and let it go? Her examples show she **intervenes all the time**.

### 8.3 Example — Dockerfile out-of-memory brute force
- Working on a Dockerfile / build process, the agent hit an **out-of-memory error** and proposed "**increase the memory limit**."
- She asked **why** the memory error occurred.
- It found the root cause: **npm install run three times, including dev dependencies**.
- It then made the right suggestions (run once, exclude dev deps).
- Without her intervention, the brute-force fix would have hidden a heavyweight, badly optimized build — a **smell** that something's not optimal.

### 8.4 Example — sneaky backwards compatibility
- She asked it to **merge two methods into one** and merge the variable lists.
- It changed the interfaces, yet the **tests stayed green**.
- She asked why; it had **maintained backwards compatibility** — kept the old methods in place, calling the new one.
- Easy to spot in review; she's hit this with **Claude Sonnet at least three times** — it "has a thing with backwards compatibility."
- Illustrates how much **context and trade-offs** matter: backwards compatibility is a real problem in general (lots of training data), but **not** for an internal API of your own codebase.

### 8.5 Example — test smells (generate code + tests, all green, push)
- People generate code **and** tests with AI, see green, and push.
- **Verbose/redundant tests:** too many overly detailed assertions → **brittle** tests (change one thing, 50 tests go red).
- **Not enough tests.**
- **Too much mocking:** it mocks even the **data objects** passed into the subject under test.
- **Tests in the wrong places:** not fatal, but harder to browse and reason about coverage.

### 8.6 Example — won't stop at a red test
- She tries to get it to **stop after creating a red test** — a great human review point to check direction.
- It's "very eager" and goes straight into the implementation, so it's hard to run the test once and confirm it's red.

### 8.7 Example — fixing the wrong side of a red test
- When a test is red, sometimes the **code** needs fixing, sometimes the **test setup** is wrong.
- The AI must decide which side to fix and **doesn't always decide correctly**.

### 8.8 Example — spaghetti design via wrong constructor parameter
- It introduced a **new string parameter into a constructor**.
- But the string was obtained from a **KnowledgeManager** that was already a dependency of that constructor.
- So the fetch should have happened **inside the chat object**.
- The code worked, but repeated across many places this yields the poorly-modularized code that AI itself then struggles to maintain.

### 8.9 Where she writes this up
- She writes "memos" with colleagues on **Martin Fowler's website**, in a space called **"Exploring Gen AI"**, with more details and examples.

---

## 9. The Blast-Radius Model

### 9.1 Time-to-commit (you notice)
- AI doesn't work / leads you down a rabbit hole → makes you slower.
- Very easy to see (code doesn't work or you're slow); the **bad code doesn't even hit the repo**.

### 9.2 Team-noticeable within a day or two
- You push something and don't notice, but the team catches it quickly.
- Example: the build got slower, or it **removed the hot reload** of the web app — colleagues notice "my local workflow doesn't work anymore."
- The team acts as a **buffer**.

### 9.3 Codebase / feature-lifetime (insidious)
- The most insidious blast radius: things you **don't notice** that harm **long-term maintainability**.
- Examples: the backwards-compat shims, the spaghetti constructor design.

---

## 10. Cautionary Data

### 10.1 GetClear churn data — what they measure
- **GetClear** has a product analyzing git-repository changes, categorizing them:
  - **added lines of code**;
  - **moved code** (a good indicator of **refactoring** level — not always, but frequently);
  - **churn** — a change committed then reverted or changed again **within two weeks** (often a sign of misunderstanding, an incident, or a bug).

### 10.2 GetClear churn data — the trend
- Data spans private/commercial enterprise codebases **and** big open-source codebases from **Google, Facebook, Microsoft**.
- From 2023 (when assistant use ramped) and again a year later, the lines "go into all the wrong directions": **more added lines, more churn, less moved code**.
- Conclusion: more **duplicate code**, more corrections within two weeks, and **less refactoring** — bad for long-term maintainability.

### 10.3 Survey data (not "hard data")
- **59%** said they experienced **deployment problems at least half the time** when using a coding assistant.
- **67%** said they spend **more time debugging** AI-generated code than before.

### 10.4 GenAI is here to stay
- It's in the toolbox now and won't go away — "too useful, too tempting."
- As a profession we must figure out how to use it **properly and responsibly**, made harder by the speed.

---

## 11. Recommendations for Individuals

### 11.1 Fight complacency and sunk-cost fallacy
- When code superficially works, you want to push it — we're trained to feel productive only when producing.
- Reviewing/fixing feels passive and "like a waste of time," but you must **review code that matters**.
- Vibe coding (no review) is valid for certain apps; she switches in and out of it — but for things that matter, review.

### 11.2 Mind your feedback loops
- Figure out how you **quickly know it actually works**, especially for large changes.
- **Infrastructure code** has a **long feedback loop** — be particularly careful there.

### 11.3 Know when to quit / roll back
- When you're losing control of what's going on, **reset all changes** or use the agent's **checkpoints** to roll back (even without committing) to a point you still understood.

---

## 12. Recommendations for Teams / Organizations

### 12.1 Dust off static code-analysis / code-quality tools
- The tool set up but never used "because we all know what we're doing" — now that the "**mad donkey**" is in the mix, revisit it.
- These tools measure things like **duplicate code**; monitor the **trend**.

### 12.2 Don't shift all review "to the right"
- Quality/review is slowly shifting rightward: just commit what the agent did and let a colleague catch it in **PR review**, or add an **AI PR-review helper in the pipeline**.
- She asks why the developer isn't running that **before pushing** — don't automate review to the right instead of doing it while developing.

### 12.3 Don't set overhyped speed expectations
- Telling people "you have AI now, be 40% faster" makes them **cut corners** — with bad impact a year later.

### 12.4 Build a culture rewarding both experimentation and skepticism
- Enthusiasts: don't ask a colleague "why are you so slow when you have AI now?"; **praise them when they experiment** despite skepticism.
- Skeptics: don't belittle enthusiasm with "why would you think that could work?"; **praise them when they look closely** and make good, realistic, responsible suggestions.

---

## 13. Q&A

> The moderator noted they were out of time; only one or two questions were taken for those who chose to stay.

### 13.1 Q1 — Everyone talks about speed; what about quality (maintainability, security, defect rate)? Any data?
- She already showed some data (the GetClear churn data).
- She has no hard per-project defect-rate data to share.
- **Patrick** mentioned a study on debugging times in his talk; there are various studies out there.
- The **State of DevOps report** showed **no positive impact** from AI — very neutral, if not negative.
- Quality is definitely something to watch; we might **not see it right now** — "there might be a reckoning in a year or so."

### 13.2 Q2 — Is there an AI tool that effectively works on codebases with multiple millions of lines? What are the current limits?
- Depends on what you want to do with the codebase.
- If it's super messy you might have to give it the whole codebase to find the 15 places to change, but even then it rarely needs the **whole** codebase.
- You can **point it at certain parts**.
- She's **not aware** of any assistant that magically works on a multi-million-line codebase — but you can still use AI on a huge codebase with certain practices.
- Most assistants now **index** the codebase.
- For **understanding** (not changing), you can load the codebase into a **knowledge graph** and enrich it with other project information.

### 13.3 Q3 — Your measurements are about time-saving with a "desert philosophy." Isn't AI more about increasing quality and creativity?
- "Desert philosophy" refers back to the **morning keynote**.
- She agrees the cycle-time percentage isn't a great measure — coding isn't everything you do.
- Over time people **change how they size/estimate stories**, so the cycle-time numbers (based on estimation/sizing) will get "baked in" and stop meaning anything.
- The heuristic is better used as a **tool for conversations with managers** to explain the ballpark, the factors, and the difficulty of measuring this.

---

## People & References Cited

- **Birgitta Böckeler** — speaker; Thoughtworks global lead/theme for AI-assisted software delivery, ~20 years experience.
- **Patrick** — earlier speaker at the same conference; referenced for the concreteness-vs-serendipity trade-off and a debugging-times study.
- **Andrej Karpathy** — coined/defined "vibe coding" on Twitter; "not too bad for throwaway weekend projects."
- **Kent Beck** — calls the AI a "genie."
- **Martin Fowler** — his website hosts the "Exploring Gen AI" memos she co-writes.
- **Companies / products:** Thoughtworks; GitHub (Copilot, the 2023 "55% faster" number); Cursor; Windsurf; Cline; Aider; OpenAI (Codex); Google (Jules); Anthropic (Claude Sonnet, MCP); VS Code; IntelliJ; Atlassian (Jira, Confluence); GetClear (git churn analytics).
- **Reports / studies:** GetClear code-change data (added lines / churn / moved code across enterprise and Google/Facebook/Microsoft open-source repos); survey (59% deployment problems, 67% more debugging time); State of DevOps report (neutral-to-negative AI impact).
- **Security vulnerabilities:** MCP servers as supply-chain risk; the **"rules file backdoor"** (hidden characters injecting malicious instructions); the viral "SaaS under attack" (unprotected API keys, subscription bypass).
- **Concepts:** feature evolution (autocomplete → IDE chat → chat-with-codebase → context providers); the speed heuristic (40% × 60% × 55% → ~13%; ~8% over 150 tickets; lever to 80%); supervised vs. autonomous agents; agent mechanics (tool list sent to the LLM); MCP (Model Context Protocol, client/server); custom rules/instructions and pseudo-commands; plan-first, small-session, and markdown-memory workflows; vibe coding; anthropomorphizing the AI (eager/well-read/inexperienced/overconfident intern or genie); blast radius (time-to-commit / team-noticeable / codebase-lifetime); AI-friendly (well-factored, modular) code; responsible adoption (feedback loops, checkpoints, static analysis, not shifting review right, avoiding overhyped speed targets, culture of experimentation + skepticism).

---

*Video: https://www.youtube.com/watch?v=rDS9BT1QiGo — Transcript via yt-transcript.sh; outline generated from the transcript.*
