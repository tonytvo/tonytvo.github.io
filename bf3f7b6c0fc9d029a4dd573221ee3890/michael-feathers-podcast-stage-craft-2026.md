---
title: "Michael Feathers – Podcast Stage | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "A Leadership Anonymous (AVK) conversation with Michael Feathers on legacy code in the AI era — legacy as 'the code we don't understand right now,' disposing of code, not outsourcing understanding, tests as change detectors, exploratory testing, preserving cognition, asking good questions, and the Ironies of Automation."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Michael Feathers – Podcast Stage (Conversation Outline)

> The **first-ever Podcast Stage** at Craft, hosted by **Leadership Anonymous / AVK** (*Anonim Vezetők Klubja*, avkpodcast.hu) — a 4-year-old Hungarian leadership podcast with a ~250-person Slack community that stays "anonymous" in spirit (focusing on *how to do better next time*, not naming/blaming employers). Hosts: **Fanni / Carolina Tóth** (cognitive scientist → IT coach → high-performance consultant), **Dávid ("Kish Pócza")**, and **Meffy** (engineering director, community builder, blogger). Guest: **Michael Feathers**, author of *Working Effectively with Legacy Code* — the book that reshaped how a generation of engineers *think* about software. Topic: what happens to legacy code now that AI both writes and reads it. (Gergely Orosz headlined the same stage the next day.)

---

## 1. Redefining Legacy Code

- **Old definition (from the book): "legacy code is code without tests."** Feathers now calls this **instrumental** — a definition built to *make something happen* (push people toward testing), not a literal truth.
- **New framing: legacy code is the area of code that's not understandable *right now*.** It isn't about age. Testing helps make code understandable, but the real thing that matters — *especially in an AI world* — is **the gulf between the areas you understand and the areas you don't.** AI will produce **lots of code we've never even looked at** but may need to understand in order to modify.
- **Framing the interviewer offers:** if you were on a greenfield project when the book came out, *you're probably working on legacy code now.* And generating code fast means **"we could be drowning in legacy code."**
- **The double-edged sword / silver lining:** it's **easier now to dispose of code than ever** — regenerate it, quickly detect what's actually used, do the grunt work of deleting the unnecessary and rewriting toward something simpler. **"We should take advantage of that and get rid of a lot of code."**

## 2. Don't Outsource Understanding

- The risk everyone is running: using AI/LLMs to **outsource the *understanding* of code**, not just its production.
- Feathers keeps returning to this: **AI can generate code *and* help you understand it** — the trick is not to *"let the learning go away in the process."* (He explicitly ties this to Orosz's keynote message.)
- His governing question: **"What should I know as a developer about this code?"** Deliberately decide what you **don't** care about (automate it) vs. what **core understanding you must maintain.**
- **Concrete technique — have AI quiz *you* about the code.** Putting the AI *"in the driver's seat"* tests your understanding far better than *"poking around yourself and seeing if you understand something."* A nice affordance: *"I need to understand this — let it quiz me to find out whether I actually do."*
- Host's synthesis (echoed across AVK episodes): **the one thing you should insist on keeping for yourself is the way you think** — outsource everything else you can, but not the thinking. Same rule applies to legacy code.

## 3. Risk-Calibrated Quality ("Worse is Better")

- **What "author was never a human" changes depends on the *kind of system* you have.** Story: a games company with **"the longest bug backlog I've ever seen — thousands and thousands of bugs,"** yet everyone loved the game, it made money, the glitches didn't matter. **Low-risk environment.**
- Contrast with **high-risk environments** — *"you need to know which one you're in and adjust your quality bars accordingly."* **Manual review still has a good place in highly critical systems, and will for a good while.**
- **The market defines what's acceptable.** The interviewer points to **Anthropic's Claude** — the most desirable software tool right now — whose **status page shows frequent breakage** that would've been unacceptable 5–10 years ago; **people still buy it.** Feathers: *"That tells you what's acceptable."*
- **Richard Gabriel's "Worse is Better"** (old paper): sometimes the **imperfect thing wins** — the imperfections can even *aid* it, and when present they simply *"don't get in the way."*

## 4. Do We Reach a Point Nobody — Not Even AI — Can Change the System?

- Feathers used to wonder *"what happens when systems get to the point where nobody can understand them?"* — then realized **"we've been that way for at least 20 years."** No one person understands these systems; **we keep pushing the bar higher.**
- The genuinely new, *"a little bit scary"* question: **do we reach a point where AI can no longer effectively change code bases it helped create — and reach it without realizing we have?**
- **Why it's hard = global knowledge.** With **good modularity** you can work locally and ignore the surroundings. But many systems — **especially old, degraded ones** — require **global knowledge** to make an effective change (*"change this, this, this, and that thing behind me over here"*). The question becomes: **can the context window hold enough in-depth knowledge of a large-enough area to make the change without error?**
- **Humans have context windows too** (Fanni's cognitive-science background) — these are **physical limits**. AI systems have physical limits as well; we keep pushing the concern-able area larger, but *"we always have to catch up with that."*
- **A leadership reframe (Fanni):** context window ↔ *locus of control*. To create change you must be **strategic** — agreeing 1:1 changes nothing, but aligning the **few people with a large locus of control (leaders)** changes the org. She flips the question: **"Who are the *legacy people* in your organization?"** (i.e. the ones nobody dares touch.)

## 5. Understanding as Model-Building, and "Reading Between the Lines"

- **How we understand: we abstract and build a mental model.** The model is either useful for changing the system or it isn't.
- **The hardest moment is when the model has silently changed and you're not aware of it** — it can take significant time to **re-compute** your model, and the stale model *"gets in your way."* Feathers has seen this *"over and over"* with developers: a model burns in, you *think* you understand, and shifting models is slow.
- **The veteran who "reads" any system.** A colleague could walk into any team: *"Tell me about your system"* → *"Well, if that's happening, this must be happening too, right?"* He couldn't explain how — **through thousands of systems over a long career, he'd been "trained like an LLM"** to notice recurring patterns.
- **Feathers' own method:** hold **many competing models in mind at once, privilege none**, and **narrow them down over time** to the ones most useful for explaining and working with the system.
- **"Chicken sexing" analogy (Fanni):** determining a chick's sex is a real job you can only learn by **watching an expert do it** — you can't articulate what you're looking for, but after enough watching you *just know*. Same tacit, **"reading between the lines"** skill, at a systemic level — and there's real fear of losing it as we infer from LLM output instead.

## 6. Tests, AI, and Exploratory Testing

- **Can we trust AI to write tests / bootstrap tests on a large untested codebase?** Feathers does it **all the time.** On small projects he keeps **~100% coverage**; if it drops to ~95%, *"write whatever it takes"* to restore it.
- **Tests as change detectors** — a nice baseline covering *"just about everything."* The **irritation:** AI tests can **over-constrain**, testing things you'd rather keep free for refactoring, so you must change tests to change code.
- **Understandability of tests matters** — historically we use tests to *understand* systems. Interesting experiment he hasn't run: **keep human-written tests separate from AI-generated ones** to guarantee a body of tests you know are understandable.
- **Manual testing isn't dying** (a prediction the host has heard *"for 10 years"*). It transformed into **exploratory testing** — automate the grunt work; the tester becomes a **true adversary and quality-feedback mechanism** for the team. **AI is perfect for finding cases you didn't think of.** Those who already made the shift to an **exploratory/adversarial mindset are primed to use AI well.**
- **Testing culture concern (Dávid):** many were taught to **treat test code as production code** — a real mindset shift — but now people **generate tests blindly** and may stop focusing on them. Are we ready to have the *confidence* to trust that code? Tests were the gateway for years; now there are gateways plural — is it changing?

## 7. Preserving Cognition & Asking Good Questions

- **Solve the problem yourself *first*, then check AI.** Feathers does this constantly: before asking, *"what would the answer be?"* — then compare AI's answer, maybe follow up. **The effort of trying yourself (a) makes you remember it, and (b) grows the part of your cognition that's genuinely useful.** *"We can't let go of that."*
  - **Analogy (from a walk to the conference):** someone learning Hungarian tries to **guess a street sign's meaning before checking** — the guess is the point.
  - **Math professor's "one secret" to an A:** ***"Do the problems."*** The **struggle** is intrinsic — frustrating, but it aids memory and enables future work. *"Struggle and curiosity"* (curiosity often *comes from* struggle: "why is this so hard?").
  - **"The cognitive scientist answers" (Fanni):** engaging multiple modalities helps, but **the single most efficient way to learn is quizzing yourself** — even after one read/listen, self-quizzing dramatically raises long-term retention.
  - **How Feathers preps talks:** he doesn't rehearse — he **thinks about the topic obsessively for a long time** (*"how do I know this is true? what happens when this interacts with that?"* even over lunch) until the ideas are **"bullet-tested"** enough to speak freely.
- **AI rewards the ability to ask good questions** — get better at questions and you get the full benefit. Interaction techniques to deepen understanding by **varying scale**:
  - *"Here's a giant function — break it into 5 responsibilities; now into 3; now into 2."* (Varying granularity surfaces nuances you'd otherwise miss.)
  - *"Here's procedural code — translate it to a functional language; let me see what it looks like."*
  - *"Here's a big piece of code — get rid of this one concern and show me the result."*
  - **"Infinite variation"** in questions to **parse and slice apart** systems for deeper understanding — worth experimenting to find your own techniques.

## 8. What Changes, What's Lost

- **Two bets from the host:**
  1. **Keyboards will fade** — in ~10 years many people will **talk to computers** like in old sci-fi. (Counterpoint noted twice: *"keyboards will disappear"* has been predicted for 20 years, once by someone at Microsoft; *"we're still waiting."*) Evidence for it now: **first-year university students already talk to AI by voice** rather than typing/chatting — and *"the next generation's habits become the new standard."*
  2. **Specification may become everything** — the line between a **programming language and a specification** blurs; languages may rise to **"specification languages."**
- **Will we even have source code?** A line of thought Feathers entered ~3 years ago: if compute gets **cheap enough**, an AI might **write code in the background you never see** (he already notices it *"using Python to answer my question"* without showing it). Then the question becomes: **is source code's real purpose just to be a *deterministic base* to infer from?** AI is **non-deterministic**, relying on training patterns — unlike code.
- **Is "giving enough context" the new legacy code?** (Fanni "talks to Claude" for ~6 minutes to convey context, the way you once learned a language to give context to a computer.) Feathers: **very possible** — whatever it produces becomes the legacy code. **If you look at the code, you can judge maintainability (for you or the AI); if you don't, you risk getting caught out** — *"I worked on this system for 3 months and now I can't change it anymore."*
- **What becomes obsolete?** Feathers doesn't name specifics beyond himself (*"I still can't leave a spelling error in a prompt — I go back and fix it"*). Host's example: he was **proud of taking great meeting notes**; now **auto-transcription makes that a non-skill.** What strikes Feathers most: **AI infers context astonishingly fast** because *"it has read everything"* — mention something obscure tied to something else and *"it gets it,"* where a human would need a 5–10 minute conversation *and* the right background.
- **The subtle risk:** on a **cognitive (not emotional) level**, it may always feel like **AI understands you better than other humans do** — it carries context they can't. (Aside: our thoughts feel unique, but they're likely **patterns others share too**; *"but of course your thoughts are wonderful, AI will tell you."*)
- **A lost *behavior*, not just a skill (Dávid).** Checking a PR's multiple checks that weren't visible on the global screen, he wanted to **see the big picture**; a colleague said *"I don't care anymore — I just ask the AI what happened."* The worry: we **lower the barrier** and stop *wanting* to oversee the whole picture. Something is changing — *"more and more stuff is getting lost, not just skills, but how we behave, how we want to understand."*
- **Ironies of Automation (Lisanne Bainbridge, ~1960s–'80s).** Automating routine work seems purely beneficial — but it **raises the skill level required to *tend* the system.** You still need a human who **understands enough to know when things fall off the tracks** and take corrective action. So AI **raises the bar** to effectively tend systems — and **fully unsupervised agents *"won't be all that great."*** (Directly relevant to the junior-engineer debate.)

## 9. The Next Generation

- **Reframe for the scared newcomer:** you have **"the most advanced learning tool that's ever been constructed"** at your fingertips — generate your own tutorials, stop any moment to say *"explain this at a deeper level,"* compare concepts. **Stay curious and grasp the concepts and you can sail through.**
- **The key skill to develop fast:** the classic programmer problem of **thinking you understand something when you don't.** You'll make mistakes; learn to **question your own knowledge based on interacting with AI.** Developing this **self-reflection to catch when you're off the rails is extremely important** — AI just **speeds up the learning cycle** (painful — *"I thought I understood this and I don't"* — but it **sharpens your mind** and makes you far more effective at asking and evaluating).
- **Is it easier or harder to start today?** *"So much is in flux."* Newcomers may **rewrite legacy systems, tend legacy systems, or build new things — all of it will happen** — and *"we don't know where the point of equilibrium will occur."* One hopeful thread: people **without deep CS baggage** may **attempt things experienced programmers would refuse to even try** — and get great results — precisely because they don't "know" it's impossible.

---

*Video: https://www.youtube.com/watch?v=YtTj0k-14oA — Transcript via yt-transcript.sh; outline generated from the full transcript.*
