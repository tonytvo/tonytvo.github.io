---
title: "Sharpen Your Tools: Building the right Developer Experience - Suhail Patel | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Suhail Patel (Monzo) on building developer tooling engineers actually want — a paved road of 3,000+ uniform microservices, proto-generated RPC/Kafka code, AST/Semgrep static analysis, incident-driven CI checks, a YAML-free deploy CLI, sanitized prod-access tooling, and easy production profiling."
type: "reference"
tags: ["softwaredevelopment"]
---

# Sharpen Your Tools: Building the right Developer Experience - Suhail Patel (Talk Outline)

> **Suhail Patel** — principal engineer at **Monzo** (London), leading core-platform and data-platform experiences — on building developer tooling engineers **actually want to use**: make the paved road so fast and easy that engineers *prefer* it to building their own stack. The last talk of a long two days, delivered fast with lots of demos.

---

## 1. The Philosophy — Do the Right Thing by Default

- "Developer experience" evokes a **diaspora of tools** (cloud offerings, CI, Kubernetes, Docker, Terraform, make files, cobbled-together bash scripts) that engineers proudly rattle off. New use cases → teams **add to the pile of hammers** or buy a vendor tool that "pinky-promised" to solve everything ("we now do **AI-native Java debugging**" — "what does that mean?" — "I don't know, but it's AI-native"; vendors call daily, even in Budapest).
- **The reframe:** end users don't care whether you run Kubernetes/AWS/Terraform/bash — they want a **reliable product**. Non-platform/non-security engineers **shouldn't need to care either**. Spend the energy making it **so compelling, fast, and easy** to do the right thing that engineers opt for your **paved road** and ship to production with confidence.
- Build/operate your own tools or **deeply integrate open source** in an **opinionated** way (don't expose all of Kafka/Cassandra's semantics directly).
- **Measuring DX:** you can be numbers-driven (surveys, **DX/Laura Tacko**), but the ultimate testimonial is engineers relying on the tools — they only realize what they had when they **leave and lose the ecosystem**. DX friction is a real (if unmeasured, vs. salary/team) reason people leave or stay.

---

## 2. Monzo & the Financial-Services Status Quo

- **Monzo:** a fully licensed/regulated UK consumer bank (small US presence, expanding to Europe), like Revolut/N26; **~12M customers**, growing across personal and business banking; **no physical branches** — everything via an app, so systems must work **24/7, 365** (no bank holidays online). Downtime = a customer stranded at a petrol station.
- A bank must **reliably store** money *and* let you **transact** — with fraud/AML checks and heavy regulation behind even a simple transfer. UK payment schemes (**Mastercard, Apple/Google Pay, BACS** for direct debits, **Faster Payments** for instant) each have different rules/cadences — and some still run on **unsecured FTP servers** moving flat files in batch. Customers expect a **modern, seamless** product regardless.
- Many financial firms accept a workflow of **assessments/reviews before a line of code is written** → days/weeks/months to ship. Polls: most can build-and-deploy same day, **far fewer within minutes** — and once it takes >1 day you **lose flow state**. Rules like "**don't deploy on Fridays**" and the **change-approval board** (platform + security + risk + governance + product, lots of paperwork, power to delay/stop) are "miserable, full of misery." These forums exist because changes have a **large blast radius** — caused by an inability to release **small atomic units** → a **self-perpetuating cycle** rooted in poor DX.

---

## 3. Uniformity — The Anatomy of a Service

- Monzo's microservice graph: a **microservices architecture** (auth, features, payments, support) all on the **same platform** — **3,000+ microservices** with only **a couple hundred engineers** (joke: "here are your 10 services — water and nurture them like plants"). Edges = RPC/HTTP calls.
- Doing a change-management process even at a perfect **1 service/day** would take **~9 years** for 3,000 services — untenable. The process must be **fluid**.
- **Developer-experience contract = uniformity.** Most services use the **same template and abstractions** → 3,000 components share the same **battle-hardened library layer**; improvements/best-practices/incident-learnings/API-deprecations are embedded in the **library layer** and propagate automatically. Engineers fill in only the **small slice of business logic** (the "purple slip at the top") — not HTTP servers, marshaling, or metrics (**batteries included**, owned/supported by the platform team, in the monorepo, contributable).
- A **code generator** outputs a **consistent folder structure** (known places for DB definitions, HTTP handlers, and a `proto` folder for API contracts) → **muscle memory**: once you learn one service, they all look the same → low cognitive overhead, rapid iteration.

### 3.1 Proto everywhere
- Define **RPCs in protobuf** → generators produce **strongly-typed Go** HTTP stubs with validation (required fields/types) on top of the service HTTP libraries — no sending a string where a number is expected.
- Same for **Kafka**: specify an event payload + validation in proto → a protobuf plugin generates **Kafka consumer/producer** logic on the transport libraries. Improvements (compression/encryption) are added **transparently at the library layer** and regenerated.
- **Tip:** Git can auto-reconcile **generated-code merge conflicts** by calling a script to **regenerate** from the merged proto (works well with GitHub) — one less bit of friction.

---

## 4. Static Analysis, CI & Security

- Build tools on the **AST** (bundled in Go's standard library, available in any language) to write small independent checks discouraging patterns — e.g., a service may only import another service's **`proto` package** (not its internal code) → keeps services decoupled to the API contract.
- **Semgrep** (open-source, grep-like static analysis across many languages) — catch stray `print` statements (suggest logging), find **SQL injection**, etc., in a few lines of YAML with no AST wrangling. Static analysis pulls a codebase toward convention/consistency and **stops new technical debt** (with time-boxed exemptions for existing usages).
- **Incident-driven checks:** after an incident, ask **"can we add a check for this in CI?"** → encode the learning as a rule and scan the existing codebase for other violations → **continuous learning from incidents**.
- **Security via the dependency graph:** don't have humans hand-manage service connections (error-prone). A **branches API** (returns an empty list — "all our branches are on GitHub") should **never** be able to call the **ledger**; static analysis derives egress/ingress rules, flagged as a **failing GitHub check** in seconds → stops a whole class of errors.
- **CI must be fast, reliable, high-signal** — one of the biggest points of technical leverage, **not buyable off the shelf**; **make bypassing checks intentionally high-friction** (avoid "broken windows"/flaky-check exemptions).
- **Human review vs. CI:** the **human reviewer** (mandatory code owner) checks you built **the right thing** (for the customer/business); **CI** checks you built **the thing right**. LLM reviewers (e.g., Copilot code review) only find **typos/logic bugs** — they don't validate the *right thing*.

---

## 5. Deploy, Debug & Measure

- **Shipper** CLI orchestrates deploys: pre-checks → pull service code from GitHub into a clean environment → build container images → push to a private registry → deploy to **Kubernetes** — **never showing YAML.** Goal: engineers can spend years at Monzo (running Kubernetes since **1.0**) **never seeing YAML**.
- **Telemetry batteries-included:** the shared library gives thousands of **metrics** per service on **templated dashboards** (Prometheus/Grafana/Jaeger/OpenTelemetry/Elasticsearch) — no "where's your dashboard?" — plus **automated alerts** paging the **code owner** if a new service is unhealthy. Telemetry feeds capacity decisions (e.g., scaling the changing service path behind **"Get Paid Early"** and Mastercard payments as fraud/AML services are added/removed).
- **Sanitized production access** — the **Monzo CLI** lets engineers query/create prod data in a **sanitized, authenticated, authorized** way (staging shows more; prod scrubs PII), with rich sources (put in a user ID or a **merchant** → info). Avoids the extremes of "beg for full DB access" or "add log lines that leak PII" — and avoids random curl/Postman/**PII pasted into ChatGPT**. Sensitive RPCs encode **"who can RPC"** as a **mandatory protobuf option** (with a static-analysis check) used by the authorization system.
- **Tip:** write CLIs in **Go or Rust** → a **portable binary** (no "my Python env is broken," fewer "works on my machine"). Also automate mobile/ML testing (e.g., a `droid` command for the Android emulator). **Onboard engineers onto these tools on day one** (engineering-101 manuals) to get them on the paved road.
- **Make profiling easy in production** — most orgs lock it behind special privileges; that "needs to change." Monzo lets engineers invoke the **Go profiler via a web UI**; also **Java Flight Recorder**, **py-spy**, and continuous profiling via **Pyroscope**. "The best software you use is also **fast**" (Shopify founder's rant): a Llama.cpp PR made inference **10–100× faster** and doubled loadable model size; inefficient Python (needless Pandas/regex/object copies) compounds. Framed for PMs: **fast systems → happier users + lower server bills.**

---

## 6. Full Circle to AI

- All this tooling/CI/telemetry investment is **timely for LLM-generated code** — people will paste auto-generated code whether you like it or not, so **checks enforcing best practices** matter more than ever.
- **MCP servers** (model context protocol) surface data to AI agents — much internet hype and **new vulnerabilities**; but if they **reuse the same backend authorization/sanitization** as your CLI/web UI, they're just a **different interface**.

---

## 7. Takeaways

1. **Automate your organization's painful processes** — find where they fall down and get impact from automating them.
2. **Prize composability** — don't do a 6–12-month "introduce Kubernetes and everything gets faster" project (a collision course when the org isn't ready off the mainframe), and don't expect a bought vendor tool to earn adoption.
3. Use open source, but **project an opinionated interface**, not the raw technology (don't "just expose Kafka").
4. **Abstract complex systems behind a well-defined interface** — engineers shouldn't need to be Cassandra/Kafka/Kubernetes/YAML/Terraform experts to ship.
5. **Standardize on a small tech subset** and **continuously improve** the tools (contributions from everyone) → higher abstraction, higher organizational leverage.

---

## People, Companies, Tools & References Cited

- **Suhail Patel** — speaker; principal engineer, **Monzo**.
- **Laura Tacko / DX** — developer-productivity measurement.
- Tech: **Go, protobuf, Kafka, Cassandra, Kubernetes, Semgrep, Prometheus, Grafana, Jaeger, OpenTelemetry, Elasticsearch, Pyroscope, py-spy, Java Flight Recorder, Llama.cpp, MCP**; internal tools **Shipper**, **Monzo CLI**, `find`, `droid`.
- Concepts: paved road, uniformity/batteries-included libraries, code generators, monorepo, AST/static analysis, incident-driven CI checks, service dependency graph / egress firewalls, "human review = right thing, CI = thing right," YAML-free deploys, sanitized prod access, production profiling.

---

*Video: https://www.youtube.com/watch?v=G4jONbRWpow — Transcript via yt-transcript.sh; outline generated from the transcript.*
