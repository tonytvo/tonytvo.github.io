---
title: "Legacy Architecture Migration Patterns - Nick Tune, Guillaume Rahbari | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Nick Tune and Guillaume Rahbari (Payfit) on migrating legacy architecture — migration is model improvement not just rewriting, plus patterns (strangler fig, bubble, migrate-write-first, republishing) and real case studies."
type: "reference"
tags: ["softwaredevelopment"]
---

# Legacy Architecture Migration Patterns - Nick Tune, Guillaume Rahbari (Talk Outline)

> Nick Tune (author of *Architecture Modernization*) and Guillaume Rahbari (senior engineer) on migrating from a legacy system to a target architecture — with Payfit (HR/payroll platform) case studies.

---

## 1. Migration Is Model Improvement, Not Just Rewriting

- Migration is a chance to improve software, infra, UI, the **domain model**, and even change how the business works (simplify/automate/delete/inject AI). Beware **semantic drift**: code crystallizes while business language evolves (an "employee" became a "contract" but the model stayed — now `employeeId` sometimes means a contract ID). Also **fix coupling and domain boundaries** during migration (cut dependencies, bring cohesive logic together) — don't migrate old coupling into the new system.

## 2. The Patterns

- **Strangler fig** ("everyone lists it first — calm down") — a router shifts requests to new code; useful but doesn't handle changed models/APIs or **data**. **Data integration** options: domain events, change data capture, batch/import, shared DB. **Bubble context** (build a new model behind an anti-corruption layer) / **autonomous bubble** (with its own DB + async replication). **Wrapping** the legacy with an API/events. **Migrate-write-first** (writes go through the new system, reads stay on the old, sync in the background — forces the complex flows early, learn/own your model fast) or **migrate-read-first** (reduce DB load). **Bidirectional sync** (writes and reads on both — risky, data inconsistencies; not recommended but sometimes needed).

## 3. Case Study 1 — Employee Management (migrate-write-first)

- The employee domain is upstream of payroll/absences, split across **3 systems and 3 countries** (different models). Target: a **collaborator** with one personal info and multiple **working agreements** (contract/mandate/internship). Pulled in three directions (other domains want events; partners want new read APIs; complexity wants the new model first) → chose **write-first** to own the complex model early and reduce bugs, done **incrementally** (both systems run together, deliver value along the way). Reality: a **three-directional sync** (three "create collaborator" entry points kept in sync), **duplicates ("doublons")** from a broken matching process, and **21 legacy entry points** to reverse-engineer/merge (reducing accidental complexity, enabling reliable domain events). Chose to migrate **back-end and front-end together** (tightly coupled in their low-code platform).

## 4. Case Study 2 — Contract (legacy event republishing)

- They were a **bottleneck** for teams waiting on working-agreement events. Rejected simply letting teams consume the raw legacy events (would couple everyone to the old model forever — "system A, B, C, D in five years"). Instead **republish**: consume legacy (technical) events, **translate to the new model**, and publish those — encapsulating the legacy while staying focused on employee. Needs strong **observability** (an internal portal to see all events for any entity ID; events in Snowflake for correlated queries; a **DLQ** with full message + error). Challenges: unreliable/duplicate/out-of-order legacy events, direct DB edits that emit nothing, country specifics, and a stricter new model.
- **Takeaways:** think through which patterns fit; incremental write migration almost guarantees a **bidirectional sync** (prepare for consistency issues early); it needs **leadership priority** and a clear **architecture vision** to steer through hard moments; "progress feels good — don't give up" (a year in, half of manual creations run on the new system). Q&A: they synchronize via a **private event store** + an integration platform; standard sync mechanisms beat ad-hoc integrations; the 21 entry points took months to discover by asking many people.

---

*Video: https://www.youtube.com/watch?v=X1imE1ks_3Y — Transcript via yt-transcript.sh; outline generated from the transcript.*
