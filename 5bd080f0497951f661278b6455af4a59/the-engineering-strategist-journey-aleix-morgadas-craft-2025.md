---
title: "The engineering strategist journey - Aleix Morgadas | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Aleix Morgadas shares his personal journey into engineering strategy — the two failed modes (execute fast, copy others), following the money to understand the business, the maps analogy, what strategy actually is (decisions under imperfect data), strategy as a fractal cycle that's both deliberate and emergent, Rumelt's components, the Cynefin frame, a concrete full-stack-team turnaround story, and how success (not effort) reshapes culture."
type: "reference"
tags: ["softwaredevelopment"]
---

# The engineering strategist journey - Aleix Morgadas (Talk Outline)

> A **Craft 2025** talk by **Aleix Morgadas** — engineering-strategy consultant and CPO at Temperature, 10+ years in tech, specializing in engineering strategy with **domain-driven design, Team Topologies, and Wardley mapping**; part of the "little Latin cluster" with Daniel. He frames the talk as **his own journey** ("everyone has their own journey"): the amount to learn about strategy is overwhelming, and while he can't remove the pain, he can help you **avoid a couple of the mistakes he made**. Takeaways: if you're starting, next steps; if you're already in, ideas for helping others. Structure: two failed modes → understand the business first → what (engineering) strategy is → a concrete turnaround story → culture/context/sharing → Q&A.

---

## 1. The Two Failed Modes

### 1.1 Failed mode one — "execute fast" (2014)
- Started in **2014 at a startup** where the engineer's goal was simply **execute fast**.
- His belief: **more lines of code = ship faster**; as consultants doing consultancy, they could fund building product and make more money — "what a mistake."
- They felt fast but were **"going fast to nowhere."**
- When things went wrong, the only response was **more hours**; everything was led by **passion, not rationality**, and they **burned out together**.
- Worst part: they **blamed others** and he couldn't **learn from his own mistakes** because he wasn't making decisions.

### 1.2 Failed mode two — "copy others" (2016)
- A couple of years later he tried to **understand what others were doing** — went to conferences and meetups and **copied others**.
- Copying today would mean adding whatever's hyped: **AI, Kubernetes, platform engineering, event sourcing, AI agents** (blockchain is "already done, so not blockchain"), a little **layoffs**, a little **return to office**, **lovable.dev**, **Team Topologies** (add colors to the org chart).

### 1.3 The LLM-delegated strategy joke
- If doing it today, why copy others — just **delegate to an LLM** (use the latest model to stay ahead).
- He asked it to "**write me a B2B marketplace strategy**": form rapid innovation via an **MVP**, 4–6 months to validate, **microservices from day one**, start with **SOC 2** — "looks reasonable."
- He asked the price: **$8.5 million to $25 million over 5 years** — "if people are copying this, we're fine... I should really increase my rates."

### 1.4 The lesson: you must make the decisions
- Copying others **reproduced the same bad thing** — again unable to learn from his own mistakes **because he wasn't making decisions**.
- His **actual journey started** when he **stopped blaming others and looked at himself**.

---

## 2. Understand the Business First

### 2.1 Follow the money
- Recommendation: **follow the money** — talk to the people who **control the money** to understand *why* you're doing what you're doing.

### 2.2 Business type shapes everything
- Know whether you're **B2B, B2G, B2C** — it shapes the business; he'd used the **same strategy regardless of type** (a mistake).
- **Bootstrapped vs. VC-backed** changes expectations enormously; they were **bootstrapped behaving as VC-backed**, then VC-backed behaving as "it's our own money, we don't report to anyone."
- **Services (scale by people)** vs. **SaaS (scale by machines)** behave very differently.

### 2.3 Unit economics and other lenses
- Learn **unit economics**: **LTV (lifetime value)** and **CAC (cost of acquisition)** — they shape how the strategy works.
- Also **North Star, Red Ocean**, and similar concepts help you understand the business.

### 2.4 The B2B pyramid (Leatarian)
- A pyramid: **B2C customers** at the bottom, then **B2B**.
- Targeting **low-level B2B vs. enterprise** is very different — the **sales lifecycle** is huge and plays into your day-to-day.
- Understand **how you sell, lead-to-paid time, and churn** to build genuine strategies.

### 2.5 Business models and the break-even insight
- Some models **scale linearly** (e-commerce: you sell, you have a cost).
- Others (**platforms, Uber-like**) need **huge upfront investment**, take a while to ramp, then have **huge margins** — the "**break-even**" moment where you become profitable.
- Understanding the second model explained **why companies lay off**: you reach break-even **faster**, then can say "we hit break-even" and **raise more money from VCs** (explaining the "20% layoff" number he never understood).

### 2.6 The maps analogy
- Even with a destination, being **near the endpoint** differs from being **far away** — don't assume you're a big enterprise when you're a little startup.
- "Asia is impossible" — **you cannot overstep**; go **step by step**, each step enabling the next.
- The business gives a **direction/area, not a point** — treat it as a **hypothesis**: run experiments, see what helps you go faster, because the terrain is unexplored (there may be a mountain to go through).

---

## 3. What (Engineering) Strategy Is

### 3.1 The 2018 turning point
- In **2018** he joined **Domain-Driven Design Europe** and saw **Simon Wardley** and **Dave Snowden** — "amazing, that's what I want to do."
- He **stopped entrepreneurship / building his own companies** and **joined a company to learn from others** who knew how it works.

### 3.2 What strategy is NOT (Good Strategy/Bad Strategy)
- The book **Good Strategy, Bad Strategy** (Rumelt) showed he was "doing everything" wrong: **overhyped words**, not understanding the challenge, **goals-as-strategy**, inspirational words, bad strategic objectives.
- Example of nonsense: "we need to deploy an app for a customer with only 10 customers — let's build microservices."

### 3.3 The "negate it" test (Roger Martin)
- One way to tell good from bad strategy: **negate it**.
- If you negate "we're serving customer needs" and it **still makes sense** (i.e., no one would say the opposite), it's **not a decision**.
- A strategy is a **decision** — if you can negate it and the negation is absurd, it's becoming a real strategy.

### 3.4 A working definition of strategy
- **Decisions** made admitting you **don't have all the information** ("all models are wrong") — always imperfect data.
- Made to **overcome a high-stakes business challenge** you can't avoid — you need at least an **orientation**.
- The result: you should end up in a **better position than before**.

### 3.5 What engineering strategy is
- The **same thing, from the engineering point of view**.
- If your engineering strategy is **not coherent** with the business one, you have a problem — if they feel like they're saying different things, **have a conversation** about why.

### 3.6 A framework you eventually discard
- He hesitated to present a framework; he gathered these ideas from others and packaged them **digestibly** as a **learning guideline**.
- Once you **practice enough**, you **stop using it** and develop **your own way**.

### 3.7 Strategy is a cycle
- He'd wrongly thought strategy was **waterfall-ish** ("decide for a year / the next 3 years, can't change it").
- It's a **cycle** — going through it **faster** means **learning faster than the competition**.

### 3.8 Design and execution can't be separated
- If leadership **designs on a retreat and hands it over**, that's **not a strategy**.
- You must be **involved in both** — design produces **hypotheses/bets**, and it's through **implementation and sensing** that you learn if they were right.
- Handing over design to executors is **lose-lose**: if it goes well it's your success; if it fails, "they messed up." (Learned from **Simon Wardley**.)

### 3.9 Strategy is a fractal
- Different people have strategies for **different time horizons** — a CEO thinks in **10 years**; as tech lead / EM / head of engineering his were **1 year or less**.
- If a company does strategy **once a year**, it learns **once a year**; a competitor doing it **every 3 months learns 4× faster**.
- It's a **fractal**: a company strategy with **nested, narrower-scope strategies** in smaller feedback loops, each following the same pattern and **reinforcing the parent** (which also needs feedback).
- Multiple strategies can coexist and must be **coherent** — at minimum **not competing** — and can have **different feedback loops** (his 3-month one alongside a 1-year one).

### 3.10 Agile-like principles
- An "aha" (that felt stupidly obvious later): **anticipate and explore instead of plan and do; be adaptive instead of prescriptive; be driven by value; take X at core; communicate and collaborate.**
- "A strategy following child[-like Agile] values" — not a waterfall process.

### 3.11 Deliberate vs. emergent strategy
- **Deliberate:** on paper, communicated, helps **align the company** — the "wishes" of what you want.
- **Emergent:** how well-**trained** the organization is to **respond to unanticipated events**.
- It's **both, all the time** — companies that say "we don't do strategy" **are** doing emergent strategy without writing it down.

### 3.12 The Cynefin frame — when to invest in strategy
- He initially "did strategy for everything."
- Using **Cynefin**: **clear/obvious** → you just need a **pipeline**, no strategy; **chaotic** → no strategy, just **escape the chaos**.
- Strategy works best in the **complex, non-linear** space — "if it's linear, you don't need strategy, you just do it."
- Suggests learning **non-linear thinking** (via "Diana's" work) as a faster on-ramp than learning all of Cynefin first.

### 3.13 The components (Rumelt)
- Strategy lives in a **purpose and context** (set by the business).
- **Diagnosis** — understand and describe where you are.
- **Direction** — the book's "guiding policy" (he uses "**direction**" because it works better with developers).
- **Clear actions** — what you'll do to overcome the obstacles.
- I.e., **business status → why → where we are → where we want to go → what we'll do.**

### 3.14 It must be collaborative
- Purpose can be **top-down**, but you can **never do this alone**.
- The **direction** needs a final say from a C-level/leader (feels top-down) but must be **very collaborative** — involve people **early** to understand where you're failing.
- Gather the **pains of developers** and **product problems** — not "in isolation on a mountain with your leadership peers."

### 3.15 Direction as hypothesis; actions that verify
- Combine **many tools** based on experience for the most information about your situation.
- "**Don't simplify what isn't simplifiable**" — be clear, but don't force it into one word/sentence.
- The direction is really a **hypothesis** about why it'll work, with **reviewable objectives** (a metric/North Star you must check — "if you can't check it, you'll be lost"). It's **not a vision or inspirational quote**.
- **Actions** need real **project-management skills**, must be **complete and scoped** enough to **track progress and verify the diagnosis** — "before that, it's just wishes."
- You must be **part of execution** or you **miss the feedback** and can't close the loop (their loop: architecture, Team Topologies flow-of-value, a Wardley map → recheck → adapt).

---

## 4. People and Process vs. Technology

### 4.1 The forbidden conversation
- Some orgs split **technology (developers, principles)** from **management (people, processes)** and forbid crossing over.
- As EM / head of engineering, asking "how's the architecture?" got "**this is top-down, why are you questioning it?**"
- Teams that actually **needed more people or new processes** were **solving it through technology** because they weren't allowed to discuss people/process.

### 4.2 You need both dimensions
- **Engineering leadership doesn't require a role** — it can be **shared** — but you must touch **both** the **people/process** side and the **developer** side.
- The solution is **never in one dimension** — it's the **combination**; any decision will likely **break something else**, so stay in **constant exposure to both**.

---

## 5. A Concrete Turnaround Story

### 5.1 The brief
- Joined a company as **engineering manager** with **3 months**.
- They were "customer-focused" with a **product trio** (product, designer, tech lead), but had been **over-delivering for a year with no expectations** — "help us finish it and put it in production."

### 5.2 Diagnosis — tech is always messy
- Looking only at tech, you **always find problems**: a **distributed monolith** (at least good testing), custom-built **Ktor with porcelain adapters** while the rest used **Spring Boot** — "messy decisions."
- But blaming tech is the **easy part**; they had **good CI/CD**.

### 5.3 Diagnosis — the human signal
- **Handovers** between back-end and front-end teams; **no full-stack teams** (one mobile team, three back-end teams handing everything over).
- **Leaders leaving** — the current one left a month ago, the previous one 6 months ago — "is this a trap?"
- They looked like **feature-factory teams**.
- Looking only at tech → you apply a **technical solution to a human problem**.

### 5.4 The Kanban Maturity Model reality check
- He *thought* they were at **level 2, customer-driven** (managed demand, consistent end-to-end processes, marginal heroics, short delivery times).
- Being exposed to the day-to-day, they were actually in **lack of order, overburden, stress, heroics, unpredictable results**.
- Without seeing this, he'd have **pushed people** and made big mistakes assuming a maturity they didn't have.

### 5.5 Direction (emergent) — start a new team from zero
- Leadership had huge pressure and crazy demand.
- The (unwritten, emergent) decision: **start from zero** with a new team and a chosen set of **practices/ways of working** — **full-stack**, reducing technical complexity along the way.

### 5.6 Action — change the hiring process
- The **early problem was the hiring process** — hiring only **specialists** produced **separated front/back teams**.
- Without changing hiring, he couldn't change the structure — so they **changed the hiring process**.

### 5.7 Action — isolate the team "in a cave"
- Under **high pressure people can't learn**, so they took the team **off leadership's radar** ("in a cave") and **trained** them.
- They started **shining** — "why is the last-priority team out-performing the others?" — thanks to **training** (full-stack people without training makes no sense).

### 5.8 Action — remove accidental complexity incrementally
- The **accidental complexity** was developers' response to changing requirements ("which architecture solves everything? DDD, ports & adapters, hexagonal") — natural when **tech is your only lever**.
- Rather than "stop product for 2 months to rewrite from scratch," they **replaced incrementally** and trained people: **Ktor → Spring Boot**, a full service **rewritten in ~1 month, zero downtime**.
- Stop the **destructive behavior of pressuring people**; give space and fundamentals to go faster later.

### 5.9 Outcome and trust
- A **5-person full-stack team** working smoothly, **delivering super fast**, gaining **leadership trust**.
- He had a **very trustful VP of engineering** ("amazing leader") who **fought the battles with product** at that level — you need someone to **have your back** for uncommon decisions.
- **End-to-end, no handoffs** was the main thing — handovers between teams don't work; you need **ownership of the full thing**.

### 5.10 Saying no is hard
- Saying **no** to "I'll give you 20 new developers" is hard: if you **don't use** given resources and fail, "**you screwed up**."
- He needed **arguments from the information he had** to insist on his approach.
- It was **2022** — plenty of jobs if fired — which **helped him be bolder**.

### 5.11 The consequences you live with
- They built a **routine of sharing** how they worked to **influence others**.
- But moving from **specialization to full-stack** made **specialists leave** ("I only want to do JSON APIs"; asking for some HTML was "a huge thing").
- Those leavers **took undocumented context/knowledge** — a **bad consequence** you must go through (**non-linear thinking**: you do something, don't expect people leaving, then adapt).
- **Pairing, mob programming** minimize the risk of such knowledge loss.

---

## 6. Culture, Context, and How Success Reshapes Culture

### 6.1 Finishing a strategy puts you in a new culture
- Completing a strategy positions you not only in a **new context** but a **new culture** — an "aha" moment.
- Culture = "**how things get done here**" — via **Tania Reilly's** ("The Software Engineer's Path") ~six/seven **dimensions of culture** ("any model of culture is wrong, but this gets to the point").

### 6.2 A real client's culture
- **Super-secret** (everything oral), **top-down**, people wanting to go fast; a balance between **DMing people** and using a **Slack channel**.
- **All time allocated** — no free time to learn or help others.
- The last dimension, **liquid vs. crystallized**, is about **promotions**: crystallized = junior→mid→senior on a schedule; **liquid** = startup flexibility (developer today, PM tomorrow).

### 6.3 You can't change culture so your strategy works
- People said "the culture sucks, I need it to change so my strategy works" — **that doesn't work**.
- Spending a year on training/Agile coaches to change culture means that by the time you get there, your **strategy is already outdated** — start again.
- Sometimes you must **follow** the culture.

### 6.4 The "get in the room" story
- In that company, following the culture meant **moving to management** — tough, since not everyone wants to.
- To influence, you need to **be in the room**; but once someone finally **got in the room**, they became **part of the problem** — now they **make the calls and preserve the very structure/culture** they fought against.

### 6.5 Success reshapes culture (both directions)
- That person then created a **new strategy with an "as soon as possible" culture** — same as before but **communicating a little more** — and because it **worked**, the next time people **followed the new culture**.
- **Success** ("this works, we want more") is how you **influence culture** — "what works becomes part of the story."
- It works **top-down too**: an open, bottom-up company that was failing had **C-level say "we follow this path, this is the date"** — it **worked**, and that **moved the whole culture down**.
- The problem: when it **no longer works**, you have **past inertia** and pain to move.
- If you're a junior leader complaining about culture: when **promoted, will you preserve the culture you fought**? If you want change, be part of it.

### 6.6 His current model
- Before designing a deliberate/emergent strategy:
  - **Culture** guides **what is possible**.
  - The business **challenge** (not desires/goals) sets the **context**.
  - The **current context** (developers, pains, architecture) signals **what's feasible** — "you cannot dream."
- The **strategy** is a **hypothesis**; when finished (success or failure) it **impacts culture, produces a new output, and creates a new context**.

---

## 7. Closing: Share Engineering Strategies

### 7.1 Why don't engineers share strategy?
- On podcasts, **business and product people share everything** ("we'll do this, we're doing that") — even when wrong, they **share and learn**.
- We have **open source** — why don't we **share engineering strategies** and learn together?

### 7.2 Resources and the invitation
- His repository **`awesome-engineering-strategy`** collects examples, books, and posts.
- He **writes about it** and invites others to write and share their strategies (a couple are coming).
- Writing is hard, so he offers a **link to talk and help you write** an engineering strategy for publishing.

---

## 8. Q&A

### 8.1 Q1 — What was your colleagues' general reaction to this?
- Two behaviors: "**I want to be part of this**" and "**don't tell me, get your job done**."
- Passion finds passion — you create a **bubble**; getting **1–2 key excited people per team** starts "**contaminating** others."
- It took **~1.5 years** to build enough momentum; success = when you **leave the space** and others **fill it**.
- When he led the **~16-person tribe**, **three people moved into management**.
- When people are exposed to new ways of decision-making, they **like and adopt** it — but **from the top he had little success**; it was a **bottom-up** thing on **patience and training**.

### 8.2 Q2 — Mapping tends to get people fired (challenging a leadership narrative). Were you senior enough / careful enough to convert it into a narrative that supported existing structures? (You said "the business lost" — interesting word choice.)
- He was **protected by his VP of engineering** from high-level decisions.
- He **did not present it as a challenge** — **collaborative co-creation** was key; he **involved business and product** in creating it.
- As a **consultant**, he knew how to ask questions **as if he didn't know enough** — but with **genuine interest in learning** ("people aren't stupid").
- He created space via **collaborative workshops (Lean Inception** and others): a **4-day workshop** where he only asked the **VPs of business and product** for **two sessions** — but they **stayed for the rest** because they could **put their ideas in** and saw that **developers wanted to understand more**.
- He **looked *with* the narrative**, asked questions, and let them **adapt** it ("did you think about that?") — when people see you **care about the business**, they **open up** and see you as an **ally, not a threat**.
- Having a **protective VP** helps a lot.

---

## People & References Cited

- **Aleix Morgadas** — speaker; engineering-strategy consultant, CPO at Temperature.
- **People:** Simon Wardley (Wardley mapping; strategy-as-cycle, design+execution together), Dave Snowden (Cynefin), Richard Rumelt (*Good Strategy, Bad Strategy*; components), Roger Martin (the "negate it" test), Tania Reilly (*The Software Engineer's Path*; culture dimensions), Daniel (the "Latin cluster"), his supportive VP of engineering.
- **Books/frameworks:** *Good Strategy, Bad Strategy*; Wardley mapping; Cynefin; Team Topologies (flow of value); domain-driven design / ports & adapters / hexagonal architecture; Kanban Maturity Model; Lean Inception; the B2B "pyramid" (Leatarian).
- **Tools/tech:** LLMs (delegated-strategy joke), Ktor → Spring Boot migration, CI/CD, `awesome-engineering-strategy` repo, lovable.dev (hype example).
- **Concepts:** execute-fast vs. copy-others failure modes; follow the money; B2B/B2G/B2C; bootstrapped vs. VC-backed; services (scale by people) vs. SaaS (scale by machines); unit economics (LTV, CAC), churn, sales lifecycle; break-even and layoffs; the maps analogy (direction not a point, step-by-step); strategy = decisions under imperfect data; engineering strategy coherent with business; strategy as cycle / fractal / deliberate + emergent; diagnosis → direction → actions; direction as hypothesis with reviewable objectives; "don't simplify what isn't simplifiable"; non-linear thinking; people/process vs. technology (both dimensions); accidental complexity; full-stack team + isolation + training; incremental replacement, zero downtime; saying no to resources; culture as "how things get done here"; liquid vs. crystallized promotions; success (not effort) reshapes culture; past inertia; collaborative co-creation to avoid getting fired.

---

*Video: https://www.youtube.com/watch?v=Y3mwuVTxPAI — Transcript via yt-transcript.sh; outline generated from the transcript.*
