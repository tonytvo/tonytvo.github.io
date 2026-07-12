---
title: "Forest & Desert & Genie – Kent Beck | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Kent Beck examines AI-assisted development through forest and desert mindsets, balancing features with future options while navigating grief, teamwork, uncertain practice, and a blank industry playbook."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Forest & Desert & Genie – Kent Beck (Talk Outline)

> At Craft 2026, Kent Beck builds on his prior forest-versus-desert metaphor to ask what happens when software development gains a wish-granting but untrustworthy “genie.” He moves from lost craft and expanded personal capability through employment anxiety, features versus futures, multiplayer work, grief, and the disappearance of the old development playbook, then answers questions about education, legacy cleanup, and respecting the whole product team.

## 1. A changed atmosphere

### 1.1 Fear is everywhere

- Beck notices fear “in the air, water, ground, and light.”
- Programmers wonder what their job will be in two or five years.
- Young developers wonder whether they can grow into old developers.
- At the previous Craft, panels confidently said stochastic parrots could never write code; that prediction aged badly.

### 1.2 Books whose leverage disappeared

- *Smalltalk Best Practice Patterns* and *Implementation Patterns* teach skills that were economically powerful until recently.
- Making a long function beautifully human-readable remains pleasurable craft.
- Beck provocatively assigns that manual skill “zero economic value” under current tooling.
- Craft has intrinsic value, but economics wins when the two become too misaligned.

### 1.3 One thousand augmented hours

- Beck estimates roughly 1,000 hours of AI-assisted development in the prior year.
- He had programmed only hundreds of hours across the preceding five years.
- Dependency and version conflicts had made implementation too annoying.
- The genie removes enough friction to make programming inviting again.

### 1.4 Seniority had narrowed the idea space

- Juniors lack ideas because they lack experience.
- Seniors gain ideas but understand how much work each requires.
- “Super seniors” abandon ideas because completion and maintenance look implausible.
- At 65, Beck's ambitions again exceed his capabilities—but the genie has expanded those capabilities.
- Merely mentioning a parser generator makes him want to build one because now he can.

## 2. “Fire all programmers” does not add up

### 2.1 The 1994 prediction

- A friend's first computer-science professor displayed *The Decline and Fall of the American Programmer*.
- Offshoring plus object orientation supposedly meant the freshmen would never find programming jobs.
- The current prediction has a familiar structure.

### 2.2 Programmers can become less annoying

- Repeated attempts to eliminate programmers should prompt some self-examination.
- Engineers can empathize with other perspectives and speak financial language.
- Beck explains clean software through analogies such as keeping a kitchen's dishes and counters usable.
- Relating to the people funding development is part of professional effectiveness.

### 2.3 Greater value should not imply fewer people

- AI makes each developer capable of producing more economic output.
- Employers accepted the old cost/productivity ratio.
- Demanding fewer programmers precisely when they become more profitable seems internally inconsistent.
- Beck hopes the contradiction reflects a temporary transition rather than a fact he has not understood.

### 2.4 Beck's five-year story

- Large programming employers will shed jobs during disruption.
- Displaced developers will use new capabilities to found companies.
- Most will fail, but some will succeed spectacularly.
- Successful firms will hire the displaced people and additional newcomers.
- Beck expects more programmers in five years, though the interval will hurt.

## 3. Forest and desert

### 3.1 Bethany Andres-Beck's two attractors

- Beck credits his oldest child with the metaphor.
- The desert assumes scarcity of time, money, skill, resources, and patience.
- The forest assumes sufficiency: danger exists, but enough resources can be created and shared.

### 3.2 The desert feeds scarcity

- Scarcity produces rushing, skipped tests, damaged relationships, and exceptional deployment procedures.
- Those choices consume remaining capacity and confirm the original scarcity belief.
- Desert development can still be extremely profitable, which helps it persist.

### 3.3 The forest feeds sufficiency

- People help one another, learn, build tools, and reflect on successes and failures.
- Those investments create more time, money, and skill.
- A forest is not safe: it contains predators and thorns.
- Its promise is enough to survive and grow, not freedom from risk.

### 3.4 The genie amplifies the desert

- Leaders tighten controls and track token spending.
- Measuring token consumption resembles judging a trucking company by diesel used rather than loads delivered.
- Teams add five, 25, or 250 agents without resolving the scarcity assumption.
- More speed applied to a self-defeating system magnifies it.

### 3.5 The genie amplifies the forest

- Abundance supports more experiments, learning, explanation, and alternatives.
- Beck can spend weeks on a project, discard it, restart, and remain more productive than before.
- The genie's enthusiastic finger guns—“Great idea, boss!”—remain grounds for suspicion.
- It grants literal wishes without necessarily producing what the user truly wanted.

## 4. Features and futures

### 4.1 Optionality starts high

- A new system has no features but many possible futures.
- Every implemented feature consumes some optionality.
- Even removing it later costs work; preserving it adds compatibility constraints.
- Entropy must be paid.

### 4.2 Bouncing along the bottom

- Repeated feature delivery eventually leaves every dish dirty and every counter covered.
- The team clears only enough space to cook the next thing.
- Before AI, many people might take a year to create that mess.
- One genie-assisted developer can reach it in days.
- Current models pursue features and show little inherent concern for futures.

### 4.3 Pablo Casals rests between notes

- Beck retells an apocryphal story about the great cellist playing a long rapid passage.
- Asked how he avoids fatigue, Casals says he rests between the notes.
- A desert musician sees no space and strains harder, becoming slower.
- A forest developer perceives space between required features.

### 4.4 Restore more optionality than was spent

- After each feature, pause before accepting the genie's offer of phase two.
- Restore the futures consumed and add a little more.
- Over time, larger changes become easier instead of harder.
- This rhythm still moves toward the product goal.

### 4.5 Improve understanding

- Ask the genie to explain unfamiliar syntax in simpler terms.
- If necessary, request a bedtime story with messengers, queens, and chamberlains.
- Understanding what the agent produced creates options for future change.

### 4.6 Explore alternatives

- Ask for other implementations and try several.
- Compare their consequences rather than accepting the first plausible output.
- The genie's cheap generation makes exploration economically possible.

### 4.7 Strengthen evidence

- Add tests where behavior feels uncertain.
- Run fuzzing, mutation testing, and coverage analysis.
- The genie can overcome tool-installation and version friction that once discouraged these checks.

### 4.8 Improve structure

- Rename unclear concepts and refactor after feature delivery.
- Ask which file the genie finds hardest to manipulate.
- Ask how it would split that file, then perform the split.
- Better structure expands both human and machine ability to make later changes.

### 4.9 Recover a 100-feature, zero-future project

- Beck restarts personal experiments; his language/VM/database project has restarted four times.
- A shared business system usually cannot be thrown away.
- Keep delivering features to maintain trust.
- Between each feature, invest two increments in understanding, refactoring, and futures.

## 5. Multiplayer development

### 5.1 The single-player trap

- Effective teams are being reduced toward one person.
- One appears ideal because they cannot disagree with themselves—until Beck immediately disagrees with himself.
- Isolation discards human interaction, one of software development's most valuable capabilities.

### 5.2 Challenge to toolmakers

- Augmented tools should design multiplayer mode from the beginning.
- Multiple people and multiple genies need ways to work on one project together.
- Current tool use often separates people despite their effects on one another.

### 5.3 A genie mob in Switzerland

- Beck usually loses focus during mob programming.
- In his first genie-assisted mob, the group remained focused together for the whole session.
- He does not claim universal success; it is one experiment worth sharing.

## 6. Nobody knows

### 6.1 Trade-offs have shifted

- Nobody yet knows whether TDD with the genie is the right practice.
- A technique that works today may fail two weeks later as tools change.
- Predicting from the last 20–30 years is unreliable because the constraints moved.

### 6.2 Run many small experiments

- When nobody knows, communities should try as many reversible ideas as possible.
- Share observations rather than prematurely declaring best practice.
- Try “stupid” ideas when they are legal, moral, and reversible.
- A successful foolish idea has little competition; Beck calls his stupidity renewable.

## 7. Grieving lost leverage

### 7.1 Kübler-Ross as a lens

- Beck cites denial, bargaining, anger, depression, and acceptance.
- He does not present them as a simple linear law.
- Denial appeared in claims that AI could not work.
- Bargaining asks whether a cherished skill such as TDD can preserve its old place.
- Anger refuses or sabotages tools; depression appears in conversations worldwide.

### 7.2 Skills changed, not human worth

- People worked hard, took pride in their craft, and attached identity to it.
- Losing a skill's leverage does not make its owner useless.
- Normal grief deserves awareness and appropriate emotional care.

### 7.3 Everyone in the hierarchy is panicking

- Programmers, designers, and product staff hear that someone else will replace them.
- Managers face spans such as one manager to 50 reports, undermining learning.
- Executives receive invented R&D percentage targets from boards.
- Boards repeat investor pressure.
- Panic travels through the system and produces decisions that do not make sense.

## 8. The blank playbook

### 8.1 The old playbook is erased

- Previously, a production-bug problem had known pages of tests, tools, and practices to consult.
- Mid-career developers spent years mastering that playbook.
- The genie shifts its assumptions, creating the feeling “I used to know how to develop; now I don't.”

### 8.2 The object transition offers precedent

- Beck entered the field as object orientation displaced C, Fortran, COBOL, and waterfall assumptions.
- From roughly 1986 to the 2001 Agile Manifesto, communities ran experiments together.
- Patterns, programmer tests, test-first work, and refactoring emerged from shared learning.
- They wrote a new playbook after evidence accumulated.

### 8.3 Writing differs from applying

- Expertise at executing known practices is not expertise at inventing practices.
- Absence of a current playbook does not mean the community is lost.
- It means practitioners have the opportunity and obligation to write one together.

### 8.4 Do not rush a manifesto

- Beck has already seen augmented-development manifestos.
- The Agile Manifesto distilled about 15 years of experiments.
- Technology changes faster than people; that pressure can make human adaptation slower.
- Continue working and communicating instead of declaring principles before anyone knows.

### 8.5 The illusion that everyone is behind

- Statistically, everyone cannot be behind everyone else.
- People compare themselves to the most advanced members of their Dunbar-sized cohort.
- Attending Craft and exchanging experiments already places this cohort toward the leading side.
- Feeling behind is useful when it motivates experiments, harmful when it triggers doom-scrolling.

## 9. Q&A

### 9.1 Q1 — How should computer-science education change?

- Beck calls a CS degree “pre-programmer,” as chemistry can be pre-medicine.
- Four years should prepare someone to learn professional programming, not certify completion.
- Graduates need testing, refactoring, and the distinction between behavioral and structural change.
- They should maintain their own earlier code and experience consequences.
- Programs need longitudinal, multiperson projects even though teamwork complicates grading.
- Big-O reasoning, semantics-preserving transformations, and correctness remain important.
- Rote internal implementation of data structures matters less than understanding their external properties.

### 9.2 Q2 — What about 100 features and zero futures?

- Restart a personal project when that is cheaper; Beck has done so repeatedly.
- Otherwise, preserve the feature stream because it earns organizational trust.
- Add two future-building steps between successive features.
- Understand, test, rename, and refactor incrementally rather than proposing a long cleanup freeze.

### 9.3 Q3 — Does engineering value make business and marketing less valuable?

- Beck reacts strongly because his younger self held that “programmers are the only important people” attitude.
- He now calls it false and harmful.
- Effective software needs varied skills, experiences, and perspectives.
- Nine months working with a business-development and marketing specialist taught him to value her contribution.
- XP's “whole team” never meant programmers alone.
- People should know one another as humans; together they accomplish more than any role can alone.

## 10. People & References Cited

### 10.1 People

- **Kent Beck** — speaker; author and Extreme Programming pioneer.
- **Bethany Andres-Beck** — creator of the forest/desert attractor metaphor.
- **Dan North** — Craft speaker whose nervousness exemplified the atmosphere.
- **Pablo Casals** — cellist in the “rest between notes” teaching story.
- **Elisabeth Kübler-Ross** — psychologist associated with five stages of grief.
- **Keith and Jane** — generic peers in Beck's explanation of feeling behind.

### 10.2 Works and concepts

- ***Smalltalk Best Practice Patterns* and *Implementation Patterns*** — Beck books whose taught skills lost leverage.
- ***The Decline and Fall of the American Programmer*** — source in the 1994 job-loss anecdote.
- **Forest, desert, genie, features, and futures** — talk's central metaphors.
- **TDD, refactoring, fuzzing, mutation testing, coverage, mob programming, OOPSLA, and Agile Manifesto** — practices and history cited.
- **Dunbar's number** — explanation for distorted peer comparison.

---

*Video: https://www.youtube.com/watch?v=amQnub3sHIQ — Transcript via yt-transcript.sh; outline generated from the transcript.*
