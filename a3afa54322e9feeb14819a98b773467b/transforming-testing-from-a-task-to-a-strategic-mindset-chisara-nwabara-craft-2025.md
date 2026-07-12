---
title: "Transforming Testing from a Task to a Strategic Mindset - Chisara Nwabara | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Chisara Nwabara (Chisology) on why delivery projects fail — reusing the testing trio (definition of ready, acceptance criteria, definition of done) across the whole product/service life cycle, six recurring project pitfalls with real examples, and a closing Q&A on spikes, disengaged teams, and shared terminology."
type: "reference"
tags: ["softwaredevelopment"]
---

# Transforming Testing from a Task to a Strategic Mindset - Chisara Nwabara (Talk Outline)

> A Craft 2025 (Budapest) talk by Chisara Nwabara — service/product specialist, evidence-based program management practitioner, former horse trainer and current dog trainer living in Budapest. Original title: *"Why Delivery Projects Fail: Transforming Testing from a Task to a Strategic Mindset."* She sets teams up to solve their own problems ("my favorite part is when people realize they can solve their own problems for themselves") and argues a *testing mindset* belongs across the whole product/service life cycle, not just inside the Jira backlog. Structure: confessions → defining success (ready / AC / done) → six pitfalls → takeaways → Q&A.

---

## 1. Confessions (the operating principles behind a testing mindset)

### 1.1 Don't do more than is absolutely necessary
- She dislikes wasting energy.
- Test only what you need *now*; leave the rest for later.
- Metaphor: put the **big rocks in the jar first**, then fill in with the small ones after attacking the biggest pieces.

### 1.2 Don't repeat yourself
- When she finds a pattern, she establishes a pattern or framework so she doesn't do the same thing again.
- This may be automation, or simply a **preset** for a recurring daily task so she can "focus on the net new each time."

### 1.3 The only real failure is not learning
- "The only time I personally believe that I failed is if I've done something and I haven't learned enough from it to know it was a good idea or a bad idea."
- Good idea or bad idea, if you learned something, that's a win.
- Aside: she finds this useful even in **dating** — "even if it was a bad connection, I learned something... which means there was growth."

### 1.4 Don't waste time — test the plan
- The best way to save time is to make a plan and **test that plan well**.
- To test something well, you must do at least a little planning up front.

---

## 2. Defining Success — Beyond the Jira Backlog

> The framework is familiar (the audience confirms "old news"), but she applies it outside coding/engineering/a Jira backlog: **definition of ready → acceptance criteria → definition of done.**

### 2.1 Definition of Ready ("Are we ready?")
- Ensure readiness before starting — usually a **checklist**.
- If you don't actually have what you need to start, she advises not to start (though people usually start anyway).
- This does **not** mean do nothing — it means be honest about what you do and don't have ready.
- Her project checklist acts as a **litmus**: how much do we know now vs. how much is left to figure out. Even without all the answers she'll start, but she knows what's next.

#### 2.1.1 Example — a shared project name
- What you call something makes a difference; most projects she joins have no name, or a name so long nobody knows it.
- Analogy: "If you called me Chisa today and Sarah tomorrow and Sally the next day and then someone... called me donkey, they'd be like, who exactly are you talking about?"
- Teams do this to projects — one calls it "operating [X]," another "the compass," another "XYZ" — burning mental capacity just to reach a common reference point.

#### 2.1.2 Example — scope and scoping evidence
- How far has scoping gotten? How clear is what's in/prioritized vs. what isn't?
- The checklist enables the initial conversations to locate where the team is and how much is left.

### 2.2 Acceptance Criteria ("How should it work?")
- Capture assumptions and expected behaviors **before** you build.
- Yes, this includes unit and integration testing — captured based on **behaviors** — but it is more than that.
- Tie acceptance back to the **value/outcome** you want, not just tasks/outputs: "did it actually achieve the goal that you wanted is really the question."
- If you can't tie AC to behaviors and outcomes, you haven't done enough refinement (or framed it unhelpfully).
- Uses the **Given / When / Then** framework: context (before) → action/event → expected result.

### 2.3 Definition of Done ("How do we know it's done?")
- Often missing — no agreement on what success looks like.
- May be another simple checklist; if it's hard, you're likely doing too much, under-refined, or lacking a **North Star**.
- Failure mode: everyone (you, them, leadership) has a *different* North Star — which means there is no North Star.

#### 2.3.1 Tangibles
- Code committed; comments captured.
- Tests stored, passing, and recorded.
- Documentation published with user guides, in the hands of actual users.
- Features deployed with accurate scripts in your version control system.

#### 2.3.2 Intangibles
- How confident/reliable is the feature? Solid performance? Bug-free (or at least critical-bug-free)?
- Approval from stakeholders (via conversations or survey).
- **Team health** of the delivery team — do they feel empowered, have healthy relationships, communicate safely? (The one most often skipped.)
- Release readiness — how easy is it to release, get the right people in the room, and make changes to the release.

### 2.4 Apply "before / during / after" everywhere
- Not just the Jira backlog — also meetings (should this have been an email or Slack message?), project plans, OKRs and success metrics, and release / go-to-market plans.
- The mindset: Do we have what we need? Do we know what should happen *during*? Do we know what's delivered *after*?

---

## 3. Six Common Pitfalls (Lessons Learned)

### 3.1 Pitfall 1 — Jumping to solutions too quickly
- Rushing to a solution doesn't make you faster; you move fast in the **wrong direction**.
- Start with **problems**, not solutions. She references **Sam Newman** speaking at the same conference on **Einstein**'s idea: spend 99% of the time on the problem, 1% on the solution.
- Clearly capture the problem: context, cause, consequence — edited down to simple terms. If you can't state it simply, there's more work to do.
- Then a **hypothesis**: "by doing this for these people we will achieve this outcome, and we'll know when we see this market feedback."
- Stop skipping **discovery** (a.k.a. planning) — but she is *not* saying spend six months/a year; just plan enough to break it down simply.

#### 3.1.1 Example — the fin-crime procedures project
- Asked to help a team update procedures within a **financial crime** department.
- Stakeholders kept asking "when will it be done?" — she asked how many procedures and how complex; they said "don't focus on that, just deliver the first one."
- There was no system/ecosystem map. She eventually discovered **~15 procedures**, a mix of **low, medium, high complexity**, where complexity = number of steps in the workflow/procedure.
- From that she could extrapolate time, and have informed conversations about capacity, velocity, and whether the project even made sense to continue.

#### 3.1.2 Mapping Pitfall 1 to Ready / AC / Done
- **Ready:** clear problem statement captured/defined; a hypothesis ("we believe by doing X we'll improve Y"); stakeholders aligned on both.
- **AC:** how SMART is the hypothesis — testable, measurable, assumptions documented, success metrics clear.
- **Done:** hypothesis tested/completed/analyzed; learnings documented; next steps clearly identified.

### 3.2 Pitfall 2 — The people doing the doing have no idea why
- If you can't draw a line from company vision/mission down to the smallest story/task/subtask, you may be wasting time.
- **Taxonomy** metaphor (the animal kingdom — she loves animals): a larger kingdom ties down to every being; everything fits into place. If your company supports animals and you're working on plants, it may not belong.
- Draw the line: subtask → story/task → epic → feature → project → product → department, and back up.
- Loose nod to **Conway's Law** — people make sense of environments when they know where everything belongs.
- Payoff: a **clean backlog** and clear metrics answer "why is this taking so long?" with visibility, and open the deeper conversation of "does it actually belong / should we focus on something else?"

#### 3.2.1 Mapping Pitfall 2 to Ready / AC / Done
- **Ready:** company vision clear, documented, accessible; project objectives explicit and traceable.
- **AC:** each story/task maps back up; team members can articulate how their work contributes to broader goals; documentation exists.
- **Done:** components aligned; team feedback shows everyone's on the same page; documentation includes clear taxonomy.

### 3.3 Pitfall 3 — A brain dump does not a project plan make
- "If you can't explain it to me like I'm five" — or to your non-tech mother/partner — executing before your thoughts are clear, concise, and coherent is rough.
- Clarity is key: state problem/opportunity, solution/hypothesis, and target outcomes/metrics.
- Plan should be **clear up close, blurrier further out, but you can see the road** (she notes she has bad vision — an accurate analogy).
- Know the stakeholders and when to talk to them; agree how the team wants to work; have **pictures/artifacts/diagrams/models**.

#### 3.3.1 Single source of truth
- Disparate information lets people create their own "versions of reality" — where projects get sidetracked.
- Three principles: data must be **reliable/consistent**; **accessible** to everyone who needs it; **updatable in a timely manner**.
- "For the love of whatever guides you, create a paper trail."

#### 3.3.2 Example — onboarding time as a litmus
- On a project last year it took her **two months** to ramp up because there were no clear sources of truth.
- After she cleaned up and added taxonomy/structure, subsequent members onboarded in **20 minutes** and could start working within a day or two — saving time and boosting new members' confidence.

#### 3.3.3 Mapping Pitfall 3 to Ready / AC / Done
- **Ready/Do:** goals and objectives clear; roles/responsibilities understood; alignment; clear delivery plan before/during/after.
- **AC:** simplicity of the plan; key deliverables/milestones clear; communication in place; **consistent terminology** regardless of who's talking (a glossary saves parsing time).
- **Done:** plan executed with minimal confusion/rework; team feedback shows understanding/alignment; outcomes align with goals.

### 3.4 Pitfall 4 — Assuming everyone understands the assignment
- If everyone actively involved doesn't get it, you haven't done enough yet — all should know what success looks like and describe it the same way.
- She spends a lot of time driving **shared understanding** ("even though we all know it, we still don't spend enough time working to achieve it").
- Collaborate early, align often: who's in the room, what they need, when, and how you know they got it.

#### 3.4.1 Example — building a release train
- On her last team, they struggled to include stakeholders from other teams at the right time.
- Stakeholders were frustrated at being excluded from conversations affecting their backlogs; teams called them "difficult" and stopped engaging them.
- By the time they engaged, they'd give stakeholders **one to two days' notice** — unrealistic — causing timeline delays because the timelines were never accurate.
- Fix: she pulled all needed stakeholders together and asked them to **help design the release plan**. "Leave no one behind."

#### 3.4.2 Mapping Pitfall 4 to Ready / AC / Done
- **Ready:** stakeholders identified early; a communication/go-to-market plan; team has access to information for informed decisions.
- **AC:** stakeholders understand scope/objectives; regular check-ins; feedback mechanisms in place.
- **Done:** stakeholder feedback confirms alignment; progress with active collaboration and minimal roadblocks; deliverables meet expectations.

### 3.5 Pitfall 5 — You're doing too much
- Doing too many things at once **invalidates the experiment** — you can't isolate variables.
- Revision of **Isaac Newton** ("what goes up must come down") → "**what goes in must come out**": put in too much, unprioritized or low-quality, and "you're going to get poop out."
- The stomach only holds so much; even shared among people, bad-quality input = bad output.
- Costs: increased mental load, capacity/capability strain, quality-vs-quantity tradeoffs, inaccurate outcomes (can't isolate variables), and accumulating **debt/stress on the system**.

#### 3.5.1 Mitigations
- Partial implementations; test the **riskiest assumption first**; low-hanging fruit; **feature flags**; prototypes / pilots / **phased releases**.
- **Dog-food analogy** (she's a dog trainer): switch a dog's diet gradually — 100% old, then 80/20, 60/40, 50/50, and so on. Do the same with teams: prototype, pilot, phase. "I'm not saying feed them dog food."
- **Capacity planning based on actual capacity**: what's feasible, what's sustainable, is there a buffer, and remembering these are real human beings.

#### 3.5.2 Mapping Pitfall 5 to Ready / AC / Done
- **Ready:** scope clear; features/tasks IDed; team agrees essential vs. optional (ruthless prioritization).
- **AC:** criteria prioritized/established/followed; feedback loops working and built into development; iterative releases planned for early feedback.
- **Done:** delivered with prioritized features on/near time; feedback collected for future iterations; team reflects on scope and adjusts (in-sprint or out).

### 3.6 Pitfall 6 — Fumbling the order of operations
- "Writing the test after you finish the exam." Many teams say they'll write tests "when we finish delivering."
- **TDD is not just for coding.** Order of operations = state the question/opportunity/problem → your believed answer → attempt to solve → learn from the variance.
- "No contract meant everything and nothing was right."
- Saying: "**those who stand for nothing will fall for everything**" (she invites a Hungarian equivalent via Slido). Write it down or scope will creep.
- Especially salient with an approver/sponsor: a written (or unspoken) "contract" of the last decision helps manage and avoid scope creep ("this is actually what we talked about").

#### 3.6.1 Mapping Pitfall 6 to Ready / AC / Done
- **Ready:** testing strategy defined before development; order of operations documented/agreed; resources/tools available.
- **AC:** tests written/executed in correct sequence; results analyzed/documented; variance measured/captured.
- **Done:** testing completed with clear result documentation; insights shared to inform future work; outcomes align with the defined order of operations.

---

## 4. Who Owns This? & Takeaways

### 4.1 Ownership
- She's often asked "isn't this the project manager's job?" — partly hers, but **everybody is responsible** for quality and accountability within a team.
- Leaving question: **"How might we make it safe for people to do the right thing?"**

### 4.2 Recap and key takeaways
- Start with an opportunity/problem and a hypothesis; ensure clarity and alignment; prioritize and iterate; follow the correct order of operations.
- **Be honest** — being disciplined about accountability is hard; honesty (even with yourself) about how much accountability you have makes it easier and means you won't "take that burden home."
- **Test your riskiest assumptions first.**
- **Seek significant results over "I don't know"** — a yes or a no is fine; "I don't know" makes decisions hard.
- **Plan first, then act.**
- Offers a free ebook (via QR code) on introducing product/testing mindset; more at **chisology.com** and her LinkedIn.

---

## 5. Q&A

### Q1 — Clarity on technical epics where you must dive in to define requirements?
- **Spike it, time-boxed.** If you need more time, readjust the spike; add another spike, revisit, regroup.
- From her platform-engineering / cloud work, introducing technical product management meant helping people think through end users (here: **system operators and developers**) and that even complicated work benefits from a visual/frame of the solution.

### Q2 — How do you handle pushback / no engagement so you don't carry all the mental load?
- **Agree to disagree**: sometimes do it their way while writing down your concerns and the pros/cons; collect insights in the background and revisit later. Sometimes the team's right, sometimes she is.
- It's fine to try someone else's idea first if it's an experiment — but keep your sanity, and always collect insights to revisit.
- "You can only lead a horse to water" — at some point you decide how much you're willing to live with.

### Q3 — How do you achieve common terminology when stakeholders and developers use different terms?
- **Start a glossary.** Do a gap analysis (what this team calls it vs. what we call it vs. what we'll call it going forward).
- A Confluence wiki page, alphabetized, running through terms one by one — either as a map of how people say it, or to agree "as a team, can we call it this?"
- Writing it down (board/paper/one place) reveals either how ridiculous the sprawl is, or that the terms are genuinely needed (industry standard vs. system-built).
- Interviewer: a mentor's mentor said "if it's not written down it doesn't exist" — "if a tree falls in a forest."

### Q4 — Can you explain "TDD is not just for coding" with examples?
- Nods that a colleague is also speaking on **behavior-driven development**, and much of this talk overlaps.
- TDD = write tests, then let them drive how you develop. Her postulate: **everything is an experiment** — capture your ideas at the start and isolate as many variables as possible so you know what outcomes you're driving toward.
- (Offers to give more examples one-on-one afterward.)

---

## 6. People & References Cited

- **Chisara Nwabara ("Chisa" / Chisology)** — speaker; service/product specialist; former horse trainer, current dog trainer; site chisology.com; free ebook on product/testing mindset.
- **Sam Newman** — speaking at the same conference; referenced re: the Einstein 99%/1% problem-vs-solution idea.
- **Albert Einstein** — attributed idea: spend 99% of time on the problem, 1% on the solution.
- **Isaac Newton** — "what goes up must come down," which she revises to "what goes in must come out."
- **Conway's Law** — loosely referenced re: organizing people/information so work fits.
- A colleague speaking on **Behavior-Driven Development** (referenced in Q4).
- **Given/When/Then** and **SMART** — frameworks referenced.
- Tools/venues mentioned: **Jira**, **Confluence**, **Slido**, **Craft Conference (Budapest)**.

---

*Video: https://www.youtube.com/watch?v=I4Pu8Sps9mU — Transcript via yt-transcript.sh; outline generated from the transcript.*
