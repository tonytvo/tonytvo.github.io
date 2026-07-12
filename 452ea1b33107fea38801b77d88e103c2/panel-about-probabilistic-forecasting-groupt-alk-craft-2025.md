---
title: "Panel about probabilistic forecasting - Group talk | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "A Craft 2025 panel where Daniel Vacanti, Colleen Johnson, Nigel Thurlow and statistician Gaia Bashiri (hosted by Daniel Terhorst-North) argue — and never agree — over what 'distribution', 'stability' and 'predictability' actually mean, whether Monte Carlo throughput forecasting is the right tool or a misused one, and why the real problem is communication with management."
type: "reference"
tags: ["softwaredevelopment"]
---

# Panel about probabilistic forecasting - Group talk (Panel Outline)

> A Craft 2025 panel discussion, **hosted by Daniel Terhorst-North** ("just for the record, I haven't got a clue what I'm doing here — I'm here to learn"), with four panelists: **Daniel Vacanti** (works with Colleen at ProKanban.org, author of the books Nigel read to prepare), **Colleen Johnson** (CEO of ProKanban.org), **Nigel Thurlow** (self-described "lean guy" with a Deming background), and **Gaia Bashiri** (a trained statistician who left academia and now works as a solution & delivery manager in insurance risk management, joining remotely with audio feedback problems). Format: opening position statements, then a topic-by-topic debate that the host himself declares "failed" because the panelists never got past the fundamentals — they fundamentally disagreed on the meaning of **distribution**, **stability**, and **predictability**. This outline threads the conversation by topic. (Dave West is referenced as being in the audience.)

---

## 1. Setup and Framing

### 1.1 The host's disclaimer
- Terhorst-North opens self-deprecatingly: his wife told him to cross his legs when sitting elevated on stage.
- He admits: "I haven't got a clue what I'm doing here… I'm here to learn."
- All he knows "because I can read" is that the topic is probabilistic forecasting and methods.

### 1.2 Genesis of the panel
- The host jokes the panel came from "Daniel something something probabilistic forecasting and Nigel something something" — i.e. a disagreement between Vacanti and Thurlow.
- He proposes a sensible start: go around, introduce yourselves, and give a position statement on probabilistic forecasting in the context of software / digital product development.

---

## 2. Opening Position Statements

### 2.1 Daniel Vacanti's position
- "It is impossible to manage software development without managing risk."
- "And it is impossible to manage risk without some type of forecasting."
- The host reacts: "That second statement's a bit racy. Totally with you on the first one."

### 2.2 Gaia Bashiri's position
- Introduces herself: works in insurance ("civic insurance") as a solution and delivery manager — i.e. actually in **risk management**.
- Thanks the panel for bringing the risk-management topic into the discussion.
- She is a **trained statistician**: "all for a data-driven approach" but "painfully aware of the shortcomings of statistics."
- Therefore she is **hesitant to embrace probabilistic forecasting** when it comes to her own deliveries.
- The host frames her as someone with academic chops now applying them as a day job — "very cool."

### 2.3 Colleen Johnson's position
- CEO of ProKanban.org.
- Probabilistic forecasting "provides a better starting point for teams to understand when something will be done."
- It does this **without a lot of overhead** — no need to define exactly what is being delivered, and no estimating "in hours or points or insert anything after estimating."
- The host quips: "without estimating period."

### 2.4 Nigel Thurlow's position
- "I make notes because I'm old."
- He doesn't disagree with anything said — he may disagree with **methods**, but not with managing risk.
- Quotes **Deming** (noting Dave in the audience may disagree, as a complexity guy): "a system must be understood as a whole, not in parts."
- "Forecasting without understanding variation leads to tampering." He's a "big lean guy."
- On **scale**: when you scale, the complexity of the *work* doesn't increase — the complexity of the **communications, interactions, and organization** increases significantly.
- At scale with many teams, no two teams are identical, so you need a way to "find the long hole in the tent."
- He wants to learn as much as anyone.

---

## 3. Debate: What Is "Empirical Sampling"?

### 3.1 Nigel's preparation
- He read Vacanti's books to prepare, and also asked **Grok and ChatGPT** for summaries.
- He states plainly he is "not a statistician… I know absolutely nothing about stats and maths — that's why Gaia is here."

### 3.2 Defining empirical sampling
- Nigel: the method has been described as **empirical sampling**.
- Vacanti clarifies: the method used to forecast a probable date/outcome **uses the data your own system created** — i.e. historical data to sample the future.

### 3.3 Nigel's core discomfort
- If we use past data to forecast the future, we assume the future looks very much like the past.
- So why use this particular approach? If the **distribution is changing** and the **variation is changing significantly**, you'd need to know **what type of model** to apply — you wouldn't just use the raw data.

---

## 4. Debate: What Assumptions Are We Making?

### 4.1 The host reframes the concern
- Terhorst-North reframes Nigel's question: we feed evidence from our existing system of work into "some forecasting machine" that produces projections about a possible future state.
- Key questions: How do we know it holds water? What assumptions are we making — both the ones we know about **and the ones we don't even know about**? How do we know the machine tells us anything useful?

### 4.2 Vacanti's stated big assumption
- The essential assumption: **the future we're trying to predict roughly looks like the past** we have data for.
- "Most of the time that's a fairly safe assumption" — there are times it isn't, but usually the variation incurred in the past can reasonably be expected in the future.

### 4.3 "Probabilistic forecasting" as a tautology
- Vacanti: he's uncomfortable with the term because **all forecasting is probabilistic in nature** — so "probabilistic forecasting" is a tautology.

### 4.4 The quantifying-variation exchange
- Vacanti: because there is always variation in past data, how could you ever know the future without some way to **quantify** that variation?
- Example of throughput variation: "my team got zero things done this day, two this day, one this day, nine this day."
- If that variation continues into the future, you need a way to quantify what it looks like going forward.

### 4.5 Nigel pushes back on variation size
- Nigel: you said the future can be modeled from past data; so the past variation is "probably very small."
- Vacanti: "Not necessarily" — and they'd have to define what counts as small vs. large.
- Nigel invokes Deming: Deming makes clear how to characterize variation — a better starting point than "large or small."
- Nigel returns to his fundamental question: "What type of distribution are we talking about here in the work?"

---

## 5. Debate: "Is There a Distribution?" (Central Disagreement #1)

### 5.1 Vacanti: "There is no distribution"
- Vacanti flatly states "There is no distribution" — twice.

### 5.2 Gaia: "There is always a distribution"
- The host turns to his statistician: "I heard the word distribution… help us make this make sense."
- Gaia: "There is always a distribution." What Vacanti assumes is the **empirical distribution**.
- You are assuming the distribution is **completely represented by the past data** — that is itself a very strong assumption.

### 5.3 Vacanti's clarification
- Vacanti corrects: there is no **well-known statistical distribution** — not a normal distribution, not a log-normal distribution — "it's just your data."
- Your data *can* be represented, but it is not a well-known statistical distribution.

### 5.4 Gaia on non-parametric convergence
- Gaia agrees it's an **empirical distribution**, which means you're using **non-parametric statistics**.
- Non-parametric methods only **converge when you have enough data**.
- She's read that "a few weeks of data would be enough" — but that is **not enough** for a non-parametric method to converge to something statistically meaningful.

### 5.5 Gaia's scale concern
- At scale there are **dependencies across teams and projects**.
- Her concern: can she **move capacity** from one team/project to another when needed?
- If you refuse to model complexity (as Colleen said — no sizing, no points), how do you use the raw data to derive a **meaningful, statistically-driven KPI** to manage teams?

### 5.6 The host replays Gaia (audio issues)
- Because Gaia's audio is muffled ("we're hearing you bounce off a curtain"), the host replays what he heard:
  - The distribution is simply the empirical data — "the shape of the data we happen to measure."
  - Question 1 (which he wants to explore): what are we actually trying to **estimate** — or, he suggests, **approximate** / learn about / have an opinion about?
  - Question 2: **transferability** — does what you learn from one project's data necessarily apply to the next?
- Gaia adds: with big teams there's additional complexity, and using only the data means you're **not modeling complexity** — which may be the hindering effect in planning.
- The host concedes: beyond a certain complexity you get too much emergence and dynamic behavior to model.

---

## 6. Debate: Data Sampling in Practice (Colleen)

### 6.1 Like-for-like samples
- Colleen: don't use December data (everyone on holiday) to forecast a March delivery — use **like-for-like sample sets**.

### 6.2 Work-in-progress matters more than headcount
- The number of people on a team matters **less** for shifting capacity.
- **How much work is in the system** (work-in-progress) has a more direct relationship to throughput than shuffling people around.
- The metric used is **throughput**, fed into **Monte Carlo simulations**.

### 6.3 Every day is a new data point
- As you add someone to a team, throughput may start to increase — that's what you're hoping for.
- You keep **reforecasting** with each new data point (whether zero or nine items done).
- You rerun the forecast "pretty much every day" to check whether risk for the forecasted date is increasing or decreasing.

---

## 7. Debate: "Distributions Are Made Up"

### 7.1 Nigel's challenge
- Nigel: "there must be a distribution because all mathematicians and statisticians look at data sets and can see a type of distribution — Gaussian, normal, log-normal, something."
- Vacanti: "Those are made up. Those are mathematical hacks."

### 7.2 Gaia on models as constructs
- The host relays to Gaia: "apparently it's all made up."
- Gaia: to an extent true — like a physics model (e.g. Einstein's relativity), a distribution is a **made-up construct to explain reality**.
- The real question is whether it is **useful**, which is a different question.

---

## 8. Debate: Monte Carlo — The Right Tool, Used Wrong?

### 8.1 Confirming the method under discussion
- The host asks whether everyone is talking about **Monte Carlo simulation** building distributions as a forecasting tool, or some other toolset.
- Vacanti: "I'm probably talking about Monte Carlo simulation."

### 8.2 Nigel's "Monty Python syndrome" article
- Nigel wrote an article a couple of years ago titled **"Monty Python Simulation"** — the idea that "we're doing an awful lot of this."
- He attributes the phrase **"Monty Python syndrome"** to **Dave West**.
- Two-part thesis: (a) we're using the **wrong tool**, and (b) we're **using the tool wrong**.

### 8.3 How Monte Carlo is supposed to work
- The host's understanding: you have a set of **ideally independent variables** whose **distributions you know**, generate a realistically random sequence, feed a model, and use the distribution of results to make predictions.

### 8.4 "Using the wrong tool" — the assumptions he doesn't buy
- As a "software guy, 30-odd years in software," he doubts you can (a) identify which variables genuinely and independently affect the outcome, and (b) be confident about each one's probability distribution.

### 8.5 "Using the tool wrong" — the single-project misuse
- The valid question: "I've got a portfolio of 100 projects — what's the likelihood that 10 make it?"
- The **misuse**: asking "How will *this next* project work? What is the likelihood?"
- Analogy: asking about a single project is like asking about a **single surgery outcome** — "Is the patient going to die? We don't know yet, we haven't done the operation." The tool doesn't work on a single data point.
- He acknowledges the ProKanban folks apply it "a lot more grown up" than most places he sees.

---

## 9. Debate: Forecasts Become Targets (Management Problem)

### 9.1 Shared clients
- Nigel notes some companies running the simulation were trained by Vacanti and are also his own clients.
- Aside on professional respect: the host jokes "Do you talk about each other behind your backs?" — "No… this professional respect."

### 9.2 The 85th-percentile-becomes-a-target problem
- Clients generate an **85th-percentile** probable forecast (85% probability of being done by a date/range).
- That figure then **becomes a target**.
- On rerun, assumptions turn out wrong — the 85% date shifts a month, and now the same date is only ~40% probable.
- Management doesn't want to hear that — so this is a **management problem, not a tooling or math problem**.

### 9.3 Nigel's variance-and-averaging challenge
- Monte Carlo is used in stock markets and gambling — wide variance, random values, large data sets, known distributions.
- If you have **very small variance and a small amount of data**, are you really doing Monte Carlo, or just a different **form of averaging**?

---

## 10. Debate: Two Meanings of "Variance"

### 10.1 The host as peacemaker
- Terhorst-North: there's a semantic disconnect — Nigel's use of "variance" differs from its meaning in this kind of modeling.

### 10.2 Process variance vs. throughput variance
- Nigel's "variance" = **process variance** in a lean sense.
- In this model they use **throughput**: e.g. "a day, two days, three days" pattern = small variance; jumps like "5 weeks, 2 days, 27 weeks" = large variance.
- Nigel objects that "5 weeks, 2 days" sounds like **cycle time / duration**, not throughput — Vacanti concedes the point but they decline to go down the cycle-time/lead-time rabbit hole.

### 10.3 The stable-system-therefore-just-average argument
- Nigel: a pattern like "3 2 3 2 1 4 3 2 3 2 1" is low variation — "a reasonably stable system."
- He cites Vacanti's own 2019 article on **Little's Law**, which **assumes the system is stable**.
- If the system is relatively stable, why not use standard **lean averaging** — cycle time, lead time, **takt time**, throughput, process cycle efficiency — which "served us pretty well"?
- The Deming point: if you reduce variance so the system is **predictable**, why do you need a simulation tool?

### 10.4 Nigel: the problem is beyond the work
- He believes the problem isn't in the work but in the **greater system around it** — variation from management, red tape, bureaucracy.
- The focus is wrong: instead of getting a probability of when work will be done, ask **"Why are we having to do this to get a probability?"**

---

## 11. Debate: Stable vs. Predictable (Central Disagreement #2)

### 11.1 Gaia "man-explaining" Nigel
- The host turns to Gaia; she jokes she'll "man-explain what Nigel just said."
- Reframed contrapositive: if a system is stable enough for Monte Carlo to model it, then it's stable enough to use **simpler statistical tools** — so why bother with Monte Carlo?

### 11.2 Gaia on bootstrapping and variability
- What you're doing is **bootstrapping a non-parametric simulation**; Monte Carlo requires a distribution or stochastic process as an assumption.
- "There's nothing wrong with variability" — but variability means you need **far more data** for the model to converge.
- With large variability, even sampling daily, how many weeks/observations would you need to converge?

### 11.3 Gaia's management-communication objection
- If she tells senior management "there's an 85% chance this project succeeds," they won't understand.
- If she lands in the failing 15%, they won't say "you told me it could fail" — they'll say "you told me 85%, why didn't you succeed?"
- She understands confidence intervals — but her world of risk management people are trained in it, and even they don't use percentiles with management.
- In insurance, calculating capital for solvency (**Solvency**) reasons, they look at the **99.5th quantile of the worst event** — but never say "99.5 percentile" to management. They say **"a 1-in-200-year event,"** which management understands (even if it's not strictly correct).

### 11.4 Forecasting as a communication tool
- Vacanti: "the underlying all of this is we're using this as a tool for communication."
- If practitioners can't articulate what it means, "we've already lost — it doesn't matter how good the tool is."

### 11.5 The 85% vs 95% confidence problem
- Vacanti: he's never met a professional outside the "stochastic academic world" who could explain the difference between an 80% and 85%, or 85% and 95%, confidence interval.
- His own understanding: run many statistically-significant samples and 15% will fail — but a **single sample** tells you nothing about itself until run.
- This is where the tool gets misused: "What's the likelihood of *this* project overrunning? — we don't have a tool for that."

---

## 12. A Success Story: Throughput Distributions

### 12.1 Where it works well
- Vacanti: a place he's seen it used successfully is getting a **distribution for throughput** of features/stories/work items in a software delivery team.
- Using historical throughput/lead time to predict how many items are likely to ship — "a good and relevant statistical tool."
- It enables "grown-up conversations about ranges of things we're likely to ship in a period of time."
- The 85-vs-95% framing, though, just confuses people — exactly Gaia's point.

---

## 13. Debate: Reframing Risk to Executives (Colleen)

### 13.1 Flipping the confidence statement
- Colleen: telling executives "85% chance we deliver by June 15th or earlier" really means **"15% chance it will be later"** — you're talking about **risk**.

### 13.2 A dropping percentage invites hard questions
- If two weeks later confidence drops to 60% for June 15th, that "invites them to ask hard questions": Did throughput change? Team capacity? Added scope? A different feature? People pulled away?
- You **can't** have that conversation if you simply go back and **change the date**.
- Communicating that risk increased lets you troubleshoot the system contributing to the risk.
- Nigel: vocabulary aside, that's a sensible conversation.

---

## 14. Debate: "What Happens When the Future Doesn't Look Like the Past?"

### 14.1 Nigel's question
- Assuming a relatively stable system modeled from historical work (with small, countable items, not heavily refined requirements): **what happens when the future does not look like the past?**
- How do we even *know* the future doesn't look like the past if we haven't written some requirements?

### 14.2 The host: you need an opinion about the future
- Terhorst-North: to have that conversation you need an **opinion about what the future should look like** — otherwise the future is "just more stuff."

### 14.3 Vacanti's life-analogy retort
- Vacanti: "What's your historical precedent for when you're going to retire? For whether you'll get cancer? For how many children you'll have before you have children?"
- Nigel: "The context matters" — those are very different contexts.
- Vacanti: context matters, and in the context of sustained work over time with a relatively stable system, you can forecast.

---

## 15. Debate: What Does "Stability" Actually Mean? (Central Disagreement #3)

### 15.1 The Princess Bride jab
- Vacanti (to Nigel on "stable"): "You keep saying that word — I don't think it means what you think it means."

### 15.2 Little's Law and its stability assumption
- Nigel: Dr. Little has a clear definition of system stability — the **arrival rate and departure rate are stable**.
- The host intervenes to ask for a lay definition for the audience, noting Nigel "can't even tell me what Dr. Little means by stability."
- Nigel: he's "not an expert on Little's Law at all," but everything he's read (including Vacanti's work) says it **assumes the system is stable**.

### 15.3 Vacanti's definition of Little's Law stability
- You need a **long enough time period under observation so that long-term averages don't change** — i.e. the **distribution of your data is stationary**.

### 15.4 Shewhart's different definition of stability
- Vacanti: **Shewhart** has a *different* definition — all process data is characterized by variation, and using **Shewhart's formulas** you can characterize whether all data falls **within accepted limits of variation**.
- If everything is within those normal/accepted control limits, you have a **stable system**.
- Crucially, this says **nothing about team size, complexity, or what management is doing**.

### 15.5 The host's stable-vs-predictable distinction
- Terhorst-North offers a distinction:
  - **Predictable** = you can name the characteristics/independent variables that make the system change, and their distributions — the system may be "super spiky" but spiky in a predictable way (not stable, but predictable). Example: **fractals** — easy to describe, but not stable.
  - **Stable** = those factors are within bounds.

### 15.6 The contrapositive fight
- Vacanti: per Shewhart, if cycle-time data is stable, it **is** predictable — but the **contrapositive is not true** (predictable does not imply stable) is exactly what the host claims and Vacanti disputes.
- Vacanti: "I can give a distribution for each input to a Monte Carlo simulation, run it, and tell you how many projects come in within a period — and the individual cycle times could be all over the place and I'm still right."
- But: if the data fed in doesn't fit **Shewhart's** definition of stability, then the output isn't stable — which "makes no sense" to the host.

### 15.7 Gaia on stationarity
- Gaia: she's unsure about the "stability" concept as used. If "stable" means **stationary**, you also need **variance** to be stable, not just expectation — the full distribution stable across time.
- Backing Daniel's point: you can have something **predictable but not stable** — variability changes over time, but if you know the **dynamics of the variability** (e.g. it changes predictably around holidays), you can still predict "in a predictable good way."
- She notes the definition of stability given differed from the definition of stationarity — a source of confusion.

---

## 16. The Panel "Fails" — Fundamental Disagreement on Terms

### 16.1 The host names the failure
- Terhorst-North: "with all due respect, fundamentally this is where this panel has failed" — before you can argue, you must agree what you're arguing about.
- There is fundamental disagreement on **what a distribution means, what stability means, and what predictability means.**

### 16.2 Vacanti's sharp closing exchange
- Nigel: "when I come at it from a Shewhart perspective, you don't have that in your head."
- Vacanti: Shewhart is "one person who has an opinion about stability"; there are many definitions.
- Vacanti's challenge: "If you can point me to somebody I should trust more than Dr. Little or Dr. Shewhart, I'm all ears. But between listening to Nigel or listening to Dr. Shewhart, I can tell you who I'm going to listen to."
- The host takes this "as a closing remark" — "the panel has failed. We didn't even get past the fundamentals… sounds like a bunch of us have some reading to do."

---

## 17. Closing Remarks

### 17.1 Colleen — go practice
- Everyone should go **practice with a Monte Carlo** to understand the heavy concepts they jumped into.
- It doesn't have to be hard: "you have the data you need, you can do this in a **spreadsheet**."
- **Randomize your data**, see how much variability comes through the forecast, and understand risk in a new way.
- The goal is to free developers from "hours of story pointing" so they can code more — "not to have perfect dates."
- She adds: "I'm not advocating story pointing, by the way — that's a different panel on a different day."

### 17.2 Nigel — go study
- "I need to go study because I'm hearing there's no such thing as a distribution — all the statistics and mathematics professors got that wrong."
- He spent a lot of time reading and talking to people he respects before the panel.
- On Shewhart: "he's the father of SQC (Statistical Quality Control)… the Six Sigma guys took that and bastardized it."
- He concedes he's "out of my depth" on modeling/distributions/statistics — but heard Vacanti disagree with things that seem "foundational teaching in the topic."

### 17.3 Gaia — the last word
- "Now it comes personal. I don't have to justify my professionalism in statistics — you can look at my CV."
- Being told to "go and practice with Monte Carlo" and that she doesn't know what a distribution is: "go and check my CV — I think that will speak by itself."
- Still, "it was a good conversation," and she agrees there's a **disagreement in terminology**.

### 17.4 The host wraps up
- "We've all got some homework to do" — find out what distributions, stability, and predictability are.
- Thanks the panel for "all of your energy."

---

## People & References Cited

- **Daniel Terhorst-North** — host/moderator of the panel.
- **Daniel Vacanti** — panelist; works with Colleen at ProKanban.org; author of books Nigel read; 2019 Little's Law article referenced; argues "there is no (well-known) distribution."
- **Colleen Johnson** — panelist; CEO of ProKanban.org; advocate of throughput-based forecasting without estimation.
- **Nigel Thurlow** — panelist; self-described "lean guy" with a Deming background; author of the "Monty Python Simulation" article.
- **Gaia Bashiri** — panelist (remote); trained statistician; solution & delivery manager in insurance risk management.
- **Dave West** — referenced as in the audience; credited by Nigel with the phrase "Monty Python syndrome."
- **W. Edwards Deming** — cited by Nigel: "a system must be understood as a whole"; variation and tampering.
- **Dr. John Little (Little's Law)** — cited on system stability (arrival rate = departure rate; long-term averages don't change / stationary).
- **Walter Shewhart** — cited on a control-chart definition of stability (data within accepted limits of variation); called "father of SQC."
- **Albert Einstein / relativity** — Gaia's example of a model as a useful made-up construct.
- **Grok and ChatGPT** — used by Nigel to get book summaries in preparation.
- **Tools/methods:** Monte Carlo simulation, empirical / non-parametric distributions, bootstrapping, throughput, cycle time, lead time, takt time, process cycle efficiency, control charts, Six Sigma, spreadsheets for Monte Carlo, story pointing.
- **Concepts:** probabilistic forecasting as tautology, empirical sampling, "the future looks like the past" assumption, distribution vs. no distribution, stability vs. predictability vs. stationarity, variance (process vs. throughput), confidence intervals / percentiles (85% vs 95%; 99.5% quantile), Solvency capital / "1-in-200-year event", forecasts becoming targets, portfolio vs. single-project questions ("Monty Python syndrome"), risk communication with management, complexity and dependencies at scale.

---

*Video: https://www.youtube.com/watch?v=ryFkjHxKT-M — Transcript via yt-transcript.sh; outline generated from the transcript.*
