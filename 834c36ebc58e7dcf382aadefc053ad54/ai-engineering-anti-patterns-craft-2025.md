---
title: "AI Engineering Anti-Patterns — Chip Huyen"
date: "2025-06-04T00:00:00.000Z"
description: "Common anti-patterns in AI engineering from Chip Huyen at Craft Conference 2025."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# AI Engineering Anti-Patterns — Chip Huyen

## Speaker Background
- Former Snorkel AI / NVIDIA (core developer on NeMo generative AI framework)
- Founded an AI infrastructure startup
- Taught ML Systems Design at Stanford
- Author: *Designing Machine Learning Systems* (2022, Amazon bestseller, 10+ language translations)
- Author: *AI Engineering* (most-read book on O'Reilly platform since launch)
- Currently building an AI-powered story production studio (*Entanglements of Never End*)

---

## Part 1 — ML Engineering vs. AI Engineering

### Traditional ML Engineering
- Build models from scratch (spam detection, fraud detection, recommender systems)
- Requires deep ML theory knowledge: gradient descent, overfitting/underfitting
- Model is the core artifact; data collection and training are prerequisites
- Deployed as a feature embedded within an existing product (e.g., Spotify recommendations, bank fraud detection)

### AI Engineering
- Build **applications on top of foundation models** (GPT, Claude, Gemini, etc.)
- Foundation model = broader term than LLM; encompasses multi-modal inputs (text, image, video, audio)
- **Reversed development flow**: Idea → Prototype → Data collection → (optionally) Fine-tune
- Can deploy a standalone app without a parent product
- Lower barrier to entry — ML theory not a hard prerequisite
- Competitive moat shifts to **product sense** and **proprietary data**, not model ownership

### The Relationship Between Both
- Not either/or — most real-world GenAI systems are a **combination**
- Ratio shifting: used to be ~50/50, now often 70–90% AI engineering
- Example: Customer support chatbot architecture
  - **Input classifier** (traditional ML): Is the request appropriate? Is it answerable by FAQ?
  - **Foundation model call** (AI engineering): Generate a contextual response
  - **Output classifier** (traditional ML): Does the response contain PII or sensitive data?
- AI is becoming part of the standard software engineering toolkit, like databases or JavaScript

---

## Part 2 — Anti-Patterns

### Anti-Pattern 1: Using GenAI When You Don't Need It
- **Example**: Startup pitching GenAI to reduce customer electricity bills by 30%
- **The problem**: Classic optimization problems (scheduling high-intensity tasks during off-peak hours) are solvable with greedy algorithms or classical automation — faster, cheaper, and more reliable
- **Key question to ask**: Could a simpler algorithm solve this? What's the baseline?
- GenAI adds value when the problem is inherently open-ended or language-driven, not when deterministic logic suffices

### Anti-Pattern 2: Confusing Bad Product with Bad AI
Three real-world examples where the bottleneck was product design, not model quality:

#### Example A — Meeting Summarization (Otter.ai / similar)
- Initial assumption: Users want summaries; debate was over length (3 sentences vs. 5–7)
- Reality: Users don't care about summaries — they want **per-person action items**
- Fix: Model output was restructured to extract individualized next steps per attendee

#### Example B — LinkedIn Candidate Assessment Chatbot
- Initial assumption: Users want accurate fit/no-fit judgments
- Reality: Blunt rejection is discouraging; users want a **roadmap**
  - Gap analysis: What skills are missing?
  - Course/project recommendations
  - Alternative job suggestions
- The chatbot should behave more like a **recommender system** than a binary classifier

#### Example C — TurboTax AI Chatbot
- Initial assumption: Users avoid the bot due to privacy concerns
- Reality: Two different problems
  1. Users don't know enough about tax to even formulate questions (blank-box problem)
  2. Users hate typing
- Fix: Replaced open-ended chat with **pre-populated clickable questions** — dramatically increased engagement
- **Takeaway**: The technical part is rarely the hardest part; **understanding how users interact with the product** is

### Anti-Pattern 3: Starting Too Complex
- Companies get stuck debating which **vector database** to use (Pinecone vs. Weaviate vs. Chroma etc.)
- In practice, switching vector databases yields minimal performance gain
- **What actually moves the needle in RAG**: Data preprocessing quality
  - Chunking strategy — naïve splits break semantic continuity
  - Prepending summaries or extracted entities to chunks to preserve context across boundaries
  - Converting documents to **Q&A format** before indexing (high-impact, low-glamour)
- Similarly, chasing new agent frameworks (LangChain, LlamaIndex, etc.) introduces risk:
  - Abstraction layers contain bugs (including typo-riddled default prompts)
  - A silent prompt fix in a dependency can silently change your app's behavior
  - Makes debugging regressions very hard

### Anti-Pattern 4: Foregoing Human Evaluation
- **Why evaluation is hard**: GenAI outputs are open-ended — no ground truth for poems, summaries, or essays
- **LLM-as-Judge** is now nearly universal for open-ended tasks (vs. coding with functional correctness)
  - Use one model (e.g., Gemini) to score outputs of another (e.g., Claude)
  - Prompt the judge with rubric + few-shot examples
- **Limitations of LLM-as-Judge**:
  - Non-deterministic: same input can score 3 today, 4 tomorrow
  - Prompt drift: if the judge prompt changes (especially via a third-party eval tool), scores shift invisibly
  - Scores become meaningless without knowing whether the judge itself changed
- **Mitigation**: Always pair AI judges with **human evaluation**
  - Daily or weekly sampling (30 to 1,000 samples depending on scale)
  - Human review grounds the signal and catches distribution shifts
- Greg Brockman (OpenAI president, former Stripe CTO) quote: **manual data inspection has the highest value-to-prestige ratio** in ML work — engineers undervalue it because it feels unglamorous

### Anti-Pattern 5: Overindexing on Early Demo Success
- GenAI makes it trivially easy to build impressive demos (hours to a weekend)
- This creates a dangerous illusion about how long production deployment takes
- **The 80/90/95% problem**:
  - Kovvena: 0→80% accuracy in 1 month; 80→90% took another full month
  - LinkedIn: 0→80% in 1 month; 80→95% took 4 more months
  - Some products never cross the threshold required for production viability
- Makes **quarterly planning and milestone estimation nearly impossible**
- Rule: demo complexity is **not** a predictor of production complexity

---

## Summary of Anti-Patterns

| # | Anti-Pattern | Core Failure |
|---|---|---|
| 1 | Using GenAI when unnecessary | Technology selection bias |
| 2 | Confusing bad product with bad AI | Insufficient user research |
| 3 | Starting too complex | Over-engineering infrastructure |
| 4 | Foregoing human evaluation | Over-trusting automated metrics |
| 5 | Overindexing on early demo success | Misestimating delivery timelines |

---

## Closing Advice for Aspiring AI Engineers
- **Learning AI models is a small part** of the job
- Skills that matter most:
  - Rigorous engineering practices (version control for prompts, treat prompts as code)
  - Ability to inspect and wrangle data manually
  - Web dev proficiency — build demos fast to validate ideas before committing
  - Product sense — understanding what users actually need
- **Evaluation pipeline is never "done"** — user behavior and environment evolve continuously
- Coding is the most popular GenAI application because **it's one of the few tasks with objective evaluation** (compilation + unit tests) — a signal that teams should design applications around measurable outcomes where possible

---

## Q&A Highlights
- **On management anti-patterns**: Engineering culture must have power to push back on misguided leadership; hard to mandate without cultural buy-in
- **On eval pipelines**: Never "good enough" — must evolve as user base and external context shift
- **On identifying snake oil**: Demand specific, named examples with real challenges; reject vague generalities
- **On getting engineers to learn**: You can't force it — intrinsic motivation is the only reliable driver