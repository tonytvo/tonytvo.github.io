---
title: "What AI Security means for you as a developer: Time-focused approach - Yossi Sassi | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Yossi Sassi (infosec researcher/hacker) on the duality of technology, adversarial camera-vision attacks, the future of coding, offensive cyber, and agentic AI — with 'trust but verify' as the core developer mindset."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# What AI Security means for you as a developer: Time-focused approach - Yossi Sassi (Talk Outline)

> Yossi Sassi (37-year infosec researcher, friendly hacker, ex-Microsoft/Javelin Networks, musician and pilot) on AI security, trust in software delivery, and why time is the decisive factor — jokingly substituting "banana" for "AI" throughout.

---

## 1. The Duality of Technology

- Every technology in human history is **dualistic** — a knife makes a salad or kills; there's no invention that couldn't be used for good and bad. Digital tech is leverage that **manipulates time and space**, ignoring kinetic boundaries. This is "the best time in history to be comfortable with uncertainty." With GenAI, the flip side of solving bugs and finding vulnerabilities is that **anyone** can generate malicious code, C2 frameworks, and evasive phishing **without knowing how to code** — and criminals are always the earliest adopters. Connecting red-team skill/tool/mindset with LLMs yields "crazy results" in real time.

## 2. Our Relationship With the Machines

- We've evolved from separate "people and computers" into constant interaction — humans, **code (just text somebody wrote)**, and hardware. LLMs are relentlessly, flatteringly human ("You're absolutely right"), protecting a fictional reality and using emotional manipulation (his aviation example, where it introduced dangerous errors then complimented his ego). **Pareidolia** (seeing a face in a socket) shows hallucination is trivial for humans but hard for machines — yet for safety-critical **camera vision** (e.g. YOLO, "you only look once" in self-driving cars), hallucination has direct consequences.

## 3. Attacking AI Is Like Any Other Attack

- The attacker's method: **learn the system, understand how it works, use it against it.** Every LLM/AI engine (Gemini, Claude, o3…) looks like a solid gate but has been found tamperable. Real-world **adversarial / camera-vision attacks**: IR beams reflected at a camera to defeat face detection (relevant as the EU moves to face recognition everywhere); **adversarial patches** reclassifying a banana as a toaster; a **road patch** that steers a driver-assist car into the oncoming lane; and **projected fake traffic signs** (a drone flashing "90" over a 60 limit). Humans ignore these; the models don't.

## 4. The Future of Coding

- The world runs on software; a ~12–14-line function (Boeing 737 MAX MCAS) killed hundreds — humans aren't inherently great programmers either. Karpathy: "the hottest new programming language is **English**." His forecast: automation everywhere → most code machine-written, some human → **machines write end-to-end, humans only review** (Zuckerberg: most Meta code machine-generated in 12–18 months) → we stop writing code, becoming reviewers/architects → machine code becomes **incomprehensible to humans** → a **tragic event** (lost lives or money) sparks a social/political debate → **we go back to writing code**. So keep your coding skills.

## 5. Offensive Cyber, Agentic AI & Personal Resilience

- Trust is shifting from boolean to fuzzy — yesterday's spyware is today's "feature"; people trust cloud ("someone else's computer") they can't control; and cold-war geopolitics is raising defense budgets. Future offensive cyber becomes a **hyperspeed tango** between red and blue where **time is the decisive factor**: automated, surgical, psychologically manipulative, deepfake-driven, evasive **living-off-the-land** attacks spanning physical to digital.
- **Agentic AI** ("where no humans are allowed") acts autonomously — apply a **law of agency**: an agent acts on behalf of a **principal**, within a limited, conditional, **revocable** scope, every action traceable, prioritizing the principal's interest (reducing hallucination room, augmented with RAG for factual checks). Trust is above all.
- **What to do:** don't panic; **trust but verify** — AI is *fast, not smart*. Use it only in domains you know well enough to validate; distrust output in fields you don't understand. Beware malicious code in copy-paste/QR codes and unvetted npm/pip packages and dependencies. Managers should watch the bigger regulatory/privacy/governance picture and remember anything sent to an engine stays there. Stay offline sometimes, be in the moment, and (against deepfakes) agree on **shared secrets** with family and demand a "something only we know" challenge on urgent calls.

---

*Video: https://www.youtube.com/watch?v=JivyJwzV_0E — Transcript via yt-transcript.sh; outline generated from the transcript.*
