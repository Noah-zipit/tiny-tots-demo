# DESIGN.md — Tiny Tots Daycare demo

## What this is
A free demo site for Tiny Tots Daycare (DHA Lahore), built to win the owner over.
She said yes to seeing a demo. Goal: make her feel this was made for her, not a template.

## Constraints (from web-design skill)
- Reference-first: pattern follows the proven purity-salon-demo (Vite + React, React Bits Silk hero, marquee, reveal animations, WhatsApp enquiry widget, sticky bar).
- 3D: React Bits Silk component (copy-paste, not hand-built), warm apricot in light mode, scroll-driven (speed + scale intensify, parallax, hero fade). Static gradient fallback under prefers-reduced-motion.
- Anti-slop: no purple/dark gradients, no pure white/black, no pill buttons (14px radius), no checkmark bullets, no "01/02/03" headers, no em dashes in copy, no fake testimonials, no fake metrics, no emojis as icons (inline SVGs only).
- Mobile-first, 44px+ touch targets, alt text on all photos, visible focus rings.

## Real facts used (nothing invented beyond these)
- Tiny Tots Daycare, DHA Lahore. Instagram @tiny_tots.dha. WhatsApp 0321 5544664.
- Their own words: "we treat every child with the care, love and attention we would want for our own" and "A little home where little hearts feel safe, loved & happy."
- Parents ask about: timings, fees, activities, admission.

## Deliberate placeholders (owner must confirm before going live)
- Program names and descriptions (Tiny Steps, Little Explorers, Daycare, Activity Hour) are demo copy, not her real program structure.
- No fees or timings are stated anywhere; the enquiry widget routes to WhatsApp for real details.
- Photos are CC-BY stock (Flickr/Openverse), not her daycare. Replace with her real photos before launch.

## Palette
Cream #FBF4E8, deep cream #F6ECDA, espresso #43301F, apricot #F2B880, coral #DE7350 / deep #B9562F, sun #F6C445, sage #7FA07A. Fraunces display + Manrope body.

## Build / deploy notes
- `npm run build` must pass. Static dist, base './'.
- Git identity MUST be Noah-zipit <noahext994@gmail.com> (repo-local) or Vercel Hobby blocks deploys.
- Repo: Noah-zipit/tiny-tots-demo, branch main.
