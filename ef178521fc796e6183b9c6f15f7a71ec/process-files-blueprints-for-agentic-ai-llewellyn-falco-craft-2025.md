---
title: "Process Files: Blueprints for Agentic AI - Llewellyn Falco | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Llewellyn Falco on agentic AI — the bug-fix story that made him capture repeatable workflows as markdown 'process files', the anatomy of a prompt (process files, examples, data-in-context, impromptu), three ways to build data-in-context, the effective-context problem, the brown-M&Ms 'starting character' trick, severing deterministic scripts from fuzzy AI (output=AI), a live audience-driven FPS build, and 'automating yourself'."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Process Files: Blueprints for Agentic AI - Llewellyn Falco (Talk Outline)

> A Craft 2025 (Budapest) session by **Llewellyn Falco**, technical coach (speaking at Craft every year since 2016), presented as a continuation of his prior-year TDD-with-AI talk. He scrapped his planned workshop ("how to cut code to make it easier to test") because his "entire world changed about 2 months ago" when he started working with **agentic AI** — "I don't know how *not* to talk about this. I also don't know how to talk about this. This might be the worst talk you go to." All code, the Git repo, and slides are shared. Structure: what changed (a live-narrated bug fix) → the process-file idea → a live, audience-driven build of a first-person shooter (with volunteers) → the deeper concepts (data-in-context, effective context, starting characters, deterministic-vs-AI separation, training-for-agentic) → a daily-status-file finale → the recurring question "**is this even programming?**" His polls: ~30% had used agentic AI, most experiences good; some found AI "trash." Tools: primarily **Windsurf** (also Cursor, Copilot agentic, Claude Code).

---

## 1. What Changed: A Live-Narrated Bug Fix (Go / approval tests)

> Story from 3 weeks earlier, fixing a bug in his open-source **approval tests** project (in Go), in Windsurf. "Agentic" = talking to AI directly in the editor, and **AI can now see your whole system — if it asks, and it knows it can ask.** That's the first big change.

### 1.1 The false start
- "Let's fix bug number 49" → AI: "What?" — disappointing, since that would be enough for a human, "but let's treat it like a slow human."
- Gives it the **bug URL** → "complete garbage" — because AI sees not the rendered page but the **source code**, which fires a **JSON call** to load the actual data.

### 1.2 AI using *your* tools
- He can get the payload from the **GitHub CLI**; too lazy to copy-paste, so he tells AI to use the GitHub CLI — it runs the terminal command, gets the payload, ready to fix.
- Key realization: **AI can use tools — specifically *your* tools.** Anything you can do on your computer, it can now do.

### 1.3 Good programming practice, step by step
- "No — write a **unit test** to confirm the bug" → it edits the file.
- "Run the tests" → runs terminal → tests fail as expected.
- "Fix the bug" → edits files; "run the tests again" → passing.
- Then he must actually **look at what it wrote** — "my nose starts to wrinkle": "remove those comments," "clean up those names," re-run tests each time.
- Commit message: it proposes one, but "that's not how I do messages" — he uses **Arlo's commit notation** and corrects it.
- "This is very, very different from how bug fixing looked in February. **Is this even programming?** I don't know — but a lot more of my world looks like this now."

### 1.4 The turn: capture the conversation
- "Create a **process file** based on this conversation" → it writes a **markdown file** laying out the steps (ask for bug number → understand the bug → write failing test → fix → clean up → commit), telling it to use the GitHub CLI and how he likes his Git messages.
- These files are "totally coincidentally" helpful for other engineers, but "**zero chance** I'd ever write this for other humans" — he writes them so **next time** it just works.

### 1.5 Next time
- "Please read the process file and follow the instructions" → "Bug number 49" → it reads the bug, writes the failing test, fixes, refactors (comments/names), re-runs tests each time, and checks the commit message; he's "too lazy to type yes," so types **Y**.
- "For decades, being a programmer meant we automated **other people's** processes. All of a sudden what I'm automating is **me**. That is exciting. It's weird. I'm trying to delay my opinions."

---

## 2. Setting Up the Live Demo

- Problem: a demo that "goes really well" is boring (just watch it scroll); if he puts all his processes in place it also just works. He needs "things to go kind of wrong yet fixable in 90 minutes."
- Solution: let the **audience decide** what to build; he'll use **Java** because he has enough infrastructure to bring it back on track.
- Audience suggestions & vote: to-do app, online poker, "cockroach"/conference poker, personal finance, Microsoft office app, **Minesweeper** (seemed to be winning), and an online multiplayer **first-person shooter (FPS)** — which they proceed with.
- Format: a **modified mob** with volunteers giving one instruction at a time; the mic rotates.

---

## 3. The Live Build (audience-driven FPS in Java)

### 3.1 Marco — the impromptu start
- Proposes JS front end / silly basic graphics; but a JS-only path would break Falco's Java framework, so → **JavaScript + Java web app**.
- Prompt "I'm building a basic FPS game, start with basic movement and shooting" → the AI **comes back with questions** (language/framework, platform) — "I think that's great."

### 3.2 Jenga — create context to anchor
- It starts to diverge into different technologies; suggestion: make a **markdown context** ("this is the context we circle back to").
- This introduces the **anatomy of a prompt** (see §4).

### 3.3 Building the project spec
- Falco **rejects everything and starts a brand-new context**, reverts the starter project, and creates `docs/project-spec` (a new file).
- "Stop coding and just describe what you understood into the project spec" + drags the file in ("works much better to give it in the phrasing it wants").
- He **doesn't read** the AI's chat output — he writes it into the file and reviews it there, because he's under **source control** and "can always back things out."
- Reviews the generated spec line by line with the volunteers (movement WASD + mouse look via **pointer-lock API**, canvas, bullets, boundaries, backend as a placeholder for multiplayer/high-scores/persistence).

### 3.4 Making the "reasonable" spec unreasonable (on purpose)
- The JS spec is reasonable, so — to force compilers/tests he wants to demo — he **hand-edits** it to **Java + AWT**, a **desktop** app (not browser-based, and "in a terminal might be pushing it").
- Commits "Java only."

### 3.5 Benny — the architecture diagram
- New context, pass in the project spec, ask for an **architecture diagram** into `architecture-spec.md`.
- The AI produces a **Mermaid** diagram; it doesn't render, so it unilaterally switches to **ASCII** ("Mermaid's too hard, I'm not going to listen to you" — "that's valid, I guess").
- He shelves/stashes that, starts a fresh context, and a **slightly different prompt** ("draw a mermaid diagram… in UML format") yields a much cleaner, diagram-only result — "very different results with a very similar prompt."

### 3.6 Evette — refine the diagram, then an empty world
- Reviews the class diagram (game loop, shooter, renderer, player, projectile, input handler); moves the **input handler** under the **game loop**; iterates with the AI (and hand-fixes since he's "really good at patterns").
- Next step proposed: "generate an empty 3D world with this architecture."

### 3.7 Writing the "new project" process file
- Creates `starting-a-new-project.process.md`: `## Process`, `## Steps`, and a **starting character**.
- Asks for 10 emoji options for "starting a new process"; the **rocket** 🚀 is first ("a man who knows AI right there").
- Steps distilled with the volunteers: (1) ask for a brief project description; (2) remove everything not **essential** (for an MVP); (3) create/populate `docs/project-spec`; (4) define the **tech stack** (into the spec); (5) **define architecture** — reread the spec, create a **UML diagram using Mermaid** in `architecture-spec.md`.
- Commits the process file, **deletes** the demo work, and re-runs from the process file ("try two").

### 3.8 Running the process file
- "Please read `new-project.process` and follow the instructions" → 🚀 → step 1 asks for the description → "a 3D first-person shooter desktop app in Java, starting with an empty world."
- Generated spec is **"oddly nicer than what we had before"** — a recurring surprise: process files make it **easier and give better results**, but "oddly it doesn't save me as much time as I'd hope."

### 3.9 Marko (Serbia) — clean up the tech stack
- Chooses macOS (his machine), **Maven** (his setup), and picks between **LWJGL / jMonkeyEngine** ("your guess is as good as mine" — try one, swap if it fails).
- Currently on **GPT-4.1**; happy to switch agents since context is cheap to clear.

### 3.10 Csongor (Hungary/Romania) — a to-do list with progress tracking
- Adds to the process file: **always ask whether resuming work-in-progress or starting new** ("always" and "never" are useful words; **avoid "not"**).
- Create a **to-do list** (10–20 tasks, ordered **chronologically** by dependency), confirm with the user, and write to a `to-do` file that **tracks which are done/in-progress**.
- "Commit before I do anything with AI" — even a WIP commit, because "AI might do who knows what to who knows where."

### 3.11 Working the to-do list
- Resuming → the AI offers to check off tasks; compares the list to what's already in the project and marks the Maven setup done.
- Removes "version control" from the end (already doing it) and moves "ensure it runs on macOS" to a sensible place.
- Sets up the Maven project, adds dependencies, **runs the tests** (3 passed), and builds the main app entry point.

### 3.12 The run script (Benny, Evette)
- "run" isn't a command; create a **`run.sh`** that starts the app (via Maven, so the AI doesn't have to figure out the Maven invocation), `chmod +x` it.
- "Main app started" prints but nothing visible yet. He cleans up the bash script with a **bash-script process file**.
- Side note: a **`main-app` Java file** now exists — "code? Maybe?"

---

## 4. The Anatomy of a Prompt

- A prompt is built from several pieces:
  - **Impromptu prompt** — what you type ad hoc, "hoping it will work."
  - **Process files** — the reusable workflows.
  - **Examples** — few-shot examples.
  - **Data-in-context** — a document describing the specific thing you're building.

### 4.1 Data-in-context is *built*, with human in the loop
- Unlike process files/examples (which he arrives with), **data-in-context usually starts empty and gets built up** — "and that is where we have **human in the loop**. If you don't have human in the loop, this tends to not work well at all."

### 4.2 Three ways to build data-in-context
- **Build a doc** — literally writing the spec together.
- **Interview me** — give it so little info it asks questions (accidental), or consciously ask it to interview you.
- **Preheating** — have it generate the doc from generally-available knowledge (making assumptions — "do computers have common sense? I don't know").
- In the demo they did all three.

---

## 5. Deeper Concepts

### 5.1 The effective-context problem
- LLMs have a **context window** (often **millions of tokens**; a token ≈ a word, loosely).
- But well before the physical limit you hit the **effective context** — attention degrades severely somewhere around **10–20k tokens**.
- Jay Bazuzi: "it can remember **7,000 things plus or minus two**."
- So Falco **restarts context constantly** to keep it clean — enabled by the external files (process/spec/to-do), which let him throw away context and pop back in fresh, break work into steps, and not fear blowing the effective context.

### 5.2 The brown-M&Ms starting character (from Van Halen, via Lotta Kessler)
- Van Halen's rider demanded a bowl of M&Ms with **"absolutely no brown ones"** — a canary: if brown ones were present, the (complicated) sound equipment was probably **not** set up right.
- Similarly, a **rules file** instructs the AI to start every reply with a specific character (default 🧩 puzzle piece; 🚀 during the new-project process).
- If the character is present, he *thinks* it's reading the rules; if it **disappears, he knows it's forgotten** the rules. "I can't guarantee it's reading them, but I can guarantee when it's not."
- He is "horribly disappointed with rules" and keeps them as short as possible.

### 5.3 Sever deterministic from fuzzy (output=AI)
- Computers used to be one thing (deterministic, automated); now they're two — but we still treat them as one, "a huge mistake."
- **Take everything deterministic and everything AI-fuzzy and completely separate them.** "I do not want AI doing anything I can have a script do."
- **Build/test:** the AI *could* figure out Maven vs. Gradle, the pom, and the right flags/goals (clean/verify/install) — but he doesn't want it to. His **rules file** just says "here's how you run tests" via a **build-and-test script** ("don't overthink this").
- **Output pollution:** programmers read build output **bottom-up** ("build success, done") and ignore the top; the AI has no such luxury and must read all of it. So he wants a `mvn verify --output=AI` flag (doesn't exist — "if you write tools, please make this flag exist"); instead a **bash trick** dumps output to a temp file, and on success **greps out** almost everything so context isn't polluted — but on **failure** the full output *is* fed in, "because at that point I want it polluted." (He had AI write the bash itself.)

### 5.4 Process files vs. built-in rules/workflows/instructions
- Windsurf **workflows**, Copilot **instructions**, Cursor **rules** — "aren't those process files?" Yes, "except for some reason it doesn't work very well" — always-on rules don't always go on, instance-specific rules don't stick, the markdown editor doesn't even render.
- Plain **process files he asks it to read** work better and have the added advantage of being **portable across agentic AIs**. "I hope in the future this won't be true."

### 5.5 Trained for agentic
- Building an LLM includes **reinforcement learning** (rating prompt answers). Until recently, "run this terminal command and get back to me" or "apply this diff" were rated **bad** responses on the website, so models weren't trained to ask questions / use tools / get results back.
- **Claude** was first (Claude Code is oldest; **Claude 3.5** trained for agentic); **GPT-4.1** (~5–6 weeks old) and **Google Gemini** also trained; a new one **SWE** (from Windsurf, acquired by OpenAI) too.
- **DeepSeek** or **Llama** will probably give "really bad results" here; JetBrains tooling is "not very robust" (reports on **Genie** unhappy).
- "Everything I talk about will probably be obsolete by the time we're done" — expect all back-ends trained on agentic (and tooling within agentic) within ~6 months; it's a fast-moving space, and **switching models can give very different results**.

---

## 6. Process-File Craftsmanship

- Most of his process files land around **~59 lines**; "if you're going to hundreds of lines, you're doing something wrong."
- After writing one, say **"please reread and improve **and simplify**"** — just "improve" *adds* stuff; **"simplify"** is the keyword to shrink it.
- He hand-crafts the first version, then has the AI modify it ~**4–5 times** (big changes first, then small) until "it just works good enough."

---

## 7. The Daily-Status-File Finale ("is this programming?")

- As a consultant/coach he writes a **daily status file** each day; he demos writing one for *this talk*, in a **subfolder** of a larger repo (a pattern he uses a lot — e.g., pointing it at an **Obsidian** notes subfolder to "find the patterns and write a review").
- Uses **Gemini 2 Pro** for this ("I like it better, can't tell you why"), not GPT-4.
- Flow: `personal-daily-status` process file → build data-in-context by answering prompts (focus, title, what he did, what surprised him — "that any of it worked" — what went well, progress) → it writes a dated `craft-talk` status file → human-in-the-loop review ("guided… that's very nice").
- Then it proposes **5 titles** (he picks "AI live demo") and an **image prompt** (digital/futuristic **pixel art**); he takes the prompt to ChatGPT to **draw the image** (~a minute).
- Email trick: paste the rendered markdown into Gmail; the image won't paste, so he types **four stars**, drags the image into the middle, deletes the stars — "and that's my email."
- Verdict: "There's no code, it's not Python or Java, but it's a process I do every day that I'm now automating. **Is that programming? Yes. I don't know. Maybe.**"

---

## People & References Cited

- **Llewellyn Falco** — speaker; technical coach; author of the open-source **approval tests** library; Craft speaker since 2016.
- **Arlo Belshee** — "**Arlo's commit notation**" (how Falco formats commit messages).
- **Lotta Kesseler** ("Lotta Kessler") — source of the specific starting-character implementation.
- **Van Halen** — the "no brown M&Ms" rider (canary/verification idea).
- **Jay Bazuzi** ("Jay Bezazi") — "remembers 7,000 things plus or minus two."
- **Volunteers:** Marco, Jenga, Benny, Evette, Marko (Serbia), Csongor (Hungary/Romania), Benni (Hungary).
- **Tools/models:** Windsurf, Cursor, Copilot (agentic), Claude / Claude Code (Anthropic; Claude 3.5), GPT-4.1 (OpenAI), Google Gemini / Gemini 2 Pro, SWE (Windsurf/OpenAI), DeepSeek, Llama, JetBrains/IntelliJ (Genie), GitHub CLI, Maven, AWT, LWJGL, jMonkeyEngine, Mermaid/UML, Obsidian, Gmail, Go, Java, JavaScript.
- **Concepts:** agentic AI, process files, anatomy of a prompt (impromptu / process files / examples / data-in-context), interview-me / preheating / build-a-doc, context window vs. **effective context**, starting character (brown-M&Ms canary), deterministic-vs-fuzzy separation, `output=AI` / bash grep trick, reinforcement learning / trained-for-agentic, TDD, "automating yourself."

---

*Video: https://www.youtube.com/watch?v=MMqahx1PRQo — Transcript via yt-transcript.sh; outline generated from the transcript.*
