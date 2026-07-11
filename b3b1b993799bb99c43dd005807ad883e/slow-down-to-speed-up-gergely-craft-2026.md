---
title: "Slow down to speed up – Gergely Orosz | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "A field report on how AI has upended software engineering in the last 6 months — what the top labs and big tech are really doing, the emerging trends, and how to navigate them."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Slow down to speed up – Gergely Orosz (Talk Outline)

> Craft 2026 keynote by the author of *The Pragmatic Engineer*. A ground-truth tour of how AI has changed engineering in the last six months, drawn from Orosz's conversations inside the AI labs, big tech, startups, and traditional companies — closing with concrete advice for engineers and leaders.

---

## 1. Cautionary Tale — The Meta / Instagram Meltdown

- A "goofiest ever" Instagram account-takeover: fake your location via VPN → ask Meta AI to send a victim's verification code to an email you own. That was the whole exploit — a **zero-effort password reset bug**.
- How could this happen at a company with elite rollout/canary systems, manual review, and a ~100-engineer trust & safety team? The CISO quit mid-investigation.
- Root cause (per Orosz's sources): **AI-written code reviewed by AI, not humans** — compounded by three self-inflicted problems:
  - **AI/token maxing** — engineers measured on token usage inflated it, using AI for everything.
  - **Layoffs** (~8,000, 10%) that pushed people to inflate usage further so their numbers wouldn't look low.
  - **"AI psychosis"** — 40% of Instagram's trust & safety org forcibly reassigned to manual AI data labeling; teams cut below half size, some without on-call coverage.
- Framing: a top-down bet (Zuckerberg/Wang) to build a frontier model, at the cost of morale and engineering culture. *"We accumulate code faster than we accumulate trust."*

---

## 2. Everything Changed in the Last 6 Months

- **DHH**: as of ~February, most of his code is AI-written — the models flipped from "not good enough" to "better than I can write."
- **Simon Willison**: late-2025 models elevated agents to "genuinely useful."
- Hard data shared with Orosz:
  - **Linear**: teams using agents ship **~5x more code** than teams that don't.
  - **Cursor**: lines/dev/year up ~2.5x (≈3–4k → 8k+); PR size up ~3x (→ ~6x more code combined); a jump in devs **accepting AI changes with no manual review**.

---

## 3. Industry Tour — What the Labs & Big Tech Actually Do

- **Anthropic**: Boris Cherny runs ~5 parallel agents, 20–30 PRs/day; PRDs replaced by prototypes; Claude Code ~100% self-generated; Claude "Co-work" built in ~10 days.
- **OpenAI**: internal ChatGPT "fix it" button → Codex PR; tiered AI code review (some paths need human review); most engineers run several agents; Codex self-improves overnight; **"taste" (knowing what to build) is increasingly the differentiator.**
- **Cursor**: all-in on agents; built their own cheap Composer model; turning into a mini AI lab; everyone (even DevRel) is technical.
- **Google**: everything custom (Cider IDE, Piper monorepo, Critique, code search, Borg, Monarch); great integration but **Gemini lags Opus/GPT**, so AI adoption is uneven.
- **Meta**: MetaMate, public "trajectories" (prompts visible on commits — devs started prompting in Polish for privacy); everything subordinated to building a frontier model.
- **Uber** (~3,000 engineers): huge in-house platform — MCP gateway, agent builder/studio/registry for 20k non-engineers, "AI FX" CLI (their Claude Code), **Minions** (background agents on the monorepo, with prompt-improvement suggestions), code-inbox/smart-assignment/risk-profiles for review triage.
- **Stripe / Ramp / Shopify / Airbnb**: all building their own equivalent tool suites.
- **Traditional companies aren't far behind**: Cisco rolled Codex to 18k engineers; JP Morgan built multi-agent data-labeling with evals/LLM-judges.

---

## 4. Cross-Cutting Trends

- **System, not individual (Laura Tacho)**: companies stuck giving individuals "speed-up juice" (summaries, code-gen) don't see *team* gains. Winners start from a **business outcome** and build agentic systems that reduce handoffs and friction **while holding quality** (e.g., Spotify's bar: quality must stay the same).
- **Token maxing / tool addiction**: pressure to look productive; addictive pricing tiers; "one more prompt" behavior. Going out of style as costs bite.
- **Middle management cut/flattened**: good technical directors quietly improve engineering culture; removing them degrades it.
- **CEOs/CTOs back to coding** — enthusiastic but often mis-judging "done"; dangerous when combined with fewer managers to shield engineers.
- **AI budgets exploding** — a brand-new crisis (even Sam Altman flagged it). Anthropic/GitHub Copilot switching enterprises to usage pricing; Uber capping ~$1,500/engineer/month then free models. Costs "as much as an engineer" are unsustainable.

---

## 5. What's Happening to the Craft

- **Quality is dropping everywhere** — even flagship sites (Claude.ai input-loss bug unfixed for a month; OpenAI's Agent Builder criticized as "abandonware"; AWS/Amazon outages from AI-generated changes → Amazon now requires a **senior** engineer to review AI changes).
- **"Use less AI"** — Dax (opencode, ~1M DAU): shipping too many hacks instead of rethinking systems; deliberately using *less* AI and doing more thinking; no competitor wins by using AI *more*.
- **Everything feels brittle** — GitHub lost PRs for hours; can't absorb a 3x/2yr load increase; ~98% uptime feels normal now.
- **"Slop-berries" — the engineers who still care**: review fatigue → rubber-stamped "LGTM"; the few who truly review catch the bugs but burn out and are under-rewarded (and some quit).
- **Old patterns return**: agents are the "new junior engineers" → DDD, verbal guardrails, and boring enterprise design patterns keep them in check.

---

## 6. Advice

**For engineers**
- **Slow down to speed up**: cap daily agent usage to what you can **review or verify**. Build your own verification systems; think in architecture (Peter Steinberger ships unread code but verifies rigorously).
- Tech debt is now **cheap to remove** — be the team's chief debt-remover.
- **Experiment** with agent workflows (Mitchell Hashimoto: exactly one background agent — "if I'm coding, I want an agent planning; if it's coding, I want to be reviewing").
- **Don't outsource learning** (Addy Osmani): the bug gets fixed but your mental model doesn't. Learn something from every agent use.
- Future-proof by building **on top of LLMs** (RAG, evals, AI engineering — Chip Huyen's book), think product/business, and become a **domain expert**.

**For leaders**
- **Stay hands-on** (easier now with AI) or be out; help integrate AI at the *system* level; expect to do less people-management.

**Closing**: change hasn't been this fast since the 1960s. Being overwhelmed is normal — periodically stop, make one change toward sustainability/quality/automation, then repeat. Software engineers aren't going anywhere; demand is up, and expertise/judgment matter more than ever.

---

*Video: https://www.youtube.com/watch?v=kKNKqut7t1Q — Transcript via yt-transcript.sh; outline generated from the transcript.*
