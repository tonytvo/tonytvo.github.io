---
title: "Responsibility Driven Design Revisited – Ian Cooper | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Ian Cooper reconstructs responsibility-driven design as DDD's missing modeling technique, then demonstrates roles, CRC cards, collaborations, and delegated control with a QuestWorlds contest runner."
type: "reference"
tags: ["softwaredevelopment"]
---

# Responsibility Driven Design Revisited – Ian Cooper (Talk Outline)

> At Craft 2026, Brighter maintainer Ian Cooper revisits responsibility-driven design (RDD), the object-modeling context that Eric Evans's *Domain-Driven Design* assumes. Cooper develops the vocabulary of roles, responsibilities, collaborations, contracts, stereotypes, neighborhoods, and control styles, then walks a QuestWorlds game runner through an eight-step CRC-card design exercise before connecting the technique to TDD, agile design, and coding agents.

## 1. Why DDD needs RDD

### 1.1 Speaker and route through the talk

- Cooper works on Brighter, an open-source .NET alternative to MassTransit and service-bus libraries.
- He will explain RDD's relationship to DDD, teach the method, apply it through a role-playing example, and connect it to agentic coding.

### 1.2 DDD focuses effort on business value

- DDD directs strong engineers toward the domain model rather than frameworks, controllers, libraries, and infrastructure.
- Evans's tactical material isolates the domain from technical “gubbins.”
- Strategic design decomposes a larger system into multiple domain models.
- Repository debates miss the point when they obscure the goal of infrastructure isolation.

### 1.3 Ubiquitous language crosses every artifact

- Operations, product, and development need a shared language for the domain.
- That vocabulary should appear in conversation, diagrams, Miro boards, code, and database schemas.
- Consistent terms allow software to express business understanding.

### 1.4 The Blue Book assumes an older conversation

- Many audience members practice DDD, but few recognize RDD.
- Evans explicitly says his design style follows responsibility-driven design.
- The Blue Book shows isolation and language but not a step-by-step way to turn a domain into objects.
- In 2004, Evans could assume readers were participating in the object-oriented design dialogue.
- Modern DDD adopters often lack that late-20th-century context.

### 1.5 RDD's published lineage

- Rebecca Wirfs-Brock and Brian Wilkerson published “Object-Oriented Design: A Responsibility-Driven Approach” at OOPSLA 1989.
- They followed it with *Designing Object-Oriented Software* in 1990.
- Wirfs-Brock and collaborators published *Object Design: Roles, Responsibilities, and Collaborations* in 2003.
- The 2003 book is available as a free PDF from Wirfs-Brock's website.

## 2. Begin with behavior, not data

### 2.1 The one essential takeaway

- RDD treats behavior as the most important aspect of a system.
- Begin by asking what the system must do, then assign those behaviors to objects.
- This order tends to reduce design churn.

### 2.2 Data-first design creates anemia

- Teams often identify stored information first and later ask how to manipulate it.
- The result is data-only classes attached to Entity Framework, Hibernate, or another persistence tool.
- A service layer then performs all meaningful work.
- Cooper says this anemic domain model is not genuine object orientation.

### 2.3 Behavior connects RDD and TDD

- Dan North's early test-driven/behavior-driven writing likewise centers observable behavior.
- Barry O'Reilly has recently advocated behavior focus at the whole-system level.
- Tests against business behavior align with objects designed around responsibility.

## 3. The foundational vocabulary

### 3.1 Responsibility: know, do, or decide

- A responsibility is an object's behavioral obligation.
- **Know** responsibilities retain valuable domain facts or state.
- **Do** responsibilities execute business logic, such as tax or service-fee calculation.
- **Decide** responsibilities choose a branch or orchestrate a workflow.
- Responsibilities inspire methods but are not merely method names.

### 3.2 Role: a related responsibility set

- A role groups responsibilities behind an interchangeable abstraction.
- A `Pricer` may sum a basket, calculate tax, and calculate a service charge.
- Different market-specific pricers can implement the role for different tax regimes.
- One object may play several roles, such as pricing and checking stock.
- Interfaces and abstract base classes commonly express roles.

### 3.3 Object: implementation of roles

- An object combines state and behavior while hiding implementation details.
- Public behaviors expose only what collaborators need.
- Objects communicate by message passing, implemented as method calls.
- Dynamic dispatch substitutes concrete behavior within a role.
- Composition lets an object delegate to contained collaborators, like a car using its engine and gearbox.

### 3.4 Resource and activity objects

- Resources are things the business cares about and asks the system to manage.
- Activities represent important flows or workflows.
- Knowing usually concerns resource or activity state.
- Doing manages resources or advances work.
- Deciding most often selects the next workflow step.

### 3.5 Collaboration and contract

- A collaboration occurs when two or more objects interact.
- Each party sends requests and promises behavior in return.
- Preconditions and postconditions can formalize those semantic promises.
- Eiffel supports contracts directly; Java and .NET have library approaches.
- The contract is broader than a type signature—it describes the meaning of the interaction.

## 4. Three design principles

### 4.1 Maximize abstraction

- Start with domain roles and obligations rather than concrete classes or frameworks.
- Keep candidates provisional until the behavior is understood.

### 4.2 Distribute behavior

- Avoid god objects and service layers that manipulate passive data.
- Give several key objects meaningful work.
- Distribution creates collaborating specialists rather than one procedural center.

### 4.3 Preserve flexibility

- Hide implementation details behind narrow public behavior.
- Collaborators should depend on promises, not internal representation.
- Encapsulation makes a responsibility implementation replaceable.

## 5. The six useful stereotypes

### 5.1 Information holder

- Knows, provides, or derives information.
- Entities, value objects, aggregates, commands, events, DTOs, and sensor measurements can play this stereotype.

### 5.2 Structurer

- Maintains relationships among objects and facts about those relationships.
- Lists and maps are simple structurers.
- Repositories structure access to persistence.
- Aggregates structure information holders within a transactional boundary.

### 5.3 Service provider

- Performs a computing or domain service.
- Parsers, factories, message handlers, HTTP handlers, entities, value objects, and domain services may qualify.

### 5.4 Coordinator

- Reacts to an event or request by delegating work.
- Message pumps, request dispatchers, and supervisor-worker supervisors are examples.
- A thin web “controller” is normally a coordinator in RDD vocabulary.

### 5.5 Controller

- Makes decisions and directs a workflow.
- Mediators, routers, state machines, and workflow engines are controllers.
- A web controller becomes a true controller only when it owns decision logic.

### 5.6 Interfacer

- Separates the domain from databases, HTTP, messages, cameras, or sensors.
- Facades also isolate one domain area from another.
- Gateways, forms, views, web pages, and sensor adapters are examples.

## 6. Neighborhoods and control

### 6.1 Object neighborhoods

- Designers reason about clusters rather than every object simultaneously.
- A module is a deep neighborhood with a narrow external surface.
- A facade protects internal collaborators from outside coupling.
- Pricing baskets and assigning courier jobs can evolve independently when their neighborhoods interact minimally.

### 6.2 Centralized control

- One object makes nearly every decision and directs all work.
- It accumulates coupling and trends toward a god object.

### 6.3 Dispersed control

- Decisions are spread without clear delegation points.
- The flow becomes difficult to discover and explain.

### 6.4 Delegated control

- Coordinators hand work to objects that own the relevant responsibility.
- Cooper prefers this balance of explicit flow and distributed behavior.

## 7. QuestWorlds contest-runner example

### 7.1 Product goal

- Cooper and friends play QuestWorlds remotely over video calls.
- The proposed website shares dice results and automates contest mechanics.
- A game master creates a session ID and shares it with players.

### 7.2 Contest input

- The GM defines the prize, resistance, and resistance target number.
- A player identifies a character ability and its target rating.
- Augments, hindrances, stretches, and situational factors modify values.
- These concrete types share the more general `Modifier` role.

### 7.3 Contest resolution

- The system rolls one D20 for the player and one for the resistance.
- A high result under the target generally wins; if both fail, the higher roll wins.
- It calculates victory or defeat and degrees of success.
- Benefits and consequences interpret the degree mechanically.
- Both GM and player receive the outcome.

## 8. Eight-step RDD exercise

### 8.1 Step 1 — Write a design story

- A design story is roughly two paragraphs, not requirements, acceptance criteria, or user stories.
- It names actors, their goals, and how the system supports them.
- It resembles a book-jacket or film-pitch summary.
- The QuestWorlds story uses the domain's ubiquitous language throughout.

### 8.2 Step 2 — Extract themes

- Themes identify major work, information flows, decisions, structures, and real-world things.
- The example yields session creation, contest framing, dice rolling, and adjudication.
- Themes provide areas in which to search for roles.

### 8.3 Step 3 — Find candidate roles

- Candidates remain deliberately provisional and are described by behavior.
- Names use verbs or domain noun phrases rather than technical patterns such as `Repository`.
- Examples include `Session Maker`, `Contest Runner`, `Contest History`, `Prize`, `Participant`, `Modifier`, `Result Calculator`, and `Outcome Adjudicator`.
- Player character and resistance both play `Participant`.
- Each candidate gets a one-sentence purpose.

### 8.4 Step 4 — Create CRC cards

- Traditionally each candidate uses a 3×5 index card.
- The front records name, purpose, and stereotype.
- The back is divided into responsibilities and collaborators.
- `Contest Runner` orchestrates a contest as a coordinator.
- `Outcome Adjudicator` interprets roll results.

### 8.5 Step 5 — Assign responsibilities

- Walk a use case such as framing a contest.
- For every required action or fact, ask whether someone must know, do, or decide it.
- Assign that obligation to the most suitable role.
- The adjudicator knows player and resistance results and calculates the outcome.
- The runner knows prize, participants, target numbers, and modifiers and runs the contest.

### 8.6 Step 6 — Sketch collaborations

- Say interactions aloud in the form “this uses that to do X.”
- The outcome adjudicator uses result calculators to obtain roll results.
- A result calculator uses a dice roller.
- Implied dependencies are written in the collaborator column.

### 8.7 Step 7 — Simulate with people and a ball

- Team members sit around a table and each holds interesting role cards.
- A soft object represents a message and is passed to the responsible role.
- Participants narrate the use case and hand off each request.
- If nobody owns `Prize`, the team immediately creates the missing card.
- The physical turn-taking prevents one loud designer from dominating and makes quieter expertise participate.

### 8.8 Step 8 — Revise and choose control

- Tear up and replace cards freely because paper makes rework cheap.
- Split roles carrying too much responsibility.
- Discover missing parameter concepts and model them as value objects rather than strings and integers.
- Select delegated control among the contest runner, adjudicator, and calculators.
- Repeat until the team can enact the whole narrative coherently.

## 9. What the exercise produces

### 9.1 A model and shared understanding

- The game discovers objects and their interaction paths.
- More importantly, everyone learns the domain model together.
- That communication benefit exceeds a solitary diagramming exercise.

### 9.2 Iteration refines ubiquitous language

- New insights expose missing domain concepts.
- Teams take placeholder names such as “thingy card” back to domain experts.
- They reconsider whether `Framer`, `Contest Runner`, `Referee`, or `GM` best matches domain speech.

### 9.3 CRC cards are agile, not big design upfront

- Kent Beck and Ward Cunningham created CRC cards in the same community that produced XP.
- Cheap cards and repeated simulation support iterative design.
- RDD is compatible with agile change rather than a frozen preimplementation model.

## 10. RDD today

### 10.1 Test behaviors rather than methods

- TDD should target meaningful role behavior rather than mirror individual methods.
- Responsibilities indicate the contracts worth testing.
- Behavior-first tests and behavior-first design reinforce each other.

### 10.2 LLM-assisted RDD

- Cooper expects LLMs to know RDD because its source material is widely available online.
- His GitHub repository contains an experimental command that guides an agent through the seven or eight steps.
- The agent can draft a design story and extract themes collaboratively.
- A team should still play the cards together because agent interaction does not create shared human understanding.

### 10.3 Final takeaways

- Model a domain story with CRC cards.
- Ask what each object should be responsible for.
- Write tests for behaviors, not methods.
- The host ends the session without Q&A because time has expired.

## 11. People & References Cited

### 11.1 People

- **Ian Cooper** — speaker and Brighter maintainer.
- **Eric Evans** — author of *Domain-Driven Design*.
- **Rebecca Wirfs-Brock** — principal author and teacher of RDD.
- **Brian Wilkerson** — coauthor of the 1989 RDD paper and 1990 book.
- **Dan North** — cited for behavior-focused testing.
- **Barry O'Reilly** — cited for system-level behavior focus.
- **Kent Beck and Ward Cunningham** — creators of CRC cards.

### 11.2 Works, tools, and concepts

- ***Domain-Driven Design*** — the “Blue Book” whose object-design context Cooper restores.
- **“Object-Oriented Design: A Responsibility-Driven Approach”** — OOPSLA 1989 paper.
- ***Designing Object-Oriented Software*** — 1990 RDD book.
- ***Object Design: Roles, Responsibilities, and Collaborations*** — free 2003 RDD book.
- **CRC cards** — candidate, responsibility, collaborator modeling cards.
- **QuestWorlds** — role-playing system used for the example.
- **Brighter, MassTransit, Entity Framework, Hibernate, Eiffel, Java, and .NET** — technologies mentioned in examples.
- **XP, TDD, DDD, and RDD** — related design and development traditions.

---

*Video: https://www.youtube.com/watch?v=ZRBit08FV6k — Transcript via yt-transcript.sh; outline generated from the transcript.*
