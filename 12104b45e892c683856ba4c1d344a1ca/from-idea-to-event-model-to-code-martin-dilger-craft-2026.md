---
title: "From Idea to Event Model to Code – Martin Dilger | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Martin Dilger's hands-on guide to event modeling: five visual elements, four information-flow patterns, slice-level business rules, and a Ralph-loop workflow that turns a shared model into code."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# From Idea to Event Model to Code – Martin Dilger (Workshop Outline)

> At Craft 2026, *Understanding Event Sourcing* author Martin Dilger improvises a large, participatory workshop about moving from an idea to an event model and then generated code. He teaches five modeling elements and four reusable patterns, walks the audience through a Miro library model, demonstrates a JSON-to-code Ralph loop, and answers questions about legacy migration, planning, bugs, research, architecture, and nonlinear workflows.

## 1. Why the model comes before technology

### 1.1 A workshop larger than expected

- Dilger expected a workshop of 10–15 people, not a large headphone-wearing conference audience.
- He retains the workshop format: the audience will model with him during the 100-minute session.
- The buzzword-heavy subtitle combines event modeling, specification-driven development, and code generation.

### 1.2 Business problems are not technology problems

- Engineers naturally reach for technical solutions.
- Dilger's book is really about solving business problems with business experts, not merely event sourcing.
- Business experts cannot validate a conversation framed only in implementation technology.
- Across successful and failed projects, he identifies communication and requirement clarity as the decisive difference.

### 1.3 Developer understanding—and now AI understanding—reaches production

- Dilger repeats the warning that a developer's understanding reaches production, not the business's original knowledge.
- AI adds a third interpretation between business intent and deployed behavior.
- Teams respond by producing large markdown specifications but abandoning mature code tooling.
- The result can be unmaintainable prose with no equivalent of IDE feedback.
- Dilger proposes a shared, visual language that business people, engineers, and AI can all interpret.

### 1.4 Event modeling as the shared language

- Dilger discovered event modeling in 2021 and has used it for four years.
- He works with its inventor, Adam Dymitruk.
- It supports domain-driven design's ubiquitous language without requiring participants to discuss technology.
- A whiteboard and sticky notes are sufficient; Dilger generally uses Miro.
- He claims the basics can be explained to a five-year-old in five minutes.

## 2. The five elements

### 2.1 Event: new information

- An event is something that happened in the business, such as “Customer Registered” or “Order Placed.”
- It is written in the past tense.
- It is not inherently an event-sourcing or event-driven-architecture artifact.
- Its storage as a database row or event-store record is an implementation choice outside the model.

### 2.2 Command: an intent

- A command expresses something someone wants to happen, such as “Register Customer.”
- Successful execution produces one or more events.
- The command-to-event relationship makes intended state change explicit.

### 2.3 Read model: information put to use

- A read model shows how existing information is interpreted for a purpose.
- It answers who uses which information and why.
- It makes the source of every displayed value visible.

### 2.4 Screen: the user's interaction

- Screens show what a user sees and does at each step.
- They distinguish event modeling from approaches such as event storming.
- Dilger insists on deliberately ugly screens that take no more than two minutes to sketch.
- Low fidelity encourages business discussion and prevents premature design polish.

### 2.5 Automation: an unexplained side effect

- A gear symbol represents a step that happens without a user's click.
- It can stand for a cron job, agent, email sender, or other automatic process.
- The model describes the business-visible effect without explaining its technical mechanism.

## 3. The four patterns

### 3.1 State change

- A state change combines screen, command, and event.
- A user acts on a screen, the action sends a command, and successful handling creates new information.
- Example: clicking Reserve sends “Make Reservation” and produces “Ticket Reserved.”

### 3.2 State view

- A state view connects existing events through a read model to a screen.
- It documents exactly where the displayed reservation ID, email, or other value originated.
- Arrows expose information flow rather than leaving data availability implicit.

### 3.3 Automation

- The automation pattern combines a state view and state change without a user screen.
- It shows which prior information triggers an automatic step and which new information results.
- Sending an email after a reservation is a representative example.

### 3.4 Translation

- Translation brings information from another system into the modeled system.
- It makes cross-system dependencies and ownership visible.
- Together, the four patterns can describe the information flow of any business system Dilger has encountered.

## 4. Timeline, slices, and business rules

### 4.1 One left-to-right timeline

- Participants place events in chronological order from left to right.
- The layout reads like a story for business experts, developers, and multimodal AI.
- Arrows allow a reader to trace every piece of information through that story.

### 4.2 Slice the timeline into isolated requests

- Each process step becomes a small slice around one request or automatic action.
- Dilger's slices are smaller than the vertical slices associated with Jimmy Bogard.
- Slices communicate only through events and can be developed independently.
- The result resembles Lego: add another brick without reopening stable bricks.
- Early slicing exposes “XL” backlog items before teams pretend they can estimate them.

### 4.3 Given/when/then captures the hidden rules

- Each slice records current information as `given`, an action as `when`, and resulting information as `then`.
- A seemingly simple step can conceal 30 business rules.
- Dilger asks business experts at least three times per slice whether more rules exist.
- “There are no rules” is almost never true.
- The scenarios become precise implementation and test specifications.

### 4.4 Information completeness

- Every arrow must carry information that exists at its source.
- During the library exercise, adding ISBN only to the event turns an arrow red because no prior element supplied it.
- Adding ISBN to the screen restores completeness.
- A few red arrows are cheap to repair in a model and expensive to discover after budgets and implementation plans are fixed.

### 4.5 Chapters and swim lanes

- Swim lanes identify actors, teams, or systems such as product, cart, checkout, and order.
- They reveal cross-team information needs and coordination points.
- “Chapters” group slices into workflows, like chapters grouping a book's story.
- The finished model becomes both system blueprint and project map.

## 5. The repeatable workshop sequence

### 5.1 Step 1: brainstorm past-tense events

- Eight to ten participants normally spend about ten minutes generating facts.
- The only rule is to phrase events in the past tense.
- A short session can produce 100 events; 300 events against a two-week deadline immediately exposes unrealistic scope.

### 5.2 Step 2: storyboard the events

- Participants identify the first and last event, then fill and order the interval.
- Duplicate concepts with different names prompt a ubiquitous-language discussion.
- Disagreement between current and desired ordering reveals business knowledge rather than workshop failure.

### 5.3 Step 3: sketch the screens and automations

- Ugly screens turn the timeline into a cheap prototype.
- Gear symbols locate automatic price, stock, or notification processes without specifying implementation.
- “This is not what we want” is valuable because the team has invalidated an idea before coding it.
- “We do not need to build anything” is even better when a process change solves the problem.

### 5.4 Step 4: add commands, read models, and attributes

- Commands explain each intended change.
- Read models identify the information needed on every screen.
- Attributes begin defining business concepts such as a product.
- Missing data may reveal an external team with a three-month backlog while alternatives remain cheap.

### 5.5 Step 5: define swim lanes, scenarios, and chapters

- Teams and systems receive swim lanes.
- Every slice receives given/when/then rules.
- Related slices are grouped into chapters or workflows.
- The complete board is sufficient to guide implementation.

## 6. The live library exercise

### 6.1 A conference-scale Miro board

- Audience members join a shared Miro board, potentially making it Dilger's largest modeling workshop.
- They brainstorm events such as “Catalog Entry Created,” “Book Archived,” and “Book Sent for Repair.”
- They then order those events into a timeline.

### 6.2 Librarians disprove the ISBN assumption

- Dilger sketches a create-catalog-entry screen with title and ISBN.
- In a previous version of the exercise, real librarians rejected his assumption that ISBN uniquely identifies a book.
- They explained for half an hour that ISBN is not unique and is a broken identification system.
- The anecdote shows why business experts must challenge apparently obvious data assumptions.

### 6.3 Isolating “Create Catalog Entry”

- The screen supplies title and ISBN.
- The `Create Catalog Entry` command expresses the administrator's intent.
- `Catalog Entry Created` records the result.
- Completeness checks verify that every event attribute came through the screen and command.
- The prepared model identifies an administrator actor but still lacks some rules and data, illustrating that modeling is iterative.

## 7. Real-world model and blueprint architecture

### 7.1 The German legal-system example

- Dilger shows a large production event model for a legal-domain company he owns.
- One slice creates a case and includes law-firm ID, name, and billing type.
- One command produces both “Case Created” and “Billing Type Assigned.”
- The model was developed by three team members with many business experts over several weeks.
- Clarifying difficult questions early still made delivery faster than conventional implementation-first work.

### 7.2 The model doubles as task management

- Each slice carries a state such as planned, in progress, implemented, or production.
- Green slices on the board are already implemented.
- Developers and agents update slice state when starting and finishing work.
- Planning, specification, delivery status, and business knowledge therefore remain in one source of truth.

### 7.3 One code package per slice

- Each slice maps to a package following a predefined blueprint architecture.
- Repeated structure turns implementation into “painting by numbers.”
- Dilger estimates modeling as roughly 80% of the work and coding as 20%, with AI reducing the latter further.
- The event model is technology-agnostic even though a build kit may target Axon/JVM, Kotlin, Node, or Supabase.

## 8. Model-to-code agents

### 8.1 Export standardized JSON, not prose

- The Miro model exports to a standardized event-modeling JSON structure.
- The JSON includes slice type, name, elements, dependencies, scenarios, and status.
- Adam Dymitruk and Dilger are working toward a format understood by event-modeling tools.
- A screenshot can also be given to an agent to reconstruct the JSON.
- Dilger does not maintain a parallel markdown specification.

### 8.2 Skills encode each blueprint

- An agent skill explains how to implement a state-view, state-change, or automation slice.
- Build kits provide concrete blueprints for Node, Supabase, Kotlin, and Axon.
- The workshop audience chooses Java, so Dilger demonstrates an event-sourced Axon application.
- CRUD implementations are also possible; event sourcing merely has a particularly direct mapping.

### 8.3 Slices constrain context

- An agent needs the current slice, the blueprint, and accumulated project lessons—not the entire system.
- This avoids million-token context windows.
- Cheap or local models can handle narrowly specified work.
- Independent slices permit multiple agents or developers without the coordination penalty of a tightly coupled backlog.

## 9. The Ralph loop

### 9.1 Planned slice to completed slice

- A small Bash script repeatedly asks an agent to find a slice in `planned` state.
- The agent claims it, implements backend and optionally frontend code, and marks it done.
- An index of slice statuses acts as the backlog.
- A back channel can update the Miro board so implementation state remains visible.

### 9.2 Record and compress learning

- Each iteration appends observations, created classes, and failed approaches to `progress.txt`.
- An instruction compresses those observations into `agents.md`.
- The next iteration reads this repository-owned memory.
- Dilger deliberately does not depend on Claude's private memory feature.

### 9.3 Reset context after every iteration

- Each slice starts with an empty conversational context plus accumulated project lessons.
- Ordinary long chats become confused as unrelated context accumulates.
- The reset makes each iteration cleaner while the explicit memory makes the worker progressively better informed.
- Dilger identifies context clearing as essential to the loop.

### 9.4 The live demo's false start

- Dilger starts the Java loop for up to 1,000 iterations and marks “Create Catalog Entry” planned.
- Claude eventually assigns it to a backend worker.
- It then reports that the implementation already matches the specification because Dilger forgot to reset his rehearsal project.
- He also starts a Node loop, demonstrating that implementations can run in parallel.
- The existing generated code still shows the promised mapping from JSON specification to blueprint structure.

## 10. Q&A

### 10.1 How are learnings persisted?

- The agent writes iteration details to `progress.txt`.
- The loop compresses them into `agents.md`, which every fresh context reads.
- This is an explicit, versioned memory-management system.

### 10.2 How do you migrate a large CRUD system to event sourcing?

- Dilger first points an agent at the legacy repository with instructions to extract an event model.
- The team validates that recovered model.
- Its output can then drive generation of the replacement event-sourced system.
- He has published a webinar example and prompt for this workflow.

### 10.3 Are we returning from just-in-time to upfront planning?

- Dilger argues agile teams moved too far toward skipping design and working sprint by sprint.
- Upfront planning is useful when the plan remains changeable.
- Event-model slices localize most requirement changes to one or two units.
- A rigid six-month plan will fail; a slice-based plan can embrace inevitable change.

### 10.4 What if agents invent lessons to record?

- Dilger frames learning persistence as managed project memory.
- He wants relevant lessons in the repository's `agents.md`, not hidden in a vendor memory store.
- The explicit artifact makes the memory inspectable and controllable.

### 10.5 How are systems without screens modeled?

- Fully automated and agent-based systems use sequences of gear symbols.
- Each gear is still one information-processing step on the timeline.
- Screens are optional; explicit information flow is not.

### 10.6 What about uncertain research projects?

- Event modeling does not require the entire system to be known upfront.
- A team can model four clear slices, implement them, learn, and then extend the board.
- Small-scope iteration makes the method suitable when later work is uncertain.

### 10.7 Did Dilger event-model the agent loop?

- Yes; he says he takes the method to extremes.
- He has even attempted to event-model a vacation, although his wife declined to participate.

### 10.8 How are bugs fixed?

- Return to the model and identify the affected slice.
- A bug usually reveals a missing business rule, represented as another given/when/then scenario.
- Set the corrected slice back to `planned` and let the loop regenerate or adjust it.
- Slice isolation limits the blast radius.

### 10.9 Is event modeling another clean architecture?

- No; the model itself is implementation-agnostic.
- The blueprint architecture is a separate technical decision.
- Different slices may use different implementations, including one serverless Lambda within an otherwise monolithic system.

### 10.10 When does event modeling not work well?

- It is designed for information systems that transform information from an initial to a later state.
- It adds less value for low-level algorithms, microprocessor work, and deeply internal computational details.

### 10.11 How do real teams use it?

- Teams collaboratively maintain the board, define slices, and update their states.
- Dilger says the real workflow is the same one demonstrated, not a simplified presentation-only version.

### 10.12 How are nonlinear workflows represented?

- The method keeps each individual timeline linear but allows many timelines.
- Alternative events start new branches: “Reservation Failed” can open a failure-handling timeline beside “Reservation Placed.”
- Each branch can contain one error screen or a longer recovery process.

### 10.13 Where do technical details such as S3 uploads go?

- Business experts can understand the business action “file uploaded” without seeing S3, presigned URLs, or virus-scanner implementation.
- Reusable technical decisions belong in the blueprint architecture.
- If a technical workflow genuinely needs modeling, it can occupy a dedicated technical timeline.
- Dilger rarely needs that separation because business experts understand more when the system is explained in their terms.

## 11. People & References Cited

### 11.1 People and methods

- **Martin Dilger** — speaker and author of *Understanding Event Sourcing*.
- **Adam Dymitruk** — inventor of event modeling and Dilger's collaborator on the standard format.
- **Jimmy Bogard** — referenced to distinguish Dilger's smaller slices from conventional vertical slices.
- **Event modeling** — the shared visual language taught in the workshop.
- **Event storming** — related method contrasted particularly around use of screens.
- **Domain-driven design** — source of the ubiquitous-language goal.
- **Behavior-driven development** — source of given/when/then scenarios.
- **Ralph loop** — repeated agent execution with explicit learning and context resets.

### 11.2 Tools and technologies

- **Miro** — Dilger's usual collaborative modeling board and the live workshop tool.
- **JSON event-modeling format** — machine-readable representation used instead of markdown.
- **Claude Code** — agent shown in the live loop.
- **Axon Framework** — prominent JVM framework targeted by the Java event-sourcing build kit.
- **Node, Supabase, and Kotlin** — other available build-kit targets.
- **AWS S3 and serverless Lambda** — examples discussed in the architecture Q&A.
- **`progress.txt` and `agents.md`** — explicit iteration log and compressed repository memory.

---

*Video: https://www.youtube.com/watch?v=3I8Cl1s6yPE — Transcript via yt-transcript.sh; outline generated from the transcript.*
