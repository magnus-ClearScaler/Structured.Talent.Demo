# Structured Talent — front page rebuild

A ClearScaler demo rebuild of the **structuredtalent.com** homepage for Harm
Linnecke. Front page only.

- Live: https://structured-talent-demo.vercel.app (password `120226`)
- Repo: https://github.com/magnus-ClearScaler/Structured.Talent.Demo
- Stack: Next.js 16 (App Router, Turbopack), Tailwind v4, TypeScript
- Dev: `npm run dev` on port 3420

## The design

Modern, dark-led and high contrast. The previous pass was set in cream and a
serif and read as newsprint; this one is meant to read as a firm.

- **Near-black and true white.** Two grounds, no cream, no sepia. The only
  tinted surface is a light neutral grey used to separate two adjacent light
  sections.
- **Geist Sans throughout**, tight tracking, medium weights on headings. One
  family; Geist Mono appears once, inside the sample email, where a monospaced
  face is what the artefact would actually use.
- **Brass, not gold.** His accent taken deeper so it holds on both grounds
  without going yellow. Used for eyebrows, numerals and link arrows only.
- **Sharp corners everywhere.** No rounded pills, no gradients, no glow.
- **Photography is relevant to its section**, graded to a cool near-monochrome
  so nothing fights the palette: a European street where the candidate roles
  sit, an office facade where the company teams sit, Georgian Dublin beside the
  licence line. His portrait is the only image left in colour, because it is
  the only one that is actually him.
- **The playbook section shows the product, not a stock desk.** A rendered
  section of the thing itself: a real German first-touch email, correctly
  formal, with the reasoning printed underneath.

## Structure

The page is a fork, not a pitch. Two entirely different people arrive here and
the current site makes them read each other's copy.

- **Header** — wordmark, four links, one action. It does not follow you down the page.
- **Hero** — the statement and the two routes. The portrait runs full height on
  the right from `lg` up; on a phone it becomes a small byline portrait above the
  headline, cropped to head and shoulders so the face still reads at 150px.
- **Markets** — a drifting line of the markets he sold into and now hires for
- **For candidates** — where the roles sit, what he offers, four steps on ink
- **For companies** — three failure modes, three services, engagement models
- **The salary is the small number** — three taps, one number
- **The playbook** — the fourteen-section contents
- **About Harm** — the story, the track record beside it
- **Questions** — split by audience
- **Let's build your sales engine** — the same two routes, then email, phone and LinkedIn
- **Footer** — licence, city, year

The seven-slider cost calculator is gone. Sliders put the work on the visitor
and ask them to have opinions about employer on-costs before they have agreed
there is a problem. Three tapped choices and one number gets to the same
argument, and every assumption the sliders exposed is still printed underneath
as a footnote instead of a task.

## What it is built from

Every claim, number and destination on the page comes from the client's own
material: the live site copy, the `/about` page, the LinkedIn profile, and the
ClearScaler distribution audit dated 12 August 2026.

The audit scored the site **61 (C+)** overall, with **100/100 on speed** — the
fastest of twenty-eight sites measured. That number is the constraint this
rebuild works under, not something it gets to spend.

## What the rebuild fixes, from the audit

| Audit finding | Handled here |
| --- | --- |
| Two title tags; the weaker one wins | One title, written for the buyer |
| Meta description is the JobPort template's demo copy | Replaced |
| No sitemap.xml served | `app/sitemap.ts` |
| Empty robots.txt | `app/robots.ts`, points at the sitemap |
| LinkedIn shown as unclickable truncated text | Real links in the hero, founder block, contact band and footer |
| Booking links only on the homepage | All four calendars surfaced, one per intent |
| "More Templates" badge linking to webflow.com | Gone |
| OG image exported from the template | Generated from the brand palette in `app/opengraph-image.tsx` |
| No entity signals for search or AI answer engines | JSON-LD in `components/StructuredData.tsx` |

## Performance posture

The audit told them to protect the speed score, so:

- Static prerender, no data fetching, no analytics scripts
- Two client components only: the masthead menu and the cost funnel
- Two images, both WebP, 26 KB and 14 KB
- No icon package, no animation library, no UI kit
- No scroll-entrance animation. The observer version left empty boxes on a slow
  hydrate, and the CSS `view()` timeline that replaced it resolves to an
  inactive timeline inside the overflow-hidden sections, so it animated nothing.
  The page always paints its content.

## Needs the client's input before going live

- The fourteen playbook contents in `components/home/Playbook.tsx` are
  representative. Four of them are named on the live site; the rest should be
  swapped for Harm's real table of contents.
- The founder portrait is the image already published on structuredtalent.com,
  recropped to head and shoulders. A real photograph would be better.
- The four photographs (`public/img-*.webp`) are CC0 stock from Openverse
  (rawpixel and StockSnap), so no attribution is owed and commercial use is
  permitted. They are placed as atmosphere and are hidden from assistive
  technology; none of them is captioned as a specific place, because the
  sources do not reliably identify one. Before this goes live they should be
  replaced with licensed or commissioned photography.
- The cost model's assumptions (half output during ramp, mis-hire cost at 0.75×
  base plus lost ramp) are conservative and defensible, but they are ours. Worth
  agreeing them with Harm before the page is public.
