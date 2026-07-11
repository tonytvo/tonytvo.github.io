---
title: "Monte Carlo for SaaS: Simulating The Effect Of Product Decisions – Zoltán Dávid | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Zoltán Dávid (ConfigCat) on modeling a SaaS business as a Markov chain and running Monte Carlo simulations to compare product decisions — and why reducing churn beats marketing."
type: "reference"
tags: ["softwaredevelopment"]
---

# Monte Carlo for SaaS: Simulating The Effect Of Product Decisions – Zoltán Dávid (Talk Outline)

> Zoltán Dávid (co-founder, ConfigCat — a bootstrapped feature-flag service, 500+ customers) on modeling your SaaS as a **Markov chain** and running **Monte Carlo** simulations to forecast growth and compare decisions.

---

## 1. Beyond the Funnel

- The "funnel" is a naive way to understand how users move through a product. Borrow from **weather forecasting**: build a **Markov chain** (states + transition probabilities), then run a **Monte Carlo** simulation (millions of runs) to estimate the distribution of outcomes N days out.

## 2. Modeling ConfigCat

- States on two axes: **awareness → signup/setup → paying** (left→right) and **active → dormant → gone** (top→bottom), plus a forever-free plan. Feeding in ConfigCat's real 2018 conversion probabilities, the simulator shows a spike of 10,000 users/7 days fizzling to a couple of paying customers, and a steady 100 users/day growing to only ~7–8 paying customers in 2 years ("how ConfigCat would have gone if never improved").

## 3. Why It's Useful — Mapping Advice to Arrows

- Each classic growth tactic improves a specific **transition arrow**: SEO/LLM results/comparison pages → awareness; better landing page/pricing/interactive demo → signup; retargeting → dormant-returns; simpler UI/checklists/templates → setup; email segments → several arrows; **stable, reliable product** (feature flags + APM) → reduces churn; great support → **referrals** (dashed arrows bringing strangers). Your analytics tells you which arrows are weak, guiding which tactic to apply.

## 4. Simulating Alternative Futures

- Live "competition": marketing's **retargeting** (+40% dormant-returns) vs. engineering's **feature flags** (less churn). Over a 10-year deterministic run, **feature flags won** — ~20% more revenue (~$1.8M vs $1.5M) *and* more users (~680 vs ~490). Running all tactics on a baseline startup: **referral programs** and **email sequences** underperformed expectations; **reducing churn** (stable product) was the biggest lever.

## 5. Takeaways & Q&A

- **Model your SaaS, simulate, compare futures, then implement the winning parameters** in real life. And "feature flags are cool."
- Conversion numbers are **assumptions** — Google them, then run **low/likely/high** variants; the **winner is usually directionally correct** even if absolute numbers diverge (don't trust it beyond 1–2 years).
- Biggest surprise: **a stable product earns the most long-term** — once the marketing flywheel spins, low churn beats mediocre marketing (ConfigCat got 500 customers, incl. governments, with ~zero marketing, because setup took 10 minutes and it was reliable).
- Most expensive mistake a sim could've prevented: **Google Ads don't work for bootstrapped B2B SaaS** (VC-funded competitors bid prices up). Tool is freely available at `sas-sim.configcat.com` (may be open-sourced on demand).

---

*Video: https://www.youtube.com/watch?v=OBVC8HXaJEE — Transcript via yt-transcript.sh; outline generated from the transcript.*
