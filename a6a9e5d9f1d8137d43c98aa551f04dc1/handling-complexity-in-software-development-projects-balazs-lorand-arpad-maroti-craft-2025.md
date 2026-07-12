---
title: "Handling Complexity in Software Development Projects - Balázs Lóránd, Árpád Maróti | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Balázs Lóránd and Árpád Maróti (Continental) on matching work mode to project phase and complexity — the Stacey matrix, architecture-driven team organization, and hard-won lessons across pre-development, productization, and fine-tuning of automotive parking software."
type: "reference"
tags: ["softwaredevelopment"]
---

# Handling Complexity in Software Development Projects - Balázs Lóránd, Árpád Maróti (Talk Outline)

> **Balázs Lóránd** (economist; 25 years leading people; joined **Continental** in 2018 to build its **largest global AI development center** in Budapest; head of AI for the **Autonomous Mobility** business area) and **Árpád Maróti** (software architect, ~8 years in automotive, ~6 in architecture roles) share "our sweat and blood" — mistakes, failures, and errors — so you can be efficient and not repeat them. The through-line: how **architecture relates to organization**, and how to **match work mode to phase and complexity**, illustrated with **automated parking** (their Budapest focus).

---

## 1. The Portfolio & the Complexity

- Continental started with **hardware components** — smart **camera, radar, LiDAR** for ADAS/self-driving — and increasingly does **software and system solutions** for functions like **parking** and **cruising**. Examples throughout come from **parking**.
- ADAS complexity: many functions (e.g., **emergency brake assist**), across **hardware/software/system** domains, for customers/markets in **North America and Asia** (different expectations), from facilities in **India, Romania, Mexico, Hungary**.
- **Software landscape of automated parking:** find slots → plan a path → park. On the surface **one software system**; decompose architecturally into **multiple interacting software products** (e.g., **computer vision**) → **components** (e.g., object detection on images) → **units/classes**, delivered continuously by a **large organization**, plus **configuration/variant management** — "pretty much complicated."
- **Three phases** (don't start with the huge codebase):
  1. **Pre-development** — build a demo vehicle/solution to show customers and win projects.
  2. **Productization** — a real product fulfilling **automotive standards** on **target hardware** in the **target environment**.
  3. **Fine-tuning** — the last mile with the customer: fix found bugs, tune parameters.
- **Innovation is everywhere** (all three phases), **bottom-up** (a small team on a function) and **top-down** (e.g., replacing the **whole neural-network architecture** last year; **low-level fusion** supported by neural nets; **radar-vision parking** — replacing traditional **ultrasonic** sensors with Continental's **radar**).

## 2. Phase 1 — Pre-development

- Goal: **get to market.** Smart colleagues build a working **demo**, show it to customers, collect feedback, rework, repeat.
- **Chicken-and-egg** ("who do you show it to with no customer yet?"): Continental is known first for **tires** — but its broad automotive relationships with **OEMs** globally make it easy to show a demo and get feedback.
- **Stacey matrix** intro: axes of **requirement uncertainty** (vertical) × **technological uncertainty** (horizontal). Pre-development sits **in the middle** — target hardware unknown, requirements shift on feedback → **Scrum** fits (iterative, continuously improving).
- **Driving principles for pre-development:**
  - If you want to be agile, **really be agile** — focus on agile values; **bring working solutions first** (you can't sell a bucket of requirements).
  - **Co-locate** — they had a **test vehicle on site**; try software out locally instead of shipping it across continents.
  - **Empower/trust teams** — a change-control board approving every change slows everything down.
- (Kent Beck framing) audience agrees pre-development is a **"forest."** But it ends when you **win the award/customer** → hundreds of contracted requirements, deadlines, and the chance to **monetize**.

## 3. Phase 2 — Productization

### 3.1 The transition (do it consciously)
- Assess what you carry over. **Positives:** you have **know-how** (a working solution), **confidence** (you won against other suppliers), and an **agile mindset** with empowered, happy teams.
- **Negatives:** **technical debt** (corners cut for the demo), **implementation gaps** (a demo doesn't show everything — what about a **broken camera**, **snow**, **leaf-covered park markers**?), **overconfidence / unknown-unknowns**, and strict **automotive processes** (documentation, architecture, requirements, **traceability**) that **contradict** the agile way.

### 3.2 The "waterfall" fake-out
- Reassess on the Stacey matrix: requirements clarified, target hardware known, processes known → all axes go to the **known** direction → the **"simple"** quadrant → apparently **back to waterfall** ("how do we sell job ads then?").
- **The trick (by intention):** at high level parking is well-understood (unchanged in 50 years; **C++ for 20 years**) — no uncertainty. **But break the problem down with architecture** and sub-problems have their own uncertainty.
- **Live audience vote (their own Slido)** rating three sub-problems on the matrix:
  - **Computer vision** → **complex** (can you enumerate everything to detect? AI vs. classical CV?).
  - **Path planning** → **complicated**.
  - **Odometry** → **simple** (the keystone — without knowing your velocity/acceleration/position you can't park; but well-known tech).
- Map **teams** onto the matrix as you rated their problems. Conclusion: **don't take "the agile hammer"** and put everyone in a Scrum team — some problems are better done more simply.

### 3.3 Aligning differently-working teams
- **Different teams can use different work modes even within the same phase** (some agile, some waterfall) — that flexibility is fine; don't standardize everyone.
- Alignment comes not from perfect tools/processes but from **empowered people at the interfaces** — good colleagues who connect and synchronize teams with the specific (non-standardized) interactions they need (maybe not a daily standup, maybe call it something else).
- Automotive requires **lots of documentation** (you don't want to ride in a car built without QA/QM/QC) — but keep **only** the processes/documents that genuinely help; eliminate the rest. Be prepared **every second** for the next requirement change.
- **Productization principles:** have tools/processes but only what's important; lots of **synchronization/alignment/communication**; a manager's most important job is to **provide context**.
- (Audience) plenary vote leans more **"desert"** here.

## 4. Phase 3 — Fine-tuning

- Why needed: integrate the solution on the **customer's vehicle** (the real environment), discover problems earlier as the deadline approaches; the project succeeds only when the **customer approves**.
- **Reorganization:** a **base team** (Europe) develops the base solution; an **application team** near the customer (e.g., a Japanese/Far-East OEM in Asia) does **local adaptations** (tune parameters, change the UI), finds and reports bugs; base provides **bug-fix releases**. Close to the customer (good) but **limits communication efficiency**.
- As deadlines near, the customer gets anxious → **negotiations** (positive): convince them you'll deliver, and align on changing the **schedule**, moving **content/features** to later releases, or (if they "want everything now") aligning **priorities**.
- On the matrix: this is about **requirements** (delivery timing, priorities, deadlines) → move **up**; but late in the project you **can't make big technical changes** → technology is more limited → you land at the top. "This is **political** — aligning with the customer, discussing deadlines is politics."
- **Fine-tuning advice:**
  - You'll get **many reports** that things aren't working/on time → find the **real** problem (a **car crash** beats a quality-debt report — focus on the burning topic).
  - Budget for **flights** — bring base engineers to the application team to react faster.
  - **Communicate constantly** — if firefighters don't know the next step / the most important problem, it's a disaster; keep everyone on meaningful work.

## 5. Key Takeaways

1. **Different work modes for different phases** — and different teams can use different modes **within one phase**.
2. **Consciously drive the transitions** (e.g., teams must know when they now have to write requirements) or you get chaos.
3. Use **architectural design** to identify the complex parts and **organize teams accordingly**.
4. It's all about **value to the customer** — only they pay/provide revenue; check the value of each step.

## 6. Q&A

- **Collocation vs. post-COVID/Zoom era?** More important now to be together; after COVID they reviewed the **global footprint**, streamlined, and concentrated **more people per topic in one location** (parking's largest team is in **Budapest**) — easy to form a **task-force room** when urgent.
- **How do you assess team complexity — doesn't every team claim theirs is the most complex?** Not really about emotion; some people dislike agile, some like it, and that drive matters — but **complexity rating is done mostly top-down by the architects**.
- **How to explain to the client how priority/schedule changes affect complexity?** Talk requirements, deadlines, what's feasible in **simple terms**; automotive is under huge pressure (esp. from China); show **transparency**, involve the customer with demos, agree what to remove/keep — backed by the **sales/marketing** teams and existing references.
- **Difficulties syncing differently-working teams / avoiding deadline shifts / team utilization?** Make **waterfall teams deliver something early** (partial but usable) for the others; you need **working DevOps / continuous everything** or agile teams slow down and revert to waterfall; team utilization does vary by phase and month — find the right balance.
- **How to make synchronization efficient without it taking too much time?** Depends on how much standardization you demand vs. **trust** — empower people ("this is your duty, don't leave the room until it's synced") rather than forcing everything into Jira/Confluence; find the **key people** with the right experience rather than a rigid top-down design.
- **Approaching customers with demos as a startup with no customer base?** Not their profession, but automotive is a **small world** — invite a **senior ex-executive / independent consultant** onto your board and leverage their **network**. It's about networking.
- **Do app teams modify/extend the base code — how is the base maintained?** They find bugs and can submit **pull requests** to the base; or, for something like the **UI** (button vs. touchscreen vs. voice per OEM), they **branch off** and integrate their own — both work.
- **Handling a complexity jump mid-project?** Continental's **150-year stability** and resources allow **quarterly reorgs** — reallocate people, form **quick-reaction forces / expert task forces**, with management support.
- **Effort split base vs. on-top, and know-how transfer?** For parking, base is ~**80–90%** (parking is similar across OEMs); the **easiest know-how transfer is moving people** between (co-located) teams for a few months.
- **Planning a waterfall team that depends on a Scrum team?** Use **time-boxing** with **milestones/deliverables**: the Scrum team has **freedom to act** (plan, make-or-buy) inside the box, then delivers back into the waterfall structure at the box's end.

---

## People, Companies & References Cited

- **Balázs Lóránd** — head of AI, Autonomous Mobility; leads Continental's largest global AI dev center (Budapest).
- **Árpád Maróti** — software architect, Continental.
- **Continental** — automotive supplier (tires + ADAS components, software, systems); 150-year history; facilities in India, Romania, Mexico, Hungary.
- **Stacey matrix** (requirement × technological uncertainty), Scrum, waterfall, DevOps, time-boxing.
- **Kent Beck** — "forest vs. desert" framing referenced.
- Domain: ADAS, automated parking, computer vision, path planning, odometry, radar-vision parking, low-level fusion, C++, OEMs, base vs. application teams.

---

*Video: https://www.youtube.com/watch?v=vJi8agDfonc — Transcript via yt-transcript.sh; outline generated from the transcript.*
