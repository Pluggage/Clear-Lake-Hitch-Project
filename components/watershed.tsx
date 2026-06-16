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
  { name: "Rodman Slough", status: "active", shore: "North shore", x: 262, y: 100, lx: 285, ly: 80, ta: "start" },
  { name: "Middle Creek", status: "quiet", shore: "North shore", x: 150, y: 140, lx: 118, ly: 140, ta: "end" },
  { name: "Hendricks Creek", status: "active", shore: "North shore", x: 355, y: 128, lx: 380, ly: 112, ta: "start" },
  { name: "Forbes Creek", status: "active", shore: "West shore", x: 158, y: 248, lx: 118, ly: 250, ta: "end" },
  { name: "Copsey Creek", status: "active", shore: "East shore", x: 618, y: 248, lx: 642, ly: 244, ta: "start" },
  { name: "Seigler Canyon", status: "concern", shore: "East shore", x: 602, y: 352, lx: 628, ly: 356, ta: "start" },
  { name: "Burns Valley Creek", status: "active", shore: "South shore", x: 236, y: 318, lx: 204, ly: 330, ta: "end" },
  { name: "Kelsey Creek", status: "active", shore: "South shore", x: 300, y: 348, lx: 296, ly: 374, ta: "middle" },
  { name: "Adobe Creek", status: "active", shore: "South shore", x: 372, y: 366, lx: 372, ly: 398, ta: "middle" },
  { name: "Manning Creek", status: "active", shore: "South shore", x: 430, y: 392, lx: 412, ly: 420, ta: "middle" },
  { name: "Cole Creek", status: "restore", shore: "South shore", x: 486, y: 380, lx: 470, ly: 450, ta: "middle" },
]

const ARMS = [
  { t: "Upper Arm", x: 250, y: 185 },
  { t: "Main Lake", x: 380, y: 240 },
  { t: "Oaks Arm", x: 560, y: 215 },
  { t: "Lower Arm", x: 592, y: 398 },
]

const LAKE_PATH =
  "M 132.0,150.0 C 140.3,134.2 174.5,108.3 200.0,100.0 C 225.5,91.7 258.3,94.2 285.0,100.0 C 311.7,105.8 335.8,126.7 360.0,135.0 C 384.2,143.3 400.0,149.2 430.0,150.0 C 460.0,150.8 507.0,135.8 540.0,140.0 C 573.0,144.2 606.0,161.7 628.0,175.0 C 650.0,188.3 674.7,207.5 672.0,220.0 C 669.3,232.5 637.3,245.8 612.0,250.0 C 586.7,254.2 542.3,243.0 520.0,245.0 C 497.7,247.0 473.3,252.8 478.0,262.0 C 482.7,271.2 526.0,285.3 548.0,300.0 C 570.0,314.7 594.3,330.8 610.0,350.0 C 625.7,369.2 645.7,400.0 642.0,415.0 C 638.3,430.0 608.3,440.8 588.0,440.0 C 567.7,439.2 539.7,421.3 520.0,410.0 C 500.3,398.7 485.0,375.7 470.0,372.0 C 455.0,368.3 446.3,390.0 430.0,388.0 C 413.7,386.0 393.7,368.0 372.0,360.0 C 350.3,352.0 322.8,348.0 300.0,340.0 C 277.2,332.0 253.3,322.0 235.0,312.0 C 216.7,302.0 201.2,292.8 190.0,280.0 C 178.8,267.2 174.7,249.2 168.0,235.0 C 161.3,220.8 156.0,209.2 150.0,195.0 C 144.0,180.8 123.7,165.8 132.0,150.0 Z"

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
