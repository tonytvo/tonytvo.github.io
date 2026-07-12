---
title: "Fractal Geometry of Software Design - Vladik Khononov | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Vladik Khononov applies Geoffrey West's scaling laws to software, modeling knowledge as energy and deriving fractal modularity from coupling strength, component distance, and cognitive limits."
type: "reference"
tags: ["softwaredevelopment"]
---

# Fractal Geometry of Software Design - Vladik Khononov (Talk Outline)

> At Craft 2025, *Learning Domain-Driven Design* and *Balancing Coupling in Software Design* author Vladik Khononov borrows Geoffrey West's theory of energy-supply networks to explain software growth. He identifies knowledge as software's transported energy, classifies four coupling strengths, compares sublinear and superlinear scaling, invokes Galileo's square-cube law to explain big balls of mud, and derives a fractal rule for modularity across every abstraction level.

## 1. Scaling complex adaptive systems

### 1.1 Speaker and source material

- Khononov has worked as a software architect for more than 15 years and owns five cats.
- *Balancing Coupling* systematizes software-design knowledge accumulated since the 1960s.
- Geoffrey West's *Scale*, a book about biology and social systems rather than software, changed Khononov's thinking.

### 1.2 Straight lines on logarithmic plots

- Animal metabolic rate plotted against body mass forms a near-straight log-log line.
- City patent counts plotted against population do the same.
- Public-company assets and income plotted against employee count also align.
- Size reveals predictable emergent properties even when individual components cannot predict the whole.

### 1.3 Complex adaptive systems

- Animals contain cells, cities contain citizens, and companies contain employees.
- Overall behavior emerges from enormous numbers of interactions.
- West observes organizational similarities across organisms, tumors, cities, and corporations.
- His goal is to understand growth, innovation, and sustainability by varying system size.

## 2. Energy-supply networks

### 2.1 Hierarchical transport

- An energy-supply network extracts energy and moves it through branching hierarchies to component nodes.
- Its survival depends on effective distribution across scales.
- The network's topology affects both capacity and efficiency.

### 2.2 Physical examples

- Bodies distribute oxygen, food energy, and even coffee-derived energy to cells.
- Plants and animals use vascular networks.
- Cities distribute water, electricity, communications, and transportation to citizens.

### 2.3 Conceptual examples

- Companies deliver wages to employees.
- They also route information through departments, managers, and executives.
- Information flow influences whether the organization can achieve its goals.

### 2.4 Software's energy is knowledge

- Services, modules, objects, and methods encapsulate knowledge behind boundaries.
- Integrations allow some knowledge to cross those boundaries.
- More shared knowledge increases the probability of coordinated future changes.
- Boundaries act like pipes transporting knowledge through a hierarchical system.

## 3. Four coupling strengths

### 3.1 Why categorize rather than measure

- Knowledge has no convenient engineering unit.
- Khononov substitutes four ordered categories representing significantly different amounts of sharing.
- From strongest to weakest they are intrusive, functional, model, and contract coupling.

### 3.2 Intrusive coupling

- A component uses implementation knowledge it should not possess.
- One microservice reads or writes another's database instead of using its public interface.
- Reflection invokes another object's private method.
- The dependency is fragile and often invisible to the component owner.
- Any internal change can trigger cascading failures.

### 3.3 Functional coupling

- Multiple components share knowledge of the same business requirement.
- Duplicated business rules must change together.
- Updating only one copy makes components produce conflicting decisions for identical input.
- The dependency is implicit and difficult to inventory.

### 3.4 Model coupling

- Components share a model of the business domain.
- Domain models must evolve as understanding changes.
- Every component based on that model may need coordinated evolution.
- DDD makes this form and its consequences particularly visible.

### 3.5 Contract coupling

- A contract is an integration-specific “model of a model.”
- It hides implementation, internal domain models, and most functional knowledge.
- Internal changes remain contained while the contract stays stable.
- DDD published languages, facades, DTOs, and API gateways are examples.

## 4. Growth is rarely linear

### 4.1 Log-log plots can disguise exponents

- Straight lines do not mean proportional growth when both axes use powers of ten.
- On ordinary axes, elephants or very large cities dominate the graph.
- The slope on a log-log plot expresses a scaling exponent.

### 4.2 Sublinear metabolism

- Basal metabolic rate scales at roughly body mass to the three-quarter power.
- Khononov compares dogs whose weights double from Chihuahua to Newfoundland.
- Linear reasoning predicts the Newfoundland needs about 3,500 calories.
- The scaling law predicts roughly 1,474 calories.
- Larger organisms become more efficient per unit of body mass.

### 4.3 Sublinear city infrastructure

- A city doubling population needs only about 85% more roads, wires, pipes, and similar infrastructure.
- German gas-station counts demonstrate the same economy of scale.
- Underlying distribution networks share resources more efficiently as they grow.

### 4.4 Superlinear city creativity

- Registered patents scale approximately as population to the 1.15 power.
- Doubling a city produces about 115% more patents rather than 100% more.
- More people create disproportionately more interactions and combinations of ideas.

### 4.5 Software's sublinear knowledge growth

- Functionality can grow approximately linearly as features are added.
- Added knowledge grows sublinearly because new work reuses infrastructure, models, and existing functionality.
- This efficiency explains the attraction of growth.

## 5. Why efficient systems still stop growing

### 5.1 Galileo's square-cube argument

- In *Two New Sciences* (1638), Galileo explains that structures cannot scale indefinitely with unchanged proportions.
- Doubling a wooden beam multiplies volume and weight by eight.
- Cross-sectional fracture resistance grows only by four.
- A proportionally scaled four-meter human would collapse under its own weight.

### 5.2 Stress can outgrow resistance

- Growth makes desirable efficiencies stronger.
- It can make undesirable consequences stronger too.
- A system reaches a limit when stress-inducing quantities grow faster than stress-bearing capabilities.

### 5.3 Interactions grow superlinearly

- Each new software component creates possible relationships with existing components.
- Knowledge needed for functionality grows sublinearly, but possible interactions grow superlinearly.
- Complexity comes from this interaction space rather than feature count alone.

### 5.4 Cognition is the flat line

- Human cognitive capacity does not scale with system size.
- Khononov jokes that studies might show it declining, but optimistically treats it as constant.
- When possible interactions exceed comprehension, the codebase becomes a big ball of mud.
- The software is “crushed under the weight of its complexity,” echoing Galileo.

## 6. Extending the growth limit

### 6.1 Galileo's first option: change form

- A giant's bones must become disproportionately thicker.
- Changing geometry lets the structure bear increased stress.
- Software likewise needs a form adapted to its interaction scale.

### 6.2 Galileo's second option: stronger material

- Unchanged proportions require harder, stronger bone material.
- For software, this would mean engineers with substantially higher or growing cognitive limits.
- Khononov says AI may move in that direction, but it is not yet a dependable answer.

### 6.3 Sustainable growth requires innovation

- Cities remained below roughly one million people until infrastructure innovation changed constraints.
- Industrial Revolution technologies allowed urban populations to skyrocket.
- Growth limits move only when material or form changes.

## 7. Fractal networks in nature

### 7.1 Mathematical versus natural fractals

- Mathematical fractals repeat exact or near-exact shapes indefinitely.
- Broccoli retains self-similarity for only four or five levels.
- Nature uses fractal-like topology rather than infinite psychedelic geometry.

### 7.2 Self-similar branching

- River tributaries branch similarly across scales without identical shapes.
- Circulatory and plant networks distribute energy through hierarchical branches.
- The pattern efficiently services enormous numbers of constituent units.

### 7.3 Fractals underlie sublinear savings

- Many sublinear phenomena—metabolism, roads, pipes, wires, gas stations—use an underlying fractal distribution network.
- Self-similar branching enables systematic economies of scale.
- Software can adopt the same strategy to restrain interaction complexity.

## 8. Fractal modularity

### 8.1 Hierarchical modules

- A system contains modules, which contain smaller modules, objects, and methods.
- Knowledge crosses boundaries at each level.
- A useful modularity rule must remain self-similar across all those scales.

### 8.2 Quantity 1: integration strength

- Strength represents how much knowledge components share.
- Intrusive coupling is strongest and contract coupling weakest.
- Strong coupling means a higher likelihood of joint change.

### 8.3 Quantity 2: distance

- Distance is physical or organizational separation between coupled components.
- Methods in one object are close; services, systems, teams, and companies are progressively farther apart.
- Coordinating a simultaneous change becomes more expensive as distance rises.

## 9. The four strength/distance quadrants

### 9.1 High distance, low strength: loose coupling

- Each coordinated change is expensive because components are far apart.
- Little knowledge is shared, so coordinated changes are rare.
- Low frequency balances high cost.

### 9.2 Low distance, high strength: high cohesion

- Business requirements sometimes force extensive shared knowledge.
- Placing co-evolving components close together makes their frequent joint changes cheap.
- High strength is balanced by low distance.

### 9.3 Low distance, low strength: local complexity

- Two unrelated nearby components may appear harmless.
- Hundreds of unrelated things shoehorned into one boundary create cognitive obstruction.
- Every local change must navigate irrelevant material.
- The complexity is concentrated inside the component or module.

### 9.4 High distance, high strength: global complexity

- Components share substantial knowledge while remaining costly to coordinate.
- Frequent cascading changes are individually expensive.
- Khononov calls this a “world of pain.”
- An audience member at another conference preferred the red quadrant for job security.

## 10. Applying the equation

### 10.1 Modularity as strength over distance

- Khononov summarizes modularity as an inverse relationship between shared knowledge and distance.
- The shorthand is integration strength divided by distance, `S/D`.
- Healthy designs balance one high quantity with one low quantity.

### 10.2 First minimize knowledge

- Find the lowest coupling strength the real requirement allows.
- Replace intrusive, functional, or model knowledge with stable contracts where possible.
- Reducing knowledge reduces the frequency of future coordinated changes.

### 10.3 Then balance distance

- If strength and distance are both high, move components closer.
- If strength and distance are both low, separate unrelated components.
- The rule yields cohesion locally and loose coupling remotely.

### 10.4 Repeat at every abstraction level

- A contract at one scale can become shared-model knowledge when viewed from a higher scale.
- What looks like implementation detail at one level may be an entire subsystem below.
- Coupling categories are relative to the boundary under examination.
- Enforcing the same balance recursively creates software's fractal geometry.

## 11. Closing

### 11.1 Ambition and caveats

- Khononov hopes fractal modularity can reduce or perhaps make complexity growth sublinear.
- He acknowledges that *Scale* imposes additional criteria for true energy-supply networks.
- He assigns examining software against those criteria as audience homework.

### 11.2 Resources

- Khononov recommends *Scale* for the complete scaling theory.
- He recommends *Balancing Coupling in Software Design* for deeper coupling analysis.
- `coupling.dev` contains summaries and links to his books.
- Time expires without audience Q&A.

## 12. People & References Cited

### 12.1 People

- **Vladik Khononov** — speaker and software architect.
- **Geoffrey West** — physicist and author of *Scale*.
- **Galileo Galilei** — source of the square-cube growth-limit argument.
- **Diana** — prior Craft speaker whose talk apparently primed the audience to answer “knowledge.”

### 12.2 Works and concepts

- ***Learning Domain-Driven Design*** and ***Balancing Coupling in Software Design*** — Khononov's books.
- ***Scale*** — source theory for energy-supply networks and scaling laws.
- ***Two New Sciences*** — Galileo's 1638 work on structural scaling.
- **DDD published language, facade, DTO, and API gateway** — contract-coupling examples.
- **Sublinear and superlinear scaling, square-cube law, fractal topology, coupling strength, distance, cohesion, and complexity** — core concepts.

---

*Video: https://www.youtube.com/watch?v=qwWSNis8rvw — Transcript via yt-transcript.sh; outline generated from the transcript.*
