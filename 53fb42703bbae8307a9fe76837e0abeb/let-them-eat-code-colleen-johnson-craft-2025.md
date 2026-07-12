---
title: "Let Them Eat Code - Colleen Johnson | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Colleen Johnson (ProKanban) on reclaiming developer focus time — the true cost of the 70% non-coding stat, the six wastes of software development, WIP limits and capacity, making work-item age visible, the four flow metrics, forecasting over estimation, and an extended Q&A."
type: "reference"
tags: ["softwaredevelopment"]
---

# Let Them Eat Code - Colleen Johnson (Talk Outline)

> **Colleen Johnson** — CEO of **ProKanban.org** (an inclusive Kanban learning community), co-founder of **ScatterSpoke** (Atlassian Ventures portfolio; retrospective data → actionable improvements); 25+ years coaching agile (Wells Fargo, E*Trade, Home Depot); board roles at Agile Denver, Agile Uprising, chair of Mile High Agile. Fun fact: as a child she **raised award-winning sheep** at county fairs (a story she promises — and delivers). Thesis: developers spend only ~30% of their time coding, and the fix is to **make the invisible visible.**

---

## 1. The Cost of Lost Focus

### 1.1 Origin — interviewing engineering leaders
- Early this year she interviewed engineering leaders: **"If you had a blank check, what would you throw money at? What keeps you up at night? What's hardest to fix?"** — and **"what's the one metric you're responsible for reporting up?"**
- One striking answer: **"developer focus time."** How is it measured? "**I just ask them, how many hours of focus time do you think you got this week?**" — "which really stresses me out." If focus time is both the top metric and top pain point, what could make it better?

### 1.2 The 70% stat, in dollars
- **Developers spend ~70% of their time *not* writing code** (a show of hands confirms it feels accurate — "I hate that for all of you").
- Money math ("Dan, plug your ears"): avg salary ~**$150,000** → 70% ≈ **$105,000/dev/year** lost. **10 devs → ~$1M/year; 100 devs → ~$10M+/year** — and that's just office days, on top of the sunk cost of **hiring, recruiting, and paying** great engineers.
- Where the non-coding time goes: **unnecessary meetings, status reports, endless standups** (someone asked Dan earlier "could we stop doing standups?" — the "quick" standup that becomes an hour), and **waiting** (for decisions, dependencies, prioritization, clear direction). Some non-coding time is genuinely required, but much isn't.

### 1.3 Who feels the pain
- **Developers:** **burnout** (constantly busy, no progress on what matters), **context switching**, work that never ships → **low morale** ("busy but not productive").
- **Others:** frustrated **PMs**, **engineering leadership**, up/downstream **teams** (cross-team dependencies, per Kent's talk), and **finance** ("they don't love those numbers either").
- **Ultimately the customer:** slow delivery, poor quality from stop/start work, and **lost trust** (promised and not delivered on time). "Wasted time isn't just about productivity — it's about **focus, effectiveness, and delivering when we say we will**," and it all **compounds** (and gets more expensive) the more it happens.
- **Core move: make the invisible visible** — expose what prevents the work that matters, so you can control **how much** work comes in, **focus** on finishing quicker, and control **how long** things take.

---

## 2. The Six Wastes of Software Development (Lean)

- Context: several talks touched on lean; old agile conferences were "**lean-agile** conferences." The classic six wastes, mapped to software:
  1. **Overproduction** — "weird word"; think **extra features / just-in-case additions** ("we'll never get back here, so let's add a couple things") — small bets on things that aren't needed, taking time from what matters.
  2. **Partially done work** — started and never circled back to (too big, ill-defined scope, or something higher-priority arrived). **The longer undeployed code sits, the more it costs** — no return on investment.
  3. **Defects** — like tech debt, they *are* code, but pull you from new/higher-priority work and force **context switching** ("you lose ~**20%** every time you switch focus" — do that all day and "what's left?").
  4. **Extra process** — Scrum ceremonies (**sprint planning, retrospectives, daily standup**) are context switches, worse **across multiple time zones** (people stop work at different times). Not that they aren't required — they're **disruptive.**
  5. **Waiting** — delays in **decisions**, **handoffs**, and **cross-team dependencies** delivering one big feature together.
- These wastes are "a big part of why only 30% of your time is spent actually writing code."

---

## 3. Manage Capacity (WIP)

### 3.1 "Working on everything, finishing nothing"
- Usually a result of **too much work in progress (WIP)**, which shows up as:
  - **Cognitive overload** — 40 tickets on the board; deciding which to work on/prioritize itself drains energy and focus.
  - **Context switching** — more WIP → more switching → more cost.
  - **Thrashing** across testing/code reviews and activities.
- **Typical Jira board:** people have **2–3 tickets each** — "maybe they're better at multitasking than you" — but really they're working one and the others **just sit** as waste. Coming back from the conference not knowing what to work on, you grab something from **To Do** ("obviously what's next") — instead, **move things to Done without starting something new**; if a teammate has 3–4 tickets, **pick one up / help.** It's all about **capacity.**

### 3.2 The airport analogy & WIP limits
- **Airport:** you land but there's **no gate** — sit on the runway 2 hours with "a lot of pissed-off passengers" (her favorite: "we're 45 minutes early, but no gate"). **Planes landing outstrip planes leaving.** Same when more work enters the team than it has capacity to finish — work sits on your runway.
- **Match WIP to team capacity** with a **WIP limit** ("only 10 planes can land because there are only 12 gates / 12 people"). **First step: manage capacity.**

### 3.3 "If you can lean, you can clean"
- Common objection: "*Are you telling me not to work if we're at WIP limit? Won't my manager be mad?*" Before tech, she worked a **bar kitchen** with signs: **"if you can lean, you can clean."** At capacity, don't start new work — **advance work that's stuck**: do **research**, help with **testing**, help with **code reviews.** (Not "go home for the day" — find something other than starting new work.)

---

## 4. Make Priorities Visible

- **"Everything is urgent, so nothing is important."** **Security teams** have "one of the highest turnover rates" partly because of this — "no one wants to live like this." Make it easy, when you have capacity, to see **the single most important next thing** — via **priorities**, **clarity**, and **team agreements**; and focus first on **getting things over the finish line**, not always starting from To Do.
- **Color-code by feature** to make priority visible and check alignment:
  - If the **#1-priority feature has zero tickets** on the board → a conversation ("maybe it's fine, maybe not").
  - If a **#5-priority feature (blue) dominates** → the team is spending energy on **not-the-most-important** work.
- Do this at **all levels** (features/epics): e.g., "our org said **20% of features should be innovation-related**" — glance at the board and see 0% or 80% and react. **Map work to business outcomes / strategic goals / OKRs** so you can make **better, faster decisions with real information.**

---

## 5. Make Age Visible

- **Stagnant work:** started, then pulled off → moved out of the way → **out of sight, out of mind**. Code/tickets **age**; you build new stuff on top of old code. Returning to it means **re-learning requirements**, revisiting where you left off, and — worse — the requirements/priorities may have **changed**, and **stale merge conflicts** on old code eat time.
- **Fix: make work item age visible.** Imagine standups centered on "this ticket's been in progress 6 days / 3 days — which first?" When age is visible you have a **clear conversation**: usually "**how do we get it done fastest**," sometimes it reveals a ticket that's been de-prioritized for weeks. Options: **hand it off** (someone else picks it up), or **split a too-big ticket** into smaller ones.
- **Tools:** lots of plugins exist, but you don't need fancy — **don't trust Jira's "dots"** (you can't tell age); instead **put the start date in front of the story title** before starting, and **sort the board oldest-first.** Also great for surfacing Scrum **carryover** — if work routinely exceeds two weeks, **maybe a 2-week sprint is the wrong timebox.**

---

## 6. The Four Flow Metrics

- **Work in progress** — the **actual count** of work in the system (not the sum of WIP limits); varies day to day; goal is to **match team capacity.**
- **Throughput** — a **raw count** of items completed per period (not story points); track daily/biweekly/monthly.
- **Cycle time** — elapsed time between **start and finish** of a work item ("how long to complete one story/feature").
- **Work item age** — elapsed time between **start and today** (for **unfinished** work) — "**probably the most important.**"
- **Why they matter:** most metrics (burndown, velocity — "story points is a conversation over alcohol"), and even **cycle time/throughput**, describe **already-finished** work you **can't change retroactively.** **WIP and age are actionable *right now*** — look at the board and say "this is the oldest, this is what I get over the finish line first." All this data **already exists in your tools** — just make it visible → a **more predictable system** with a steady amount of work flowing start-to-finish.

---

## 7. Reducing Distractions & Uncertainty

### 7.1 Make it easy to say no
- Distractions are hard to refuse. Build a **clear system**: what are we working on, how much is in the system, and **what are the trade-offs** of picking up something new. **Leaders must model** this — when a PM/PO pushes work that breaks capacity, have the conversation: "we're focused on getting this over the finish line and don't want to exceed WIP because that work will just sit."

### 7.2 The sheep story (know the outcome, cut the noise)
- In **4-H** (a US farm club for kids), 10-year-old Colleen won a **bottle-fed lamb** in an essay contest. To win **grand champion**, a sheep's **hindquarters** must be strong (the judge feels them as you jam your thigh into its chest and it pushes back). She was told to **run** the lamb — but sheep hate that; harnessed, it **somersaulted face-first into the dirt**, and she came home "crying, dirty, knees skinned up, pissed off."
- Her **dad's better idea:** mount a busted **kitchen sink on a sawhorse** with boards so the sheep had to **stand on its hind legs to eat and drink**, **raising it** as they got comfortable. The next year she won **grand champion *and* reserve grand champion** — "we knew the **outcome** we needed to drive to, so we **cut out all the noise.**"
- Lesson: teams are busy closing tickets but **don't know where they're going.** Define the goal (complete this feature, deliver this product), then **cut the noise** and focus on delivering.

### 7.3 Forecasting & trade-offs
- **Reduce uncertainty** like using **Google Maps even when you know the way** (to avoid traffic) — looking for **updated, real-time information**, because software changes daily. Use **probabilistic forecasting** (books by "Nick and Dan" in the front row) instead of estimation to reduce uncertainty and skip estimation debates.
- **Everything is a trade-off.** (She's married to a developer, which "backfired" — asked to do something, he replies "do you want me to take the trash out *first* or unload the dishwasher?" — "shit, I did this to myself.") When a stakeholder says "this is higher priority, start it," a good trade-off conversation ("this ticket could be done tomorrow if I stay focused; if I switch, it slips to next week") gives them **better information to decide** — they may not relent, but the decision is informed.
- **Bottom line:** developer focus is **organizational health** — focused developers build better products, are happier and less stressed. Start by making **WIP and age visible** and having **trade-off conversations.** Distractions "aren't just annoying, they're **really expensive**" — and the hardest cost to recover is **lost talent** when great people leave for lack of focus.
- (Plug: **ProKanban.org** has a free **Slack community** that "nerds out" on these charts, forecasting, and extracting data from tools.)

---

## 8. Q&A

- **Most persuasive argument to shift leaders from estimates to forecasting?** Accuracy matters, but for engineering leaders start with **time spent estimating**: of the 70% non-coding time, how much is estimation? It's not just the weekly story-pointing hour — it's all the **upfront work** making stories "perfect" (requirements, developer input) so estimates are "perfect" (they never are). Better use of dev time: **keep writing code** so **throughput and cycle-time data** can **forecast delivery** more accurately than guessing at stories six months out.
- **Multiple stakeholders, conflicting priorities out of our control — how to prioritize?** **Visibility.** Nothing changes overnight, but **highlight how focus is spread** across priorities. The more work pulled in at feature/epic/project level, the **longer everything takes.** (She'll share ProKanban tools that show what happens as the number of priorities increases.)
- **Offering to help with someone's WIP makes them feel insecure / "slow" — how to make help okay?** Kanban saying: **"manage the work, not the people."** With data it stops being "John, why has your ticket been in progress so long?" and becomes "our **service-level expectation** is 85% of tickets done in ≤14 days; yours is about to hit 15 — should someone help or **swarm** it?" — a conversation about **work and data**, not calling someone out.
- **Meetings (standups, planning, retros, bug-fix) become waste — metrics to optimize them?** "Almost always more waste than good, unfortunately." Use the **flow metrics**: a **retrospective** should look at **throughput and cycle-time data** (marry quantitative + qualitative — "if you're not, you shouldn't be doing a retro"). Use **throughput data for sprint planning** → faster planning, and no need for six months of pre-pointed stories (forecast from past throughput).
- **From what moment do you measure work item age?** Great question — everyone assumes a different start (customer, product owner, developer pulling into dev). She can't answer it for you: **decide as a team and be explicit when the clock starts.** Some teams start at a **To Do column** (e.g., WIP limit of 3 there); you can also track **multiple** start points (e.g., dev → ready-for-test). "The most important thing is **measuring it consistently.**" (Analogy: how long it takes her to "get ready" — she counts from out-of-bed, husband counts the 45 minutes + two coffees.)
- **Waiting 2–3 days for code review — how to improve?** **Visibility** again. **Separate the development column from the code-review column** to see the congestion. Caution: **same people do both** — with 5 devs, a WIP of 5 in dev *and* 5 in review leaves something idle; balance capacity across the two activities (e.g., **3 in dev, 2 in review**).
- **How to kickstart a fresh backlog for a brand-new squad?** "**Don't.**" Backlogs are "one of the biggest time sucks" — time defining work you may never reach. **Define work just in time**, with a small runway (less than you'd think). "Maybe one of the biggest failings of Scrum" is planning/estimating work months before starting it — **review stories right before you start them** for better context.
- **You said ~30% coding — what's a good target? 50/60/70?** "I'd hope **more than half.**" Investing $10M in developers, you'd want **more than half** spent coding — "it's what you love to do and why you're in this field."
- (Closing gift: **socks**.)

---

## People, Tools & References Cited

- **Colleen Johnson** — speaker; CEO of **ProKanban.org**; co-founder of **ScatterSpoke**.
- **"Nick and Dan"** (front row) — books on **probabilistic forecasting** (Kanban/flow — Vacanti/Roock referenced by first name).
- Concepts: developer focus time; the six lean wastes (overproduction, partially-done work, defects, extra process, waiting); WIP limits & capacity (airport analogy); "if you can lean, you can clean"; "manage the work, not the people"; color-coding by feature; work-item age (start-date-in-title, sort oldest-first); the **four flow metrics** (WIP, throughput, cycle time, work-item age); service-level expectations; probabilistic forecasting vs. estimation; just-in-time backlog; trade-off conversations; the sheep/grand-champion parable.

---

*Video: https://www.youtube.com/watch?v=Rw-ZZv0H7ME — Transcript via yt-transcript.sh; outline generated from the transcript.*
