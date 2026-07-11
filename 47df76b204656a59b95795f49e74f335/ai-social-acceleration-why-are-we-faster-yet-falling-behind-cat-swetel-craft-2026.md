---
title: "AI & Social Acceleration: Why are we faster yet falling behind? – Cat Swetel | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Cat Swetel uses Hartmut Rosa's acceleration theory and Little's Law to explain why AI makes us more productive yet more exhausted — pace mismatch, materialization, 'frenetic standstill', the shrinking present — and what embodied humans can do about it."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# AI & Social Acceleration: Why Are We Faster Yet Falling Behind? – Cat Swetel (Talk Outline)

> Cat Swetel (GM of Nubank's foundation/infrastructure unit, with a background in **science & technology policy**) uses sociologist **Hartmut Rosa's acceleration theory** and **Little's Law** to explain the paradox: if AI makes us more productive, why is everyone exhausted? Her answer — **pace mismatch, premature materialization, rising arrival rates with flat departure rates, a shrinking present, and "frenetic standstill"** — leads to a very human prescription: intuition, embodiment, and questioning perpetual growth.

---

## 1. Framing & Speaker

- **Cat Swetel**, GM of the **foundation business unit at Nubank** — a Latin-American bank with **~130 million customers** — running **infrastructure and platform tooling**, and stewarding the **Datomic** (append-only) database (colleague **Jen** can go deeper; Cat won't).
- Lens for this talk: her **academic background** — a master's in **science & technology policy**, studying the **impact of technological innovation on society.** (Playful aside: "Leo rising, Taurus sun and moon.")

## 2. "How Are You Feeling?" — The New Normal

- Audience is **tired.** Everyone has a CEO "back from Jeff Bezos camp" mandating **AI everywhere**, even a **token-burn quota** — bizarre given "tighten the purse strings" a year ago.
- Hard truth: **the exhaustion is not temporary.** People say "we'll just push through AI adoption, then things go back to normal" — but **this *is* the new normal; there is no going back** (like the internet making work follow you home).
- **Takeaway #1** (even if you leave now): it's not temporary and **there's no "pushing through"** — you must find a way to **cope.**
- **Temporary morale boosters** (hackathons, cute t-shirts) **won't power you through an entire era of computing** — you need **sustainable** coping.

## 3. The Central Question

- **If AI makes us more productive, why are we all so tired?** Shouldn't we have more time to rest / do energizing things? Nobody in the room is "chilling out." Counterintuitive: we offloaded tasks to AI, yet we're exhausted.

## 4. Hartmut Rosa's Acceleration Model

- Sociologist **Hartmut Rosa**: modernity is **accelerating**, and three forms **reinforce each other**:
  - **Technological acceleration** →
  - **Acceleration of social change** →
  - **Acceleration of the pace of life** → (loops back).
- Example: connectivity doesn't make life **less** busy — you get **paged on your phone** (Cat carries a large phone as an executive escalation point for critical incidents; "always on").
- **Social norms change with acceleration.** **Fast food** wasn't invented so families could enjoy dinner together — it lets you **grab food on the way to the next activity**, making life **denser** (multitasking even while eating) — "weird and a little sad."

### 4.1 Not everything accelerates — pace mismatch

- The **feeling** that "everything is getting faster" isn't fully true. With AI:
  - **Making a baby** still takes **9 months** (no 10×).
  - **Recovering from a cold/flu** still takes the same time.
- Some paces are **physically in us** and don't change — and it gets interesting when they **collide with social change**:
  - **Job tenure** used to span a career (his dad retired from his first job); now big-tech average tenure is **~14–18 months** — so companies offer perks like **"we'll pay you to freeze your eggs"** because biology (9 months) doesn't match tenure.
  - **Traffic:** everyone getting a car is a huge individual convenience, but **on average everyone arrives slower** (congestion). Feels faster, but some things **stay the same** and some get **slower** — a **pace mismatch.**

## 5. Humans Have Rhythm; AI Does Not

- Humans have a **circadian rhythm** — energy peaks and troughs, sleep. **AI is just continuous.**
- **Cross-team coordination** is hard because each team has its **own rhythm** (stand-up this day, planning that time); combining two rhythms gets "janky." **AI has no rhythm at all** — so integrating across it is hard.

### 5.1 Agentic development and premature materialization

- Agentic dev **materializes the prompt** into an actual thing quickly. Before, an idea went through **user stories, sketching, architecture, design** — many points to **diverge and converge / iterate.**
- Now there's **strong pressure toward convergence** with no respect for our rhythm.
- A **materialized** thing is **harder to argue with** — "it already exists, I saw the page, I interacted with it." Your brain stops generating its own design and instead **compares to the existing one.**
- Materialized designs easily become a **commitment** — we have a **strong aversion to turning things off** (it feels like a loss), while our **ability to turn things on has increased.** Agents rarely say "we're done, let's turn it off," so we **accumulate things to care for.**
- Lesson: our work with AI needs to (re)learn what humans learned — **take much smaller steps.** Cheap-to-make doesn't mean it's best to jump to a **highly materialized** design; disparate people materializing separately are **hard to merge.**

## 6. Little's Law — Arrival vs. Departure Rate

- **Little's Law** (known intuitively): work **arrives** at a rate and is **delivered** at a rate. If arrival ≈ departure, **work-in-process is steady** and lead time is steady.
- If **arrival rate shoots up** while **departure rate stays flat**, **WIP grows** and each item takes **longer to actually complete** (deliver to a customer — not chuck to another team, which is just someone else's arrival rate).
- Today there's huge emphasis on **arrival rate** (agentic prototypes, "we built it so fast!"), but research shows **departure rates are roughly the same** — **lots of stuff made, little extra value shipped.** We **accumulate things to care for without delivering more value** — that's when we **feel the acceleration / overwhelm.**

### 6.1 Departure rates can even get worse

- Recent **GitHub incidents, AWS region degradations** — "things seem to be getting shittier," possible **quality issues** making shipping harder.
- **Regulators** watch the news; in **regulated industries** (like banking) there are **new requirements** for handling outages of critical infrastructure — further **inhibiting departure rate.**
- So technical acceleration leads to an **acceleration in the *experience* of work**, not in value delivered.

## 7. Frenetic Standstill & the Shrinking Present

- We accumulate **technical debt faster than value** — we don't see the usual value indicators of a big innovation wave. **Hartmut Rosa's term: "frenetic standstill"** — doing a lot without traction. Not "AI sucks," just that we're **early** and not yet capturing the benefits.

### 7.1 The concept of "the present" contracts

- Ask "what are you working on **right now**?" — the **time horizon** of the answer varies: days, quarters, or quarters-to-years. We define **"now"** by **how far our expectations for our actions extend** — the **past** = "I can't do anything about it," the **future** = "I don't know what will happen."
- Under AI, new things launch constantly → industry unpredictability → **the present condenses** to weeks/months **even at CEO/CTO level** (AI war rooms meeting daily for two weeks).
- **Cascade:** if C-level's present is **weeks**, the next level down operates in **weeks**, then **days**, then **hours** — collapsing the normal **nested strategy** horizons. With no expectations extending into the future, **the only "safe" action is very proximate and probably not impactful** → burning tokens, accumulating low-impact things → **frenetic standstill.**

## 8. Now What? — The Human Value

- "16 more minutes of depression" — then the pivot: what value do **humans** bring?

### 8.1 Intuition

- Machines don't have **intuition.** Technical people are trained on "**the truth is in production**, show me the data, no handshake deals." Cat went the **opposite direction** ("turned into a crystal girly" — essential oils, yoga) because as an **embodied** human her body takes in enormous information and she can **feel when things are right.**
- Prompt: **invest a little in honing / listening to your intuition** — learn to **notice, interrogate, and contextualize** it (is your body tense because of your kid or an impending outage?). **No real downside** — worst case, a mildly interesting waste of time. (Maybe learn tarot.)

### 8.2 Embodiment

- Spend more time **being in your body** instead of **living through GPUs** — experience your body's natural rhythm to navigate the pace mismatch. Even a couple minutes of "how do I feel in my body?" has **no downside** and may just help you feel better.

### 8.3 Questioning perpetual growth

- This is a **very smart room** — is it **within our locus of control to affect change in the industry?** Maybe; we've done it before.
- The social order is **predicated on continuous growth** — **when is there *enough*?** There's no answer ("we have to mine in space next"). Every technological wave promised **more leisure** (the **internet**, the **microwave** marketing) — instead life gets **denser** (microwaving while vacuuming while running the dishwasher). **We create no leisure time.**
- Challenge: how can **the people in this room** (not Bezos/Musk) **capture AI's value for more leisure** — enjoying kids, hobbies, weather? "What if this amount of growth is just enough?" Pursuing money with that vigor is idolized, but pursuing anything else that hard we'd call an **addiction.** "What grows continuously? **Cancer.**"

## 9. Exhausting *and* Exciting

- It's exhausting **and** exciting — "you may have more than one feeling at the same time, even contradictory ones."
- **Grace Hopper** slide: just as past inventions (the **compiler**) could have been shaped for a more equitable industry, **now it's our turn** to "shake things up in a brand-new way." Cat, who "had an awful time coming up through tech" as a woman, sees a chance to make the next year **more equitable** — "what am I going to do about it?" is everyone's opportunity.
- Deep gratitude for the audience's time in the "sweaty tent with weird philosophy girl."

## 10. Q&A

### Q1 — Practices to resist AI-driven acceleration without becoming less competitive?

- **Prioritize** — ask whether efforts actually **move the needle**, and define what that means.
- **Anchor in things that are real** (e.g., regulator timelines that *don't* accelerate) rather than the felt contraction of the present; explicitly decide **where you apply effort** (not everywhere); a **material design is not automatically a commitment.**
- **Leave the building** — go outside, museum, bike ride, coffee (preferably together): research links it to **more creative outcomes** and it **energizes** people.

### Q2 — Is AI fundamentally changing what good engineering craftsmanship means?

- **Yes, of course.** Mixed feelings: she'd love the end of **middle-of-the-night pages** ("disk space critical"). AI may let us focus on **bigger things**; unsure what happens **closer to the metal** (threading models, assembly like **MACRO-32**) — you don't need assembly to be a great programmer, and she's excited about a **hardware-engineering resurgence.**

### Q3 — One organizational thing/hobby that became actively harmful in the AI era?

- **Layoffs.** As "evil dictator of the world" she'd ban layoffs and instead **reduce everyone's weekly hours** — leisure time creates societal value; maybe **"unions 2.0."**

---

## People, Companies & References Cited

- **Cat Swetel** — speaker; GM, Nubank foundation/infrastructure unit; background in science & technology policy.
- **Nubank** — Latin-American bank, ~130M customers; **Datomic** database (append-only).
- **Jen** — colleague who can speak to Datomic.
- **Hartmut Rosa** — sociologist; **acceleration theory** and **"frenetic standstill."**
- **Little's Law** — arrival vs. departure rate / work-in-process.
- **Grace Hopper** — the compiler; inspiration for reshaping the industry.
- Cultural references: fast food, the microwave and internet "leisure" promises, GitHub/AWS incidents, egg-freezing perks.
- Concepts: pace mismatch, premature materialization, shrinking present / nested strategy horizons, embodiment & intuition, questioning perpetual growth.

---

*Video: https://www.youtube.com/watch?v=NLbT-DkW5_U — Transcript via yt-transcript.sh; exhaustive outline generated from the full transcript.*
