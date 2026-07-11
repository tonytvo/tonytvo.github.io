---
title: "Modernizing legacy through thousands of contextual tools per system - Tudor Girba | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Tudor Girba on moldable development — turning code reading into engineering by building thousands of small contextual tools, as tests once industrialized testing (live-demoed on LifeWare's 35M-line system)."
type: "reference"
tags: ["softwaredevelopment"]
---

# Modernizing legacy through thousands of contextual tools per system - Tudor Girba (Talk Outline)

> Tudor Girba (CEO of feenk) on making legacy work comfortable and efficient by creating **thousands of contextual tools** — doing for **code reading** what automated tests once did for testing.

---

## 1. Tests Are Little Tools

- A test is a tiny tool that runs functionality and compresses it to green/yellow/red. Before automation, **manual regression testing didn't scale** ("did you throw your mouse away? it's only rated for a few hundred thousand clicks"). On a **Wardley map**, testing evolved from manually-produced → **generated** information via a bit of coding, which let us have **coherent-model conversations** and **hypothesis-driven** (scientific-method) engineering. The enabler was a new **development experience made of little composable tests** — and all the processes built on "we can only test manually" simply disappeared.

## 2. The Unexamined Cost: Reading Code

- Developers read code **>50% of their time**, yet **no one talks about *how* they read** — so it's never been made explicit or optimized, despite being our single largest expense. Code reading sits where testing was 25 years ago (bottom-left of the map). Fix it the same way: change the word **"testing" → "tools"** — composable micro-tools answer the many other questions we have about systems.

## 3. Live Demo — LifeWare (a Swiss insurer)

- ~35M (up to 70M with all artifacts) lines; a **TDD by Example** case study (Kent Beck, 2002) that had 4,000 tests running in 20 min — now **150,000 tests still under 20 min** (would take 10 days on one machine), an early adopter of CD/trunk-based/cloud, now investing in **~2,000 little tools**. Their model: take only a customer's *data* (even magnetic tapes), throw away the old system, and **test-drive-design a whole new system** that reproduces **pixel-identical documents** — TDD applied to the entire business.
- Two problems demoed without leaving the IDE: (1) **business side** — 454 failing "comparison failure" tests grouped (36 share a cause: a CEO change altered all signatures); switch the *view* to see the highlighted document diff, take it to business, then **batch-accept** the refactor; (2) **ops side** — an 18-min (vs. expected 15) run: inspect the AWS cluster → worker → machine → task timeline → the slow test (a planted 5-min wait), edit and re-run in place, and the resulting **web app appears inside the environment** ("I don't go to tools, tools come to me"). The editor is the *last* thing you see, not the first.

## 4. Moldable Development

- A harder case (add Polish translations to *only* the admin interface): instrument one test case → find all involved translations via a query over **runtime + source** → build an ephemeral, framed-less tool → distribute across the cluster for full coverage. Large questions decompose into leaf questions, each answered by a **micro-tool/view** that the environment composes into narratives (some reused, some built from scratch — they **compound over time**).
- Two roles: the **stakeholder** ("anyone with a stake has the right to a question") and the **facilitator** who manufactures answers. Guiding metrics: **time-to-answer** (start here, drive it down) and **time-to-question** (the real bottleneck). "The **I** in IDE stands for *integrated* — every time you leave, the I has failed." The approach is **moldable development**; the tool shown is the free/open-source **Glamorous Toolkit**; he's writing *"The Rewilding of Software Engineering"* with Simon Wardley (moldabledevelopment.com). Legacy becomes something to **leverage for new value**, not just defensively modernize.

---

*Video: https://www.youtube.com/watch?v=DB5ZOGpkL9k — Transcript via yt-transcript.sh; outline generated from the transcript.*
