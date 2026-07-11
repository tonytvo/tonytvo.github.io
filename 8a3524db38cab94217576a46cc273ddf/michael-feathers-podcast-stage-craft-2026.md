---
title: "Michael Feathers – Podcast Stage | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "A Leadership Anonymous conversation with Michael Feathers on legacy code in the AI era — legacy as 'code we don't understand,' tests as change detectors, preserving understanding, and the Ironies of Automation."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Michael Feathers – Podcast Stage (Conversation Outline)

> ABK / *Leadership Anonymous* interviews **Michael Feathers** (*Working Effectively with Legacy Code*) on what legacy code means once AI writes and reads it.

---

## 1. Redefining Legacy Code

- Old definition: **"legacy code is code without tests"** — instrumental, meant to push us toward testing.
- New framing: **legacy code is the area of code you don't understand right now** — the gulf between what you understand and what you don't. AI will produce lots of code we've never looked at but may need to modify.
- Generating code fast risks **drowning in new legacy** — but it's now **easier than ever to dispose of code** (regenerate, detect what's unused, simplify). Take advantage and delete more.

## 2. Don't Outsource Understanding

- AI can both **generate** code and **help you understand** it — keep the learning, don't let it go away.
- Decide **what you as a developer must know** vs. what can be automated. Trick: have **AI quiz you** about the code — putting it in the driver's seat tests your understanding better than poking around yourself.

## 3. Risk-Calibrated Quality

- Match your quality bar to the system's risk: a beloved game with thousands of bugs (low risk) vs. life-critical systems (Feathers works on the **Ruby interpreter** at Shopify — mistakes surface as CVEs, so AI use must be careful).
- **"Worse is Better"** (Richard Gabriel): imperfect things sometimes win; Claude's flaky status page is proof the market tolerates imperfection.

## 4. Understanding, Models, and Global Knowledge

- Will AI eventually be unable to change code bases it helped create? Systems no one fully understands have existed for 20+ years; we keep raising the bar. The question is whether the **context window** can hold enough **global knowledge** to change degraded systems without error (humans have context windows too).
- Understanding = building **mental models via abstraction**; the hardest moments are when the model has silently changed and you must **re-compute** it. Hold **many competing models** at once, narrow to the most useful (like the veteran who "reads" any system — trained like an LLM over thousands of systems; compared to **chicken sexing**).

## 5. Tests, AI, and Exploratory Testing

- Feathers keeps small projects at ~100% coverage with AI-written tests as **change detectors** (annoying when they over-constrain refactoring). Interesting experiment: keep **human-written tests** separate to guarantee understandability.
- **Manual testing isn't dying** — it became **exploratory/adversarial testing**; AI is perfect for finding overlooked cases. Those who already made that shift are primed to use AI well.

## 6. Preserving Cognition & Asking Good Questions

- **Try to solve the problem yourself first**, then check AI's answer — the effort aids memory and grows your cognition. (Cognitive-science aside: **self-quizzing** beats rereading; "do the problems.")
- **AI rewards the ability to ask good questions.** Techniques to deepen understanding: "break this function into 5 responsibilities… now 3… now 2"; "translate this procedural code to a functional language"; "remove this concern and show me the result" — vary scale to see nuances.

## 7. What Changes, What's Lost

- Bets: **keyboards may fade** (students already talk to AI by voice; though "keyboards will disappear" has been predicted for 20 years); **specification languages** may rise (the line between a programming language and a specification blurs; maybe source code becomes an invisible, deterministic byproduct).
- **Ironies of Automation** (Bainbridge, ~1960s): automating routine work **raises the skill level needed to tend the system** — you still need a human who understands enough to catch when things fall off the rails. Fully unsupervised agents won't be "all that great."
- Concern: AI may **feel like it understands you better** than other humans (it carries context they can't) — and we risk losing behaviors (wanting to see the whole picture) as barriers lower.

## 8. The Next Generation

- Reframe for scared newcomers: you have **the most advanced learning tool ever built** — generate tutorials, drill deeper, stay curious. The key skill to develop fast: **self-reflection to catch when you *think* you understand but don't.**
- Juniors being replaced raises the question of how the next generation of seniors will form; everything is in flux (rewriting legacy, tending systems, building new). Newcomers unburdened by "that's impossible" may attempt — and achieve — things experienced engineers wouldn't try.

---

*Video: https://www.youtube.com/watch?v=YtTj0k-14oA — Transcript via yt-transcript.sh; outline generated from the transcript.*
