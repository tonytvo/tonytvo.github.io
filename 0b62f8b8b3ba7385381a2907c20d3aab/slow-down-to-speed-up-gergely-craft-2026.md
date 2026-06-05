---
title: "Slow Down to Speed Up"
date: "2026-06-04T00:00:00.000Z"
description: "Gergely Orosz on AI adoption maturity, cost pressures, and engineering craft at Craft Conference 2026."
type: "reference"
tags: ["softwaredevelopment", "ai", "engineering"]
---

Slow Down to Speed Up - June 4, 2026
General notes


**Overview**
 • AI adoption maturity gap: Most companies are stuck with individuals using AI for simple automation, while the goal should be team-level agentic systems. Leaders like Laura Tascio (head of developer experience at AWS, former CTO of DX) identify that companies treating AI as an individual productivity tool rather than a system-level transformation tool are failing to see meaningful team output improvements. Spotify's CTO confirmed their AI bar is maintaining quality over increasing output, building internal quality-checking tools and deliberately slowing AI rollouts.
 • Escalating AI costs are hitting companies hard: Uber burned through its entire annual AI budget by March and has capped spending at $1,500/month per engineer, after which engineers must use free models. Anthropic has removed enterprise discounts, and GitHub Copilot introduced usage-based pricing on June 1st, causing budgets that previously lasted a month to be exhausted in three days. Sam Altman publicly acknowledged AI budgets are becoming a major issue for companies.
 • Serious quality degradation across the software industry: AI-assisted development is producing faster but lower-quality code. Notable incidents include: Anthropic's own Claude.ai website having a recurring input-loss bug affecting millions of paid users for a month; OpenAI's agent builder becoming 'abandonware' with unresolved P0 bugs three months after launch; Amazon suffering a major .com outage caused by an AI agent deleting and recreating an environment, leading Amazon to now require senior engineer review of all AI-generated changes.
 • Middle management reduction is damaging engineering culture: Companies including Meta are cutting or reassigning middle managers to individual contributor roles. The speaker argues that good middle management (directors, senior engineering managers) maintains engineering culture by identifying friction, realigning teams, and improving processes — and its removal will lead to measurable culture decline. Simultaneously, CEOs and CTOs are returning to coding with AI tools (noted by Vercel CEO Guillermo Rrauch), creating risk as they may misjudge code completeness without adequate management buffer.
 • Career and craft advice for software engineers: Key recommendations include: capping daily agent usage to what can be verified or reviewed; not outsourcing learning to AI (Andy Oxman's advice: 'the bug gets fixed but your mental model does not'); building domain expertise outside software (agriculture, automotive, etc.); engineering leaders must stay hands-on or risk being cut; AI amplifies seniority — judgment is increasingly rewarded, and senior engineers gain the most from AI tools. The global software engineering job market shows a 20% increase in job postings in the US and UK, a 13% and 10% decline in Germany and France respectively, and flat growth in Canada. AI engineering roles now represent ~10% of all software engineering postings and are growing rapidly.

**Action Items
**Speaker A (Presenter):
 • Will be available outside after the talk for individual questions from attendees
 • Offered a free one-month subscription to The Pragmatic Engineer newsletter via QR code, available for the day of the event (including sharing with others that same day)

**Topics**
**Large Tech Companies Building Internal AI Infrastructure**
 • Major tech companies are building proprietary internal AI platforms rather than relying on off-the-shelf tools
 • Uber built MCP, Agent Builder, CLI, Minions and other internal tools for internal use (not customer-facing)
 • Stripe has maintenance tools, check blueprints, and set boxes
 • Ramp has Inspect, Glass, Dojo, Sensei, and Sensei21
 • Shopify has Sidekick, proxy dev server, and Airbnb1/Catalyst tools
 • These companies have dedicated infrastructure teams building and maintaining these systems at scale

**AI Agent Adoption Trends in Startups**
 • Startups are primarily using agents for coding and code review
 • Slack is a common integration point for agent interactions
 • One startup that raised a $70M Series B instructed an agent to 'fix all bugs in the codebase' as a joke; the agent returned discovering four critical authentication vulnerabilities with wide-open backdoors — which the team did not know existed
 • Startups are also using AI agents to build SaaS products on the side, described more as engineers having fun than a core business strategy
 • This type of AI experimentation is more prevalent in startups than in large or traditional companies

**Maturity Model: AI as a System vs. Individual Tool**
 • Laura Tascio (AWS head of developer experience, former CTO of DX) identifies a key failure pattern: companies see individuals performing well with AI, but team-level output doesn't improve
 • She labels this the 'individual speedup' — email summaries, Slack automation, code generation for one person
 • Companies seeing real results begin with a business outcome: faster production deployment, more features at same quality, or improved quality metrics
 • She created a 2x2 maturity model: X-axis = individual vs. team-level AI usage; Y-axis = simple automation vs. agentic systems. Most companies are in the bottom-left (individual + simple automation); the target is top-right (team + agentic systems)
 • Reaching team-level agentic systems requires building integrated systems, iteration, time, and significant investment — it cannot be achieved by purchasing Cursor, Claude Code, or any off-the-shelf vendor tool
 • Spotify example: their CTO (met ~1.5 months prior to the talk) stated their quality bar for AI is that quality must not decrease; they've built internal quality-checking tools and are deliberately slowing AI rollouts compared to companies like Meta

**Token Maxing and AI Tooling Addiction**
 • 'Token maxing' = burning tokens without shipping value, done for appearance of productivity
 • Occurs at Meta, Amazon, Microsoft, and others; Microsoft maintains an internal leaderboard that the speaker believes should be shut down
 • AI tool pricing is described as deliberately addictive: $10–$20 plans → hitting limits → upgrading to $100–$200 plans → feeling pressure to use the full allowance → moving to API pricing
 • Using AI agents has gambling-like psychological effects for some users: 'just one more prompt,' disrupted sleep, waking up thinking about agents
 • Users paying out of pocket feel anxiety about 'wasted' AI spend

**Middle Management Reduction and Its Consequences**
 • Middle managers (directors, senior engineering managers) are being laid off or reassigned to individual contributor roles at companies including Meta
 • Layoffs are often publicly attributed to AI, which the speaker says 'doesn't help'
 • The speaker's argument: good middle management (technical, hands-on capable but choosing not to be) performs critical functions — listening, observing, making small cultural corrections, pulling engineers off bad avenues, improving engineering culture
 • Losing this layer will measurably damage engineering culture — stated as fact by the speaker
 • C-level is defined as top management; everything between C-level and frontline managers is middle management

**CEOs and CTOs Returning to Coding**
 • Guillermo Rrauch (founder and CEO of Vercel, met at investor event in February) reports seeing many CEOs and CTOs returning to coding with AI tools
 • Public company CEOs are DMing Rrauch about using Vercel or Claude Code with excitement
 • Risk identified: with less middle management to protect engineers, and executives now coding directly, executives may misjudge code completeness and quality

**AI Budget Crisis Emerging Across the Industry**
 • Speaker noticed the trend ~1–2 weeks before the talk and wrote about it in The Pragmatic Engineer newsletter for subscribers
 • Sam Altman publicly acknowledged AI budgets are becoming a huge issue for companies (as of the morning of the talk)
 • Reddit joke circulating: '$50,000 gone from shared account — is this an engagement ring?' — referenced as symbolic of real household-level AI overspending
 • Anthropic has removed API discounts for enterprise customers (non-startups, non-individuals now pay full price)
 • GitHub Copilot switched to usage-based pricing on June 1st (two days before the talk); budgets that lasted a month are now exhausted in three days
 • Uber's CTO disclosed in March that Uber burned through its entire annual AI budget; Uber's response: cap of $1,500/month per engineer; engineers exceeding the cap must use free models
 • Many other companies are implementing similar caps (some as low as $200/month), then defaulting to GitHub Copilot zero/free models
 • Described as 'ridiculous when it's as much as an engineer' in cost

**Software Quality Degradation Across the Industry**
 • Speaker's observation: 'a huge drop in quality everywhere'
 • Anthropic/Claude.ai: A React lifecycle bug caused user-typed input to be lost on page load; persisted for ~1 month affecting millions of paid users daily; speaker tweeted about it; product manager responded acknowledging they were unaware; eventually fixed
 • OpenAI Agent Builder: Built in 6 weeks by 1 engineer using Codex; launched with fanfare; 3 months post-launch described as 'abandonware' with unresolved P0 bugs and a GitHub repo full of unaddressed comments
 • Amazon AWS: An internal AI coding tool (Cairo) caused a massive outage by deleting and recreating a production environment; Amazon.com (flagship) partially went down — described as unprecedented; Amazon's response: now requires a senior engineer to review all AI-generated changes, citing that junior engineers rubber-stamp AI code ('looks good to me')
 • Open Code (by Daxrad): Nearly 1 million daily active users, 10x growth in 4–5 months; founder Daxrad admits they are 'shipping way more hacks' instead of redesigning systems properly; their own judgment is 'off'; they are internally telling themselves to use less AI; no competitor is beating them by using AI faster — quality from slowing down is their competitive advantage
 • GitHub: Two weeks prior to the talk, all pull requests were unavailable for 8–12 hours; alternative uptime tracker estimates GitHub is down ~10% of the time (below 1.9 uptime); GitHub CEO shared data with the speaker showing a 3x load increase over 2 years as the explanation; speaker is skeptical this alone justifies the outages; GitHub runs on Ruby on Rails which may be a contributing factor
 • Mario Zechner (creator of LibGDX, on speaker's podcast): 'Software has become a brittle mess everywhere; 98% uptime feels like the norm; it feels like extreme acceleration of existing problems'

**The 'Slobber' Effect: Burnout Among Quality-Focused Engineers**
 • Massive increase in pull requests and AI-generated code is overwhelming the few engineers who still review code properly
 • These engineers catch bugs, push back on duplicated code, and maintain standards — but are not rewarded at performance review time because they're not the ones 'shipping features'
 • Result: these engineers experience burnout, feel unrewarded, and are leaving their companies
 • Daxrad (Open Code) says they are actively hiring these burned-out engineers who are the 'last person keeping things alive' at their former companies
 • With middle management gone, there is 'no one left to care' about quality

**Key Industry Insight: Accumulating Code Faster Than Trust**
 • Kent Beck (keynote speaker the following day) summarized the situation: 'We're accumulating code faster than we accumulate trust'
 • AI amplifies software engineering experience — senior engineers gain the most; judgment is the key differentiator
 • Hill Wayne's finding: AI-generated TLA+ formal verification specifications only work correctly when created by TLA+ experts who provide exact specification context in the prompt — novices cannot replicate results
 • Conclusion: if you've never built a mobile app, AI will generate something non-maintainable; expertise remains essential
 • Old software patterns (Domain-Driven Design, hexagonal architecture) are making a comeback because they provide guardrails for AI agents, which behave like junior engineers needing structure

**Practical Advice: Slowing Down to Speed Up**
 • Cap daily agent usage to what you can verify or review — don't ship more than you can validate; Peter Steinberger (creator of OpenCloud) ships code he doesn't read line-by-line but builds his own verification systems and always reviews module-level architecture and AI-generated diagrams
 • Actively remove tech debt with AI — it's now cheap and easy to do; agents can be directed to remove tech debt; engineers will feel better and it's more efficient use of AI
 • Experiment with different AI agent usage patterns — no one-size-fits-all approach; Mitchell Hashimoto (creator of Go, founder of HashiCorp, on speaker's podcast in March) uses exactly one background agent at all times: while he codes, the agent does planning; while the agent codes, he reviews. He does not use multi-agent setups.
 • Don't outsource learning to AI (Andy Oxman, met at Google 2 years ago): 'The bug gets fixed but your mental model does not. We're trading your future capacity for present-day speed.'
 • Spend more time thinking: Daxrad (Open Code) says he previously spent 95% thinking / 5% coding; with AI he now spends 96% thinking / 4% coding — AI freed him to think even more, not code more
 • Build domain expertise: Become an industry insider; if at an agriculture company, talk to farmers; if at automotive, talk to mechanical engineers — few engineers do this and it creates lasting career differentiation
 • Don't outsource product thinking: Understand the business, talk to product managers; reference: 'The Product Minded Engineer' (blog post and book by speaker)
 • For engineering leaders: Must stay hands-on or become hands-on — AI makes this easier; companies where top 100 committers include 5 product managers or engineering leaders; leaders should help integrate AI at the systems level to reduce friction; expect to do less people management (business expectation is shifting)

**Software Engineering Job Market Analysis**
 • Speaker published a deep dive in The Pragmatic Engineer on the current job market
 • US and UK: 20% increase in software engineering job postings
 • Germany: 13% decrease in postings (vs. 2 years ago)
 • France: 10% decrease in postings (vs. 2 years ago)
 • Canada: Flat
 • Hungary: No direct data; speaker notes Hungary is economically tied to Germany, suggesting a similar downward trend may apply
 • Data source: Indeed (described as reliable)
 • Top tech companies globally are hiring more than before
 • AI engineering roles (RAG systems, evals, LLM pipelines) now represent ~10% of all software engineering job postings in the US and are growing rapidly — identified as a strong career opportunity

**Closing Perspective: Managing Change and Overwhelm**
 • Martin Fowler, Grady Booch, and other industry veterans told the speaker: change has never been this fast in software since the 1960s
 • In 12 months, AI has gone fully mainstream across coding tools
 • Speaker acknowledges feeling overwhelmed himself — validates that this is a normal and appropriate response
 • Advice: periodically stop, assess sustainability and quality, make incremental improvements, then repeat
 • Offered attendees a free one-month full subscription to The Pragmatic Engineer newsletter (including all archives and referenced articles) via QR code — valid for the day of the event only, shareable that same day