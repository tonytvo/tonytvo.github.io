---
title: "Monte Carlo for SaaS: Simulating The Effect Of Product Decisions – Zoltán Dávid | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Zoltán Dávid (co-founder of bootstrapped feature-flag service ConfigCat) shows how to model a SaaS business as a Markov chain and run Monte Carlo simulations to forecast growth and compare product decisions — a live simulator demo, mapping growth tactics to transition arrows, a marketing-vs-engineering 'competition' feature flags win, and a rich Q&A on assumptions, limits, and why reducing churn beats mediocre marketing."
type: "reference"
tags: ["softwaredevelopment"]
---

# Monte Carlo for SaaS: Simulating The Effect Of Product Decisions – Zoltán Dávid (Talk Outline)

> A **Craft 2026** talk by **Zoltán Dávid**, co-founder of **ConfigCat** — a fully **bootstrapped** feature-flag service (no investors, ever), started **2018** by "six engineering friends without any marketing or sales background," now serving **500+ customers** worldwide (including three from Hungary, and two government agencies — Singapore and Iceland). He notes this is **their first conference ever** — they came "to learn to be able to talk with people." Format: a story-driven talk with a **live simulator demo**, borrowing weather-forecasting math (**Markov chains + Monte Carlo simulation**) to model a SaaS business, plus an extended audience + QR-code **Q&A**. The talk's own arc: the naive funnel → weather forecasting as an analogy → modeling ConfigCat as a Markov chain → live simulations → mapping growth advice to transition arrows → simulating alternative futures (a marketing-vs-engineering competition) → running all tactics on a baseline startup → summary → Q&A.

---

## 1. The Naive Funnel

### 1.1 ConfigCat's original plan
- Eight years ago, when they started feature flagging, "there were just a couple of other players in this field."
- Audience poll: raise hands if you use feature flags today (a good number) vs. before — "then it's a pretty accurate estimation."
- The original idea: build a service → get **free users** first → then convert some to **paid customers**.
- To get free users they needed **website visitors** who sign up — i.e., "convince some random internet people to show up, sign up, and start paying."

### 1.2 "Later we learned this is called a funnel"
- They only later learned this model is called a **funnel** — "a quite naive approach to look at things."
- Started **2018** as six engineering friends, **no marketing/sales background, no investors** — completely **bootstrapped**.
- Today: **500+ customers** across the world, "including quite a lot of the sponsors here today."

### 1.3 Why the funnel falls short
- The funnel is "a great way to talk about things," but for understanding how users actually **move through** ConfigCat as a product/service/business, "it's very far from the truth."
- It doesn't help them learn what's really going on with users — so they turned to **forecasting**.

---

## 2. Weather Forecasting as the Analogy

### 2.1 How weather forecasters model the world
- Forecasters first build a **mathematical model** — e.g. three **states**: **sunny, cloudy, rainy**.
- A red dot represents the **current day**, moving among the states.

### 2.2 Transition probabilities
- Example: a sunny day is followed by another sunny day with **60%**, cloudy with **30%**, rainy with the remainder.

### 2.3 Markov chains
- Building a model like this — states plus transition probabilities — is called a **Markov chain**.

### 2.4 Monte Carlo simulation
- To forecast 14 days out: start from today's state, **run the simulation 14 days** (one run is "quite random").
- Then **run it millions of times**, observe the result on day 14 each time, and **count** how often it's sunny/cloudy/rainy.
- The tallied counts approximate the **real-world distribution** expected on day 14 — this "run it many times" idea is a **Monte Carlo simulation**.
- The decision: run **Monte Carlo simulations on their own business model** — but first they had to build the model.

---

## 3. Modeling ConfigCat as a Markov Chain

### 3.1 Two dimensions of states
- The developed model has many orange-boxed **states** on **two axes**.
- **Left → right** = how far a **user** has progressed (not "the current day" as in weather, but users).

### 3.2 The left-to-right progression
- **Left side:** the user has "barely heard about ConfigCat" (awareness).
- **Middle:** they've **signed up**, or completed **setup** (ConfigCat is connected within **10 minutes** using ConfigCat SDKs in the user's own app).
- **Right side:** they are **paying**.

### 3.3 The top-to-bottom engagement dimension
- **Row 1 (top) — active:** users actively want to use/observe ConfigCat.
- **Row 2 (middle) — dormant:** they still remember what they did but are "no longer actively doing anything with it."
- **Row 3 (bottom) — gone:** completely lost — "they either hate the service, forgot it, or aren't interested and won't come back."

### 3.4 The forever-free plan
- ConfigCat has a **forever-free plan**, so the rightmost column includes an **active free user** state.
- Free users may transition **to paid**, and paid may fall **back** to active free, etc.

---

## 4. Running Simulations Live

### 4.1 The simulator setup
- They built a simulator of exactly this Markov model.
- On the right: a **big green circle** showing how much **money** the business model earns.

### 4.2 One user at a time
- Sending in **one user** at slow speed: he became aware, then "we lost him right at the moment."
- Another single user: aware, still aware the next day, then lost. "Not very useful."

### 4.3 A spike of 10,000 users / 7 days
- Better to send a **burst**: **10,000 users/day for 7 days**, then stop.
- This simulates being **featured on Product Hunt** or by a big media outlet — a traffic spike.
- By day 12: **two paying customers**, ~**30 active free users**, "all the other users are gone."
- Speeding up: "at some point we start to have some money, but definitely we are losing users." That's what a spike does to a SaaS.

### 4.4 A steady 100 users/day
- More realistic: marketing sends **100 new aware users/day**.
- Money starts to collect; paying customers stay low but grow steadily.
- Over a **2-year** run: only **seven or eight paying customers** — "not a very good result."

### 4.5 These are ConfigCat's real 2018 numbers
- The probabilities/conversion rates "really closely resemble" ConfigCat's **2018** numbers, plugged in from the analytics he still has.
- "This is how ConfigCat would have gone until today **if it had not improved**."

---

## 5. Mapping Growth Advice to Transition Arrows

### 5.1 Why the folklore advice suddenly made sense
- After seeing the model, "a lot of folklore-type internet advice started to make more sense" — each tactic improves a **specific arrow**.

### 5.2 Awareness arrow (first arrow)
- **SEO / search engine results** (a 2018 thing), now **AI / ChatGPT / LLM results**.
- Adding your offering to **comparison pages**.
- Adding yourself to **integration marketplaces**.

### 5.3 Signup arrow
- A **better landing page**, **clearer pricing**, an **interactive demo** improve the signup transition.

### 5.4 Dormant-returns arrow
- **Retargeting** — "a favorite tool for marketers" — improves the single arrow that brings dormant users back.

### 5.5 Setup arrow
- A **simpler UI**, a **setup checklist**, **templates/examples/guides** help here.
- Often "the shortest path to the first **wow moment** / immediate success moment."

### 5.6 Email segments (several arrows)
- Building **email segments** improves **three arrows** in the model at once.

### 5.7 Churn arrows (product stability)
- Making the product **solid and reliable** as an engineering thing improves the churn arrows.
- Concretely: using **feature flags** (don't release bugs to all users) and integrating with **APM tools** (performance).

### 5.8 Referrals (the dashed arrows)
- **Awesome support** triggers the **dashed green arrows** at the top: **referrals**.
- Users don't transition through these — instead active/paying users **talk about the service**, and total strangers "appear as visitors."

### 5.9 Analytics tells you which arrow is weak
- Your **analytics** reveals which arrows are bad, guiding which technique to apply for better results.

---

## 6. Simulating Alternative Futures — Marketing vs. Engineering

### 6.1 The setup: two teams, one decision-maker
- Frame: he runs a startup with a **marketing team** and an **engineering team** and is the decision-maker.
- Runs two simulator instances side by side (two browsers).

### 6.2 Marketing's proposal
- **Retargeting ads** that increase **dormant leads returning as visitors by 40%**.
- He edits that probability up by **40%** in the "marketing" browser.

### 6.3 Engineering's proposal
- Apply a **feature flag service** so **fewer customers leave the active state** (less churn).
- Engineering claims "all errors are gone" — "I do not believe them," so he does **not** cut churn by 100%, just reduces the relevant percentages.

### 6.4 The deterministic "competition"
- Switches to **deterministic simulation mode** so both browsers share the same base and are easy to compare.
- Applies **large traffic** to both and speeds them up.

### 6.5 Mid-race readout
- Early on, **marketing (retargeting)** made **more money**; **engineering (feature flags)** made **less money but slightly more users** — and engineering's money is catching up.
- The audience is asked to guess the winner ("I love that joke — browsers" nods to the earlier team-vs-team framing).

### 6.6 The result: feature flags win
- Over a **10-year** run (he lets it reach year ~11), **engineering clearly wins** — "feature flags are better than retargeting."
- **Marketing:** ~**$1.5M** over 10 years, ~**490** total active users.
- **Feature flags:** ~**$1.8M** (≈**20% / $300k more** money) *and* ~**680** total active users.
- Caveat: "whether you believe my numbers or not, you can plug in yours" and compare your team's ideas.

---

## 7. Running Every Tactic on a Baseline Startup

### 7.1 The baseline
- He defined a **baseline startup schema** and ran it for **10 years** as a control — yielding some money, users, and paying customers.

### 7.2 Retargeting
- Applying the **marketing retargeting** trick brought **more money** than baseline.

### 7.3 Feature flags + APM
- Applying **feature flags + APM** connection brought "quite nice, a lot of money."

### 7.4 Email sequences (underperformed)
- **Email sequences** were "not as powerful as retargeting" — "I would not have thought that, but Markov chains told me so."

### 7.5 Referral system (modest)
- Improving the **referral system** beat baseline but "not that much."

### 7.6 Everything together
- Applying **all tactics together** (feasible over 10 years) yielded "a whole lot of money" — ~**$2M vs. $1.4M** baseline.

### 7.7 His pick: fix the product first
- If forced to pick the first thing in a startup that already has marketing and active users: **make the product more stable** (less churn) — "less churn lets you collect more users at the end, even if marketing is gone." That's what **feature flags + APM** translate to.

---

## 8. Summary

### 8.1 The core message
- You can **model your own SaaS / product / business**, **run simulations**, **forecast growth**, **play with parameters**, **simulate alternative futures**, **pick the future you like most**, then **implement it in real life** by modifying the very same product parameters you simulated.

### 8.2 The other message
- "**Feature flags are cool.**"

---

## 9. Q&A

### 9.1 Q1 (audience) — How do you make the conversion assumptions for possible futures?
- Thanks the asker for calling them **assumptions** — "most of the time these are just assumptions."
- Method: pick a number "from the top of your head," then **cross-check on the internet** (Google / ChatGPT / Perplexity) — e.g. email-sequence conversion "probably 3%."
- Then run **three versions**: a **likely** value, a **highly increased** one, and a **highly decreased** one, and compare against alternatives.
- "Sometimes the winner is clear even in that situation. I have no magic formula."

### 9.2 Q2 (audience) — How realistic is the simulation; how well does it estimate real life?
- "The longer it runs, the farther it diverges from real life" — verified by **back-testing on their own data**.
- Good for **1–2 years** if the simulation step is a **day**.
- Smaller steps (e.g. an **hour**) require different conversion numbers (hourly rates differ from daily/monthly) and cost much more computation, but are more effective.
- Wouldn't trust it beyond **1–2 years** for absolute prediction.
- **But it is always directionally correct**: if one alternative outperforms another in the simulation, it's very likely to outperform in real life too — regardless of exact magnitudes.

### 9.3 Q3 (QR) — What product decision looked promising in theory but had almost no impact?
- A **structured referral program / campaign**.
- Everyone in his bubble was talking about referrals as a "positive upward spiral," but simulations show **measured referral rates are quite low**.
- Even a good program that **doubles** them "does not bring so much money to the table."

### 9.4 Q4 (QR) — Did any simulation results change conventional SaaS growth advice?
- A hard one; he "wishes he could say one."
- His answer: "No — **general advice works generally.**"

### 9.5 Q5 (QR) — What was the most surprising leverage point your simulations revealed?
- That **a stable product earns the most money in the long run**.
- "As an engineer from the heart I always wanted this to be true, but didn't know it was."
- Sales/marketing had convinced him you can't build a product without them because users won't stick — true for getting the **first few** users, but "once you have that **marketing flywheel** working, having a solid product is the best thing you can do."

### 9.6 Q6 (QR) — Is this tool open source?
- **Freely available** but "the code quality is not at the level I felt confident open-sourcing yet."
- Try it at **sas-sim.configcat.com** (software-as-a-service simulator).
- If there's interest, email **zoltan@configcat.com** or **support@configcat.com** and "we're going to open source it — probably we can work on it together."

### 9.7 Q7 (QR) — What's the most expensive product mistake a simulation could have prevented?
- With realistic numbers, he'd have found that **Google Ads don't work** for their case.
- In **B2B SaaS** they "never figured out how to make them work."
- Reason: competitors are largely **VC-funded**, expected to spend ~**40% on marketing** (or investors "shout at them"), so they pour money into Google Ads and **bid prices up**.
- "We never figured out how to spend $1 on marketing and get back two, or 1.1 at least."
- Caveat: he'd have needed to **know the conversions beforehand** — showing that "if your input numbers are wrong, the simulation doesn't help at all."

### 9.8 Q8 (QR) — What's one SaaS growth belief people should stop repeating?
- Deflects being a "SaaS growth guru" — "we just tried it once and succeeded; I'm like an old grandpa telling my own story."
- Best he can offer: "maybe **don't spend on Google Ads.**"

### 9.9 Q9 (QR) — What assumptions have the biggest influence on simulation outcomes?
- Two things. First (as expected): **wrong input-number assumptions** make the whole simulation wrong — a big impact.
- Second (the surprise): **fixing the end of the pipeline matters most** — the **less churn**, the less it matters how small/bad your marketing is.
- Real evidence: their marketing team is great but only started **last year**; before that, with "pretty zero marketing for 99% of the time," they captured **500 paying customer organizations** (incl. two governments) because **Google and the internet** sent people, and users **stuck** since setup took **10 minutes**, was **stable and good quality**, and (years back) very simple.
- "Fixing the end of the business pipeline is the most important thing you can do."

### 9.10 Q10 (QR) — How do you make conversion assumptions for new features/services?
- The engineering team proposes something (e.g. **single sign-on**, **more analytics**).
- You sit down and figure out **which arrows** the feature impacts.
- Read **stories from other teams** who did something similar to estimate the relative increase they reported.
- Treat those self-reported (usually positive) numbers as a **ceiling / best case**.
- Then **divide by two, and by two again**, and run **three simulations** — "hopefully that tells you something."

### 9.11 Aside — Craft is their first conference
- The host commemorates this being ConfigCat's **first conference ever** with a round of applause.

---

## People & References Cited

- **Zoltán Dávid** — speaker; co-founder of **ConfigCat**.
- **ConfigCat** — bootstrapped feature-flag service, founded 2018 by six engineering friends, no investors, 500+ customers worldwide (incl. three Hungarian customers and government agencies of Singapore and Iceland); forever-free plan; SDK setup in ~10 minutes; simulator at **sas-sim.configcat.com**.
- **Contacts:** zoltan@configcat.com, support@configcat.com.
- **Platforms / tools referenced:** Product Hunt, Google (search / Ads), ChatGPT, Perplexity, APM tools, feature flags, integration marketplaces, comparison pages.
- **Concepts:** the funnel (and its limits); Markov chain (states + transition probabilities); Monte Carlo simulation (many runs → outcome distribution); weather-forecasting analogy; the two-axis SaaS state model (awareness → signup/setup → paying; active → dormant → gone); forever-free plan; mapping growth tactics to transition arrows (SEO/LLM, landing page/pricing/demo, retargeting, setup UI/checklists/templates, email segments, product stability/churn, referrals via support); the "first wow moment"; simulating alternative futures; deterministic vs. random simulation modes; directional correctness vs. absolute accuracy; back-testing on real data; the marketing flywheel; churn as the biggest long-term lever; limits of simulation (garbage-in/garbage-out); Google Ads not working for bootstrapped B2B SaaS (VC-funded competitors bidding up prices); low/likely/high sensitivity runs; "ceiling then divide by two twice" estimation heuristic.

---

*Video: https://www.youtube.com/watch?v=OBVC8HXaJEE — Transcript via yt-transcript.sh; outline generated from the transcript.*
