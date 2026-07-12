---
title: "Taste: The main advantage in AI – Tejas Kumar | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Tejas Kumar on taste as trainable, science-corrected pattern-matching — its origin in infant pattern-matching, how it goes wrong (bias/prejudice), a working definition (tacitly judging quality against external standards), worked examples (counterfeit money, centering, relative pitch), why taste drives business value, three protocols to train it (Kahneman & Klein's immersion + cues + corrective feedback, externalize a standard, cross-pollinate), Pixar's Brain Trust, web taste standards (INP/LCP/CLS, WAI-ARIA/WCAG, time-to-value), and live demos of streaming, MCP, and MCP apps."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Taste: The main advantage in AI – Tejas Kumar (Talk Outline)

> A **Craft 2026** talk by **Tejas Kumar** (pronounced "like contagious") — a **developer advocate for AI at IBM** who studied **human-computer interaction (HCI) at Stanford**. His framing "why": the way we interact with computers (HCI) is changing rapidly. The talk is deliberately **academic and citation-backed** (peer-reviewed research, not just opinion). Structure: where taste comes from → how it goes wrong → a working definition with worked examples → why it matters for business → three protocols to train it → Pixar's Brain Trust → how taste shows up in engineering (performance/accessibility/time-to-value) → live demos (streaming, MCP, MCP apps) → close + Q&A. He opens by thanking sponsor **Lufthansa** ("cool to see Germany represent") and jokes about the frozen clock ("it's going to be a long talk").

---

## 1. Why Taste, and Why Now

### 1.1 Anyone can make "some AI approximation of anything"
- Nowadays **most people can make most things** — "anybody can make anything."
- His friend **Titus** corrected him the night before: not anybody can make anything, but anybody can make **some AI approximation** of what they want.
- With tools like **Claude Code, Cursor, Codex**, we have so much power that we'd **better build things that are good and have taste** — that care about the people on the other side of the screen — rather than **slop**.

### 1.2 "Slop" was the 2025 word of the year
- **Slop** was the word of the year for 2025.
- Slop is what they serve in **prison cafeterias** — food that "doesn't taste like anything."
- This talk is about **the opposite of slop**: taste.

### 1.3 The journey ahead
- Explore taste through science and engineering: **where it comes from, how it goes wrong, and how to build/train your own taste** and become a "tastemaker" (what gives **Vogue** the right to say an outfit is good or bad?).

---

## 2. Where Taste Comes From

### 2.1 Nobody is born with taste
- (Audience mostly doesn't believe we're born with taste; one person did — "I'm about to prove you wrong.")
- **Nobody is born with taste** — it's developed over time.

### 2.2 We are born with the precursor: pattern-matching
- Taste is a **refining of neural circuitry** we're all born with.
- Taste begins in **infancy** — we're born with **pattern-matching mechanisms**.

### 2.3 The newborn example
- A newborn gets smacked, oxygen enters the lungs, they cry, a caregiver gives care.
- Babies start **pattern-matching**: "if I cry, they feed me"; "if I'm sleepy, they make me sleep" — **if this, then that**.
- Same as us: "I write a prompt, I get software."

### 2.4 The flaw in the system
- We assume "if a pattern is **easy**, it must be **right**" — if I can make sloppy garbage software with no effort, it must be good.
- We assume the **easy choice is the right choice**, and sometimes it isn't.

### 2.5 How pattern-matching goes wrong
- Broken pattern-matching gives rise to **prejudice, racism, sexism**.
- Personal example: because of how he looks, people think he works in **tech support**, and have literally **confused him with Banjo** (fellow speaker Banjo Obayomi).
- We think "this feels about right / the easy choice must be right," leading to **systematic inequality and prejudice**.

### 2.6 Taste = pattern-matching corrected by science
- **Taste is pattern-matching, but corrected according to science** — "when we get pattern-matching right."
- The claim of the talk: taste starts as pattern-matching, goes through a **refining process**, and **refined/redeemed/restored pattern-matching becomes taste**.

---

## 3. A Working Definition of Taste

### 3.1 The definition
- Taste is **a trainable skill where we are able to tacitly judge quality based on external standards.**

### 3.2 "Trainable skill"
- You're **not born** with it — you **acquire, refine, and grow** it; it keeps evolving.

### 3.3 "Tacitly"
- **Tacitly = a gut feeling** you can't put into words.
- The French call it **je ne sais quoi** — "I don't know what it is, it just feels right."

### 3.4 "External standards" (the big one)
- With pattern-matching we make tacit judgments — but often based on **internal bias** (broken pattern-matching).
- **Taste is when the same gut-feeling judgments are based on external standards — facts, science, things we know** — not "I think all Indians are tech support."

---

## 4. Worked Examples of Taste

### 4.1 Counterfeit money experts
- The clearest example: **money**. People whose job is to identify **counterfeit money** — a task "we still don't trust AI with fully."
- They make **tacit judgments** ("that's fake, that's real").
- The naive assumption: they study all the **counterfeits/scams**. The truth: they study **real money** — they "live, breathe, smell, taste" genuine government-issued cash.
- Because they know the **true thing** so well, they **instantly know the fake** — a tacit judgment based on the **external standard of real money**.

### 4.2 The creative director and centering
- His first job was at a **creative/design agency** with a talented **creative director, Stephanie**.
- She gave him a design; it required centering something. He wrote `align-items: center` (a flexbox) and said "it's done."
- She said "**that's not centered**" — he argued "CSS doesn't lie / computers are logical."
- Investigating, he found it wasn't the code — it was the **font**, which had **extra height under each letter** pushing things slightly higher.
- She was right because she **tacitly knew** — from immersion in "a billion vertically aligned things" — the **external standard**.

### 4.3 The off note (relative pitch)
- Tejas is a **musician** (guitar, singing; former singing coach).
- At a concert everyone's in harmony, then the singer hits **one off note** ("Happy birthday... oh, Jesus") and everyone cringes.
- We **tacitly know** the note doesn't work because of the external standard of **relative pitch** — in the key of B you can use G# minor, F#, E, but an **A major** and "you're cooked"; **A♭ minor** works.

---

## 5. Why Taste Matters

### 5.1 Personal
- He personally wants **good taste** and to do things people like.

### 5.2 Business: perceived value → profit
- If you build a product, taste makes it **look higher value than it actually is** → **profit**, and it influences **purchase intent**.

### 5.3 The Apple example
- Apple **shows you their taste**: "our new iPhone is made from the finest titanium," zooming in on machining and glass.
- This **raises perceived value**: it may cost ~$500 to produce, but the beautiful video makes you willing to pay far more.
- Taste raises how much we **rate** things → how much we'll **spend** — key for business, and personally.

---

## 6. How to Train Taste — Protocol 1: Immersion + Cues + Corrective Feedback

### 6.1 Taste is trainable — this is the payoff
- The point he most wants to land: **taste is trainable** — you can leave today and improve it, so the things you create are **tasteful and considerate**.

### 6.2 Full immersion
- You need **full immersion** (like Stephanie with aligned things, or the money experts with genuine cash).

### 6.3 Immersion alone is an echo chamber
- Immersion alone isn't enough — you could immerse in a **social-media echo chamber** where cronies **refeed your own bias** and you become "delusional" (jab at "any world leader").

### 6.4 Add valid cues
- You need **valid cues** — the ability to **look at things and judge them**.
- But cues alone make you "**God on a throne**" declaring good/bad — not enough.

### 6.5 Add corrective feedback
- The final element is **corrective feedback** — an authority (ideally **facts**) saying "this judgment was off, and here's the data."
- Source: **Dr. Kahneman and Klein**, 2009 paper *"Conditions for Intuitive Experience: A Failure to Disagree."*
- Formula: **immersion + valid cues + corrective feedback**.

### 6.6 The missing ingredient: humility
- Not in the science, added "for free": **humility** — the ability to look inside and say "maybe I don't have all the answers; I'm open to adjust."

---

## 7. Protocol 2: Externalize a Standard

### 7.1 Dieter Rams and Braun
- **Dieter Rams** was the main designer at **Braun** (razors, accessories, peripherals), known for design.
- He wrote **"Ten Principles of Good Design"**, which still affects the world today.

### 7.2 Write down your standard and consult it
- Create your own **standard** from the taste you've built, **write it down externally** ("this is what my values/taste are"), and **consult it** when you make something.

### 7.3 Jony Ive and Apple
- **Jony Ive** (Apple's chief of industrial design) was a **student of Dieter Rams' book** and did exactly this with the iPhone, MacBook, and more.
- He took Braun's razor design language and applied it to today's iPhone.

---

## 8. Protocol 3: Cross-Pollinate

### 8.1 Steve Jobs' typography class
- Whatever you think of him personally, **Steve Jobs had incredible taste** — the reason Apple is a trillion-dollar company.
- He dropped out of college but sat in **one typography class**, captivated by fonts ("the tail of the Y under the baseline").
- He **cross-pollinated** that taste into the MacBook, iPhone, and Watch.

### 8.2 Apply lessons across domains
- You won't get everything from a tech conference, but you can take lessons and apply them elsewhere — Tejas applies a "**pragmatic engineering mindset**" to his **sports club**.
- **Cross-pollination** is a great way to cultivate taste.

---

## 9. Taste Perceives Differently (Not Just Judges Better)

### 9.1 The one-sentence summary
- All protocols summarize to: **taste doesn't just judge better, it perceives differently entirely** — "you're not even playing the same game."

### 9.2 The call-to-action button experiment
- Mentoring junior engineers (front-end/React), he'd ask them to comment on the **"Buy Now" button**.
- **Juniors** comment on the **button itself**: "I like it, brand color, nice and big, good typography."
- **Seniors/staff** say almost nothing about the button — instead: "on a **slower network** this button doesn't show up at all," or "on some phones it's **below the scroll fold**."
- Trained taste judges **the environment around the button**, not just the button.

### 9.3 The harness parallel
- This is what an **AI harness** does — it controls the **entire environment** around the agent/model (he has a separate YouTube talk on **agent harnesses**).
- Apple captured this with the old **"Think Different"** campaign — i.e., **perceive differently = have taste**.

---

## 10. Pixar's Brain Trust

### 10.1 Creativity, Inc.
- **Pixar** (Toy Story, Finding Nemo) wrote **"Creativity, Inc."**, a memoir documenting their creative process.

### 10.2 The Brain Trust practice
- They'd gather **writers and filmmakers in a big circle** to comment on each other's work.
- Filmmakers were invited to bring their **"ugly babies"** — their **unfinished/beta** movies not yet refined.

### 10.3 Rule 1 — diagnose, don't prescribe
- Feedback was **not prescriptive** ("change this, do that") — instead "**I don't get it**," "this didn't taste right, something's weird."
- Rule: **no prescriptions, only diagnosis**.

### 10.4 Rule 2 — no hierarchy
- **No hierarchy** — directors and executive producers were present but **never pulled rank**; it was "my opinion, good luck," always up to the filmmaker what to do with it.

### 10.5 Why it works
- It has **all the ingredients**: **immersion** (looking at each other's ugly babies), **cues** (others give feedback), and **corrective feedback** (filmmakers take it on) — the full loop.
- Pixar used this exact process on **Finding Nemo** (he still remembers Dory, the blue fish).

---

## 11. Taste in Engineering: The External Standards

### 11.1 Performance and accessibility
- Almost every engineering discipline expresses taste **objectively** through **performance** and **accessibility** on the web.

### 11.2 Performance primitives
- **Input to Next Paint (INP)**.
- **Largest Contentful Paint (LCP)** — how long the largest portion of your site takes to load.
- **Cumulative Layout Shift (CLS)** — when something loads and pushes a button you're about to click somewhere else.
- These are measured with **numbers**.

### 11.3 Accessibility standards
- **WAI-ARIA** (WAI = **Web Accessibility Initiative**) and **WCAG** (Web Content Accessibility Guidelines) — external standards for whether your thing is tasteful.

### 11.4 The proposed standard: time to value
- His informal proposed standard: **time to done / time to value** — how fast someone gets work done with the software.
- Examples: on **Expedia**, how long to buy a ticket or book a hotel; on **Lufthansa**, how long to choose a seat without clicking through unwanted insurance offers.

### 11.5 "Milliseconds make millions"
- Google's article **"Milliseconds Make Millions"**: a **100-millisecond (0.1s) improvement** raises **conversion rates by significant orders of magnitude** — freely available on **web.dev**.
- Taste is **literally the difference between slop and value**.

---

## 12. Demo 1 — Streaming (Time to Value)

### 12.1 The old way
- (Everyone in the audience has used an AI-generation app like ChatGPT.)
- The old way: send a request and **wait seconds/minutes** for the model to generate a **full blob of text** before it's sent over the network.
- Live demo ("write a short poem about Budapest") took **4.6 seconds** — "I would have closed the tab."

### 12.2 The new (streaming) way
- Same request, but streaming: text appears immediately — it **actually took longer** in total, yet **felt better** because you saw something on screen.

### 12.3 Time to value ≠ time to completion
- **Time to value doesn't mean objective time to completion** — here the objective time is worse.
- People want to **feel like their stuff matters** and is working (long waits make people open dev tools thinking something's broken — a failure mode).

### 12.4 The code difference
- **Old code:** get button → on click, get prompt + API key → `fetch` an AI service → **`await` turning the response into JSON** (the blocking step).
- **New code:** same setup, but **don't await JSON** — the response **body is a stream** of binary bytes.
  - Pipe it through a **`TextDecoderStream`** (binary → ASCII/English characters).
  - Get the stream's **reader**; in a `while (true)` loop, read — if **done**, break; otherwise **concatenate the value** (add a line on newlines).
  - **Append only the delta** (the changed characters) to `out.textContent`, not the full string.
- "Small difference, huge impact" — the name of the game with taste.

---

## 13. Demo 2 — MCP ("Bring the info to my house")

### 13.1 The pain of the modern web
- He doesn't enjoy using the web (living in Europe: **cookie banners**, "continue with Google," constant decisions).
- Demoing **Expedia / adidas.de**: sites make you make decisions before giving any value — "the web trains us to say no."
- The reason: **they weren't thinking of you** when they built it — they were avoiding fines or serving "business nonsense."

### 13.2 The Craft Conference site
- He **loves the Craft Conference website** (not obtrusive), but finds the agenda "quite a lot," especially on a phone (a bottom element "gives me anxiety" — said respectfully).

### 13.3 The idea: information comes to your house
- The web makes you **go to someone else's house** ("give me the website that lives here").
- What if the **information came to you** — no one else's carousel/cookie-banner decisions?

### 13.4 What MCP is
- **Model Context Protocol (MCP)** lets any AI app (ChatGPT, Claude, Cursor, Windsurf) connect to an **external MCP server** and receive context.
- The server provides **tools (callable functions), context, and prompt templates**.

### 13.5 Building an MCP server (~100 lines)
- Easy to make: create a new MCP server, **register a bunch of tools**, start the server, connect the transport — "just over 100 lines of code."
- Each tool has a **name, metadata, and a description** (the description is **how the LLM knows to call the tool**), plus a **function implementing the data retrieval**.

### 13.6 Connecting it to Claude desktop
- Adds his server to **Claude desktop** via **developer settings** — in 2026 you **edit a JSON file** ("I hope it gets better").
- Aside/jokes: Claude **doesn't quit after you click quit** ("they spy on you... you have to quit it twice... if Anthropic is listening, fix that").

### 13.7 The result — and what's lost
- He asks "**when is Banjo's talk?**" → the server queries the Craft site and returns **Banjo Obayomi's talk: "Beyond Vibe Coding: Building the Harness..."** — "that's all I want," no cookie banners.
- But something is lost: **the brand**. Craft has a logo, feel, and colors — "this has become **less human**"; we go to a filmmaker's movie **for their taste** — "I've lost their taste."

---

## 14. Demo 3 — MCP Apps (Bring the Taste Back)

### 14.1 MCP apps extend the standard with UI
- **MCP apps** let engineers extend their MCP server to include **UI they create**.

### 14.2 Registering an HTML resource
- Register a **resource** (like a big text file given to the LLM) — similar to a tool.
- Extra fields: a **URI** (an ID like `schedule://widget`, just a string to identify the resource) and a **MIME type** `text/html; profile=...mcp-app` telling ChatGPT "this is an MCP apps UI."
- The **content** is a big blob of **HTML** (`schedule-widget.html`) — plain HTML he wrote himself, styled with **Craft Conference branding**.
- Then create the server and **listen on a port**.

### 14.3 Connecting to ChatGPT
- Runs `npm run chatgpt`, **exposes his machine to the internet** via a tunnel endpoint ("please don't hack me").
- ChatGPT supports MCP apps: go to **chatgpt.com/apps → create your own**, name it "craft conf," paste the tunnel URL (no auth, though it supports **OAuth**), create it.
- ChatGPT does a **handshake** ("are you a real MCP server?") and connects.

### 14.4 The tasteful result
- Naively asking "who is speaking" is "lame" (a deliberate trap — one attendee was paying attention).
- The right way: **@-mention the MCP server** ("who is speaking at..." / "when is Titus's talk?") to tell ChatGPT to use his server.
- Result rendered **inside ChatGPT** with the **actual Craft Conference logo** and branded UI — e.g., "**Titus Winters, senior principal scientist at Adobe**," with the **yellow stage shown in yellow**.
- "**Tasteful UI inside my house** — I just prompt and get what I want, and I still maintain the taste of the author."
- Quick contrast (alt-tab between the plain vs. branded "when is Banjo's talk?") shows the difference — bringing **taste back into soulless AI**.

---

## 15. Close

### 15.1 Recap
- Taste begins at birth as **pattern-matching** → can go wrong (unconscious bias, prejudice, racism, ego) → refined with **external cues + corrective feedback** → becomes **quality taste**.

### 15.2 IBM and open-rag
- **~375,000 people** work at IBM; you can't have taste across the whole org, but his **small team** tries to.
- Their open-source project **open-rag** helps enterprise customers **operationalize their internal data** (NDAs, access rights) — e.g., a customer can **chat with last year's team call** (a video) and AI answers — done as tastefully as possible.

### 15.3 The commission
- "Go forth and create really **beautiful and tasteful things**."

---

## 16. Q&A

### 16.1 Q1 — Valid cues + immersion (clarification)
- Valid cues + immersion is like **money** — you look at genuine and counterfeit articles and judge them, as the Pixar people do.
- But **immersion + valid cues alone is not enough** — you need **corrective feedback from an authoritative source**.

### 16.2 Q2 — Since taste comes from immersion, should we teach students by reading and critiquing good code and systems?
- **Absolutely yes.**
- He brought his friend **Jonathan**, who'd never been to a tech conference — "beautiful to watch his taste grow" ("this talk I got this, that talk I got that").
- This is **why Montessori schools work** — you're exposed to **real cues**.

### 16.3 Q3 — the withdrawn question
- Someone submitted a question and left; the MC said it was **"too personal"** — so they wrapped up (audience laughter).

---

## People & References Cited

- **Tejas Kumar** — speaker; developer advocate for AI at **IBM**; HCI, Stanford; musician/former singing coach.
- **People:** Stephanie (his first creative director), Titus / **Titus Winters** (senior principal scientist at Adobe; corrected him on "anybody can make anything"), **Banjo Obayomi** (fellow speaker — "Beyond Vibe Coding"), Jonathan (his friend), **Dieter Rams** (*Ten Principles of Good Design*, Braun), **Jony Ive** (Apple), **Steve Jobs** (typography class), **Daniel Kahneman & Gary Klein** (2009 paper).
- **Companies/products:** Lufthansa (sponsor), IBM (open-rag), Apple (iPhone, MacBook, Watch, "Think Different"), Braun, Pixar (Toy Story, Finding Nemo), Vogue, Expedia, adidas.de, Google/web.dev, OpenAI/ChatGPT, Anthropic/Claude (Claude Code, Claude desktop), Cursor, Windsurf, Codex.
- **Papers/books/articles:** Kahneman & Klein, *"Conditions for Intuitive Experience: A Failure to Disagree"* (2009); Dieter Rams, *Ten Principles of Good Design*; Pixar, *Creativity, Inc.*; Google, *"Milliseconds Make Millions."*
- **Standards/tech:** INP (Input to Next Paint), LCP (Largest Contentful Paint), CLS (Cumulative Layout Shift), WAI-ARIA, WCAG (WAI = Web Accessibility Initiative), `TextDecoderStream` / streaming, Model Context Protocol (MCP), MCP apps (`text/html` mcp-app resources, URIs), OAuth.
- **Concepts:** taste as trainable, science-corrected pattern-matching; tacit judgment; external standards vs. internal bias; slop (2025 word of the year); perceived value → profit/purchase intent; immersion + valid cues + corrective feedback (+ humility); echo chamber; externalize a standard; cross-pollination; "perceives differently, not just judges better"; the button vs. its environment; AI harness controlling the environment; Pixar Brain Trust ("ugly babies," diagnose-not-prescribe, no hierarchy); time to value ≠ time to completion; "bring the info to my house"; preserving the author's brand/taste in AI UIs; Montessori-style learning by real cues.

---

*Video: https://www.youtube.com/watch?v=VlKTUq0pdL0 — Transcript via yt-transcript.sh; outline generated from the transcript.*
