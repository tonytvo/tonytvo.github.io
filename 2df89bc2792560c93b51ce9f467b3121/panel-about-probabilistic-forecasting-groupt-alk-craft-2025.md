---
title: "Panel about probabilistic forecasting - Group talk | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "A Craft 2025 panel (Daniel Vacanti, Colleen Johnson, Nigel Thurlow, Gaia Bashiri, hosted by Daniel Terhorst-North) debating probabilistic forecasting, Monte Carlo, distributions, and stability."
type: "reference"
tags: ["softwaredevelopment"]
---

# Panel about probabilistic forecasting - Group talk (Panel Outline)

> A panel (hosted by Daniel Terhorst-North) with **Daniel Vacanti**, **Colleen Johnson** (ProKanban.org), **Nigel Thurlow** (lean/Deming), and **Gaia** (a trained statistician / insurance risk manager) — which turned into an unresolved but revealing debate about the fundamentals.

---

## 1. Opening Positions

- **Vacanti:** you can't manage software without managing risk, and you can't manage risk without forecasting — and *all forecasting is probabilistic* (so "probabilistic forecasting" is a tautology).
- **Colleen:** it gives teams a better starting point for "when will it be done" **without** estimation overhead (points/hours).
- **Nigel (Deming/lean):** a system must be understood as a whole; forecasting without understanding **variation** leads to tampering; at scale, complexity is in communications/interactions, not the work.
- **Gaia (statistician):** data-driven but painfully aware of statistics' shortcomings; hesitant to embrace it for real deliveries.

## 2. The Core Debate

- **Empirical sampling:** the method samples historical **throughput** to forecast future dates via **Monte Carlo** simulation; the big assumption is "the future roughly looks like the past."
- **"Is there a distribution?"** Vacanti: "no *well-known* statistical distribution — it's just your data" (Gaussian/log-normal are "made-up hacks"). Gaia: that *is* a distribution — the **empirical distribution** — and non-parametric methods only converge with **enough data** (a few weeks isn't enough, especially with high variability).
- **Stability vs. predictability:** Nigel invokes Little's Law and Shewhart's control-chart definition of stability; Terhorst-North distinguishes **predictable** (you can characterize the drivers, even if spiky) from **stable** (within bounds). If a system is stable enough to Monte-Carlo, why not simpler averaging (lean cycle/lead/takt time)? Counter: variability is fine, you just need more data and a way to *quantify* the risk.

## 3. Where It Works / Fails

- **Good use:** distributions of **throughput** for how many work items ship in a period → grown-up range-based conversations. **Misuse ("Monty Python syndrome"):** using it to answer "will *this one* project overrun?" — like asking about a single surgery outcome; the tool answers portfolio-level questions ("what % of 100 projects finish").
- **Communication problem:** no one outside stochastic academia intuits 85% vs 95% confidence; Gaia's insurance execs need "1-in-200-year event," not percentiles. A dropping confidence % should **invite hard questions** (what changed?) — but management treats the forecast date as a **target**, a management/culture problem, not a math problem.

## 4. Outcome

- The host declared the panel "failed" — it never got past the fundamentals because the participants **fundamentally disagreed on the meaning of "distribution," "stability," and "predictability."** Sharp, occasionally heated exchanges (Vacanti vs. Nigel; Gaia defending her statistical credentials). Takeaway: everyone has homework; Colleen's practical note — try Monte Carlo in a spreadsheet, randomize your data, see the variability, and free developers from hours of story-pointing.

---

*Video: https://www.youtube.com/watch?v=ryFkjHxKT-M — Transcript via yt-transcript.sh; outline generated from the transcript.*
