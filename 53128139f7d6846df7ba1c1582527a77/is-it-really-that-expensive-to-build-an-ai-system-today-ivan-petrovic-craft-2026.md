---
title: "Is it really that expensive to build an AI system today? – Ivan Petrović | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Ivan Petrović breaks down the true cost of building AI systems — the four pillars (infrastructure, data, talent, maintenance), why token price falling hides scaling costs, a real media-monitoring case study with a build-vs-buy cost model, optimization via caching/batching/SLMs, AI-generated-code risks (200% more security vulns), and future factors (vendor lock-in, inference chips, agent-washing)."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Is it really that expensive to build an AI system today? – Ivan Petrović (Talk Outline)

> A Craft 2026 talk by **Ivan Petrović** (works at a company whose CTO pays the monthly OpenAI bill) answering "is it really expensive to build these AI solutions today?" — and, more importantly, leaving the audience with **questions to ask in their own companies**. Framing anecdote: a podcast guest called himself a **"token billionaire"** spending thousands of dollars daily on AI usage — then revealed **he works for OpenAI** (free tokens). Every cost claim is true **depending on which side you're on**: a **vendor** is happy for people to spend billions of tokens; a **company building on top** wants to minimize cost. Structure: the AI hype/history → the four cost pillars → each pillar in depth → a worked case study → build-vs-buy and adoption strategy → ROI expectations → future factors → closing → Q&A.

---

## 1. From ML Hype to AI Automation

- 10–15 years ago **machine learning** was the hype — classifying **cats and dogs**; the possibilities felt huge and people took it on.
- 5–10 years later ML delivered real value: **fraud detection, medicine, automotive/self-driving, classification**.
- Now AI opens a new frontier: **automate work/jobs**, replacing or **augmenting** people with AI agents. How much is actually possible today? "A question mark."
- **Gartner/McKinsey** studies conflict, but roughly **~30% of enterprise PoCs** proceed and **only a few percent survive outside the proof-of-concept**.
- **Hyperscalers** (AWS/Azure/GCP) invest heavily in infrastructure, driving GPU-rental cost down — but how much of that stays scalable?
- The trap: we derive the whole cost of AI solutions through **tokens** — "how many tokens = how expensive." True only for the **latest (most expensive) models** (e.g., **$20 per million tokens** × volume = a substantial sum) — and that ignores **GPUs, resiliency, databases, and talent**.

---

## 2. The Four Cost Pillars

- No matter what you build (chatbots, RAG, knowledge graphs), cost flows into four ever-present pillars:
  - **Infrastructure** — hosts everything.
  - **Data** — what you build the system with.
  - **Talent** — the people who build it.
  - **Maintenance** — keeping it running in production.

---

## 3. Infrastructure

### 3.1 Tokens get cheaper — but new models cost more
- Each new model drops the previous version's price: **GPT-3.5 was ~$20/M tokens two years ago; now ~7 cents/M**.
- But the model available in **2 years** will again cost **more than $20/M** — so there's always a premium-model cost to be aware of.

### 3.2 GPUs are cheaper per instance, but scaling compounds cost
- Renting an **H100/A100** instance on AWS to host an LLM is cheap now vs. a year or two ago.
- But you can only fit **one model serving a certain number of users** per GPU; to scale you rent **more GPUs**.
- Contrast with 5 years ago: a **BERT/transformer under 1 GB** GPU memory on one machine could serve **hundreds** of users; now one GPU hosting Llama/Gemma can't serve 1,000 users — you need **multiple instances**. So hardware looks cheap in the PoC/prototype, but **cost compounds when you scale**.

### 3.3 Why hyperscalers keep building data centers
- New models are **bigger** (more GPU memory), so a fixed rack doesn't "scale" the story — building more just lets them **serve a similar number of users** with newer, larger models.
- The big challenge: how do hyperscalers accommodate **new models AND more users**?
- Reliability aside: when **Claude goes down**, for some it's "end of my day," but engineers "pull up our sleeves and work the old-fashioned way" — with its own price.

---

## 4. Data

- ML brought the age of **big data** and the need to utilize company information to build products.
- **RAG** systems are "a giant knowledge base of your company's documentation" — but getting knowledge **into** that database (transforming/pre-processing from source) is where **60–80% of the build time** goes.
- Same as the ML age: **garbage in, garbage out** — you need good-quality data.
- People now rely on LLMs (Gemma, Qwen) to process **scraped data** full of ads/JavaScript/page content and classify what's needed — works "to some extent, not always."
- The hype starts at the **prototype/PoC** (exciting results), then **scaling** hits: wrong data formats through pipelines, not enough good **parsers**, not enough **connectors**.
- **Connector caveat:** SharePoint/Atlassian etc. build connectors, but that's just **another API with guardrails you don't control** — Atlassian controls what's on their system and gives you the data they choose; it's not in your memory/control. This makes full solutions **less attractive to invest in**.

---

## 5. Talent

- AI is available to everyone (a CTO choosing tech, a parent diagnosing a sick kid) — but it still **boils down to people who build it**.
- Ways to staff an AI build:
  - **Upskill** internal developers (paid courses, teach AI tools/systems).
  - **Hire externally** (expensive).
  - **Freelancers** as augmented team members.
  - **Agencies/consultants** to strategize and build.
  - **Outsourcing** an end-to-end solution via a service company.
- "But at what cost?" — presented later.

### 5.1 AI enablement and the J-curve
- Building with **Copilot / Claude Code / Codex** to ship faster follows the **J-curve** from engineering-effectiveness surveys: hype → drawdown ("nothing is possible") → stabilization. "Right now we're in the deep hole."
- His view: agentic tools work best on **greenfield** (no dependencies, boilerplate, small chunks); for **enterprise systems** with 10,000 files / hundreds of repos you **can't ingest everything into memory**.
- Personal example: not a front-end engineer, he used **Claude Code** to build a front-end visualization tool — fine to share with a few teammates, but when debugging it **went into the NPM packages and changed the library itself**. Without guardrails/harnesses, and **not being a domain expert**, he can't **trust** the solution — so he uses it only for himself, doesn't deploy it. Trust was high at first, dropped, and he hopes it rises as model maturity improves.

---

## 6. Maintenance

- If you hire external people to build it, **who maintains it when they leave?**
- **Predictable costs:** API tokens, salaries, compute/infrastructure.
- **Unpredictable costs:** how many **bugs** AI-generated code introduces if not properly verified.
- **Faros AI study** (survey of ~**20,000** engineers given AI tools): they generated **more code**, but created **>200% more security vulnerabilities**, plus more **code churn** and **duplicated code** — things that don't happen as easily when a human writes the code.
- The pressure ("done yesterday, 10× faster than last year") pushes "agents to the rescue," which may work for greenfield but "doesn't pay off in the long run."

---

## 7. Case Study — Media & Entertainment Monitoring

### 7.1 The company and problem
- A **media/entertainment** company collects worldwide info from **news articles, social media, scanned newspapers**, ingests it, and has **humans** do labeling — extracting entities, **sentiment and aspect** around tracked products — stored for **analysts to build reports**.
- Example: as **Samsung**, scrape all articles mentioning a new phone model and build sentiment/competitor reports.
- Goal: **replace much of the human labeling with AI**, but **retain some humans to validate** (humans-in-the-loop are required for the system to make sense; **hallucinations are a "feature"** you must control).

### 7.2 Constraints
- **Managed API only** on **GCP** (a requirement) — no custom self-hosted models, because they **lack engineers to maintain** them and hope API-only reduces the need for **DevOps** engineers.

### 7.3 The numbers/assumptions
- ~**60,000 documents/day** ingested; ~**48,000 relevant** to their portfolio; document count effectively increases because **one article can be tagged for multiple customers**.
- Assumptions: **~35,000 input tokens**, **~3,000 output tokens** per doc (from the PoC); use **caching**; GCP, **API-only**.

### 7.4 The cost model (build-vs-buy shock)
- Their **current human spend: ~$1M/year**.
- On **API calls alone**, several models exceed that yearly (e.g., Anthropic **Sonnet** ~**2×+** the cost).
- They'd wanted **Gemini 2.5 Pro** to start; seeing the diagram, they said **"cut the cost — start with optimization"** (even though optimizing at the very start is normally bad practice).

### 7.5 Optimization
- **Caching:** the pipeline (an ETL) sends lots of the **same information** (ontology/internal data constant across a run; only small prompt parts change). Assumed a **3× reduction**, actual **~20–50%** — still drastic. Caching only works on **big-lab models on GCP/AWS**, not Llama-type models there.
- **Replace pipeline steps with ML over time:** e.g., **sentiment analysis** is largely solved; phase 1 does the work **and collects training data** so **SLMs (small language models)** can be trained later for lower cost/higher confidence.
- **Batching:** not applicable here (they need results **today**), but useful when data can be ready in **24 hours**.
- **Prompt-weight tuning:** input dropped from ~**39k → ~25k** tokens (output ~3k → ~2.5k) — at billions of tokens/day, that compounds massively.

---

## 8. Build vs. Buy, and Adoption Strategy

### 8.1 Build vs. buy
- If an **off-the-shelf** solution meets almost all your needs, **buy it** — often more successful than building.
- But it **depends on your needs, data, and market**; if you have strong **internal data and capabilities**, building can be far better.

### 8.2 AI adoption comes both ways
- Historically new-tool info came **bottom-up** from engineers and got **cut by upper management**.
- Now AI is in the hands of **managers, C-level, sales, marketing** too — so success needs an **aligned strategy**: **lead by example from the top**, propagated to front-line engineers.
- **Data quality:** "you can't become an AI company by just paying for a ChatGPT subscription" — without data and good connectors you can only "summarize emails / write a polite email."
- **Value prioritization + human capital:** know the **end business goal**; a solution constrained internally with no value has **no ROI**. AI "for the name" or to inflate valuation is fine if that's the goal — but a real solution needs diligent planning aligned to the business goal.

---

## 9. ROI Expectations

- Some companies claim value in **under a year**; usually it's more.
- His case study's ROI is **4 years** (full financial analysis: payback in **2028**, from 2026) — "not overnight."
- Many "we did a PoC" stories stall — "why isn't it in production?" "expensive / no talent" — which says a lot about **company readiness**: if you can start a PoC but can't scale it, consultants can help build, but you must **hire people to maintain** it meanwhile.

---

## 10. The Future (Not Bleak)

- **Token cost keeps falling** (as GPT-3.5 did) across models — but **new models bring new capabilities** (and sometimes a new model shows **less** capability on some problems — "systems get dumber to some extent," referencing a just-released Anthropic model).
- **Vendor lock-in** (both directions): give your team Claude Code, they learn skills/terminology/the Anthropic ecosystem; if Anthropic **triples the seat price**, switching to Codex/Cursor/local models **takes time**. Strategically, companies should have people who've tried **A/B/C/D** so they can **switch tracks quickly** when prices rise (they will).
- **Cost of inference:** Nvidia GPUs are built for training **and** inference, but are **underutilized/expensive on the inference side**; dedicated **inference chips** (d-Matrix, Cerebras, Groq, etc.) host already-built models cheaply — the question is **when hyperscalers offer them and at what price**.

---

## 11. Closing Notes

- Everything on the tech side has a **cost**; token price is down, but the **system still costs**.
- We're moving from **simple software engineering to data-driven application development**.
- **Governance** adds cost (not as present 5–10 years ago): **SOC evaluation, GDPR**, plus AI's own regulation — done yearly.
- Businesses need a **clear picture of what to build and the goal**.
- Beware **"agent-washing"** — "every second AI news article has *agentic* in it," but only a fraction of self-proclaimed agentic companies succeed.
- Ultimately **humans/builders must engage** — be ready to **learn and adapt** to the new market.

---

## 12. Q&A

### 12.1 Q1 — Which LLM did you end up using? (OpenAI OSS looked like a fraction of the price.)
- OpenAI OSS was cheap **but not good enough** for the use case. They ended up with a **hybrid**: **Gemini 2.5 Pro** for complex orchestration tasks, and **Gemini Flash** for most tasks.

### 12.2 Q2 — How did you compare LLM quality vs. the (now unemployed) human annotators?
- The annotators are **still not unemployed**. They built the **end-to-end pipeline** to serve humans for **verification**: it runs **overnight**, and in the morning people **validate** the results — humans-in-the-loop serve as the system's **evaluator**.

---

## People & References Cited

- **Ivan Petrović** — speaker.
- **The "token billionaire"** — an OpenAI employee (podcast anecdote).
- **Faros AI** — the ~20,000-engineer study (200% more security vulnerabilities from AI-generated code).
- **Companies/models:** OpenAI (GPT-3.5, OSS), Anthropic (Claude/Sonnet, Claude Code), Google (Gemini 2.5 Pro, Gemini Flash, Gemma), Qwen, Llama, BERT, GCP/AWS/Azure, Nvidia (H100/A100), d-Matrix, Cerebras, Groq, SharePoint, Atlassian, Copilot, Codex, Cursor, Samsung (report example).
- **Gartner, McKinsey** — PoC survival studies.
- **Concepts:** four cost pillars (infrastructure/data/talent/maintenance), token-price decline vs. scaling cost, RAG, garbage-in/garbage-out, connectors/guardrails, J-curve of AI enablement, greenfield vs. enterprise, caching / batching / SLMs, prompt-weight tuning, build vs. buy, top-down + bottom-up adoption, ROI horizon, vendor lock-in, inference chips, governance (SOC/GDPR), agent-washing, humans-in-the-loop as evaluator.

---

*Video: https://www.youtube.com/watch?v=APtnkVvYt6Q — Transcript via yt-transcript.sh; outline generated from the transcript.*
