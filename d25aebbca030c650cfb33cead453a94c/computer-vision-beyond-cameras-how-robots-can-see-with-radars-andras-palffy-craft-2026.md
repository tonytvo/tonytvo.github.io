---
title: "Computer vision beyond cameras - how robots can see with radars? – Andras Palffy | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Andras Palffy (co-founder, Perceive AI) makes the case for radar as the underrated robot-perception sensor — cheap, weather-robust, 3D, hideable — with the physics of why it sees through smoke/fog, live lidar-vs-radar demos, why radar data is so hard, the three things Perceive builds with radar only (ego-motion, occupancy, classification), applications from delivery robots to dual-use drone interception, and a wide-ranging Q&A."
type: "reference"
tags: ["softwaredevelopment"]
---

# Computer vision beyond cameras – how robots can see with radars? – Andras Palffy (Talk Outline)

> A **Craft 2026** talk by **Andras ("Andy") Palffy**, co-founder of **Perceive AI** (a Netherlands startup). He opens with a joke: he'll show how robots see the world without cameras, and "whether that helps them destroy humanity is a next talk." His thesis: AI works great in the digital world but not yet in the messy physical one ("physical AI"), and **radar** — cheap, weather-robust, 3D, hideable — is the underrated perception sensor, but only useful with **radar-specific AI software**. The talk's own structure: (1) physical AI and the perception layer, (2) a sensor scorecard (camera / lidar / radar), (3) the physics of radar's weather robustness with live smoke/fog demos, (4) why radar is hard (sparse, noisy data), (5) the three things Perceive builds with radar only, (6) applications beyond cars, (7) dual-use drone work, (8) takeaways, and (9) an extended Q&A.

---

## 1. Physical AI & the Perception Layer

### 1.1 AI thrives in the digital world
- AI is all around us digitally — writes emails, schedules calendars, generates images and full presentations — and works nicely there.

### 1.2 The physical world lags
- We were promised delivery robots, self-driving cars, robot servants, and drones "10, 20, 30 years ago" — still not here.
- Cool YouTube/TikTok videos exist ("cool in California"), but in Europe, "go outside — it's not happening yet."

### 1.3 Why: the real world is messy
- The digital world is a comfortable playground: input is already digital, in AI's own language, processed immediately.
- The real world is messy — it changes, is continuous, not quantized, with varied lighting and weather.
- Example: the **cracks in the ground** here — a robot must notice them, which is non-trivial.

### 1.4 "Physical AI" as a term
- The problem is big enough to have its own term: **physical AI** ("how creative") — taking AI out of the digital world into the real one.
- Many sub-problems (planning, control, regulations on where a self-driving car can safely stop, moral issues) he leaves to other researchers.

### 1.5 The universal requirement: perception
- Any robot, whatever its use case, must **understand its environment** to operate — in **any weather, any lighting**, at a **scalable price point**. That's the talk's message.

### 1.6 The autonomy stack (three oversimplified steps)
1. **Action** — the final visible thing (a car presses the brake, turns the wheel; a robot moves its arm).
2. **Decision / planning** — deciding what to do before acting.
3. **Perception** — you can't do any of it without understanding the environment; icons stress it must work in any conditions.

### 1.7 Perceive AI
- He co-founded **Perceive AI** in the Netherlands (hence the name).
- "Perceive" for perception, **misspelled on purpose** because "every cool startup has a misspelled name."

---

## 2. The Sensor Scorecard

### 2.1 The scoring dimensions
- A table scoring sensors on: does it work in **3D**? does it work in **bad/any weather**? and **affordability/price**.

### 2.2 Camera
- Closest to the human eye; a **passive** sensor (emits nothing, just takes in).
- Cheap — an automotive camera is ~**$100**.
- **No native 3D** (close one eye — you don't see 3D).
- Poor in tricky weather/lighting — but "an amazing sensor we need for sure."

### 2.3 Lidar (laser scanner)
- **Active** sensor emitting invisible light reflected back and processed.
- Big benefit: **3D**; also sees in the dark.
- **Expensive** vs. cameras; weather is very tricky for it.

### 2.4 Radar — the star of the show
- Very few people have ever seen radar data.
- Sees in **3D**, is **super robust in bad weather**, and is **cheap** — an automotive radar is **$20–$25** depending on resolution (vs. lidar ~**$500**).

### 2.5 You've seen radar without knowing it
- On a **Waymo** robotaxi roof: people recognize the lidar and cameras, but there's also a **radar** — "a boring black rectangle, hidden in plain sight."
- Radar is on almost every new car in the Western Hemisphere (**Volkswagen, Toyota, Volvo**), often hidden **behind the car's emblem**.
- Huge benefit: it can be **hidden** — inside a humanoid robot's chest, you'd never see it.

### 2.6 The affordability × weather-robustness graph
- On a graph of affordability vs. weather robustness, radar sits **top-right** ("top right is always the best") — great on both.

---

## 3. The Physics of Radar's Weather Robustness

### 3.1 The electromagnetic spectrum
- From X-rays to radio waves, including infrared and the **visible spectrum** (where we see colors).

### 3.2 Where each sensor sits
- **Camera** operates in essentially the visible spectrum (slightly wider, but programmed to give a familiar-looking image).
- **Lidar** is just outside visible — very close; fun fact: a **smartphone camera can see the laser's red dot** (careful — it can damage your phone).

### 3.3 Why radar penetrates bad weather
- **Radar** is far off on the spectrum, at **significantly lower frequency**.
- Since all propagate at light speed, lower frequency means **much larger wavelength** — measured in **millimeters/centimeters**, not nanometers.
- Bad weather is just "things in the air" (dust, snowflakes, rain, water droplets); the long wave **penetrates/goes around** them.

### 3.4 Live demo — walking out of smoke
- Co-founder **Sriman Narayana** walks out of smoke "Bollywood style."
- **Lidar** shows the smoke propagating across the scene — dangerous (a car would emergency-brake) — and can barely see him.
- Every red dot is a **radar reflection**; radar "doesn't give a damn about the smoke" — noisy but sees through it.

### 3.5 Live demo — driving in Dutch fog
- In the Netherlands, "if it's not raining, it's foggy."
- Driving next to a canal: **radar sees far ahead** through fog; the **two expensive lidars** (red/blue points, "as expensive as the car") see only a couple of meters.
- Zooming in: a **car hidden in the fog** hundreds of meters ahead (would fool human eyes; lidar clueless).
- Then a **scooter** appears — radar sees it, barely visible otherwise.
- A **cyclist behind a tree on the left** — radar sees it, lidar doesn't. (But: "how do you decide that's a scooter?" — that decision is what they sell.)

---

## 4. Why Radar Is Hard

### 4.1 Sparse and noisy data
- If radar were easy, everyone would use it — but the data is **very sparse and very noisy**.

### 4.2 The unintelligible point cloud
- He shows a radar point cloud of a street — "you have zero idea what we're looking at."
- After 8 years he also wouldn't know without having made the presentation.
- With the camera image beside it (a street with a cyclist), the cyclist is just **two dots** — hard to tell an AI "stop for these two dots, ignore all the others."

### 4.3 Range-vs-velocity plots are unintuitive
- Before point clouds there are **distance-vs-velocity plots** — "super weird, not intuitive at all."
- A cyclist coming toward you: the **top of the wheel moves faster than the bottom**, visible in radar but not other sensors — a weird setup that's hard to work with.

### 4.4 Radar's perception capability lags — and that's the opening
- Because almost nobody works with it, radar's **perception capability** is low on the capability graph.
- Perceive's job: **elevate radar with software** (networks), leaving hardware to the professionals.
- With extra AI, you get the **same performance from cheaper radars, or fewer radars/cameras/lidars** — saving money for the car/robot.

---

## 5. What Perceive Builds (Radar Only)

### 5.1 Ego-motion estimation — "where am I?"
- Tells where the robot is in the 3D world **without GPS**.
- Demo: driving a roundabout — a "Strava-like" line done by **radar-only ego-motion**, accurate in the worst weather with no GPS.
- Why no GPS? Underground, tunnels, between New York's high buildings, or **war zones where GPS is immediately jammed**.
- Demoed in a **pitch-black military simulation** chasing another vehicle — handled perfectly, no GPS or other sensor needed.

### 5.2 Free-road / occupancy map — "is there something?"
- His favorite feature: **just tell me if there's something to avoid**, not what it is.
- Top-view map: brighter pixel = more occupied; shows cars and the road edge (projected into camera view only for the audience's benefit).
- A single radar sees ahead and accurately tracks anything.
- Works on the **highway** and in **urban** environments (crossing cyclists/cars); shows **pedestrians on the far edge of an intersection** far ahead.
- Works at **night** (no lighting needed).
- Works **off-road** too (harder — the road isn't flat, needs 3D); 3D estimate of the drivable dirt road, with the **quad being followed** as a bump ahead.

### 5.3 Object classification — "what is it?"
- The "crown jewel": classify the object you're avoiding.
- Demo: camera on left, lidar on right, but every **box comes from radar only** — works in pitch black / heavy fog identically.
- Color code: **blue = cars, green = pedestrians, red = cyclists**.
- Living in the Netherlands, they likely have "the biggest cyclist dataset in the world."
- Happy to **fuse** with camera / night vision / lidar — but if you already have the radar sensor, "why not make the most of it? It's just a software upgrade."

### 5.4 Off-road classification demo
- Sent into a **dark forest** to classify objects in pitch-black conditions.
- Uses a **thermal camera** here (shows the quad's engine glowing bright red).

### 5.5 The fog near-miss demo
- Dangerous scenario: driving tired in fog, a **cyclist pops out from behind an occluding car**, and the driver doesn't react in time.
- Radar sees the moving bicycle (ignores fog) **and** the pedestrians on the right and left.
- Played slow to show the reaction speed — a setup ("we made sure not to kill our intern").

---

## 6. Beyond Cars: A Perception Company

### 6.1 Perceive is a perception company, not automotive
- "We make robots see" — cars are just one kind of robot.

### 6.2 The application list
- **Delivery robots** — last-mile (Uber Eats-style) on the pavement: don't crash into pedestrians.
- **Agriculture / tractors** — detect animals and vegetation.
- **Airport operations** — avoid objects/vehicles that only exist there (needed special permits to record data).
- **Mining and construction operations.**
- **Lawn mowers** — "a big lawn mower is a small car" — don't kill the pedestrian.
- **Forklifts** — where **privacy** is a big issue: cameras recognize the worker, radar can't (a benefit customers like).

### 6.3 The hardware fleet
- **Own road vehicle:** an acquired **Volkswagen** stuffed with roof and bumper sensors — legal but a gray zone (only ~2 in the Netherlands, ~20 in Europe); police "just let it drive."
- **Boat radar:** a bulkier roof unit; parked next to the **Rotterdam port** to monitor incoming boats — important for **smuggling / illegal immigration** (report boats without a transponder).
- **Off-road vehicle:** goes over almost anything; used in operations with European militaries.
- **Self-driving lawn mower:** sensors in front, cuts the golf course/lawn.
- **Drone:** a large one carrying up to **100 kg**, looking down to map the environment with radars and other sensors.
- **Agriculture manure-removal robot:** like a vacuum cleaner but for cow manure — extremely dirty, so a camera blinds in minutes but radar doesn't care (colleagues "weren't happy" recording data there).

---

## 7. Dual-Use: Drone Detection & Interception

### 7.1 Why dual-use
- "An unfortunate series of events in Europe and beyond" pushed them into **dual-use** (civilian + military) applications.

### 7.2 Drone detection use cases
- **Vehicle protection** against incoming **FPV drones** — give the driver/passengers a few seconds to jump off.
- **Infrastructure/perimeter protection** (e.g., an embassy fence) — track incoming drones.
- **Long-range drones** — the **Shahed / Geran** drones that fly hundreds of kilometers, "extremely dangerous and cruel," currently stopped by spending "crazy amounts of money per drone."

### 7.3 Drones chasing drones
- Smart people build drones to chase and knock others out of the sky.
- Detecting the other drone by camera fails in bad weather — so **radar goes on the car** (fence) or on the **interceptor drone** to chase and terminate the target.

### 7.4 The interceptor simulation over Budapest
- Real interceptor data is rare and can't be shown, so he prepared a **simulation**: their drone chases another doing circles; radar data and a bird's-eye map on the right.
- Simulation lets them get **training data for free** without sacrificing two drones per recording.
- Observant viewers recognize it's above **Budapest** (the palace, Margaret Island) — a "home call" for him.
- The city is **flipped on the vertical axis** — a "Stranger Things"-like mirrored Budapest — demonstrating **data augmentation** in simulation.

---

## 8. Takeaways

### 8.1 Machine perception, not just computer vision
- There's much more to perception than cameras; people should say **"computer/machine perception"** because, unlike us, robots can use many sensors — one being **radar**.

### 8.2 Radar is coming — with the right AI
- Radar will be around: **extremely cheap, weather-robust, 3D**.
- But to exploit it you need not just cheap commodity hardware but **really good radar software driven by AI** — specific networks to use the information.
- Invites the audience to reach out by email or LinkedIn to network.

---

## 9. Q&A

> The host joked that this is "exactly what happens in my anxious mind" — an agent removes the don't-hit-pedestrians safety feature and all the lawn mowers and cars mow humans, "and this is how we all die."

### 9.1 Q1 — Could this assist blind people, or is radar too unreliable/risky?
- He's thought about it — "a stick without a stick" for blind people; good at short range (recognize a corridor, walk through).
- Radar's trickiest scenario is **very crowded** environments — exactly where blind people walk.
- Wouldn't trust radar-only, but it's a nice addition — **radar + camera** could be a solution.

### 9.2 Q2 — Will we see Perceive in commercial vehicles in the next 1–2 years?
- Define "commercial vehicle": a Volkswagen/passenger car — **no**; automotive is "an extremely slow animal."
- **Drones or an airport shuttle** — **yes**; some operations go live in ~**6 months**.

### 9.3 Q3 — Is lidar always necessary, or is radar + camera mostly sufficient?
- Depends on the domain. He likes lidar; his only problem is the **expense**.
- **Radar + camera** can do "extraordinary things" beyond what was thought possible — not "get rid of lidar," but maybe use a **cheaper lidar** for the same scenario.

### 9.4 Q4 — How does a startup compete against big companies doing the same?
- It's tough, but "make a blessing out of a curse": they operate **much faster** — adopt a new technology next week, while big firms "take years to read the paper."
- They try to be **friends, not challengers** — like the "little fish cleaning a shark's teeth": "we're here to help."

### 9.5 Q5 — Do you use synthetic data to increase training-data diversity? How?
- Yes — with **patents and publications** on it.
- Radar simulation is tough; they built their own — "just like ChatGPT hallucinates text, we hallucinate radar points."
- The trick is a **useful hallucination**; it helps a lot.

### 9.6 Q6 — The "plastic bag effect" (would a bag cause phantom braking)?
- No — **radar doesn't see plastic**, especially thin plastic — which is a good thing here.

### 9.7 Q7 — Do the lawn mowers also see hedgehogs (banned at night in Germany for killing them)?
- They see **movement** very accurately and can detect an **animal's heartbeat**, so probably yes — but they haven't tried it, "don't quote me."

### 9.8 Q8 — How do horizontal/flat objects (the road) reflect radar?
- For radar, **flat surfaces are mirrors** — the signal bounces away, not straight back.
- Like driving on a mirror: you never "see" a mirror, you see what it reflects.
- They infer indirectly that "this is a reflection, so the road was there." ("Great question.")

### 9.9 Q9 — Will many vehicles with similar radars over-irradiate the environment and make data useless?
- Yes, a coming problem — every car will have **7–9 radars** within 10 years (imagine 20 cars × 7 radars at an intersection).
- But it's a **solved problem in principle** — like phones using the same frequencies, they can **negotiate** ("I'm using this frequency for the next 10 seconds, leave me alone").
- Right now it's **not yet solved** in practice.

### 9.10 Q10 — Thoughts on Tesla's camera-only vision approach; is it possible?
- "It's not my opinion, it's happening" — a Tesla drives you most of the time, "and that's the problem: how far do you trust it."
- Full self-driving is legal in the Netherlands, but **you're still responsible** if it kills someone — "not Tesla's fault," and he questions whether that's communicated.
- Amazing what they achieved camera-only; they **did have radars, now don't** — "this is Elon being Elon"; many people left Tesla over it.
- His view: "if a robot can use multiple sensors, use multiple sensors."

### 9.11 Q11 — What advantage do companies see in dropping radar for cameras only?
- Simple: **money** — "automotive is about money; it's disgusting."
- They fight over cents (how thick the car emblem is): save 2 cents × 8 million cars/year adds up.
- Eliminating the radar saves ~**$18/vehicle**; at 8 million vehicles, "not a bad deal."
- They then face the moral issue of "at what money do you decide to have a less safe vehicle — but that's not our call."

### 9.12 Q12 — Cost vs. utility: where do prototypes fall vs. the optimal?
- Radars are like cameras — telescopes vs. microscopes, a phone's bad camera vs. a Champions-League camera — huge variety; pick the tool for the use case (and budget).
- Example: **corners of cars** use a **cheaper sensor** (mostly blind-spot detection) than the **front** (where you need to know **what** it is, not just that it's there).

### 9.13 Q13 — Your team's red lines on dual-use devices?
- **They don't do offense / don't attack.**
- Easy to say, and "who knows where the technology ends up," but they try to keep their conscience clean, **double-check where it goes**, and restrict to **Europe / NATO only** — their moral guidance.

---

## People & References Cited

- **Andras ("Andy") Palffy** — speaker; co-founder of Perceive AI; PhD ("doctor" title for academic conferences); ~8 years working with radar.
- **Sriman Narayana** — co-founder; walked out of the smoke in the live demo.
- **Companies / products:** Perceive AI (Netherlands startup, intentionally misspelled name); Waymo (robotaxi with hidden radar); Volkswagen, Toyota, Volvo (radars behind emblems); Tesla (camera-only "vision" approach, formerly had radar); Uber Eats (last-mile delivery analogy); ChatGPT (hallucination analogy for synthetic radar data).
- **Places:** Netherlands; Rotterdam port; Budapest (interceptor-drone simulation, mirrored); New York (GPS-denied); Germany (lawn mowers banned at night for killing hedgehogs).
- **Hardware / weapons referenced:** camera (~$100), lidar (~$500), automotive radar ($20–25); Shahed / Geran long-range drones; FPV drones.
- **Concepts:** physical AI; the autonomy stack (perception → decision/planning → action); perception in any weather/lighting at scalable price; sensor scorecard (3D / weather / price); passive vs. active sensors; the electromagnetic spectrum and wavelength/penetration physics; radar weather-robustness; sparse/noisy radar data; range-vs-velocity plots; elevating radar capability with AI software; ego-motion estimation (GPS-denied); occupancy/free-road map; object classification; sensor fusion; privacy benefit of radar; dual-use (civilian + military); synthetic/"useful hallucination" radar data (patented); multi-radar interference (frequency negotiation like phones); flat surfaces as radar mirrors; "machine/computer perception" vs. "computer vision"; automotive cost-cutting economics (~$18/vehicle).

---

*Video: https://www.youtube.com/watch?v=6XuWUvuQHcE — Transcript via yt-transcript.sh; outline generated from the transcript.*
