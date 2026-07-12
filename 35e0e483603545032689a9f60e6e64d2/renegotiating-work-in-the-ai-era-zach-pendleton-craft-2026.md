---
title: "Renegotiating Work in the AI Era – Zach Pendleton | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Zach Pendleton (Instructure) argues AI is a culture accelerant, not a magic pill, and lays out how to deploy it effectively (start with goals, ~7.6% real productivity), sustainably (spend reports, plan-then-execute model tiering, protect human attention), and human-centered (AI councils, hack weeks, Avocode) — with the Turkey tutor-bot study, the 50-PR cautionary tale, repo context/skill libraries, and a Q&A on measuring productivity and junior growth."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Renegotiating Work in the AI Era – Zach Pendleton (Talk Outline)

> A Craft 2026 talk by **Zach Pendleton** (Instructure, an education-technology company serving universities and primary/secondary schools) in Budapest. Central thesis: **AI is a culture accelerant, not a magic pill** — it makes a strong team faster and a broken team fail faster. Structure: a cautionary tale → three requirements for successful deployment (**effective, sustainable, human-centered**) → each explored with studies, data, and concrete Instructure practices → a live Q&A. He opens joking the headset mic "makes me feel like Britney Spears."

---

## 1. The Cautionary Tale

### 1.1 The CEO's mandate
- A CEO tells the head of engineering that "CEO friends" say AI can make the team **100 times more effective** — "so let's bring in AI."

### 1.2 The 50-PR overnight
- The team buys licenses (Claude Code, OpenAI Codex).
- One excited engineer stays up all night and produces **50 new pull requests** — feeling great.

### 1.3 The review spiral
- Everyone else feels dread — reviewing 50 PRs means not getting their own coding done.
- They start well-intentioned, get tired/burned out, then decide to just **merge them** — "how bad could they be? The machine said they were good."

### 1.4 The outage
- Later that week, an **outage** — and the team is in real trouble because **no one wrote or reviewed the code**.
- A scramble to figure out what happened; eventually fixed.

### 1.5 The blown budget
- They resolve to study AI properly — but the overnight run **burned the entire AI budget**.
- They hadn't realized they paid **$20/month AND per token**.

### 1.6 What went wrong (three failures)
- **Unclear goals** — "become 100x more productive / revolutionize the industry" is an aspiration, not a real goal; "foolish and short-sighted."
- **Lack of ownership** — the push was business-driven for operational efficiency; AI is "just one option among many," not a magic tool.
- **Poor oversight** — no visibility into PR quality, money spent, or production impact.

### 1.7 The core lesson
- AI is "not a magic pill." (Kent Beck called it "a genie," but really) it's a **culture accelerant**: good foundations → move work through better; existing problems → "fail a lot faster."

---

## 2. The Three Requirements

### 2.1 Effective
- Know what goals you're trying to accomplish, and **measure** them.

### 2.2 Sustainable
- **Cost:** don't "steal money from other parts of the organization" (headcount, budgets).
- **Practices:** don't burn out.

### 2.3 Human-centered
- AI is "the new hot thing," but the conversation will eventually slow; AI stays a tool, while **humans** should remain the center of the conversation about work.

---

## 3. Effective: Start With Goals, Not "Use AI"

### 3.1 The bad starting goal
- Too many orgs start with the goal "just to use AI" because "everybody's using AI."
- "I've never been paid to use AI… I'm not a servant to the technology. The technology serves the goals of my customers."

### 3.2 The Turkey study — setup
- Paper: **"Generative AI Without Guardrails Can Harm Learning,"** in **secondary math education in Turkey.**
- Three groups:
  - **Control** — no AI, taught math normally.
  - **Raw ChatGPT-4o** — could use it however they wanted.
  - **Tutor bot** — ChatGPT-4 with extra **system prompting** to behave as a proper tutor: no direct answers, encourages **reflection**, uses **spaced repetition**.

### 3.3 The Turkey study — assignment results
- On assignments/coursework, both AI groups beat the control.
- Raw ChatGPT: ~**+50%** vs. control.
- Tutor bot: ~**+127%** improvement in assignment scores.

### 3.4 The Turkey study — final-test results
- On the **final test**, the raw-ChatGPT group did **17% worse** than the control group.
- The tutor-bot group's negative difference **disappeared** — they performed **at level** (same as control).

### 3.5 The takeaway
- Technology dropped into a team without goals is "more like a **grenade** than a solution."
- Great AI deployments sit on a strong foundation of **company goals, processes, and culture**.
- First question shouldn't be "when are we using AI?" but **"what are we really trying to do?"** — AI is an **opportunity, not a mandate**.

### 3.6 The reality-check data (DX study)
- **DX** studied AI adoption 2024–early this year across industries.
- **75% of engineers** use AI at least monthly.
- The 100x myth is false: the **average team is ~7.6% more productive** (measured by PRs merged).
- Budget and promise against **that** number — not "every engineer should spend their salary on AI tokens" ("something I'd say if I was selling you AI tokens").

---

## 4. Best Practices for Real Gains

### 4.1 Context in the codebase (why it matters)
- Easy to scaffold a new project and feel like a superhero; much harder on a codebase of millions of lines written over decades.

### 4.2 Test coverage
- Testing "is just as important now as ever" — strong signal the model's code works, gives confidence, and serves as **documentation for the model**.

### 4.3 Documentation shape
- Good docs matter more for machines than humans — capturing team practices so the model writes tests your way, follows your patterns, knows your architecture.

### 4.4 AGENTS.md structure
- Don't put everything in one giant markdown file — it eats context, is hard to update, becomes less useful.
- Instead: a **high-level AGENTS.md at the project root** (goals + architecture) so the agent knows where to begin.
- Plus a **per-module/subfolder AGENTS.md** — the agent pulls in only the context it needs; simpler to maintain.

### 4.5 Keep docs in the repo (not the wiki)
- Historically docs lived in a wiki (Confluence) for discoverability.
- Keeping docs **in the repository** improved the update rate and makes them easier for the agent to use.

### 4.6 Skill libraries
- **Skills** = a markdown file (optionally with executables and extra docs).
- Instructure keeps common skills in a shared GitHub repo.
- Examples: a **subject-matter-expert skill** describing how they tenant databases; a skill wrapping a **deploy executable** the agent can call.

### 4.7 Why skills win — progressive disclosure
- All docs in one place consume the agent's context window on every call, raising cost and lowering performance.
- Skills let the agent **select based on short descriptions** and load info in real time.

### 4.8 Why skills win — bundled internal tools
- Embedding internal tools in skills means a developer who checks out the repo gets **all the skills and tools in one place**, usable by both agent and human.

---

## 5. Looking Beyond Writing Code

### 5.1 The real failure was the SDLC around the code
- In the cautionary tale, the problem wasn't writing code — the **surrounding SDLC broke**: 50 commits were hard to review and probably didn't align to product requirements (the agent answered its own questions with no PM at midnight).
- Engineers spend only ~**15% of their time writing code** (per the DX survey).

### 5.2 PMs writing code (Lovable prototypes)
- Product managers use fast-iteration tools like **Lovable** to generate **clickable prototypes** as the artifact engineering develops against.
- Not shippable — "you have to remind everybody the clickable prototype isn't good enough for production" — but a big time savings and higher-fidelity product↔engineering communication.

### 5.3 AI first-pass code review
- When code is pushed, an agent does a **first-pass review**; the submitter must **reply** to it to unlock human review.
- Solves the disconnect between "joy of writing lots of code" and "pain of reviewing AI slop."
- Preserves **ownership** (Instructure's culture) — the name on the commit still owns the code, even if AI wrote it.

### 5.4 Puppeteer MCP walkthrough (experiment)
- An engineer connected a **Puppeteer MCP server** to a post-merge process that reads the feature description (ticket/commit), launches the app, clicks through the feature, and **attaches a walkthrough to the ticket** for non-technical viewers (manual QA, PMs).
- "Doesn't work 100% of the time," but shows the opportunity to reduce AI friction by applying it to other parts of the SDLC.

### 5.5 How the 7.6% actually shows up
- Executives expect the original timeline to simply **shrink** by ~10%.
- In practice at Instructure it shrinks a little, but most gains come from **pulling in work** the team otherwise lacked capacity for:
  - **P3 bugs** normally saved until after release.
  - Staying on top of **security patches**.
  - More **nice-to-have features** that delight users.
- Result: a more **polished, better-maintained** final product (context switching is taxing, so pulled-in work is where the slack goes).

---

## 6. Sustainable: Money

### 6.1 AI is expensive and unpredictable
- Headline: **Uber "spent its entire 2026 AI budget in 4 months"** (later revised, setting per-employee numbers).
- Budget uncertainty is "incredibly disruptive" — excite people about AI, then tell them to cut back a month later; slows adoption, frustrates teams.

### 6.2 Individual spend reports
- Instructure produces **individual spend reports** ("if you work for Instructure, I know your number").
- Uses: sense of what spend **should be**; identify what's working (share the practices of well-spending people) and investigate outliers (zero spend or blown budget).

### 6.3 Team-level reports
- Different questions at the team level: measure **ROI** across the org and communicate AI's project impact to the business.

### 6.4 The April spend chart (candid)
- "This is good, not great — we haven't fixed everything."
- Most engineers spend **$0–200/month** (seems sustainable), but a **long tail** reaches nearly **$4,000/month**.
- Some high spenders are justified, some problematic — hence the need for individual reporting and conversations.

### 6.5 Break up the work (plan-then-execute model tiering)
- Tempting but expensive: open Claude Code on "max thought" and let it spin.
- Better pattern: use a **high-performance model** to discuss the task and build **detailed markdown plans**, then hand those to **fresh-context agents** to execute.
- Cost diffusion: expensive cloud model builds the plan; **smaller/cheaper or local models** (e.g., Google's **Gemma**, "essentially free" on a laptop you already paid for) execute — "changing out the models depending on the task."

---

## 7. Sustainable: Human Attention

### 7.1 The always-on trap
- Some engineers feel the tool can run all the time with a bit of prompting, so they're **constantly working a little** — checking every 30 min/hour, "leaving dinner because my prompt may be done."

### 7.2 The plea
- "Just because the model can run all the time doesn't mean it has to be running on your computer doing your work."
- "Please take care of yourselves."

---

## 8. Human-Centered

### 8.1 Models update faster than brains
- New frontier models come out every **1–3 months**; the human brain "last received a software update ~50,000 years ago" — "there are more of us than there are of the models still."

### 8.2 Mark Watkins: unavoidable but not inevitable
- **Mark Watkins** (assistant director of academic innovation, University of Mississippi) writes on AI in education, where many teachers fear it.
- His statement: **AI is unavoidable but not inevitable** — "the worst of it and the best of it are not promises, they're **possibilities**."
- It's up to everyone to discuss what it looks like and decide what AI means for them.

### 8.3 Five AI councils
- Instructure created **five committees**: **quality & security, measurement, enablement, software development life cycle, and hack week.**
- Gave people time to discuss how AI would change these areas — pairing many small experiments with org-wide change.

### 8.4 Hack weeks
- Weeks devoted to experimentation and learning, built around a **theme** by the committee so the team stays focused and learns together.

### 8.5 Avocode (biweekly learn/teach)
- Every other week, any engineer can sign up for a short (**15–30 min**) presentation on anything — their domain, something learned, a new tool.
- Lets everyone teach and learn — "especially important because we're a teaching and learning company."

### 8.6 Training budget
- Supplements the above so people can attend events like Craft Conference to learn from peers.

### 8.7 Closing
- "We get to choose what effective AI use looks like" — the thought leaders predicting mass job displacement "are not the ones with the hands on the keyboard. We are."
- Goal: AI that is **effective** (it serves us and our customers; "we don't serve it"), **sustainable** (for us and budgets), and keeps **humans at the center**.

---

## 9. Q&A

### 9.1 Q1 — Do you use a particular method like BMAD to plan tasks?
- No — he relies on **existing artifacts**: good ticket definitions from PMs, and having the model consult the AGENTS.md and architecture to build the plan.
- "That tends to work pretty well, but I'm sure others do it in a much more advanced way."

### 9.2 Q2 — How is AI's productivity impact measured at individual and team level?
- **Individual level:** don't measure productivity gain (bad managers "count story points"). Instead look at **how** they use the tool, whether it's a **best practice**, **sustainable**, whether the engineer is **happy**, and whether the **work product is good**.
- **Team level:** better place for productivity/impact — use existing metrics like **time to delivery** and **quality metrics**.

### 9.3 Q3 — How should career progression change when juniors use AI for tasks that traditionally built experience?
- "I really struggle with this one."
- The human brain learns through **productive struggle** — staying stuck, trying different approaches, spaced repetition.
- For junior engineers, AI can **remove that productive struggle**: "people can become productive very quickly, but they do so by stopping learning."
- No clean answer, but a plea: **invest at least as much in growing humans as in AI tools** — "they're far more valuable than the model."

### 9.4 Q4 — If feedback loops are collapsing, how do companies ensure people still develop expertise?
- Feedback loops are getting tighter; that's not going away.
- The most important thing humans bring is **judgment, taste, and experience**.
- Even when a model speeds up the loop (e.g., "clicked through the flow for me"), don't just "trust it and move on" — "I was a human in that loop, but I was not doing my job as a human."
- Build a **UX** at each checkpoint that makes it easier for people to actually exert their authority.

### 9.5 Q5 — In the Turkey study, how did the tutor-GPT group compare to the control group?
- Coursework: tutor group **+127%** on assignment scores vs. control.
- Final test: **same level** as control (no difference).
- One reading: a failure (no extra learning). His reading: education is often **constrained by teacher-to-student ratio**, so a tutor that produces the **same level of education** for more students is very valuable for **access** — "but I also work in education technology."

---

## People & References Cited

- **Zach Pendleton** — speaker; Instructure.
- **Kent Beck** — referenced for the "AI is a genie" framing.
- **Mark Watkins** — assistant director of academic innovation, University of Mississippi; "unavoidable but not inevitable."
- **Companies / products:** Instructure, Uber (2026 AI budget headline), DX (metrics/study), Anthropic (Claude Code), OpenAI (Codex, ChatGPT-4o/4), Google (Gemma), Lovable, Confluence, GitHub, Puppeteer (via MCP).
- **Study:** "Generative AI Without Guardrails Can Harm Learning" (secondary math education, Turkey).
- **Instructure practices/terms:** AI councils (quality & security, measurement, enablement, SDLC, hack week), hack weeks, Avocode, training budget, individual/team spend reports.
- **Concepts:** AI as culture accelerant vs. magic pill, effective/sustainable/human-centered framing, unclear goals / ownership / oversight failures, ~7.6% real productivity (PRs merged), 75% monthly adoption, tutor-bot system prompting (reflection, spaced repetition), test coverage as model signal/docs, AGENTS.md (root + per-module), docs in repo vs. wiki, skill libraries and progressive disclosure, PMs writing code (clickable prototypes), AI first-pass code review + ownership, Puppeteer MCP walkthroughs, pulled-in work (P3 bugs, security patches, nice-to-haves), plan-then-execute model tiering, local/cheaper models, human attention budget, "unavoidable but not inevitable," productive struggle, judgment/taste/experience.

---

*Video: https://www.youtube.com/watch?v=b75WXLUEMrY — Transcript via yt-transcript.sh; outline generated from the transcript.*
