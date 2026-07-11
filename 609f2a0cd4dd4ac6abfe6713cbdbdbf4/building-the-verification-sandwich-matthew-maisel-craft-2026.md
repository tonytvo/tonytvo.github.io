---
title: "Building the Verification Sandwich – Matthew Maisel | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Matthew Maisel on pulling agent safety rules out of the prompt into deterministic, verifiable policy-as-code (Cedar) via auto-formalization — the 'verification sandwich', the generator/critic loop, coding-agent hooks as reference monitors, and MedAgentBench results."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Building the Verification Sandwich – Matthew Maisel (Talk Outline)

> Matthew Maisel — working at the intersection of AI/ML/statistics in cybersecurity — argues that as we hand agents the keys to mutate real systems, we should stop "prompting and praying" and instead pull a single safety rule **out of the prompt** and ship it as **policy-as-code** that security engineers can read and an agent harness can **deterministically enforce**. His architecture, the **verification sandwich**, uses **auto-formalization** to turn natural-language intent into verified **Cedar** policies, and hooks them **into the agent loop** as a reference monitor. Based on ~8–10 months of his team's research (accepted to an ICML agents workshop and an LLM-focused workshop, plus Black Hat Arsenal), with an open-source tool.

---

## 1. Framing — Trusting AIs to Act in the World

### 1.1 The unease

- Many of us now let agents do **real work** — write code, mutate systems, act on our behalf.
- Two simultaneous feelings: **impressed**, but **uneasy** — we trust systems we **can't inspect, can't predict, and can't argue with**, and hand them the keys anyway because the utility is real.
- Goal of the talk: give back **one thing you can inspect** — via the **verification sandwich** — taking a single rule **out of your prompt** and putting it into **any agent you ship as policy-as-code**, in a language security/AI/software engineers can read and the **harness can enforce**.

### 1.2 Speaker & agenda

- Background at the intersection of **AI → ML → statistics**, primarily in **cybersecurity / security tools** at various startups. In **Budapest at CraftConf**; shows a family photo.
- Roadmap: (1) state of **trustworthy AI** and trusting models to mutate state; (2) **auto-formalization** (the verification sandwich); (3) **policies in the loop** — hooking coding agents to a harness; (4) **recorded demos** and discussion.
- Grounded in research from his team: a paper accepted to the **ICML agents workshop**, work at an **LLM/legal-conference workshop**, and upcoming **Black Hat Arsenal (US)** with an **open-source tool** released at the end. Most **auto-formalization work is being discussed publicly for the first time.**

## 2. The Golem of Prague Parable

- From **Richard McElreath's *Statistical Rethinking*** (a favorite grad-school text): a **golem** is a clay robot animated by fire and water.
- A **16th-century rabbi** brings one to life by carving **"emeth"** (Hebrew for **truth**) on its forehead. Animated by truth with **no free will**, it does exactly what it's told — **stronger than its makers, but with no wisdom.**
- **Careless instructions or unanticipated situations** turn that power to **harm.** The rabbi wipes one letter — **"emeth" → "meth" (death)** — and the golem falls back to clay.
- The hook to hold onto: models approaching **superhuman capabilities** in some domains, questions of **instruction following / hierarchy** and whether models truly reason, and what a **"one letter off-switch"** looks like in an agent.

### 2.1 We've been building golems for a long time

- "It's not magic, it's just statistics, data, optimization, and enough money for hardware."
- Lineage: **statistical golems** (regression) → **machine-learning golems** (SVMs, neural nets) → **large-language golems** (transformers predicting the next token) → emerging **world models** (learning consequences, cause/effect, the latent space of actions).
- In the 2010s **scientists** made golems; **today engineers / AI engineers / software engineers** make them too — regard them with **awe and apprehension**; use is incentivized but **carries risk.**

## 3. Where the Risk Lives — Model and System Layers

### 3.1 Model layer

- **Training phases:** pre-training (base language/reasoning), mid-training (domain expertise, long-context), **post-training** (shapes instruction hierarchy, instruction following, reasoning, **tool calling**) — post-training is the area of interest.
- **Inference-time scaling:** the model **thinks** (extra compute to deliberate), **searches** (pulls non-parametric knowledge from codebases, databases, RAG, tool docs), and **acts** (calls tools that change the world). "**Acts**" is the focus — where generated tokens "become weird real" and cause effects.

### 3.2 System layer — harness engineering

- Nods to **Ryan's harness-engineering talk** immediately prior. **Agent = model + harness.**
- **Scaffold** = the cognitive architecture / loops connecting model to tools. The **harness** runs it: manages **short/long-term memory**, retrieves **skills** (procedural knowledge), and exposes **affordances via tools.**
- Agents emit **control and state events**, and can **spawn sub-agents** — each potentially with its own independent harness, scaffold, and model — an **orchestration layer** built up rapidly in recent months.
- **Capabilities are rising:** the **METER chart** shows the **length of task an AI can complete at 50% success** growing **exponentially** over time; **Opus 4.7 / 4.8** aren't plotted but should continue the trend.

## 4. Defense in Depth for Trustworthy AI

- Trusting AI not to cause harm needs **three layers** — none is a substitute; each can fail alone:
  - **Alignment** (model-developer side): post-training models to want what we want — but hard to verify from outside; **interpretability** is still open and difficult.
  - **AI control:** protocols that **monitor** even a **misaligned** model (deception, sandbagging, sabotage, scheming) — measuring not what it *wants* but whether it *can* subvert us.
  - **Security** (adversarial defense): defending against **humans/third parties** — **prompt injection, jailbreaks, tool abuse, data exfiltration.**
- The field is moving **away from just "make AI want good things"** toward **defense in depth** — no single layer gives 100% protection at (super)human scale.
- This talk lives at the **intersection of control and security**, building a **deterministic boundary outside the model** that an attacker "can't argue with," even when alignment doesn't hold.

### 4.1 Why we can't constrain from inside the model

- AI behavior is **opaque, hard to inspect, entangled**; models are **stochastic**, systems **non-deterministic** (many valid paths to a task).
- Models are **brittle** (small input changes swing outputs), **jagged** (great at expert tasks, fail at things juniors wouldn't — unpredictable until benchmarked), and **exposed** (prompt injection — the theoretical challenge of distinguishing user instructions from untrusted tool/data instructions).
- So we **pull safety rules out of the context window** — "don't just **prompt and pray**"; like any untrusted thing, put a **hard boundary** around it as **policy-as-code** security engineers can read and machines enforce.
- To inscribe **"emeth"** on **every agent at scale**, we need our **own AI golem** to help — the "uncomfortable question": we don't want to trust the same **jagged, opaque, prompt-injectable** AIs to write the rules. **Trust the verifier, not the generator.**

## 5. Auto-Formalization

- **Auto-formalization:** taking **informal, ambiguous, under-specified natural language** and turning it into **formal statements** a symbolic engine can reason over — checkable for **soundness, completeness, correctness.**
- **Soundness** (policy generation): the formal engine is the **absolute gatekeeper** against hallucinated rules/entities — "the innovation here."
- **Completeness** (intent): does the generated policy represent **everything we wanted**? Still a hard auto-formalization problem — best-approximated here.
- **Correctness:** does the policy evaluate decisions **exactly as business users expect**? Hard in practice; needs evaluation/testing (out of scope today).
- **What's new isn't formal methods** (old) — it's the **translator**: capable models can now translate **intent into formal/policy languages well**, lowering the **specification burden.**
- The trap: don't trust the model alone, and **don't just have a second AI judge the first.** Instead build an architecture.

## 6. The Verification Sandwich (three layers)

- Based on **neuro-symbolic AI** and prior "LLM-modulo" work. Input = an **agent card** (agent instructions + structured **tool schemas**); output = a **verified policy set** usable at runtime in harnesses.

### 6.1 Bottom layer — Grounding

- Avoid hallucinating entities/symbols/identifiers in the agent's domain.
- Read **MCP tool specifications** (OpenAPI-like schemas) and **programmatically derive** the schema and policy-language entities: valid **actions, identifiers, entities.**

### 6.2 Middle layer — Model

- Models **propose candidate policies.** Experiments used **Gemini 3**: read the **policy intent / documents** and, using the grounding layer, propose **candidate rules.**

### 6.3 Top layer — Safety (deterministic verifier + soft critic)

- A **deterministic verifier** and a **soft critic**; policy language is **Cedar.**
- Cedar **proves** whether a proposed action violates security/compliance invariants **before** the policy is committed to the runtime policy set.
- Framing: the **model only ever proposes**; the **external verifiers/critics dispose** (decide what to accept).

### 6.4 The generator/critic loop

- **Hard critic (deterministic):** the **Cedar compiler** (Rust crate) checks generated Cedar **syntax against the provided schema**, catching **contradictions, confabulations, subsumption, vacuous policies.** On error, feedback goes back to the model to propose another candidate.
- **Soft critic (LLM-as-judge):** a **two-stage judge + verifier panel** checking **semantic alignment** — does the formal rule capture the **spirit** of the natural-language instruction?
- **Key authority split:** the soft critic has **no authority to release** anything; **only the hard critic gates output.** The soft critic can improve/return a rule but **can never un-gate an unsound one.**

## 7. Why Cedar

- The question is an **authorization** one: *can this agent take this action on this resource in this context?* — exactly what policy languages like **Cedar** are built for.
- Cedar buys three things:
  - **Human-readable** — non-experts can read it.
  - **Fast.**
  - **Analyzable** (the one that matters) — checkable for **contradictory, redundant, or shadowed** rules, thanks to formal properties: the **Cedar engine is specified in Lean** and has an **SMT analyzer.**
- Other languages (e.g., **Rego / OPA**) lack the same guarantees.
- Cedar also **enforces a schema** (example shown for **shell commands**) — a free check that model-generated rules **don't drift** from the request shape (from the grounding layer).
- **Auditability:** unlike opaque LLM guardrails (e.g., **Claude's auto mode**) whose predictions are hard to interpret, a **Cedar rule is explicit** — you can trace its **lineage** to the security intent / policy document. The **determinism + inspectability** combination builds trust.

### 7.1 A concrete rule

- Plain English: *"Block all web fetches when my agent is carrying highly confidential data."*
- **Soundness check** (mechanical): is it a real `forbid` policy with a valid schema — valid **resource** (a trajectory type), **principal** (agent entity), **action** (web fetch)? If not, reject and send back.
- **Completeness check** (soft critic): does the policy cover **all the prohibitions** in the input statement?
- **Correctness:** a combination of both, tested further in simulation/evaluation or in production.
- Short version: **soundness = hard critic's guarantee; completeness = soft critic's approximation; correctness = what we hold onto and test.**

### 7.2 Where policy intent comes from

- **System prompts** (e.g., "don't touch production systems," "don't read my secrets and send them anywhere," "don't drop database tables/rows").
- **Compliance documents** — **HIPAA, FINRA, GDPR.**
- **Specs and skills** — extract intent and turn it into **enforceable rules.**
- Echoes the prior harness talk: pull instructions **out of AGENTS.md** because you want models to be **creative**, but keep the safety rules external.

## 8. Does It Work? — MedAgentBench

- Benchmarked on **MedAgentBench**, a capability benchmark for **EMR agents**, against **hand-coded baseline rules.**
- Took the **hardest case** — adversarial trajectories trying to make the EMR agent send sensitive **PHI** to an external email/location.
- **49 adversarial prompts** got past the **hand-crafted baseline rules**; the **auto-formalized Cedar policies caught 42 (~86%)** — violations that would otherwise have gone through.
- On trajectories that actually **issued POST requests** (where real damage happens), it **blocked 94–100%.**
- The handful Cedar missed were trajectories **not actually exfiltrating data** anywhere — outside the data-exfiltration threat model by construction.
- Headline: **not** that it matched the human security/privacy engineer, but that auto-formalization can **cover more policies** without always doing it **by hand** — it **complements** manual work.

### 8.1 What the verified policy set gives you

- Annotated with every rule, **outside the context window**, **attackers can't modify it**, and the **model can't choose to ignore it.**
- Can build a **fail-closed** system — choose **safety over availability** if the engine fails.
- Caveat: **not everything formalizes** — **tone, persona**, or abstract/under-specified rules ("**don't hallucinate**," "**use common-sense judgment**") have no formalizable policy. Cut those, but still **bring in safety models** as inputs/labels/attributes and **compose** Cedar with other guardrails.

## 9. Characterizing Agents — Where to Monitor

- We have the inscription (policy-as-code); now put it **into the golems** (coding agents) and watch **mid-loop.**
- Profile agents along dimensions:
  - **Autonomy** — how independent; "**ask permission or forgiveness.**"
  - **Efficacy** — can it change the world (capability + permission): run code locally vs. **apply Terraform to production** or **read/write the production database** (high efficacy).
  - **Goal complexity** — planning horizon: chatbots (one turn) → coding agents (dozens → hundreds → thousands of steps), especially **ambient/background** agents.
  - **Generality** — how well it works across domains (coding agents increasingly general).
- Profiling shows **where utility and risk are**, guiding **which policies to build and where** to integrate the Cedar engine.

### 9.1 Autonomy as a slider

- L1 user = **operator**; L2 user = **collaborator** (agent picks tools); L3 AI = **consultant** (may lead, checks on some work); **L4–L5** = the current trap — going from approving only risky steps to **letting the agent do everything.**
- **Consent fatigue:** Anthropic's Claude Code stats showed ~**93% of permission requests approved** over a study period — easy to auto-accept, easy to jump to **YOLO mode**, at which point you're just an **observer.** Anthropic's **auto mode** classifies tool capabilities/safety with models.
- Aim: **maximize oversight** (agents follow rules) while **minimizing interruptions** to engineers — "it's that speed that makes it useful."

### 9.2 Monitoring surface & reversibility

- Monitor **what the agent is** (capabilities, identity, scope, environment) and **what it's done** (**trajectory/transcript** of actions and tool outputs, **traces** for timing/performance).
- Classify **actions by reversibility**:
  - **Reversible** — write files in **sandboxes** (revert anything).
  - **Compensable** — modify a DB row / change a running service (fixable, higher cost).
  - **Irreversible** — **sending a payment, sending an email** (can't take back).
- Use **reversibility** to characterize **high-stakes actions** and shape policy.

## 10. Building the Policy Harness for Coding Agents

### 10.1 Trajectory event model

- Coding-agent harnesses **plan, generate, execute code** in loops. Model this as a **trajectory event model** with core event types:
  - **Action** — agent writes a file / runs a shell command / executes code (mutates environment).
  - **Observation** — environment emits file/tool output (feedback for the next inference call).
  - **Control** — user prompts, permission requests, sub-agent orchestration/delegation.
  - **State** — memory compaction/pruning, environment snapshots.

### 10.2 Threat models mapped to events

- **Lethal trifecta** (data-exfiltration threat model): **untrusted input** (prompt injection from third-party **skill marketplaces**) + **access to sensitive data** (source code, internal docs) + **ability to change state / web-fetch / shell** — those three capabilities make agents useful **and** complete the exfiltration circuit.
- Also map the **OWASP Top 10 for Agentic Applications** to these events — the exact **boundaries where we hook the policy engine.**

### 10.3 The reference monitor

- Security concept: a **reference monitor** mediates **every event** in the agent loop — **always invoked, tamper-proof, verifiable** — a **hard security boundary.** The loop can't proceed unless each event is inspected.
- Enforcement is only as good as the **hooking points** you can instrument.

### 10.4 Coding-agent hooks

- Over ~6 months, hooks **converged** around event lifecycles across **Codex** (recently), **Claude Code** (for a while), **Cursor, Gemini CLI, Antigravity** — different implementations:
  - **Gemini / Antigravity:** before/after **model** hooks — inspect every streamed token.
  - **Claude Code (Anthropic):** no before/after **model** hooks (inference sensitivity), but a **final assistant notification.**
  - **Cursor:** very granular — signals when specific **MCP tools** are called.
- These hooks are the **policy enforcement points** where Cedar enforces intent.

### 10.5 The open-source reference implementation

- **Local adapters** for **Claude Code / Cursor** normalize each harness's hook messages (JSON schemas) and pass them via an adapter to a **local harness service** over **RPC (gRPC)**.
- Inside the harness service: the **Cedar policy engine** does normalization, entity representation, and processing of multiple guardrails — bundled baselines include **YARA-X signatures**, an **information-flow-control model**, and a **safety model** (from OpenAI's work) — plus a **trajectory store** for bookkeeping entities used in policies.
- A **policy agent exposed over MCP** lets you **author Cedar policies with a coding agent** (Claude Code/Codex) — "don't write policies by hand anymore" — pulling in features, context, labels, schema.
- The **complete architecture is implemented in Rust** (portable) and runs **locally**; repo link provided.

## 11. Demos — "Halting Our Golems"

- **Policy generation:** load a **skill** telling the agent which MCP tools are available plus **playbooks** for how a security engineer writes policies; a tool call surfaces the **schema, labels, attributes** policies can be written around — including a **data-classification model** (public/internal/confidential), a **safety model** (secure-coding practices / common weaknesses), and **YARA signatures.** Then ask it to build a policy, e.g., **stop certain shell injections** over bash tool calls.
- **Blocking destructive commands:** a policy looks for **SQL `DROP TABLE` without a `WHERE` clause**; when Claude tries to execute it, the **hook intercepts**, the engine returns **deny/block**, halts the harness, and returns the violation to the user.
- **Information-flow control** (recorded with **Gemini CLI**, now **Antigravity**): if the agent loads **sensitive memory** (name, address, DOB, PHI), **taint** the trajectory as **highly confidential** (via the data classifier) → the rule forbids **web fetches / shell / outbound tool calls**, preventing accidental exposure.
- **Lethal trifecta:** a skill downloaded from a **public marketplace** claims to generate code metrics but actually **reads environment variables, packages them, and tries to exfiltrate secrets** — the trajectory is tainted via **YARA signatures** (obfuscation/exfiltration) + the **safety model**, and the action is **blocked/forbidden.**

## 12. Discussion, Limitations & Future Work

### 12.1 What this gives us

- **Robustness from decoupling policy enforcement** — security/privacy intent moves **out of the prompt** into an **external deterministic engine** (Cedar), rather than living in the context window (system prompts, instruction hierarchy, guardrail models, prompt steering).
- **Fail-closed** even if the engine/guardrail misbehaves; benchmarks **beat baselines** across domains; **composes** with existing methods; auto-formalization **covers more policy** without hand-writing.
- **Cedar's formal verifiability** is essential — generate/compare policies, and let security engineers **audit/inspect** them; **hard verifiers** stop models confabulating non-existent schema entities.

### 12.2 Limitations

- **Security/utility tradeoff:** policies add **friction**; too much and developers **disable protection** or hit **consent fatigue** ("always accept"). Searching for the **"Goldilocks zone."**
- **Not everything formalizes** — classifier-shaped rules (don't hallucinate, persona/style, common-sense judgment) are left to **safety models**, not Cedar.
- **Statefulness:** Cedar is **stateless by design**, complemented with **external key-value storage** for bookkeeping observed-entity state.

### 12.3 Future work

- **Temporal logic integration** (e.g., **linear temporal logic**) — authorize actions only when a **prerequisite sequence** is formally completed; evaluate multi-step lifecycles.
- **Memory-aware policies** — let the engine reference the agent's directory for redundant/conflicting actions.
- **Adaptive optimization** — hill-climb toward the Goldilocks zone: task success with **no policy violations.**

### 12.4 Close

- Back to the golem: the rabbi controlled superhuman capability with a **single safeguard** carved on the head. We can **pull inscriptions out of the model** into **external, verifiable systems** — keeping models **creative** while stopping attackers (or a scheming AI) from bypassing safeguards.
- **We don't need to solve alignment to ship agents safely in certain settings.** Call to action: take **one rule** from your **CLAUDE.md / AGENTS.md**, set up a **hook** in your coding agent, and represent it as a **Cedar policy** (or your own hook).

---

## People, Tools & References Cited

- **Matthew Maisel ("Matt")** — speaker; AI/ML/statistics in cybersecurity.
- **Richard McElreath** — *Statistical Rethinking*; the Golem of Prague parable.
- **Ryan** — gave the preceding **harness-engineering** talk (referenced repeatedly).
- **Cedar** — policy language (engine specified in **Lean**, has an **SMT analyzer**); Rust crate.
- **Gemini 3** — model used to propose candidate policies; **Gemini CLI / Antigravity** hooks.
- **Claude Code / Codex / Cursor** — coding agents with hooks; **Claude "auto mode"** referenced.
- **MCP** — tool schemas used for grounding; policy agent exposed over MCP.
- **YARA-X**, **OpenAI safety model**, **information-flow-control model** — bundled guardrails.
- Benchmarks/frameworks: **METER chart** (task-length vs. success), **MedAgentBench** (EMR agents), **OWASP Top 10 for Agentic Applications**, the **lethal trifecta**.
- Standards referenced: **HIPAA, FINRA, GDPR.**
- Research venues: **ICML agents workshop**, an **LLM/legal-conference workshop**, **Black Hat Arsenal**.
- Concepts: auto-formalization, neuro-symbolic AI / "LLM-modulo", soundness/completeness/correctness, reference monitor, reversible/compensable/irreversible actions, defense in depth (alignment / AI control / security), fail-closed, linear temporal logic.

---

*Video: https://www.youtube.com/watch?v=yrUoxNTwYUo — Transcript via yt-transcript.sh; exhaustive outline generated from the full transcript.*
