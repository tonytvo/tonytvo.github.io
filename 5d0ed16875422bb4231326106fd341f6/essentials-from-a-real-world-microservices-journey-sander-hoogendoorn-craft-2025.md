---
title: "ESSENTIALS - Essentials from a Real-World Microservices Journey - Sander Hoogendoorn | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Sander Hoogendoorn (iBOOD CTO, 47 years coding) tours a real microservices world using Martin Fowler's definition as a table of contents — right vs. wrong problems, a dead-simple adaptable per-service architecture, breaking up the UI, DDD (bounded contexts / ubiquitous language / aggregates), CI/CD and the bus metaphor, a test pyramid with trunk-based development, service-owned data with snapshots, and a 'simplify to amplify' way of working with micro-teams."
type: "reference"
tags: ["softwaredevelopment"]
---

# ESSENTIALS - Essentials from a Real-World Microservices Journey - Sander Hoogendoorn (Talk Outline)

> A **Craft 2025** solo talk by **Sander Hoogendoorn** — single independent dad, speaker/writer, and after **47 years** of coding now **CTO of iBOOD**, a Netherlands e-commerce company active in ~six European countries (~€130M revenue). Delivered high-pace ("~45 minutes… you can only say enough if you talk really really fast") after a MacBook connection glitch left him reading slides off a distant screen. Format: a rapid, opinionated tour of "everything you might have to take into account if you go into a microservices world," deliberately structured around **Martin Fowler's definition of microservices used as the table of contents**. Recurring caveat: *"what works for us might not work for you — take what you like, leave the rest, have more beers and think about it later."* The talk's own structure: **Problems → Architecture → Breaking down the domain → CI/CD → Testing → Data → Ways of working → Closing**.

---

## 1. Opening & Framing — "microservices is over the hill"

### 1.1 The hype is supposedly gone
- Common refrain: microservices is over the hill, "AWS threw it under a bus and went on to do something else."
- Counter-refrain: "microservices are dead, long live the monolith" — people going back to monolithic systems.
- Every article asks "are microservices dead?" — answer is "yes and no."
- The real questions: are we even doing microservices, or something else? Are we doing it the right way? Is it difficult? "Yes it is."

### 1.2 A surprisingly full room
- Surprised at the turnout "for a microservices talk, right? Because that's old — we're now solving everything with AI."
- He's "been doing this stuff for quite some time"; the plan is a quick overview of the many things you can (and may have to) take into account.

### 1.3 iBOOD deploys 40–50× per day
- Foreshadows the payoff metric: at his current company they deploy **about 40 to 50 times per day to production**.
- "For some people that's slow, for some that's fast — doesn't matter, it's all relative. For us it's enough."

---

## 2. Martin Fowler's Definition as the Table of Contents

### 2.1 Why use the definition as an agenda
- Fowler's "short definition" says a lot; Sander uses it verbatim as the talk's table of contents.

### 2.2 The clauses of the definition
- An **architectural style** / approach to developing a **single application** ("not sure what a single application is though").
- As a **suite of small services**, each **running in its own process**.
- **Communicating with lightweight mechanisms** / protocols, making it easy to talk to other things using the same protocols.
- **Built around business capabilities** — "the crucial part."
- **Independently deployable** via machinery that is **fully automated** in its deployment.
- Written in **any programming language** you like, "as long as it supports HTTPS."
- Using **different data storage technology** per service.

### 2.3 The derived agenda
1. Identify the **problems** microservices can actually solve (many people choose for the wrong reasons — "nice as a consultant").
2. **Architecture** — kept really simple; just show what iBOOD does.
3. Think of the app not as one application but a **platform / collection of small applications** sharing the same characteristics as the services.
4. How to **break down** the business domain into reasonable chunks.
5. **CI/CD** — why they can deploy 40–50×/day.
6. **Testing** — critical in distributed landscapes ("show of hands of people who like testing… there's nobody").
7. **Data** — who owns it.
8. **Ways of working** — do they change? "In my opinion, yes."

---

## 3. Right Problems (most people pick the wrong ones)

### 3.1 The disclaimer
- "What works for us might not work for you." Take what's useful; leave the rest.

### 3.2 Case: the Dutch insurance company (legacy escape)
- A company he "would never recommend anybody to work" for.
- On-premise mainframe — because the building sits **below sea level**, the mainframe was on the **fourth floor** instead of the basement.
- Ran ~**18 million lines of COBOL** and ~**12 million lines of Java**.
- The COBOL was **in Dutch** and heavily **abbreviated** — "unmaintainable stuff."
- The COBOL developers were **aging and wanting to retire**, so the code had to go — but it was far too complex to replace.

### 3.3 Gall's Law — you can't build a complex system from scratch
- "A complex system designed from scratch never works and cannot be patched to make it work."
- The insurance company **tried six times**, spending ~**two years each attempt** to write "the next big system." It never worked.
- The only path: **start over with a small working system** and grow it.
- Sander arrived (~2014, "probably talking to Sam just before") pitching "microservices" — nobody knew what it was; "it's new, it's cool," and it was the hype, so "let's do that. And there we went — we didn't know what to do, by the way."

### 3.4 Case: the e-commerce company (untangling dependencies)
- Started with **one deal on a page**, then grew and grew to ~**€130M revenue**.
- Accreted PHP open-source systems that were "manipulated or destroyed," couldn't be upgraded — running **10 versions behind** on the ERP system.
- Adopted microservices with "really weird names" ("didn't work because of the weird names, of course").
- Ran on **every cloud**, connected to every payment provider / marketing tool — **data sitting everywhere**.
- Tried **syncing data everywhere** using "every mechanism you can think of" — it **totally broke down about 5 years ago**.
- "Can you solve this?" → "Yeah, microservices." "It worked, by the way."

### 3.5 Dependencies will kill you
- The core lesson across systems: **dependencies will kill you, anytime.**
- Illustration: a dependency graph from a **Dutch public-transport company** where **each rectangle is a system** — and this is "just their customer service department."
- Includes an **SAP system with 142,000 tables** — "that's why SAP consultants are very expensive; if you want to make real money, learn all the tables by heart."

### 3.6 Technical death
- Many companies suffer **"technical death"**: they spend so much time **keeping everything running** that there's **no room left for innovation**.
- "Companies disappear because of that — and that's really sad."

### 3.7 The wrong reason: scalability you don't have
- Everyone says microservices are "for scalability," but **most companies don't have scalability issues** — "unless you're Netflix."
- At the insurance company, the first service built was the **account (login) service**; on a **single JS instance** it handled **68,000 logins per minute**.
- "I think we just solved our scalability issues — we don't have any." The company never expected 68,000 logins a minute.
- Don't adopt microservices for the wrong reasons.

---

## 4. Architecture — Simple & Adaptable, Per Service

### 4.1 The most adaptable architectures survive
- Jokingly credits "the famous Java developer with a beard, **Charles Darwin**": it's the **most adaptable** architectures that survive — not the strict ones with **13 layers** that big banks have.

### 4.2 A 25-year-old architecture from a UML book
- 25 years ago he wrote a book (in Dutch, "nobody knows how to read it") describing a **simple architecture**.
- When they started doing microservices he realized that same simple, extremely adaptable architecture still fit.
- The point isn't "adopt *this* architecture" — it's that **every service should have a really simple, adaptable architecture.**

### 4.3 The per-service layers
- **Domain** — the slice of the domain this service reasons about; it always starts here.
- **Repositories** — a pattern to fetch instances "from wherever they come from," pull them into the component, validate and reason about them.
- **Use cases** — "a container for process logic," a pattern "from the previous century."
- **Resource classes** — where requests/calls come in, then get routed through the other layers.

### 4.4 Use cases double as the authorization unit
- Authorization is modeled on use cases: e.g. a use case `manage profile` can only be executed by people who have that particular use case **in their scopes**.
- This makes the authorization model easy.

### 4.5 Data can come from anywhere; the service owns it
- A service's data may come from a **database**, **another service**, or an **external party** (e.g. a CRM).
- "One of the nice things about microservices is your data can come from anywhere — you just absorb it, and **the service owns the data**."

### 4.6 The same architecture in every language
- Looking back at old code bases, they all use the same layers "ever since I wrote the book."
- A **.NET codebase from ~2014** has the same layers; the repository pattern (which "comes from the DDD book") looks the same in **C#**, **Java** (including functional style — "not going to talk about monads today"), **Python** ("ugly… no, it's got nice orange colors"), and **TypeScript** (a bit shorter).
- All have the **same responsibilities**, reusable "over and over again, in any language, on any platform."

### 4.7 A small team drives a single stack
- Team of **13 people including himself** — "I don't have 1,500 developers and wouldn't want them."
- With 13 devs you can't spread across many stacks; too much knowledge to hold.
- They're moving **everything to a single stack** — including the **mobile app, from Flutter to React Native (also TypeScript)**.
- ~**150–160 small repos**; he needs to open **any** of them and instantly understand the layers, classes, responsibilities, and patterns. "For us that's essential."
- A bit of architecture documentation lives on their **GitHub**.

---

## 5. A Collection of Small Applications (Breaking Up the UI)

### 5.1 Not one application — many small ones
- They chose to build **a collection of small applications**, not a single application.

### 5.2 The problem with the "normal" microservices architecture
- The regular pattern: many services own the data, plus **one application on top** that talks to the services.
- The dependencies were broken in the services, but the **application still holds everything** — all the business logic — so the dependencies just moved up.

### 5.3 Break the UI along business processes
- The e-commerce checkout process: **select a product → add another → put it in the basket (they call it a basket, not a cart) → checkout → register yourself → register payment → done.**
- Different parts of that process **own different parts of the domain**: **products**, **basket/cart**, **accounts**, **orders**.
- So they split the UI into **small applications** each revolving around a small part of the domain.

### 5.4 Apps-to-services, services-to-data
- **No app talks to a database** — apps only talk to services; services talk to data (an explicit architectural choice).
- There is **not a 1:1** app-to-service mapping — most apps talk to several services and assemble their own useful slice of the domain.

### 5.5 Independent deployability of UI apps
- Independent **repos** and independent **pipelines** per app.
- He can deploy changes to the "My iBOOD" pages **without touching checkout** — "we don't like touching the checkout; it works, it's great, I don't want to touch it if I don't have to."
- "It works quite nicely."

---

## 6. Breaking Down the Domain (Domain-Driven Design)

### 6.1 The idea is old: low coupling, high cohesion
- Back in the **1970s** we already talked about low coupling and high cohesion.
- Group things together **not** because they're all repositories, but because they all reason about the same thing (orders, products, accounts, profiles).
- "It's not the data, it's the **code** that changes together."
- Works in a **modular monolith** too — "and you should, if you do monoliths."

### 6.2 The Unix philosophy
- "Write programs that do one thing and do that one thing really well" — the same idea.

### 6.3 Bob Martin's Single Responsibility Principle
- SRP: "**gather together the things that change for the same reasons.**"
- So *don't* put all gateways in one layer and all repositories in another — they don't change for the same reasons.
- The right breakup: order gateway + order repo + order use cases change when something about **orders** changes; likewise for products.

### 6.4 A code smell: the 352-line file
- A **Python file with 352 lines** is "big in my book" — a code smell.
- He writes very small functions, "usually one-liners or one-statement."

### 6.5 The DDD "blue book"
- Go read **Eric Evans' blue book** — "excellent" but "really hard to read… I read three pages and fall asleep like an angel." Still "the quintessential book for this industry."

### 6.6 The single-unified-model trap
- Evans: as you model larger domains it becomes progressively harder to keep one **single unified model** — the more you extend it, the harder to maintain. "This is still about dependencies."

### 6.7 Bounded contexts
- Instead of one unified model, create **several models**, each valid within its own **bounded context**.
- Example: an e-commerce model has a **replenishment** side (reorder out-of-stock items from the vendor with the lowest price) and an **ordering** side (customers, orders, payments).
- **Product** plays **two different roles** — with different behavior and properties on each side — so it has **two different meanings**.

### 6.8 Ubiquitous language
- Within a single bounded context everything adheres to a **single ubiquitous language** — every term has exactly **one meaning**.
- "Product" violates this in the unified model because it means different things; split it so replenishment and ordering each have their own thinly-connected "product."

### 6.9 Aggregates
- After splitting into bounded contexts, the services were still quite big — so back to the book: the **aggregate** pattern.
- Evans' definition: an aggregate is "a **group of associated objects considered as one unit** with regard to data changes" — again, everything that **changes (and is saved) for the same reason**.

### 6.10 The aggregate boundary maps to a microservice
- The aggregate is "demarcated by a **boundary** which separates the objects inside from those outside."
- "This is typically what a microservice is" — a part of the domain separated from the rest by a boundary.

### 6.11 The aggregate root
- Every aggregate has a **root** — an entity, the **only object accessible from outside**, usually **by its ID**.
- Maps cleanly to resources/URLs: "go into the products service and get this product by its ID."
- The root may hold references to any aggregate object, but an **outside object may reference only the root** — you can't reach past the root into inner objects. "This is exactly how we use microservices."

### 6.12 Boundaries evolve — forest, not desert
- Turning aggregates into services "sounds really simple; it's not" — it takes **a lot of negotiation** about when things change, and it's **not static**.
- Today's service boundaries differ from those of **two years ago** and keep changing; you must adapt.
- "We're in the **forest, not the desert**" (echoing an earlier "brilliant talk").

---

## 7. CI/CD

### 7.1 Small services make continuous delivery feasible
- Microservices suit continuous delivery because deploying **small** things is far easier than pushing big applications and 40-system landscapes as a whole.
- Counter-example: on that dependency-heavy landscape, **deployment alone took six weeks** — "no coding, no testing, just the deployment." That kills speed.

### 7.2 "If it hurts, do it more frequently"
- Quoting the **author of the Continuous Delivery book**: "**if it hurts, do it more frequently, and bring the pain forward.**"

### 7.3 Big batches breed distrust and slowness
- Wait longer → the change set grows → more integration/system testing needed → organizations **trust the chain less** → they make releases **bigger** ("this needs to be in too") → slower still.
- "Once every three months → four months"; one company he worked for could **only release once a year** — "imagine that. They went bankrupt, of course." Dependencies again.

### 7.4 The bus metaphor (the one thing to remember)
- His favorite quote of the talk, **credited on-stage to "Jason"**: "**Missing the bus is not a big deal if you know there'll be another one along in five minutes.**"
- Anecdote: last night after dinner they rushed for **the last metro** — "if the next train's in 5 minutes, I don't care if I miss it; if it's at 5 in the morning, you're in trouble."
- Microservices get you to the world where **the next bus comes in five minutes**: deploy "a bit early," and if something's wrong "we'll just release again in five minutes." (Caveat: right for e-commerce, not every industry.)

### 7.5 Small deltas make testing easier
- Deploying many small parts continuously means the **deltas between releases are tiny**, so testing the whole landscape becomes easier — and you get **rapid feedback**, which makes you more productive ("as the desert people would say").

### 7.6 Automate everything
- Any stack works, but you must **automate everything you can think of**.
- Praise for their **ops engineer** on the team who "can write pipelines and automate stuff faster than anybody else I know."

### 7.7 Deming: build quality in
- Edwards Deming: "**eliminate the need for massive inspection by building quality into the product in the first place.**"
- For them: before releasing (every 5–10 minutes) they already **know it will probably work**.

### 7.8 The pipeline
- Runs from check-in: **unit tests already run on his own laptop** → pipeline does **format + lint (Prettier)** → **tests** → **Sonar** quality checks → **containerize/publish** → **deploy web test** → **deploy to acceptance** (load test usually here) → **deploy to production. Done.**
- Duration depends on the service/app; this one ran in **~30 minutes** — "I push it out, continue working, and 30 minutes later people use it in production."

### 7.9 Pipelines as code, from a shared definition
- **Infrastructure as code**; pipelines **defined in script**.
- Each run **picks up a definition**; change the definition (usually **adding** more than removing) and all subsequent runs of the **~150 pipelines** use the new definition.

---

## 8. Testing

### 8.1 The airport spreadsheet test plan
- At the airport (waiting for a plane to Oslo) a man opened a laptop with a **spreadsheet test plan** — steps to take to test software, with **check marks** as each was done. "It takes a lot of time… too long."
- If you go to production 50×/day you **cannot** manually test everything this way.

### 8.2 What manual testing should (and shouldn't) be
- Reserve manual checks for **new features**: "does the button fit in the right place? Is it responsive?"
- Don't do what a former teammate did — **printing spreadsheets and clicking every button by hand**. "It slows you down; you can't redeploy every five minutes."

### 8.3 Unit tests give you confidence
- Many teams have "very little unit tests" (a COBOL codebase has none — "no unit test framework for COBOL that I know of").
- In every other stack you should have far more: "**3,000 green tests**" give "a sense of security" that a deploy still works.

### 8.4 Open source demands tests
- Contributing to open source (they maintain a **TypeScript microservices framework**) requires green tests because "people depend on it and I don't even know these people."

### 8.5 The test pyramid — automate up the stack
- Move toward **lots of unit tests** plus **automated API, integration, web, and system tests**, plus **load tests** — and **very little manual testing**. "The only way to build quality in in the first place."

### 8.6 Michael Feathers' anti-definition of a unit test
- A test is **not** a unit test if it: **talks to a database**, **communicates across the network**, **needs configuration**, or **can't run in parallel**.
- Consequence: each test must **set up its own state** and **tear it down** afterward — you can't leave data in a test database — so it can run **in isolation** and **in parallel**. "Still hard, but the easiest way to make this work."

### 8.7 Where testing lives in their pipeline
- Unit testing (a lot), syntax validation, linting, **static code analysis**, API tests, security-as-integration, web tests, performance/load tests, and a **few** end-to-end tests (kept few because "they change too often").

### 8.8 Sonar and coverage on new code
- They use **Sonar** (free) for **static code analysis** — "not advertising."
- Key trick: measure coverage **on new code**, not just the existing base. A 95.4% base barely drops when you add two untested lines, so you could avoid testing new code "for a very long time" — measure the **new-code** threshold instead.
- They enforce **~80% coverage** everywhere — "it annoys us, but it keeps the discipline of adding tests." Nobody enjoys it, but it lets you "code with way more confidence" (unlike "this poor developer praying for his code to work" — and "he runs his IDE in light mode; just don't do that").

### 8.9 Dropping pull requests and code reviews
- They **stopped doing pull requests / code reviews** because they slow you down.
- Not universal — Sander wrote a magazine article/LinkedIn post: PRs make sense for a **large international bank** with 30 teams on a mobile app releasing every three weeks.
- The failure mode: the reviewer **may not be there** (e.g. **a national holiday in the Netherlands today** — code pushed late yesterday won't be reviewed until Monday afternoon, "almost a whole week").
- Feedback usually lands on **linting/formatting** (automatable), not architecture, because nobody has time to read all the code — worse with large PRs.
- Getting a review back a week later forces expensive **context switching** ("what was I doing last week?").

### 8.10 Trunk-based development
- Instead they do **trunk-based development** — "Can you do that? Yes, and you probably should."
- Everyone pushes to trunk, so you want your change **back in as fast as possible** to avoid **merge conflicts** ("I never understood how these merging tools work; I'm too old for this").
- This pushes you toward **smaller and smaller changes** (be first to check in again) — "and really really small is easier. That's the way it is in software development."

---

## 9. Data — Who Owns It

### 9.1 The monolith mirrors the database
- A monolithic app usually **mimics its database** — works, but gets complex as the model grows.

### 9.2 The trap: microservices sharing one database
- First refactor breaks out services but keeps them **talking to the same database** — especially painful with **relational/SQL** databases where everything is connected.
- The **dependencies remain in the database**: gone from the UI, gone from the domain, but "the database is still going to do this." "Dependencies again will kill you, even if they're in a database."

### 9.3 Services own their own data
- Move to **each service owning its own data** — "cool, also complicated."
- Example issue: to get an order (which contains products), you **don't talk from one database to another** — "the **first rule of microservices club: you don't talk to another service's database**."

### 9.4 Snapshots
- To resolve the order/product problem you either **call the product service** or keep a **snapshot** of the order.
- When someone places an order, iBOOD **snapshots everything related to it** — that's the state they want frozen.
- So a later **price change does not alter a past order**. "Every situation needs a decision about how to deal with the data and where to keep it."

### 9.5 Duplicated data is normal
- **Redundant / duplicated data** is very much a thing in microservices — you save data for different reasons, not for a fully normalized model.

### 9.6 Different storage per service
- Because services own their data, they can **store it differently** — not everything needs a relational database.
- They use **Firebase** for authentication, a **relational database** for very hierarchical data, and **document databases** for most services.
- Document-DB payoff: the **whole aggregate stores in a single statement** ("I just store the JSON… done") and comes back in **one call** — the same call as a request to the service.
- Service-owned data is "the last thing you do to break down all the dependencies of your domain."

---

## 10. Ways of Working

### 10.1 Work changes when you can deploy 50×/day
- Since ~2014/2015 their ways of working "became very different." The ability (and desire) to **release 50×/day** makes you rethink how you work.

### 10.2 Forest vs. desert
- References **Kent Beck's morning keynote**: "we live in a forest; the rest of the company is still a desert — we're the oasis in the desert."

### 10.3 No individual code ownership
- With **13 people and 160 repos** you can't have individual ownership — **everybody can touch every piece of code**.
- "We talk to each other the whole day" — close collaboration and autonomy.

### 10.4 Dee Hock — simple purpose, complex behavior
- Quotes **Dee Hock** (founding CEO of **Visa**), the second thing to remember: "**Simple, clear purpose and principles give rise to complex and intelligent behavior; complex rules and regulations give rise to simple and stupid behavior.**"
- Give people space to experiment and make recoverable mistakes (the next bus is 5 minutes away); complex rules make people just "follow the process."

### 10.5 Simplify to amplify
- "**Simplify to amplify**" — push out everything you don't like or find unnecessary, "way more than you might think."

### 10.6 The Amsterdam traffic-lights story
- On a crossroads near his Amsterdam home, the city **removed most of the traffic lights** (a few remain for trams).
- In an over-regulated country ("every street has ~50 traffic signs") this produces "simple and stupid behavior" — but removing the rules made **people start to communicate**: look each other in the eye, read intentions, decide who goes first. "It works even with cars — well, except for BMWs."
- Take away the rules and people communicate, and then they do better work.

### 10.7 What they DON'T do
- **No Scrum** — "I stopped using Scrum 15 years ago; I don't like it."
- **Not Kanban either** — "there are like 50 (maybe 500) shades of ways of working in between."
- **No sprints** — pointless when you push to production 50×/day.
- **No retrospectives.**
- **No Scrum Master.**
- **No product owners** in the classic sense — "everybody on my team is their own product owner."
- **No estimation** except "ballpark figures at a very high level."
- **Experimenting with fewer standups** — no standup on **Thursday** (their office day).
- **No pull requests, no code reviews** (see §8.9).

### 10.8 What they DO do
- **Event storming** — to figure out how processes work and how the domain is set up; fits DDD and microservices well.
- **Pair programming** — a lot.
- **Mob / ensemble programming** — dynamic, not scheduled; e.g. a serious breakdown two days ago drew the whole team in without anyone being summoned; done remotely as **huddles** too.
- **Vibe coding** — "you need to do vibe coding, right? Otherwise you're not hip these days."

### 10.9 Micro-teams
- No two board items need the same set of people, so people **self-select work**.
- Recipe (not a rule): someone finishes an item → **picks from one of three boards** something they like / are good at / want to learn / want to figure out → others **join and sit alongside** → they **push to production → done → next item**.
- Item sizes range from **half an hour** to **a day or two**; a few are bigger ("I really hate them").
- Called **micro-teams** — "everything was micro, so that was the point."
- The only fixed boundaries are the **architecture**, the **CI/CD approach**, and how they **write tests**; everything else the team figures out itself. "A very organic way of working."

---

## 11. Closing

### 11.1 For the right reasons
- Microservices really help solve problems, but **start for the right reasons** — don't chase scalability you don't have. "If it doesn't work out, you're probably doing it for the wrong reasons."

### 11.2 It's a lot to take into account
- "Not an easy road to travel" — you need a real problem that it solves for you.

### 11.3 Solve a single problem every day
- The operating mantra: **solve a single problem every day**.

### 11.4 Simplify to amplify, and experiment
- Take away everything you don't need; **experiment** — remove parts of your ways of working, see if it works, and **put them back if it doesn't**. "Allow yourself the experiments — that's the only way to move forward."

### 11.5 Never stop learning
- "You can never stop learning — it's our industry."
- "We're in the best industry in the world; there isn't a job I would rather do." His youngest son asked what he'd do if not a programmer: "I'd learn to write code as fast as I could." "Oh, makes sense."

### 11.6 The final failsafe
- Closing joke: "if everything else fails and you've tried everything, there's only one thing left — **remove your `node_modules` and do an `npm install`.**"

---

## People & References Cited

- **Sander Hoogendoorn** — speaker; CTO of **iBOOD** (Netherlands e-commerce), ~47 years coding; open-source **TypeScript microservices framework** maintainer; author of a ~25-year-old Dutch **UML** book; lives in Amsterdam.
- **Martin Fowler** — his microservices definition used as the talk's table of contents.
- **Eric Evans** — Domain-Driven Design "blue book" (bounded contexts, ubiquitous language, aggregates, roots).
- **Robert C. "Bob" Martin** — Single Responsibility Principle ("things that change for the same reasons").
- **Michael Feathers** — anti-definition of a unit test (DB / network / configuration / not-parallel).
- **Jez Humble** (unnamed — "the author of the Continuous Delivery book") — "if it hurts, do it more frequently; bring the pain forward."
- **"Jason"** — credited for the **bus metaphor** ("missing the bus is fine if the next one's in five minutes").
- **W. Edwards Deming** — "build quality in… eliminate the need for massive inspection."
- **Dee Hock** — founding CEO of **Visa**; simple purpose/principles → complex intelligent behavior; complex rules → simple stupid behavior.
- **Kent Beck** — Craft 2025 morning keynote; forest-vs-desert metaphor.
- **Charles Darwin** — (joked as "the famous Java developer with a beard") most-adaptable-survives.
- **John Gall** — Gall's Law (a complex system designed from scratch never works).
- **Companies / systems referenced:** a Dutch insurance company (18M lines COBOL + 12M lines Java, mainframe on the 4th floor), iBOOD (~€130M revenue, ~six countries), a Dutch public-transport company (SAP, 142,000 tables), Netflix (scalability foil), AWS.
- **Tools / tech:** COBOL, Java, C#/.NET, Python, TypeScript, React Native, Flutter (migrating away), PHP, HTTPS, Prettier, Sonar, Firebase, document databases, relational/SQL databases, GitHub, npm/`node_modules`.
- **Concepts:** microservices; right vs. wrong problems; legacy escape; untangling dependencies; "dependencies will kill you"; technical death; simple adaptable per-service architecture (domain → repositories → use cases → resource classes); use-case-based authorization; single stack for a small team; UI broken into small business-process apps; apps→services→data; low coupling/high cohesion; Unix philosophy; SRP; bounded contexts; ubiquitous language; aggregates and aggregate roots; forest vs. desert / evolving boundaries; continuous delivery; the bus metaphor; automate everything / infra & pipelines as code; the test pyramid; test isolation; coverage on new code (~80%); dropping PRs/code reviews; trunk-based development; service-owned data; snapshots; duplicated data; polyglot persistence; simplify to amplify; no Scrum/sprints/retros/PO/estimation; event storming; pair/mob programming; vibe coding; micro-teams; "solve a single problem every day."

---

*Video: https://www.youtube.com/watch?v=JJzYwtVow9Q — Transcript via yt-transcript.sh; outline generated from the transcript.*
