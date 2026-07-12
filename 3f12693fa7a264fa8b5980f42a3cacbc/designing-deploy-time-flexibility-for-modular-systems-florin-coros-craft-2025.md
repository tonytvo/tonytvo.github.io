---
title: "Designing Deploy-Time Flexibility for Modular Systems - Florin Coros | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Florin Coros (founder, CodeDesign) on why monolith-vs-microservices is the wrong question — a modular system with contracts-only dependencies, proxies, and type discovery lets you decide in-process vs. REST at deploy time, demoed step-by-step on a .NET trading app, plus Q&A on versioning, timeouts, and DLL load overhead."
type: "reference"
tags: ["softwaredevelopment"]
---

# Designing Deploy-Time Flexibility for Modular Systems - Florin Coros (Talk Outline)

> A ~100-minute Craft 2025 (Budapest) session by **Florin Coros**, founder of **CodeDesign** (a small company focused only on the *design* part of software development — acting as solution architect on clients' projects and running software-design training). The subtitle deliberately says "in board" / is downplayed because, as he stresses, the talk is **not really about monoliths vs. microservices** — it's about a solution that lets you decide **only at deploy time** whether a modular system runs in one process (function calls) or distributed (REST/gRPC/message bus), from the *same compiled binaries*. He demos this in .NET but insists it works in Java or TypeScript — "there is no black magic … just simple programming, you just need some reflection and some dependency injection." Structure: monolith critique → microservices critique → the real question (modular systems) → three pillars → live step-by-step demo → Q&A.

---

## 1. Opening & Framing

### 1.1 The promise
- After you've written and compiled the code, you decide the deployment shape.
- Deploy as a **monolith** → inter-service communication is simple function calls.
- Take the *same* code without recompiling → **distributed** deployment; services talk over REST, gRPC, or a message bus.
- The demo uses **REST** ("maybe the easiest to have some communication").

### 1.2 The demo's payoff in one sentence
- Start from a distributed deployment (services in separate processes, over REST).
- Then just **copy some binaries from one folder to another** and restart.
- Things that were communicating over REST now communicate via simple function calls — **no recompile**.

### 1.3 Why 100 minutes matters
- In a 45-minute version the demo "feels very very magical and people don't really understand what's happening under the hood."
- With more time he can show how it's built so the audience sees there's no magic.
- "The power of it is mainly the structure and the design."

### 1.4 About the speaker
- Florin Coros, from **Transylvania**; just learned his name has **Hungarian roots** (his father comes from an area with many Hungarians), so it's nice to come to Budapest.
- Founder of **CodeDesign**: (a) takes over the architect/solution-architect role and leads design + implementation to hit goals on budget/time; (b) delivers training on software-design topics.

---

## 2. Why Move Away From the Monolith

### 2.1 The monolith is *easy* to work with
- Asks the room who works/has worked with a monolith — "almost everybody."
- He admits he *loves* working with a monolith — especially now that he knows what microservices are like.
- Everything in one place: one repository, clone locally, hit **F5**, everything builds on your machine, easy to debug.
- 15–18 years ago the norm was a **three-tier architecture**: browser client → monolith backend → database.

### 2.2 Where monoliths fall short — scalability
- Scaling a monolith means duplicating the *entire* thing — it's **all or nothing**; you can't scale a small piece more than the rest.
- Not cost-effective, and even then you must **synchronize state** across instances, which is tricky.

### 2.3 Reliability, availability, resilience
- Example: **50 users**, and one opens a screen with a **null-pointer bug** — that blows up the entire system, affecting everyone.
- Resilience is hard because you can't restart it easily.
- Most of these first-column problems could be solved with some level of **redundancy**.

### 2.4 Maintainability & testability
- Monoliths evoke huge code bases with **high coupling** — rigid, fragile: change one thing, it triggers two more changes.
- Testing often must be **end-to-end**; you can't easily test in isolation.
- Root cause of the right-hand-column issues: **bad decomposition**.

### 2.5 Modernization
- All-or-nothing again — you can't rewrite a little piece in a different language/technology.

### 2.6 The investment-bank story (~11 years ago)
- A **bank in the Netherlands** doing investment/financial trading; he visited for a modernization workshop.
- They were **3 years** into splitting their monolith into "subsystems" (they didn't call them microservices), communicating via a **message bus** (Tibco, if he remembers correctly).
- **Driver 1 — modernization:** migrate from **Delphi** to **C#** because good Delphi developers were getting hard to find; they couldn't rewrite it all at once, so split first, rewrite piece by piece; they couldn't "close the bank for a couple of years."
- **Driver 2 — release cycle:** they could release only about **once every 14 months** (huge even 11 years ago), because they had to test everything at once and couldn't afford bugs in investment trading (people lose money fast).
- **The new problem — performance:** after 3 years, core use cases ran very slowly; a single user action like "place an order" had a call chain of **10–15 hops**, and network latency added up to an unacceptable number.
- Result: 3 years of work, and the resulting system didn't work correctly for the core use cases.

---

## 3. Why Move Away From Microservices Too

### 3.1 Complexity is the headline cost
- Complex communication: transactions, reliability, safe over-the-wire calls.
- Developer experience is no longer nice/easy — not everything runs in one process on your machine; different Docker containers, technologies, protocols.
- Hard to debug and do **diagnostics in production** — you need logging that integrates everything.
- Infrastructure is more complex/expensive — the temptation to give each service its own machine leads to over-provisioned infra.
- Much of this is **unnecessary complexity**.

### 3.2 Microservices still have maintainability/testability problems
- Testability shifts: testing a piece in isolation is easier, but **verifying everything works together** (integration) is the hard part.
- Maintainability: a **web of communication** — "what happens if I change this API, who gets affected?"
- Root cause again: **bad decomposition**.

### 3.3 The pendulum & modular monoliths
- ~5 years back the industry started moving back toward the monolith — the **modular monolith**.
- "History repeats itself": 15 years ago monolith → microservices; now back toward the monolith.
- We keep circling because we ask the wrong question.

---

## 4. The Real Question: Build a Modular System

### 4.1 Monolith-or-microservices is the wrong question
- What developers actually want is a **modular system**.

### 4.2 The three attributes that come together
- **Maintainability, extensibility, reusability** — you can't have one without the others.
- Juval Löwy (from whom he learned a lot about modular systems) calls these three **"the ility"** to emphasize they come together.
- We're tempted to say we only want maintainability, not extensibility/reusability.
- Reason: it's **hard to sell reusability to management** — the manager hears "another project benefits from our work," and says "finish this system first, then think about extending it."
- But in engineering it doesn't work that way: the more you work on extensibility/reusability during decomposition, the more maintainability you get.

### 4.3 The screw metaphor for modularity
- Work in the "purple" piece without the "green" needing to know.
- **Reusability:** unscrew the "orange" from the "blue," drop it into a different system, use it there.
- **Extensibility by substitution:** screw a "yellow" piece into the "blue" so it gets the same feature from a different implementation, without "blue" knowing.
- **Extensibility by addition:** plug a "pink" piece into both "blue" and "green."
- A modular system = separated things (modules or services) that work together to produce features, giving you the-ility.

### 4.4 Modularity separates the communication concern
- Most monolith and microservice architectures suffer from bad decomposition because, when decomposing, we also think about **communication and deployment** ("will these live on the same server? how will they talk?").
- Communication should **not** be the primary concern during decomposition — it's secondary, addressed later.
- A modular system lets you separate that concern.

### 4.5 How many services? The cost graph (from Löwy's *Righting Software*)
- Two things we pay for: **cost to build** a service, and **cost to integrate** services.
- Plot number-of-services vs. cost; the **sum** (dotted green line) has a minimum.
- The architect's mission in life: **decompose the system into the area of minimum cost and keep it there** — "nothing else really matters."
- You need only be *near* the center — decomposition effort has **diminishing returns**.

### 4.6 Orders of magnitude
- **1** service — nobody wants one big thing; cost to build is astronomical.
- **1,000 / a million** tiny things — cost is astronomical the other way.
- Think in orders of magnitude: not 1, not 100 — around **10**. Can it be 20? Yes. 25? Yes. 30? "Maybe your system." 90? No. 2? No. → roughly **20–25 depending on the system**.

### 4.7 Contracts are the key enabler
- For a modular system to work, services must communicate **through contracts only**.
- If you depend on implementations instead, you're secretly at 1 or at 1,000 without knowing it.
- **Explicit contracts** = good **abstraction** (client doesn't need to know how it's implemented) + good **encapsulation** (client *couldn't* depend on the implementation even if it wanted to — it's hidden).

### 4.8 The contracts assembly — structure that enforces design
- He likes to build a code structure that **supports or enforces** the key aspects of his design.
- The **contracts assembly** is a physical boundary (a .NET assembly / a Java package) with a strict rule: **only contracts, no logic** — no ifs, no fors, no boolean expressions, no logical operators.
- Allowed: **interfaces** (operation contracts), **DTOs** (data contracts), and maybe **exceptions** (fault contracts). Nothing else.

---

## 5. Back to the Bank: What He Proposed

- Told the bank: keep the decomposition you already achieved (the subsystems from 3 years of work).
- Find the two/three services with very **intense communication** in certain use cases.
- Deploy those binaries **on the same server, in the same folder, load in the same process** → communicate via function calls, no network latency.
- Develop and test them **as if** always separately deployed; only the deployment changes.
- Outcome: they liked it; he built a **proof of concept** proving it in their context; won the project; his company built a **~20-person team** over a couple of years; the bank got a good way forward. This inspired today's talk.

---

## 6. The Three Pillars of the Solution

### 6.1 Pillar 1 — Dependencies only through contracts
- Achieved through the structure (contracts assembly + internal implementations) described above.

### 6.2 Pillar 2 — Proxies
- Each contract is implemented by a **proxy**.
- A remote proxy **forwards the call over REST** to another process.
- When the real implementation is available locally, a different proxy forwards the call to a **class in the same process**.

### 6.3 Pillar 3 — Type discovery (enables a generic host)
- Lets you implement a **generic host** (in the demo, a console) that can host *any* service.
- On process start it must **look at what has been deployed** and configure DI **declaratively** (via conventions/annotations), not imperatively.
- Uses their small open-source library **AppBoot** (Iquark, on GitHub).
- Companion training: **"Application infrastructure for clean architecture"** — teaches type discovery + building the structure that supports the separation and dependencies.

### 6.4 The example domain — three trading services
- **Quotation service** — `getQuotations` (by exchange/instrument, from-to, or by security code).
- **Orders service** — place a **sell** limit order, place a **buy** limit order, and get all placed orders; **depends on quotation** (you need the price to place a limit order).
- **Portfolio service** — calculates the value of the portfolio; also **depends on quotation**.
- Two deployment configs to play with: a **modular monolith** (in-process) and a **microservices** deployment (REST).

---

## 7. Live Demo — The End Result First

### 7.1 Solution structure in Visual Studio
- Two folders: **infrastructure** (feature-agnostic code) and **modules** (business-flow code, close to features).
- Modules: **portfolio**, **quotations**, **sales** (each one assembly).
- A single **contracts** assembly (in a bigger project you'd have several — even one per service — for **contract ownership**; kept to one for the demo).
- Hosts: **console host** and **console UI** (the UI simulates a "fat client" used to drive the demo).

### 7.2 The output layout on disk
- Deletes the `bin` folder and rebuilds; two folders appear.
- **debug** — all projects are configured to output their binaries into this one shared folder.
- **deploy** — a simulation of different deployment configurations, produced by **post-build events / .bat scripts** that copy DLLs into per-configuration folders.
- Relevant folders for demo 1: **portfolio**, **quotation**, **sales** — each holding only that service's services.

### 7.3 Three separate processes running
- A small .bat file launches three consoles: **quotations**, **sales**, **portfolio**.
- Each console is the *same* process; it logs its **web server port** (a small web server built with Web API in .NET) and which **module** it loaded.
- Each also loads a **proxy module** used to forward calls over REST.

### 7.4 Postman call to portfolio → cross-process REST hop
- Call `GET /api/portfolio/getValue`.
- Portfolio console logs a request from Postman → returns **200**.
- **Quotation** console *also* logs a call — from a **service proxy** whose ID matches the portfolio's — proving portfolio made an inter-process REST call to quotation.

### 7.5 Postman call to sales → same pattern
- POST to place a **sell limit order** → 200.
- Sales console logs the Postman call; quotation logs a proxy call with the sales module's ID.

### 7.6 The "magic" switch — copy quotation into the sales folder
- Goal: optimize the chatty **sales ↔ quotation** pair by co-locating them.
- Closes the **sales** console (others stay up); on disk, copies **quotation services** DLL into the **sales** deployment folder.
- Hits F5 to copy — **no recompile**; the sales folder now has both `quotation services` and `sales services` DLLs.
- Restarts the console → it logs loading **two modules** (quotations + sales).
- Repeats the Postman sales call → logged in the sales console, but the **separately hosted quotation process gets no call** → sales and quotation now communicate **in-process**, nothing recompiled.

### 7.7 Q&A during the demo — Q1: Why copy the service at all?
- Asker: couldn't you avoid the copy?
- Yes — the copy just **simulates a different deployment configuration** and makes it *visible/explicit* that nothing is recompiled.
- In production you'd use a **Docker file** to place everything on the image, or **pipelines** that deploy several services in the same box.

### 7.8 Q&A — Q2: Different services with different dependency versions (NuGets)?
- Asker: how do you copy by DLL when services depend on **different versions of the same NuGet**?
- Each service manages its **own dependencies**; if it builds/runs distributed it brings all dependencies in one place.
- Co-locating two services means putting each with its own dependencies in the same place — each loads what it needs.
- **Conflict risk:** binary names can collide → use a **separate folder per service** and a **convention** for how to load each. In a complex project this is required.

### 7.9 Q&A — Q3 (Slido): Front-end changes as a first step to modularity?
- If a team must ship a modern UI soon *and* move to a modular approach.
- A **fat/desktop client** can use the same technique — a modular system on the front end with contracts-only communication, but **no distributed deployment needed**.
- A **web client** (e.g., Angular) just calls REST APIs and is largely unaffected by whether the backend is monolith or distributed — as long as it can **identify the address** (needs **service discovery**).

---

## 8. Live Demo — Building It Step by Step (the IPC tags)

> Code is on GitHub under the **codedesign-training** account, folder **interprocess-communication trading app**; the walk-through uses tags prefixed **IPC**. He starts from a near-empty state (empty infrastructure folder; each module just an empty console) and evolves it.

### 8.1 The dependency-diagram guardrail
- Generates a **project dependency diagram** from code (many tools/languages; he uses **ReSharper**).
- The rule to preserve: **no dependencies between modules** — they depend only through **contracts**.

### 8.2 First contract — quotation
- A plain interface with two functions; returns a simple **DTO**.
- Data structures must be **easily serializable** for the chosen protocol (JSON for REST; proto for gRPC; whatever a message bus needs).
- Prefers concrete types (e.g., an **array** rather than `IList`, which is an abstraction) for contract data.

### 8.3 Step 3 — quotation implementation + orders contract
- Quotation implementation is dummy: hardcoded quotations in an array; functions just filter.
- The **OrderService** class implementing `IOrdersService` takes a **dependency on the contract** `IQuotationService` (injected via DI) — never on a concrete implementation.
- It gets all quotations, then (for a sell limit order) checks whether each quote's **ask price** exceeds the sell price and adds accordingly.

### 8.4 Adding the portfolio contract + implementation
- Portfolio implementation again depends on the quotation contract.
- Regenerating the diagram: dependencies exist but **the rule still holds** — implementations depend only through contracts.

### 8.5 The internal-class trick that hides implementations
- The `QuotationService` implementation is **`internal`** on purpose — a way to hide implementations.
- Demonstrates the violation: make it **public**, and ReSharper offers to add a reference from `OrderService` to the concrete class → the regenerated diagram then shows an **illegal cross-module reference**.

### 8.6 Enforcing the rule in CI (or in review)
- Options: **Visual Studio Enterprise (Architecture tools)** — draw a dependency diagram and VS checks code against it on build.
- Or write **simple reflection-based tests** that check references, run in **continuous integration**.
- Most of the time he **doesn't automate** it — generating the diagram during a **code review** makes an added reference "very visible"; references aren't added every day.

### 8.7 Why the imperative DI registration breaks flexibility
- The natural `main` would imperatively register interface→implementation pairs (Copilot even autocompletes it).
- But that forces the **console host to depend on every implementation** (they get dragged in at build time) — so the host is **no longer generic**, and deploy-time flexibility is lost. Same in Java or any tech.
- Fix: **type discovery** — configure DI **declaratively** via conventions/annotations.

### 8.8 AppBoot — how it works (no magic)
- On GitHub: **iquark/appboot**.
- Provides a **`[Service]` attribute** declaring "register this class as the implementation for the interface I specify."
- On `main`, AppBoot **scans all assemblies and types**, finds the attribute, and configures the DI container.
- Internals: a **`Bootstrapper`** takes a set of assemblies and a list of **registration behaviors**.
- A **registration behavior** has one function: given a type, return what (if anything) to register — a **`ServiceInfo`** (interface, implementation, contract name, lifetime), an abstraction over any DI container.
- `run()` configures a container, then `registerServices()` is essentially **two for-loops**: for each type in each assembly, pass it to each registered behavior; collected `ServiceInfo`s go into a catalog, then into the container.

### 8.9 Plugging in AppBoot (a step with no new code)
- Added AppBoot as a **NuGet** dependency to all projects.
- Console host additionally gets **AppBoot.Unity** (this demo uses the **Unity** DI container).

### 8.10 The console UI drives the calls
- Marks **console UI** as startup; it exists to let him invoke services **before** the REST infra is in place.
- It prints "hello," **bootstraps AppBoot**, then calls the portfolio.
- Setup passes the **list of assemblies** to scan: from the executable folder, take all DLLs and **filter to those starting with contracts/portfolio/quotation/sales** — no point scanning .NET-framework or third-party assemblies.

### 8.11 The crash that proves discovery is needed
- Running it **crashes** — DI can't find the portfolio service.
- Reason: the `PortfolioService` implementation isn't yet decorated with `[Service]`.
- Adds `[Service]` to `PortfolioService` and to `QuotationService` (which portfolio needs injected) — Copilot has "learned" AppBoot and helps.
- Reruns → the call goes through, returning the **portfolio value in process** — a modular monolith supported only by DI + structure, still contracts-only.

### 8.12 Diagram check after decorating everything
- Adds `[Service]` everywhere; regenerates the diagram — **no references among modules**, everything depends only on contracts (to implement or to consume); the UI depends only on contracts.
- Note: the console UI's modules are **not hardcoded** — remove or add a module and it's plugged in automatically.

### 8.13 Step 7 — add REST to the console host
- `main` hosts a **web application**, configures **routes** (controller + action), and runs the same AppBoot config as the UI.
- Adds **controllers** (e.g., `OrdersController`): a controller is how you expose a contract as a REST endpoint — it receives an implementation of the contract via DI and **forwards** the REST call to the real service.
- Controllers are hardcoded here; **in production** you'd want a **truly generic host** — one controller that can host any contract, detecting the function by convention.
- If no implementation exists for a requested service, the request **crashes**; alternatively, inject **dummy proxies** for every contract that return a proper **404** instead of an exception.
- Runs the backend; Postman `getPortfolio` / `getQuotation` work — endpoints are now exposed over REST.

### 8.14 Step 8 — proxies connect UI and backend
- Adds a **proxies** project in infrastructure (initially just helpers, then implementations).
- Each service gets a proxy (e.g., **OrdersServiceProxy**) implementing the same contract, using an **HttpClient**: builds the URL by convention, adds parameters to the query string, makes the call. Same for portfolio, etc.
- Runs host + UI side by side: on start the UI calls portfolio (returns **27 pounds**), and the backend logs a quotation call **through the proxy** (matching IDs).
- A `getQuotations` for "New York Stock Exchange" crashes (a bad request), but the **REST call did go through**.

### 8.15 The nondeterminism problem
- In the UI process, **both** the proxies and the real implementations are loaded.
- Which is used is **not deterministic** — it depends only on the order AppBoot loads DLLs from disk (real first vs. proxy first, one overwrites the other).
- Because **both** the proxy and the real implementation are decorated with `[Service]` (e.g., `IQuotationService` now has two `[Service]`-decorated implementations), you can't know which wins.

### 8.16 Step (final) — priority via a proxy registration behavior
- Adds an AppBoot extension **AppBootX** in infrastructure with two classes:
  - **`ServiceProxyAttribute`** — like `[Service]` but takes a type via the constructor.
  - **`ServiceProxyRegistrationBehavior`** — looks for the attribute and returns the registration.
- In `main`, register **two** behaviors; AppBoot is built so **later registrations override earlier ones**.
- Order: create bootstrapper → give assemblies → use Unity → **add proxy behavior first, then service (real) behavior** → run.
- `registerServices` uses a **registration catalog** that stores each `ServiceInfo` with a **priority**; iterating the catalog yields registrations in the correct order regardless of disk scan order.
- Net effect: because **proxies are added first**, they're **overwritten by real implementations when present**.

### 8.17 The invariant this establishes
- Assumption for *all* deployments: **proxies are always available** — so any received call can be forwarded over the wire.
- But if a **real implementation** is present in-process, it is used instead.
- This dual behavior is applied to the **console host** too (not just the UI).

### 8.18 Replaying the full demo
- Rebuild; each service in its own process; Postman `getQuotation` (no dependencies) returns directly; a **sales order** call shows sales → quotation over REST (matching IDs).
- Copy quotation into the sales folder → sales ↔ quotation now **in-process**; the separate quotation process gets nothing. "We completed the circle."

---

## 9. Production Caveat — Always Wrap In-Process Calls in a Proxy Too

- In the demo, the in-process path calls the **real implementation directly** — not good for production.
- From the order service's view in a modular system, the implementation is expected to be "somewhere over the wire."
- **Contract inconsistency risk:** a bug in the implementation returns **HTTP 500** when remote, but an **IndexOutOfBounds / null-pointer** when in-process — so the contract differs by deployment mode.
- Fix: a **second set of proxies** that forward the call **in the same process**, wrapping the real implementation with proper **error handling, logging, and telemetry**.
- "You should always use proxies for this to work in production" — that's how they actually do it; the demo took the shorter route.

---

## 10. Closing Q&A (Slido + audience)

### 10.1 Q4 — Timeouts and retries in the HTTP proxy?
- Belongs with the extra set of proxies mentioned at the end.
- **Retry** logic must live on the **client side** regardless of whether the implementation is remote or local — it's part of how you make the call on the client.
- Two sides to the question (server-side wrapping vs. client-side retry).

### 10.2 Q5 — DLLs are loaded at runtime; how much overhead, and how to deploy?
- **Overhead:** DLL loading happens on the **`main` function** — i.e., the **warm-up** of a distributed process, so it "doesn't really matter"; if startup is slow, implement a warm-up (fire requests, or wait) before accepting real traffic.
- Exception: a **desktop/front-end modular monolith** — waiting for everything to load on opening a screen *can* be a problem, so **preload** the DLLs there.
- **Deployment:** depends on the environment. For **Docker + Kubernetes**, write a Docker file per deployment configuration that copies the right binaries into the image (K8s isn't impacted by this design). Without Docker, use pipelines that know which DLLs to copy per configuration.
- **Addresses:** ideally use a **service discovery** that resolves each service's address by **name** — "basically like a DNS for production." In the demo he hard-coded three addresses (portfolio, quotations, sales) and was changing them in Postman.

### 10.3 Q6 — What does preloading DLLs look like?
- Only relevant for a **front end** built with this configuration (on the server it's just warm-up overhead, not a real issue).
- On desktop you can have the DLLs **preloaded** — "pretty much the same as you would load them directly," just without the dynamic-load delay.

---

## People & References Cited

- **Florin Coros** — speaker; founder of **CodeDesign**; from Transylvania.
- **CodeDesign** — his company (solution-architecture leadership + software-design training); has the **codedesign-training** GitHub account (interprocess-communication trading app, IPC tags).
- **Juval Löwy** — "the one from whom I learned a lot about modular systems"; coined **"the-ility"**; author of ***Righting Software*** (source of the number-of-services cost graph).
- **Iquark** — origin of the **AppBoot** open-source library (and **AppBootX** extension) on GitHub.
- **AppBoot / AppBoot.Unity** — DI-configuration-by-type-discovery library (`[Service]` attribute, `Bootstrapper`, registration behaviors).
- **"Application infrastructure for clean architecture"** — CodeDesign training that teaches type discovery + the enforcing code structure.
- **Tools/tech named:** .NET, Java, TypeScript, C#, Delphi, REST, gRPC, message bus, JSON, proto, **Unity** (DI container), **ReSharper** (dependency diagrams), **Visual Studio Enterprise Architecture tools**, Docker, Kubernetes, Postman, Copilot, Tibco (the bank's message bus), Web API.

---

*Video: https://www.youtube.com/watch?v=wDfKA8N6NE8 — Transcript via yt-transcript.sh; outline generated from the transcript.*
