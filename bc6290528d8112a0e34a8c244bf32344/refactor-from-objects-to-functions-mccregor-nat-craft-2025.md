---
title: "Gradual OO-to-Functional Refactoring in Kotlin"
date: "2025-06-04T00:00:00.000Z"
description: "Llewellyn Falco & Duncan McGregor on gradually refactoring from objects to functions in Kotlin."
type: "reference"
tags: ["softwaredevelopment", "kotlin", "functional-programming"]
---

# Detailed Outline: Gradual OO-to-Functional Refactoring in Kotlin
**Conference Talk — Live Coding Session**
**Presenters:** Llewellyn Falco & Duncan McGregor (authors of *Functional Programming in Kotlin*)

---

## 1. Introduction & Framing

### 1.1 Talk Format
- Live-coded session; Duncan acts as the "human pair" while Llewellyn drives
- Framed as an experiment: can a human-guided incremental refactoring be replaced by an agentic LLM?

### 1.2 Core Thesis
- Functional programming and OOP are often presented as opposites, but modern languages (Kotlin) allow **gradual, non-disruptive migration** from OO to FP style
- Benefits of FP style:
  - Better type safety
  - Explicit data flow
  - Easier reasoning and evolution of the codebase
- Migration can happen **incrementally** — without halting team velocity or causing multi-day broken builds

### 1.3 Supporting Material
- Presenters co-authored a book: functional programming disguised as a Kotlin tutorial for Java developers
- Duncan runs a YouTube channel on the same topics

---

## 2. The Application Domain

### 2.1 Problem: Workshop Signup System
A conference workshop signup application with the following rules:
- Workshops have **limited capacity** (room-dependent)
- Attendees can **sign up** or **cancel**
- Administrators can **close** signups after a deadline
- Once closed: no new signups, no cancellations, payment is committed

### 2.2 Architecture
- HTTP/JSON web application
- Persistence via a database (abstracted as a `SignupBook` repository)
- Hexagonal architecture: domain logic is isolated from infrastructure
- In-memory `SignupBook` implementation for fast unit tests

---

## 3. Initial Codebase — OO / Java-Bean Style

### 3.1 `SignupSheet` (Core Domain Object)
- Fields (all mutable `var`):
  - `sessionId: String?` — nullable, settable
  - `capacity: Int`
  - `signups: MutableSet<AttendeeId>` — mutable collection
  - `isClosed: Boolean` — starts false, toggled to true
- Operations (methods that mutate internal state):
  - `signUp(attendeeId)` — adds to set if open and not full; throws `IllegalStateException` otherwise
  - `cancelSignUp(attendeeId)` — removes from set if open
  - `close()` — sets `isClosed = true`

### 3.2 `SignupBook` (Persistence Abstraction)
- Interface: `findSheet(sessionId)`, `saveSheet(sheet)`
- `InMemorySignupBook` implementation simulates a database using a `HashMap`
- Clones objects on read to avoid aliasing bugs caused by mutable shared references

### 3.3 `SignupApp` (HTTP Handler — HTTP4K Framework)
- HTTP4K philosophy: HTTP handler = `(Request) -> Response` (function, not framework magic)
- Routes: list signups, sign up, cancel, close
- Uses a `Transactor` abstraction to create transaction boundaries (type-safe: can't use a `SignupBook` outside a transaction)
- Error handling: `try/catch` for `IllegalStateException`
- **Problem:** the exceptions are caught but never explicitly thrown anywhere visible — they come from `check()` calls buried in the domain, making it impossible to statically verify all cases are handled

### 3.4 Identified Code Smells
- No-arg constructor + property setters = Java Bean anti-pattern in Kotlin
- Unchecked exceptions (`IllegalStateException`) obscure error paths
- Aliasing bugs necessitate defensive cloning in the in-memory book
- Mutable set inside `SignupSheet` leaks state changes across references
- Cannot model state machine (open/full/closed) in the type system

---

## 4. Refactoring Phase 1 — Cleaning Up Java Habits

### 4.1 Eliminating the No-Arg Constructor
- Kotlin allows a primary constructor; secondary constructors calling a no-arg one are unnecessary
- Moved field initialization into the primary constructor
- Removed redundant secondary constructor
- Used `apply {}` block in test/main setup code instead of post-construction property mutation
- **Result:** simpler, idiomatic Kotlin; fields declared in constructor signature

### 4.2 Converting `var` Fields to `val` Where Possible
- `sessionId`: was nullable (`String?`) and settable; moved to primary constructor as non-null `val`
- `capacity`: settable only once; converted to `val` — guard on the setter was eliminated
- Nullable `sessionId` had an Elvis operator guard in the save path — with non-null `val` this guard became dead code and was removed
- Identified true remaining mutability: `signups` (mutable set) and `isClosed` (boolean flag)

### 4.3 Outcome of Phase 1
- Bean → object with a proper constructor
- Unnecessary mutability removed; remaining mutability is clearly intentional business logic

---

## 5. Refactoring Phase 2 — Introducing Immutability

### 5.1 Core Principle: Calculations vs. Actions
- **Calculations (pure functions):** deterministic, no side effects, order-independent — easier to reason about, test, and refactor
- **Actions:** IO, state mutation — order matters; should be pushed to the outermost layer (HTTP handler entry points)
- Goal: push mutability from the core domain outward layer by layer

### 5.2 Making `signups` an Immutable Set
- Changed `MutableSet<AttendeeId>` → `Set<AttendeeId>` (Kotlin default collections are immutable)
- Instead of `signups.add(attendeeId)`, compute a new set: `signups = signups + attendeeId`
- Temporarily converted `signups` to `var` to allow reassignment (acknowledged as "gets worse before better")
- Same technique for cancellation: `signups = signups - attendeeId`
- **Result:** collection itself can no longer be mutated externally; aliasing bug in `InMemorySignupBook` eliminated; cloning on read is no longer needed

### 5.3 Making Operations Return New Objects (Functional Style)
- Key conceptual shift: "OO programmers see `SignupSheet` as *representing* a signup sheet; FP programmers see it as *data about* a signup sheet — a measurement or prediction"
- `signUp()` now returns a `SignupSheet` (new copy) rather than mutating `this`
- Same for `cancelSignUp()` and `close()`
- Used Kotlin `data class` `.copy()` to create modified copies
- **Team-safe migration pattern:** parallel evolution — introduce the new signature returning `this` first, update all call sites to capture the return value, then switch the implementation to return a true copy:
  1. Change method signature (return type added), still mutates and returns `this`
  2. Update call sites: `val updatedSheet = sheet.signUp(attendeeId); book.save(updatedSheet)`
  3. Change implementation to return `copy(signups = signups + attendeeId)` without mutation
  4. Convert `var` back to `val`

### 5.4 Making `isClosed` Immutable
- `close()` now returns `this.copy(isClosed = true)`
- `InMemorySignupBook` updated: passes `isClosed` through constructor instead of setting it post-construction
- Cloning on read removed entirely — immutable data cannot alias-mutate
- **Result:** `SignupSheet` is now a fully immutable value type (all `val`, `data class`)

### 5.5 Outcome of Phase 2
- 30 minutes of refactoring: went from mutable bean → immutable data type with pure (but partial) functions
- Application never broken for more than a few seconds
- Compatible with concurrent team members working on the same codebase

---

## 6. Refactoring Phase 3 — Type-Safe Error Handling via Sealed Class Hierarchy

### 6.1 The Remaining Problem: Partial Functions & Exceptions
- Current `signUp()`, `cancelSignUp()` are **partial functions**: for some inputs (closed sheet, full sheet) there is no valid result — they throw
- `try/catch` in `SignupApp` for `IllegalStateException` is untestable statically; no compiler guarantee that all error paths are handled
- Kotlin has no checked exceptions — all exceptions are unchecked

### 6.2 Two Strategies for Totalising a Partial Function
1. **Widen the codomain:** return `Either<Error, Result>` / `Result<T>` — success or typed failure
2. **Narrow the domain:** use a subtype hierarchy where operations only exist on types where they are valid — **chosen approach**

### 6.3 The State Machine
```
          ┌──────────────────────────────────┐
          │                                  │
   [create] → Available ──signUp (not full)──┘
                  │
                  │ signUp (at capacity)
                  ▼
               Full ──cancelSignUp──→ Available
                  │
                  │ close
                  ▼
              Closed (terminal — no further transitions)
```
- `signUp` only valid on `Available`
- `cancelSignUp` valid on `Available` and `Full`
- `close` valid on `Available` and `Full`
- No operations on `Closed`

### 6.4 Introducing the Sealed Hierarchy — Step by Step

#### Step 6.4.1 — Extract Abstract Base Class (Open vs. Closed)
- Used IntelliJ "Extract Superclass" refactoring
- Named it `Bob` deliberately (silly name signals work-in-progress, not a domain concept)
- Abstract members pulled up: `sessionId`, `capacity`, `signups`, `isClosed`, `isFull`, `isSignedUp`
- Concrete on base: `isFull` (calculable from `signups.size` and `capacity`), `isSignedUp`
- **Not** pulled up: `signUp`, `cancelSignUp` (state-dependent), `close` (only for open states)
- Sealed the hierarchy — compiler can now exhaustively check `when` branches

#### Step 6.4.2 — Rename Trick (Avoiding Widespread Breakage)
- Renamed concrete class to `OpenOrClosed` temporarily (both states in one class)
- Renamed abstract base to `SignupSheet` — preserves all existing call sites without change
- Added top-level factory function `SignupSheet(...)` to replace constructor usage — same source syntax, different bytecode
- **Team impact:** colleagues pulling this commit see no source-level breakage

#### Step 6.4.3 — Split `OpenOrClosed` into `Open` and `Closed`
- Copied `OpenOrClosed` class → `Closed` data class
- Renamed `OpenOrClosed` → `Open`
- `Closed` removes `signUp` and `cancelSignUp` — not valid when closed
- Compiler immediately flags non-exhaustive `when` blocks at all call sites
- In `SignupApp`, handled `Closed` case for the close endpoint: HTTP idempotency — return `200 OK` (a closed session closed again is fine — could be a retry)
- `isClosed` on `Open` is always `false`; on `Closed` is always `true` — can be expressed as a computed property rather than a stored field

#### Step 6.4.4 — Split `Open` into `Available` and `Full`
- Same technique: extract superclass (`Cake`/`Bob`), copy, rename
- `Available`: has `signUp` method
- `Full`: does not have `signUp`; has `cancelSignUp` (returns `Available`)
- `cancelSignUp` pulled up to `Open` (valid in both `Available` and `Full`)
- `signUp` on `Available` computes `newSignups = signups + attendeeId`; if `newSignups.size == capacity` returns `Full(...)`, otherwise returns `Available(...)`
- `Full.capacity` is now a computed property: `signups.size` — the invariant is that if you're full, signups count equals capacity; no need to store separately

#### Step 6.4.5 — Remove All Exception Handling
- With the sealed hierarchy in place, `check(...)` calls in domain methods are gone — invalid states are inexpressible in the type system
- Removed all `try/catch` blocks from `SignupApp`
- Compiler confirms no remaining `throw` sites in domain code

### 6.5 Outcome of Phase 3
- **Before:** partial functions throwing unchecked exceptions; error handling invisible to the type system
- **After:** total functions; sealed class hierarchy encodes the state machine; compiler enforces exhaustive handling
- State-checking pushed to HTTP handler layer where context exists to give meaningful HTTP responses
- No dead code; no "spooky action at a distance" from hidden exception throws

---

## 7. Key Refactoring Principles Demonstrated

### 7.1 Expand-Contract (Parallel Evolution)
- Analogous to expand-contract database migrations or blue-green deployments
- Introduce new structure alongside old; migrate call sites; remove old structure
- At every commit, the application compiles and tests pass
- Team members can continue working without merge conflicts

### 7.2 Work in Small, Commitable Steps
- Commit after each coherent change
- Never leave the codebase broken for more than a few seconds
- Small commits are cheap to revert; conflicts are cheap to resolve

### 7.3 Use the Compiler as a Migration Guide
- When a `val`/`var` change or a method removal is made, the compiler pinpoints every affected call site
- Sealed class `when` expressions give exhaustiveness guarantees — the compiler tells you what you've missed

### 7.4 Tests as Safety Net, Types as Proof
- Fast in-memory tests give confidence during each micro-step
- Tests validate dynamic behavior; types prove structural invariants statically
- Types work across the entire codebase simultaneously — more of a "big bang" guarantee, which is why the incremental introduction technique is needed

### 7.5 Move Mutation and Error Handling to the Edges
- Pure domain core: calculations only
- Entry points (HTTP handlers): coordinate actions, handle IO, interpret typed errors into HTTP responses

---

## 8. LLM / Agentic AI Comparison

### 8.1 Setup
- JetBrains Junie (agentic AI in IntelliJ) given the entire refactoring goal in a single prompt
- Codebase reverted to original state
- Run in "I'm Feeling Lucky" mode — live edits without human approval of each step

### 8.2 What Junie Did Well
- Immediately identified `SignupSheet` as the target
- Produced a sealed class hierarchy functionally equivalent to the human result
- Removed exception handling from `SignupApp`
- Captured return values correctly (`val updatedSheet = ...`)
- Tests passed at the end

### 8.3 Where It Differed from the Human Approach
- Made **one massive cross-codebase change** — no incremental commits, no parallel evolution
- Used a companion object `create()` factory function instead of a top-level function — changes call-site syntax (`SignupSheet.create(...)` vs `SignupSheet(...)`)
- Did not make `sessionId` non-nullable
- Used `if` instead of `when` in some places
- Code is functional but has minor cleanup opportunities
- Has no awareness of team impact — no consideration for colleagues' in-flight work or merge conflict risk

### 8.4 Open Questions Raised
- Does rehearsal history (IntelliJ local history, not git) influence LLM suggestions?
- Will agentic AI make continuous integration harder by producing large, hard-to-merge changesets?
- Current CI best practice: commits so small that merge conflicts are cheaper to throw away and redo than to resolve — LLM-generated mega-changes work against this

### 8.5 Verdict
- LLM produced a **correct result faster**, but with **less care for team dynamics and incremental safety**
- Human approach is more appropriate when: working in a team, codebase is actively being modified, minimising disruption is a priority
- LLM approach may be appropriate when: sole developer, greenfield or throwaway code, or when the change can be isolated in a branch

---

## 9. Q&A — Notable Points

### 9.1 Performance of Immutable Data Copies
- Overhead is negligible for typical server-side enterprise code
- JVM optimisations: Eden space allocation (stack-like), escape analysis (objects that don't escape a stack frame may never be heap-allocated), JIT
- Immutability's predecessor (mutable OO) was invented when memory and copying were expensive — less relevant today
- Real-world bottlenecks are almost always logical bugs, not copying overhead

### 9.2 Unexpected Exceptions from Infrastructure
- HTTP4K / Jetty / Tomcat have a top-level exception handler that converts any unhandled exception to HTTP 500
- Infrastructure exceptions (DB connection failures) are handled at the infrastructure boundary — one place, one policy
- Business logic errors are now modelled as types — handled explicitly, with full context, at the HTTP handler layer

### 9.3 `instanceof` Performance in Sealed Hierarchies
- Raised as a concern; presenter acknowledges it's not profiled
- Sealed hierarchy limits the check to a small, known set of classes (here: ~5)
- Counterpoint: throwing exceptions is itself expensive; typed checks replace exception-based control flow
- In embedded or high-performance contexts, a mutable class with upfront state checks could be preferred

### 9.4 Sealed Classes vs. Classic Polymorphism (Removing Switch Statements)
- Traditional OO advice: push `if`/`switch` into polymorphic dispatch; avoid `instanceof`
- Sealed classes are the type-safe equivalent of the **Visitor Pattern** — exhaustiveness is guaranteed by the compiler
- Without sealed classes (classic Java), you can't know if all cases are handled; with sealed classes, the compiler enforces it
- Modern Java also has sealed classes; Kotlin has had them from the start

### 9.5 Companion Objects vs. Top-Level Functions
- Companion objects are useful for factory functions that should appear alongside a type (discoverable via `TypeName.`)
- Can implement interfaces (unlike Java statics) — a powerful idiom
- Extension functions on companion objects allow adding "static-like" methods from outside the class (e.g., in a different module)
- Top-level functions are preferred for application code where the team is small and the API is internal
- Companion objects are preferred for library code where discoverability matters

---

## 10. Summary of Transformation Journey

| Stage | Description |
|---|---|
| **Start** | Java-style bean: no-arg constructor, all `var`, mutable set, unchecked exceptions |
| **Phase 1** | Idiomatic Kotlin: primary constructor, unnecessary `var` → `val`, non-nullable `sessionId` |
| **Phase 2** | Immutable value type: immutable set, pure functions returning new copies, `data class` |
| **Phase 3** | Sealed class hierarchy: total functions, state machine encoded in types, exceptions eliminated |
| **End** | Pure domain core, typed error handling, mutation and error recovery at HTTP handler edges |

**Total time (human):** ~70 minutes, never broken for more than a few seconds, team-safe at every commit.
**Total time (LLM):** A few minutes, but one large change, not team-safe.
