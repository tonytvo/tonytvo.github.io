---
title: "Transforming Education: Applying AI to Universities - Zach Pendleton | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Zach Pendleton (chief architect, Instructure/Canvas) on bringing AI to education — the teacher burnout + ChatGPT-cheating crisis, why AI detection and banning fail, building trust via smart-search embeddings (with quantization math) and AI nutrition-facts labels, saving teacher time (rubric authoring, the Ignite agent + an 800-endpoint tool-filtering pipeline), and shifting education from access to outcomes, plus a detailed Q&A."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Transforming Education: Applying AI to Universities - Zach Pendleton (Talk Outline)

> A Craft 2025 (Budapest) talk by **Zach Pendleton**, chief architect of **Instructure** (makers of **Canvas**), with 10+ years in education technology, having scaled an engineering org from 1 to 100+ engineers across legacy and greenfield projects. His research areas: large language models, digital credentialing, and edge computing. Arc: the teacher crisis (burnout + ChatGPT cheating) → why banning/detecting AI fails → a strategy of **trust first, then time savings, then student outcomes** → the technical implementations (smart search embeddings, AI nutrition labels, rubric automation, the Ignite agent + tool-filtering pipeline) → a reframing of 2,000 years of ed-tech from *access* to *outcomes* → Q&A.

---

## 1. Framing & Context

### 1.1 Audience & company
- Polls the room: mostly software engineers, one product manager ("I'll try to do something for you").
- Instructure builds **Canvas**, used worldwide (including at **ELTE** in Budapest), founded **2008**, deployed in **seven regions on AWS**; **over half of US universities** use it.

### 1.2 Teachers are in trouble
- Teachers historically work a lot, aren't paid much, and do it because they love it.
- **COVID-19 (2020):** teachers suddenly had to reach students they couldn't be in a room with and completely change content delivery.
- Canvas traffic **almost doubled overnight in March 2020**; they scaled because they were cloud-built on AWS — "schools can't just add more teachers."
- **~80% of primary/secondary educators** have considered quitting since 2020.

### 1.3 The supply/demand squeeze
- Education's reach is broadening, so more teachers are needed.
- **UNESCO: 70 million new teachers needed by 2030** to meet global need — while existing teachers are burned out.

### 1.4 Then ChatGPT (Nov 30, 2022)
- Arrived just as everyone was leaving the pandemic feeling good.
- Conference sessions treat AI positively (better engineers, better apps), but teachers had the opposite experience: **overnight every student could cheat almost perfectly** on written assignments, quizzes, and previously cheat-proof assessments.
- Teachers' initial reaction: **get AI out of the classroom.** Pendleton spent most of 2023 in conversations that began "How do I get AI out of my campus?"

---

## 2. Why the First Reactions Failed

### 2.1 AI detection doesn't work
- Vendors claimed **90–95%** detection accuracy (blind-tested by a university, published in a paper).
- Reality: most tools were **at best 50% accurate**, and worse if a student **changed one or two words**.

### 2.2 Banning doesn't work either
- Burned-out teachers with no time have to ban **computers** to enforce an AI ban → move to **paper and manual processes**.
- Anecdote: a professor scheduled **one hour one-on-one with every student** for each exam → **~30 lost hours** → more burnout → drives him away.

### 2.3 The reframe
- Don't ask how to keep AI *out*; ask how to **empower educators to use AI positively** — as a tool to improve outcomes, gain efficiency, and widen reach.

---

## 3. Instructure's Strategy: Trust → Time → Outcomes

### 3.1 Trust must come first
- Systems must be **explainable**, deliver **clear value**, be something teachers can **see/feel/interact with**, and preserve **student privacy** and **teacher autonomy**.
- Teachers "don't want to fight for student attention with a robot" — they want to stay in control of their classroom.

### 3.2 The "glue on pizza" cautionary tale (Google)
- After LLMs became popular, Google put **AI Overviews** at the top of search results.
- Someone asked "How much glue do I put on my pizza?" → the overview replied **"an eighth of a cup,"** claiming it improves cheese texture and keeps it from falling off.
- It blew up online (articles about hallucination); after the news cycle, asking again returned the **same wrong answer now cited to a "2024 Business Insider article"** — i.e., citing the news story about its own mistake.
- Lesson: funny for pizza, **damaging when students are trying to learn the truth**; be extra careful in domains the **EU AI Act** deems high-impact/high-risk.
- Implication: anchor AI to the **curriculum/existing good data** you already have.

---

## 4. Smart Search — The First (Non-Obvious) AI Feature

### 4.1 Why search, not a chatbot
- The first AI thing they shipped was **Smart Search** — "doesn't sound very AI," but uses **AI embeddings**.
- Chunk course content and index it the way an LLM would, capturing **relationships between concepts**.
- Example: "what did my teacher say about the violin?" can return results about **guitars or cellos** (all string instruments) — "that's how I think."

### 4.2 The real power — grounding partner LLMs
- Their APIs let partners take a student question, **fetch relevant course materials in real time**, and put them in the prompt to **steer the model toward truth** → reduces hallucination and respects what the teacher wants taught.

### 4.3 The implementation stack
- Chunk content → create embeddings via **Amazon Bedrock**.
- Store embeddings (lists of floats) in **Postgres** using the **pgvector** extension; generate an index and add to search.
- Chose Postgres to **move quickly** (no separate infrastructure), to run **joins** reusing existing **permissions models**, and to simplify lookups.

### 4.4 Quantization — the storage/accuracy trade-off
- Embeddings are **float32**, ~**1,000+ numbers** each → about **4 KB per embedding**.
- Quantize to **8-bit integers** → **75% size reduction**.
- Quantize aggressively to **individual bits** → **~128 bytes** per embedding.

### 4.5 The concrete scale numbers
- Teachers created ~**512 million HTML pages** of content last year.
- Each page ≈ **900–1,000 tokens** → **2–3 chunks (embeddings) per page**.
- Original floats: ~**5+ terabytes** of extra Postgres data.
- Integer-quantized: ~**1.3 TB**.
- Binary embeddings: ~**164 GB** — huge savings.
- Bonus: binary lets you switch from **cosine similarity** to **Hamming distance** (bit differences) → faster searches.

### 4.6 The accuracy cost
- Integer quantization: **~96% accuracy** vs. original floats — "save 75%+ on storage for a 4% hit, I'll take that bet."
- Binary: **just under 90%** — they decided **not** to go that far, but it's compelling depending on load/use case/risk tolerance.

---

## 5. Building Trust Beyond Technology

### 5.1 AI nutrition-facts labels
- Like food nutrition labels (fat, protein, salt, sugar), they publish **AI nutrition-facts labels** for every AI feature.
- Essentially a **model card** presented in a format customers are comfortable with, so they feel informed and in the know.
- Contents: **which model**, **which regions** it's hosted in, **what data goes in**, **how data is used**, **what comes out**.

### 5.2 Feature flags for AI control
- Reused their existing **deploy feature-flagging** system to toggle AI features on/off.
- Solved the spectrum of schools (excited / needing it / still wanting to ban it) cleanly, with **no extra work** — they couldn't just release to everyone.

### 5.3 Regional access challenges
- Providers like **OpenAI / Anthropic** are hosted in the **US**; many **European** (and Asian) customers can't tolerate data leaving region.
- Even via **Amazon Bedrock**, model footprints aren't widely deployed by region.
- Solution: build features that work against **multiple models** and can **fail down to models by region** — extra work, "but a necessity right now."

---

## 6. Saving Teachers Time

### 6.1 The philosophy — don't start with a chatbot
- Get teachers over their fear by making their lives easier and giving them time back to figure out post-AI education.
- Recommendation: **don't start with a chatbot/summary** or stock features — target the workflows **users hate** or where they **spend a lot of time**, and cut steps.

### 6.2 Rubric authoring — the worked example
- Rubrics improve **grading fairness, shared requirements, and equity** — but only **30% of educators** used them because they're a pain.
- The pain: write an assignment description, then re-encode that same knowledge as a **list of learning outcomes**, assign points, and share — **the same knowledge captured twice**.
- Automation: feed the assignment description to an LLM → break into **learning outcomes** → **prefill the existing UI form** row by row so teachers just adjust and submit.

### 6.3 The Ignite agent
- An **agentic teaching assistant**, releasing **this summer** ("don't spoil our surprise").
- Slides out anywhere in the LMS; connects to existing APIs to **query, generate content, write content back**, and **take action on behalf of the user**.

---

## 7. The 800-Endpoint Problem and the Tool-Filtering Pipeline

### 7.1 Open APIs made agents feasible
- Canvas has **800+ API endpoints**; being **API-first/open** — "true in the age of AI" — let them start on agentic workflows quickly, just as good data sped up search.

### 7.2 The cost of naively dumping 800 tools
- LLM call with **no tool definitions**: ~**20 tokens**, ~**3 seconds**, a tiny fraction of a dollar.
- Same request with **all 800 endpoints** as tools: ~**21 seconds**, **165,000 tokens**, and **~$0.50 per request** — *before the model does anything*. "Not tenable."

### 7.3 The bad UX to avoid
- Users must not have **one chatbot for assignments, another for discussion forums, another for messaging students** — worse than stock HTML forms.
- Need to get the **right tools** in front of the user at the moment of need.

### 7.4 The pipeline steps
- **Step 1 — classify:** a **very small LLM** answers yes/no to "does this request require a tool?"; if **no**, just generate content and return.
- **Step 2 — tool classes:** if yes, map the request to **tool classes** (e.g., users, assignments) to quickly get candidate tool types.
- **Step 3 — plan:** ask the LLM to generate a **step-by-step plan**, because most real requests don't map to one endpoint.
  - Example: "give Zach an extra week on his assignment" → list users → find the right one → list assignments → find the right one → create the due-date extension (**3+ steps**).
- **Step 4 — map to tools:** use **search** (same embedding search) to fetch tools for the plan; also throw in **frequently used tools** from those groups if there's query space, for extra coverage.
- **Step 5 — execute** if all works.

### 7.5 Confirmation for destructive/write actions
- Risk: "the AI deleted their homework" is not a fun support call.
- Every **destructive/write-back action** carries **metadata** flagging it needs confirmation.
- Flow: chatbot requests a tool use → UI shows a **confirmation** → if confirmed, run the tool and send the result back to the LLM (the LLM "doesn't realize anything happened in the middle"); if aborted, refuse the call, adjust chat history, and continue.

### 7.6 On MCP
- They're layering **Model Context Protocol** on top; it's an exciting spec that enables this at scale.
- Caveat: **MCP solves none of the above problems** — it just standardizes listing/calling tools, and actually **increases** the need for tool filtering as you add third-party MCP servers.

---

## 8. Improving Student Outcomes

### 8.1 A history of educational technology (from ~1400s)
- **Slate:** easier for teachers to work with multiple students and for students to make mistakes.
- **Chalkboard:** created before 1800, but reached the US only in **1801** (US was slow); let a teacher demonstrate to the whole class at once, dramatically expanding reach.
- **Books, radio, film, television, personal computing, the internet:** each expanded reach — the internet a "huge step function" in access.
- Thesis: the **first ~2,000 years of ed-tech were about equity of access** — printing, writing, broadcasting, translating.

### 8.2 What access never guaranteed
- It didn't guarantee the recipient knew what to do with the content.
- If you had a **learning disability** that made reading a whole textbook hard, "education wasn't for me last century."

### 8.3 New tech moves faster
- Chalkboards took ~100 years to reach the US; **ChatGPT had hundreds of millions of users within a week**, because new tech builds on every prior wave.

### 8.4 The shift: access → outcomes
- AI transforms education from **access** to **outcomes**: the right content, in the **right format, at the right time, with the right affordances** for the highest chance of success.

### 8.5 Planning & personalized journeys (Richie's demo)
- A demo (built by **Richie**, present in the room) breaks school content into **skills/learning deliverables**, then lets a student click through to see which courses give the skills they want.
- The future need not be bound to **four-year degrees** — it can be individual outcomes, learning journeys, and interests.

### 8.6 Do we still need teachers? (Yes)
- **Reliability:** LLMs aren't fully reliable; hallucination may never be fully removed with current architectures, so vetted content to **anchor at prompt time** matters.
- **Motivation:** self-directed learners are highly motivated, successful students — **not most students**, who need **guidance, help learning how to learn, support, and affordances** teachers provide better than LLMs.

### 8.7 Content repackaging — NotebookLM
- Customers integrate **Google NotebookLM** with the LMS; it reformats course content into a **chat** (immediate answers, clarification) and — his favorite — into a **podcast** the student can listen to (e.g., on the bus).
- A beta feature lets you **interrupt the podcast** ("we have a caller…"), ask a question, get an answer, then the podcast returns to its outline.

### 8.8 Rethinking assessment
- Educators hated AI because it "broke all their tests" — but **nobody loves multiple-choice tests**; they're just the **cheapest/fastest**, not the best.
- AI can turn a quiz into a **voice conversation**: the AI asks about what was learned, asks for clarification, then **maps answers back into scores** — more engaging for students, grading help for teachers.

### 8.9 The decentralized-innovation future
- The next big thing needn't come from "rooms full of software engineers" — it can start with an **educator partnering with an LLM**, then lean on Instructure to scale it safely and widely.
- Personal upside: people rely on him less, he focuses on what he's passionate/expert in, and the boring parts get done by someone else.

---

## 9. Q&A

### 9.1 Q1 — Which models for embeddings and agentic planning?
- Embeddings: the **Cohere** family (the **multilingual** model — ask in Spanish ("trampa"), get English results about cheating).
- Agent: **Anthropic Claude** models — good for **stepping down by regional availability** (e.g., the newly released 4, or 3.7/3.5 depending on what's available).

### 9.2 Q2 — Tools to address AI cheating; which assignments prevent it?
- AI detection **does not work.**
- What works: **honest, open conversations** — e.g., start the semester with three groups (AI-only, no-AI, free choice), **blind peer review**, then a discussion to **co-build the class AI policy.**
- Assignment types: **project-based work**; like a calculator freed us to teach calculus, AI should push us to **raise assignment complexity**.

### 9.3 Q3 — How to bring AI closer to teachers who are averse/hiding it?
- His approach: spent **100 days sleeping in hotel rooms** last year visiting schools worldwide — "does not scale."
- Half-joking: if everyone commits to 100 hotel days this year, we'd get somewhere; ultimately "it just requires education." A genuinely difficult problem.

### 9.4 Q4 — More on integrating the agentic models with existing APIs?
- APIs are traditional **REST**, acting on individual resources (a CRUD set).
- The plan maps to individual API calls executed **in sequence**, feeding **each call's outputs into the next call's inputs**.
- The model holds the plan in history, fills the previous outputs in as the next call's **function arguments automatically**, and runs the chain.

### 9.5 Q5 — What skills should we teach students to critically evaluate AI?
- Recent **Anthropic** research on student AI use (via **Bloom's taxonomy**): students use AI almost exclusively for **content generation** and **critical thinking** — critical thinking being "a real problem."
- Students need experience to learn what AI is/isn't good at, and more complex tasks/opportunities.
- Glimmer of hope by discipline: **engineering, math, CS** students have more **open-ended, collaborative** conversations (vs. "just give me the answer"), likely because they adopted AI sooner; hope other disciplines follow.

### 9.6 Q6 — Grading assist: how to prevent drift with new models or changed prompts?
- **Grade drift** exists even with humans: anecdote about a boss who was cranky before lunch, happy after — and teachers who grade the **first** assignment more generously than the **last**.
- For **model drift**: it comes down to your **data** — build a good **test set** to evaluate results as you change models/prompts; **augment** existing tests and use **probability-based testing**, or prompts become "a vibe-based nightmare where every engineer says 'I ran it once and it worked.'"

---

## People & References Cited

- **Zach Pendleton** — speaker; chief architect, Instructure.
- **Instructure / Canvas** — LMS; founded 2008; 7 AWS regions; 800+ API endpoints; used at ELTE Budapest and by >half of US universities.
- **Richie** — colleague present in the room; built the skills/learning-journey planning demo.
- **Companies/products:** Google (AI Overviews, NotebookLM), OpenAI, **Anthropic** (Claude models; student-use research), **Cohere** (multilingual embeddings), Amazon Web Services / **Amazon Bedrock**, Business Insider (miscited in the glue story).
- **Tech/concepts:** embeddings, **pgvector**/Postgres, quantization (float32 → int8 → binary), cosine similarity vs. **Hamming distance**, model cards / **AI nutrition-facts labels**, feature flags, **Model Context Protocol (MCP)**, REST/CRUD APIs, tool classification/planning pipeline, rubrics, the **Ignite agent**.
- **Frameworks/standards:** **EU AI Act** (high-impact/high-risk), **Bloom's taxonomy**, **UNESCO** (70M teachers by 2030).

---

*Video: https://www.youtube.com/watch?v=owhWhxXg9JI — Transcript via yt-transcript.sh; outline generated from the transcript.*
