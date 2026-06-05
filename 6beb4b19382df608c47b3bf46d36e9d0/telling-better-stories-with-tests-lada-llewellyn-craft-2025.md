# Telling Better Stories with Tests
**Llewelyn Falco & Lada Kesler — Craft Conference**

---

## Overview

A live-coding, narrative talk recounting a real multi-month coaching engagement (condensed and sanitised). The central arc: a moderately good test suite evolves—step by step, driven entirely by developer pain—into living documentation that product managers can read and stakeholders use as acceptance criteria.

**Core thesis:** Pay attention to what annoys you in your tests. Fix it. Good things follow.

---

## 1. Context & Starting Point

### 1.1 The Setup
- Lada had been implementing **hexagonal architecture** with the goal of eliminating slow integration tests.
- She replaced them with **system-level tests that ran at unit-test speed** — fast, reliable, caught real bugs.
- Problem: the tests were **opaque**. They made perfect sense to the author; nobody else could follow them.

### 1.2 The Inciting Observation
- Llewelyn reviewed the tests and couldn't understand what they were asserting.
- Instead of just explaining, Lada was invited to step back and apply a structured technique.

---

## 2. Core Technique: The Testing Circle

> *"You are so much smarter when you are thinking at a whiteboard."*

A four-step feedback loop for writing and evaluating tests:

| Step | Action |
|------|--------|
| 1 | **Whiteboard** — draw what the test does in plain terms |
| 2 | **English** — write it out; one sentence per concept |
| 3 | **Code** — translate; aim for one line of code per line of English |
| 4 | **Result** — does the output *remind you* of the whiteboard? |

**Applied here:** The chatbot scenario was just: *customer says "Hi" → bot greets*. Two ideas = two lines of code.

### 2.1 Refactoring the Noisy Test
- The customer input (`"Hi"`) was buried. **Extract it to the top.**
- Everything else (the assertion block) was extracted into `verifyConversation()`.
- Result: test reads as two lines — `customerSays(text)` + `verifyConversation()`.

**Principle:** Raise the abstraction level. Hide noise inside convenience methods, not inside the test body.

---

## 3. Approval Tests (Snapshot / Golden Master Testing)

### 3.1 What They Are
- Instead of writing explicit `assertEquals(...)` calls against every field, you **capture the output as a file** (the *received* file).
- You **review and approve** it once (the *approved* file).
- On subsequent runs: if received ≠ approved → test fails and a diff tool opens.
- Approved files live in source control alongside the tests.

### 3.2 Why Use Them
- Ideal when the output is **larger than a primitive**: formatted text, JSON blobs, graphics, audio.
- Removes the burden of hand-writing complex assertions.
- The approved file *is* the specification.

### 3.3 Formatting Matters — Introducing Printers
- Raw output was noisy and hard to scan.
- Solution: a **printer** — a small formatting helper that renders output in a human-readable form.
- Principle: **scannability is not cosmetic**. If it's hard to read, it's hard to reason about.

**Library used:** `ApprovalTests` (Java, but available in many languages).

---

## 4. Storyboards

### 4.1 Problem
- A single test can only capture a single moment. A chatbot scenario is a *conversation over time*.
- The test needed to represent a sequence of exchanges, not just one input/output pair.

### 4.2 Solution: the Storyboard Pattern
- A **storyboard** is a canvas — at its simplest, a `StringBuilder` or string — that accumulates output across multiple steps.
- Think of it like panels in a comic strip: each exchange is a panel; the storyboard is the strip.
- What gets *approved* is the full storyboard, not individual assertions.

### 4.3 Printers (revisited)
- Each type of output (text message, button set, system message) gets its own **printer** that formats it consistently.
- Printers are tested **by side effect**: they appear in every storyboard, so any regression shows up immediately.

---

## 5. Inline Approvals

### 5.1 Problem
- As the test suite grew, there were **too many approval files** (one per test). Navigation became painful.

### 5.2 Solution
- **Inline approvals**: the expected output is stored as a string literal *inside the test source file*, not in a separate `.approved` file.
- When a test fails, the diff tool's left pane contains the proposed new source code. Accepting the diff **modifies your source file directly**.
- Sweet spot: works best when output is **< ~10 lines**.

### 5.3 Trade-off
- Larger outputs → still use external approved files.
- Inline approvals make each test fully self-contained and easier to navigate in an IDE.

---

## 6. `verifyAll` — Removing Test Duplication

### 6.1 Problem
- Many tests followed an identical structure. Repeating boilerplate obscured the variations that actually mattered.
- With inline approvals, individual tests grew long; the **overall picture was lost**.

### 6.2 Solution: `verifyAll`
- `verifyAll` is approval testing's equivalent of a **parameterised / data-driven test**.
- You provide a list of inputs and a lambda; `verifyAll` runs each through the lambda and captures all outputs in one approved file under a shared header.

### 6.3 Refactoring Recipe: "Many of One → Many of Two"

Step-by-step migration without breaking the build:

1. **De-index**: wrap the existing single input in a `List` and access it via `.get(0)` — test still passes.
2. **Many of one**: introduce `verifyAll(header, list, lambda)` with a one-element list — verify the output matches.
3. **Many of two**: add a second element to the list — verify the new combined output.
4. Continue until all cases are consolidated.

### 6.4 Headers as Navigation
- Each scenario in the `verifyAll` output gets a **printed header** (e.g. a banner of `*` characters surrounding the scenario name).
- This gives a high-level map of the entire test strategy in a single approved file.

---

## 7. Surfacing Outliers & Custom DSLs

### 7.1 Problem
- After consolidation, a few tests didn't fit the common pattern — e.g. multi-conversation scenarios (the bot has *memory* across sessions).
- These outliers were now **obviously visible** against the uniform backdrop of `verifyAll`.

### 7.2 Observation
- Removing duplication doesn't eliminate outliers — it *reveals* them. That's a feature.

### 7.3 Solution: Custom DSL / Fluent Builder
- Instead of manually constructing `List<Conversation>` each time, build a **fluent API**:
  ```java
  conversations()
      .thenConversation(payBillScenario)
  ```
- This expresses intent in the **domain language** rather than in Java collection boilerplate.
- Now multi-conversation tests look structurally similar to single-conversation tests → they can be folded into `verifyAll`.

**Principle:** Custom DSLs are just convenience functions taken far enough to speak the domain language.

---

## 8. Markdown Approved Files — Living Documentation

### 8.1 Problem
- The approved output was developer-facing only. Product managers couldn't use it.
- IDE deep-links (clicking a scenario to jump to its inline test) were invisible outside the IDE.

### 8.2 Solution
- Change the approved file format to **Markdown**.
- Scenario headers become Markdown headings; individual test links become **clickable hyperlinks**.
- Push the approved file to **GitHub** — it renders automatically. No IDE required.

### 8.3 Emergent BDD
- Product managers can now read the test output as documentation.
- If they *edit* the Markdown (e.g. correct expected behaviour), the tests **fail** — the edit becomes a requirement.
- Zero-cost, lightweight BDD: the tests are the spec, the spec is the tests, and neither can go stale because they are the same artifact.

> *"They never get outdated because they're runnable."*

---

## 9. Concept Map — How Everything Connects

```
Storytelling
    └─► Testing Circle (Whiteboard → English → Code → Result)
            └─► Storyboards  ──────────────────────────────┐
            └─► Printers                                   │
            └─► Approval Tests ◄────────────────────────── ┘
                    ├─► Inline Approvals (short output)
                    └─► verifyAll (parameterised scenarios)
                            └─► Custom DSL (domain language construction)
                                    └─► Markdown Approved Files
                                                └─► Living Documentation / Lightweight BDD
```

**Convenience functions** and **DSLs** operate at every level — they are the mechanism for raising the abstraction to match the domain.

---

## 10. Key Principles (Distilled)

| # | Principle |
|---|-----------|
| 1 | **Developer pain is signal.** If something annoys you, that's your system telling you something needs to change. |
| 2 | **Tell a story, not a sequence of assertions.** Tests communicate intent; they are documentation. |
| 3 | **Match abstraction level.** One idea on the whiteboard = one line of English = one line of code. |
| 4 | **Scannability matters.** Formatting is not cosmetic — it determines whether a test is comprehensible. |
| 5 | **Approval tests shine on non-primitive output.** JSON, text conversations, graphics, audio — anything bigger than a scalar. |
| 6 | **Duplication removal reveals outliers.** Don't suppress the outliers; they are information. |
| 7 | **Domain language is the goal.** DSLs, printers, and storyboards all serve one master: the language of the problem, not the language of the framework. |
| 8 | **Living docs > static docs.** If your documentation can go stale, it will. Runnable approved files cannot. |
| 9 | **You don't have to choose between asserts and approvals.** Mix them freely; they solve different problems. |
| 10 | **This path is not planned.** Each step was driven by the next thing that caused pain. Trust the process. |

---

## 11. Q&A — Notable Points

### What is a storyboard in code?
A mutable canvas (typically a `StringBuilder` or custom object) that accumulates the full history of a scenario's exchanges. What you *verify* is the storyboard, not individual messages.

### How do approval tests handle non-string output?
- **Audio**: capture the wave file; approve it by listening once.
- **Graphics/screenshots**: capture the image; diff tools can show visual diffs.
- **Numbers with tolerance**: either use an assert for the tolerance check, or have your printer round to the precision you care about.

### Approval tests vs. Gherkin/Cucumber?
- Gherkin sits *on top of* your test framework and tends to replace it; high setup cost, coupling to plain-text feature files.
- Approval tests sit *beneath* your test framework as a verification mechanism; zero framework change, no DSL to learn upfront.
- Both ultimately rediscover BDD — the difference is cost and coupling.

### Given/When/Then — where are the Givens?
- Given/When/Then is a useful heuristic, not a law. Sometimes there is no Given. Sometimes there is no When.
- If setup (Given) is painful, that pain is pointing at a design problem in your production code — not a testing problem.

### Can you test the printers themselves?
- Largely by side effect: printers appear in every storyboard, so regressions surface automatically.
- Dedicated printer tests are rarely necessary.

### Scrubbers
- When output contains inherent variability (timestamps, UUIDs, random values), **scrubbers** normalise the output before comparison: e.g. replace all dates with `<date_1>`, `<date_2>`, etc.
- This preserves the structural assertion ("date_1 appears here, date_2 appears there") while eliminating false failures from non-determinism.

---

## Resources

- Slides and code: referenced at the start of the talk (URL shown at end of presentation).
- **ApprovalTests** library: available for Java, C#, Python, Ruby, JavaScript and others — [approvaltests.com](https://approvaltests.com)
- **TeachingKidsCode.org** — Llewelyn Falco's educational initiative.
