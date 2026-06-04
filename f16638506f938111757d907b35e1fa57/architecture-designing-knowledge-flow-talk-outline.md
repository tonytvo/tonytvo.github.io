# Architecture is Designing Knowledge Flow — Talk Outline
### Diana Montilele · Systems Architect & Author

---

## 1. The Core Problem: We Keep Building the Same Factory

The central thesis: **linear, top-down, control-oriented thinking produces the same system regardless of the technology stack chosen.**

- Classic example: migrated monolith → microservices, but ended up with tightly coupled microservices — because the *mental models* didn't change
- Quote anchor: *"If a factory is torn down but the rationality which produced it is left standing, that rationality will just produce another factory"* (Pierig)
- Transformation ≠ adopting SAFe, Kubernetes, or event-driven patterns. It means changing the **mindset** from which systems, goals, power structures, rules, and culture emerge

**Iceberg Model** (systems science framing):
- Visible layer → production bugs, outages
- Pattern layer → missing test coverage, poor hiring fit
- Structure layer → incentive misalignment, organizational design
- Mental model layer (root) → "move fast" culture pushing instability, etc.

---

## 2. Two Universal Failure Modes in Human Systems

Drawn from 50+ years of systems research. Both appear in *every* human system facing complexity.

### 2a. Blame
- Illustrated via the **Beer Game** (Jay Forrester, MIT) — cross-functional demand/supply simulation that always collapses into chaos and mutual blame
- Real-world tech equivalent: Product blames Engineering, Engineering blames Architects, everyone blames legacy code / Agile / leadership
- Corrective framing: *"Blame the system, not the people"* — different teams have different incentives and pressures, not different intelligence levels
- **Caveat**: empathy alone isn't sufficient. Entrenched blockers ("Steve") are a *social* problem, not an architectural one, and must be addressed directly

### 2b. Counterintuitiveness
- When we act on complex systems, we often make things *worse* — even when well-intentioned
- Forrester's finding: people who know a system best are often pushing change in the wrong direction
- Classic example: **Brooks's Law** — adding engineers to a late project makes it later
- Root cause: we act from the same rationality that built the factory

---

## 3. Three Core Skills to Break the Pattern

### Skill 1 — Communicating Context
- An answer is only *more right or more wrong* in context (time, environment, stakeholder perspective)
- The "cat bed" metaphor: two people can hold completely valid but incompatible mental models of the same artifact
- Practical failure mode: asking multiple executives "what's our fast package delivery?" and getting divergent answers → impossible to make coherent architectural decisions
- Result of misaligned context: the **"carboat"** — an artifact nobody wanted, that satisfies no one's actual goal

### Skill 2 — Understanding Relationships (the "And")
- *"You think because you understand one, you must understand two, because one and one make two. But you forget that you also must understand 'and'"* — Danella Meadows
- A system is never the sum of its parts — it's **the product of their interaction** (Russell Ackoff)
- Examples: eventual consistency bugs, caching layer failures, performance tuning one service that overwhelms another
- Applies socially too: if Product and Engineering are adversarial, that adversarial relationship *is* part of the system's architecture

### Skill 3 — Cultivating a Growth Mindset
- ~30% of attendees had changed tech stacks within the past year — the industry structurally demands continuous learning
- Extension beyond personal development: **sharing knowledge to build others' capacity**
- As system complexity scales, no individual can hold all relevant knowledge — collective sensemaking becomes a survival requirement
- Supporting evidence: study showing medical diagnosis improved significantly when doctors *swarmed* decisions vs. diagnosed analytically in isolation

---

## 4. Three Core Activities for Architectural Practice

### Activity 1 — Generating Knowledge Flow
Two distinct concepts:

| | Knowledge Stock | Knowledge Flow |
|---|---|---|
| **Definition** | Stored expertise you possess | Transfer of knowledge between people and technology |
| **Primary value** | Efficiency | Effectiveness |
| **Example** | Deep expertise in your current stack | Synthesizing across domains to improve system outcomes |
| **Job description analogy** | "5 years JavaScript" | Architectural judgment |

- Dave Snowden: *"The flow of knowledge is more important than the storage of knowledge"*
- **Opinion vs. Knowledge**: sharing an opinion is "I think graphs don't scale." Sharing knowledge is "here are experiences and evidence that surface specific challenges — let's reason together about what those mean for your context"
- Key principle: *"If you can't reason about reality, you shouldn't be architecting it"*
- Organizational urgency (Larry Prusak): companies that don't treat knowledge as a force of production will slowly die without knowing why

### Activity 2 — Discovering Leverage Points
Leverage points = places in a system where **small interventions produce disproportionately large systemic effects**

Three concrete examples:

| Surface Framing | Outcome Framing | Actual Leverage Point |
|---|---|---|
| Implement new payment system in 6 months | Reduce cost per transaction by 20% | Reconciling transactions *across contexts* (the systems don't talk to each other — a new payment system won't fix that) |
| Migrate Jenkins → CircleCI | Reduce developer toil by 50% | Make pipelines **observable and self-healing** (without this, you'll still be paged at 3am on CircleCI) |
| Decouple front end from back end | Publish content to 4+ platforms | **Structure content for distribution** (not just vomiting SQL rows through an API — distributing content requires a different data model entirely) |

- Key insight on "source of truth": truth in live systems is **asynchronous and in motion** — designing it as a static vault causes the same failure modes to recur
- The **18-month rule**: when you identify a real leverage point, almost nobody believes you immediately. 18 months later they'll say "we always knew that." Patience is the final required skill

### Activity 3 — Architecting Capabilities
- Capabilities = what a system *must do, adapt to, or make sense of* within a domain — stable even as implementation changes
- Distinction from *platforms* and *pipelines* (overloaded terms)

| Implementation Framing | Capability Framing |
|---|---|
| Implement new payment system | Process transactions |
| Migrate to CircleCI | Deploy updates |
| Decouple front/back end | Distribute content |

- Architecture vs. Engineering: not different people — different *modes of thinking* applied by the same person
- Prefer: *"Reduce cost per financial transaction by 20%"* over *"implement payment system in 6 months"* — the former is a capability problem; the latter is a solution already encoded

---

## 5. Key Takeaways

1. You cannot change a system without changing the mental models that produced it
2. Blame and counterintuitiveness are *predictable* failure modes — recognizing them is the first defense
3. Knowledge flow (not stock) is what makes systems *effective* vs. merely efficient
4. Architect toward capabilities and leverage points, not tools and platforms
5. Expect an 18-month lag between identifying the real problem and organizational acknowledgment — patience is load-bearing

---

*Referenced thinkers: Jay Forrester · Danella Meadows · Russell Ackoff · Ted Nelson · Dave Snowden · Larry Prusak · Fred Brooks*