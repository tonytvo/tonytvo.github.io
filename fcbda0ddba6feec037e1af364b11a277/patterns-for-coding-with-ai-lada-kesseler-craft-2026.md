---
title: "Patterns for Coding with AI – Lada Kesseler | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Lada Kesseler's dense pattern catalog for controlling coding agents — context management, reliability under non-determinism, and smarter communication."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Coding with AI: Patterns for Controlling the Genie
## Detailed Talk Outline — Craft Conference (~90-minute session, 29 patterns)

**Speaker:** L. Kesler (engineer, 15+ years of experience)
**Framing:** Builds on Kent Beck's "genie" keynote metaphor — AI as the genie that grants wishes, but not quite what you wanted. The talk is organized as three "trails" through new territory, guided by someone who "discovered it last week and knows some trails."

---

## 0. Introduction & Framing

### 0.1 The experience of the last two years
- To an engineer, agentic AI feels like madness: "Hey genie, write me some software" → working software comes out (usually, hopefully)
- To a product manager, this is just normal life — you ask an engineer for code, sometimes it works, you iterate
- Speaker's origin story:
  - Started when agentic coding became a thing; was initially in denial (early tools were genuinely bad)
  - Breakthrough moment: as a backend-only developer, built a working front end in one evening, step by step, with AI — then received compliments for "design skills that don't exist"
  - That kind of experience forces you to pay attention

### 0.2 The central question: how do you control this thing?
Points of leverage available to the developer:
1. **Yourself** — the developer's own behavior (navigate, avoid, automate)
2. **The foundational model** — local or cloud; fixed, mostly out of your control
3. **The agentic coding tool** — Claude Code, Cursor, Pi, Codex, etc.; you can choose it
4. **Configuration** — defaults often don't make sense; you can tweak
5. **Tools** — you can enhance the coding tool with tools you give it

### 0.3 Why patterns?
- Patterns allow communication: you can *name* a thing
- AI-assisted work is notoriously hard to teach ("come stare at a screen with me and wait five minutes"); patterns give teachable units
- Patterns can be taught to strangers and combined in interesting ways
- Speaker's disclaimer: these are *his* patterns, not an attempt at authority — but they've helped him and others
- 29 patterns total, organized into three tracks:
  1. **Context management**
  2. **Reliability and quality** (nondeterminism)
  3. **Smart communication**
- Companion resources: slides, pattern map, catalog website, patterns repository (PRs welcome)

---

## TRACK 1: CONTEXT MANAGEMENT

## 1. Foundational Problem: LLMs Can't Learn From You

### 1.1 Fixed model weights
- The model learned up to a training cutoff; no more learning after that
- You cannot change its mind or "teach it" through conversation — you can do other things, but the fundamental thing you're talking to never changes

### 1.2 Statelessness — "the memory you get is a lie"
- Talking to an LLM via raw API (highly recommended for understanding) reveals it:
  - "Pick a random number" → "Seven" → "Is it even?" → "Is *what* even?"
  - The model only sees the last message; it forgot everything
- All tooling on the planet *pretends* memory exists via the **context window**:
  - Conversation starts with an empty window
  - Each prompt: the *entire history* (your questions, AI responses, tool calls, MCP tool definitions, system prompt) is concatenated and re-sent
  - Your "new prompt" is not the last message — it is the whole conversation
- Consequences:
  - Longer conversations cost more (tokens regenerate, with some caching)
  - The tool sneaks the whole conversation in without you noticing
  - Even as tools improve, the underlying mechanics remain — "it will do the right thing once and fail the other 50 times, so it's better to know this stuff"
- Only operations available on context: **append** and **reset** (sometimes rollback)

### 1.3 Context rot — the window is not uniform
- Context degrades as the conversation progresses: the LLM follows fewer and fewer of your instructions ("sorry boss, I forgot")
- Degradation begins **long before** the advertised context-window limit (e.g., "1 million tokens") is reached
- Mental model: performance is good early, degrades gradually, then "plummets to death"
- Conclusion: you cannot just put things in context and forget — **context must be actively managed**

---

## 2. Pattern: Knowledge Document (#2)

- The context window is ephemeral and gets dirty; within it are a few "golden pieces" — the valuable things you explained (your TDD process, how the project works, what you want)
- When the context degrades or fills up, you want to reset *without losing the gold*
- **The pattern:** whenever something of value emerges in an ephemeral conversation, save it to a file
  - New context + load the file = clean window containing only the valuable parts
  - Makes hitting "reset" cheap and psychologically easy
- Simple, surprisingly powerful, and still not universally practiced; teams that do it report much more success

## 3. Pattern: Ground Rules (always-on documents)

- So important that tools began implementing it natively (~April of the previous year, first seen in Windsurf)
- Implementations: `CLAUDE.md`, `AGENT.md`, Windsurf rules, Cursor rules — at user level and project level
- Analogy: "put out the fire before moving on" — ground rules are *always on*, loaded into every fresh context
- **Discipline:** only put the *most important* bits there
  - People shove everything in; this backfires (see distracted agent / attention limits below)
  - Key question to always hold: *what is in my context all the time?*

## 4. Pattern: Extract Knowledge ("Genie, hit save")

- How do you get knowledge documents? Write them yourself — or have the genie write them
- After a valuable conversation: "Hey genie, save that for me" → it writes the file
- Not perfect; noise management matters a lot (see Noise Cancellation), but it's a very good habit
- You can both create and modify documents this way

## 5. Why Not One Big File? (Separation of concerns for knowledge)

- Context window is fixed size; everything competes for the space — a mega-file probably won't fit anyway
- Thought experiment: a tiny 5-sentence window forces a choice when full. Tools handle overflow differently:
  1. **Silently drop** old content (early Windsurf — content rolls out of an "infinite" window without telling you)
  2. **Summarize** (Claude Code compaction — lossy, problematic)
  3. **Error out** ("too big" — typical of raw APIs)
- If everything lives in one `project.md` (project info + Python style + JS style + frontend test plan + backend plan…), you can only pull in *all of it*; irrelevant content pollutes the context
- **Split files by concern** so you can pull in exactly one relevant piece (e.g., frontend work shouldn't drag in backend rules)

## 6. Anti-pattern: Distracted Agent (#5) → Pattern: Focused Agent (#6)

### 6.1 The story
- Ground rules adopted from Elizabeth Hendrickson: *"Be very honest. Tell me something I need to know even if I don't want to hear it."*
- Speaker added his own: *"Be proactive and flag issues before they become problems"* — then waited a long time and it never fired
- Cause: he was running one generalist Claude Code doing *everything*, including commits; commit rules were buried among unrelated content

### 6.2 The fix: a specialist agent
- Split the committer into its own small agent ("I say `c` because I'm lazy")
- Results — behavior went from **never to always**:
  - "You're about to commit your `.env` models — did you mean to?" (with a nod to James Shore having a counterpoint on committing env files in some cases)
  - "You violated your own naming convention"
  - Flagged a weird PDF file; nowadays even catches bugs
- Why it works: the specialist has only commit rules + ground rules in context, so it has the *attention capacity* to actually be proactive
- Speaker's working setup: terminal (Ghostty) with tabs — two Claude instances criticizing/improving each other, a small committer, other bots; heavy splitting

### 6.3 The hard lesson about instructions
- LLM focus is limited; it does not prioritize everything equally
- **Anything in your context that is not being followed is actively harmful** — it consumes space *and* degrades everything else
- Be extremely conscious of what you put where

## 7. Pattern: References (#7) — the knowledge library

- Ground rules = always on (e.g., "speak succinctly" — terseness matters enough to be global)
- Everything else = pulled in **as needed**:
  - **Maps** (`map.md` — where things are, so the agent doesn't re-grep every time)
  - **Guides** (code style preferences)
  - **Playbooks** (TDD process with an example)
  - **To-do lists** ("magical things")
  - **Scratch pads** (throwaway documents — help maintain the signal-to-noise ratio)
- Working rhythm: fresh context starts with ground rules; you deliberately pull in `nullables.md` (à la James Shore — fast tests without full hexagonal refactoring), then the TDD playbook, etc.
- The knowledge library accumulates over time and makes you more powerful — it *is* your toolbox

## 8. Skills = Ground Rules + References + Progressive Disclosure

- Speaker deliberately has no pattern named "skills" — skills are a (possibly fleeting) *manifestation* of more durable underlying patterns
- Anatomy of a skill:
  - `SKILL.md` with **front matter** — the trigger description telling the genie *when* to invoke it; should be tiny; many people write this badly
  - **References** — pointers to other files
- **Progressive disclosure** ("fancy way of saying the genie pulls it in when it needs it"):
  1. Initially only front matter sits in context — cheap
  2. When triggered, only `SKILL.md` loads
  3. The genie pulls referenced files (scripts, sub-documents) itself, only as needed
- Contrast with old-style MCPs, which "garbage the whole context" with every tool description up front

## 9. Problem: AI Is Noisy by Default

- Double harm: overloads *you* and pollutes your *documents*
- Example: learning Rust, asks "what is this `cargo.toml` thingy?" → gets a wall of detail he doesn't care about
- Global fix in ground rules: "much more succinct, please" ("caveman speak if you like")
  - Result: "cargo.toml is the project manifest — like package.json" → level of detail now matches level of curiosity

### 9.1 Pattern: Semantic Zoom (#9)
- A genuinely new capability (~3 years old): you can zoom in and out of *text* the way you could with images
  - **Zoom in:** ask questions, "tell me more" → deepens understanding, delivers exactly the information wanted
  - **Zoom out:** "shorter," "more succinct," "TL;DR" → distills meaning
- Same information looks different at different zoom levels; using this *intentionally* is powerful

### 9.2 Pattern: Noise Cancellation (#10)
- Force succinctness everywhere, especially in knowledge documents
- This is what separates **sustainable** documentation from unmaintainable documentation ("pretty much like your code")
- Don't sit and carefully read a page of default AI output — "this is a crazy token machine; tune it to what you want"
- **Delete mercilessly** — git is your friend; distinguish temporary vs. permanent files
  - One noisy person with a noisy AI is bad; five of them on one project becomes crazy very quickly
- ASCII diagrams aside (poking at Kafka architecture):
  - Prefers ASCII over Mermaid because it stays in the same tool — you can read it, tweak it, and hand it back
- Noise is not just text volume:
  - Keep tests high-level and scannable (credits Emily Bache / Ivett Ördög-adjacent techniques)
  - Debug at a high level: "let's go high level — what does this do?" — poking this way located a bug in vibe-coded work quickly

## 10. Pattern: External Context (#11)

- When a side quest erupts mid-task (e.g., troubleshooting tooling), leaving it in the main context steals both **space** and **attention**
- Move it elsewhere: a separate agent/window, or a **sub-agent** that does the side work and returns only a small summary
- Many different implementations; one idea

### Track 1 recap
- AI can't learn → build its memory from documents (knowledge library)
- Context rot is real → manage context deliberately
- Attention is scarce → focused/specialist agents are magical
- AI is noisy → semantic zoom + noise cancellation + external context keep you sane

---

## TRACK 2: NONDETERMINISM, RELIABILITY & QUALITY

## 11. Reframing Nondeterminism

- Nondeterminism is both problem *and* solution — weird for engineers, but not new in kind
- Kent Beck (masterclass anecdote): in the 1950s, memory itself wasn't reliable — bits flipped — and engineers made it reliable anyway. "I think we can too."

## 12. Pattern: Knowledge Checkpoint (#12)

- You spend 30 minutes planning with the genie; if you go straight to implementation and it fails, rolling back means re-creating scattered, ephemeral knowledge
- **The pattern:** before implementation, force a checkpoint — "save what we just discussed into a markdown" (Extract Knowledge) and **commit it**
- Now rollback is a nothing game: wipe context, point at the file, retry
- Real example (Hack for Good, 3-day project): keyboard-support feature → discuss → save to markdown → commit → "look at the last commit and implement"
- Practical friction: Claude is *eager* — it wants to implement immediately; you must repeatedly say "no, stop, document this first"
- Checkpoints protect invested planning time and enable further patterns (branching, parallel runs)

## 13. Pattern: Parallel Implementations (#13)

- Toy example: puppy names — asking for *several* options yields "Waffle," plus the emergent idea of nicknames; seeing more surfaces more ideas ("an instrument of vision")
- Real example (Big Agile pairing session, Ricochet Robots game): three parallel implementations — one had a better labyrinth, one better movement, one better arrows → "take this part from this one, that part from that one" → combined result
- Mechanics: with a knowledge checkpoint you can branch (git worktrees or otherwise) and roll the dice several times
  - More rolls → higher chance one succeeds
  - Cross-pollination of ideas between attempts
- Especially good for front ends (acknowledges Claude Design has made this partly obsolete, but still likes it)

## 14. Pattern: Right Tool for the Job (#14)

- Anti-tendency: once you have the AI hammer, everything looks like a nail
- Screenshot example (Hack for Good demo): needed a repeatable screenshot
  - Bad: "take a screenshot using the Puppeteer MCP" — unreliable, unrepeatable, done differently every time
  - Good: "write me a shell script that captures the screen" — now both you *and* the genie have a deterministic tool, reliable every time
- Strawberry-counting aside: Chelsea Troy's take on why LLMs miscount letters (multilingual training data spells "strawberry" differently); the reliable fix is the same — *write a script*
- Principle: code is good at deterministic work; use AI to *produce* the deterministic tool, not to *be* it

## 15. Anti-pattern: Unvalidated Leaps (#15)

- Multi-step process fails at the last step; the model checked some intermediate states but not all — the error was upstream
- Human parallel: junior-career story of a colleague writing three hours of PL/SQL without running it once — piles of unvalidated assumptions ("do you know this returns a string? do you know that time format?"); unsurprisingly it didn't compile
- Remedies:
  - **Slow it down; validate each step** when blocked
  - **Predictive TDD:** do TDD *and* predict whether/how each test will fail before running
    - For humans: maintains the mental model; a mismatch is a wake-up signal
    - For the genie: same effect — keeps it tethered to reality, forces small steps, prevents giant leaps
  - Rebuttal to "TDD isn't possible with AI" (from a previous day's talk): it absolutely is — there's a skill for it in the speaker's Skill Factory

## 16. Pattern: Chain of Small Steps (#16)

- AI struggles under complexity; *someone* has to manage it — you, for/with it
- Guiding quote (GeePaw Hill): **"Make many more, much smaller steps"** — "an answer for many things in life"
- A giant leap is opaque; small steps give checkpoints where you can observe, steer, and learn as you go
- Worked example — version number in the UI (needed to tell whether a deployed build contained a feature):
  - **What not to do:** put "always increment the version number on each feature" in `CLAUDE.md` — violates low determinism; AI won't reliably follow it. What follows instructions reliably? **Git hooks.**
  - Three steps, each trivially cheap:
    1. "Add a hardcoded version constant shown in the interface" — done, does nothing else
    2. "Make me a script that bumps it by one each run" — now there's a reliable tool
    3. "Implement a git hook that calls the script" — messes up a few times, then works; now it's automated *and out of the agent's context entirely*
  - Patterns stacked in this tiny example: chain of small steps + right tool for the job + focused agent (+ knowledge checkpoints if the task were bigger)

## 17. Anti-pattern: AI Slop (#17)

- Recipe: prompt AI → lightly edit (optional) → present as your own work → shared spaces fill with crap, people tune out and leave
- In code: no guardrails, single prompt, ship it
- Nuance: not *necessarily* bad — depends on risk level and what you're doing
- The real point: **stop expecting a single pass to produce good code.** Occasionally it does; usually it doesn't.

## 18. Pattern: Flip It (#18) — make AI review AI

- Variation 1 — two agents: a **coder** ("given this document, implement it") and a **reviewer** ("here's the task file and the diff — find all the problems"), then the coder fixes
- Variation 2 — one context: "implement" → "now, given the task and what you just did, find all the issues" → it finds problems in its own output with zero self-consciousness → "apply improvements"
- Key insight: the model *isn't* bad at recognizing bad code — ask it what's wrong and it tells you good stuff. The problem is **intention/attention**, not knowledge
- Speaker's theory of why flipping works: the model has roughly *one span of attention* — "ask it to do this AND this AND this and everything suffers, like a four-year-old." Refocusing onto "criticize" gives it a fresh single task it's good at. ("Maybe AI is badly named — it feels like one thought to me.")

## 19. Pattern: Refinement Loop (#19)

- Generalization: if one feedback pass helps, loop it
- Origin: Llewellyn Falco's TDD/refactoring process (speaker used it heavily, now has his own):
  - Give a **goal**
  - "Choose and perform the **simplest possible** refactoring, **one at a time**"
  - **Commit after each step** — crucial: without forced commits the model *pretends* to iterate; commits make iteration real, and the output difference is dramatic
- Why it works (speaker's experience): early passes strip surface problems/noise, which lets the model *see deeper* on later passes
- Generalizes beyond refactoring — goals like:
  - "Get to the gist of the idea" (a favorite; he tells it to "go meditate" into a file)
  - "Improve the text along this direction"
  - "Simplify" (another favorite)
- Loop until the AI sees nothing left to improve — caveat: it declares "done" far earlier than the speaker would, so he applies extra pressure to continue
- **Centrifuge analogy:** spin the work in the loop until the stupid flies out; only *then* do human review — "don't waste your eyes on the dirty first iteration"

## 20. Pattern: Selective Hearing (#20) — instructions that won't stick

### 20.1 Diagnosis: two distinct kinds of stubbornness
1. **Fighting the training** — effectively game over via prompting alone
2. **Distraction** — bigger/dirtier context; fixable with focus and reminders

### 20.2 Fighting training: examples
- "Don't comment my code" — nearly impossible; even Claude's own system prompt contains it ("turtles all the way down and it's not helping"), because training data contains overwhelming amounts of commented code
- Whisper (voice model) hallucinating during silences: trained on YouTube, so silence → "please like and subscribe"; no amount of prompting ("this is not a YouTube video") fixed it — awkward in client demos
- **Workable strategy: let it do the thing, then strip it out** in a second pass — the only thing that works for comments

### 20.3 Distraction: reminders & recency bias
- Recent instructions get more attention → **remind** the model of what matters at the moment it matters

### 20.4 Hooks — deterministic enforcement
- An agent = memory + tools + a REST call to the LLM; *only the REST call is nondeterministic — everything else is code*, and code has a lifecycle you can hook into (session start, before/after edit, tool use…)
- (Side recommendation: write yourself a basic agent once — enormous clarity about the tool you're using)
- Demo: comment-detector script wired into an edit hook — model adds a "hello world" comment → hook screams "no comments in the code" → model apologizes and removes it → *and* the scolding acts as a reminder, so it behaves "for the next five minutes"
- "The things you can do with hooks are just madness" — expect them everywhere

### 20.5 To-dos, lists, and the instruction sandwich
- Callback to "TDD doesn't work" claim: of course "hey, do TDD" fails — **give it a process**
- Instruction-following differs hugely between "here are 10 things" prose and an explicit ordered list — which is why to-do lists are now built into every agentic tool
- **Instruction sandwich:** when a plan exists, deliberately interleave the critical commands inside it — e.g., *run tests → do stuff → run tests* — takes reliability from "sometimes" to 90%+ (not 100% — it's not a hook, but it's very good)

## 21. Using Nondeterminism Deliberately (track recap)

- You're rolling dice — complain, or exploit it:
  - **Roll more dice:** parallel implementations; pick and combine the best pieces
  - **Roll one die in a loop:** refinement loops; "Ralph Wiggum" used for good — loop until it converges (or begs for mercy / runs out of tokens)
- Protect against failure with knowledge checkpoints; pick the right tool for the job; keep feedback loops small

## 22. Mid-talk Q&A Highlights

- **Same rules interpreted differently by each model version?**
  - Introduce stability (he mainly uses Claude Code, dabbles in Pi and Codex); expect to re-tune per model
  - Cautionary tale: Devon switched models and the whole harness stopped making sense
  - Read the vendor's model-specific guidance (e.g., for Opus 4.8: ALL-CAPS shouting used to help, now the model "gets stressed" and performs worse)
- **Doesn't committing `todo.md` dirty the branch/PRs?**
  - Options: don't commit it; speaker keeps a separate "brain repo" for fleeting artifacts with the agent operating a level above both repos; commit-then-delete also works
  - Related pattern: **Playgrounds** — a git-ignored `playground/` folder the agent has standing permission to create; it experiments freely there (great for new/internal tools without docs), then validated learnings get extracted into persistent knowledge documents/skills
- **Does this work fully unsupervised?**
  - In his experience: no. He orchestrated communicating agents last June — "lovely and weird," huge organizational effort
  - His strategy: first make the *building blocks* reliable (e.g., trustworthy unattended refactoring), then stack autonomy on top
  - Evaluating processes: run many parallel trials (never judge nondeterministic systems on one run), trace via small commits
    - Finding: Llewellyn's refactoring process works ("I go drink coffee, come back to much less horrible code, tests still pass") but **stops too early** by his standards and lacks imagination
    - Response: introduced **lenses** — separate considerations he'd naturally apply (visual noise, method length, etc.) — and keeps testing variants
- **Cheaper/local models for simple subtasks?**
  - Same instinct; wants a high-memory laptop to try. Hopes narrow focus will make small local models viable for single tasks — will report back
- **Audience contribution (sub-agent strategy):**
  - Offload discovery (API contracts, log-reading) to sub-agents/cheaper models that return only summaries — big token savings; can be packaged as a skill
  - Distrust vanilla SWE-bench (contaminated by trained-on GitHub issues); "deep SWE-bench" scores open-source models much lower
  - For orchestration, use an **advisor pattern**: a top-tier main model (Opus 4.8 / GPT 5.5) with sub-agents asking it questions

---

## TRACK 3: SMART COMMUNICATION

## 23. The Problem Pair

1. **AI internals are hidden** — it has *something like* a mental model ("quacks like a duck, might as well call it that"); human–AI misalignment in that model is costly and hard to detect
2. **Compliance bias** — trained on purpose to please; it will do practically anything you ask and tell you how amazing you are

Together: a mysterious black box that always says yes.

## 24. Anti-pattern: Silent Misalignment (#22)

- Story: voice-driven form-filling app (speech → transcription → form fields, with RAG for tricky questions); V1 UI was ugly
- "The top panel and bottom panel are uneven — make them the same size" → "Sure!" → nothing changes → several rounds of the same
- Diagnostic move that cracked it: **"Color what you think is the 'top panel' and 'bottom panel'"** → the coloring revealed a completely different understanding of the layout
- Why it happened: the model wasn't seeing panels — it was seeing raw `div`s with no headers or sections; the human's words made no sense against its world, *and it never said so* — it just complied
- The painful question: "Why didn't you tell me I wasn't making sense to you?"

## 25. Pattern: Active Partner (#23)

- Ground rules that enforce partnership:
  - "Be very honest. Tell me something I need to know even if I don't want to hear it." (Elizabeth Hendrickson)
  - "Push back when something seems wrong — don't just agree with mistakes"
  - "Ask questions if something is unclear; don't silently pick when a choice is needed"
  - "When you show me an error or a miss, start the response with a specific emoji" — instantly scannable
- Reinforcement levels: global rules + explicit **permission to disagree** + impromptu reinforcement when stakes are high ("no, be *really* honest")
- Recent wrinkle: since "Opus .6" the honesty rule triggers verbal tics ("to be very honest with you, blah blah") that he hasn't managed to suppress
- **Don't ask for N questions:** "give me five questions" guarantees exactly five — if it had seven, you lost two; if it had one, you're answering four filler questions from a token machine. Ask "do you have any questions?" / "is everything clear?" — it often answers "no, it's not clear"

## 26. Pattern: Check Alignment (#24)

- Failure mode: request → (misunderstanding happens here) → 20 minutes of implementation → wrong thing → rollback (its time, but still waste)
- **The pattern:** "Show me what you're about to do / show me the current architecture / what's the plan — succinctly — before you do it"
- Catches misunderstanding at the request stage, where correction costs nearly nothing; later failures at least won't be *this* failure

## 27. Pattern: Context Markers (#25)

- Origin: people asking AI to address them by a specific name defined only in the rules — seeing the name proves the rules were read
- Emoji version — more flexible and more scannable:
  - Ground rule: "start all replies with <marker> + space" → every reply carries proof-of-life for the ground rules (his default: a clover)
  - Swap markers per **skill** (see at a glance that the skill actually triggered — no more "did it start?")
  - Per **role** (committer has its own emoji)
  - Per **TDD phase** (red / green / refactor visibly cycling)
  - Attach a marker to any specific mid-document instruction to verify it was attended to
- One glyph = two bits of information ("it read my ground rules" + "it's in the red phase")
- Makes the invisible visible, especially in contexts you don't fully control

## 28. Anti-pattern: Answer Injection (#26)

### 28.1 The obvious version
- "Which *fancy restaurant* should I book for the team celebration?" → you'll get fancy restaurants and nothing else. "Give me a few suggestions for a team celebration" → far wider option space

### 28.2 The subtle version (personal story)
- June last year, two Claude Code terminals; wanted them to talk to each other (not a feature then)
- Asked: "Can you send a message to another Claude Code? Search online, check the docs" → answer: *"No, Claude Codes can't talk to each other."* Bummer — accepted it
- Later realized `claude` is just a shell command → had one instance launch another ("launch Claude Code" → it runs `claude` → new instance appears)
- Then, with the right instance already running, a launch attempt produced text *appearing in the other window* — "I don't know about you, but to me that's a message"
- Lesson: the capability existed all along; **the phrasing of the question injected the wrong frame**, and the compliant answer never flagged the mismatch
- The fix — describe, don't prescribe: "I have two iTerm2 windows and want to send a message from one to the other" (no assumptions about Claude features) → "Sure, AppleScript" → learned a technology he didn't know, built the tool, had Claudes chattering by June
- Meta-point: it's genuinely hard to state a problem without smuggling in your assumptions — but very worth practicing

### 28.3 The list version (a friend's example)
- Friend asked for ideas and *helpfully* enumerated the angles: "against the API, the server itself, third-party email clients" — intended to broaden, actually **capped** the option space (no "anything else?")
- Answers came back structured exactly and only along those three bullets
- Follow-up "Is there a *simpler* way?" produced a different approach entirely — which, under a 3-day hackathon deadline, let them ship two features to the client and secure funding; without it they'd have gone down an unnecessary rabbit hole

## 29. Pattern: Cast Wide (#27)

- Premises now established: AI is extremely well-read (knows more than you, even if recall is imperfect), *and* you can accidentally fence it in with phrasing
- Deliberate blind-spot probes:
  - "What solutions haven't you even considered?"
  - "Can we do it simpler?" / "even simpler than that?"
  - "What entirely different approach might work?"
  - Describe the problem *globally*, not locally
- Use AI as an **instrument of vision** that enhances you — not as an order-taker
- It can teach you what you don't know you don't know

## 30. Pattern: Reverse Direction (#28) — speaker's favorite

- Conversational inertia trap: when AI asks a question, people reflexively *answer* it, forgetting they're not obligated to — you're steering, not chatting
- Instead: flip the question back — "give me some suggestions"
- Example: renaming a script (`claude-send.sh`, part of the Claude-to-Claude tooling) — "What do you want to rename it to?" → *"Can you suggest a few options?"*
  - Like standing at a fork with invisible branches: this makes every branch visible **at zero cost**, generates ideas, lets you react quickly ("I'd considered whisper and disliked it… I'll take this one")

### 30.1 Arlo Belshee's compound trick (Reverse Direction + friends)
- Recurring tedious dialogue: "what stack?" → options → "which is better and why, briefly?" → suggestion → "go ahead"
- Replaced by a standing ground rule:
  - *"When you need my input on a decision: first pick the option you think is best and propose it, starting with the ⭐ emoji; then list the alternatives and briefly why not"*
- One glance shows the proposal, the road not taken, and the reasoning; bad picks get corrected in seconds
- Pattern chord: **Reverse Direction** (propose, don't ask) + **Check Alignment** (you're reviewing its judgment) + **Cast Wide** (the alternatives axis = paths not taken) + **Context Markers** (⭐ makes it scannable)

## 31. Pattern: Text Native / Move Between Modalities (#29)

- AI is superb at text, but text is *elastic* and connects to other modalities — don't stay stuck in one
- Worked example — building a modal UI from a PM's rough sketch:
  1. PM provides a crude drawing (summary at top, questions on right, continue/copy buttons)
  2. "Convert this image to ASCII" → strikingly faithful ASCII mockup — and now it's **editable**: copy, tweak, hand back; a shared text whiteboard
  3. "Describe this modal window as a list" → clean textual spec (modal popup, summary section, question section, continue button…) — image → text with near-zero human effort
  4. "Look at the code and describe the *current* state" → now both ends of the journey are explicit (where we are, where we're going)
  5. "Make a to-do list to move from current state to new state" → step plan
  6. "Go implement" → worked first try
- Modality chain: sketch → ASCII → description → code-derived current state → to-do → implementation, with minimal human energy at each hop

---

## 32. Grand Recap (speaker's closing walkthrough)

1. **LLMs can't learn** — your only moves are reset and refill; build its memory from documents; grow a good knowledge library — it's your toolbox
2. **Attention is scarce** — it's not an omnipotent god (friend's joke: "keeps 2 ± 5,000 things in mind"; speaker suspects ~7); small focused agents are disproportionately powerful; clear context when the result really matters
3. **Text is elastic** — a genuinely new dimension; use semantic zoom to stay sane; be kind to teammates — don't spam raw agent output into shared repos
4. **Same input ≠ same output** — design for nondeterminism: protect (knowledge checkpoints) or exploit (parallel implementations, refinement/feedback loops)
5. **Right tool for the job** — don't use AI for everything; code is for deterministic work (git hooks > CLAUDE.md instructions)
6. **Complexity isn't self-managing** — chain of small steps; something has to manage it, and by default nothing does
7. **Expect bad first tries** — single-pass quality is the exception; refine for quality (centrifuge before human review)
8. **Tricky instructions** — distinguish training-level stubbornness (let it happen, then remove) from distraction (hooks, reminders, sandwiches)
9. **The mental model is hidden and it always says yes** — actively fight it: active partner rules, check alignment, context markers
10. **You can fence yourself in with your own phrasing** — stay suspicious; deliberately cast wide for blind spots
11. **Breadth is nearly free** — trying many things costs ~zero now (cf. Claude Code's to-do UI: ~20 iterations user-tested in 2–3 days); use AI as an instrument of vision
12. **Move between modalities** — text is powerful, but don't get stuck in it

---

## 33. Closing Q&A

- **RAG for determinism?** Skeptical for agent orchestration; sees a fit for semantic search ("do I have anything in my context/tools relevant to this?") and other specific implementations — open to ideas
- **AI code review of teammates' PRs locally?** Absolutely — has done it. Bigger questions lurk: why and how you do PRs at all (minimizing them goes a long way, as with humans). Today he'd put an AI reviewer *in the repo* as an obligatory, visible stage rather than personally reviewing; besides, "everybody does it now," so there's no pretense
- **Where are these learnings shared?** Slides link → companion website with the clickable pattern map (built from a CSV; crowd applause for the visual), a full pattern **catalog** ("vibe-coded, not perfect, will improve"), and a **patterns repository** accepting pull requests — other people's patterns welcome
- **Show your working folder?** Client-work limits, but shows the **Skill Factory**:
  - Skills live in one repo, **symlinked** into the Claude config directory; a simple shell script toggles them on/off (purple symlinks in the listing; e.g., a TDD skill, git lint)
  - Resources page documents his layout: context vs. work directories, project-level reference library, global user rules, project rules
- **BDD and TDD together?**
  - Does both — BDD tests written in his own high-level "printer-scannable" language (heavy Approvals use): they enumerate features at a glance and answer "does my system work?"
  - **TDD is for the agent, mostly** — it produces good code as a side effect of red/green/refactor with minimal-code steps
  - Recent comparison (mini-conference with Emily Bache et al.): Ivett Ördög's approach (BDD + hooks that scream at the agent about long methods, dead code, etc.) vs. his BDD + TDD — his TDD-only discipline yielded "pretty decent code" with clean red/green/refactor commits and nothing else imposed
  - Boundary rule: the agent may touch internal/TDD tests, but **never** the BDD tests
- **Technical debt in the LLM tooling itself (prompts, MD files)?**
  - Alternates modes: "feature, feature, feature — now refactor, refactor, refactor," applied to knowledge files too
  - Merciless deletion again — dead code is bad enough alone; dead code plus an agent is worse ("it totally 'fixed' a thing in the leftover form that isn't used")
  - Investment is risk-proportional: production systems get heavy investment; a one-day throwaway tool gets happily vibe-coded
- **Keeping the toolbox maintainable as the landscape shifts?**
  - "We're all figuring this out"; his answer: keep the toolbox **small and simple**, verify what you actually use works, resist grabbing every skill/MCP
  - Cautionary example: Amazon's early MCP enthusiasm → mysteriously degrading agents, because greedy MCPs shoved all instructions into context and diluted it
  - The IDE-shaped tooling gap is real — current tools "feel pretty good but are definitely not the right tool" yet

---

## Appendix: Pattern & Anti-pattern Index (as presented)

| # | Name | Type | Track |
|---|------|------|-------|
| 1 | (Context window mechanics / LLM can't learn) | Obstacle | 1 |
| 2 | Knowledge Document | Pattern | 1 |
| 3 | Ground Rules | Pattern | 1 |
| 4 | Extract Knowledge | Pattern | 1 |
| 5 | Distracted Agent | Anti-pattern | 1 |
| 6 | Focused Agent | Pattern | 1 |
| 7 | References | Pattern | 1 |
| 8 | (Skills = Ground Rules + References + Progressive Disclosure) | Composition | 1 |
| 9 | Semantic Zoom | Pattern | 1 |
| 10 | Noise Cancellation | Pattern | 1 |
| 11 | External Context | Pattern | 1 |
| 12 | Knowledge Checkpoint | Pattern | 2 |
| 13 | Parallel Implementations | Pattern | 2 |
| 14 | Right Tool for the Job | Pattern | 2 |
| 15 | Unvalidated Leaps | Anti-pattern | 2 |
| 16 | Chain of Small Steps | Pattern | 2 |
| 17 | AI Slop | Anti-pattern | 2 |
| 18 | Flip It (Coder/Reviewer) | Pattern | 2 |
| 19 | Refinement Loop | Pattern | 2 |
| 20 | Selective Hearing (Hooks, Reminders, Instruction Sandwich) | Pattern cluster | 2 |
| 22 | Silent Misalignment | Anti-pattern | 3 |
| 23 | Active Partner | Pattern | 3 |
| 24 | Check Alignment | Pattern | 3 |
| 25 | Context Markers | Pattern | 3 |
| 26 | Answer Injection | Anti-pattern | 3 |
| 27 | Cast Wide | Pattern | 3 |
| 28 | Reverse Direction | Pattern | 3 |
| 29 | Text Native / Modalities | Pattern | 3 |
| — | Playgrounds | Pattern (Q&A) | — |
| — | Ralph Wiggum loop (die in a loop) | Technique | 2 |
| — | Advisor pattern (audience contribution) | Technique | Q&A |

*Note: numbering follows the speaker's on-slide pattern numbers where stated; a few numbers were not explicitly announced in the transcript and are inferred from sequence.*

## People & References Cited
- **Kent Beck** — genie metaphor (keynote); 1950s unreliable-memory analogy; masterclass
- **Elizabeth Hendrickson** — "tell me something I need to know even if I don't want to hear it"
- **James Shore** — Nullables (fast tests without hexagonal refactoring); nuance on committing env files
- **GeePaw Hill** — "make many more, much smaller steps"
- **Llewellyn Falco** — TDD refactoring loop process
- **Arlo Belshee** — propose-then-list-alternatives decision ground rule
- **Chelsea Troy** — multilingual explanation for strawberry-counting failures
- **Ivett Ördög** — high-level scannable tests; hooks-that-scream code-quality methodology
- **Emily Bache** — co-ran the mini-conference where refactoring processes were compared
- Tools mentioned: Claude Code, Cursor, Windsurf, Pi, Codex, iTerm2/Ghostty, AppleScript, tmux, git worktrees, Puppeteer MCP, Whisper, Approvals

---

*Video: https://www.youtube.com/watch?v=gTgEZsfyzoo — Transcript via yt-transcript.sh; outline generated from the transcript (partial for a long transcript).*
