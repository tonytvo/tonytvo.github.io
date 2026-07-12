---
title: "Engineering Management in the AI Era - Dennis Nerush | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Dennis Nerush (Elementor) on how AI supercharges the 'impossible job' of engineering management across productivity, knowledge, soft skills and coding — plus the dark side of over-reliance (expert beginners, lost essence) and staying human-centric ('be water')."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Engineering Management in the AI Era - Dennis Nerush (Talk Outline)

> **Dennis Nerush** — director of AI engineering at **Elementor** (the #1 website-building platform, 19M+ sites), ~15 years in the industry, 7 practicing AI "before it was cool." How AI made his team **better and worse**, and how to **redefine** the EM role. Four parts: the "impossible job," where AI helps, the dark side, and the new role.

---

## 1. The Price of Over-Reliance

- Opening props: manual gear cars (common in Europe), paper address books (nobody), a Budapest paper map, Stack Overflow — technology makes objects **and skills obsolete**. In **2006** the US Navy dropped **celestial navigation** from its syllabus (they have GPS).
- But **over-dependence has a price**: you remember maybe 1–2 phone numbers by heart (a problem if you lose your phone); some can't get back to the hotel without GPS; driving a manual after years away is hard. AI is the new revolution with the **same trade-off** — rely too heavily and you pay a price.
- The EM role is **"the impossible job"** (Michael Lopp, ex-Slack) for four reasons: **never enough time**, **outnumbered by chaotic beautiful snowflakes**, always too much to do/know, and **unattainable expectations**. It's a constant balance of **managing technology and managing people**.

## 2. Where AI Helps

### 2.1 Productivity
- **ChatGPT before Google** (even for a website's opening hours); **note-takers** (tl;dv/Fathom-style) that summarize meetings + action items so the manager can be present; **Gemini** for email summaries/replies in your tone; **presentation drafts** (Gamma, **Napkin AI** — turns text into visualizations "I could never draw"); **working prototypes** for buy-in (**Lovable, Base44, Cursor** — not production-grade, but far better than words for a conversation).
- **MCP** connects data sources (**Jira, Confluence, Slack**) to AI environments (**Claude, Cursor**): auto-create 15 tickets from a technical design; an **incident companion** pulling logs, past post-mortems, and codebase to say "I saw an increase here, maybe related to that bug months ago." ("A new MCP server every minute.")

### 2.2 Knowledge Consumption
- **ChatGPT scheduled tasks** — a recurring prompt (e.g., a daily bite-size summary of *The Five Dysfunctions of a Team* in your format) delivered as email/push, so learning happens without finding the time.
- **ChatGPT Deep Research** — scanned **26+ sources** (incl. LeadDev) in ~**5.5 minutes** into a comprehensive report (he used it to prep this talk).
- **NotebookLM** — turn any text/report into a **podcast** to listen to while doing dishes, and now an **interactive** one you can join to ask questions/disagree (released as an app — his go-to podcast player).

### 2.3 Soft Skills
- Craft **measurable performance goals** (with enough context); prep **weekly one-on-ones** from a **Notion** database of each report's skills/background and ongoing observations ("based on what you know about David, what should I discuss?" — augmenting, not replacing, his own agenda).
- A custom **"Feedback Coach" GPT** — asks what/who/context, then **teaches** a communication model (e.g., **SBI — Situation/Behavior/Impact**) via your example and outlines how to prepare (a **prep technique**, not a copy-paste email) so a small piece of feedback doesn't blow up.
- **Voice-mode role-play** of hard conversations (a grumpy "Poopics" refusing a no-budget conference request) → come in **prepared and confident**.
- **Hiring:** compensating **job descriptions** (hire for what the team lacks, e.g., project management), better **interview questions**, candidate **scoring**, and **tailored onboarding** (no two people are the same).

### 2.4 Technology
- **Data-flow/diagram generation** from the codebase in seconds (for tech design or for a manager to understand the team).
- **Agentic editors** (**Cursor, Windsurf**) that *do the work* (scan, plan, implement — vs. Copilot's autocomplete), with **cursor rules** to enforce standards (naming, file structure, planning mode, reuse, logging/observability, typing, tests up front, PR format) and **live-updated** diagrams/READMEs.
- **Devin** — the first "fully autonomous AI engineer" living in Slack/Jira/Confluence with its own virtual env (spins up local dev, runs CI, fixes lint, opens PRs) — "like a junior engineer, improving." Lets EMs **raise their head** from every PR to be strategic.

## 3. The Dark Side (Over-Reliance)

- A **lawyer lost his license** over ChatGPT-hallucinated precedents. A **ChatGPT-flavored performance goal** (emoji-laden, meaningless) deeply **offended** the recipient — "your people know you're using AI; they want to talk to **humans**."
- Agentic editors create **dependency**: "Cursor is down, so we can't work" — but **Cursor isn't the developer**, it's a tool. AI is great for **experienced** engineers but **dangerous for juniors** who **vibe-code** without understanding, never **boy-scout**/improve the codebase (→ mess fast), and lose their **essence** — **critical thinking** and creative problem-solving.
- Example: told to "write tests" for a bad function, a junior returns **100 tests** for code that should have been **refactored** (single-responsibility violation) — smiling, unaware it's wrong.
- The **"expert beginner"** trap accelerates: anyone can build impressive working software in minutes → **false confidence** that they no longer need to learn best practices/patterns/clean code. Soon we'll have engineers who've **never written a line without AI** — and it's on leaders to make them **look under the hood** and actually grow.

## 4. The New Role — Balance AI With Being Human

- Beware the dystopian **"engineering-manager copilot"** (he prototyped one in Lovable) that scans all Slack/PR interaction and auto-sends warnings ("Poopics became passive-aggressive — click to send a warning"). Some love it, some are **terrified** — that's the point.
- Instead, remain **people-oriented**: **trust-building**, genuinely **knowing your people** (family names, hobbies, **drivers/motivations**) and connecting those to the **company mission**; ensuring people **learn and grow** and don't over-depend on AI (use it as a **starting point, not the whole solution**); giving good words when deserved and confronting when needed. "**Your title makes you a manager; your people make you a leader**" (**Bill Campbell**).
- The new role **balances** encouraging AI adoption (know the tools, harness the power, give people the chance to learn) with **human-centric leadership**. Is it harder? "Not harder — **different**." Close (**Bruce Lee**): *"Be water, my friend"* — adapt to the AI environment while staying focused on **growing your team**.

## 5. Q&A

- **AI for quality, not just quantity?** Depends on context — without **guardrails and a definition of "quality"** (production-grade, handles load/scale, follows best practices) you get garbage; define them and results improve, but you can't "fire up AI as magic" — it gets you faster to a point you then tweak.
- **Will NotebookLM eliminate conferences?** No — like "Video Killed the Radio Star," radio survived; it's a **different medium** for consuming long docs, not a replacement for conferences or podcasts.

---

## People, Companies, Tools & References Cited

- **Dennis Nerush** — speaker; director of AI engineering, **Elementor**.
- **Michael Lopp** ("the impossible job"), **Bill Campbell** ("your people make you a leader"), **Bruce Lee** ("be water"), **SBI** model.
- Tools: **ChatGPT (scheduled tasks, Deep Research, voice mode), Gemini, Napkin AI, Gamma, Lovable, Base44, Cursor, Windsurf, Devin, GitHub Copilot, NotebookLM, Notion, MCP, Jira/Confluence/Slack**.
- Concepts: over-reliance price, MCP-connected EM workflows, feedback coach, expert beginner, vibe-coding dependency, human-centric leadership.

---

*Video: https://www.youtube.com/watch?v=Xt5LWQmww0M — Transcript via yt-transcript.sh; outline generated from the transcript.*
