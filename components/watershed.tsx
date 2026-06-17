import Link from "next/link"
import { ArrowRight } from "lucide-react"

type Status = "active" | "restore" | "concern" | "quiet"
type Shore = "North shore" | "West shore" | "East shore" | "South shore"

const STATUS_COLOR: Record<Status, string> = {
  active: "#2d7a3a",
  restore: "#c87800",
  concern: "#c0392b",
  quiet: "#9aa3ad",
}
const STATUS_LABEL: Record<Status, string> = {
  active: "Active spawning",
  restore: "Restoration",
  concern: "Concern",
  quiet: "Feeder / quiet",
}

type Creek = {
  name: string
  status: Status
  shore: Shore
  x: number
  y: number
  // label anchor
  lx: number
  ly: number
  ta: "start" | "middle" | "end"
}

// Positions are placed around a stylized Clear Lake silhouette (viewBox below),
// grouped by the shore each tributary drains into.
const CREEKS: Creek[] = [
  { name: "Scotts Creek", status: "active", shore: "North shore", x: 188, y: 104, lx: 188, ly: 84, ta: "middle" },
  { name: "Rodman Slough", status: "active", shore: "North shore", x: 278, y: 108, lx: 300, ly: 92, ta: "start" },
  { name: "Middle Creek", status: "quiet", shore: "North shore", x: 150, y: 150, lx: 120, ly: 150, ta: "end" },
  { name: "Hendricks Creek", status: "active", shore: "North shore", x: 372, y: 132, lx: 396, ly: 120, ta: "start" },
  { name: "Forbes Creek", status: "active", shore: "West shore", x: 142, y: 236, lx: 116, ly: 240, ta: "end" },
  { name: "Copsey Creek", status: "active", shore: "East shore", x: 636, y: 232, lx: 660, ly: 228, ta: "start" },
  { name: "Seigler Canyon", status: "concern", shore: "East shore", x: 590, y: 392, lx: 614, ly: 392, ta: "start" },
  { name: "Burns Valley Creek", status: "active", shore: "South shore", x: 250, y: 318, lx: 222, ly: 332, ta: "end" },
  { name: "Kelsey Creek", status: "active", shore: "South shore", x: 318, y: 342, lx: 312, ly: 368, ta: "middle" },
  { name: "Adobe Creek", status: "active", shore: "South shore", x: 392, y: 362, lx: 392, ly: 388, ta: "middle" },
  { name: "Manning Creek", status: "active", shore: "South shore", x: 452, y: 384, lx: 452, ly: 410, ta: "middle" },
  { name: "Cole Creek", status: "restore", shore: "South shore", x: 506, y: 408, lx: 512, ly: 432, ta: "middle" },
]

const ARMS = [
  { t: "Upper Arm", x: 248, y: 190 },
  { t: "Main Lake", x: 398, y: 250 },
  { t: "Oaks Arm", x: 578, y: 208 },
  { t: "Lower Arm", x: 558, y: 372 },
]

const LAKE_PATH =
  "M 150,120 C 165,95 205,86 248,92 C 295,98 330,122 372,132 C 430,146 486,126 538,132 C 592,138 642,158 660,196 C 670,216 660,232 636,242 C 600,256 560,252 524,258 C 505,270 486,266 478,280 C 472,294 492,300 512,312 C 545,332 575,360 592,398 C 604,420 598,436 578,440 C 552,444 520,426 496,412 C 462,392 430,374 392,362 C 340,346 286,332 240,312 C 198,294 162,272 144,240 C 130,212 126,176 134,150 C 138,136 142,128 150,120 Z"

const SHORES: Shore[] = ["North shore", "West shore", "East shore", "South shore"]

export function Watershed() {
  return (
    <section id="watershed" className="py-20 px-4 md:px-8 bg-[var(--sand)]">
      <div className="max-w-[1100px] mx-auto">
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-[var(--lake)] bg-[var(--lake-light)] px-3 py-1 rounded-full mb-4">
          Watershed
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-2">The Clear Lake watershed at a glance</h2>
        <p className="text-[var(--muted-color)] text-base max-w-[650px] mb-8 leading-relaxed">
          A dozen tributary creeks ring California&apos;s largest natural lake, and each spring the hitch run up them to
          spawn. Dots mark where the creeks meet the lake, colored by recent spawning status. For the full interactive
          view, open the{" "}
          <Link href="/map" className="text-[var(--lake)] font-semibold hover:underline">
            tributary map
          </Link>
          .
        </p>

        {/* Stylized map — the whole panel links through to the interactive map */}
        <Link
          href="/map"
          aria-label="Open the interactive tributary map"
          className="group relative block max-w-[920px] mx-auto rounded-2xl"
        >
          <svg
            viewBox="-34 -16 800 506"
            className="w-full h-auto block"
            style={{ fontFamily: "inherit" }}
            role="img"
            aria-label="Map of Clear Lake showing its spawning tributaries grouped by shore, colored by spawning status."
          >
            <defs>
              <radialGradient id="ws-water" cx="42%" cy="38%" r="75%">
                <stop offset="0%" stopColor="#3f9bd4" />
                <stop offset="55%" stopColor="#1a6fa8" />
                <stop offset="100%" stopColor="#0d4a72" />
              </radialGradient>
              <filter id="ws-shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#0d4a72" floodOpacity="0.22" />
              </filter>
            </defs>

            {/* faint contour rings */}
            <ellipse cx="400" cy="270" rx="340" ry="215" fill="none" stroke="#1a6fa8" strokeWidth="1" opacity="0.06" />
            <ellipse cx="400" cy="270" rx="280" ry="175" fill="none" stroke="#1a6fa8" strokeWidth="1" opacity="0.06" />

            {/* lake */}
            <path d={LAKE_PATH} fill="url(#ws-water)" stroke="#7fd8ff" strokeWidth="1.5" filter="url(#ws-shadow)" />
            <path d={LAKE_PATH} fill="none" stroke="#bfe6ff" strokeWidth="1" opacity="0.35" />

            {ARMS.map((a) => (
              <text
                key={a.t}
                x={a.x}
                y={a.y}
                textAnchor="middle"
                fontSize="13"
                fontStyle="italic"
                fill="#cfeaff"
                opacity="0.9"
                letterSpacing="0.5"
                aria-hidden="true"
              >
                {a.t}
              </text>
            ))}

            {CREEKS.map((c, i) => (
              <g key={c.name}>
                {c.status === "active" && (
                  <circle
                    className="ws-halo"
                    cx={c.x}
                    cy={c.y}
                    r="11"
                    fill={STATUS_COLOR[c.status]}
                    style={{ animationDelay: `${(i % 5) * 0.4}s` }}
                  />
                )}
                <circle cx={c.x} cy={c.y} r="5.5" fill={STATUS_COLOR[c.status]} stroke="#fff" strokeWidth="2" />
                <text
                  x={c.lx}
                  y={c.ly}
                  textAnchor={c.ta}
                  fontSize="13"
                  fontWeight="600"
                  paintOrder="stroke"
                  strokeWidth="3"
                  style={{ fill: "var(--text)", stroke: "var(--sand)" }}
                  aria-hidden="true"
                >
                  {c.name}
                </text>
              </g>
            ))}
          </svg>

          {/* hover hint */}
          <span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-[var(--lake-dark)] text-white text-xs font-semibold px-3 py-1.5 opacity-85 shadow-sm transition-transform group-hover:translate-x-0.5">
            Explore the full map <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </span>
        </Link>

        {/* Screen-reader equivalent of the map data */}
        <div className="sr-only">
          <h3>Tributaries by shore</h3>
          {SHORES.map((shore) => (
            <div key={shore}>
              <h4>{shore}</h4>
              <ul>
                {CREEKS.filter((c) => c.shore === shore).map((c) => (
                  <li key={c.name}>
                    {c.name} — {STATUS_LABEL[c.status]}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-6 text-xs text-[var(--muted-color)]">
          {(Object.keys(STATUS_LABEL) as Status[]).map((s) => (
            <span key={s} className="inline-flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: STATUS_COLOR[s] }} aria-hidden="true" />
              {STATUS_LABEL[s]}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
