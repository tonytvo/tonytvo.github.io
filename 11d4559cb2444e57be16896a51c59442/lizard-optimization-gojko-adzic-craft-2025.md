---
title: "Lizard Optimization - Gojko Adzic | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Gojko Adzic explains how unexpected users and uses reveal growth opportunities, then presents the LZRD loop for learning from misuse, choosing a signal, removing obstacles, and detecting unintended effects."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# Lizard Optimization - Gojko Adzic (Talk Outline)

> At Craft 2025, author and product builder Gojko Adzic presents a case-study-driven talk about applying observability and exploratory-testing techniques to product management. He first replaces the bug-versus-feature argument with an expected-versus-unexpected model, then shows how unusual users can drive retention and growth, and finally develops the four-step LZRD loop: Learn, Zoom in, Remove obstacles, and Detect undesirable effects.

## 1. Framing: product growth through unexpected behavior

### 1.1 Adzic's background and the talk's premise

- The host introduces Adzic as the author of *Lizard Optimization*, *Impact Mapping*, *Specification by Example*, and other books.
- He is introduced as a founder or co-founder of Narakeet and Votito and a partner at Neuri Consulting LLP.
- His listed honors include being a 2019 AWS Serverless Hero and receiving major testing and agile awards.
- The host adds that Adzic once made a client cry by talking about unit tests.
- Adzic's central question is how to make products grow by combining observability, exploratory testing, and product management.

### 1.2 Building your own products changes the problems

- Decisions about cleaning a codebase or automating tests become easier when the builders own the product.
- Customers also reach the builders directly, exposing confusing behavior without organizational filters.
- Product teams therefore need technical ways to understand and retain people who arrive with unexpected goals or assumptions.

### 1.3 ChatGPT's hallucinated URLs create real prospects

- ChatGPT began sending Adzic's site many users through URLs that did not exist.
- Those users blamed the website because the invented URL appeared to belong to it.
- A conventional support loop would forward the complaint to developers, receive “that page is not supposed to exist,” and send the user away.
- Adzic instead asks how to retain the customer that ChatGPT has already created.
- He invokes Peter Drucker's formulation that a business exists to create and retain a customer.
- Closing the loop between support, development, and product can turn even a malformed request into a customer relationship.

## 2. “Too smart” and “too stupid” users

### 2.1 The audience's two categories

- Adzic asks who has encountered users deemed too stupid to use a product; about half the room responds.
- Far fewer have encountered a user too smart for the product.
- Both categories expose assumptions the builders failed to model.

### 2.2 The poker exchange-rate exploit: setup

- About 20 years earlier, Adzic worked with a UK gambling company integrating with a US poker network.
- Customer balances were in pounds while poker chips represented US cents.
- Business analysts specified the behavior, UX staff designed it, and developers and testers implemented it.
- The client approved the resulting transfer screen.

### 2.3 The poker exchange-rate exploit: mechanics

- The relevant exchange rate was approximately $0.54 per pound.
- Converting one cent back to pounds produced £0.0054, displayed as £0.01 after rounding to two decimal places.
- Converting that rounded penny back produced two cents.
- Repeating the operation manually was uninteresting, but automating it generated money.
- The company paid the user £20,000 because the approved screen behaved exactly as specified and the user had done nothing prohibited.

### 2.4 The missing domain rule

- The team had been told to round to two decimal places.
- It had no foreign-exchange expert to explain that such conversions should round down.
- The incident raised an ownership question: was the failure analysis, implementation, testing, or missing expertise?
- The “too smart” user revealed domain knowledge absent from the product team.

### 2.5 Corporate bug-versus-feature accounting

- The team argued over whether the repair was a bug fix or a feature request.
- A project manager defined the distinction financially rather than behaviorally.
- If classified as a bug, the supplier paid; if classified as a feature, the client paid.
- Her conclusion that everything should therefore be a feature request demonstrated why the classification was useless for learning.

## 3. The fridge mismatch changes the model

### 3.1 A collaboration tool designed for desks

- Seven or eight years before the talk, Adzic's team built a collaboration tool for planning, brainstorming, and hierarchical documents.
- It assumed a large screen, mouse, and keyboard.
- A user reported that it did not work “in a fridge,” initially suggesting an absurd operating environment.

### 3.2 The user's actual environment

- The software was running on the large Android touchscreen built into a Samsung refrigerator.
- The user was a busy mother working from home while colleagues held a morning planning session.
- A laptop near breakfast food risked spills.
- A phone was too small to see from a distance.
- The refrigerator display let her follow the session while preparing breakfast for her children.
- Her choice was logical within her environment even though it violated the designers' assumptions.

### 3.3 Generalizing the fridge request

- The team did not create a refrigerator-specific product.
- It reframed the need as participating in a meeting without actively editing.
- It made the interface less dependent on mouse and keyboard input.
- It made the UX more touch-friendly.
- When COVID-19 later forced widespread home working, those general changes unlocked major growth.

### 3.4 Expected versus unexpected replaces right versus wrong

- Adzic rejects moral judgments about whether product behavior is right or wrong.
- The useful distinction is whether behavior was expected or unexpected.
- The refrigerator use was unexpected by the builders, which was their information gap rather than the user's fault.
- “Expected” must still name a perspective because users and builders can reasonably expect different things.
- “Builders” includes developers, testers, analysts, and product staff.

## 4. The builder/user expectation matrix

### 4.1 Quadrant 1: acceptable feature

- When the product behaves as builders expect and users also expect that behavior, it is an acceptable feature.
- This is the uncomplicated positive diagonal of the matrix.

### 4.2 Quadrant 2: bug

- When neither builders nor users expect the observed behavior, it is a conventional bug.
- This is the uncomplicated negative diagonal.

### 4.3 Quadrant 3: exploit

- An exploit occurs when a user obtains a benefit the builders did not expect.
- The benefit might arise from a security weakness, a financial rounding flaw, or a novel use.
- “Exploit” is descriptive here and does not automatically mean malicious behavior.

### 4.4 Quadrant 4: mismatch

- Adzic borrows “mismatch” from inclusive-design expert Kat Holmes.
- A mismatch exists when builders think the product should work for someone but the person's capabilities or environment prevent success.
- Causes can include skill, disability, missing input devices, or bright outdoor sunlight.
- A team may intentionally decline a use case, but it should treat the mismatch as product intelligence.

## 5. Unexpected uses are product opportunities

### 5.1 Haier's broken washing machines

- Adzic cites *The Startup Factory* and a story about Chinese appliance manufacturer Haier.
- Haier saw increasing washing-machine returns but found no production-process defect.
- Customers initially resisted explaining how they had used the machines.
- Farmers had discovered that the machines could wash potatoes without damaging them.
- Washing made potatoes look better and absorb water, increasing their sale weight.
- The practice spread between farmers and broke machines that were not designed for soil and potatoes.
- Haier learned from the misuse and created a potato-washing machine for a new agricultural market.

### 5.2 The lizardman constant

- Adzic cites Scott Alexander's Slate Star Codex article about a “lizardman constant.”
- Alexander observed that roughly 4% of survey responses can be strange or inexplicable across many sources.
- The metaphor treats those respondents as “lizards” who do not think like the researcher.
- Product builders likewise will not intuitively understand some percentage of users.
- Understanding what those users do can improve the product for everyone.

### 5.3 PayPal begins with cryptography and Palm Pilots

- In the late 1990s, a company built a highly optimized cryptography library before finding its market.
- Low computational requirements suggested running encryption on mobile devices, then meaning Palm Pilots.
- The team created a way to transfer encrypted money by bringing two Palm Pilots together.
- The technology was impressive, but Palm Pilot adoption limited the product.

### 5.4 PayPal's “dummy” website becomes the real product

- The company published a test website so people could try transfers without a Palm Pilot.
- It hoped the site might lead people to the device application.
- Users instead adopted the website in ways the company opposed, and the company threatened people who published links to it.
- After roughly a year, the ugly test site had 1.5 million active users while the Palm Pilot application had 12,000.
- The company stopped fighting its users, killed the Palm Pilot focus, and rebranded the web product as PayPal.
- The lesson is to treat mismatches and exploits as opportunities rather than enemies of the original plan.

### 5.5 Children unexpectedly adopt the collaboration tool

- In 2015, Adzic's team received complaints that children could not understand the professional collaboration tool's instructions.
- Legal terms said users should be at least 18, but teachers were nevertheless using it with students.
- The team enlarged icons and simplified the toolbar instead of rejecting the audience.
- The product consequently became one of the largest tools in the US school market.

### 5.6 Retention compounds

- Marketing and sales drive much customer acquisition beyond developers' direct control.
- Once a prospect arrives, product behavior determines whether the team can keep them.
- Adzic cites Amy Gallo in *Harvard Business Review* on acquisition being linear while retention compounds.
- The cited research says a 5% retention improvement can raise profits by 25–95% in traditional businesses.
- If unusual users account for roughly 4%, serving them can contribute a large share of that retention improvement.

## 6. The blank PowerPoint becomes a new product

### 6.1 The original PowerPoint-to-video workflow

- Adzic's product served HR and training staff who needed internal videos but were not video professionals.
- Users placed narration in PowerPoint presenter notes.
- The system generated text-to-speech audio, aligned it to slides, and created a training video.
- It reduced work that took hours to about five minutes.

### 6.2 Investigating an apparently broken presentation

- A user complained about a failed instruction, and Adzic inspected the uploaded PowerPoint.
- It contained one blank slide and a very large presenter note.
- Adzic first suspected a broken Office 365 import because no normal slide content appeared.
- A screenshot confirmed that the source really was one blank slide.

### 6.3 The user wanted audio, not video

- The user preferred Adzic's text-to-speech output to competing products.
- He created a blank presentation, put all text into its notes, waited for a video, downloaded it, and extracted its audio.
- The workflow used expensive video infrastructure for an unanticipated audio-only goal.
- Producing audio directly would cost about 2% as much operationally.

### 6.4 Removing the accidental video workflow

- Although the behavior appeared only about once per day, Adzic built a document-upload path for direct audio creation.
- After one month, users created as many audio files as videos.
- After three months, they created twice as many audio files as videos.
- About five months later, one day produced 264 videos and 124,000 audio files.
- Supporting the lizards grew usage by roughly three orders of magnitude.
- A conventional product manager could easily have discarded the original signal because it involved less than 1% of users.

## 7. L — Learn how people misuse the product

### 7.1 Reuse operational observability for product intelligence

- Learning from misuse at scale usually requires developers to aggregate and filter data.
- The industry already has tools for detecting crashes, memory leaks, and other unexpected operational behavior.
- The same observability capabilities can expose unexpected customer behavior.
- Adzic recommends logging every user-facing error condition in a form that supports totals and statistics.

### 7.2 Image uploads reveal noise

- After enabling Word and PDF uploads, the team logged unsupported and strange files.
- Some users uploaded PNG and JPEG images of handwritten notes to a text-to-speech system.
- Adzic judged many of those inputs impossible for the system to interpret usefully at the time.

### 7.3 APK uploads reveal behavior to ignore

- Roughly 100 people per day uploaded Android APK packages to the text-to-speech system.
- Adzic could not identify a legitimate text-to-speech goal.
- He speculated that uploaders might hope someone would inspect and install malware, like leaving an infected USB stick outside a company.
- Not every lizard signal deserves a product response.

### 7.4 SRT uploads reveal a coherent goal

- Users also uploaded SRT subtitle files, which contain alternating timestamps and text.
- The system initially read timestamps aloud because it treated the file as ordinary text.
- Complaining users expected speech synchronized to those timestamps.
- Unlike the APK case, Adzic could understand both the goal and the technical challenge.

### 7.5 A two-and-a-half-hour experiment becomes highly profitable

- Synchronization required balancing speech timing rather than merely speeding up or slowing down each line.
- Adzic implemented and released an initial solution in about two and a half hours.
- A week later, a large enterprise software company arrived with 200,000 videos to translate into 50 languages.
- It already had translated subtitle files.
- Directly producing synchronized speech saved its content staff many hours.
- The company paid substantially, making the small experiment Adzic's most profitable work.

### 7.6 Tighten support and product feedback

- Competitors likely see similar errors, but advantage comes from acting on them.
- Observability and support systems should feed product decisions rather than merely close individual incidents.
- Adzic cites Rachel Newman's Eventbrite talk describing support staff as a gold mine of unusual use cases.
- At 10 million active users, strange behavior occurs at large scale, making aggregation essential.

## 8. Z — Zoom in on one strategic behavior change

### 8.1 Separate signal from abundant noise

- Logging produces more anomalies than a team can address.
- The team must decide which behavior is actionable now rather than six months or a year later.
- The chosen lizard behavior must be consistent with the product's present strategy.

### 8.2 Voices and incompatible writing systems

- Five years earlier, most synthetic voices were trained for one language.
- A Hungarian voice could not read Russian or Arabic text.
- Processing incompatible input still generated operating cost while producing no useful result and no revenue.
- The product therefore began blocking obvious mismatches, such as text with no Latin letters sent to a voice requiring them.

### 8.3 The Canadian voice complaint

- One paying user interpreted “Latin” as the Latin language rather than the Latin alphabet.
- He threatened to complain to the Canadian consulate in Britain because his Canadian voice rejected the file.
- The uploaded file contained 100 smiley characters and no letters.
- Adzic concluded that an error requiring such an email was itself poorly designed and needed better logging.

### 8.4 The logs expose repeated Hindi mismatches

- New logs showed users asking voices named Carl and Charles to read Hindi.
- Another example used Imran for text whose alphabet it could not handle.
- The repetition of Hindi inputs turned scattered errors into a visible product signal.

### 8.5 The five stages of growth choose the current metric

- Adzic cites *Lean Analytics* for a five-stage model of product growth.
- A product first tests whether it solves a problem effectively.
- It next tests whether the problem matters enough to create a market, using signals such as frequency and urgency.
- Later concerns include stickiness, growth, and revenue.
- His product needed stickiness: visitors were arriving but leaving when voices could not read their text.
- The model helps select both a target metric and guardrails that should not be damaged.

## 9. R — Remove obstacles to user success

### 9.1 Kat Holmes's “suck zone”

- Adzic attributes the “suck zone” concept to Kat Holmes and the book *Badass*.
- An unfamiliar product can make users feel unskilled and immediately think, “I hate this.”
- The product must move them quickly to “I can do the basics.”
- Holmes's cited limit is about 30 minutes before retention is lost.
- Product-led growth practitioners suggest about five minutes.
- Adzic's team reduced its path to basic success to roughly 30 seconds.

### 9.2 Error messages can be obstacles rather than help

- The Latin-alphabet message did not guide the Canadian-voice user toward a successful action.
- Requiring PowerPoint from someone who only wanted audio was another needless barrier.
- Obstacles can arise from missing features, wrong features, bugs, or usability problems.
- The goal is not merely to explain failure but to move users toward their intended outcome.

### 9.3 Detect script and recommend usable voices

- Distinguishing Hungarian from English or German text can be difficult because the scripts overlap.
- Distinguishing Hindi or Bengali scripts from English is much easier.
- Instead of only rejecting an Irish voice for Bengali text, the system identified the likely writing system and offered Bengali-capable voices.
- The change took roughly half an hour.
- It retained people who had previously clicked, failed, become angry, and left.

## 10. D — Detect undesirable effects

### 10.1 A growth spike hides a business failure

- The product's task graph rose sharply around Valentine's Day in February 2023 after the Hindi-language improvement.
- Adzic initially wanted to celebrate the surge.
- The earlier mix was about 5% commercial users and 95% free users, near the intended freemium balance.
- During the spike, 99.9% of users were free.
- Usage grew while the company moved toward bankruptcy.

### 10.2 Targets need guardrails

- The five-stages model let Adzic pair a stickiness target with a revenue guardrail.
- A modest revenue decline might be acceptable while improving retention.
- The observed collapse was far outside that boundary.
- Almost all new tasks were in Hindi, directly connecting the growth experiment to the problem.

### 10.3 Blocking India moves the behavior

- The first response was to block India entirely.
- Hindi audio generation then appeared to surge from Hungary, Costa Rica, and other countries.
- The movement showed that users were routing through VPNs rather than disappearing.
- Adzic found a popular Hindi YouTube video explaining how to exploit the free system and repeatedly mentioning VPNs.

### 10.4 Blocking VPNs creates another mismatch

- Blocking VPN traffic restored profitability but removed legitimate users along with abusive free traffic.
- Adzic received hundreds of emails per day requesting restored access.
- One person said he was “too spiritual” for regular internet and described police or military harassment.
- Anonymous Outlook messages often bounced when answered.
- Indian insurance companies called the system critical to their business while admitting they had no paid account.

### 10.5 A paying VPN user reveals the false assumption

- After many requests from free users, a Gmail sender demanded a refund when refused access.
- His account showed that he paid a substantial amount.
- He lived where the government monitored internet access and used a VPN for privacy.
- The blanket VPN block had confused an access method with willingness to pay.

### 10.6 Segment by commercial relationship

- The revised rule continued blocking free VPN usage while allowing commercial users to connect through VPNs.
- Some previously free companies began paying to regain VPN access.
- By the end of February, the change had increased profit by about 25%, with growth continuing afterward.
- Detection did not end with the original experiment; each corrective action required observation for new unintended effects.

## 11. Solve for one, extend for many

### 11.1 Avoid per-lizard exceptions

- Whitelisting one paying user's IP address would have repaired only that incident.
- Creating a refrigerator-specific interface would likewise have overfit one device.
- A collection of one-off exceptions makes a product incoherent.
- Each response must remain compatible with the product vision.

### 11.2 Generalize the underlying mismatch

- Adzic cites Kat Holmes's strategy: “solve for one, but extend for many.”
- The team must understand the underlying need, then design a concept useful to many people with the same constraint.
- Allowing paid VPN use served many privacy-conscious customers rather than one complainant.
- Touch-friendly passive participation served many home and mobile contexts rather than one refrigerator.

### 11.3 Not every lizard will be retained

- The “too spiritual” user replied, in broken English, that he was “a very idiot person” when free access was not restored.
- Adzic keeps the response for presentations.
- A product cannot satisfy every unusual user.
- Making a product usable by enough lizards usually also makes it easier for ordinary users and opens new use cases.

## 12. The LZRD loop recap

### 12.1 L — Learn

- Learn how people misuse the product.
- Log unexpected behavior so evidence exists when it becomes strategically relevant.

### 12.2 Z — Zoom in

- Select one behavior change to pursue now.
- Ensure it matches the product's current stage and strategy.

### 12.3 R — Remove obstacles

- Find what prevents users from achieving their intended outcome.
- Replace rejection and friction with a route to success where appropriate.

### 12.4 D — Detect undesirable effects

- Measure both the intended result and guardrail metrics.
- Expect lizards to respond in ways the team did not predict.
- Adzic's shorter mnemonic is “lizard alert, zoom in, rescue the lizards, double-check.”

## 13. People & References Cited

### 13.1 People

- **Gojko Adzic** — speaker; author and product builder.
- **Peter Drucker** — cited for defining business purpose as creating and retaining customers.
- **Kat Holmes** — cited for inclusive-design mismatches, the “suck zone,” and “solve for one, extend for many.”
- **Scott Alexander** — Slate Star Codex author cited for the “lizardman constant.”
- **Amy Gallo** — cited for a *Harvard Business Review* article about acquisition, retention, and profitability.
- **Rachel Newman** — former Eventbrite employee cited for a talk about support as a source of product intelligence.

### 13.2 Companies, products, and communities

- **AWS** — Adzic was introduced as a 2019 AWS Serverless Hero.
- **ChatGPT** — generated hallucinated URLs that nevertheless delivered prospects.
- **Samsung** — made the Android-screen refrigerator used for collaboration.
- **Haier** — appliance manufacturer in the potato-washing-machine story.
- **PayPal** — evolved from a Palm Pilot cryptography product after unexpected web adoption.
- **Office 365** — initially suspected as the source of the blank-PowerPoint problem.
- **Eventbrite** — Rachel Newman's former employer.
- **Product-led growth community** — cited for a five-minute target for reaching basic product success.

### 13.3 Books, articles, and concepts

- ***Lizard Optimization*** — Adzic's book and the source concept for the talk.
- ***Impact Mapping*** and ***Specification by Example*** — Adzic books named in the introduction.
- ***The Startup Factory*** — cited for the Haier potato-washing-machine story.
- **Slate Star Codex / “Lizardman's Constant Is 4%”** — source of the lizard metaphor and approximate 4% figure.
- ***Harvard Business Review*** — source cited for retention's effect on profitability.
- ***Lean Analytics*** — source of the five stages of growth.
- ***Badass*** — cited in connection with the “suck zone” concept.
- **LZRD** — Learn, Zoom in, Remove obstacles, Detect undesirable effects.

---

*Video: https://www.youtube.com/watch?v=_ch7LvVFPYg — Transcript via yt-transcript.sh; outline generated from the transcript.*
