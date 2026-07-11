---
title: "High-performing communication techniques for high-performing teams — Joseph Pelrine | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Why psychological safety is a result, not a prerequisite — and the crew-resource-management communication protocols that actually produce high-performing teams."
type: "reference"
tags: ["softwaredevelopment"]
---

# High-performing communication techniques for high-performing teams — Joseph Pelrine (Talk Outline)

> Presented at Craft 2026. Pelrine's thesis: the industry has turned "psychological safety" into a racket. The real bottleneck isn't that people are afraid to speak up — it's that people don't know how to *listen*. Fix the triggers, adopt aviation/medicine-grade communication protocols, and safety emerges as an *outcome*.

---

## 1. Framing — "Conference-Driven Management"

- Opens with a consulting story: a VC asked him to look at a struggling portfolio company.
- Diagnosis: **Conference-Driven Management (CDM)** — managers hop from conference to conference, adopt each "next big thing," and constantly switch direction.
- Their latest fad was **psychological safety** (because "Google did it, so it must be great").
- They talked it to death, brought in a trainer, and drove employees into **malicious compliance** — doing exactly what they're told, nothing more, with just enough visible resentment to make the point.
- Eric Hoffer: *"Every great cause begins as a movement, becomes a business, and eventually degenerates into a racket."* — happened to Agile; psychological safety is a textbook case.

**Core reframe:**
> The problem isn't that people are afraid to speak up. The problem is that people don't know how to listen.

- Audience exercise: *"Are you someone people feel comfortable talking to?"* — and, more pointedly, *did you answer that honestly, or did you start rationalizing?*

---

## 2. Triggers — Why Honest Listening Is Hard

- A **trigger** is a stimulus (a smell, a sound, a phrase) that produces a sudden, involuntary reaction rooted in the past — even when the present situation is harmless.
- Mechanism (the **amygdala hijack**, per Daniel Goleman): the amygdala sits like a "web server daemon" waiting for input, hijacks it, and fires a signal to the hypothalamus, which sets off the physical stress response. The rational brain goes offline while the threat response takes over.

### The three professional trigger types

| Trigger | Internal reaction | Software example |
|---|---|---|
| **Truth** | "That's just *wrong*." | Code called "a bit messy" in review → instant defensiveness, before even checking if it's accurate. |
| **Relationship** | "Who the hell are *you* to say that to me?" | A new hire suggests a better stand-up format → veterans hear an accusation, not a suggestion. |
| **Identity / Ego** | "This is a threat to *who I am*." | A senior engineer asked to pair with a junior on a simple task → feels like a verdict on their competence. |

- Nearly everyone has been on both ends — the one triggered, or the one who pulled the trigger unknowingly.
- Over time these harden into **response patterns**: killing the question ("stupid question / fake news"), attacking the relationship ("nobody watches you"), or inflating the ego ("no one has ever done what I've done"). Pelrine uses political rhetoric (Trump) as an extended illustration of these hardened patterns.

---

## 3. Working on the Triggers

The right place to start is not "make people feel safe" — it's **the triggers themselves**.

### 3.1 Recognize your own triggers

- The reflex fires *before* you're conscious of it. Rough neuroscience timeline:
  - **~40 ms** — first amygdala reaction (Ekman's facial micro-expressions).
  - **~125 ms** — amygdala processes and begins routing to the hypothalamus.
  - **~300 ms** — the P300 EEG event; conscious recognition starts.
  - **~400 ms** — one of the four F's kicks in (fight, flight, feed, mate).
- Stone & Heen: *ignoring the reaction without identifying its cause is like dealing with a fire by disconnecting the smoke alarm.* **A trigger is information — use it.**

### 3.2 Treat anger as data

- In emotional intelligence, anger isn't a problem to manage — it's **data**. It's a *secondary* emotion sitting on top of something deeper (hurt, fear, disrespect).
- Exercise: keep an **anger diary**. Each time you get angry, stop and write down the stimulus. Patterns reveal your triggers.

### 3.3 Two questions (from psychotherapist Ben Folks)

1. **Where are you open to criticism?** — reveals a negative trigger.
2. **Where are you available to be seduced?** — hijacks happen from *positive* stimulus too. Flattery ("you're the only one who understands the legacy code, can you come in this weekend?") is a trigger. Know where yours are.

### 3.4 Sub-60-second de-escalation techniques

- **Physiological sigh** (the most effective): deep breath in, a second sip of air on top, then a fast exhale. Great for calming down — and for falling asleep.
- **Box breathing**: in 4, hold 4, out 4, hold 4.
- Variants: **5-7** (in 4, hold 1, out 6, hold 1) and **4-7-8** (in 4, hold 7, out 8).

---

## 4. What Psychological Safety Actually Is

- Amy Edmondson's 1999 study coined "team psychological safety" by observing surgical/hospital teams.
- **The misread:** Edmondson is a brilliant *business professor* — not a surgeon, not a psychologist. She observed something outside her domain through business-professor filters and labeled what she saw "psychological safety," concluding it was the *prerequisite* for high performance.
- **The reality:** the best teams were *doing something else*, and safety was the **result**, not the precondition.
- That "something else" is **Crew Resource Management (CRM)**.

### Crew Resource Management (CRM)

- Developed by NASA after the **1977 Tenerife runway disaster** (two planes collided, ~500 dead). Adopted rapidly in aviation, then medicine.
- Reduces error by reshaping culture: communication norms, authority gradients, coordination under pressure.
- Trains people how to **brief explicitly, challenge respectfully, share situational awareness, cross-check decisions, and speak up.**
- It doesn't *hope* people speak up — it builds a structure where speaking up is **expected and legitimate**. Safety is the outcome.
- Pelrine learned CRM firsthand as a trained first responder at his small Swiss Alpine hospital (avalanches, injured skiers; everyone on call within 10 minutes).
- Anecdote — Dr. Germann Colou (thousands of ambulance/helicopter rescues): *"I demand to hear everybody's voice, because I don't know where my own blind spot is."* When he goes out on a call, the **first** person he asks is the **ambulance driver** — can we even get back? Is the road blocked? Is the hospital admitting? Ego-free leadership actively soliciting what it can't see.

---

## 5. The Communication Protocols

CRM rests on two techniques: **burst communication** (structured protocols) and **closed-loop communication** (read-back confirmation).

### 5.1 Burst-communication protocols

- **CUS** (graded escalation, e.g. a scrub nurse to a head surgeon):
  1. "I am **C**oncerned about this."
  2. "I am **U**ncomfortable with this because…"
  3. "This is a **S**afety issue." → everything stops.
- **I'M SAFE** (pre-shift self-check): Illness, Medication, Stress, Alcohol, Fatigue, Emotion — *can you count on me?* (Pelrine uses it with software teams that party too hard.)
- **ISBAR** (handover, the "TV hospital drama" format): **I**dentity, **S**ituation, **B**ackground, **A**ssessment, **R**ecommendation.
- **FOR-DEC / "10 for 10"** (Lufthansa critical-decision protocol; counters Kahneman's fast, intuitive, *wrong* System 1): *"Every second counts" is nonsense in medicine — think that way and people die.* Instead, **stop, take 10 seconds**, and work as a team through **F**acts, **O**ptions, **R**isks/benefits → **DE**cide & split the work → **C**heck/review. Re-enter the loop whenever something changes or the time-box ends.
  - > "This is the adult's way of doing a daily scrum."

### 5.2 Closed-loop communication

Confirm that both parties heard and understood the same thing:

- **Cockpit:** "You have the flight controls." / "I have the flight controls." / "Yes, you have the flight controls."
- **Kitchen:** "Two entrecôtes, medium rare." / "Two entrecôtes, medium rare, chef."

---

## 6. High-Performing Handovers — The Ferrari Story

- **Great Ormond Street Hospital** (London) had problems in **neonatal cardiac surgery handovers** — moving newborns from OR to ICU. Patient handovers are the single biggest risk point in medicine.
- They studied **Ferrari's Formula 1 pit stop** (22 people, a few seconds, fully optimized): a surgical team trained at Maranello; a Ferrari team observed and re-engineered the hospital handover.
- This matured into **SBAR-based shift handovers** in the UK: sickest patient first → **SBAR** per patient → prioritize with **FOR-DEC** → confirm with **closed-loop** communication.

---

## 7. Checklists Are Training Wheels

- Beware **respondent fatigue** — quality degrades when there are too many questions or the same ones every time.
- Dr. Colou, 30+ years in: *"I don't need these checklists anymore. They're your training wheels — eventually you get rid of them and find what works for you."*
- > The goal is not the checklist. The goal is **what the checklist builds.**

**Closing challenge:**
> How are you going to change your daily stand-ups and finally get away from the YTP ritual — *what did I do yesterday, what will I do today, any blockers* — so you can shut up and get back to work?

---

## 8. Q&A Highlights

- **Would communicating "like autistic people" (literal, no hidden meaning) help teams?** — An interesting alternative worth thinking about; he leans on burst-communication protocols instead. Recommends **Atul Gawande, *The Checklist Manifesto***.
- **We talk to our AI agents more than to teammates — can we close that gap?** — Can't answer directly (doesn't yet work with AI-agent teams), but notes the psycholinguistic tells: do people say *please* to their agents? Do they assume "Claude" is a *he*?
- **How do I open a dialogue with a coworker for whom my mere presence is a trigger?** — First be honest about whether *you're* the problem. Don't lead with a manager's positional power (reward/coercive/legitimate — per French & Raven); mandates provoke equal-and-opposite reactions. Use an **intermediary with personal power** (expertise or referent/charisma) both sides respect. One client trained all scrum masters as **certified mediators**; he also recommends **mental health first aid** training.
- **How do you use these techniques without people noticing (since knowing "ruins the magic")?** — Some stealth is possible, but there's **no recipe** — it's team-specific. Analogy: there's a big difference between being able to *cook* and being able to *follow a recipe*.

---

## Key Takeaways for Software Teams

1. **Listening, not fear, is the bottleneck.** "Psychological safety" as usually sold treats the symptom, not the cause.
2. **Know your triggers — positive and negative.** Flattery hijacks you as surely as criticism does. Keep an anger diary; learn a 60-second reset (physiological sigh).
3. **Safety is an outcome of structure.** Import CRM: explicit briefings, respectful challenge, cross-checks, and a legitimate path to speak up.
4. **Adopt read-back and graded escalation.** Closed-loop confirmation (cockpit/kitchen style) and CUS remove ambiguity and make dissent safe.
5. **Upgrade the stand-up.** Replace the yesterday/today/blockers ritual with a FOR-DEC / "10 for 10" style team decision loop.
6. **Checklists are scaffolding, not the goal.** Use them to build the skill, then graduate to judgment — while avoiding respondent fatigue.

---

*Video: https://www.youtube.com/watch?v=3zrrE374l1M — Transcript via yt-transcript.sh; outline generated from the transcript.*
