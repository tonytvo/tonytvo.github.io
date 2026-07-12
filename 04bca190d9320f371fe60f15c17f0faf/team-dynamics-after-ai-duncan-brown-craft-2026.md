---
title: "Team dynamics after AI – Duncan Brown | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Duncan Brown (ex-Head of Software Engineering at the UK's Incubator for AI) on what AI does to teams and organizations — not individuals — through two forces, amplification and hybridization, illustrated with Project Hummingbird, Naur's theory-building, Jurassic Park's Dennis Nedry, the gov.uk design system, and Joe's story, then a rich Q&A on managers, juniors, and anthropomorphizing agents."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Team dynamics after AI – Duncan Brown (Talk Outline)

> A Craft 2026 talk by **Duncan Brown**, a software engineer of ~17 years who now builds and improves software *teams*, and was the first **Head of Software Engineering at the UK's "Incubator for AI"** (i.AI). Framing: most AI discourse fixates on **individual** productivity and private experiments — Brown instead asks what AI does to **teams, organizations, and fields**. He carries two words through the whole talk: **amplification** (making things bigger/faster/more) and **hybridization** (fusing skills into one body and discarding the colleague). Format: a narrative built from war stories (Project Hummingbird, Adam, Joe), theory (Peter Naur), and pop culture (Jurassic Park), followed by a substantial live Q&A. The host praised it as one of the most visually impressive presentations of the conference.

---

## 1. Introduction and Framing

### 1.1 Who he is
- Thanks Jacqueline and Lee for helping build the talk.
- Software engineer for ~17 years; latterly makes **software teams** — "that's how I have an influence on the world."

### 1.2 The gap he's addressing
- So much AI discourse focuses on **individual productivity** and comes from people **experimenting in private**.
- "That's not the world where I live." His question: what is AI doing to **teams, organizations, and fields** like this one?

### 1.3 The two key words
- **Amplification** — making things bigger, faster, more of them.
- **Hybridization** — "smooshing things together," putting two people into one body.

---

## 2. Joining the Incubator for AI

### 2.1 The exact moment
- His moment of realizing the tech would change software life: **10:30am, 18 December 2023** — his first day of a new job to "transform the British state using AI."

### 2.2 The team
- Joined the **Incubator for AI** as its first Head of Software Engineering; the team "still exists and thrives."

### 2.3 The Downing Street demo
- Day one: polished shoes, ironed shirt, went into the building next to **10 Downing Street** — the famous room of the **COVID broadcasts** (where Boris Johnson told people to stay home).
- Watched demos of **working software**: chatbots, NLP processes, geospatial tools.
- None of the presenters were software engineers — they were **data scientists** or self-identified **"AI engineers"** (a term "we still need to bottom out").

---

## 3. "The Era of the Small Giant"

### 3.1 The core text
- The team's core text was a LinkedIn blog post, **"The Era of the Small Giant."**
- (He notes it as "published in 2005" on the slide but treats it as a recent, immediately-circulated piece — an old idea meeting a new one.)

### 3.2 The quote
- The claim: true breakthroughs come from **small teams of fewer than seven** exceptional, vision-aligned people — now **amplify each person tenfold through AI tools**: "small in headcount, but giant in impact."

### 3.3 Old idea meets new idea
- **New idea:** amplifying things with AI.
- **Old idea:** small teams are great — more focus, fewer synchronization overheads ("fewer edges in the graph").
- Reference: **Amazon's "two-pizza" team** rule.

---

## 4. War Story: Project Hummingbird

### 4.1 The assignment
- His boss tapped him: "Look at **Project Hummingbird**" — a politically sensitive project ministers cared about (no meaningful details shareable).
- He said yes (first week) and scraped together a "small giant" team.

### 4.2 The team of "two and a half"
- A **developer, John**.
- A **delivery manager, Esther** — Scrum-Master-like: runs ceremonies, but mostly acts as an **umbrella**, handling incoming reporting and "cracking through the bureaucracy that gets in the way of deploying."
- Himself, part-time (other responsibilities).

### 4.3 The problem being solved
- A few times a week, people sat around **Excel spreadsheets** making laborious allocation decisions, gradually reaching a "budget consensus."
- Perfect for a software engineer: "I've got a **constraint-solving algorithm**, a cost function, I can optimize this."

### 4.4 Amplifying John
- They amplified John "to the absolute nines" — a working prototype in a few weeks.
- Features: mapped allocations on a map; **suppress unwanted matches** not expressed in the constraint set, then rerun; "sculpt your way to a truly optimal outcome."

### 4.5 The catch: no real data
- They weren't allowed to use real data (politically sensitive, different department, data protection).
- To "get the juice out of reality" and close the real feedback loop (changing the world and people's jobs), they had to **deploy** it.

### 4.6 Esther's job gets brutal
- Deployment made Esther's work "really, really hard": **information governance, cybersecurity**, a departmental strategy that "wasn't going to happen for another 3 years," and more.
- The team's work became **overwhelmingly about dependencies** involving other people and teams — "it didn't matter how good our software was. It worked."

### 4.7 Shipped, then killed
- They shipped to a **staging environment**, learned a bunch — then **politics intervened and the whole thing got canned**. "Not surprising if you've worked in this area."

### 4.8 The team topology
- Closed world: Brown and John multiply connected; **Esther on the boundary** between the "provable, deterministic software system" and "icky, sticky reality."
- Her work is **not** writing unit tests or querying an LLM — that "would have made her work significantly worse." She needed to build **trust and relationships**.

---

## 5. The Human Bottleneck as a Signal

### 5.1 Everyone starts depending on Esther
- Six months after the project was killed, Esther told him she had "far too much to do" — every team wanted her time because she understood **DPIAs, IG, and the relationships**.
- She paid a **fixed switching cost** traveling between teams.

### 5.2 Reframing the bottleneck
- This is **not a human bottleneck to code production** — it's a **signal about us trying and failing to change the world**.
- Hard to accept if you're unwilling to adapt the organization.

### 5.3 Nested feedback loops
- **Individual** (John prompting at his console): feedback in **seconds/minutes**.
- **Team** (stand-ups, retros): **days/weeks**; the team collectively senses its way through.
- **Organization**: **months** — and it was "set up in a fundamentally unbalanced way."

### 5.4 Why organizations are hard to rebalance
- **Identity** reasons, **political** reasons, and **HR/budget** reasons (headcount, budget requisition, changing the business plan).
- "You can listen to this signal, or you can just bang the drum harder."

---

## 6. Amplification: Seductive and Dangerous

### 6.1 The seduction
- Amplification is "simple and seductive" — point at something you like and say "I'd like more of that, please," bigger and faster.

### 6.2 The volume-knob lesson (from playing in bands)
- The **volume knob is an instrument too**, in two respects.
- **Absolute volume:** drive an amplifier too hard and you get **clipping/distortion** — the signal breaks up, and you can **blow your speakers**.
- **Relative balance:** you must balance yourself against the other players; making the synth way louder than the drums is a real choice.
- Traditionally, those balance choices are **negotiated between and among us** in teams.

### 6.3 The core question
- "Why do we do this to ourselves — amplify and amplify and then run faster into the same walls?"
- At the conference, "almost every talk… people said 'I don't want any more code.'" So why the fixation on **making more**?
- He offers two explanations: one from inside software, one from outside.

---

## 7. Explanation 1 (From Us): Software as an Engineering Problem

### 7.1 The production mindset
- The belief that software is, end to end, an **engineering/production problem** — "the language of production."

### 7.2 The Accelerate / DevOps lineage
- Around 2018, **Accelerate** came out; DevOps "began to bite"; people read **Goldratt** and **The Phoenix Project**.
- The **downstream** part is genuinely great: deterministic reproducible builds, testable, "servers are cattle not pets."

### 7.3 Smearing it upstream is an open question
- Whether that thinking extends **upstream into the negotiation with reality** (product development) is "an open question."
- References: **Dan Shipper's "dark software factory"** (put a vague idea in, a swarm of agents collaborate) and **Steve Yegge's "Gastown"** (like it but "more crazy and baroque").
- These happen with **less human negotiation, less feedback, and less intention**.

### 7.4 Abstraction closes over automation
- We're used to climbing the ladder of abstraction (assembly → C → Ruby). "Abstraction closes over automation — you can't do it until you've automated."
- He has "no big problem" with the engineering perspective: an engineer "will pay attention to their materials and whether it's actually working."

---

## 8. Explanation 2 (From Outside): Jurassic Park

### 8.1 The film
- Two software-developer characters from **Jurassic Park** (1993) — "a film with a lot to say about software development."

### 8.2 Lex (the hero)
- Knows **Unix** and locks the doors against the dinosaurs.
- A "commendable act of diversification" by Spielberg — in the book it's her brother **Tim** who hacks; they made it the girl. But she's still a "nerdy, isolated, weird loner."

### 8.3 Dennis Nedry (the villain, the original 10x dev)
- Built all the park's software; the **only one who understands it**; locks everyone out to steal dinosaur embryos.
- A **loner** with three massive computers whose workstation is a no-go zone.
- His value is **making a huge amount of code** — famously **2 million lines with backdoors**; "the original 10x developer."
- Even **Samuel L. Jackson** can't debug it and resorts to "the muggles way out" — turning it off and on again — and gets eaten by a dinosaur.

### 8.4 Power from gatekeeping
- Nedry is seductive because he comes with **power**, and his power comes from **gatekeeping**.
- The tools hold up a "magic mirror" reflecting our own gatekeeping tendencies.
- If you (or a colleague) like to be master over a small amount of technical debt, **amplification drives hard on that** — deepening silos and driving teams apart.

---

## 9. Peter Naur: Programming as Theory Building (1984)

### 9.1 The essay to reread
- **"Programming as Theory Building"** by **Peter Naur** (of **Backus–Naur** notation), 1984.

### 9.2 The wild claim
- Software is a **byproduct** of something else — not what we're here for.
- The **program text** is a "contemptuous term," **secondary to the theory the team develops** about the program.

### 9.3 Program death
- If you don't have a working theory of the program, you **can't modify it** as the world changes.
- "If you take away the people, the program **dies**" — Naur's metaphor of **program death**.

### 9.4 The key quotation
- "An essential part of any program, the theory of it, is something that could not conceivably be expressed, but is inextricably bound to human beings."

### 9.5 Why this matters in the age of AI
- This argues for **multiplicity, diversity, negotiation** — things requiring **psychological safety**.
- "Some people like the software factory because it **dispenses with psychological safety**. I don't like that at all."
- Practically, the dark software factory takes **theory-building out of our control** — but the boundary between us and the world "is where **choice and intention** live."
- The counterargument ("you can't prove it either way") illustrates the difficulty of arguing something new against something "legible, overwhelming, and countable."
- Esther's team is "a glimmer of hard evidence": even when you can produce anything to acceptable quality, the real problems — the ones "we used to call people problems" — **remain**.

---

## 10. Hybridization: AI Tools Instead of Colleagues

### 10.1 War story: Adam the designer
- Brown was tech lead; **Adam** a "brilliant interaction designer." Their job: get more people to become teachers.
- They worked on a "gnarly" form collecting reasons universities rejected trainee applicants — growing out of control with branches, different universities, different course criteria.

### 10.2 The two sides
- Brown: a **data model** and API consumers needing 6-month notice for changes.
- Adam: **user research**, conversations, "a sense of design harmony and order."
- They thrashed it out to mutual satisfaction — **but did it wrong**: everyone else on the team was also solving it, so they **diverged**.

### 10.3 The weekly design-dev catch-up
- To fix divergence, they created a **weekly design-dev catch-up** — gathering "around the artifact" to thrash out details **collectively**.
- Benefits: saved money short-term; long-term saved not just the **build-it-right** money but the **build-the-right-thing** money.
- Also created **redundancy** — the shared theory became **durable** ("we don't want our program to die").
- But it's "complicated and expensive."

### 10.4 What hybridization does
- Hybridization = giving people **AI tools instead of colleagues**: need a designer? "press the tool," it writes the front-end code, then "throw away the bodies."
- A fusing of people **at the skill-set level** — "taking the bits you can see and imagining the rest will sort itself out."
- "This is not collective intelligence. It is a **travesty** of collective intelligence."

### 10.5 The good-enough disclaimer
- "I love good-enough software. I'm not interested in gold-plating or make-work… I'm not here to argue for artisanship." He objects to the **obstacles** to making excellent things cheaply/fast.

---

## 11. Why Hybridization Decays

### 11.1 The two-way vs. one-way arrow
- With Adam, the learning arrow goes **both ways** — an ongoing conversation.
- In the AI-enabled team, the arrow goes **one way**: skill flows into the engineer's head and out through their fingers into prompts/code.
- "There is no faster feedback loop than one inside your own head" — great for good-enough things.

### 11.2 The colleague's external feedback loops
- Adam has a life and feedback loops outside work — including a side project he collaborates on with others they also work with.
- That side project: the **gov.uk design system** — simplifies building government front-ends (forms, interfaces).

### 11.3 The patch-contribution evidence
- On the teacher-training project, Adam and other designers submitted **~30–40 patches** to the gov.uk design system and associated front-end libraries — new components, socialized, documented, eventually consumed by tools.
- At the Incubator, building genuinely new interfaces (indeterminate outputs, chat interactions), the number of patches submitted by teams **reading, not writing** (they had no designers — "a long argument to get designers hired") was **nil**.

### 11.4 The mediocrity spiral
- "Every day the tool gets a little weaker, a little sicker, a little more mediocre."
- You've lost your team; the seconds-long feedback loop "looks great from inside," but you're not talking to people — "you can be Dennis Nedry programming Jurassic Park."
- The organization doesn't know how to interface with you; you're "just supposed to be doing the magic," left "staring at your own reflection in the echo chamber of your own head" — the proverbial bedroom hacker, driven further apart.

---

## 12. Becoming: Joe's Story

### 12.1 Who Joe was
- **Joe** joined one of Brown's teams from a **coding bootcamp** — "a brilliant hire from day one": proactive, enthusiastic, ambitious.
- They put him on a **tech-lead track** with mentoring; over years he progressed. Both eventually left for other jobs.

### 12.2 The anxious catch-up
- About a year ago Joe came to their regular catch-up "really anxious," asking for book recommendations on "proper software design… right now."

### 12.3 The Elixir copy-paste
- Joe: "I spend all my time copy-pasting **Elixir** code out of ChatGPT into my IDE and raising it as pull requests."
- Why? He was hired as a **senior**, felt **imposter syndrome**, knew **Ruby** (similar to Elixir) but not Elixir well, and reached for the "cheat code" to get the status and kudos he needed.

### 12.4 The all-in-amplification scale-up
- His company had gone "all in on amplification": AI writing **Jira tickets**, AI writing code supervised by developers, **AI-driven code review** — "a glorious closed loop."
- Joe **quit** — "that wasn't the journey he was on as a person."

### 12.5 The two lenses (echoing Kent Beck)
- The tech looks "very different from that **economic lens**" (as Kent Beck said) than from the **team level**.
- **Upstairs:** amplify the productive bits, hybridize away nice-to-have jobs, save money.
- **Downstairs (Joe's view):** increase **rigor** and **quality**, achieve his ambition — the process should be driven **voluntarily from below**.

### 12.6 The loss
- Joe went to a new company with real problems (outsourcing, legacy code, weak management) and now **leads their AI thinking** — agents, guardrails, experimentation.
- His previous AI-first company "lost a brilliant future leader and engineer of AI because they thought the cliché in their head was the right one."

---

## 13. Conclusion

### 13.1 The danger of the two forces
- Amplification and hybridization have "the full force of **cliché**" and are "beautifully legible on the **balance sheet**."
- Blindly accepted, they give rise to **unlimited mediocrity**.

### 13.2 Widen the frame to teams
- Widening from individuals to **teams** liberates us from that framing and exposes what organizations must attend to.
- Stop fantasizing that "AI will automatically be the solution to all the problems it creates and reimburse all the costs it introduces."
- Let go of silly ideas: **100x developers** ("as if 10x weren't bad enough") and "private dreams of quitting to become sole proprietor of a billion-dollar startup."
- Hold space for **diversity of perspective, intention, and even skill**.

### 13.3 The call to managers
- Helping teams walk that line and carrying their voices into org-wide conversations is "**urgent work for managers on the ground.**"
- If you're a **tech lead or above**, you must **shape your organization's AI policy**, **build the feedback loops**, and **adapt and be ready to adapt again**.
- "Executives who don't even understand DevOps just won't be able to do this."
- You must **trust your people** and they must trust you.

### 13.4 The stakes and the closing line
- If managers lose, organizations suffer: products become **mediocre**, ecosystems **atrophy**, they make less money and lose good people to "organizations that know what they're doing."
- Not arguing to reject AI — arguing to **take control of it** and "carry the torch for **collective intelligence**, of which for all our hubris we still understand so little."
- "Please continue to augment yourselves — but do it in order that you can continue to **augment one another**."

---

## 14. Q&A

### 14.1 Q1 — Advice for managers/engineers on avoiding these issues?
- The talk aims to give **language** (a "first draft") to identify and reason about these effects.
- When AI does something that makes you uncomfortable, **bring it into a space where it can be talked about** — in "the silence under all the hype," that conversation often doesn't happen (as with Hummingbird's too-many assumptions).
- Ground conversations in the **sociotechnical effects** and "be prepared to fight for the stuff that matters."

### 14.2 Q2 — Was Joe right? Career advice for seniors in large enterprises: stay in chaos/mediocrity or leave?
- "You never have more **leverage** than the point at which you're about to quit" — use it, and look around.
- Reference to "Google's talk yesterday… **open code**" — "very sensible people… hoovering up the people the **token maxes** have driven away," who admit "we're not even the best at using AI."
- Companies **reflecting** on what's happening will outperform. Reject despair ("engineering is over"); be **proactive**; don't suffer in a job you hate — "take courage and go forward."

### 14.3 Q3 — Practical frameworks/formats that helped teams collaborate while using AI at scale?
- **Failure mode:** great prototype, then no **capacity** to push it forward — AI innovation labs end up with "a list as long as your arm" and no signal on what works.
- You must **take real risks** — "experimentation is risk-free" is a false AI sell; if you believe in something, **invest teams and time** in it.
- Using AI "for everything" solves little; what works is **talking to each other, feedback loops, and actually pushing things forward.**

### 14.4 Q4 — How to help junior colleagues who never learned the craft the hard way?
- Joe was relatively junior but had **years of Ruby** experience.
- Don't assume the skills we have now are the skills needed in future, or that the path to expertise stays the same.
- Software engineering "is going to get **harder**" — you can't "tread water" on gradually increasing expertise.
- Valuable future work is Joe's kind of **proactive experimenting** ("can we do this better with agents / guardrails?") — feedback still comes because "it's not magic," and "your program dies if it becomes unconnected from reality — reality will win in the end."
- Juniors who invent "weird hybrid careers" will excel — "don't make the mistake of saying they've got to go read **K&R**."

### 14.5 Q5 — Is it a good idea to handle AI agents as co-workers / team members?
- He "really resists **anthropomorphization**."
- Not always bad (some therapeutic applications are good), but risky to imagine agents give "remotely as much juice from reality as a conversation with another person."
- **People have to live in the world; AI agents don't** — so people deserve "effectively infinitely more" priority. "We need to get a lot better at **othering** AI agents."
- A "grim side": having "all these obedient people working for you" isn't good for you psychically. So: **no**, don't treat agents as co-workers.

### 14.6 Q6 — What do you say to executives who believe in the dark factory?
- "Good luck with that, and let's come back and see how it goes. I don't really want to work in your company."
- If you persist with it, "you're probably not listening to what's going on outside." Willing to be proven wrong, "but that's not the horse I'm backing."

### 14.7 Q7 — Amplification and canceling wavelengths (live audience question)
- Questioner: different "wavelengths" in a team, amplified by AI, might **cancel each other out** — e.g., a coworker "token-maxing" on a task. How to handle it, besides talking to people?
- Brown: the wave-cancellation metaphor is "a really interesting way to think about this" — an example of diverging, siloed, opposite-heading work.
- Possible future: **only one thread of code production** in a team because it's much faster; historically we **parallelized** to manage the volume, but to govern "unruly cancellation effects" we may **converge on fewer threads running at once** — at the cost of **dependency on one person** ("an interesting tension").

---

## People & References Cited

- **Duncan Brown** — speaker; ~17-year software engineer turned team-builder; first Head of Software Engineering at the UK's Incubator for AI (i.AI).
- **Jacqueline and Lee** — helped him prepare the talk.
- **John** — developer on Project Hummingbird (amplified to build the constraint-solver prototype).
- **Esther** — delivery manager on Project Hummingbird; the human boundary/bottleneck who understood DPIAs, IG, and relationships.
- **Adam** — brilliant interaction designer; contributor to the gov.uk design system.
- **Joe** — bootcamp-to-senior engineer who copy-pasted Elixir from ChatGPT, felt like an imposter, and quit an all-in-amplification scale-up.
- **Peter Naur** — author of "Programming as Theory Building" (1984); of Backus–Naur notation.
- **Dan Shipper** — "dark software factory" concept.
- **Steve Yegge** — "Gastown" concept.
- **Kent Beck** — referenced on the "economic lens" of AI.
- **Boris Johnson** — the COVID-broadcast room anecdote.
- **Steven Spielberg** — director of Jurassic Park; the Lex/Tim diversification choice.
- **Fictional:** Dennis Nedry, Lex, Tim, and Samuel L. Jackson's character (Jurassic Park).
- **Companies / tools / systems:** Incubator for AI (i.AI), 10 Downing Street, Amazon (two-pizza teams), gov.uk design system, ChatGPT, Jira, Google's "open code" team (Q&A), Excel.
- **Books / works:** "The Era of the Small Giant" (blog post), Accelerate, The Phoenix Project, Goldratt's work, "Programming as Theory Building," K&R (The C Programming Language).
- **Languages:** Elixir, Ruby, C, assembly, Unix.
- **Concepts:** amplification, hybridization, nested feedback loops (individual/team/org), human bottleneck as signal, clipping/distortion metaphor, theory-building and program death, psychological safety, the dark software factory / Gastown, 10x/100x developers and gatekeeping, collective intelligence, DPIA / information governance, DevOps/CD, anthropomorphizing vs. "othering" agents, token-maxing, wave cancellation, build-it-right vs. build-the-right-thing.

---

*Video: https://www.youtube.com/watch?v=Ng1myUJ8I_Q — Transcript via yt-transcript.sh; outline generated from the transcript.*
