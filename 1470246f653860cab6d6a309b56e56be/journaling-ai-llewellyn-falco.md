---
title: "Journaling with AI — Llewellyn Falco | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Personal AI Wizardry or If you're only doing code with agentic AI, you are doing it wrong"
type: "reference"
tags: ["softwaredevelopment", "ai"]
---


# Journaling with AI — Llewellyn Falco (Craft Conference)

> Alternate titles the speaker considered: *"Personal AI Wizardry"* and *"If you're only doing code with agentic AI, you are doing it wrong"* — the latter being the real thesis of the talk.

---

## 1. Introduction & Framing

### 1.1 Context
- Speaker has attended Craft since ~2015, always giving talks about **code** — this year is deliberately different.
- Resources shared via QR code at the end (slides, materials).

### 1.2 The Fred & George Metaphor (Harry Potter)
- Everyone at Hogwarts has a wand and casts spells; Fred and George are different — **they create things**.
- Their creations are usually framed as "prank items," but the speaker reframes: their core value is that *the world should be fun*, and they use magic to **make artifacts that embody that value**.
- Key property: once created, the artifact's effect extends **beyond the creator and the moment** — it persists and works for others.

### 1.3 "Wizard in the Computer"
- On a computer, the speaker also feels like a wizard — but historically only **inside code**, mostly for large corporations.
- Over the last year, that "magic zone" has expanded: he can now be magical **anywhere in the computer**, not just in code.
- Robots aren't here yet ("maybe next year's talk"), so the magic is still bounded by the computer — but the boundary inside it has dissolved.

### 1.4 What is a programmer's skill when not coding?
- Core claim: **programmers are fundamentally good at managing complexity.**
- The two primary mechanisms:
  1. **Recognizing abstractions**
  2. **Creating reusable pieces**
- These skills transfer to non-coding AI work — this is the connective tissue of the entire talk.

---

## 2. Story 1 — Documentation via AI (Closest to Code)

### 2.1 Setup
- Weekly Thursday pair programming with Scott on **Java ApprovalTests**.
- Speaker pairs remotely a lot (lives "in the middle of nowhere").
- Stefan (from Germany, via Discord) had been asking "what is the perfect way of programming?" — invited to join and observe instead of theorize.

### 2.2 The Weird Issue (#750)
- User reports: *"I did this thing and it worked"* — the inverse of a normal issue (usually "I tried X and it broke").
- User had used the **Surefire plugin** with an environment variable and asked "did I do it right?"
- Speaker knew it was right because of **issue #608** — the historical issue where Surefire actually *didn't* work and was fixed.

### 2.3 Reframing Bug Reports
- Quote from OSCON: **"Reporting a bug is the lowest form of contribution."**
  - Speaker loves both the snark *and* the positive reading: at least they are contributing.
- Instead of just closing with "yes, you did it right," ask: **what are they actually trying to contribute? What should I learn?**
- The real signal: **"I didn't see this documented."**

### 2.4 Documentation Theory
- Speaker follows **Daniele Procida's documentation framework** (the four quadrants: tutorials, how-to guides, reference, explanation).
- The missing piece is clearly a **how-to guide** ("How to use Surefire").
- Existing how-to guides share a consistent format: *problem → solution*, Stack-Overflow-like.

### 2.5 The AI Move
- Prompt to Claude Code: *"Please read issue #750 and #608 using the GitHub CLI. This is the right solution but we need a how-to doc. Here's an example."*
- Result: it produced the doc — and "Stefan's brain exploded."

### 2.6 Takeaways
- Same process a year ago: **~1 hour manually vs. ~15 seconds** with AI. ("It takes me longer to explain what I did than to actually have done it.")
- Output quality was good — it noticed patterns the speaker wouldn't have thought to include.
- Enabled a better response: not just "you're doing it right" but **"thank you — you improved my project."**
- **Recurring theme flagged:** look at how many components come together (GitHub CLI, issues, example docs, doc theory, Claude) — *composition of pieces* will recur throughout the talk.

---

## 3. Story 2 — Helping His Father Exercise (Farther from Code)

### 3.1 Background
- Father is 80/81; had polio as a child → weakened heart valve → heart valve replacement ~2 years ago.
- Post-surgery, speaker used his **coaching skills** to get his dad through physical therapy — dad hadn't exercised in 80 years and didn't want to start after heart surgery.
- Reached a point where he could hand off to his mom and go home.

### 3.2 The Problem Resurfaces
- At Christmas, dad's talk was concerning — new valve should mean ~20 more years, but he **wasn't talking like a man with 20 years ahead**.
- Diagnosis: he'd stopped physical therapy (doing it would show as health + optimism).
- Asking his mom to enforce it is unfair — 60+ years of entrenched relationship patterns.
- Goal: get dad working out effectively during a two-week visit, ideally with habits that survive after leaving. Needs to be **effective and easy**.

### 3.3 The Solution (End State First)
- Recumbent bikes at the gym + phones playing a **real-time workout video**:
  - Green progress bar for each 1-minute segment
  - Displays current instruction/phase
  - Transitions through workout phases automatically
- Effect: made the *effective* workout *easy* to follow.

### 3.4 The Pipeline That Built It
**Step 1 — Understand the workout (AI conversation)**
- Constraints fed to AI: dad's feet are bad → minimize walking; goals = longevity, endurance, strength.
- Several iterations → a concrete workout plan (in Markdown).
- Note: speaker himself doesn't exercise either, so this knowledge had to be acquired.

**Step 2 — Turn plan into video (the key insight)**
- AI video generation is great at photorealism/characters but **bad at exactly what's needed here: text, timing, precise seconds** — and can't make a 20-minute video anyway.
- So: **don't ask AI to make the video; ask AI to write a Python script that generates the video.**
- Final step (running Python) isn't AI at all — "that's just Python."
- Pipeline: *impromptu prompt → workout plan (Markdown) → AI writes Python → Python renders video.*

### 3.5 Iterating on the Result
- First video was wrong — "you need to see what you don't like to know what you do."
- Problem 1: **20–45 min render time**, 3 GB output.
  - Asked Claude for optimizations: reduce resolution (740p is fine, not 4K), reduce frame rate.
  - Key realization: the video only changes once per second → **frame rate = 1 fps** → render in **45 seconds, 3 MB file.**
  - Lesson invoked: **fast feedback cycles are essential** (a programmer's instinct applied outside code).
- Then iterated on features:
  - Progress indicator within the current minute
  - Position within the overall workout
  - Position within the steps
  - **Red↔green color switching** for intervals (30s hard / 60s easy) — because dad complains constantly ("a fetish of complaining") and won't notice a mere text change; the signal must be unmissable.
  - Aside: the speaker's ability to absorb complaining without effect ("you're trying to kill me" → "yep, keep pedaling") is why *he* can coach dad when the rest of the family can't.

### 3.6 Maintaining the Artifact (Programmer Patterns)
- The original Markdown produced the *first* (wrong) video — the description and the artifact had **drifted**.
- Applied a known code pattern: **knowledge documents / extract knowledge** — had AI write up a description of what the current video *is* (pieces, layout, behavior).
- Now the description is the **maintainable source of truth**: modify it → regenerate.
- Rationale: "I'm a programmer and I know maintainability matters — dad *will* have complaints and I *will* have to change it. No illusions."

### 3.7 Payoff
- "Now my skills as a programmer are allowing me to help my dad. That's what I mean by being a wizard outside the computer."

---

## 4. Story 3 — Journaling with AI (The Main Event)

### 4.1 Origin: The Retreat
- November: week-long, very personal, "very woo-woo" retreat.
- Speaker journals during intense experiences for two reasons:
  1. **Capture** — just to remember (even one day of a conference is hard to recall)
  2. **Process** — journaling helps him work through what's happening
- Always journals on a computer ("because paper").
- The difference this time: **when he was done journaling, he wasn't done.**

### 4.2 The Virginia Satir Interviewer
- Created a **process file** and had AI analyze and interview him **as Virginia Satir**.
  - Satir: foundational figure of modern psychotherapy (1970s); one of the three sources behind NLP.
- The interviews were **not gentle validation** — they called him on his own patterns, e.g., noticing he was doing the very thing he'd said he wanted to stop.
- Harder, but far more effective.
- For the live demo, the prompt was **softened** — the original made half the preview audience say "I never want to experience that."
- Deliberate framing choice: not outward-facing output (e.g., LinkedIn posts) but **inward-facing** — "how does this help me, just me, alone, personally."

### 4.3 The Journaling Pipeline (Live Demo)

**Overview of stages:** create journal → vomit → cleanup → enrich (interview) → analysis/extract.

#### Stage 0 — Create the journal (zero-friction capture)
- Speaker has **ADHD**: every decision or act of discipline is a likely failure point → **remove every obstacle**.
- Practice: open **Obsidian**, click today's date. Everything goes there. **No decisions.**

#### Stage 1 — The "Vomit" Pattern
- Open the file and let everything flow, unedited, unstructured.
- Live example content (about the conference day): Kent Beck's keynote (desert/forest variation → realization he should show it to a client living "in the desert"; insight that his AI effectiveness comes from *investing in the future as well as the features*, rooted in his craftsmanship upbringing), Ilias's talk (pride, texting Claire McRae about her impact), meeting Mace from Tesco (instant friendship), Gojko's talk (his favorite — see below).
- Result: "meandery, bladdery garbage" — but **committed to git** anyway to enable diffing between stages.
- Why vomit works — it solves **getting started** (writer's block). Related sayings, all attacking the same problem:
  - "Done is better than perfect"
  - "Perfect is the enemy of the good"
  - "The simplest thing that could possibly work"
  - "YAGNI"
  - His book-writing rule with Trisha Broderick (pair-writing every word): **"Write it wrong, then fix it."**

#### Stage 2 — Cleanup
- New Claude session: *"Please read journal cleanup process and follow the instructions."*
  - (Acknowledges this should be a **slash command or skill** — kept explicit for the talk.)
- Inputs: the process file, the journal, and a **context file** — here, a Markdown of the day's Craft sessions (so names like "Gojko" get spelled correctly).
- The cleanup prompt is edit-only, e.g., "we ate four cookies, no wait five" → "we ate five cookies."
- Output: paragraphs, formatting, corrected names. Still not *good*, but **less bad** — and a **discrete step**, so it's committed again.
- Result labeled "generously, a first draft."

#### Stage 3 — Enrichment via the Interview Pattern
- Clear context; *"Please read journal refinement and follow the instructions."*
- Inversion of flow: vomit = **letting it flow out**; interview = **having it pulled out of you.** ("Two sides of the same coin" — his answers to interview questions are themselves vomit-pattern.)
- Uses voice: **`say`** (built into macOS CLI) for text→speech, **SuperWhisper** for speech→text. (Windows: Win+H for dictation; a small PowerShell script for TTS.)
- Persona: at the retreat, Virginia Satir; day-to-day, a blend of **Arlo Belshee and Trisha Broderick** — "somewhere near Feisty Genius" in vector space.
- Live interview questions & answers:
  1. *What future-investment thing has Kent's talk spotlighted as neglected?* → Wants AI to watch for **module extraction opportunities** (he builds and builds without splitting) and to flag **security neglect**.
  2. *What was Gojko's actual solution to the dangerously-skip-permissions problem?* → Two modes of working with Claude: full YOLO (`--dangerously-skip-permissions`) vs. a **custom validator** — code that decides per-action whether something is acceptable and responds with granularity (e.g., read-only AWS commands allowed; mutating AWS commands blocked). Gojko uses AI to *write* the validator. This finally gives the speaker a way to tell clients **"here's how to use AI responsibly but still permissively"** — resolving a long-standing dilemma (crippled AI vs. irresponsible advice).
  3. *What did you and Mace actually talk about?* → Teams that genuinely support each other; shared the "Golden Balls" video; Mace's tic-tac-toe story: win=3 pts, tie=1, loss=0 — Mace silently let his teammate win repeatedly, teammate swept the room, then split the prize with him. "That is exactly how a team should work: we are not against each other; we are on each other's side."
  4. *How did your own 3:45 talk go?* → "I'm in the middle of it. I'll tell you later."
- Output handling: **do not modify the journal in place.** Prefer **lots of little steps that build new pieces** → writes an `enriched` file *alongside* the journal.
- Data framing: this is classic **data enrichment** — but the enrichment source is *him*, information that "isn't on the internet yet" and can't be obtained anywhere else.

#### Stage 4 — Analysis / Extraction
- Clear context; *"Please read analysis and follow the instructions."*
- New goal: help him **see patterns in himself**, get feedback, become better.
- Live analysis exchange (notably incisive):
  - AI: "You ended with one line about your own talk — that's a significant silence for someone who just spoke. What happened up there?"
  - Him: not silence — the talk is literally still in progress; can't evaluate yet.
  - AI: "The feedback loop isn't closed. What does sitting with that feel like?" → "Very uncomfortable."
  - AI: "Is the discomfort about the talk's quality or about how *you* were received?" → Probably about being received; also raw exposure of the stage.
  - AI: "You spent the day celebrating others — Claire, Gojko, Mace — then stepped on stage yourself. Why did this feel more exposed?" → Helping others feels internally safe and right; it's harder when the lens turns on *him*.
  - AI: "Is that why you naturally position yourself as the helper?" → (Time runs out — question left hanging, pointedly.)
- Writes an `analysis` file; he'd normally have `say` read it aloud (again minimizing executive-function load) and read it **later, alone**.

### 4.4 Pipeline Recap
1. **Create** journal (Obsidian, today's date, zero decisions)
2. **Vomit** (raw capture)
3. **Cleanup** (edit-only pass with context file)
4. **Interview/Enrich** (pull out what only you know)
5. **Extract** (analysis or any other product)
- Stages 1–4 are *creating data*; stage 5 is where the data becomes **something useful for you**.

---

## 5. The Bigger Picture — Evolution of AI Practice

### 5.1 Three Years at Craft
- **2 years ago:** Prompt engineering ("You are an expert Python programmer…")
- **1 year ago:** Agentic AI (AI *does* things, not just copy-paste)
- **This year:** **Building systems** — many small, explicit, composable pieces that come together to produce the visible result.
- Knowledge that used to be **ethereal** (in heads, in "company knowledge") is being materialized into concrete, reusable components. *(Echoes the Section 1 thesis: recognize abstractions, create reusable pieces.)*

### 5.2 Data Principles
- **The journal entry is the core data.** "Capture everything, because you can't get it later."
- Alternative capture channel: a **private Slack channel** he messages throughout the day, read later from the CLI.
- Mapping to **Building a Second Brain** (CODE: Capture → Organize → Distill → Express): AI now handles Organize and Distill — **humans only need to Capture and Extract.**

### 5.3 The Extraction Step is Pluggable
Analysis (self-improvement) is just one terminal step. The same enriched data supports:
- Daily status for the team
- Achievements list → promotion case
- To-dos / productivity planning
- Weak points; **blind spots** ("things I'm not even weak at — I don't even know")
- Blog posts
- Risk analysis, time allocation, habits, OKRs
- Opportunity and trend spotting
- Year-end **performance review**, assembled from a year of entries

### 5.4 Closing Thesis
> "We are now at a place where you can ask one question — **'How would you like to be better?'** — then give it your data, and be better in that way."

---

## 6. Key Patterns & Techniques Index (Cross-Reference)

| Pattern | What it is | Where used |
|---|---|---|
| **Pipelines over one-shot prompts** | Decompose into discrete AI/non-AI steps, each committable | All three stories |
| **Vomit pattern** | Zero-friction raw capture; defeats getting-started resistance | Journaling; interview answers |
| **Interview pattern** | AI pulls information out of you that exists nowhere else | Enrichment stage |
| **Cleanup as edit-only pass** | Separate mechanical correction from creation | Journal stage 2 |
| **Context files** | Ground the AI with day/session-specific facts | Cleanup & interview |
| **Knowledge documents / extract knowledge** | AI writes a description of the artifact → description becomes the maintainable source | Workout video regeneration |
| **AI writes the generator, not the artifact** | When AI is bad at the artifact (timing, text, length), have it write code that produces it | Python → workout video |
| **Fast feedback cycles** | 45-min/3GB render → 45-sec/3MB via 1 fps | Video iteration |
| **Small discrete steps, new files, commit each** | Never mutate in place; build alongside | Enriched/analysis files |
| **Minimize executive function** | No decisions; voice I/O; one-click capture | ADHD-aware workflow design |
| **Custom validators (Gojko)** | AI-written per-action permission code — responsible *and* permissive alternative to `--dangerously-skip-permissions` | Interview answer #2 |
| **Persona-driven analysis** | Virginia Satir / Belshee–Broderick blend as interviewer voice | Retreat & daily journaling |

## 7. Tools Mentioned
- **Claude Code** (with GitHub CLI integration)
- **Obsidian** (daily notes), **git** (committing each pipeline stage)
- **Python** (video generation script)
- macOS **`say`** (TTS), **SuperWhisper** (STT); Windows equivalents: **Win+H**, PowerShell TTS script
- **Slack** private channel as capture inbox, read via CLI
- Documentation framework: **Daniele Procida's four quadrants** (Diátaxis)
- Referenced people: Kent Beck, Gojko Adzic, Ilias, Claire McRae, Scott (ApprovalTests Java), Stefan, Trisha Broderick, Arlo Belshee, Virginia Satir