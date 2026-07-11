---
title: "Responsibility Driven Design Revisited – Ian Cooper | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Ian Cooper on the missing half of DDD — Responsibility-Driven Design: roles, responsibilities, collaborations, CRC cards, and a role-playing worked example."
type: "reference"
tags: ["softwaredevelopment"]
---

# Responsibility Driven Design Revisited – Ian Cooper (Talk Outline)

> Ian Cooper (Brighter, .NET) recovers the context DDD assumes but no longer teaches: **Responsibility-Driven Design (RDD)** — the technique for turning a domain into an object-oriented model.

---

## 1. Why RDD Is the Missing Half of DDD

- DDD focuses good engineers on the **domain model** (isolated from infrastructure) via **ubiquitous language**. But the Blue Book (Evans, 2004) never explains **how to produce an OO representation** — because it assumed everyone knew **RDD** (Wirfs-Brock & Wilkerson, OOPSLA 1989; *Object Design: Roles, Responsibilities, and Collaborations*, 2003 — free PDF). Newcomers to DDD lack that context.

## 2. The Core Idea — Focus on Behavior

- The one takeaway: **the most important thing to understand is behavior**, not data. Starting with data → the **anemic domain model** (data classes + a service layer). Start with **what behaviors the system needs**; objects encapsulate them (aligns with behavior-focused TDD and Barry O'Reilly's system-level view).

## 3. Vocabulary

- **Object** = implementation of one or more **roles**; **role** = a set of related **responsibilities** that can be used interchangeably; **responsibility** = an obligation to **know**, **do**, or **decide** (info, business logic, conditional/workflow); **collaboration** = objects interacting; **contract** = the promises of that interaction.
- Principles: **maximize abstraction, distribute behavior** (no god objects), **preserve flexibility** (implementation hiding). Objects are usually **resources** (things the business manages) or **activities** (workflows).
- **Stereotypes** (common structuring roles): information holder, structurer (collections/repositories/aggregates), service provider (parsers/factories/handlers/domain services), coordinator (reacts by delegating — an HTTP "controller" is usually a *coordinator*), controller (decides & directs — mediator/router/state machine), interfacer (facades/gateways/views isolating domain from tech). **Control styles:** centralized (bad, coupling), dispersed (confusing), **delegated** (preferred).

## 4. Worked Example — a Role-Playing Game Runner

Applying RDD to a Quest Worlds contest runner:
1. **Design story** — two paragraphs (actors, what they want, how the system supports them) in **ubiquitous language** — not requirements.
2. **Themes** — the big ideas (session creation, contest framing, dice rolling, adjudication).
3. **Candidates** (roles, held loosely) — named by behavior with domain language (session-maker, contest-runner, modifier, outcome-adjudicator…), each with a one-line purpose.
4. **CRC cards** (3×5): name + purpose + stereotype on front; **responsibilities + collaborators** on back.
5. **Assign responsibilities** by walking use cases (know/do/decide → assign to a role).
6. **Sketch collaborations** ("this uses that to do X" → collaborators column).
7. **Simulate** — sit around a table, deal the cards, pass a ball, walk the use case; tear up cards freely (cheap rework), split over-weighted responsibilities, discover missing value objects (kills primitive obsession). Crucially, it builds **shared team understanding** and stops one person dominating.
8. **Choose control style** (delegated), iterate, and refine names in ubiquitous language.

## 5. Closing

- Pairs well with **TDD against behaviors, not methods**. It's from the same era/people as **CRC cards** (Beck & Cunningham) and XP — iterative, not big-design-up-front. LLMs know RDD (it's all over the training data); Cooper has an experimental agent command on his GitHub to walk the 7–8 steps — but you lose the **communication** benefit of playing the game together, so do both.
- Takeaways: **model a story with CRC cards; ask what an object should be responsible for; write tests for behaviors, not methods.**

---

*Video: https://www.youtube.com/watch?v=ZRBit08FV6k — Transcript via yt-transcript.sh; outline generated from the transcript.*
