---
title: "How to survive and thrive as a dev team in the age of AI – Sander Hoogendoorn | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Sander Hoogendoorn on how a 13-person e-commerce platform team uses AI to solve previously-impossible problems, the Cynefin/complexity lens, vendor lock-in worries, tech debt, and a rules-light autonomous team."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# How to survive and thrive as a dev team in the age of AI – Sander Hoogendoorn (Talk Outline)

> Sander Hoogendoorn (CTO of e-commerce company Coolblue-adjacent "Collab"; coding since 1978) on how a **13-person** platform team — not a hyperscaler — actually uses AI, the worries that come with it, and the team culture that makes change survivable.

---

## 1. Most Orgs Aren't Where the Hype Is

- Banks, insurers, governments aren't shipping what Anthropic drops daily; small teams are "somewhere in the middle" and must **figure out what to do** because they can only spend their time once.
- What AI changes concretely: he rebuilt a heavy third-party React table as **260 lines, no framework** — something his team told him *not* to attempt two years and one year ago.

## 2. Software Is Complex — Cynefin

- Software is the most complex industry (Dijkstra). Using the **Cynefin framework**: the right side (clear/complicated) has **best/good practices** to apply or select; but most real work is on the **left (complex)** — new to *your* team/org, no best practices, only **emergent** ones. There are **no right answers** (Snowden) — you must **experiment** (which can fail), innovate, and accept the unknown-unknowns. Aspire to be a **"cynefin wobble"** — traveling by weird path to an as-yet-unknown destination.

## 3. What They Actually Built

- **Content generation** for 400k products via a microservices layer that can talk to any model; **invoice recognition** (replacing expensive OCR licenses) with human fallback comparison; **price comparison** vs. competitors; **daily campaign suggestions** (e.g., surfacing products for "Neighbor Day").
- **Key realization:** where the problem is **deterministic**, write code (you can do better than AI); where it's **non-deterministic** (matching products to an invented campaign), **AI genuinely helps**. AI is solving problems they **couldn't solve before** — and making many single-purpose tool vendors/libraries **redundant** (saving cost).

## 4. The Worries

- **"Selfware":** non-developers (marketing) now build their own unbalanced, untested, insecure, GDPR-oblivious software — a return to the 80s/90s Excel-sprawl era. ("What's a CVE?" — ~40,000/month.) "Jurassic Park: a cautionary tale about understaffing engineering and letting people push straight to prod."
- **Vendor lock-in & cost:** the 50-year playbook — pull you in cheap, then raise prices. Their OpenAI/Anthropic spend climbs; usage limits interrupt work (and we get so lazy we just stop when AI stops — **losing knowledge**). Products get **retired** (Sora) breaking your integrations. **Outages** happen → need a **multi-model strategy**.
- **Tech debt** (Ward Cunningham) **accumulates faster** with AI (Adam Tornhill): AI invents libraries, forgets to build after changes, writes code he still has to improve. **Gall's Law** — complex systems must grow from simple ones; a 271-file single commit gave his team two days of Sonar cleanup. At full tech-debt, you can't innovate, and **no agent will save you** — humans must manage the complexity.

## 5. The Team Culture (rules-light)

- **Simplify to amplify** — "everything you leave out makes you faster" (and, he argues, increases quality). They **don't do Scrum**: no sprints, no retrospectives, fewer standups, no pull requests, no code reviews (less context-switching, much faster).
- **Autonomy:** everyone is their own architect, makes their own decisions, **allowed to fail** — learned only by doing (Amsterdam's removed traffic lights → people negotiate with their eyes; Dee Hock: *"simple, clear purpose and principles give rise to complex intelligent behavior; complex rules give rise to simple stupid behavior"* — why SAFe et al. fail).
- Practices that *do* happen organically: knowledge-sharing standups that roll into coding, **event storming**, **pair/mob programming** (never mandatory), **lean coffee**, **spec-driven development** (for those who like it), and **skills** (a test-component skill using their framework; a **"push back" skill** so Claude challenges wrong assumptions). They're becoming **product engineers**.

## 6. Will We Still Have Jobs?

- **Yes.** Big-tech layoffs are to fund data centers, not because devs are obsolete. AI generates **tech debt someone must resolve**, and we now solve **bigger, non-deterministic problems** — coding is just a way of expressing thinking. Prediction: we'll evolve toward **more concise/precise languages to talk to models** (not vague English) — i.e., still "programmers."
- Closing: AI is a **code-generation tool** that gets you 80–90% there — "you still need to be a good swimmer." **Change is the only constant**; be the first to "park badly" so others follow; take the **tiniest steps**, simplify to amplify, never stop learning. *"It's not the tool that solves the problem, it's the thinking."*

---

*Video: https://www.youtube.com/watch?v=orOwOZ2WPM0 — Transcript via yt-transcript.sh; outline generated from the transcript.*
