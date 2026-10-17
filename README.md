# Tiny Tots Daycare — demo site

A client pitch demo for **Tiny Tots Daycare (DHA Lahore)**: a warm, mobile-first site where parents can ask about timings, fees, activities and admission over WhatsApp.

**Demo for:** Tiny Tots Daycare, DHA Lahore · Instagram [@tiny_tots.dha](https://instagram.com/tiny_tots.dha) · WhatsApp 0321 5544664

> Their words: *"we treat every child with the care, love and attention we would want for our own"* — *"a little home where little hearts feel safe, loved & happy."*

## Features

- Scroll-driven React Bits **Silk** hero (warm apricot in light mode), with a static gradient fallback under `prefers-reduced-motion`
- Marquee strip, scroll-reveal sections, sticky enquiry bar
- **WhatsApp enquiry widget** — parents ask about timings, fees, activities and admission; no fees or timings are stated on-page
- Mobile-first: 44px+ touch targets, alt text on all photos, visible focus rings, inline SVG icons

## Stack

Vite + React, React Bits Silk, oxlint. Static `dist` build (`base './'`), deployed on Vercel.

## Run locally

```bash
npm install
npm run dev     # local dev
npm run build   # production build into dist/
npm run lint    # oxlint
```

## Notes

- Program names and descriptions are demo copy, not the daycare's real program structure
- Photos are CC-BY stock placeholders — replace with the daycare's own photos before launch
