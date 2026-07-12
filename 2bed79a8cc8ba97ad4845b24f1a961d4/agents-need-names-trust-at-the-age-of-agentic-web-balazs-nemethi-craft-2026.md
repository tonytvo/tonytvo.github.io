---
title: "Agents Need Names: Trust at the age of agentic web – Balázs Némethi | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Balázs Némethi (agent.community) argues AI agents will need names, identity, discovery, and trust as they become economic actors — the RPG-hero naming analogy, why platform handles are siloed, trust as the 'first hop', capability cards with provenance and selective disclosure, protocols (MCP/A2A), the open DNS-based Agent Identity & Discovery (AID) spec, agent-onboarding flows, and the campaign to make the .agent TLD a community-governed public good via ICANN — plus a three-question Q&A."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Agents Need Names: Trust at the age of agentic web – Balázs Némethi (Talk Outline)

> A **Craft 2026** talk by **Balázs Némethi** (Hungarian, presenting in English; runs **agent.community.org**) — "a heavily AI-focused, futuristic talk" on why AI agents will need **names, identity, discovery, and trust**, and why that infrastructure must be **open and public** rather than owned by one platform. He explains terms from two industries (AI and identity) and closes with a Q&A. The talk's own structure: a new actor on the internet → naming (the RPG-hero analogy) → how identity emerged and why platform handles are siloed → scale of the agentic web → trust as the "first hop" → why it must be open (not an app store) → capabilities & provenance (capability cards) → protocols → the DNS-based AID discovery spec → verification as an artifact & agent onboarding → coordination at scale → making `.agent` a public good via ICANN → Q&A.

---

## 1. A New Actor on the Internet

### 1.1 The old two-actor split
- Until recently ("ChatGPT or other moments") the internet had **two actors**: **humans** and **services** — with **bots** being a type of service.
- This split it into "human-used internet" and "bot-used internet."
- Differentiation was easy: a **CAPTCHA** captured the (in)capabilities of bots (and "helped Google train some images — but that's a different story").

### 1.2 What an agent is
- An **AI** is "just an endpoint" — ChatGPT, Gemini, your favorite tool.
- An **agent** is an AI that **uses tools**, has a **degree of freedom to make decisions**, conducts "its own linear set of decisions," and arrives at a final output — the number of intermediate steps is "up to the agent," based on requirements/target.
- Short version: **tool-using AI**.

### 1.3 Agents as economic participants
- Agents go further — they **carry out work or economic output**: call/interact with services, **set up and operate services**, even **operate companies**.
- Not a passive single-task program but "a capability set that enables it to do anything" (with quotation marks — "it's all developing").
- They become **part of the economy** — not just because their tokens are paid for, but because they **generate revenue** for companies/individuals/whoever controls them.

### 1.4 The gaming analogy — heroes need names
- Every game with a main character **starts by naming your character** — because the whole relationship during the game relates to that name.
- Old bots were the **NPCs** (non-playable characters); **you are the hero**.
- Your **agent is now the hero** that represents you or your company in a digital, **heavily human-focused environment**.

### 1.5 Why names matter for any economic actor
- AI is trained on human data where "humans refer to each other by names."
- Infrastructure is name-based: **domains** make it easier to open and discover services; **company names** carry context.
- Example: you could refer to "the place on that street, number 57," but saying "**the McDonald's on Andrássy**" instantly gives everyone context.
- Names are essential for **discovery** and for actors to **relate to each other** — "so agents will want names."

---

## 2. How Identity Emerged, and Why Platform Handles Are Siloed

### 2.1 Identity scaled with civilization
- Early society: people lived in "extremely small, limited environments" — a village or few — where everyone knew everyone (maybe one external merchant).
- References were relational: "the son of Bob," "son of the tailor."
- As travel normalized, representing a person from "my organization, my village, my empire" mattered — so identity systems developed with a **"stamp of approval" from the lord/king**.

### 2.2 Identity today
- **Passports and identities** let you tell others who you are without ever meeting.
- Identifiable info (family relations, "did I go to Harvard?") helps your environment recognize you.

### 2.3 The problem with platform handles
- **Instagram/Twitter usernames** are heavily coveted — **unique, one-of-one per platform, first-come-first-serve** (about timing, not merit).
- They create an **extremely siloed** environment: "from your Twitter you cannot text someone on Instagram" — not because it's impossible, but because platforms have **zero incentive**.
- Contrast: a **passport works across any border** because of **global understanding of issuance and resolution**; a Twitter handle works only on Twitter (maybe Grok recognizes it) — "it's not an interoperable tool."

### 2.4 What the agentic web needs
- Global, boundary-less agents operating **24/7** — even "60×24/7" because an agent "can multiply itself."
- Referencing and interacting with a trusted party will be crucial, and it **shouldn't be owned or controlled by a single entity** — "that's a lot of power."

---

## 3. Trust as the First Hop

### 3.1 The first-impression analogy
- Interaction starts with a **first hop** — like a first impression in person: does the other party **look trustworthy**? Do they carry identifiable info (clothing, look)?
- On the internet that's **which IP address or domain** you're coming from — an **initialization / handshake** that already happens between technologies today.

### 3.2 It's not new, but it must scale and be open
- The first hop "won't be different" for agents; after it's established, **digital signatures** create a **secure communication layer**.
- It must **scale to the agentic web** — estimated at **hundreds of billions of agents** in a couple of years.

### 3.3 The spectrum of agents
- Don't picture hundreds of millions of identical ChatGPT-grade agents.
- **Ephemeral coding agents** (Claude Code, Codex) search, do work with agency, and mostly write/test code and search externally — they **don't need heavy identification** because they aren't opening bank accounts, renting server racks, or filing taxes on your behalf.
- Agents range from **simple/ephemeral** to **extremely complex/long-running**.
- **OpenClaw** — "not a great architecture," but it "showed what a long-running agent is" and helps the mental model.

### 3.4 Local naming doesn't scale
- You can tell your chat "your name is Bob" or store it in a coding agent's memory, but when "Bob" searches Google it won't advertise "I'm Bob" — it's **temporally local naming**.
- "What referencing system you have internally doesn't scale to the internet" — there must be a mechanism for **referencing between entities at scale**.

### 3.5 It shouldn't be an app store
- It shouldn't be **Apple** or **Steam**: "for only 30% of your revenues we enable you to be discovered, and we do a verification check on your codebase."
- "Amazing for these platforms," but **not realistic at internet scale** and "not how the internet should be."
- It should be an **open marketplace / open discovery**, referenceable by anyone, to create internet-scale opportunity and let more businesses build on top.

---

## 4. Capabilities & Provenance

### 4.1 Beyond "who are you" — "what can you do"
- Interactions need **who you are** *and* **what can you do**: the **abilities** an agent has and the **permissions** from its creator/operator.

### 4.2 Why unlimited approval is dangerous
- Analogy: you can limit what a **child's account** can do on a device (Google offers this) — but for agents it's less about protection and more that they **make mistakes**, sometimes devastating ones.
- With **infinite approval**, an agent can mistakenly **delete your bank account** or **send away all your cryptocurrency** ("worth less and less these days, but still").
- Current **LLMs make mistakes**; a highly autonomous agent that fails a task **retries "whatever happens"** to finish — so it needs **limitations**.

### 4.3 Capability cards
- Agents will carry **capability cards** — "do something, don't do everything."
- Differentiator: **"yellow-mode" agents** ("I can do everything, let's go") vs. **enterprise agents** with a "more limited set of steps or tools."
- Cards carry **provenance**: where I'm coming from, who my **controller** is, where the **legal entity** is.
- **Selective disclosure**: "Yes, I can do it, but I'm not fully resolving" — like humans using **loyalty cards** so services remember you, and like a passport that doesn't let you open a bank account everywhere ("usually limited for local citizens").

### 4.4 Protocols are abilities
- Communication layers: **MCP**, and others like **A2A** — plus authentication, tool-interaction abilities, and security applied.
- Applies to any pairing: **agent-to-agent, service-to-agent, human-to-agent**.
- "Not one mechanism to beat them all" — but if an agent **lacks MCP** and the target service only accepts MCP, the agent "can just **build its own MCP tool**" (if allowed) — "much more fluid interactions." Even then it declares "now I can do MCP, please let me in."

### 4.5 Re-identification on return
- Beyond username/password: how do we ensure that when you **return** it's still you, and how do we **refer** to you?
- Effectively an **IP address (or version of one) plus a secret key** — but a **domain name** is better, and "that's pretty much what agent.community is focusing on."

### 4.6 If the first hop fails, no interaction
- "If I can't prove where I'm coming from, or you can't understand what I'm trying to prove, then there is no interaction" — even with matching auth and goals.
- The core problem isn't tool mismatch — "I just **don't know where you are**, I don't know how to find you."
- **Registries** ("yellow pages") could help, but the internet is big and **"there is no one system that has every domain name"** — the same will be true for agents at hundreds-of-billions scale; referring by IP address or phone number won't work.

---

## 5. Agent Identity & Discovery (AID) — DNS-Based Discovery

### 5.1 What AID is
- An **open specification** called **Agent Identity & Discovery (AID)** — a **DNS record** ("an agent record") that tells you **where the agent endpoint is**.
- Given a website — `supabase.com` (technical) or `twitter.com` (less technical) — it **resolves** to that company's **agent endpoint**, so you don't need to hunt for docs.

### 5.2 Why DNS
- DNS is **fairly decentralized**, **works globally**, and has **high reliability** ("pretty much always available").
- It already scales to IP addresses and back-end tooling — "so it works. We made it."

### 5.3 AID is deliberately lightweight
- "A zero-thought" spec: **"where is your endpoint? Tell me"** — credentials and capabilities come **after**. "Very lightweight, fun, necessary, and open."

### 5.4 Verification as an artifact
- Goes one step beyond capability: what the agent **actually holds** — "Does it have my password?"
- If it doesn't have your password, it can't act on your behalf — so you either give it access or **create an account for it** on the same system.

### 5.5 Agent onboarding flows
- Many San Francisco companies now have **agent-onboarding flows** — representing a **human's agent**, not the human, in their environment.
- Emerging concepts: a **second account**, **"agent mail."**
- Variations: agents that **fully represent** a human/entity, and agents that have **their own account** and act like a **coworker** doing certain jobs — "everything in between."
- The constant: agents "can show where they're coming from, what they can do, and what they can't do."

---

## 6. Coordination at Scale

### 6.1 A horde of coordinating agents
- Not one agent interacting but a **horde** needing **coordination** — specifically **external** agents (internal-org agents are easier to understand).
- These "don't really exist today" at scale — only experiments so far.

### 6.2 Cross-party coordination
- Many agents, possibly from **different parties**, will aim to coordinate on problems — **tax filing** or far more complex ones like **scientific discovery** ("there are projects around this").
- They need to **discover each other** and have a **continuous way of resolving each other**.

### 6.3 Why not just Twitter accounts
- Everyone having a Twitter account in a closed system "could work… happy ever after," but the goal is to work at **internet scale without trusting one central party** — a **decentralized** system, "as decentralized as we can get."

---

## 7. Make `.agent` a Public Good

### 7.1 The stakes
- Getting discovery infrastructure right is critical: if it "becomes a Facebook or Instagram" owned by one platform, **they set the rules** — "no one wants this."
- Some actors are "better funded than most countries" and "may have different versions of the future."
- So this infrastructure must be treated as **public infrastructure**, open and not controlled by a single entity chasing shareholder value.

### 7.2 DNS as the model
- "DNS is boring enough to be useful."
- It's a **global, delegated system** governed by **ICANN**; you can "see the constellation from anywhere in the world" and **resolve DNS everywhere** — "that's how the internet was built."
- Agents "are part of the internet… they will use the same pipes," so DNS stays core.

### 7.3 Special names and value tiers
- Some names will be **reserved / never issued**, and some **special**.
- `search.agent` is "an extremely valuable property"; `HelloKitty47_72` is "less important" — **equally resolvable and trustable**, but different **value**.

### 7.4 A regulated-agent naming layer
- Planning to reserve **`.eu.agent`** as a subdomain category: if the **EU** creates an **agent-regulation** category, EU-compliant agents deployed there **immediately signal** they meet EU requirements.
- A **trust signal** derived purely from the name — "going further than just a naming layer."

### 7.5 `.agent` is not live yet
- All this is **in process**; `.agent` is **not live**.
- Goal: make **`.agent`** (alongside `.com`, `.dev`, `.app`) a **community-governed** top-level domain, **not owned by a single company**.
- Why `.agent` specifically: "just because of how English works, it's an extremely valuable strategic property."

### 7.6 The ICANN application and the community
- agent.community will **submit an application to ICANN**; they are "not the registry yet."
- They're building a **community (28,000+ members and growing)** — every additional member strengthens the **global-coverage signal** to ICANN.
- Pitch to ICANN: money is great and big parties will pay a lot, but an **approved community** "will govern it in a good way," with policies, governance, and a board ensuring `.agent` serves the internet, "not purely shareholder value creation."

### 7.7 Call to action
- **Builders can join** — working groups / discovery groups launching; many join because "`.agent` should be public" resonates with those who've "seen where platformization of the internet has led us."
- Sign up as an individual or organization at **agent.community.org**; newsletter, working groups, and an **in-person San Francisco meeting at the end of June** (to be announced).
- Domain owners will get **a voice at the table** — "not pay-to-play"; there'll be price differences, but you can even reach **the board**.
- Playful idea in the governance documents: an **agent could eventually sit on the board**, as an economic actor with "a much better understanding of what's happening than us humans."
- Foresees future conversations about **agents having rights** — starting with **agentic corporations**, growing "a lot more complex."

### 7.8 The core argument
- "**Public infrastructure is great; private infrastructure will be exploited.**"
- Even a well-meaning company can, over time (leadership changes), "start taking a toll or limit access" — cites **Twitter being sold and heading a different direction** than prior management intended.

---

## 8. Q&A

### 8.1 Q1 — What has to happen before agents can participate in real economic transactions independently?
- "Technically, it **already happened**" — agents have done real-world transactions (**card or cryptocurrency**) "on their own whim, not on request."
- In production / widely used? He knows people whose agents "do a lot of things for them" — **"highly unreliable," causing "a lot of surprises,"** sometimes needing restarts, but treated as "a great experiment" by "champions of the new era."
- "So there are more independent agents with limited capability and changing mood… but they exist."

### 8.2 Q2 — At what point does an AI agent stop being a tool and become an actor?
- "It's **an actor already**" — it calls, interacts with, uses, and develops tools, so "it's not just a tool."
- Whether it's an **economic** actor: "Maybe not — and it's becoming more of an economic actor."
- (Notes the terms need defining, "which we currently don't have time for.")

### 8.3 Q3 — What's broken today because agents don't have identities?
- "**Interestingly, nothing**" — "the agents that would need identities don't really exist at scale."
- That's what makes the conversation interesting: people **planning the future** know "extremely capable agents are coming."
- When it happens it may be an **"open flow / ChatGPT-type moment"** — going "from zero or a few to hundreds of thousands to millions to tens of millions in an extremely short amount of time" once someone "puts together the puzzle pieces."
- By then the infrastructure "has to be in place that can be just picked up and used… there will be no time to plan it anymore." "Those agents are coming; they are not yet broken."

---

## People & References Cited

- **Balázs Némethi** — speaker; founder/runner of **agent.community** (agent.community.org), based in San Francisco.
- **agent.community** — the community (28,000+ members) campaigning to make **`.agent`** a community-governed public good via an **ICANN** application; publisher of the **AID (Agent Identity & Discovery)** open spec; launching working groups and an end-of-June San Francisco in-person meeting.
- **AID (Agent Identity & Discovery)** — open specification; a **DNS record** resolving a website to its agent endpoint.
- **Organizations / platforms referenced:** ICANN (DNS governing body), Apple, Steam (app-store toll analogy), Google (CAPTCHA training; child-account controls; Gemini), Twitter/X (siloed handles; sold and redirected), Instagram, Facebook, Harvard, McDonald's (naming/context analogy), OpenClaw (long-running-agent architecture example), Supabase (`supabase.com` resolution example), Grok, ChatGPT, the EU (hypothetical agent regulation → `.eu.agent`).
- **Tools / tech:** Claude Code, Codex (ephemeral coding agents), MCP, A2A (agent-to-agent protocol), DNS, IP addresses, digital signatures, capability cards, agent mail, agent-onboarding flows.
- **Concepts:** the human/service/bot split; CAPTCHAs; agents as tool-using AI and economic actors; the RPG-hero naming analogy; NPCs vs. hero; names for discovery and relation; historical emergence of identity; passports vs. platform handles (unique, first-come, siloed, non-interoperable); global issuance/resolution; hundreds of billions of agents; 24/7 self-multiplying agents; trust as the "first hop"; handshake + digital signatures + secure channel; open vs. app-store (30% toll, gatekept verification) discovery; who-you-are vs. what-you-can-do; unlimited-approval danger (LLM mistakes, autonomous retries); capability cards; provenance (controller, legal entity); selective disclosure; loyalty-card analogy; protocols as abilities (MCP/A2A); agents building their own tools; re-identification (IP/domain + secret key); registries/"yellow pages" and the absence of a single global directory; DNS decentralization/reliability; verification as an artifact; agent onboarding / second accounts / agent-as-coworker; horde coordination across parties (tax filing, scientific discovery); decentralization vs. central trust; `.agent` as a strategic TLD; reserved/valuable names; `.eu.agent` regulated-agent trust signal; public vs. private infrastructure; agentic corporations and future agent rights.

---

*Video: https://www.youtube.com/watch?v=NzyJudAhVok — Transcript via yt-transcript.sh; outline generated from the transcript.*
