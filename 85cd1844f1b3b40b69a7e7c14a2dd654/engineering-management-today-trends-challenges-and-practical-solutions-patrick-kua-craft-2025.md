---
title: "Engineering Management Today - Trends, Challenges and Practical Solutions - Patrick Kua | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Patrick Kua on the forces reshaping engineering management — productivity pressure and how to measure it (DORA/SPACE/DX Core 4), the hands-on 'unicorn EM' role expectation, hybrid work, and AI — with concrete, practical guidance."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Engineering Management Today - Trends, Challenges and Practical Solutions - Patrick Kua (Talk Outline)

> **Patrick Kua** — 10+ years teaching tech leaders / coaching CTOs, ~25 years in tech — on how the forces of the past 25 years reshaped engineering management, four current shifts, and practical ways to navigate them. (Poll: many in the room lead teams; a good number got *no* leadership training — the gap he set out to fill.)

---

## 1. The Forces That Got Us Here

- **"Engineering manager" is a relatively new term.** Evolution: **development manager** (department-ish, managing IT projects/people, not necessarily an engineer) → **team lead** (with a project team delivering an initiative) → **engineering manager** (background in the engineering discipline). Many orgs still don't have the role.
- Different **archetypes/shapes** of EM exist (from a prior Craft talk) — shaped by org expectations (tech lead / staff engineer roles) and by the shifts below.
- **Company growth:** software "ate the world" → digital goods/services; **alternative funding** (VC, angels, crowdfunding) replaced bank loans/self-funding; the **cost of starting a business fell** dramatically.
- **Cheap/zero-interest capital** (dot-com boom + last 5 years) → big bets easy to fund → **hypergrowth** → more teams, bigger teams, **more EM positions** (people "thrown in" with little support, stretched).
- **Technology shifts:** hosted → cloud/mobile/services (wider, heterogeneous stacks EMs can't be expert in) → **big data** → data science → **"Attention Is All You Need" (2017) → LLMs** (ChatGPT/Claude/Perplexity) → pressure to use AI in products *and* workflows.
- **The pandemic** = "the largest remote-working experiment," which can't be undone.
- **Recent reversal:** the growth diagram runs **backward** — high interest rates limit funding, headcount reductions, fewer management roles; plus LLMs/GenAI/APIs and **hybrid** work.

---

## 2. Shift 1 — Productivity Pressure ("more with less")

- Nobody likes the word, but **someone is asking you to make teams more productive** — CEOs pressure CTOs, no one agrees what "productivity" means, and there's simply **more pressure to demonstrate results** with leaner orgs.
- **Outcomes over outputs** — but **output still matters** (if teams produce nothing visible, people question what they're doing), while ideally producing outcomes.
- **Navigate via ruthless prioritization:** the **Eisenhower matrix**; a new shift — **don't do dopamine "time fillers"** (things that feel productive); with limited headcount/time, **maximize high-impact, visible, valuable** work; break big projects into **smaller milestones** for visible progress; give yourself **permission to leave things imperfect** (else burnout). "Ruthlessly prioritize."
- **Perception matters** (esp. platform/infra teams whose customers are other technical teams): **connect daily work to a top-level company goal** — "how does this move a company objective?" If you can't trace it, maybe it's not important. Also aids motivation (**Dan Pink**: autonomy/mastery/purpose → "my work matters").

### 2.1 Measurement
- Use numbers like a business report (sales, churn, profitability) for engineering.
- **DORA four key metrics** (*Accelerate* / State of DevOps): **lead time, deployment frequency, MTTR, change-failure rate** — but these are **lagging indicators**. The book's forgotten gem is the **24 key capabilities** (technical + organizational/process) — the things **you can actually influence** (e.g., a **Kanban board** spots bottlenecks earlier than trawling Jira).
- **SPACE** (Nicole Forsgren): productivity **can't be one metric** → five categories (Satisfaction, Performance, Activity, Communication, Efficiency), e.g., activity = PR count (a *starting point*, not a target — "8 people, 1 PR/week?"). Criticized as **hard to apply** ("go pick your own metrics").
- **DX Core 4** (late 2024; he advises DX, partnered with Forsgren) — opinionated, practical, balanced. Four categories with primary + secondary metrics:
  - **Speed** — **diffs per engineer, averaged across the team** (starred **not** at the individual level — good teams help each other; a senior may do reviews/help instead of PRs); secondary: lead time, deploy frequency.
  - **Effectiveness** — **developer-experience index** (targeted surveys), or **time-to-10th-PR**, ease of delivery.
  - **Quality** — **change-failure rate**, perceived software quality, operational-health/security metrics.
  - **Impact** (the most interesting) — measure what you **control**: **% time spent on new capabilities** vs. firefighting a 20-year legacy system (categorize/count tickets: bugs/incidents vs. planned features). Investing in quality/practices → less firefighting → more time for **new bets** → business impact.
- **Communicate concretely:** "lead time **4 weeks → 1 week**," "change-failure **30% → 5%**" (→ more predictable, hit estimates), "planned work **20% → 40%**" (→ double the bets/value).

---

## 3. Shift 2 — Role Expectations (the "unicorn EM")

- Leaner orgs → **fewer middle-management roles** (a tough job market: more supply, less demand) and EMs managing **larger groups** (4 → 12 → 20+).
- Archetype shift: hypergrowth favored the **team-lead/people-manager** EM (senior people who need help working together); leaner orgs expect the EM to be **closer to producing** — even **writing code** (technical challenges now in EM hiring, which many aren't ready for).
- Orgs want the **"unicorn EM"** — good at everything (architecture, org processes/flow, people) — unrealistic but real. Advice: show **competencies across disciplines** in interviews; if you understand the **principles** (design, architecture), AI tools are **"good autocomplete"** to get hands-on again (Kua writes Python via tools without prior production Python — but must validate outputs). Early-career EMs (esp. from hypergrowth) get **stretched** → invest in **personal development**.

---

## 4. Shift 3 — Hybrid Work

- Most people dislike **fully remote** *or* **fully office** → orgs land in the middle. Tension: CEOs/landlords want **RTO** (higher occupancy = higher rent; "bad managers" want to watch people); employees want **flexibility** (packages, focus time, work-life balance) — face-to-face contact is now a **standard benefit, not a differentiator**.
- Survey: engineers cluster around **1–2 days in office**, with **big variation between individuals** (newborn at home vs. no space at home) and **coordination friction across teams** (your team wants 1 day, another wants 3).
- **Navigate:** decide a **cadence** for your team; use in-office time **deliberately** — **collaboration** (whiteboarding/architecting complex problems), **relationships**, and **planning** (sprint/iteration planning for real-time alignment, then async afterward); and **secure team space** so co-location has value.

---

## 5. Shift 4 — AI

- Pressure from **CEO** (more with less), **product** (integrate it), and **skeptical engineers** ("this fad will pass" — it won't; "don't stick your head in the sand").
- Adopt an **experimental mindset** (Simon Wardley's "custom/explore" phase): give teams **time / innovation tokens** to play; start with **internal apps and test/build code, not production**; encourage connection and knowledge-sharing.
- Provide **safety**: drive the conversation on **which tools**, **data** used, and a **traffic-light system** (good / caution / don't use), tied to an official **AI policy** and goals.
- Use AI as **your pair** too (the EM role is lonely) — get back into coding, generate drafts/templates, explore feedback as conversation (**Dennis's talk**) — **but keep the human review** (don't copy-paste-and-send).

---

## 6. Recap

- Forces → four shifts: **productivity** pressure (driving **role-expectation** changes), **hybrid work** challenges, and **AI** influences. Measure concretely, prioritize ruthlessly, be more hands-on, use in-office time deliberately, and lead AI adoption experimentally and safely.

---

## People, Books & References Cited

- **Patrick Kua** — speaker; coaches EMs/CTOs; advises **DX**.
- **Dan Pink** (*Drive* — autonomy/mastery/purpose), **Nicole Forsgren** (*Accelerate* / DORA / SPACE / DX Core 4), **Simon Wardley** (keynote — evolution/experimentation), **Dennis** (AI-for-managers talk).
- Frameworks: DORA four key metrics + 24 capabilities, SPACE, **DX Core 4** (speed/effectiveness/quality/impact), Eisenhower matrix, Kanban.
- Concepts: EM archetypes, more-with-less, outcomes vs. outputs, unicorn EM, hybrid cadence, traffic-light AI policy.

---

*Video: https://www.youtube.com/watch?v=Lod3-DEg8dI — Transcript via yt-transcript.sh; outline generated from the transcript.*
