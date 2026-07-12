---
title: "LLM projects: same or different?! - Sandor Kazi | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Sandor Kazi (EPAM data solution architect) warns software teams what surprises them when they start building with LLMs — the chainsaw/cake misalignment, the 'adequate solution too quickly' trap, consent & user education, reproducibility as the master key, control via programmatic switches and LLM-as-judge, Python-or-not, why input→output testing fails (determinize vs. fuzzy testing, deleted model versions, TDD breaking down), the 'data contradicts language' laptop stock_type example, providing context (prompt/fine-tune/agents), and cost control — structured around functional and non-functional requirements, plus a Q&A on package managers and judging."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# LLM projects: same or different?! - Sandor Kazi (Talk Outline)

> A **Craft 2025** technical talk by **Sandor Kazi** — data solution architect at **EPAM** (2+ years there; data and machine learning his entire career, moving into generative-AI application projects early). A deliberately technical, warning-laden tour of what surprises teams from a **software-development background** when they start building with **LLMs**. Originally intended for developers/project managers who "only had software development experience before" and need to expect these issues and manage customer expectations. Self-deprecating warning up front: "I tend to be loud — keep your hands on the volume control." Structured around **functional and non-functional requirements (NFRs)**, with each slide a "wall of text" as a reference pointer rather than something to memorize. Each topic follows the same shape: **problem description → examples → the quality attribute at stake → what to do about it**. The talk's own arc: two underlying problems → consent & education → reproducibility → control → Python-or-not → testing → data ("data contradicts language") → providing context (prompt/fine-tune/agents) → cost → Q&A.

---

## 1. Framing — Two Underlying Problems

### 1.1 What an LLM is and what it's used for
- An LLM predicts and gives you **the next token** to a text.
- Used for summarization, excerpts, rephrasing, and more — the most obvious example being **ChatGPT** ("even the hairdressers are talking about ChatGPT nowadays").
- More complex systems are built from those same building blocks.

### 1.2 Problem one — the misalignment
- There's a **misalignment** between what the tool *does* and what it's *used for*.
- Analogy: **a chainsaw** — "you can cut cake with it, but it's still not for that purpose."
- "We are kind of cutting cake with a chainsaw, with some kind of success."

### 1.3 Problem two — an adequate solution, too quickly
- LLMs are quick to solve a problem **decently** — they provide an **adequate solution fast**.
- "What's the problem? That it provides an adequate solution quickly" — it lulls you before the non-obvious, hard parts appear.
- These two problems "span across the entire talk."

### 1.4 The organizing lens: functional vs. non-functional requirements
- As an architect he structures everything around **functional requirements** (what the app *does* — log in, download, check something) and **non-functional requirements** (more abstract — **availability** e.g. 99.9% during working hours, **security**, general impression/performance).

---

## 2. Consent & Adoption

### 2.1 Legal (and moral) use
- Always consider the **legal side** — and often the **moral side** — of which model you use and what you feed it.
- Key example: "**Can you feed your customer's entire codebase to a large language model online? Probably not.**"

### 2.2 User education
- **Educate users** on what to look out for: what data they're **typing in**, what data the tool **acquires** from them, and whether that's okay.

---

## 3. Reproducibility (the master key)

### 3.1 Why it's foundational
- Reproducibility "is going to be key" across the whole talk, "not just in this context."

### 3.2 The hearsay problem
- If you later have to argue "the AI gave me this response," it's **hearsay** unless you can **reproduce** it.
- You must be able to **recreate what happened in one session in a totally different session** — bringing up all the context and feeding the same thing.

### 3.3 Consequence for testing
- Without planning for this, **user acceptance testing** sessions become **unusable** — testers report "this happened and this happened," and "you can't even try to reproduce it."

---

## 4. Control

### 4.1 Vague ideas crystallize into hard rules
- LLM applications often start from a **vague idea** ("let's use AI for this") — driven by feasibility, a management-summary buzzword, or available budget.
- Once a proof of concept works end-to-end, requirements **crystallize**: e.g. "whenever it talks about **legal advice**, **never** give a response."

### 4.2 Total control pushes toward programmatic switches
- "But the LLM *might* give a response" — so to enforce "never," you move toward a **programmed structure**: a **programmatic switch** around the AI's decisions (this mode, that mode, even a **deny mode**).
- Identify **which areas to program** vs. **which to leave to the AI**.
- Enforcing "never say X" also **requires reproducibility** to prove it happened.

### 4.3 LLM-as-judge
- Every LLM use **generates content** (a session, a message, an image) that you must **validate**.
- You can use **LLMs as judges** to evaluate that generated content — needing "some kind of process to validate it."

---

## 5. Python or Not

### 5.1 Python is most convenient — but sometimes forbidden
- Python "is most likely" the most convenient way to build with LLMs, and he prefers it.
- But some customers/use cases **won't let you deploy Python in production**.

### 5.2 Why customers forbid it
- No **monitoring tools** for Python applications.
- **Dependency-chain** policy concerns.

### 5.3 The fallback
- You must identify what to use instead — one project had to **rebuild the same thing in Java**.
- Java had libraries but "did not really have all the integrations" the Python app had, so "you juggle between the two" and "live with the requirements of the customer who is paying."

---

## 6. Testing (the biggest topic)

### 6.1 Why input→output assertions fail
- "Could be a 90-minute talk by itself."
- You can't just assert "for this input, I want this output" — "even with all the reproducibility in the world, it might not work."
- The reason: **if you could enumerate input→output, you'd just program it and wouldn't need an LLM.**

### 6.2 Path A — fully determinize the LLM
- Some LLMs can run **fully deterministic**: lower all probabilities to always pick the **most likely token**, plus a **random seed**, and you get the same output every time.
- The cost: **you lose creativity** — "creativity comes from *not* selecting the most obvious thing."

### 6.3 Path B — fuzzy testing
- Make test cases **fuzzy**: run e.g. **100 cases**, accept a prompt change if ~**60% pass** (green), some are **yellow**, some **red** ("and I can't deploy").
- The catch: you must **live with an error barrier**.

### 6.4 Fuzzy testing invites provider trouble — deleted model versions
- Even within **GPT-4** there are **timestamped versions**.
- Rolling out a *new* version doesn't affect you (you pin your version), but **deleting a version** is a headache.
- If everything "went red" on that forced change: "You can't go back (it's not there), you can't go forward (it's red) — so you're basically **down**."

### 6.5 The self-hosting escape (with its own problems)
- You can avoid provider deletions by **hosting your own model**, but then: how to migrate to a newer one, how many **GPU instances** you need, **licensing**, and what the model was **trained on**.

### 6.6 TDD's convergence breaks down
- **Test-driven development** works "for a few steps" — add a test, implement, iterate closer to the ideal.
- The problem: that "nice convergence" **breaks above a certain complexity** when an LLM edits your codebase.
- Each modification "makes sense," but **when it breaks you're stuck** because you didn't internalize the concepts of the previous modifications or their impact — you fall back to implementing it yourself.
- Verdict: LLMs are "truly nice for **writing tests**" and for **small modifications on small codebases**; on **larger codebases** you may fail and have to **untangle** what the LLM did.

---

## 7. Data — "Data Contradicts Language"

### 7.1 Data is always the problem
- "Whenever you do machine learning, data is always the problem."
- Online LLMs are trained on some dataset and are, in a sense, "the essence of that data" — which may **not represent your business** ("we are a bank, and *balance* means something different from what the LLM understands").

### 7.2 The escalating laptop example — step 1 (works)
- You sell laptops; an LLM chat suggests laptops fitting a customer's description.
- A `stock_type` column has values **new** and **used**.
- The agent generates a **SQL** query (the *application*, not the LLM, runs it), returns used laptops — "nothing to see here."

### 7.3 Step 2 — new sub-categories appear
- As you sell more, you split "used" into finer categories: **certified** (dealer-approved / office laptops you inspect and rate) and **refurbished**.
- Now `stock_type` can be **new, used, certified, refurbished**.

### 7.4 Step 3 — the breakage
- A user asks for "**a used laptop under [price]**."
- The model filters `stock_type = 'used'` — and **discards** the certified and refurbished ones.
- Semantically, certified and refurbished **are** used laptops — so the data **breaks language**.

### 7.5 Why prompting can't fully fix it
- Because it's a **language** model, "if you break language, however hard you prompt, you'll see errors."
- It might only fail "once in a thousand" — or more.

### 7.6 The fix — restructure the data
- Change the schema: `stock_type = used` for all of them, plus a **`used_details`** column holding `refurbished` / `certified` / etc.
- "You might have to change your data to work with an LLM — something people don't expect."

### 7.7 Why this is brutal near a deadline
- With **100 million records**, "two days to totally transform two terabytes of data," this is painful — you could have designed for it earlier, but now you can't.
- Core lesson: "when your data contradicts language, and the contradiction meets the language model, that's **inherently a problem**."

---

## 8. Providing Context

### 8.1 Option 1 — the prompt (simplest)
- Just tell the LLM verbally in the input: "treat *used* as refurbished and everything."
- Simplest, but (as the laptop example shows) not fully reliable.

### 8.2 Option 2 — fine-tuning / training
- **Fine-tune** or **train your own** model — the latter "might not even be feasible," costing "a lot of money."
- Intermediate options exist: **fine-tune** iterations, or **add a few layers of neurons** next to the LLM — methods to get closer to your data representation, though "they might not work from the get-go."
- Training itself is "not just another talk but another week" — he skips deep discussion.

### 8.3 Option 3 — agents (focused scope)
- **Agents** are very **specialized**, so you can fit more **relevant** information into the window.
- With multiple datasets, you don't put all context into one model interaction — have **one agent focus on one**, another on another.
- Benefit: "a **much smaller scope to test** and to adapt to."

### 8.4 Data quality underpins everything
- The `stock_type` wrangling is a **data-quality** problem — "a big, big problem" beneath all the context options.

---

## 9. Cost

### 9.1 Runtime vs. initial costs
- Whoever pays "sometimes worries about the cost."
- Beyond runtime, some usages have large **initial costs** — e.g. **indexing data**.

### 9.2 The embeddings / re-indexing trap
- Choosing an embedding model (e.g. OpenAI's **text-embedding-3-large**) is a commitment: if it's **discontinued**, you must **re-index your entire dataset** to keep vector search working.
- Aside on **embeddings**: transform text into a **vector** so similar texts land close together and dissimilar texts far apart, enabling **vector-space search**. (A pointer — "if you don't understand it, don't care about it; if it interests you, look it up.")

### 9.3 Can you use a cheaper / mini model?
- "Always a question" — do you need GPT-4.5 or can you use the **older, cheaper**, or **minified** version?
- **Dev-mini vs. prod-full** is a real compromise, but risky: "you'll see **very different things** in dev and production," so you must plan how to test the actual production model without running *all* dev on it. "Expect that compromise; if you don't, it'll hit you."

### 9.4 Unpredictable usage → limit usage to limit cost
- LLM applications are "not predictable regarding usage," so if the payer doesn't know the usage, you can't estimate cost.
- You must **limit usage to limit cost** — "a lot of back and forth" to limit it meaningfully **without breaking the user experience**.

### 9.5 Wrap-up
- These are the ways LLM projects "can be different from software development projects in general" — "I hope everyone has at least one takeaway." Offers to email the presentation on request.

---

## 10. Q&A

### 10.1 Q1 — Given the rabbit hole of Python package managers, what's your go-to?
- "It depends, of course," but he tends to use the **UV** package manager.
- Reasons: it's **quick** and **handles dependency chains better**.
- Caveat: at customer sites the manager "is usually a given" — when they can use Python at all — but he **likes and recommends UV**.

### 10.2 Q2 — Testing with another LLM as judge — who watches the watchmen?
- "A very good question — you should do a talk about it."
- Judging with the **same LLM**: errors "inherent to that LLM" (things that simply don't match your expectation) **pass through without issue**.
- Judging with **another / different-type LLM**: you might flag something that's "totally a **false positive**."
- So you "thread the line" and do both / in-between — but ultimately "**nobody watches the watchmen**"; you'll have to **manually check** stuff.

---

## People & References Cited

- **Sandor Kazi** — speaker; data solution architect at **EPAM**; background in data and machine learning, early into generative-AI application projects; has led development of multiple data platforms/applications across cloud platforms for EPAM's customers.
- **EPAM** — software-development company building solutions for customers.
- **Models / tools referenced:** ChatGPT, GPT-4 (timestamped versions), GPT-4.5 and "mini/minified" model variants, OpenAI text-embedding-3-large, Python, Java (fallback stack), the **UV** Python package manager, SQL.
- **Concepts:** LLM as next-token predictor; the chainsaw/cake misalignment; "adequate solution too quickly" trap; functional vs. non-functional requirements (availability, security); consent (legal/moral use, feeding a codebase online); user education; reproducibility (recreating a session's context; hearsay; UAT); control (programmatic switches, deny mode, "never say X"); LLM-as-judge ("who watches the watchmen"); Python-or-not (monitoring, dependency-chain policy); testing (why input→output fails; full determinization via lowest-probability tokens + random seed; loss of creativity; fuzzy testing with an error barrier; green/yellow/red flags); provider-deleted model versions; self-hosting tradeoffs (GPUs, licensing, training data); TDD convergence breaking down on large codebases; "data contradicts language" (the `stock_type` new/used/certified/refurbished example; restructuring to `stock_type=used` + `used_details`); terabyte-scale data wrangling near a deadline; providing context (prompt vs. fine-tuning/adding neuron layers vs. agents); agents as specialized, smaller-scope context; data quality; cost (runtime vs. initial/indexing; embeddings and re-indexing on discontinuation; cheaper/mini models; dev-vs-prod model compromise; unpredictable usage; limiting usage to limit cost); vector-space embeddings/search.

---

*Video: https://www.youtube.com/watch?v=pdRZw2rlY6Q — Transcript via yt-transcript.sh; outline generated from the transcript.*
