---
title: "ESSENTIALS - Event Storming for fun and profit - Daniel Terhorst-North | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Daniel Terhorst-North explains event storming — meta-demonstrated by event-storming the talk itself — for business processes, legacy and new applications, with facilitation advice, archetypes, and an extended Q&A."
type: "reference"
tags: ["softwaredevelopment"]
---

# ESSENTIALS - Event Storming for fun and profit - Daniel Terhorst-North (Talk Outline)

> Daniel Terhorst-North gives **"a talk about a talk"** — in fact "a talk about *this* talk": he **event-storms the very talk** he is presenting about event storming. Introduced as "the most known international tiger wrangler," he opens the **"graveyard slot"** (post-lunch) joking he'll "speak very quietly cuz I don't want to keep any of you awake." The whole talk is structured as one event-storming exercise, built on the **Disney story arc**: *once upon a time … until finally.*

---

## 1. Framing — The Disney Story Arc

### 1.1 A talk about a talk
- The talk is **how Daniel used event storming to prepare this talk about event storming**. "Any questions? Okay."
- Opening slide: **"Once upon a time Daniel decided to explain event storming"** — with an **AI-generated "little person"** he asked to look "exactly like" him that "didn't at all." ("Why did that happen? Why did that happen?")
- **Always start with the end in mind:** "Until finally the audience could try event storming for fun and profit."
- **The pattern of every event-storming exercise:** start with **"once upon a time,"** end with **"until finally."**

### 1.2 The Disney movie formula
- "Does anyone know the Disney movie formula? Every single Disney movie ever has the **same structure**":
  1. **Initial status quo** — "once upon a time."
  2. **One day** — an event happens (disruption to the status quo).
  3. **Because of this** — character development.
  4. **Because of this** — the story arc continues.
  5. **Until finally** — a **new status quo**.
- Examples he rattles off: **Toy Story** ("once upon a time there were some toys in a toy box; one day one of the toys went missing; because of this Woody the cowboy…"), **Winnie the Pooh** ("a bunch of animals living in a woods; one day Winnie the Pooh went for a walk").
- **We reuse that arc:** "Once upon a time Daniel decided to explain event storming *until finally* the audience — that's you — could try event storming for fun and profit."

### 1.3 The originating event
- This "didn't just happen." **Feyo Gergely** — one of the co-founders of **Craft** (and **Medea**) — **invites Daniel to speak at Craft.** "That's a thing that happened that caused this." (Joke: "We could almost be brothers — such a family likeness.")
- So the meta-event-storm of the talk lays out, as a sequence of orange stickies, everything that had to happen — a "bunch of post-its on a wall":
  - The audience understood the **basic mechanics** of event storming.
  - **While this was happening**, people maybe had questions.
  - The audience **learned about event-storming a business process.**
  - The audience **learned about event-storming a legacy application.**
  - The audience **learned about event-storming a new application.**
  - Along the way the audience picks up **useful nuggets of advice.**
  - They understood some of the **behaviors** (archetypes) they could expect.
  - A lingering question on his mind: **"What am I forgetting? What haven't we done yet?"**

---

## 2. The Mechanics of Event Storming

### 2.1 What it is
- A **collaboration / discovery / mapping exercise** developed by **Alberto Brandolini** ("lovely, lovely guy"). "Mostly this is me trying to describe how *he* does stuff."
- Alberto is fundamentally **"trying to get work done"** — the technique came out of practical need.

### 2.2 The stickies (color grammar)
- **Orange sticky = a domain event** — "a statement of a thing that happened, **in the perfect tense**." "A domain event *happened*." These are the workhorses; "when he first started, these happened to be the colors he used. I really wish he'd used **yellow** — they're the cheap ones. You get through a *lot* of orange stickies."
- **Command / external stimulus** — "a command or external event that affects our world that causes a thing." Could be a **person** doing a thing, a **system** doing a thing, or a **time-based** event ("the first of the month happened"). Some input, stimulus, or change into our world.
- **Pink sticky = a question / puzzle / thing we don't know** — "things we know we don't know." Placed **diagonally (a diamond shape)** to make them more obvious.
- **View / read model** — e.g., someone getting information out of a system, taking a look at some things.
- "And that's pretty much all you need."

### 2.3 The layout
- **Start at the end:** "They all lived happily ever after" — the **goal** of the exercise, whatever it is — goes on one side.
- **"Once upon a time" on the right.**
- **Time runs all the way through** the wall between them. "Now all we need to do is fill up that space."
- **Give yourself more space than you think** — "there's always more going on in a system than we think there is." Go **before** "once upon a time" and **after** "they all lived happily ever after," because "when you start here, you'll discover you shouldn't have started here — there's a bunch of other contexts you need."
- **Use a long wall with space either side.** Can be done virtually, but "the energy is not nearly the same — it's a **brilliant in-person exercise.**"

### 2.4 Who's in the room
- **Bring together everyone who knows about the thing** (a business process, an application, a to-be-built application). "Get everyone in the room."
- Guiding language: **"we want everybody to know what everyone knows."** We arrive with fragmented parts — **the blind-men-and-the-elephant** ("someone knows the trunk, someone the flank, someone the ear"); at the end, **everyone knows what everyone knows.**
- The minimal recipe (recurs throughout the talk): **people with questions, people with answers, and someone with stationery.**

### 2.5 Running it
- Tell the 10 people: **"Go to where you know."** Go to whichever part of the process/system you're an expert in and **write the domain events** for it.
- **Build a story / a narrative.**
- People **start putting up events, puzzles, and questions.** You'll find **clusters and groupings** — events that "belong together" or "use the same language."
- A cluster gives you, in **domain-driven-design** terms, an **aggregate or subsystem** — "a cohesive subsystem" you can treat as a separate event-storming exercise or separate analysis.
- "And that's basically it. That's the mechanics."

---

## 3. Three Applications

### 3.1 Event-storming a business process
- Start at the end, "begin at the beginning," get people to write down the parts of the process they understand.
- **Expect chaos and conflict:** "a view model there, a bunch of events there, a little group here, load of confusion here — I had to **break up a fight** here." People tear off stickies, scribble over them: *"That's not how this process works." "I do it — I do it."* You discover **two people doing the same job slightly differently.** "It's brilliant."
- Once the dust settles ("a nice cup of tea, everyone's calm again"), interrogate the process: **what is necessarily part of what we do, and what is vestigial** ("we do it because we've always done it that way")? "It turns out there's often quite a lot you can just get rid of." What's left is the **core business process.**
- **Why do this *before* automating** — automation does two things (everything's a trade-off):
  1. Makes the process **much less error-prone / more deterministic.**
  2. **Bakes / calcifies it** — "that is *now* the fixed process."
- If you don't clear out the vestigial cruft first, **you automate all that other stuff in** — "and no one knows why; it's just always been that."

### 3.2 Event-storming a legacy application
- Ask people to "give me the **domain events** that happen in this system" (settlement system, booking system, patient-record system…).
- **The tell:** people are **"surprisingly quick — ba ba ba ba ba, no questions." "This is suspicious."**
- **Why:** overlay a **data-flow diagram** and "you'll never guess what — they weren't telling me how the system *works*, they were telling me exactly what the **data model** is."
- **"Clearing your throat":** people are so locked into how they *think* something works that they recite it without standing back. Let them **dump it** ("got that off your chest? now, what was the question?"), *then* get to **how the system actually works** — "through fresh eyes."
- Q&A tie-in: don't fight **mixed abstraction levels** — let people work at whatever level they want; **clusters/aggregates/subdomains will emerge**, and you can later collapse "five very detailed stickies" into one real domain event ("**the address gets validated**").

### 3.3 Event-storming a new application
- Start with "until finally" — but **someone questions the ending:** "Really? Is that what it's going to do? Maybe it ends up *this* — maybe several places it might end up." ("Good question, good observation.")
- **Far more questions than domain events.** "We all learned simultaneously, in real time, that **none of us knew** how it was going to work — and the way we didn't know was these questions."
- **Therefore the work is not "let's design a system"** — it's **"let's pay down some of this uncertainty,"** go do discovery, so you can be **more sensible and nuanced** about what the system will do.
- **This step is usually skipped** ("we think we know"), so everyone goes off in different directions and ends up with "**the usual spaghetti, the usual ball of mud.**" "Let's not do that."

---

## 4. Facilitation Advice ("useful nuggets")

### 4.1 Logistics
- **Bring more stationery than you think.** "The one thing that's going to kill the conversation is **running out of pink stickers** — we're not allowed to have any more questions or puzzles. From here on, only things you know." (Annoying, but essential.)
- **Be a time cop.** Any event-storming workshop is **deliberately time-bound** — you're creating **compression, a sense of urgency.** Sometimes you just move things along.
- **Have explicit ground rules** — partly common decency, but mainly because these discussions "go wandering way off scope, way off pitch." Park interesting-but-off-topic debates as a **pink sticky** ("we don't know how pricing works → take away an action to figure out why we disagree on pricing") and get back to the story. "**Let's not solve pricing in this session.**"

### 4.2 Let arguments run
- **Be prepared to break up arguments** — people get passionate, especially about a process with **emotional investment**, or when bringing **adversarial parts of an org** together (history, lack of trust) — often the **first time all the people have seen all the things.**
- But **be prepared to let arguments run.** Daniel (a self-described **peacemaker**) has to **bite his tongue.** Two things are happening: the conflict is **relationship-building** (people learning about each other) *and* it's **surfacing uncertainty** — "if you let it run a bit longer, you suddenly discover where the disconnect is."
- **Eli Goldratt's "universal harmony"** — "not some Zen thing." **There is only one truth, one reality.** When people are in conflict, it's because they have **different views on that single reality.** Dig in enough and they share an understanding ("we're both in this room, it's daytime — start there; what else do we know to be true?"). Find **where they last agreed / where the divergence happened** — now you have something to work with. Stand in both sets of shoes and learn. Often the answer **isn't "you're right or I'm right"** — it's "over here somewhere," and both parties guide each other to it by teaching and listening.
- Two dichotomies: **"arguing to be right vs. arguing to learn"** ("we're very good at the former"); **"listening waiting to speak vs. listening like you don't know the answer."**

### 4.3 Pomodoro & cognitive load
- **Use a Pomodoro timer — work in chunks, take breaks.** Origin story: an **Italian student** kept getting distracted, got a **little tomato timer** (*pomodoro* = tomato). At 5 minutes he couldn't concentrate; so he kept a **notepad** and wrote down every distraction ("blah blah Amazon…"), then reviewed: mostly nonsense his brain used to distract him, plus **one useful thing.**
- He stretched it to **25 minutes** (as long as he could reasonably do) → a **Pomodoro = 25 minutes work + 5-minute break.** Four of those = a **2-hour working chunk**, then take a **proper break (an hour).**
- **The notepad is the key, under-discussed part** — "somewhere to capture all those distractions so your brain feels it's caught, and doesn't need to think about it." "You cover so much ground when you manage your distractions like that."
- **Why it matters here:** putting stickies on a wall to frame a business process as a **series of domain events** is a **modeling exercise** — "**very cognitively intense.** You're thinking really hard."

### 4.4 The server-procurement war story (30 days → 2 hours)
- At a **trading firm**, building a new server had a **30-day lead time.** "In a lot of organizations 30 days is very fast; in a trading firm, 30 days could be the **entire window of an opportunity** — it lives, dies, and passes before you even build the server." The team was under huge pressure, **working long hours, burning out.**
- The process, mapped end-to-end as orange stickies: **spec the server → get vendor prices → (above a threshold) the CIO signs off → order it → parts arrive → build it → rack it in a data center → cable it in → install an OS → connect to the network → ready.**
- They brought **all those people together** — networking, OS, data-center, procurement, ~8–10 people.
- **Head of infrastructure ("Ryan"):** "I've **never seen that process laid out end-to-end before**. I can already see a way we could take **a third** of that lead time off." Then someone else spotted ways to **run things in parallel** → another third. **Now 30 days → 12 days** — "and we haven't done anything, just a different sequence."
- **The data-center guy** ("2m, built like an ox, carries servers like this"): "We only really have **three kinds of servers**":
  1. **The money-makers** — super-high-spec, low-latency, expensive network cards, co-located in trading exchanges.
  2. **Developer machines** — beefy dev servers.
  3. **The "donkeys"** — business machines running internal BI.
- His idea: **pre-stock a couple of each in every data center** (a few thousand dollars of sunk cost) → **provision one in a couple of hours.** "Ask me in the morning, have your servers by lunchtime." Used to take 30 days.
- For **more than a couple** of servers it still takes ~12 days to restock — but "you usually know that more than a couple of weeks in advance."
- **The outcome — "win-win-win-win-win":** a 30-day process became a **2-hour process**; the team **worked less hard, went home on time, saw their families, slept, made fewer mistakes** — and became **legends.** "But **only because they saw the whole thing laid out.** **Visualizing how the work works is absolutely your first step.**"

### 4.5 The value is in the experience
- **The act of doing this is more valuable than the output** (same point he makes in his demand-led-planning session). The **output will change** — often the output is "**we don't know a bunch of stuff, so let's do this again in two weeks**," go learn things and bring them back.
- The real value: **getting people together who are part of the same value chain but don't spend day-to-day time together.**
- Story: a **well-known financial-data company**, a **CEO of a division + leadership team + a dozen directors**. They kept going off on side conversations; one said "**we're not normally like this — this is probably the second time in a year we've all been in the same physical location; we're just really excited.**" Daniel: "What are you going to do about that? → Of course, **get everyone together more often.**"
- **On remote vs. in-person:** he's "a massive fan of hybrid/remote work" — the biggest thing is **inclusivity** (lets people otherwise excluded from the work pool participate; he has two young kids he gets to hang out with). **But** certain activities really want **"warm bodies in a room"** — "the energy and dynamic you **cannot reproduce over Zoom.**" There's a place for both.

---

## 5. Archetypes (the cast of characters)

- **The disruptor** — "just doesn't want to be here," thinks it's rubbish, has better things to do. *"You're using Post-its? What century is this? Can't we use AI?"*
- **The know-it-all** — a type of disruptor who "did this at their last place," has opinions. "Please just go with this, please be a participant."
- **The wallflower** — often **some of the wisest people, with the deepest domain knowledge** (anecdotal). Either deeply introvert/shy, or **used to getting talked across** — "often female in a male-dominated room; halfway through a sentence, a man comes to **mansplain some stuff to another man**, and they've checked out." **Bring them into the conversation** and "wisdom happens, learning happens." ("A non-zero number of women are smiling at me right now, gentlemen. **Be kind.**")
- **The helper** — "Can I help you facilitate this?" Usually **senior people trying to establish status** by co-running the meeting. "**Mate** — it's always a guy — I need you to be a **participant**, an actor putting stickies up, **not walking up and down policing** other people."
- **The actual helper** — occasionally someone "**gets this**," quietly influencing colleagues to get involved — genuinely useful.
- **The last-word** — someone who **will not let it go** and just wants the last word. **Let them.** "Life is too short. It's fine."
- **The surprise star** — "I've never met you before, but I'm going to **track your career from here on** — you just surprised me." These shared activities **create a space in which people start to become / grow** in ways they don't when "stuck in a team" or "not being listened to."

---

## 6. Closing — "Until finally you can try it yourselves"

- "I would **love to hear your adventures**, your experiences. Try this out — it's one of the **most self-working techniques** I've ever come across."
- "If you've done any facilitating, this is **one of the easier exercises to facilitate.** When you do it, the **energy is palpable** — I've never done one where people didn't come out going '**that was so cool, that was amazing**' — not because I'm an amazing facilitator; it's an **amazing exercise to be a participant in.**"
- **What participants can't *not* see:** "you cannot not see your work in the context of everyone else's work; you cannot not see the **why**; you cannot not see the **bigger picture**." You leave with a sense of how your work influences everything — or "I need to speak to this lady, we're clearly doing something massively overlapping and can help each other — and I never knew that before today."
- Callback to **Ryan**: "I've never seen this process laid out end-to-end" — "until you see all the pieces shaped as orange stickies, you go '**those three are clearly the same activity**,' or '**we could get pre-approval for this — why should we be blocked on the CIO?**' → *ching*, that took two days off." Insights came **because they saw the whole thing laid out.**
- **The meta-punchline:** "At this point I'm going to say thank you, then ask if you have any questions. **That was how I designed my talk. So now I'm going to give my talk. Oh no — I've done it.**" (He finishes with ~10 minutes to spare — "This doesn't happen in my world." MC: "Daniel, finished on time?" "You actually finished *way* ahead of time.")

---

## 7. Q&A

### 7.1 Legacy systems — avoiding getting lost in technical detail / mixed abstraction
- "By and large, **you don't** [avoid it]." A lot is **throat-clearing** — getting out what people think is going on. Then you **take stickies down, group and cluster them**: "all these very detailed descriptions are really '**the address gets validated**'" → tear up five stickies, replace with one real domain event.
- People **work at their own level of abstraction** — someone coding it for 10 years will struggle to "pan back." It's a **reinforcing loop**: a poorly-architected system lacks those abstractions; a well-architected one (clear domain language, boundaries, bounded contexts) makes this **much easier**. Usually you're doing this **precisely because the system isn't that** — "you're trying to discover exactly where those **seams** are" (**Mike Feathers'** term). "Let people be at whatever level they want — clusters, aggregates, subdomains will emerge. That's completely fine."

### 7.2 Recommended online tool for capturing events?
- "Honestly, **Miro** — any whiteboard tool." **By and large this is a visualization tool** — stickies on a wall + **photos** + a bit of cleanup. Whiteboard-photographing tools do keystoning/color-correction; **OCR** makes them searchable.
- **The main thing is searchability, not structure** — "I want to find all the sessions that had **pricing** in — search them and find the three that are useful." "By and large, **just photographs** is the level of granularity you need."

### 7.3 How has event-storming evolved as orgs get familiar with it? Does it change collaboration / culture long-term?
- **The activity itself is essentially unchanged** from when he learned it from **Alberto ~7–10 years ago** — "a **back-pocket tool**; it just works." Analogy: **Edward de Bono's Six Thinking Hats** — a 30–40-year-old book he'd "still do exactly as written." "I still do event storming exactly as written."
- **The more interesting part — its effect on the org:** the **meta-message** is "**you're encouraging people across the org / diverse parts to come together to collaborate at all.**" Once they see the power of that, it "**becomes a bit of a golden hammer — 'let's event-storm that'** — and I'm **fine with that; it's a really good golden hammer.**"
- **It grows its own legs / it's a gift:** he uses it, leaves, comes back 6 months later — "the team has formed into four other teams, and **all of them use event storming**" to understand a legacy process they're about to simplify. "You just need **loads of stationery.**"

### 7.4 How to handle destructive / disregarding / downplaying / overriding actors?
- Short answer: **same as any exercise** — a **core facilitation skill.** Two deeper things:
- **Virginia Satir** — the **first family therapist.** Before her, child psychologists "fixed the broken child and sent it home"; she said "**I need to meet the parents** — the child's behavior is a **presenting symptom of the family**; otherwise we'll be back in 6 months." One of the **first systems thinkers** (holistic — the child's behavior is a consequence of the family).
- **Her principle of positive intent** — commonly misunderstood as "everyone's nice" (they're not — "some people are a-holes"). It actually means: **everyone is trying to help** — whatever they're doing, **they think that thing is helping.** So the empathy challenge to the facilitator/listener is: **"what must be true for me such that *that* would be the thing I do?"** — because that must be true for them.
- Applied to a **saboteur**: "what's true for them such that this act of sabotage is the **most helpful** thing they can do?" You realize they think **your change is *harming* the org** ("you're going to come in and *agile* us / *lean* us / reorg us"), and "it's above my pay grade to chuck you out, so I'll **throw some grit in the machine**." **They're trying to save the company.** Understanding the positive intent gives you a **hook to connect.**
- Caveat: **sometimes the insight is "this person is a sociopath" — they exist, look like everyone else, "often in leadership roles."** But that's very much the **exception** — "it's easy to **pop-psychology** things." By and large, weird behavior means their **world model differs from yours**; to understand their actions you must understand where they're coming from.
- "You kind of have to be the **therapist of the group** — at least understand its psychology. I'm an **amateur** at this — **go talk to Cat Hicks**, that's what she does."

### 7.5 Time-boxing and optimal group size?
- **Group size = "as big as it needs to be" / "how long's a piece of string."** The heuristic again: **people with questions, people with answers, someone with stationery.** Anyone with information/answers should be in the room; anyone with questions (the people who'll turn the output into the new system/process) needs to be in the room — "with a **massive box of Post-its.**"
- Examples: **server procurement ~8–10 people, ~1–2 hours (maybe an hour)**; a **legacy business process with 40 people** on a long roll of **butcher's / brown paper**, in clumps, moving up and down, "**that's wrong**," an **entire day**, "the energy was brilliant."

### 7.6 From events to aggregates & process managers — same session?
- **Maybe** — depends on complexity. **Clustering is very likely to happen in the session** (identifying events and their relationships is the point). A **density observation:** bigger clusters tend to attract **more pink stickies** (puzzles/questions) — "seems to correlate."
- Sometimes the future **process managers are already in the room** ("I'm going to own this — I already do half of it, I may as well pick up that half"); sometimes you **reconvene with different people.**

### 7.7 Integrating with UX discovery (which overlaps but at a higher level)?
- "**I would do a UX-discovery event-storming session** — it just works."
- **Bill Buxton's definition of UX** (Microsoft's global UX guru — "blew my mind"): he asked an audience "**What is user experience?**" Answers: "behavior," "the experience a user has." **UX = the thing the user *feels* when interacting** — could be **confusion, resigned indifference, joy, delight.** Shape/color/design all **lead to** an experience.
- "When we build computer systems, we build a **future experience for a human being.** For internal business systems, we're either the person **resented for the rest of their working life** (8 hours/day inside a system that makes no sense) **or the person they track down in the corridor to say thank you for making my life easier.**"
- So UX questions — "where will things be inconsistent / uncertain / not obvious? where do we need **affordances and signifiers** (*The Design of Everyday Things*)? how do we make the thing **invisible so you're doing the thing rather than using a system that does the thing?**" — can all be brought into an event-storming session (expect **tons of pink stickies** and research work).

### 7.8 How to introduce event storming to an org / get people to try it?
- **"The question answers itself" — "Let's experiment."**
- **"Trust me once"** (a model from his consulting): "We'll try this thing — trust me once. If it doesn't work, we'll never do it again, and all it cost you was **a morning**. If it works, you learned something really cool, and it only cost you a morning." Get **half a dozen people** together — "a very inexpensive experiment."
- Same move he uses for **pair programming**: "'I'm never going to pair program.' 'Why don't you just try sitting together solving a problem for an hour?' → after an hour: 'okay, you can go back' — 'no no, we're having loads of fun.'" **Lower the safety barrier — dip your toe without feeling you're committing.**
- If the blocker is a **closed-minded boss: "JFDI — just flipping do it."** Most orgs have a box of Post-its (just not orange — "Thanks, Alberto"). **Grace Hopper**: "**Ask for forgiveness rather than permission**" — do it, and when they come for you: "**I unlocked a ton of value and it only took two hours. Yes, I did that.** — 'Oh, now you say it like that…'"

### 7.9 Secret trick to convince people to spend time modeling?
- "I sort of answered it — **trust me once.** I'll bring **candy, coffee, snacks**, make it fun, buy drinks afterwards. **'Come along, trust me once. I really need you here'** — people with questions and people with answers — '**you know so much about this process; the whole exercise will be a lot richer with you in the room.**'"

---

## People & References Cited

- **Daniel Terhorst-North** — speaker; helps business/technology leaders optimize technology organizations; "most known international tiger wrangler."
- **Alberto Brandolini** — creator of event storming ("lovely, lovely guy").
- **Feyo Gergely** — co-founder of Craft (and Medea); invited Daniel to speak.
- **Eli Goldratt** — "universal harmony" (one reality; find where views last agreed).
- **Virginia Satir** — first family therapist / early systems thinker; **principle of positive intent** ("everyone is trying to help").
- **Cat Hicks** — recommended for the psychology of groups.
- **Edward de Bono** — Six Thinking Hats (a "just-works" back-pocket tool, done as written).
- **Mike (Michael) Feathers** — "seams" in legacy systems.
- **Bill Buxton** — Microsoft UX guru; UX = the experience/emotion a user feels.
- **Don Norman** — *The Design of Everyday Things* (affordances and signifiers, referenced).
- **Grace Hopper** — "ask for forgiveness rather than permission."
- Concepts: Disney story arc (once-upon-a-time → until finally), domain events / commands / read models, "everyone knows what everyone knows," clusters → aggregates/subsystems (DDD), core vs. vestigial process, "clearing your throat," pay-down-uncertainty, Pomodoro + distraction notepad, "visualizing how the work works," archetypes (disruptor/know-it-all/wallflower/helper/last-word/surprise-star), positive intent, "trust me once," JFDI.

---

*Video: https://www.youtube.com/watch?v=W0Eatrk8cgo — Transcript via yt-transcript.sh; outline generated from the transcript.*
