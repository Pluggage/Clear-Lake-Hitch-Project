import Link from "next/link"

type Status = "active" | "restore" | "concern" | "quiet"

const STATUS: Record<Status, string> = {
  active: "#2d7a3a",
  restore: "#c87800",
  concern: "#c0392b",
  quiet: "#9aa3ad",
}

type Shore = { dir: string; tribs: { name: string; status: Status }[] }

const north: Shore = {
  dir: "North shore",
  tribs: [
    { name: "Scotts Creek", status: "active" },
    { name: "Rodman Slough", status: "active" },
    { name: "Hendricks Creek", status: "active" },
    { name: "Middle Creek", status: "quiet" },
  ],
}
const west: Shore = {
  dir: "West shore",
  tribs: [{ name: "Forbes Creek", status: "active" }],
}
const east: Shore = {
  dir: "East shore",
  tribs: [
    { name: "Copsey Creek", status: "active" },
    { name: "Seigler Canyon", status: "concern" },
  ],
}
const south: Shore = {
  dir: "South shore",
  tribs: [
    { name: "Kelsey Creek", status: "active" },
    { name: "Adobe Creek", status: "active" },
    { name: "Manning Creek", status: "active" },
    { name: "Burns Valley Creek", status: "active" },
    { name: "Cole Creek", status: "restore" },
  ],
}

function ShoreCard({ shore }: { shore: Shore }) {
  return (
    <div className="border border-[var(--border-color)] rounded-xl p-3 bg-white">
      <div className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--lake-dark)" }}>
        {shore.dir}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {shore.tribs.map((t) => (
          <span
            key={t.name}
            className="inline-flex items-center gap-1.5 text-xs rounded-full border border-[var(--border-color)] px-2 py-0.5"
          >
            <span className="w-2 h-2 rounded-full shrink-0" style={{ background: STATUS[t.status] }} aria-hidden="true" />
            {t.name}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Watershed() {
  const legend: [Status, string][] = [
    ["active", "Active spawning"],
    ["restore", "Restoration"],
    ["concern", "Concern"],
    ["quiet", "Feeder / quiet"],
  ]
  return (
    <section id="watershed" className="py-20 px-4 md:px-8 bg-[var(--sand)]">
      <div className="max-w-[1100px] mx-auto">
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-[var(--lake)] bg-[var(--lake-light)] px-3 py-1 rounded-full mb-4">
          Watershed
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-2">The Clear Lake watershed at a glance</h2>
        <p className="text-[var(--muted-color)] text-base max-w-[650px] mb-8 leading-relaxed">
          Tributary creeks ring the lake, and the hitch runs up them to spawn each spring. Color shows recent spawning
          status. For the full interactive view, open the{" "}
          <Link href="/map" className="text-[var(--lake)] font-semibold hover:underline">tributary map</Link>.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-stretch max-w-[860px]">
          <div className="hidden sm:block" />
          <ShoreCard shore={north} />
          <div className="hidden sm:block" />

          <ShoreCard shore={west} />
          <div
            className="rounded-xl flex flex-col items-center justify-center text-center p-4 text-white min-h-[88px]"
            style={{ background: "linear-gradient(135deg, var(--lake), var(--lake-dark))" }}
          >
            <div className="text-lg font-bold">Clear Lake</div>
            <div className="text-xs text-white/80">California&apos;s largest natural lake</div>
          </div>
          <ShoreCard shore={east} />

          <div className="hidden sm:block" />
          <ShoreCard shore={south} />
          <div className="hidden sm:block" />
        </div>

        <div className="flex flex-wrap gap-4 mt-5 text-xs text-[var(--muted-color)]">
          {legend.map(([s, label]) => (
            <span key={s} className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full" style={{ background: STATUS[s] }} aria-hidden="true" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
