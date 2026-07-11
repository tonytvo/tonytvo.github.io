---
title: "How to survive and thrive as a dev team in the age of AI – Sander Hoogendoorn | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Sander Hoogendoorn on how a 13-person e-commerce platform team uses AI to solve previously-impossible non-deterministic problems, seen through the Cynefin/complexity lens — plus vendor lock-in and 'selfware' worries, AI-accelerated tech debt, and a rules-light autonomous team that dropped Scrum, PRs, and code reviews."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# How to Survive and Thrive as a Dev Team in the Age of AI – Sander Hoogendoorn (Talk Outline)

> Sander Hoogendoorn — CTO of e-commerce company **Collect(a)**, coding since **1978**, leading a **13-person** team building a whole platform — gives a deliberately **critical, non-big-tech** take on AI. His thesis: software is the most complex industry (Cynefin's "complex" domain), AI genuinely lets small teams **solve non-deterministic problems they couldn't before**, but it also brings **vendor lock-in, outages, and accelerating technical debt** — so you survive by taking **tiny steps, simplifying to amplify**, and running a **rules-light, autonomous** team.

---

## 1. Framing — Not a Big-Tech Story

- Happy to be back in Budapest (a favorite conference). This talk is **critical**, not a recap of "what Google/Anthropic dropped today."
- He's **not** a big company: his team including him is **13 people**, serving an e-commerce company, building a whole platform — "we can only spend our time once," so they must choose differently.
- The zeitgeist: at a non-tech conference someone said "it's all about how you write your prompt" — "what age are you? That's so 2025." Their **purchasing director** thought "every department should have one product to survive" without ever trying the tools. Reality is that **most orgs (banks, insurers, government) aren't where Anthropic is** — and small teams sit "somewhere in the middle."

### 1.1 Daily reality

- The team has constant conversations — "what was I doing? oh, I was pushing a property onto a button; I can do that myself, it's React." Enjoyable, but it shows how much has changed.

## 2. What Changed — A Table Without a Library

- Coding since **1978** ("a different year… different world").
- **The table anecdote:** their React library included a heavy open-source table framework bloating the site (tree-shaking didn't help). Two years ago and one year ago the team said "don't build your own." **Three weeks ago** he built a **table without a library** — **260 lines of code, no framework**, with drag-and-drop and sorting — now replacing the heavy-framework tables. "That's the difference AI makes."
- Management reflex: "AI will take over everything" — e.g., "get standard property info from 400,000 product descriptions" — doable **with a lot of money and time**, eventually.

## 3. Software Is Complex (Cynefin)

- **Dijkstra (1984):** the programmer must think in hierarchies deeper than any before — "the most complex industry in the world" (harder than rocket science).
- The **Cynefin framework** (Dave Snowden — "I bring it every year"):
  - **Clear** domain → a **best practice** exists; just implement it (dishwasher analogy — and "put the dishes back in the cupboard = refactor").
  - **Complicated** → **good practices**; take requirements → spec → pick the best of a known range.
  - **Complex** (where most real work is) → **no best/good practices**; the problem is new to you, your org, and your team (e.g., "passwordless accounts with Firebase — we don't know how"). **Practices emerge from what you do.**
- **Snowden:** it's pointless to seek "the right answers" in the complex domain — they don't exist. Explain to managers that an **estimate is a bandwidth/bell curve**, not a promise; the domain is full of **unknown unknowns.**
- Complex work requires **innovation → guts → permission to fail.** Many companies forbid failure, so people **get stuck.** To invent you must **experiment**, and experiments can be **false** — "if you don't make decisions, you're deciding anyway."
- The mindset word: **cynefin/"cynwobble"** — travel purposefully toward an **as-yet-unknown destination.**

## 4. The "Selfware" Problem

- Content director "Elmo": now **everyone builds their own software** — marketing teams on home servers, data into a cloud DB with `elbow123` passwords, all looking the same (same UI framework), **unbalanced, untested, unscalable, insecure, GDPR-oblivious** ("where does your data go? we don't know").
- History rhymes: in the **80s/90s** enterprises got stuck on **Excel spreadsheets** import/export because tech was too slow — we're back there. The new word: **"selfware."**
- Quote: "Took 29 years to watch Jurassic Park — a cautionary tale about **understaffing engineering and letting people push code directly to production.**"
- **~40,000 CVEs last month** — using the wrong stack (e.g., "the 10 stack and 10 router") is "a big surprise." Shown to marketing, the response was: **"What's a CVE?"** — "the state of the world we're in."

## 5. Red Pill — Two Years of Trying

- **Change is the only constant**; we must get good at change (faster cycles than ever). "Red pill or blue pill" — there's no option but the **red pill** (go down the rabbit hole).

### 5.1 Speaker intro

- Single independent, three grown kids (one lives next door), lifelong programmer (since 1978, still codes daily in C# with his team), **CTO of Collect(a)** (e-commerce), lives in Amsterdam, contributes to their **open-source microservices framework**. "Every context is different — figure it out yourself."

### 5.2 History repeats — "business-oriented language"

- **COBOL** — the "B" is for **Business**, meant to let business people write software. **Every trend for 40 years** promised "no more developers." We're still here — because **typing code is a means; solving problems is the end.** He learned to code from **a book** ("broken at the arrays chapter"). The real work is the **blue thing — understanding people's real problems.**

## 6. Solving Business Problems with AI

- **Content generation:** e-commerce means tons of content — instead of writing by hand, a **microservices service** talks to any back-end model; business users give product/name/brand and get findable content. (They no longer even expose which model is used.)
- **Invoice recognition (OCR):** replaced expensive OCR tools/licenses with a **business process** that feeds the invoice to ChatGPT, then lets AI decide what to do (non-deterministic — you don't know what's on it); uncertain cases go to a human **"compare invoice vs. purchase order"** page.
- **Redundant vendors/libraries:** many small tool vendors and libraries "do one thing well but not well enough to avoid replacement" — AI-generated/built code is now **saving cost.**
- **Price comparison:** as a deal platform they compare competitor sites and must be cheaper — built with a mix of AI/non-AI models, linking back to source sites.

### 6.1 The deterministic/non-deterministic realization (~1.5 years ago)

- Where things are **deterministic**, "some AI could do it" but **code does it better** (write code to it).
- Where things are **non-deterministic**, **AI really helps.**
- Examples: **daily campaign suggestions** (check what's happening in each country, generate a campaign for marketing to approve) — e.g., Dutch **"Neighbor Day"** → AI picks fitting products (chocolate, pizza stone oven, baking pans, light-bulb things). "We can't write code to invent products for a campaign we just made up — **AI can**." So yes, they **solve bigger problems than before.**

## 7. The Worries

- **Attitude:** big AI companies act like "we can use everything" regardless of how hard people worked (they likely trained on his Dutch books — Dutch/Hungarian act as a **threshold**). An attitude problem.
- **The Silicon Valley playbook:** pull you in with **cheap/free** stuff, then **raise prices** once you're hooked — "these are companies, not charities." Their **OpenAI dashboard** showed **€104/day**, and that's **less than it costs them** to run.
- **Usage limits & dependency:** frequent Anthropic "extra usage limit reached" emails; a session limit stopped his work mid-task. "We get so lazy that when Anthropic says stop, we go home — **why work without AI? We're losing knowledge. That's scary.**" Also "unable to charge your credit card" moments; spend climbing (€104 → $384).
- **Vendor lock-in:** the more prompts/tools you put on OpenAI, the **harder to move** to Gemini/Claude.
- **Product retirement:** **Sora** was the big thing, now there are better ones and it gets **retired** — if your code depended on it, **rewrite.**
- **Outages:** during an AI talk in **Heraklion** the power went out for 10 minutes. ChatGPT (and even Claude) have outages — if your **business process relies on it**, you need a **multi-model strategy** built into your platform (and they did).

## 8. Technical Debt in the Age of AI

- **Ward Cunningham** coined **technical debt**: shipping first-time code is like debt — fine if you **pay it back with refactoring** (scary to managers because it "costs time without value").
- Cunningham: whole engineering orgs can be **brought to a standstill under the debt load** of an unfactored implementation ("object-oriented or otherwise" → "AI-oriented or otherwise").
- **Dijkstra:** "if debugging removes bugs, programming puts them in" — every line you write **or make Claude write** is potential issues. He still **improves Claude's code constantly**; his "day job is cleaning up the code me and my teammates wrote three months ago" (which already feels ancient).
- **Adam Tornhill** (in the room): tech debt will **accumulate much more with AI** — AI does weird things, e.g., it invented a non-existent **`just-mock-window`** library; "you should always build after a change" → "there's a skill for that" but "it doesn't remember until the laptop crashes."
- Danger: an era where humans spend most time **figuring out what went wrong**; once you hit tech-debt saturation you **can't innovate** and **no agent will save you.**
- **Gall's Law:** a complex system designed from scratch never works and can't be patched to work — **always start simple.** Yet he checked in **271 files in one commit** (a library built without a framework), and the whole team spent **two days fixing Sonar issues** he dropped in.

## 9. Meet the Team — Rules-Light & Autonomous

- Over ~10–12 years (pre-AI) they learned **everything you leave out makes you faster** — and, he argues, **increases quality.**
- **What they don't do:**
  - **No Scrum** (doesn't mean pure Kanban — find your own middle), so **no sprints**, **no retrospectives** ("boring, nothing ever comes out").
  - **Fewer stand-ups** (none on Thursdays when everyone's in the office together).
  - **Everyone is their own architect** and makes their own decisions (autonomy).
  - **No pull requests** → therefore **no code reviews** — "you go a lot faster, far less context switching."

### 9.1 Autonomy

- Autonomy = people make (and are trusted with) their **own decisions**, allowed to **fail** ("tried it, didn't work, next time better"). Hard for people not used to it. Anecdote: a developer asked "which should I work on?" — "that's up to you… you know better than I do." She grew into it; now on maternity leave, **she chose not to pick up big stuff she couldn't finish** — exactly the right autonomous judgment. Learn by doing.

### 9.2 Remove rules → collaboration (Amsterdam traffic)

- The **Alexanderplein** crossing in Amsterdam: the city **removed the traffic lights**; people started **negotiating with their eyes** and it worked (exceptions: "[jerks] and BMW drivers").
- **Dee Hock** (Visa founder): "**Simple, clear purpose and principles give rise to complex, intelligent behavior**"; complex rules give rise to **simple, stupid behavior** — "why SAFe and enterprise methodologies don't work." **"Simplify to amplify."**
- **Saint-Exupéry:** "perfection is reached not when there's nothing more to add, but when there's nothing more to leave out."

## 10. How They Actually Work

- **Sharing sessions:** longer hybrid stand-ups (~15–30 min) that roll into coding sessions.
- **Event storming** to model business processes and decide which parts AI **should** (not just could) solve.
- **Pair programming** (not mandatory — "six hours mandatory pairing is heavy; nobody does that"). Team agreement: **noise-cancelling headphones on = don't talk to me.**
- **Mob-style** ad-hoc problem solving; **coding with Claude** a lot.
- **Lean Coffee** every Tuesday afternoon — vote on topics, ~5 min each, great for sharing knowledge (e.g., a talk on **Akamai on the edge**).
- **Spec-driven development** for those who like it (write a full spec → "make a plan and go"); **different tools for different people** (Claude, Cursor…).
- **Skills:** a **test-component skill** (React tests in their own framework, not generic ones → better code) and a **push-back skill** (tell Claude to disagree when we're wrong) — leading to exchanges like "those are workers, you moron" → "loading push-back skill… no they aren't… you're right, sorry."
- Result: they're becoming **product engineers** more than code typers.

## 11. Will We Still Have a Job?

- **Yes** — with nuance. Big-tech layoffs (an **Oracle** termination letter: "after careful consideration… today is your last day") are often to **fund data centers**, not because devs are obsolete.
- Are we becoming **legacy** (replaced by data centers)? He thinks not — because of the **tech-debt reality** and because it's still **humans who solve the newly-solvable problems.** Managers say "AI will solve the tech debt" — "let it first cure cancer, then come back."
- **Productivity honesty:** his spec-writer **Francisco** isn't noticeably faster — "**I haven't seen much productivity increase**," and that's fine, because **we solve problems we couldn't before.** Coding is a way of expressing thinking.
- **Prediction:** English is imprecise; LLMs (like compilers) aren't built for it. We'll **evolve toward more concise/precise languages to talk to models** (the "caveman prompt" is already better) — future "**programmers**" may be those who talk to models in such languages. (One slide "made by Claude — I have no idea what's on it.")
- **Jason Gorman-style analogy:** a code-gen tool (LLMs included) that gets you **80–90% of the way is like a boat that gets you 80–90% across — you still need to be a good swimmer.** But we get **more, better, bigger ideas.** AI is also **highly addictive.**

## 12. 30-Second Retro / Close

- **Change is the only constant** — get even better at change (we always have been).
- **Ignite your organization/team** — you're the ones who believe in change; be the one who "parks in the wrong way in the empty lot" and others follow.
- **"Beyond the hype":** we're **not** beyond it — AI is **not a silver bullet** and probably never will be, because "no matter how fast your car, you get stuck in the city center — it's not about faster tech, it's about **solving problems**," now bigger/non-deterministic ones.
- **Take the tiniest steps** (bigger steps get stuck), **simplify to amplify**, and **never stop learning** ("if you stop learning, you're doomed — you'll work in the basement of a bank").
- LinkedIn motto: "**It's not the tool that solves the problem, it's the thinking.**" And if all else fails, "**remove your node_modules and npm install.**"

---

## People, Companies & References Cited

- **Sander Hoogendoorn** — speaker; CTO of **Collect(a)** (e-commerce); coding since 1978.
- **Edsger Dijkstra** — complexity of programming; "programming puts bugs in."
- **Dave Snowden** — Cynefin framework; no right answers in the complex domain.
- **Ward Cunningham** — technical debt.
- **Adam Tornhill** — AI accelerates tech-debt accumulation (also speaking at Craft).
- **Dee Hock** (Visa founder) — simple purpose/principles → complex intelligent behavior.
- **Antoine de Saint-Exupéry** — "nothing more to leave out."
- **Gall's Law** — complex systems must grow from simple ones.
- Companies/tools: **OpenAI/ChatGPT, Anthropic/Claude, Google/Gemini, Sora, Cursor, Sonar, Akamai, Firebase, COBOL**; their **open-source microservices framework.**
- Concepts: Cynefin domains, selfware, vendor lock-in, multi-model strategy, deterministic vs. non-deterministic, autonomy, "simplify to amplify," event storming, lean coffee, spec-driven development, skills (test-component, push-back).

---

*Video: https://www.youtube.com/watch?v=orOwOZ2WPM0 — Transcript via yt-transcript.sh; exhaustive outline generated from the full transcript.*
