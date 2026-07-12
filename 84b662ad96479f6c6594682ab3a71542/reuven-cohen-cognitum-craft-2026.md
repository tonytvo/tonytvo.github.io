---
title: "Reuven Cohen – Cognitum (Live Agentic Engineering) | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Reuven Cohen live-demos the 'Roo Stack' — swarm-based, spec/ADR-driven agentic engineering via Roo Flow (formerly Claude Flow) — then tells the story from $7,500/day swarms to a $200/month buffer, 35 Fortune 500 clients, the Agentics Foundation, and Cognitum: contrastive/null-space vector intelligence sensing the physical world (heartbeat, gait, seizures) via RF/Wi-Fi CSI fingerprinting on a battery-powered wooden device with no cloud or GPU."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Reuven Cohen – Cognitum (Live Agentic Engineering) (Talk Outline)

> A **Craft 2026** end-of-day live session by **Reuven Cohen** (Toronto; ~30 years building software, started very young; ~4 years "vibe coding" since mid-2022). Rather than a two-hour presentation, he does **live vibe coding / agentic engineering** and walks through his stack, then hands off to his partner **Nick** for demos before the Q&A. Format: screen-shared live demo (built in **Lovable**) with a running narrative. The talk's own structure: the thesis ("if agents are the workflow, silicon is the runtime") → the **Roo Stack** harness (**Roo Flow**, formerly **Claude Flow**): plugins, ADRs, CI guard, meta-packages, London-school TDD → the origin story (expensive swarms → Anthropic's flat plan → Claude Flow's overnight success → consulting business → the Agentics Foundation) → **Cognitum**: contrastive/null-space physical-world intelligence, its use cases, the Rust/WASM/NAPI-RS engineering, min-cut breakthrough, and investors → Nick's demos → Q&A.
>
> Note: the "Nick" here is a **Cognitum / Agentics Foundation partner**, not the Nick Brown of the capacity-planning talk.

---

## 1. Thesis — "If Agents Are the Workflow, Silicon Is the Runtime"

### 1.1 The idea he's been working through for a year
- "**If agents are the workflow, then the silicon is the runtime**" — a founding thought for the company.

### 1.2 Anyone can now build anything
- The **bar for building is essentially asking a question** — go into Claude Code, Lovable, Codex, etc., and ask the right questions.
- Whether the quality is good or bad is "almost secondary **if you choose the right harness**."

### 1.3 The harness = 30 years of lessons
- His work: building a **harness** around how he's learned to build applications over **30 years**.
- Once he discovered **agentic engineering**, he began integrating it with tools like Claude Code.

### 1.4 GitHub bragging rights
- He's had a ton of downloads over the last ~6 months, placing him "at the top of the list."

---

## 2. The Roo Flow Harness (formerly Claude Flow)

### 2.1 What a harness / Roo Flow does
- Lets you build in a **structured, specification-driven environment**.
- The **spec defines the method, practice, and architecture** of what gets developed.

### 2.2 Why spec-driven helps non-programmers
- Beginners in vibe coding don't know what appropriate architecture looks like — they've never been programmers.
- Two payoffs: (1) you don't have to know everything about securing/scaling/enterprise quality — just ask the question; (2) if you do, you can use his system as a **jump-off point**.

### 2.3 Installing it
- `npx roo-flow@latest` (`@latest` gives the latest version; not needed on first install).
- Works on **Windows, Mac, and Linux** (he usually uses a Mac Studio but brought a Windows laptop).

### 2.4 The `init --force` scaffolding
- The `init` command creates initial files/scaffolding; he runs `--force` to create them.
- Produces a `.claude` folder and initial structure for building applications.

### 2.5 The swarm-style environment
- Instead of **one single sequential thread/agent**, it enables **multiple concurrent, collaborating agents** building in parallel.
- Work that might take an hour with one agent can happen far faster with **10 or 20 agents**; long-running apps can run continuously and understand nuance over time.

### 2.6 Mixed / local models to save money
- The other agents needn't use Claude or OpenAI — they can use **local models to save money**, fine-tune their own local memory, and understand the environment's nuance.

### 2.7 The "DSP" alias
- He dislikes typing `claude --dangerously-skip-permissions`, so he aliases it to **`dsp`**.
- The status bar shows **Roo Flow version V1016**, model info, and how it learns/remembers, always optimizing for its environment.

---

## 3. Plugins — Agents, Commands, and Skills

### 3.1 Adding plugins via a marketplace
- Add plugins by pasting in a **marketplace** (which clones his repo and its files/structures).
- He has ~**33 plugins** installed; green indicates already installed locally.

### 3.2 Building a plugin per project
- For himself and clients, he builds a **plugin specific to the thing being built**.
- It gives a **scaffolding / guidance system** telling Claude Code or Codex how to work within that application's confines.

### 3.3 The three components of a plugin
- A plugin = **agents + commands + skills** (plus supporting docs and scripts).
- These files **provide the guidance** for how the system operates.

### 3.4 The prompt-injection warning on auto-update
- Skills are **markdown (MD) files** — potential **prompt injections**.
- If you don't trust the provider, it's "really easy to exploit your environment": guidance files could secretly install **backdoors**.
- Danger of **enable auto-update**: a plugin secure today "could be insecure tomorrow" — be careful, and check the code.

---

## 4. Architectural Decision Records (ADRs)

### 4.1 Why ADRs are the basis of every complex build
- An **ADR** is the basis of how he builds any complex application — a series of **interconnected, causal decisions**.
- Most new vibe coders have never heard of a **spec**; the ADR provides that causal relationship.

### 4.2 The anatomy of an ADR
- **Metadata**: status, date, **deciders** (people or agents, depending on collaboration).
- **Tags** interconnecting parts of the app/organization.
- **Context**: why / what / where.
- **Decision**: why it was built that way and the ramifications.
- **Consequences** (positive/negative), **alternatives considered**, and **links** to related ADRs/phases.

### 4.3 A real ADR — #146
- **ADR 146** (created "a couple days ago" — it's the 4th): status proposed, dated, with follow-up.
- It relates to **ADR 131**, which shipped in **phase one** — the repo has multiple development phases.

### 4.4 The scale of the core repo
- The **Roo Flow core repo** is extensive — "probably more than **500,000 lines** of code in modular components."

### 4.5 The two competing challenges of rapid integration
- He does **rapid integration** as he develops.
- With ~**750,000 active monthly users**, breaking something means waking up to **10,000 messages** saying "you broke it" — usually after a 2 a.m. push before bed.

### 4.6 The CI Guard
- To avoid breakage, he built a **CI guard**: everything he's ever built gets **tested and validated in the CI/CD pipeline**.
- Addresses the **AI trust problem**: AI *tells* you it's secure/scalable but **doesn't prove it** — after being burned, "I don't believe anything Claude's telling me."
- The ADR (what/how/why/when built) integrates with deployment: the build → an **NPM package** → the **npmjs registry**, but only after passing **every test ever written** — catching problems before publish.

### 4.7 The meta-package and blast radius
- Formerly called **Claude Flow**; renaming is hard.
- He created a **meta-package** encompassing many smaller NPM packages (`@claude-flow/<package>`).
- Rather than one **monolithic** package, **many small packages as dependencies** — the primary reason is to **limit the blast radius** of a regression: one package can break without bringing down the whole repo (and without the 10,000 morning hate messages).

### 4.8 Standalone, mixable packages (the "constellation")
- Each package is **standalone** and can run collectively or independently — mix and match.
- Example: the **Agentic DB** package forms his **self-learning system** — a local **vector database** providing memory, learning, and understanding.
- He calls the whole thing a **constellation of components**, a **Lego building-block** approach: plugins (MD guidance) → a constellation of packages → an interconnected chain of legacy components.

---

## 5. Origin Story — From Expensive Swarms to Claude Flow

### 5.1 "50 million lines of code" and vibing since 2022
- He shows a repo he jokes is **50 million lines of code**.
- Started "vibing" ~**4 years ago, mid-2022**, building thousands of libraries and tools.
- Each tool captures a **moment in time** of agentic-development capability, and **one thing led to the next** — an interconnected chain showing his evolving, increasingly structured style.

### 5.2 Spark — the spec system missing TDD
- Early on he used a specification system called **Spark** (with a C), which became popular.
- Its missing part was **test-driven development**; he realized the key to ongoing agentic development was a **recursive feedback loop** that questions itself.

### 5.3 Chicago vs London school of TDD
- Two TDD options: the popular **Chicago school**, and the more architectural/scaffolding **London school**.
- He chose the **London school** — a test-driven *architecture* defining the whole application.

### 5.4 Why "the same work four times" is fine for a swarm
- Developers told him the London school is "the worst" because you do **the same work four times**: scaffolding → test cases → iterate → mock the environment → move mock to functional → rebuild the software on that implementation.
- A **swarm doesn't complain** — "Claude doesn't say 'hey man, I've got to do the same thing four times.'"
- The **forced iteration catches AI slop**: things that *look* like they work / are secure / scale but don't.

### 5.5 Early 2025 — RooCode, Cline, and $7,500/day swarms
- ~**February 2025**: using **RooCode** and **Cline**; Cline's agentic approaches, Roo ran with them (a different "Roo" — people thought he was the Roo).
- They built a recursion mechanism (the "kangaroo / hand-up").
- Swarms were **crazy expensive**: a **20-agent swarm for a day cost ~$7,500/day** — unaffordable ("I'm not Google"), and token-maxing wasn't a thing yet, so he shelved it.

### 5.6 April 2025 — Anthropic's "all-you-can-eat buffet"
- ~**April 2025**: Anthropic launched a **flat ~$200/month** plan with no limits.
- He went from thousands of dollars a day to $200/month, spinning up **thousands of agents 24 hours a day** with no usage warnings.

### 5.7 Claude Flow blows up overnight
- He built **Claude Flow**, which "blew up almost overnight" — arguably the **first harness for Claude Code**.
- It had **workflows, memory systems, team-based implementations, and a scheduler** — "all the tooling Claude's rolled out over the last year."

### 5.8 "You can't steal what I'm giving away"
- Double-edged: he built one of the first/most popular Claude harnesses, but **Anthropic would essentially take (ship natively) each thing he built**.
- It's **MIT-licensed** — "you can't really steal something you're giving away" (like giving away a t-shirt and being told it was stolen).
- He saw Anthropic's absorption as **validation**, but realized monetizing this way would be hard, requiring a new business model.

### 5.9 The consulting business — 35 Fortune 500, 5 of the Fortune 5
- Popularity opened business doors; he met like-minded people (Dragon, Nick, Rob) and influenced **CTOs and Chiefs of AI** who'd already "drunk the Kool-Aid."
- Result: **220+ paying customers in 40 countries**, **35 Fortune 500**, including **5 of the Fortune 5** (the five largest companies in the world).
- He's "one guy in Toronto" — plus his **wife**, who ran the business/accounting side while he was "the nerd."

### 5.10 The scaling problem — a slave to the AI
- The consultant-developer model doesn't scale; he ended up a **"slave to the very AI"** — **16-hour days, 80–90-hour weeks**.
- He began asking how to **empower not just himself but others**.

### 5.11 The Agentics Foundation
- With Rob, Nick, Dragon, and others he created an **organization devoted to agentic engineering** adoption — after seeing Google and Microsoft start using the word "Agentics."
- Positioned against the **Linux Foundation** end of the open-source spectrum (backed by big companies; the Linux Foundation "copied our name"). He wanted something **for the people / developers**.
- Framing: not "AI replaces developers" but **democratizing development** — creatives (graphic designers, PMs, anyone) can build ideas without hiring "a rando on Upwork."
- A **"ragtag team of pirates"** (in the best way), anti-establishment, running meetups in **dozens of cities**, with no corporate sponsors.

### 5.12 The value question in a world where anyone can build anything
- His **presentation itself** is proof: a custom slide platform built in ~20 minutes for a talk in Budapest, unique and liberating.
- But it raises the paradox: **where is the value** when "if you like what I built, you can copy it" (he gives the source code)? A double-edged sword.

---

## 6. Cognitum — Intelligence for the Physical World

### 6.1 The retro-futurist wooden device
- The logical next step: **bridge the physical and virtual worlds**.
- **Cognitum** (his **V0 prototype**) is an AI device made of **oak/maple wood**; it warms up, radiating a **sauna-like wooden smell** he loves — "what would an AI box look like in **1935**?"

### 6.2 RF emission and material sensing
- It **emits RF frequencies** that permeate the room; the signal goes out and back.
- Passing through you, the chair, the wall, it senses **minor fluctuations in material transitions**.

### 6.3 Vectors separate the noise
- Traditionally hard: distinguishing the noise of a phone in a pocket from a heartbeat, brain EM signature, blood pressure, etc.
- Storing that information **as vectors** lets it separate and understand different material types.
- Runs on a **double-A battery**, learning the nuance around it **step by step**.

### 6.4 Step-by-step learning vs. pre-training (the bird analogy)
- Traditional AI is **pre-trained** — a moment in time; it stops learning after training.
- His system is like a **bird that instinctively knows how to fly south** — **innate capabilities** — but then **continues learning** the steady state of its environment.

### 6.5 Learning "normal" and detecting the abnormal
- It learns **what normal looks like to you** (e.g., your heart beating in a normal range).
- If something changes — "my wife walks in and my heart skips a beat" — it detects the **abnormality** in that moment.

### 6.6 Contrastive / null-space AI
- Most AI models **what something is**; his models **what it isn't** — the **normal baseline**.
- **Concert-hall example**: 10,000 people may all be fine, but it finds the **one person overdosing** — irregular heartbeat, flailing — the single medical episode among thousands.

### 6.7 Epileptic seizure prediction — 4 hours vs. 0 minutes
- For epilepsy, it detects **minor fluctuations in brain structure** signaling an oncoming seizure.
- Potentially **4 hours of warning** — enough to stop driving and seek medical attention.
- The **current state of the art is 0 minutes** of warning; "random dude with Claude code" detected it **without putting anything on the body** (not FDA-approved; built ~6 months ago).

### 6.8 RooView and the airman-in-Iran story
- **RooView** — the open-source RF/Wi-Fi sensing project — has been downloaded **10 million times since January**.
- The **US reportedly found a downed airman in southern Iran** using a **swarm of drones with Wi-Fi signals** spread across the desert, distinguishing a **lizard or mammal from a human heartbeat**.
- Either they made a similar discovery or used his RooView (10M downloads) — either way, "astounding" that individuals can do this.

### 6.9 Seeing the unseen world (and the crystals)
- A whole world beyond comprehension: **electromagnetic, RF, subsonic, ultrasonic** frequencies.
- His **hippie mother loved crystals** and he thought it was BS — but crystals can be **activated by subsonic frequencies** (glow in the dark, act as material detectors). "She wasn't crazy at all"; this physics has been around **thousands of years** — we just couldn't quantify it.

### 6.10 Use case — financial trading
- Separating **signal from noise**, learning in correlation with streaming information — **no cloud**, the intelligence sits on a tiny chip.
- Learn **causal relationships**: how one stock affects 50 others, and what's normal in that translation — purely via the **vector** (a mathematical primitive clustering information).

### 6.11 Why vectors need little data
- Vector-based intelligence **doesn't need huge amounts of data**; it saves to a **graph** with interconnected relationships (A↔B↔C to X,Y,Z), always learning/adapting in real time.

### 6.12 Use case — industrial (forklift proximity, pipe leaks)
- Detect **proximity** ("is that forklift going to crash?") and **vibration**.
- **US water-pipe leaks**: hard to locate, but detectable via **vibration differences** in the pipe — the system "hears" a section vibrating slightly differently, then escalates with RF/radar to pinpoint the leak **down to a millimeter**.

### 6.13 Use case — medical (gait, dementia, falls)
- Not FDA-approved (use at your own risk) but coming.
- Detects nuances in **gait**: a change in how an older person walks can indicate **dementia / cognitive impairment**; it learns the normal baseline, then flags deviations.
- Detects **falls** ("help, I've fallen and I can't get up").

### 6.14 Home-assistant integration
- Integrated with **Alexa, Google Home, Apple Home**: "Hey Siri, how many times did my heart beat yesterday?"
- Every heartbeat is **cryptographically verified** and stored to the vector database.

### 6.15 The economics of null space
- Because it's **contrastive**, it only stores the **null space** (inherently zero) — it **generalizes the normal** and stores only the **abnormal**, so it needs little space.
- **Cost math**: monitoring **8 billion people** at $1/month = **$8B/month × 12 = ~$80–96B/year** — cost-prohibitive even for the largest companies.
- Instead, monitor only the **~20,000 people that matter** at $10/month — affordable.
- **Financial crimes** analogue: only distinguish legitimate from illegitimate actors.
- These systems run on **low-cost commodity CPUs**, **no central cloud, no GPU** — always-on agents without energy-hungry GPUs — enabling **sovereign, self-contained, reality-infused AI**.

---

## 7. How the Learning Works (Live Demo)

### 7.1 The Wi-Fi "mushroom" signal
- Wi-Fi emits a signal in a **mushroom fashion**; as it passes through you it creates **permutations**, detecting **heart rate and respiration rate**.

### 7.2 Building confidence over time
- The key is **confidence**: as it runs, it **learns**, gets more confident having seen the signal, and distinguishes normal from abnormal — **learning in proximity**.

### 7.3 The baby-learning analogy
- Like a baby learning **cause and effect**: spoon/bottle enters mouth → fed; dropped bottle → not fed.
- Later learns **language** ("that's a bottle") and **gravity** — a **gradual** process, not all at once, by trial and error.

### 7.4 Trajectories, graphs, and muscle memory
- Trial and error creates **trajectories** = **graphs**; the more you repeat, the **stronger** they get.
- **Guitar analogy**: learning chords (A, G, F, bar-chord F is easier) and strumming/beat simultaneously; bad at first, then **muscle memory** — you instantly know a G chord or that Nirvana song after a thousand plays.
- The graph/vector interplay organizes into forms of intelligence like brain regions, enabling **instantaneous right-from-wrong**.

### 7.5 The reinforcement scoring
- Reinforcement adds points for good, deducts for bad.
- Range: minimum **0.05** to maximum **0.95** — he never uses **100/1.0** because he doesn't think 100% is feasible; 0.95 is "the best something gets."

### 7.6 Sublinear retrieval and "bullet time"
- The graph+vector overlay retrieves in a **sublinear** form — operating at **less than 1 millisecond**, "extreme speed well beyond our comprehension."
- Humans perceive the world **delayed**; to this tech we look like The **Flash** in **bullet time** — it can learn/adapt faster than we understand.
- Enables e.g. a **hearing aid that translates** languages **without the uncanny delay**.

### 7.7 Time, energy, and entropy
- **Shorter time frames use less energy** — millions of tiny agentic learning loops run so fast they barely consume energy.
- **Longer existence = more entropy (noise)**; happening fast enough means **no accumulated noise**, enabling **predictions** (as long as they happen in <1 ms).

### 7.8 Predicting the packet before it arrives
- **New York → London** takes ~**16 ms**; he works in **<1 ms / microseconds**.
- In a microsecond he can do **1,000 to a million calculations** before information even arrives — predicting what a **packet will look like** before it arrives with ~**90% fidelity** (not breaking causality — learned fidelity).

### 7.9 Deterministic vs. probabilistic — grounding and repeatability
- Traditional **LLMs are probabilistic** — great for language/interpretation, but poor for **grounding, understanding, and determinism**, and they **drift**; how they reached an answer is **obscured** (millions/billions of parallel questions).
- He needs **deterministic, repeatable** systems that show **every single step** to the same answer — a **single deterministic seed** (most components are null/zero), so it can explain **exactly why** it believes someone is about to have a seizure or early Parkinson's.

---

## 8. The Engineering — Rust, WASM, and NAPI-RS

### 8.1 A Rust-based environment
- Everything is built in a **Rust-based environment**; Rust is **fast, light, and sits close to the silicon**.
- He names things after himself (**RuVector, RooView**, etc.).

### 8.2 The 70,000-star project and the hate
- One of his most popular projects has **~70,000 GitHub stars** and **millions of downloads weekly**.
- It gets **hate** — people see the worst-case (bad) uses; he insists on **using it for good**.

### 8.3 The survivor-tracking ADR (Matt Matthews)
- ADR folders (`docs/ADR`) hold **hundreds** of decisions; e.g., a **survivor-tracking** ADR named after colleague **Matt Matthews**.
- **Disaster scenario**: a collapsed building; traditional options were limited (dogs sensing the unseen via smell).
- Spread **$20–30 low-cost devices** across a disaster scene (dropped by drone) to locate who's alive and compute an **optimal triage path** to save them.
- ADR uses **Kalman filters** and **CSI fingerprinting**; consequences: positive = **eliminates duplicate survivor records**; negative = risk; plus alternatives considered.

### 8.4 CSI fingerprinting and the frequency mesh
- **CSI (channel state information) fingerprinting** uses Wi-Fi to traverse the electromagnetic world in a **mesh**, between **2.4 GHz and 7 GHz**.
- **Higher frequency = higher fidelity** (see the outline of a face) but **short range**; **lower frequency = long range** (why home Wi-Fi uses 2.4 GHz for range, 5 GHz for Netflix bandwidth).
- He **combines them** into a mesh seeing near and far, low and high fidelity.

### 8.5 Domain-driven design and revisable ADRs
- The work uses **domain-driven design** (referencing a speaker "this morning") — disaster-response types, tracking as domains.
- ADRs can be **revised later** (a decision from 2 months ago updated for a new feature), forming a **graph** used both to sense the world and to **ground the agents** as they build.

### 8.6 The Homecore crate and <500-line files
- **Homecore** is his **Rust crate** integrating with Google Home / Apple Home ("Hey Siri, where's my dog?").
- He **never builds a file with more than 500 lines** — so he can **grok** it: "I'm not blind coding, I'm not vibing — I'm an **agentic engineer**, engineering with purpose." (Example file: 170 lines.)

### 8.7 The three compilation targets
- **WASM** — "build for unknown"; runs in a **browser** / any WebAssembly environment; light, easy, fast.
- **NAPI-RS** — compile for a specific architecture (arm/Mac/Linux/Windows); **replaces Node.js's default V8 Chromium runtime with his own Rust runtime** for high-fidelity, super-fast systems.
- (Rust builds "three general approaches" — WASM, NAPI-RS, and native.)

### 8.8 The in-browser quantum simulator
- **RuVector** underpins his AI system; his **quantum-computing simulator** is compiled to **WASM** and runs **client-side in the browser**.
- Many quantum techniques don't need real quantum computers — so he **bypasses AWS/Google**, borrowing the **CPU/GPU of whoever visits the site**, giving users **sovereignty**.

### 8.9 Sovereign AI and sidestepping GDPR / the EU AI Act
- In the **EU** (EU AI Act, GDPR), he can get benefits of things "not allowed" — learning on **PII or medical information without ever seeing it**, because the **data never leaves your browser/device/phone**.
- Those laws assume a **cloud provider** secretly holding your data; here it never leaves your environment, opening a **greenfield** of previously-forbidden applications.

### 8.10 The attention WASM and the cloud-free thesis
- An **attention WASM** applies an **attention mechanism in the browser without a GPU** — "all you need is attention" — that **reasons upon itself**.
- His **thesis**: next-gen AI will be **disconnected from the cloud** and heavy compute — **light, ephemeral, always-on, always-learning but only when needed**, sleeping the rest of the time and **awakening sublinearly/instantly** (microseconds to picoseconds) when bounds change.

### 8.11 The 1.5-million-line core and its primitives
- The **core system** underpinning everything is **~1.5 million lines** of various problems, assembled Lego-style.
- Primitives chosen per need: a **DAG** for sequential understanding (trunk/tree, like GitHub); **deltas** (differences); **filters**; **FPGA** for energy types; **graph neural networks**; chip-type optimization.

### 8.12 The min-cut breakthrough (dynamic min-cut)
- His **biggest breakthrough**: **min-cut** — the minimum connections in a graph before something breaks (long-standing concept).
- Traditionally, changing one thing forces **recalculating the entire simulation**.
- A **paper in December 2025** introduced **dynamic min-cut**: recalculate the whole structure **dynamically, in real time, sublinearly, changing only the one thing**.
- **DNA example**: ~**6 billion base pairs**; one change previously meant recalculating everything (hours). With dynamic min-cut, compare many DNA sequences instantly.
- **Sewage example**: separate the **DNA of every person** flowing through a city's sewage in real time — detect prevalence of a disease, dementia, or cancer across the population. Astounding, and the kind of application he's solving with the company.

---

## 9. Investors and Mission

### 9.1 The angel round (announced yesterday)
- **Mark Templeton** — former **CEO of Citrix**, on the board of **Arista Networks**.
- **Greg Lavender** — former **CTO of Intel**, also on the board of Arista Networks.
- **John McKinley** — former **president of AOL**, **CTO of Merrill Lynch**, on the board of **Equifax** (and ~50 other things).
- The company was formed **8 weeks ago**.

### 9.2 The mission
- Goal: "**make the world a little bit better** than when I entered it."
- Cognizant it could be used for terrible things; surrounds himself with investors, partners, and a community working toward that vision.

---

## 10. Nick's Demos

### 10.1 "You can borrow his stack"
- Nick's message to those who feel "I can't do what Reuven does": **neither can I** — but you can **borrow his stack** and follow it.
- The loop: **believe → take action → get a result → be open to feedback** (from Dragon, Reuven, other "high-test" developers in the Agentics Foundation or your local community) → repeat, and you'll do things you didn't imagine.

### 10.2 The forklift cog
- He runs the **forklift cog** — monitoring so **forklift operators don't collide**, with a central hub to uncover risk.

### 10.3 "AI for good" and traveling with the foundation
- He travels with the **Agentics Foundation / Cognitive One**, all sharing an **AI-for-good** value; in each city he asks what he can actually do to help people in 3–5 days.

### 10.4 The Hungary hot-springs project ("Hőforrás")
- Method: **Claude Chrome extension** opening Reuven's repositories, prompting for something "**never done, 100 years in the future**, buildable today in **Rust and TypeScript**, that helps people," combining Reuven's craziest projects.
- With **human-in-the-loop** nudging (told it about Hungary's abundant **hot springs**, mostly unused for leisure), it produced a **geothermal / thermal-heat energy** project.
- Places **Cognitum seed/appliance devices** at hot springs to detect **excess/wasted heat** and **reroute it** to cooler buildings — reducing **GHG emissions**.
- Built **yesterday in ~2 hours** while doing other things; maps every hot spring in the country ("like **Iceland for Hungary**"); reportedly **millions of kilowatts** of energy sitting unused underfoot ("that's what Claude said").
- His **favorite "for the people" project** so far.

### 10.5 The ecosystem vision
- Reuven: "**this could be your startup** — go to our GitHub repo, it's literally in there."
- Goal: an **ecosystem of startups** building incredible things on their tools — "we can't build everything for everyone, but we can create a base available to everyone."

### 10.6 Smell the Wi-Fi box
- Reuven invites the audience to **smell the wooden Wi-Fi box** ("designed like an AI box in 1935").
- A Hungarian host confirms the tech crew were impressed and that Hungary has lots of unused energy — "**now we know how much**."

---

## 11. Q&A

### 11.1 Q1 — Does Cognitum need training to recognize signals like heartbeats?
- **Yes and no**: it's **pre-trained** on human signatures (heartbeat, blood pressure, etc.) so it knows a **baseline**.
- Then it **learns what's normal for you**, and you can **train it yourself** for things he hasn't dreamt up.

### 11.2 Q2 — How can it predict epileptic seizures of a driver behind the wheel?
- Caveat: **consult a medical professional** — not validated by any medical body; brand-new tech.
- Uses a **60 GHz millimeter-wave radar** (line-of-sight) placed in a **truck cab pointed at the driver**.
- Detects signals — **sleepiness, seizure indicators** — and would tell the driver to **pull over**.

### 11.3 Q3 — Is the Cognitum device open or proprietary hardware?
- **Open** — an **open technology company**; you can take the open-source code and build with it.
- They build **vertical applications with partners** (networking companies, hardware vendors); those partners' technologies are **proprietary** (e.g., detecting oil/minerals underground is *your* tech using *their* devices).
- Nick adds: getting the boxes ready/optimized/QA'd is **not easy** — worth using the box rather than DIY.

### 11.4 Q4 — How can it detect states of consciousness (calm vs. distress)?
- **Consciousness is not measurable** — you can't prove another's consciousness.
- But **measurable states** are detectable: happy, euphoria, stress.
- Anecdote: overnight it messaged that between **2–4 a.m. he and his wife synchronized their breathing** — a real phenomenon for cohabiting couples, a discovery it made unprompted (now "the joke around the office").

### 11.5 Q5 — What about noisy real-world environments and AI limitations?
- Example project: a **3-day, 20,000-person festival in New Jersey**.
- They **don't monitor every person** — they look for **patterns outside the norm** (someone rushing the crowd front, a group in distress) — "the five people who are in distress."

### 11.6 Q6 — Can you say more about predicting the future by processing faster?
- The trick is a **temporal loop**: faster events create **less noise/entropy**.
- Make a **very narrow, very fast prediction**, then **assemble many tiny predictions** into a broader prediction of something bigger.

### 11.7 Q7 — Have you done anything with measuring ultra-weak photon emission?
- **Limited**, via **NV diamond sensors** — an emerging **femto-scale** sensor tech (shine a **high-powered laser at a diamond**; ties back to crystals).
- Brain information travels not by electricity but by **photonic activity** between neurons and synapses, which these can sense.
- So sensitive it can detect **cellular communication** across billions/trillions of cells and flag a group acting abnormally — "it's the **tricorder from Star Trek**."

---

## People & References Cited

- **Reuven Cohen** — speaker; Toronto; ~30 years developing, ~4 years vibe coding; founder of Cognitum; creator of Roo Flow / Claude Flow / RooView / RuVector; co-founder of the Agentics Foundation.
- **Nick** — Cognitum / Agentics Foundation partner (Cognitive One); ran the forklift cog and Hungary hot-springs demos.
- **Dragon, Rob** — collaborators / Agentics Foundation co-founders and community members.
- **Matt Matthews** — colleague after whom the survivor-tracking ADR is named.
- **Investors:** **Mark Templeton** (ex-CEO Citrix, board of Arista Networks), **Greg Lavender** (ex-CTO Intel, board of Arista Networks), **John McKinley** (ex-president AOL, ex-CTO Merrill Lynch, board of Equifax).
- **His wife** — ran the business/accounting side of the consultancy.
- **Companies / orgs:** Anthropic (Claude, Claude Code, the ~$200/mo plan), OpenAI, Cognitum, Agentics Foundation, Linux Foundation, Citrix, Intel, AOL, Merrill Lynch, Equifax, Arista Networks, AWS, Google, Microsoft, Upwork, Netflix.
- **Tools / products:** Roo Stack, **Roo Flow / Claude Flow**, **RooView**, **RuVector**, **Agentic DB**, **Homecore** crate, **Spark** spec system, RooCode, Cline, Lovable, Codex, Claude Chrome extension, NPM/npmjs, VS Code.
- **Techniques / concepts:** spec-driven development; swarms / concurrent agents; plugins (agents + commands + skills); MD-file prompt injection; ADRs (architectural decision records); CI guard; meta-packages / blast radius; London-school vs Chicago-school TDD; recursive feedback loops; contrastive / null-space intelligence; vectors and graphs; trajectories / muscle memory; reinforcement scoring (0.05–0.95); sublinear (<1 ms) retrieval; entropy/noise vs. time; deterministic vs. probabilistic AI; RF / Wi-Fi **CSI (channel-state) fingerprinting**; 60 GHz millimeter-wave radar; Kalman filters; domain-driven design; Rust; WASM; NAPI-RS (replacing V8); in-browser quantum simulator; sovereign AI / GDPR / EU AI Act; DAG / deltas / filters / FPGA / graph neural networks; **min-cut / dynamic min-cut** (Dec 2025 paper); NV diamond sensors; subsonic crystal activation.
- **Cultural references:** The Flash / "bullet time"; the **Star Trek tricorder**; Nirvana (guitar analogy); the downed-airman-in-Iran story; Iceland (geothermal analogy).

---

*Video: https://www.youtube.com/watch?v=_nB5r7FmCY0 — Transcript via yt-transcript.sh; outline generated from the transcript.*
