---
title: "Code World Model: Building World Models for Computation – Jacob Kahn | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "A technical walkthrough of how generative coding models are trained — pre/mid/post-training, agentic RL from pull requests, execution tracing, and 'world models' that simulate program execution."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Code World Model: Building World Models for Computation – Jacob Kahn (Talk Outline)

> Jacob Kahn opens the black box of how the coding models you use every day are trained, using **CWM (Code World Model)** — a 32B-parameter, open, research-scale model (131k context) — as the worked example.

---

## 1. Model vs. Harness

- Your prompt goes into a system with two parts: the **model** (a neural net, tokens→tokens, what's actually *trained*) and the **harness** (deterministic software that gives the model tools and parameterizes its environment). This talk is about the **model**.

## 2. Training Stages

- **Pre-training** — general world/text knowledge (includes code); CWM: **8T tokens**, starting with short (8k) context. The model learns what code *looks like* but can't reason about it well.
- **Mid-training** — domain-specific (lots of code); CWM: **5T tokens**, context grown to **131k**. Produces the pre-trained checkpoint.
- **Post-training** — where the interesting work is: **SFT** (instruction/bug-fix data) then **reinforcement learning** for reasoning, advanced instruction-following, multi-turn behavior. Smaller data, but scaling up. Compute is shifting from pre-training-dominated toward a **pre-training / RL-post-training balance**.

## 3. Agentic Reinforcement Learning

- **RL loop:** prompt → agent reasons → **action** (text/tool/bash/code) → executed in an isolated **sandbox** → returns observations, reward, state. The unit of data becomes a **trajectory** (tokens + rewards + log-probs over many steps).
- **Distributed RL** at scale is **asynchronous**: trainers turn signals into gradients and update the master model; workers do inference and generate trajectories, which may be slightly out of sync (RL theory says that's OK, and it amortizes well).
- Wild trick: **update the model mid-trajectory** — swap in a freshly-trained model between turns of the same interaction; still fine, big throughput win.

## 4. Data From Pull Requests

- A PR encodes the world **before and after** a change: the **description looks like a prompt**, the **diff looks like the answer** → a large, diverse PR dataset.
- **RL from PRs:** clone the repo into a sandbox, drop the model in with an issue (no ground truth), let it produce a **predicted patch**, then compare to the **oracle patch** (verified by tests) to compute a reward.
- **Bootstrap/scale** via **rejection sampling**: generate many trajectories, score/filter them, feed the good ones back as training data.
- CWM post-training: ~20,000 steps, a few thousand GPUs, ~200B tokens (small vs. state-of-the-art).

## 5. Why "World Model"? Execution Tracing

- **Code is not just syntax** — humans reason about **execution** (program states, transitions) when debugging. So train models on that too.
- **Execution tracing:** dump intermediate state each line (easy in Python via reflection; creative instrumentation elsewhere) with special tokens for calls/lines/local-variable values. Extends to **system-level** state (distributed systems, hardware, performance) and even **natural-language** traces.
- Model a **program transition function**: given state + action (execute next line), **predict the next state** — fits the standard autoregressive next-token paradigm, and the model can produce chains-of-thought for the transition.

## 6. What This Enables

- **Neural debugging** — approximate/simulate execution to predict failures without running expensive/long/impossible-to-run processes (web-scale distributed systems, new hardware).
- **Speculative execution** — "run" code you haven't committed to writing, when real execution is expensive.
- **Halting-style questions** — reason about long-term/overall program behavior (does it terminate? undefined behavior?), approximating famously undecidable questions with better accuracy.

## 7. Q&A Highlights

- **Oracle patch:** use the actual verified PR as the single ground truth (checked by tests); diff the predicted patch against it.
- **Process rewards** (evaluating intermediate tool calls, not just outcomes) is an active, harder research area with more variance.
- **Small dense models** are great for privacy/local use; still in a "bigger is better" scaling-law regime, but small models keep improving and distillation helps.
- **Learning from AI-generated data:** mostly OK — neural nets generalize well — but synthetic data loses "human groundedness," so it needs **much more careful filtering**.
- **Other domains** (images/video) are hard because state is **dense and continuous** and less verifiable; **code is concise and verifiable**, which is why world modeling started there.
- Building CWM was **mostly human-driven**; coding models are poor at ML-engineering/GPU-kernel work due to scarce public data. **Ideas remain more expensive than execution.**

---

*Video: https://www.youtube.com/watch?v=_Snxmj6VWVw — Transcript via yt-transcript.sh; outline generated from the transcript.*
