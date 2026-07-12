---
title: "Digital Whiteboarding for Developers - Susan Fung | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Susan Fung on using a digital whiteboard to visualize code — her origin story into software, the screenshot-and-link technique for investigation tickets, three teammate stories (Nha, Spencer, Muhammad), applying Llewellyn Falco's 'duplication coloring book' to find reusable front-end components, and a Q&A on legacy complexity, code-generated diagrams, nested functions, and tools."
type: "reference"
tags: ["softwaredevelopment"]
---

# Digital Whiteboarding for Developers - Susan Fung (Talk Outline)

> A **Craft 2025** talk (the last speaker on the pink stage) by **Susan Fung**, a software developer with 5+ years of experience who volunteers as an organizer for the Calgary Software Crafters and the Software Developers of Calgary, and mob-programs weekly with the Approval Tests ensemble. Her topic: how to **use a digital whiteboard to visualize your code**. The talk's own structure: (1) her origin story into software; (2) the struggle with investigation tickets and the whiteboard insight from her Sunday ensemble; (3) the screenshot-and-link technique and how it cracked a real ticket; (4) three teammate stories (Nha, Spencer, Muhammad); (5) applying the "duplication coloring book" to front-end component design; and (6) Q&A. She asks the audience to hold questions to the end and offers a slides QR code.

---

## 1. Origin Story: Becoming a Developer

### 1.1 The couch epiphany
- Over five years ago she felt "too comfortable" — get up, go to work, come home, watch TV.
- A good routine, but not **challenging** enough; she wanted something that made her think, wasn't routine, and was **fun**.

### 1.2 Remembering websites and learning Ruby
- She recalled making websites for fun in high school.
- She took an online course and learned about **automation and writing scripts in Ruby**.

### 1.3 The spreadsheet-to-PDF automation
- At work she spent **8 hours a month** converting **100+ spreadsheets to PDF**: open spreadsheet → File → Save as PDF → close — boring, tedious, repetitive.
- She wrote code to automate it, and it **worked** — exhilarating.

### 1.4 The manager's non-reaction
- She showed her manager; he asked "what's the big deal?" — she could have just taken a day off monthly and he wouldn't have noticed.
- But that code sparked a **sense of achievement** she'd never felt — the start of her passion.

### 1.5 Going full-time
- After a few years she decided software development was what she wanted full-time.
- Today she's a developer "having the time of my life," writing production code, on a great team, at Craft.

---

## 2. The Struggle & the Whiteboard Insight

### 2.1 Investigation tickets and vague senior advice
- She struggled a lot with **investigation tickets**.
- Seniors' steps **varied by ticket**; neither had a basic starting set — just "I look through the code and figure it out" (generic).

### 2.2 The "delete not successful" ticket
- She picked up a ticket to investigate a log message: **"delete not successful."**
- It had been appearing for **over a year** but, since nothing was broken, sat in the backlog.

### 2.3 Tracing the code and getting lost
- She found the method **`outputMessage`**, which throws "delete not successful."
- **Three methods** use `outputMessage`:
  - **`deleteInactiveCustomer`** — gets reviewing customers from the DB, adds an `inactiveCustomer` instance per review, removes the customer from the DB. Used by `findAndDeleteInactiveCustomers` → `deleteInactiveCustomersAPI` → an **endpoint**.
  - **`deleteAllOldOrders`** — used by `deleteOldOrdersAPI` → another **endpoint**.
  - Tracing the second, she forgot what the first did and **got lost** — too much code to keep track of in her head.

### 2.4 The Sunday Approval Test ensemble
- On Sundays she joins the **Approval Test ensemble** — a group writing code on **one computer** to learn from each other and deliver a new feature weekly.
- That Sunday: working on **loaders** (load an executable command into memory) and **savers** (save data from memory to storage).

### 2.5 Stuck on `verifyExecutableCommand` and "options"
- Several (including her) didn't understand what **options** were.
- **Llewellyn** (a technical coach teaching people to code for 20+ years) explained: options **chain commands together** (set reporters, file extensions, scrubbers, any commands).
- Confusion: could they "call this executable command"? No — "that is the command you are testing; you can't call the command you're testing."
- **Tony** pushed back (if options chain commands, why not this one?) — still no understanding; a **communication gap** and growing frustration.

### 2.6 Jacqueline draws it out
- **Jacqueline** said, "I like to see my code in pictures — can I draw this out?"
- Her diagram: options let you **set a reporter** to check against **two different diffs** — one for the **command being sent**, one for the **results received** — so if something breaks you can tell **which side** the problem is on.
- It "made so much more sense": drawing **took the cognitive load off the brain and put it on the screen** so the connections were clear.
- Once everyone understood options, they **finished and delivered the feature** that day.

---

## 3. The Screenshot-and-Link Technique

### 3.1 The mechanical steps
- Back at work, she applied Jacqueline's technique to her tangle of code:
  1. **Screenshot** a piece of code (Mac: **Command-Shift-4**).
  2. Place it on the **whiteboard**.
  3. Draw a **box** around the method it uses.
  4. **Link** it to that method.
- **Repeat** for every piece of code until the whole thing is on the whiteboard.

### 3.2 What the picture revealed
- The map showed **three endpoints**, all using `outputMessage`, which throws "delete not successful."
- Open question: what uses those **three endpoints**?

### 3.3 Finding `scheduleTask`
- Searching all repositories, she found **`scheduleTask`**, which uses **all three endpoints**.
- Her manager: "We don't need these tasks anymore — you can **deprecate the entire system**." A solution.

### 3.4 Sharing the solution with the team
- She presented the whiteboard: three endpoints that are **dead**, so the whole system is dead; and `scheduleTask`, which uses the dead system, is therefore **also dead**.
- Positive feedback was about **how** she presented it — assembled so everyone could easily understand.
- She then heard other developers' whiteboard stories and realized the technique helped others too.

---

## 4. Team Stories

### 4.1 Nha — collaboration and the big-picture overview
- Before remote work, Nha hosted **in-person group brainstorming** at the whiteboard: the whole team drew the **code flow**, showed **how data was consumed**, added **clarifying notes**, and marked **where new code should go** — great for the **big-picture project scope**.
- Going **remote**, they **lost the tool**; a notebook let her draw diagrams but she was "always explaining, explaining" and couldn't **show** what she saw.
- She wished for a shared tool for notes and overview; Susan's whiteboard reminded her they could **collaborate as a team again** — "can you show us how?"

### 4.2 Susan's video demonstration
- Taking Nha's suggestion, Susan made a **video demonstration** (screenshotting and linking code).
- Sharing it surfaced even more developer stories.

### 4.3 Spencer — systems thinking and root cause
- Spencer ("the master of complexity") used the whiteboard for **systems thinking** to show how **microservices** connect.
- A quality engineer kept finding bug after bug (an "endless loop of finding and fixing").
- His whiteboard: a **gateway** connected to **restaurant** and **customer**, connected to the **database**.
- The **root cause**: the method **`resetUserPassword`** was **not properly connected to the database**.
- Fixing it removed **all** the bugs; the QE gave the green light to release to production.

### 4.4 Muhammad — scoping a first ticket
- Muhammad (another team), new, was given a ticket to **move code from one endpoint to another** — sounds easy, but he didn't know the code and feared breaking things (lots of anxiety).
- After Susan's video, he **drew a diagram** showing the **current flow** and realized he only needed to move **one piece of code** to the **new flow** — "so easy."

### 4.5 The three benefits and quick adoption
- **Nha:** communication/collaboration and the big-picture project scope.
- **Spencer:** connecting the dots — how microservices connect and where the problem is, to fix and ship.
- **Muhammad:** drawing out code to see exactly what to do to complete a ticket.
- The **biggest benefit:** how **quickly** people picked it up — "second nature" almost immediately.

---

## 5. The Duplication Coloring Book for Front-End

### 5.1 The move into front-end
- Her back-end team was chosen to give the **mobile app a facelift** — their first venture into front-end, and their chance to do end-to-end testing in the app (usually the mobile team's job).

### 5.2 The initial (naive) scope
- Designers had spent a year on new designs; the team's first task was to **scope the work**.
- Initial thought: **build each screen individually** based on navigation — two main screens leading to sub-screens.

### 5.3 The tech lead's challenge
- **Kimari** (a tech lead assigned to mentor them) challenged this: in front-end, **design consistency matters** — a component must look **exactly the same across all screens**.
- Pulling out a repeated component shows it's the **same component reused everywhere**; build it once and updating the design later happens in **one spot** and propagates.

### 5.4 The duplication coloring book — origin
- Susan recognized this as the **duplication coloring book**, an exercise by **Llewellyn Falco** (the technical coach mentioned earlier).
- Original purpose: identify **duplicate code** to extract into its own method — find duplication, highlight differences, extract with required **parameters**.
- Applied here to **designs** to find **reusable components**.

### 5.5 Step 1 — box each duplicate piece
- Draw a **box** around each duplicated piece (e.g., each has a **placeholder text** and an **icon**).

### 5.6 Step 2 — color in the white space
- **Color the white space** to clearly see the duplication and confirm a **similar shape** across pieces (spacing becomes **CSS** for consistent formatting).

### 5.7 Step 3 — highlight the differences
- Use a **different color** for each differing element (e.g., placeholder text vs. icon) — the differences become the **information passed in** (the component's parameters).

### 5.8 Extract the component
- After coloring, **extract** the component (e.g., a **text field**) to be coded and reused across screens.

### 5.9 Second worked example — the card
- Applied to another design (dive-site cards):
  - **Box** each **card** (each has the **dive-site name**, **dates + cost**, and **details**).
  - **Color the white space** (spacing → CSS so every card has identical spacing/formatting).
  - **Color the differences** (name, dates+cost, details each get a color) → the info passed into the card component.
  - **Extract** the **card component** structure to build and reuse.
- Repeat until **all reusable components** are found.

### 5.10 Why the digital whiteboard mattered here
- It gave the tools to do the coloring exercise **digitally and remotely** — taking "coloring on paper" into a digital format so a team **spread across the country** could collaborate in one place.

---

## 6. Philosophy: In-the-Moment Work

### 6.1 10,000 words
- "A picture is worth a thousand words" — her team puts **all 10,000 words** on the whiteboard.

### 6.2 The whiteboard is ephemeral
- They use it for **in-the-moment work**; when done, it **goes away** — it is **not documentation** to keep and maintain.

### 6.3 Whiteboards aren't just for designers
- She's fortunate to have a digital whiteboard at work; friends elsewhere are told **whiteboards are only for designers** — she disagrees.
- It has helped her team immensely with **communication, collaboration, and big-picture project scope**; she invites others to share whiteboarding stories.

---

## 7. Q&A

### 7.1 Q1 — How to visualize the massive complexity of a legacy bank backend without it becoming an unreadable mess?
- **Simplify as much as possible.**
- She used to draw **everything** (time-consuming); now she **focuses on the pieces she needs** to present and work on with the team.
- Add more to the diagram **during discovery** only if needed — stay within the **scope of the ticket**.

### 7.2 Q2 — Have you tried writing code to generate diagrams instead of doing it manually?
- She tried, but struggled to **hold everything in her mind**.
- The whiteboard lets her not worry about what to remember — everything is written, and she can **move things around** when they change.
- The point is to **show others what she's seeing** — the flow — to start a discussion; easier than a Word doc or Confluence page.

### 7.3 Q2a — What if you're new to a codebase and don't understand the flow yet?
- That's exactly **how she started** whiteboarding — because she didn't understand the code.
- The screenshot-and-link video was her **trying to understand** how code connects; pulling out the pieces she needed made it clearer.
- While still learning, she had others **shoulder-check** her work — easier to **show** the code than to write it all down, and it **saves busy coworkers' time**.

### 7.4 Q3 — Do you take work from offline to online (or vice versa) — e.g., print a workflow, or scan a hand drawing back in?
- She hasn't had a reason yet — being remote, she does **everything on the whiteboard**.
- If needed, "probably as simple as taking a photo, emailing it to yourself, and putting it on the whiteboard."

### 7.5 Q4 — What apps/tools do you recommend besides Miro? Any favorites?
- Many exist: **Microsoft Whiteboard**, **Excalidraw**, **Draw.io / draw.io**.
- She recommends **playing around** with all of them; **Miro** is what she has available at work, so she uses it most.

### 7.6 Q5 — If a function uses a lot of nested functions, how do you visualize it simply?
- Something she still **struggles with**.
- **Focus on what matters**; at first she doesn't know what to focus on, so drawing everything makes a big diagram.
- Then she **steps back**, looks at the **paths**, **deletes what she doesn't need**, and focuses on what she needs.

---

## People & References Cited

- **Susan Fung** — speaker; software developer (5+ years); organizer for Calgary Software Crafters and Software Developers of Calgary; weekly Approval Tests ensemble.
- **Jacqueline** — ensemble member who first drew "options" on the whiteboard.
- **Llewellyn (Falco)** — technical coach (20+ years teaching coding); creator of the **duplication coloring book** exercise.
- **Tony** — ensemble member who pushed back during the "options" discussion.
- **Nha** — senior teammate; in-person whiteboard brainstorming, lost when going remote.
- **Spencer** — teammate ("master of complexity"); systems-thinking microservice map; found the `resetUserPassword` root cause.
- **Muhammad** — teammate on another team; used a diagram to scope his first ticket.
- **Kimari** — tech lead/mentor who challenged the "build each screen individually" approach.
- **Tools:** Miro (her work default), Microsoft Whiteboard, Excalidraw, Draw.io.
- **Concepts:** investigation tickets; the "delete not successful" log message; `outputMessage` / `deleteInactiveCustomer` / `deleteAllOldOrders` / `scheduleTask` call graph; mob/ensemble programming; loaders and savers; `verifyExecutableCommand` and "options"; reporters and diffs (command sent vs. results received); the screenshot-and-link technique (Command-Shift-4); cognitive offloading (brain → screen); deprecating a dead system; systems thinking / microservice connections; root-cause analysis; front-end component reuse and design consistency; the duplication coloring book (box duplication → color white space → highlight differences → extract with parameters); white space as CSS; ephemeral in-the-moment work vs. maintained documentation; "a picture is worth a thousand words."

---

*Video: https://www.youtube.com/watch?v=zTyT4fcyBu4 — Transcript via yt-transcript.sh; outline generated from the transcript.*
