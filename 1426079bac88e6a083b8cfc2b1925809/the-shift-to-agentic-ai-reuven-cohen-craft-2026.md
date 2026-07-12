---
title: "The Shift to Agentic AI – Reuven Cohen | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Reuven Cohen's 40-year arc from a software-less Tandy and shareware to agentic engineering — the compression of the build cycle, tools that 'call you back', autonomous harnesses and agent swarms producing 50M+ lines of code, a background 'dream cycle', and a cloudless, GPU-free contrastive-vector stack (RuVector/RuView) that senses the physical world for sovereign, ambient AI."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# The Shift to Agentic AI – Reuven Cohen (Talk Outline)

> A **Craft 2026** morning keynote-style solo talk by **Reuven Cohen**, a self-described **"agentic engineer"** for almost four years (a title that once drew "the craziest thing I've ever heard of"). The presentation itself was **built in Lovable**. He frames his ~40-year career — from an 8-year-old with a software-less Tandy to today — as **"coming full circle"**: the modern agent console looks almost exactly like the Unix systems of the 1980s. The talk threads chronologically: (1) a career of "build and share" (shareware → cyber designer → Napster → Infrastructure-as-a-Service → CloudCamp → US government / Microsoft / EY), (2) the compression of the build cycle across computing waves, (3) agentic engineering, harnesses, and agent swarms, (4) the "dream cycle" and GitHub as a social network, (5) infusing AI into the physical world with contrastive vector intelligence (RuView / RuVector), (6) determinism vs. probabilism and sublinear loops, (7) the human as the highest-order model, (8) the shift to sovereign, cloudless AI, (9) the Agentics Foundation, and (10) closing reflections on reinvention (and his company Cognitum).

---

## 1. Framing: An Agentic Engineer Who Came Full Circle

### 1.1 The presentation built in Lovable
- He opens noting the whole presentation was **built in Lovable** — "hopefully it'll work correctly."

### 1.2 "Agentic engineer" for ~4 years
- He has called himself an **agentic engineer** for almost four years.
- Early reaction to the title: "that is the craziest thing I've ever heard of."

### 1.3 Two apps, 40 years apart
- On screen: the app he built at **age 10 in GW-BASIC**, and the app he's best known for now.
- That app was formerly **Cloudflow**, now **Roo Flow** — a **harness for building agentic systems around Claude Code**.

### 1.4 Starting young gives perspective
- Building since age 8 gives perspective on what can be built and how change affects the industry.
- He feels he's been "preparing for this moment" his whole life and saw opportunities earlier than most.

### 1.5 Full circle to the 1980s console
- Modern agent work in a **console** looks "almost exactly" like what he built in **1987**.
- We've gone from graphical/Windows UIs and web UIs back to an environment that looks like a **1980s Unix system**.

---

## 2. A Career of "Build and Share"

### 2.1 The software-less Tandy (1987)
- His parents bought him his first computer, a **Tandy (~1987)** — with **no software**.
- Forced into a paradigm: he had to **invent things to run** on it.

### 2.2 Discovering shareware
- He learned others were sharing applications.
- Via his local magazine (**PC World**), he filled out the back and **shared his own code** to receive theirs — this was **shareware**.
- To get software, you had to give software — a formative introduction to computing.

### 2.3 A democratized, open culture before open source
- The sharing culture democratized access to technology — "free and open" **before open source** became the predominant delivery mechanism.

### 2.4 Cyber designer (1994)
- In **1994** he chose a different path than his high-school peers: to be a **"cyber designer."**
- That meant building **dynamic applications** before the world had figured out what the internet was.
- He constantly had to **evolve**, moving from BASIC to HTML and other environments.

### 2.5 Napster interface (1999)
- He was an early designer of the **Napster interface** in **1999** — "a whole fiasco as well."

### 2.6 Infrastructure-as-a-Service (2004) and hypervisors
- Around **2004** he saw the opportunity in **hypervisors** (then emerging) to apply a **dynamic, utility approach** to infrastructure.
- This gave him the **"Infrastructure-as-a-Service"** moniker — **years before "cloud" was a thing**.

### 2.7 Open-sourcing on SourceForge → AWS calls
- He **open-sourced it on SourceForge** (the "early predecessor to GitHub") and it **blew up**.
- His **open-source project of the month** was noticed by **AWS**, who reached out to integrate it into their system.
- Lesson: putting software openly into the ecosystem makes **opportunities call you back**.

### 2.8 CloudCamp: 300+ cities
- As an early open-source/cloud advocate, he **co-founded CloudCamp**.
- It grew to **more than 300 cities** globally and introduced concepts, people, community, and like-minded development processes.

### 2.9 Working with giant organizations and the US government
- Large companies (including AWS) saw his software and asked him to help implement it.
- He got a call from the **US administration** asking him to help with **their website** — a door-opener (he's **Canadian**).

### 2.10 The template
- The through-line: **put software openly into the ecosystem, and opportunities come back to you.**

---

## 3. The Compression of the Build Cycle

### 3.1 CTO of Microsoft exploring AI integration
- He describes being **CTO of Microsoft** at the time, exploring how Microsoft could **integrate AI** into their ecosystems.

### 3.2 Traditional programming is long and structured
- Traditional programming: define a **PRD** and structures, assemble a **team** to implement — "a long, drawn-out experience."
- Enterprise applications traditionally took **months if not years**.

### 3.3 The shift he saw
- He saw a shift in **the way you program**: the ability to **contract** the time to build each piece.

### 3.4 ChatGPT / Claude Code compress build time
- Something like **ChatGPT** or, more recently, **Claude Code** compresses the time to build systems.

### 3.5 Magnifying the individual
- The compression **magnifies an individual** to the output of what would have taken a larger team.

### 3.6 Each computing wave compresses further
- **Personal computing** — build applications for yourself.
- **The web** — share with a larger pool of people online.
- **Mobile** — carry the application into the greater world.
- **AI** — go from **idea to implementation almost instantly** ("a game changer").

### 3.7 Four years of experimenting and instant sharing
- Over the last four years he's focused on building the things he imagines and **sharing them almost instantly** with a global pool of users, contributors, and companies.

### 3.8 The $1.4B EY AI infrastructure project
- He built one of the first and largest AI-world infrastructures for **Ernst & Young** — a **$1.4 billion project**.
- It showed how this could be implemented in large organizations and allowed **automation** of processes — "just type it in" and make it available quickly.

### 3.9 From "a tool you call" to "a tool that calls you back"
- The shift: from a tool you call, to a tool that **calls you back** — giving answers **applicable to the specific problem** being solved.

### 3.10 Pushback and the disruptor's role
- Going into any organization (EY included), the **status quo** treats someone like him as **very disruptive**.
- He had to both **articulate the opportunity** and **teach them how to build** these applications.

---

## 4. Agentic Engineering & the Harness

### 4.1 What "agency" means
- **Agency** = a system's ability to work with **little to no human oversight** or operational context.
- I.e., a system that can be driven and operated **autonomously**.

### 4.2 OpenAI VIP program and Codex (~early 2022)
- Building autonomous systems around **early 2022**, he worked with **OpenAI as part of their VIP program**.
- He saw the opportunity to use the then-**Codex** platform in his workflow.

### 4.3 Shifting to an automated harness
- He moved from **manual implementation** to an **automated harness** wrapped around the ways he traditionally built applications.

### 4.4 What the harness does
- The harness lets him **build, test, and deploy** in a **fast, iterative** pattern.

### 4.5 The drawback of rapid speed
- Building at rapid speed, he pushed code as fast as possible.
- Two things happened: many projects **faded away**, while some **picked up steam**.
- He learned from **community interaction** (GitHub and others) what worked and what didn't.

### 4.6 50 million lines of code
- Over ~four years he's put out **more than 50 million lines of code** — "an astronomical amount."

### 4.7 "Understanding without seeing"
- No single human can understand/interact with that much code.
- So he built systems to **understand without seeing** — now a critical part of his applications.

### 4.8 Claude Flow → autonomous swarms 24/7
- His more popular platform, originally **Claude Flow**, provides a framework for **autonomous development**.
- **24/7**, multiple agents work as a **swarm**.

### 4.9 How the swarm differs from a human team
- The swarm works like a team, but with a critical difference: agents can **communicate, collaborate, and contribute** to one another's development process.
- He can **adapt** it as he builds; the system seems to **speed itself up** — an increasing velocity of both code development and empowerment to build the unexpected.

---

## 5. The "Dream Cycle" & GitHub as a Social Network

### 5.1 The background "dream cycle"
- Every morning he has a **"dream cycle"** running in the background.
- It looks for **novel new capabilities** by scanning the **most recent research**.
- It targets applications that have **never been done** but straddle the line between **possible and impossible**.

### 5.2 Iterate and publish
- He iterates on those, develops them, and **publishes to the internet**.
- This "collects a like-minded group" who share his passion for building, sharing, and discovering.

### 5.3 The velocity "rocket"
- The result is a velocity increase — a "rocket" of new applications that opened access to companies and business opportunities.

### 5.4 From solo developer to a company
- He is essentially a **solo/independent developer** but has recently **started a company** for these technologies.

### 5.5 Roo Flow's traction
- **Roo Flow** has more than **50,000 stars**; on a good week, **multiple millions of downloads**.

### 5.6 GitHub as social network, code as content
- GitHub has become a kind of **social network**; **code is the content** — "the TikTok of code generation."
- The key: these applications straddle **what was possible** and **what was never done before**.

---

## 6. Contrastive Vector Intelligence: Infusing AI Into the Physical World

### 6.1 RuView — sensing the world from Wi-Fi
- **RuView** ("half the world sees RUV") is based on research from **Carnegie Mellon University**.
- It takes information around us from **Wi-Fi signals** to detect **heartbeats, body pose**, and other information "beyond our comprehension."
- It translates that into something **visible and understandable**; ~**70,000 stars**.

### 6.2 AI beyond the internet
- His opportunity: AI sitting **beyond the structure of the internet** — "in a world where anyone can vibe anything."
- Not about building the next SaaS tool, but **integrating AI into the everyday fabric of society** — light, ephemeral, cost-efficient.

### 6.3 From zeros and ones to contrast
- 40–50 years of technology has been based on **zeros and ones** (mostly a one).
- His **contrastive approach** looks not at the information you **see** but the information you **don't see**.

### 6.4 The 8-billion-agents problem
- If you created an agent for every person — **8 billion people** — even at **$1/person/month** that's **$8 billion/month** — "not going to happen."

### 6.5 The opportunity is in the void
- Using a **hyperbolic space** structure sitting at a **confluence between a vector space and a graph overlay**, he measures **what isn't happening**, not what is.
- "The opportunity is in the void" — the system sees the **differences** as information changes, with **reinforcement** forming the basis of the graph.

### 6.6 Radically lower power — runs on an ESP32
- The approach uses **significantly less power and compute** and **requires no GPU**.
- What was computationally and electrically heavy can now run on a **nominal device like an ESP32** — sensing unseen Wi-Fi signals and heartbeat fluctuations in a room.

---

## 7. The RuVector Stack

### 7.1 Hyperbolic vectors vs. the Euclidean plane
- At the bottom of the stack: **RuVector**, built on a **hyperbolic vector**.
- A traditional vector works on a **Euclidean plane** — "like a piece of paper," focused in the middle and blurred at the edges.
- A **hyperbolic** vector is a **center point expanding in every direction**, giving a **native hierarchy**.

### 7.2 Graph / hypergraph overlay
- On top he applies a **graph structure** creating interconnected relationships of all the information.
- Uses a **hypergraph** (multi-dimensional graph) to relate the information.

### 7.3 Graph neural network for attention/reasoning
- On top of that, a **graph neural network** provides an **attention mechanism** — what matters, and "how can I reason upon my own reasoning."
- It does **not** require a **monolithic AI**; it's a **lightweight graph** playing between the vector mathematics.

---

## 8. Determinism vs. Probabilism

### 8.1 The problem with probabilistic language models
- Most language models are based on **probabilism** — a GPU running dense mathematics to give the **one most-probable answer**.

### 8.2 Some domains need absolutes, not probabilities
- Many things don't require probability; they require **absolutes**.
- For a **medical/math system**, you don't want the most-probable answer.
- You want a system that can either say **"I don't know"** or give an answer via a **specific, reproducible series of steps**.

### 8.3 Adapting over time, not pre-trained
- His structure **adapts over time** rather than being a **moment of pre-training** (as most models are).
- The structure adapts **in parallel to the world it sits within**.

### 8.4 Sublinear-time loops (< 1 ms)
- Orchestration runs in very tight loops in **sublinear time** — agents running in **sub-one-millisecond** increments.

### 8.5 Two quirks of very short time frames
1. **Less energy** — the shorter something exists, the less energy it uses.
2. **Less entropy** — the shorter something exists, the less **noise/chaos**; enabling **signal separation** from noise.

### 8.6 Why looping matters in agentic systems
- Agentic systems loop to ask **"is it right? is it wrong? should I move on?"**
- These loops needn't run for hours/weeks — they can be **ephemeral, tightly constrained moments**.
- Each loop understands its own single-problem context, then **communicates to other loops/agents** that adapt and learn quickly.

### 8.7 Separating signal from noise in the room
- Example: Wi-Fi signals can **separate all the noise in the room** — e.g., separate the **cell phone in your pocket** from your **heartbeat and breathing pattern**.
- Slight permutations as the Wi-Fi signal returns from transmitter to processor are rendered as a **graph**.

---

## 9. The Human as the Highest-Order Model

### 9.1 The graph is the critical part
- The graph enables information to be **separated, understood, and acted upon** quickly.

### 9.2 Model choice is secondary to escalation
- In his structure, the **highest-order model is a human**.
- Choosing a **Claude model, Codex, an o-series, or Kimi K2** is **secondary** to the ability to **escalate**.

### 9.3 What the system decides to escalate
- The system decides whether to **send to another agent**, **send to another person**, or **fetch additional context** from a tool/resource it has access to.

---

## 10. Sovereignty: Cloudless, Owned AI

### 10.1 From cloud/online guy to sovereign
- He started in the online world — ran a **BBS** as a kid, involved in early online tools.
- Over the last couple of years he shifted to a **sovereign environment**: AI that **doesn't need the cloud**, sitting in an **owned, fully controlled** environment.

### 10.2 The future balance
- The evolution likely balances a **small group of very large infrastructure providers** (the Amazons) against a **new opportunity**: building **anything on your own technical stack, independent of a network**.
- The stack is moving from traditional approaches to ones **owned and controlled by an individual**.

### 10.3 The Agentics Foundation
- ~two years ago, a group created the **Agentics Foundation**, focused on **adoption of agentics** and on individuals who can create and operate **independently of any central organization**.
- It grew quickly to **dozens of cities**; they just had a **packed event in Budapest**.
- It's a **learning-together** community exploring opportunities and challenges.

---

## 11. Closing Reflections

### 11.1 It's not about 50 million lines of code
- The real lesson isn't the 50M lines — it's doing things in the **least amount of code**, in the **most practical, cleanest, lightest, most efficient** way.

### 11.2 Constant learning
- His takeaway: he's **constantly learning** and applying it — excited each morning to see what contributors and his **AI built overnight** and how to build "the next big thing."
- The very **act of creating and sharing** is what lets him apply applications in novel ways.

### 11.3 Cognitum
- His company is **Cognitum** — a device that infuses these technologies into business applications: **medical, IoT, various devices** that **learn in proximity** to the world.
- Enables **ambient AI** infused into "just about everything" without a **GPU or cloud**.

### 11.4 Proactive, not reactive
- Traditional technology is **reactive**; AI lets systems be **proactive** — listen, understand, and **act before something matters**, adapting as the world changes.

### 11.5 Understanding the individual, not everyone
- The technology should understand **me as an individual** — even a person's **unique electromagnetic signature** — rather than everyone/everything.

### 11.6 Reinvention, not job loss
- Three decades of being "in front of things" (cloud, early AI environments via Roo Flow), a culmination of 40+ years.
- He does **not** see a "dark moment where we all lose our jobs" — he sees an opportunity for **reinvention**.
- **Agents as an augment to our own capabilities** are the exciting inflection point; the opportunities are "far beyond anything I've seen in my career."

---

## People & References Cited

- **Reuven Cohen** — speaker; self-described "agentic engineer," ~40-year career; Canadian.
- **Companies / orgs:** Lovable (built the deck); Microsoft (he cites being its CTO at the time); AWS (found his SourceForge project); Ernst & Young (EY, $1.4B AI infrastructure project); OpenAI (VIP program, Codex); CloudCamp (co-founded, 300+ cities); the US administration (website help); Agentics Foundation (co-created, dozens of cities, Budapest event); Cognitum (his company); Carnegie Mellon University (RuView research inspiration).
- **His platforms / projects:** GW-BASIC (childhood app); shareware (PC World); Napster interface (1999); early Infrastructure-as-a-Service on SourceForge (2004); Cloudflow → Roo Flow (harness around Claude Code, ~50,000 stars, millions of weekly downloads); Claude Flow; RuView / RUV (~70,000 stars, Wi-Fi sensing); RuVector (the underlying vector stack).
- **Hardware:** Tandy (~1987); ESP32 (GPU-free edge device).
- **Models mentioned:** Claude models, Codex, an "o" series, Kimi K2.
- **Concepts:** coming full circle to the 1980s console; "build and share" as a career template; compression of the build cycle across computing waves; "a tool you call" → "a tool that calls you back"; agency / autonomous harness; agent swarms (24/7, collaborating); "understanding without seeing"; 50M+ lines of code; the background "dream cycle"; GitHub as social network / code as content; contrastive vector intelligence ("opportunity in the void"); hyperbolic vectors vs. Euclidean plane; hypergraph overlay; graph neural network attention; determinism vs. probabilism; "I don't know" and reproducible steps; sublinear (<1 ms) loops; energy/entropy reduction and signal separation; the human as the highest-order model; sovereign / cloudless / GPU-free ambient AI; proactive-before-it-matters; reinvention vs. job loss.

---

*Video: https://www.youtube.com/watch?v=DUyccVFjlz0 — Transcript via yt-transcript.sh; outline generated from the transcript.*
