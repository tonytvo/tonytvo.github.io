---
title: "Code Health Guardian – Artie Shevchenko | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Artie Shevchenko on scaling human code reviews without losing rigor — the knowledge feedback loop, cognitive debt, coding-first-AI-second, and small teams of owners."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Code Health Guardian – Artie Shevchenko (Talk Outline)

> Artie Shevchenko (author of *Code Health Guardian*) on the "new bottleneck" — **how to scale human reviews in the AI era without losing rigor or burning out.**

---

## 1. Why Humans Stay in the Loop — the Knowledge Feedback Loop

- The 2025 Nobel in economics (Joel Mokyr): 200 years of sustained growth required **prescriptive knowledge** (what to do) and **propositional knowledge** (why it works) to **continuously feed each other**. Before that: "engineering without mechanics" — technology **without understanding** → millennia of plateau.
- **LLMs are knowledge without understanding.** AI makes theory more accessible (strengthens the loop) but, **without a human in the loop**, risks a new plateau — sliding into "accepting whatever works." AI is a "**context-constructing harness for real intelligence**"; treat its output as something that helps *you* understand.
- Fun failures: Gemini insisting heat flows cold→hot; inventing a "clockwise" hiking loop that was actually counterclockwise with **invented trails** (jagged intelligence).

## 2. Software's Version — Intellectual Control

- Fred Brooks' three challenges (system, product, **maintaining intellectual control over complexity**) still hold — now over **larger volumes of complexity**. The Code Health Guardian's job is to **preserve the knowledge feedback loop** in the codebase.

## 3. The New Bottleneck & Cognitive Debt

- LinkedIn is polarized: "abandon reviews / specs are the new code" vs. "no cognitive surrender." Question: **can we keep rigor without being the bottleneck or burning out?**
- **Cognitive debt** = erosion of the team's shared understanding of the system — less visible than technical debt, possibly a bigger risk with agents. Mitigated by **doing** craft and **reviewing** others' craft — both challenged by AI.
- **Design docs/specs help but aren't enough** — reviewed docs ≠ reviewed code; taking specs to a "big up-front design" extreme fails.

## 4. Optimizing Step 2 — Author Reviewing AI Output

- Don't skip self-review ("don't be a jerk"). Cases:
  - **Small changes** → review feels rewarding/doable.
  - **Big but familiar/boring changes** → still relatively easy, with AI as a safety net (most changes fall here).
  - **Big non-trivial changes** → the hard case. AI makes it *harder*: **nobody built understanding by writing it**, reviewing is less fun (so we learn less), and **volume → review fatigue → LGTM rubber-stamping**.
- **Reviews are a muscle** — trainable but with real limits; AI suddenly forces *everyone* into high review volume. "No one does non-stop reviews well without becoming unhappy."

## 5. Coding-First, AI-Second

- For big non-trivial changes, flip the workflow: **you spike the change yourself**, hand it to AI with the spec, AI proposes improvements, you apply/review them one by one — now you're **perfectly positioned to review** because you already understand the solution.
- If you *do* start from AI output (option one is valid), **use AI to internalize** the solution (Anthropic research: done properly, AI-assisted review can tackle cognitive debt as well as writing it yourself). **Spec-driven "don't read it" is excluded** as a reasonable option.

## 6. Optimizing Step 5 — Peer Review

- **Skip peer review for low-risk changes** (internal tooling/experiments) with AI review as the safety net — the least controversial optimization.
- **Owners policy:** every file has **owners**; the more impactful (controversial) optimization is to let **owners rely on AI review only** (notify other owners, don't block). This works **only with small teams** — otherwise owners drown in others' PRs, you make everyone an owner (driven by bottleneck relief + owner "inequality"), and you get **context attrition** and loss of **conceptual integrity** (Fowler's mythical-man-month takeaway).

## 7. The Sustainable Strategy

- **AI reviews:** cheap → make them mandatory/automatic.
- **Big non-trivial AI change:** spike it yourself, then iterate on improvements with AI (practice your craft without slowing the team).
- **Every change must be understood** (understanding is the human's privilege); never send peers changes you didn't review.
- **Skip peer review** for low-risk changes and for **owners** (given AI LGTM; optionally require a human when AI flags issues).
- **Keep teams small**, with most engineers as owners (juniors excepted), plus classic best practices (design docs, small story-telling changes). *(The book also covers a code-complexity model, cut here for time.)*

---

*Video: https://www.youtube.com/watch?v=mHXm5j_tGrc — Transcript via yt-transcript.sh; outline generated from the transcript.*
