---
title: "Why New Processes Don't Fix Delivery – Marian Hartman | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Marian Hartman on why delivery is fragile despite smart people — friction, not motivation — and how tiny 'keystone behaviors' (recipes) beat big-splash initiatives."
type: "reference"
tags: ["softwaredevelopment"]
---

# Why New Processes Don't Fix Delivery – Marian Hartman (Talk Outline)

> Marian Hartman (creator of the "green path" behavior-first change method) on why delivery stays fragile even with smart engineers — because people make the **most sensible choice in the moment**, and the *work conditions* quietly steer them toward bad design.

---

## 1. Everyone Makes the Sensible Choice

- Analogy: slouching at a keyboard is sensible in the moment but bad long-term; a posture **brace** changes the environment so the right behavior needs no executive function (with invisible ripple effects on mood/motivation).
- Engineers do the same — **large commits** (the "wheelbarrow" tool encourages it), **avoiding flaky tests** ("a sundial in the shade" — wrong information), **leaving the broken thing** ("someone else will fix the dishes"), and **workarounds** (propping open the side door). Not laziness — **efficiency**.

## 2. Friction, Not Motivation

- When **all 5 / 50 / 500** people show the same behavior, it's a **work-condition (friction) issue**, not a training or motivation issue. The tell: **you put up signs and nobody reads them.**
- Fragility starts well before the visible break — it's the accumulation of tiny "door-prop" decisions cracking the glass until it shatters.

## 3. Big Splashes Don't Work

- The usual response is a **big splash** (announcements, a new architecture group, a formal security phase) — a giant boulder the "fish" (engineers) can't integrate into daily work.
- It's **not an information gap** (they're full of information/training) — the **structure** isn't set up to use it effectively, so they find workarounds.

## 4. Keystone Behaviors (leverage points)

- Intervene **upstream, in the actual work**, at the **smallest, most repeatable behavior** that shifts output — a **nudge** integrated in seconds/minutes without overhaul. Not in architecture (framing), not process (abstract, interpreted differently), not culture (a side effect) — in the **concrete steps**.
- Examples: **risk-aware commit notation** (one character flags risk so reviewers scan 4 risks, not a 20k-line PR — with Arlo Belshee); **peel-and-slice** for mock-free unit testing; **IDE extract-method** to steadily improve design.
- A more effective keystone has **more ripple effects** (commit notation → clearer communication → risk spotted → risk fixed).

## 5. Building a Recipe

- Template: **"[Signal] — you used to do X, now do Y"**, precise enough that people have **no questions** (get a grounded experience before they theorize).
- AI example (improve reliability of AI task completion): signal = about to free-form type in the CLI; **"write a workflow, not a prompt"** — have the agent draft a **process document**, review it, mark errors, iterate (treat your edits as normative but incomplete), commit, clear context, then run it. Consistent results instead of variable prompts.
- Engineering as a **bonsai** — never "done," constant small pruning; wait for big splashes and you get cataclysms.

## 6. Q&A Highlights

- **Who does this?** Whoever sees the problem and can talk to the people experiencing it (usually with managers + the affected engineers); needs someone the team respects, but a small right nudge earns "thank you."
- **Daily correction done well "looks like nothing"** (no overhead); long feedback cycles are the clue something's blocked.
- **Friction vs. motivation:** if *anything* would block the behavior, it's friction — fix that first.
- Most common mistake: recipes that are **too big/abstract** — "always be tinier."
- **Scale gradually** (one person → a few → a team → 10 teams) only after it runs smooth; be **context-aware** (commit-notation assumes engineers who know the risk; juniors usually pair).
- For "this is how we've always done it," have an honest conversation — resisters are often **guardians** protecting the legacy heartbeat, and become the first to adopt a small, trustworthy nudge.

---

*Video: https://www.youtube.com/watch?v=2Gh8FyCKVbk — Transcript via yt-transcript.sh; outline generated from the transcript.*
