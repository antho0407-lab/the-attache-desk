# The Attaché Desk

A static editorial website — practical city guides for diplomats, consular staff and
international officials moving between postings. Built with [Astro](https://astro.build),
Markdown content, no CMS. Designed to be hosted on Netlify with the repository on GitHub.

---

## ⚠️ Read this first: content status

**The written content in this site is honest editorial scaffolding, not verified reference material.**

To keep things truthful, every guide and Brief post is structured and accurate *at a general
level*, but each hard fact — figures, fees, legal thresholds, named procedures, deadlines — is
deliberately **flagged inline** with markers like:

- `*[Verify: ...]*`
- `*[Confirm with your mission.]*`

These markers are intentional. They mark exactly the points that must be researched and sourced
before anything is published. Nothing was invented to look authoritative.

A few genuinely stable facts *are* stated plainly (e.g. the Vienna Convention on Diplomatic
Relations 1961, the Vienna Convention on Consular Relations 1963, the EU-wide emergency number
112). Everything posting-specific needs confirmation.

**`/legal-terms` is a plain-language template, not legal advice.** It contains `[Operator name]`
and similar placeholders and must be reviewed by qualified counsel before going live.

Before publishing, do a pass for `[Verify`, `[Confirm`, and `[Operator` across `src/content/`
and `src/pages/legal-terms.astro` and resolve every one.

---

## Tech stack

- **Astro 5** — static site generator, zero JS shipped by default
- **Markdown content collections** — guides and Brief posts are plain `.md` files
- **Custom CSS design system** — no framework, in `src/styles/global.css`
- **Google Fonts** — Libre Caslon Display, Newsreader, IBM Plex Mono

## Local development

You need [Node.js](https://nodejs.org) v18.20.8+, v20.3.0+, or v22+ (the project targets v22).

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:4321
npm run build    # build the static site into dist/
npm run preview  # preview the built site locally
```

## Folder structure

```
the-attache-desk/
├── public/                     # static assets served as-is (favicon, etc.)
├── src/
│   ├── components/             # Header, Footer, Meridians (decorative SVG)
│   ├── content/
│   │   ├── guides/             # one .md per city guide
│   │   └── brief/              # one .md per Brief post
│   ├── data/
│   │   └── cities.ts           # the list of posting cities + status
│   ├── layouts/
│   │   └── BaseLayout.astro    # shared <head>, header, footer
│   ├── pages/                  # routes (file-based routing)
│   │   ├── index.astro                       # homepage
│   │   ├── about.astro
│   │   ├── legal-terms.astro
│   │   ├── guides-by-city/
│   │   │   ├── index.astro                    # all cities
│   │   │   └── [city]/
│   │   │       ├── index.astro                # one city, its guides
│   │   │       └── [guide].astro              # one guide
│   │   └── the-brief/
│   │       ├── index.astro                    # all posts
│   │       └── [slug].astro                   # one post
│   ├── styles/
│   │   └── global.css          # the whole design system
│   └── content.config.ts       # content collection schemas (Zod)
├── astro.config.mjs
├── netlify.toml                # Netlify build + headers config
└── package.json
```

## Adding or editing content

### A city guide

Create a file in `src/content/guides/`, e.g. `geneva-vehicles.md`:

```markdown
---
title: "Vehicles in Geneva"
city: "geneva"                # must match a slug in src/data/cities.ts
category: "vehicles"          # living | vehicles | schools | security
categoryLabel: "Vehicles"
summary: "One-sentence summary shown in listings."
reviewed: "2026-06-09"        # ISO date — keep the quotes
ref: "CH·VEH·01"              # the mono file reference shown on the cover sheet
order: 2                      # sort order within the city (living=1, vehicles=2, …)
status: "published"           # only "published" guides are built
---

Your Markdown body here. Use the inline verification markers for any hard fact:
the registration window is *[Verify: confirm number of days]* days from arrival.
```

The guide automatically appears at `/guides-by-city/<city>/<category>/`, in that city's
index, and (if it matches a featured slot) on the homepage.

### A Brief post

Create a file in `src/content/brief/`, e.g. `settling-in-vienna.md`:

```markdown
---
title: "A note on settling in"
date: "2026-06-09"            # ISO date — keep the quotes
dek: "The standfirst line shown under the title."
tag: "Relocation"            # short category label
status: "published"
---

Your Markdown body here.
```

It appears at `/the-brief/<filename>/`, in the Brief index (sorted newest first), and the
three most recent posts show on the homepage.

> **Note on dates:** always wrap dates in quotes (`"2026-06-09"`). Unquoted, YAML parses them
> into Date objects and the build will fail schema validation.

### Adding a city

Edit `src/data/cities.ts`. Set `status: "active"` once a city has at least one published guide;
use `status: "soon"` to show it as "in preparation".

## Deployment

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: The Attaché Desk"
git branch -M main
git remote add origin https://github.com/<you>/the-attache-desk.git
git push -u origin main
```

### 2. Connect to Netlify

1. In Netlify: **Add new site → Import an existing project → GitHub**, pick the repo.
2. Netlify reads `netlify.toml`, so the settings prefill:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** 22 (pinned in `netlify.toml`)
3. Deploy. Every push to `main` then redeploys automatically.

Update `site` in `astro.config.mjs` to your real domain so canonical URLs and Open Graph tags
are correct.

## License / ownership

Internal project scaffold. Replace placeholders in `src/pages/legal-terms.astro` and the footer
before any public launch.
