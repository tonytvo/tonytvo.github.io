---
title: "From here to there and back again - Simon Wardley | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Simon Wardley's keynote on Wardley mapping — the origin story (Sun Tzu, Boyd's OODA), maps vs. graphs, evolution and the three pattern families, anticipating change (Blockbuster inertia, Jevons paradox, cloud→serverless→AI industrialization), how AI is changing coding, the argument that 'the code is the architecture' and that coding is craft while testing is engineering, and a closing on tools/medium/language, theocracies, and sovereignty."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# From here to there and back again - Simon Wardley (Keynote Outline)

> A **Craft 2025** keynote by **Simon Wardley** — former CEO, researcher, twice voted a top-50 most influential technologist in the UK, inventor of **Wardley mapping**, and "a believer in death by PowerPoint." Only ~5–10% of the audience knew his mapping. He lays out the talk's own agenda: the **origin** of mapping → **what a map is and isn't** → **patterns** you discover from maps → **change/anticipation** (cloud → serverless → AI) → how AI is **changing coding** → **decision making** — and, "if we're very lucky," **sovereignty** (which he's "not allowed to speak about"). Delivered "the morning after the night before."

---

## 1. Origin: From Strategy to Maps

### 1.1 The clueless CEO (Fotango)
- He worked for **Fotango**, an online photo service — 16 lines of business, ~10 million users, very profitable.
- Its big problem was the CEO: "completely clueless, making stuff up" — and "I was the CEO."
- His "strategy" was copied statements like "customer focus, lead an innovative effort through agile and open source," with a few words changed.
- Afraid of being discovered, he read every strategy book and got nowhere.

### 1.2 Sun Tzu's five factors
- A Charing Cross bookseller sold him **two translations** of **Sun Tzu's *The Art of War***; the second revealed a pattern.
- The **five factors** in competition:
  1. **Purpose / moral imperative** — a reason to do something.
  2. **Landscape** — the environment you compete in.
  3. **Climate / "the heavens"** — how the landscape is changing (climatic patterns).
  4. **Doctrine** — rules/principles of organization.
  5. **Leadership** — gameplay.

### 1.3 John Boyd's OODA loop
- **John Boyd** ("the mad major"), a US Air Force pilot, created **OODA** (heavily used in political circles):
  - **Observe** the environment (landscape + climatic patterns);
  - **Orient** around the space (principles/doctrine);
  - **Decide** where to act;
  - **Act**.
- The overlap between Sun Tzu and OODA excited him — his first real idea (2005, ~20 years ago) of what strategy is — and drove him toward **observing the landscape**, i.e., maps.

### 1.4 The Battle of Thermopylae as a map
- Studying military history: his favorite is **Thermopylae** ("hot gates").
- **Themistocles** blocked the **Straits of Artemisium**, forcing ~**140,000–170,000 Persians** down a narrow coastal path where **4,000 Greeks** (including the **300 Spartans**) could defend.
- The map let you argue **where to defend** (Athens, Thebes, or the straits).

### 1.5 SWOT vs. a map
- In his own org he made decisions with a **SWOT diagram**.
- He built a SWOT of Thermopylae (strengths: trained Spartans, motivation not to be enslaved; weaknesses: ephors might delay the Spartans, a "truckload of Persians"; opportunities/threats including a "dodgy film a few thousand years later").
- Question: to communicate/determine battle strategy, would you use a **"magic framework" like SWOT** or **position and movement** as in a map? Answer: a map — "but I was using SWOTs."
- Realization (2005): he was running his business with **magic frameworks** and needed to understand the **landscape**.

### 1.6 All his "maps" were graphs
- He asked the org for all its maps and got mind maps, business-process maps, systems maps, customer-journey maps.
- Taking a **systems map** and **moving the CRM component** changed nothing — whereas moving Australia on a geographic map changes it a lot.
- **None were actually maps — they were graphs.**

### 1.7 Maps vs. graphs — the compass
- Three UK graphs (three places, two roads M1/M2) are **identical**; three maps are **all different** — the difference is the **compass**.
- In a map, **space has meaning** — it represents all the other options/paths/routes, which is why **position** matters.

### 1.8 The three characteristics of a map
1. **Anchor** (e.g., magnetic north).
2. **Position** of pieces (north/south/east/west of each other).
3. **Consistency of movement** (through a landscape of options/routes).

### 1.9 Turning a systems graph into a map
- **Anchor = the users** (business, consumers; also regulators for online photos — kept simple).
- **Needs:** business needs money (subscriptions, prints, storage); consumers want storage and prints — some overlap.
- **Chain of needs:** website → runtime → OS → compute → power; compute → data center — a **value chain** (within an org) / **supply chain** (across orgs), the same thing.
- Still a graph (anchor + position, no movement).

### 1.10 Evolution supplies the movement
- Each node is a form of **capital** that evolves through a common pattern: **genesis → custom-built → product/rental → commodity → utility**.
- Positioning nodes by **how evolved** they are adds movement → now you have **anchor + position + movement = a map**.

---

## 2. Patterns from Maps

### 2.1 The insurance-company robotics example
- ~2011, an insurance company had a compute-provisioning bottleneck (order server → goods-in → modify → rack-mount) and was about to spend **millions on robotics**, with a full business case.
- Asked what he thought, he avoided challenging their **narrative** (challenging a story implies "you're not a great leader") and instead proposed to **map it** (15 min arguing about mapping, 15 min mapping).

### 2.2 Challenge the map, not the story
- On the map, **racks** were placed as **custom-built**.
- Q: "Why are racks custom-built?" → "We have custom-built racks."
- Q: "What modifications are you doing to servers?" → "Servers don't fit our racks — remove cases, drill holes, add plates."
- Someone realized: **"Why are we using non-standard racks?"** — the entire multi-million-pound robotics project "disappeared in a puff of smoke."
- They weren't daft — they were **trapped by past narrative**: standard racks didn't exist when they started, but the system had **evolved**.
- Common failure: **optimizing process flow** without noticing the **system itself evolved**; plus not understanding users/needs/supply chain.

### 2.3 The relabeled evolution axis
- For the decision-making discussion he uses alternate labels (for practices/values): **genesis → custom/emerging → product/converging → commodity/accepted**.

### 2.4 How patterns are learned
- **Pre-mortem challenge** (map, challenge, act) + **post-mortem learning** (what changed vs. the map).

### 2.5 The three pattern families
- **Climatic patterns** — "rules of the game," heuristics applying everywhere (~**30**).
- **Doctrine / principles** — universally useful (not mandatory) patterns like "focus on user needs" (~**40**).
- **Gameplay** — how to manipulate the market to your favor (~**150**).

### 2.6 The first few doctrine principles
- **Know your users, then focus on the user need** (in that order).
- **Know the details** — understand the supply chain.
- **Understand what is being considered** — "a world of difference between a standard rack and a custom-built rack."

### 2.7 HS2 and no one-size-fits-all method
- **HS2** (high-speed rail 2); **James Finley** (former CIO) needed to build the whole railway in a **virtual world** (2012) — "cheaper to dig up a virtual world than the English countryside."
- The usual government approach (break into bounded contexts, outsource to different parties) produced **cost overruns and failures**.
- James mapped it and asked how to manage it.

### 2.8 Why one method can't fit all
- From adopting **extreme programming** org-wide (~1999–2000, before the Agile Manifesto; a fan of **Kent Beck**'s work), by ~2003–04 he learned **XP doesn't work everywhere**.
- As things **evolve**, their characteristics change (money, computing, penicillin all industrialize over time).
- So there's **no one-size-fits-all methodology**:
  - **Left (uncharted):** agile/XP — reduce the **cost of change**.
  - **Middle:** lean — learning, reduce **waste**.
  - **Right (industrialized):** formal methods / **Six Sigma** — reduce **deviation**.
- These are **polar opposites** — "no magic method," regardless of what SAFe or anyone claims.

### 2.9 HS2's outcome
- Applied per map region: **left = in-house agile; middle = off-the-shelf/lean; right = outsource or Six Sigma**.
- Delivered **way under budget and schedule**, praised by the **Public Accounts Committee** ("almost unheard of for IT").
- The technique reached the **Carbon Mapper satellite** (NASA + Planet Labs) as a communication mechanism.

### 2.10 The heresy of context
- Saying "agile doesn't work everywhere" at an agile conference = "burn him, heretic"; same at a Six Sigma conference.
- All have their **context** — "even SAFe has its context, it just doesn't know what it is."

### 2.11 Flawed contract structures
- Overlaying a bounded context (engineering) on a map: a fixed contract fails because the **right can be specified** but the **left can't** (still being learned) — guaranteeing **cost overruns**.
- One UK government project saved ~**£425 million** just by mapping ("sounds ridiculous").

---

## 3. Change & Anticipation

### 3.1 Pattern 1 — everything evolves
- Compute (~2005): app → runtime → OS → compute-as-product.
- Supply/demand competition meant compute would become a **utility**; he thought **Google**, it was **Amazon EC2** (built by friends **Ben Black, Chris Pinkham** and others in South Africa).

### 3.2 Pattern 2 — past success breeds inertia (Blockbuster)
- **Blockbuster** was first with a website, first with online video ordering, first with streaming experiments — and went **bankrupt first**.
- Netflix was just a **DVD mail-order** company.
- Blockbuster's problem: **late fees** (their profit source) required **stores** — past success created **inertia**.
- "Inertia killed them, not lack of innovation — they out-innovated everyone."

### 3.3 Pattern 3 — co-evolution of practice
- As things evolve, characteristics change, so **practice** changes.
- Compute went from **high MTTR** (months for a machine) to **low MTTR** (seconds), causing an **explosion of higher-order systems**.
- No more capacity planning / N+1 bigger machines; instead **distributed systems, design for failure, chaos engineering, continuous deployment**.

### 3.4 No choice over evolution
- Efficiency enables new innovation/needs (e.g., **Netflix**), creating new sources of value.
- Competitors who gain efficiency/speed/new value pressure you to adapt — so with cloud it was **"never if, only when."**

### 3.5 Jevons paradox — the sysadmin story
- ~2006–07, CIOs said cloud would let them fire sysadmins.
- Their IT estate of **2,000 physical servers** would **explode to ~200,000 virtual** (the average for a large corporation today).
- Sysadmins now manage a 100× larger estate (new skills) — fired, then **rehired as DevOps at more expensive fees**.
- Cited as the counter to "AI will get rid of software engineers" — "no" (returned to later).

### 3.6 Cloud investment and Canonical/Ubuntu
- 2006: invest in **new practice + new needs**; don't invest in "best architectural practice / compute-as-product."
- Running strategy for **Canonical** (**Ubuntu**), they were **3%** of the OS market vs. Microsoft and Red Hat.
- **One map, 18 months, £0.5M** → took **70% of all cloud computing** — "not geniuses; we knew where to target and used the landscape as a force multiplier."

### 3.7 The pattern repeats — serverless
- Emerging practice was eventually named **DevOps** (credit to **Patrick** in the room); compute-as-product became **"legacy."**
- By **2014** the runtime shifted to a **utility** → **serverless**, with its own co-evolution of practice (eventually **"FinOps"**) and new needs.
- Same patterns "since the industrial revolution"; the book ***The Flywheel Effect*** covers an insurance company adopting serverless.
- Saying "DevOps is the new legacy" at a 2018 DevOps conference = heresy again.

### 3.8 Gameplay and ILC
- ~150 gameplay patterns (no time). AWS's book ***Reaching Cloud Velocity*** contains **17 pages of his mapping**, including **ILC (Innovate–Leverage–Commoditize)** — how AWS exploits/reshapes industries.
- "China's government is really good at this" (but not allowed to discuss sovereignty yet).

---

## 4. AI & How Coding Is Changing

### 4.1 Simplifying the map to 2018
- Starting from **serverless → FinOps → coding environment → applications** (~2018), ignoring compute/containers/Kubernetes ("too boring").

### 4.2 Machine cognition industrializes
- **Machine cognition / machine learning** was rapidly evolving toward a **utility** (he dislikes "AI" as he disliked "cloud").
- Means a change of practice + new needs — exciting only when **combined** with other practices.

### 4.3 Conversational programming (2018)
- Based on **Nicholas Negroponte** and **Ya Freeman**: design is a **conversation between multiple design perspectives** (multiple designers, or in one head).
- **Conversational programming** = when one designer is the **machine**.
- **Alexander Simovic** built a system (presented at **AWS re:Invent 2018**, from a 2018 talk of Wardley's) that you could **converse with and it would build other systems** — the earliest conversational programming "in anger," backed by many AI services.

### 4.4 2024 — the same patterns, new names
- Conversational programming is now called **copilots / prompt engineering / "chop" / vibe** — the name is still unsettled (like DevOps before Andy/Patrick named it).
- Plus **large language models** and **large multimodal models**.
- No choice over AI (efficiency/value/speed) — "not if, but when."

### 4.5 Jevons paradox again — the vibe-coding VP
- Expect an **explosion of higher-order systems**: a VP goes home, **vibe-codes** a financial-reporting system (no idea what the code does), and on Monday **demands it go into production** — exploding the code-review burden.
- Getting rid of software engineers means **trusting the AI** — "fairly dangerous."
- His half-joke: the **UK intelligence services** should offer an independent **code-reviewing service** (e.g., for a vibe-coded nuclear-plant control system) — "we promise no back doors"; "if not the UK, then the US, or Russia."

### 4.6 Tools: the kitchen-blender problem
- Copilots and coding environments are **tools** for doing development.
- He likes tools and soup: a **blender** makes soup, but you wouldn't dig a **deep mine shaft** with one — engineering tools must be **contextual**.
- Software engineers use the **same tools everywhere** ("kitchen blenders everywhere"), and vendors say "you're bad at digging mine shafts with a blender — have one with AI."

### 4.7 The exception: tests
- The one area done right: **tests** — small tools (input/output).
- Nobody says "I've got the Acme 100,000 test kit, apply it to our app" — an online-gambling site needs **totally different tests** from an electronic-healthcare-record system.
- Yet the coding tools are "the same whether it's gambling or healthcare" — a problem.

### 4.8 Languages and non-determinism
- Moving from **deterministic code** to **non-deterministic prompts**.
- Aside: "AI hallucinates when it gets it wrong" implies it reasons when right — but **AI hallucinates all the time**; we just catch some hallucinations as wrong.

### 4.9 The medium is changing
- Symbolic instructions in **text** are shifting toward things like **code as a seed**.
- Example: a **coherent city-transport map** (built with city planners incl. from Budapest) vs. **the code** that produces it — same problem, two visualizations.
- Map talk = **objects, relationships, context**; code talk = **rules, syntax, style**.
- Every software department has **whiteboards** — the same problem discussed two ways (whiteboard context vs. screen) because the **medium differs**.

### 4.10 The code is the architecture
- The idea that AI replaces the coder is born from "create an ERD/architecture diagram + prompts → magically build the system."
- He's a **huge fan of vibe coding** (~**450 hours** of experiments) but sees real problems.
- An architecture diagram is **"a statement of belief"** — what we wish the architecture were; the **real architecture** is the code, functions, and connections.
- **"The code is the architecture."** Diagrams/ERDs/specs are **wishes/intents/beliefs**, not real unless **generated from the system**.
- **The real decision-maker and architect was always the coder.**

### 4.11 The architectural question: where do humans decide?
- Vibe coding (literally: "you build the code, I don't look at it") **hands the decision-making to the AI** — which is fine, but you must **choose where and how much you value humans** in it. That is an **architectural question**.
- On a map: **outsource** some parts ("somebody else's problem"), **vibe-code** others (prototype via prompts), and do **software-engineering + AI** on others (use AI to keep pace, but **review the code**).
- Boundaries **shift over time** as agentic AI does more checks — "probably not nuclear safety systems right now, but maybe in the future."

---

## 5. Decision Making: Coding Is Craft, Testing Is Engineering

### 5.1 The decision-making chain
- Decisions require: **assessment** (between options) ← **exploration** ← **conversation** (with a person or the machine) ← **information** ← **synthesis** ← **development experience** ← **the system**.

### 5.2 How tests make decisions (the good model)
- **Hypothesis-driven:** in TDD, the first hypothesis is "the system lacks this function" — write the test, run it, it **fails**, then build the function.
- **Systematic exploration:** many small discrete tests explore the problem domain.
- Those tests **create a model** of the system — "the best specification of a system is the test suite."
- **Generated information:** the red/yellow/green lights are **generated from the system**, not painted by hand.
- **Development experience:** a large number of **composable micro-tests** (90k–100k; some in the audience 50k; some build **without tests** — "oh").

### 5.3 How coding makes decisions (the ad-hoc model)
- Grab the **kitchen blender** (the monolith one-size-fits-all tool).
- **Inspection/synthesis:** read code, read log files, grab an **architecture diagram** wrongly assumed to reflect reality (nearly everyone has seen a diagram that doesn't match the system).
- Collect this info **manually** for "data-centric conversations" — but there's **no real model** of the system, only a probably-wrong diagram.

### 5.4 Reading code — the unmeasured cost
- Audience: **over half** their time is spent **reading code**.
- Almost no one has ever discussed **how to optimize/improve reading code**.
- "**Over 50% of your development budget is spent reading code, but you've never discussed how to optimize it — the single most costly thing we do, and we never discuss it.**"

### 5.5 Ad-hoc exploration → gut-feel decisions
- The exploration path is **ad hoc** and individual-dependent (not systematic like tests).
- It ends in a **gut-feel / experience-driven** decision; push live; sometimes it works, sometimes "go read more code."

### 5.6 The core claim
- **Coding is a craft; testing is engineering.**
- The **real engineering** in software engineering is in **testing**, not coding — yet the **real decisions are made in coding**.
- So: **make coding more like actual engineering.**

### 5.7 The fix: composable micro-tools
- Stop using monoliths; **build contextual, composable micro-tools** — apply to coding what we learned in testing.
- AI doesn't lose its role — but tool vendors ("just add a bit of AI to our tool") won't like this; "they have a lovely multi-billion-dollar industry and I don't think they do us any favors."

### 5.8 Tudor Girba's legacy-migration example
- **Tudor ("Tuda") Girba** and the **feenk** team were handed a legacy-system translation that one company had failed at over **10–20 person-years**.
- The CIO **bet they'd fail** within a year.
- **Meeting 1:** code handed over. **Meeting 2 (four weeks later):** "we finished" — they spent the **first three weeks building the tool** to solve the problem, then solved it.
- AI's role: generating **new hypotheses** and helping **build composable micro-tools** — but we're nowhere near the potential because "we're doing craft, not engineering."

### 5.9 The three takeaways
1. **Observe your landscape** ("sounds daft, but useful").
2. The most important **architectural decision** now: **where do you value human decision-making?** (Architecture is an expression of values.)
3. **Turn coding from a craft into an engineering subject.**

---

## 6. Bonus: Tools, Medium, Language & Sovereignty

> With four minutes left, the audience chose **sovereignty** over Q&A.

### 6.1 Whoever controls the medium controls reasoning
- Tools, medium, and language **control how we reason** about the world.
- Thought experiment: if one group (the audience chose "the British") controlled the **printing press, paper, and the written word**, they could refuse to print an anti-Brexit article, deny you the word "Brexit," and rename it "goodness."

### 6.2 AI theocracies
- AI systems risk creating **new "theocracies"** — dangerous to give a small group power over **how you reason**.
- Counter with **diversity of sources, critical thinking, and openness** — including **open training data** (symbolic instructions).
- Lobbyists claim open source gives "Skynet" — self-interested; "we need it open."

### 6.3 Sovereignty and the map of competition
- **Territorial sovereignty** uses a **map** and a **border**.
- **Competition** (seeking something) takes three forms: **fighting** others, **working with** others, **helping** others.

### 6.4 The automotive-industry map (DVLA, 2015→2025)
- At the **DVLA** they mapped automotive (~2015) forward to 2025 and saw it becoming **commodity-like**.
- Predicted reactions: **digital subscription models** (e.g., BMW's heated-seat subscription) — not a real worry.
- The worry: **route management** — in self-driving cars, **gold members** get priority and **ordinary members "get out of the way."**
- This **embeds social inequality** into transport (in a flood, "the poor don't get out" → riots) — government must think about it; "the market is a bunch of idiots."

### 6.5 Values embedded in training data
- Users are members of **society**, which has **values** embedded in the **simulation models / training data**.
- The **trolley problem**: kill five or one? What if the one is a **gold member**? — some societies would "protect the gold member," not all — these values get embedded in the systems (known since 2015).

### 6.6 We lack maps for our key spaces
- The biggest problem: there are **no maps** for our **technological, economic, social, and political** spaces — "we don't really have map rooms."
- Some governments are excellent at this — **China "spectacularly good,"** as the US is discovering — "you don't get into a supply-chain war with someone who actually understands the supply chain."

---

## People & References Cited

- **Simon Wardley** — speaker; former CEO (Fotango), researcher, inventor of Wardley mapping.
- **Sun Tzu** — *The Art of War*; the five factors.
- **John Boyd** ("the mad major") — US Air Force pilot; the OODA loop.
- **Themistocles / the 300 Spartans** — Battle of Thermopylae (map exemplar).
- **Kent Beck** — extreme programming (Wardley a long-time fan).
- **James Finley** — former CIO, HS2 virtual-world build.
- **Ben Black, Chris Pinkham** — built Amazon EC2 (in South Africa).
- **Nicholas Negroponte, Ya Freeman** — design-as-conversation basis for conversational programming.
- **Alexander Simovic** — built the 2018 conversational-programming system (AWS re:Invent 2018).
- **Patrick** (and Andy) — credited with the DevOps name; present in the room.
- **Tudor ("Tuda") Girba** / **feenk** — the thousands-of-contextual-tools legacy-migration example; presenting after this session.
- **Companies / products:** Fotango; Canonical/Ubuntu (3%→70% of cloud); Microsoft, Red Hat; Amazon/AWS (EC2, *Reaching Cloud Velocity*, ILC model); Google; Blockbuster vs. Netflix; BMW (subscription seats); DVLA; NASA + Planet Labs (Carbon Mapper satellite); HS2 (Public Accounts Committee praise).
- **Books:** *The Art of War*; *The Flywheel Effect* (serverless adoption); *Reaching Cloud Velocity* (AWS).
- **Concepts:** maps vs. graphs (anchor / position / consistency of movement; the compass); value/supply chains; evolution (genesis → custom → product → commodity/utility; emerging/converging/accepted); pre-mortem challenge + post-mortem learning; three pattern families (~30 climatic / ~40 doctrine / ~150 gameplay); no one-size-fits-all method (agile/lean/Six Sigma by map region); flawed fixed-price contracts on the uncharted left; everything evolves; past success breeds inertia; co-evolution of practice; Jevons paradox; MTTR collapse; DevOps/FinOps naming; ILC (Innovate–Leverage–Commoditize); conversational programming; copilots/vibe/LLMs/LMMs; "AI hallucinates all the time"; deterministic code → non-deterministic prompts; the code is the architecture; where you value human decision-making as the key architectural question; coding-as-craft vs. testing-as-engineering; composable micro-tools; tools/medium/language controlling reasoning; AI "theocracies"; open training data; territorial sovereignty; route management and embedded social inequality; the trolley problem; missing maps for technological/economic/social/political spaces.

---

*Video: https://www.youtube.com/watch?v=w6WNitaeOPs — Transcript via yt-transcript.sh; outline generated from the transcript.*
