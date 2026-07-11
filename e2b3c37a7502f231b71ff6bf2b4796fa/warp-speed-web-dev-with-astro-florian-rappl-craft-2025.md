---
title: "Warp Speed Web Dev with Astro - Florian Rappl | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Florian Rappl introduces Astro — zero JavaScript by default, file-based routing, .astro files, the islands architecture with client directives, and near-perfect Lighthouse scores for content-heavy sites."
type: "reference"
tags: ["softwaredevelopment"]
---

# Warp Speed Web Dev with Astro - Florian Rappl (Talk Outline)

> Florian Rappl (solution architect, micro-frontends specialist) on **Astro** — a framework aimed at **content-heavy** pages that ships "blazing fast websites" and, crucially, **zero JavaScript by default**.

---

## 1. What Astro Is

- Built for content-heavy pages (shops, wikis, docs) where interactivity is the exception. **Zero JS by default** is the baseline (not the goal). Compared via Google Lighthouse, Astro tops other frameworks (Gatsby/Next/WordPress) on real-world scores. At heart a **static site generator** (but can opt into server-side rendering per page).

## 2. Project Structure & `.astro` Files

- `public/` (copied verbatim), `src/` with `package.json` (Node-based), and a `pages/` folder with **file-based routing** (`index.astro` → `/`, `posts/[post].astro` → parameter routes, `about.astro` → `/about`, `.js/.ts` files → REST endpoints exporting `get`/`post`). Astro also **optimizes images/resources**; anything non-default goes in `astro.config.mjs`.
- An **`.astro` file** has two sections: a top **preamble** (TypeScript/JS evaluated at build time — retrieve params, compute) and an **HTML section** with JSX-like `{}` expression switches but real HTML rules (HTML comments work). Components are named by filename (default export), referenced with `<Astro.self>` for recursion; **named slots** supported.

## 3. The Islands Architecture

- Identify static vs. interactive parts; Astro **lazy-loads JavaScript** only where needed via **client directives**: `client:load` (ship JS on load), `client:visible` (ship JS only when the component scrolls into view — ideal for a below-the-fold carousel), `client:media`, etc. An island can run a **full framework component** (React/Vue/Svelte/Angular) — shared runtimes (e.g. React) load only once across islands. Also opt into the browser **View Transitions API** with one line to make a multi-page site feel like an SPA.

## 4. Live Demo Takeaways

- `npm create astro@latest` scaffolds (Starlight docs template supports MDX/Markdown with YAML frontmatter). **Dev vs. prod matters:** the Vite dev server doesn't bundle (looks like lots of JS, Lighthouse ~84); after `npm run build` + `npm run preview` you see minimal JS and a **Lighthouse ~100**. Demonstrated `client:load` vs. no directive (button renders but is dead with zero JS) vs. `client:visible` (JS loads only on scroll, but content is **pre-rendered** — no loading spinner like a classic React SPA).
- Q&A: micro-frontend choice (iframes/web components/module federation/native federation) is **project-specific** (iframes for external/isolated like ads, not internal); you can't fully opt out of file-based routing but can use a `[...slug]` wildcard (which pushes you toward SSR/dynamic since static generation needs known params); **avoid Astro** when you already know you want a fully dynamic React SPA — it shines for **to-the-point** pages (a meetup/conference page, with a React admin hooked in via islands).

---

*Video: https://www.youtube.com/watch?v=FtW5vrGTI4Y — Transcript via yt-transcript.sh; outline generated from the transcript.*
