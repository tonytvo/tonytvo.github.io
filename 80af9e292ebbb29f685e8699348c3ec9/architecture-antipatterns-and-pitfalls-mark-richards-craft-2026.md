---
title: "Architecture AntiPatterns and Pitfalls – Mark Richards | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Mark Richards on architecture anti-patterns (architecture-by-implication, stovepipe) and pitfalls (microservice-all-the-things, grains of sand) — degree of ephemerality, capabilities vs. behavior, Gall's Law, source-code-as-architecture, and 'learn to ride a horse first.'"
type: "reference"
tags: ["softwaredevelopment"]
---

# Architecture AntiPatterns and Pitfalls – Mark Richards (Talk Outline)

> Mark Richards on the fun of talking about "things we do that we shouldn't do." Material from an upcoming book, **_Software Architecture Patterns, Anti-Patterns and Pitfalls_**, co-written with **Neal Ford** and **Raju Gandhi** (~October release). Key distinction: an **anti-pattern** seems like a good idea and involves real trade-offs but leads down a bad path; a **pitfall** is **never** a good idea, even from the start (a trap). Structure: two anti-patterns → two pitfalls → four key points → Q&A.

---

## 1. Setup — Who Needs an Architecture?

- Martin Fowler's 2003 article **"Who Needs an Architect?"** — Richards spins it to **"Who needs an *architecture*?"** (~half the conference sessions are about architecture).
- A **doghouse** needs no architecture (wood, nails, hammer, a cute dog). A **10-story office building** does — without a good one you get the **Royal Ontario Museum, Toronto** ("world's ugliest building" — a real photo, not AI).

### 1.1 Degree of ephemerality
- Richards & Ford's term: a range from **high ephemerality** (short-lived; state of not lasting long) to **low ephemerality** (permanence).
- **Architecture is expensive** — overkill when applied to things that don't need it.
- **High ephemerality → don't need architecture.** **Low ephemerality (permanent) → cannot/will not survive without one.**

---

## 2. Anti-Pattern #1 — Architecture by Implication

- Definition: implementing a system/product **without even considering an architecture** — "spaghetti architecture," unstructured, lacking architecture.
- Very popular; shows up in **vibe coding / spec-driven development** — focus on **what the system does**, all tests pass, but it's **void of architecture**. But humans do it too — for **decades**.
- **Good / cheap / fast — pick two.** Which two do business stakeholders always pick? **Cheap and fast** → not good → hence an anti-pattern. The fast/cheap route is "just start coding" (via vibe coding, agents, or us).

### 2.1 The youth football registration story
- A youth **football registration site** in **Dorog, Hungary**, hacked together over a weekend (maybe WordPress) to register kids — **very high ephemerality** (kill it after the season). Like the doghouse: no architecture needed.
- Then it's good, so other Hungarian cities want it → add **GPS/city routing**, **leagues**, **coach profiles** → ephemerality drops.
- Popularity grows across Hungary → add **tournaments**, **custom uniform design & sales**, **equipment ordering** → moving toward permanence.
- Neighboring countries → most of **Eastern & Western Europe** adopt it → now permanent.
- **Without an architecture, it comes crashing to the ground.** That's why it's an anti-pattern — the *ephemerality of the "temporary" product changed*.

### 2.2 Behavior vs. capabilities
- **Emergent design/behavior:** never design a truck directly — start simple (**roller skate → unicycle → motorcycle** for torque/drag → vehicle for balance → truck). That's **behavior**, which you can emerge.
- **Architecture = capabilities**, and "the capabilities of a roller skate ≠ the capabilities of a truck." Capabilities are the **-ilities**: scalability, fault tolerance, availability, agility, maintainability, etc.
- **The secret: you can't just add architecture to a system — it requires planning** (you wouldn't build half a 10-story building then bring the architect in).

### 2.3 Gall's Law
- **John Gall**, *Systemantics*: *"A complex system that works is invariably found to have evolved from a simple system that worked. The inverse... a complex system designed from scratch never works and cannot be made to work."* → **you must tear it down and start over from a working simple system.**
- Applied to architecture: **start with capabilities (which require planning)** but emerge the *design* — e.g., a **simple system that can scale to 100,000 concurrent users**, then continuously **measure/observe/check capabilities**; when they break, back up, change design, keep iterating/evolving. This is how you avoid architecture by implication.

---

## 3. Anti-Pattern #2 — Stovepipe

- Definition: an **ad-hoc collection of semi-related structures/components/services** → an architecture that's **brittle, unreliable, hard to change**. Named for old **stovepipes** running everywhere around a house.
- Difference from #1: here you **do have a solid architecture**, but as new features arrive you **don't pay attention to it** (too long, too expensive — "good/cheap/fast, need it this week"), **bolting on major features haphazardly** without regard to **component responsibilities** → the well-formed architecture **falls to pieces**.
- Happens in **monoliths** and **distributed** systems: a page → service A → B; add C, then B↔C, then A↔D↔B↔C… tangled bolt-ons → stovepipe, no architecture → collapse.

### 3.1 Avoiding both — structure *and* capabilities
- **Component-based thinking** (*Fundamentals of Software Architecture*, ch. 8): see the system as **components** (building blocks), not just class files — identify, govern, maintain them. That's **structure**.
- Getting out of the anti-pattern (*Software Architecture: The Hard Parts*, ch. 5): **eight low-risk refactorings** to safely transform a system into one that has an architecture.

### 3.2 The Sysops Squad demo — architecture in 42 seconds
- Kata/use case: buy electronics + a support plan; enter a ticket; a field expert is located, notified, goes to your home/office, fixes it, marks complete; a **survey** is sent and returned.
- Richards sketches an architecture in "35 seconds" (actually 42): three **domains** (ticketing, customer, survey) with **components** as building blocks — **ticket creation, ticket queue** (queue? topic? stream? DB polling? unknown yet), **assignment** subdomain (find/assign expert, like the traveling-salesperson problem), notify, complete, customer register/profile, send/receive surveys.
- Looks solid, well-formed, understandable. **But what does it mean when you go to code it** (via vibe/spec-driven, or humans)?

### 3.3 Source code *is* the architecture
- You can **see architecture in source-code structure**: top-level **directories/namespaces = domains** (ticketing, customer, survey); mid nodes = **subdomains**; **leaf nodes = components**.
- The expected directory structure matches the diagram... **but that never happens.** Real resulting code: 100% coverage, all behavioral tests pass — yet **ticket assignment is "somewhere,"** customer registration buried in "subscriber information," a **mobile-connection** leaf that isn't even in the architecture, **send-survey** present but **receive-survey buried**.
- "**No one on the team actually understands the entire codebase.**" **Reverse-engineer** the directory structure/namespaces into the real internal structure → it looks **nothing like** the drawn architecture; they **do not equal** each other.
- The aligned (left) structure wins on **agility, maintainability, testability, deployability, reliability** (change without breaking), **adaptability** (frameworks/versions/platforms), **extensibility** (leagues, uniforms), and **migratability** (splitting a monolith).
- **Homework:** reverse-engineer your own (or yesterday's AI-generated) directory structure, see the real internal architecture, "then after a couple weeks of therapy, start refactoring it."

### 3.4 The governance question for new functionality
- Always ask: **which existing component should be responsible for this new behavior?** If none → **should we create a new component, and what other components/services must it talk to?**

---

## 4. Pitfall #1 — Microservice All the Things

- Definition: assuming **all parts of your system have to be microservices** (seen since ~2016, even earlier).
- **Superpowers** (from the *Fundamentals* star ratings, 5 = best): maintainability/testability/deployability (overall **agility**) = 5 stars; **scalability & elasticity** = 5 and 4 stars.
- **Kryptonite:** the **most expensive** architecture, the **most complex** ("hardest thing I've done in 30+ years as an architect"), and possible **performance** cost from inter-service calls/latency.
- Modeling **fine-grained data** is hard because everything needs its own **physical bounded context**.
- Order-entry example — everything as a microservice "because we're using microservices":
  - **Admin** (name-value pairs, a single user, unstick orders): needs **no superpowers** → incurs **all kryptonite**, no benefit.
  - **Automated warehousing**: same — all negative.
  - **Order fulfillment**: same — all pain.
  - **Customer-facing**: **does** need the superpowers → the kryptonite is **worth it**.
- The problem: you get **some** benefits but **all** the negatives.

---

## 5. Pitfall #2 — Grains of Sand

- Definition: making microservices **too fine-grained** (every single-purpose function/operation a service).
- Related to microservice-all-the-things — you incur its pain **plus** now **everything needs to talk to everything else** (a whole talk in itself).

---

## 6. The Fix — "Learn to Ride a Horse First"

- Microservices (or event-driven architecture) is a **steeplechase**; jumping straight in causes "pain, misery, and death."
1. **Learn to ride a horse → Service-Based Architecture**: coarse-grained **domain services** that **share their own data** (e.g., the four order-entry areas: admin, warehousing, fulfillment, customer).
2. **Ride a horse fast**: analyze which **domain services actually need microservice superpowers** — admin/fulfillment stay as domain services; **customer** needs them.
3. **Do the steeplechase**: break **only those** into microservices. "The secret sauce for designing microservices architectures."

---

## 7. Four Key Points

1. **Apply architecture when you identify you need capabilities** (or the system has **low ephemerality / high permanence**) — not every system does; architecture requires **planning**, not bolt-on.
2. **Think of your system/services as components** — identify them if absent, **govern** them so changes land in the right place.
3. **Not every portion of a system has to be a microservice**, even if you chose that style.
4. **Start coarse-grained** with services; split only with **good justification** (avoid grains of sand).

---

## 8. Q&A

- **Isn't applying architecture up front against YAGNI?** Identify **capabilities** and **ephemerality**; apply **some** architecture (candidate components/services), then **iterate and evolve** as you learn — not big-up-front design. When you decide "we're keeping this," apply **Gall's Law** (start over, apply architecture).
- **How to repair an existing stovepipe?** *The Hard Parts* ch. 5 **decomposition patterns** — low-risk **restructuring** (where code *lives*), not rewriting/refactoring — to reveal the architecture and refine components.
- **How to know ephemerality before a product becomes popular?** You often can't (assuming the worst tips into YAGNI). Once you see adoption climbing, reassess the ephemerality range; startups may skip architecture until an idea **catches on**, then start over and apply it.
- **Do you still need a human for architecture given capable AI models?** **Absolutely** (for now) — AI is **great at behavior** but **not at trade-off analysis or architecture**. Neal Ford's companion talk shows a **pseudo-language** they created to teach agents architecture (spec + desired structure/components + quantified scale/response requirements).
- **Architecture is standardized in other sciences — why not software?** We haven't solved problems that building/medicine/science eventually did; standardizing building techniques took **centuries** — software is still in its infancy. (Points to a **Paul Preiss / IASA** LinkedIn article, June 3.)
- **What about systems that genuinely need everything to be microservices?** Not a pitfall then — the **pitfall is *assuming*** everything must be. Ride the horse (service-based), split domain by domain; you may legitimately end up all-microservices.

---

## People, Books & References Cited

- **Mark Richards** — speaker; runs a free **"Software Architecture Mondays."**
- **Neal Ford**, **Raju Gandhi** — co-authors of *Software Architecture Patterns, Anti-Patterns and Pitfalls* (~Oct).
- **Martin Fowler** — "Who Needs an Architect?" (2003).
- **John Gall** — *Systemantics* / **Gall's Law**.
- Books: *Fundamentals of Software Architecture* (ch. 8, component-based thinking; star ratings), *Software Architecture: The Hard Parts* (ch. 5 decomposition patterns; Sysops Squad kata).
- **Paul Preiss / IASA** (International Association of Software Architects) — LinkedIn article on why software isn't standardized.
- Concepts: degree of ephemerality, architecture-by-implication, stovepipe, microservice-all-the-things, grains of sand, behavior vs. capabilities, service-based architecture, "learn to ride a horse."

---

*Video: https://www.youtube.com/watch?v=jz8wSo9aXtE — Transcript via yt-transcript.sh; outline generated from the transcript.*
