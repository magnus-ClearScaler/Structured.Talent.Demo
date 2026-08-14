# Structured Talent — front page rebuild

A ClearScaler demo rebuild of the **structuredtalent.com** homepage for Harm
Linnecke. Front page only.

- Live: https://structured-talent-demo.vercel.app (password `120226`)
- Repo: https://github.com/magnus-ClearScaler/Structured.Talent.Demo
- Stack: Next.js 16 (App Router, Turbopack), Tailwind v4, TypeScript
- Dev: `npm run dev` on port 3420

## Structure

The page is a fork, not a pitch. Two entirely different people arrive here and
the current site makes them read each other's copy.

1. **Hero** — the headline, then two doors: *I'm hiring* and *I'm a seller*
2. **Markets band** — where the roles and the searches actually sit
3. **For candidates** — markets, what they get, four steps, send-a-CV
4. **For companies** — the three failure modes, three services, engagement models
5. **The salary is the small number** — three taps, one number
6. **Playbook** — the fourteen-section contents, set like the document
7. **Founder** — the portrait, the story, where the quota was carried
8. **FAQ** — split by audience
9. **Close** — the same two doors, plus email, phone and LinkedIn

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
- Three client components only: the header menu, the cost model, and the
  scroll reveal
- Two images, both WebP, 37 KB and 14 KB
- No icon package, no animation library, no UI kit

## Needs the client's input before going live

- The fourteen playbook contents in `components/home/Playbook.tsx` are
  representative. Four of them are named on the live site; the rest should be
  swapped for Harm's real table of contents.
- The founder portrait is the image already published on structuredtalent.com,
  cropped. A real photograph would be better.
- The cost model's assumptions (half output during ramp, mis-hire cost at 0.75×
  base plus lost ramp) are conservative and defensible, but they are ours. Worth
  agreeing them with Harm before the page is public.
