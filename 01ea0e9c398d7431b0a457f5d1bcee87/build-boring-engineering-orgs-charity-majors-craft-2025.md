---
title: "Build \"boring\" engineering orgs - Charity Majors | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Charity Majors in praise of normal engineers — teams (not individuals) own software, so build socio-technical systems where ordinary engineers can consistently move the business forward."
type: "reference"
tags: ["softwaredevelopment"]
---

# Build "boring" engineering orgs - Charity Majors (Talk Outline)

> Charity Majors (co-founder/CTO Honeycomb) — "In Praise of Normal Engineers": individual brilliance matters, but it's not what sets the pace of delivery. **Teams own software; the leader's job is to craft high-performing teams.**

---

## 1. The 10x Engineer Myth

- Some engineers really are dramatically more productive — "so what?" It's not individual prowess that sets delivery pace. **The smallest unit of software ownership is the team**: everyone shares the same pipeline, so if it takes the slowest engineer 5 hours to ship a line, it takes the fastest one 5 hours too. Individual owners are **single points of failure** (fine for a young startup racing for product-market fit; not for a company planning to last years). "If you must 10x something, build **10x engineering *teams***."
- Real productivity = **business impact**, not lines of code. If you need a staff+ engineer just to move the business forward day by day, something is wrong. Obsessing over pedigrees (ex-Google/Facebook, "top 10% of talent") is backwards and "lets leaders off the hook" — *any* jackass can build an org where the world's best engineers ship; the competitive advantage is an org where **normal engineers** convert effort into product momentum (and it draws from a broader talent pool).

## 2. Design Systems for Normal People

- Nobody is born a great engineer — "great engineers are forged." Hire for people's **strengths**, but design **socio-technical systems** for all the ways we're **normal**: cognitive biases, forgetting, impatience, responding to a 2am outage worse than midday, skimming repeated text. When systems are navigable by normal engineers, their excess brilliance pours into the **product** instead of fighting the system.

## 3. Building 10x Teams (the practices)

1. **Keep the deploy interval short** ("deploy with the heartbeat of your company") — long laggy loops cause the "death spiral" (bigger diffs → slower reviews → batched breaky deploys → more specialists waiting on each other).
2. **Make it easy to do the right thing, hard to do the wrong thing** — platform engineering = *treating engineers like people* (self-service deploy/rollback/debug).
3. **Every engineer deploys their own code**, checks it works, and acts — plus **feature flags**; don't split devs from ops (broken feedback loop).
4. **Invest in observability/tests/tooling** — poor sensemaking is "the dark matter of software engineering"; visualize CI/CD as a trace to see where time goes.
5. **Have internal-tools people** — "if it's everybody's job, it's nobody's job"; set internal SLOs (e.g., pay down anything over an hour to test+deploy).
6. **Learning is the norm, growth is the baseline** — inclusion is the first step to a real meritocracy; **diverse teams are resilient teams** (monocultures move fast until they must scale/change); ask "what axes of diversity do they bring?" not "culture fit."
7. **Assemble a range of levels** — the best teams aren't all staff+ (bored, on autopilot); everyone should be challenged, learning, teaching.

## 4. A Great Org Mints World-Class Engineers

- Excellence is **learnable, situational, specific** — not a fixed personality trait; the **fundamental attribution error** makes us credit the person, not the system. "Talent is as common as dirt; opportunity is not." Your company is a system — *what kind of engineer does it forge?* Investments in leveling up juniors get reused every time someone joins or changes teams.
- Shift hiring from "the best people" to **the right people** (excited about your problems, good teammates, **good communicators**). Honeycomb's interview is a *conversation* about a take-home ("why did you do this?") — communication predicts collaboration. Q&A: be conservative "close to the bits on disk" (databases/OS), playful in dev tools/frontend; a **golden path** supports the common case; put devs on call to tighten feedback loops, but make it sustainable — "it's not okay that *anyone's* woken up at 3am."

---

*Video: https://www.youtube.com/watch?v=SWiyikJGcjc — Transcript via yt-transcript.sh; outline generated from the transcript.*
