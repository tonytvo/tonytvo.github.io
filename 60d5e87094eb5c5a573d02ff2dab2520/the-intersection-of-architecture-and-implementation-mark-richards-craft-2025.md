---
title: "The Intersection of Architecture and Implementation - Mark Richards | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Mark Richards on seeing your architecture in source-code structure, how structural and constraint alignment drift from the intended design, and using an Architecture Definition Language (ADL) + GenAI to generate fitness functions (ArchUnit, etc.) — with the Sysop Squad example, the flattening refactoring pattern, layered-architecture constraints, architecture-as-code, and a detailed Q&A."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# The Intersection of Architecture and Implementation - Mark Richards (Talk Outline)

> An impromptu ~90-minute Craft 2025 session by **Mark Richards** (hands-on software architect, founder of **developertoarchitect.com**, co-author with **Neal Ford** of *Fundamentals of Software Architecture* and *Software Architecture: The Hard Parts*) — added last-minute (called "one and a half hours ago") when another speaker (Henry) couldn't make it. It's brand-new material Richards and Ford have researched over the past year for their next book. Thesis: architecture doesn't live in a silo — it intersects other business concerns at an **"architectural nexus"** of **nine intersections**, and the most important is **architecture ↔ implementation**, where systems almost always drift out of alignment. He shows how to *see* architecture in source-code structure, how it silently misaligns, and how **architecture as code** — an **Architecture Definition Language (ADL)** fed to GenAI to generate executable structural tests (fitness functions) — keeps implementation continuously aligned. Uses code in **Java, C#, Python, JavaScript/TypeScript** ("five" languages, to laughter). Structure: the intersections → structural alignment → ADL → real-world drift → the flattening pattern → constraint alignment → architecture-as-code wrap-up → Q&A.

---

## 1. Framing: The Intersections of Architecture

### 1.1 Two assertions
- **Assertion 1:** our systems don't live alone/in a silo — they must **intersect** with other aspects of the business to succeed.
- Neal Ford's term: the **architectural nexus** — "a nexus is an intersection; multiple intersections form a nexus."

### 1.2 The nine intersections
- **Implementation**, infrastructure/environment, data topologies, engineering practices, team topologies, systems integration (other teams/systems), the business environment, the enterprise, and **generative AI**.
- Ford's prior-day "aspect-oriented architecture" talk touched on many; this session goes deep on **implementation**.

### 1.3 Why implementation is the most critical intersection
- In most cases the architecture and its implementation **get misaligned**.
- The session shows: how to *see* an architecture in source code, how easily they misalign, and how to **realign** structure with implementation via **architecture as code** (describing architecture through executable source code for constant alignment).

### 1.4 What "architecture" means here (audience question)
- An attendee asks: business, solution, coding, or infrastructure architecture? Answer: **the structure of the system** — how it works, what services/gateways/logical components exist, what domains/subdomains exist.

---

## 2. Structural Alignment

### 2.1 The tent metaphor
- The conference tent had an architecture (beam spans, bolts, loads, stress points) designed by an architect and built by craftspeople to spec.
- Question: were the plans **followed to spec**? "I hope it's 100, not just 95" — we trust the implementation followed the architecture.
- Contrast: your current system's architecture was maybe followed **~85%** ("not exactly, maybe 15%") — a "dumpster fire," and that describes **85% of all systems**.

### 2.2 Rooms as building blocks
- A floor plan is made of rooms that each serve a purpose (kitchen, bathroom, bedroom, office); load-bearing walls aside, rooms are the **building blocks**.
- Without rooms you have an uninteresting open shell.

### 2.3 Logical components are the building blocks of a system
- The **things a system does** (payment processing, shipping, order fulfillment, order history) are the building blocks — called **architecture / logical components**.
- A logical component is **implemented through source code** and can be grouped into monoliths or services.

### 2.4 Seeing architecture in source-code structure
- We draw boxes/lines and hand them to developers, who say "great, now go away and let us build it" — but we don't know if it was followed.
- The **structure of the source code** (not the code itself) reveals the real architecture: higher-level directories/namespaces = **domains/subdomains**; **leaf nodes** = **logical components**.

### 2.5 Payment as a concrete component
- Write `CreditCard.java` (charges a credit card, takes a payment object) — physical code that must live in a directory/namespace.
- Put `Zelle`, `Venmo`, `Alipay`, `PayPal` classes in the **same `payment` namespace** because they do the same thing → that's a **logical component**.
- Architects care about **components and their interactions**, not the class files (a developer's concern).

---

## 3. The Sysop Squad Example

### 3.1 The domain
- **Sysop Squad** — an architectural kata from *Software Architecture: The Hard Parts*: a trouble-ticket system. Customers buy electronic equipment; on trouble, they file a ticket; customer-facing experts (the "sysop squad") come fix it.

### 3.2 The main flow
- Customer registers and maintains a profile → creates a ticket → system (within a 2-day guarantee) **locates and assigns an expert** → customer is **notified** → ticket uploaded to the expert's **mobile device** → expert fixes it and **marks complete** → customer sent a **survey** → survey received.

### 3.3 The intended architecture (three domains)
- **Ticketing** domain: components **ticket creation**, **ticket queue** (abstracting Kafka vs. DB polling), **ticket completion**, plus subdomain **assignment**.
- **Assignment** subdomain (hard — "almost a traveling-salesperson problem"): components **ticket assignment**, **customer notification**, **ticket routing**.
- **Customer** domain: register, maintain profile.
- **Survey** domain: send survey, receive survey, survey templates.
- This maps to a directory/namespace tree: ticketing/customer/survey at top, assignment nested under ticketing, components as leaf nodes.

### 3.4 The drift after production
- The developers' actual directory structure "all works, all tests pass," was released — but **ticket assignment is missing**, **customer registration is missing** (there's a "subscriber information" instead), **mobile connection** is an unexpected leaf component, and **receive survey** code is buried where you wouldn't expect.
- The reverse-engineered architecture from that code is **very different** from the intended one — this is how they misalign (85–95% of cases).

### 3.5 Why it matters (five drivers)
- Which architecture (intended-left vs. developer-right) is better for: **agility** (responding to change), **reliability**, **adaptability** (env/tech/network/platform change), **extensibility/evolvability**, and **ease of migration** monolith → distributed? — Always the **left** (intended).

### 3.6 Homework assignment for Monday
- Reverse-engineer your own system: high-level directories = domains/subdomains, leaf nodes = components; a class in one component instantiating a class in another forms a **line** (coupling) between components.
- "After you stop laughing and go through weeks of therapy," ask **what should we have?** These techniques apply to **existing** systems, not just greenfield.

---

## 4. Architecture as Code and the ADL

### 4.1 The Architecture Definition Language
- **ADL** is a **pseudo-code**, **language-agnostic** way to describe the structure of the system (and all nine intersections).
- Three parts: **metadata** (what the test is about, where source lives, type/category); **artifacts** (system, domains, subdomains, components, libraries, services, constants); **actions** (assertions on artifacts to enforce structure).

### 4.2 Generating fitness functions with GenAI
- Feed ADL as a **prompt** to Copilot / Gemini / ChatGPT to generate **structural tests** (fitness functions):
  - **ArchUnit** for Java, **ArchUnitNET / NetArchTest** for C#, **TS-arch** for JS/TS, **PyTestArch** (pytest) for Python.
- Richards has hand-written these tools for **10+ years**; last year they realized those tests *describe the architecture*, so they created the general, language-agnostic ADL after **hundreds of iterations**.

### 4.3 Defining domains — the `as` binding
- ADL file "define the domains": system **Sysop Squad**; define domains `ticketing`, `customer`, `survey`; **assert classes exist only within these domains/subdomains** and nowhere else.
- The **`as`** keyword binds a **logical name** to the **physical location** (namespace/directory) — that's how enforcement leverages the actual structure.
- Fed to ChatGPT → it restates the intent → generates **ArchUnit (Java)** code ("classes in the base package should reside in ticketing/customer/survey"), an executable test that fails if other directories appear; also generates the **ArchUnitNET (C#)** version.

### 4.4 LLM "hit rates" by language
- **Java/ArchUnit: 95–~100%** directly-executable generated code; **C#: ~80%**; **Python: ~70%**; **TS-arch: ~70%** (minor tweaks).
- Reason: the **corpus** — far more Java + ArchUnit (~15 years old) than ArchUnitNET (~8 years) or NetArchTest (~10 years).

### 4.5 The friction — and collaboration as the fix
- Friction: to enforce architecture the architect must **dictate the code structure** (namespaces/directories) — "don't you dare tell me the names of my namespaces."
- Resolution: **collaboration** — the architect doesn't care what you name things, only that they follow the architecture's structure. Explain *why* (the five drivers), then ask developers for the actual directory/namespace names to bind as physical locations.
- **DDD = "Demonstration Defeats Discussion"** (a joke on Domain-Driven Design) — show the two-architectures slide to make the case.
- Developers (not just architects) love it because it's a tool for **fast feedback**.

### 4.6 Going deeper — components and subdomains
- ADL for the **ticketing** domain: components `ticket creation as creation`, `ticket completion as completion`, `ticket queue as ticket_q`, plus subdomain `assignment`; assert all classes live within those.
- Separate ADL file for the **assignment** subdomain: components ticket assignment, customer notification, ticket routing.
- Each generates hookable tests (JUnit/NUnit/pipeline).

### 4.7 Defining coupling (dependencies)
- ADL can define **which components/services may talk to which**, avoiding spaghetti.
- Survey example: only `send` and `receive` depend on `templates`. Assertions: **send survey has no dependency on receive survey**, **receive has no dependency on send**, **templates depends on neither** — each assertion becomes a **separate test method**.

### 4.8 How to partition ADL files
- One giant ADL for the whole architecture generates **one class with many methods** — but changing one component forces regenerating the **entire test**.
- Much better: **smaller ADL files** — one for domains, one per domain/subdomain down to component level.

---

## 5. Real-World Drift and Fast Feedback

### 5.1 A new story adds a component
- New Jira ticket: "add customer sign-in." Developers just create a new `sign-in` directory → they've **created a new component** and **changed the architecture**.
- Developers "never / hardly ever" update architecture diagrams to match code — diagrams are mostly out of date.

### 5.2 The failing test as a trigger
- Because there's an **executable test**, the ADL is now invalid and the **test fails immediately** — **fast feedback**, not discovering it "nine months down the road."
- The failed test is a **notification/placeholder**: the architect adds the component to the ADL, regenerates the source code, updates the diagrams — ADL correct, test passing again.

### 5.3 Bridging the developer/architect gap
- The tool forces the **collaboration** that's usually missing and keeps the architecture **always up to date**; structural changes may impact capabilities (reliability, availability, fault tolerance, performance, scalability, elasticity, agility).
- Richards often **delegates** the ADL/regenerate/diagram update to a **tech lead or senior developer**, then a quick 5-minute chat may conclude the new code fits an **existing component** — no structural change needed.

### 5.4 Test-driven architecture
- For existing systems: start with domains you know (from DDD), write the ADL, generate the tests — they'll **fail**, and that's OK.
- Analogous to **TDD**: write the architecture test first (the ADL of what you *want*), then refactor code to make it pass = **test-driven architecture**.

---

## 6. The Flattening Refactoring Pattern

> One of ~8–9 decomposition patterns Richards created ~10 years ago (detailed in *The Hard Parts*). "Half of you will love this pattern; half will hate it."

### 6.1 The problem — "hills"
- Systems form **hills**: namespace upon namespace upon namespace (package upon package…), each level holding code.
- Example hill: `com` (base, e.g., security/login) → `sysop` → `customer` (abstract classes, entities, DTOs) → `notification` → `email/letter/SMS`.
- To extract **Letter** as a component you'd have to drag along all the code above it — but everyone else needs that code too → another "dumpster fire."

### 6.2 Why bad namespaces get created
- Vanity: "I wrote/maintain these three SMS classes, I'm a good coder, I want them **separated** from the rest of notification, which stinks" — the real rationale behind many new namespaces.

### 6.3 Key definitions
- **Root namespace:** any node that got **extended** by (has children) another node. Rule: **"No code shall exist in a root namespace."**
- **Orphans:** classes with no component home (they sit in a root namespace).

### 6.4 Collapsing (chopping the hill down)
- Right-click **refactor-move** the SMS code into `notification`, then **delete** the empty SMS namespace.
- Give orphan classes (profile, avatar upload, address) a home: create a `profile` namespace, refactor-move them in → now three components; **all code pushed to leaf nodes**; `customer` becomes a **domain** (not a component).
- This is effectively **domain-driven design from the bottom up** — identifying domains/subdomains/components (bounded contexts) from an unstructured app.

### 6.5 Shared code → explicit coupling
- Objection: those root classes are **shared** abstract classes/entities/DTOs used across `customer` — "don't move them."
- That's **implicit coupling** (extremely hard to find) and they're still orphans in a root.
- Fix: create a `shared` namespace (a name not already in the repo), refactor-move the shared code there → now `notification` and `billing` **explicitly depend on `shared`** — **explicit coupling**, nothing broken.
- Caveat: some frameworks **require code in the root** (e.g., .NET config / deployment files) — sometimes exceptions are needed.

### 6.6 Expanding (building the hill up)
- When the "pointy-haired architect" insists SMS code stays in `SMS`, you can't collapse; instead **build up** to make it flat.
- `notification` is a root with orphans (letter and email code): create `letter` namespace and refactor-move the three letter classes; create `email` namespace for the two email classes → three components, and `notification` becomes a **subdomain** under the `customer` domain.

### 6.7 The payoff
- In ~22 minutes, moved code (not changed it — "we're not breaking anything") from an unstructured mess to a clean structure with identified domains/subdomains/components.
- The result is more **agile, reliable, adaptable, extensible/evolvable**, and easier to split monolith → distributed.

---

## 7. Constraint Alignment

### 7.1 The use case
- "Tight budget, tight timeframe" ("said no one ever") **and** we expect **lots of change to the underlying data structures** and must move fast on them — that's the domain problem.

### 7.2 Choosing an architecture via star ratings
- The **star-rating chart** from *Fundamentals of Software Architecture* (7 years to develop): 1 star = poorly supported, 5 = very well supported; downloadable on **developertoarchitect.com** (Resources), along with a characteristics workbook and the **ADL reference**.
- Cost + simplicity → **microservices** is expensive ($$$$$) and 1-star simplicity → **no**.
- Candidates: **layered** ($, 5-star simplicity), **modular monolith**, **microkernel** (plug-in), **service-based** ($$, coarse-grained domain services).

### 7.3 Domain- vs. technically-partitioned
- **Domain-partitioned** (modular monolith, microkernel, service-based, microservices): data/DB logic is **everywhere** (partitioned by domain).
- **Technically-partitioned** (layered: presentation, business, services, persistence): can **isolate database changes** → the right fit here.
- **Layered architecture** ("the de facto architecture") wins: separation of concerns, isolation, and change control — a DB change (done right) only touches **persistence**.

### 7.4 The required constraints
- **No one talks to the database directly** except persistence (presentation → business → persistence).
- **Open/closed layers:** a **closed** layer must be passed through to reach the layer below; an **open** layer (e.g., services) can be skipped over.
- **All database logic resides in the persistence layer.**

### 7.5 The drift (constraint violation)
- UI developers bypass layers to fetch a customer name "for performance" (avoiding the **architecture sinkhole anti-pattern**).
- Backend developers who "understand DDD" argue **data is part of the business domain** and put DB logic with business logic.
- Result: the first data change (within a week) forces changing **every single layer** → dumpster fire — a **constraint** (not structural) misalignment.

### 7.6 ADL for constraints
- **Layer dependencies:** system with 5 layers; assert `presentation` has **no dependency** on `services` or `persistence` (closed → can only talk to business) → ChatGPT generates the Java + C# tests.
- **DB-logic isolation (the cool part):** assert "persistence is the only layer that contains database logic."
  - ChatGPT interprets "database logic" for **Java** as: no class outside persistence may depend on `java.sql` `Connection`, `Statement`, `PreparedStatement`, or `ResultSet`.
  - For **C#**: no types assignable to `IDbConnection`, command, reader, or data adapter.
  - Richards first defined **constants** for these, but that made the ADL **language/platform-specific** — instead he just asserts "can't contain database logic," which **humans and GenAI both understand**.
- Other constraint example: "all inter-microservice communication shall use **gRPC**" — writable as ADL.

---

## 8. Architecture as Code — Putting It Together

### 8.1 The documentation trio
- **Diagrams** show the *how*; **Architecture Decision Records (ADRs)** capture the *why* (justification and trade-offs — e.g., why not REST here, why one gateway not two).
- **ADL** can be associated with an ADR (to enforce a decision) or stand independently → **complete documentation**, described through **executable source code** — like infrastructure-as-code and policy-as-code, now **architecture-as-code**.

### 8.2 Two closing caveats
- Governance/fitness-functions/ADL only **tell you that you have a problem** — they **don't solve it**; making architecture work still requires **collaboration** (the tool *forces* it via fast feedback).
- Favorite quote (*Fundamentals of Software Architecture*): *"Developers should never take components designed by architects as the last word. Rather, the initial design by an architect should be viewed as a **first draft** where implementation reveals more details and refinements."*
- The two famous architect phrases — **"it depends"** and **"that's an implementation detail, don't bother me"** — are wrong here: **do** bother me, because architecture and implementation must align.

---

## 9. Q&A

### 9.1 Q1 — Isn't ADL redundant with existing UML/Enterprise Architect tooling (XMI, stereotypes)?
- Correct — it's **yet another artifact** to synchronize with diagrams and code.
- A client is generating **C4 model diagrams from ADL** (and the reverse — C4 / ArchiMate / draw.io / PlantUML → ADL); Richards & Ford have **no tooling yet**, but clients are building it.
- The bigger goal: a **unified language for architecture** covering all nine intersections (e.g., where is the SLO "600 ms under full load at 5,000 concurrent customers" documented? scattered in Confluence/S-drive/meeting notes). One client is aggressively writing a **compiler for ADL**.
- ADL is only a **pseudo-language, not a spec** — tweak it, add artifacts. Follow-up: he'll publish the full Sysop Squad implementation with all nine intersections' ADL examples to a **public GitHub repo** "over the summer."

### 9.2 Q2 — Where do cross-cutting concerns and common code go?
- The intersections aren't fully independent — they **combine and cross over**.
- **Security** is deliberately not a tenth intersection because: (1) it's **cross-cutting** (infra, team topologies, implementation, engineering practices, enterprise); (2) "neither Neil nor I are security experts" (hand-waving helps no one); (3) a tenth item would "mess up the synergy of our diagrams" (joking).
- **Observability** is another cross-cutting concern spanning all of them; describe such concerns within each relevant intersection (mainly infrastructure and enterprise).

### 9.3 Q3 — What if developers just "fix" the architectural tests when adding a component, without telling the architect? Shouldn't the rules be separated from developer code?
- It can happen; if that's your environment, add **more controls** over where the ADL lives and who generates the code.
- Richards **delegates** to a senior/tech lead (a win-win that frees him and brings architectural thinking closer to developers), with periodic reviews.
- Typical GitHub structure: an **`ADL`** directory, an **`ADR`** directory, a **`tests`** directory (behavioral/functional), and a separate **architecture-tests / `FF` (fitness functions)** directory; in sensitive cases, keep the ADL in a **separate repo the architect controls** — but ultimately it's about **collaboration**.

### 9.4 Q4 — How to cope with prescriptive frameworks (e.g., Salesforce CRM in a bank) that force patterns/structure?
- When a framework forces a particular structure, you can **still describe that structure via ADL**, treating it as a **constraint you live with**.
- Use ADL to **locate risk** from those constraints; if you miss SLAs (fault tolerance, responsiveness, scalability, agility), it's a **trade-off the business must analyze** — keep the framework at the cost of a capability, or migrate off it.
- "Turn it on its head" to talk about **risk areas** rather than complain — the architect's job is often not to decide, but to **analyze and identify trade-offs** so management/business can decide.

---

## People & References Cited

- **Mark Richards** — speaker; hands-on architect; founder of **developertoarchitect.com**; co-author of *Fundamentals of Software Architecture* and *Software Architecture: The Hard Parts*.
- **Neal Ford** — co-author/collaborator; prior-day "aspect-oriented architecture" main-stage talk; coined **architectural nexus**; co-researching this ADL material for a new book.
- **Books:** *Fundamentals of Software Architecture* (star-rating chart, the "first draft" quote), *Software Architecture: The Hard Parts* (Sysop Squad kata, the flattening pattern).
- **Sysop Squad** — the trouble-ticket architectural kata used throughout.
- **Tools/tech:** ArchUnit (Java), ArchUnitNET / NetArchTest (C#), TS-arch (JS/TS), PyTestArch (Python), Copilot, Gemini, ChatGPT, JUnit/NUnit, Kafka, gRPC, C4 model, ArchiMate, draw.io, PlantUML, Salesforce, Enterprise Architect / XMI, `java.sql`, .NET `IDbConnection`.
- **Concepts:** architecture as code, Architecture Definition Language (ADL), fitness functions, Architecture Decision Records (ADRs), domain-driven design, bounded contexts, layered/modular-monolith/microkernel/service-based/microservices architectures, domain vs. technical partitioning, open/closed layers, architecture sinkhole anti-pattern, implicit vs. explicit coupling, test-driven architecture, the flattening pattern (collapse/expand), root namespace, orphans.

---

*Video: https://www.youtube.com/watch?v=f6-mYeMNEyk — Transcript via yt-transcript.sh; outline generated from the transcript.*
