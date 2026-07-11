---
title: "Building for Global Engineering Platforms - Let's make an Operator - Bryan Oliver | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Bryan Oliver (Thoughtworks) on API-first platform engineering — GitOps vs. operators, a global auction-house case study (DynamoDB/Cosmos multi-region), and a hands-on Kubernetes IAM operator workshop."
type: "reference"
tags: ["softwaredevelopment"]
---

# Building for Global Engineering Platforms - Let's make an Operator - Bryan Oliver (Workshop Outline)

> Bryan Oliver (principal engineer at Thoughtworks, Kubernetes contributor, author) on treating your engineering platform as a product with an API-first design — then building a Kubernetes operator hands-on.

---

## 1. Platform Engineering as a Product

- Platform engineering is hard to pin to a moment (VMware Workstation 1999, Heroku's first self-service platform, cgroups/containers). Thoughtworks frames it as **platform-as-a-product**: a shift from traditional DevOps toward having **empathy for your engineers as users**, asking what's wrong, and building reusable components that solve *their* problems. If all you do is "dev/test/stage/prod," that's not it.

## 2. GitOps vs. the Missing API

- **GitOps** in a cloud-native context: a **desired state** in Git (Git as an **event-sourced database** — like a bank balance being the sum of prior transactions, enabling roll forward/back) reconciled into environments by **controllers** (Argo CD, Flux; source controller + deployment controller). It scales one source of truth across many regions/clusters. But at scale (12–100 clusters), a GitOps **mono-repo** becomes a nightmare of foldering/sub-foldering — because **there's no API** between desired state and applied config.
- **Fix: composable, API-first design.** Like designing a mouse's interface before its firmware, define the platform's **components as an API** first (databases, VMs, clusters, workloads/namespaces), *then* implement with Terraform modules or controllers. The mistake companies make when modernizing is **automating existing manual processes** (piles of Terraform) instead of asking "what are the entities we're creating?" **Operators** bridge the gap: the desired state has an **API specification** (a CRD), and a controller implements it — decoupling the API from the implementation so controllers can be swapped later.

## 3. Case Study: Global Auction House

- A global multi-billion-dollar auction company (bidding on cranes across continents), acquiring 4–5 companies/year, needed to enable domain patterns (spread across AWS and Azure), maximize engineering enablement (workload-to-prod dropped from **two months to a couple of hours**), and scale worldwide with **sub-millisecond** latency (faster platform → higher bids → more revenue).
- Many teams wanted **DynamoDB global tables** (~1ms cross-region replication, but **multi-master** — every region is read/write), which breaks **auction fairness**: writes (bids) must be forced to the region where the auction physically lives (local bidders get a fair speed advantage). Solution: a **DynamoDB operator** (team specifies the primary region; others are read replicas) using **Istio destination rules** to route writes at the network level, plus an **IAM operator** abstracting away IAM/IRSA complexity. The real reusable win was the **IAM operator** (an abstract, cloud-agnostic **service role**) — new resource operators (S3, DynamoDB) just plug in their cloud-specific policies.

## 4. The Workshop: Building an IAM Operator

- Using `operator-sdk`, Golang, Helm, and any modern Kubernetes cluster, built incrementally: **(1)** init an operator, create a `ServiceRole` API/CRD, `make deploy` to register the CRD; **(2)** a reconciler that prints the resource name (run locally with `make install run` — the SDK hooks Kubernetes events even outside the cluster); **(3)** a reconciler that **ensures a Kubernetes ServiceAccount** (`<name>-sa`) — the abstraction other workloads consume; **(4)** **sync status** back to the CRD (e.g. `serviceAccountName`, or error messages) so consumers can verify what to use.
- Then **consume** the operator: a stock Helm chart (Max Rocket's k8s-event-logger) drops its own ServiceAccount and instead references the operator-created one, with a `ClusterRoleBinding` supplying the needed permissions — adopting a decoupled, API-driven pattern **with just Kubernetes natives**. **Homework/production notes:** extend the API with a cloud-agnostic `cloudIdentity` (ARN / GCP service account / Azure), a `team` field (namespaces ≈ teams), and implement per-cloud policy generators. Impersonation via **IRSA / GCP workload identity federation** gives **keyless, short-lived tokens** (no IAM rotation needed); deploy operators like any other containerized Kubernetes service (or via OLM). Q&A: a **cloud engineer** safeguards/automates resources; a **platform engineer** treats every developer as a customer.

---

*Video: https://www.youtube.com/watch?v=GHjE0Tvo-Dg — Transcript via yt-transcript.sh; outline generated from the transcript.*
