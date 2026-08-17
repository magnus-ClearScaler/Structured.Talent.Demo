# Structured Talent — front page rebuild

A ClearScaler demo rebuild of the **structuredtalent.com** homepage for Harm
Linnecke. Front page only.

- Live: https://structured-talent-demo.vercel.app (password `120226`)
- Repo: https://github.com/magnus-ClearScaler/Structured.Talent.Demo
- Stack: Next.js 16 (App Router, Turbopack), Tailwind v4, TypeScript
- Dev: `npm run dev` on port 3420

## The design

Restrained and plain, because that is Harm's register. His own LinkedIn headline
reads "Business Development@ Google Chrome | Fitness & Cycling Enthusiast |
Sales Mentor", and his site says "No forms, no funnels. Just email me directly."

- **One typeface.** Newsreader sets the display and the body. No second display
  face, no mono for labels.
- **Headings do not change font or colour halfway through a sentence.** One
  face, one weight, one colour, all the way down.
- **Labels are plain small text in sentence case** — not tracked-out uppercase,
  not a coloured eyebrow chip.
- **Rules instead of boxes.** The markets, the services, the steps, the ledger
  and the FAQ are all ruled lists with hanging labels.
- **Two grounds, one metal.** Paper and ink carry the page; gold is a hairline,
  a link underline and a step number.
- **Copy is his.** Where he already had a line, his wording stands, contractions
  included. The standfirst is first person because he writes in first person.

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
  cropped. A real photograph would be better.
- The cost model's assumptions (half output during ramp, mis-hire cost at 0.75×
  base plus lost ramp) are conservative and defensible, but they are ours. Worth
  agreeing them with Harm before the page is public.
