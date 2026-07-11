---
title: "Code Health Guardian – Artie Shevchenko | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Artie Shevchenko on scaling human code reviews without losing rigor — Mokyr's knowledge feedback loop, jagged AI intelligence, cognitive debt, the review decision tree, coding-first-AI-second, and small teams of owners."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Code Health Guardian: How to Scale Human Reviews Without Losing Rigor – Artie Shevchenko (Talk Outline)

> Artie ("Archie") Shevchenko — author of *Code Health Guardian* — reframes his book talk around **the new bottleneck problem**: with AI generating code, can we keep review rigor without becoming the bottleneck or burning out? He grounds it in the **2025 Nobel Prize in economics** (Mokyr's knowledge feedback loop), argues LLMs are "knowledge without understanding," and builds a **review decision tree** that leads to **coding-first / AI-second** for hard changes and **small teams of owners** relying on AI review for the rest.

---

## 1. Framing — From "Craft" to "The New Bottleneck"

- First time giving this talk (reassures the host he has **speaker notes**); presenting near-midnight Sydney time (he's from Sydney, Australia).
- The book ***Code Health Guardian*** is about **the role of human software engineers in the AI era** — "the story of a healthy code base" in two parts: (1) **code health / complexity / craft**; (2) **key practices** that maintain health (code reviews, design docs).
- Planned to talk about part 1 (craft — fits the conference name), but **pivoted weeks ago** to part 2, **code reviews**, retitled **"How to scale human reviews without losing rigor"** — because that's what his polarized LinkedIn feed is about.

### 1.1 The polarized debate

- **Half the feed:** abandon code reviews — they block productivity; models are so good we can 100% trust AI review; "specs are the new code."
- **Other half:** don't surrender rigor — natural language is ambiguous, no sane person trusts LLMs, "no cognitive surrender," slow down and read the code even if we're the bottleneck.
- **His question:** can we do **both** — keep rigor **without** being the bottleneck or burning out? And a spicier one first: **should humans even be in the loop?**

## 2. Human Understanding & the Knowledge Feedback Loop

### 2.1 The 2025 Nobel Prize in economics (Joel Mokyr)

- Over ~200 years the world has seen unprecedented, remarkably **stable** economic growth (on a **log scale**).
- Past civilizations often had **more innovation/advanced technology** than we assume, yet **never achieved sustained growth** — millennia of **plateau.**
- Half the **2025 Nobel** went to economic historian **Joel Mokyr**: sustained growth needs a special relationship between two knowledge types:
  - **Prescriptive knowledge** — *knowing what to do* (practice).
  - **Propositional knowledge** — *understanding why things work* (theory).
- For most of history these were **almost entirely separated**; growth becomes permanent only when they **continuously feed into each other** — historically an **anomaly.**
- Mokyr: before the Industrial Revolution it was "**mechanical engineering without mechanics, iron-making without metallurgy, mining without geology**" — **technology without genuine understanding**, so humanity stayed stuck.
- In the **18th century** the mindset that theory should be practical *and* **practice should be theoretical** became **mainstream**, establishing the feedback loop that pulled us off the plateau. The Nobel criterion is **benefit to mankind** — relevance today is the **rise of AI.**

### 2.2 AI can strengthen *or* break the loop

- **Strengthen:** AI makes **propositional knowledge more accessible** — explains theory to anyone, in their context, with their examples.
- **Break:** without a human in the loop it can go off the rails — LLMs are **massive knowledge without training understanding**, echoing the pre-industrial "knowledge without understanding." If we slide into **accepting whatever the prompt outputs just because it works**, we risk a **new technological plateau** with a broken feedback loop.
- Reframe: AI tools are **"context-constructing harnesses for the real intelligence"** (the human) when it comes to understanding and verification.

### 2.3 Jagged intelligence — anecdotes

- Analogy: AI tools are like **very diligent students** — great at remembering and talking, but **don't understand**; on an exam they could get an **A or an F** depending on how the question is posed (they learned the tokens, not the ideas).
- Closest to understanding: **reasoning models** (emergent properties like **backtracking** after massive RL) — better than SFT, but **no sign of real understanding.**
- **Gemini heat example** (told at Google months ago): Gemini insisted heat flows from **cold to hot** (cold gets colder, hot gets hotter).
- **Gemini Flash hiking example** (Budapest, yesterday): recommended a trail with great reviews, then a route it said must be a **clockwise loop** — but the map wasn't clockwise. As a non-native speaker he doubted himself ("maybe 'clockwise' means counterclockwise in English") — then hit **point A with no road**: it had **invented trails.** Jagged intelligence.

### 2.4 Intellectual control (Fred Brooks)

- The loop is **100% relevant** to software: to keep evolving a code base we must **preserve and strengthen the feedback loop** — the essence of a **code health guardian**: keeping **intellectual control.**
- **Fred Brooks (*The Mythical Man-Month*)** named three challenges: **system** (design), **product** (execution + changing needs), and **maintaining intellectual control** over the resulting complexity. Unchanged in the 20-years-later anniversary edition, and still true — but now over **increasingly larger volumes of complexity.**

## 3. Are We Doomed to Review Full-Time?

- Full-time reviewing looks like the logical conclusion but isn't sustainable: **busy work, no flow state, constant context-switching, review fatigue, more bugs, more technical & cognitive debt** — and you're *still* the **perceived bottleneck.** There must be a better strategy.

### 3.1 Improving the review *experience* isn't enough

- **Anders (Pragmatic Engineer podcast):** authors should provide a **"guided tour"** of a change (like jumping on a Zoom to walk a reviewer through a PR so they review fast) — has risks but makes sense.
- Good teams already do a lot: **small changes, PR chains/trains, good descriptions, clear explicit starting points.** An automatic PR walkthrough would help teams with **low baselines**, but it's **not a game changer** — some reviews stay hard.
- Terminology: **CL (change list)** = **PR** = pull request (Google naming).

## 4. Cognitive Debt

- To fix the bottleneck we must go beyond developer experience and **decrease the number of human reviews** — safely.
- **Cognitive debt** = **erosion of shared understanding within your team of the system you're working on.** Less visible than technical debt, but in the AI-agent era possibly a **bigger risk.**
- Historically mitigated by **doing our own craft** and **reviewing others' craft** — AI challenges **both.**

### 4.1 Design docs — necessary but not sufficient

- Working with **design docs** helps prevent cognitive debt (a whole book chapter). **Fun fact:** the book began when Artie asked **Titus Winters** why *Software Engineering at Google* didn't cover **design-docs culture**; Titus called it **"a miss"** worth making public — so Artie started writing.
- **Reviewed design docs are not a replacement for reviewed code.** Much "spec-driven development" hype treats a **spec** as a simplified design doc; at Google and Canva a spec was **always part of the process** (research, high-level design, trade-off analysis, cross-team alignment) — but **docs lack the details** (code has them) and **most work happens while coding.** Taken to the extreme as **big up-front design**, "we all know how it ends."

## 5. Optimizing the Review Workflow

- Baseline workflow has **three review steps**: **Step 2** — author reviews AI-generated change (formerly self-review); **Step 4** — AI review (another agent); **Step 5** — peer review.
- **AI review is cheap** — ignore it for optimization. Optimize the **human** steps: **Step 2** and **Step 5.**

### 5.1 Step 2 — don't skip self-review

- Tempting to **skip self-review** and make it "someone else's problem" — **don't be a jerk.** Not reviewing non-stop is as unacceptable as reviewing non-stop; **someone must understand the change**, and expecting peers to read what you haven't is "not being Googley."

### 5.2 The decision tree for AI-generated changes

- **Small change** → review feels **rewarding/doable** even if cognitively hard — easy to focus and digest.
- **Big but familiar ("boring") change** → still relatively easy; higher risk of missing something, but **AI is a decent safety net** for accidental misses. Most changes are **small or big-and-boring** (ideally small-and-boring) — starting from AI-generated code works well here.
- **Big, non-trivial change** → the interesting case (focus for the next section). Splitting into a **chain of smaller PRs** is a win but it's **still hard** to review.

### 5.3 Why big non-trivial reviews are harder with AI

- **Nobody built understanding while writing** — code you write "talks back" and teaches you the problem, trade-offs, even the requirements; with AI you get the big change **instantly** with no such understanding.
- **Review isn't as fun as coding** — and brains learn better when having fun (why he invests in making talks fun).
- **Increased volume → review fatigue → lower quality → LGTM rubber-stamping** — an **old problem at a new scale.**

### 5.4 The muscle analogy

- Rigorous review is a skill/habit **and a muscle.** Two lessons:
  - **Muscles can be trained** — seniority used to bring a **gradual** increase in review load (time to adapt); AI dumps a **high volume on everyone at once.**
  - **Muscles have limits** — "I haven't met a single engineer who can review non-stop well **without becoming unhappy**," which hurts their and everyone's productivity ("hard to be a good human when you're unhappy").
- Add new AI tools to learn and **five agents running in the background** → widespread exhaustion. Vendors promised LLMs would **lower cognitive load**; for most engineers it's **net negative.**

### 5.5 The two bad options — and confessing option 2

- For a big non-trivial change: **Option 1 = rigorous review** (was hard before, much harder now) vs. **Option 2 = skim / vibe it through.** Many of us **think we're doing Option 1 but are really doing Option 2** with AI changes.
- Bugs/tech-debt risk is model-dependent, but **Option 2 accumulates cognitive debt fast** — a much bigger problem than for Option 1.

### 5.6 Flip the script — coding-first, AI-second (Option 3)

- Challenge the assumption that you **must start from an AI-generated change.** With a human peer's giant PR you can't just say "I'll redo it" (their hours are invested) — but **with AI you can.** If Claude outputs 500 non-obvious lines, say **"don't worry, I'll spike it myself."**
- **Coding-first / AI-second workflow:** (Step 2) **you spike the change**, then hand it to AI **with the spec/requirements**; AI proposes improvements (almost inevitably); you **choose, apply, and review them one by one.**
- You still review something, but now you **already deeply understand the solution** → much easier. Meets nearly all review goals **except** the bottleneck (addressed next).

### 5.7 If you do choose Option 1

- Use **AI to understand and internalize** the proposed solution. **Anthropic research (this year)** claims that for at least some change types, **AI-assisted review done properly tackles cognitive debt as efficiently as Option 3** — ask AI to explain motivation and behavior, take time for the interaction. (**Option 2 / pure vibe** is excluded from the reasonable list.)

## 6. Step 5 — Optimizing Peer Reviews

- Peer review is the **main bottleneck** (a non-author reviewing).

### 6.1 Skip peer review for low-risk changes

- Changes aren't equal — internal tooling / experimental projects not touching business-critical flows may **skip peer review** if **AI review is the safety net** and you can **reliably detect low risk.** Least controversial optimization.

### 6.2 Owners + AI-only review (the controversial, high-impact one)

- **Owners:** at Google and Canva every file has **owners** (usually folder-level); a file can't change without an owner's approval — a hard rule.
- Optimization: **let code owners rely on AI review only** — notify other owners but **don't block**; if an owner makes a change and **AI LGTMs it, merge.** Optionally add a lighter approval where a human **approves the change description** without reading the code.
- **Requires small teams.** With a big team (8–10 engineers, 2–4 owners), owners spend **all their time reviewing everyone's PRs** and never get to enjoy the optimization.

### 6.3 The "profit mode" trap → why teams must be small

- Two forces push you to **make more engineers owners**: (1) it seems to **solve the bottleneck**; (2) **inequality** — owners now need only **AI's LGTM**, so everyone wants to be an owner.
- Result: **most engineers become owners.** In non-small teams, **too many owners** causes **context attrition** and **loss of conceptual integrity** (**Martin Fowler's** main takeaway from *The Mythical Man-Month*).
- Conclusion: **in the AI era, teams must be small** — a prerequisite to sustainable human reviews. (On-call rosters etc. are another topic.)

## 7. Summary — A Sustainable Human-Review Strategy

- **AI reviews are cheap → make them mandatory / automate them.**
- For a **not-small, non-obvious** AI change, **spike it yourself**, then **iterate on improvements with AI** — practicing craft without slowing the team (short- or long-term).
- **Every change must be understood** — understanding is the human's privilege.
- **Don't be a jerk** — don't send peers changes you haven't reviewed yourself.
- **Skip peer review** only for **(a) low-risk changes** and **(b) when you're the owner** (with an AI LGTM).
- **Keep teams small with most engineers as owners** (juniors won't be owners, but they should be a tiny minority — if ~50% aren't owners, it won't work).
- Plus **good old best practices**: **design docs**, **small changes that clearly tell the story** of the change.

## 8. Q&A

### Note — cut content

- He **sacrificed the code-complexity-model** portion (in the talk description); it's in the **book** (he brought a few free copies).

### Q — Owners are still human and can fail; why trust them / how is it different from non-owners?

- In practice, PRs owners send for review are **often rubber-stamped anyway.** But owners **understand the system's architecture** and how to **preserve structural integrity** — that's the requirement to be an owner — so there's a real difference, **plus the AI safety net.**
- Big names already have AI write **and** review all code for everyone ("people are doing crazy things"); letting owners merge on an AI LGTM is **more conservative and pragmatic.** If AI flags issues, add a policy to **route to a human** ("if unsure, mark as needs human review").

---

## People, Books & References Cited

- **Artie ("Archie") Shevchenko** — speaker; author of *Code Health Guardian*; ex-Google, ex/at Canva; university lecturer.
- **Joel Mokyr** — 2025 Nobel Prize in economics; prescriptive vs. propositional knowledge; the knowledge feedback loop.
- **Fred Brooks** — *The Mythical Man-Month*; three challenges of software engineering; conceptual integrity.
- **Martin Fowler** — conceptual integrity as the key takeaway from *The Mythical Man-Month*.
- **Titus Winters** — *Software Engineering at Google*; conversation that sparked the book (design-docs culture).
- **Anders** — Pragmatic Engineer podcast; the "guided tour" idea for reviews.
- **Anthropic** — research (this year) on AI-assisted review tackling cognitive debt.
- **Gemini / Gemini Flash** — anecdotes of jagged intelligence (heat transfer; invented hiking trails).
- **"GG" / "Gagay"** — referenced re: AI review and Google naming (change lists).
- Concepts: knowledge feedback loop, cognitive debt vs. technical debt, jagged intelligence, review fatigue / LGTM rubber-stamping, coding-first / AI-second, code owners, conceptual integrity, small teams, CL = PR.

---

*Video: https://www.youtube.com/watch?v=mHXm5j_tGrc — Transcript via yt-transcript.sh; exhaustive outline generated from the full transcript.*
