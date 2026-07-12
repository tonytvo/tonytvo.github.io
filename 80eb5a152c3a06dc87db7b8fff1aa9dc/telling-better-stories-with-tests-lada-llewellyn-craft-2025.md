---
title: "Telling Better Stories with Tests - Lada Keeseler, Llewellyn Falco | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Lada Keeseler & Llewellyn Falco reenact a multi-month coaching engagement, evolving a fast but opaque system-test suite into living documentation via the testing circle, approval tests, storyboards, printers, inline approvals, verifyAll, custom DSLs, and Markdown-on-GitHub — all driven by developer pain."
type: "reference"
tags: ["softwaredevelopment"]
---

# Telling Better Stories with Tests - Lada Keeseler & Llewellyn Falco (Talk Outline)

> A Craft 2025 talk performed as a two-person reenactment. **Lada Keeseler** (Kessler) — driven by learning and technical excellence; at home in science, XP, TDD, and DDD; unravels accidental complexity in large tangled codebases; recognized as one of *Consulting Magazine*'s Women Leaders in Technology; a free diver who can hold her breath underwater for 2 minutes. **Llewellyn Falco** — independent Agile coach; discovered **strong-style pair programming**; creator of the open-source testing tool **Approval Tests**; programs mostly in Java and C++; specializes in improving legacy code; co-founder of **teachingkidsprogramming.org**; co-author of the **Mob Programming Guidebooks**; his mother invented the card game **Set**. The talk condenses and sanitizes a real coaching engagement (Llewellyn coached at Lada's company over many months): it starts with getting code into nice unit tests and ends with tests good enough that *stakeholders use them as documentation*. Slides and code are available online (shown at the end). The pair role-play a recurring "next week she comes to me again" loop, each cycle driven by a fresh annoyance.

**Core thesis:** Pay attention to anything that annoys you in your tests. Fix it. Pay attention to the stories you're telling — those stories are powerful.

---

## 1. Context & Starting Point

### 1.1 The setup
- Lada had just learned about **hexagonal architecture** and wanted to know: "Can I actually apply this and get rid of my integration tests completely?"
- The system already had pretty good unit tests, but integration tests were hard to support, annoying, and slow.
- She wrote **system-level tests that run at the speed of integration tests** — fast, and they already caught a bug. They removed most of the manual testing; she runs part of them as unit tests with TDD.

### 1.2 The inciting observation
- She shows Llewellyn ("Alona"/"Lada" role-play): the test has an event notifier, an account ID, some code, and a bot — it makes sense to her, but he can't follow it.
- His move: "Before we fix it, let's **state the problem**. I find that useful." Confusing tests aren't confusing to the author who just wrote them.

---

## 2. Core Technique: The Testing Circle

> *"You are so much smarter when you're thinking at a whiteboard."*

A four-step loop (reviewed here as if new, though the team knows it from "learning hour"):

| Step | Action |
|------|--------|
| 1 | **Whiteboard** — draw what the test does |
| 2 | **English** — one line of English per whiteboard step |
| 3 | **Code** — one line of code per line of English (preserves the abstraction level) |
| 4 | **Result** — does the output *remind you* of the whiteboard? |

- The whiteboard for the first test is simple: customer says **"Hi"** → bot replies *"Hi there, I'm your virtual assistant. What would you like to do today?"* It's a chatbot.

### 2.1 Refactoring the noisy test
- The `"Hi"` was buried; everything else was "little setup."
- **Extract the `"Hi"` to the very top** as `text`.
- **Extract everything else** into `verifyConversation()` (they briefly mis-named it `verifyResponse` then settled on `verifyConversation`).
- Result: two lines — `customer says text` + `verifyConversation` — matching the two-line English from the two-idea whiteboard.

### 2.2 First mismatch noticed
- Looking at whiteboard vs. result, the "to the customer" part is missing — "wouldn't it be nice to have that?" (left as a follow-up for Lada).
- **Principle:** the info was always there — just hidden. Extract the noise into a method to raise the abstraction level. People tend not to care about test code as much as production code; here, treat the test's language as first-class.

---

## 3. Approval Tests (Snapshot / Golden Master)

### 3.1 What they are
- Same idea as golden master / snapshot testing.
- Replace `assertThat(...)` with `Approvals.verify(...)` (here `verify` on the bot's response).
- First run opens a **diff tool**: the *received* file vs. the (initially blank) *approved* file. Move the received content over to approve it.
- Approved files live in source control.

### 3.2 Formatting matters — introducing printers
- Raw output was "kind of noisy" / hard to read.
- Lada reuses a **log helper** (`log utils` → `printCommands`) — much better.
- **Retro:** empty approved file, a received file, system compares the two; match = pass, mismatch = diff pops up.

### 3.3 When to use approval tests
- Great for output "more basic than a primitive" — giant JSON, graphics, audio, anything bigger than a scalar.
- Here it lets them draw the story in a domain-y way understood by both.

---

## 4. Storyboards & More Printers

### 4.1 Cycle 2 — adding the greeting + formatting OCD
- Lada implements the "hi" part they discussed. Llewellyn's "OCD triggers": asks her to add spaces after "bot" so it lines up, and to fix a last line's indentation ("not level"). "I pay a lot of attention to like these things that annoy me."

### 4.2 Storyboards
- A **storyboard** is more concept than thing: a place to tell a story over time — like a movie or comic book, panels on a canvas.
- The simplest canvas is just a **string** (attach things to it).

### 4.3 Printers
- **Printers** print things in a format that's easy to read; there's a printer for the customer and one for the bot.

### 4.4 The buttons outlier
- A third test has not just text but **buttons** sent to the customer (a JSON blob). It "sticks out."
- State the problem → whiteboard: customer says hi → greet; customer says what they want → reply "are you a customer, yes/no" with **buttons** to click instead of typing.
- Need **another printer** to render the buttons. Reformatting makes it far more scannable — "I'm really sensitive to developer pain... don't ignore it, don't push through it, fix it."

---

## 5. Inline Approvals

### 5.1 Cycle 3 — too many approval files
- Converting the rest of the suite means one `.approved` file per test → noisy navigation.

### 5.2 Solution
- **Inline approvals**: expected content lives inside the test source via an `options` telling it to use the inline expected.
- On failure the diff tool's other side is your **source code**; the left side is the potential new source. Moving it over **modifies your source file directly** ("That is crazy... It modifies my source file?").
- Steps: pass new `options` → `.inline("")` empty string → promote the empty string to a parameter `expected` → run → move expected over → pass `expected` as the first parameter.

### 5.3 Trade-off
- Works great while output is **< ~10 lines**; beyond that Llewellyn dislikes it and prefers external files.
- Feels like a simple unit test, but expressed in "the main language for us."

---

## 6. `verifyAll` — Removing Test Duplication

### 6.1 Cycle 4 — can't see the overall strategy
- Inline everything → each test got big → hard to see the overall test strategy.

### 6.2 `verifyAll`
- Like "a fancy for loop" — approval testing's equivalent of JUnit-style **parameterized tests**.
- Provide a header, a list, and a lambda (e.g. `play conversation`); it captures all outputs together.

### 6.3 Refactoring recipe: "many of one → many of two"
1. **De-index**: inline `verifyConversation`, wrap the single input in a `List` of new conversations, access via `conversations.get(0)` — "you're basically popping it in the list... being a good programmer is knowing how to cheat well." Still passes.
2. **Many of one**: add `Approvals.verifyAll(header, conversations, c -> playConversation(c))` with a one-element list; comment out the old line; move output over.
3. **Many of two**: add a second conversation (different text) to the list; run; verify combined output.
4. Rename the header to something meaningful — they settle on **"test scenarios" / "test conversations."**

### 6.4 Headers as navigation
- Add a small **printer** that prints a banner of `*` stars around each scenario (a multi-line string with `%s`; they lament that "Java string interpolation sucks").
- Gives a high-level map plus each individual test. Lada is skeptical ("I really like my line of pearls") but gives it a go.

---

## 7. Surfacing Outliers & Custom DSLs

### 7.1 Cycle 5 — alphabetize + a missing case
- Lada alphabetizes/sorts the scenarios; the test breaks (all reordered) → "disapprove the whole thing," select-all approve — "the plus side of when you only change the test."
- Reading the now-visible strategy (hi, hi, pay bills, yes I'm a customer, no...) they spot a **missing "no / not a customer" case** and add it (routes "to operator"). "Easier now to see if something's missing in our overall strategy."

### 7.2 The memory outlier
- A **two-conversation** scenario shows the bot has **memory**: first contact → "hi, I'm your assistant"; second contact → no self-introduction.
- **Observation:** removing lots of duplication reveals near-duplicates — "95% of the tests are now together, but we got those edge cases," and now they're *obviously* edge cases.

### 7.3 Custom DSL / fluent builder
- Instead of manually building the two-conversation `List`, build a fluent API: `conversation ... .andConversation(...)` producing the list (e.g. a "pay bill" scenario).
- Convert `verifyAll` inputs from `conversation` → `conversations`; last line becomes `haveConversations`.
- **Principle:** custom DSLs / custom assertions express **domain language** and let outliers fold back in with the rest.

---

## 8. Markdown Approved Files — Living Documentation

### 8.1 Cycle 6 — the surprise
- Lada missed her inline tests; the output "kind of looks like a menu." Wouldn't it be nice to **click a link** to jump to the inline test? (It's IntelliJ — no plugin needed.)
- The team got excited and wanted to show it to the **product manager**, but it's awkward to present inside an IDE.

### 8.2 Solution: Markdown
- An approval file can be anything — usually text, but also graphics/sound. Use **Markdown** because Markdown has clickable **links**.
- Push it to **GitHub**, which renders it automatically — "just a website to them." Overall strategy at the top; click into a scenario.

### 8.3 Emergent, zero-cost BDD
- The docs "never get outdated because they're runnable."
- If a product person **edits** the Markdown, the tests fail and the edit "just becomes your requirements" — "It's BDD, lightweight BDD, zero cost almost."

### 8.4 The meta-point
- "This has been a kind of weird and windy path" — they never planned where they were going. Each step just followed the next annoyance.
- "Developer pain is a real thing... trust that that pain is telling you something needs to change about your system" — a way to *learn about your system*.
- Before: one test. After: the entire suite is the same visual size, and clicking (e.g.) number seven jumps to test seven.

---

## 9. Concept Map — How It All Connects

```
Storytelling
    └─► Testing Circle (Whiteboard → English → Code → Result)
            ├─► Storyboards
            ├─► Printers
            └─► Approval Tests
                    ├─► Inline Approvals (short output)
                    └─► verifyAll (parameterized scenarios)
                            └─► Custom DSL (domain-language construction)
                                    └─► Markdown Approved Files on GitHub
                                            └─► Living Documentation / Lightweight BDD
```

- Convenience functions and DSLs operate at every level — the mechanism for raising abstraction to match the domain.

---

## 10. Key Principles (Distilled)

1. **Developer pain is signal** — if it annoys you, fix it; good things follow.
2. **Tell a story, not a pile of assertions** — tests are documentation.
3. **Match abstraction level** — one whiteboard idea = one line of English = one line of code.
4. **Scannability matters** — formatting is not cosmetic.
5. **Approval tests shine on non-primitive output** — JSON, conversations, graphics, audio.
6. **Duplication removal reveals outliers** — that's a feature, not a bug.
7. **Domain language is the goal** — DSLs, printers, storyboards all serve it.
8. **Living docs beat static docs** — runnable approved files can't go stale.
9. **You don't have to choose** between asserts and approvals — mix freely.
10. **The path isn't planned** — trust the pain-driven process.

---

## 11. Q&A

### Q1 — How was the storyboard expressed in code?
- Early on they verified conversations/pieces/messages, but they wanted the *whole story* (customer said this, bot responded, customer said this).
- The storyboard is just a place to write that history and capture it — could be a string in the simple version, or an object that combines things the way you care about. You verify the storyboard.

### Q2 — How do you apply approval tests to complex types, not just strings?
- **Audio (text-to-speech):** capture the wave file, listen to it ("yeah, that sounds good"); as long as it produces the same wave file, it passes.
- **Pictures/graphics:** capture the image (e.g. a screenshot of your front page).

### Q3 — Non-text comparisons with error tolerance (e.g. two numbers within tolerance)?
- Error tolerance is trickier — maybe a good place for an **assert** (approvals doesn't remove asserts).
- Or let the **printer** format it — if you don't care past the third digit, print only three digits of precision.

### Q4 — How is this better than Gherkin/Cucumber or other BDD tools?
- "Have you ever set one up?" — Gherkin is a good tool but people struggle to adopt it; it takes time plus setup.
- Approval tests are practically **zero cost**. Gherkin sits *on top of* / tries to replace your test framework (stuff lives outside the code); approval tests sit *beneath* it as verification — you keep JUnit/Pytest/etc. Approval Tests exists in many languages; they used Java because that's where the code was.
- Naming anecdote: someone in a Slack/sock discussion called it "**BDD by mistake**" — because they'd basically just rediscovered BDD (which was about domain language).

### Q5 — Can you test the printers you wrote?
- Largely **by side effect** — the printers show up in the storyboards, so they're tested that way; no separate tests needed.

### Q6 — You have the When/Then; how do you approach the Givens?
- "**Given/When/Then is a lie**." Sometimes there's just a given, sometimes just a when, often both. What there really is is a **do** — you always do something, then verify it.
- If you need a lot of setup to test something simple, that's **developer pain** pointing at your production code — change the code so you don't need it (a different talk).

### Q7 — Can you address variables/ranges in accepted responses?
- Check a range in the **printer** ("boom, in range") or use an **assert** — you don't have to choose.

### Q8 — What about randomness (dates, differing values) in output?
- Use **scrubbers**: normalize the output (e.g. all dates → `date1`, `date2`) so you keep the structural assertion (this `date1` equals that `date1` below) without false failures. Lots of scrubbers ship out of the box.

---

## 12. People & References Cited

- **Lada Keeseler (Kessler)** — co-presenter; XP/TDD/DDD practitioner; *Consulting Magazine* Women Leader in Technology; free diver (2-minute breath-hold).
- **Llewellyn Falco** — co-presenter; independent Agile coach; discovered strong-style pair programming; creator of **Approval Tests**; co-founder of **teachingkidsprogramming.org**; co-author of the **Mob Programming Guidebooks**; his mother invented the card game **Set**.
- **Approval Tests** — the open-source verification library (Java, C#, Python, Ruby, JavaScript, and more).
- **Set** — card game invented by Llewellyn's mother (pitched from stage).
- Concepts/tools referenced: **hexagonal architecture**, **TDD/BDD**, **golden master / snapshot testing**, **Gherkin/Cucumber**, **JUnit / Pytest**, **IntelliJ IDEA**, **GitHub**, **Markdown**, **scrubbers**, **verifyAll**, **inline approvals**, **printers**, **storyboards**, **the testing circle**.

---

*Video: https://www.youtube.com/watch?v=h5vXHrL7ETQ — Transcript via yt-transcript.sh; outline generated from the transcript.*
