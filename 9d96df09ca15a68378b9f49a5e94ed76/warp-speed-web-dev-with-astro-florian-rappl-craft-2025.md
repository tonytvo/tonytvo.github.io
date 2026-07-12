---
title: "Warp Speed Web Dev with Astro - Florian Rappl | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Florian Rappl introduces Astro for content-heavy sites — zero JavaScript by default, Lighthouse scores near 100, file-based routing, the two-section .astro file, the islands architecture with client directives (client:load / client:visible / client:media), running full React/Vue/Svelte/Angular components in islands, one-line View Transitions, and a live demo showing the dev-vs-prod bundling gap — plus a Q&A on micro-frontends, opting out of file-based routing, and when NOT to use Astro."
type: "reference"
tags: ["softwaredevelopment"]
---

# Warp Speed Web Dev with Astro - Florian Rappl (Talk Outline)

> A **Craft 2025** talk by **Florian Rappl** — a solution architect from Germany specializing in scalable distributed web applications, working "almost exclusively" on **micro-frontend** solutions, a longtime **Microsoft MVP** in developer tools, employed at a smaller Munich-region company called **smapiot**. Topic: the **Astro** framework for **content-heavy** pages that ships "blazing fast websites" and, crucially, **zero JavaScript by default** — with the **islands architecture** as the headline concept. Opens by asking the room who considers themselves a web developer ("I will convert the rest during the talk"). Format: a conceptual walkthrough followed by extensive **live demos** (all code on a public GitHub repo) and a Q&A. The talk's own arc: what Astro is → project structure & `.astro` files → the islands architecture → View Transitions → live demos (scaffolding, dev-vs-prod Lighthouse, client directives) → Q&A.

---

## 1. What Astro Is

### 1.1 The problem with existing frameworks
- The landscape has Next.js, Nuxt, meta-frameworks, Angular, standalone React.
- The hard question: how do you get a **Google Lighthouse score close to 100**? "Quite often it's not so easy."

### 1.2 Astro's niche — content-heavy pages
- Astro claims to ship **"blazing fast"** websites ("blazing always meant we are really fast").
- Ideal for **content-heavy** pages with little default interactivity: **shop systems, Wikipedia, documentation** pages.
- Not that Astro *can't* do interactive sites — that comes later via islands.

### 1.3 Zero JavaScript by default
- **Astro ships zero JavaScript by default** — "the baseline, not the goal."
- "The two numbers to know are zero and one, and here the **zero** is really important — this is what Astro is all about."

### 1.4 The Lighthouse comparison
- Desktop Lighthouse across the same app in different frameworks: Astro tops **Gatsby** (React-based, like Next.js), **WordPress**, **Nuxt**, etc. by a significant margin.
- Even on Astro's site, evaluating **real-world scores across all public websites** (framework detectable), Astro "dominates the market" with the highest score of all frameworks (though naturally lower than the ideal demo number).

### 1.5 At heart a static site generator
- Astro "at its heart is a **static site generator**" — you get static content.
- But it can also run in a **non-pre-rendered / server-active** mode, and that can be made **selective per page** (only certain pages are fully interactive / fetch data on the server when the endpoint is hit).

---

## 2. Project Structure & `.astro` Files

### 2.1 The `public/` folder
- A directory copied **verbatim** to the output — "I got a file, don't tamper with it, bring it to the output." "Nothing blazing about it."

### 2.2 The `src/` folder and Node basis
- Source code lives in `src/`, with a **`package.json`** — Astro is **JavaScript / Node.js-based** (like Next.js): `npm init`, install Astro, go.

### 2.3 File-based routing in `pages/`
- The special **`pages/`** folder uses **file-based routing** (common in modern frameworks).
- `index.astro` → the root `/`.
- A subfolder `posts/` with a bracketed file like `[post].astro` → a **parameter route**; `/posts/foo` fills `post` with `"foo"`.
- `about.astro` → `/about`.
- `.js` / `.ts` files → standard **REST endpoints**: export a `get` or `post` function (e.g. `/rss.xml` exporting XML content).

### 2.4 Everything else is up to you
- `components/`, content folders, etc. are freeform; imports work like Next.js.
- Astro also **optimizes images/resources** (not just HTML output) — "a cool feature."
- Non-default behavior goes in **`astro.config.mjs`** (any `.mjs/.ts/.js` extension).

### 2.5 The `.astro` file — two sections
- **Preamble** (top) — like a Markdown YAML frontmatter block, but **TypeScript/JavaScript evaluated at build time**: retrieve component/page **parameters**, make computations. Seen by the Astro build tool during `astro build`.
- **HTML section** (bottom) — more than plain HTML.

### 2.6 JSX-like but real HTML
- Uses **`{}` expression switches** as in JSX to generate more HTML.
- But it's "not really JSX" — it **includes HTML rules**: e.g. **HTML comments work** (printed or stripped in a production build, your choice). "A synergy / meeting point between JSX and standard HTML."

### 2.7 Astro-specific niceties
- **`<Astro.self>`** references the component you're currently writing — so you can recurse without importing yourself (which would be a cyclic import the bundler rejects).
- Components have **no explicit name** — they're named by their **filename** and are the **default export** (e.g. `nested-list` → `NestedList`), imported as a default import.

---

## 3. The Islands Architecture

### 3.1 Two kinds of "static"
- Astro is static both on the **server** (just HTML) and on the **client** (zero JS) — but maybe you want some **interactivity**.

### 3.2 What islands do
- The islands architecture lets Astro **lazy-load JavaScript only where needed**, mostly automatically — "we only need to give it some hints."

### 3.3 The example page
- A typical layout: header, sidebar, content, footer, and an **image carousel**.
- Hardly fully static: the header may toggle things; the carousel (slideshow with clickable, possibly infinite bullets) "cannot live without JavaScript."

### 3.4 Step 1 — identify static vs. interactive
- First, identify which parts are static and which need JavaScript.

### 3.5 The `client:load` directive
- Add `client:load` to a component (e.g. the header): Astro ships the needed JS, but only **when the site is in loading mode** — "not so fancy, load is always."

### 3.6 The `client:visible` directive
- For a carousel far down the page: **ship JS only when the component scrolls into view** — "no reason to load it immediately; you wouldn't see the image anyway."
- When the slider enters the viewport, JS loads and it becomes interactive.

### 3.7 More directives
- **`client:media`** — load under certain media conditions, plus others.
- `client:load` and `client:visible` "will certainly be the most used."

### 3.8 Islands can run full framework components
- An island is a clearly-defined **boundary** where anything can run — not just `.astro`.
- It can host a **full React (or Vue, Svelte, Angular, custom) component**; Astro loads React + React DOM + your component.
- **Shared runtimes load once**: two React islands → the first loads React, the second only loads its component.
- You *can* mix frameworks, but "don't load 17 different frameworks for 17 components" — stay coherent for UX; Astro makes even that "as performant as possible."
- Astro's site lists **integrations** (all the big ones, exotic ones, or roll your own).

---

## 4. View Transitions

### 4.1 What it enables
- The browser's **View Transitions API** (roughly two years old) makes a **multi-page application feel like a single-page application** — a transition between two different HTML files that share a header/route.

### 4.2 One line to opt in
- Astro lets you **opt in with essentially one line**; suddenly the site "feels more fluent" — "it already felt fast, now it also feels really fluent."
- The demo GIF looks like an SPA but is actually multiple pages.

---

## 5. Live Demo

### 5.1 Scaffolding with `npm create astro@latest`
- Greeted by a "nice terminal UI" — "I become an astronaut… setting up a new moon base."
- Offers templates (four directly in the UI; hundreds more via arguments to `npm create astro`).
- Chooses the **Starlight** template (an opinionated docs setup).
- Behind the scenes Astro uses the **Vite** bundler ("rather fast, which is nice").

### 5.2 Starlight supports MDX / Markdown
- Astro supports **MDX and plain Markdown** out of the box — sensible for content-heavy/documentation sites.
- Content uses a **YAML preamble**; inside MDX you can `import` and use components (e.g. a `Card` component).
- Editing content shows working **hot module reload** — "what we expect from a web framework in 2025 still works."

### 5.3 The dev-vs-prod bundling gap
- Running Lighthouse on the **dev server** gives ~**84**, not 100 — "something's missing."
- Reason: **Vite's dev mode is a different beast** — it doesn't bundle your code and doesn't really produce final HTML.
- The network tab shows **~100 requests**, ~2.1 MB of resources, lots of JavaScript — "but didn't it claim no JavaScript by default? This is the dev server."

### 5.4 Build + preview → Lighthouse ~100
- Fix: `npm run build` (creates deployable artifacts) then `npm run preview` (a plain web server; preview only works after a build).
- Now far less JavaScript (only what the template needs), the 2 MB of resources drops to ~191 KB (mostly images).
- Lighthouse now hits **100** — "this is what was promised." Caveat: measure on your **real web server**, not localhost, for realistic numbers.

### 5.5 The hello-world / empty template
- `astro.config.mjs` is nearly empty (`defineConfig` with nothing) — you could drop it; it's boilerplate prepared for when you need it.
- `index.astro` imports a `Welcome` component by filesystem reference; the component is a fragment of HTML plus JSX-like `{}` expression switches.

### 5.6 Image imports return an object
- Importing an image gives an **object** with properties — e.g. `.src` for the reference (and a data property for inline content).
- For **SVG**, using `.src` still costs one request but the file can be **cached** — "whenever anything can be cached it's good."

### 5.7 Layouts and slots
- A `Layout` component wraps content, providing the doctype, `<html>`, `<head>`, and a `<meta name="generator">` ("if you don't like it, remove it").
- Children are transported via **`<slot>`** (like custom elements / shadow DOM) — not React's `children` prop.
- Astro also supports **named slots** ("something React doesn't have out of the box").

### 5.8 Demo — no directive means a dead button
- The blog template's `index` uses a `<Counter client:load />` — a **`.tsx`** React component (imports React, a standard "React 101" counter).
- **Removing the directive** and building/previewing: the **button renders** but there's **no JavaScript**, so clicking does nothing — the network tab confirms zero JS.

### 5.9 Demo — `client:load` hydrates
- Re-adding `client:load`, rebuild/preview: three new files load — the **counter component**, the **React + React DOM runtime** (heavy), and a small index file.
- Now the button works — "Astro **hydrates** this thing."

### 5.10 Demo — `client:visible` and pre-rendering
- With `client:visible`, on load there's **no JavaScript**; **scrolling the component into view** loads all the files and hydrates it.
- Key point: the content was already **pre-rendered** — unlike a classic React SPA that "starts with a loading spinner" because JS must render everything first. "Static-first, then islands solve interactivity." "Pretty neat."

---

## 6. Q&A

### 6.1 Q1 — Micro-frontends: which approach for which use case, how to decide, when to avoid?
- "A question I can give whole talks about" — short answer: **it depends, it's fully project-specific.**
- **iframes:** good for a **completely unrelated boundary** — e.g. an external **advertising** company that mustn't be affected by your styling; **bad for internal** micro-frontends (lots of duplication, a whole new document).
- The listed approaches aren't mutually exclusive: **web components** are a **transport mechanism**; **module federation** is "a good way of sharing dependencies"; **native federation** and module federation "solve more of the same problem" and can be combined.
- Recommends the **decision tree by Luca Mezzalira**; "for anything else, let's discuss afterwards — it's what I do most of my time."

### 6.2 Q2 — Is there a way to opt out of file-based routing?
- No **direct** way, but **indirect** ones.
- Besides the `[param]` route, there's a **slug / wildcard** route (`[...slug]`) — "like a star route in express-based routing" — capturing anything, including sub-routes.
- You can opt out at the root level using this wildcard and then decide what to do with the full path.
- **Caveat:** parameter/wildcard routes need Astro to **know the available parameter values** to generate static pages; a wildcard makes input **dynamic**, so **opting into wildcard routing usually means opting into server-side rendering / dynamic** — the server-side parts "come on top."

### 6.3 Q3 — Are there use cases where you would NOT recommend Astro?
- Yes — if your website is **fully dynamic** (with an asterisk, since Astro shines server-side too).
- If you "already start with a **React design component set** and know you want a **React SPA**," then Astro is "just something in the way."
- But if your design set is compatible with **web components / plain CSS** and the idea of a static site that just works, "Astro can work wonders."

### 6.4 Q3 (follow-on) — Where Astro shines
- They use it for "really small pages" — a seeming contradiction to "content-heavy," but he means **domain-specific, to-the-point** pages (which may still have lots of content).
- Examples: a **meetup page** (all meetups) and a **conference page** — the conference page even has an **admin part** built in **React** that was "hooked in nicely because of the islands architecture," while the content is "super fast."
- Verdict: Astro shines when you're "really to the point"; for very large **use cases**, weigh whether its **constraints/opinions conflict** with your long-run plans.

---

## People & References Cited

- **Florian Rappl** — speaker; solution architect from Germany; micro-frontends specialist; Microsoft MVP (developer tools); works at **smapiot** (Munich region).
- **Luca Mezzalira** — cited for a micro-frontend **decision tree**.
- **Astro** — the framework: static-site generator, zero JS by default, file-based routing, `.astro` files, islands architecture, image/resource optimization, integrations, View Transitions opt-in; templates including **Starlight** (docs) and a blog template; code demoed from a public GitHub repo.
- **Tools / tech:** Vite (bundler / dev server), Node.js / npm (`npm create astro@latest`, `npm run build`, `npm run preview`), Google Lighthouse, MDX / Markdown, YAML frontmatter, React / React DOM, `.tsx`, SVG.
- **Frameworks compared / mentioned:** Next.js, Nuxt, Angular, standalone React, Gatsby, WordPress; islands can host React, Vue, Svelte, Angular, or custom components.
- **Micro-frontend approaches:** iframes, web components, module federation, native federation, framework building.
- **Concepts:** zero-JS baseline; Lighthouse scoring; static site generation vs. selective server-side rendering; `public/` verbatim copy; file-based routing (`index.astro`, `[param]`, `[...slug]` wildcard, `.js/.ts` REST endpoints with `get`/`post`); `.astro` two-section files (build-time preamble + JSX-like HTML); HTML comments; `<Astro.self>` recursion; filename-based default-export components; islands architecture; client directives (`client:load`, `client:visible`, `client:media`); hydration; shared runtime loaded once; pre-rendering vs. SPA loading spinner; View Transitions API (multi-page feels like SPA); layouts; unnamed and named `<slot>`s; image imports as objects (`.src`, caching); dev-vs-prod bundling difference in Vite; when static generation requires known parameter values vs. dynamic/SSR.

---

*Video: https://www.youtube.com/watch?v=FtW5vrGTI4Y — Transcript via yt-transcript.sh; outline generated from the transcript.*
