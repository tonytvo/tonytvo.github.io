---
title: "Code World Model: Building World Models for Computation – Jacob Kahn | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Jacob Kahn opens the black box of how generative coding models are trained, using the open 32B-parameter Code World Model (CWM) as the worked example — model vs. harness, pre/mid/post-training scales, agentic distributed asynchronous RL (including updating the model mid-trajectory), building RL data from GitHub pull requests, execution tracing and 'world models' that predict a program's next state, and applications like neural debugging, speculative execution, and approximating the halting problem — plus a deep 12-question Q&A."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Code World Model: Building World Models for Computation – Jacob Kahn (Talk Outline)

> A **Craft 2026** technical talk by **Jacob Kahn** on **generative models for code**, aiming to "prime you… to understand what's going on behind the scenes" of the coding models you use every day so you can "use them better." The worked artifact throughout is **CWM (Code World Model)** — a model his team built in **2025**: **open-source / public domain**, a **dense 32-billion-parameter** model with a **131,000-token** context, trained end-to-end, "intended to be a very small-scale model that we use for research." Format: a stage-by-stage explainer of the full training pipeline, then the "world model" idea (execution tracing), then applications, then an extensive audience Q&A. The talk's own structure: model vs. harness → training stages → agentic RL → data from pull requests → what "world model" means (execution tracing) → what it enables → Q&A.

---

## 1. Model vs. Harness

### 1.1 The everyday setup
- You develop software, open a harness (**Claude Code, Codex, open code, whatever**), select a model, prompt it, and "something happens."

### 1.2 The two components of the system
- Your prompt goes into a system with **two parts**.
- **The model** — a **neural network**: tokens in, tokens out. This is what is actually *trained*.
- **The harness** — software around the model that supplies **tools** and **parameterizes how the model interacts with the environment** (your software-engineering environment).

### 1.3 This talk is about the model
- The harness is "an entirely different beast" — fundamentally **deterministic software**, "nothing non-deterministic about it."
- The model "is what we actually train," so the talk focuses there.

### 1.4 The example artifact: CWM
- **Code World Model (CWM)**, built in 2025: open-source, public domain, **32B dense parameters**, **131k** context, trained end-to-end — "relatively simple to use for research."

---

## 2. Training Stages

### 2.1 Pre-training — general knowledge of the world
- Imbues the model with general world/text knowledge; internet text "includes a lot of code."
- The model learns "what code looks like" and can generate arbitrary code, but "maybe can't respond to prompts about code so well" and "can't reason about it."
- **Scale:** trillions of tokens; for **CWM, 8 trillion tokens**.
- Context starts small — a **8,000-token** window at the beginning.

### 2.2 Mid-training — domain-specific data
- Data slightly more oriented to the target domain — for coding models, **lots of (open-source) code**.
- **Scale:** large; for **CWM, 5 trillion tokens** (similar to pre-training).
- This is where **context is grown** — up to CWM's released **131,000 tokens**.
- Produces the **CWM pre-trained checkpoint**, wrapping up the pre-training phase.

### 2.3 Post-training step 1 — Supervised Fine-Tuning (SFT)
- Even more specific, domain-specific data: **instruction → what code to generate**, **instruction following**, **how to fix bugs**.
- Not just about code, but about **how the model interacts with the user**.
- Much smaller than pre/mid-training; context is reduced "for various reasons."
- Produces the **SFT checkpoint**.

### 2.4 Post-training step 2 — Reinforcement Learning
- "Where most of the interesting work is happening these days."
- Imbues **reasoning capabilities**, advanced instruction following, and the **multi-turn** (prompt-over-prompt) interaction model.
- Typically uses **reinforcement learning**; data significantly smaller than earlier stages, "but the goal is to scale these things up over time."

### 2.5 The shifting compute balance
- A few years ago **pre-training dominated** compute (data and training time).
- Now **pre-training and RL-based post-training share** the compute budget.
- They're deliberately increasing post-training compute/data because "we're seeing significant benefits" and "really, really good returns" from adding reasoning and richer interaction models.

---

## 3. Agentic Reinforcement Learning

### 3.1 Defining the terms
- **Reinforcement learning** — iteratively interacting with an **environment** and getting a **reward**.
- **Agentic** — "there's some entity doing something"; a much-abused word, made concrete here.

### 3.2 The RL loop
- Start with a **prompt** → feed to the **agent** → after a reasoning process it produces an **action**.
- The action is "oftentimes parameterized by text" — could be a **tool call**, an option to **write code**, or **run a bash command**.
- The action is sent to an environment, "typically a clean sandbox," so **every action is isolated**.
- Taking a **step** executes the action and returns: **observations** (e.g. bash output, compile results), a **reward** (if the action touched something the task cares about), extra **machine/program state**, and the **last action**.
- This bundle is **transition data**, fed back to the agent, and the process repeats.

### 3.3 The trajectory as the unit of data
- Each run yields **tokens**, **rewards** per step, and **log-probabilities** (probability of generating each token at each step).
- Combined over multiple steps these form a **trajectory** — the model's interaction with the environment.
- "Trajectories are now the unit of data" in post-training — no longer thinking about token samples but interactions.

### 3.4 Building a distributed training system
- Disparate components: a **queue of models**; **trainers** that turn signals (observations, rewards) into **gradients** and update the model; and **workers** that do **inference** (prompt → result → interact with environment → next action, multi-turn).

### 3.5 Asynchronous distributed RL
- Problem: many trajectories come from **different points in time**, but you want to update the model with them.
- Solution: an **asynchronous** approach — do inference with a model at a point in time, queue the resulting trajectories back to the **trainers** to update the **master model**, and trainers then send updated models back to workers for more sampling.
- At any moment, the model and the trajectories being generated "might be slightly out of sync," but **RL theory guarantees that's OK**.
- This asynchronicity is "critical to performance at scale" — a small cost to training integrity that "amortizes very well."

### 3.6 The hardest problem: the produce/consume pipeline
- Trajectories are **expensive** to produce; you want model weights **synchronized** across samplers while keeping **trainers up-to-date**.

### 3.7 The unusual trick — update the model mid-trajectory
- During a multi-turn interaction, you can **swap in a freshly-trained model from the trainer node between turns**.
- So the model at step *n+1* differs slightly from the one at step *n* within the same trajectory.
- "It turns out this is okay" — no long-term training issues, and the **throughput benefit is well worth it**.

---

## 4. Data From Pull Requests

### 4.1 The goal
- Understand what "good software engineering" looks like and the **incomplete steps** of incremental changes.

### 4.2 PRs encode before/after
- Take a repo's events (commits, pull requests), filter and clean them into a set of PRs.
- A PR captures the world **before and after** a change: the **description looks a lot like a prompt**, the **diff looks a lot like the answer**.

### 4.3 A large, diverse PR dataset
- Build a dataset of (prompt, code, relevant files) across **tons of repos** for wide **diversity**, yielding a model that **generalizes to the universe of software**.

### 4.4 Turning PRs into RL data
- Take a **sandbox**, **clone the repository** into it, and drop the **model** in.
- The model can edit code, compile, run the shell, run tests — "play around in the repository."
- Prompt it: "Here's an issue, here's the repo state, fix the issue" — **no ground truth given**.

### 4.5 Predicted patch vs. oracle patch
- The model eventually produces a **predicted patch**.
- Compare it to the **oracle** — the **correct patch from the actual PR** — to measure how close it got.
- This yields a **reward signal from just a bunch of pull requests**, added back to the model during training.

### 4.6 Bootstrapping with rejection sampling
- Goal: high-quality **reasoning traces** from the agent.
- Generate many trajectories, then do **rejection sampling** — **score** each trajectory, keep the good/positive-signal ones via **filters**, discard the rest.
- Feed the good trajectories back to the model so it **learns from them** (not just generates them).
- This scales a small set of PRs into a **large synthetic dataset** for SFT or post-training.

### 4.7 CWM post-training scale
- **~20,000 steps** (batches of trajectories = ~20,000 real-repo environment interactions).
- **A few thousand modern GPUs** in a modern cluster.
- **~200 billion total tokens** processed — "still relatively small" vs. trillions for pre-training, and vs. state-of-the-art models; scale has grown since.

---

## 5. Why "World Model"? — Execution Tracing

### 5.1 Is code just syntax?
- Most would say **no**.
- Example: a program counting characters in a string — counting the **R's in "strawberry"** ("because this is a talk about deep learning").
- **Syntax** (left) and **execution** (right, the unrolled loop / explicit iterations) are "two very different ways of describing the same program"; neither fully captures the other.

### 5.2 Humans reason about execution
- When we write, debug, and design, we **run programs in our heads** — thinking in **program states** and **transitions between discrete moments** of execution.
- So models should do this too, "instead of just showing them a bunch of code."

### 5.3 Execution tracing
- A familiar idea (debuggers), but here it means **dumping program execution back to the model coherently**.
- Dump **intermediate steps every line**.
- In **Python** this is "relatively easy" thanks to **reflective properties** — dump local variables and other state.
- In other languages "we have to be creative with our instrumentation."
- Use **special tokens** to denote a **function call**, a **line being executed**, and the **values of local variables**.

### 5.4 Beyond single functions — system-level tracing
- Extends to **larger-scale system execution**: states of individual **distributed-system components**, or **hardware** state in performance engineering.
- Can even extend to **natural-language tracing** — a human describes a program's execution, given to the model so it can describe execution and "think better."

### 5.5 Modeling the program transition function
- We model a **program transition function**: given a **state** (execution trace, and possibly OS/network data) and an **action** (execute the next line), **predict the next state**.
- Fits the standard **autoregressive next-token** paradigm: sequentially create state-action pairs and have the model predict the next state.
- The model can produce **chains of thought** for the intermediate reasoning of that transition — "everything still works with the LLM autoregressive paradigm."

### 5.6 The agentic reasoning world model
- Historically, an agent must **iteratively interact** with the environment at every step (get feedback, maybe fail, continue) until it solves the task.
- With **world modeling**, the agent can **approximate the state of the world internally** — "I don't need to execute code or take explicit actions that might be expensive."
- This gives models a human-like ability to reason "more effectively, more efficiently."

---

## 6. What This Enables

### 6.1 Neural debugging
- Instead of running a debugger on an expensive process, **approximate execution** and **speculatively predict what will go wrong**.
- Valuable when execution "might take hours or days" or "might not be possible" — e.g. web-scale distributed systems, or a **new generation of hardware** where you want to know "what happens when I use some intrinsic on it."
- Contrast: a traditional debugger forces line-by-line stepping, and when something breaks you "have to fix intermediate issues" and never reach your core question; a neural debugger takes a **partial trace** and predicts remaining values and **failure modes**.

### 6.2 Speculative execution
- With execution traces you can "**run** speculatively a program you're thinking about writing but haven't committed to write" — useful when real execution / tests are expensive.

### 6.3 Halting-style questions
- "This will make some people with complexity-theory foundations bristle": ask about a program's **long-term / overall behavior**, not just intermediate values.
- The **halting problem** ("does it stop?") is famously **undecidable**, but a model that understands execution can reason: "In how many situations does this fail to terminate? Produce undefined behavior?"
- Potentially make progress toward **approximating the halting problem** — predicting "with some better accuracy whether a program will end." ("And this talk does end.")

### 6.4 CWM's state and the technical report
- CWM "traces code reasonably well"; newer state-of-the-art models produce "really, really good execution traces now."
- CWM "is not as magical as the other models you're used to," but you can **see inside** via reasoning and execution traces.
- The **technical report** has details on training CWM and how agentic coding models work in general.

---

## 7. Q&A

### 7.1 Q1 — How can you compare predicted vs. oracle patches, given a huge solution space?
- Decide the ground truth is simply **the actual PR** — then there's **one oracle patch**.
- Ensure it's good by checking it **passes the tests / fixes the issue** — you need a **verifiable signal**.
- Then **diff** the predicted patch against that single oracle for a "solid ground truth."

### 7.2 Q2 — Is there tuning where the tool calls (not just the outcome/diff) get evaluated?
- Yes — an **active research area**. Usually only the **end signal** is used (test passing? bug fixed?).
- Evaluating **intermediary signals** is hard because verifiable intermediary values differ across samples.
- The name for it: **process rewards** — actively judging whether the model is "on the right track" mid-solve.
- "It does work, but scaling it is difficult, the devil's in the details, and there's a lot more variance."

### 7.3 Q3 — What about smaller, denser, specialized models for domains like coding?
- Tradeoffs: small **dense models on commodity hardware** give **local control, privacy** — "we love producing these for the community."
- But "we're still in a **scaling-law paradigm** where bigger is better," and it's hard for small models to match big ones.
- Good news: small-model performance is **rising with** big-model performance, so a small model may match "today's big models in a year or two"; **distillation** is also improving.

### 7.4 Q4 — Doesn't neural debugging's token cost far exceed local debugging?
- "Absolutely, for the vast majority of cases" — no reason to use a GPU-hungry model instead of "a few steps in GDB."
- But valuable when steps are **very expensive or impossible**: web-scale distributed systems, expensive accelerators, programs that take hours, or **failure modes that appear much later**.

### 7.5 Q5 — The SFT set had ~100B tokens of instruction/reasoning data — still a lot. How did you get it?
- **Mostly synthetic**, from the described process of the model producing **synthetic patches**.
- Also **synthetically generated PR data**: take the repo, **back out the diff** needed to fix a bug, and indicate the **test** proving the fix.
- Synthetic data shows **diminishing returns**, but "new ways to create synthetic data have less diminishing returns," so SFT/post-training datasets "will just increase over time."

### 7.6 Q6 — How did you use AI in building the Code World Model?
- "Not so much" — CWM was built "right before various inflection points, late last year."
- **Coding models are poor at ML-engineering tasks** (e.g. writing **GPU kernels**) because "there aren't that many really high-quality GPU kernels on GitHub" — **data scarcity in the public domain**.
- So AI use was "relatively minor"; "a lot of things are still human-driven" and will be "for the foreseeable future."
- Bigger picture: "**Ideas will continue to be a lot more expensive relative to execution**." Execution used to be expensive in ML and is now "a little bit cheaper," but ideas remain the most important thing.

### 7.7 Q7 — Where are the challenges for world modeling in other, more complex domains?
- For **code**, world modeling is relatively simple — state is **concise** (JSON execution-trace data, telemetry, logs — "a bunch of text" that can be compressed) and **verifiable** (you can execute the code to check the reward).
- For **images/video**, the world's representation is **very dense** (many pixels/values), so each state is expensive to represent, and there are **far more possible transitions** in a continuous world.
- Continuous outcomes are hard to verify: "if I place the glass here versus here, there's a continuous scalar difference… not clear what the right outcome is."
- That conciseness + verifiability is "one of the reasons we started studying world modeling in code."

### 7.8 Q8 — When models learn from AI-generated code, don't we get diminishing returns?
- "A more controversial, maybe unanswered research question"; most today would say **not really**.
- Neural networks "**generalize incredibly well**," so synthetic data generated from a trained model "typically represents things outside the normal range."
- Caveat: real data has **human groundedness** (the real distribution of human-written code) and can be trained on "pretty liberally"; **synthetic data loses that groundedness** and "there are corners where things get weird," so it needs **much more careful filtering and quality attention**.

### 7.9 Q9 — Does world modeling improve parameter efficiency?
- "We don't have a clear answer." Not studied at the very-large-parameter scale.
- You *can* build a good small (**tens of billions of params**) code model and add world-modeling capability just by **including execution-tracing samples** without changing much else (unlike vision/video, which needs bigger recipe changes).
- No strong evidence yet that world modeling **shrinks** models; possibly it yields **better reasoning traces** in small models — "an open question, stay tuned."

### 7.10 Q10 — How was execution-tracing data used in post-training?
- Admits "one of the things we didn't do enough of with CWM."
- What they should have done more: **map traces onto natural language**.
- In post-training, models learn **intermediary thoughts / chains of thought** from samples that contain them.
- The gap: a model shown a program "can generate an execution trace, but might not be able to **use** that trace to do chain-of-thought reasoning" — the jump from "I traced it this way, therefore the program does this, therefore make this change."
- Fix: **annotate traces** ("at this step the program failed… so this is a bug on this line"). "Favorite models you use every day" do more of this; public-domain research lacks a clear result yet.

### 7.11 Q11 — Would short video / live photo make sense for an image world model?
- **Yes**, provided it captures a **real state transition**.
- "Me dropping this on the floor" (shows gravity, object motion) is useful; "me just standing here moving a little bit" is not.

### 7.12 Q12 — Does code world modeling still work with side effects / network latency?
- **Theoretically yes** — with a **neural-debugging** approach "we're not actually executing the code," so network latency doesn't matter; the model **simulates** the execution.
- Notes there are "very few actual applications of this in the world so far."
- Advice: go find "the hardest debugging problems… things you'd never think you could debug" (systems too complex for a debugger) and imagine a model **predicting the transition/evolution** of that system instead.

---

## People & References Cited

- **Jacob Kahn** — speaker; part of the team that built CWM.
- **CWM (Code World Model)** — open-source/public-domain, dense **32B** parameters, **131k** context, trained end-to-end in 2025; a research-scale coding model with visible reasoning and execution traces; accompanied by a **technical report**.
- **Harnesses named:** **Claude Code**, **Codex**, **open code**.
- **Tools / tech:** GitHub (repos, commits, pull requests), Python (reflection for tracing), bash/shell, GDB (local debugger), GPU clusters, GPU kernels.
- **Training scales for CWM:** pre-training 8T tokens (starting 8k context), mid-training 5T tokens (context grown to 131k), SFT (~100B-token order, mostly synthetic), post-training ~20,000 steps / few thousand GPUs / ~200B tokens.
- **Concepts:** model vs. harness; pre-training / mid-training / post-training; supervised fine-tuning (SFT); reinforcement learning; the shifting pre-training/RL compute balance; agentic RL loop (prompt → action → sandbox → observations/reward/state); trajectories (tokens + rewards + log-probs); trainers vs. workers; asynchronous distributed RL; updating the model mid-trajectory; PR-based data (description-as-prompt, diff-as-answer); predicted patch vs. oracle patch; verifiable rewards; rejection sampling; synthetic data and diminishing returns; human groundedness; execution tracing (special tokens for calls/lines/locals); system-level and natural-language tracing; program transition function; world models; autoregressive next-token prediction; chains of thought; process rewards; neural debugging; speculative execution; the halting problem / undecidability; scaling laws ("bigger is better"); distillation; parameter efficiency; state density/verifiability across domains (code vs. images/video); "ideas are more expensive than execution."

---

*Video: https://www.youtube.com/watch?v=_Snxmj6VWVw — Transcript via yt-transcript.sh; outline generated from the transcript.*
