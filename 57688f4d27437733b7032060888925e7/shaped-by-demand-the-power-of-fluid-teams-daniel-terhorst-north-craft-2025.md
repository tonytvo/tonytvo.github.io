---
title: "Shaped by Demand: the power of fluid teams - Daniel Terhorst-North | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Daniel Terhorst-North on demand-led planning — the five kinds of work, debunking 'stable long-lived feature teams' (Tuckman), and shaping fluid teams to fit demand with governing and enabling constraints, bumblebees, BHAGs, and autonomy-through-alignment."
type: "reference"
tags: ["softwaredevelopment"]
---

# Shaped by Demand: the power of fluid teams - Daniel Terhorst-North (Talk Outline)

> **Daniel Terhorst-North** (~30 years in IT; coined BDD) on organization design — for 10–15 years working out "what shape an org should be." Golden nugget: **take care of each other; compassion is what matters.** Definition: **"build the best structure we can to do the best work we can — *for now*"** (context changes). The challenge evolved from getting **8** people pointing the same way (cross-functional teams, ~2000s) to **80 or 800** (only solvable after you've solved the 8).

---

## 1. The Goal of Org Design

- Big consultancies push cookie-cutter approaches; asked "what's the outcome?" they go "crickets… (billable hours)." His pithy definition: **the best structure to do the best work, for now, knowing it'll change.**

## 2. What Is "the Best Work"?

- Not just **delivery** (ship/enhance features) — the whole picture:
  - **Discovery** — **solution-space** (solve the problem better) and **problem-space** (understand user needs better).
  - **The work about the work / Kaizen** — his broader definition: continual improvement of the **system of work** (technical improvements, automation, and **learning/development** — Evette teaching him a thing is *first-class work* that changes the system so two people now know it).
  - **BAU** (business-as-usual / run-the-bank) — reports, controls, compliance/security/regulatory/audit.
  - **Failure demand** — **work that should never have existed** (outages, process/reconciliation failures) *plus* all the follow-up (finding/fixing corrupted data, the meetings about the meetings).
- **Mandatory spend** = BAU + failure demand (can't skip and stay in business); **discretionary spend** = delivery + discovery + Kaizen.

## 3. Debunking "Stable, Long-Lived Feature Teams"

- The **received wisdom** sold by Scrum/SAFe/LeSS/Scrum@Scale training. If it weren't true, none of the scaling apparatus would matter.
- **"Stable"** ← **Bruce Tuckman**'s meta-study (forming/storming/norming/performing) — but **50% of its groups were therapy groups** (individuals feeling vulnerable, sometimes under duress) and **25% HR training** (eyes-forward, slides); only **25%** were actual working groups. Later studies (a good US military one) show the stages happen **concurrently and very fast** — a shared-culture consultancy team (his decade at ThoughtWorks) performs in **hours** because of shared values/expectations/capability. So teams **don't need to be stable to perform.**
- **"Long-lived"** (a corollary of stable) assumes **homogeneous work over time** — false: at **Bank of America**, ~150 London / 200+ NY people faced **30–40 scary legacy systems** and work that changed dramatically quarter to quarter (mainframe updates one quarter, SQL tuning the next) — Scrum couldn't cope.
- **"Feature team"** ignores that some work is **Kaizen/automation/tech-debt** — needing **different team shapes**.
- Conclusion: instead of **shaping demand to fit teams**, **shape teams to fit the demand** (demand is the relatively fixed thing).

## 4. Demand-Led Planning

1. **Identify *all* the demand** — we're good at identifying demand but bad at seeing what **hides in plain sight**. Case study (**Gene Kim / HP LaserJet firmware**): measuring **failure demand** revealed **~95%** (2 hours/week of discretionary time — "methodology is irrelevant then"); 8 months of dull automation/tests drove it to **40%** → **3 days/week** to do work. Mandatory demand is a rich **source of Kaizen** (production failures → improve path-to-live/testing/resilience; reporting toil → automate).
2. **Allocate discretionary spend** — decide the mix of feature/Kaizen/discovery each quarter (e.g., 80/20 to Kaizen this quarter). **The only rule: none goes to zero** (features = "walking-around money"/reputation; Kaizen = improvement; discovery = not flying blind).
3. **Pitch the demand** — sponsors (product managers for features; platform leads / report-owners for Kaizen) pitch to **everyone in the room** (30–200 people; **fly them together** — virtual is "a bit rubbish"; the energy is palpable).
4. **Introduce constraints:**
   - **Governing** (rules of the road): **3–10 people** per team (fewer → always in meetings; more → in each other's way); teams **fully autonomous** (specific meaning: never **blocked on another team** — else your "priority 2" item sits at 2 forever); teams need **skills, knowledge, experience, relationships, permission, and resources** (things, not people); and **you must do all this work**.
   - **Bumblebees/butterflies** — people deliberately **not** in a team who rove between teams (≤3 teams per bumblebee, ≤3 bumblebees per team — heuristics).
   - **Enabling** (encourage behavior): min/max **movers** per quarter (early John Lewis: "only two people may stay" to force knowledge transfer; later "no more than two may leave" for stable metrics), min/max **tenure** (e.g., 2–3 quarters).
5. **Self-organize** against the constraints — expect ~30 seconds of nothing, then someone brave (a contractor) walks to the unloved reporting work and others follow (applause). Iterate **2–3 times** to a workable configuration ("mostly right" is fine).
6. Each new team declares a **BHAG** (aspirational OKR — automating 2/3 of a 10-step process is a great quarter) and a **team name** (naming is hard). Then **break bread** (pub).

## 5. Making It Work

- **Before:** evangelize up and down — get the **"suits"** (money/risk/compliance) comfortable with "shaking 100 people in a bag," and get the 100 people comfortable too (expect **literal tears and tantrums** — a program manager rage-quit calling it a waste, then two years later: **"you were right, I just needed to process it"**). The scariest thing is **uncertainty** → road shows, lunch-and-learns, AMAs; **coach sponsors** to pitch (they get sharper by the 2nd/3rd session); recruit **facilitators** (ideally experienced); big room, **natural light**, fruit + good coffee.
- **During:** **manage energy, not time** (structure for meals/breaks, otherwise flex); contain loudmouths; **listen to your facilitators** (they see what you don't); keep the conversation flowing (bring stationery; draw in the quiet domain expert, gently rein in the loud one — teams **form/storm in real time**, minutes not weeks).
- **After:** follow up with an **academically defensible Likert survey** (built with an academic — "most surveys aren't defensible"; cf. **Nicole Forsgren**). Statements like "I feel connected to the work / excited about next quarter / can see how my work impacts the business" landed on **4–5 (agree/strongly agree)** — real connection vs. work handed down a backlog.

## 6. Metrics, Identity & Management

- Teams measure themselves with **throughput** (things done since last time), **lead time** (a **range**, not a number), and **WIP** — "don't even define 'things'; each team counts its own." Reviews are **forward-looking** — not "what have you done" but "**how much is left**, and what's the best way from here to the goal?" (OKRs).
- **Identity is in the program team** (~50–100, sweet spot ~60–80); the current squad is **transient**. (Early **Spotify** tribes had matrixed belonging — "streaming squad" vertically, "testing guild" horizontally — before squads calcified into long-lived teams.)
- **Management** in a lean org **manages a system of work that has people in it**, not people (not "policeman + mom"). The **sponsor who cares enough to pitch** de-facto leads that work, then rejoins the pool — **decoupling seniority from management**. Employee-lifecycle stuff (appraisals, recruiting) happens **out of band**, ideally owned by **guilds/practices** (testers appraise testers — no conflict of interest).

## 7. Q&A

- **Ownership / on-call with fluid teams?** The **program team owns its world**, so the work doesn't vanish; people generally **care more**, and on-call becomes a **rich source of Kaizen** ("if we automated X, this whole class of pages goes away → pitch it next quarter").
- **Is full autonomy even possible?** It's **not binary** — **autonomy through alignment**: governing constraints (which side of the road, stop on red) let anyone drive anywhere. **Alignment without autonomy = autocracy; autonomy without alignment = anarchy.** Give the **minimum** guidance/constraints + the resources they need, and people **surprise you** (mission command, post-WWII US military).

---

## People, Companies & References Cited

- **Daniel Terhorst-North** — speaker.
- **Bruce Tuckman** (forming/storming/norming/performing — critiqued), **Gene Kim** (HP LaserJet failure-demand case), **Nicole Forsgren** (surveys), **John Willis** ("fractional evangelist"), **Cat Hicks**, **Kent Beck**, **Nigel Thurlow**, **Dave Snowden** (referenced).
- Orgs: **ThoughtWorks, Bank of America, John Lewis, Spotify**.
- Concepts: demand-led planning, five kinds of work, failure demand, Kaizen (system of work), governing/enabling constraints, bumblebees, BHAGs, throughput/lead-time/WIP, autonomy-through-alignment, program-team identity.

---

*Video: https://www.youtube.com/watch?v=IPKb9XymCEE — Transcript via yt-transcript.sh; outline generated from the transcript.*
