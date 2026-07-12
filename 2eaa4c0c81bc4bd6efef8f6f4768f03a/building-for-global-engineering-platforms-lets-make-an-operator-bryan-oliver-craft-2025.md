---
title: "Building for Global Engineering Platforms - Let's make an Operator - Bryan Oliver | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Bryan Oliver (Thoughtworks principal engineer, Kubernetes contributor, author) on platform-as-a-product and API-first design — GitOps vs. operators, a global auction-house case study (DynamoDB/Cosmos multi-region write-fairness via Istio), and a live hands-on workshop building a Kubernetes IAM ServiceRole operator with operator-sdk/Golang."
type: "reference"
tags: ["softwaredevelopment"]
---

# Building for Global Engineering Platforms - Let's make an Operator - Bryan Oliver (Workshop Outline)

> A Craft 2025 (Budapest) talk + hands-on workshop by **Bryan Oliver**, principal engineer at **Thoughtworks**, Kubernetes contributor, Thoughtworks Radar committee member, and author (a just-published **Manning** book and an early-access **O'Reilly** book — audience members who asked questions were promised free book codes). The MC (a self-described backend engineer who admits he "never had success with multi-region deployments") introduces him. The talk is an extended version of a shorter CubeCon / Platform Engineering Day talk that Craft organizer "Gergely" saw and asked Bryan to expand. Structure, in Bryan's own words: **(1)** what platform engineering is and *why* global platform engineering, **(2)** GitOps and the missing API, **(3)** composable API-first design, **(4)** a real client use case (a global auction company), then a **mid-talk Q&A**, followed by **(5)** a live four-part hands-on workshop building an IAM operator, and a **closing Q&A**.

---

## 1. Speaker, Tour, and Setup

### 1.1 Who Bryan Oliver is
- Principal engineer at **Thoughtworks**.
- Contributes to **Kubernetes**.
- Just published a book with **Manning**.
- Has a second book in **early access** with **O'Reilly**.
- Sits on the **Thoughtworks Technology Radar** committee.

### 1.2 The speaking tour
- First time in Hungary.
- On a European tour: spoke at **Platinosphere in Italy**, then **Munich** and **Rome** over a weekend, then the **ThoughtWorks London office**, then Budapest.

### 1.3 The book-code incentive
- Audience members who post a question (e.g., on Slido) get a **free copy of the Manning book** (while supplies last) and an **early-access code** for the upcoming O'Reilly book/MOOC.
- Questioners were told to reach out to the stage manager / organizers afterward for the codes.

### 1.4 Workshop repo and prerequisites
- Follow-along repo: **github.com/olivercodes/craft-workshop** (spoken as "github.com/olivercodes/craft-workshop"), clone it to participate.
- Requirements:
  1. **Golang**
  2. The **operator SDK**
  3. The **Helm CLI**
  4. A reasonably **modern Kubernetes cluster** — "if it's running 1.13 it's not going to work, but 1.3x would be great" (Rancher Desktop, Minikube, or a cloud cluster all work).
- The architecture diagram shown in the talk is checked into the repo for participants to grab.

---

## 2. What Is Platform Engineering?

### 2.1 It's hard to pin to a single moment
- We've been doing "some form of it since the 60s."
- Candidate origin points Bryan lists:
  - **VMware Workstation (1999)** — providing workstations so developers' jobs were easier.
  - **Heroku** — arguably the first self-service developer platform.
  - **Google's cgroups** — without which we'd have no containers/Docker and arguably no platform engineering.
- Takeaway: technology constantly evolves, and so does platform engineering — you can't pin the term to one technology.

### 2.2 Platform-as-a-product (the Thoughtworks framing)
- Thoughtworks offers an opinionated definition: **platform as a product**.
- It's a shift **away from traditional DevOps** toward treating your engineering platform as an actual product.
- Core practice: go to your engineers, have **empathy for them as users**, ask "what's wrong," and build **reusable solutions/components** that solve *their* problems.
- Using product thinking means continuously going to your users (other engineers) to find and fix pain points.

### 2.3 The anti-pattern: "dev/test/stage/prod" is not platform engineering
- If all you're doing is dev/test/stage/prod, "don't do that" — that isn't platform engineering.

### 2.4 The common mess Thoughtworks walks into
- A company had a pile of **manual processes**.
- They hired a large consulting firm to **automate all of it** — writing a mass of **Terraform / Ansible**.
- Result: a giant git repo of configuration, sprawl, and mess — and they call that "GitOps."

---

## 3. GitOps, Properly Defined

### 3.1 GitOps in a cloud-native context
- You have a **desired state** and environments that **sync / reconcile / deploy** that desired state.
- The desired state is **defined in Git**.
- In this context, Git is "really just a large database" — doing nothing else but being a database.

### 3.2 Git as an event-sourced database
- Git is technically an **event store / event-sourced database** (a concept from event-driven architecture — Martin Fowler et al.).
- Analogy: your **bank account** has no column that says "$10"; the balance is the **summation of all prior transactions** (e.g., -5 + 6 + 9).
- Git is the same: there's no "current state" column — every commit is a slight change to the previous state, and the state is the sum of all commits.
- Value: a consistent way to **roll forward and backward in time** with deployments, especially to Kubernetes.

### 3.3 The controller pattern
- GitOps has evolved from a plain DevOps repo into a **controller pattern**, common in Kubernetes.
- Tools using it: **Argo CD**, **Flux**, and others.
- A controller lives in a Kubernetes cluster (or distributed orchestration system), is pointed at a downstream Git repo, syncs the desired state, and creates resources in the target environment.

### 3.4 The layered controllers
- **Source controller** — pulls the Git repo, keeps a local copy in the cluster, keeps it up to date, and watches for changes.
- **Deployment controller** — watches the source controller's artifacts and applies the changes.
- "It gets very complicated very quickly."

### 3.5 The upside: scale from a single source of truth
- One desired state can be applied across **many clusters/regions**.
- E.g., clusters in the **United States, Singapore, China** — point each region's source controller at the repo and get the same configs applied everywhere.

### 3.6 Where it gets messy at scale
- A GitOps **mono-repo** turns into "a giant mess of different configurations stored in subfolders and folders."
- Seen at companies with **12, 20, 100 clusters** using a GitOps mono-repo and calling it platform engineering.
- Really it's just "a bunch of foldering and subfoldering" and becomes "an absolute nightmare."

### 3.7 The root cause: there's no API
- Between the desired state (a database) and the applied config, "there's **no specification in between**."
- Nothing says *what* you're trying to create — "there is just config, and apply it to these places."
- **The missing piece is the API.**

---

## 4. Composable, API-First Design

### 4.1 Bring clients back to composable design
- Teach orgs to build **small, isolated components**.
- The messy mono-repo example was "not a small, composed, easy-to-use, easy-to-change git repository."

### 4.2 The computer-mouse analogy
- A company building a physical mouse doesn't write the **firmware**, **drivers**, or **OS plugins** first.
- They design the **interface** first: how it feels, what buttons, what a gamer needs on the side.
- The **user experience / application interface** is the important part — design it before implementation.

### 4.3 The modernization mistake
- When companies modernize, they don't stop to ask "what is the API?"
- They just **automate existing manual processes** (e.g., translating a manual VM-spin-up process directly into Terraform).
- They should instead ask: "what are the different **entities** we are trying to create?"
- Starting with the API "would have been a lot better."

### 4.4 Define components as an API first
- Define the platform's **components as an actual API** — but not necessarily a web/REST API.
- Many interface types can express this API; the talk shows an example that **isn't** a REST API.
- Example components / entities developers use: **databases, VMs, clusters, workloads/namespaces**.

### 4.5 Then implement the API
- After defining the API, implement it with **Terraform modules** or **controllers** (as in the GitOps discussion).
- By starting with the API you first break up your **users'/engineers' requirements** instead of blindly automating manual work.

### 4.6 A real requirements conversation
- Instead of automating everything, Thoughtworks asked engineers their **current pain points**:
  - "It's really hard to create databases." → a self-service **database component API**.
  - "It's really hard to get new clusters spun up." → a **cluster API**.
  - "It's really hard to get my workloads deployed in Azure." → an **API for that**.
- The point: talk to the real users (the company's engineers), find what they need, then define the API.

### 4.7 Operators bridge the GitOps gap
- Operators reuse the GitOps idea of a **requested/desired state**, but that state now has an **API specification** — a definition of what the request looks like, not "random stuff thrown into a repo."
- You can still use GitOps to *apply* these resources; the difference is the **operator implements the API specification** and creates the downstream resources — bridging the desired-state repo and the created resources **without a huge unmaintainable mess**.

### 4.8 The payoff: swappable implementations
- Build components as operators → define them as **CRDs** and implement with **controllers**.
- Because the components are defined as **API components**, you could **replace the controllers later** and use something else — "really flexible and powerful."

---

## 5. Case Study: A Global Auction Company

### 5.1 The business
- A global auctioneering company — e.g., a US construction company **bidding on a million-dollar crane in Japan**.
- Very large, distributed, global platform.

### 5.2 Growth via acquisition
- Growing fast, **acquiring 4–5 companies a year**.
- Ended up with many **similar systems** in the architecture → growing pains.

### 5.3 Problem — enabling domain patterns
- Really two large companies plus many small acquired ones.
- The small companies needed to **consume the domain patterns** of the two large ones.
- The two large ones lived on **Amazon (AWS)** and **Azure** respectively, mostly running automation applied to old manual processes.
- Fix: create the **API boundaries** described above and apply them to an engineering platform.

### 5.4 Problem — maximize engineering enablement
- Engineers needed to go faster under heavy leadership pressure (competing against a company taking their market share).
- Before the platform, getting a workload to prod took **~two months**; after, "a couple of hours."

### 5.5 Problem — build for global scale
- Large regional footprint **per cloud** (and a similar footprint in the other cloud).
- Auctions happen in different parts of the world with customers bidding across regions.

### 5.6 Problem — sub-millisecond latency
- Needed extremely fast reads/writes globally — targeting **sub-millisecond latency** — because users sit refreshing auctions trying to land the best bid.
- Bids are large ($1M / $10M / $100M).
- A strange but real dynamic: **the faster the platform, the more money the company makes**, because users change their bidding patterns based on platform performance.

### 5.7 Why teams wanted DynamoDB
- **DynamoDB** (AWS): a write in one region replicates to another in **~1 millisecond** — "Amazon has done an incredible job."
- DynamoDB **global tables are multi-write / multi-master**: deploy to four regions and all four are **read-write**.

### 5.8 The fairness problem with multi-master
- An auction company must enforce **auction fairness**.
- Example: a US customer bidding on a **UK** auction can be load-balanced to a US replica for **reads** (status is synced there via DynamoDB) — fine.
- But **writes (bids)** need to be sent to the region where the auction actually lives (the UK).
- Business reasoning: a **physically closer bidder should have a slight speed advantage** — a UK bidder (or someone physically on-site at the auction) should get their bid there faster than someone bidding from across the ocean.

### 5.9 Why enforce it at the network level
- You can't cleanly enforce write-routing at the **database level** — "you could get into a whole bunch of policy stuff, but it's messy."
- They wanted a **network approach** to say "this is a bid → send it to the auction's region."

### 5.10 The DynamoDB operator
- Built a Kubernetes **DynamoDB operator**.
- A team specifies the **primary region** for their team/auction.
- Other regions become **read replicas only**.

### 5.11 The IAM pain point that emerged
- Dev teams consuming DynamoDB had **no familiarity with AWS IAM, policies, service accounts/roles** — a whole layer of complexity they weren't used to.
- So they first **abstracted IAM away** with an **IAM operator** (built in the workshop).
- Then the DynamoDB operator used **Istio under the hood** to enforce where writes go.

### 5.12 The Cosmos DB parallel
- The other large company (on **Azure**) wanted the same thing with **Cosmos DB**.
- The patterns were **emerging as similar** → motivation to generalize the pattern.

### 5.13 The consumption flow (visualized)
- An engineer creates a DynamoDB database.
- They create a **service role** (from the IAM operator).
- That service role creates a **service account** for their workload, which they use to talk to DynamoDB.
- The team doesn't need to know **how** to talk to DynamoDB — the IAM operator manages all credentialing.

### 5.14 IRSA under the hood (AWS)
- In AWS, the IAM operator creates **IRSA (IAM Roles for Service Accounts)**.
- A Kubernetes service account is linked to an **ARN service account** in AWS that has a policy allowing that workload to talk to the database.
- All of it is abstracted; the team just uses **Kubernetes-native** things (a standard service account).

### 5.15 Extending the pattern: the S3 operator
- The same IAM-operator pattern supports new resource operators.
- They also built an **S3 operator** — teams get S3 buckets and attach them to the **same service-role pattern**.

### 5.16 Write-routing via Istio destination rules
- When a customer just fetches data, they go straight to the auction service in its region (e.g., Singapore).
- When a team wants to **post a new bid**, the DynamoDB operator has created **Istio destination rules** that route writes at the networking level.
- Even a US user gets globally load-balanced to their **closest US cluster** (via global load balancing), enters the infrastructure there, then hits the destination rule, which says "this is a write → send it to the proper region."

### 5.17 The messy first iteration
- The first attempt to design the operator patterns was messy — creating **different service roles for different tables and S3 buckets** got tangled.

### 5.18 The second iteration — three operators + GitOps as last mile
- GitOps was **not** rejected — it's used as the **last-mile configuration** to get things into clusters, but **not where the API lives**.
- Ended up with **three operators**:
  1. **S3 operator**
  2. **IAM operator** (defines a **ServiceRole**)
  3. **DynamoDB operator**

### 5.19 The implementation pattern
- The **IAM operator** creates a **cloud-specific role** (e.g., an AWS IAM role) from an **abstract, platform-unique ServiceRole** (not cloud-specific).
- Resource operators **see which role has been attached** (specified in the API, e.g., an "allowed service roles" field).
- The **DynamoDB operator** then creates the actual **IAM policies** needed for that role to access the DynamoDB table; the **S3 operator** does the same for S3.
- It's "just an implementation pattern" — easy and extensible.

### 5.20 The real reusable win: the IAM operator
- The valuable artifact was **not** the DynamoDB operator (lots of people build those).
- It was the **IAM operator**, which let them keep building **new resource operators** as needed, reusing the pattern consistently.
- Each resource operator only needs to define **which policies attach to a specific role**; the abstract IAM pattern is **completely cloud-agnostic** (GCP, AWS, etc. have different implementations, and that's fine).
- This is why they gave a CubeCon talk on it.

---

## 6. Mid-Talk Q&A (Halfway Break)

### 6.1 Q1 — How did you deal with sub-millisecond latency?
- It came from the **chosen product**: DynamoDB provides ~**1ms read/write** replication under the hood.
- For the actual API consumer in front of that, it was more like **sub-50ms / sub-25ms**.
- They also used **AWS Global Accelerator** and AWS's **backbone** for routing.
- The **biggest limiting factor was the database**; removing that bottleneck sped things up massively.

### 6.2 Q2 — Did they try using a VPN to exploit the "physically closer bids faster" rule?
- Probably some did, but Bryan isn't sure.
- Those users would still be **physically further** from the auction, so forcing reads elsewhere **reduces their read performance** on the auction data they need to make quick decisions.
- Net: it could actually **hurt** them — "a trade-off."

### 6.3 Q3 — Did you consider a single-region global accelerator to improve latency?
- They used **multi-region + AWS Global Accelerator + Istio multi-cluster**.
- This routed every request to the **closest possible cluster** (there are other APIs in front of the DynamoDB layer that users must talk to).
- Global Accelerator helped with much of the routing.

### 6.4 Q4 — How do you manage permissions between teams and avoid a dev deleting important resources?
- Each **resource operator** is responsible for creating **policies**.
- The **IAM operator** creates the core thing being impersonated (GCP workload identity federation + service account; AWS role ARN) and abstracts that away.
- The **resource operator** (DynamoDB, S3) implements the policies based on how the team defined the CRD.
- Example: in the DynamoDB CRD, "primary" vs. "read" translates into **Istio policy** and/or **IAM policy** depending on the resource.
- Teams get **some control within the CRD but not complete control** — the risky bits are abstracted to the operator level.
- (Question askers were reminded they'd get Manning book codes from the organizers.)

---

## 7. The Workshop — Building an IAM Operator

### 7.1 Overview and prerequisites (recap)
- Build a **simple IAM operator** to show how you'd implement the pattern, in **phases** (parts 1–4 in the repo).
- Requirements again: **Golang**, the **operator SDK**, the **Helm CLI**, and a reasonably modern Kubernetes cluster.
- The architecture diagram is in the cloned repo.

### 7.2 Part 1 — Init the operator and create the first API
- Command: **init operator** named **`pskim-operator`** under the domain **`craft.com`**.
- Then **create a new API** — the first API is the **ServiceRole** seen in the diagram (the abstraction over the IAM pattern).

### 7.3 Part 1 — The three important components of a generated operator
1. The **API specification** in the `api` folder (here, **`v1alpha1`**), containing the **ServiceRole spec** (a placeholder `foo` field to replace), a **status object**, and the full component definition.
2. The **main controller** in the `internal` folder — the **reconciler** that reconciles desired state (a Kubernetes **custom resource**) into deployed resources.
3. The **config directory** — a generated **example of how to use** your operator, based on the API spec.

### 7.4 Part 1 — A trivial first change
- Replace the placeholder `foo` field with, e.g., **`name`** (just to get started).

### 7.5 Part 1 — `make deploy` to register the CRD
- Run **`make deploy`** — generates the CRDs on the connected Kubernetes cluster.
- Verify: `kubectl get crd | grep service` shows a CRD for the **ServiceRole**.
- `kubectl describe` the CRD shows the basic definition (the `foo` field description wasn't renamed, so it still shows).

### 7.6 Part 1 — `make install run` and apply a sample
- Run **`make install run`** to run the operator.
- **Key feature:** operators can run **outside Kubernetes** during development.
- Why it works: Kubernetes is really just **generating events**, and the operator SDK can **hook into the events API** and consume them as if the operator were running on the cluster.
- Apply the generated sample CRD from the `config` directory.
- Verify: `kubectl get servicerole` shows the created ServiceRole; `describe` shows the basic definition — "nothing fancy, but a start."

### 7.7 Part 2 — Repetition as kata: a new operator that prints the name
- Bryan treats **repetition as a form of kata/practice** — start each part fresh.
- Go to the **controller** and its basic reconciliation definition.
- Goal: **print the ServiceRole's name** in the reconciler to show how reconciliation works.

### 7.8 Part 2 — The code changes
- Import **`API errors`** from `k8s.io/apimachinery`.
- Make **`logger`** a new variable.
- Fetch the **ServiceRole**, remove the early `return`, and **print the ServiceRole's name**.

### 7.9 Part 2 — Metadata name vs. spec name
- You could rename the spec field to `name`, **but** Kubernetes resources already have a `name` field in the resource **metadata**.
- So the duplicate `name` in the spec can be **removed entirely** — use `metadata.name` instead.

### 7.10 Part 2 — Deploy, run, apply
- `make deploy`, then `make install run`.
- `kubectl apply -f config/sample`.
- The operator handles the resource and **prints out the ServiceRole name** — the code just added being exercised.

### 7.11 Part 3 — Ensure a Kubernetes ServiceAccount
- Start fresh again: go to part 3, run **init**, then **create API**.
- The status object now has a **`serviceAccountName`** field (remove the `foo` placeholder).
- Grab the fuller controller code and the **reconciliation loop** (runs every time a resource updates).

### 7.12 Part 3 — Why a Kubernetes ServiceAccount instead of a cloud one
- Running the workshop against a real cloud would be "insane" — it would require giving **every attendee an AWS account**.
- So instead the operator creates a **Kubernetes ServiceAccount** to demonstrate the concept of what happens under the hood.

### 7.13 Part 3 — The `ensureServiceAccount` function
- Implement **`ensureServiceAccount`** (importing `fmt` and a few more modules).
- Flow: an engineering team applies a CRD requesting a **new ServiceRole for their namespace** → the reconciliation loop runs → `ensureServiceAccount` **creates a Kubernetes ServiceAccount** other workloads can use.
- The team can use that service account however they want; the platform team can **attach additional policies** to it.
- Then it **updates the status** and does basic error handling.

### 7.14 Part 3 — The naming convention
- The created service account takes the **ServiceRole name** from metadata and appends **`-sa`** (e.g., `<name>-sa`) to designate it a **Kubernetes ServiceAccount** (vs. the ServiceRole CRD).
- This is the point where "the power really starts to come from this pattern" — the diagram's DynamoDB-attached-to-a-service-account idea starts to materialize.

### 7.15 Part 3 mid-workshop Q — How would this connect to AWS at home?
- To implement AWS: first **grant the operator permission to manage IAM** in AWS.
- Then in the controller code, implement creating **service accounts and IAM roles** in AWS.
- Reuse the **same API specification**; when you implement AWS you create an **AWS service account** and, because AWS uses **IRSA**, you **bind the IAM service account to the Kubernetes service account** (part of that binding already happens for you).
- **GCP:** a service account is essentially an **email address** in Google's IAM; you assign **workload identity** to the Kubernetes service account.
- General idea: you're **gluing** the Kubernetes service account to the provider's identity; each provider (AWS, GCP, Azure) implements **impersonation** slightly differently, but "once you understand one you can implement all of them pretty easily."

### 7.16 Part 4 — Sync status back to the CRD, then consume the operator
- Start fresh: init, create API, open the controller.
- Update the ServiceRole **status** to hold a **service account reference**.

### 7.17 Part 4 — Status syncing as an operator advantage
- Operators **sync status to the object** you're creating.
- `ensureServiceAccount` now creates the service account **and** updates the status.

### 7.18 Part 4 — Deploy, run, apply, and inspect status
- `make deploy` (from the part-4 directory), run the operator, then apply the resource (Bryan had to delete/reapply because he forgot to run the operator first).
- **Extending the Kubernetes API:** `kubectl get servicerole` works because you created a **new API** inside Kubernetes.
- `kubectl describe` the ServiceRole now shows the **`serviceAccountName`** field synced into the status.

### 7.19 Part 4 — Why synced status is useful
- Teams consuming the operator can **verify the exact service-account name** they should use.
- You can put **other data** there too — e.g., if the operator lacked AWS permissions, it could write an **error message** like "failed to create policy" into the status, giving consumers exact insight into what's happening.

### 7.20 Part 4 — Consume the operator with Max Rocket's k8s-event-logger
- Grab an open-source project: **Max Rocket's `k8s-event-logger`** — it reads Kubernetes events and prints them to the console.
- To do that it needs a **service account with permissions** to talk to the Kubernetes events API.

### 7.21 Part 4 — Remove the chart's own ServiceAccount
- The Helm chart has a standard set of files including a **service account** template.
- **Delete** the chart's `templates/serviceaccount` file — that concept is abstracted away now.

### 7.22 Part 4 — Point the values/deployment at the operator's service account
- In the chart's **values file**, specify the **ServiceRole** (e.g., name `service-role-sample`).
- In the **deployment** definition, replace the referenced service account with `values.serviceRole` **plus `-sa`** (the suffix indicating the Kubernetes service account created from the ServiceRole abstraction).

### 7.23 Part 4 — First install fails with "forbidden"
- Run **`helm install`** on the logger chart.
- The new **logger pod** starts but is **forbidden** from talking to the needed resources.
- Cause: the **binding/policy** granting the service account permission hasn't been implemented yet.

### 7.24 Part 4 — Implement the ClusterRoleBinding
- Since this consumer is a **plain Helm chart** (not an operator), just update its **ClusterRoleBinding** to reference `values.serviceRole` + the service-account name.
- Run **`helm upgrade`**; kill the old pod (nothing in the deployment spec changed, so it wouldn't redeploy on its own).
- Check logs → the pod is now **logging Kubernetes events**.

### 7.25 Part 4 — The takeaway
- All that was done: take the required permissions and **attach them to the operator-created service account**, using **only Kubernetes natives** — no extra operators.
- You can adopt this **decoupled, API-driven pattern** without building a whole fleet of operators — "really powerful, easy to consume and use."

### 7.26 Homework — Cloud-agnostic API extensions
- To make the operator scalable across clouds, extend the API definition (these changes are checked into the repo).

### 7.27 Homework field 1 — `cloudIdentity`
- Add a **`cloudIdentity`** field that abstracts the created identity:
  - **AWS** → an **ARN** (role name, etc.).
  - **GCP** → a **Google Cloud service account**.
  - **Azure** → something like **`subscriptions/<random string>`**.
- Run the operator on any of the three clouds and implement the resulting identity in the controller.
- **Sync the created identity back to the status object** (as the service-account name was synced earlier).

### 7.28 Homework field 2 — `team`
- Add a **`team`** field; in Thoughtworks' platform work, **teams are synonymous with Kubernetes namespaces**.
- Label namespaces with a team, then sync that to the ServiceRole status.
- Downstream benefit: an administrator can list **all ServiceRoles across the cluster** and **filter by team name**.

### 7.29 Homework — Implement per-cloud policy/account generators
- The most important homework: implement each cloud provider's **policy / account generator** from the `cloudIdentity` field.
- Start with `cloudIdentity` and `team`, then go from there.

### 7.30 Workshop Q — What goes in the spec vs. metadata?
- The **spec can be empty** right now; using it is mostly **user preference**.
- Their most recent real operator **did** put `name` in the spec, but it isn't strictly necessary.
- Possible spec uses:
  - A **display name** (e.g., "team one's service role") while the spec `name` is used for the **workload** (e.g., "workload one service role").
  - A **`cloud`** field telling the operator which cloud it runs on — you don't need it (you can auto-detect the Kubernetes flavor), but it simplifies controller logic and lets you return errors like "this isn't supported on X cloud yet."

---

## 8. Closing Q&A

### 8.1 Q — How much maintenance does a new API like ServiceRole add? Does it break after a Kubernetes upgrade?
- The **IAM/ServiceRole pattern is probably the lowest-maintenance component** in the whole platform because it's an **abstraction pattern** (the identity string is a single field, implemented with provider-specific modules).
- It **rarely breaks**.
- Kubernetes constantly evolves, but the **operator SDK (kept up to date) helps with migrations** if anything breaks.
- The harder maintenance is a **breaking change to the spec** your users consume — you must give them a **migration path** to update their deployed CRDs.

### 8.2 Q — How do you do input validation? Can you get an error on apply for malformed fields?
- Validation is **not** confined to controller logs.
- You interact with an operator using **standard deployment mechanisms** (e.g., `kubectl apply`).
- The **Kubernetes API server** rejects invalid definitions and returns an appropriate error — e.g., if `name` must be a **string** and you submit a **boolean**, the API server (it's all Golang and understands **types**) rejects it and tells the user.
- A lot of validation is handled for you because it's built on the Kubernetes API server.
- Apply/error messages come back through your normal `kubectl` / Helm / pipeline flow.

### 8.3 Q — How do you do IAM rotation?
- You **don't need to** — the pattern is implemented in a **keyless fashion**.
- **GCP:** the service account uses **workload identity federation**; impersonating it yields **short-lived tokens** handled by Google.
- **AWS:** **IRSA (IAM Roles for Service Accounts)** works the same way — short-lived tokens, handled for you.
- You only manage **naming conventions and policies**, never keys — "really powerful in that regard."

### 8.4 Q — What do you use in production (how are operators deployed)?
- Two ways:
  1. **Treat it like any Kubernetes service** — the project has a **Dockerfile**; build and deploy it like any API/web service.
  2. Use the SDK's **OLM (Operator Lifecycle Manager)** for more release control — but "we don't use that."
- They just deploy it as a normal service with careful **versioning tested extremely well before rollout** (the client company has **~2,000 engineers** consuming these operators).

### 8.5 Q — What's the fundamental difference between a cloud engineer and a platform engineer?
- A **cloud engineer** is primarily responsible for **automation, safeguarding, and creating resources**; not tied to the success of the consumer; traditionally **more aligned with security** than with the company's engineers, which creates friction.
- A **platform engineer** is **required to treat all developers as users/customers**.

### 8.6 Q — Do you write tests for operators, in or outside of Golang?
- You write them **in Golang** — the SDK **generates starter tests** when you generate an operator.

### 8.7 Q — Where can we find your terminal setup?
- It's on GitHub — but Bryan admits he **recently rewrote it** (now in **Lua/Neovim**) and hasn't checked it in yet; he'll push it "this week."

### 8.8 Q — What's the benefit of Kubernetes operators over CloudFormation?
- There **isn't an inherent one** — it's **contextual**.
- The middle "implementation" layer can be a **controller**, **Terraform**, or **CloudFormation** — just as easily.
- The goal was to show a **different approach**: define the **API first** (which operators force you to do — "really nice") and show a **pattern that emerges** from that thinking; you could achieve it with CloudFormation or something else.

### 8.9 Q — How does the operator listen to Kubernetes events if it runs outside the cluster?
- The **operator SDK hooks into the Kubernetes events API** and runs a **watch/listen**, then feeds those events to the process running on your machine as if they were consumed by a real in-cluster workload.
- You just need **permissions to talk to the cluster**; the locally running operator then behaves like an in-cluster workload.

### 8.10 Q — Are there ready-made operators? Would you still write from scratch?
- There are **many** operators and **starter kits** on all three clouds.
- Bryan would **still write many from scratch** — most operators are **contextual/specific** to the problem being solved (tying back to the "everyone has different API requirements" point).
- What you **won't** find ready-made is the **IAM/ServiceRole pattern** shown here — you'd build that yourself.
- But you **can** hook ready-made cloud operators into this pattern easily, since they just create a **service account** to attach to.

### 8.11 Q — Why show the Helm-chart consumption example (a service account that does more than one thing)?
- Real teams are complex — a single service account often needs to do **more than one thing** (e.g., a **DynamoDB table**, a **Redis cache**, and talking to **another team's namespace** for deployment events).
- The example shows that although you can do **RoleBindings at the Kubernetes-native level**, because the service account is **abstracted away**, teams can **attach other policies** to that same service account (DynamoDB, Redis, etc.).
- Creating the service account **directly from a Helm chart** would tie it to that **one deployment**; moving it into the **operator pattern** lets it be **consumed and implemented by other things** — "just moving it up a layer."

---

## People & References Cited

- **Bryan Oliver** — speaker; principal engineer at Thoughtworks, Kubernetes contributor, Thoughtworks Radar committee member, author.
- **Gergely** — Craft organizer who saw Bryan's shorter CubeCon/Platform Engineering Day talk and invited the extended version.
- **Max Rocket** — author of the open-source **k8s-event-logger** Helm chart used in the workshop.
- **Martin Fowler** — referenced for event-driven architecture / event sourcing.
- **Organizations & platforms:** Thoughtworks (and the Thoughtworks Technology Radar), Manning (published book), O'Reilly (early-access book), Craft Conference (Budapest), CubeCon / Platform Engineering Day, VMware (Workstation 1999), Heroku, Google (cgroups), Docker.
- **Clouds & services:** AWS (DynamoDB global tables, S3, IAM, IRSA, Global Accelerator, AWS backbone), Azure (Cosmos DB), GCP (workload identity federation).
- **Tools & tech:** Kubernetes, operator SDK, OLM (Operator Lifecycle Manager), Golang, Helm CLI, Argo CD, Flux, Istio (destination rules, multi-cluster), Terraform, Ansible, CloudFormation, Git, Neovim/Lua, Rancher Desktop, Minikube, kubectl.
- **Workshop repo:** github.com/olivercodes/craft-workshop (operator named `pskim-operator`, domain `craft.com`, API `v1alpha1`, CRD `ServiceRole`, service-account suffix `-sa`).
- **Concepts:** platform-as-a-product, empathy for engineers as users, GitOps, event-sourced database, controller pattern (source + deployment controllers), the "missing API," composable/API-first design, CRDs and reconcilers, operators bridging desired state to resources, swappable controller implementations, multi-master write fairness, network-level write routing, IAM abstraction / service roles, keyless short-lived-token impersonation, status syncing, extending the Kubernetes API, cloud-agnostic `cloudIdentity`, teams-as-namespaces, cloud-engineer vs. platform-engineer, kata/repetition practice.

---

*Video: https://www.youtube.com/watch?v=GHjE0Tvo-Dg — Transcript via yt-transcript.sh; outline generated from the transcript.*
