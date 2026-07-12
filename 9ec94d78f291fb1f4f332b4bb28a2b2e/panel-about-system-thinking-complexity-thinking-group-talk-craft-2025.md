---
title: "Panel about system thinking, complexity thinking - Group talk | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "A Craft 2025 panel (Dave Snowden, Diana Montalion, Daniel Terhorst-North, hosted by Nigel Thurlow) on systems thinking vs. complexity science, root cause and reductionism, Ashby's law of requisite variety, language/dogma, and AI as complication not complexity."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Panel about system thinking, complexity thinking - Group talk (Panel Outline)

> A dense 45-minute panel hosted by **Nigel Thurlow** (Toyota background, "5 Whys as religion") with **Dave Snowden** (complexity science / Cynefin), **Diana Montalion** (systems architect, author of *Learning Systems Thinking*), and **Daniel Terhorst-North** (self-described **"happy consumer of both"** models — around Cynefin long enough to open with "Cynefin is *not* a quadrant model," systems thinking ~20+ years).

---

## 1. Systems Thinking vs. Complexity Science

### 1.1 Diana's framing
- She reframes to "how would I describe **systems thinking**": there's no single agreed description (academics vs. technologists), and debating a concrete definition is itself a **linearization** of an inherently ambiguous/abstract topic.
- Simply: when you think **not about discrete parts and engineering their behavior, but about how relationships produce effect** (Ackoff), about the **patterns** and the **asynchronous, in-motion** things causing the visible experiences — you're using a form of thinking more likely to help you **engage complexity**.

### 1.2 Dave's framing — "the clue is in the two languages"
- **"Systems *thinking*" vs. "complexity *science*"** — a real distinction. Scientific metaphor: **Newtonian physics isn't invalidated by quantum mechanics, but it's bounded**; epigenetics changed Darwin without invalidating it. His contention: **complexity science has done that to systems thinking** — large parts of systems thinking are now invalidated, and "some people can't escape that."
- **History of systems thinking:** two foundations — **general systems theory** (von Bertalanffy) and **cybernetics** (communication & control — appeals to software people). Cybernetics splits into **Ashby** (foundation of modern systems thinking; information = data/signal, hence the "appalling **DIKW** nonsense") vs. **Bateson** (whom Dave works with via Bateson's daughter Nora — **abduction, metaphor**, a very different view of information). Then **soft systems methodology** (Peter Checkland — Dave's origin) and **critical systems thinking** (Mike Jackson, Gerald Midgley — Dave holds a visiting chair).
- **Complexity splits into:** **computational complexity** (Santa Fe, heavyweight agent-based modeling — "abstractions without context," seeking universal simulation rules; the modeler who told the US Navy "with enough money I can model the universe" — now an embarrassment) vs. **anthro-complexity** (different). Systems thinking is largely **design without emergence** (assumes you can design the system); anthro-complexity **stimulates the system**, manages only **actants and interactions**, and as things stabilize **changes the energy gradients** to favor what's possible — **using emergence as a response mechanism**.
- **The disagreement with Diana:** focus on **interactions/actants and scaffolding** vs. focus on the **individual/actor** — the individual focus seen as **culturally specific to North America and Northern Europe**.

### 1.3 Daniel's framing — "attractors, not boxes"
- Systems thinking à la **Donella Meadows**: "the relationships between things are generally much more interesting than the things." A system of parts has characteristics — some **emergent** (unpredictable from the parts), some **steady state**, some fully **reducible** (a car's engine does "engine stuff" predictably; bigger engine → more power).
- Complexity science gives him a **vocabulary** to reason differently about the **emergent** parts vs. the **stable/predictable** ones. His ~10-years-ago epiphany (with Dave): Cynefin domains (complex/complicated/clear/chaotic) are **attractors — aspects of a thing, not categories** you file things into. Any non-trivial system of work has **overlapping characteristics** — "enormously liberating."

### 1.4 Diana's rebuttal & the archetypes debate
- She "hates the phrase systems thinking" — her book was nearly titled **"Mind Shift."** She does **not** mean design without emergence; she writes for **individuals** whose thinking makes engaging complexity hard (a "starter way"; her top online course is paradoxically "Systems Thinking Made Simple"). Defining these streams makes it **harder to define what we're trying to do**.
- Meadows' **archetypes** describe types of emergence (e.g., "shifting the burden to the intervenor" = essentially **addiction** as a system property, with no single part causing it).
- **Dave's critique:** Meadows/Senge/Forrester (**system dynamics**) recognize feedback loops but **limit their number** — can't account for the variables in a complex adaptive system — and turn **archetypes into categories** people are forced into. Critical-systems-thinking/cybernetics people **reject system dynamics** and get angry at the association. Respect for Meadows in her context, "less respect now"; **"leverage points" wrongly imply you can engineer the system.**
- Dave's book-title jab: Diana's book "makes things simple, [but] it doesn't make systems thinking simple" — Midgley/Jackson would call it **simplistic** (negative); "your publishers did you no favor with the title" ("except it sold more books"). Both agree: the rungs get you on the journey, then it **must evolve** (like agile) — **build on** prior work rather than "Newtonian-ize" it. Dave's phrase: **"practice is theory-informed practice"** (a nod to his "revolutionary left" roots).

---

## 2. Root Cause & Reductionism

- Dave: complexity science gives you **"a scientific understanding of common sense."** Agile's flaws: the **"empirical heresy"** (agile people misunderstand empiricism — it's **hypothesis validation**, not "what worked on my last three projects" or SAFe's "half-remembered things codified into a method").
- **Reductionism done right:** in a complex adaptive system you **must** break things down to the **lowest level of coherent granularity**; the **error** is assuming **the whole can be derived from the parts**.
- **Nigel's Toyota challenge:** "most people can't do true root-cause analysis." How do you root-cause a *complex* problem?
  - **Daniel:** "root cause" sounds like a **noun/thing**, but he looks at **what in the structure/characteristics of the system of work made this inevitable** — and what unintended consequences a fix would introduce. Google's massive public outage's "root cause": a **mudslide destroyed one data center + a fire engulfed another + (probably a shark) severed an undersea cable** simultaneously → grown-up answer: **"we'll take those odds."**
  - **Diana:** don't assume there **is** a knowable root cause — what you can understand depends on **context and what you already look for**; "the call is coming from inside the house" (the problem is inherent in what we **value/believe/are certain about**); fixing one problem makes **new things start occurring**. She can "only help form and reform the question."
  - **Dave:** in a complex adaptive system there is **no linear material causality**, so root-cause hunting is a **waste of time** and produces **retrospective coherence** (system gets **worse**). Root causes exist in **constrained/ordered manufacturing** systems (Goldratt's **Theory of Constraints**, "old-style physics" complexity — many parts but mappable). Management methods **start in manufacturing** (ordered/predictable) then fail in **services** (complex/unpredictable) — why he devised **Cynefin** (unpopular with complexity purists who think everything is complex; Cynefin says **some things are ordered**, and humans **can create structure/order** — via constructors/scaffolding, distributed **micro feedback loops** Meadows couldn't account for). **Agile went wrong** using "the language of complexity but not the practice."
- The proposed boundary: parts of systems thinking (system dynamics, cybernetics) **only work in constrained environments**; soft systems works unconstrained but **depends on facilitation** → **doesn't scale**. Dave's epistemic-justice work has **everyone tell and interpret their own story quantitatively at scale** (no facilitator) — revealing how language changed over centuries.

---

## 3. Ashby's Law & the Problem of Language

- **Ashby's law of requisite variety:** if a system's internal variety < its environment's, the environment **dominates and destabilizes** it.
- **Diana:** start with defining **variety** — e.g., **92% of developers are male** (2022), a diversity problem for how we think/experience the work. Language is the challenge: trying to describe what she sees as **invisible** doesn't fit existing vocabularies/frameworks → we end up **debating language**. Reductionism, predictability, command-and-control fail us even at agreeing what "system"/"complexity" mean or what's **okay to bring into the conversation** — so finding space for sufficient **diversity of thinking** is a real challenge.
- **Dave:** works in an **80% female** company (different dynamics, "more vicious politics," alpha-male/alpha-female behavior); feminist philosophy uses **new language** (new materialism, epistemic justice) for **new concepts**. **Ashby is not a "law of gravity"** — it builds on **Shannon's restricted view of information** (brilliant but limited); human info flow (pheromones for **trust**; constructor/assembly theory; the theoretical-physics claim that **information has momentum** → new materialism's "attractor wells," e.g. Trump/Brexit) exceeds it. Post-9/11 counter-terror work (with Boisot) faced **symmetric governments out-pointed by asymmetric threat** — you **reverse Ashby's law** by using **citizens as sensor networks**. Accepting only Shannon/Ashby's information theory **holds back software's value**.
- **Language solidifies into dogma** — Houston Smith: "into every religion, when the prophet dies, comes everything they abhorred." The **"Constantine moment"** (Catholicism became a state religion; and the near-miss where **Jesuits almost merged Confucianism + Catholicism** in China before the Dominicans stopped it) — insights born in **imperfect language/metaphor** calcify into fixed meaning. Dave has already **moved on from "complexity science"** as a term because it now connotes agent-based modeling.
- **Daniel:** requisite variety "feels very one-dimensional" — his counter is **"people are messy,"** so you need a more nuanced, informed model, not a blanket overlay.
- **The abductive/inductive key point** (echoing Simon Wardley's keynote): **humans reason abductively, AI reasons inductively**, yet **most software is written for inductive reasoning** and not to **enable abductive reasoning**.

---

## 4. Closing — AI Is Complication, Not Complexity

- Nigel: will AI make the world more complex? Advice for leaders?
  - **Diana:** she'd call it **complication, not complexity.** The "source of truth" is in **motion, interaction, asynchronicity** over time in context; **AI is about fast perspective, not inference/relation** — is it doing anything **effective** or just **efficient**?
  - **Dave:** "you stole my language — I wrote down **'AI isn't making things complex, it's making them complicated'**" — and **dependent on algorithms.** New program (US through November, UK from April) to **measure abductive capability** in an organization via its interactions → an executive early-warning: are you letting AI do things it does better **while humans fail to develop higher capacity**, and is the **balance** right? His 20-year-old phrase (often stolen unattributed): **"human systems are messily coherent"** — the coherence matters *and* the mess matters.
  - **Daniel:** **chess** study — real-time MRI shows a **grandmaster isn't scanning future moves; they "remember a game that never existed"** (recall, a much smaller solution space, less effort) — the **abductive** thing GenAI can't do (GenAI is brilliant at scanning but doesn't *know* the right move). **Rant — follow the money:** AI is a rich field (ML, image recognition, stochastics, neural nets, DNA computing) now **underfunded** because money chases **LLMs** — "a really useful translation tool at scale" that is **"always hallucinating (bullshitting)"** ("hallucinating" wrongly implies cognition), sometimes usefully. He'd love machine learning / computer-aided computing to get attention back from GenAI hype and "terrified VC investors."

---

## People & References Cited

- Panel: **Dave Snowden** (Cynefin/complexity science), **Diana Montalion** (*Learning Systems Thinking*), **Daniel Terhorst-North**, host **Nigel Thurlow** (Toyota / *The Flow System*).
- **Von Bertalanffy** (general systems theory), **Ashby**, **Bateson** (& daughter Nora), **Peter Checkland** (soft systems), **Mike Jackson / Gerald Midgley** (critical systems thinking), **Donella Meadows / Peter Senge / Jay Forrester** (system dynamics), **Russell Ackoff**, **Goldratt** (Theory of Constraints), **Shannon** (information theory), **Boisot** (counter-terror work), **Houston Smith**, **Simon Wardley** (keynote), **Dreyfus brothers** (chess/expertise).
- Concepts: systems thinking vs. complexity science, actants/interactions/scaffolding, emergence as response, Cynefin (aparetic domain), archetypes-as-categories critique, retrospective coherence, requisite variety, new materialism / epistemic justice, abductive vs. inductive reasoning, "complication not complexity."

---

*Video: https://www.youtube.com/watch?v=45U1E7SXT7E — Transcript via yt-transcript.sh; outline generated from the transcript.*
