---
title: "Living your best life as a platform engineer - Daniel Bolívar | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Daniel Bolívar (Stripe) on platform engineering as a human problem — two contrasting platform stories and three rules: no git-gooding, make correct easy and incorrect hard, and meet users where they are."
type: "reference"
tags: ["softwaredevelopment"]
---

# Living your best life as a platform engineer - Daniel Bolívar (Talk Outline)

> Daniel Bolívar (design-turned-engineer, 8 months as a platform engineer on Stripe's core front-end platform team) on how he's *trying* to live his best life — because "code will never love you, but your colleagues will hate you when you mess up their stuff."

---

## 1. Two Stories

- **"Oops, we built a platform" (Personio, 2022):** front-end engineers built a monorepo + a "front-end orchestrator" running **federated modules** at runtime. Hugely successful — ~25% faster web performance, thousands of duplicate lines deleted, deploy-to-visible time 15 → 3 min, and **people migrated willingly** — *because the builders weren't platform engineers* (they had real pains and had to use the thing, so they made it easy).
- **The prefetching project (Stripe):** experienced platform engineers had to speed up Stripe's most important surface using only platform levers. Moving data-fetching earlier worked, but the API required convoluted steps (wrap fetch → add to a prefetch list → swap components) → people got it wrong or regressed. A **well-crafted solution undermined by complexity** — the low of platform work.

## 2. Why Platform Is Different

- **Scale:** far fewer platform engineers than users (his team: 9 engineers, ~7 tools used by 500+ engineers; their Slack help channel is consistently top-5 in traffic, almost all "how do I..." questions). **Blast radius:** a product mistake is contained; a platform mistake can be a "nuke." The human component is the hard part.

## 3. Three Rules

1. **No git-gooding** (Dark Souls): don't force users to "get good" at your platform APIs — *you* already got good because it's your job. "Stupid"-seeming questions are opportunities to make things actually simple; **automate the getting-good** (linters, codegen, codemods — take the brunt of changes on the platform side).
2. **Make the correct easy and the incorrect hard** (ideally impossible): people gravitate to the simpler path no matter what the docs say, so the **correct path must be the default/easiest** — align *their* best with *yours*.
3. **Meet users where they are:** people want to *achieve more doing the same*, or *the same doing less*. New work must carry **clear, immediate, transparent value** — if you need them to do something new, be explicit about why and what they get.

## 4. Revisiting the Stories

- Story 1 succeeded because it inadvertently followed all three rules (trivial migration, no incorrect path, lots of value for little work) — then they **overcorrected**, forcing weird opinionated modularization for no user benefit (easy to get wrong, no value → disliked). Story 2's fix (in progress) follows the rules: **new APIs simpler than the old**, and the **correct path is the default** — collocate data as a GraphQL fragment, and platform "magic" (GraphQL manipulation + codegen + auto-linting) composes it upward to the route so you get **prefetching by default** just by doing what you'd normally do.
- **Takeaways:** the hardest part of platform (and software) is the **human component**; nurture relationships and understand how users build. "A good platform is like good UX — almost invisible." Q&A: balance invisible keep-the-lights-on work with **business-visible impact** for career growth; put an **LLM on your docs** to cut the question load; treat fellow engineers like end users, but remember they *can't leave* (so they'll find unhealthy workarounds if the platform fights them).

---

*Video: https://www.youtube.com/watch?v=bDTFO3r0aZ0 — Transcript via yt-transcript.sh; outline generated from the transcript.*
