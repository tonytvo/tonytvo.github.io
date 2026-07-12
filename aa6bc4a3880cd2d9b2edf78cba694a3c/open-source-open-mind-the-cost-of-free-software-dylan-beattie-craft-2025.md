---
title: "Open Source, Open Mind: The Cost Of Free Software - Dylan Beattie | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Dylan Beattie on the history and economics of free software — free-as-in-beer vs. free-as-in-freedom, secondhand software, shareware to GPL to Linux, cloud rug-pulls (Redis/Service Stack), the Sammy the Squirrel parable, and a proposed Spotify-style model for sustainable open source via WASI."
type: "reference"
tags: ["softwaredevelopment"]
---

# Open Source, Open Mind: The Cost Of Free Software - Dylan Beattie (Talk Outline)

> **Dylan Beattie** (creator of the **Rockstar** language; director of Ursatile; founder of comedy rock band the Linebreakers) on what "free" really means for software — **free as in beer** (no cost) vs. **free as in freedom/liberty** (in Hungarian, *ingyenes* vs. *szabad* — the Liberty/*Szabadság* Bridge is "free" as in freedom-to-cross, not free-of-charge) — and the tension between the two.

---

## 1. Two Kinds of Free

- English collapses two meanings. **Free-as-in-beer:** you get a beer for no money — but maybe you can't drink it (driving, meds, age), can't sell it (needs a license), so you just keep it and it goes flat. Free-of-charge ≠ free-of-liberty. **Instagram/Facebook/Google/TikTok** are free-as-in-beer but you must **engage with the platform** to reach people (unlike email, which you read in any client).
- **Secondhand software** is a weird idea: you buy a used car/washing machine/guitar, but you can't resell an Azure server you ran for a day. The exception: **console cartridges** — one licensed copy on unreadable plastic (Sonic) you could rent from Blockbuster, sell, or swap in the schoolyard.
- The "skateboard kids vs. computer kids" (Bristol) — games cost ~**a month's allowance**, so bored, broke teenagers **reverse-engineered copy protection** (cardboard decoder wheels, "uncopyable" discs), knowing it was illegal but "you weren't going to buy it anyway."

## 2. Shareware → Free Software → Open Source

- **Free-software-by-mail** ads in magazines: you paid for the **disc**, not the code (demos, ads like Ford's 1987 game). **Scott Miller / Apogee** pioneered **shareware**: *Kingdom of Kroz* split into 3 chapters — part 1 free, mail a check to his parents' Texas house for parts 2–3 → ~**$100k** in the late '80s.
- **id Software** (John Romero, John Carmack, Tom Hall): Carmack ported **Super Mario to the PC** ("impossible" — Nintendo replied "impressive; **bury it**" to protect cartridge sales); so they reskinned it into **Commander Keen** (Apogee shareware), quit their jobs, and made **Wolfenstein 3D** (360° freedom), **Doom** (network deathmatch — crashed college networks), **Quake** — milestones in games *and* **software distribution** (cover disc → copy from a friend → **website download**, 1997).
- Going online, people met the **GNU project / Free Software Foundation (Richard Stallman)** and its **four essential freedoms** (run for any purpose; study/modify; distribute copies; share modifications), enshrined in the **GPL** (drafted with lawyers). **Linus Torvalds** (21, Helsinki, 1991 — "just a hobby, won't be big and professional like GNU") posted the **Linux kernel** → GNU tools + Linux = a **complete free OS** (Dec 1991, GPL).
- **Christine Peterson** coined **"open source"** (1998) to escape the "free as in freedom, not beer → now we're arguing about beer" trap (Netscape open-sourced its source but still sold the browser); **Raymond & Perens** set up opensource.org; the Free Software Summit became the **Open Source Summit**. Companies like **Red Hat / Slackware** sold "free software" on CDs with printed manuals — you pay for **convenience**, not the code ("Can I have $80 to buy free software?" — the crux of 20 minutes of confusion).

## 3. The GPL's Transitive Freedoms & the Cloud

- The GPL's "**no further restrictions**" clause makes the freedoms **transitive, perpetual, irrevocable** — you can't take free software and make it un-free. This terrified **Ballmer** ("Linux is a cancer," 2002 — wrong about Linux, IP, *and* cancer, but a good soundbite) because open source threatened Microsoft's Windows/SQL/Exchange revenue.
- Then Microsoft flipped — **.NET is MIT-licensed**, contributes to Linux — because **the cloud revolutionized how you make money from software.**
- **Sammy the Squirrel parable:** Sammy gives *Acorn Adventure* away free; **Jeff the Raccoon** monetizes it on pay-to-play arcade machines (and gets a solid-gold helicopter). When Sammy ships a sequel with "still free, but pay me $1 if you run it on a pay-to-play cabinet," the woodland animals cry **"rug pull! traitor!"** and **fork** it — while Sammy just wanted to feed his family for winter. Trillion-dollar clouds (**AWS/Google/Azure/Alibaba**) profit from free software they never paid for — which is **how open source was designed to work** in the '90s.

## 4. Rug-Pulls, Relicensing & "You're Owed Nothing"

- **Redis** restricted cloud reselling → controversy → the **Valkey** fork + Microsoft's **Garnet** (protocol-compatible reimplementation) → then Redis relicensed under the **AGPL** ("clever"): network interaction counts as **distribution**, so a cloud reselling it would have to **publish its whole stack** (they won't — AGPL is rare for exactly this reason). Most "open source" uses **permissive** licenses (MIT/BSD/Apache).
- **Service Stack** (Demis) went **hybrid-license 11 years ago** (free for hobby/student/startup, paid for money-making companies) — Beattie's boss ("What's an API?") made them switch away — but it gave Demis **financial independence** to work on whatever he wants, made **more money than any prior job**, and shipped version 8. A "free forever" fork (EndServiceKit) thrived for ~a year, then inherited the **same sustainability problem** (paying customers went to the paid version, entitled free users came to the fork).
- **The most important slide:** the internet is full of good code you can download and use to make money — and **people who share their source owe you nothing.** You got the code and the freedom to run/fork/modify/sell it; you're **not entitled** to support, fixes, or your use case being handled. The opposite extreme is **Adobe Creative Cloud** lock-in (subscription, proprietary formats, lose everything if they raise prices or shut auth servers).
- **Why contributors sign over ownership** (CLAs to the .NET Foundation, React → Meta): some are **paid** to write free software; some do it **for fun**; and many are **Sammy Squirrels** who had 2 days/week of company time until layoffs — now drowning in a GitHub backlog and getting **abused** when they try to make it sustainable.

## 5. A Spotify Model for Open Source & "Free as in Weekend"

- Getting orgs to **sponsor** open source fails (no PO/procurement path for a $500 donation), but the same orgs pay a **six-figure cloud bill** monthly without noticing — so **grab money while the wallet is already open**: a **consumption-based, Spotify-style** model tied to cloud/package bills (not trivial — "can't solve it in a basement with Node.js"; needs banking/meetings).
- **Number-crunch (NuGet):** ~**40 billion downloads/month**; assume ~2.4M active users on a tiered plan (free for students/hobbyists/startups; $15/limited co; $500/enterprise) → **~$43M/month** distributable (~$0.001/download, i.e. 1,000 downloads = $1 — "insultingly small," but an order of magnitude better than today). Effects: **AutoMapper/Moq** ~$13k/month (quit-your-job money), **ImageSharp** ~$3k (a day off / a new laptop / a bug-fix consultant), **NAudio** (Mark Heath) ~$120 (a laptop every couple years / a Disneyland apology). "The numbers are in the right ballpark."
- Same idea as Red Hat/Slackware in the '90s: the code stays **free** (compile it yourself), but **convenience is worth paying for**. Doing this to existing ecosystems would cause a riot ("if it used to be free, it's very hard to take away") — but **WASI (WebAssembly System Interface)** could create a **universal binary package repository** (a Rust image encoder used from Go, a Haskell calc engine, etc. — language-agnostic) where a fresh, sustainable model could be built from the start.
- The **third kind of free** — **"free as in weekend"**: not free-as-in-beer (you pay with data/independence/accountability) nor free-as-in-speech, but a **sustainable ecosystem** you can walk away from on a Saturday knowing it'll still be there next week.

---

## People, Companies & References Cited

- **Dylan Beattie** — speaker; creator of Rockstar.
- **Scott Miller / Apogee**, **John Romero / John Carmack / Tom Hall / id Software**, **Richard Stallman / GNU / FSF**, **Linus Torvalds**, **Christine Peterson**, **Eric Raymond / Bruce Perens**, **Steve Ballmer / Microsoft**, **Demis / Service Stack**, **Mark Heath / NAudio**.
- Projects/tech: Sonic/Mario, Wolfenstein 3D/Doom/Quake, GPL/AGPL/MIT/BSD/Apache, Linux/Apache/MySQL/Postgres, Red Hat/Slackware, Redis/Valkey/Garnet, .NET/NuGet/AutoMapper/Moq/ImageSharp, Adobe Creative Cloud, WebAssembly/WASI, Spotify.
- Concepts: free-as-in-beer vs. free-as-in-freedom vs. "free as in weekend," shareware, four essential freedoms, transitive freedoms, rug-pull/relicensing, CLAs, consumption-based OSS funding.

---

*Video: https://www.youtube.com/watch?v=GkKBm5VGYdM — Transcript via yt-transcript.sh; outline generated from the transcript.*
