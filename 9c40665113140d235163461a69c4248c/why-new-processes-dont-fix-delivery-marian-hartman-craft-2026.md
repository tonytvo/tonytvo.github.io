---
title: "Why New Processes Don't Fix Delivery – Marian Hartman | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Delivery fragility is a work-condition (friction) problem, not a motivation or training problem — why big-splash processes fail, and how tiny 'keystone behaviors' (nudges) at upstream leverage points fix delivery incrementally."
type: "reference"
tags: ["softwaredevelopment"]
---

# Why New Processes Don't Fix Delivery – Marian Hartman (Detailed Talk Outline)

> Craft 2026 talk by **Marian Hartman**. Central claim: people always make **the most sensible decision in the moment**, so when delivery is fragile it's almost never a motivation or training problem — it's a **work-condition (friction) problem**. Big "splash" initiatives (new architecture groups, AI plans, formal security phases) don't stick because engineers can't integrate a boulder into their daily work. The fix is to intervene **upstream, inside the actual workspace**, with the **smallest, most repeatable behavior** — a **keystone behavior / nudge** — and to scale it only once it works. The talk moves from a physical demo → everyday engineering examples → the diagnosis → the alternative → two worked "recipes" (refactoring + AI reliability) → ~15 minutes of Q&A.

---

## 1. Framing — Everyone Makes the Sensible Choice

- Premise: *"Everything we do, we're doing because it makes sense. Our behaviors are generally the most sensible action in that moment."*
- The paradox for leaders: *"I have smart engineers, smart product, all the intelligent people… **why is our delivery so fragile?**"* — if everyone is acting sensibly, why the constant problems?

### 1.1 The posture-brace demo (the governing metaphor)

- At a computer she hunches toward the coffee cup — *"the most sensible choice in the moment,"* but long-term bad for her back and attitude, with **ripple effects**.
- Willpower doesn't scale: constantly thinking *"I must keep my back straight"* would consume **~80% of her executive function**.
- Instead she **changes the environment** — wears a **posture brace** — so sitting straight requires **no choice and no cognitive load**. It also *nudges* further good decisions (a standing desk, better arm position).
- Invisible upside: *"When I started wearing this a month ago, my motivation and happiness actually took a turn"* — an **invisible ripple effect** of changing the environment rather than relying on willpower.
- **Lesson:** give people a *tool that changes the decision*; don't ask them to spend executive function fighting the environment.

---

## 2. Everyday Engineering Examples — Sensible Now, Costly Later

Engineers *"always make a choice to make the work as easy as possible — not out of laziness, but out of efficiency."* The environment quietly steers them to bad design:

| Behavior | Why it happens (the "tool") | The metaphor |
|---|---|---|
| **Large commits** (we know tiny commits are better) | A tool/work-condition **encourages** the big commit — *"as a gardener, my tool is the wheelbarrow; I'll use it to move work as fast as possible."* | The **wheelbarrow** |
| **Avoiding flaky tests** (we test as much as we can) | Fixing flaky tests is *"incredibly painful; nobody wants to do that,"* so we route around them and lose real signal. | A **sundial in the shade** — no correct information |
| **"Someone else will fix it"** | One or two dirty dishes in the sink → *"somebody will fix that"* → hours later more dishes → next day so many you *"work at the coffee shop that day."* | **Dirty dishes** piling up |
| **Workarounds beat signs** | Told to use the far main door; people open the nearer **side door** to save time, then **prop it open** *"to make it easier for everybody"* — a security risk. The trainer then posts a *new* sign ("don't prop the door open"), abandoning the original plan. | The **propped-open side door** |

- These are **not shocking, gigantic situations** — they're *"little tiny pings always happening constantly."* We recognize good design when we see it, but *"our everyday systems are subtly guiding us to bad design"* — via wheelbarrows, shaded sundials, dirty dishes, and **posting signs instead of going behavior-first.**

---

## 3. Diagnosis — It's a Work Condition, Not Motivation or Training

- The easy (wrong) assumptions when people don't do the wanted behavior: *"they forgot,"* *"the training didn't stick,"* *"they didn't read the email,"* *"bad attitude,"* *"rough time personally."*
- **The tell:** when **all 5 / 50 / 500 people** — *different* people — produce the **same workaround**, *"you know it's a work condition and not a motivational issue."* People will always make the sensible choice; if a work condition blocks it, they invent a workaround.
- **The clue you have a work-condition problem:** *"when you're putting up these signs and nobody is reading them."*
- **Fracturing precedes the break:** the visible "blow-up" (e.g. a security failure) is preceded by *"little tiny decisions… the door props, the wheelbarrows"* — *"all these small decisions fracturing our glass so it shatters at the end."*
- **Symptoms to look for:** *"Is our delivery less predictable? Do we have longer cycle times? Do we have AI — yes, but is it actually effective for us?"*

### 3.1 Why the "big splash" fails

- The usual response is a **big splash**: announcements, press releases, plans, a **new architectural group**, a **big AI plan**, a **formal security phase**. *"Everybody on top is thrilled. The fish — the engineers — go 'huh,' and keep doing what they do every day."*
- Not out of rebellion — *"that big boulder is not very helpful; they can't integrate it into their everyday work process easily."*
- **It's not an information gap.** *"They have all the information — they're full of information"* (the **boxes** = information; the **potted plant** = the extra training). The problem is **the structure isn't set up for them to use that information effectively**, so they build a workaround.

---

## 4. The Alternative — Upstream Leverage Points (Keystone Behaviors)

- Instead of redesigning the whole system or doing a big splash, **intervene at a leverage point that is farther upstream and inside the actual workspace.**
- The leverage point is *"your **smallest and most repeatable behavior**"* — and it must actually **shift the output**.
- Examples (each takes **seconds to <5 minutes**):
  - **Commit risk notation** (developed with **Arlo Belshee**) — put **one character** in the pull request to flag risk level. The reviewer stops spending *"2 days reviewing a 20,000-line PR"* and instead **looks at the four flagged risks** → more reliably safer code.
  - **Peel-and-slice** technique for untestable code → enables **mock-free unit testing**.
  - **Use the IDE to extract methods** → *"steadily improve your design."*
- These are the **brace**: always-on, low-executive-function nudges that make the good behavior the default.

### 4.1 Where behavior actually shifts (and where it doesn't)

- **Not architecture** — *"that's the framing that gives the big picture. Nothing wrong with it, but that's not where the shift happens."*
- **Not process** — *"process is very abstract; everybody interprets it based on their own experience,"* so you get a different interpretation every time.
- **Not culture** — *"culture is a side effect of what's actually happening."*
- **Yes: the concrete steps performed in actual work time** — extracting with the IDE, committing with risk notation, doing the peel-and-slice. *"They tell us exactly what to do without the cognitive load of 'keep my back straight, keep my back straight.'"*
- **Definition:** these nudges are **keystone behaviors** — *"the smallest repeatable action"* that people can integrate *"without the massive overhaul that is just too exhausting."*

---

## 5. Worked Recipe #1 — Clean Code Incrementally (without disrupting workflow)

- Goal: *"clean the code incrementally without disrupting the workflow"* (audience agrees it's **not** easy).
- **Keystone behavior:** extract methods and give them honest names, broken into micro-behaviors:
  1. **Signal → extract + placeholder name.** *"Anytime you see a block doing too much, extract it and give it a placeholder name."* The placeholder **reduces cognitive load** — you don't sit there agonizing over the perfect name.
  2. **Replace with the honest name.** Nobody wants **"applesauce"** or **"peaches and cream"** as a name — *"that's professionally humiliating"* — so you immediately do the next micro-behavior. Template: **look at the call site → find the one fact about how it's used; look at the method body → find the one fact; apply the template.**
- After **1–2 weeks of intentional practice**, it becomes a **default behavior** (*"just like the brace"*). Result: **incremental cleaning without a big "we need to clean our code!" splash.** *"It doesn't get you 100% clean — of course not — but a lot more than you might think."*

---

## 6. Worked Recipe #2 — Improve the Reliability of AI Task Completion

Built live on stage, using the recipe template: **"When [signal], you used to do X — now do Y."**

- **Goal:** improve the reliability of AI task completion (audience agrees it's a *"tall order"*).
- **Smallest point of inconsistency:** *"the prompts are irregular, usually missing info,"* so results are inconsistent — *"not because anyone's doing a bad job,"* but because everyone has a different perspective and the info you need isn't being supplied.
- **Current behavior:** going to the command line and free-form typing exactly what you want (high variation).
- **The nudge (first draft):** *"When you start free-form typing in the command line, instead **iterate with an agent to build a process document, then run that process** to do the work."* → gives time back and yields consistent, reliable results.
- **Make it precise** (vague recipes fail — people need a **grounded experience** before they can theorize/explore). Precise version: **"Write a workflow, not a prompt."** Near copy-paste checkboxes for *"anytime you're about to use AI to accomplish a goal"*:
  1. Add the sentence: *"Now write me a workflow document I can give to AI that instructs it on a good process to accomplish that goal — and commit it."*
  2. **Review the document** (*"it will not be great"*); note each error inline (*"Hey AI, …"*) or edit directly.
  3. **Rotate:** *"I've updated it. Check it in, read the diff, **treat my edits as normative but probably not complete**, apply them consistently, read/execute/commit."*
  4. **Clear the context and run it** — *"go get your coffee, that's going to take a while, but you have a solid, iterated process document"* with consistent output.
- **Principle:** a small drop in a small pool, watching the ripples — *"if it's small, precise, consumable, and they're not confused by it,"* people get the grounded experience they need before building further options — *"continual improvement without a lot of overhead, because nobody has money, time, or energy for overhead."*

---

## 7. The Bonsai — Engineering Is Never "Done"

- *"I think of engineering as a **bonsai**. It is never done."* No big splash makes everything perfect; it's *"a constant pruning here, tightening here, straightening here, adjusting there."*
- **Wait for big splashes → cataclysmic responses. Do the tiny shifts → keep trucking, and it feels much better and stays in everyone's control.**

---

## 8. Q&A Highlights

- **Who does this, and when? (Márton, data-science chapter lead)** — *"Whoever sees the problem."* It can start far away — e.g. **managers said PRs were 'ignored or taking too long'**; talking to the manager (their pain/goal) *and* the engineers (*"why aren't you reading the PR?" → "because it's 20,000 lines"*) surfaced the work-condition and led to the **commit-notation** nudge. Needs **someone the team respects**; a small, *right* nudge earns *"oh my god, thank you."* Always pull the managers **and** the people feeling the blockage into the room — *"not to plan a big change (that's the old way), but to understand your experience,"* which is what lets you design an effective nudge.
- **What does daily correction look like in a team doing it well?** — ***"It doesn't look like anything. There's no overhead, so you don't notice."*** Long feedback cycles (multiple days/a week) are the **clue** something's blocking them. *"It's really not very sexy — it's just effective."*
- **Motivation vs. friction — how do you tell?** — If **most people aren't doing it and there are workarounds → it's friction.** *"Friction is blocking me from the behavior you want; motivation is 'I'm tired / depressed.'"* Friction can *later* hurt motivation (*"it's depressing to not be effective because you have to jump through hoops"*), but it's not the first thing affected. **Test:** if *anything*, however minuscule, blocks them → it's a friction issue; just change that.
- **Most common mistake designing a recipe?** — ***"It's too big."*** Anything abstract → *"I'm not sure I understand, I'll go back to what I was doing,"* or a slightly-wrong interpretation. Example: a **security company releasing production security risks** — *"terrifying"* — was fixed by **one tiny character** on the commit line. **"Always be tinier."**
- **How do you tell a keystone behavior? (they seem magical)** — **Look for ripple effects.** Commit notation → (1) clearer communication, (2) reviewers recognize risk, (3) risk more likely spotted and fixed = **3 ripples.** *"The more ripples, the more effective the keystone."* One or two ripples → maybe a minor "tightening-up" keystone for later.
- **Commit-notation clarification + junior-dev concern** — a character (e.g. a **tilde**) in front of each commit encodes the **engineer's confidence/risk level** (low / high / unsure); reviewers skip the low-risk and focus the high-risk. **Arlo Belshee created it** and can explain the exact notation. Audience pushback: it relies on the author *knowing* the risk, mis-flagging could hide bugs, and it may not suit juniors. Hartman: *"junior devs are usually not committing on their own — they're pairing,"* but *"you're absolutely right — you have to be **contextually aware of who you're dropping this onto**."*
- **Should a manager scale a working behavior across many teams?** — **Yes — the "green path" was designed to scale.** It grew out of **Arlo Belshee's refactoring techniques**, which *"couldn't scale because he had to teach one team at a time."* But **don't scale immediately**: try it with one person → a couple more engineers → the team → after a few smooth weeks, **10 teams**. Good keystones *"become viral, part of the engineering culture."* The wrong one *"won't blow up — it'll just die."*
- **"This is how we've always done it" as justification — how to break out?** — Have a **direct conversation**: *"What are you trying to protect? What are you worried won't work?"* Resistors are usually **guardians**, tired because *"the last six initiatives did not work."* Start by **talking to the engineers who don't think it'll work**; those honest, sometimes painful conversations often turn them into the **first to sign up** (*"okay, I trust that — this isn't a big initiative that'll blow up my work"*). Acknowledge that **legacy-code developers** are protecting *"the heartbeat of your organization."*
- **Why not add *more* friction to bad behaviors instead of *less* friction to good ones? (asked by Llewellyn)** — *"That will work if you're very careful and engineer it well, but it's **way harder** than simply finding the friction that's blocking the good behavior and fixing that."*

---

## Key Takeaways for Software Teams

1. **Assume sensible actors.** If everyone smart still ships fragile delivery, look at **work conditions**, not motivation or training.
2. **Same workaround from many different people = a friction problem.** The tell: you post signs and nobody reads them.
3. **Big splashes don't integrate.** Boulders (new orgs, big AI/security programs) impress leadership and change nothing on the ground.
4. **Fix upstream with keystone behaviors** — the smallest, most repeatable action that shifts output (one-character risk notation, extract-method, peel-and-slice, "write a workflow not a prompt").
5. **Behavior shifts in concrete work-time steps** — not in architecture, process, or culture.
6. **Rank nudges by ripple count;** be precise enough that no one has questions; **be tinier** than feels reasonable.
7. **Prove-then-scale;** engineering is a **bonsai** — constant small pruning, never "done."

---

## People & References Cited

- **Marian Hartman** — speaker; keystone-behavior / nudge method, the "green path" for scaling.
- **Arlo Belshee** — commit **risk-notation** system, **peel-and-slice**, and the refactoring techniques the method scales.
- **Llewellyn (Falco)** — audience question on adding friction to unwanted behaviors.
- **Márton** — data-science chapter lead; question on who owns finding/implementing nudges.
- **Flora** — ran the audience mic.
- Concepts/tools referenced: keystone behavior, leverage point, executive function / cognitive load, ripple effects, "big splash," IDE extract-method, mock-free unit testing, commit risk notation, "write a workflow, not a prompt."

---

*Video: https://www.youtube.com/watch?v=2Gh8FyCKVbk — Transcript via yt-transcript.sh; exhaustive outline generated from the full transcript.*
