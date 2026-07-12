---
title: "From Templates to Conversations: Automating Support in Fintech – Balázs Csintalan | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "How Wise's Assistant team climbed a 'mountain' from simple templates (~5% automation) to personalized LLM messages to full multi-turn conversations (~50%) toward autonomous agents — split into a partner engine vs. reusable domain 'ingredients' (customer context, knowledge, skills, input/output guardrails), then swapped the engine for an in-house TypeScript/Mastra/Vercel-AI-SDK build, with observability, simulation, and evals to move safely and fast."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# From Templates to Conversations: Automating Support in Fintech – Balázs Csintalan (Talk Outline)

> A Craft 2026 talk by **Balázs Csintalan** of the **Wise Assistant** team (a small cross-functional team) on automating customer support at scale — *faster, cheaper, without compromising quality*. Wise is a fintech "building the best way to manage and move the world's money with the lowest fees possible," with **nearly 19 million customers** contacting support **hundreds of thousands of times per month** (chat, email, phone). The talk uses a recurring **mountain-climbing metaphor** for the journey: templates → personalized messages → conversations → (aspirationally, still misty at the summit) fully autonomous agents. (The MC's closing line misnames the speaker "Balázs Némethi"; the session is credited to Balázs Csintalan.)

---

## 1. The Problem: Support Doesn't Scale

### 1.1 The scale of contacts
- Nearly 19M customers; most come because they heard Wise is a great product.
- Even so, things sometimes go wrong — questions or a need for help.
- That drives **hundreds of thousands of support contacts every month** across chat, email, phone.

### 1.2 Why hiring doesn't solve it
- You can't hire 100,000 support agents.
- You can't find people who juggle **20 chats at once** — "a bit unrealistic."
- Support doesn't scale well, **especially with a growing user base**: more contacts → more people → the challenge of keeping **quality consistent** across that many people.

### 1.3 The team and its goal
- Speaker works in the **Wise Assistant team** — small, cross-functional.
- Goal: **automate customer support at scale, faster and cheaper, without compromising quality**.
- A relatively new team that deliberately did **not** try to build the perfect solution over years with nothing to show — they **started simple**.

---

## 2. Understanding Why Customers Contact Support

### 2.1 Contacts as boxes/categories
- Each visual "box" represents hundreds of contacts; contacts cluster into categories.

### 2.2 Category — Transfers (the biggest)
- Transferring money abroad is stressful, especially the first time (different currencies, time zones, countries).
- Naturally the **largest contact category**.
- Example question: "How long will my transfer take?"

### 2.3 Category — Cards
- Wise provides cards.
- Example question: "How can I order a card or a replacement card?"

### 2.4 Category — Local account details
- Wise provides **local account details** (e.g., in Hungary) so you can receive money like a local.
- Example question: "How can I get local account details?"

### 2.5 Category — Verification
- A very difficult topic — each country has different requirements and documents.
- Example question: "What document can I use to verify my address?"

### 2.6 The long tail
- Many other categories plus a **long tail of niche questions** (not enumerated).

### 2.7 Subgroups within a category
- Each category has subgroups — e.g., within Transfers: **fee questions**, **timing questions**, and a big anxious subgroup asking **"Where is my money?"**

### 2.8 The "Where is my money?" case
- Common situation: Wise (TransferWise) **already sent the money**, but the **banks still need time to process it**.
- Human agents almost always say the same thing: "We have checked your transfer, and the money was successfully sent by TransferWise. Transfers can take up to **two working days** to arrive, so please wait a little longer."
- That near-identical answer goes out **thousands of times per month**, and an individual agent works each one — **not efficient**.

---

## 3. Step 1 — Templates

### 3.1 The idea
- Detect these repeated questions on the fly and send the **same template** agents already send.
- Impact: could save **thousands of agent-hours**.

### 3.2 Tie to the mission
- Saving agent-hours lowers **operational costs**, which ties directly to Wise's mission of **keeping costs low for customers**.

### 3.3 What they built
- Understand what customers ask → categorize → automate the **simplest** questions with a template.
- Started with "Where is my money?", then added "How can I order a card?", "How can I find my account details?"

### 3.4 The result
- Reached **~5% automation** with just simple templates.

### 3.5 The ceiling
- Doesn't scale — **few questions can be answered for everyone with the same template**.
- **Lesson: a simple solution still delivers value** — for Wise it already saved thousands of agent-hours, so starting simple is worth it.

---

## 4. Step 2 — Personalized Messages (LLMs)

### 4.1 The vision / the mountain
- Messages should be **personalized**, have **context**, and sound written for that specific customer.
- The "elephant in the room" the whole conference discusses: use **LLMs** to generate personalized messages instead of picking from fixed templates.
- The mountain metaphor: base = templates → next step = personalized (single) messages → then conversations → summit = fully autonomous agents (still "a bit misty").

### 4.2 You can't let an LLM loose (regulated fintech)
- Wise handles people's money and takes the responsibility seriously.
- Non-exhaustive risks:
  - **Off-topic responses.**
  - **Over-committing** — e.g., can't promise everyone refunds.
  - **Leaking sensitive information.**
  - Avoiding the kind of failure "Gergő also mentioned in the morning."

### 4.3 Investing early in the review process
- Not just a technical challenge — needed to **align every stakeholder: security, compliance, privacy**.
- A **lengthy process**, but worth it because it **unlocked LLM use**.

### 4.4 Example — personalized vs. templated
- Personalized version: "Hey Sarah, I can see your transfer of **£500** to your bank was sent at **14:32**. It's now with the bank for processing. Most payments to banks arrive within **2 hours**. You'll get a notification as soon as it lands. Nothing else needed from your side."
- Same underlying logic as the template, but **personalized**, so the customer **feels heard** and accepts the answer better.

### 4.5 The ceiling — follow-ups
- Customer replies "Last time it was faster." — a reasonable follow-up.
- One-shot messages can't handle it → still goes to a human → **contact not automated**.
- **Lesson: personalization builds trust**, but one-shot messages only take you so far — you need real back-and-forth.

---

## 5. Step 3 — Conversations: Engine vs. Ingredients

### 5.1 Splitting the system into two sides
- **Left = the engine / platform side.**
- **Right = domain-specific ingredients.**

### 5.2 Engine components (platform side)
- **Conversational orchestrator** — handle conversation turns/messages start to finish.
- **Context management** — what goes into the context window and when.
- **Agent memory** — remembering previous messages/conversations when useful.
- **Knowledge management** — get the right piece of knowledge at the right time.
- **Tool support** — actually call actions/tools for customers.
- **Message generation** — tie it together into a human, helpful message.

### 5.3 Ingredient components (domain side)
- **Customer context** — data about customers.
- **Knowledge** — knowledge about Wise.
- **Skills** — usable capabilities per case.
- **Guardrails** — to move safely.

### 5.4 Build vs. partner decision
- Two options: build everything from scratch, or find a **third-party partner**.
- Building from scratch is a real engineering challenge; they chose a **partner** to move faster.
- Treat the **engine (left) as a black box** (with pros and cons); build only the **ingredients (right)**, which are domain-specific and only Wise can build anyway.
- Partnering delivers **impact faster**, and the resulting solution is a **baseline** to compare against later (whether switching partners or building in-house).

### 5.5 Ingredient — Customer context
- A transfer question needs data about the transfer → **integrate all internal services**.
- But raw data can't go straight into the context window — must **map it into an LLM-friendly format**.
- Remove **internal jargon** the model may struggle with.
- Critically: **anything in the context window can end up in the customer response**, so never include anything sensitive or non-public — hence the mapping is essential.

### 5.6 Ingredient — Knowledge about Wise
- Don't answer with general knowledge — need to know **how Wise works** (what happens when a transfer is delayed, how to order a card, how to find account details).
- Must be in a format the LLM can **reason with in a structured way** — "really hard."
- Like customer context, must be **public, jargon-free** so customers understand it.

### 5.7 Ingredient — Skills
- Analogy to **AI coding agents**: you give them skills = specific instructions or tools to solve something.
- Same for the AI support agent: how to solve specific cases — some need **step-by-step instructions**, some need a **tool call**.

### 5.8 Ingredient — Guardrails on inputs
- Is the customer message **safe to process**?
- Avoid **prompt attacks**.
- Detect if the customer is **vulnerable** or making a **complaint** → **don't automate**, handle with care via humans.
- If a customer **asks for a human**, they get a human (a guardrail).

### 5.9 Ingredient — Guardrails on outputs
- Don't send anything that shouldn't go to the customer.
- **No leaking sensitive info** — the biggest defense is not putting it in the context window in the first place; the output guardrail is an **additional safety net**.
- **Stay within the tone of voice** — its own guardrail.

### 5.10 Worked example A — Sarah's follow-up, now answerable
- Sarah's follow-up "Last time it was faster" can now be answered in a conversation:
  - "You're right. Your last transfer was sent to a bank that supports faster processing. But transfers can take up to 2 days. Your money is safe and on its way."
  - "Okay. Is there anything I need to do?"
  - "Nothing at all. Just sit tight. If it hasn't turned up in 2 days, please message us again and we will look into it further."
- Same underlying logic, but **back-and-forth reassurance** → customer feels heard → higher trust and resolution.

### 5.11 Worked example B — John, expecting money (no data)
- Difference from Sarah: John is **expecting incoming money**, so Wise has **no data** (John may see nothing in his app either).
- Uses a **simplified skill** walked step by step.

### 5.12 Example B — Step 1: Gather information
- The message is vague — could be ~10 different things at Wise.
- Agent: "Hey John, are you expecting money into your Wise account? Or did you send money to someone else?"
- John: "I transferred to my Wise account yesterday." → **expecting money into Wise**.

### 5.13 Example B — Step 2: Calculate the ETA
- Call an **internal tool** to compute how long it should take (assume **2 days** again).
- Check whether we are **within** or **after** the ETA — it was yesterday, so **within**.
- Reassure: "I see. Checking the ETA, this can take up to 2 days to arrive. If it's still not here by then, please come back and we will look into it."

### 5.14 Example B — Step 3: Two days later, escalate
- Customer returns; still not there. Use the **prior conversation/context**.
- Skill now requests **proof of payment**: "Sorry about that. Can you upload proof of payment? Our relevant team will look into it for you."
- On upload, **escalate directly to the responsible reviewing team** (a different team than support agents) — the **customer-support part is still automated**.

### 5.15 Strategy and result
- Went **intent by intent**, one question type at a time, to focus on **quality**.
- As they wrote more skills and knowledge, the numbers **climbed faster**.
- Reached **~50% automation** with the partner (the slide transition was fast, but this took much longer).

---

## 6. Step 4 — Building In-House: Swapping the Engine

### 6.1 The approaching ceiling
- Not claiming a ceiling yet at 50%, but it "might be approaching."
- Ingredients are Wise's, but the **engine isn't** — limited by what the partner lets them control.

### 6.2 Lesson — reusable ingredients travel with you
- The ingredients are Wise's, so whatever they do next, they **don't start from zero**.

### 6.3 Why more customization is needed
- The partner builds a product for **hundreds of companies** (great), but Wise has **unique edge cases and processes** and eventually needs **more control**.

### 6.4 The transition approach
- **Keep the partner integration running** and still improving it (more people on the team now); it's **helping customers today**.
- **Build in-house alongside it** for **full control** and to **de-risk** (not relying on one solution) — more work, but better future potential.
- Simplified: they are **swapping the engine** — it's no longer a black box. The partner "gave us time to get here"; without them they couldn't have shown results while building from scratch.

### 6.5 The in-house stack
- Wise is mostly a **Java** organization, but Java "doesn't feel right for AI agents."
- Chose **TypeScript**.
- Using **Mastra** — a TypeScript AI framework with good out-of-the-box abstractions (observability, agents, workflows).
- Using the **Vercel AI SDK** — good abstractions and AI primitives; Mastra builds on top of it.

### 6.6 Workflow — high-level three-step process
- Conceptually: **pre-process → generate → output guardrails**.

### 6.7 Pre-process — Intent detection
- Determine the **question category**.
- Decide: automate at all? automate with **in-house** or with the **partner**?

### 6.8 Pre-process — Guardrails
- Run guardrails such as **prompt-attack** detection, **vulnerable-customer** detection, **complaint** detection, and a **"wants a human"** check.

### 6.9 Pre-process — Knowledge retrieval
- Most messages need retrieved knowledge → formulate a **searchable query**.
- Run **semantic search**, then **re-ranking** to get what's actually needed.

### 6.10 Generate — Three-step thinking process
- **Diagnose** the issue — what's the actual problem/question?
- **Plan** — can we answer, or do we need to **clarify** (ask questions first)?
- **Write** the response — an answer or a clarifying question.

### 6.11 Output guardrails
- Examples: **no financial advice**, **no tax advice**, stay within **tone of voice**, **don't leak internal data**.

---

## 7. Build the System, Not Just the Agent

### 7.1 The principle
- You don't just build an AI agent — you build a **system that helps you improve the agent safely and quickly**.
- The agent is just one piece; you also need **observability and feedback loops** to move safely and fast.

### 7.2 Tool — Conversation inspection / observability
- Select any answer Wise sent and see **what went into it**:
  - The **reasoning** (the three-step process).
  - Whether the customer was **frustrated**.
  - What **knowledge** was used.
  - The **guardrails** — always run — their **output**, reasoning, and **confidence**.
- Gives **full visibility over everything**.

### 7.3 Tool — Re-simulation
- To know if a change (skill, prompt, or knowledge) is an improvement, **re-simulate previous conversations** with the **changed configuration**.
- Also **simulates the customer side** based on the real conversation — not 100% correct, but gives confidence.
- Can run for a **specific conversation or thousands** to really test.

### 7.4 Tool — Evals
- Evals = automated software tests, "but must be AI."
- Select any message; decide if it's a **good message to keep** or one to **improve**.
- Click **add to eval**, tweak the **expected outcome**, or accept as-is → adds to an **ever-growing eval set**.
- On a change, run the evals as a **safety net** against regressions.
- **Not classic testing** — they don't expect 100%; some cases can tolerate imperfection, others are stricter.

### 7.5 Recommendation
- Build a **system** around what you're doing, not just the agent, and **invest in tooling** — it's faster than ever to build custom internal tools that give speed and full visibility.

---

## 8. Where They Are and What's Next

### 8.1 Current state
- Went **0 → 50%** with the partner; the in-house build is **in progress / transition**.
- Not immediately increasing numbers because they're **taking over already-automated contacts** — but gaining **control**, **de-risking**, and building **future potential**.

### 8.2 The summit — autonomous agents
- Past "conversations" on the mountain, not yet at the top (no fully autonomous agents yet) — that's the current work.

### 8.3 Beyond support
- Aspire to move **outside support** to help customers **manage finances through Wise** — e.g., send money in chat, order a card, or freeze it.

### 8.4 Closing lessons (recap)
- **Start simple** — a simple solution can still deliver value (yours will differ from Wise's).
- **Personalization builds trust** — the same content, personalized, is accepted better.
- **Build reusable ingredients** — they stay with you whatever you do next.
- **Build a system, not just the agent** — the system is what lets you develop quickly.

---

## 9. Q&A (≈10 minutes)

### 9.1 Q1 — Will Wise have humans evaluate samples of chats to improve the in-house engine?
- Yes — already have people on it, and will likely **grow the team**.
- A couple of **QA people** review real conversations and automations full-time to find non-ideal outputs and improve.

### 9.2 Q2 — AI agents can be frustrating (still "dumber than humans"); do you collect frustrated-user feedback and act on it?
- Yes — a **feedback survey after both human and AI conversations**, tracked as a metric to avoid degrading performance.
- Keep a **specific percentage of conversations un-automated** as a comparison baseline.
- They look at feedback and act on it.

### 9.3 Q3 — What do analytics say about how users like the agent?
- (Light exchange over "sour or our.")
- QA reviewers compare **human-resolved vs. automated** contacts — quality is **consistent, sometimes even better for automated**.
- Customers increasingly **accept the answers**; some immediately demand a human (fine), but more like the **speed** (no waiting for a line).
- Overall: **they like it.**

### 9.4 Q4 — Where's the biggest benefit of AI agents vs. traditional approaches? (E.g., "Where is my money" seems deterministic and could be surfaced in the app.)
- Good point — ideally you'd need no support at all.
- For "Where is my money," the info **is** in the app (shown on the transfer), but people **miss it / can't find it**, so they still ask.

### 9.5 Q5 — How do you avoid losing trust from agent hallucinations?
- Try their best to prevent hallucinations; it can still happen occasionally, but **good guardrails** minimize frequency.
- When it happens, customers **usually spot it and can request a human**, so they get helped anyway.

### 9.6 Q6 — One or two examples of the customization you wanted (in-house vs. partner)?
- It's about **how the partner handles the conversation** — in-house **content designers** would deliver the message differently (not the factual info, but the **delivery**) for higher trust/resolution.
- Also want to provide **more actions**, which they think in-house does better.

### 9.7 Q7 — How do you handle multiple languages?
- Started **English-only** (Wise chat was mostly English).
- Now rolling out more languages — **the partner supports multiple languages**, so they rely on the partner for that.
- Everything internal (knowledge, skills, reasoning) stays **in English**, with a non-English response only at the end.
- The **in-house** solution **doesn't do multi-language yet**.

### 9.8 Q8 — How do you deal with LLM costs at this scale?
- Simpler for them: humans answering the same questions repeatedly is **expensive**, and LLMs are **significantly cheaper**, so it's **easy to make it worth it**.

### 9.9 Q9 — Do agents execute tasks or only answer questions?
- Starting to roll out **more tasks** (e.g., cancel a transfer), but the agent **doesn't do it automatically**.
- It **offers** the action and the customer must **click/confirm** — keeping a **human in the loop** for security.

---

## People & References Cited

- **Balázs Csintalan** — speaker, Wise Assistant team (closing MC misnamed him "Balázs Némethi").
- **Gergő** — referenced for a failure/example mentioned earlier that morning at the conference.
- **Example customers (illustrative):** Sarah (outgoing transfer), John (incoming transfer).
- **Company:** Wise / TransferWise — fintech, ~19M customers, mission of lowest fees / low costs.
- **Team:** Wise Assistant team (small, cross-functional; includes QA reviewers).
- **Tools & frameworks:** LLMs (unspecified provider), **Mastra** (TypeScript AI framework), **Vercel AI SDK**; TypeScript (chosen over Wise's usual Java); semantic search + re-ranking; internal ETA/tooling; observability, re-simulation, and eval tooling.
- **Concepts:** the templates → personalized → conversations → autonomous-agents "mountain"; ~5% then ~50% automation; engine/platform vs. domain ingredients; customer context mapping (jargon-free, non-sensitive); knowledge management; skills (coding-agent analogy); input guardrails (prompt-attack, vulnerable-customer, complaint, human-request); output guardrails (no leaks, tone of voice, no financial/tax advice); pre-process/generate/output-guardrails workflow; diagnose/plan/write; evals as AI tests; human-in-the-loop for actions; personalization builds trust; build a system not just an agent.

---

*Video: https://www.youtube.com/watch?v=GlUeLoiw9rw — Transcript via yt-transcript.sh; outline generated from the transcript.*
