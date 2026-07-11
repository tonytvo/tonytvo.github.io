---
title: "Computer vision beyond cameras - how robots can see with radars? – Andras Palffy | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Andras Palffy on physical AI and why radar — cheap, weather-robust, 3D — is the underrated sensor for robot perception, plus the AI needed to make its sparse, noisy data usable."
type: "reference"
tags: ["softwaredevelopment"]
---

# Computer vision beyond cameras – how robots can see with radars? – Andras Palffy (Talk Outline)

> Andras Palffy (co-founder, Perceive AI) on **physical AI** — taking AI out of the comfortable digital world into the messy real one — and why **radar** is the underrated sensor for robot perception.

---

## 1. Physical AI & Perception

- AI thrives digitally but the promised robots/self-driving cars aren't here because the **real world is messy** (lighting, weather, continuous, unquantized). Any robot must **understand its environment** — **perception** — in any condition, at a scalable price. The autonomy stack: perception → decision/planning → action.

## 2. Sensor Scorecard

- **Camera:** passive, cheap (~$100), human-like — but **no native 3D** and poor in bad weather.
- **Lidar:** active laser, **3D**, sees in the dark — but **expensive (~$500)** and weather-sensitive.
- **Radar:** **3D, extremely weather-robust, cheap (~$20–25)**, and hideable (already behind most cars' emblems, on Waymo roofs). Physics: radar's **long wavelength (mm/cm)** penetrates airborne dust/snow/rain that scatter light.
- Live demos: radar sees a person walking through **smoke** and cars/scooters/cyclists hundreds of meters ahead in **fog** where lidar sees nothing.

## 3. Why Radar Is Hard

- Radar data is **sparse and noisy** — a point cloud is unintelligible (even to an 8-year expert), and range-vs-velocity plots are unintuitive (a cyclist's wheel rotates at different speeds top vs. bottom). So few work with it, and radar's *perception capability* lags — which is exactly what **AI software** can elevate (cheaper/fewer sensors for the same performance).

## 4. What Perceive Builds (radar-only)

- **Ego-motion estimation** — where the robot is in 3D without GPS (tunnels, cities, jammed war zones; demoed on a pitch-black military chase).
- **Occupancy / free-road map** — "is there *something* to avoid?" (highway, urban, off-road, night; sees pedestrians across an intersection).
- **Object classification** — cars/pedestrians/cyclists as boxes, in fog/dark; happy to **fuse** with camera/thermal/lidar, but it's "just a software upgrade" for a sensor you already have. (Radar also can't identify people → a **privacy** benefit, e.g., forklifts.)

## 5. Beyond Cars & Q&A

- Perceive is a **perception** company (cars are one kind of robot): last-mile delivery, agriculture/tractors, airports, mining, lawn mowers, forklifts, boats (port monitoring), drones — and **dual-use** (drone detection/interception; simulation to generate cheap training data).
- Takeaway: it's **"machine perception," not just computer vision** — robots can use many sensors, and radar (cheap, weather-robust, 3D) is coming, but only pays off with good **radar-specific AI**.
- Q&A: could aid blind people as radar+camera; commercial vehicles slow, but drones/shuttles ~6 months; radar+camera often suffices vs. expensive lidar; **synthetic radar data** (patented "useful hallucination") helps; plastic bags don't trigger phantom braking (radar doesn't see thin plastic); multi-radar interference is solvable (like phones negotiating frequencies); Tesla's camera-only is "Elon being Elon" — use multiple sensors if you can; camera-only choices are ultimately about **money** (~$18/vehicle × millions).

---

*Video: https://www.youtube.com/watch?v=6XuWUvuQHcE — Transcript via yt-transcript.sh; outline generated from the transcript.*
