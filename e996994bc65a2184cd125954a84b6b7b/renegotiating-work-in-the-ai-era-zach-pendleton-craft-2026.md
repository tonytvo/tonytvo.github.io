---
title: "Renegotiating Work in the AI Era – Zach Pendleton | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Zach Pendleton (Instructure) on deploying AI as a culture accelerant — effective (goal-driven), sustainable (cost + human attention), and human-centered — with realistic ~7.6% productivity data."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Renegotiating Work in the AI Era – Zach Pendleton (Talk Outline)

> Zach Pendleton (Instructure) on layering AI onto **good** cultural practices — because **AI is a culture accelerant**: it makes a strong team faster and a broken team fail faster.

---

## 1. A Cautionary Tale

- CEO hears "AI makes teams 100× more effective" → team buys licenses → one engineer ships **50 PRs overnight** → others rubber-stamp them → **outage** (no one wrote or reviewed the code) → and they **burned the entire AI budget** (paying per token). Failures from **unclear goals, no ownership, poor oversight**. "AI is not a magic pill — it amplifies what's already there."

## 2. Effective — Start With Goals, Not "Use AI"

- Study (*Generative AI Without Guardrails Can Harm Learning*, Turkey): raw ChatGPT students did **+50%** on assignments but **−17%** on the final; a **tutor-bot** (proper system prompting, reflection, spaced repetition) did **+127%** on assignments and **at-level** on the final. **Technology without clear goals is a grenade, not a solution.** Ask "what are we really trying to do?" — AI is an **opportunity, not a mandate**.
- Reality check (DX study): 75% of engineers use AI monthly; average productivity gain is **~7.6%** (PRs merged), not 100×. Budget/promise against *that*.

## 3. Best Practices for Real Gains

- **Capture context in the repo:** strong **test coverage** (signal + documentation), good **docs** — a high-level `AGENTS.md` at the root plus per-module files (progressive context, easy to maintain), kept **in the repo** (not the wiki).
- **Skill libraries:** markdown skills (with attached executables) for subject-matter experts and internal tools — **progressive disclosure** saves context/cost, and developers get the tools + skills on checkout.
- **Look beyond writing code** (engineers spend ~15% of time coding): PMs generating **clickable prototypes** (Lovable) as the dev artifact; an **AI first-pass code review** the author must respond to before humans review (preserves ownership, avoids "slop" pile-ups); an experimental **Puppeteer MCP** that clicks through a merged feature and attaches a walkthrough to the ticket.
- Productivity often shows up not as a shorter timeline but as **more pulled-in work** (P3 bugs, security patches, nice-to-haves) → a more polished product.

## 4. Sustainable — Money and Attention

- Cost is real (Uber "spent its 2026 AI budget in 4 months"). Provide **individual and team spend reports** (find best/worst practices; set realistic budgets — most Instructure engineers spend $0–200/mo with a long tail to ~$4k).
- **Break up the work:** use an expensive model to build detailed **markdown plans**, then hand them to fresh-context agents (even cheaper/local models like Gemma) to execute — diffusing cost.
- Protect the **human attention budget** — just because the model can run all the time doesn't mean *you* should (checking prompts every 30 min, leaving dinner). "Take care of yourselves."

## 5. Human-Centered

- Frontier models update every 1–3 months; the human brain last updated ~50,000 years ago. "AI is **unavoidable but not inevitable** — the best and worst of it are possibilities, not promises" (Mark Watkins). We (hands on keyboard) choose what effective use looks like.
- Instructure's approach: **five AI councils** (quality/security, measurement, enablement, SDLC, hack week), **hack weeks**, a biweekly **"Avocode"** learn/teach session, and a **training budget**.
- Close: make AI **effective, sustainable, and human-centered** — "it serves us, we don't serve it."

## 6. Q&A Highlights

- Measure productivity at the **team** level (delivery time, quality), not the individual (there, look at *how* they use AI and whether it's sustainable/good).
- **Junior growth / feedback loops:** AI can remove the **productive struggle** that builds expertise — invest in growing humans at least as much as in tools; keep humans genuinely *doing* their job at checkpoints (don't rubber-stamp).

---

*Video: https://www.youtube.com/watch?v=b75WXLUEMrY — Transcript via yt-transcript.sh; outline generated from the transcript.*
