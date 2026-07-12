---
title: "Framework Agnostic Capacity Planning at Scale - Nick Brown | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Nick Brown (Thrive Partners) on evidence-based, framework-agnostic capacity planning across ~100 teams — critiquing bad templates and normalized story points, then teaching three practices: right-sizing features via percentile scatter plots, probabilistic forecasting to confidence levels with Monte Carlo, and continuous reforecasting at the feature level, all rolled up from teams to platforms to domains with portfolio alignment."
type: "reference"
tags: ["softwaredevelopment"]
---

# Framework Agnostic Capacity Planning at Scale - Nick Brown (Talk Outline)

> A **Craft 2025** conference talk by **Nick Brown** — a seasoned agility and product consultant, currently **principal flow consultant at Thrive Partners**, who has led agility adoption at **PwC, Nationwide, Royal Mail, and ASOS**, builds open-source tools for Jira and Azure DevOps teams, and (per his intro) once **owned a racehorse that broke even**. He admits the "fancy name" was chosen so people would attend a talk that is really about **making planning easier**. Format: a single-speaker slide talk (with recurring "how does it work in the real world?" payoff moments and real anonymized team data) followed by an extended Slido Q&A. The talk's own structure: critique the standard definitions and tools → name the problems → ground it in a real quarterly-planning failure → introduce the inspirations and the "framework-agnostic" idea → teach **three practices** (right-size features, forecast to confidence levels, continuously reforecast) → show it scaling from teams to platforms to domains → getting-started advice → Q&A.

---

## 1. What "Capacity Planning" Should Mean

### 1.1 The talk's real intent
- The fancy title exists so people would show up; the real subject is **planning in a more effective manner**.
- Capacity planning is something everyone working with agile teams has "invariably experienced."
- Nick's habit for talks: **Google the topic** and react to the top results.

### 1.2 Definition #1 — the circular non-definition
- First search result: "agile capacity planning is a part of the agile planning process in which you calculate the capacity of your team."
- His reaction: it's circular — "doesn't really tell us anything."

### 1.3 Definition #2 — the scrum-centric, project-manager version
- "Capacity planning is the process of evaluating the amount of productive time available in each sprint. Project managers use capacity planning to schedule work and manage software delivery."
- Two problems: it's **very focused on Scrum**, and it invokes a **project manager** — a role that **isn't part of Scrum**.
- His read: "that looks like a project manager wrote it."

### 1.4 Definition #3 — the one he likes (evidence-based)
- "**Capacity planning creates evidence-based expectations of what your team can achieve.**"
- Session goal: leave with **tools, techniques, and real-world examples** used in his organization to manage capacity expectations **using data and evidence**.

---

## 2. The Bad Tools and Templates in the Wild

### 2.1 The Smartsheet Gantt template
- Columns: resource, name, status (unclear — of the person? of the work?), start/end date, duration.
- Plotted as a **Gantt visual**.
- Quoting **Carl Scotland**: "that's not my agile" — not the agile he recognizes.

### 2.2 The Agile Digest Excel template ("$70, down from $75")
- "Hot off the press," discounted to **$70** from $75; the **big team capacity planning template supports up to 40 members**.
- It's an **Excel file** with a **15-minute video** just to explain it — "it takes 15 minutes to explain the Excel file."
- Rows telling you when someone does or doesn't have capacity. "Again, that's not really my agile."

### 2.3 The Scrum Alliance case study (one of the better ones)
- A case study with multiple agile teams on the same product/initiative.
- Good definition: how much valuable work in a **unified backlog** can reasonably be accomplished by multiple teams.
- Uses **SWAG estimates** to see who has capacity and where a team (e.g., a backend team) has a problem.

### 2.4 SAFe and "normalized story points" (probably the worst)
- **Normalizing story points across teams**: everyone gives something a "1" and that becomes the shared reference.
- The negative part: it **mandates a single way of working** — everyone must estimate in story points, and a story point is supposed to mean the same everywhere.
- "Invariably it doesn't" mean the same.

---

## 3. The Problems With These Approaches

### 3.1 Playing Tetris (cramming instead of limiting WIP)
- They focus on **cramming in as much as possible** — like fitting lines in Tetris.
- The opposite of what's wanted: **limiting the amount of work in progress** and encouraging focus before moving on.

### 3.2 The "frozen middle manager" squeezed from both sides
- The middle manager is "held at gunpoint" by both sides.
- **Senior leaders** say: "get in control."
- **Teams** say: "empower us — we want to choose how we work, how we estimate, how we plan."
- Result: managers **default to the not-so-good techniques** because they want to be seen as in control.

### 3.3 It takes far too long
- Capacity planning sessions in "war rooms" take **hours, if not days**.
- With the right information, data, and method it **should take seconds, at most minutes**.

---

## 4. Why This Is Relevant — A Real Quarterly-Planning Failure

### 4.1 The setup
- An image from a **quarterly planning session** at an organization Nick used to work in.
- Every quarter, people across the technology org gathered with a **prioritized, stack-ranked list of initiatives** (each given a prioritization score).
- Outcome ratings: good to go, **amber** (might not make it), **red** ("you ain't got a chance — we're not doing this").

### 4.2 Problem — a misaligned understanding of "capacity"
- Most people take "capacity" to mean capacity to **do/finish** something (per sprint, extrapolated to the quarter).
- Some teams read it as **"capacity to *start*"** — "a very weird definition."
- Illustrated with the **Jeff Patton** image about alignment vs. differing understandings.

### 4.3 Problem — pure guesswork
- Teams asked about capacity largely **guessed**: "I don't know, I think we might make it."
- **Finger-in-the-air** guesswork, not using evidence they already had.

### 4.4 Problem — fake "data-driven" (velocity plus buffer)
- Other teams thought they were data-driven: planning a number of **points per sprint** plus a **buffer / catch-up** for later sprints.
- **Masqueraded as scientific / data-driven** — "which it most definitely was not."

---

## 5. Inspirations and the "Framework-Agnostic" Idea

### 5.1 Prateek Singh — probabilistic thinking
- Highly recommends his book and talk.
- A conference talk **four years ago**: "**how many bottles of whiskey will he drink in four months**" — it's about agility, "not the confessions of an alcoholic."
- Lets you apply capacity-planning ideas in a **non-software context**.

### 5.2 The book *Scaling Simplified*
- One of his favorite books of the last 10 years.
- About **scaling agility practices** without being regimented ("do we do Scrum, Kanban, SAFe, LeSS?").
- Focus on **scaling flow practices** and how they enable better delivery at all org levels.

### 5.3 What "framework-agnostic capacity planning" means
- A **common approach to capacity planning across multiple teams** that still allows each team **autonomy in its way of working**.
- In this org: roughly **100 teams** — some use Scrum, some Kanban, some a blend, some continuous flow.
- They **encouraged** this diversity because that's where the best software/product teams come to life — with autonomy over their way of working.

### 5.4 The three practices (overview)
- Practice 1: **Break features down consistently** (right-sizing).
- Practice 2: **Forecast to confidence levels**.
- Practice 3: **Continuously reforecast**.

---

## 6. Practice 1 — Break Features Down Consistently (Right-Sizing)

### 6.1 What "feature" means here
- "Feature" = the **level above story** — call it epic, initiative, whatever; "I don't really care."
- In this org they called it **features**.
- Goal: focus on getting **features to done** the same way you focus on getting **stories to done**.

### 6.2 Slicing techniques to enable it
- Requires **slicing** features into **small, thin vertical slices**.
- **Neil Kick** — capability slicing, functional slicing, implementation slicing (different ways to slice a higher level).
- **Jeff Patton's story mapping** — plot the user's journey/flows, then identify the **first deliverable slice** that yields feedback and potential value.

### 6.3 The right-sizing concept (the fish tank)
- **Right-sizing** = making features **no bigger than a certain size**.
- Accept variation — not every feature is the same — but keep them **under a ceiling**.
- Metaphor: a fish tank fitting **multiple sizes of fish** (though the big one on the left "might be a struggle").

### 6.4 The scatter plot with percentile lines
- For each team, visualize features **completed in a time horizon** (for simplicity, the **last 12 weeks**).
- Each dot = one completed feature/epic, plotted by **completion date** (x) vs. **number of child items** (y).
- Draw **percentile lines** showing what percentage of features had a given child-item count.
- Real example: **85% of completed features had 7 child items or fewer** → the **right size = 7 child items**.
- So aim: keep features **7 or fewer** (some 1, 3, 5, 7 — the vast majority ≤7).

### 6.5 Visualizing open features against the right size
- Also visualize **open features** (started or not yet started) and their child-item counts, ordered by count.
- **Below right size** → fine (but the tool only knows what's entered; add items when appropriate).
- **At right size** → a **warning**: be careful about adding more.
- **Above right size** → a **red flag**; the top one shown was **more than double** the right size.

### 6.6 Teams control the percentile
- Default was the **85th percentile**.
- Teams could choose **95th, 70th, 50th** — entirely their control.
- Not "every team must use 85th or else."

### 6.7 Real-world team example — 26 → 10 child items
- A team liked the approach and looked at their own data.
- Period **21 Aug – 21 Oct 2023**: **4 completed features**, right size of **26 child items or fewer**, average **cycle time 40 days** (he apologizes to "Dan" for using the average).
- They decided their features were **too big** and changed the right size to **10 child items or fewer**.

### 6.8 The result after the change
- In the **following two months**: **19 features completed**.
- Batch size now **5 child items or fewer** (vs. 26).
- Average cycle time dropped from **40 days to 23 days**.
- Simply: **more, in smaller batches, quicker than before** — "the essence of agility," enabling faster feedback on whether it's the right thing.

### 6.9 Gaming — the bad and the good kind
- **Bad gaming**: faking slices — a "backend feature," a "front-end feature," even a "deployment feature" ("if you're feeling really creative") that aren't slices of value.
- **Good gaming**: if breaking down still yields **thin vertical slices** you can get feedback on — that's encouraged.

### 6.10 Prerequisite — actually move features/epics to done
- Teams must genuinely **get features to done**, not just stories.

### 6.11 Prerequisite — the work-item-age chart
- A complementary tool: **work item age chart** showing days a feature/epic has been in progress vs. its status/column.
- Includes **percentiles** for feature cycle time.
- **Hovering a column** reveals all items in it and how many child items remain or are completed.

### 6.12 Prerequisite — regularly monitor feature size
- Ask questions like: this feature has **73 child items** but the right size is **16** — is it really an MVP?
- "Probably not — probably the bastardized definition." Break it down for faster feedback.

### 6.13 Prerequisite — slice at all levels
- Break work into thin vertical slices at **all levels**, across **all layers of the tech stack** — not just one level.

### 6.14 Prerequisite — one team owns a feature
- Avoid features **shared by multiple teams**; each team should **own its part**.
- May require **adding a level above** (they chose "epic," even if unsure it's the right term).
- The exact naming (capability > epic, epic > features, OKRs > features) doesn't matter — it's about an **aggregating backlog level**.

---

## 7. Practice 2 — Forecast to Confidence Levels

### 7.1 Deterministic vs. probabilistic thinking
- **Deterministic** (how most were taught): assume **one outcome** — "this is the date we'll be done."
- Typically: sum story points ÷ average velocity, or sum child items ÷ average completion rate.
- **Probabilistic**: a **range of outcomes**, multiple possible ship dates, each with a **probability**.

### 7.2 The two approaches side by side
- **Deterministic**: average throughput × weeks in a quarter → e.g., "this team has capacity for **36 items**."
- **Probabilistic**: weekly completed range **1–5 items** × **12 weeks** = **12 to 60 things** in the period.

### 7.3 Why the raw range isn't practical
- You can't tell stakeholders "**12 to 60 items**" — "you're absolutely right," not pragmatic.

### 7.4 Monte Carlo simulation (how to do it practically)
- Instead of one burn-up producing one outcome, **run it many times**, each time **sampling different historical data**.
- This yields a **probability distribution** across possible outcomes.
- In this scenario, about **4,000 simulations** → probabilities attributed to outcomes.
- Read more under **Monte Carlo simulation** / **probabilistic forecasting**.

### 7.5 The forecast output
- Using Jira / Azure DevOps data, for the next **12 weeks**:
  - **95% likely** → **70 items or more**.
  - **85% likely** → **76 items or more**.
  - **50% likely** → **86 items or more**.

### 7.6 Combining forecast with right size → feature capacity
- Combine the item forecast with the right size to get **feature capacity**.
- At the **85th percentile**: **76 items**, right size **~4 child items/feature** → **~19 features** forecast for the next 12 weeks.
- Few clicks → quick understanding of a team's upcoming-quarter capacity.

### 7.7 Percentile is a team-controlled risk lever
- Teams can pick **95th, 70th**, even the **5th** ("if they were feeling rather stupid").
- Based on their **context**, it lets them **manage risk** — "we're not just saying that's the number."

### 7.8 Real-world validation — the quick sanity check
- Quickest validity check: compare the **forecast number (right)** against the **number of dots (left)** — this period forecast vs. last period actual.
- Three teams all chose the **70th percentile** and the forecast was **bang on** vs. what they actually completed.

### 7.9 Real-world counterexample — bad data
- One team completed **5 features** but the model forecast **11 at the 85th percentile** — more than double.
- "Data doesn't always equal the answer" — some teams had **crap data**.

### 7.10 "Computer says no" — data informs, doesn't drive
- **Little Britain** sketch: the woman in the wig behind the desk just taps keys and repeats "**computer says no**," with no pragmatism about the customer's needs.
- Lesson: data should **inform** decision-making, **not drive** it.

---

## 8. Practice 3 — Continuously Reforecast

### 8.1 Feature WIP = 1 (easy)
- With only **one feature in progress**, forecasting is trivial.
- Example: 10 child items remain; throughput of 4 → 6 left; next week complete 5 → 1 left.

### 8.2 Feature WIP = 2 (unpredictable splits)
- With **two features**, the completion split is unpredictable: 0/4, 1/3, 2/2, 3/1, or 4/0 across features A and B.
- Accounting for this over a quarter "becomes a bit of a pain."

### 8.3 Apply probabilistic forecasting at the feature level
- Use the same story-level probabilistic technique **at the feature level**.
- Inputs: **time horizon**, **confidence level**, and — crucially — **how many features run in parallel**.
- Note: "I don't think I've ever come across a team that works on one feature at once."

### 8.4 The feature forecast view
- **Left**: open features from the backlog in the tool's **priority order** (which may prompt teams to rethink priorities).
- For each, look at **child items remaining**, then forecast **how many weeks** it will take from historical completion rates and other factors.

### 8.5 The color coding
- **Green** — finishes before or on the target date.
- **Orange** — misses by **up to a week**.
- **Red** — misses by **more than one week**.
- Teams can play with the parameters — "giving teams control," showing "the consequence of your actions."

### 8.6 Making "stop starting, start finishing" concrete
- A common agile-coach slogan / laptop sticker: "**stop starting, start finishing**."
- This tooling makes it real for people outside the "agile bubble": **fewer features in parallel → more gets done**; more features → less gets done.

---

## 9. Does It Scale? — Real-World Application

### 9.1 The Miro board team section
- A large **Miro** (digital whiteboarding) board; each team in a common area fills a section **ahead of quarterly planning**.
- Data anonymized to protect individuals/teams.

### 9.2 Capacity minus carryover (the thing planning usually misses)
- A team uses capacity planning to see **how many features they have capacity for**, plus Monte Carlo to see **what won't finish** before the next planning event and will **carry over**.
- Key insight: features/epics **don't magically finish** at the planning boundary — they carry over.
- Example team: capacity for **8 features**, but **4 carry over** → capacity for only **4 new** features.

### 9.3 The 95th-percentile team (new members)
- This team chose the **95th percentile** because they have **new team members**, expecting reduced initial throughput during onboarding.
- Went with 95% likelihood to **manage expectations**.

### 9.4 The 85th-percentile team (bigger features)
- A different team chose the **85th percentile**, capacity for **4 features**, with **bigger feature sizes** and **2 items carrying over**.

### 9.5 Rolling up — teams → platforms → domains
- Teams grouped into **platforms**; platforms grouped into **domains**.
- At platform level: what capacity do the teams have, what's carrying over, and a link to their part of the Miro board.

### 9.6 The delivery plan (not a road map)
- On the left, a **delivery plan** rather than a road map: when carried-over work is likely to finish (from Monte Carlo dates) and **where the gaps are** (e.g., some teams free around **November–December**).
- **Green dots** = cross-team **dependencies** intact; **red** = dependencies **broken**.

### 9.7 The domain level and portfolio alignment
- At **domain** level, multiple platforms aggregate; e.g., **26 of 40 features** across teams already taken → some but not much spare capacity.
- **Portfolio alignment** metric: each epic/feature correlates to a **strategic pillar**, and each pillar has a **monetary value** (cost saving or revenue) — "how accurate those numbers were, you can probably guess."
- Purpose: let teams, platforms, and domains see **how much of their work aligns to strategy** — "how much of our work goes all the way to the top" — because there's nothing worse than working a story without knowing how it fits the big picture.

---

## 10. Getting Started — Advice

### 10.1 Make sure it's a real problem worth solving
- Don't take it back to your org just because "it looks cool" — only apply it if it addresses a real problem.

### 10.2 Be prepared to explain it "again and again"
- Expect to **invest time explaining it repeatedly**.

### 10.3 Use fictional data when real data is missing
- If teams lack data to start, **use fictional data to help them learn**.

### 10.4 Sell it via benefits to the planning participants
- Talk about it from the **benefits to the people involved** in planning — not as a consultant/coach lecturing about agility.
- He and a colleague even **adopted personas**, Nick sporting a **green wig** as "**Nichollet Broom**" (vs. Nick Brown).

### 10.5 Free GitHub templates
- Free tools via a couple of **GitHub repos**: one for the **capacity planning**, one for **flow metrics at the epic/feature level**.
- Download, connect to your org data, give it a go; expect bugs — **raise them and he'll try to fix them**.

---

## 11. Summary

### 11.1 The closing points
- In large organizations, capacity planning is a **necessary technique**.
- It should be **framework-agnostic** — not prescribing that every team estimate in story points.
- **Use data** — most of it likely **already exists**; you don't need to radically overhaul teams.
- **Trust teams** in the decision-making — don't rely on data alone or become the "computer says no" persona; let **data inform** the team's decision.
- The three practices: **break features down**, **forecast to confidence levels**, **continuously reforecast**.

### 11.2 Personal plug
- A **book** exists on doing (not just theorizing about) these things — with a **50% off** code for conference attendees.
- Invitation to connect on **LinkedIn** ("passively aggressively liking things that wind people up").

---

## 12. Q&A (Slido)

### 12.1 Q1 — Fresh team, no historical data, short project — how to forecast predictability?
- If someone on the team has **experience**, ask them.
- Otherwise, **guess and quickly reforecast** as data arrives.
- "Don't overthink it."

### 12.2 Q2 — How much trial/tinkering does a new team need for accurate estimations?
- "**Accurate estimations is an oxymoron.**"
- From his past look at percentiles: using the **85th percentile, ~90% of the time teams matched or beat it** — go there to be conservative.
- Generally he finds around the **70th percentile** works.
- Look at forecast **variation**, decide, and watch the future: if at the 70th you did way more, drop to the **60th**.
- The beauty is these techniques are **context-specific** and embrace the changes teams go through — play with percentiles to find your context.

### 12.3 Q3 — With "stop and organize," what happens to ongoing work / people who free up in between (planning events)?
- **Not everyone attends** planning — from a team of 10, you'd pick **2–3 people**.
- The **ongoing / keep-the-lights-on work** and finishing off features continues meanwhile.

### 12.4 Q4 — How do you represent enterprise architecture work in agile workflows?
- "Enterprise architecture and agile in the same sentence often don't really gel."
- What has worked: **architects work closely with teams** so technical decisions align with organizational architecture strategy.
- Also a **big upfront portfolio intake** where enterprise architecture checks alignment with technical direction.
- Effectiveness varied — "in some instances it really didn't."

### 12.5 Q5 — (Client-project scenario) How to forecast for a brand-new client engagement?
- As a team, **estimate a throughput range** — how many items per week.
- Probably pick a **95th percentile** to be conservative on risk, caveated by having no experience with the client/org.
- After a few weeks, **reforecast continually** (viewable daily) — "covering your back" while learning.

### 12.6 Q6 — "I'd skip crucial arguments because ROI is bad short-term and I'm avoidant anyway — isn't that bad?"
- "I'm not a therapist."
- It depends on what it does for you, your org, your relationships.
- Try working with someone who is **your opposite** and understand their needs.
- References the **keynote's desert/forest metaphor** (Kent Beck's keynote): if you're a "forest person," spend time with a "desert person" and see if the thinking is that bad.

### 12.7 Q7 — Conservative waterfall stakeholders starting many features at once and unwilling to prioritize — how to get them on board?
- Let them **experience the consequences** via simulations — e.g., **getKanban**, the **"featureban"** game from **Mike Burrows**.
- Use the **Monte Carlo** data to show that working on, say, **20 features at once** wrecks delivery — they come at it from a **delivery perspective**, so show the consequence of their actions.

### 12.8 Q8 — How to forecast when team membership constantly changes due to management decisions?
- **Don't forecast too far** out.
- If the team is constantly changing, forecast **short-term**, not for the whole quarter.

### 12.9 Q9 — Teams that aren't good at breaking down items — any tips?
- Use the slide references: **Neil Kick's** capability slicing is a great one.
- Most effective in his experience: **Jeff Patton's story mapping** — practice on a fictional context, then apply to your own.
- Story mapping "visualizes everything so there's nothing hiding" — everyone sees the different options.

---

## People & References Cited

- **Nick Brown** — speaker; principal flow consultant at **Thrive Partners**; former agility lead at PwC, Nationwide, Royal Mail, ASOS; builds open-source Jira/Azure DevOps tools; once owned a racehorse (broke even).
- **Prateek Singh** — probabilistic-thinking inspiration; the "how many bottles of whiskey in four months" talk and his book.
- **Neil Kick** — slicing techniques (capability, functional, implementation slicing).
- **Jeff Patton** — story mapping; also the alignment/"different understandings" image.
- **Carl Scotland** — quoted "that's not my agile."
- **Mike Burrows** — creator of the **featureban** simulation game.
- **"Dan"** — colleague referenced re: cycle-time averages and a related same-conference talk.
- **Kent Beck** — the referenced keynote (desert/forest/genie metaphor).
- **Companies/orgs:** PwC, Nationwide, Royal Mail, ASOS, Thrive Partners; the anonymized ~100-team organization.
- **Tools/products:** Jira, Azure DevOps, Miro, Smartsheet (Gantt template), Agile Digest (Excel template), Scrum Alliance (case study), getKanban; free GitHub templates for capacity planning and epic/feature flow metrics.
- **Frameworks/methods:** Scrum, Kanban, SAFe (normalized story points), LeSS, continuous flow; the book *Scaling Simplified*.
- **Media reference:** *Little Britain* ("computer says no"); SpongeBob ("how does it work in the real world").
- **Concepts:** evidence-based capacity planning; framework-agnostic scaling; right-sizing; child-item scatter plots and percentile lines; work-item-age chart; thin vertical slices; deterministic vs. probabilistic forecasting; Monte Carlo simulation (~4,000 runs); confidence levels/percentiles as risk levers; feature WIP; continuous reforecasting; color-coded feature forecasts; "stop starting, start finishing"; carryover-aware capacity; teams → platforms → domains rollup; delivery plan vs. road map; cross-team dependency dots; portfolio alignment to strategic pillars with monetary value.

---

*Video: https://www.youtube.com/watch?v=BQDILfWiRAc — Transcript via yt-transcript.sh; outline generated from the transcript.*
