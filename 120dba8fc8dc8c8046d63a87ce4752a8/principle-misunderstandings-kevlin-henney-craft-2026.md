---
title: "Principle Misunderstandings – Kevlin Henney | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Kevlin Henney traces DRY, information hiding, SRP, cohesion, and separation of concerns back to their original 1970s–80s sources — showing most 'principles' are misunderstood patterns or preferences dressed up in moral costume."
type: "reference"
tags: ["softwaredevelopment"]
---

# Principle Misunderstandings – Kevlin Henney (Talk Outline)

> A frenetic, compressed keynote (a 60-minute talk squeezed into 45) by **Kevlin Henney** at **Craft 2026**. Henney promises an "intellectual ride," then excavates the original sources of software's most-cited "principles" — DRY, information hiding, SRP, cohesion, separation of concerns — to show how each has been misremembered, mis-taught, or mislabelled. The recurring thesis: many things we call *principles* (universal, always-do-it rules) are really context-dependent *patterns* or plain *preferences*, and getting the fundamentals right matters *more* in the AI era, not less.

---

## 1. Framing — Two Words in the Title

### 1.1 The setup and the venue joke
- Henney thanks **Lufthansa** for sponsoring rather than **British Airways** — he has 45 minutes of unpublishable things to say about British Airways software.
- The room "has had all day to bake"; his job is to keep a post-lunch audience awake for 45 minutes.
- He warns he may not take questions live (a 60-min talk compressed to 45) — "obviously I'm going to cover all the points so you don't need to ask questions."
- His name (**Kevin/Kevlin Henney**) is "sufficiently internet-unique"; he points to his active social accounts.

### 1.2 What does "principle" mean?
- The word **"principle" has no unique meaning** in English — it covers a lot of semantic space. Henney walks the dictionary senses:
  - *A general scientific theorem or natural law* — no, this is software development.
  - *A rule or code of conduct* — yes, this is the sense we often use.
  - *A fundamental truth or proposition serving as a foundation for belief or action* — closest, but these aren't fundamental truths, they're **choices**.
  - *A fundamental assumption* — also close.
- Key claim: **a principle implies universality.** Saying something is a principle means "you should *always* do it" — true in all contexts.
- Contrast with a **pattern**, which is **context-dependent**: "in this context, solving this problem here, here is a way of addressing it."
- The trap: things recommended as principles are often **patterns** — not generally applicable, but specifically applicable. They may work, but they aren't universal.

### 1.3 What does "misunderstanding" mean?
- Misunderstanding = "a failure to understand something correctly."
- It flows **both ways**: sometimes the *receivers* of the wisdom misunderstand; sometimes the *advocates* of the principle have themselves misconceived or misinterpreted it.
- The euphemistic English sense: two people described as "having a misunderstanding" (i.e., a dispute) — that also happens with these principles.

## 2. Why This Matters *More* in the AI Era

### 2.1 LLMs don't remove the need to understand
- Some claim "with LLMs we won't need software engineering anymore — Claude will do all the work." Anyone who's used an LLM for more than five minutes knows this is far from the truth.
- You need to be **opinionated** — and better still, **well-informed**.

### 2.2 The fire-hose metaphor
- Treat an LLM as a **fire hose**: you need to know how to *direct* it.
- You must have an opinion about the design, so as not to add to the world's existing **technical neglect**.
- To guide the LLM toward the good thing rather than the bad, you must **understand what "good" looks and feels like — and have words for it.**

### 2.3 Adam Tornhill's observation
- Henney cites **Adam Tornhill** (speaking the next day; Henney recommends his work). Tornhill's blog that week opened with: *"One of the more surprising effects of agentic coding is that it reinforces the fundamentals of software engineering."*
- Corollary: if you don't have the fundamentals in place, the **amplifier** just amplifies crap — "like a chimpanzee, they throw [it] around. That's where most of the industry is with AI. We are the chimps."

### 2.4 Style becomes substance
- Henney (quoting his own earlier book): *"At some level, the style becomes the substance."*
- Software is **recursively composed** — big software out of smaller pieces, out of smaller pieces still. Small-scale practices eventually manifest at large scale: **little habits become the large architecture.**
- Contrast with **physical architecture**: we don't build big bricks out of small bricks or large buildings out of small buildings — different materials at each level. In software we use **the same materials all the way down**, so small habits propagate.

## 3. DRY — Don't Repeat Yourself

### 3.1 The internet's version
- Audience confirms DRY = **Don't Repeat Yourself**.
- Typical internet/definition-site phrasings (not LLM-generated, but the same boilerplate any practice attracts):
  - "Encourages the reduction of code duplication, which leads to more maintainable, efficient, and less error-prone programs."
  - "Avoid duplicating code in a system."
  - "Reducing repetition of patterns and code duplication in favor of abstractions and avoiding redundancy."
- Henney: "That's mostly good" — but watch for these standard three-adjective phrases.

### 3.2 The origin — Hunt & Thomas
- DRY comes from **Andy Hunt and Dave Thomas**, two signatories of the original Agile Manifesto, in **The Pragmatic Programmer** (1st ed. **2000**; 2nd ed. **2020**). DRY originates in the first edition.
- The **2nd edition** contains a humble admission: *"In the first edition of this book, we did a poor job of explaining what we meant by 'don't repeat yourself.'"*
- Henney's aside: most people never received the update.

### 3.3 The actual definition
- The first-edition definition is actually good: *"Every piece of knowledge must have a single, unambiguous, authoritative representation within a system."*
- Problem: it lives in a book surrounded by many other words — a **homeopathic / diluting effect** washes the idea away. "If this were a tweet [no tweets in 2000], it would have stood the test of time."
- Result: many people took DRY to refer to **code only** — "don't copy and paste lines of source." That's part of DRY, but "a tiny and fairly trivial part."

### 3.4 Once and Only Once — Steve Smith and Kent Beck
- Henney edited **97 Things Every Programmer Should Know**; it contains **Steve Smith's** piece "Don't Repeat Yourself," which "understood the assignment": the **once-and-only-once** principle (applying only to *functional behavior*) is a **subset** of DRY.
- Once-and-only-once predates The Pragmatic Programmer and comes from the **XP community** — **Kent Beck's** *Extreme Programming Explained*.

### 3.5 Beck's four constraints of simple design (in priority order)
- Beck defines "simplest" via four constraints **in priority order**:
  1. The system (code + tests together) **must communicate everything you want to communicate**.
  2. The system **must contain no duplicate code**.
  3. The system should have the **fewest possible classes**.
  4. The system should have the **fewest possible methods**.
- Constraints 1 and 2 together constitute the **once-and-only-once rule**.
- The phrase **"priority order" meant nothing to people**: Henney has seen systems obsessed with 3 and 4 while treating 1 and 2 as optional. He generally doesn't teach this because it's too easily misinterpreted (a lot of weight rides on "must communicate").

### 3.6 DRY is about knowledge, and it's hard
- "No duplicate code" may not even make sense for a true **system** (as opposed to a mere program): **duplication vs. coupling is a trade-off**, and some duplication is unavoidable and not necessarily bad.
- What most people *mean* by DRY is really about the **duplication of knowledge / intent** — expressing the same thing in two places, possibly in two totally different forms.
- Test: if you must change code *and* documentation, or a database schema *and* a structure holding it, then your code **isn't DRY**.
- A tool that flags a "DRY violation" by pointing at a small piece of duplicate *code* is reporting **duplicate code, not knowledge duplication** — not the same thing.
- Conclusion: a truly DRY system is **surprisingly difficult** to achieve; used well, AI might get us closer, but since most people don't use it well, we may be getting further away.

## 4. Information Hiding ≠ Data Hiding

### 4.1 The common conflation
- Information hiding is widely advocated but wrongly reduced to **data hiding**; "information" and "data" get used interchangeably and equated with **data abstraction**.

### 4.2 Barbara Liskov and data abstraction
- Quote source: **"Data Abstraction and Hierarchy" (1987) by Barbara Liskov** — "Data abstraction is a valuable method for organizing programs to make them easier to modify and maintain."
- Liskov is the "L" of SOLID: the **Liskov Substitution Principle** — in Henney's view **the only real, unobjectionable principle** in SOLID (though some still misinterpret it).
- Liskov's contributions: **abstract data types**; **Turing Award (2008)**. Henney recounts a (presumably male) internet commenter asking why she'd win "for stuff everybody knows" — the point being someone had to make it known.

### 4.3 CLU and abstract data types (1974)
- Liskov and her team at **MIT** built a language and system still influential today: **CLU** (1974).
- If your language has a **`yield` keyword** or **iterators**, "welcome to the 1970s."
- Abstract data type definition: *"An abstract data type defines a class of abstract objects which is completely characterized by the operations available on those objects."*
- ADTs and OO **overlap** but aren't identical: "a programmer is concerned only with the behavior which that object exhibits, not with how that behavior is achieved."
- Directed at **C# developers**: stop using properties to expose **public data** — "it's about the behavior."

### 4.4 The first stack
- The CLU paper presents a **stack** — historically "**patient zero**," the first stack presented as an abstract data type (there couldn't be one before ADTs existed). The stack is now a stock **TDD** example.
- Henney translated the CLU stack into **TypeScript**, keeping the idiom, tightening it slightly — "it kind of works."

### 4.5 Modularity — clusters and Parnas
- In CLU, a module was a **cluster**; modules are a **1960s idea**.
- For fans of **modular monoliths** (a "very mid-2020s thing"): the *term* "modular monolith" was coined by **Simon Brown in 2015**, but modules themselves are very old.
- **David Parnas (1972)**, "On the Criteria To Be Used in Decomposing Systems into Modules" — the paper credited with how we think about modules. (Henney riffs that a modern title would be "I used modules — you won't believe what happened next" / "Modules Distilled.")
- Parnas: decomposition made using **information hiding as criterion** — this is "**patient one**," where everyone gets the term.

### 4.6 What Parnas actually said
- *"Every module is characterized by its knowledge of a design decision which it hides from all others."* — a lesson many still haven't learned; works at multiple scales (whole systems).
- Relates to **leaky abstractions**: don't leak the underlying technology, layers, or services.
- The interface/definition is "chosen to reveal as little as possible about its inner workings" — an emphasis on **control of interface**.

### 4.7 The real origin — Parnas 1971, hiding info from *people*
- The earlier source: **Parnas (1971)**, "Information Distribution Aspects of Design Methodology" — "**patient zero**" of information hiding (not even in his "best of" anthology *Software Fundamentals*).
- Crucially, it's about **people, not code**: "System documentation which makes all information accessible to anyone working on the project is discussed. The thesis that such information broadcasting is harmful — that it is helpful if most information can be hidden from most programmers — is supported."
- "We should allow the designers — those who specify the structure — to control the distribution of design information as it is developed."
- Henney: "I'm not asking you to agree with this... but this is what information hiding *is*. It might not be what you expected."

### 4.8 Where the original framing breaks down
- Within a team, hiding design info from people is **toxic** ("HR, yeah, we can avoid conflict... by design").
- It doesn't fit **open source** (diametrically opposite philosophy), **teams**, or a **mono-repo**.
- The useful modern reading is much more like **published-API design**: "I hand off an API; we're free to change anything on this side; you only rely on that." Implies a **strong boundary** — but you don't want that boundary *everywhere*.

### 4.9 The stack, revisited as a specification
- We need a notation that exposes only entry points / life cycle / specification: "a new stack is empty; an empty stack has no top, cannot be popped," etc.
- Reinforce with **tests** published against the specification (and they pass, "because we're that kind of developer").
- Sideswipe: JavaScript people, note **four spaces of indentation**, not two. "Two is a really bad number of indentation — only marginally better than one; three is downright weird. Four." (A separate talk.)

### 4.10 Lampson — interface as contract
- **Butler Lampson (1983)** — Henney rereads this paper every few years; it quotes Shakespeare in a technical paper.
- Earliest source Henney can find for: *"an interface is a contract to deliver a certain amount of service."*
- We use the **consumer/supplier (contract)** metaphor everywhere; this 1983 paper is the earliest he can date it — he invites anyone who can find it earlier to tell him.

## 5. SOLID — Especially SRP

### 5.1 Henney's verdict on SOLID
- People assume SOLID principles are "good by default." If you think they're good, "I am available for consultancy and training" (Henney works for himself, runs workshops and courses).
- **L** (Liskov substitution) — the only legitimate one.
- **S** and **O** are **wrong** — O more wrong than S.
- **I** and **D** are **contextual practices** — sensible in context, not universal principles.
- Focus for the talk: **SRP** (single responsibility principle).

### 5.2 SRP as a *suggestive* practice
- As a sound bite, SRP "actually works" and makes good sense as a **suggestive** practice.
- Compare the **Unix philosophy** (**Doug McIlroy**, via **Peter Salus'** *A Quarter Century of Unix*, 1990s): *"Write programs that do one thing and do it well."*
- "Suggestive" = moves you in the right direction ("that's got too many responsibilities" — yeah). But **suggestive is not precise or enumerative**; look closely and it falls apart.

### 5.3 Martin's shifting definitions
- **Robert C. Martin** has given about **three different definitions** over time.
- Martin himself: "Of all the SOLID principles, the SRP might be the **least well understood**... that's likely because it has a **particularly inappropriate name**."
- Henney contrasts the humility: the Pragmatic authors said "*we* did a bad job"; Martin uses passive construction ("the term was introduced by Robert C. Martin") — what he means is "**I** gave it a wrong name."
- Naming is hard — the **Phil Karlton** aphorism: "There are only two hard things in computer science: cache invalidation and naming things."

### 5.4 "Single reason for change"
- Martin's 2000s narrative: "a class or module should have **one and only one reason to change**."
- Paradox: what if your module contains **multiple classes**?
- Problem: "reason to change" seems to require **knowledge of the future** — and after five or six minutes in software you learn you don't have it ("the wisdom of Yoda").

### 5.5 Worked example — a Queue and its reasons to change
- Henney takes a **Queue** and enumerates how many "reasons for change" hide inside a single operation:
- **5.5.1 Naming / protocol.** The remove operation could be `pop`, `pull`, or `dequeue` — each aligns with a different naming convention.
  - There isn't one **domain** but multiple, including a **technical domain** with conventions you sometimes *ought* to and sometimes *must* respect (e.g., reflection-based tools that require a naming convention as an API model).
  - Changing conventions leaves functionality identical but changes the API — with ripple effects. That's a reason for change.
- **5.5.2 Error behavior.** Dequeuing an empty queue could throw `InvalidOperationException` (idiomatic .NET) or a **custom exception**.
  - Be specific in errors: "it did not work," "the thing is broken," "there was an error" — all **unhelpful**. "You cannot dequeue an empty queue" — helpful.
- **5.5.3 Empty as a normal state.** Alternatively, empty is a *normal* state, not a failure — relevant in re-entrant (or concurrent) environments given the **space–time decoupling** (time-of-check vs. time-of-use).
- **5.5.4 Return-style.** A modern style returns **two values** — a "did you get a value" flag plus the value itself (as in **Go**, which Henney calls his "favorite 1980s / late-70s language," design ideas roughly 1979–1981, "veneer brown wood" retro vibe).
- **5.5.5 Java/C++ envy.** Or create your own **result type** (Haskell-ish options).
- **5.5.6 Private implementation.** Even the internals — a list vs. a linked list — is another reason for change.
- Punchline: one small operation already has **many** reasons for change. "What is my single reason for change?"

### 5.6 What "responsibility" actually meant
- **Grady Booch**, *Object Solutions* (1995) / his OO design book: a responsibility is "**some behavior for which an object is held accountable**" — "the obligation of an object to provide a certain behavior."
- The wording implies **more than one behavior** (otherwise you just have a function). Booch's 1995 elaboration adds "occasionally the delegation of the behavior to some other object" (e.g., notification).

### 5.7 The Queue has several responsibilities
- Applying Booch to the Queue:
  - **Containment** — length, capacity, empty/full awareness and communication (one responsibility).
  - **Enqueue** — putting stuff in (a second, separate behavior).
  - **Dequeue** — taking stuff out (a third).
  - **Notification** — delegated behavior (a fourth).
- So a minimal Queue already "violates" SRP with **three to four responsibilities.**

### 5.8 "Responsibility" was always plural
- **Wirfs-Brock & Wilkerson (1989)**, "Object-Oriented Design: A Responsibility-Driven Approach" — the *first* "-driven" (before domain-driven, test-driven; earlier terms were "oriented" or "based"). Inspired by the client–server model; focuses on the **contract**: "What actions is this object responsible for? What information does it share?"
- **Kent Beck & Ward Cunningham**, OOPSLA 1989, "A Laboratory for Teaching Object-Oriented Thinking" — gave us **CRC cards** (Class, **Responsibilities**, Collaborators). Note: **responsibilities is plural**, not one.

### 5.9 "One actor / role" — and why the split is bollocks
- Martin's 2010s revision: "a module should be responsible to **one and only one actor**" (actor ≈ **role**).
- For a Queue there are two roles: a **producer** (enqueues) and a **consumer** (dequeues) — data flows left-to-right, control flow right-to-left on the consumer side, mediated by decoupling in space and time.
- Following "one actor," you'd factor out interfaces (`ISink`/`ISource`, or "enqueuable"/"dequeueable") — but **splitting into separate `Enqueuer` and `Dequeuer` objects is a "no."**
- **Transitively it's the same** two actors — you've only "added more code, more names, and confused a bunch of people." "This is bollocks" (a technical term for "might not be quite right").
- The *interface* version is a "yes": that's the **"I" of SOLID — Interface Segregation Principle**, which Henney calls **not a principle but a contextual practice**, formerly known as **role decoupling** (separating points of view / making roles first-class). But that's *not* what SRP called for.

### 5.10 The real guidance underneath — cohesion
- Martin says SRP gives a **guideline for class size**: "wrong to have too few classes each doing too much, equally wrong to have too many each doing too little"; "every class should embody about **three to five distinct responsibilities**."
- Beware **magic numbers** — an audience member's takeaway "four is the magic number" is exactly what *not* to walk away with. The real message: **a handful** ("if you start running out of fingers on one hand, probably not a good idea").
- Martin grounds this in **cohesion**, per **Tom DeMarco**, *Structured Analysis and System Specification* (glorious 1970s cover), and **Meilir Page-Jones**, *The Practical Guide to Structured Systems Design*.
- DeMarco: "**Cohesion** is a measure of the strength of association of the elements inside a module. A highly cohesive module is a collection of statements and data items that should be treated as a whole because they are so closely related — any attempt to divide them up would only result in increased coupling and decreased readability." (Henney: *this* is the one to follow.)

## 6. Separation of Concerns

### 6.1 The internet's version
- Definition-site phrasing: "a fundamental design principle... breaking down complex systems into smaller, more manageable parts... each part addresses a single concern rather than mixing multiple concerns together." Henney: not intrinsically bad.
- But one source claims separation of concerns "**also known as aspect-oriented programming**" — "No, it's not. That's nonsense... outright wrong." AOP and SOC have an interesting relationship, but **not equivalence**.
- An LLM-produced version: "organizes an application into distinct, independent sections, each handling a separate aspect... simplifies development, improves maintainability, enhances flexibility." — the LLMs "have consumed enough of the crap we've written" and reproduce it; "they have no idea."

### 6.2 The coupling/cohesion reduction (partial truth)
- We've come to equate separation of concerns with **decoupling**. To have less coupling, understand what it is (same DeMarco book):
  - **Coupling** = a measure of the **interdependence** of modules — how much units depend on one another.
  - **Cohesion** = **intradependence** — the degree to which a unit is itself and hangs together naturally.
  - Goal: **lots of cohesion, less coupling.** Higher coupling ⇒ changes inside one module more likely to break another.

### 6.3 What Dijkstra actually meant (1974)
- **Edsger Dijkstra**, "On the Role of Scientific Thought" (1974) — "a hell of a year," lots of mature ideas mid-70s.
- Dijkstra: "We know that a program **must** be correct, and we can study it from that viewpoint only... we also know that it **should** be efficient." ("must" for correctness, "should" for efficiency — "most organizations have their priorities arranged differently.")
- "Nothing is gained, on the contrary, by tackling these various aspects simultaneously. It is what I sometimes have called **the separation of concerns** — even if not perfectly possible, it is yet the only available technique for **effective ordering of one's thoughts** that I know of."

### 6.4 Separation of concerns is a *thinking* tool
- The core is **management of attention**, not code structure: "This does not mean ignoring the other aspects. It is being **one- and multiple-track-minded simultaneously**."
- Software is overwhelming — everything seems to connect to everything else. If you connect everything a little *less*, it's easier to concentrate.
- So low-coupling/high-cohesion is *part* of it — it has a footprint in code — but SOC is fundamentally **attentional**. "It's no good if I separate concerns and then the minute I hit the keyboard, I mush them all together again." It has a structural footprint but **isn't equivalent to that structure.**

## 7. Closing

### 7.1 Russ Miles — preferences in moral costume
- Henney closes with a quote from his friend **Russ Miles**: *"Principles matter... but most of what we defend so ferociously are not principles. They're **preferences dressed up in moral costume**."*
- "Mic drop" (the mic is attached, so no literal drop).

## 8. Q&A

### 8.1 Q1 — "Why is four better [than two]?"
- Joke answer: "Four is bigger, so therefore it must be better." Real answer: "I'm **not** saying four is better than two — I'm saying it's **more than one**. That's what matters."

### 8.2 Q2 — Which best practice becomes harmful when applied too literally?
- **SRP**, interpreted too rigidly, causes **fragmentation** — the opposite failure to the mega-class.
- Two failure modes: a **10,000-line class** you must decompose in your head to understand; versus over-decomposition — "**IKEA furniture with no instructions**," all the pieces present, and now *you* must recompose them.
- The answer is a **Goldilocks middle**, a "soft sweet spot" **not** governed by twos and fours.
- Henney has seen misunderstandings-of-misunderstandings of almost any principle (DRY, separation of concerns) distort a codebase's path — "we're doing this principle, and boy are they doing it."

### 8.3 Q3 — Which principle is most repeated without understanding its trade-offs?
- "There's an **extended version of this talk**, but I've covered four of them." (The four covered: DRY, information hiding, SRP, separation of concerns.)

---

## People & References Cited

- **Kevlin Henney** — speaker; editor of *97 Things Every Programmer Should Know*; author of the "style becomes substance" line.
- **Adam Tornhill** — blog on agentic coding reinforcing fundamentals; speaking the next day.
- **Andy Hunt & Dave Thomas** — *The Pragmatic Programmer* (2000 / 2020); origin of DRY; Agile Manifesto signatories.
- **Steve Smith** — "Don't Repeat Yourself" chapter (once-and-only-once as a subset of DRY) in *97 Things…*.
- **Kent Beck** — *Extreme Programming Explained* (simple design, four constraints); co-creator of **CRC cards** (with Ward Cunningham, OOPSLA 1989).
- **Ward Cunningham** — co-creator of CRC cards.
- **Barbara Liskov** — "Data Abstraction and Hierarchy" (1987); **CLU** language and abstract data types (1974); Turing Award 2008; the "L" (LSP) of SOLID.
- **David Parnas** — "On the Criteria To Be Used in Decomposing Systems into Modules" (1972); "Information Distribution Aspects of Design Methodology" (1971); anthology *Software Fundamentals*.
- **Simon Brown** — coined "modular monolith" (2015).
- **Butler Lampson** — 1983 paper; earliest source for "an interface is a contract to deliver a certain amount of service."
- **Robert C. Martin** — SOLID / SRP definitions ("single reason to change," "one actor").
- **Doug McIlroy** — Unix philosophy "do one thing and do it well" (via **Peter Salus**, *A Quarter Century of Unix*).
- **Phil Karlton** — "two hard things in computer science" aphorism.
- **Grady Booch** — *Object Solutions* (1995); responsibility as "behavior for which an object is held accountable."
- **Rebecca Wirfs-Brock & Brian Wilkerson** — "Object-Oriented Design: A Responsibility-Driven Approach" (1989).
- **Ian Cooper** — earlier Craft talk referencing responsibility-driven design.
- **Tom DeMarco** — *Structured Analysis and System Specification* (cohesion & coupling).
- **Meilir Page-Jones** — *The Practical Guide to Structured Systems Design*.
- **Edsger Dijkstra** — "On the Role of Scientific Thought" (1974); coined "separation of concerns."
- **Russ Miles** — "preferences dressed up in moral costume" closing quote.
- **Languages/tools named:** CLU, TypeScript, C#, .NET, Go, Haskell, JavaScript, Java, C++.
- **Companies named:** Lufthansa (sponsor), British Airways.

---

*Video: https://www.youtube.com/watch?v=bBCjSRHWyDw — Transcript via yt-transcript.sh; outline generated from the transcript.*
