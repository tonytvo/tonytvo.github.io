---
title: "Ian Thomas – Podcast Stage | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "A Leadership Anonymous 'Leadership News' roundtable at Craft 2026 (the scheduled guest Ian Thomas had a conflict) — the AI-native org and the shrinking translation layer, iPhone anti-snatching and hardware lock-in, Meta glasses vs. the Instagram-chatbot exploit, Charity Majors on enthusiasts vs. skeptics, curiosity/inner-child/intuition, 'what to do when you're not detail-oriented', and data-center water use."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Ian Thomas – Podcast Stage | Craft 2026 (Conversation Outline)

> Listed as "Ian Thomas – Podcast Stage," but **the scheduled guest had a conflict**, so this became an **ABK / _Leadership Anonymous_ "Leadership News"** episode recorded live at Craft 2026 — a casual, news-driven roundtable (the hosts liken it to "having a beer and listening"). Hosts: **Dávid Schneitoffer** ("Kispócok" — startup alumnus, beginner surfer, engineering director), **Gábor Náday** ("Máté"/"Mefi" — community builder, lifelong blogger, engineering director), and **Fanni / Karolina Tóth** (cognitive scientist → high-performance IT coach → sports dive leader; "expert in psychedelics and reinventing myself"). The podcast (abkpodcast.hu, ~4 years) usually runs monthly in Hungarian; "Leadership News" is a newer, shorter weekly format (their longest regular episode — on hiring — ran ~3h40m). Topics, mostly AI, with a companion newsletter that lists every article referenced. Fanni's role: "they bring the news, I bring the champagne."

---

## 1. Anatomy of an AI-Native Org

### 1.1 The 30-year pyramid
- For 30 years software orgs were shaped like a **pyramid**, with most head count in the **middle** doing **translation work** — turning what the business wanted into a language "us nerds could understand so we can tell the computers what to do."

### 1.2 Translation, not code, is what's getting cheap
- Everyone talks about **code/features** getting cheap; the article's real point is that the **translation work** is getting cheap — so the pyramid narrows in the middle.
- The layered model: **why** (top — why the company exists) → **what** (middle — what to achieve) → **how** (bottom); managers sat atop the "how," translating between business and engineering.

### 1.3 The provocative line, and the pushback
- Quoted line: *"If a manager isn't contributing to the why, the what, or the trust system that holds the how, it's hard to say why they're doing it anymore."* — i.e., pure translation is "solved" by agents, so fewer such managers are needed.
- Dávid: it's likely a **"false prophecy"** that managers vanish — their **role and size change**, but the persistent problems remain; a good manager already solved the translation *and* managed people.
- Fanni's take: soon whoever wrote the article will realize you **need managers** for meaningful communication between people, teams, and projects.
- The manager's real work isn't tactical (engineers are good at tactical issues) — it's **collaboration, how teams work together, unclear business logic** ("I'm biased, I'm a manager comforting myself with these sentences").

### 1.4 People problem, not tools problem
- The article calls out managers **denying** the change.
- Recurring lesson: it's usually a **people problem, not a tools problem** — don't "fix" it with a double-blind, VPN-anonymized feedback system; **teach people to have tough conversations** and not save feedback "until it's an apocalypse."
- Fanni's company's twist: feedback is anonymous, but everyone adds "**feel free to share my name next to this feedback**" — because knowing the source lets you actually talk about it.

---

## 2. iPhone Anti-Snatching & Hardware Lock-in

### 2.1 The feature
- Apple is developing an **anti-snatching feature that locks stolen phones immediately** — curiosity about *how* the instant lock triggers (handover? pocket?).

### 2.2 Why iPhones are already hard to resell
- Each component is **cryptographically bound** to the specific iPhone: swap a display (or even a cable) into another device and it won't work unless a **certified repair shop** authorizes it via an admin panel.
- "That's why they're so expensive." Skeptic's note: "a night market here will solve that issue in a minute."

### 2.3 Fanni's stolen-iPhone recovery story
- Her iPhone 14 was stolen; from a friend's car she tracked it via **Find My iPhone** to a sketchy-neighborhood mobile-repair shop.
- She saw a man leave with a phone matching hers (no case), confronted the shop owner, then **chased the man down in the parking lot**, stopped his car, and he admitted he "found it."
- She recovered it; on restart it seemed fine, then started **beeping and announcing it was stolen and belonged to "Fanni Karolina,"** demanding return to the owner — confirming iPhones are genuinely hard to get rid of.

---

## 3. Meta Glasses vs. the Instagram Chatbot Exploit

### 3.1 The delight (Meta glasses)
- At a coffee shop (**Dorado, 7th District, Budapest**) she tried a stranger's **Meta glasses**: asked the weather (a 10-sentence humidity answer), tried Hungarian (it could, until the owner's phone dropped Wi-Fi), and loved that it **whispered background music** only she could hear — "finally, background music to my life… we live in the future."

### 3.2 The dread (the exploit)
- The same week, **Instagram accounts were hijacked** by **social-engineering Meta's support chatbot** (cheaper than human support): talk to the bot long enough that it **believes you own the account** and grants access — even **disabling MFA** and sending codes to an attacker-stated email.
- "This is not the future — this is the present" (actually the recent past — the bug was fixed a few days prior). Hackers are always a step ahead of whatever Apple/Meta build.

### 3.3 The no-human-support gripe
- With a **bank** you can still fight through a chatbot to reach a **human**; with **Google/Meta/Netflix** you never will — they're too big and/or fired the staff ("here's the AI chatbot that gives away your Instagram instead").
- Aside: a former Meta **moderator** reported being badly understaffed, and most quit after seeing terrible content — "AI will solve that too."

---

## 4. Enthusiasts vs. Skeptics (Charity Majors)

- **Charity Majors** (blog; conference speaker — likely at **Compass** not Craft) argues AI **enthusiasts and skeptics** on engineering teams are **both responding to genuine existential threats** but have **stopped talking to each other**, creating a silo.
- The line: **"AI enthusiasts are in a race against time; AI skeptics are in a race against entropy."**
- The fix: **sit down and talk**, and **share the whole story — including the bad news** (people over-share AI wins). Dávid follows **@ctitzen** (a strong AI critic) alongside the fanboy side to keep balance.
- Meta-skill: **hold two difficult/opposing truths at once** — be enthusiastic about AI *and* know it's imperfect; disagree with someone and still love/respect them. Dávid: this is what Hungarians most need to learn after 1.5 decades of "them vs. us → they're stupid" polarization (cf. Android-vs-iOS fights).
- Adopts **Kent Beck's** phrase: the **"unpredictable genie"** that "will solve everything in an unpredictable, non-deterministic way."

---

## 5. Curiosity, the Inner Child & Intuition

### 5.1 Intelligence ≠ emotion ≠ humanity
- We're teaching AI "everything we know," forgetting intelligence isn't emotion or humanity.
- Humans are wired for **simplistic friend/foe thinking** (survival: "can I trust this person or should I draw my knife?") — the untrusting survived and reproduced, so we're engineered for "good/bad, like/don't like." Dávid: simplifying is *necessary* given how much we face — but Fanni urges **making a space in your head that understands it's not that simple, and getting curious.**

### 5.2 Curiosity as the driving force
- Recurring theme of their conversations: **curiosity** should drive software development, personal development, AI development — and personal relationships ("the death of love is when you stop being curious about your partner and start expecting them to behave a certain way").

### 5.3 "Kids just know"
- Children are unbothered and **in tune with intuition** — they know they're too hot for long pants, or when they're full — and "parents make them forget those things."
- Dávid's realization: his belief that he "can't tolerate cold" traces to childhood memories of parents forcing long pants ("no, it'll be too cold") while he walked home sweating.
- Reconnect with your **inner child / sense of amazement**: Fanni canceled her gym membership to **jump rope at the playground** and watched a snail cross the street with delighted two-year-olds ("I didn't realize snails were so fast"). Go outside, spend time in nature.

### 5.4 The Roost "slow social" app
- **Roost** (icon: a pigeon) is a "slow social media": you send a **bird** carrying a message, and it arrives at the **speed that bird actually travels** (based on real locations).
- From it, Dávid learned a **snail travels ~2 km/h** (a "rain" snail message) — so a message 10 km away takes ~5 hours, "surprisingly fast."

---

## 6. "What to Do When You're Not Detail-Oriented"

- A newsletter article: "Captain Obvious," but valuable for being **hands-on/specific** rather than high-level.
- Method: **identify the skills you're bad at by noticing dread** — e.g., the "weird pain in your stomach around Sunday 4pm" before a Monday presentation.
- Then **deliberately do those uncomfortable things frequently** to get out of your comfort zone, so they stop blocking your opportunities.
- Fanni: **listen to your body** — those symptoms signal what's happening. Quotes: **"You don't hate Mondays, you hate your job"** and "sorry for being late, I didn't want to come."
- Aside: they were handed a **signed Hungarian edition of Gergely Orosz's _The Software Engineer's Guidebook_** ("don't buy books — become podcasters and receive them for free").

---

## 7. Data-Center Water Use

- **Google/Meta/Amazon** are trying to fix (and PR-spin) **data-center water consumption** (Wired, The Verge, a Hacker News thread).
- A recent framing suggests the water issue was **over-hyped** and less severe than believed — met with skepticism ("okay, who paid for that study?").
- **Drinking water** is becoming "the most sensitive resource"; **desalination** (making seawater drinkable) has gone from "no way to do that" 10 years ago to being **energy-/cost-bound** now. "Technology will solve it" — maybe.
- Slides into the recurring "capitalist section" — big tech pouring money to improve public opinion "is always what's happening."

---

## People & References Cited

- **Hosts:** Dávid Schneitoffer ("Kispócok"), Gábor Náday ("Máté"/"Mefi"), Fanni / Karolina Tóth — ABK Podcast / Leadership Anonymous.
- **Ian Thomas** — the scheduled-but-absent guest (name only).
- **Charity Majors** — "enthusiasts race against time; skeptics race against entropy."
- **Kent Beck** — the "unpredictable genie."
- **Gergely Orosz** — *The Software Engineer's Guidebook* (Hungarian edition, signed).
- **@ctitzen** — an AI-critical voice Dávid follows for balance.
- **Companies/products:** Apple/iPhone (anti-snatching, part binding), Meta (glasses, Instagram support-chatbot exploit), Google/Meta/Amazon (data-center water), Netflix, Instagram, ChatGPT, SimCity 3000 (an off-topic "SimCity 3K in 4K" patch), GTA San Andreas remaster (AI-mangled assets), Roost (slow-social app), Find My iPhone.
- **Concepts:** AI-native org / translation layer, why/what/how pyramid, people-vs-tools problems, hardware DRM / part pairing, social-engineering chatbots, enthusiast-vs-skeptic silo, holding opposing truths, curiosity, inner child / intuition, noticing dread to find weak skills, desalination, scaling ("the cake shop" analogy; the Tokyo subway NFC-chip 12ms story).

---

*Video: https://www.youtube.com/watch?v=wPx8adZqo9o — Transcript via yt-transcript.sh; outline generated from the transcript.*
