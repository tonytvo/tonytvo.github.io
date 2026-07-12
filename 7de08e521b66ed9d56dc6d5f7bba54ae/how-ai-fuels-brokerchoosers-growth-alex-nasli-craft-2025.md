---
title: "How AI Fuels BrokerChooser's Growth - Alex Nasli | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Alex Nasli (BrokerChooser) on falling in love with impact not technology — three real AI projects (translation, the Nuri assistant, data collection) scored against scalable/workflow/simple, with an extended Q&A on RAG, LLM-as-judge, guarding, and scraping."
type: "reference"
tags: ["softwaredevelopment", "ai"]
---

# How AI Fuels BrokerChooser's Growth - Alex Nasli (Talk Outline)

> **Alex Nasli** — AI & data lead / LLM engineer at **BrokerChooser** ("the **Skyscanner of brokers**") — on how AI brought **real revenue, traffic, and conversion**, not just cool tech. Opening (his "first time speaking like this"): a show of hands — *many* have built an AI project; **far fewer** have had one bring money to their company. **Core message: "fall in love with the impact, not the technology itself."**

---

## 1. The Framework — The Ideal AI Use Case

- **Impact, at BrokerChooser, means three things:** **revenue**, **traffic**, and **conversion rate** of users.
- The **ideal use case** has three properties (won't hold for *all* their projects, but aim for it):
  1. **Scalable** — it **increases the number of outputs** you can produce with AI. For BrokerChooser: the **number of articles** they can write.
  2. **Supports (part of) your workflow** — it will **not fully replace** the workflow, but supports it and can **enable things you couldn't do without AI.** For them: **collecting data** (the whole product is built on data, and they need a lot of it).
  3. **Simple** — "sometimes it could sound boring, but I think if it's simple, it's even better." (He acknowledges not everyone agrees.)
- Repeated thesis: **"always have an eye on the impact, not on the technology itself."**

## 2. Context — What BrokerChooser Is

- **Mission: "just to have people invest."** Like **Skyscanner matches people with flights**, BrokerChooser **matches people with brokers.**
- **What an online broker is:** a company/firm whose website or app you register with, open an account, deposit money, and trade with it.
- **Investing is hard** — many complex choices; first you must **pick a broker**, and there are **~3,000 brokers globally.** That's where BrokerChooser helps: **articles/reviews** (e.g., an eToro review), **best-lists**, **comparison tables**, **recommendation tools**, plus **investing articles.**
- **Bootstrapped** — "really cool": **no investors**, **founded 9 years ago**, still going with no investors; it brought revenue from the start, proving the product is needed.
- **Profitable** — lets them **reinvest** into the team and new projects. Numbers: **60 people** (doubled last year), **~€1M profit last year**, **~900,000 visitors/month.**
- **Why they can be innovative:** (1) **bootstrapped** → freedom, no investors dictating; (2) **profitable** → can reinvest into AI/innovative projects.
- **Alex's own path:** joined **5 years ago as a data engineer** (they get traffic from Google → lots of user analytics), built the **data infrastructure** — "then everything changed when ChatGPT was released."

---

## 3. Project 1 — Translation (the big win)

### 3.1 Origin & skepticism
- ChatGPT was released; **the board said "let's do something with AI."** They'd heard **Investing.com** (a competitor) had success **translating their website into multiple languages**, which brought traffic. **Localization matters** — BrokerChooser's audience is worldwide (mostly US & UK, but everywhere).
- Alex was **skeptical**: they'd tried localization before (translated the site into **Italian** with human translators) and **the impact was poor** — no visitors.
- Response: **built a dedicated A-team** — "the best engineers of BrokerChooser" — just for translation.

### 3.2 Horizontal × vertical scaling
- They **already collect broker data**, so they **scale articles from data points**: **one template article → an article per broker.** With **~100 brokers**, that's **horizontal scaling → ~100 articles** from one template.
- **Add vertical scaling = languages.** They now translate into **~70 languages.**
- **One template article × horizontal × vertical → ~7,000 articles from one piece of content.** "In **January** we produced around **1 million pages** — I was just stunned."

### 3.3 How it works
- The engine **collects all the English texts** from a piece of content into a **list**, sends it to **GPT** (they will **switch to Claude** soon), gets translated text back, and **generates new pages.**
- **Calibration via evaluation:** to make the model use the **right jargon / style**, you need a **metric** to evaluate translation models and **pick the best one.** They use **LLM-as-judge** (evaluate a translation model *with another LLM*) — "experienced that it's **closer to human evaluation.**"

### 3.4 Speed, trust, and impact
- **First articles shipped in 3 weeks** — "the board said it on **week zero**; in **three weeks** we released our first articles." Quality wasn't great at first, but **"user comes first"**: they added a **visible box** — *"this is an AI-generated translation; if you want the original, go back to English."* — to preserve **trust.**
- **Impact: traffic doubled** — "**half of our traffic** now comes from these translated pages." (Google needs time to index/learn new content; watching the dashboard and seeing the first traffic "was a really good feeling.")
- **Framework scorecard:** **Scalable ✓** (huge content volume), **workflow ✓** (no need to hire translators — "we don't have any translators right now"), **simple ✓**.
- (Plug: a **workshop** would show how they evaluated these models — "please come if you haven't registered.")

---

## 4. Project 2 — Nuri, the assistant

### 4.1 Origin & RAG
- Started as a **one-week hackathon** assistant (quality wasn't great — "just a hackathon"), then made into a real project **focused on impact.**
- Built on **RAG (retrieval-augmented generation)** — "you **limit your model to a knowledge base**": ChatGPT-style answers, but **only from BrokerChooser's articles/content**, not other sources — so it stays in their context. Built (like translation) on **evaluation with LLM-as-judge.**

### 4.2 Three products & the guarding challenge
- Three products built on the assistant (named **Nuri**):
  1. **Upgraded search bar** — an AI/assistant-based search bar (replacing the normal one) to help users navigate.
  2. **General chat interface** — a **logo at the bottom** you click to open a chat window.
  3. **Forum integration** — Nuri answers user questions on their **forum.**
- **Challenge:** user logs showed **people trying to hack Nuri** (e.g., to extract the **system prompt**), so calibration had to **guard** against that too.

### 4.3 Impact & the "AI" logo trick
- **Nuri users convert much higher** — many more go on to a broker (BrokerChooser sends users to brokers) than non-users.
- **But few people use it.** They tried many things; the **most surprising win** was **adding "AI" to the bottom logo** → many more people started using it. "**Sometimes the simple is better.**"
- Still, **usage (and thus revenue) isn't where they want it** → **Nuri is currently on hold** (no capacity to improve it further).
- **Framework scorecard:** **Scalable ✗** (low usage), **workflow ✓** (don't have to answer those questions themselves), **simple — debatable** ("RAG is not that simple, even though we tried").

---

## 5. Project 3 — Data Collection (most innovative, hardest)

- BrokerChooser is **data-driven**: broker data lives on **broker websites**; they **manually collect** it, store it in their database, and produce articles. Management decided to **try AI for data collection** — believing there's a **scaling factor.**
- **The scale prize:** they cover **~100 brokers** of **~3,000** worldwide; **each broker takes an analyst many weeks** to collect. AI could scale **100 → 3,000.**
- **Most trial-and-error of any project.** They tried:
  - **Perplexity / GPT-search** (generative-AI-based search).
  - **Tools integrating scraping + AI** (e.g., **crawl4ai**).
  - Conclusion: **no single solution works for all** — "we'll probably need **different solutions for different data points.**"
- **Two core challenges:** (1) the **variety** of 3,000 brokers and their websites; (2) the **data itself** — plus a **search challenge**: not all data is AI-accessible (some needs **login/registration**). Future possibility: **GPT "operators"** to do the login/registration.
- **Status: still a research project** with **some initial results** — a few data points collected by AI (not yet used for all brokers) — but **believed to bring a lot of money.**
- **Framework scorecard:** **Scalable ✓** (100 → 3,000), **workflow ✓** (analysts don't collect the data), **simple ✗** ("not simple at all").

---

## 6. Learnings

1. **Sometimes it's more UX than an AI project** — Nuri's biggest lever was **adding "AI" to the logo**, not the model.
2. **Building an AI project can be bumpy** — even a new/innovative project has **many redos / trial-and-error** (data collection: "we still didn't fully hack the problem, but we're working on it").
3. **Talent is key** — you need the **best team/engineers.** For data collection they **tried university research groups and they failed**; then **hired good AI engineers** (took ~**half a year**) who **produced far more** than the research group. ("I'm not saying research groups are bad — maybe use them differently.")
- **Recruiting note:** BrokerChooser is **looking for talent** and develops it — e.g., sending people abroad to give lectures and to the US for conferences (this very talk is Alex "developing"). "If you feel this could be you, try applying."

---

## 7. Q&A

- **How do you test that translation and chatbot responses are accurate?** Via **evaluation/calibration** needing a **dataset**. They built their **own translation dataset** (English text + translated text); a **prompt** produces a result and **AI judges** whether the two are similar — same technique for translation and the chatbot. For the chatbot they take **questions users could ask**, **categorize** them (to see which category isn't working well), and use an **LLM to score each test sample on accuracy.**
- **What RAG techniques/strategies worked?** The hackathon showed that **building everything from scratch** (indexing, chunking) **is a lot of work**, so they **searched for an existing solution.** They use **Nuclia** — an **end-to-end RAG system**: register on their site, hand over your articles, and use their system via **one API call.** **Advice: better to use someone's RAG** — easier for a **small team.**
- **Have you tried agentic AI for data collection?** **Not yet** ("I wouldn't call what we built agentic"). They built a **longer pipeline**: using **Perplexity's API** (generative-AI search that returns a summary of a query) with a **prompt to convert it into the right data structure.** Because there's **inconsistency between end-to-end runs**, they use a **GPT model to create multiple, slightly-different Perplexity collectors** (differing prompts); all collect the data, and **inconsistent data points are flagged as insecure** for an **analyst to check** — "a longer AI-based pipeline," not agentic AI.
- **How do you deal with private data with AI?** For translation they use **public website data**, so **privacy isn't a big focus** — a simple **API call** passes the (public) data to the translation model and back.
- **How did you guard your chatbot?** "**Lots of prompting.**" They focus heavily on the prompts for the **generative** part — instructions like **don't answer anything racist / sexual**, and **don't give the prompt back to users** — plus **evaluation** with test examples to see the model's answers.
- **What code language — Python for the ChatGPT API?** **Yes, Python** for implementations (also for data collection). **But** for translation: the **evaluation** was built in Python, while their **backend is PHP**, and since it's "just a simple API call" at the end, **the API is added to PHP** — so translation itself **doesn't use Python** (only the evaluation did).
- **What scrapers/crawlers/retrieval do you use? How do you version raw data?** Multiple solutions tried: (1) **Perplexity API**; (2) **crawl4ai** (a repository integrating scraping + LLM); (3) first attempts with **normal scraping (BeautifulSoup and others) + a RAG model — those failed.** Currently: **Perplexity + crawl4ai.** (The AI engineers are present for deeper technicalities.)
- **Would model retraining work better?** Unclear what the asker meant; they **chose foundation models** (GPT, Claude, Perplexity), which they **can't retrain**; **fine-tuning** could work, but **prompting alone already gives very good results**, so that's their focus.
- **How consistent is the LLM-as-judge evaluation?** **Not always consistent** — so **run it multiple times and average/aggregate** the results.

---

## People, Companies & Tools Cited

- **Alex Nasli** — speaker; AI & data lead / LLM engineer, **BrokerChooser**.
- **BrokerChooser** — bootstrapped, ~9 years old, ~60 people, ~€1M profit, ~900k visitors/month; "Skyscanner of brokers."
- **Skyscanner** (analogy), **Investing.com** (competitor whose localization inspired the translation project).
- Tools/tech: **ChatGPT/GPT, Claude (migrating to), Perplexity API, crawl4ai, BeautifulSoup, Nuclia (end-to-end RAG), Python, PHP.**
- Concepts: impact-over-technology; scalable / supports-workflow / simple; horizontal × vertical scaling; LLM-as-judge evaluation; RAG (buy vs. build); prompt-injection guarding; multi-collector inconsistency flagging; "more UX than AI"; talent > research groups.

---

*Video: https://www.youtube.com/watch?v=Toa_cy1Kb24 — Transcript via yt-transcript.sh; outline generated from the transcript.*
