---
title: "Open Source, Open Mind: The Cost Of Free Software - Dylan Beattie | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Dylan Beattie on the history and economics of free software — free-as-in-beer vs. free-as-in-freedom, shareware to GPL, cloud rug-pulls (Redis), and a proposed Spotify-style model for sustainable open source."
type: "reference"
tags: ["softwaredevelopment"]
---

# Open Source, Open Mind: The Cost Of Free Software - Dylan Beattie (Talk Outline)

> Dylan Beattie (creator of the Rockstar language) on what "free" really means for software — free **as in beer** (no cost) vs. free **as in freedom/liberty** (Hungarian *ingyenes* vs. *szabad*) — and the tension between the two.

---

## 1. Two Kinds of Free

- Free-as-in-beer software (Instagram/Facebook/Google) costs no money but isn't free-as-in-liberty — you must engage with the platform. You rarely buy/sell **secondhand software** (except console cartridges — one licensed copy you could resell/swap). Copy-protected games cost a teenager "a month's allowance," so kids reverse-engineered the protection.

## 2. Shareware → Free Software → Open Source

- **Apogee/Scott Miller** pioneered shareware (Kingdom of Kroz — part 1 free, mail a check for the rest → ~$100k). **id Software** (Carmack/Romero/Hall) ported Mario to PC (Nintendo said "bury it"), then made Commander Keen, Wolfenstein 3D, Doom, Quake — milestones in both games *and* software distribution (cover discs → copying from friends → website downloads).
- **GNU/FSF (Stallman)**: the **four essential freedoms** and the **GPL** (freedoms are transitive, perpetual, irrevocable — "no further restrictions"). **Linus Torvalds** (1991) added the kernel → a complete free OS. **Christine Peterson** coined **"open source"** (1998) to describe free-as-in-speech-but-not-beer. Companies (Red Hat/Slackware) sold "free software" on CDs (you pay for convenience, not the code) — the crux of the whole confusion.

## 3. The Cloud Changes the Economics

- Microsoft went from "Linux is a cancer" (Ballmer, 2002) to open-sourcing .NET — because **the cloud** revolutionized making money from software. **Sammy the Squirrel** parable: you give a game away free, someone else (Jeff the Raccoon) monetizes it on arcade machines and gets rich; when you add a "pay if you run it commercially" clause, the community screams **"rug pull!"** and forks it. Trillion-dollar clouds (AWS/Google/Azure) sell services built on free software they never paid for — which is *how open source was designed to work*.
- **Redis** restricted cloud reselling → **Valkey** fork + Microsoft's **Garnet** → then Redis relicensed under **AGPL** (network use counts as distribution, so a cloud would have to publish its stack — they won't). **Service Stack** (Demis) went hybrid-license 11 years ago: free for hobby/student/startup, paid for money-making companies → gave him **financial independence** to work on what he wants; a "free forever" fork won for a year then inherited the same problem.

## 4. Sustainability & "Free as in Weekend"

- **People who share source owe you nothing** — you got the code and the freedom to run/fork/sell it; you're not entitled to support or fixes (the alternative is Adobe-style lock-in). Contributors sign over ownership via **CLAs** (paid, for fun, or ex-employed maintainers now drowning in issues with no company time). 
- Proposal: a **Spotify-style, consumption-based** model tied to **cloud/package bills** (grab money "while the wallet is already open"). Crunching NuGet numbers (~40B downloads/month, ~$43M/month distributable at $0.001/download): top packages (AutoMapper, Moq) → ~$13k/month (quit-your-job money), mid (ImageSharp) ~$3k, niche (NAudio) ~$120 — an order of magnitude better than anything today. **WASI** (WebAssembly System Interface) could create a universal **binary package repository** where this becomes possible. The third kind of free: **"free as in weekend"** — a sustainable ecosystem you can walk away from and come back to.

---

*Video: https://www.youtube.com/watch?v=GkKBm5VGYdM — Transcript via yt-transcript.sh; outline generated from the transcript.*
