---
title: "AI Native Engineering – Ian Thomas | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Ian Thomas on how his Meta Horizon team drove AI-tool adoption from ad hoc to 95%+ — a leadership '5x productivity' challenge, Meta's monorepo scale and 'code wins arguments' culture, anchoring on Engineering Excellence, a six-dimension Sit-to-Leap maturity model run as a self-assessment workshop, the anti-test-slop CLI, concrete high-ROI patterns (data-mined test coverage, legacy refactoring, MCP domain knowledge, agentic code mods), platforms as glue (DRS, Confucius), and a deep Q&A."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# AI Native Engineering – Ian Thomas (Talk Outline)

> A Craft 2026 talk by **Ian Thomas**, a UK-based (Yorkshire) software engineer at **Meta / Reality Labs**, working on **Horizon Experiences** (teams in London and Menlo Park). He recounts the journey from a leadership "5x productivity" challenge and poor ad hoc AI adoption to a mature, 95%+-adopted AI-native engineering practice. Format: the challenge and starting point → Meta's scale and culture → the adoption program built on Engineering Excellence and community → a six-dimension maturity model delivered as a self-assessment workshop → concerns surfaced (trust, test slop) → concrete high-ROI patterns → platforms as the glue → lessons → an extensive live Q&A.

---

## 1. Opening

### 1.1 The after-lunch welcome
- Jokes about the "nice warm room for a snooze" — "I won't hold it against you if you have a little nap."

### 1.2 The subject
- The AI-native-engineering journey his team went on in **Horizon Experiences**.

---

## 2. The Challenge

### 2.1 Leadership's 5x vision
- Early-to-mid last year, leadership threw down a challenge: **5x productivity**.
- The "5x" was "largely arbitrary" — the point was "go big, go far."

### 2.2 The transition arc
- Vision of engineers evolving over time:
  - Engineers **as builders**.
  - Engineers **supervising agents**.
  - Engineers **exploring and innovating** through a novel lens.
- Framed around: "How do we reduce the toil?"

### 2.3 The work breakdown at the start
- ~**50% operational tasks and overhead** — bugs, on-call, test failures, "the usual things."
- On top: **manual programming** for feature development.
- A thin bottom slice: **product and feature exploration**.

---

## 3. Why Ad Hoc Adoption Failed

### 3.1 Poor outcomes
- Reasonable-but-not-widespread AI adoption gave poor outcomes; people struggled to **align the tool to the problem**, got bad results, and rejected the tooling.

### 3.2 The experimenter gap
- People experimenting **outside of work** with tool access progressed faster (learning new patterns); slower adopters got poor results from their prompting/techniques.

### 3.3 No ROI measurement
- Leadership "couldn't find a good way to measure the return on investment."
- "Going okay, but not quickly" — nowhere near 5x.

---

## 4. The End State (Preview)

### 4.1 The results
- Grew an organic community **40x**.
- Weekly active AI-tool users rose past **80%**, most recently **over 95%**.
- Some workflows proved up to **80% time savings**.
- Built a **maturity model and workshop system** teams could take back and self-assess with, to scale across Meta.

### 4.2 Who he is
- Ian, software engineer in the UK (Yorkshire); teams in London and Menlo Park, California.
- 3 years building products in **Reality Labs**: started with **Workrooms** (3D meeting solution), then **Horizon Worlds** (user-generated platform for shared spatial experiences).

---

## 5. Context: Scale of the Codebase

### 5.1 The opportunity target
- Leadership wanted focus on **code modernization and administrative tasks** — which mapped to existing **Engineering Excellence** programs.

### 5.2 Many platforms
- Horizon Experiences isn't just a VR product — many platforms with varied difficulty and systems involvement.

### 5.3 Meta's monorepo
- Meta has a single enormous **monorepo**; a ~3-year-old chart already showed **500 million lines of Hack** code.
- Recently passed **100 million diffs**.
- For scale: the Haskell portion shown was **500,000 lines** and looked "absolutely minuscule" — yet is a big repo in its own right.

### 5.4 Horizon's languages
- **Hack** — big back-end system.
- **C++** — low-level, performant parts of the VR stack.
- **JavaScript** — front end, much of it **React Native** and **React VR**.
- **C#** — Horizon was on the **Unity** platform at the time.

---

## 6. Context: Culture ("Code Wins Arguments")

### 6.1 Meta as a social graph
- Facebook works as "a series of interconnected people — a **social graph**"; getting things done means bringing many people along.

### 6.2 Code wins arguments
- The operating frame: **"code wins arguments."** Demonstrate value and it spreads **virally**.
- Change is not a **top-down mandate** — which "can be a help, but also a hindrance."

---

## 7. The Adoption Program

### 7.1 Anchoring on Engineering Excellence
- **Engineering Excellence** has three components: **implementation quality**, **production excellence**, and **better engineering**.
- "Better engineering" (tools to help engineers move faster — test frameworks/harnesses, automated linting) offered **low-overhead, low-risk** places to experiment.
- Crucially, it already had **motivated champions** — typically one champion per small team aligned with an M1 manager.

### 7.2 Start small, safe space, permission to fail
- Starting small was "really important" — you need a **safe space** where people can fail, share problems, and be vulnerable.
- Avoid a **"theatre of success"** where everyone's on show; otherwise people won't say "I don't know what I'm doing, can you help?"
- Starting small let them focus on specific needs and target the biggest-impact changes; it laddered up to the overall toil-reduction goal.

### 7.3 Community and belonging
- Meta engineers "like data, numbers, metrics" — "if you can measure it, you can get buy-in."
- **Community** lacks a fully measurable aspect — "it's the glue… intangible but extremely important."
- He deliberately had onboarding helpers focus on **belonging**: social connections, shared experiences, informal support, knowing who to talk to.
- Activities: **lean coffees, one-on-one social events, brown-bag informal training.**
- Not something you can put on a performance review, but essential to success.

---

## 8. The Six-Dimension Maturity Model

### 8.1 Origins
- Consistent feedback and recurring patterns from the sessions suggested a **framework** was possible.
- Informed by **DORA metrics** and DORA's research into AI adoption.

### 8.2 The six dimensions
- **Workflow integration.**
- **Prompting / context engineering** skill.
- **Process integration.**
- A **team** element.
- An **individual** element.
- (Rounding out a deliberately **holistic** set of the things that made the biggest difference.)

### 8.3 The five (zero-indexed) stages
- "Because we're engineers," the stages are **zero-indexed**.
- **Sit → Crawl → Walk → Run → Leap.**
- Example (workflow integration): **Sit** = "aware the tools exist but not using them"; **Leap** = "processes completely rethought, AI integrated at all levels."

### 8.4 Delivered as a self-assessment workshop
- The **self-assessment** was "probably the most important thing we did."
- **Context-specific**: an avatar-integration team faces different problems than the world-builder team (positioning elements, adding textures in VR).
- Run in a **small, safe space**; teams identify what they're comfortable trying next.
- **Repeatable over time** — see how patterns change, where the model was wrong, and where people found **novel practices** to fold back into the framework.

### 8.5 The workshop mechanics
- Similar to a retro.
- **Anonymous dot voting** so people aren't biased by others' opinions.
- Reserve time for **discussion** — nominally 20–30 minutes, but early sessions "ran way over."
- **The dialogue is where the value is** — scores are "arbitrary"; a 3 vs. a 5 doesn't matter, it's a way to start talking and think about moving forward.

---

## 9. Concerns Surfaced in the Workshops

### 9.1 Trust in the code
- "How do we know the code is good?" People hold **self-identity** in code quality.
- Big pivot: moving to **trusting** that something else writes acceptable code.
- Early on (~9 months ago), model quality was lower and there was "an awful lot of extra scrutiny."

### 9.2 Hallucinations and poor architecture
- Concerns about **hallucinations** and code introducing poor patterns/architecture.

### 9.3 Huge diffs
- AI makes it "generally easier to make bigger diffs" — fear of a job becoming "just reviewing massive piles of **AI slop**."

### 9.4 Test slop
- Easy to generate many tests quickly — overwhelming to review, and many provide **no real value** (just exercising code the type-checker already satisfies).
- **Test slop** became a recognized issue needing extra scrutiny.

---

## 10. The Anti-Test-Slop Initiative

### 10.1 The idea
- Engineers **in Seattle** created an **anti-test-slop CLI** to assess the quality of tests generated in each diff.

### 10.2 Viral scale-up
- It gained enough momentum to be integrated by **dev infrastructure teams across Meta**.
- Now part of the **core stack running on every single change from every single team**.
- Demonstrates "the power of a small idea… when people get behind it — you can go very far, very fast."

---

## 11. Community Snowball and Leadership Attention

### 11.1 AI for Productivity (AI4P)
- The "AI for Productivity" (AI4P) community began to **snowball**, attracting attention from Horizon and wider metaverse-org leadership.

### 11.2 Going company-wide
- Leadership asked them to **stop being local and grow across everybody**.
- He posted an open invitation; organic joiners spiked alongside leadership "noise" and announcements.

### 11.3 Metaverse-wide training
- They were asked to host **metaverse-wide training** — a 2-day set of talks, workshops, and hackathons — which drove further interest.

---

## 12. High-ROI Pattern 1: Data-Mining for Test Coverage

### 12.1 The novel idea
- An engineer realized: internal **tables** hold data about source code, tests, and their health.
- "I wonder if we can teach the AI to read those tables to find the places with the most testable code and the most value in adding tests."

### 12.2 Why it's valuable at scale
- Not the low-hanging fruit you'd find by just "prepping your codebase," especially at Meta's scale — this is **data-mining** work a data scientist would normally help with.

### 12.3 The results
- Reduced roughly **half a week's work to 3 hours**.
- Hit ~**94% code coverage** on their part of the codebase (target was **70%**).
- Many diffs generated **relatively autonomously** via a loop, using tooling that runs agents "largely unsupervised."

---

## 13. High-ROI Pattern 2: Legacy Refactoring

### 13.1 The VR machine constraint
- VR work needs "one massive Windows machine with a beefy CPU," making it hard to scale to on-demand/ephemeral environments.
- So people avoided **legacy refactoring** — it locks up your machine and pulls you off feature/target work.

### 13.2 The approach
- An engineer taught an **AI pair-programming tool** the patterns he'd follow so it could automatically find refactoring opportunities.
- Challenge: their **Unity** usage was heavily **forked and bespoke**, so model training data wasn't relevant.
- He took a step back: "I'll drive the **architectural decisions**, you do all the **legwork**."

### 13.3 The results
- ~**50% time reduction**; machine not locked up as long.
- Massively reduced **tech debt** in a codebase grown organically over **6–7 years**.

---

## 14. High-ROI Pattern 3: Domain Knowledge via MCP

### 14.1 The bespoke domain problem
- Horizon has "very bespoke domain knowledge" — a "world" with data structures, textures, models, assets, audio, scripts. No model knows any of it.

### 14.2 The skeptic comes around
- "One of my biggest skeptics," with whom he had "the most interesting debates," built a way to integrate knowledge about **user-generated worlds** (there are **thousands**).
- Purpose: test in a specific state — "what will this change do to all the people who built something on our platform? Break it or enhance it?"

### 14.3 MCP as the solution
- He explored whether **MCP** was suitable and enabled the model to learn about the user-generated-content side.

### 14.4 The bonus unlock
- It removed the single-Windows-machine barrier — work could run in **on-demand environments**, enabling **scaling and parallelization**.
- Ian also queried the MCP to learn how the product was used for **directional/product decisions**, not just coding.

---

## 15. High-ROI Pattern 4: Agentic Code Mods

### 15.1 Coupling experiments with platforms
- Localized experiments were coupled with a mature **code mod** platform (generate vast changes, but only via specific heuristics/rules).

### 15.2 Agentic code mods
- **Agentic code mods** find quality issues that can't be defined in a rigid **if-this-then-that** way.
- Initial test was accurate — fixed a "relatively small (for us) 30-diff issue."
- Now "wildly successful across the whole company" — these code mods regularly appear in the diff-review queue.

### 15.3 The "why," not just the "what"
- The agent explains **why** the change is needed and what the problem was — "you didn't necessarily get that before" with generalized patterns.
- Enables AI **decision-making** about whether a pattern is really a quality issue — "an element of research and understanding before the change," not "a blunt instrument."
- This is where "early-career capability rhetoric" comes in.

---

## 16. What Made the Patterns Successful

### 16.1 Knowing what you wanted (well-specified problems)
- They already had a "fairly set target."
- The famous examples (Cursor/Anthropic rewriting a browser in a weekend, building a C compiler) are "**very well specified**."
- "The better you specify the problem, the easier it is to experiment." A big ambiguous issue would have made them struggle.

### 16.2 Going deep, not scattergun
- They fixed on **a few tools** to become adept, rather than "scattergunning" broad early, then transferred knowledge to new tooling.

### 16.3 Human oversight remains valuable
- "**Augmentation, not replacement** in most cases" — **taste, judgment, and knowing when to use things** became valuable.

### 16.4 Iterate in small steps
- Experiment, go in small steps, make adjustments, learn as you go.

### 16.5 Share widely
- Publishing progress and community belonging brought **diverse ideas/perspectives** into the mix.

---

## 17. The Whole SDLC, Not Just Coding

### 17.1 Beyond coding
- They "got hung up a little on the coding aspect," but the **SDLC** has much more.
- Aim: cover **every step** of the lifecycle with tooling, not just coding.

---

## 18. Platforms as the Glue

### 18.1 Built on mature platforms
- The most important thing behind it all: everything was built on **mature existing platforms** with hooks to **inject agentic workflows**, so it scaled quickly for everyone — not ad hoc pieces "in different repos all over the place."

### 18.2 DRS (Diff Risk Score)
- **DRS** scores the **risk** of a change — "what's the likelihood of this leading to an outage/sev." Numerous papers released on it.

### 18.3 Confucius (build-your-own agents)
- **Confucius** — a platform built quickly on top of **LangChain** — lets anyone find a use case and build an agent fast, fitting it into the workflow.

### 18.4 Worked example: the Unity-runtime migration agent
- Just after Christmas, Ian helped move Horizon Worlds from the **Unity runtime** to a new **in-house C++-based runtime**.
- He built a **Confucius agent** to analyze incoming diffs touching the old code against criteria/approvals/importance.
- It helped the migration team see where effort was going, so they could tell managers/engineers "this isn't supported, you shouldn't be doing this."
- Replaced "hours and hours of manual work" with a **daily chat ping**: "here are three diffs you need to look at."

---

## 19. Lessons Learned

### 19.1 Start small and anchor on a framework
- Starting small was "one of the critical things," with a framework to anchor on.

### 19.2 Community matters (even if intangible)
- Hard to prove value, but "you can intangibly feel it" — the **buzz** and conversations show it made a difference.

### 19.3 Watch the new bottleneck (theory of constraints)
- Diff **generation** wasn't the issue — **reviewing** them all was.
- Rethink **code review** so it stays rigorous without becoming "a huge issue" — "no one wants to spend their whole working life just reviewing diffs."

### 19.4 Full autonomy was discounted
- Complete AI autonomy "wasn't realistic" — human insight, maturity, taste, and judgment still needed.
- Automation shone for the **automated** things: code mods, test improvements, managing/triaging bugs to reduce operational overhead.

### 19.5 Adoption is a vanity metric
- Adoption (80%→95%+) "isn't really proving anything" — an agent "ticking over in the background" shows usage, not value.
- Measure **outcomes, not output** — not "diffs per developer per week."
- Example: **incidents per 1,000 changes** — a spike signals a problem.

### 19.6 Bottom-up first, then leadership
- Top-down mandates "weren't useful without education."
- Getting **leadership support after a bottom-up groundswell** accelerated things; "you must all move from A to B now" breeds rejection and friction.
- Keep it **safe**, give **permission to fail**, allow vulnerability — "everyone's learning together."

### 19.7 Keep quality standards high
- Own your output; use existing, deeply-understood measurements to compare over time.

### 19.8 Education: systematic beats ad hoc
- Structured programs help people move faster; **peer mentoring and learning from others** is critical.

### 19.9 Show ROI examples; kill things fast
- Examples showing ROI inspire and prove worth.
- Equally valuable: knowing when to **shut something down quickly** and "not being afraid to say no."

### 19.10 The invitation to follow the model
- "Find a couple of motivated people and see how far you can get" — it's about **progress**, not blowing it up as big as possible.
- Use the maturity model and workshops, look for **quick wins**, share them widely, keep iterating, stay curious.

### 19.11 The future
- Offload the "**undifferentiated heavy lifting**, toil, and operational overheads" to these systems.
- Focus on work "only human insight, taste, and judgment can make the difference to" — "make some really groundbreaking things happen."

---

## 20. Q&A

### 20.1 Q1 — The climate at Meta right now?
- Meta's culture is "very open and honest"; people feed back how they feel.
- It's "a tough time — layoffs are never fun," but he's "not qualified to speak on overall morale"; "these moments are best worked through together."

### 20.2 Q2 — Did AI-native engineering contribute to Meta's biggest security issues?
- No — his team worked on **testing and code quality**, not replacing things wholesale ("Lockstock").
- Can't speak for other teams, but saw no security issues in Horizon from their work.

### 20.3 Q3 — How do you keep human PR review from being the bottleneck?
- **DRS** signposts the most risky changes needing scrutiny — and identifies **low-risk** ones too.
- Follow long-standing best practice: **keep change sets small** — "far easier to review a 50-line PR than a 5,000-line PR."

### 20.4 Q4 — How did the anti-test-slop system work?
- Human judgment first: when reviewing poor diffs, ask "**why is it bad?**" and encode that.
- Built **~15–20 rules** into a **CLI** that pulls a change and evaluates it.
- Because it was a CLI, they wired it into **CI** — definitely run it when a test-only diff lands with AI-generated code.
- An internal tool called **Butterfly** hooked it up; later **dev infra** integrated it into overall CI.

### 20.5 Q5 — Where's the line between "cheap to regenerate" (accept duplication) and investing in abstraction/reuse?
- Depends on **purpose**.
- **UI changes** iterate rapidly — accept more duplication/churn.
- **Low-level/systems** code is long-lived — think carefully about architecture and abstractions.
- "If I were writing an **OS feature**, I wouldn't treat it as cheap to regenerate" — make it solid, right pattern; customer-end experiments tolerate more duplication.

### 20.6 Q6 — How do you measure the actual gain of faster implementation — estimates vs. real data, or implementing twice?
- "We're not implementing things twice."
- Look at **opportunity cost**: the big refactors and test-coverage gaps they "probably wouldn't have had time to address" without the tools.
- **Feature work** still needs time to understand what to build — "you can build something fast but it could be the wrong thing," compounding badly.

### 20.7 Q7 — Which AI tools at Meta, and most frequent usage (terminal, desktop, IDE)?
- Joke: "It's Llama… no, I'm kidding."
- **Dev Mate** — runs inside **Visual Studio Code**, also a CLI, and from the web.
- **Meta Mate** — behind these are multiple models: **Claude, Codex, Gemini**, and internal models — "pretty broad access," plus many internal-specific tools.

### 20.8 Q8 — How are you currently measuring productivity gains?
- "What are we doing now that we wouldn't have done" and **how many features could we commit to** that we couldn't before.
- **Outcomes, not outputs** — not "diffs per developer per week" (vanity metrics).

### 20.9 Q9 — More insight on AI being equipped with domain knowledge?
- The **MCP** approach was where they first found value.
- An article from infra teams (a week or two ago) describes using **context engineering** — integrating **context generation/files** into the codebase to supply domain knowledge.
- Open challenge: what becomes **canonical**, and where canonical domain knowledge should live — right now "next to the code."
- The code is the source of truth; a **machine-readable document** explaining **why** the code is the way it is (and the changes that led to it) is very useful.

### 20.10 Q10 — Will we stop hiring junior engineers, and what's the future skill set now that AI has "largely solved writing code"?
- As an IC he can't speak to hiring, but "I don't think so" — there still needs to be a **pathway**.
- **Human insight remains critical**; theory is the more senior you are, the more you rely on knowledge/expertise to make the tools effective.
- Juniors still need to grow and understand the basics — but "**not through so many reps of writing lots of code.**"
- You still need to understand hardware properties, networking, and **architectural qualities** — "there's a lot to learn; it's not going away."

### 20.11 Q11 — Could TDD help fight test slop?
- "Depends if the TDD is the slop in the first place — but potentially, yeah, it could."

### 20.12 Q12 — (time ran out)
- The host apologized that there was no time for a final question; attendees were invited to approach Ian afterward.

---

## People & References Cited

- **Ian Thomas** — speaker; software engineer at Meta / Reality Labs, working on Horizon Experiences; based in Yorkshire, UK.
- **Engineers in Seattle** — created the anti-test-slop CLI.
- **The reformed skeptic** — an engineer who built the MCP domain-knowledge integration.
- **Companies / orgs:** Meta / Facebook, Reality Labs, Horizon (Experiences / Worlds), Workrooms, Anthropic (Claude), OpenAI (Codex), Google (Gemini), Cursor.
- **Internal tools / platforms:** monorepo, Engineering Excellence, DORA metrics, DRS (Diff Risk Score), Confucius (LangChain-based agent platform), Dev Mate (in VS Code / CLI / web), Meta Mate, Butterfly (CI hook), anti-test-slop CLI, agentic code mods, MCP.
- **Languages / tech:** Hack, C++, JavaScript, React Native, React VR, C#, Unity, Haskell, Visual Studio Code, LangChain, Llama.
- **Concepts:** 5x productivity vision, toil reduction, "code wins arguments," viral/bottom-up adoption vs. top-down mandate, safe space / permission to fail / "theatre of success," community and belonging (lean coffees, brown bags), six-dimension maturity model (Sit/Crawl/Walk/Run/Leap, zero-indexed), self-assessment workshop with anonymous dot voting, trust in AI code, hallucinations, huge diffs / AI slop, test slop, data-mining for test coverage, legacy refactoring (human drives architecture), MCP domain knowledge, agentic code mods (the "why"), well-specified problems, augmentation not replacement, theory of constraints / review bottleneck, adoption as vanity metric, outcomes vs. outputs, incidents per 1,000 changes, context engineering / canonical domain knowledge, TDD, cheap-to-regenerate vs. abstraction/reuse.

---

*Video: https://www.youtube.com/watch?v=F5oGUwdPVfY — Transcript via yt-transcript.sh; outline generated from the transcript.*
