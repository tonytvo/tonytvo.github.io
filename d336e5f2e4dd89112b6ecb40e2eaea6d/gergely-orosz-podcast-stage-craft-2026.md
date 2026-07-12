---
title: "Gergely Orosz – Podcast Stage | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "An ABK Podcast (Craft 2026) conversation with Gergely Orosz on the state of engineering management/leadership in the AI era — the origin of the Pragmatic Engineer blog, why AI-slop writing kills trust, the decline (and renewed importance) of engineering management, two-pizza→one-pizza teams, token-maxing giving way to token-optimizing, why he senses an AI plateau, IPO signals, and his career advice: build AI infrastructure and keep thinking."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Gergely Orosz – Podcast Stage | Craft 2026 (Conversation Outline)

> A **podcast-stage conversation** at Craft 2026, recorded by the **ABK Podcast** ("A Bátrak Klubja" / Hungarian online leadership club — abkpodcast.hu, "leadership anonymous," covering tech and leadership), the last of two days of interviews. Hosts include the main interviewer and **Fanni**; the guest is **Gergely Orosz** — ~10 years a software engineer, ~5 years an engineering manager (at Uber), author of the **Pragmatic Engineer** blog/newsletter. The framing question: **what is the current state of engineering management/leadership in the AI era?** The conversation ranges over writing authenticity, the decline of management, team sizes, token economics, an apparent AI plateau, and career advice. (A narrative interview — rendered as topic threads at full fidelity.)

---

## 1. The Origin of the Pragmatic Engineer Blog

### 1.1 "Nobody reads your blog" — until they do
- Started ~10 years ago writing his software-engineering learnings **for himself**; the first many months had only a few hundred visitors.
- Published every 2 weeks for ~3–4 months, then stopped.
- Realized people were reading when his **shared hosting crashed** — a **Hacker News** submission drove a few thousand visitors it couldn't handle.
- That post argued **"if you have comments in your code, it's just bad code — it invites a refactoring."** Hacker News split: half "finally someone said it," half "what an idiot" — and seeing experienced engineers **debate his writing** motivated him to keep going.
- Lesson: "you never know who might come across your writing" — the host draws the parallel to their podcast (keep going even when no one seems to be listening); the **"Cheetah engineer" post** was the one that broke through on Slack channels.

### 1.2 AI-written content kills trust
- "With AI I can personally tell when something is AI written — I just stop reading."
- **The Michael Novati dispute:** Novati (the "coding machine" archetype at Meta was created after him — hugely valuable, wrote enormous amounts of code, but wasn't in the "right archetype" for promotion) wrote a post about problems inside Meta with good ideas but reading like "AI slop."
  - Novati said he'd spent many hours **brainstorming with AI** and that Gergely "doesn't appreciate his effort."
  - Gergely's reply: "**If it feels like AI, I will assume there is no effort.**" Over DMs, Novati was clearly hand-writing — "your writing is good"; he only used AI to "make it more polished," but that polish is exactly why Gergely stopped reading ("I'm interested in the Michael, the person I know").
- There's value in putting out ideas **in any form** — not just public blogs, but internal emails and sharing with colleagues; "don't underestimate how saying something obvious might mean someone says 'oh yeah, me too.'"

---

## 2. Human Connection vs. the Ease of AI (Fanni's thread)

- Fanni: the conference's recurring theme is the **re-imagination of human connection** — people long for connection yet find it easier to turn to AI.
- Why AI feels easier: it gives the **illusion that hard work can be replaced easily** — coding used to induce "time blindness" (an hour feels like 5 minutes) but felt good when done; AI does it in seconds — but the output turns **more generic, less creative**.
- **Product managers** create much of the tech content online (good at explaining, writing docs, interviewing); over the last 6–12 months many he looks up to turned to AI to churn out more content, feeling more efficient / more family time — "and all I see is generic; I started to mute and even block some of them."
- **"A lighter form of AI psychosis":** you believe the AI output is the same quality as before; maybe the first time it is, but you don't notice it slowly **degrading**.

### 2.1 Trusting AI like a human is a mistake
- **The Meta security vulnerability:** engineers didn't think they were introducing regressions by trusting AI and AI reviews, but shipped "the most embarrassing security-inflicted vulnerability" to production in a big monorepo — thousands of people, no one noticed, because they'd all started to just trust AI. (Covered in his keynote.)
- Pairing analogy: with a human ("Jane") you build **graduated trust** (small → medium → large tasks) but still review the truly critical stuff. With AI we start treating it like a human, but it "**will randomly hallucinate**," and the model can **silently degrade** (fewer resources behind it under traffic, or a new model). Humans aren't used to trust that degrades.
- Better mental model (from **Magda Bernecker**, ThoughtWorks, and **Simon Willison**): think of AI **not as a human but as a weird alien** — human-like abilities but strange in many ways.
- Bottom line: **hard work is never wasted.** If you become "an AI prompting machine," you're easily replaceable; those putting in the hard work will get ahead.

### 2.2 The host's pet peeve — AI-crafted messages
- 360-degree feedback now finishes on time but reads like "an answer from Claude"; Slack messages visibly Claude-crafted. "You don't need to craft it — just tell me what you want. English isn't my first language, but trust me, I'll understand it."

---

## 3. The Decline — and Renewed Importance — of Engineering Management

### 3.1 Management was already under threat before AI (end of ZIRP)
- In US/Western-Europe VC-funded companies, engineering management is "almost dying" — starting with the **end of zero-interest-rate policy**, not AI.
- **Sourcegraph** (code-search tool; raised ~$200M, grew to ~100 people): around 2022–2023, before AI mattered, they **laid off all middle managers**, with engineer-leaders reporting to founders — a cost exercise.
- Reason: companies realized they wouldn't grow as fast; a big management layer is needed to absorb **doubling head count**, not a flat/shrinking one.
- **Twitter**: managers had to **code AND have ~20 direct reports** — but if you code, you do no people management.
- AI **accelerates** the trend: the thinking is "every engineer can use AI agents, so they do more, and managers can too" (e.g., AI agents collecting performance stats).
- Now **large** companies do it: **Coinbase** laying off middle management; **Meta** converting managers back to individual contributors in every layoff.

### 3.2 Why tech had small manager-to-report ratios
- Other engineering fields (mechanical, chemical) run ~**40 reports per manager**; tech ran **~6–10** for reasons:
  - **Retention** — a manager who cares reduces attrition (important when keeping engineers matters).
  - **Managing change** — technical managers say "stop, let's create a **tiger team** (you, you, you) to build better canary rollouts for 2 months," explain the why to stakeholders, and do a lot of invisible good work.
- Now there's "no appreciation for that" — CEOs are "busy vibe coding" and think they're super productive. "We're going to rediscover in 2–3 years that good management is important" — hands-on, empathetic, big-picture.

### 3.3 Leadership has never been more important (people are lost)
- The happiest engineers are where **leadership is firm on where they stand**:
  - **Zach Sward** (co-founder, **opencode**, a Claude-Code competitor): "We're in the AI business but I think we're **overusing AI**, we have quality problems, let's slow down and build fewer things with higher quality" — and "I don't think competitors are killing us because they use AI better."
  - **Linear's CEO** (jokingly, "with heavy heart") announced they would **not lay off anyone** and keep investing in people, reinforcing **quality** (everything to 300 ms).
  - **Kelsey Hightower** (recent podcast guest): challenges startups to "**explain what you do without mentioning AI**" — forcing the important things (service quality, growth, churn).
- Good leadership can come from anyone on the team — people rally around those with confidence in the right things who won't just repeat the hype.

---

## 4. Team Sizes: Two-Pizza → One-Pizza

- **John Deere** (a ~200-year-old tractor company) and others: two-pizza teams (~8–10) are turning into **"one-pizza teams" (~3–4 people)** — **smaller, but still teams**.
- Host's observation: a single person who's product-minded, design-aware, and technical can, with an agent, ship something in days (hackathon-style) — is that good/sustainable, or a bubble?
- **The teenagers-in-a-bar analogy:** the industry is like teenagers who found the bar unlocked, got drunk, and keep drinking through the hangover; adults would enjoy the fine liquors and call it a night.
- Teams doing **really well with AI are doing roughly what they did before:**
  - **Linear** (~50 engineers, taking on Jira): 2–3-person teams (sometimes individuals), all **full-stack and product-minded**, ask for help, regular demos, ship only **quality** things — unchanged with AI, which accelerates them "but not that much."
- **The pace of business hasn't sped up:** SaaS customers don't want a new product every day. **Faster bug fixes** are the one clear win; new features/products still need months and time to see if they work.

### 4.1 OpenAI as a cautionary tale of shipping fast
- **OpenAI Agent Builder** (a visual agent-workflow UI): built in **6 weeks** with Codex, released October with fanfare — buggy, and OpenAI **never went back to fix it** → abandonware.
- **Sora** (AI-generated social site): launched to mixed reception, **shut down ~6 months later**.
- **But maybe it's not all stupid:** it builds the muscle of building from scratch.
  - **Google** famously kills projects (killedbygoogle.com — Reader, Google+, Weave…) — seems wasteful; **Amazon** supports AWS services to end-of-life (~120+ services; recently retired 12 after 5 years) and "does not waste effort."
  - Yet in the gen-AI race, **Google is the only big-tech keeping up** with the labs (NotebookLM, Gemini, Vertex), while **Apple has no AI strategy**, **Amazon** struggles (Nova "a joke"; its wins are hosting OpenAI/Anthropic on **Bedrock**), and **Microsoft Copilot** is "an embarrassment."
  - Gergely's theory: **Google never forgot how to build, launch, and scale** — so the "wasteful" habit built the muscle. "Pick your poison."

---

## 5. Engineering Culture (a hijack)

- Talking to people inside companies: the only places where people are **truly happy** are **OpenAI and Anthropic** (and fast-growing startups like **Ramp**, **Supabase**).
- Everywhere else people say "our culture sucks" — including inside Google's **Gemini** team (interviewing to leave for OpenAI) and the **Copilot** team (terrible morale, infighting, even when doing well).
- Maybe in a change this big it's normal for everyone to think it's better elsewhere — "people change companies and realize it's the same [mess] there."
- "We're in the middle of a bigger change than we've ever seen — **make notes**; in 2–3 years these will be great stories" ("let me tell you what it used to be like"). Fanni: "It's a paradigm shift." Gergely: "That's a fancy way of saying it."

---

## 6. Bugs, New Features, and Resistance to Change

- Host: users **hate new features** ("why do I have to see this new button?") and instead want their **daily-use bug fixed** — which sits low in the backlog.
- Gergely (from **Corey at Linear**): have a **zero-bug policy** — fix bugs really quickly; AI is genuinely good here. Linear **stopped work for 2–3 weeks**, fixed all bugs (with AI), and now maintains an **absolute zero-bug policy** (hard bugs may need a human).
- Use AI like **outsourcing** — outsource what you *don't* care about; but you *do* care about not having bugs, so use AI to generate **one-shot suggestions** you take or reject.
- **Developers hate change** (from **Chris Lattner**, creator of Swift and **LLVM**): before LLVM (~2005) there was GCC; people said a more modular compiler "will never work," but LLVM won and now powers Objective-C, Swift, and more. **15 years later**, Lattner proposed a big change to LLVM and the long-time maintainers said "nah, that'll never work" — "developers just hate change." AI is changing how we work with **no best practice yet**, so it's a stressful situation we must push through.
- Fanni: it's human nature — we all fear change and seek security *and* variety; **human connection** is the basis, and conferences let us come together and share our fears.

---

## 7. Google's Silent Bundling, and Token-Maxing → Token-Optimizing

### 7.1 Google quietly killing SaaS businesses
- Host: Google silently bundles features (e.g., a **meeting-transcript** feature into **Google Meet**) that kill standalone SaaS products; **Gemini** capabilities are under-discussed, while other big companies struggle. Even **Apple** is reportedly using **Gemini** to level up **Siri**.

### 7.2 Token-maxing is already dead
- **Token-maxing** ("world's most defunniest trend") appeared ~a month ago at Amazon/Microsoft/Meta because of **leaderboards** and **no cost attached** to AI usage.
- It's basically over: the labs turned on **API pricing everywhere**, and **GitHub Copilot** killed its unlimited plan → very real, measured cost. "The only places still doing it are idiots who'll get a big bill at the end of June."

### 7.3 The new trend: token-optimizing
- Engineers getting good reviews / **spot bonuses** are the ones finding ways to **save a percentage of tokens** (heard from friends at **Shopify**).
- **Smart token routing** (opencode, Factory AI, Devin) picks the right model for the task.
- Next: companies running **DeepSeek** or other cheap models on **their own infrastructure** — "we're speed-running everything" (cf. cloud-cost optimization, then the Datadog-bill panic ~2023).
- Only the **AI labs** (and cursor/OpenAI et al.) still don't care about usage — they spend crazy tokens but are **rushing toward IPOs**.

---

## 8. IPO Signals and the AI Plateau

### 8.1 IPOs may indicate the top
- **Anthropic** has filed for an IPO (fall); **SpaceX** has filed too.
- Historically (~2000s) companies went public because they **couldn't raise more venture funding** (Google IPO'd small in ~2004 and rose ever since).
- Now investors give companies money "until forever," so going public — with its reporting/financial-disclosure burden — is only worth it when that money **can't come from anywhere else**, which suggests being **closer to the top**.
- Aside: SpaceX shares have long been buyable by insiders (ex-Uber alumni networks); IPO opens it to **retail investors** for the last big raise.
- Suspicious timing: just as Anthropic goes public, it said it "would like to **pause all AI research across the world**" — "how convenient, just as they're in the lead."

### 8.2 Progress feels like it's slowing
- "**Opus 4.7 and Opus 4.8** are the first two models where I'm just not impressed" — feels like regression in ways, hard to measure.
- He's hopeful we may have hit a plateau ("it would be nice to catch our breath"): even if AI froze today, "it will take us a decade to integrate it" — "I can describe what I want in imperfect terms and get code that represents my thought process."
- Skepticism of the scaling bet: labs bet that doubling the training fleet yields exponentially better capabilities — "I'm not seeing that necessarily." He also hears many complaints that **Anthropic's safety guardrails** now refuse coding tasks ("that's too dangerous" when touching an HTTPS library). Models have been "good enough for coding since November 2025."

---

## 9. Career Advice for (Aspiring) Engineering Managers

### 9.1 Why management is valuable (his Uber experience)
- Offered a manager role at Uber while acting as team lead; hesitated (he likes coding and is good with people, which doesn't require being a manager), but said yes to "see how the sausage is made" — hiring, making the case for head count, firing, performance management, politics.
- At Uber you could go **back to IC** keeping the **same salary**; people who spent a year+ as manager and returned became the **best right hand** to their manager ("I did your job, I have respect for it, let me take stuff off your plate") and their careers went up.

### 9.2 Managing people ≠ managing agents
- "I always laugh when people say 'with agents you're managing agents.' No — management is about **people problems**": someone calls in sick, burnout, two people fighting over something stupid, misunderstandings.
- His own example: he canceled one-on-ones and team meetings last-minute (looked lazy/like a jerk) because, behind the scenes, someone up the chain wanted to fire a team member over a stupid metric, and it took **2 months** with HR to stop it — invisible work he couldn't explain. "Management is fixing the invisible broken stuff — the job isn't very visible."

### 9.3 The advice: build AI infrastructure, and keep thinking
- Reality: the work is undervalued now (CEOs/CTOs fixated on AI), and the **job market is bad** — even in a lousy place people won't leave quickly; **pay raises: forget it for a few years** (appreciate one if you get it).
- For **career stability** (if your layer gets cut, you can get a job): **get hands-on with how AI works** — every company hiring engineering management wants someone who can figure out **what AI infrastructure fits the organization**.
  - **Build AI infra at your company**: commit a little, talk with devs about their experience, understand it end-to-end. "If you build that out, you'll be in so much demand."
  - Do **less** of the other stuff: **cancel half your one-on-ones** (weekly → biweekly, biweekly → monthly), and use the time to think "how can I help my org move better — where are the feedback loops I can make faster?"
- **The Kelsey Hightower call-center story** (pre-AI): hired as a call-center agent doing repetitive tickets (password resets, ~5 min each) with a huge backlog. One day he **stopped taking calls** and built self-service automation (e.g., a self-service password-reset flow); his manager was supportive, more people joined, and 2 months later the center processed far more tickets far faster. "Ask forgiveness, not permission."
- **Don't stop thinking** (from **Dax Raad**, opencode): open code succeeded on **positioning** — he looked for a gap ("no popular open-source AI coding harness"); his job used to be **95% thinking / 5% coding**, and with AI it's now **96% thinking / 4% coding**. "I take that as inspiration."

---

## People & References Cited

- **Gergely Orosz** — guest; Pragmatic Engineer; ex-Uber engineer/manager.
- **Hosts** — ABK Podcast (A Bátrak Klubja), incl. **Fanni**.
- **Michael Novati** — ex-Meta "coding machine" archetype; the AI-slop-writing dispute.
- **Magda Bernecker** (ThoughtWorks) & **Simon Willison** — "AI as a weird alien" model.
- **Zach Sward** — co-founder, opencode.
- **Dax Raad** — opencode; "95%→96% thinking."
- **Corey** (Linear) — zero-bug policy.
- **Kelsey Hightower** — "explain what you do without mentioning AI"; the call-center automation story.
- **Chris Lattner** — creator of Swift and LLVM; "developers hate change."
- **Companies:** Uber, Meta, Sourcegraph, Twitter, Coinbase, Linear, John Deere, OpenAI (Agent Builder, Sora, Codex), Anthropic (Claude, Opus 4.7/4.8), Google (Gemini, NotebookLM, Vertex, killedbygoogle.com, Meet), Apple (Siri), Amazon (AWS, Nova, Bedrock), Microsoft (Copilot), Ramp, Supabase, Shopify, Factory AI, Devin, DeepSeek, SpaceX, Datadog, GCC.
- **Concepts:** Pragmatic Engineer blog, Hacker News, AI slop, AI psychosis, graduated trust/hallucination, ZIRP, tiger teams, two-pizza/one-pizza teams, zero-bug policy, token-maxing vs. token-optimizing, smart token routing, IPO-as-top signal, AI plateau/scaling bet, build-AI-infra career advice.

---

*Video: https://www.youtube.com/watch?v=Xd__vUlc1F4 — Transcript via yt-transcript.sh; outline generated from the transcript.*
