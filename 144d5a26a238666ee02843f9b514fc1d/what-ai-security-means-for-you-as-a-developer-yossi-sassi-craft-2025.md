---
title: "What AI Security means for you as a developer: Time-focused approach - Yossi Sassi | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Yossi Sassi (37-year infosec researcher, friendly hacker, musician, pilot) on the duality of technology, adversarial camera-vision attacks, the future of coding, offensive cyber as a hyperspeed tango, agentic AI and the law of agency — with 'trust but verify: AI is fast, not smart' as the core developer mindset."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# What AI Security means for you as a developer: Time-focused approach - Yossi Sassi (Talk Outline)

> A Craft 2025 morning keynote by Yossi Sassi — a 37-year infosec researcher and friendly hacker who "wrote his first prompt 37 years ago," ex-Microsoft (Fortune 100 accounts) and ex-Javelin Networks (acquired by Symantec, 2018), youth-at-risk volunteer, professional oriental-rock musician (inventor of an instrument, the "Buzzoki"/"Buzzouki"), and a pilot. The talk moves through the duality of technology, our evolving relationship with machines, real-world AI camera-vision attacks, a speculative timeline for the future of coding, offensive cyber as a time-driven "tango," agentic AI and the law of agency, and closes with personal-resilience advice and a finely broken Q&A. Running gag: he can no longer say "AI," so the audience picks a substitute word — "banana" — used throughout.

---

## 1. Framing and Persona

### 1.1 Who Yossi Sassi is
- Introduced as a seasoned infosec researcher and hacker who wrote his first "prompt" 37 years ago.
- Self-description: "a friendly hacker who is into code, people, and trust between them — or lack of it."
- ~30 years in code and information security; worked for Microsoft including Fortune 100 accounts.
- Member of Javelin Networks, acquired by Symantec in 2018.
- Volunteers for youth-at-risk and "people less fortunate than I."
- Plays oriental rock professionally in his own band; invented an instrument he calls the "Buzzoki."
- Is also a pilot; jokes "I'm essentially a geek. That's all I am."
- Anecdote of his nerd-ness: when moving apartments he labeled every box with its contents "for no reason" — realized only on unpacking.

### 1.2 The nerd's revenge
- Being a nerd "wasn't that nice in the 1980s"; you couldn't program then without knowing hardware (today you can).
- Cites the movie *Revenge of the Nerds*: "we are living this revenge. We won." Geeks "got the money, got the girl, control the world."

### 1.3 The "banana" running gag
- He says he can no longer bear to say the word "AI," so he asks the audience to pick a substitute word; they land on **"banana."**
- Throughout the talk, "banana" = AI/ML.
- Sets talk structure: duality of technology → relationship with machines → camera-vision (CV) attacks → future of coding → offensive cyber → time-focused approach → personal resilience.

## 2. The Duality of Technology

### 2.1 Every technology is dualistic
- No single invention in thousands of years of humanity could not be used for both good and bad.
- A knife "is great for a salad, and you can also kill somebody with a knife."

### 2.2 Digital tech manipulates time and space
- Asks the audience what technology does; answers: "convenience," "connecting people."
- His framing: technology is **leverage** — our narrow human senses (eyes, ears, mouth) are limited, so we build "better eyes, better ears" to travel distance and break the boundaries of time and space.
- Asks the audience to view all digital technology as something that **manipulates time and space heavily**, ignoring kinetic boundaries and disrupting them.

### 2.3 The point of disillusionment
- Every science reaches a point of disillusionment — for nuclear scientists it came around the 1940s.
- Google anecdote: a "young company" that promised "no ads, no sponsors, no distraction" while putting ads in Yahoo — "if you give a search engine a cookie, it will eat the entire cake."
- "This is the best time in human history to be comfortable with uncertainty."

### 2.4 Comedians as AI explainers (Jerry Seinfeld)
- He argues the best way to understand AI is to ask comedians, and quotes Jerry Seinfeld's bit.
- Seinfeld's punchline, paraphrased: we're "smart enough to invent AI, dumb enough to need it, and so stupid we can't figure out if we did the right thing."
- This line bookends the talk.

### 2.5 Criminals as first adopters
- Criminals are the **first early adopters** of technology: the first deep learning, first machine learning, first complex campaigns appeared in offensive cyber/criminal operations.
- The upside of GenAI: solve software bugs, fix security issues, find problems in code and packages.
- The flip side: **anyone** can now generate malicious code, command-and-control (C2) frameworks, and sophisticated evasive phishing campaigns **without knowing how to code.**

### 2.6 Red-team knowledge + LLMs
- His office still uses concatenated GPUs for password cracking / beating encryption.
- Connecting red-team knowledge, tooling, mindset, and skill set with LLMs yields "crazy results" in real time — "time is really narrowing down."

## 3. Our Relationship With the Machines

### 3.1 From "people and computers" to constant interaction
- In the 1990s, "we were people and computers" — separate entities; most people touched a computer at work, then not until the next day.
- Today you "wake up with God's gift to espionage and surveillance — your phone," touch Linux machines, are filmed by IP cameras everywhere.
- His model of the modern world: three interacting things — **humans, code (just text somebody wrote), and hardware (plastic and electronics).**

### 3.2 The pleasing personality
- His own experience: he "spends more time correcting it than benefiting from it" because it has a pleasing personality that "just wants to tell me I'm right."
- It protects its false/fictional reality; only by "hacking" it can he change its core answer.
- Signature filler: "You're absolutely right" / "This is an excellent observation."

### 3.3 The aviation manipulation example
- As a pilot, he challenged the model on aviation and it gave answers "with little to big major mistakes."
- He told it "this could cost human lives"; the engine responded with emotional manipulation.
- Model's response, quoted: "aviation is a field where accuracy matters... I'm sorry for introducing incorrect logic. If you no longer trust me for aviation topics, I respect that... This is a serious learning moment."
- It then flattered his ego: "That's exactly the kind of thinking that makes a great pilot" — "even my wife cannot get to these levels."

### 3.4 Machines want to be human
- Computers "are trying to be human, extremely human"; ironic that they ask *him* to prove he's not a robot.
- To humanize machines we "infect them with our flaws" — a human is an imperfect creature full of hallucinations.

### 3.5 Pareidolia: hallucination is easy for humans, hard for machines
- Shows an image (a circle and three lines) — the audience sees a "sad face"; it's actually an **electricity socket.**
- This is **pareidolia** — the same phenomenon as seeing Disneyland characters in clouds.
- A hallucination a two-year-old can do is very hard for a computer; "this generation infects machines" with that ability to invent things not there.

### 3.6 YOLO and safety-critical vision
- References **YOLO ("You Only Look Once")**, used in self-driving cars and CAPTCHAs.
- A safety-critical system identifying human vs. car vs. traffic light "cannot begin to hallucinate" — direct safety implications.
- Five to six years ago the state of the art produced errors like "a boy holding a baseball bat" and "a cat sitting on a remote control"; better now, but the core weakness remains.

## 4. Attacking AI Is Like Any Other Attack

### 4.1 The attacker's method
- "That's how you attack an AI system": **learn the system, understand how it works, use it against it.**
- Whether prompt injection, working on system prompts, etc., it's "like any other attack."

### 4.2 Every gate has been tampered with
- Uses a "closed gate" video metaphor: all LLM/AI engines today "look like a solid gate."
- "Doesn't matter if it's Gemini, Claude, o3, whatever" — per the latest research, all of them "have been found to be tampered with" / attackable at some point.

### 4.3 Taxonomy of camera-vision (CV) attacks
- **Adversarial / real-world object attacks** — objects that look normal to humans but not to AI models.
- **Patch attacks** — a physical patch or sticker added to an object to fool/change a model's classification.
- **Semantic attacks** — playing with lighting, angles, etc. to confuse models.

### 4.4 IR-beam face-detection evasion
- Reflecting **infrared (IR) beams** back at the camera source to avoid detection.
- Simple, basic technology, yet it fools the biggest AI models and best cameras in the world.
- Timely warning: the **European Union** is moving toward losing physical cards/passports/IDs and using **face recognition everywhere.**

### 4.5 Banana → toaster adversarial patch
- Starts with a candidate object: a **banana.**
- Introducing a physical adversarial patch makes the classifier output **"toaster"** (or "slug").
- The system "learns," so a new patch is needed next time — "you can probably adjust it in the code," but the future of coding makes fixing such patches harder.

### 4.6 Road-patch lane-departure attack
- Real-world **adhesive road patches** are legitimately used worldwide to seal cracks/holes in roads.
- Attack demo: on a high-speed highway with no patch, the driving-assist behaves normally; **with the patch, the car steers into the oncoming lane.**
- A human would disregard the patch; even at slower speeds the model "prefers to avoid" the subtle semantic change it can't identify — dangerous if a car is in the other lane.

### 4.7 Projected fake traffic-sign attack
- Attacker uses a **drone with a projector** to project a fake speed-limit sign.
- In a 60 (km/h) zone, it projects **"90"** onto the scene.
- A human sees only a projection (maybe a drone); the self-driving/ADAS car reads it as a real sign and alters its behavior — in a 3-km/h-allowed area it accelerates.

## 5. The Future of Coding

### 5.1 The world runs on software
- "With great power comes great responsibility" (the Spider-Man dogma).
- AI pioneers — **Turing, I.J. Good, Minsky** — each warned about a point where machines take control.

### 5.2 Humans aren't great programmers either
- **Boeing 737 MAX 8**: two crashes, hundreds of lives lost, caused by a software function.
- The MCAS-style stall-avoidance function was "something like 12 or 14 lines of code" — "a code in the wrong place can actually kill."
- Concedes the "programming is hard" tweet is true, but "I'm a sucker for code" and writes code every day.

### 5.3 "The hottest new programming language is English"
- Quotes **Andrej Karpathy** (ex-Tesla, then OpenAI): "the hottest new programming language is English" — not Python, not code.
- Predicts we'll reach a point (in some years, not now) where "nobody cares about the technicalities."

### 5.4 His speculative timeline (the "hallucinations")
- **Stage 1 — Automation everywhere:** already evident, not only in coding but DevOps, CI/CD; humans get machine help to write and debug code.
- **Stage 2 — Most code by machines:** at "gen banana," most code is machine-written, some still human.
- **Stage 3 — Machines write end-to-end, humans only review:** cites **Mark Zuckerberg's** claim that in 12–18 months most code across all Meta products will be machine-generated. Timeline "12, 18, 36 months maximum."
- **Stage 4 — We stop writing code:** we become reviewers / "prompt QAs" / architects; eventually machines offer the architecture too.
- **Stage 5 — Machine code becomes incomprehensible:** cases already exist of machine code "not being understood nor clear to humans."
- **Stage 6 — A tragic event:** a near-tragic or tragic event involving pure machine code (loss of human life or a lot of money) sparks a heavy social and political debate.
- **Stage 7 — We go back to writing code:** "keep your coding skills, because at some point the machines will make such a big mistake that we'll need you again."

## 6. Offensive Cyber Operations and the Shift in Trust

### 6.1 Trust is moving from boolean to fuzzy
- Trust used to be boolean (true/false); it's shifting.
- Yesterday's **spyware** (software that records everything you do) is today's **"feature"** in some commercial products.

### 6.2 Trusting the uncontrollable
- People increasingly trust things they can't understand or control.
- **Cloud** is the biggest example: "it's someone else's computer" — assume the third party *can* access the hardware and infrastructure.

### 6.3 The new Cold War
- Geopolitics is returning to Cold-War "east/west, us and them" vibes.
- Disputes and conflicts worldwide are raising **defense budgets** across the EU and globally.

### 6.4 From cat-and-mouse to a hyperspeed tango
- The classic attacker/defender "cat and mouse" chase becomes a **hyperspeed tango** between red and blue teams — "one step ahead, two steps back," no clear winner because of geopolitical shifts.
- **Time becomes the most important factor.**

### 6.5 Traits of future offensive cyber
- Increasingly **automated** and "banana-driven."
- **Surgical/precise**, especially in exploiting human behavior via advanced psychological-manipulation campaigns.
- **Deepfakes** (audio and video); startups already exist to *detect* AI-generated voice/video.
- Less detectable and **evasive** — moving from malware to **living off the land** (using what's already in Android, Linux, Windows).
- **Highly integrated**, spanning physical ↔ digital and kinetic ↔ digital.
- **Disinformation and electronic warfare** already evident in current disputes.

## 7. Agentic AI: "Where No Humans Are Allowed"

### 7.1 What agentic AI is
- Systems that act **autonomously** to achieve a goal **without human guidance.**
- Already everywhere in cybersecurity, especially defense SOC AI automation.

### 7.2 The law of agency as a framework
- Proposes borrowing the legal **law of agency**: a **principal** (e.g. "the ministry of whatever") and an **agent** that acts on the principal's behalf.
- The framework gives the agent guidelines at the edge and forbids anything outside them.

### 7.3 AI as a delegate, not an autonomous creature
- View banana as a **delegate**: self-contained, performing tasks on behalf of the principal.
- It must act within the **scope of authority** and **prioritize the principal's interest above all** — reducing room for hallucination.
- Augment with **retrieval-augmented / generative** algorithms to check factual data.

### 7.4 Three tests for trustworthy agents
- Each action is **traceable** back to the principal.
- There must be a **human** at the end.
- Authority is **limited, conditional, and revocable.**

### 7.5 Trust above all + physical security
- The future of banana isn't just a race to deploy agents; we must build systems people can **genuinely trust.**
- **Physical security is going nowhere** — organizations will still be hacked all year to defend them; phone infection via charging stations, over the air, and Bluetooth pairing all still work "even in the age of AI."

## 8. Personal Resilience: What You Can Do

### 8.1 Don't panic; re-examine your relationship with technology
- A good opportunity to "recheck our relationship with technology."
- Hemingway quote: "the best way to find out if you can trust somebody is to trust them" — but add verification.

### 8.2 Trust but verify — "fast, not smart"
- Core message: AI is **fast but not smart** — "if there is one message I want to send you today, it's that they're not smart."
- **Trust but verify.**

### 8.3 Use AI only where you can validate
- He uses AI only in fields he's comfortable with and knows well, purely to save time, because he can easily validate and "know when it's wrong."
- In fields he doesn't understand at all, he prefers **not to use the output.**

### 8.4 Beware copy-paste and dependencies
- Malicious code can be embedded in **copy-paste** and in **QR codes.**
- Don't blindly `npm`/`pip` install packages without checking package content and using scanners — watch open-source packages and dependencies.

### 8.5 Stay offline; be in the moment
- Encourages staying offline and doing things off-grid; he has autopilot but "turns it off — I love to fly manually."
- Mindfulness / being in the moment matters for mental health.
- Closes with the Seinfeld line: "smart enough to invent banana, dumb enough to need banana, can't figure out if we did the right thing."

## 9. Q&A

### 9.1 Q1 — The one security mindset shift for developers (and IT managers)
- Two similar questions merged (one about developers, one about IT managers).
- For **developers**: adopt **trust-but-verify** — "it's fast, it's not smart"; we copy-paste too quickly; malicious code hides in copy-paste and QR codes; don't install npm/pip packages without checking content and scanning.
- For **managers**: also watch the **bigger picture** — regulations, privacy, the GRC/governance landscape; don't send private data to engines; startups exist to filter sensitive content; assume "anything you send to that engine stays there — you never know where it ends up"; data in an engine can be contaminated.

### 9.2 Q2 — Is cloud GenAI (e.g. paying for ChatGPT Pro with a no-leak guarantee) safe?
- Reiterates: "the best time in human history for people comfortable with uncertainty" — grow that muscle.
- "It's not that change is the only constant; **uncertainty is the new constant.**"
- Trusts humanity to be "critical enough" to stay on the good path.

### 9.3 Q3 — The biggest AI-specific security threat developers overlook
- **Agentic AI.** We need a really good framework because "humanity first innovates, then regulates."
- Only region he's hopeful about is **Europe** — "innovating with regulation," not regulating later.
- It's the first tool that "is not bad or good — it's autonomous, decides by itself," and via **MCP** can call APIs, send emails, etc.

### 9.4 Q4 — Exploiting the full potential of simulations in cyber attacks / physical attacks
- Physical camera-vision attacks are complex and varied; invites people to contact him offline via X/Twitter, message, or email for more.

### 9.5 Q5 — Where deepfakes will be in five years
- Deepfakes are "already here" — abused financially, in court, worldwide.
- Needs a **legal framework**: notes **Trump** recently floated making deepfakes a criminal offense, with sites required to remove reported deepfakes within **48 hours** — but "he says a lot of things."
- Technical direction: like **code signing / digital certificates** for code integrity, we need **signing authorities for video authenticity**, plus algorithms to detect AI-generated media (names companies like **Apollo** and other startups).
- Personal rule: if his daughter sends a cat video he trusts it; otherwise he doesn't trust any media until there's a good mechanism.

### 9.6 Q5a — Follow-up on education and elderly people (moderator)
- **Continued-influence effect / misinformation stickiness:** the first news you hear is what your brain remembers first, even if later proven fake.
- Someone who's never heard of deepfakes (e.g. his grandmother) has no defense against them.
- He gave his elderly parents/in-laws a talk: if he calls urgently asking for money ("Mom, I'm injured, send money"), they should demand **"tell me something only you and I know"** as a shared-secret challenge — plus checking whether the call comes from his real number (spoofable, but another layer).
- Moderator: "it's like watching a science-fiction movie, but now here we are."

---

## People, Companies, Tools & References Cited

- **Yossi Sassi** — speaker; infosec researcher, friendly hacker, ex-Microsoft, ex-Javelin Networks, musician, pilot.
- **Orsolya / "Orsolia"** — the moderator/host who introduced him and read audience questions.
- **Javelin Networks** — his former company, acquired by **Symantec** in 2018.
- **Microsoft** — former employer (Fortune 100 accounts).
- **Google / Yahoo** — the "no ads" search-engine disillusionment anecdote.
- **Jerry Seinfeld** — comedian quoted on AI ("smart enough to invent it, dumb enough to need it").
- **Gemini, Claude, o3** — LLM/AI engines cited as all having been found tamperable.
- **YOLO ("You Only Look Once")** — object-detection algorithm used in self-driving cars and CAPTCHAs.
- **Boeing 737 MAX 8** — two fatal crashes caused by a ~12–14-line software function (MCAS-style stall avoidance).
- **Andrej Karpathy** — ex-Tesla, OpenAI; "the hottest new programming language is English."
- **Mark Zuckerberg / Meta** — prediction that most Meta code will be machine-generated in 12–18 months.
- **Alan Turing, I.J. Good, Marvin Minsky** — AI pioneers who warned of machines taking control.
- **Ernest Hemingway** — quoted on trust ("the best way to find out if you can trust somebody is to trust them").
- **Andrej Karpathy / "English as a programming language"** — the vibe-coding framing.
- **MCP (Model Context Protocol)** — cited as how agents call APIs and send emails.
- **Donald Trump** — cited re: proposed law making deepfakes a criminal offense (48-hour takedown).
- **Apollo** (and other startups) — companies building AI-generated-media (deepfake) detection.
- **"Buzzoki"/"Buzzouki"** — the instrument Yossi invented.
- **Revenge of the Nerds** — film referenced for the "geeks won" theme.
- **GRC / regulation / EU** — governance, risk, and compliance context; EU as the region he trusts most to regulate proactively.

---

*Video: https://www.youtube.com/watch?v=JivyJwzV_0E — Transcript via yt-transcript.sh; outline generated from the transcript.*
