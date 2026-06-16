# Clear Lake Hitch Project — Improvement Checklist

From a full credibility + design audit (June 2026). Starting scores: **credibility 5/10**, **visual polish 6/10**. The core finding: the substance already exists (sourced archive, live USGS data, real photos, good a11y baseline) — the work is mostly wiring and cleanup, not new research.

Check items off as they ship. Priorities: 🔴 high · 🟡 medium · ⚪ low.

---

## ✅ Completed — June 2026 (quick wins + data credibility)

**Killed the "auto-generated demo" tells**
- [x] Removed `generator: 'v0.app'` meta tag (`app/layout.tsx`)
- [x] Replaced the Vercel/v0 "N" favicon with the project fish mark — new `app/icon.svg` + generated `app/apple-icon.tsx`; deleted `public/icon.svg`; removed the 3 references that 404'd

**Fixed wrong / contradictory data**
- [x] Rewrote the false Burns & Forbes spawner tables (they were copied from Kelsey and claimed "ALL 1,672 here / Kelsey only" on the wrong creek). Kelsey's row left intact — it's true.
- [x] Ended the "22 vs 27" contradiction — counts now derive from `creeks.length` (27); priority count unified to `PRIORITY.size` (9), and Scotts Creek added to the priority chart so chart = filter = badge = 9
- [x] Cyanobacteria card no longer reads as "LIVE" — labeled "Seasonal outlook (typical pattern), not a live reading" (live USGS gauges keep the LIVE badge)

**Wired up the data credibility**
- [x] Added a source line under the homepage population chart and the creek spawner charts → links to the Archive + USGS OFR 2025-1018
- [x] Methodology clarifier folded in (visual spawner counts ≠ USGS gillnet relative-abundance behind the "96% decline")
- [x] Corrected the USFWS citation → **90 FR 4916 (Jan 16, 2025)** with the correct Federal Register URL (was "90 FR 5702" + wrong link)
- [x] Corrected the 2013 review's journal → **California Fish and Game 99(1):7-41** (was "Western North American Naturalist")
- [x] Data-currency note ("through the 2025 season") on the charts

**Wayfinding**
- [x] Repointed dead "Explore Nearby" links (`/cole.html`, `/manning.html`, `/adobe.html`, `/seigler-system.html`) to real routes
- [x] Fixed the stale `/archive.html?q=…` buttons → `/archive?q=…` (Burns space encoded)

**Visual consistency**
- [x] Removed the hard-coded `Segoe UI` font overrides across 9 files so every page uses one consistent font

---

## ⬜ Remaining

### Prove the data
- [ ] 🟡 **Verify the 2013 paper's authorship** — it's cited as "Moyle et al. 2013" in ~6 places, but the lead author of *California Fish and Game* 99(1):7-41 may be **Thompson** (Lisa C. Thompson). If so, change "Moyle et al." → "Thompson et al." (or "Thompson, Moyle et al."). Journal/volume already corrected.
- [ ] 🟡 Host the key CDFW/USGS PDFs locally (`public/reports/`) with the official link as secondary, so the evidence base doesn't depend on fragile off-site links
- [ ] 🟡 Publish the spawner series as a downloadable, dated dataset (CSV/JSON) with a provenance column
- [ ] ⚪ Move canonical citation strings into one shared module (`lib/sources.ts`) so timeline/archive can't drift again

### Show who's behind it (biggest trust unlock)
- [ ] 🔴 Build an **About / Who-We-Are** page (mission, named bios + qualifications, what the project is/isn't; disclose that a project member is also a cited LCWPD survey author)
- [ ] 🔴 Add a real **contact + "submit a correction"** channel; label the (707) 263-2344 number / 255 N. Forbes St. address as Lake County's, not the project's
- [ ] 🔴 Hyperlink and accurately scope named partners (Robinson Rancheria, Habematolel Pomo, Big Valley Rancheria, CDFW, USGS, LCWPD) — don't imply partnership/endorsement that doesn't exist
- [ ] 🟡 State legal/funding status (volunteer vs nonprofit) and add a privacy policy (Vercel Analytics loads in prod)
- [ ] ⚪ Link any off-site presence (socials, data repo, press) to corroborate the project exists

### Turn visitors into participants
- [ ] 🔴 Add a working **"Report a Hitch Sighting"** form + a contact form (Formspree/Netlify/Google Form — no backend needed)
- [ ] 🔴 Turn "Become a Community Scientist" into a guided on-ramp instead of an off-site county link
- [ ] 🟡 Season-reminder / newsletter email capture (tie to the existing spawn-countdown)
- [ ] 🟡 Decide & state the donate/funding posture; add an ESA public-comment advocacy action + social share buttons

### Make the data visual & beautiful
- [ ] 🔴 Fix the homepage "Interactive Map" — it currently iframes a redirect stub; use a real embed or a thumbnail + "Open the map" button
- [ ] 🔴 Put the **real creek photos** on the cards + design a proper empty state for the rest *(photos in hand)*
- [ ] 🔴 Give photos provenance (credit / date / descriptive alt / license); reconcile "WPD staff" vs "Taylor Woodruff" credits
- [ ] 🟡 Add screen-reader data tables behind the charts (numbers are currently locked in divs)
- [ ] 🟡 Differentiate the species-guide icons by status/family (39 identical fish icons today)
- [ ] 🟡 Add a hitch life-cycle / migration diagram and a schematic watershed map
- [ ] 🟡 Optimize image delivery (next/image or srcset, explicit dimensions) before the photo drop

### Elevate the visual system
- [ ] 🟡 Actually load **Geist** as the brand typeface (+ a display face for headings) — this pass only unified to the system font; wiring Geist needs a build check
- [ ] 🟡 Consolidate color tokens into one source of truth (rename the `--muted` collision that forces every page to re-fork the palette)
- [ ] 🟡 Show the hero fish photo on mobile (`hidden md:flex` today); unify hero type scale across pages
- [ ] ⚪ Stop rendering qualitative words ("Multiple", "#2") in the big-number stat style

### Wayfinding & discoverability
- [ ] 🔴 Add deep links from the homepage into its own best content (a Creeks CTA, timeline → /archive, etc.)
- [ ] 🟡 Add breadcrumbs / "related" strips to the dead-end /timeline, /archive, /map; add a navigational footer
- [ ] 🟡 Per-page metadata + OG/social cards; `schema.org` JSON-LD (Organization, Dataset, BreadcrumbList); split the client-only /timeline so it gets real metadata; fix the map's single-underscore `replace`

### Content gaps & audiences
- [ ] 🔴 Add an FAQ, a glossary, and a "how to identify the Clear Lake hitch" guide (also a legal/safety gap for a protected fish)
- [ ] 🔴 Tell the Pomo/cultural story with attributed Tribal voice + links (replace the repeated "since time immemorial" line)
- [ ] 🟡 Lead the hero with the stakes (96% decline / county emergency), not taxonomy
- [ ] 🟡 Audience surfaces (researcher data path, angler legality/safety, educator fact sheet, press kit); Spanish core safety/rescue content

### Accessibility & polish
- [ ] 🟡 Keyboard + screen-reader access for the Fish Guide modal & chart expanders (reuse the PhotoLightbox pattern); label the map SVG; fix hero heading order (h1→h2)
- [ ] ⚪ Raise the 11px / 35%-opacity legal disclaimer to meet WCAG AA contrast

---

*Audit method: multi-agent review across credibility, authority, visual design, imagery/data-viz, content, navigation, engagement, and technical/SEO/a11y dimensions, plus skeptic-scientist / design-director / completeness-critic perspectives.*
