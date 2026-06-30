import { FISH } from "@/lib/fish-data"

// Counts are derived from the fish list so the headline numbers can't drift
// from the Fish Guide.
const total = FISH.length
const introduced = FISH.filter((f) => f.type === "introduced").length
const nativeLost = FISH.filter(
  (f) => f.type === "native" && (f.status === "extinct" || f.status === "extirpated"),
).length

const stats = [
  { number: String(total), label: "Fish species documented", color: "var(--lake-dark)" },
  { number: String(nativeLost), label: "Native species extinct or extirpated", color: "var(--red)" },
  { number: String(introduced), label: "Introduced species", color: "var(--amber-text)" },
  { number: "2014", label: "Year listed as threatened in California", color: "var(--lake-dark)" },
]

export function StatsBar() {
  return (
    <div className="bg-[var(--sand)] border-y border-[var(--border-color)] py-10 px-4 md:px-8">
      <div className="max-w-[1100px] mx-auto">
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-y-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center px-3 md:px-6 ${i > 0 ? "md:border-l md:border-[var(--border-color)]" : ""}`}
            >
              <dd
                className="text-4xl md:text-5xl font-bold tabular-nums leading-none"
                style={{ color: stat.color }}
              >
                {stat.number}
              </dd>
              <dt className="text-xs text-[var(--muted-color)] mt-2 leading-snug max-w-[160px] mx-auto">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
        <p className="text-[0.7rem] text-[var(--muted-color)] mt-7 text-center leading-relaxed">
          Species counts are drawn from the Clear Lake fish list in the Fish Guide, consistent with the
          fish-community review in Thompson et al. 2013 (California Fish and Game 99(1):7&ndash;41).
        </p>
      </div>
    </div>
  )
}
