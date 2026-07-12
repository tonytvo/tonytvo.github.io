---
title: "AI Engineering Anti-Patterns - Chip Huyen | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Chip Huyen on how AI engineering differs from ML engineering, and five recurring anti-patterns — using GenAI when you don't need it, confusing bad product with bad AI, starting too complex, foregoing human evaluation, and overindexing on early demo success — illustrated with real company stories."
type: "reference"
tags: ["softwaredevelopment"]
---

# AI Engineering Anti-Patterns - Chip Huyen (Talk Outline)

> A Craft 2025 talk by **Chip Huyen** — previously at **Snorkel AI** and **NVIDIA** (core developer on **NeMo**, NVIDIA's generative AI framework), founder of an AI infrastructure startup (acquired), taught **machine learning systems design at Stanford**. Author of *Designing Machine Learning Systems* (2022, Amazon bestseller in AI, translated into 10+ languages) and *AI Engineering* (the most-read book on the O'Reilly platform since launch). She is writing a novel (a "Crazy Rich Asians × Game of Thrones" crossover) and building a studio that uses AI to turn stories into audiobooks, movies, and games — first book *Entanglements of Never End*. The talk has two parts: (1) the difference between ML engineering and AI engineering, and (2) five anti-patterns she's seen at companies deploying AI, each opened with an audience-interactive example.

**Running framing:** for each anti-pattern she asks the audience what the "intuitive" move would be, then shows why the intuitive move is usually wrong.

---

## 1. ML Engineering vs. AI Engineering

### 1.1 The question she's always asked
- "Is there a real difference, or are you just making up new terms to sell more books?" She thinks the difference is fundamental.

### 1.2 Traditional ML engineering — you build the model
- You build applications with traditional ML models: **spam detection, fraud detection, recommender systems**.
- Cites a booking.com recommender-system talk; Amazon recommendations; **Spotify** (notes it's a European company).
- You collect data, train the model, then build the application on top.

### 1.3 AI engineering — you build on foundation models
- Build applications on top of **foundation models** (ChatGPT, Claude, Gemini, Llama, etc.).
- "Foundation model" (coined by Stanford researchers) is broader than "large language model" because modern models are multi-modal — text, images, video, audio.
- The name signals both that it's a *foundation* for lots of things and that it's *incomplete* — you must build something on top.

### 1.4 The reversed development flow
- Old flow: collect data → train model → build app.
- New flow: **start with a product idea** (spend a weekend on a prototype — e.g. a workout coach, a cocktail-recipe helper, a document processor) → if it works, **collect and annotate data** → only in the last phase do you **fine-tune or build your own model**.
- Consequence: because everyone shares the same base models, the competitive advantage shifts to **product** and **data**. Engineers with good **product sense** who iterate quickly are extremely valuable.

### 1.5 Other differences
- **Deployment:** ML models ship inside an existing product (recommendations in Spotify/Amazon; fraud detection in a bank/e-commerce app). AI-engineering apps can be **standalone** — independent AI engineers ship an app and make "millions a month."
- **Prerequisites:** ML engineering required theory (gradient descent, overfitting/underfitting). AI engineering doesn't require ML theory to *start* — you can build with engineering skills and learn ML under the hood as you go. Far more accessible.
- **Framing:** she thinks of AI engineering as a **superset** of ML engineering, and eventually just part of "full-stack engineering." Friends who hire for AI engineering list **web dev** among their top-three skills (to build demos fast).

### 1.6 It's usually a combination
- The real question is rarely ML *or* AI engineering — most systems combine both.
- The AI-engineering share has grown from ~50% to often **70–80–90%** of a GenAI system.

### 1.7 Worked example — a customer-support chatbot architecture
- The two "bread and butter" enterprise GenAI use cases: **customer support chatbots** and **coding**.
- **Input classifier(s) — traditional ML, built in-house:**
  - Is the request appropriate? (e.g. for an oil company, "who should I vote for?" or "tell me a racist joke" should be refused politely, not screenshotted and shared online.)
  - Can it be answered by the **FAQ**? (e.g. "how do I change my password" → just send the FAQ link, no AI needed.)
  - Should it be sent to a model at all?
- **Model call — AI engineering:** send to Claude/Gemini and get a response.
- **Output classifier — traditional ML, built in-house:** a **PII detector / guardrail** — does the response leak personal info (a common risk when the model is connected to enterprise databases, and with caching systems)? Filter or delete if so.
- Conclusion: a GenAI system is a whole, fairly complex system — not just GenAI. AI is becoming part of the standard software toolkit "the way JavaScript and databases are."

---

## 2. Anti-Pattern 1 — Using GenAI When You Don't Need It

### 2.1 The electricity-bill startup
- A company she was pitched (she invests) wanted to use GenAI to **reduce customers' electricity bills**: users tell a chatbot how they use electricity (laundry, car charging, dishwashing, lights) and it advises when to run each. They claimed a **~30% average reduction** in test users' bills — "free money, who wouldn't want it?"

### 2.2 Why it's an anti-pattern
- This is a classic **optimization** problem. She asked: what if I just use a **greedy algorithm** — put the most electricity-intensive activities (car charging) into the cheapest hours (off-peak, e.g. midnight, vs. the ~6 p.m. peak in the US)?
- What reduction would that baseline get? The team said "we'll check and let you know," never got back, and **pivoted to another idea**.
- Even beyond greedy, there are fast, cheap, efficient **automation/optimization algorithms** that don't need GenAI.

---

## 3. Anti-Pattern 2 — Confusing Bad Product with Bad AI

### 3.1 Example A — meeting-summary length (a popular product)
- A PM friend's app takes a meeting transcript and generates a summary. The team **agonized over summary length** — 3 sentences vs. 5–7.
- Audience poll splits; the real answer is **neither**. Users don't care about summaries — they care about **action items**: "what are the tasks I need to do?"
- Most corporate meeting summaries are the same ("person A says something, person B disagrees, everyone else is silent, nothing gets done"). The fix: summarize **action items, personalized per attendee**.

### 3.2 Example B — LinkedIn candidate-assessment chatbot
- After a job posting, a candidate asks the bot "am I a good fit for this job?" The team assumed users want an **accurate** fit/no-fit answer.
- But a blunt "you're a terrible fit" is discouraging and users stop using the bot. What users actually want is **a job**.
- The bot should give a **roadmap**: if not a fit, what are the gaps, what project/course would close them, and what other jobs might fit better — behaving like a **recommender system**, not a binary classifier.

### 3.3 Example C — TurboTax AI chatbot
- TurboTax (largest US tax app) built a chatbot to help file taxes. Internal tests were great (few hallucinations), but **very few users used it**.
- Audience guesses "privacy" — but she notes TurboTax already knows everything about you; privacy wasn't the issue.
- The two real issues: (1) people use a tax app precisely because they **don't know tax** — they don't even know what questions to ask (the "blank box" problem); (2) **users hate typing**.
- Fix: **pre-populated, clickable questions** users can click through — engagement increased a lot. (Shared by her friend, a VP of AI at TurboTax.)

### 3.4 The meta-lesson
- When building AI applications, the **technical part is rarely the hardest part** — the AI/database/scaling parts are well understood. The hardest part is **understanding how users interact with the app and how to collect feedback** — the human part.
- Bad news: hard to hire for, since AI is so new we don't yet know how users interact with it. Good news: because it's hard to automate understanding humans, we still need humans.

---

## 4. Anti-Pattern 3 — Starting Too Complex

### 4.1 The vector-database debate
- The first thing people reach for is **RAG** (retrieval-augmented generation), then argue endlessly about **which vector database is best**.
- In her experience, **swapping one vector database for another barely improves performance**. What improves performance is **how you process the data**.

### 4.2 Chunking and lost context
- Long documents (e.g. hundreds of thousands of tokens) don't fit the context window, so you **chunk** them.
- Failure mode: a document defines "from now on we'll use 'event' to refer to CraftCon," then the second half never says "CraftCon" — so a query about CraftCon won't retrieve that chunk.
- Fixes that preserve per-chunk context:
  - **Summarize the whole document and prepend the summary** to each chunk.
  - **Extract entities and tag chunks with metadata** so the chunk "knows" it's about CraftCon.
  - One company's biggest customer-support boost came from **converting documents into Q&A format** before storing, then matching incoming questions to stored questions.

### 4.3 Chasing new agent frameworks
- People keep swapping the old framework for the newest one; new frameworks introduce new bugs.
- Abstraction is good but should be **tested over time**. Going through popular tools like **LangChain** and **LlamaIndex**, she found **typos in their default prompts** — if someone later fixes a typo, your app's performance changes and you can't tell why. That causes major debugging headaches.

---

## 5. Anti-Pattern 4 — Foregoing Human Evaluation

### 5.1 Why evaluation is hard
- Classic tasks (spam / not-spam, content moderation) have **known, discrete outputs** — easy to score against ground truth.
- Open-ended tasks are hard: how do you know a **poem** is good, or that a **book summary** is good without reading the book yourself? The open-ended nature of AI outputs makes evaluation extremely hard.

### 5.2 Test-driven evaluation and why coding is popular
- She frames "**test-driven evaluation**": people gravitate to applications that are **easy to evaluate**.
- Recommender systems are popular partly because click-through / purchase rate is a clear signal.
- **Coding** is one of the most popular GenAI apps partly because engineers sympathize with the problem, but mainly because you **can evaluate the output**: does it compile? does it pass the unit tests? Tasks you can't evaluate (essays) get less investment — meaning some valuable applications go unbuilt just because they're hard to evaluate.

### 5.3 LLM-as-a-judge (AI-as-a-judge)
- For open-ended outputs with no unit tests, you use **another AI model** to score the first (e.g. Claude writes an essay, Gemini scores it — Gemini is the judge).
- Adoption: three years ago people said models weren't reliable enough; per LangChain, by late 2022/early 2023 it was ~80%+ of customers, and nowadays nearly **100%** for use cases lacking functional correctness.

### 5.4 Problems with AI judges
- The judge is itself an application (a model + a prompt with rubric and few-shot examples), so it's **non-deterministic** — the same input can score 3 once and 4 the next time. (Humans are inconsistent too — two human scorers, or the same scorer a month later, disagree.)
- **Decoupling of metric and application:** teams often use a judge built by someone else (PM/product team or an eval startup) and don't know its prompt. If the prompt changes, scores change invisibly. One team's accuracy jumped from 82% to 90% and they had **no idea** whether someone had changed the judge.

### 5.5 Mitigation — keep humans in the loop
- Pair AI judges with **human evaluation**: daily or weekly sampling, anywhere from ~30 to ~1,000 samples/day depending on resources.
- **Greg Brockman** (OpenAI president, former **Stripe** CTO, an original "10x engineer") — "**manual inspection of data has the highest ratio of value to prestige**" in ML tasks. Researchers avoid data wrangling as boring, but it's extremely valuable.

---

## 6. Anti-Pattern 5 — Overindexing on Early (Demo) Success

### 6.1 The demo trap
- GenAI makes it trivially easy to build a demo (hours to a weekend), which makes it very hard to estimate how long the **whole product** takes.
- Audience check: several built a fun GenAI app over a weekend; **none turned it into a product**.
- VPs/CIOs ask her how to do quarterly/milestone planning when ideas can take "a month to a year to never."

### 6.2 The 80 → 90 → 95% problem
- **Kovena** (a company she works with): 0→80% quickly in a month, then another month for 80→90%.
- **LinkedIn:** a month to 80% accuracy, then **four more months** to reach 95%.
- Sometimes, despite money and effort, a product **never crosses the threshold** to be useful enough to deploy. Demo ease is never a predictor of production ease.

---

## 7. Summary of the Five Anti-Patterns

1. Using GenAI when you don't need GenAI.
2. Confusing a bad product with bad AI (skipping user research, then blaming the model).
3. Starting too complex (vector-DB debates, agentic frameworks) when simpler data processing wins.
4. Foregoing human evaluation.
5. Overindexing on early success.

### 7.1 Closing advice for aspiring AI engineers
- Learning AI is a small part of the job. What matters: **rigorous engineering practices** — versioning prompts / treating **prompts as code**; being willing to **look at and inspect data**; being able to **build demos fast**; and being willing to do **web dev**.

---

## 8. Q&A

### Q1 — Many anti-pattern decisions come from management requirements. Advice for such teams?
- "Change the manager" (joking). Often companies have good engineers but leadership lacks strategy — some leaders don't even understand what ChatGPT is, leading to misguided decisions. Whether teams can push back depends on company culture and whether engineers have power over leadership decisions.

### Q2 — With LLM-as-a-judge depending on prompt, model, and examples, when is the evaluation pipeline "good enough"?
- It's **never** truly good enough — evaluation isn't build-once-and-done. Applications change, you get new users, and the external environment shifts (she gives a US political-climate example). Evaluation examples must keep changing; you have to stay grounded and track changes.

### Q3 — Best way to separate snake-oil sellers from real value?
- **Ask hard questions and demand real, specific examples** — "who did you really help?" Don't accept generic claims like "I worked with a lot of companies"; ask for one concrete example and walk through the challenges they faced.

### Q4 — Many engineers don't know these differences. Tips to make them learn?
- You can't make people learn anything — if they want to learn, they will. She jokes that as an engineer she's happy other engineers don't know this: "then it makes me more competitive... I get paid more."

### Q5 — (repeat of Q1 about management-driven anti-patterns)
- Already answered.

---

## 9. People & References Cited

- **Chip Huyen** — speaker; ex-Snorkel AI / NVIDIA (NeMo core dev); Stanford instructor; author of *Designing Machine Learning Systems* and *AI Engineering*; building an AI story-production studio (*Entanglements of Never End*).
- **Greg Brockman** — OpenAI president, former Stripe CTO; cited on manual data inspection's value.
- **John** — the host/MC who introduced her.
- Companies/products referenced: **booking.com** (recommender talk), **Amazon**, **Spotify**, **LinkedIn** (candidate-assessment chatbot), **TurboTax** (AI chatbot), **Kovena**, **Stripe**, **OpenAI**, **Anthropic (Claude)**, **Google (Gemini)**, **Llama**.
- Tools/frameworks: **NeMo**, **ChatGPT**, **LangChain**, **LlamaIndex**, vector databases, RAG.
- Concepts: foundation models, LLM-as-a-judge / AI-as-a-judge, RAG + chunking, PII guardrails, greedy/optimization algorithms, test-driven evaluation, the 10x-engineer meme.

---

*Video: https://www.youtube.com/watch?v=PKtR41eEVDU — Transcript via yt-transcript.sh; outline generated from the transcript.*
