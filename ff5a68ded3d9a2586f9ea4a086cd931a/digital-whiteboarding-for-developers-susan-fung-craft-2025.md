---
title: "Digital Whiteboarding for Developers - Susan Fung | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Susan Fung on using a digital whiteboard to visualize code — screenshot-and-link investigation, team stories, and applying the 'duplication coloring book' to find reusable front-end components."
type: "reference"
tags: ["softwaredevelopment"]
---

# Digital Whiteboarding for Developers - Susan Fung (Talk Outline)

> Susan Fung (software developer; mob-programs weekly with Approval Tests) on using a **digital whiteboard to visualize code** — a technique she picked up to survive investigation tickets.

---

## 1. The Struggle & the Insight

- New to a team, she picked up a year-old "delete not successful" log-message ticket and got **lost tracing the code** (too much to hold in her head — `outputMessage` used by three methods → endpoints). At the weekly Approval Test ensemble, when a verbal explanation of "options" failed, **Jacqueline drew it on a whiteboard** — which "took the cognitive load off my brain and put it on the screen." 

## 2. The Screenshot-and-Link Technique

- Back at work she **screenshotted each piece of code** (Cmd-Shift-4), placed it on the whiteboard, boxed the method it uses, and **linked it** — repeating until the whole call graph was visible. This revealed **three dead endpoints** all feeding `outputMessage`, and a `scheduleTask` method using all three → her manager said **deprecate the entire system**. Sharing the whiteboard made the solution instantly clear to the team ("they loved *how* I presented it").

## 3. Team Stories

- **Nha:** used to run in-person whiteboard brainstorms (flow, data consumption, notes, where new code goes) but lost the tool when going remote — a shared digital whiteboard brings back **collaboration and big-picture overview**. **Spencer** (systems thinking): mapped connected microservices to find the **root cause** of endless bugs (a `resetUserPassword` not properly wired to the DB). **Muhammad:** a nervous first ticket ("move code from one endpoint to another") became easy once **drawn out** — he could see exactly what to move. The biggest benefit: how **quickly everyone picked it up**.

## 4. The Duplication Coloring Book for Front-End

- Moving to front-end, they scoped a mobile redesign. A tech lead challenged "build each screen individually" → instead find **reusable components**. Apply Llewellyn Falco's **duplication coloring book**: (1) **box** each duplicate piece, (2) **color the white space** (to see the shared shape/spacing → CSS), (3) **highlight the differences** (each becomes a **parameter**), then **extract** the component (e.g. a text field, a card with name/dates+cost/details). Repeat to find every reusable component — done digitally so a cross-country remote team can collaborate.
- The whiteboard is for **in-the-moment work** (it goes away — not documentation to maintain). "A picture is worth a thousand words — we put all 10,000 on the whiteboard." Q&A: for massive legacy complexity, **focus only on what the ticket needs**; she prefers the whiteboard over code-generated diagrams because it shows *what she's seeing* to start a discussion; tools: **Miro** (her work default), Microsoft Whiteboard, Excalidraw, draw.io.

---

*Video: https://www.youtube.com/watch?v=zTyT4fcyBu4 — Transcript via yt-transcript.sh; outline generated from the transcript.*
