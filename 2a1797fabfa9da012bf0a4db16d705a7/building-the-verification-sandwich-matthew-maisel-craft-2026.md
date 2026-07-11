---
title: "Building the Verification Sandwich – Matthew Maisel | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Matthew Maisel on pulling agent safety rules out of the prompt into deterministic, verifiable policy-as-code (Cedar) via auto-formalization — the 'verification sandwich' and policy-in-the-loop hooks."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Building the Verification Sandwich – Matthew Maisel (Talk Outline)

> Matthew Maisel (AI/ML + cybersecurity) on giving back something you *can* inspect when handing agents the keys: take one safety rule out of the prompt and enforce it as **policy-as-code** any agent harness can check.

---

## 1. The Golem Framing

- The Golem of Prague — animated by "emeth" (truth), superhuman but no wisdom; wipe one letter → "meth" (death) and it falls to clay. We've long built "golems" (statistical → ML → LLM → world models); regard them with **utility and apprehension**.

## 2. Where Risk Enters

- Training (pre/mid/**post-training** shapes instruction hierarchy, tool calling) and inference-time (think/search/**act**) — the "act" moment is where tokens become **real** and mutate the world.
- Agents at the **system layer** = model + **harness** (memory, skills, tool affordances) + sub-agents. Capability is rising (METR task-horizon curve). Behavior is **opaque, non-deterministic, brittle, jagged, and exposed** (prompt injection).
- **Defense in depth** (none sufficient alone): **alignment** (post-training, unverifiable from outside), **AI control** (monitor whether a misaligned model *can* subvert), and **security** (adversarial defenses). This work sits at **control ∩ security** — a **deterministic boundary outside the model** an attacker can't argue with.

## 3. Auto-Formalization

- Turn ambiguous natural-language policy into **formal statements** a symbolic engine can check for **soundness** (no hallucinated rules/entities — the hard gate), **completeness** (captures intent — approximated), and **correctness** (matches business expectations — tested).
- What's new: capable models can now **translate intent into policy languages**, lowering the specification burden. But don't trust the model alone.

## 4. The Verification Sandwich

Three layers producing a **verified policy set** from an agent card + tool schemas:
- **Grounding (bottom):** derive valid entities/actions/identifiers from **MCP tool schemas** so nothing is hallucinated.
- **Model (middle):** an LLM (e.g., Gemini 3) proposes **candidate policies** from intent + grounding.
- **Safety (top):** a **generator–critic loop** — a **hard critic** (the deterministic **Cedar** compiler/SMT analyzer, checks syntax/schema/contradictions, gates output) plus a **soft critic** (LLM-as-judge for semantic alignment, *no* authority to release). The model only **proposes**; verifiers **dispose**.

## 5. Why Cedar

- It's an **authorization** language (can this agent take this action on this resource in this context?): **human-readable, fast, and analyzable** (formally specified in Lean + SMT analyzer → detect contradictory/redundant/shadowed rules). Enforces a **schema** (rules can't drift from request shape) and gives **auditability/lineage** — unlike Rego/OPA or opaque guardrail models.
- Policy **intent** comes from system prompts ("don't drop tables"), compliance docs (HIPAA/FINRA/GDPR), specs, skills.

## 6. Does It Work?

- On **MedAgentBench** adversarial trajectories (EMR agent trying to exfiltrate PHI): auto-formalized Cedar caught **~86%** (42/49) of violations that got past hand-crafted rules; **94–100%** on POST/data-sending trajectories. The point isn't matching a human security engineer — it's **covering more policy automatically** and complementing hand-written rules.
- **Not everything formalizes** (tone, persona, "don't hallucinate", common sense) — for those, compose with safety/guardrail models as inputs/labels; fail **closed** (safety over availability).

## 7. Policy in the Loop — Hooks

- Characterize agents by **autonomy** (operator→collaborator→consultant→…observer; beware **consent fatigue** — ~93% of Claude Code permissions auto-approved), **efficacy**, **goal complexity**, **generality**; and actions by **reversibility** (reversible / compensable / **irreversible** like payments/emails).
- Model the harness as a **trajectory of events** (action, observation, control, state). Map threats (the **lethal trifecta** — untrusted input + sensitive data + exfiltration channel; OWASP Agentic Top 10) to these events, and place a **reference monitor** (always invoked, tamper-proof, verifiable) that mediates every event.
- Use converging **coding-agent hooks** (Claude Code, Codex, Cursor, Gemini/Anti-Gravity) as enforcement points; open-source reference implementation in Rust normalizes hook events → Cedar engine + baseline guardrails (YARA-X, information-flow control, a safety model) + trajectory store; a **policy agent** (over MCP) authors Cedar policies co-pilot-style.

## 8. Demos & Takeaways

- Live: block destructive SQL (`DROP` without `WHERE`); **information-flow control** taints a trajectory with "highly confidential" data to block web fetches; a marketplace skill trying to exfiltrate env vars is blocked (YARA + safety model).
- The verification sandwich provides **truth outside the model** — you don't need to solve alignment to ship agents safely in some settings. Try it: take one rule from your `AGENTS.md`/`CLAUDE.md` and enforce it as a hook/policy. Open trade-off: the **security↔utility "Goldilocks zone."**

---

*Video: https://www.youtube.com/watch?v=yrUoxNTwYUo — Transcript via yt-transcript.sh; outline generated from the transcript.*
