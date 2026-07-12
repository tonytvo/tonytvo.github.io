---
title: "AI Won't Eat Your Stack – Randy Shoup | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Randy Shoup on why free code generation won't let us rewrite everything — the psychological (Dunning-Kruger, inappropriate generalization), economic ('free like a puppy'), and completeness fallacies behind the '$300B SaaSpocalypse', with implications (glue code is free, domain expertise wins, modular components, option value) and predictions that components, services, and smaller players win."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# AI Won't Eat Your Stack – Randy Shoup (Talk Outline)

> A **Craft 2026** talk by **Randy Shoup** — his ~**11th Craft** ("my very favorite conference in the entire world") — on why **we won't rewrite everything just because code generation is free**, and how AI merely "forces us to understand software fundamentals and remember the physics and principles of software." Format: a single-speaker talk framed as "**SaaSpocalypse 2: Judgment Day**" (a Terminator parody), moving through **fallacies → implications → predictions → Q&A**. The trigger: after **Claude Opus 4.5** launched **November 24, 2025**, ~**$300 billion** was wiped off software stocks on the fantasy that anyone could now regenerate all software.

---

## 1. The SaaSpocalypse Setup

### 1.1 The Terminator parody
- "Claude Opus 4.5 goes online **November 24, 2025**. Human decisions are removed from code generation. The LLM begins to learn at a geometric rate. It impacts the software market at **9:01 a.m. Eastern Time**, and in a panic, investors try to pull the plug."
- "That's the best I can do, and that's as long as I'm going to do it for."

### 1.2 The $300B wipeout
- Between the launch of Claude 4.5 (he notes "we're at 4.8, I'm well aware") and this talk, **$300 billion** was taken out of the software market.
- Randy's view: "an overreaction."

### 1.3 The analyst quotes (mostly not wrong)
- "A **structural re-rating of the digital economy**" — "I don't think this one is wrong."
- "A massive portion of today's SaaS is fundamentally a **user interface layered over a database**" — "not wrong."
- "Legacy companies with **hostages, not customers**, will feel more pressure than they're used to" — from **Alex** (whom he knows personally); "I love that."

### 1.4 The crazy idea behind the loss
- The fantasy: "we could just **rewrite everything** because it's so easy to generate software" — "as if we'd never generated software before and had to care for it."
- Absurd requests: "Claude, rewrite me a **warehouse logistics system**… an **ERP system**… a **globally distributed database**… a **cloud provider**… an **operating system**."
- "It's insane if you take two steps back to think that code is entirely free."

### 1.5 The apocalypse is "over" but the fallacies remain
- Software stocks are "back to where they were at the beginning of the year."
- But "these fallacies are not going to go away anytime soon" — so he names them: **psychological**, **economic**, and **completeness** fallacies.

---

## 2. Psychological Fallacies

### 2.1 Dunning-Kruger — everything looks trivial to the newcomer
- Aspect one: if you're **entirely new** to a discipline, everything seems trivial and easy — "sound a little bit like the executive and investor reactions?"
- Aspect two: once you really understand the domain, you fall into the **valley of despair** where it feels hard; confidence returns only after "years and years of deliberate practice."
- "I don't think I fully understand distributed systems after **30 years**."

### 2.2 Inappropriate generalization bias — the black swan
- Seeing one black swan and concluding **all swans are black** — broad universal conclusions from a single data point.
- Software equivalent: executives (including at his own company) **vibe-coded** genuinely useful things — but a vibe-coded **calendar app** is "**about 10 orders of magnitude**" simpler than the massive distributed systems running the world.
- Analogy: understanding a **paper airplane's** aerodynamics doesn't qualify you to understand an **Airbus A380**.

---

## 3. Economic Fallacies — "Free Just Like a Puppy"

### 3.1 Token cost
- We haven't been paying the **market price** for tokens (as **Aaron** indicated to the room the previous hour).
- Even free under a legacy "all-you-can-eat" LLM agreement, tokens are **absolutely a scarce resource** — "who has been impeded by not having sufficient tokens?"
- Mental shift: a **third-party module someone else built is like "cached tokens."**

### 3.2 Maintenance cost
- **Every line of code is not an asset — it's a cost/liability** you must maintain going forward.
- "We might have generated it in 10 seconds, but it probably lives in our systems for **10 years**."

### 3.3 Opportunity cost
- Tokens, limited cognition, agent directions, euros, and machine instances spent rebuilding an ERP could have gone to **what the company is actually about**.

### 3.4 Cognitive cost
- **Companies exist to solve a particular set of problems, not all possible problems.**
- "Code generation is free? Yep — **free just like a puppy**."

---

## 4. Completeness / Comprehensiveness Fallacies

### 4.1 What the outside API misses
- If your model is "I can regenerate your SaaS from the outside and my interactions with it," you miss **everything not in the API** — the behind-the-scenes work that makes it good.

### 4.2 An automated learning loop needs an objective success function
- (He deliberately avoids ML/AI-claimed terms, calling it an "**automated learning loop**.")
- It must tell whether a new iteration is **better or worse** — and needs a **ground truth**, or the LLM will **reward-hack**.
- **Chess/Go** have clear objective functions; "a bunch of other things simply do not."

### 4.3 It needs an evaluation loop
- A **deterministic testing mechanism**, **isolated data sets**, and **isolated environments**.

### 4.4 It needs an unexploitable environment
- LLMs are good at "finding their way through the thicket of software" (he references **mythos** and **glasswing** — AI-exploit issues he expects "in the next couple of months").
- The environment must be both **realistic and deterministic** to converge.

### 4.5 It needs convergence monitoring
- You must **monitor whether it converges** and define what "reaching the end" actually means.

### 4.6 The success function needs a (mostly) complete spec and test suite
- Seeing the outside API of **Salesforce or SAP** is "very insufficient."
- What you're reproducing is **every interaction with any input, output, and the whole solution space**.

### 4.7 Every bug must violate the spec
- The only way to detect a bug is if its wrongness is **reflected in a violation of the spec** you gave the agent.

### 4.8 Specs evolve — waterfall doesn't work
- For any interesting software the spec **evolves over time**; you can't fully specify up front (the lesson of waterfall).
- **Graves' law**: "Idiot-proof software often fails to postulate a resourceful enough idiot."

### 4.9 Convergence requires many iterations
- You'll **never one-shot** a CRM — "many, many iterations, exactly as it was for the companies you're trying to disrupt."
- Solution spaces are **high-dimensional** with many degrees of freedom; the **combinatorics work against you**.
- You're limited by your **data, time, sample size, and detectable effect size** — "you're not a CRM provider."

### 4.10 Example — cargo-cult radio dishes
- A **WWII Pacific radio dish** vs. a **reproduction** built by islanders who saw the Allies drop packages and build things.
- **Cargo culting**: build a look-alike and hope packages fall from the sky — "not even wrong, but it didn't work."

### 4.11 Example — Blue Origin's pad explosion
- **Blue Origin's rocket exploded on the launch pad** ~a week before the talk.
- It'll take **~1.5 years just to rebuild the launch pad**, let alone the rocket.

### 4.12 Example — the Apollo guidance system, 57 years on
- We landed on the moon **57 years ago** and have **every spec** — the famous photo of **Margaret Hamilton** beside a stack of Apollo software specs taller than she is.
- Those specs are "**more detailed than any of y'all will ever write**," yet we **still can't reproduce it**.
- Lost: the **years of mechanical/electrical work by machinists** — nobody wrote it down, the people are gone, and today that work is done in other countries.
- "**There's no compression algorithm for experience.**"

---

## 5. Implications

### 5.1 Glue code is free
- It's now **free to vibe-code adapters** assembling and reassembling components.
- Software that charges to "connect your email to your customer database to your notification system" has **no value** — those connections can be vibe-coded.
- The "**tireless / inexhaustible interns**" (agents) make it easy to adapt **protocols, formats, and calling conventions**.
- "**XYZ for .NET**" or "**XYZ for the Java ecosystem**" is no longer a thing — we just connect ecosystems.
- The "**plusses**" between "connect thing A to B to C" provide little value.

### 5.2 Real value — domain expertise (US sales tax)
- Real value is **domain expertise and operational experience** accumulated over time across many customers, behind a **clean, simple interface**.
- **US sales tax**: "completely Byzantine" — shockingly many variables; every government entity from national down to tiny towns extracts tax differently.
- "I'd much rather **pay someone to calculate the sales tax** than build a team or agents to solve it."

### 5.3 Real value — encapsulation and banking/payments
- Huge value in **encapsulation** (data and behavior) behind an API.
- **Paying a Bolt taxi**: the interface is dead simple (A to B, pay the driver, tip).
- Underneath, moving **1 euro (or 100 forints)** from a US bank account to the driver is "outrageously Byzantine" — issuers, offerers, and banks you don't even know the names of — all hidden.

### 5.4 Real value — operational experience, efficiency, non-functionals
- **Operational experience**: you don't worry about keeping the financial systems up.
- **Efficiency**: a domain team has strong incentive to be cheap/efficient; a side vibe-coder won't match it.
- **Non-functional requirements**: **security, scalability, compliance** — invisible at the API layer and hard to vibe-code away.

### 5.5 Code is the truth — but only at this instant
- From a breakfast conversation with **Ian Cooper**: the code **is the truth, but only at this instantaneous point in time**.
- It cannot capture the **thinking and discarded alternatives** along the way, so the **domain expertise isn't in the code** — "no compression algorithm for experience."

### 5.6 Modular components combine orthogonally
- Modularity = **mix and match**: the same finance APIs serve a **taxi ride, dinner, or buying a house**.
- **Russell Ackoff**: "A system is not the sum of its parts, but the **product of its interactions**."
- More simple, orthogonal, combinable components → more interactions → **geometric (not linear) value** — and AI makes those combinations free.

### 5.7 AI loves clean abstractions
- The agent needs a **smaller context window** for a simple component API.
- It produces **fewer output tokens**.
- Simple/orthogonal/modular means **fewer things to break and validate**.

### 5.8 "Isn't this just DDD?"
- Pointed out by "**the other Ian, from Meta**" — yes:
- **Bounded contexts** = the modular components (natural scoping boundaries).
- **Anti-corruption layers** = the adapters translating between domains, keeping them isolated with independent integrity.
- **Aggregates** = safe units of change within an environment.

### 5.9 Option value (Carliss Baldwin, IBM 360)
- **Option value** = the **opportunity but not the obligation** to do a thing (like choosing among many restaurants for dinner).
- **Dr. Carliss Baldwin** (Harvard Business School) studied how software/platforms deal in option value, using the **IBM 360**.
- Breaking the OS into **small modular chunks** plus recombination experimentation yielded an estimated **~25× value** vs. the old way.
- The formula (roughly): value scales with **# modules × # parallel experiments ÷ time-per-experiment** (faster iteration → more value; see continuous delivery), plus a **sigma** uncertainty term.
- Takeaway: when big SaaS **unbundles into smaller independent chunks**, it **releases a lot of value**.

---

## 6. Predictions

### 6.1 Components win
- We've talked about a **component marketplace for four decades** ("always the year of the Linux desktop").
- Because agents make combination/recombination **free**, expect **more, smaller modules**.
- The **assembly burden moves from vendors/consultancies to customers/enterprises** — "a lot easier to do."
- Example (from Ian Cooper): on **April 15, 2026**, **Salesforce** (~30 years old, never offered a comprehensive API) launched a **headless interface** — everything via **API, MCP servers, and a CLI**.
- For the first time, someone can build their own front-end on Salesforce — little value alone, but **big value combining/recombining Salesforce with other vendors' capabilities**.

### 6.2 Services win
- A **service** is something someone **runs on your behalf** (vs. a component you assemble).
- Market economies reward **specialization** — some are great at being cloud providers, others at databases, others at CRMs.
- Counterexamples he has the source to and has operated himself: **MySQL, Postgres, Valkey, Kafka** — "I don't want to operate them."
- **Amazon RDS** and **Confluent (Kafka)** have value being on-call and keeping it up/scaled — and **that value doesn't change when AI generates code**.

### 6.3 Smaller players win
- Progressive trend over decades: cloud, PaaS — delegate what used to need many humans (monitoring, racking machines).
- AI codegen makes **smaller teams inside and outside large companies** have outsized impact — **David vs. Goliath** ("David's going to win").
- Smaller players can **skate to where the puck is going** (hockey), especially without a huge **legacy overhang**.
- **AI-native = move faster**; per **Adam Thornhill's** earlier talk, **code-base quality "really really really matters."**
- Less legacy → **learn and iterate faster**; large multi-10,000-person orgs move slower (organizational culture).
- **Gall's law**: "A complex system that works is invariably found to have evolved from a simple system that worked."

### 6.4 Bottom line
- **Thin layers over other things aren't interesting**; **deep, highly encapsulated, complex capabilities win.**
- "The era where **software got a premium just for being software is not coming back**." (He nods to **Cusumano**.)

---

## 7. Q&A

### 7.1 Q1 — Can you illustrate the geometric value of a modular system concretely?
- Theory: it's **combinatorics** — 5 things combined with 5 others gives **~n² combinations** (precisely **n(n−1)/2**).
- Example: **eBay and PayPal** were one company (good — they grew each other), then **split in 2015** — also good, because eBay could then use **other payment providers** and PayPal could serve **other e-commerce providers** (eBay didn't capitalize, PayPal did — "another story I told last year").

### 7.2 Q2 — Deterministic or non-deterministic integration? Is AI used to write the glue or run the workflow?
- "Chef's kiss for that question" — the best use of AI's **non-determinism is to generate something deterministic**.
- Using **AI as a super-expensive cron** is both wrong (non-deterministic → a bad cron) and "**orders of magnitude more expensive for the planet**."
- Intern analogy: telling **Claude to spin up daily and run a command** is like asking his intern (his son **Sebastian**) to hand-type a command each morning — an engineer would instead **write a deterministic script**.
- AI is the **accelerant for cognition/creation**; execution has decades of cheaper, better, simpler methods.

### 7.3 Q3 — Are SaaS providers of internal tooling in more trouble (easier/lower-quality vibe coding)?
- Interpreting "internal tooling" as **tools for internal customers at your company**.
- **Mission-critical** software/capabilities stay **just as valuable — probably more**.
- **"Nice-to-have"** paid tools are the ones people **may spend their tokens to replace**.

---

## People & References Cited

- **Randy Shoup** — speaker (~11th Craft).
- **Alex** — analyst, "hostages, not customers" quote (known personally).
- **Aaron** — earlier-hour speaker on token/market-price cost.
- **Ian Cooper** — breakfast conversation ("code is the truth, but only at this instant"; the Salesforce headless-API point).
- **Ian (from Meta)** — "isn't this just DDD?"
- **Adam Thornhill** — earlier talk on code-base quality mattering.
- **Dr. Carliss Baldwin** — Harvard Business School; option value; IBM 360 (~25× value).
- **Russell Ackoff** — "a system is the product of its interactions."
- **Margaret Hamilton** — Apollo guidance software specs.
- **Cusumano** (Michael Cusumano) — nodded to on the software-premium point.
- **Laws:** Dunning-Kruger effect; inappropriate generalization bias; **Graves' law** ("idiot-proof software fails to postulate a resourceful enough idiot"); **Gall's law**.
- **Companies / tools:** Anthropic Claude (Opus 4.5 / 4.8), Salesforce, SAP, MySQL, Postgres, Valkey, Kafka, Amazon RDS, Confluent, eBay, PayPal, Bolt, Blue Origin, IBM 360, Meta, Linux.
- **Concepts:** the **SaaSpocalypse**; glue code being free; **DDD** (bounded contexts / anti-corruption layers / aggregates); **option value**; reward hacking; **cargo culting**; "no compression algorithm for experience"; components vs. services; specialization; "skate to where the puck is going"; AI-native teams; thin layers vs. deep encapsulated capabilities; **mythos / glasswing** (referenced upcoming AI-exploit issues).

---

*Video: https://www.youtube.com/watch?v=DJ0eu2EufmI — Transcript via yt-transcript.sh; outline generated from the transcript.*
