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
- [x] 🟡 **Verified the 2013 paper's authorship (high confidence)** — it is **Thompson, Giusti, Weber & Keiffer 2013** (Lisa C. Thompson lead), *California Fish and Game* 99(1):7-41. Corrected "Moyle et al. 2013" → "Thompson et al. 2013" across the timeline; kept the separate, real Peter Moyle "extinction by 2100" quote.
- [ ] 🟡 Host the key CDFW/USGS PDFs locally (`public/reports/`) with the official link as secondary, so the evidence base doesn't depend on fragile off-site links
- [ ] 🟡 Publish the spawner series as a downloadable, dated dataset (CSV/JSON) with a provenance column
- [ ] ⚪ Move canonical citation strings into one shared module (`lib/sources.ts`) so timeline/archive can't drift again

### Show who's behind it (biggest trust unlock)
- [x] 🔴 Built the **About / contact page** (`/about`): mission, "what this is / isn't", founders (Taylor Woodruff's WPD survey credit noted), how the data is gathered + a last-reviewed date, partners, and a contact form. Framed as an independent volunteer project.
- [x] 🔴 Added a **contact form** on /about; the (707) 263-2344 line is labeled as the Hitch Rescue Team, not the project. Form is UI-only until a backend is wired (see `NEEDS-FROM-YOU.md`).
- [x] 🔴 Hyperlinked + scoped partners on the About page (CDFW, USGS, LCWPD, Habematolel, Big Valley, Robinson), framed as work the project documents, not partnerships. (Confirm the Robinson Rancheria link — see `NEEDS-FROM-YOU.md`.)
- [x] 🟡 Stated legal status (independent volunteer/educational project) on the About page. *(Privacy policy still to add.)*
- [ ] ⚪ Link any off-site presence (socials, data repo, press) to corroborate the project exists

### Turn visitors into participants
- [x] 🔴 Added **report-a-sighting + contact form UIs** (sighting on the Get Involved section, contact on /about). Not submitting yet — backend to wire (see `NEEDS-FROM-YOU.md`).
- [ ] 🔴 Turn "Become a Community Scientist" into a guided on-ramp instead of an off-site county link
- [ ] 🟡 Season-reminder / newsletter email capture (tie to the existing spawn-countdown)
- [ ] 🟡 Decide & state the donate/funding posture; add an ESA public-comment advocacy action + social share buttons

### Make the data visual & beautiful
- [x] 🔴 Fixed the homepage "Interactive Map" — replaced the redirect-stub iframe with a clean click-through panel to `/map`
- [x] 🔴 Put the four flagship creeks' real photos on their `/creeks` cards + a cleaner "Field photo coming" empty state for the rest. (Send more creek photos to fill the others — see `NEEDS-FROM-YOU.md`.)
- [ ] 🔴 Give photos provenance (credit / date / descriptive alt / license); reconcile "WPD staff" vs "Taylor Woodruff" credits
- [x] 🟡 Added screen-reader data tables behind the population + creek spawner charts (visually hidden, so the numbers are reachable by assistive tech and crawlers).
- [x] 🟡 Differentiated the species-guide cards: each fish icon is now a tinted chip color-coded by status (native, introduced, invasive, threatened, extinct, extirpated, failed).
- [ ] 🟡 Add a hitch life-cycle / migration diagram and a schematic watershed map
- [ ] 🟡 Optimize image delivery (next/image or srcset, explicit dimensions) before the photo drop

### Elevate the visual system
- [ ] 🟡 Actually load **Geist** as the brand typeface (+ a display face for headings) — this pass only unified to the system font; wiring Geist needs a build check
- [ ] 🟡 Consolidate color tokens into one source of truth (rename the `--muted` collision that forces every page to re-fork the palette)
- [x] 🟡 Hero fish photo now shows on mobile. *(Unifying the hero type scale across pages still to do.)*
- [ ] ⚪ Stop rendering qualitative words ("Multiple", "#2") in the big-number stat style

### Wayfinding & discoverability
- [x] 🔴 Added homepage deep-links: a Creeks card in quick-access, a "Full timeline" link under the population chart, and a footer nav across all pages.
- [ ] 🟡 Add breadcrumbs / "related" strips to the dead-end /timeline, /archive, /map; add a navigational footer
- [x] 🟡 Added `schema.org` Organization JSON-LD site-wide. *(Still to do: per-page OG images, Dataset/BreadcrumbList JSON-LD, splitting the client-only /timeline for its own metadata, and the map's single-underscore `replace` bug.)*

### Content gaps & audiences
- [x] 🔴 Added an FAQ, glossary, and "how to identify the Clear Lake hitch" guide at `/faq` (linked in nav)
- [ ] 🔴 Tell the Pomo/cultural story with attributed Tribal voice + links (replace the repeated "since time immemorial" line)
- [ ] 🟡 Lead the hero with the stakes (96% decline / county emergency), not taxonomy
- [ ] 🟡 Audience surfaces (researcher data path, angler legality/safety, educator fact sheet, press kit); Spanish core safety/rescue content

### Accessibility & polish
- [ ] 🟡 Keyboard + screen-reader access for the Fish Guide modal & chart expanders (reuse the PhotoLightbox pattern); label the map SVG; fix hero heading order (h1→h2)
- [x] ⚪ Raised the footer disclaimer contrast (12px + higher opacity).

---

*Audit method: multi-agent review across credibility, authority, visual design, imagery/data-viz, content, navigation, engagement, and technical/SEO/a11y dimensions, plus skeptic-scientist / design-director / completeness-critic perspectives.*
