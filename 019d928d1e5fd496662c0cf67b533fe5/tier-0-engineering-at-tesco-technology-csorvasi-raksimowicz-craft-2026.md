---
title: "Tier 0 Engineering at Tesco Technology – Csorvási & Raksimowicz | Craft 2026"
date: "2026-06-04T00:00:00.000Z"
description: "Tesco engineers explain how 13 people operate a five-billion-call-per-day tier-0 traffic platform using real-Envoy validation, cell deployments, synthetic SLIs, practiced recovery, and cautious AI adoption."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Tier 0 Engineering at Tesco Technology – Csorvási & Raksimowicz (Talk Outline)

> At Craft 2026, Tesco Technology engineers Yulia and János explain how a 13-engineer London/Budapest team operates Inter-Service Communication (ISC), a tier-0 platform carrying more than five billion HTTP calls daily. János covers architecture, safe configuration, and zero-downtime cell deployments; Yulia covers synthetic service indicators, disaster recovery, human-controlled AI adoption, hard-earned product and team lessons, and audience Q&A.

## 1. Scale and criticality

### 1.1 Tesco and the team

- Tesco holds roughly 29% of the UK grocery market.
- ISC belongs to the Engineering Effectiveness platform organization.
- The team has 13 engineers, one product manager, and one engineering manager across London and Budapest.

### 1.2 Why centralize communication

- Hundreds of teams and thousands of engineers create an unmanageable map of service relationships.
- Audit, discovery, security, and traffic-management concerns otherwise recur in every team.
- Clients include web and mobile applications and devices in more than 40,000 stores.
- Services span public cloud and multiple data centers.

### 1.3 The ISC bargain

- ISC carries all service-to-service and external-to-service HTTP traffic.
- It processes more than five billion API calls per day.
- Checkouts, tills, supply chain, and retail operations all depend on it.
- Centralization simplifies consumers while making ISC itself a systemic dependency.
- The team must change it continuously without breaking it.

### 1.4 Tesco's six service tiers

- Tiers run from tier 0, most critical, through tier 5.
- A tier defines availability, redundancy, failover, recovery time, data-loss window, and total-loss recovery expectations.
- Business continuity, users, product management, and infrastructure service management agree on the derived tier.
- A team does not simply choose its preferred classification.

### 1.5 Tier-0 operating targets

- Two engineers are on call around the clock.
- ISC runs in two cloud regions with three availability zones each.
- Its availability target is 99.995%, equivalent to under 2 minutes 11 seconds monthly downtime.
- The stated annual allowance is about 26 minutes 18 seconds.
- Actual downtime in the prior year was below 32 seconds—at least six nines over some periods.

## 2. Platform architecture

### 2.1 Data and control planes

- The data plane carries live HTTP requests.
- The control plane stores and distributes desired routing behavior.
- This separation keeps consumer configuration away from the request hot path.

### 2.2 Envoy gateways

- Envoy is a dynamically configured L4/L7 proxy created at Lyft and donated to CNCF.
- Private gateways handle east-west traffic among Tesco services and stores.
- Public gateways handle north-south traffic from delivery apps, partners, mobile clients, and other external sources.
- Gateways route, terminate TLS, modify requests, and apply timeout and retry behavior.

### 2.3 Global rate limiting

- A rate limiter sits on every request's hot path.
- It makes allow/deny decisions using global counters and control-plane data.
- Usage reports flow back to the control plane, which returns updated limit information.

### 2.4 Traffic Config Service

- Consumers declare desired routing and traffic-management rules in configuration files.
- A `traffic-ctl` CLI talks to the Traffic Config Service API much as `kubectl` talks to Kubernetes.
- The API offers a stable, opinionated abstraction over Envoy's complexity.
- It persists configuration, translates it into Envoy xDS, and pushes it to gateways.

## 3. Consumer changes that cannot break everyone

### 3.1 Syntactic validation

- The service first verifies valid YAML.
- It verifies that payload shape matches the platform data model.
- This catches malformed input before transformation.

### 3.2 Semantic validation

- The service checks configuration both alone and against other tenants.
- It detects conflicting paths.
- It checks rate-limit coherence.
- It requires appropriate health-check paths and expected statuses.

### 3.3 Static checks still diverge from Envoy

- At scale, an input inevitably passes the team's validators but fails Envoy's own rules.
- Pushing that configuration directly can cause a total platform outage.
- Reimplementing another system's acceptance logic is not equivalent to testing the system.

### 3.4 Dry-run gateway sidecars

- Every Traffic Config Service pod runs an Envoy sidecar configured like a live gateway.
- The sidecar carries no production traffic.
- New xDS configuration is applied there first.
- Success gives a green light; failure rejects the batch, logs it, and returns feedback.
- Tier-0 principle: static validation is necessary but insufficient—validate with the real implementation.

## 4. Cell-based deployment

### 4.1 A complete platform cell

- A cell wraps both control and data planes.
- Each of two regions contains two identical cells.
- Workloads span three availability zones and autoscale.
- Each of the four cells can carry the entire production load alone.

### 4.2 A stage and its promotion path

- A stage comprises both regions and all four cells.
- The pipeline builds and tests artifacts, then promotes through sandbox dev, organization dev, organization staging, and production.
- ISC treats organization dev and staging as production because consumer teams cannot integrate without them.

### 4.3 Cell ordering

- Deployment alternates regions: first cell one in each region, then cell two in each.
- A failure therefore leaves redundant capacity in both geography and version.
- The rollout gathers evidence incrementally rather than changing the fleet globally.

### 4.4 Drain, deploy, test, and restore ingress

- The pipeline disables ingress and gracefully drains existing connections.
- It deploys the new version.
- Integration tests exercise components and dependencies.
- End-to-end tests exercise core user journeys.
- Ingress is restored only after tests pass.

### 4.5 Canary and stage rollback

- Canary metrics compare signals before and after rollout for up to 20 minutes.
- Success promotes to the next cell and stage.
- Any failed step rolls the entire stage back to its last known-good version.
- Pipeline-managed cell state allows deployment, observation, and rollback without losing service capacity.

## 5. Knowing the service works

### 5.1 SLI, SLO, and SLA

- An SLI is the measured indicator, such as success rate.
- An SLO is the internal target for that indicator.
- An SLA is the promise made to consumers.
- Liveness is insufficient; the team needs evidence that users' complete journeys work now.

### 5.2 Why synthetic signals

- Production traffic contains retries, spikes, client bugs, and seasonal variation.
- Synthetic probes provide stable signals suitable for SLOs.
- They answer platform-health questions rather than replacing functional and end-to-end feature tests.

### 5.3 Monitor Service as client and upstream

- Monitor Service sends requests through private and public gateways.
- It also receives those requests as the upstream service.
- It submits control-plane configurations and verifies their propagation.
- Monitoring data is stored outside ISC so an ISC outage cannot erase its evidence.
- The team deploys and tests monitoring as a first-class production component.

### 5.4 Every data-plane journey

- Probes cover same-region, cross-region, cross-subscription, public, on-premises, and intra-domain paths.
- Different infrastructure underlies each journey.
- Tests run roughly every five seconds.
- Alerts identify the failed path and affected consumer class before consumers report it.

### 5.5 Independent external monitoring

- A separate external system tests the internet-to-public-gateway route.
- It validates the actual external consumer perspective.
- It also distinguishes a Monitor Service failure from an ISC failure.
- Independent internal and external probes avoid a monitoring single point of failure.

## 6. Control-plane and rate-limit SLIs

### 6.1 Configuration-propagation measurement

- Monitor Service submits a small test service.
- It polls gateways until each can serve it with HTTP 200.
- Submission-to-success time measures propagation.
- This exposes slow delivery, connection trouble, and validation failures experienced by consumers.

### 6.2 Monitoring creates its own load

- Every test configuration makes Traffic Config validate and distribute work.
- Envoy creates health checks for every submitted service.
- Aggressive polling burdens gateways and control plane.
- The safety system must not become the incident source.

### 6.3 Propagation SLI version 1

- The first version submitted one configuration every six hours.
- It required one gateway to return 200.
- It provided immediate basic value but could miss failure on nine other gateways.

### 6.4 Propagation SLI version 2

- The second version required every gateway to return 200.
- It verified complete distribution.
- Six-hour frequency still left a long detection gap.

### 6.5 Propagation SLI version 3

- The third iteration tightened frequency to catch failures sooner.
- Each release added confidence without abruptly loading the critical system.
- The pattern is to ship a useful small signal and improve it safely.

### 6.6 Rate-limiting SLI

- Monitor Service submits configuration containing known limits.
- It sends traffic at and above those limits.
- Results exercise configuration, sidecar tracking, central aggregation, and enforcement together.
- The team balances test strength against artificial load on the hot path.

## 7. Disaster recovery

### 7.1 Back up beyond Azure dependencies

- Databases, secrets, blobs, and artifacts are copied on a schedule.
- Recovery storage is independent of Azure.
- A regional or provider-control-plane failure must not remove both service and recovery material.

### 7.2 One-click restore

- Recovery cannot depend on Azure DevOps remaining available.
- Any engineer can run a script to reconstruct ISC in a new subscription.
- Restore procedures are executable rather than documentation-only aspirations.

### 7.3 Practiced DR sessions

- Facilitators break a production-like environment without telling investigating subteams what changed.
- Teams diagnose, mitigate together, and conduct a retrospective.
- Every exercise seeks missing alerts, runbooks, documentation, and system safeguards before a real incident does.

### 7.4 DR evolves from manual to chaos automation

- Early sessions required facilitators to prepare and inject failures manually.
- A standardized scenario library improved repeatability but exercised only anticipated failures.
- Azure Chaos Studio reduced preparation toil and broadened failure injection.
- Recovery should become boring; stress signals insufficient practice.

## 8. AI in a tier-0 system

### 8.1 Human-controlled responsibility split

- Humans own discovery, problem framing, architecture, and high-level design.
- Humans perform final review and approval before merge and production deployment.
- AI assists implementation, review, documentation, and test writing.
- The policy reflects platform criticality, a 13-person mixed-experience team, and rapidly changing models.

### 8.2 Trust grows in stages

- The team began with code explanation, documentation, and suggestions.
- Shared low-risk experience upskilled the team.
- It advanced to AI-written production code with human review.
- Specialized task workflows followed.
- Agents now query external metrics and documentation for richer system context.

### 8.3 Future applications

- Incident assistants could combine logs, metrics, and recent changes during a 2 a.m. page.
- Pipeline agents could diagnose failed deployments and suggest repairs.
- Consumer assistants could answer platform questions and reduce support load.
- Tier-0 guidance: do not revolutionize overnight; expand use when evidence earns trust.

## 9. Lessons from mistakes

### 9.1 Unused features

- The team spent substantial effort on capabilities few consumers needed.
- Technically interesting work displaced more urgent platform problems.
- It shifted from “which feature?” to “whose problem, how severe, and why now?”
- Earlier consumer discovery validates demand before engineering commitment.

### 9.2 DNS outage without a canary

- An early DNS change broke resolution for a subset including critical consumers.
- One global push had no canary or preproduction detector.
- The team added canary rollout and automated promotion checks.
- Resolution journeys joined end-to-end tests and synthetic SLIs.
- Each incident should permanently strengthen the safety net.

### 9.3 Self-service nobody discovered

- Hundreds of teams directed every question and investigation to ISC engineers.
- Initial dashboards, documentation, and CLI tools saw little use because consumers could not find them.
- Early dashboards exposed every metric and overwhelmed nonexperts.
- Consumer conversations drove simpler, audience-appropriate views.
- A channel bot improved discovery and education shifted support toward self-service.

### 9.4 London/Budapest silos

- Too many work streams, informal local decisions, and knowledge in individuals' heads divided the team by location.
- Quarterly offsites, regular office days, and hackathons increased face time.
- Epic channels, show-and-tells, and decision records moved context across locations.
- Fewer parallel streams and deliberate pairing spread knowledge.
- Retrospectives and health checks made accountability routine.
- Team architecture matters as much as technical architecture.

## 10. Audience Q&A

### 10.1 Q1 — Does draining ingress require a queue?

- Disabling ingress stops new connections and waits for existing ones to drain.
- DNS is changed so new requests route elsewhere.
- Four cells provide same-region and cross-region backups.
- HTTP input therefore needs no queue during one-cell deployment.

### 10.2 Q2 — Does production have less capacity during deployment?

- Yes, one cell is removed, but every cell is performance-tested against the full production load.
- Three cells normally remain active during the rollout.
- Even three unavailable cells leave one capable of serving all traffic.

### 10.3 Q3 — What do the speakers like about Tesco Tech?

- The system's scale and visible effect in nearby Tesco stores make the work meaningful.
- The joke is that this helps sleep only when on-call does not page.
- The team has autonomy rather than waterfall instructions.
- Engineers can innovate and use current technology.

### 10.4 Q4 — How is API compatibility handled during canaries?

- Canary analysis primarily evaluates traffic behavior, not compatibility.
- API changes must remain backward- and forward-compatible.
- API versioning supports evolution.
- A cell is deployed and tested before ingress returns.

### 10.5 Q5 — Are lower stages exact production replicas?

- The basic architecture is consistent across production, staging, organization dev, and other environments.
- Exact production scale would be prohibitively expensive.
- Lower stages use smaller and fewer nodes while preserving topology and autoscaling concepts.
- A database-dependency question was not answered because its meaning was unclear.

## 11. People & References Cited

### 11.1 People and organizations

- **Yulia and János** — Tesco Technology speakers and ISC engineers.
- **Tesco Technology Engineering Effectiveness** — platform organization operating ISC.
- **Lyft** — original developer of Envoy.
- **Cloud Native Computing Foundation** — current Envoy project home.

### 11.2 Systems and tools

- **ISC** — Tesco's centralized Inter-Service Communication platform.
- **Envoy and xDS** — gateway proxy and dynamic configuration protocol.
- **Traffic Config Service and `traffic-ctl`** — control-plane API and consumer CLI.
- **Kubernetes and `kubectl`** — analogy for the declarative configuration flow.
- **Azure, Azure DevOps, and Azure Chaos Studio** — infrastructure, delivery, and failure-injection technologies.
- **SLI, SLO, SLA, synthetic probes, cells, stages, canaries, and DR** — principal reliability concepts.

---

*Video: https://www.youtube.com/watch?v=UOgsOKzjnC0 — Transcript via yt-transcript.sh; outline generated from the transcript.*
