---
title: "Leveling Up as a Programmer in the Age of AI — Chelsey Troy | Craft 2026"
date: "2026-06-06T00:00:00.000Z"
description: "leveling up as a programmer in the age of AI"
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Leveling Up as a Programmer in the Age of AI

**Speaker:** Chelsea Troy (Mozilla; teaches at the University of Chicago)
**Format:** Conference talk (~42 min)

---

## 0. Framing & Premise (0:00–2:40)

- Most conference talks focus on how **experienced** programmers use AI to increase execution capacity — leaning on existing experience, judgment, and taste.
- Open question: how do **up-and-coming programmers** develop those things to become the principal engineers of tomorrow? "What do you do before you've learned how to do this job?"
- This is *not* just a junior question:
  - Software engineering is a profession where the job is to **constantly learn how to do the job**.
  - Audience demonstration: nearly every senior dev in the room is using a tool at work today they knew nothing about two years ago.
  - We've chosen a career that keeps us permanently at the edge of our skill level, solving problems that haven't been solved exactly this way before.
- **Three parts of the talk:**
  1. Learning vs. doing in technical contexts — what's the difference and why it matters.
  2. Where AI answers come from — it's not a magic black box.
  3. How we learn — how the brain operates and how to use that to retain skills.
- (Running visual motif: gargoyles — officially "grotesques" — from the University of Chicago campus.)

---

## 1. Learning vs. Doing in Technical Contexts (2:40–13:30)

### 1.1 The "standard strategy" of debugging and why it fails

- From her earlier RailsConf debugging talk: the **standard strategy** —
  - List everything that might be wrong, in descending order of probability.
  - Try each candidate until one fixes the system.
- **Hidden assumption:** that we already understand the system well enough to guess what's wrong.
  - If the system isn't behaving as expected, it's a fair bet we *don't* understand it that well.
- What actually happens in practice:
  - Try thing #1 → doesn't work → try thing #2 → doesn't work → get frustrated → **retry thing #1** "to make sure we weren't hallucinating" → still doesn't work.
- Why this loop happens (it's not "insanity"):
  1. **Increasing anxiety** about remaining on the wrong side of an unresolved issue → pushes us to go *faster* instead of slowing down and investigating properly.
  2. **Increasing fatigue** → erodes the cognitive defenses that would normally override what anxiety wants us to do.

### 1.2 The (satirical) "very important high-difficulty bug-resolving protocol"

1. Bang our heads against the problem until we've made things worse.
2. Trudge home feeling bad about ourselves, our jobs, our careers, the tech industry, the world, and the universe.
3. Eat something, get in the shower → relax → the solution "accosts you like an ambush predator" precisely when no pen or paper is within 10 meters.
   - Alternate version: sleep on it; next morning the solution is sitting in the editor "staring you in the face."
- There is a neuroscientific reason for this — deferred to Part 3 (spaced repetition / sleep).

### 1.3 Two modes of software engineering

- **Figuring stuff out** vs. **doing stuff.**
- To do stuff, we speed up; to figure stuff out, we need to **slow down**.
- If doing depends on figuring out, going faster gets us *more* stuck: "We have to downshift to get anywhere."

### 1.4 Efficiency vs. capacity building

- Industry pressure (referencing the previous speaker, Mark Richards): build quickly and cheaply; "efficient team" = "delivers fast."
- That definition of efficiency does **not** apply to figuring stuff out.
- **Learning, at its core, is cognitive capacity building** — and capacity building is a different activity than delivery.

### 1.5 The weightlifting analogy (Russian kettlebell swing)

- Speaker has lifted weights ~12 years. What builds capacity most?
  - **Walking** is extremely efficient — humans can walk far on little energy — and it builds almost no capacity.
  - **Kettlebell swings** are *inefficient*: enormous energy and muscle activation relative to walking. Sustainable for a minute, not an hour.
  - They are useful **because** they are inefficient — that's what builds capacity quickly.
- **Cognitive capacity building works the same way:**
  - Learning activities are *by design* inefficient.
  - They require attention and engagement — usually on something we currently feel **bad at**.
  - The uncomfortable emotions (confusion, frustration) are **necessary**, not incidental, to building cognitive capacity.
- Consequence: **using tools as outcome accelerants doesn't support skill development.**
  - True of *all* tools, not just generative AI — GenAI is just an especially attractive outcome accelerant.

### 1.6 Case study: the Git remotes student

- People usually imagine the failure mode where AI does a student's assignment, the answer is correct, the student learns nothing. That happens — but a more instructive case is when the tool *didn't* deliver the outcome.
- Real (anonymized) office-hours scenario:
  - Student: "My git is messed up. I can't find any of my homework branches."
  - State: **seven remotes and zero local branches.** Student's response to "why do you have no local branches?" — *"What is a local branch?"*
  - Student had asked AI for help once confused — a legitimate option — but by then they were **so far beyond their understanding of the problem space that they couldn't even formulate the prompt** for the right solution ("pull down my remote branches locally so I can switch between them" — none of those words meant anything to them).
- **Key takeaway:** even with AI available, we still need to understand how the systems we're modifying work.

---

## 2. Where AI Answers Come From (13:30–30:45)

> AI is not omniscient (nodding to Kent Beck's "genie" framing). Its answers come from somewhere, and knowing where helps us predict its failure modes.

### 2.1 Markov models as an intuition pump

- **Markov chain example:** three weather states (sunny, rainy, cloudy) with transition probabilities.
  - E.g., currently cloudy → 0.4 cloudy next, 0.3 sunny, 0.3 rainy. Best (not sure) guess: cloudy again.
  - Real-world use: Mozilla uses a Markov chain to understand how people use Firefox.
- **Scaling the mental model to LLMs:**
  - Imagine states = every word/punctuation token that ever appeared in the **Common Crawl** (internet scrape; petabytes per month, billions of pages since 2008; core training data for many LLMs).
  - Edges = transition probabilities of which token follows which, based on frequency in the corpus.
  - Then extend: edges connect each token not just to the *next* one but to tokens 1, 2, 3, 4, 5, 6, 7+ positions back.
  - This is a useful approximation of **autoregressive LLM training**: masking a word and guessing it from all the other words.

### 2.2 Token-by-token generation

- Example: `[start] I went to the ___` → candidates: *store*, *movies*, *car*, *apple*, *parrot* — each with a **prediction weight** = likelihood of appearing next given the tokens seen so far.
- Pick a high-weight token ("store"), append it, generate again ("I went to the store ___") → repeat until end of sequence.
- This mechanism excels at tokens with **strong positional patterns**: prepositions (at, by, in, of) and punctuation.

### 2.3 Denotational vs. contextual similarity — where LLMs stumble

- Most tokens don't get their position purely from pattern; **meaning** matters.
- Terminology:
  - **Denotationally distinct:** tokens that mean different things (*store* = buy things; *cinema* = watch movies). They usually appear in different contexts, so context disambiguates ("I needed to buy apples, so I visited the ___" → *store*).
  - **Denotationally similar:** interchangeable without changing meaning (*cinema* / *the movies*).
- **The trouble spot: contextually similar but denotationally distinct tokens** — appear in the same contexts, mean different things:
  - **Numbers:** "I have 3 apples" ≠ "30 apples" ≠ "3,000 apples."
  - **Names:** in Clue, the name of the person you accuse matters; names occupy identical textual contexts but are not interchangeable.
- This is a known failure mode that toolmakers have shipped patches around.

### 2.4 Two follow-up questions

1. **Why do LLMs still so often get proper nouns and numbers right?**
   - Context fills in. "Justin Bieber was born in ___": in training text, *Justin* + *Bieber* + *born* overwhelmingly co-occur with *1994*.
   - Multiple prior tokens jointly influencing the prediction is the basis of **multi-headed attention**.
2. **Why can LLMs produce novel-sounding sequences or use rare words?**
   - **Embeddings**: token meanings represented as vectors (e.g., word2vec, ~300 dimensions).
   - Each dimension ≈ an axis of meaning: sentiment (good/neutral/bad), gender (king/queen/ruler), rank (queen/princess/baroness), expertise (researcher/teacher/dilettante).
   - Tokens/phrases with similar meanings cluster together in vector space, so the model can select within a "meaning family" — e.g., learning that *perspicacious* ≈ its synonym cluster.

### 2.5 From tokens to documents: the CNN analogy

- To illustrate representation at the level of whole documents, use a **convolutional neural network** (simpler than an LLM but illustrative):
  - Input image (her hand-drawn **sea lion** — emphatically not a seal) passes through layers.
  - Early layers: borders, dark/light regions.
  - Later layers: patterns among those → features (muzzle, eye, flipper).
  - Features → classification ("sea lion/seal family"; certainly not an apple).
- **Text networks do something analogous:** tokens in context form features → ideas → arguments; these relate to each other in specific patterns in the training data, which the model recognizes and replicates.
- Value: this lets us **predict where the model might go wrong** when we use it to learn.

### 2.6 Case study: the laptop-killing ensemble model

- Machine-learning student at office hours: laptop shuts down whenever they work on their final project; considering a Genius Bar visit.
- Project: training several models in parallel and having them vote (**ensemble model**). AI use was allowed.
- The AI had helpfully suggested **multiprocessing** to speed up training — running the models in parallel **on all cores**.
  - All cores on a *laptop* → nothing left for the OS and other apps → shutdown. ("Why are there 10 Pythons running?")
- **Why did the AI do this?** Not malice — it's **what's in the training data**:
  - Most parallel-training code on GitHub is written for **production**: a rented AWS/GCP box whose *only* job is running that code. There, all-cores is correct and desirable.
  - The pattern is wrong on a laptop, but the corpus doesn't encode that distinction for you.
- Resolution required a human reading the code — not because the professor has better eyeballs, but because she has **knowledge of what the code is doing plus knowledge of how AI is trained**, which together explain the failure.

---

## 3. How We Learn: The Neuroscience (30:45–41:20)

> Three phenomena (of many). One of them was used *on the audience* repeatedly during the talk — a challenge to spot it. (It's outcome prediction: all the "guess before I tell you" / show-of-hands prompts.)

### 3.1 Spaced repetition

- **Skill development, reduced to essentials = focused attention interspersed with quality sleep.**
  - How attention is applied affects improvement somewhat (activity design), but the steps are constant.
- Explains the shower/next-morning solution effect from Part 1.
- **Classroom application** — evaluating GenAI's strengths/weaknesses in code analysis, deliberately spread across sessions:
  1. Homework: students pull code from prior projects; reflect on which parts were hard vs. easy to write, and — with months of distance — hard vs. easy to *read*.
  2. (Sleep.) Lecture on **coupling and cohesion** and their relation to maintainability.
  3. (Sleep — classes are weekly, so many sleeps.) Homework: run their own code through an agent to find high coupling / low cohesion and suggest fixes.
  4. Final step: having cogitated and slept on the concepts, students **decide where they agree and disagree with the agent's conclusions.**
- Personal experience + sleep cycles makes the concept stick far better than being told.
- **Industry application:** influence your own learning rate — and coach juniors — by spreading learning across several bouts of quality sleep. "Annoyingly simple and works extremely well."

### 3.2 Outcome prediction

- Newer finding: **we internalize information better if we tried to guess it first.**
- "Learning happens best when we teach to a brain that is already thinking" — create a *need* for information before providing it (marketing analogy: create the need before selling the product). A brain asking questions can be convinced to care about answers.
- **Choose-your-own-adventure analogy:** choosing forces you to predict what happens if the character does X; flipping the page tests the prediction.
- **Classroom application (built with Claude's help):** choose-your-own-adventure activities for ML pipeline decisions —
  - Task: classifying Australian land types from Landsat satellite wavelength data.
  - Students are given **five model architectures**, predict which will perform best given the problem spec, pick one, see the stats, optionally pick again.
  - Guessing first → much accelerated retention vs. just being told the answer.
  - Framing: this is "speeding up the scientific method" — the way humans figure out what they don't yet know.
- **DIY version, no fancy tooling needed:** while learning how anything works, stop at each step and ask, *"What do I think the next step should be, and why, given what I know right now?"* — then proceed and check. Drastically increases internalization.

### 3.3 Format diversification

- Backstory: early-2010s pedagogy leaned on **learning styles** (visual/auditory/reading/kinesthetic).
- **Subsequent studies: mostly no correlation** between stated learning style and what actually helps a person learn.
- What *does* hold: we learn much better when we encounter the **same information in multiple formats** than repeatedly in one format.
  - Why so many people think they're "kinesthetic learners": trying/breaking usually comes *second or third* — it's the repeat exposure, not the modality. Reverse the order (try first, read second) and suddenly reading "works."
- **Classroom application:** assign reading → lecture → note-taking on the same topic.
- **AI-enabled application (students already do this):**
  - Ask AI for a video playlist covering concepts assigned as reading.
  - Have a conversation with AI about the taught material and ask it to identify where their understanding went wrong.

---

## 4. Closing (41:20–end)

- GenAI has changed the landscape of skill development in software engineering, but **the biology and psychology of how we solve problems has not changed** at that pace.
- To use these tools most effectively:
  - Understand **how the tools work** (Part 2), and
  - Understand **how we work** (Part 3) — and keep training ourselves and coaching junior colleagues in techniques that align with how humans actually learn.

---

## Key Takeaways (synthesized)

1. **Two modes:** doing rewards speed; figuring out requires slowing down. When doing depends on figuring out, speed makes you *more* stuck.
2. **Learning is capacity building, and capacity building is deliberately inefficient** — confusion and struggle are the mechanism, not a bug (kettlebell swings vs. walking).
3. **Outcome accelerants ≠ learning aids.** Any tool used purely to accelerate outcomes (GenAI especially) short-circuits skill development.
4. **Prompting has a knowledge floor:** if you don't understand the problem space, you can't even formulate the prompt that would rescue you (the Git remotes student).
5. **LLM failure modes are predictable from training data:** contextually-similar-but-denotationally-distinct tokens (numbers, names), and corpus biases like "parallel training code assumes a dedicated production box" (the all-cores laptop).
6. **Three evidence-based learning levers:**
   - **Spaced repetition** — attention interspersed with quality sleep.
   - **Outcome prediction** — guess before you check; teach to a brain already thinking.
   - **Format diversification** — same material, multiple formats (learning "styles" per se don't hold up).
7. These apply to your own growth *and* to how you coach junior colleagues in an AI-accelerated environment.